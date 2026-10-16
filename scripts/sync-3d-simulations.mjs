#!/usr/bin/env node
/**
 * Builds the Quranic 3D simulations into this site, one folder each under /3d/<name>/.
 *
 * The simulations are separate Vite projects kept outside this repository (by default in
 * ~/Documents/3D Simulations). Only their build output is copied here, like haram/. Each one is
 * built with its base path set to /3d/<name>/ (vite --base, which overrides each project's own
 * base-path setting) so its scripts, fonts and favicon load from there, and its "Return to the
 * website" link goes to /.
 *
 * Usage:
 *   node scripts/sync-3d-simulations.mjs                     # every simulation in simulations.js
 *   node scripts/sync-3d-simulations.mjs people-of-lot ...   # only these
 *   node scripts/sync-3d-simulations.mjs --src "/path/to/3D Simulations"
 *
 * Run `npm install` in a simulation's folder once before building it.
 */
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { rm } from 'node:fs/promises';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const srcIndex = args.indexOf('--src');
const SRC = srcIndex >= 0 ? args.splice(srcIndex, 2)[1] : join(homedir(), 'Documents', '3D Simulations');

// The list shown on the home page is the source of truth for which simulations are published.
const listed = [...readFileSync(join(SITE, 'simulations.js'), 'utf8').matchAll(/\bid: '([a-z0-9-]+)'/g)].map((m) => m[1]);
const names = args.length ? args : listed;

let failed = 0;
for (const name of names) {
  if (!listed.includes(name)) {
    console.error(`✗ ${name}: not listed in simulations.js`);
    failed++;
    continue;
  }
  const project = join(SRC, name);
  if (!existsSync(join(project, 'vite.config.ts'))) {
    console.error(`✗ ${name}: no Vite project at ${project}`);
    failed++;
    continue;
  }
  const out = join(SITE, '3d', name);
  await rm(out, { recursive: true, force: true });
  process.stdout.write(`Building ${name}… `);
  const r = spawnSync('npx', ['vite', 'build', '--base', `/3d/${name}/`, '--outDir', out, '--emptyOutDir'], {
    cwd: project,
    env: { ...process.env, BASE_PATH: `/3d/${name}/`, VITE_WEBSITE_URL: '/', VITE_MAIN_SITE_URL: '/' },
    encoding: 'utf8',
  });
  if (r.status !== 0) {
    console.log('failed');
    console.error(r.stdout, r.stderr);
    failed++;
    continue;
  }
  console.log('done');
}
process.exit(failed ? 1 : 0);
