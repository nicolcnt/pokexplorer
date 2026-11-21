import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = new URL('../../', import.meta.url).pathname;
const files = dir => fs.readdirSync(path.join(ROOT, dir), { recursive: true }).map(f => path.join(dir, String(f)));
const sources = ['index.html', 'privacy.html', ...files('css'), ...files('js').filter(f => f.endsWith('.js') && !f.includes('vendor'))]
  .filter(f => fs.statSync(path.join(ROOT, f)).isFile());

test('ogni risorsa citata in HTML, CSS e JavaScript esiste', () => {
  const missing = [];
  for (const file of sources) {
    const text = fs.readFileSync(path.join(ROOT, file), 'utf8');
    for (const [, ref] of text.matchAll(/["'(`]((?:\.\.\/)?(?:assets|data|css|js)\/[^"'`)\s?#]+)/g)) {
      if (ref.includes('${') || ref.endsWith('/')) continue; // percorsi composti a runtime
      const resolved = path.normalize(path.join(ROOT, file.startsWith('css/') ? 'css' : '', ref));
      if (!fs.existsSync(resolved)) missing.push(`${file} → ${ref}`);
    }
  }
  assert.deepEqual(missing, []);
});

test('nessuna dipendenza di rete nel gioco (solo Supabase, configurabile)', () => {
  const external = [];
  for (const file of sources) {
    const text = fs.readFileSync(path.join(ROOT, file), 'utf8');
    for (const [url] of text.matchAll(/https?:\/\/[^\s"'`)<>]+/g)) {
      if (/discord\.(gg|com)|supabase|cdn\.discordapp|media\.discordapp|nicolcnt\.github\.io/.test(url)) continue;
      external.push(`${file}: ${url}`);
    }
  }
  assert.deepEqual(external, []);
});
