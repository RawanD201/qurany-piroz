// Assembles the whole scene, step by step, reporting progress for the loading screen.
//
// Each step yields to the browser in between, so the progress bar keeps moving and the page
// never looks frozen. Textures are treated as optional: if one cannot be painted, its
// materials fall back to a plain colour and loading carries on (with a note in the log).

import {
  BoxGeometry,
  CylinderGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  Scene,
  type Camera,
  type Object3D,
  type Vector3,
  type WebGLRenderer,
} from 'three';
import { KAABA, KAABA_HALF_D, worldToKaaba } from '../data/layout';
import { PLACE_LOCATIONS, type PickShape } from '../data/place-locations';
import type { PlaceId } from '../data/places';
import type { PrayingPerson } from '../data/praying-people';
import type { QualitySettings } from '../engine/quality';
import { ClockFaces } from './clock-face';
import { createEnvironment, type Environment } from './environment';
import { createZamzamMarking, type FloorMarking } from './floor-markings';
import { StaticBatcher } from './geometry';
import { buildKaaba } from './kaaba';
import { buildKaabaDoor } from './kaaba-door';
import { buildKaabaInterior, type KaabaInterior } from './kaaba-interior';
import {
  applyEnvironmentMap,
  applyTimeOfDay,
  createMaterials,
  replaceTextureSet,
  disposeMaterials,
  setInteriorShade,
  type MaterialKey,
  type MaterialLibrary,
  type TimeOfDay,
} from './materials';
import { buildMosque } from './mosque';
import { buildPrayingPeople } from './praying-people';
import { buildTawafCrowd } from './tawaf-crowd';
import { createSunEmblem, type SunEmblem } from './sun-emblem';
import { buildBalcony, buildCity, buildClockTower, buildHills, buildLandmarks } from './surroundings';
import { TEXTURE_KEYS, createTextureSet, disposeTextureSet, type TextureKey, type TextureSet } from './textures';

export type BuildStage = 'textures' | 'environment' | 'lighting';

/**
 * The clock-tower balcony's own render layer: it is drawn in a separate pass with a close near
 * plane (see renderView in explorer.ts); everything else is on layer 0.
 */
export const BALCONY_LAYER = 1;

export interface World {
  scene: Scene;
  materials: MaterialLibrary;
  environment: Environment;
  /** Invisible shapes over important objects, for tap/click picking. */
  pickables: Group;
  /** Static meshes that can hide a pickable object behind them. */
  occluders: Mesh[];
  /** Floor meshes the visitor can double-click to walk to. */
  walkables: Mesh[];
  /** Non-fatal problems met while building (shown on the loading screen). */
  warnings: string[];
  setShadows(enabled: boolean, mapSize: number): void;
  setTimeOfDay(time: TimeOfDay): void;
  /** Moves the clock tower's hands to the current time in Makkah; true when they moved. */
  updateClock(now?: number): boolean;
  /**
   * Loads the photographs of the real kiswah and swaps them in for the generated belt and door
   * curtain. Resolves true once shown; false if they could not be loaded (the generated
   * version stays).
   */
  loadKiswahPhotos(): Promise<boolean>;
  /** The inside of the Kaaba (hidden until the visitor goes in). */
  interior: KaabaInterior;
  /** The sun in the sky, the sun from the flag of Kurdistan (shown by day). */
  sunEmblem: SunEmblem;
  /** Shows the stairs at the Kaaba's door, or not (see data/kaaba-stairs.ts). */
  setKaabaStairs(shown: boolean): void;
  /**
   * Opens the Kaaba's door (the curtain rolls up, then the leaves swing open) or closes it; at once
   * if `instantly`.
   */
  setKaabaDoor(open: boolean, instantly?: boolean): void;
  /** Moves the Kaaba's door on as it opens or closes; true when it moved (a frame to draw). */
  updateKaabaDoor(dt: number): boolean;
  /** Whether the visitor is inside the Kaaba: the room is drawn then, or while the door is not shut. */
  setInsideKaaba(inside: boolean): void;
  /** Shows or hides the people praying in the courtyard. */
  setPeopleShown(shown: boolean): void;
  /**
   * Fits what is drawn to where the visitor's eye is (before each frame): the people praying near
   * them in detail and the rest simply; the room inside the Kaaba, through its open door, only from
   * in front of it and near enough to see in.
   */
  updateForView(eye: Vector3): void;
  /** Shows or hides the people going round the Kaaba. */
  setTawafShown(shown: boolean): void;
  /** Moves the tawaf on to `seconds`; true when it is shown and in view (a frame to draw). */
  animateTawaf(camera: Camera, seconds: number): boolean;
  dispose(): void;
}

const nextFrame = () =>
  new Promise<void>((resolve) => {
    // requestAnimationFrame does not run in background tabs; a timeout keeps loading going.
    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        resolve();
      }
    };
    requestAnimationFrame(finish);
    setTimeout(finish, 50);
  });

/** Materials that should never count as hiding something (transparent or tiny). */
const NON_OCCLUDING: ReadonlySet<MaterialKey> = new Set<MaterialKey>(['glass', 'lamp', 'greenLight', 'window', 'plaza', 'marbleFloor', 'marbleFloorInterior']);

/** Floor surfaces (double-click targets for walking). */
const WALKABLE: ReadonlySet<MaterialKey> = new Set<MaterialKey>(['marbleFloor', 'marbleFloorInterior', 'plaza']);

function pickProxy(shape: PickShape, material: MeshBasicMaterial): Mesh {
  const mesh =
    shape.kind === 'box'
      ? new Mesh(new BoxGeometry(Math.max(shape.size.x, 0.01), shape.size.y, Math.max(shape.size.z, 0.01)), material)
      : new Mesh(new CylinderGeometry(shape.radius, shape.radius, shape.height, 16), material);
  mesh.position.set(shape.center.x, shape.center.y, shape.center.z);
  if (shape.kind === 'box') mesh.rotation.y = shape.rotationY;
  mesh.updateMatrixWorld(true);
  return mesh;
}

export async function buildWorld(
  renderer: WebGLRenderer,
  quality: QualitySettings,
  time: TimeOfDay,
  people: readonly PrayingPerson[],
  onProgress: (stage: BuildStage, fraction: number) => void
): Promise<World> {
  const warnings: string[] = [];

  // 1. Textures, one per frame.
  const textures: Partial<Record<TextureKey, TextureSet>> = {};
  for (let i = 0; i < TEXTURE_KEYS.length; i++) {
    const key = TEXTURE_KEYS[i];
    try {
      if (import.meta.env.DEV && key === 'kiswah' && window.location.search.includes('simulate=texture')) {
        throw new Error('simulated texture failure');
      }
      textures[key] = createTextureSet(key, {
        size: quality.textureSize,
        anisotropy: quality.anisotropy,
        detailMaps: quality.detailMaps,
      });
    } catch (error) {
      console.warn(`Texture "${key}" unavailable`, error);
      warnings.push(key);
    }
    onProgress('textures', (i + 1) / TEXTURE_KEYS.length);
    await nextFrame();
  }

  let clock: ClockFaces | null = null;
  try {
    clock = new ClockFaces(quality.textureSize, quality.anisotropy, time);
  } catch (error) {
    console.warn('Clock faces unavailable', error);
    warnings.push('clock');
  }

  const materials = createMaterials({
    textures,
    environmentMap: quality.environmentMap,
    richMaterials: quality.richMaterials,
    clock,
  });
  setInteriorShade(materials, quality.shadows);
  applyTimeOfDay(materials, time);

  // 2. Geometry.
  const scene = new Scene();
  const batch = new StaticBatcher();
  const steps: (() => void)[] = [
    () => buildKaaba(batch),
    () => buildMosque(batch),
    () => buildClockTower(batch),
    () => buildLandmarks(batch),
  ];
  for (let i = 0; i < steps.length; i++) {
    steps[i]();
    onProgress('environment', (i + 1) / (steps.length + 2));
    await nextFrame();
  }

  const occluders: Mesh[] = [];
  const walkables: Mesh[] = [];
  for (const mesh of batch.build(materials)) {
    scene.add(mesh);
    const key = mesh.userData.materialKey as MaterialKey;
    if (WALKABLE.has(key)) walkables.push(mesh);
    else if (!NON_OCCLUDING.has(key)) occluders.push(mesh);
  }
  let zamzamMarking: FloorMarking | null = null;
  try {
    zamzamMarking = createZamzamMarking(quality.anisotropy);
    scene.add(zamzamMarking.mesh);
  } catch (error) {
    console.warn('Zamzam floor marking unavailable', error);
  }
  const balconyBatch = new StaticBatcher();
  buildBalcony(balconyBatch);
  for (const mesh of balconyBatch.build(materials)) {
    mesh.layers.set(BALCONY_LAYER);
    scene.add(mesh);
  }
  const city = buildCity(materials, quality.cityDetail);
  city.updateMatrix();
  scene.add(city);
  const hills = new Mesh(buildHills(), materials.mountain);
  hills.matrixAutoUpdate = false;
  scene.add(hills);
  const interior = buildKaabaInterior(quality.anisotropy);
  scene.add(interior.group);
  const door = buildKaabaDoor(materials, interior);
  scene.add(door.group);
  let insideKaaba = false;
  let seesIn = true;
  const showInterior = () => {
    interior.group.visible = insideKaaba || (!door.shut && seesIn);
  };
  const crowd = buildPrayingPeople(people);
  scene.add(crowd.group);
  // Fewer people going round the Kaaba on slower devices (they are only to look at).
  const tawaf = buildTawafCrowd(quality.tier === 'high' ? 1 : quality.tier === 'medium' ? 0.75 : 0.45);
  scene.add(tawaf.group);
  onProgress('environment', 1);
  await nextFrame();

  // 3. Sky, light, reflections.
  const environment = createEnvironment(renderer, scene, quality, time, (texture) => applyEnvironmentMap(materials, texture));
  // Lights must be on the balcony's layer too, or its pass would be unlit.
  environment.sun.layers.enableAll();
  environment.hemisphere.layers.enableAll();
  const sunEmblem = createSunEmblem();
  sunEmblem.mesh.visible = time === 'day';
  scene.add(sunEmblem.mesh);
  onProgress('lighting', 1);

  // 4. Invisible pick shapes (not added to the scene: never drawn, only ray-tested).
  const pickables = new Group();
  const pickMaterial = new MeshBasicMaterial({ visible: false });
  for (const [id, location] of Object.entries(PLACE_LOCATIONS) as [PlaceId, (typeof PLACE_LOCATIONS)[PlaceId]][]) {
    if (!location.pick) continue;
    const proxy = pickProxy(location.pick, pickMaterial);
    proxy.userData.placeId = id;
    pickables.add(proxy);
  }
  pickables.updateMatrixWorld(true);

  scene.matrixWorldAutoUpdate = true;
  scene.updateMatrixWorld(true);

  return {
    scene,
    materials,
    environment,
    pickables,
    occluders,
    walkables,
    warnings,
    setShadows(enabled: boolean, mapSize: number) {
      environment.setShadows(enabled, mapSize);
      setInteriorShade(materials, enabled);
    },
    setTimeOfDay(next: TimeOfDay) {
      applyTimeOfDay(materials, next);
      environment.setTimeOfDay(next);
      clock?.setTimeOfDay(next);
      sunEmblem.mesh.visible = next === 'day';
    },
    updateClock(now?: number) {
      return clock?.update(now) ?? false;
    },
    interior,
    sunEmblem,
    setKaabaStairs(shown: boolean) {
      door.setStairs(shown);
      // The shadow map is drawn once and kept (environment.ts): redraw it with or without the stairs.
      renderer.shadowMap.needsUpdate = true;
    },
    setKaabaDoor(open: boolean, instantly = false) {
      door.setOpen(open, instantly);
      showInterior();
      renderer.shadowMap.needsUpdate = true;
    },
    updateKaabaDoor(dt: number) {
      if (!door.update(dt)) return false;
      showInterior();
      // The curtain casts a shadow too: redraw the shadow map once it has come to rest.
      if (!door.moving) renderer.shadowMap.needsUpdate = true;
      return true;
    },
    setInsideKaaba(inside: boolean) {
      insideKaaba = inside;
      showInterior();
    },
    setPeopleShown(shown: boolean) {
      if (crowd.group.visible === shown) return;
      crowd.group.visible = shown;
      renderer.shadowMap.needsUpdate = true;
    },
    updateForView(eye: Vector3) {
      crowd.update(eye);
      const p = worldToKaaba(eye.x, eye.z);
      const sees = p.z > KAABA_HALF_D - 1 && Math.hypot(p.x - KAABA.door.centerX, p.z - KAABA_HALF_D) < 40;
      if (sees !== seesIn) {
        seesIn = sees;
        showInterior();
      }
    },
    setTawafShown(shown: boolean) {
      tawaf.group.visible = shown;
    },
    animateTawaf(camera: Camera, seconds: number) {
      return tawaf.animate(camera, seconds);
    },
    async loadKiswahPhotos() {
      try {
        const { loadKiswahPhotos } = await import('./kiswah-photos');
        const photos = await loadKiswahPhotos({ anisotropy: quality.anisotropy, detailMaps: quality.detailMaps });
        const swap = (key: 'hizam' | 'sitara' | 'kiswah', set: TextureSet) => {
          const silk = key === 'kiswah';
          replaceTextureSet(materials, key, set, { environmentMap: quality.environmentMap, metallic: !silk, roughness: silk ? 0.72 : undefined });
          const old = textures[key];
          if (old) disposeTextureSet(old);
          textures[key] = set;
        };
        swap('hizam', photos.belt);
        swap('sitara', photos.sitara);
        swap('kiswah', photos.weave);
        // The night view lights the kiswah with its own pattern: point it at the new one.
        applyTimeOfDay(materials, environment.time);
        return true;
      } catch (error) {
        console.warn('Kiswah photographs unavailable; keeping the generated kiswah', error);
        return false;
      }
    },
    dispose() {
      scene.traverse((object: Object3D) => {
        if (object instanceof Mesh) object.geometry.dispose();
      });
      pickables.traverse((object: Object3D) => {
        if (object instanceof Mesh) object.geometry.dispose();
      });
      pickMaterial.dispose();
      for (const set of Object.values(textures)) if (set) disposeTextureSet(set);
      clock?.dispose();
      zamzamMarking?.dispose();
      interior.dispose();
      door.dispose();
      crowd.dispose();
      tawaf.dispose();
      sunEmblem.dispose();
      disposeMaterials(materials);
      environment.dispose();
    },
  };
}
