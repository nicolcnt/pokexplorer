// Crea build/pokexplorer.js: tutti i moduli di js/ e i dati di data/ in un solo script classico.
// Uno script classico funziona anche aprendo index.html come file (file://), dove i moduli ES
// e le richieste dei JSON vengono bloccati dal browser.
//   npm run build          una volta
//   npm run dev            ricompila a ogni modifica
import * as esbuild from 'esbuild';

const watch = process.argv.includes('--watch');
const options = {
  entryPoints: ['js/main.js'],
  outfile: 'build/pokexplorer.js',
  bundle: true,
  format: 'iife',
  target: ['es2020', 'chrome90', 'firefox90', 'safari15'],
  minify: !watch,
  sourcemap: watch ? 'inline' : false,
  legalComments: 'none',
  banner: { js: '/* Pokéxplorer · pacchetto generato da tools/build.mjs: non modificare, modifica i file in js/ */' },
  logLevel: 'info',
};
if (watch) await (await esbuild.context(options)).watch();
else await esbuild.build(options);
