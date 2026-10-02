#!/usr/bin/env python3
"""Makes src/assets/kiswah/weave.webp: one seamless repeat of the kiswah's woven pattern.

Source: "Kiswah fragment, Rarities of Muslim culture (2021-07-06) 01.jpg" by Vyacheslav
Kirillin, Wikimedia Commons, CC BY-SA 4.0 —
https://commons.wikimedia.org/wiki/File:Kiswah_fragment,_Rarities_of_Muslim_culture_(2021-07-06)_01.jpg
The result is an adaptation and is shared under CC BY-SA 4.0 (see ASSETS_LICENSES.md).

The black silk carries its calligraphy woven in, black on black: diamonds of zigzag lines with
«الله» in each and the Shahada in Thuluth script. In the photograph the letters are dark on a
slightly lighter ground over the evenly lit upper part of the cloth, which holds one complete
repeat. The script finds the letters (local contrast, independent of the light falling across
the cloth), samples one repeat along the pattern's own lattice — measured from the photograph:
one chevron across, one repeat down — averaging the two chevrons side by side, and writes a
grayscale tile, letters light, ground dark. The explorer derives the cloth's colour, sheen and
relief from it (src/world/kiswah-photos.ts).

Usage (needs numpy, scipy and Pillow):
    python3 scripts/process-kiswah-weave.py fragment01.jpg src/assets/kiswah/weave.webp
"""
import sys

import numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter, map_coordinates

source, target = sys.argv[1], sys.argv[2]

# The cloth, in the full-size photograph (pixels): left/right edges, and its top and bottom.
CLOTH = (1040, 144, 2610, 5016)
# The pattern's lattice, measured by cross-correlation in the crisp upper part of the cloth:
# one chevron across (x, y) and one repeat down (x, y), and where the tile starts.
ACROSS = np.array([786.0, 49.0])
DOWN = np.array([-7.0, 1148.0])
ORIGIN = np.array([20.0, 330.0])
# Output: 49 cm × 77 cm of cloth (two chevrons span the 98 cm width of a kiswah panel; the
# height is from a straight-on photograph of the same cloth).
TILE = (768, 1205)

g0 = np.asarray(Image.open(source).convert('L'), dtype=np.float32)[CLOTH[1]:CLOTH[3], CLOTH[0]:CLOTH[2]]
g = gaussian_filter(g0, 2.0)
dev = g - gaussian_filter(g, 30)
std = np.sqrt(gaussian_filter(dev * dev, 60)) + 1
letters = gaussian_filter(-dev / std, 0.8)  # dark letters, positive
H, W = letters.shape

# Trust only the evenly lit upper part, where the letters are dark and crisp.
rows = np.arange(H)[:, None]
quality = std * np.clip((1850 - rows) / 250.0, 0, 1) * np.clip((rows - 200) / 100.0, 0, 1)

TW, TH = TILE
U, V = np.meshgrid((np.arange(TW) + 0.5) / TW, (np.arange(TH) + 0.5) / TH)
acc = np.zeros((TH, TW))
weight = np.zeros((TH, TW))
for k in (-1, 0, 1):
    for l in (-1, 0, 1):
        X = ORIGIN[0] + (U + k) * ACROSS[0] + (V + l) * DOWN[0]
        Y = ORIGIN[1] + (U + k) * ACROSS[1] + (V + l) * DOWN[1]
        inside = (X > 6) & (X < W - 6) & (Y > 6) & (Y < H - 6)
        if not inside.any():
            continue
        w = np.where(inside, map_coordinates(quality, [Y, X], order=1, mode='nearest') ** 2, 0)
        acc += map_coordinates(letters, [Y, X], order=1, mode='nearest') * w
        weight += w
tile = acc / np.maximum(weight, 1e-6)

lo, hi = np.percentile(tile, 3), np.percentile(tile, 99.5)
mask = np.clip((tile - lo) / (hi - lo), 0, 1) ** 1.15
Image.fromarray((mask * 255).astype(np.uint8)).save(target, 'WEBP', quality=88, method=6)
print(f'wrote {target}: {TW} x {TH}')
