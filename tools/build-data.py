#!/usr/bin/env python3
"""Genera i dati di gioco locali (data/*.json) e scarica gli sprite Pokémon.

Fonte: PokeAPI (https://pokeapi.co, licenza BSD-3) tramite i repository
PokeAPI/api-data e PokeAPI/pokeapi su GitHub, e PokeAPI/sprites per le immagini.
Il gioco non interroga più PokéAPI a runtime: tutto viene servito dal sito.

Uso:  python tools/build-data.py            (usa la cache in tools/.cache)
      python tools/build-data.py --no-sprites
Rieseguire solo quando cambiano le specie o le regole dei dati.
"""
import csv, io, json, sys, time, urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CACHE = Path(__file__).resolve().parent / '.cache'
API = 'https://raw.githubusercontent.com/PokeAPI/api-data/master/data/api/v2/'
CSV = 'https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/'
SPRITES = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
# Regole moderne e coerenti: tutti i 151 Pokémon usano i set di mosse di
# Ultrasole/Ultraluna (7ª generazione), l'ultima versione che include l'intero
# Pokédex di Kanto con mosse apprese per livello.
VERSION_GROUP = 'ultra-sun-ultra-moon'
SPECIES = range(1, 152)
LANG = 'it'
# Mosse citate direttamente dal motore (Metronomo, Scontro, ecc.).
EXTRA_MOVES = {'struggle': 165, 'metronome': 118, 'tackle': 33, 'scratch': 10, 'pound': 1}


def url_id(url):
    return int(url.rstrip('/').rsplit('/', 1)[1])


def fetch(url, binary=False, retries=4):
    key = CACHE / url.split('://', 1)[1].replace('/', '_')
    if key.exists():
        data = key.read_bytes()
    else:
        for attempt in range(retries):
            try:
                with urllib.request.urlopen(url, timeout=30) as r:
                    data = r.read()
                break
            except Exception:
                if attempt == retries - 1:
                    raise
                time.sleep(1.5 * (attempt + 1))
        CACHE.mkdir(parents=True, exist_ok=True)
        key.write_bytes(data)
    return data if binary else data.decode('utf-8')


def api(path):
    return json.loads(fetch(API + path.strip('/') + '/index.json'))


def localized(entries, field='name'):
    for e in entries or []:
        if e.get('language', {}).get('name') == LANG:
            return e.get(field)
    return None


def latest_flavor(entries, field='flavor_text'):
    found = [e for e in entries or [] if e.get('language', {}).get('name') == LANG]
    if not found:
        return None
    text = found[-1].get(field) or ''
    return ' '.join(text.replace('\f', ' ').replace('\n', ' ').split())


def pmap(fn, items, workers=8):
    with ThreadPoolExecutor(workers) as pool:
        return list(pool.map(fn, items))


def build():
    print('Specie…')
    pokemon = pmap(lambda i: api(f'pokemon/{i}'), SPECIES)
    species = pmap(lambda i: api(f'pokemon-species/{i}'), SPECIES)

    move_ids, ability_ids, out_species = dict(EXTRA_MOVES), {}, []
    for p, s in zip(pokemon, species):
        learnset = []
        for m in p['moves']:
            for d in m['version_group_details']:
                if d['version_group']['name'] == VERSION_GROUP and d['move_learn_method']['name'] == 'level-up':
                    learnset.append([d['level_learned_at'], m['move']['name']])
                    move_ids[m['move']['name']] = url_id(m['move']['url'])
        learnset.sort(key=lambda x: (x[0], x[1]))
        if not learnset:
            raise SystemExit(f"Nessuna mossa per {p['name']} in {VERSION_GROUP}")
        abilities = [a['ability']['name'] for a in sorted(p['abilities'], key=lambda a: a['slot']) if not a['is_hidden']]
        ability_ids.update({a['ability']['name']: url_id(a['ability']['url']) for a in p['abilities'] if not a['is_hidden']})
        sprites = {k: v for k, v in p['sprites'].items() if isinstance(v, str)}
        out_species.append({
            'id': p['id'], 'slug': p['name'],
            'name': localized(s['names']) or p['name'].title(),
            'types': [t['type']['name'] for t in sorted(p['types'], key=lambda t: t['slot'])],
            'stats': {st['stat']['name']: st['base_stat'] for st in p['stats']},
            'evYield': {st['stat']['name']: st['effort'] for st in p['stats'] if st['effort']},
            'baseExp': p['base_experience'], 'height': p['height'], 'weight': p['weight'],
            'abilities': abilities,
            'growth': s['growth_rate']['name'], 'genderRate': s['gender_rate'],
            'captureRate': s['capture_rate'],
            'habitat': (s.get('habitat') or {}).get('name'),
            'flavor': latest_flavor(s['flavor_text_entries']),
            'femaleSprites': bool(sprites.get('front_female')),
            'learnset': learnset,
        })

    print(f'Mosse ({len(move_ids)})…')
    flag_names = {row['id']: row['identifier'] for row in csv.DictReader(io.StringIO(fetch(CSV + 'move_flags.csv')))}
    flags_by_move = {}
    for row in csv.DictReader(io.StringIO(fetch(CSV + 'move_flag_map.csv'))):
        flags_by_move.setdefault(row['move_id'], set()).add(flag_names.get(row['move_flag_id'], ''))
    moves = {}
    for m in pmap(lambda mid: api(f'move/{mid}'), sorted(move_ids.values())):
        meta = m.get('meta') or {}
        flags = flags_by_move.get(str(m['id']), set())
        entry = {
            'name': localized(m['names']) or m['name'].replace('-', ' ').title(),
            'type': m['type']['name'], 'category': m['damage_class']['name'],
            'power': m['power'] or 0, 'accuracy': m['accuracy'], 'pp': m['pp'] or 1,
            'priority': m['priority'], 'target': m['target']['name'],
            'desc': latest_flavor(m['flavor_text_entries']),
        }
        optional = {
            'ailment': (meta.get('ailment') or {}).get('name') if (meta.get('ailment') or {}).get('name') not in (None, 'none') else None,
            'ailmentChance': meta.get('ailment_chance') or 0,
            'critRate': meta.get('crit_rate') or 0, 'drain': meta.get('drain') or 0,
            'healing': meta.get('healing') or 0, 'flinchChance': meta.get('flinch_chance') or 0,
            'minHits': meta.get('min_hits') or 0, 'maxHits': meta.get('max_hits') or 0,
            'statChance': meta.get('stat_chance') or 0, 'effectChance': m.get('effect_chance') or 0,
            'statChanges': [[c['stat']['name'], c['change']] for c in m['stat_changes']],
            'flags': sorted(f for f in flags if f in {'contact', 'punch', 'bite', 'sound', 'ballistic', 'powder', 'pulse', 'heal', 'protect'}),
        }
        entry.update({k: v for k, v in optional.items() if v})
        moves[m['name']] = entry

    print(f'Abilità ({len(ability_ids)})…')
    abilities = {}
    for a in pmap(lambda aid: api(f'ability/{aid}'), sorted(ability_ids.values())):
        abilities[a['name']] = {'name': localized(a['names']) or a['name'].replace('-', ' ').title(),
                                'desc': latest_flavor(a['flavor_text_entries'])}

    data_dir = ROOT / 'data'
    data_dir.mkdir(exist_ok=True)
    meta = {'source': 'PokeAPI (pokeapi.co) — dati BSD-3-Clause', 'versionGroup': VERSION_GROUP,
            'generated': time.strftime('%Y-%m-%d')}
    for name, payload in [('pokemon', out_species), ('moves', moves), ('abilities', abilities)]:
        (data_dir / f'{name}.json').write_text(json.dumps({'meta': meta, 'data': payload}, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')
        print(f'  data/{name}.json', round((data_dir / f'{name}.json').stat().st_size / 1024), 'KB')
    return out_species


def download_sprites(out_species):
    print('Sprite…')
    target = ROOT / 'assets' / 'pokemon'
    jobs = []
    for s in out_species:
        variants = ['', 'back/', 'shiny/', 'back/shiny/']
        if s['femaleSprites']:
            variants += ['female/', 'back/female/', 'shiny/female/', 'back/shiny/female/']
        for v in variants:
            jobs.append((SPRITES + v + f"{s['id']}.png", target / v / f"{s['id']}.png"))

    def get(job):
        url, path = job
        if path.exists():
            return
        path.parent.mkdir(parents=True, exist_ok=True)
        try:
            path.write_bytes(fetch(url, binary=True))
        except Exception as err:  # alcune varianti femminili non esistono di spalle
            print('  mancante:', url, err)
    pmap(get, jobs)
    print('  file:', sum(1 for _ in target.rglob('*.png')))
    # Le varianti femminili esistono solo per alcune specie: registra quelle reali.
    path = ROOT / 'data' / 'pokemon.json'
    doc = json.loads(path.read_text(encoding='utf-8'))
    for s in doc['data']:
        s['femaleSprites'] = (target / 'female' / f"{s['id']}.png").exists()
    path.write_text(json.dumps(doc, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')


if __name__ == '__main__':
    species = build()
    if '--no-sprites' not in sys.argv:
        download_sprites(species)
