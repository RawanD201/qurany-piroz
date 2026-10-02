// The mosque around the Kaaba, following its real plan (plan-data.ts, from OpenStreetMap): the
// courtyard floor, the Ottoman portico, the halls of the first Saudi and King Fahd expansions
// with their columns and outer walls and gates, the Mas'a with Safa and Marwah, the King
// Abdullah expansion and the northern building (from outside), and the thirteen minarets.
//
// Outlines and positions are real; heights, interiors, counts and details are simplified.

import {
  BoxGeometry,
  CircleGeometry,
  ConeGeometry,
  CylinderGeometry,
  ExtrudeGeometry,
  IcosahedronGeometry,
  Matrix4,
  Path,
  Shape,
  ShapeGeometry,
  SphereGeometry,
  TorusGeometry,
  Vector2,
  type BufferGeometry,
} from 'three';
import { BUILDING_HEIGHT, EXPANSIONS, HALL, MASA, PORTICO, WALL_THICKNESS, masaAxis, masaFraction, masaPoint, type Vec2 } from '../data/layout';
import { ABDULLAH_OUTLINE, MAIN_INNER, MAIN_OUTER, MARWAH_CENTER, MASA_OUTLINE, SAFA_CENTER } from '../data/plan-data';
import { rayDistance } from '../data/polygon';
import {
  HALL_FACADE_THICKNESS,
  MINARET_BASE_HALF,
  PORTICO_ARCADE_THICKNESS,
  exteriorWalls,
  gateFrames,
  hallColumns,
  hallFacadeEdges,
  masaColumns,
  masaSharedEdges,
  minarets,
  northBlock,
  porticoArcadeEdges,
  porticoColumns,
  porticoDomes,
  porticoRing,
} from '../data/structure';
import { PORTAL_DEPTH, ROCK_RADIUS } from '../physics/build-colliders';
import {
  archRise,
  arcadeOutline,
  extrudeAlong,
  placeRotY,
  pointedArch,
  scaleUVs,
  translation,
  windowedOutline,
  type StaticBatcher,
} from './geometry';

// Outlines are drawn in (x, -z): turning the result upright (rotateX(-90°)) maps them back
// onto (x, z) in the world.
const toPlan = (points: Vec2[]) => points.map((p) => new Vector2(p.x, -p.z));

function planShape(outline: Vec2[], holes: Vec2[][]): Shape {
  const shape = new Shape(toPlan(outline));
  for (const hole of holes) shape.holes.push(new Path(toPlan(hole)));
  return shape;
}

/** A flat slab between y and y + thickness from an outline drawn in (x, z), with holes. */
function slab(outline: Vec2[], holes: Vec2[][], y: number, thickness: number): BufferGeometry {
  const geometry = new ExtrudeGeometry(planShape(outline, holes), { depth: thickness, bevelEnabled: false, curveSegments: 24 });
  geometry.rotateX(-Math.PI / 2);
  geometry.translate(0, y, 0);
  return geometry;
}

function flat(outline: Vec2[], holes: Vec2[][], y: number): BufferGeometry {
  const geometry = new ShapeGeometry(planShape(outline, holes), 24);
  geometry.rotateX(-Math.PI / 2);
  geometry.translate(0, y, 0);
  return geometry;
}

/** The same outline facing down, for ceilings: drawn in (x, z) and turned the other way. */
function flatCeiling(outline: Vec2[], holes: Vec2[][], y: number): BufferGeometry {
  const toCeiling = (points: Vec2[]) => points.map((p) => new Vector2(p.x, p.z));
  const shape = new Shape(toCeiling(outline));
  for (const hole of holes) shape.holes.push(new Path(toCeiling(hole)));
  const geometry = new ShapeGeometry(shape, 24);
  geometry.rotateX(Math.PI / 2);
  geometry.translate(0, y, 0);
  return geometry;
}

function circle(cx: number, cz: number, r: number, segments = 32): Vec2[] {
  const points: Vec2[] = [];
  for (let i = 0; i < segments; i++) {
    const a = (i / segments) * Math.PI * 2;
    points.push({ x: cx + Math.cos(a) * r, z: cz + Math.sin(a) * r });
  }
  return points;
}

// ---- floors ---------------------------------------------------------------------------------------

function buildFloors(batch: StaticBatcher): void {
  // The courtyard and the portico: the Mataf's marble, laid in rows facing the Kaaba.
  batch.add(flat([...MAIN_INNER], [], 0), 'marbleFloor', { castShadow: false });
  // Under the roofs (shaded separately, see materials.ts).
  batch.add(flat([...MAIN_OUTER], [[...MAIN_INNER]], 0), 'marbleFloorInterior', { castShadow: false });
  batch.add(flat([...MASA_OUTLINE], [], 0.01), 'marbleFloorInterior', { castShadow: false });

  // The paved plazas around the mosque, slightly lower so they never fight with its floor; the
  // city beyond stands on the valley floor (surroundings.ts).
  const plaza = new CircleGeometry(740, 96);
  plaza.rotateX(-Math.PI / 2);
  plaza.translate(-100, -0.03, -40);
  batch.add(plaza, 'plaza', { castShadow: false });
}

// ---- the Ottoman portico ------------------------------------------------------------------------

function buildPortico(batch: StaticBatcher): void {
  // The arcade facing the courtyard, and across the portico's two open ends.
  for (const edge of porticoArcadeEdges()) {
    const outline = arcadeOutline(edge.length, edge.bays, PORTICO.height, PORTICO.pier, PORTICO.springHeight);
    batch.add(extrudeAlong(outline, edge.a, edge.dir, edge.outward, PORTICO_ARCADE_THICKNESS), 'stone');
  }
  // Rows of slender columns under the domes.
  const columnHeight = PORTICO.height - 0.7;
  for (const c of porticoColumns()) {
    const shaft = new CylinderGeometry(0.32, 0.36, columnHeight, 10, 1, true);
    scaleUVs(shaft, 2, columnHeight / 3);
    batch.add(shaft, 'marbleWhite', { matrix: translation(c.x, 0.35 + columnHeight / 2, c.z), uv: 'keep' });
    batch.add(new BoxGeometry(0.8, 0.35, 0.8), 'stoneTrim', { matrix: translation(c.x, 0.17, c.z) });
    batch.add(new BoxGeometry(0.9, 0.35, 0.9), 'stoneTrim', { matrix: translation(c.x, PORTICO.height - 0.17, c.z) });
  }
  // Roof slab over the whole C-shaped ring, and its underside as a ceiling.
  const ring = porticoRing();
  batch.add(slab(ring, [], PORTICO.height, PORTICO.roofThickness), 'stoneTrim');
  batch.add(flatCeiling(ring, [], PORTICO.height - 0.01), 'ceiling', { castShadow: false });

  // The rows of small domes that give the portico its character.
  const roofTop = PORTICO.height + PORTICO.roofThickness;
  for (const dome of porticoDomes()) {
    batch.add(new CylinderGeometry(dome.radius, dome.radius, 0.5, 12, 1, true), 'dome', {
      matrix: translation(dome.x, roofTop + 0.25, dome.z),
      uv: 'keep',
    });
    batch.add(new SphereGeometry(dome.radius, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), 'dome', {
      matrix: translation(dome.x, roofTop + 0.5, dome.z),
      uv: 'keep',
    });
  }
}

// ---- the halls -------------------------------------------------------------------------------------

function buildHallFacade(batch: StaticBatcher): void {
  const upperHeight = BUILDING_HEIGHT - HALL.ceiling;
  for (const edge of hallFacadeEdges()) {
    // Ground floor: wide arched openings into the halls.
    const spring = HALL.ceiling - archRise(edge.bayLength - HALL.facadePier) - 0.8;
    const ground = arcadeOutline(edge.length, edge.bays, HALL.ceiling, HALL.facadePier, Math.max(2.5, spring));
    batch.add(extrudeAlong(ground, edge.a, edge.dir, edge.outward, HALL_FACADE_THICKNESS), 'stone');

    // Upper storey: a row of arched recesses (the floor behind is not modelled).
    const upper = windowedOutline(edge.length + HALL.facadePier, upperHeight, edge.bays, [{ bottom: 1.8, spring: 5.4 }], 0.55);
    const start = { x: edge.a.x - edge.dir.x * (HALL.facadePier / 2), z: edge.a.z - edge.dir.z * (HALL.facadePier / 2) };
    batch.add(extrudeAlong(upper, start, edge.dir, edge.outward, HALL_FACADE_THICKNESS, HALL.ceiling), 'stone');
    // Dark panel behind the recesses.
    const back = { x: start.x + edge.outward.x * (HALL_FACADE_THICKNESS + 0.6), z: start.z + edge.outward.z * (HALL_FACADE_THICKNESS + 0.6) };
    const panel = new Shape();
    panel.moveTo(0, 0);
    panel.lineTo(edge.length + HALL.facadePier, 0);
    panel.lineTo(edge.length + HALL.facadePier, upperHeight);
    panel.lineTo(0, upperHeight);
    panel.closePath();
    batch.add(extrudeAlong(panel, back, edge.dir, edge.outward, 0.3, HALL.ceiling), 'stoneShadow', { castShadow: false });
    // Cornice.
    const cornice = new BoxGeometry(edge.length + HALL.facadePier + 1, 0.8, HALL_FACADE_THICKNESS + 0.6);
    const mid = {
      x: (edge.a.x + edge.b.x) / 2 + edge.outward.x * (HALL_FACADE_THICKNESS / 2),
      z: (edge.a.z + edge.b.z) / 2 + edge.outward.z * (HALL_FACADE_THICKNESS / 2),
    };
    batch.add(cornice, 'stoneTrim', { matrix: placeRotY(mid.x, BUILDING_HEIGHT - 0.4, mid.z, Math.atan2(-edge.dir.z, edge.dir.x)) });
    // Floodlight fittings along the roof edge, facing the courtyard (they glow at night).
    for (let k = 0; k <= edge.bays; k += 2) {
      const u = k * edge.bayLength;
      batch.add(new BoxGeometry(1, 0.55, 0.8), 'nightLamp', {
        matrix: placeRotY(
          edge.a.x + edge.dir.x * u - edge.outward.x * 0.15,
          BUILDING_HEIGHT + 0.28,
          edge.a.z + edge.dir.z * u - edge.outward.z * 0.15,
          Math.atan2(-edge.dir.z, edge.dir.x)
        ),
        castShadow: false,
      });
    }
  }
}

function buildHallInterior(batch: StaticBatcher): void {
  const outer = [...MAIN_OUTER];
  const inner = [...MAIN_INNER];
  // Ceiling over the halls, and the roof above (seen from the clock tower).
  batch.add(slab(outer, [inner], HALL.ceiling, HALL.ceilingThickness), 'ceiling');
  batch.add(slab(outer, [inner], BUILDING_HEIGHT - 0.5, 0.5), 'stoneTrim', { castShadow: false });

  // Columns: marble shafts with a simple base and capital.
  const shaftHeight = HALL.ceiling - 1.1;
  const colonnade = new Set(masaColumns());
  for (const c of [...hallColumns(), ...masaColumns()]) {
    const height = colonnade.has(c) ? MASA.ceiling - 1.1 : shaftHeight;
    const shaft = new CylinderGeometry(HALL.columnRadius, HALL.columnRadius * 1.08, height, 12, 1, true);
    scaleUVs(shaft, 3, height / 3);
    batch.add(shaft, 'marbleWhite', { matrix: translation(c.x, 0.5 + height / 2, c.z), uv: 'keep' });
    batch.add(new BoxGeometry(1.2, 0.5, 1.2), 'stoneTrim', { matrix: translation(c.x, 0.25, c.z) });
    batch.add(new BoxGeometry(1.25, 0.6, 1.25), 'stoneTrim', { matrix: translation(c.x, 0.5 + height + 0.3, c.z) });
  }

  // Light fittings between the columns.
  const s = HALL.columnSpacing;
  const columns = new Set(hallColumns().map((c) => `${c.x},${c.z}`));
  for (const c of hallColumns()) {
    if (!columns.has(`${c.x + s},${c.z + s}`)) continue;
    batch.add(new BoxGeometry(1.4, 0.08, 1.4), 'lamp', {
      matrix: translation(c.x + s / 2, HALL.ceiling - 0.05, c.z + s / 2),
      castShadow: false,
      receiveShadow: false,
    });
  }
}

// ---- outer walls, gates and the expansions -----------------------------------------------------------

function wallBox(batch: StaticBatcher, a: Vec2, b: Vec2, outward: Vec2, height: number): void {
  const dx = b.x - a.x;
  const dz = b.z - a.z;
  const length = Math.hypot(dx, dz);
  if (length < 0.1) return;
  const angle = Math.atan2(-dz, dx);
  const mx = (a.x + b.x) / 2;
  const mz = (a.z + b.z) / 2;
  batch.add(new BoxGeometry(length, height, WALL_THICKNESS), 'stone', { matrix: placeRotY(mx, height / 2, mz, angle) });
  // Horizontal bands and a cornice on the outside.
  for (const y of [HALL.ceiling, height - 0.4]) {
    batch.add(new BoxGeometry(length, 0.7, WALL_THICKNESS + 0.5), 'stoneTrim', { matrix: placeRotY(mx, y, mz, angle) });
  }
  // Rows of windows on the outside face, for scale.
  const count = Math.floor(length / 9);
  const rows: number[] = [];
  for (let y = HALL.ceiling + 4.6; y < height - 3; y += 9.8) rows.push(y);
  for (let k = 0; k < count; k++) {
    const u = -length / 2 + (k + 0.5) * (length / count);
    for (const y of rows) {
      const wx = mx + (dx / length) * u + outward.x * (WALL_THICKNESS / 2 + 0.02);
      const wz = mz + (dz / length) * u + outward.z * (WALL_THICKNESS / 2 + 0.02);
      batch.add(new BoxGeometry(2.6, 4.2, 0.1), 'window', { matrix: placeRotY(wx, y, wz, angle), castShadow: false });
    }
  }
}

function buildExteriorWalls(batch: StaticBatcher): void {
  for (const wall of exteriorWalls()) wallBox(batch, wall.a, wall.b, wall.outward, wall.height);
}

/** The King Abdullah expansion and the northern building, from outside: walls (with their
 *  gates as closed portals) and roofs. */
function buildExpansions(batch: StaticBatcher): void {
  batch.add(slab([...ABDULLAH_OUTLINE], [], EXPANSIONS.abdullahHeight - 0.5, 0.5), 'stoneTrim', { castShadow: false });
  const north = northBlock();
  const points = [...north.points];
  for (let i = 0; i < points.length; i++) {
    const a = points[i];
    const b = points[(i + 1) % points.length];
    const length = Math.hypot(b.x - a.x, b.z - a.z);
    if (length < 0.1) continue;
    // Outward: away from the building (the outline runs anticlockwise in x-z).
    wallBox(batch, a, b, { x: (b.z - a.z) / length, z: -(b.x - a.x) / length }, north.height);
  }
  batch.add(slab(points, [], north.height - 0.5, 0.5), 'stoneTrim', { castShadow: false });
}

function buildGates(batch: StaticBatcher): void {
  for (const frame of gateFrames()) {
    const { gate, center, outward, tangent } = frame;
    const major = gate.id !== null;
    const wallHeight = frame.building === 'masa' ? MASA.height : frame.building === 'abdullah' ? EXPANSIONS.abdullahHeight : BUILDING_HEIGHT;
    const frameWidth = gate.width + (major ? 6 : 2.4);
    const frameHeight = Math.min(wallHeight + (major ? 4 : 0.5), gate.height + (major ? 11 : 3));
    const depth = major ? PORTAL_DEPTH : 0.8;
    // A projecting portal frame with a pointed-arch opening, cut up from the ground.
    const spring = gate.height - archRise(gate.width);
    const shape = new Shape();
    shape.moveTo(-frameWidth / 2, 0);
    shape.lineTo(-gate.width / 2, 0);
    shape.lineTo(-gate.width / 2, spring);
    for (const p of pointedArch(-gate.width / 2, gate.width / 2, spring, 10).slice(1)) shape.lineTo(p.x, p.y);
    shape.lineTo(gate.width / 2, 0);
    shape.lineTo(frameWidth / 2, 0);
    shape.lineTo(frameWidth / 2, frameHeight);
    shape.lineTo(-frameWidth / 2, frameHeight);
    shape.closePath();
    const inner = { x: center.x - outward.x * (WALL_THICKNESS / 2), z: center.z - outward.z * (WALL_THICKNESS / 2) };
    batch.add(extrudeAlong(shape, inner, tangent, outward, WALL_THICKNESS + depth), 'stoneTrim');
    const angle = Math.atan2(-tangent.z, tangent.x);
    if (!frame.open) {
      // The expansions are shown from outside: their doorways are dark recesses.
      batch.add(new BoxGeometry(gate.width, gate.height, 0.1), 'stoneShadow', {
        matrix: placeRotY(center.x, gate.height / 2, center.z, angle),
        castShadow: false,
      });
    }
    if (!major) continue;
    // A recessed panel above the arch, and a gold lamp as a focal point.
    const panelY = gate.height + 1.2;
    const panelHeight = frameHeight - panelY - 1.5;
    if (panelHeight > 1) {
      const px = center.x + outward.x * (depth + WALL_THICKNESS / 2 + 0.02);
      const pz = center.z + outward.z * (depth + WALL_THICKNESS / 2 + 0.02);
      batch.add(new BoxGeometry(gate.width, panelHeight, 0.1), 'stoneShadow', {
        matrix: placeRotY(px, panelY + panelHeight / 2, pz, angle),
        castShadow: false,
      });
    }
    batch.add(new SphereGeometry(0.6, 12, 8), 'gold', {
      matrix: translation(center.x + outward.x * (depth + 1.4), gate.height + 0.4, center.z + outward.z * (depth + 1.4)),
      uv: 'keep',
    });
  }
}

// ---- the Mas'a, Safa and Marwah ----------------------------------------------------------------

function rockGeometry(seed: number): BufferGeometry {
  const geometry = new IcosahedronGeometry(1, 3);
  const position = geometry.getAttribute('position');
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);
    const z = position.getZ(i);
    // Cheap deterministic lumpiness, identical for vertices shared between faces.
    const n =
      Math.sin(x * 3.1 + seed) * Math.cos(z * 2.7 - seed) * 0.12 + Math.sin(y * 4.3 + x * 1.7 + seed * 2) * 0.08;
    const k = 1 + n;
    position.setXYZ(i, x * k * ROCK_RADIUS * 0.92, Math.max(-0.2, y) * k * 3.4, z * k * ROCK_RADIUS * 0.8);
  }
  geometry.computeVertexNormals();
  return geometry;
}

const LIE_FLAT = new Matrix4().makeRotationX(Math.PI / 2);

function buildHill(batch: StaticBatcher, at: Vec2, seed: number): void {
  const { x, z } = at;
  batch.add(rockGeometry(seed), 'rock', { matrix: translation(x, 0, z) });
  // Low marble kerb and a glass screen around the exposed rock.
  const kerb = new CylinderGeometry(ROCK_RADIUS + 0.3, ROCK_RADIUS + 0.3, 0.6, 40, 1, true);
  batch.add(kerb, 'marbleWhite', { matrix: translation(x, 0.3, z) });
  batch.add(new TorusGeometry(ROCK_RADIUS + 0.3, 0.12, 6, 40), 'marbleWhite', {
    matrix: translation(x, 0.6, z).multiply(LIE_FLAT),
  });
  batch.add(new CylinderGeometry(ROCK_RADIUS + 0.3, ROCK_RADIUS + 0.3, 1.1, 40, 1, true), 'glass', {
    matrix: translation(x, 0.6 + 0.55, z),
    uv: 'keep',
    castShadow: false,
    receiveShadow: false,
  });
  // A tall round space over each hill, up through the floors above to a dome on the roof.
  const r = MASA.domeRadius;
  const shaft = MASA.height - MASA.ceiling;
  batch.add(new CylinderGeometry(r, r, shaft, 40, 1, true), 'ceilingBack', {
    matrix: translation(x, MASA.ceiling + shaft / 2, z),
    uv: 'keep',
  });
  const dome = new SphereGeometry(r, 32, 12, 0, Math.PI * 2, 0, Math.PI / 2);
  scaleUVs(dome, 6, 2);
  batch.add(dome, 'dome', { matrix: translation(x, MASA.height, z), uv: 'keep' });
  // A ring of lamps around the opening.
  batch.add(new TorusGeometry(r - 0.3, 0.12, 6, 48), 'lamp', {
    matrix: translation(x, MASA.ceiling + 0.2, z).multiply(LIE_FLAT),
    castShadow: false,
    receiveShadow: false,
  });
}

function buildMasa(batch: StaticBatcher): void {
  const outline = [...MASA_OUTLINE];
  const r = MASA.domeRadius;
  const domes = [circle(SAFA_CENTER.x, SAFA_CENTER.z, r, 40), circle(MARWAH_CENTER.x, MARWAH_CENTER.z, r, 40)];
  // Ceiling and roof, each open under the two domes.
  batch.add(slab(outline, domes, MASA.ceiling, 0.6), 'ceiling');
  batch.add(slab(outline, domes, MASA.height - 0.5, 0.5), 'stoneTrim', { castShadow: false });
  // The beam over the colonnade, where the Mas'a's ceiling meets the halls' lower one.
  for (const edge of masaSharedEdges()) {
    const mid = { x: (edge.a.x + edge.b.x) / 2, z: (edge.a.z + edge.b.z) / 2 };
    batch.add(new BoxGeometry(edge.length, MASA.ceiling - HALL.ceiling + 0.6, 1.4), 'stoneTrim', {
      matrix: placeRotY(mid.x, HALL.ceiling + (MASA.ceiling - HALL.ceiling) / 2, mid.z, Math.atan2(-edge.dir.z, edge.dir.x)),
    });
  }

  // Rows of lamps across the gallery, and the green-lit section.
  const axis = masaAxis();
  const across = { x: -axis.dir.z, z: axis.dir.x };
  const startT = (r + 4) / axis.length;
  const endT = 1 - (r + 2) / axis.length;
  for (let t = startT; t < endT; t += 6 / axis.length) {
    const p = masaPoint(t);
    const left = rayDistance(p, across, outline, true);
    const right = rayDistance(p, { x: -across.x, z: -across.z }, outline, true);
    if (!Number.isFinite(left) || !Number.isFinite(right)) continue;
    const width = left + right - 6;
    if (width < 4) continue;
    const centre = { x: p.x + across.x * (left - right) / 2, z: p.z + across.z * (left - right) / 2 };
    const green = t >= MASA.greenFrom && t <= MASA.greenTo;
    batch.add(new BoxGeometry(green ? 0.7 : 0.45, 0.1, width), green ? 'greenLight' : 'lamp', {
      matrix: placeRotY(centre.x, MASA.ceiling - 0.06, centre.z, axis.angle),
      castShadow: false,
      receiveShadow: false,
    });
  }
  // Green bands on the colonnade columns in the same section.
  for (const c of masaColumns()) {
    const t = masaFraction(c.x, c.z);
    if (t < MASA.greenFrom || t > MASA.greenTo) continue;
    batch.add(new CylinderGeometry(0.56, 0.56, 0.5, 16, 1, true), 'greenLight', {
      matrix: translation(c.x, 3.2, c.z),
      castShadow: false,
      receiveShadow: false,
    });
  }

  buildHill(batch, SAFA_CENTER, 1.3);
  buildHill(batch, MARWAH_CENTER, 4.1);
}

// ---- minarets ------------------------------------------------------------------------------------

/** Height of the minaret model below, to the tip of its crescent. */
const MINARET_MODEL_HEIGHT = 104;

function buildMinaret(batch: StaticBatcher, p: Vec2, height: number): void {
  // Scaled to the minaret's mapped height: the older ones are shorter and more slender than
  // the King Abdullah expansion's.
  const scale = height / MINARET_MODEL_HEIGHT;
  const at = (y: number) => translation(p.x, 0, p.z).multiply(new Matrix4().makeScale(scale, scale, scale)).multiply(translation(0, y, 0));
  const add = (geometry: BufferGeometry, material: 'stone' | 'stoneTrim' | 'gold', y: number) => batch.add(geometry, material, { matrix: at(y) });
  const b = MINARET_BASE_HALF;
  add(new BoxGeometry(b * 2, 24, b * 2), 'stone', 12);
  add(new BoxGeometry(b * 2 + 0.8, 1, b * 2 + 0.8), 'stoneTrim', 24.5);
  add(new CylinderGeometry(2.7, 3.1, 36, 8), 'stone', 25 + 18);
  add(new CylinderGeometry(4.1, 3.4, 1.4, 16), 'stoneTrim', 61.7);
  add(new CylinderGeometry(4.1, 4.1, 1.1, 16, 1, true), 'stoneTrim', 62.9);
  add(new CylinderGeometry(2.2, 2.6, 20, 8), 'stone', 62.4 + 10);
  add(new CylinderGeometry(3.5, 2.9, 1.2, 16), 'stoneTrim', 83);
  add(new CylinderGeometry(1.7, 2, 9, 8), 'stone', 83.6 + 4.5);
  add(new ConeGeometry(2.1, 7, 8), 'stoneTrim', 92.1 + 3.5);
  add(new CylinderGeometry(0.16, 0.22, 4, 6), 'gold', 99.1 + 2);
  add(new SphereGeometry(0.45, 10, 8), 'gold', 101.6);
  const crescent = new TorusGeometry(0.75, 0.13, 6, 16, Math.PI * 1.3);
  crescent.rotateZ(Math.PI * 0.85);
  add(crescent, 'gold', 103.2);
  // Lamp rings under the balconies and below the cap: plain bands by day, lit at night.
  for (const [radius, y] of [
    [3.9, 61],
    [3.3, 82.4],
    [1.85, 92.2],
  ]) {
    batch.add(new TorusGeometry(radius, 0.13, 6, 32), 'nightLamp', { matrix: at(y).multiply(LIE_FLAT), castShadow: false });
  }
}

function buildMinarets(batch: StaticBatcher): void {
  for (const m of minarets()) buildMinaret(batch, m, m.height);
}

export function buildMosque(batch: StaticBatcher): void {
  buildFloors(batch);
  buildPortico(batch);
  buildHallFacade(batch);
  buildHallInterior(batch);
  buildExteriorWalls(batch);
  buildExpansions(batch);
  buildGates(batch);
  buildMasa(batch);
  buildMinarets(batch);
}

