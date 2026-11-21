// Efficacia dei tipi già vista dal giocatore: dopo aver usato una mossa di un tipo contro
// una combinazione di tipi, il menu LOTTA mostra ×2, ×½ o ×0 per quella combinazione.
// È conoscenza del giocatore, quindi vale per tutte le run in questo browser.
const KEY = 'pokexplorer:known-matchups';
const MAX = 3000;
let known = null;

function load() {
  if (known) return known;
  try { known = new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch { known = new Set(); }
  return known;
}
const keyOf = (moveType, defenderTypes) => `${moveType}>${[...defenderTypes].sort().join('/')}`;

export function learn(moveType, defenderTypes) {
  const set = load(), key = keyOf(moveType, defenderTypes);
  if (set.has(key)) return false;
  set.add(key);
  try { localStorage.setItem(KEY, JSON.stringify([...set].slice(-MAX))); } catch { /* memoria non disponibile */ }
  return true;
}
export const knows = (moveType, defenderTypes) => load().has(keyOf(moveType, defenderTypes));

/** Etichetta breve per un moltiplicatore di efficacia (vuota per ×1). */
export function effectLabel(multiplier) {
  if (multiplier === 0) return '×0';
  if (multiplier >= 4) return '×4';
  if (multiplier >= 2) return '×2';
  if (multiplier <= 0.25) return '×¼';
  if (multiplier < 1) return '×½';
  return '';
}
