// Avvio: carica i dati di gioco, gestisce l'accesso (Discord o Utente) e la
// sincronizzazione dei salvataggi con il cloud, poi crea il motore.
import { loadGameData } from './core/data.js';
import { GameEngine } from './engine.js';
import { LocalBackgroundMusic } from './systems/music.js';
import * as Checkpoints from './systems/checkpoints.js';
import * as Cloud from './systems/cloud.js';
import * as Dex from './systems/pokedex.js';
import * as Objectives from './systems/objectives.js';
import * as Dialogs from './ui/dialogs.js';
import * as DexUI from './ui/pokedex-ui.js';
import * as ObjectivesUI from './ui/objectives-ui.js';

const $ = id => document.getElementById(id);
let game = null;
function setCheckpointIndicator(text) { const indicator=$('checkpoint-status'); if(indicator) indicator.textContent=text; }


function bootGame() {
  if (game) return game;
  game = new GameEngine({ music: new LocalBackgroundMusic() });
  window.game = game; // utile per il debug e i test end-to-end
  const notDevRun = () => !game.devRun;
  Dex.setRecordingGuard(notDevRun);
  Objectives.setRecordingGuard(notDevRun);
  DexUI.setOpenGuard(() => {
    const inMenu = !$('main-menu-overlay').classList.contains('hidden');
    return inMenu || !(game.isLocked || game.battleBusy || game.dialogueResolve || game.pendingItemTarget || game.isRaidActive || game.isBattleVisible());
  });
  ObjectivesUI.setChampionListener(() => game.updateChampionChoice());
  DexUI.init();
  ObjectivesUI.init();
  game.renderSidebar();
  setCheckpointIndicator('NESSUNA RUN IN CORSO');
  window.addEventListener('pokex:checkpoint', () => {
    if(game)game._checkpointSource=Cloud.enabled() ? 'LOCALE · CLOUD IN ATTESA' : 'LOCALE';
    setCheckpointIndicator(Cloud.enabled() ? 'SALVATO IN LOCALE · CLOUD IN ATTESA' : 'SALVATO IN LOCALE');
  });
  return game;
}

function setProfile({ name, avatar }) {
  $('trainer-discord-name').textContent = name;
  const img = $('trainer-discord-avatar');
  img.onerror = () => { img.onerror = null; img.src = 'assets/sprites/ui/trainer-avatar-fallback.svg'; };
  img.src = avatar || 'assets/sprites/ui/trainer-avatar-fallback.svg';
}

function setLoginStatus(text, details = '') {
  $('login-gate-status').textContent = text;
  const box = $('login-gate-error-details');
  box.classList.toggle('hidden', !details);
  box.open = false;
  $('login-gate-error-code').textContent = details;
}

function enterGuestMode() {
  // Prima di creare il motore: la modalità UTENTE non legge mai i salvataggi di altri.
  Checkpoints.setGuestMode(true);
  Dex.setOwner('guest', { guestMode: true });
  Objectives.setOwner('guest', { guestMode: true });
  const engine = bootGame();
  setProfile({ name: 'UTENTE', avatar: null });
  engine.updateContinueButton();
  setCheckpointIndicator('UTENTE · PROGRESSI TEMPORANEI');
  $('login-gate').classList.add('hidden');
}

/** Allinea checkpoint locale e cloud. Restituisce la revisione cloud (o null). */
async function reconcileCloud() {
  const remote = await Cloud.loadCloud();
  const local = Checkpoints.loadRaw();
  let remoteRun = null;
  try { remoteRun = remote?.run ? Checkpoints.validate(remote.run) : null; } catch { remoteRun = null; }
  let upload = Boolean(local && !remoteRun);
  let source = local ? 'LOCALE' : remoteRun ? 'CLOUD' : 'NESSUNO';
  if (remoteRun && !local) { Checkpoints.save(remoteRun); source = 'CLOUD'; }
  else if (remoteRun && local && JSON.stringify(remoteRun) !== JSON.stringify(local)) {
    if (remoteRun.runId === local.runId) {
      // Stessa run: una run conclusa non torna mai attiva; altrimenti vince la più recente.
      const newest = Date.parse(local.createdAt) >= Date.parse(remoteRun.createdAt) ? local : remoteRun;
      const pick = local.ended ? local : remoteRun.ended ? remoteRun : newest;
      if (pick === remoteRun) { Checkpoints.save(remoteRun); source='CLOUD'; } else { upload = true; source='LOCALE'; }
    } else {
      const useCloud = await Dialogs.confirm({
        title: 'DUE PARTITE DIVERSE',
        message: `Su Discord: ${Checkpoints.describe(remoteRun)}. Su questo dispositivo: ${Checkpoints.describe(local)}. Quale vuoi tenere? L’altra verrà sostituita.`,
        accept: 'USA DISCORD', cancel: 'USA QUESTO DISPOSITIVO',
      });
      if (useCloud) { Checkpoints.save(remoteRun);source='CLOUD'; } else { upload = true;source='LOCALE'; }
    }
  }
  if (remoteRun && local && JSON.stringify(remoteRun) === JSON.stringify(local)) source='LOCALE + CLOUD';
  return { revision: remote?.revision ?? null, upload, source };
}

function installCloudSync(initialRevision) {
  let revision = initialRevision, busy = false, enabled = true, timer = null;
  const sync = async () => {
    if (!enabled || busy) return;
    const saved = Checkpoints.loadRaw();
    if (!saved) return;
    busy = true;
    try { revision = await Cloud.saveCloud(saved, revision); if(game)game._checkpointSource='LOCALE + CLOUD';setCheckpointIndicator('SALVATAGGIO CLOUD SINCRONIZZATO'); }
    catch (error) {
      enabled = false;
      console.warn('Sincronizzazione cloud sospesa (nessuna sovrascrittura):', error);
      $('save-status').textContent = 'SINCRONIZZAZIONE CLOUD SOSPESA: RICARICA LA PAGINA';
      $('save-status').dataset.syncError = '1'; $('save-status').classList.remove('hidden');
      setCheckpointIndicator('CLOUD · ERRORE (RIPROVA DOPO IL RIAVVIO)');
    } finally { busy = false; }
  };
  window.addEventListener('pokex:checkpoint', () => {
    if (!enabled) return;
    clearTimeout(timer);
    // Durante una lotta si salva in locale a ogni turno; il cloud si aggiorna nelle pause.
    timer = setTimeout(sync, Checkpoints.loadRaw()?.interrupted ? 8000 : 1100);
  });
  window.addEventListener('pagehide', () => { if (timer) { clearTimeout(timer); sync(); } });
  return sync;
}

async function signedIn(user) {
  if (typeof user.id !== 'string' || !/^[0-9a-f-]{36}$/i.test(user.id)) throw Error('Invalid Supabase account identifier');
  Checkpoints.setGuestMode(false);
  Checkpoints.setUser(user.id);
  Dex.setOwner(user.id);
  Objectives.setOwner(user.id);
  const engine = bootGame();
  setProfile(Cloud.profile(user));
  $('login-gate').classList.add('hidden');
  Dex.initCloud(Cloud.getClient()).catch(error => console.warn('Pokédex cloud non disponibile:', error));
  Objectives.initCloud(Cloud.getClient()).catch(error => console.warn('Obiettivi cloud non disponibili:', error));
  const logout = $('logout-discord-btn');
  logout.classList.remove('hidden');
  logout.onclick = async () => {
    if (!await Dialogs.confirm({ title: 'ESCI DA DISCORD?', message: 'I progressi salvati su questo browser restano disponibili.', accept: 'ESCI', cancel: 'ANNULLA' })) return;
    logout.disabled = true;
    try { await Cloud.signOut(); window.location.reload(); }
    catch (error) { logout.disabled = false; Dialogs.alert({ title: 'USCITA NON RIUSCITA', message: String(error.message || error).slice(0, 110) }); }
  };
  try {
    const { revision, upload, source } = await reconcileCloud();
    engine._checkpointSource=source;
    const sync = installCloudSync(revision);
    if (upload) await sync();
  } catch (error) { console.warn('Ripristino cloud non disponibile', error); }
  engine.updateContinueButton();
  if ($('save-status')?.dataset.syncError !== '1') setCheckpointIndicator('CLOUD · CONNESSO');
  Objectives.importCheckpoint(Checkpoints.load());
}

async function start() {
  const gate = $('login-gate'), login = $('login-discord-btn'), guest = $('login-guest-btn');
  try { await loadGameData(); }
  catch (error) {
    $('boot-status').textContent = 'Impossibile caricare i dati di gioco. Ricarica la pagina.';
    console.error(error);
    return;
  }
  $('boot-status')?.remove();
  guest.onclick = () => { guest.disabled = true; enterGuestMode(); };
  if (!Cloud.enabled()) {
    // Anteprima locale senza account: i progressi restano su questo browser.
    Dex.setOwner('local'); Objectives.setOwner('local');
    bootGame();
    setProfile({ name: 'ALLENATORE LOCALE', avatar: null });
    return;
  }
  gate.classList.remove('hidden');
  login.disabled = true;
  setLoginStatus('Verifica della sessione Discord…');
  try {
    const { user } = await Cloud.setup();
    if (guest.disabled) return;
    if (user) { await signedIn(user); return; }
    setLoginStatus('Scegli come iniziare la tua avventura.');
    login.disabled = false;
    login.onclick = async () => {
      login.disabled = true;
      setLoginStatus('Reindirizzamento a Discord…');
      try { await Cloud.signIn(); }
      catch (error) { setLoginStatus('Accesso non riuscito. Riprova oppure continua come Utente.', String(error.message || error).slice(0, 250)); login.disabled = false; }
    };
  } catch (error) {
    if (guest.disabled) return;
    setLoginStatus('Accesso non disponibile al momento. Puoi continuare come Utente.', String(error.message || error).slice(0, 250));
    login.disabled = false;
    login.textContent = 'RIPROVA CONNESSIONE';
    login.onclick = () => window.location.reload();
  }
}

start();
