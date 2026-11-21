// GameEngine: coordina la partita. Le funzionalità vivono in moduli tematici
// (battle/, world/, ui/, systems/) installati sul prototipo come "mixin":
// ogni modulo esporta un oggetto di metodi che condividono lo stesso stato (this).
import { createRunState } from './systems/run-state.js';
import { BADGE_LEVEL_CAPS, BADGE_TEAM_SLOTS, OVERWORLD_NPCS, overworldPortraitUrl, overworldSpriteUrl, isTownFloor } from './core/constants.js';
import { menusMethods } from './ui/menus.js';
import { controlsMethods } from './ui/controls.js';
import { sidebarMethods } from './ui/sidebar.js';
import { movementMethods } from './world/movement.js';
import { dungeonMethods } from './world/dungeon.js';
import { mapRenderMethods } from './world/map-render.js';
import { townMethods } from './world/town.js';
import { gymMethods } from './world/gym.js';
import { celestialMethods } from './world/celestial.js';
import { devMethods } from './systems/dev.js';
import { flowMethods } from './battle/flow.js';
import { movesMethods } from './battle/moves.js';
import { uiMethods } from './battle/ui.js';
import { itemsMethods } from './battle/items.js';
import { battleInputMethods } from './battle/input.js';
import { keyRouter } from './ui/input.js';

const NPC_DIALOGUES = Object.freeze([
  'Hai visto i fiori nuovi vicino alla fontana?',
  'Il Capopalestra non si fa certo battere facilmente.',
  'In questa città i sentieri sono collegati: esplora con calma.',
  'In Nuzlocke il KO è definitivo; in Normale Joy può curare i Pokémon esausti.',
  'Qualche volta la Poké Ball nell’erba nasconde una sorpresa.',
  'Ho sentito che un raro Pokémon abita sulla costa.',
  'Al Centro Pokémon puoi ripristinare PS e PP.',
  'Prima di lasciare la città passa dal Pokémarket.',
  'La Medaglia ti permetterà di superare il prossimo passaggio.',
  'La mia passeggiata preferita è lungo il viale alberato.',
  'Una mossa superefficace può cambiare l’esito di una lotta.',
  'Con la canna da pesca potresti incontrare Pokémon d’acqua.',
]);

const AUTO_DIALOGUE_KEY = 'pokexplorer:auto-dialogue';
function readAutoDialoguePreference() {
  try { return localStorage.getItem(AUTO_DIALOGUE_KEY) === '1'; } catch { return false; }
}

export class GameEngine {
  constructor({ music = null } = {}) {
    this.music = music;
    this.gridSize = 10;
    // Stato non legato alla singola run.
    this.devMode = false;
    this.speedMultiplier = 1;
    this.autoDialogue = readAutoDialoguePreference();
    this.autoAdvance = null; // { timer, run }: dialogo in attesa di avanzare da solo
    // Tempo di gioco della run: conta solo con la partita aperta e la scheda visibile.
    this.playClock = setInterval(() => {
      if (this.runStats && this.team?.length && !this.adventureCompleted && document.body.classList.contains('in-run') && !document.hidden)
        this.runStats.playMs = (this.runStats.playMs || 0) + 1000;
    }, 1000);
    this.bagCategory = 'rimedi';
    this.battleToken = 0;
    this.dialogueResolve = null;
    this.evolutionResolve = null;
    this.raidLaunchNonce = 0;
    this.raidVictoryResolutionToken = -1;
    this.pokemonInfoRequest = 0;
    this.abilityCapsuleCandidate = null; this.abilityCapsuleOpen = false; this.abilityCapsuleSerial = 0;
    this.pokemonCenterHealTimer = null; this.pokemonCenterHealSequence = 0; this.pokemonCenterHealAudio = null;
    // Movimento continuo: un solo ripetitore condiviso da tastiera, D-pad e touch.
    this.walkInputs = new Map(); this.walkHoldTimer = null; this.walkReadyAt = 0; this.walkDurationMs = 210; this.walkSequence = 0;
    this.npcSprites = OVERWORLD_NPCS.map(overworldSpriteUrl);
    this.npcDialogues = NPC_DIALOGUES;
    this.trainerSprites = ['bug_catcher', 'youngster', 'lass'].map(overworldPortraitUrl);
    this.currentTrainerSprite = this.trainerSprites[0];
    this.keys = keyRouter;
    this.resetRunState();
    this.preloadImages();
    this.installPokemonSpriteFallbacks();
    this.bindEvents();
    this.updateContinueButton();
    this.scheduleRotomExpression();
  }

  /** Riporta la run ai valori iniziali (nuova partita, ritorno al menu, caricamento). */
  resetRunState() {
    Object.assign(this, createRunState());
  }

  preloadImages() {
    // Tiene vivi i riferimenti finché il browser non ha scaricato i fotogrammi.
    this.preloadedImages = [];
    if (typeof Image === 'undefined') return;
    for (const folder of ['red', 'girl', 'champion'])
      for (const direction of ['up', 'down', 'left', 'right'])
        for (let frame = 0; frame < 3; frame++) {
          const image = new Image();
          image.src = `assets/sprites/player/${folder}/walk/${direction}-${frame}.png`;
          this.preloadedImages.push(image);
        }
  }

  installPokemonSpriteFallbacks() {
    const fallback = 'assets/sprites/ui/pokemon-placeholder.svg';
    for (const id of ['starter-showcase-img', 'pokemon-info-sprite', 'enemy-sprite', 'player-sprite']) {
      const element = this.$id(id);
      element?.addEventListener('error', () => { if (!element.src.endsWith('/pokemon-placeholder.svg')) element.src = fallback; });
    }
  }

  scheduleRotomExpression() {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const eyes = [...document.querySelectorAll('.rotom-face .rotom-eye-ball')];
    if (eyes.length !== 2) return;
    // Un battito, uno sguardo o un occhiolino alla volta, a ritmo casuale.
    eyes.forEach(eye => eye.classList.add('rotom-expression'));
    const next = () => {
      const roll = Math.random();
      const klass = roll < .63 ? 'rotom-closed' : roll < .84 ? 'rotom-looking-left' : roll < .95 ? 'rotom-looking-right' : 'rotom-closed';
      const chosen = roll >= .95 ? [eyes[1]] : eyes;
      chosen.forEach(eye => eye.classList.add(klass));
      setTimeout(() => {
        chosen.forEach(eye => eye.classList.remove(klass));
        this.rotomExpressionTimer = setTimeout(next, 4800 + Math.floor(Math.random() * 7200));
      }, klass === 'rotom-closed' ? 125 : 1100);
    };
    this.rotomExpressionTimer = setTimeout(next, 3000 + Math.floor(Math.random() * 4500));
  }

  badgeCount() { return Math.min(8, new Set((this.badges || []).map((badge, i) => typeof badge === 'object' ? badge.id : i)).size); }
  getLevelCap() { return this.devMode ? 100 : BADGE_LEVEL_CAPS[this.badgeCount()]; }
  getTeamSlotLimit() { return BADGE_TEAM_SLOTS[this.badgeCount()]; }
  hasExpShare() { return Boolean(this.expShareClaimed); }
  isTownFloor() { return isTownFloor(this.floor); }

  // Il primo Pokémon in grado di lottare, nell'ordine della squadra, è quello in campo.
  ensureActivePokemon() {
    this.activeMon = this.team.find(mon => mon.currentHp > 0) || null;
    return this.activeMon;
  }

  toggleExpShare() {
    if (!this.hasExpShare()) return false;
    this.expShareEnabled = !this.expShareEnabled;
    this.logMsg(`Condividi Esperienza ${this.expShareEnabled ? 'attivato' : 'disattivato'}.`);
    this.renderSidebar();
    return true;
  }

  // Un'unica animazione gestita dal compositore, senza aggiornamenti per fotogramma.
  async playMotion(element, frames, duration, easing = 'ease-in-out') {
    if (!element) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      const last = frames[frames.length - 1];
      if (last.opacity !== undefined) element.style.opacity = last.opacity;
      await this.wait(16); return;
    }
    if (!element.animate) { await this.wait(duration); return; }
    try { await element.animate(frames, { duration, easing, fill: 'none' }).finished; } catch { /* animazione annullata */ }
  }

  gameDelay(ms) { return Math.max(0, Math.round(ms / (this.speedMultiplier === 2 ? 2 : 1))); }
  wait(ms) { return new Promise(resolve => setTimeout(resolve, this.gameDelay(ms))); }

  syncAnimationSpeed() {
    for (const animation of document.getAnimations?.() || []) {
      const target = animation.effect?.target;
      if (animation.playState === 'running' && !target?.closest?.('#game-quick-settings') && !target?.classList?.contains?.('walk-arrival'))
        animation.playbackRate = this.speedMultiplier;
    }
  }

  setGameSpeed(value) {
    this.speedMultiplier = value === 2 ? 2 : 1;
    document.documentElement.dataset.gameSpeed = String(this.speedMultiplier);
    const button = this.$id('speed-toggle');
    if (button) { button.textContent = `VELOCITÀ ×${this.speedMultiplier}`; button.setAttribute('aria-pressed', String(this.speedMultiplier === 2)); }
    if (this.walkInputs.size) this.queueContinuousWalk();
    clearInterval(this.speedAnimationTimer);
    this.syncAnimationSpeed();
    if (this.speedMultiplier === 2) this.speedAnimationTimer = setInterval(() => this.syncAnimationSpeed(), 250);
    return this.speedMultiplier;
  }

  /** AUTO DIALOGHI: i dialoghi fuori dalle lotte avanzano da soli dopo il tempo di lettura. */
  setAutoDialogue(on) {
    this.autoDialogue = Boolean(on);
    try { localStorage.setItem(AUTO_DIALOGUE_KEY, this.autoDialogue ? '1' : '0'); } catch { /* memoria non disponibile */ }
    const button = this.$id('auto-dialogue-toggle');
    if (button) { button.textContent = `AUTO DIALOGHI: ${this.autoDialogue ? 'SÌ' : 'NO'}`; button.setAttribute('aria-pressed', String(this.autoDialogue)); }
    // Se un dialogo sta già aspettando, riparte (o si ferma) subito.
    if (this.autoAdvance) this.scheduleAutoAdvance(this.autoAdvance.text, this.autoAdvance.run);
    return this.autoDialogue;
  }

  /** Programma l'avanzamento automatico di un dialogo; run() deve controllare che sia ancora lo stesso. */
  scheduleAutoAdvance(text, run) {
    this.cancelAutoAdvance();
    this.autoAdvance = { text, run, timer: null };
    if (!this.autoDialogue) return;
    const length = String(text || '').length;
    const delay = Math.min(4500, Math.max(1300, 900 + length * 32)) / (this.speedMultiplier === 2 ? 1.6 : 1);
    const pending = this.autoAdvance;
    pending.timer = setTimeout(() => {
      if (this.autoAdvance !== pending) return;
      this.autoAdvance = null;
      if (this.isBattleVisible()) return; // mai dentro le lotte
      run();
    }, delay);
  }

  cancelAutoAdvance() {
    if (this.autoAdvance) clearTimeout(this.autoAdvance.timer);
    this.autoAdvance = null;
  }

  $id(id) { return document.getElementById(id); }
  openWings() { this.$id('rotom-container')?.classList.add('wings-open'); }
  logMsg(text) { const log = this.$id('log-status-text'); if (log) log.textContent = text; }

  /**
   * Telefono: squadra e zaino si aprono come pannelli dal basso (name: 'team', 'bag' o null).
   * Su schermi larghi le ali restano sempre visibili e la funzione non fa nulla.
   */
  setMobileSheet(name) {
    const narrow = globalThis.matchMedia?.('(max-width: 760px)').matches;
    const sheet = narrow && ['team', 'bag'].includes(name) ? name : null;
    if (!sheet && document.body.classList.contains('sheet-team') && !this.isBattleVisible()) this.closePartyActions?.();
    document.body.classList.toggle('sheet-team', sheet === 'team');
    document.body.classList.toggle('sheet-bag', sheet === 'bag');
    document.querySelectorAll('#mobile-sheet-tabs [data-sheet]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.sheet === sheet)));
    return sheet;
  }

  /** Breve dissolvenza con il nome del piano a ogni cambio di piano. */
  showFloorTransition() {
    const box = this.$id('floor-transition');
    if (!box) return;
    const place = this.locationLabel().split(' · ')[0].replace('Città: ', 'Città di ').replace('Luogo: ', '');
    const kind = this.floorKind === 'trainers' ? ' · ZONA ALLENATORI' : this.floorKind === 'calm' ? ' · PERCORSO TRANQUILLO' : '';
    box.querySelector('strong').textContent = `PIANO ${this.floor}`;
    box.querySelector('span').textContent = (place + kind).toUpperCase();
    box.classList.remove('playing');
    void box.offsetWidth; // riavvia l'animazione
    box.classList.add('playing');
    clearTimeout(this.floorTransitionTimer);
    this.floorTransitionTimer = setTimeout(() => box.classList.remove('playing'), this.gameDelay(1700));
  }

  showDiscoveryNotice(message, duration = 2800) {
    let notice = this.$id('discovery-notice');
    if (!notice) {
      notice = document.createElement('div');
      notice.id = 'discovery-notice';
      notice.setAttribute('role', 'status');
      notice.setAttribute('aria-live', 'polite');
      (this.$id('pokenav-screen-root') || document.body).appendChild(notice);
    }
    clearTimeout(this.discoveryNoticeTimer);
    notice.textContent = String(message ?? '');
    notice.classList.toggle('raid-notice', String(message).includes('RAID'));
    notice.classList.add('visible');
    if (duration > 0) this.discoveryNoticeTimer = setTimeout(() => notice.classList.remove('visible'), duration);
  }

  /** Attende un tocco o Invio/Spazio/Esc sull'avviso; annullabile con cancelRaidNotice(). */
  waitForNotice() {
    return new Promise(resolve => {
      let closed = false, removeKey = null, activation;
      const cleanup = () => {
        if (closed) return;
        closed = true;
        if (this.autoAdvance?.run === cleanup) this.cancelAutoAdvance();
        clearTimeout(activation);
        document.removeEventListener('pointerdown', onPointer, true);
        removeKey?.();
        this.$id('discovery-notice')?.classList.remove('visible');
        this.cancelRaidNotice = null;
        resolve();
      };
      const onPointer = event => { event.preventDefault(); event.stopImmediatePropagation(); cleanup(); };
      this.cancelRaidNotice = cleanup;
      this.scheduleAutoAdvance(this.$id('discovery-notice')?.textContent, cleanup);
      activation = setTimeout(() => {
        if (closed) return;
        document.addEventListener('pointerdown', onPointer, true);
        removeKey = this.keys.push('notice', event => {
          if (['Enter', ' ', 'Escape'].includes(event.key)) { event.preventDefault(); cleanup(); }
          return true;
        });
      }, 60);
    });
  }
}

Object.assign(GameEngine.prototype,
  menusMethods, controlsMethods, sidebarMethods, movementMethods, dungeonMethods, mapRenderMethods, townMethods,
  gymMethods, celestialMethods, devMethods, flowMethods, movesMethods, uiMethods, itemsMethods, battleInputMethods);
