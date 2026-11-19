#!/usr/bin/env node
/**
 * Builds AllMosques (the 3D Earth showing that prayer never stops) into this site at /mosques/.
 *
 * AllMosques is a separate Vite project kept outside this repository (by default in
 * "../AllMosques", next to this site's folder). Only its build output is copied here, like
 * haram/ and 3d/. It is built with its base path set to /mosques/, so its scripts, fonts and data
 * load from there, and its "Return to the website" link goes to /.
 *
 * Usage:
 *   node scripts/sync-allmosques.mjs
 *   node scripts/sync-allmosques.mjs --src "/path/to/AllMosques"
 *
 * Run `npm install` in the AllMosques folder once before building it.
 */
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const srcIndex = args.indexOf('--src');
const SRC = srcIndex >= 0 ? args[srcIndex + 1] : join(SITE, '..', 'AllMosques');
const OUT = join(SITE, 'mosques');

if (!existsSync(join(SRC, 'vite.config.js'))) {
  console.error(`✗ No AllMosques project at ${SRC} (use --src)`);
  process.exit(1);
}

await rm(OUT, { recursive: true, force: true });
process.stdout.write('Building AllMosques… ');
const r = spawnSync('npx', ['vite', 'build', '--base', '/mosques/', '--outDir', OUT, '--emptyOutDir'], {
  cwd: SRC,
  env: { ...process.env, BASE_PATH: '/mosques/', VITE_WEBSITE_URL: '/' },
  encoding: 'utf8',
});
if (r.status !== 0) {
  console.log('failed');
  console.error(r.stdout, r.stderr);
  process.exit(1);
}
console.log('done → mosques/');
