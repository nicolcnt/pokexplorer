// Interfaccia della lotta: menu dei comandi, messaggi, HUD e animazioni.
import { FORCED_RECHARGE_ACTION, itemImage } from '../core/constants.js';
import { createMove } from '../core/pokemon.js';
import { typeName, typeEffectiveness } from '../core/types.js';
import * as Matchups from '../systems/matchups.js';

export const uiMethods = {
  hideAllActions() {
    for(const id of ['panel-main-actions','panel-move-actions','panel-bag-actions','panel-team-actions']) {
      this.$id(id)?.classList.add('hidden');
    }
  },

  hasForcedBattleAction(){
    return Boolean(this.activeMon?.pendingCharge || this.activeMon?.rechargeTurns>0 || this.activeMon?.rampageTurns>0 || this.activeMon?.rolloutTurns>0);
  },

  showMainActions() {
    if(this.battleBusy || this.pendingForcedSwitch) return;
    // A charging/recharging Pokémon has no manual action menu on this turn.
    const forced=this.hasForcedBattleAction();
    if(forced && this.isBattleVisible()){
      const token=this.battleToken;
      this.hideAllActions();
      setTimeout(()=>{
        if(token!==this.battleToken||this.battleBusy||this.pendingForcedSwitch||!this.isBattleVisible())return;
        const move=this.activeMon.pendingCharge?.move || this.activeMon.rampageMove || this.activeMon.rolloutMove || FORCED_RECHARGE_ACTION;
        this.executeAttack(move,true);
      },this.gameDelay(160));
      return;
    }
    // Ogni turno del giocatore registra lo stato della lotta (danni e perdite).
    this.commitBattleState();
    // SKIP (DEV) vale per tutta la sfida: anche i Pokémon successivi di Capipalestra e raid.
    if(this.devSkipPending||this.devSkipChain){this.performDevSkip();return;}
    this.battleMode=null; this.hideAllActions();
    this.updateBattleWingCloseButtons();this.setMobileSheet(null);
    this.$id('panel-main-actions').classList.remove('hidden');
    this.$id('btn-move-back').classList.add('hidden');
    const run=this.$id('btn-act-run');
    const forbidden=this.isRaidActive || ['gym','trainer','mewtwo'].includes(this.battleType);
    run.disabled=forbidden;run.title=forbidden?'Non puoi fuggire da una sfida con allenatori o dal raid.':'';
    this.renderSidebar();
    this.focusBattleSelection('#btn-act-fight');
  },

  async animateBall(side){
    const ball=this.$id('battle-throw-ball');
    const stage=this.$id('battle-stage');
    const trainer=this.$id(side==='enemy'?'enemy-trainer-sprite':'player-trainer-sprite');
    const rect=stage.getBoundingClientRect();
    const trainerRect=trainer.getBoundingClientRect();
    const target=this.battleThrowDestination(side);
    const size=34;
    const clamp=(value,min,max)=>Math.min(max,Math.max(min,value));
    const releaseX=trainerRect.left-rect.left+trainerRect.width*(side==='enemy'?.35:(this.playerGender==='female'?.78:.68));
    const releaseY=trainerRect.top-rect.top+trainerRect.height*.43;
    const sx=clamp(releaseX-size/2,4,Math.max(4,rect.width-size-4));
    const sy=clamp(releaseY-size/2,4,Math.max(4,rect.height-size-4));
    const ex=clamp(target.x-size/2,4,Math.max(4,rect.width-size-4));
    const ey=clamp(target.y-size/2,4,Math.max(4,rect.height-size-4));
    ball.className='throw-ball ball-compositor';
    ball.style.left='0px';ball.style.top='0px';ball.style.opacity='1';
    const x=t=>sx+(ex-sx)*t;
    // The apex stays inside the stage even when the opponent sits near the top.
    const arcHeight=Math.min(84,rect.height*.23,Math.max(0,Math.min(sy,ey)-6));
    const y=t=>sy+(ey-sy)*t-Math.sin(Math.PI*t)*arcHeight;
    const angle=side==='enemy'?-1:1;
    const frames=[0,.18,.38,.60,.82,1].map((t,i)=>({
      transform:`translate3d(${x(t)}px,${y(t)}px,0) rotate(${angle*360*t}deg) scale(${.72+.28*Math.sin(Math.PI*t)})`,
      opacity:i===5?0:1,offset:t}));
    const trainerMotion=side==='player' ? (async()=>{
      const folder=this.playerGender==='champion'?'champion':this.playerGender==='female'?'girl':'red';
      for(let i=0;i<5;i++){
        trainer.style.backgroundImage=`url('assets/sprites/player/${folder}/throw/${i}.png')`;
        await this.wait(i===4?195:115);
      }
    })() : this.playMotion(trainer,[
      {transform:'translate3d(0,0,0) rotate(0deg)'},
      {transform:'translate3d(-10px,-7px,0) rotate(-4deg)'},
      {transform:'translate3d(0,0,0) rotate(0deg)'}],500,'ease-out');
    await Promise.all([this.playMotion(ball,frames,650,'linear'),trainerMotion]);
    ball.className='throw-ball';ball.removeAttribute('style');
  },

  async summonPokemon(side,wild=false){
    const sprite=this.$id(side==='enemy'?'enemy-sprite':'player-sprite');
    const flash=this.$id('summon-flash');
    flash.className=`summon-flash on-${side} active`;
    sprite.classList.remove('hidden','recall-anim','summon-cinematic','wild-entry');
    await this.playMotion(sprite,[
      {opacity:0,transform:'translate3d(0,22px,0) scale(.18)'},
      {opacity:.65,transform:'translate3d(0,-5px,0) scale(.95)'},
      {opacity:1,transform:'translate3d(0,0,0) scale(1)'}],570,'cubic-bezier(.18,.75,.2,1)');
    sprite.classList.remove('summon-cinematic','wild-entry');
    sprite.style.opacity='';flash.className='summon-flash';
  },

  async animateRecall(side){
    const sprite=this.$id(side==='enemy'?'enemy-sprite':'player-sprite');
    const flash=this.$id('summon-flash');
    flash.className=`summon-flash on-${side} recall`;
    await this.playMotion(sprite,[
      {opacity:1,transform:'translate3d(0,0,0) scale(1)'},
      {opacity:.75,transform:'translate3d(0,0,0) scale(.55)'},
      {opacity:0,transform:'translate3d(0,0,0) scale(.03)'}],390,'ease-in');
    sprite.classList.add('hidden');sprite.style.opacity='';flash.className='summon-flash';
  },

  async animateCapture(shakes,success,ballType='pokeball'){
    const ball=this.$id('capture-ball');
    const burst=this.$id('capture-smoke');
    const enemy=this.$id('enemy-sprite');
    const stage=this.$id('battle-stage');
    const area=stage.getBoundingClientRect();
    const target=this.battleSpritePosition('enemy');
    const width=38;
    const start={x:area.width*.21,y:area.height*.70};
    const hit={x:target.x-width/2,y:target.y-width/2};
    const platform=stage.querySelector('.enemy-platform-gba')?.getBoundingClientRect();
    const landingY=platform ? platform.top-area.top-12 : target.y+35;
    const ground={x:target.x-width/2,y:Math.max(hit.y+10,Math.min(area.height-48,landingY))};
    ball.className='capture-ball compositor-ball';
    ball.style.setProperty('--capture-ball-image',`url('${itemImage(ballType==='masterball'?'masterball':'pokeball')}')`);
    ball.dataset.ballType=ballType;
    ball.style.display='block';ball.style.opacity='1';
    ball.style.left='0px';ball.style.top='0px';
    const anim=[0,.18,.42,.66,.85,1].map(t=>({
      transform:`translate3d(${start.x+(hit.x-start.x)*t}px,${start.y+(hit.y-start.y)*t-Math.sin(Math.PI*t)*Math.min(96,area.height*.26)}px,0) rotate(${t*360}deg) scale(${.72+Math.sin(Math.PI*t)*.25})`,offset:t}));
    await this.playMotion(ball,anim,630,'linear');
    ball.style.transform=`translate3d(${hit.x}px,${hit.y}px,0)`;
    burst.className='capture-smoke absorption';
    burst.style.left=`${target.x-54}px`;burst.style.top=`${target.y-54}px`;
    await this.playMotion(enemy,[
      {opacity:1,transform:'translate3d(0,0,0) scale(1)'},
      {opacity:0,transform:'translate3d(0,0,0) scale(.06)'}],340,'ease-in');
    enemy.classList.add('hidden');
    enemy.style.opacity='';burst.className='capture-smoke';
    await this.playMotion(ball,[
      {transform:`translate3d(${hit.x}px,${hit.y}px,0) rotate(0deg)`},
      {transform:`translate3d(${ground.x}px,${ground.y-7}px,0) rotate(12deg)`,offset:.66},
      {transform:`translate3d(${ground.x}px,${ground.y}px,0) rotate(0deg)`}],330,'ease-out');
    ball.style.transform=`translate3d(${ground.x}px,${ground.y}px,0)`;
    ball.classList.add('capture-waiting');
    await this.playMotion(ball,[
      {transform:`translate3d(${ground.x}px,${ground.y}px,0) scale(1)`,filter:'brightness(1)'},
      {transform:`translate3d(${ground.x}px,${ground.y}px,0) scale(1.07)`,filter:'brightness(2.2)',offset:.5},
      {transform:`translate3d(${ground.x}px,${ground.y}px,0) scale(1)`,filter:'brightness(1)'}],450,'ease-in-out');
    for(let i=0;i<shakes;i++){
      await this.playMotion(ball,[
        {transform:`translate3d(${ground.x}px,${ground.y}px,0) rotate(0deg)`},
        {transform:`translate3d(${ground.x}px,${ground.y}px,0) rotate(-22deg)`,offset:.22},
        {transform:`translate3d(${ground.x}px,${ground.y}px,0) rotate(17deg)`,offset:.55},
        {transform:`translate3d(${ground.x}px,${ground.y}px,0) rotate(0deg)`}],470,'ease-in-out');
      await this.wait(85);
    }
    if(success){
      burst.className='capture-smoke caught-particles';
      await this.playMotion(ball,[
        {transform:`translate3d(${ground.x}px,${ground.y}px,0) scale(1)`,filter:'brightness(1)'},
        {transform:`translate3d(${ground.x}px,${ground.y}px,0) scale(1.12)`,filter:'brightness(1.9)',offset:.4},
        {transform:`translate3d(${ground.x}px,${ground.y}px,0) scale(1)`,filter:'brightness(.65)'}],780,'ease-out');
    }else{
      burst.className='capture-smoke escape-particles';
      await this.playMotion(ball,[
        {opacity:1,transform:`translate3d(${ground.x}px,${ground.y}px,0) scale(1)`},
        {opacity:0,transform:`translate3d(${ground.x}px,${ground.y-15}px,0) scale(1.5)`}],320,'ease-out');
      enemy.classList.remove('hidden');
      await this.playMotion(enemy,[
        {opacity:0,transform:'translate3d(0,0,0) scale(.25)'},
        {opacity:1,transform:'translate3d(0,0,0) scale(1)'}],430,'ease-out');
    }
    ball.className='capture-ball';ball.removeAttribute('style');
    burst.className='capture-smoke';burst.removeAttribute('style');
  },

  setBattleMsg(text){
    this.$id('battle-msg').textContent=String(text??'');
    this.$id('battle-log').classList.toggle('awaiting-click',Boolean(this.dialogueResolve));
  },

  acknowledgeDialogue(){
    if(!this.dialogueResolve)return;
    const resolve=this.dialogueResolve;this.dialogueResolve=null;
    this.$id('battle-log').classList.remove('awaiting-click');
    resolve();
  },

  async battleText(text){
    this.setBattleMsg(text);
    if(this.$id('overlay-battle').classList.contains('hidden'))return;
    // The lethal hit may be followed by several messages before the KO handler runs.
    const pending=this.activeMon;
    if(!this.isCelestialCave && pending?.currentHp<=0 && this.team.includes(pending) && this.lastPersistedFaint!==pending){
      this.lastPersistedFaint=pending;
      this.commitBattleState(pending);
    }
    // DEV SKIP: i messaggi scorrono da soli.
    if(this.fastBattleText){await this.wait(90);return;}
    await new Promise(resolve=>{
      this.dialogueResolve=resolve;
      this.$id('battle-log').classList.add('awaiting-click');
    });
  },

  displayMoveName(move){
    return String(move.name);
  },

  showMoves(){
    if(this.battleConfirmAction)return;
    if(this.battleBusy || this.pendingForcedSwitch || this.hasForcedBattleAction())return;
    this.battleMode='moves';this.hideAllActions();this.updateBattleWingCloseButtons();
    const panel=this.$id('panel-move-actions');panel.innerHTML='';panel.classList.remove('hidden');
    this.$id('btn-move-back').classList.remove('hidden');
    for(const m of this.activeMon.moves){
      const btn=document.createElement('button');btn.className=`act-btn move-${m.type}`;
      const moveLabel=document.createElement('strong');moveLabel.textContent=this.displayMoveName(m);
      const detail=document.createElement('small');detail.textContent=`${typeName(m.type)} · PP ${m.currentPp}/${m.maxPp}`;
      btn.append(moveLabel,detail);
      // Efficacia mostrata solo per le combinazioni già viste in lotta.
      if(m.category!=='status'&&m.power>0&&this.enemyMon&&Matchups.knows(m.type,this.enemyMon.types)){
        const value=typeEffectiveness(m.type,this.enemyMon.types),label=Matchups.effectLabel(value);
        if(label){
          const tag=document.createElement('span');
          tag.className=`move-effect ${value===0?'effect-none':value>1?'effect-super':'effect-weak'}`;
          tag.textContent=label;tag.title=value===0?'Nessun effetto':value>1?'Superefficace':'Poco efficace';
          btn.append(tag);
        }
      }
      btn.disabled=m.currentPp<=0;
      btn.onclick=()=>this.executeAttack(m);
      panel.appendChild(btn);
    }
    if(!this.activeMon.moves.some(m=>m.currentPp>0)){
      const struggle=createMove('struggle');
      const btn=document.createElement('button');btn.className='act-btn';btn.textContent='SCONTRO';btn.onclick=()=>this.executeAttack(struggle);panel.appendChild(btn);
    }
    this.focusBattleSelection('#panel-move-actions button:not(:disabled)');
  },

  showTeamMenu(force=false){
    if(!force&&(this.battleBusy || this.hasForcedBattleAction()))return;
    if(this.battleBusy && !force)return;
    this.pendingForcedSwitch=Boolean(force);
    this.battleMode='team';this.hideAllActions();
    this.openWings();this.renderSidebar();this.updateBattleWingCloseButtons();this.setMobileSheet('team');
    this.$id('panel-team-actions').classList.remove('hidden');
    this.$id('panel-team-actions').innerHTML=`<span>${force?'POKÉMON SCONFITTO: CHI MANDI IN CAMPO?':'SCEGLI UN POKÉMON NEL PANNELLO SINISTRO'}</span>${force?'':'<button id="battle-team-back" class="act-btn mini-back-btn">←</button>'}`;
    if(!force)this.$id('battle-team-back').onclick=()=>{this.teleportSwitchPending=false;this.showMainActions();};
    this.setBattleMsg(force?`${this.activeMon.name} è stato sconfitto, chi vuoi mandare in campo?`:'Apri il Pokémon nella squadra a sinistra e scegli MANDA IN CAMPO.');
    this.focusBattleSelection('#team-grid button:not(:disabled)');
  },

  showBagMenu(){
    if(this.battleBusy||this.pendingForcedSwitch||this.hasForcedBattleAction())return;
    this.battleMode='bag';this.hideAllActions();this.openWings();this.renderSidebar();this.updateBattleWingCloseButtons();this.setMobileSheet('bag');
    this.$id('panel-bag-actions').classList.remove('hidden');
    this.$id('panel-bag-actions').innerHTML='<span>SCEGLI UNO STRUMENTO DALLO ZAINO A DESTRA</span><button id="battle-bag-back" class="act-btn mini-back-btn">←</button>';
    this.$id('battle-bag-back').onclick=()=>this.showMainActions();
    this.setBattleMsg('Apri lo zaino e scegli un oggetto.');
    this.focusBattleSelection('#bag-tabs button');
  },

  askBattleConfirmation(message,yes,cancellable=true){
    const o=this.$id('battle-confirm');this.battleConfirmAction=yes;
    this.$id('battle-confirm-text').textContent=String(message??'');
    this.$id('btn-battle-confirm-no').classList.toggle('hidden',!cancellable);
    o.classList.remove('hidden');
    this.$id('btn-battle-confirm-yes').focus({preventScroll:true});
  },

  acceptBattleConfirmation(){
    const action=this.battleConfirmAction;
    // On confirm, fishing transitions into a locked encounter rather than unlocking.
    if(this.fishingConfirmPending)this.fishingConfirmPending=false;
    this.closeBattleConfirmation();
    if(action)action();
  },

  closeBattleConfirmation(){
    this.$id('battle-confirm').classList.add('hidden');
    this.battleConfirmAction=null;
    if(this.fishingConfirmPending){this.fishingConfirmPending=false;this.isLocked=false;}
  },

  isBattleVisible(){return !this.$id('overlay-battle')?.classList.contains('hidden');},

  async playAttackAnimation(move,target='enemy'){
    const fx=this.$id('attack-fx-container');
    fx.replaceChildren();
    const id=(move.id||'').toLowerCase(),type=move.type||'normal';
    const effect=/(scratch|slash|cut|fury-swipes|metal-claw)/.test(id)?'claw':
      /(tackle|quick-attack|headbutt|pound|slam|body-slam|swift)/.test(id)?'star':
      /(bubble|water-gun|hydro-pump|surf)/.test(id)?(id==='bubble'?'bubble':'wave'):
      /(vine-whip|razor-leaf|solar-beam|mega-drain|leech-seed)/.test(id)?'leaf':
      /(thunder|electric|spark|shock)/.test(id)?'bolt':
      /(ember|flame|fire|blast)/.test(id)?'ember':
      /(rock|earth|dig)/.test(id)?'rock':
      /(psychic|confusion|hypnosis)/.test(id)?'psychic':
      /(poison|smog|acid|gas|spore)/.test(id)?'smoke':
      type==='fire'?'ember':type==='water'?'wave':type==='grass'?'leaf':
      type==='electric'?'bolt':type==='ice'?'ice':type==='rock'||type==='ground'?'rock':
      type==='ghost'||type==='poison'?'smoke':type==='psychic'?'psychic':'star';
    const user=this.$id(target==='enemy'?'player-sprite':'enemy-sprite');
    const victim=this.$id(target==='enemy'?'enemy-sprite':'player-sprite');
    const rootBounds=fx.getBoundingClientRect();
    const a=user.getBoundingClientRect(),b=victim.getBoundingClientRect();
    const start={x:a.left-rootBounds.left+a.width*.50,y:a.top-rootBounds.top+a.height*.52};
    const end={x:b.left-rootBounds.left+b.width*.50,y:b.top-rootBounds.top+b.height*.52};
    const count=move.power===0?5:((effect==='wave'||effect==='ember'||effect==='bolt')?11:7);
    const dx=end.x-start.x,dy=end.y-start.y;
    user.classList.remove('attack-lunge');void user.offsetWidth;user.classList.add('attack-lunge');
    for(let i=0;i<count;i++){
      const p=document.createElement('img');p.className='v6-move-projectile';
      p.src=`assets/sprites/effects/${effect}.svg`;p.alt='';p.draggable=false;
      p.style.left=`${start.x+(i%3-1)*6}px`;p.style.top=`${start.y+(i%3-1)*4}px`;
      p.style.setProperty('--travel-x',`${dx+(i%4-1.5)*12}px`);
      p.style.setProperty('--travel-y',`${dy+(i%3-1)*15}px`);
      p.style.setProperty('--delay',`${i*44}ms`);
      p.style.setProperty('--spin',`${(i%2?1:-1)*30}deg`);
      fx.appendChild(p);
    }
    const impact=document.createElement('div');impact.className=`v6-attack-impact effect-${effect}`;
    impact.style.left=`${end.x}px`;impact.style.top=`${end.y}px`;
    fx.appendChild(impact);
    await this.wait(410);
    victim.classList.remove('hit-anim');void victim.offsetWidth;victim.classList.add('hit-anim');
    await this.wait(560);
    user.classList.remove('attack-lunge');victim.classList.remove('hit-anim');
    fx.replaceChildren();
  },

  battleSpritePosition(side){
    const stage=this.$id('battle-stage').getBoundingClientRect();
    const sprite=this.$id(side==='enemy'?'enemy-sprite':'player-sprite').getBoundingClientRect();
    // Used by capture effects only: the target must be a *visible* sprite.
    return {x:sprite.left-stage.left+sprite.width*.50,
      y:sprite.top-stage.top+sprite.height*.54};
  },

  battleThrowDestination(side){
    // Pokémon sprites are display:none during the throw, so their bounds are
    // ZERO. Read the always-visible platform instead; also works on mobile.
    const stage=this.$id('battle-stage').getBoundingClientRect();
    const platform=this.$id('battle-stage').querySelector(
      side==='enemy'?'.enemy-platform-gba':'.player-platform-gba');
    const bounds=platform.getBoundingClientRect();
    // The ball opens just over the top of the platform where the Pokémon lands.
    return {x:bounds.left-stage.left+bounds.width*.5,
      y:bounds.top-stage.top+bounds.height*.28};
  },

  hpColorState(mon){
    const ratio=mon?.maxHp ? mon.currentHp/mon.maxHp : 0;
    return ratio < .20 ? 'red' : ratio < .50 ? 'yellow' : 'green';
  },

  resetBattleVisuals(keepPlayerOnField=false){
    for(const id of ['battle-throw-ball','capture-ball','capture-smoke','summon-flash']){
      const el=this.$id(id);if(el){el.className=el.dataset.baseClass || el.className.split(' ')[0];el.removeAttribute('style');}
    }
    this.$id('attack-fx-container').replaceChildren();
    for(const id of ['enemy-sprite','player-sprite']){
      this.$id(id).classList.remove('recall-anim','summon-anim','summon-cinematic','hit-anim','attack-lunge','hidden');
    }
    this.$id('enemy-sprite').classList.add('hidden');
    if(!keepPlayerOnField)this.$id('player-sprite').classList.add('hidden');
  },

  updateBattleHUD(){
    if(!this.activeMon||!this.enemyMon)return;
    const a=this.activeMon,b=this.enemyMon;
    this.$id('player-name').textContent=a.name;
    this.$id('enemy-name').textContent=b.name;
    this.$id('player-lv').textContent=a.level;
    this.$id('enemy-lv').textContent=b.level;
    this.$id('player-sprite').src=a.spriteBack;
    const playerPct=Math.max(0,100*a.currentHp/a.maxHp);
    const enemyPct=Math.max(0,100*b.currentHp/b.maxHp);
    this.$id('player-hp-fill').style.width=`${playerPct}%`;
    this.$id('enemy-hp-fill').style.width=`${enemyPct}%`;
    this.$id('player-hp-fill').className=`stat-bar-hp-gba hp-${this.hpColorState(a)}`;
    this.$id('enemy-hp-fill').className=`stat-bar-hp-gba hp-${this.hpColorState(b)}`;
    this.$id('player-hp-text').textContent=`${a.currentHp}/${a.maxHp}`;
    this.$id('enemy-hp-text').textContent=`${b.currentHp}/${b.maxHp}`;
    this.$id('player-exp-fill').style.width=`${a.level>=this.getLevelCap()?100:Math.max(0,Math.min(100,100*a.exp/Math.max(1,a.expToNext)))}%`;
    this.renderBattleConditions('player',a);
    this.renderBattleConditions('enemy',b);
    this.renderSidebar();
  },

  renderBattleConditions(side,mon){
    const out=this.$id(`${side}-conditions`);if(!out)return;
    out.replaceChildren();
    const statuses={burn:'BRU',poison:'VEL','bad-poison':'VEL+',paralysis:'PAR',sleep:'SON',freeze:'GEL',confusion:'CONF'};
    if(mon.status && mon.status!=='leech-seed'){const chip=document.createElement('span');chip.className='condition-chip status-chip';chip.textContent=statuses[mon.status]||mon.status.toUpperCase();out.append(chip);}
    if(mon.trappedTurns>0){const chip=document.createElement('span');chip.className='condition-chip status-chip';chip.textContent='INTR.';out.append(chip);}
    if(mon.seeded){const chip=document.createElement('span');chip.className='condition-chip status-chip';chip.textContent='SEME';out.append(chip);}
    for(const [field,label] of [['lightScreenTurns','SCH. LUCE'],['reflectTurns','RIFLESSO'],['safeguardTurns','SALV.'],['mistTurns','NEBBIA']]){
      if(mon[field]>0){const chip=document.createElement('span');chip.className='condition-chip boost';chip.textContent=`${label} ${mon[field]}`;out.append(chip);}
    }
    if(mon.futureSight){const chip=document.createElement('span');chip.className='condition-chip status-chip';chip.textContent=`DIV. ${mon.futureSight.turns}`;out.append(chip);}
    if(mon.focusEnergyActive){const chip=document.createElement('span');chip.className='condition-chip boost';chip.textContent='FOCUS';out.append(chip);}
    const labels={attack:'ATT',defense:'DIF','special-attack':'ATT.SP','special-defense':'DIF.SP',speed:'VEL.',accuracy:'PREC',evasion:'ELUS'};
    for(const [key,value] of Object.entries(mon.statStages||{})){
      if(!value)continue;
      const chip=document.createElement('span');chip.className=`condition-chip ${value>0?'boost':'nerf'}`;
      chip.textContent=`${labels[key]||key} ${value>0?'+':''}${value}`;out.append(chip);
    }
  },
};
