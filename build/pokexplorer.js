/* Pokéxplorer Beta Version · bundle offline generato dai moduli ES. */
(() => {
"use strict";
const __m0 = (() => {
const pokemonFile = {"meta":{"source":"PokeAPI (pokeapi.co) \u2014 dati BSD-3-Clause","versionGroup":"ultra-sun-ultra-moon","generated":"2026-11-13"},"data":[{"id":1,"slug":"bulbasaur","name":"Bulbasaur","types":["grass","poison"],"stats":{"hp":45,"attack":49,"defense":49,"special-attack":65,"special-defense":65,"speed":45},"evYield":{"special-attack":1},"baseExp":64,"height":7,"weight":69,"abilities":["overgrow"],"growth":"medium-slow","genderRate":1,"captureRate":45,"habitat":"grassland","flavor":"Appena nato, trae nutrimento dalle sostanze contenute nel seme sul dorso.","femaleSprites":false,"learnset":[[1,"tackle"],[3,"growl"],[7,"leech-seed"],[9,"vine-whip"],[13,"poison-powder"],[13,"sleep-powder"],[15,"take-down"],[19,"razor-leaf"],[21,"sweet-scent"],[25,"growth"],[27,"double-edge"],[31,"worry-seed"],[33,"synthesis"],[37,"seed-bomb"]]},{"id":2,"slug":"ivysaur","name":"Ivysaur","types":["grass","poison"],"stats":{"hp":60,"attack":62,"defense":63,"special-attack":80,"special-defense":80,"speed":60},"evYield":{"special-attack":1,"special-defense":1},"baseExp":142,"height":10,"weight":130,"abilities":["overgrow"],"growth":"medium-slow","genderRate":1,"captureRate":45,"habitat":"grassland","flavor":"L\u2019esposizione alla luce solare lo rafforza e fa crescere il bocciolo che ha sul dorso.","femaleSprites":false,"learnset":[[1,"growl"],[1,"leech-seed"],[1,"tackle"],[3,"growl"],[7,"leech-seed"],[9,"vine-whip"],[13,"poison-powder"],[13,"sleep-powder"],[15,"take-down"],[20,"razor-leaf"],[23,"sweet-scent"],[28,"growth"],[31,"double-edge"],[36,"worry-seed"],[39,"synthesis"],[44,"solar-beam"]]},{"id":3,"slug":"venusaur","name":"Venusaur","types":["grass","poison"],"stats":{"hp":80,"attack":82,"defense":83,"special-attack":100,"special-defense":100,"speed":80},"evYield":{"special-attack":2,"special-defense":1},"baseExp":236,"height":20,"weight":1000,"abilities":["overgrow"],"growth":"medium-slow","genderRate":1,"captureRate":45,"habitat":"grassland","flavor":"Il suo fiore emana una fragranza inebriante capace di placare l\u2019animo di chi \u00e8 impegnato nella lotta.","femaleSprites":true,"learnset":[[0,"petal-dance"],[1,"growl"],[1,"leech-seed"],[1,"petal-dance"],[1,"tackle"],[1,"vine-whip"],[3,"growl"],[7,"leech-seed"],[9,"vine-whip"],[13,"poison-powder"],[13,"sleep-powder"],[15,"take-down"],[20,"razor-leaf"],[23,"sweet-scent"],[28,"growth"],[31,"double-edge"],[39,"worry-seed"],[45,"synthesis"],[50,"petal-blizzard"],[53,"solar-beam"]]},{"id":4,"slug":"charmander","name":"Charmander","types":["fire"],"stats":{"hp":39,"attack":52,"defense":43,"special-attack":60,"special-defense":50,"speed":65},"evYield":{"speed":1},"baseExp":62,"height":6,"weight":85,"abilities":["blaze"],"growth":"medium-slow","genderRate":1,"captureRate":45,"habitat":"mountain","flavor":"Una fiamma gli arde sulla punta della coda fin dalla nascita. Se si spegnesse, per lui sarebbe la fine.","femaleSprites":false,"learnset":[[1,"growl"],[1,"scratch"],[7,"ember"],[10,"smokescreen"],[16,"dragon-rage"],[19,"scary-face"],[25,"fire-fang"],[28,"flame-burst"],[34,"slash"],[37,"flamethrower"],[43,"fire-spin"],[46,"inferno"]]},{"id":5,"slug":"charmeleon","name":"Charmeleon","types":["fire"],"stats":{"hp":58,"attack":64,"defense":58,"special-attack":80,"special-defense":65,"speed":80},"evYield":{"special-attack":1,"speed":1},"baseExp":142,"height":11,"weight":190,"abilities":["blaze"],"growth":"medium-slow","genderRate":1,"captureRate":45,"habitat":"mountain","flavor":"Se s\u2019infervora nella lotta, sputa potenti fiamme che inceneriscono l\u2019area circostante.","femaleSprites":false,"learnset":[[1,"ember"],[1,"growl"],[1,"scratch"],[7,"ember"],[10,"smokescreen"],[17,"dragon-rage"],[21,"scary-face"],[28,"fire-fang"],[32,"flame-burst"],[39,"slash"],[43,"flamethrower"],[50,"fire-spin"],[54,"inferno"]]},{"id":6,"slug":"charizard","name":"Charizard","types":["fire","flying"],"stats":{"hp":78,"attack":84,"defense":78,"special-attack":109,"special-defense":85,"speed":100},"evYield":{"special-attack":3},"baseExp":240,"height":17,"weight":905,"abilities":["blaze"],"growth":"medium-slow","genderRate":1,"captureRate":45,"habitat":"mountain","flavor":"Grazie alle possenti ali pu\u00f2 volare fino a 1.400 m d\u2019altezza. Le fiamme che sputa possono raggiungere temperature altissime.","femaleSprites":false,"learnset":[[0,"wing-attack"],[1,"air-slash"],[1,"dragon-claw"],[1,"ember"],[1,"flare-blitz"],[1,"growl"],[1,"heat-wave"],[1,"scratch"],[1,"shadow-claw"],[1,"wing-attack"],[7,"ember"],[10,"smokescreen"],[17,"dragon-rage"],[21,"scary-face"],[28,"fire-fang"],[32,"flame-burst"],[41,"slash"],[47,"flamethrower"],[56,"fire-spin"],[62,"inferno"],[71,"heat-wave"],[77,"flare-blitz"]]},{"id":7,"slug":"squirtle","name":"Squirtle","types":["water"],"stats":{"hp":44,"attack":48,"defense":65,"special-attack":50,"special-defense":64,"speed":43},"evYield":{"defense":1},"baseExp":63,"height":5,"weight":90,"abilities":["torrent"],"growth":"medium-slow","genderRate":1,"captureRate":45,"habitat":"waters-edge","flavor":"Se si sente minacciato, ritira le zampe nel guscio e inizia a spruzzare acqua dalla bocca.","femaleSprites":false,"learnset":[[1,"tackle"],[4,"tail-whip"],[7,"water-gun"],[10,"withdraw"],[13,"bubble"],[16,"bite"],[19,"rapid-spin"],[22,"protect"],[25,"water-pulse"],[28,"aqua-tail"],[31,"skull-bash"],[34,"iron-defense"],[37,"rain-dance"],[40,"hydro-pump"]]},{"id":8,"slug":"wartortle","name":"Wartortle","types":["water"],"stats":{"hp":59,"attack":63,"defense":80,"special-attack":65,"special-defense":80,"speed":58},"evYield":{"defense":1,"special-defense":1},"baseExp":142,"height":10,"weight":225,"abilities":["torrent"],"growth":"medium-slow","genderRate":1,"captureRate":45,"habitat":"waters-edge","flavor":"Controlla abilmente le orecchie e la coda coperte di pelo, mantenendo l\u2019assetto mentre nuota.","femaleSprites":false,"learnset":[[1,"tackle"],[1,"tail-whip"],[1,"water-gun"],[4,"tail-whip"],[7,"water-gun"],[10,"withdraw"],[13,"bubble"],[17,"bite"],[21,"rapid-spin"],[25,"protect"],[29,"water-pulse"],[33,"aqua-tail"],[37,"skull-bash"],[41,"iron-defense"],[45,"rain-dance"],[49,"hydro-pump"]]},{"id":9,"slug":"blastoise","name":"Blastoise","types":["water"],"stats":{"hp":79,"attack":83,"defense":100,"special-attack":85,"special-defense":105,"speed":78},"evYield":{"special-defense":3},"baseExp":239,"height":16,"weight":855,"abilities":["torrent"],"growth":"medium-slow","genderRate":1,"captureRate":45,"habitat":"waters-edge","flavor":"I cannoni sul suo guscio sparano getti d\u2019acqua capaci di bucare l\u2019acciaio.","femaleSprites":false,"learnset":[[1,"flash-cannon"],[1,"tackle"],[1,"tail-whip"],[1,"water-gun"],[1,"withdraw"],[4,"tail-whip"],[7,"water-gun"],[10,"withdraw"],[13,"bubble"],[17,"bite"],[21,"rapid-spin"],[25,"protect"],[29,"water-pulse"],[33,"aqua-tail"],[40,"skull-bash"],[47,"iron-defense"],[54,"rain-dance"],[60,"hydro-pump"]]},{"id":10,"slug":"caterpie","name":"Caterpie","types":["bug"],"stats":{"hp":45,"attack":30,"defense":35,"special-attack":20,"special-defense":20,"speed":45},"evYield":{"hp":1},"baseExp":39,"height":3,"weight":29,"abilities":["shield-dust"],"growth":"medium","genderRate":4,"captureRate":255,"habitat":"forest","flavor":"Le ventose sulle sue corte zampe gli permettono di affrontare ogni salita e di scalare senza fatica qualsiasi muro.","femaleSprites":false,"learnset":[[1,"string-shot"],[1,"tackle"],[9,"bug-bite"]]},{"id":11,"slug":"metapod","name":"Metapod","types":["bug"],"stats":{"hp":50,"attack":20,"defense":55,"special-attack":25,"special-defense":25,"speed":30},"evYield":{"defense":2},"baseExp":72,"height":7,"weight":99,"abilities":["shed-skin"],"growth":"medium","genderRate":4,"captureRate":120,"habitat":"forest","flavor":"La corazza esterna \u00e8 robusta ma l\u2019interno \u00e8 molle. Per questo non \u00e8 in grado di resistere ad attacchi particolarmente veementi.","femaleSprites":false,"learnset":[[0,"harden"],[1,"harden"]]},{"id":12,"slug":"butterfree","name":"Butterfree","types":["bug","flying"],"stats":{"hp":60,"attack":45,"defense":50,"special-attack":90,"special-defense":80,"speed":70},"evYield":{"special-attack":2,"special-defense":1},"baseExp":178,"height":11,"weight":320,"abilities":["compound-eyes"],"growth":"medium","genderRate":4,"captureRate":45,"habitat":"forest","flavor":"Raccoglie nettare tutti i giorni e lo spalma sulla peluria che ricopre le sue zampe per trasportarlo al nido.","femaleSprites":true,"learnset":[[0,"gust"],[1,"confusion"],[1,"gust"],[11,"confusion"],[13,"poison-powder"],[13,"sleep-powder"],[13,"stun-spore"],[17,"psybeam"],[19,"silver-wind"],[23,"supersonic"],[25,"safeguard"],[29,"whirlwind"],[31,"bug-buzz"],[35,"rage-powder"],[37,"captivate"],[41,"tailwind"],[43,"air-slash"],[47,"quiver-dance"]]},{"id":13,"slug":"weedle","name":"Weedle","types":["bug","poison"],"stats":{"hp":40,"attack":35,"defense":30,"special-attack":20,"special-defense":20,"speed":50},"evYield":{"speed":1},"baseExp":39,"height":3,"weight":32,"abilities":["shield-dust"],"growth":"medium","genderRate":4,"captureRate":255,"habitat":"forest","flavor":"Ha un pungiglione acuminato sul capo. Vive tra l\u2019erba alta e nei boschi, dove si nutre di foglie.","femaleSprites":false,"learnset":[[1,"poison-sting"],[1,"string-shot"],[9,"bug-bite"]]},{"id":14,"slug":"kakuna","name":"Kakuna","types":["bug","poison"],"stats":{"hp":45,"attack":25,"defense":50,"special-attack":25,"special-defense":25,"speed":35},"evYield":{"defense":2},"baseExp":72,"height":6,"weight":100,"abilities":["shed-skin"],"growth":"medium","genderRate":4,"captureRate":120,"habitat":"forest","flavor":"\u00c8 molto limitato nei movimenti. Se si sente minacciato, estrae il pungiglione e avvelena il nemico.","femaleSprites":false,"learnset":[[0,"harden"],[1,"harden"]]},{"id":15,"slug":"beedrill","name":"Beedrill","types":["bug","poison"],"stats":{"hp":65,"attack":90,"defense":40,"special-attack":45,"special-defense":80,"speed":75},"evYield":{"attack":2,"special-defense":1},"baseExp":178,"height":10,"weight":295,"abilities":["swarm"],"growth":"medium","genderRate":4,"captureRate":45,"habitat":"forest","flavor":"Possiede tre aculei velenosi, due sulle zampe anteriori e uno sull\u2019addome, con cui punge ripetutamente i nemici.","femaleSprites":false,"learnset":[[0,"twineedle"],[1,"fury-attack"],[1,"twineedle"],[11,"fury-attack"],[14,"rage"],[17,"pursuit"],[20,"focus-energy"],[23,"venoshock"],[26,"assurance"],[29,"toxic-spikes"],[32,"pin-missile"],[35,"poison-jab"],[38,"agility"],[41,"endeavor"],[44,"fell-stinger"]]},{"id":16,"slug":"pidgey","name":"Pidgey","types":["normal","flying"],"stats":{"hp":40,"attack":45,"defense":40,"special-attack":35,"special-defense":35,"speed":56},"evYield":{"speed":1},"baseExp":50,"height":3,"weight":18,"abilities":["keen-eye","tangled-feet"],"growth":"medium-slow","genderRate":4,"captureRate":255,"habitat":"forest","flavor":"Di indole docile, preferisce gettare sabbia verso il nemico per proteggersi piuttosto che attaccarlo.","femaleSprites":false,"learnset":[[1,"tackle"],[5,"sand-attack"],[9,"gust"],[13,"quick-attack"],[17,"whirlwind"],[21,"twister"],[25,"feather-dance"],[29,"agility"],[33,"wing-attack"],[37,"roost"],[41,"tailwind"],[45,"mirror-move"],[49,"air-slash"],[53,"hurricane"]]},{"id":17,"slug":"pidgeotto","name":"Pidgeotto","types":["normal","flying"],"stats":{"hp":63,"attack":60,"defense":55,"special-attack":50,"special-defense":50,"speed":71},"evYield":{"speed":2},"baseExp":122,"height":11,"weight":300,"abilities":["keen-eye","tangled-feet"],"growth":"medium-slow","genderRate":4,"captureRate":120,"habitat":"forest","flavor":"Un Pok\u00e9mon pieno di vitalit\u00e0 che vola instancabile sul suo territorio in cerca di prede.","femaleSprites":false,"learnset":[[1,"gust"],[1,"sand-attack"],[1,"tackle"],[5,"sand-attack"],[9,"gust"],[13,"quick-attack"],[17,"whirlwind"],[22,"twister"],[27,"feather-dance"],[32,"agility"],[37,"wing-attack"],[42,"roost"],[47,"tailwind"],[52,"mirror-move"],[57,"air-slash"],[62,"hurricane"]]},{"id":18,"slug":"pidgeot","name":"Pidgeot","types":["normal","flying"],"stats":{"hp":83,"attack":80,"defense":75,"special-attack":70,"special-defense":70,"speed":101},"evYield":{"speed":3},"baseExp":216,"height":15,"weight":395,"abilities":["keen-eye","tangled-feet"],"growth":"medium-slow","genderRate":4,"captureRate":45,"habitat":"forest","flavor":"Pu\u00f2 volare a una velocit\u00e0 di Mach 2 in cerca di prede. I suoi artigli sono armi micidiali.","femaleSprites":false,"learnset":[[1,"gust"],[1,"hurricane"],[1,"quick-attack"],[1,"sand-attack"],[1,"tackle"],[5,"sand-attack"],[9,"gust"],[13,"quick-attack"],[17,"whirlwind"],[22,"twister"],[27,"feather-dance"],[32,"agility"],[38,"wing-attack"],[44,"roost"],[50,"tailwind"],[56,"mirror-move"],[62,"air-slash"],[68,"hurricane"]]},{"id":19,"slug":"rattata","name":"Rattata","types":["normal"],"stats":{"hp":30,"attack":56,"defense":35,"special-attack":25,"special-defense":35,"speed":72},"evYield":{"speed":1},"baseExp":51,"height":3,"weight":35,"abilities":["run-away","guts"],"growth":"medium","genderRate":4,"captureRate":255,"habitat":"grassland","flavor":"Con i suoi incisivi rode qualsiasi cosa. Se se ne avvista uno, \u00e8 probabile che in zona vivano almeno 40 esemplari.","femaleSprites":true,"learnset":[[1,"tackle"],[1,"tail-whip"],[4,"quick-attack"],[7,"focus-energy"],[10,"bite"],[13,"pursuit"],[16,"hyper-fang"],[19,"assurance"],[22,"crunch"],[25,"sucker-punch"],[28,"super-fang"],[31,"double-edge"],[34,"endeavor"]]},{"id":20,"slug":"raticate","name":"Raticate","types":["normal"],"stats":{"hp":55,"attack":81,"defense":60,"special-attack":50,"special-defense":70,"speed":97},"evYield":{"speed":2},"baseExp":145,"height":7,"weight":185,"abilities":["run-away","guts"],"growth":"medium","genderRate":4,"captureRate":127,"habitat":"grassland","flavor":"Dispone di zampe posteriori palmate che gli permettono di nuotare nei fiumi in cerca di prede.","femaleSprites":true,"learnset":[[0,"scary-face"],[1,"focus-energy"],[1,"quick-attack"],[1,"scary-face"],[1,"swords-dance"],[1,"tackle"],[1,"tail-whip"],[4,"quick-attack"],[7,"focus-energy"],[10,"bite"],[13,"pursuit"],[16,"hyper-fang"],[19,"assurance"],[24,"crunch"],[29,"sucker-punch"],[34,"super-fang"],[39,"double-edge"],[44,"endeavor"]]},{"id":21,"slug":"spearow","name":"Spearow","types":["normal","flying"],"stats":{"hp":40,"attack":60,"defense":30,"special-attack":31,"special-defense":31,"speed":70},"evYield":{"speed":1},"baseExp":52,"height":3,"weight":20,"abilities":["keen-eye"],"growth":"medium","genderRate":4,"captureRate":255,"habitat":"rough-terrain","flavor":"Incapace di raggiungere alte quote, sorvola il suo territorio a gran velocit\u00e0 per proteggerlo.","femaleSprites":false,"learnset":[[1,"growl"],[1,"peck"],[4,"leer"],[8,"pursuit"],[11,"fury-attack"],[15,"aerial-ace"],[18,"mirror-move"],[22,"assurance"],[25,"agility"],[29,"focus-energy"],[32,"roost"],[36,"drill-peck"]]},{"id":22,"slug":"fearow","name":"Fearow","types":["normal","flying"],"stats":{"hp":65,"attack":90,"defense":65,"special-attack":61,"special-defense":61,"speed":100},"evYield":{"speed":2},"baseExp":155,"height":12,"weight":380,"abilities":["keen-eye"],"growth":"medium","genderRate":4,"captureRate":90,"habitat":"rough-terrain","flavor":"Questo Pok\u00e9mon molto antico vola in alto nel cielo al minimo accenno di pericolo.","femaleSprites":false,"learnset":[[1,"drill-run"],[1,"growl"],[1,"leer"],[1,"peck"],[1,"pluck"],[1,"pursuit"],[4,"leer"],[8,"pursuit"],[11,"fury-attack"],[15,"aerial-ace"],[18,"mirror-move"],[23,"assurance"],[27,"agility"],[32,"focus-energy"],[36,"roost"],[41,"drill-peck"],[45,"drill-run"]]},{"id":23,"slug":"ekans","name":"Ekans","types":["poison"],"stats":{"hp":35,"attack":60,"defense":44,"special-attack":40,"special-defense":54,"speed":55},"evYield":{"attack":1},"baseExp":58,"height":20,"weight":69,"abilities":["intimidate","shed-skin"],"growth":"medium","genderRate":4,"captureRate":255,"habitat":"grassland","flavor":"Si allunga sempre pi\u00f9 con l\u2019et\u00e0. La notte si avvolge attorno a qualche ramo per dormire.","femaleSprites":false,"learnset":[[1,"leer"],[1,"wrap"],[4,"poison-sting"],[9,"bite"],[12,"glare"],[17,"screech"],[20,"acid"],[25,"spit-up"],[25,"stockpile"],[25,"swallow"],[28,"acid-spray"],[33,"mud-bomb"],[36,"gastro-acid"],[38,"belch"],[41,"haze"],[44,"coil"],[49,"gunk-shot"]]},{"id":24,"slug":"arbok","name":"Arbok","types":["poison"],"stats":{"hp":60,"attack":95,"defense":69,"special-attack":65,"special-defense":79,"speed":80},"evYield":{"attack":2},"baseExp":157,"height":35,"weight":650,"abilities":["intimidate","shed-skin"],"growth":"medium","genderRate":4,"captureRate":90,"habitat":"grassland","flavor":"Gli spaventosi disegni che ha sulla pancia sono oggetto di studio. Ne sono state scoperte sei diverse variazioni.","femaleSprites":false,"learnset":[[0,"crunch"],[1,"bite"],[1,"crunch"],[1,"fire-fang"],[1,"ice-fang"],[1,"leer"],[1,"poison-sting"],[1,"thunder-fang"],[1,"wrap"],[4,"poison-sting"],[9,"bite"],[12,"glare"],[17,"screech"],[20,"acid"],[27,"spit-up"],[27,"stockpile"],[27,"swallow"],[32,"acid-spray"],[39,"mud-bomb"],[44,"gastro-acid"],[48,"belch"],[51,"haze"],[56,"coil"],[63,"gunk-shot"]]},{"id":25,"slug":"pikachu","name":"Pikachu","types":["electric"],"stats":{"hp":35,"attack":55,"defense":40,"special-attack":50,"special-defense":50,"speed":90},"evYield":{"speed":2},"baseExp":112,"height":4,"weight":60,"abilities":["static"],"growth":"medium","genderRate":4,"captureRate":190,"habitat":"forest","flavor":"I Pikachu si salutano fra loro unendo le code e facendovi passare elettricit\u00e0 attraverso.","femaleSprites":true,"learnset":[[1,"tail-whip"],[1,"thunder-shock"],[5,"growl"],[7,"play-nice"],[10,"quick-attack"],[13,"electro-ball"],[18,"thunder-wave"],[21,"feint"],[23,"double-team"],[26,"spark"],[29,"nuzzle"],[34,"discharge"],[37,"slam"],[42,"thunderbolt"],[45,"agility"],[50,"wild-charge"],[53,"light-screen"],[58,"thunder"]]},{"id":26,"slug":"raichu","name":"Raichu","types":["electric"],"stats":{"hp":60,"attack":90,"defense":55,"special-attack":90,"special-defense":80,"speed":110},"evYield":{"speed":3},"baseExp":218,"height":8,"weight":300,"abilities":["static"],"growth":"medium","genderRate":4,"captureRate":75,"habitat":"forest","flavor":"Quando le sacche elettriche sono scariche, rizza la coda per raccogliere elettricit\u00e0 dall\u2019atmosfera.","femaleSprites":true,"learnset":[[1,"quick-attack"],[1,"tail-whip"],[1,"thunder-shock"],[1,"thunderbolt"]]},{"id":27,"slug":"sandshrew","name":"Sandshrew","types":["ground"],"stats":{"hp":50,"attack":75,"defense":85,"special-attack":20,"special-defense":30,"speed":40},"evYield":{"defense":1},"baseExp":60,"height":6,"weight":120,"abilities":["sand-veil"],"growth":"medium","genderRate":4,"captureRate":255,"habitat":"rough-terrain","flavor":"Scava nel terreno per costruire la sua tana, frantumando anche le rocce pi\u00f9 dure con i suoi artigli affilati.","femaleSprites":false,"learnset":[[1,"defense-curl"],[1,"scratch"],[3,"sand-attack"],[5,"poison-sting"],[7,"rollout"],[9,"rapid-spin"],[11,"fury-cutter"],[14,"magnitude"],[17,"swift"],[20,"fury-swipes"],[23,"sand-tomb"],[26,"slash"],[30,"dig"],[34,"gyro-ball"],[38,"swords-dance"],[42,"sandstorm"],[46,"earthquake"]]},{"id":28,"slug":"sandslash","name":"Sandslash","types":["ground"],"stats":{"hp":75,"attack":100,"defense":110,"special-attack":45,"special-defense":55,"speed":65},"evYield":{"defense":2},"baseExp":158,"height":10,"weight":295,"abilities":["sand-veil"],"growth":"medium","genderRate":4,"captureRate":90,"habitat":"rough-terrain","flavor":"Si arrampica sugli alberi utilizzando i suoi artigli affilati per poi condividere le bacche che trova con i Sandshrew, che aspettano sotto.","femaleSprites":false,"learnset":[[0,"crush-claw"],[1,"crush-claw"],[1,"defense-curl"],[1,"poison-sting"],[1,"sand-attack"],[1,"scratch"],[3,"sand-attack"],[5,"poison-sting"],[7,"rollout"],[9,"rapid-spin"],[11,"fury-cutter"],[14,"magnitude"],[17,"swift"],[20,"fury-swipes"],[24,"sand-tomb"],[28,"slash"],[33,"dig"],[38,"gyro-ball"],[43,"swords-dance"],[48,"sandstorm"],[53,"earthquake"]]},{"id":29,"slug":"nidoran-f","name":"Nidoran\u2640","types":["poison"],"stats":{"hp":55,"attack":47,"defense":52,"special-attack":40,"special-defense":40,"speed":41},"evYield":{"hp":1},"baseExp":55,"height":4,"weight":70,"abilities":["poison-point","rivalry"],"growth":"medium-slow","genderRate":8,"captureRate":235,"habitat":"grassland","flavor":"Mangia le bacche frantumandole con i robusti incisivi. La punta del corno \u00e8 leggermente pi\u00f9 arrotondata rispetto a quella del maschio.","femaleSprites":false,"learnset":[[1,"growl"],[1,"scratch"],[7,"tail-whip"],[9,"double-kick"],[13,"poison-sting"],[19,"fury-swipes"],[21,"bite"],[25,"helping-hand"],[31,"toxic-spikes"],[33,"flatter"],[37,"crunch"],[43,"captivate"],[45,"poison-fang"]]},{"id":30,"slug":"nidorina","name":"Nidorina","types":["poison"],"stats":{"hp":70,"attack":62,"defense":67,"special-attack":55,"special-defense":55,"speed":56},"evYield":{"hp":2},"baseExp":128,"height":8,"weight":200,"abilities":["poison-point","rivalry"],"growth":"medium-slow","genderRate":8,"captureRate":120,"habitat":"grassland","flavor":"Quando il branco \u00e8 minacciato da un pericolo, i suoi membri uniscono le forze e dispiegano un coro di ultrasuoni.","femaleSprites":false,"learnset":[[1,"growl"],[1,"scratch"],[7,"tail-whip"],[9,"double-kick"],[13,"poison-sting"],[20,"fury-swipes"],[23,"bite"],[28,"helping-hand"],[35,"toxic-spikes"],[38,"flatter"],[43,"crunch"],[50,"captivate"],[58,"poison-fang"]]},{"id":31,"slug":"nidoqueen","name":"Nidoqueen","types":["poison","ground"],"stats":{"hp":90,"attack":92,"defense":87,"special-attack":75,"special-defense":85,"speed":76},"evYield":{"hp":3},"baseExp":227,"height":13,"weight":600,"abilities":["poison-point","rivalry"],"growth":"medium-slow","genderRate":8,"captureRate":45,"habitat":"grassland","flavor":"Coccola i cuccioli mettendoseli sulla schiena negli spazi fra gli aculei, che in quei momenti smettono di secernere veleno.","femaleSprites":false,"learnset":[[1,"double-kick"],[1,"poison-sting"],[1,"scratch"],[1,"superpower"],[1,"tail-whip"],[23,"chip-away"],[35,"body-slam"],[43,"earth-power"],[58,"superpower"]]},{"id":32,"slug":"nidoran-m","name":"Nidoran\u2642","types":["poison"],"stats":{"hp":46,"attack":57,"defense":40,"special-attack":40,"special-defense":40,"speed":50},"evYield":{"attack":1},"baseExp":55,"height":5,"weight":90,"abilities":["poison-point","rivalry"],"growth":"medium-slow","genderRate":0,"captureRate":235,"habitat":"grassland","flavor":"Impavido nonostante la corporatura minuta, lotta con coraggio per proteggere la femmina a cui \u00e8 affezionato, anche a costo della vita.","femaleSprites":false,"learnset":[[1,"leer"],[1,"peck"],[7,"focus-energy"],[9,"double-kick"],[13,"poison-sting"],[19,"fury-attack"],[21,"horn-attack"],[25,"helping-hand"],[31,"toxic-spikes"],[33,"flatter"],[37,"poison-jab"],[43,"captivate"],[45,"horn-drill"]]},{"id":33,"slug":"nidorino","name":"Nidorino","types":["poison"],"stats":{"hp":61,"attack":72,"defense":57,"special-attack":55,"special-defense":55,"speed":65},"evYield":{"attack":2},"baseExp":128,"height":9,"weight":195,"abilities":["poison-point","rivalry"],"growth":"medium-slow","genderRate":0,"captureRate":120,"habitat":"grassland","flavor":"\u00c8 irritabile e sempre pronto a battersi. Quando il livello di adrenalina nel suo corpo si alza, aumenta anche la concentrazione di tossine.","femaleSprites":false,"learnset":[[1,"leer"],[1,"peck"],[7,"focus-energy"],[9,"double-kick"],[13,"poison-sting"],[20,"fury-attack"],[23,"horn-attack"],[28,"helping-hand"],[35,"toxic-spikes"],[38,"flatter"],[43,"poison-jab"],[50,"captivate"],[58,"horn-drill"]]},{"id":34,"slug":"nidoking","name":"Nidoking","types":["poison","ground"],"stats":{"hp":81,"attack":102,"defense":77,"special-attack":85,"special-defense":75,"speed":85},"evYield":{"attack":3},"baseExp":227,"height":14,"weight":620,"abilities":["poison-point","rivalry"],"growth":"medium-slow","genderRate":0,"captureRate":45,"habitat":"grassland","flavor":"Si d\u00e0 vanto della propria forza e lotta con vigore sfruttando la coda robusta e il corno in grado di frantumare il diamante.","femaleSprites":false,"learnset":[[1,"double-kick"],[1,"focus-energy"],[1,"megahorn"],[1,"peck"],[1,"poison-sting"],[23,"chip-away"],[35,"thrash"],[43,"earth-power"],[58,"megahorn"]]},{"id":35,"slug":"clefairy","name":"Clefairy","types":["fairy"],"stats":{"hp":70,"attack":45,"defense":48,"special-attack":60,"special-defense":65,"speed":35},"evYield":{"hp":2},"baseExp":113,"height":6,"weight":75,"abilities":["cute-charm","magic-guard"],"growth":"fast","genderRate":6,"captureRate":150,"habitat":"mountain","flavor":"Il suo verso e le sue movenze graziose rendono questo adorabile Pok\u00e9mon molto popolare. Sfortunatamente, per\u00f2, \u00e8 molto raro.","femaleSprites":false,"learnset":[[1,"disarming-voice"],[1,"encore"],[1,"growl"],[1,"pound"],[1,"spotlight"],[7,"sing"],[10,"double-slap"],[13,"defense-curl"],[16,"follow-me"],[19,"bestow"],[22,"wake-up-slap"],[25,"minimize"],[28,"stored-power"],[31,"metronome"],[34,"cosmic-power"],[37,"lucky-chant"],[40,"body-slam"],[43,"moonlight"],[46,"moonblast"],[49,"gravity"],[50,"meteor-mash"],[55,"healing-wish"],[58,"after-you"]]},{"id":36,"slug":"clefable","name":"Clefable","types":["fairy"],"stats":{"hp":95,"attack":70,"defense":73,"special-attack":95,"special-defense":90,"speed":60},"evYield":{"hp":3},"baseExp":217,"height":13,"weight":400,"abilities":["cute-charm","magic-guard"],"growth":"fast","genderRate":6,"captureRate":25,"habitat":"mountain","flavor":"Il loro udito \u00e8 cos\u00ec acuto che sentono un ago cadere a 1 km di distanza. Per questo di solito vivono in luoghi molto silenziosi.","femaleSprites":false,"learnset":[[1,"disarming-voice"],[1,"double-slap"],[1,"metronome"],[1,"minimize"],[1,"sing"],[1,"spotlight"]]},{"id":37,"slug":"vulpix","name":"Vulpix","types":["fire"],"stats":{"hp":38,"attack":41,"defense":40,"special-attack":50,"special-defense":65,"speed":65},"evYield":{"speed":1},"baseExp":60,"height":6,"weight":99,"abilities":["flash-fire"],"growth":"medium","genderRate":6,"captureRate":190,"habitat":"grassland","flavor":"Man mano che cresce, le sue sei code diventano sempre pi\u00f9 belle. La pelliccia di cui sono ricoperte \u00e8 calda al tatto.","femaleSprites":false,"learnset":[[1,"ember"],[4,"tail-whip"],[7,"roar"],[9,"baby-doll-eyes"],[10,"quick-attack"],[12,"confuse-ray"],[15,"fire-spin"],[18,"payback"],[20,"will-o-wisp"],[23,"feint-attack"],[26,"hex"],[28,"flame-burst"],[31,"extrasensory"],[34,"safeguard"],[36,"flamethrower"],[39,"imprison"],[42,"fire-blast"],[44,"grudge"],[47,"captivate"],[50,"inferno"]]},{"id":38,"slug":"ninetales","name":"Ninetales","types":["fire"],"stats":{"hp":73,"attack":76,"defense":75,"special-attack":81,"special-defense":100,"speed":100},"evYield":{"special-defense":1,"speed":1},"baseExp":177,"height":11,"weight":199,"abilities":["flash-fire"],"growth":"medium","genderRate":6,"captureRate":75,"habitat":"grassland","flavor":"Molto intelligente e vendicativo. Chi gli afferra una coda rischia una maledizione millenaria.","femaleSprites":false,"learnset":[[1,"confuse-ray"],[1,"flamethrower"],[1,"imprison"],[1,"nasty-plot"],[1,"quick-attack"],[1,"safeguard"]]},{"id":39,"slug":"jigglypuff","name":"Jigglypuff","types":["normal","fairy"],"stats":{"hp":115,"attack":45,"defense":20,"special-attack":45,"special-defense":25,"speed":20},"evYield":{"hp":2},"baseExp":95,"height":5,"weight":55,"abilities":["cute-charm","competitive"],"growth":"fast","genderRate":6,"captureRate":170,"habitat":"grassland","flavor":"Modulando a piacere la lunghezza d\u2019onda della sua voce, canta una melodia misteriosa che fa addormentare immancabilmente chi la ascolta.","femaleSprites":false,"learnset":[[1,"sing"],[3,"defense-curl"],[5,"pound"],[9,"play-nice"],[11,"disarming-voice"],[14,"disable"],[17,"double-slap"],[20,"rollout"],[22,"round"],[25,"spit-up"],[25,"stockpile"],[25,"swallow"],[27,"wake-up-slap"],[30,"rest"],[32,"body-slam"],[35,"gyro-ball"],[38,"mimic"],[41,"hyper-voice"],[45,"double-edge"]]},{"id":40,"slug":"wigglytuff","name":"Wigglytuff","types":["normal","fairy"],"stats":{"hp":140,"attack":70,"defense":45,"special-attack":85,"special-defense":50,"speed":45},"evYield":{"hp":3},"baseExp":196,"height":10,"weight":120,"abilities":["cute-charm","competitive"],"growth":"fast","genderRate":6,"captureRate":50,"habitat":"grassland","flavor":"Va molto fiero del suo manto soffice. Il ricciolo sulla fronte, in particolare, suscita una sensazione sublime al tatto.","femaleSprites":false,"learnset":[[1,"defense-curl"],[1,"disable"],[1,"double-edge"],[1,"double-slap"],[1,"play-rough"],[1,"sing"]]},{"id":41,"slug":"zubat","name":"Zubat","types":["poison","flying"],"stats":{"hp":40,"attack":45,"defense":35,"special-attack":30,"special-defense":40,"speed":55},"evYield":{"speed":1},"baseExp":49,"height":8,"weight":75,"abilities":["inner-focus"],"growth":"medium","genderRate":4,"captureRate":255,"habitat":"cave","flavor":"Vive in grotte mai rischiarate dalla luce del sole. Quando si fa giorno, si raggruppa con i suoi simili per scaldarsi mentre dorme.","femaleSprites":true,"learnset":[[1,"absorb"],[5,"supersonic"],[7,"astonish"],[11,"bite"],[13,"wing-attack"],[17,"confuse-ray"],[19,"air-cutter"],[23,"swift"],[25,"poison-fang"],[29,"mean-look"],[31,"leech-life"],[35,"haze"],[37,"venoshock"],[41,"air-slash"],[43,"quick-guard"]]},{"id":42,"slug":"golbat","name":"Golbat","types":["poison","flying"],"stats":{"hp":75,"attack":80,"defense":70,"special-attack":65,"special-defense":75,"speed":90},"evYield":{"speed":2},"baseExp":159,"height":16,"weight":550,"abilities":["inner-focus"],"growth":"medium","genderRate":4,"captureRate":90,"habitat":"cave","flavor":"Cammina agilmente con i piccoli piedi. Si avvicina di soppiatto alle prede addormentate per azzannarle e berne il sangue.","femaleSprites":true,"learnset":[[1,"absorb"],[1,"astonish"],[1,"bite"],[1,"screech"],[1,"supersonic"],[5,"supersonic"],[7,"astonish"],[11,"bite"],[13,"wing-attack"],[17,"confuse-ray"],[19,"air-cutter"],[24,"swift"],[27,"poison-fang"],[32,"mean-look"],[35,"leech-life"],[40,"haze"],[43,"venoshock"],[48,"air-slash"],[51,"quick-guard"]]},{"id":43,"slug":"oddish","name":"Oddish","types":["grass","poison"],"stats":{"hp":45,"attack":50,"defense":55,"special-attack":75,"special-defense":65,"speed":30},"evYield":{"special-attack":1},"baseExp":64,"height":5,"weight":54,"abilities":["chlorophyll"],"growth":"medium-slow","genderRate":4,"captureRate":255,"habitat":"grassland","flavor":"Di giorno vive nel freddo sottosuolo per evitare la luce del sole. Cresce assorbendo la luce lunare.","femaleSprites":false,"learnset":[[1,"absorb"],[1,"growth"],[5,"sweet-scent"],[9,"acid"],[13,"poison-powder"],[14,"stun-spore"],[15,"sleep-powder"],[19,"mega-drain"],[23,"lucky-chant"],[27,"moonlight"],[31,"giga-drain"],[35,"toxic"],[39,"natural-gift"],[43,"moonblast"],[47,"grassy-terrain"],[51,"petal-dance"]]},{"id":44,"slug":"gloom","name":"Gloom","types":["grass","poison"],"stats":{"hp":60,"attack":65,"defense":70,"special-attack":85,"special-defense":75,"speed":40},"evYield":{"special-attack":2},"baseExp":138,"height":8,"weight":86,"abilities":["chlorophyll"],"growth":"medium-slow","genderRate":4,"captureRate":120,"habitat":"grassland","flavor":"Ci\u00f2 che sembra bava \u00e8 in realt\u00e0 dolce nettare. \u00c8 molto viscoso: si appiccica appena lo si sfiora.","femaleSprites":true,"learnset":[[1,"absorb"],[1,"acid"],[1,"growth"],[1,"sweet-scent"],[5,"sweet-scent"],[9,"acid"],[13,"poison-powder"],[14,"stun-spore"],[15,"sleep-powder"],[19,"mega-drain"],[24,"lucky-chant"],[29,"moonlight"],[34,"giga-drain"],[39,"toxic"],[44,"natural-gift"],[49,"petal-blizzard"],[54,"grassy-terrain"],[59,"petal-dance"]]},{"id":45,"slug":"vileplume","name":"Vileplume","types":["grass","poison"],"stats":{"hp":75,"attack":80,"defense":85,"special-attack":110,"special-defense":90,"speed":50},"evYield":{"special-attack":3},"baseExp":221,"height":12,"weight":186,"abilities":["chlorophyll"],"growth":"medium-slow","genderRate":4,"captureRate":45,"habitat":"grassland","flavor":"Pi\u00f9 grandi sono i petali, maggiore \u00e8 la quantit\u00e0 di polline tossico che contengono. La testa, per\u00f2, diventa molto pesante e fa fatica a sostenerla.","femaleSprites":true,"learnset":[[1,"aromatherapy"],[1,"mega-drain"],[1,"poison-powder"],[1,"stun-spore"],[49,"petal-blizzard"],[59,"petal-dance"],[69,"solar-beam"]]},{"id":46,"slug":"paras","name":"Paras","types":["bug","grass"],"stats":{"hp":35,"attack":70,"defense":55,"special-attack":45,"special-defense":55,"speed":25},"evYield":{"attack":1},"baseExp":57,"height":3,"weight":54,"abilities":["effect-spore","dry-skin"],"growth":"medium","genderRate":4,"captureRate":190,"habitat":"forest","flavor":"Scava nella terra per cibarsi delle radici degli alberi, ma i funghi che ha sul dorso assorbono quasi tutte le sostanze nutritive.","femaleSprites":false,"learnset":[[1,"scratch"],[6,"poison-powder"],[6,"stun-spore"],[11,"absorb"],[17,"fury-cutter"],[22,"spore"],[27,"slash"],[33,"growth"],[38,"giga-drain"],[43,"aromatherapy"],[49,"rage-powder"],[54,"x-scissor"]]},{"id":47,"slug":"parasect","name":"Parasect","types":["bug","grass"],"stats":{"hp":60,"attack":95,"defense":80,"special-attack":60,"special-defense":80,"speed":30},"evYield":{"attack":2,"defense":1},"baseExp":142,"height":10,"weight":295,"abilities":["effect-spore","dry-skin"],"growth":"medium","genderRate":4,"captureRate":75,"habitat":"forest","flavor":"Il fungo sulla schiena assorbe l\u2019energia dell\u2019organismo ospite, su cui ha anche pieno controllo.","femaleSprites":false,"learnset":[[1,"absorb"],[1,"cross-poison"],[1,"poison-powder"],[1,"scratch"],[1,"stun-spore"],[6,"poison-powder"],[6,"stun-spore"],[11,"absorb"],[17,"fury-cutter"],[22,"spore"],[29,"slash"],[37,"growth"],[44,"giga-drain"],[51,"aromatherapy"],[59,"rage-powder"],[66,"x-scissor"]]},{"id":48,"slug":"venonat","name":"Venonat","types":["bug","poison"],"stats":{"hp":60,"attack":55,"defense":50,"special-attack":40,"special-defense":55,"speed":45},"evYield":{"special-defense":1},"baseExp":61,"height":10,"weight":300,"abilities":["compound-eyes","tinted-lens"],"growth":"medium","genderRate":4,"captureRate":190,"habitat":"forest","flavor":"Gli occhi enormi fungono da radar. Alla luce si pu\u00f2 notare che sono formati da molti occhi pi\u00f9 piccoli.","femaleSprites":false,"learnset":[[1,"disable"],[1,"foresight"],[1,"tackle"],[5,"supersonic"],[11,"confusion"],[13,"poison-powder"],[17,"psybeam"],[23,"stun-spore"],[25,"signal-beam"],[29,"sleep-powder"],[35,"leech-life"],[37,"zen-headbutt"],[41,"poison-fang"],[47,"psychic"]]},{"id":49,"slug":"venomoth","name":"Venomoth","types":["bug","poison"],"stats":{"hp":70,"attack":65,"defense":60,"special-attack":90,"special-defense":75,"speed":90},"evYield":{"special-attack":1,"speed":1},"baseExp":158,"height":15,"weight":125,"abilities":["shield-dust","tinted-lens"],"growth":"medium","genderRate":4,"captureRate":75,"habitat":"forest","flavor":"Se si attaccano alla pelle, le scaglie che ricoprono le sue ali sono difficili da togliere. Inoltre, rilasciano una sostanza velenosa.","femaleSprites":false,"learnset":[[0,"gust"],[1,"bug-buzz"],[1,"disable"],[1,"foresight"],[1,"gust"],[1,"quiver-dance"],[1,"silver-wind"],[1,"supersonic"],[1,"tackle"],[5,"supersonic"],[11,"confusion"],[13,"poison-powder"],[17,"psybeam"],[23,"stun-spore"],[25,"signal-beam"],[29,"sleep-powder"],[37,"leech-life"],[41,"zen-headbutt"],[47,"poison-fang"],[55,"psychic"],[59,"bug-buzz"],[63,"quiver-dance"]]},{"id":50,"slug":"diglett","name":"Diglett","types":["ground"],"stats":{"hp":10,"attack":55,"defense":25,"special-attack":35,"special-defense":45,"speed":95},"evYield":{"speed":1},"baseExp":53,"height":2,"weight":8,"abilities":["sand-veil","arena-trap"],"growth":"medium","genderRate":4,"captureRate":255,"habitat":"cave","flavor":"Scava buche a bassa profondit\u00e0. La terra sollevata che lascia al suo passaggio lo rende facilmente individuabile.","femaleSprites":false,"learnset":[[1,"sand-attack"],[1,"scratch"],[4,"growl"],[7,"astonish"],[10,"mud-slap"],[14,"magnitude"],[18,"bulldoze"],[22,"sucker-punch"],[25,"mud-bomb"],[28,"earth-power"],[31,"dig"],[35,"slash"],[39,"earthquake"],[43,"fissure"]]},{"id":51,"slug":"dugtrio","name":"Dugtrio","types":["ground"],"stats":{"hp":35,"attack":100,"defense":50,"special-attack":50,"special-defense":70,"speed":120},"evYield":{"speed":2},"baseExp":149,"height":7,"weight":333,"abilities":["sand-veil","arena-trap"],"growth":"medium","genderRate":4,"captureRate":50,"habitat":"cave","flavor":"Questo trio di Diglett pu\u00f2 scavare fino a 100 km di profondit\u00e0. Nessuno ha mai visto la parte nascosta sotto terra.","femaleSprites":false,"learnset":[[0,"sand-tomb"],[1,"growl"],[1,"night-slash"],[1,"rototiller"],[1,"sand-attack"],[1,"sand-tomb"],[1,"scratch"],[1,"tri-attack"],[4,"growl"],[7,"astonish"],[10,"mud-slap"],[14,"magnitude"],[18,"bulldoze"],[22,"sucker-punch"],[25,"mud-bomb"],[30,"earth-power"],[35,"dig"],[41,"slash"],[47,"earthquake"],[53,"fissure"]]},{"id":52,"slug":"meowth","name":"Meowth","types":["normal"],"stats":{"hp":40,"attack":45,"defense":35,"special-attack":40,"special-defense":40,"speed":90},"evYield":{"speed":1},"baseExp":58,"height":4,"weight":42,"abilities":["pickup","technician"],"growth":"medium","genderRate":4,"captureRate":255,"habitat":"urban","flavor":"Si lava regolarmente il muso per tenere pulita la moneta sulla fronte. Non va d\u2019accordo con il Meowth di Galar.","femaleSprites":false,"learnset":[[1,"growl"],[1,"scratch"],[6,"bite"],[9,"fake-out"],[14,"fury-swipes"],[17,"screech"],[22,"feint-attack"],[25,"taunt"],[30,"pay-day"],[33,"slash"],[38,"nasty-plot"],[41,"assurance"],[46,"captivate"],[49,"night-slash"],[50,"feint"]]},{"id":53,"slug":"persian","name":"Persian","types":["normal"],"stats":{"hp":65,"attack":70,"defense":60,"special-attack":65,"special-defense":65,"speed":115},"evYield":{"speed":2},"baseExp":154,"height":10,"weight":320,"abilities":["limber","technician"],"growth":"medium","genderRate":4,"captureRate":90,"habitat":"urban","flavor":"Ha un portamento elegante e distinto. Non gli va a genio la rozzezza di Perrserker e i due Pok\u00e9mon si disprezzano a vicenda.","femaleSprites":false,"learnset":[[0,"swift"],[1,"bite"],[1,"fake-out"],[1,"growl"],[1,"play-rough"],[1,"scratch"],[1,"swift"],[1,"switcheroo"],[6,"bite"],[9,"fake-out"],[14,"fury-swipes"],[17,"screech"],[22,"feint-attack"],[25,"taunt"],[32,"power-gem"],[37,"slash"],[44,"nasty-plot"],[49,"assurance"],[56,"captivate"],[61,"night-slash"],[65,"feint"]]},{"id":54,"slug":"psyduck","name":"Psyduck","types":["water"],"stats":{"hp":50,"attack":52,"defense":48,"special-attack":65,"special-defense":50,"speed":55},"evYield":{"special-attack":1},"baseExp":64,"height":8,"weight":196,"abilities":["damp","cloud-nine"],"growth":"medium","genderRate":4,"captureRate":190,"habitat":"waters-edge","flavor":"Pi\u00f9 \u00e8 stressato, pi\u00f9 il suo mal di testa si fa intenso. Con i suoi incredibili poteri psicocinetici travolge chiunque nelle vicinanze.","femaleSprites":false,"learnset":[[1,"scratch"],[1,"water-sport"],[4,"tail-whip"],[7,"water-gun"],[10,"confusion"],[13,"fury-swipes"],[16,"water-pulse"],[19,"disable"],[22,"screech"],[25,"zen-headbutt"],[28,"aqua-tail"],[31,"soak"],[34,"psych-up"],[37,"amnesia"],[40,"hydro-pump"],[43,"wonder-room"]]},{"id":55,"slug":"golduck","name":"Golduck","types":["water"],"stats":{"hp":80,"attack":82,"defense":78,"special-attack":95,"special-defense":80,"speed":85},"evYield":{"special-attack":2},"baseExp":175,"height":17,"weight":766,"abilities":["damp","cloud-nine"],"growth":"medium","genderRate":4,"captureRate":75,"habitat":"waters-edge","flavor":"Secondo antichi racconti, Golduck trascina in acqua gli esseri umani che inquinano il fiume portandoli via con s\u00e9.","femaleSprites":false,"learnset":[[1,"aqua-jet"],[1,"me-first"],[1,"scratch"],[1,"tail-whip"],[1,"water-gun"],[1,"water-sport"],[4,"tail-whip"],[7,"water-gun"],[10,"confusion"],[13,"fury-swipes"],[16,"water-pulse"],[19,"disable"],[22,"screech"],[25,"zen-headbutt"],[28,"aqua-tail"],[31,"soak"],[36,"psych-up"],[41,"amnesia"],[46,"hydro-pump"],[51,"wonder-room"]]},{"id":56,"slug":"mankey","name":"Mankey","types":["fighting"],"stats":{"hp":40,"attack":80,"defense":35,"special-attack":35,"special-defense":45,"speed":70},"evYield":{"attack":1},"baseExp":61,"height":5,"weight":280,"abilities":["vital-spirit","anger-point"],"growth":"medium","genderRate":4,"captureRate":190,"habitat":"mountain","flavor":"Un Pok\u00e9mon agile che vive sugli alberi. \u00c8 molto irascibile e non esita ad attaccare chiunque gli capiti a tiro.","femaleSprites":false,"learnset":[[1,"covet"],[1,"focus-energy"],[1,"leer"],[1,"low-kick"],[1,"scratch"],[5,"fury-swipes"],[8,"karate-chop"],[12,"pursuit"],[15,"seismic-toss"],[19,"swagger"],[22,"cross-chop"],[26,"assurance"],[29,"punishment"],[33,"thrash"],[36,"close-combat"],[40,"screech"],[43,"stomping-tantrum"],[47,"outrage"],[50,"final-gambit"]]},{"id":57,"slug":"primeape","name":"Primeape","types":["fighting"],"stats":{"hp":65,"attack":105,"defense":60,"special-attack":60,"special-defense":70,"speed":95},"evYield":{"attack":2},"baseExp":159,"height":10,"weight":320,"abilities":["vital-spirit","anger-point"],"growth":"medium","genderRate":4,"captureRate":75,"habitat":"mountain","flavor":"\u00c8 molto difficile vedere questo Pok\u00e9mon calmo, dato che la sua furia si placa solamente quando si trova nella solitudine pi\u00f9 assoluta.","femaleSprites":false,"learnset":[[0,"rage"],[1,"final-gambit"],[1,"fling"],[1,"focus-energy"],[1,"leer"],[1,"low-kick"],[1,"rage"],[1,"scratch"],[5,"fury-swipes"],[8,"karate-chop"],[12,"pursuit"],[15,"seismic-toss"],[19,"swagger"],[22,"cross-chop"],[26,"assurance"],[30,"punishment"],[35,"thrash"],[39,"close-combat"],[44,"screech"],[48,"stomping-tantrum"],[53,"outrage"],[57,"final-gambit"]]},{"id":58,"slug":"growlithe","name":"Growlithe","types":["fire"],"stats":{"hp":55,"attack":70,"defense":45,"special-attack":70,"special-defense":50,"speed":60},"evYield":{"attack":1},"baseExp":70,"height":7,"weight":190,"abilities":["intimidate","flash-fire"],"growth":"slow","genderRate":2,"captureRate":190,"habitat":"grassland","flavor":"Di indole molto leale, abbaia furiosamente contro chiunque minacci di attaccare il suo Allenatore.","femaleSprites":false,"learnset":[[1,"bite"],[1,"roar"],[6,"ember"],[8,"leer"],[10,"odor-sleuth"],[12,"helping-hand"],[17,"flame-wheel"],[19,"reversal"],[21,"fire-fang"],[23,"take-down"],[28,"flame-burst"],[30,"agility"],[32,"retaliate"],[34,"flamethrower"],[39,"crunch"],[41,"heat-wave"],[43,"outrage"],[45,"flare-blitz"]]},{"id":59,"slug":"arcanine","name":"Arcanine","types":["fire"],"stats":{"hp":90,"attack":110,"defense":80,"special-attack":100,"special-defense":80,"speed":95},"evYield":{"attack":2},"baseExp":194,"height":19,"weight":1550,"abilities":["intimidate","flash-fire"],"growth":"slow","genderRate":2,"captureRate":75,"habitat":"grassland","flavor":"Da sempre ammirato per la sua bellezza, corre veloce come se avesse le ali.","femaleSprites":false,"learnset":[[1,"bite"],[1,"fire-fang"],[1,"odor-sleuth"],[1,"roar"],[1,"thunder-fang"],[34,"extreme-speed"]]},{"id":60,"slug":"poliwag","name":"Poliwag","types":["water"],"stats":{"hp":40,"attack":50,"defense":40,"special-attack":40,"special-defense":40,"speed":90},"evYield":{"speed":1},"baseExp":60,"height":6,"weight":124,"abilities":["water-absorb","damp"],"growth":"medium-slow","genderRate":4,"captureRate":255,"habitat":"waters-edge","flavor":"Nei fiumi dalla corrente impetuosa, si attacca alle rocce utilizzando le spesse labbra come una ventosa.","femaleSprites":false,"learnset":[[1,"water-sport"],[5,"water-gun"],[8,"hypnosis"],[11,"bubble"],[15,"double-slap"],[18,"rain-dance"],[21,"body-slam"],[25,"bubble-beam"],[28,"mud-shot"],[31,"belly-drum"],[35,"wake-up-slap"],[38,"hydro-pump"],[41,"mud-bomb"]]},{"id":61,"slug":"poliwhirl","name":"Poliwhirl","types":["water"],"stats":{"hp":65,"attack":65,"defense":65,"special-attack":50,"special-defense":50,"speed":90},"evYield":{"speed":2},"baseExp":135,"height":10,"weight":200,"abilities":["water-absorb","damp"],"growth":"medium-slow","genderRate":4,"captureRate":120,"habitat":"waters-edge","flavor":"Secerne un sudore viscido simile a muco, grazie al quale riesce a fuggire sgusciando via dalla presa dei nemici.","femaleSprites":false,"learnset":[[1,"hypnosis"],[1,"water-gun"],[1,"water-sport"],[5,"water-gun"],[8,"hypnosis"],[11,"bubble"],[15,"double-slap"],[18,"rain-dance"],[21,"body-slam"],[27,"bubble-beam"],[32,"mud-shot"],[37,"belly-drum"],[43,"wake-up-slap"],[48,"hydro-pump"],[53,"mud-bomb"]]},{"id":62,"slug":"poliwrath","name":"Poliwrath","types":["water","fighting"],"stats":{"hp":90,"attack":95,"defense":95,"special-attack":70,"special-defense":90,"speed":70},"evYield":{"defense":3},"baseExp":230,"height":13,"weight":540,"abilities":["water-absorb","damp"],"growth":"medium-slow","genderRate":4,"captureRate":45,"habitat":"waters-edge","flavor":"\u00c8 abile sia nel nuoto che nella lotta corpo a corpo. Sferra pugni vigorosi grazie alle sue braccia allenate.","femaleSprites":false,"learnset":[[0,"submission"],[1,"bubble-beam"],[1,"circle-throw"],[1,"double-slap"],[1,"hypnosis"],[1,"submission"],[32,"dynamic-punch"],[43,"mind-reader"],[53,"circle-throw"]]},{"id":63,"slug":"abra","name":"Abra","types":["psychic"],"stats":{"hp":25,"attack":20,"defense":15,"special-attack":105,"special-defense":55,"speed":90},"evYield":{"special-attack":1},"baseExp":62,"height":9,"weight":195,"abilities":["synchronize","inner-focus"],"growth":"medium-slow","genderRate":2,"captureRate":200,"habitat":"urban","flavor":"\u00c8 in grado di teletrasportarsi mentre dorme. Si dice che pi\u00f9 profondo sia il suo sonno, pi\u00f9 possa spostarsi lontano.","femaleSprites":false,"learnset":[[1,"teleport"]]},{"id":64,"slug":"kadabra","name":"Kadabra","types":["psychic"],"stats":{"hp":40,"attack":35,"defense":30,"special-attack":120,"special-defense":70,"speed":105},"evYield":{"special-attack":2},"baseExp":140,"height":13,"weight":565,"abilities":["synchronize","inner-focus"],"growth":"medium-slow","genderRate":2,"captureRate":100,"habitat":"urban","flavor":"La potenza della sua psicocinesi \u00e8 immensa. Immagazzina i suoi poteri psichici nella stella sulla fronte, preparandosi all\u2019evoluzione.","femaleSprites":true,"learnset":[[0,"kinesis"],[1,"confusion"],[1,"kinesis"],[1,"teleport"],[16,"confusion"],[18,"disable"],[21,"psybeam"],[23,"miracle-eye"],[26,"reflect"],[28,"psycho-cut"],[31,"recover"],[33,"telekinesis"],[36,"ally-switch"],[38,"psychic"],[41,"role-play"],[43,"future-sight"],[46,"trick"]]},{"id":65,"slug":"alakazam","name":"Alakazam","types":["psychic"],"stats":{"hp":55,"attack":50,"defense":45,"special-attack":135,"special-defense":95,"speed":120},"evYield":{"special-attack":3},"baseExp":225,"height":15,"weight":480,"abilities":["synchronize","inner-focus"],"growth":"medium-slow","genderRate":2,"captureRate":50,"habitat":"urban","flavor":"Padroneggia potenti poteri psichici, con i quali si dice abbia creato i cucchiai che tiene in mano.","femaleSprites":true,"learnset":[[0,"kinesis"],[1,"confusion"],[1,"kinesis"],[1,"teleport"],[16,"confusion"],[18,"disable"],[21,"psybeam"],[23,"miracle-eye"],[26,"reflect"],[28,"psycho-cut"],[31,"recover"],[33,"telekinesis"],[36,"ally-switch"],[38,"psychic"],[41,"calm-mind"],[43,"future-sight"],[46,"trick"]]},{"id":66,"slug":"machop","name":"Machop","types":["fighting"],"stats":{"hp":70,"attack":80,"defense":50,"special-attack":35,"special-defense":35,"speed":35},"evYield":{"attack":1},"baseExp":61,"height":8,"weight":195,"abilities":["guts","no-guard"],"growth":"medium-slow","genderRate":2,"captureRate":180,"habitat":"mountain","flavor":"Sempre traboccante di energia, passa il tempo a sollevare massi. Cos\u00ec diventa ancora pi\u00f9 forte.","femaleSprites":false,"learnset":[[1,"leer"],[1,"low-kick"],[3,"focus-energy"],[7,"karate-chop"],[9,"foresight"],[13,"low-sweep"],[15,"seismic-toss"],[19,"revenge"],[21,"knock-off"],[25,"vital-throw"],[27,"wake-up-slap"],[31,"dual-chop"],[33,"submission"],[37,"bulk-up"],[39,"cross-chop"],[43,"scary-face"],[45,"dynamic-punch"]]},{"id":67,"slug":"machoke","name":"Machoke","types":["fighting"],"stats":{"hp":80,"attack":100,"defense":70,"special-attack":50,"special-defense":60,"speed":45},"evYield":{"attack":2},"baseExp":142,"height":15,"weight":705,"abilities":["guts","no-guard"],"growth":"medium-slow","genderRate":2,"captureRate":90,"habitat":"mountain","flavor":"Ha un fisico vigoroso e instancabile. Aiuta le persone a trasportare carichi e a svolgere altri lavori pesanti.","femaleSprites":false,"learnset":[[1,"focus-energy"],[1,"karate-chop"],[1,"leer"],[1,"low-kick"],[3,"focus-energy"],[7,"karate-chop"],[9,"foresight"],[13,"low-sweep"],[15,"seismic-toss"],[19,"revenge"],[21,"knock-off"],[25,"vital-throw"],[27,"wake-up-slap"],[33,"dual-chop"],[37,"submission"],[43,"bulk-up"],[47,"cross-chop"],[53,"scary-face"],[57,"dynamic-punch"]]},{"id":68,"slug":"machamp","name":"Machamp","types":["fighting"],"stats":{"hp":90,"attack":130,"defense":80,"special-attack":65,"special-defense":85,"speed":55},"evYield":{"attack":3},"baseExp":227,"height":16,"weight":1300,"abilities":["guts","no-guard"],"growth":"medium-slow","genderRate":2,"captureRate":45,"habitat":"mountain","flavor":"Muove le sue quattro braccia per riflesso prima ancora di rendersene conto, sferrando pugni a raffica.","femaleSprites":false,"learnset":[[0,"strength"],[1,"focus-energy"],[1,"karate-chop"],[1,"leer"],[1,"low-kick"],[1,"strength"],[1,"wide-guard"],[3,"focus-energy"],[7,"karate-chop"],[9,"foresight"],[13,"low-sweep"],[15,"seismic-toss"],[19,"revenge"],[21,"knock-off"],[25,"vital-throw"],[27,"wake-up-slap"],[33,"dual-chop"],[37,"submission"],[43,"bulk-up"],[47,"cross-chop"],[53,"scary-face"],[57,"dynamic-punch"]]},{"id":69,"slug":"bellsprout","name":"Bellsprout","types":["grass","poison"],"stats":{"hp":50,"attack":75,"defense":35,"special-attack":70,"special-defense":30,"speed":40},"evYield":{"attack":1},"baseExp":60,"height":7,"weight":40,"abilities":["chlorophyll"],"growth":"medium-slow","genderRate":4,"captureRate":255,"habitat":"forest","flavor":"Ama i luoghi caldi e umidi. Cattura minuscoli Pok\u00e9mon di tipo Coleottero con i suoi viticci e poi li divora.","femaleSprites":false,"learnset":[[1,"vine-whip"],[7,"growth"],[11,"wrap"],[13,"sleep-powder"],[15,"poison-powder"],[17,"stun-spore"],[23,"acid"],[27,"knock-off"],[29,"sweet-scent"],[35,"gastro-acid"],[39,"razor-leaf"],[41,"poison-jab"],[47,"slam"],[50,"wring-out"]]},{"id":70,"slug":"weepinbell","name":"Weepinbell","types":["grass","poison"],"stats":{"hp":65,"attack":90,"defense":50,"special-attack":85,"special-defense":45,"speed":55},"evYield":{"attack":2},"baseExp":137,"height":10,"weight":64,"abilities":["chlorophyll"],"growth":"medium-slow","genderRate":4,"captureRate":120,"habitat":"forest","flavor":"Quando \u00e8 affamato divora qualsiasi cosa gli capiti a tiro e la scioglie con i suoi potenti acidi.","femaleSprites":false,"learnset":[[1,"growth"],[1,"vine-whip"],[1,"wrap"],[7,"growth"],[11,"wrap"],[13,"sleep-powder"],[15,"poison-powder"],[17,"stun-spore"],[24,"acid"],[29,"knock-off"],[32,"sweet-scent"],[39,"gastro-acid"],[44,"razor-leaf"],[47,"poison-jab"],[54,"slam"],[58,"wring-out"]]},{"id":71,"slug":"victreebel","name":"Victreebel","types":["grass","poison"],"stats":{"hp":80,"attack":105,"defense":65,"special-attack":100,"special-defense":70,"speed":70},"evYield":{"attack":3},"baseExp":221,"height":17,"weight":155,"abilities":["chlorophyll"],"growth":"medium-slow","genderRate":4,"captureRate":45,"habitat":"forest","flavor":"Attira le prede con il dolce aroma del miele, le inghiotte e nel giro di un giorno le scioglie completamente, ossa incluse.","femaleSprites":false,"learnset":[[0,"leaf-tornado"],[1,"leaf-tornado"],[1,"razor-leaf"],[1,"sleep-powder"],[1,"spit-up"],[1,"stockpile"],[1,"swallow"],[1,"sweet-scent"],[1,"vine-whip"],[32,"leaf-storm"],[44,"leaf-blade"]]},{"id":72,"slug":"tentacool","name":"Tentacool","types":["water","poison"],"stats":{"hp":40,"attack":40,"defense":35,"special-attack":50,"special-defense":100,"speed":70},"evYield":{"special-defense":1},"baseExp":67,"height":9,"weight":455,"abilities":["clear-body","liquid-ooze"],"growth":"slow","genderRate":4,"captureRate":190,"habitat":"sea","flavor":"Il suo corpo composto quasi interamente d\u2019acqua rende molto difficile individuarlo quando \u00e8 in mare.","femaleSprites":false,"learnset":[[1,"poison-sting"],[4,"supersonic"],[7,"constrict"],[10,"acid"],[13,"toxic-spikes"],[16,"water-pulse"],[19,"wrap"],[22,"acid-spray"],[25,"bubble-beam"],[28,"barrier"],[31,"poison-jab"],[34,"brine"],[37,"screech"],[40,"hex"],[43,"sludge-wave"],[46,"hydro-pump"],[49,"wring-out"]]},{"id":73,"slug":"tentacruel","name":"Tentacruel","types":["water","poison"],"stats":{"hp":80,"attack":70,"defense":65,"special-attack":80,"special-defense":120,"speed":100},"evYield":{"special-defense":2},"baseExp":180,"height":16,"weight":550,"abilities":["clear-body","liquid-ooze"],"growth":"slow","genderRate":4,"captureRate":60,"habitat":"sea","flavor":"Pu\u00f2 allungare e accorciare a piacere i suoi 80 tentacoli. Li estende a mo\u2019 di rete per catturare le prede, che trafigge con aculei velenosi.","femaleSprites":false,"learnset":[[1,"acid"],[1,"constrict"],[1,"poison-sting"],[1,"reflect-type"],[1,"supersonic"],[1,"wring-out"],[4,"supersonic"],[7,"constrict"],[10,"acid"],[13,"toxic-spikes"],[16,"water-pulse"],[19,"wrap"],[22,"acid-spray"],[25,"bubble-beam"],[28,"barrier"],[32,"poison-jab"],[36,"brine"],[40,"screech"],[44,"hex"],[48,"sludge-wave"],[52,"hydro-pump"],[56,"wring-out"]]},{"id":74,"slug":"geodude","name":"Geodude","types":["rock","ground"],"stats":{"hp":40,"attack":80,"defense":100,"special-attack":30,"special-defense":30,"speed":20},"evYield":{"defense":1},"baseExp":60,"height":4,"weight":200,"abilities":["rock-head","sturdy"],"growth":"medium-slow","genderRate":4,"captureRate":255,"habitat":"mountain","flavor":"Lo si pu\u00f2 trovare vicino ai sentieri di montagna. Bisogna fare attenzione a non calpestarlo per sbaglio, altrimenti diventa furioso.","femaleSprites":false,"learnset":[[1,"defense-curl"],[1,"tackle"],[4,"mud-sport"],[6,"rock-polish"],[10,"rollout"],[12,"magnitude"],[16,"rock-throw"],[18,"smack-down"],[22,"bulldoze"],[24,"self-destruct"],[28,"stealth-rock"],[30,"rock-blast"],[34,"earthquake"],[36,"explosion"],[40,"double-edge"],[42,"stone-edge"]]},{"id":75,"slug":"graveler","name":"Graveler","types":["rock","ground"],"stats":{"hp":55,"attack":95,"defense":115,"special-attack":45,"special-defense":45,"speed":35},"evYield":{"defense":2},"baseExp":137,"height":10,"weight":1050,"abilities":["rock-head","sturdy"],"growth":"medium-slow","genderRate":4,"captureRate":120,"habitat":"mountain","flavor":"Spesso viene visto rotolare gi\u00f9 per i sentieri di montagna, travolgendo tutto ci\u00f2 che incontra.","femaleSprites":false,"learnset":[[1,"defense-curl"],[1,"mud-sport"],[1,"rock-polish"],[1,"tackle"],[4,"mud-sport"],[6,"rock-polish"],[10,"rollout"],[12,"magnitude"],[16,"rock-throw"],[18,"smack-down"],[22,"bulldoze"],[24,"self-destruct"],[30,"stealth-rock"],[34,"rock-blast"],[40,"earthquake"],[44,"explosion"],[50,"double-edge"],[54,"stone-edge"]]},{"id":76,"slug":"golem","name":"Golem","types":["rock","ground"],"stats":{"hp":80,"attack":120,"defense":130,"special-attack":55,"special-defense":65,"speed":45},"evYield":{"defense":3},"baseExp":223,"height":14,"weight":3000,"abilities":["rock-head","sturdy"],"growth":"medium-slow","genderRate":4,"captureRate":45,"habitat":"mountain","flavor":"Subito dopo la muta il suo corpo \u00e8 bianco e morbido, ma al contatto con l\u2019aria si trasforma immediatamente in una dura corazza.","femaleSprites":false,"learnset":[[1,"defense-curl"],[1,"heavy-slam"],[1,"mud-sport"],[1,"rock-polish"],[1,"tackle"],[4,"mud-sport"],[6,"rock-polish"],[10,"steamroller"],[12,"magnitude"],[16,"rock-throw"],[18,"smack-down"],[22,"bulldoze"],[24,"self-destruct"],[30,"stealth-rock"],[34,"rock-blast"],[40,"earthquake"],[44,"explosion"],[50,"double-edge"],[54,"stone-edge"],[60,"heavy-slam"]]},{"id":77,"slug":"ponyta","name":"Ponyta","types":["fire"],"stats":{"hp":50,"attack":85,"defense":55,"special-attack":65,"special-defense":65,"speed":90},"evYield":{"speed":1},"baseExp":82,"height":10,"weight":300,"abilities":["run-away","flash-fire"],"growth":"medium","genderRate":4,"captureRate":190,"habitat":"grassland","flavor":"Una volta conquistata la fiducia di Ponyta, \u00e8 possibile toccare la sua criniera infuocata senza scottarsi.","femaleSprites":false,"learnset":[[1,"growl"],[1,"tackle"],[4,"tail-whip"],[9,"ember"],[13,"flame-wheel"],[17,"stomp"],[21,"flame-charge"],[25,"fire-spin"],[29,"take-down"],[33,"inferno"],[37,"agility"],[41,"fire-blast"],[45,"bounce"],[49,"flare-blitz"]]},{"id":78,"slug":"rapidash","name":"Rapidash","types":["fire"],"stats":{"hp":65,"attack":100,"defense":70,"special-attack":80,"special-defense":80,"speed":105},"evYield":{"speed":2},"baseExp":175,"height":17,"weight":950,"abilities":["run-away","flash-fire"],"growth":"medium","genderRate":4,"captureRate":60,"habitat":"grassland","flavor":"L\u2019esemplare pi\u00f9 veloce diventa il capo del gruppo e ne decide velocit\u00e0 e destinazione.","femaleSprites":false,"learnset":[[0,"fury-attack"],[1,"ember"],[1,"fury-attack"],[1,"growl"],[1,"megahorn"],[1,"poison-jab"],[1,"quick-attack"],[1,"tail-whip"],[4,"tail-whip"],[9,"ember"],[13,"flame-wheel"],[17,"stomp"],[21,"flame-charge"],[25,"fire-spin"],[29,"take-down"],[33,"inferno"],[37,"agility"],[41,"fire-blast"],[45,"bounce"],[49,"flare-blitz"]]},{"id":79,"slug":"slowpoke","name":"Slowpoke","types":["water","psychic"],"stats":{"hp":90,"attack":65,"defense":65,"special-attack":40,"special-defense":40,"speed":15},"evYield":{"hp":1},"baseExp":63,"height":12,"weight":360,"abilities":["oblivious","own-tempo"],"growth":"medium","genderRate":4,"captureRate":190,"habitat":"waters-edge","flavor":"Se immersa nell\u2019acqua, la coda di Slowpoke secerne una dolce linfa che il Pok\u00e9mon usa per attirare altri Pok\u00e9mon e pescarli.","femaleSprites":false,"learnset":[[1,"curse"],[1,"tackle"],[1,"yawn"],[5,"growl"],[9,"water-gun"],[14,"confusion"],[19,"disable"],[23,"headbutt"],[28,"water-pulse"],[32,"zen-headbutt"],[36,"slack-off"],[41,"amnesia"],[45,"psychic"],[49,"rain-dance"],[54,"psych-up"],[58,"heal-pulse"]]},{"id":80,"slug":"slowbro","name":"Slowbro","types":["water","psychic"],"stats":{"hp":95,"attack":75,"defense":110,"special-attack":100,"special-defense":80,"speed":30},"evYield":{"defense":2},"baseExp":172,"height":16,"weight":785,"abilities":["oblivious","own-tempo"],"growth":"medium","genderRate":4,"captureRate":75,"habitat":"waters-edge","flavor":"Ha assunto una postura eretta per lo shock causato dal morso di uno Shellder. Pare che torni a essere uno Slowpoke se lo Shellder si stacca.","femaleSprites":false,"learnset":[[0,"withdraw"],[1,"curse"],[1,"growl"],[1,"heal-pulse"],[1,"tackle"],[1,"withdraw"],[1,"yawn"],[5,"growl"],[9,"water-gun"],[14,"confusion"],[19,"disable"],[23,"headbutt"],[28,"water-pulse"],[32,"zen-headbutt"],[36,"slack-off"],[43,"amnesia"],[49,"psychic"],[55,"rain-dance"],[62,"psych-up"],[68,"heal-pulse"]]},{"id":81,"slug":"magnemite","name":"Magnemite","types":["electric","steel"],"stats":{"hp":25,"attack":35,"defense":70,"special-attack":95,"special-defense":55,"speed":45},"evYield":{"special-attack":1},"baseExp":65,"height":3,"weight":60,"abilities":["magnet-pull","sturdy"],"growth":"medium","genderRate":-1,"captureRate":190,"habitat":"rough-terrain","flavor":"Vive cibandosi di elettricit\u00e0. Fluttua in aria rilasciando onde elettromagnetiche dagli elementi laterali.","femaleSprites":false,"learnset":[[1,"supersonic"],[1,"tackle"],[5,"thunder-shock"],[7,"thunder-wave"],[11,"magnet-bomb"],[13,"light-screen"],[17,"sonic-boom"],[19,"spark"],[23,"mirror-shot"],[25,"metal-sound"],[29,"electro-ball"],[31,"flash-cannon"],[35,"screech"],[37,"discharge"],[41,"lock-on"],[43,"magnet-rise"],[47,"gyro-ball"],[49,"zap-cannon"]]},{"id":82,"slug":"magneton","name":"Magneton","types":["electric","steel"],"stats":{"hp":50,"attack":60,"defense":95,"special-attack":120,"special-defense":70,"speed":70},"evYield":{"special-attack":2},"baseExp":163,"height":10,"weight":600,"abilities":["magnet-pull","sturdy"],"growth":"medium","genderRate":-1,"captureRate":60,"habitat":"rough-terrain","flavor":"Produce costantemente una potente carica magnetica che causa malfunzionamenti nella maggior parte dei computer.","femaleSprites":false,"learnset":[[0,"tri-attack"],[1,"electric-terrain"],[1,"supersonic"],[1,"tackle"],[1,"thunder-shock"],[1,"thunder-wave"],[1,"tri-attack"],[1,"zap-cannon"],[5,"thunder-shock"],[7,"thunder-wave"],[11,"magnet-bomb"],[13,"light-screen"],[17,"sonic-boom"],[19,"spark"],[23,"mirror-shot"],[25,"metal-sound"],[29,"electro-ball"],[33,"flash-cannon"],[39,"screech"],[43,"discharge"],[49,"lock-on"],[53,"magnet-rise"],[59,"gyro-ball"],[63,"zap-cannon"]]},{"id":83,"slug":"farfetchd","name":"Farfetch\u2019d","types":["normal","flying"],"stats":{"hp":52,"attack":90,"defense":55,"special-attack":58,"special-defense":62,"speed":60},"evYield":{"attack":1},"baseExp":132,"height":8,"weight":150,"abilities":["keen-eye","inner-focus"],"growth":"medium","genderRate":4,"captureRate":45,"habitat":"grassland","flavor":"Affronta i nemici usando il gambo di una pianta, brandendolo secondo stili diversi in base alla scuola di lotta che segue.","femaleSprites":false,"learnset":[[1,"brave-bird"],[1,"fury-cutter"],[1,"leer"],[1,"peck"],[1,"poison-jab"],[1,"sand-attack"],[7,"fury-attack"],[9,"aerial-ace"],[13,"knock-off"],[19,"slash"],[21,"air-cutter"],[25,"swords-dance"],[31,"agility"],[33,"night-slash"],[37,"acrobatics"],[43,"feint"],[45,"false-swipe"],[49,"air-slash"],[55,"brave-bird"]]},{"id":84,"slug":"doduo","name":"Doduo","types":["normal","flying"],"stats":{"hp":35,"attack":85,"defense":45,"special-attack":35,"special-defense":35,"speed":75},"evYield":{"attack":1},"baseExp":62,"height":14,"weight":392,"abilities":["run-away","early-bird"],"growth":"medium","genderRate":4,"captureRate":190,"habitat":"grassland","flavor":"Le cortissime ali non gli permettono di volare. Pu\u00f2 tuttavia correre velocissimo grazie alle zampe ben sviluppate.","femaleSprites":true,"learnset":[[1,"growl"],[1,"peck"],[5,"quick-attack"],[8,"rage"],[12,"fury-attack"],[15,"pursuit"],[19,"pluck"],[22,"double-hit"],[26,"agility"],[29,"uproar"],[33,"acupressure"],[36,"swords-dance"],[40,"jump-kick"],[43,"drill-peck"],[47,"endeavor"],[50,"thrash"]]},{"id":85,"slug":"dodrio","name":"Dodrio","types":["normal","flying"],"stats":{"hp":60,"attack":110,"defense":70,"special-attack":60,"special-defense":60,"speed":110},"evYield":{"attack":2},"baseExp":165,"height":18,"weight":852,"abilities":["run-away","early-bird"],"growth":"medium","genderRate":4,"captureRate":45,"habitat":"grassland","flavor":"Un Doduo si evolve in Dodrio quando una delle due teste si divide. Lo si vede sfrecciare per le praterie a 60 km/h.","femaleSprites":true,"learnset":[[0,"tri-attack"],[1,"growl"],[1,"peck"],[1,"quick-attack"],[1,"rage"],[1,"tri-attack"],[5,"quick-attack"],[8,"rage"],[12,"fury-attack"],[15,"pursuit"],[19,"pluck"],[22,"double-hit"],[26,"agility"],[29,"uproar"],[34,"acupressure"],[38,"swords-dance"],[43,"jump-kick"],[47,"drill-peck"],[52,"endeavor"],[56,"thrash"]]},{"id":86,"slug":"seel","name":"Seel","types":["water"],"stats":{"hp":65,"attack":45,"defense":55,"special-attack":45,"special-defense":70,"speed":45},"evYield":{"special-defense":1},"baseExp":65,"height":11,"weight":900,"abilities":["thick-fat","hydration"],"growth":"medium","genderRate":4,"captureRate":190,"habitat":"sea","flavor":"Adora gli ambienti gelidi. Nuota con piacere nell\u2019acqua a temperature di circa -10 \u00baC.","femaleSprites":false,"learnset":[[1,"headbutt"],[3,"growl"],[7,"water-sport"],[11,"icy-wind"],[13,"encore"],[17,"ice-shard"],[21,"rest"],[23,"aqua-ring"],[27,"aurora-beam"],[31,"aqua-jet"],[33,"brine"],[37,"take-down"],[41,"dive"],[43,"aqua-tail"],[47,"ice-beam"],[51,"safeguard"],[53,"hail"]]},{"id":87,"slug":"dewgong","name":"Dewgong","types":["water","ice"],"stats":{"hp":90,"attack":70,"defense":80,"special-attack":70,"special-defense":95,"speed":70},"evYield":{"special-defense":2},"baseExp":166,"height":17,"weight":1200,"abilities":["thick-fat","hydration"],"growth":"medium","genderRate":4,"captureRate":75,"habitat":"sea","flavor":"Il suo corpo \u00e8 bianco come la neve. Non soffre il freddo e nuota senza problemi anche in acque gelide.","femaleSprites":false,"learnset":[[0,"sheer-cold"],[1,"growl"],[1,"headbutt"],[1,"icy-wind"],[1,"sheer-cold"],[1,"signal-beam"],[3,"growl"],[7,"signal-beam"],[11,"icy-wind"],[13,"encore"],[17,"ice-shard"],[21,"rest"],[23,"aqua-ring"],[27,"aurora-beam"],[31,"aqua-jet"],[33,"brine"],[39,"take-down"],[45,"dive"],[49,"aqua-tail"],[55,"ice-beam"],[61,"safeguard"],[65,"hail"]]},{"id":88,"slug":"grimer","name":"Grimer","types":["poison"],"stats":{"hp":80,"attack":80,"defense":50,"special-attack":40,"special-defense":50,"speed":25},"evYield":{"hp":1},"baseExp":65,"height":9,"weight":300,"abilities":["stench","sticky-hold"],"growth":"medium","genderRate":4,"captureRate":190,"habitat":"urban","flavor":"Formato da fanghi tossici solidificati, emana un tanfo nauseabondo ed \u00e8 impossibile toccarlo. Dove passa lui non cresce pi\u00f9 nemmeno l\u2019erba.","femaleSprites":false,"learnset":[[1,"poison-gas"],[1,"pound"],[4,"harden"],[7,"mud-slap"],[12,"disable"],[15,"sludge"],[18,"mud-bomb"],[21,"minimize"],[26,"fling"],[29,"sludge-bomb"],[32,"sludge-wave"],[37,"screech"],[40,"gunk-shot"],[43,"acid-armor"],[46,"belch"],[48,"memento"]]},{"id":89,"slug":"muk","name":"Muk","types":["poison"],"stats":{"hp":105,"attack":105,"defense":75,"special-attack":65,"special-defense":100,"speed":50},"evYield":{"hp":1,"attack":1},"baseExp":175,"height":12,"weight":300,"abilities":["stench","sticky-hold"],"growth":"medium","genderRate":4,"captureRate":75,"habitat":"urban","flavor":"Emette un tanfo cos\u00ec terribile da far svenire, ma non sente alcun odore perch\u00e9 ormai il suo naso si \u00e8 atrofizzato.","femaleSprites":false,"learnset":[[0,"venom-drench"],[1,"harden"],[1,"mud-slap"],[1,"poison-gas"],[1,"pound"],[1,"venom-drench"],[4,"harden"],[7,"mud-slap"],[12,"disable"],[15,"sludge"],[18,"mud-bomb"],[21,"minimize"],[26,"fling"],[29,"sludge-bomb"],[32,"sludge-wave"],[37,"screech"],[40,"gunk-shot"],[46,"acid-armor"],[52,"belch"],[57,"memento"]]},{"id":90,"slug":"shellder","name":"Shellder","types":["water"],"stats":{"hp":30,"attack":65,"defense":100,"special-attack":45,"special-defense":25,"speed":40},"evYield":{"defense":1},"baseExp":61,"height":3,"weight":40,"abilities":["shell-armor","skill-link"],"growth":"slow","genderRate":4,"captureRate":190,"habitat":"sea","flavor":"La sua conchiglia dura respinge ogni tipo di attacco. \u00c8 vulnerabile solo quando apre le valve.","femaleSprites":false,"learnset":[[1,"tackle"],[1,"water-gun"],[4,"withdraw"],[8,"supersonic"],[13,"icicle-spear"],[16,"protect"],[20,"leer"],[25,"clamp"],[28,"ice-shard"],[32,"razor-shell"],[37,"aurora-beam"],[40,"whirlpool"],[44,"brine"],[49,"iron-defense"],[52,"ice-beam"],[56,"shell-smash"],[61,"hydro-pump"]]},{"id":91,"slug":"cloyster","name":"Cloyster","types":["water","ice"],"stats":{"hp":50,"attack":95,"defense":180,"special-attack":85,"special-defense":45,"speed":70},"evYield":{"defense":2},"baseExp":184,"height":15,"weight":1325,"abilities":["shell-armor","skill-link"],"growth":"slow","genderRate":4,"captureRate":60,"habitat":"sea","flavor":"Quando richiude il guscio nessuno pu\u00f2 aprirlo, neppure chi \u00e8 dotato di una forza straordinaria.","femaleSprites":false,"learnset":[[1,"aurora-beam"],[1,"hydro-pump"],[1,"protect"],[1,"shell-smash"],[1,"supersonic"],[1,"toxic-spikes"],[1,"withdraw"],[13,"spike-cannon"],[28,"spikes"],[50,"icicle-crash"]]},{"id":92,"slug":"gastly","name":"Gastly","types":["ghost","poison"],"stats":{"hp":30,"attack":35,"defense":30,"special-attack":100,"special-defense":35,"speed":80},"evYield":{"special-attack":1},"baseExp":62,"height":13,"weight":1,"abilities":["levitate"],"growth":"medium-slow","genderRate":4,"captureRate":190,"habitat":"cave","flavor":"Il suo corpo gassoso pu\u00f2 infilarsi ovunque, ma un colpo di vento lo pu\u00f2 spazzare via.","femaleSprites":false,"learnset":[[1,"hypnosis"],[1,"lick"],[5,"spite"],[8,"mean-look"],[12,"curse"],[15,"night-shade"],[19,"confuse-ray"],[22,"sucker-punch"],[26,"payback"],[29,"shadow-ball"],[33,"dream-eater"],[36,"dark-pulse"],[40,"destiny-bond"],[43,"hex"],[47,"nightmare"]]},{"id":93,"slug":"haunter","name":"Haunter","types":["ghost","poison"],"stats":{"hp":45,"attack":50,"defense":45,"special-attack":115,"special-defense":55,"speed":95},"evYield":{"special-attack":2},"baseExp":142,"height":16,"weight":1,"abilities":["levitate"],"growth":"medium-slow","genderRate":4,"captureRate":90,"habitat":"cave","flavor":"Se da soli, al buio, si ha l\u2019impressione di essere osservati da qualcuno, si tratta di Haunter.","femaleSprites":false,"learnset":[[0,"shadow-punch"],[1,"hypnosis"],[1,"lick"],[1,"shadow-punch"],[1,"spite"],[5,"spite"],[8,"mean-look"],[12,"curse"],[15,"night-shade"],[19,"confuse-ray"],[22,"sucker-punch"],[28,"payback"],[33,"shadow-ball"],[39,"dream-eater"],[44,"dark-pulse"],[50,"destiny-bond"],[55,"hex"],[61,"nightmare"]]},{"id":94,"slug":"gengar","name":"Gengar","types":["ghost","poison"],"stats":{"hp":60,"attack":65,"defense":60,"special-attack":130,"special-defense":75,"speed":110},"evYield":{"special-attack":3},"baseExp":225,"height":15,"weight":405,"abilities":["cursed-body"],"growth":"medium-slow","genderRate":4,"captureRate":45,"habitat":"cave","flavor":"Si dice che emerga dall\u2019oscurit\u00e0 per sottrarre la vita di chi si \u00e8 perso tra le montagne.","femaleSprites":false,"learnset":[[0,"shadow-punch"],[1,"hypnosis"],[1,"lick"],[1,"shadow-punch"],[1,"spite"],[5,"spite"],[8,"mean-look"],[12,"curse"],[15,"night-shade"],[19,"confuse-ray"],[22,"sucker-punch"],[28,"payback"],[33,"shadow-ball"],[39,"dream-eater"],[44,"dark-pulse"],[50,"destiny-bond"],[55,"hex"],[61,"nightmare"]]},{"id":95,"slug":"onix","name":"Onix","types":["rock","ground"],"stats":{"hp":35,"attack":45,"defense":160,"special-attack":30,"special-defense":45,"speed":70},"evYield":{"defense":1},"baseExp":77,"height":88,"weight":2100,"abilities":["rock-head","sturdy"],"growth":"medium","genderRate":4,"captureRate":45,"habitat":"cave","flavor":"Scava nel terreno a una velocit\u00e0 di 80 km/h contorcendo e agitando il corpo grande e possente.","femaleSprites":false,"learnset":[[1,"bind"],[1,"harden"],[1,"mud-sport"],[1,"tackle"],[4,"curse"],[7,"rock-throw"],[10,"rock-tomb"],[13,"rage"],[16,"stealth-rock"],[19,"rock-polish"],[20,"gyro-ball"],[22,"smack-down"],[25,"dragon-breath"],[28,"slam"],[31,"screech"],[34,"rock-slide"],[37,"sand-tomb"],[40,"iron-tail"],[43,"dig"],[46,"stone-edge"],[49,"double-edge"],[52,"sandstorm"]]},{"id":96,"slug":"drowzee","name":"Drowzee","types":["psychic"],"stats":{"hp":60,"attack":48,"defense":45,"special-attack":43,"special-defense":90,"speed":42},"evYield":{"special-defense":1},"baseExp":66,"height":10,"weight":324,"abilities":["insomnia","forewarn"],"growth":"medium","genderRate":4,"captureRate":190,"habitat":"grassland","flavor":"Se si dorme sempre vicino a un Drowzee, pu\u00f2 capitare di sognare uno dei sogni che questo Pok\u00e9mon ha mangiato in passato.","femaleSprites":false,"learnset":[[1,"hypnosis"],[1,"pound"],[5,"disable"],[9,"confusion"],[13,"headbutt"],[17,"poison-gas"],[21,"meditate"],[25,"psybeam"],[29,"wake-up-slap"],[33,"psych-up"],[37,"synchronoise"],[41,"zen-headbutt"],[45,"swagger"],[49,"psychic"],[53,"nasty-plot"],[57,"psyshock"],[61,"future-sight"]]},{"id":97,"slug":"hypno","name":"Hypno","types":["psychic"],"stats":{"hp":85,"attack":73,"defense":70,"special-attack":73,"special-defense":115,"speed":67},"evYield":{"special-defense":2},"baseExp":169,"height":16,"weight":756,"abilities":["insomnia","forewarn"],"growth":"medium","genderRate":4,"captureRate":75,"habitat":"grassland","flavor":"Quando se ne incontra uno, \u00e8 meglio distogliere lo sguardo, altrimenti si rischia di essere ipnotizzati dal suo pendolo.","femaleSprites":true,"learnset":[[1,"confusion"],[1,"disable"],[1,"future-sight"],[1,"hypnosis"],[1,"nasty-plot"],[1,"nightmare"],[1,"pound"],[1,"switcheroo"],[5,"disable"],[9,"confusion"],[13,"headbutt"],[17,"poison-gas"],[21,"meditate"],[25,"psybeam"],[29,"wake-up-slap"],[33,"psych-up"],[37,"synchronoise"],[41,"zen-headbutt"],[45,"swagger"],[49,"psychic"],[53,"nasty-plot"],[57,"psyshock"],[61,"future-sight"]]},{"id":98,"slug":"krabby","name":"Krabby","types":["water"],"stats":{"hp":30,"attack":105,"defense":90,"special-attack":25,"special-defense":25,"speed":50},"evYield":{"attack":1},"baseExp":65,"height":4,"weight":65,"abilities":["hyper-cutter","shell-armor"],"growth":"medium","genderRate":4,"captureRate":225,"habitat":"waters-edge","flavor":"Se si sente in pericolo, emette bolle dalla bocca e se ne circonda per sembrare pi\u00f9 grande.","femaleSprites":false,"learnset":[[1,"bubble"],[1,"mud-sport"],[5,"vice-grip"],[9,"leer"],[11,"harden"],[15,"bubble-beam"],[19,"mud-shot"],[21,"metal-claw"],[25,"stomp"],[29,"protect"],[31,"guillotine"],[35,"slam"],[39,"brine"],[41,"crabhammer"],[45,"flail"]]},{"id":99,"slug":"kingler","name":"Kingler","types":["water"],"stats":{"hp":55,"attack":130,"defense":115,"special-attack":50,"special-defense":50,"speed":75},"evYield":{"attack":2},"baseExp":166,"height":13,"weight":600,"abilities":["hyper-cutter","shell-armor"],"growth":"medium","genderRate":4,"captureRate":60,"habitat":"waters-edge","flavor":"La sua chela pi\u00f9 grande ha una potenza distruttiva fenomenale, ma fuori dalla lotta gli \u00e8 d\u2019impiccio per via del peso.","femaleSprites":false,"learnset":[[1,"bubble"],[1,"leer"],[1,"mud-sport"],[1,"vice-grip"],[1,"wide-guard"],[5,"vice-grip"],[9,"leer"],[11,"harden"],[15,"bubble-beam"],[19,"mud-shot"],[21,"metal-claw"],[25,"stomp"],[32,"protect"],[37,"guillotine"],[44,"slam"],[51,"brine"],[56,"crabhammer"],[63,"flail"]]},{"id":100,"slug":"voltorb","name":"Voltorb","types":["electric"],"stats":{"hp":40,"attack":30,"defense":50,"special-attack":55,"special-defense":55,"speed":100},"evYield":{"speed":1},"baseExp":66,"height":5,"weight":104,"abilities":["soundproof","static"],"growth":"medium","genderRate":-1,"captureRate":190,"habitat":"urban","flavor":"Si dice che abbia un aspetto simile a una Pok\u00e9 Ball per passare inosservato. Tende ad autodistruggersi al minimo stimolo.","femaleSprites":false,"learnset":[[1,"charge"],[1,"tackle"],[4,"sonic-boom"],[6,"eerie-impulse"],[9,"spark"],[11,"rollout"],[13,"screech"],[16,"charge-beam"],[20,"swift"],[22,"electro-ball"],[26,"self-destruct"],[29,"light-screen"],[34,"magnet-rise"],[37,"discharge"],[41,"explosion"],[46,"gyro-ball"],[48,"mirror-coat"]]},{"id":101,"slug":"electrode","name":"Electrode","types":["electric"],"stats":{"hp":60,"attack":50,"defense":70,"special-attack":80,"special-defense":80,"speed":150},"evYield":{"speed":2},"baseExp":172,"height":12,"weight":666,"abilities":["soundproof","static"],"growth":"medium","genderRate":-1,"captureRate":60,"habitat":"urban","flavor":"L\u2019energia elettrica accumulata nel suo corpo pu\u00f2 provocare un\u2019esplosione al minimo urto.","femaleSprites":false,"learnset":[[1,"charge"],[1,"eerie-impulse"],[1,"magnetic-flux"],[1,"sonic-boom"],[1,"tackle"],[4,"sonic-boom"],[6,"eerie-impulse"],[9,"spark"],[11,"rollout"],[13,"screech"],[16,"charge-beam"],[20,"swift"],[22,"electro-ball"],[26,"self-destruct"],[29,"light-screen"],[36,"magnet-rise"],[41,"discharge"],[47,"explosion"],[54,"gyro-ball"],[58,"mirror-coat"]]},{"id":102,"slug":"exeggcute","name":"Exeggcute","types":["grass","psychic"],"stats":{"hp":60,"attack":40,"defense":80,"special-attack":60,"special-defense":45,"speed":40},"evYield":{"defense":1},"baseExp":65,"height":4,"weight":25,"abilities":["chlorophyll"],"growth":"slow","genderRate":4,"captureRate":90,"habitat":"forest","flavor":"Se non sono presenti tutti e sei gli individui che lo compongono, non \u00e8 tranquillo. Appena ne sparisce uno si prepara alla fuga.","femaleSprites":false,"learnset":[[1,"barrage"],[1,"hypnosis"],[1,"uproar"],[7,"reflect"],[11,"leech-seed"],[17,"bullet-seed"],[19,"stun-spore"],[21,"poison-powder"],[23,"sleep-powder"],[27,"confusion"],[33,"worry-seed"],[37,"natural-gift"],[43,"solar-beam"],[47,"extrasensory"],[50,"bestow"]]},{"id":103,"slug":"exeggutor","name":"Exeggutor","types":["grass","psychic"],"stats":{"hp":95,"attack":95,"defense":85,"special-attack":125,"special-defense":75,"speed":55},"evYield":{"special-attack":2},"baseExp":186,"height":20,"weight":1200,"abilities":["chlorophyll"],"growth":"slow","genderRate":4,"captureRate":45,"habitat":"forest","flavor":"I poteri psichici che le sue tre teste scatenano all\u2019unisono sono travolgenti. Quando il cielo si rannuvola, i suoi movimenti si fanno lenti.","femaleSprites":false,"learnset":[[0,"stomp"],[1,"barrage"],[1,"confusion"],[1,"hypnosis"],[1,"seed-bomb"],[1,"stomp"],[17,"psyshock"],[27,"egg-bomb"],[37,"wood-hammer"],[47,"leaf-storm"]]},{"id":104,"slug":"cubone","name":"Cubone","types":["ground"],"stats":{"hp":50,"attack":50,"defense":95,"special-attack":40,"special-defense":50,"speed":35},"evYield":{"defense":1},"baseExp":64,"height":4,"weight":65,"abilities":["rock-head","lightning-rod"],"growth":"medium","genderRate":4,"captureRate":190,"habitat":"mountain","flavor":"Indossa il teschio della madre defunta. A volte capita che pianga vedendola in sogno, ma a ogni lacrima versata diventa pi\u00f9 forte.","femaleSprites":false,"learnset":[[1,"growl"],[3,"tail-whip"],[7,"bone-club"],[11,"headbutt"],[13,"leer"],[17,"focus-energy"],[21,"bonemerang"],[23,"rage"],[27,"false-swipe"],[31,"thrash"],[33,"fling"],[37,"stomping-tantrum"],[41,"endeavor"],[43,"double-edge"],[47,"retaliate"],[51,"bone-rush"]]},{"id":105,"slug":"marowak","name":"Marowak","types":["ground"],"stats":{"hp":60,"attack":80,"defense":110,"special-attack":50,"special-defense":80,"speed":45},"evYield":{"defense":2},"baseExp":149,"height":10,"weight":450,"abilities":["rock-head","lightning-rod"],"growth":"medium","genderRate":4,"captureRate":75,"habitat":"mountain","flavor":"Evolvendosi \u00e8 diventato tutt\u2019uno con il teschio della madre che prima indossava e ha acquisito un temperamento violento.","femaleSprites":false,"learnset":[[1,"bone-club"],[1,"growl"],[1,"headbutt"],[1,"tail-whip"],[3,"tail-whip"],[7,"bone-club"],[11,"headbutt"],[13,"leer"],[17,"focus-energy"],[21,"bonemerang"],[23,"rage"],[27,"false-swipe"],[33,"thrash"],[37,"fling"],[43,"stomping-tantrum"],[49,"endeavor"],[53,"double-edge"],[59,"retaliate"],[65,"bone-rush"]]},{"id":106,"slug":"hitmonlee","name":"Hitmonlee","types":["fighting"],"stats":{"hp":50,"attack":120,"defense":53,"special-attack":35,"special-defense":110,"speed":87},"evYield":{"attack":2},"baseExp":159,"height":15,"weight":498,"abilities":["limber","reckless"],"growth":"medium","genderRate":0,"captureRate":45,"habitat":"urban","flavor":"Pu\u00f2 accorciare o allungare le gambe a piacere. In questo modo riesce a colpire con i calci anche gli avversari distanti.","femaleSprites":false,"learnset":[[0,"double-kick"],[1,"close-combat"],[1,"double-kick"],[1,"jump-kick"],[1,"meditate"],[1,"mega-kick"],[1,"revenge"],[1,"reversal"],[1,"rolling-kick"],[5,"meditate"],[9,"rolling-kick"],[13,"jump-kick"],[17,"brick-break"],[21,"focus-energy"],[25,"feint"],[29,"high-jump-kick"],[33,"mind-reader"],[37,"foresight"],[41,"wide-guard"],[45,"blaze-kick"],[49,"endure"],[53,"mega-kick"],[57,"close-combat"],[61,"reversal"]]},{"id":107,"slug":"hitmonchan","name":"Hitmonchan","types":["fighting"],"stats":{"hp":50,"attack":105,"defense":79,"special-attack":35,"special-defense":110,"speed":76},"evYield":{"special-defense":2},"baseExp":159,"height":14,"weight":502,"abilities":["keen-eye","iron-fist"],"growth":"medium","genderRate":0,"captureRate":45,"habitat":"urban","flavor":"Fende l\u2019aria con i suoi pugni. Tuttavia, dopo tre minuti di lotta deve riprendere fiato.","femaleSprites":false,"learnset":[[0,"comet-punch"],[1,"agility"],[1,"close-combat"],[1,"comet-punch"],[1,"counter"],[1,"focus-punch"],[1,"mach-punch"],[1,"pursuit"],[1,"revenge"],[6,"agility"],[11,"pursuit"],[16,"bullet-punch"],[16,"mach-punch"],[21,"feint"],[26,"vacuum-wave"],[31,"quick-guard"],[36,"fire-punch"],[36,"ice-punch"],[36,"thunder-punch"],[41,"sky-uppercut"],[46,"mega-punch"],[50,"detect"],[56,"focus-punch"],[61,"counter"],[66,"close-combat"]]},{"id":108,"slug":"lickitung","name":"Lickitung","types":["normal"],"stats":{"hp":90,"attack":55,"defense":75,"special-attack":60,"special-defense":75,"speed":30},"evYield":{"hp":2},"baseExp":77,"height":12,"weight":655,"abilities":["own-tempo","oblivious"],"growth":"medium","genderRate":4,"captureRate":45,"habitat":"grassland","flavor":"Si nutre principalmente di Pok\u00e9mon Coleottero. Paralizza le prede leccandole con la lunga lingua e le inghiotte in un boccone.","femaleSprites":false,"learnset":[[1,"lick"],[5,"supersonic"],[9,"defense-curl"],[13,"knock-off"],[17,"wrap"],[21,"stomp"],[25,"disable"],[29,"slam"],[33,"rollout"],[37,"chip-away"],[41,"me-first"],[45,"refresh"],[49,"screech"],[53,"power-whip"],[57,"wring-out"]]},{"id":109,"slug":"koffing","name":"Koffing","types":["poison"],"stats":{"hp":40,"attack":65,"defense":95,"special-attack":60,"special-defense":45,"speed":35},"evYield":{"defense":1},"baseExp":68,"height":6,"weight":10,"abilities":["levitate","neutralizing-gas"],"growth":"medium","genderRate":4,"captureRate":190,"habitat":"urban","flavor":"\u00c8 ghiotto di aria inquinata. Si dice che in passato a Galar ci fossero molti pi\u00f9 Koffing rispetto a ora.","femaleSprites":false,"learnset":[[1,"poison-gas"],[1,"tackle"],[4,"smog"],[7,"smokescreen"],[12,"assurance"],[15,"clear-smog"],[18,"sludge"],[23,"self-destruct"],[26,"haze"],[29,"gyro-ball"],[34,"sludge-bomb"],[37,"explosion"],[40,"destiny-bond"],[42,"belch"],[45,"memento"]]},{"id":110,"slug":"weezing","name":"Weezing","types":["poison"],"stats":{"hp":65,"attack":90,"defense":120,"special-attack":85,"special-defense":70,"speed":60},"evYield":{"defense":2},"baseExp":172,"height":12,"weight":95,"abilities":["levitate","neutralizing-gas"],"growth":"medium","genderRate":4,"captureRate":60,"habitat":"urban","flavor":"La sua capacit\u00e0 di aspirare l\u2019aria \u00e8 leggermente inferiore rispetto al Weezing di Galar, ma \u00e8 in grado di produrre tossine molto potenti.","femaleSprites":false,"learnset":[[0,"double-hit"],[1,"double-hit"],[1,"poison-gas"],[1,"smog"],[1,"smokescreen"],[1,"tackle"],[4,"smog"],[7,"smokescreen"],[12,"assurance"],[15,"clear-smog"],[18,"sludge"],[23,"self-destruct"],[26,"haze"],[29,"gyro-ball"],[34,"sludge-bomb"],[40,"explosion"],[46,"destiny-bond"],[51,"belch"],[57,"memento"]]},{"id":111,"slug":"rhyhorn","name":"Rhyhorn","types":["ground","rock"],"stats":{"hp":80,"attack":85,"defense":95,"special-attack":30,"special-defense":30,"speed":25},"evYield":{"defense":1},"baseExp":69,"height":10,"weight":1150,"abilities":["lightning-rod","rock-head"],"growth":"slow","genderRate":4,"captureRate":120,"habitat":"rough-terrain","flavor":"Non \u00e8 in grado di ricordare pi\u00f9 di una cosa alla volta. Quando parte alla carica ne dimentica subito il motivo.","femaleSprites":true,"learnset":[[1,"horn-attack"],[1,"tail-whip"],[5,"fury-attack"],[9,"scary-face"],[13,"smack-down"],[17,"stomp"],[21,"bulldoze"],[25,"chip-away"],[29,"rock-blast"],[33,"drill-run"],[37,"take-down"],[41,"stone-edge"],[45,"earthquake"],[49,"megahorn"],[53,"horn-drill"]]},{"id":112,"slug":"rhydon","name":"Rhydon","types":["ground","rock"],"stats":{"hp":105,"attack":130,"defense":120,"special-attack":45,"special-defense":45,"speed":40},"evYield":{"attack":2},"baseExp":170,"height":19,"weight":1200,"abilities":["lightning-rod","rock-head"],"growth":"slow","genderRate":4,"captureRate":60,"habitat":"rough-terrain","flavor":"La sua pelle, simile a un\u2019armatura, lo protegge consentendogli di vivere nel magma a 2.000 \u00baC.","femaleSprites":true,"learnset":[[0,"hammer-arm"],[1,"fury-attack"],[1,"hammer-arm"],[1,"horn-attack"],[1,"horn-drill"],[1,"scary-face"],[1,"tail-whip"],[5,"fury-attack"],[9,"scary-face"],[13,"smack-down"],[17,"stomp"],[21,"bulldoze"],[25,"chip-away"],[29,"rock-blast"],[33,"drill-run"],[37,"take-down"],[41,"stone-edge"],[48,"earthquake"],[55,"megahorn"],[62,"horn-drill"]]},{"id":113,"slug":"chansey","name":"Chansey","types":["normal"],"stats":{"hp":250,"attack":5,"defense":5,"special-attack":35,"special-defense":105,"speed":50},"evYield":{"hp":2},"baseExp":395,"height":11,"weight":346,"abilities":["natural-cure","serene-grace"],"growth":"fast","genderRate":8,"captureRate":30,"habitat":"urban","flavor":"Sarebbe lento per natura, ma \u00e8 diventato svelto nella fuga per difendersi da chi vuole rubare il suo uovo.","femaleSprites":false,"learnset":[[1,"defense-curl"],[1,"double-edge"],[1,"growl"],[1,"pound"],[5,"tail-whip"],[9,"refresh"],[12,"double-slap"],[16,"soft-boiled"],[20,"bestow"],[23,"minimize"],[27,"take-down"],[31,"sing"],[35,"fling"],[39,"heal-pulse"],[44,"egg-bomb"],[50,"light-screen"],[57,"healing-wish"],[65,"double-edge"]]},{"id":114,"slug":"tangela","name":"Tangela","types":["grass"],"stats":{"hp":65,"attack":55,"defense":115,"special-attack":100,"special-defense":40,"speed":60},"evYield":{"defense":1},"baseExp":87,"height":10,"weight":350,"abilities":["chlorophyll","leaf-guard"],"growth":"medium","genderRate":4,"captureRate":45,"habitat":"grassland","flavor":"Le sue liane emanano un odore peculiare. In alcune zone di Galar vengono usate come erbe aromatiche.","femaleSprites":false,"learnset":[[1,"constrict"],[1,"ingrain"],[4,"sleep-powder"],[7,"vine-whip"],[10,"absorb"],[14,"poison-powder"],[17,"bind"],[20,"growth"],[23,"mega-drain"],[27,"knock-off"],[30,"stun-spore"],[33,"natural-gift"],[36,"giga-drain"],[38,"ancient-power"],[41,"slam"],[44,"tickle"],[46,"wring-out"],[48,"grassy-terrain"],[50,"power-whip"]]},{"id":115,"slug":"kangaskhan","name":"Kangaskhan","types":["normal"],"stats":{"hp":105,"attack":95,"defense":80,"special-attack":40,"special-defense":80,"speed":90},"evYield":{"hp":2},"baseExp":172,"height":22,"weight":800,"abilities":["early-bird","scrappy"],"growth":"medium","genderRate":8,"captureRate":45,"habitat":"grassland","flavor":"Alcuni documenti parlano di Kangaskhan senza cuccioli che hanno allevato bambini umani dispersi.","femaleSprites":false,"learnset":[[1,"comet-punch"],[1,"leer"],[7,"fake-out"],[10,"tail-whip"],[13,"bite"],[19,"double-hit"],[22,"rage"],[25,"mega-punch"],[31,"chip-away"],[34,"dizzy-punch"],[37,"crunch"],[43,"endure"],[46,"outrage"],[49,"sucker-punch"],[50,"reversal"]]},{"id":116,"slug":"horsea","name":"Horsea","types":["water"],"stats":{"hp":30,"attack":40,"defense":70,"special-attack":70,"special-defense":25,"speed":60},"evYield":{"special-attack":1},"baseExp":59,"height":4,"weight":80,"abilities":["swift-swim","sniper"],"growth":"medium","genderRate":4,"captureRate":225,"habitat":"sea","flavor":"Nuota come se danzasse nell\u2019acqua creando mulinelli. Gioca con i suoi simili facendo a gara a chi ne crea di pi\u00f9 grandi.","femaleSprites":false,"learnset":[[1,"bubble"],[5,"smokescreen"],[9,"leer"],[13,"water-gun"],[17,"twister"],[21,"bubble-beam"],[26,"focus-energy"],[31,"brine"],[36,"agility"],[41,"dragon-pulse"],[46,"dragon-dance"],[52,"hydro-pump"]]},{"id":117,"slug":"seadra","name":"Seadra","types":["water"],"stats":{"hp":55,"attack":65,"defense":95,"special-attack":95,"special-defense":45,"speed":85},"evYield":{"defense":1,"special-attack":1},"baseExp":154,"height":12,"weight":250,"abilities":["poison-point","sniper"],"growth":"medium","genderRate":4,"captureRate":75,"habitat":"sea","flavor":"Nonostante la misura ridotta, la sua bocca ha un potere aspirante tale da permettergli di risucchiare e inghiottire grosse prede all\u2019istante.","femaleSprites":false,"learnset":[[1,"bubble"],[1,"hydro-pump"],[1,"leer"],[1,"smokescreen"],[1,"water-gun"],[5,"smokescreen"],[9,"leer"],[13,"water-gun"],[17,"twister"],[21,"bubble-beam"],[26,"focus-energy"],[31,"brine"],[38,"agility"],[45,"dragon-pulse"],[52,"dragon-dance"],[60,"hydro-pump"]]},{"id":118,"slug":"goldeen","name":"Goldeen","types":["water"],"stats":{"hp":45,"attack":67,"defense":60,"special-attack":35,"special-defense":50,"speed":63},"evYield":{"attack":1},"baseExp":64,"height":6,"weight":150,"abilities":["swift-swim","water-veil"],"growth":"medium","genderRate":4,"captureRate":225,"habitat":"waters-edge","flavor":"Le pinne dorsali e pettorali sono sviluppate come potenti muscoli. Pu\u00f2 raggiungere la velocit\u00e0 di 5 nodi.","femaleSprites":true,"learnset":[[1,"peck"],[1,"tail-whip"],[1,"water-sport"],[5,"supersonic"],[8,"horn-attack"],[13,"flail"],[16,"water-pulse"],[21,"aqua-ring"],[24,"fury-attack"],[29,"agility"],[32,"waterfall"],[37,"horn-drill"],[40,"soak"],[45,"megahorn"]]},{"id":119,"slug":"seaking","name":"Seaking","types":["water"],"stats":{"hp":80,"attack":92,"defense":65,"special-attack":65,"special-defense":80,"speed":68},"evYield":{"attack":2},"baseExp":158,"height":13,"weight":390,"abilities":["swift-swim","water-veil"],"growth":"medium","genderRate":4,"captureRate":60,"habitat":"waters-edge","flavor":"Perfora con il suo corno le rocce sul letto dei fiumi, costruendo tane che proteggono le Uova dalla corrente.","femaleSprites":true,"learnset":[[1,"megahorn"],[1,"peck"],[1,"poison-jab"],[1,"supersonic"],[1,"tail-whip"],[1,"water-sport"],[5,"supersonic"],[8,"horn-attack"],[13,"flail"],[16,"water-pulse"],[21,"aqua-ring"],[24,"fury-attack"],[29,"agility"],[32,"waterfall"],[40,"horn-drill"],[46,"soak"],[54,"megahorn"]]},{"id":120,"slug":"staryu","name":"Staryu","types":["water"],"stats":{"hp":30,"attack":45,"defense":55,"special-attack":70,"special-defense":55,"speed":85},"evYield":{"speed":1},"baseExp":68,"height":8,"weight":345,"abilities":["illuminate","natural-cure"],"growth":"slow","genderRate":-1,"captureRate":225,"habitat":"sea","flavor":"Viene mangiucchiato dai Pok\u00e9mon acquatici, ma non ci d\u00e0 peso, perch\u00e9 le parti danneggiate del suo corpo si rigenerano subito.","femaleSprites":false,"learnset":[[1,"harden"],[1,"tackle"],[4,"water-gun"],[7,"rapid-spin"],[10,"recover"],[13,"psywave"],[16,"swift"],[18,"bubble-beam"],[22,"camouflage"],[24,"gyro-ball"],[28,"brine"],[31,"minimize"],[35,"reflect-type"],[37,"power-gem"],[40,"confuse-ray"],[42,"psychic"],[46,"light-screen"],[49,"cosmic-power"],[53,"hydro-pump"]]},{"id":121,"slug":"starmie","name":"Starmie","types":["water","psychic"],"stats":{"hp":60,"attack":75,"defense":85,"special-attack":100,"special-defense":85,"speed":115},"evYield":{"speed":2},"baseExp":182,"height":11,"weight":800,"abilities":["illuminate","natural-cure"],"growth":"slow","genderRate":-1,"captureRate":60,"habitat":"sea","flavor":"Risucchia il plancton mentre nuota nel mare facendo ruotare il suo corpo ad alta velocit\u00e0.","femaleSprites":false,"learnset":[[1,"hydro-pump"],[1,"rapid-spin"],[1,"recover"],[1,"spotlight"],[1,"swift"],[1,"water-gun"],[40,"confuse-ray"]]},{"id":122,"slug":"mr-mime","name":"Mr. Mime","types":["psychic","fairy"],"stats":{"hp":40,"attack":45,"defense":65,"special-attack":100,"special-defense":120,"speed":90},"evYield":{"special-defense":2},"baseExp":161,"height":13,"weight":545,"abilities":["soundproof","filter"],"growth":"medium","genderRate":4,"captureRate":45,"habitat":"urban","flavor":"\u00c8 un ottimo mimo. Con le onde che emette dalle dita pu\u00f2 creare una barriera che lo protegge da molti attacchi.","femaleSprites":false,"learnset":[[1,"barrier"],[1,"confusion"],[1,"guard-swap"],[1,"magical-leaf"],[1,"misty-terrain"],[1,"pound"],[1,"power-swap"],[1,"quick-guard"],[1,"wide-guard"],[4,"copycat"],[8,"meditate"],[11,"double-slap"],[15,"mimic"],[15,"psywave"],[18,"encore"],[22,"light-screen"],[22,"reflect"],[25,"psybeam"],[29,"substitute"],[32,"recycle"],[36,"trick"],[39,"psychic"],[43,"role-play"],[46,"baton-pass"],[50,"safeguard"]]},{"id":123,"slug":"scyther","name":"Scyther","types":["bug","flying"],"stats":{"hp":70,"attack":110,"defense":80,"special-attack":55,"special-defense":80,"speed":105},"evYield":{"attack":1},"baseExp":100,"height":15,"weight":560,"abilities":["swarm","technician"],"growth":"medium","genderRate":4,"captureRate":45,"habitat":"grassland","flavor":"Se ci si imbatte in una zona della foresta con molti alberi abbattuti, si tratta del territorio di uno Scyther.","femaleSprites":true,"learnset":[[1,"leer"],[1,"quick-attack"],[1,"vacuum-wave"],[5,"focus-energy"],[9,"pursuit"],[13,"false-swipe"],[17,"agility"],[21,"wing-attack"],[25,"fury-cutter"],[29,"slash"],[33,"razor-wind"],[37,"double-team"],[41,"x-scissor"],[45,"night-slash"],[49,"double-hit"],[50,"air-slash"],[57,"swords-dance"],[61,"feint"]]},{"id":124,"slug":"jynx","name":"Jynx","types":["ice","psychic"],"stats":{"hp":65,"attack":50,"defense":35,"special-attack":115,"special-defense":95,"speed":95},"evYield":{"special-attack":2},"baseExp":159,"height":14,"weight":406,"abilities":["oblivious","forewarn"],"growth":"medium","genderRate":8,"captureRate":45,"habitat":"urban","flavor":"La maggior parte dei Jynx di Galar hanno una voce talmente incantevole e delicata da avere addirittura dei fan.","femaleSprites":false,"learnset":[[1,"draining-kiss"],[1,"lick"],[1,"lovely-kiss"],[1,"perish-song"],[1,"pound"],[1,"powder-snow"],[5,"lick"],[8,"lovely-kiss"],[11,"powder-snow"],[15,"double-slap"],[18,"ice-punch"],[21,"heart-stamp"],[25,"mean-look"],[28,"fake-tears"],[33,"wake-up-slap"],[39,"avalanche"],[44,"body-slam"],[49,"wring-out"],[55,"perish-song"],[60,"blizzard"]]},{"id":125,"slug":"electabuzz","name":"Electabuzz","types":["electric"],"stats":{"hp":65,"attack":83,"defense":57,"special-attack":95,"special-defense":85,"speed":105},"evYield":{"speed":2},"baseExp":172,"height":11,"weight":300,"abilities":["static"],"growth":"medium","genderRate":2,"captureRate":45,"habitat":"grassland","flavor":"All\u2019arrivo di un temporale questi Pok\u00e9mon si raggruppano intorno agli alberi alti, aspettando immobili che cada un fulmine.","femaleSprites":false,"learnset":[[1,"leer"],[1,"quick-attack"],[1,"thunder-shock"],[5,"thunder-shock"],[8,"low-kick"],[12,"swift"],[15,"shock-wave"],[19,"thunder-wave"],[22,"electro-ball"],[26,"light-screen"],[29,"thunder-punch"],[36,"discharge"],[42,"screech"],[49,"thunderbolt"],[55,"thunder"]]},{"id":126,"slug":"magmar","name":"Magmar","types":["fire"],"stats":{"hp":65,"attack":95,"defense":57,"special-attack":100,"special-defense":85,"speed":93},"evYield":{"special-attack":2},"baseExp":173,"height":13,"weight":445,"abilities":["flame-body"],"growth":"medium","genderRate":2,"captureRate":45,"habitat":"mountain","flavor":"Il suo corpo \u00e8 perennemente in fiamme. Viene considerato una delle cause degli incendi, e per questo \u00e8 temuto.","femaleSprites":false,"learnset":[[1,"ember"],[1,"leer"],[1,"smog"],[5,"ember"],[8,"smokescreen"],[12,"feint-attack"],[15,"fire-spin"],[19,"clear-smog"],[22,"flame-burst"],[26,"confuse-ray"],[29,"fire-punch"],[36,"lava-plume"],[42,"sunny-day"],[49,"flamethrower"],[55,"fire-blast"]]},{"id":127,"slug":"pinsir","name":"Pinsir","types":["bug"],"stats":{"hp":65,"attack":125,"defense":100,"special-attack":55,"special-defense":70,"speed":85},"evYield":{"attack":2},"baseExp":175,"height":15,"weight":550,"abilities":["hyper-cutter","mold-breaker"],"growth":"slow","genderRate":4,"captureRate":45,"habitat":"forest","flavor":"Afferra le prede con le corna e le trancia in due, oppure le lancia via con violenza.","femaleSprites":false,"learnset":[[1,"focus-energy"],[1,"vice-grip"],[4,"bind"],[8,"seismic-toss"],[11,"harden"],[15,"revenge"],[18,"vital-throw"],[22,"double-hit"],[26,"brick-break"],[29,"x-scissor"],[33,"submission"],[36,"storm-throw"],[40,"swords-dance"],[43,"thrash"],[47,"superpower"],[50,"guillotine"]]},{"id":128,"slug":"tauros","name":"Tauros","types":["normal"],"stats":{"hp":75,"attack":100,"defense":95,"special-attack":40,"special-defense":70,"speed":110},"evYield":{"attack":1,"speed":1},"baseExp":172,"height":14,"weight":884,"abilities":["intimidate","anger-point"],"growth":"slow","genderRate":0,"captureRate":45,"habitat":"grassland","flavor":"I Tauros che vivono a Galar hanno un\u2019indole violenta e non tollerano che gli esseri umani salgano loro in groppa.","femaleSprites":false,"learnset":[[1,"tackle"],[3,"tail-whip"],[5,"rage"],[8,"horn-attack"],[11,"scary-face"],[15,"pursuit"],[19,"rest"],[24,"payback"],[29,"work-up"],[35,"take-down"],[41,"zen-headbutt"],[48,"swagger"],[55,"thrash"],[63,"double-edge"],[71,"giga-impact"]]},{"id":129,"slug":"magikarp","name":"Magikarp","types":["water"],"stats":{"hp":20,"attack":10,"defense":55,"special-attack":15,"special-defense":20,"speed":80},"evYield":{"speed":1},"baseExp":40,"height":9,"weight":100,"abilities":["swift-swim"],"growth":"slow","genderRate":4,"captureRate":255,"habitat":"waters-edge","flavor":"Un Pok\u00e9mon debole e patetico: non fa che lasciarsi trascinare dove lo porta la corrente.","femaleSprites":true,"learnset":[[1,"splash"],[15,"tackle"],[30,"flail"]]},{"id":130,"slug":"gyarados","name":"Gyarados","types":["water","flying"],"stats":{"hp":95,"attack":125,"defense":79,"special-attack":60,"special-defense":100,"speed":81},"evYield":{"attack":2},"baseExp":189,"height":65,"weight":2350,"abilities":["intimidate"],"growth":"slow","genderRate":4,"captureRate":45,"habitat":"waters-edge","flavor":"Quando va su tutte le furie, incenerisce ogni cosa, anche nel mezzo di un violento temporale.","femaleSprites":true,"learnset":[[0,"bite"],[1,"bite"],[1,"thrash"],[21,"leer"],[24,"twister"],[27,"ice-fang"],[30,"aqua-tail"],[33,"scary-face"],[36,"dragon-rage"],[39,"crunch"],[42,"hydro-pump"],[45,"dragon-dance"],[48,"hurricane"],[51,"rain-dance"],[54,"hyper-beam"]]},{"id":131,"slug":"lapras","name":"Lapras","types":["water","ice"],"stats":{"hp":130,"attack":85,"defense":80,"special-attack":85,"special-defense":95,"speed":60},"evYield":{"hp":2},"baseExp":187,"height":25,"weight":2200,"abilities":["water-absorb","shell-armor"],"growth":"slow","genderRate":4,"captureRate":45,"habitat":"sea","flavor":"Resiste molto bene al freddo e si trova a suo agio anche nei mari ghiacciati. La sua pelle \u00e8 liscia e fresca.","femaleSprites":false,"learnset":[[1,"growl"],[1,"sing"],[1,"water-gun"],[4,"mist"],[7,"confuse-ray"],[10,"ice-shard"],[14,"water-pulse"],[18,"body-slam"],[22,"rain-dance"],[27,"perish-song"],[32,"ice-beam"],[37,"brine"],[43,"safeguard"],[47,"hydro-pump"],[50,"sheer-cold"]]},{"id":132,"slug":"ditto","name":"Ditto","types":["normal"],"stats":{"hp":48,"attack":48,"defense":48,"special-attack":48,"special-defense":48,"speed":48},"evYield":{"hp":1},"baseExp":101,"height":3,"weight":40,"abilities":["limber"],"growth":"medium","genderRate":-1,"captureRate":35,"habitat":"urban","flavor":"Quando incontra un altro Ditto, si muove pi\u00f9 velocemente del solito nel tentativo di assumere le sue sembianze.","femaleSprites":false,"learnset":[[1,"transform"]]},{"id":133,"slug":"eevee","name":"Eevee","types":["normal"],"stats":{"hp":55,"attack":55,"defense":50,"special-attack":45,"special-defense":65,"speed":55},"evYield":{"special-defense":1},"baseExp":65,"height":3,"weight":65,"abilities":["run-away","adaptability"],"growth":"medium","genderRate":1,"captureRate":45,"habitat":"urban","flavor":"\u00c8 un Pok\u00e9mon molto particolare. Dotato di un corredo genetico instabile, serba in s\u00e9 le pi\u00f9 varie possibilit\u00e0 evolutive.","femaleSprites":true,"learnset":[[1,"covet"],[1,"growl"],[1,"helping-hand"],[1,"tackle"],[1,"tail-whip"],[5,"sand-attack"],[9,"baby-doll-eyes"],[13,"quick-attack"],[17,"bite"],[17,"swift"],[20,"refresh"],[25,"take-down"],[29,"charm"],[33,"baton-pass"],[37,"double-edge"],[41,"last-resort"],[45,"trump-card"]]},{"id":134,"slug":"vaporeon","name":"Vaporeon","types":["water"],"stats":{"hp":130,"attack":65,"defense":60,"special-attack":110,"special-defense":95,"speed":65},"evYield":{"hp":2},"baseExp":184,"height":10,"weight":290,"abilities":["water-absorb"],"growth":"medium","genderRate":1,"captureRate":45,"habitat":"urban","flavor":"La sua composizione cellulare \u00e8 simile a quella delle molecole d\u2019acqua, in cui si pu\u00f2 dissolvere diventando invisibile.","femaleSprites":false,"learnset":[[0,"water-gun"],[1,"helping-hand"],[1,"tackle"],[1,"tail-whip"],[1,"water-gun"],[5,"sand-attack"],[9,"baby-doll-eyes"],[13,"quick-attack"],[17,"water-pulse"],[20,"aurora-beam"],[25,"aqua-ring"],[29,"acid-armor"],[33,"haze"],[37,"muddy-water"],[41,"last-resort"],[45,"hydro-pump"]]},{"id":135,"slug":"jolteon","name":"Jolteon","types":["electric"],"stats":{"hp":65,"attack":65,"defense":60,"special-attack":110,"special-defense":95,"speed":130},"evYield":{"speed":2},"baseExp":184,"height":8,"weight":245,"abilities":["volt-absorb"],"growth":"medium","genderRate":1,"captureRate":45,"habitat":"urban","flavor":"Accumula gli ioni negativi presenti nell\u2019atmosfera per lanciare scariche elettriche da 10.000 volt.","femaleSprites":false,"learnset":[[0,"thunder-shock"],[1,"helping-hand"],[1,"tackle"],[1,"tail-whip"],[1,"thunder-shock"],[5,"sand-attack"],[9,"baby-doll-eyes"],[13,"quick-attack"],[17,"double-kick"],[20,"thunder-fang"],[25,"pin-missile"],[29,"agility"],[33,"thunder-wave"],[37,"discharge"],[41,"last-resort"],[45,"thunder"]]},{"id":136,"slug":"flareon","name":"Flareon","types":["fire"],"stats":{"hp":65,"attack":130,"defense":60,"special-attack":95,"special-defense":110,"speed":65},"evYield":{"attack":2},"baseExp":184,"height":9,"weight":250,"abilities":["flash-fire"],"growth":"medium","genderRate":1,"captureRate":45,"habitat":"urban","flavor":"Parte dell\u2019aria che inala finisce in una sacca interna, dove brucia raggiungendo una temperatura di 1.700 \u00baC.","femaleSprites":false,"learnset":[[0,"ember"],[1,"ember"],[1,"helping-hand"],[1,"tackle"],[1,"tail-whip"],[5,"sand-attack"],[9,"baby-doll-eyes"],[13,"quick-attack"],[17,"bite"],[20,"fire-fang"],[25,"fire-spin"],[29,"scary-face"],[33,"smog"],[37,"lava-plume"],[41,"last-resort"],[45,"flare-blitz"]]},{"id":137,"slug":"porygon","name":"Porygon","types":["normal"],"stats":{"hp":65,"attack":60,"defense":70,"special-attack":85,"special-defense":75,"speed":40},"evYield":{"special-attack":1},"baseExp":79,"height":8,"weight":365,"abilities":["trace","download"],"growth":"medium","genderRate":-1,"captureRate":45,"habitat":"urban","flavor":"Negli ultimi anni ha assunto un ruolo di rilevanza nel cyberspazio, in cui si aggira per assicurarsi che non ci siano dati sospetti.","femaleSprites":false,"learnset":[[1,"conversion"],[1,"conversion-2"],[1,"sharpen"],[1,"tackle"],[7,"psybeam"],[12,"agility"],[18,"recover"],[23,"magnet-rise"],[29,"signal-beam"],[34,"recycle"],[40,"discharge"],[45,"lock-on"],[50,"tri-attack"],[56,"magic-coat"],[62,"zap-cannon"]]},{"id":138,"slug":"omanyte","name":"Omanyte","types":["rock","water"],"stats":{"hp":35,"attack":40,"defense":100,"special-attack":90,"special-defense":55,"speed":35},"evYield":{"defense":1},"baseExp":71,"height":4,"weight":75,"abilities":["swift-swim","shell-armor"],"growth":"medium","genderRate":1,"captureRate":45,"habitat":"sea","flavor":"\u00c8 un antico Pok\u00e9mon ormai estinto. Quando nuota usando i suoi dieci tentacoli sembra fluttuare nell\u2019acqua.","femaleSprites":false,"learnset":[[1,"constrict"],[1,"withdraw"],[7,"bite"],[10,"water-gun"],[16,"rollout"],[19,"leer"],[25,"mud-shot"],[28,"brine"],[34,"protect"],[37,"ancient-power"],[43,"tickle"],[46,"rock-blast"],[50,"shell-smash"],[55,"hydro-pump"]]},{"id":139,"slug":"omastar","name":"Omastar","types":["rock","water"],"stats":{"hp":70,"attack":60,"defense":125,"special-attack":115,"special-defense":70,"speed":55},"evYield":{"defense":2},"baseExp":173,"height":10,"weight":350,"abilities":["swift-swim","shell-armor"],"growth":"medium","genderRate":1,"captureRate":45,"habitat":"sea","flavor":"Le sue zanne affilate possono frantumare anche le pietre, ma pu\u00f2 attaccare solo le prede a portata di tentacolo.","femaleSprites":false,"learnset":[[0,"spike-cannon"],[1,"bite"],[1,"constrict"],[1,"hydro-pump"],[1,"spike-cannon"],[1,"withdraw"],[7,"bite"],[10,"water-gun"],[16,"rollout"],[19,"leer"],[25,"mud-shot"],[28,"brine"],[34,"protect"],[37,"ancient-power"],[48,"tickle"],[56,"rock-blast"],[67,"shell-smash"],[75,"hydro-pump"]]},{"id":140,"slug":"kabuto","name":"Kabuto","types":["rock","water"],"stats":{"hp":30,"attack":80,"defense":90,"special-attack":55,"special-defense":45,"speed":55},"evYield":{"defense":1},"baseExp":71,"height":5,"weight":115,"abilities":["swift-swim","battle-armor"],"growth":"medium","genderRate":1,"captureRate":45,"habitat":"sea","flavor":"Si dice che si sia estinto, ma pare che in certe zone si possa avvistare con una certa facilit\u00e0.","femaleSprites":false,"learnset":[[1,"harden"],[1,"scratch"],[6,"absorb"],[11,"leer"],[16,"mud-shot"],[21,"sand-attack"],[26,"endure"],[31,"aqua-jet"],[36,"mega-drain"],[41,"metal-sound"],[46,"ancient-power"],[50,"wring-out"]]},{"id":141,"slug":"kabutops","name":"Kabutops","types":["rock","water"],"stats":{"hp":60,"attack":115,"defense":105,"special-attack":65,"special-defense":70,"speed":80},"evYield":{"attack":2},"baseExp":173,"height":13,"weight":405,"abilities":["swift-swim","battle-armor"],"growth":"medium","genderRate":1,"captureRate":45,"habitat":"sea","flavor":"Questo feroce Pok\u00e9mon dell\u2019antichit\u00e0 viveva nei mari caldi. Le cause della sua estinzione sono ignote.","femaleSprites":false,"learnset":[[0,"slash"],[1,"absorb"],[1,"feint"],[1,"harden"],[1,"leer"],[1,"night-slash"],[1,"scratch"],[1,"slash"],[6,"absorb"],[11,"leer"],[16,"mud-shot"],[21,"sand-attack"],[26,"endure"],[31,"aqua-jet"],[36,"mega-drain"],[45,"metal-sound"],[54,"ancient-power"],[63,"wring-out"],[72,"night-slash"]]},{"id":142,"slug":"aerodactyl","name":"Aerodactyl","types":["rock","flying"],"stats":{"hp":80,"attack":105,"defense":65,"special-attack":60,"special-defense":75,"speed":130},"evYield":{"speed":2},"baseExp":180,"height":18,"weight":590,"abilities":["rock-head","pressure"],"growth":"slow","genderRate":1,"captureRate":45,"habitat":"mountain","flavor":"Le sue zanne simili a lame sono in grado di fare a brandelli persino la pelle dei Pok\u00e9mon di tipo Acciaio.","femaleSprites":false,"learnset":[[1,"bite"],[1,"fire-fang"],[1,"ice-fang"],[1,"iron-head"],[1,"scary-face"],[1,"supersonic"],[1,"thunder-fang"],[1,"wing-attack"],[9,"roar"],[17,"agility"],[25,"ancient-power"],[33,"crunch"],[41,"take-down"],[49,"sky-drop"],[57,"iron-head"],[65,"hyper-beam"],[73,"rock-slide"],[81,"giga-impact"]]},{"id":143,"slug":"snorlax","name":"Snorlax","types":["normal"],"stats":{"hp":160,"attack":110,"defense":65,"special-attack":65,"special-defense":110,"speed":30},"evYield":{"hp":2},"baseExp":189,"height":21,"weight":4600,"abilities":["immunity","thick-fat"],"growth":"slow","genderRate":1,"captureRate":25,"habitat":"mountain","flavor":"Ha uno stomaco cos\u00ec resistente che pu\u00f2 ingerire anche cibo ammuffito o avariato.","femaleSprites":false,"learnset":[[1,"tackle"],[4,"defense-curl"],[9,"amnesia"],[12,"lick"],[17,"chip-away"],[20,"yawn"],[25,"body-slam"],[28,"rest"],[28,"snore"],[33,"sleep-talk"],[35,"giga-impact"],[36,"rollout"],[41,"block"],[44,"belly-drum"],[49,"crunch"],[50,"heavy-slam"],[57,"high-horsepower"]]},{"id":144,"slug":"articuno","name":"Articuno","types":["ice","flying"],"stats":{"hp":90,"attack":85,"defense":100,"special-attack":95,"special-defense":125,"speed":85},"evYield":{"special-defense":3},"baseExp":261,"height":17,"weight":554,"abilities":["pressure"],"growth":"slow","genderRate":-1,"captureRate":3,"habitat":"rare","flavor":"\u00c8 in grado di controllare il ghiaccio a suo piacimento. Si dice che viva sulle montagne innevate nelle aree coperte da permafrost.","femaleSprites":false,"learnset":[[1,"gust"],[1,"powder-snow"],[8,"mist"],[15,"ice-shard"],[22,"mind-reader"],[29,"ancient-power"],[36,"agility"],[43,"freeze-dry"],[50,"reflect"],[57,"hail"],[64,"tailwind"],[71,"ice-beam"],[78,"blizzard"],[85,"roost"],[92,"hurricane"],[99,"sheer-cold"]]},{"id":145,"slug":"zapdos","name":"Zapdos","types":["electric","flying"],"stats":{"hp":90,"attack":90,"defense":85,"special-attack":125,"special-defense":90,"speed":100},"evYield":{"special-attack":3},"baseExp":261,"height":16,"weight":526,"abilities":["pressure"],"growth":"slow","genderRate":-1,"captureRate":3,"habitat":"rare","flavor":"Si dice che quando questo leggendario Pok\u00e9mon alato sfrega le ali fra loro, cada istantaneamente un fulmine.","femaleSprites":false,"learnset":[[1,"peck"],[1,"thunder-shock"],[8,"thunder-wave"],[15,"detect"],[22,"pluck"],[29,"ancient-power"],[36,"charge"],[43,"agility"],[50,"discharge"],[57,"rain-dance"],[64,"light-screen"],[71,"drill-peck"],[78,"thunder"],[85,"roost"],[92,"magnetic-flux"],[99,"zap-cannon"]]},{"id":146,"slug":"moltres","name":"Moltres","types":["fire","flying"],"stats":{"hp":90,"attack":100,"defense":90,"special-attack":125,"special-defense":85,"speed":90},"evYield":{"special-attack":3},"baseExp":261,"height":20,"weight":600,"abilities":["pressure"],"growth":"slow","genderRate":-1,"captureRate":3,"habitat":"rare","flavor":"Si narra che abbia aiutato dei viandanti che si erano persi illuminando i sentieri montuosi con le splendide ali infuocate.","femaleSprites":false,"learnset":[[1,"ember"],[1,"wing-attack"],[8,"fire-spin"],[15,"agility"],[22,"endure"],[29,"ancient-power"],[36,"flamethrower"],[43,"safeguard"],[50,"air-slash"],[57,"sunny-day"],[64,"heat-wave"],[71,"solar-beam"],[78,"sky-attack"],[85,"roost"],[92,"hurricane"],[99,"burn-up"]]},{"id":147,"slug":"dratini","name":"Dratini","types":["dragon"],"stats":{"hp":41,"attack":64,"defense":45,"special-attack":50,"special-defense":50,"speed":50},"evYield":{"attack":1},"baseExp":60,"height":18,"weight":33,"abilities":["shed-skin"],"growth":"slow","genderRate":4,"captureRate":45,"habitat":"waters-edge","flavor":"\u00c8 stato a lungo considerato un miraggio. La piccola protuberanza sulla fronte \u00e8 un corno in fase di crescita.","femaleSprites":false,"learnset":[[1,"leer"],[1,"wrap"],[5,"thunder-wave"],[11,"twister"],[15,"dragon-rage"],[21,"slam"],[25,"agility"],[31,"dragon-tail"],[35,"aqua-tail"],[41,"dragon-rush"],[45,"safeguard"],[51,"dragon-dance"],[55,"outrage"],[61,"hyper-beam"]]},{"id":148,"slug":"dragonair","name":"Dragonair","types":["dragon"],"stats":{"hp":61,"attack":84,"defense":65,"special-attack":70,"special-defense":70,"speed":70},"evYield":{"attack":2},"baseExp":147,"height":40,"weight":165,"abilities":["shed-skin"],"growth":"slow","genderRate":4,"captureRate":45,"habitat":"waters-edge","flavor":"Accumula energia nelle sfere che ha sulla coda e controlla le condizioni atmosferiche. Avvolto dalla sua aura ha un aspetto misterioso.","femaleSprites":false,"learnset":[[1,"leer"],[1,"thunder-wave"],[1,"twister"],[1,"wrap"],[5,"thunder-wave"],[11,"twister"],[15,"dragon-rage"],[21,"slam"],[25,"agility"],[33,"dragon-tail"],[39,"aqua-tail"],[47,"dragon-rush"],[53,"safeguard"],[61,"dragon-dance"],[67,"outrage"],[75,"hyper-beam"]]},{"id":149,"slug":"dragonite","name":"Dragonite","types":["dragon","flying"],"stats":{"hp":91,"attack":134,"defense":95,"special-attack":100,"special-defense":100,"speed":80},"evYield":{"attack":3},"baseExp":270,"height":22,"weight":2100,"abilities":["inner-focus"],"growth":"slow","genderRate":4,"captureRate":45,"habitat":"waters-edge","flavor":"Viene chiamato \u201cIncarnazione del mare\u201d. Molte navi hanno una statua di Dragonite sulla prua.","femaleSprites":false,"learnset":[[0,"wing-attack"],[1,"fire-punch"],[1,"hurricane"],[1,"leer"],[1,"roost"],[1,"thunder-punch"],[1,"thunder-wave"],[1,"twister"],[1,"wing-attack"],[1,"wrap"],[5,"thunder-wave"],[11,"twister"],[15,"dragon-rage"],[21,"slam"],[25,"agility"],[33,"dragon-tail"],[39,"aqua-tail"],[47,"dragon-rush"],[53,"safeguard"],[61,"dragon-dance"],[67,"outrage"],[75,"hyper-beam"],[81,"hurricane"]]},{"id":150,"slug":"mewtwo","name":"Mewtwo","types":["psychic"],"stats":{"hp":106,"attack":110,"defense":90,"special-attack":154,"special-defense":90,"speed":130},"evYield":{"special-attack":3},"baseExp":306,"height":20,"weight":1220,"abilities":["pressure"],"growth":"slow","genderRate":-1,"captureRate":3,"habitat":"rare","flavor":"Il suo DNA \u00e8 quasi uguale a quello di Mew. Ci\u00f2 nonostante, sono agli antipodi per dimensioni e carattere.","femaleSprites":false,"learnset":[[1,"confusion"],[1,"disable"],[1,"laser-focus"],[1,"psywave"],[1,"safeguard"],[8,"swift"],[15,"future-sight"],[22,"psych-up"],[29,"miracle-eye"],[36,"psycho-cut"],[43,"guard-swap"],[43,"power-swap"],[50,"recover"],[57,"psychic"],[64,"barrier"],[70,"aura-sphere"],[79,"amnesia"],[86,"mist"],[93,"me-first"],[100,"psystrike"]]},{"id":151,"slug":"mew","name":"Mew","types":["psychic"],"stats":{"hp":100,"attack":100,"defense":100,"special-attack":100,"special-defense":100,"speed":100},"evYield":{"hp":3},"baseExp":270,"height":4,"weight":40,"abilities":["synchronize"],"growth":"medium-slow","genderRate":-1,"captureRate":45,"habitat":"rare","flavor":"Osservando al microscopio la pelle di Mew si pu\u00f2 constatare che \u00e8 ricoperta da una fitta peluria, corta e fine.","femaleSprites":false,"learnset":[[1,"pound"],[1,"reflect-type"],[1,"transform"],[10,"mega-punch"],[20,"metronome"],[30,"psychic"],[40,"barrier"],[50,"ancient-power"],[60,"amnesia"],[70,"me-first"],[80,"baton-pass"],[90,"nasty-plot"],[100,"aura-sphere"]]}]};
const movesFile = {"meta":{"source":"PokeAPI (pokeapi.co) \u2014 dati BSD-3-Clause","versionGroup":"ultra-sun-ultra-moon","generated":"2026-11-13"},"data":{"pound":{"name":"Botta","type":"normal","category":"physical","power":40,"accuracy":100,"pp":35,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con la coda o le zampe anteriori.","flags":["contact","protect"]},"karate-chop":{"name":"Colpokarate","type":"fighting","category":"physical","power":50,"accuracy":100,"pp":25,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","critRate":1,"flags":["contact","protect"]},"double-slap":{"name":"Doppiasberla","type":"normal","category":"physical","power":15,"accuracy":85,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","minHits":2,"maxHits":5,"flags":["contact","protect"]},"comet-punch":{"name":"Cometapugno","type":"normal","category":"physical","power":18,"accuracy":85,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","minHits":2,"maxHits":5,"flags":["contact","protect","punch"]},"mega-punch":{"name":"Megapugno","type":"normal","category":"physical","power":80,"accuracy":85,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con un pugno poderoso.","flags":["contact","protect","punch"]},"pay-day":{"name":"Giornopaga","type":"normal","category":"physical","power":40,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con una gran quantit\u00e0 di monete recuperabili dopo la lotta.","flags":["protect"]},"fire-punch":{"name":"Fuocopugno","type":"fire","category":"physical","power":75,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con un pugno ardente che pu\u00f2 scottarlo.","ailment":"burn","ailmentChance":10,"effectChance":10,"flags":["contact","protect","punch"]},"ice-punch":{"name":"Gelopugno","type":"ice","category":"physical","power":75,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con un pugno di ghiaccio che pu\u00f2 congelarlo.","ailment":"freeze","ailmentChance":10,"effectChance":10,"flags":["contact","protect","punch"]},"thunder-punch":{"name":"Tuonopugno","type":"electric","category":"physical","power":75,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con un pugno elettrico che pu\u00f2 paralizzarlo.","ailment":"paralysis","ailmentChance":10,"effectChance":10,"flags":["contact","protect","punch"]},"scratch":{"name":"Graffio","type":"normal","category":"physical","power":40,"accuracy":100,"pp":35,"priority":0,"target":"selected-pokemon","desc":"Infligge danni al bersaglio con artigli acuminati, duri e affilati.","flags":["contact","protect"]},"vice-grip":{"name":"Presa","type":"normal","category":"physical","power":55,"accuracy":100,"pp":30,"priority":0,"target":"selected-pokemon","desc":"Stringe il bersaglio in una morsa.","flags":["contact","protect"]},"guillotine":{"name":"Ghigliottina","type":"normal","category":"physical","power":0,"accuracy":30,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Attacca il bersaglio con pericolose tenaglie. Se l\u2019attacco va a segno, il Pok\u00e9mon colpito va subito KO.","flags":["contact","protect"]},"razor-wind":{"name":"Ventagliente","type":"normal","category":"special","power":80,"accuracy":100,"pp":10,"priority":0,"target":"all-opponents","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","critRate":1,"flags":["protect"]},"swords-dance":{"name":"Danzaspada","type":"normal","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Danza frenetica che incrementa lo spirito combattivo. Chi la usa aumenta di molto il suo Attacco.","statChanges":[["attack",2]]},"gust":{"name":"Raffica","type":"flying","category":"special","power":40,"accuracy":100,"pp":35,"priority":0,"target":"selected-pokemon","desc":"Infligge danni al bersaglio con una folata di vento sollevata dalle ali.","flags":["protect"]},"wing-attack":{"name":"Attacco d\u2019Ala","type":"flying","category":"physical","power":60,"accuracy":100,"pp":35,"priority":0,"target":"selected-pokemon","desc":"Infligge danni al bersaglio spiegando delle grandi ali possenti.","flags":["contact","protect"]},"whirlwind":{"name":"Turbine","type":"normal","category":"status","power":0,"accuracy":null,"pp":20,"priority":-6,"target":"selected-pokemon","desc":"Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pok\u00e9mon selvatici."},"bind":{"name":"Legatutto","type":"normal","category":"physical","power":15,"accuracy":85,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Il lungo corpo o i tentacoli di chi la usa legano e stritolano il bersaglio per quattro o cinque turni.","ailment":"trap","ailmentChance":100,"effectChance":100,"flags":["contact","protect"]},"slam":{"name":"Schianto","type":"normal","category":"physical","power":80,"accuracy":75,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Infligge danni al bersaglio con la coda, con una liana o con qualcosa di simile.","flags":["contact","protect"]},"vine-whip":{"name":"Frustata","type":"grass","category":"physical","power":45,"accuracy":100,"pp":25,"priority":0,"target":"selected-pokemon","desc":"Infligge danni al bersaglio con liane sottili simili a fruste.","flags":["contact","protect"]},"stomp":{"name":"Pestone","type":"normal","category":"physical","power":65,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con un grosso piede e pu\u00f2 anche farlo tentennare.","flinchChance":30,"effectChance":30,"flags":["contact","protect"]},"double-kick":{"name":"Doppiocalcio","type":"fighting","category":"physical","power":30,"accuracy":100,"pp":30,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio due volte con una raffica di calci inferti con entrambi i piedi.","minHits":2,"maxHits":2,"flags":["contact","protect"]},"mega-kick":{"name":"Megacalcio","type":"normal","category":"physical","power":120,"accuracy":75,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con un calcio sferrato con la forza di muscoli poderosi.","flags":["contact","protect"]},"jump-kick":{"name":"Calciosalto","type":"fighting","category":"physical","power":100,"accuracy":95,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["contact","protect"]},"rolling-kick":{"name":"Calciorullo","type":"fighting","category":"physical","power":60,"accuracy":85,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flinchChance":30,"effectChance":30,"flags":["contact","protect"]},"sand-attack":{"name":"Turbosabbia","type":"ground","category":"status","power":0,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Getta sabbia in faccia al bersaglio e ne riduce la precisione.","statChanges":[["accuracy",-1]],"flags":["protect"]},"headbutt":{"name":"Bottintesta","type":"normal","category":"physical","power":70,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa si lancia diritto di testa contro il bersaglio. Pu\u00f2 anche farlo tentennare.","flinchChance":30,"effectChance":30,"flags":["contact","protect"]},"horn-attack":{"name":"Incornata","type":"normal","category":"physical","power":65,"accuracy":100,"pp":25,"priority":0,"target":"selected-pokemon","desc":"Danneggia il bersaglio infilzandolo con un corno affilato.","flags":["contact","protect"]},"fury-attack":{"name":"Furia","type":"normal","category":"physical","power":15,"accuracy":85,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.","minHits":2,"maxHits":5,"flags":["contact","protect"]},"horn-drill":{"name":"Perforcorno","type":"normal","category":"physical","power":0,"accuracy":30,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con un corno perforante come un trapano. Se il colpo va a segno, il Pok\u00e9mon colpito va KO.","flags":["contact","protect"]},"tackle":{"name":"Azione","type":"normal","category":"physical","power":40,"accuracy":100,"pp":35,"priority":0,"target":"selected-pokemon","desc":"Attacco fisico che colpisce il bersaglio investendolo con tutto il corpo.","flags":["contact","protect"]},"body-slam":{"name":"Corposcontro","type":"normal","category":"physical","power":85,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa carica il bersaglio con tutto il corpo. Pu\u00f2 causarne anche la paralisi.","ailment":"paralysis","ailmentChance":30,"effectChance":30,"flags":["contact","protect"]},"wrap":{"name":"Avvolgibotta","type":"normal","category":"physical","power":15,"accuracy":90,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.","ailment":"trap","ailmentChance":100,"effectChance":100,"flags":["contact","protect"]},"take-down":{"name":"Riduttore","type":"normal","category":"physical","power":90,"accuracy":85,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Carica spericolata con tutto il corpo contro il bersaglio. Danneggia un po\u2019 anche chi la usa.","drain":-25,"flags":["contact","protect"]},"thrash":{"name":"Colpo","type":"normal","category":"physical","power":120,"accuracy":100,"pp":10,"priority":0,"target":"random-opponent","desc":"Assale e attacca il nemico per due o tre turni, ma confonde chi la usa.","flags":["contact","protect"]},"double-edge":{"name":"Sdoppiatore","type":"normal","category":"physical","power":120,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Carica spietata e pericolosa che danneggia molto anche chi la usa.","drain":-33,"flags":["contact","protect"]},"tail-whip":{"name":"Colpocoda","type":"normal","category":"status","power":0,"accuracy":100,"pp":30,"priority":0,"target":"all-opponents","desc":"Chi la usa agita la coda per distrarre i nemici che ha intorno, riducendone la Difesa.","statChanges":[["defense",-1]],"flags":["protect"]},"poison-sting":{"name":"Velenospina","type":"poison","category":"physical","power":15,"accuracy":100,"pp":35,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con un aculeo tossico che pu\u00f2 anche avvelenarlo.","ailment":"poison","ailmentChance":30,"effectChance":30,"flags":["protect"]},"twineedle":{"name":"Doppio Ago","type":"bug","category":"physical","power":25,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","ailment":"poison","ailmentChance":20,"minHits":2,"maxHits":2,"effectChance":20,"flags":["protect"]},"pin-missile":{"name":"Missilspillo","type":"bug","category":"physical","power":25,"accuracy":95,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio viene colpito da due a cinque volte in rapida successione con delle spine.","minHits":2,"maxHits":5,"flags":["protect"]},"leer":{"name":"Fulmisguardo","type":"normal","category":"status","power":0,"accuracy":100,"pp":30,"priority":0,"target":"all-opponents","desc":"Terrorizza i nemici intorno con uno sguardo fulminante e intimidatorio, riducendone la Difesa.","statChance":100,"effectChance":100,"statChanges":[["defense",-1]],"flags":["protect"]},"bite":{"name":"Morso","type":"dark","category":"physical","power":60,"accuracy":100,"pp":25,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio viene morso da denti affilatissimi che possono farlo tentennare.","flinchChance":30,"effectChance":30,"flags":["bite","contact","protect"]},"growl":{"name":"Ruggito","type":"normal","category":"status","power":0,"accuracy":100,"pp":40,"priority":0,"target":"all-opponents","desc":"Distrae i nemici intorno con un tenero ruggito e ne riduce l\u2019Attacco.","statChanges":[["attack",-1]],"flags":["protect","sound"]},"roar":{"name":"Boato","type":"normal","category":"status","power":0,"accuracy":null,"pp":20,"priority":-6,"target":"selected-pokemon","desc":"Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pok\u00e9mon selvatici.","flags":["sound"]},"sing":{"name":"Canto","type":"normal","category":"status","power":0,"accuracy":55,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Dolce ninnananna, cantata da una voce suadente, che fa addormentare il bersaglio.","ailment":"sleep","flags":["protect","sound"]},"supersonic":{"name":"Supersuono","type":"normal","category":"status","power":0,"accuracy":55,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa genera dal proprio corpo strane onde acustiche che possono confondere il bersaglio.","ailment":"confusion","flags":["protect","sound"]},"sonic-boom":{"name":"Sonicboom","type":"normal","category":"special","power":0,"accuracy":90,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["protect"]},"disable":{"name":"Inibitore","type":"normal","category":"status","power":0,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Per quattro turni impedisce al bersaglio di riutilizzare l\u2019ultima mossa usata.","ailment":"disable","flags":["protect"]},"acid":{"name":"Acido","type":"poison","category":"special","power":40,"accuracy":100,"pp":30,"priority":0,"target":"all-opponents","desc":"Colpisce i nemici intorno spruzzando un acido corrosivo. Pu\u00f2 anche ridurne la Difesa Speciale.","statChance":10,"effectChance":10,"statChanges":[["special-defense",-1]],"flags":["protect"]},"ember":{"name":"Braciere","type":"fire","category":"special","power":40,"accuracy":100,"pp":25,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio viene colpito da fiammelle che possono anche scottarlo.","ailment":"burn","ailmentChance":10,"effectChance":10,"flags":["protect"]},"flamethrower":{"name":"Lanciafiamme","type":"fire","category":"special","power":90,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio viene colpito da intense fiammate che possono anche scottarlo.","ailment":"burn","ailmentChance":10,"effectChance":10,"flags":["protect"]},"mist":{"name":"Nebbia","type":"ice","category":"status","power":0,"accuracy":null,"pp":30,"priority":0,"target":"users-field","desc":"Chi la usa attira una nebbia che blocca la riduzione delle statistiche per s\u00e9 e gli alleati per cinque turni."},"water-gun":{"name":"Pistolacqua","type":"water","category":"special","power":40,"accuracy":100,"pp":25,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio \u00e8 colpito da un potente getto d\u2019acqua.","flags":["protect"]},"hydro-pump":{"name":"Idropompa","type":"water","category":"special","power":110,"accuracy":80,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio \u00e8 travolto da un potente getto d\u2019acqua spruzzato ad altissima pressione.","flags":["protect"]},"ice-beam":{"name":"Geloraggio","type":"ice","category":"special","power":90,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio \u00e8 colpito da un raggio di energia gelida che pu\u00f2 anche congelarlo.","ailment":"freeze","ailmentChance":10,"effectChance":10,"flags":["protect"]},"blizzard":{"name":"Bora","type":"ice","category":"special","power":110,"accuracy":70,"pp":5,"priority":0,"target":"all-opponents","desc":"Colpisce i nemici intorno con una tremenda tempesta di ghiaccio che pu\u00f2 anche congelarli.","ailment":"freeze","ailmentChance":10,"effectChance":10,"flags":["protect"]},"psybeam":{"name":"Psicoraggio","type":"psychic","category":"special","power":65,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con un raggio speciale. Pu\u00f2 anche confonderlo.","ailment":"confusion","ailmentChance":10,"effectChance":10,"flags":["protect"]},"bubble-beam":{"name":"Bollaraggio","type":"water","category":"special","power":65,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con una forte scarica di bolle. Pu\u00f2 anche ridurne la Velocit\u00e0.","statChance":10,"effectChance":10,"statChanges":[["speed",-1]],"flags":["protect"]},"aurora-beam":{"name":"Raggiaurora","type":"ice","category":"special","power":65,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con un raggio dai colori dell\u2019iride. Pu\u00f2 anche ridurne l\u2019Attacco.","statChance":10,"effectChance":10,"statChanges":[["attack",-1]],"flags":["protect"]},"hyper-beam":{"name":"Iper Raggio","type":"normal","category":"special","power":150,"accuracy":90,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con un potente raggio. Chi la usa salta il turno successivo per recuperare energia.","flags":["protect"]},"peck":{"name":"Beccata","type":"flying","category":"physical","power":35,"accuracy":100,"pp":35,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con il becco appuntito o con un corno.","flags":["contact","protect"]},"drill-peck":{"name":"Perforbecco","type":"flying","category":"physical","power":80,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Attacco a spirale con un becco aguzzo che fa da trapano.","flags":["contact","protect"]},"submission":{"name":"Sottomissione","type":"fighting","category":"physical","power":80,"accuracy":80,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa carica il bersaglio in modo spericolato, ma danneggia anche se stesso.","drain":-25,"flags":["contact","protect"]},"low-kick":{"name":"Colpo Basso","type":"fighting","category":"physical","power":0,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Un calcio basso e potente che fa cadere il bersaglio. Danneggia maggiormente i Pok\u00e9mon pi\u00f9 pesanti.","flags":["contact","protect"]},"counter":{"name":"Contrattacco","type":"fighting","category":"physical","power":0,"accuracy":100,"pp":20,"priority":-5,"target":"specific-move","desc":"Mossa che contrasta ogni attacco fisico, arrecando il doppio del danno ricevuto.","flags":["contact","protect"]},"seismic-toss":{"name":"Movim. Sismico","type":"fighting","category":"physical","power":0,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con la forza di gravit\u00e0. Infligge un danno pari al livello di chi la usa.","flags":["contact","protect"]},"strength":{"name":"Forza","type":"normal","category":"physical","power":80,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con un\u2019enorme energia.","flags":["contact","protect"]},"absorb":{"name":"Assorbimento","type":"grass","category":"special","power":20,"accuracy":100,"pp":25,"priority":0,"target":"selected-pokemon","desc":"Mossa che assorbe PS. Chi la usa recupera una quantit\u00e0 di PS pari alla met\u00e0 del danno inferto.","drain":50,"flags":["heal","protect"]},"mega-drain":{"name":"Megassorbimento","type":"grass","category":"special","power":40,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Mossa che assorbe PS. Chi la usa recupera una quantit\u00e0 di PS pari alla met\u00e0 del danno inferto.","drain":50,"flags":["heal","protect"]},"leech-seed":{"name":"Parassiseme","type":"grass","category":"status","power":0,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Vengono piantati semi sul bersaglio. Questi sottraggono PS a ogni turno permettendo a chi la usa di curarsi.","ailment":"leech-seed","flags":["protect"]},"growth":{"name":"Crescita","type":"normal","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Provoca la crescita immediata del corpo e l\u2019aumento dell\u2019Attacco e dell\u2019Attacco Speciale di chi la usa.","statChanges":[["attack",1],["special-attack",1]]},"razor-leaf":{"name":"Foglielama","type":"grass","category":"physical","power":55,"accuracy":95,"pp":25,"priority":0,"target":"all-opponents","desc":"Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.","critRate":1,"flags":["protect"]},"solar-beam":{"name":"Solarraggio","type":"grass","category":"special","power":120,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa assorbe luce al primo turno per proiettare un raggio intenso al turno successivo.","flags":["protect"]},"poison-powder":{"name":"Velenpolvere","type":"poison","category":"status","power":0,"accuracy":75,"pp":35,"priority":0,"target":"selected-pokemon","desc":"Investe il bersaglio con una nuvola di polvere tossica che avvelena.","ailment":"poison","flags":["powder","protect"]},"stun-spore":{"name":"Paralizzante","type":"grass","category":"status","power":0,"accuracy":75,"pp":30,"priority":0,"target":"selected-pokemon","desc":"Investe il bersaglio con una nuvola di polvere che paralizza.","ailment":"paralysis","flags":["powder","protect"]},"sleep-powder":{"name":"Sonnifero","type":"grass","category":"status","power":0,"accuracy":75,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.","ailment":"sleep","flags":["powder","protect"]},"petal-dance":{"name":"Petalodanza","type":"grass","category":"special","power":120,"accuracy":100,"pp":10,"priority":0,"target":"random-opponent","desc":"Attacca il nemico cospargendolo di petali per due o tre turni, ma chi la usa rimane confuso.","flags":["contact","protect"]},"string-shot":{"name":"Millebave","type":"bug","category":"status","power":0,"accuracy":95,"pp":40,"priority":0,"target":"all-opponents","desc":"Chi la usa produce della seta che avvolge i nemici intorno e ne riduce di molto la Velocit\u00e0.","statChanges":[["speed",-2]],"flags":["protect"]},"dragon-rage":{"name":"Ira di Drago","type":"dragon","category":"special","power":0,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["protect"]},"fire-spin":{"name":"Turbofuoco","type":"fire","category":"special","power":35,"accuracy":85,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Intrappola il bersaglio in un turbine di fuoco che dura per quattro o cinque turni.","ailment":"trap","ailmentChance":100,"effectChance":100,"flags":["protect"]},"thunder-shock":{"name":"Tuonoshock","type":"electric","category":"special","power":40,"accuracy":100,"pp":30,"priority":0,"target":"selected-pokemon","desc":"Danneggia il bersaglio con una scarica elettrica che pu\u00f2 anche paralizzarlo.","ailment":"paralysis","ailmentChance":10,"effectChance":10,"flags":["protect"]},"thunderbolt":{"name":"Fulmine","type":"electric","category":"special","power":90,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio viene colpito da una potente scarica elettrica che pu\u00f2 anche paralizzarlo.","ailment":"paralysis","ailmentChance":10,"effectChance":10,"flags":["protect"]},"thunder-wave":{"name":"Tuononda","type":"electric","category":"status","power":0,"accuracy":90,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con una debole scarica elettrica che lo paralizza.","ailment":"paralysis","flags":["protect"]},"thunder":{"name":"Tuono","type":"electric","category":"special","power":110,"accuracy":70,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio \u00e8 colpito da un fulmine molto violento che pu\u00f2 anche paralizzarlo.","ailment":"paralysis","ailmentChance":30,"effectChance":30,"flags":["protect"]},"rock-throw":{"name":"Sassata","type":"rock","category":"physical","power":50,"accuracy":90,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa raccoglie una pietra e la lancia contro il bersaglio.","flags":["protect"]},"earthquake":{"name":"Terremoto","type":"ground","category":"physical","power":100,"accuracy":100,"pp":10,"priority":0,"target":"all-other-pokemon","desc":"Chi la usa provoca un potente sisma che colpisce i Pok\u00e9mon che ha intorno.","flags":["protect"]},"fissure":{"name":"Abisso","type":"ground","category":"physical","power":0,"accuracy":30,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa crea una spaccatura nel terreno e cerca di gettarvici dentro il bersaglio. Se va a segno, il Pok\u00e9mon colpito va KO.","flags":["protect"]},"dig":{"name":"Fossa","type":"ground","category":"physical","power":80,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa scava al primo turno e attacca al successivo.","flags":["contact","protect"]},"toxic":{"name":"Tossina","type":"poison","category":"status","power":0,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Iperavvelena il bersaglio con una potente tossina. Il danno peggiora a ogni turno.","ailment":"poison","flags":["protect"]},"confusion":{"name":"Confusione","type":"psychic","category":"special","power":50,"accuracy":100,"pp":25,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con una leggera forza telecinetica e pu\u00f2 anche confonderlo.","ailment":"confusion","ailmentChance":10,"effectChance":10,"flags":["protect"]},"psychic":{"name":"Psichico","type":"psychic","category":"special","power":90,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio viene colpito da una potente forza telecinetica che pu\u00f2 anche ridurne la Difesa Speciale.","statChance":10,"effectChance":10,"statChanges":[["special-defense",-1]],"flags":["protect"]},"hypnosis":{"name":"Ipnosi","type":"psychic","category":"status","power":0,"accuracy":60,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.","ailment":"sleep","flags":["protect"]},"meditate":{"name":"Meditazione","type":"psychic","category":"status","power":0,"accuracy":null,"pp":40,"priority":0,"target":"user","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","statChanges":[["attack",1]]},"agility":{"name":"Agilit\u00e0","type":"psychic","category":"status","power":0,"accuracy":null,"pp":30,"priority":0,"target":"user","desc":"Chi la usa rilassa e alleggerisce il proprio corpo per far salire di molto la Velocit\u00e0.","statChanges":[["speed",2]]},"quick-attack":{"name":"Attacco Rapido","type":"normal","category":"physical","power":40,"accuracy":100,"pp":30,"priority":1,"target":"selected-pokemon","desc":"Chi la usa colpisce a una tale velocit\u00e0 da rendersi quasi invisibile. Questa mossa ha priorit\u00e0 alta.","flags":["contact","protect"]},"rage":{"name":"Ira","type":"normal","category":"physical","power":20,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["contact","protect"]},"teleport":{"name":"Teletrasporto","type":"psychic","category":"status","power":0,"accuracy":null,"pp":20,"priority":-6,"target":"user","desc":"Chi la usa viene sostituito se ci sono altri Pok\u00e9mon in squadra. Se un Pok\u00e9mon selvatico usa questa mossa, fugge dalla lotta."},"night-shade":{"name":"Ombra Notturna","type":"ghost","category":"special","power":0,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Fa apparire un orribile miraggio al bersaglio e infligge un danno pari al livello di chi la usa.","flags":["protect"]},"mimic":{"name":"Mimica","type":"normal","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa copia l\u2019ultima mossa usata dal bersaglio e la conserva finch\u00e9 rimane in campo.","flags":["protect"]},"screech":{"name":"Stridio","type":"normal","category":"status","power":0,"accuracy":85,"pp":40,"priority":0,"target":"selected-pokemon","desc":"Stridio assordante che riduce di molto la Difesa del bersaglio.","statChanges":[["defense",-2]],"flags":["protect","sound"]},"double-team":{"name":"Doppioteam","type":"normal","category":"status","power":0,"accuracy":null,"pp":15,"priority":0,"target":"user","desc":"Chi la usa si muove in fretta e crea copie illusorie di se stesso che aumentano la capacit\u00e0 di elusione.","statChanges":[["evasion",1]]},"recover":{"name":"Ripresa","type":"normal","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"user","desc":"Mossa autocurativa. Chi la usa recupera met\u00e0 dei PS massimi.","healing":50,"flags":["heal"]},"harden":{"name":"Rafforzatore","type":"normal","category":"status","power":0,"accuracy":null,"pp":30,"priority":0,"target":"user","desc":"Tutti i muscoli del corpo si tonificano per aumentare la Difesa.","statChanges":[["defense",1]]},"minimize":{"name":"Minimizzato","type":"normal","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"user","desc":"Il corpo di chi la usa si comprime e diventa pi\u00f9 piccolo. La sua capacit\u00e0 di elusione aumenta di molto.","statChanges":[["evasion",2]]},"smokescreen":{"name":"Muro di Fumo","type":"normal","category":"status","power":0,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.","statChanges":[["accuracy",-1]],"flags":["protect"]},"confuse-ray":{"name":"Stordiraggio","type":"ghost","category":"status","power":0,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con un raggio funesto che lo confonde.","ailment":"confusion","flags":["protect"]},"withdraw":{"name":"Ritirata","type":"water","category":"status","power":0,"accuracy":null,"pp":40,"priority":0,"target":"user","desc":"Il corpo si ritira nel suo duro guscio per aumentare la Difesa.","statChanges":[["defense",1]]},"defense-curl":{"name":"Ricciolscudo","type":"normal","category":"status","power":0,"accuracy":null,"pp":40,"priority":0,"target":"user","desc":"Chi la usa si raggomitola per nascondere i punti deboli e aumentare la propria Difesa.","statChanges":[["defense",1]]},"barrier":{"name":"Barriera","type":"psychic","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","statChanges":[["defense",2]]},"light-screen":{"name":"Schermoluce","type":"psychic","category":"status","power":0,"accuracy":null,"pp":30,"priority":0,"target":"users-field","desc":"Innalza una barriera misteriosa che riduce i danni degli attacchi speciali per s\u00e9 e gli alleati per cinque turni."},"haze":{"name":"Nube","type":"ice","category":"status","power":0,"accuracy":null,"pp":30,"priority":0,"target":"entire-field","desc":"Chi la usa crea una nube nera che annulla ogni modifica alle statistiche di tutti i Pok\u00e9mon in campo."},"reflect":{"name":"Riflesso","type":"psychic","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"users-field","desc":"Innalza una barriera misteriosa che riduce i danni degli attacchi fisici per s\u00e9 e gli alleati per cinque turni."},"focus-energy":{"name":"Focalenergia","type":"normal","category":"status","power":0,"accuracy":null,"pp":30,"priority":0,"target":"user","desc":"Chi la usa fa un profondo respiro e si concentra per rendere pi\u00f9 probabili i brutti colpi."},"metronome":{"name":"Metronomo","type":"normal","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"user","desc":"Chi la usa fa di no con il dito e stimola il cervello a usare a caso una delle tante mosse esistenti."},"mirror-move":{"name":"Speculmossa","type":"flying","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata."},"self-destruct":{"name":"Autodistruzione","type":"normal","category":"physical","power":200,"accuracy":100,"pp":5,"priority":0,"target":"all-other-pokemon","desc":"Chi la usa esplode e infligge danni ai Pok\u00e9mon che ha intorno, ma poi va KO.","flags":["protect"]},"egg-bomb":{"name":"Uovobomba","type":"normal","category":"physical","power":100,"accuracy":75,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["protect"]},"lick":{"name":"Leccata","type":"ghost","category":"physical","power":30,"accuracy":100,"pp":30,"priority":0,"target":"selected-pokemon","desc":"Una lingua lunga infligge danni al bersaglio e pu\u00f2 anche paralizzarlo.","ailment":"paralysis","ailmentChance":30,"effectChance":30,"flags":["contact","protect"]},"smog":{"name":"Smog","type":"poison","category":"special","power":30,"accuracy":70,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con una scarica di gas maleodoranti. Pu\u00f2 anche avvelenarlo.","ailment":"poison","ailmentChance":40,"effectChance":40,"flags":["protect"]},"sludge":{"name":"Fango","type":"poison","category":"special","power":65,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa lancia fango malsano sul bersaglio. Pu\u00f2 anche avvelenarlo.","ailment":"poison","ailmentChance":30,"effectChance":30,"flags":["protect"]},"bone-club":{"name":"Ossoclava","type":"ground","category":"physical","power":65,"accuracy":85,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flinchChance":10,"effectChance":10,"flags":["protect"]},"fire-blast":{"name":"Fuocobomba","type":"fire","category":"special","power":110,"accuracy":85,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Investe il bersaglio con un\u2019intensa fiammata che fa terra bruciata. Pu\u00f2 anche scottarlo.","ailment":"burn","ailmentChance":10,"effectChance":10,"flags":["protect"]},"waterfall":{"name":"Cascata","type":"water","category":"physical","power":80,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Carica il bersaglio a grande velocit\u00e0 e pu\u00f2 farlo tentennare.","flinchChance":20,"effectChance":20,"flags":["contact","protect"]},"clamp":{"name":"Tenaglia","type":"water","category":"physical","power":35,"accuracy":85,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","ailment":"trap","ailmentChance":100,"effectChance":100,"flags":["contact","protect"]},"swift":{"name":"Comete","type":"normal","category":"special","power":60,"accuracy":null,"pp":20,"priority":0,"target":"all-opponents","desc":"Chi la usa colpisce i nemici intorno con raggi a forma di stella. Questo attacco \u00e8 infallibile.","flags":["protect"]},"skull-bash":{"name":"Capocciata","type":"normal","category":"physical","power":130,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa ritira la testa per aumentare la Difesa e poi attacca al turno successivo.","ailmentChance":100,"effectChance":100,"flags":["contact","protect"]},"spike-cannon":{"name":"Sparalance","type":"normal","category":"physical","power":20,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","minHits":2,"maxHits":5,"flags":["protect"]},"constrict":{"name":"Limitazione","type":"normal","category":"physical","power":10,"accuracy":100,"pp":35,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","statChance":10,"effectChance":10,"statChanges":[["speed",-1]],"flags":["contact","protect"]},"amnesia":{"name":"Amnesia","type":"psychic","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Chi la usa svuota per un po\u2019 la mente per dimenticare i problemi. La Difesa Speciale aumenta di molto.","statChanges":[["special-defense",2]]},"kinesis":{"name":"Cin\u00e8si","type":"psychic","category":"status","power":0,"accuracy":80,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa distrae il bersaglio piegando un cucchiaio e ne riduce la precisione.","statChanges":[["accuracy",-1]],"flags":["protect"]},"soft-boiled":{"name":"Covauova","type":"normal","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"user","desc":"Chi la usa recupera met\u00e0 dei propri PS massimi.","healing":50,"flags":["heal"]},"high-jump-kick":{"name":"Calcinvolo","type":"fighting","category":"physical","power":130,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa colpisce il bersaglio con una ginocchiata in volo. Se fallisce, subisce danni.","flags":["contact","protect"]},"glare":{"name":"Sguardo Feroce","type":"normal","category":"status","power":0,"accuracy":100,"pp":30,"priority":0,"target":"selected-pokemon","desc":"Chi la usa spaventa il bersaglio con uno sguardo terrificante e ne causa la paralisi.","ailment":"paralysis","flags":["protect"]},"dream-eater":{"name":"Mangiasogni","type":"psychic","category":"special","power":100,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Attacco che funziona solo su un bersaglio che dorme. Chi lo usa riceve met\u00e0 dei PS persi dal Pok\u00e9mon colpito.","drain":50,"flags":["heal","protect"]},"poison-gas":{"name":"Velenogas","type":"poison","category":"status","power":0,"accuracy":90,"pp":40,"priority":0,"target":"all-opponents","desc":"Spruzza in faccia ai nemici che ha intorno una nuvola di gas tossico che avvelena.","ailment":"poison","flags":["protect"]},"barrage":{"name":"Attacco Pioggia","type":"normal","category":"physical","power":15,"accuracy":85,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","minHits":2,"maxHits":5,"flags":["protect"]},"leech-life":{"name":"Sanguisuga","type":"bug","category":"physical","power":80,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Mossa succhiasangue. Chi la usa recupera una quantit\u00e0 di PS pari alla met\u00e0 del danno inferto.","drain":50,"flags":["contact","heal","protect"]},"lovely-kiss":{"name":"Demonbacio","type":"normal","category":"status","power":0,"accuracy":75,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa intimidisce il bersaglio con una faccia paurosa e gli schiocca un bacio che lo fa addormentare.","ailment":"sleep","flags":["protect"]},"sky-attack":{"name":"Aeroattacco","type":"flying","category":"physical","power":140,"accuracy":90,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Attacco in due turni e probabile brutto colpo. Pu\u00f2 anche far tentennare il bersaglio.","critRate":1,"flinchChance":30,"effectChance":30,"flags":["protect"]},"transform":{"name":"Trasformazione","type":"normal","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa si trasforma in una copia esatta del bersaglio per sfruttarne le mosse."},"bubble":{"name":"Bolla","type":"water","category":"special","power":40,"accuracy":100,"pp":30,"priority":0,"target":"all-opponents","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","statChance":10,"effectChance":10,"statChanges":[["speed",-1]],"flags":["protect"]},"dizzy-punch":{"name":"Stordipugno","type":"normal","category":"physical","power":70,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","ailment":"confusion","ailmentChance":20,"effectChance":20,"flags":["contact","protect","punch"]},"spore":{"name":"Spora","type":"grass","category":"status","power":0,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Nube di spore che fa sempre addormentare il bersaglio.","ailment":"sleep","flags":["powder","protect"]},"psywave":{"name":"Psiconda","type":"psychic","category":"special","power":0,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["protect"]},"splash":{"name":"Splash","type":"normal","category":"status","power":0,"accuracy":null,"pp":40,"priority":0,"target":"user","desc":"Chi la usa sguazza nell\u2019acqua, senza ottenere alcun effetto."},"acid-armor":{"name":"Scudo Acido","type":"poison","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Chi la usa altera la sua struttura cellulare passando allo stato liquido. La Difesa sale di molto.","statChanges":[["defense",2]]},"crabhammer":{"name":"Martellata","type":"water","category":"physical","power":100,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Danneggia il bersaglio servendosi di una grande tenaglia. Probabile brutto colpo.","critRate":1,"flags":["contact","protect"]},"explosion":{"name":"Esplosione","type":"normal","category":"physical","power":250,"accuracy":100,"pp":5,"priority":0,"target":"all-other-pokemon","desc":"Chi la usa esplode per infliggere danni agli altri Pok\u00e9mon attorno, ma va KO.","flags":["protect"]},"fury-swipes":{"name":"Sfuriate","type":"normal","category":"physical","power":18,"accuracy":80,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.","minHits":2,"maxHits":5,"flags":["contact","protect"]},"bonemerang":{"name":"Ossomerang","type":"ground","category":"physical","power":50,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa lancia l\u2019osso che ha con s\u00e9. L\u2019osso colpisce due volte e ritorna come un vero e proprio boomerang.","minHits":2,"maxHits":2,"flags":["protect"]},"rest":{"name":"Riposo","type":"psychic","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"user","desc":"Chi la usa recupera tutti i PS e guarisce da tutti i suoi problemi di stato, ma dorme per due turni.","flags":["heal"]},"rock-slide":{"name":"Frana","type":"rock","category":"physical","power":75,"accuracy":90,"pp":10,"priority":0,"target":"all-opponents","desc":"I nemici vengono colpiti con violenza da grandi massi che possono anche farli tentennare.","flinchChance":30,"effectChance":30,"flags":["protect"]},"hyper-fang":{"name":"Iperzanna","type":"normal","category":"physical","power":80,"accuracy":90,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa morde il bersaglio con i suoi incisivi affilati. Pu\u00f2 anche farlo tentennare.","flinchChance":10,"effectChance":10,"flags":["bite","contact","protect"]},"sharpen":{"name":"Affilatore","type":"normal","category":"status","power":0,"accuracy":null,"pp":30,"priority":0,"target":"user","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","statChanges":[["attack",1]]},"conversion":{"name":"Conversione","type":"normal","category":"status","power":0,"accuracy":null,"pp":30,"priority":0,"target":"user","desc":"Il tipo di chi la usa muta in quello della prima mossa nella lista delle sue mosse."},"tri-attack":{"name":"Tripletta","type":"normal","category":"special","power":80,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con tre raggi di luce che possono paralizzarlo, scottarlo o congelarlo.","ailment":"unknown","ailmentChance":20,"effectChance":20,"flags":["protect"]},"super-fang":{"name":"Superzanna","type":"normal","category":"physical","power":0,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa salta sul bersaglio azzannandolo con i suoi incisivi affilati e facendogli perdere met\u00e0 dei PS.","flags":["contact","protect"]},"slash":{"name":"Lacerazione","type":"normal","category":"physical","power":70,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Attacca il bersaglio con artigli, falci o altro. Probabile brutto colpo.","critRate":1,"flags":["contact","protect"]},"substitute":{"name":"Sostituto","type":"normal","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"user","desc":"Chi la usa crea una copia di se stesso usando alcuni PS. La copia serve come esca per il nemico."},"struggle":{"name":"Scontro","type":"normal","category":"physical","power":50,"accuracy":null,"pp":1,"priority":0,"target":"random-opponent","desc":"Mossa da usare solo in caso estremo, quando non si hanno pi\u00f9 PP. Danneggia anche chi la usa.","healing":-25,"flags":["contact","protect"]},"mind-reader":{"name":"Leggimente","type":"normal","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa prevede i movimenti del bersaglio per mandare a segno l\u2019attacco successivo.","flags":["protect"]},"nightmare":{"name":"Incubo","type":"ghost","category":"status","power":0,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","ailment":"nightmare","flags":["protect"]},"flame-wheel":{"name":"Ruotafuoco","type":"fire","category":"physical","power":60,"accuracy":100,"pp":25,"priority":0,"target":"selected-pokemon","desc":"Chi la usa si copre di fuoco e carica il bersaglio. Pu\u00f2 anche scottarlo.","ailment":"burn","ailmentChance":10,"effectChance":10,"flags":["contact","protect"]},"snore":{"name":"Russare","type":"normal","category":"special","power":50,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Mossa che pu\u00f2 essere usata solo mentre si dorme. Il chiasso assordante pu\u00f2 anche far tentennare il bersaglio.","flinchChance":30,"effectChance":30,"flags":["protect","sound"]},"curse":{"name":"Maledizione","type":"ghost","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"specific-move","desc":"Una mossa che agisce in modo diverso se chi la usa \u00e8 di tipo Spettro."},"flail":{"name":"Flagello","type":"normal","category":"physical","power":0,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa si dimena per attaccare. \u00c8 pi\u00f9 efficace se i suoi PS sono bassi.","flags":["contact","protect"]},"conversion-2":{"name":"Conversione2","type":"normal","category":"status","power":0,"accuracy":null,"pp":30,"priority":0,"target":"selected-pokemon","desc":"Chi la usa cambia tipo per rendersi resistente al tipo dell\u2019ultima mossa usata dal bersaglio."},"reversal":{"name":"Contropiede","type":"fighting","category":"physical","power":0,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca con tutte le sue forze. Pi\u00f9 i PS sono bassi, maggiore \u00e8 la potenza di questa mossa.","flags":["contact","protect"]},"spite":{"name":"Dispetto","type":"ghost","category":"status","power":0,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa sfoga la propria rabbia sull\u2019ultima mossa usata dal bersaglio e le sottrae quattro PP.","flags":["protect"]},"powder-snow":{"name":"Polneve","type":"ice","category":"special","power":40,"accuracy":100,"pp":25,"priority":0,"target":"all-opponents","desc":"Attacca i nemici che ha intorno con una raffica di neve farinosa e pu\u00f2 anche congelarli.","ailment":"freeze","ailmentChance":10,"effectChance":10,"flags":["protect"]},"protect":{"name":"Protezione","type":"normal","category":"status","power":0,"accuracy":null,"pp":10,"priority":4,"target":"user","desc":"Permette di eludere tutti gli attacchi. Se usata in successione pu\u00f2 fallire.","ailment":"protect"},"mach-punch":{"name":"Pugnorapido","type":"fighting","category":"physical","power":40,"accuracy":100,"pp":30,"priority":1,"target":"selected-pokemon","desc":"Chi la usa tira un pugno a una velocit\u00e0 impressionante. Questa mossa ha priorit\u00e0 alta.","flags":["contact","protect","punch"]},"scary-face":{"name":"Visotruce","type":"normal","category":"status","power":0,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa spaventa il bersaglio con una faccia terribile e ne riduce di molto la Velocit\u00e0.","statChanges":[["speed",-2]],"flags":["protect"]},"feint-attack":{"name":"Finta","type":"dark","category":"physical","power":60,"accuracy":null,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["contact","protect"]},"belly-drum":{"name":"Panciamburo","type":"normal","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"user","desc":"Chi la usa massimizza l\u2019Attacco in cambio di met\u00e0 dei PS massimi."},"sludge-bomb":{"name":"Fangobomba","type":"poison","category":"special","power":90,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa lancia fango malsano sul bersaglio. Pu\u00f2 anche avvelenarlo.","ailment":"poison","ailmentChance":30,"effectChance":30,"flags":["protect"]},"mud-slap":{"name":"Fangosberla","type":"ground","category":"special","power":20,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa butta fango in faccia al bersaglio per arrecargli danni e ridurne la precisione.","statChance":100,"effectChance":100,"statChanges":[["accuracy",-1]],"flags":["protect"]},"spikes":{"name":"Punte","type":"ground","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"opponents-field","desc":"Chi la usa piazza sul terreno una trappola di punte che danneggia i nemici quando scendono in campo."},"zap-cannon":{"name":"Falcecannone","type":"electric","category":"special","power":120,"accuracy":50,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa scaglia una sfera elettrica che infligge danni e paralizza il bersaglio.","ailment":"paralysis","ailmentChance":100,"effectChance":100,"flags":["protect"]},"foresight":{"name":"Preveggenza","type":"normal","category":"status","power":0,"accuracy":null,"pp":40,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","ailment":"no-type-immunity","flags":["protect"]},"destiny-bond":{"name":"Destinobbligato","type":"ghost","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"user","desc":"Se chi la usa va KO a causa di un attacco, chi ha sferrato il colpo da KO fa la stessa fine. Se usata in successione fallisce."},"perish-song":{"name":"Ultimocanto","type":"normal","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"all-pokemon","desc":"Qualunque Pok\u00e9mon che senta questo canto va KO in tre turni, se non lo si sostituisce.","ailment":"perish-song","flags":["sound"]},"icy-wind":{"name":"Ventogelato","type":"ice","category":"special","power":55,"accuracy":95,"pp":15,"priority":0,"target":"all-opponents","desc":"Chi la usa attacca i nemici intorno con una folata di aria gelida e ne riduce anche la Velocit\u00e0.","statChance":100,"effectChance":100,"statChanges":[["speed",-1]],"flags":["protect"]},"detect":{"name":"Individua","type":"fighting","category":"status","power":0,"accuracy":null,"pp":5,"priority":4,"target":"user","desc":"Permette di eludere tutti gli attacchi. Se usata in successione pu\u00f2 fallire.","ailment":"protect"},"bone-rush":{"name":"Ossoraffica","type":"ground","category":"physical","power":25,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa colpisce il bersaglio con un osso da due a cinque volte di fila.","minHits":2,"maxHits":5,"flags":["protect"]},"lock-on":{"name":"Localizza","type":"normal","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa punta il bersaglio con precisione. La mossa successiva andr\u00e0 a segno.","flags":["protect"]},"outrage":{"name":"Oltraggio","type":"dragon","category":"physical","power":120,"accuracy":100,"pp":10,"priority":0,"target":"random-opponent","desc":"Chi la usa sfoga la sua ira e attacca il nemico per due o tre turni prima di essere lasciato in preda alla confusione.","flags":["contact","protect"]},"sandstorm":{"name":"Terrempesta","type":"rock","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"entire-field","desc":"Causa una tempesta di sabbia per cinque turni che danneggia tutti i tipi esclusi Terra, Roccia e Acciaio. Aumenta la Dif. Speciale dei Pok\u00e9mon di tipo Roccia."},"giga-drain":{"name":"Gigassorbimento","type":"grass","category":"special","power":75,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Mossa che assorbe PS. Chi la usa recupera una quantit\u00e0 di PS pari alla met\u00e0 del danno inferto.","drain":50,"flags":["heal","protect"]},"endure":{"name":"Resistenza","type":"normal","category":"status","power":0,"accuracy":null,"pp":10,"priority":4,"target":"user","desc":"Chi la usa resta con un PS anche se subisce un colpo da KO in quel turno. Usata in successione pu\u00f2 fallire."},"charm":{"name":"Fascino","type":"fairy","category":"status","power":0,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Ammalia il bersaglio con lo sguardo per renderlo meno cauto. Ne riduce molto l\u2019Attacco.","statChanges":[["attack",-2]],"flags":["protect"]},"rollout":{"name":"Rotolamento","type":"rock","category":"physical","power":30,"accuracy":90,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa colpisce il bersaglio rotolando per cinque turni, con aumento progressivo della potenza ogni volta che va a segno.","flags":["contact","protect"]},"false-swipe":{"name":"Falsofinale","type":"normal","category":"physical","power":40,"accuracy":100,"pp":40,"priority":0,"target":"selected-pokemon","desc":"Chi la usa trattiene il colpo per impedire al bersaglio di andare KO, lasciandolo con almeno un PS.","flags":["contact","protect"]},"swagger":{"name":"Bullo","type":"normal","category":"status","power":0,"accuracy":85,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa provoca il bersaglio e lo confonde, facendo aumentare per\u00f2 di molto il suo Attacco.","ailment":"confusion","statChanges":[["attack",2]],"flags":["protect"]},"spark":{"name":"Scintilla","type":"electric","category":"physical","power":65,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con una scarica elettrica e pu\u00f2 anche paralizzarlo.","ailment":"paralysis","ailmentChance":30,"effectChance":30,"flags":["contact","protect"]},"fury-cutter":{"name":"Tagliofuria","type":"bug","category":"physical","power":40,"accuracy":95,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con falci o artigli. Se usata in successione aumenta di potenza ogni volta che va a segno.","flags":["contact","protect"]},"mean-look":{"name":"Malosguardo","type":"normal","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa blocca il bersaglio con uno sguardo oscuro e ammaliante, impedendogli la fuga."},"sleep-talk":{"name":"Sonnolalia","type":"normal","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"user","desc":"Chi la usa sferra a caso una delle proprie mosse mentre sta dormendo."},"safeguard":{"name":"Salvaguardia","type":"normal","category":"status","power":0,"accuracy":null,"pp":25,"priority":0,"target":"users-field","desc":"Chi la usa crea un campo protettivo che evita problemi di stato per s\u00e9 e gli alleati per cinque turni."},"magnitude":{"name":"Magnitudo","type":"ground","category":"physical","power":0,"accuracy":100,"pp":30,"priority":0,"target":"all-other-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["protect"]},"dynamic-punch":{"name":"Dinamipugno","type":"fighting","category":"physical","power":100,"accuracy":50,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con un pugno davvero forte. Se va a segno, lo confonde.","ailment":"confusion","ailmentChance":100,"effectChance":100,"flags":["contact","protect","punch"]},"megahorn":{"name":"Megacorno","type":"bug","category":"physical","power":120,"accuracy":85,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa utilizza il suo robusto e imponente corno per colpire il bersaglio con tutto se stesso.","flags":["contact","protect"]},"dragon-breath":{"name":"Dragospiro","type":"dragon","category":"special","power":60,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Investe il bersaglio con una raffica potentissima che arreca danni. Pu\u00f2 anche paralizzarlo.","ailment":"paralysis","ailmentChance":30,"effectChance":30,"flags":["protect"]},"baton-pass":{"name":"Staffetta","type":"normal","category":"status","power":0,"accuracy":null,"pp":40,"priority":0,"target":"user","desc":"Chi la usa \u00e8 sostituito da un Pok\u00e9mon della squadra, che eredita anche ogni modifica alle statistiche."},"encore":{"name":"Ripeti","type":"normal","category":"status","power":0,"accuracy":100,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa obbliga il bersaglio a ripetere per tre turni l\u2019ultima mossa eseguita.","flags":["protect"]},"pursuit":{"name":"Inseguimento","type":"dark","category":"physical","power":40,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["contact","protect"]},"rapid-spin":{"name":"Rapigiro","type":"normal","category":"physical","power":50,"accuracy":100,"pp":40,"priority":0,"target":"selected-pokemon","desc":"Attacco rotante che elimina gli effetti di mosse come Legatutto, Avvolgibotta e Parassiseme. Aumenta anche la Velocit\u00e0 di chi la usa.","statChance":100,"effectChance":100,"statChanges":[["speed",1]],"flags":["contact","protect"]},"sweet-scent":{"name":"Profumino","type":"normal","category":"status","power":0,"accuracy":100,"pp":20,"priority":0,"target":"all-opponents","desc":"Un dolce profumo che riduce di molto l\u2019elusione dei nemici intorno a chi la usa.","statChanges":[["evasion",-2]],"flags":["protect"]},"iron-tail":{"name":"Codacciaio","type":"steel","category":"physical","power":100,"accuracy":75,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio viene colpito da una robusta coda d\u2019acciaio. Pu\u00f2 anche ridurne la Difesa.","statChance":30,"effectChance":30,"statChanges":[["defense",-1]],"flags":["contact","protect"]},"metal-claw":{"name":"Ferrartigli","type":"steel","category":"physical","power":50,"accuracy":95,"pp":35,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con artigli d\u2019acciaio. Pu\u00f2 anche aumentare l\u2019Attacco di chi la usa.","statChance":10,"effectChance":10,"statChanges":[["attack",1]],"flags":["contact","protect"]},"vital-throw":{"name":"Vitaltiro","type":"fighting","category":"physical","power":70,"accuracy":null,"pp":10,"priority":-1,"target":"selected-pokemon","desc":"Chi la usa attacca per ultimo, ma il colpo \u00e8 sempre infallibile.","flags":["contact","protect"]},"synthesis":{"name":"Sintesi","type":"grass","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"user","desc":"Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche.","healing":50,"flags":["heal"]},"moonlight":{"name":"Lucelunare","type":"fairy","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"user","desc":"Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche.","healing":50,"flags":["heal"]},"cross-chop":{"name":"Incrocolpo","type":"fighting","category":"physical","power":100,"accuracy":80,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Investe il bersaglio con un colpo sferrato con entrambe le braccia incrociate. Probabile brutto colpo.","critRate":1,"flags":["contact","protect"]},"twister":{"name":"Tornado","type":"dragon","category":"special","power":40,"accuracy":100,"pp":20,"priority":0,"target":"all-opponents","desc":"Un potente tornado si abbatte sui nemici nei paraggi. Pu\u00f2 anche farli tentennare.","flinchChance":20,"effectChance":20,"flags":["protect"]},"rain-dance":{"name":"Pioggiadanza","type":"water","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"entire-field","desc":"Chi la usa provoca una forte pioggia per cinque turni, potenziando le mosse di tipo Acqua e riducendo la potenza di quelle di tipo Fuoco."},"sunny-day":{"name":"Giornodisole","type":"fire","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"entire-field","desc":"Chi la usa intensifica i raggi solari per cinque turni, potenziando le mosse di tipo Fuoco e riducendo la potenza di quelle di tipo Acqua."},"crunch":{"name":"Sgranocchio","type":"dark","category":"physical","power":80,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio viene morso con denti affilati. Pu\u00f2 anche ridurne la Difesa.","statChance":20,"effectChance":20,"statChanges":[["defense",-1]],"flags":["bite","contact","protect"]},"mirror-coat":{"name":"Specchiovelo","type":"psychic","category":"special","power":0,"accuracy":100,"pp":20,"priority":-5,"target":"specific-move","desc":"Mossa che replica ogni attacco speciale, arrecando il doppio del danno ricevuto.","flags":["protect"]},"psych-up":{"name":"Psicamis\u00f9","type":"normal","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa s\u2019ipnotizza per copiare ogni modifica alle statistiche del bersaglio."},"extreme-speed":{"name":"Extrarapido","type":"normal","category":"physical","power":80,"accuracy":100,"pp":5,"priority":2,"target":"selected-pokemon","desc":"Chi la usa carica il bersaglio a una velocit\u00e0 impressionante. Questa mossa ha priorit\u00e0 alta.","flags":["contact","protect"]},"ancient-power":{"name":"Forzantica","type":"rock","category":"special","power":60,"accuracy":100,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con una forza primordiale. Pu\u00f2 aumentare tutte le statistiche.","statChance":10,"effectChance":10,"statChanges":[["attack",1],["defense",1],["special-attack",1],["special-defense",1],["speed",1]],"flags":["protect"]},"shadow-ball":{"name":"Palla Ombra","type":"ghost","category":"special","power":80,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Lancia sul bersaglio una sfera nera. Pu\u00f2 anche ridurne la Difesa Speciale.","statChance":20,"effectChance":20,"statChanges":[["special-defense",-1]],"flags":["protect"]},"future-sight":{"name":"Divinazione","type":"psychic","category":"special","power":120,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Due turni dopo l\u2019utilizzo di questa mossa, il bersaglio viene attaccato con energia psichica."},"whirlpool":{"name":"Mulinello","type":"water","category":"special","power":35,"accuracy":85,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Intrappola il bersaglio in un turbine d\u2019acqua per quattro o cinque turni infliggendo danni a ogni turno.","ailment":"trap","ailmentChance":100,"effectChance":100,"flags":["protect"]},"fake-out":{"name":"Bruciapelo","type":"normal","category":"physical","power":40,"accuracy":100,"pp":10,"priority":3,"target":"selected-pokemon","desc":"Mossa ad alta priorit\u00e0 che fa tentennare il bersaglio. Funziona solo appena scesi in campo.","flinchChance":100,"effectChance":100,"flags":["contact","protect"]},"uproar":{"name":"Baraonda","type":"normal","category":"special","power":90,"accuracy":100,"pp":10,"priority":0,"target":"random-opponent","desc":"Chi la usa attacca per tre turni con un frastuono che non fa dormire nessuno.","flags":["protect","sound"]},"stockpile":{"name":"Accumulo","type":"normal","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Chi la usa accumula energia aumentando la Difesa e la Difesa Speciale. Si pu\u00f2 utilizzare tre volte.","statChanges":[["defense",1],["special-defense",1]]},"spit-up":{"name":"Sfoghenergia","type":"normal","category":"special","power":0,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Tutta l\u2019energia accumulata in precedenza con Accumulo \u00e8 rilasciata nell\u2019attacco. Maggiore \u00e8 l\u2019energia, pi\u00f9 danni si arrecano.","flags":["protect"]},"swallow":{"name":"Introenergia","type":"normal","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"user","desc":"Chi la usa assorbe l\u2019energia raccolta con la mossa Accumulo e recupera PS. Maggiore \u00e8 l\u2019energia, pi\u00f9 PS si recuperano.","healing":25,"flags":["heal"]},"heat-wave":{"name":"Ondacalda","type":"fire","category":"special","power":95,"accuracy":90,"pp":10,"priority":0,"target":"all-opponents","desc":"Chi la usa investe i nemici che ha intorno con una folata di vento caldo. Pu\u00f2 anche scottarli.","ailment":"burn","ailmentChance":10,"effectChance":10,"flags":["protect"]},"hail":{"name":"Grandine","type":"ice","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"entire-field","desc":"Chi la usa causa una grandinata che dura cinque turni. Danneggia tutti i Pok\u00e9mon tranne quelli di tipo Ghiaccio."},"flatter":{"name":"Adulazione","type":"dark","category":"status","power":0,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Adula il bersaglio e lo confonde, ma ne aumenta l\u2019Attacco Speciale.","ailment":"confusion","statChanges":[["special-attack",1]],"flags":["protect"]},"will-o-wisp":{"name":"Fuocofatuo","type":"fire","category":"status","power":0,"accuracy":85,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Fiamme sinistre e misteriose causano una scottatura al bersaglio.","ailment":"burn","flags":["protect"]},"memento":{"name":"Memento","type":"dark","category":"status","power":0,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa va KO. Tuttavia, riduce di molto l\u2019Attacco e l\u2019Attacco Speciale del bersaglio.","statChanges":[["attack",-2],["special-attack",-2]],"flags":["protect"]},"focus-punch":{"name":"Centripugno","type":"fighting","category":"physical","power":150,"accuracy":100,"pp":20,"priority":-3,"target":"selected-pokemon","desc":"Chi la usa prende la mira prima di sferrare un pugno. Fallir\u00e0 se verr\u00e0 colpito prima di eseguire la mossa.","flags":["contact","protect","punch"]},"follow-me":{"name":"Sonoqui","type":"normal","category":"status","power":0,"accuracy":null,"pp":20,"priority":2,"target":"user","desc":"Chi la usa attira l\u2019attenzione su di s\u00e9, costringendo i nemici a sceglierlo sempre come bersaglio."},"charge":{"name":"Sottocarica","type":"electric","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.","statChanges":[["special-defense",1]]},"taunt":{"name":"Provocazione","type":"dark","category":"status","power":0,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Provoca il bersaglio inducendolo a usare solo mosse d\u2019attacco per tre turni.","flags":["protect"]},"helping-hand":{"name":"Altruismo","type":"normal","category":"status","power":0,"accuracy":null,"pp":20,"priority":5,"target":"ally","desc":"Mossa che aumenta la potenza dell\u2019attacco di un alleato."},"trick":{"name":"Raggiro","type":"psychic","category":"status","power":0,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa coglie il bersaglio in contropiede e lo obbliga a cambiare il suo strumento con il proprio.","flags":["protect"]},"role-play":{"name":"Giocodiruolo","type":"psychic","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa mima in tutto il bersaglio, copiandone l\u2019abilit\u00e0."},"ingrain":{"name":"Radicamento","type":"grass","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Chi la usa mette delle radici che gli fanno recuperare PS a ogni turno. Non pu\u00f2 essere sostituito.","ailment":"ingrain"},"superpower":{"name":"Troppoforte","type":"fighting","category":"physical","power":120,"accuracy":100,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca il bersaglio con grande forza, ma il suo Attacco e la sua Difesa diminuiscono.","statChance":100,"effectChance":100,"statChanges":[["attack",-1],["defense",-1]],"flags":["contact","protect"]},"magic-coat":{"name":"Magivelo","type":"psychic","category":"status","power":0,"accuracy":null,"pp":15,"priority":4,"target":"user","desc":"Una barriera rimanda al mittente l\u2019effetto di mosse come Parassiseme e di mosse che influenzano lo stato."},"recycle":{"name":"Riciclo","type":"normal","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"user","desc":"Chi la usa ricicla uno strumento che ha usato nella lotta e pu\u00f2 riutilizzarlo."},"revenge":{"name":"Vendetta","type":"fighting","category":"physical","power":60,"accuracy":100,"pp":10,"priority":-4,"target":"selected-pokemon","desc":"Mossa d\u2019attacco che infligge un danno doppio se si \u00e8 stati colpiti dal Pok\u00e9mon bersaglio nello stesso turno.","flags":["contact","protect"]},"brick-break":{"name":"Breccia","type":"fighting","category":"physical","power":75,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con una mano e rompe barriere come Riflesso e Schermoluce.","flags":["contact","protect"]},"yawn":{"name":"Sbadiglio","type":"normal","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.","ailment":"yawn","flags":["protect"]},"knock-off":{"name":"Privazione","type":"dark","category":"physical","power":65,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Attacco che fa cadere lo strumento del bersaglio, impedendone l\u2019uso nella lotta. La sua potenza aumenta se il Pok\u00e9mon colpito ha uno strumento.","flags":["contact","protect"]},"endeavor":{"name":"Rimonta","type":"normal","category":"physical","power":0,"accuracy":100,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Attacco che riduce i PS del bersaglio a una quantit\u00e0 pari ai PS di chi lo usa.","flags":["contact","protect"]},"imprison":{"name":"Esclusiva","type":"psychic","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"user","desc":"Chi la usa impedisce al nemico di usare mosse che conoscono entrambi."},"refresh":{"name":"Rinfrescata","type":"normal","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata."},"grudge":{"name":"Rancore","type":"ghost","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"user","desc":"Se chi la usa va KO, i PP della mossa nemica che lo ha messo fuori gioco si azzerano."},"dive":{"name":"Sub","type":"water","category":"physical","power":80,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa si tuffa in acqua per emergere e attaccare al turno successivo.","flags":["contact","protect"]},"camouflage":{"name":"Camuffamento","type":"normal","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata."},"feather-dance":{"name":"Danzadipiume","type":"flying","category":"status","power":0,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa circonda il bersaglio con un turbinio di piume riducendo di molto il suo Attacco.","statChanges":[["attack",-2]],"flags":["protect"]},"blaze-kick":{"name":"Calciardente","type":"fire","category":"physical","power":85,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa tira un calcio. Probabile brutto colpo. Pu\u00f2 anche scottare il bersaglio.","ailment":"burn","ailmentChance":10,"critRate":1,"effectChance":10,"flags":["contact","protect"]},"mud-sport":{"name":"Fangata","type":"ground","category":"status","power":0,"accuracy":null,"pp":15,"priority":0,"target":"entire-field","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata."},"slack-off":{"name":"Pigro","type":"normal","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"user","desc":"Chi la usa si rilassa recuperando met\u00e0 dei propri PS massimi.","healing":50,"flags":["heal"]},"hyper-voice":{"name":"Granvoce","type":"normal","category":"special","power":90,"accuracy":100,"pp":10,"priority":0,"target":"all-opponents","desc":"Chi la usa lancia un urlo straziante che danneggia i nemici intorno a s\u00e9.","flags":["protect","sound"]},"poison-fang":{"name":"Velenodenti","type":"poison","category":"physical","power":50,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa morde il bersaglio con denti avvelenati che possono anche iperavvelenarlo.","ailment":"poison","ailmentChance":50,"effectChance":50,"flags":["bite","contact","protect"]},"crush-claw":{"name":"Tritartigli","type":"normal","category":"physical","power":75,"accuracy":95,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con artigli robusti e affilati che possono ridurne la Difesa.","statChance":50,"effectChance":50,"statChanges":[["defense",-1]],"flags":["contact","protect"]},"meteor-mash":{"name":"Meteorpugno","type":"steel","category":"physical","power":90,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con un pugno veloce come una meteora. Pu\u00f2 far salire l\u2019Attacco di chi la usa.","statChance":20,"effectChance":20,"statChanges":[["attack",1]],"flags":["contact","protect","punch"]},"astonish":{"name":"Sgomento","type":"ghost","category":"physical","power":30,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca il bersaglio emettendo un verso terrificante. Pu\u00f2 anche farlo tentennare.","flinchChance":30,"effectChance":30,"flags":["contact","protect"]},"aromatherapy":{"name":"Aromaterapia","type":"grass","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"user-and-allies","desc":"Chi la usa rilascia un dolce profumo che cura tutti i problemi di stato propri e degli alleati."},"fake-tears":{"name":"Falselacrime","type":"dark","category":"status","power":0,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa inscena un pianto teatrale per commuovere il bersaglio. Ne riduce di molto la Difesa Speciale.","statChanges":[["special-defense",-2]],"flags":["protect"]},"air-cutter":{"name":"Aerasoio","type":"flying","category":"special","power":60,"accuracy":95,"pp":25,"priority":0,"target":"all-opponents","desc":"Chi la usa provoca un vento tagliente che sferza i nemici intorno. Probabile brutto colpo.","critRate":1,"flags":["protect"]},"odor-sleuth":{"name":"Segugio","type":"normal","category":"status","power":0,"accuracy":null,"pp":40,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","ailment":"no-type-immunity","flags":["protect"]},"rock-tomb":{"name":"Rocciotomba","type":"rock","category":"physical","power":60,"accuracy":95,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con rocce. Inoltre, lo rallenta riducendone la Velocit\u00e0.","statChance":100,"effectChance":100,"statChanges":[["speed",-1]],"flags":["protect"]},"silver-wind":{"name":"Ventargenteo","type":"bug","category":"special","power":60,"accuracy":100,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","statChance":10,"effectChance":10,"statChanges":[["attack",1],["defense",1],["special-attack",1],["special-defense",1],["speed",1]],"flags":["protect"]},"metal-sound":{"name":"Ferrostrido","type":"steel","category":"status","power":0,"accuracy":85,"pp":40,"priority":0,"target":"selected-pokemon","desc":"Orribile stridio, simile a quello prodotto dal metallo, che riduce di molto la Difesa Speciale del bersaglio.","statChanges":[["special-defense",-2]],"flags":["protect","sound"]},"tickle":{"name":"Solletico","type":"normal","category":"status","power":0,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa solletica il bersaglio e lo fa ridere, riducendo il suo Attacco e la sua Difesa.","statChanges":[["attack",-1],["defense",-1]],"flags":["protect"]},"cosmic-power":{"name":"Cosmoforza","type":"psychic","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Chi la usa assorbe una forza mistica dallo spazio che aumenta la Difesa e la Difesa Speciale.","statChanges":[["defense",1],["special-defense",1]]},"signal-beam":{"name":"Segnoraggio","type":"bug","category":"special","power":75,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","ailment":"confusion","ailmentChance":10,"effectChance":10,"flags":["protect"]},"shadow-punch":{"name":"Pugnodombra","type":"ghost","category":"physical","power":60,"accuracy":null,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio riceve un pugno proveniente dalle tenebre. Questa mossa \u00e8 infallibile.","flags":["contact","protect","punch"]},"extrasensory":{"name":"Extrasenso","type":"psychic","category":"special","power":80,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca con una misteriosa forza invisibile. Pu\u00f2 far tentennare il bersaglio.","flinchChance":10,"effectChance":10,"flags":["protect"]},"sky-uppercut":{"name":"Stramontante","type":"fighting","category":"physical","power":85,"accuracy":90,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["contact","protect","punch"]},"sand-tomb":{"name":"Sabbiotomba","type":"ground","category":"physical","power":35,"accuracy":85,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa intrappola il bersaglio in una tempesta di sabbia per quattro o cinque turni.","ailment":"trap","ailmentChance":100,"effectChance":100,"flags":["protect"]},"sheer-cold":{"name":"Purogelo","type":"ice","category":"special","power":0,"accuracy":30,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio esaurisce i PS in un colpo solo. Se viene usata da Pok\u00e9mon che non sono di tipo Ghiaccio, difficilmente va a segno.","flags":["protect"]},"muddy-water":{"name":"Fanghiglia","type":"water","category":"special","power":90,"accuracy":85,"pp":10,"priority":0,"target":"all-opponents","desc":"Chi la usa attacca i nemici che ha intorno con un getto di fango che pu\u00f2 anche ridurne la precisione.","statChance":30,"effectChance":30,"statChanges":[["accuracy",-1]],"flags":["protect"]},"bullet-seed":{"name":"Semitraglia","type":"grass","category":"physical","power":25,"accuracy":100,"pp":30,"priority":0,"target":"selected-pokemon","desc":"Chi la usa spara da due a cinque raffiche di semi contro il bersaglio in successione.","minHits":2,"maxHits":5,"flags":["protect"]},"aerial-ace":{"name":"Aeroassalto","type":"flying","category":"physical","power":60,"accuracy":null,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca il bersaglio a grande velocit\u00e0. Questa mossa \u00e8 infallibile.","flags":["contact","protect"]},"icicle-spear":{"name":"Gelolancia","type":"ice","category":"physical","power":25,"accuracy":100,"pp":30,"priority":0,"target":"selected-pokemon","desc":"Chi la usa spara ghiaccioli affilati contro il bersaglio da due a cinque volte di fila.","minHits":2,"maxHits":5,"flags":["protect"]},"iron-defense":{"name":"Ferroscudo","type":"steel","category":"status","power":0,"accuracy":null,"pp":15,"priority":0,"target":"user","desc":"Il corpo di chi la usa si indurisce come il ferro, facendone salire di molto la Difesa.","statChanges":[["defense",2]]},"block":{"name":"Blocco","type":"normal","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa sbarra la strada al bersaglio impedendone la fuga o la sostituzione."},"dragon-claw":{"name":"Dragartigli","type":"dragon","category":"physical","power":80,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca con artigli affilati che graffiano il bersaglio rapidamente e con grande forza.","flags":["contact","protect"]},"bulk-up":{"name":"Granfisico","type":"fighting","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Chi la usa tende i muscoli per gonfiare il corpo, aumentando Difesa e Attacco.","statChanges":[["attack",1],["defense",1]]},"bounce":{"name":"Rimbalzo","type":"flying","category":"physical","power":85,"accuracy":85,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa balza in alto e ricade sul bersaglio dopo un turno. Pu\u00f2 anche paralizzarlo.","ailment":"paralysis","ailmentChance":30,"effectChance":30,"flags":["contact","protect"]},"mud-shot":{"name":"Colpodifango","type":"ground","category":"special","power":55,"accuracy":95,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca lanciando fango sul bersaglio, riducendone anche la Velocit\u00e0.","statChance":100,"effectChance":100,"statChanges":[["speed",-1]],"flags":["protect"]},"covet":{"name":"Supplica","type":"normal","category":"physical","power":60,"accuracy":100,"pp":25,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca il bersaglio sorridendo e gli ruba lo strumento.","flags":["contact","protect"]},"magical-leaf":{"name":"Fogliamagica","type":"grass","category":"special","power":60,"accuracy":null,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa sparpaglia strane foglie che inseguono il bersaglio. Questa mossa \u00e8 infallibile.","flags":["protect"]},"water-sport":{"name":"Docciascudo","type":"water","category":"status","power":0,"accuracy":null,"pp":15,"priority":0,"target":"entire-field","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata."},"calm-mind":{"name":"Calmamente","type":"psychic","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Chi la usa placa il proprio spirito meditando per aumentare l\u2019Attacco Speciale e la Difesa Speciale.","statChanges":[["special-attack",1],["special-defense",1]]},"leaf-blade":{"name":"Fendifoglia","type":"grass","category":"physical","power":90,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio usando una foglia affilata come una spada. Probabile brutto colpo.","critRate":1,"flags":["contact","protect"]},"dragon-dance":{"name":"Dragodanza","type":"dragon","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Danza mistica e vigorosa che aumenta l\u2019Attacco e la Velocit\u00e0 di chi la usa.","statChanges":[["attack",1],["speed",1]]},"rock-blast":{"name":"Cadutamassi","type":"rock","category":"physical","power":25,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Colpisce il bersaglio con dei massi pesanti lanciati in rapida successione. Il numero di massi varia da due a cinque.","minHits":2,"maxHits":5,"flags":["protect"]},"shock-wave":{"name":"Ondashock","type":"electric","category":"special","power":60,"accuracy":null,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa colpisce il bersaglio con una scossa di elettricit\u00e0. \u00c8 impossibile eludere questa mossa.","flags":["protect"]},"water-pulse":{"name":"Idropulsar","type":"water","category":"special","power":60,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio viene colpito da un getto d\u2019acqua potentissimo che pu\u00f2 anche confonderlo.","ailment":"confusion","ailmentChance":20,"effectChance":20,"flags":["protect","pulse"]},"roost":{"name":"Trespolo","type":"flying","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"user","desc":"Chi la usa sta fermo e riposa, recuperando met\u00e0 dei propri PS massimi.","healing":50,"flags":["heal"]},"gravity":{"name":"Gravit\u00e0","type":"psychic","category":"status","power":0,"accuracy":null,"pp":5,"priority":0,"target":"entire-field","desc":"Per cinque turni rende vulnerabili alle mosse di tipo Terra i Pok\u00e9mon con Levitazione o di tipo Volante. Non \u00e8 possibile usare mosse che fanno volare."},"miracle-eye":{"name":"Miracolvista","type":"psychic","category":"status","power":0,"accuracy":null,"pp":40,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","ailment":"no-type-immunity","flags":["protect"]},"wake-up-slap":{"name":"Svegliopacca","type":"fighting","category":"physical","power":70,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["contact","protect"]},"hammer-arm":{"name":"Martelpugno","type":"fighting","category":"physical","power":100,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Infligge danni al bersaglio colpendolo con un pugno molto potente. Riduce la Velocit\u00e0 di chi la usa.","statChance":100,"effectChance":100,"statChanges":[["speed",-1]],"flags":["contact","protect","punch"]},"gyro-ball":{"name":"Vortexpalla","type":"steel","category":"physical","power":0,"accuracy":100,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa si scaglia sul bersaglio facendo ruotare vorticosamente il proprio corpo. Pi\u00f9 lento \u00e8 chi la usa, maggiore \u00e8 il danno.","flags":["contact","protect"]},"healing-wish":{"name":"Curardore","type":"psychic","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"user","desc":"Chi la usa va KO, ma il Pok\u00e9mon che lo sostituisce recupera tutti i PS e guarisce dai problemi di stato.","flags":["heal"]},"brine":{"name":"Acquadisale","type":"water","category":"special","power":65,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Se i PS del bersaglio sono scesi a met\u00e0 o meno, questa mossa colpir\u00e0 con il doppio della potenza.","flags":["protect"]},"natural-gift":{"name":"Dononaturale","type":"normal","category":"physical","power":0,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["protect"]},"feint":{"name":"Fintoattacco","type":"normal","category":"physical","power":30,"accuracy":100,"pp":10,"priority":2,"target":"selected-pokemon","desc":"Colpisce anche un bersaglio che ha usato mosse come Protezione e Individua, annullandone gli effetti."},"pluck":{"name":"Spennata","type":"flying","category":"physical","power":60,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa becca il bersaglio. Inoltre, se questi ha una bacca, gliela ruba e ne sfrutta gli effetti.","flags":["contact","protect"]},"tailwind":{"name":"Ventoincoda","type":"flying","category":"status","power":0,"accuracy":null,"pp":15,"priority":0,"target":"users-field","desc":"Chi la usa scatena un turbine che aumenta la Velocit\u00e0 di tutti i Pok\u00e9mon della squadra per quattro turni."},"acupressure":{"name":"Acupressione","type":"normal","category":"status","power":0,"accuracy":null,"pp":30,"priority":0,"target":"user-or-ally","desc":"Chi la usa esercita pressione su alcuni punti nevralgici e aumenta di molto una statistica a caso."},"close-combat":{"name":"Zuffa","type":"fighting","category":"physical","power":120,"accuracy":100,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca abbassando la guardia. La propria Difesa e la Difesa Speciale si riducono.","statChance":100,"effectChance":100,"statChanges":[["defense",-1],["special-defense",-1]],"flags":["contact","protect"]},"payback":{"name":"Rivincita","type":"dark","category":"physical","power":50,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa accumula forza, poi attacca. La potenza raddoppia se il Pok\u00e9mon agisce dopo il bersaglio.","flags":["contact","protect"]},"assurance":{"name":"Garanzia","type":"dark","category":"physical","power":60,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Se il bersaglio ha gi\u00e0 subito dei danni nello stesso turno, la potenza di questa mossa raddoppia.","flags":["contact","protect"]},"fling":{"name":"Lancio","type":"dark","category":"physical","power":0,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa lancia il suo strumento addosso al bersaglio. La forza e l\u2019effetto dipendono dallo strumento.","flags":["protect"]},"trump-card":{"name":"Asso","type":"normal","category":"special","power":0,"accuracy":null,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["contact","protect"]},"wring-out":{"name":"Strizzata","type":"normal","category":"special","power":0,"accuracy":100,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["contact","protect"]},"gastro-acid":{"name":"Gastroacido","type":"poison","category":"status","power":0,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa lancia acidi gastrici sul bersaglio. Il fluido annulla l\u2019abilit\u00e0 del Pok\u00e9mon colpito.","flags":["protect"]},"lucky-chant":{"name":"Fortuncanto","type":"normal","category":"status","power":0,"accuracy":null,"pp":30,"priority":0,"target":"users-field","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata."},"me-first":{"name":"Precedenza","type":"normal","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"selected-pokemon-me-first","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["protect"]},"copycat":{"name":"Copione","type":"normal","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Chi la usa mima l\u2019ultima mossa eseguita. Fallisce se non \u00e8 stata ancora usata alcuna mossa."},"power-swap":{"name":"Barattoforza","type":"psychic","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa sfrutta la sua forza psichica per scambiare le modifiche ad Attacco e Attacco Speciale con il bersaglio.","flags":["protect"]},"guard-swap":{"name":"Barattoscudo","type":"psychic","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa sfrutta la sua forza psichica per scambiare le modifiche a Difesa e Difesa Speciale con il bersaglio.","flags":["protect"]},"punishment":{"name":"Punizione","type":"dark","category":"physical","power":0,"accuracy":100,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["contact","protect"]},"last-resort":{"name":"Ultimascelta","type":"normal","category":"physical","power":140,"accuracy":100,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Per usare questa mossa, bisogna prima avvalersi in lotta di tutte le altre mosse conosciute.","flags":["contact","protect"]},"worry-seed":{"name":"Affannoseme","type":"grass","category":"status","power":0,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Un seme che causa ansia viene piantato sul bersaglio. Ne muta l\u2019abilit\u00e0 in Insonnia e ne previene o rimuove il sonno.","flags":["protect"]},"sucker-punch":{"name":"Sbigoattacco","type":"dark","category":"physical","power":70,"accuracy":100,"pp":5,"priority":1,"target":"selected-pokemon","desc":"Chi la usa attacca con alta priorit\u00e0, ma fallisce se il bersaglio non sta preparando un attacco.","flags":["contact","protect"]},"toxic-spikes":{"name":"Fielepunte","type":"poison","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"opponents-field","desc":"Chi la usa piazza una trappola di punte che avvelenano i nemici che scendono in campo."},"aqua-ring":{"name":"Acquanello","type":"water","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Chi la usa si avvolge in un velo d\u2019acqua. Recupera alcuni PS a ogni turno."},"magnet-rise":{"name":"Magnetascesa","type":"electric","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"user","desc":"Chi la usa si solleva in aria per cinque turni grazie a un campo elettromagnetico."},"flare-blitz":{"name":"Fuococarica","type":"fire","category":"physical","power":120,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa si ricopre di fuoco e carica il bersaglio, ma subisce il contraccolpo. Pu\u00f2 anche scottare il Pok\u00e9mon colpito.","ailment":"burn","ailmentChance":10,"drain":-33,"effectChance":10,"flags":["contact","protect"]},"aura-sphere":{"name":"Forzasfera","type":"fighting","category":"special","power":80,"accuracy":null,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa rilascia una forza eterea dal profondo del corpo. La mossa \u00e8 infallibile.","flags":["protect","pulse"]},"rock-polish":{"name":"Lucidatura","type":"rock","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Chi la usa leviga il proprio corpo per ridurne l\u2019attrito. Aumenta di molto la Velocit\u00e0.","statChanges":[["speed",2]]},"poison-jab":{"name":"Velenpuntura","type":"poison","category":"physical","power":80,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio \u00e8 colpito da un tentacolo o da un arto intriso di una sostanza tossica che pu\u00f2 anche avvelenarlo.","ailment":"poison","ailmentChance":30,"effectChance":30,"flags":["contact","protect"]},"dark-pulse":{"name":"Neropulsar","type":"dark","category":"special","power":80,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa emana un\u2019aura impregnata di oscuri pensieri. Pu\u00f2 anche far tentennare il Pok\u00e9mon colpito.","flinchChance":20,"effectChance":20,"flags":["protect","pulse"]},"night-slash":{"name":"Nottesferza","type":"dark","category":"physical","power":70,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa colpisce il bersaglio appena si presenta l\u2019occasione. Probabile brutto colpo.","critRate":1,"flags":["contact","protect"]},"aqua-tail":{"name":"Idrondata","type":"water","category":"physical","power":90,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca agitando la coda come se fosse una violenta ondata in una tempesta furiosa.","flags":["contact","protect"]},"seed-bomb":{"name":"Semebomba","type":"grass","category":"physical","power":80,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa emette una raffica di semi dal guscio duro che colpiscono il bersaglio dall\u2019alto.","flags":["protect"]},"air-slash":{"name":"Eterelama","type":"flying","category":"special","power":75,"accuracy":95,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca con un vento tagliente che squarcia il cielo. Pu\u00f2 anche far tentennare il Pok\u00e9mon colpito.","flinchChance":30,"effectChance":30,"flags":["protect"]},"x-scissor":{"name":"Forbice X","type":"bug","category":"physical","power":80,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa colpisce il bersaglio con un attacco che ricorda un colpo di forbici.","flags":["contact","protect"]},"bug-buzz":{"name":"Ronzio","type":"bug","category":"special","power":90,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa crea un\u2019onda sonora che infligge danni. Pu\u00f2 anche ridurre la Difesa Speciale del bersaglio.","statChance":10,"effectChance":10,"statChanges":[["special-defense",-1]],"flags":["protect","sound"]},"dragon-pulse":{"name":"Dragopulsar","type":"dragon","category":"special","power":85,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa spalanca la bocca e genera un\u2019onda d\u2019urto che colpisce il bersaglio.","flags":["protect","pulse"]},"dragon-rush":{"name":"Dragofuria","type":"dragon","category":"physical","power":100,"accuracy":75,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca con fare minaccioso e in questo modo pu\u00f2 anche far tentennare il bersaglio.","flinchChance":20,"effectChance":20,"flags":["contact","protect"]},"power-gem":{"name":"Gemmoforza","type":"rock","category":"special","power":80,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca con un raggio di luce che brilla come se fosse fatto di pietre preziose.","flags":["protect"]},"vacuum-wave":{"name":"Vuotonda","type":"fighting","category":"special","power":40,"accuracy":100,"pp":30,"priority":1,"target":"selected-pokemon","desc":"Chi la usa rotea i pugni per lanciare un\u2019onda di vuoto assoluto verso il bersaglio. Questa mossa ha priorit\u00e0 alta.","flags":["protect"]},"brave-bird":{"name":"Baldeali","type":"flying","category":"physical","power":120,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa ripiega le ali e carica da bassa quota. Tuttavia, subisce considerevoli danni.","drain":-33,"flags":["contact","protect"]},"earth-power":{"name":"Geoforza","type":"ground","category":"special","power":90,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Dal terreno sotto il bersaglio si sprigiona una forza devastante. Pu\u00f2 anche ridurne la Difesa Speciale.","statChance":10,"effectChance":10,"statChanges":[["special-defense",-1]],"flags":["protect"]},"switcheroo":{"name":"Rapidscambio","type":"dark","category":"status","power":0,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa scambia lo strumento che ha con quello del bersaglio a una velocit\u00e0 impressionante.","flags":["protect"]},"giga-impact":{"name":"Gigaimpatto","type":"normal","category":"physical","power":150,"accuracy":90,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa carica il bersaglio usando tutta la sua forza, ma al turno successivo deve riposarsi.","flags":["contact","protect"]},"nasty-plot":{"name":"Congiura","type":"dark","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Chi la usa stimola il cervello pensando a cose cattive. Aumenta di molto l\u2019Attacco Speciale.","statChanges":[["special-attack",2]]},"bullet-punch":{"name":"Pugnoscarica","type":"steel","category":"physical","power":40,"accuracy":100,"pp":30,"priority":1,"target":"selected-pokemon","desc":"Chi la usa attacca con una scarica di pugni veloci come proiettili. Questa mossa ha priorit\u00e0 alta.","flags":["contact","protect","punch"]},"avalanche":{"name":"Slavina","type":"ice","category":"physical","power":60,"accuracy":100,"pp":10,"priority":-4,"target":"selected-pokemon","desc":"Mossa d\u2019attacco che infligge doppi danni se chi la usa \u00e8 stato ferito dal Pok\u00e9mon bersaglio nello stesso turno.","flags":["contact","protect"]},"ice-shard":{"name":"Geloscheggia","type":"ice","category":"physical","power":40,"accuracy":100,"pp":30,"priority":1,"target":"selected-pokemon","desc":"Chi la usa crea dei pezzi di ghiaccio e li lancia. Questa mossa ha priorit\u00e0 alta.","flags":["protect"]},"shadow-claw":{"name":"Ombrartigli","type":"ghost","category":"physical","power":70,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca con artigli d\u2019ombra che colpiscono con gran forza. Probabile brutto colpo.","critRate":1,"flags":["contact","protect"]},"thunder-fang":{"name":"Fulmindenti","type":"electric","category":"physical","power":65,"accuracy":95,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa morde con denti elettrificati che possono anche paralizzare o far tentennare il bersaglio.","ailment":"paralysis","ailmentChance":10,"flinchChance":10,"effectChance":10,"flags":["bite","contact","protect"]},"ice-fang":{"name":"Gelodenti","type":"ice","category":"physical","power":65,"accuracy":95,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa morde con denti ghiacciati. Pu\u00f2 anche congelare o far tentennare il bersaglio.","ailment":"freeze","ailmentChance":10,"flinchChance":10,"effectChance":10,"flags":["bite","contact","protect"]},"fire-fang":{"name":"Rogodenti","type":"fire","category":"physical","power":65,"accuracy":95,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa morde con denti infuocati. Pu\u00f2 anche scottare o far tentennare il bersaglio.","ailment":"burn","ailmentChance":10,"flinchChance":10,"effectChance":10,"flags":["bite","contact","protect"]},"mud-bomb":{"name":"Pantanobomba","type":"ground","category":"special","power":65,"accuracy":85,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","statChance":30,"effectChance":30,"statChanges":[["accuracy",-1]],"flags":["protect"]},"psycho-cut":{"name":"Psicotaglio","type":"psychic","category":"physical","power":70,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa colpisce il bersaglio con lame fatte di forza psichica. Probabile brutto colpo.","critRate":1,"flags":["protect"]},"zen-headbutt":{"name":"Cozzata Zen","type":"psychic","category":"physical","power":80,"accuracy":90,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa concentra le energie psichiche nella testa e si lancia contro il bersaglio. Pu\u00f2 anche farlo tentennare.","flinchChance":20,"effectChance":20,"flags":["contact","protect"]},"mirror-shot":{"name":"Cristalcolpo","type":"steel","category":"special","power":65,"accuracy":85,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","statChance":30,"effectChance":30,"statChanges":[["accuracy",-1]],"flags":["protect"]},"flash-cannon":{"name":"Cannonflash","type":"steel","category":"special","power":80,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca raccogliendo e rilasciando energia luminosa. Pu\u00f2 ridurre la Difesa Speciale del bersaglio.","statChance":10,"effectChance":10,"statChanges":[["special-defense",-1]],"flags":["protect"]},"discharge":{"name":"Scarica","type":"electric","category":"special","power":80,"accuracy":100,"pp":15,"priority":0,"target":"all-other-pokemon","desc":"Chi la usa colpisce i Pok\u00e9mon che ha intorno con un bagliore elettrico. Pu\u00f2 anche paralizzarli.","ailment":"paralysis","ailmentChance":30,"effectChance":30,"flags":["protect"]},"lava-plume":{"name":"Lavasbuffo","type":"fire","category":"special","power":80,"accuracy":100,"pp":15,"priority":0,"target":"all-other-pokemon","desc":"Chi la usa lancia fiamme scarlatte su tutti i Pok\u00e9mon nelle vicinanze, danneggiandoli. Pu\u00f2 anche scottarli.","ailment":"burn","ailmentChance":30,"effectChance":30,"flags":["protect"]},"leaf-storm":{"name":"Verdebufera","type":"grass","category":"special","power":130,"accuracy":90,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Si forma una tempesta di foglie affilate. Il contraccolpo riduce di molto l\u2019Attacco Speciale di chi la usa.","statChance":100,"effectChance":100,"statChanges":[["special-attack",-2]],"flags":["protect"]},"power-whip":{"name":"Vigorcolpo","type":"grass","category":"physical","power":120,"accuracy":85,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa agita violentemente liane o tentacoli per sferzare il bersaglio.","flags":["contact","protect"]},"cross-poison":{"name":"Velenocroce","type":"poison","category":"physical","power":70,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Attacco con zanne avvelenate che pu\u00f2 anche avvelenare il Pok\u00e9mon colpito. Probabile brutto colpo.","ailment":"poison","ailmentChance":10,"critRate":1,"effectChance":10,"flags":["contact","protect"]},"gunk-shot":{"name":"Sporcolancio","type":"poison","category":"physical","power":120,"accuracy":80,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca il bersaglio con rifiuti sudici che possono anche avvelenarlo.","ailment":"poison","ailmentChance":30,"effectChance":30,"flags":["protect"]},"iron-head":{"name":"Metaltestata","type":"steel","category":"physical","power":80,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa colpisce il bersaglio con la sua testa dura come l\u2019acciaio. Pu\u00f2 anche farlo tentennare.","flinchChance":30,"effectChance":30,"flags":["contact","protect"]},"magnet-bomb":{"name":"Bombagnete","type":"steel","category":"physical","power":60,"accuracy":null,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["protect"]},"stone-edge":{"name":"Pietrataglio","type":"rock","category":"physical","power":100,"accuracy":80,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa colpisce il bersaglio dal basso con pietre affilate. Probabile brutto colpo.","critRate":1,"flags":["protect"]},"captivate":{"name":"Incanto","type":"normal","category":"status","power":0,"accuracy":100,"pp":20,"priority":0,"target":"all-opponents","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","statChanges":[["special-attack",-2]],"flags":["protect"]},"stealth-rock":{"name":"Levitoroccia","type":"rock","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"opponents-field","desc":"Chi la usa piazza una trappola di rocce sospese che danneggia i nemici che entrano in campo."},"bug-bite":{"name":"Coleomorso","type":"bug","category":"physical","power":60,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa morde il bersaglio. Inoltre, se questi ha una bacca, gliela ruba e ne sfrutta gli effetti.","flags":["contact","protect"]},"charge-beam":{"name":"Raggioscossa","type":"electric","category":"special","power":50,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa lancia un fascio di elettricit\u00e0 molto intensa. Pu\u00f2 anche aumentare il suo Attacco Speciale.","statChance":70,"effectChance":70,"statChanges":[["special-attack",1]],"flags":["protect"]},"wood-hammer":{"name":"Mazzuolegno","type":"grass","category":"physical","power":120,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa si lancia con tutto il corpo contro il bersaglio, ma subisce anche considerevoli danni.","drain":-33,"flags":["contact","protect"]},"aqua-jet":{"name":"Acquagetto","type":"water","category":"physical","power":40,"accuracy":100,"pp":20,"priority":1,"target":"selected-pokemon","desc":"Chi la usa colpisce a una tale velocit\u00e0 da rendersi quasi invisibile. Questa mossa ha priorit\u00e0 alta.","flags":["contact","protect"]},"double-hit":{"name":"Doppiosmash","type":"normal","category":"physical","power":35,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa colpisce il bersaglio due volte di fila con la coda, una liana o simili.","minHits":2,"maxHits":2,"flags":["contact","protect"]},"wide-guard":{"name":"Bodyguard","type":"rock","category":"status","power":0,"accuracy":null,"pp":10,"priority":3,"target":"users-field","desc":"Chi la usa protegge s\u00e9 e gli alleati da colpi ad ampio raggio per un turno."},"wonder-room":{"name":"Mirabilzona","type":"psychic","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"entire-field","desc":"Chi la usa crea una dimensione in cui Difesa e Difesa Speciale di tutti i Pok\u00e9mon vengono scambiate per cinque turni."},"psyshock":{"name":"Psicoshock","type":"psychic","category":"special","power":80,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca il bersaglio facendo materializzare misteriose onde psichiche che provocano danni fisici.","flags":["protect"]},"venoshock":{"name":"Velenoshock","type":"poison","category":"special","power":65,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Lancia uno speciale liquido tossico sul bersaglio. Se questi \u00e8 avvelenato, il danno provocato raddoppia.","flags":["protect"]},"rage-powder":{"name":"Polverabbia","type":"bug","category":"status","power":0,"accuracy":null,"pp":20,"priority":2,"target":"user","desc":"Chi la usa attira l\u2019attenzione dei nemici cospargendosi di una polvere irritante e diventando bersaglio di tutti gli attacchi.","flags":["powder"]},"telekinesis":{"name":"Telecinesi","type":"psychic","category":"status","power":0,"accuracy":null,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","ailment":"unknown","flags":["protect"]},"smack-down":{"name":"Abbattimento","type":"rock","category":"physical","power":50,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa lancia una pietra o un proiettile. Pu\u00f2 colpire anche un bersaglio in volo e farlo cadere.","ailment":"unknown","ailmentChance":100,"effectChance":100,"flags":["protect"]},"storm-throw":{"name":"Tempestretta","type":"fighting","category":"physical","power":60,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa sferra un colpo micidiale al bersaglio. Brutto colpo assicurato.","critRate":6,"flags":["contact","protect"]},"flame-burst":{"name":"Pirolancio","type":"fire","category":"special","power":70,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["protect"]},"sludge-wave":{"name":"Fangonda","type":"poison","category":"special","power":95,"accuracy":100,"pp":10,"priority":0,"target":"all-other-pokemon","desc":"Lancia un\u2019onda di fango che attacca tutti i Pok\u00e9mon nelle vicinanze. Pu\u00f2 anche avvelenarli.","ailment":"poison","ailmentChance":10,"effectChance":10,"flags":["protect"]},"quiver-dance":{"name":"Eledanza","type":"bug","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Danza leggiadra ed elegante che aumenta l\u2019Attacco Speciale, la Difesa Speciale e la Velocit\u00e0 di chi la usa.","statChanges":[["special-attack",1],["special-defense",1],["speed",1]]},"heavy-slam":{"name":"Pesobomba","type":"steel","category":"physical","power":0,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa si lancia contro il bersaglio con tutto il proprio peso. Pi\u00f9 \u00e8 pesante rispetto ad esso, pi\u00f9 danni causa.","flags":["contact","protect"]},"synchronoise":{"name":"Sincrumore","type":"psychic","category":"special","power":120,"accuracy":100,"pp":10,"priority":0,"target":"all-other-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["protect"]},"electro-ball":{"name":"Energisfera","type":"electric","category":"special","power":0,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca con una sfera d\u2019energia elettrica. Pi\u00f9 \u00e8 rapido rispetto al bersaglio, pi\u00f9 danni arreca.","flags":["protect"]},"soak":{"name":"Inondazione","type":"water","category":"status","power":0,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa proietta un lungo getto d\u2019acqua contro il bersaglio e lo rende un Pok\u00e9mon di tipo Acqua.","flags":["protect"]},"flame-charge":{"name":"Nitrocarica","type":"fire","category":"physical","power":50,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa si copre di fuoco e attacca il bersaglio. Concentrandosi aumenta, inoltre, la propria Velocit\u00e0.","statChance":100,"effectChance":100,"statChanges":[["speed",1]],"flags":["contact","protect"]},"coil":{"name":"Arrotola","type":"poison","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user","desc":"Chi la usa si concentra aumentando Attacco, Difesa e precisione.","statChanges":[["attack",1],["defense",1],["accuracy",1]]},"low-sweep":{"name":"Calciobasso","type":"fighting","category":"physical","power":65,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa colpisce con un attacco fulmineo la parte inferiore del corpo del bersaglio, riducendone la Velocit\u00e0.","statChance":100,"effectChance":100,"statChanges":[["speed",-1]],"flags":["contact","protect"]},"acid-spray":{"name":"Acidobomba","type":"poison","category":"special","power":40,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca il bersaglio con un acido altamente corrosivo. Il fluido riduce di molto la Difesa Speciale del bersaglio.","statChance":100,"effectChance":100,"statChanges":[["special-defense",-2]],"flags":["protect"]},"after-you":{"name":"Cortesia","type":"normal","category":"status","power":0,"accuracy":null,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa aiuta un bersaglio pi\u00f9 lento permettendogli di agire subito dopo."},"round":{"name":"Coro","type":"normal","category":"special","power":60,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Attacca il bersaglio con una melodia. Se usata durante lo stesso turno da pi\u00f9 Pok\u00e9mon, i danni inflitti aumentano.","flags":["protect","sound"]},"chip-away":{"name":"Insidia","type":"normal","category":"physical","power":70,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["contact","protect"]},"clear-smog":{"name":"Pulifumo","type":"poison","category":"special","power":50,"accuracy":null,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Attacca il bersaglio lanciandogli contro una nuvola di fumo speciale, che annulla ogni modifica alle statistiche.","flags":["protect"]},"stored-power":{"name":"Veicolaforza","type":"psychic","category":"special","power":20,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Attacca il bersaglio con l\u2019energia accumulata. Pi\u00f9 sono state aumentate le statistiche, maggiore \u00e8 il danno inflitto.","flags":["protect"]},"quick-guard":{"name":"Anticipo","type":"fighting","category":"status","power":0,"accuracy":null,"pp":15,"priority":3,"target":"users-field","desc":"Chi la usa protegge s\u00e9 e gli alleati dalle mosse ad alta priorit\u00e0."},"ally-switch":{"name":"Cambiaposto","type":"psychic","category":"status","power":0,"accuracy":null,"pp":15,"priority":2,"target":"user","desc":"Chi la usa cambia di posto con un alleato in campo grazie a un misterioso potere."},"shell-smash":{"name":"Gettaguscio","type":"normal","category":"status","power":0,"accuracy":null,"pp":15,"priority":0,"target":"user","desc":"Chi la usa si disfa del guscio. Difesa e Difesa Speciale calano, ma aumentano di molto Attacco, Attacco Speciale e Velocit\u00e0.","statChanges":[["defense",-1],["special-defense",-1],["attack",2],["special-attack",2],["speed",2]]},"heal-pulse":{"name":"Ondasana","type":"psychic","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa lancia un\u2019onda rilassante che fa recuperare al bersaglio met\u00e0 dei suoi PS massimi.","healing":50,"flags":["heal","protect","pulse"]},"hex":{"name":"Sciagura","type":"ghost","category":"special","power":65,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Attacco che causa un danno enorme se il bersaglio ha problemi di stato.","flags":["protect"]},"sky-drop":{"name":"Cadutalibera","type":"flying","category":"physical","power":60,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["contact","protect"]},"circle-throw":{"name":"Ribaltiro","type":"fighting","category":"physical","power":60,"accuracy":90,"pp":10,"priority":-6,"target":"selected-pokemon","desc":"Il bersaglio \u00e8 scaraventato via ed \u00e8 costretto a lasciare il posto a un altro. Mette fine alle lotte contro singoli Pok\u00e9mon selvatici.","flags":["contact","protect"]},"acrobatics":{"name":"Acrobazia","type":"flying","category":"physical","power":55,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Attacca rapidamente il bersaglio. Se chi la usa non ha uno strumento, infligge al nemico grossi danni.","flags":["contact","protect"]},"reflect-type":{"name":"Riflettipo","type":"normal","category":"status","power":0,"accuracy":null,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa cambia il proprio tipo in quello del bersaglio.","flags":["protect"]},"retaliate":{"name":"Nemesi","type":"normal","category":"physical","power":70,"accuracy":100,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Vendica un alleato messo KO. Se ci\u00f2 \u00e8 accaduto al turno precedente, il danno \u00e8 maggiore.","flags":["contact","protect"]},"final-gambit":{"name":"Azzardo","type":"fighting","category":"special","power":0,"accuracy":100,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca con tutta la potenza di cui dispone e va KO, ma infligge al bersaglio un danno pari ai PS che ha perso.","flags":["protect"]},"bestow":{"name":"Cediregalo","type":"normal","category":"status","power":0,"accuracy":null,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata."},"inferno":{"name":"Marchiatura","type":"fire","category":"special","power":100,"accuracy":50,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Il bersaglio viene avvolto da intense fiammate che causano scottature.","ailment":"burn","ailmentChance":100,"effectChance":100,"flags":["protect"]},"bulldoze":{"name":"Battiterra","type":"ground","category":"physical","power":60,"accuracy":100,"pp":20,"priority":0,"target":"all-other-pokemon","desc":"Chi la usa calpesta il terreno e scatena un terremoto che danneggia i Pok\u00e9mon nei paraggi, riducendone la Velocit\u00e0.","statChance":100,"effectChance":100,"statChanges":[["speed",-1]],"flags":["protect"]},"dragon-tail":{"name":"Codadrago","type":"dragon","category":"physical","power":60,"accuracy":90,"pp":10,"priority":-6,"target":"selected-pokemon","desc":"Chi la usa fa volar via il bersaglio in modo che venga sostituito. Se il bersaglio \u00e8 un singolo Pok\u00e9mon selvatico, la lotta finisce.","flags":["contact","protect"]},"work-up":{"name":"Cuordileone","type":"normal","category":"status","power":0,"accuracy":null,"pp":30,"priority":0,"target":"user","desc":"Chi la usa si tira su di morale, aumentando il proprio Attacco e l\u2019Attacco Speciale.","statChanges":[["attack",1],["special-attack",1]]},"wild-charge":{"name":"Sprizzalampo","type":"electric","category":"physical","power":90,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa si carica di elettricit\u00e0 per poi scagliarsi sul bersaglio, ma subisce dei danni per il contraccolpo.","drain":-25,"flags":["contact","protect"]},"drill-run":{"name":"Giravvita","type":"ground","category":"physical","power":80,"accuracy":95,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa si scaglia sul bersaglio ruotando su se stesso come un trapano perforante. Probabile brutto colpo.","critRate":1,"flags":["contact","protect"]},"dual-chop":{"name":"Doppiocolpo","type":"dragon","category":"physical","power":40,"accuracy":90,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca due volte il bersaglio con dei colpi estremamente forti.","minHits":2,"maxHits":2,"flags":["contact","protect"]},"heart-stamp":{"name":"Cuorestampo","type":"psychic","category":"physical","power":60,"accuracy":100,"pp":25,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flinchChance":30,"effectChance":30,"flags":["contact","protect"]},"razor-shell":{"name":"Conchilama","type":"water","category":"physical","power":75,"accuracy":95,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa colpisce il bersaglio con il suo guscio affilato. Il colpo pu\u00f2 anche ridurre la Difesa del bersaglio.","statChance":50,"effectChance":50,"statChanges":[["defense",-1]],"flags":["contact","protect"]},"leaf-tornado":{"name":"Vorticerba","type":"grass","category":"special","power":65,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa avvolge e attacca il bersaglio con foglie affilate che possono anche ridurne la precisione.","statChance":50,"effectChance":50,"statChanges":[["accuracy",-1]],"flags":["protect"]},"steamroller":{"name":"Rulloduro","type":"bug","category":"physical","power":65,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flinchChance":30,"effectChance":30,"flags":["contact","protect"]},"psystrike":{"name":"Psicobotta","type":"psychic","category":"special","power":100,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca il bersaglio facendo materializzare misteriose onde psichiche che provocano danni fisici.","flags":["protect"]},"hurricane":{"name":"Tifone","type":"flying","category":"special","power":110,"accuracy":70,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca il bersaglio avvolgendolo con un vento fortissimo. Pu\u00f2 anche confonderlo.","ailment":"confusion","ailmentChance":30,"effectChance":30,"flags":["protect"]},"icicle-crash":{"name":"Scagliagelo","type":"ice","category":"physical","power":85,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca violentemente il bersaglio con grosse stalattiti di ghiaccio che possono anche farlo tentennare.","flinchChance":30,"effectChance":30,"flags":["protect"]},"belch":{"name":"Rutto","type":"poison","category":"special","power":120,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca il bersaglio con un rutto potente. Per utilizzare questa mossa, il Pok\u00e9mon deve mangiare la bacca che possiede.","flags":["protect"]},"rototiller":{"name":"Aracampo","type":"ground","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"all-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","statChance":100,"effectChance":100,"statChanges":[["attack",1],["special-attack",1]]},"fell-stinger":{"name":"Pungiglione","type":"bug","category":"physical","power":50,"accuracy":100,"pp":25,"priority":0,"target":"selected-pokemon","desc":"L\u2019Attacco di chi la usa aumenta moltissimo se grazie alla mossa il bersaglio va KO.","flags":["contact","protect"]},"petal-blizzard":{"name":"Fiortempesta","type":"grass","category":"physical","power":90,"accuracy":100,"pp":15,"priority":0,"target":"all-other-pokemon","desc":"Infligge danni ai Pok\u00e9mon che ha intorno attaccandoli con una tempesta di fiori.","flags":["protect"]},"freeze-dry":{"name":"Liofilizzazione","type":"ice","category":"special","power":70,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa raffredda istantaneamente il bersaglio e pu\u00f2 congelarlo. Risulta superefficace contro i Pok\u00e9mon di tipo Acqua.","ailment":"freeze","ailmentChance":10,"effectChance":10,"flags":["protect"]},"disarming-voice":{"name":"Incantavoce","type":"fairy","category":"special","power":40,"accuracy":null,"pp":15,"priority":0,"target":"all-opponents","desc":"Chi la usa infligge un danno spirituale ai nemici nei paraggi con una voce suadente. L\u2019attacco andr\u00e0 immancabilmente a segno.","flags":["protect","sound"]},"draining-kiss":{"name":"Assorbibacio","type":"fairy","category":"special","power":50,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa assorbe energia dal bersaglio con un bacio, recuperando cos\u00ec PS in quantit\u00e0 pari a pi\u00f9 della met\u00e0 del danno inferto.","drain":75,"flags":["contact","heal","protect"]},"grassy-terrain":{"name":"Campo Erboso","type":"grass","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"entire-field","desc":"Per cinque turni il terreno entra nello stato di Campo Erboso: i Pok\u00e9mon a terra recuperano PS a ogni turno e la potenza delle mosse di tipo Erba aumenta."},"misty-terrain":{"name":"Campo Nebbioso","type":"fairy","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"entire-field","desc":"Per cinque turni il terreno entra nello stato di Campo Nebbioso: i Pok\u00e9mon a terra sono immuni ai problemi di stato e la potenza delle mosse Drago \u00e8 dimezzata."},"play-rough":{"name":"Carineria","type":"fairy","category":"physical","power":90,"accuracy":90,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca il bersaglio con delle carinerie. Pu\u00f2 anche ridurne l\u2019Attacco.","statChance":10,"effectChance":10,"statChanges":[["attack",-1]],"flags":["contact","protect"]},"moonblast":{"name":"Forza Lunare","type":"fairy","category":"special","power":95,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Chi la usa sfrutta il potere della luna per attaccare il bersaglio. Pu\u00f2 anche ridurne l\u2019Attacco Speciale.","statChance":30,"effectChance":30,"statChanges":[["special-attack",-1]],"flags":["protect"]},"play-nice":{"name":"Simpatia","type":"normal","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa diventa amico del bersaglio, rabbonendolo e riducendone cos\u00ec l\u2019Attacco.","statChance":100,"effectChance":100,"statChanges":[["attack",-1]]},"eerie-impulse":{"name":"Elettromistero","type":"electric","category":"status","power":0,"accuracy":100,"pp":15,"priority":0,"target":"selected-pokemon","desc":"Il corpo di chi la usa emette onde anomale che investono il bersaglio, riducendone di molto l\u2019Attacco Speciale.","statChanges":[["special-attack",-2]],"flags":["protect"]},"venom-drench":{"name":"Velenotrappola","type":"poison","category":"status","power":0,"accuracy":100,"pp":20,"priority":0,"target":"all-opponents","desc":"Emette un liquido particolare che riduce l\u2019Attacco, l\u2019Attacco Speciale e la Velocit\u00e0 dei nemici avvelenati intorno a chi la usa.","statChance":100,"effectChance":100,"statChanges":[["attack",-1],["special-attack",-1],["speed",-1]],"flags":["protect"]},"magnetic-flux":{"name":"Controllo Polare","type":"electric","category":"status","power":0,"accuracy":null,"pp":20,"priority":0,"target":"user-and-allies","desc":"Tramite il controllo dei campi magnetici, aumenta la Difesa e la Difesa Speciale dei Pok\u00e9mon alleati dotati delle abilit\u00e0 Pi\u00f9 o Meno.","statChanges":[["defense",1],["special-defense",1]]},"electric-terrain":{"name":"Campo Elettrico","type":"electric","category":"status","power":0,"accuracy":null,"pp":10,"priority":0,"target":"entire-field","desc":"Per cinque turni il terreno entra nello stato di Campo Elettrico: i Pok\u00e9mon a terra non si addormentano e la potenza delle mosse di tipo Elettro aumenta."},"baby-doll-eyes":{"name":"Occhioni Teneri","type":"fairy","category":"status","power":0,"accuracy":100,"pp":30,"priority":1,"target":"selected-pokemon","desc":"Chi la usa rivolge i propri occhioni languidi al bersaglio, riducendone l\u2019Attacco. Questa mossa ha priorit\u00e0 alta.","statChanges":[["attack",-1]],"flags":["protect"]},"nuzzle":{"name":"Elettrococcola","type":"electric","category":"physical","power":20,"accuracy":100,"pp":20,"priority":0,"target":"selected-pokemon","desc":"Chi la usa strofina le guance elettrizzate contro il bersaglio, paralizzandolo.","ailment":"paralysis","ailmentChance":100,"effectChance":100,"flags":["contact","protect"]},"high-horsepower":{"name":"Forza Equina","type":"ground","category":"physical","power":95,"accuracy":95,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa travolge il bersaglio con un attacco possente.","flags":["contact","protect"]},"spotlight":{"name":"Riflettore","type":"normal","category":"status","power":0,"accuracy":null,"pp":15,"priority":3,"target":"selected-pokemon","desc":"Questa mossa non pu\u00f2 essere usata. \u00c8 consigliabile farla dimenticare al Pok\u00e9mon. Tuttavia, una volta dimenticata, non potr\u00e0 pi\u00f9 essere ricordata.","flags":["protect"]},"laser-focus":{"name":"Concentrazione","type":"normal","category":"status","power":0,"accuracy":null,"pp":30,"priority":0,"target":"user","desc":"Chi la usa si concentra e nel turno successivo metter\u00e0 sicuramente a segno un brutto colpo."},"burn-up":{"name":"Ultima Fiamma","type":"fire","category":"special","power":130,"accuracy":100,"pp":5,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca sfruttando tutta la sua potenza incendiaria per infliggere gravi danni al bersaglio, ma come conseguenza perde il tipo Fuoco.","flags":["protect"]},"stomping-tantrum":{"name":"Battipiedi","type":"ground","category":"physical","power":75,"accuracy":100,"pp":10,"priority":0,"target":"selected-pokemon","desc":"Chi la usa attacca battendo i piedi per la rabbia. Se la mossa usata al turno precedente non \u00e8 andata a segno, la potenza raddoppia.","flags":["contact","protect"]}}};
const abilitiesFile = {"meta":{"source":"PokeAPI (pokeapi.co) \u2014 dati BSD-3-Clause","versionGroup":"ultra-sun-ultra-moon","generated":"2026-11-13"},"data":{"stench":{"name":"Tanfo","desc":"A volte il cattivo odore emesso dal Pok\u00e9mon fa tentennare i nemici quando attacca."},"battle-armor":{"name":"Lottascudo","desc":"Il Pok\u00e9mon \u00e8 protetto da una dura corazza che gli evita di subire brutti colpi."},"sturdy":{"name":"Vigore","desc":"Evita che il Pok\u00e9mon vada KO in un sol colpo se ha tutti i PS, e lo rende immune alle mosse che causano KO immediato."},"damp":{"name":"Umidit\u00e0","desc":"Aumenta l\u2019umidit\u00e0 circostante, impedendo l\u2019uso di Autodistruzione e di altre mosse esplosive."},"limber":{"name":"Scioltezza","desc":"Il corpo flessibile del Pok\u00e9mon gli impedisce di subire gli effetti della paralisi."},"sand-veil":{"name":"Sabbiavelo","desc":"L\u2019elusione aumenta durante le tempeste di sabbia."},"static":{"name":"Statico","desc":"Il contatto fisico con il corpo percorso dall\u2019elettricit\u00e0 statica del Pok\u00e9mon pu\u00f2 causare paralisi."},"volt-absorb":{"name":"Assorbivolt","desc":"Se il Pok\u00e9mon viene colpito da una mossa di tipo Elettro, recupera PS anzich\u00e9 subire danni."},"water-absorb":{"name":"Assorbacqua","desc":"Se il Pok\u00e9mon viene colpito da una mossa di tipo Acqua, recupera PS anzich\u00e9 subire danni."},"oblivious":{"name":"Indifferenza","desc":"L\u2019imperturbabilit\u00e0 del Pok\u00e9mon lo protegge da infatuazioni e provocazioni."},"cloud-nine":{"name":"Antimeteo","desc":"Neutralizza gli effetti di tutte le condizioni atmosferiche."},"compound-eyes":{"name":"Insettocchi","desc":"La precisione del Pok\u00e9mon aumenta grazie ai suoi occhi composti."},"insomnia":{"name":"Insonnia","desc":"Il Pok\u00e9mon soffre d\u2019insonnia e non pu\u00f2 addormentarsi."},"immunity":{"name":"Immunit\u00e0","desc":"L\u2019immunit\u00e0 naturale del Pok\u00e9mon gli impedisce di essere avvelenato."},"flash-fire":{"name":"Fuocardore","desc":"Se il Pok\u00e9mon subisce una mossa di tipo Fuoco, ne sfrutta il calore per potenziare le proprie mosse dello stesso tipo."},"shield-dust":{"name":"Polvoscudo","desc":"Il Pok\u00e9mon \u00e8 protetto da uno strato di scaglie che annulla gli effetti aggiuntivi delle mosse subite."},"own-tempo":{"name":"Mente Locale","desc":"Il Pok\u00e9mon affronta la vita al proprio ritmo e per questo non pu\u00f2 essere confuso."},"intimidate":{"name":"Prepotenza","desc":"Quando il Pok\u00e9mon entra in campo, la sua prepotenza intimidisce i nemici, riducendone l\u2019Attacco."},"levitate":{"name":"Levitazione","desc":"La capacit\u00e0 di levitare conferisce al Pok\u00e9mon immunit\u00e0 agli attacchi di tipo Terra."},"effect-spore":{"name":"Spargispora","desc":"Pu\u00f2 causare avvelenamento, paralisi o sonno a chi manda a segno un attacco diretto."},"synchronize":{"name":"Sincronismo","desc":"Se un nemico avvelena, paralizza o scotta un Pok\u00e9mon con questa abilit\u00e0, viene colpito dallo stesso problema di stato."},"clear-body":{"name":"Corpochiaro","desc":"Impedisce la diminuzione delle statistiche causata da abilit\u00e0 o mosse di altri Pok\u00e9mon."},"natural-cure":{"name":"Alternacura","desc":"Quando il Pok\u00e9mon viene sostituito, guarisce dai problemi di stato."},"lightning-rod":{"name":"Parafulmine","desc":"Il Pok\u00e9mon attira e neutralizza le mosse di tipo Elettro e fa aumentare il suo Attacco Speciale."},"serene-grace":{"name":"Leggiadro","desc":"Rende pi\u00f9 probabili gli effetti aggiuntivi delle mosse."},"swift-swim":{"name":"Nuotovelox","desc":"Se piove, la Velocit\u00e0 aumenta."},"chlorophyll":{"name":"Clorofilla","desc":"Se la luce del sole \u00e8 intensa, la Velocit\u00e0 aumenta."},"illuminate":{"name":"Risplendi","desc":"Illumina tutto intorno, rendendo pi\u00f9 probabile incontrare Pok\u00e9mon selvatici."},"trace":{"name":"Traccia","desc":"Quando il Pok\u00e9mon entra in campo, copia l\u2019abilit\u00e0 di un nemico."},"poison-point":{"name":"Velenopunto","desc":"Pu\u00f2 avvelenare chi manda a segno un attacco diretto."},"inner-focus":{"name":"Forza Interiore","desc":"La capacit\u00e0 di concentrazione del Pok\u00e9mon evita che tentenni per gli attacchi del nemico."},"water-veil":{"name":"Idrovelo","desc":"Un velo d\u2019acqua riveste il corpo del Pok\u00e9mon impedendogli di venire scottato."},"magnet-pull":{"name":"Magnetismo","desc":"La carica magnetica attrae i Pok\u00e9mon di tipo Acciaio impedendogli la fuga o la sostituzione."},"soundproof":{"name":"Antisuono","desc":"Il Pok\u00e9mon \u00e8 dotato di una sorta di isolamento acustico che lo rende immune alle mosse basate sul suono."},"pressure":{"name":"Pressione","desc":"Il Pok\u00e9mon mette pressione al nemico, facendogli consumare pi\u00f9 PP."},"thick-fat":{"name":"Grassospesso","desc":"Il Pok\u00e9mon \u00e8 protetto da uno spesso strato di grasso che dimezza il danno causato da mosse di tipo Fuoco e Ghiaccio."},"early-bird":{"name":"Sveglialampo","desc":"Il Pok\u00e9mon impiega met\u00e0 del tempo per risvegliarsi dal sonno rispetto agli altri."},"flame-body":{"name":"Corpodifuoco","desc":"Pu\u00f2 scottare chi manda a segno un attacco diretto."},"run-away":{"name":"Fugafacile","desc":"Garantisce la fuga dai Pok\u00e9mon selvatici."},"keen-eye":{"name":"Sguardofermo","desc":"La vista acuta del Pok\u00e9mon impedisce che la sua precisione diminuisca."},"hyper-cutter":{"name":"Ipertaglio","desc":"L\u2019Attacco del Pok\u00e9mon non pu\u00f2 diminuire grazie alla morsa micidiale in cui \u00e8 in grado di stringere i nemici."},"pickup":{"name":"Raccolta","desc":"Il Pok\u00e9mon pu\u00f2 raccogliere lo strumento usato da un nemico durante la lotta. A volte potrebbe raccogliere strumenti anche fuori dalla lotta."},"cute-charm":{"name":"Incantevole","desc":"Pu\u00f2 causare infatuazione a chi manda a segno un attacco diretto."},"sticky-hold":{"name":"Antifurto","desc":"Gli strumenti restano appiccicati al corpo adesivo del Pok\u00e9mon e non possono essere rubati."},"shed-skin":{"name":"Muta","desc":"Il Pok\u00e9mon pu\u00f2 guarire dai problemi di stato facendo la muta completa della pelle."},"guts":{"name":"Dentistretti","desc":"Se il Pok\u00e9mon \u00e8 affetto da un problema di stato, tira fuori la grinta e aumenta il proprio Attacco."},"liquid-ooze":{"name":"Melma","desc":"Il Pok\u00e9mon secerne delle sostanze tossiche. Se un nemico manda a segno una mossa che assorbe i PS, subisce dei danni."},"overgrow":{"name":"Erbaiuto","desc":"Quando il Pok\u00e9mon ha pochi PS, la potenza delle sue mosse di tipo Erba aumenta."},"blaze":{"name":"Aiutofuoco","desc":"Quando il Pok\u00e9mon ha pochi PS, la potenza delle sue mosse di tipo Fuoco aumenta."},"torrent":{"name":"Acquaiuto","desc":"Quando il Pok\u00e9mon ha pochi PS, la potenza delle sue mosse di tipo Acqua aumenta."},"swarm":{"name":"Aiutinsetto","desc":"Quando il Pok\u00e9mon ha pochi PS, la potenza delle sue mosse di tipo Coleottero aumenta."},"rock-head":{"name":"Testadura","desc":"Protegge il Pok\u00e9mon dai contraccolpi."},"arena-trap":{"name":"Trappoarena","desc":"Impedisce la fuga al nemico."},"vital-spirit":{"name":"Spiritovivo","desc":"Il Pok\u00e9mon \u00e8 talmente vivace che non pu\u00f2 addormentarsi."},"shell-armor":{"name":"Guscioscudo","desc":"Il Pok\u00e9mon \u00e8 protetto da un guscio robusto che gli evita di subire brutti colpi."},"tangled-feet":{"name":"Intricopiedi","desc":"Se il Pok\u00e9mon \u00e8 confuso, la sua elusione aumenta."},"rivalry":{"name":"Antagonismo","desc":"Rende pi\u00f9 forti contro nemici dello stesso sesso, ma pi\u00f9 deboli contro nemici di sesso opposto."},"anger-point":{"name":"Grancollera","desc":"Se il Pok\u00e9mon subisce un brutto colpo, monta su tutte le furie e il suo Attacco aumenta al massimo."},"dry-skin":{"name":"Pellearsa","desc":"Il Pok\u00e9mon recupera PS se piove o se subisce mosse di tipo Acqua, ma perde PS con la luce solare intensa. Subisce pi\u00f9 danni da mosse di tipo Fuoco."},"download":{"name":"Download","desc":"Il Pok\u00e9mon analizza Difesa e Difesa Speciale del nemico e, a seconda di qual \u00e8 pi\u00f9 bassa, aumenta il proprio Attacco o Attacco Speciale."},"iron-fist":{"name":"Ferropugno","desc":"Potenzia le mosse che utilizzano pugni."},"adaptability":{"name":"Adattabilit\u00e0","desc":"Potenzia di molto le mosse dello stesso tipo del Pok\u00e9mon."},"skill-link":{"name":"Abillegame","desc":"Le mosse multicolpo mandano a segno sempre il massimo dei colpi possibili."},"hydration":{"name":"Idratazione","desc":"Se piove, il Pok\u00e9mon guarisce dai problemi di stato."},"sniper":{"name":"Cecchino","desc":"Aumenta ulteriormente i danni inflitti dai brutti colpi."},"magic-guard":{"name":"Magicscudo","desc":"Il Pok\u00e9mon subisce danni solo dagli attacchi."},"no-guard":{"name":"Nullodifesa","desc":"Il Pok\u00e9mon e chiunque lo attacchi abbassano la guardia e le loro mosse vanno sempre a segno."},"technician":{"name":"Tecnico","desc":"Potenzia le mosse pi\u00f9 deboli del Pok\u00e9mon."},"leaf-guard":{"name":"Fogliamanto","desc":"Se la luce del sole \u00e8 intensa, evita i problemi di stato."},"mold-breaker":{"name":"Rompiforma","desc":"Quando il Pok\u00e9mon attacca, ignora l\u2019abilit\u00e0 del bersaglio se questa ha effetto sulle mosse."},"forewarn":{"name":"Premonizione","desc":"Quando il Pok\u00e9mon entra in campo, rivela una delle mosse del nemico."},"tinted-lens":{"name":"Lentifum\u00e9","desc":"Permette alle mosse non molto efficaci di infliggere danni normalmente."},"filter":{"name":"Filtro","desc":"Riduce i danni subiti dalle mosse superefficaci."},"scrappy":{"name":"Nervisaldi","desc":"Permette di colpire Pok\u00e9mon di tipo Spettro con mosse di tipo Normale e Lotta."},"reckless":{"name":"Temerariet\u00e0","desc":"Potenzia le mosse che causano contraccolpo."},"cursed-body":{"name":"Corpofunesto","desc":"Pu\u00f2 bloccare la mossa subita dal Pok\u00e9mon."},"competitive":{"name":"Tenacia","desc":"L\u2019Attacco Speciale aumenta di molto quando le statistiche diminuiscono a causa di un nemico."},"neutralizing-gas":{"name":"Gas Reagente","desc":"Se in campo c\u2019\u00e8 un Pok\u00e9mon con Gas Reagente, gli effetti delle abilit\u00e0 di tutti gli altri Pok\u00e9mon vengono annullati o non si attivano."}}};
// Dati di gioco locali (i file JSON nella cartella data, generati da tools/build-data.py).
// Sono importati direttamente: nel pacchetto js/pokexplorer.js finiscono incorporati,
// così il gioco funziona anche aprendo index.html come file, senza server.




let SPECIES = new Map();
let MOVES = {};
let ABILITIES = {};
let META = {};

/** Installa i dati già letti (usato dai test in Node e dal loader del browser). */
function setGameData({ pokemon, moves, abilities }) {
  SPECIES = new Map(pokemon.data.map(s => [s.id, Object.freeze(s)]));
  MOVES = moves.data;
  ABILITIES = abilities.data;
  META = pokemon.meta || {};
}

/** Installa i dati incorporati. Sincrona: non ci sono più richieste di rete. */
function loadGameData() {
  setGameData({ pokemon: pokemonFile, moves: movesFile, abilities: abilitiesFile });
}

const dataMeta = () => META;
const speciesData = id => SPECIES.get(Number(id)) || null;
const allSpecies = () => [...SPECIES.values()];
const moveData = id => MOVES[id] || null;
const allMoveIds = () => Object.keys(MOVES);
const abilityData = id => ABILITIES[id] || null;
const speciesName = id => speciesData(id)?.name || `#${id}`;
const abilityName = id => abilityData(id)?.name || String(id || '').replaceAll('-', ' ');

/** Percorso locale dello sprite di una specie (varianti femminili solo dove esistono). */
function pokemonSprite(id, { back = false, shiny = false, gender = null } = {}) {
  const s = speciesData(id);
  const female = gender === 'female' && s?.femaleSprites;
  return `assets/pokemon/${back ? 'back/' : ''}${shiny ? 'shiny/' : ''}${female ? 'female/' : ''}${Number(id)}.png`;
}

return {setGameData,loadGameData,dataMeta,speciesData,allSpecies,moveData,allMoveIds,abilityData,speciesName,abilityName,pokemonSprite};
})();
const __m1 = (() => {
// Stato di una singola run. Unica fonte dei valori iniziali: viene usato sia alla
// creazione del motore sia a ogni ritorno al menu, così nessun campo resta "sporco".
const STARTING_ITEMS = Object.freeze({
  pokeball: 5, masterball: 0, potion: 3, superPotion: 0, hyperPotion: 0, elixir: 1, abilityCapsule: 0,
  fishingRod: false, rareCandy: 0, goldCandy: 0, waterStone: 0, thunderStone: 0, fireStone: 0,
});
const STARTING_MONEY = 600;
const STARTING_RADAR = 3;

const normalizeRunMode = mode => ['easy', 'normal'].includes(mode) ? 'normal' : 'nuzlocke';

function createRunState() {
  return {
    runId: null,
    devRun: false,
    runMode: 'nuzlocke',
    // Statistiche mostrate nel riepilogo di fine run.
    runStats: { startedAt: null, playMs: 0, wins: 0, trainers: 0, captures: 0, maxFloor: 1, fallen: [] },
    // Tipo del piano scelto all'uscita precedente: null, 'calm' (tranquillo) o 'trainers' (zona allenatori).
    floorKind: null,
    // Mondo
    floor: 1, gridMap: [], playerPos: { x: 0, y: 0 }, playerGender: 'male', playerFacing: 'down', playerStep: 0,
    playerFishingFrame: null, pendingWalk: null,
    // Inventario e progressi
    money: STARTING_MONEY, items: { ...STARTING_ITEMS }, radarCharges: STARTING_RADAR, badges: [],
    completedGymFloors: new Set(), caughtLegendarySpecies: new Set(),
    expShareEnabled: true, expShareClaimed: false, fishingRodGiftClaimed: false, eeveeStoneGiftClaimed: false, adventureCompleted: false,
    soloRunEligible: true, soloRunTracked: false,
    // Squadra
    team: [], activeMon: null, enemyMon: null, selectedStarterData: null,
    partyMenuPokemon: null, partyMoveSource: null, partyInfoPokemon: null,
    // Blocchi e interazioni in corso
    isLocked: false, pendingItemTarget: null, pendingWildEncounterType: null, pendingLegendaryId: null,
    pendingTrainerCell: null, activeDialogNpcCell: null, gymChallengePending: false,
    // Lotta
    battleType: null, battleBusy: false, battleMode: null, battleWeather: null, battleParticipants: new Set(), lastPersistedFaint: null,
    pendingForcedSwitch: false, battleConfirmAction: null, teleportSwitchPending: false,
    devSkipPending: false, devSkipChain: false, fastBattleText: false,
    // Palestra e raid
    gymQueue: [], gymBadgeName: '', currentGym: null, gymLeaderIndex: 0,
    isRaidActive: false, raidQueueCount: 0, raidPickupSourceCell: null,
    // Grotta Celeste
    oakEventDismissed: false, isCelestialCave: false, celestialPhase: 'unvisited', celestialReturnState: null,
    celestialCutsceneActive: false, celestialDeparturePending: false, celestialReserve: [],
    celestialRosterSelection: new Set(), celestialDepositRequired: false, celestialExpeditionBusy: false,
    celestialMewtwoCaptured: false,
  };
}

return {STARTING_ITEMS,STARTING_MONEY,STARTING_RADAR,normalizeRunMode,createRunState};
})();
const __m2 = (() => {
// Statistiche, nature e curve di esperienza (formule dei giochi principali).


const STAT_KEYS = Object.freeze(['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed']);
const STAT_LABELS_IT = Object.freeze({ hp: 'PS', attack: 'ATT', defense: 'DIF', 'special-attack': 'ATT. SP', 'special-defense': 'DIF. SP', speed: 'VEL', accuracy: 'PREC', evasion: 'ELUS' });

// Le 25 nature: [nome, statistica aumentata, statistica ridotta].
const POKEMON_NATURES = Object.freeze([
  ['Ardita', null, null], ['Schiva', 'attack', 'defense'], ['Audace', 'attack', 'speed'], ['Decisa', 'attack', 'special-attack'],
  ['Birbona', 'attack', 'special-defense'], ['Sicura', 'defense', 'attack'], ['Docile', null, null], ['Placida', 'defense', 'speed'],
  ['Scaltra', 'defense', 'special-attack'], ['Fiacca', 'defense', 'special-defense'], ['Timida', 'speed', 'attack'],
  ['Lesta', 'speed', 'defense'], ['Seria', null, null], ['Allegra', 'speed', 'special-attack'], ['Ingenua', 'speed', 'special-defense'],
  ['Modesta', 'special-attack', 'attack'], ['Mite', 'special-attack', 'defense'], ['Quieta', 'special-attack', 'speed'],
  ['Ritrosa', null, null], ['Ardente', 'special-attack', 'special-defense'], ['Calma', 'special-defense', 'attack'],
  ['Gentile', 'special-defense', 'defense'], ['Vivace', 'special-defense', 'speed'], ['Cauta', 'special-defense', 'special-attack'],
  ['Furba', null, null],
]);

function natureStatMultiplier(nature, stat) {
  if (!nature || nature[1] === nature[2]) return 1;
  return nature[1] === stat ? 1.1 : nature[2] === stat ? 0.9 : 1;
}
function pokemonStatValue(base, iv, ev, level, nature, key) {
  const raw = Math.floor((2 * base + iv + Math.floor(ev / 4)) * level / 100);
  return key === 'hp' ? raw + level + 10 : Math.floor((raw + 5) * natureStatMultiplier(nature, key));
}
function statMultiplier(stage) {
  const n = Math.max(-6, Math.min(6, stage || 0));
  return n >= 0 ? (2 + n) / 2 : 2 / (2 - n);
}
function accuracyStageMultiplier(stage) {
  const n = Math.max(-6, Math.min(6, stage || 0));
  return n >= 0 ? (3 + n) / 3 : 3 / (3 - n);
}

// Gruppi di crescita: esperienza TOTALE necessaria per raggiungere un livello.
const GROWTH_RATES = new Set(['erratic', 'fast', 'medium-fast', 'medium-slow', 'slow', 'fluctuating']);
const normalizedGrowthRate = rate => GROWTH_RATES.has(rate) ? rate : 'medium-fast';
function totalExperienceForLevel(rate, level) {
  const n = Math.max(1, Math.min(100, Math.floor(Number(level) || 1)));
  if (n === 1) return 0;
  const n3 = n * n * n;
  let value;
  switch (normalizedGrowthRate(rate)) {
    case 'erratic':
      value = n < 50 ? n3 * (100 - n) / 50 : n < 68 ? n3 * (150 - n) / 100 : n < 98 ? n3 * Math.floor((1911 - 10 * n) / 3) / 500 : n3 * (160 - n) / 100;
      break;
    case 'fast': value = 4 * n3 / 5; break;
    case 'medium-slow': value = 6 * n3 / 5 - 15 * n * n + 100 * n - 140; break;
    case 'slow': value = 5 * n3 / 4; break;
    case 'fluctuating':
      value = n < 15 ? n3 * (Math.floor((n + 1) / 3) + 24) / 50 : n < 36 ? n3 * (n + 14) / 50 : n3 * (Math.floor(n / 2) + 32) / 50;
      break;
    default: value = n3;
  }
  return Math.max(0, Math.floor(value));
}
function experienceForNextLevel(rate, level) {
  const n = Math.max(1, Math.min(100, Math.floor(Number(level) || 1)));
  return n >= 100 ? 0 : totalExperienceForLevel(rate, n + 1) - totalExperienceForLevel(rate, n);
}

return {STAT_KEYS,STAT_LABELS_IT,POKEMON_NATURES,natureStatMultiplier,pokemonStatValue,statMultiplier,accuracyStageMultiplier,normalizedGrowthRate,totalExperienceForLevel,experienceForNextLevel};
})();
const __m3 = (() => {
const { statMultiplier } = __m2;
// Tabelle di gioco: bilanciamento, oggetti, palestre, evoluzioni e sprite.


// ---------------------------------------------------------------- Bilanciamento
const GAME_BALANCE = Object.freeze({
  wildEncounterChance: .20, earlyWildMaxLevel: 3, earlyTrainerMaxLevel: 5, earlyFloors: 5,
  levelPerFloor: .52, expTrainerMultiplier: 1.25, expGymMultiplier: 1.45,
});
const FINAL_FLOOR = 80;
const SHINY_RATE = 2000;
// Probabilità di ciascun uccello leggendario ancora disponibile per passo nell'erba.
const LEGENDARY_BIRD_CHANCE_PER_STEP = 0.0008;
// Medaglie possedute (0–8) → livello massimo e posti in squadra.
// Il limite è 2 livelli sopra il Pokémon più forte del prossimo Capopalestra:
// si può arrivare leggermente avvantaggiati, senza poter livellare all'infinito.
const BADGE_LEVEL_CAPS = Object.freeze([16, 23, 26, 31, 37, 45, 49, 52, 100]);
const BADGE_TEAM_SLOTS = Object.freeze([2, 3, 3, 4, 4, 5, 5, 6, 6]);

const isCityFloor = floor => floor % 10 === 0;
const isTownFloor = floor => floor % 5 === 0;

// ---------------------------------------------------------------- Oggetti
const ITEMS = Object.freeze({
  pokeball: { label: 'Poké Ball', icon: 'pokeball.png', limit: 20, category: 'pokeball' },
  masterball: { label: 'Master Ball', icon: 'master-ball.svg', limit: 1, category: 'pokeball' },
  potion: { label: 'Pozione', icon: 'potion.png', limit: 10, category: 'rimedi', heal: 20 },
  superPotion: { label: 'Superpozione', icon: 'super-potion.png', limit: 10, category: 'rimedi', heal: 50 },
  hyperPotion: { label: 'Iperpozione', icon: 'hyper-potion.png', limit: 10, category: 'rimedi', heal: 200 },
  elixir: { label: 'Elisir', icon: 'elixir.png', limit: 10, category: 'rimedi' },
  abilityCapsule: { label: 'Capsula Abilità', icon: 'ability-capsule.png', limit: 10, category: 'rimedi' },
  waterStone: { label: 'Pietraidrica', icon: 'water-stone.png', limit: 1, category: 'rimedi', evolves: 134 },
  thunderStone: { label: 'Pietratuono', icon: 'thunder-stone.png', limit: 1, category: 'rimedi', evolves: 135 },
  fireStone: { label: 'Pietrafocaia', icon: 'fire-stone.png', limit: 1, category: 'rimedi', evolves: 136 },
  rareCandy: { label: 'Caramella Rara', icon: 'rare-candy.png', category: 'rimedi', dev: true },
  goldCandy: { label: 'Caramella d’Oro', icon: 'gold-candy.png', category: 'rimedi', dev: true },
  fishingRod: { label: 'Canna da Pesca', icon: 'old-rod.png', limit: 1, category: 'chiave' },
  expShare: { label: 'Condividi Esp.', icon: 'exp-share.png', category: 'chiave' },
  radar: { label: 'Radar Scan', icon: 'radar.png' },
});
const BAG_LIMITS = Object.freeze(Object.fromEntries(Object.entries(ITEMS).filter(([, v]) => v.limit).map(([k, v]) => [k, v.limit])));
const itemImage = id => `assets/sprites/items/${(ITEMS[id] || ITEMS.pokeball).icon}`;
const itemLabel = id => ITEMS[id]?.label || id;
const STONE_EVOLUTIONS = Object.freeze({waterStone:134,thunderStone:135,fireStone:136});

// Catalogo del PokéMarket: unica fonte per prezzi, pulsanti e sblocchi.
// Le città sono ai piani 10, 20, …; i villaggi ai piani 5, 15, ….
const SHOP_ITEMS = Object.freeze([
  { id: 'pokeball', price: 200 },
  { id: 'potion', price: 150 },
  { id: 'superPotion', price: 600, unlockFloor: 20 },
  { id: 'hyperPotion', price: 1000, unlockFloor: 50 },
  { id: 'elixir', price: 400 },
  { id: 'abilityCapsule', price: 3000 },
  { id: 'radar', price: 1500 },
]);
const shopItem = id => SHOP_ITEMS.find(item => item.id === id) || null;
function isPokemartItemUnlocked(id, floor) {
  const item = shopItem(id);
  return !item?.unlockFloor || Number(floor) >= item.unlockFloor;
}
// Rimedi trovati sul terreno: la potenza cresce con il piano.
const GROUND_HEALING = Object.freeze([[1, 'potion'], [21, 'superPotion'], [51, 'hyperPotion']]);
const groundHealingItem = floor => [...GROUND_HEALING].reverse().find(([f]) => floor >= f)[1];

// ---------------------------------------------------------------- Sprite
// Sprite di mappa FireRed/LeafGreen (fogli orizzontali 16×32) e ritratti dei dialoghi.
const OVERWORLD_NPCS = Object.freeze(['youngster', 'lass', 'balding_man', 'old_woman', 'cooltrainer_m', 'cooltrainer_f', 'picnicker', 'camper', 'nurse', 'policeman', 'hiker', 'scientist', 'rich_boy', 'sailor', 'gentleman', 'clerk']);
const OVERWORLD_NPC_LABELS = Object.freeze(['Giovane', 'Ragazza', 'Anziano', 'Donna anziana', 'Fantallenatore', 'Fantallenatrice', 'Picnic Girl', 'Campeggiatore', 'Infermiera Joy', 'Poliziotto', 'Montanaro', 'Scienziato', 'Ragazzo ricco', 'Marinaio', 'Gentiluomo', 'Commesso PokéMarket']);
const PORTRAIT_IDS = Object.freeze({ youngster: 1, lass: 2, balding_man: 3, old_woman: 4, cooltrainer_m: 5, cooltrainer_f: 6, picnicker: 7, camper: 8, nurse: 9, policeman: 10, hiker: 11, scientist: 12, rich_boy: 13, sailor: 14, gentleman: 15, clerk: 16, bug_catcher: 17, fisher: 18 });
const OVERWORLD_SHEETS = new Set([...OVERWORLD_NPCS, 'bug_catcher', 'fisher']);
const FALLBACK_AVATAR = 'assets/sprites/ui/trainer-avatar-fallback.svg';
const OAK_MAP_SPRITE = 'assets/sprites/npc/oak-down.png';
const OAK_PORTRAIT = 'assets/sprites/npc/oak-mugshot.png';

function overworldPortraitUrl(name) {
  const index = PORTRAIT_IDS[String(name || '')];
  return index ? `assets/sprites/npc/portraits/OW-${String(index).padStart(2, '0')}.png` : null;
}
function overworldSpriteUrl(name) {
  const key = OVERWORLD_SHEETS.has(String(name || '').trim()) ? String(name).trim() : 'youngster';
  return `assets/sprites/overworld/${key}.png`;
}
const leaderSpriteUrl = gym => `assets/sprites/leaders/${gym.sprite}.png`;
const badgeSprite = index => `assets/sprites/badges/${index + 1}.png`;

/** Converte i percorsi salvati nei checkpoint delle beta precedenti in quelli attuali. */
function resolvedSpritePath(path) {
  const name = String(path || '');
  let m = name.match(/pokefirered\/master\/graphics\/object_events\/pics\/people\/([a-z_]+)\.png$/) ||
    name.match(/^assets\/sprites\/npc\/overworld\/([a-z_]+)\.png$/);
  if (m) return overworldSpriteUrl(m[1]);
  m = name.match(/sprites\/trainers\/([a-z]+)-gen3\.png$/);
  if (m) {
    const gym = KANTO_GYMS.find(g => g.sprite === m[1]);
    if (gym) return leaderSpriteUrl(gym);
    const route = { bugcatcher: 'bug_catcher', youngster: 'youngster', lass: 'lass', acetrainer: 'cooltrainer_m', pokemonranger: 'cooltrainer_f', hiker: 'hiker', camper: 'camper' }[m[1]];
    return overworldPortraitUrl(route) || FALLBACK_AVATAR;
  }
  m = name.match(/PokeAPI\/sprites\/master\/sprites\/pokemon\/(.+\.png)$/);
  if (m) return `assets/pokemon/${m[1]}`;
  m = name.match(/^assets\/sprites\/npc\/ritratti\/(OW-\d{2}\.png)$/);
  if (m) return `assets/sprites/npc/portraits/${m[1]}`;
  if (/oak-(frlg-down|overworld-local)/.test(name)) return OAK_MAP_SPRITE;
  if (/oak-frlg-mugshot/.test(name)) return OAK_PORTRAIT;
  if (/^assets\/(characters|trainers|red|girl)\//.test(name)) {
    const legacy = name.replace('assets/red/', 'assets/sprites/player/red/').replace('assets/girl/', 'assets/sprites/player/girl/');
    return legacy.startsWith('assets/sprites/player/') ? legacy : FALLBACK_AVATAR;
  }
  return name;
}

// ---------------------------------------------------------------- Mosse speciali
const CHARGE_MOVES = new Set(['solar-beam', 'solar-blade', 'fly', 'dig', 'dive', 'bounce', 'sky-attack', 'skull-bash', 'razor-wind', 'shadow-force', 'phantom-force', 'geomancy', 'freeze-shock', 'ice-burn', 'meteor-beam', 'electro-shot', 'sky-drop']);
const RECHARGE_MOVES = new Set(['hyper-beam', 'giga-impact', 'blast-burn', 'hydro-cannon', 'frenzy-plant', 'rock-wrecker', 'roar-of-time', 'prismatic-laser', 'eternabeam']);
const RAMPAGE_MOVES = new Set(['outrage', 'thrash', 'petal-dance']);
const ROLLOUT_MOVES = new Set(['rollout', 'ice-ball']);
const TRAP_MOVES = new Set(['wrap', 'bind', 'clamp', 'fire-spin', 'whirlpool', 'sand-tomb', 'infestation']);
const FORCED_RECHARGE_ACTION = Object.freeze({ id: 'recharge', name: 'Ricarica', priority: 0, currentPp: 1 });
const CHARGE_MESSAGES = Object.freeze({
  'solar-beam': 'assorbe luce solare', 'solar-blade': 'assorbe luce solare', fly: 'si alza in volo', dig: 'si nasconde sottoterra',
  dive: 'si immerge', bounce: 'balza in aria', 'sky-attack': 'prepara Aeroattacco', 'skull-bash': 'ritrae la testa',
  'razor-wind': 'prepara un turbine', 'shadow-force': 'svanisce nell’ombra', 'phantom-force': 'svanisce nell’ombra',
  geomancy: 'accumula energia', 'freeze-shock': 'accumula energia gelida', 'ice-burn': 'accumula energia ardente',
  'meteor-beam': 'assorbe energia cosmica', 'electro-shot': 'assorbe energia elettrica', 'sky-drop': 'si alza in volo',
});
const CHARGE_UNTOUCHABLE = Object.freeze({
  fly: ['gust', 'twister', 'thunder', 'hurricane', 'sky-uppercut', 'smack-down'],
  bounce: ['gust', 'twister', 'thunder', 'hurricane', 'sky-uppercut', 'smack-down'],
  dig: ['earthquake', 'magnitude', 'fissure'], dive: ['surf', 'whirlpool'],
  'phantom-force': [], 'shadow-force': [], 'sky-drop': [],
});

/** Numero di colpi delle mosse multiple (regole dalla 5ª generazione: 35/35/15/15%). */
function rollMultiHitCount(move, random = Math.random) {
  const min = Math.max(1, move.minHits || 1), max = Math.max(min, move.maxHits || min);
  if (min === max) return min;
  const n = Math.min(.99999999, Math.max(0, random()));
  if (min === 2 && max === 5) return n < .35 ? 2 : n < .70 ? 3 : n < .85 ? 4 : 5;
  return min + Math.floor(n * (max - min + 1));
}
/** Autocolpo da confusione: 40 di potenza, fisico, senza tipo. */
function getConfusionDamage(mon, random = Math.random) {
  const attack = mon.attack * statMultiplier(mon.statStages?.attack);
  const defense = Math.max(1, mon.defense * statMultiplier(mon.statStages?.defense));
  return Math.max(1, Math.floor(((2 * mon.level / 5 + 2) * 40 * attack / defense / 50 + 2) * (.85 + random() * .15)));
}
const MAGNITUDE_ROLLS = Object.freeze([
  { level: 4, power: 10, chance: 5 }, { level: 5, power: 30, chance: 10 }, { level: 6, power: 50, chance: 20 },
  { level: 7, power: 70, chance: 30 }, { level: 8, power: 90, chance: 20 }, { level: 9, power: 110, chance: 10 },
  { level: 10, power: 150, chance: 5 },
]);
function rollMagnitude(random = Math.random) {
  const n = Math.max(0, Math.min(99.999, Number(random()) * 100));
  let cumulative = 0;
  for (const outcome of MAGNITUDE_ROLLS) { cumulative += outcome.chance; if (n < cumulative) return outcome; }
  return MAGNITUDE_ROLLS.at(-1);
}
/** Esperienza scalata sul livello, ispirata al sistema dei giochi principali. */
function scaledBattleExperience(baseYield, defeatedLevel, recipientLevel, trainerMultiplier = 1) {
  const base = Math.max(20, Number(baseYield) || 60), enemy = Math.max(1, defeatedLevel), player = Math.max(1, recipientLevel);
  const levelRatio = Math.pow((2 * enemy + 10) / (enemy + player + 10), 2.5);
  return Math.max(1, Math.floor((base * enemy / 7) * levelRatio * trainerMultiplier * 1.36));
}

// ---------------------------------------------------------------- Evoluzioni e incontri
// Evoluzioni di campagna per livello (Eevee usa solo le pietre). [da, a, livello]
const EVOLUTIONS = [
  [1, 2, 16], [2, 3, 32], [4, 5, 16], [5, 6, 36], [7, 8, 16], [8, 9, 36], [10, 11, 7], [11, 12, 10], [13, 14, 7], [14, 15, 10],
  [16, 17, 18], [17, 18, 36], [19, 20, 20], [21, 22, 20], [23, 24, 22], [25, 26, 30], [27, 28, 22], [29, 30, 16], [30, 31, 34],
  [32, 33, 16], [33, 34, 34], [35, 36, 30], [37, 38, 30], [39, 40, 30], [41, 42, 22], [43, 44, 21], [44, 45, 34], [46, 47, 24],
  [48, 49, 31], [50, 51, 26], [52, 53, 28], [54, 55, 33], [56, 57, 28], [58, 59, 35], [60, 61, 25], [61, 62, 38], [63, 64, 16],
  [64, 65, 36], [66, 67, 28], [67, 68, 36], [69, 70, 21], [70, 71, 36], [72, 73, 30], [74, 75, 25], [75, 76, 40], [77, 78, 40],
  [79, 80, 37], [81, 82, 30], [84, 85, 31], [86, 87, 34], [88, 89, 38], [90, 91, 32], [92, 93, 25], [93, 94, 38], [96, 97, 26],
  [98, 99, 28], [100, 101, 30], [102, 103, 32], [104, 105, 28], [109, 110, 35], [111, 112, 42], [116, 117, 32], [118, 119, 33],
  [120, 121, 34], [129, 130, 20], [138, 139, 40], [140, 141, 40], [147, 148, 30], [148, 149, 55],
];
const CAMPAIGN_EVOLUTIONS = new Map();
const PREVIOUS_STAGE = new Map();
for (const [from, to, level] of EVOLUTIONS) {
  if (!CAMPAIGN_EVOLUTIONS.has(from)) CAMPAIGN_EVOLUTIONS.set(from, []);
  CAMPAIGN_EVOLUTIONS.get(from).push(Object.freeze({ id: to, level }));
  PREVIOUS_STAGE.set(to, from);
}
const LEGENDARY = new Set([144, 145, 146, 150, 151]);
const STONE_FAMILY = Object.freeze({133:[134,135,136]});
for (const branch of STONE_FAMILY[133]) PREVIOUS_STAGE.set(branch, 133);
const baseSpecies = id => { let s = Number(id); while (PREVIOUS_STAGE.has(s)) s = PREVIOUS_STAGE.get(s); return s; };
const levelEvolutionOptions = (id, level) => (CAMPAIGN_EVOLUTIONS.get(Number(id)) || []).filter(o => level >= o.level);
/** Tutti i membri della famiglia evolutiva di una specie (per il Pokédex). */
function evolutionFamily(id) {
  const out = [], queue = [baseSpecies(id)];
  while (queue.length) { const s = queue.shift(); out.push(s); queue.push(...(CAMPAIGN_EVOLUTIONS.get(s) || []).map(o => o.id), ...(STONE_FAMILY[s] || [])); }
  return out;
}
/** Stadio evolutivo coerente con il livello; Eevee non evolve più per livello. */
function evolvedEncounterId(id, level, random = Math.random) {
  let species = baseSpecies(id);
  for (;;) {
    const options = levelEvolutionOptions(species, level);
    if (!options.length) return species;
    species = options[Math.min(options.length - 1, Math.floor(random() * options.length))].id;
  }
}
const BASE_SPECIES = [...new Set(Array.from({ length: 151 }, (_, i) => baseSpecies(i + 1)))].filter(id => !LEGENDARY.has(id));
const STARTER_FAMILIES = new Set([1, 4, 7]);
// Specie rare: compaiono dal piano 25; alcune richiedono anche livello ≥ 8.
const RARE_BASE = new Set([95, 106, 107, 113, 115, 122, 123, 124, 125, 126, 127, 128, 131, 132, 133, 137, 138, 140, 142, 143, 147]);
const LATE_LEVEL_BASE = new Set([95, 102, 113, 115, 123, 124, 125, 126, 127, 128, 131, 132, 137, 138, 140, 142, 143, 147]);
const EARLY_ROUTE = [19, 16, 10, 13, 52, 39, 21, 43];
function randomKantoSpecies(level, floor, random = Math.random) {
  if (floor <= 5) return evolvedEncounterId(EARLY_ROUTE[Math.floor(random() * EARLY_ROUTE.length)], level, random);
  const pool = BASE_SPECIES.filter(id => !STARTER_FAMILIES.has(id) && (!RARE_BASE.has(id) || floor >= 25) && (level >= 8 || !LATE_LEVEL_BASE.has(id)));
  return evolvedEncounterId(pool[Math.min(pool.length - 1, Math.floor(random() * pool.length))], level, random);
}
const FISHING_POOL = Object.freeze({ early: [129, 118, 60], late: [129, 118, 60, 116, 72, 120, 90] });

// ---------------------------------------------------------------- Palestre di Kanto
const KANTO_GYMS = Object.freeze([
  { name: 'Brock', badge: 'Sasso', badgeId: 0, specialty: 'ROCCIA', sprite: 'brock', palette: 'brock', pokemon: [74, 95], levels: [12, 14] },
  { name: 'Misty', badge: 'Cascata', badgeId: 1, specialty: 'ACQUA', sprite: 'misty', palette: 'misty', pokemon: [7, 121], levels: [18, 21] },
  { name: 'Lt. Surge', badge: 'Tuono', badgeId: 2, specialty: 'ELETTRO', sprite: 'ltsurge', palette: 'surge', pokemon: [100, 25, 26], levels: [21, 18, 24] },
  { name: 'Erika', badge: 'Arcobaleno', badgeId: 3, specialty: 'ERBA', sprite: 'erika', palette: 'erika', pokemon: [114, 70, 45], levels: [24, 29, 29] },
  { name: 'Koga', badge: 'Anima', badgeId: 4, specialty: 'VELENO', sprite: 'koga', palette: 'koga', pokemon: [109, 89, 110], levels: [32, 34, 35] },
  { name: 'Sabrina', badge: 'Palude', badgeId: 5, specialty: 'PSICO', sprite: 'sabrina', palette: 'sabrina', pokemon: [64, 122, 65], levels: [38, 37, 43] },
  { name: 'Blaine', badge: 'Vulcano', badgeId: 6, specialty: 'FUOCO', sprite: 'blaine', palette: 'blaine', pokemon: [58, 77, 78, 59], levels: [42, 40, 42, 47] },
  { name: 'Giovanni', badge: 'Terra', badgeId: 7, specialty: 'TERRA', sprite: 'giovanni', palette: 'giovanni', pokemon: [111, 51, 31, 34], levels: [45, 42, 44, 50] },
].map(gym => Object.freeze(gym)));
const gymForFloor = floor => KANTO_GYMS[(Math.floor(floor / 10) - 1) % KANTO_GYMS.length];
// Gli allenatori di palestra usano specie del tipo del capopalestra.
const GYM_TRAINER_POOLS = Object.freeze([
  [74, 75, 95, 111], [60, 61, 72, 90, 118, 120], [25, 81, 82, 100, 101], [43, 44, 69, 70, 114],
  [23, 24, 41, 42, 109, 110], [63, 64, 96, 97, 122], [37, 58, 77, 126], [27, 28, 50, 51, 104, 105, 111],
]);
// Classi degli allenatori sui percorsi: [nome, sprite di mappa/ritratto].
const ROUTE_TRAINER_CLASSES = Object.freeze([
  ['Bullo', 'youngster'], ['Pigliamosche', 'bug_catcher'], ['Fantallenatore', 'cooltrainer_m'],
  ['Pokémon Ranger', 'cooltrainer_f'], ['Montanaro', 'hiker'], ['Campeggiatore', 'camper'],
]);

return {GAME_BALANCE,FINAL_FLOOR,SHINY_RATE,LEGENDARY_BIRD_CHANCE_PER_STEP,BADGE_LEVEL_CAPS,BADGE_TEAM_SLOTS,isCityFloor,isTownFloor,ITEMS,BAG_LIMITS,itemImage,itemLabel,STONE_EVOLUTIONS,SHOP_ITEMS,shopItem,isPokemartItemUnlocked,groundHealingItem,OVERWORLD_NPCS,OVERWORLD_NPC_LABELS,FALLBACK_AVATAR,OAK_MAP_SPRITE,OAK_PORTRAIT,overworldPortraitUrl,overworldSpriteUrl,leaderSpriteUrl,badgeSprite,resolvedSpritePath,CHARGE_MOVES,RECHARGE_MOVES,RAMPAGE_MOVES,ROLLOUT_MOVES,TRAP_MOVES,FORCED_RECHARGE_ACTION,CHARGE_MESSAGES,CHARGE_UNTOUCHABLE,rollMultiHitCount,getConfusionDamage,rollMagnitude,scaledBattleExperience,CAMPAIGN_EVOLUTIONS,baseSpecies,levelEvolutionOptions,evolutionFamily,evolvedEncounterId,randomKantoSpecies,FISHING_POOL,KANTO_GYMS,gymForFloor,GYM_TRAINER_POOLS,ROUTE_TRAINER_CLASSES};
})();
const __m4 = (() => {
// Tabella dei tipi moderna (6ª generazione in poi, con Folletto).
const TYPE_CHART = Object.freeze({
  normal: { rock: .5, ghost: 0, steel: .5 },
  fire: { fire: .5, water: .5, grass: 2, ice: 2, bug: 2, rock: .5, dragon: .5, steel: 2 },
  water: { fire: 2, water: .5, grass: .5, ground: 2, rock: 2, dragon: .5 },
  electric: { water: 2, electric: .5, grass: .5, ground: 0, flying: 2, dragon: .5 },
  grass: { fire: .5, water: 2, grass: .5, poison: .5, ground: 2, flying: .5, bug: .5, rock: 2, dragon: .5, steel: .5 },
  ice: { fire: .5, water: .5, grass: 2, ice: .5, ground: 2, flying: 2, dragon: 2, steel: .5 },
  fighting: { normal: 2, ice: 2, poison: .5, flying: .5, psychic: .5, bug: .5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: .5 },
  poison: { grass: 2, poison: .5, ground: .5, rock: .5, ghost: .5, steel: 0, fairy: 2 },
  ground: { fire: 2, electric: 2, grass: .5, poison: 2, flying: 0, bug: .5, rock: 2, steel: 2 },
  flying: { electric: .5, grass: 2, fighting: 2, bug: 2, rock: .5, steel: .5 },
  psychic: { fighting: 2, poison: 2, psychic: .5, dark: 0, steel: .5 },
  bug: { fire: .5, grass: 2, fighting: .5, poison: .5, flying: .5, psychic: 2, ghost: .5, dark: 2, steel: .5, fairy: .5 },
  rock: { fire: 2, ice: 2, fighting: .5, ground: .5, flying: 2, bug: 2, steel: .5 },
  ghost: { normal: 0, psychic: 2, ghost: 2, dark: .5 },
  dragon: { dragon: 2, steel: .5, fairy: 0 },
  dark: { fighting: .5, psychic: 2, ghost: 2, dark: .5, fairy: .5 },
  steel: { fire: .5, water: .5, electric: .5, ice: 2, rock: 2, steel: .5, fairy: 2 },
  fairy: { fire: .5, fighting: 2, poison: .5, dragon: 2, dark: 2, steel: .5 },
});

const TYPE_NAMES_IT = Object.freeze({
  normal: 'NORMALE', fire: 'FUOCO', water: 'ACQUA', electric: 'ELETTRO', grass: 'ERBA', ice: 'GHIACCIO',
  fighting: 'LOTTA', poison: 'VELENO', ground: 'TERRA', flying: 'VOLANTE', psychic: 'PSICO', bug: 'COLEOTTERO',
  rock: 'ROCCIA', ghost: 'SPETTRO', dragon: 'DRAGO', dark: 'BUIO', steel: 'ACCIAIO', fairy: 'FOLLETTO',
  typeless: '???',
});

const typeName = type => TYPE_NAMES_IT[String(type || '').toLowerCase()] || String(type || '').toUpperCase();

function typeEffectiveness(attackType, defendingTypes) {
  return (defendingTypes || []).reduce((value, type) => value * (TYPE_CHART[attackType]?.[type] ?? 1), 1);
}

// Immunità di tipo agli stati alterati (regole dalla 6ª/7ª generazione).
const STATUS_TYPE_IMMUNITY = Object.freeze({
  burn: ['fire'], freeze: ['ice'], paralysis: ['electric'],
  poison: ['poison', 'steel'], 'bad-poison': ['poison', 'steel'],
});
function typeBlocksStatus(types, status) {
  return (STATUS_TYPE_IMMUNITY[status] || []).some(type => (types || []).includes(type));
}

return {TYPE_CHART,TYPE_NAMES_IT,typeName,typeEffectiveness,typeBlocksStatus};
})();
const __m5 = (() => {
const { typeBlocksStatus } = __m4;
// Abilità passive: funzioni pure, senza DOM, usate dal motore di battaglia.


const ability=p=>String(p?.ability||'none');
const normalOptions=species=>[...new Set((species?.abilities||[]).filter(a=>typeof a==='string'))];
const alternatives=(current,options)=>[...new Set((options||[]).filter(a=>typeof a==='string'&&a!==current))];
function stage(p,key,delta){if(!p)return false;p.statStages??={};let old=p.statStages[key]||0;p.statStages[key]=Math.max(-6,Math.min(6,old+delta));return old!==p.statStages[key];}
function restore(p,f){if(!p||p.currentHp<=0)return 0;let h=Math.max(0,Math.min(p.maxHp-p.currentHp,Math.max(1,Math.floor(p.maxHp*f))));p.currentHp+=h;return h;}
function hurt(p,f){if(!p||p.currentHp<=0)return 0;let h=Math.max(1,Math.min(p.currentHp,Math.floor(p.maxHp*f)));p.currentHp-=h;return h;}
const weather=ctx=>ctx?.weather?.type||null;
const suppress=(attacker)=>['mold-breaker','teravolt','turboblaze'].includes(ability(attacker));
function statusBlocked(p,s,ctx={}){
 const a=ability(p),w=weather(ctx);
 return typeBlocksStatus(p?.types,s)||['comatose','purifying-salt'].includes(a)||(a==='leaf-guard'&&w==='sun')||
 (['poison','bad-poison'].includes(s)&&['immunity','pastel-veil'].includes(a))||
 (s==='burn'&&['water-veil','water-bubble'].includes(a))||(s==='paralysis'&&a==='limber')||
 (s==='freeze'&&a==='magma-armor')||(s==='sleep'&&['insomnia','vital-spirit','sweet-veil'].includes(a));
}
function dropBlocked(p,key,fromOpponent=true,ctx={}){
 if(!fromOpponent)return false;const a=ability(p);
 return ['clear-body','white-smoke','full-metal-body'].includes(a)||
 (a==='hyper-cutter'&&key==='attack')||(a==='keen-eye'&&key==='accuracy')||
 (a==='flower-veil'&&p.types?.includes('grass'))||(a==='leaf-guard'&&weather(ctx)==='sun');
}
function speedMultiplier(p,ctx={}){
 let m=1,a=ability(p),w=weather(ctx);
 if(a==='chlorophyll'&&w==='sun'||a==='swift-swim'&&w==='rain'||a==='sand-rush'&&w==='sandstorm'||a==='slush-rush'&&['hail','snow'].includes(w))m*=2;
 if(a==='quick-feet'&&p.status)m*=1.5;
 if(a==='slow-start'&&p.slowStartTurns>0)m*=.5;
 if(a==='unburden'&&p.unburdenActive)m*=2;
 return m;
}
function accuracyMultiplier(attacker,defender,move,ctx={}){
 if(move?.alwaysHits||ability(attacker)==='no-guard'||ability(defender)==='no-guard')return Infinity;
 let m=1,w=weather(ctx);
 if(ability(attacker)==='compound-eyes')m*=1.3;
 if(ability(attacker)==='hustle'&&move?.category==='physical')m*=.8;
 if(ability(defender)==='sand-veil'&&w==='sandstorm')m*=.8;
 if(ability(defender)==='snow-cloak'&&['hail','snow'].includes(w))m*=.8;
 if(ability(defender)==='tangled-feet'&&defender.confusionTurns>0)m*=.5;
 return m;
}
function immunity(attacker,defender,move,ctx={}){
 if(suppress(attacker))return null;
 const a=ability(defender),t=move?.type;
 if(a==='levitate'&&t==='ground')return {kind:'immune'};
 if(a==='volt-absorb'&&t==='electric'||a==='water-absorb'&&t==='water'||a==='dry-skin'&&t==='water'||a==='earth-eater'&&t==='ground')return {kind:'heal',amount:.25};
 if(a==='flash-fire'&&t==='fire')return {kind:'boost',key:'flashFireActivated'};
 if(a==='lightning-rod'&&t==='electric'||a==='motor-drive'&&t==='electric'||a==='storm-drain'&&t==='water'||a==='sap-sipper'&&t==='grass')return {kind:'stage',stat:a==='motor-drive'?'speed':a==='sap-sipper'?'attack':'special-attack'};
 if(a==='soundproof'&&move?.sound||a==='bulletproof'&&move?.ballistic)return {kind:'immune'};
 if(a==='wonder-guard'&&move?.power>0&&ctx.effectiveness<=1)return {kind:'immune'};
 return null;
}
function immuneToSand(mon){return mon.types?.some(t=>['rock','ground','steel'].includes(t))||['sand-veil','sand-rush','sand-force','magic-guard','overcoat'].includes(ability(mon));}
function damageModifiers(attacker,defender,move,ctx={}){
 const a=ability(attacker),d=suppress(attacker)?'none':ability(defender),w=weather(ctx);
 const sp=move.category==='special',ph=move.category==='physical',p=move.power||0,t=move.type,eff=ctx.effectiveness??1;
 const r={attack:1,defense:1,power:1,criticalDamage:1,critStage:0,ignoreScreens:false};
 if(ph&&['huge-power','pure-power'].includes(a))r.attack*=2;
 if(ph&&a==='guts'&&attacker.status)r.attack*=1.5;
 if(ph&&a==='hustle')r.attack*=1.5;
 if(ph&&a==='slow-start'&&attacker.slowStartTurns>0)r.attack*=.5;
 if(sp&&a==='solar-power'&&w==='sun')r.attack*=1.5;
 if(a==='technician'&&p<=60)r.power*=1.5;
 if(a==='iron-fist'&&move.punch)r.power*=1.2;
 if(a==='strong-jaw'&&move.bite)r.power*=1.5;
 if(a==='reckless'&&move.drain<0)r.power*=1.2;
 if(a==='rivalry'&&['male','female'].includes(attacker.gender)&&['male','female'].includes(defender.gender))r.power*=attacker.gender===defender.gender?1.25:.75;
 if(a==='tinted-lens'&&eff>0&&eff<1)r.power*=2;
 if(a==='sand-force'&&w==='sandstorm'&&['rock','ground','steel'].includes(t))r.power*=1.3;
 if(a==='water-bubble'&&t==='water')r.power*=2;
 if(a==='steelworker'&&t==='steel')r.power*=1.5;
 if(a==='analytic'&&ctx.attackingLast)r.power*=1.3;
 if(a==='flash-fire'&&attacker.flashFireActivated&&t==='fire')r.power*=1.5;
 if(attacker.currentHp<=attacker.maxHp/3&&({overgrow:'grass',blaze:'fire',torrent:'water',swarm:'bug'})[a]===t)r.power*=1.5;
 if(a==='sniper')r.criticalDamage*=1.5;
 if(a==='super-luck')r.critStage+=1;
 if(a==='infiltrator')r.ignoreScreens=true;
 if(d==='thick-fat'&&['fire','ice'].includes(t))r.defense*=2;
 if(d==='heatproof'&&t==='fire')r.defense*=2;
 if(d==='dry-skin'&&t==='fire')r.defense*=.8;
 if(d==='water-bubble'&&t==='fire')r.defense*=2;
 if(d==='marvel-scale'&&defender.status&&ph)r.defense*=1.5;
 if(d==='fur-coat'&&ph)r.defense*=2;
 if(d==='ice-scales'&&sp)r.defense*=2;
 if(d==='fluffy'&&move.contact)r.defense*=2;
 if(d==='fluffy'&&t==='fire')r.defense*=.5;
 if(['filter','solid-rock','prism-armor'].includes(d)&&eff>1)r.defense*=4/3;
 if(d==='multiscale'&&defender.currentHp===defender.maxHp)r.defense*=2;
 if(a==='unaware')ctx.ignoreDefenderStages=true;
 if(d==='unaware')ctx.ignoreAttackerStages=true;
 if(w==='sun'&&t==='fire'||w==='rain'&&t==='water')r.power*=1.5;
 if(w==='sun'&&t==='water'||w==='rain'&&t==='fire')r.power*=.5;
 return r;
}
function entry(mon,opp,ctx={}){
 if(!mon||!opp)return [];
 const a=ability(mon),out=[];
 if(a==='trace'&&opp.ability&&opp.ability!=='trace'&&opp.ability!=='none'){
   mon.tracedAbility=mon.ability;mon.ability=opp.ability;mon.abilityName=opp.abilityName||opp.ability;out.push(`${mon.name} copia l'abilità di ${opp.name} con Traccia!`);
 }
 if(a==='intimidate'&&!dropBlocked(opp,'attack',true,ctx)&&!['oblivious','inner-focus','own-tempo','scrappy'].includes(ability(opp))){
   if(stage(opp,'attack',-1))out.push(`Prepotenza di ${mon.name} riduce l'Attacco di ${opp.name}!`);
 }
 if(a==='download'){
   const key=opp.defense<=opp.spDef?'attack':'special-attack';
   if(stage(mon,key,1))out.push(`Download aumenta ${key==='attack'?'Attacco':'Attacco Speciale'} di ${mon.name}!`);
 }
 if(a==='screen-cleaner'){for(const p of [mon,opp]){p.reflectTurns=0;p.lightScreenTurns=0;}out.push('Pulivetro dissolve gli schermi!');}
 const w={drizzle:'rain',drought:'sun','sand-stream':'sandstorm','snow-warning':'hail'}[a];
 if(w){ctx.setWeather?.(w);out.push(`${mon.name} scatena un cambiamento del tempo!`);}
 if(a==='slow-start')mon.slowStartTurns=5;
 if(a==='forewarn'){
  const strongest=[...(opp.moves||[])].sort((x,y)=>(y.power||0)-(x.power||0))[0];
  if(strongest)out.push(`${mon.name} prevede ${strongest.name}!`);
 }
 if(a==='anticipation'&&(opp.moves||[]).some(m=>m.power>0&&ctx.typeEffectiveness?.(m.type,mon.types)>1))out.push(`${mon.name} percepisce un pericolo!`);
 if(a==='frisk')out.push(`${mon.name} osserva ${opp.name} con Indagine!`);
 return out;
}
function afterStatDrop(mon,fromOpponent){
 if(!fromOpponent)return [];let out=[];
 if(mon.ability==='defiant'&&stage(mon,'attack',2))out.push(`${mon.name} aumenta l'Attacco con Agonismo!`);
 if(mon.ability==='competitive'&&stage(mon,'special-attack',2))out.push(`${mon.name} aumenta l'Attacco Speciale con Tenacia!`);
 return out;
}
function contact(attacker,defender,move,damage,ctx={}){
 if(!damage||!move?.contact||attacker.currentHp<=0)return [];
 const a=ability(defender),out=[];
 if(!suppress(attacker)){
  const statuses={static:['paralysis',.3],'poison-point':['poison',.3],'flame-body':['burn',.3]};
  let reaction=statuses[a];
  if(a==='effect-spore')reaction=[['poison','paralysis','sleep'][Math.floor(Math.random()*3)],.3];
  if(reaction&&!attacker.status&&!statusBlocked(attacker,reaction[0],ctx)&&Math.random()<reaction[1]){
   attacker.status=reaction[0];attacker.statusTurns=3;out.push(`${attacker.name} subisce ${defender.abilityName||a}!`);
  }
  if(a==='cute-charm'&&['male','female'].includes(attacker.gender)&&['male','female'].includes(defender.gender)&&attacker.gender!==defender.gender&&!attacker.attractedTo&&defender.ability!=='oblivious'&&Math.random()<.3){
    attacker.attractedTo=defender;out.push(`${attacker.name} si innamora per Incantevole!`);
  }
  if(['rough-skin','iron-barbs'].includes(a)){
    const amount=hurt(attacker,1/8);if(amount)out.push(`${attacker.name} subisce ${amount} danni da ${defender.abilityName||a}!`);
  }
  if(['gooey','tangling-hair'].includes(a)&&stage(attacker,'speed',-1))out.push(`${attacker.name} perde Velocità!`);
  if(a==='weak-armor'&&move.category==='physical'){
    stage(defender,'defense',-1);stage(defender,'speed',2);out.push(`Sottilguscio di ${defender.name} si attiva!`);
  }
  if(a==='stamina'&&stage(defender,'defense',1))out.push(`Sopportazione aumenta la Difesa di ${defender.name}!`);
 }
 if(attacker.ability==='poison-touch'&&!defender.status&&!statusBlocked(defender,'poison',ctx)&&Math.random()<.3){
   defender.status='poison';defender.statusTurns=3;out.push(`Velentocco avvelena ${defender.name}!`);
 }
 return out;
}
function afterKnockout(mon){
 if(mon?.ability==='moxie'&&stage(mon,'attack',1))return `${mon.name} aumenta l'Attacco con Arroganza!`;
 return null;
}
function endTurn(mon,ctx={}){
 if(!mon||mon.currentHp<=0)return [];
 const out=[],a=ability(mon),w=weather(ctx);
 if(a==='speed-boost'&&stage(mon,'speed',1))out.push(`${mon.name} aumenta la Velocità con Acceleratore!`);
 if(a==='shed-skin'&&mon.status&&Math.random()<1/3){mon.status=null;mon.statusTurns=0;out.push(`${mon.name} guarisce grazie a Muta!`);}
 if(a==='hydration'&&w==='rain'&&mon.status){mon.status=null;mon.statusTurns=0;out.push(`${mon.name} guarisce grazie a Idratazione!`);}
 if(a==='rain-dish'&&w==='rain'||a==='ice-body'&&['hail','snow'].includes(w)){
   const hp=restore(mon,1/16);if(hp)out.push(`${mon.name} recupera ${hp} PS grazie a ${mon.abilityName||a}!`);
 }
 if(a==='dry-skin'){
  if(w==='rain'){const hp=restore(mon,1/8);if(hp)out.push(`${mon.name} recupera ${hp} PS con Pellearsa!`);}
  if(w==='sun'){const hp=hurt(mon,1/8);if(hp)out.push(`${mon.name} perde ${hp} PS con Pellearsa!`);}
 }
 if(a==='solar-power'&&w==='sun'){const hp=hurt(mon,1/8);if(hp)out.push(`${mon.name} perde ${hp} PS per Solarpotere!`);}
 if(a==='poison-heal'&&['poison','bad-poison'].includes(mon.status)){
  const hp=restore(mon,1/8);if(hp)out.push(`${mon.name} recupera ${hp} PS con Velencura!`);
 }
 if(mon.slowStartTurns>0)mon.slowStartTurns--;
 return out;
}



return {normalOptions,alternatives,stage,restore,hurt,statusBlocked,dropBlocked,speedMultiplier,accuracyMultiplier,immunity,immuneToSand,damageModifiers,entry,afterStatDrop,contact,afterKnockout,endTurn,suppress};
})();
const __m6 = (() => {
const { speciesData, moveData, abilityName, pokemonSprite, allMoveIds } = __m0;
const { typeEffectiveness } = __m4;
const { SHINY_RATE, levelEvolutionOptions } = __m3;
const {
  STAT_KEYS, POKEMON_NATURES, pokemonStatValue, statMultiplier, normalizedGrowthRate, experienceForNextLevel,
} = __m2;
const Abilities = __m5;
// Pokémon, mosse e calcolo dei danni con le regole moderne
// (divisione fisico/speciale per mossa, brutti colpi ×1,5, tabella tipi con Folletto).






// Semantica delle mosse che i dati PokéAPI non descrivono in modo utilizzabile dal motore.
const MOVE_EFFECTS = Object.freeze({
  'light-screen': { screen: 'special' }, reflect: { screen: 'physical' },
  'future-sight': { delayedHit: true }, 'doom-desire': { delayedHit: true },
  'self-destruct': { selfKo: true }, explosion: { selfKo: true },
  'focus-energy': { focusEnergy: true }, haze: { resetStages: true }, mist: { mist: true }, safeguard: { safeguard: true },
  'psych-up': { copyStages: true }, 'belly-drum': { maxAttackHalfHp: true },
  'heal-bell': { cureTeam: true }, aromatherapy: { cureTeam: true }, refresh: { cureStatus: true },
  roar: { disengage: true }, whirlwind: { disengage: true },
  'leech-seed': { ailment: null, ailmentChance: 0 },
  toxic: { ailment: 'bad-poison' }, 'poison-fang': { ailment: 'bad-poison' },
  protect: { ailment: null, protects: true }, detect: { ailment: null, protects: true },
  rest: { healing: 100 },
});
// Gli unici stati che il motore applica; il resto dei dati "ailment" (trappole, ecc.)
// è gestito da logiche dedicate o ignorato.
const BATTLE_AILMENTS = new Set(['poison', 'bad-poison', 'burn', 'paralysis', 'sleep', 'freeze', 'confusion', 'infatuation']);
// Mosse che Metronomo non può richiamare.
const METRONOME_EXCLUDED = new Set(['metronome', 'struggle', 'sleep-talk', 'protect', 'detect', 'mirror-move', 'counter', 'mimic', 'transform', 'assist']);

class Move {
  constructor(id, data) {
    this.id = id;
    this.name = data.name;
    this.type = data.type;
    this.category = data.category;
    this.power = data.power || 0;
    this.maxPp = data.pp || 1;
    this.currentPp = this.maxPp;
    this.accuracy = data.accuracy ?? 100;
    this.alwaysHits = data.accuracy == null && data.category !== 'status' ? true : Boolean(data.alwaysHits);
    this.priority = data.priority || 0;
    this.critRate = data.critRate || 0;
    this.statTarget = data.target || null;
    this.ailment = BATTLE_AILMENTS.has(data.ailment) ? data.ailment : null;
    this.ailmentChance = data.ailmentChance || (this.ailment && !this.power ? 100 : 0);
    this.drain = data.drain || 0;
    this.healing = data.healing || 0;
    this.flinchChance = data.flinchChance || 0;
    this.minHits = data.minHits || 1;
    this.maxHits = data.maxHits || this.minHits;
    const chance = data.statChance || data.effectChance || 100;
    this.statChanges = (data.statChanges || []).map(([stat, stage]) => ({ stat, stage, chance }));
    const flags = new Set(data.flags || []);
    for (const flag of ['contact', 'punch', 'bite', 'sound', 'ballistic', 'powder']) this[flag] = flags.has(flag);
    Object.assign(this, MOVE_EFFECTS[id] || {});
  }
}

/** Crea una mossa dai dati locali. Mosse sconosciute diventano un'Azione senza effetti. */
function createMove(moveId) {
  const id = String(moveId || '').toLowerCase();
  const data = moveData(id);
  if (!data) return Object.assign(new Move(id, { name: id.replaceAll('-', ' ').toUpperCase(), type: 'normal', category: 'status', pp: 1 }), { unsupported: true });
  return new Move(id, data);
}
/** Ricrea una mossa salvata in un checkpoint mantenendone i PP residui. */
function restoreMove(saved) {
  const move = createMove(saved?.id);
  if (Number.isFinite(saved?.currentPp)) move.currentPp = Math.max(0, Math.min(move.maxPp, saved.currentPp));
  return move;
}
function randomMetronomeMove(random = Math.random) {
  const ids = allMoveIds().filter(id => !METRONOME_EXCLUDED.has(id));
  return createMove(ids[Math.floor(random() * ids.length)]);
}

function rollGender(genderRate, random = Math.random) {
  if (genderRate === -1) return 'genderless';
  const rate = Number.isInteger(genderRate) && genderRate >= 0 && genderRate <= 8 ? genderRate : 4;
  return random() < rate / 8 ? 'female' : 'male';
}
function applySprites(mon) {
  mon.spriteFront = pokemonSprite(mon.id, { shiny: mon.isShiny, gender: mon.gender });
  mon.spriteBack = pokemonSprite(mon.id, { back: true, shiny: mon.isShiny, gender: mon.gender });
}
const VALID_GENDERS = new Set(['male', 'female', 'genderless']);

class Pokemon {
  /**
   * @param {object} species  record di data/pokemon.json
   * @param {number} level
   * @param {{gender?:string,isShiny?:boolean}} traits  tratti già decisi (non vengono ritirati)
   */
  constructor(species, level = 5, traits = {}) {
    this.level = Math.min(100, Math.max(1, Math.floor(level)));
    this.gender = VALID_GENDERS.has(traits.gender) ? traits.gender : rollGender(species.genderRate);
    this.isShiny = typeof traits.isShiny === 'boolean' ? traits.isShiny : Math.random() < 1 / SHINY_RATE;
    this.ivs = Object.fromEntries(STAT_KEYS.map(k => [k, Math.floor(Math.random() * 32)]));
    this.evs = Object.fromEntries(STAT_KEYS.map(k => [k, 0]));
    this.nature = POKEMON_NATURES[Math.floor(Math.random() * POKEMON_NATURES.length)];
    this.setSpecies(species);
    this.ability = this.abilityOptions[Math.floor(Math.random() * this.abilityOptions.length)] || 'none';
    this.abilityName = abilityName(this.ability);
    this.exp = 0;
    this.expToNext = this.requiredExp();
    this.status = null; this.statusTurns = 0;
    this.clearVolatile();
    this.calcStats();
    this.currentHp = this.maxHp;
    this.moves = this.learnset.filter(m => m.level <= this.level).slice(-4).map(m => createMove(m.id));
    if (!this.moves.length) this.moves = [createMove('tackle')];
  }

  /** Dati di specie (usato alla creazione, all'evoluzione e al caricamento dei checkpoint). */
  setSpecies(species) {
    this.id = species.id;
    this.name = species.name.toUpperCase();
    this.types = [...species.types];
    this.type = this.types[0] || 'normal';
    this.growthRate = normalizedGrowthRate(species.growth);
    this.baseExperience = species.baseExp || 65;
    this.weight = species.weight ?? null;
    this.baseStats = { ...species.stats };
    this.evYield = { ...species.evYield };
    this.abilityOptions = [...species.abilities];
    this.learnset = species.learnset.map(([level, id]) => ({ id, level }));
    applySprites(this);
  }

  requiredExp() { return experienceForNextLevel(this.growthRate, this.level); }

  calcStats() {
    const val = key => pokemonStatValue(this.baseStats[key] ?? 50, this.ivs[key] ?? 0, this.evs[key] ?? 0, this.level, this.nature, key);
    this.maxHp = val('hp');
    this.attack = val('attack'); this.defense = val('defense');
    this.spAtk = val('special-attack'); this.spDef = val('special-defense');
    this.speed = val('speed');
  }

  gainEffortValues(yieldStats) {
    if (!yieldStats) return false;
    let total = Object.values(this.evs).reduce((a, b) => a + b, 0), changed = false;
    for (const stat of STAT_KEYS) {
      const amount = Math.min(Math.max(0, yieldStats[stat] || 0), 252 - this.evs[stat], 510 - total);
      if (amount > 0) { this.evs[stat] += amount; total += amount; changed = true; }
    }
    if (changed) { const before = this.maxHp; this.calcStats(); this.currentHp = Math.min(this.maxHp, this.currentHp + this.maxHp - before); }
    return changed;
  }

  getStatsSummary() {
    return { hp: this.maxHp, attack: this.attack, defense: this.defense, 'special-attack': this.spAtk, 'special-defense': this.spDef, speed: this.speed };
  }

  /** Compatibilità: le mosse sono già disponibili in locale. */
  async loadLearnset() {}

  async gainExperience(amount, levelCap = 100, chooseEvolution = null) {
    const levels = [];
    const cap = Math.max(1, Math.min(100, Math.floor(Number(levelCap) || 100)));
    // L'esperienza non si accumula oltre il limite di livello delle medaglie.
    if (this.level >= cap) { this.exp = 0; if (this.level >= 100) this.expToNext = 0; return levels; }
    this.exp += Math.max(0, Math.floor(Number(amount) || 0));
    while (this.level < cap && this.exp >= this.expToNext) {
      this.exp -= this.expToNext;
      const oldHp = this.maxHp;
      this.level++; this.expToNext = this.requiredExp(); this.calcStats();
      this.currentHp = Math.min(this.maxHp, this.currentHp + (this.maxHp - oldHp));
      const event = { level: this.level, moves: this.learnset.filter(m => m.level === this.level).map(m => createMove(m.id)) };
      const evolution = await this.tryEvolution(chooseEvolution);
      if (evolution) {
        event.evolution = evolution;
        // Mosse evolutive (livello 0) del nuovo stadio, come nei giochi moderni.
        event.moves.push(...this.learnset.filter(m => m.level === 0).map(m => createMove(m.id)));
      }
      levels.push(event);
    }
    if (this.level >= cap) { this.exp = 0; if (this.level >= 100) this.expToNext = 0; }
    return levels;
  }

  async tryEvolution(chooseEvolution = null) {
    const options = levelEvolutionOptions(this.id, this.level);
    if (!options.length) return null;
    let selected = options[0];
    if (options.length > 1) {
      if (typeof chooseEvolution !== 'function') return null;
      const destination = await chooseEvolution(options, this);
      selected = options.find(option => option.id === Number(destination));
      if (!selected) return null; // rimandata al prossimo livello
    }
    return this.evolveToSpecies(selected.id);
  }

  /** Evoluzione esplicita (es. pietra): il livello non ha alcun ruolo. */
  evolveToSpecies(destinationId) {
    const species = speciesData(destinationId);
    if (!species) return null;
    const oldHp = this.maxHp, from = { name: this.name, sprite: this.spriteFront };
    this.setSpecies(species);
    if (!this.abilityOptions.includes(this.ability)) this.ability = this.abilityOptions[0] || this.ability;
    this.abilityName = abilityName(this.ability);
    this.calcStats();
    this.currentHp = Math.min(this.maxHp, this.currentHp + this.maxHp - oldHp);
    return { from: from.name, to: this.name, fromSprite: from.sprite, toSprite: this.spriteFront };
  }

  restorePp() { this.moves.forEach(m => { m.currentPp = m.maxPp; }); }

  clearVolatile() {
    if (this.tracedAbility) { this.ability = this.tracedAbility; this.abilityName = abilityName(this.ability); this.tracedAbility = null; }
    Object.assign(this, {
      attractedTo: null, flinchedThisTurn: false, confusionTurns: 0, toxicTurns: 0, statStages: {}, seeded: false,
      nightmareActive: false, ghostCurseActive: false, destinyBondActive: false, meanLookSource: null, lastUsedMoveId: null,
      furyCutterHits: 0, trappedTurns: 0, trapMove: null, trapSource: null, pendingCharge: null, rechargeTurns: 0,
      rampageTurns: 0, rampageMove: null, rolloutTurns: 0, rolloutHits: 0, rolloutMove: null, defenseCurlUsed: false,
      lightScreenTurns: 0, reflectTurns: 0, safeguardTurns: 0, mistTurns: 0, focusEnergyActive: false, futureSight: null,
      protectedThisTurn: false, protectStreak: 0, flashFireActivated: false,
    });
  }
  clearBattleConditions() { this.clearVolatile(); this.status = null; this.statusTurns = 0; }
  healAll() { this.currentHp = this.maxHp; this.restorePp(); this.clearBattleConditions(); }

  /** Ricostruisce un Pokémon da un checkpoint, aggiornando specie, mosse e sprite ai dati attuali. */
  static fromSnapshot(saved) {
    const mon = Object.assign(Object.create(Pokemon.prototype), saved);
    const species = speciesData(saved.id);
    if (!VALID_GENDERS.has(mon.gender)) mon.gender = 'unknown';
    if (typeof mon.isShiny !== 'boolean') mon.isShiny = false;
    if (species) {
      const keep = { ability: mon.ability };
      mon.setSpecies(species);
      if (!mon.abilityOptions.includes(keep.ability) && keep.ability !== 'none') mon.abilityOptions.push(keep.ability);
      mon.ability = keep.ability || mon.abilityOptions[0] || 'none';
      mon.abilityName = abilityName(mon.ability);
      const hpRatio = mon.maxHp ? mon.currentHp / mon.maxHp : 1;
      mon.calcStats();
      mon.treatedFaint = saved.treatedFaint === true && saved.currentHp > 0;
      mon.currentHp = Math.max(saved.currentHp > 0 ? 1 : 0, Math.min(mon.maxHp, Math.round(mon.maxHp * hpRatio)));
    }
    mon.moves = (saved.moves || []).map(restoreMove);
    if (!mon.moves.length) mon.moves = [createMove('tackle')];
    mon.status = saved.status ?? null; mon.statusTurns = saved.statusTurns || 0;
    mon.clearVolatile();
    return mon;
  }
}

/** Danno di una mossa (formula dalla 6ª generazione in poi). */
function calculateBattleDamage(attacker, defender, move, random = Math.random, context = {}) {
  const effectiveness = typeEffectiveness(move.type, defender.types);
  if (!move.power || effectiveness === 0) return { damage: 0, effectiveness, critical: false };
  const special = move.category === 'special';
  const settings = { weather: context.weather || null, effectiveness, attackingLast: context.attackingLast || false };
  const effects = Abilities.damageModifiers(attacker, defender, move, settings);
  const defenderAbility = Abilities.suppress(attacker) ? 'none' : defender.ability;
  // Probabilità di brutto colpo per grado: 1/24, 1/8, 1/2, sempre.
  const critStage = Math.min(3, (move.critRate || 0) + (attacker.focusEnergyActive ? 2 : 0) + (effects.critStage || 0));
  const critical = !['battle-armor', 'shell-armor'].includes(defenderAbility) && random() < [1 / 24, 1 / 8, 1 / 2, 1][critStage];
  const attackStat = special ? attacker.spAtk : attacker.attack;
  const defenseStat = special ? defender.spDef : defender.defense;
  const attackStage = attacker.statStages?.[special ? 'special-attack' : 'attack'] || 0;
  const defenseStage = defender.statStages?.[special ? 'special-defense' : 'defense'] || 0;
  const attack = attackStat * effects.attack * statMultiplier(settings.ignoreAttackerStages ? 0 : critical ? Math.max(0, attackStage) : attackStage);
  const defense = Math.max(1, defenseStat * effects.defense * statMultiplier(settings.ignoreDefenderStages ? 0 : critical ? Math.min(0, defenseStage) : defenseStage));
  const stab = attacker.types.includes(move.type) ? (attacker.ability === 'adaptability' ? 2 : 1.5) : 1;
  const power = Math.max(1, move.power) * effects.power;
  const burned = attacker.status === 'burn' && !special && attacker.ability !== 'guts' ? .5 : 1;
  const base = (((2 * attacker.level / 5 + 2) * power * attack / defense) / 50 + 2) * burned;
  const screened = !critical && !effects.ignoreScreens && (special ? defender.lightScreenTurns > 0 : defender.reflectTurns > 0);
  const damage = Math.max(1, Math.floor(base * (screened ? .5 : 1) * (critical ? 1.5 * effects.criticalDamage : 1) * stab * effectiveness * (.85 + random() * .15)));
  return { damage, effectiveness, critical };
}

return {Move,createMove,restoreMove,randomMetronomeMove,rollGender,applySprites,Pokemon,calculateBattleDamage};
})();
const __m7 = (() => {
const { normalizeRunMode } = __m1;
const { Pokemon } = __m6;
// Checkpoint versionati della run (localStorage + sincronizzazione cloud opzionale).
// Uno snapshot contiene solo lo stato di gioco, mai credenziali.
// Una run conclusa (game over o vittoria) resta salvata come "chiusa" e non si può continuare.



const KEY = 'pokexplorer:checkpoint:v2';
const MAX_BYTES = 950000;
const memory = new Map();
const memoryStorage = { getItem: k => memory.get(k) ?? null, setItem: (k, v) => memory.set(k, v), removeItem: k => memory.delete(k) };

function resolveStorage() {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('pokex:probe', '1'); localStorage.removeItem('pokex:probe');
      return localStorage;
    }
  } catch { /* modalità privata o file:// */ }
  return memoryStorage;
}

let owner = 'local';
let guestMode = false;
const primaryKey = () => `${KEY}:${owner}`;
const backupKey = () => `${primaryKey()}:previous`;

/** Modalità UTENTE: nessun salvataggio permanente e nessun accesso ai dati di altri profili. */
function setGuestMode(active) { guestMode = active === true; if (guestMode) owner = 'guest'; else if (owner === 'guest') owner = 'local'; }
const isGuestMode = () => guestMode;
function setUser(userId) { owner = typeof userId === 'string' && /^[0-9a-f-]{36}$/i.test(userId) ? userId : 'local'; }

// Campi della run salvati nel checkpoint (vedi systems/run-state.js).
const SAVED_FIELDS = Object.freeze(['floor', 'money', 'playerPos', 'playerGender', 'playerFacing', 'items', 'radarCharges', 'badges',
  'expShareEnabled', 'expShareClaimed', 'fishingRodGiftClaimed', 'eeveeStoneGiftClaimed', 'adventureCompleted', 'oakEventDismissed', 'celestialPhase',
  'caughtLegendarySpecies', 'completedGymFloors', 'gridMap', 'team', 'activeIndex', 'soloRunEligible', 'soloRunTracked', 'devRun',
  'runMode', 'runStats', 'floorKind']);
const POKEMON_FIELDS = Object.freeze(['id', 'name', 'level', 'gender', 'isShiny', 'ivs', 'evs', 'nature', 'ability', 'exp', 'expToNext',
  'maxHp', 'currentHp', 'status', 'statusTurns', 'treatedFaint', 'moves']);

const clone = value => JSON.parse(JSON.stringify(value ?? null));
const serializePokemon = p => Object.fromEntries(POKEMON_FIELDS.map(k => [k,
  k === 'moves' ? p.moves.map(m => ({ id: m.id, currentPp: m.currentPp })) : clone(p[k])]));

/**
 * Fotografa la run. Fuori dalla lotta solo in momenti sicuri; con {battle:true}
 * registra lo stato durante una lotta (danni e Pokémon persi), così che abbandonare
 * la pagina o tornare al menu non annulli una sconfitta.
 */
function take(game, { battle = false, expedition = false, pendingFaint = null, now = new Date().toISOString() } = {}) {
  if (guestMode || !game?.team?.length || !game.gridMap?.length) return null;
  if (!expedition && (game.isCelestialCave || game.pendingItemTarget)) return null;
  if (!battle && !expedition && (game.isLocked || game.battleBusy || game.isRaidActive)) return null;
  const g = {};
  for (const key of SAVED_FIELDS) {
    if (key === 'activeIndex') g.activeIndex = Math.max(0, game.team.indexOf(game.activeMon));
    else if (key === 'team') g.team = game.team.map(serializePokemon);
    else if (key === 'caughtLegendarySpecies' || key === 'completedGymFloors') g[key] = [...(game[key] || [])];
    else g[key] = clone(game[key]);
  }
  if (pendingFaint && pendingFaint.currentHp <= 0 && game.team.includes(pendingFaint)) {
    const nuzlocke = normalizeRunMode(game.runMode) === 'nuzlocke';
    const index = game.team.indexOf(pendingFaint);
    if (nuzlocke) {
      g.team.splice(index, 1);
      if (!g.team.length) return ended(game.runId, 'defeat', now);
      g.activeIndex = 0;
    } else g.team[index].treatedFaint = false;
    g.runStats?.fallen?.push({name:pendingFaint.name,id:pendingFaint.id,level:pendingFaint.level,
      floor:g.floor,by:game.enemyMon?.name||'',lost:nuzlocke});
  }
  if (expedition) {
    // Abbandonare la spedizione equivale a perderla, secondo le regole della modalità.
    const normal = game.runMode === 'normal';
    g.team = (game.celestialReserve || []).map(serializePokemon);
    if (normal) g.team.push(...game.team.map(p => ({ ...serializePokemon(p), currentHp: 0, treatedFaint: false })));
    g.activeIndex = 0;
    g.celestialPhase = 'unvisited';
    g.oakEventDismissed = false;
    g.celestialLost = normal ? [] : game.team.map(p => p.name);
    g.runStats?.fallen?.push(...game.team.map(p => ({name:p.name,id:p.id,level:p.level,floor:g.floor,by:'Spedizione interrotta',lost:!normal})));
    g.celestialAbandoned = true;
  }
  return validate({ version: 2, createdAt: now, runId: game.runId || `run-${Date.now()}`, interrupted: battle || undefined, game: g });
}

/** Snapshot di una run conclusa: impedisce di riprenderla, sia in locale sia dal cloud. */
function ended(runId, reason, now = new Date().toISOString()) {
  return validate({ version: 2, createdAt: now, runId: String(runId || `run-${Date.now()}`), ended: reason === 'victory' ? 'victory' : 'defeat' });
}
const isEnded = snapshot => Boolean(snapshot?.ended);

const validMon = p => p && Number.isInteger(p.id) && p.id >= 1 && p.id <= 151 && Number.isInteger(p.level) && p.level >= 1 && p.level <= 100 &&
  Number.isFinite(p.currentHp) && p.currentHp >= 0 && Array.isArray(p.moves) && p.moves.length <= 4;

function validate(s) {
  if (!s || s.version !== 2 || !Number.isFinite(Date.parse(s.createdAt)) || typeof s.runId !== 'string') throw Error('Invalid checkpoint format');
  if (s.ended) {
    if (!['victory', 'defeat'].includes(s.ended)) throw Error('Invalid ended state');
    return clone({ version: 2, createdAt: s.createdAt, runId: s.runId, ended: s.ended });
  }
  const g = s.game;
  if (!g) throw Error('Invalid checkpoint format');
  if (!Number.isInteger(g.floor) || g.floor < 1 || g.floor > 80 || !Number.isSafeInteger(g.money) || g.money < 0) throw Error('Invalid progression');
  if (!Array.isArray(g.team) || g.team.length < 1 || g.team.length > 6 || !g.team.every(validMon)) throw Error('Invalid party');
  if (g.team.some(p => p.gender != null && !['male', 'female', 'genderless', 'unknown'].includes(p.gender))) throw Error('Invalid variant data');
  if (!Number.isInteger(g.activeIndex) || g.activeIndex < 0 || g.activeIndex >= g.team.length) throw Error('Invalid lead');
  if (!Array.isArray(g.gridMap) || g.gridMap.length !== 10 || g.gridMap.some(row => !Array.isArray(row) || row.length !== 10)) throw Error('Invalid map');
  if (!g.playerPos || ![g.playerPos.x, g.playerPos.y].every(v => Number.isInteger(v) && v >= 0 && v < 10)) throw Error('Invalid position');
  if (!g.items || typeof g.items !== 'object' || Object.values(g.items).some(v => typeof v !== 'boolean' && (!Number.isSafeInteger(v) || v < 0))) throw Error('Invalid inventory');
  if (!Array.isArray(g.badges) || g.badges.length > 8 || !Array.isArray(g.completedGymFloors) || !Array.isArray(g.caughtLegendarySpecies)) throw Error('Invalid progress');
  const copy = clone(s);
  if (JSON.stringify(copy).length > MAX_BYTES) throw Error('Checkpoint too large');
  return copy;
}

/** Ultimo snapshot valido, comprese le run concluse. */
function loadRaw(storage = resolveStorage()) {
  if (guestMode) return null;
  for (const key of [primaryKey(), backupKey()]) {
    const raw = storage.getItem(key);
    if (!raw) continue;
    try { return validate(JSON.parse(raw)); } catch { /* prova il checkpoint precedente */ }
  }
  return null;
}
/** Checkpoint da cui si può continuare (null se assente o se la run è conclusa). */
function load(storage) {
  const snapshot = loadRaw(storage);
  return snapshot && !snapshot.ended ? snapshot : null;
}
function save(snapshot, storage = resolveStorage()) {
  if (guestMode) return false;
  const checked = JSON.stringify(validate(snapshot));
  const previous = storage.getItem(primaryKey());
  if (previous && !snapshot.ended) {
    try { if (!JSON.parse(previous).ended) storage.setItem(backupKey(), previous); } catch { /* backup non valido */ }
  }
  if (snapshot.ended) storage.removeItem(backupKey());
  storage.setItem(primaryKey(), checked);
  return true;
}

function progress(snapshot) {
  const s = validate(snapshot);
  if (s.ended) return { ended: s.ended, date: s.createdAt };
  const g = s.game;
  return { floor: g.floor, badges: g.badges.length, money: g.money, pokemon: g.team.length, date: s.createdAt, mode: normalizeRunMode(g.runMode) };
}
function describe(snapshot) {
  if (!snapshot) return 'nessun salvataggio';
  const p = progress(snapshot);
  const date = new Date(p.date).toLocaleString('it-IT', { dateStyle: 'short', timeStyle: 'short' });
  return p.ended ? `run conclusa (${p.ended === 'victory' ? 'vittoria' : 'sconfitta'}) · ${date}`
    : `piano ${p.floor}/80 · ${p.badges} medaglie · ${p.pokemon} Pokémon · ${p.mode === 'normal' ? 'Normale' : 'Nuzlocke'} · ${date}`;
}

/** Ripristina la run: i Pokémon vengono ricostruiti con i dati attuali di specie e mosse. */
function restoreInto(game, snapshot) {
  if (guestMode) return false;
  const s = validate(snapshot);
  if (s.ended) return false;
  const data = s.game;
  const mode = normalizeRunMode(data.runMode);
  const originalTeam = data.team.map(Pokemon.fromSnapshot);
  const team = mode === 'normal' ? originalTeam : originalTeam.filter(p => p.currentHp > 0);
  game.resetRunState();
  for (const key of SAVED_FIELDS) {
    if (key === 'team' || key === 'items' || key === 'activeIndex' || data[key] === undefined) continue;
    game[key] = key === 'caughtLegendarySpecies' || key === 'completedGymFloors' ? new Set(data[key]) : clone(data[key]);
  }
  // Non reintrodurre oggetti rimossi dai salvataggi precedenti.
  for (const id of Object.keys(game.items)) if (Object.prototype.hasOwnProperty.call(data.items, id)) game.items[id] = data.items[id];
  game.team = team;
  game.activeMon = team.includes(originalTeam[data.activeIndex]) ? originalTeam[data.activeIndex] : (team[0] || null);
  game.runId = s.runId;
  // Le vecchie run non tracciavano la vittoria con un solo Pokémon: non va inventata.
  game.soloRunEligible = data.soloRunEligible === true && data.soloRunTracked === true && team.length === 1;
  game.soloRunTracked = data.soloRunTracked === true;
  game.devRun = data.devRun === true;
  game.runMode = mode;
  game.floorKind = ['calm', 'trainers'].includes(data.floorKind) ? data.floorKind : null;
  return { interrupted: Boolean(s.interrupted), caveAbandoned: data.celestialAbandoned === true, lostInCave: Array.isArray(data.celestialLost) ? data.celestialLost.map(String) : [] };
}

return {setGuestMode,isGuestMode,setUser,SAVED_FIELDS,take,ended,isEnded,validate,loadRaw,load,save,progress,describe,restoreInto};
})();
const __m8 = (() => {
const { allSpecies } = __m0;
// Pokédex di Kanto: registro permanente delle scoperte per account (locale + Supabase).
// Nessuna chiave segreta nel client; in modalità UTENTE i dati restano temporanei.


const root = globalThis;
const PREFIX='pokexplorer:dex:v1:', MAX_SPECIES=151;
function validId(id){return Number.isInteger(Number(id))&&Number(id)>=1&&Number(id)<=MAX_SPECIES;}
function variantKey(id,sex,shiny){return `${Number(id)}:${sex}:${shiny?'1':'0'}`;}
const genders=['male','female','genderless'];
function validVariant(v){return validId(v?.species_id)&&genders.includes(v.sex)&&typeof v.shiny==='boolean';}
const dateValue=x=>x&&Number.isFinite(Date.parse(x))?Date.parse(x):Infinity;
function earliest(a,b){return dateValue(a)<=dateValue(b)?(a||b):(b||a);}
function mergeRow(a,b){
  if(!a)return {...b};if(!b)return {...a};
  const seen=earliest(a.first_seen_at,b.first_seen_at);
  const caught=earliest(a.first_caught_at,b.first_caught_at);
  const srcSeen=seen===b.first_seen_at?b:a;
  const srcCaught=caught===b.first_caught_at?b:a;
  return {...a,...b,first_seen_at:seen||null,first_caught_at:caught||null,
    first_seen_context:srcSeen.first_seen_context||a.first_seen_context||b.first_seen_context||null,
    first_caught_context:srcCaught.first_caught_context||a.first_caught_context||b.first_caught_context||null,
    imported_from_legacy:!!(a.imported_from_legacy||b.imported_from_legacy)};
}
let owner='local', guest=false, devPreview=false, data={species:{},variants:{},pending:[]};
const previewTimestamp = '2026-01-01T00:00:00.000Z';
function previewSpecies(id) {
  const species = allSpecies().find(s => s.id === Number(id));
  return species ? {species_id:species.id,name:species.name,first_seen_at:previewTimestamp,first_caught_at:previewTimestamp,first_seen_context:'DEV · ANTEPRIMA',first_caught_context:'DEV · ANTEPRIMA'} : null;
}
function previewVariants(id) {
  const species = allSpecies().find(s => s.id === Number(id));
  if (!species) return [];
  const sexes = species.genderRate === -1 ? ['genderless'] : species.genderRate === 0 ? ['male'] : species.genderRate === 8 ? ['female'] : ['male','female'];
  return sexes.flatMap(sex => [false,true].map(shiny => ({...previewSpecies(id),sex,shiny})));
}
function setPreview(enabled) { devPreview = enabled === true; notify(); }

let flushPromise=null, client=null, lastError=null, syncStatus='local';
function key(){return PREFIX+owner;}
function storage(){try{return root.localStorage||null;}catch(_){return null;}}
function read(){
  if(guest)return {species:{},variants:{},pending:[]};
  try{
    const parsed=JSON.parse(storage()?.getItem(key())||'null');
    if(parsed&&parsed.species&&parsed.variants&&Array.isArray(parsed.pending))return parsed;
  }catch(_){/* privacy/storage blocked */}
  return {species:{},variants:{},pending:[]};
}
function save(){if(guest)return;try{storage()?.setItem(key(),JSON.stringify(data));}catch(_){syncStatus='storage-error';}}
function notify(){try{root.dispatchEvent?.(new Event('pokex:dex-changed'));}catch(_){} }
function setOwner(id,{guestMode=false}={}){
  guest=guestMode===true;
  owner=guest?'guest':(typeof id==='string'&&/^[0-9a-f-]{36}$/i.test(id)?id:'local');
  data=read();client=null;lastError=null;syncStatus=guest?'guest':'local';notify();
}
function state(){return {owner,guest,preview:devPreview,syncStatus,lastError,pending:data.pending.length};}
function entries(){return devPreview ? {species:allSpecies().map(s=>previewSpecies(s.id)),variants:allSpecies().flatMap(s=>previewVariants(s.id))} : {species:Object.values(data.species),variants:Object.values(data.variants)};}
function counts(){if (devPreview) return {seen:151,caught:151}; const s=Object.values(data.species);return {seen:s.length,caught:s.filter(x=>!!x.first_caught_at).length};}
let guard=null;
/** Il motore impedisce la registrazione nelle run di prova (DEV MODE). */
function setRecordingGuard(fn){guard=typeof fn==='function'?fn:null;}
function record(mon,type='seen',context=''){
  if(!validId(mon?.id)||(guard&&!guard()))return false;
  const id=Number(mon.id), now=new Date().toISOString(), caught=type==='caught';
  const name=String(mon.name||'').trim().slice(0,40);
  const sex=genders.includes(mon.gender)?mon.gender:null;
  const row={species_id:id,name,first_seen_at:now,first_caught_at:caught?now:null,
    first_seen_context:String(context).slice(0,120),first_caught_context:caught?String(context).slice(0,120):null,imported_from_legacy:false};
  const old=data.species[id];data.species[id]=mergeRow(old,row);
  const shiny=mon.isShiny===true,k=sex?variantKey(id,sex,shiny):null;
  const previousVariant=k?data.variants[k]:null;
  if(sex)data.variants[k]=mergeRow(previousVariant,{...row,sex,shiny});
  // Events are durable until the RPC confirms them. Avoid queueing redundant seen
  // events once their specific variant has already been caught and persisted.
  if(!guest && owner!=='local'){
    const entry={id:now+':'+Math.random().toString(36).slice(2),species_id:id,
      sex,shiny:mon.isShiny===true,event:caught?'caught':'seen',context:String(context).slice(0,120),occurred_at:now};
    if(sex){
      // Only new discoveries and first catches need remote writes.
      if(!previousVariant || (caught&&!previousVariant.first_caught_at))data.pending.push(entry);
    }else if(caught&&!old?.first_caught_at)data.pending.push({...entry,event:'legacy'});
  }
  save();notify();scheduleSync();
  if(sex&&(!previousVariant||(caught&&!previousVariant.first_caught_at))){
    try{root.dispatchEvent?.(new CustomEvent('pokex:dex-discovery',{detail:{species_id:id,name,sex,shiny,caught}}));}catch(_){}
  }
  return true;
}
function importLegacyTeam(snapshot){
  const party=snapshot?.game?.team;
  if(!Array.isArray(party))return;
  for(const mon of party){
    if(!validId(mon?.id)||genders.includes(mon.gender))continue;
    const id=Number(mon.id);
    if(data.species[id]?.first_caught_at)continue;
    const now=new Date().toISOString();
    data.species[id]=mergeRow(data.species[id],{species_id:id,name:String(mon.name||'').slice(0,40),first_seen_at:now,first_caught_at:now,first_seen_context:'legacy-import',first_caught_context:'legacy-import',imported_from_legacy:true});
    if(!guest&&owner!=='local'&&!data.pending.some(q=>q.event==='legacy'&&q.species_id===id))data.pending.push({id:now+':legacy:'+id,species_id:id,event:'legacy'});
  }
  save();notify();scheduleSync();
}
function ingest(species,variants){
  for(const r of species||[]){if(!validId(r.species_id))continue;const id=Number(r.species_id);data.species[id]=mergeRow(data.species[id],r);}
  for(const v of variants||[]){if(!validVariant(v))continue;const k=variantKey(v.species_id,v.sex,v.shiny);data.variants[k]=mergeRow(data.variants[k],v);}
  save();notify();
}
let timer=null;
function scheduleSync(){
  if(!client||guest||owner==='local'||!data.pending.length)return;
  if(timer)clearTimeout(timer);
  timer=setTimeout(()=>{flush().catch(()=>{});},1200);
}
async function initCloud(supabaseClient){
  if(guest||owner==='local'||!supabaseClient)return;
  client=supabaseClient;syncStatus='loading';notify();
  try{
    const [s,v]=await Promise.all([
      client.from('pokexplorer_dex_species').select('species_id,first_seen_at,first_caught_at,first_seen_context,first_caught_context,imported_from_legacy'),
      client.from('pokexplorer_dex_variants').select('species_id,sex,shiny,first_seen_at,first_caught_at,first_seen_context,first_caught_context')
    ]);
    if(s.error)throw s.error;if(v.error)throw v.error;
    ingest(s.data,v.data);syncStatus='synchronized';lastError=null;notify();await flush();
  }catch(err){syncStatus='error';lastError=String(err?.message||err).slice(0,180);notify();throw err;}
}
async function flush(){
  if(flushPromise)return flushPromise;
  if(!client||guest||owner==='local'||!data.pending.length)return;
  flushPromise=(async()=>{
    syncStatus='syncing';notify();
    const activeOwner=owner;
    try{
      while(data.pending.length&&owner===activeOwner){
        const event=data.pending[0];
        const args=event.event==='legacy'?{p_species_id:event.species_id}:{
          p_species_id:event.species_id,p_sex:event.sex,p_shiny:event.shiny,p_event:event.event,
          p_context:event.context||null,p_occurred_at:event.occurred_at||null};
        const fn=event.event==='legacy'?'pokexplorer_import_legacy_species':'pokexplorer_record_dex_event';
        const {error}=await client.rpc(fn,args);
        if(error)throw error;
        if(owner!==activeOwner)break;
        if(data.pending[0]?.id===event.id)data.pending.shift();
        save();
      }
      syncStatus='synchronized';lastError=null;
    }catch(err){syncStatus='error';lastError=String(err?.message||err).slice(0,180);throw err;}
    finally{notify();}
  })().finally(()=>{flushPromise=null;});
  return flushPromise;
}
function getSpecies(id){return devPreview ? previewSpecies(id) : data.species[Number(id)]||null;}
function getVariants(id){return devPreview ? previewVariants(id) : Object.values(data.variants).filter(v=>Number(v.species_id)===Number(id));}
if(root.addEventListener){
  root.addEventListener('online',()=>scheduleSync());
  root.addEventListener('visibilitychange',()=>{if(!root.document?.hidden)scheduleSync();});
}



return {setOwner,setPreview,state,entries,counts,record,setRecordingGuard,importLegacyTeam,ingest,initCloud,flush,getSpecies,getVariants,mergeRow,variantKey};
})();
const __m9 = (() => {
const PokexDex = __m8;
// Obiettivi dell'account: registro di eventi solo in aggiunta, prima in locale e poi su Supabase
// (richiede sql/003_objectives_events.sql). Nessuna chiave sensibile nel client.

const root = globalThis;
const PREFIX='pokexplorer:objectives:v1:';
const allowed=new Set(['run_start','run_win','catch','floor','badge','cave']);
const names=['Prima cattura','Collezionista','Maestro delle catture','Primi passi','Esploratore','Veterano','Prima medaglia','Maestro di Kanto','Prima vittoria','Inarrestabile','Spedizione Celeste','Leggenda solitaria','Maestro del Pokédex','Primo splendore','Cacciatore shiny','Leggenda splendente','Il Trio Leggendario'];
const goals=[1,25,100,10,50,75,1,8,1,5,1,1,151,1,5,1,3];
const descriptions=[
  'Cattura il tuo primo Pokémon','Cattura 25 Pokémon','Cattura 100 Pokémon',
  'Raggiungi il dungeon 10','Raggiungi il dungeon 50','Raggiungi il dungeon 75',
  'Ottieni una medaglia','Conquista tutte le 8 medaglie di Kanto','Completa una run',
  'Completa 5 run','Concludi la spedizione nella Grotta Celeste',
  'Completa una run senza aggiungere un secondo Pokémon','Cattura tutte le 151 specie di Kanto',
  'Cattura un Pokémon shiny','Cattura 5 Pokémon shiny',
  'Cattura un leggendario shiny','Cattura Articuno, Zapdos e Moltres'
];
const art=['items/pokeball.png','items/pokeball.png','items/pokeball.png',
  'items/old-rod.png','items/radar.png','decor/celestial-crystal.svg',
  'badges/1.png','badges/8.png','items/gold-candy.png',
  'items/gold-candy.png','decor/celestial-crystal.svg','player/champion/throw/0.png',
  'items/pokeball.png','effects/star.svg','effects/star.svg','items/master-ball.svg','effects/star.svg'];
const modeGoals = [
  ['nuzlocke', 'Squadra intatta', 'Ottieni 3 medaglie nella stessa run senza perdere Pokémon', 3, art[6]],
  ['nuzlocke', 'Rimonta', 'Ottieni una medaglia dopo aver perso almeno un Pokémon', 1, art[6]],
  ['nuzlocke', 'Nessuno resta indietro', 'Completa una run senza perdere Pokémon', 1, art[8]],
  ['nuzlocke', 'Campione solitario', 'Completa una run con un solo Pokémon', 1, art[11]],
  ['normal', 'Seconda occasione', 'Vinci una lotta con un Pokémon che Joy ha curato dopo un KO', 1, art[0]],
  ['normal', 'Squadra completa', 'Vinci una lotta con tutti gli slot disponibili occupati', 1, art[0]],
  ['normal', 'Sfida agli allenatori', 'Supera 3 percorsi Difficili nella stessa run', 3, art[5]],
  ['normal', 'Campione di Kanto', 'Completa una run in modalità Normale', 1, art[8]],
];
const milestones = new Set(['second_chance','full_team','hard_route']);
const eventMode = event => event.metadata?.mode ?? (event.kind==='run_win' && event.metadata?.easy===true?'normal':null);
function recordMilestone(milestone,runId,floor,mode){
  if(mode!=='normal'||!milestones.has(milestone))return false;
  return record('floor',runId,{floor,mode,milestone});
}
const accountId=id=>typeof id==='string'&&/^[0-9a-f]{8}-[0-9a-f-]{27,}$/i.test(id);
let owner='local',guest=false,events={},pending=new Set(),client=null,flushPromise=null,status='locale',lastError=null,timer=null;
function storage(){try{return root.localStorage||null;}catch(_){return null;}}
function notify(){try{root.dispatchEvent?.(new Event('pokex:objectives-changed'));}catch(_){}}
function save(){if(guest)return;try{storage()?.setItem(PREFIX+owner,JSON.stringify({events:Object.values(events),pending:[...pending]}));}catch(e){status='errore locale';}}
function setOwner(id,{guestMode=false}={}){
  guest=!!guestMode;owner=guest?'guest':accountId(id)?id:'local';client=null;
  let found=null;try{if(!guest)found=JSON.parse(storage()?.getItem(PREFIX+owner)||'null');}catch(_){ }
  events={};pending=new Set();
  for(const e of found?.events||[])if(e&&typeof e.event_id==='string'&&allowed.has(e.kind))events[e.event_id]=e;
  for(const id of found?.pending||[])if(events[id])pending.add(id);
  status=guest?'ospite':'locale';lastError=null;notify();
}
function eventId(kind,runId,meta){
  if(kind==='run_start'||kind==='run_win'||kind==='cave')return `${kind}:${runId}`;
  if(kind==='floor')return `floor:${runId}:${meta.floor}${meta.milestone ? `:${meta.milestone}` : ""}`;
  if(kind==='badge')return `badge:${runId}:${meta.badges}`;
  // each catch is separate, even of the same species
  const unique=root.crypto?.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return `catch:${runId}:${unique}`;
}
let guard=null;
function setRecordingGuard(fn){guard=typeof fn==='function'?fn:null;}
function record(kind,runId='',meta={}){
  if(guard&&!guard())return false;
  if(!allowed.has(kind)||typeof runId!=='string'||runId.length<1||runId.length>110)return false;
  const safe={};
  if(['normal','nuzlocke'].includes(meta.mode)) safe.mode=meta.mode;
  if(kind==='floor' && safe.mode==='normal' && milestones.has(meta.milestone))safe.milestone=meta.milestone;
  if(kind==='catch'){
    const id=Number(meta.species);if(!Number.isInteger(id)||id<1||id>1025)return false;
    safe.species=id;safe.shiny=meta.shiny===true;
  }else if(kind==='floor')safe.floor=Math.max(1,Math.min(80,Math.floor(Number(meta.floor)||1)));
  else if(kind==='badge'){safe.badges=Math.max(0,Math.min(8,Math.floor(Number(meta.badges)||0)));if(safe.mode==='nuzlocke' && typeof meta.lossless==='boolean')safe.lossless=meta.lossless;}
  else if(kind==='run_win'){safe.solo=meta.solo===true && meta.easy!==true;if(meta.easy===true)safe.easy=true;if(safe.mode==='nuzlocke' && typeof meta.lossless==='boolean')safe.lossless=meta.lossless;}
  else if(kind==='cave')safe.outcome=meta.outcome==='caught'?'caught':'knockout';
  const id=eventId(kind,runId,safe);
  if(events[id])return false;
  events[id]={event_id:id,kind,run_id:runId,species_id:safe.species||null,shiny:safe.shiny||false,
    value:safe.floor??safe.badges??null,metadata:safe,occurred_at:new Date().toISOString()};
  if(!guest&&accountId(owner))pending.add(id);
  save();notify();schedule();return true;
}
function values(dex=PokexDex){
  const items=Object.values(events);const count=kind=>items.filter(e=>e.kind===kind);
  const wins=count('run_win'), normalWins=wins.filter(e=>eventMode(e)==='normal');
  const starts=count('run_start'),catches=count('catch'),badges=count('badge'),floors=count('floor');
  const dexData=dex?.entries?.()||{species:[],variants:[]};
  const caughtSpecies=(dexData.species||[]).filter(x=>x.first_caught_at);
  const variantShiny=(dexData.variants||[]).filter(x=>x.shiny===true&&x.first_caught_at);
  const maxFloor=Math.max(0,...floors.map(e=>Number(e.value)||0));
  const maxBadge=Math.max(0,...badges.map(e=>Number(e.value)||0));
  const birdIds=new Set([...catches.map(x=>x.species_id),...caughtSpecies.map(x=>Number(x.species_id))].filter(id=>[144,145,146].includes(id)));
  const shinyCount=catches.filter(x=>x.shiny).length;
  const shinyUnique=variantShiny.length;
  const legendaryShiny=catches.some(x=>x.shiny&&[144,145,146,150].includes(x.species_id))||variantShiny.some(x=>[144,145,146,150].includes(Number(x.species_id)));
  const progress=[catches.length,catches.length,catches.length,maxFloor,maxFloor,maxFloor,maxBadge,maxBadge,
    wins.length,wins.length,count('cave').length,wins.filter(x=>x.metadata?.solo===true).length,
    caughtSpecies.length,Math.max(shinyCount,shinyUnique),shinyCount,legendaryShiny?1:0,birdIds.size];
  const nuzBadges=badges.filter(e=>eventMode(e)==='nuzlocke');
  const nuzWins=wins.filter(e=>eventMode(e)==='nuzlocke');
  const normalMilestones=floors.filter(e=>eventMode(e)==='normal');
  const hardPerRun=new Map();
  for(const e of normalMilestones.filter(e=>e.metadata?.milestone==='hard_route')) hardPerRun.set(e.run_id,(hardPerRun.get(e.run_id)||0)+1);
  const modeProgress=[Math.max(0,...nuzBadges.filter(e=>e.metadata?.lossless===true).map(e=>e.value)),
    Number(nuzBadges.some(e=>e.metadata?.lossless===false)), Number(nuzWins.some(e=>e.metadata?.lossless===true)),
    Number(wins.some(e=>e.metadata?.solo===true && eventMode(e)!=='normal')),
    Number(normalMilestones.some(e=>e.metadata?.milestone==='second_chance')),
    Number(normalMilestones.some(e=>e.metadata?.milestone==='full_team')),
    Math.max(0,...hardPerRun.values()), normalWins.length];
  const quest=(id,name,description,goal,value,image,mode)=>({id,name,description,goal,progress:Math.min(goal,value),complete:value>=goal,image:'assets/sprites/'+image,mode});
  return {runs:starts.length,catches:catches.length,wins:wins.length,championUnlocked:progress[11]>0,
    quests:[...names.map((name,i)=>quest(i+1,name,descriptions[i],goals[i],progress[i],art[i],null)),
      ...modeGoals.map(([mode,name,desc,goal,image],i)=>quest(names.length+i+1,name,desc,goal,modeProgress[i],image,mode))],status,lastError,pending:pending.size};
}
function unlockChampion(){return values().championUnlocked;}
async function initCloud(supabaseClient){
  if(!accountId(owner)||guest||!supabaseClient)return false;
  client=supabaseClient;status='sincronizzazione';notify();
  try{
    const {data,error}=await client.from('pokexplorer_objective_events').select('event_id,kind,run_id,species_id,shiny,value,metadata,occurred_at');
    if(error)throw error;
    // UNION: local events not yet uploaded must never be lost on login.
    for(const item of data||[])if(item?.event_id&&allowed.has(item.kind)){
      const existing=events[item.event_id];
      // Un riepilogo ricostruito dal checkpoint non deve nascondere una vittoria solitaria già sincronizzata.
      if(!existing || (item.kind==='run_win' && item.metadata?.solo===true && existing.metadata?.solo!==true)){
        events[item.event_id]=item; pending.delete(item.event_id);
      }
    }
    save();status='sincronizzato';lastError=null;notify();await flush();return true;
  }catch(e){lastError=String(e.message||e);status='non sincronizzato';notify();throw e;}
}
function schedule(){if(!client||!pending.size)return;clearTimeout(timer);timer=setTimeout(()=>{flush().catch(()=>{});},900);}
async function flush(){
  if(flushPromise)return flushPromise;
  if(!client||!pending.size||!accountId(owner))return;
  const active=owner;
  flushPromise=(async()=>{
    const batch=[...pending].slice(0,100).map(id=>events[id]).filter(Boolean);
    try{
      const {error}=await client.from('pokexplorer_objective_events').upsert(batch.map(e=>({...e,user_id:active})),{onConflict:'user_id,event_id',ignoreDuplicates:true});
      if(error)throw error;
      if(owner===active)for(const e of batch)pending.delete(e.event_id);
      status='sincronizzato';lastError=null;save();notify();
      if(pending.size&&owner===active)await new Promise(resolve=>setTimeout(resolve,30));
      if(pending.size&&owner===active)schedule();
    }catch(e){status='non sincronizzato';lastError=String(e.message||e);notify();throw e;}
  })().finally(()=>{flushPromise=null;});return flushPromise;
}
function importCheckpoint(snapshot){
  if(!snapshot?.runId||!snapshot.game)return;
  const g=snapshot.game,run=snapshot.runId;
  record('run_start',run);
  if(Number(g.floor)>=10)for(const n of [10,50,75])if(g.floor>=n)record('floor',run,{floor:n});
  const n=Array.isArray(g.badges)?g.badges.length:0;
  if(n>=1)record('badge',run,{badges:1});if(n>=8)record('badge',run,{badges:8});
  if(g.adventureCompleted)record('run_win',run,{solo:false}); // historical solo mode cannot be verified
}
if(root.addEventListener){root.addEventListener('online',schedule);root.addEventListener('pokex:dex-changed',notify);}


const currentOwner=()=>owner;

return {currentOwner,setOwner,record,recordMilestone,setRecordingGuard,values,unlockChampion,initCloud,flush,importCheckpoint};
})();
const __m10 = (() => {
// Un unico ascoltatore della tastiera per tutto il gioco.
// - push(): un livello temporaneo (finestra modale, avviso) che ha la precedenza su tutto;
// - add(): gestori permanenti, valutati per priorità decrescente.
// Un gestore restituisce true quando ha consumato il tasto: gli altri non lo ricevono.
class KeyRouter {
  constructor() {
    this.layers = [];
    this.handlers = [];
    this.installed = false;
  }
  push(name, handler) {
    const layer = { name, handler };
    this.layers.push(layer);
    return () => { this.layers = this.layers.filter(l => l !== layer); };
  }
  add(name, priority, handler) {
    this.handlers = this.handlers.filter(h => h.name !== name);
    this.handlers.push({ name, priority, handler });
    this.handlers.sort((a, b) => b.priority - a.priority);
  }
  dispatch(event) {
    for (const layer of [...this.layers].reverse()) if (layer.handler(event)) return true;
    for (const { handler } of this.handlers) if (handler(event)) return true;
    return false;
  }
  install(target = globalThis) {
    if (this.installed || !target?.addEventListener) return;
    this.installed = true;
    target.addEventListener('keydown', event => this.dispatch(event), true);
  }
}
const keyRouter = new KeyRouter();

const DIRECTION_KEYS = Object.freeze({
  w: 'up', arrowup: 'up', s: 'down', arrowdown: 'down', a: 'left', arrowleft: 'left', d: 'right', arrowright: 'right',
});
const keyDirection = event => DIRECTION_KEYS[String(event.key || '').toLowerCase()] || null;
const isSpace = event => event.code === 'Space' || event.key === ' ';
const isBack = event => event.key === 'Escape' || event.key === 'Backspace';
const isTyping = event => Boolean(event.target?.closest?.('input,textarea,select,[contenteditable]'));
const isShown = element => Boolean(element) && !element.classList.contains('hidden') && !element.hidden;

function visibleControl(el) {
  if (!el || !el.isConnected || el.disabled || el.closest('.hidden')) return false;
  const style = getComputedStyle(el);
  return style.display !== 'none' && style.visibility !== 'hidden';
}
const controlsIn = (root, selector = 'button:not(:disabled)') => root ? [...root.querySelectorAll(selector)].filter(visibleControl) : [];
function focusControl(el) {
  if (el) { el.focus({ preventScroll: true }); el.scrollIntoView?.({ block: 'nearest', inline: 'nearest' }); }
  return el;
}
/** Sposta il focus in una lista di controlli (cols = colonne della griglia). */
function moveFocus(items, dir, cols = 1) {
  if (!items.length) return;
  const index = items.indexOf(document.activeElement);
  const step = dir === 'left' ? -1 : dir === 'right' ? 1 : dir === 'up' ? -cols : cols;
  focusControl(items[index < 0 ? 0 : Math.max(0, Math.min(items.length - 1, index + step))]);
}
/** Trappola del focus per Tab dentro una finestra modale. */
function trapTab(event, container, selector = 'input:not(:disabled),button:not(:disabled):not(.hidden)') {
  if (event.key !== 'Tab') return false;
  const items = controlsIn(container, selector);
  if (!items.length) return true;
  const first = items[0], last = items.at(-1);
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  return true;
}

return {keyRouter,DIRECTION_KEYS,keyDirection,isSpace,isBack,isTyping,isShown,visibleControl,controlsIn,focusControl,moveFocus,trapTab};
})();
const __m11 = (() => {
const { keyRouter, trapTab } = __m10;
// Pannello di conferma del gioco: sostituisce confirm()/alert() del browser.


let pending = null;
const el = id => document.getElementById(id);

function close(value = false) {
  if (!pending) return;
  const previous = pending;
  pending = null;
  el('pokex-confirm-overlay')?.classList.add('hidden');
  const accept = el('pokex-confirm-accept'), cancel = el('pokex-confirm-cancel');
  if (accept) accept.onclick = null;
  if (cancel) cancel.onclick = null;
  previous.removeKeys();
  try {
    const target = previous.focus?.isConnected && !previous.focus.closest('.hidden') ? previous.focus : el('quick-settings-toggle');
    target?.focus?.();
  } catch { /* elemento rimosso */ }
  previous.resolve(Boolean(value));
}

function onKey(event) {
  const accept = el('pokex-confirm-accept'), cancel = el('pokex-confirm-cancel');
  if (event.key === 'Escape') { event.preventDefault(); close(false); return true; }
  if (['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(event.key)) {
    event.preventDefault();
    (event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? cancel : accept)?.focus();
    return true;
  }
  trapTab(event, el('pokex-confirm-overlay'));
  // Nessun tasto raggiunge mappa, lotta o dialoghi sottostanti.
  return true;
}

function confirm({ title = 'CONFERMA', message = '', accept = 'CONFERMA', cancel = 'ANNULLA', notice = false } = {}) {
  const overlay = el('pokex-confirm-overlay');
  if (!overlay) return Promise.resolve(false);
  if (pending) close(false);
  el('pokex-confirm-title').textContent = String(title);
  el('pokex-confirm-message').textContent = String(message);
  el('pokex-confirm-accept').textContent = String(accept);
  el('pokex-confirm-cancel').textContent = String(cancel);
  el('pokex-confirm-cancel').classList.toggle('hidden', Boolean(notice));
  overlay.classList.remove('hidden');
  const focus = document.activeElement;
  return new Promise(resolve => {
    pending = { resolve, focus, removeKeys: keyRouter.push('confirm-dialog', onKey) };
    el('pokex-confirm-accept').onclick = () => close(true);
    el('pokex-confirm-cancel').onclick = () => close(false);
    overlay.onclick = event => { if (event.target === overlay) close(false); };
    (notice ? el('pokex-confirm-accept') : el('pokex-confirm-cancel')).focus();
  });
}
const alert = options => confirm({ ...options, notice: true, accept: 'CHIUDI' });
const isOpen = () => Boolean(pending);

return {close,confirm,alert,isOpen};
})();
const __m12 = (() => {
const Checkpoints = __m7;
const Dex = __m8;
const Objectives = __m9;
const Dialogs = __m11;
const { normalizeRunMode } = __m1;
const { Pokemon } = __m6;
const { speciesData, pokemonSprite } = __m0;
const { KANTO_GYMS, FINAL_FLOOR, badgeSprite } = __m3;
// Menu principale, scelta iniziale, salvataggi, finale e foto ricordo.









const STARTERS = Object.freeze([{ id: 1, type: 'grass', label: 'ERBA' }, { id: 4, type: 'fire', label: 'FUOCO' }, { id: 7, type: 'water', label: 'ACQUA' }]);
const RUN_OVERLAYS = ['gameover-overlay', 'starter-scene-overlay', 'overlay-battle', 'battle-controls', 'gym-leader-intro', 'trainer-encounter-overlay',
  'wild-encounter-overlay', 'pokemart-overlay', 'gym-entry-confirm', 'npc-dialog-overlay', 'celestial-dialog', 'celestial-expedition',
  'oak-laboratory', 'celestial-cinematic', 'badge-case-overlay', 'pokedex-overlay', 'learn-move-overlay', 'evolution-overlay',
  'evolution-choice-overlay', 'continue-recap-overlay', 'menu-message', 'eevee-stone-gift', 'eevee-stone-evolution', 'battle-confirm', 'ability-capsule-overlay', 'item-target-prompt', 'team-full-overlay'];

const menusMethods = {
  // ---------------------------------------------------------------- Fine della run
  // Il finale si sblocca all'uscita del piano 80 con tutte le otto medaglie.
  hasCompletedKantoChallenge() {
    if (this.floor !== FINAL_FLOOR || !this.completedGymFloors.has(FINAL_FLOOR)) return false;
    const badgeIds = new Set(this.badges.map(b => typeof b === 'object' ? b.id : b));
    return KANTO_GYMS.every((gym, i) => badgeIds.has(i) && this.completedGymFloors.has((i + 1) * 10));
  },

  /** Chiude la run: il salvataggio resta (anche nel cloud) ma non si può più continuare. */
  endRun(reason) {
    if (Checkpoints.isGuestMode() || !this.runId) return;
    try {
      Checkpoints.save(Checkpoints.ended(this.runId, reason));
      window.dispatchEvent(new Event('pokex:checkpoint'));
    } catch (error) { console.warn('Run non chiusa:', error); }
    this.updateContinueButton();
  },

  /** Riepilogo della run per il game over e il finale. */
  renderRunRecap(container) {
    if (!container) return;
    const stats = this.runStats || {};
    const minutes = Math.max(1, Math.round((stats.playMs || 0) / 60000));
    const time = minutes >= 60 ? `${Math.floor(minutes / 60)} h ${String(minutes % 60).padStart(2, '0')} min` : `${minutes} min`;
    const row = (label, value) => {
      const item = document.createElement('div');
      item.className = 'run-recap-stat';
      item.append(Object.assign(document.createElement('span'), { textContent: label }), Object.assign(document.createElement('strong'), { textContent: value }));
      return item;
    };
    const grid = document.createElement('div');
    grid.className = 'run-recap-grid';
    grid.append(
      row('PIANO', `${Math.max(this.floor, stats.maxFloor || 1)}/${FINAL_FLOOR}`),
      row('MEDAGLIE', `${this.badgeCount()}/8`),
      row('POKÉMON SCONFITTI', String(stats.wins || 0)),
      row('ALLENATORI', String(stats.trainers || 0)),
      row('CATTURE', String(stats.captures || 0)),
      row('TEMPO DI GIOCO', time),
    );
    const parts = [grid];
    parts.unshift(Object.assign(document.createElement('p'), { className: 'run-recap-mode', textContent: this.runMode === 'normal' ? 'MODALITÀ NORMALE' : 'MODALITÀ NUZLOCKE' }));
    const fallen = Array.isArray(stats.fallen) ? stats.fallen : [];
    if (fallen.length) {
      const list = document.createElement('ul');
      list.className = 'run-recap-fallen';
      for (const mon of fallen.slice(-6)) {
        const item = document.createElement('li');
        item.append(Object.assign(document.createElement('img'), { src: pokemonSprite(mon.id), alt: '', width: 32, height: 32 }),
          Object.assign(document.createElement('span'), { textContent: `${mon.name} Lv.${mon.level} · piano ${mon.floor}${mon.by ? ` · contro ${mon.by}` : ''}` }));
        list.append(item);
      }
      const title = Object.assign(document.createElement('h3'), { textContent: this.runMode === 'normal' ? 'ANDATI KO' : 'CADUTI IN BATTAGLIA' });
      parts.push(title, list);
      if (fallen.length > 6) parts.push(Object.assign(document.createElement('p'), { className: 'run-recap-more', textContent: `e altri ${fallen.length - 6}` }));
    } else parts.push(Object.assign(document.createElement('p'), { className: 'run-recap-more', textContent: this.runMode === 'normal' ? 'Nessun Pokémon andato KO.' : 'Nessun Pokémon perso in battaglia.' }));
    container.replaceChildren(...parts);
  },

  finishKantoAdventure() {
    if (this.adventureCompleted || !this.hasCompletedKantoChallenge()) return false;
    this.adventureCompleted = true;
    const solo = this.soloRunTracked && this.soloRunEligible && this.team.length === 1 && !this.devRun;
    const previouslyUnlocked = Objectives.unlockChampion();
    const recorded = Objectives.record('run_win', this.runId, { solo, mode: this.runMode, lossless: !this.runStats.fallen.some(p => p.lost) });
    if (recorded && solo && !previouslyUnlocked && Objectives.unlockChampion()) this.showDiscoveryNotice('🏆 PERSONAGGIO CAMPIONE SBLOCCATO!', 4500);
    this.endRun('victory');
    this.isLocked = true;
    this.hideFinaleScreens();
    this.renderRunRecap(this.$id('victory-recap'));
    this.$id('victory-overlay').classList.remove('hidden');
    const preview = this.$id('victory-badge-preview');
    preview.replaceChildren(...KANTO_GYMS.map(gym => Object.assign(document.createElement('img'), { src: badgeSprite(gym.badgeId), alt: '', width: 32, height: 32 })));
    this.logMsg('Hai completato la sfida di Kanto!');
    return true;
  },

  hideFinaleScreens() {
    this.$id('victory-overlay')?.classList.add('hidden');
    this.$id('memory-photo-overlay')?.classList.add('hidden');
  },

  showMemoryPhoto() {
    if (!this.adventureCompleted) return;
    const teamArea = this.$id('memory-photo-team');
    teamArea.replaceChildren();
    for (let i = 0; i < 6; i++) {
      const pokemon = this.team[i];
      const tile = document.createElement('div');
      tile.className = 'memory-mon' + (pokemon ? '' : ' empty');
      if (pokemon) {
        const sprite = Object.assign(document.createElement('img'), { src: pokemon.spriteFront, alt: pokemon.name, loading: 'eager' });
        tile.append(sprite, Object.assign(document.createElement('strong'), { textContent: pokemon.name }), Object.assign(document.createElement('span'), { textContent: `Lv. ${pokemon.level}` }));
      }
      teamArea.appendChild(tile);
    }
    const badgeArea = this.$id('memory-photo-badges');
    badgeArea.replaceChildren(...KANTO_GYMS.map(gym => {
      const badge = document.createElement('div');
      badge.className = 'memory-badge';
      badge.append(Object.assign(document.createElement('img'), { src: badgeSprite(gym.badgeId), alt: `Medaglia ${gym.badge}` }), Object.assign(document.createElement('span'), { textContent: gym.badge }));
      return badge;
    }));
    this.$id('victory-overlay').classList.add('hidden');
    this.$id('memory-photo-overlay').classList.remove('hidden');
    this.isLocked = true;
  },

  /** Salva la foto ricordo come PNG, disegnata su canvas con gli sprite locali. */
  async downloadMemoryPhoto() {
    const scale = 2, width = 480, height = 300;
    const canvas = Object.assign(document.createElement('canvas'), { width: width * scale, height: height * scale });
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);
    ctx.imageSmoothingEnabled = false;
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#173a63'); gradient.addColorStop(1, '#0a1a33');
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = '#ffd474'; ctx.lineWidth = 4; ctx.strokeRect(6, 6, width - 12, height - 12);
    await document.fonts?.ready;
    ctx.textAlign = 'center'; ctx.fillStyle = '#ffd474'; ctx.font = '14px "Press Start 2P", monospace';
    ctx.fillText('POKÉXPLORER · FOTO RICORDO', width / 2, 34);
    ctx.fillStyle = '#e2e8f0'; ctx.font = '8px "Press Start 2P", monospace';
    ctx.fillText(new Date().toLocaleDateString('it-IT'), width / 2, 52);
    const load = src => new Promise(resolve => { const img = new Image(); img.onload = () => resolve(img); img.onerror = () => resolve(null); img.src = src; });
    const sprites = await Promise.all(this.team.map(p => load(p.spriteFront)));
    sprites.forEach((img, i) => {
      const x = 20 + i * 74, y = 64;
      ctx.fillStyle = 'rgba(255,255,255,.08)'; ctx.fillRect(x, y, 66, 92);
      if (img) ctx.drawImage(img, x + 1, y + 2, 64, 64);
      ctx.fillStyle = '#f8fafc'; ctx.font = '6px "Press Start 2P", monospace';
      ctx.fillText(this.team[i].name.slice(0, 10), x + 33, y + 76);
      ctx.fillStyle = '#93c5fd'; ctx.fillText(`Lv. ${this.team[i].level}`, x + 33, y + 88);
    });
    const badges = await Promise.all(KANTO_GYMS.map(gym => load(badgeSprite(gym.badgeId))));
    badges.forEach((img, i) => { if (img) ctx.drawImage(img, 52 + i * 48, 190, 32, 32); });
    ctx.fillStyle = '#e2e8f0'; ctx.font = '8px "Press Start 2P", monospace';
    ctx.fillText('LE OTTO MEDAGLIE DI KANTO', width / 2, 244);
    ctx.fillStyle = '#ffd474'; ctx.fillText('CONDIVIDILA SUL DISCORD DI POKÉXPLORER!', width / 2, 272);
    const fail = () => Dialogs.alert({ title: 'FOTO RICORDO', message: 'Il browser non permette di creare l’immagine (succede aprendo il gioco come file). Fai uno screenshot della foto.' });
    try {
      canvas.toBlob(blob => {
        if (!blob) { fail(); return; }
        const link = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: 'pokexplorer-foto-ricordo.png' });
        document.body.appendChild(link); link.click(); link.remove();
        setTimeout(() => URL.revokeObjectURL(link.href), 2000);
      }, 'image/png');
    } catch (error) {
      // Aprendo il gioco come file il browser considera "esterne" le immagini e blocca l'esportazione.
      console.warn('Foto ricordo non esportabile', error);
      fail();
    }
  },

  returnToVictoryScreen() {
    if (!this.adventureCompleted) return;
    this.$id('memory-photo-overlay').classList.add('hidden');
    this.renderRunRecap(this.$id('victory-recap'));
    this.$id('victory-overlay').classList.remove('hidden');
    this.isLocked = true;
  },

  // ---------------------------------------------------------------- Menu principale
  returnToMainMenu() {
    this.finishEeveeStoneChoice(false);
    this.setMobileSheet(null);
    this.closeQuickSettings();
    Dialogs.close(false);
    this.acknowledgeDialogue();
    this.battleToken++;
    this.cancelPokemonCenterHealing();
    this.clearRaidTransientState();
    this.stopContinuousWalk();
    this.closePartyActions();
    this.closePokemonInfo();
    this.hideFinaleScreens();
    this.closeFloorJumpCode();
    for (const id of RUN_OVERLAYS) this.$id(id)?.classList.add('hidden');
    this._continueRecapReference = null;
    this.$id('celestial-blackout')?.classList.remove('active');
    this.$id('dungeon-grid-board')?.classList.remove('celestial-cave');
    this.$id('rotom-body')?.classList.remove('battle-active');
    this.$id('discovery-notice')?.classList.remove('visible');
    this.$id('dex-discovery-toast')?.classList.add('hidden');
    this.$id('main-menu-overlay').classList.remove('hidden');
    document.body.classList.remove('in-run');
    clearTimeout(this.playerIdleTimer);
    this.resetRunState();
    this.abilityCapsuleOpen = false; this.abilityCapsuleCandidate = null;
    this.music?.setScene('exploration');
    this.selectPlayerGender('male', true);
    this.renderBadges(); this.renderSidebar(); this.updateChampionChoice();
    this.updateContinueButton();
    this.syncQuickMenuState();
    this.logMsg('Inizia una nuova avventura!');
  },

  syncQuickMenuState() {
    const inAdventure = Boolean(this.$id('main-menu-overlay')?.classList.contains('hidden'));
    this.$id('return-main-menu-quick')?.classList.toggle('hidden', !inAdventure);
    this.$id('save-game-quick')?.classList.toggle('hidden', !inAdventure);
    this.syncDevControls();
    const notice = this.$id('save-game-quick-status');
    if (!inAdventure && notice) { notice.classList.add('hidden'); notice.textContent = ''; }
  },

  toggleQuickSettings() {
    const panel = this.$id('quick-settings-panel'), toggle = this.$id('quick-settings-toggle');
    if (!panel || !toggle) return;
    const opening = panel.classList.contains('hidden');
    panel.classList.toggle('hidden', !opening);
    toggle.setAttribute('aria-expanded', String(opening));
    toggle.setAttribute('aria-label', opening ? 'Chiudi opzioni' : 'Apri opzioni');
  },

  closeQuickSettings() {
    this.$id('quick-settings-panel')?.classList.add('hidden');
    const toggle = this.$id('quick-settings-toggle');
    if (toggle) { toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Apri opzioni'); }
  },

  async requestReturnToMainMenu() {
    if (!this.$id('main-menu-overlay')?.classList.contains('hidden')) return false;
    this.closeQuickSettings();
    this.stopContinuousWalk();
    const inBattle = this.isBattleVisible();
    const message = Checkpoints.isGuestMode()
      ? 'In modalità UTENTE i progressi non vengono salvati.'
      : inBattle
        ? 'La lotta in corso verrà abbandonata: i danni subiti e i Pokémon esausti restano persi. Riprenderai dal punto della mappa in cui è iniziata.'
        : 'Potrai riprendere dall’ultimo checkpoint salvato, automatico o manuale. I progressi successivi andranno persi.';
    const accepted = await Dialogs.confirm({ title: 'TORNARE AL MENU?', message, accept: 'TORNA AL MENU', cancel: 'ANNULLA' });
    if (!accepted) return false;
    if (inBattle) this.commitBattleState();
    this.returnToMainMenu();
    return true;
  },

  manualSaveAdventure() {
    if (!this.$id('main-menu-overlay')?.classList.contains('hidden')) return false;
    const status = this.$id('save-game-quick-status');
    const report = (message, ok = false) => {
      if (status) { status.textContent = message; status.classList.remove('hidden'); status.classList.toggle('saved', ok); }
      return ok;
    };
    if (Checkpoints.isGuestMode()) return report('Modalità UTENTE: accedi con Discord per salvare la partita.');
    if (this.isCelestialCave || this.celestialCutsceneActive || this.celestialDeparturePending || this.celestialDepositRequired || this.celestialExpeditionBusy)
      return report('Non puoi salvare durante la spedizione nella Grotta Celeste.');
    if (this.isLocked || this.battleBusy || this.isRaidActive || this.battleMode || this.pendingItemTarget || this.teleportSwitchPending ||
      this.dialogueResolve || !this.team.length || !this.gridMap.length || this.adventureCompleted)
      return report('Salvataggio non disponibile ora: termina la lotta, il dialogo o l’evento.');
    if (!this.saveCheckpoint()) return report('Salvataggio non riuscito: il checkpoint precedente è intatto.');
    return report('Partita salvata.', true);
  },

  /** Checkpoint automatico nei momenti sicuri (fine lotta, cambio piano, Centro Pokémon…). */
  saveCheckpoint() {
    return this.writeCheckpoint(Checkpoints.take(this));
  },
  /** Durante la lotta: registra danni e perdite, così abbandonare non annulla la sconfitta. */
  commitBattleState(pendingFaint = null) {
    return this.writeCheckpoint(Checkpoints.take(this, { battle: true, pendingFaint }));
  },
  writeCheckpoint(snapshot) {
    if (Checkpoints.isGuestMode() || !snapshot) return false;
    try {
      Checkpoints.save(snapshot);
      this.updateContinueButton();
      window.dispatchEvent(new Event('pokex:checkpoint'));
      return true;
    } catch (error) { console.warn('Checkpoint non salvato:', error); return false; }
  },

  updateContinueButton() {
    const button = this.$id('btn-continue-game');
    if (!button) return;
    let snapshot = null;
    try { snapshot = Checkpoints.load(); } catch { snapshot = null; }
    button.disabled = !snapshot;
    button.title = snapshot ? Checkpoints.describe(snapshot) : 'Nessuna run da continuare';
    const status = this.$id('save-status');
    if (status && !status.dataset.syncError) { status.textContent = ''; status.classList.add('hidden'); }
  },

  openContinueRecap() {
    const snapshot = Checkpoints.load();
    if (!snapshot) { this.updateContinueButton(); return false; }
    const overlay = this.$id('continue-recap-overlay');
    if (!overlay) return false;
    const game = snapshot.game;
    this._continueRecapReference = { runId: snapshot.runId, savedAt: snapshot.createdAt };
    const grid = this.$id('continue-recap-grid');
    grid.replaceChildren();
    const field = (label, value) => {
      const row = document.createElement('div'); row.className = 'recap-line';
      row.append(Object.assign(document.createElement('span'), { textContent: label }), Object.assign(document.createElement('strong'), { textContent: String(value) }));
      grid.append(row);
    };
    field('PIANO', game.floor + '/80');
    field('MEDAGLIE', game.badges.length + '/8');
    field('MODALITÀ', normalizeRunMode(game.runMode) === 'normal' ? 'NORMALE' : 'NUZLOCKE');
    field('SALVATO', new Date(snapshot.createdAt).toLocaleString('it-IT', { dateStyle: 'short', timeStyle: 'short' }));
    field('ORIGINE', this._checkpointSource || 'LOCALE');
    const team = this.$id('continue-recap-team'); team.replaceChildren();
    const header = document.createElement('small'); header.textContent = 'SQUADRA'; team.append(header);
    for (const mon of game.team) {
      const item = document.createElement('div'); item.className = 'recap-mon';
      item.append(Object.assign(document.createElement('img'), { src: pokemonSprite(mon.id, { shiny: mon.isShiny, gender: mon.gender }), alt: '' }),
        Object.assign(document.createElement('span'), { textContent: `${mon.name} · Lv.${mon.level}${mon.currentHp === 0 ? ' · KO' : ''}` }));
      team.append(item);
    }
    this._menuFocusBefore = document.activeElement;
    overlay.classList.remove('hidden'); this.$id('continue-recap-cancel')?.focus();
    return true;
  },
  closeContinueRecap() {
    this.$id('continue-recap-overlay')?.classList.add('hidden');
    this._menuFocusBefore?.focus?.();
    this._continueRecapReference = null;
  },
  acceptContinueRecap() {
    const current = Checkpoints.load();
    const selected = this._continueRecapReference;
    if (!current || !selected || current.runId !== selected.runId || current.createdAt !== selected.savedAt) {
      this.closeContinueRecap();
      Dialogs.alert({ title: 'SALVATAGGIO CAMBIATO', message: 'I dati sono stati aggiornati. Riapri Continua avventura per verificare la versione corretta.' });
      return false;
    }
    this.closeContinueRecap();
    return this.continueAdventure();
  },

  continueAdventure() {
    try {
      const checkpoint = Checkpoints.load();
      if (!checkpoint) return false;
      const result = Checkpoints.restoreInto(this, checkpoint);
      if (!result) return false;
      this.enterRunView();
      if (this.team.every(p => p.currentHp <= 0)) {
        this.renderDungeon(); this.renderBadges();
        this.resolveTeamDefeat();
        return true;
      }
      this.ensureActivePokemon();
      Dex.importLegacyTeam(checkpoint);
      Objectives.importCheckpoint(checkpoint);
      this.ensureOakEventAccessible();
      this.ensureEeveeElder();
      this.renderDungeon(); this.renderSidebar(); this.renderBadges();
      if (result.lostInCave.length) {
        this.logMsg(`La spedizione nella Grotta Celeste è stata abbandonata: ${result.lostInCave.join(' e ')} non ${result.lostInCave.length > 1 ? 'sono tornati' : 'è tornato'}.`);
        this.showDiscoveryNotice('SPEDIZIONE ABBANDONATA · POKÉMON PERSI', 4000);
        this.saveCheckpoint();
      } else if (result.caveAbandoned) {
        this.logMsg('Spedizione interrotta. I Pokémon esausti possono essere curati al Centro Pokémon.');
        this.saveCheckpoint();
      } else this.logMsg(result.interrupted ? 'Run ripresa: la lotta interrotta è stata abbandonata, le perdite restano.' : 'Avventura ripresa dall’ultimo checkpoint.');
      return true;
    } catch (error) {
      console.error('Ripresa non riuscita:', error);
      Dialogs.alert({ title: 'ERRORE CHECKPOINT', message: 'Checkpoint non valido o danneggiato.' });
      return false;
    }
  },

  /** Interfaccia della partita in corso (mappa e pannelli laterali). */
  enterRunView() {
    for (const id of ['main-menu-overlay', 'starter-scene-overlay', 'overlay-battle', 'gameover-overlay']) this.$id(id)?.classList.add('hidden');
    this.$id('rotom-body')?.classList.remove('battle-active');
    document.body.classList.add('in-run');
    this.music?.setScene('exploration');
    this.openWings();
    this.syncQuickMenuState();
  },

  openMenuMessage(type) {
    this.menuMessageType = type;
    const dialog = this.$id('menu-message'), confirm = this.$id('menu-message-confirm'), cancel = this.$id('menu-message-cancel');
    this.$id('menu-message-heading').textContent = type === 'support' ? 'CONTATTA ASSISTENZA' : 'CREDITI';
    const content = this.$id('menu-message-text');
    content.replaceChildren();
    if (type === 'support') content.textContent = 'Vuoi aprire il server Discord di Pokéxplorer per chiedere assistenza?';
    else if (type === 'credits') {
      for (const line of [
        'Pokéxplorer · fan game gratuito e senza scopo di lucro, creato da 17nico.',
        'Pokémon © Nintendo, Creatures Inc., GAME FREAK inc. e The Pokémon Company. Progetto non ufficiale, non affiliato né approvato.',
        'Dati Pokémon: PokéAPI (BSD-3). Sprite di mappa e allenatori: pret/pokefirered. Font: Press Start 2P (SIL OFL).',
        'Dettagli completi nel file CREDITS.md del progetto.',
      ]) content.append(Object.assign(document.createElement('p'), { textContent: line }));
    }
    this._menuMessageFocusBefore = document.activeElement;
    confirm.classList.toggle('hidden', type !== 'support');
    confirm.textContent = 'APRI DISCORD';
    cancel.textContent = 'CHIUDI';
    dialog.classList.remove('hidden');
    cancel.focus();
  },

  closeMenuMessage() {
    this.$id('menu-message')?.classList.add('hidden');
    this._menuMessageFocusBefore?.focus?.();
  },

  // ---------------------------------------------------------------- Scelta del personaggio e dello starter
  selectPlayerGender(gender, force = false) {
    if (!['male', 'female', 'champion'].includes(gender) || (!force && (this.team.length || this.isLocked))) return false;
    if (gender === 'champion' && !Objectives.unlockChampion()) return false;
    this.playerGender = gender;
    for (const [id, active] of [['choose-male', gender === 'male'], ['choose-female', gender === 'female'], ['choose-champion', gender === 'champion']]) {
      const button = this.$id(id);
      if (button) { button.classList.toggle('selected', active); button.setAttribute('aria-pressed', String(active)); }
    }
    return true;
  },

  /** Modalità della prossima run; la scelta viene ricordata per le run successive. */
  selectRunMode(mode) {
    this.nextRunMode = normalizeRunMode(mode);
    try { localStorage.setItem('pokexplorer:run-mode', this.nextRunMode); } catch { /* memoria non disponibile */ }
    for (const [id, active] of [['choose-nuzlocke', this.nextRunMode === 'nuzlocke'], ['choose-normal', this.nextRunMode === 'normal']]) {
      const button = this.$id(id);
      if (button) { button.classList.toggle('selected', active); button.setAttribute('aria-pressed', String(active)); }
    }
    return this.nextRunMode;
  },

  updateChampionChoice() {
    const button = this.$id('choose-champion');
    if (!button) return;
    const unlocked = Objectives.unlockChampion() === true;
    button.disabled = !unlocked;
    button.textContent = unlocked ? 'CAMPIONE' : 'CAMPIONE 🔒';
    button.title = unlocked ? 'Personaggio Campione sbloccato' : 'Completa una run con un solo Pokémon';
  },

  startStarterScene() {
    this.selectedStarterData = null;
    let saved = 'nuzlocke';
    try { saved = localStorage.getItem('pokexplorer:run-mode') || 'nuzlocke'; } catch { /* memoria non disponibile */ }
    this.selectRunMode(saved);
    this.updateChampionChoice();
    this.$id('starter-scene-overlay').classList.remove('hidden');
    this.$id('dialog-actions').classList.add('hidden');
    this.$id('starter-showcase').className = 'pokemon-showcase-box';
    this.$id('starter-selection-info').textContent = 'Tre compagni. Un solo inizio.';
    this.$id('dialog-text').textContent = 'RotomDex: scegli una Poké Ball dalla valigetta.';
    const container = this.$id('briefcase-balls');
    container.replaceChildren(...STARTERS.map(starter => {
      const data = speciesData(starter.id);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'pokeball-wrapper';
      button.dataset.type = starter.type;
      button.setAttribute('aria-label', `Seleziona ${data.name}`);
      button.innerHTML = '<span class="ball-pad"></span><span class="ball-model" aria-hidden="true"><span class="pokeball-top"></span><span class="pokeball-button"></span><span class="pokeball-bottom"></span></span><span class="starter-name"></span><span class="starter-kind"></span>';
      button.querySelector('.starter-name').textContent = data.name.toUpperCase();
      button.querySelector('.starter-kind').textContent = starter.label;
      button.onclick = () => {
        container.querySelectorAll('.pokeball-wrapper').forEach(b => b.classList.toggle('open', b === button));
        this.selectedStarterData = data;
        this.$id('starter-showcase-img').src = pokemonSprite(data.id);
        this.$id('starter-showcase').className = `pokemon-showcase-box active bg-${starter.type}`;
        this.$id('starter-selection-info').textContent = `${data.name.toUpperCase()} · TIPO ${starter.label}`;
        this.$id('dialog-text').textContent = `Vuoi iniziare l'avventura con ${data.name.toUpperCase()}?`;
        this.$id('dialog-actions').classList.remove('hidden');
        this.$id('btn-confirm-yes').focus({ preventScroll: true });
        this.$id('dialog-actions').scrollIntoView?.({ block: 'nearest' });
      };
      return button;
    }));
    container.querySelector('button')?.focus({ preventScroll: true });
  },

  resetStarter() {
    this.selectedStarterData = null;
    this.$id('dialog-actions').classList.add('hidden');
    this.$id('dialog-text').textContent = 'RotomDex: scegli una Poké Ball dalla valigetta.';
    this.$id('starter-selection-info').textContent = 'Tre compagni. Un solo inizio.';
    this.$id('starter-showcase').className = 'pokemon-showcase-box';
    document.querySelectorAll('.pokeball-wrapper').forEach(b => b.classList.remove('open'));
  },

  confirmStarter() {
    const starter = this.selectedStarterData;
    if (!starter) return;
    const gender = this.playerGender;
    this.resetRunState();
    this.playerGender = gender;
    this.runId = `run-${Date.now()}`;
    this.devRun = this.devMode;
    this.runMode = normalizeRunMode(this.nextRunMode);
    this.runStats.startedAt = Date.now();
    if (this.devMode) Object.assign(this.items, { rareCandy: 999, goldCandy: 999 });
    this.team = [new Pokemon(starter, 5)];
    this.activeMon = this.team[0];
    Dex.record(this.activeMon, 'caught', `Starter · Piano ${this.floor}`);
    this.soloRunEligible = true; this.soloRunTracked = true;
    Objectives.record('run_start', this.runId, { mode: this.runMode });
    Objectives.record('floor', this.runId, { floor: this.floor });
    this.enterRunView();
    this.generateFloorDungeon();
    this.renderBadges();
    this.saveCheckpoint();
    window.dispatchEvent(new Event('pokex:dex-battle-ended'));
  },
};

return {menusMethods};
})();
const __m13 = (() => {
const Objectives = __m9;
const { keyRouter, isSpace } = __m10;
// Schermata degli Obiettivi dell'account.



const el = id => document.getElementById(id);
let previousFocus = null;
let onChange = () => {};
const setChampionListener = fn => { onChange = typeof fn === 'function' ? fn : () => {}; };

function render() {
  const value = Objectives.values();
  for (const [name, count] of [['runs', value.runs], ['catches', value.catches], ['wins', value.wins]]) {
    const target = el(`objectives-${name}`);
    if (target) target.textContent = String(count);
  }
  const status = el('objectives-cloud');
  if (status) status.textContent = `REGISTRO: ${value.status.toUpperCase()}${value.pending ? ` · ${value.pending} IN ATTESA` : ''}`;
  const list = el('objectives-quests');
  const filter = el('objectives-filter')?.value || 'all';
  const visible = value.quests.filter(quest => filter === 'all' || (filter === 'completed' ? quest.complete : quest.mode === filter));
  if (list) list.replaceChildren(...visible.map(quest => {
    const card = document.createElement('article');
    card.className = 'objective-entry' + (quest.complete ? ' done' : '');
    const text = document.createElement('div');
    text.className = 'objective-entry-text';
    const title = Object.assign(document.createElement('strong'), { textContent: `${String(quest.id).padStart(2, '0')} · ${quest.mode ? (quest.mode === "normal" ? "NORMALE · " : "NUZLOCKE · ") : ""}${quest.name}` });
    const description = Object.assign(document.createElement('p'), { textContent: quest.description });
    const progress = Object.assign(document.createElement('small'), { textContent: quest.complete ? '✓ COMPLETATO' : `${quest.progress} / ${quest.goal}` });
    const image = Object.assign(document.createElement('img'), { className: 'objective-entry-art' + (quest.complete ? '' : ' locked'), alt: '', src: quest.image, loading: 'lazy' });
    text.append(title, description, progress);
    card.append(text, image);
    return card;
  }));
  onChange();
}

const isOpen = () => !el('objectives-overlay')?.classList.contains('hidden');
function open() {
  const panel = el('objectives-overlay');
  if (!panel) return;
  previousFocus = document.activeElement;
  render();
  panel.classList.remove('hidden');
  el('objectives-close')?.focus();
}
function close() {
  el('objectives-overlay')?.classList.add('hidden');
  previousFocus?.focus?.();
}

function init() {
  el('objectives-filter')?.addEventListener('change', render);
  el('objectives-close')?.addEventListener('click', close);
  el('objectives-bottom-close')?.addEventListener('click', close);
  el('objectives-overlay')?.addEventListener('click', event => { if (event.target === el('objectives-overlay')) close(); });
  keyRouter.add('objectives', 90, event => {
    if (!isOpen()) return false;
    if (['Escape', 'Backspace'].includes(event.key)) { event.preventDefault(); close(); return true; }
    if (isSpace(event) || event.key === 'Enter') { event.preventDefault(); if (!event.repeat) document.activeElement?.click?.(); }
    return true;
  });
  window.addEventListener('pokex:objectives-changed', render);
}

return {setChampionListener,render,isOpen,open,close,init};
})();
const __m14 = (() => {
const { keyRouter, keyDirection, isSpace, isTyping, isShown, trapTab } = __m10;
const Dialogs = __m11;
const Checkpoints = __m7;
const ObjectivesUI = __m13;
// Collegamento dei controlli dell'interfaccia (mouse, touch e tastiera) alle azioni del motore.





const DIRECTIONS = Object.freeze({ up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] });
const SUPPORT_URL = 'https://discord.gg/qNGscTEYHM';

const controlsMethods = {
  bindEvents() {
    const click = (id, handler) => { const el = this.$id(id); if (el) el.onclick = handler; };
    const shown = id => isShown(this.$id(id));

    // ---------------------------------------------------------------- Menu principale e finale
    click('btn-start-game', async () => {
      if (Checkpoints.load() && !await Dialogs.confirm({
        title: 'NUOVA AVVENTURA?', message: 'Avviare una nuova run sostituirà il checkpoint precedente al prossimo salvataggio. Vuoi continuare?',
        accept: 'NUOVA AVVENTURA', cancel: 'ANNULLA',
      })) return;
      this.$id('main-menu-overlay').classList.add('hidden');
      this.startStarterScene();
    });
    click('btn-continue-game', () => this.openContinueRecap());
    click('continue-recap-accept', () => this.acceptContinueRecap());
    click('continue-recap-cancel', () => this.closeContinueRecap());
    click('continue-recap-close', () => this.closeContinueRecap());
    click('btn-return-main-menu', () => this.returnToMainMenu());
    click('btn-contact-support', () => this.openMenuMessage('support'));
    click('btn-view-progress', () => ObjectivesUI.open());
    click('btn-credits', () => this.openMenuMessage('credits'));
    click('menu-message-cancel', () => this.closeMenuMessage());
    click('menu-message-confirm', () => {
      if (this.menuMessageType === 'support') window.open(SUPPORT_URL, '_blank', 'noopener,noreferrer');
      this.closeMenuMessage();
    });
    click('btn-victory-photo', () => this.showMemoryPhoto());
    click('btn-victory-menu', () => this.returnToMainMenu());
    click('btn-photo-back', () => this.returnToVictoryScreen());
    click('btn-photo-download', () => this.downloadMemoryPhoto());

    // ---------------------------------------------------------------- Scelta iniziale
    click('choose-male', () => this.selectPlayerGender('male'));
    click('choose-female', () => this.selectPlayerGender('female'));
    click('choose-champion', () => this.selectPlayerGender('champion'));
    click('choose-nuzlocke', () => this.selectRunMode('nuzlocke'));
    click('choose-normal', () => this.selectRunMode('normal'));
    click('btn-confirm-yes', () => this.confirmStarter());
    click('btn-confirm-no', () => this.resetStarter());

    // ---------------------------------------------------------------- Squadra, scheda e portamedaglie
    click('btn-scan-radar', () => this.scanRadar());
    click('item-target-cancel', () => this.cancelItemTargetSelection());
    click('eevee-stone-gift-cancel', () => this.closeEeveeGift());
    click('eevee-evolution-cancel', () => this.finishEeveeStoneChoice(false));
    click('eevee-evolution-accept', () => this.finishEeveeStoneChoice(true));
    click('party-info-action', () => this.openPokemonInfo(this.partyMenuPokemon));
    click('party-move-action', () => this.beginPartyReorder());
    click('party-send-action', () => { const pokemon = this.partyMenuPokemon; this.closePartyActions(); if (pokemon) this.selectBattlePokemon(pokemon); });
    click('party-close-action', () => this.closePartyActions());
    click('pokemon-info-close', () => this.closePokemonInfo());
    click('pokemon-tab-stats', () => this.selectPokemonInfoTab('stats'));
    click('pokemon-tab-moves', () => this.selectPokemonInfoTab('moves'));
    click('btn-badge-case', () => this.openBadgeCase());
    click('badge-case-close', () => this.closeBadgeCase());
    this.$id('badge-case-overlay')?.addEventListener('click', event => { if (event.target === event.currentTarget) this.closeBadgeCase(); });
    for (const tab of document.querySelectorAll('[data-bag-tab]'))
      tab.addEventListener('click', () => { this.bagCategory = tab.dataset.bagTab; this.renderSidebar(); });

    // ---------------------------------------------------------------- Lotta
    click('btn-act-fight', () => this.showMoves());
    click('btn-act-bag', () => this.showBagMenu());
    click('btn-act-switch', () => this.showTeamMenu());
    click('btn-act-run', () => this.tryRunAway());
    click('battle-close-bag', () => this.showMainActions());
    click('battle-close-team', () => { if (!this.pendingForcedSwitch) this.showMainActions(); });
    click('btn-move-back', () => this.showMainActions());
    click('btn-start-trainer-battle', () => this.beginEncounter(this.gymQueue.length > 0 ? 'gym' : 'trainer'));
    click('btn-start-wild-battle', () => {
      const encounter = this.pendingWildEncounterType || 'wild';
      this.pendingWildEncounterType = null;
      this.beginEncounter(encounter);
    });
    click('btn-start-gym-leader', () => {
      this.$id('gym-leader-intro').classList.add('hidden');
      this.gymLeaderIndex = 0;
      this.startBattle('gym', true);
    });
    click('skip-new-move-btn', () => this.resolveMoveChoice(null));
    click('btn-battle-confirm-yes', () => this.acceptBattleConfirmation());
    click('btn-battle-confirm-no', () => this.closeBattleConfirmation());
    click('evolution-start', () => this.startEvolutionAnimation());
    click('evolution-finish', () => this.finishEvolution());
    this.$id('battle-msg')?.addEventListener('click', () => this.acknowledgeDialogue());
    // Un dialogo di lotta avanza anche toccando il campo; i pulsanti restano cliccabili.
    document.addEventListener('pointerdown', event => {
      if (!this.dialogueResolve || event.target.closest('#pokex-confirm-overlay')) return;
      if (event.target.closest('button, [role="button"], #battle-confirm, #evolution-overlay')) return;
      this.acknowledgeDialogue();
    }, true);

    // ---------------------------------------------------------------- Città: negozio, palestra, Centro Pokémon
    click('close-market-btn', () => this.closePokemart());
    click('mart-close-x', () => this.closePokemart());
    click('gym-entry-yes', () => this.confirmGymChallenge());
    click('gym-entry-no', () => this.cancelGymChallenge());
    click('ability-capsule-cancel', () => this.closeAbilityCapsule());

    // ---------------------------------------------------------------- Grotta Celeste
    click('celestial-dialog-next', () => this.advanceCelestialDialog());
    click('celestial-dialog-yes', () => this.answerOakInvitation(true));
    click('celestial-dialog-no', () => this.answerOakInvitation(false));
    click('celestial-team-confirm', () => this.confirmCelestialTeam());
    click('celestial-team-cancel', () => this.cancelCelestialTeam());

    // ---------------------------------------------------------------- Opzioni, velocità, DEV MODE
    click('quick-settings-toggle', () => { this.syncQuickMenuState(); this.toggleQuickSettings(); });
    click('return-main-menu-quick', () => this.requestReturnToMainMenu());
    click('save-game-quick', () => this.manualSaveAdventure());
    click('speed-toggle', () => this.setGameSpeed(this.speedMultiplier === 1 ? 2 : 1));
    click('auto-dialogue-toggle', () => this.setAutoDialogue(!this.autoDialogue));
    document.querySelectorAll('#mobile-sheet-tabs [data-sheet]').forEach(button => button.addEventListener('click', () => {
      const name = button.dataset.sheet;
      this.setMobileSheet(document.body.classList.contains(`sheet-${name}`) ? null : name);
    }));

    this.setAutoDialogue(this.autoDialogue);
    document.addEventListener('pointerdown', event => {
      const menu = this.$id('game-quick-settings');
      if (menu && !menu.contains(event.target)) this.closeQuickSettings();
    });
    this.bindDevControls(click);
    this.syncQuickMenuState();

    // ---------------------------------------------------------------- Movimento (tastiera, D-pad, touch)
    this.bindDirectionalPads();
    this.installKeyboard(shown);
  },

  bindDirectionalPads() {
    const pads = [...document.querySelectorAll('#mobile-dpad [data-move], .sidebar-movement-controls [data-move]')];
    for (const button of pads) {
      const step = DIRECTIONS[button.dataset.move];
      const source = `pad:${button.closest('#mobile-dpad') ? 'touch' : 'side'}:${button.dataset.move}`;
      button.addEventListener('pointerdown', event => {
        if (event.button !== 0 || !event.isPrimary) return;
        event.preventDefault();
        button.classList.add('is-pressed');
        this.startContinuousWalk(step[0], step[1], source);
        try { button.setPointerCapture(event.pointerId); } catch { /* puntatore già rilasciato */ }
      });
      const release = () => { button.classList.remove('is-pressed'); this.stopContinuousWalk(source); };
      for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) button.addEventListener(type, release);
      // detail=0: tastiera o tecnologie assistive; il puntatore è gestito su pointerdown.
      button.addEventListener('click', event => { if (event.detail !== 0) { event.preventDefault(); return; } this.movePlayer(...step); });
      button.addEventListener('contextmenu', event => event.preventDefault());
    }
    document.addEventListener('pointerup', () => { for (const key of [...this.walkInputs.keys()]) if (key.startsWith('pad:')) this.stopContinuousWalk(key); });
  },

  installKeyboard(shown) {
    const keys = keyRouter;
    keys.install(window);
    // Esc chiude sempre il menu Opzioni, senza consumare il tasto.
    keys.add('quick-settings', 200, event => { if (event.key === 'Escape') this.closeQuickSettings(); return false; });
    keys.add('dev-overlays', 75, event => {
      for (const [id, close] of [['dev-code-overlay', () => this.closeDevCode()], ['floor-jump-overlay', () => this.closeFloorJumpCode()]]) {
        if (!shown(id)) continue;
        if (event.key === 'Escape') { event.preventDefault(); close(); }
        trapTab(event, this.$id(id));
        return true;
      }
      return false;
    });
    keys.add('ability-capsule', 74, event => {
      if (!shown('ability-capsule-overlay')) return false;
      if (event.key === 'Escape') { event.preventDefault(); this.closeAbilityCapsule(); }
      trapTab(event, this.$id('ability-capsule-overlay'), 'button:not(:disabled)');
      return true;
    });
    keys.add('menu-panels', 120, event => {
      for (const [id, close] of [['continue-recap-overlay', () => this.closeContinueRecap()],['menu-message',()=>this.closeMenuMessage()],['eevee-stone-gift',()=>this.closeEeveeGift()],['eevee-stone-evolution',()=>this.finishEeveeStoneChoice(false)]]) {
        if (!shown(id)) continue;
        if (event.key === 'Escape') { event.preventDefault(); if (!event.repeat) close(); return true; }
        trapTab(event, this.$id(id));
        return true;
      }
      return false;
    });
    keys.add('celestial-modals', 80, event => this.handleCelestialModalKey(event));
    keys.add('pokemart', 70, event => this.handleShopKey(event));
    this.installBattleKeyboardNavigation();
    keys.add('world', 10, event => this.handleWorldKey(event, shown));
    window.addEventListener('keyup', event => {
      const dir = keyDirection(event);
      if (dir) this.stopContinuousWalk(`key:${dir}`);
    });
    window.addEventListener('blur', () => this.stopContinuousWalk());
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.stopContinuousWalk(); });
  },

  handleWorldKey(e, shown) {
    if (isTyping(e) || e.ctrlKey || e.altKey || e.metaKey) return false;
    if (shown('pokedex-overlay')) return false;
    if (e.key === 'Escape' && shown('badge-case-overlay')) { this.closeBadgeCase(); return true; }
    if (e.key === 'Escape' && shown('party-action-menu')) { this.closePartyActions(); return true; }
    if (isSpace(e) && !e.repeat) {
      // La schermata "LOTTA!" è una conferma: Spazio equivale al clic, una sola volta.
      if (shown('trainer-encounter-overlay')) {
        e.preventDefault();
        const fight = this.$id('btn-start-trainer-battle');
        if (fight && !fight.disabled) fight.click();
        return true;
      }
      if (shown('wild-encounter-overlay')) { e.preventDefault(); this.$id('btn-start-wild-battle')?.click(); return true; }
      if (shown('celestial-dialog')) {
        e.preventDefault();
        if (this.celestialDialogStep === 'question') {
          const choice = this.$id('celestial-dialog-actions');
          (choice?.contains(document.activeElement) ? document.activeElement : this.$id('celestial-dialog-yes'))?.click();
        } else this.advanceCelestialDialog();
        return true;
      }
      if (this.dialogueResolve) { e.preventDefault(); this.acknowledgeDialogue(); return true; }
      if (shown('npc-dialog-overlay')) {
        e.preventDefault();
        if (this.pendingNpcAdvance) this.pendingNpcAdvance();
        else this.$id('npc-dialog-overlay').querySelector('button:not(.hidden):not(:disabled)')?.click();
        return true;
      }
    }
    const dir = keyDirection(e);
    if (!dir) return false;
    if (shown('celestial-dialog')) {
      e.preventDefault();
      if (this.celestialDialogStep === 'question') {
        const current = document.activeElement === this.$id('celestial-dialog-no') ? 'no' : 'yes';
        this.$id(current === 'yes' ? 'celestial-dialog-no' : 'celestial-dialog-yes')?.focus();
      }
      return true;
    }
    if (['pokemon-info-overlay', 'badge-case-overlay', 'objectives-overlay'].some(shown)) return true;
    e.preventDefault();
    this.startContinuousWalk(...DIRECTIONS[dir], `key:${dir}`);
    return true;
  },
};

return {controlsMethods};
})();
const __m15 = (() => {
const { BADGE_TEAM_SLOTS, ITEMS, KANTO_GYMS, badgeSprite, itemImage } = __m3;
const { abilityData, moveData } = __m0;
const { typeName } = __m4;
const { POKEMON_NATURES, STAT_LABELS_IT } = __m2;
// Pannelli laterali: squadra, zaino, posizione, portamedaglie e scheda del Pokémon.





const CITY_NAMES = Object.freeze(['Plumbeopoli', 'Celestopoli', 'Aranciopoli', 'Azzurropoli', 'Fucsiapoli', 'Zafferanopoli', 'Isola Cannella', 'Smeraldopoli']);
const BAG_CATEGORIES = Object.freeze({
  rimedi: ['potion', 'superPotion', 'hyperPotion', 'elixir', 'abilityCapsule', 'waterStone', 'thunderStone', 'fireStone', 'rareCandy', 'goldCandy'],
  pokeball: ['pokeball', 'masterball'],
  chiave: ['fishingRod', 'expShare'],
});
const genderMark = mon => (mon.gender === 'male' ? ' ♂' : mon.gender === 'female' ? ' ♀' : '') + (mon.isShiny ? ' ✨' : '');
const make = (tag, className, text) => { const el = document.createElement(tag); if (className) el.className = className; if (text != null) el.textContent = text; return el; };

const sidebarMethods = {
  isBadgeEarned(id) {
    return this.badges.some((badge, index) => typeof badge === 'object' ? Number(badge.id) === id
      : String(badge).toLowerCase() === KANTO_GYMS[id].badge.toLowerCase() || index === id);
  },

  renderBadges() {
    const count = KANTO_GYMS.filter((_, i) => this.isBadgeEarned(i)).length;
    const counter = this.$id('badges-container');
    if (counter) counter.textContent = `${count} / 8 MEDAGLIE`;
    const gallery = this.$id('badge-case-grid');
    if (!gallery) return;
    gallery.replaceChildren(...KANTO_GYMS.map((gym, i) => {
      const earned = this.isBadgeEarned(i);
      const slot = make('div', `badge-case-slot ${earned ? 'earned' : 'locked'}`);
      slot.setAttribute('aria-label', `Medaglia ${gym.badge}: ${earned ? 'ottenuta' : 'da ottenere'}`);
      const image = Object.assign(make('img', 'badge-case-image'), { src: badgeSprite(i), alt: `Medaglia ${gym.badge}`, draggable: false });
      slot.append(image, make('strong', '', gym.badge), make('small', '', earned ? 'OTTENUTA' : 'DA OTTENERE'));
      return slot;
    }));
    const summary = this.$id('badge-case-progress');
    if (summary) summary.textContent = `${count} DI 8 MEDAGLIE CONQUISTATE`;
  },

  openBadgeCase() {
    this.closePartyActions(); this.stopContinuousWalk(); this.renderBadges();
    this.$id('badge-case-overlay')?.classList.remove('hidden');
    this.$id('badge-case-close')?.focus();
  },
  closeBadgeCase() { this.$id('badge-case-overlay')?.classList.add('hidden'); },

  // ---------------------------------------------------------------- Azioni sulla squadra
  closePartyActions() {
    this.partyMenuPokemon = null; this.partyMoveSource = null;
    const drawer = this.$id('party-action-menu');
    drawer?.classList.add('hidden');
    if (drawer?.classList.contains('is-portal')) {
      drawer.classList.remove('is-portal');
      this.$id('rotom-container')?.querySelector('.rotom-wing-left')?.appendChild(drawer);
    }
    this.$id('rotom-container')?.classList.remove('party-drawer-open');
    this.$id('party-move-hint')?.classList.add('hidden');
    this.$id('party-send-action')?.classList.add('hidden');
  },

  openPartyActions(pokemon) {
    if (!pokemon || !this.team.includes(pokemon) || this.pendingItemTarget || this.adventureCompleted ||
      (this.isLocked && !this.isBattleVisible()) || this.battleBusy || this.dialogueResolve) return;
    if (this.partyMoveSource) { this.completePartyReorder(pokemon); return; }
    this.stopContinuousWalk();
    this.partyMenuPokemon = pokemon;
    this.$id('party-action-title').textContent = `${pokemon.name} · Lv.${pokemon.level}`;
    const drawer = this.$id('party-action-menu');
    // Su schermi stretti il menu si apre sopra tutto, fuori dall'ala laterale.
    if (window.matchMedia?.('(max-width: 1020px)').matches) { document.body.appendChild(drawer); drawer.classList.add('is-portal'); }
    else { this.$id('rotom-container')?.querySelector('.rotom-wing-left')?.appendChild(drawer); drawer.classList.remove('is-portal'); }
    drawer.classList.remove('hidden');
    this.$id('rotom-container')?.classList.add('party-drawer-open');
    const battle = this.isBattleVisible();
    this.$id('party-move-action').disabled = battle;
    this.$id('party-move-action').title = battle ? 'Riordina la squadra fuori dalla lotta.' : '';
    this.$id('party-send-action').classList.toggle('hidden', !battle || pokemon === this.activeMon || pokemon.currentHp <= 0);
    this.renderSidebar();
    if (battle) this.focusBattleSelection('#party-action-menu #party-send-action:not(.hidden):not(:disabled),#party-action-menu #party-close-action');
  },

  beginPartyReorder() {
    const selected = this.partyMenuPokemon;
    if (!selected || this.isBattleVisible() || this.isLocked || this.pendingItemTarget) return;
    this.partyMoveSource = selected;
    this.$id('party-move-hint').textContent = 'Scegli il Pokémon con cui scambiare la posizione.';
    this.$id('party-move-hint').classList.remove('hidden');
    this.renderSidebar();
  },

  completePartyReorder(other) {
    const first = this.partyMoveSource;
    if (!first || !other || first === other || !this.team.includes(other) || !this.team.includes(first)) return;
    const a = this.team.indexOf(first), b = this.team.indexOf(other);
    [this.team[a], this.team[b]] = [this.team[b], this.team[a]];
    this.ensureActivePokemon();
    this.closePartyActions();
    this.renderSidebar();
    this.logMsg(`Posizioni scambiate! ${this.activeMon?.name || this.team[0].name} è il Pokémon in testa.`);
  },

  // ---------------------------------------------------------------- Scheda del Pokémon
  selectPokemonInfoTab(tab = 'stats') {
    const selected = tab === 'moves' ? 'moves' : 'stats';
    for (const key of ['stats', 'moves']) {
      const button = this.$id(`pokemon-tab-${key}`);
      button?.classList.toggle('active', key === selected);
      button?.setAttribute('aria-selected', String(key === selected));
      this.$id(`pokemon-panel-${key}`)?.classList.toggle('hidden', key !== selected);
    }
    const container = this.$id('pokemon-info-content');
    if (container) container.scrollTop = 0;
  },

  openPokemonInfo(pokemon) {
    this.setMobileSheet(null);
    if (!pokemon || !this.team.includes(pokemon)) return;
    this.partyInfoPokemon = pokemon;
    this.$id('pokemon-info-name').textContent = pokemon.name + genderMark(pokemon);
    const sprite = this.$id('pokemon-info-sprite');
    sprite.src = pokemon.spriteFront; sprite.alt = `Sprite di ${pokemon.name}`;
    this.$id('pokemon-info-level').textContent = `LIVELLO ${pokemon.level}`;
    this.$id('pokemon-info-types').replaceChildren(...pokemon.types.map(type => make('span', `pokemon-type-chip type-${type}`, typeName(type))));
    const nature = pokemon.nature || POKEMON_NATURES[0];
    const neutral = nature[1] === nature[2];
    this.$id('pokemon-info-nature').textContent = `NATURA: ${nature[0]} (${neutral ? 'neutra' : `+${STAT_LABELS_IT[nature[1]]} / −${STAT_LABELS_IT[nature[2]]}`})`;
    this.$id('pokemon-info-ability').textContent = `ABILITÀ: ${pokemon.abilityName || '—'}`;
    this.$id('pokemon-info-ability-description').textContent = abilityData(pokemon.ability)?.desc || 'Descrizione non disponibile.';
    this.$id('pokemon-info-hero').className = `pokemon-info-hero type-${pokemon.type}`;
    const values = pokemon.getStatsSummary();
    // Le barre sono in scala con la statistica più alta del Pokémon.
    const scale = Math.max(30, ...Object.values(values).map(Number));
    this.$id('pokemon-info-stats').replaceChildren(...Object.entries(values).map(([key, value]) => {
      const tile = make('div', 'pokemon-info-stat');
      const number = make('em', neutral ? '' : nature[1] === key ? 'raised' : nature[2] === key ? 'lowered' : '', key === 'hp' ? `${pokemon.currentHp}/${value}` : value);
      const meter = make('div', 'pokemon-stat-meter');
      meter.setAttribute('role', 'progressbar'); meter.setAttribute('aria-label', STAT_LABELS_IT[key]);
      meter.setAttribute('aria-valuemin', '0'); meter.setAttribute('aria-valuemax', String(scale)); meter.setAttribute('aria-valuenow', String(value));
      const fill = make('span', 'pokemon-stat-meter-fill');
      fill.style.width = `${Math.min(100, Math.max(3, value / scale * 100))}%`;
      meter.appendChild(fill);
      tile.append(make('span', '', STAT_LABELS_IT[key]), number, meter);
      return tile;
    }));
    this.$id('pokemon-info-moves').replaceChildren(...pokemon.moves.map(move => {
      const tile = make('div', `pokemon-move-tile type-${move.type || 'normal'}`);
      const details = make('details', 'pokemon-move-details');
      details.append(make('summary', '', 'Descrizione'), make('small', 'move-description', moveData(move.id)?.desc || 'Descrizione non disponibile.'));
      tile.append(make('span', 'pokemon-move-name', move.name),
        make('small', '', `${typeName(move.type)} · POT ${move.power || '—'} · PREC ${move.alwaysHits || move.accuracy == null ? '—' : move.accuracy + '%'} · PP ${move.currentPp}/${move.maxPp}`),
        details);
      return tile;
    }));
    this.selectPokemonInfoTab('stats');
    this.$id('pokemon-info-overlay').classList.remove('hidden');
    this.$id('pokemon-info-close')?.focus({ preventScroll: true });
  },

  closePokemonInfo() { this.pokemonInfoRequest++; this.partyInfoPokemon = null; this.$id('pokemon-info-overlay')?.classList.add('hidden'); },

  // ---------------------------------------------------------------- Pannelli laterali
  locationLabel() {
    if (this.isCelestialCave) return 'Luogo: Grotta Celeste';
    if (this.floor % 10 === 0) return `Città: ${CITY_NAMES[this.floor / 10 - 1]} · Piano ${this.floor}`;
    if (this.floor % 5 === 0) return `Villaggio · Piano ${this.floor}`;
    return `Percorso · Piano ${this.floor}`;
  },

  renderSidebar() {
    const location = this.$id('route-location-label');
    if (location) location.textContent = this.team.length ? this.locationLabel() : '—';
    this.$id('player-money').textContent = `$${this.money}`;
    const radarCount = this.$id('radar-charge-count');
    if (radarCount) radarCount.textContent = `SCANSIONI: ${this.radarCharges === Infinity ? '∞' : this.radarCharges}`;
    const radar = this.$id('btn-scan-radar');
    if (radar) {
      radar.classList.toggle('radar-empty', this.radarCharges === 0);
      radar.classList.toggle('radar-infinite', this.radarCharges === Infinity);
      radar.disabled = !this.gridMap.length;
    }
    this.renderBag();
    this.renderTeam();
  },

  renderBag() {
    const bag = this.$id('bag-list');
    if (!bag) return;
    document.querySelectorAll('[data-bag-tab]').forEach(tab => {
      const active = tab.dataset.bagTab === this.bagCategory;
      tab.classList.toggle('active', active); tab.setAttribute('aria-selected', String(active));
    });
    const inBattle = this.isBattleVisible();
    const buttons = [];
    for (const id of BAG_CATEGORIES[this.bagCategory]) {
      const item = ITEMS[id];
      if (this.bagCategory === 'chiave') {
        const owned = id === 'expShare' ? this.hasExpShare() : Boolean(this.items[id]);
        const button = make('button', `bag-item bag-key-item${owned ? ' owned' : ''}${id === 'expShare' && owned && this.expShareEnabled ? ' enabled' : ''}`);
        button.type = 'button';
        button.dataset.keyItem = id;
        button.append(Object.assign(make('img'), { src: itemImage(id), alt: '', width: 26, height: 26 }), make('span', '', item.label));
        if (id === 'expShare' && owned) button.append(Object.assign(make('span', 'key-item-indicator', this.expShareEnabled ? '●' : '○'), { ariaHidden: 'true' }));
        button.disabled = !owned || id !== 'expShare' || this.battleBusy || this.adventureCompleted;
        const hint = !owned ? ' (non ottenuto)' : id === 'fishingRod' ? ' (usala vicino all’acqua)'
          : this.expShareEnabled ? ' (attivo)' : ' (disattivo)';
        button.setAttribute('aria-label', item.label + hint);
        button.title = item.label + hint;
        if (id === 'expShare') button.onclick = () => this.toggleExpShare();
        buttons.push(button);
        continue;
      }
      // Gli oggetti consumabili compaiono solo quando se ne possiede almeno uno.
      if ((Number(this.items[id]) || 0) <= 0 || (item.dev && !this.devMode)) continue;
      const button = make('button', 'bag-item');
      button.type = 'button';
      button.append(Object.assign(make('img'), { src: itemImage(id), alt: '' }), make('span', '', item.label), make('strong', '', `×${this.items[id]}`));
      button.disabled = !(this.team.length && !this.pendingItemTarget && !this.battleBusy && !this.adventureCompleted && (!this.isLocked || inBattle)) ||
        ((item.evolves && inBattle) || (!['pokeball','masterball'].includes(id) && !this.team.some(mon => this.canUseItemOnMon(id, mon)))) ||
        (item.dev && (inBattle || this.devUpgradeInProgress || !this.team.some(mon => mon.level < 100)));
      if (button.disabled) button.title = 'Nessun Pokémon può usare ora questo strumento, oppure non è disponibile in questo momento.';
      button.onclick = () => this.chooseBattleItem(id);
      buttons.push(button);
    }
    if (!buttons.length) buttons.push(make('p', 'bag-empty', this.team.length ? 'Nessuno strumento.' : 'Lo zaino si riempie durante l’avventura.'));
    bag.replaceChildren(...buttons);
  },

  renderTeam() {
    const team = this.$id('team-grid');
    if (!team) return;
    const mode = this.$id('current-run-mode');
    if (mode) mode.textContent = this.runMode === 'normal' ? 'MODALITÀ NORMALE' : 'MODALITÀ NUZLOCKE';
    const progress = this.$id('party-progression-status');
    if (progress) progress.textContent = this.team.length ? `SQUADRA ${this.team.length}/${this.getTeamSlotLimit()} · CAP LV.${this.getLevelCap()}` : '';
    const inBattle = this.isBattleVisible();
    const slots = [];
    for (let i = 0; i < 6; i++) {
      const p = this.team[i];
      const slot = make('button', 'team-slot');
      slot.type = 'button';
      if (!p) {
        const locked = i >= this.getTeamSlotLimit();
        slot.classList.add('empty');
        slot.classList.toggle('locked', locked);
        if (locked) {
          // Il posto si sblocca con la medaglia che porta i posti disponibili oltre questo indice.
          const needed = BADGE_TEAM_SLOTS.findIndex(count => count > i);
          const badge = KANTO_GYMS[needed - 1]?.badge;
          slot.classList.add('badge-locked-placeholder');
          slot.setAttribute('aria-label', `Posto ${i + 1} bloccato: si sblocca con la Medaglia ${badge || ''}`.trim());
        } else slot.setAttribute('aria-label', `Posto ${i + 1} libero`);
        slot.disabled = true;
        slots.push(slot);
        continue;
      }
      const target = this.pendingItemTarget ? (this.canUseItemOnMon(this.pendingItemTarget, p) ? 'item-target-valid' : 'item-target-invalid') : '';
      slot.className = ['team-slot', `type-${p.type}`, p === this.activeMon && 'active', p.currentHp <= 0 && 'fainted', target,
        this.partyMoveSource === p && 'swap-choice', this.partyMoveSource && p !== this.partyMoveSource && 'move-destination'].filter(Boolean).join(' ');
      const state = p.currentHp <= 0 ? ' · esausto' : p === this.activeMon ? ' · Pokémon in testa' : '';
      slot.setAttribute('aria-label', `${p.name} · livello ${p.level} · ${p.currentHp}/${p.maxHp} PS${state}`);
      const top = make('div', 'slot-top');
      top.append(make('span', 'slot-name', p.name + genderMark(p)), make('span', 'slot-level', `Lv.${p.level}`));
      const hpBack = make('div', 'team-hp-bg');
      const hpFill = make('div', `team-hp-fill hp-${this.hpColorState(p)}`);
      hpFill.style.width = `${Math.max(0, Math.floor(100 * p.currentHp / p.maxHp))}%`;
      hpBack.append(hpFill);
      slot.append(top, Object.assign(make('img', 'team-slot-img'), { src: p.spriteFront, alt: '' }), hpBack, make('div', 'team-hp-text', `${p.currentHp}/${p.maxHp} PS`));
      slot.disabled = (inBattle && this.battleBusy) || (this.pendingItemTarget && !this.canUseItemOnMon(this.pendingItemTarget, p)) || (p.currentHp <= 0 && !this.pendingItemTarget && !this.abilityCapsuleOpen);
      slot.onclick = () => { if (this.pendingItemTarget) this.giveItemToPokemon(p); else this.openPartyActions(p); };
      slots.push(slot);
    }
    team.replaceChildren(...slots);
  },
};

return {genderMark,sidebarMethods};
})();
const __m16 = (() => {
const Dialogs = __m11;
const { GAME_BALANCE, LEGENDARY_BIRD_CHANCE_PER_STEP, shopItem } = __m3;
const Objectives = __m9;




const movementMethods = {
  walkClock(){return typeof performance!=='undefined'?performance.now():Date.now();},

  /** Una finestra aperta sopra la mappa impedisce di camminare. */
  overlayBlocksWalking(){
    return ['pokemon-info-overlay','badge-case-overlay','pokedex-overlay','party-action-menu','dev-code-overlay','floor-jump-overlay','objectives-overlay']
      .some(id=>{const el=this.$id(id);return el&&!el.classList.contains('hidden');});
  },

  startContinuousWalk(dx,dy,source){
    if(this.overlayBlocksWalking()||this.isLocked||this.adventureCompleted||this.pendingItemTarget||!this.gridMap?.length)return false;
    // Keyboard auto-repeat never creates a second input or an overlapping timer.
    if(this.walkInputs.has(source))return true;
    this.walkInputs.set(source,{dx,dy});
    this.heldWalk={dx,dy,source};
    // Last pressed direction wins; releasing it resumes an earlier held direction.
    // A new input during an active step is deferred until the animation ends.
    this.queueContinuousWalk(true);
    return true;
  },

  queueContinuousWalk(immediate=false){
    clearTimeout(this.walkHoldTimer);
    this.walkHoldTimer=null;
    const input=Array.from(this.walkInputs.values()).at(-1);
    if(!input)return;
    if(this.isLocked||this.pendingItemTarget||this.adventureCompleted){this.stopContinuousWalk();return;}
    const now=this.walkClock();
    const remaining=Math.max(0,this.walkReadyAt-now);
    if(immediate&&remaining<=0){
      this.movePlayer(input.dx,input.dy);
      this.walkHoldTimer=setTimeout(()=>this.queueContinuousWalk(),Math.max(this.gameDelay(220),this.walkReadyAt-this.walkClock()));
      return;
    }
    const delay=immediate?Math.max(1,remaining):Math.max(this.gameDelay(220),remaining);
    this.walkHoldTimer=setTimeout(()=>{
      this.walkHoldTimer=null;
      const active=Array.from(this.walkInputs.values()).at(-1);
      if(!active)return;
      if(this.isLocked||this.pendingItemTarget||this.adventureCompleted){this.stopContinuousWalk();return;}
      if(this.walkClock()>=this.walkReadyAt-0.25)this.movePlayer(active.dx,active.dy);
      this.queueContinuousWalk();
    },delay);
  },

  stopContinuousWalk(source){
    if(source)this.walkInputs.delete(source);
    else this.walkInputs.clear();
    clearTimeout(this.walkHoldTimer);this.walkHoldTimer=null;
    const last=Array.from(this.walkInputs.entries()).at(-1);
    if(!last){this.heldWalk=null;return;}
    this.heldWalk={source:last[0],...last[1]};
    this.queueContinuousWalk(true);
  },

  async animateFishing(){
    // Four user-supplied fishing frames. Walking is locked throughout this animation.
    for(let frame=0;frame<4;frame++){
      this.playerFishingFrame=frame;this.renderDungeon();
      await this.wait(frame===3?290:135);
    }
    this.playerFishingFrame=null;this.playerStep=0;this.renderDungeon();
  },

  movePlayer(dx, dy) {
    if (this.overlayBlocksWalking() || this.isLocked || this.pendingItemTarget || this.adventureCompleted || !this.gridMap?.length) return;
    // A tile must complete its walking cycle before another one begins.
    // Logical collisions remain tile-based; only the sprite interpolates.
    if(this.walkClock()<this.walkReadyAt)return;
    if(Math.abs(dx)+Math.abs(dy)!==1)return; // never allow diagonals / zero steps
    this.playerFacing=dx<0?'left':dx>0?'right':dy<0?'up':'down';
    this.playerStep=0;
    const nx = this.playerPos.x + dx;
    const ny = this.playerPos.y + dy;

    if (nx >= 0 && nx < this.gridSize && ny >= 0 && ny < this.gridSize) {
      const targetCell = this.gridMap[ny][nx];

      if (targetCell.type === 'tree') {
        this.renderDungeon();this.logMsg("Un albero ti sbarra la strada!");
        return;
      }

      if(this.isCelestialCave && targetCell.type==='water'){
        this.logMsg('L’acqua profonda circonda la Grotta Celeste.');return;
      }
      if (targetCell.type === 'water') {
        this.renderDungeon();
        if (!this.items.fishingRod) {
          this.logMsg("Ti serve una Canna da Pesca per pescare!");
          return;
        }
        this.isLocked=true;
        this.fishingConfirmPending=true;
        this.askBattleConfirmation('Vuoi usare la Canna da Pesca qui?', async () => {
          this.logMsg('Lanci la lenza in acqua...');
          await this.animateFishing();
          if(!this.isLocked)return;
          this.logMsg("Abbocca un Pokémon d'acqua!");
          this.pendingWildEncounterType='fishing';
          this.$id('wild-encounter-overlay').classList.remove('hidden');
        });
        return;
      }

      if(this.isCelestialCave && targetCell.entity==='mewtwo'){
        this.startMewtwoCinematic();return;
      }
      if(this.isCelestialCave && targetCell.entity==='cave-exit'){
        if(this.celestialPhase==='complete')this.leaveCelestialCave();
        else this.showDiscoveryNotice('DEVI AFFRONTARE MEWTWO',2600);
        return;
      }
      if(this.isTownFloor() && targetCell.decoration){
        this.logMsg('Questo elemento del villaggio blocca il passaggio.');
        return;
      }
      const interactFromAdjacent=this.isSolidTownCell(targetCell);
      if(!interactFromAdjacent){
        this.walkDurationMs=this.gameDelay(210);
        this.walkReadyAt=this.walkClock()+this.walkDurationMs;
        this.playerStep=1;
        this.pendingWalk={dx,dy};
        this.playerPos={x:nx,y:ny};
        this.revealArea(nx,ny);
      }
      // Buildings and NPCs keep their tile/sprite while being interacted with from next door.
      this.renderDungeon();
      if(this.isCelestialCave && this.celestialPhase!=='complete' &&
          Math.abs(this.playerPos.x-5)+Math.abs(this.playerPos.y-4)<=1){
        this.startMewtwoCinematic();return;
      }

      if (targetCell.entity === 'pokecenter') {
        // Direct Nurse Joy conversation, without loading an indoor dungeon.
        if(this.playerPos.x===2&&this.playerPos.y===3&&dx===0&&dy===-1){
          this.openPokemonCenterDialog();
        }else this.logMsg('Parla con l’infermiera Joy davanti all’ingresso sul lato sud.');
        return;
      } else if (targetCell.entity === 'pokemart') {
        if(this.playerPos.x===7&&this.playerPos.y===3&&dx===0&&dy===-1){
          this.openPokemartDialog();
        }else this.logMsg('Parla con il commesso davanti all’ingresso sul lato sud.');
        return;
      } else if (targetCell.entity === 'npc') {
        this.isLocked = true;
        this.triggerNpcEvent(targetCell);
        return;
      } else if (targetCell.entity === 'gym') {
        if (this.completedGymFloors.has(this.floor)) {
          this.logMsg('Hai già conquistato la medaglia di questa palestra!');
          return;
        }
        this.requestGymChallenge();
        return;
      } else if (targetCell.entity === 'house') {
        this.logMsg('Una casetta tranquilla, illuminata e piena di fiori.');
        return;
      }

      if (targetCell.entity === 'trainer') {
        this.isLocked = true;
        this.pendingTrainerCell=targetCell;
        this.currentTrainerSprite = targetCell.trainerSprite || this.trainerSprites[0];
        targetCell.entity = null;
        this.renderDungeon(); // Remove the small encounter NPC from the map.
        this.logMsg(`${targetCell.trainerName || "Un Allenatore"} ti sfida!`);
        this.setTrainerPortrait(this.$id('trainer-portrait-img'), this.currentTrainerSprite);
        this.$id('trainer-dialog-speech').textContent = `${targetCell.trainerName || "Allenatore"}: preparati alla sfida!`;
        this.$id('trainer-encounter-overlay').classList.remove('hidden');
      } else if (targetCell.entity === 'item') {
        // Transactional pickup: only remove a collectible after it reaches the bag.
        // Otherwise it must remain on the same tile with the same item type.
        this.collectFloorItem(targetCell);
      } else if (targetCell.entity === 'door') {
        // Ogni decimo piano è una città: l'uscita richiede obbligatoriamente la medaglia.
        if (this.floor % 10 === 0 && !this.completedGymFloors.has(this.floor)) {
          this.logMsg('Agente: per proseguire hai bisogno della medaglia di questa città.');
          this.showDiscoveryNotice('AGENTE: SERVE LA MEDAGLIA PER PROSEGUIRE', 2900);
          return;
        }
        if(this.floor===80) {
          if(this.hasCompletedKantoChallenge())this.finishKantoAdventure();
          else {
            this.logMsg('Prima del traguardo devi ottenere tutte le otto medaglie di Kanto.');
            this.showDiscoveryNotice('COLLEZIONA TUTTE LE OTTO MEDAGLIE',3200);
          }
          return;
        }
        if(targetCell.exitKind){this.confirmForkExit(targetCell.exitKind);return;}
        this.advanceFloor(null);
        return;
      } else if(!this.isCelestialCave && targetCell.type==='grass' && this.rollLegendaryEncounter()){
        this.pendingWildEncounterType='legendary';this.isLocked=true;
        this.$id('wild-encounter-overlay').classList.remove('hidden');
        this.logMsg('Una presenza leggendaria ti osserva!');
      } else if (!this.isCelestialCave && targetCell.type === 'grass' && Math.random() < GAME_BALANCE.wildEncounterChance * (this.floorKind==='calm'?.5:1) * (this.activeMon?.ability==='illuminate'?1.75:this.activeMon?.ability==='stench'?0.5:1)) {
        this.isLocked = true;
        this.logMsg('Un Pokémon selvatico è comparso!');
        this.$id('wild-encounter-overlay').classList.remove('hidden');
      }

      this.renderDungeon();
    }
  },

  /** Sale al piano successivo; kind è il tipo di percorso scelto a un bivio (o null). */
  advanceFloor(kind){
    if (this.runMode === 'normal' && this.floorKind === 'trainers') {
      Objectives.recordMilestone('hard_route', this.runId, this.floor, this.runMode);
    }
    this.floor++;
    this.floorKind=kind;
    this.runStats.maxFloor=Math.max(this.runStats.maxFloor||1,this.floor);
    if([10,50,75].includes(this.floor))Objectives.record('floor',this.runId,{floor:this.floor});
    this.logMsg(`Sei salito al piano ${this.floor}!`);
    this.generateFloorDungeon();
    this.showFloorTransition();
    this.saveCheckpoint();
  },

  /** Bivio: prima di uscire si vede cosa offre il piano successivo. */
  async confirmForkExit(kind){
    this.isLocked=true;this.stopContinuousWalk();
    const trainers=kind==='trainers';
    const ok=await Dialogs.confirm({
      title:trainers?'USCITA DIFFICILE · ZONA ALLENATORI':'USCITA FACILE · PERCORSO TRANQUILLO',
      message:trainers?'Sul prossimo piano ti aspettano da 3 a 5 allenatori. Ricompense in Pokécoins +50% ed esperienza +25% in ogni lotta.'
        :'Sul prossimo piano nessun allenatore, la metà degli incontri selvatici e uno strumento in più da raccogliere.',
      accept:'PROSEGUI',cancel:'RESTA QUI',
    });
    this.isLocked=false;
    if(ok)this.advanceFloor(kind);
  },

  rollLegendaryEncounter(random=Math.random){
    if(this.badgeCount()<3)return false;
    // TASK-007: 0.08% per still-available bird, per valid grass step.
    // Keep fixed intervals: already-owned birds do NOT boost the other odds.
    const owned=new Set([...(this.caughtLegendarySpecies||[]),...this.team.map(mon=>Number(mon.id))]);
    const roll=Math.min(.999999999,Math.max(0,Number(random())));
    // Integer tickets avoid floating-point ambiguity at 0.08% boundaries.
    const ticket=Math.floor(roll*1_000_000);
    const ticketsPerBird=LEGENDARY_BIRD_CHANCE_PER_STEP*1_000_000; // exactly 800
    const index=Math.floor(ticket/ticketsPerBird);
    const birds=[144,145,146];
    if(index>=birds.length||owned.has(birds[index]))return false;
    this.pendingLegendaryId=birds[index];return true;
  },

  isSolidTownCell(cell){
    if(!this.isTownFloor() || !cell)return false;
    return Boolean(cell.decoration) || ['pokecenter','pokemart','gym','house','npc'].includes(cell.entity);
  },

  revealArea(px, py){
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const nx = px + dx, ny = py + dy;
        if (nx >= 0 && nx < this.gridSize && ny >= 0 && ny < this.gridSize) {
          this.gridMap[ny][nx].revealed = true;
        }
      }
    }
  },

  async scanRadar(){
    if(this.isLocked || !this.gridMap?.length)return;
    // La prima volta il Radar spiega cosa fa, e si può decidere di non consumare la scansione.
    let seen=false;try{seen=localStorage.getItem('pokexplorer:radar-help')==='1';}catch{/* memoria non disponibile */}
    if(!seen){
      try{localStorage.setItem('pokexplorer:radar-help','1');}catch{/* memoria non disponibile */}
      this.isLocked=true;
      const ok=await Dialogs.confirm({title:'ROTOM RADAR',
        message:'Il Radar rivela tutte le caselle del piano: uscita, allenatori, strumenti e acqua per pescare. Ogni scansione vale per un solo piano; se ne hai bisogno di altre, le trovi al PokéMarket.',
        accept:'USA ORA',cancel:'NON ADESSO'});
      this.isLocked=false;
      if(!ok)return;
    }
    if(!this.gridMap.some(row=>row.some(cell=>!cell.revealed))){
      this.logMsg('Mappa già esplorata: nessuna scansione consumata.');return;
    }
    if(this.radarCharges<=0){this.logMsg(`Radar esaurito: acquista un utilizzo al PokéMarket (${shopItem('radar').price} Pokécoins).`);return;}
    this.radarCharges--;
    for(const row of this.gridMap)for(const cell of row)cell.revealed=true;
    this.renderDungeon();this.renderSidebar();
    this.logMsg(`Rotom Radar attivato! Utilizzi rimanenti: ${this.radarCharges}.`);
  },
};

return {movementMethods};
})();
const __m17 = (() => {
const { TYPE_CHART, typeEffectiveness } = __m4;
const { FALLBACK_AVATAR, FISHING_POOL, GAME_BALANCE, GYM_TRAINER_POOLS, OAK_MAP_SPRITE, OVERWORLD_NPC_LABELS, ROUTE_TRAINER_CLASSES, groundHealingItem, itemLabel, overworldPortraitUrl, overworldSpriteUrl, randomKantoSpecies } = __m3;
// Generazione dei piani (percorsi, villaggi e città), oggetti a terra e raid nascosti.



const shuffle = list => { for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; } return list; };

const isForkFloor = floor => Number.isInteger(floor) && floor >= 3 && floor < 80 && floor % 5 === 3;

const dungeonMethods = {
  generateFloorDungeon() {
    this.cancelPokemonCenterHealing();
    this.isCelestialCave=false;this.$id('dungeon-grid-board')?.classList.remove('celestial-cave');
    this.music?.setScene('exploration');
    this.gridMap = [];
    this.playerPos = { x: 0, y: 0 };
    this.isLocked = false;
    this.isRaidActive = false;
    this.raidQueueCount = 0;
    this.clearRaidTransientState();
    this.gymQueue = [];
    this.currentGym = null;
    this.pendingTrainerCell=null;
    this.gymChallengePending = false;
    this.battleMode = null;
    this.pendingForcedSwitch = false;

    const isCity = this.floor % 10 === 0;
    const isVillage = this.floor % 5 === 0 && !isCity;
    // Il tipo di piano scelto all'uscita precedente vale solo per i percorsi.
    if (isCity || isVillage) this.floorKind = null;
    const kind = this.floorKind;


    for (let y = 0; y < this.gridSize; y++) {
      let row = [];
      for (let x = 0; x < this.gridSize; x++) {
        row.push({ x, y, type: isCity || isVillage ? 'town-ground' : 'grass', entity: null, revealed: false });
      }
      this.gridMap.push(row);
    }

    if (isVillage || isCity) {
      const size=this.gridSize;
      const variant=(Math.floor(this.floor/5)-1)%4;
      const paths=new Set();
      const key=(x,y)=>`${x},${y}`;
      const road=(x,y)=>paths.add(key(x,y));
      // Broad connected avenues guarantee start, buildings and exit are reachable.
      for(let x=0;x<size;x++) road(x,4);
      for(let y=0;y<size;y++) road(4,y);
      for(let y=4;y<size;y++) road(8,y);
      for(let x=4;x<size;x++) road(x,8);
      for(let x=0;x<=4;x++) road(x,0);
      for(let y=0;y<=4;y++) road(0,y);
      road(9,9);road(8,9);
      // Small secondary plazas vary with the city instead of one copied cross.
      if(variant%2===0){for(let x=2;x<=7;x++)road(x,3);for(let y=2;y<=7;y++)road(6,y);}
      else {for(let x=1;x<=8;x++)road(x,6);for(let y=1;y<=6;y++)road(3,y);}
      for(let y=0;y<size;y++) for(let x=0;x<size;x++){
        const c=this.gridMap[y][x];
        const edge=(x===0||y===0||x===size-1||y===size-1);
        c.type=paths.has(key(x,y))?'path':edge?((x*7+y*3+variant)%8===0?'water':'tree'):'town-ground';
        if(c.type==='town-ground'){
          const decorationNoise=(x*13+y*17+variant*11)%29;
          c.decoration=decorationNoise<3?['flowers','hedge','flower-red'][decorationNoise]:
            decorationNoise===5?'lantern':decorationNoise===8?'flower-blue':
            decorationNoise===12?'bench':decorationNoise===16?'flower-yellow':
            decorationNoise===20?'rock':null;
        }
      }
      const place=(x,y,entity)=>{const c=this.gridMap[y][x];c.type='town-ground';c.entity=entity;c.decoration=null;};
      place(2,2,'pokecenter');place(7,2,'pokemart');
      place(2,7,'house');place(7,7,'house');
      if(variant===1||variant===3) place(5,6,'house');
      if(isCity)place(5,2,'gym');
      // Connect every building entrance to the central east-west avenue.
      // Buildings are solid; the approach needs to be walkable from an adjacent tile.
      for(const [bx,by,dy] of [[2,2,1],[7,2,1],[2,7,-1],[7,7,-1],
        ...(isCity?[[5,2,1]]:[]),...((variant===1||variant===3)?[[5,6,-1]]:[])]){
        for(let y=by+dy;dy>0?y<=4:y>=4;y+=dy){
          const c=this.gridMap[y]?.[bx];
          if(!c || c.entity)break;
          c.type='path';c.decoration=null;
        }
      }
      // Plazas, signs and landscaping (decorative sprites are not obstacles).
      for(const [x,y,what] of [[5,5,'fountain'],[1,3,'sign'],[7,5,'flowers'],[1,6,'lantern'],[6,1,'hedge']]){
        const c=this.gridMap[y]?.[x];
        if(c&&!c.entity&&c.type==='town-ground')c.decoration=what;
      }
      // No NPC can replace a building, a water tile, the player spawn or exit.
      const candidates=[];
      for(let y=1;y<size-1;y++)for(let x=1;x<size-1;x++){
        const c=this.gridMap[y][x];
        if(c.entity||['tree','water'].includes(c.type)||paths.has(key(x,y)))continue;
        // Large building sprites extend beyond one cell: leave a buffer to avoid visual overlap.
        const buildings=[[2,2],[7,2],[2,7],[7,7],...(isCity?[[5,2]]:[]),...((variant===1||variant===3)?[[5,6]]:[])];
        if(buildings.some(([bx,by])=>Math.abs(x-bx)+Math.abs(y-by)<=1))continue;
        if(![[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>paths.has(key(x+dx,y+dy))))continue;
        if(Math.abs(x-0)+Math.abs(y-0)<3)continue;
        candidates.push(c);
      }
      // Rotate per map, but use distinct poses/sprites in every village/city.
      shuffle(candidates);
      const spriteStart=(this.floor*3)%this.npcSprites.length;
      for(let i=0,n=Math.min(candidates.length,3+Math.floor(Math.random()*3));i<n;i++){
        const c=candidates[i];c.entity='npc';c.decoration=null;
        const officialIndex=(spriteStart+i*5)%this.npcSprites.length;
        c.npcSprite=this.npcSprites[officialIndex];
        c.npcName=OVERWORLD_NPC_LABELS[officialIndex];
        c.npcLine=this.npcDialogues[(this.floor+i*5)%this.npcDialogues.length];
        c.localSpriteFallback=FALLBACK_AVATAR;
        // The encounter is generated ONCE per NPC, not rerolled each conversation.
        const eventRoll=Math.random();
        c.npcEvent=eventRoll<.10?'trade':eventRoll<.25?'gift':eventRoll<.33?'heal':eventRoll<.40?'radar':eventRoll<.50?'quiz':'dialogue';
        if(c.npcEvent==='quiz')c.npcQuiz=this.createTypeQuiz();
        if(c.npcEvent==='trade')c.npcTradeSpeciesId=randomKantoSpecies(Math.max(5,this.floor),Math.max(25,this.floor));
        if(c.npcEvent==='gift')c.npcGiftId=Math.random()<.5?'pokeball':'elixir';
        if(this.floor===15 && i===0){
          c.specialRole='eevee-elder';c.npcName='Anziana delle pietre';
          c.npcEvent='dialogue';c.npcSprite=overworldSpriteUrl('old_woman');
          c.npcLine='Ho una storia da raccontarti su Eevee.';
        }
        if(this.floor===5 && i===0){
          c.specialRole='fisherman';c.npcName='Pescatore';
          c.npcLine='Un buon viaggio comincia con una buona canna!';
          c.npcSprite=overworldSpriteUrl('fisher');
          c.localSpriteFallback=FALLBACK_AVATAR;
        }
        if(this.floor===20 && i===0){
          c.specialRole='exp-share-gift';c.npcName='Assistente Pokémon';
          c.npcLine='Hai sconfitto Misty? Ho qualcosa per la tua squadra.';
          c.npcSprite=overworldSpriteUrl('scientist');
          c.localSpriteFallback=FALLBACK_AVATAR;
        }
      }
      if(this.floor===75&&!this.oakEventDismissed){
        const oak=this.gridMap[3][5];oak.type='town-ground';oak.entity='npc';oak.decoration=null;
        oak.specialRole='celestial-oak';oak.npcName='Professor Oak';
        oak.npcSprite=OAK_MAP_SPRITE;
        oak.localSpriteFallback=OAK_MAP_SPRITE;
      }
      place(9,9,'door');
    } else {
      // Generatore con percorso garantito, ostacoli organici e obiettivi raggiungibili.
      const size = this.gridSize;
      const walkable = (x,y) => x >= 0 && y >= 0 && x < size && y < size;
      const key = (x,y) => `${x},${y}`;
      const protectedPath = new Set([key(0,0)]);
      let cx = 0, cy = 0;
      // Un sentiero tortuoso che conduce all'uscita opposta alla partenza.
      while (cx !== size - 1 || cy !== size - 1) {
        const canX = cx < size - 1, canY = cy < size - 1;
        if (canX && (!canY || Math.random() < .5)) cx++; else cy++;
        protectedPath.add(key(cx,cy));
      }
      // Bivio: su alcuni percorsi c'è una seconda uscita in alto a destra verso la zona allenatori,
      // mentre quella in basso porta a un percorso tranquillo. Mai prima di un villaggio o di una città.
      const fork = isForkFloor(this.floor);
      if (fork) {
        const row = 1 + Math.floor(Math.random() * 2);
        for (let y = 0; y <= row; y++) protectedPath.add(key(0, y));
        for (let x = 0; x < size; x++) protectedPath.add(key(x, row));
        for (let y = 0; y <= row; y++) protectedPath.add(key(size - 1, y));
      }
      for (let y=0; y<size; y++) for (let x=0; x<size; x++) {
        const cell=this.gridMap[y][x];
        const noise = Math.sin(x*1.7+y*.65+this.floor)*.14 + Math.cos(y*1.8-x*.48)*.13 + Math.random()*.72;
        cell.type = protectedPath.has(key(x,y)) ? 'path' : noise < .22 ? 'water' : noise < .49 ? 'tree' : noise < .72 ? 'grass' : 'path';
      }
      // Apri diramazioni per rendere esplorabili anche le zone lontane dal percorso principale.
      for(let i=0;i<15;i++) {
        let x=Math.floor(Math.random()*size), y=Math.floor(Math.random()*size);
        if(this.gridMap[y][x].type==='tree' && Math.random()<.55) this.gridMap[y][x].type='grass';
      }
      const reachable = new Map();
      const queue=[[0,0]]; reachable.set(key(0,0),0);
      for(let i=0;i<queue.length;i++) {
        const [x,y]=queue[i];
        for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
          const nx=x+dx,ny=y+dy,k=key(nx,ny);
          if(walkable(nx,ny) && !reachable.has(k) && !['tree','water'].includes(this.gridMap[ny][nx].type)) {
            reachable.set(k,reachable.get(key(x,y))+1); queue.push([nx,ny]);
          }
        }
      }
      this.gridMap[size-1][size-1].type='grass';
      this.gridMap[size-1][size-1].entity='door';
      if (fork) {
        this.gridMap[size-1][size-1].exitKind='calm';
        Object.assign(this.gridMap[0][size-1], { type: 'grass', entity: 'door', exitKind: 'trainers' });
      }
      const candidates=queue.filter(([x,y])=> !(x===0&&y===0) && !(x===size-1&&y===size-1) && !(fork&&x===size-1&&y===0) && reachable.get(key(x,y))>=3);
      const pick=(predicate=()=>true)=>{
        const options=candidates.filter(([x,y])=>predicate(this.gridMap[y][x]));
        if(!options.length)return null;
        const [x,y]=options[Math.floor(Math.random()*options.length)];
        candidates.splice(candidates.findIndex(v=>v[0]===x&&v[1]===y),1);
        return this.gridMap[y][x];
      };
      // Item and trainer placements are independent of the existing surprise-raid trigger.
      // F02 is intentionally not part of this release.
      const trainerCount=kind==='trainers'?3+Math.floor(Math.random()*3):kind==='calm'?0:1+Math.floor(Math.random()*4);
      for(let i=0;i<trainerCount;i++) {
        const c=pick(); if(!c)break;
        const [name,overworld]=ROUTE_TRAINER_CLASSES[Math.floor(Math.random()*ROUTE_TRAINER_CLASSES.length)];
        c.entity='trainer'; c.trainerName=name;
        c.trainerSprite=overworldPortraitUrl(overworld);
        c.trainerOverworldSprite=overworldSpriteUrl(overworld);
      }
      for(let i=0,n=1+Math.floor(Math.random()*3)+(kind==='calm'?1:0);i<n;i++) {
        const c=pick();
        if(c){
          c.entity='item';
          // Determine loot at generation time. A full bag must never reroll it.
          const roll=Math.random();
          c.itemKind=roll<.4?'pokeball':roll<.8?groundHealingItem(this.floor):'elixir';
        }
      }
      // R2.4: raids are a 10% surprise on collected item tiles, not in grass.
    }

    if(isCity || isVillage || this.devMode){
      // Dev Mode reveals every tile of this dungeon as soon as it is generated.
      // Hidden raid triggers remain hidden: only the fog-of-war is removed.
      for(const row of this.gridMap)for(const cell of row)cell.revealed=true;
    } else this.revealArea(0,0);
    this.renderDungeon();
    this.renderSidebar();
    if(this.floor===75&&!this.oakEventDismissed){
      this.logMsg('Un silenzio innaturale avvolge il villaggio. Il Professor Oak ti sta aspettando.');
      this.showDiscoveryNotice?.('UN PRESAGIO · IL PROFESSOR OAK TI ASPETTA',3600);
    }else if(this.gridMap[0][this.gridSize-1].exitKind==='trainers'){
      this.logMsg(`Piano ${this.floor}: bivio! In alto a destra l’uscita Difficile, in basso l’uscita Facile.`);
    }else this.logMsg(`Piano ${this.floor}${kind==='trainers'?' · zona allenatori':kind==='calm'?' · percorso tranquillo':''}: esplora liberamente!`);
  },

  /** Domanda sui tipi per gli abitanti: un tipo superefficace e uno che non lo è. */
  createTypeQuiz(random=Math.random){
    const types=Object.keys(TYPE_CHART);
    for(let attempt=0;attempt<40;attempt++){
      const defender=types[Math.floor(random()*types.length)];
      const strong=types.filter(t=>typeEffectiveness(t,[defender])>1);
      const weak=types.filter(t=>typeEffectiveness(t,[defender])<=1);
      if(!strong.length||!weak.length)continue;
      return {defender,right:strong[Math.floor(random()*strong.length)],wrong:weak[Math.floor(random()*weak.length)],first:random()<.5?'right':'wrong'};
    }
    return {defender:'grass',right:'fire',wrong:'water',first:'right'};
  },

  /** Aggiunge l'anziana anche sui checkpoint del piano 15 creati prima della patch. */
  ensureEeveeElder() {
    if (this.floor !== 15 || !this.gridMap?.length) return false;
    if (this.gridMap.flat().some(c => c.specialRole === 'eevee-elder')) return true;
    const cell = this.gridMap.flat().find(c => c.entity === 'npc' && !c.specialRole && c.npcEvent === 'dialogue') ||
      this.gridMap.flat().find(c => c.entity === 'npc' && !c.specialRole);
    if (!cell) return false;
    Object.assign(cell, { specialRole:'eevee-elder', npcName:'Anziana delle pietre',
      npcEvent:'dialogue', npcSprite:overworldSpriteUrl('old_woman'),
      npcLine:'Ho una storia da raccontarti su Eevee.' });
    return true;
  },

  collectFloorItem(cell){
    if(!cell || cell.entity!=='item' || this.isRaidActive)return false;
    if(!cell.itemKind){
      // Legacy maps without an assigned drop are upgraded once, never rerolled.
      const roll=Math.random();
      cell.itemKind=roll<.4?'pokeball':roll<.8?groundHealingItem(this.floor):'elixir';
    }
    // Transactional check: a full inventory must not consume the tile,
    // including via the existing (unchanged) surprise-raid chance.
    if(!this.canAcceptItem(cell.itemKind)){
      const name=itemLabel(cell.itemKind).toUpperCase();
      this.logMsg(`Zaino pieno: ${name} rimane a terra. Torna dopo aver liberato spazio.`);
      this.showDiscoveryNotice(`ZAINO PIENO · ${name}`);
      return false;
    }
    // Each successfully attempted collectible independently rolls a 10% Raid.
    // Only active/pending Raid state blocks another activation. A failed first
    // opponent load preserves the original roll on the same source cell.
    if(Math.random()<.10){
      this.raidPickupSourceCell=cell;
      cell.entity=null;
      this.renderDungeon();
      this.logMsg('La Poké Ball nasconde una sfida RAID!');
      this.beginHiddenRaid();
      return true;
    }
    const label=itemLabel(cell.itemKind).toUpperCase();
    const collected=this.grantItem(cell.itemKind);
    if(collected){
      cell.entity=null;
      this.renderSidebar();
    }
    this.logMsg(collected?`Hai trovato: ${label}!`:`Zaino pieno: ${label} rimane a terra. Torna dopo aver liberato spazio.`);
    this.showDiscoveryNotice(collected?`${label} ×1 · AGGIUNTO ALLO ZAINO`:`ZAINO PIENO · ${label}`);
    if(collected)this.saveCheckpoint();
    return collected;
  },

  clearRaidTransientState(){
    // Invalidate a pending "tap to enter the Raid" callback when the player
    // changes dungeon or returns to the menu.
    this.raidLaunchNonce=(this.raidLaunchNonce||0)+1;
    this.cancelRaidNotice?.();
    this.raidPickupSourceCell=null;
    this.$id('pokenav-screen-root')?.classList.remove('raid-discovery');
  },

  beginHiddenRaid(){
    if(this.isRaidActive)return false;
    this.isRaidActive=true;this.raidQueueCount=5;this.isLocked=true;
    const launch=++this.raidLaunchNonce;
    this.logMsg('Hai scoperto un RAID nascosto! Cinque battaglie senza cattura.');
    const root=this.$id('pokenav-screen-root');
    root.classList.add('raid-discovery');
    this.showDiscoveryNotice('RAID SEGRETO! 5 LOTTE · NESSUNA CATTURA',0);
    this.waitForNotice().then(()=>{
      if(launch!==this.raidLaunchNonce)return;
      root.classList.remove('raid-discovery');
      if(this.isRaidActive)this.startBattle('wild');
    });
    return true;
  },

  getEncounterPool(type){
    if(type==='fishing')return this.floor<=15?FISHING_POOL.early:FISHING_POOL.late;
    if(type==='gym')return GYM_TRAINER_POOLS[Math.max(0,Math.min(7,Math.floor(this.floor/10)-1))];
    // Ordinary encounters use the whole non-legendary Kanto Pokédex.
    // Gym pools/fishing retain their biome-specific typing.
    return null;
  },

  encounterLevel(type,leader=false,rng=Math.random){
    const isTrainer=type==='trainer'||type==='gym';
    if(this.floor<=GAME_BALANCE.earlyFloors){
      if(leader)return 6;
      return isTrainer?4+Math.floor(rng()*2):(this.floor===1?1+Math.floor(rng()*3):2+Math.floor(rng()*2));
    }
    const base=3+this.floor*GAME_BALANCE.levelPerFloor;
    return Math.max(2,Math.min(70,Math.round(base+(leader?4:isTrainer?2:0)+Math.floor(rng()*2))));
  },
};

return {isForkFloor,dungeonMethods};
})();
const __m18 = (() => {
const { FALLBACK_AVATAR, OAK_MAP_SPRITE, overworldSpriteUrl, resolvedSpritePath } = __m3;
// Disegno della mappa 10×10: caselle, edifici, scenari, personaggi e animazione del passo.


const mapRenderMethods = {
  createSingleFrameAvatar(url,fallback,description,extraClass=''){
    // Source images are multi-pose horizontal sprite sheets: crop one 16×32 frame
    // in a dedicated viewport rather than scaling the entire sheet into the tile.
    const frame=document.createElement('span');
    frame.className=`grid-icon official-overworld single-frame sprite-frame ${extraClass}`;
    frame.setAttribute('role','img');frame.setAttribute('aria-label',description);
    const image=document.createElement('img');image.className='overworld-frame-img';
    image.src=resolvedSpritePath(url);image.alt='';image.loading='eager';image.decoding='async';
    // Regular FireRed URLs are horizontally-arranged sheets: CSS clips the
    // first 16x32 overworld frame.  Do not resize a dialogue portrait here.
    if(image.src.endsWith('.svg')){frame.classList.add('pokex-single-frame');image.style.width='16px';image.style.height='32px';}
    image.onerror=()=>{image.onerror=null;image.src=resolvedSpritePath(fallback);
      frame.classList.add('local-fallback');
      image.style.width='16px';image.style.height='32px';};
    frame.appendChild(image);return frame;
  },

  renderDungeon() {
    const board=this.$id('dungeon-grid-board');
    if(!board || !Array.isArray(this.gridMap) || !this.gridMap.length)return;
    board.classList.toggle('npc-conversation-active',Boolean(this.activeDialogNpcCell));
    board.classList.toggle('celestial-cave',this.isCelestialCave);
    const avatarFolder=this.playerGender==='champion'?'champion':this.playerGender==='female'?'girl':'red';
    const spriteUrl=this.playerFishingFrame!==null ?
      (avatarFolder==='girl' && this.playerFacing!=='down'
        ? `assets/sprites/player/girl/walk/${this.playerFacing}-${Math.min(this.playerFishingFrame,2)}.png`
        : `assets/sprites/player/${avatarFolder}/fish/${this.playerFacing}-${this.playerFishingFrame}.png`) :
      `assets/sprites/player/${avatarFolder}/walk/${this.playerFacing}-${this.playerStep}.png`;
    const actorName=this.playerGender==='female'?'Allenatrice':'Allenatore';
    const size=this.gridSize;
    const fresh=this._renderedGrid!==this.gridMap || board.querySelectorAll(':scope > .grid-cell').length!==size*size;
    // Reuse the SAME avatar element across cells; destroying it each step caused
    // jitter/flicker and invalidated its animation before reaching the next tile.
    // Never detach the avatar on routine renders: that interrupted animations
    // and could leave an unchanged player tile with no child at all.
    let avatar=board.querySelector('.player-avatar');
    if(!avatar)avatar=document.createElement('span');
    // Preserve the walk animation class during unchanged map renders.
    avatar.classList.add('grid-icon','player-avatar');
    avatar.classList.toggle('red-local-sprite',avatarFolder==='red');
    avatar.classList.toggle('girl-local-sprite',avatarFolder==='girl');
    avatar.classList.toggle('local-fishing-sprite',this.playerFishingFrame!==null && !(avatarFolder==='girl' && this.playerFacing!=='down'));
    avatar.setAttribute('role','img');
    avatar.setAttribute('aria-label',`${actorName} rivolto verso ${this.playerFacing}`);
    if(this.pendingWalk || !avatar.classList.contains('walk-arrival'))
      avatar.style.backgroundImage=`url('${spriteUrl}')`;
    if(fresh)board.replaceChildren();
    else board.querySelectorAll(':scope > .map-building-overlay, :scope > .map-scenery-overlay').forEach(element=>element.remove());
    const architecture=[];
    for(let y=0;y<size;y++)for(let x=0;x<size;x++){
      const cell=this.gridMap[y][x];
      const idx=y*size+x,player=x===this.playerPos.x&&y===this.playerPos.y;
      const node=fresh?document.createElement('div'):board.children[idx];
      // Each tile renders in row-depth order. A player standing below a building
      // must be in front; a player above it must remain behind its facade.
      node.style.setProperty('--map-depth',String(10+y*2+(player?1:0)));
      const locked=cell.entity==='door'&&this.floor%10===0&&!this.completedGymFloors.has(this.floor);
      // Tile signatures prevent recreating 100 nodes for every 170ms step.
      const key=[cell.revealed,cell.type,cell.entity,cell.specialRole,cell.decoration,cell.npcSprite,
        cell.trainerOverworldSprite,player,locked,this.activeDialogNpcCell===cell].join('|');
      if(node.dataset.tileSignature!==key){
        node.className=cell.revealed?`grid-cell ${cell.type}${locked?' locked-exit':''}${player?' player-cell':''}`:'grid-cell fog';
        node.replaceChildren();
        if(!cell.revealed){
          node.setAttribute('aria-label','Area inesplorata');
          node.style.backgroundPosition=`${x*100/(size-1)}% ${y*100/(size-1)}%`;
        }else{
          node.removeAttribute('aria-label');node.style.backgroundPosition='';
          if(player)node.appendChild(avatar);
          else if(cell.type==='tree')node.classList.add('environment-footprint');
          else if(cell.type==='water')node.innerHTML='<span class="water-ripple" aria-hidden="true"></span>';
          else if(cell.entity==='pokecenter')node.classList.add('building-footprint');
          else if(cell.entity==='pokemart')node.classList.add('building-footprint');
          else if(cell.entity==='gym')node.classList.add('building-footprint');
          else if(cell.entity==='house')node.classList.add('building-footprint');
          else if(cell.entity==='mewtwo'){
            const aura=document.createElement('span');aura.className='celestial-mewtwo-aura celestial-portal-v2';
            aura.setAttribute('role','img');aura.setAttribute('aria-label','Sfera aurica di Mewtwo');
            const halo=document.createElement('span');halo.className='aura-outer-shimmer';
            const ring=document.createElement('span');ring.className='aura-ellipse aura-ellipse-back';
            const orb=document.createElement('span');orb.className='celestial-aura-orb';
            const core=document.createElement('span');core.className='aura-inner-core';orb.appendChild(core);
            const front=document.createElement('span');front.className='aura-ellipse aura-ellipse-front';
            const sparks=document.createElement('span');sparks.className='aura-particles';
            for(let i=0;i<9;i++){const spark=document.createElement('i');spark.style.setProperty('--spark-index',String(i));sparks.append(spark);}
            aura.append(halo,ring,orb,front,sparks);node.appendChild(aura);
          }else if(cell.entity==='cave-exit'){
            node.innerHTML='<span class="celestial-cave-exit" role="img" aria-label="Uscita dalla Grotta Celeste">▼</span>';
          }else if(cell.entity==='npc'){
            if(cell.specialRole==='celestial-oak')node.classList.add('oak-story-event');
            if(this.activeDialogNpcCell!==cell && ['celestial-oak','cave-oak'].includes(cell.specialRole)){
              node.appendChild(this.createSingleFrameAvatar(
                cell.npcSprite||OAK_MAP_SPRITE,
                OAK_MAP_SPRITE,'Professor Oak','celestial-oak-sprite'));
            }else if(this.activeDialogNpcCell!==cell){
              node.appendChild(this.createSingleFrameAvatar(cell.npcSprite||this.npcSprites[0],
                FALLBACK_AVATAR,`Abitante: ${cell.npcName||'Pokémon Rosso Fuoco'}`,'town-npc'));
            }
          }else if(cell.entity==='door'){
            if(locked)node.appendChild(this.createSingleFrameAvatar(overworldSpriteUrl('policeman'),
              FALLBACK_AVATAR,'Poliziotto: serve la medaglia per proseguire','gate-police'));
            else if(cell.exitKind){
              const trainers=cell.exitKind==='trainers';
              node.classList.add(trainers?'exit-trainers':'exit-calm');
              node.innerHTML=`<span class="exit-arrow" role="img" aria-label="Uscita ${trainers?'Difficile: zona allenatori':'Facile: percorso tranquillo'}">➜</span><span class="exit-tag" aria-hidden="true">${trainers?'D':'F'}</span>`;
            }else node.innerHTML='<span class="exit-arrow" role="img" aria-label="Uscita verso destra">➜</span>';
          }else if(cell.entity==='item')node.innerHTML='<img class="grid-icon map-pickup-sprite" src="assets/sprites/items/pokeball.png" alt="Oggetto">';
          else if(cell.entity==='trainer'){
            node.appendChild(this.createSingleFrameAvatar(
              cell.trainerOverworldSprite||overworldSpriteUrl('youngster'),
              FALLBACK_AVATAR,
              cell.trainerName||'Allenatore','route-trainer'));
          }else if(cell.decoration){
            node.classList.add('environment-footprint');
          }
        }
        node.dataset.tileSignature=key;
      }else if(player){
        // No regeneration required for an idle/pose update.
        node.appendChild(avatar);
      }
      if(fresh)board.appendChild(node);
      if(cell.revealed && ['house','pokemart','pokecenter','gym'].includes(cell.entity)){
        const building=document.createElement('img');
        building.className='map-building-overlay';
        const houseVariant=1+((x*7+y*3+this.floor)%3);
        building.src=cell.entity==='house'?`assets/sprites/buildings/house-${houseVariant}.png`:
          `assets/sprites/buildings/${cell.entity}.png`;
        building.alt=({house:'Casa',pokemart:'Pokémarket',pokecenter:'Centro Pokémon',gym:'Palestra'})[cell.entity];
        building.setAttribute('aria-hidden','true');
        // Overlay is anchored to the bottom of its tile, and sorted against
        // player cells by row depth. A neighboring tile cannot clip its roof.
        building.style.left=`${(x+.5)*100/size}%`;
        building.style.bottom=`${(size-y-1)*100/size}%`;
        building.style.zIndex=String(220+y);
        architecture.push(building);
      }
      // Environment is drawn in board coordinates, never cropped by a 1-tile cell.
      // This foreground is intentionally *only* trees, buildings and scenery,
      // not NPCs or trainer sprites. Collision and map data are untouched.
      if(cell.revealed && (cell.type==='tree'||cell.decoration)){
        const scenery=document.createElement('img');
        scenery.className='map-scenery-overlay'+(cell.type==='tree'?' scenery-tree':' scenery-decoration');
        scenery.src=cell.type==='tree'?'assets/sprites/world/tree.svg':`assets/sprites/decor/${cell.decoration}.svg`;
        scenery.alt='';scenery.setAttribute('aria-hidden','true');
        scenery.style.left=`${(x+.5)*100/size}%`;
        scenery.style.bottom=`${(size-y-1)*100/size}%`;
        scenery.style.zIndex=String(220+y);
        architecture.push(scenery);
      }
    }
    board.append(...architecture);
    this._renderedGrid=this.gridMap;
    if(this.pendingWalk){
      const {dx,dy}=this.pendingWalk;this.pendingWalk=null;
      const cell=board.getBoundingClientRect().width/size;
      avatar.getAnimations?.().forEach(animation=>animation.cancel());
      avatar.classList.remove('walk-arrival');
      avatar.style.setProperty('--walk-offset-x',`${-dx*cell}px`);
      avatar.style.setProperty('--walk-offset-y',`${-dy*cell}px`);
      avatar.style.setProperty('--walk-duration',`${this.walkDurationMs}ms`);
      // Continuous 1 -> 0 -> 2 -> 0 walk poses while moving across one tile.
      const sequence=++this.walkSequence,facing=this.playerFacing;
      const frame=(step)=>{
        if(sequence===this.walkSequence&&avatar.isConnected)
          avatar.style.backgroundImage=`url('assets/sprites/player/${avatarFolder}/walk/${facing}-${step}.png')`;
      };
      frame(1);
      void avatar.offsetWidth;
      avatar.classList.add('walk-arrival');
      clearTimeout(this.playerIdleTimer);
      setTimeout(()=>frame(0),this.walkDurationMs*.28);
      setTimeout(()=>frame(2),this.walkDurationMs*.56);
      this.playerIdleTimer=setTimeout(()=>{
        frame(0);
        if(sequence===this.walkSequence)avatar.classList.remove('walk-arrival');
        this.playerStep=0;
      },this.walkDurationMs);
    }else if(this.walkClock()>=this.walkReadyAt){
      avatar.classList.remove('walk-arrival');
    }
  },
};

return {mapRenderMethods};
})();
const __m19 = (() => {
const Dex = __m8;
const { Pokemon } = __m6;
const { speciesData, pokemonSprite } = __m0;
const { typeName } = __m4;
const {
  BAG_LIMITS, SHOP_ITEMS, FALLBACK_AVATAR, OAK_PORTRAIT, OVERWORLD_NPCS, OVERWORLD_NPC_LABELS,
  evolvedEncounterId, STONE_EVOLUTIONS, isPokemartItemUnlocked, itemImage, itemLabel, overworldPortraitUrl, overworldSpriteUrl, resolvedSpritePath,
} = __m3;
const { keyRouter, keyDirection, isSpace, controlsIn, focusControl } = __m10;
const Dialogs = __m11;
// Villaggi e città: PokéMarket, Centro Pokémon, abitanti (dialoghi, regali e scambi).








const make = (tag, className, text) => { const el = document.createElement(tag); if (className) el.className = className; if (text != null) el.textContent = text; return el; };

const townMethods = {
  setTrainerPortrait(element, src) {
    if (!element) return;
    element.onerror = () => { element.onerror = null; element.src = FALLBACK_AVATAR; };
    element.src = resolvedSpritePath(src) || FALLBACK_AVATAR;
  },

  // ---------------------------------------------------------------- PokéMarket
  openPokemartDialog() {
    if (!this.isTownFloor() || this.isCelestialCave || this.isLocked) return false;
    this.stopContinuousWalk(); this.playerFacing = 'up'; this.playerStep = 0;
    this.isLocked = true;
    this.triggerNpcEvent({ specialRole: 'pokemart-clerk', npcName: 'Commesso PokéMarket', npcSprite: overworldSpriteUrl('clerk'), npcEvent: 'dialogue' });
    return true;
  },

  /** Il catalogo è generato da SHOP_ITEMS: prezzi e sblocchi hanno un'unica fonte. */
  renderShop() {
    const catalogue = this.$id('mart-catalogue');
    if (!catalogue) return;
    catalogue.replaceChildren(...SHOP_ITEMS.filter(item => isPokemartItemUnlocked(item.id, this.floor)).map(item => {
      const button = make('button', 'btn-nav mart-product');
      button.type = 'button';
      button.dataset.item = item.id;
      const owned = item.id === 'radar' ? this.radarCharges : this.items[item.id] || 0;
      const full = item.id !== 'radar' && owned >= (BAG_LIMITS[item.id] ?? Infinity);
      button.append(Object.assign(make('img', 'mart-item-icon'), { src: itemImage(item.id), alt: '' }),
        make('span', 'mart-product-name', item.id === 'radar' ? 'Radar Scan +1' : itemLabel(item.id)),
        make('span', 'mart-product-owned', item.id === 'radar' ? `${owned === Infinity ? '∞' : owned}` : `×${owned}`),
        make('span', 'mart-product-price', `$${item.price.toLocaleString('it-IT')}`));
      button.disabled = full || this.money < item.price;
      button.title = full ? 'Capacità massima raggiunta' : this.money < item.price ? 'Pokécoins insufficienti' : '';
      button.onclick = () => { this.purchaseItem(item.id); };
      return button;
    }));
    this.$id('mart-money').textContent = `$${this.money.toLocaleString('it-IT')}`;
  },

  openPokemartShop() {
    this.isLocked = true;
    this.renderShop();
    this.$id('pokemart-overlay')?.classList.remove('hidden');
    focusControl(controlsIn(this.$id('mart-catalogue'))[0] || this.$id('close-market-btn'));
    this.logMsg('Hai aperto il PokéMarket.');
    return true;
  },

  closePokemart() {
    const market = this.$id('pokemart-overlay');
    if (!market || market.classList.contains('hidden')) return false;
    market.classList.add('hidden');
    this.isLocked = true;
    this.triggerNpcEvent({ specialRole: 'pokemart-farewell', npcName: 'Commesso PokéMarket', npcSprite: overworldSpriteUrl('clerk'), npcEvent: 'dialogue' });
    return true;
  },

  handleShopKey(event) {
    const shop = this.$id('pokemart-overlay');
    if (!shop || shop.classList.contains('hidden')) return false;
    const items = controlsIn(shop, 'button:not([disabled]):not(.hidden)');
    if (event.key === 'Escape') { event.preventDefault(); this.closePokemart(); return true; }
    const dir = keyDirection(event);
    if (dir) {
      event.preventDefault();
      const delta = dir === 'up' || dir === 'left' ? -1 : 1;
      const index = items.indexOf(document.activeElement);
      focusControl(items[index < 0 ? (delta > 0 ? 0 : items.length - 1) : (index + delta + items.length) % items.length]);
      return true;
    }
    if (isSpace(event) && items.includes(document.activeElement)) { event.preventDefault(); if (!event.repeat) document.activeElement.click(); }
    return true;
  },

  canAcceptItem(id) {
    if (id === 'fishingRod') return !this.items.fishingRod;
    return BAG_LIMITS[id] !== undefined && (this.items[id] || 0) < BAG_LIMITS[id];
  },

  grantItem(id, count = 1) {
    if (id === 'fishingRod') { if (this.items.fishingRod) return false; this.items.fishingRod = true; return true; }
    const limit = BAG_LIMITS[id];
    if (limit === undefined) return false;
    const available = Math.max(0, limit - (this.items[id] || 0));
    if (!available) return false;
    this.items[id] = (this.items[id] || 0) + Math.min(available, count);
    return true;
  },

  purchaseItem(id) {
    const item = SHOP_ITEMS.find(entry => entry.id === id);
    if (!item) return false;
    if (!isPokemartItemUnlocked(id, this.floor)) { this.logMsg('Questo strumento non è ancora disponibile in questo PokéMarket.'); return false; }
    if (this.money < item.price) { this.logMsg(`Pokécoins insufficienti: servono ${item.price}.`); return false; }
    if (id === 'radar') {
      if (this.radarCharges === Infinity) { this.logMsg('Radar già illimitato in DEV MODE.'); return false; }
      this.radarCharges++;
    } else if (!this.grantItem(id)) { this.logMsg('Capacità massima raggiunta!'); return false; }
    this.money -= item.price;
    this.renderSidebar(); this.renderShop();
    const focusTarget = this.$id('mart-catalogue')?.querySelector(`[data-item="${id}"]:not(:disabled)`);
    focusControl(focusTarget || controlsIn(this.$id('mart-catalogue'))[0] || this.$id('close-market-btn'));
    this.logMsg(`Acquisto completato: ${id === 'radar' ? 'Radar Scan +1' : itemLabel(id)}.`);
    return true;
  },

  // ---------------------------------------------------------------- Centro Pokémon
  cancelPokemonCenterHealing() {
    clearTimeout(this.pokemonCenterHealTimer);
    this.pokemonCenterHealTimer = null;
    this.pokemonCenterHealSequence++;
  },

  openPokemonCenterDialog({ emergency = false } = {}) {
    if ((!emergency && !this.isTownFloor()) || this.isCelestialCave || this.isLocked) return false;
    this.stopContinuousWalk();
    this.isLocked = true;
    this.playerFacing = 'up'; this.playerStep = 0;
    this.triggerNpcEvent({ specialRole: 'pokemon-center-nurse', npcName: 'Infermiera Joy', npcSprite: overworldSpriteUrl('nurse'), npcEvent: 'dialogue' });
    this.logMsg('Infermiera Joy cura la tua squadra.');
    return true;
  },

  playPokemonCenterHealSound() {
    if (typeof Audio === 'undefined') return false;
    try {
      if (!this.pokemonCenterHealAudio) {
        this.pokemonCenterHealAudio = new Audio('assets/audio/heal.webm');
        this.pokemonCenterHealAudio.preload = 'auto';
        this.music?.registerEffect(this.pokemonCenterHealAudio, .7);
      }
      this.pokemonCenterHealAudio.pause();
      this.pokemonCenterHealAudio.currentTime = 0;
      this.pokemonCenterHealAudio.play()?.catch?.(() => { /* audio bloccato dal browser */ });
      return true;
    } catch { return false; }
  },

  startPokemonCenterHealing(overlay, speech) {
    clearTimeout(this.pokemonCenterHealTimer);
    const token = ++this.pokemonCenterHealSequence;
    speech.textContent = 'Infermiera Joy: «Mi prenderò cura dei tuoi Pokémon!»';
    this.pokemonCenterHealTimer = setTimeout(() => {
      this.pokemonCenterHealTimer = null;
      if (token !== this.pokemonCenterHealSequence || this.activeDialogNpcCell?.specialRole !== 'pokemon-center-nurse' || overlay.classList.contains('hidden')) return;
      for (const pokemon of this.team) {
        if (this.runMode === 'normal' && pokemon.currentHp <= 0) pokemon.treatedFaint = true;
        pokemon.healAll();
      }
      this.renderSidebar();
      this.playPokemonCenterHealSound();
      speech.textContent = 'Infermiera Joy: «La tua squadra è in perfetta forma. A presto!»';
      this.logMsg('Centro Pokémon: PS, PP e stati alterati ripristinati.');
      this.waitForNpcClick(overlay);
    }, this.gameDelay(2000));
  },

  // ---------------------------------------------------------------- Abitanti
  /** Il ritratto del dialogo corrisponde sempre allo sprite mostrato sulla mappa. */
  getNpcPortraitAsset(npc) {
    if (['celestial-oak', 'cave-oak'].includes(npc?.specialRole)) return OAK_PORTRAIT;
    const roles = { 'pokemon-center-nurse': 'nurse', 'pokemart-clerk': 'clerk', 'pokemart-farewell': 'clerk', fisherman: 'fisher', 'exp-share-gift': 'scientist', 'eevee-elder': 'old_woman' };
    let key = roles[npc?.specialRole];
    if (!key) key = String(resolvedSpritePath(npc?.npcSprite)).match(/overworld\/([a-z_]+)\.png$/)?.[1];
    if (!key) {
      const index = OVERWORLD_NPC_LABELS.findIndex(label => label.toLowerCase() === String(npc?.npcName || '').toLowerCase());
      key = OVERWORLD_NPCS[index];
    }
    return overworldPortraitUrl(key) || FALLBACK_AVATAR;
  },

  renderNpcPortrait(npc) {
    const slot = this.$id('npc-portrait-img');
    if (!slot) return;
    slot.setAttribute('aria-label', npc?.npcName || 'Abitante');
    const img = Object.assign(make('img', 'npc-portrait-illustration'), { alt: '', src: this.getNpcPortraitAsset(npc) });
    img.onerror = () => { img.onerror = null; img.src = FALLBACK_AVATAR; };
    slot.replaceChildren(img);
  },

  hideDialogNpcBackground(hide, npcCell = null) {
    this.activeDialogNpcCell = hide ? npcCell : null;
    this.$id('dungeon-grid-board')?.classList.toggle('npc-conversation-active', Boolean(hide));
    if (this.gridMap?.length) this.renderDungeon();
  },

  clearNpcAdvance() {
    if (this.autoAdvance?.run === this.pendingNpcAdvance) this.cancelAutoAdvance();
    clearTimeout(this.pendingNpcAdvanceTimer);
    if (this.pendingNpcAdvance) document.removeEventListener('pointerdown', this.pendingNpcAdvance, true);
    this.removeNpcKeys?.();
    this.removeNpcKeys = null;
    this.pendingNpcAdvance = null;
    this.$id('npc-dialog-overlay')?.querySelector('.npc-click-hint')?.remove();
  },

  closeNpcDialog() {
    this.cancelPokemonCenterHealing();
    this.clearNpcAdvance();
    this.$id('npc-dialog-overlay')?.classList.add('hidden');
    this.$id('npc-actions')?.classList.add('hidden');
    this.isLocked = false;
    this.hideDialogNpcBackground(false);
    this.saveCheckpoint();
  },

  triggerNpcEvent(npc) {
    this.renderNpcPortrait(npc);
    const overlay = this.$id('npc-dialog-overlay');
    this.hideDialogNpcBackground(true, npc);
    const speech = this.$id('npc-speech-text');
    const actions = this.$id('npc-actions');
    overlay.classList.remove('hidden');
    actions.classList.add('hidden');
    this.$id('npc-trade-offer')?.replaceChildren();
    const say = text => { speech.textContent = text; this.waitForNpcClick(overlay); };
    switch (npc.specialRole) {
      case 'eevee-elder': this.startEeveeElderDialog(overlay, speech); return;
      case 'pokemon-center-nurse': this.startPokemonCenterHealing(overlay, speech); return;
      case 'pokemart-clerk':
        speech.textContent = 'Commesso: «Benvenuto al PokéMarket! Cosa desideri acquistare?»';
        this.waitForNpcClick(overlay, () => { this.closeNpcDialog(); this.openPokemartShop(); });
        return;
      case 'pokemart-farewell': say('Commesso: «Grazie per la visita! Torna a trovarci!»'); return;
      case 'celestial-oak': this.showOakIntroduction(); return;
      case 'cave-oak':
        say(this.celestialPhase === 'complete' ? 'Professor Oak: «Ora la grotta tace. Quando sei pronto, raggiungi l’uscita a sud.»'
          : this.celestialPhase === 'rematch' ? 'Professor Oak: «Mewtwo ti osserva. Hai una sola occasione da non sprecare.»'
            : 'Professor Oak: «Avverti questa pressione? Non avanzare se la tua squadra non è pronta.»');
        return;
      case 'exp-share-gift':
        if (this.expShareClaimed) say('Assistente: «Il Condividi Esperienza è tuo. Lo trovi nello Zaino, tra gli Oggetti chiave.»');
        else if (this.badgeCount() < 2) say('Assistente: «Torna dopo aver conquistato la seconda medaglia!»');
        else {
          this.expShareClaimed = true; this.expShareEnabled = true;
          this.logMsg('Hai ottenuto il Condividi Esperienza!'); this.renderSidebar();
          say('Assistente: «Ecco il Condividi Esperienza! I compagni riceveranno parte dei punti esperienza.»');
        }
        return;
      case 'fisherman': {
        const obtained = this.items.fishingRod || this.fishingRodGiftClaimed;
        if (!obtained) { this.grantItem('fishingRod'); this.fishingRodGiftClaimed = true; this.renderSidebar(); }
        this.logMsg(obtained ? 'Il Pescatore ti saluta.' : 'Hai ricevuto la Canna da Pesca!');
        say(obtained ? 'Pescatore: «Usa la canna vicino all’acqua!»' : 'Pescatore: «Questa Canna da Pesca è per te. Provala vicino all’acqua!»');
        return;
      }
      default: break;
    }
    if (npc.npcEvent === 'trade' && !npc.tradeCompleted) { this.offerNpcTrade(npc, overlay, speech, actions); return; }
    if (npc.npcEvent === 'gift') {
      const id = npc.npcGiftId, label = itemLabel(id);
      if (npc.giftConsumed) { say('Abitante: «Spero che il regalo ti sia stato utile!»'); return; }
      const success = this.grantItem(id);
      if (success) npc.giftConsumed = true;
      this.logMsg(success ? `Regalo ricevuto: ${label}!` : `Zaino pieno: ${label} non ricevuto.`);
      this.renderSidebar();
      say(success ? `Abitante: «Tieni, questo ${label} è per te!»` : `Abitante: «Volevo regalarti ${label}, ma il tuo zaino è pieno.»`);
      return;
    }
    if (npc.npcEvent === 'heal') {
      if (npc.healUsed) { say('Abitante: «Riposati quando vuoi, ma il mio tè è finito!»'); return; }
      npc.healUsed = true;
      for (const mon of this.team) if (mon.currentHp > 0) mon.currentHp = Math.min(mon.maxHp, mon.currentHp + Math.ceil(mon.maxHp / 2));
      this.renderSidebar();
      this.logMsg('Una pausa ristoratrice: i Pokémon in forze recuperano metà dei PS.');
      say('Abitante: «Siediti un attimo e prendi un tè. I tuoi Pokémon recuperano un po’ di energie!»');
      return;
    }
    if (npc.npcEvent === 'radar') {
      if (npc.radarUsed || this.radarCharges === Infinity) { say('Abitante: «Il Radar funziona meglio sui percorsi, ricordalo!»'); return; }
      npc.radarUsed = true;
      this.radarCharges++;
      this.renderSidebar();
      this.logMsg('Hai ricevuto una scansione Radar in più!');
      say('Abitante: «Ho una batteria di ricambio per il tuo Rotom Radar. Ti vale una scansione in più!»');
      return;
    }
    if (npc.npcEvent === 'quiz' && npc.npcQuiz) { this.askTypeQuiz(npc, overlay, speech, actions); return; }
    say(`Abitante: «${npc.npcLine || this.npcDialogues[0]}»`);
  },

  startEeveeElderDialog(overlay, speech) {
    if (this.eeveeStoneGiftClaimed) {
      speech.textContent = 'Anziana: «La pietra che hai scelto ti accompagnerà nel viaggio. Prenditi cura del tuo Eevee!»';
      this.waitForNpcClick(overlay); return;
    }
    const hasEevee = this.team.some(mon => mon.id === 133);
    const lines = hasEevee ? [
      'Anziana: «Oh, che meraviglia! Quello è proprio un Eevee! Che compagno straordinario hai trovato!»',
      'Anziana: «Lo sapevi? Eevee può evolversi in tre forme diverse grazie a pietre speciali: Vaporeon, Jolteon e Flareon.»',
      'Anziana: «Ho conservato queste pietre per tanti anni. Scegline una: te la regalo! Potrai usarla su Eevee quando vorrai.»',
    ] : [
      'Anziana: «Non hai ancora catturato un Eevee? Dovresti farlo! È un Pokémon davvero speciale.»',
      'Anziana: «Con una Pietraidrica diventa Vaporeon, con una Pietratuono Jolteon e con una Pietrafocaia Flareon.»',
      'Anziana: «Scegli una delle mie tre pietre. È un regalo! Conservala finché non incontrerai il tuo Eevee.»',
    ];
    const next = index => {
      speech.textContent = lines[index];
      this.waitForNpcClick(overlay, () => {
        if (index + 1 < lines.length) next(index + 1);
        else { this.closeNpcDialog(); this.openEeveeGift(); }
      });
    };
    next(0);
  },

  openEeveeGift() {
    if (this.eeveeStoneGiftClaimed || this.floor !== 15) return false;
    const overlay=this.$id('eevee-stone-gift'), choices=this.$id('eevee-stone-choices');
    if (!overlay || !choices) return false;
    choices.replaceChildren(); this.isLocked=true;
    for (const [id,destination] of Object.entries(STONE_EVOLUTIONS)) {
      const button=make('button','eevee-stone-option'); button.type='button';
      button.append(Object.assign(make('img'), {src:itemImage(id),alt:''}),
        make('span','',itemLabel(id)),make('small','',speciesData(destination)?.name || '')); 
      button.onclick=async () => {
        if (this.eeveeStoneGiftClaimed || this._eeveeGiftBusy) return;
        this._eeveeGiftBusy=true;
        const accepted=await Dialogs.confirm({ title:'PIETRA EVOLUTIVA', message:`Vuoi scegliere ${itemLabel(id)}? Puoi ricevere una sola pietra in questa run.`, accept:'SCEGLI',cancel:'ANNULLA' });
        this._eeveeGiftBusy=false;
        if (!accepted || this.eeveeStoneGiftClaimed || this.floor !== 15) return;
        if (!this.canAcceptItem(id) || !this.grantItem(id)) {
          this.showItemFeedback('Non puoi trasportare questa pietra. Libera spazio e torna dall’anziana.'); return;
        }
        this.eeveeStoneGiftClaimed=true;
        this.closeEeveeGift();
        this.renderSidebar(); this.logMsg(`L’anziana ti ha regalato ${itemLabel(id)}!`);
        this.showDiscoveryNotice(`${itemLabel(id).toUpperCase()} OTTENUTA!`); this.saveCheckpoint();
      };
      choices.append(button);
    }
    overlay.classList.remove('hidden'); choices.querySelector('button')?.focus();
    return true;
  },
  closeEeveeGift() {
    if (this._eeveeGiftBusy) return;
    this.$id('eevee-stone-gift')?.classList.add('hidden');
    this.isLocked=false;
    this.$id('dungeon-viewport')?.focus?.();
  },

  /** Quiz sui tipi: la risposta giusta vale una Superpozione (o una Poké Ball se lo zaino è pieno). */
  askTypeQuiz(npc, overlay, speech, actions) {
    const quiz = npc.npcQuiz;
    const say = text => { speech.textContent = text; actions.classList.add('hidden'); this.waitForNpcClick(overlay); };
    if (npc.quizDone) { say('Abitante: «Ormai sei un esperto di tipi!»'); return; }
    speech.textContent = `Abitante: «Quiz! Quale tipo di mossa è superefficace contro i Pokémon di tipo ${typeName(quiz.defender)}?»`;
    const [first, second] = quiz.first === 'right' ? [quiz.right, quiz.wrong] : [quiz.wrong, quiz.right];
    const yes = this.$id('npc-btn-yes'), no = this.$id('npc-btn-no');
    yes.textContent = typeName(first); no.textContent = typeName(second); no.classList.remove('btn-danger');
    actions.classList.remove('hidden');
    yes.focus({ preventScroll: true });
    const answer = choice => {
      npc.quizDone = true;
      if (choice !== quiz.right) {
        say(`Abitante: «No! Contro il tipo ${typeName(quiz.defender)} serve il tipo ${typeName(quiz.right)}. Sarà per la prossima volta!»`);
        return;
      }
      const prize = this.grantItem('superPotion') ? 'superPotion' : this.grantItem('pokeball') ? 'pokeball' : null;
      this.renderSidebar();
      if (prize) this.logMsg(`Quiz superato: ${itemLabel(prize)} ricevuta!`);
      say(prize ? `Abitante: «Esatto! Ecco una ${itemLabel(prize)} come premio!»` : 'Abitante: «Esatto! Avrei un premio, ma il tuo zaino è pieno.»');
    };
    yes.onclick = () => answer(first);
    no.onclick = () => answer(second);
  },

  /** Scambio: il Pokémon offerto è mostrato prima di accettare. */
  offerNpcTrade(npc, overlay, speech, actions) {
    const source = this.activeMon;
    if (!source || !this.team.includes(source)) { speech.textContent = 'Abitante: «Ti serve un Pokémon per fare uno scambio.»'; this.waitForNpcClick(overlay); return; }
    const offeredId = npc.npcTradeOfferId ||= evolvedEncounterId(npc.npcTradeSpeciesId || 19, source.level);
    const offered = speciesData(offeredId);
    speech.textContent = `Abitante: «Scambieresti il tuo ${source.name} con il mio ${offered.name.toUpperCase()} (Lv.${source.level})?»`;
    const card = this.$id('npc-trade-offer');
    if (card) card.replaceChildren(Object.assign(make('img'), { src: pokemonSprite(offeredId), alt: '' }),
      make('span', '', `${offered.name.toUpperCase()} · ${offered.types.map(typeName).join(' / ')}`));
    this.$id('npc-btn-yes').textContent = 'ACCETTA'; this.$id('npc-btn-no').textContent = 'RIFIUTA'; this.$id('npc-btn-no').classList.add('btn-danger');
    actions.classList.remove('hidden');
    this.$id('npc-btn-yes').focus({ preventScroll: true });
    this.$id('npc-btn-yes').onclick = () => {
      const index = this.team.indexOf(source);
      if (index < 0) { this.closeNpcDialog(); return; }
      const received = new Pokemon(offered, source.level);
      this.team[index] = received;
      this.ensureActivePokemon();
      npc.tradeCompleted = true;
      Dex.record(received, 'caught', `Scambio · Piano ${this.floor}`);
      this.soloRunEligible = false;
      this.logMsg(`Scambio effettuato! Ora hai ${received.name}!`);
      this.closeNpcDialog(); this.renderSidebar();
    };
    this.$id('npc-btn-no').onclick = () => { this.closeNpcDialog(); this.logMsg('Hai rifiutato lo scambio. Puoi riparlarci per ripensarci.'); };
  },

  /** Attende un clic o Spazio/Invio per far avanzare il dialogo. */
  waitForNpcClick(overlay, onAdvance = () => this.closeNpcDialog()) {
    this.clearNpcAdvance();
    overlay.appendChild(make('div', 'npc-click-hint', 'CLICCA O PREMI SPAZIO ▾'));
    const advance = () => { this.clearNpcAdvance(); onAdvance(); };
    this.pendingNpcAdvance = advance;
    this.scheduleAutoAdvance(this.$id('npc-speech-text')?.textContent, advance);
    this.pendingNpcAdvanceTimer = setTimeout(() => {
      if (this.pendingNpcAdvance !== advance || overlay.classList.contains('hidden')) return;
      document.addEventListener('pointerdown', advance, true);
      this.removeNpcKeys = keyRouter.push('npc-dialog', event => {
        if (isSpace(event) || event.key === 'Enter') { event.preventDefault(); if (!event.repeat) advance(); }
        return true;
      });
    }, 20);
  },
};


return {townMethods};
})();
const __m20 = (() => {
const { gymForFloor, leaderSpriteUrl } = __m3;
const Objectives = __m9;
// Palestre: conferma della sfida, tre allenatori e il Capopalestra.



const gymMethods = {
  requestGymChallenge(){
    if(this.gymChallengePending)return false;
    this.isLocked=true;
    this.gymChallengePending=true;
    const gym=gymForFloor(this.floor);
    const overlay=this.$id('gym-entry-confirm');
    this.$id('gym-entry-text').textContent=`Vuoi iniziare la sfida di ${gym.name}? `+
      'Dovrai superare tre Allenatori prima del Capopalestra.';
    overlay.classList.remove('hidden');
    return true;
  },

  cancelGymChallenge(){
    if(!this.gymChallengePending)return false;
    this.gymChallengePending=false;
    this.$id('gym-entry-confirm').classList.add('hidden');
    this.isLocked=false;
    this.logMsg('Sfida annullata: puoi tornare quando vuoi.');
    return true;
  },

  confirmGymChallenge(){
    if(!this.gymChallengePending)return false;
    this.gymChallengePending=false;
    this.$id('gym-entry-confirm').classList.add('hidden');
    this.isLocked=true;
    this.currentGym=gymForFloor(this.floor);
    this.gymQueue=['trainer1','trainer2','trainer3','leader'];
    this.gymLeaderIndex=0;
    this.gymBadgeName=`Medaglia ${this.currentGym.badge}`;
    this.currentTrainerSprite=this.trainerSprites[Math.floor(Math.random()*this.trainerSprites.length)];
    this.setTrainerPortrait(this.$id('trainer-portrait-img'),this.currentTrainerSprite);
    this.$id('trainer-dialog-speech').textContent=`Palestra ${this.currentGym.specialty}: sconfiggi 3 allenatori per affrontare ${this.currentGym.name}!`;
    this.$id('trainer-encounter-overlay').classList.remove('hidden');
    return true;
  },

  showGymLeaderIntro() {
    const leader=this.currentGym;
    if(!leader) return;
    this.isLocked=true;
    // The leader introduction overlays the same arena; don't tear down the battle.
    this.hideAllActions();
    const overlay=this.$id('gym-leader-intro');
    this.$id('gym-leader-name').textContent=leader.name.toUpperCase();
    this.$id('gym-leader-specialty').textContent=`SPECIALITÀ ${leader.specialty}`;
    this.$id('gym-leader-roster').textContent=`SQUADRA: ${leader.pokemon.length} POKÉMON`;
    const portrait=this.$id('gym-leader-portrait');
    this.setTrainerPortrait(portrait,leaderSpriteUrl(leader));
    overlay.classList.remove('hidden');
    this.$id('btn-start-gym-leader')?.focus({preventScroll:true});
  },

  async advanceGymAfterVictory() {
    if (this.gymQueue[0] === 'leader') {
      if (this.gymLeaderIndex < this.currentGym.pokemon.length-1) {
        this.gymLeaderIndex++;
        await this.battleText(`${this.currentGym.name} schiera il prossimo Pokémon!`);
        await this.startBattle('gym',true);
        return;
      }
      this.gymQueue.shift();
      if(!this.completedGymFloors.has(this.floor)) {
        this.completedGymFloors.add(this.floor);
        this.badges.push({id:this.currentGym.badgeId,name:this.gymBadgeName});
        Objectives.record('badge',this.runId,{badges:this.badgeCount(),mode:this.runMode,lossless:!this.runStats.fallen.some(p=>p.lost)});
        this.renderBadges();
        this.saveCheckpoint();
      }
      this.money+=750;
      this.renderDungeon(); // L'uscita si sblocca visivamente dopo la medaglia.
      this.showDiscoveryNotice(`${this.gymBadgeName.toUpperCase()} OTTENUTA!`,3800);
      this.endBattle(`Hai sconfitto ${this.currentGym.name}! ${this.gymBadgeName} conquistata. +$750`);
      this.currentGym=null;
      return;
    }
    this.gymQueue.shift();
    if(this.gymQueue[0]==='leader') {
      await this.battleText('Tre allenatori sconfitti! Ora arriva il Capopalestra!');
      this.showGymLeaderIntro();
    } else {
      await this.battleText('Allenatore sconfitto! Il prossimo sfidante si prepara.');
      this.currentTrainerSprite=this.trainerSprites[Math.floor(Math.random()*this.trainerSprites.length)];
      await this.startBattle('gym',true);
    }
  },
};

return {gymMethods};
})();
const __m21 = (() => {
const { OAK_MAP_SPRITE } = __m3;
const Checkpoints = __m7;
const Objectives = __m9;
// Evento della Grotta Celeste (piano 75): invito di Oak, spedizione, Mewtwo e ritorno.




const celestialMethods = {
  // Floor 75: authored story event. A refusal does not permanently lose the invitation.
  // The two expedition members are a temporary battle party; the remaining
  // Pokémon never enter the cave and must survive even if the mission fails.
  openCelestialTeamSelection(){
    if(this.isCelestialCave||!this.team.length)return false;
    this.celestialRosterSelection=new Set();this.celestialExpeditionBusy=false;
    this.$id('celestial-expedition')?.classList.remove('hidden');
    this.$id('celestial-dialog')?.classList.add('hidden');
    this.isLocked=true;this.stopContinuousWalk();
    this.renderCelestialTeamSelection();return true;
  },

  renderCelestialTeamSelection(){
    const list=this.$id('celestial-team-list');if(!list)return;
    list.replaceChildren();
    const max=Math.min(2,Math.max(0,this.team.length-1));
    for(const [index,mon] of this.team.entries()){
      const selected=this.celestialRosterSelection.has(index);
      const button=document.createElement('button');button.type='button';
      button.className='celestial-roster-choice'+(selected?' selected':'');
      button.setAttribute('aria-pressed',String(selected));
      const marker=document.createElement('span');marker.textContent=selected?'✓':'○';
      const picture=document.createElement('img');picture.src=mon.spriteFront;picture.alt='';
      const name=document.createElement('span');name.textContent=`${mon.name} · Lv.${mon.level} · ${mon.currentHp}/${mon.maxHp} PS`;
      button.append(marker,picture,name);
      button.onclick=()=>{
        if(this.celestialExpeditionBusy)return;
        if(selected)this.celestialRosterSelection.delete(index);
        else if(this.celestialRosterSelection.size<max)this.celestialRosterSelection.add(index);
        this.renderCelestialTeamSelection();
        list.children[index]?.focus({preventScroll:true});
      };
      if(!selected&&this.celestialRosterSelection.size>=max)button.disabled=true;
      list.append(button);
    }
    const count=this.celestialRosterSelection.size;
    this.$id('celestial-team-counter').textContent=`${count} / ${max} SELEZIONATI · ${this.team.length-count} AL SICURO`;
    const confirm=this.$id('celestial-team-confirm');confirm.disabled=count<1||this.celestialExpeditionBusy;
    const help=this.$id('celestial-team-help');
    help.textContent=max<1?'Serve almeno un Pokémon da lasciare al villaggio prima di partire.':
      this.runMode === 'normal' ? 'Scegli al massimo due Pokémon. Se la spedizione fallisce, gli esausti potranno essere curati al Centro Pokémon.' :
      'Scegli al massimo due Pokémon. In Nuzlocke ogni KO è definitivo.';
    const first=list.querySelector('button:not(:disabled)');
    if(!list.contains(document.activeElement)&&document.activeElement!==confirm)first?.focus({preventScroll:true});
  },

  cancelCelestialTeam(){
    if(this.celestialExpeditionBusy)return;
    this.$id('celestial-expedition')?.classList.add('hidden');
    this.celestialRosterSelection.clear();this.isLocked=false;
    this.oakEventDismissed=false;
    this.logMsg('Il Professor Oak ti attenderà quando sarai pronto.');
  },

  async confirmCelestialTeam(){
    if(this.celestialExpeditionBusy||this.isCelestialCave)return false;
    const choice=[...this.celestialRosterSelection].sort((a,b)=>a-b);
    if(choice.length<1||choice.length>2||choice.length>=this.team.length||
       choice.some(index=>!this.team[index]||this.team[index].currentHp<=0))return false;
    this.celestialExpeditionBusy=true;
    const chosen=new Set(choice),previous=this.team;
    this.celestialReserve=previous.filter((_,index)=>!chosen.has(index));
    this.team=previous.filter((_,index)=>chosen.has(index));
    this.ensureActivePokemon();this.celestialRosterSelection.clear();
    // Da qui la spedizione è "in corso": se la pagina viene chiusa o si torna al menu,
    // i Pokémon della spedizione sono considerati persi, come in una sconfitta.
    this.writeCheckpoint(Checkpoints.take(this,{expedition:true}));
    this.$id('celestial-expedition')?.classList.add('hidden');
    this.oakEventDismissed=true;
    const oak=this.gridMap?.[3]?.[5];
    if(oak?.specialRole==='celestial-oak'){oak.entity=null;oak.specialRole=null;}
    this.renderDungeon();this.renderSidebar();
    try{await this.enterCelestialCave();return true;}
    finally{this.celestialExpeditionBusy=false;}
  },

  handleCelestialModalKey(event){
    let modal=this.$id('celestial-expedition');
    if(modal?.classList.contains('hidden'))modal=this.$id('oak-laboratory');
    if(!modal||modal.classList.contains('hidden'))return false;
    if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d','W','A','S','D',' ','Enter','Escape'].includes(event.key))return true;
    event.preventDefault();
    if(event.repeat && [' ','Enter'].includes(event.key))return true;
    const options=[...modal.querySelectorAll('button:not(:disabled):not(.hidden)')].filter(button=>button.offsetParent!==null);
    if(event.key==='Escape'){
      if(modal.id==='celestial-expedition')this.cancelCelestialTeam();
      return true;
    }
    if(event.key===' '||event.key==='Enter'){
      (options.includes(document.activeElement)?document.activeElement:options[0])?.click();return true;
    }
    if(!options.length)return true;
    const forward=['s','d','S','D','ArrowDown','ArrowRight'].includes(event.key);
    const index=options.indexOf(document.activeElement);
    options[(index+(forward?1:-1)+options.length)%options.length]?.focus({preventScroll:true});
    return true;
  },

  // Rientrando dalla grotta con Mewtwo si possono avere sette Pokémon:
  // uno va affidato definitivamente al laboratorio di Oak.
  openOakLaboratory(forceDeposit=false){
    if(!forceDeposit || this.team.length!==7 || this.isCelestialCave || this.isBattleVisible() || !this.isTownFloor())return false;
    this.celestialDepositRequired=!!forceDeposit;
    this.isLocked=true;this.stopContinuousWalk();
    this.$id('oak-laboratory')?.classList.remove('hidden');
    this.renderOakLaboratory();return true;
  },

  renderOakLaboratory(){
    const list=this.$id('oak-lab-options');if(!list)return;
    list.replaceChildren();
    const forced=this.celestialDepositRequired;
    const message=this.$id('oak-lab-message');
    message.textContent='Professor Oak: «Hai sette Pokémon con te. Puoi viaggiare con sei soltanto: quale vuoi affidare definitivamente al mio laboratorio? Non potrai ritirarlo.»';
    const add=(mon,kind,index)=>{
      const button=document.createElement('button');button.type='button';button.className='celestial-roster-choice';
      const img=document.createElement('img');img.src=mon.spriteFront;img.alt='';
      const label=document.createElement('span');label.textContent=`AFFIDA · ${mon.name} Lv.${mon.level}`;
      button.append(img,label);button.onclick=()=>this.depositOakPokemon(index);
      list.append(button);
    };
    if(forced&&this.team.length===7)this.team.forEach((mon,index)=>add(mon,'deposit',index));
    if(!list.children.length){const empty=document.createElement('p');empty.textContent='Nessun trasferimento disponibile.';list.append(empty);}
    this.$id('oak-lab-count').textContent=`IN SQUADRA ${this.team.length}/6`;
    const close=this.$id('oak-lab-close');close.classList.add('hidden');close.disabled=true;
    list.querySelector('button:not(:disabled)')?.focus({preventScroll:true});
  },

  depositOakPokemon(index){
    if(!this.isTownFloor()||this.isCelestialCave||this.isBattleVisible())return false;
    const forced=this.celestialDepositRequired;
    if(!forced || index<0 || index>=this.team.length || this.team.length!==7)return false;
    const [mon]=this.team.splice(index,1);
    this.logMsg(`${mon.name} resta al laboratorio del Professor Oak.`);this.ensureActivePokemon();
    this.renderSidebar();
    if(forced){this.celestialDepositRequired=false;this.closeOakLaboratory();}
    this.saveCheckpoint();return true;
  },

  closeOakLaboratory(){
    if(this.celestialDepositRequired)return false;
    this.$id('oak-laboratory')?.classList.add('hidden');this.isLocked=false;
    this.renderSidebar();return true;
  },

  finishCelestialExpeditionDefeat(){
    if(!this.isCelestialCave||!this.celestialReturnState)return false;
    const normal=this.runMode==='normal';
    this.team=[...this.celestialReserve,...(normal?this.team:[])];this.celestialReserve=[];
    this.celestialPhase='unvisited';this.celestialMewtwoCaptured=false;this.oakEventDismissed=false;
    this.battleToken++;this.battleBusy=false;this.pendingForcedSwitch=false;
    this.battleMode=null;this.battleType=null;this.battleWeather=null;this.pendingItemTarget=null;
    this.enemyMon?.clearBattleConditions?.();this.enemyMon=null;
    this.closePartyActions();this.closePokemonInfo();
    this.$id('overlay-battle')?.classList.add('hidden');
    this.$id('overlay-battle')?.classList.remove('battle-preparing','battle-revealing');
    this.$id('battle-controls')?.classList.add('hidden');
    this.$id('battle-confirm')?.classList.add('hidden');
    this.$id('item-target-prompt')?.classList.add('hidden');
    this.$id('rotom-body')?.classList.remove('battle-active');
    this.updateBattleWingCloseButtons();
    this.$id('gameover-overlay')?.classList.add('hidden');
    this.$id('celestial-dialog')?.classList.add('hidden');
    const saved=this.celestialReturnState;this.gridMap=saved.gridMap;
    this.playerPos={...saved.playerPos};this.floor=saved.floor;
    this.celestialReturnState=null;this.isCelestialCave=false;
    this.$id('dungeon-grid-board')?.classList.remove('celestial-cave');
    this.ensureOakEventAccessible();this.ensureActivePokemon();
    this.isLocked=false;this.renderDungeon();this.renderSidebar();
    this.logMsg(normal ? 'La spedizione è fallita. Gli esausti possono essere curati al Centro Pokémon.' : 'La spedizione è fallita. I Pokémon caduti non tornano.');
    this.showDiscoveryNotice('SPEDIZIONE FALLITA',3500);
    this.music?.setScene('exploration');
    this.saveCheckpoint();
    if(!this.activeMon) this.resolveTeamDefeat();
    return true;
  },

  showOakIntroduction(){
    this.$id('npc-dialog-overlay')?.classList.add('hidden');
    this.pendingNpcAdvance=null;this.hideDialogNpcBackground(false);
    this.showCelestialDialogue('Ti stavo aspettando. Da giorni gli strumenti del laboratorio registrano un segnale impossibile, proprio sotto queste montagne.', 'intro-one');
  },

  showCelestialDialogue(line,step){
    this.celestialDialogStep=step;this.isLocked=true;this.stopContinuousWalk();
    const panel=this.$id('celestial-dialog');
    this.$id('celestial-dialog-text').textContent=line;
    const question=step==='question';
    this.$id('celestial-dialog-actions').classList.toggle('hidden',!question);
    this.$id('celestial-dialog-next').classList.toggle('hidden',question);
    const heading=this.$id('celestial-dialog-chapter');
    const progress=this.$id('celestial-dialog-progress');
    const chapter=step.startsWith('intro')||question?'PIANO 75 · IL RICHIAMO':
      step.startsWith('arrival')?'GROTTA CELESTE · LA SOGLIA':
      step.startsWith('reward')?'GROTTA CELESTE · LA PROVA':
      'GROTTA CELESTE · EPILOGO';
    if(heading)heading.textContent=chapter;
    if(progress)progress.textContent=({
      'intro-one':'01 / 05','intro-two':'02 / 05','intro-three':'03 / 05','intro-four':'04 / 05',
      question:'05 / 05','arrival-one':'01 / 03','arrival-two':'02 / 03','arrival-three':'03 / 03',
      'reward-one':'01 / 03','reward-two':'02 / 03','reward-three':'03 / 03',
      'farewell-one':'01 / 02','farewell-two':'02 / 02'
    })[step]||'';
    panel.classList.remove('hidden');
    (question?this.$id('celestial-dialog-yes'):this.$id('celestial-dialog-next'))?.focus({preventScroll:true});
    // Le domande aspettano sempre la scelta del giocatore.
    if(question)this.cancelAutoAdvance();
    else this.scheduleAutoAdvance(line,()=>{if(this.celestialDialogStep===step&&!panel.classList.contains('hidden'))this.advanceCelestialDialog();});
  },

  advanceCelestialDialog(){
    if(this.$id('celestial-dialog')?.classList.contains('hidden'))return;
    const lines={
      'intro-one':['intro-two','Nessun Pokémon selvatico si avvicina più alla Grotta Celeste. Persino i più coraggiosi fuggono quando cala il silenzio.'],
      'intro-two':['intro-three','Non si tratta di un fenomeno naturale. Qualcuno ha creato una forza che non avrebbe mai dovuto essere liberata. Il suo nome è Mewtwo.'],
      'intro-three':['intro-four','Questa missione non perdona gli errori. Potrai portare al massimo due Pokémon, lasciando gli altri al sicuro. Le conseguenze della sconfitta dipendono dalla modalità della run.'],
      'intro-four':['question','Vuoi accompagnarmi nella Grotta Celeste? Puoi rifiutare e tornare quando sarai pronto.'],
      'arrival-one':['arrival-two','Ascolta… non è il vento. Qualcosa ci osserva da molto prima che varcassimo l’ingresso.'],
      'arrival-two':['arrival-three','Davanti a noi c’è Mewtwo. Prima di tentare la cattura dovrai affrontarlo e dimostrare di saper resistere alla sua forza.'],
      'reward-one':['reward-two','Mewtwo ti ha messo alla prova e ora ti riconosce come avversario. Ma non è finita: è ancora lì, in attesa.'],
      'reward-two':['reward-three','Questa Master Ball è il risultato di anni di ricerca. Può riuscire dove ogni altra Poké Ball fallirebbe. Usala con giudizio.'],
      'farewell-one':['farewell-two',this.celestialMewtwoCaptured?'La Grotta Celeste tornerà silenziosa, ma ciò che hai dimostrato qui resterà con te.':'Oak abbassa lo sguardo. «Non tutte le leggende possono essere catturate. Torniamo a casa.»'],
    };
    const next=lines[this.celestialDialogStep];
    if(next){this.showCelestialDialogue(next[1],next[0]);return;}
    if(this.celestialDialogStep==='question')return;
    const ending=this.celestialDialogStep;
    this.$id('celestial-dialog').classList.add('hidden');
    if(ending==='farewell-two'){
      this.finishCelestialReturn();return;
    }
    this.isLocked=false;
    if(ending==='reward-three'){
      this.logMsg('MASTER BALL ottenuta. Mewtwo ti attende per la seconda sfida.');
      this.showDiscoveryNotice('MASTER BALL OTTENUTA · SECONDA SFIDA',3100);
    }
  },

  answerOakInvitation(yes){
    if(this.celestialDialogStep!=='question')return;
    this.$id('celestial-dialog').classList.add('hidden');
    if(!yes){
      // Reversible: Oak stays on floor 75 and may be spoken to again.
      this.isLocked=false;
      this.oakEventDismissed=false;
      this.logMsg('Oak annuisce. «Prenditi il tempo che serve. Ti aspetterò qui.»');
      return;
    }
    this.openCelestialTeamSelection();
  },

  // Older checkpoints could mark Oak as dismissed despite the player refusing.
  ensureOakEventAccessible(){
    if(this.floor!==75||this.isCelestialCave||this.celestialPhase!=='unvisited')return;
    const oak=this.gridMap?.[3]?.[5];if(!oak)return;
    if(!oak.entity || oak.specialRole==='celestial-oak'){
      this.oakEventDismissed=false;
      oak.entity='npc';oak.type='town-ground';oak.decoration=null;
      oak.specialRole='celestial-oak';oak.npcName='Professor Oak';
      oak.npcSprite=OAK_MAP_SPRITE;
      oak.localSpriteFallback=OAK_MAP_SPRITE;
    }
  },

  async celestialFadeTo(action){
    const black=this.$id('celestial-blackout');
    black.classList.add('active');
    await this.wait(950);
    await action();
    await this.wait(340);
    black.classList.remove('active');
    await this.wait(900);
  },

  async enterCelestialCave(){
    this.isLocked=true;this.stopContinuousWalk();
    this.celestialReturnState={gridMap:this.gridMap,playerPos:{...this.playerPos},floor:this.floor};
    await this.celestialFadeTo(async()=>{
      this.isCelestialCave=true;this.celestialPhase='trial';
      this.playerPos={x:5,y:7};this.pendingWalk=null;
      const walkable=(x,y)=>(x>=3&&x<=6&&y>=2&&y<=7)||
        (x>=4&&x<=6&&y===8)||(x>=4&&x<=6&&y===1)||
        ((x===2||x===7)&&(y>=3&&y<=6));
      this.gridMap=Array.from({length:10},(_,y)=>Array.from({length:10},(_,x)=>({
        x,y,type:walkable(x,y)?'cave-stone':'water',entity:null,revealed:true,
        decoration:([[2,3],[7,3],[2,6],[7,6],[3,1],[6,1]].some(([cx,cy])=>cx===x&&cy===y))?'celestial-crystal':null
      })));
      // A single southern opening; the cave is surrounded by deep water.
      const exit=this.gridMap[9][5];exit.type='cave-stone';exit.entity='cave-exit';
      this.gridMap[4][5].entity='mewtwo';
      const oak=this.gridMap[7][4];oak.entity='npc';oak.specialRole='cave-oak';
      oak.npcName='Professor Oak';oak.npcSprite=OAK_MAP_SPRITE;
      oak.localSpriteFallback=OAK_MAP_SPRITE;
      this.renderDungeon();this.renderSidebar();
    });
    if(!this.isCelestialCave)return;
    await this.wait(600);
    this.music?.setScene('cave');
    this.showCelestialDialogue('La luce si spegne alle nostre spalle. Guarda quelle pareti… sembrano pulsare al ritmo di un cuore.','arrival-one');
  },

  async startMewtwoCinematic(){
    if(!this.isCelestialCave||!['trial','rematch'].includes(this.celestialPhase)||this.celestialCutsceneActive)return;
    this.celestialCutsceneActive=true;this.isLocked=true;this.stopContinuousWalk();
    const overlay=this.$id('celestial-cinematic');
    overlay.classList.remove('hidden');
    this.$id('celestial-cinematic-subtitle').textContent=this.celestialPhase==='trial'
      ?'Il silenzio si spezza. Una presenza immensa si risveglia…':'La grotta trema. Mewtwo ti riconosce e accetta l’ultima sfida.';
    this.music?.setScene('mewtwo');
    await this.wait(1900);
    if(!this.isCelestialCave){overlay.classList.add('hidden');this.celestialCutsceneActive=false;return;}
    overlay.classList.add('hidden');this.celestialCutsceneActive=false;
    this.startBattle('mewtwo');
  },

  showOakMasterBallReward(){
    if(this.items.masterball===0)this.grantItem('masterball');
    this.renderSidebar();
    this.showCelestialDialogue('Hai resistito a un potere che nessuno aveva mai saputo fronteggiare. Oak apre lentamente la valigetta che portava con sé…','reward-one');
  },

  completeMewtwoEncounter(captured=true){
    this.celestialMewtwoCaptured=!!captured;
    this.celestialPhase='complete';
    const mon=this.gridMap?.[4]?.[5];if(mon?.entity==='mewtwo')mon.entity=null;
    this.logMsg('La Grotta Celeste torna silenziosa. Oak ti aspetta prima dell’uscita a sud.');
  },

  leaveCelestialCave(){
    if(!this.isCelestialCave||this.celestialPhase!=='complete'||!this.celestialReturnState||this.celestialDeparturePending)return false;
    this.celestialDeparturePending=true;
    this.showCelestialDialogue(this.celestialMewtwoCaptured?'Ce l’hai fatta. Hai catturato Mewtwo: il silenzio della grotta ora sembra diverso.':'Hai affrontato Mewtwo fino alla fine. Dopo il secondo KO è svanito nell’oscurità. Lasciamo la grotta a mani vuote, ma vivi.','farewell-one');
    return true;
  },

  async finishCelestialReturn(){
    if(!this.isCelestialCave||this.celestialPhase!=='complete'||!this.celestialReturnState)return;
    this.isLocked=true;this.stopContinuousWalk();
    this.music?.setScene('exploration');
    try{
      await this.celestialFadeTo(async()=>{
        const previous=this.celestialReturnState;
        this.gridMap=previous.gridMap;this.playerPos={...previous.playerPos};
        this.floor=previous.floor;this.celestialReturnState=null;this.isCelestialCave=false;
        this.team=[...this.celestialReserve,...this.team];this.celestialReserve=[];this.ensureActivePokemon();
        this.$id('dungeon-grid-board')?.classList.remove('celestial-cave');
            this.renderDungeon();this.renderSidebar();
      });
    }finally{this.celestialDeparturePending=false;this.isLocked=false;}
    this.logMsg(this.celestialMewtwoCaptured?'Sei tornato con Mewtwo dalla Grotta Celeste.':'Sei tornato al villaggio. Mewtwo è scomparso dopo il secondo KO.');
    Objectives.record('cave',this.runId,{outcome:this.celestialMewtwoCaptured?'caught':'knockout'});
    if(this.team.length>6){this.openOakLaboratory(true);return;}
    this.saveCheckpoint();
  },
};

return {celestialMethods};
})();
const __m22 = (() => {
const Dex = __m8;
const { experienceForNextLevel } = __m2;
const { FINAL_FLOOR } = __m3;
// DEV MODE: strumenti di prova per lo sviluppatore.
// - Il pulsante compare solo in locale (localhost) o aprendo il sito con #dev nell'indirizzo.
// - Il codice non è scritto in chiaro: si confronta la sua impronta SHA-256.
// - Una run in cui la DEV MODE è stata attivata è "di prova" (devRun): non registra
//   Pokédex, obiettivi né lo sblocco del Campione. Un controllo nel browser non è
//   una protezione assoluta, ma così barare non porta alcun vantaggio.




// SHA-256 di "pokexplorer-dev:" + codice. Per cambiarlo vedi docs/SVILUPPO.md.
const DEV_CODE_HASH = '52e89b543e40ef6630daee0fb095d7a4343db962a80a8e9ead2f52247cd92f74';

function devAccessAvailable(loc = globalThis.location) {
  if (!loc) return false;
  return /^(localhost|127\.0\.0\.1|\[::1\])$/.test(loc.hostname) || loc.protocol === 'file:' || (loc.protocol === 'about:' && /(^|[#&?])dev\b/.test(`${loc.hash}${loc.search}`));
}
async function hashDevCode(code) {
  const bytes = new TextEncoder().encode(`pokexplorer-dev:${String(code).trim()}`);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
}

const devMethods = {
  bindDevControls(click) {
    click('dev-mode-trigger', () => { this.closeQuickSettings(); this.openDevCode(); });
    click('dev-code-cancel', () => this.closeDevCode());
    this.$id('dev-code-form')?.addEventListener('submit', event => { event.preventDefault(); this.activateDevMode(this.$id('dev-access-code').value); });
    click('floor-jump-trigger', () => this.openFloorJumpCode());
    click('floor-jump-cancel', () => this.closeFloorJumpCode());
    this.$id('floor-jump-form')?.addEventListener('submit', event => { event.preventDefault(); this.teleportToFloor(this.$id('floor-jump-level').value); });
    click('dev-skip-battle', () => this.requestDevSkip());
    click('dev-radar', () => this.devUnlimitedRadar());
  },

  syncDevControls() {
    this.$id('dev-mode-trigger')?.classList.toggle('hidden', !devAccessAvailable());
    this.$id('developer-panel')?.classList.toggle('hidden', !this.devMode);
    this.$id('dev-footer-tools')?.classList.toggle('hidden', !this.devMode);
    const skip = this.$id('dev-skip-battle');
    if (skip) skip.disabled = !this.devMode;
  },

  // ---------------------------------------------------------------- Accesso
  openDevCode() {
    this.stopContinuousWalk();
    const overlay = this.$id('dev-code-overlay');
    if (!overlay) return false;
    this.$id('dev-access-code').value = '';
    this.$id('dev-code-error').textContent = '';
    this.$id('dev-code-description').textContent = this.devMode ? 'Modalità sviluppatore già attiva.' : 'Inserisci il codice di accesso.';
    for (const id of ['dev-access-code', 'dev-code-confirm']) this.$id(id).classList.toggle('hidden', this.devMode);
    this.$id('dev-code-form').querySelector('label').classList.toggle('hidden', this.devMode);
    overlay.classList.remove('hidden');
    (this.devMode ? this.$id('dev-code-cancel') : this.$id('dev-access-code')).focus();
    return true;
  },

  closeDevCode() {
    this.$id('dev-code-overlay')?.classList.add('hidden');
    this.$id('dev-access-code').value = '';
    this.$id('dev-mode-trigger')?.focus();
  },

  async activateDevMode(code) {
    if (this.devMode) return true;
    let valid = false;
    try { valid = devAccessAvailable() && await hashDevCode(code) === DEV_CODE_HASH; } catch { valid = false; }
    if (!valid) {
      this.$id('dev-code-error').textContent = 'Codice errato.';
      this.$id('dev-access-code').value = '';
      this.$id('dev-access-code').focus();
      return false;
    }
    this.devMode = true;
    Dex.setPreview(true);
    // La run in corso diventa una run di prova.
    if (this.team.length) { this.devRun = true; this.saveCheckpoint(); }
    Object.assign(this.items, { rareCandy: 999, goldCandy: 999 });
    if (this.gridMap.length) { for (const row of this.gridMap) for (const cell of row) cell.revealed = true; this.renderDungeon(); }
    const trigger = this.$id('dev-mode-trigger');
    if (trigger) { trigger.setAttribute('aria-pressed', 'true'); trigger.textContent = 'DEV MODE ✓'; }
    this.bagCategory = 'rimedi';
    this.syncDevControls();
    this.closeDevCode();
    this.renderSidebar();
    this.logMsg('DEV MODE: Pokédex completo con varianti e shiny solo in anteprima, senza scritture sul cloud o nel profilo.');
    return true;
  },

  // ---------------------------------------------------------------- Teletrasporto
  openFloorJumpCode() {
    if (!this.devMode) return false;
    this.stopContinuousWalk();
    const overlay = this.$id('floor-jump-overlay');
    if (!overlay) return false;
    this.$id('floor-jump-level').value = String(Math.max(1, Math.min(FINAL_FLOOR, Number(this.floor) || 1)));
    this.$id('floor-jump-error').textContent = '';
    overlay.classList.remove('hidden');
    this.$id('floor-jump-level').focus();
    return true;
  },

  closeFloorJumpCode() {
    this.$id('floor-jump-overlay')?.classList.add('hidden');
    const error = this.$id('floor-jump-error');
    if (error) error.textContent = '';
  },

  teleportToFloor(targetFloor) {
    const error = this.$id('floor-jump-error');
    if (!this.devMode) return false;
    if (!this.team.length || !this.gridMap.length) { error.textContent = 'Prima avvia una run e scegli il tuo Pokémon iniziale.'; return false; }
    const floor = Number(targetFloor);
    if (!Number.isInteger(floor) || floor < 1 || floor > FINAL_FLOOR || String(targetFloor).trim() === '') {
      error.textContent = `Scegli un piano intero da 1 a ${FINAL_FLOOR}.`;
      this.$id('floor-jump-level').focus();
      return false;
    }
    if (this.isLocked || this.isBattleVisible() || this.battleBusy || this.isCelestialCave || this.adventureCompleted ||
      this.pendingItemTarget || this.dialogueResolve || this.pendingForcedSwitch || this.gymQueue.length) {
      error.textContent = 'Completa prima la lotta o l’evento in corso.';
      return false;
    }
    this.stopContinuousWalk();
    this.closeFloorJumpCode();
    this.closePartyActions();
    this.closePokemonInfo();
    this.floor = floor;
    this.floorKind = null;
    if (floor === 75) { this.oakEventDismissed = false; this.celestialPhase = 'unvisited'; }
    this.celestialReturnState = null;
    this.celestialCutsceneActive = false;
    this.generateFloorDungeon();
    this.saveCheckpoint();
    this.logMsg(`TELETRASPORTO DEV: piano ${floor}.${floor === 75 ? ' Parla con il Professor Oak per entrare nella Grotta Celeste.' : ''}`);
    return true;
  },

  // ---------------------------------------------------------------- SKIP
  /** Vince subito la lotta in corso (selvatici, allenatori, palestre, raid, leggendari, Mewtwo). */
  requestDevSkip() {
    if (!this.devMode) return false;
    if (!this.isBattleVisible()) {
      // Dalla schermata "LOTTA!" la lotta parte e viene saltata appena possibile.
      const trainer = !this.$id('trainer-encounter-overlay')?.classList.contains('hidden');
      const wild = !this.$id('wild-encounter-overlay')?.classList.contains('hidden');
      if (!trainer && !wild) { this.logMsg('SKIP: nessuna lotta in corso.'); return false; }
      this.devSkipPending = true; this.fastBattleText = true;
      this.$id(trainer ? 'btn-start-trainer-battle' : 'btn-start-wild-battle')?.click();
      return true;
    }
    this.devSkipPending = true;
    this.fastBattleText = true;
    if (this.pendingForcedSwitch) { this.pendingForcedSwitch = false; this.ensureActivePokemon(); this.performDevSkip(); return true; }
    if (this.dialogueResolve) this.acknowledgeDialogue();
    else if (!this.battleBusy) this.performDevSkip();
    return true;
  },

  async performDevSkip() {
    if (!this.devMode || !this.isBattleVisible() || !this.enemyMon || this.enemyMon.currentHp <= 0) { this.devSkipPending = false; return; }
    this.devSkipPending = false;
    this.devSkipChain = true;
    this.fastBattleText = true;
    this.battleBusy = true;
    this.hideAllActions();
    this.$id('battle-confirm')?.classList.add('hidden');
    this.battleConfirmAction = null;
    this.enemyMon.currentHp = 0;
    this.updateBattleHUD();
    await this.battleText('DEV · Lotta saltata.');
    await this.handleBattleVictory();
  },

  devUnlimitedRadar() {
    if (!this.devMode) return false;
    this.radarCharges = Infinity; this.renderSidebar(); this.logMsg('Radar illimitato (DEV).');
    return true;
  },

  async useDevCandy(pokemon, id) {
    if (!this.devMode || !['rareCandy', 'goldCandy'].includes(id) || this.devUpgradeInProgress || this.isBattleVisible() || this.isLocked ||
      this.battleBusy || this.dialogueResolve || !this.team.includes(pokemon) || !this.items[id]) return false;
    if (pokemon.level >= 100) { this.showItemFeedback(`${pokemon.name} è già al livello 100!`); return false; }
    const previous = pokemon.level;
    const target = Math.min(100, previous + (id === 'goldCandy' ? 20 : 1));
    let needed = -Math.max(0, pokemon.exp);
    for (let level = previous; level < target; level++) needed += experienceForNextLevel(pokemon.growthRate, level);
    this.devUpgradeInProgress = true; this.isLocked = true;
    try {
      const events = await pokemon.gainExperience(Math.max(0, needed), 100, options => this.chooseEvolution(pokemon, options));
      this.items[id]--;
      this.renderSidebar();
      this.logMsg(`${id === 'goldCandy' ? 'Caramella d’Oro' : 'Caramella Rara'}: ${pokemon.name} passa dal Lv.${previous} al Lv.${pokemon.level}!`);
      for (const event of events) {
        if (event.evolution) { Dex.record(pokemon, 'caught', `Evoluzione · Piano ${this.floor}`); await this.showEvolution(pokemon, event.evolution); }
        for (const move of event.moves) await this.learnMove(move, pokemon);
      }
      return true;
    } finally {
      this.devUpgradeInProgress = false; this.isLocked = false;
      this.renderSidebar();
    }
  },
};

return {devAccessAvailable,hashDevCode,devMethods};
})();
const __m23 = (() => {
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

function learn(moveType, defenderTypes) {
  const set = load(), key = keyOf(moveType, defenderTypes);
  if (set.has(key)) return false;
  set.add(key);
  try { localStorage.setItem(KEY, JSON.stringify([...set].slice(-MAX))); } catch { /* memoria non disponibile */ }
  return true;
}
const knows = (moveType, defenderTypes) => load().has(keyOf(moveType, defenderTypes));

/** Etichetta breve per un moltiplicatore di efficacia (vuota per ×1). */
function effectLabel(multiplier) {
  if (multiplier === 0) return '×0';
  if (multiplier >= 4) return '×4';
  if (multiplier >= 2) return '×2';
  if (multiplier <= 0.25) return '×¼';
  if (multiplier < 1) return '×½';
  return '';
}

return {learn,knows,effectLabel};
})();
const __m24 = (() => {
const Abilities = __m5;
const { FORCED_RECHARGE_ACTION, GAME_BALANCE, evolvedEncounterId, leaderSpriteUrl, randomKantoSpecies, scaledBattleExperience } = __m3;
const { pokemonSprite, speciesData, speciesName } = __m0;
const { Pokemon, createMove } = __m6;
const { typeEffectiveness } = __m4;
const Objectives = __m9;
const Dex = __m8;
const Matchups = __m23;
const { genderMark } = __m15;
// Flusso della lotta: avvio, turni, cambi, esperienza, vittoria, sconfitta e game over.










const flowMethods = {
  async prepareBattleImage(element){
    if(!element)return false;
    try{
      // decode() resolves only after a real, drawable image has been decoded.
      if(element.decode){await element.decode();return true;}
      if(element.complete&&element.naturalWidth>0)return true;
      await new Promise((resolve,reject)=>{
        element.addEventListener('load',resolve,{once:true});
        element.addEventListener('error',reject,{once:true});
      });
      return true;
    }catch(err){
      // Do not show the literal HTML alt text on failed remote sprite loads.
      element.alt='';
      element.src='assets/sprites/ui/pokemon-placeholder.svg';
      try{await element.decode?.();}catch(_){}
      return false;
    }
  },

  // Preload the actually selected visual assets while the previous map is still on
  // screen. This uses CSS-computed URLs, so gym palettes and future themes do
  // not require a duplicate lookup table in the battle engine.
  async prepareBattleStageImages(stage){
    if(typeof getComputedStyle!=='function' || typeof Image==='undefined')return true;
    const elements=[stage,stage.querySelector('.enemy-platform-gba'),stage.querySelector('.player-platform-gba'),this.$id('player-trainer-sprite')].filter(Boolean);
    const sources=new Set();
    const urlPattern=/url\(\s*(?:"([^"]+)"|'([^']+)'|([^\s)]+))\s*\)/g;
    for(const element of elements){
      const background=getComputedStyle(element).backgroundImage||'';
      for(const result of background.matchAll(urlPattern)){
        const url=result[1]||result[2]||result[3];if(url)sources.add(url);
      }
    }
    // TASK-010: both protagonists use five local throwing frames.
    // Decode them before battle reveal to prevent flicker during the pose swap.
    const trainerFolder=this.playerGender==='champion'?'champion':this.playerGender==='female'?'girl':'red';
    for(let frame=0;frame<5;frame++)sources.add(`assets/sprites/player/${trainerFolder}/throw/${frame}.png`);
    // Retain Image references until decoding completes so browsers cannot
    // garbage-collect orphaned requests while the battle stays hidden.
    const pendingImages=[];
    const loaded=await Promise.all([...sources].map(src=>new Promise(resolve=>{
      const image=new Image();pendingImages.push(image);let settled=false;
      const finish=ok=>{if(settled)return;settled=true;clearTimeout(timer);resolve(ok);};
      const timer=setTimeout(()=>finish(false),8000);
      image.onload=()=>{
        if(typeof image.decode==='function')image.decode().then(()=>finish(true),()=>finish(false));
        else finish(true);
      };
      image.onerror=()=>finish(false);
      image.src=src;
      if(image.complete&&image.naturalWidth>0)image.onload();
    })));
    pendingImages.length=0;
    if(loaded.some(ok=>!ok))console.warn('Alcune risorse di battaglia non sono disponibili; uso i fallback del browser.');
    return loaded.every(Boolean);
  },

  // The map remains visible during preparation. Once the selected scene is
  // decoded, a single short fade reveals the stage and its interface together.
  revealPreparedBattle(token){
    const overlay=this.$id('overlay-battle');
    overlay.classList.add('battle-revealing');
    overlay.classList.remove('battle-preparing');
    if(this.battleRevealTimer)clearTimeout(this.battleRevealTimer);
    this.battleRevealTimer=setTimeout(()=>{
      if(token===this.battleToken)overlay.classList.remove('battle-revealing');
      this.battleRevealTimer=null;
    },400);
  },

  // Tema della piattaforma e dello sfondo in base al luogo e al tipo di incontro.
  battlePlatformTheme(type){
    if(type==='mewtwo')return 'celestial';
    if(this.isRaidActive || type==='legendary')return 'raid';
    if(type==='gym')return 'arena';
    if(this.floor%10===0)return 'town';
    if(this.floor%5===0)return 'sand';
    if(this.floor%4===0)return 'cave';
    if(this.floor%3===0)return 'woodland';
    return 'meadow';
  },

  /** Transizione verso la lotta dopo la schermata "LOTTA!". */
  beginEncounter(type) {
    for (const id of ['trainer-encounter-overlay', 'wild-encounter-overlay']) this.$id(id)?.classList.add('hidden');
    const screen = this.$id('pokenav-screen-root');
    screen.classList.add('battle-transition-flash');
    setTimeout(() => {
      screen.classList.remove('battle-transition-flash');
      if (type !== 'legendary') { this.startBattle(type); return; }
      screen.classList.add('legendary-encounter-transition');
      setTimeout(() => { screen.classList.remove('legendary-encounter-transition'); this.startBattle(type); }, this.gameDelay(1200));
    }, this.gameDelay(600));
  },

  /** Specie e livello dell'avversario per il tipo di incontro. */
  chooseOpponent(type, leader) {
    if (type === 'mewtwo') return { id: 150, level: 50 };
    if (type === 'legendary') {
      const id = this.pendingLegendaryId || [144, 145, 146][Math.floor(Math.random() * 3)];
      this.pendingLegendaryId = null;
      return { id, level: 30 };
    }
    if (leader) return { id: this.currentGym.pokemon[this.gymLeaderIndex], level: this.currentGym.levels[this.gymLeaderIndex] };
    const level = this.encounterLevel(type, false);
    const pool = this.getEncounterPool(type);
    const seed = pool?.length ? pool[Math.floor(Math.random() * pool.length)] : randomKantoSpecies(level, this.floor);
    return { id: evolvedEncounterId(seed, level), level };
  },

  trainerFolder() { return this.playerGender === 'champion' ? 'champion' : this.playerGender === 'female' ? 'girl' : 'red'; },

  async startBattle(type, keepPlayerOnField = false) {
    this.closePartyActions(); this.closePokemonInfo();
    this.ensureActivePokemon();
    const continuousRound = keepPlayerOnField && this.isBattleVisible();
    this.battleType = type; this.isLocked = true; this.battleBusy = true;
    if (!continuousRound) this.battleWeather = null;
    this.battleParticipants = new Set();
    this.lastPersistedFaint = null;
    this.battleMode = null; this.pendingForcedSwitch = false;
    const token = ++this.battleToken;
    if (!this.activeMon) {
      this.resolveTeamDefeat(); return;
    }
    const overlay = this.$id('overlay-battle');
    if (this.battleRevealTimer) clearTimeout(this.battleRevealTimer);
    overlay.classList.remove('battle-revealing');
    if (!continuousRound) overlay.classList.add('battle-preparing');
    overlay.classList.remove('hidden');
    this.$id('battle-controls').classList.remove('hidden');
    this.$id('rotom-body').classList.add('battle-active');
    this.hideAllActions(); this.openWings();
    const leader = type === 'gym' && this.gymQueue[0] === 'leader' && this.currentGym;
    if (!continuousRound || (leader && this.gymLeaderIndex === 0))
      this.music?.setScene(type === 'mewtwo' ? 'mewtwo' : leader ? 'gym' : type === 'legendary' ? 'legend_trio' : 'encounter');
    const opponent = this.chooseOpponent(type, leader);
    this.enemyMon = new Pokemon(speciesData(opponent.id), opponent.level);
    Dex.record(this.enemyMon, 'seen', `${type} · Piano ${this.floor}`);
    if (type === 'trainer') this.pendingTrainerCell = null;
    if (!keepPlayerOnField) this.triggerEntryAbilities(this.activeMon, this.enemyMon);
    this.triggerEntryAbilities(this.enemyMon, this.activeMon);
    this.battleParticipants.add(this.activeMon);
    this.$id('enemy-name').textContent = this.enemyMon.name + genderMark(this.enemyMon);
    this.$id('enemy-lv').textContent = this.enemyMon.level;
    const enemySprite = this.$id('enemy-sprite');
    enemySprite.src = this.enemyMon.spriteFront;
    enemySprite.classList.remove('faint-anim', 'summon-anim', 'recall-anim');
    enemySprite.classList.add('hidden');
    const trainerBack = this.$id('player-trainer-sprite');
    trainerBack.setAttribute('aria-label', this.playerGender === 'female' ? 'Allenatrice, vista di spalle' : 'Allenatore, visto di spalle');
    trainerBack.style.backgroundImage = `url('assets/sprites/player/${this.trainerFolder()}/throw/0.png')`;
    trainerBack.classList.toggle('female-trainer', this.playerGender === 'female');
    trainerBack.classList.add('hidden');
    const enemyTrainer = this.$id('enemy-trainer-sprite');
    enemyTrainer.className = 'poke-sprite-gba enemy-trainer-frame hidden';
    enemyTrainer.removeAttribute('style');
    if (!keepPlayerOnField) this.$id('player-sprite').classList.add('hidden');
    const hostile = ['gym', 'trainer'].includes(type);
    const stage = this.$id('battle-stage');
    stage.classList.toggle('wild-battle', !hostile);
    stage.classList.toggle('trainer-battle', hostile);
    stage.dataset.platformTheme = this.battlePlatformTheme(type);
    const palette = type === 'gym' ? this.currentGym?.palette : null;
    if (palette) stage.dataset.gymPalette = palette; else delete stage.dataset.gymPalette;
    this.resetBattleVisuals(keepPlayerOnField);
    this.updateBattleHUD();
    // La scena resta coperta finché sprite e sfondo non sono pronti.
    await Promise.all([this.prepareBattleImage(enemySprite), this.prepareBattleImage(this.$id('player-sprite')), this.prepareBattleStageImages(stage)]);
    if (token !== this.battleToken) return;
    if (!continuousRound) this.revealPreparedBattle(token);
    await this.battleText(hostile ? (leader ? `Il Capopalestra ${this.currentGym.name} ti sfida!` : 'Un allenatore ti sfida!')
      : type === 'mewtwo' ? 'Appare Mewtwo.' : this.isRaidActive ? `RAID ${6 - this.raidQueueCount}/5 · Una presenza misteriosa!`
        : type === 'legendary' ? 'UN POKÉMON LEGGENDARIO APPARE!' : 'Un Pokémon selvatico appare!');
    if (token !== this.battleToken) return;
    if (hostile) {
      this.setTrainerPortrait(enemyTrainer, leader ? leaderSpriteUrl(this.currentGym) : this.currentTrainerSprite);
      enemyTrainer.classList.remove('hidden');
      enemyTrainer.classList.add('trainer-enter');
      await this.wait(590);
      if (token !== this.battleToken) return;
      await this.battleText(leader ? `${this.currentGym.name} sceglie ${this.enemyMon.name}!` : 'L’allenatore avversario prepara la Poké Ball!');
      await this.animateBall('enemy');
      if (token !== this.battleToken) return;
      enemyTrainer.classList.add('hidden'); enemyTrainer.classList.remove('trainer-enter');
      await this.summonPokemon('enemy');
    } else {
      const wildFx = this.$id('wild-appear-fx');
      wildFx.classList.add('active');
      await this.summonPokemon('enemy', true);
      wildFx.classList.remove('active');
    }
    if (token !== this.battleToken) return;
    await this.battleText(`${this.enemyMon.name} è pronto a combattere!`);
    if (token !== this.battleToken) return;
    if (!keepPlayerOnField) {
      trainerBack.style.backgroundImage = `url('assets/sprites/player/${this.trainerFolder()}/throw/0.png')`;
      trainerBack.classList.remove('hidden');
      await this.battleText(`Vai ${this.activeMon.name}!`);
      if (token !== this.battleToken) return;
      await this.animateBall('player');
      if (token !== this.battleToken) return;
      trainerBack.classList.add('hidden');
      await this.summonPokemon('player');
    } else {
      // Tra un turno e l'altro di raid e palestre il Pokémon resta in campo.
      trainerBack.classList.add('hidden');
      this.$id('player-sprite').classList.remove('hidden');
    }
    if (token !== this.battleToken) return;
    this.battleBusy = false; this.showMainActions();
  },

  tryRunAway() {
    if (this.battleConfirmAction) return;
    if (this.isRaidActive || ['gym', 'trainer', 'mewtwo'].includes(this.battleType)) { this.setBattleMsg('Non puoi fuggire da questa sfida!'); return; }
    if (this.battleBusy || this.pendingForcedSwitch || this.hasForcedBattleAction()) return;
    if ((this.activeMon?.trappedTurns > 0 || this.isOpponentTrapping(this.activeMon)) && this.activeMon.ability !== 'run-away') {
      this.setBattleMsg(`${this.activeMon.name} non può fuggire: è intrappolato!`); return;
    }
    this.endBattle('Sei fuggito dalla lotta!');
  },

  /** Fine della run: nessun Pokémon in grado di lottare. La run viene chiusa anche nel cloud. */
  showGameOver() {
    this.setMobileSheet(null);
    this.isRaidActive = false; this.raidQueueCount = 0; this.clearRaidTransientState();
    this.battleToken++;
    this.acknowledgeDialogue();
    for (const id of ['overlay-battle', 'battle-controls', 'battle-confirm']) this.$id(id)?.classList.add('hidden');
    this.$id('rotom-body').classList.remove('battle-active');
    this.activeMon = null; this.battleBusy = false; this.isLocked = true;
    this.renderSidebar();
    this.endRun('defeat');
    this.renderRunRecap(this.$id('gameover-recap'));
    this.$id('gameover-overlay').classList.remove('hidden');
    this.$id('btn-return-main-menu')?.focus();
  },

  async chooseEvolution(pokemon,options){
    if(!Array.isArray(options)||options.length<2)return options?.[0]?.id??null;
    const overlay=this.$id('evolution-choice-overlay');
    if(overlay && overlay.parentElement!==this.$id('pokenav-screen-root'))this.$id('pokenav-screen-root').appendChild(overlay);
    const list=this.$id('evolution-choice-options');
    const title=this.$id('evolution-choice-title');
    if(!overlay||!list)return null;
    title.textContent=`SCEGLI L’EVOLUZIONE DI ${pokemon.name}`;
    list.replaceChildren();
    return await new Promise(resolve=>{
      const finish=value=>{overlay.classList.add('hidden');list.replaceChildren();resolve(value);};
      for(const option of options){
        const button=document.createElement('button');button.type='button';
        const image=document.createElement('img');image.src=pokemonSprite(option.id);image.alt='';
        const caption=document.createElement('span');caption.textContent=`${speciesName(option.id).toUpperCase()} · Lv.${option.level}`;
        button.append(image,caption);button.onclick=()=>finish(option.id);list.appendChild(button);
      }
      this.$id('evolution-choice-later').onclick=()=>finish(null);
      overlay.classList.remove('hidden');
      list.querySelector('button')?.focus();
    });
  },

  evolutionText(phase,evo){
    if(!evo)return '';
    return phase==='done'?`${evo.from} si è evoluto in ${evo.to}!`:`${evo.from} si sta evolvendo…`;
  },

  async showEvolution(mon, evo){
    const panel=this.$id('evolution-overlay');
    if(panel && panel.parentElement!==this.$id('pokenav-screen-root'))this.$id('pokenav-screen-root').appendChild(panel);
    this.evolutionMon=mon;this.evolutionData=evo;
    this.$id('evolution-from').src=evo.fromSprite;
    this.$id('evolution-to').src=evo.toSprite;
    this.$id('evolution-caption').textContent=this.evolutionText('start',evo);
    this.$id('evolution-from').classList.remove('hidden');
    this.$id('evolution-to').classList.add('hidden');
    this.$id('evolution-start').classList.remove('hidden');
    this.$id('evolution-finish').classList.add('hidden');
    panel.classList.remove('hidden');
    this.updateBattleHUD();this.renderSidebar();
    await new Promise(resolve=>{this.evolutionResolve=resolve;});
  },

  startEvolutionAnimation(){
    this.$id('evolution-start').classList.add('hidden');
    this.$id('evolution-from').classList.add('evo-transform');
    this.$id('evolution-to').classList.remove('hidden');
    this.$id('evolution-to').classList.add('evo-reveal');
    this.$id('evolution-caption').textContent=this.evolutionText('start',this.evolutionData);
    setTimeout(()=>{
      this.$id('evolution-from').classList.add('hidden');
      this.$id('evolution-from').classList.remove('evo-transform');
      this.$id('evolution-caption').textContent=this.evolutionText('done',this.evolutionData);
      this.$id('evolution-finish').classList.remove('hidden');
      this.renderSidebar();this.updateBattleHUD();
    },1700);
  },

  finishEvolution(){
    this.$id('evolution-overlay').classList.add('hidden');
    this.$id('evolution-to').classList.remove('evo-reveal');
    const resolve=this.evolutionResolve;this.evolutionResolve=null;
    if(resolve)resolve();
  },

  selectBattlePokemon(pokemon){
    if(this.battleConfirmAction || (!this.pendingForcedSwitch&&this.hasForcedBattleAction()))return;
    if(!this.$id('overlay-battle') || this.$id('overlay-battle').classList.contains('hidden'))return;
    if(this.battleBusy || this.dialogueResolve)return;
    if(!this.pendingForcedSwitch && (this.activeMon?.trappedTurns>0 || this.activeMon?.meanLookSource || this.isOpponentTrapping(this.activeMon))){this.setBattleMsg(`${this.activeMon.name} non può essere sostituito: è intrappolato!`);return;}
    if(pokemon===this.activeMon){this.setBattleMsg('Questo Pokémon è già in campo!');return;}
    if(pokemon.currentHp<=0){this.setBattleMsg('Un Pokémon esausto non può combattere!');return;}
    this.askBattleConfirmation(this.pendingForcedSwitch?`Hai scelto ${pokemon.name}, confermi la scelta?`:`Richiamare ${this.activeMon.name} e mandare ${pokemon.name} (Lv.${pokemon.level})?`,()=>this.performSwitch(pokemon),true);
  },

  async performSwitch(next){
    if(next.currentHp<=0||!this.team.includes(next))return;
    const forced=this.pendingForcedSwitch;
    const fromTeleport=this.teleportSwitchPending;
    this.teleportSwitchPending=false;
    this.pendingForcedSwitch=false;
    this.battleBusy=true;this.hideAllActions();
    if(!forced&&!fromTeleport){await this.battleText(`${this.activeMon.name}, torna nella Poké Ball!`);await this.animateRecall('player');}
    if(this.enemyMon?.meanLookSource===this.activeMon)this.enemyMon.meanLookSource=null;
    if(this.enemyMon?.trapSource===this.activeMon){this.enemyMon.trappedTurns=0;this.enemyMon.trapSource=null;this.enemyMon.trapMove=null;}
    this.activeMon.clearVolatile();
    if(this.activeMon.ability==='natural-cure'){this.activeMon.status=null;this.activeMon.statusTurns=0;}
    // A mid-battle switch also updates the party's lead position.
    const nextIndex=this.team.indexOf(next);
    if(nextIndex>0){this.team.splice(nextIndex,1);this.team.unshift(next);}
    this.activeMon=next;this.battleParticipants.add(next);next.clearVolatile();
    this.triggerEntryAbilities(next,this.enemyMon);
    this.updateBattleHUD();
    await this.battleText(`Vai ${next.name}!`);
    await this.animateBall('player');
    await this.summonPokemon('player');
    this.updateBattleHUD();
    if(forced){this.battleBusy=false;this.showMainActions();}
    else {await this.enemyTurn();}
  },

  async executeAttack(move,forced=false){
    if(this.battleBusy||this.pendingForcedSwitch||(!forced&&move.currentPp<=0))return;
    // Ignore manually selected moves when a previous turn is still resolving.
    if(!forced&&(this.activeMon?.pendingCharge||this.activeMon?.rechargeTurns>0||this.activeMon?.rampageTurns>0||this.activeMon?.rolloutTurns>0))return;
    if(move.category!=='status'&&move.power>0&&this.enemyMon)Matchups.learn(move.type,this.enemyMon.types);
    if(move.id==='teleport'&&!forced){
      move.currentPp=Math.max(0,move.currentPp-1);
      if(this.battleType==='wild' && !this.isRaidActive){this.endBattle(`${this.activeMon.name} usa Teletrasporto e fugge!`);return;}
      if(this.team.filter(p=>p.currentHp>0 && p!==this.activeMon).length===0){
        this.setBattleMsg('Teletrasporto fallisce: non hai altri Pokémon disponibili.');this.showMainActions();return;
      }
      this.teleportSwitchPending=true;
      this.setBattleMsg(`${this.activeMon.name} usa Teletrasporto! Scegli chi mandare in campo.`);
      this.showTeamMenu();return;
    }
    this.battleBusy=true;this.hideAllActions();
    this.beginBattleTurn();
    const enemyMove=this.pickEnemyMove();
    const enemyFirst=(enemyMove.priority>move.priority)||
      (enemyMove.priority===move.priority && this.battleSpeed(this.enemyMon)>this.battleSpeed(this.activeMon));
    if(enemyFirst){const enemyResult=await this.applyMove(this.enemyMon,this.activeMon,enemyMove,'player');
      if(enemyResult==='battle-ended')return;
      if(this.activeMon.currentHp<=0){await this.resolveBattleFaints();return;}}
    if(this.enemyMon.currentHp>0){await this.applyMove(this.activeMon,this.enemyMon,move,'enemy');}
    // Both Pokémon may faint in the same hit (Destiny Bond / recoil).
    if(this.activeMon.currentHp<=0){await this.resolveBattleFaints();return;}
    if(this.enemyMon.currentHp<=0){await this.handleBattleVictory();return;}
    if(!enemyFirst){await this.enemyTurn(true);return;}
    await this.applyEndOfTurnEffects();
    if(this.activeMon.currentHp<=0){await this.resolveBattleFaints();return;}
    if(this.enemyMon.currentHp<=0){await this.handleBattleVictory();return;}
    this.battleBusy=false;this.showMainActions();
  },

  async resolveBattleFaints(){
    if(this.activeMon?.currentHp>0)return false;
    if(this.enemyMon?.currentHp>0){await this.onPlayerFainted();return true;}
    // Risolvi prima il KO del giocatore, anche quando l'avversario cade nello stesso turno.
    await this.resolveFallenPokemon(this.activeMon);
    this.ensureActivePokemon();
    if(!this.activeMon){this.resolveTeamDefeat();return true;}
    await this.handleBattleVictory();
    this.renderSidebar();
    return true;
  },

  beginBattleTurn(){
    if(this.activeMon){this.activeMon.protectedThisTurn=false;this.activeMon.flinchedThisTurn=false;}
    if(this.enemyMon){this.enemyMon.protectedThisTurn=false;this.enemyMon.flinchedThisTurn=false;}
  },

  pickEnemyMove(){
    if(this.enemyMon?.rechargeTurns>0)return FORCED_RECHARGE_ACTION;
    if(this.enemyMon?.pendingCharge)return this.enemyMon.pendingCharge.move;
    if(this.enemyMon?.rampageTurns>0)return this.enemyMon.rampageMove;
    if(this.enemyMon?.rolloutTurns>0)return this.enemyMon.rolloutMove;
    const available=this.enemyMon.moves.filter(m=>m.currentPp>0);
    if(!available.length)return createMove('struggle');
    const offensive=available.filter(m=>m.power>0);
    if(offensive.length && Math.random()<.85){
      return offensive.sort((a,b)=>(b.power*typeEffectiveness(b.type,this.activeMon.types))-(a.power*typeEffectiveness(a.type,this.activeMon.types)))[0];
    }
    return available[Math.floor(Math.random()*available.length)];
  },

  async enemyTurn(sameTurn=false){
    if(!sameTurn)this.beginBattleTurn();
    if(!this.enemyMon||this.enemyMon.currentHp<=0)return;
    this.battleBusy=true;
    const move=this.pickEnemyMove();
    const enemyResult=await this.applyMove(this.enemyMon,this.activeMon,move,'player');
    if(enemyResult==='battle-ended')return;
    if(this.activeMon.currentHp<=0){await this.resolveBattleFaints();return;}
    if(this.enemyMon.currentHp<=0){await this.handleBattleVictory();return;}
    await this.applyEndOfTurnEffects();
    if(this.activeMon.currentHp<=0){await this.resolveBattleFaints();return;}
    if(this.enemyMon.currentHp<=0){await this.handleBattleVictory();return;}
    this.battleBusy=false;this.showMainActions();
  },

  async onPlayerFainted(){
    const lost=this.activeMon;
    this.updateBattleHUD();this.$id('player-sprite').classList.add('faint-anim');
    await this.resolveFallenPokemon(lost);
    this.$id('player-sprite').classList.remove('faint-anim');
    this.renderSidebar();
    if(!this.team.some(p=>p.currentHp>0)){this.resolveTeamDefeat();return;}
    this.battleBusy=false;this.showTeamMenu(true);
  },

  async resolveFallenPokemon(lost){
    const normal=this.runMode==='normal';
    this.runStats.fallen.push({name:lost.name,id:lost.id,level:lost.level,floor:this.floor,by:this.enemyMon?.name||'',lost:!normal});
    lost.treatedFaint=false;
    if(!normal){
      this.team=this.team.filter(p=>p!==lost);
      this.battleParticipants.delete(lost);
    }
    // Persisti il KO prima del dialogo: chiudere la pagina non lo annulla.
    this.lastPersistedFaint=lost;
    if(!this.isCelestialCave){
      if(this.team.length) this.commitBattleState();
      else {this.showGameOver();return;}
    }
    await this.battleText(normal ? `${lost.name} è esausto. Potrai curarlo al Centro Pokémon.`
      : `${lost.name} è esausto e lascia definitivamente la squadra!`);
  },

  resolveTeamDefeat(){
    if(this.isCelestialCave){this.finishCelestialExpeditionDefeat();return;}
    if(this.runMode!=='normal'||!this.team.length){
      if(this.$id('gameover-overlay')?.classList.contains('hidden')) this.showGameOver();
      return;
    }
    // Joy interviene anche prima del primo villaggio: nessun salto di piano.
    this.isRaidActive=false;this.raidQueueCount=0;this.clearRaidTransientState();
    this.gymQueue=[];this.currentGym=null;this.gymChallengePending=false;
    this.endBattle('Squadra esausta: interviene l’Infermiera Joy.');
    this.openPokemonCenterDialog({emergency:true});
  },

  async awardBattleExperience(mon, amount) {
    if(!this.team.includes(mon) || mon.currentHp<=0)return;
    const levelCap=this.getLevelCap();
    if(mon.level>=levelCap){
      await this.battleText(`${mon.name} ha già raggiunto il limite di livello ${levelCap}!`);
      this.updateBattleHUD();
      return;
    }
    const levelEvents=await mon.gainExperience(amount,levelCap,options=>this.chooseEvolution(mon,options));
    await this.battleText(`${mon.name} riceve ${amount} punti esperienza!`);
    this.renderSidebar();this.updateBattleHUD();
    for(const event of levelEvents){
      await this.battleText(`${mon.name} raggiunge il livello ${event.level}!`);
      if(event.evolution){Dex.record(mon,'caught',`Evoluzione · Piano ${this.floor}`);await this.showEvolution(mon,event.evolution);}
      for(const move of event.moves)await this.learnMove(move,mon);
    }
    this.renderSidebar();this.updateBattleHUD();
  },

  async handleBattleVictory(){
    // Multiple async click/turn completions must never consume two Raid slots.
    const raidToken=this.isRaidActive?this.battleToken:null;
    if(raidToken!==null){
      if(this.raidVictoryResolutionToken===raidToken)return;
      this.raidVictoryResolutionToken=raidToken;
    }
    const defeated=this.enemyMon;
    this.runStats.wins++;
    this.$id('enemy-sprite').classList.add('faint-anim');
    await this.battleText(`${defeated.name} è esausto!`);
    const expMultiplier=(this.battleType==='gym'?GAME_BALANCE.expGymMultiplier:
      this.battleType==='trainer'?GAME_BALANCE.expTrainerMultiplier:1)*(this.floorKind==='trainers'?1.25:1);
    const eligible=[...this.battleParticipants].filter(p=>this.team.includes(p)&&p.currentHp>0);
    // Participants earn the usual award. With EXP Share (after badge 2),
    // each healthy nonparticipant additionally receives half a scaled award.
    if(this.runMode==='normal'){
      if(eligible.some(p=>p.treatedFaint)) Objectives.recordMilestone('second_chance',this.runId,this.floor,this.runMode);
      if(!this.isCelestialCave && this.getTeamSlotLimit()>1 && this.team.length===this.getTeamSlotLimit())
        Objectives.recordMilestone('full_team',this.runId,this.floor,this.runMode);
    }
    const shared=this.hasExpShare()&&this.expShareEnabled
      ?this.team.filter(mon=>mon.currentHp>0&&!eligible.includes(mon)):[];
    for(const mon of [...eligible,...shared]){
      mon.gainEffortValues(defeated.evYield);
      const earned=scaledBattleExperience(defeated.baseExperience,defeated.level,mon.level,expMultiplier);
      const reward=shared.includes(mon)?Math.max(1,Math.round(earned*.5)):
        mon===this.activeMon?earned:Math.max(1,Math.round(earned*.55));
      await this.awardBattleExperience(mon,reward);
    }
    // Raccolta: once per defeated enemy, each surviving team member with Pickup
    // has an independent 10% chance to find a simple item, subject to bag limits.
    for(const collector of this.team){
      if(collector.currentHp<=0||collector.ability!=='pickup'||Math.random()>=.10)continue;
      const loot=['pokeball','potion','elixir'][Math.floor(Math.random()*3)];
      if(this.grantItem(loot))await this.battleText(`${collector.name} trova un oggetto grazie a Raccolta!`);
    }
    const knockoutMsg=Abilities.afterKnockout(this.activeMon);
    if(knockoutMsg)await this.battleText(knockoutMsg);
    if(this.battleType==='mewtwo'){
      if(this.celestialPhase==='trial'){
        this.celestialPhase='rematch';this.endBattle('Hai sconfitto Mewtwo!');
        this.isLocked=true;
        setTimeout(()=>{if(this.isCelestialCave&&this.celestialPhase==='rematch')this.showOakMasterBallReward();},this.gameDelay(550));
      }else{
        this.completeMewtwoEncounter(false);
        this.endBattle('Mewtwo è stato sconfitto una seconda volta. Scompare nelle profondità della grotta!');
        this.showDiscoveryNotice('MEWTWO È SCOMPARSO · SPEDIZIONE CONCLUSA',3500);
        setTimeout(()=>{if(this.isCelestialCave&&this.celestialPhase==='complete')this.leaveCelestialCave();},this.gameDelay(650));
      }
      return;
    }
    if(this.battleType==='gym'&&this.gymQueue.length>0){
      await this.advanceGymAfterVictory();return;
    }
    if(this.isRaidActive){
      if(this.battleToken!==raidToken)return; // Run or battle changed while awaiting XP.
      this.raidQueueCount--;
      if(this.raidQueueCount>0){
        await this.battleText(`RAID · Restano ${this.raidQueueCount} avversari!`);
        await this.startBattle('wild',true);return;
      }
      this.isRaidActive=false;this.clearRaidTransientState();
      this.endBattle('RAID SUPERATO! Hai vinto tutte e cinque le sfide!');return;
    }
    if(['trainer','gym'].includes(this.battleType)){
      // Nella zona allenatori le ricompense valgono il 50% in più.
      const zone=this.floorKind==='trainers'&&this.battleType==='trainer'?1.5:1;
      const reward=Math.max(100,Math.round(zone*(defeated.level*18+(this.battleType==='gym'?180:0))/10)*10);
      this.runStats.trainers++;
      this.money+=reward;this.endBattle(`Vittoria contro ${defeated.name}! +${reward} Pokécoins.`);
    } else this.endBattle(`Vittoria contro ${defeated.name}!`);
  },

  async learnMove(move, pokemon=this.activeMon){
    if(pokemon.moves.some(m=>m.id===move.id))return;
    if(pokemon.moves.length<4){pokemon.moves.push(move);await this.battleText(`${pokemon.name} impara ${move.name}!`);return;}
    return new Promise(resolve=>{
      this.moveChoiceResolve=resolve;this.pendingMove=move;this.learningMon=pokemon;
      this.$id('learn-move-overlay').classList.remove('hidden');
      this.$id('learn-move-text').textContent=`${pokemon.name} vuole imparare ${move.name}. Quale mossa deve dimenticare?`;
      const list=this.$id('forget-moves-list');list.innerHTML='';
      pokemon.moves.forEach((old,i)=>{
        const b=document.createElement('button');b.className='act-btn';b.textContent=`${old.name} → ${move.name}`;
        b.onclick=()=>this.resolveMoveChoice(i);list.appendChild(b);
      });
    });
  },

  resolveMoveChoice(index){
    if(this.moveChoiceResolve){
      if(index!==null && this.pendingMove){this.learningMon.moves[index]=this.pendingMove;this.setBattleMsg(`${this.learningMon.name} impara ${this.pendingMove.name}!`);}
      this.$id('learn-move-overlay').classList.add('hidden');
      const resolve=this.moveChoiceResolve;this.moveChoiceResolve=null;this.pendingMove=null;resolve();
    }else this.$id('learn-move-overlay').classList.add('hidden');
  },

  endBattle(msg){
    this.acknowledgeDialogue();
    this.setMobileSheet(null);
    this.devSkipPending=false;this.devSkipChain=false;this.fastBattleText=false;
    this.battleToken++;this.battleBusy=false;this.pendingForcedSwitch=false;this.battleMode=null;
    this.updateBattleWingCloseButtons();
    this.pendingItemTarget=null;this.$id('item-target-prompt').classList.add('hidden');
    this.battleWeather=null;
    this.team.forEach(p=>{p.clearBattleConditions();p.protectedThisTurn=false;p.protectStreak=0;});
    this.closePartyActions();this.closePokemonInfo();
    this.ensureActivePokemon();
    this.enemyMon?.clearBattleConditions();
    this.$id('overlay-battle').classList.add('hidden');
    this.$id('overlay-battle').classList.remove('battle-preparing','battle-revealing');
    if(this.battleRevealTimer){clearTimeout(this.battleRevealTimer);this.battleRevealTimer=null;}
    this.$id('battle-controls').classList.add('hidden');
    this.$id('rotom-body').classList.remove('battle-active');
    this.$id('battle-confirm').classList.add('hidden');
    this.$id('enemy-sprite').classList.remove('faint-anim','hidden');
    this.$id('player-sprite').classList.remove('faint-anim');
    this.isLocked=false;this.logMsg(msg);this.renderSidebar();
    this.music?.setScene(this.isCelestialCave?'cave':'exploration');
    if(this.isCelestialCave)this.renderDungeon();
    this.saveCheckpoint();
    window.dispatchEvent(new Event('pokex:dex-battle-ended'));
  },
};

return {flowMethods};
})();
const __m25 = (() => {
const Abilities = __m5;
const { CHARGE_MESSAGES, CHARGE_MOVES, CHARGE_UNTOUCHABLE, RAMPAGE_MOVES, RECHARGE_MOVES, ROLLOUT_MOVES, getConfusionDamage, rollMagnitude, rollMultiHitCount } = __m3;
const { calculateBattleDamage, randomMetronomeMove } = __m6;
const { STAT_LABELS_IT, accuracyStageMultiplier, statMultiplier } = __m2;
const { typeBlocksStatus, typeEffectiveness } = __m4;
// Esecuzione delle mosse, effetti di fine turno, abilità d'ingresso e meteo.






const movesMethods = {
  triggerEntryAbilities(mon,opponent){
    const messages=Abilities.entry(mon,opponent,{weather:this.effectiveBattleWeather(),
      setWeather:type=>{this.battleWeather={type,turns:5};},typeEffectiveness});
    if(messages.length)this.setBattleMsg(messages.at(-1));
  },

  statusAbilityBlocks(mon,ailment){
    return Abilities.statusBlocked(mon,ailment,{weather:this.effectiveBattleWeather()});
  },

  abilityAttackImmunity(defender,move,attacker){
    const outcome=Abilities.immunity(attacker,defender,move,
      {weather:this.effectiveBattleWeather(),effectiveness:typeEffectiveness(move.type,defender.types)});
    if(!outcome)return null;
    if(outcome.kind==='heal'){
      const restored=Abilities.restore(defender,outcome.amount);
      return `${defender.name} recupera ${restored} PS grazie a ${defender.abilityName}!`;
    }
    if(outcome.kind==='stage'){
      Abilities.stage(defender,outcome.stat,1);
      return `${defender.name} potenzia le statistiche grazie a ${defender.abilityName}!`;
    }
    if(outcome.kind==='boost')defender[outcome.key]=true;
    return `${defender.name} neutralizza ${move.name} grazie a ${defender.abilityName}!`;
  },

  effectiveBattleWeather(){
    if(['cloud-nine','air-lock'].includes(this.activeMon?.ability) || ['cloud-nine','air-lock'].includes(this.enemyMon?.ability))return null;
    return this.battleWeather;
  },

  isOpponentTrapping(mon){
    const ability=this.enemyMon?.ability;
    if(!mon||!ability||!this.isBattleVisible())return false;
    if(ability==='shadow-tag'&&mon.ability!=='shadow-tag')return true;
    if(ability==='magnet-pull'&&mon.types?.includes('steel'))return true;
    if(ability==='arena-trap'&&!mon.types?.includes('flying')&&mon.ability!=='levitate')return true;
    return false;
  },

  battleSpeed(mon){
    return mon.speed*statMultiplier(mon.statStages?.speed)*(mon.status==='paralysis'&&mon.ability!=='quick-feet'?.5:1)*Abilities.speedMultiplier(mon,{weather:this.effectiveBattleWeather()});
  },

  stopRollout(mon){mon.rolloutTurns=0;mon.rolloutHits=0;mon.rolloutMove=null;},

  // A separate hit runs its own damage, crit, ability and recoil logic. Only
  // the initial accuracy check and one PP payment occur per multihit action.
  async applyMove(attacker,defender,move,target,options={}){
    if(attacker.flinchedThisTurn){attacker.flinchedThisTurn=false;await this.battleText(`${attacker.name} tentenna e non attacca!`);return 'flinch';}
    if(attacker.rechargeTurns>0){
      attacker.rechargeTurns--;
      await this.battleText(`${attacker.name} deve riposare per recuperare le energie!`);
      return 'recharging';
    }
    // The release of a charging attack does not spend PP a second time.
    const releasing=Boolean(attacker.pendingCharge && attacker.pendingCharge.move.id===move.id);
    const sleepMove=['snore','sleep-talk'].includes(move.id);
    if(attacker.status==='sleep' && !options.fromSleepTalk){
      attacker.statusTurns-=attacker.ability==='early-bird'?2:1;
      if(attacker.statusTurns>0 && !sleepMove){attacker.pendingCharge=null;attacker.rampageTurns=0;this.stopRollout(attacker);await this.battleText(`${attacker.name} sta dormendo!`);return;}
      if(attacker.statusTurns<=0){attacker.status=null;attacker.nightmareActive=false;
        await this.battleText(`${attacker.name} si è svegliato!`);}
    }
    if(sleepMove && attacker.status!=='sleep'){
      await this.battleText(`${move.name} fallisce: ${attacker.name} non dorme!`);return 'no-effect';
    }
    if(attacker.status==='freeze' && Math.random()>=.2){attacker.pendingCharge=null;attacker.rampageTurns=0;this.stopRollout(attacker);await this.battleText(`${attacker.name} è congelato!`);return;}
    if(attacker.status==='freeze')attacker.status=null;
    if(attacker.status==='paralysis' && Math.random()<.25){attacker.pendingCharge=null;attacker.rampageTurns=0;this.stopRollout(attacker);await this.battleText(`${attacker.name} è paralizzato!`);return;}
    if(attacker.attractedTo===defender && defender.currentHp>0 && Math.random()<.5){await this.battleText(`${attacker.name} è immobilizzato dall'infatuazione!`);return;}
    if(attacker.confusionTurns>0){
      await this.battleText(`${attacker.name} è confuso!`);
      attacker.confusionTurns--;
      if(Math.random()<.5){
        const selfDamage=getConfusionDamage(attacker);
        attacker.currentHp=Math.max(0,attacker.currentHp-selfDamage);
        attacker.pendingCharge=null;attacker.rampageTurns=0;this.stopRollout(attacker);
        this.updateBattleHUD();await this.battleText(`${attacker.name} si ferisce per la confusione! (${selfDamage} danni)`);
        return 'confusion-self-hit';
      }
      if(attacker.confusionTurns===0)await this.battleText(`${attacker.name} non è più confuso!`);
    }
    if(!options.skipPp && !releasing && !attacker.rampageTurns && !attacker.rolloutTurns)
      move.currentPp=Math.max(0,move.currentPp-(defender.ability==='pressure'?2:1));
    if(releasing)attacker.pendingCharge=null;
    else if(CHARGE_MOVES.has(move.id)){
      attacker.pendingCharge={move};
      // Skull Bash's defence buff applies on the turn it is charged.
      if(move.id==='skull-bash')attacker.statStages.defense=Math.min(6,(attacker.statStages.defense||0)+1);
      if(move.id==='meteor-beam')attacker.statStages['special-attack']=Math.min(6,(attacker.statStages['special-attack']||0)+1);
      if(move.id==='electro-shot')attacker.statStages['special-attack']=Math.min(6,(attacker.statStages['special-attack']||0)+1);
      this.updateBattleHUD();
      await this.battleText(`${attacker.name} ${CHARGE_MESSAGES[move.id]||'si prepara'}!`);
      return 'charging';
    }
    if(RAMPAGE_MOVES.has(move.id) && !attacker.rampageTurns){
      attacker.rampageTurns=2+Math.floor(Math.random()*2);
      attacker.rampageMove=move;
    }
    if(move.id!=='destiny-bond')attacker.destinyBondActive=false;
    if(move.id!=='fury-cutter')attacker.furyCutterHits=0;
    attacker.lastUsedMoveId=move.id;
    this.setBattleMsg(`${attacker.name} usa ${move.name}!`);
    if(move.unsupported){await this.battleText(`${move.name}: dati non disponibili, mossa non eseguibile offline.`);return 'unsupported';}
    if(['sandstorm','rain-dance','sunny-day','hail','snowscape'].includes(move.id)){
      const kind={'sandstorm':'sandstorm','rain-dance':'rain','sunny-day':'sun',hail:'hail',snowscape:'snow'}[move.id];
      if(this.battleWeather?.type===kind){await this.battleText('Queste condizioni meteo sono già attive!');return 'no-effect';}
      this.battleWeather={type:kind,turns:5};
      await this.battleText(`${attacker.name} modifica il tempo con ${move.name}!`);return 'weather';
    }
    if(move.id==='metronome'){
      const chosen=randomMetronomeMove();
      await this.battleText(`${attacker.name} agita il dito: esce ${chosen.name}!`);
      return this.applyMove(attacker,defender,chosen,target,{skipPp:true});
    }
    if((move.selfKo||['self-destruct','explosion'].includes(move.id)) && (attacker.ability==='damp'||defender.ability==='damp')){
      await this.battleText('Umidità impedisce l’esplosione!');return 'no-effect';
    }
    if(move.id==='destiny-bond'){
      attacker.destinyBondActive=true;
      await this.battleText(`${attacker.name} è pronto a trascinare con sé l’avversario!`);
      return 'destiny-bond';
    }
    if(move.id==='curse'){
      if(!attacker.types?.includes('ghost')){
        attacker.statStages.attack=Math.min(6,(attacker.statStages.attack||0)+1);
        attacker.statStages.defense=Math.min(6,(attacker.statStages.defense||0)+1);
        attacker.statStages.speed=Math.max(-6,(attacker.statStages.speed||0)-1);
        await this.battleText(`${attacker.name}: Attacco e Difesa aumentano, Velocità diminuisce!`);
      }else if(defender.ghostCurseActive){
        await this.battleText(`${defender.name} è già colpito da Maledizione!`);return 'no-effect';
      }else if(defender.protectedThisTurn){
        await this.battleText(`${defender.name} blocca Maledizione!`);return 'no-effect';
      }else{
        attacker.currentHp=Math.max(0,attacker.currentHp-Math.max(1,Math.floor(attacker.maxHp/2)));
        defender.ghostCurseActive=true;
        await this.battleText(`${attacker.name} sacrifica PS: una maledizione colpisce ${defender.name}!`);
      }
      this.updateBattleHUD();return 'curse';
    }
    if(move.id==='sleep-talk'){
      const alternatives=attacker.moves.filter(m=>m.id!==move.id && m.id!=='sleep-talk' && m.id!=='metronome' && m.id!=='assist' && m.id!=='mirror-move');
      if(!alternatives.length){await this.battleText('Sonnolalia fallisce: nessuna mossa utilizzabile!');return 'no-effect';}
      const chosen=alternatives[Math.floor(Math.random()*alternatives.length)];
      await this.battleText(`${attacker.name} usa Sonnolalia: ${chosen.name}!`);
      return this.applyMove(attacker,defender,chosen,target,{skipPp:true,fromSleepTalk:true});
    }
    if(move.id==='geomancy'){
      for(const stat of ['special-attack','special-defense','speed'])
        attacker.statStages[stat]=Math.min(6,(attacker.statStages[stat]||0)+2);
      this.updateBattleHUD();
      await this.battleText(`${attacker.name} aumenta Attacco Speciale, Difesa Speciale e Velocità!`);
      return 'powered-up';
    }
    if(move.id==='teleport'){
      if(attacker===this.enemyMon && this.battleType==='wild' && !this.isRaidActive){
        this.endBattle(`${attacker.name} è fuggito usando Teletrasporto!`);return 'battle-ended';
      }
      await this.battleText('Teletrasporto non ha effetto sull’allenatore avversario.');
      return 'no-effect';
    }
    if(move.cureTeam||move.id==='heal-bell'||move.id==='aromatherapy'){
      for(const mon of this.team||[])if(mon){mon.status=null;mon.statusTurns=0;}
      await this.battleText(`${attacker.name} guarisce la squadra dai problemi di stato!`);
      this.updateBattleHUD();return 'cure-team';
    }
    if(move.cureStatus||move.id==='refresh'){
      if(!attacker.status){await this.battleText('Non c’è alcuno stato alterato da curare!');return 'no-effect';}
      attacker.status=null;attacker.statusTurns=0;
      await this.battleText(`${attacker.name} guarisce il proprio stato alterato!`);
      this.updateBattleHUD();return 'cure-status';
    }
    if(move.maxAttackHalfHp||move.id==='belly-drum'){
      if(attacker.currentHp<=Math.floor(attacker.maxHp/2)){
        await this.battleText('Panciamburo fallisce: PS insufficienti!');return 'no-effect';
      }
      attacker.currentHp-=Math.floor(attacker.maxHp/2);attacker.statStages.attack=6;
      await this.battleText(`${attacker.name} sacrifica metà dei suoi PS per massimizzare l’Attacco!`);
      this.updateBattleHUD();return 'belly-drum';
    }
    if(move.disengage||['roar','whirlwind'].includes(move.id)){
      if(['wild','fishing'].includes(this.battleType)&&!this.isRaidActive){
        this.endBattle(`${attacker.name} interrompe lo scontro con ${move.name}!`);return 'battle-ended';
      }
      await this.battleText(`${move.name} non può interrompere questa sfida!`);return 'no-effect';
    }
    if(move.copyStages||move.id==='psych-up'){
      attacker.statStages={...defender.statStages};
      this.updateBattleHUD();
      await this.battleText(`${attacker.name} copia le modifiche alle statistiche di ${defender.name}!`);
      return 'psych-up';
    }
    if(move.screen){
      const key=move.screen==='physical'?'reflectTurns':'lightScreenTurns';
      if(attacker[key]>0){await this.battleText('La barriera è già attiva!');return 'no-effect';}
      attacker[key]=5;
      await this.battleText(move.screen==='physical'?`${attacker.name} alza Riflesso! Danni fisici dimezzati per 5 turni.`:
        `${attacker.name} alza Schermoluce! Danni speciali dimezzati per 5 turni.`);
      this.updateBattleHUD();return 'screen';
    }
    if(move.id==='haze'||move.resetStages){
      attacker.statStages={};defender.statStages={};
      await this.battleText('Nebbia annulla tutte le modifiche alle statistiche!');
      this.updateBattleHUD();return 'haze';
    }
    if(move.focusEnergy || move.id==='focus-energy'){
      attacker.focusEnergyActive=true;
      await this.battleText(`${attacker.name} aumenta le probabilità di brutto colpo!`);
      this.updateBattleHUD();return 'focus-energy';
    }
    if(move.mist||move.safeguard){
      const key=move.mist?'mistTurns':'safeguardTurns';attacker[key]=5;
      await this.battleText(`${attacker.name} è protetto da ${move.name} per 5 turni!`);
      this.updateBattleHUD();return 'field-protection';
    }
    if(move.id==='rest'){
      if(attacker.currentHp>=attacker.maxHp && !attacker.status){await this.battleText('Riposo fallisce: PS già al massimo!');return 'no-effect';}
      attacker.currentHp=attacker.maxHp;attacker.status='sleep';attacker.statusTurns=3;
      await this.battleText(`${attacker.name} recupera tutti i PS e si addormenta!`);
      this.updateBattleHUD();return 'rest';
    }
    if(move.delayedHit||['future-sight','doom-desire'].includes(move.id)){
      if(defender.futureSight){await this.battleText('Una previsione è già in corso!');return 'no-effect';}
      defender.futureSight={turns:3,attacker,move:{...move, power:move.power||80, type:'typeless',category:'special'}};
      await this.battleText(`${attacker.name} prevede un attacco futuro! L’impatto arriverà tra due turni.`);
      return 'future-sight';
    }
    if(move.protects){
      const streak=attacker.protectStreak||0;
      // Usi consecutivi: ogni volta un terzo delle probabilità (regola moderna).
      const success=Math.random()<Math.pow(1/3,streak);
      attacker.protectStreak=success?streak+1:0;
      attacker.protectedThisTurn=success;
      await this.battleText(success?`${attacker.name} si protegge!`:'Protezione fallisce!');
      return;
    }
    attacker.protectStreak=0;
    const targetsOpponent=move.power>0||move.ailment||['leech-seed','nightmare','mean-look','spite','low-kick'].includes(move.id)||
      (move.statChanges?.some(change=>change.stage<0)||false)||
      ['swagger','flatter'].includes(move.id);
    const airborne=defender.pendingCharge?.move?.id;
    if(targetsOpponent && airborne &&
       Object.prototype.hasOwnProperty.call(CHARGE_UNTOUCHABLE,airborne) &&
       !CHARGE_UNTOUCHABLE[airborne].includes(move.id)){
      this.stopRollout(attacker);if(move.selfKo||['self-destruct','explosion'].includes(move.id))attacker.currentHp=0;await this.battleText(`${defender.name} evita l'attacco mentre si prepara!`);
      return 'charging-evasion';
    }
    if(defender.protectedThisTurn && targetsOpponent){
      this.stopRollout(attacker);if(move.selfKo||['self-destruct','explosion'].includes(move.id))attacker.currentHp=0;await this.battleText(`${defender.name} si protegge dall'attacco!`);
      return;
    }
    let resolvedMove=move;
    if(move.id==='fury-cutter'){
      const multiplier=Math.pow(2,Math.min(4,attacker.furyCutterHits||0));
      resolvedMove={...move,power:move.power*multiplier};
    }
    if(move.id==='low-kick'){
      if(!Number.isFinite(defender.weight)){await this.battleText('Calciobasso fallisce: peso del bersaglio non disponibile.');return 'no-effect';}
      const weightKg=defender.weight/10;
      const power=weightKg<10?20:weightKg<25?40:weightKg<50?60:weightKg<100?80:weightKg<200?100:120;
      resolvedMove={...move,power};
    }
    if(ROLLOUT_MOVES.has(move.id)){
      const power=move.power*Math.pow(2,attacker.rolloutHits||0)*(attacker.defenseCurlUsed?2:1);
      resolvedMove={...move,power};
    }
    if(move.id==='magnitude'){
      const outcome=rollMagnitude();
      resolvedMove={...move,power:outcome.power};
      await this.battleText(`Magnitudo ${outcome.level}!`);
    }
    await this.playAttackAnimation(move,target);
    const abilityAccuracy=Abilities.accuracyMultiplier(attacker,defender,move,{weather:this.effectiveBattleWeather()});
    const accuracy=abilityAccuracy===Infinity?Infinity:Math.min(100,(move.accuracy??100)*abilityAccuracy * accuracyStageMultiplier(attacker.statStages?.accuracy) /
      accuracyStageMultiplier(defender.statStages?.evasion));
    if(Math.random()*100 >= accuracy){attacker.furyCutterHits=0;this.stopRollout(attacker);if(move.selfKo||['self-destruct','explosion'].includes(move.id))attacker.currentHp=0;await this.battleText('Ma la mossa fallisce!');return;}
    if(move.id==='nightmare'){
      if(defender.status!=='sleep'){await this.battleText('Incubo fallisce: il bersaglio non dorme!');return 'no-effect';}
      if(defender.nightmareActive){await this.battleText(`${defender.name} è già tormentato da Incubo!`);return 'no-effect';}
      defender.nightmareActive=true;
      await this.battleText(`${defender.name} è tormentato da Incubo finché dormirà!`);
      return 'nightmare';
    }
    if(move.id==='spite'){
      const last=defender.lastUsedMoveId;
      const victim=defender.moves?.find(m=>m.id===last);
      if(!victim||victim.currentPp<=0){await this.battleText('Dispetto fallisce: nessuna mossa con PP da ridurre!');return 'no-effect';}
      const lost=Math.min(victim.currentPp,2+Math.floor(Math.random()*4));
      victim.currentPp-=lost;await this.battleText(`Dispetto riduce di ${lost} i PP di ${victim.name}!`);
      return 'spite';
    }
    if(move.id==='mean-look'){
      if(defender.meanLookSource){await this.battleText('Il bersaglio non può già scappare!');return 'no-effect';}
      defender.meanLookSource=attacker;
      await this.battleText(`${defender.name} non può più fuggire!`);return 'mean-look';
    }
    let modifier=typeEffectiveness(move.type,defender.types);
    if(move.id==='thunder-wave'&&modifier===0){await this.battleText(`Non ha effetto su ${defender.name}…`);return 'no-effect';}
    if(move.powder&&defender.types.includes('grass')){await this.battleText(`${defender.name} non è colpito dalle polveri!`);return 'no-effect';}
    // Immunità da abilità: il colpo non infligge danni (con assorbimento dove previsto).
    const immunity=this.abilityAttackImmunity(defender,move,attacker);
    if(immunity){this.stopRollout(attacker);if(move.selfKo||['self-destruct','explosion'].includes(move.id))attacker.currentHp=0;this.updateBattleHUD();await this.battleText(immunity);return;}
    // Fixed-damage moves ignore offensive/defensive stats but still obey immunities.
    const fixedDamage=({'dragon-rage':40,'sonic-boom':20,'night-shade':attacker.level,
      'seismic-toss':attacker.level,'super-fang':Math.max(1,Math.floor(defender.currentHp/2))})[move.id]??null;
    if(resolvedMove.power>0 || fixedDamage!==null){
      const count=attacker.ability==='skill-link' && move.maxHits>move.minHits?move.maxHits:rollMultiHitCount(move);
      let landed=0,totalDamage=0,anyCrit=false;
      for(let i=0;i<count && defender.currentHp>0 && attacker.currentHp>0;i++){
        // Triple Kick/Triple Axel check accuracy per additional kick.
        if(i>0 && ['triple-kick','triple-axel','population-bomb'].includes(move.id) && Math.random()*100>=accuracy)break;
        const hitMove=move.id==='triple-kick'||move.id==='triple-axel'
          ?{...resolvedMove,power:resolvedMove.power*(i+1)}:resolvedMove;
        const result=fixedDamage===null?calculateBattleDamage(attacker,defender,hitMove,Math.random,{weather:this.effectiveBattleWeather()}):
          {damage:modifier===0?0:Math.min(defender.currentHp,fixedDamage),effectiveness:modifier,critical:false};
        // Sturdy prevents a one-hit knockout from full HP. Multi-hit moves can still KO.
        if(defender.ability==='sturdy'&&defender.currentHp===defender.maxHp&&result.damage>=defender.currentHp&&
           !Abilities.suppress(attacker)&&result.damage>0)result.damage=Math.max(0,defender.currentHp-1);
        defender.currentHp=Math.max(0,defender.currentHp-result.damage);
        if(defender.currentHp===0 && result.damage>0 && defender.destinyBondActive && attacker.currentHp>0){
          defender.destinyBondActive=false;attacker.currentHp=0;
          await this.battleText(`${defender.name} trascina ${attacker.name} con sé grazie a Destinobbligato!`);
        }
        landed++;totalDamage+=result.damage;anyCrit ||= result.critical;
        if(result.damage>0 && move.id==='rapid-spin'){attacker.trappedTurns=0;attacker.trapMove=null;}
        if(result.damage>0 && ['wrap','bind','clamp','fire-spin','whirlpool','sand-tomb'].includes(move.id) && defender.currentHp>0 && !defender.trappedTurns){
          const roll=Math.random();
          defender.trappedTurns=roll<.375?2:roll<.75?3:roll<.875?4:5;
          defender.trapMove=move.name;defender.trapSource=attacker;
        }
        // Contact means a move with the PokeAPI contact flag, not all physical damage.
        for(const feedback of Abilities.contact(attacker,defender,move,result.damage,{weather:this.effectiveBattleWeather()}))
          await this.battleText(feedback);
        if(result.damage>0&&defender.currentHp>0&&!defender.flinchedThisTurn){
          const chance=Math.max(move.flinchChance||0,attacker.ability==='stench'?10:0)*(attacker.ability==='serene-grace'?2:1);
          if(Math.random()*100<chance && defender.ability!=='inner-focus'){
            defender.flinchedThisTurn=true;
            if(defender.ability==='steadfast')Abilities.stage(defender,'speed',1);
          }
        }
        if(result.damage>0 && result.critical && defender.ability==='anger-point'){
          defender.statStages.attack=6;await this.battleText(`Grancollera massimizza l'Attacco di ${defender.name}!`);
        }
        if(move.drain>0 && result.damage>0)attacker.currentHp=Math.min(attacker.maxHp,attacker.currentHp+Math.max(1,Math.floor(result.damage*move.drain/100)));
        if(move.drain<0 && result.damage>0 && !['rock-head','magic-guard'].includes(attacker.ability))attacker.currentHp=Math.max(0,attacker.currentHp-Math.max(1,Math.floor(result.damage*-move.drain/100)));
        if(move.drain>0&&defender.ability==='liquid-ooze')attacker.currentHp=Math.max(0,attacker.currentHp-Math.max(1,Math.floor(result.damage*move.drain/100))*2);
        this.updateBattleHUD();
        if(count>1){
          await this.battleText(`Colpo ${landed}: ${result.damage} danni${result.critical?' · BRUTTO COLPO!':''}`);
          if(i<count-1 && defender.currentHp>0 && attacker.currentHp>0)await this.wait(120);
        }
      }
      if(count>1)await this.battleText(`Colpito ${landed} ${landed===1?'volta':'volte'}!`);
      // Contraccolpo basato sui PS massimi (Scontro).
      if(move.healing<0&&totalDamage>0&&attacker.currentHp>0){
        const recoil=Math.max(1,Math.floor(attacker.maxHp*-move.healing/100));
        attacker.currentHp=Math.max(0,attacker.currentHp-recoil);this.updateBattleHUD();
        await this.battleText(`${attacker.name} subisce ${recoil} danni di contraccolpo!`);
      }
      const reaction=modifier===0?'Non ha effetto…':modifier>1?'È superefficace!':modifier<1?'Non è molto efficace…':'';
      this.updateBattleHUD();
      if(count===1)await this.battleText(`${attacker.name} usa ${move.name}! ${totalDamage} danni. ${anyCrit?'⚡ BRUTTO COLPO! ':''}${reaction}`);
      else if(reaction)await this.battleText(reaction);
      // Rollout/Ice Ball lock the combatant for up to five consecutive turns.
      if(move.id==='fury-cutter' && modifier>0 && totalDamage>0)
        attacker.furyCutterHits=Math.min(4,(attacker.furyCutterHits||0)+1);
      if(ROLLOUT_MOVES.has(move.id)){
        if(modifier===0 || defender.currentHp<=0 || attacker.currentHp<=0)this.stopRollout(attacker);
        else if(attacker.rolloutTurns>0){
          attacker.rolloutTurns--;attacker.rolloutHits++;
          if(attacker.rolloutTurns===0)this.stopRollout(attacker);
        }else{attacker.rolloutTurns=4;attacker.rolloutHits=1;attacker.rolloutMove=move;}
      }
    } else if(modifier===0 && move.power>0) {
      await this.battleText('Non ha effetto…');
    } else if(move.healing>0 || ['recover','rest'].includes(move.id)){
      const amount=Math.max(1,Math.floor(attacker.maxHp*(move.healing||50)/100));
      attacker.currentHp=Math.min(attacker.maxHp,attacker.currentHp+amount);
      await this.battleText(`${attacker.name} recupera ${amount} PS!`);
    } else if(move.id==='leech-seed'){
      if(defender.types.includes('grass')||defender.seeded){
        await this.battleText(defender.seeded?'Parassiseme è già attivo!':'Parassiseme non ha effetto sui Pokémon Erba!');
      }else{defender.seeded=true;await this.battleText(`${defender.name} è stato parassitato!`);}
    } else if(!move.statChanges?.length && !move.ailment) await this.battleText(`${attacker.name} esegue ${move.name}!`);
    // All Pokémon stat changes (including two-stat buffs) need application.
    // Negative stages usually target the foe; statTarget handles self-debuffs.
    const changes=move.statChanges||[];
    for(const {stat,stage,chance} of changes){
      if(!((move.power===0 || defender.currentHp>0)&&(move.power===0 || modifier>0)))continue;
      if(Math.random()*100>=Math.min(100,(chance??100)*(attacker.ability==='serene-grace'?2:1)))continue;
      const targetsSelf=move.statTarget==='user'||move.statTarget==='users-field'||
        (move.power>0&&['superpower','close-combat','overheat','draco-meteor','leaf-storm'].includes(move.id));
      const targetsFoe=move.statTarget==='selected-pokemon'||move.statTarget==='all-opponents'||
        ['swagger','flatter'].includes(move.id);
      const targetP=targetsSelf?attacker:targetsFoe?defender:stage<0?defender:attacker;
      if(move.power>0&&stage<0&&targetP===defender&&defender.ability==='shield-dust'&&!Abilities.suppress(attacker))continue;
      const immune=stage<0 && targetP===defender &&
        ((Abilities.dropBlocked(targetP,stat,true,{weather:this.effectiveBattleWeather()})&&!Abilities.suppress(attacker))||targetP.mistTurns>0);
      if(immune){await this.battleText(`${targetP.name} impedisce il calo delle statistiche!`);}
      else {
        const before=targetP.statStages[stat]||0;
        const after=Math.max(-6,Math.min(6,before+stage));
        targetP.statStages[stat]=after;
        if(move.id==='defense-curl' && targetP===attacker)attacker.defenseCurlUsed=true;
        await this.battleText(after===before?`${targetP.name}: ${STAT_LABELS_IT[stat]||stat} non può cambiare ancora!`:
          `${targetP.name}: ${STAT_LABELS_IT[stat]||stat} ${stage<0?'diminuisce':'aumenta'}!`);
        if(stage<0 && targetP===defender && after<before)for(const message of Abilities.afterStatDrop(targetP,true))await this.battleText(message);
      }
    }
    this.updateBattleHUD();
    const blocked=move.power>0 && defender.ability==='shield-dust'&&!Abilities.suppress(attacker);
    const ailmentChance=Math.min(100,(move.ailmentChance || (move.power===0?100:0))*(attacker.ability==='serene-grace'?2:1));
    if(move.ailment && !['none','leech-seed'].includes(move.ailment) &&
      (move.ailment==='confusion'?!defender.confusionTurns:move.ailment==='infatuation'||!defender.status) && defender.currentHp>0 && (move.power===0 || modifier>0) &&
      !blocked && !(move.ailment==='confusion' && defender.ability==='own-tempo'&&!Abilities.suppress(attacker)) &&
      !(defender.safeguardTurns>0) && !typeBlocksStatus(defender.types,move.ailment) &&
      (Abilities.suppress(attacker)||!this.statusAbilityBlocks(defender,move.ailment)) && Math.random()*100<ailmentChance) {
      if(move.ailment==='infatuation'){
        const opposite=['male','female'].includes(attacker.gender)&&['male','female'].includes(defender.gender)&&attacker.gender!==defender.gender;
        if(opposite&&!defender.attractedTo&&defender.ability!=='oblivious'){defender.attractedTo=attacker;await this.battleText(`${defender.name} si è innamorato!`);}
        else await this.battleText('Ma non ha effetto…');
      }
      else if(move.ailment==='confusion')defender.confusionTurns=2+Math.floor(Math.random()*4);
      else {defender.status=move.ailment;defender.statusTurns=2+Math.floor(Math.random()*3);}
      if(move.ailment!=='infatuation')await this.battleText(`${defender.name}: ${({poison:'avvelenamento','bad-poison':'iperavvelenamento',burn:'scottatura',paralysis:'paralisi',sleep:'sonno',freeze:'congelamento',confusion:'confusione'})[move.ailment]||'stato alterato'}!`);
      if(defender.ability==='synchronize' && !attacker.status && ['poison','burn','paralysis'].includes(move.ailment) &&
        !this.statusAbilityBlocks(attacker,move.ailment)){
        attacker.status=move.ailment;attacker.statusTurns=3;
      }
    }
    if(RECHARGE_MOVES.has(move.id)&&modifier>0&&move.power>0)attacker.rechargeTurns=1;
    if(RAMPAGE_MOVES.has(move.id)&&attacker.rampageTurns>0){
      attacker.rampageTurns--;
      if(attacker.rampageTurns===0){attacker.rampageMove=null;
        attacker.confusionTurns=2+Math.floor(Math.random()*3);
        await this.battleText(`${attacker.name} è confuso dopo l'attacco furioso!`);
      }
    }
    if(move.selfKo||['self-destruct','explosion'].includes(move.id)){
      attacker.currentHp=0;this.updateBattleHUD();
      await this.battleText(`${attacker.name} è esausto dopo ${move.name}!`);
    }
    if(!move.power && move.category==='status' && !move.screen && !move.delayedHit && !move.statChanges?.length &&
      !move.ailment && !move.healing && !move.focusEnergy &&
      !move.mist && !move.safeguard && !move.resetStages && !move.copyStages &&
      !move.protects && !['rest','haze','teleport','leech-seed','geomancy','defense-curl'].includes(move.id)){
      await this.battleText(move.id==='splash'?'Ma non succede niente!':`${move.name} non ha effetto in questa lotta.`);
    }
    this.updateBattleHUD();await this.wait(420);
  },

  async applyEndOfTurnEffects(){
    const combatants=[this.activeMon,this.enemyMon];
    for(const mon of combatants){
      if(!mon)continue;
      if(mon.futureSight){
        mon.futureSight.turns--;
        if(mon.futureSight.turns<=0){
          const pending=mon.futureSight;mon.futureSight=null;
          if(mon.currentHp>0){
            const hit=calculateBattleDamage(pending.attacker,mon,pending.move);
            mon.currentHp=Math.max(0,mon.currentHp-hit.damage);
            await this.battleText(`Divinazione colpisce ${mon.name} dopo l'attesa! ${hit.damage} danni.`);
            this.updateBattleHUD();
          }
        }
      }
      for(const [key,label] of [['reflectTurns','Riflesso'],['lightScreenTurns','Schermoluce'],
        ['safeguardTurns','Salvaguardia'],['mistTurns','Nebbia']]){
        if(mon[key]>0){mon[key]--;if(mon[key]===0)await this.battleText(`${label} di ${mon.name} svanisce!`);}
      }
      if(mon.currentHp<=0)continue;
      if(mon.ghostCurseActive && mon.ability!=='magic-guard'){
        const damage=Math.min(mon.currentHp,Math.max(1,Math.floor(mon.maxHp/4)));
        mon.currentHp-=damage;
        this.updateBattleHUD();await this.battleText(`Maledizione sottrae ${damage} PS a ${mon.name}!`);
      }
      if(mon.currentHp<=0)continue;
      if(mon.nightmareActive && mon.status!=='sleep')mon.nightmareActive=false;
      if(mon.nightmareActive && mon.status==='sleep' && mon.ability!=='magic-guard'){
        const damage=Math.min(mon.currentHp,Math.max(1,Math.floor(mon.maxHp/4)));
        mon.currentHp-=damage;
        this.updateBattleHUD();await this.battleText(`Incubo sottrae ${damage} PS a ${mon.name}!`);
      }
      if(mon.currentHp<=0)continue;
      if(['burn','poison','bad-poison'].includes(mon.status)&&!['magic-guard'].includes(mon.ability) && !(mon.ability==='poison-heal'&&['poison','bad-poison'].includes(mon.status))){
        if(mon.status==='bad-poison')mon.toxicTurns=(mon.toxicTurns||0)+1;
        // Moderno: scottatura 1/16, veleno 1/8, iperveleno crescente.
        const damage=Math.max(1,Math.floor(mon.maxHp*(mon.status==='bad-poison'?Math.min(15,mon.toxicTurns):mon.status==='burn'?1:2)/16));
        mon.currentHp=Math.max(0,mon.currentHp-damage);
        this.updateBattleHUD();await this.battleText(`${mon.name} subisce ${damage} danni da ${mon.status==='burn'?'scottatura':'veleno'}!`);
      }
      if(mon.trappedTurns>0 && mon.currentHp>0 && mon.ability!=='magic-guard'){
        const damage=Math.max(1,Math.floor(mon.maxHp/16));
        mon.currentHp=Math.max(0,mon.currentHp-damage);
        mon.trappedTurns--;
        this.updateBattleHUD();
        await this.battleText(`${mon.name} subisce ${damage} danni da ${mon.trapMove||'Avvolgibotta'}!`);
      }
      if(mon.seeded && mon.currentHp>0 && mon.ability!=='magic-guard'){
        const damage=Math.min(mon.currentHp,Math.max(1,Math.floor(mon.maxHp/8)));
        mon.currentHp=Math.max(0,mon.currentHp-damage);
        const leech=mon===this.activeMon?this.enemyMon:this.activeMon;
        leech.currentHp=Math.min(leech.maxHp,leech.currentHp+damage);
        this.updateBattleHUD();await this.battleText(`Parassiseme sottrae energia a ${mon.name}!`);
      }
    }
    for(const mon of combatants){
      for(const message of Abilities.endTurn(mon,{weather:this.effectiveBattleWeather()}))await this.battleText(message);
    }
    if(this.effectiveBattleWeather()?.type==='sandstorm'){
      for(const mon of combatants){
        if(!mon||mon.currentHp<=0||Abilities.immuneToSand(mon))continue;
        const damage=Math.min(mon.currentHp,Math.max(1,Math.floor(mon.maxHp/16)));
        mon.currentHp-=damage;this.updateBattleHUD();
        await this.battleText(`Terrempesta sottrae ${damage} PS a ${mon.name}!`);
      }
    }
    if(this.effectiveBattleWeather()?.type==='hail'){
      for(const mon of combatants){
        if(!mon||mon.currentHp<=0||mon.types?.includes('ice')||['overcoat','magic-guard','snow-cloak','ice-body'].includes(mon.ability))continue;
        const damage=Abilities.hurt(mon,1/16);this.updateBattleHUD();await this.battleText(`Grandine infligge ${damage} danni a ${mon.name}!`);
      }
    }
    if(this.battleWeather){
      this.battleWeather.turns--;
      if(this.battleWeather.turns<=0){this.battleWeather=null;await this.battleText('Il tempo torna normale.');}
    }
  },
};

return {movesMethods};
})();
const __m26 = (() => {
const { FORCED_RECHARGE_ACTION, itemImage } = __m3;
const { createMove } = __m6;
const { typeName, typeEffectiveness } = __m4;
const Matchups = __m23;
// Interfaccia della lotta: menu dei comandi, messaggi, HUD e animazioni.





const uiMethods = {
  hideAllActions() {
    for(const id of ['panel-main-actions','panel-move-actions','panel-bag-actions','panel-team-actions']) {
      this.$id(id)?.classList.add('hidden');
    }
  },

  hasForcedBattleAction(){
    return Boolean(this.activeMon?.pendingCharge || this.activeMon?.rechargeTurns>0 || this.activeMon?.rampageTurns>0 || this.activeMon?.rolloutTurns>0);
  },

  showMainActions() {
    if(this.battleBusy || this.pendingForcedSwitch) return;
    // A charging/recharging Pokémon has no manual action menu on this turn.
    const forced=this.hasForcedBattleAction();
    if(forced && this.isBattleVisible()){
      const token=this.battleToken;
      this.hideAllActions();
      setTimeout(()=>{
        if(token!==this.battleToken||this.battleBusy||this.pendingForcedSwitch||!this.isBattleVisible())return;
        const move=this.activeMon.pendingCharge?.move || this.activeMon.rampageMove || this.activeMon.rolloutMove || FORCED_RECHARGE_ACTION;
        this.executeAttack(move,true);
      },this.gameDelay(160));
      return;
    }
    // Ogni turno del giocatore registra lo stato della lotta (danni e perdite).
    this.commitBattleState();
    // SKIP (DEV) vale per tutta la sfida: anche i Pokémon successivi di Capipalestra e raid.
    if(this.devSkipPending||this.devSkipChain){this.performDevSkip();return;}
    this.battleMode=null; this.hideAllActions();
    this.updateBattleWingCloseButtons();this.setMobileSheet(null);
    this.$id('panel-main-actions').classList.remove('hidden');
    this.$id('btn-move-back').classList.add('hidden');
    const run=this.$id('btn-act-run');
    const forbidden=this.isRaidActive || ['gym','trainer','mewtwo'].includes(this.battleType);
    run.disabled=forbidden;run.title=forbidden?'Non puoi fuggire da una sfida con allenatori o dal raid.':'';
    this.renderSidebar();
    this.focusBattleSelection('#btn-act-fight');
  },

  async animateBall(side){
    const ball=this.$id('battle-throw-ball');
    const stage=this.$id('battle-stage');
    const trainer=this.$id(side==='enemy'?'enemy-trainer-sprite':'player-trainer-sprite');
    const rect=stage.getBoundingClientRect();
    const trainerRect=trainer.getBoundingClientRect();
    const target=this.battleThrowDestination(side);
    const size=34;
    const clamp=(value,min,max)=>Math.min(max,Math.max(min,value));
    const releaseX=trainerRect.left-rect.left+trainerRect.width*(side==='enemy'?.35:(this.playerGender==='female'?.78:.68));
    const releaseY=trainerRect.top-rect.top+trainerRect.height*.43;
    const sx=clamp(releaseX-size/2,4,Math.max(4,rect.width-size-4));
    const sy=clamp(releaseY-size/2,4,Math.max(4,rect.height-size-4));
    const ex=clamp(target.x-size/2,4,Math.max(4,rect.width-size-4));
    const ey=clamp(target.y-size/2,4,Math.max(4,rect.height-size-4));
    ball.className='throw-ball ball-compositor';
    ball.style.left='0px';ball.style.top='0px';ball.style.opacity='1';
    const x=t=>sx+(ex-sx)*t;
    // The apex stays inside the stage even when the opponent sits near the top.
    const arcHeight=Math.min(84,rect.height*.23,Math.max(0,Math.min(sy,ey)-6));
    const y=t=>sy+(ey-sy)*t-Math.sin(Math.PI*t)*arcHeight;
    const angle=side==='enemy'?-1:1;
    const frames=[0,.18,.38,.60,.82,1].map((t,i)=>({
      transform:`translate3d(${x(t)}px,${y(t)}px,0) rotate(${angle*360*t}deg) scale(${.72+.28*Math.sin(Math.PI*t)})`,
      opacity:i===5?0:1,offset:t}));
    const trainerMotion=side==='player' ? (async()=>{
      const folder=this.playerGender==='champion'?'champion':this.playerGender==='female'?'girl':'red';
      for(let i=0;i<5;i++){
        trainer.style.backgroundImage=`url('assets/sprites/player/${folder}/throw/${i}.png')`;
        await this.wait(i===4?195:115);
      }
    })() : this.playMotion(trainer,[
      {transform:'translate3d(0,0,0) rotate(0deg)'},
      {transform:'translate3d(-10px,-7px,0) rotate(-4deg)'},
      {transform:'translate3d(0,0,0) rotate(0deg)'}],500,'ease-out');
    await Promise.all([this.playMotion(ball,frames,650,'linear'),trainerMotion]);
    ball.className='throw-ball';ball.removeAttribute('style');
  },

  async summonPokemon(side,wild=false){
    const sprite=this.$id(side==='enemy'?'enemy-sprite':'player-sprite');
    const flash=this.$id('summon-flash');
    flash.className=`summon-flash on-${side} active`;
    sprite.classList.remove('hidden','recall-anim','summon-cinematic','wild-entry');
    await this.playMotion(sprite,[
      {opacity:0,transform:'translate3d(0,22px,0) scale(.18)'},
      {opacity:.65,transform:'translate3d(0,-5px,0) scale(.95)'},
      {opacity:1,transform:'translate3d(0,0,0) scale(1)'}],570,'cubic-bezier(.18,.75,.2,1)');
    sprite.classList.remove('summon-cinematic','wild-entry');
    sprite.style.opacity='';flash.className='summon-flash';
  },

  async animateRecall(side){
    const sprite=this.$id(side==='enemy'?'enemy-sprite':'player-sprite');
    const flash=this.$id('summon-flash');
    flash.className=`summon-flash on-${side} recall`;
    await this.playMotion(sprite,[
      {opacity:1,transform:'translate3d(0,0,0) scale(1)'},
      {opacity:.75,transform:'translate3d(0,0,0) scale(.55)'},
      {opacity:0,transform:'translate3d(0,0,0) scale(.03)'}],390,'ease-in');
    sprite.classList.add('hidden');sprite.style.opacity='';flash.className='summon-flash';
  },

  async animateCapture(shakes,success,ballType='pokeball'){
    const ball=this.$id('capture-ball');
    const burst=this.$id('capture-smoke');
    const enemy=this.$id('enemy-sprite');
    const stage=this.$id('battle-stage');
    const area=stage.getBoundingClientRect();
    const target=this.battleSpritePosition('enemy');
    const width=38;
    const start={x:area.width*.21,y:area.height*.70};
    const hit={x:target.x-width/2,y:target.y-width/2};
    const platform=stage.querySelector('.enemy-platform-gba')?.getBoundingClientRect();
    const landingY=platform ? platform.top-area.top-12 : target.y+35;
    const ground={x:target.x-width/2,y:Math.max(hit.y+10,Math.min(area.height-48,landingY))};
    ball.className='capture-ball compositor-ball';
    ball.style.setProperty('--capture-ball-image',`url('${itemImage(ballType==='masterball'?'masterball':'pokeball')}')`);
    ball.dataset.ballType=ballType;
    ball.style.display='block';ball.style.opacity='1';
    ball.style.left='0px';ball.style.top='0px';
    const anim=[0,.18,.42,.66,.85,1].map(t=>({
      transform:`translate3d(${start.x+(hit.x-start.x)*t}px,${start.y+(hit.y-start.y)*t-Math.sin(Math.PI*t)*Math.min(96,area.height*.26)}px,0) rotate(${t*360}deg) scale(${.72+Math.sin(Math.PI*t)*.25})`,offset:t}));
    await this.playMotion(ball,anim,630,'linear');
    ball.style.transform=`translate3d(${hit.x}px,${hit.y}px,0)`;
    burst.className='capture-smoke absorption';
    burst.style.left=`${target.x-54}px`;burst.style.top=`${target.y-54}px`;
    await this.playMotion(enemy,[
      {opacity:1,transform:'translate3d(0,0,0) scale(1)'},
      {opacity:0,transform:'translate3d(0,0,0) scale(.06)'}],340,'ease-in');
    enemy.classList.add('hidden');
    enemy.style.opacity='';burst.className='capture-smoke';
    await this.playMotion(ball,[
      {transform:`translate3d(${hit.x}px,${hit.y}px,0) rotate(0deg)`},
      {transform:`translate3d(${ground.x}px,${ground.y-7}px,0) rotate(12deg)`,offset:.66},
      {transform:`translate3d(${ground.x}px,${ground.y}px,0) rotate(0deg)`}],330,'ease-out');
    ball.style.transform=`translate3d(${ground.x}px,${ground.y}px,0)`;
    ball.classList.add('capture-waiting');
    await this.playMotion(ball,[
      {transform:`translate3d(${ground.x}px,${ground.y}px,0) scale(1)`,filter:'brightness(1)'},
      {transform:`translate3d(${ground.x}px,${ground.y}px,0) scale(1.07)`,filter:'brightness(2.2)',offset:.5},
      {transform:`translate3d(${ground.x}px,${ground.y}px,0) scale(1)`,filter:'brightness(1)'}],450,'ease-in-out');
    for(let i=0;i<shakes;i++){
      await this.playMotion(ball,[
        {transform:`translate3d(${ground.x}px,${ground.y}px,0) rotate(0deg)`},
        {transform:`translate3d(${ground.x}px,${ground.y}px,0) rotate(-22deg)`,offset:.22},
        {transform:`translate3d(${ground.x}px,${ground.y}px,0) rotate(17deg)`,offset:.55},
        {transform:`translate3d(${ground.x}px,${ground.y}px,0) rotate(0deg)`}],470,'ease-in-out');
      await this.wait(85);
    }
    if(success){
      burst.className='capture-smoke caught-particles';
      await this.playMotion(ball,[
        {transform:`translate3d(${ground.x}px,${ground.y}px,0) scale(1)`,filter:'brightness(1)'},
        {transform:`translate3d(${ground.x}px,${ground.y}px,0) scale(1.12)`,filter:'brightness(1.9)',offset:.4},
        {transform:`translate3d(${ground.x}px,${ground.y}px,0) scale(1)`,filter:'brightness(.65)'}],780,'ease-out');
    }else{
      burst.className='capture-smoke escape-particles';
      await this.playMotion(ball,[
        {opacity:1,transform:`translate3d(${ground.x}px,${ground.y}px,0) scale(1)`},
        {opacity:0,transform:`translate3d(${ground.x}px,${ground.y-15}px,0) scale(1.5)`}],320,'ease-out');
      enemy.classList.remove('hidden');
      await this.playMotion(enemy,[
        {opacity:0,transform:'translate3d(0,0,0) scale(.25)'},
        {opacity:1,transform:'translate3d(0,0,0) scale(1)'}],430,'ease-out');
    }
    ball.className='capture-ball';ball.removeAttribute('style');
    burst.className='capture-smoke';burst.removeAttribute('style');
  },

  setBattleMsg(text){
    this.$id('battle-msg').textContent=String(text??'');
    this.$id('battle-log').classList.toggle('awaiting-click',Boolean(this.dialogueResolve));
  },

  acknowledgeDialogue(){
    if(!this.dialogueResolve)return;
    const resolve=this.dialogueResolve;this.dialogueResolve=null;
    this.$id('battle-log').classList.remove('awaiting-click');
    resolve();
  },

  async battleText(text){
    this.setBattleMsg(text);
    if(this.$id('overlay-battle').classList.contains('hidden'))return;
    // The lethal hit may be followed by several messages before the KO handler runs.
    const pending=this.activeMon;
    if(!this.isCelestialCave && pending?.currentHp<=0 && this.team.includes(pending) && this.lastPersistedFaint!==pending){
      this.lastPersistedFaint=pending;
      this.commitBattleState(pending);
    }
    // DEV SKIP: i messaggi scorrono da soli.
    if(this.fastBattleText){await this.wait(90);return;}
    await new Promise(resolve=>{
      this.dialogueResolve=resolve;
      this.$id('battle-log').classList.add('awaiting-click');
    });
  },

  displayMoveName(move){
    return String(move.name);
  },

  showMoves(){
    if(this.battleConfirmAction)return;
    if(this.battleBusy || this.pendingForcedSwitch || this.hasForcedBattleAction())return;
    this.battleMode='moves';this.hideAllActions();this.updateBattleWingCloseButtons();
    const panel=this.$id('panel-move-actions');panel.innerHTML='';panel.classList.remove('hidden');
    this.$id('btn-move-back').classList.remove('hidden');
    for(const m of this.activeMon.moves){
      const btn=document.createElement('button');btn.className=`act-btn move-${m.type}`;
      const moveLabel=document.createElement('strong');moveLabel.textContent=this.displayMoveName(m);
      const detail=document.createElement('small');detail.textContent=`${typeName(m.type)} · PP ${m.currentPp}/${m.maxPp}`;
      btn.append(moveLabel,detail);
      // Efficacia mostrata solo per le combinazioni già viste in lotta.
      if(m.category!=='status'&&m.power>0&&this.enemyMon&&Matchups.knows(m.type,this.enemyMon.types)){
        const value=typeEffectiveness(m.type,this.enemyMon.types),label=Matchups.effectLabel(value);
        if(label){
          const tag=document.createElement('span');
          tag.className=`move-effect ${value===0?'effect-none':value>1?'effect-super':'effect-weak'}`;
          tag.textContent=label;tag.title=value===0?'Nessun effetto':value>1?'Superefficace':'Poco efficace';
          btn.append(tag);
        }
      }
      btn.disabled=m.currentPp<=0;
      btn.onclick=()=>this.executeAttack(m);
      panel.appendChild(btn);
    }
    if(!this.activeMon.moves.some(m=>m.currentPp>0)){
      const struggle=createMove('struggle');
      const btn=document.createElement('button');btn.className='act-btn';btn.textContent='SCONTRO';btn.onclick=()=>this.executeAttack(struggle);panel.appendChild(btn);
    }
    this.focusBattleSelection('#panel-move-actions button:not(:disabled)');
  },

  showTeamMenu(force=false){
    if(!force&&(this.battleBusy || this.hasForcedBattleAction()))return;
    if(this.battleBusy && !force)return;
    this.pendingForcedSwitch=Boolean(force);
    this.battleMode='team';this.hideAllActions();
    this.openWings();this.renderSidebar();this.updateBattleWingCloseButtons();this.setMobileSheet('team');
    this.$id('panel-team-actions').classList.remove('hidden');
    this.$id('panel-team-actions').innerHTML=`<span>${force?'POKÉMON SCONFITTO: CHI MANDI IN CAMPO?':'SCEGLI UN POKÉMON NEL PANNELLO SINISTRO'}</span>${force?'':'<button id="battle-team-back" class="act-btn mini-back-btn">←</button>'}`;
    if(!force)this.$id('battle-team-back').onclick=()=>{this.teleportSwitchPending=false;this.showMainActions();};
    this.setBattleMsg(force?`${this.activeMon.name} è stato sconfitto, chi vuoi mandare in campo?`:'Apri il Pokémon nella squadra a sinistra e scegli MANDA IN CAMPO.');
    this.focusBattleSelection('#team-grid button:not(:disabled)');
  },

  showBagMenu(){
    if(this.battleBusy||this.pendingForcedSwitch||this.hasForcedBattleAction())return;
    this.battleMode='bag';this.hideAllActions();this.openWings();this.renderSidebar();this.updateBattleWingCloseButtons();this.setMobileSheet('bag');
    this.$id('panel-bag-actions').classList.remove('hidden');
    this.$id('panel-bag-actions').innerHTML='<span>SCEGLI UNO STRUMENTO DALLO ZAINO A DESTRA</span><button id="battle-bag-back" class="act-btn mini-back-btn">←</button>';
    this.$id('battle-bag-back').onclick=()=>this.showMainActions();
    this.setBattleMsg('Apri lo zaino e scegli un oggetto.');
    this.focusBattleSelection('#bag-tabs button');
  },

  askBattleConfirmation(message,yes,cancellable=true){
    const o=this.$id('battle-confirm');this.battleConfirmAction=yes;
    this.$id('battle-confirm-text').textContent=String(message??'');
    this.$id('btn-battle-confirm-no').classList.toggle('hidden',!cancellable);
    o.classList.remove('hidden');
    this.$id('btn-battle-confirm-yes').focus({preventScroll:true});
  },

  acceptBattleConfirmation(){
    const action=this.battleConfirmAction;
    // On confirm, fishing transitions into a locked encounter rather than unlocking.
    if(this.fishingConfirmPending)this.fishingConfirmPending=false;
    this.closeBattleConfirmation();
    if(action)action();
  },

  closeBattleConfirmation(){
    this.$id('battle-confirm').classList.add('hidden');
    this.battleConfirmAction=null;
    if(this.fishingConfirmPending){this.fishingConfirmPending=false;this.isLocked=false;}
  },

  isBattleVisible(){return !this.$id('overlay-battle')?.classList.contains('hidden');},

  async playAttackAnimation(move,target='enemy'){
    const fx=this.$id('attack-fx-container');
    fx.replaceChildren();
    const id=(move.id||'').toLowerCase(),type=move.type||'normal';
    const effect=/(scratch|slash|cut|fury-swipes|metal-claw)/.test(id)?'claw':
      /(tackle|quick-attack|headbutt|pound|slam|body-slam|swift)/.test(id)?'star':
      /(bubble|water-gun|hydro-pump|surf)/.test(id)?(id==='bubble'?'bubble':'wave'):
      /(vine-whip|razor-leaf|solar-beam|mega-drain|leech-seed)/.test(id)?'leaf':
      /(thunder|electric|spark|shock)/.test(id)?'bolt':
      /(ember|flame|fire|blast)/.test(id)?'ember':
      /(rock|earth|dig)/.test(id)?'rock':
      /(psychic|confusion|hypnosis)/.test(id)?'psychic':
      /(poison|smog|acid|gas|spore)/.test(id)?'smoke':
      type==='fire'?'ember':type==='water'?'wave':type==='grass'?'leaf':
      type==='electric'?'bolt':type==='ice'?'ice':type==='rock'||type==='ground'?'rock':
      type==='ghost'||type==='poison'?'smoke':type==='psychic'?'psychic':'star';
    const user=this.$id(target==='enemy'?'player-sprite':'enemy-sprite');
    const victim=this.$id(target==='enemy'?'enemy-sprite':'player-sprite');
    const rootBounds=fx.getBoundingClientRect();
    const a=user.getBoundingClientRect(),b=victim.getBoundingClientRect();
    const start={x:a.left-rootBounds.left+a.width*.50,y:a.top-rootBounds.top+a.height*.52};
    const end={x:b.left-rootBounds.left+b.width*.50,y:b.top-rootBounds.top+b.height*.52};
    const count=move.power===0?5:((effect==='wave'||effect==='ember'||effect==='bolt')?11:7);
    const dx=end.x-start.x,dy=end.y-start.y;
    user.classList.remove('attack-lunge');void user.offsetWidth;user.classList.add('attack-lunge');
    for(let i=0;i<count;i++){
      const p=document.createElement('img');p.className='v6-move-projectile';
      p.src=`assets/sprites/effects/${effect}.svg`;p.alt='';p.draggable=false;
      p.style.left=`${start.x+(i%3-1)*6}px`;p.style.top=`${start.y+(i%3-1)*4}px`;
      p.style.setProperty('--travel-x',`${dx+(i%4-1.5)*12}px`);
      p.style.setProperty('--travel-y',`${dy+(i%3-1)*15}px`);
      p.style.setProperty('--delay',`${i*44}ms`);
      p.style.setProperty('--spin',`${(i%2?1:-1)*30}deg`);
      fx.appendChild(p);
    }
    const impact=document.createElement('div');impact.className=`v6-attack-impact effect-${effect}`;
    impact.style.left=`${end.x}px`;impact.style.top=`${end.y}px`;
    fx.appendChild(impact);
    await this.wait(410);
    victim.classList.remove('hit-anim');void victim.offsetWidth;victim.classList.add('hit-anim');
    await this.wait(560);
    user.classList.remove('attack-lunge');victim.classList.remove('hit-anim');
    fx.replaceChildren();
  },

  battleSpritePosition(side){
    const stage=this.$id('battle-stage').getBoundingClientRect();
    const sprite=this.$id(side==='enemy'?'enemy-sprite':'player-sprite').getBoundingClientRect();
    // Used by capture effects only: the target must be a *visible* sprite.
    return {x:sprite.left-stage.left+sprite.width*.50,
      y:sprite.top-stage.top+sprite.height*.54};
  },

  battleThrowDestination(side){
    // Pokémon sprites are display:none during the throw, so their bounds are
    // ZERO. Read the always-visible platform instead; also works on mobile.
    const stage=this.$id('battle-stage').getBoundingClientRect();
    const platform=this.$id('battle-stage').querySelector(
      side==='enemy'?'.enemy-platform-gba':'.player-platform-gba');
    const bounds=platform.getBoundingClientRect();
    // The ball opens just over the top of the platform where the Pokémon lands.
    return {x:bounds.left-stage.left+bounds.width*.5,
      y:bounds.top-stage.top+bounds.height*.28};
  },

  hpColorState(mon){
    const ratio=mon?.maxHp ? mon.currentHp/mon.maxHp : 0;
    return ratio < .20 ? 'red' : ratio < .50 ? 'yellow' : 'green';
  },

  resetBattleVisuals(keepPlayerOnField=false){
    for(const id of ['battle-throw-ball','capture-ball','capture-smoke','summon-flash']){
      const el=this.$id(id);if(el){el.className=el.dataset.baseClass || el.className.split(' ')[0];el.removeAttribute('style');}
    }
    this.$id('attack-fx-container').replaceChildren();
    for(const id of ['enemy-sprite','player-sprite']){
      this.$id(id).classList.remove('recall-anim','summon-anim','summon-cinematic','hit-anim','attack-lunge','hidden');
    }
    this.$id('enemy-sprite').classList.add('hidden');
    if(!keepPlayerOnField)this.$id('player-sprite').classList.add('hidden');
  },

  updateBattleHUD(){
    if(!this.activeMon||!this.enemyMon)return;
    const a=this.activeMon,b=this.enemyMon;
    this.$id('player-name').textContent=a.name;
    this.$id('enemy-name').textContent=b.name;
    this.$id('player-lv').textContent=a.level;
    this.$id('enemy-lv').textContent=b.level;
    this.$id('player-sprite').src=a.spriteBack;
    const playerPct=Math.max(0,100*a.currentHp/a.maxHp);
    const enemyPct=Math.max(0,100*b.currentHp/b.maxHp);
    this.$id('player-hp-fill').style.width=`${playerPct}%`;
    this.$id('enemy-hp-fill').style.width=`${enemyPct}%`;
    this.$id('player-hp-fill').className=`stat-bar-hp-gba hp-${this.hpColorState(a)}`;
    this.$id('enemy-hp-fill').className=`stat-bar-hp-gba hp-${this.hpColorState(b)}`;
    this.$id('player-hp-text').textContent=`${a.currentHp}/${a.maxHp}`;
    this.$id('enemy-hp-text').textContent=`${b.currentHp}/${b.maxHp}`;
    this.$id('player-exp-fill').style.width=`${a.level>=this.getLevelCap()?100:Math.max(0,Math.min(100,100*a.exp/Math.max(1,a.expToNext)))}%`;
    this.renderBattleConditions('player',a);
    this.renderBattleConditions('enemy',b);
    this.renderSidebar();
  },

  renderBattleConditions(side,mon){
    const out=this.$id(`${side}-conditions`);if(!out)return;
    out.replaceChildren();
    const statuses={burn:'BRU',poison:'VEL','bad-poison':'VEL+',paralysis:'PAR',sleep:'SON',freeze:'GEL',confusion:'CONF'};
    if(mon.status && mon.status!=='leech-seed'){const chip=document.createElement('span');chip.className='condition-chip status-chip';chip.textContent=statuses[mon.status]||mon.status.toUpperCase();out.append(chip);}
    if(mon.trappedTurns>0){const chip=document.createElement('span');chip.className='condition-chip status-chip';chip.textContent='INTR.';out.append(chip);}
    if(mon.seeded){const chip=document.createElement('span');chip.className='condition-chip status-chip';chip.textContent='SEME';out.append(chip);}
    for(const [field,label] of [['lightScreenTurns','SCH. LUCE'],['reflectTurns','RIFLESSO'],['safeguardTurns','SALV.'],['mistTurns','NEBBIA']]){
      if(mon[field]>0){const chip=document.createElement('span');chip.className='condition-chip boost';chip.textContent=`${label} ${mon[field]}`;out.append(chip);}
    }
    if(mon.futureSight){const chip=document.createElement('span');chip.className='condition-chip status-chip';chip.textContent=`DIV. ${mon.futureSight.turns}`;out.append(chip);}
    if(mon.focusEnergyActive){const chip=document.createElement('span');chip.className='condition-chip boost';chip.textContent='FOCUS';out.append(chip);}
    const labels={attack:'ATT',defense:'DIF','special-attack':'ATT.SP','special-defense':'DIF.SP',speed:'VEL.',accuracy:'PREC',evasion:'ELUS'};
    for(const [key,value] of Object.entries(mon.statStages||{})){
      if(!value)continue;
      const chip=document.createElement('span');chip.className=`condition-chip ${value>0?'boost':'nerf'}`;
      chip.textContent=`${labels[key]||key} ${value>0?'+':''}${value}`;out.append(chip);
    }
  },
};

return {uiMethods};
})();
const __m27 = (() => {
const Abilities = __m5;
const { ITEMS, itemLabel, STONE_EVOLUTIONS } = __m3;
const { abilityData, abilityName, speciesData, pokemonSprite } = __m0;
const Objectives = __m9;
const Dex = __m8;
// Strumenti: cure, Elisir, Capsula Abilità, caramelle DEV e Poké Ball.
// Probabilità di cattura con la formula moderna: PS mancanti, tasso di cattura della specie
// e stati alterati. Il tasso minimo (MIN_CAPTURE_RATE) rende possibili i leggendari
// anche senza Ultra Ball, che non esistono in questa avventura.






const MIN_CAPTURE_RATE = 45;
function captureChance(wild) {
  const rate = Math.max(MIN_CAPTURE_RATE, speciesData(wild.id)?.captureRate ?? 45);
  const status = ['sleep', 'freeze'].includes(wild.status) ? 2.5 : wild.status ? 1.5 : 1;
  const a = ((3 * wild.maxHp - 2 * wild.currentHp) * rate * status) / (3 * wild.maxHp);
  return Math.min(.95, Math.pow(Math.min(255, a) / 255, .75));
}

const itemsMethods = {
  canUseItemOnMon(id, mon) {
    if (!mon || !this.team.includes(mon)) return false;
    if (id === 'abilityCapsule') return true;
    if (mon.currentHp <= 0) return false;
    if (STONE_EVOLUTIONS[id]) return mon.id === 133;
    if (['potion','superPotion','hyperPotion'].includes(id)) return mon.currentHp < mon.maxHp;
    if (id === 'elixir') return mon.moves.some(m => m.currentPp < m.maxPp);
    if (['rareCandy','goldCandy'].includes(id)) return this.devMode && mon.level < 100;
    return false;
  },
  chooseBattleItem(id){
    if(this.battleConfirmAction || this.pendingItemTarget || this.battleBusy || this.dialogueResolve || (this.isBattleVisible()&&this.hasForcedBattleAction()))return;
    if(!this.items[id]){this.showItemFeedback('Non hai questo strumento.');return;}
    if(id==='pokeball'||id==='masterball'){
      if(id==='masterball' && this.isCelestialCave && this.celestialPhase!=='rematch'){
        this.showItemFeedback('Devi prima dimostrare il tuo valore contro Mewtwo.');return;
      }
      if(!this.isBattleVisible()){this.showItemFeedback('Le Poké Ball si usano solo durante gli incontri selvatici.');return;}
      if(this.isRaidActive||['gym','trainer'].includes(this.battleType)){
        this.setBattleMsg('Non puoi catturare Pokémon di allenatori o dei raid!');return;
      }
      const lastBall = id==='pokeball' && this.items.pokeball===1;
      const message = id==='masterball' ? 'Vuoi lanciare la Master Ball?' :
        (lastBall ? 'È la tua ultima Poké Ball. Vuoi lanciarla?' : 'Vuoi lanciare una Poké Ball?');
      this.askBattleConfirmation(message,()=>this.useBattleItem(id));
      return;
    }
    if(['rareCandy','goldCandy'].includes(id)){
      if(!this.devMode)return;
      if(this.isBattleVisible()){
        this.showItemFeedback('Le caramelle DEV si usano solo fuori dalla battaglia.');return;
      }
    }
    if(STONE_EVOLUTIONS[id]) {
      if(this.isBattleVisible()){ this.showItemFeedback('Le pietre si usano fuori dalla battaglia.'); return; }
      if(!this.team.some(mon=>mon.id===133&&mon.currentHp>0)){this.showItemFeedback('Ti serve un Eevee in squadra per usare questa pietra.');return;}
      this.beginItemTargetSelection(id); return;
    }
    if(id==='abilityCapsule'){
      if(this.isBattleVisible()){this.showItemFeedback('La Capsula Abilità si usa solo fuori dalla battaglia.');return;}
      this.beginItemTargetSelection(id);return;
    }
    if(!['potion','superPotion','hyperPotion','elixir','rareCandy','goldCandy'].includes(id))return;
    this.beginItemTargetSelection(id);
  },

  showItemFeedback(message){
    if(this.isBattleVisible())this.setBattleMsg(message);
    else {this.logMsg(message);this.showDiscoveryNotice(message,2400);}
  },

  beginItemTargetSelection(id){
    if((this.isBattleVisible()&&this.hasForcedBattleAction()) || !this.team.length || this.isLocked && !this.isBattleVisible())return;
    if (!this.team.some(mon => this.canUseItemOnMon(id, mon))) { this.showItemFeedback('Nessun Pokémon può utilizzare questo strumento ora.'); return; }
    this.pendingItemTarget=id;this.openWings();this.setMobileSheet(null);
    const box=this.$id('item-target-prompt');
    this.$id('item-target-message').textContent=`A quale Pokémon vuoi dare ${itemLabel(id)}?`;
    box.classList.remove('hidden');
    const mobileList=this.$id('item-target-mobile-list');mobileList.replaceChildren();
    this.team.forEach(mon=>{
      const button=document.createElement('button');button.type='button';
      button.className='item-target-mobile-pokemon';
      button.textContent=`${mon.name} · Lv.${mon.level} · ${mon.currentHp}/${mon.maxHp} ${'PS'}`;
      button.disabled=!this.canUseItemOnMon(id, mon);
      button.onclick=()=>this.giveItemToPokemon(mon);
      mobileList.appendChild(button);
    });
    this.renderSidebar();
    if(this.isBattleVisible()){
      this.battleMode='item-target';this.hideAllActions();
      this.$id('panel-bag-actions').classList.remove('hidden');
      this.$id('panel-bag-actions').textContent='SCEGLI UN POKÉMON DALLA SQUADRA A SINISTRA';
      this.setBattleMsg('A quale Pokémon vuoi dare lo strumento?');
      this.updateBattleWingCloseButtons();
      this.focusBattleSelection('#team-grid button:not(:disabled)');
    } else this.logMsg('A quale Pokémon vuoi dare lo strumento? Sceglilo dalla squadra.');
  },

  cancelItemTargetSelection(){
    if(!this.pendingItemTarget)return;
    this.pendingItemTarget=null;
    this.$id('item-target-prompt').classList.add('hidden');
    if(this.isBattleVisible() && !this.battleBusy){
      if(this.battleMode==='item-target')this.showBagMenu();
      else this.showMainActions();
    }
    else this.renderSidebar();
  },

  async openAbilityCapsule(pokemon){
    if(this.abilityCapsuleOpen || this.isBattleVisible() || this.battleBusy || this.adventureCompleted ||
       !this.team.includes(pokemon) || !this.items.abilityCapsule || this.pendingItemTarget!=='abilityCapsule')return false;
    this.pendingItemTarget=null;this.$id('item-target-prompt').classList.add('hidden');
    this.renderSidebar();
    const overlay=this.$id('ability-capsule-overlay'),list=this.$id('ability-capsule-options');
    this.abilityCapsuleOpen=true;this.abilityCapsuleCandidate=pokemon;this.abilityCapsuleSerial++;overlay.classList.remove('hidden');
    this.$id('ability-capsule-feedback').textContent='';list.replaceChildren();
    this.$id('ability-capsule-cancel').focus();
    // Le abilità consentite sono sempre quelle normali della specie (mai quelle nascoste).
    const allowed=Abilities.normalOptions(speciesData(pokemon.id));
    pokemon.abilityOptions=allowed;
    const choices=Abilities.alternatives(pokemon.ability,allowed);
    if(!allowed.includes(pokemon.ability)||!choices.length){
      this.$id('ability-capsule-description').textContent=pokemon.name;
      this.$id('ability-capsule-feedback').textContent='Questa specie non possiede altre abilità normali. Nessun oggetto consumato.';
      return false;
    }
    this.$id('ability-capsule-description').textContent=`Scegli una nuova abilità normale per ${pokemon.name}. Le abilità nascoste sono escluse.`;
    for(const option of choices){
      const button=document.createElement('button');button.type='button';
      button.textContent=abilityName(option).toUpperCase();
      button.title=abilityData(option)?.desc||'';
      button.onclick=()=>this.confirmAbilityCapsule(pokemon,option,allowed);
      list.appendChild(button);
    }
    list.querySelector('button')?.focus();
    return true;
  },

  confirmAbilityCapsule(pokemon,option,allowed){
    if(!this.abilityCapsuleOpen||this.abilityCapsuleCandidate!==pokemon||
       !this.team.includes(pokemon)||this.isBattleVisible()||this.battleBusy||!this.items.abilityCapsule||
       !allowed.includes(option)||!allowed.includes(pokemon.ability)||option===pokemon.ability)return false;
    const previous=pokemon.ability;
    pokemon.ability=option;pokemon.abilityName=abilityName(option);
    if(pokemon.status&&Abilities.statusBlocked(pokemon,pokemon.status)){pokemon.status=null;pokemon.statusTurns=0;}
    this.items.abilityCapsule--;this.closeAbilityCapsule();this.renderSidebar();
    this.showItemFeedback(`${pokemon.name}: ${abilityName(previous)} → ${pokemon.abilityName}!`);
    this.saveCheckpoint();return true;
  },

  closeAbilityCapsule(){
    this.abilityCapsuleSerial=(this.abilityCapsuleSerial||0)+1;this.abilityCapsuleOpen=false;this.abilityCapsuleCandidate=null;
    this.$id('ability-capsule-overlay')?.classList.add('hidden');
    this.$id('ability-capsule-options')?.replaceChildren();
    if(this.pendingItemTarget==='abilityCapsule'){this.pendingItemTarget=null;this.$id('item-target-prompt')?.classList.add('hidden');}
    this.renderSidebar();
    this.$id('bag-list')?.querySelector('button:not(:disabled)')?.focus({preventScroll:true});
  },

  async giveItemToPokemon(pokemon){
    const id=this.pendingItemTarget;
    if(!id||!this.team.includes(pokemon)||!this.items[id])return;
    if(id==='abilityCapsule')return this.openAbilityCapsule(pokemon);
    if(STONE_EVOLUTIONS[id]) return this.useEeveeStone(pokemon,id);
    if(pokemon.currentHp<=0){this.showItemFeedback('Non puoi usare lo strumento su un Pokémon esausto!');return;}
    if(['rareCandy','goldCandy'].includes(id)){
      if(!this.devMode||this.isBattleVisible()||pokemon.level>=100){
        this.showItemFeedback(pokemon.level>=100?'Livello 100 già raggiunto.':'Le caramelle DEV non si possono usare ora.');return;
      }
      this.pendingItemTarget=null;
      this.$id('item-target-prompt').classList.add('hidden');
      this.renderSidebar();
      return this.useDevCandy(pokemon,id);
    }
    if(['potion','superPotion','hyperPotion'].includes(id) && pokemon.currentHp>=pokemon.maxHp){this.showItemFeedback(`${pokemon.name} ha già tutti i PS!`);return;}
    if(id==='elixir' && pokemon.moves.every(m=>m.currentPp>=m.maxPp)){
      this.showItemFeedback(`${pokemon.name} ha già tutti i PP!`);return;
    }
    this.pendingItemTarget=null;this.$id('item-target-prompt').classList.add('hidden');
    this.items[id]--;
    if(['potion','superPotion','hyperPotion'].includes(id)){
      const before=pokemon.currentHp;
      pokemon.currentHp=Math.min(pokemon.maxHp,pokemon.currentHp+ITEMS[id].heal);
      this.showItemFeedback(`${pokemon.name} recupera ${pokemon.currentHp-before} PS grazie a ${itemLabel(id)}!`);
    } else {
      pokemon.restorePp();this.showItemFeedback(`Elisir: i PP di ${pokemon.name} sono stati ripristinati!`);
    }
    this.renderSidebar();
    if(this.isBattleVisible()){
      this.battleBusy=true;this.hideAllActions();this.updateBattleHUD();
      await this.wait(450);await this.enemyTurn();
    }
  },

  /** Una pietra si consuma soltanto dopo conferma e dopo aver trasformato Eevee. */
  async useEeveeStone(pokemon, id) {
    const target = STONE_EVOLUTIONS[id];
    if (!target || pokemon?.id !== 133 || pokemon.currentHp <= 0 || !this.team.includes(pokemon) ||
      !this.items[id] || this.isBattleVisible() || this.battleBusy || this.pendingItemTarget !== id) return false;
    const accepted = await this.confirmEeveeStone(pokemon, id);
    if (!accepted || pokemon.id !== 133 || !this.team.includes(pokemon) || !this.items[id] ||
      this.pendingItemTarget !== id || this.isBattleVisible()) return false;
    const evolution = pokemon.evolveToSpecies(target);
    if (!evolution) return false;
    this.items[id] -= 1;
    this.pendingItemTarget = null;
    this.$id('item-target-prompt')?.classList.add('hidden');
    this.renderSidebar();
    Dex.record(pokemon, 'caught', `Pietra evolutiva · Piano ${this.floor}`);
    this.showItemFeedback(`${pokemon.name}: evoluzione con ${itemLabel(id)}!`);
    this.saveCheckpoint(); // Salva prima dell'animazione: refresh ≠ pietra duplicata.
    await this.showEvolution(pokemon, evolution);
    this.renderSidebar();
    return true;
  },

  confirmEeveeStone(pokemon, id) {
    const target = STONE_EVOLUTIONS[id];
    const overlay = this.$id('eevee-stone-evolution');
    if (!overlay || !target) return Promise.resolve(false);
    const content = this.$id('eevee-evolution-preview'); content.replaceChildren();
    for (const [species,name] of [[pokemon.id,pokemon.name],[target,speciesData(target)?.name || 'Evoluzione']]) {
      const figure=document.createElement('figure');
      const image=document.createElement('img'); image.src=pokemonSprite(species, {shiny:pokemon.isShiny,gender:pokemon.gender}); image.alt='';
      const caption=document.createElement('figcaption');caption.textContent=name.toUpperCase(); figure.append(image,caption);
      content.append(figure);
      if(species===pokemon.id){const arrow=document.createElement('span');arrow.textContent='→';content.append(arrow);}
    }
    this.$id('eevee-evolution-description').textContent=`Usare ${itemLabel(id)}? La pietra scomparirà dallo zaino dopo l’evoluzione.`;
    this._eeveeEvolutionFocus=document.activeElement;
    overlay.classList.remove('hidden'); this.$id('eevee-evolution-cancel')?.focus();
    return new Promise(resolve => { this._eeveeStoneResolve=resolve; });
  },
  finishEeveeStoneChoice(accept=false) {
    this.$id('eevee-stone-evolution')?.classList.add('hidden');
    const resolve=this._eeveeStoneResolve;this._eeveeStoneResolve=null;
    this._eeveeEvolutionFocus?.focus?.(); resolve?.(accept);
  },

  async useBattleItem(id){
    if(this.battleBusy||this.items[id]<=0||!['pokeball','masterball'].includes(id))return;
    if(this.isRaidActive||['trainer','gym'].includes(this.battleType)){
      this.setBattleMsg('Non puoi catturare Pokémon dei raid o degli allenatori!');return;
    }
    this.battleBusy=true;this.hideAllActions();this.items[id]--;
    const wild=this.enemyMon;
    await this.battleText(`Lanci una ${id==='masterball'?'Master Ball':'Poké Ball'} verso ${wild.name}!`);
    if(this.battleType==='mewtwo' && (this.celestialPhase==='trial'||id!=='masterball')){
      await this.animateCapture(0,false,id);
      await this.battleText('è troppo forte, non puoi catturarlo');
      this.updateBattleHUD();await this.wait(600);await this.enemyTurn();return;
    }
    const odds=captureChance(wild);
    const success=id==='masterball'||Boolean(this.devMode)||Math.random()<odds;
    // Più alta la probabilità, più oscillazioni prima della fuga.
    const shakes=success?3:Math.min(3,Math.floor(Math.random()*4*Math.max(.35,odds)));
    await this.animateCapture(shakes,success,id);
    if(success){
      if(this.battleType==='mewtwo')this.completeMewtwoEncounter();
      if([144,145,146].includes(Number(wild.id)))this.caughtLegendarySpecies.add(Number(wild.id));
      // Record at confirmed capture, even when the player must release it.
      Dex.record(wild,'caught',`${this.battleType} · Piano ${this.floor}`);
      this.soloRunEligible=false;
      Objectives.record('catch',this.runId,{species:wild.id,shiny:wild.isShiny===true});
      this.runStats.captures++;
      await this.battleText(`Preso! ${wild.name} è stato catturato!`);
      if(this.team.length<this.getTeamSlotLimit()){this.team.push(wild);this.endBattle(`Hai catturato ${wild.name}!`);}
      else this.promptTeamFullChoice(wild);
      return;
    }
    await this.battleText(`${wild.name} è uscito dalla Poké Ball!`);
    this.updateBattleHUD();await this.wait(900);await this.enemyTurn();
  },

  promptTeamFullChoice(newMon){
    this.battleBusy=true;
    let o=this.$id('team-full-overlay');
    if(!o){o=document.createElement('div');o.id='team-full-overlay';o.className='full-overlay battle-modal';this.$id('pokenav-screen-root').appendChild(o);}
    o.innerHTML=`<h3>SQUADRA PIENA</h3><p>Hai sbloccato ${this.getTeamSlotLimit()} slot su 6. Sostituisci un Pokémon oppure libera quello catturato.</p><div id="team-full-slots"></div><button class="act-btn" id="discard-new-btn">LIBERA IL POKÉMON</button>`;
    o.classList.remove('hidden');
    const slots=o.querySelector('#team-full-slots');
    this.team.forEach((p,i)=>{const b=document.createElement('button');b.className='act-btn';b.textContent=`${p.name} Lv.${p.level}`;
      b.onclick=()=>{this.team[i]=newMon;if(p===this.activeMon)this.activeMon=newMon;o.classList.add('hidden');this.endBattle(`Catturato ${newMon.name}!`);};slots.appendChild(b);});
    o.querySelector('#discard-new-btn').onclick=()=>{o.classList.add('hidden');this.endBattle(`${newMon.name} è stato liberato.`);};
  },
};

return {captureChance,itemsMethods};
})();
const __m28 = (() => {
const { keyRouter, keyDirection, isSpace, isBack, isTyping, controlsIn, focusControl, moveFocus, visibleControl } = __m10;
// Comandi da tastiera in lotta: WASD/frecce per muoversi, Spazio per confermare, Esc per tornare.
// Usa .click() sui pulsanti: tastiera e mouse eseguono la stessa logica.


const MODALS = ['team-full-overlay', 'battle-confirm', 'learn-move-overlay', 'evolution-overlay', 'gym-leader-intro', 'evolution-choice-overlay'];
const MODAL_BUTTONS = 'button:not(.hidden):not(:disabled)';

/** Griglia 2×2 dei comandi: salta i pulsanti disattivati senza bloccare la selezione. */
function focusGrid(parent, dir) {
  const enabled = controlsIn(parent);
  if (!enabled.length) return;
  const all = controlsIn(parent, 'button');
  const current = all.indexOf(document.activeElement);
  const step = dir === 'up' ? -2 : dir === 'down' ? 2 : dir === 'left' ? -1 : 1;
  if (current < 0) { focusControl(enabled[0]); return; }
  let next = Math.max(0, Math.min(all.length - 1, current + step));
  if (!enabled.includes(all[next])) {
    const toward = step >= 0 ? 1 : -1;
    while (next >= 0 && next < all.length && !enabled.includes(all[next])) next += toward;
    if (next < 0 || next >= all.length) { next = current; while (next >= 0 && next < all.length && !enabled.includes(all[next])) next -= toward; }
  }
  focusControl(enabled.includes(all[next]) ? all[next] : enabled[0]);
}
const activeOr = (items, fallback = items[0]) => items.includes(document.activeElement) ? document.activeElement : fallback;

const battleInputMethods = {
  focusBattleSelection(selector) {
    if (this.isBattleVisible() && selector) focusControl(controlsIn(document, selector)[0]);
  },

  updateBattleWingCloseButtons() {
    const battle = this.isBattleVisible();
    this.$id('battle-close-bag')?.classList.toggle('hidden', !battle || this.battleMode !== 'bag');
    this.$id('battle-close-team')?.classList.toggle('hidden', !battle || this.battleMode !== 'team' || this.pendingForcedSwitch);
  },

  installBattleKeyboardNavigation() {
    keyRouter.add('battle', 60, event => this.handleBattleKey(event));
  },

  handleBattleKey(event) {
    if (event.ctrlKey || event.metaKey || event.altKey || isTyping(event)) return false;
    const get = id => this.$id(id);
    const shown = id => { const el = get(id); return el && !el.classList.contains('hidden'); };
    const modal = MODALS.map(get).find(el => el && !el.classList.contains('hidden'));
    if (!this.isBattleVisible() && !modal) return false;
    const dir = keyDirection(event), space = isSpace(event), back = isBack(event);
    if (!dir && !space && !back) return false;
    event.preventDefault();
    const fresh = space && !event.repeat;

    if (modal) {
      const buttons = controlsIn(modal, MODAL_BUTTONS);
      if (dir) moveFocus(buttons, dir);
      else if (fresh) activeOr(buttons)?.click();
      else if (back) buttons.find(el => /cancel|back|no|discard/i.test(el.id || '') || /ANNULLA|CHIUDI|NO|INDIETRO/i.test(el.textContent || ''))?.click();
      return true;
    }
    if (this.dialogueResolve) { if (fresh) this.acknowledgeDialogue(); return true; }
    if (this.battleBusy) return true;
    if (shown('pokemon-info-overlay')) {
      const buttons = controlsIn(get('pokemon-info-overlay'), MODAL_BUTTONS);
      if (dir) moveFocus(buttons, dir); else if (fresh) activeOr(buttons)?.click(); else if (back) get('pokemon-info-close')?.click();
      return true;
    }
    if (shown('item-target-prompt')) {
      const team = controlsIn(get('team-grid')), mobile = controlsIn(get('item-target-mobile-list'));
      const cancel = get('item-target-cancel'), targets = team.length ? team : mobile, active = document.activeElement;
      if (dir) {
        if (active === cancel) focusControl(targets[0]);
        else if (targets.length && ((dir === 'up' && active === targets[0]) || (dir === 'down' && active === targets.at(-1)))) focusControl(cancel);
        else moveFocus(targets, dir, dir === 'left' || dir === 'right' ? 1 : 2);
      } else if (back) cancel?.click();
      else if (fresh) (active === cancel ? cancel : activeOr(team, team[0] || mobile[0] || cancel))?.click();
      return true;
    }
    if (shown('party-action-menu')) {
      const buttons = controlsIn(get('party-action-menu'), MODAL_BUTTONS);
      if (dir) moveFocus(buttons, dir);
      else if (back) { get('party-close-action')?.click(); focusControl(controlsIn(get('team-grid'))[0]); }
      else if (fresh) activeOr(buttons)?.click();
      return true;
    }
    if (back) {
      if (['bag', 'team', 'moves'].includes(this.battleMode) && !this.pendingForcedSwitch) this.showMainActions();
      return true;
    }
    if (this.pendingForcedSwitch || this.battleMode === 'team') {
      const team = controlsIn(get('team-grid')), close = get('battle-close-team'), canClose = visibleControl(close);
      if (dir) {
        if (canClose && document.activeElement === close) focusControl(team[0]);
        else if (canClose && team.length && ((dir === 'up' && document.activeElement === team[0]) || (dir === 'down' && document.activeElement === team.at(-1)))) focusControl(close);
        else moveFocus(team, dir, dir === 'up' || dir === 'down' ? 2 : 1);
      } else if (fresh) (canClose && document.activeElement === close ? close : activeOr(team))?.click();
      return true;
    }
    if (this.battleMode === 'bag') {
      const tabs = controlsIn(get('bag-tabs')), items = controlsIn(get('bag-list')), close = get('battle-close-bag');
      const active = document.activeElement, activeTab = tabs.find(t => t.classList.contains('active')) || tabs[0];
      if (dir) {
        if (tabs.includes(active)) { if (dir === 'down') focusControl(items[0] || close); else if (dir === 'up') focusControl(close); else moveFocus(tabs, dir); }
        else if (items.includes(active)) {
          if (dir === 'up' && active === items[0]) focusControl(activeTab);
          else if (dir === 'left' || dir === 'right') focusControl(activeTab);
          else if (dir === 'down' && active === items.at(-1)) focusControl(close);
          else moveFocus(items, dir);
        } else if (active === close) focusControl(dir === 'up' ? items.at(-1) || tabs[0] : tabs[0]);
        else focusControl(tabs[0]);
      } else if (fresh) {
        if (active === close) close.click();
        else if (tabs.includes(active)) {
          const selected = active.dataset.bagTab; active.click();
          focusControl([...get('bag-tabs').querySelectorAll('button')].find(t => t.dataset.bagTab === selected));
        } else if (items.includes(active)) active.click();
        else focusControl(tabs[0]);
      }
      return true;
    }
    if (this.battleMode === 'moves') {
      const panel = get('panel-move-actions'), backButton = get('btn-move-back'), moves = controlsIn(panel);
      if (dir) {
        if (document.activeElement === backButton) focusControl(moves[0]);
        else if (dir === 'up' && document.activeElement === moves[0]) focusControl(backButton);
        else focusGrid(panel, dir);
      } else if (fresh) (document.activeElement === backButton ? backButton : activeOr(moves))?.click();
      return true;
    }
    // Griglia principale: LOTTA, BORSA, POKÉMON, FUGA.
    const panel = get('panel-main-actions');
    if (dir) focusGrid(panel, dir);
    else if (fresh) activeOr(controlsIn(panel))?.click();
    return true;
  },
};

return {battleInputMethods};
})();
const __m29 = (() => {
const { createRunState } = __m1;
const { BADGE_LEVEL_CAPS, BADGE_TEAM_SLOTS, OVERWORLD_NPCS, overworldPortraitUrl, overworldSpriteUrl, isTownFloor } = __m3;
const { menusMethods } = __m12;
const { controlsMethods } = __m14;
const { sidebarMethods } = __m15;
const { movementMethods } = __m16;
const { dungeonMethods } = __m17;
const { mapRenderMethods } = __m18;
const { townMethods } = __m19;
const { gymMethods } = __m20;
const { celestialMethods } = __m21;
const { devMethods } = __m22;
const { flowMethods } = __m24;
const { movesMethods } = __m25;
const { uiMethods } = __m26;
const { itemsMethods } = __m27;
const { battleInputMethods } = __m28;
const { keyRouter } = __m10;
// GameEngine: coordina la partita. Le funzionalità vivono in moduli tematici
// (battle/, world/, ui/, systems/) installati sul prototipo come "mixin":
// ogni modulo esporta un oggetto di metodi che condividono lo stesso stato (this).



















const NPC_DIALOGUES = Object.freeze([
  'Hai visto i fiori nuovi vicino alla fontana?',
  'Il Capopalestra non si fa certo battere facilmente.',
  'In questa città i sentieri sono collegati: esplora con calma.',
  'In Nuzlocke il KO è definitivo; in Normale Joy può curare i Pokémon esausti.',
  'Qualche volta la Poké Ball nell’erba nasconde una sorpresa.',
  'Ho sentito che un raro Pokémon abita sulla costa.',
  'Al Centro Pokémon puoi ripristinare PS e PP.',
  'Prima di lasciare la città passa dal Pokémarket.',
  'La Medaglia ti permetterà di superare il prossimo passaggio.',
  'La mia passeggiata preferita è lungo il viale alberato.',
  'Una mossa superefficace può cambiare l’esito di una lotta.',
  'Con la canna da pesca potresti incontrare Pokémon d’acqua.',
]);

const AUTO_DIALOGUE_KEY = 'pokexplorer:auto-dialogue';
function readAutoDialoguePreference() {
  try { return localStorage.getItem(AUTO_DIALOGUE_KEY) === '1'; } catch { return false; }
}

class GameEngine {
  constructor({ music = null } = {}) {
    this.music = music;
    this.gridSize = 10;
    // Stato non legato alla singola run.
    this.devMode = false;
    this.speedMultiplier = 1;
    this.autoDialogue = readAutoDialoguePreference();
    this.autoAdvance = null; // { timer, run }: dialogo in attesa di avanzare da solo
    // Tempo di gioco della run: conta solo con la partita aperta e la scheda visibile.
    this.playClock = setInterval(() => {
      if (this.runStats && this.team?.length && !this.adventureCompleted && document.body.classList.contains('in-run') && !document.hidden)
        this.runStats.playMs = (this.runStats.playMs || 0) + 1000;
    }, 1000);
    this.bagCategory = 'rimedi';
    this.battleToken = 0;
    this.dialogueResolve = null;
    this.evolutionResolve = null;
    this.raidLaunchNonce = 0;
    this.raidVictoryResolutionToken = -1;
    this.pokemonInfoRequest = 0;
    this.abilityCapsuleCandidate = null; this.abilityCapsuleOpen = false; this.abilityCapsuleSerial = 0;
    this.pokemonCenterHealTimer = null; this.pokemonCenterHealSequence = 0; this.pokemonCenterHealAudio = null;
    // Movimento continuo: un solo ripetitore condiviso da tastiera, D-pad e touch.
    this.walkInputs = new Map(); this.walkHoldTimer = null; this.walkReadyAt = 0; this.walkDurationMs = 210; this.walkSequence = 0;
    this.npcSprites = OVERWORLD_NPCS.map(overworldSpriteUrl);
    this.npcDialogues = NPC_DIALOGUES;
    this.trainerSprites = ['bug_catcher', 'youngster', 'lass'].map(overworldPortraitUrl);
    this.currentTrainerSprite = this.trainerSprites[0];
    this.keys = keyRouter;
    this.resetRunState();
    this.preloadImages();
    this.installPokemonSpriteFallbacks();
    this.bindEvents();
    this.updateContinueButton();
    this.scheduleRotomExpression();
  }

  /** Riporta la run ai valori iniziali (nuova partita, ritorno al menu, caricamento). */
  resetRunState() {
    Object.assign(this, createRunState());
  }

  preloadImages() {
    // Tiene vivi i riferimenti finché il browser non ha scaricato i fotogrammi.
    this.preloadedImages = [];
    if (typeof Image === 'undefined') return;
    for (const folder of ['red', 'girl', 'champion'])
      for (const direction of ['up', 'down', 'left', 'right'])
        for (let frame = 0; frame < 3; frame++) {
          const image = new Image();
          image.src = `assets/sprites/player/${folder}/walk/${direction}-${frame}.png`;
          this.preloadedImages.push(image);
        }
  }

  installPokemonSpriteFallbacks() {
    const fallback = 'assets/sprites/ui/pokemon-placeholder.svg';
    for (const id of ['starter-showcase-img', 'pokemon-info-sprite', 'enemy-sprite', 'player-sprite']) {
      const element = this.$id(id);
      element?.addEventListener('error', () => { if (!element.src.endsWith('/pokemon-placeholder.svg')) element.src = fallback; });
    }
  }

  scheduleRotomExpression() {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const eyes = [...document.querySelectorAll('.rotom-face .rotom-eye-ball')];
    if (eyes.length !== 2) return;
    // Un battito, uno sguardo o un occhiolino alla volta, a ritmo casuale.
    eyes.forEach(eye => eye.classList.add('rotom-expression'));
    const next = () => {
      const roll = Math.random();
      const klass = roll < .63 ? 'rotom-closed' : roll < .84 ? 'rotom-looking-left' : roll < .95 ? 'rotom-looking-right' : 'rotom-closed';
      const chosen = roll >= .95 ? [eyes[1]] : eyes;
      chosen.forEach(eye => eye.classList.add(klass));
      setTimeout(() => {
        chosen.forEach(eye => eye.classList.remove(klass));
        this.rotomExpressionTimer = setTimeout(next, 4800 + Math.floor(Math.random() * 7200));
      }, klass === 'rotom-closed' ? 125 : 1100);
    };
    this.rotomExpressionTimer = setTimeout(next, 3000 + Math.floor(Math.random() * 4500));
  }

  badgeCount() { return Math.min(8, new Set((this.badges || []).map((badge, i) => typeof badge === 'object' ? badge.id : i)).size); }
  getLevelCap() { return this.devMode ? 100 : BADGE_LEVEL_CAPS[this.badgeCount()]; }
  getTeamSlotLimit() { return BADGE_TEAM_SLOTS[this.badgeCount()]; }
  hasExpShare() { return Boolean(this.expShareClaimed); }
  isTownFloor() { return isTownFloor(this.floor); }

  // Il primo Pokémon in grado di lottare, nell'ordine della squadra, è quello in campo.
  ensureActivePokemon() {
    this.activeMon = this.team.find(mon => mon.currentHp > 0) || null;
    return this.activeMon;
  }

  toggleExpShare() {
    if (!this.hasExpShare()) return false;
    this.expShareEnabled = !this.expShareEnabled;
    this.logMsg(`Condividi Esperienza ${this.expShareEnabled ? 'attivato' : 'disattivato'}.`);
    this.renderSidebar();
    return true;
  }

  // Un'unica animazione gestita dal compositore, senza aggiornamenti per fotogramma.
  async playMotion(element, frames, duration, easing = 'ease-in-out') {
    if (!element) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      const last = frames[frames.length - 1];
      if (last.opacity !== undefined) element.style.opacity = last.opacity;
      await this.wait(16); return;
    }
    if (!element.animate) { await this.wait(duration); return; }
    try { await element.animate(frames, { duration, easing, fill: 'none' }).finished; } catch { /* animazione annullata */ }
  }

  gameDelay(ms) { return Math.max(0, Math.round(ms / (this.speedMultiplier === 2 ? 2 : 1))); }
  wait(ms) { return new Promise(resolve => setTimeout(resolve, this.gameDelay(ms))); }

  syncAnimationSpeed() {
    for (const animation of document.getAnimations?.() || []) {
      const target = animation.effect?.target;
      if (animation.playState === 'running' && !target?.closest?.('#game-quick-settings') && !target?.classList?.contains?.('walk-arrival'))
        animation.playbackRate = this.speedMultiplier;
    }
  }

  setGameSpeed(value) {
    this.speedMultiplier = value === 2 ? 2 : 1;
    document.documentElement.dataset.gameSpeed = String(this.speedMultiplier);
    const button = this.$id('speed-toggle');
    if (button) { button.textContent = `VELOCITÀ ×${this.speedMultiplier}`; button.setAttribute('aria-pressed', String(this.speedMultiplier === 2)); }
    if (this.walkInputs.size) this.queueContinuousWalk();
    clearInterval(this.speedAnimationTimer);
    this.syncAnimationSpeed();
    if (this.speedMultiplier === 2) this.speedAnimationTimer = setInterval(() => this.syncAnimationSpeed(), 250);
    return this.speedMultiplier;
  }

  /** AUTO DIALOGHI: i dialoghi fuori dalle lotte avanzano da soli dopo il tempo di lettura. */
  setAutoDialogue(on) {
    this.autoDialogue = Boolean(on);
    try { localStorage.setItem(AUTO_DIALOGUE_KEY, this.autoDialogue ? '1' : '0'); } catch { /* memoria non disponibile */ }
    const button = this.$id('auto-dialogue-toggle');
    if (button) { button.textContent = `AUTO DIALOGHI: ${this.autoDialogue ? 'SÌ' : 'NO'}`; button.setAttribute('aria-pressed', String(this.autoDialogue)); }
    // Se un dialogo sta già aspettando, riparte (o si ferma) subito.
    if (this.autoAdvance) this.scheduleAutoAdvance(this.autoAdvance.text, this.autoAdvance.run);
    return this.autoDialogue;
  }

  /** Programma l'avanzamento automatico di un dialogo; run() deve controllare che sia ancora lo stesso. */
  scheduleAutoAdvance(text, run) {
    this.cancelAutoAdvance();
    this.autoAdvance = { text, run, timer: null };
    if (!this.autoDialogue) return;
    const length = String(text || '').length;
    const delay = Math.min(4500, Math.max(1300, 900 + length * 32)) / (this.speedMultiplier === 2 ? 1.6 : 1);
    const pending = this.autoAdvance;
    pending.timer = setTimeout(() => {
      if (this.autoAdvance !== pending) return;
      this.autoAdvance = null;
      if (this.isBattleVisible()) return; // mai dentro le lotte
      run();
    }, delay);
  }

  cancelAutoAdvance() {
    if (this.autoAdvance) clearTimeout(this.autoAdvance.timer);
    this.autoAdvance = null;
  }

  $id(id) { return document.getElementById(id); }
  openWings() { this.$id('rotom-container')?.classList.add('wings-open'); }
  logMsg(text) { const log = this.$id('log-status-text'); if (log) log.textContent = text; }

  /**
   * Telefono: squadra e zaino si aprono come pannelli dal basso (name: 'team', 'bag' o null).
   * Su schermi larghi le ali restano sempre visibili e la funzione non fa nulla.
   */
  setMobileSheet(name) {
    const narrow = globalThis.matchMedia?.('(max-width: 760px)').matches;
    const sheet = narrow && ['team', 'bag'].includes(name) ? name : null;
    if (!sheet && document.body.classList.contains('sheet-team') && !this.isBattleVisible()) this.closePartyActions?.();
    document.body.classList.toggle('sheet-team', sheet === 'team');
    document.body.classList.toggle('sheet-bag', sheet === 'bag');
    document.querySelectorAll('#mobile-sheet-tabs [data-sheet]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.sheet === sheet)));
    return sheet;
  }

  /** Breve dissolvenza con il nome del piano a ogni cambio di piano. */
  showFloorTransition() {
    const box = this.$id('floor-transition');
    if (!box) return;
    const place = this.locationLabel().split(' · ')[0].replace('Città: ', 'Città di ').replace('Luogo: ', '');
    const kind = this.floorKind === 'trainers' ? ' · ZONA ALLENATORI' : this.floorKind === 'calm' ? ' · PERCORSO TRANQUILLO' : '';
    box.querySelector('strong').textContent = `PIANO ${this.floor}`;
    box.querySelector('span').textContent = (place + kind).toUpperCase();
    box.classList.remove('playing');
    void box.offsetWidth; // riavvia l'animazione
    box.classList.add('playing');
    clearTimeout(this.floorTransitionTimer);
    this.floorTransitionTimer = setTimeout(() => box.classList.remove('playing'), this.gameDelay(1700));
  }

  showDiscoveryNotice(message, duration = 2800) {
    let notice = this.$id('discovery-notice');
    if (!notice) {
      notice = document.createElement('div');
      notice.id = 'discovery-notice';
      notice.setAttribute('role', 'status');
      notice.setAttribute('aria-live', 'polite');
      (this.$id('pokenav-screen-root') || document.body).appendChild(notice);
    }
    clearTimeout(this.discoveryNoticeTimer);
    notice.textContent = String(message ?? '');
    notice.classList.toggle('raid-notice', String(message).includes('RAID'));
    notice.classList.add('visible');
    if (duration > 0) this.discoveryNoticeTimer = setTimeout(() => notice.classList.remove('visible'), duration);
  }

  /** Attende un tocco o Invio/Spazio/Esc sull'avviso; annullabile con cancelRaidNotice(). */
  waitForNotice() {
    return new Promise(resolve => {
      let closed = false, removeKey = null, activation;
      const cleanup = () => {
        if (closed) return;
        closed = true;
        if (this.autoAdvance?.run === cleanup) this.cancelAutoAdvance();
        clearTimeout(activation);
        document.removeEventListener('pointerdown', onPointer, true);
        removeKey?.();
        this.$id('discovery-notice')?.classList.remove('visible');
        this.cancelRaidNotice = null;
        resolve();
      };
      const onPointer = event => { event.preventDefault(); event.stopImmediatePropagation(); cleanup(); };
      this.cancelRaidNotice = cleanup;
      this.scheduleAutoAdvance(this.$id('discovery-notice')?.textContent, cleanup);
      activation = setTimeout(() => {
        if (closed) return;
        document.addEventListener('pointerdown', onPointer, true);
        removeKey = this.keys.push('notice', event => {
          if (['Enter', ' ', 'Escape'].includes(event.key)) { event.preventDefault(); cleanup(); }
          return true;
        });
      }, 60);
    });
  }
}

Object.assign(GameEngine.prototype,
  menusMethods, controlsMethods, sidebarMethods, movementMethods, dungeonMethods, mapRenderMethods, townMethods,
  gymMethods, celestialMethods, devMethods, flowMethods, movesMethods, uiMethods, itemsMethods, battleInputMethods);

return {GameEngine};
})();
const __m30 = (() => {
const { isGuestMode } = __m7;


// Regia musicale contestuale: ogni scena ha il proprio tema, con dissolvenze.
// Tutti i brani sono locali (assets/audio).
const SCENES=Object.freeze({
  exploration:'assets/audio/exploration.webm',
  encounter:'assets/audio/encounter.webm',
  gym:'assets/audio/gym.webm',
  legend_trio:'assets/audio/legendary.webm',
  cave:'assets/audio/cave.webm',
  mewtwo:'assets/audio/mewtwo.webm'
});
const STORAGE_KEY='pokexplorer_local_music_volume_v1';
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
class LocalBackgroundMusic{
  constructor(doc=document){
    this.doc=doc;this.effectAudios=new Map();this.audio=doc.getElementById('pokexplorer-background-music');
    this.slider=doc.getElementById('music-volume');
    this.output=doc.getElementById('music-volume-value');
    this.status=doc.getElementById('music-status');
    if(!this.audio)return;
    let saved=null;try{saved=localStorage.getItem(STORAGE_KEY)}catch(_){}
    const numeric=saved===null?NaN:Number(saved);
    this.volume=Number.isFinite(numeric)?clamp(numeric,0,100):10;
    this.scene='exploration';this.started=false;this.trying=false;
    this.transitionId=0;this.transitionFrame=0;this.audio.loop=true;
    this.audio.volume=this.volume/100;
    this.renderVolume();
    this.slider?.addEventListener('input',()=>this.setVolume(Number(this.slider.value)));
    this.onGesture=()=>this.tryStart();
    for(const name of ['pointerdown','touchstart','keydown'])
      doc.addEventListener(name,this.onGesture,{capture:true,passive:true});
    this.audio.addEventListener('play',()=>{
      this.started=true;this.removeGestureListeners();this.setStatus('Musica in riproduzione.');
    });
    this.audio.addEventListener('error',()=>this.setStatus('Traccia audio non disponibile.'));
    this.tryStart();
  }
  renderVolume(){if(this.slider)this.slider.value=String(this.volume);if(this.output)this.output.textContent=`${this.volume}%`;}
  // All in-game audio effects share the site's master MUSIC volume.
  // Effects remain separate from the looping soundtrack; no scene changes.
  registerEffect(audio,gain=1){
    if(!audio)return;
    this.effectAudios.set(audio,clamp(Number(gain)||0,0,1));
    this.updateEffectVolumes();
  }
  updateEffectVolumes(){
    for(const [audio,gain] of this.effectAudios){
      audio.volume=clamp((this.volume/100)*gain,0,1);
    }
  }
  setVolume(raw){
    this.volume=clamp(Number.isFinite(raw)?raw:10,0,100);
    this.renderVolume();
    this.updateEffectVolumes();
    // User mode never persists preferences, including audio volume.
    if(!isGuestMode())try{localStorage.setItem(STORAGE_KEY,String(this.volume))}catch(_){}
    if(!this.transitionFrame)this.audio.volume=this.volume/100;
  }
  setStatus(text){if(this.status)this.status.textContent=text;}
  removeGestureListeners(){for(const name of ['pointerdown','touchstart','keydown'])this.doc.removeEventListener(name,this.onGesture,true);}
  tryStart(){
    if(!this.audio||this.trying||!this.audio.paused)return;
    this.trying=true;
    try{Promise.resolve(this.audio.play()).then(()=>{
      this.trying=false;this.started=true;this.removeGestureListeners();
    }).catch(()=>{this.trying=false;this.setStatus('La musica partirà alla prima interazione.');});}
    catch(_){this.trying=false;}
  }
  // Each area/battle owns its theme; replacement cancels any pending transition.
  setScene(scene){
    if(!Object.prototype.hasOwnProperty.call(SCENES,scene)||!this.audio)return;
    if(scene===this.scene)return;
    this.scene=scene;
    const token=++this.transitionId;
    if(this.transitionFrame){cancelAnimationFrame(this.transitionFrame);this.transitionFrame=0;}
    const start=performance.now(),from=this.audio.volume;
    const fade=()=>{
      if(token!==this.transitionId)return;
      const progress=clamp((performance.now()-start)/420,0,1);
      this.audio.volume=from*(1-progress);
      if(progress<1)this.transitionFrame=requestAnimationFrame(fade);
      else {
        this.transitionFrame=0;
        this.audio.pause();
        this.audio.src=SCENES[scene];this.audio.load();
        this.audio.loop=true;this.audio.volume=0;
        const begin=()=>{
          if(token!==this.transitionId)return;
          const started=performance.now();
          const rise=()=>{
            if(token!==this.transitionId)return;
            const p=clamp((performance.now()-started)/650,0,1);
            this.audio.volume=(this.volume/100)*p;
            this.transitionFrame=p<1?requestAnimationFrame(rise):0;
          };
          this.transitionFrame=requestAnimationFrame(rise);
        };
        try{Promise.resolve(this.audio.play()).then(begin).catch(()=>{
          this.audio.volume=this.volume/100;this.trying=false;
          this.setStatus('Tocca o premi un tasto per avviare la musica.');
          this.installResume();
        });}catch(_){this.installResume();}
      }
    };
    this.transitionFrame=requestAnimationFrame(fade);
  }
  installResume(){
    for(const name of ['pointerdown','touchstart','keydown'])this.doc.addEventListener(name,this.onGesture,{capture:true,passive:true});
  }
}

return {SCENES,LocalBackgroundMusic};
})();
const __m31 = (() => {
const Checkpoints = __m7;
// Accesso con Discord tramite Supabase e salvataggio cloud dei checkpoint.
// Usa solo l'URL pubblico e la chiave "publishable": segreti e service_role restano sul server.


const SDK_URL = 'js/vendor/supabase.umd.js';
const DISCORD_AVATAR_HOSTS = ['cdn.discordapp.com', 'media.discordapp.net', 'cdn.discordapp.net'];
let client = null;
const settings = () => globalThis.POKEX_PUBLIC_CONFIG || {};

function enabled() {
  // Aperto come file (doppio clic su index.html) Discord non può tornare alla pagina:
  // si gioca in locale e i progressi restano in questo browser.
  if (globalThis.location?.protocol === 'file:') return false;
  const { supabaseUrl, publishableKey } = settings();
  return /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(supabaseUrl || '') && typeof publishableKey === 'string' && publishableKey.trim().length > 15;
}
const getClient = () => client;

/** URL di ritorno di OAuth: GitHub Pages serve la stessa pagina come cartella e come index.html. */
function redirectUrl(loc = globalThis.location) {
  const local = loc?.protocol === 'http:' && /^(localhost|127\.0\.0\.1)$/.test(loc.hostname);
  if (!loc || !(loc.protocol === 'https:' || local)) throw Error('Discord login requires HTTPS or localhost; file:// is not supported');
  return loc.origin + loc.pathname.replace(/\/index\.html$/, '/');
}

function allowedDiscordAvatar(value) {
  if (typeof value !== 'string' || !value) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && DISCORD_AVATAR_HOSTS.includes(url.hostname) ? url.href : null;
  } catch { return null; }
}

/** Supabase può esporre i dati Discord nel profilo oppure nell'identità OAuth. */
function profile(user) {
  const md = user?.user_metadata || {};
  const identity = user?.identities?.find(entry => entry.provider === 'discord');
  const identityData = identity?.identity_data || {};
  const name = String(md.full_name || md.name || md.user_name || md.preferred_username || identityData.full_name || identityData.name || identityData.user_name || 'ALLENATORE').trim().slice(0, 28);
  const urls = [];
  const add = candidate => {
    const url = allowedDiscordAvatar(candidate);
    if (url && !urls.includes(url)) urls.push(url);
  };
  for (const value of [md.avatar_url, md.picture, md.avatarUrl, identityData.avatar_url, identityData.picture, identityData.avatarUrl]) add(value);

  // Se il provider passa solo ID Discord e hash dell'avatar, ricostruiamo l'URL.
  // user.id è un UUID Supabase: NON è l'ID Discord.
  const discordId = [identity?.provider_id, identityData.provider_id, identityData.sub, identityData.id, md.provider_id]
    .find(value => /^[0-9]{15,22}$/.test(String(value || '')));
  const hash = [identityData.avatar, identityData.avatar_hash, md.avatar, md.avatar_hash]
    .find(value => typeof value === 'string' && /^[a-zA-Z0-9_]{10,128}$/.test(value));
  if (discordId && hash) {
    const extension = hash.startsWith('a_') ? 'gif' : 'png';
    add(`https://cdn.discordapp.com/avatars/${discordId}/${hash}.${extension}?size=128`);
  }
  // Alcuni browser rifiutano il CDN principale: proviamo anche il media CDN Discord.
  const primary = urls.slice();
  for (const source of primary) {
    const url = new URL(source);
    if (url.hostname === 'cdn.discordapp.com' && url.pathname.startsWith('/avatars/')) {
      url.hostname = 'media.discordapp.net';
      add(url.href);
    }
  }
  // L'avatar predefinito Discord è utile anche per gli account senza avatar personalizzato.
  if (discordId) {
    const index = Number((BigInt(discordId) >> 22n) % 6n);
    add(`https://cdn.discordapp.com/embed/avatars/${index}.png`);
  }
  return { name, avatar: urls[0] || null, avatarFallbacks: urls.slice(1) };
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

async function setup() {
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

async function signIn() {
  if (!client) throw Error('OAuth not initialized');
  const { error } = await client.auth.signInWithOAuth({ provider: 'discord', options: { redirectTo: redirectUrl(), scopes: 'identify' } });
  if (error) throw error;
}
async function signOut() {
  if (!client) throw Error('OAuth not initialized');
  const { error } = await client.auth.signOut();
  if (error) throw error;
}
async function currentUser() {
  if (!client) return null;
  const { data, error } = await client.auth.getUser();
  return error ? null : data?.user || null;
}

async function loadCloud() {
  const user = await currentUser();
  if (!user) return null;
  const { data, error } = await client.from('pokexplorer_saves').select('revision,run,updated_at').eq('user_id', user.id).maybeSingle();
  if (error) throw error;
  return data;
}

/** Scrive con controllo di revisione: non sovrascrive mai progressi più recenti di un altro dispositivo. */
async function saveCloud(snapshot, expectedRevision) {
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

return {enabled,getClient,redirectUrl,profile,setup,signIn,signOut,loadCloud,saveCloud};
})();
const __m32 = (() => {
const Dex = __m8;
const { speciesData, pokemonSprite } = __m0;
const { typeName } = __m4;
const { STAT_LABELS_IT } = __m2;
const { evolutionFamily } = __m3;
const { keyRouter, trapTab } = __m10;
// Pokédex di Kanto (RotomDex): elenco, ricerca, filtri, scheda, varianti, habitat e diario.
// Nessuno spoiler: nomi, tipi e varianti compaiono solo dopo averli scoperti.







const el = id => document.getElementById(id);
const make = (tag, className = '', text) => { const n = document.createElement(tag); if (className) n.className = className; if (text != null) n.textContent = String(text); return n; };
const LABELS = { seen: 'AVVISTATO', caught: 'CATTURATO', unknown: 'NON SCOPERTO', genderless: 'SENZA SESSO', male: 'MASCHIO ♂', female: 'FEMMINA ♀', normal: 'NORMALE', shiny: 'SHINY ✨' };
const HABITATS = { cave: 'Grotta', forest: 'Foresta', grassland: 'Prateria', mountain: 'Montagna', rare: 'Raro', 'rough-terrain': 'Terreno roccioso', sea: 'Mare', urban: 'Città', 'waters-edge': 'Riva' };
let active = 25, tab = 'scheda', previousFocus = null, toastTimer = null;
const discoveries = [];
let canOpen = () => true;
const setOpenGuard = fn => { canOpen = typeof fn === 'function' ? fn : () => true; };

const name = id => speciesData(id)?.name || '?????';
const isOpen = () => Boolean(el('pokedex-overlay')) && !el('pokedex-overlay').classList.contains('hidden');

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

function render() { status(); renderList(); renderDetail(); }

function open() {
  if (!canOpen()) return;
  previousFocus = document.activeElement;
  el('pokedex-overlay').classList.remove('hidden');
  if (!Dex.getSpecies(active)) { const first = Dex.entries().species[0]; if (first) active = Number(first.species_id); }
  render();
  el('dex-search').focus();
}
function close() { el('pokedex-overlay')?.classList.add('hidden'); previousFocus?.focus?.(); showDiscovery(); }

function init() {
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

return {setOpenGuard,isOpen,render,open,close,init};
})();
const __m33 = (() => {
const { loadGameData } = __m0;
const { GameEngine } = __m29;
const { LocalBackgroundMusic } = __m30;
const Checkpoints = __m7;
const Cloud = __m31;
const Dex = __m8;
const Objectives = __m9;
const Dialogs = __m11;
const DexUI = __m32;
const ObjectivesUI = __m13;
// Avvio: carica i dati di gioco, gestisce l'accesso (Discord o Utente) e la
// sincronizzazione dei salvataggi con il cloud, poi crea il motore.











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

function setProfile({ name, avatar, avatarFallbacks = [] }) {
  $('trainer-discord-name').textContent = name;
  const img = $('trainer-discord-avatar');
  const fallback = 'assets/sprites/ui/trainer-avatar-fallback.svg';
  const candidates = [avatar, ...avatarFallbacks].filter(Boolean);
  img.referrerPolicy = 'no-referrer';
  img.onerror = () => {
    if (candidates.length) img.src = candidates.shift();
    else { img.onerror = null; img.src = fallback; }
  };
  img.src = candidates.shift() || fallback;
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

return {};
})();
})();
