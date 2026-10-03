// Figures of people, for the people praying in the courtyard (praying-people.ts) and those going
// round the Kaaba (tawaf-crowd.ts). No model files: each body is built from smooth shapes — limbs
// and a robe swept along their own lines, with oval sections where a body is broader than deep —
// in the proportions of a grown man (about 1.72 m), with hands and feet. The head is shaped into a
// face (brow, eye sockets, nose, cheekbones, lips, chin, a narrower jaw), the eyes, brows and mouth
// a shade darker, the hair and beard shaped and shaded on it. Robes fall in folds, deepest at the
// hem, darker in the creases, and every figure is shaded a little darker underneath and where it
// meets the floor. They are dressed as people in the Haram are: a thobe (a long robe) with a white
// cap or a head cloth held by its cord (agal); the two white sheets of ihram, with the head bare;
// or, for women in the tawaf, an abaya and a headscarf.
//
// Each part is cloth or skin. One figure is drawn many times over (an InstancedMesh): the instance
// colour tints the cloth, and a second colour per instance (the `skinTone` attribute, applied by a
// small change to the material's shader) tints the skin, so a crowd has many skin tones and many
// shades of clothes from a handful of shapes. Hair, beards and the agal are skin parts darkened by
// their tint, so they come out dark whatever the skin tone.

import {
  BufferGeometry,
  CanvasTexture,
  CircleGeometry,
  ClampToEdgeWrapping,
  Color,
  Float32BufferAttribute,
  Matrix4,
  MeshBasicMaterial,
  MeshStandardMaterial,
  NoColorSpace,
  SphereGeometry,
  TorusGeometry,
  Vector3,
  type WebGLProgramParametersWithUniforms,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export type V3 = readonly [number, number, number];
/** A section's radius: round, or [across the body, front to back]. */
type Radius = number | readonly [number, number];

interface PartStyle {
  /** Skin (tinted by the person's skin tone) rather than cloth (tinted by their clothes). */
  skin?: boolean;
  /** Darkens the part: hair, a beard, the agal's cord. */
  tint?: number;
  /** For walkers: swings with the stride (+1 or −1: a leg with the opposite arm) about `pivot` (y, z). */
  swing?: number;
  pivot?: readonly [number, number];
  /** Details seen only close to: drawn on the detailed figure only (a nose, ears, the agal). */
  fine?: boolean;
  /** Small parts left out of the simplest figure, drawn far away (hands, feet). */
  small?: boolean;
  /** For walkers: bends at the knee with the stride (a lower leg or foot). */
  bend?: boolean;
}

/**
 * A tube swept through sections (`folds`: how deeply cloth falls in folds at its first section,
 * fading along it), a solid oval, a ring, or a face (a head shaped as described above, at `face`,
 * tipped down by `pitch`).
 */
export type Part =
  | (PartStyle & { tube: readonly (readonly [V3, Radius])[]; capStart?: boolean; capEnd?: boolean; folds?: number })
  | (PartStyle & { blob: V3; size: V3 })
  | (PartStyle & { ring: V3; radius: number; thickness: number })
  | (PartStyle & { face: V3; size: V3; pitch: number; hair: boolean; beard: boolean });

export type Detail = 'near' | 'far' | 'walk';

// ---- building the shapes ---------------------------------------------------------------------

const X = new Vector3(1, 0, 0);
const Y = new Vector3(0, 1, 0);

/**
 * A tube through `sections`, each ring an oval square to the tube's line, its first axis kept as
 * level and across the body as the line allows (so a torso stays broad from side to side however
 * it bends). Rounded caps close the ends that are asked for.
 */
function tube(sections: readonly (readonly [V3, Radius])[], radial: number, capStart: boolean, capEnd: boolean, folds = 0): Shaped {
  const points = sections.map(([p]) => new Vector3(...p));
  const radii = sections.map(([, r]) => (typeof r === 'number' ? ([r, r] as const) : r));
  const n = points.length;
  const tangentAt = (i: number) => points[Math.min(n - 1, i + 1)].clone().sub(points[Math.max(0, i - 1)]).normalize();
  const positions: number[] = [];
  const tints: number[] = [];
  const index: number[] = [];
  // Each row is a ring (its first vertex, `radial` of them) or a single pole vertex.
  const rows: { start: number; pole: boolean }[] = [];
  const side = new Vector3();
  const other = new Vector3();
  let previous = X.clone();
  const ring = (center: Vector3, t: Vector3, rx: number, rz: number, along: number) => {
    side.copy(X).addScaledVector(t, -t.x);
    if (side.lengthSq() < 0.05) side.copy(previous).addScaledVector(t, -previous.dot(t));
    if (side.lengthSq() < 0.05) side.copy(Y).addScaledVector(t, -t.y);
    side.normalize();
    previous = side.clone();
    other.crossVectors(t, side);
    rows.push({ start: positions.length / 3, pole: false });
    // Folds: the cloth swings in and out round the ring, deepest at the start, darker in the creases.
    const depth = folds * Math.pow(1 - along, 1.5);
    for (let k = 0; k < radial; k++) {
      const a = (k / radial) * Math.PI * 2;
      const fold = depth ? 0.62 * Math.sin(5 * a + 1.3 + along * 2) + (radial >= 14 ? 0.38 * Math.sin(9 * a + 0.5 - along * 3) : 0) : 0;
      const c = Math.cos(a) * rx * (1 + depth * fold);
      const s = Math.sin(a) * rz * (1 + depth * fold);
      positions.push(center.x + side.x * c + other.x * s, center.y + side.y * c + other.y * s, center.z + side.z * c + other.z * s);
      tints.push(Math.min(1.04, 1 + 2.2 * depth * fold));
    }
  };
  const pole = (p: Vector3) => {
    rows.push({ start: positions.length / 3, pole: true });
    positions.push(p.x, p.y, p.z);
    tints.push(1);
  };
  const capRings = (i: number, outward: number) => {
    const t = tangentAt(i);
    const [rx, rz] = radii[i];
    const reach = Math.max(rx, rz);
    const near = points[i].clone().addScaledVector(t, outward * reach * 0.45);
    const tip = points[i].clone().addScaledVector(t, outward * reach * 0.8);
    return { t, rx, rz, near, tip };
  };
  if (capStart) {
    const cap = capRings(0, -1);
    pole(cap.tip);
    ring(cap.near, cap.t, cap.rx * 0.78, cap.rz * 0.78, 0);
  }
  for (let i = 0; i < n; i++) ring(points[i], tangentAt(i), radii[i][0], radii[i][1], n > 1 ? i / (n - 1) : 0);
  if (capEnd) {
    const cap = capRings(n - 1, 1);
    ring(cap.near, cap.t, cap.rx * 0.78, cap.rz * 0.78, 1);
    pole(cap.tip);
  }
  // Wound so the faces look outwards (the second ring axis is the line × the first).
  for (let r = 0; r + 1 < rows.length; r++) {
    const a = rows[r];
    const b = rows[r + 1];
    for (let k = 0; k < radial; k++) {
      const k1 = (k + 1) % radial;
      if (a.pole) index.push(a.start, b.start + k1, b.start + k);
      else if (b.pole) index.push(a.start + k, a.start + k1, b.start);
      else index.push(a.start + k, a.start + k1, b.start + k, a.start + k1, b.start + k1, b.start + k);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setIndex(index);
  geometry.computeVertexNormals();
  return { geometry, tints: Float32Array.from(tints) };
}

/** A shape, and optionally a tint for each of its vertices (folds, a face's shading). */
interface Shaped {
  geometry: BufferGeometry;
  tints?: Float32Array;
}

const gauss = (dx: number, dy: number, sx: number, sy: number) => Math.exp(-((dx / sx) ** 2 + (dy / sy) ** 2));
const smooth = (from: number, to: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - from) / (to - from)));
  return t * t * (3 - 2 * t);
};

/**
 * A head (radii `size`), upright, facing −Z, round its centre: an oval shaped into a face and
 * shaded — eye sockets, brows and the mouth darker — with hair over the top and back (its line
 * higher at the forehead than at the nape) and a beard over the jaw and chin, both shaped a little
 * proud of the skin and darkened. The far version keeps the shading but not the shape.
 */
function faceGeometry(size: V3, hair: boolean, beard: boolean, detail: Detail): Shaped {
  const [w, h] = detail === 'near' ? [20, 14] : detail === 'walk' ? [12, 9] : [5, 3];
  const geometry = new SphereGeometry(1, w, h);
  // The face is painted (faceTexture): spread the front of the head over the painted part of the
  // texture, three times wider and twice taller than the sphere's own mapping; far away, none.
  const uv = geometry.getAttribute('uv');
  for (let i = 0; i < uv.count; i++) {
    if (detail === 'far') uv.setXY(i, BLANK[0], BLANK[1]);
    else uv.setXY(i, 0.5 + 0.5 * Math.min(1, Math.max(0, (uv.getX(i) - 0.75) * 3 + 0.5)), Math.min(1, Math.max(0, (uv.getY(i) - 0.5) * 2 + 0.5)));
  }
  const position = geometry.getAttribute('position');
  const tints = new Float32Array(position.count);
  const sculpt = detail !== 'far';
  for (let i = 0; i < position.count; i++) {
    let x = position.getX(i);
    const y = position.getY(i);
    let z = position.getZ(i);
    const front = Math.max(0, -z);
    let push = 0;
    let tint = 1;
    if (sculpt) {
      // A narrower jaw and chin, and a rounder skull behind.
      if (y < -0.2) {
        const k = (-0.2 - y) / 0.8;
        x *= 1 - 0.22 * k;
        z *= z < 0 ? 1 - 0.04 * k : 1 - 0.3 * k;
      }
      const f = front ** 3;
      // The nose: rising from the brow to its tip, then cut back under it.
      const nose = 0.15 * Math.exp(-((x / 0.14) ** 2)) * Math.min(1, Math.max(0, (0.18 - y) / 0.38)) * (y > -0.25 ? 1 : Math.exp(-(((y + 0.25) / 0.05) ** 2)));
      push +=
        f *
        (nose +
          0.05 * gauss(x, y - 0.24, 0.55, 0.06) -
          0.075 * (gauss(x - 0.32, y - 0.1, 0.13, 0.09) + gauss(x + 0.32, y - 0.1, 0.13, 0.09)) +
          0.035 * (gauss(x - 0.5, y + 0.02, 0.15, 0.12) + gauss(x + 0.5, y + 0.02, 0.15, 0.12)) +
          0.035 * gauss(x, y + 0.43, 0.24, 0.05) +
          0.05 * gauss(x, y + 0.7, 0.2, 0.12));
    }
    if (hair) {
      // The hairline: high at the forehead, down to the ears at the sides, low at the nape.
      const line = 0.05 - 0.4 * z;
      const mask = smooth(line - 0.06, line + 0.06, y);
      tint *= 1 - 0.84 * mask;
      push += 0.035 * mask;
    }
    if (beard) {
      const jaw = smooth(-0.12, -0.32, y) * smooth(0.55, 0.05, z);
      const moustache = front > 0.6 ? gauss(x, y + 0.33, 0.28, 0.035) : 0;
      const mask = Math.min(1, jaw * (1 - 0.75 * gauss(x, y + 0.44, 0.2, 0.05)) + moustache);
      tint *= 1 - 0.8 * mask;
      push += 0.045 * jaw;
    }
    position.setXYZ(i, x * (1 + push) * size[0], y * (1 + push) * size[1], z * (1 + push) * size[2]);
    tints[i] = tint;
  }
  geometry.computeVertexNormals();
  return { geometry, tints };
}

/** How many sides a tube of this radius has at each level of detail. */
function radial(radius: number, detail: Detail): number {
  const [big, middle, small] = detail === 'near' ? [9, 6, 5] : detail === 'walk' ? [6, 4, 3] : [4, 3, 3];
  return radius > 0.1 ? big : radius > 0.045 ? middle : small;
}

function shape(part: Part, detail: Detail): Shaped {
  if ('tube' in part) {
    const largest = Math.max(...part.tube.map(([, r]) => (typeof r === 'number' ? r : Math.max(r[0], r[1]))));
    // Far away: every other section, open ends (too small to see), no folds.
    const far = detail === 'far';
    const sections = far ? part.tube.filter((_, i) => i % 2 === 0 || i === part.tube.length - 1) : part.tube;
    const folds = far ? 0 : (part.folds ?? 0);
    // Folds need sides enough to show.
    const sides = Math.max(radial(largest, detail), folds ? (detail === 'near' ? 16 : 10) : 0);
    return tube(sections, sides, !far && (part.capStart ?? false), !far && (part.capEnd ?? false), folds);
  }
  if ('face' in part) {
    const shaped = faceGeometry(part.size, part.hair, part.beard, detail);
    shaped.geometry.rotateX(-part.pitch).translate(...part.face);
    return shaped;
  }
  if ('blob' in part) {
    const big = Math.max(...part.size) > 0.06;
    const [w, h] = detail === 'near' ? (big ? [9, 6] : [5, 3]) : detail === 'walk' ? (big ? [7, 4] : [5, 3]) : big ? [4, 3] : [4, 2];
    const g = new SphereGeometry(1, w, h).scale(...part.size).translate(...part.blob);
    g.deleteAttribute('uv');
    return { geometry: g };
  }
  const g = new TorusGeometry(part.radius, part.thickness, 4, detail === 'near' ? 16 : 10).rotateX(Math.PI / 2).translate(...part.ring);
  g.deleteAttribute('uv');
  return { geometry: g };
}

/** The knee, about which a walker's lower leg bends (y, z). */
export const KNEE: readonly [number, number] = [0.5, 0];

/**
 * One figure as a single geometry: its shapes merged, each vertex carrying its tint (`color`: the
 * part's own, its folds' or face's shading, and a little darkness underneath and near the floor),
 * whether it is skin (`skin`), and for walkers how it swings with the stride (`swing`, `pivot`)
 * and whether it bends at the knee (`bend`).
 */
export function buildFigure(parts: readonly Part[], detail: Detail): BufferGeometry {
  const pieces = parts
    .filter((part) => (detail === 'near' || !part.fine) && (detail !== 'far' || !part.small))
    .map((part) => {
      const { geometry: g, tints } = shape(part, detail);
      const count = g.getAttribute('position').count;
      const position = g.getAttribute('position');
      const normal = g.getAttribute('normal');
      const colors = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        // Light falls from above: a little darker facing down, and darker still at the floor.
        const occlusion = (0.8 + 0.2 * (normal.getY(i) * 0.5 + 0.5)) * (0.72 + 0.28 * smooth(0, 0.14, position.getY(i)));
        colors.fill((part.tint ?? 1) * (tints ? tints[i] : 1) * occlusion, i * 3, i * 3 + 3);
      }
      g.setAttribute('color', new Float32BufferAttribute(colors, 3));
      if (!('face' in part)) {
        const blank = new Float32Array(count * 2);
        for (let i = 0; i < count; i++) blank.set(BLANK, i * 2);
        g.setAttribute('uv', new Float32BufferAttribute(blank, 2));
      }
      g.setAttribute('skin', new Float32BufferAttribute(new Float32Array(count).fill(part.skin ? 1 : 0), 1));
      g.setAttribute('swing', new Float32BufferAttribute(new Float32Array(count).fill(part.swing ?? 0), 1));
      g.setAttribute('bend', new Float32BufferAttribute(new Float32Array(count).fill(part.bend ? 1 : 0), 1));
      const pivot = new Float32Array(count * 2);
      for (let i = 0; i < count; i++) pivot.set(part.pivot ?? [0, 0], i * 2);
      g.setAttribute('pivot', new Float32BufferAttribute(pivot, 2));
      return g;
    });
  const merged = mergeGeometries(pieces, false);
  if (!merged) throw new Error('Could not build a figure');
  for (const piece of pieces) piece.dispose();
  merged.computeBoundingSphere();
  return merged;
}

// ---- the head ---------------------------------------------------------------------------------

export type Headwear = 'kufi' | 'ghutra' | 'bare' | 'hijab';

const HEAD: V3 = [0.078, 0.112, 0.097];

/** The head and what is on it, built upright facing −Z round its centre. */
function headParts(headwear: Headwear, beard: boolean): Part[] {
  const covered = headwear === 'ghutra' || headwear === 'hijab';
  const parts: Part[] = [{ face: [0, 0, 0], size: HEAD, pitch: 0, hair: headwear === 'bare' || headwear === 'kufi', beard, skin: true }];
  if (!covered) {
    for (const x of [-0.077, 0.077]) parts.push({ blob: [x, -0.005, 0.005], size: [0.012, 0.028, 0.02], skin: true, fine: true });
  }
  if (headwear === 'kufi') parts.push({ blob: [0, 0.07, 0.008], size: [0.085, 0.058, 0.103] });
  if (headwear === 'ghutra' || headwear === 'hijab') {
    // A cloth over the head, framing the face, falling onto the shoulders.
    // Built from where it falls, behind the neck onto the upper back, up to the crown, so its
    // folds are deepest below. Close round the head, framing the face, then hanging behind.
    parts.push({
      tube:
        headwear === 'hijab'
          ? [
              [[0, -0.22, 0.03], [0.19, 0.17]],
              [[0, -0.14, 0.03], [0.13, 0.13]],
              [[0, -0.04, 0.03], [0.1, 0.105]],
              [[0, 0.05, 0.012], [0.093, 0.101]],
              [[0, 0.1, 0.005], [0.074, 0.087]],
              [[0, 0.125, 0], 0.02],
            ]
          : [
              [[0, -0.26, 0.075], [0.14, 0.07]],
              [[0, -0.14, 0.06], [0.11, 0.08]],
              [[0, -0.04, 0.033], [0.096, 0.098]],
              [[0, 0.05, 0.012], [0.092, 0.1]],
              [[0, 0.1, 0.005], [0.074, 0.087]],
              [[0, 0.125, 0], 0.02],
            ],
      capEnd: true,
      folds: 0.06,
    });
    if (headwear === 'ghutra') parts.push({ ring: [0, 0.085, 0.012], radius: 0.086, thickness: 0.011, skin: true, tint: 0.07, fine: true });
  }
  return parts;
}

/** Moves parts built round the head's centre onto a body: to `at`, its face tipped down by `pitch` (radians). */
function placeHead(parts: Part[], at: V3, pitch: number): Part[] {
  const m = new Matrix4().makeTranslation(...at).multiply(new Matrix4().makeRotationX(-pitch));
  const move = (p: V3): V3 => {
    const v = new Vector3(...p).applyMatrix4(m);
    return [v.x, v.y, v.z];
  };
  return parts.map((part) => {
    if ('tube' in part) return { ...part, tube: part.tube.map(([p, r]) => [move(p), r] as const) };
    if ('face' in part) return { ...part, face: move(part.face), pitch: part.pitch + pitch };
    if ('blob' in part) {
      // Turn the oval's axes with the head (exactly for a quarter turn, closely enough between).
      const c = Math.abs(Math.cos(pitch));
      const s = Math.abs(Math.sin(pitch));
      const [sx, sy, sz] = part.size;
      return { ...part, blob: move(part.blob), size: [sx, sy * c + sz * s, sz * c + sy * s] as V3 };
    }
    return { ...part, ring: move(part.ring) };
  });
}

// ---- the bodies --------------------------------------------------------------------------------

/** A limb on the person's left (+X) and its mirror on the right. */
function mirrored(part: Part, swing = 0): Part[] {
  const flip = (p: V3): V3 => [-p[0], p[1], p[2]];
  const other: Part =
    'tube' in part
      ? { ...part, tube: part.tube.map(([p, r]) => [flip(p), r] as const) }
      : 'blob' in part
        ? { ...part, blob: flip(part.blob) }
        : 'face' in part
          ? { ...part, face: flip(part.face) }
          : { ...part, ring: flip(part.ring) };
  return swing ? [{ ...part, swing }, { ...other, swing: -swing }] : [part, other];
}

/** A foot: a rounded heel behind the ankle, the instep, the toes. */
const FOOT: Part = {
  tube: [
    [[0.092, 0.055, 0.05], [0.034, 0.034]],
    [[0.096, 0.035, -0.04], [0.041, 0.027]],
    [[0.1, 0.022, -0.13], [0.037, 0.017]],
  ],
  capStart: true,
  capEnd: true,
  skin: true,
  small: true,
};

/** The robe or the upper sheet of ihram, from `from` up to the collar, standing upright. */
function uprightTorso(from: readonly (readonly [V3, Radius])[]): readonly (readonly [V3, Radius])[] {
  return [
    ...from,
    [[0, 1.05, 0], [0.183, 0.138]],
    [[0, 1.24, -0.01], [0.18, 0.13]],
    [[0, 1.36, 0], [0.205, 0.12]],
    [[0, 1.42, 0.003], [0.2, 0.11]],
    [[0, 1.465, 0.008], [0.14, 0.088]],
    [[0, 1.495, 0.012], [0.066, 0.06]],
  ];
}

/** A thobe hangs nearly straight from the shoulders, a little fuller at the hem. */
const THOBE_SKIRT: readonly (readonly [V3, Radius])[] = [
  [[0, 0.07, 0], [0.225, 0.195]],
  [[0, 0.32, 0], [0.212, 0.178]],
  [[0, 0.62, 0], [0.202, 0.165]],
  [[0, 0.9, 0.005], [0.195, 0.155]],
];

/** The lower sheet of ihram, wrapped from the waist to mid-shin, a little fuller at the hem. */
const IZAR: readonly (readonly [V3, Radius])[] = [
  [[0, 0.31, 0.005], [0.215, 0.185]],
  [[0, 0.52, 0], [0.205, 0.175]],
  [[0, 0.76, 0], [0.2, 0.165]],
  [[0, 0.95, 0.005], [0.19, 0.15]],
  [[0, 1.04, 0], [0.17, 0.13]],
];

/**
 * The upper sheet of ihram, worn over both shoulders like a shawl: its edge hangs over the lower
 * sheet at the hips, and it covers the upper arms (see arm()).
 */
const RIDA: readonly (readonly [V3, Radius])[] = [
  [[0, 0.84, 0], [0.228, 0.192]],
  [[0, 0.95, 0], [0.212, 0.172]],
  [[0, 1.08, -0.005], [0.19, 0.145]],
  [[0, 1.25, -0.01], [0.2, 0.145]],
  [[0, 1.37, 0], [0.218, 0.13]],
  [[0, 1.425, 0.004], [0.21, 0.118]],
  [[0, 1.468, 0.009], [0.145, 0.092]],
  [[0, 1.497, 0.012], [0.07, 0.065]],
];

/** Bare lower legs below the izar (ihram), standing: the calf, then slimming to the ankle. */
const SHIN: Part = {
  tube: [
    [[0.09, 0.4, 0.012], 0.054],
    [[0.09, 0.3, 0.018], 0.058],
    [[0.09, 0.18, 0.02], 0.045],
    [[0.088, 0.085, 0.022], 0.032],
  ],
  skin: true,
};

const NECK_UPRIGHT: Part = { tube: [[[0, 1.47, 0.01], 0.052], [[0, 1.56, 0], 0.05]], skin: true };

/**
 * An arm, from the shoulder through `joints` to the wrist, then the hand to `fingers`: sleeved to
 * the wrist, or (ihram) to just past the elbow with the forearm bare; `bare` for a bare arm.
 */
function arm(joints: readonly (readonly [V3, number])[], hand: readonly (readonly [V3, Radius])[], sleeve: 'long' | 'elbow' | 'bare'): Part[] {
  // The shoulder: a rounded joint over the top of the arm, joining it to the body.
  const [shoulder, upper] = joints[0];
  const parts: Part[] = [{ blob: shoulder, size: [upper * 1.08, upper * 1.05, upper * 1.15], skin: sleeve === 'bare' }];
  if (sleeve === 'long') parts.push({ tube: joints, capEnd: true });
  else if (sleeve === 'bare') parts.push({ tube: joints, capEnd: true, skin: true });
  else {
    // The upper sheet draped over the upper arm, fuller than a sleeve; the forearm bare.
    parts[0] = { blob: shoulder, size: [upper * 1.32, upper * 1.25, upper * 1.4] };
    const elbow = 2;
    parts.push({ tube: joints.slice(0, elbow + 1).map(([p, r]) => [p, r * 1.3] as const), capEnd: true });
    parts.push({ tube: joints.slice(elbow).map(([p, r], i) => [p, i === 0 ? r * 0.95 : r * 0.9] as const), capEnd: true, skin: true });
  }
  parts.push({ tube: hand, capEnd: true, skin: true, small: true });
  return parts;
}

export type PrayerPostureShape = 'standing' | 'bowing' | 'prostrating' | 'sitting';
export type Dress = 'kufi' | 'ghutra' | 'ihram' | 'abaya';

function headwearOf(dress: Dress): Headwear {
  return dress === 'ihram' ? 'bare' : dress === 'abaya' ? 'hijab' : dress;
}

/** A person at one moment of the prayer, facing −Z from where they stood. */
export function prayingFigure(posture: PrayerPostureShape, dress: Dress): Part[] {
  const ihram = dress === 'ihram';
  const sleeve = ihram ? 'elbow' : 'long';
  const head = headParts(headwearOf(dress), dress === 'kufi' || dress === 'ghutra');
  const parts: Part[] = [];
  if (posture === 'standing') {
    // Standing, the hands on the chest, the right over the left: the left forearm and hand lie
    // against the body, the right forearm in front of them, its hand over the left wrist.
    if (ihram) parts.push({ tube: IZAR, folds: 0.05 }, { tube: RIDA, capEnd: true, folds: 0.05 }, ...mirrored(SHIN));
    else parts.push({ tube: uprightTorso(THOBE_SKIRT), capEnd: true, folds: 0.07 });
    parts.push(...mirrored(FOOT), NECK_UPRIGHT, ...placeHead(head, [0, 1.635, -0.005], 0));
    parts.push(
      ...arm([[[0.19, 1.41, 0], 0.058], [[0.215, 1.27, -0.01], 0.054], [[0.205, 1.14, -0.035], 0.048], [[0.12, 1.165, -0.112], 0.042], [[0.03, 1.188, -0.138], 0.036]], [[[0.03, 1.19, -0.14], [0.036, 0.02]], [[-0.05, 1.195, -0.146], [0.04, 0.016]], [[-0.09, 1.195, -0.144], [0.03, 0.013]]], sleeve),
      ...arm([[[-0.19, 1.41, 0], 0.058], [[-0.215, 1.27, -0.01], 0.054], [[-0.205, 1.135, -0.045], 0.048], [[-0.11, 1.172, -0.168], 0.042], [[-0.005, 1.198, -0.195], 0.037]], [[[-0.005, 1.2, -0.197], [0.036, 0.02]], [[0.06, 1.2, -0.193], [0.04, 0.016]], [[0.1, 1.198, -0.184], [0.03, 0.013]]], sleeve)
    );
  } else if (posture === 'bowing') {
    // Bowing, the back level and the hands on the knees.
    const back: readonly (readonly [V3, Radius])[] = [
      [[0, 0.86, 0.07], [0.19, 0.15]],
      [[0, 0.955, 0.03], [0.185, 0.15]],
      [[0, 0.985, -0.12], [0.17, 0.13]],
      [[0, 0.995, -0.3], [0.18, 0.125]],
      [[0, 0.99, -0.42], [0.2, 0.12]],
      [[0, 0.975, -0.49], [0.165, 0.095]],
      [[0, 0.96, -0.525], [0.065, 0.06]],
    ];
    const lower: readonly (readonly [V3, Radius])[] = ihram
      ? [[[0, 0.34, 0.03], [0.205, 0.175]], [[0, 0.62, 0.045], [0.2, 0.165]]]
      : [[[0, 0.06, 0.02], [0.245, 0.215]], [[0, 0.32, 0.03], [0.215, 0.185]], [[0, 0.62, 0.045], [0.195, 0.16]]];
    parts.push({ tube: [...lower, ...back], capEnd: true, folds: 0.06 });
    if (ihram) parts.push(...mirrored({ tube: [[[0.09, 0.37, 0.035], 0.052], [[0.09, 0.2, 0.03], 0.045], [[0.09, 0.08, 0.02], 0.036]], skin: true }));
    parts.push(...mirrored(FOOT), { tube: [[[0, 0.965, -0.5], 0.05], [[0, 0.95, -0.575], 0.048]], skin: true }, ...placeHead(head, [0, 0.93, -0.655], (80 * Math.PI) / 180));
    for (const s of [1, -1]) {
      parts.push(
        ...arm(
          [[[0.19 * s, 0.985, -0.42], 0.058], [[0.185 * s, 0.83, -0.33], 0.052], [[0.17 * s, 0.7, -0.23], 0.047], [[0.15 * s, 0.6, -0.15], 0.042], [[0.14 * s, 0.56, -0.12], 0.038]],
          [[[0.14 * s, 0.56, -0.12], [0.04, 0.02]], [[0.125 * s, 0.49, -0.09], [0.042, 0.018]], [[0.115 * s, 0.45, -0.08], [0.03, 0.014]]],
          sleeve
        )
      );
    }
  } else if (posture === 'prostrating') {
    // In prostration: forehead, nose, hands, knees and toes on the floor, the elbows raised.
    const body: (readonly [V3, Radius])[] = [
      [[0, 0.1, -0.16], [0.19, 0.1]],
      [[0, 0.32, -0.14], [0.195, 0.13]],
      [[0, 0.56, -0.07], [0.2, 0.15]],
      [[0, 0.64, -0.02], [0.195, 0.16]],
      [[0, 0.6, -0.18], [0.19, 0.15]],
      [[0, 0.5, -0.34], [0.195, 0.13]],
      [[0, 0.41, -0.47], [0.2, 0.12]],
      [[0, 0.355, -0.54], [0.165, 0.095]],
      [[0, 0.33, -0.575], [0.065, 0.06]],
    ];
    const legs: (readonly [V3, Radius])[] = ihram ? [[[0, 0.1, 0.02], [0.18, 0.09]]] : [[[0, 0.1, 0.3], [0.17, 0.085]], [[0, 0.095, 0.05], [0.18, 0.09]]];
    parts.push({ tube: [...legs, ...body], capStart: true, capEnd: true, folds: 0.03 });
    if (ihram) parts.push(...mirrored({ tube: [[[0.085, 0.075, 0.28], 0.04], [[0.09, 0.08, 0.05], 0.048], [[0.09, 0.085, -0.08], 0.05]], skin: true }));
    parts.push(
      ...mirrored({ tube: [[[0.08, 0.16, 0.33], [0.035, 0.03]], [[0.085, 0.08, 0.31], [0.04, 0.028]], [[0.09, 0.025, 0.25], [0.035, 0.02]]], capStart: true, capEnd: true, skin: true, small: true }),
      { tube: [[[0, 0.34, -0.57], 0.05], [[0, 0.26, -0.63], 0.048]], skin: true },
      ...placeHead(head, [0, 0.145, -0.705], (100 * Math.PI) / 180)
    );
    for (const s of [1, -1]) {
      parts.push(
        ...arm(
          [[[0.19 * s, 0.37, -0.52], 0.058], [[0.27 * s, 0.27, -0.52], 0.052], [[0.3 * s, 0.15, -0.56], 0.047], [[0.24 * s, 0.06, -0.65], 0.04], [[0.19 * s, 0.035, -0.7], 0.037]],
          [[[0.19 * s, 0.03, -0.7], [0.04, 0.014]], [[0.185 * s, 0.02, -0.79], [0.045, 0.012]], [[0.18 * s, 0.016, -0.85], [0.03, 0.01]]],
          sleeve
        )
      );
    }
  } else {
    // Sitting back on the heels, the hands on the thighs.
    parts.push(
      { tube: [[[0, 0.12, 0.16], [0.19, 0.12]], [[0, 0.13, -0.05], [0.205, 0.12]], [[0, 0.12, -0.25], [0.2, 0.11]], [[0, 0.105, -0.33], [0.16, 0.09]]], capStart: true, capEnd: true, folds: 0.03 },
      {
        tube: [
          [[0, 0.18, 0.12], [0.2, 0.15]],
          [[0, 0.3, 0.1], [0.19, 0.14]],
          [[0, 0.4, 0.085], [0.165, 0.125]],
          [[0, 0.59, 0.065], [0.18, 0.13]],
          [[0, 0.72, 0.06], [0.2, 0.12]],
          [[0, 0.79, 0.065], [0.165, 0.095]],
          [[0, 0.835, 0.07], [0.065, 0.06]],
        ],
        capEnd: true,
        folds: 0.04,
      },
      ...mirrored({ tube: [[[0.09, 0.06, 0.22], [0.04, 0.03]], [[0.1, 0.035, 0.33], [0.035, 0.02]]], capStart: true, capEnd: true, skin: true, small: true }),
      { tube: [[[0, 0.82, 0.07], 0.052], [[0, 0.905, 0.065], 0.05]], skin: true },
      ...placeHead(head, [0, 0.985, 0.055], (12 * Math.PI) / 180)
    );
    for (const s of [1, -1]) {
      parts.push(
        ...arm(
          [[[0.19 * s, 0.76, 0.06], 0.058], [[0.215 * s, 0.62, 0.05], 0.054], [[0.21 * s, 0.49, 0.02], 0.048], [[0.17 * s, 0.33, -0.08], 0.042], [[0.15 * s, 0.27, -0.16], 0.037]],
          [[[0.15 * s, 0.265, -0.16], [0.04, 0.016]], [[0.14 * s, 0.255, -0.25], [0.045, 0.014]], [[0.13 * s, 0.245, -0.3], [0.03, 0.011]]],
          sleeve
        )
      );
    }
  }
  return parts;
}

/** Shoulder and hip heights, about which the arms and legs swing when walking. */
const SHOULDER: readonly [number, number] = [1.41, 0];
const HIP: readonly [number, number] = [0.9, 0];

/**
 * A person walking round the Kaaba, arms by their sides; the legs and arms swing with the stride
 * and the knees bend (in the shader, tawaf-crowd.ts).
 */
export function walkingFigure(dress: Dress): Part[] {
  const head = headParts(headwearOf(dress), dress === 'kufi');
  const parts: Part[] = [NECK_UPRIGHT, ...placeHead(head, [0, 1.635, -0.005], (6 * Math.PI) / 180)];
  if (dress === 'ihram') {
    parts.push({ tube: IZAR, folds: 0.05 }, { tube: RIDA, capEnd: true, folds: 0.05 });
    parts.push(...mirrored({ ...SHIN, pivot: HIP, bend: true }, 1), ...mirrored({ ...FOOT, pivot: HIP, bend: true }, 1));
  } else {
    const robe: readonly (readonly [V3, Radius])[] =
      dress === 'abaya'
        ? [[[0, 0.02, 0], [0.26, 0.24]], [[0, 0.35, 0], [0.225, 0.195]], [[0, 0.7, 0], [0.205, 0.17]], [[0, 0.9, 0.005], [0.195, 0.155]]]
        : THOBE_SKIRT;
    parts.push({ tube: uprightTorso(robe), capEnd: true, folds: dress === 'abaya' ? 0.08 : 0.07 });
    parts.push(...mirrored({ ...FOOT, pivot: HIP, bend: true }, 1));
  }
  const sleeves: Record<Dress, readonly ['long' | 'elbow' | 'bare', 'long' | 'elbow' | 'bare']> = {
    ihram: ['elbow', 'elbow'],
    abaya: ['long', 'long'],
    kufi: ['long', 'long'],
    ghutra: ['long', 'long'],
  };
  const [left, right] = sleeves[dress];
  for (const [s, sleeve] of [
    [1, left],
    [-1, right],
  ] as const) {
    // Each arm swings with the opposite leg.
    for (const part of arm(
      [[[0.19 * s, 1.41, 0], 0.058], [[0.21 * s, 1.27, 0.005], 0.053], [[0.215 * s, 1.15, 0.01], 0.047], [[0.21 * s, 1.02, -0.005], 0.042], [[0.205 * s, 0.9, -0.02], 0.037]],
      [[[0.205 * s, 0.9, -0.02], [0.022, 0.035]], [[0.2 * s, 0.83, -0.03], [0.018, 0.04]], [[0.195 * s, 0.78, -0.035], [0.014, 0.03]]],
      sleeve
    )) {
      parts.push({ ...part, swing: -s, pivot: SHOULDER });
    }
  }
  return parts;
}

// ---- the material -------------------------------------------------------------------------------

/**
 * The figures' material: nearly matte (cloth and skin), coloured by vertex and instance colours, with the
 * skin taking the instance's `skinTone` instead of the cloth's colour. `patch` adds more to the
 * vertex shader (the walkers' movement). If a future three.js changes the shader text this relies
 * on, the skin simply takes the clothes' colour (with a warning).
 */
export function figureMaterial(name: string, patch?: (shader: WebGLProgramParametersWithUniforms) => void): MeshStandardMaterial {
  const material = new MeshStandardMaterial({ vertexColors: true, roughness: 0.82, metalness: 0, map: faceTexture() });
  material.onBeforeCompile = (shader) => {
    const before = shader.vertexShader;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec3 skinTone;\nattribute float skin;')
      .replace('#include <color_vertex>', '#include <color_vertex>\nvColor.xyz = mix(vColor.xyz, color.xyz * skinTone, skin);');
    if (shader.vertexShader === before) console.warn('Figures: the shader could not be adapted; skin takes the clothes colour');
    patch?.(shader);
  };
  material.customProgramCacheKey = () => name;
  return material;
}

// ---- the painted face -----------------------------------------------------------------------------

/** Where on the face texture every other part samples: its plain white half. */
const BLANK: readonly [number, number] = [0.25, 0.5];

let face: CanvasTexture | null = null;

/**
 * The face, painted as shading to multiply over the skin: soft hollows round the eyes, the eyes,
 * brows, the shadow beside the nose and under it, the nostrils, the lips and the line between
 * them. The texture's left half is plain white for the clothes and the rest of the skin; its right
 * half is the front of the head (see faceGeometry). Drawn once and shared.
 */
function faceTexture(): CanvasTexture {
  if (face) return face;
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size * 2;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('2D canvas unavailable');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size * 2, size);
  // From a point on the head (as on the unit sphere: x across, y up, the face towards −z) to the
  // canvas, through the sphere's mapping and faceGeometry's spreading of it.
  const at = (x: number, y: number): [number, number] => {
    const theta = Math.acos(y);
    const delta = Math.asin(Math.max(-1, Math.min(1, x / Math.sin(theta))));
    const u = 0.5 - (3 * delta) / (2 * Math.PI);
    const v = 0.5 + 2 * (0.5 - theta / Math.PI);
    return [size + u * size, (1 - v) * size];
  };
  const shade = (x: number, y: number, rx: number, ry: number, value: number, blur = 1) => {
    const [cx, cy] = at(x, y);
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 1);
    const grey = Math.round(value * 255);
    g.addColorStop(0, `rgba(${grey}, ${grey}, ${grey}, 1)`);
    g.addColorStop(Math.max(0, 1 - blur), `rgba(${grey}, ${grey}, ${grey}, 1)`);
    g.addColorStop(1, `rgba(${grey}, ${grey}, ${grey}, 0)`);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(rx * size * 0.5, ry * size * 0.5);
    ctx.translate(-cx, -cy);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };
  for (const side of [-1, 1]) {
    shade(0.32 * side, 0.1, 0.2, 0.14, 0.78);
    shade(0.32 * side, 0.1, 0.1, 0.035, 0.22, 0.5);
    shade(0.3 * side, 0.255, 0.17, 0.03, 0.3, 0.5);
    shade(0.13 * side, -0.07, 0.05, 0.16, 0.86);
    shade(0.07 * side, -0.22, 0.035, 0.02, 0.45, 0.6);
    shade(0.42 * side, -0.12, 0.16, 0.16, 0.93);
  }
  shade(0, -0.27, 0.12, 0.03, 0.85);
  shade(0, -0.44, 0.2, 0.06, 0.8);
  shade(0, -0.44, 0.17, 0.014, 0.4, 0.5);
  face = new CanvasTexture(canvas);
  face.colorSpace = NoColorSpace;
  face.wrapS = face.wrapT = ClampToEdgeWrapping;
  return face;
}

// ---- contact shadows ----------------------------------------------------------------------------

/**
 * A soft shadow on the floor under a person: a disc of radius 1, dark in the middle and fading to
 * nothing at its edge (scaled and placed per person). It grounds the figures where the sun's
 * shadows are faint or missing (the walkers cast none).
 */
export function contactShadow(): { geometry: BufferGeometry; material: MeshBasicMaterial } {
  const geometry = new CircleGeometry(1, 20).rotateX(-Math.PI / 2);
  geometry.deleteAttribute('uv');
  const position = geometry.getAttribute('position');
  const colors = new Float32Array(position.count * 4);
  for (let i = 0; i < position.count; i++) {
    const r = Math.hypot(position.getX(i), position.getZ(i));
    colors.set([0, 0, 0, 0.42 * (1 - smooth(0.1, 1, r))], i * 4);
  }
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 4));
  const material = new MeshBasicMaterial({
    color: '#000000',
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -4,
  });
  return { geometry, material };
}

// ---- colours ------------------------------------------------------------------------------------

/** Skin tones, lighter to darker: people come to the Haram from everywhere. */
const SKIN_TONES = ['#f1cfb6', '#e3b394', '#d19c7a', '#ba8160', '#9e6847', '#7e5035', '#613b26', '#4a2b1b'].map((hex) => new Color(hex));

export function skinColor(value: number, out: Color): Color {
  return out.copy(SKIN_TONES[Math.min(SKIN_TONES.length - 1, Math.floor(value * SKIN_TONES.length))]);
}

/** Clothes: ihram white; abayas black; thobes mostly white, then cream, pale grey or blue, beige, grey, brown. */
export function clothColor(dress: Dress, shade: number, out: Color): Color {
  if (dress === 'ihram') return out.set(shade < 0.5 ? '#fbfaf5' : '#f2f0e8');
  if (dress === 'abaya') return out.set(shade < 0.6 ? '#141417' : shade < 0.9 ? '#1d1c21' : '#2a2730');
  if (shade < 0.55) return out.set(shade < 0.3 ? '#fbfbf8' : '#f3f2ee');
  if (shade < 0.67) return out.set('#ece1c8');
  if (shade < 0.76) return out.set('#d9dadb');
  if (shade < 0.84) return out.set('#cdd6e2');
  if (shade < 0.9) return out.set('#d8c7a6');
  if (shade < 0.96) return out.set('#9a9a9e');
  return out.set('#8a7058');
}
