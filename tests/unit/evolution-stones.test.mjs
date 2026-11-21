import './setup.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { Pokemon } from '../../js/core/pokemon.js';
import { speciesData } from '../../js/core/data.js';
import { ITEMS, STONE_EVOLUTIONS, levelEvolutionOptions, evolutionFamily, evolvedEncounterId } from '../../js/core/constants.js';
import { createRunState } from '../../js/systems/run-state.js';
import * as Checkpoints from '../../js/systems/checkpoints.js';
import * as Dex from '../../js/systems/pokedex.js';
import { itemsMethods } from '../../js/battle/items.js';
import { dungeonMethods } from '../../js/world/dungeon.js';

const eevee = () => new Pokemon(speciesData(133), 35, { gender:'female', isShiny: true });

test('Eevee non ha più evoluzione per livello, ma la famiglia Pokédex conserva i tre rami', async () => {
  assert.deepEqual(levelEvolutionOptions(133, 50), []);
  assert.deepEqual(evolutionFamily(133), [133,134,135,136]);
  assert.equal(evolvedEncounterId(133, 50), 133);
  const mon=eevee();
  assert.equal(await mon.tryEvolution(), null);
  assert.equal(mon.id, 133);
});

test('le tre pietre usano gli sprite consegnati e mappano Eevee correttamente', () => {
  const sprites=['water-stone.png','thunder-stone.png','fire-stone.png'];
  Object.entries(STONE_EVOLUTIONS).forEach(([key,species],i) => {
    assert.equal(ITEMS[key].evolves, species);
    assert.equal(ITEMS[key].icon, sprites[i]);
    const mon=eevee(), hp=mon.currentHp;
    const data=mon.evolveToSpecies(species);
    assert.equal(mon.id, species);
    assert.equal(mon.isShiny,true);
    assert.equal(mon.gender,'female');
    assert.ok(mon.currentHp>0 && mon.currentHp<=mon.maxHp);
    assert.ok(data.toSprite.includes('shiny'));
  });
});

test('consumo della pietra transazionale: nessuna perdita dopo annullamento', async () => {
  for (const [id,species] of Object.entries(STONE_EVOLUTIONS)) {
    const mon=eevee(), fake={...createRunState(),team:[mon],pendingItemTarget:id,items:{[id]:1},
      isBattleVisible:()=>false, confirmEeveeStone:async()=>false, renderSidebar(){},
      $id:()=>({classList:{add(){}}}), showItemFeedback(){},saveCheckpoint(){}, showEvolution:async()=>{}};
    assert.equal(await itemsMethods.useEeveeStone.call(fake,mon,id),false);
    assert.equal(fake.items[id],1);
    assert.equal(mon.id,133);
    fake.confirmEeveeStone=async()=>true;
    assert.equal(await itemsMethods.useEeveeStone.call(fake,mon,id),true);
    assert.equal(fake.items[id],0);
    assert.equal(mon.id,species);
  }
});

test('un Pokémon diverso o esausto non consuma pietra', async () => {
  const fake={...createRunState(),team:[new Pokemon(speciesData(25),35)],pendingItemTarget:'fireStone',items:{fireStone:1},isBattleVisible:()=>false};
  assert.equal(await itemsMethods.useEeveeStone.call(fake,fake.team[0],'fireStone'),false);
  assert.equal(fake.items.fireStone,1);
  fake.team=[eevee()];fake.team[0].currentHp=0;
  assert.equal(await itemsMethods.useEeveeStone.call(fake,fake.team[0],'fireStone'),false);
  assert.equal(fake.items.fireStone,1);
});

test('regalo al piano 15: NPC retrocompatibile, niente duplicati', () => {
  const npc={entity:'npc',npcEvent:'dialogue'};
  const state={floor:15,gridMap:[[npc]]};
  assert.equal(dungeonMethods.ensureEeveeElder.call(state),true);
  assert.equal(npc.specialRole,'eevee-elder');
  assert.equal(dungeonMethods.ensureEeveeElder.call(state),true);
  assert.equal(state.gridMap.flat().filter(c=>c.specialRole==='eevee-elder').length,1);
  state.floor=10;
  assert.equal(dungeonMethods.ensureEeveeElder.call(state),false);
});

test('checkpoint contiene regalo e pietra; un nuovo run riparte senza entrambi', () => {
  localStorage.clear();Checkpoints.setGuestMode(false); Checkpoints.setUser('local');
  const game={...createRunState(),team:[eevee()],runId:'run-stone',gridMap:Array.from({length:10},(_,y)=>Array.from({length:10},(_,x)=>({x,y,type:'grass'})))};
  game.activeMon=game.team[0]; game.eeveeStoneGiftClaimed=true;game.items.thunderStone=1;
  const snap=Checkpoints.take(game);
  Checkpoints.save(snap);
  const restored={...createRunState(),resetRunState(){Object.assign(this,createRunState());}};
  Checkpoints.restoreInto(restored,Checkpoints.load());
  assert.equal(restored.eeveeStoneGiftClaimed,true);assert.equal(restored.items.thunderStone,1);
  assert.equal(createRunState().eeveeStoneGiftClaimed,false);
  assert.equal(createRunState().items.thunderStone,0);
});

test('DEV Pokédex mostra varianti shiny senza cambiare la memoria reale', () => {
  localStorage.clear();Dex.setOwner('local');
  const before=JSON.stringify(Dex.entries());
  Dex.setPreview(true);
  assert.deepEqual(Dex.counts(),{seen:151,caught:151});
  assert.equal(Dex.getVariants(133).length,4);
  assert.equal(Dex.getVariants(81).length,2);
  assert.equal(Dex.getVariants(25).filter(v=>v.shiny).length,2);
  Dex.setPreview(false);
  assert.equal(JSON.stringify(Dex.entries()),before);
  assert.equal(localStorage.getItem('pokexplorer:dex:v1:local'),null);
});

test('le pietre funzionano anche su Eevee di livello 1', () => {
  const mon = new Pokemon(speciesData(133), 1);
  assert.ok(mon.evolveToSpecies(STONE_EVOLUTIONS.waterStone));
  assert.equal(mon.id, 134);
  assert.equal(mon.level, 1);
});

test('Rimedi: disabilitare strumenti senza bersagli validi', () => {
  const mon=eevee();
  const game={team:[mon],devMode:false};
  game.canUseItemOnMon=itemsMethods.canUseItemOnMon;
  assert.equal(game.canUseItemOnMon('waterStone',mon),true);
  assert.equal(game.canUseItemOnMon('potion',mon),false);
  mon.currentHp -= 1;
  assert.equal(game.canUseItemOnMon('potion',mon),true);
  mon.currentHp=0;
  assert.equal(game.canUseItemOnMon('waterStone',mon),false);
});

test('DEV MODE non è attivabile tramite query string o hash in produzione', async () => {
  const { devAccessAvailable } = await import('../../js/systems/dev.js');
  assert.equal(devAccessAvailable({protocol:'https:',hostname:'nicolcnt.github.io',hash:'#dev',search:'?dev'}), false);
  assert.equal(devAccessAvailable({protocol:'http:',hostname:'localhost',hash:'',search:''}), true);
  assert.equal(devAccessAvailable({protocol:'file:',hostname:'',hash:'',search:''}), true);
});
