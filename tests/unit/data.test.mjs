import './setup.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { allSpecies, speciesData, moveData, abilityData, pokemonSprite } from '../../js/core/data.js';
import { ROOT } from './setup.mjs';

test('151 specie di Kanto complete', () => {
  const all = allSpecies();
  assert.equal(all.length, 151);
  for (const s of all) {
    assert.ok(s.name && s.types.length >= 1 && s.types.length <= 2, `#${s.id} nome/tipi`);
    assert.equal(Object.keys(s.stats).length, 6, `#${s.id} statistiche`);
    assert.ok(s.abilities.length >= 1, `#${s.id} abilità`);
    assert.ok(s.learnset.length >= 1, `#${s.id} mosse`);
  }
  assert.equal(speciesData(25).name, 'Pikachu');
  assert.deepEqual(speciesData(6).types, ['fire', 'flying']);
});

test('ogni mossa e abilità citata esiste nei dati', () => {
  for (const s of allSpecies()) {
    for (const [level, id] of s.learnset) {
      assert.ok(Number.isInteger(level) && level >= 0 && level <= 100);
      assert.ok(moveData(id), `mossa ${id} di ${s.name}`);
    }
    for (const a of s.abilities) assert.ok(abilityData(a), `abilità ${a} di ${s.name}`);
  }
});

test('ogni specie ha gli sprite locali (fronte, retro, shiny e femmine dove previsti)', () => {
  for (const s of allSpecies()) {
    for (const opts of [{}, { back: true }, { shiny: true }, { back: true, shiny: true }, { gender: 'female' }]) {
      const file = new URL(pokemonSprite(s.id, opts), ROOT);
      assert.ok(fs.existsSync(file), file.pathname);
    }
  }
});
