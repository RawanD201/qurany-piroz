// Where each place is in the 3D world: the marker's anchor point, where "Go there" puts the
// visitor, and the invisible shape that makes the object itself clickable/tappable.
//
// Kept apart from places.ts so translators never have to touch coordinates, and so the tests
// can check every viewpoint against the collision world (tests/places.test.ts).

import {
  CLOCK_TOWER,
  HIJR,
  KAABA,
  KAABA_HALF_D,
  KAABA_HALF_W,
  MASA,
  MAQAM_LOCAL,
  PORTICO,
  SPAWN,
  ZAMZAM_POSITION,
  kaabaToWorld,
  kaabaToWorld3,
  maqamPosition,
  masaAxis,
  masaPoint,
  type GateId,
  type Vec2,
  type Vec3,
} from './layout';
import { KAABA_INTERIOR_ANCHORS, KAABA_INTERIOR_VIEWS } from './kaaba-interior';
import type { Level } from './levels';
import { MARWAH_CENTER, SAFA_CENTER } from './plan-data';
import type { PlaceId } from './places';
import { gateFrames, porticoArcadeEdges } from './structure';

export type PickShape =
  | { kind: 'box'; center: Vec3; size: Vec3; rotationY: number }
  | { kind: 'cylinder'; center: Vec3; radius: number; height: number };

export interface PlaceLocation {
  /** Where the marker floats. */
  anchor: Vec3;
  /** Marker is shown only within this distance (metres) of the visitor. */
  markerRange: number;
  /** Where "Go there" places the visitor's feet, and what they then look at. */
  viewpoint: Vec2;
  lookAt: Vec3;
  /** Optional invisible shape over the real object, so tapping the object opens its panel. */
  pick?: PickShape;
  /** Skip the line-of-sight check (for very tall landmarks seen over the buildings). */
  alwaysVisible?: boolean;
  /**
   * Walls within this many metres of the anchor do not hide the marker (default 1.5). Needed
   * when the anchor sits inside the object it labels, like the Kaaba's own marker.
   */
  sightClearance?: number;
  /** When markers would overlap, higher priority wins (default 0). */
  priority?: number;
  /** Offers the view from the clock tower's balcony (see BALCONY in layout.ts). */
  balcony?: boolean;
  /** Offers to go inside the Kaaba. */
  inside?: boolean;
  /** The level the place is on (default: the Haram's ground). */
  level?: Level;
}

const B = 0.7071067811865476;
const KAABA_CENTER: Vec3 = { x: 0, y: 6, z: 0 };

function kaabaBox(): PickShape {
  return {
    kind: 'box',
    center: { x: 0, y: KAABA.height / 2, z: 0 },
    size: { x: KAABA.width + 0.2, y: KAABA.height + 0.2, z: KAABA.depth + 0.2 },
    rotationY: KAABA.rotationY,
  };
}

function maqamAnchor(): Vec3 {
  const p = maqamPosition();
  return { x: p.x, y: 3.9, z: p.z };
}

function gateLocation(id: GateId): PlaceLocation {
  const frame = gateFrames().find((f) => f.gate.id === id);
  if (!frame) throw new Error(`Gate ${id} is not on the plan`);
  const { center, outward, tangent, gate } = frame;
  // In the opening (or, for a closed portal, just in front of it), seen from the plaza outside.
  const out = frame.open ? -1.5 : 3.5;
  const anchor = { x: center.x + outward.x * out, y: gate.height * 0.62, z: center.z + outward.z * out };
  return {
    anchor,
    priority: 1,
    markerRange: 120,
    viewpoint: { x: center.x + outward.x * 32, z: center.z + outward.z * 32 },
    lookAt: anchor,
    pick: {
      kind: 'box',
      center: { x: center.x, y: gate.height / 2, z: center.z },
      size: { x: gate.width + 4, y: gate.height + 2, z: 4 },
      rotationY: Math.atan2(-tangent.z, tangent.x),
    },
  };
}

/** The portico's longest stretch facing the courtyard on its western side. */
function porticoWest(): { mid: Vec2; outward: Vec2 } {
  const edge = porticoArcadeEdges().reduce((best, e) => ((e.a.x + e.b.x) / 2 - e.length < (best.a.x + best.b.x) / 2 - best.length ? e : best));
  return { mid: { x: (edge.a.x + edge.b.x) / 2, z: (edge.a.z + edge.b.z) / 2 }, outward: edge.outward };
}

function build(): Record<PlaceId, PlaceLocation> {
  const doorAnchor = kaabaToWorld3(KAABA.door.centerX, KAABA.door.bottom + KAABA.door.height / 2, KAABA_HALF_D + 0.25);
  const blackStoneAnchor = kaabaToWorld3(-KAABA_HALF_W - 0.25, KAABA.blackStoneHeight, KAABA_HALF_D + 0.25);
  const yemeniAnchor = kaabaToWorld3(-KAABA_HALF_W - 0.25, 2.0, -KAABA_HALF_D - 0.25);
  const kiswahAnchor = kaabaToWorld3(-KAABA_HALF_W - 0.2, KAABA.hizam.bottom + 0.5, -1.6);
  const hijrAnchor = kaabaToWorld3(KAABA_HALF_W + HIJR.reach, HIJR.height + 0.8, 0);
  const mizabAnchor = kaabaToWorld3(KAABA_HALF_W + 1.3, KAABA.height - 0.2, 0);
  const maqam = maqamAnchor();
  const axis = masaAxis();
  const masaMid = masaPoint(0.5);
  const greenMid = masaPoint((MASA.greenFrom + MASA.greenTo) / 2);
  const portico = porticoWest();

  return {
    kaaba: {
      anchor: { x: 0, y: KAABA.height + 2.2, z: 0 },
      markerRange: 400,
      priority: 3,
      // The anchor floats over the roof's centre; the Kaaba's own walls must not hide it.
      sightClearance: Math.hypot(KAABA_HALF_W, KAABA_HALF_D) + KAABA.base.overhang + 0.5,
      viewpoint: { x: SPAWN.x, z: SPAWN.z },
      lookAt: KAABA_CENTER,
      pick: kaabaBox(),
      inside: true,
    },
    kiswah: {
      anchor: kiswahAnchor,
      markerRange: 40,
      viewpoint: kaabaToWorld(-KAABA_HALF_W - 9.5, -2),
      lookAt: kiswahAnchor,
    },
    kaabaDoor: {
      anchor: doorAnchor,
      markerRange: 35,
      viewpoint: kaabaToWorld(KAABA.door.centerX, KAABA_HALF_D + 7),
      lookAt: doorAnchor,
      pick: {
        kind: 'box',
        center: doorAnchor,
        // In the Kaaba's local frame: door width along the wall, sticking 0.65 m out of it so
        // a tap on the door is caught before the Kaaba's own box.
        size: { x: KAABA.door.width + 0.6, y: KAABA.door.height + 0.6, z: 0.8 },
        rotationY: KAABA.rotationY,
      },
      inside: true,
    },
    blackStone: {
      anchor: blackStoneAnchor,
      markerRange: 30,
      viewpoint: kaabaToWorld(-KAABA_HALF_W - 5 * B, KAABA_HALF_D + 5 * B),
      lookAt: blackStoneAnchor,
      pick: { kind: 'cylinder', center: { ...blackStoneAnchor, y: KAABA.blackStoneHeight }, radius: 0.85, height: 1.4 },
    },
    yemeniCorner: {
      anchor: yemeniAnchor,
      markerRange: 30,
      viewpoint: kaabaToWorld(-KAABA_HALF_W - 5 * B, -KAABA_HALF_D - 5 * B),
      lookAt: yemeniAnchor,
      pick: { kind: 'cylinder', center: { ...yemeniAnchor, y: 2.2 }, radius: 0.8, height: 4 },
    },
    hijrIsmail: {
      anchor: hijrAnchor,
      markerRange: 45,
      viewpoint: kaabaToWorld(KAABA_HALF_W + HIJR.reach + 6, 0),
      lookAt: { x: hijrAnchor.x, y: 1, z: hijrAnchor.z },
      pick: (() => {
        const c = kaabaToWorld(KAABA_HALF_W + (HIJR.reach + HIJR.thickness) / 2, 0);
        return {
          kind: 'box',
          center: { x: c.x, y: HIJR.height / 2 + 0.1, z: c.z },
          size: { x: HIJR.reach + HIJR.thickness, y: HIJR.height + 0.4, z: 2 * HIJR.halfSpan + HIJR.thickness },
          rotationY: KAABA.rotationY,
        } satisfies PickShape;
      })(),
    },
    mizab: {
      anchor: mizabAnchor,
      markerRange: 45,
      viewpoint: kaabaToWorld(KAABA_HALF_W + HIJR.reach + 9, 2.5),
      lookAt: mizabAnchor,
      pick: (() => {
        const c = kaabaToWorld(KAABA_HALF_W + 0.8, 0);
        return {
          kind: 'box',
          center: { x: c.x, y: KAABA.height - 0.3, z: c.z },
          size: { x: 2.6, y: 1.4, z: 1.4 },
          rotationY: KAABA.rotationY,
        } satisfies PickShape;
      })(),
    },
    maqamIbrahim: {
      priority: 1,
      anchor: maqam,
      markerRange: 50,
      viewpoint: kaabaToWorld(MAQAM_LOCAL.x + 3, MAQAM_LOCAL.z + 5),
      lookAt: { x: maqam.x, y: 1.6, z: maqam.z },
      pick: { kind: 'cylinder', center: { x: maqam.x, y: 1.6, z: maqam.z }, radius: 1.5, height: 3.4 },
    },
    mataf: {
      priority: 1,
      anchor: { x: -26, y: 2.4, z: 18 },
      markerRange: 90,
      viewpoint: { x: -32, z: 30 },
      lookAt: KAABA_CENTER,
    },
    zamzam: {
      anchor: { x: ZAMZAM_POSITION.x, y: 1.4, z: ZAMZAM_POSITION.z },
      markerRange: 45,
      viewpoint: { x: 28.5, z: -1.5 },
      lookAt: { x: ZAMZAM_POSITION.x, y: 0, z: ZAMZAM_POSITION.z },
      // The circle drawn on the floor (see floor-markings.ts).
      pick: { kind: 'cylinder', center: { x: ZAMZAM_POSITION.x, y: 0.1, z: ZAMZAM_POSITION.z }, radius: 1.15, height: 0.2 },
    },
    ottomanPortico: {
      anchor: { x: portico.mid.x + portico.outward.x * 0.6, y: PORTICO.height - 1.2, z: portico.mid.z + portico.outward.z * 0.6 },
      markerRange: 110,
      viewpoint: { x: portico.mid.x - portico.outward.x * 20, z: portico.mid.z - portico.outward.z * 20 },
      lookAt: { x: portico.mid.x, y: PORTICO.height - 2, z: portico.mid.z },
    },
    masa: {
      priority: 1,
      anchor: { x: masaMid.x, y: 4.5, z: masaMid.z },
      // Long gallery: the marker should show from anywhere inside it.
      markerRange: 220,
      viewpoint: masaPoint(0.22),
      lookAt: { x: masaMid.x, y: 3, z: masaMid.z },
    },
    safa: {
      priority: 1,
      anchor: { x: SAFA_CENTER.x, y: 5.4, z: SAFA_CENTER.z },
      markerRange: 80,
      viewpoint: masaPoint(24 / axis.length),
      lookAt: { x: SAFA_CENTER.x, y: 2.5, z: SAFA_CENTER.z },
      pick: { kind: 'cylinder', center: { x: SAFA_CENTER.x, y: 2.2, z: SAFA_CENTER.z }, radius: 7.5, height: 4.6 },
    },
    marwah: {
      priority: 1,
      anchor: { x: MARWAH_CENTER.x, y: 5.4, z: MARWAH_CENTER.z },
      markerRange: 80,
      viewpoint: masaPoint(1 - 24 / axis.length),
      lookAt: { x: MARWAH_CENTER.x, y: 2.5, z: MARWAH_CENTER.z },
      pick: { kind: 'cylinder', center: { x: MARWAH_CENTER.x, y: 2.2, z: MARWAH_CENTER.z }, radius: 7.5, height: 4.6 },
    },
    greenMarkers: {
      anchor: { x: greenMid.x, y: MASA.ceiling - 3, z: greenMid.z },
      markerRange: 60,
      viewpoint: masaPoint(MASA.greenFrom - 22 / axis.length, -4),
      lookAt: { x: greenMid.x, y: MASA.ceiling - 4, z: greenMid.z },
    },
    kingFahdGate: gateLocation('kingFahdGate'),
    kingAbdulazizGate: gateLocation('kingAbdulazizGate'),
    babAlSalam: gateLocation('babAlSalam'),
    babAlUmrah: gateLocation('babAlUmrah'),
    kingAbdullahGate: gateLocation('kingAbdullahGate'),
    clockTower: {
      anchor: { x: CLOCK_TOWER.x, y: CLOCK_TOWER.clockCenterY, z: CLOCK_TOWER.z - CLOCK_TOWER.shaftHalf - 2 },
      markerRange: 2500,
      viewpoint: { x: -18, z: 40 },
      lookAt: { x: CLOCK_TOWER.x, y: CLOCK_TOWER.clockCenterY, z: CLOCK_TOWER.z },
      alwaysVisible: true,
      balcony: true,
      pick: {
        kind: 'box',
        center: { x: CLOCK_TOWER.x, y: CLOCK_TOWER.height / 2, z: CLOCK_TOWER.z },
        size: { x: CLOCK_TOWER.shaftHalf * 2 + 4, y: CLOCK_TOWER.height, z: CLOCK_TOWER.shaftHalf * 2 + 4 },
        rotationY: 0,
      },
    },

    // ---- inside the Kaaba (level 'kaaba') -------------------------------------------------------
    kaabaInterior: {
      anchor: KAABA_INTERIOR_ANCHORS.room,
      markerRange: 25,
      priority: 2,
      viewpoint: KAABA_INTERIOR_VIEWS.room.position,
      lookAt: KAABA_INTERIOR_VIEWS.room.lookAt,
      level: 'kaaba',
    },
    kaabaPillars: {
      anchor: KAABA_INTERIOR_ANCHORS.pillars,
      markerRange: 25,
      priority: 1,
      viewpoint: KAABA_INTERIOR_VIEWS.pillars.position,
      lookAt: KAABA_INTERIOR_VIEWS.pillars.lookAt,
      level: 'kaaba',
    },
    babAlTawbah: {
      anchor: KAABA_INTERIOR_ANCHORS.tawbah,
      markerRange: 25,
      priority: 1,
      viewpoint: KAABA_INTERIOR_VIEWS.tawbah.position,
      lookAt: KAABA_INTERIOR_VIEWS.tawbah.lookAt,
      level: 'kaaba',
    },

  };
}

export const PLACE_LOCATIONS: Readonly<Record<PlaceId, PlaceLocation>> = build();
