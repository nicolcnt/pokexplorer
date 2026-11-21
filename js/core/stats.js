// Statistiche, nature e curve di esperienza (formule dei giochi principali).


export const STAT_KEYS = Object.freeze(['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed']);
export const STAT_LABELS_IT = Object.freeze({ hp: 'PS', attack: 'ATT', defense: 'DIF', 'special-attack': 'ATT. SP', 'special-defense': 'DIF. SP', speed: 'VEL', accuracy: 'PREC', evasion: 'ELUS' });

// Le 25 nature: [nome, statistica aumentata, statistica ridotta].
export const POKEMON_NATURES = Object.freeze([
  ['Ardita', null, null], ['Schiva', 'attack', 'defense'], ['Audace', 'attack', 'speed'], ['Decisa', 'attack', 'special-attack'],
  ['Birbona', 'attack', 'special-defense'], ['Sicura', 'defense', 'attack'], ['Docile', null, null], ['Placida', 'defense', 'speed'],
  ['Scaltra', 'defense', 'special-attack'], ['Fiacca', 'defense', 'special-defense'], ['Timida', 'speed', 'attack'],
  ['Lesta', 'speed', 'defense'], ['Seria', null, null], ['Allegra', 'speed', 'special-attack'], ['Ingenua', 'speed', 'special-defense'],
  ['Modesta', 'special-attack', 'attack'], ['Mite', 'special-attack', 'defense'], ['Quieta', 'special-attack', 'speed'],
  ['Ritrosa', null, null], ['Ardente', 'special-attack', 'special-defense'], ['Calma', 'special-defense', 'attack'],
  ['Gentile', 'special-defense', 'defense'], ['Vivace', 'special-defense', 'speed'], ['Cauta', 'special-defense', 'special-attack'],
  ['Furba', null, null],
]);

export function natureStatMultiplier(nature, stat) {
  if (!nature || nature[1] === nature[2]) return 1;
  return nature[1] === stat ? 1.1 : nature[2] === stat ? 0.9 : 1;
}
export function pokemonStatValue(base, iv, ev, level, nature, key) {
  const raw = Math.floor((2 * base + iv + Math.floor(ev / 4)) * level / 100);
  return key === 'hp' ? raw + level + 10 : Math.floor((raw + 5) * natureStatMultiplier(nature, key));
}
export function statMultiplier(stage) {
  const n = Math.max(-6, Math.min(6, stage || 0));
  return n >= 0 ? (2 + n) / 2 : 2 / (2 - n);
}
export function accuracyStageMultiplier(stage) {
  const n = Math.max(-6, Math.min(6, stage || 0));
  return n >= 0 ? (3 + n) / 3 : 3 / (3 - n);
}

// Gruppi di crescita: esperienza TOTALE necessaria per raggiungere un livello.
const GROWTH_RATES = new Set(['erratic', 'fast', 'medium-fast', 'medium-slow', 'slow', 'fluctuating']);
export const normalizedGrowthRate = rate => GROWTH_RATES.has(rate) ? rate : 'medium-fast';
export function totalExperienceForLevel(rate, level) {
  const n = Math.max(1, Math.min(100, Math.floor(Number(level) || 1)));
  if (n === 1) return 0;
  const n3 = n * n * n;
  let value;
  switch (normalizedGrowthRate(rate)) {
    case 'erratic':
      value = n < 50 ? n3 * (100 - n) / 50 : n < 68 ? n3 * (150 - n) / 100 : n < 98 ? n3 * Math.floor((1911 - 10 * n) / 3) / 500 : n3 * (160 - n) / 100;
      break;
    case 'fast': value = 4 * n3 / 5; break;
    case 'medium-slow': value = 6 * n3 / 5 - 15 * n * n + 100 * n - 140; break;
    case 'slow': value = 5 * n3 / 4; break;
    case 'fluctuating':
      value = n < 15 ? n3 * (Math.floor((n + 1) / 3) + 24) / 50 : n < 36 ? n3 * (n + 14) / 50 : n3 * (Math.floor(n / 2) + 32) / 50;
      break;
    default: value = n3;
  }
  return Math.max(0, Math.floor(value));
}
export function experienceForNextLevel(rate, level) {
  const n = Math.max(1, Math.min(100, Math.floor(Number(level) || 1)));
  return n >= 100 ? 0 : totalExperienceForLevel(rate, n + 1) - totalExperienceForLevel(rate, n);
}
