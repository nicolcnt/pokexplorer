// Disegno della mappa 10×10: caselle, edifici, scenari, personaggi e animazione del passo.
import { FALLBACK_AVATAR, OAK_MAP_SPRITE, overworldSpriteUrl, resolvedSpritePath } from '../core/constants.js';

export const mapRenderMethods = {
  createSingleFrameAvatar(url,fallback,description,extraClass=''){
    // Source images are multi-pose horizontal sprite sheets: crop one 16×32 frame
    // in a dedicated viewport rather than scaling the entire sheet into the tile.
    const frame=document.createElement('span');
    frame.className=`grid-icon official-overworld single-frame sprite-frame ${extraClass}`;
    frame.setAttribute('role','img');frame.setAttribute('aria-label',description);
    const image=document.createElement('img');image.className='overworld-frame-img';
    image.src=resolvedSpritePath(url);image.alt='';image.loading='eager';image.decoding='async';
    // Regular FireRed URLs are horizontally-arranged sheets: CSS clips the
    // first 16x32 overworld frame.  Do not resize a dialogue portrait here.
    if(image.src.endsWith('.svg')){frame.classList.add('pokex-single-frame');image.style.width='16px';image.style.height='32px';}
    image.onerror=()=>{image.onerror=null;image.src=resolvedSpritePath(fallback);
      frame.classList.add('local-fallback');
      image.style.width='16px';image.style.height='32px';};
    frame.appendChild(image);return frame;
  },

  renderDungeon() {
    const board=this.$id('dungeon-grid-board');
    if(!board || !Array.isArray(this.gridMap) || !this.gridMap.length)return;
    board.classList.toggle('npc-conversation-active',Boolean(this.activeDialogNpcCell));
    board.classList.toggle('celestial-cave',this.isCelestialCave);
    const avatarFolder=this.playerGender==='champion'?'champion':this.playerGender==='female'?'girl':'red';
    const spriteUrl=this.playerFishingFrame!==null ?
      (avatarFolder==='girl' && this.playerFacing!=='down'
        ? `assets/sprites/player/girl/walk/${this.playerFacing}-${Math.min(this.playerFishingFrame,2)}.png`
        : `assets/sprites/player/${avatarFolder}/fish/${this.playerFacing}-${this.playerFishingFrame}.png`) :
      `assets/sprites/player/${avatarFolder}/walk/${this.playerFacing}-${this.playerStep}.png`;
    const actorName=this.playerGender==='female'?'Allenatrice':'Allenatore';
    const size=this.gridSize;
    const fresh=this._renderedGrid!==this.gridMap || board.querySelectorAll(':scope > .grid-cell').length!==size*size;
    // Reuse the SAME avatar element across cells; destroying it each step caused
    // jitter/flicker and invalidated its animation before reaching the next tile.
    // Never detach the avatar on routine renders: that interrupted animations
    // and could leave an unchanged player tile with no child at all.
    let avatar=board.querySelector('.player-avatar');
    if(!avatar)avatar=document.createElement('span');
    // Preserve the walk animation class during unchanged map renders.
    avatar.classList.add('grid-icon','player-avatar');
    avatar.classList.toggle('red-local-sprite',avatarFolder==='red');
    avatar.classList.toggle('girl-local-sprite',avatarFolder==='girl');
    avatar.classList.toggle('local-fishing-sprite',this.playerFishingFrame!==null && !(avatarFolder==='girl' && this.playerFacing!=='down'));
    avatar.setAttribute('role','img');
    avatar.setAttribute('aria-label',`${actorName} rivolto verso ${this.playerFacing}`);
    if(this.pendingWalk || !avatar.classList.contains('walk-arrival'))
      avatar.style.backgroundImage=`url('${spriteUrl}')`;
    if(fresh)board.replaceChildren();
    else board.querySelectorAll(':scope > .map-building-overlay, :scope > .map-scenery-overlay').forEach(element=>element.remove());
    const architecture=[];
    for(let y=0;y<size;y++)for(let x=0;x<size;x++){
      const cell=this.gridMap[y][x];
      const idx=y*size+x,player=x===this.playerPos.x&&y===this.playerPos.y;
      const node=fresh?document.createElement('div'):board.children[idx];
      // Each tile renders in row-depth order. A player standing below a building
      // must be in front; a player above it must remain behind its facade.
      node.style.setProperty('--map-depth',String(10+y*2+(player?1:0)));
      const locked=cell.entity==='door'&&this.floor%10===0&&!this.completedGymFloors.has(this.floor);
      // Tile signatures prevent recreating 100 nodes for every 170ms step.
      const key=[cell.revealed,cell.type,cell.entity,cell.specialRole,cell.decoration,cell.npcSprite,
        cell.trainerOverworldSprite,player,locked,this.activeDialogNpcCell===cell].join('|');
      if(node.dataset.tileSignature!==key){
        node.className=cell.revealed?`grid-cell ${cell.type}${locked?' locked-exit':''}${player?' player-cell':''}`:'grid-cell fog';
        node.replaceChildren();
        if(!cell.revealed){
          node.setAttribute('aria-label','Area inesplorata');
          node.style.backgroundPosition=`${x*100/(size-1)}% ${y*100/(size-1)}%`;
        }else{
          node.removeAttribute('aria-label');node.style.backgroundPosition='';
          if(player)node.appendChild(avatar);
          else if(cell.type==='tree')node.classList.add('environment-footprint');
          else if(cell.type==='water')node.innerHTML='<span class="water-ripple" aria-hidden="true"></span>';
          else if(cell.entity==='pokecenter')node.classList.add('building-footprint');
          else if(cell.entity==='pokemart')node.classList.add('building-footprint');
          else if(cell.entity==='gym')node.classList.add('building-footprint');
          else if(cell.entity==='house')node.classList.add('building-footprint');
          else if(cell.entity==='mewtwo'){
            const aura=document.createElement('span');aura.className='celestial-mewtwo-aura celestial-portal-v2';
            aura.setAttribute('role','img');aura.setAttribute('aria-label','Sfera aurica di Mewtwo');
            const halo=document.createElement('span');halo.className='aura-outer-shimmer';
            const ring=document.createElement('span');ring.className='aura-ellipse aura-ellipse-back';
            const orb=document.createElement('span');orb.className='celestial-aura-orb';
            const core=document.createElement('span');core.className='aura-inner-core';orb.appendChild(core);
            const front=document.createElement('span');front.className='aura-ellipse aura-ellipse-front';
            const sparks=document.createElement('span');sparks.className='aura-particles';
            for(let i=0;i<9;i++){const spark=document.createElement('i');spark.style.setProperty('--spark-index',String(i));sparks.append(spark);}
            aura.append(halo,ring,orb,front,sparks);node.appendChild(aura);
          }else if(cell.entity==='cave-exit'){
            node.innerHTML='<span class="celestial-cave-exit" role="img" aria-label="Uscita dalla Grotta Celeste">▼</span>';
          }else if(cell.entity==='npc'){
            if(cell.specialRole==='celestial-oak')node.classList.add('oak-story-event');
            if(this.activeDialogNpcCell!==cell && ['celestial-oak','cave-oak'].includes(cell.specialRole)){
              node.appendChild(this.createSingleFrameAvatar(
                cell.npcSprite||OAK_MAP_SPRITE,
                OAK_MAP_SPRITE,'Professor Oak','celestial-oak-sprite'));
            }else if(this.activeDialogNpcCell!==cell){
              node.appendChild(this.createSingleFrameAvatar(cell.npcSprite||this.npcSprites[0],
                FALLBACK_AVATAR,`Abitante: ${cell.npcName||'Pokémon Rosso Fuoco'}`,'town-npc'));
            }
          }else if(cell.entity==='door'){
            if(locked)node.appendChild(this.createSingleFrameAvatar(overworldSpriteUrl('policeman'),
              FALLBACK_AVATAR,'Poliziotto: serve la medaglia per proseguire','gate-police'));
            else if(cell.exitKind){
              const trainers=cell.exitKind==='trainers';
              node.classList.add(trainers?'exit-trainers':'exit-calm');
              node.innerHTML=`<span class="exit-arrow" role="img" aria-label="Uscita ${trainers?'Difficile: zona allenatori':'Facile: percorso tranquillo'}">➜</span><span class="exit-tag" aria-hidden="true">${trainers?'D':'F'}</span>`;
            }else node.innerHTML='<span class="exit-arrow" role="img" aria-label="Uscita verso destra">➜</span>';
          }else if(cell.entity==='item')node.innerHTML='<img class="grid-icon map-pickup-sprite" src="assets/sprites/items/pokeball.png" alt="Oggetto">';
          else if(cell.entity==='trainer'){
            node.appendChild(this.createSingleFrameAvatar(
              cell.trainerOverworldSprite||overworldSpriteUrl('youngster'),
              FALLBACK_AVATAR,
              cell.trainerName||'Allenatore','route-trainer'));
          }else if(cell.decoration){
            node.classList.add('environment-footprint');
          }
        }
        node.dataset.tileSignature=key;
      }else if(player){
        // No regeneration required for an idle/pose update.
        node.appendChild(avatar);
      }
      if(fresh)board.appendChild(node);
      if(cell.revealed && ['house','pokemart','pokecenter','gym'].includes(cell.entity)){
        const building=document.createElement('img');
        building.className='map-building-overlay';
        const houseVariant=1+((x*7+y*3+this.floor)%3);
        building.src=cell.entity==='house'?`assets/sprites/buildings/house-${houseVariant}.png`:
          `assets/sprites/buildings/${cell.entity}.png`;
        building.alt=({house:'Casa',pokemart:'Pokémarket',pokecenter:'Centro Pokémon',gym:'Palestra'})[cell.entity];
        building.setAttribute('aria-hidden','true');
        // Overlay is anchored to the bottom of its tile, and sorted against
        // player cells by row depth. A neighboring tile cannot clip its roof.
        building.style.left=`${(x+.5)*100/size}%`;
        building.style.bottom=`${(size-y-1)*100/size}%`;
        building.style.zIndex=String(220+y);
        architecture.push(building);
      }
      // Environment is drawn in board coordinates, never cropped by a 1-tile cell.
      // This foreground is intentionally *only* trees, buildings and scenery,
      // not NPCs or trainer sprites. Collision and map data are untouched.
      if(cell.revealed && (cell.type==='tree'||cell.decoration)){
        const scenery=document.createElement('img');
        scenery.className='map-scenery-overlay'+(cell.type==='tree'?' scenery-tree':' scenery-decoration');
        scenery.src=cell.type==='tree'?'assets/sprites/world/tree.svg':`assets/sprites/decor/${cell.decoration}.svg`;
        scenery.alt='';scenery.setAttribute('aria-hidden','true');
        scenery.style.left=`${(x+.5)*100/size}%`;
        scenery.style.bottom=`${(size-y-1)*100/size}%`;
        scenery.style.zIndex=String(220+y);
        architecture.push(scenery);
      }
    }
    board.append(...architecture);
    this._renderedGrid=this.gridMap;
    if(this.pendingWalk){
      const {dx,dy}=this.pendingWalk;this.pendingWalk=null;
      const cell=board.getBoundingClientRect().width/size;
      avatar.getAnimations?.().forEach(animation=>animation.cancel());
      avatar.classList.remove('walk-arrival');
      avatar.style.setProperty('--walk-offset-x',`${-dx*cell}px`);
      avatar.style.setProperty('--walk-offset-y',`${-dy*cell}px`);
      avatar.style.setProperty('--walk-duration',`${this.walkDurationMs}ms`);
      // Continuous 1 -> 0 -> 2 -> 0 walk poses while moving across one tile.
      const sequence=++this.walkSequence,facing=this.playerFacing;
      const frame=(step)=>{
        if(sequence===this.walkSequence&&avatar.isConnected)
          avatar.style.backgroundImage=`url('assets/sprites/player/${avatarFolder}/walk/${facing}-${step}.png')`;
      };
      frame(1);
      void avatar.offsetWidth;
      avatar.classList.add('walk-arrival');
      clearTimeout(this.playerIdleTimer);
      setTimeout(()=>frame(0),this.walkDurationMs*.28);
      setTimeout(()=>frame(2),this.walkDurationMs*.56);
      this.playerIdleTimer=setTimeout(()=>{
        frame(0);
        if(sequence===this.walkSequence)avatar.classList.remove('walk-arrival');
        this.playerStep=0;
      },this.walkDurationMs);
    }else if(this.walkClock()>=this.walkReadyAt){
      avatar.classList.remove('walk-arrival');
    }
  },
};
