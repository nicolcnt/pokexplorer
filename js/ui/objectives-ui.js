// Schermata degli Obiettivi dell'account.
import * as Objectives from '../systems/objectives.js';
import { keyRouter, isSpace } from './input.js';

const el = id => document.getElementById(id);
let previousFocus = null;
let onChange = () => {};
export const setChampionListener = fn => { onChange = typeof fn === 'function' ? fn : () => {}; };

export function render() {
  const value = Objectives.values();
  for (const [name, count] of [['runs', value.runs], ['catches', value.catches], ['wins', value.wins]]) {
    const target = el(`objectives-${name}`);
    if (target) target.textContent = String(count);
  }
  const status = el('objectives-cloud');
  if (status) status.textContent = `REGISTRO: ${value.status.toUpperCase()}${value.pending ? ` · ${value.pending} IN ATTESA` : ''}`;
  const list = el('objectives-quests');
  const filter = el('objectives-filter')?.value || 'all';
  const visible = value.quests.filter(quest => filter === 'all' || (filter === 'completed' ? quest.complete : quest.mode === filter));
  if (list) list.replaceChildren(...visible.map(quest => {
    const card = document.createElement('article');
    card.className = 'objective-entry' + (quest.complete ? ' done' : '');
    const text = document.createElement('div');
    text.className = 'objective-entry-text';
    const title = Object.assign(document.createElement('strong'), { textContent: `${String(quest.id).padStart(2, '0')} · ${quest.mode ? (quest.mode === "normal" ? "NORMALE · " : "NUZLOCKE · ") : ""}${quest.name}` });
    const description = Object.assign(document.createElement('p'), { textContent: quest.description });
    const progress = Object.assign(document.createElement('small'), { textContent: quest.complete ? '✓ COMPLETATO' : `${quest.progress} / ${quest.goal}` });
    const image = Object.assign(document.createElement('img'), { className: 'objective-entry-art' + (quest.complete ? '' : ' locked'), alt: '', src: quest.image, loading: 'lazy' });
    text.append(title, description, progress);
    card.append(text, image);
    return card;
  }));
  onChange();
}

export const isOpen = () => !el('objectives-overlay')?.classList.contains('hidden');
export function open() {
  const panel = el('objectives-overlay');
  if (!panel) return;
  previousFocus = document.activeElement;
  render();
  panel.classList.remove('hidden');
  el('objectives-close')?.focus();
}
export function close() {
  el('objectives-overlay')?.classList.add('hidden');
  previousFocus?.focus?.();
}

export function init() {
  el('objectives-filter')?.addEventListener('change', render);
  el('objectives-close')?.addEventListener('click', close);
  el('objectives-bottom-close')?.addEventListener('click', close);
  el('objectives-overlay')?.addEventListener('click', event => { if (event.target === el('objectives-overlay')) close(); });
  keyRouter.add('objectives', 90, event => {
    if (!isOpen()) return false;
    if (['Escape', 'Backspace'].includes(event.key)) { event.preventDefault(); close(); return true; }
    if (isSpace(event) || event.key === 'Enter') { event.preventDefault(); if (!event.repeat) document.activeElement?.click?.(); }
    return true;
  });
  window.addEventListener('pokex:objectives-changed', render);
}
