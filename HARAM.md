# Masjid al-Haram 3D Explorer — `/haram`

An educational, first-person 3D exploration of Masjid al-Haram, served at
**<https://qurany-piroz.com/haram>** (and `/haram/`). Visitors walk around the Kaaba, the
Mataf, Safa, Marwah and the Mas'a, and tap or click important places to read short, sourced
descriptions. It runs in the browser on desktops, phones and tablets — no app, plug-in,
keyboard, mouse, Pointer Lock or full screen is required.

It can be viewed by day or by night (the moon button in the top bar; the choice is
remembered). The plan follows the real mosque — its outlines, gates, minarets and surroundings
come from OpenStreetMap — but heights, interiors and details are simplified: it is an
**approximate representation**, not an architectural survey. See
[What is approximate](#what-is-approximate).

Related documents: [`SOURCES.md`](SOURCES.md) (where every description comes from) and
[`ASSETS_LICENSES.md`](ASSETS_LICENSES.md) (licences — no third-party 3D assets are used).

---

## Contents

1. [How `/haram` works](#how-haram-works)
2. [Working on the explorer](#working-on-the-explorer)
3. [Architecture](#architecture)
4. [How the world and its assets are loaded](#how-the-world-and-its-assets-are-loaded)
5. [Adding a place](#adding-a-place) · [Adding an object](#adding-an-object) · [Writing descriptions](#writing-descriptions)
6. [Languages and translations](#languages-and-translations)
7. [The real plan](#the-real-plan) · [Day and night](#day-and-night) · [The sun of Kurdistan](#the-sun-of-kurdistan) · [The kiswah](#the-kiswah) · [The Mataf floor, Zamzam and the clock](#the-mataf-floor-zamzam-and-the-clock) · [The Black Stone, Maqam Ibrahim and the inside of the Kaaba](#the-black-stone-maqam-ibrahim-and-the-inside-of-the-kaaba) · [The stairs and the open door](#the-stairs-and-the-open-door) · [People praying and going round the Kaaba](#people-praying-and-going-round-the-kaaba) · [Hajj and Umrah guide](#hajj-and-umrah-guide) · [Quran references](#quran-references)
8. [Movement, camera and controls](#movement-camera-and-controls)
9. [Graphics quality and performance](#graphics-quality-and-performance)
10. [Deployment](#deployment)
11. [Browser compatibility](#browser-compatibility)
12. [Accessibility](#accessibility)
13. [Security and copy protection](#security-and-copy-protection)
14. [What is approximate](#what-is-approximate) · [Known limitations](#known-limitations)
15. [Testing](#testing)

---

## How `/haram` works

The rest of qurany-piroz.com is plain static HTML with no build step: Vercel serves the
repository as-is. The explorer follows the same model:

```
haram-src/   TypeScript + three.js source, built with Vite   (NOT deployed)
haram/       the built explorer: index.html + hashed assets  (deployed, committed to git)
```

- `haram-src/` is built locally (`npm run release`) into `haram/`, and the output is
  committed. Vercel needs no build step and no configuration change for it, so the existing
  site's deployment is untouched.
- Vercel serves `haram/index.html` at both `/haram` and `/haram/` (explicit rewrites in
  `vercel.json` make this certain).
- Every asset URL is **absolute** (`/haram/assets/…`, set by `base: '/haram/'` in
  `vite.config.ts`), so nothing breaks when the page is opened without the trailing slash.
- `haram-src/` is excluded from deployment by `.vercelignore`, and `vercel.json` redirects
  `/haram-src/*` to `/haram` as a second line of defence.

The page loads in two steps so that the first screen appears immediately:

1. `index.html` (≈1.6 kB gzipped) shows the loading screen as plain HTML, with the entry
   script (≈5 kB) and stylesheet (≈4 kB). The entry script checks for WebGL 2 straight away.
2. Only then are three.js and the explorer downloaded (≈180 kB gzipped in total, as separate
   long-cacheable chunks), the world is generated with a progress bar, and the visitor presses
   **Start exploring**.

## Working on the explorer

Requirements: Node.js 20.19+ (22 or 24 recommended).

```bash
cd haram-src
npm ci
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server at <http://localhost:5178/haram/> with hot reload |
| `npm run check` | Type checking, linting and unit tests |
| `npm run build` | Production build into `../haram/` |
| `npm run release` | `check`, then `build` — use this before committing |
| `npm run serve:site` | Serves the **whole site** like Vercel does (clean URLs, rewrites, headers, `.vercelignore`) at <http://localhost:4180/> — explorer at `/haram` |

After `npm run release`, commit both `haram-src/` and `haram/`. Old hashed files in `haram/`
are removed by each build.

Development-only helpers (removed from production builds):

- `window.__haram` in the browser console exposes the renderer, scene, camera and player.
- `?simulate=no-webgl`, `webgl-blocked`, `network` or `texture` on the dev URL exercises each
  error screen.

URL options (production too): `?place=safa` opens at a place with its panel open;
`?time=night` (or `day`) opens in that light without changing the visitor's saved choice.

## Architecture

```
haram-src/src/
├── main.ts                  Entry: device check, loading screen, lazy-loads the explorer
├── config.ts                Movement, camera and interaction tuning
├── settings.ts              Visitor preferences (localStorage, validated)
├── boot/                    Small first-download code (no three.js)
│   ├── support.ts           Feature detection: WebGL 2, touch, pointer, memory, motion…
│   ├── loading-screen.ts    Progress bar, status, "Start exploring"
│   └── fatal-error.ts       Error screens with retry / text version / home
├── app/explorer.ts          Orchestrates everything; render-on-demand frame loop
├── data/                    Pure data and maths — no three.js, unit-tested
│   ├── layout.ts            ALL world dimensions and positions (approximate, documented)
│   ├── structure.ts         Derived pier/column/wall/dome positions (shared by 3D + collision)
│   ├── levels.ts            The levels: the ground, the clock-tower balcony, inside the Kaaba
│   ├── kaaba-interior.ts    The room inside the Kaaba: sizes, plaques, door leaves, entry and views
│   ├── kaaba-stairs.ts      The stairs at the Kaaba's door, and the doorway between ground and room
│   ├── places.ts            Place names and descriptions (the file to edit or translate)
│   ├── place-locations.ts   Marker anchors, "Go there" viewpoints, tap shapes
│   ├── sources.ts           Reference list cited by the descriptions
│   ├── praying-people.ts    Where the people praying are, their postures, dress and footprints
│   ├── tawaf-crowd.ts       The lanes and paces of the people going round the Kaaba
│   ├── quran.ts             Surat names, "Al-Baqarah (2): 125" references, the app's verse links
│   └── sun-emblem.ts        The sun from the flag of Kurdistan (its outline and colour)
├── engine/
│   ├── renderer.ts          WebGLRenderer + first-person camera rig
│   └── quality.ts           Presets, initial tier detection, adaptive step-down
├── world/                   Procedural 3D content
│   ├── build-world.ts       Builds the scene in steps with progress
│   ├── textures.ts          Canvas-painted texture sets: colour + relief/polish/metal maps
│   ├── materials.ts         Material library
│   ├── geometry.ts          Static batcher (merging), arches, UVs
│   ├── kaaba.ts             Kaaba, kiswah band, doorway, Black Stone, Mizab, Hijr, Maqam
│   ├── kaaba-door.ts        Door curtain (down or lifted) and the stairs on wheels
│   ├── kaaba-interior.ts    The room inside the Kaaba (shown while the visitor is in it or the door is open)
│   ├── sun-emblem.ts        The sun in the sky, drawn as the sun of Kurdistan
│   ├── figures.ts           People's figures: bodies, faces, dress, postures, colours
│   ├── praying-people.ts    The people praying (detailed near the visitor, simple far away)
│   ├── tawaf-crowd.ts       The people going round the Kaaba, walking on the graphics card
│   ├── mosque.ts            Floors, porticoes, halls, columns, walls, gates, Mas'a, minarets
│   ├── surroundings.ts      City blocks, hills, clock tower (schematic backdrop)
│   └── environment.ts       Sky (stars at night), sun/floodlight, static shadow map,
│                            day/night reflection maps, fog
├── physics/
│   ├── collision.ts         2D spatial-hash collision + line of sight
│   └── build-colliders.ts   Collision world from the same layout data
├── player/
│   ├── player.ts            Position, velocity, gravity, turning (pure, unit-tested)
│   ├── keyboard.ts          WASD / arrows / Shift
│   ├── look-controls.ts     Drag-to-look (mouse/touch/pen), optional Pointer Lock, taps
│   └── joystick.ts          On-screen joystick for touch screens
├── interaction/
│   ├── markers.ts           HTML "ⓘ Place" buttons projected over the 3D view
│   └── picking.ts           Raycast picking with occlusion check
├── ui/                      Interface (semantic HTML, no innerHTML)
│   ├── hud.ts               Top bar, compass, touch/desktop controls
│   ├── back-link.ts         Back to qurany-piroz.com (top bar and loading screen)
│   ├── info-panel.ts        Place panel (side panel / bottom sheet)
│   ├── places-menu.ts       Places / Explore menu
│   ├── settings-panel.ts    Quality, speed, sensitivity, markers
│   ├── help-panel.ts        Controls, about the model, credits
│   ├── about-panel.ts       "Made in Kurdistan" under the flag, opened from the sun
│   ├── dialog.ts            Accessible modal (focus trap, Esc, focus return)
│   ├── text-mode.ts         Text-only version (no WebGL needed)
│   └── place-text.ts, feedback.ts, dom.ts
├── i18n/                    locale.ts (LocalizedText, fallback) and strings.ts (UI text)
└── styles/main.css
```

Key design decisions:

- **One source of truth for the world.** `data/layout.ts` + `data/structure.ts` drive both
  what is drawn and what the visitor collides with, so the two can never disagree. The tests
  build the collision world in Node and flood-fill it to prove every place is reachable.
- **Render on demand.** A frame is drawn only when something visible changes. A still view
  costs nothing — important for phone batteries and heat.
- **Markers are HTML buttons**, not 3D sprites: crisp, ≥44×44 px, keyboard- and
  screen-reader-accessible, and never dependent on hover.

## How the world and its assets are loaded

There are no model or texture files. At load time:

1. **Textures** are painted onto canvases from seeded, tileable noise and drawing code
   (`world/textures.ts`), one per frame so the progress bar keeps moving. Each is a *set*: a
   colour map plus, on the medium and high tiers, matching detail maps derived from the same
   design — a normal map for relief (marble joints, chiselled stone blocks, raised embroidery,
   coffered ceilings), a roughness map for polish (glossy marble, matte joints, shiny thread) and
   a metalness map (only the gold and silver thread is metal). The marble repeats every 4 × 4
   slabs with a different tone per slab, so the floor does not look tiled. If a texture fails,
   its materials fall back to a plain colour and loading continues with a notice.
2. **Geometry** is generated from the layout data, transformed into world space and merged per
   material and per 110 m patch (`StaticBatcher`): about 50–80 draw calls and ~100k triangles
   for the whole mosque, while frustum culling still works.
3. **Lighting**: a sky shader, a hemisphere light and a fixed sun. The shadow map is rendered
   **once** (the sun never moves), then reused. Reflections come from a small prefiltered
   environment map of the sky.
4. Shaders are compiled ahead of the first frame (`compileAsync`) to avoid a stutter.

## Adding a place

1. **Text** — add an entry to `PLACES` in `haram-src/src/data/places.ts`: `id` (also add it to
   the `PlaceId` union), `category`, `name`, `arabicName`, `summary`, `description`
   (paragraphs), optional `modelNote`, and `sources` (ids from `data/sources.ts`; add new
   sources there and to `SOURCES.md`).
2. **Location** — add the same id to `build()` in `data/place-locations.ts`:
   - `anchor`: where the ⓘ marker floats (metres; see the coordinate notes in `layout.ts`),
   - `markerRange`: how near the visitor must be for the marker to show,
   - `viewpoint` + `lookAt`: where "Go there" puts the visitor and what they face,
   - optional `pick`: an invisible box/cylinder over the object so tapping it opens the panel,
   - optional `priority`, `sightClearance`, `alwaysVisible`.
3. Run `npm run check`. The tests fail if the place has no location (or vice versa), cites an
   unknown source, or if its viewpoint is inside a wall or unreachable on foot.

The Places menu, marker, information panel and text-only version pick the new place up
automatically.

## Adding an object

- **Generated (preferred).** Add a builder in `world/` (or extend `mosque.ts` / `kaaba.ts`)
  that calls `batch.add(geometry, materialKey, { matrix })`. Put its dimensions in
  `data/layout.ts`. If visitors should not walk through it, add matching shapes in
  `physics/build-colliders.ts` (`addCircle`, `addBox`, `addSegment`). New surface looks go in
  `world/materials.ts` (and `world/textures.ts` for a new painted texture).
- **From a model file (GLB).** Only with a verified licence (see `ASSETS_LICENSES.md`).
  Compress it first (e.g. `npx @gltf-transform/cli optimize in.glb out.glb --compress meshopt`),
  import it as a URL (`import url from './assets/x.glb?url'`) so it gets a hashed, cacheable
  name, load it with three's `GLTFLoader` (+ `MeshoptDecoder`) inside `build-world.ts`, and
  report it as a non-essential step: on failure, warn and continue. Add collision shapes for
  it as above.

## Writing descriptions

- Concise, factual and respectful. One idea per paragraph.
- Paraphrase sources; cite them in the text where a specific source supports a specific
  statement (e.g. "(Sahih al-Bukhari 1584)").
- Every statement must be supported by the place's listed sources. Do not invent dates,
  measurements, traditions or claims of significance.
- Put the model's simplifications in `modelNote`, not in the description.
- English text lives only in `data/places.ts` (content) and `i18n/strings.ts` (interface).
  The loading screen's English is also in `haram-src/index.html` so it shows before any script
  runs — keep the two in step.

## Languages and translations

The explorer is available in the **22 languages of the Qurany Piroz app**: Kurdish — Sorani
(`ckb`), Badini (`kmr`, Arabic script), Hawrami (`sdh`) and Kurmancî (`ku`, Latin script) —
English, Arabic, Turkish, Persian, Urdu, Modern and Classical Syriac (`syr`, `syc`), Hebrew,
German, French, Spanish, Swedish, Russian, Hindi, Bengali, Malay, Simplified Chinese and
Japanese (`src/i18n/locale.ts`, with each language's writing direction, `lang` tag and digits).

**Choosing the language.** `?lang=<code>`, then the language the visitor picked anywhere on
qurany-piroz.com (`localStorage` key `qp-lang`, shared with the main pages' `i18n.js`), then
the browser's languages, then English. Settings has a language list; choosing one remembers it
site-wide and reloads the explorer in it.

**How text is stored.** English is written in the source (`i18n/strings.ts`,
`data/places.ts`, `data/rites.ts`). `i18n/catalog.ts` gives every text a stable key
(`ui.…`, `place.<id>.…`, `guide.<id>.step.<step>.…`). `src/i18n/locales/en.json` is the
English catalog; each translation is `src/i18n/locales/<code>.json` with the same keys. Only
the visitor's language is downloaded (a separate chunk, loaded before the loading screen is
translated); anything missing falls back to English, and if a translation cannot be loaded the
explorer stays in English and left to right rather than mixing the two.

**Changing English text.** Edit the source, then run `npm run i18n:export` to rewrite
`en.json`. The tests then list every translation whose keys or `{placeholders}` no longer
match, so each language can be updated (`npm run check` fails until they are).

**Right-to-left.** Arabic, Kurdish (Arabic script), Persian, Urdu, Hebrew and Syriac set
`dir="rtl"`: text, lists and callouts use logical CSS properties and mirror; the controls keep
their positions; the place markers are laid out left to right (their anchor maths depends on
it) with their labels in their own direction.

**Fonts.** Arabic-script text — Central Kurdish, Badini, Hawrami, Arabic, Persian and Urdu —
is set in **Vazirmatn** (SIL Open Font License, see `ASSETS_LICENSES.md`), the same font as
the main pages, so it looks the same on every device and every Kurdish letter (ڕ ڵ ێ ۆ ە ڤ)
is drawn properly. It is self-hosted (the page's security policy allows only its own fonts):
one variable font, every weight, 111 KB, declared in `styles/main.css` with a `unicode-range`
for Arabic script, so Latin text stays in the system font and a visitor reading a language in
another script downloads it only when Arabic text is shown. Its flat baseline also suits Urdu,
which the system would otherwise set in tall Nastaliq. The Arabic place names in the panels and
the Arabic recitations in the guide use it too, in every language (the systems' own Arabic fonts
vary and are often thin); Syriac uses a Syriac font where the device has one.

**About the translations.** They follow the app's own translations for terminology, and the
tests check every language for completeness, placeholders and markup. The religious content
(the places and the Hajj and Umrah guide) in particular should be **reviewed by a qualified
native speaker** of each language before being relied on; Badini, Hawrami and Syriac most of
all.

## The real plan

The mosque is laid out from **OpenStreetMap** data (map data © OpenStreetMap contributors,
[ODbL](https://opendatacommons.org/licenses/odbl/)), at real positions and scale, in metres from
the centre of the Kaaba (`src/data/plan-data.ts`, generated):

- the **courtyard** and the **Ottoman portico** — a C-shaped ring around its north, west and
  south sides, open to the east where the courtyard runs up to the halls' façade — with its
  arcade, rows of columns and three rows of small domes;
- the **halls** of the first Saudi and King Fahd expansions: their real outer outline, inner
  façade, columns, roof and **every mapped entrance** on the outer walls (the named gates —
  King Abdulaziz, King Fahd, Bab al-Umrah, Bab al-Fath, Bab al-Salam — as large portals, the
  rest as doorways);
- the **Mas'a**, along its true axis from Safa to Marwah (about 380 m between their centres),
  with the domes over the two hills on its roof and the green-lit section about a third of the
  way along;
- the **King Abdullah expansion** (with King Abdullah Gate) and the **northern building**,
  shown from outside only;
- the **thirteen minarets** at their mapped positions and heights;
- the **Kaaba's orientation** (its door wall faces about 56.5° from north, as mapped) and
  Maqam Ibrahim's position;
- the **Makkah Royal Clock Tower** at its real position, about 490 m south, and **151 mapped
  buildings around** — the Abraj Al-Bait podium and towers, the hotels, the Safa Palace —
  raised between their mapped heights. Beyond them a generic city fills the valley, ringed by
  generated rocky mountains.

To regenerate the plan (from `haram-src/`):

```bash
curl -sS -H "User-Agent: QuranyPiroz-HaramExplorer/1.0" -H "Accept: application/json" --data-urlencode "data@scripts/osm/haram.overpass" https://overpass-api.de/api/interpreter -o /tmp/haram-osm.json
```

```bash
python3 scripts/osm/make-plan.py /tmp/haram-osm.json > src/data/plan-data.ts
```

`structure.ts` derives every pier, column, wall segment and gate opening from these outlines
(shared by the geometry and the collision world); the tests check that the visitor can walk
from the start to every place on the real plan. The attribution is in the Help panel's
credits and in `ASSETS_LICENSES.md`.

## Day and night

The moon button in the top bar switches between day and night (a toggle button: its
`aria-pressed` state is announced). The choice is saved with the other settings; `?time=night`
opens a page in night view without changing it. The switch happens behind a short fade.

Night view is an **artistic impression** of the floodlit mosque, not a record of its lighting,
and is described that way in the Help panel. Real floodlighting uses many lamps; dozens of
dynamic lights would be far too slow on phones, so instead (`world/environment.ts`,
`world/materials.ts` → `applyTimeOfDay`):

- the sun becomes one steep, near-white "floodlight" (short shadows; the static shadow map is
  redrawn once on switching),
- the sky becomes deep blue with a sparse star field and a warm glow from the city near the
  horizon,
- outdoor stone, domes and marble get a warm emissive glow (lit façades),
- light fittings glow: floodlights along the roof edges and lamp rings on the minarets
  (plain fittings by day),
- the city and the clock-tower complex show scattered lit windows,
- reflections come from a separate environment map of a lamp-ringed night sky, so gold thread,
  marble and silk catch warm highlights. It is built the first time night is shown, then cached.

The Kaaba's walls get little light from the steep night "floodlight". As in photographs of
the floodlit Kaaba, the silk stays black — it gives off just enough light in its own woven
pattern to stand out from the night sky, and reflects less of the cool sky — while the gold
embroidery of the belt, door curtain and corner panels glows warmly through its own gold.

Everything else (interiors, markers, controls) is unchanged. Tune the look in `PRESETS`
(environment.ts), `NIGHT_GLOW` and `applyTimeOfDay` (materials.ts).

## The sun of Kurdistan

By day the sun in the sky is drawn as the **golden sun from the flag of Kurdistan**: 21 rays round
a disc, `#febd11`, the same outline as the sun emblem of the zriwe app (`data/sun-emblem.ts`). It is
always shown by day, with no setting, and hidden at night.

**Tapping or clicking it** opens "Made in Kurdistan" (`ui/about-panel.ts`): the flag of Kurdistan
(the public-domain "Flag of Kurdistan.svg" from Wikimedia Commons, see `ASSETS_LICENSES.md`), and a
note that the website was built in Iraqi Kurdistan by Aland Kawa Ali (ئەلەند کاوە عەلی in Kurdish), a
Kurdish developer, and that the sun in the sky is the sun from the flag of Kurdistan. The pointer turns into a hand over it, as over
the places.

How it works (`world/sun-emblem.ts`):

- It is a flat shape, not part of the sky shader, so the depth buffer hides it behind buildings and
  it can be tapped. Each time it is drawn it is moved out from the camera along `SUN_DIRECTION`
  (2800 m, inside the far plane) and turned to face the camera, so it keeps its place in the sky
  wherever the visitor stands, the balcony included. It looks about 6° across, like the sky's own
  sun disc before it.
- The visible sky now draws only the soft glow round the sun (the `sunDisc` uniform is 0); the
  reflection maps keep the bright disc, so polished marble and gold still catch the sun.
- `Picker.pickSun` counts a tap within its angular radius (with 10% leeway) when nothing solid
  stands in front of it. A place in front of it, such as the Kaaba, takes the tap instead, and from
  inside the Kaaba the sun cannot be tapped.

## The kiswah

The kiswah follows the real cloth (Wikipedia — Kiswah, see `SOURCES.md`) and is shown with
**photographs of real kiswah** (see `ASSETS_LICENSES.md`):

- **The black silk and its woven calligraphy.** The cloth carries inscriptions woven into the
  silk itself, black on black: diamonds of zigzag lines with «الله» in each and the Shahada in
  Thuluth script. One repeat of that pattern — 49 cm across (two chevrons span the 98 cm width
  of a kiswah panel) by 77 cm — was extracted from a photograph of a real kiswah fragment
  (`scripts/process-kiswah-weave.py`): the letters are found by local contrast, independent of
  the museum lighting, and sampled along the pattern's own lattice, so the tile repeats
  seamlessly. The explorer turns it into the silk's colour (the letters a shade lighter than
  the ground), relief and sheen (the woven letters are smoother, so they catch the light).
  The Kaaba's walls use texture coordinates that read left to right from outside on every
  wall, so the calligraphy — the name of Allah above all — is never mirrored.
- **The door curtain** from a 2016 public-domain photograph (the golden door shows through its
  opening).
- **The belt** from three real panels — two historical belt panels from the Khalili Collection
  and the modern dedication panel, which sits where it does on the real belt (door wall, right
  of the curtain). With only three panels available they repeat, so the verses are not in
  their true order. One of the historical panels is embroidered in silver; all three are
  graded to gold on black (`gildBelt`), as the belt is today.

The photographs load **after** the explorer starts (about 770 KB of WebP); until then, or if
they fail, the Kaaba shows plain black silk (fine twill and soft folds, no invented pattern),
generated belt and curtain designs. Relief, sheen and metal maps are derived from the
photographs, so the real thread glints under light.

The square corner panels (kardashiyyat) have no suitable open-licensed photograph, so they
remain generated, abstract designs (a star rosette in a medallion on each corner edge).

## The Mataf floor, Zamzam and the clock

**Mataf tiles face the Kaaba.** As on the real floor, the courtyard's marble is laid in rows
around the Kaaba: straight rows parallel to each wall, swinging round each corner in a fan of
tiles, becoming nearly circular further out (`world/mataf-floor.ts`). Ordinary UVs would lay
every floor on one north–south grid, which crosses the Kaaba diagonally, so the courtyard
floor's material computes its texture coordinates in the fragment shader from the distance to
the Kaaba's base (across the rows) and the position along the row. Gradients and the normal
map's tangent frame come from the same mapping, so the joins between straight runs and corner
fans leave no seams. If a future three.js changes the shader text it patches, the floor falls
back to the plain grid (with a console warning) instead of failing. The halls keep their own
grid.

**Zamzam.** The well lies beneath the Mataf, about 21 m east of the Kaaba on the side of Maqam
Ibrahim, in line with the Multazam. A circle on the floor, lettered "بئر زمزم", marks the spot
(`world/floor-markings.ts`); tapping it opens the Zamzam panel. The real floor marking was
removed in 2003, so the panel says plainly that this circle is drawn for the model.

**The clock tower's faces** (`world/clock-face.ts`) are drawn on canvases and show the current
time in Makkah (Arabia Standard Time, UTC+3, read from the device clock); the hands move once a
minute, and only then is the view redrawn. As on the real clock, the faces are white with black
hands by day and green with white hands at night, with the Saudi coat of arms (two crossed
swords, hilts at the base, a palm above) at the centre, "Allahu akbar" above the north and south
faces and the Shahada above the east and west ones. The dial's markings, hands and emblem are a
simplified drawing; the lettering uses the device's Arabic system font. Zoom in to read it.

**The clock tower's balcony.** "View from the balcony" in the clock tower's panel (or
`/haram?view=balcony`) takes the visitor up to a railed viewing balcony beneath the north clock
face, about 370 m up, looking down on the mosque; "Back down" (top left) returns them to where
they were. The real tower's top floors house the Clock Tower Museum, with an observation deck
higher up; this balcony's position and size are approximate (`BALCONY` in `layout.ts`).
How it works:

- The balcony is a **separate collision world** (`buildBalconyWorld()`), a few metres deep and
  32 m long, whose bounds are its railings and the tower wall, with its floor at the balcony's
  height. Every other way of moving ("Go there", guide steps and routes, "Return to the start")
  brings the visitor back down to the ground world first.
- **At the railing:** the visitor arrives at the railing and can walk right up to it, so the
  balcony's own floor does not hide the mosque below. The balustrade is frameless glass with a
  slim handrail and posts only at its corners, so nothing stands in the view.
- **Two depth ranges:** seen from ~600 m, layers a few centimetres apart (the kiswah's belt)
  would flicker with a close near plane, but the railing is close. So the view is drawn twice:
  the world with its near plane 2 m out, then — on its own render layer, after clearing depth —
  the balcony with a near plane of 5 cm (`renderView` in `explorer.ts`). The lights are on both
  layers; the scene's background colour is lifted for the second pass, as three.js would
  otherwise clear the frame.
- **Markers** skip the ground-level line-of-sight test up there, label the main places at any
  distance, and hide the clock tower's own marker, which is overhead. Double-click walking is
  for the ground only.

## The Black Stone, Maqam Ibrahim and the inside of the Kaaba

These are drawn after photographs and published figures (see `SOURCES.md`), with what is not
published estimated and said so in the panels.

**The Black Stone** (`blackStoneParts()` in `world/kaaba.ts`) sits in the eastern corner about
1.5 m up. Its frame, as photographed, is a broad plate of polished silver shaped like a shield
with a pointed foot, wrapped round the corner (the corner shows as a rounded crease down its
middle), rising to a thick rolled rim round an oval opening about 20 × 16 cm; inside, set a little
deeper, the stone's dark fragments in their brownish paste (an illustrative mosaic, painted in
`textures.ts`). The plate is built on the outside of the corner, so no part of it dips into the
kiswah; a test checks that, and that the stone faces out.

**Maqam Ibrahim** (`MAQAM` in `data/layout.ts`, `buildMaqam` in `world/kaaba.ts`): a round base
of white marble trimmed with green granite; an eight-sided cage of pale, polished gold-plated
brass, one face towards the Kaaba, with an arched arabesque grille on each face (transparent
between its bars, glass behind it); a frieze, a cornice, a shallow eight-sided roof, a collar, a
small drum and dome, and a beaded finial with a crescent. Inside stand the crystal cover (1.30 m
high, 80 cm across at its foot, as published) and the stone in its casing with its two
footprints. The cage's size and the base's height are estimated from photographs.

**Inside the Kaaba** (`world/kaaba-interior.ts`, data in `data/kaaba-interior.ts`). "Go inside the
Kaaba" in the Kaaba's or its door's panel, the "Inside the Kaaba" places, or
`/haram?view=kaaba` take the visitor into the room, a level of its own with its own collision
world (`buildKaabaInteriorWorld()`) at the door's sill height; "Leave the Kaaba" (top left)
brings them out in front of the door. Visitors cannot normally go in; the notice on arrival says
the view is for learning. As photographed: cream marble walls halfway up with dark green marble
skirting and bands, green silk with a woven pattern above and on the ceiling (in shallow folds),
three pillars of polished wood with gilded bands and capitals on square bases, antique lamps of
silver and gold hanging close together from a brass rod along the pillars, the small white
cupboard with its green marble top, carved stone plaques set into the marble (their carving is
an abstract pattern, not lettering), embroidered panels on the cloth, the inside of the door,
and Bab al-Tawbah, golden, on the right, in front of the staircase in the north corner. The
room's measurements are not published, so it is fitted within the outer walls.

The room is closed, so it uses none of the scene's lights: walls, floor and ceiling carry their
light baked into their vertices (`lightAt`: a warm ambient level, soft shadow where surfaces
meet and round the pillars, the lamps along the rod, light bounced from the floor), and the
wood and metals use **matcaps** — small painted spheres of polished wood, gold and silver
reflecting the green cloth and the cream marble — so they shine without real-time lights. It
looks the same by day and night and on every quality tier.

## The stairs and the open door

The Kaaba's and its door's panels have **Bring the stairs** (then **Take the stairs away**) and
**Open the door** (then **Close the door**); "Inside the Kaaba" has the door's button too, and
inside, tapping the door's leaves opens or closes it. The panel closes, so the visitor can watch.
Bringing the stairs opens the door and taking them away closes it; the door also opens and closes
on its own (both choices are remembered, `kaabaStairs` and `kaabaDoorOpen`). The visitor can walk
through the doorway only while the stairs stand at the open door: with the door shut the stairs
lead up to it, and with the door open but no stairs the doorway inside ends before the drop.
When the door opens, the curtain rolls up from its foot, then the
two leaves swing open into the room, over about three seconds (closing runs the other way round,
and with reduced motion both happen at once). The visitor can walk up
the steps, through the doorway into the room, look round, and walk back out and down. The choice
is remembered with the other settings (`kaabaStairs`, off by default). In reality the stairs are
brought only when the Kaaba is opened; its measurements are not published, so the staircase here is
drawn after photographs (`data/kaaba-stairs.ts`): as wide as the door between tall gilded sides
with a handrail, twelve steps to a landing level with the sill, on wheels.

How it is built:

- **The doorway** (`world/kaaba.ts`) is always open in the kiswah, with gilded jambs and lintel and
  a marble sill through the wall's thickness. With the door shut, the curtain covers it. Opening,
  the curtain rolls up to just above the door (`world/kaaba-door.ts`): the sheet's lower edge rises
  with its photograph cropped to match, and the roll at its foot grows as it takes up the cloth and
  turns as it climbs. Then the door's two leaves turn about 95° into the room on their hinges
  (`world/kaaba-interior.ts`), each showing its half of the gilded door on both faces. The room is
  drawn from outside too, through the doorway, whenever the door is not shut.
- **Shadows.** three.js draws a solid's shadow from its faces turned away from the light, so sunlight
  would pass through the doorway as if the wall facing the sun were not there. A box the size of
  the room, drawn only into the shadow map and from its sunward faces, stands in for it. The static
  shadow map is redrawn whenever the stairs come or go, and again when the curtain comes to rest.
- **Walking.** Each level stays a flat collision world, but a world can now carry a raised surface
  (`CollisionWorld.setRaised`). With the stairs, the ground's world has a corridor as wide as the
  door cut through the Kaaba's outline into the room, the stairs' sides as walls, and the stairs
  walked as an even slope along their front edges up to the landing and the doorway at sill height.
  The room's world gets the doorway, a short corridor out of it and the two opened leaves. Both are
  built the first time they are needed; the route grid for double-click walking is kept per world.
  Going down, the visitor steps down with the slope rather than falling at each step
  (`MOVEMENT.stepDown`).
- **Through the doorway** the visitor moves between the ground's world and the room's just where
  they are, in the middle of the wall (two lines 10 cm apart, so standing on one does not switch to
  and fro); an automatic walk carries on across. Arriving inside shows the usual notice and
  "Leave the Kaaba".
- **Taking the stairs away** while standing on them or in the doorway first moves the visitor out in
  front of the door behind a fade (and, inside, bringing them while standing where the leaves swing
  moves the visitor back from the door).

## People praying and going round the Kaaba

Settings has two switches, both on by default: **Show people praying** and **Show people doing
tawaf**. The people are figures built in code (`world/figures.ts`), not models or photographs, and
faceless at a distance: men's bodies in the proportions of a grown man, with hands and feet; a head
shaped into a face (brow, nose, cheekbones, lips, chin), the eyes, brows, nose shading and mouth
painted onto it (a small canvas texture, multiplied over the skin), hair and beards shaped and
shaded on the head. Robes fall in folds, deepest at the hem. They are dressed as people in the
Haram are — a thobe with a white cap or a head cloth and its cord; the two white sheets of ihram,
head bare; for women in the tawaf, an abaya and headscarf — in many skin tones and shades of white,
cream, grey and brown. Each has a soft shadow on the floor under them.

- **Praying** (`data/praying-people.ts`, `world/praying-people.ts`): about 1,150 people in rows
  round the Kaaba, in the courtyard and under the Ottoman portico, each facing the Kaaba and each at
  a different moment of their own prayer, as between the congregational prayers: standing with the
  right hand over the left on the chest, bowing with the hands on the knees, in prostration
  (forehead, nose, hands, knees and toes on the floor, elbows raised) and sitting back on the heels.
  The Mataf is left to the tawaf, and a lane is kept clear from it to every viewpoint and round each
  one. The visitor walks round them: they are in the ground's collision world while shown (a
  footprint for each posture), and the tests check every place stays in reach.
- **Tawaf** (`data/tawaf-crowd.ts`, `world/tawaf-crowd.ts`): about 470 people (fewer on the medium
  and low tiers) walking anticlockwise round the Kaaba, outside Hijr Ismail and Maqam Ibrahim, in
  lanes, each at its own pace of about a metre a second, thicker near the Kaaba. The walking is done
  on the graphics card from the time: each goes round their lane facing the way they go, legs and
  arms swinging with the stride, knees bending, robes swaying. They are only to look at: the
  visitor can walk among them, and "Walk one circuit" walks with them.

**Cost.** Each posture in each dress is one figure drawn many times over (an `InstancedMesh`), in a
detailed version for the people within 24 m of the visitor and a simple one beyond; people are
handed between them as the visitor moves (the walkers twice a second, as they walk on). That is
about 40 draw calls and some 200,000 triangles in a typical view of the courtyard. While the tawaf
is shown and in view, the explorer draws every frame instead of only when something changes; hide
it to save battery. The people praying cast shadows into the static shadow map; the walkers do not.

## Hajj and Umrah guide

The **Hajj & Umrah** button opens step-by-step guides (`src/data/rites.ts`, `src/ui/guide.ts`):

- **Umrah** (7 steps): ihram at the miqat (with the talbiyah in Arabic, transliteration and
  meaning), entering the mosque, tawaf, prayer behind Maqam Ibrahim, Zamzam, sa’i, shaving or
  shortening the hair.
- **Hajj** (8 steps, following tamattu’): Umrah first, the Day of Tarwiyah in Mina, the Day of
  Arafah, the night at Muzdalifah, the Day of Sacrifice, Tawaf al-Ifadah and sa’i, the Days of
  Tashreeq, and the farewell tawaf.

Each step gives when and where, a summary, short instructions and its sources. Steps inside
Masjid al-Haram move the 3D view to the spot ("Show me"); the tawaf and sa’i steps draw their
route on the floor (`world/guide-overlays.ts`: the tawaf circuit with anticlockwise arrows and a
starting line in line with the Black Stone; the sa’i route with arrows both ways and the green-lit
section) and offer to walk it. "Walk one circuit" walks the tawaf once round. "Walk the seven
laps" walks the whole sa’i: Safa to Marwah, back to Safa, and so on, ending at Marwah, standing
a moment on each hill and turning to face the way back, hastening between the green markers
(at 1.75× walking pace, `SAI_HASTEN_PACE`) as men do, with a notice at each lap ("Lap 3 of 7:
towards Marwah"). At normal speed it takes about ten minutes; hold Shift or turn on "Walk
faster" to speed it up, and any movement key or the joystick stops it. Steps in Mina, Arafat and Muzdalifah
are marked as outside the mosque and are explained in text only. On phones the sheet can be
collapsed to keep the route in view.

**Accuracy.** The sequence follows Sahih Muslim 1218 (Jabir's account of the Prophet's ﷺ Hajj),
the Quran, other hadith verified against Sunnah.com listings, and the Ministry of Hajj and Umrah
(see `SOURCES.md`). Every guide states that it is a simplified overview, not a ruling: details
differ between the schools of law, and pilgrims should follow qualified scholars and the
official instructions. Tests check that every step cites known sources and that both routes
are walkable.

## Quran references

Quran references are written the way the Qurany Piroz app writes them, the surat's name, its
number, then the verse, in the visitor's language: "Al-Baqarah (2): 125", "مانگاکە (2): 125". They
link to the verse **in the app**, through the app's own deep link
`https://www.qurany-piroz.com/ayat/<surat>/<ayat>` (see [`DEEPLINKS.md`](DEEPLINKS.md)), never to
another Quran site. Where the app is installed and verified the link opens the verse in it;
elsewhere it opens the site's page for the verse, which offers to open it in the app or download
it. On Android the link hands the verse to the app directly (an `intent://` link with that page as
its fallback), because a browser keeps a site's links to itself in the browser.

Descriptions and their translations keep citing verses plainly, "(Quran 2:125)", in each language's
own words for "Quran"; `withSuratNames()` (`data/quran.ts`) rewrites them as they are shown, so
translators never spell surat names. `SURAT_NAMES` holds the names of the cited surats in all 22
languages (the Kurdish, Arabic, English and Turkish ones are the app's own, from its `Quran.db`, as
in `/surats.js`); citing a new surat needs its names there, and a test checks every cited surat has
them and that no plain "2:125" is left in any language.

## Label and text size

Settings has two sliders: **Label size** scales the place markers (60–130%, 60% by default; the
overlap layout scales with them) and **Text size in panels** scales the text of the information
panel, the guide and the dialogs (80–150%, via CSS `zoom`, which keeps each panel's width;
browsers without it show the normal size). Both are remembered with the other settings.

## Movement, camera and controls

All tuning lives in `haram-src/src/config.ts`:

- `MOVEMENT.walkSpeed` (3.2 m/s) and `fastSpeed` (7 m/s), `acceleration` / `deceleration`
  (smooth start and stop), `gravity`, `maxSubstep` (collision sub-steps; keep below the
  visitor's radius).
- `CAMERA.fov`, `minHorizontalFov` (keeps portrait phones from feeling cramped), `maxPitch`,
  and the drag / Pointer Lock / touch sensitivities.
- Visitors can scale walking speed and look sensitivity in Settings.

Controls:

| | Desktop | Touch (phones, tablets) |
| --- | --- | --- |
| Move | W A S D or arrow keys; Shift = faster; **double-click the ground to walk there** | Joystick (bottom left); "Walk faster" toggle |
| Look | Click-and-drag (default) or optional Mouse look (Pointer Lock; Esc releases) | Drag anywhere else on the screen |
| Zoom | Mouse wheel, trackpad pinch, + / − keys, or the + / − buttons (up to 4×) | Two-finger pinch, or the + / − buttons |
| Learn | Click a ⓘ marker, click the object, or Places | Tap a ⓘ marker, tap the object, or Places |
| Rites | Hajj & Umrah button | Hajj & Umrah button |
| Leave | Back (top bar, and the loading screen) | Back (top bar, and the loading screen) |

**Double-click to walk** (mouse and pen): the floor point under the pointer is found by
ray-casting against the floor meshes only (walls, objects and sky are ignored). A route is
found on a 0.5 m navigation grid stamped from the collision world (`physics/navigation.ts`,
A* with corner-cutting removed), straightened, and walked at walking speed, turning to face
the way; a gold ring marks the destination. Any movement input cancels it; looking around
keeps it going but stops the automatic turning. With reduced motion, the visitor moves there
with a fade instead.

**Back** returns to qurany-piroz.com. It is a link to the home page (so it also opens in a new
tab), but a visitor who came from one of the site's pages — the main page's "Explore the Haram"
button, say — is taken back in history instead, to that page as they left it
(`ui/back-link.ts`). The top bar keeps to one line in every language: when it would not fit, it
folds labels to icons (Back, then Hajj & Umrah), moves the compass under the bar, and only then
folds Places — measured, not set by breakpoints, since how much room the labels need depends on
the language (`hud.ts`, `fitOnOneLine`). Folded buttons keep their names for screen readers.

**Zoom** narrows the field of view (`CAMERA.maxZoom`, 4×) without moving the visitor, so it can
never pass through walls; look sensitivity scales down while zoomed. The level indicator
between + and − shows the zoom and resets it when pressed.

The joystick and the look area are separate pointers, so walking and looking work at the same
time. The 3D view uses `touch-action: none`, so the page never scrolls or zooms underneath a
drag. "Go there" travels with a short fade instead of flying through buildings (comfortable,
and never passes through walls). With `prefers-reduced-motion`, turns are instant and
animations are removed.

## Graphics quality and performance

Presets are in `haram-src/src/engine/quality.ts`:

| | High (desktop default) | Medium (phone/tablet default) | Low |
| --- | --- | --- | --- |
| Max pixel ratio | 2 | 1.5 | 1 |
| Shadows | 4096 map | 2048 map | off |
| Textures | 1024 px | 1024 px | 512 px |
| Detail maps (relief, polish, metal) | on | on | off |
| Silk sheen on the kiswah | on | on | off |
| Reflections | on | on | off |
| Antialiasing | on | on | off |
| City backdrop | full | full | reduced |

- **Automatic** picks the starting tier from the device (software rendering, `deviceMemory`,
  CPU cores, phone/tablet) and, while the view is moving, steps down if frames are slower than
  ~24 fps: first the resolution (to 70%), then the tier. It never steps back up, so it cannot
  oscillate, and a 30 fps cap (iOS Low Power Mode) is not mistaken for a slow device.
- Visitors can choose a tier manually in Settings; a manual choice is never overridden.
  Texture size, detail maps, the silk sheen and antialiasing are fixed when the page loads.

Main optimisations: two-stage loading with code splitting; no model or texture downloads;
merged static geometry (~50–80 draw calls); instanced city; static shadow map rendered once;
pixel-ratio caps; render-on-demand; paused when the tab is hidden; adaptive quality; marker
line-of-sight checks spread over frames. Measured on a desktop at 2× pixel ratio: a steady
60 fps while walking, by day and by night (p95 frame ≈ 17.5 ms), ~66 draw calls,
~90k triangles, ~28 MB JS heap. Texture memory is roughly 50 MB on high/medium and 10 MB on
low.

## Deployment

Nothing special is needed beyond committing the build:

```bash
cd haram-src
npm ci
npm run release        # check + build into ../haram
cd ..
git add haram haram-src vercel.json .vercelignore HARAM.md SOURCES.md ASSETS_LICENSES.md
git commit -m "…"      # then push as usual; Vercel deploys the static files
```

`vercel.json` additions (all scoped to `/haram` — other pages are unaffected):

- Rewrites `/haram` and `/haram/` → `/haram/index.html`.
- `Cache-Control: public, max-age=31536000, immutable` for `/haram/assets/*` (file names are
  content-hashed, so a new build always gets new URLs). HTML keeps Vercel's default
  `max-age=0, must-revalidate`, so new releases appear immediately.
- Security headers for `/haram/*`: Content-Security-Policy (scripts and styles only from the
  site itself, no framing by other sites), `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Cross-Origin-Opener-Policy`, `Permissions-Policy`.
- Redirects `/haram-src/*` → `/haram`.

Vercel compresses JavaScript, CSS and HTML (gzip/Brotli) automatically and serves them over
HTTPS; MIME types come from file extensions. The site is also behind Cloudflare, which respects
these cache headers.

**SEO:** title, description, canonical `https://qurany-piroz.com/haram`, Open Graph, Twitter
card and JSON-LD (`WebPage` about the `Place` Masjid al-Haram). Nothing on other pages changed.
The site has no sitemap; if one is added, include `/haram`. Linking to `/haram` from the
homepage is optional and was left to the site owner.

## Browser compatibility

Target: any browser with **WebGL 2**, which three.js requires — Safari/iOS/iPadOS 15+,
Chrome/Edge 92+, Firefox 90+, Samsung Internet 16+. The build is transpiled for exactly that
baseline (`build.target` in `vite.config.ts`), and the source avoids newer APIs (no
`<dialog>`, `:has()`, `dvh`, `Array.at`, `structuredClone`, etc.).

| Browser | Notes |
| --- | --- |
| Safari macOS | Drag-to-look by default; optional Pointer Lock. |
| Safari iPhone | Touch joystick + drag look; safe-area insets for the notch/home bar; no full screen needed; works with the browser's address bar visible; GPU context loss (memory pressure) is handled with a recovery message. |
| Safari iPad | Detected as touch even when it reports itself as a Mac; touch controls plus keyboard/trackpad if attached. |
| Chrome / Firefox / Edge on iPhone & iPad | Same WebKit engine and behaviour as Safari. |
| Chrome Android, Samsung Internet, other Chromium | Touch controls; `deviceMemory` used to start low-memory devices at Low. |
| Chrome, Firefox, Edge desktop | Keyboard + drag, optional Pointer Lock, full-screen button in Settings. |

Techniques: feature detection (never browser sniffing for features), Pointer Events
throughout, `touch-action`, `-webkit-` prefixes for `backdrop-filter`, `ResizeObserver` plus
orientation-change fallback, `env(safe-area-inset-*)`, no reliance on hover, keyboard,
Pointer Lock or full screen for anything essential.

**Tested here** in Chromium (desktop, and phone emulation in portrait and landscape with touch
input). Safari, iOS, iPadOS, Firefox and Samsung Internet were designed for and checked by
code and bundle review, but **should be confirmed on real devices before announcing the
page** (see [Testing](#testing)).

## Accessibility

- Every control is a native `<button>`, link or form control with an accessible name; markers
  are labelled "Place — learn more".
- Visible focus rings; dialogs trap focus, close with Escape and return focus to their opener;
  background content is hidden from screen readers while a dialog is open.
- The Places menu and the text-only version give access to all content without the 3D view.
- Touch targets ≥ 44×44 px; text contrast on dark surfaces; `prefers-reduced-motion` respected;
  page zoom is not disabled.
- Arrow keys scroll the information panel when it has focus, instead of moving the visitor.

## Security and copy protection

This section is deliberately candid about what can and cannot be protected.

### 1. What is protected

- **Source code.** Only minified, bundled JavaScript is deployed — no source maps, no comments
  (except third-party licence headers, which must stay), no development hooks or fault
  injection (compiled out). The TypeScript source in `haram-src/` is excluded from the
  deployment (`.vercelignore`) and its URLs redirect away.
- **The 3D content.** There is no model file (GLB/OBJ) and no texture image to download: the
  geometry and textures are generated in the browser from compact layout data. Someone wanting
  the model cannot simply save a file.
- **Embedding.** `Content-Security-Policy: frame-ancestors 'self'` and `X-Frame-Options`
  stop other websites from showing the explorer inside their own pages.
- **Script integrity.** The CSP only allows scripts and styles from qurany-piroz.com itself,
  which also limits the damage of any injected content.

### 2. What must remain public

A browser can only show what it receives. These are necessarily public:
`/haram` (HTML), `/haram/assets/*.js` (the explorer and three.js), `/haram/assets/*.css`, and
the logo image — plus the descriptions, which are meant to be read.

### 3. Techniques used to discourage casual copying

Minification and bundling; tree-shaking; code splitting into content-hashed, non-descriptive
file names (`assets/Ci8kI4uO.js`) that reveal nothing about the internal structure; runtime
generation of geometry and textures; no source maps; production-only code paths; framing
protection. Selective obfuscation was considered and **not** used: it would slow the explorer
on phones, can break Safari, and adds little against anyone determined.

No encryption is used. Encrypting assets in the browser with a key that must also be sent to
the browser would not prevent extraction, and is therefore not claimed.

### 4. Secrets kept server-side

The explorer has **no server-side component and needs no secrets**: no API keys, tokens,
database credentials or private endpoints exist in it, so none are in the bundle. If a backend
is ever added, its credentials must stay in server-side environment variables — never in
`haram-src/` (anything imported there is shipped to every visitor).

### 5. Publicly downloadable files

`haram/index.html`, `haram/assets/*` (JavaScript, CSS, the logo PNG, the kiswah photographs
and the Vazirmatn font). Nothing else is served
for the explorer.

### 6. Why it cannot be completely protected

To draw the mosque, the browser must have the code that builds it and must send the resulting
geometry and textures to the graphics card. Anything the browser has, a technically capable
visitor can inspect.

### 7. Limits against a sophisticated person

Someone with developer tools can read and reformat the minified code (including the layout
numbers), capture the generated geometry and textures with WebGL debugging tools (e.g.
Spector.js, RenderDoc), or record the screen. These measures make unauthorised reuse
**substantially more difficult and more obviously deliberate**; they do not make it
impossible, and nothing here claims otherwise.

> **Important:** the GitHub repository `RawanD201/qurany-piroz` is **public**. While it is,
> the explorer's full, commented source in `haram-src/` is readable on GitHub regardless of the
> measures above. If protecting the source matters, keep `haram-src/` in a separate **private**
> repository and commit only the built `haram/` folder here. (Making this whole repository
> private is not a drop-in alternative: the site's Android download link points to this
> repository's public GitHub Releases.)

## What is approximate

- **The Kaaba** uses published approximate dimensions; its surfaces are simplified. The
  kiswah's woven calligraphy, belt and door curtain come from photographs of real kiswah (the
  belt's panels repeat, so its verses are not in their true order); the corner panels are
  abstract designs (see [The kiswah](#the-kiswah)). The door is shown behind its curtain, or open
  with the curtain lifted when the stairs are brought; the marble base is a plain plinth.
- **The stairs at the door** are drawn after photographs; their size, steps and decoration are
  approximate, and the curtain's lifting and the door's opening are simplified.
- **The people** praying and going round the Kaaba are illustrative: how many there are, where,
  their postures, dress and pace.
- **Night view** is an artistic impression of the floodlighting, not a lighting survey.
- **Hijr Ismail, the Mizab and Maqam Ibrahim** are approximate in shape, size and position;
  Maqam Ibrahim's enclosure and the Black Stone's frame follow photographs, with their sizes
  estimated where they are not published.
- **Inside the Kaaba** is drawn after published photographs, but its measurements are not
  published: it is fitted within the outer walls with an approximate ceiling height. The number
  and places of the lamps and plaques, the plaques' carving, the cloth's pattern and the doors'
  decoration are illustrative.
- **Zamzam** is underground; its position is approximate, and the circle marking it on the
  floor is drawn for the model (there is no such marking today).
- **The Mataf's tiles** follow the real pattern of rows facing the Kaaba, but tile size and the
  layout at the corners are approximate.
- **The clock faces** show the real time and colours, but their markings, hands and emblem are
  a simplified drawing.
- **The mosque's plan** follows OpenStreetMap (simplified to within about a metre), but its
  **heights, interiors and details are simplified**: one walkable ground floor, a regular grid
  of hall columns, generic arcades and window rows, and gates as single arches. The upper
  floors, the roofs' prayer areas and the multi-level Mataf structure are not modelled. The King
  Abdullah expansion and the northern building are shown from outside only.
- **The green-lit section** of the Mas'a is approximately placed.
- **The buildings around** are their mapped outlines raised to their mapped heights, with a
  generic window texture; the clock tower is modelled separately at its real position. The city
  beyond them and the mountains around the valley are generic, not a map.
- **The compass** follows the model's orientation (the Kaaba's corners roughly towards the
  compass points, as published) and is labelled approximate.

## Known limitations

- Ground level only (and the clock-tower balcony and the inside of the Kaaba): upper floors, roofs and the multi-level
  Mataf/Mas'a are not walkable; the King Abdullah expansion cannot be entered.
- Six gates are described as places; the other mapped entrances are plain doorways.
- The people are figures built in code, not photographic; the crowds are lighter than the real
  ones, women are shown only in the tawaf, and nobody prays in the halls. No sound. Day and night
  are two fixed lighting states, not a moving sun.
- The translations of the religious content still need review by qualified native speakers (see [Languages and translations](#languages-and-translations)).
- Texture size and antialiasing cannot change without reloading.
- No real-device testing was possible in the build environment (see Testing).

## Testing

Automated (`npm run check` — all passing at release):

- **Type checking** (TypeScript, strict) and **linting** (ESLint + typescript-eslint).
- **86 unit tests** (Vitest): collision (push-out, sliding, no tunnelling, bounds, line of
  sight); player movement (smooth acceleration/deceleration, speed setting, gravity,
  turning, reduced motion); place data (complete English text, valid sources, every place has
  a location); **walkability** (spawn and every "Go there" viewpoint are on free ground on its
  own level and reachable on foot by flood-fill, on the ground and inside the Kaaba); settings validation; localisation fallback; quality-tier
  detection and adaptive step-down; the time-of-day setting; the kiswah's folded corner
  panels; the Black Stone's frame (outside the walls, the stone facing out); route finding and automatic walking (around walls, unreachable places, stopping on
  input or when blocked); the guides' content and sources, the order of the rites, and the
  tawaf (anticlockwise, from the Black Stone) and sa’i routes being walkable; the full sa’i
  (seven laps, ending at Marwah, hastening only between the green markers); paced routes that
  pause and turn back at each end; the clock-tower balcony (standing at its height, unable to
  step off, reaching the railing, and back to the ground); the Mataf floor's shader (every map
  sampled with the Kaaba-facing tiling) and its rows; the label and text size settings (60% labels
  by default, also for visitors whose saved settings carry the old 85% default); the
  stairs at the Kaaba's door (their heights, walls on their sides, a double-click route up them,
  walking up through the doorway into the room and back down without falling, switching sides only
  in the doorway, every place still reachable with them, the door opening curtain first and closing
  leaves first, the setting off by default); Quran
  references (surat names in every language, no plain citations left, links only to the app's
  verse links); the sun emblem's outline; the people praying (laid out the same way every time,
  in the courtyard facing the Kaaba, clear of the Mataf, every viewpoint and the mosque's columns,
  every place still reachable with them, with or without the stairs) and going round the Kaaba
  (anticlockwise, clear of the Kaaba, Hijr Ismail and Maqam Ibrahim, never through each other);
  the door shut with the stairs at it, and open without them; the people's switches on by default. Walkability and the routes are checked on the real plan.

Manual checks performed in Chromium (desktop and phone emulation):

- `/haram` and `/haram/` through the Vercel-like local server, with the production build and
  the Content Security Policy active: all assets load, no console errors or CSP violations.
- Existing pages (`/`, `/donations`, `/ayat/…`, `/quiz/…`) unaffected, without the new headers.
- Every one of the 20 places: opened from the Places menu, "Go there", marker visible from its
  viewpoint, marker opens the right panel. Tapping objects (Kaaba, its door) opens their
  panels; tapping the floor does nothing.
- Keyboard movement and collision; joystick and simultaneous drag-to-look with touch pointers;
  portrait and landscape; info panel as side panel and bottom sheet; settings, focus trap,
  Escape and focus return; quality changes at runtime.
- Failure paths: no WebGL, WebGL blocked, network failure, failed texture (continues with a
  warning), GPU context loss and restoration, text-only version.
- Idle view renders zero frames; 60 fps while moving on the test machine, day and night.
- Night view: toggle, saved preference restored on reload, `?time=night`, low tier at night.

**Before announcing the page, please check on real devices**: an iPhone (Safari), an iPad, an
Android phone (Chrome and Samsung Internet), and Safari, Firefox and Edge on a computer. For
each: the page loads, walking and looking work, markers and panels open, the Places menu and
"Go there" work, and rotating the device keeps everything usable.
