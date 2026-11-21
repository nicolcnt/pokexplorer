// Un unico ascoltatore della tastiera per tutto il gioco.
// - push(): un livello temporaneo (finestra modale, avviso) che ha la precedenza su tutto;
// - add(): gestori permanenti, valutati per priorità decrescente.
// Un gestore restituisce true quando ha consumato il tasto: gli altri non lo ricevono.
class KeyRouter {
  constructor() {
    this.layers = [];
    this.handlers = [];
    this.installed = false;
  }
  push(name, handler) {
    const layer = { name, handler };
    this.layers.push(layer);
    return () => { this.layers = this.layers.filter(l => l !== layer); };
  }
  add(name, priority, handler) {
    this.handlers = this.handlers.filter(h => h.name !== name);
    this.handlers.push({ name, priority, handler });
    this.handlers.sort((a, b) => b.priority - a.priority);
  }
  dispatch(event) {
    for (const layer of [...this.layers].reverse()) if (layer.handler(event)) return true;
    for (const { handler } of this.handlers) if (handler(event)) return true;
    return false;
  }
  install(target = globalThis) {
    if (this.installed || !target?.addEventListener) return;
    this.installed = true;
    target.addEventListener('keydown', event => this.dispatch(event), true);
  }
}
export const keyRouter = new KeyRouter();

export const DIRECTION_KEYS = Object.freeze({
  w: 'up', arrowup: 'up', s: 'down', arrowdown: 'down', a: 'left', arrowleft: 'left', d: 'right', arrowright: 'right',
});
export const keyDirection = event => DIRECTION_KEYS[String(event.key || '').toLowerCase()] || null;
export const isSpace = event => event.code === 'Space' || event.key === ' ';
export const isBack = event => event.key === 'Escape' || event.key === 'Backspace';
export const isTyping = event => Boolean(event.target?.closest?.('input,textarea,select,[contenteditable]'));
export const isShown = element => Boolean(element) && !element.classList.contains('hidden') && !element.hidden;

export function visibleControl(el) {
  if (!el || !el.isConnected || el.disabled || el.closest('.hidden')) return false;
  const style = getComputedStyle(el);
  return style.display !== 'none' && style.visibility !== 'hidden';
}
export const controlsIn = (root, selector = 'button:not(:disabled)') => root ? [...root.querySelectorAll(selector)].filter(visibleControl) : [];
export function focusControl(el) {
  if (el) { el.focus({ preventScroll: true }); el.scrollIntoView?.({ block: 'nearest', inline: 'nearest' }); }
  return el;
}
/** Sposta il focus in una lista di controlli (cols = colonne della griglia). */
export function moveFocus(items, dir, cols = 1) {
  if (!items.length) return;
  const index = items.indexOf(document.activeElement);
  const step = dir === 'left' ? -1 : dir === 'right' ? 1 : dir === 'up' ? -cols : cols;
  focusControl(items[index < 0 ? 0 : Math.max(0, Math.min(items.length - 1, index + step))]);
}
/** Trappola del focus per Tab dentro una finestra modale. */
export function trapTab(event, container, selector = 'input:not(:disabled),button:not(:disabled):not(.hidden)') {
  if (event.key !== 'Tab') return false;
  const items = controlsIn(container, selector);
  if (!items.length) return true;
  const first = items[0], last = items.at(-1);
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  return true;
}
