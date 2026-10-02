// Photographs of the real kiswah: its woven calligraphy, its belt and its door curtain.
//
// The explorer first shows its abstract, generated kiswah (so nothing waits on these files);
// once the explorer is running, the photographs are loaded and swapped in. If they cannot be
// loaded, the generated version simply stays.
//
// Sources and licences (see ASSETS_LICENSES.md):
//   - sitara.webp: the door curtain, from "Kiswah of the Golden Door of Kaaba - 2016" by
//     Abdullah Shakoor (Wikimedia Commons, CC0), cropped to the curtain and scaled.
//   - weave.webp: one repeat of the calligraphy woven into the black silk, from "Kiswah
//     fragment, Rarities of Muslim culture (2021-07-06) 01.jpg" by Vyacheslav Kirillin
//     (Wikimedia Commons, CC BY-SA 4.0), made with scripts/process-kiswah-weave.py; this
//     adaptation is shared under CC BY-SA 4.0.
//   - hizam-atlas.webp: three belt panels, one per row — two historical panels photographed by
//     the Khalili Collections (CC BY-SA 3.0 IGO) and the modern dedication panel, from
//     "Kiswah, Kaaba - 7 May 2016 (cropped-01)" by Abdullah Shakoor (CC0). Cropped, scaled and
//     combined; this combined file is therefore shared under CC BY-SA 3.0 IGO.
// The processing is reproducible with scripts/process-kiswah-photos.swift.

import { RepeatWrapping, SRGBColorSpace, Texture } from 'three';
import beltUrl from '../assets/kiswah/hizam-atlas.webp?url';
import sitaraUrl from '../assets/kiswah/sitara.webp?url';
import weaveUrl from '../assets/kiswah/weave.webp?url';
import { BELT_ATLAS, normalCanvas, surfaceCanvas, type TextureSet } from './textures';

export interface KiswahPhotos {
  belt: TextureSet;
  sitara: TextureSet;
  weave: TextureSet;
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Could not load ${url}`));
    image.src = url;
  });
}

/**
 * Relief and metal maps from the photograph itself: the gold and silver thread is the bright
 * part of the image, so brightness gives both where the embroidery is raised and where it is
 * metal. Computed at a reduced size; these maps only need to be approximate.
 */
function detailFrom(image: HTMLImageElement | HTMLCanvasElement): { normal: HTMLCanvasElement; surface: HTMLCanvasElement } {
  const sourceWidth = image instanceof HTMLImageElement ? image.naturalWidth : image.width;
  const sourceHeight = image instanceof HTMLImageElement ? image.naturalHeight : image.height;
  const width = Math.min(512, sourceWidth);
  const height = Math.round((sourceHeight / sourceWidth) * width);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('2D canvas unavailable');
  ctx.drawImage(image, 0, 0, width, height);
  const data = ctx.getImageData(0, 0, width, height).data;
  const heightMap = new Float32Array(width * height);
  const metal = new Float32Array(width * height);
  const rough = new Float32Array(width * height);
  for (let i = 0; i < heightMap.length; i++) {
    const r = data[i * 4] / 255;
    const g = data[i * 4 + 1] / 255;
    const b = data[i * 4 + 2] / 255;
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const thread = Math.min(1, Math.max(0, (luminance - 0.22) / 0.25));
    heightMap[i] = luminance;
    metal[i] = thread;
    rough[i] = 0.66 - thread * 0.36;
  }
  return { normal: normalCanvas(heightMap, width, height, 2.2), surface: surfaceCanvas(width, height, rough, metal) };
}

/** Gold thread (sRGB): dark old gold in the shadows of the stitching, pale bright gold on top. */
const GOLD_DARK = [0.55, 0.4, 0.13];
const GOLD_BRIGHT = [0.99, 0.88, 0.58];
const CLOTH = [0.04, 0.04, 0.045];

/**
 * The belt as it is today, gold on black. One of the historical panels in the atlas is
 * embroidered in silver, which beside the gold ones (and as metal reflecting the sky) read as
 * a blue-grey band on one side of the Kaaba; the modern belt is gold all round. Every panel is
 * therefore graded by brightness alone: the cloth becomes black and the thread gold, so the
 * three panels match while keeping all their detail. Each row (panel) is measured on its own,
 * as the photographs differ in exposure and in the colour of their cloth.
 */
export function gildBelt(image: HTMLImageElement): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('2D canvas unavailable');
  ctx.drawImage(image, 0, 0);
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = pixels.data;
  const width = canvas.width;
  const scaleY = canvas.height / BELT_ATLAS.height;
  const toSrgb = (v: number) => Math.round(255 * Math.min(1, Math.max(0, v)));
  const smooth = (a: number, b: number, x: number) => {
    const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
  };
  for (let row = 0; row < BELT_ATLAS.rows; row++) {
    const top = Math.round(row * (BELT_ATLAS.rowHeight + BELT_ATLAS.gap) * scaleY);
    const bottom = Math.min(canvas.height, Math.round((row * (BELT_ATLAS.rowHeight + BELT_ATLAS.gap) + BELT_ATLAS.rowHeight) * scaleY));
    // This panel's brightness range: its cloth (a low percentile) and its brightest thread.
    const histogram = new Uint32Array(256);
    for (let i = top * width * 4; i < bottom * width * 4; i += 4) {
      histogram[Math.round(0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2])]++;
    }
    const total = (bottom - top) * width;
    const percentile = (p: number) => {
      let sum = 0;
      for (let v = 0; v < 256; v++) if ((sum += histogram[v]) >= total * p) return v;
      return 255;
    };
    const cloth = percentile(0.3);
    const range = Math.max(24, percentile(0.98) - cloth);
    for (let i = top * width * 4; i < bottom * width * 4; i += 4) {
      const y = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
      const thread = smooth(cloth + range * 0.16, cloth + range * 0.5, y);
      const shine = smooth(cloth + range * 0.3, cloth + range, y);
      for (let c = 0; c < 3; c++) {
        const gold = GOLD_DARK[c] + (GOLD_BRIGHT[c] - GOLD_DARK[c]) * shine;
        data[i + c] = toSrgb(CLOTH[c] + (gold - CLOTH[c]) * thread);
      }
    }
  }
  ctx.putImageData(pixels, 0, 0);
  return canvas;
}

function toTexture(source: HTMLImageElement | HTMLCanvasElement, colour: boolean, anisotropy: number, repeat = false): Texture {
  const texture = new Texture(source);
  if (colour) texture.colorSpace = SRGBColorSpace;
  if (repeat) texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.anisotropy = anisotropy;
  texture.needsUpdate = true;
  return texture;
}

async function loadSet(
  url: string,
  options: { anisotropy: number; detailMaps: boolean },
  grade?: (image: HTMLImageElement) => HTMLCanvasElement
): Promise<TextureSet> {
  const loaded = await loadImage(url);
  const image = grade ? grade(loaded) : loaded;
  const set: TextureSet = { map: toTexture(image, true, options.anisotropy), normalStrength: 0.9 };
  if (options.detailMaps) {
    const detail = detailFrom(image);
    set.normalMap = toTexture(detail.normal, false, options.anisotropy);
    const surface = toTexture(detail.surface, false, options.anisotropy);
    set.roughnessMap = surface;
    set.metalnessMap = surface;
  }
  return set;
}

/** The black silk (sRGB): the ground, and the woven letters a shade lighter, as they read. */
const SILK = [10, 10, 12];
const LETTERS = [60, 60, 66];

/**
 * The silk from the weave tile (letters light, ground dark): its colour; its relief (the letters
 * stand slightly proud, with the twill's fine ribs and a soft fold); and its sheen (the woven
 * letters are smoother than the ground, so they catch the light differently). The tile repeats.
 */
async function loadWeave(options: { anisotropy: number; detailMaps: boolean }): Promise<TextureSet> {
  const image = await loadImage(weaveUrl);
  const read = (width: number, height: number) => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) throw new Error('2D canvas unavailable');
    ctx.drawImage(image, 0, 0, width, height);
    return { canvas, ctx, pixels: ctx.getImageData(0, 0, width, height) };
  };
  const full = read(image.naturalWidth, image.naturalHeight);
  const data = full.pixels.data;
  for (let i = 0; i < data.length; i += 4) {
    const m = data[i] / 255;
    for (let c = 0; c < 3; c++) data[i + c] = Math.round(SILK[c] + (LETTERS[c] - SILK[c]) * m);
  }
  full.ctx.putImageData(full.pixels, 0, 0);
  const set: TextureSet = { map: toTexture(full.canvas, true, options.anisotropy, true), normalStrength: 0.6 };
  if (options.detailMaps) {
    const w = Math.round(image.naturalWidth / 2);
    const h = Math.round(image.naturalHeight / 2);
    const half = read(w, h).pixels.data;
    const heightMap = new Float32Array(w * h);
    const rough = new Float32Array(w * h);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const k = y * w + x;
        const m = half[k * 4] / 255;
        const twill = ((x + y) % 4) / 4;
        const fold = Math.sin((x / w) * Math.PI * 2) * 0.5 + 0.5;
        heightMap[k] = m * 0.6 + twill * 0.1 + fold * 0.35;
        rough[k] = 0.86 - m * 0.44;
      }
    }
    set.normalMap = toTexture(normalCanvas(heightMap, w, h, 1.5), false, options.anisotropy, true);
    set.roughnessMap = toTexture(surfaceCanvas(w, h, rough), false, options.anisotropy, true);
  }
  return set;
}

export async function loadKiswahPhotos(options: { anisotropy: number; detailMaps: boolean }): Promise<KiswahPhotos> {
  const [belt, sitara, weave] = await Promise.all([
    loadSet(beltUrl, options, gildBelt),
    loadSet(sitaraUrl, options),
    loadWeave(options),
  ]);
  return { belt, sitara, weave };
}
