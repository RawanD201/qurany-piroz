# The photo album (/album/)

The home page's "ئەلبومی وێنەکان" card, just before the 3D one, opens the photo album: pictures of
the Prophets Muhammad, Jesus and Moses, one tab each, with a full-size viewer.

- **Source:** the original pictures are kept outside this repository (by default in
  `~/Downloads/Muhammad/Persons/`, one sub-folder per prophet: `Muhammad`, `Jesus`, `Moses`).
  Only web-sized copies are committed here, in `album/images/` and `album/thumbs/`.
- **Rebuilding:** after adding or removing pictures in the source folders, run
  `python3 scripts/build-album.py` (`--src <path>` if they are elsewhere; needs Pillow). It writes
  each picture as WebP, at most 1600 px for the viewer and 480 px wide for the grid, removes the
  ones no longer in the source, and rewrites `album/photos.js`, the list the page is built from.
  Pictures are ordered newest first by their Pinterest pin id (their file name).
- **Languages:** the page is in Central Kurdish, Arabic and English. The home page opens it with
  `?lang=` set the same way as the 3D simulations (see SIMULATIONS.md); opened directly, it uses
  the language last picked on the site, or Kurdish.
- **Links:** `/album/#jesus` opens a tab, and `/album/#jesus/5` opens its fifth picture in the
  viewer.
- **Headers:** `vercel.json` gives `/album/` the same security headers as `/3d/`, and a week of
  caching for its pictures.
