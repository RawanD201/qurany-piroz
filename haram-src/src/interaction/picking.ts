// Tapping or clicking an object in the 3D view: a ray from the camera through the pointer is
// tested against invisible shapes laid over each important object. A hit only counts if no
// wall or building stands in front of it.

import { Raycaster, Vector2, type Camera, type Group, type Mesh } from 'three';
import type { Vec2 } from '../data/layout';
import type { PlaceId } from '../data/places';

const MAX_PICK_DISTANCE = 700;
/** Double-clicking further away than this does nothing (the route would be very long). */
const MAX_WALK_DISTANCE = 220;

export class Picker {
  private readonly raycaster = new Raycaster();
  private readonly ndc = new Vector2();

  private readonly surfaces: Mesh[];

  constructor(
    private readonly camera: Camera,
    private readonly pickables: Group,
    private readonly occluders: Mesh[],
    private readonly walkables: Mesh[] = []
  ) {
    this.surfaces = [...occluders, ...walkables];
  }

  /** Adds surfaces built later (the Kaaba's interior): floors to walk on, or solid. */
  addSurfaces(meshes: readonly Mesh[], walkable: boolean): void {
    this.surfaces.push(...meshes);
    (walkable ? this.walkables : this.occluders).push(...meshes);
  }

  /**
   * The point on the floor under the pointer, or null if the pointer is over a wall, an
   * object, the sky, or floor that is too far away.
   */
  pickGround(clientX: number, clientY: number, canvas: HTMLElement): Vec2 | null {
    if (!this.setRay(clientX, clientY, canvas)) return null;
    this.raycaster.near = 0;
    this.raycaster.far = MAX_WALK_DISTANCE;
    const hit = this.raycaster.intersectObjects(this.surfaces, false)[0];
    if (!hit || !this.walkables.includes(hit.object as Mesh)) return null;
    // Floors only: never the side of a step or kerb.
    if (!hit.face || hit.face.normal.y < 0.7) return null;
    return { x: hit.point.x, z: hit.point.z };
  }

  private setRay(clientX: number, clientY: number, canvas: HTMLElement): boolean {
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return false;
    this.ndc.set(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    this.raycaster.setFromCamera(this.ndc, this.camera);
    return true;
  }

  /** The place under a point on the canvas, or null. */
  pick(clientX: number, clientY: number, canvas: HTMLElement): PlaceId | null {
    if (!this.setRay(clientX, clientY, canvas)) return null;
    this.raycaster.near = 0;
    this.raycaster.far = MAX_PICK_DISTANCE;
    const hits = this.raycaster.intersectObjects(this.pickables.children, false);
    if (hits.length === 0) return null;
    const hit = hits[0];
    // Is anything solid in front of it?
    const clearance = hit.distance - 0.35;
    if (clearance > 0) {
      this.raycaster.far = clearance;
      if (this.raycaster.intersectObjects(this.occluders, false).length > 0) return null;
    }
    return (hit.object.userData.placeId as PlaceId | undefined) ?? null;
  }
}
