"""Test end-to-end di Pokéxplorer nel browser (Playwright, Chromium).

Uso:  npm run build && python tests/e2e/run.py   (Chromium di Playwright)
      CHROME_PATH=/usr/bin/chromium python tests/e2e/run.py

Il gioco viene servito in locale; config.js è sostituito da una configurazione vuota,
quindi non c'è accesso a Supabase: i salvataggi restano nel browser di prova.
Ogni richiesta verso l'esterno fa fallire il test (il gioco deve funzionare offline)."""
import functools
import mimetypes
import base64
import hashlib
import json
import re
import http.server
import os
import socket
import socketserver
import sys
import threading
import traceback
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[2]
_s = socket.socket(); _s.bind(('127.0.0.1', 0)); PORT = _s.getsockname()[1]; _s.close()
FIXTURE = os.environ.get('POKEX_E2E_FIXTURE') == '1'
BASE = f'http://127.0.0.1:{PORT}'


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args): pass

    def handle(self):
        try: super().handle()
        except (ConnectionResetError, BrokenPipeError): pass


threading.Thread(target=lambda: socketserver.ThreadingTCPServer(('127.0.0.1', PORT), functools.partial(Quiet, directory=str(ROOT))).serve_forever(),
                 daemon=True).start()

RESULTS = []


def check(name):
    def wrap(fn):
        RESULTS.append((name, fn))
        return fn
    return wrap


def data_uri(path):
    mime = mimetypes.guess_type(path.name)[0] or 'application/octet-stream'
    return 'data:' + mime + ';base64,' + base64.b64encode(path.read_bytes()).decode('ascii')


@functools.lru_cache(maxsize=1)
def inline_images():
    return {p.relative_to(ROOT).as_posix(): data_uri(p) for p in (ROOT / 'assets').rglob('*')
            if p.suffix in ('.png', '.svg', '.gif') and p.is_file()}


@functools.lru_cache(maxsize=1)
def inline_html():
    html = (ROOT / 'index.html').read_text(encoding='utf-8')
    html = re.sub(r'<script[^>]*src="[^"]+"[^>]*></script>', '', html)
    html = re.sub(r'<link rel="icon"[^>]+>', '', html)
    def css(match):
        path = ROOT / match[1]
        text = path.read_text(encoding='utf-8')
        text = re.sub(r'url\(["\']?([^"\')]+)["\']?\)', lambda m: 'url("' + data_uri((path.parent / m[1]).resolve()) + '")' if m[1].startswith('../') and (path.parent / m[1]).is_file() else m[0], text)
        return '<style>' + text + '</style>'
    html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', css, html)
    return re.sub(r'src="(assets/[^"]+)"', lambda m: 'src="' + data_uri(ROOT / m[1]) + '"', html)


class Session:
    """Una pagina del gioco con errori e richieste esterne registrati."""

    def __init__(self, browser, width=1440, height=900, hash_='', storage=None):
        self.context = browser.new_context(viewport={'width': width, 'height': height})
        if storage and not FIXTURE:
            self.context.add_init_script(f'Object.entries({json.dumps(storage)}).forEach(([k,v])=>localStorage.setItem(k,v));')
        self.errors, self.external = [], []
        self.hash = hash_
        self.open_page(storage or {})

    def open_page(self, storage):
        self.page = self.context.new_page()
        self.page.on('pageerror', lambda e: self.errors.append(str(e)))
        self.page.on('console', lambda m: m.type == 'error' and self.errors.append(m.text))
        self.page.route('**/*', self.route)
        if FIXTURE:
            # about:blank has no secure-origin WebCrypto; use the same SHA-256 primitive for DEV tests.
            self.page.expose_function('fixtureSha256', lambda data: list(hashlib.sha256(bytes(data)).digest()))
            self.page.evaluate("""() => { if(!crypto.subtle) Object.defineProperty(crypto, 'subtle', {value:{digest:async (algorithm, bytes)=>{
                if(algorithm!=='SHA-256') throw Error('Unsupported fixture digest');
                return Uint8Array.from(await fixtureSha256([...new Uint8Array(bytes)])).buffer;
            }}}); }""")
            self.page.evaluate("([entries, hash]) => { const mem = new Map(Object.entries(entries)); Object.defineProperty(window,'localStorage',{value:{getItem:k=>mem.get(k)??null,setItem:(k,v)=>mem.set(k,String(v)),removeItem:k=>mem.delete(k), dump:()=>Object.fromEntries(mem)}}); location.hash=hash; }", [storage,self.hash])
            self.page.set_content(inline_html(), wait_until='load')
            self.page.evaluate("paths => { const prop = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype,'src'); Object.defineProperty(HTMLImageElement.prototype,'src',{ ...prop,set(v){prop.set.call(this,paths[v]||v)} }); const set=Element.prototype.setAttribute; Element.prototype.setAttribute=function(n,v){return set.call(this,n,n==='src'&&this instanceof HTMLImageElement?(paths[v]||v):v);}; const RealAudio=Audio; window.Audio=function(){return new RealAudio();}; }", inline_images())
            self.page.add_script_tag(path=str(ROOT / 'build/pokexplorer.js'))
        else:
            self.page.goto(f'{BASE}/index.html{self.hash}')
        self.page.wait_for_function('window.game', timeout=20000)
        self.page.wait_for_timeout(400)

    def reload(self):
        if FIXTURE:
            storage = self.js('localStorage.dump()')
            self.page.close()
            self.open_page(storage)
        else:
            self.page.reload()

    def route(self, r):
        url = r.request.url
        if url.endswith('/config.js'):
            return r.fulfill(body='/* test: nessun cloud */', content_type='application/javascript')
        if url.startswith(BASE + '/') and not FIXTURE:
            return r.continue_()
        self.external.append(url)
        return r.fulfill(status=404, body='')

    def js(self, code, arg=None):
        return self.page.evaluate(code, arg)

    def start_run(self, starter=1):
        p = self.page
        p.click('#btn-start-game')
        p.wait_for_selector('#briefcase-balls > *')
        p.locator('#briefcase-balls > *').nth(starter).click()
        p.click('#btn-confirm-yes')
        p.wait_for_function('game.team.length === 1 && game.gridMap.length === 10')
        p.wait_for_timeout(300)

    def battle(self, type_='wild', floor=3):
        """Avvia una lotta e attende i comandi."""
        self.js('([t, f]) => { game.floor = f; game.generateFloorDungeon(); game.startBattle(t); }', [type_, floor])
        self.wait_commands()

    def wait_commands(self, timeout=15000):
        self.page.wait_for_function(
            '() => { if (game.dialogueResolve) game.acknowledgeDialogue(); return !!document.querySelector("#panel-main-actions:not(.hidden)")?.offsetParent && !game.battleBusy; }',
            timeout=timeout, polling=150)

    def finish_dialogue(self, timeout=20000):
        self.page.wait_for_function('() => { if (game.dialogueResolve) game.acknowledgeDialogue(); return !game.isBattleVisible() && !game.battleBusy; }',
                                    timeout=timeout, polling=150)

    def unlock_dev(self):
        p = self.page
        p.click('#quick-settings-toggle')
        p.click('#dev-mode-trigger')
        p.fill('#dev-access-code', '2103')
        p.click('#dev-code-confirm')
        p.wait_for_function('game.devMode === true')

    def close(self):
        assert not self.external, f'richieste esterne: {self.external[:3]}'
        assert not self.errors, f'errori JavaScript: {self.errors[:3]}'
        self.context.close()


def checkpoint(s):
    return s.js("() => JSON.parse(localStorage.getItem('pokexplorer:checkpoint:v2:local') || 'null')")


@check('avvio offline senza errori e senza risorse esterne')
def _(b):
    s = Session(b)
    assert s.page.is_visible('#main-menu-overlay')
    assert s.page.is_visible('#dev-mode-trigger') is (not FIXTURE), 'la modalità locale e la fixture hanno origini diverse'
    assert s.page.is_disabled('#btn-continue-game')
    s.close()


@check('si gioca anche aprendo index.html come file (doppio clic)')
def _(b):
    context = b.new_context(viewport={'width': 1440, 'height': 900})
    page = context.new_page()
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: m.type == 'error' and errors.append(m.text))
    page.route('http*://**/*', lambda r: r.abort())
    page.goto((ROOT / 'index.html').as_uri())
    page.wait_for_function('window.game', timeout=20000)
    assert page.is_visible('#main-menu-overlay') and not page.is_visible('#login-gate')
    page.click('#btn-start-game')
    page.locator('#briefcase-balls > *').nth(0).click()
    page.click('#btn-confirm-yes')
    page.wait_for_function('game.team.length === 1 && game.gridMap.length === 10')
    assert page.evaluate('async () => (await document.fonts.load(\'10px "Press Start 2P"\')).length > 0'), 'font non caricato'
    assert not errors, f'errori: {errors[:3]}'
    context.close()


@check('starter: CONFERMA visibile e cliccabile a 1366×768 e su telefono')
def _(b):
    for w, h in [(1366, 768), (390, 844), (1280, 720)]:
        s = Session(b, w, h)
        s.page.click('#btn-start-game')
        s.page.locator('#briefcase-balls > *').nth(0).click()
        box = s.page.locator('#btn-confirm-yes').bounding_box()
        assert box and box['y'] >= 0 and box['y'] + box['height'] <= h, f'{w}x{h}: CONFERMA fuori schermo {box}'
        hit = s.js('([x, y]) => document.elementFromPoint(x, y)?.id', [box['x'] + box['width'] / 2, box['y'] + box['height'] / 2])
        assert hit == 'btn-confirm-yes', f'{w}x{h}: CONFERMA coperta da {hit}'
        s.page.click('#btn-confirm-yes')
        s.page.wait_for_function('game.team.length === 1')
        s.close()


@check('lotta selvatica: mossa, vittoria o cattura, ritorno alla mappa')
def _(b):
    s = Session(b)
    s.start_run()
    s.battle()
    s.page.click('#btn-act-fight')
    s.page.locator('#panel-move-actions button').first.click()
    s.page.wait_for_timeout(500)
    s.js('() => { game.enemyMon.currentHp = 1; }')
    s.wait_commands(30000)
    snap = checkpoint(s)
    assert snap and snap.get('interrupted'), 'lo stato della lotta deve essere registrato a ogni turno'
    s.close()


@check('abbandonare la lotta ricaricando non annulla le perdite')
def _(b):
    s = Session(b)
    s.start_run()
    s.battle()
    s.js('() => { game.activeMon.currentHp = 3; game.items.potion = 0; game.commitBattleState(); }')
    s.reload()
    s.page.wait_for_function('window.game')
    assert not s.page.is_disabled('#btn-continue-game')
    s.page.click('#btn-continue-game')
    s.page.click('#continue-recap-accept')
    s.page.wait_for_function('game.team.length === 1')
    state = s.js('() => [game.isBattleVisible(), game.team[0].currentHp, game.items.potion]')
    assert state == [False, 3, 0], f'stato dopo la ripresa: {state}'
    s.close()


@check('tornare al menu durante la lotta non annulla le perdite')
def _(b):
    s = Session(b)
    s.start_run()
    s.battle()
    s.js('() => { game.activeMon.currentHp = 2; }')
    s.page.click('#quick-settings-toggle')
    s.page.click('#return-main-menu-quick')
    s.page.click('#pokex-confirm-accept')
    s.page.wait_for_selector('#main-menu-overlay:not(.hidden)')
    s.page.click('#btn-continue-game')
    s.page.click('#continue-recap-accept')
    s.page.wait_for_function('game.team.length === 1')
    assert s.js('() => game.team[0].currentHp') == 2
    s.close()


@check('game over: il salvataggio resta (chiuso) e la run non si può continuare')
def _(b):
    s = Session(b)
    s.start_run()
    s.battle()
    s.js('() => { game.activeMon.currentHp = 0; void game.resolveBattleFaints(); }')
    s.page.wait_for_function('() => { if (game.dialogueResolve) game.acknowledgeDialogue(); return !document.getElementById("gameover-overlay").classList.contains("hidden"); }',
                             timeout=30000, polling=150)
    snap = checkpoint(s)
    assert snap and snap.get('ended') == 'defeat', f'checkpoint dopo il game over: {snap}'
    s.page.click('#btn-return-main-menu')
    assert s.page.is_disabled('#btn-continue-game')
    s.reload()
    s.page.wait_for_function('window.game')
    assert s.page.is_disabled('#btn-continue-game'), 'una run conclusa non deve tornare continuabile'
    s.close()


@check('DEV MODE: nascosta senza #dev, codice errato rifiutato, SKIP vince ogni lotta')
def _(b):
    s = Session(b, hash_='#dev')
    s.start_run()
    p = s.page
    p.click('#quick-settings-toggle')
    p.click('#dev-mode-trigger')
    p.fill('#dev-access-code', '0000')
    p.click('#dev-code-confirm')
    p.wait_for_function('document.getElementById("dev-code-error").textContent.length > 0')
    assert s.js('() => game.devMode') is False
    p.fill('#dev-access-code', '2103')
    p.click('#dev-code-confirm')
    p.wait_for_function('game.devMode === true')
    assert p.is_visible('#dev-skip-battle') and p.is_visible('#floor-jump-trigger')
    for kind, floor, setup in [
        ('wild', 3, ''),
        ('trainer', 7, ''),
        ('gym', 10, 'game.requestGymChallenge(); game.confirmGymChallenge(); document.getElementById("trainer-encounter-overlay").classList.add("hidden"); game.gymQueue = ["leader"];'),
        ('wild', 12, 'game.isRaidActive = true; game.raidQueueCount = 1;'),
        ('legendary', 33, ''),
    ]:
        s.js(f'() => {{ game.floor = {floor}; game.generateFloorDungeon(); {setup} game.startBattle("{kind}"); }}')
        s.wait_commands()
        p.click('#dev-skip-battle')
        print('     SKIP', kind) if os.environ.get('VERBOSE') else None
        p.wait_for_function('() => { if (game.dialogueResolve) game.acknowledgeDialogue(); '
                            'document.querySelector("#gym-leader-intro:not(.hidden) #btn-start-gym-leader")?.click(); '
                            'for (const id of ["evolution-start", "evolution-finish", "skip-new-move-btn", "evolution-choice-later"]) '
                            '{ const b = document.getElementById(id); if (b?.offsetParent && !b.disabled) b.click(); } '
                            'return !game.isBattleVisible() && !game.battleBusy; }', timeout=30000, polling=200)
        assert s.js('() => game.team.every(p => p.currentHp > 0)'), f'SKIP {kind}: la squadra non deve subire perdite'
    assert s.js('() => game.devRun') is True
    s.close()


@check('teletrasporto DEV verso un piano')
def _(b):
    s = Session(b, hash_='#dev')
    s.start_run()
    s.unlock_dev()
    s.page.click('#floor-jump-trigger')
    s.page.fill('#floor-jump-level', '42')
    s.page.click('#floor-jump-confirm')
    s.page.wait_for_function('game.floor === 42')
    s.close()


@check('testi leggibili: nessun carattere sotto gli 8 px (menu, mappa, lotta, Pokédex)')
def _(b):
    small_js = """() => [...document.querySelectorAll('body *')].filter(el => el.offsetParent && [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()))
        .map(el => [el.id || el.className || el.tagName, parseFloat(getComputedStyle(el).fontSize)]).filter(([, size]) => size < 8)"""
    for w, h in [(1366, 768), (390, 844)]:
        s = Session(b, w, h)
        found = s.js(small_js)
        s.start_run()
        found += s.js(small_js)
        s.battle()
        found += s.js(small_js)
        assert not found, f'{w}x{h}: testi troppo piccoli: {found[:6]}'
        s.close()


@check('dialoghi e schermate coprono tutta la mappa (abitanti, incontri, nuova mossa, game over)')
def _(b):
    s = Session(b)
    s.start_run()
    bad = s.js('''() => {
        const screen = document.getElementById('pokenav-screen-root').getBoundingClientRect();
        return ['npc-dialog-overlay', 'wild-encounter-overlay', 'trainer-encounter-overlay', 'learn-move-overlay', 'gameover-overlay', 'pokemart-overlay']
          .map(id => { const el = document.getElementById(id); el.classList.remove('hidden'); if (id === 'gameover-overlay') el.style.display = 'flex';
            const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); el.classList.add('hidden'); el.style.display = '';
            return [id, cs.position, Math.round(r.width) >= Math.round(screen.width) - 4 && Math.round(r.height) >= Math.round(screen.height) - 4]; })
          .filter(([, pos, covers]) => pos !== 'absolute' || !covers);
    }''')
    assert not bad, f'non coprono lo schermo: {bad}'
    s.close()


@check('AUTO DIALOGHI: abitanti e Oak avanzano da soli, le domande aspettano, la scelta resta salvata')
def _(b):
    s = Session(b)
    s.start_run()
    p = s.page
    p.click('#auto-dialogue-toggle')
    assert p.get_attribute('#auto-dialogue-toggle', 'aria-pressed') == 'true'
    s.js('''() => { game.floor = 5; game.generateFloorDungeon(); game.renderDungeon();
        const c = game.gridMap.flat().find(c => c.entity === 'npc'); c.npcEvent = 'dialogue'; game.triggerNpcEvent(c); }''')
    p.wait_for_selector('#npc-dialog-overlay:not(.hidden)')
    p.wait_for_selector('#npc-dialog-overlay.hidden', state='attached', timeout=8000)
    s.js('() => { game.floor = 75; game.generateFloorDungeon(); game.showOakIntroduction(); }')
    p.wait_for_function('game.celestialDialogStep === "question"', timeout=30000)
    p.wait_for_timeout(5000)
    assert s.js('() => game.celestialDialogStep') == 'question', 'la domanda di Oak non deve chiudersi da sola'
    s.reload()
    p = s.page
    p.wait_for_function('window.game')
    assert p.get_attribute('#auto-dialogue-toggle', 'aria-pressed') == 'true', 'la preferenza deve restare salvata'
    s.close()


@check('Bivi: 16 mappe con due uscite raggiungibili; conferma e anteprima Difficile')
def _(b):
    s = Session(b)
    s.start_run()
    forks = s.js('''() => { const floors=[]; for(let f=1; f<=80;f++){
        game.floorKind=null; game.floor=f; game.generateFloorDungeon();
        const doors=game.gridMap.flat().filter(c=>c.entity==='door'); if(doors.length!==2) continue;
        const seen=new Set(['0,0']); const queue=[[0,0]];
        for(const [x,y] of queue) for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){
          const cell=game.gridMap[y+dy]?.[x+dx], key=`${x+dx},${y+dy}`;
          if(cell && !['water','tree'].includes(cell.type) && !seen.has(key)){seen.add(key);queue.push([x+dx,y+dy]);}
        }
        if(!doors.every(c=>seen.has(`${c.x},${c.y}`))) throw Error('Uscita irraggiungibile');
        floors.push(f);
    } return floors; }''')
    assert forks == list(range(3, 80, 5)), forks
    s.js('() => { game.floor=8; game.generateFloorDungeon(); game.confirmForkExit("trainers"); }')
    s.page.wait_for_selector('#pokex-confirm-overlay:not(.hidden)')
    assert 'DIFFICILE' in s.page.text_content('#pokex-confirm-title')
    s.page.click('#pokex-confirm-accept')
    s.page.wait_for_function('game.floor === 9')
    assert 3 <= s.js('game.gridMap.flat().filter(c => c.entity === "trainer").length') <= 5
    s.js('() => { game.floor=13; game.generateFloorDungeon(); game.confirmForkExit("calm"); }')
    s.page.wait_for_selector('#pokex-confirm-overlay:not(.hidden)')
    assert 'FACILE' in s.page.text_content('#pokex-confirm-title')
    s.page.click('#pokex-confirm-cancel')
    assert s.js('game.floor') == 13
    s.js('() => { game.confirmForkExit("calm"); }')
    s.page.click('#pokex-confirm-accept')
    s.page.wait_for_function('game.floor === 14')
    assert s.js('game.gridMap.flat().filter(c => c.entity === "trainer").length') == 0
    s.close()


@check('Normale: doppio KO, soccorso di Joy e checkpoint senza Revitalizzante')
def _(b):
    s = Session(b)
    p = s.page
    p.click('#btn-start-game')
    p.click('#choose-normal')
    p.locator('#briefcase-balls > *').nth(1).click()
    p.click('#btn-confirm-yes')
    p.wait_for_function('game.team.length === 1 && game.runMode === "normal"')
    s.battle()
    s.js('() => { game.activeMon.currentHp = 0; game.enemyMon.currentHp = 0; void game.resolveBattleFaints(); }')
    p.wait_for_function('() => { if (game.dialogueResolve) game.acknowledgeDialogue(); return !game.isBattleVisible() && game.team[0].treatedFaint; }')
    assert s.js('() => [game.floor, game.team[0].currentHp === game.team[0].maxHp, game.runStats.wins, "revive" in game.items]') == [3, True, 0, False]
    s.js('() => game.closeNpcDialog()')
    s.reload()
    p = s.page
    p.click('#btn-continue-game')
    p.click('#continue-recap-accept')
    assert s.js('() => [game.runMode, game.team.length, game.team[0].treatedFaint]') == ['normal', 1, True]
    s.close()


@check('Normale e Nuzlocke: KO con riserva, Centro Pokémon e obiettivo Seconda occasione')
def _(b):
    for mode in ('normal', 'nuzlocke'):
        s = Session(b)
        p = s.page
        p.click('#btn-start-game')
        p.click('#choose-' + mode)
        p.locator('#briefcase-balls > *').nth(1).click()
        p.click('#btn-confirm-yes')
        s.battle()
        s.js('''() => { const mon=game.activeMon;
          game.team.push(mon.constructor.fromSnapshot({id:7,level:5,currentHp:20,maxHp:20,ivs:{},evs:{},moves:[]}));
          mon.currentHp=0; void game.onPlayerFainted(); }''')
        p.wait_for_function('() => { if (game.dialogueResolve) game.acknowledgeDialogue(); return game.pendingForcedSwitch; }')
        team = s.js('game.team.map(mon=>[mon.id, mon.currentHp>0])')
        assert team == ([[4, False], [7, True]] if mode == 'normal' else [[7, True]]), team
        if mode == 'normal':
            s.js('() => { game.endBattle("Fine test"); game.floor=5; game.generateFloorDungeon(); game.openPokemonCenterDialog(); }')
            p.wait_for_function('game.team[0].treatedFaint && game.team[0].currentHp > 0')
            s.js('() => game.closeNpcDialog()')
            s.battle()
            s.js('() => { game.enemyMon.currentHp=0; void game.handleBattleVictory(); }')
            s.finish_dialogue()
            p.click('#quick-settings-toggle')
            p.click('#return-main-menu-quick')
            p.click('#pokex-confirm-accept')
            p.click('#btn-view-progress')
            card = p.locator('.objective-entry').filter(has_text='Seconda occasione')
            assert 'COMPLETATO' in card.inner_text()
        s.close()


@check('Nuzlocke: ricaricare sul messaggio del colpo fatale non recupera il Pokémon')
def _(b):
    s = Session(b)
    s.start_run()
    s.battle()
    s.js('''() => { const mon=game.activeMon;
        game.team.push(mon.constructor.fromSnapshot({id:7,level:5,currentHp:20,maxHp:20,ivs:{},evs:{},moves:[]}));
        mon.currentHp=0; void game.battleText('Colpo fatale'); }''')
    assert s.js('game.dialogueResolve !== null')
    assert checkpoint(s)['game']['team'][0]['id'] == 7
    s.reload()
    s.page.click('#btn-continue-game')
    s.page.click('#continue-recap-accept')
    assert s.js('game.team.map(mon=>mon.id)') == [7]
    assert s.js('game.runStats.fallen[0].lost')
    s.close()


@check('Campione: vittoria solitaria locale, ricarica e selezione nella prossima run')
def _(b):
    s = Session(b)
    s.start_run()
    assert s.js('''() => { game.floor=80;
      game.completedGymFloors=new Set(Array.from({length:8},(_,i)=>(i+1)*10));
      game.badges=Array.from({length:8},(_,id)=>({id}));
      return game.finishKantoAdventure(); }''')
    s.reload()
    s.page.click('#btn-start-game')
    assert s.page.is_enabled('#choose-champion')
    s.page.click('#choose-champion')
    s.page.locator('#briefcase-balls > *').nth(1).click()
    s.page.click('#btn-confirm-yes')
    assert s.js('() => [game.playerGender, game.trainerFolder()]') == ['champion', 'champion']
    s.close()


@check('abitanti: quiz sui tipi con premio')
def _(b):
    s = Session(b)
    s.start_run()
    s.js('''() => { game.floor = 5; game.generateFloorDungeon(); const c = game.gridMap.flat().find(c => c.entity === 'npc');
        c.specialRole = null; c.npcEvent = 'quiz'; c.npcQuiz = { defender: 'grass', right: 'fire', wrong: 'water', first: 'right' }; game.isLocked = true; game.triggerNpcEvent(c); }''')
    s.page.wait_for_selector('#npc-actions:not(.hidden)')
    assert s.page.text_content('#npc-btn-yes').strip() == 'FUOCO'
    s.page.click('#npc-btn-yes')
    assert s.js('() => game.items.superPotion') == 1
    s.close()


@check('lotta: dopo averla vista, l’efficacia compare sul pulsante della mossa')
def _(b):
    s = Session(b)
    s.start_run()
    s.battle()
    s.js('() => { game.enemyMon.types = ["rock"]; game.enemyMon.currentHp = game.enemyMon.maxHp = 999; game.activeMon.currentHp = game.activeMon.maxHp = 999; }')
    s.page.click('#btn-act-fight')
    s.page.locator('#panel-move-actions button', has_text='Graffio').click()
    s.wait_commands(30000)
    s.page.click('#btn-act-fight')
    tag = s.page.locator('#panel-move-actions button', has_text='Graffio').locator('.move-effect')
    assert tag.count() == 1 and tag.text_content() == '×½', 'manca l’indicazione ×½'
    s.close()


@check('telefono: squadra e zaino si aprono dal basso, anche in lotta')
def _(b):
    s = Session(b, 390, 844)
    s.start_run()
    p = s.page
    assert not p.is_visible('#team-grid')
    p.click('#mobile-sheet-tabs [data-sheet="team"]')
    assert p.is_visible('#team-grid')
    p.click('#mobile-sheet-tabs [data-sheet="team"]')
    assert not p.is_visible('#team-grid')
    s.battle()
    p.click('#btn-act-bag')
    assert p.is_visible('#bag-list'), 'BORSA deve aprire lo zaino'
    p.click('#battle-close-bag')
    assert not p.is_visible('#bag-list')
    s.close()


@check('telefono: il D-pad non copre la casella di uscita')
def _(b):
    s = Session(b, 390, 844)
    s.start_run()
    overlap = s.js('''() => {
        const pad = document.getElementById('mobile-dpad').getBoundingClientRect();
        for (const row of game.gridMap) for (const c of row) c.revealed = true;
        game.renderDungeon();
        const exit = document.querySelector('#dungeon-grid-board .exit-arrow')?.closest('.grid-cell');
        if (!exit) return 'nessuna uscita';
        const r = exit.getBoundingClientRect();
        return !(r.right <= pad.left || r.left >= pad.right || r.bottom <= pad.top || r.top >= pad.bottom);
    }''')
    assert overlap is False, f'sovrapposizione D-pad/uscita: {overlap}'
    s.close()


@check('UI: assistenza e crediti in overlay senza spostare il menu, ESC restituisce il focus')
def _(b):
    s=Session(b)
    p=s.page
    box_before=p.locator('#btn-start-game').bounding_box()
    for button in ['btn-contact-support','btn-credits']:
        p.click('#'+button)
        assert p.is_visible('#menu-message')
        assert p.locator('#menu-message').evaluate('(el)=>getComputedStyle(el).position') == 'absolute'
        assert p.locator('#btn-start-game').bounding_box() == box_before
        p.keyboard.press('Escape')
        assert not p.is_visible('#menu-message')
        assert s.js('document.activeElement?.id') == button
    s.close()

@check('UI: riepilogo Continua compatto prima della ripresa, modalità, team e provenienza')
def _(b):
    s=Session(b)
    s.start_run()
    s.js('game.returnToMainMenu()')
    p=s.page
    assert p.is_visible('#main-menu-overlay')
    assert p.is_enabled('#btn-continue-game')
    p.click('#btn-continue-game')
    assert p.is_visible('#continue-recap-overlay')
    assert p.is_visible('#main-menu-overlay')
    assert 'PIANO' in p.inner_text('#continue-recap-grid')
    assert 'MEDAGLIE' in p.inner_text('#continue-recap-grid')
    assert 'NUZLOCKE' in p.inner_text('#continue-recap-grid')
    assert p.locator('#continue-recap-team .recap-mon').count()==1
    p.click('#continue-recap-cancel')
    assert p.is_visible('#main-menu-overlay')
    p.click('#btn-continue-game')
    p.click('#continue-recap-accept')
    p.wait_for_function('document.body.classList.contains("in-run")')
    assert s.js('game.team.length')==1
    assert p.is_visible('#current-run-mode')
    assert p.is_visible('#checkpoint-status')
    s.close()

@check('UI: segnaposto medaglie bloccati senza emoji né nomi, item ridotto')
def _(b):
    s=Session(b)
    s.start_run()
    assert s.js('''() => [...document.querySelectorAll('#team-grid .badge-locked-placeholder')]
       .every(el => el.textContent === '' && getComputedStyle(el).backgroundImage.includes('gradient'))''')
    assert s.js('''() => [...document.querySelectorAll('#team-grid .badge-locked-placeholder')].length''') >= 2
    assert s.js('''() => {
       const board=document.getElementById('dungeon-grid-board');
       const tile=document.createElement('div');tile.className='grid-cell';tile.style.width='100px';tile.style.height='100px';
       const icon=document.createElement('img');icon.className='grid-icon map-pickup-sprite';tile.append(icon);board.append(tile);
       const width=parseFloat(getComputedStyle(icon).width);
       const tileWidth=parseFloat(getComputedStyle(tile).width);
       tile.remove();
       return Number.isFinite(width) && Number.isFinite(tileWidth) && tileWidth > 0 &&
         width / tileWidth < .62 && width / tileWidth > .5;
    }''')
    s.close()

@check('UI: Continua e Assistenza leggibili a 320×568 e 390×844')
def _(b):
    for width,height in [(320,568),(390,844)]:
        s=Session(b,width=width,height=height)
        s.start_run()
        s.js('game.returnToMainMenu()')
        s.page.click('#btn-continue-game')
        assert s.page.is_visible('#continue-recap-card') if s.page.locator('#continue-recap-card').count() else s.page.is_visible('.continue-recap-card')
        dimensions=s.js('''() => {
          const modal=document.querySelector('.continue-recap-card').getBoundingClientRect();
          const screen=document.querySelector('#pokenav-screen-root').getBoundingClientRect();
          return [modal.x,modal.right,modal.y,modal.bottom, screen.x,screen.right,screen.y,screen.bottom];
        }''')
        assert dimensions[0]>=dimensions[4]-2 and dimensions[1]<=dimensions[5]+2, (width,height,dimensions)
        assert dimensions[2]>=dimensions[6]-2 and dimensions[3]<=dimensions[7]+2, (width,height,dimensions)
        s.page.click('#continue-recap-cancel')
        s.page.click('#btn-contact-support')
        assert s.page.is_visible('#menu-message')
        s.page.click('#menu-message-cancel')
        s.close()

@check('Eevee: anziana al 15, regalo rimandabile, poi pietra singola')
def _(b):
    s=Session(b)
    s.start_run()
    p=s.page
    assert s.js('''() => { game.floor=15;game.generateFloorDungeon();return game.gridMap.flat().filter(c=>c.specialRole==='eevee-elder').length; }''')==1
    def talk():
        s.js('''() => {const npc=game.gridMap.flat().find(c=>c.specialRole==='eevee-elder');game.isLocked=true;game.triggerNpcEvent(npc);}''')
        for _ in range(3):
            s.js('game.pendingNpcAdvance?.()')
    talk()
    assert p.is_visible('#eevee-stone-gift')
    p.click('#eevee-stone-gift-cancel')
    assert s.js('game.eeveeStoneGiftClaimed') is False
    talk()
    assert p.locator('#eevee-stone-choices button').count()==3
    p.locator('#eevee-stone-choices button').nth(1).click()
    assert p.is_visible('#pokex-confirm-overlay')
    p.click('#pokex-confirm-accept')
    p.wait_for_function('game.eeveeStoneGiftClaimed')
    assert s.js('game.items.thunderStone')==1
    assert s.js('game.items.waterStone + game.items.fireStone')==0
    assert checkpoint(s)['game']['eeveeStoneGiftClaimed'] is True
    s.js('''() => { const npc=game.gridMap.flat().find(c=>c.specialRole==='eevee-elder');game.isLocked=true;game.triggerNpcEvent(npc); }''')
    assert not p.is_visible('#eevee-stone-gift')
    s.js('game.closeNpcDialog()')
    s.js('game.returnToMainMenu()')
    s.reload()
    s.page.click('#btn-continue-game')
    s.page.click('#continue-recap-accept')
    assert s.js('game.eeveeStoneGiftClaimed') is True
    assert s.js('game.items.thunderStone') == 1
    assert s.js('game.gridMap.flat().filter(c=>c.specialRole==="eevee-elder").length') == 1
    s.close()

@check('Eevee: pietra in Rimedi, anteprima, annullamento e consumo unico')
def _(b):
    s=Session(b)
    s.start_run()
    p=s.page
    s.js('''() => { game.team[0].id=133;game.team[0].name='EEVEE';game.items.fireStone=1;game.renderSidebar(); }''')
    p.locator('.bag-item').filter(has_text='Pietrafocaia').click()
    p.locator('#team-grid button:not(:disabled)').first.click()
    assert p.is_visible('#eevee-stone-evolution')
    p.click('#eevee-evolution-cancel')
    assert s.js('game.items.fireStone')==1
    assert s.js('game.team[0].id')==133
    p.locator('#team-grid button:not(:disabled)').first.click()
    p.click('#eevee-evolution-accept')
    p.wait_for_function('game.team[0].id === 136')
    assert s.js('game.items.fireStone')==0
    assert checkpoint(s)['game']['items']['fireStone']==0
    p.click('#evolution-start')
    p.wait_for_selector('#evolution-finish:not(.hidden)')
    p.click('#evolution-finish')
    s.close()

@check('Eevee: l’anziana riconosce Eevee nella squadra')
def _(b):
    s=Session(b)
    s.start_run()
    s.js('''() => {game.team[0].id=133;game.team[0].name='EEVEE';game.floor=15;game.generateFloorDungeon();const npc=game.gridMap.flat().find(c=>c.specialRole==='eevee-elder');game.isLocked=true;game.triggerNpcEvent(npc);}''')
    assert 'Eevee' in s.page.inner_text('#npc-speech-text')
    for _ in range(3): s.js('game.pendingNpcAdvance?.()')
    assert s.page.is_visible('#eevee-stone-gift')
    s.page.click('#eevee-stone-gift-cancel')
    assert s.js('game.eeveeStoneGiftClaimed') is False
    s.close()

@check('DEV Pokédex: 151 e tutte le varianti in sola anteprima')
def _(b):
    s=Session(b,hash_='#dev')
    s.start_run()
    s.unlock_dev()
    s.page.click('#btn-open-pokedex')
    assert 'CATTURATI 151/151' in s.page.inner_text('#dex-counts')
    assert 'DEV MODE' in s.page.inner_text('#dex-cloud-status')
    s.page.click('#dex-close')
    s.reload()
    assert '151 / 151' not in s.page.inner_text('#dex-sidebar-count')
    s.close()


def main():
    only = sys.argv[1:]
    failed = 0
    passed = 0
    skipped = 0
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, executable_path=os.environ.get('CHROME_PATH') or None, args=['--no-sandbox'])
        for name, fn in RESULTS:
            if only and not any(o in name for o in only):
                continue
            if FIXTURE and 'doppio clic' in name:
                skipped += 1
                print(f'SKIP {name} (fixture inline)')
                continue
            try:
                fn(browser)
                passed += 1
                print(f'ok   {name}')
            except Exception as e:  # noqa: BLE001 - riporta ogni errore come fallimento del test
                failed += 1
                print(f'FAIL {name}\n     {e}')
                if os.environ.get('VERBOSE'):
                    traceback.print_exc()
        browser.close()
    print(f'\n{passed} superati, {failed} falliti, {skipped} saltati')
    sys.exit(1 if failed else 0)


if __name__ == '__main__':
    main()
