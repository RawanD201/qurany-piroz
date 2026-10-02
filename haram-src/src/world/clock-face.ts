// The four faces of the Makkah Royal Clock Tower, drawn on canvases and kept to the current
// time in Makkah (Arabia Standard Time, UTC+3, which has no daylight saving).
//
// What the real faces show (see SOURCES.md): a white dial with black hands by day and a green
// dial with white hands at night, the Saudi coat of arms at the centre behind the hands, and,
// above the dial, "Allahu akbar" on the north and south faces and the Shahada on the east and
// west. The hour bars, minute track, hands and emblem here are a simplified drawing of that
// arrangement, not a copy of the real artwork.

import { CanvasTexture, SRGBColorSpace } from 'three';
import type { TimeOfDay } from './materials';

/** Makkah's offset from UTC, hours. */
export const MAKKAH_UTC_OFFSET_HOURS = 3;

const MINUTE_MS = 60_000;

/** Whole minutes since the epoch, in Makkah's local time (changes once a minute). */
export function makkahMinute(epochMs: number): number {
  return Math.floor((epochMs + MAKKAH_UTC_OFFSET_HOURS * 3_600_000) / MINUTE_MS);
}

/** The hands' angles for a Makkah minute: radians clockwise from twelve o'clock. */
export function handAngles(minute: number): { hour: number; minute: number } {
  const ofDay = ((minute % 1440) + 1440) % 1440;
  const hours = Math.floor(ofDay / 60) % 12;
  const minutes = ofDay % 60;
  return {
    hour: ((hours + minutes / 60) / 12) * Math.PI * 2,
    minute: (minutes / 60) * Math.PI * 2,
  };
}

/** Rows of the inscription atlas: top half "Allahu akbar", bottom half the Shahada. */
export type InscriptionRow = 'takbir' | 'shahada';
export const INSCRIPTION_ROWS: Record<InscriptionRow, { v0: number; v1: number }> = {
  takbir: { v0: 0.5, v1: 1 },
  shahada: { v0: 0, v1: 0.5 },
};
const INSCRIPTION_TEXT: Record<InscriptionRow, string> = {
  takbir: 'الله أكبر',
  shahada: 'لا إله إلا الله محمد رسول الله',
};
const ARABIC_FONTS = '"Geeza Pro", "Noto Naskh Arabic", "Noto Sans Arabic", "Segoe UI", Tahoma, Arial, sans-serif';

interface Palette {
  dial: string;
  /** Lightness swing of the glass tesserae, ± in percent. */
  mosaic: number;
  marks: string;
  hands: string;
  handEdge: string;
  gold: string;
  palm: string;
  blade: string;
  text: string;
  textEdge: string;
  glow: string | null;
}

const PALETTES: Record<TimeOfDay, Palette> = {
  day: {
    dial: '#f3f0e8',
    mosaic: 3,
    marks: '#17191d',
    hands: '#121417',
    handEdge: '#b8953f',
    gold: '#c9a54a',
    palm: '#1e7a45',
    blade: '#7d858c',
    text: '#d9b24f',
    textEdge: '#5d4818',
    glow: null,
  },
  night: {
    dial: '#118a49',
    mosaic: 5,
    marks: '#ecfff3',
    hands: '#ffffff',
    handEdge: '#cfeedd',
    gold: '#f4d77e',
    palm: '#f4d77e',
    blade: '#e6f2ea',
    text: '#f4fff8',
    textEdge: '#0b5a2f',
    glow: '#7dffb0',
  },
};

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

function canvas(width: number, height: number): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = width;
  c.height = height;
  return c;
}

function context(c: HTMLCanvasElement): CanvasRenderingContext2D {
  const ctx = c.getContext('2d');
  if (!ctx) throw new Error('2D canvas unavailable');
  return ctx;
}

/** A point at radius r and angle a (clockwise from twelve o'clock) around the centre. */
function polar(c: number, r: number, a: number): [number, number] {
  return [c + r * Math.sin(a), c - r * Math.cos(a)];
}

/** The dial without its hands: mosaic ground, rim, minute track, hour bars and the emblem. */
function paintDial(ctx: CanvasRenderingContext2D, size: number, p: Palette): void {
  const c = size / 2;
  const R = size / 2;
  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = p.dial;
  ctx.fillRect(0, 0, size, size);

  // The faces are glass mosaic: small tesserae, each a shade lighter or darker.
  const random = mulberry32(0xc10c);
  const tile = Math.max(3, Math.round(size / 160));
  for (let y = 0; y < size; y += tile) {
    for (let x = 0; x < size; x += tile) {
      const shade = (random() * 2 - 1) * p.mosaic;
      ctx.fillStyle = shade > 0 ? `rgba(255,255,255,${shade / 100})` : `rgba(0,0,0,${-shade / 100})`;
      ctx.fillRect(x, y, tile - 0.6, tile - 0.6);
    }
  }

  // Rim: a gold band and a fine inner line.
  ctx.strokeStyle = p.gold;
  ctx.lineWidth = R * 0.05;
  ctx.beginPath();
  ctx.arc(c, c, R * 0.97, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = R * 0.008;
  ctx.beginPath();
  ctx.arc(c, c, R * 0.925, 0, Math.PI * 2);
  ctx.stroke();

  // Minute track.
  ctx.fillStyle = p.marks;
  for (let m = 0; m < 60; m++) {
    if (m % 5 === 0) continue;
    const [x, y] = polar(c, R * 0.885, (m / 60) * Math.PI * 2);
    ctx.beginPath();
    ctx.arc(x, y, R * 0.012, 0, Math.PI * 2);
    ctx.fill();
  }

  // Hour bars, tapering towards the centre; twelve o'clock has two.
  const bar = (angle: number, offset: number) => {
    ctx.save();
    ctx.translate(c, c);
    ctx.rotate(angle);
    ctx.translate(offset, 0);
    ctx.beginPath();
    ctx.moveTo(-R * 0.026, -R * 0.905);
    ctx.lineTo(R * 0.026, -R * 0.905);
    ctx.lineTo(R * 0.014, -R * 0.7);
    ctx.lineTo(-R * 0.014, -R * 0.7);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };
  for (let h = 0; h < 12; h++) {
    const angle = (h / 12) * Math.PI * 2;
    if (h === 0) {
      bar(angle, -R * 0.036);
      bar(angle, R * 0.036);
    } else {
      bar(angle, 0);
    }
  }

  paintEmblem(ctx, c, c - R * 0.02, R * 0.62, p);
}

/**
 * The Saudi coat of arms as described in the Basic Law: two crossed swords, hilts at the base,
 * with a palm tree above and between the blades. `h` is the emblem's height.
 */
function paintEmblem(ctx: CanvasRenderingContext2D, cx: number, cy: number, h: number, p: Palette): void {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.lineCap = 'round';

  // Swords: curved blades crossing in a saltire, hilts at the bottom.
  for (const side of [-1, 1]) {
    const start = { x: side * h * 0.27, y: h * 0.36 };
    const control = { x: -side * h * 0.02, y: h * 0.3 };
    const tip = { x: -side * h * 0.42, y: -h * 0.06 };
    ctx.strokeStyle = p.blade;
    ctx.lineWidth = h * 0.05;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.quadraticCurveTo(control.x, control.y, tip.x, tip.y);
    ctx.stroke();
    // Crossguard across the blade, then the grip and pommel below it.
    const length = Math.hypot(control.x - start.x, control.y - start.y);
    const tx = (control.x - start.x) / length;
    const ty = (control.y - start.y) / length;
    const guard = h * 0.07;
    ctx.strokeStyle = p.gold;
    ctx.lineWidth = h * 0.035;
    ctx.beginPath();
    ctx.moveTo(start.x - ty * guard, start.y + tx * guard);
    ctx.lineTo(start.x + ty * guard, start.y - tx * guard);
    ctx.stroke();
    const grip = { x: start.x - tx * h * 0.11, y: start.y - ty * h * 0.11 };
    ctx.lineWidth = h * 0.045;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(grip.x, grip.y);
    ctx.stroke();
    ctx.fillStyle = p.gold;
    ctx.beginPath();
    ctx.arc(grip.x, grip.y, h * 0.03, 0, Math.PI * 2);
    ctx.fill();
  }

  // Palm: a slightly tapering trunk, then leaves fanning out from the crown and drooping.
  ctx.fillStyle = p.palm;
  const crownY = -h * 0.26;
  ctx.beginPath();
  ctx.moveTo(-h * 0.032, h * 0.22);
  ctx.lineTo(h * 0.032, h * 0.22);
  ctx.lineTo(h * 0.02, crownY);
  ctx.lineTo(-h * 0.02, crownY);
  ctx.closePath();
  ctx.fill();
  for (const angle of [0, -0.45, 0.45, -0.95, 0.95, -1.45, 1.45, -1.95, 1.95]) {
    const length = h * (0.3 - Math.abs(angle) * 0.02);
    const droop = h * 0.09 * angle * angle;
    const dirX = Math.sin(angle);
    const dirY = -Math.cos(angle);
    const tipX = dirX * length;
    const tipY = crownY + dirY * length + droop;
    const midX = dirX * length * 0.55;
    const midY = crownY + dirY * length * 0.55 - length * 0.06;
    const w = length * 0.14;
    ctx.beginPath();
    ctx.moveTo(0, crownY);
    ctx.quadraticCurveTo(midX - dirY * w, midY + dirX * w, tipX, tipY);
    ctx.quadraticCurveTo(midX + dirY * w, midY - dirX * w, 0, crownY);
    ctx.fill();
  }
  ctx.restore();
}

function paintHand(ctx: CanvasRenderingContext2D, c: number, angle: number, length: number, tail: number, width: number, p: Palette): void {
  ctx.save();
  ctx.translate(c, c);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(-width / 2, tail);
  ctx.lineTo(-width * 0.42, -length * 0.78);
  ctx.lineTo(0, -length);
  ctx.lineTo(width * 0.42, -length * 0.78);
  ctx.lineTo(width / 2, tail);
  ctx.closePath();
  ctx.fillStyle = p.hands;
  ctx.fill();
  ctx.lineWidth = width * 0.12;
  ctx.strokeStyle = p.handEdge;
  ctx.stroke();
  ctx.restore();
}

function paintInscriptions(ctx: CanvasRenderingContext2D, width: number, height: number, p: Palette): void {
  ctx.clearRect(0, 0, width, height);
  const rowHeight = height / 2;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.direction = 'rtl';
  ctx.lineJoin = 'round';
  for (const row of ['takbir', 'shahada'] as const) {
    const text = INSCRIPTION_TEXT[row];
    const y = (row === 'takbir' ? 0 : rowHeight) + rowHeight * 0.55;
    let fontSize = rowHeight * 0.7;
    ctx.font = `bold ${fontSize}px ${ARABIC_FONTS}`;
    const fit = (width * 0.92) / Math.max(1, ctx.measureText(text).width);
    if (fit < 1) {
      fontSize *= fit;
      ctx.font = `bold ${fontSize}px ${ARABIC_FONTS}`;
    }
    ctx.shadowColor = p.glow ?? 'transparent';
    ctx.shadowBlur = p.glow ? fontSize * 0.25 : 0;
    ctx.strokeStyle = p.textEdge;
    ctx.lineWidth = fontSize * 0.08;
    ctx.strokeText(text, width / 2, y);
    ctx.fillStyle = p.text;
    ctx.fillText(text, width / 2, y);
  }
  ctx.shadowBlur = 0;
}

export class ClockFaces {
  /** The dial with its hands, shared by all four faces. */
  readonly dial: CanvasTexture;
  /** "Allahu akbar" and the Shahada, one per row (see INSCRIPTION_ROWS). */
  readonly inscriptions: CanvasTexture;
  private readonly dialCanvas: HTMLCanvasElement;
  private readonly base: HTMLCanvasElement;
  private readonly textCanvas: HTMLCanvasElement;
  private time: TimeOfDay;
  private shownMinute = Number.NaN;

  constructor(size: number, anisotropy: number, time: TimeOfDay, now = Date.now()) {
    this.time = time;
    this.dialCanvas = canvas(size, size);
    this.base = canvas(size, size);
    this.textCanvas = canvas(size, size / 2);
    this.dial = new CanvasTexture(this.dialCanvas);
    this.inscriptions = new CanvasTexture(this.textCanvas);
    for (const texture of [this.dial, this.inscriptions]) {
      texture.colorSpace = SRGBColorSpace;
      texture.anisotropy = anisotropy;
    }
    // The lettering sits on a transparent ground; premultiplied, its edges filter cleanly.
    this.inscriptions.premultiplyAlpha = true;
    this.repaint(now);
  }

  /** Redraws the hands if the minute in Makkah has changed. Returns true when it redrew. */
  update(now = Date.now()): boolean {
    const minute = makkahMinute(now);
    if (minute === this.shownMinute) return false;
    this.drawHands(minute);
    return true;
  }

  setTimeOfDay(time: TimeOfDay, now = Date.now()): void {
    if (time === this.time) return;
    this.time = time;
    this.repaint(now);
  }

  dispose(): void {
    this.dial.dispose();
    this.inscriptions.dispose();
  }

  private repaint(now: number): void {
    const palette = PALETTES[this.time];
    paintDial(context(this.base), this.base.width, palette);
    paintInscriptions(context(this.textCanvas), this.textCanvas.width, this.textCanvas.height, palette);
    this.inscriptions.needsUpdate = true;
    this.drawHands(makkahMinute(now));
  }

  private drawHands(minute: number): void {
    const ctx = context(this.dialCanvas);
    const size = this.dialCanvas.width;
    const c = size / 2;
    const R = size / 2;
    const p = PALETTES[this.time];
    ctx.clearRect(0, 0, size, size);
    ctx.drawImage(this.base, 0, 0);
    const angles = handAngles(minute);
    // Proportions of the real hands: hour 18 m and minute 23 m on a 43 m dial (tails included).
    paintHand(ctx, c, angles.hour, R * 0.62, R * 0.2, R * 0.085, p);
    paintHand(ctx, c, angles.minute, R * 0.86, R * 0.22, R * 0.06, p);
    ctx.fillStyle = p.gold;
    ctx.beginPath();
    ctx.arc(c, c, R * 0.05, 0, Math.PI * 2);
    ctx.fill();
    this.shownMinute = minute;
    this.dial.needsUpdate = true;
  }
}
