// Menu principale, scelta iniziale, salvataggi, finale e foto ricordo.
import * as Checkpoints from '../systems/checkpoints.js';
import * as Dex from '../systems/pokedex.js';
import * as Objectives from '../systems/objectives.js';
import * as Dialogs from './dialogs.js';
import { normalizeRunMode } from '../systems/run-state.js';
import { Pokemon } from '../core/pokemon.js';
import { speciesData, pokemonSprite } from '../core/data.js';
import { KANTO_GYMS, FINAL_FLOOR, badgeSprite } from '../core/constants.js';

const STARTERS = Object.freeze([{ id: 1, type: 'grass', label: 'ERBA' }, { id: 4, type: 'fire', label: 'FUOCO' }, { id: 7, type: 'water', label: 'ACQUA' }]);
const RUN_OVERLAYS = ['gameover-overlay', 'starter-scene-overlay', 'overlay-battle', 'battle-controls', 'gym-leader-intro', 'trainer-encounter-overlay',
  'wild-encounter-overlay', 'pokemart-overlay', 'gym-entry-confirm', 'npc-dialog-overlay', 'celestial-dialog', 'celestial-expedition',
  'oak-laboratory', 'celestial-cinematic', 'badge-case-overlay', 'pokedex-overlay', 'learn-move-overlay', 'evolution-overlay',
  'evolution-choice-overlay', 'continue-recap-overlay', 'menu-message', 'eevee-stone-gift', 'eevee-stone-evolution', 'battle-confirm', 'ability-capsule-overlay', 'item-target-prompt', 'team-full-overlay'];

export const menusMethods = {
  // ---------------------------------------------------------------- Fine della run
  // Il finale si sblocca all'uscita del piano 80 con tutte le otto medaglie.
  hasCompletedKantoChallenge() {
    if (this.floor !== FINAL_FLOOR || !this.completedGymFloors.has(FINAL_FLOOR)) return false;
    const badgeIds = new Set(this.badges.map(b => typeof b === 'object' ? b.id : b));
    return KANTO_GYMS.every((gym, i) => badgeIds.has(i) && this.completedGymFloors.has((i + 1) * 10));
  },

  /** Chiude la run: il salvataggio resta (anche nel cloud) ma non si può più continuare. */
  endRun(reason) {
    if (Checkpoints.isGuestMode() || !this.runId) return;
    try {
      Checkpoints.save(Checkpoints.ended(this.runId, reason));
      window.dispatchEvent(new Event('pokex:checkpoint'));
    } catch (error) { console.warn('Run non chiusa:', error); }
    this.updateContinueButton();
  },

  /** Riepilogo della run per il game over e il finale. */
  renderRunRecap(container) {
    if (!container) return;
    const stats = this.runStats || {};
    const minutes = Math.max(1, Math.round((stats.playMs || 0) / 60000));
    const time = minutes >= 60 ? `${Math.floor(minutes / 60)} h ${String(minutes % 60).padStart(2, '0')} min` : `${minutes} min`;
    const row = (label, value) => {
      const item = document.createElement('div');
      item.className = 'run-recap-stat';
      item.append(Object.assign(document.createElement('span'), { textContent: label }), Object.assign(document.createElement('strong'), { textContent: value }));
      return item;
    };
    const grid = document.createElement('div');
    grid.className = 'run-recap-grid';
    grid.append(
      row('PIANO', `${Math.max(this.floor, stats.maxFloor || 1)}/${FINAL_FLOOR}`),
      row('MEDAGLIE', `${this.badgeCount()}/8`),
      row('POKÉMON SCONFITTI', String(stats.wins || 0)),
      row('ALLENATORI', String(stats.trainers || 0)),
      row('CATTURE', String(stats.captures || 0)),
      row('TEMPO DI GIOCO', time),
    );
    const parts = [grid];
    parts.unshift(Object.assign(document.createElement('p'), { className: 'run-recap-mode', textContent: this.runMode === 'normal' ? 'MODALITÀ NORMALE' : 'MODALITÀ NUZLOCKE' }));
    const fallen = Array.isArray(stats.fallen) ? stats.fallen : [];
    if (fallen.length) {
      const list = document.createElement('ul');
      list.className = 'run-recap-fallen';
      for (const mon of fallen.slice(-6)) {
        const item = document.createElement('li');
        item.append(Object.assign(document.createElement('img'), { src: pokemonSprite(mon.id), alt: '', width: 32, height: 32 }),
          Object.assign(document.createElement('span'), { textContent: `${mon.name} Lv.${mon.level} · piano ${mon.floor}${mon.by ? ` · contro ${mon.by}` : ''}` }));
        list.append(item);
      }
      const title = Object.assign(document.createElement('h3'), { textContent: this.runMode === 'normal' ? 'ANDATI KO' : 'CADUTI IN BATTAGLIA' });
      parts.push(title, list);
      if (fallen.length > 6) parts.push(Object.assign(document.createElement('p'), { className: 'run-recap-more', textContent: `e altri ${fallen.length - 6}` }));
    } else parts.push(Object.assign(document.createElement('p'), { className: 'run-recap-more', textContent: this.runMode === 'normal' ? 'Nessun Pokémon andato KO.' : 'Nessun Pokémon perso in battaglia.' }));
    container.replaceChildren(...parts);
  },

  finishKantoAdventure() {
    if (this.adventureCompleted || !this.hasCompletedKantoChallenge()) return false;
    this.adventureCompleted = true;
    const solo = this.soloRunTracked && this.soloRunEligible && this.team.length === 1 && !this.devRun;
    const previouslyUnlocked = Objectives.unlockChampion();
    const recorded = Objectives.record('run_win', this.runId, { solo, mode: this.runMode, lossless: !this.runStats.fallen.some(p => p.lost) });
    if (recorded && solo && !previouslyUnlocked && Objectives.unlockChampion()) this.showDiscoveryNotice('🏆 PERSONAGGIO CAMPIONE SBLOCCATO!', 4500);
    this.endRun('victory');
    this.isLocked = true;
    this.hideFinaleScreens();
    this.renderRunRecap(this.$id('victory-recap'));
    this.$id('victory-overlay').classList.remove('hidden');
    const preview = this.$id('victory-badge-preview');
    preview.replaceChildren(...KANTO_GYMS.map(gym => Object.assign(document.createElement('img'), { src: badgeSprite(gym.badgeId), alt: '', width: 32, height: 32 })));
    this.logMsg('Hai completato la sfida di Kanto!');
    return true;
  },

  hideFinaleScreens() {
    this.$id('victory-overlay')?.classList.add('hidden');
    this.$id('memory-photo-overlay')?.classList.add('hidden');
  },

  showMemoryPhoto() {
    if (!this.adventureCompleted) return;
    const teamArea = this.$id('memory-photo-team');
    teamArea.replaceChildren();
    for (let i = 0; i < 6; i++) {
      const pokemon = this.team[i];
      const tile = document.createElement('div');
      tile.className = 'memory-mon' + (pokemon ? '' : ' empty');
      if (pokemon) {
        const sprite = Object.assign(document.createElement('img'), { src: pokemon.spriteFront, alt: pokemon.name, loading: 'eager' });
        tile.append(sprite, Object.assign(document.createElement('strong'), { textContent: pokemon.name }), Object.assign(document.createElement('span'), { textContent: `Lv. ${pokemon.level}` }));
      }
      teamArea.appendChild(tile);
    }
    const badgeArea = this.$id('memory-photo-badges');
    badgeArea.replaceChildren(...KANTO_GYMS.map(gym => {
      const badge = document.createElement('div');
      badge.className = 'memory-badge';
      badge.append(Object.assign(document.createElement('img'), { src: badgeSprite(gym.badgeId), alt: `Medaglia ${gym.badge}` }), Object.assign(document.createElement('span'), { textContent: gym.badge }));
      return badge;
    }));
    this.$id('victory-overlay').classList.add('hidden');
    this.$id('memory-photo-overlay').classList.remove('hidden');
    this.isLocked = true;
  },

  /** Salva la foto ricordo come PNG, disegnata su canvas con gli sprite locali. */
  async downloadMemoryPhoto() {
    const scale = 2, width = 480, height = 300;
    const canvas = Object.assign(document.createElement('canvas'), { width: width * scale, height: height * scale });
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);
    ctx.imageSmoothingEnabled = false;
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#173a63'); gradient.addColorStop(1, '#0a1a33');
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = '#ffd474'; ctx.lineWidth = 4; ctx.strokeRect(6, 6, width - 12, height - 12);
    await document.fonts?.ready;
    ctx.textAlign = 'center'; ctx.fillStyle = '#ffd474'; ctx.font = '14px "Press Start 2P", monospace';
    ctx.fillText('POKÉXPLORER · FOTO RICORDO', width / 2, 34);
    ctx.fillStyle = '#e2e8f0'; ctx.font = '8px "Press Start 2P", monospace';
    ctx.fillText(new Date().toLocaleDateString('it-IT'), width / 2, 52);
    const load = src => new Promise(resolve => { const img = new Image(); img.onload = () => resolve(img); img.onerror = () => resolve(null); img.src = src; });
    const sprites = await Promise.all(this.team.map(p => load(p.spriteFront)));
    sprites.forEach((img, i) => {
      const x = 20 + i * 74, y = 64;
      ctx.fillStyle = 'rgba(255,255,255,.08)'; ctx.fillRect(x, y, 66, 92);
      if (img) ctx.drawImage(img, x + 1, y + 2, 64, 64);
      ctx.fillStyle = '#f8fafc'; ctx.font = '6px "Press Start 2P", monospace';
      ctx.fillText(this.team[i].name.slice(0, 10), x + 33, y + 76);
      ctx.fillStyle = '#93c5fd'; ctx.fillText(`Lv. ${this.team[i].level}`, x + 33, y + 88);
    });
    const badges = await Promise.all(KANTO_GYMS.map(gym => load(badgeSprite(gym.badgeId))));
    badges.forEach((img, i) => { if (img) ctx.drawImage(img, 52 + i * 48, 190, 32, 32); });
    ctx.fillStyle = '#e2e8f0'; ctx.font = '8px "Press Start 2P", monospace';
    ctx.fillText('LE OTTO MEDAGLIE DI KANTO', width / 2, 244);
    ctx.fillStyle = '#ffd474'; ctx.fillText('CONDIVIDILA SUL DISCORD DI POKÉXPLORER!', width / 2, 272);
    const fail = () => Dialogs.alert({ title: 'FOTO RICORDO', message: 'Il browser non permette di creare l’immagine (succede aprendo il gioco come file). Fai uno screenshot della foto.' });
    try {
      canvas.toBlob(blob => {
        if (!blob) { fail(); return; }
        const link = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: 'pokexplorer-foto-ricordo.png' });
        document.body.appendChild(link); link.click(); link.remove();
        setTimeout(() => URL.revokeObjectURL(link.href), 2000);
      }, 'image/png');
    } catch (error) {
      // Aprendo il gioco come file il browser considera "esterne" le immagini e blocca l'esportazione.
      console.warn('Foto ricordo non esportabile', error);
      fail();
    }
  },

  returnToVictoryScreen() {
    if (!this.adventureCompleted) return;
    this.$id('memory-photo-overlay').classList.add('hidden');
    this.renderRunRecap(this.$id('victory-recap'));
    this.$id('victory-overlay').classList.remove('hidden');
    this.isLocked = true;
  },

  // ---------------------------------------------------------------- Menu principale
  returnToMainMenu() {
    this.finishEeveeStoneChoice(false);
    this.setMobileSheet(null);
    this.closeQuickSettings();
    Dialogs.close(false);
    this.acknowledgeDialogue();
    this.battleToken++;
    this.cancelPokemonCenterHealing();
    this.clearRaidTransientState();
    this.stopContinuousWalk();
    this.closePartyActions();
    this.closePokemonInfo();
    this.hideFinaleScreens();
    this.closeFloorJumpCode();
    for (const id of RUN_OVERLAYS) this.$id(id)?.classList.add('hidden');
    this._continueRecapReference = null;
    this.$id('celestial-blackout')?.classList.remove('active');
    this.$id('dungeon-grid-board')?.classList.remove('celestial-cave');
    this.$id('rotom-body')?.classList.remove('battle-active');
    this.$id('discovery-notice')?.classList.remove('visible');
    this.$id('dex-discovery-toast')?.classList.add('hidden');
    this.$id('main-menu-overlay').classList.remove('hidden');
    document.body.classList.remove('in-run');
    clearTimeout(this.playerIdleTimer);
    this.resetRunState();
    this.abilityCapsuleOpen = false; this.abilityCapsuleCandidate = null;
    this.music?.setScene('exploration');
    this.selectPlayerGender('male', true);
    this.renderBadges(); this.renderSidebar(); this.updateChampionChoice();
    this.updateContinueButton();
    this.syncQuickMenuState();
    this.logMsg('Inizia una nuova avventura!');
  },

  syncQuickMenuState() {
    const inAdventure = Boolean(this.$id('main-menu-overlay')?.classList.contains('hidden'));
    this.$id('return-main-menu-quick')?.classList.toggle('hidden', !inAdventure);
    this.$id('save-game-quick')?.classList.toggle('hidden', !inAdventure);
    this.syncDevControls();
    const notice = this.$id('save-game-quick-status');
    if (!inAdventure && notice) { notice.classList.add('hidden'); notice.textContent = ''; }
  },

  toggleQuickSettings() {
    const panel = this.$id('quick-settings-panel'), toggle = this.$id('quick-settings-toggle');
    if (!panel || !toggle) return;
    const opening = panel.classList.contains('hidden');
    panel.classList.toggle('hidden', !opening);
    toggle.setAttribute('aria-expanded', String(opening));
    toggle.setAttribute('aria-label', opening ? 'Chiudi opzioni' : 'Apri opzioni');
  },

  closeQuickSettings() {
    this.$id('quick-settings-panel')?.classList.add('hidden');
    const toggle = this.$id('quick-settings-toggle');
    if (toggle) { toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Apri opzioni'); }
  },

  async requestReturnToMainMenu() {
    if (!this.$id('main-menu-overlay')?.classList.contains('hidden')) return false;
    this.closeQuickSettings();
    this.stopContinuousWalk();
    const inBattle = this.isBattleVisible();
    const message = Checkpoints.isGuestMode()
      ? 'In modalità UTENTE i progressi non vengono salvati.'
      : inBattle
        ? 'La lotta in corso verrà abbandonata: i danni subiti e i Pokémon esausti restano persi. Riprenderai dal punto della mappa in cui è iniziata.'
        : 'Potrai riprendere dall’ultimo checkpoint salvato, automatico o manuale. I progressi successivi andranno persi.';
    const accepted = await Dialogs.confirm({ title: 'TORNARE AL MENU?', message, accept: 'TORNA AL MENU', cancel: 'ANNULLA' });
    if (!accepted) return false;
    if (inBattle) this.commitBattleState();
    this.returnToMainMenu();
    return true;
  },

  manualSaveAdventure() {
    if (!this.$id('main-menu-overlay')?.classList.contains('hidden')) return false;
    const status = this.$id('save-game-quick-status');
    const report = (message, ok = false) => {
      if (status) { status.textContent = message; status.classList.remove('hidden'); status.classList.toggle('saved', ok); }
      return ok;
    };
    if (Checkpoints.isGuestMode()) return report('Modalità UTENTE: accedi con Discord per salvare la partita.');
    if (this.isCelestialCave || this.celestialCutsceneActive || this.celestialDeparturePending || this.celestialDepositRequired || this.celestialExpeditionBusy)
      return report('Non puoi salvare durante la spedizione nella Grotta Celeste.');
    if (this.isLocked || this.battleBusy || this.isRaidActive || this.battleMode || this.pendingItemTarget || this.teleportSwitchPending ||
      this.dialogueResolve || !this.team.length || !this.gridMap.length || this.adventureCompleted)
      return report('Salvataggio non disponibile ora: termina la lotta, il dialogo o l’evento.');
    if (!this.saveCheckpoint()) return report('Salvataggio non riuscito: il checkpoint precedente è intatto.');
    return report('Partita salvata.', true);
  },

  /** Checkpoint automatico nei momenti sicuri (fine lotta, cambio piano, Centro Pokémon…). */
  saveCheckpoint() {
    return this.writeCheckpoint(Checkpoints.take(this));
  },
  /** Durante la lotta: registra danni e perdite, così abbandonare non annulla la sconfitta. */
  commitBattleState(pendingFaint = null) {
    return this.writeCheckpoint(Checkpoints.take(this, { battle: true, pendingFaint }));
  },
  writeCheckpoint(snapshot) {
    if (Checkpoints.isGuestMode() || !snapshot) return false;
    try {
      Checkpoints.save(snapshot);
      this.updateContinueButton();
      window.dispatchEvent(new Event('pokex:checkpoint'));
      return true;
    } catch (error) { console.warn('Checkpoint non salvato:', error); return false; }
  },

  updateContinueButton() {
    const button = this.$id('btn-continue-game');
    if (!button) return;
    let snapshot = null;
    try { snapshot = Checkpoints.load(); } catch { snapshot = null; }
    button.disabled = !snapshot;
    button.title = snapshot ? Checkpoints.describe(snapshot) : 'Nessuna run da continuare';
    const status = this.$id('save-status');
    if (status && !status.dataset.syncError) { status.textContent = ''; status.classList.add('hidden'); }
  },

  openContinueRecap() {
    const snapshot = Checkpoints.load();
    if (!snapshot) { this.updateContinueButton(); return false; }
    const overlay = this.$id('continue-recap-overlay');
    if (!overlay) return false;
    const game = snapshot.game;
    this._continueRecapReference = { runId: snapshot.runId, savedAt: snapshot.createdAt };
    const grid = this.$id('continue-recap-grid');
    grid.replaceChildren();
    const field = (label, value) => {
      const row = document.createElement('div'); row.className = 'recap-line';
      row.append(Object.assign(document.createElement('span'), { textContent: label }), Object.assign(document.createElement('strong'), { textContent: String(value) }));
      grid.append(row);
    };
    field('PIANO', game.floor + '/80');
    field('MEDAGLIE', game.badges.length + '/8');
    field('MODALITÀ', normalizeRunMode(game.runMode) === 'normal' ? 'NORMALE' : 'NUZLOCKE');
    field('SALVATO', new Date(snapshot.createdAt).toLocaleString('it-IT', { dateStyle: 'short', timeStyle: 'short' }));
    field('ORIGINE', this._checkpointSource || 'LOCALE');
    const team = this.$id('continue-recap-team'); team.replaceChildren();
    const header = document.createElement('small'); header.textContent = 'SQUADRA'; team.append(header);
    for (const mon of game.team) {
      const item = document.createElement('div'); item.className = 'recap-mon';
      item.append(Object.assign(document.createElement('img'), { src: pokemonSprite(mon.id, { shiny: mon.isShiny, gender: mon.gender }), alt: '' }),
        Object.assign(document.createElement('span'), { textContent: `${mon.name} · Lv.${mon.level}${mon.currentHp === 0 ? ' · KO' : ''}` }));
      team.append(item);
    }
    this._menuFocusBefore = document.activeElement;
    overlay.classList.remove('hidden'); this.$id('continue-recap-cancel')?.focus();
    return true;
  },
  closeContinueRecap() {
    this.$id('continue-recap-overlay')?.classList.add('hidden');
    this._menuFocusBefore?.focus?.();
    this._continueRecapReference = null;
  },
  acceptContinueRecap() {
    const current = Checkpoints.load();
    const selected = this._continueRecapReference;
    if (!current || !selected || current.runId !== selected.runId || current.createdAt !== selected.savedAt) {
      this.closeContinueRecap();
      Dialogs.alert({ title: 'SALVATAGGIO CAMBIATO', message: 'I dati sono stati aggiornati. Riapri Continua avventura per verificare la versione corretta.' });
      return false;
    }
    this.closeContinueRecap();
    return this.continueAdventure();
  },

  continueAdventure() {
    try {
      const checkpoint = Checkpoints.load();
      if (!checkpoint) return false;
      const result = Checkpoints.restoreInto(this, checkpoint);
      if (!result) return false;
      this.enterRunView();
      if (this.team.every(p => p.currentHp <= 0)) {
        this.renderDungeon(); this.renderBadges();
        this.resolveTeamDefeat();
        return true;
      }
      this.ensureActivePokemon();
      Dex.importLegacyTeam(checkpoint);
      Objectives.importCheckpoint(checkpoint);
      this.ensureOakEventAccessible();
      this.ensureEeveeElder();
      this.renderDungeon(); this.renderSidebar(); this.renderBadges();
      if (result.lostInCave.length) {
        this.logMsg(`La spedizione nella Grotta Celeste è stata abbandonata: ${result.lostInCave.join(' e ')} non ${result.lostInCave.length > 1 ? 'sono tornati' : 'è tornato'}.`);
        this.showDiscoveryNotice('SPEDIZIONE ABBANDONATA · POKÉMON PERSI', 4000);
        this.saveCheckpoint();
      } else if (result.caveAbandoned) {
        this.logMsg('Spedizione interrotta. I Pokémon esausti possono essere curati al Centro Pokémon.');
        this.saveCheckpoint();
      } else this.logMsg(result.interrupted ? 'Run ripresa: la lotta interrotta è stata abbandonata, le perdite restano.' : 'Avventura ripresa dall’ultimo checkpoint.');
      return true;
    } catch (error) {
      console.error('Ripresa non riuscita:', error);
      Dialogs.alert({ title: 'ERRORE CHECKPOINT', message: 'Checkpoint non valido o danneggiato.' });
      return false;
    }
  },

  /** Interfaccia della partita in corso (mappa e pannelli laterali). */
  enterRunView() {
    for (const id of ['main-menu-overlay', 'starter-scene-overlay', 'overlay-battle', 'gameover-overlay']) this.$id(id)?.classList.add('hidden');
    this.$id('rotom-body')?.classList.remove('battle-active');
    document.body.classList.add('in-run');
    this.music?.setScene('exploration');
    this.openWings();
    this.syncQuickMenuState();
  },

  openMenuMessage(type) {
    this.menuMessageType = type;
    const dialog = this.$id('menu-message'), confirm = this.$id('menu-message-confirm'), cancel = this.$id('menu-message-cancel');
    this.$id('menu-message-heading').textContent = type === 'support' ? 'CONTATTA ASSISTENZA' : 'CREDITI';
    const content = this.$id('menu-message-text');
    content.replaceChildren();
    if (type === 'support') content.textContent = 'Vuoi aprire il server Discord di Pokéxplorer per chiedere assistenza?';
    else if (type === 'credits') {
      for (const line of [
        'Pokéxplorer · fan game gratuito e senza scopo di lucro, creato da 17nico.',
        'Pokémon © Nintendo, Creatures Inc., GAME FREAK inc. e The Pokémon Company. Progetto non ufficiale, non affiliato né approvato.',
        'Dati Pokémon: PokéAPI (BSD-3). Sprite di mappa e allenatori: pret/pokefirered. Font: Press Start 2P (SIL OFL).',
        'Dettagli completi nel file CREDITS.md del progetto.',
      ]) content.append(Object.assign(document.createElement('p'), { textContent: line }));
    }
    this._menuMessageFocusBefore = document.activeElement;
    confirm.classList.toggle('hidden', type !== 'support');
    confirm.textContent = 'APRI DISCORD';
    cancel.textContent = 'CHIUDI';
    dialog.classList.remove('hidden');
    cancel.focus();
  },

  closeMenuMessage() {
    this.$id('menu-message')?.classList.add('hidden');
    this._menuMessageFocusBefore?.focus?.();
  },

  // ---------------------------------------------------------------- Scelta del personaggio e dello starter
  selectPlayerGender(gender, force = false) {
    if (!['male', 'female', 'champion'].includes(gender) || (!force && (this.team.length || this.isLocked))) return false;
    if (gender === 'champion' && !Objectives.unlockChampion()) return false;
    this.playerGender = gender;
    for (const [id, active] of [['choose-male', gender === 'male'], ['choose-female', gender === 'female'], ['choose-champion', gender === 'champion']]) {
      const button = this.$id(id);
      if (button) { button.classList.toggle('selected', active); button.setAttribute('aria-pressed', String(active)); }
    }
    return true;
  },

  /** Modalità della prossima run; la scelta viene ricordata per le run successive. */
  selectRunMode(mode) {
    this.nextRunMode = normalizeRunMode(mode);
    try { localStorage.setItem('pokexplorer:run-mode', this.nextRunMode); } catch { /* memoria non disponibile */ }
    for (const [id, active] of [['choose-nuzlocke', this.nextRunMode === 'nuzlocke'], ['choose-normal', this.nextRunMode === 'normal']]) {
      const button = this.$id(id);
      if (button) { button.classList.toggle('selected', active); button.setAttribute('aria-pressed', String(active)); }
    }
    return this.nextRunMode;
  },

  updateChampionChoice() {
    const button = this.$id('choose-champion');
    if (!button) return;
    const unlocked = Objectives.unlockChampion() === true;
    button.disabled = !unlocked;
    button.textContent = unlocked ? 'CAMPIONE' : 'CAMPIONE 🔒';
    button.title = unlocked ? 'Personaggio Campione sbloccato' : 'Completa una run con un solo Pokémon';
  },

  startStarterScene() {
    this.selectedStarterData = null;
    let saved = 'nuzlocke';
    try { saved = localStorage.getItem('pokexplorer:run-mode') || 'nuzlocke'; } catch { /* memoria non disponibile */ }
    this.selectRunMode(saved);
    this.updateChampionChoice();
    this.$id('starter-scene-overlay').classList.remove('hidden');
    this.$id('dialog-actions').classList.add('hidden');
    this.$id('starter-showcase').className = 'pokemon-showcase-box';
    this.$id('starter-selection-info').textContent = 'Tre compagni. Un solo inizio.';
    this.$id('dialog-text').textContent = 'RotomDex: scegli una Poké Ball dalla valigetta.';
    const container = this.$id('briefcase-balls');
    container.replaceChildren(...STARTERS.map(starter => {
      const data = speciesData(starter.id);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'pokeball-wrapper';
      button.dataset.type = starter.type;
      button.setAttribute('aria-label', `Seleziona ${data.name}`);
      button.innerHTML = '<span class="ball-pad"></span><span class="ball-model" aria-hidden="true"><span class="pokeball-top"></span><span class="pokeball-button"></span><span class="pokeball-bottom"></span></span><span class="starter-name"></span><span class="starter-kind"></span>';
      button.querySelector('.starter-name').textContent = data.name.toUpperCase();
      button.querySelector('.starter-kind').textContent = starter.label;
      button.onclick = () => {
        container.querySelectorAll('.pokeball-wrapper').forEach(b => b.classList.toggle('open', b === button));
        this.selectedStarterData = data;
        this.$id('starter-showcase-img').src = pokemonSprite(data.id);
        this.$id('starter-showcase').className = `pokemon-showcase-box active bg-${starter.type}`;
        this.$id('starter-selection-info').textContent = `${data.name.toUpperCase()} · TIPO ${starter.label}`;
        this.$id('dialog-text').textContent = `Vuoi iniziare l'avventura con ${data.name.toUpperCase()}?`;
        this.$id('dialog-actions').classList.remove('hidden');
        this.$id('btn-confirm-yes').focus({ preventScroll: true });
        this.$id('dialog-actions').scrollIntoView?.({ block: 'nearest' });
      };
      return button;
    }));
    container.querySelector('button')?.focus({ preventScroll: true });
  },

  resetStarter() {
    this.selectedStarterData = null;
    this.$id('dialog-actions').classList.add('hidden');
    this.$id('dialog-text').textContent = 'RotomDex: scegli una Poké Ball dalla valigetta.';
    this.$id('starter-selection-info').textContent = 'Tre compagni. Un solo inizio.';
    this.$id('starter-showcase').className = 'pokemon-showcase-box';
    document.querySelectorAll('.pokeball-wrapper').forEach(b => b.classList.remove('open'));
  },

  confirmStarter() {
    const starter = this.selectedStarterData;
    if (!starter) return;
    const gender = this.playerGender;
    this.resetRunState();
    this.playerGender = gender;
    this.runId = `run-${Date.now()}`;
    this.devRun = this.devMode;
    this.runMode = normalizeRunMode(this.nextRunMode);
    this.runStats.startedAt = Date.now();
    if (this.devMode) Object.assign(this.items, { rareCandy: 999, goldCandy: 999 });
    this.team = [new Pokemon(starter, 5)];
    this.activeMon = this.team[0];
    Dex.record(this.activeMon, 'caught', `Starter · Piano ${this.floor}`);
    this.soloRunEligible = true; this.soloRunTracked = true;
    Objectives.record('run_start', this.runId, { mode: this.runMode });
    Objectives.record('floor', this.runId, { floor: this.floor });
    this.enterRunView();
    this.generateFloorDungeon();
    this.renderBadges();
    this.saveCheckpoint();
    window.dispatchEvent(new Event('pokex:dex-battle-ended'));
  },
};
