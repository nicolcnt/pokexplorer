// Flusso della lotta: avvio, turni, cambi, esperienza, vittoria, sconfitta e game over.
import * as Abilities from '../core/abilities.js';
import { FORCED_RECHARGE_ACTION, GAME_BALANCE, evolvedEncounterId, leaderSpriteUrl, randomKantoSpecies, scaledBattleExperience } from '../core/constants.js';
import { pokemonSprite, speciesData, speciesName } from '../core/data.js';
import { Pokemon, createMove } from '../core/pokemon.js';
import { typeEffectiveness } from '../core/types.js';
import * as Objectives from '../systems/objectives.js';
import * as Dex from '../systems/pokedex.js';
import * as Matchups from '../systems/matchups.js';
import { genderMark } from '../ui/sidebar.js';

export const flowMethods = {
  async prepareBattleImage(element){
    if(!element)return false;
    try{
      // decode() resolves only after a real, drawable image has been decoded.
      if(element.decode){await element.decode();return true;}
      if(element.complete&&element.naturalWidth>0)return true;
      await new Promise((resolve,reject)=>{
        element.addEventListener('load',resolve,{once:true});
        element.addEventListener('error',reject,{once:true});
      });
      return true;
    }catch(err){
      // Do not show the literal HTML alt text on failed remote sprite loads.
      element.alt='';
      element.src='assets/sprites/ui/pokemon-placeholder.svg';
      try{await element.decode?.();}catch(_){}
      return false;
    }
  },

  // Preload the actually selected visual assets while the previous map is still on
  // screen. This uses CSS-computed URLs, so gym palettes and future themes do
  // not require a duplicate lookup table in the battle engine.
  async prepareBattleStageImages(stage){
    if(typeof getComputedStyle!=='function' || typeof Image==='undefined')return true;
    const elements=[stage,stage.querySelector('.enemy-platform-gba'),stage.querySelector('.player-platform-gba'),this.$id('player-trainer-sprite')].filter(Boolean);
    const sources=new Set();
    const urlPattern=/url\(\s*(?:"([^"]+)"|'([^']+)'|([^\s)]+))\s*\)/g;
    for(const element of elements){
      const background=getComputedStyle(element).backgroundImage||'';
      for(const result of background.matchAll(urlPattern)){
        const url=result[1]||result[2]||result[3];if(url)sources.add(url);
      }
    }
    // TASK-010: both protagonists use five local throwing frames.
    // Decode them before battle reveal to prevent flicker during the pose swap.
    const trainerFolder=this.playerGender==='champion'?'champion':this.playerGender==='female'?'girl':'red';
    for(let frame=0;frame<5;frame++)sources.add(`assets/sprites/player/${trainerFolder}/throw/${frame}.png`);
    // Retain Image references until decoding completes so browsers cannot
    // garbage-collect orphaned requests while the battle stays hidden.
    const pendingImages=[];
    const loaded=await Promise.all([...sources].map(src=>new Promise(resolve=>{
      const image=new Image();pendingImages.push(image);let settled=false;
      const finish=ok=>{if(settled)return;settled=true;clearTimeout(timer);resolve(ok);};
      const timer=setTimeout(()=>finish(false),8000);
      image.onload=()=>{
        if(typeof image.decode==='function')image.decode().then(()=>finish(true),()=>finish(false));
        else finish(true);
      };
      image.onerror=()=>finish(false);
      image.src=src;
      if(image.complete&&image.naturalWidth>0)image.onload();
    })));
    pendingImages.length=0;
    if(loaded.some(ok=>!ok))console.warn('Alcune risorse di battaglia non sono disponibili; uso i fallback del browser.');
    return loaded.every(Boolean);
  },

  // The map remains visible during preparation. Once the selected scene is
  // decoded, a single short fade reveals the stage and its interface together.
  revealPreparedBattle(token){
    const overlay=this.$id('overlay-battle');
    overlay.classList.add('battle-revealing');
    overlay.classList.remove('battle-preparing');
    if(this.battleRevealTimer)clearTimeout(this.battleRevealTimer);
    this.battleRevealTimer=setTimeout(()=>{
      if(token===this.battleToken)overlay.classList.remove('battle-revealing');
      this.battleRevealTimer=null;
    },400);
  },

  // Tema della piattaforma e dello sfondo in base al luogo e al tipo di incontro.
  battlePlatformTheme(type){
    if(type==='mewtwo')return 'celestial';
    if(this.isRaidActive || type==='legendary')return 'raid';
    if(type==='gym')return 'arena';
    if(this.floor%10===0)return 'town';
    if(this.floor%5===0)return 'sand';
    if(this.floor%4===0)return 'cave';
    if(this.floor%3===0)return 'woodland';
    return 'meadow';
  },

  /** Transizione verso la lotta dopo la schermata "LOTTA!". */
  beginEncounter(type) {
    for (const id of ['trainer-encounter-overlay', 'wild-encounter-overlay']) this.$id(id)?.classList.add('hidden');
    const screen = this.$id('pokenav-screen-root');
    screen.classList.add('battle-transition-flash');
    setTimeout(() => {
      screen.classList.remove('battle-transition-flash');
      if (type !== 'legendary') { this.startBattle(type); return; }
      screen.classList.add('legendary-encounter-transition');
      setTimeout(() => { screen.classList.remove('legendary-encounter-transition'); this.startBattle(type); }, this.gameDelay(1200));
    }, this.gameDelay(600));
  },

  /** Specie e livello dell'avversario per il tipo di incontro. */
  chooseOpponent(type, leader) {
    if (type === 'mewtwo') return { id: 150, level: 50 };
    if (type === 'legendary') {
      const id = this.pendingLegendaryId || [144, 145, 146][Math.floor(Math.random() * 3)];
      this.pendingLegendaryId = null;
      return { id, level: 30 };
    }
    if (leader) return { id: this.currentGym.pokemon[this.gymLeaderIndex], level: this.currentGym.levels[this.gymLeaderIndex] };
    const level = this.encounterLevel(type, false);
    const pool = this.getEncounterPool(type);
    const seed = pool?.length ? pool[Math.floor(Math.random() * pool.length)] : randomKantoSpecies(level, this.floor);
    return { id: evolvedEncounterId(seed, level), level };
  },

  trainerFolder() { return this.playerGender === 'champion' ? 'champion' : this.playerGender === 'female' ? 'girl' : 'red'; },

  async startBattle(type, keepPlayerOnField = false) {
    this.closePartyActions(); this.closePokemonInfo();
    this.ensureActivePokemon();
    const continuousRound = keepPlayerOnField && this.isBattleVisible();
    this.battleType = type; this.isLocked = true; this.battleBusy = true;
    if (!continuousRound) this.battleWeather = null;
    this.battleParticipants = new Set();
    this.lastPersistedFaint = null;
    this.battleMode = null; this.pendingForcedSwitch = false;
    const token = ++this.battleToken;
    if (!this.activeMon) {
      this.resolveTeamDefeat(); return;
    }
    const overlay = this.$id('overlay-battle');
    if (this.battleRevealTimer) clearTimeout(this.battleRevealTimer);
    overlay.classList.remove('battle-revealing');
    if (!continuousRound) overlay.classList.add('battle-preparing');
    overlay.classList.remove('hidden');
    this.$id('battle-controls').classList.remove('hidden');
    this.$id('rotom-body').classList.add('battle-active');
    this.hideAllActions(); this.openWings();
    const leader = type === 'gym' && this.gymQueue[0] === 'leader' && this.currentGym;
    if (!continuousRound || (leader && this.gymLeaderIndex === 0))
      this.music?.setScene(type === 'mewtwo' ? 'mewtwo' : leader ? 'gym' : type === 'legendary' ? 'legend_trio' : 'encounter');
    const opponent = this.chooseOpponent(type, leader);
    this.enemyMon = new Pokemon(speciesData(opponent.id), opponent.level);
    Dex.record(this.enemyMon, 'seen', `${type} · Piano ${this.floor}`);
    if (type === 'trainer') this.pendingTrainerCell = null;
    if (!keepPlayerOnField) this.triggerEntryAbilities(this.activeMon, this.enemyMon);
    this.triggerEntryAbilities(this.enemyMon, this.activeMon);
    this.battleParticipants.add(this.activeMon);
    this.$id('enemy-name').textContent = this.enemyMon.name + genderMark(this.enemyMon);
    this.$id('enemy-lv').textContent = this.enemyMon.level;
    const enemySprite = this.$id('enemy-sprite');
    enemySprite.src = this.enemyMon.spriteFront;
    enemySprite.classList.remove('faint-anim', 'summon-anim', 'recall-anim');
    enemySprite.classList.add('hidden');
    const trainerBack = this.$id('player-trainer-sprite');
    trainerBack.setAttribute('aria-label', this.playerGender === 'female' ? 'Allenatrice, vista di spalle' : 'Allenatore, visto di spalle');
    trainerBack.style.backgroundImage = `url('assets/sprites/player/${this.trainerFolder()}/throw/0.png')`;
    trainerBack.classList.toggle('female-trainer', this.playerGender === 'female');
    trainerBack.classList.add('hidden');
    const enemyTrainer = this.$id('enemy-trainer-sprite');
    enemyTrainer.className = 'poke-sprite-gba enemy-trainer-frame hidden';
    enemyTrainer.removeAttribute('style');
    if (!keepPlayerOnField) this.$id('player-sprite').classList.add('hidden');
    const hostile = ['gym', 'trainer'].includes(type);
    const stage = this.$id('battle-stage');
    stage.classList.toggle('wild-battle', !hostile);
    stage.classList.toggle('trainer-battle', hostile);
    stage.dataset.platformTheme = this.battlePlatformTheme(type);
    const palette = type === 'gym' ? this.currentGym?.palette : null;
    if (palette) stage.dataset.gymPalette = palette; else delete stage.dataset.gymPalette;
    this.resetBattleVisuals(keepPlayerOnField);
    this.updateBattleHUD();
    // La scena resta coperta finché sprite e sfondo non sono pronti.
    await Promise.all([this.prepareBattleImage(enemySprite), this.prepareBattleImage(this.$id('player-sprite')), this.prepareBattleStageImages(stage)]);
    if (token !== this.battleToken) return;
    if (!continuousRound) this.revealPreparedBattle(token);
    await this.battleText(hostile ? (leader ? `Il Capopalestra ${this.currentGym.name} ti sfida!` : 'Un allenatore ti sfida!')
      : type === 'mewtwo' ? 'Appare Mewtwo.' : this.isRaidActive ? `RAID ${6 - this.raidQueueCount}/5 · Una presenza misteriosa!`
        : type === 'legendary' ? 'UN POKÉMON LEGGENDARIO APPARE!' : 'Un Pokémon selvatico appare!');
    if (token !== this.battleToken) return;
    if (hostile) {
      this.setTrainerPortrait(enemyTrainer, leader ? leaderSpriteUrl(this.currentGym) : this.currentTrainerSprite);
      enemyTrainer.classList.remove('hidden');
      enemyTrainer.classList.add('trainer-enter');
      await this.wait(590);
      if (token !== this.battleToken) return;
      await this.battleText(leader ? `${this.currentGym.name} sceglie ${this.enemyMon.name}!` : 'L’allenatore avversario prepara la Poké Ball!');
      await this.animateBall('enemy');
      if (token !== this.battleToken) return;
      enemyTrainer.classList.add('hidden'); enemyTrainer.classList.remove('trainer-enter');
      await this.summonPokemon('enemy');
    } else {
      const wildFx = this.$id('wild-appear-fx');
      wildFx.classList.add('active');
      await this.summonPokemon('enemy', true);
      wildFx.classList.remove('active');
    }
    if (token !== this.battleToken) return;
    await this.battleText(`${this.enemyMon.name} è pronto a combattere!`);
    if (token !== this.battleToken) return;
    if (!keepPlayerOnField) {
      trainerBack.style.backgroundImage = `url('assets/sprites/player/${this.trainerFolder()}/throw/0.png')`;
      trainerBack.classList.remove('hidden');
      await this.battleText(`Vai ${this.activeMon.name}!`);
      if (token !== this.battleToken) return;
      await this.animateBall('player');
      if (token !== this.battleToken) return;
      trainerBack.classList.add('hidden');
      await this.summonPokemon('player');
    } else {
      // Tra un turno e l'altro di raid e palestre il Pokémon resta in campo.
      trainerBack.classList.add('hidden');
      this.$id('player-sprite').classList.remove('hidden');
    }
    if (token !== this.battleToken) return;
    this.battleBusy = false; this.showMainActions();
  },

  tryRunAway() {
    if (this.battleConfirmAction) return;
    if (this.isRaidActive || ['gym', 'trainer', 'mewtwo'].includes(this.battleType)) { this.setBattleMsg('Non puoi fuggire da questa sfida!'); return; }
    if (this.battleBusy || this.pendingForcedSwitch || this.hasForcedBattleAction()) return;
    if ((this.activeMon?.trappedTurns > 0 || this.isOpponentTrapping(this.activeMon)) && this.activeMon.ability !== 'run-away') {
      this.setBattleMsg(`${this.activeMon.name} non può fuggire: è intrappolato!`); return;
    }
    this.endBattle('Sei fuggito dalla lotta!');
  },

  /** Fine della run: nessun Pokémon in grado di lottare. La run viene chiusa anche nel cloud. */
  showGameOver() {
    this.setMobileSheet(null);
    this.isRaidActive = false; this.raidQueueCount = 0; this.clearRaidTransientState();
    this.battleToken++;
    this.acknowledgeDialogue();
    for (const id of ['overlay-battle', 'battle-controls', 'battle-confirm']) this.$id(id)?.classList.add('hidden');
    this.$id('rotom-body').classList.remove('battle-active');
    this.activeMon = null; this.battleBusy = false; this.isLocked = true;
    this.renderSidebar();
    this.endRun('defeat');
    this.renderRunRecap(this.$id('gameover-recap'));
    this.$id('gameover-overlay').classList.remove('hidden');
    this.$id('btn-return-main-menu')?.focus();
  },

  async chooseEvolution(pokemon,options){
    if(!Array.isArray(options)||options.length<2)return options?.[0]?.id??null;
    const overlay=this.$id('evolution-choice-overlay');
    if(overlay && overlay.parentElement!==this.$id('pokenav-screen-root'))this.$id('pokenav-screen-root').appendChild(overlay);
    const list=this.$id('evolution-choice-options');
    const title=this.$id('evolution-choice-title');
    if(!overlay||!list)return null;
    title.textContent=`SCEGLI L’EVOLUZIONE DI ${pokemon.name}`;
    list.replaceChildren();
    return await new Promise(resolve=>{
      const finish=value=>{overlay.classList.add('hidden');list.replaceChildren();resolve(value);};
      for(const option of options){
        const button=document.createElement('button');button.type='button';
        const image=document.createElement('img');image.src=pokemonSprite(option.id);image.alt='';
        const caption=document.createElement('span');caption.textContent=`${speciesName(option.id).toUpperCase()} · Lv.${option.level}`;
        button.append(image,caption);button.onclick=()=>finish(option.id);list.appendChild(button);
      }
      this.$id('evolution-choice-later').onclick=()=>finish(null);
      overlay.classList.remove('hidden');
      list.querySelector('button')?.focus();
    });
  },

  evolutionText(phase,evo){
    if(!evo)return '';
    return phase==='done'?`${evo.from} si è evoluto in ${evo.to}!`:`${evo.from} si sta evolvendo…`;
  },

  async showEvolution(mon, evo){
    const panel=this.$id('evolution-overlay');
    if(panel && panel.parentElement!==this.$id('pokenav-screen-root'))this.$id('pokenav-screen-root').appendChild(panel);
    this.evolutionMon=mon;this.evolutionData=evo;
    this.$id('evolution-from').src=evo.fromSprite;
    this.$id('evolution-to').src=evo.toSprite;
    this.$id('evolution-caption').textContent=this.evolutionText('start',evo);
    this.$id('evolution-from').classList.remove('hidden');
    this.$id('evolution-to').classList.add('hidden');
    this.$id('evolution-start').classList.remove('hidden');
    this.$id('evolution-finish').classList.add('hidden');
    panel.classList.remove('hidden');
    this.updateBattleHUD();this.renderSidebar();
    await new Promise(resolve=>{this.evolutionResolve=resolve;});
  },

  startEvolutionAnimation(){
    this.$id('evolution-start').classList.add('hidden');
    this.$id('evolution-from').classList.add('evo-transform');
    this.$id('evolution-to').classList.remove('hidden');
    this.$id('evolution-to').classList.add('evo-reveal');
    this.$id('evolution-caption').textContent=this.evolutionText('start',this.evolutionData);
    setTimeout(()=>{
      this.$id('evolution-from').classList.add('hidden');
      this.$id('evolution-from').classList.remove('evo-transform');
      this.$id('evolution-caption').textContent=this.evolutionText('done',this.evolutionData);
      this.$id('evolution-finish').classList.remove('hidden');
      this.renderSidebar();this.updateBattleHUD();
    },1700);
  },

  finishEvolution(){
    this.$id('evolution-overlay').classList.add('hidden');
    this.$id('evolution-to').classList.remove('evo-reveal');
    const resolve=this.evolutionResolve;this.evolutionResolve=null;
    if(resolve)resolve();
  },

  selectBattlePokemon(pokemon){
    if(this.battleConfirmAction || (!this.pendingForcedSwitch&&this.hasForcedBattleAction()))return;
    if(!this.$id('overlay-battle') || this.$id('overlay-battle').classList.contains('hidden'))return;
    if(this.battleBusy || this.dialogueResolve)return;
    if(!this.pendingForcedSwitch && (this.activeMon?.trappedTurns>0 || this.activeMon?.meanLookSource || this.isOpponentTrapping(this.activeMon))){this.setBattleMsg(`${this.activeMon.name} non può essere sostituito: è intrappolato!`);return;}
    if(pokemon===this.activeMon){this.setBattleMsg('Questo Pokémon è già in campo!');return;}
    if(pokemon.currentHp<=0){this.setBattleMsg('Un Pokémon esausto non può combattere!');return;}
    this.askBattleConfirmation(this.pendingForcedSwitch?`Hai scelto ${pokemon.name}, confermi la scelta?`:`Richiamare ${this.activeMon.name} e mandare ${pokemon.name} (Lv.${pokemon.level})?`,()=>this.performSwitch(pokemon),true);
  },

  async performSwitch(next){
    if(next.currentHp<=0||!this.team.includes(next))return;
    const forced=this.pendingForcedSwitch;
    const fromTeleport=this.teleportSwitchPending;
    this.teleportSwitchPending=false;
    this.pendingForcedSwitch=false;
    this.battleBusy=true;this.hideAllActions();
    if(!forced&&!fromTeleport){await this.battleText(`${this.activeMon.name}, torna nella Poké Ball!`);await this.animateRecall('player');}
    if(this.enemyMon?.meanLookSource===this.activeMon)this.enemyMon.meanLookSource=null;
    if(this.enemyMon?.trapSource===this.activeMon){this.enemyMon.trappedTurns=0;this.enemyMon.trapSource=null;this.enemyMon.trapMove=null;}
    this.activeMon.clearVolatile();
    if(this.activeMon.ability==='natural-cure'){this.activeMon.status=null;this.activeMon.statusTurns=0;}
    // A mid-battle switch also updates the party's lead position.
    const nextIndex=this.team.indexOf(next);
    if(nextIndex>0){this.team.splice(nextIndex,1);this.team.unshift(next);}
    this.activeMon=next;this.battleParticipants.add(next);next.clearVolatile();
    this.triggerEntryAbilities(next,this.enemyMon);
    this.updateBattleHUD();
    await this.battleText(`Vai ${next.name}!`);
    await this.animateBall('player');
    await this.summonPokemon('player');
    this.updateBattleHUD();
    if(forced){this.battleBusy=false;this.showMainActions();}
    else {await this.enemyTurn();}
  },

  async executeAttack(move,forced=false){
    if(this.battleBusy||this.pendingForcedSwitch||(!forced&&move.currentPp<=0))return;
    // Ignore manually selected moves when a previous turn is still resolving.
    if(!forced&&(this.activeMon?.pendingCharge||this.activeMon?.rechargeTurns>0||this.activeMon?.rampageTurns>0||this.activeMon?.rolloutTurns>0))return;
    if(move.category!=='status'&&move.power>0&&this.enemyMon)Matchups.learn(move.type,this.enemyMon.types);
    if(move.id==='teleport'&&!forced){
      move.currentPp=Math.max(0,move.currentPp-1);
      if(this.battleType==='wild' && !this.isRaidActive){this.endBattle(`${this.activeMon.name} usa Teletrasporto e fugge!`);return;}
      if(this.team.filter(p=>p.currentHp>0 && p!==this.activeMon).length===0){
        this.setBattleMsg('Teletrasporto fallisce: non hai altri Pokémon disponibili.');this.showMainActions();return;
      }
      this.teleportSwitchPending=true;
      this.setBattleMsg(`${this.activeMon.name} usa Teletrasporto! Scegli chi mandare in campo.`);
      this.showTeamMenu();return;
    }
    this.battleBusy=true;this.hideAllActions();
    this.beginBattleTurn();
    const enemyMove=this.pickEnemyMove();
    const enemyFirst=(enemyMove.priority>move.priority)||
      (enemyMove.priority===move.priority && this.battleSpeed(this.enemyMon)>this.battleSpeed(this.activeMon));
    if(enemyFirst){const enemyResult=await this.applyMove(this.enemyMon,this.activeMon,enemyMove,'player');
      if(enemyResult==='battle-ended')return;
      if(this.activeMon.currentHp<=0){await this.resolveBattleFaints();return;}}
    if(this.enemyMon.currentHp>0){await this.applyMove(this.activeMon,this.enemyMon,move,'enemy');}
    // Both Pokémon may faint in the same hit (Destiny Bond / recoil).
    if(this.activeMon.currentHp<=0){await this.resolveBattleFaints();return;}
    if(this.enemyMon.currentHp<=0){await this.handleBattleVictory();return;}
    if(!enemyFirst){await this.enemyTurn(true);return;}
    await this.applyEndOfTurnEffects();
    if(this.activeMon.currentHp<=0){await this.resolveBattleFaints();return;}
    if(this.enemyMon.currentHp<=0){await this.handleBattleVictory();return;}
    this.battleBusy=false;this.showMainActions();
  },

  async resolveBattleFaints(){
    if(this.activeMon?.currentHp>0)return false;
    if(this.enemyMon?.currentHp>0){await this.onPlayerFainted();return true;}
    // Risolvi prima il KO del giocatore, anche quando l'avversario cade nello stesso turno.
    await this.resolveFallenPokemon(this.activeMon);
    this.ensureActivePokemon();
    if(!this.activeMon){this.resolveTeamDefeat();return true;}
    await this.handleBattleVictory();
    this.renderSidebar();
    return true;
  },

  beginBattleTurn(){
    if(this.activeMon){this.activeMon.protectedThisTurn=false;this.activeMon.flinchedThisTurn=false;}
    if(this.enemyMon){this.enemyMon.protectedThisTurn=false;this.enemyMon.flinchedThisTurn=false;}
  },

  pickEnemyMove(){
    if(this.enemyMon?.rechargeTurns>0)return FORCED_RECHARGE_ACTION;
    if(this.enemyMon?.pendingCharge)return this.enemyMon.pendingCharge.move;
    if(this.enemyMon?.rampageTurns>0)return this.enemyMon.rampageMove;
    if(this.enemyMon?.rolloutTurns>0)return this.enemyMon.rolloutMove;
    const available=this.enemyMon.moves.filter(m=>m.currentPp>0);
    if(!available.length)return createMove('struggle');
    const offensive=available.filter(m=>m.power>0);
    if(offensive.length && Math.random()<.85){
      return offensive.sort((a,b)=>(b.power*typeEffectiveness(b.type,this.activeMon.types))-(a.power*typeEffectiveness(a.type,this.activeMon.types)))[0];
    }
    return available[Math.floor(Math.random()*available.length)];
  },

  async enemyTurn(sameTurn=false){
    if(!sameTurn)this.beginBattleTurn();
    if(!this.enemyMon||this.enemyMon.currentHp<=0)return;
    this.battleBusy=true;
    const move=this.pickEnemyMove();
    const enemyResult=await this.applyMove(this.enemyMon,this.activeMon,move,'player');
    if(enemyResult==='battle-ended')return;
    if(this.activeMon.currentHp<=0){await this.resolveBattleFaints();return;}
    if(this.enemyMon.currentHp<=0){await this.handleBattleVictory();return;}
    await this.applyEndOfTurnEffects();
    if(this.activeMon.currentHp<=0){await this.resolveBattleFaints();return;}
    if(this.enemyMon.currentHp<=0){await this.handleBattleVictory();return;}
    this.battleBusy=false;this.showMainActions();
  },

  async onPlayerFainted(){
    const lost=this.activeMon;
    this.updateBattleHUD();this.$id('player-sprite').classList.add('faint-anim');
    await this.resolveFallenPokemon(lost);
    this.$id('player-sprite').classList.remove('faint-anim');
    this.renderSidebar();
    if(!this.team.some(p=>p.currentHp>0)){this.resolveTeamDefeat();return;}
    this.battleBusy=false;this.showTeamMenu(true);
  },

  async resolveFallenPokemon(lost){
    const normal=this.runMode==='normal';
    this.runStats.fallen.push({name:lost.name,id:lost.id,level:lost.level,floor:this.floor,by:this.enemyMon?.name||'',lost:!normal});
    lost.treatedFaint=false;
    if(!normal){
      this.team=this.team.filter(p=>p!==lost);
      this.battleParticipants.delete(lost);
    }
    // Persisti il KO prima del dialogo: chiudere la pagina non lo annulla.
    this.lastPersistedFaint=lost;
    if(!this.isCelestialCave){
      if(this.team.length) this.commitBattleState();
      else {this.showGameOver();return;}
    }
    await this.battleText(normal ? `${lost.name} è esausto. Potrai curarlo al Centro Pokémon.`
      : `${lost.name} è esausto e lascia definitivamente la squadra!`);
  },

  resolveTeamDefeat(){
    if(this.isCelestialCave){this.finishCelestialExpeditionDefeat();return;}
    if(this.runMode!=='normal'||!this.team.length){
      if(this.$id('gameover-overlay')?.classList.contains('hidden')) this.showGameOver();
      return;
    }
    // Joy interviene anche prima del primo villaggio: nessun salto di piano.
    this.isRaidActive=false;this.raidQueueCount=0;this.clearRaidTransientState();
    this.gymQueue=[];this.currentGym=null;this.gymChallengePending=false;
    this.endBattle('Squadra esausta: interviene l’Infermiera Joy.');
    this.openPokemonCenterDialog({emergency:true});
  },

  async awardBattleExperience(mon, amount) {
    if(!this.team.includes(mon) || mon.currentHp<=0)return;
    const levelCap=this.getLevelCap();
    if(mon.level>=levelCap){
      await this.battleText(`${mon.name} ha già raggiunto il limite di livello ${levelCap}!`);
      this.updateBattleHUD();
      return;
    }
    const levelEvents=await mon.gainExperience(amount,levelCap,options=>this.chooseEvolution(mon,options));
    await this.battleText(`${mon.name} riceve ${amount} punti esperienza!`);
    this.renderSidebar();this.updateBattleHUD();
    for(const event of levelEvents){
      await this.battleText(`${mon.name} raggiunge il livello ${event.level}!`);
      if(event.evolution){Dex.record(mon,'caught',`Evoluzione · Piano ${this.floor}`);await this.showEvolution(mon,event.evolution);}
      for(const move of event.moves)await this.learnMove(move,mon);
    }
    this.renderSidebar();this.updateBattleHUD();
  },

  async handleBattleVictory(){
    // Multiple async click/turn completions must never consume two Raid slots.
    const raidToken=this.isRaidActive?this.battleToken:null;
    if(raidToken!==null){
      if(this.raidVictoryResolutionToken===raidToken)return;
      this.raidVictoryResolutionToken=raidToken;
    }
    const defeated=this.enemyMon;
    this.runStats.wins++;
    this.$id('enemy-sprite').classList.add('faint-anim');
    await this.battleText(`${defeated.name} è esausto!`);
    const expMultiplier=(this.battleType==='gym'?GAME_BALANCE.expGymMultiplier:
      this.battleType==='trainer'?GAME_BALANCE.expTrainerMultiplier:1)*(this.floorKind==='trainers'?1.25:1);
    const eligible=[...this.battleParticipants].filter(p=>this.team.includes(p)&&p.currentHp>0);
    // Participants earn the usual award. With EXP Share (after badge 2),
    // each healthy nonparticipant additionally receives half a scaled award.
    if(this.runMode==='normal'){
      if(eligible.some(p=>p.treatedFaint)) Objectives.recordMilestone('second_chance',this.runId,this.floor,this.runMode);
      if(!this.isCelestialCave && this.getTeamSlotLimit()>1 && this.team.length===this.getTeamSlotLimit())
        Objectives.recordMilestone('full_team',this.runId,this.floor,this.runMode);
    }
    const shared=this.hasExpShare()&&this.expShareEnabled
      ?this.team.filter(mon=>mon.currentHp>0&&!eligible.includes(mon)):[];
    for(const mon of [...eligible,...shared]){
      mon.gainEffortValues(defeated.evYield);
      const earned=scaledBattleExperience(defeated.baseExperience,defeated.level,mon.level,expMultiplier);
      const reward=shared.includes(mon)?Math.max(1,Math.round(earned*.5)):
        mon===this.activeMon?earned:Math.max(1,Math.round(earned*.55));
      await this.awardBattleExperience(mon,reward);
    }
    // Raccolta: once per defeated enemy, each surviving team member with Pickup
    // has an independent 10% chance to find a simple item, subject to bag limits.
    for(const collector of this.team){
      if(collector.currentHp<=0||collector.ability!=='pickup'||Math.random()>=.10)continue;
      const loot=['pokeball','potion','elixir'][Math.floor(Math.random()*3)];
      if(this.grantItem(loot))await this.battleText(`${collector.name} trova un oggetto grazie a Raccolta!`);
    }
    const knockoutMsg=Abilities.afterKnockout(this.activeMon);
    if(knockoutMsg)await this.battleText(knockoutMsg);
    if(this.battleType==='mewtwo'){
      if(this.celestialPhase==='trial'){
        this.celestialPhase='rematch';this.endBattle('Hai sconfitto Mewtwo!');
        this.isLocked=true;
        setTimeout(()=>{if(this.isCelestialCave&&this.celestialPhase==='rematch')this.showOakMasterBallReward();},this.gameDelay(550));
      }else{
        this.completeMewtwoEncounter(false);
        this.endBattle('Mewtwo è stato sconfitto una seconda volta. Scompare nelle profondità della grotta!');
        this.showDiscoveryNotice('MEWTWO È SCOMPARSO · SPEDIZIONE CONCLUSA',3500);
        setTimeout(()=>{if(this.isCelestialCave&&this.celestialPhase==='complete')this.leaveCelestialCave();},this.gameDelay(650));
      }
      return;
    }
    if(this.battleType==='gym'&&this.gymQueue.length>0){
      await this.advanceGymAfterVictory();return;
    }
    if(this.isRaidActive){
      if(this.battleToken!==raidToken)return; // Run or battle changed while awaiting XP.
      this.raidQueueCount--;
      if(this.raidQueueCount>0){
        await this.battleText(`RAID · Restano ${this.raidQueueCount} avversari!`);
        await this.startBattle('wild',true);return;
      }
      this.isRaidActive=false;this.clearRaidTransientState();
      this.endBattle('RAID SUPERATO! Hai vinto tutte e cinque le sfide!');return;
    }
    if(['trainer','gym'].includes(this.battleType)){
      // Nella zona allenatori le ricompense valgono il 50% in più.
      const zone=this.floorKind==='trainers'&&this.battleType==='trainer'?1.5:1;
      const reward=Math.max(100,Math.round(zone*(defeated.level*18+(this.battleType==='gym'?180:0))/10)*10);
      this.runStats.trainers++;
      this.money+=reward;this.endBattle(`Vittoria contro ${defeated.name}! +${reward} Pokécoins.`);
    } else this.endBattle(`Vittoria contro ${defeated.name}!`);
  },

  async learnMove(move, pokemon=this.activeMon){
    if(pokemon.moves.some(m=>m.id===move.id))return;
    if(pokemon.moves.length<4){pokemon.moves.push(move);await this.battleText(`${pokemon.name} impara ${move.name}!`);return;}
    return new Promise(resolve=>{
      this.moveChoiceResolve=resolve;this.pendingMove=move;this.learningMon=pokemon;
      this.$id('learn-move-overlay').classList.remove('hidden');
      this.$id('learn-move-text').textContent=`${pokemon.name} vuole imparare ${move.name}. Quale mossa deve dimenticare?`;
      const list=this.$id('forget-moves-list');list.innerHTML='';
      pokemon.moves.forEach((old,i)=>{
        const b=document.createElement('button');b.className='act-btn';b.textContent=`${old.name} → ${move.name}`;
        b.onclick=()=>this.resolveMoveChoice(i);list.appendChild(b);
      });
    });
  },

  resolveMoveChoice(index){
    if(this.moveChoiceResolve){
      if(index!==null && this.pendingMove){this.learningMon.moves[index]=this.pendingMove;this.setBattleMsg(`${this.learningMon.name} impara ${this.pendingMove.name}!`);}
      this.$id('learn-move-overlay').classList.add('hidden');
      const resolve=this.moveChoiceResolve;this.moveChoiceResolve=null;this.pendingMove=null;resolve();
    }else this.$id('learn-move-overlay').classList.add('hidden');
  },

  endBattle(msg){
    this.acknowledgeDialogue();
    this.setMobileSheet(null);
    this.devSkipPending=false;this.devSkipChain=false;this.fastBattleText=false;
    this.battleToken++;this.battleBusy=false;this.pendingForcedSwitch=false;this.battleMode=null;
    this.updateBattleWingCloseButtons();
    this.pendingItemTarget=null;this.$id('item-target-prompt').classList.add('hidden');
    this.battleWeather=null;
    this.team.forEach(p=>{p.clearBattleConditions();p.protectedThisTurn=false;p.protectStreak=0;});
    this.closePartyActions();this.closePokemonInfo();
    this.ensureActivePokemon();
    this.enemyMon?.clearBattleConditions();
    this.$id('overlay-battle').classList.add('hidden');
    this.$id('overlay-battle').classList.remove('battle-preparing','battle-revealing');
    if(this.battleRevealTimer){clearTimeout(this.battleRevealTimer);this.battleRevealTimer=null;}
    this.$id('battle-controls').classList.add('hidden');
    this.$id('rotom-body').classList.remove('battle-active');
    this.$id('battle-confirm').classList.add('hidden');
    this.$id('enemy-sprite').classList.remove('faint-anim','hidden');
    this.$id('player-sprite').classList.remove('faint-anim');
    this.isLocked=false;this.logMsg(msg);this.renderSidebar();
    this.music?.setScene(this.isCelestialCave?'cave':'exploration');
    if(this.isCelestialCave)this.renderDungeon();
    this.saveCheckpoint();
    window.dispatchEvent(new Event('pokex:dex-battle-ended'));
  },
};
