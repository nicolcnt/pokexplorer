# Sviluppo

## Avviare il gioco in locale

Il modo più semplice: doppio clic su `index.html`. Il gioco parte in modalità locale (senza Discord) e i
progressi restano in quel browser.

Per provare anche l’accesso con Discord serve un piccolo server:

```bash
python3 -m http.server 8000        # oppure: npm start
```

e poi <http://localhost:8000>. In locale il pulsante **DEV MODE** è sempre visibile nel menu Opzioni.

## Modificare il codice

Il codice sorgente è in `js/` (moduli ES). La pagina carica il pacchetto `build/pokexplorer.js`, che va
rigenerato dopo ogni modifica:

```bash
npm install          # una volta
npm run build        # crea build/pokexplorer.js
npm run dev          # ricompila da solo a ogni salvataggio (con mappe per il debug)
```

Il pacchetto va incluso quando si pubblica il sito.

## Configurare Supabase (accesso con Discord e salvataggi nel cloud)

1. Copia `config.example.js` in `config.js` e inserisci l’URL del progetto e la chiave **publishable**
   (o `anon`). Non inserire mai la chiave `service_role` né segreti di Discord: `config.js` è pubblico.
2. Nel progetto Supabase abilita il provider **Discord** (Authentication → Providers) e aggiungi l’indirizzo
   del sito tra gli URL di reindirizzamento consentiti.
3. **Solo per un database nuovo** (sul progetto Pokéxplorer già in uso le tabelle esistono: non rieseguire
   gli script) esegui una volta, in ordine, gli script di `sql/` nell’editor SQL di Supabase:
   - `001_pokedex_hybrid.sql` — Pokédex per account;
   - `002_account_checkpoints_if_missing.sql` — salvataggi delle run (solo se `pokexplorer_saves` manca);
   - `003_objectives_events.sql` — obiettivi.

   Ogni tabella ha regole di accesso (RLS) che permettono a un utente di leggere e scrivere solo i propri dati.
   Per controllare cosa è già installato:

   ```sql
   select to_regclass('public.pokexplorer_saves'), to_regclass('public.pokexplorer_dex_species'),
          to_regclass('public.pokexplorer_dex_variants'), to_regclass('public.pokexplorer_objective_events');
   ```

## Test

```bash
npm test                 # test unitari (Node 20 o successivo, nessuna dipendenza)
npm run test:e2e         # ricompila il pacchetto ed esegue i test nel browser
npm run lint             # controllo del codice (richiede npm install)
```

I test nel browser usano Playwright per Python:

```bash
pip install playwright
python -m playwright install chromium
python tests/e2e/run.py                       # tutti
python tests/e2e/run.py "DEV MODE" "game over"  # solo quelli che contengono queste parole
```

Per usare un Chrome già installato: `CHROME_PATH=/percorso/di/chrome python tests/e2e/run.py`.

| Test | Cosa verifica |
| --- | --- |
| `tests/unit/data.test.mjs` | completezza di specie, mosse, abilità e sprite locali |
| `tests/unit/battle.test.mjs` | tabella dei tipi, immunità agli stati, danni, multicolpo, genere, evoluzioni di Eevee, cattura |
| `tests/unit/checkpoints.test.mjs` | salvataggi, lotte interrotte, game over, Grotta Celeste, run DEV, modalità Utente |
| `tests/unit/systems.test.mjs` | obiettivi, Pokédex, Capsula Abilità, tastiera, reindirizzamento di Discord |
| `tests/e2e/run.py` | partita reale nel browser: avvio offline e da file, starter, AUTO DIALOGHI, lotte, abbandono della lotta, game over, DEV MODE e SKIP, leggibilità dei testi, D-pad su telefono |

## Rigenerare i dati di gioco

`data/*.json` e gli sprite in `assets/pokemon/` vengono da PokéAPI (repository `PokeAPI/api-data` e
`PokeAPI/sprites`). Per aggiornarli:

```bash
python3 tools/build-data.py              # dati e sprite (la prima volta scarica tutto in tools/.cache)
python3 tools/build-data.py --no-sprites # solo i dati
```

Le mosse apprese sono quelle di Ultrasole e Ultraluna (le più recenti con tutti i 151 di Kanto); i livelli 0
sono le mosse imparate al momento dell’evoluzione.

## Cambiare il codice della DEV MODE

Il codice non è salvato in chiaro. Calcola l’impronta del nuovo codice e sostituisci `DEV_CODE_HASH` in
`js/systems/dev.js`:

```bash
node -e "crypto.subtle.digest('SHA-256', new TextEncoder().encode('pokexplorer-dev:' + process.argv[1])).then(b => console.log(Buffer.from(b).toString('hex')))" NUOVOCODICE
```

Sul sito pubblicato il pulsante compare solo aggiungendo `#dev` all’indirizzo.

## Pubblicare

Il sito è statico: esegui `npm run build` e carica la cartella così com’è (ad esempio su GitHub Pages).
Le cartelle `tests/`, `tools/`, `docs/` e `sql/` non sono necessarie al gioco ma non danno fastidio.

## Convenzioni

- Moduli ES in `js/`, uniti da esbuild; nessuna variabile globale tranne `window.game` (per debug e test) e `POKEX_PUBLIC_CONFIG`.
- Le regole di gioco in `js/core/` restano senza DOM, così si possono testare in Node.
- Nuovi campi della run vanno aggiunti in `createRunState()` (`js/systems/run-state.js`); se devono
  sopravvivere al salvataggio, anche in `SAVED_FIELDS` (`js/systems/checkpoints.js`).
- Niente stili inline nell’HTML: ogni stile sta nel modulo CSS dell’area corrispondente.
- Testi dell’interfaccia in italiano; per le parti del gioco si usa sempre «piano» (non «livello») per i piani del dungeon.
