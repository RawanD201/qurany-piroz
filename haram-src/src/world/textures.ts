// Procedural textures, painted on canvases at load time.
//
// No image files are downloaded for the environment: marble, stone, the kiswah and the rest
// are generated here from seeded noise and drawing code. That keeps the download small, avoids
// any third-party licensing question, and leaves no ready-made texture files to copy.
//
// Each texture is a *set*: a colour map plus, where it helps, detail maps derived from the same
// design — a normal map (relief: marble joints, chiselled stone, raised embroidery), a roughness
// map (polish: glossy marble, matte grout, shiny gold thread) and a metalness map (only the gold
// and silver thread is metal). Detail maps are skipped on the low quality tier.
//
// RESPECT FOR THE SACRED TEXT: the real kiswah carries calligraphy — inscriptions woven into the
// silk, and Quranic verses embroidered on the belt, the corner panels and the door curtain. None
// of it is imitated. Those areas are represented by abstract geometric and floral patterns that
// follow the real layout (four belt pieces per side, a medallion panel at each corner, the
// curtain over the door) without any letters.

import { CanvasTexture, NoColorSpace, RepeatWrapping, SRGBColorSpace, type Texture } from 'three';
import { MAQAM } from '../data/layout';

export type TextureKey =
  | 'marble'
  | 'stone'
  | 'kiswah'
  | 'hizam'
  | 'sitara'
  | 'kardashiyya'
  | 'rock'
  | 'plaza'
  | 'ceiling'
  | 'city'
  | 'blackStone'
  | 'lattice';

/** Metres covered by one repeat of the world-mapped textures. */
export const TEXTURE_WORLD_SIZE = {
  // Four by four slabs of 1.6 m per repeat, so the veining does not visibly repeat.
  marble: 6.4,
  stone: 4,
  kiswah: 2.4,
  rock: 5,
  plaza: 4,
  ceiling: 5,
} as const;

export interface TextureSet {
  map: Texture;
  normalMap?: Texture;
  /** Read from the green channel by three.js. */
  roughnessMap?: Texture;
  /** Read from the blue channel by three.js (may be the same texture as roughnessMap). */
  metalnessMap?: Texture;
  emissiveMap?: Texture;
  /** Suggested normalScale for the material. */
  normalStrength: number;
}

// ---- seeded, tileable value noise --------------------------------------------------------

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Value noise on a lattice with the given period, so it repeats exactly across [0, 1). */
class TileNoise {
  private readonly values: Float32Array;

  constructor(
    private readonly period: number,
    seed: number
  ) {
    const random = mulberry32(seed);
    this.values = new Float32Array(period * period);
    for (let i = 0; i < this.values.length; i++) this.values[i] = random();
  }

  sample(u: number, v: number): number {
    const p = this.period;
    const x = u * p;
    const y = v * p;
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    let fx = x - ix;
    let fy = y - iy;
    fx = fx * fx * (3 - 2 * fx);
    fy = fy * fy * (3 - 2 * fy);
    const x0 = ((ix % p) + p) % p;
    const y0 = ((iy % p) + p) % p;
    const x1 = (x0 + 1) % p;
    const y1 = (y0 + 1) % p;
    const a = this.values[y0 * p + x0];
    const b = this.values[y0 * p + x1];
    const c = this.values[y1 * p + x0];
    const d = this.values[y1 * p + x1];
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  }
}

class Fbm {
  private readonly octaves: TileNoise[];
  private readonly norm: number;

  constructor(basePeriod: number, count: number, seed: number) {
    this.octaves = [];
    let norm = 0;
    for (let i = 0; i < count; i++) {
      this.octaves.push(new TileNoise(basePeriod << i, seed + i * 101));
      norm += 1 / (1 << i);
    }
    this.norm = norm;
  }

  sample(u: number, v: number): number {
    let sum = 0;
    for (let i = 0; i < this.octaves.length; i++) sum += this.octaves[i].sample(u, v) / (1 << i);
    return sum / this.norm;
  }
}

/** Deterministic pseudo-random value for an integer cell. */
function hash2(x: number, y: number, seed: number): number {
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(seed, 2147483647);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

const TAU = Math.PI * 2;

// ---- canvas helpers ------------------------------------------------------------------------

function makeCanvas(width: number, height: number): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('2D canvas unavailable');
  return { canvas, ctx };
}

/** A canvas from interleaved RGB bytes. */
function rgbCanvas(width: number, height: number, rgb: Uint8ClampedArray): HTMLCanvasElement {
  const { canvas, ctx } = makeCanvas(width, height);
  const image = ctx.createImageData(width, height);
  for (let i = 0, j = 0; i < rgb.length; i += 3, j += 4) {
    image.data[j] = rgb[i];
    image.data[j + 1] = rgb[i + 1];
    image.data[j + 2] = rgb[i + 2];
    image.data[j + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  return canvas;
}

/** Red channel of a canvas as 0–1 values. */
function readChannel(canvas: HTMLCanvasElement): Float32Array {
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('2D canvas unavailable');
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  const out = new Float32Array(canvas.width * canvas.height);
  for (let i = 0; i < out.length; i++) out[i] = data[i * 4] / 255;
  return out;
}

/**
 * A tangent-space normal map (OpenGL convention, +Y up) from a height field. Sampling wraps,
 * so tileable heights give tileable normals.
 */
export function normalCanvas(height: Float32Array, width: number, h: number, strength: number): HTMLCanvasElement {
  const rgb = new Uint8ClampedArray(width * h * 3);
  for (let y = 0; y < h; y++) {
    const up = ((y - 1 + h) % h) * width;
    const down = ((y + 1) % h) * width;
    const row = y * width;
    for (let x = 0; x < width; x++) {
      const left = (x - 1 + width) % width;
      const right = (x + 1) % width;
      const dx = (height[row + right] - height[row + left]) * strength;
      // Canvas rows run downwards while texture v runs upwards, hence the sign.
      const dy = (height[down + x] - height[up + x]) * strength;
      const inv = 1 / Math.sqrt(dx * dx + dy * dy + 1);
      const i = (row + x) * 3;
      rgb[i] = (-dx * inv * 0.5 + 0.5) * 255;
      rgb[i + 1] = (dy * inv * 0.5 + 0.5) * 255;
      rgb[i + 2] = (inv * 0.5 + 0.5) * 255;
    }
  }
  return rgbCanvas(width, h, rgb);
}

/** Roughness in green and metalness in blue, as three.js reads them. */
export function surfaceCanvas(width: number, h: number, roughness: Float32Array, metalness?: Float32Array): HTMLCanvasElement {
  const rgb = new Uint8ClampedArray(width * h * 3);
  for (let i = 0; i < roughness.length; i++) {
    rgb[i * 3] = 255;
    rgb[i * 3 + 1] = roughness[i] * 255;
    rgb[i * 3 + 2] = metalness ? metalness[i] * 255 : 0;
  }
  return rgbCanvas(width, h, rgb);
}

/** Scales a canvas up (smoothly) for the colour map; the detail maps stay at base size. */
function upscale(source: HTMLCanvasElement, width: number, height: number): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  if (source.width === width && source.height === height) {
    const ctx = source.getContext('2d');
    if (!ctx) throw new Error('2D canvas unavailable');
    return { canvas: source, ctx };
  }
  const out = makeCanvas(width, height);
  out.ctx.imageSmoothingEnabled = true;
  out.ctx.drawImage(source, 0, 0, width, height);
  return out;
}

interface Painted {
  color: HTMLCanvasElement;
  normal?: HTMLCanvasElement;
  surface?: HTMLCanvasElement;
  hasMetal?: boolean;
  emissive?: HTMLCanvasElement;
  normalStrength: number;
}

// ---- marble -------------------------------------------------------------------------------

/**
 * Polished white marble in slabs (four by four per repeat), like the Mataf's near-white
 * marble: soft cloudiness, a few faint wavy veins (contours of a noise field, so they wander
 * like real veining instead of running in straight lines), a slightly different tone per slab,
 * and recessed joints. The polish varies (veins and joints are less glossy).
 */
function marble(size: number, detail: boolean): Painted {
  const n = Math.min(size, 512);
  const cloud = new Fbm(2, 3, 11);
  const veinField = new Fbm(3, 4, 23);
  const veinField2 = new Fbm(5, 3, 31);
  const fine = new Fbm(16, 3, 37);
  const slabs = 4;
  const rgb = new Uint8ClampedArray(n * n * 3);
  const height = new Float32Array(n * n);
  const rough = new Float32Array(n * n);
  const joint = 1.4 / n; // joint half-width in uv
  for (let y = 0; y < n; y++) {
    const v = y / n;
    for (let x = 0; x < n; x++) {
      const u = x / n;
      const c = cloud.sample(u, v);
      const f = fine.sample(u, v);
      // Veins follow the 0.5 contour of two noise fields: a main one with a soft halo, and a
      // fainter, finer one. Both are kept light; the Mataf's marble is almost white.
      const d1 = Math.abs(veinField.sample(u, v) - 0.5);
      const d2 = Math.abs(veinField2.sample(u, v) - 0.5);
      const halo = (1 - smoothstep(0, 0.05, d1)) * (0.2 + 0.5 * c);
      const core = (1 - smoothstep(0, 0.008, d1)) * (0.25 + 0.3 * c);
      const thin = (1 - smoothstep(0, 0.006, d2)) * 0.18 * c;
      const m1 = halo + core;
      const slabTone = (hash2(Math.floor(u * slabs), Math.floor(v * slabs), 5) - 0.5) * 6;
      const base = 245 + slabTone - c * 7 - f * 3;
      const g = base - (halo * 9 + core * 15 + thin * 10);
      const i = (y * n + x) * 3;
      rgb[i] = g + 2 + m1 * 2;
      rgb[i + 1] = g + 1 + m1 * 0.5;
      rgb[i + 2] = g - 2 - m1 * 2;
      const ju = Math.abs(u * slabs - Math.round(u * slabs)) / slabs;
      const jv = Math.abs(v * slabs - Math.round(v * slabs)) / slabs;
      const inJoint = Math.min(ju, jv) < joint;
      const k = y * n + x;
      height[k] = inJoint ? 0.15 : 0.6 + (f - 0.5) * 0.06 - m1 * 0.02;
      rough[k] = inJoint ? 0.75 : 0.14 + m1 * 0.08 + thin * 0.05 + c * 0.05;
    }
  }
  const { canvas, ctx } = upscale(rgbCanvas(n, n, rgb), size, size);
  // Crisp joint lines at full resolution.
  ctx.strokeStyle = 'rgba(140, 132, 120, 0.3)';
  ctx.lineWidth = Math.max(1, size / 512);
  ctx.beginPath();
  for (let k = 0; k < slabs; k++) {
    const p = (k * size) / slabs;
    ctx.moveTo(p + 0.5, 0);
    ctx.lineTo(p + 0.5, size);
    ctx.moveTo(0, p + 0.5);
    ctx.lineTo(size, p + 0.5);
  }
  ctx.stroke();
  return {
    color: canvas,
    normal: detail ? normalCanvas(height, n, n, 3) : undefined,
    surface: detail ? surfaceCanvas(n, n, rough) : undefined,
    normalStrength: 0.35,
  };
}

// ---- stone ----------------------------------------------------------------------------------

/** Light ashlar: four courses per repeat, staggered joints, each block its own tone, bevelled
 *  edges and fine chisel grain. */
function stone(size: number, detail: boolean): Painted {
  const n = Math.min(size, 512);
  const grain = new Fbm(16, 3, 5);
  const blotch = new Fbm(2, 3, 77);
  const rows = 4;
  const bevel = 3.2 / n;
  const rgb = new Uint8ClampedArray(n * n * 3);
  const height = new Float32Array(n * n);
  for (let y = 0; y < n; y++) {
    const v = y / n;
    const row = Math.floor(v * rows);
    const fv = v * rows - row;
    for (let x = 0; x < n; x++) {
      const u = x / n;
      const shift = row % 2 ? 0.25 : 0;
      const su = (u + shift) % 1;
      const col = Math.floor(su * 2);
      const fu = su * 2 - col;
      const tone = (hash2(row, col, 9) - 0.5) * 0.55;
      // Distance to the block's edge, in uv.
      const edge = Math.min(fu / 2, (1 - fu) / 2, fv / rows, (1 - fv) / rows);
      const g = grain.sample(u, v);
      const b = blotch.sample(u, v);
      const bevelK = smoothstep(0, bevel, edge);
      let c = 214 + tone * 16 + (g - 0.5) * 16 + (b - 0.5) * 12;
      // Slight weathering towards the bottom of each block.
      c -= fv > 0.75 ? (fv - 0.75) * 10 : 0;
      c = c * (0.9 + 0.1 * bevelK);
      const i = (y * n + x) * 3;
      rgb[i] = c + 4;
      rgb[i + 1] = c + 1;
      rgb[i + 2] = c - 7;
      height[y * n + x] = bevelK * 0.85 + (g - 0.5) * 0.12;
    }
  }
  return {
    color: upscale(rgbCanvas(n, n, rgb), size, size).canvas,
    normal: detail ? normalCanvas(height, n, n, 2.2) : undefined,
    normalStrength: 0.6,
  };
}

// ---- granite paving, rock --------------------------------------------------------------------

function plaza(size: number, detail: boolean): Painted {
  const n = Math.min(size, 512);
  const speckle = new Fbm(96, 1, 31);
  const speckle2 = new Fbm(64, 2, 47);
  const cloud = new Fbm(2, 2, 61);
  const rgb = new Uint8ClampedArray(n * n * 3);
  const height = new Float32Array(n * n);
  const rough = new Float32Array(n * n);
  const joint = 1.5 / n;
  for (let y = 0; y < n; y++) {
    const v = y / n;
    for (let x = 0; x < n; x++) {
      const u = x / n;
      const s = speckle.sample(u, v);
      const s2 = speckle2.sample(u, v);
      const dark = s > 0.78 ? 46 : s > 0.7 ? 20 : 0;
      const light = s2 > 0.8 ? 14 : 0;
      const c = 198 - dark + light + (cloud.sample(u, v) - 0.5) * 12;
      const slab = hash2(u < 0.5 ? 0 : 1, v < 0.5 ? 0 : 1, 3) - 0.5;
      const i = (y * n + x) * 3;
      rgb[i] = c + slab * 8;
      rgb[i + 1] = c - 1 + slab * 8;
      rgb[i + 2] = c - 4 + slab * 6;
      const ju = Math.min(u, Math.abs(u - 0.5), 1 - u);
      const jv = Math.min(v, Math.abs(v - 0.5), 1 - v);
      const inJoint = Math.min(ju, jv) < joint;
      height[y * n + x] = inJoint ? 0 : 0.6;
      rough[y * n + x] = inJoint ? 0.9 : 0.5 + (s - 0.5) * 0.2;
    }
  }
  return {
    color: upscale(rgbCanvas(n, n, rgb), size, size).canvas,
    normal: detail ? normalCanvas(height, n, n, 2.5) : undefined,
    surface: detail ? surfaceCanvas(n, n, rough) : undefined,
    normalStrength: 0.5,
  };
}

function rock(size: number, detail: boolean): Painted {
  const n = Math.min(size, 256);
  const ridged = new Fbm(4, 5, 23);
  const strata = new Fbm(3, 2, 99);
  const rgb = new Uint8ClampedArray(n * n * 3);
  const height = new Float32Array(n * n);
  for (let y = 0; y < n; y++) {
    const v = y / n;
    for (let x = 0; x < n; x++) {
      const u = x / n;
      const r = 1 - Math.abs(ridged.sample(u, v) * 2 - 1);
      const s = Math.sin((v * 7 + strata.sample(u, v) * 3) * TAU) * 0.5 + 0.5;
      const h = r * 0.75 + s * 0.25;
      const c = 92 + h * 78;
      const i = (y * n + x) * 3;
      rgb[i] = c + 10;
      rgb[i + 1] = c + 1;
      rgb[i + 2] = c - 12;
      height[y * n + x] = h;
    }
  }
  return {
    color: rgbCanvas(n, n, rgb),
    normal: detail ? normalCanvas(height, n, n, 5) : undefined,
    normalStrength: 1,
  };
}

// ---- the Black Stone and Maqam Ibrahim's lattice ------------------------------------------------

/**
 * The Black Stone's exposed face, seen through its silver frame: fragments of dark,
 * reddish-brown stone, polished smooth by pilgrims' hands, cemented together in a brownish paste
 * (Wikipedia; Saudipedia). The pieces are raised and glossy; the paste is duller and recessed.
 * The real pieces' shapes and places are not reproduced: these are illustrative. The texture
 * spans the frame's oval opening (u across, v up).
 */
function blackStone(size: number, detail: boolean): Painted {
  const n = Math.min(size, 256);
  const grain = new Fbm(24, 3, 71);
  const cloud = new Fbm(4, 2, 73);
  // Fragment centres, jittered on a loose grid over the opening (a Voronoi mosaic: each piece is
  // the area nearest its centre, the seams between pieces are paste).
  const random = mulberry32(19);
  const seeds: { u: number; v: number; tone: number }[] = [];
  for (let gy = 0; gy < 4; gy++) {
    for (let gx = 0; gx < 3; gx++) {
      seeds.push({ u: 0.2 + gx * 0.3 + (random() - 0.5) * 0.18, v: 0.14 + gy * 0.24 + (random() - 0.5) * 0.16, tone: random() });
    }
  }
  const rgb = new Uint8ClampedArray(n * n * 3);
  const height = new Float32Array(n * n);
  const rough = new Float32Array(n * n);
  for (let y = 0; y < n; y++) {
    const v = 1 - y / n;
    for (let x = 0; x < n; x++) {
      const u = x / n;
      let d1 = Infinity;
      let d2 = Infinity;
      let tone = 0;
      for (const p of seeds) {
        const d = Math.hypot((u - p.u) * 1.15, v - p.v);
        if (d < d1) {
          d2 = d1;
          d1 = d;
          tone = p.tone;
        } else if (d < d2) d2 = d;
      }
      const g = grain.sample(u, v) - 0.5;
      const c = cloud.sample(u, v) - 0.5;
      // Wandering seams, and a bed of paste round the edge of the opening.
      const seam = smoothstep(0.012, 0.04, d2 - d1 + g * 0.03);
      const bed = 1 - smoothstep(0.4, 0.47, Math.hypot(u - 0.5, v - 0.5) + g * 0.04);
      const stone = seam * bed;
      const i = (y * n + x) * 3;
      // Paste: a dull, dark brown. Stone: near-black with a deep reddish-brown cast.
      const paste = [34 + g * 8, 25 + g * 6, 21 + g * 5];
      const rock = [20 + tone * 9 + c * 10 + g * 6, 13 + tone * 5 + c * 6 + g * 4, 12 + tone * 3 + c * 5 + g * 3];
      for (let ch = 0; ch < 3; ch++) rgb[i + ch] = paste[ch] + (rock[ch] - paste[ch]) * stone;
      // Pieces raised and worn smooth; paste recessed and dull.
      height[y * n + x] = stone * (0.6 + 0.4 * smoothstep(0, 0.12, d2 - d1)) + g * 0.04;
      rough[y * n + x] = 0.6 - stone * 0.45 + Math.abs(g) * 0.1;
    }
  }
  return {
    color: rgbCanvas(n, n, rgb),
    normal: detail ? normalCanvas(height, n, n, 3) : undefined,
    surface: detail ? surfaceCanvas(n, n, rough) : undefined,
    normalStrength: 0.55,
  };
}

/** Aspect of one face of Maqam Ibrahim's cage: width ÷ height. */
const LATTICE_ASPECT = MAQAM.cage.side / MAQAM.cage.panel;

/**
 * One face of Maqam Ibrahim's gilded cage: a frame round a pointed arch filled with an
 * arabesque grille — interlaced circles with scrolling tendrils, as on the real panels (an
 * illustrative pattern, not a copy). Transparent between the bars (the alpha channel), so the
 * glass and the stone show through.
 */
function lattice(size: number, detail: boolean): Painted {
  const h = Math.min(size, 1024);
  const w = Math.round(h * LATTICE_ASPECT);
  const draw = (ctx: CanvasRenderingContext2D, ink: string, deep: string) => {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = ink;
    ctx.fillStyle = ink;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    const frame = w * 0.07;
    // The frame: solid round the edge, a deeper band at the foot.
    ctx.fillRect(0, 0, w, frame);
    ctx.fillRect(0, h - frame * 1.6, w, frame * 1.6);
    ctx.fillRect(0, 0, frame, h);
    ctx.fillRect(w - frame, 0, frame, h);
    // The pointed arch inside it.
    const left = frame * 1.6;
    const right = w - frame * 1.6;
    const top = frame * 1.8;
    const spring = top + (right - left) * 0.75;
    const bottom = h - frame * 2.3;
    const arch = new Path2D();
    arch.moveTo(left, bottom);
    arch.lineTo(left, spring);
    arch.quadraticCurveTo(left, top + (spring - top) * 0.25, w / 2, top);
    arch.quadraticCurveTo(right, top + (spring - top) * 0.25, right, spring);
    arch.lineTo(right, bottom);
    arch.closePath();
    // Spandrels above the arch: solid, with a pierced roundel each side.
    ctx.beginPath();
    ctx.rect(frame, frame, w - frame * 2, spring - frame);
    ctx.fill();
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill(arch);
    for (const cx of [frame * 2.2, w - frame * 2.2]) {
      ctx.beginPath();
      ctx.arc(cx, top + frame * 0.6, frame * 0.55, 0, TAU);
      ctx.fill();
    }
    ctx.restore();
    // Inside the arch: the grille, clipped to it.
    ctx.save();
    ctx.clip(arch);
    const cell = (right - left) / 2.5;
    const line = Math.max(2, w * 0.022);
    ctx.lineWidth = line;
    for (let row = -1; row * cell < h + cell; row++) {
      for (let col = -1; col <= 3; col++) {
        const cx = left + col * cell + (row % 2 ? cell / 2 : 0);
        const cy = bottom - row * cell * 0.87;
        // Interlaced circles…
        ctx.beginPath();
        ctx.arc(cx, cy, cell * 0.5, 0, TAU);
        ctx.stroke();
        // …each holding a small four-petalled rosette…
        ctx.beginPath();
        for (let k = 0; k < 4; k++) {
          const a = (k / 4) * TAU + Math.PI / 4;
          ctx.moveTo(cx, cy);
          ctx.quadraticCurveTo(cx + Math.cos(a - 0.5) * cell * 0.3, cy + Math.sin(a - 0.5) * cell * 0.3, cx + Math.cos(a) * cell * 0.24, cy + Math.sin(a) * cell * 0.24);
          ctx.quadraticCurveTo(cx + Math.cos(a + 0.5) * cell * 0.3, cy + Math.sin(a + 0.5) * cell * 0.3, cx, cy);
        }
        ctx.lineWidth = line * 0.7;
        ctx.stroke();
        ctx.lineWidth = line;
        // …and scrolling tendrils in the gaps between them.
        ctx.beginPath();
        const sx = cx + cell * 0.5;
        const sy = cy - cell * 0.29;
        ctx.arc(sx, sy, cell * 0.13, Math.PI * 0.2, Math.PI * 1.6);
        ctx.stroke();
      }
    }
    ctx.restore();
    // The arch's own moulding, over the grille's ends.
    ctx.lineWidth = line * 1.8;
    ctx.strokeStyle = deep;
    ctx.stroke(arch);
  };
  const color = makeCanvas(w, h);
  draw(color.ctx, '#ffffff', '#e8dcc0');
  let normal: HTMLCanvasElement | undefined;
  if (detail) {
    // Relief from the same drawing: bars raised, gaps low.
    const relief = makeCanvas(w, h);
    relief.ctx.fillStyle = '#000';
    relief.ctx.fillRect(0, 0, w, h);
    draw(relief.ctx, '#ffffff', '#ffffff');
    const data = relief.ctx.getImageData(0, 0, w, h).data;
    const field = new Float32Array(w * h);
    for (let i = 0; i < field.length; i++) field[i] = Math.max(data[i * 4], data[i * 4 + 3]) / 255;
    normal = normalCanvas(field, w, h, 3);
  }
  return { color: color.canvas, normal, normalStrength: 0.6 };
}

// ---- drawn designs (ceiling, embroidery) -------------------------------------------------------

/**
 * Designs drawn with the canvas API are drawn several times with different "inks": once in
 * colour, once as a height map (raised = white) and once as a metal mask (gold/silver = white).
 * The same drawing code therefore produces matching colour, relief and shine.
 */
interface Inks {
  ground: string;
  gold: string | CanvasGradient;
  goldDark: string;
  silver: string;
  /** Recesses (ceiling coffers). */
  recess: string;
}

type Pass = 'color' | 'height' | 'metal';

function inksFor(pass: Pass, ctx: CanvasRenderingContext2D, h: number): Inks {
  if (pass === 'height') return { ground: '#000', gold: '#e6e6e6', goldDark: '#a0a0a0', silver: '#fff', recess: '#000' };
  if (pass === 'metal') return { ground: '#000', gold: '#fff', goldDark: '#fff', silver: '#fff', recess: '#000' };
  const gold = ctx.createLinearGradient(0, 0, 0, h);
  gold.addColorStop(0, '#f1d98c');
  gold.addColorStop(0.45, '#c79a3e');
  gold.addColorStop(0.55, '#b78a33');
  gold.addColorStop(1, '#ecd07c');
  return { ground: '#0d0d0e', gold, goldDark: '#8f6c25', silver: '#d6d8dc', recess: '#000' };
}

/** Fine couched-thread striations over everything raised (height pass only). */
function stitch(ctx: CanvasRenderingContext2D, w: number, h: number): void {
  ctx.save();
  ctx.globalCompositeOperation = 'multiply';
  ctx.strokeStyle = 'rgba(150,150,150,1)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = -h; x < w; x += 3) {
    ctx.moveTo(x, h);
    ctx.lineTo(x + h, 0);
  }
  ctx.stroke();
  ctx.restore();
}

function drawRosette(ctx: CanvasRenderingContext2D, inks: Inks, cx: number, cy: number, r: number, points: number): void {
  ctx.beginPath();
  for (let k = 0; k < points * 2; k++) {
    const angle = (k / (points * 2)) * TAU - Math.PI / 2;
    const radius = k % 2 ? r * 0.58 : r;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    if (k === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = inks.gold;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.42, 0, TAU);
  ctx.fillStyle = inks.ground;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.28, 0, TAU);
  ctx.fillStyle = inks.silver;
  ctx.fill();
}

/**
 * A guilloche: two interlaced waves forming a chain of lens shapes between x0 and x1, each lens
 * holding a small rosette. Deliberately geometric — nothing in it resembles lettering.
 */
function drawGuilloche(ctx: CanvasRenderingContext2D, inks: Inks, x0: number, x1: number, cy: number, amp: number, loops: number, weight: number): void {
  const len = x1 - x0;
  ctx.lineWidth = weight;
  ctx.lineCap = 'round';
  ctx.strokeStyle = inks.gold;
  for (const sign of [1, -1]) {
    ctx.beginPath();
    for (let i = 0; i <= loops * 24; i++) {
      const t = i / (loops * 24);
      const x = x0 + t * len;
      const y = cy + sign * Math.sin(t * loops * Math.PI) * amp;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  // Straight rules above and below the chain.
  ctx.lineWidth = weight * 0.5;
  ctx.beginPath();
  ctx.moveTo(x0, cy - amp * 1.25);
  ctx.lineTo(x1, cy - amp * 1.25);
  ctx.moveTo(x0, cy + amp * 1.25);
  ctx.lineTo(x1, cy + amp * 1.25);
  ctx.stroke();
  for (let k = 0; k < loops; k++) {
    const x = x0 + ((k + 0.5) / loops) * len;
    const r = Math.min(amp * 0.62, (len / loops) * 0.2);
    ctx.fillStyle = k % 2 ? inks.silver : inks.gold;
    for (let p = 0; p < 6; p++) {
      const a = (p / 6) * TAU;
      ctx.beginPath();
      ctx.ellipse(x + Math.cos(a) * r * 0.55, cy + Math.sin(a) * r * 0.55, r * 0.45, r * 0.2, a, 0, TAU);
      ctx.fill();
    }
    ctx.beginPath();
    ctx.arc(x, cy, r * 0.22, 0, TAU);
    ctx.fillStyle = k % 2 ? inks.gold : inks.silver;
    ctx.fill();
  }
}

/** A double line border with a row of small beads between. */
function drawBeadedBorder(ctx: CanvasRenderingContext2D, inks: Inks, x: number, y: number, w: number, h: number, gap: number, line: number): void {
  ctx.lineWidth = line;
  ctx.strokeStyle = inks.gold;
  ctx.strokeRect(x, y, w, h);
  ctx.strokeRect(x + gap * 2, y + gap * 2, w - gap * 4, h - gap * 4);
  ctx.fillStyle = inks.silver;
  const r = gap * 0.42;
  const stepAlong = gap * 2.2;
  for (let px = x + gap * 2; px <= x + w - gap; px += stepAlong) {
    for (const py of [y + gap, y + h - gap]) {
      ctx.beginPath();
      ctx.arc(px, py, r, 0, TAU);
      ctx.fill();
    }
  }
  for (let py = y + gap * 2; py <= y + h - gap; py += stepAlong) {
    for (const px of [x + gap, x + w - gap]) {
      ctx.beginPath();
      ctx.arc(px, py, r, 0, TAU);
      ctx.fill();
    }
  }
}

/** An elongated cartouche with pointed (ogee) ends. */
function cartouchePath(ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number): void {
  const cy = (y0 + y1) / 2;
  const tip = (y1 - y0) * 0.9;
  ctx.beginPath();
  ctx.moveTo(x0, cy);
  ctx.bezierCurveTo(x0 + tip * 0.35, y0, x0 + tip * 0.6, y0, x0 + tip, y0);
  ctx.lineTo(x1 - tip, y0);
  ctx.bezierCurveTo(x1 - tip * 0.6, y0, x1 - tip * 0.35, y0, x1, cy);
  ctx.bezierCurveTo(x1 - tip * 0.35, y1, x1 - tip * 0.6, y1, x1 - tip, y1);
  ctx.lineTo(x0 + tip, y1);
  ctx.bezierCurveTo(x0 + tip * 0.6, y1, x0 + tip * 0.35, y1, x0, cy);
  ctx.closePath();
}

/** Runs a drawing function for colour, height and metal, and assembles the texture set. */
function embroidered(width: number, height: number, detail: boolean, draw: (ctx: CanvasRenderingContext2D, inks: Inks, pass: Pass) => void): Painted {
  const colour = makeCanvas(width, height);
  draw(colour.ctx, inksFor('color', colour.ctx, height), 'color');
  if (!detail) return { color: colour.canvas, normalStrength: 1, hasMetal: true };
  const relief = makeCanvas(width, height);
  draw(relief.ctx, inksFor('height', relief.ctx, height), 'height');
  stitch(relief.ctx, width, height);
  const metal = makeCanvas(width, height);
  draw(metal.ctx, inksFor('metal', metal.ctx, height), 'metal');
  const heights = readChannel(relief.canvas);
  const metalness = readChannel(metal.canvas);
  // Couching thread is fairly glossy; the silk ground is less so.
  const rough = new Float32Array(metalness.length);
  for (let i = 0; i < rough.length; i++) rough[i] = 0.62 - metalness[i] * 0.34;
  return {
    color: colour.canvas,
    normal: normalCanvas(heights, width, height, 2.4),
    surface: surfaceCanvas(width, height, rough, metalness),
    hasMetal: true,
    normalStrength: 0.9,
  };
}

/**
 * The belt texture is an atlas of three rows — the same layout as the photographic belt atlas
 * (assets/kiswah/hizam-atlas.webp), so one belt geometry works with either. Each row covers
 * half of one side of the Kaaba.
 */
export const BELT_ATLAS = { width: 1536, height: 760, rowHeight: 248, gap: 8, rows: 3 } as const;

/** One abstract belt piece: a cartouche with an interlaced guilloche, beaded borders, and
 *  half rosette roundels at both ends (neighbouring pieces complete each other's). */
function drawBeltPiece(ctx: CanvasRenderingContext2D, inks: Inks, x0: number, y0: number, w: number, h: number): void {
  const line = Math.max(2, h * 0.03);
  for (const y of [h * 0.06, h * 0.94]) {
    ctx.fillStyle = inks.gold;
    ctx.fillRect(x0, y0 + y - line / 2, w, line);
  }
  ctx.fillStyle = inks.silver;
  for (let x = h * 0.05; x < w; x += h * 0.1) {
    for (const y of [h * 0.13, h * 0.87]) {
      ctx.beginPath();
      ctx.arc(x0 + x, y0 + y, h * 0.022, 0, TAU);
      ctx.fill();
    }
  }
  ctx.lineWidth = line;
  ctx.strokeStyle = inks.gold;
  cartouchePath(ctx, x0 + w * 0.1, y0 + h * 0.22, x0 + w * 0.9, y0 + h * 0.78);
  ctx.stroke();
  cartouchePath(ctx, x0 + w * 0.115, y0 + h * 0.27, x0 + w * 0.885, y0 + h * 0.73);
  ctx.lineWidth = line * 0.5;
  ctx.stroke();
  drawGuilloche(ctx, inks, x0 + w * 0.19, x0 + w * 0.81, y0 + h * 0.5, h * 0.13, 7, line * 0.8);
  for (const cx of [x0, x0 + w]) {
    ctx.beginPath();
    ctx.arc(cx, y0 + h * 0.5, h * 0.34, 0, TAU);
    ctx.lineWidth = line;
    ctx.strokeStyle = inks.gold;
    ctx.stroke();
    drawRosette(ctx, inks, cx, y0 + h * 0.5, h * 0.26, 8);
  }
}

/**
 * The abstract belt, used until the photographic belt has loaded (or if it cannot load). The
 * real belt has four pieces per side, so each row (half a side) holds two pieces.
 */
function hizam(size: number, detail: boolean): Painted {
  const scale = Math.min(size, 1024) / BELT_ATLAS.width;
  const w = Math.round(BELT_ATLAS.width * scale);
  const h = Math.round(BELT_ATLAS.height * scale);
  const rowH = BELT_ATLAS.rowHeight * scale;
  const gap = BELT_ATLAS.gap * scale;
  return embroidered(w, h, detail, (ctx, inks) => {
    ctx.fillStyle = inks.ground;
    ctx.fillRect(0, 0, w, h);
    ctx.save();
    for (let row = 0; row < BELT_ATLAS.rows; row++) {
      const y = row * (rowH + gap);
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, y, w, rowH);
      ctx.clip();
      drawBeltPiece(ctx, inks, 0, y, w / 2, rowH);
      drawBeltPiece(ctx, inks, w / 2, y, w / 2, rowH);
      ctx.restore();
    }
    ctx.restore();
  });
}

/**
 * The door curtain (sitara), about 7.75 m × 3.5 m. Abstract registers: a top cartouche, a
 * great pointed arch with arabesque and a central medallion, then smaller panels below.
 */
function sitara(size: number, detail: boolean): Painted {
  const w = Math.min(size, 512);
  const h = w * 2;
  return embroidered(w, h, detail, (ctx, inks) => {
    ctx.fillStyle = inks.ground;
    ctx.fillRect(0, 0, w, h);
    const line = Math.max(2, w * 0.012);
    drawBeadedBorder(ctx, inks, w * 0.03, w * 0.03, w * 0.94, h - w * 0.06, w * 0.018, line);
    // Top register.
    ctx.lineWidth = line;
    ctx.strokeStyle = inks.gold;
    cartouchePath(ctx, w * 0.12, h * 0.05, w * 0.88, h * 0.13);
    ctx.stroke();
    drawGuilloche(ctx, inks, w * 0.22, w * 0.78, h * 0.09, h * 0.016, 5, line * 0.7);
    // The great arch.
    const ax0 = w * 0.12;
    const ax1 = w * 0.88;
    const spring = h * 0.42;
    const top = h * 0.17;
    const archPath = (inset: number) => {
      ctx.beginPath();
      ctx.moveTo(ax0 + inset, h * 0.62);
      ctx.lineTo(ax0 + inset, spring);
      ctx.quadraticCurveTo(ax0 + inset, top + inset * 1.6, w / 2, top + inset * 1.6);
      ctx.quadraticCurveTo(ax1 - inset, top + inset * 1.6, ax1 - inset, spring);
      ctx.lineTo(ax1 - inset, h * 0.62);
      ctx.closePath();
    };
    archPath(0);
    ctx.lineWidth = line * 1.3;
    ctx.stroke();
    archPath(w * 0.03);
    ctx.lineWidth = line * 0.6;
    ctx.stroke();
    for (let k = 0; k < 5; k++) drawGuilloche(ctx, inks, w * 0.2, w * 0.8, h * (0.3 + k * 0.065), h * 0.012, 5, line * 0.6);
    ctx.beginPath();
    ctx.arc(w / 2, h * 0.44, w * 0.14, 0, TAU);
    ctx.fillStyle = inks.ground;
    ctx.fill();
    ctx.lineWidth = line;
    ctx.stroke();
    drawRosette(ctx, inks, w / 2, h * 0.44, w * 0.11, 12);
    // Spandrel rosettes.
    drawRosette(ctx, inks, w * 0.18, h * 0.2, w * 0.045, 8);
    drawRosette(ctx, inks, w * 0.82, h * 0.2, w * 0.045, 8);
    // Middle register: two cartouches.
    ctx.lineWidth = line;
    ctx.strokeStyle = inks.gold;
    cartouchePath(ctx, w * 0.1, h * 0.65, w * 0.48, h * 0.71);
    ctx.stroke();
    cartouchePath(ctx, w * 0.52, h * 0.65, w * 0.9, h * 0.71);
    ctx.stroke();
    drawGuilloche(ctx, inks, w * 0.16, w * 0.42, h * 0.68, h * 0.01, 3, line * 0.6);
    drawGuilloche(ctx, inks, w * 0.58, w * 0.84, h * 0.68, h * 0.01, 3, line * 0.6);
    // Lower register: three square panels with roundels.
    for (let k = 0; k < 3; k++) {
      const x = w * (0.1 + k * 0.28);
      const s = w * 0.24;
      const y = h * 0.76;
      ctx.lineWidth = line;
      ctx.strokeStyle = inks.gold;
      ctx.strokeRect(x, y, s, s);
      drawRosette(ctx, inks, x + s / 2, y + s / 2, s * 0.32, 8);
    }
    drawGuilloche(ctx, inks, w * 0.12, w * 0.88, h * 0.93, h * 0.012, 8, line * 0.6);
  });
}

/** A corner panel (kardashiyya): a square frame enclosing a circular medallion. Abstract. */
function kardashiyya(size: number, detail: boolean): Painted {
  const s = Math.min(size, 512);
  return embroidered(s, s, detail, (ctx, inks) => {
    ctx.fillStyle = inks.ground;
    ctx.fillRect(0, 0, s, s);
    const line = Math.max(2, s * 0.014);
    drawBeadedBorder(ctx, inks, s * 0.04, s * 0.04, s * 0.92, s * 0.92, s * 0.02, line);
    const c = s / 2;
    ctx.lineWidth = line * 1.2;
    ctx.strokeStyle = inks.gold;
    for (const r of [0.36, 0.31]) {
      ctx.beginPath();
      ctx.arc(c, c, s * r, 0, TAU);
      ctx.stroke();
    }
    ctx.fillStyle = inks.silver;
    for (let k = 0; k < 36; k++) {
      const a = (k / 36) * TAU;
      ctx.beginPath();
      ctx.arc(c + Math.cos(a) * s * 0.335, c + Math.sin(a) * s * 0.335, s * 0.008, 0, TAU);
      ctx.fill();
    }
    // Petals radiating from a central twelve-point star.
    ctx.fillStyle = inks.gold;
    for (let k = 0; k < 12; k++) {
      const a = (k / 12) * TAU;
      ctx.beginPath();
      ctx.ellipse(c + Math.cos(a) * s * 0.19, c + Math.sin(a) * s * 0.19, s * 0.07, s * 0.025, a, 0, TAU);
      ctx.fill();
    }
    drawRosette(ctx, inks, c, c, s * 0.12, 12);
    // Quarter rosettes in the corners of the square.
    for (const [x, y] of [
      [0.12, 0.12],
      [0.88, 0.12],
      [0.12, 0.88],
      [0.88, 0.88],
    ]) {
      drawRosette(ctx, inks, s * x, s * y, s * 0.05, 8);
    }
  });
}

// ---- the kiswah's silk ------------------------------------------------------------------------

/**
 * Plain black silk: fine twill and soft folds. The woven calligraphy itself comes from a
 * photograph of the real cloth (kiswah-photos.ts, weave.webp), loaded once the explorer is
 * running; this plain silk is what shows until then, or if it cannot be loaded. It carries no
 * invented pattern. One repeat here is one repeat of the weave (49 × 77 cm, see KAABA).
 */
function kiswah(size: number, detail: boolean): Painted {
  const s = Math.min(size, 512);
  const colour = makeCanvas(s, s);
  colour.ctx.fillStyle = '#0e0e0f';
  colour.ctx.fillRect(0, 0, s, s);
  // Weave grain.
  const grainNoise = new Fbm(128, 1, 9);
  const image = colour.ctx.getImageData(0, 0, s, s);
  for (let y = 0; y < s; y++) {
    for (let x = 0; x < s; x++) {
      const i = (y * s + x) * 4;
      const d = (grainNoise.sample(x / s, y / s) - 0.5) * 5;
      image.data[i] += d;
      image.data[i + 1] += d;
      image.data[i + 2] += d;
    }
  }
  colour.ctx.putImageData(image, 0, 0);
  if (!detail) return { color: colour.canvas, normalStrength: 1 };

  const height = new Float32Array(s * s);
  const rough = new Float32Array(s * s);
  for (let y = 0; y < s; y++) {
    for (let x = 0; x < s; x++) {
      const k = y * s + x;
      // Twill: fine diagonal ribs; a soft vertical fold across each repeat.
      const twill = ((x + y) % 4) / 4;
      const fold = Math.sin((x / s) * TAU) * 0.5 + 0.5;
      height[k] = twill * 0.18 + fold * 0.45;
      rough[k] = 0.78;
    }
  }
  return {
    color: colour.canvas,
    normal: normalCanvas(height, s, s, 1.6),
    surface: surfaceCanvas(s, s, rough),
    normalStrength: 0.5,
  };
}

// ---- ceiling and city ---------------------------------------------------------------------------

/** Coffered ceiling panels with gilded rosettes. */
function ceiling(size: number, detail: boolean): Painted {
  const s = Math.min(size, 512);
  const draw = (ctx: CanvasRenderingContext2D, pass: Pass) => {
    const cream = pass === 'color' ? '#efe8d8' : '#fff';
    const recess = pass === 'color' ? '#e2d8c2' : '#555';
    const bevel = pass === 'color' ? '#d4c7aa' : '#999';
    const gold = pass === 'color' ? '#c9a24b' : '#fff';
    ctx.fillStyle = cream;
    ctx.fillRect(0, 0, s, s);
    const cells = 2;
    const cell = s / cells;
    for (let i = 0; i < cells; i++) {
      for (let j = 0; j < cells; j++) {
        const x = i * cell;
        const y = j * cell;
        const m = cell * 0.12;
        ctx.fillStyle = bevel;
        ctx.fillRect(x + m, y + m, cell - 2 * m, cell - 2 * m);
        ctx.fillStyle = recess;
        ctx.fillRect(x + m * 1.5, y + m * 1.5, cell - 3 * m, cell - 3 * m);
        ctx.strokeStyle = gold;
        ctx.lineWidth = Math.max(1.5, s / 200);
        ctx.strokeRect(x + m * 1.9, y + m * 1.9, cell - 3.8 * m, cell - 3.8 * m);
        // Gilded rosette.
        const cx = x + cell / 2;
        const cy = y + cell / 2;
        ctx.fillStyle = gold;
        for (let k = 0; k < 8; k++) {
          const a = (k / 8) * TAU;
          ctx.beginPath();
          ctx.ellipse(cx + Math.cos(a) * cell * 0.07, cy + Math.sin(a) * cell * 0.07, cell * 0.06, cell * 0.022, a, 0, TAU);
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(cx, cy, cell * 0.035, 0, TAU);
        ctx.fill();
      }
    }
  };
  const colour = makeCanvas(s, s);
  draw(colour.ctx, 'color');
  if (!detail) return { color: colour.canvas, normalStrength: 1 };
  const relief = makeCanvas(s, s);
  draw(relief.ctx, 'height');
  return { color: colour.canvas, normal: normalCanvas(readChannel(relief.canvas), s, s, 3), normalStrength: 0.8 };
}

/** City façades: rows of windows by day; at night some of them are lit (emissive map). */
function city(): Painted {
  const s = 256;
  const cols = 6;
  const rows = 10;
  const day = makeCanvas(s, s);
  const night = makeCanvas(s, s);
  day.ctx.fillStyle = '#e4dccd';
  day.ctx.fillRect(0, 0, s, s);
  night.ctx.fillStyle = '#000';
  night.ctx.fillRect(0, 0, s, s);
  const random = mulberry32(77);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = (c + 0.22) * (s / cols);
      const y = (r + 0.25) * (s / rows);
      const w = (s / cols) * 0.56;
      const h = (s / rows) * 0.5;
      day.ctx.fillStyle = '#6a665f';
      day.ctx.fillRect(x, y, w, h);
      const lit = random();
      if (lit < 0.3) {
        night.ctx.fillStyle = lit < 0.08 ? '#fff1d2' : '#ffc77a';
        night.ctx.fillRect(x, y, w, h);
      }
    }
  }
  return { color: day.canvas, emissive: night.canvas, normalStrength: 1 };
}

// ---- assembly --------------------------------------------------------------------------------

export interface TextureOptions {
  size: 512 | 1024;
  anisotropy: number;
  /** Normal, roughness and metalness maps (off on the low tier). */
  detailMaps: boolean;
}

const PAINTERS: Record<TextureKey, (size: number, detail: boolean) => Painted> = {
  marble,
  stone,
  kiswah,
  hizam,
  sitara,
  kardashiyya,
  rock,
  plaza,
  ceiling,
  city: () => city(),
  blackStone,
  lattice,
};

/** Textures that repeat across surfaces (the embroidered pieces are placed once each). */
const WRAPPED: ReadonlySet<TextureKey> = new Set<TextureKey>(['marble', 'stone', 'kiswah', 'rock', 'plaza', 'ceiling', 'city']);

function wrapTexture(canvas: HTMLCanvasElement, key: TextureKey, options: TextureOptions, colour: boolean): Texture {
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = colour ? SRGBColorSpace : NoColorSpace;
  if (WRAPPED.has(key)) {
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
  }
  texture.anisotropy = options.anisotropy;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Creates one texture set. Throws if the canvas cannot be painted; callers treat textures as
 * non-essential and fall back to a plain colour (see materials.ts).
 */
export function createTextureSet(key: TextureKey, options: TextureOptions): TextureSet {
  const painted = PAINTERS[key](options.size, options.detailMaps);
  const set: TextureSet = { map: wrapTexture(painted.color, key, options, true), normalStrength: painted.normalStrength };
  if (painted.normal) set.normalMap = wrapTexture(painted.normal, key, options, false);
  if (painted.surface) {
    const surface = wrapTexture(painted.surface, key, options, false);
    set.roughnessMap = surface;
    if (painted.hasMetal) set.metalnessMap = surface;
  }
  if (painted.emissive) set.emissiveMap = wrapTexture(painted.emissive, key, options, true);
  return set;
}

export function disposeTextureSet(set: TextureSet): void {
  const unique = new Set([set.map, set.normalMap, set.roughnessMap, set.metalnessMap, set.emissiveMap]);
  for (const texture of unique) texture?.dispose();
}

export const TEXTURE_KEYS: readonly TextureKey[] = [
  'marble',
  'stone',
  'kiswah',
  'hizam',
  'sitara',
  'kardashiyya',
  'rock',
  'plaza',
  'ceiling',
  'city',
  'blackStone',
  'lattice',
];
