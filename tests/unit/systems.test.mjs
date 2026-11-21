import './setup.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import * as Objectives from '../../js/systems/objectives.js';
import * as Dex from '../../js/systems/pokedex.js';
import * as Abilities from '../../js/core/abilities.js';
import { keyRouter, keyDirection } from '../../js/ui/input.js';
import { redirectUrl } from '../../js/systems/cloud.js';
import { SHINY_RATE } from '../../js/core/constants.js';

const A = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', B = 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb';

test('shiny: 1 su 2.000', () => assert.equal(SHINY_RATE, 2000));

test('obiettivi: 25 missioni, run contate una volta, campione isolato per profilo', () => {
  localStorage.clear(); Objectives.setOwner(A);
  assert.equal(Objectives.values().quests.length, 25);
  Objectives.record('run_start', 'r-1'); Objectives.record('run_start', 'r-1');
  Objectives.record('run_win', 'r-1', { solo: true });
  assert.equal(Objectives.values().runs, 1);
  assert.equal(Objectives.unlockChampion(), true);
  Objectives.setOwner(B);
  assert.equal(Objectives.unlockChampion(), false);
  Objectives.setOwner('guest', { guestMode: true });
  Objectives.record('run_win', 'r-2', { solo: true, mode: 'normal' });
  assert.equal(Objectives.unlockChampion(), true);
  Objectives.setOwner('guest', { guestMode: true });
  assert.equal(Objectives.unlockChampion(), false);
});

test('le run DEV non registrano obiettivi né Pokédex', () => {
  localStorage.clear(); Objectives.setOwner(A); Dex.setOwner(A);
  Objectives.setRecordingGuard(() => false); Dex.setRecordingGuard(() => false);
  Objectives.record('run_start', 'dev-run');
  Dex.record({ id: 25, name: 'PIKACHU', gender: 'male', isShiny: false }, 'caught');
  assert.equal(Objectives.values().runs, 0);
  assert.equal(Dex.counts().caught, 0);
  Objectives.setRecordingGuard(null); Dex.setRecordingGuard(null);
});

test('Pokédex: visto, catturato e separazione fra account', () => {
  localStorage.clear(); Dex.setOwner(A);
  Dex.record({ id: 25, name: 'PIKACHU', gender: 'male', isShiny: false }, 'seen');
  assert.deepEqual(Dex.counts(), { seen: 1, caught: 0 });
  Dex.record({ id: 25, name: 'PIKACHU', gender: 'female', isShiny: true }, 'caught');
  assert.deepEqual(Dex.counts(), { seen: 1, caught: 1 });
  assert.equal(Dex.getVariants(25).length, 2);
  Dex.setOwner(B);
  assert.deepEqual(Dex.counts(), { seen: 0, caught: 0 });
});

test('Capsula Abilità: solo abilità normali della specie', () => {
  assert.deepEqual(Abilities.normalOptions({ abilities: ['pickup', 'technician', 'pickup'] }), ['pickup', 'technician']);
  assert.deepEqual(Abilities.alternatives('pickup', ['pickup', 'technician']), ['technician']);
});

test('tastiera: i livelli modali hanno la precedenza e si rimuovono', () => {
  const calls = [];
  keyRouter.add('test-world', 1, () => { calls.push('world'); return true; });
  const pop = keyRouter.push('test-modal', () => { calls.push('modal'); return true; });
  keyRouter.dispatch({ key: 'a' });
  pop();
  keyRouter.dispatch({ key: 'a' });
  assert.deepEqual(calls, ['modal', 'world']);
  assert.equal(keyDirection({ key: 'ArrowUp' }), 'up');
  assert.equal(keyDirection({ key: 'D' }), 'right');
});

test('Discord torna alla cartella del sito, mai a file://', () => {
  assert.equal(redirectUrl(new URL('https://nicolcnt.github.io/pokexplorer/index.html?x=1#menu')), 'https://nicolcnt.github.io/pokexplorer/');
  assert.equal(redirectUrl(new URL('http://localhost:8000/preview/')), 'http://localhost:8000/preview/');
  assert.throws(() => redirectUrl(new URL('file:///tmp/index.html')));
});

test('obiettivi di modalità: nessun incrocio e percorsi Difficili nella stessa run', () => {
  localStorage.clear(); Objectives.setOwner('local');
  const quest = name => Objectives.values().quests.find(q => q.name === name);
  Objectives.record('badge', 'a', { badges: 3, mode: 'normal', lossless: true });
  assert.equal(quest('Squadra intatta').complete, false);
  Objectives.record('badge', 'b', { badges: 3, mode: 'nuzlocke', lossless: true });
  Objectives.record('badge', 'b', { badges: 4, mode: 'nuzlocke', lossless: false });
  assert.equal(quest('Squadra intatta').complete, true);
  assert.equal(quest('Rimonta').complete, true);
  assert.equal(Objectives.recordMilestone('second_chance', 'b', 4, 'nuzlocke'), false);
  Objectives.recordMilestone('second_chance', 'a', 4, 'normal');
  Objectives.recordMilestone('full_team', 'a', 4, 'normal');
  assert.equal(quest('Seconda occasione').complete, true);
  assert.equal(quest('Squadra completa').complete, true);
  Objectives.recordMilestone('hard_route', 'a', 4, 'normal');
  Objectives.recordMilestone('hard_route', 'a', 9, 'normal');
  assert.equal(Objectives.recordMilestone('hard_route', 'a', 9, 'normal'), false);
  Objectives.recordMilestone('hard_route', 'c', 4, 'normal');
  assert.equal(quest('Sfida agli allenatori').progress, 2);
  Objectives.recordMilestone('hard_route', 'a', 14, 'normal');
  assert.equal(quest('Sfida agli allenatori').complete, true);
  Objectives.record('run_win', 'a', { mode: 'normal', solo: true });
  assert.equal(quest('Campione di Kanto').complete, true);
  assert.equal(quest('Campione solitario').complete, false);
  assert.equal(Objectives.unlockChampion(), true);
  Objectives.record('run_win', 'b', { mode: 'nuzlocke', lossless: true, solo: true });
  assert.equal(quest('Nessuno resta indietro').complete, true);
  assert.equal(quest('Campione solitario').complete, true);
});

test('Campione: vittoria storica cloud prevale sul riepilogo locale senza prova di solo', async () => {
  localStorage.clear(); Objectives.setOwner(A);
  Objectives.record('run_win', 'old-run', { solo: false });
  const data = [{event_id:'run_win:old-run', kind:'run_win', run_id:'old-run', metadata:{solo:true}}];
  assert.equal(Objectives.unlockChampion(), false);
  await Objectives.initCloud({from: () => ({ select: async () => ({data, error:null}) })});
  assert.equal(Objectives.unlockChampion(), true);
  Objectives.setOwner(A);
  assert.equal(Objectives.unlockChampion(), true);
});
