// Pannelli laterali: squadra, zaino, posizione, portamedaglie e scheda del Pokémon.
import { BADGE_TEAM_SLOTS, ITEMS, KANTO_GYMS, badgeSprite, itemImage } from '../core/constants.js';
import { abilityData, moveData } from '../core/data.js';
import { typeName } from '../core/types.js';
import { POKEMON_NATURES, STAT_LABELS_IT } from '../core/stats.js';

const CITY_NAMES = Object.freeze(['Plumbeopoli', 'Celestopoli', 'Aranciopoli', 'Azzurropoli', 'Fucsiapoli', 'Zafferanopoli', 'Isola Cannella', 'Smeraldopoli']);
const BAG_CATEGORIES = Object.freeze({
  rimedi: ['potion', 'superPotion', 'hyperPotion', 'elixir', 'abilityCapsule', 'waterStone', 'thunderStone', 'fireStone', 'rareCandy', 'goldCandy'],
  pokeball: ['pokeball', 'masterball'],
  chiave: ['fishingRod', 'expShare'],
});
export const genderMark = mon => (mon.gender === 'male' ? ' ♂' : mon.gender === 'female' ? ' ♀' : '') + (mon.isShiny ? ' ✨' : '');
const make = (tag, className, text) => { const el = document.createElement(tag); if (className) el.className = className; if (text != null) el.textContent = text; return el; };

export const sidebarMethods = {
  isBadgeEarned(id) {
    return this.badges.some((badge, index) => typeof badge === 'object' ? Number(badge.id) === id
      : String(badge).toLowerCase() === KANTO_GYMS[id].badge.toLowerCase() || index === id);
  },

  renderBadges() {
    const count = KANTO_GYMS.filter((_, i) => this.isBadgeEarned(i)).length;
    const counter = this.$id('badges-container');
    if (counter) counter.textContent = `${count} / 8 MEDAGLIE`;
    const gallery = this.$id('badge-case-grid');
    if (!gallery) return;
    gallery.replaceChildren(...KANTO_GYMS.map((gym, i) => {
      const earned = this.isBadgeEarned(i);
      const slot = make('div', `badge-case-slot ${earned ? 'earned' : 'locked'}`);
      slot.setAttribute('aria-label', `Medaglia ${gym.badge}: ${earned ? 'ottenuta' : 'da ottenere'}`);
      const image = Object.assign(make('img', 'badge-case-image'), { src: badgeSprite(i), alt: `Medaglia ${gym.badge}`, draggable: false });
      slot.append(image, make('strong', '', gym.badge), make('small', '', earned ? 'OTTENUTA' : 'DA OTTENERE'));
      return slot;
    }));
    const summary = this.$id('badge-case-progress');
    if (summary) summary.textContent = `${count} DI 8 MEDAGLIE CONQUISTATE`;
  },

  openBadgeCase() {
    this.closePartyActions(); this.stopContinuousWalk(); this.renderBadges();
    this.$id('badge-case-overlay')?.classList.remove('hidden');
    this.$id('badge-case-close')?.focus();
  },
  closeBadgeCase() { this.$id('badge-case-overlay')?.classList.add('hidden'); },

  // ---------------------------------------------------------------- Azioni sulla squadra
  closePartyActions() {
    this.partyMenuPokemon = null; this.partyMoveSource = null;
    const drawer = this.$id('party-action-menu');
    drawer?.classList.add('hidden');
    if (drawer?.classList.contains('is-portal')) {
      drawer.classList.remove('is-portal');
      this.$id('rotom-container')?.querySelector('.rotom-wing-left')?.appendChild(drawer);
    }
    this.$id('rotom-container')?.classList.remove('party-drawer-open');
    this.$id('party-move-hint')?.classList.add('hidden');
    this.$id('party-send-action')?.classList.add('hidden');
  },

  openPartyActions(pokemon) {
    if (!pokemon || !this.team.includes(pokemon) || this.pendingItemTarget || this.adventureCompleted ||
      (this.isLocked && !this.isBattleVisible()) || this.battleBusy || this.dialogueResolve) return;
    if (this.partyMoveSource) { this.completePartyReorder(pokemon); return; }
    this.stopContinuousWalk();
    this.partyMenuPokemon = pokemon;
    this.$id('party-action-title').textContent = `${pokemon.name} · Lv.${pokemon.level}`;
    const drawer = this.$id('party-action-menu');
    // Su schermi stretti il menu si apre sopra tutto, fuori dall'ala laterale.
    if (window.matchMedia?.('(max-width: 1020px)').matches) { document.body.appendChild(drawer); drawer.classList.add('is-portal'); }
    else { this.$id('rotom-container')?.querySelector('.rotom-wing-left')?.appendChild(drawer); drawer.classList.remove('is-portal'); }
    drawer.classList.remove('hidden');
    this.$id('rotom-container')?.classList.add('party-drawer-open');
    const battle = this.isBattleVisible();
    this.$id('party-move-action').disabled = battle;
    this.$id('party-move-action').title = battle ? 'Riordina la squadra fuori dalla lotta.' : '';
    this.$id('party-send-action').classList.toggle('hidden', !battle || pokemon === this.activeMon || pokemon.currentHp <= 0);
    this.renderSidebar();
    if (battle) this.focusBattleSelection('#party-action-menu #party-send-action:not(.hidden):not(:disabled),#party-action-menu #party-close-action');
  },

  beginPartyReorder() {
    const selected = this.partyMenuPokemon;
    if (!selected || this.isBattleVisible() || this.isLocked || this.pendingItemTarget) return;
    this.partyMoveSource = selected;
    this.$id('party-move-hint').textContent = 'Scegli il Pokémon con cui scambiare la posizione.';
    this.$id('party-move-hint').classList.remove('hidden');
    this.renderSidebar();
  },

  completePartyReorder(other) {
    const first = this.partyMoveSource;
    if (!first || !other || first === other || !this.team.includes(other) || !this.team.includes(first)) return;
    const a = this.team.indexOf(first), b = this.team.indexOf(other);
    [this.team[a], this.team[b]] = [this.team[b], this.team[a]];
    this.ensureActivePokemon();
    this.closePartyActions();
    this.renderSidebar();
    this.logMsg(`Posizioni scambiate! ${this.activeMon?.name || this.team[0].name} è il Pokémon in testa.`);
  },

  // ---------------------------------------------------------------- Scheda del Pokémon
  selectPokemonInfoTab(tab = 'stats') {
    const selected = tab === 'moves' ? 'moves' : 'stats';
    for (const key of ['stats', 'moves']) {
      const button = this.$id(`pokemon-tab-${key}`);
      button?.classList.toggle('active', key === selected);
      button?.setAttribute('aria-selected', String(key === selected));
      this.$id(`pokemon-panel-${key}`)?.classList.toggle('hidden', key !== selected);
    }
    const container = this.$id('pokemon-info-content');
    if (container) container.scrollTop = 0;
  },

  openPokemonInfo(pokemon) {
    this.setMobileSheet(null);
    if (!pokemon || !this.team.includes(pokemon)) return;
    this.partyInfoPokemon = pokemon;
    this.$id('pokemon-info-name').textContent = pokemon.name + genderMark(pokemon);
    const sprite = this.$id('pokemon-info-sprite');
    sprite.src = pokemon.spriteFront; sprite.alt = `Sprite di ${pokemon.name}`;
    this.$id('pokemon-info-level').textContent = `LIVELLO ${pokemon.level}`;
    this.$id('pokemon-info-types').replaceChildren(...pokemon.types.map(type => make('span', `pokemon-type-chip type-${type}`, typeName(type))));
    const nature = pokemon.nature || POKEMON_NATURES[0];
    const neutral = nature[1] === nature[2];
    this.$id('pokemon-info-nature').textContent = `NATURA: ${nature[0]} (${neutral ? 'neutra' : `+${STAT_LABELS_IT[nature[1]]} / −${STAT_LABELS_IT[nature[2]]}`})`;
    this.$id('pokemon-info-ability').textContent = `ABILITÀ: ${pokemon.abilityName || '—'}`;
    this.$id('pokemon-info-ability-description').textContent = abilityData(pokemon.ability)?.desc || 'Descrizione non disponibile.';
    this.$id('pokemon-info-hero').className = `pokemon-info-hero type-${pokemon.type}`;
    const values = pokemon.getStatsSummary();
    // Le barre sono in scala con la statistica più alta del Pokémon.
    const scale = Math.max(30, ...Object.values(values).map(Number));
    this.$id('pokemon-info-stats').replaceChildren(...Object.entries(values).map(([key, value]) => {
      const tile = make('div', 'pokemon-info-stat');
      const number = make('em', neutral ? '' : nature[1] === key ? 'raised' : nature[2] === key ? 'lowered' : '', key === 'hp' ? `${pokemon.currentHp}/${value}` : value);
      const meter = make('div', 'pokemon-stat-meter');
      meter.setAttribute('role', 'progressbar'); meter.setAttribute('aria-label', STAT_LABELS_IT[key]);
      meter.setAttribute('aria-valuemin', '0'); meter.setAttribute('aria-valuemax', String(scale)); meter.setAttribute('aria-valuenow', String(value));
      const fill = make('span', 'pokemon-stat-meter-fill');
      fill.style.width = `${Math.min(100, Math.max(3, value / scale * 100))}%`;
      meter.appendChild(fill);
      tile.append(make('span', '', STAT_LABELS_IT[key]), number, meter);
      return tile;
    }));
    this.$id('pokemon-info-moves').replaceChildren(...pokemon.moves.map(move => {
      const tile = make('div', `pokemon-move-tile type-${move.type || 'normal'}`);
      const details = make('details', 'pokemon-move-details');
      details.append(make('summary', '', 'Descrizione'), make('small', 'move-description', moveData(move.id)?.desc || 'Descrizione non disponibile.'));
      tile.append(make('span', 'pokemon-move-name', move.name),
        make('small', '', `${typeName(move.type)} · POT ${move.power || '—'} · PREC ${move.alwaysHits || move.accuracy == null ? '—' : move.accuracy + '%'} · PP ${move.currentPp}/${move.maxPp}`),
        details);
      return tile;
    }));
    this.selectPokemonInfoTab('stats');
    this.$id('pokemon-info-overlay').classList.remove('hidden');
    this.$id('pokemon-info-close')?.focus({ preventScroll: true });
  },

  closePokemonInfo() { this.pokemonInfoRequest++; this.partyInfoPokemon = null; this.$id('pokemon-info-overlay')?.classList.add('hidden'); },

  // ---------------------------------------------------------------- Pannelli laterali
  locationLabel() {
    if (this.isCelestialCave) return 'Luogo: Grotta Celeste';
    if (this.floor % 10 === 0) return `Città: ${CITY_NAMES[this.floor / 10 - 1]} · Piano ${this.floor}`;
    if (this.floor % 5 === 0) return `Villaggio · Piano ${this.floor}`;
    return `Percorso · Piano ${this.floor}`;
  },

  renderSidebar() {
    const location = this.$id('route-location-label');
    if (location) location.textContent = this.team.length ? this.locationLabel() : '—';
    this.$id('player-money').textContent = `$${this.money}`;
    const radarCount = this.$id('radar-charge-count');
    if (radarCount) radarCount.textContent = `SCANSIONI: ${this.radarCharges === Infinity ? '∞' : this.radarCharges}`;
    const radar = this.$id('btn-scan-radar');
    if (radar) {
      radar.classList.toggle('radar-empty', this.radarCharges === 0);
      radar.classList.toggle('radar-infinite', this.radarCharges === Infinity);
      radar.disabled = !this.gridMap.length;
    }
    this.renderBag();
    this.renderTeam();
  },

  renderBag() {
    const bag = this.$id('bag-list');
    if (!bag) return;
    document.querySelectorAll('[data-bag-tab]').forEach(tab => {
      const active = tab.dataset.bagTab === this.bagCategory;
      tab.classList.toggle('active', active); tab.setAttribute('aria-selected', String(active));
    });
    const inBattle = this.isBattleVisible();
    const buttons = [];
    for (const id of BAG_CATEGORIES[this.bagCategory]) {
      const item = ITEMS[id];
      if (this.bagCategory === 'chiave') {
        const owned = id === 'expShare' ? this.hasExpShare() : Boolean(this.items[id]);
        const button = make('button', `bag-item bag-key-item${owned ? ' owned' : ''}${id === 'expShare' && owned && this.expShareEnabled ? ' enabled' : ''}`);
        button.type = 'button';
        button.dataset.keyItem = id;
        button.append(Object.assign(make('img'), { src: itemImage(id), alt: '', width: 26, height: 26 }), make('span', '', item.label));
        if (id === 'expShare' && owned) button.append(Object.assign(make('span', 'key-item-indicator', this.expShareEnabled ? '●' : '○'), { ariaHidden: 'true' }));
        button.disabled = !owned || id !== 'expShare' || this.battleBusy || this.adventureCompleted;
        const hint = !owned ? ' (non ottenuto)' : id === 'fishingRod' ? ' (usala vicino all’acqua)'
          : this.expShareEnabled ? ' (attivo)' : ' (disattivo)';
        button.setAttribute('aria-label', item.label + hint);
        button.title = item.label + hint;
        if (id === 'expShare') button.onclick = () => this.toggleExpShare();
        buttons.push(button);
        continue;
      }
      // Gli oggetti consumabili compaiono solo quando se ne possiede almeno uno.
      if ((Number(this.items[id]) || 0) <= 0 || (item.dev && !this.devMode)) continue;
      const button = make('button', 'bag-item');
      button.type = 'button';
      button.append(Object.assign(make('img'), { src: itemImage(id), alt: '' }), make('span', '', item.label), make('strong', '', `×${this.items[id]}`));
      button.disabled = !(this.team.length && !this.pendingItemTarget && !this.battleBusy && !this.adventureCompleted && (!this.isLocked || inBattle)) ||
        ((item.evolves && inBattle) || (!['pokeball','masterball'].includes(id) && !this.team.some(mon => this.canUseItemOnMon(id, mon)))) ||
        (item.dev && (inBattle || this.devUpgradeInProgress || !this.team.some(mon => mon.level < 100)));
      if (button.disabled) button.title = 'Nessun Pokémon può usare ora questo strumento, oppure non è disponibile in questo momento.';
      button.onclick = () => this.chooseBattleItem(id);
      buttons.push(button);
    }
    if (!buttons.length) buttons.push(make('p', 'bag-empty', this.team.length ? 'Nessuno strumento.' : 'Lo zaino si riempie durante l’avventura.'));
    bag.replaceChildren(...buttons);
  },

  renderTeam() {
    const team = this.$id('team-grid');
    if (!team) return;
    const mode = this.$id('current-run-mode');
    if (mode) mode.textContent = this.runMode === 'normal' ? 'MODALITÀ NORMALE' : 'MODALITÀ NUZLOCKE';
    const progress = this.$id('party-progression-status');
    if (progress) progress.textContent = this.team.length ? `SQUADRA ${this.team.length}/${this.getTeamSlotLimit()} · CAP LV.${this.getLevelCap()}` : '';
    const inBattle = this.isBattleVisible();
    const slots = [];
    for (let i = 0; i < 6; i++) {
      const p = this.team[i];
      const slot = make('button', 'team-slot');
      slot.type = 'button';
      if (!p) {
        const locked = i >= this.getTeamSlotLimit();
        slot.classList.add('empty');
        slot.classList.toggle('locked', locked);
        if (locked) {
          // Il posto si sblocca con la medaglia che porta i posti disponibili oltre questo indice.
          const needed = BADGE_TEAM_SLOTS.findIndex(count => count > i);
          const badge = KANTO_GYMS[needed - 1]?.badge;
          slot.classList.add('badge-locked-placeholder');
          slot.setAttribute('aria-label', `Posto ${i + 1} bloccato: si sblocca con la Medaglia ${badge || ''}`.trim());
        } else slot.setAttribute('aria-label', `Posto ${i + 1} libero`);
        slot.disabled = true;
        slots.push(slot);
        continue;
      }
      const target = this.pendingItemTarget ? (this.canUseItemOnMon(this.pendingItemTarget, p) ? 'item-target-valid' : 'item-target-invalid') : '';
      slot.className = ['team-slot', `type-${p.type}`, p === this.activeMon && 'active', p.currentHp <= 0 && 'fainted', target,
        this.partyMoveSource === p && 'swap-choice', this.partyMoveSource && p !== this.partyMoveSource && 'move-destination'].filter(Boolean).join(' ');
      const state = p.currentHp <= 0 ? ' · esausto' : p === this.activeMon ? ' · Pokémon in testa' : '';
      slot.setAttribute('aria-label', `${p.name} · livello ${p.level} · ${p.currentHp}/${p.maxHp} PS${state}`);
      const top = make('div', 'slot-top');
      top.append(make('span', 'slot-name', p.name + genderMark(p)), make('span', 'slot-level', `Lv.${p.level}`));
      const hpBack = make('div', 'team-hp-bg');
      const hpFill = make('div', `team-hp-fill hp-${this.hpColorState(p)}`);
      hpFill.style.width = `${Math.max(0, Math.floor(100 * p.currentHp / p.maxHp))}%`;
      hpBack.append(hpFill);
      slot.append(top, Object.assign(make('img', 'team-slot-img'), { src: p.spriteFront, alt: '' }), hpBack, make('div', 'team-hp-text', `${p.currentHp}/${p.maxHp} PS`));
      slot.disabled = (inBattle && this.battleBusy) || (this.pendingItemTarget && !this.canUseItemOnMon(this.pendingItemTarget, p)) || (p.currentHp <= 0 && !this.pendingItemTarget && !this.abilityCapsuleOpen);
      slot.onclick = () => { if (this.pendingItemTarget) this.giveItemToPokemon(p); else this.openPartyActions(p); };
      slots.push(slot);
    }
    team.replaceChildren(...slots);
  },
};
