import { seeded } from './setup.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { BADGE_LEVEL_CAPS, KANTO_GYMS } from '../../js/core/constants.js';
import { typeEffectiveness } from '../../js/core/types.js';
import { dungeonMethods } from '../../js/world/dungeon.js';
import { effectLabel, learn, knows } from '../../js/systems/matchups.js';
import { createRunState } from '../../js/systems/run-state.js';
import * as Checkpoints from '../../js/systems/checkpoints.js';
import { Pokemon } from '../../js/core/pokemon.js';
import { speciesData } from '../../js/core/data.js';

test('il limite di livello è 2 sopra il Pokémon più forte del Capopalestra successivo', () => {
  KANTO_GYMS.forEach((gym, badges) => assert.equal(BADGE_LEVEL_CAPS[badges], Math.max(...gym.levels) + 2, gym.name));
});

test('quiz degli abitanti: una risposta superefficace e una no', () => {
  const random = seeded(5);
  for (let i = 0; i < 200; i++) {
    const quiz = dungeonMethods.createTypeQuiz(random);
    assert.ok(typeEffectiveness(quiz.right, [quiz.defender]) > 1, JSON.stringify(quiz));
    assert.ok(typeEffectiveness(quiz.wrong, [quiz.defender]) <= 1, JSON.stringify(quiz));
  }
});

test('efficacia vista: etichette e memoria', () => {
  assert.deepEqual([0, 0.25, 0.5, 1, 2, 4].map(effectLabel), ['×0', '×¼', '×½', '', '×2', '×4']);
  localStorage.clear();
  assert.equal(knows('water', ['rock', 'ground']), false);
  learn('water', ['ground', 'rock']);
  assert.equal(knows('water', ['rock', 'ground']), true, 'l’ordine dei tipi non conta');
});

test('modalità, statistiche e tipo di piano sopravvivono al salvataggio', () => {
  localStorage.clear(); Checkpoints.setGuestMode(false); Checkpoints.setUser('local');
  const game = { ...createRunState(), resetRunState() { Object.assign(this, createRunState()); } };
  game.runId = 'run-mechanics';
  game.team = [new Pokemon(speciesData(7), 10, { gender: 'male', isShiny: false })];
  game.activeMon = game.team[0];
  game.gridMap = Array.from({ length: 10 }, (_, y) => Array.from({ length: 10 }, (_, x) => ({ x, y, type: 'grass' })));
  game.runMode = 'easy'; game.floorKind = 'trainers'; game.items.revive = 1;
  game.runStats = { ...game.runStats, wins: 7, captures: 2, playMs: 120000, fallen: [{ name: 'PIDGEY', id: 16, level: 4, floor: 3, by: 'RATTATA', lost: false }] };
  game.team[0].currentHp = 0; // in modalità facile un Pokémon esausto resta in squadra
  Checkpoints.save(Checkpoints.take(game));
  const restored = { ...createRunState(), resetRunState() { Object.assign(this, createRunState()); } };
  Checkpoints.restoreInto(restored, Checkpoints.load());
  assert.equal(restored.runMode, 'normal');
  assert.equal(restored.team[0].currentHp, 0);
  assert.equal(restored.floorKind, 'trainers');
  assert.equal('revive' in restored.items, false);
  assert.equal(restored.runStats.wins, 7);
  assert.equal(restored.runStats.fallen[0].name, 'PIDGEY');
  assert.match(Checkpoints.describe(Checkpoints.load()), /Normale/);
});
