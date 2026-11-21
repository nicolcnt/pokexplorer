// Pokémon, mosse e calcolo dei danni con le regole moderne
// (divisione fisico/speciale per mossa, brutti colpi ×1,5, tabella tipi con Folletto).
import { speciesData, moveData, abilityName, pokemonSprite, allMoveIds } from './data.js';
import { typeEffectiveness } from './types.js';
import { SHINY_RATE, levelEvolutionOptions } from './constants.js';
import {
  STAT_KEYS, POKEMON_NATURES, pokemonStatValue, statMultiplier, normalizedGrowthRate, experienceForNextLevel,
} from './stats.js';
import * as Abilities from './abilities.js';

// Semantica delle mosse che i dati PokéAPI non descrivono in modo utilizzabile dal motore.
const MOVE_EFFECTS = Object.freeze({
  'light-screen': { screen: 'special' }, reflect: { screen: 'physical' },
  'future-sight': { delayedHit: true }, 'doom-desire': { delayedHit: true },
  'self-destruct': { selfKo: true }, explosion: { selfKo: true },
  'focus-energy': { focusEnergy: true }, haze: { resetStages: true }, mist: { mist: true }, safeguard: { safeguard: true },
  'psych-up': { copyStages: true }, 'belly-drum': { maxAttackHalfHp: true },
  'heal-bell': { cureTeam: true }, aromatherapy: { cureTeam: true }, refresh: { cureStatus: true },
  roar: { disengage: true }, whirlwind: { disengage: true },
  'leech-seed': { ailment: null, ailmentChance: 0 },
  toxic: { ailment: 'bad-poison' }, 'poison-fang': { ailment: 'bad-poison' },
  protect: { ailment: null, protects: true }, detect: { ailment: null, protects: true },
  rest: { healing: 100 },
});
// Gli unici stati che il motore applica; il resto dei dati "ailment" (trappole, ecc.)
// è gestito da logiche dedicate o ignorato.
const BATTLE_AILMENTS = new Set(['poison', 'bad-poison', 'burn', 'paralysis', 'sleep', 'freeze', 'confusion', 'infatuation']);
// Mosse che Metronomo non può richiamare.
const METRONOME_EXCLUDED = new Set(['metronome', 'struggle', 'sleep-talk', 'protect', 'detect', 'mirror-move', 'counter', 'mimic', 'transform', 'assist']);

export class Move {
  constructor(id, data) {
    this.id = id;
    this.name = data.name;
    this.type = data.type;
    this.category = data.category;
    this.power = data.power || 0;
    this.maxPp = data.pp || 1;
    this.currentPp = this.maxPp;
    this.accuracy = data.accuracy ?? 100;
    this.alwaysHits = data.accuracy == null && data.category !== 'status' ? true : Boolean(data.alwaysHits);
    this.priority = data.priority || 0;
    this.critRate = data.critRate || 0;
    this.statTarget = data.target || null;
    this.ailment = BATTLE_AILMENTS.has(data.ailment) ? data.ailment : null;
    this.ailmentChance = data.ailmentChance || (this.ailment && !this.power ? 100 : 0);
    this.drain = data.drain || 0;
    this.healing = data.healing || 0;
    this.flinchChance = data.flinchChance || 0;
    this.minHits = data.minHits || 1;
    this.maxHits = data.maxHits || this.minHits;
    const chance = data.statChance || data.effectChance || 100;
    this.statChanges = (data.statChanges || []).map(([stat, stage]) => ({ stat, stage, chance }));
    const flags = new Set(data.flags || []);
    for (const flag of ['contact', 'punch', 'bite', 'sound', 'ballistic', 'powder']) this[flag] = flags.has(flag);
    Object.assign(this, MOVE_EFFECTS[id] || {});
  }
}

/** Crea una mossa dai dati locali. Mosse sconosciute diventano un'Azione senza effetti. */
export function createMove(moveId) {
  const id = String(moveId || '').toLowerCase();
  const data = moveData(id);
  if (!data) return Object.assign(new Move(id, { name: id.replaceAll('-', ' ').toUpperCase(), type: 'normal', category: 'status', pp: 1 }), { unsupported: true });
  return new Move(id, data);
}
/** Ricrea una mossa salvata in un checkpoint mantenendone i PP residui. */
export function restoreMove(saved) {
  const move = createMove(saved?.id);
  if (Number.isFinite(saved?.currentPp)) move.currentPp = Math.max(0, Math.min(move.maxPp, saved.currentPp));
  return move;
}
export function randomMetronomeMove(random = Math.random) {
  const ids = allMoveIds().filter(id => !METRONOME_EXCLUDED.has(id));
  return createMove(ids[Math.floor(random() * ids.length)]);
}

export function rollGender(genderRate, random = Math.random) {
  if (genderRate === -1) return 'genderless';
  const rate = Number.isInteger(genderRate) && genderRate >= 0 && genderRate <= 8 ? genderRate : 4;
  return random() < rate / 8 ? 'female' : 'male';
}
export function applySprites(mon) {
  mon.spriteFront = pokemonSprite(mon.id, { shiny: mon.isShiny, gender: mon.gender });
  mon.spriteBack = pokemonSprite(mon.id, { back: true, shiny: mon.isShiny, gender: mon.gender });
}
const VALID_GENDERS = new Set(['male', 'female', 'genderless']);

export class Pokemon {
  /**
   * @param {object} species  record di data/pokemon.json
   * @param {number} level
   * @param {{gender?:string,isShiny?:boolean}} traits  tratti già decisi (non vengono ritirati)
   */
  constructor(species, level = 5, traits = {}) {
    this.level = Math.min(100, Math.max(1, Math.floor(level)));
    this.gender = VALID_GENDERS.has(traits.gender) ? traits.gender : rollGender(species.genderRate);
    this.isShiny = typeof traits.isShiny === 'boolean' ? traits.isShiny : Math.random() < 1 / SHINY_RATE;
    this.ivs = Object.fromEntries(STAT_KEYS.map(k => [k, Math.floor(Math.random() * 32)]));
    this.evs = Object.fromEntries(STAT_KEYS.map(k => [k, 0]));
    this.nature = POKEMON_NATURES[Math.floor(Math.random() * POKEMON_NATURES.length)];
    this.setSpecies(species);
    this.ability = this.abilityOptions[Math.floor(Math.random() * this.abilityOptions.length)] || 'none';
    this.abilityName = abilityName(this.ability);
    this.exp = 0;
    this.expToNext = this.requiredExp();
    this.status = null; this.statusTurns = 0;
    this.clearVolatile();
    this.calcStats();
    this.currentHp = this.maxHp;
    this.moves = this.learnset.filter(m => m.level <= this.level).slice(-4).map(m => createMove(m.id));
    if (!this.moves.length) this.moves = [createMove('tackle')];
  }

  /** Dati di specie (usato alla creazione, all'evoluzione e al caricamento dei checkpoint). */
  setSpecies(species) {
    this.id = species.id;
    this.name = species.name.toUpperCase();
    this.types = [...species.types];
    this.type = this.types[0] || 'normal';
    this.growthRate = normalizedGrowthRate(species.growth);
    this.baseExperience = species.baseExp || 65;
    this.weight = species.weight ?? null;
    this.baseStats = { ...species.stats };
    this.evYield = { ...species.evYield };
    this.abilityOptions = [...species.abilities];
    this.learnset = species.learnset.map(([level, id]) => ({ id, level }));
    applySprites(this);
  }

  requiredExp() { return experienceForNextLevel(this.growthRate, this.level); }

  calcStats() {
    const val = key => pokemonStatValue(this.baseStats[key] ?? 50, this.ivs[key] ?? 0, this.evs[key] ?? 0, this.level, this.nature, key);
    this.maxHp = val('hp');
    this.attack = val('attack'); this.defense = val('defense');
    this.spAtk = val('special-attack'); this.spDef = val('special-defense');
    this.speed = val('speed');
  }

  gainEffortValues(yieldStats) {
    if (!yieldStats) return false;
    let total = Object.values(this.evs).reduce((a, b) => a + b, 0), changed = false;
    for (const stat of STAT_KEYS) {
      const amount = Math.min(Math.max(0, yieldStats[stat] || 0), 252 - this.evs[stat], 510 - total);
      if (amount > 0) { this.evs[stat] += amount; total += amount; changed = true; }
    }
    if (changed) { const before = this.maxHp; this.calcStats(); this.currentHp = Math.min(this.maxHp, this.currentHp + this.maxHp - before); }
    return changed;
  }

  getStatsSummary() {
    return { hp: this.maxHp, attack: this.attack, defense: this.defense, 'special-attack': this.spAtk, 'special-defense': this.spDef, speed: this.speed };
  }

  /** Compatibilità: le mosse sono già disponibili in locale. */
  async loadLearnset() {}

  async gainExperience(amount, levelCap = 100, chooseEvolution = null) {
    const levels = [];
    const cap = Math.max(1, Math.min(100, Math.floor(Number(levelCap) || 100)));
    // L'esperienza non si accumula oltre il limite di livello delle medaglie.
    if (this.level >= cap) { this.exp = 0; if (this.level >= 100) this.expToNext = 0; return levels; }
    this.exp += Math.max(0, Math.floor(Number(amount) || 0));
    while (this.level < cap && this.exp >= this.expToNext) {
      this.exp -= this.expToNext;
      const oldHp = this.maxHp;
      this.level++; this.expToNext = this.requiredExp(); this.calcStats();
      this.currentHp = Math.min(this.maxHp, this.currentHp + (this.maxHp - oldHp));
      const event = { level: this.level, moves: this.learnset.filter(m => m.level === this.level).map(m => createMove(m.id)) };
      const evolution = await this.tryEvolution(chooseEvolution);
      if (evolution) {
        event.evolution = evolution;
        // Mosse evolutive (livello 0) del nuovo stadio, come nei giochi moderni.
        event.moves.push(...this.learnset.filter(m => m.level === 0).map(m => createMove(m.id)));
      }
      levels.push(event);
    }
    if (this.level >= cap) { this.exp = 0; if (this.level >= 100) this.expToNext = 0; }
    return levels;
  }

  async tryEvolution(chooseEvolution = null) {
    const options = levelEvolutionOptions(this.id, this.level);
    if (!options.length) return null;
    let selected = options[0];
    if (options.length > 1) {
      if (typeof chooseEvolution !== 'function') return null;
      const destination = await chooseEvolution(options, this);
      selected = options.find(option => option.id === Number(destination));
      if (!selected) return null; // rimandata al prossimo livello
    }
    return this.evolveToSpecies(selected.id);
  }

  /** Evoluzione esplicita (es. pietra): il livello non ha alcun ruolo. */
  evolveToSpecies(destinationId) {
    const species = speciesData(destinationId);
    if (!species) return null;
    const oldHp = this.maxHp, from = { name: this.name, sprite: this.spriteFront };
    this.setSpecies(species);
    if (!this.abilityOptions.includes(this.ability)) this.ability = this.abilityOptions[0] || this.ability;
    this.abilityName = abilityName(this.ability);
    this.calcStats();
    this.currentHp = Math.min(this.maxHp, this.currentHp + this.maxHp - oldHp);
    return { from: from.name, to: this.name, fromSprite: from.sprite, toSprite: this.spriteFront };
  }

  restorePp() { this.moves.forEach(m => { m.currentPp = m.maxPp; }); }

  clearVolatile() {
    if (this.tracedAbility) { this.ability = this.tracedAbility; this.abilityName = abilityName(this.ability); this.tracedAbility = null; }
    Object.assign(this, {
      attractedTo: null, flinchedThisTurn: false, confusionTurns: 0, toxicTurns: 0, statStages: {}, seeded: false,
      nightmareActive: false, ghostCurseActive: false, destinyBondActive: false, meanLookSource: null, lastUsedMoveId: null,
      furyCutterHits: 0, trappedTurns: 0, trapMove: null, trapSource: null, pendingCharge: null, rechargeTurns: 0,
      rampageTurns: 0, rampageMove: null, rolloutTurns: 0, rolloutHits: 0, rolloutMove: null, defenseCurlUsed: false,
      lightScreenTurns: 0, reflectTurns: 0, safeguardTurns: 0, mistTurns: 0, focusEnergyActive: false, futureSight: null,
      protectedThisTurn: false, protectStreak: 0, flashFireActivated: false,
    });
  }
  clearBattleConditions() { this.clearVolatile(); this.status = null; this.statusTurns = 0; }
  healAll() { this.currentHp = this.maxHp; this.restorePp(); this.clearBattleConditions(); }

  /** Ricostruisce un Pokémon da un checkpoint, aggiornando specie, mosse e sprite ai dati attuali. */
  static fromSnapshot(saved) {
    const mon = Object.assign(Object.create(Pokemon.prototype), saved);
    const species = speciesData(saved.id);
    if (!VALID_GENDERS.has(mon.gender)) mon.gender = 'unknown';
    if (typeof mon.isShiny !== 'boolean') mon.isShiny = false;
    if (species) {
      const keep = { ability: mon.ability };
      mon.setSpecies(species);
      if (!mon.abilityOptions.includes(keep.ability) && keep.ability !== 'none') mon.abilityOptions.push(keep.ability);
      mon.ability = keep.ability || mon.abilityOptions[0] || 'none';
      mon.abilityName = abilityName(mon.ability);
      const hpRatio = mon.maxHp ? mon.currentHp / mon.maxHp : 1;
      mon.calcStats();
      mon.treatedFaint = saved.treatedFaint === true && saved.currentHp > 0;
      mon.currentHp = Math.max(saved.currentHp > 0 ? 1 : 0, Math.min(mon.maxHp, Math.round(mon.maxHp * hpRatio)));
    }
    mon.moves = (saved.moves || []).map(restoreMove);
    if (!mon.moves.length) mon.moves = [createMove('tackle')];
    mon.status = saved.status ?? null; mon.statusTurns = saved.statusTurns || 0;
    mon.clearVolatile();
    return mon;
  }
}

/** Danno di una mossa (formula dalla 6ª generazione in poi). */
export function calculateBattleDamage(attacker, defender, move, random = Math.random, context = {}) {
  const effectiveness = typeEffectiveness(move.type, defender.types);
  if (!move.power || effectiveness === 0) return { damage: 0, effectiveness, critical: false };
  const special = move.category === 'special';
  const settings = { weather: context.weather || null, effectiveness, attackingLast: context.attackingLast || false };
  const effects = Abilities.damageModifiers(attacker, defender, move, settings);
  const defenderAbility = Abilities.suppress(attacker) ? 'none' : defender.ability;
  // Probabilità di brutto colpo per grado: 1/24, 1/8, 1/2, sempre.
  const critStage = Math.min(3, (move.critRate || 0) + (attacker.focusEnergyActive ? 2 : 0) + (effects.critStage || 0));
  const critical = !['battle-armor', 'shell-armor'].includes(defenderAbility) && random() < [1 / 24, 1 / 8, 1 / 2, 1][critStage];
  const attackStat = special ? attacker.spAtk : attacker.attack;
  const defenseStat = special ? defender.spDef : defender.defense;
  const attackStage = attacker.statStages?.[special ? 'special-attack' : 'attack'] || 0;
  const defenseStage = defender.statStages?.[special ? 'special-defense' : 'defense'] || 0;
  const attack = attackStat * effects.attack * statMultiplier(settings.ignoreAttackerStages ? 0 : critical ? Math.max(0, attackStage) : attackStage);
  const defense = Math.max(1, defenseStat * effects.defense * statMultiplier(settings.ignoreDefenderStages ? 0 : critical ? Math.min(0, defenseStage) : defenseStage));
  const stab = attacker.types.includes(move.type) ? (attacker.ability === 'adaptability' ? 2 : 1.5) : 1;
  const power = Math.max(1, move.power) * effects.power;
  const burned = attacker.status === 'burn' && !special && attacker.ability !== 'guts' ? .5 : 1;
  const base = (((2 * attacker.level / 5 + 2) * power * attack / defense) / 50 + 2) * burned;
  const screened = !critical && !effects.ignoreScreens && (special ? defender.lightScreenTurns > 0 : defender.reflectTurns > 0);
  const damage = Math.max(1, Math.floor(base * (screened ? .5 : 1) * (critical ? 1.5 * effects.criticalDamage : 1) * stab * effectiveness * (.85 + random() * .15)));
  return { damage, effectiveness, critical };
}
