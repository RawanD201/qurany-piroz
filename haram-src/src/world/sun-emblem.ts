// The sun in the sky, drawn as the golden sun from the flag of Kurdistan (data/sun-emblem.ts).
//
// It stands where the sky shader puts the sun's glow (SUN_DIRECTION) and keeps its place in the
// sky however the visitor moves: each time it is drawn it is moved out along that direction from
// the camera, far beyond everything else, and turned to face the camera. A flat shape rather than
// part of the sky shader, so the depth buffer hides it behind buildings and it can be tapped (see
// Picker.pickSun), which opens "Made in Kurdistan" (ui/about-panel.ts). Shown by day only.

import { Mesh, MeshBasicMaterial, Shape, ShapeGeometry, Vector2, type Vector3 } from 'three';
import { CAMERA } from '../config';
import { SUN_EMBLEM_COLOR, sunEmblemOutline } from '../data/sun-emblem';
import { SUN_DIRECTION } from './environment';

/** How far away it is drawn: inside the camera's far plane, beyond the city and the mountains. */
const DISTANCE = CAMERA.far * 0.875;
/** Half its width as seen, to the rays' tips: about as large as the sky's own sun disc. */
const ANGULAR_RADIUS = (3 * Math.PI) / 180;

export interface SunEmblem {
  mesh: Mesh;
  /** Which way it is (from anywhere), how far, and how large it looks (radians), for picking. */
  direction: Vector3;
  distance: number;
  angularRadius: number;
  dispose(): void;
}

export function createSunEmblem(): SunEmblem {
  const radius = DISTANCE * Math.tan(ANGULAR_RADIUS);
  const shape = new Shape(sunEmblemOutline().map((p) => new Vector2(p.x * radius, p.y * radius)));
  const material = new MeshBasicMaterial({ color: SUN_EMBLEM_COLOR, fog: false, toneMapped: false });
  const mesh = new Mesh(new ShapeGeometry(shape), material);
  mesh.name = 'sun-emblem';
  // Placed only as it is drawn (below), so the camera's frustum test would use a stale position.
  mesh.frustumCulled = false;
  mesh.onBeforeRender = (_renderer, _scene, camera) => {
    mesh.position.copy(camera.position).addScaledVector(SUN_DIRECTION, DISTANCE);
    mesh.quaternion.copy(camera.quaternion);
    mesh.updateMatrixWorld();
  };
  return {
    mesh,
    direction: SUN_DIRECTION,
    distance: DISTANCE,
    angularRadius: ANGULAR_RADIUS,
    dispose() {
      mesh.geometry.dispose();
      material.dispose();
    },
  };
}
