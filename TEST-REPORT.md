# Pokéxplorer Beta Version — Resoconto degli interventi

**Base:** lo ZIP `pokexplorer.zip` ricevuto il 21 novembre 2026.
**Consegna:** una cartella completa, con sorgenti JS, dati Kanto, asset originali e bundle `build/pokexplorer.js` generato e utilizzabile senza compilare sul PC del giocatore.

## Interventi integrati

| Task | Esito | Verifiche |
|---|---|---|
| UI-01–UI-02 | Assistenza e Crediti ora aprono un pannello centrale compatto, senza spostare il menu. | Browser: posizione invariata, focus e ESC. |
| UI-03, NEW-07 | Sprite Obiettivi 28 px, filtri Tutti/Nuzlocke/Normale/Completati. | Browser UI, struttura e CSS. |
| UI-04–UI-08 | Schermata iniziale senza dati della run, overlay responsive, router unico, ESC e ripristino focus. | Browser 320, 390 e 1366 px. |
| UI-09–UI-12 | Slot medaglie bloccati senza nomi o emoji visibili, con gradiente diagonale. | Browser e controllo dei nodi vuoti. |
| SAVE-01–SAVE-08 | Riepilogo compatto prima di Continuare: piano, medaglie, squadra con sprite e livelli, modalità, data/ora, origine della replica. Utilizza il sistema checkpoint e risoluzione conflitti esistente. | Browser, regressioni checkpoint. |
| EV-01–EV-08 | Anziana al piano 15, dialoghi con/senza Eevee, regalo unico e rimandabile per run, stato salvato e dialogo dopo il regalo. | Browser e unit test anche dopo ripresa. |
| ITEM-01–ITEM-10, NEW-01 | Tre pietre nella Borsa → Rimedi con gli sprite caricati dall'utente; conferma grafica, evoluzione immediata, consumo dopo successo; rimossa evoluzione di Eevee per livello. | 3 forme + conferma/annullamento/KO + checkpoint. |
| MAP-01, NEW-04 | Poké Ball-item sulla mappa al 65% della dimensione precedente, centrata; notifica di raccolta con quantità. | Browser e CSS. |
| DEV-01 | Pokédex completo (151 specie, generi e shiny) solo in anteprima in DEV MODE; nessuna scrittura nei progressi reali. Modalità DEV non attivabile su HTTPS pubblico tramite hash/query. | Node e Chromium con ricarica. |
| NEW-02, NEW-06 | Modalità sempre indicata durante la run; stato del checkpoint locale/cloud nel pannello allenatore. | Browser e stati locali. |
| NEW-03, NEW-05, NEW-08 | Regalo riproponibile se rimandato, strumenti disattivati senza un bersaglio valido, animazione leggera dei pannelli rispettando `prefers-reduced-motion`. | Node e Browser. |

## Verifiche

- **Unitari Node:** 46/46 superati (inclusi 10 nuovi test di regressione, modificato il test obsoleto di evoluzione Eevee negli incontri).
- **Browser Chromium — fixture locale isolata:** **28/28 passati, 0 falliti; 1 caso saltato** (apertura diretta di `file://`, non disponibile nell’ambiente). La suite usa immagini e font locali, lo storage simulato, e blocca richieste esterne. Sono inclusi controlli sul D-pad, modalità Normale/Nuzlocke, perdita permanente, gioco, menu, Pokédex, NPC e conferme.
- **Browser desktop/mobile:** apertura pannelli e navigazione da tastiera, 320×568, 390×844, 1366×768; altri test originali includono 1280×720.
- **Verifica HTTP dei file:** 6/6 richieste con risposta 200 e SHA-256 identico ai file locali (`index.html`, bundle, CSS e 3 pietre).
- **Sprite pietre:** 3/3 PNG decodificati correttamente.
- **Sintassi JS:** tutti i moduli modificati e il bundle superano `node --check`.
- **Compilazione:** poiché il registry npm non era raggiungibile, `build/pokexplorer.js` è stato ricostruito con lo script offline `tools/build-standalone.py`. Il percorso esbuild originale rimane disponibile agli sviluppatori con dipendenze installate. Il gioco distribuito usa il bundle, non richiede Python né Node al giocatore.

## Limiti delle prove

- Le prove Chromium su `file://` e HTTP loopback diretto non possono partire in questo ambiente: `ERR_BLOCKED_BY_ADMINISTRATOR`. È una restrizione del browser dell'ambiente di test, non una prova negativa di funzionamento su Windows; la suite inline ha caricato il bundle completo.
- **Discord e Supabase reali, autenticazione, conflitti effettivi fra dispositivi e sito pubblico non sono stati testati.** I controlli cloud esistenti rimangono e non è stata effettuata alcuna operazione su dati remoti.
- Test visivi e funzionali locali non equivalgono a verifiche legali sui diritti grafici di terzi. Gli sprite delle pietre provengono dagli allegati dell'utente; non sono state dichiarate licenze nuove.
- Questa build non modifica privacy, bilanciamento delle palestre o le altre funzionalità non incluse nei 58 task concordati.

## Per riprodurre

- Test Node: `npm test`.
- Test Chromium locale (richiede Playwright e Chromium): `POKEX_E2E_FIXTURE=1 python tests/e2e/run.py`.
- Generazione bundle senza internet: `python tools/build-standalone.py` (oppure `npm run build` con esbuild installato).
- La cartella include già il bundle aggiornato. `config.js` contiene soltanto configurazione pubblica vuota; non contiene token o segreti.
