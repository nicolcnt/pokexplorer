// Dati di gioco locali (i file JSON nella cartella data, generati da tools/build-data.py).
// Sono importati direttamente: nel pacchetto js/pokexplorer.js finiscono incorporati,
// così il gioco funziona anche aprendo index.html come file, senza server.
import pokemonFile from '../../data/pokemon.json' with { type: 'json' };
import movesFile from '../../data/moves.json' with { type: 'json' };
import abilitiesFile from '../../data/abilities.json' with { type: 'json' };

let SPECIES = new Map();
let MOVES = {};
let ABILITIES = {};
let META = {};

/** Installa i dati già letti (usato dai test in Node e dal loader del browser). */
export function setGameData({ pokemon, moves, abilities }) {
  SPECIES = new Map(pokemon.data.map(s => [s.id, Object.freeze(s)]));
  MOVES = moves.data;
  ABILITIES = abilities.data;
  META = pokemon.meta || {};
}

/** Installa i dati incorporati. Sincrona: non ci sono più richieste di rete. */
export function loadGameData() {
  setGameData({ pokemon: pokemonFile, moves: movesFile, abilities: abilitiesFile });
}

export const dataMeta = () => META;
export const speciesData = id => SPECIES.get(Number(id)) || null;
export const allSpecies = () => [...SPECIES.values()];
export const moveData = id => MOVES[id] || null;
export const allMoveIds = () => Object.keys(MOVES);
export const abilityData = id => ABILITIES[id] || null;
export const speciesName = id => speciesData(id)?.name || `#${id}`;
export const abilityName = id => abilityData(id)?.name || String(id || '').replaceAll('-', ' ');

/** Percorso locale dello sprite di una specie (varianti femminili solo dove esistono). */
export function pokemonSprite(id, { back = false, shiny = false, gender = null } = {}) {
  const s = speciesData(id);
  const female = gender === 'female' && s?.femaleSprites;
  return `assets/pokemon/${back ? 'back/' : ''}${shiny ? 'shiny/' : ''}${female ? 'female/' : ''}${Number(id)}.png`;
}
