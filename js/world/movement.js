import * as Dialogs from '../ui/dialogs.js';
import { GAME_BALANCE, LEGENDARY_BIRD_CHANCE_PER_STEP, shopItem } from '../core/constants.js';
import * as Objectives from '../systems/objectives.js';

export const movementMethods = {
  walkClock(){return typeof performance!=='undefined'?performance.now():Date.now();},

  /** Una finestra aperta sopra la mappa impedisce di camminare. */
  overlayBlocksWalking(){
    return ['pokemon-info-overlay','badge-case-overlay','pokedex-overlay','party-action-menu','dev-code-overlay','floor-jump-overlay','objectives-overlay']
      .some(id=>{const el=this.$id(id);return el&&!el.classList.contains('hidden');});
  },

  startContinuousWalk(dx,dy,source){
    if(this.overlayBlocksWalking()||this.isLocked||this.adventureCompleted||this.pendingItemTarget||!this.gridMap?.length)return false;
    // Keyboard auto-repeat never creates a second input or an overlapping timer.
    if(this.walkInputs.has(source))return true;
    this.walkInputs.set(source,{dx,dy});
    this.heldWalk={dx,dy,source};
    // Last pressed direction wins; releasing it resumes an earlier held direction.
    // A new input during an active step is deferred until the animation ends.
    this.queueContinuousWalk(true);
    return true;
  },

  queueContinuousWalk(immediate=false){
    clearTimeout(this.walkHoldTimer);
    this.walkHoldTimer=null;
    const input=Array.from(this.walkInputs.values()).at(-1);
    if(!input)return;
    if(this.isLocked||this.pendingItemTarget||this.adventureCompleted){this.stopContinuousWalk();return;}
    const now=this.walkClock();
    const remaining=Math.max(0,this.walkReadyAt-now);
    if(immediate&&remaining<=0){
      this.movePlayer(input.dx,input.dy);
      this.walkHoldTimer=setTimeout(()=>this.queueContinuousWalk(),Math.max(this.gameDelay(220),this.walkReadyAt-this.walkClock()));
      return;
    }
    const delay=immediate?Math.max(1,remaining):Math.max(this.gameDelay(220),remaining);
    this.walkHoldTimer=setTimeout(()=>{
      this.walkHoldTimer=null;
      const active=Array.from(this.walkInputs.values()).at(-1);
      if(!active)return;
      if(this.isLocked||this.pendingItemTarget||this.adventureCompleted){this.stopContinuousWalk();return;}
      if(this.walkClock()>=this.walkReadyAt-0.25)this.movePlayer(active.dx,active.dy);
      this.queueContinuousWalk();
    },delay);
  },

  stopContinuousWalk(source){
    if(source)this.walkInputs.delete(source);
    else this.walkInputs.clear();
    clearTimeout(this.walkHoldTimer);this.walkHoldTimer=null;
    const last=Array.from(this.walkInputs.entries()).at(-1);
    if(!last){this.heldWalk=null;return;}
    this.heldWalk={source:last[0],...last[1]};
    this.queueContinuousWalk(true);
  },

  async animateFishing(){
    // Four user-supplied fishing frames. Walking is locked throughout this animation.
    for(let frame=0;frame<4;frame++){
      this.playerFishingFrame=frame;this.renderDungeon();
      await this.wait(frame===3?290:135);
    }
    this.playerFishingFrame=null;this.playerStep=0;this.renderDungeon();
  },

  movePlayer(dx, dy) {
    if (this.overlayBlocksWalking() || this.isLocked || this.pendingItemTarget || this.adventureCompleted || !this.gridMap?.length) return;
    // A tile must complete its walking cycle before another one begins.
    // Logical collisions remain tile-based; only the sprite interpolates.
    if(this.walkClock()<this.walkReadyAt)return;
    if(Math.abs(dx)+Math.abs(dy)!==1)return; // never allow diagonals / zero steps
    this.playerFacing=dx<0?'left':dx>0?'right':dy<0?'up':'down';
    this.playerStep=0;
    const nx = this.playerPos.x + dx;
    const ny = this.playerPos.y + dy;

    if (nx >= 0 && nx < this.gridSize && ny >= 0 && ny < this.gridSize) {
      const targetCell = this.gridMap[ny][nx];

      if (targetCell.type === 'tree') {
        this.renderDungeon();this.logMsg("Un albero ti sbarra la strada!");
        return;
      }

      if(this.isCelestialCave && targetCell.type==='water'){
        this.logMsg('L’acqua profonda circonda la Grotta Celeste.');return;
      }
      if (targetCell.type === 'water') {
        this.renderDungeon();
        if (!this.items.fishingRod) {
          this.logMsg("Ti serve una Canna da Pesca per pescare!");
          return;
        }
        this.isLocked=true;
        this.fishingConfirmPending=true;
        this.askBattleConfirmation('Vuoi usare la Canna da Pesca qui?', async () => {
          this.logMsg('Lanci la lenza in acqua...');
          await this.animateFishing();
          if(!this.isLocked)return;
          this.logMsg("Abbocca un Pokémon d'acqua!");
          this.pendingWildEncounterType='fishing';
          this.$id('wild-encounter-overlay').classList.remove('hidden');
        });
        return;
      }

      if(this.isCelestialCave && targetCell.entity==='mewtwo'){
        this.startMewtwoCinematic();return;
      }
      if(this.isCelestialCave && targetCell.entity==='cave-exit'){
        if(this.celestialPhase==='complete')this.leaveCelestialCave();
        else this.showDiscoveryNotice('DEVI AFFRONTARE MEWTWO',2600);
        return;
      }
      if(this.isTownFloor() && targetCell.decoration){
        this.logMsg('Questo elemento del villaggio blocca il passaggio.');
        return;
      }
      const interactFromAdjacent=this.isSolidTownCell(targetCell);
      if(!interactFromAdjacent){
        this.walkDurationMs=this.gameDelay(210);
        this.walkReadyAt=this.walkClock()+this.walkDurationMs;
        this.playerStep=1;
        this.pendingWalk={dx,dy};
        this.playerPos={x:nx,y:ny};
        this.revealArea(nx,ny);
      }
      // Buildings and NPCs keep their tile/sprite while being interacted with from next door.
      this.renderDungeon();
      if(this.isCelestialCave && this.celestialPhase!=='complete' &&
          Math.abs(this.playerPos.x-5)+Math.abs(this.playerPos.y-4)<=1){
        this.startMewtwoCinematic();return;
      }

      if (targetCell.entity === 'pokecenter') {
        // Direct Nurse Joy conversation, without loading an indoor dungeon.
        if(this.playerPos.x===2&&this.playerPos.y===3&&dx===0&&dy===-1){
          this.openPokemonCenterDialog();
        }else this.logMsg('Parla con l’infermiera Joy davanti all’ingresso sul lato sud.');
        return;
      } else if (targetCell.entity === 'pokemart') {
        if(this.playerPos.x===7&&this.playerPos.y===3&&dx===0&&dy===-1){
          this.openPokemartDialog();
        }else this.logMsg('Parla con il commesso davanti all’ingresso sul lato sud.');
        return;
      } else if (targetCell.entity === 'npc') {
        this.isLocked = true;
        this.triggerNpcEvent(targetCell);
        return;
      } else if (targetCell.entity === 'gym') {
        if (this.completedGymFloors.has(this.floor)) {
          this.logMsg('Hai già conquistato la medaglia di questa palestra!');
          return;
        }
        this.requestGymChallenge();
        return;
      } else if (targetCell.entity === 'house') {
        this.logMsg('Una casetta tranquilla, illuminata e piena di fiori.');
        return;
      }

      if (targetCell.entity === 'trainer') {
        this.isLocked = true;
        this.pendingTrainerCell=targetCell;
        this.currentTrainerSprite = targetCell.trainerSprite || this.trainerSprites[0];
        targetCell.entity = null;
        this.renderDungeon(); // Remove the small encounter NPC from the map.
        this.logMsg(`${targetCell.trainerName || "Un Allenatore"} ti sfida!`);
        this.setTrainerPortrait(this.$id('trainer-portrait-img'), this.currentTrainerSprite);
        this.$id('trainer-dialog-speech').textContent = `${targetCell.trainerName || "Allenatore"}: preparati alla sfida!`;
        this.$id('trainer-encounter-overlay').classList.remove('hidden');
      } else if (targetCell.entity === 'item') {
        // Transactional pickup: only remove a collectible after it reaches the bag.
        // Otherwise it must remain on the same tile with the same item type.
        this.collectFloorItem(targetCell);
      } else if (targetCell.entity === 'door') {
        // Ogni decimo piano è una città: l'uscita richiede obbligatoriamente la medaglia.
        if (this.floor % 10 === 0 && !this.completedGymFloors.has(this.floor)) {
          this.logMsg('Agente: per proseguire hai bisogno della medaglia di questa città.');
          this.showDiscoveryNotice('AGENTE: SERVE LA MEDAGLIA PER PROSEGUIRE', 2900);
          return;
        }
        if(this.floor===80) {
          if(this.hasCompletedKantoChallenge())this.finishKantoAdventure();
          else {
            this.logMsg('Prima del traguardo devi ottenere tutte le otto medaglie di Kanto.');
            this.showDiscoveryNotice('COLLEZIONA TUTTE LE OTTO MEDAGLIE',3200);
          }
          return;
        }
        if(targetCell.exitKind){this.confirmForkExit(targetCell.exitKind);return;}
        this.advanceFloor(null);
        return;
      } else if(!this.isCelestialCave && targetCell.type==='grass' && this.rollLegendaryEncounter()){
        this.pendingWildEncounterType='legendary';this.isLocked=true;
        this.$id('wild-encounter-overlay').classList.remove('hidden');
        this.logMsg('Una presenza leggendaria ti osserva!');
      } else if (!this.isCelestialCave && targetCell.type === 'grass' && Math.random() < GAME_BALANCE.wildEncounterChance * (this.floorKind==='calm'?.5:1) * (this.activeMon?.ability==='illuminate'?1.75:this.activeMon?.ability==='stench'?0.5:1)) {
        this.isLocked = true;
        this.logMsg('Un Pokémon selvatico è comparso!');
        this.$id('wild-encounter-overlay').classList.remove('hidden');
      }

      this.renderDungeon();
    }
  },

  /** Sale al piano successivo; kind è il tipo di percorso scelto a un bivio (o null). */
  advanceFloor(kind){
    if (this.runMode === 'normal' && this.floorKind === 'trainers') {
      Objectives.recordMilestone('hard_route', this.runId, this.floor, this.runMode);
    }
    this.floor++;
    this.floorKind=kind;
    this.runStats.maxFloor=Math.max(this.runStats.maxFloor||1,this.floor);
    if([10,50,75].includes(this.floor))Objectives.record('floor',this.runId,{floor:this.floor});
    this.logMsg(`Sei salito al piano ${this.floor}!`);
    this.generateFloorDungeon();
    this.showFloorTransition();
    this.saveCheckpoint();
  },

  /** Bivio: prima di uscire si vede cosa offre il piano successivo. */
  async confirmForkExit(kind){
    this.isLocked=true;this.stopContinuousWalk();
    const trainers=kind==='trainers';
    const ok=await Dialogs.confirm({
      title:trainers?'USCITA DIFFICILE · ZONA ALLENATORI':'USCITA FACILE · PERCORSO TRANQUILLO',
      message:trainers?'Sul prossimo piano ti aspettano da 3 a 5 allenatori. Ricompense in Pokécoins +50% ed esperienza +25% in ogni lotta.'
        :'Sul prossimo piano nessun allenatore, la metà degli incontri selvatici e uno strumento in più da raccogliere.',
      accept:'PROSEGUI',cancel:'RESTA QUI',
    });
    this.isLocked=false;
    if(ok)this.advanceFloor(kind);
  },

  rollLegendaryEncounter(random=Math.random){
    if(this.badgeCount()<3)return false;
    // TASK-007: 0.08% per still-available bird, per valid grass step.
    // Keep fixed intervals: already-owned birds do NOT boost the other odds.
    const owned=new Set([...(this.caughtLegendarySpecies||[]),...this.team.map(mon=>Number(mon.id))]);
    const roll=Math.min(.999999999,Math.max(0,Number(random())));
    // Integer tickets avoid floating-point ambiguity at 0.08% boundaries.
    const ticket=Math.floor(roll*1_000_000);
    const ticketsPerBird=LEGENDARY_BIRD_CHANCE_PER_STEP*1_000_000; // exactly 800
    const index=Math.floor(ticket/ticketsPerBird);
    const birds=[144,145,146];
    if(index>=birds.length||owned.has(birds[index]))return false;
    this.pendingLegendaryId=birds[index];return true;
  },

  isSolidTownCell(cell){
    if(!this.isTownFloor() || !cell)return false;
    return Boolean(cell.decoration) || ['pokecenter','pokemart','gym','house','npc'].includes(cell.entity);
  },

  revealArea(px, py){
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const nx = px + dx, ny = py + dy;
        if (nx >= 0 && nx < this.gridSize && ny >= 0 && ny < this.gridSize) {
          this.gridMap[ny][nx].revealed = true;
        }
      }
    }
  },

  async scanRadar(){
    if(this.isLocked || !this.gridMap?.length)return;
    // La prima volta il Radar spiega cosa fa, e si può decidere di non consumare la scansione.
    let seen=false;try{seen=localStorage.getItem('pokexplorer:radar-help')==='1';}catch{/* memoria non disponibile */}
    if(!seen){
      try{localStorage.setItem('pokexplorer:radar-help','1');}catch{/* memoria non disponibile */}
      this.isLocked=true;
      const ok=await Dialogs.confirm({title:'ROTOM RADAR',
        message:'Il Radar rivela tutte le caselle del piano: uscita, allenatori, strumenti e acqua per pescare. Ogni scansione vale per un solo piano; se ne hai bisogno di altre, le trovi al PokéMarket.',
        accept:'USA ORA',cancel:'NON ADESSO'});
      this.isLocked=false;
      if(!ok)return;
    }
    if(!this.gridMap.some(row=>row.some(cell=>!cell.revealed))){
      this.logMsg('Mappa già esplorata: nessuna scansione consumata.');return;
    }
    if(this.radarCharges<=0){this.logMsg(`Radar esaurito: acquista un utilizzo al PokéMarket (${shopItem('radar').price} Pokécoins).`);return;}
    this.radarCharges--;
    for(const row of this.gridMap)for(const cell of row)cell.revealed=true;
    this.renderDungeon();this.renderSidebar();
    this.logMsg(`Rotom Radar attivato! Utilizzi rimanenti: ${this.radarCharges}.`);
  },
};
