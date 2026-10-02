// Serves the whole Qurany Piroz site locally the way Vercel serves it, for testing /haram
// together with the existing pages:
//
//   - files from the repository root, minus anything listed in .vercelignore
//   - vercel.json: redirects (before files), cleanUrls, rewrites (after files) and headers
//   - directory indexes at both /dir and /dir/ (Vercel's default, trailingSlash unset)
//
// Usage (from haram-src/):  npm run serve:site   → http://localhost:4180/haram
// It is a test aid, not a production server.

import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('../..', import.meta.url)));
const PORT = Number(process.env.PORT || 4180);
const config = JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf8'));
const ignored = existsSync(join(ROOT, '.vercelignore'))
  ? readFileSync(join(ROOT, '.vercelignore'), 'utf8')
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#'))
  : [];

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.glb': 'model/gltf-binary',
  '.wasm': 'application/wasm',
  '.webmanifest': 'application/manifest+json',
  '.txt': 'text/plain; charset=utf-8',
};

/** Converts the path-to-regexp subset used in vercel.json into a RegExp. */
function pattern(source) {
  let re = '';
  for (let i = 0; i < source.length; ) {
    if (source.startsWith('(.*)', i)) {
      re += '(.*)';
      i += 4;
    } else if (source[i] === '/' && source[i + 1] === ':') {
      const match = /^\/:([A-Za-z_]+)(\*)?/.exec(source.slice(i));
      re += match[2] ? '(?:/(.*))?' : '/([^/]+)';
      i += match[0].length;
    } else {
      re += source[i].replace(/[.+?^${}|[\]\\()*]/g, '\\$&');
      i += 1;
    }
  }
  return new RegExp(`^${re}$`);
}

const redirects = (config.redirects || []).map((r) => ({ ...r, re: pattern(r.source) }));
const rewrites = (config.rewrites || []).map((r) => ({ ...r, re: pattern(r.source) }));
const headerRules = (config.headers || []).map((h) => ({ ...h, re: pattern(h.source) }));

function isIgnored(relative) {
  return ignored.some((name) => relative === name || relative.startsWith(`${name}/`));
}

/** Finds the file Vercel would serve for a path, or null. */
function lookup(pathname) {
  const relative = normalize(decodeURIComponent(pathname)).replace(/^[/\\]+/, '').replace(/[/\\]+$/, '');
  if (relative.split(sep).includes('..') || isIgnored(relative.split(sep).join('/'))) return null;
  const base = join(ROOT, relative);
  const candidates = [base];
  if (config.cleanUrls) candidates.push(`${base}.html`);
  candidates.push(join(base, 'index.html'));
  for (const candidate of candidates) {
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  }
  return null;
}

createServer((req, res) => {
  const url = new URL(req.url || '/', `http://localhost:${PORT}`);
  let pathname = url.pathname;

  for (const rule of headerRules) {
    if (rule.re.test(pathname)) for (const { key, value } of rule.headers) res.setHeader(key, value);
  }

  for (const r of redirects) {
    if (r.re.test(pathname)) {
      res.writeHead(r.permanent ? 308 : 307, { Location: r.destination });
      res.end();
      return;
    }
  }
  if (config.cleanUrls && pathname.endsWith('.html')) {
    const clean = pathname.replace(/(\/index)?\.html$/, '') || '/';
    res.writeHead(308, { Location: clean + url.search });
    res.end();
    return;
  }

  let file = lookup(pathname);
  if (!file) {
    for (const r of rewrites) {
      if (r.re.test(pathname)) {
        pathname = r.destination;
        file = lookup(pathname);
        break;
      }
    }
  }
  if (!file) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404: NOT_FOUND');
    return;
  }
  if (!res.hasHeader('Cache-Control')) res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  res.setHeader('Content-Type', TYPES[extname(file).toLowerCase()] || 'application/octet-stream');
  createReadStream(file).pipe(res);
}).listen(PORT, () => {
  console.log(`Qurany Piroz site (Vercel-like) at http://localhost:${PORT}/  —  explorer: http://localhost:${PORT}/haram`);
});
