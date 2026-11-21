// Tabella dei tipi moderna (6ª generazione in poi, con Folletto).
export const TYPE_CHART = Object.freeze({
  normal: { rock: .5, ghost: 0, steel: .5 },
  fire: { fire: .5, water: .5, grass: 2, ice: 2, bug: 2, rock: .5, dragon: .5, steel: 2 },
  water: { fire: 2, water: .5, grass: .5, ground: 2, rock: 2, dragon: .5 },
  electric: { water: 2, electric: .5, grass: .5, ground: 0, flying: 2, dragon: .5 },
  grass: { fire: .5, water: 2, grass: .5, poison: .5, ground: 2, flying: .5, bug: .5, rock: 2, dragon: .5, steel: .5 },
  ice: { fire: .5, water: .5, grass: 2, ice: .5, ground: 2, flying: 2, dragon: 2, steel: .5 },
  fighting: { normal: 2, ice: 2, poison: .5, flying: .5, psychic: .5, bug: .5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: .5 },
  poison: { grass: 2, poison: .5, ground: .5, rock: .5, ghost: .5, steel: 0, fairy: 2 },
  ground: { fire: 2, electric: 2, grass: .5, poison: 2, flying: 0, bug: .5, rock: 2, steel: 2 },
  flying: { electric: .5, grass: 2, fighting: 2, bug: 2, rock: .5, steel: .5 },
  psychic: { fighting: 2, poison: 2, psychic: .5, dark: 0, steel: .5 },
  bug: { fire: .5, grass: 2, fighting: .5, poison: .5, flying: .5, psychic: 2, ghost: .5, dark: 2, steel: .5, fairy: .5 },
  rock: { fire: 2, ice: 2, fighting: .5, ground: .5, flying: 2, bug: 2, steel: .5 },
  ghost: { normal: 0, psychic: 2, ghost: 2, dark: .5 },
  dragon: { dragon: 2, steel: .5, fairy: 0 },
  dark: { fighting: .5, psychic: 2, ghost: 2, dark: .5, fairy: .5 },
  steel: { fire: .5, water: .5, electric: .5, ice: 2, rock: 2, steel: .5, fairy: 2 },
  fairy: { fire: .5, fighting: 2, poison: .5, dragon: 2, dark: 2, steel: .5 },
});

export const TYPE_NAMES_IT = Object.freeze({
  normal: 'NORMALE', fire: 'FUOCO', water: 'ACQUA', electric: 'ELETTRO', grass: 'ERBA', ice: 'GHIACCIO',
  fighting: 'LOTTA', poison: 'VELENO', ground: 'TERRA', flying: 'VOLANTE', psychic: 'PSICO', bug: 'COLEOTTERO',
  rock: 'ROCCIA', ghost: 'SPETTRO', dragon: 'DRAGO', dark: 'BUIO', steel: 'ACCIAIO', fairy: 'FOLLETTO',
  typeless: '???',
});

export const typeName = type => TYPE_NAMES_IT[String(type || '').toLowerCase()] || String(type || '').toUpperCase();

export function typeEffectiveness(attackType, defendingTypes) {
  return (defendingTypes || []).reduce((value, type) => value * (TYPE_CHART[attackType]?.[type] ?? 1), 1);
}

// Immunità di tipo agli stati alterati (regole dalla 6ª/7ª generazione).
const STATUS_TYPE_IMMUNITY = Object.freeze({
  burn: ['fire'], freeze: ['ice'], paralysis: ['electric'],
  poison: ['poison', 'steel'], 'bad-poison': ['poison', 'steel'],
});
export function typeBlocksStatus(types, status) {
  return (STATUS_TYPE_IMMUNITY[status] || []).some(type => (types || []).includes(type));
}
