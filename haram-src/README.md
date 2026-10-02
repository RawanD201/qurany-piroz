# haram-src — source of the Masjid al-Haram 3D Explorer

Built with Vite + TypeScript + three.js into `../haram/`, which Vercel serves at
<https://qurany-piroz.com/haram>. This folder itself is not deployed.

```bash
npm ci
npm run dev          # http://localhost:5178/haram/
npm run release      # type check + lint + tests, then build into ../haram
npm run serve:site   # whole site, Vercel-style, at http://localhost:4180/haram
npm run i18n:export  # after changing English text: rewrite src/i18n/locales/en.json
```

The plan of the mosque is generated from OpenStreetMap data by `scripts/osm/make-plan.py`
(see HARAM.md, "The real plan").

Full documentation — architecture, adding places, translations, quality, deployment, browser
support, security model and limitations — is in [`../HARAM.md`](../HARAM.md). Sources are in
[`../SOURCES.md`](../SOURCES.md) and licences in [`../ASSETS_LICENSES.md`](../ASSETS_LICENSES.md).
