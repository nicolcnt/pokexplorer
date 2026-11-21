// Checkpoint versionati della run (localStorage + sincronizzazione cloud opzionale).
// Uno snapshot contiene solo lo stato di gioco, mai credenziali.
// Una run conclusa (game over o vittoria) resta salvata come "chiusa" e non si può continuare.
import { normalizeRunMode } from './run-state.js';
import { Pokemon } from '../core/pokemon.js';

const KEY = 'pokexplorer:checkpoint:v2';
const MAX_BYTES = 950000;
const memory = new Map();
const memoryStorage = { getItem: k => memory.get(k) ?? null, setItem: (k, v) => memory.set(k, v), removeItem: k => memory.delete(k) };

function resolveStorage() {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('pokex:probe', '1'); localStorage.removeItem('pokex:probe');
      return localStorage;
    }
  } catch { /* modalità privata o file:// */ }
  return memoryStorage;
}

let owner = 'local';
let guestMode = false;
const primaryKey = () => `${KEY}:${owner}`;
const backupKey = () => `${primaryKey()}:previous`;

/** Modalità UTENTE: nessun salvataggio permanente e nessun accesso ai dati di altri profili. */
export function setGuestMode(active) { guestMode = active === true; if (guestMode) owner = 'guest'; else if (owner === 'guest') owner = 'local'; }
export const isGuestMode = () => guestMode;
export function setUser(userId) { owner = typeof userId === 'string' && /^[0-9a-f-]{36}$/i.test(userId) ? userId : 'local'; }

// Campi della run salvati nel checkpoint (vedi systems/run-state.js).
export const SAVED_FIELDS = Object.freeze(['floor', 'money', 'playerPos', 'playerGender', 'playerFacing', 'items', 'radarCharges', 'badges',
  'expShareEnabled', 'expShareClaimed', 'fishingRodGiftClaimed', 'eeveeStoneGiftClaimed', 'adventureCompleted', 'oakEventDismissed', 'celestialPhase',
  'caughtLegendarySpecies', 'completedGymFloors', 'gridMap', 'team', 'activeIndex', 'soloRunEligible', 'soloRunTracked', 'devRun',
  'runMode', 'runStats', 'floorKind']);
const POKEMON_FIELDS = Object.freeze(['id', 'name', 'level', 'gender', 'isShiny', 'ivs', 'evs', 'nature', 'ability', 'exp', 'expToNext',
  'maxHp', 'currentHp', 'status', 'statusTurns', 'treatedFaint', 'moves']);

const clone = value => JSON.parse(JSON.stringify(value ?? null));
const serializePokemon = p => Object.fromEntries(POKEMON_FIELDS.map(k => [k,
  k === 'moves' ? p.moves.map(m => ({ id: m.id, currentPp: m.currentPp })) : clone(p[k])]));

/**
 * Fotografa la run. Fuori dalla lotta solo in momenti sicuri; con {battle:true}
 * registra lo stato durante una lotta (danni e Pokémon persi), così che abbandonare
 * la pagina o tornare al menu non annulli una sconfitta.
 */
export function take(game, { battle = false, expedition = false, pendingFaint = null, now = new Date().toISOString() } = {}) {
  if (guestMode || !game?.team?.length || !game.gridMap?.length) return null;
  if (!expedition && (game.isCelestialCave || game.pendingItemTarget)) return null;
  if (!battle && !expedition && (game.isLocked || game.battleBusy || game.isRaidActive)) return null;
  const g = {};
  for (const key of SAVED_FIELDS) {
    if (key === 'activeIndex') g.activeIndex = Math.max(0, game.team.indexOf(game.activeMon));
    else if (key === 'team') g.team = game.team.map(serializePokemon);
    else if (key === 'caughtLegendarySpecies' || key === 'completedGymFloors') g[key] = [...(game[key] || [])];
    else g[key] = clone(game[key]);
  }
  if (pendingFaint && pendingFaint.currentHp <= 0 && game.team.includes(pendingFaint)) {
    const nuzlocke = normalizeRunMode(game.runMode) === 'nuzlocke';
    const index = game.team.indexOf(pendingFaint);
    if (nuzlocke) {
      g.team.splice(index, 1);
      if (!g.team.length) return ended(game.runId, 'defeat', now);
      g.activeIndex = 0;
    } else g.team[index].treatedFaint = false;
    g.runStats?.fallen?.push({name:pendingFaint.name,id:pendingFaint.id,level:pendingFaint.level,
      floor:g.floor,by:game.enemyMon?.name||'',lost:nuzlocke});
  }
  if (expedition) {
    // Abbandonare la spedizione equivale a perderla, secondo le regole della modalità.
    const normal = game.runMode === 'normal';
    g.team = (game.celestialReserve || []).map(serializePokemon);
    if (normal) g.team.push(...game.team.map(p => ({ ...serializePokemon(p), currentHp: 0, treatedFaint: false })));
    g.activeIndex = 0;
    g.celestialPhase = 'unvisited';
    g.oakEventDismissed = false;
    g.celestialLost = normal ? [] : game.team.map(p => p.name);
    g.runStats?.fallen?.push(...game.team.map(p => ({name:p.name,id:p.id,level:p.level,floor:g.floor,by:'Spedizione interrotta',lost:!normal})));
    g.celestialAbandoned = true;
  }
  return validate({ version: 2, createdAt: now, runId: game.runId || `run-${Date.now()}`, interrupted: battle || undefined, game: g });
}

/** Snapshot di una run conclusa: impedisce di riprenderla, sia in locale sia dal cloud. */
export function ended(runId, reason, now = new Date().toISOString()) {
  return validate({ version: 2, createdAt: now, runId: String(runId || `run-${Date.now()}`), ended: reason === 'victory' ? 'victory' : 'defeat' });
}
export const isEnded = snapshot => Boolean(snapshot?.ended);

const validMon = p => p && Number.isInteger(p.id) && p.id >= 1 && p.id <= 151 && Number.isInteger(p.level) && p.level >= 1 && p.level <= 100 &&
  Number.isFinite(p.currentHp) && p.currentHp >= 0 && Array.isArray(p.moves) && p.moves.length <= 4;

export function validate(s) {
  if (!s || s.version !== 2 || !Number.isFinite(Date.parse(s.createdAt)) || typeof s.runId !== 'string') throw Error('Invalid checkpoint format');
  if (s.ended) {
    if (!['victory', 'defeat'].includes(s.ended)) throw Error('Invalid ended state');
    return clone({ version: 2, createdAt: s.createdAt, runId: s.runId, ended: s.ended });
  }
  const g = s.game;
  if (!g) throw Error('Invalid checkpoint format');
  if (!Number.isInteger(g.floor) || g.floor < 1 || g.floor > 80 || !Number.isSafeInteger(g.money) || g.money < 0) throw Error('Invalid progression');
  if (!Array.isArray(g.team) || g.team.length < 1 || g.team.length > 6 || !g.team.every(validMon)) throw Error('Invalid party');
  if (g.team.some(p => p.gender != null && !['male', 'female', 'genderless', 'unknown'].includes(p.gender))) throw Error('Invalid variant data');
  if (!Number.isInteger(g.activeIndex) || g.activeIndex < 0 || g.activeIndex >= g.team.length) throw Error('Invalid lead');
  if (!Array.isArray(g.gridMap) || g.gridMap.length !== 10 || g.gridMap.some(row => !Array.isArray(row) || row.length !== 10)) throw Error('Invalid map');
  if (!g.playerPos || ![g.playerPos.x, g.playerPos.y].every(v => Number.isInteger(v) && v >= 0 && v < 10)) throw Error('Invalid position');
  if (!g.items || typeof g.items !== 'object' || Object.values(g.items).some(v => typeof v !== 'boolean' && (!Number.isSafeInteger(v) || v < 0))) throw Error('Invalid inventory');
  if (!Array.isArray(g.badges) || g.badges.length > 8 || !Array.isArray(g.completedGymFloors) || !Array.isArray(g.caughtLegendarySpecies)) throw Error('Invalid progress');
  const copy = clone(s);
  if (JSON.stringify(copy).length > MAX_BYTES) throw Error('Checkpoint too large');
  return copy;
}

/** Ultimo snapshot valido, comprese le run concluse. */
export function loadRaw(storage = resolveStorage()) {
  if (guestMode) return null;
  for (const key of [primaryKey(), backupKey()]) {
    const raw = storage.getItem(key);
    if (!raw) continue;
    try { return validate(JSON.parse(raw)); } catch { /* prova il checkpoint precedente */ }
  }
  return null;
}
/** Checkpoint da cui si può continuare (null se assente o se la run è conclusa). */
export function load(storage) {
  const snapshot = loadRaw(storage);
  return snapshot && !snapshot.ended ? snapshot : null;
}
export function save(snapshot, storage = resolveStorage()) {
  if (guestMode) return false;
  const checked = JSON.stringify(validate(snapshot));
  const previous = storage.getItem(primaryKey());
  if (previous && !snapshot.ended) {
    try { if (!JSON.parse(previous).ended) storage.setItem(backupKey(), previous); } catch { /* backup non valido */ }
  }
  if (snapshot.ended) storage.removeItem(backupKey());
  storage.setItem(primaryKey(), checked);
  return true;
}

export function progress(snapshot) {
  const s = validate(snapshot);
  if (s.ended) return { ended: s.ended, date: s.createdAt };
  const g = s.game;
  return { floor: g.floor, badges: g.badges.length, money: g.money, pokemon: g.team.length, date: s.createdAt, mode: normalizeRunMode(g.runMode) };
}
export function describe(snapshot) {
  if (!snapshot) return 'nessun salvataggio';
  const p = progress(snapshot);
  const date = new Date(p.date).toLocaleString('it-IT', { dateStyle: 'short', timeStyle: 'short' });
  return p.ended ? `run conclusa (${p.ended === 'victory' ? 'vittoria' : 'sconfitta'}) · ${date}`
    : `piano ${p.floor}/80 · ${p.badges} medaglie · ${p.pokemon} Pokémon · ${p.mode === 'normal' ? 'Normale' : 'Nuzlocke'} · ${date}`;
}

/** Ripristina la run: i Pokémon vengono ricostruiti con i dati attuali di specie e mosse. */
export function restoreInto(game, snapshot) {
  if (guestMode) return false;
  const s = validate(snapshot);
  if (s.ended) return false;
  const data = s.game;
  const mode = normalizeRunMode(data.runMode);
  const originalTeam = data.team.map(Pokemon.fromSnapshot);
  const team = mode === 'normal' ? originalTeam : originalTeam.filter(p => p.currentHp > 0);
  game.resetRunState();
  for (const key of SAVED_FIELDS) {
    if (key === 'team' || key === 'items' || key === 'activeIndex' || data[key] === undefined) continue;
    game[key] = key === 'caughtLegendarySpecies' || key === 'completedGymFloors' ? new Set(data[key]) : clone(data[key]);
  }
  // Non reintrodurre oggetti rimossi dai salvataggi precedenti.
  for (const id of Object.keys(game.items)) if (Object.prototype.hasOwnProperty.call(data.items, id)) game.items[id] = data.items[id];
  game.team = team;
  game.activeMon = team.includes(originalTeam[data.activeIndex]) ? originalTeam[data.activeIndex] : (team[0] || null);
  game.runId = s.runId;
  // Le vecchie run non tracciavano la vittoria con un solo Pokémon: non va inventata.
  game.soloRunEligible = data.soloRunEligible === true && data.soloRunTracked === true && team.length === 1;
  game.soloRunTracked = data.soloRunTracked === true;
  game.devRun = data.devRun === true;
  game.runMode = mode;
  game.floorKind = ['calm', 'trainers'].includes(data.floorKind) ? data.floorKind : null;
  return { interrupted: Boolean(s.interrupted), caveAbandoned: data.celestialAbandoned === true, lostInCave: Array.isArray(data.celestialLost) ? data.celestialLost.map(String) : [] };
}
