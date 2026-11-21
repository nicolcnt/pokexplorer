// DEV MODE: strumenti di prova per lo sviluppatore.
// - Il pulsante compare solo in locale (localhost) o aprendo il sito con #dev nell'indirizzo.
// - Il codice non è scritto in chiaro: si confronta la sua impronta SHA-256.
// - Una run in cui la DEV MODE è stata attivata è "di prova" (devRun): non registra
//   Pokédex, obiettivi né lo sblocco del Campione. Un controllo nel browser non è
//   una protezione assoluta, ma così barare non porta alcun vantaggio.
import * as Dex from './pokedex.js';
import { experienceForNextLevel } from '../core/stats.js';
import { FINAL_FLOOR } from '../core/constants.js';

// SHA-256 di "pokexplorer-dev:" + codice. Per cambiarlo vedi docs/SVILUPPO.md.
const DEV_CODE_HASH = '52e89b543e40ef6630daee0fb095d7a4343db962a80a8e9ead2f52247cd92f74';

export function devAccessAvailable(loc = globalThis.location) {
  if (!loc) return false;
  return /^(localhost|127\.0\.0\.1|\[::1\])$/.test(loc.hostname) || loc.protocol === 'file:' || (loc.protocol === 'about:' && /(^|[#&?])dev\b/.test(`${loc.hash}${loc.search}`));
}
export async function hashDevCode(code) {
  const bytes = new TextEncoder().encode(`pokexplorer-dev:${String(code).trim()}`);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
}

export const devMethods = {
  bindDevControls(click) {
    click('dev-mode-trigger', () => { this.closeQuickSettings(); this.openDevCode(); });
    click('dev-code-cancel', () => this.closeDevCode());
    this.$id('dev-code-form')?.addEventListener('submit', event => { event.preventDefault(); this.activateDevMode(this.$id('dev-access-code').value); });
    click('floor-jump-trigger', () => this.openFloorJumpCode());
    click('floor-jump-cancel', () => this.closeFloorJumpCode());
    this.$id('floor-jump-form')?.addEventListener('submit', event => { event.preventDefault(); this.teleportToFloor(this.$id('floor-jump-level').value); });
    click('dev-skip-battle', () => this.requestDevSkip());
    click('dev-radar', () => this.devUnlimitedRadar());
  },

  syncDevControls() {
    this.$id('dev-mode-trigger')?.classList.toggle('hidden', !devAccessAvailable());
    this.$id('developer-panel')?.classList.toggle('hidden', !this.devMode);
    this.$id('dev-footer-tools')?.classList.toggle('hidden', !this.devMode);
    const skip = this.$id('dev-skip-battle');
    if (skip) skip.disabled = !this.devMode;
  },

  // ---------------------------------------------------------------- Accesso
  openDevCode() {
    this.stopContinuousWalk();
    const overlay = this.$id('dev-code-overlay');
    if (!overlay) return false;
    this.$id('dev-access-code').value = '';
    this.$id('dev-code-error').textContent = '';
    this.$id('dev-code-description').textContent = this.devMode ? 'Modalità sviluppatore già attiva.' : 'Inserisci il codice di accesso.';
    for (const id of ['dev-access-code', 'dev-code-confirm']) this.$id(id).classList.toggle('hidden', this.devMode);
    this.$id('dev-code-form').querySelector('label').classList.toggle('hidden', this.devMode);
    overlay.classList.remove('hidden');
    (this.devMode ? this.$id('dev-code-cancel') : this.$id('dev-access-code')).focus();
    return true;
  },

  closeDevCode() {
    this.$id('dev-code-overlay')?.classList.add('hidden');
    this.$id('dev-access-code').value = '';
    this.$id('dev-mode-trigger')?.focus();
  },

  async activateDevMode(code) {
    if (this.devMode) return true;
    let valid = false;
    try { valid = devAccessAvailable() && await hashDevCode(code) === DEV_CODE_HASH; } catch { valid = false; }
    if (!valid) {
      this.$id('dev-code-error').textContent = 'Codice errato.';
      this.$id('dev-access-code').value = '';
      this.$id('dev-access-code').focus();
      return false;
    }
    this.devMode = true;
    Dex.setPreview(true);
    // La run in corso diventa una run di prova.
    if (this.team.length) { this.devRun = true; this.saveCheckpoint(); }
    Object.assign(this.items, { rareCandy: 999, goldCandy: 999 });
    if (this.gridMap.length) { for (const row of this.gridMap) for (const cell of row) cell.revealed = true; this.renderDungeon(); }
    const trigger = this.$id('dev-mode-trigger');
    if (trigger) { trigger.setAttribute('aria-pressed', 'true'); trigger.textContent = 'DEV MODE ✓'; }
    this.bagCategory = 'rimedi';
    this.syncDevControls();
    this.closeDevCode();
    this.renderSidebar();
    this.logMsg('DEV MODE: Pokédex completo con varianti e shiny solo in anteprima, senza scritture sul cloud o nel profilo.');
    return true;
  },

  // ---------------------------------------------------------------- Teletrasporto
  openFloorJumpCode() {
    if (!this.devMode) return false;
    this.stopContinuousWalk();
    const overlay = this.$id('floor-jump-overlay');
    if (!overlay) return false;
    this.$id('floor-jump-level').value = String(Math.max(1, Math.min(FINAL_FLOOR, Number(this.floor) || 1)));
    this.$id('floor-jump-error').textContent = '';
    overlay.classList.remove('hidden');
    this.$id('floor-jump-level').focus();
    return true;
  },

  closeFloorJumpCode() {
    this.$id('floor-jump-overlay')?.classList.add('hidden');
    const error = this.$id('floor-jump-error');
    if (error) error.textContent = '';
  },

  teleportToFloor(targetFloor) {
    const error = this.$id('floor-jump-error');
    if (!this.devMode) return false;
    if (!this.team.length || !this.gridMap.length) { error.textContent = 'Prima avvia una run e scegli il tuo Pokémon iniziale.'; return false; }
    const floor = Number(targetFloor);
    if (!Number.isInteger(floor) || floor < 1 || floor > FINAL_FLOOR || String(targetFloor).trim() === '') {
      error.textContent = `Scegli un piano intero da 1 a ${FINAL_FLOOR}.`;
      this.$id('floor-jump-level').focus();
      return false;
    }
    if (this.isLocked || this.isBattleVisible() || this.battleBusy || this.isCelestialCave || this.adventureCompleted ||
      this.pendingItemTarget || this.dialogueResolve || this.pendingForcedSwitch || this.gymQueue.length) {
      error.textContent = 'Completa prima la lotta o l’evento in corso.';
      return false;
    }
    this.stopContinuousWalk();
    this.closeFloorJumpCode();
    this.closePartyActions();
    this.closePokemonInfo();
    this.floor = floor;
    this.floorKind = null;
    if (floor === 75) { this.oakEventDismissed = false; this.celestialPhase = 'unvisited'; }
    this.celestialReturnState = null;
    this.celestialCutsceneActive = false;
    this.generateFloorDungeon();
    this.saveCheckpoint();
    this.logMsg(`TELETRASPORTO DEV: piano ${floor}.${floor === 75 ? ' Parla con il Professor Oak per entrare nella Grotta Celeste.' : ''}`);
    return true;
  },

  // ---------------------------------------------------------------- SKIP
  /** Vince subito la lotta in corso (selvatici, allenatori, palestre, raid, leggendari, Mewtwo). */
  requestDevSkip() {
    if (!this.devMode) return false;
    if (!this.isBattleVisible()) {
      // Dalla schermata "LOTTA!" la lotta parte e viene saltata appena possibile.
      const trainer = !this.$id('trainer-encounter-overlay')?.classList.contains('hidden');
      const wild = !this.$id('wild-encounter-overlay')?.classList.contains('hidden');
      if (!trainer && !wild) { this.logMsg('SKIP: nessuna lotta in corso.'); return false; }
      this.devSkipPending = true; this.fastBattleText = true;
      this.$id(trainer ? 'btn-start-trainer-battle' : 'btn-start-wild-battle')?.click();
      return true;
    }
    this.devSkipPending = true;
    this.fastBattleText = true;
    if (this.pendingForcedSwitch) { this.pendingForcedSwitch = false; this.ensureActivePokemon(); this.performDevSkip(); return true; }
    if (this.dialogueResolve) this.acknowledgeDialogue();
    else if (!this.battleBusy) this.performDevSkip();
    return true;
  },

  async performDevSkip() {
    if (!this.devMode || !this.isBattleVisible() || !this.enemyMon || this.enemyMon.currentHp <= 0) { this.devSkipPending = false; return; }
    this.devSkipPending = false;
    this.devSkipChain = true;
    this.fastBattleText = true;
    this.battleBusy = true;
    this.hideAllActions();
    this.$id('battle-confirm')?.classList.add('hidden');
    this.battleConfirmAction = null;
    this.enemyMon.currentHp = 0;
    this.updateBattleHUD();
    await this.battleText('DEV · Lotta saltata.');
    await this.handleBattleVictory();
  },

  devUnlimitedRadar() {
    if (!this.devMode) return false;
    this.radarCharges = Infinity; this.renderSidebar(); this.logMsg('Radar illimitato (DEV).');
    return true;
  },

  async useDevCandy(pokemon, id) {
    if (!this.devMode || !['rareCandy', 'goldCandy'].includes(id) || this.devUpgradeInProgress || this.isBattleVisible() || this.isLocked ||
      this.battleBusy || this.dialogueResolve || !this.team.includes(pokemon) || !this.items[id]) return false;
    if (pokemon.level >= 100) { this.showItemFeedback(`${pokemon.name} è già al livello 100!`); return false; }
    const previous = pokemon.level;
    const target = Math.min(100, previous + (id === 'goldCandy' ? 20 : 1));
    let needed = -Math.max(0, pokemon.exp);
    for (let level = previous; level < target; level++) needed += experienceForNextLevel(pokemon.growthRate, level);
    this.devUpgradeInProgress = true; this.isLocked = true;
    try {
      const events = await pokemon.gainExperience(Math.max(0, needed), 100, options => this.chooseEvolution(pokemon, options));
      this.items[id]--;
      this.renderSidebar();
      this.logMsg(`${id === 'goldCandy' ? 'Caramella d’Oro' : 'Caramella Rara'}: ${pokemon.name} passa dal Lv.${previous} al Lv.${pokemon.level}!`);
      for (const event of events) {
        if (event.evolution) { Dex.record(pokemon, 'caught', `Evoluzione · Piano ${this.floor}`); await this.showEvolution(pokemon, event.evolution); }
        for (const move of event.moves) await this.learnMove(move, pokemon);
      }
      return true;
    } finally {
      this.devUpgradeInProgress = false; this.isLocked = false;
      this.renderSidebar();
    }
  },
};
