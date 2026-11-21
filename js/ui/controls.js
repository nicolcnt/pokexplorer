// Collegamento dei controlli dell'interfaccia (mouse, touch e tastiera) alle azioni del motore.
import { keyRouter, keyDirection, isSpace, isTyping, isShown, trapTab } from './input.js';
import * as Dialogs from './dialogs.js';
import * as Checkpoints from '../systems/checkpoints.js';
import * as ObjectivesUI from './objectives-ui.js';

const DIRECTIONS = Object.freeze({ up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] });
const SUPPORT_URL = 'https://discord.gg/qNGscTEYHM';

export const controlsMethods = {
  bindEvents() {
    const click = (id, handler) => { const el = this.$id(id); if (el) el.onclick = handler; };
    const shown = id => isShown(this.$id(id));

    // ---------------------------------------------------------------- Menu principale e finale
    click('btn-start-game', async () => {
      if (Checkpoints.load() && !await Dialogs.confirm({
        title: 'NUOVA AVVENTURA?', message: 'Avviare una nuova run sostituirà il checkpoint precedente al prossimo salvataggio. Vuoi continuare?',
        accept: 'NUOVA AVVENTURA', cancel: 'ANNULLA',
      })) return;
      this.$id('main-menu-overlay').classList.add('hidden');
      this.startStarterScene();
    });
    click('btn-continue-game', () => this.openContinueRecap());
    click('continue-recap-accept', () => this.acceptContinueRecap());
    click('continue-recap-cancel', () => this.closeContinueRecap());
    click('continue-recap-close', () => this.closeContinueRecap());
    click('btn-return-main-menu', () => this.returnToMainMenu());
    click('btn-contact-support', () => this.openMenuMessage('support'));
    click('btn-view-progress', () => ObjectivesUI.open());
    click('btn-credits', () => this.openMenuMessage('credits'));
    click('menu-message-cancel', () => this.closeMenuMessage());
    click('menu-message-confirm', () => {
      if (this.menuMessageType === 'support') window.open(SUPPORT_URL, '_blank', 'noopener,noreferrer');
      this.closeMenuMessage();
    });
    click('btn-victory-photo', () => this.showMemoryPhoto());
    click('btn-victory-menu', () => this.returnToMainMenu());
    click('btn-photo-back', () => this.returnToVictoryScreen());
    click('btn-photo-download', () => this.downloadMemoryPhoto());

    // ---------------------------------------------------------------- Scelta iniziale
    click('choose-male', () => this.selectPlayerGender('male'));
    click('choose-female', () => this.selectPlayerGender('female'));
    click('choose-champion', () => this.selectPlayerGender('champion'));
    click('choose-nuzlocke', () => this.selectRunMode('nuzlocke'));
    click('choose-normal', () => this.selectRunMode('normal'));
    click('btn-confirm-yes', () => this.confirmStarter());
    click('btn-confirm-no', () => this.resetStarter());

    // ---------------------------------------------------------------- Squadra, scheda e portamedaglie
    click('btn-scan-radar', () => this.scanRadar());
    click('item-target-cancel', () => this.cancelItemTargetSelection());
    click('eevee-stone-gift-cancel', () => this.closeEeveeGift());
    click('eevee-evolution-cancel', () => this.finishEeveeStoneChoice(false));
    click('eevee-evolution-accept', () => this.finishEeveeStoneChoice(true));
    click('party-info-action', () => this.openPokemonInfo(this.partyMenuPokemon));
    click('party-move-action', () => this.beginPartyReorder());
    click('party-send-action', () => { const pokemon = this.partyMenuPokemon; this.closePartyActions(); if (pokemon) this.selectBattlePokemon(pokemon); });
    click('party-close-action', () => this.closePartyActions());
    click('pokemon-info-close', () => this.closePokemonInfo());
    click('pokemon-tab-stats', () => this.selectPokemonInfoTab('stats'));
    click('pokemon-tab-moves', () => this.selectPokemonInfoTab('moves'));
    click('btn-badge-case', () => this.openBadgeCase());
    click('badge-case-close', () => this.closeBadgeCase());
    this.$id('badge-case-overlay')?.addEventListener('click', event => { if (event.target === event.currentTarget) this.closeBadgeCase(); });
    for (const tab of document.querySelectorAll('[data-bag-tab]'))
      tab.addEventListener('click', () => { this.bagCategory = tab.dataset.bagTab; this.renderSidebar(); });

    // ---------------------------------------------------------------- Lotta
    click('btn-act-fight', () => this.showMoves());
    click('btn-act-bag', () => this.showBagMenu());
    click('btn-act-switch', () => this.showTeamMenu());
    click('btn-act-run', () => this.tryRunAway());
    click('battle-close-bag', () => this.showMainActions());
    click('battle-close-team', () => { if (!this.pendingForcedSwitch) this.showMainActions(); });
    click('btn-move-back', () => this.showMainActions());
    click('btn-start-trainer-battle', () => this.beginEncounter(this.gymQueue.length > 0 ? 'gym' : 'trainer'));
    click('btn-start-wild-battle', () => {
      const encounter = this.pendingWildEncounterType || 'wild';
      this.pendingWildEncounterType = null;
      this.beginEncounter(encounter);
    });
    click('btn-start-gym-leader', () => {
      this.$id('gym-leader-intro').classList.add('hidden');
      this.gymLeaderIndex = 0;
      this.startBattle('gym', true);
    });
    click('skip-new-move-btn', () => this.resolveMoveChoice(null));
    click('btn-battle-confirm-yes', () => this.acceptBattleConfirmation());
    click('btn-battle-confirm-no', () => this.closeBattleConfirmation());
    click('evolution-start', () => this.startEvolutionAnimation());
    click('evolution-finish', () => this.finishEvolution());
    this.$id('battle-msg')?.addEventListener('click', () => this.acknowledgeDialogue());
    // Un dialogo di lotta avanza anche toccando il campo; i pulsanti restano cliccabili.
    document.addEventListener('pointerdown', event => {
      if (!this.dialogueResolve || event.target.closest('#pokex-confirm-overlay')) return;
      if (event.target.closest('button, [role="button"], #battle-confirm, #evolution-overlay')) return;
      this.acknowledgeDialogue();
    }, true);

    // ---------------------------------------------------------------- Città: negozio, palestra, Centro Pokémon
    click('close-market-btn', () => this.closePokemart());
    click('mart-close-x', () => this.closePokemart());
    click('gym-entry-yes', () => this.confirmGymChallenge());
    click('gym-entry-no', () => this.cancelGymChallenge());
    click('ability-capsule-cancel', () => this.closeAbilityCapsule());

    // ---------------------------------------------------------------- Grotta Celeste
    click('celestial-dialog-next', () => this.advanceCelestialDialog());
    click('celestial-dialog-yes', () => this.answerOakInvitation(true));
    click('celestial-dialog-no', () => this.answerOakInvitation(false));
    click('celestial-team-confirm', () => this.confirmCelestialTeam());
    click('celestial-team-cancel', () => this.cancelCelestialTeam());

    // ---------------------------------------------------------------- Opzioni, velocità, DEV MODE
    click('quick-settings-toggle', () => { this.syncQuickMenuState(); this.toggleQuickSettings(); });
    click('return-main-menu-quick', () => this.requestReturnToMainMenu());
    click('save-game-quick', () => this.manualSaveAdventure());
    click('speed-toggle', () => this.setGameSpeed(this.speedMultiplier === 1 ? 2 : 1));
    click('auto-dialogue-toggle', () => this.setAutoDialogue(!this.autoDialogue));
    document.querySelectorAll('#mobile-sheet-tabs [data-sheet]').forEach(button => button.addEventListener('click', () => {
      const name = button.dataset.sheet;
      this.setMobileSheet(document.body.classList.contains(`sheet-${name}`) ? null : name);
    }));

    this.setAutoDialogue(this.autoDialogue);
    document.addEventListener('pointerdown', event => {
      const menu = this.$id('game-quick-settings');
      if (menu && !menu.contains(event.target)) this.closeQuickSettings();
    });
    this.bindDevControls(click);
    this.syncQuickMenuState();

    // ---------------------------------------------------------------- Movimento (tastiera, D-pad, touch)
    this.bindDirectionalPads();
    this.installKeyboard(shown);
  },

  bindDirectionalPads() {
    const pads = [...document.querySelectorAll('#mobile-dpad [data-move], .sidebar-movement-controls [data-move]')];
    for (const button of pads) {
      const step = DIRECTIONS[button.dataset.move];
      const source = `pad:${button.closest('#mobile-dpad') ? 'touch' : 'side'}:${button.dataset.move}`;
      button.addEventListener('pointerdown', event => {
        if (event.button !== 0 || !event.isPrimary) return;
        event.preventDefault();
        button.classList.add('is-pressed');
        this.startContinuousWalk(step[0], step[1], source);
        try { button.setPointerCapture(event.pointerId); } catch { /* puntatore già rilasciato */ }
      });
      const release = () => { button.classList.remove('is-pressed'); this.stopContinuousWalk(source); };
      for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) button.addEventListener(type, release);
      // detail=0: tastiera o tecnologie assistive; il puntatore è gestito su pointerdown.
      button.addEventListener('click', event => { if (event.detail !== 0) { event.preventDefault(); return; } this.movePlayer(...step); });
      button.addEventListener('contextmenu', event => event.preventDefault());
    }
    document.addEventListener('pointerup', () => { for (const key of [...this.walkInputs.keys()]) if (key.startsWith('pad:')) this.stopContinuousWalk(key); });
  },

  installKeyboard(shown) {
    const keys = keyRouter;
    keys.install(window);
    // Esc chiude sempre il menu Opzioni, senza consumare il tasto.
    keys.add('quick-settings', 200, event => { if (event.key === 'Escape') this.closeQuickSettings(); return false; });
    keys.add('dev-overlays', 75, event => {
      for (const [id, close] of [['dev-code-overlay', () => this.closeDevCode()], ['floor-jump-overlay', () => this.closeFloorJumpCode()]]) {
        if (!shown(id)) continue;
        if (event.key === 'Escape') { event.preventDefault(); close(); }
        trapTab(event, this.$id(id));
        return true;
      }
      return false;
    });
    keys.add('ability-capsule', 74, event => {
      if (!shown('ability-capsule-overlay')) return false;
      if (event.key === 'Escape') { event.preventDefault(); this.closeAbilityCapsule(); }
      trapTab(event, this.$id('ability-capsule-overlay'), 'button:not(:disabled)');
      return true;
    });
    keys.add('menu-panels', 120, event => {
      for (const [id, close] of [['continue-recap-overlay', () => this.closeContinueRecap()],['menu-message',()=>this.closeMenuMessage()],['eevee-stone-gift',()=>this.closeEeveeGift()],['eevee-stone-evolution',()=>this.finishEeveeStoneChoice(false)]]) {
        if (!shown(id)) continue;
        if (event.key === 'Escape') { event.preventDefault(); if (!event.repeat) close(); return true; }
        trapTab(event, this.$id(id));
        return true;
      }
      return false;
    });
    keys.add('celestial-modals', 80, event => this.handleCelestialModalKey(event));
    keys.add('pokemart', 70, event => this.handleShopKey(event));
    this.installBattleKeyboardNavigation();
    keys.add('world', 10, event => this.handleWorldKey(event, shown));
    window.addEventListener('keyup', event => {
      const dir = keyDirection(event);
      if (dir) this.stopContinuousWalk(`key:${dir}`);
    });
    window.addEventListener('blur', () => this.stopContinuousWalk());
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.stopContinuousWalk(); });
  },

  handleWorldKey(e, shown) {
    if (isTyping(e) || e.ctrlKey || e.altKey || e.metaKey) return false;
    if (shown('pokedex-overlay')) return false;
    if (e.key === 'Escape' && shown('badge-case-overlay')) { this.closeBadgeCase(); return true; }
    if (e.key === 'Escape' && shown('party-action-menu')) { this.closePartyActions(); return true; }
    if (isSpace(e) && !e.repeat) {
      // La schermata "LOTTA!" è una conferma: Spazio equivale al clic, una sola volta.
      if (shown('trainer-encounter-overlay')) {
        e.preventDefault();
        const fight = this.$id('btn-start-trainer-battle');
        if (fight && !fight.disabled) fight.click();
        return true;
      }
      if (shown('wild-encounter-overlay')) { e.preventDefault(); this.$id('btn-start-wild-battle')?.click(); return true; }
      if (shown('celestial-dialog')) {
        e.preventDefault();
        if (this.celestialDialogStep === 'question') {
          const choice = this.$id('celestial-dialog-actions');
          (choice?.contains(document.activeElement) ? document.activeElement : this.$id('celestial-dialog-yes'))?.click();
        } else this.advanceCelestialDialog();
        return true;
      }
      if (this.dialogueResolve) { e.preventDefault(); this.acknowledgeDialogue(); return true; }
      if (shown('npc-dialog-overlay')) {
        e.preventDefault();
        if (this.pendingNpcAdvance) this.pendingNpcAdvance();
        else this.$id('npc-dialog-overlay').querySelector('button:not(.hidden):not(:disabled)')?.click();
        return true;
      }
    }
    const dir = keyDirection(e);
    if (!dir) return false;
    if (shown('celestial-dialog')) {
      e.preventDefault();
      if (this.celestialDialogStep === 'question') {
        const current = document.activeElement === this.$id('celestial-dialog-no') ? 'no' : 'yes';
        this.$id(current === 'yes' ? 'celestial-dialog-no' : 'celestial-dialog-yes')?.focus();
      }
      return true;
    }
    if (['pokemon-info-overlay', 'badge-case-overlay', 'objectives-overlay'].some(shown)) return true;
    e.preventDefault();
    this.startContinuousWalk(...DIRECTIONS[dir], `key:${dir}`);
    return true;
  },
};
