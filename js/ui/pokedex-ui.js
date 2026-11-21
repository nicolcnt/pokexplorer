// Pokédex di Kanto (RotomDex): elenco, ricerca, filtri, scheda, varianti, habitat e diario.
// Nessuno spoiler: nomi, tipi e varianti compaiono solo dopo averli scoperti.
import * as Dex from '../systems/pokedex.js';
import { speciesData, pokemonSprite } from '../core/data.js';
import { typeName } from '../core/types.js';
import { STAT_LABELS_IT } from '../core/stats.js';
import { evolutionFamily } from '../core/constants.js';
import { keyRouter, trapTab } from './input.js';

const el = id => document.getElementById(id);
const make = (tag, className = '', text) => { const n = document.createElement(tag); if (className) n.className = className; if (text != null) n.textContent = String(text); return n; };
const LABELS = { seen: 'AVVISTATO', caught: 'CATTURATO', unknown: 'NON SCOPERTO', genderless: 'SENZA SESSO', male: 'MASCHIO ♂', female: 'FEMMINA ♀', normal: 'NORMALE', shiny: 'SHINY ✨' };
const HABITATS = { cave: 'Grotta', forest: 'Foresta', grassland: 'Prateria', mountain: 'Montagna', rare: 'Raro', 'rough-terrain': 'Terreno roccioso', sea: 'Mare', urban: 'Città', 'waters-edge': 'Riva' };
let active = 25, tab = 'scheda', previousFocus = null, toastTimer = null;
const discoveries = [];
let canOpen = () => true;
export const setOpenGuard = fn => { canOpen = typeof fn === 'function' ? fn : () => true; };

const name = id => speciesData(id)?.name || '?????';
export const isOpen = () => Boolean(el('pokedex-overlay')) && !el('pokedex-overlay').classList.contains('hidden');

function showDiscovery() {
  if (toastTimer || !discoveries.length) return;
  if (!el('overlay-battle')?.classList.contains('hidden') || !el('starter-scene-overlay')?.classList.contains('hidden') || !el('main-menu-overlay')?.classList.contains('hidden') || isOpen()) return;
  const event = discoveries.shift(), toast = el('dex-discovery-toast');
  if (!toast) return;
  toast.classList.toggle('shiny', event.shiny === true);
  toast.textContent = `${event.shiny ? '✨ ' : ''}NUOVA VARIANTE: ${name(event.species_id)} · ${LABELS[event.sex] || event.sex} · ${event.caught ? LABELS.caught : LABELS.seen}`;
  toast.classList.remove('hidden');
  toastTimer = setTimeout(() => { toastTimer = null; toast.classList.add('hidden'); showDiscovery(); }, 3000);
}

function status() {
  const s = Dex.state();
  el('dex-cloud-status').textContent = s.preview ? 'DEV MODE · ANTEPRIMA COMPLETA (NON SALVATA)' : s.guest ? 'UTENTE · TEMPORANEO' : s.owner === 'local' ? 'LOCALE · SENZA CLOUD'
    : s.syncStatus === 'synchronized' ? '☁ SINCRONIZZATO' : s.syncStatus === 'error' ? '☁ SYNC NON DISPONIBILE' : `☁ IN ATTESA${s.pending ? ` (${s.pending})` : ''}`;
  if (s.lastError) el('dex-cloud-status').title = s.lastError;
  const count = Dex.counts();
  el('dex-counts').textContent = `VISTI ${count.seen}/151 · CATTURATI ${count.caught}/151`;
  const sidebar = el('dex-sidebar-count');
  if (sidebar) sidebar.textContent = `${count.caught} / 151`;
}

function renderList() {
  const list = el('dex-species-list');
  const query = el('dex-search').value.toLowerCase().trim();
  const state = el('dex-filter-status').value, type = el('dex-filter-type').value;
  const rows = [];
  for (let id = 1; id <= 151; id++) {
    const row = Dex.getSpecies(id), caught = Boolean(row?.first_caught_at);
    if ((state === 'caught' && !caught) || (state === 'seen' && !row) || (state === 'missing' && row)) continue;
    const label = row ? name(id) : '?????';
    if (query && !String(id).padStart(3, '0').includes(query) && !label.toLowerCase().includes(query)) continue;
    if (type !== 'all' && (!row || !speciesData(id).types.includes(type))) continue;
    const button = make('button', `dex-list-entry${id === active ? ' active' : ''}${caught ? ' caught' : ''}`);
    button.type = 'button';
    button.append(make('span', 'dex-list-number', String(id).padStart(3, '0')), make('span', 'dex-list-name', label), make('span', 'dex-list-state', row ? (caught ? '●' : '◉') : '·'));
    button.setAttribute('aria-label', `#${id} ${label} ${row ? (caught ? LABELS.caught : LABELS.seen) : LABELS.unknown}`);
    button.onclick = () => { active = id; tab = 'scheda'; render(); };
    rows.push(button);
  }
  if (!rows.length) rows.push(make('p', 'dex-muted', 'Nessun Pokémon corrisponde ai filtri.'));
  list.replaceChildren(...rows);
}

function tabContent(id, record) {
  const area = el('dex-tab-content');
  area.replaceChildren();
  if (!record) { area.append(make('p', 'dex-muted', 'Questo Pokémon non è ancora stato scoperto.')); return; }
  const species = speciesData(id), caught = Boolean(record.first_caught_at);
  if (tab === 'varianti') {
    const variants = Dex.getVariants(id).sort((a, b) => (Number(a.shiny) - Number(b.shiny)) || a.sex.localeCompare(b.sex));
    if (!variants.length) { area.append(make('p', 'dex-muted', 'Nessuna variante registrata.')); return; }
    const grid = make('div', 'dex-variants');
    for (const v of variants) {
      const item = make('div', 'dex-variant');
      item.append(Object.assign(make('img', 'dex-variant-img'), { src: pokemonSprite(id, { shiny: v.shiny, gender: v.sex }), alt: '', loading: 'lazy' }),
        make('strong', '', `${LABELS[v.sex]} · ${v.shiny ? LABELS.shiny : LABELS.normal}`), make('small', '', v.first_caught_at ? LABELS.caught : LABELS.seen));
      grid.append(item);
    }
    area.append(grid);
    return;
  }
  if (tab === 'diario') {
    for (const [label, date, context] of [[LABELS.seen, record.first_seen_at, record.first_seen_context], [LABELS.caught, record.first_caught_at, record.first_caught_context]]) {
      if (!date) continue;
      const card = make('div', 'dex-journal-item');
      card.append(make('strong', '', label), make('small', '', new Date(date).toLocaleString('it-IT')), make('p', '', context || '—'));
      area.append(card);
    }
    return;
  }
  if (tab === 'habitat') {
    area.append(make('h3', '', 'HABITAT'), make('p', '', HABITATS[species.habitat] || 'Non specificato'));
    if (record.first_seen_context) area.append(make('p', 'dex-muted', `Primo incontro: ${record.first_seen_context}`));
    return;
  }
  const facts = make('div', 'dex-facts');
  for (const [k, v] of [['ALTEZZA', `${species.height / 10} m`], ['PESO', `${species.weight / 10} kg`]]) {
    const box = make('div'); box.append(make('span', '', k), make('strong', '', v)); facts.append(box);
  }
  area.append(facts);
  if (!caught) { area.append(make('p', 'dex-muted', 'Cattura questa specie per sbloccare la scheda completa.')); return; }
  if (species.flavor) area.append(make('p', 'dex-flavor', species.flavor));
  const stats = make('div', 'dex-stat-list');
  for (const [key, value] of Object.entries(species.stats)) { const r = make('div'); r.append(make('span', '', STAT_LABELS_IT[key] || key), make('strong', '', value)); stats.append(r); }
  area.append(stats);
  // Solo i membri della famiglia già scoperti: niente spoiler sulle evoluzioni.
  const unlocked = evolutionFamily(id).filter(number => Dex.getSpecies(number));
  if (unlocked.length > 1) {
    const line = make('div', 'dex-evolution-line');
    for (const number of unlocked) {
      const button = make('button', 'dex-evo-entry', name(number));
      button.type = 'button';
      button.onclick = () => { active = number; tab = 'scheda'; render(); };
      line.append(button);
    }
    area.append(make('h3', 'dex-evo-title', 'EVOLUZIONI SCOPERTE'), line);
  }
}

function renderDetail() {
  const id = active, row = Dex.getSpecies(id), variants = Dex.getVariants(id);
  el('dex-detail-num').textContent = `#${String(id).padStart(3, '0')}`;
  el('dex-detail-name').textContent = row ? name(id) : '?????';
  el('dex-detail-state').textContent = row ? (row.first_caught_at ? LABELS.caught : LABELS.seen) : LABELS.unknown;
  const img = el('dex-detail-sprite');
  img.hidden = !row;
  img.src = row ? pokemonSprite(id, variants[0] ? { shiny: variants[0].shiny, gender: variants[0].sex } : {}) : 'assets/sprites/ui/pokemon-placeholder.svg';
  el('dex-detail-types').replaceChildren(...(row ? speciesData(id).types.map(t => make('span', `dex-type type-${t}`, typeName(t))) : []));
  for (const b of document.querySelectorAll('[data-dex-tab]')) {
    const on = b.dataset.dexTab === tab;
    b.classList.toggle('active', on); b.setAttribute('aria-selected', String(on));
  }
  tabContent(id, row);
}

export function render() { status(); renderList(); renderDetail(); }

export function open() {
  if (!canOpen()) return;
  previousFocus = document.activeElement;
  el('pokedex-overlay').classList.remove('hidden');
  if (!Dex.getSpecies(active)) { const first = Dex.entries().species[0]; if (first) active = Number(first.species_id); }
  render();
  el('dex-search').focus();
}
export function close() { el('pokedex-overlay')?.classList.add('hidden'); previousFocus?.focus?.(); showDiscovery(); }

export function init() {
  if (!el('pokedex-overlay')) return;
  el('btn-open-pokedex')?.addEventListener('click', open);
  el('btn-menu-pokedex')?.addEventListener('click', open);
  el('dex-close')?.addEventListener('click', close);
  el('pokedex-overlay').addEventListener('click', e => { if (e.target === el('pokedex-overlay')) close(); });
  el('dex-search').addEventListener('input', renderList);
  el('dex-filter-status').addEventListener('change', renderList);
  el('dex-filter-type').addEventListener('change', renderList);
  for (const b of document.querySelectorAll('[data-dex-tab]')) b.addEventListener('click', () => { tab = b.dataset.dexTab; renderDetail(); });
  keyRouter.add('pokedex', 85, e => {
    if (!isOpen()) return false;
    if (e.key === 'Escape') { e.preventDefault(); close(); return true; }
    trapTab(e, el('pokedex-overlay'), 'button:not(:disabled),input,select');
    return true;
  });
  window.addEventListener('pokex:dex-changed', () => { status(); if (isOpen()) render(); });
  window.addEventListener('pokex:dex-discovery', event => { discoveries.push(event.detail); if (discoveries.length > 8) discoveries.shift(); showDiscovery(); });
  window.addEventListener('pokex:dex-battle-ended', () => setTimeout(showDiscovery, 400));
  status();
}
