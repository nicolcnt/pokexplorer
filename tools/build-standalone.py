#!/usr/bin/env python3
"""Fallback offline per esbuild: bundle statico dei moduli ES di questo progetto.
Preserva gli scope di modulo e le dipendenze; non richiede npm o servizi remoti.
Non è un compilatore JS generico: valida solo gli import/export adottati da Pokéxplorer.
"""
import json
import re
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
ENTRY=ROOT/'js/main.js'
OUT=ROOT/'build/pokexplorer.js'
IMPORT_RE=re.compile(r'^import\s+([\s\S]*?)\s+from\s+[\'\"]([^\'\"]+)[\'\"](?:\s+with\s*\{[^}]+\})?\s*;',re.M)
DECL_RE=re.compile(r'^export\s+(?:async\s+)?(?:function|class|const|let|var)\s+([A-Za-z_$][\w$]*)',re.M)
LIST_RE=re.compile(r'^export\s*\{([\s\S]*?)\}\s*;',re.M)
modules=[];indices={};processed=set();active=set()
def visit(path):
    path=path.resolve()
    if path in processed: return
    if path in active: raise RuntimeError(f'circular import: {path}')
    if not path.is_relative_to(ROOT): raise RuntimeError('import outside project')
    active.add(path)
    if path.suffix!='.js':raise RuntimeError(f'Unexpected module: {path}')
    code=path.read_text(encoding='utf-8'); imports=IMPORT_RE.findall(code)
    for spec,source in imports:
        child=(path.parent/source).resolve()
        if child.suffix=='.js':visit(child)
        elif child.suffix!='.json':raise RuntimeError(f'Unexpected import {source}')
    active.remove(path); processed.add(path);indices[path]=len(modules); modules.append((path,code,imports))
visit(ENTRY)
output=['/* Pokéxplorer Beta Version · bundle offline generato dai moduli ES. */','(() => {','"use strict";']
for path,code,imports in modules:
    declarations=[]
    for spec,source in imports:
        child=(path.parent/source).resolve()
        if child.suffix=='.json':
            if not re.fullmatch(r'[A-Za-z_$][\w$]*',spec.strip()):raise ValueError('json default import')
            declarations.append('const '+spec.strip()+' = '+json.dumps(json.loads(child.read_text(encoding='utf-8')),ensure_ascii=True,separators=(',',':'))+';')
        else:
            variable=f'__m{indices[child]}'
            if spec.strip().startswith('* as '):
                declarations.append('const '+spec.strip()[5:].strip()+' = '+variable+';')
            elif spec.strip().startswith('{'):
                declarations.append('const '+spec.strip()+' = '+variable+';')
            else: raise ValueError(f'Unsupported import: {spec}')
    exports=DECL_RE.findall(code)
    for group in LIST_RE.findall(code):
        for raw in group.split(','):
            name=raw.strip()
            if not name: continue
            if ' as ' in name: raise ValueError(f'Export alias not implemented: {name}')
            exports.append(name)
    code=IMPORT_RE.sub('',code)
    code=LIST_RE.sub('',code)
    code=re.sub(r'^export\s+(?=(?:async\s+)?(?:function|class|const|let|var)\s+)', '', code,flags=re.M)
    if re.search(r'^\s*(?:import|export)\s',code,re.M):raise ValueError(f'Untransformed module statement: {path}')
    output.extend([f'const __m{indices[path]} = (() => {{',*declarations,code,'return {'+','.join(dict.fromkeys(exports))+'};','})();'])
output.append('})();\n')
OUT.parent.mkdir(parents=True,exist_ok=True)
OUT.write_text('\n'.join(output),encoding='utf-8')
print(f'Bundled {len(modules)} modules into {OUT.relative_to(ROOT)} ({OUT.stat().st_size:,} bytes)')
