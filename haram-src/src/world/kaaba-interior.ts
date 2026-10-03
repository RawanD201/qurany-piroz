// The inside of the Kaaba (see data/kaaba-interior.ts for what is known and what is approximate),
// drawn after photographs of the room: cream marble walls and floor with dark green marble
// bands, the green silk above and on the ceiling, three wooden pillars with gilded bands, the
// antique lamps hanging from brass rods between them, the white cupboard, carved stone plaques,
// the inside of the door (its two leaves open into the room while the stairs stand at the door), and
// Bab al-Tawbah on its staircase in the north corner. Built in the Kaaba's local frame and turned
// with it.
//
// The room is closed and lit from within, so nothing here uses the scene's sun or sky: the flat
// surfaces carry their light baked into their vertices (lamplight, soft shadow in the corners
// and round the pillars), and the rounded and metal things use matcaps — small painted spheres
// of polished wood, gold and silver reflecting the green cloth and the cream marble. It looks the
// same by day and by night and on every quality tier, and needs no extra lights. The group is
// shown only while the visitor is inside, or can see in through the open door.

import {
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  Color,
  CylinderGeometry,
  DoubleSide,
  ExtrudeGeometry,
  Float32BufferAttribute,
  Group,
  LatheGeometry,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  MeshMatcapMaterial,
  NoColorSpace,
  PlaneGeometry,
  Quaternion,
  RepeatWrapping,
  SRGBColorSpace,
  Shape,
  SphereGeometry,
  TorusGeometry,
  Vector2,
  Vector3,
  type Material,
  type Texture,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { DOOR_LEAVES, KAABA_INTERIOR, KAABA_PLAQUES, TAWBAH_LOCAL, doorLeaves } from '../data/kaaba-interior';
import { KAABA } from '../data/layout';
import { normalCanvas } from './textures';

const { floorY, ceilingY, halfW, halfD, marbleTop, pillars, pillarBase, cupboard, stair, lampRodY, bands } = KAABA_INTERIOR;

// ---- painting helpers ---------------------------------------------------------------------------

function paint(width: number, height: number, draw: (ctx: CanvasRenderingContext2D) => void): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = width;
  c.height = height;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('2D canvas unavailable');
  draw(ctx);
  return c;
}

function texture(canvas: HTMLCanvasElement, colour = true, repeat = true): Texture {
  const t = new CanvasTexture(canvas);
  t.colorSpace = colour ? SRGBColorSpace : NoColorSpace;
  if (repeat) t.wrapS = t.wrapT = RepeatWrapping;
  return t;
}

/** A seeded random, so the room is the same on every visit. */
function seeded(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/** Faint marble veins: wandering smooth curves, a soft halo with a fine line in it. */
function veins(ctx: CanvasRenderingContext2D, rand: () => number, count: number, w: number, h: number, rgb: string, strength: number): void {
  for (let v = 0; v < count; v++) {
    const path = new Path2D();
    let x = rand() * w;
    let y = rand() * h;
    let heading = -0.6 + rand() * 1.2;
    path.moveTo(x, y);
    for (let k = 0; k < 7; k++) {
      heading += (rand() - 0.5) * 0.8;
      const step = (0.06 + rand() * 0.08) * w;
      const cx = x + Math.cos(heading) * step * 0.5 + (rand() - 0.5) * step * 0.3;
      const cy = y + Math.sin(heading) * step * 0.5 + (rand() - 0.5) * step * 0.3;
      x += Math.cos(heading) * step;
      y += Math.sin(heading) * step;
      path.quadraticCurveTo(cx, cy, x, y);
    }
    ctx.strokeStyle = `rgba(${rgb}, ${(0.03 + rand() * 0.03) * strength})`;
    ctx.lineWidth = w * (0.008 + rand() * 0.008);
    ctx.stroke(path);
    ctx.strokeStyle = `rgba(${rgb}, ${(0.08 + rand() * 0.1) * strength})`;
    ctx.lineWidth = Math.max(0.6, w * (0.0012 + rand() * 0.0014));
    ctx.stroke(path);
  }
}

/** Reads a canvas's luminance as a height field (0–1). */
function heights(canvas: HTMLCanvasElement): Float32Array {
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('2D canvas unavailable');
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  const out = new Float32Array(canvas.width * canvas.height);
  for (let i = 0; i < out.length; i++) out[i] = data[i * 4] / 255;
  return out;
}

// ---- the stone and the cloth ------------------------------------------------------------------------

/** Metres covered by one repeat of the wall and floor marble. */
const WALL_REPEAT = 3.6;
const FLOOR_REPEAT = 3.2;

/**
 * The walls' marble: large slabs (0.9 × 0.6 m) in staggered courses, cream with a few warmer and
 * greyer slabs, faint grey veining and fine joints.
 */
function wallMarble(): HTMLCanvasElement {
  const size = 1024;
  return paint(size, size, (ctx) => {
    const rand = seeded(23);
    const cols = 4;
    const rows = 6;
    const sw = size / cols;
    const sh = size / rows;
    for (let r = 0; r < rows; r++) {
      const offset = r % 2 ? sw / 2 : 0;
      for (let c = -1; c <= cols; c++) {
        const x = c * sw + offset;
        const kind = rand();
        const tone = kind < 0.12 ? [226, 214, 200] : kind < 0.22 ? [220, 218, 212] : [238, 232, 220];
        const j = (rand() - 0.5) * 8;
        ctx.fillStyle = `rgb(${tone[0] + j}, ${tone[1] + j}, ${tone[2] + j})`;
        ctx.fillRect(x, r * sh, sw, sh);
      }
    }
    veins(ctx, rand, 26, size, size, '138, 132, 122', 0.7);
    ctx.strokeStyle = 'rgba(176, 170, 160, 0.55)';
    ctx.lineWidth = 2;
    for (let r = 0; r <= rows; r++) {
      ctx.beginPath();
      ctx.moveTo(0, r * sh);
      ctx.lineTo(size, r * sh);
      ctx.stroke();
      const offset = r % 2 ? sw / 2 : 0;
      for (let c = 0; c <= cols; c++) {
        ctx.beginPath();
        ctx.moveTo(c * sw + offset, r * sh);
        ctx.lineTo(c * sw + offset, (r + 1) * sh);
        ctx.stroke();
      }
    }
  });
}

/** The floor: cream marble tiles (0.8 m), faintly veined. */
function floorMarble(): HTMLCanvasElement {
  const size = 1024;
  return paint(size, size, (ctx) => {
    const rand = seeded(11);
    const n = 4;
    const cell = size / n;
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        const j = (rand() - 0.5) * 7;
        ctx.fillStyle = `rgb(${240 + j}, ${236 + j}, ${227 + j})`;
        ctx.fillRect(c * cell, r * cell, cell, cell);
      }
    }
    veins(ctx, rand, 16, size, size, '150, 144, 134', 0.45);
    ctx.strokeStyle = 'rgba(190, 184, 172, 0.7)';
    ctx.lineWidth = 2;
    for (let i = 0; i <= n; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cell, 0);
      ctx.lineTo(i * cell, size);
      ctx.moveTo(0, i * cell);
      ctx.lineTo(size, i * cell);
      ctx.stroke();
    }
  });
}

/** Dark green marble (the skirting, the bands, the floor's border, the cupboard's top). */
function greenMarble(): HTMLCanvasElement {
  const size = 512;
  return paint(size, size, (ctx) => {
    const rand = seeded(5);
    ctx.fillStyle = '#1e3b2e';
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 40; i++) {
      const x = rand() * size;
      const y = rand() * size;
      const r = 20 + rand() * 70;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rand() < 0.5 ? '12, 34, 24' : '52, 86, 66'}, ${0.25 + rand() * 0.3})`);
      g.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
    veins(ctx, rand, 26, size, size, '200, 222, 208', 1.6);
  });
}

/**
 * The green silk over the upper walls and the ceiling: deep green, woven with a lighter pattern
 * of zigzag bands and small leaves, as in photographs of the room (an abstract pattern; nothing
 * on the real cloth is imitated letter by letter).
 */
function silk(): HTMLCanvasElement {
  const size = 512;
  return paint(size, size, (ctx) => {
    ctx.fillStyle = '#2a8257';
    ctx.fillRect(0, 0, size, size);
    const band = size / 4;
    for (let b = 0; b < 4; b++) {
      const y0 = b * band;
      // Zigzag rows of small leaves, like a woven damask.
      for (let row = 0; row < 3; row++) {
        const y = y0 + band * (0.2 + row * 0.3);
        for (let x = 0; x < size; x += 16) {
          const up = (x / 16) % 2 === 0;
          const yy = y + (up ? -6 : 6);
          const a = up ? -0.6 : 0.6;
          ctx.save();
          ctx.translate(x + 8, yy);
          ctx.rotate(a + (row % 2 ? Math.PI : 0));
          ctx.fillStyle = 'rgba(126, 196, 152, 0.34)';
          ctx.beginPath();
          ctx.ellipse(0, 0, 7, 2.6, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
      ctx.strokeStyle = 'rgba(150, 210, 172, 0.22)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x <= size; x += 32) ctx.lineTo(x, y0 + band - 4 + ((x / 32) % 2 ? -10 : 0));
      ctx.stroke();
    }
  });
}

/**
 * A carved stone plaque, as photographed in the room: a moulded frame round a field of dense
 * relief carving — here interlaced scrolls and rosettes, not lettering. The relief is painted
 * as light catching the raised edges and shadow under them. `tone` is the stone's colour.
 */
function plaque(tone: [number, number, number], seed: number, wide: boolean): HTMLCanvasElement {
  const w = wide ? 384 : 256;
  const h = wide ? 256 : 384;
  return paint(w, h, (ctx) => {
    const rand = seeded(seed);
    const [r, g, b] = tone;
    const shade = (k: number, a = 1) => `rgba(${Math.round(r * k)}, ${Math.round(g * k)}, ${Math.round(b * k)}, ${a})`;
    ctx.fillStyle = shade(1);
    ctx.fillRect(0, 0, w, h);
    // Weathering: soft blotches of tone.
    for (let i = 0; i < 26; i++) {
      const x = rand() * w;
      const y = rand() * h;
      const rr = 10 + rand() * 40;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, rr);
      grad.addColorStop(0, shade(rand() < 0.5 ? 0.9 : 1.08, 0.35));
      grad.addColorStop(1, shade(1, 0));
      ctx.fillStyle = grad;
      ctx.fillRect(x - rr, y - rr, rr * 2, rr * 2);
    }
    // Relief: each stroke drawn as shadow (below right), highlight (above left), then itself.
    const carve = (draw: () => void, width: number) => {
      for (const [dx, dy, k] of [[1.6, 1.6, 0.68], [-1, -1, 1.18], [0, 0, 1.02]] as const) {
        ctx.save();
        ctx.translate(dx, dy);
        ctx.strokeStyle = shade(k);
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        draw();
        ctx.restore();
      }
    };
    // The moulded frame.
    carve(() => ctx.strokeRect(10, 10, w - 20, h - 20), 7);
    carve(() => ctx.strokeRect(22, 22, w - 44, h - 44), 2.5);
    // The field, a touch darker, filled with interlaced scrolls and small rosettes.
    const cell = 30;
    for (let y = 28 + cell / 2; y < h - 28; y += cell) {
      for (let x = 28 + cell / 2; x < w - 28; x += cell) {
        const kind = rand();
        const rr = cell * (0.28 + rand() * 0.14);
        if (kind < 0.55) {
          const start = rand() * Math.PI * 2;
          carve(() => {
            ctx.beginPath();
            ctx.arc(x, y, rr, start, start + Math.PI * 1.4);
            ctx.stroke();
          }, 2.6);
          carve(() => {
            ctx.beginPath();
            ctx.arc(x + Math.cos(start) * rr * 0.5, y + Math.sin(start) * rr * 0.5, rr * 0.45, start + 1, start + 4);
            ctx.stroke();
          }, 2);
        } else if (kind < 0.8) {
          carve(() => {
            ctx.beginPath();
            for (let k = 0; k < 6; k++) {
              const a = (k / 6) * Math.PI * 2;
              ctx.moveTo(x, y);
              ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
            }
            ctx.stroke();
          }, 2.2);
        } else {
          carve(() => {
            ctx.beginPath();
            ctx.moveTo(x - rr, y + rr * 0.3);
            ctx.bezierCurveTo(x - rr * 0.3, y - rr, x + rr * 0.3, y + rr, x + rr, y - rr * 0.3);
            ctx.stroke();
          }, 2.6);
        }
      }
    }
  });
}

/** An embroidered panel hung on the cloth: a red border round gold work on a cream ground. */
function embroidery(): HTMLCanvasElement {
  return paint(384, 256, (ctx) => {
    ctx.fillStyle = '#8e2225';
    ctx.fillRect(0, 0, 384, 256);
    ctx.fillStyle = '#d8c9a2';
    ctx.fillRect(22, 22, 340, 212);
    ctx.strokeStyle = '#c69a3e';
    ctx.lineWidth = 3;
    ctx.strokeRect(30, 30, 324, 196);
    // A central medallion and scrolling gold work round it.
    ctx.fillStyle = 'rgba(196, 150, 58, 0.85)';
    ctx.beginPath();
    ctx.ellipse(192, 128, 120, 66, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#8a6420';
    ctx.lineWidth = 2;
    for (let k = 0; k < 14; k++) {
      const a = (k / 14) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(192 + Math.cos(a) * 30, 128 + Math.sin(a) * 18);
      ctx.quadraticCurveTo(192 + Math.cos(a + 0.4) * 90, 128 + Math.sin(a + 0.4) * 50, 192 + Math.cos(a) * 112, 128 + Math.sin(a) * 60);
      ctx.stroke();
    }
    ctx.strokeStyle = '#c69a3e';
    for (const x of [50, 334]) {
      for (let y = 46; y < 216; y += 18) {
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 1.5);
        ctx.stroke();
      }
    }
  });
}

// ---- gilded relief: the doors and the pillars' bands -------------------------------------------------

/**
 * A gilded door in the style of the Kaaba's doors (photographed): each leaf has an arched upper
 * panel of stacked cartouches, a large sunburst medallion, a cartouche, and a lower panel with a
 * second medallion, all framed in dense arabesque. The cartouches hold scrolls, not lettering.
 * Draws relief in two passes: colour (gold tones, darker in the recesses) and height.
 */
function gildedDoor(leaves: 1 | 2): { color: HTMLCanvasElement; height: HTMLCanvasElement } {
  const w = 256 * leaves + (leaves === 2 ? 24 : 0);
  const h = 640;
  const draw = (ctx: CanvasRenderingContext2D, pass: 'color' | 'height') => {
    const ink = (light: number) => {
      const v = Math.round(light * 255);
      return pass === 'height' ? `rgb(${v}, ${v}, ${v})` : `rgb(${Math.round(150 + light * 105)}, ${Math.round(112 + light * 100)}, ${Math.round(48 + light * 70)})`;
    };
    ctx.fillStyle = ink(0.45);
    ctx.fillRect(0, 0, w, h);
    const rand = seeded(41);
    const scrollBand = (x: number, y: number, bw: number, bh: number) => {
      ctx.fillStyle = ink(0.3);
      ctx.fillRect(x, y, bw, bh);
      ctx.strokeStyle = ink(0.85);
      ctx.lineWidth = 2;
      const horizontal = bw > bh;
      const len = horizontal ? bw : bh;
      const across = horizontal ? bh : bw;
      for (let t = 0; t < len; t += across * 0.9) {
        ctx.beginPath();
        const cx = horizontal ? x + t + across * 0.45 : x + across / 2;
        const cy = horizontal ? y + across / 2 : y + t + across * 0.45;
        ctx.arc(cx, cy, across * 0.32, rand() * 2, 4 + rand() * 2);
        ctx.stroke();
      }
    };
    const medallion = (cx: number, cy: number, r: number) => {
      ctx.fillStyle = ink(0.3);
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = ink(0.95);
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.lineWidth = 2;
      for (const k of [0.82, 0.5]) {
        ctx.beginPath();
        ctx.arc(cx, cy, r * k, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.fillStyle = ink(0.8);
      for (let a = 0; a < 16; a++) {
        const t = (a / 16) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(t) * r * 0.5, cy + Math.sin(t) * r * 0.5);
        ctx.lineTo(cx + Math.cos(t + 0.1) * r * 0.78, cy + Math.sin(t + 0.1) * r * 0.78);
        ctx.lineTo(cx + Math.cos(t - 0.1) * r * 0.78, cy + Math.sin(t - 0.1) * r * 0.78);
        ctx.closePath();
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = ink(1);
      ctx.fill();
    };
    const cartouche = (x: number, y: number, cw: number, chh: number) => {
      ctx.fillStyle = ink(0.75);
      ctx.beginPath();
      ctx.roundRect(x, y, cw, chh, chh / 2);
      ctx.fill();
      ctx.fillStyle = ink(0.35);
      ctx.beginPath();
      ctx.roundRect(x + 4, y + 4, cw - 8, chh - 8, (chh - 8) / 2);
      ctx.fill();
      ctx.strokeStyle = ink(0.9);
      ctx.lineWidth = 2;
      ctx.beginPath();
      let px = x + 12;
      ctx.moveTo(px, y + chh / 2);
      while (px < x + cw - 16) {
        const step = 10 + rand() * 8;
        ctx.quadraticCurveTo(px + step / 2, y + chh / 2 + (rand() - 0.5) * chh * 0.5, px + step, y + chh / 2);
        px += step;
      }
      ctx.stroke();
    };
    for (let leaf = 0; leaf < leaves; leaf++) {
      const x0 = leaf * (256 + 24);
      // The leaf's arabesque border.
      scrollBand(x0 + 8, 8, 240, 18);
      scrollBand(x0 + 8, h - 26, 240, 18);
      scrollBand(x0 + 8, 8, 18, h - 16);
      scrollBand(x0 + 230, 8, 18, h - 16);
      // Upper panel: an arch over stacked cartouches, a small medallion at its crown.
      const px = x0 + 36;
      const pw = 184;
      ctx.strokeStyle = ink(0.95);
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(px, 250);
      ctx.lineTo(px, 110);
      ctx.quadraticCurveTo(px, 40, px + pw / 2, 40);
      ctx.quadraticCurveTo(px + pw, 40, px + pw, 110);
      ctx.lineTo(px + pw, 250);
      ctx.stroke();
      medallion(px + pw / 2, 78, 16);
      for (let k = 0; k < 4; k++) cartouche(px + 10, 104 + k * 36, pw - 20, 28);
      // The great medallion.
      ctx.strokeStyle = ink(0.95);
      ctx.lineWidth = 4;
      ctx.strokeRect(px, 262, pw, 150);
      medallion(px + pw / 2, 337, 62);
      cartouche(px + 8, 420, pw - 16, 30);
      // Lower panel.
      ctx.strokeRect(px, 460, pw, 146);
      medallion(px + pw / 2, 520, 50);
      cartouche(px + 10, 574, pw - 20, 26);
    }
    if (leaves === 2) {
      ctx.fillStyle = ink(0.85);
      ctx.fillRect(256, 0, 24, h);
    }
  };
  return { color: paint(w, h, (ctx) => draw(ctx, 'color')), height: paint(w, h, (ctx) => draw(ctx, 'height')) };
}

/** The ornate gilded band round each pillar: rims and a row of embossed vase-shaped motifs. */
function gildedBand(): { color: HTMLCanvasElement; height: HTMLCanvasElement } {
  const w = 512;
  const h = 128;
  const draw = (ctx: CanvasRenderingContext2D, pass: 'color' | 'height') => {
    const ink = (light: number) => {
      const v = Math.round(light * 255);
      return pass === 'height' ? `rgb(${v}, ${v}, ${v})` : `rgb(${Math.round(150 + light * 105)}, ${Math.round(112 + light * 100)}, ${Math.round(48 + light * 70)})`;
    };
    ctx.fillStyle = ink(0.4);
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = ink(0.95);
    ctx.fillRect(0, 0, w, 12);
    ctx.fillRect(0, h - 12, w, 12);
    const n = 6;
    for (let k = 0; k < n; k++) {
      const cx = (k + 0.5) * (w / n);
      ctx.fillStyle = ink(0.85);
      ctx.beginPath();
      // A vase: foot, swelling body, narrow neck, flared lip.
      ctx.moveTo(cx - 10, h - 20);
      ctx.lineTo(cx + 10, h - 20);
      ctx.bezierCurveTo(cx + 34, h - 46, cx + 30, 52, cx + 8, 40);
      ctx.lineTo(cx + 16, 22);
      ctx.lineTo(cx - 16, 22);
      ctx.lineTo(cx - 8, 40);
      ctx.bezierCurveTo(cx - 30, 52, cx - 34, h - 46, cx - 10, h - 20);
      ctx.fill();
      // Scrolls between the vases.
      ctx.strokeStyle = ink(0.75);
      ctx.lineWidth = 3;
      const sx = cx + w / n / 2;
      for (const dy of [-18, 18]) {
        ctx.beginPath();
        ctx.arc(sx, h / 2 + dy, 12, 0, Math.PI * 1.6);
        ctx.stroke();
      }
    }
  };
  return { color: paint(w, h, (ctx) => draw(ctx, 'color')), height: paint(w, h, (ctx) => draw(ctx, 'height')) };
}

// ---- matcaps: polished wood and metals, reflecting the room -------------------------------------

/**
 * A matcap (the look of a sphere, by view-space normal) for polished wood, gold or silver in
 * this room: above, the green cloth (and bright lamps); round the middle, the cream marble;
 * below, the floor.
 */
function matcap(kind: 'gold' | 'silver' | 'pewter' | 'wood' | 'brass'): HTMLCanvasElement {
  const size = 256;
  return paint(size, size, (ctx) => {
    const image = ctx.createImageData(size, size);
    const lamp = new Vector3(-0.35, 0.65, 0.68).normalize();
    const fill = new Vector3(0.55, 0.15, 0.82).normalize();
    const tint = { gold: [1.0, 0.76, 0.38], brass: [0.98, 0.8, 0.48], silver: [0.86, 0.87, 0.9], pewter: [0.5, 0.5, 0.52], wood: [0.5, 0.27, 0.15] }[kind];
    const n = new Vector3();
    const r = new Vector3();
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const u = ((x + 0.5) / size) * 2 - 1;
        const v = 1 - ((y + 0.5) / size) * 2;
        const d = Math.min(0.999, Math.hypot(u, v));
        const scale = d > 0 ? Math.min(1, 0.999 / Math.hypot(u, v)) : 1;
        n.set(u * scale, v * scale, Math.sqrt(Math.max(0, 1 - d * d)));
        let rgb: number[];
        if (kind === 'wood') {
          // Polished wood: soft diffuse light from the lamps, a warm sheen, darker at the rim.
          const diffuse = 0.32 + 0.68 * Math.max(0, n.dot(lamp)) + 0.18 * Math.max(0, n.dot(fill));
          r.set(2 * n.z * n.x, 2 * n.z * n.y, 2 * n.z * n.z - 1);
          const sheen = Math.pow(Math.max(0, r.dot(lamp)), 30) * 0.5 + Math.pow(Math.max(0, r.dot(fill)), 12) * 0.12;
          rgb = tint.map((c) => c * diffuse + sheen * 0.95);
        } else {
          // Metal: the room reflected (cloth above, marble round, floor below), plus the lamps.
          r.set(2 * n.z * n.x, 2 * n.z * n.y, 2 * n.z * n.z - 1);
          const up = r.y;
          const cloth = [0.16, 0.42, 0.26];
          const marble = [0.92, 0.88, 0.8];
          const floor = [0.78, 0.74, 0.66];
          const k = up > 0 ? Math.min(1, up * 1.6) : Math.min(1, -up * 1.8);
          const env = up > 0 ? marble.map((c, i) => c + (cloth[i] - c) * k) : marble.map((c, i) => c + (floor[i] - c) * k);
          const spot = Math.pow(Math.max(0, r.dot(lamp)), 50) * 2.2 + Math.pow(Math.max(0, r.dot(fill)), 18) * 0.5;
          const rim = 0.65 + 0.35 * n.z;
          rgb = env.map((c, i) => (c * tint[i] * rim + spot * (0.6 + 0.4 * tint[i])) * (kind === 'pewter' ? 0.85 : 1));
        }
        const i = (y * size + x) * 4;
        image.data[i] = Math.min(255, rgb[0] * 255);
        image.data[i + 1] = Math.min(255, rgb[1] * 255);
        image.data[i + 2] = Math.min(255, rgb[2] * 255);
        image.data[i + 3] = 255;
      }
    }
    ctx.putImageData(image, 0, 0);
  });
}

/** Wood grain, light on dark, for the pillars (multiplied with the wood matcap). */
function woodGrain(): HTMLCanvasElement {
  return paint(256, 512, (ctx) => {
    const rand = seeded(7);
    ctx.fillStyle = '#d8c4b4';
    ctx.fillRect(0, 0, 256, 512);
    for (let i = 0; i < 90; i++) {
      ctx.strokeStyle = `rgba(${90 + rand() * 40}, ${50 + rand() * 30}, ${30 + rand() * 20}, ${0.12 + rand() * 0.2})`;
      ctx.lineWidth = 0.8 + rand() * 3;
      const x = rand() * 256;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.bezierCurveTo(x + (rand() - 0.5) * 18, 170, x + (rand() - 0.5) * 18, 340, x + (rand() - 0.5) * 12, 512);
      ctx.stroke();
    }
  });
}

// ---- baked light ------------------------------------------------------------------------------------

/**
 * Light for a vertex of the room (local frame): a warm ambient level, soft shadow where surfaces
 * meet (floor and walls, walls and ceiling, the corners, round the pillars and the cupboard),
 * the lamps along the rod, and a little light bounced up from the white floor.
 */
function lightAt(p: Vector3, n: Vector3): number {
  // Occlusion by the room's own planes (not the one the point lies on).
  let ao = 1;
  const near = (d: number, reach: number, depth: number) => 1 - depth * Math.exp(-Math.max(0, d) / reach);
  if (n.y < 0.9) ao *= near(p.y - floorY, 0.5, 0.28);
  if (n.y > -0.9) ao *= near(ceilingY - p.y, 0.8, 0.3);
  if (n.x < 0.9) ao *= near(p.x + halfW, 0.45, 0.22);
  if (n.x > -0.9) ao *= near(halfW - p.x, 0.45, 0.22);
  if (n.z < 0.9) ao *= near(p.z + halfD, 0.45, 0.22);
  if (n.z > -0.9) ao *= near(halfD - p.z, 0.45, 0.22);
  // Contact shadow on the floor round the pillars' bases and the cupboard.
  if (n.y > 0.9) {
    for (const x of pillars.xs) {
      const d = Math.max(Math.abs(p.x - x), Math.abs(p.z - pillars.z)) - pillarBase.half;
      ao *= near(d, 0.3, 0.4);
    }
    const dc = Math.max(Math.abs(p.x - cupboard.x) - cupboard.width / 2, Math.abs(p.z - cupboard.z) - cupboard.depth / 2);
    ao *= near(dc, 0.25, 0.35);
  }
  let light = 0.62 * ao;
  // The lamps: a line of soft light just under the rod, along the row of pillars.
  const lx = Math.max(-halfW, Math.min(halfW, p.x));
  const l = new Vector3(lx - p.x, lampRodY - 0.5 - p.y, pillars.z - p.z);
  const d = l.length() || 1;
  light += (0.42 * Math.max(0, n.dot(l) / d)) / (1 + (d / 4.5) ** 2);
  // A broad fill from the middle of the room, and light bounced up from the white floor.
  const f = new Vector3(-p.x, floorY + 2.6 - p.y, -p.z);
  const fd = f.length() || 1;
  light += (0.3 * Math.max(0, n.dot(f) / fd)) / (1 + (fd / 7) ** 2);
  if (n.y < 0) light += 0.1 * -n.y;
  return Math.min(1.12, light);
}

/** Bakes the room's light into a geometry's vertex colours (positions in the room's frame). */
function bake(geometry: BufferGeometry, warmth = 1): BufferGeometry {
  if (!geometry.getAttribute('normal')) geometry.computeVertexNormals();
  const position = geometry.getAttribute('position');
  const normal = geometry.getAttribute('normal');
  const colors = new Float32Array(position.count * 3);
  const p = new Vector3();
  const n = new Vector3();
  for (let i = 0; i < position.count; i++) {
    p.fromBufferAttribute(position, i);
    n.fromBufferAttribute(normal, i).normalize();
    const v = lightAt(p, n);
    colors.set([v, v * (1 - 0.025 * warmth), v * (1 - 0.07 * warmth)], i * 3);
  }
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  return geometry;
}

/** Sets UVs from world positions on the plane a geometry faces (metres ÷ `size`). */
function planarUVs(geometry: BufferGeometry, size: number, axis: 'x' | 'z' | 'y'): BufferGeometry {
  const position = geometry.getAttribute('position');
  const uvs = new Float32Array(position.count * 2);
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);
    const z = position.getZ(i);
    const [u, v] = axis === 'y' ? [x, -z] : axis === 'x' ? [z, y] : [x, y];
    uvs.set([u / size, v / size], i * 2);
  }
  geometry.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
  return geometry;
}

/** One stretch of a wall facing into the room, from `y0` to `y1`, built where it stands. */
interface WallSpan {
  /** Start and end along the wall, and where the wall is (local frame). */
  axis: 'x' | 'z';
  from: number;
  to: number;
  at: number;
  /** The direction it faces (into the room), along the other axis: +1 or −1. */
  facing: 1 | -1;
}

function wallPiece(span: WallSpan, y0: number, y1: number, proud = 0, step = 0.3): BufferGeometry {
  const length = span.to - span.from;
  const g = new PlaneGeometry(length, y1 - y0, Math.max(1, Math.ceil(length / step)), Math.max(1, Math.ceil((y1 - y0) / step)));
  // PlaneGeometry faces +Z: turn it to face into the room and put it in place.
  const m = new Matrix4();
  const mid = (span.from + span.to) / 2;
  const offset = span.at + span.facing * proud;
  if (span.axis === 'x') m.makeRotationY(span.facing > 0 ? 0 : Math.PI).setPosition(mid, (y0 + y1) / 2, offset);
  else m.makeRotationY(span.facing > 0 ? Math.PI / 2 : -Math.PI / 2).setPosition(offset, (y0 + y1) / 2, mid);
  g.applyMatrix4(m);
  return g;
}

/** A moulded band standing proud of a wall (a box), from `y0` to `y1`. */
function bandPiece(span: WallSpan, y0: number, y1: number, depth: number): BufferGeometry {
  const length = span.to - span.from;
  const g = new BoxGeometry(length, y1 - y0, depth, Math.max(1, Math.ceil(length / 0.4)), 1, 1);
  const mid = (span.from + span.to) / 2;
  const m = new Matrix4();
  const offset = span.at + span.facing * (depth / 2);
  if (span.axis === 'x') m.makeTranslation(mid, (y0 + y1) / 2, offset);
  else m.makeRotationY(Math.PI / 2).setPosition(offset, (y0 + y1) / 2, mid);
  g.applyMatrix4(m);
  return g;
}

function merge(geometries: BufferGeometry[]): BufferGeometry {
  const prepared = geometries.map((g) => {
    const flat = g.index ? g.toNonIndexed() : g;
    for (const name of Object.keys(flat.attributes)) if (!['position', 'normal', 'uv', 'color'].includes(name)) flat.deleteAttribute(name);
    if (!flat.getAttribute('uv')) flat.setAttribute('uv', new Float32BufferAttribute(new Float32Array(flat.getAttribute('position').count * 2), 2));
    if (!flat.getAttribute('normal')) flat.computeVertexNormals();
    return flat;
  });
  const hasColor = prepared.some((g) => g.getAttribute('color'));
  if (hasColor) {
    for (const g of prepared) {
      if (!g.getAttribute('color')) g.setAttribute('color', new Float32BufferAttribute(new Float32Array(g.getAttribute('position').count * 3).fill(1), 3));
    }
  }
  const merged = mergeGeometries(prepared, false);
  if (!merged) throw new Error('Could not merge the interior geometry');
  for (const g of geometries) g.dispose();
  return merged;
}

/** A thin rod from `a` to `b`. */
function strut(a: Vector3, b: Vector3, radius: number): BufferGeometry {
  const length = a.distanceTo(b);
  const g = new CylinderGeometry(radius, radius, length, 4);
  g.applyQuaternion(new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), b.clone().sub(a).normalize()));
  return g.translate((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
}

// ---- the lamps ------------------------------------------------------------------------------------

/** Lamp shapes (lathe profiles, metres, y down from where it hangs), as in photographs. */
const LAMP_SHAPES: { profile: [number, number][]; chains: 1 | 3; hang: number }[] = [
  // An onion-bodied lantern with a domed cap and a drop.
  { profile: [[0.001, 0], [0.03, -0.02], [0.06, -0.06], [0.05, -0.09], [0.1, -0.16], [0.11, -0.23], [0.08, -0.3], [0.03, -0.34], [0.012, -0.4], [0.001, -0.42]], chains: 1, hang: 0.18 },
  // A shallow bowl lamp on three chains.
  { profile: [[0.001, -0.3], [0.05, -0.31], [0.13, -0.28], [0.16, -0.24], [0.15, -0.23], [0.12, -0.26], [0.001, -0.27]], chains: 3, hang: 0 },
  // A wide, flat dish lamp with a boss.
  { profile: [[0.001, -0.36], [0.04, -0.36], [0.06, -0.33], [0.17, -0.31], [0.18, -0.29], [0.07, -0.3], [0.03, -0.27], [0.001, -0.26]], chains: 3, hang: 0 },
  // A slender vase.
  { profile: [[0.001, -0.02], [0.03, -0.03], [0.02, -0.06], [0.03, -0.1], [0.07, -0.17], [0.06, -0.24], [0.03, -0.27], [0.04, -0.29], [0.001, -0.3]], chains: 1, hang: 0.22 },
  // A round-bellied jug.
  { profile: [[0.001, 0], [0.025, -0.01], [0.03, -0.05], [0.025, -0.08], [0.08, -0.13], [0.1, -0.19], [0.08, -0.26], [0.03, -0.29], [0.001, -0.3]], chains: 1, hang: 0.14 },
  // A globe with a cap and a finial below.
  { profile: [[0.001, 0], [0.04, -0.01], [0.04, -0.03], [0.09, -0.08], [0.11, -0.15], [0.09, -0.22], [0.04, -0.26], [0.015, -0.32], [0.001, -0.35]], chains: 1, hang: 0.2 },
];

// ---- the room ---------------------------------------------------------------------------------------

export interface KaabaInterior {
  group: Group;
  /** Floors the visitor can walk to with a double-click. */
  floors: Mesh[];
  /** The door's two leaves (tapping them opens or closes the door). */
  doorLeaves: Mesh[];
  /** How far the door's two leaves are open into the room: 0 shut, 1 wide open. */
  setDoorOpening(amount: number): void;
  dispose(): void;
}

/**
 * One leaf of the door, built round its hinge (at the origin, the leaf reaching along X towards
 * the other leaf, `toward`), showing its half of the gilded door on both faces: from inside on its
 * inner face, from outside on its outer face, each reading left to right from that side. Its edges
 * take the gold of the strip between the leaves.
 */
function doorLeaf(toward: 1 | -1, height: number): BufferGeometry {
  const { width, thickness } = DOOR_LEAVES;
  const g = new BoxGeometry(width, height, thickness).translate((toward * width) / 2, height / 2, 0);
  // Seen from inside, +X is on the left: the leaf hinged at that jamb shows the art's left half.
  const inner = toward > 0 ? 0.5 : 0;
  const outer = 0.5 - inner;
  const normal = g.getAttribute('normal');
  const uv = g.getAttribute('uv');
  for (let i = 0; i < uv.count; i++) {
    const nz = normal.getZ(i);
    if (nz < -0.5) uv.setX(i, inner + uv.getX(i) * 0.5);
    else if (nz > 0.5) uv.setX(i, outer + uv.getX(i) * 0.5);
    else uv.setXY(i, 0.5, Math.abs(normal.getY(i)) > 0.5 ? 0.5 : uv.getY(i));
  }
  return g;
}

export function buildKaabaInterior(anisotropy: number): KaabaInterior {
  const group = new Group();
  group.name = 'kaaba-interior';
  group.rotation.y = KAABA.rotationY;
  group.visible = false;

  const textures: Texture[] = [];
  const materials: Material[] = [];
  const keep = (t: Texture): Texture => {
    t.anisotropy = anisotropy;
    textures.push(t);
    return t;
  };
  const basic = (map: Texture | null, color = '#ffffff') => {
    const m = new MeshBasicMaterial({ map, color: new Color(color), vertexColors: true });
    materials.push(m);
    return m;
  };
  const shiny = (kind: Parameters<typeof matcap>[0], map: Texture | null = null, normalMap: Texture | null = null, normalScale = 1) => {
    const m = new MeshMatcapMaterial({ matcap: keep(texture(matcap(kind), true, false)), map, normalMap });
    if (normalMap) m.normalScale.set(normalScale, normalScale);
    materials.push(m);
    return m;
  };
  const add = (geometry: BufferGeometry, material: Material) => {
    const mesh = new Mesh(geometry, material);
    mesh.matrixAutoUpdate = false;
    mesh.updateMatrix();
    group.add(mesh);
    return mesh;
  };

  const s = stair.size;
  const doorLeft = KAABA.door.centerX - KAABA.door.width / 2;
  const doorRight = KAABA.door.centerX + KAABA.door.width / 2;
  // The walls, in stretches (the door wall is open where the door is and stops at the staircase;
  // the Hijr wall stops at it too), and the staircase enclosure's two faces.
  const spans: WallSpan[] = [
    { axis: 'x', from: -halfW, to: halfW, at: -halfD, facing: 1 },
    { axis: 'z', from: -halfD, to: halfD, at: -halfW, facing: 1 },
    { axis: 'z', from: -halfD, to: halfD - s, at: halfW, facing: -1 },
    { axis: 'x', from: -halfW, to: halfW - s, at: halfD, facing: -1 },
    { axis: 'z', from: halfD - s, to: halfD, at: halfW - s, facing: -1 },
    { axis: 'x', from: halfW - s, to: halfW, at: halfD - s, facing: -1 },
  ];
  const doorWall = spans[3];

  // ---- walls: cream marble, green marble skirting and bands, the silk above ----
  const marbleTex = keep(texture(wallMarble()));
  const greenTex = keep(texture(greenMarble()));
  const silkTex = keep(texture(silk()));
  const marbleParts: BufferGeometry[] = [];
  const greenParts: BufferGeometry[] = [];
  const silkParts: BufferGeometry[] = [];
  const corniceTop = marbleTop;
  const corniceBottom = marbleTop - bands.cornice;
  for (const span of spans) {
    const uvAxis = span.axis === 'x' ? 'z' : 'x';
    const pieces: [number, number][] = [[floorY + bands.skirting, bands.band], [bands.band + bands.bandHeight, corniceBottom]];
    for (const [y0, y1] of pieces) {
      if (span === doorWall) {
        // Round the door: beside it, and above it.
        const doorTop = floorY + KAABA.door.height;
        marbleParts.push(planarUVs(wallPiece({ ...span, to: doorLeft }, y0, y1), WALL_REPEAT, uvAxis));
        marbleParts.push(planarUVs(wallPiece({ ...span, from: doorRight }, y0, y1), WALL_REPEAT, uvAxis));
        if (y1 > doorTop) marbleParts.push(planarUVs(wallPiece({ ...span, from: doorLeft, to: doorRight }, Math.max(doorTop, y0), y1), WALL_REPEAT, uvAxis));
      } else {
        marbleParts.push(planarUVs(wallPiece(span, y0, y1), WALL_REPEAT, uvAxis));
      }
    }
    // Skirting (beside the door only), band and cornice in green marble, standing a little proud.
    const skirtSpans = span === doorWall ? [{ ...span, to: doorLeft }, { ...span, from: doorRight }] : [span];
    for (const sk of skirtSpans) greenParts.push(planarUVs(bandPiece(sk, floorY, floorY + bands.skirting, 0.03), 1.2, uvAxis));
    greenParts.push(planarUVs(bandPiece(span, bands.band, bands.band + bands.bandHeight, 0.045), 1.2, uvAxis));
    greenParts.push(planarUVs(bandPiece(span, corniceBottom, corniceTop, 0.07), 1.2, uvAxis));
    silkParts.push(planarUVs(wallPiece(span, corniceTop, ceilingY), 1.8, uvAxis));
  }
  add(bake(merge(marbleParts)), basic(marbleTex));
  add(bake(merge(greenParts), 0.4), basic(greenTex));
  add(bake(merge(silkParts), 0.3), basic(silkTex, '#eef7f0'));

  // ---- ceiling: the same silk, gathered in shallow folds between its battens ----
  {
    const g = new PlaneGeometry(halfW * 2, halfD * 2, Math.ceil(halfW * 2 / 0.4), Math.ceil(halfD * 2 / 0.12)).rotateX(Math.PI / 2);
    const position = g.getAttribute('position');
    const fold = 1.1;
    for (let i = 0; i < position.count; i++) {
      const z = position.getZ(i);
      const t = (((z + halfD) / fold) % 1 + 1) % 1;
      position.setY(i, ceilingY - 0.08 * Math.sin(Math.PI * t));
    }
    g.computeVertexNormals();
    planarUVs(g, 1.8, 'y');
    add(bake(g, 0.3), basic(silkTex, '#dcece1'));
  }

  // ---- floor: cream marble, with a dark green marble border along the walls ----
  const floor = (() => {
    const g = new PlaneGeometry(halfW * 2, halfD * 2, Math.ceil(halfW * 2 / 0.25), Math.ceil(halfD * 2 / 0.25)).rotateX(-Math.PI / 2).translate(0, floorY + 0.004, 0);
    planarUVs(g, FLOOR_REPEAT, 'y');
    return add(bake(g), basic(keep(texture(floorMarble()))));
  })();
  {
    const border = 0.34;
    const parts: BufferGeometry[] = [];
    for (const [w, d, x, z] of [
      [halfW * 2, border, 0, halfD - border / 2],
      [halfW * 2, border, 0, -halfD + border / 2],
      [border, halfD * 2 - border * 2, halfW - border / 2, 0],
      [border, halfD * 2 - border * 2, -halfW + border / 2, 0],
    ] as const) {
      parts.push(planarUVs(new PlaneGeometry(w, d, Math.ceil(w / 0.3), Math.ceil(d / 0.3)).rotateX(-Math.PI / 2).translate(x, floorY + 0.008, z), 1.2, 'y'));
    }
    add(bake(merge(parts), 0.4), basic(greenTex));
  }

  // ---- the doors: the main door from inside, and Bab al-Tawbah, gilded in relief ----
  const gold = (map: Texture | null, normal: Texture | null, normalScale = 1) => shiny('gold', map, normal, normalScale);
  const doorArt = (leaves: 1 | 2) => {
    const art = gildedDoor(leaves);
    const map = keep(texture(art.color, true, false));
    const normal = keep(texture(normalCanvas(heights(art.height), art.height.width, art.height.height, 4), false, false));
    return gold(map, normal, 0.9);
  };
  const frameMat = shiny('gold');
  // The door's two leaves, each on its hinge (turned open by setDoorOpening).
  const hinges: { pivot: Group; turn: number }[] = [];
  const leafMeshes: Mesh[] = [];
  {
    const { width, height, centerX } = KAABA.door;
    const art = doorArt(2);
    for (const leaf of doorLeaves()) {
      const pivot = new Group();
      pivot.position.set(leaf.hinge.x, floorY, leaf.hinge.z);
      // A ring handle on its inner face, near the middle of the door.
      const handle = new TorusGeometry(0.06, 0.012, 8, 20).translate(leaf.toward * (DOOR_LEAVES.width - 0.18), 1.25, -0.04);
      const leafMesh = new Mesh(doorLeaf(leaf.toward, height), art);
      leafMeshes.push(leafMesh);
      pivot.add(leafMesh, new Mesh(handle, frameMat));
      group.add(pivot);
      hinges.push({ pivot, turn: leaf.turn });
    }
    // Its gilded frame, standing out from the wall.
    const frame: BufferGeometry[] = [
      new BoxGeometry(0.16, height + 0.16, 0.08).translate(centerX - width / 2 - 0.08, floorY + (height + 0.16) / 2, halfD - 0.04),
      new BoxGeometry(0.16, height + 0.16, 0.08).translate(centerX + width / 2 + 0.08, floorY + (height + 0.16) / 2, halfD - 0.04),
      new BoxGeometry(width + 0.32, 0.16, 0.08).translate(centerX, floorY + height + 0.08, halfD - 0.04),
    ];
    add(merge(frame), frameMat);
  }
  {
    const { doorWidth, doorHeight } = stair;
    // In front of the enclosure's face (which faces −X), clear of the skirting.
    const face = TAWBAH_LOCAL.x;
    const z = TAWBAH_LOCAL.z;
    add(new PlaneGeometry(doorWidth, doorHeight).rotateY(-Math.PI / 2).translate(face - 0.05, floorY + doorHeight / 2, z), doorArt(1));
    const frame: BufferGeometry[] = [
      new BoxGeometry(0.08, doorHeight + 0.14, 0.14).translate(face - 0.04, floorY + (doorHeight + 0.14) / 2, z - doorWidth / 2 - 0.07),
      new BoxGeometry(0.08, doorHeight + 0.14, 0.14).translate(face - 0.04, floorY + (doorHeight + 0.14) / 2, z + doorWidth / 2 + 0.07),
      new BoxGeometry(0.08, 0.14, doorWidth + 0.28).translate(face - 0.04, floorY + doorHeight + 0.07, z),
      new TorusGeometry(0.05, 0.01, 8, 20).rotateY(Math.PI / 2).translate(face - 0.09, floorY + 1.15, z - doorWidth * 0.3),
    ];
    add(merge(frame), frameMat);
  }

  // ---- the pillars: polished wood on square bases, with gilded bands and capitals ----
  const pillarH = ceilingY - floorY;
  const bandArt = gildedBand();
  const bandMap = keep(texture(bandArt.color));
  const bandNormal = keep(texture(normalCanvas(heights(bandArt.height), bandArt.height.width, bandArt.height.height, 4), false));
  {
    const wood: BufferGeometry[] = [];
    const goldRings: BufferGeometry[] = [];
    const ornate: BufferGeometry[] = [];
    const bases: BufferGeometry[] = [];
    const r = pillars.radius;
    for (const x of pillars.xs) {
      const at = (g: BufferGeometry, y: number) => g.translate(x, y, pillars.z);
      // The shaft, in grain running up it (UVs: three repeats round, one per 3 m up).
      const shaft = new CylinderGeometry(r, r, pillarH, 32, 1, true);
      const uv = shaft.getAttribute('uv');
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 3, uv.getY(i) * (pillarH / 3));
      wood.push(at(shaft, floorY + pillarH / 2));
      // The square base: green marble under a dark wooden block with a gilded edge.
      bases.push(planarUVs(at(new BoxGeometry(pillarBase.half * 2, 0.22, pillarBase.half * 2), floorY + 0.11), 1.2, 'x'));
      wood.push(at(new BoxGeometry(pillarBase.half * 1.7, pillarBase.height - 0.22, pillarBase.half * 1.7), floorY + 0.22 + (pillarBase.height - 0.22) / 2));
      goldRings.push(at(new BoxGeometry(pillarBase.half * 1.76, 0.04, pillarBase.half * 1.76), floorY + pillarBase.height - 0.02));
      goldRings.push(at(new BoxGeometry(pillarBase.half * 2.04, 0.03, pillarBase.half * 2.04), floorY + 0.235));
      // Rings at the foot of the shaft.
      for (const [y, rr, hh] of [[pillarBase.height + 0.04, r + 0.035, 0.08], [pillarBase.height + 0.13, r + 0.02, 0.05]] as const) {
        goldRings.push(at(new CylinderGeometry(rr, rr, hh, 32), floorY + y));
      }
      // Two ornate bands: low on the shaft, and high, in two parts.
      for (const [y, hh] of [[2.0, 0.42], [6.95, 0.36], [7.38, 0.36]] as const) {
        const band = new CylinderGeometry(r + 0.015, r + 0.015, hh, 48, 1, true);
        const buv = band.getAttribute('uv');
        for (let i = 0; i < buv.count; i++) buv.setXY(i, buv.getX(i) * 2, buv.getY(i));
        ornate.push(at(band, floorY + y + hh / 2));
        for (const ry of [y, y + hh]) goldRings.push(at(new CylinderGeometry(r + 0.03, r + 0.03, 0.035, 32), floorY + ry));
      }
      // A collar where the lamp rod passes.
      goldRings.push(at(new CylinderGeometry(r + 0.025, r + 0.025, 0.08, 32), lampRodY));
      // The capital: stacked gilded rings widening up to the ceiling.
      for (const [dy, rr, hh] of [[-0.42, r + 0.03, 0.06], [-0.33, r + 0.05, 0.08], [-0.22, r + 0.08, 0.1], [-0.11, r + 0.11, 0.12]] as const) {
        goldRings.push(at(new CylinderGeometry(rr, rr, hh, 32), ceilingY + dy + hh / 2));
      }
    }
    add(merge(wood), shiny('wood', keep(texture(woodGrain()))));
    add(merge(goldRings), shiny('gold'));
    add(merge(ornate), gold(bandMap, bandNormal, 1));
    add(bake(merge(bases), 0.4), basic(greenTex));
  }

  // ---- the lamp rod, and the lamps hanging close together along it ----
  {
    const rod = new CylinderGeometry(0.014, 0.014, halfW * 2, 10).rotateZ(Math.PI / 2).translate(0, lampRodY, pillars.z);
    const brackets: BufferGeometry[] = [rod];
    for (const x of [-halfW + 0.05, halfW - 0.05]) brackets.push(new SphereGeometry(0.04, 10, 8).translate(x, lampRodY, pillars.z));
    add(merge(brackets), shiny('brass'));
    const rand = seeded(97);
    const goldLamps: BufferGeometry[] = [];
    const silverLamps: BufferGeometry[] = [];
    const pewterLamps: BufferGeometry[] = [];
    const chains: BufferGeometry[] = [];
    const lathes = LAMP_SHAPES.map((shape) => new LatheGeometry(shape.profile.map(([r, y]) => new Vector2(r, y)), 20));
    // Where each shape's rim is (its widest point), for the three-chain lamps.
    const rims = LAMP_SHAPES.map((shape) => shape.profile.reduce((best, p) => (p[0] > best[0] ? p : best)));
    // Hung close together, as in photographs: dozens of lamps, larger and smaller, in two loose
    // rows either side of the rod.
    let row = 0;
    for (let x = -halfW + 0.3; x < halfW - 0.25; x += 0.13 + rand() * 0.1) {
      if (pillars.xs.some((px) => Math.abs(px - x) < pillars.radius + 0.22)) continue;
      const k = Math.floor(rand() * LAMP_SHAPES.length);
      const shape = LAMP_SHAPES[k];
      const size = 1.15 + rand() * 0.45;
      const drop = 0.12 + rand() * 0.6 + shape.hang * size;
      row = 1 - row;
      const z = pillars.z + (row ? 0.07 : -0.07) + (rand() - 0.5) * 0.06;
      const top = lampRodY - 0.02;
      const lampTop = top - drop;
      const body = lathes[k].clone().scale(size, size, size).translate(x, lampTop, z);
      const metal = rand();
      (metal < 0.4 ? goldLamps : metal < 0.7 ? silverLamps : pewterLamps).push(body);
      if (shape.chains === 1) {
        chains.push(new CylinderGeometry(0.004, 0.004, drop, 4).translate(x, top - drop / 2, z));
      } else {
        // Three chains from a hook down to the rim, and the hook's own short chain.
        const hook = top - drop * 0.35;
        chains.push(new CylinderGeometry(0.004, 0.004, top - hook, 4).translate(x, (top + hook) / 2, z));
        const rimR = rims[k][0] * size;
        const rimDy = rims[k][1] * size;
        const twist = rand();
        for (let c = 0; c < 3; c++) {
          const a = (c / 3) * Math.PI * 2 + twist;
          chains.push(strut(new Vector3(x, hook, z), new Vector3(x + Math.cos(a) * rimR * 0.95, lampTop + rimDy, z + Math.sin(a) * rimR * 0.95), 0.003));
        }
      }
      // A ring hanging beneath some of them.
      if (shape.chains === 1 && rand() < 0.4) {
        const bottom = shape.profile[shape.profile.length - 1][1] * size;
        (metal < 0.4 ? goldLamps : silverLamps).push(new TorusGeometry(0.03, 0.006, 6, 14).translate(x, lampTop + bottom - 0.03, z));
      }
    }
    for (const l of lathes) l.dispose();
    // Double-sided: the bowls and dishes are open shells.
    const lampMetal = (kind: 'gold' | 'silver' | 'pewter') => {
      const m = shiny(kind);
      m.side = DoubleSide;
      return m;
    };
    if (goldLamps.length) add(merge(goldLamps), lampMetal('gold'));
    if (silverLamps.length) add(merge(silverLamps), lampMetal('silver'));
    if (pewterLamps.length) add(merge(pewterLamps), lampMetal('pewter'));
    if (chains.length) add(merge(chains), shiny('pewter'));
  }

  // ---- the cupboard: white, with chamfered corners, two panelled doors and a green marble top ----
  {
    const { x, z, width, depth, height } = cupboard;
    const body: BufferGeometry[] = [];
    const chamfer = 0.16;
    // An eight-sided prism in plan (chamfered corners), as photographed.
    const outline = [
      [-width / 2 + chamfer, -depth / 2], [width / 2 - chamfer, -depth / 2], [width / 2, -depth / 2 + chamfer], [width / 2, depth / 2 - chamfer],
      [width / 2 - chamfer, depth / 2], [-width / 2 + chamfer, depth / 2], [-width / 2, depth / 2 - chamfer], [-width / 2, -depth / 2 + chamfer],
    ];
    const bottom = floorY + 0.08;
    const top = floorY + height - 0.05;
    for (let k = 0; k < outline.length; k++) {
      const [ax, az] = outline[k];
      const [bx, bz] = outline[(k + 1) % outline.length];
      const len = Math.hypot(bx - ax, bz - az);
      // Facing out, away from the cupboard's centre.
      let nx = -(bz - az);
      let nz = bx - ax;
      if (nx * (ax + bx) + nz * (az + bz) < 0) {
        nx = -nx;
        nz = -nz;
      }
      const face = new PlaneGeometry(len, top - bottom, 2, 3).rotateY(Math.atan2(nx, nz));
      body.push(face.translate(x + (ax + bx) / 2, (top + bottom) / 2, z + (az + bz) / 2));
    }
    // Raised door panels on the two long faces.
    for (const side of [-1, 1]) {
      for (const dx of [-0.21, 0.21]) {
        body.push(new BoxGeometry(0.36, top - bottom - 0.2, 0.02).translate(x + dx, (top + bottom) / 2, z + side * (depth / 2 + 0.01)));
      }
    }
    add(bake(merge(body)), basic(null, '#f2efe8'));
    // The green marble top with a raised rim, and a gilded plinth.
    const shape = new Shape(outline.map(([ox, oz]) => new Vector2(ox * (1 + 0.04 / width), oz * (1 + 0.04 / depth))));
    const topSlab = planarUVs(new ExtrudeGeometry(shape, { depth: 0.05, bevelEnabled: false }).rotateX(Math.PI / 2).translate(x, floorY + height, z), 1.2, 'y');
    add(bake(topSlab, 0.4), basic(greenTex));
    const trims: BufferGeometry[] = [new BoxGeometry(width - 0.02, 0.08, depth - 0.02).translate(x, floorY + 0.04, z)];
    for (const side of [-1, 1]) {
      for (const dx of [-0.06, 0.06]) trims.push(new TorusGeometry(0.035, 0.007, 8, 16).translate(x + dx, floorY + height * 0.55, z + side * (depth / 2 + 0.03)));
    }
    add(merge(trims), shiny('brass'));
  }

  // ---- the plaques: carved stone set into the marble, and embroidered panels on the cloth ----
  {
    const tones: [number, number, number][] = [[214, 196, 160], [196, 188, 172], [178, 146, 116], [206, 190, 166]];
    const plaqueMats = tones.map((tone, k) => basic(keep(texture(plaque(tone, 60 + k, k % 2 === 1), true, false))));
    KAABA_PLAQUES.forEach((p, n) => {
      const wide = n % 4 === 1 || n % 4 === 3;
      const w = wide ? 1.1 : 0.72;
      const h = wide ? 0.72 : 1.1;
      const y = floorY + (n % 3 === 0 ? 1.6 : n % 3 === 1 ? 2.1 : 1.85);
      const g = new BoxGeometry(w, h, 0.03, 4, 4, 1).translate(0, 0, 0.012);
      g.applyMatrix4(new Matrix4().makeRotationY(Math.atan2(p.nx, p.nz))).translate(p.x, y, p.z);
      add(bake(g), plaqueMats[n % tones.length]);
    });
    const panel = basic(keep(texture(embroidery(), true, false)));
    for (const span of [spans[0], spans[1]]) {
      const along = (span.from + span.to) / 2;
      const g = new PlaneGeometry(1.5, 1.0, 3, 2);
      const y = marbleTop + 1.3;
      if (span.axis === 'x') g.translate(along, y, span.at + span.facing * 0.02);
      else g.rotateY(Math.PI / 2).translate(span.at + span.facing * 0.02, y, along);
      add(bake(g), panel);
    }
  }

  return {
    group,
    floors: [floor],
    doorLeaves: leafMeshes,
    setDoorOpening(amount: number) {
      for (const { pivot, turn } of hinges) pivot.rotation.y = turn * amount;
    },
    dispose() {
      group.traverse((o) => {
        if (o instanceof Mesh) o.geometry.dispose();
      });
      for (const m of materials) m.dispose();
      for (const t of textures) t.dispose();
    },
  };
}
