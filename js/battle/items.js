// Strumenti: cure, Elisir, Capsula Abilità, caramelle DEV e Poké Ball.
// Probabilità di cattura con la formula moderna: PS mancanti, tasso di cattura della specie
// e stati alterati. Il tasso minimo (MIN_CAPTURE_RATE) rende possibili i leggendari
// anche senza Ultra Ball, che non esistono in questa avventura.
import * as Abilities from '../core/abilities.js';
import { ITEMS, itemLabel, STONE_EVOLUTIONS } from '../core/constants.js';
import { abilityData, abilityName, speciesData, pokemonSprite } from '../core/data.js';
import * as Objectives from '../systems/objectives.js';
import * as Dex from '../systems/pokedex.js';

const MIN_CAPTURE_RATE = 45;
export function captureChance(wild) {
  const rate = Math.max(MIN_CAPTURE_RATE, speciesData(wild.id)?.captureRate ?? 45);
  const status = ['sleep', 'freeze'].includes(wild.status) ? 2.5 : wild.status ? 1.5 : 1;
  const a = ((3 * wild.maxHp - 2 * wild.currentHp) * rate * status) / (3 * wild.maxHp);
  return Math.min(.95, Math.pow(Math.min(255, a) / 255, .75));
}

export const itemsMethods = {
  canUseItemOnMon(id, mon) {
    if (!mon || !this.team.includes(mon)) return false;
    if (id === 'abilityCapsule') return true;
    if (mon.currentHp <= 0) return false;
    if (STONE_EVOLUTIONS[id]) return mon.id === 133;
    if (['potion','superPotion','hyperPotion'].includes(id)) return mon.currentHp < mon.maxHp;
    if (id === 'elixir') return mon.moves.some(m => m.currentPp < m.maxPp);
    if (['rareCandy','goldCandy'].includes(id)) return this.devMode && mon.level < 100;
    return false;
  },
  chooseBattleItem(id){
    if(this.battleConfirmAction || this.pendingItemTarget || this.battleBusy || this.dialogueResolve || (this.isBattleVisible()&&this.hasForcedBattleAction()))return;
    if(!this.items[id]){this.showItemFeedback('Non hai questo strumento.');return;}
    if(id==='pokeball'||id==='masterball'){
      if(id==='masterball' && this.isCelestialCave && this.celestialPhase!=='rematch'){
        this.showItemFeedback('Devi prima dimostrare il tuo valore contro Mewtwo.');return;
      }
      if(!this.isBattleVisible()){this.showItemFeedback('Le Poké Ball si usano solo durante gli incontri selvatici.');return;}
      if(this.isRaidActive||['gym','trainer'].includes(this.battleType)){
        this.setBattleMsg('Non puoi catturare Pokémon di allenatori o dei raid!');return;
      }
      const lastBall = id==='pokeball' && this.items.pokeball===1;
      const message = id==='masterball' ? 'Vuoi lanciare la Master Ball?' :
        (lastBall ? 'È la tua ultima Poké Ball. Vuoi lanciarla?' : 'Vuoi lanciare una Poké Ball?');
      this.askBattleConfirmation(message,()=>this.useBattleItem(id));
      return;
    }
    if(['rareCandy','goldCandy'].includes(id)){
      if(!this.devMode)return;
      if(this.isBattleVisible()){
        this.showItemFeedback('Le caramelle DEV si usano solo fuori dalla battaglia.');return;
      }
    }
    if(STONE_EVOLUTIONS[id]) {
      if(this.isBattleVisible()){ this.showItemFeedback('Le pietre si usano fuori dalla battaglia.'); return; }
      if(!this.team.some(mon=>mon.id===133&&mon.currentHp>0)){this.showItemFeedback('Ti serve un Eevee in squadra per usare questa pietra.');return;}
      this.beginItemTargetSelection(id); return;
    }
    if(id==='abilityCapsule'){
      if(this.isBattleVisible()){this.showItemFeedback('La Capsula Abilità si usa solo fuori dalla battaglia.');return;}
      this.beginItemTargetSelection(id);return;
    }
    if(!['potion','superPotion','hyperPotion','elixir','rareCandy','goldCandy'].includes(id))return;
    this.beginItemTargetSelection(id);
  },

  showItemFeedback(message){
    if(this.isBattleVisible())this.setBattleMsg(message);
    else {this.logMsg(message);this.showDiscoveryNotice(message,2400);}
  },

  beginItemTargetSelection(id){
    if((this.isBattleVisible()&&this.hasForcedBattleAction()) || !this.team.length || this.isLocked && !this.isBattleVisible())return;
    if (!this.team.some(mon => this.canUseItemOnMon(id, mon))) { this.showItemFeedback('Nessun Pokémon può utilizzare questo strumento ora.'); return; }
    this.pendingItemTarget=id;this.openWings();this.setMobileSheet(null);
    const box=this.$id('item-target-prompt');
    this.$id('item-target-message').textContent=`A quale Pokémon vuoi dare ${itemLabel(id)}?`;
    box.classList.remove('hidden');
    const mobileList=this.$id('item-target-mobile-list');mobileList.replaceChildren();
    this.team.forEach(mon=>{
      const button=document.createElement('button');button.type='button';
      button.className='item-target-mobile-pokemon';
      button.textContent=`${mon.name} · Lv.${mon.level} · ${mon.currentHp}/${mon.maxHp} ${'PS'}`;
      button.disabled=!this.canUseItemOnMon(id, mon);
      button.onclick=()=>this.giveItemToPokemon(mon);
      mobileList.appendChild(button);
    });
    this.renderSidebar();
    if(this.isBattleVisible()){
      this.battleMode='item-target';this.hideAllActions();
      this.$id('panel-bag-actions').classList.remove('hidden');
      this.$id('panel-bag-actions').textContent='SCEGLI UN POKÉMON DALLA SQUADRA A SINISTRA';
      this.setBattleMsg('A quale Pokémon vuoi dare lo strumento?');
      this.updateBattleWingCloseButtons();
      this.focusBattleSelection('#team-grid button:not(:disabled)');
    } else this.logMsg('A quale Pokémon vuoi dare lo strumento? Sceglilo dalla squadra.');
  },

  cancelItemTargetSelection(){
    if(!this.pendingItemTarget)return;
    this.pendingItemTarget=null;
    this.$id('item-target-prompt').classList.add('hidden');
    if(this.isBattleVisible() && !this.battleBusy){
      if(this.battleMode==='item-target')this.showBagMenu();
      else this.showMainActions();
    }
    else this.renderSidebar();
  },

  async openAbilityCapsule(pokemon){
    if(this.abilityCapsuleOpen || this.isBattleVisible() || this.battleBusy || this.adventureCompleted ||
       !this.team.includes(pokemon) || !this.items.abilityCapsule || this.pendingItemTarget!=='abilityCapsule')return false;
    this.pendingItemTarget=null;this.$id('item-target-prompt').classList.add('hidden');
    this.renderSidebar();
    const overlay=this.$id('ability-capsule-overlay'),list=this.$id('ability-capsule-options');
    this.abilityCapsuleOpen=true;this.abilityCapsuleCandidate=pokemon;this.abilityCapsuleSerial++;overlay.classList.remove('hidden');
    this.$id('ability-capsule-feedback').textContent='';list.replaceChildren();
    this.$id('ability-capsule-cancel').focus();
    // Le abilità consentite sono sempre quelle normali della specie (mai quelle nascoste).
    const allowed=Abilities.normalOptions(speciesData(pokemon.id));
    pokemon.abilityOptions=allowed;
    const choices=Abilities.alternatives(pokemon.ability,allowed);
    if(!allowed.includes(pokemon.ability)||!choices.length){
      this.$id('ability-capsule-description').textContent=pokemon.name;
      this.$id('ability-capsule-feedback').textContent='Questa specie non possiede altre abilità normali. Nessun oggetto consumato.';
      return false;
    }
    this.$id('ability-capsule-description').textContent=`Scegli una nuova abilità normale per ${pokemon.name}. Le abilità nascoste sono escluse.`;
    for(const option of choices){
      const button=document.createElement('button');button.type='button';
      button.textContent=abilityName(option).toUpperCase();
      button.title=abilityData(option)?.desc||'';
      button.onclick=()=>this.confirmAbilityCapsule(pokemon,option,allowed);
      list.appendChild(button);
    }
    list.querySelector('button')?.focus();
    return true;
  },

  confirmAbilityCapsule(pokemon,option,allowed){
    if(!this.abilityCapsuleOpen||this.abilityCapsuleCandidate!==pokemon||
       !this.team.includes(pokemon)||this.isBattleVisible()||this.battleBusy||!this.items.abilityCapsule||
       !allowed.includes(option)||!allowed.includes(pokemon.ability)||option===pokemon.ability)return false;
    const previous=pokemon.ability;
    pokemon.ability=option;pokemon.abilityName=abilityName(option);
    if(pokemon.status&&Abilities.statusBlocked(pokemon,pokemon.status)){pokemon.status=null;pokemon.statusTurns=0;}
    this.items.abilityCapsule--;this.closeAbilityCapsule();this.renderSidebar();
    this.showItemFeedback(`${pokemon.name}: ${abilityName(previous)} → ${pokemon.abilityName}!`);
    this.saveCheckpoint();return true;
  },

  closeAbilityCapsule(){
    this.abilityCapsuleSerial=(this.abilityCapsuleSerial||0)+1;this.abilityCapsuleOpen=false;this.abilityCapsuleCandidate=null;
    this.$id('ability-capsule-overlay')?.classList.add('hidden');
    this.$id('ability-capsule-options')?.replaceChildren();
    if(this.pendingItemTarget==='abilityCapsule'){this.pendingItemTarget=null;this.$id('item-target-prompt')?.classList.add('hidden');}
    this.renderSidebar();
    this.$id('bag-list')?.querySelector('button:not(:disabled)')?.focus({preventScroll:true});
  },

  async giveItemToPokemon(pokemon){
    const id=this.pendingItemTarget;
    if(!id||!this.team.includes(pokemon)||!this.items[id])return;
    if(id==='abilityCapsule')return this.openAbilityCapsule(pokemon);
    if(STONE_EVOLUTIONS[id]) return this.useEeveeStone(pokemon,id);
    if(pokemon.currentHp<=0){this.showItemFeedback('Non puoi usare lo strumento su un Pokémon esausto!');return;}
    if(['rareCandy','goldCandy'].includes(id)){
      if(!this.devMode||this.isBattleVisible()||pokemon.level>=100){
        this.showItemFeedback(pokemon.level>=100?'Livello 100 già raggiunto.':'Le caramelle DEV non si possono usare ora.');return;
      }
      this.pendingItemTarget=null;
      this.$id('item-target-prompt').classList.add('hidden');
      this.renderSidebar();
      return this.useDevCandy(pokemon,id);
    }
    if(['potion','superPotion','hyperPotion'].includes(id) && pokemon.currentHp>=pokemon.maxHp){this.showItemFeedback(`${pokemon.name} ha già tutti i PS!`);return;}
    if(id==='elixir' && pokemon.moves.every(m=>m.currentPp>=m.maxPp)){
      this.showItemFeedback(`${pokemon.name} ha già tutti i PP!`);return;
    }
    this.pendingItemTarget=null;this.$id('item-target-prompt').classList.add('hidden');
    this.items[id]--;
    if(['potion','superPotion','hyperPotion'].includes(id)){
      const before=pokemon.currentHp;
      pokemon.currentHp=Math.min(pokemon.maxHp,pokemon.currentHp+ITEMS[id].heal);
      this.showItemFeedback(`${pokemon.name} recupera ${pokemon.currentHp-before} PS grazie a ${itemLabel(id)}!`);
    } else {
      pokemon.restorePp();this.showItemFeedback(`Elisir: i PP di ${pokemon.name} sono stati ripristinati!`);
    }
    this.renderSidebar();
    if(this.isBattleVisible()){
      this.battleBusy=true;this.hideAllActions();this.updateBattleHUD();
      await this.wait(450);await this.enemyTurn();
    }
  },

  /** Una pietra si consuma soltanto dopo conferma e dopo aver trasformato Eevee. */
  async useEeveeStone(pokemon, id) {
    const target = STONE_EVOLUTIONS[id];
    if (!target || pokemon?.id !== 133 || pokemon.currentHp <= 0 || !this.team.includes(pokemon) ||
      !this.items[id] || this.isBattleVisible() || this.battleBusy || this.pendingItemTarget !== id) return false;
    const accepted = await this.confirmEeveeStone(pokemon, id);
    if (!accepted || pokemon.id !== 133 || !this.team.includes(pokemon) || !this.items[id] ||
      this.pendingItemTarget !== id || this.isBattleVisible()) return false;
    const evolution = pokemon.evolveToSpecies(target);
    if (!evolution) return false;
    this.items[id] -= 1;
    this.pendingItemTarget = null;
    this.$id('item-target-prompt')?.classList.add('hidden');
    this.renderSidebar();
    Dex.record(pokemon, 'caught', `Pietra evolutiva · Piano ${this.floor}`);
    this.showItemFeedback(`${pokemon.name}: evoluzione con ${itemLabel(id)}!`);
    this.saveCheckpoint(); // Salva prima dell'animazione: refresh ≠ pietra duplicata.
    await this.showEvolution(pokemon, evolution);
    this.renderSidebar();
    return true;
  },

  confirmEeveeStone(pokemon, id) {
    const target = STONE_EVOLUTIONS[id];
    const overlay = this.$id('eevee-stone-evolution');
    if (!overlay || !target) return Promise.resolve(false);
    const content = this.$id('eevee-evolution-preview'); content.replaceChildren();
    for (const [species,name] of [[pokemon.id,pokemon.name],[target,speciesData(target)?.name || 'Evoluzione']]) {
      const figure=document.createElement('figure');
      const image=document.createElement('img'); image.src=pokemonSprite(species, {shiny:pokemon.isShiny,gender:pokemon.gender}); image.alt='';
      const caption=document.createElement('figcaption');caption.textContent=name.toUpperCase(); figure.append(image,caption);
      content.append(figure);
      if(species===pokemon.id){const arrow=document.createElement('span');arrow.textContent='→';content.append(arrow);}
    }
    this.$id('eevee-evolution-description').textContent=`Usare ${itemLabel(id)}? La pietra scomparirà dallo zaino dopo l’evoluzione.`;
    this._eeveeEvolutionFocus=document.activeElement;
    overlay.classList.remove('hidden'); this.$id('eevee-evolution-cancel')?.focus();
    return new Promise(resolve => { this._eeveeStoneResolve=resolve; });
  },
  finishEeveeStoneChoice(accept=false) {
    this.$id('eevee-stone-evolution')?.classList.add('hidden');
    const resolve=this._eeveeStoneResolve;this._eeveeStoneResolve=null;
    this._eeveeEvolutionFocus?.focus?.(); resolve?.(accept);
  },

  async useBattleItem(id){
    if(this.battleBusy||this.items[id]<=0||!['pokeball','masterball'].includes(id))return;
    if(this.isRaidActive||['trainer','gym'].includes(this.battleType)){
      this.setBattleMsg('Non puoi catturare Pokémon dei raid o degli allenatori!');return;
    }
    this.battleBusy=true;this.hideAllActions();this.items[id]--;
    const wild=this.enemyMon;
    await this.battleText(`Lanci una ${id==='masterball'?'Master Ball':'Poké Ball'} verso ${wild.name}!`);
    if(this.battleType==='mewtwo' && (this.celestialPhase==='trial'||id!=='masterball')){
      await this.animateCapture(0,false,id);
      await this.battleText('è troppo forte, non puoi catturarlo');
      this.updateBattleHUD();await this.wait(600);await this.enemyTurn();return;
    }
    const odds=captureChance(wild);
    const success=id==='masterball'||Boolean(this.devMode)||Math.random()<odds;
    // Più alta la probabilità, più oscillazioni prima della fuga.
    const shakes=success?3:Math.min(3,Math.floor(Math.random()*4*Math.max(.35,odds)));
    await this.animateCapture(shakes,success,id);
    if(success){
      if(this.battleType==='mewtwo')this.completeMewtwoEncounter();
      if([144,145,146].includes(Number(wild.id)))this.caughtLegendarySpecies.add(Number(wild.id));
      // Record at confirmed capture, even when the player must release it.
      Dex.record(wild,'caught',`${this.battleType} · Piano ${this.floor}`);
      this.soloRunEligible=false;
      Objectives.record('catch',this.runId,{species:wild.id,shiny:wild.isShiny===true});
      this.runStats.captures++;
      await this.battleText(`Preso! ${wild.name} è stato catturato!`);
      if(this.team.length<this.getTeamSlotLimit()){this.team.push(wild);this.endBattle(`Hai catturato ${wild.name}!`);}
      else this.promptTeamFullChoice(wild);
      return;
    }
    await this.battleText(`${wild.name} è uscito dalla Poké Ball!`);
    this.updateBattleHUD();await this.wait(900);await this.enemyTurn();
  },

  promptTeamFullChoice(newMon){
    this.battleBusy=true;
    let o=this.$id('team-full-overlay');
    if(!o){o=document.createElement('div');o.id='team-full-overlay';o.className='full-overlay battle-modal';this.$id('pokenav-screen-root').appendChild(o);}
    o.innerHTML=`<h3>SQUADRA PIENA</h3><p>Hai sbloccato ${this.getTeamSlotLimit()} slot su 6. Sostituisci un Pokémon oppure libera quello catturato.</p><div id="team-full-slots"></div><button class="act-btn" id="discard-new-btn">LIBERA IL POKÉMON</button>`;
    o.classList.remove('hidden');
    const slots=o.querySelector('#team-full-slots');
    this.team.forEach((p,i)=>{const b=document.createElement('button');b.className='act-btn';b.textContent=`${p.name} Lv.${p.level}`;
      b.onclick=()=>{this.team[i]=newMon;if(p===this.activeMon)this.activeMon=newMon;o.classList.add('hidden');this.endBattle(`Catturato ${newMon.name}!`);};slots.appendChild(b);});
    o.querySelector('#discard-new-btn').onclick=()=>{o.classList.add('hidden');this.endBattle(`${newMon.name} è stato liberato.`);};
  },
};
