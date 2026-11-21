import './setup.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { speciesData } from '../../js/core/data.js';
import { Pokemon } from '../../js/core/pokemon.js';
import { createRunState } from '../../js/systems/run-state.js';
import * as Checkpoints from '../../js/systems/checkpoints.js';

function fakeGame() {
  const game = { ...createRunState(), resetRunState() { Object.assign(this, createRunState()); } };
  game.runId = 'run-test';
  game.team = [new Pokemon(speciesData(4), 12, { gender: 'male', isShiny: false }), new Pokemon(speciesData(16), 9, { gender: 'female', isShiny: false })];
  game.activeMon = game.team[0];
  game.gridMap = Array.from({ length: 10 }, (_, y) => Array.from({ length: 10 }, (_, x) => ({ x, y, type: 'grass', revealed: false })));
  game.playerPos = { x: 1, y: 2 };
  game.floor = 7;
  return game;
}
const reset = () => { localStorage.clear(); Checkpoints.setGuestMode(false); Checkpoints.setUser('local'); };

test('salvataggio e ripristino di una run', () => {
  reset();
  const game = fakeGame();
  game.team[0].currentHp = 5;
  game.items.potion = 1;
  Checkpoints.save(Checkpoints.take(game));
  const other = fakeGame();
  other.resetRunState();
  const result = Checkpoints.restoreInto(other, Checkpoints.load());
  assert.equal(result.interrupted, false);
  assert.equal(other.floor, 7);
  assert.equal(other.team.length, 2);
  assert.equal(other.team[0].currentHp, 5);
  assert.equal(other.items.potion, 1);
  assert.equal(other.team[1].gender, 'female');
});

test('fuori dalla lotta non si salva in un momento instabile', () => {
  reset();
  const game = fakeGame();
  game.battleBusy = true;
  assert.equal(Checkpoints.take(game), null);
  assert.ok(Checkpoints.take(game, { battle: true }), 'durante la lotta si usa { battle: true }');
});

test('lotta interrotta: i danni restano e la run riprende segnalandolo', () => {
  reset();
  const game = fakeGame();
  Checkpoints.save(Checkpoints.take(game));
  game.isLocked = true; game.battleBusy = true;
  game.runMode = 'normal';
  game.team[0].currentHp = 0; game.items.pokeball = 2;
  Checkpoints.save(Checkpoints.take(game, { battle: true }));
  const resumed = fakeGame();
  const result = Checkpoints.restoreInto(resumed, Checkpoints.load());
  assert.equal(result.interrupted, true);
  assert.equal(resumed.team[0].currentHp, 0);
  assert.equal(resumed.items.pokeball, 2);
});

test('game over: la run chiusa resta salvata ma non si può continuare', () => {
  reset();
  const game = fakeGame();
  Checkpoints.save(Checkpoints.take(game));
  Checkpoints.save(Checkpoints.ended(game.runId, 'defeat'));
  assert.equal(Checkpoints.load(), null);
  const raw = Checkpoints.loadRaw();
  assert.equal(raw.ended, 'defeat');
  assert.equal(raw.runId, 'run-test');
  assert.equal(Checkpoints.restoreInto(fakeGame(), raw), false);
  assert.match(Checkpoints.describe(raw), /sconfitta/);
});

test('Grotta Celeste abbandonata: i Pokémon della spedizione non tornano', () => {
  reset();
  const game = fakeGame();
  game.celestialReserve = [game.team[1]];
  game.team = [game.team[0]];
  game.isCelestialCave = true;
  const snapshot = Checkpoints.take(game, { expedition: true });
  assert.deepEqual(snapshot.game.celestialLost, [game.team[0].name]);
  assert.equal(snapshot.game.team.length, 1);
  assert.equal(snapshot.game.team[0].id, 16);
});

test('checkpoint non validi vengono rifiutati', () => {
  assert.throws(() => Checkpoints.validate({ version: 1 }));
  const good = Checkpoints.take(fakeGame());
  assert.throws(() => Checkpoints.validate({ ...good, game: { ...good.game, floor: 99 } }));
  assert.throws(() => Checkpoints.validate({ ...good, game: { ...good.game, team: [] } }));
  assert.throws(() => Checkpoints.validate({ ...good, ended: 'boh' }));
});

test('modalità Utente: nessun salvataggio permanente', () => {
  reset();
  Checkpoints.setGuestMode(true);
  assert.equal(Checkpoints.take(fakeGame()), null);
  assert.equal(Checkpoints.loadRaw(), null);
  Checkpoints.setGuestMode(false);
});

test('le run DEV restano marcate dopo il ripristino', () => {
  reset();
  const game = fakeGame();
  game.devRun = true;
  Checkpoints.save(Checkpoints.take(game));
  const resumed = fakeGame();
  Checkpoints.restoreInto(resumed, Checkpoints.load());
  assert.equal(resumed.devRun, true);
});

test('Nuzlocke: un KO registrato prima del dialogo non torna al reload', () => {
  reset();
  const game = fakeGame();
  const fallen = game.team[0]; fallen.currentHp = 0;
  const checkpoint = Checkpoints.take(game, { battle: true, pendingFaint: fallen });
  assert.equal(game.team.length, 2, 'il salvataggio non deve alterare la lotta in memoria');
  const resumed = fakeGame();
  Checkpoints.restoreInto(resumed, checkpoint);
  assert.deepEqual(resumed.team.map(p => p.id), [16]);
  assert.equal(resumed.runStats.fallen[0].lost, true);
  game.team = [fallen];
  assert.equal(Checkpoints.take(game, { battle: true, pendingFaint: fallen }).ended, 'defeat');
});

test('Grotta Celeste abbandonata: Nuzlocke perde i partecipanti, Normale li conserva esausti', () => {
  reset();
  const game = fakeGame();
  game.celestialReserve = [game.team.pop()];
  let snapshot = Checkpoints.take(game, { expedition: true });
  assert.deepEqual(snapshot.game.team.map(p => p.id), [16]);
  assert.equal(snapshot.game.runStats.fallen[0].lost, true);
  game.runMode = 'normal';
  snapshot = Checkpoints.take(game, { expedition: true });
  assert.deepEqual(snapshot.game.team.map(p => p.id), [16, 4]);
  assert.equal(snapshot.game.team[1].currentHp, 0);
  assert.equal(snapshot.game.runStats.fallen[0].lost, false);
});
