// Pannello di conferma del gioco: sostituisce confirm()/alert() del browser.
import { keyRouter, trapTab } from './input.js';

let pending = null;
const el = id => document.getElementById(id);

export function close(value = false) {
  if (!pending) return;
  const previous = pending;
  pending = null;
  el('pokex-confirm-overlay')?.classList.add('hidden');
  const accept = el('pokex-confirm-accept'), cancel = el('pokex-confirm-cancel');
  if (accept) accept.onclick = null;
  if (cancel) cancel.onclick = null;
  previous.removeKeys();
  try {
    const target = previous.focus?.isConnected && !previous.focus.closest('.hidden') ? previous.focus : el('quick-settings-toggle');
    target?.focus?.();
  } catch { /* elemento rimosso */ }
  previous.resolve(Boolean(value));
}

function onKey(event) {
  const accept = el('pokex-confirm-accept'), cancel = el('pokex-confirm-cancel');
  if (event.key === 'Escape') { event.preventDefault(); close(false); return true; }
  if (['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(event.key)) {
    event.preventDefault();
    (event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? cancel : accept)?.focus();
    return true;
  }
  trapTab(event, el('pokex-confirm-overlay'));
  // Nessun tasto raggiunge mappa, lotta o dialoghi sottostanti.
  return true;
}

export function confirm({ title = 'CONFERMA', message = '', accept = 'CONFERMA', cancel = 'ANNULLA', notice = false } = {}) {
  const overlay = el('pokex-confirm-overlay');
  if (!overlay) return Promise.resolve(false);
  if (pending) close(false);
  el('pokex-confirm-title').textContent = String(title);
  el('pokex-confirm-message').textContent = String(message);
  el('pokex-confirm-accept').textContent = String(accept);
  el('pokex-confirm-cancel').textContent = String(cancel);
  el('pokex-confirm-cancel').classList.toggle('hidden', Boolean(notice));
  overlay.classList.remove('hidden');
  const focus = document.activeElement;
  return new Promise(resolve => {
    pending = { resolve, focus, removeKeys: keyRouter.push('confirm-dialog', onKey) };
    el('pokex-confirm-accept').onclick = () => close(true);
    el('pokex-confirm-cancel').onclick = () => close(false);
    overlay.onclick = event => { if (event.target === overlay) close(false); };
    (notice ? el('pokex-confirm-accept') : el('pokex-confirm-cancel')).focus();
  });
}
export const alert = options => confirm({ ...options, notice: true, accept: 'CHIUDI' });
export const isOpen = () => Boolean(pending);
