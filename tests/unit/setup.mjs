// Ambiente comune ai test unitari: localStorage in memoria e dati di gioco reali.
import fs from 'node:fs';
import { setGameData } from '../../js/core/data.js';

const memory = new Map();
globalThis.localStorage = {
  getItem: k => (memory.has(k) ? memory.get(k) : null),
  setItem: (k, v) => memory.set(k, String(v)),
  removeItem: k => memory.delete(k),
  clear: () => memory.clear(),
};
const read = name => JSON.parse(fs.readFileSync(new URL(`../../data/${name}.json`, import.meta.url), 'utf8'));
setGameData({ pokemon: read('pokemon'), moves: read('moves'), abilities: read('abilities') });

/** Generatore pseudo-casuale riproducibile. */
export function seeded(seed = 42) {
  let s = seed;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}
export const ROOT = new URL('../../', import.meta.url);
