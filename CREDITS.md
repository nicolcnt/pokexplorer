# Crediti e diritti

**Pokéxplorer** è un fan game gratuito, non commerciale e senza pubblicità, creato e sviluppato da **17nico**.
Non è un prodotto ufficiale: non è affiliato, sponsorizzato né approvato da Nintendo, Creatures Inc., GAME FREAK inc. o The Pokémon Company.

## Marchi e personaggi

Pokémon, i nomi delle specie, delle mosse, dei personaggi e delle località di Kanto, gli sprite originali dei giochi e i relativi marchi sono © 1995–2026 Nintendo / Creatures Inc. / GAME FREAK inc. / The Pokémon Company. Sono usati senza scopo di lucro, a fini amatoriali, e restano di proprietà dei rispettivi titolari.

## Dati e grafica di terze parti

| Materiale | Dove si trova | Origine | Licenza / note |
| --- | --- | --- | --- |
| Statistiche, mosse, abilità, nomi italiani e descrizioni delle specie | `data/*.json` | [PokéAPI](https://pokeapi.co) (`PokeAPI/api-data`) | Dati: BSD 3-Clause. Generati con `tools/build-data.py`. |
| Sprite dei Pokémon (fronte, retro, shiny, femmina) | `assets/pokemon/` | [PokeAPI/sprites](https://github.com/PokeAPI/sprites) | Grafica © Nintendo / Game Freak / The Pokémon Company. |
| Sprite di mappa degli abitanti e degli allenatori, ritratti dei Capipalestra | `assets/sprites/overworld/`, `assets/sprites/leaders/` | [pret/pokefirered](https://github.com/pret/pokefirered) (Pokémon Rosso Fuoco/Verde Foglia) | Grafica © Nintendo / Game Freak / The Pokémon Company. |
| Sprite delle tre pietre evolutive | `assets/sprites/items/{water,thunder,fire}-stone.png` | Immagini allegate dall’autore nel novembre 2026 | Sprite Pokémon: provenienza dichiarata dall’autore; diritti di terzi non verificati indipendentemente. |
| Altri sprite di personaggi, oggetti, medaglie ed edifici | `assets/sprites/` | Grafica dei giochi Pokémon di terza generazione e immagini fornite dall’autore | Grafica Pokémon © dei rispettivi titolari. |
| Font *Press Start 2P* (ridotto ai caratteri usati) | `css/font.css` | CodeMan38 | SIL Open Font License 1.1 (`assets/fonts/OFL.txt`). |
| Client Supabase (`supabase-js`) | `js/vendor/supabase.umd.js` | [supabase/supabase-js](https://github.com/supabase/supabase-js) | MIT (`js/vendor/supabase.LICENSE.txt`). |

## Musica

I brani in `assets/audio/` sono stati forniti dall’autore del gioco. Prima di ridistribuirli separatamente
verificarne la provenienza e i diritti; nel gioco sono usati solo come sottofondo, senza alcun guadagno.

## Codice di Pokéxplorer

Il codice originale (HTML, CSS e JavaScript nelle cartelle `js/`, `css/` e `build/`) è di 17nico. Il pacchetto `build/pokexplorer.js` è generato dai moduli ES tramite `tools/build-standalone.py` (con possibilità di usare anche [esbuild](https://esbuild.github.io), MIT). La pubblicazione del
repository non concede automaticamente il diritto di riutilizzarlo o ridistribuirlo: per farlo, chiedi all’autore
sul [server Discord](https://discord.gg/qNGscTEYHM).
