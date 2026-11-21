// Tabelle di gioco: bilanciamento, oggetti, palestre, evoluzioni e sprite.
import { statMultiplier } from './stats.js';

// ---------------------------------------------------------------- Bilanciamento
export const GAME_BALANCE = Object.freeze({
  wildEncounterChance: .20, earlyWildMaxLevel: 3, earlyTrainerMaxLevel: 5, earlyFloors: 5,
  levelPerFloor: .52, expTrainerMultiplier: 1.25, expGymMultiplier: 1.45,
});
export const FINAL_FLOOR = 80;
export const SHINY_RATE = 2000;
// Probabilità di ciascun uccello leggendario ancora disponibile per passo nell'erba.
export const LEGENDARY_BIRD_CHANCE_PER_STEP = 0.0008;
// Medaglie possedute (0–8) → livello massimo e posti in squadra.
// Il limite è 2 livelli sopra il Pokémon più forte del prossimo Capopalestra:
// si può arrivare leggermente avvantaggiati, senza poter livellare all'infinito.
export const BADGE_LEVEL_CAPS = Object.freeze([16, 23, 26, 31, 37, 45, 49, 52, 100]);
export const BADGE_TEAM_SLOTS = Object.freeze([2, 3, 3, 4, 4, 5, 5, 6, 6]);

export const isCityFloor = floor => floor % 10 === 0;
export const isTownFloor = floor => floor % 5 === 0;

// ---------------------------------------------------------------- Oggetti
export const ITEMS = Object.freeze({
  pokeball: { label: 'Poké Ball', icon: 'pokeball.png', limit: 20, category: 'pokeball' },
  masterball: { label: 'Master Ball', icon: 'master-ball.svg', limit: 1, category: 'pokeball' },
  potion: { label: 'Pozione', icon: 'potion.png', limit: 10, category: 'rimedi', heal: 20 },
  superPotion: { label: 'Superpozione', icon: 'super-potion.png', limit: 10, category: 'rimedi', heal: 50 },
  hyperPotion: { label: 'Iperpozione', icon: 'hyper-potion.png', limit: 10, category: 'rimedi', heal: 200 },
  elixir: { label: 'Elisir', icon: 'elixir.png', limit: 10, category: 'rimedi' },
  abilityCapsule: { label: 'Capsula Abilità', icon: 'ability-capsule.png', limit: 10, category: 'rimedi' },
  waterStone: { label: 'Pietraidrica', icon: 'water-stone.png', limit: 1, category: 'rimedi', evolves: 134 },
  thunderStone: { label: 'Pietratuono', icon: 'thunder-stone.png', limit: 1, category: 'rimedi', evolves: 135 },
  fireStone: { label: 'Pietrafocaia', icon: 'fire-stone.png', limit: 1, category: 'rimedi', evolves: 136 },
  rareCandy: { label: 'Caramella Rara', icon: 'rare-candy.png', category: 'rimedi', dev: true },
  goldCandy: { label: 'Caramella d’Oro', icon: 'gold-candy.png', category: 'rimedi', dev: true },
  fishingRod: { label: 'Canna da Pesca', icon: 'old-rod.png', limit: 1, category: 'chiave' },
  expShare: { label: 'Condividi Esp.', icon: 'exp-share.png', category: 'chiave' },
  radar: { label: 'Radar Scan', icon: 'radar.png' },
});
export const BAG_LIMITS = Object.freeze(Object.fromEntries(Object.entries(ITEMS).filter(([, v]) => v.limit).map(([k, v]) => [k, v.limit])));
export const itemImage = id => `assets/sprites/items/${(ITEMS[id] || ITEMS.pokeball).icon}`;
export const itemLabel = id => ITEMS[id]?.label || id;
export const STONE_EVOLUTIONS = Object.freeze({waterStone:134,thunderStone:135,fireStone:136});

// Catalogo del PokéMarket: unica fonte per prezzi, pulsanti e sblocchi.
// Le città sono ai piani 10, 20, …; i villaggi ai piani 5, 15, ….
export const SHOP_ITEMS = Object.freeze([
  { id: 'pokeball', price: 200 },
  { id: 'potion', price: 150 },
  { id: 'superPotion', price: 600, unlockFloor: 20 },
  { id: 'hyperPotion', price: 1000, unlockFloor: 50 },
  { id: 'elixir', price: 400 },
  { id: 'abilityCapsule', price: 3000 },
  { id: 'radar', price: 1500 },
]);
export const shopItem = id => SHOP_ITEMS.find(item => item.id === id) || null;
export function isPokemartItemUnlocked(id, floor) {
  const item = shopItem(id);
  return !item?.unlockFloor || Number(floor) >= item.unlockFloor;
}
// Rimedi trovati sul terreno: la potenza cresce con il piano.
const GROUND_HEALING = Object.freeze([[1, 'potion'], [21, 'superPotion'], [51, 'hyperPotion']]);
export const groundHealingItem = floor => [...GROUND_HEALING].reverse().find(([f]) => floor >= f)[1];

// ---------------------------------------------------------------- Sprite
// Sprite di mappa FireRed/LeafGreen (fogli orizzontali 16×32) e ritratti dei dialoghi.
export const OVERWORLD_NPCS = Object.freeze(['youngster', 'lass', 'balding_man', 'old_woman', 'cooltrainer_m', 'cooltrainer_f', 'picnicker', 'camper', 'nurse', 'policeman', 'hiker', 'scientist', 'rich_boy', 'sailor', 'gentleman', 'clerk']);
export const OVERWORLD_NPC_LABELS = Object.freeze(['Giovane', 'Ragazza', 'Anziano', 'Donna anziana', 'Fantallenatore', 'Fantallenatrice', 'Picnic Girl', 'Campeggiatore', 'Infermiera Joy', 'Poliziotto', 'Montanaro', 'Scienziato', 'Ragazzo ricco', 'Marinaio', 'Gentiluomo', 'Commesso PokéMarket']);
const PORTRAIT_IDS = Object.freeze({ youngster: 1, lass: 2, balding_man: 3, old_woman: 4, cooltrainer_m: 5, cooltrainer_f: 6, picnicker: 7, camper: 8, nurse: 9, policeman: 10, hiker: 11, scientist: 12, rich_boy: 13, sailor: 14, gentleman: 15, clerk: 16, bug_catcher: 17, fisher: 18 });
const OVERWORLD_SHEETS = new Set([...OVERWORLD_NPCS, 'bug_catcher', 'fisher']);
export const FALLBACK_AVATAR = 'assets/sprites/ui/trainer-avatar-fallback.svg';
export const OAK_MAP_SPRITE = 'assets/sprites/npc/oak-down.png';
export const OAK_PORTRAIT = 'assets/sprites/npc/oak-mugshot.png';

export function overworldPortraitUrl(name) {
  const index = PORTRAIT_IDS[String(name || '')];
  return index ? `assets/sprites/npc/portraits/OW-${String(index).padStart(2, '0')}.png` : null;
}
export function overworldSpriteUrl(name) {
  const key = OVERWORLD_SHEETS.has(String(name || '').trim()) ? String(name).trim() : 'youngster';
  return `assets/sprites/overworld/${key}.png`;
}
export const leaderSpriteUrl = gym => `assets/sprites/leaders/${gym.sprite}.png`;
export const badgeSprite = index => `assets/sprites/badges/${index + 1}.png`;

/** Converte i percorsi salvati nei checkpoint delle beta precedenti in quelli attuali. */
export function resolvedSpritePath(path) {
  const name = String(path || '');
  let m = name.match(/pokefirered\/master\/graphics\/object_events\/pics\/people\/([a-z_]+)\.png$/) ||
    name.match(/^assets\/sprites\/npc\/overworld\/([a-z_]+)\.png$/);
  if (m) return overworldSpriteUrl(m[1]);
  m = name.match(/sprites\/trainers\/([a-z]+)-gen3\.png$/);
  if (m) {
    const gym = KANTO_GYMS.find(g => g.sprite === m[1]);
    if (gym) return leaderSpriteUrl(gym);
    const route = { bugcatcher: 'bug_catcher', youngster: 'youngster', lass: 'lass', acetrainer: 'cooltrainer_m', pokemonranger: 'cooltrainer_f', hiker: 'hiker', camper: 'camper' }[m[1]];
    return overworldPortraitUrl(route) || FALLBACK_AVATAR;
  }
  m = name.match(/PokeAPI\/sprites\/master\/sprites\/pokemon\/(.+\.png)$/);
  if (m) return `assets/pokemon/${m[1]}`;
  m = name.match(/^assets\/sprites\/npc\/ritratti\/(OW-\d{2}\.png)$/);
  if (m) return `assets/sprites/npc/portraits/${m[1]}`;
  if (/oak-(frlg-down|overworld-local)/.test(name)) return OAK_MAP_SPRITE;
  if (/oak-frlg-mugshot/.test(name)) return OAK_PORTRAIT;
  if (/^assets\/(characters|trainers|red|girl)\//.test(name)) {
    const legacy = name.replace('assets/red/', 'assets/sprites/player/red/').replace('assets/girl/', 'assets/sprites/player/girl/');
    return legacy.startsWith('assets/sprites/player/') ? legacy : FALLBACK_AVATAR;
  }
  return name;
}

// ---------------------------------------------------------------- Mosse speciali
export const CHARGE_MOVES = new Set(['solar-beam', 'solar-blade', 'fly', 'dig', 'dive', 'bounce', 'sky-attack', 'skull-bash', 'razor-wind', 'shadow-force', 'phantom-force', 'geomancy', 'freeze-shock', 'ice-burn', 'meteor-beam', 'electro-shot', 'sky-drop']);
export const RECHARGE_MOVES = new Set(['hyper-beam', 'giga-impact', 'blast-burn', 'hydro-cannon', 'frenzy-plant', 'rock-wrecker', 'roar-of-time', 'prismatic-laser', 'eternabeam']);
export const RAMPAGE_MOVES = new Set(['outrage', 'thrash', 'petal-dance']);
export const ROLLOUT_MOVES = new Set(['rollout', 'ice-ball']);
export const TRAP_MOVES = new Set(['wrap', 'bind', 'clamp', 'fire-spin', 'whirlpool', 'sand-tomb', 'infestation']);
export const FORCED_RECHARGE_ACTION = Object.freeze({ id: 'recharge', name: 'Ricarica', priority: 0, currentPp: 1 });
export const CHARGE_MESSAGES = Object.freeze({
  'solar-beam': 'assorbe luce solare', 'solar-blade': 'assorbe luce solare', fly: 'si alza in volo', dig: 'si nasconde sottoterra',
  dive: 'si immerge', bounce: 'balza in aria', 'sky-attack': 'prepara Aeroattacco', 'skull-bash': 'ritrae la testa',
  'razor-wind': 'prepara un turbine', 'shadow-force': 'svanisce nell’ombra', 'phantom-force': 'svanisce nell’ombra',
  geomancy: 'accumula energia', 'freeze-shock': 'accumula energia gelida', 'ice-burn': 'accumula energia ardente',
  'meteor-beam': 'assorbe energia cosmica', 'electro-shot': 'assorbe energia elettrica', 'sky-drop': 'si alza in volo',
});
export const CHARGE_UNTOUCHABLE = Object.freeze({
  fly: ['gust', 'twister', 'thunder', 'hurricane', 'sky-uppercut', 'smack-down'],
  bounce: ['gust', 'twister', 'thunder', 'hurricane', 'sky-uppercut', 'smack-down'],
  dig: ['earthquake', 'magnitude', 'fissure'], dive: ['surf', 'whirlpool'],
  'phantom-force': [], 'shadow-force': [], 'sky-drop': [],
});

/** Numero di colpi delle mosse multiple (regole dalla 5ª generazione: 35/35/15/15%). */
export function rollMultiHitCount(move, random = Math.random) {
  const min = Math.max(1, move.minHits || 1), max = Math.max(min, move.maxHits || min);
  if (min === max) return min;
  const n = Math.min(.99999999, Math.max(0, random()));
  if (min === 2 && max === 5) return n < .35 ? 2 : n < .70 ? 3 : n < .85 ? 4 : 5;
  return min + Math.floor(n * (max - min + 1));
}
/** Autocolpo da confusione: 40 di potenza, fisico, senza tipo. */
export function getConfusionDamage(mon, random = Math.random) {
  const attack = mon.attack * statMultiplier(mon.statStages?.attack);
  const defense = Math.max(1, mon.defense * statMultiplier(mon.statStages?.defense));
  return Math.max(1, Math.floor(((2 * mon.level / 5 + 2) * 40 * attack / defense / 50 + 2) * (.85 + random() * .15)));
}
const MAGNITUDE_ROLLS = Object.freeze([
  { level: 4, power: 10, chance: 5 }, { level: 5, power: 30, chance: 10 }, { level: 6, power: 50, chance: 20 },
  { level: 7, power: 70, chance: 30 }, { level: 8, power: 90, chance: 20 }, { level: 9, power: 110, chance: 10 },
  { level: 10, power: 150, chance: 5 },
]);
export function rollMagnitude(random = Math.random) {
  const n = Math.max(0, Math.min(99.999, Number(random()) * 100));
  let cumulative = 0;
  for (const outcome of MAGNITUDE_ROLLS) { cumulative += outcome.chance; if (n < cumulative) return outcome; }
  return MAGNITUDE_ROLLS.at(-1);
}
/** Esperienza scalata sul livello, ispirata al sistema dei giochi principali. */
export function scaledBattleExperience(baseYield, defeatedLevel, recipientLevel, trainerMultiplier = 1) {
  const base = Math.max(20, Number(baseYield) || 60), enemy = Math.max(1, defeatedLevel), player = Math.max(1, recipientLevel);
  const levelRatio = Math.pow((2 * enemy + 10) / (enemy + player + 10), 2.5);
  return Math.max(1, Math.floor((base * enemy / 7) * levelRatio * trainerMultiplier * 1.36));
}

// ---------------------------------------------------------------- Evoluzioni e incontri
// Evoluzioni di campagna per livello (Eevee usa solo le pietre). [da, a, livello]
const EVOLUTIONS = [
  [1, 2, 16], [2, 3, 32], [4, 5, 16], [5, 6, 36], [7, 8, 16], [8, 9, 36], [10, 11, 7], [11, 12, 10], [13, 14, 7], [14, 15, 10],
  [16, 17, 18], [17, 18, 36], [19, 20, 20], [21, 22, 20], [23, 24, 22], [25, 26, 30], [27, 28, 22], [29, 30, 16], [30, 31, 34],
  [32, 33, 16], [33, 34, 34], [35, 36, 30], [37, 38, 30], [39, 40, 30], [41, 42, 22], [43, 44, 21], [44, 45, 34], [46, 47, 24],
  [48, 49, 31], [50, 51, 26], [52, 53, 28], [54, 55, 33], [56, 57, 28], [58, 59, 35], [60, 61, 25], [61, 62, 38], [63, 64, 16],
  [64, 65, 36], [66, 67, 28], [67, 68, 36], [69, 70, 21], [70, 71, 36], [72, 73, 30], [74, 75, 25], [75, 76, 40], [77, 78, 40],
  [79, 80, 37], [81, 82, 30], [84, 85, 31], [86, 87, 34], [88, 89, 38], [90, 91, 32], [92, 93, 25], [93, 94, 38], [96, 97, 26],
  [98, 99, 28], [100, 101, 30], [102, 103, 32], [104, 105, 28], [109, 110, 35], [111, 112, 42], [116, 117, 32], [118, 119, 33],
  [120, 121, 34], [129, 130, 20], [138, 139, 40], [140, 141, 40], [147, 148, 30], [148, 149, 55],
];
export const CAMPAIGN_EVOLUTIONS = new Map();
const PREVIOUS_STAGE = new Map();
for (const [from, to, level] of EVOLUTIONS) {
  if (!CAMPAIGN_EVOLUTIONS.has(from)) CAMPAIGN_EVOLUTIONS.set(from, []);
  CAMPAIGN_EVOLUTIONS.get(from).push(Object.freeze({ id: to, level }));
  PREVIOUS_STAGE.set(to, from);
}
const LEGENDARY = new Set([144, 145, 146, 150, 151]);
const STONE_FAMILY = Object.freeze({133:[134,135,136]});
for (const branch of STONE_FAMILY[133]) PREVIOUS_STAGE.set(branch, 133);
export const baseSpecies = id => { let s = Number(id); while (PREVIOUS_STAGE.has(s)) s = PREVIOUS_STAGE.get(s); return s; };
export const levelEvolutionOptions = (id, level) => (CAMPAIGN_EVOLUTIONS.get(Number(id)) || []).filter(o => level >= o.level);
/** Tutti i membri della famiglia evolutiva di una specie (per il Pokédex). */
export function evolutionFamily(id) {
  const out = [], queue = [baseSpecies(id)];
  while (queue.length) { const s = queue.shift(); out.push(s); queue.push(...(CAMPAIGN_EVOLUTIONS.get(s) || []).map(o => o.id), ...(STONE_FAMILY[s] || [])); }
  return out;
}
/** Stadio evolutivo coerente con il livello; Eevee non evolve più per livello. */
export function evolvedEncounterId(id, level, random = Math.random) {
  let species = baseSpecies(id);
  for (;;) {
    const options = levelEvolutionOptions(species, level);
    if (!options.length) return species;
    species = options[Math.min(options.length - 1, Math.floor(random() * options.length))].id;
  }
}
const BASE_SPECIES = [...new Set(Array.from({ length: 151 }, (_, i) => baseSpecies(i + 1)))].filter(id => !LEGENDARY.has(id));
const STARTER_FAMILIES = new Set([1, 4, 7]);
// Specie rare: compaiono dal piano 25; alcune richiedono anche livello ≥ 8.
const RARE_BASE = new Set([95, 106, 107, 113, 115, 122, 123, 124, 125, 126, 127, 128, 131, 132, 133, 137, 138, 140, 142, 143, 147]);
const LATE_LEVEL_BASE = new Set([95, 102, 113, 115, 123, 124, 125, 126, 127, 128, 131, 132, 137, 138, 140, 142, 143, 147]);
const EARLY_ROUTE = [19, 16, 10, 13, 52, 39, 21, 43];
export function randomKantoSpecies(level, floor, random = Math.random) {
  if (floor <= 5) return evolvedEncounterId(EARLY_ROUTE[Math.floor(random() * EARLY_ROUTE.length)], level, random);
  const pool = BASE_SPECIES.filter(id => !STARTER_FAMILIES.has(id) && (!RARE_BASE.has(id) || floor >= 25) && (level >= 8 || !LATE_LEVEL_BASE.has(id)));
  return evolvedEncounterId(pool[Math.min(pool.length - 1, Math.floor(random() * pool.length))], level, random);
}
export const FISHING_POOL = Object.freeze({ early: [129, 118, 60], late: [129, 118, 60, 116, 72, 120, 90] });

// ---------------------------------------------------------------- Palestre di Kanto
export const KANTO_GYMS = Object.freeze([
  { name: 'Brock', badge: 'Sasso', badgeId: 0, specialty: 'ROCCIA', sprite: 'brock', palette: 'brock', pokemon: [74, 95], levels: [12, 14] },
  { name: 'Misty', badge: 'Cascata', badgeId: 1, specialty: 'ACQUA', sprite: 'misty', palette: 'misty', pokemon: [7, 121], levels: [18, 21] },
  { name: 'Lt. Surge', badge: 'Tuono', badgeId: 2, specialty: 'ELETTRO', sprite: 'ltsurge', palette: 'surge', pokemon: [100, 25, 26], levels: [21, 18, 24] },
  { name: 'Erika', badge: 'Arcobaleno', badgeId: 3, specialty: 'ERBA', sprite: 'erika', palette: 'erika', pokemon: [114, 70, 45], levels: [24, 29, 29] },
  { name: 'Koga', badge: 'Anima', badgeId: 4, specialty: 'VELENO', sprite: 'koga', palette: 'koga', pokemon: [109, 89, 110], levels: [32, 34, 35] },
  { name: 'Sabrina', badge: 'Palude', badgeId: 5, specialty: 'PSICO', sprite: 'sabrina', palette: 'sabrina', pokemon: [64, 122, 65], levels: [38, 37, 43] },
  { name: 'Blaine', badge: 'Vulcano', badgeId: 6, specialty: 'FUOCO', sprite: 'blaine', palette: 'blaine', pokemon: [58, 77, 78, 59], levels: [42, 40, 42, 47] },
  { name: 'Giovanni', badge: 'Terra', badgeId: 7, specialty: 'TERRA', sprite: 'giovanni', palette: 'giovanni', pokemon: [111, 51, 31, 34], levels: [45, 42, 44, 50] },
].map(gym => Object.freeze(gym)));
export const gymForFloor = floor => KANTO_GYMS[(Math.floor(floor / 10) - 1) % KANTO_GYMS.length];
// Gli allenatori di palestra usano specie del tipo del capopalestra.
export const GYM_TRAINER_POOLS = Object.freeze([
  [74, 75, 95, 111], [60, 61, 72, 90, 118, 120], [25, 81, 82, 100, 101], [43, 44, 69, 70, 114],
  [23, 24, 41, 42, 109, 110], [63, 64, 96, 97, 122], [37, 58, 77, 126], [27, 28, 50, 51, 104, 105, 111],
]);
// Classi degli allenatori sui percorsi: [nome, sprite di mappa/ritratto].
export const ROUTE_TRAINER_CLASSES = Object.freeze([
  ['Bullo', 'youngster'], ['Pigliamosche', 'bug_catcher'], ['Fantallenatore', 'cooltrainer_m'],
  ['Pokémon Ranger', 'cooltrainer_f'], ['Montanaro', 'hiker'], ['Campeggiatore', 'camper'],
]);
