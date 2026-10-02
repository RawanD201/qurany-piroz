// Route markings drawn on the floor for the Hajj and Umrah guide: the tawaf circuit around the
// Kaaba (with its direction and its starting line in line with the Black Stone) and the sa'i
// route between Safa and Marwah. They are guide markings for learning, not part of the
// building, and are shown only while a guide step that uses them is open.

import {
  BufferGeometry,
  DoubleSide,
  Float32BufferAttribute,
  Group,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  RingGeometry,
  type Material,
} from 'three';
import { MASA, kaabaCorners, masaAxis, masaFraction, masaPoint, type Vec2 } from '../data/layout';
import type { GuideRoute } from '../data/rites';

/** Radius of the drawn tawaf circuit, metres from the Kaaba's centre (clear of Maqam Ibrahim). */
export const TAWAF_RADIUS = 20;
const FLOOR_Y = 0.03;

/** Angle (radians, anticlockwise from east, as seen from above) of the Black Stone corner. */
function startAngle(): number {
  const corner = kaabaCorners().east;
  return Math.atan2(-corner.z, corner.x);
}

/** A point on the tawaf circuit; angles increase anticlockwise seen from above. */
function onCircuit(angle: number, radius = TAWAF_RADIUS): Vec2 {
  return { x: Math.cos(angle) * radius, z: -Math.sin(angle) * radius };
}

/** One full circuit, anticlockwise from the starting line back to it. */
export function tawafPath(segments = 48): Vec2[] {
  const a0 = startAngle();
  const points: Vec2[] = [];
  for (let i = 1; i <= segments; i++) points.push(onCircuit(a0 + (i / segments) * Math.PI * 2));
  return points;
}

export function tawafStart(): { position: Vec2; facing: Vec2 } {
  const a0 = startAngle();
  // Walking anticlockwise: the direction of travel is the circuit's tangent.
  return { position: onCircuit(a0), facing: onCircuit(a0 + 0.2) };
}

/** Where the guide places the visitor to show the tawaf: on the starting line, looking at the
 *  Black Stone corner, with the circuit and its arrows in view. */
export function tawafOverview(): { position: Vec2; lookAt: { x: number; y: number; z: number } } {
  const corner = kaabaCorners().east;
  return { position: onCircuit(startAngle(), TAWAF_RADIUS + 7), lookAt: { x: corner.x, y: 1.2, z: corner.z } };
}

/** Sa'i: from just in front of Safa to just in front of Marwah, along the Mas'a. */
export function saiPath(): { start: Vec2; end: Vec2 } {
  const { length } = masaAxis();
  return { start: masaPoint(10 / length), end: masaPoint(1 - 10 / length) };
}

/** Laps of the sa'i: Safa to Marwah is one, Marwah back to Safa another, ending at Marwah. */
export const SAI_LAPS = 7;
/** Pace between the green lights, as a multiple of walking speed (men hasten there). */
export const SAI_HASTEN_PACE = 1.75;

/** The waypoints of the full sa'i after starting at Safa: Marwah, Safa, … Marwah. */
export function saiLaps(): Vec2[] {
  const { start, end } = saiPath();
  return Array.from({ length: SAI_LAPS }, (_, i) => (i % 2 === 0 ? end : start));
}

/** The sa'i's pace at a position: hastening between the green lights, walking elsewhere. */
export function saiPace(x: number, z: number): number {
  const t = masaFraction(x, z);
  return t >= MASA.greenFrom && t <= MASA.greenTo ? SAI_HASTEN_PACE : 1;
}

/** A flat arrowhead pointing along +X before rotation. */
function arrow(size: number): BufferGeometry {
  const geometry = new BufferGeometry();
  geometry.setAttribute(
    'position',
    new Float32BufferAttribute([size * 0.6, 0, 0, -size * 0.4, 0, size * 0.45, -size * 0.4, 0, -size * 0.45, -size * 0.15, 0, 0], 3)
  );
  geometry.setIndex([0, 2, 3, 0, 3, 1]);
  return geometry;
}

function material(color: string, opacity: number): MeshBasicMaterial {
  return new MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    depthWrite: false,
    side: DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });
}

export class GuideOverlays {
  readonly group = new Group();
  private readonly tawaf = new Group();
  private readonly sai = new Group();
  private readonly materials: Material[] = [];

  constructor() {
    const gold = material('#f0cf55', 0.8);
    const green = material('#3ee07f', 0.9);
    this.materials.push(gold, green);

    // Tawaf: the circuit, arrows showing the direction, and the starting line.
    const ring = new Mesh(new RingGeometry(TAWAF_RADIUS - 0.18, TAWAF_RADIUS + 0.18, 128), gold);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = FLOOR_Y;
    this.tawaf.add(ring);
    const a0 = startAngle();
    for (let k = 1; k < 24; k++) {
      const angle = a0 + (k / 24) * Math.PI * 2;
      const p = onCircuit(angle);
      const mesh = new Mesh(arrow(1.1), gold);
      mesh.position.set(p.x, FLOOR_Y + 0.005, p.z);
      // Arrow along +X, turned to the anticlockwise tangent (-sin a, -cos a) in (x, z).
      mesh.rotation.y = Math.atan2(Math.cos(angle), -Math.sin(angle));
      this.tawaf.add(mesh);
    }
    const corner = kaabaCorners().east;
    const lineStart = Math.hypot(corner.x, corner.z) + 1;
    const lineLength = TAWAF_RADIUS + 3 - lineStart;
    const line = new Mesh(new PlaneGeometry(lineLength, 0.3), green);
    line.rotation.x = -Math.PI / 2;
    line.rotation.z = a0;
    const mid = onCircuit(a0, lineStart + lineLength / 2);
    line.position.set(mid.x, FLOOR_Y + 0.004, mid.z);
    this.tawaf.add(line);

    // Sa'i: the route along the Mas'a, arrows both ways, and the green-lit section.
    const axis = masaAxis();
    const { start, end } = saiPath();
    const length = Math.hypot(end.x - start.x, end.z - start.z);
    // Flat strips laid along the axis (their length runs along local -Z once laid flat).
    const strip = (width: number, stripLength: number, at: Vec2, mat: Material, lift: number) => {
      const mesh = new Mesh(new PlaneGeometry(width, stripLength), mat);
      mesh.rotation.order = 'YXZ';
      mesh.rotation.set(-Math.PI / 2, Math.atan2(axis.dir.x, axis.dir.z), 0);
      mesh.position.set(at.x, FLOOR_Y + lift, at.z);
      this.sai.add(mesh);
    };
    strip(0.5, length, { x: (start.x + end.x) / 2, z: (start.z + end.z) / 2 }, gold, 0);
    strip(0.9, (MASA.greenTo - MASA.greenFrom) * axis.length, masaPoint((MASA.greenFrom + MASA.greenTo) / 2), green, 0.004);
    // Arrows both ways, as the sa'i goes back and forth: towards Marwah on one side of the
    // line, back towards Safa on the other.
    for (let s = 6; s < length - 4; s += 12) {
      for (const [side, turn, offset] of [
        [-0.9, 0, 0],
        [0.9, Math.PI, 6],
      ] as const) {
        const along = s + offset;
        if (along > length - 4) continue;
        const p = masaPoint((10 + along) / axis.length, side);
        const mesh = new Mesh(arrow(1.0), gold);
        mesh.position.set(p.x, FLOOR_Y + 0.006, p.z);
        mesh.rotation.y = axis.angle + turn;
        this.sai.add(mesh);
      }
    }
    for (const [point, mat] of [
      [start, green],
      [end, gold],
    ] as const) {
      const disc = new Mesh(new RingGeometry(0.6, 1.1, 40), mat);
      disc.rotation.x = -Math.PI / 2;
      disc.position.set(point.x, FLOOR_Y, point.z);
      this.sai.add(disc);
    }

    this.group.add(this.tawaf, this.sai);
    this.show(null);
  }

  show(route: GuideRoute | null): void {
    this.tawaf.visible = route === 'tawaf';
    this.sai.visible = route === 'sai';
  }

  dispose(): void {
    this.group.traverse((o) => {
      if (o instanceof Mesh) o.geometry.dispose();
    });
    for (const m of this.materials) m.dispose();
  }
}
