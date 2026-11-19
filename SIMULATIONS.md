# The Quranic 3D simulations (/3d/)

The home page's "بگەڕە سێ-ڕەهەندییەکان" card opens a sheet with the Haram explorer (`/haram/`)
and the Quranic 3D simulations, each served from `/3d/<id>/`.

- **Source:** the simulations are separate Vite + three.js projects kept outside this repository
  (by default in `~/Documents/3D Simulations/`). Only their build output is committed here, as
  with `haram/`.
- **List:** `simulations.js` holds the order, the titles (English, Central Kurdish, Arabic) and the
  main passage of each. The sheet is built from it, and the sync script builds what it lists.
- **Rebuilding:** after changing a simulation, run
  `node scripts/sync-3d-simulations.mjs <id>` (or no id for all; `--src <path>` if the projects
  are elsewhere). Each is built with `--base /3d/<id>/`, and its "Return to the website" link
  goes to `/`.
- **Languages:** the simulations are in English, Central Kurdish (verses from the Hevi
  translation) and Arabic (verse with al-Tafsir al-Muyassar). The sheet opens them with
  `?lang=` set from this page's language: `ckb`, `ar` and `en` as they are, Badini and Hawrami
  as Central Kurdish, and every other language as English.
- **Headers:** `vercel.json` gives `/3d/` the same security headers as the rest of the site, and
  long-term caching for each simulation's hashed `assets/`.

# AllMosques (/mosques/)

The home page's third card, "نوێژ هەرگیز ناوەستێت", opens AllMosques: a 3D Earth with the world's
mosques that shows each of the five prayers is always being prayed somewhere.

- **Source:** a separate Vite + three.js project kept outside this repository (by default in
  `../AllMosques`, next to this site's folder). Only its build output is committed here.
- **Rebuilding:** after changing it, run `node scripts/sync-allmosques.mjs` (`--src <path>` if the
  project is elsewhere). It is built with `--base /mosques/`, and its "Return to the website" link
  goes to `/`.
- **Languages:** English, Central Kurdish and Arabic, opened with `?lang=` the same way as the
  simulations.
- **Data:** `mosques/data/more-mosques.json` (about 11 MB, 3 MB compressed) is fetched only when a
  reader ticks "More mosques". The Earth pictures in `mosques/earth/` (NASA Blue Marble and
  relief, 3.3 MB in all) load smallest first: 1K, then 4K, then 8K on computers. `vercel.json`
  caches both for a day, and the hashed `assets/` for good.
