#!/usr/bin/env python3
"""Builds the photo album at /album/ from its source folders (see ALBUM.md).

    python3 scripts/build-album.py [--src <folder>]

The source folder holds one sub-folder of pictures per section (Muhammad, Jesus, Moses). Each
picture is written to album/images/<section>/ at web size and to album/thumbs/<section>/ as
a grid thumbnail, both as WebP, and album/photos.js lists them for the page. A picture removed
from the source is removed from the album too. Needs Pillow (python3 -m pip install Pillow).
"""
import argparse
import json
import os
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit('Pillow is needed: python3 -m pip install Pillow')

# Section key (also the folder name under album/), source sub-folder.
SECTIONS = [('muhammad', 'Muhammad'), ('jesus', 'Jesus'), ('moses', 'Moses')]

IMAGE_EXTS = {'.jpg', '.jpeg', '.png', '.webp', '.gif'}
FULL_MAX = 1600            # longest side of the picture the viewer shows
THUMB_W, THUMB_MAX_H = 480, 1400
FULL_QUALITY, THUMB_QUALITY = 80, 72

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, 'album')


def order(name):
    # Pinterest pin ids grow over time: the most recently saved first, then any other file.
    stem = os.path.splitext(name)[0]
    return (0, -int(stem)) if stem.isdigit() else (1, name.lower())


def save_webp(im, path, box, quality):
    im = im.copy()
    im.thumbnail(box, Image.LANCZOS)
    im.save(path, 'WEBP', quality=quality, method=6)
    return im.size


def build_section(key, src_dir):
    full_dir = os.path.join(OUT, 'images', key)
    thumb_dir = os.path.join(OUT, 'thumbs', key)
    os.makedirs(full_dir, exist_ok=True)
    os.makedirs(thumb_dir, exist_ok=True)

    names = sorted((n for n in os.listdir(src_dir)
                    if not n.startswith('.') and os.path.splitext(n)[1].lower() in IMAGE_EXTS),
                   key=order)
    items, keep = [], set()
    for n in names:
        src = os.path.join(src_dir, n)
        # A safe, stable file name: the pin id where there is one.
        stem = ''.join(c for c in os.path.splitext(n)[0] if c.isalnum() or c in '-_')[:80]
        out_name = stem + '.webp'
        keep.add(out_name)
        full, thumb = os.path.join(full_dir, out_name), os.path.join(thumb_dir, out_name)
        if not (os.path.exists(full) and os.path.exists(thumb)
                and os.path.getmtime(thumb) >= os.path.getmtime(src)):
            with Image.open(src) as im:
                im.seek(0)
                im = im.convert('RGBA' if im.mode in ('RGBA', 'LA', 'P') else 'RGB')
                save_webp(im, full, (FULL_MAX, FULL_MAX), FULL_QUALITY)
                save_webp(im, thumb, (THUMB_W, THUMB_MAX_H), THUMB_QUALITY)
        with Image.open(thumb) as t:
            tw, th = t.size
        items.append([stem, tw, th])

    for d in (full_dir, thumb_dir):
        for old in os.listdir(d):
            if old not in keep:
                os.remove(os.path.join(d, old))
    return items


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    ap.add_argument('--src', default=os.path.expanduser('~/Downloads/Muhammad/Persons'),
                    help='folder holding the Muhammad, Jesus and Moses sub-folders')
    args = ap.parse_args()

    album = []
    for key, folder in SECTIONS:
        src_dir = os.path.join(args.src, folder)
        if not os.path.isdir(src_dir):
            sys.exit(f'Not found: {src_dir}')
        items = build_section(key, src_dir)
        album.append({'key': key, 'items': items})
        print(f'{folder}: {len(items)} pictures')

    with open(os.path.join(OUT, 'photos.js'), 'w', encoding='utf-8') as f:
        f.write('// The album\'s pictures, written by scripts/build-album.py (see ALBUM.md); not edited by hand.\n')
        f.write('// Each item is [file name without .webp, thumbnail width, thumbnail height].\n')
        f.write('window.QPAlbum = ' + json.dumps(album, separators=(',', ':')) + ';\n')


if __name__ == '__main__':
    main()
