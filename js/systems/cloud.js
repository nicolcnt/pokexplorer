// Accesso con Discord tramite Supabase e salvataggio cloud dei checkpoint.
// Usa solo l'URL pubblico e la chiave "publishable": segreti e service_role restano sul server.
import * as Checkpoints from './checkpoints.js';

const SDK_URL = 'js/vendor/supabase.umd.js';
const DISCORD_AVATAR_HOSTS = ['cdn.discordapp.com', 'media.discordapp.net', 'cdn.discordapp.net'];
let client = null;
const settings = () => globalThis.POKEX_PUBLIC_CONFIG || {};

export function enabled() {
  // Aperto come file (doppio clic su index.html) Discord non può tornare alla pagina:
  // si gioca in locale e i progressi restano in questo browser.
  if (globalThis.location?.protocol === 'file:') return false;
  const { supabaseUrl, publishableKey } = settings();
  return /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(supabaseUrl || '') && typeof publishableKey === 'string' && publishableKey.trim().length > 15;
}
export const getClient = () => client;

/** URL di ritorno di OAuth: GitHub Pages serve la stessa pagina come cartella e come index.html. */
export function redirectUrl(loc = globalThis.location) {
  const local = loc?.protocol === 'http:' && /^(localhost|127\.0\.0\.1)$/.test(loc.hostname);
  if (!loc || !(loc.protocol === 'https:' || local)) throw Error('Discord login requires HTTPS or localhost; file:// is not supported');
  return loc.origin + loc.pathname.replace(/\/index\.html$/, '/');
}

export function profile(user) {
  const md = user?.user_metadata || {};
  const name = String(md.full_name || md.name || md.user_name || md.preferred_username || 'ALLENATORE').trim().slice(0, 28);
  let avatar = null;
  try {
    const url = new URL(md.avatar_url || '');
    if (url.protocol === 'https:' && DISCORD_AVATAR_HOSTS.includes(url.hostname)) avatar = url.href;
  } catch { /* avatar predefinito */ }
  return { name, avatar };
}

function loadSdk() {
  if (globalThis.supabase?.createClient) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = SDK_URL; script.async = true;
    script.onload = resolve;
    script.onerror = () => reject(Error('Supabase SDK unavailable'));
    document.head.appendChild(script);
  });
}

export async function setup() {
  if (!enabled()) return { configured: false, client: null, user: null };
  redirectUrl();
  await loadSdk();
  if (!client) {
    const { supabaseUrl, publishableKey } = settings();
    client = globalThis.supabase.createClient(supabaseUrl, publishableKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
  }
  const { data, error } = await client.auth.getUser();
  if (error && !(/Auth session missing/i.test(error.message || '') || error.name === 'AuthSessionMissingError')) throw error;
  return { configured: true, client, user: data?.user || null };
}

export async function signIn() {
  if (!client) throw Error('OAuth not initialized');
  const { error } = await client.auth.signInWithOAuth({ provider: 'discord', options: { redirectTo: redirectUrl(), scopes: 'identify' } });
  if (error) throw error;
}
export async function signOut() {
  if (!client) throw Error('OAuth not initialized');
  const { error } = await client.auth.signOut();
  if (error) throw error;
}
async function currentUser() {
  if (!client) return null;
  const { data, error } = await client.auth.getUser();
  return error ? null : data?.user || null;
}

export async function loadCloud() {
  const user = await currentUser();
  if (!user) return null;
  const { data, error } = await client.from('pokexplorer_saves').select('revision,run,updated_at').eq('user_id', user.id).maybeSingle();
  if (error) throw error;
  return data;
}

/** Scrive con controllo di revisione: non sovrascrive mai progressi più recenti di un altro dispositivo. */
export async function saveCloud(snapshot, expectedRevision) {
  const user = await currentUser();
  if (!user) throw Error('Not authenticated');
  const run = Checkpoints.validate(snapshot);
  if (expectedRevision === null) {
    const { data, error } = await client.from('pokexplorer_saves').insert({ user_id: user.id, revision: 1, run }).select('revision').single();
    if (error) throw error;
    return data.revision;
  }
  if (!Number.isSafeInteger(expectedRevision) || expectedRevision < 1) throw Error('Invalid cloud revision');
  const { data, error } = await client.from('pokexplorer_saves')
    .update({ run, revision: expectedRevision + 1, updated_at: new Date().toISOString() })
    .eq('user_id', user.id).eq('revision', expectedRevision).select('revision').maybeSingle();
  if (error) throw error;
  if (!data) throw Error('Cloud conflict: newer progress exists; no overwrite performed');
  return data.revision;
}
