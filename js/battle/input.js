// Comandi da tastiera in lotta: WASD/frecce per muoversi, Spazio per confermare, Esc per tornare.
// Usa .click() sui pulsanti: tastiera e mouse eseguono la stessa logica.
import { keyRouter, keyDirection, isSpace, isBack, isTyping, controlsIn, focusControl, moveFocus, visibleControl } from '../ui/input.js';

const MODALS = ['team-full-overlay', 'battle-confirm', 'learn-move-overlay', 'evolution-overlay', 'gym-leader-intro', 'evolution-choice-overlay'];
const MODAL_BUTTONS = 'button:not(.hidden):not(:disabled)';

/** Griglia 2×2 dei comandi: salta i pulsanti disattivati senza bloccare la selezione. */
function focusGrid(parent, dir) {
  const enabled = controlsIn(parent);
  if (!enabled.length) return;
  const all = controlsIn(parent, 'button');
  const current = all.indexOf(document.activeElement);
  const step = dir === 'up' ? -2 : dir === 'down' ? 2 : dir === 'left' ? -1 : 1;
  if (current < 0) { focusControl(enabled[0]); return; }
  let next = Math.max(0, Math.min(all.length - 1, current + step));
  if (!enabled.includes(all[next])) {
    const toward = step >= 0 ? 1 : -1;
    while (next >= 0 && next < all.length && !enabled.includes(all[next])) next += toward;
    if (next < 0 || next >= all.length) { next = current; while (next >= 0 && next < all.length && !enabled.includes(all[next])) next -= toward; }
  }
  focusControl(enabled.includes(all[next]) ? all[next] : enabled[0]);
}
const activeOr = (items, fallback = items[0]) => items.includes(document.activeElement) ? document.activeElement : fallback;

export const battleInputMethods = {
  focusBattleSelection(selector) {
    if (this.isBattleVisible() && selector) focusControl(controlsIn(document, selector)[0]);
  },

  updateBattleWingCloseButtons() {
    const battle = this.isBattleVisible();
    this.$id('battle-close-bag')?.classList.toggle('hidden', !battle || this.battleMode !== 'bag');
    this.$id('battle-close-team')?.classList.toggle('hidden', !battle || this.battleMode !== 'team' || this.pendingForcedSwitch);
  },

  installBattleKeyboardNavigation() {
    keyRouter.add('battle', 60, event => this.handleBattleKey(event));
  },

  handleBattleKey(event) {
    if (event.ctrlKey || event.metaKey || event.altKey || isTyping(event)) return false;
    const get = id => this.$id(id);
    const shown = id => { const el = get(id); return el && !el.classList.contains('hidden'); };
    const modal = MODALS.map(get).find(el => el && !el.classList.contains('hidden'));
    if (!this.isBattleVisible() && !modal) return false;
    const dir = keyDirection(event), space = isSpace(event), back = isBack(event);
    if (!dir && !space && !back) return false;
    event.preventDefault();
    const fresh = space && !event.repeat;

    if (modal) {
      const buttons = controlsIn(modal, MODAL_BUTTONS);
      if (dir) moveFocus(buttons, dir);
      else if (fresh) activeOr(buttons)?.click();
      else if (back) buttons.find(el => /cancel|back|no|discard/i.test(el.id || '') || /ANNULLA|CHIUDI|NO|INDIETRO/i.test(el.textContent || ''))?.click();
      return true;
    }
    if (this.dialogueResolve) { if (fresh) this.acknowledgeDialogue(); return true; }
    if (this.battleBusy) return true;
    if (shown('pokemon-info-overlay')) {
      const buttons = controlsIn(get('pokemon-info-overlay'), MODAL_BUTTONS);
      if (dir) moveFocus(buttons, dir); else if (fresh) activeOr(buttons)?.click(); else if (back) get('pokemon-info-close')?.click();
      return true;
    }
    if (shown('item-target-prompt')) {
      const team = controlsIn(get('team-grid')), mobile = controlsIn(get('item-target-mobile-list'));
      const cancel = get('item-target-cancel'), targets = team.length ? team : mobile, active = document.activeElement;
      if (dir) {
        if (active === cancel) focusControl(targets[0]);
        else if (targets.length && ((dir === 'up' && active === targets[0]) || (dir === 'down' && active === targets.at(-1)))) focusControl(cancel);
        else moveFocus(targets, dir, dir === 'left' || dir === 'right' ? 1 : 2);
      } else if (back) cancel?.click();
      else if (fresh) (active === cancel ? cancel : activeOr(team, team[0] || mobile[0] || cancel))?.click();
      return true;
    }
    if (shown('party-action-menu')) {
      const buttons = controlsIn(get('party-action-menu'), MODAL_BUTTONS);
      if (dir) moveFocus(buttons, dir);
      else if (back) { get('party-close-action')?.click(); focusControl(controlsIn(get('team-grid'))[0]); }
      else if (fresh) activeOr(buttons)?.click();
      return true;
    }
    if (back) {
      if (['bag', 'team', 'moves'].includes(this.battleMode) && !this.pendingForcedSwitch) this.showMainActions();
      return true;
    }
    if (this.pendingForcedSwitch || this.battleMode === 'team') {
      const team = controlsIn(get('team-grid')), close = get('battle-close-team'), canClose = visibleControl(close);
      if (dir) {
        if (canClose && document.activeElement === close) focusControl(team[0]);
        else if (canClose && team.length && ((dir === 'up' && document.activeElement === team[0]) || (dir === 'down' && document.activeElement === team.at(-1)))) focusControl(close);
        else moveFocus(team, dir, dir === 'up' || dir === 'down' ? 2 : 1);
      } else if (fresh) (canClose && document.activeElement === close ? close : activeOr(team))?.click();
      return true;
    }
    if (this.battleMode === 'bag') {
      const tabs = controlsIn(get('bag-tabs')), items = controlsIn(get('bag-list')), close = get('battle-close-bag');
      const active = document.activeElement, activeTab = tabs.find(t => t.classList.contains('active')) || tabs[0];
      if (dir) {
        if (tabs.includes(active)) { if (dir === 'down') focusControl(items[0] || close); else if (dir === 'up') focusControl(close); else moveFocus(tabs, dir); }
        else if (items.includes(active)) {
          if (dir === 'up' && active === items[0]) focusControl(activeTab);
          else if (dir === 'left' || dir === 'right') focusControl(activeTab);
          else if (dir === 'down' && active === items.at(-1)) focusControl(close);
          else moveFocus(items, dir);
        } else if (active === close) focusControl(dir === 'up' ? items.at(-1) || tabs[0] : tabs[0]);
        else focusControl(tabs[0]);
      } else if (fresh) {
        if (active === close) close.click();
        else if (tabs.includes(active)) {
          const selected = active.dataset.bagTab; active.click();
          focusControl([...get('bag-tabs').querySelectorAll('button')].find(t => t.dataset.bagTab === selected));
        } else if (items.includes(active)) active.click();
        else focusControl(tabs[0]);
      }
      return true;
    }
    if (this.battleMode === 'moves') {
      const panel = get('panel-move-actions'), backButton = get('btn-move-back'), moves = controlsIn(panel);
      if (dir) {
        if (document.activeElement === backButton) focusControl(moves[0]);
        else if (dir === 'up' && document.activeElement === moves[0]) focusControl(backButton);
        else focusGrid(panel, dir);
      } else if (fresh) (document.activeElement === backButton ? backButton : activeOr(moves))?.click();
      return true;
    }
    // Griglia principale: LOTTA, BORSA, POKÉMON, FUGA.
    const panel = get('panel-main-actions');
    if (dir) focusGrid(panel, dir);
    else if (fresh) activeOr(controlsIn(panel))?.click();
    return true;
  },
};
