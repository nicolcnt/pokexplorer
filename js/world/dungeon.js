// Generazione dei piani (percorsi, villaggi e città), oggetti a terra e raid nascosti.
import { TYPE_CHART, typeEffectiveness } from '../core/types.js';
import { FALLBACK_AVATAR, FISHING_POOL, GAME_BALANCE, GYM_TRAINER_POOLS, OAK_MAP_SPRITE, OVERWORLD_NPC_LABELS, ROUTE_TRAINER_CLASSES, groundHealingItem, itemLabel, overworldPortraitUrl, overworldSpriteUrl, randomKantoSpecies } from '../core/constants.js';

const shuffle = list => { for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; } return list; };

export const isForkFloor = floor => Number.isInteger(floor) && floor >= 3 && floor < 80 && floor % 5 === 3;

export const dungeonMethods = {
  generateFloorDungeon() {
    this.cancelPokemonCenterHealing();
    this.isCelestialCave=false;this.$id('dungeon-grid-board')?.classList.remove('celestial-cave');
    this.music?.setScene('exploration');
    this.gridMap = [];
    this.playerPos = { x: 0, y: 0 };
    this.isLocked = false;
    this.isRaidActive = false;
    this.raidQueueCount = 0;
    this.clearRaidTransientState();
    this.gymQueue = [];
    this.currentGym = null;
    this.pendingTrainerCell=null;
    this.gymChallengePending = false;
    this.battleMode = null;
    this.pendingForcedSwitch = false;

    const isCity = this.floor % 10 === 0;
    const isVillage = this.floor % 5 === 0 && !isCity;
    // Il tipo di piano scelto all'uscita precedente vale solo per i percorsi.
    if (isCity || isVillage) this.floorKind = null;
    const kind = this.floorKind;


    for (let y = 0; y < this.gridSize; y++) {
      let row = [];
      for (let x = 0; x < this.gridSize; x++) {
        row.push({ x, y, type: isCity || isVillage ? 'town-ground' : 'grass', entity: null, revealed: false });
      }
      this.gridMap.push(row);
    }

    if (isVillage || isCity) {
      const size=this.gridSize;
      const variant=(Math.floor(this.floor/5)-1)%4;
      const paths=new Set();
      const key=(x,y)=>`${x},${y}`;
      const road=(x,y)=>paths.add(key(x,y));
      // Broad connected avenues guarantee start, buildings and exit are reachable.
      for(let x=0;x<size;x++) road(x,4);
      for(let y=0;y<size;y++) road(4,y);
      for(let y=4;y<size;y++) road(8,y);
      for(let x=4;x<size;x++) road(x,8);
      for(let x=0;x<=4;x++) road(x,0);
      for(let y=0;y<=4;y++) road(0,y);
      road(9,9);road(8,9);
      // Small secondary plazas vary with the city instead of one copied cross.
      if(variant%2===0){for(let x=2;x<=7;x++)road(x,3);for(let y=2;y<=7;y++)road(6,y);}
      else {for(let x=1;x<=8;x++)road(x,6);for(let y=1;y<=6;y++)road(3,y);}
      for(let y=0;y<size;y++) for(let x=0;x<size;x++){
        const c=this.gridMap[y][x];
        const edge=(x===0||y===0||x===size-1||y===size-1);
        c.type=paths.has(key(x,y))?'path':edge?((x*7+y*3+variant)%8===0?'water':'tree'):'town-ground';
        if(c.type==='town-ground'){
          const decorationNoise=(x*13+y*17+variant*11)%29;
          c.decoration=decorationNoise<3?['flowers','hedge','flower-red'][decorationNoise]:
            decorationNoise===5?'lantern':decorationNoise===8?'flower-blue':
            decorationNoise===12?'bench':decorationNoise===16?'flower-yellow':
            decorationNoise===20?'rock':null;
        }
      }
      const place=(x,y,entity)=>{const c=this.gridMap[y][x];c.type='town-ground';c.entity=entity;c.decoration=null;};
      place(2,2,'pokecenter');place(7,2,'pokemart');
      place(2,7,'house');place(7,7,'house');
      if(variant===1||variant===3) place(5,6,'house');
      if(isCity)place(5,2,'gym');
      // Connect every building entrance to the central east-west avenue.
      // Buildings are solid; the approach needs to be walkable from an adjacent tile.
      for(const [bx,by,dy] of [[2,2,1],[7,2,1],[2,7,-1],[7,7,-1],
        ...(isCity?[[5,2,1]]:[]),...((variant===1||variant===3)?[[5,6,-1]]:[])]){
        for(let y=by+dy;dy>0?y<=4:y>=4;y+=dy){
          const c=this.gridMap[y]?.[bx];
          if(!c || c.entity)break;
          c.type='path';c.decoration=null;
        }
      }
      // Plazas, signs and landscaping (decorative sprites are not obstacles).
      for(const [x,y,what] of [[5,5,'fountain'],[1,3,'sign'],[7,5,'flowers'],[1,6,'lantern'],[6,1,'hedge']]){
        const c=this.gridMap[y]?.[x];
        if(c&&!c.entity&&c.type==='town-ground')c.decoration=what;
      }
      // No NPC can replace a building, a water tile, the player spawn or exit.
      const candidates=[];
      for(let y=1;y<size-1;y++)for(let x=1;x<size-1;x++){
        const c=this.gridMap[y][x];
        if(c.entity||['tree','water'].includes(c.type)||paths.has(key(x,y)))continue;
        // Large building sprites extend beyond one cell: leave a buffer to avoid visual overlap.
        const buildings=[[2,2],[7,2],[2,7],[7,7],...(isCity?[[5,2]]:[]),...((variant===1||variant===3)?[[5,6]]:[])];
        if(buildings.some(([bx,by])=>Math.abs(x-bx)+Math.abs(y-by)<=1))continue;
        if(![[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>paths.has(key(x+dx,y+dy))))continue;
        if(Math.abs(x-0)+Math.abs(y-0)<3)continue;
        candidates.push(c);
      }
      // Rotate per map, but use distinct poses/sprites in every village/city.
      shuffle(candidates);
      const spriteStart=(this.floor*3)%this.npcSprites.length;
      for(let i=0,n=Math.min(candidates.length,3+Math.floor(Math.random()*3));i<n;i++){
        const c=candidates[i];c.entity='npc';c.decoration=null;
        const officialIndex=(spriteStart+i*5)%this.npcSprites.length;
        c.npcSprite=this.npcSprites[officialIndex];
        c.npcName=OVERWORLD_NPC_LABELS[officialIndex];
        c.npcLine=this.npcDialogues[(this.floor+i*5)%this.npcDialogues.length];
        c.localSpriteFallback=FALLBACK_AVATAR;
        // The encounter is generated ONCE per NPC, not rerolled each conversation.
        const eventRoll=Math.random();
        c.npcEvent=eventRoll<.10?'trade':eventRoll<.25?'gift':eventRoll<.33?'heal':eventRoll<.40?'radar':eventRoll<.50?'quiz':'dialogue';
        if(c.npcEvent==='quiz')c.npcQuiz=this.createTypeQuiz();
        if(c.npcEvent==='trade')c.npcTradeSpeciesId=randomKantoSpecies(Math.max(5,this.floor),Math.max(25,this.floor));
        if(c.npcEvent==='gift')c.npcGiftId=Math.random()<.5?'pokeball':'elixir';
        if(this.floor===15 && i===0){
          c.specialRole='eevee-elder';c.npcName='Anziana delle pietre';
          c.npcEvent='dialogue';c.npcSprite=overworldSpriteUrl('old_woman');
          c.npcLine='Ho una storia da raccontarti su Eevee.';
        }
        if(this.floor===5 && i===0){
          c.specialRole='fisherman';c.npcName='Pescatore';
          c.npcLine='Un buon viaggio comincia con una buona canna!';
          c.npcSprite=overworldSpriteUrl('fisher');
          c.localSpriteFallback=FALLBACK_AVATAR;
        }
        if(this.floor===20 && i===0){
          c.specialRole='exp-share-gift';c.npcName='Assistente Pokémon';
          c.npcLine='Hai sconfitto Misty? Ho qualcosa per la tua squadra.';
          c.npcSprite=overworldSpriteUrl('scientist');
          c.localSpriteFallback=FALLBACK_AVATAR;
        }
      }
      if(this.floor===75&&!this.oakEventDismissed){
        const oak=this.gridMap[3][5];oak.type='town-ground';oak.entity='npc';oak.decoration=null;
        oak.specialRole='celestial-oak';oak.npcName='Professor Oak';
        oak.npcSprite=OAK_MAP_SPRITE;
        oak.localSpriteFallback=OAK_MAP_SPRITE;
      }
      place(9,9,'door');
    } else {
      // Generatore con percorso garantito, ostacoli organici e obiettivi raggiungibili.
      const size = this.gridSize;
      const walkable = (x,y) => x >= 0 && y >= 0 && x < size && y < size;
      const key = (x,y) => `${x},${y}`;
      const protectedPath = new Set([key(0,0)]);
      let cx = 0, cy = 0;
      // Un sentiero tortuoso che conduce all'uscita opposta alla partenza.
      while (cx !== size - 1 || cy !== size - 1) {
        const canX = cx < size - 1, canY = cy < size - 1;
        if (canX && (!canY || Math.random() < .5)) cx++; else cy++;
        protectedPath.add(key(cx,cy));
      }
      // Bivio: su alcuni percorsi c'è una seconda uscita in alto a destra verso la zona allenatori,
      // mentre quella in basso porta a un percorso tranquillo. Mai prima di un villaggio o di una città.
      const fork = isForkFloor(this.floor);
      if (fork) {
        const row = 1 + Math.floor(Math.random() * 2);
        for (let y = 0; y <= row; y++) protectedPath.add(key(0, y));
        for (let x = 0; x < size; x++) protectedPath.add(key(x, row));
        for (let y = 0; y <= row; y++) protectedPath.add(key(size - 1, y));
      }
      for (let y=0; y<size; y++) for (let x=0; x<size; x++) {
        const cell=this.gridMap[y][x];
        const noise = Math.sin(x*1.7+y*.65+this.floor)*.14 + Math.cos(y*1.8-x*.48)*.13 + Math.random()*.72;
        cell.type = protectedPath.has(key(x,y)) ? 'path' : noise < .22 ? 'water' : noise < .49 ? 'tree' : noise < .72 ? 'grass' : 'path';
      }
      // Apri diramazioni per rendere esplorabili anche le zone lontane dal percorso principale.
      for(let i=0;i<15;i++) {
        let x=Math.floor(Math.random()*size), y=Math.floor(Math.random()*size);
        if(this.gridMap[y][x].type==='tree' && Math.random()<.55) this.gridMap[y][x].type='grass';
      }
      const reachable = new Map();
      const queue=[[0,0]]; reachable.set(key(0,0),0);
      for(let i=0;i<queue.length;i++) {
        const [x,y]=queue[i];
        for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
          const nx=x+dx,ny=y+dy,k=key(nx,ny);
          if(walkable(nx,ny) && !reachable.has(k) && !['tree','water'].includes(this.gridMap[ny][nx].type)) {
            reachable.set(k,reachable.get(key(x,y))+1); queue.push([nx,ny]);
          }
        }
      }
      this.gridMap[size-1][size-1].type='grass';
      this.gridMap[size-1][size-1].entity='door';
      if (fork) {
        this.gridMap[size-1][size-1].exitKind='calm';
        Object.assign(this.gridMap[0][size-1], { type: 'grass', entity: 'door', exitKind: 'trainers' });
      }
      const candidates=queue.filter(([x,y])=> !(x===0&&y===0) && !(x===size-1&&y===size-1) && !(fork&&x===size-1&&y===0) && reachable.get(key(x,y))>=3);
      const pick=(predicate=()=>true)=>{
        const options=candidates.filter(([x,y])=>predicate(this.gridMap[y][x]));
        if(!options.length)return null;
        const [x,y]=options[Math.floor(Math.random()*options.length)];
        candidates.splice(candidates.findIndex(v=>v[0]===x&&v[1]===y),1);
        return this.gridMap[y][x];
      };
      // Item and trainer placements are independent of the existing surprise-raid trigger.
      // F02 is intentionally not part of this release.
      const trainerCount=kind==='trainers'?3+Math.floor(Math.random()*3):kind==='calm'?0:1+Math.floor(Math.random()*4);
      for(let i=0;i<trainerCount;i++) {
        const c=pick(); if(!c)break;
        const [name,overworld]=ROUTE_TRAINER_CLASSES[Math.floor(Math.random()*ROUTE_TRAINER_CLASSES.length)];
        c.entity='trainer'; c.trainerName=name;
        c.trainerSprite=overworldPortraitUrl(overworld);
        c.trainerOverworldSprite=overworldSpriteUrl(overworld);
      }
      for(let i=0,n=1+Math.floor(Math.random()*3)+(kind==='calm'?1:0);i<n;i++) {
        const c=pick();
        if(c){
          c.entity='item';
          // Determine loot at generation time. A full bag must never reroll it.
          const roll=Math.random();
          c.itemKind=roll<.4?'pokeball':roll<.8?groundHealingItem(this.floor):'elixir';
        }
      }
      // R2.4: raids are a 10% surprise on collected item tiles, not in grass.
    }

    if(isCity || isVillage || this.devMode){
      // Dev Mode reveals every tile of this dungeon as soon as it is generated.
      // Hidden raid triggers remain hidden: only the fog-of-war is removed.
      for(const row of this.gridMap)for(const cell of row)cell.revealed=true;
    } else this.revealArea(0,0);
    this.renderDungeon();
    this.renderSidebar();
    if(this.floor===75&&!this.oakEventDismissed){
      this.logMsg('Un silenzio innaturale avvolge il villaggio. Il Professor Oak ti sta aspettando.');
      this.showDiscoveryNotice?.('UN PRESAGIO · IL PROFESSOR OAK TI ASPETTA',3600);
    }else if(this.gridMap[0][this.gridSize-1].exitKind==='trainers'){
      this.logMsg(`Piano ${this.floor}: bivio! In alto a destra l’uscita Difficile, in basso l’uscita Facile.`);
    }else this.logMsg(`Piano ${this.floor}${kind==='trainers'?' · zona allenatori':kind==='calm'?' · percorso tranquillo':''}: esplora liberamente!`);
  },

  /** Domanda sui tipi per gli abitanti: un tipo superefficace e uno che non lo è. */
  createTypeQuiz(random=Math.random){
    const types=Object.keys(TYPE_CHART);
    for(let attempt=0;attempt<40;attempt++){
      const defender=types[Math.floor(random()*types.length)];
      const strong=types.filter(t=>typeEffectiveness(t,[defender])>1);
      const weak=types.filter(t=>typeEffectiveness(t,[defender])<=1);
      if(!strong.length||!weak.length)continue;
      return {defender,right:strong[Math.floor(random()*strong.length)],wrong:weak[Math.floor(random()*weak.length)],first:random()<.5?'right':'wrong'};
    }
    return {defender:'grass',right:'fire',wrong:'water',first:'right'};
  },

  /** Aggiunge l'anziana anche sui checkpoint del piano 15 creati prima della patch. */
  ensureEeveeElder() {
    if (this.floor !== 15 || !this.gridMap?.length) return false;
    if (this.gridMap.flat().some(c => c.specialRole === 'eevee-elder')) return true;
    const cell = this.gridMap.flat().find(c => c.entity === 'npc' && !c.specialRole && c.npcEvent === 'dialogue') ||
      this.gridMap.flat().find(c => c.entity === 'npc' && !c.specialRole);
    if (!cell) return false;
    Object.assign(cell, { specialRole:'eevee-elder', npcName:'Anziana delle pietre',
      npcEvent:'dialogue', npcSprite:overworldSpriteUrl('old_woman'),
      npcLine:'Ho una storia da raccontarti su Eevee.' });
    return true;
  },

  collectFloorItem(cell){
    if(!cell || cell.entity!=='item' || this.isRaidActive)return false;
    if(!cell.itemKind){
      // Legacy maps without an assigned drop are upgraded once, never rerolled.
      const roll=Math.random();
      cell.itemKind=roll<.4?'pokeball':roll<.8?groundHealingItem(this.floor):'elixir';
    }
    // Transactional check: a full inventory must not consume the tile,
    // including via the existing (unchanged) surprise-raid chance.
    if(!this.canAcceptItem(cell.itemKind)){
      const name=itemLabel(cell.itemKind).toUpperCase();
      this.logMsg(`Zaino pieno: ${name} rimane a terra. Torna dopo aver liberato spazio.`);
      this.showDiscoveryNotice(`ZAINO PIENO · ${name}`);
      return false;
    }
    // Each successfully attempted collectible independently rolls a 10% Raid.
    // Only active/pending Raid state blocks another activation. A failed first
    // opponent load preserves the original roll on the same source cell.
    if(Math.random()<.10){
      this.raidPickupSourceCell=cell;
      cell.entity=null;
      this.renderDungeon();
      this.logMsg('La Poké Ball nasconde una sfida RAID!');
      this.beginHiddenRaid();
      return true;
    }
    const label=itemLabel(cell.itemKind).toUpperCase();
    const collected=this.grantItem(cell.itemKind);
    if(collected){
      cell.entity=null;
      this.renderSidebar();
    }
    this.logMsg(collected?`Hai trovato: ${label}!`:`Zaino pieno: ${label} rimane a terra. Torna dopo aver liberato spazio.`);
    this.showDiscoveryNotice(collected?`${label} ×1 · AGGIUNTO ALLO ZAINO`:`ZAINO PIENO · ${label}`);
    if(collected)this.saveCheckpoint();
    return collected;
  },

  clearRaidTransientState(){
    // Invalidate a pending "tap to enter the Raid" callback when the player
    // changes dungeon or returns to the menu.
    this.raidLaunchNonce=(this.raidLaunchNonce||0)+1;
    this.cancelRaidNotice?.();
    this.raidPickupSourceCell=null;
    this.$id('pokenav-screen-root')?.classList.remove('raid-discovery');
  },

  beginHiddenRaid(){
    if(this.isRaidActive)return false;
    this.isRaidActive=true;this.raidQueueCount=5;this.isLocked=true;
    const launch=++this.raidLaunchNonce;
    this.logMsg('Hai scoperto un RAID nascosto! Cinque battaglie senza cattura.');
    const root=this.$id('pokenav-screen-root');
    root.classList.add('raid-discovery');
    this.showDiscoveryNotice('RAID SEGRETO! 5 LOTTE · NESSUNA CATTURA',0);
    this.waitForNotice().then(()=>{
      if(launch!==this.raidLaunchNonce)return;
      root.classList.remove('raid-discovery');
      if(this.isRaidActive)this.startBattle('wild');
    });
    return true;
  },

  getEncounterPool(type){
    if(type==='fishing')return this.floor<=15?FISHING_POOL.early:FISHING_POOL.late;
    if(type==='gym')return GYM_TRAINER_POOLS[Math.max(0,Math.min(7,Math.floor(this.floor/10)-1))];
    // Ordinary encounters use the whole non-legendary Kanto Pokédex.
    // Gym pools/fishing retain their biome-specific typing.
    return null;
  },

  encounterLevel(type,leader=false,rng=Math.random){
    const isTrainer=type==='trainer'||type==='gym';
    if(this.floor<=GAME_BALANCE.earlyFloors){
      if(leader)return 6;
      return isTrainer?4+Math.floor(rng()*2):(this.floor===1?1+Math.floor(rng()*3):2+Math.floor(rng()*2));
    }
    const base=3+this.floor*GAME_BALANCE.levelPerFloor;
    return Math.max(2,Math.min(70,Math.round(base+(leader?4:isTrainer?2:0)+Math.floor(rng()*2))));
  },
};
