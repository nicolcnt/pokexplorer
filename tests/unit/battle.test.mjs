import { seeded } from './setup.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { speciesData } from '../../js/core/data.js';
import { typeEffectiveness, typeBlocksStatus } from '../../js/core/types.js';
import { Pokemon, calculateBattleDamage, rollGender, createMove } from '../../js/core/pokemon.js';
import { rollMultiHitCount, evolvedEncounterId } from '../../js/core/constants.js';
import { captureChance } from '../../js/battle/items.js';

const mon = (id, level = 50, traits = { gender: 'male', isShiny: false }) => new Pokemon(speciesData(id), level, traits);

test('tabella dei tipi moderna', () => {
  assert.equal(typeEffectiveness('fire', ['grass']), 2);
  assert.equal(typeEffectiveness('electric', ['ground']), 0);
  assert.equal(typeEffectiveness('ghost', ['normal']), 0);
  assert.equal(typeEffectiveness('dragon', ['fairy']), 0);
  assert.equal(typeEffectiveness('fighting', ['poison', 'flying']), 0.25);
  assert.equal(typeEffectiveness('ice', ['grass', 'ground']), 4);
});

test('immunità di tipo agli stati', () => {
  assert.equal(typeBlocksStatus(['fire'], 'burn'), true);
  assert.equal(typeBlocksStatus(['electric'], 'paralysis'), true);
  assert.equal(typeBlocksStatus(['poison'], 'poison'), true);
  assert.equal(typeBlocksStatus(['steel'], 'bad-poison'), true);
  assert.equal(typeBlocksStatus(['ice'], 'freeze'), true);
  assert.equal(typeBlocksStatus(['water'], 'burn'), false);
});

test('statistiche calcolate con la formula moderna', () => {
  const p = mon(25, 50);
  assert.equal(p.maxHp, p.currentHp);
  assert.ok(p.maxHp >= 95 && p.maxHp <= 142, `PS di Pikachu Lv50: ${p.maxHp}`);
  assert.equal(p.moves.length <= 4 && p.moves.length >= 1, true);
});

test('danno: STAB, superefficace, immunità e scottatura', () => {
  const random = seeded(7);
  const charmander = mon(4, 30), bulbasaur = mon(1, 30), geodude = mon(74, 30);
  const ember = createMove('ember'), scratch = createMove('scratch'), thunder = createMove('thunder-shock');
  const fire = calculateBattleDamage(charmander, bulbasaur, ember, () => 0.5);
  const normal = calculateBattleDamage(charmander, bulbasaur, scratch, () => 0.5);
  assert.ok(fire.damage > normal.damage, 'Braciere superefficace e con STAB');
  assert.equal(calculateBattleDamage(mon(25, 30), geodude, thunder, random).damage, 0);
  charmander.status = 'burn';
  const burned = calculateBattleDamage(charmander, bulbasaur, scratch, () => 0.5);
  assert.ok(burned.damage < normal.damage, 'la scottatura dimezza gli attacchi fisici');
});

test('mosse multicolpo: distribuzione 35/35/15/15', () => {
  const random = seeded(3), count = { 2: 0, 3: 0, 4: 0, 5: 0 };
  for (let i = 0; i < 20000; i++) count[rollMultiHitCount({ minHits: 2, maxHits: 5 }, random)]++;
  assert.ok(Math.abs(count[2] / 20000 - 0.35) < 0.02 && Math.abs(count[5] / 20000 - 0.15) < 0.02, JSON.stringify(count));
});

test('genere secondo il rapporto della specie', () => {
  assert.equal(rollGender(-1), 'genderless');
  assert.equal(rollGender(8), 'female');
  assert.equal(rollGender(0), 'male');
  assert.equal(rollGender(4, () => 0.1), 'female');
  assert.equal(rollGender(4, () => 0.9), 'male');
});

test('Eevee non evolve più casualmente al livello 30: serve una pietra', () => {
  for (const level of [1, 29, 30, 40, 100]) assert.equal(evolvedEncounterId(133, level), 133);
});

test('probabilità di cattura: PS bassi e stati aiutano, limite 95%', () => {
  const wild = mon(95, 20); // Onix: tasso di cattura 45
  const full = captureChance(wild);
  wild.currentHp = 1;
  const low = captureChance(wild);
  wild.status = 'sleep';
  const asleep = captureChance(wild);
  assert.ok(full < low && low < asleep, `${full} < ${low} < ${asleep}`);
  assert.ok(asleep <= 0.95);
  assert.ok(captureChance(mon(16, 20)) > full, 'un Pidgey è più facile di un Onix');
});
