// Pokédex di Kanto: registro permanente delle scoperte per account (locale + Supabase).
// Nessuna chiave segreta nel client; in modalità UTENTE i dati restano temporanei.

import { allSpecies } from '../core/data.js';
const root = globalThis;
const PREFIX='pokexplorer:dex:v1:', MAX_SPECIES=151;
function validId(id){return Number.isInteger(Number(id))&&Number(id)>=1&&Number(id)<=MAX_SPECIES;}
function variantKey(id,sex,shiny){return `${Number(id)}:${sex}:${shiny?'1':'0'}`;}
const genders=['male','female','genderless'];
function validVariant(v){return validId(v?.species_id)&&genders.includes(v.sex)&&typeof v.shiny==='boolean';}
const dateValue=x=>x&&Number.isFinite(Date.parse(x))?Date.parse(x):Infinity;
function earliest(a,b){return dateValue(a)<=dateValue(b)?(a||b):(b||a);}
function mergeRow(a,b){
  if(!a)return {...b};if(!b)return {...a};
  const seen=earliest(a.first_seen_at,b.first_seen_at);
  const caught=earliest(a.first_caught_at,b.first_caught_at);
  const srcSeen=seen===b.first_seen_at?b:a;
  const srcCaught=caught===b.first_caught_at?b:a;
  return {...a,...b,first_seen_at:seen||null,first_caught_at:caught||null,
    first_seen_context:srcSeen.first_seen_context||a.first_seen_context||b.first_seen_context||null,
    first_caught_context:srcCaught.first_caught_context||a.first_caught_context||b.first_caught_context||null,
    imported_from_legacy:!!(a.imported_from_legacy||b.imported_from_legacy)};
}
let owner='local', guest=false, devPreview=false, data={species:{},variants:{},pending:[]};
const previewTimestamp = '2026-01-01T00:00:00.000Z';
function previewSpecies(id) {
  const species = allSpecies().find(s => s.id === Number(id));
  return species ? {species_id:species.id,name:species.name,first_seen_at:previewTimestamp,first_caught_at:previewTimestamp,first_seen_context:'DEV · ANTEPRIMA',first_caught_context:'DEV · ANTEPRIMA'} : null;
}
function previewVariants(id) {
  const species = allSpecies().find(s => s.id === Number(id));
  if (!species) return [];
  const sexes = species.genderRate === -1 ? ['genderless'] : species.genderRate === 0 ? ['male'] : species.genderRate === 8 ? ['female'] : ['male','female'];
  return sexes.flatMap(sex => [false,true].map(shiny => ({...previewSpecies(id),sex,shiny})));
}
function setPreview(enabled) { devPreview = enabled === true; notify(); }

let flushPromise=null, client=null, lastError=null, syncStatus='local';
function key(){return PREFIX+owner;}
function storage(){try{return root.localStorage||null;}catch(_){return null;}}
function read(){
  if(guest)return {species:{},variants:{},pending:[]};
  try{
    const parsed=JSON.parse(storage()?.getItem(key())||'null');
    if(parsed&&parsed.species&&parsed.variants&&Array.isArray(parsed.pending))return parsed;
  }catch(_){/* privacy/storage blocked */}
  return {species:{},variants:{},pending:[]};
}
function save(){if(guest)return;try{storage()?.setItem(key(),JSON.stringify(data));}catch(_){syncStatus='storage-error';}}
function notify(){try{root.dispatchEvent?.(new Event('pokex:dex-changed'));}catch(_){} }
function setOwner(id,{guestMode=false}={}){
  guest=guestMode===true;
  owner=guest?'guest':(typeof id==='string'&&/^[0-9a-f-]{36}$/i.test(id)?id:'local');
  data=read();client=null;lastError=null;syncStatus=guest?'guest':'local';notify();
}
function state(){return {owner,guest,preview:devPreview,syncStatus,lastError,pending:data.pending.length};}
function entries(){return devPreview ? {species:allSpecies().map(s=>previewSpecies(s.id)),variants:allSpecies().flatMap(s=>previewVariants(s.id))} : {species:Object.values(data.species),variants:Object.values(data.variants)};}
function counts(){if (devPreview) return {seen:151,caught:151}; const s=Object.values(data.species);return {seen:s.length,caught:s.filter(x=>!!x.first_caught_at).length};}
let guard=null;
/** Il motore impedisce la registrazione nelle run di prova (DEV MODE). */
function setRecordingGuard(fn){guard=typeof fn==='function'?fn:null;}
function record(mon,type='seen',context=''){
  if(!validId(mon?.id)||(guard&&!guard()))return false;
  const id=Number(mon.id), now=new Date().toISOString(), caught=type==='caught';
  const name=String(mon.name||'').trim().slice(0,40);
  const sex=genders.includes(mon.gender)?mon.gender:null;
  const row={species_id:id,name,first_seen_at:now,first_caught_at:caught?now:null,
    first_seen_context:String(context).slice(0,120),first_caught_context:caught?String(context).slice(0,120):null,imported_from_legacy:false};
  const old=data.species[id];data.species[id]=mergeRow(old,row);
  const shiny=mon.isShiny===true,k=sex?variantKey(id,sex,shiny):null;
  const previousVariant=k?data.variants[k]:null;
  if(sex)data.variants[k]=mergeRow(previousVariant,{...row,sex,shiny});
  // Events are durable until the RPC confirms them. Avoid queueing redundant seen
  // events once their specific variant has already been caught and persisted.
  if(!guest && owner!=='local'){
    const entry={id:now+':'+Math.random().toString(36).slice(2),species_id:id,
      sex,shiny:mon.isShiny===true,event:caught?'caught':'seen',context:String(context).slice(0,120),occurred_at:now};
    if(sex){
      // Only new discoveries and first catches need remote writes.
      if(!previousVariant || (caught&&!previousVariant.first_caught_at))data.pending.push(entry);
    }else if(caught&&!old?.first_caught_at)data.pending.push({...entry,event:'legacy'});
  }
  save();notify();scheduleSync();
  if(sex&&(!previousVariant||(caught&&!previousVariant.first_caught_at))){
    try{root.dispatchEvent?.(new CustomEvent('pokex:dex-discovery',{detail:{species_id:id,name,sex,shiny,caught}}));}catch(_){}
  }
  return true;
}
function importLegacyTeam(snapshot){
  const party=snapshot?.game?.team;
  if(!Array.isArray(party))return;
  for(const mon of party){
    if(!validId(mon?.id)||genders.includes(mon.gender))continue;
    const id=Number(mon.id);
    if(data.species[id]?.first_caught_at)continue;
    const now=new Date().toISOString();
    data.species[id]=mergeRow(data.species[id],{species_id:id,name:String(mon.name||'').slice(0,40),first_seen_at:now,first_caught_at:now,first_seen_context:'legacy-import',first_caught_context:'legacy-import',imported_from_legacy:true});
    if(!guest&&owner!=='local'&&!data.pending.some(q=>q.event==='legacy'&&q.species_id===id))data.pending.push({id:now+':legacy:'+id,species_id:id,event:'legacy'});
  }
  save();notify();scheduleSync();
}
function ingest(species,variants){
  for(const r of species||[]){if(!validId(r.species_id))continue;const id=Number(r.species_id);data.species[id]=mergeRow(data.species[id],r);}
  for(const v of variants||[]){if(!validVariant(v))continue;const k=variantKey(v.species_id,v.sex,v.shiny);data.variants[k]=mergeRow(data.variants[k],v);}
  save();notify();
}
let timer=null;
function scheduleSync(){
  if(!client||guest||owner==='local'||!data.pending.length)return;
  if(timer)clearTimeout(timer);
  timer=setTimeout(()=>{flush().catch(()=>{});},1200);
}
async function initCloud(supabaseClient){
  if(guest||owner==='local'||!supabaseClient)return;
  client=supabaseClient;syncStatus='loading';notify();
  try{
    const [s,v]=await Promise.all([
      client.from('pokexplorer_dex_species').select('species_id,first_seen_at,first_caught_at,first_seen_context,first_caught_context,imported_from_legacy'),
      client.from('pokexplorer_dex_variants').select('species_id,sex,shiny,first_seen_at,first_caught_at,first_seen_context,first_caught_context')
    ]);
    if(s.error)throw s.error;if(v.error)throw v.error;
    ingest(s.data,v.data);syncStatus='synchronized';lastError=null;notify();await flush();
  }catch(err){syncStatus='error';lastError=String(err?.message||err).slice(0,180);notify();throw err;}
}
async function flush(){
  if(flushPromise)return flushPromise;
  if(!client||guest||owner==='local'||!data.pending.length)return;
  flushPromise=(async()=>{
    syncStatus='syncing';notify();
    const activeOwner=owner;
    try{
      while(data.pending.length&&owner===activeOwner){
        const event=data.pending[0];
        const args=event.event==='legacy'?{p_species_id:event.species_id}:{
          p_species_id:event.species_id,p_sex:event.sex,p_shiny:event.shiny,p_event:event.event,
          p_context:event.context||null,p_occurred_at:event.occurred_at||null};
        const fn=event.event==='legacy'?'pokexplorer_import_legacy_species':'pokexplorer_record_dex_event';
        const {error}=await client.rpc(fn,args);
        if(error)throw error;
        if(owner!==activeOwner)break;
        if(data.pending[0]?.id===event.id)data.pending.shift();
        save();
      }
      syncStatus='synchronized';lastError=null;
    }catch(err){syncStatus='error';lastError=String(err?.message||err).slice(0,180);throw err;}
    finally{notify();}
  })().finally(()=>{flushPromise=null;});
  return flushPromise;
}
function getSpecies(id){return devPreview ? previewSpecies(id) : data.species[Number(id)]||null;}
function getVariants(id){return devPreview ? previewVariants(id) : Object.values(data.variants).filter(v=>Number(v.species_id)===Number(id));}
if(root.addEventListener){
  root.addEventListener('online',()=>scheduleSync());
  root.addEventListener('visibilitychange',()=>{if(!root.document?.hidden)scheduleSync();});
}

export {setOwner,setPreview,state,entries,counts,record,setRecordingGuard,importLegacyTeam,ingest,initCloud,flush,getSpecies,getVariants,mergeRow,variantKey};
