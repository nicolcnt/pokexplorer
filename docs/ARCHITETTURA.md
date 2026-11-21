# Architettura di Pokéxplorer

Pokéxplorer è un sito statico. Il codice è scritto come moduli JavaScript (ES modules) in `js/`;
`tools/build.mjs` (esbuild) li unisce, insieme ai dati di `data/`, in un solo script classico,
`build/pokexplorer.js`, che è quello caricato da `index.html`. Così il gioco funziona sia online sia
aprendo `index.html` con un doppio clic: da file il browser blocca moduli ES, richieste JSON e font esterni.
Tutto ciò che serve per giocare è nella cartella del progetto; l’unico servizio di rete è Supabase, usato
solo per l’accesso con Discord e i salvataggi nel cloud (non disponibile aprendo il gioco come file:
in quel caso si gioca in locale e i progressi restano nel browser).

## Cartelle

```
index.html            pagina del gioco (solo struttura, nessuno stile inline)
build/pokexplorer.js  pacchetto generato con npm run build: non modificarlo a mano
privacy.html          informativa sui dati
config.js             chiavi PUBBLICHE di Supabase (vedi config.example.js)
css/                  fogli di stile per area (vedi sotto)
js/
  main.js             avvio: dati di gioco → accesso → sincronizzazione cloud → motore
  engine.js           GameEngine, il coordinatore della partita
  core/               regole pure, senza DOM: dati, tipi, statistiche, Pokémon, abilità, costanti
  systems/            stato e servizi: run, checkpoint, cloud, Pokédex, obiettivi, musica, DEV MODE
  world/              mappa: generazione dei piani, movimento, disegno, città, palestre, Grotta Celeste
  battle/             lotta: flusso, mosse, interfaccia, strumenti e cattura, tastiera
  ui/                 interfaccia: comandi, tastiera, finestre di conferma, menu, pannelli laterali, Pokédex
  vendor/             supabase-js (copia locale, licenza MIT)
data/                 pokemon.json, moves.json, abilities.json (generati da PokéAPI)
assets/               audio (WebM/Opus), sfondi (WebP), sprite, font
sql/                  migrazioni Supabase (tabelle e regole di accesso)
tests/                unit/ (node --test) ed e2e/ (Playwright)
tools/                build.mjs (pacchetto JS) e build-data.py (dati e sprite dei Pokémon)
docs/                 questa documentazione e le immagini del README
```

## Il motore

`GameEngine` (`js/engine.js`) contiene lo stato della partita e pochi metodi trasversali. Le funzioni vere
e proprie stanno nei moduli tematici: ognuno esporta un oggetto di metodi (`flowMethods`, `townMethods`, …)
che `engine.js` installa sul prototipo con `Object.assign`. I metodi condividono lo stesso `this`, quindi
un modulo può chiamare i metodi di un altro senza import incrociati.

Lo stato di una run nasce in un solo posto, `createRunState()` in `js/systems/run-state.js`: iniziare una
nuova avventura, tornare al menu e caricare un salvataggio passano tutti da `resetRunState()`, così nessun
campo resta “sporco” dalla run precedente.

Le regole di gioco in `js/core/` non toccano il DOM e sono coperte dai test unitari.

## Dati di gioco

`js/core/data.js` importa i tre file JSON di `data/` (incorporati nel pacchetto) e offre funzioni sincrone
(`speciesData`, `moveData`, `abilityData`, `pokemonSprite`). Non ci sono chiamate a PokéAPI durante il gioco.
Per rigenerare i dati: vedi `docs/SVILUPPO.md`.

Le regole di lotta seguono le generazioni moderne: categoria fisica/speciale per mossa, brutti colpi ×1,5
con gli stadi 1/24 · 1/8 · 1/2 · 1, paralisi che dimezza la Velocità, scottatura 1/16, immunità di tipo agli
stati, Protezione con probabilità 1/3 sui tentativi consecutivi, mosse multicolpo 35/35/15/15.

## Salvataggi

`js/systems/checkpoints.js` scrive in `localStorage` uno snapshot versionato (versione 2) della run.

- **Durante le lotte** lo stato viene registrato a ogni turno e a ogni KO (`take(game, { battle: true })`).
  Ricaricare la pagina o tornare al menu non annulla danni, strumenti usati o Pokémon esausti: la lotta
  interrotta conta come abbandonata e la run riprende sulla mappa con le perdite subite.
- **Game over e vittoria** chiudono la run: al posto dello snapshot viene salvato un marcatore `ended`
  (anche nel cloud). Il salvataggio non viene cancellato, ma la run non si può più continuare.
- **Grotta Celeste**: entrando, il salvataggio considera già persi i Pokémon partiti per la spedizione;
  abbandonarla a metà equivale a una sconfitta.
- Le run giocate in DEV MODE sono marcate `devRun` e non aggiornano Pokédex né obiettivi.

`js/main.js` riconcilia il salvataggio locale con quello nel cloud all’avvio: per la stessa run vince quella
conclusa o, altrimenti, la più recente; per due run diverse il gioco chiede quale tenere. Gli invii al cloud
sono raggruppati (1 s fuori dalla lotta, 8 s durante) e usano un controllo di revisione per non sovrascrivere
dati più nuovi.

## Tastiera

Un solo ascoltatore `keydown` (`js/ui/input.js`, `keyRouter`) smista i tasti per priorità: finestre di
conferma, Pokédex, obiettivi, Grotta Celeste, DEV MODE, negozio, lotta, mappa. Una finestra modale apre un
“livello” che riceve i tasti per prima e lo chiude quando sparisce.

## Fogli di stile

I file in `css/` sono caricati in quest’ordine; dentro ogni file le regole seguono l’ordine della cascata.

| File | Contenuto |
| --- | --- |
| `font.css` | Press Start 2P incorporato (ridotto ai caratteri usati), per funzionare anche da file |
| `base.css` | variabili, elementi e classi generiche (`.hidden`, pulsanti) |
| `layout.css` | involucro del RotomDex, ali laterali, piè di pagina, menu opzioni, DEV MODE |
| `sidebar.css` | squadra, zaino, radar, medaglie, D-pad |
| `map.css` | mappa del piano, caselle, sprite, nebbia, Grotta Celeste |
| `menus.css` | accesso, menu principale, scelta dello starter, obiettivi, game over, finale |
| `overlays.css` | finestre e dialoghi: abitanti, palestre, negozio, evoluzione, scheda Pokémon, portamedaglie |
| `pokedex.css` | Pokédex |
| `battle.css` | campo di lotta, HUD, comandi, effetti delle mosse, cattura, sfondi per ambiente |

## DEV MODE

Visibile solo su `localhost`, da file locale o aggiungendo `#dev` all’indirizzo. Il codice di accesso non è
scritto nel sorgente: il gioco confronta l’hash SHA-256 di `"pokexplorer-dev:" + codice` con quello in
`js/systems/dev.js` (`DEV_CODE_HASH`). Con DEV MODE attiva compaiono **VAI AL PIANO** e **SKIP**, che vince
subito qualsiasi lotta (selvatici, allenatori, palestre, raid, leggendari, Mewtwo).
