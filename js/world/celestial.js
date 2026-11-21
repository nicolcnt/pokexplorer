// Evento della Grotta Celeste (piano 75): invito di Oak, spedizione, Mewtwo e ritorno.
import { OAK_MAP_SPRITE } from '../core/constants.js';
import * as Checkpoints from '../systems/checkpoints.js';
import * as Objectives from '../systems/objectives.js';

export const celestialMethods = {
  // Floor 75: authored story event. A refusal does not permanently lose the invitation.
  // The two expedition members are a temporary battle party; the remaining
  // Pokémon never enter the cave and must survive even if the mission fails.
  openCelestialTeamSelection(){
    if(this.isCelestialCave||!this.team.length)return false;
    this.celestialRosterSelection=new Set();this.celestialExpeditionBusy=false;
    this.$id('celestial-expedition')?.classList.remove('hidden');
    this.$id('celestial-dialog')?.classList.add('hidden');
    this.isLocked=true;this.stopContinuousWalk();
    this.renderCelestialTeamSelection();return true;
  },

  renderCelestialTeamSelection(){
    const list=this.$id('celestial-team-list');if(!list)return;
    list.replaceChildren();
    const max=Math.min(2,Math.max(0,this.team.length-1));
    for(const [index,mon] of this.team.entries()){
      const selected=this.celestialRosterSelection.has(index);
      const button=document.createElement('button');button.type='button';
      button.className='celestial-roster-choice'+(selected?' selected':'');
      button.setAttribute('aria-pressed',String(selected));
      const marker=document.createElement('span');marker.textContent=selected?'✓':'○';
      const picture=document.createElement('img');picture.src=mon.spriteFront;picture.alt='';
      const name=document.createElement('span');name.textContent=`${mon.name} · Lv.${mon.level} · ${mon.currentHp}/${mon.maxHp} PS`;
      button.append(marker,picture,name);
      button.onclick=()=>{
        if(this.celestialExpeditionBusy)return;
        if(selected)this.celestialRosterSelection.delete(index);
        else if(this.celestialRosterSelection.size<max)this.celestialRosterSelection.add(index);
        this.renderCelestialTeamSelection();
        list.children[index]?.focus({preventScroll:true});
      };
      if(!selected&&this.celestialRosterSelection.size>=max)button.disabled=true;
      list.append(button);
    }
    const count=this.celestialRosterSelection.size;
    this.$id('celestial-team-counter').textContent=`${count} / ${max} SELEZIONATI · ${this.team.length-count} AL SICURO`;
    const confirm=this.$id('celestial-team-confirm');confirm.disabled=count<1||this.celestialExpeditionBusy;
    const help=this.$id('celestial-team-help');
    help.textContent=max<1?'Serve almeno un Pokémon da lasciare al villaggio prima di partire.':
      this.runMode === 'normal' ? 'Scegli al massimo due Pokémon. Se la spedizione fallisce, gli esausti potranno essere curati al Centro Pokémon.' :
      'Scegli al massimo due Pokémon. In Nuzlocke ogni KO è definitivo.';
    const first=list.querySelector('button:not(:disabled)');
    if(!list.contains(document.activeElement)&&document.activeElement!==confirm)first?.focus({preventScroll:true});
  },

  cancelCelestialTeam(){
    if(this.celestialExpeditionBusy)return;
    this.$id('celestial-expedition')?.classList.add('hidden');
    this.celestialRosterSelection.clear();this.isLocked=false;
    this.oakEventDismissed=false;
    this.logMsg('Il Professor Oak ti attenderà quando sarai pronto.');
  },

  async confirmCelestialTeam(){
    if(this.celestialExpeditionBusy||this.isCelestialCave)return false;
    const choice=[...this.celestialRosterSelection].sort((a,b)=>a-b);
    if(choice.length<1||choice.length>2||choice.length>=this.team.length||
       choice.some(index=>!this.team[index]||this.team[index].currentHp<=0))return false;
    this.celestialExpeditionBusy=true;
    const chosen=new Set(choice),previous=this.team;
    this.celestialReserve=previous.filter((_,index)=>!chosen.has(index));
    this.team=previous.filter((_,index)=>chosen.has(index));
    this.ensureActivePokemon();this.celestialRosterSelection.clear();
    // Da qui la spedizione è "in corso": se la pagina viene chiusa o si torna al menu,
    // i Pokémon della spedizione sono considerati persi, come in una sconfitta.
    this.writeCheckpoint(Checkpoints.take(this,{expedition:true}));
    this.$id('celestial-expedition')?.classList.add('hidden');
    this.oakEventDismissed=true;
    const oak=this.gridMap?.[3]?.[5];
    if(oak?.specialRole==='celestial-oak'){oak.entity=null;oak.specialRole=null;}
    this.renderDungeon();this.renderSidebar();
    try{await this.enterCelestialCave();return true;}
    finally{this.celestialExpeditionBusy=false;}
  },

  handleCelestialModalKey(event){
    let modal=this.$id('celestial-expedition');
    if(modal?.classList.contains('hidden'))modal=this.$id('oak-laboratory');
    if(!modal||modal.classList.contains('hidden'))return false;
    if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d','W','A','S','D',' ','Enter','Escape'].includes(event.key))return true;
    event.preventDefault();
    if(event.repeat && [' ','Enter'].includes(event.key))return true;
    const options=[...modal.querySelectorAll('button:not(:disabled):not(.hidden)')].filter(button=>button.offsetParent!==null);
    if(event.key==='Escape'){
      if(modal.id==='celestial-expedition')this.cancelCelestialTeam();
      return true;
    }
    if(event.key===' '||event.key==='Enter'){
      (options.includes(document.activeElement)?document.activeElement:options[0])?.click();return true;
    }
    if(!options.length)return true;
    const forward=['s','d','S','D','ArrowDown','ArrowRight'].includes(event.key);
    const index=options.indexOf(document.activeElement);
    options[(index+(forward?1:-1)+options.length)%options.length]?.focus({preventScroll:true});
    return true;
  },

  // Rientrando dalla grotta con Mewtwo si possono avere sette Pokémon:
  // uno va affidato definitivamente al laboratorio di Oak.
  openOakLaboratory(forceDeposit=false){
    if(!forceDeposit || this.team.length!==7 || this.isCelestialCave || this.isBattleVisible() || !this.isTownFloor())return false;
    this.celestialDepositRequired=!!forceDeposit;
    this.isLocked=true;this.stopContinuousWalk();
    this.$id('oak-laboratory')?.classList.remove('hidden');
    this.renderOakLaboratory();return true;
  },

  renderOakLaboratory(){
    const list=this.$id('oak-lab-options');if(!list)return;
    list.replaceChildren();
    const forced=this.celestialDepositRequired;
    const message=this.$id('oak-lab-message');
    message.textContent='Professor Oak: «Hai sette Pokémon con te. Puoi viaggiare con sei soltanto: quale vuoi affidare definitivamente al mio laboratorio? Non potrai ritirarlo.»';
    const add=(mon,kind,index)=>{
      const button=document.createElement('button');button.type='button';button.className='celestial-roster-choice';
      const img=document.createElement('img');img.src=mon.spriteFront;img.alt='';
      const label=document.createElement('span');label.textContent=`AFFIDA · ${mon.name} Lv.${mon.level}`;
      button.append(img,label);button.onclick=()=>this.depositOakPokemon(index);
      list.append(button);
    };
    if(forced&&this.team.length===7)this.team.forEach((mon,index)=>add(mon,'deposit',index));
    if(!list.children.length){const empty=document.createElement('p');empty.textContent='Nessun trasferimento disponibile.';list.append(empty);}
    this.$id('oak-lab-count').textContent=`IN SQUADRA ${this.team.length}/6`;
    const close=this.$id('oak-lab-close');close.classList.add('hidden');close.disabled=true;
    list.querySelector('button:not(:disabled)')?.focus({preventScroll:true});
  },

  depositOakPokemon(index){
    if(!this.isTownFloor()||this.isCelestialCave||this.isBattleVisible())return false;
    const forced=this.celestialDepositRequired;
    if(!forced || index<0 || index>=this.team.length || this.team.length!==7)return false;
    const [mon]=this.team.splice(index,1);
    this.logMsg(`${mon.name} resta al laboratorio del Professor Oak.`);this.ensureActivePokemon();
    this.renderSidebar();
    if(forced){this.celestialDepositRequired=false;this.closeOakLaboratory();}
    this.saveCheckpoint();return true;
  },

  closeOakLaboratory(){
    if(this.celestialDepositRequired)return false;
    this.$id('oak-laboratory')?.classList.add('hidden');this.isLocked=false;
    this.renderSidebar();return true;
  },

  finishCelestialExpeditionDefeat(){
    if(!this.isCelestialCave||!this.celestialReturnState)return false;
    const normal=this.runMode==='normal';
    this.team=[...this.celestialReserve,...(normal?this.team:[])];this.celestialReserve=[];
    this.celestialPhase='unvisited';this.celestialMewtwoCaptured=false;this.oakEventDismissed=false;
    this.battleToken++;this.battleBusy=false;this.pendingForcedSwitch=false;
    this.battleMode=null;this.battleType=null;this.battleWeather=null;this.pendingItemTarget=null;
    this.enemyMon?.clearBattleConditions?.();this.enemyMon=null;
    this.closePartyActions();this.closePokemonInfo();
    this.$id('overlay-battle')?.classList.add('hidden');
    this.$id('overlay-battle')?.classList.remove('battle-preparing','battle-revealing');
    this.$id('battle-controls')?.classList.add('hidden');
    this.$id('battle-confirm')?.classList.add('hidden');
    this.$id('item-target-prompt')?.classList.add('hidden');
    this.$id('rotom-body')?.classList.remove('battle-active');
    this.updateBattleWingCloseButtons();
    this.$id('gameover-overlay')?.classList.add('hidden');
    this.$id('celestial-dialog')?.classList.add('hidden');
    const saved=this.celestialReturnState;this.gridMap=saved.gridMap;
    this.playerPos={...saved.playerPos};this.floor=saved.floor;
    this.celestialReturnState=null;this.isCelestialCave=false;
    this.$id('dungeon-grid-board')?.classList.remove('celestial-cave');
    this.ensureOakEventAccessible();this.ensureActivePokemon();
    this.isLocked=false;this.renderDungeon();this.renderSidebar();
    this.logMsg(normal ? 'La spedizione è fallita. Gli esausti possono essere curati al Centro Pokémon.' : 'La spedizione è fallita. I Pokémon caduti non tornano.');
    this.showDiscoveryNotice('SPEDIZIONE FALLITA',3500);
    this.music?.setScene('exploration');
    this.saveCheckpoint();
    if(!this.activeMon) this.resolveTeamDefeat();
    return true;
  },

  showOakIntroduction(){
    this.$id('npc-dialog-overlay')?.classList.add('hidden');
    this.pendingNpcAdvance=null;this.hideDialogNpcBackground(false);
    this.showCelestialDialogue('Ti stavo aspettando. Da giorni gli strumenti del laboratorio registrano un segnale impossibile, proprio sotto queste montagne.', 'intro-one');
  },

  showCelestialDialogue(line,step){
    this.celestialDialogStep=step;this.isLocked=true;this.stopContinuousWalk();
    const panel=this.$id('celestial-dialog');
    this.$id('celestial-dialog-text').textContent=line;
    const question=step==='question';
    this.$id('celestial-dialog-actions').classList.toggle('hidden',!question);
    this.$id('celestial-dialog-next').classList.toggle('hidden',question);
    const heading=this.$id('celestial-dialog-chapter');
    const progress=this.$id('celestial-dialog-progress');
    const chapter=step.startsWith('intro')||question?'PIANO 75 · IL RICHIAMO':
      step.startsWith('arrival')?'GROTTA CELESTE · LA SOGLIA':
      step.startsWith('reward')?'GROTTA CELESTE · LA PROVA':
      'GROTTA CELESTE · EPILOGO';
    if(heading)heading.textContent=chapter;
    if(progress)progress.textContent=({
      'intro-one':'01 / 05','intro-two':'02 / 05','intro-three':'03 / 05','intro-four':'04 / 05',
      question:'05 / 05','arrival-one':'01 / 03','arrival-two':'02 / 03','arrival-three':'03 / 03',
      'reward-one':'01 / 03','reward-two':'02 / 03','reward-three':'03 / 03',
      'farewell-one':'01 / 02','farewell-two':'02 / 02'
    })[step]||'';
    panel.classList.remove('hidden');
    (question?this.$id('celestial-dialog-yes'):this.$id('celestial-dialog-next'))?.focus({preventScroll:true});
    // Le domande aspettano sempre la scelta del giocatore.
    if(question)this.cancelAutoAdvance();
    else this.scheduleAutoAdvance(line,()=>{if(this.celestialDialogStep===step&&!panel.classList.contains('hidden'))this.advanceCelestialDialog();});
  },

  advanceCelestialDialog(){
    if(this.$id('celestial-dialog')?.classList.contains('hidden'))return;
    const lines={
      'intro-one':['intro-two','Nessun Pokémon selvatico si avvicina più alla Grotta Celeste. Persino i più coraggiosi fuggono quando cala il silenzio.'],
      'intro-two':['intro-three','Non si tratta di un fenomeno naturale. Qualcuno ha creato una forza che non avrebbe mai dovuto essere liberata. Il suo nome è Mewtwo.'],
      'intro-three':['intro-four','Questa missione non perdona gli errori. Potrai portare al massimo due Pokémon, lasciando gli altri al sicuro. Le conseguenze della sconfitta dipendono dalla modalità della run.'],
      'intro-four':['question','Vuoi accompagnarmi nella Grotta Celeste? Puoi rifiutare e tornare quando sarai pronto.'],
      'arrival-one':['arrival-two','Ascolta… non è il vento. Qualcosa ci osserva da molto prima che varcassimo l’ingresso.'],
      'arrival-two':['arrival-three','Davanti a noi c’è Mewtwo. Prima di tentare la cattura dovrai affrontarlo e dimostrare di saper resistere alla sua forza.'],
      'reward-one':['reward-two','Mewtwo ti ha messo alla prova e ora ti riconosce come avversario. Ma non è finita: è ancora lì, in attesa.'],
      'reward-two':['reward-three','Questa Master Ball è il risultato di anni di ricerca. Può riuscire dove ogni altra Poké Ball fallirebbe. Usala con giudizio.'],
      'farewell-one':['farewell-two',this.celestialMewtwoCaptured?'La Grotta Celeste tornerà silenziosa, ma ciò che hai dimostrato qui resterà con te.':'Oak abbassa lo sguardo. «Non tutte le leggende possono essere catturate. Torniamo a casa.»'],
    };
    const next=lines[this.celestialDialogStep];
    if(next){this.showCelestialDialogue(next[1],next[0]);return;}
    if(this.celestialDialogStep==='question')return;
    const ending=this.celestialDialogStep;
    this.$id('celestial-dialog').classList.add('hidden');
    if(ending==='farewell-two'){
      this.finishCelestialReturn();return;
    }
    this.isLocked=false;
    if(ending==='reward-three'){
      this.logMsg('MASTER BALL ottenuta. Mewtwo ti attende per la seconda sfida.');
      this.showDiscoveryNotice('MASTER BALL OTTENUTA · SECONDA SFIDA',3100);
    }
  },

  answerOakInvitation(yes){
    if(this.celestialDialogStep!=='question')return;
    this.$id('celestial-dialog').classList.add('hidden');
    if(!yes){
      // Reversible: Oak stays on floor 75 and may be spoken to again.
      this.isLocked=false;
      this.oakEventDismissed=false;
      this.logMsg('Oak annuisce. «Prenditi il tempo che serve. Ti aspetterò qui.»');
      return;
    }
    this.openCelestialTeamSelection();
  },

  // Older checkpoints could mark Oak as dismissed despite the player refusing.
  ensureOakEventAccessible(){
    if(this.floor!==75||this.isCelestialCave||this.celestialPhase!=='unvisited')return;
    const oak=this.gridMap?.[3]?.[5];if(!oak)return;
    if(!oak.entity || oak.specialRole==='celestial-oak'){
      this.oakEventDismissed=false;
      oak.entity='npc';oak.type='town-ground';oak.decoration=null;
      oak.specialRole='celestial-oak';oak.npcName='Professor Oak';
      oak.npcSprite=OAK_MAP_SPRITE;
      oak.localSpriteFallback=OAK_MAP_SPRITE;
    }
  },

  async celestialFadeTo(action){
    const black=this.$id('celestial-blackout');
    black.classList.add('active');
    await this.wait(950);
    await action();
    await this.wait(340);
    black.classList.remove('active');
    await this.wait(900);
  },

  async enterCelestialCave(){
    this.isLocked=true;this.stopContinuousWalk();
    this.celestialReturnState={gridMap:this.gridMap,playerPos:{...this.playerPos},floor:this.floor};
    await this.celestialFadeTo(async()=>{
      this.isCelestialCave=true;this.celestialPhase='trial';
      this.playerPos={x:5,y:7};this.pendingWalk=null;
      const walkable=(x,y)=>(x>=3&&x<=6&&y>=2&&y<=7)||
        (x>=4&&x<=6&&y===8)||(x>=4&&x<=6&&y===1)||
        ((x===2||x===7)&&(y>=3&&y<=6));
      this.gridMap=Array.from({length:10},(_,y)=>Array.from({length:10},(_,x)=>({
        x,y,type:walkable(x,y)?'cave-stone':'water',entity:null,revealed:true,
        decoration:([[2,3],[7,3],[2,6],[7,6],[3,1],[6,1]].some(([cx,cy])=>cx===x&&cy===y))?'celestial-crystal':null
      })));
      // A single southern opening; the cave is surrounded by deep water.
      const exit=this.gridMap[9][5];exit.type='cave-stone';exit.entity='cave-exit';
      this.gridMap[4][5].entity='mewtwo';
      const oak=this.gridMap[7][4];oak.entity='npc';oak.specialRole='cave-oak';
      oak.npcName='Professor Oak';oak.npcSprite=OAK_MAP_SPRITE;
      oak.localSpriteFallback=OAK_MAP_SPRITE;
      this.renderDungeon();this.renderSidebar();
    });
    if(!this.isCelestialCave)return;
    await this.wait(600);
    this.music?.setScene('cave');
    this.showCelestialDialogue('La luce si spegne alle nostre spalle. Guarda quelle pareti… sembrano pulsare al ritmo di un cuore.','arrival-one');
  },

  async startMewtwoCinematic(){
    if(!this.isCelestialCave||!['trial','rematch'].includes(this.celestialPhase)||this.celestialCutsceneActive)return;
    this.celestialCutsceneActive=true;this.isLocked=true;this.stopContinuousWalk();
    const overlay=this.$id('celestial-cinematic');
    overlay.classList.remove('hidden');
    this.$id('celestial-cinematic-subtitle').textContent=this.celestialPhase==='trial'
      ?'Il silenzio si spezza. Una presenza immensa si risveglia…':'La grotta trema. Mewtwo ti riconosce e accetta l’ultima sfida.';
    this.music?.setScene('mewtwo');
    await this.wait(1900);
    if(!this.isCelestialCave){overlay.classList.add('hidden');this.celestialCutsceneActive=false;return;}
    overlay.classList.add('hidden');this.celestialCutsceneActive=false;
    this.startBattle('mewtwo');
  },

  showOakMasterBallReward(){
    if(this.items.masterball===0)this.grantItem('masterball');
    this.renderSidebar();
    this.showCelestialDialogue('Hai resistito a un potere che nessuno aveva mai saputo fronteggiare. Oak apre lentamente la valigetta che portava con sé…','reward-one');
  },

  completeMewtwoEncounter(captured=true){
    this.celestialMewtwoCaptured=!!captured;
    this.celestialPhase='complete';
    const mon=this.gridMap?.[4]?.[5];if(mon?.entity==='mewtwo')mon.entity=null;
    this.logMsg('La Grotta Celeste torna silenziosa. Oak ti aspetta prima dell’uscita a sud.');
  },

  leaveCelestialCave(){
    if(!this.isCelestialCave||this.celestialPhase!=='complete'||!this.celestialReturnState||this.celestialDeparturePending)return false;
    this.celestialDeparturePending=true;
    this.showCelestialDialogue(this.celestialMewtwoCaptured?'Ce l’hai fatta. Hai catturato Mewtwo: il silenzio della grotta ora sembra diverso.':'Hai affrontato Mewtwo fino alla fine. Dopo il secondo KO è svanito nell’oscurità. Lasciamo la grotta a mani vuote, ma vivi.','farewell-one');
    return true;
  },

  async finishCelestialReturn(){
    if(!this.isCelestialCave||this.celestialPhase!=='complete'||!this.celestialReturnState)return;
    this.isLocked=true;this.stopContinuousWalk();
    this.music?.setScene('exploration');
    try{
      await this.celestialFadeTo(async()=>{
        const previous=this.celestialReturnState;
        this.gridMap=previous.gridMap;this.playerPos={...previous.playerPos};
        this.floor=previous.floor;this.celestialReturnState=null;this.isCelestialCave=false;
        this.team=[...this.celestialReserve,...this.team];this.celestialReserve=[];this.ensureActivePokemon();
        this.$id('dungeon-grid-board')?.classList.remove('celestial-cave');
            this.renderDungeon();this.renderSidebar();
      });
    }finally{this.celestialDeparturePending=false;this.isLocked=false;}
    this.logMsg(this.celestialMewtwoCaptured?'Sei tornato con Mewtwo dalla Grotta Celeste.':'Sei tornato al villaggio. Mewtwo è scomparso dopo il secondo KO.');
    Objectives.record('cave',this.runId,{outcome:this.celestialMewtwoCaptured?'caught':'knockout'});
    if(this.team.length>6){this.openOakLaboratory(true);return;}
    this.saveCheckpoint();
  },
};
