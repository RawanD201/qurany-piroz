# The Quranic 3D simulations (/3d/)

The home page's "بگەڕە سێ-ڕەهەندییەکان" card opens a sheet with the Haram explorer (`/haram/`)
and the Quranic 3D simulations, each served from `/3d/<id>/`.

- **Source:** the simulations are separate Vite + three.js projects kept outside this repository
  (by default in `~/Downloads/3D Simulations/`). Only their build output is committed here, as
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
