# Novità di Pokéxplorer

## Beta Version — Interfaccia e pietre evolutive (novembre 2026)

- Pannelli Assistenza, Crediti e Continua avventura come overlay indipendenti,
  con riepilogo compatto e conferma prima di caricare il checkpoint selezionato.
- Profilo iniziale più pulito; modalità e stato del salvataggio durante la run.
- Obiettivi filtrabili per modalità e completamento; sprite ridotti.
- Slot medaglie bloccati senza testo o emoji, pattern diagonale; icone strumenti
  sulla mappa ridotte al 65% della precedente dimensione.
- Anziana al piano 15 con dialoghi personalizzati, scelta di una pietra per run
  e conferma; Pietraidrica, Pietratuono e Pietrafocaia tra i Rimedi.
- Eevee evolve con una pietra consumabile, non più al livello 30. Compatibilità
  con i vecchi checkpoint mantenuta; il regalo si può rimandare senza perderlo.
- Anteprima temporanea del Pokédex completo in DEV MODE, senza scritture nel profilo.
- Test di regressione su inventario, evoluzioni, salvataggi e pannelli.


## Beta 2.0 — modalità Nuzlocke e Normale

- **Nuzlocke:** i Pokémon esausti escono definitivamente dalla squadra, anche nella Grotta Celeste. Se non resta nessun Pokémon utilizzabile, la run si chiude.
- **Normale:** i Pokémon esausti mantengono lo slot in squadra; Joy li cura al Centro Pokémon. In caso di sconfitta totale interviene sul posto senza far avanzare la run.
- Eliminato il Revitalizzante. I checkpoint v2 restano compatibili: Classica diventa Nuzlocke, Facile diventa Normale e l'oggetto preesistente viene ignorato.
- Otto obiettivi dedicati, quattro per modalità, oltre agli obiettivi comuni. Una vittoria solitaria valida sblocca il Campione su profilo locale o Discord; in modalità ospite lo sblocco dura per la sessione.
- **Bivi:** sui nuovi dungeon, due uscite soltanto ai piani 3, 8, 13, …, 78. Le anteprime distinguono Facile e Difficile; il piano già salvato resta com'è.

## Beta 2.0 — revisione completa (novembre 2026)

### Novità di gioco
- **Riepilogo della run** al game over e nel finale: piano raggiunto, medaglie, Pokémon sconfitti,
  allenatori, catture, tempo di gioco e i Pokémon caduti (dove e contro chi).
- **Bivi**: su circa metà dei percorsi ci sono due uscite. In alto a destra (⚔) la *zona allenatori*:
  3–5 allenatori, Pokécoins +50% ed esperienza +25%. In basso (☘) il *percorso tranquillo*: nessun
  allenatore, metà degli incontri selvatici e uno strumento in più. Prima di uscire si vede cosa si sceglie.
- **Limite di livello** 2 sopra il Pokémon più forte del Capopalestra successivo (prima era uguale).
- **Revitalizzante**: l’infermiera Joy ne regala uno per run al primo Centro Pokémon. Si attiva da solo quando
  un Pokémon va KO e lo rimette in piedi con metà dei PS.
- **Modalità facile** (si sceglie con lo starter): i Pokémon esausti restano in squadra e si curano al Centro
  Pokémon. La run è segnata come facile e la vittoria non conta per le missioni.
- **Nuovi abitanti**: chi offre una pausa (metà dei PS), chi regala una scansione Radar e chi propone un quiz
  sui tipi con premio.
- **Efficacia vista**: dopo aver usato una mossa contro una combinazione di tipi, il pulsante mostra ×2, ×½ o ×0.
- Il Radar spiega cosa fa la prima volta che lo usi.

### Correzioni importanti
- **Game over**: non cancella più il salvataggio nel cloud. La run viene chiusa (anche online) e non si può
  continuare; si riparte con una nuova avventura. Pokédex e obiettivi restano intatti.
- **Niente più “salva e ricarica” nelle lotte**: lo stato della lotta viene registrato a ogni turno e a ogni KO.
  Ricaricare la pagina o tornare al menu non annulla danni, strumenti usati e Pokémon esausti; la lotta
  interrotta conta come abbandonata. Se la squadra era già tutta esausta, la run finisce.
- **Grotta Celeste**: abbandonarla a metà equivale a una sconfitta, i Pokémon della spedizione non tornano.
- **Scelta dello starter**: il pulsante CONFERMA è sempre visibile e cliccabile, anche a 1366×768 e su telefono.
- **Eevee** si evolve in Vaporeon, Jolteon o Flareon anche negli incontri (prima solo Vaporeon).
- I Pokémon esausti escono di scena prima della vittoria e non restano “in campo” a 0 PS.

### DEV MODE
- Visibile solo in locale o aprendo il sito con `#dev`; il codice non è più scritto nel sorgente (impronta SHA-256).
- Nuovo pulsante **SKIP** accanto a **VAI AL PIANO**: vince subito la lotta in corso — selvatici, allenatori,
  palestre (tutti i Pokémon del Capopalestra), raid, leggendari e Mewtwo — anche dalla schermata «LOTTA!».
- Le run in DEV MODE sono marcate come “di prova” e non contano per Pokédex e obiettivi.
- Le caramelle DEV compaiono nello zaino; cattura garantita in DEV.

### Regole di lotta moderne
- Categoria fisica/speciale per singola mossa; brutti colpi ×1,5 con gli stadi moderni (Focalenergia, Supersorte).
- Paralisi dimezza la Velocità, scottatura 1/16 dei PS, immunità di tipo agli stati (Fuoco/scottatura,
  Elettro/paralisi, Veleno e Acciaio/avvelenamento, Ghiaccio/congelamento); Tuononda fallisce sui tipi Terra,
  le mosse con polveri sui tipi Erba.
- Protezione/Individua con probabilità 1/3 sui tentativi consecutivi; multicolpo 35/35/15/15.
- Metronomo funzionante, Scontro con contraccolpo, infatuazione; formula di cattura basata sul tasso della specie.
- Nomi dei tipi in italiano ovunque.

### Gioco offline e più leggero
- Si gioca anche con un doppio clic su `index.html`, senza server: codice e dati sono riuniti in
  `build/pokexplorer.js` e il font è incorporato. Da file si gioca in locale (senza Discord).
- Il gioco non dipende più da PokéAPI, Pokémon Showdown, GitHub o Google Fonts: dati di specie, mosse e abilità
  sono in `data/`, sprite e font sono locali, supabase-js è incluso. Funziona anche se quei servizi sono giù.
- Musica convertita in WebM/Opus (da 31 a 18 MB), sfondi delle lotte in WebP (da 22 a 3,6 MB): il progetto passa
  da circa 56 a 28 MB. Rimossi file, immagini e stili non più usati.

### Codice
- Il motore (4.450 righe in un solo file) è diviso in moduli ES per area: `core/`, `systems/`, `world/`,
  `battle/`, `ui/`. Stato della run definito in un solo punto; una sola gestione della tastiera.
- Fogli di stile riorganizzati in `css/` per area: tolte circa 1.500 dichiarazioni e 490 regole che non avevano
  effetto, e oltre 350 `!important` superflui, verificando nel browser che la grafica non cambiasse.
- Nessuno stile inline nell’HTML; nessun `alert`/`confirm` del browser.
- Nuovi test: unitari (`npm test`) e nel browser (`python tests/e2e/run.py`).

### Interfaccia
- Nuovo pulsante **AUTO DIALOGHI** accanto a VELOCITÀ: i dialoghi con gli abitanti, quelli del Professor Oak
  e gli avvisi avanzano da soli dopo il tempo di lettura (più rapido a velocità ×2). Le domande aspettano sempre
  una risposta e nelle lotte non è attivo. La scelta resta salvata nel browser.
- Testi più leggibili: nessun carattere sotto gli 8 px; anche le schede della squadra usano il carattere pixel.
- Sugli schermi grandi (da 1800×1040) il RotomDex si ingrandisce invece di lasciare spazio vuoto.
- I posti della squadra non ancora sbloccati mostrano la medaglia che li sblocca.
- Gli avvisi compaiono in alto e non coprono più la mappa; a ogni cambio di piano appare il nome del piano.
- Su telefono squadra e zaino si aprono dal basso con le linguette SQUADRA / ZAINO, e da soli in lotta.
- Su telefono il D-pad non copre più la casella di uscita.
- Prima di iniziare una run le ali laterali non mostrano squadra e zaino vuoti.
- Game over, nuova mossa, scambi con gli abitanti (con anteprima del Pokémon offerto) e PokéMarket ridisegnati.
- Nuova schermata **Crediti** nel menu principale e informativa sui dati (`privacy.html`).

### Progetto
- Struttura delle cartelle ripulita (vedi `docs/ARCHITETTURA.md`), documentazione per sviluppatori in
  `docs/SVILUPPO.md`, crediti e diritti in `CREDITS.md`.

## Versioni precedenti

- **Beta 1.8** — pannello di conferma del gioco al posto di `window.confirm`; **Salva partita** nel menu
  Opzioni; la modalità Utente non salva.
- **Beta 1.7** — VAI AL PIANO (DEV) nel piè di pagina; secondo piè di pagina con crediti e Discord; ritorno al
  menu principale con conferma.
- **Beta 1.6** — Laboratorio di Oak con scelta definitiva; Mewtwo scompare al secondo KO; shiny 1/2.000;
  personaggio Campione; 17 obiettivi sincronizzati con l’account.
- **Beta 1.5** — spedizione nella Grotta Celeste con uno o due Pokémon; nuovi sprite del Professor Oak.
- **Beta 1.4** — sfondo del menu, gioco solo in italiano, ritratti degli abitanti nei dialoghi, sblocco
  graduale del PokéMarket per città, evento di Oak al piano 75.
- **Beta 1.3** — zaino senza oggetti a quantità zero, prezzi e sblocchi del PokéMarket, sprite di mappa FireRed.
- **Beta 1.2** — Capsula Abilità e abilità passive in lotta.
- **Beta 1.1** — comandi da tastiera nelle lotte, palestre continue, Centro Pokémon classico, Pokédex per account.
