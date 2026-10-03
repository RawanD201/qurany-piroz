// The people going round the Kaaba (their lanes: data/tawaf-crowd.ts), walking, with the figures of
// figures.ts. The graphics card moves everyone from the time alone: each person goes round their
// lane at their pace, facing the way they go, their legs and arms swinging with their stride, so
// the crowd moves with almost no work per frame here. Each dress is drawn in two versions, detailed
// for the people within NEAR metres of the visitor and simple for the rest; twice a second (or when
// the visitor moves) everyone is sorted again by where they have walked to. They cast no shadows
// (the shadow map is drawn once and kept, environment.ts); they receive them.
//
// The explorer draws frames only when something changes, so while the crowd is shown and in view
// it asks for a frame every frame (animate).

import { Color, Frustum, Group, InstancedBufferAttribute, InstancedMesh, Matrix4, Sphere, Vector3, type Camera } from 'three';
import { TAWAF_LANES, tawafCrowd, type TawafWalker, type WalkerDress } from '../data/tawaf-crowd';
import { KNEE, buildFigure, clothColor, contactShadow, figureMaterial, skinColor, walkingFigure } from './figures';

/** How far a stride carries the walker (one swing forward and back of a leg), metres. */
const STRIDE = 1.25;
/** How far the arms and legs swing either way, radians. */
const SWING = 0.26;
/** Within this distance walkers are drawn in detail; how often (seconds) they are sorted again. */
const NEAR = 24;
const RESORT = 0.5;

interface Batch {
  members: TawafWalker[];
  near: InstancedMesh;
  far: InstancedMesh;
}

export interface TawafCrowd {
  group: Group;
  /** Moves the crowd on to `seconds`; true when it is shown and in the camera's view (a frame to draw). */
  animate(camera: Camera, seconds: number): boolean;
  dispose(): void;
}

export function buildTawafCrowd(share: number): TawafCrowd {
  const group = new Group();
  group.name = 'tawaf-crowd';
  const time = { value: 0 };
  const material = figureMaterial('tawaf-crowd', (shader) => {
    shader.uniforms.tawafTime = time;
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform float tawafTime;
        attribute vec4 orbit;
        attribute float stature;
        attribute float swing;
        attribute vec2 pivot;
        attribute float bend;`
      )
      .replace(
        '#include <beginnormal_vertex>',
        `float orbitAngle = orbit.y + orbit.z * tawafTime;
        float orbitCos = cos(orbitAngle);
        float orbitSin = sin(orbitAngle);
        float strideAngle = 6.28318 * orbit.x * orbit.z / ${STRIDE.toFixed(2)} * tawafTime + orbit.w;
        float stride = sin(strideAngle);
        float limb = swing * ${SWING.toFixed(2)} * stride;
        float limbCos = cos(limb);
        float limbSin = sin(limb);
        // The knee bends as its leg swings forward.
        float knee = -bend * 0.45 * max(0.0, swing * cos(strideAngle));
        float kneeCos = cos(knee);
        float kneeSin = sin(knee);
        #include <beginnormal_vertex>
        objectNormal.yz = vec2(objectNormal.y * kneeCos - objectNormal.z * kneeSin, objectNormal.y * kneeSin + objectNormal.z * kneeCos);
        objectNormal.yz = vec2(objectNormal.y * limbCos - objectNormal.z * limbSin, objectNormal.y * limbSin + objectNormal.z * limbCos);
        objectNormal = vec3(objectNormal.x * orbitCos + objectNormal.z * orbitSin, objectNormal.y, -objectNormal.x * orbitSin + objectNormal.z * orbitCos);`
      )
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        vec2 fromKnee = transformed.yz - vec2(${KNEE[0].toFixed(2)}, ${KNEE[1].toFixed(2)});
        transformed.yz = vec2(${KNEE[0].toFixed(2)}, ${KNEE[1].toFixed(2)}) + vec2(fromKnee.x * kneeCos - fromKnee.y * kneeSin, fromKnee.x * kneeSin + fromKnee.y * kneeCos);
        vec2 fromPivot = transformed.yz - pivot;
        transformed.yz = pivot + vec2(fromPivot.x * limbCos - fromPivot.y * limbSin, fromPivot.x * limbSin + fromPivot.y * limbCos);
        // The robe below the hips sways with the step: forward on the side of the leading leg.
        float skirt = max(0.0, 0.9 - transformed.y) / 0.9 * (1.0 - abs(swing));
        transformed.z -= 0.06 * stride * clamp(transformed.x / 0.18, -1.0, 1.0) * skirt;
        transformed *= stature;
        transformed.y += 0.012 * abs(stride);
        transformed = vec3(transformed.x * orbitCos + transformed.z * orbitSin, transformed.y, -transformed.x * orbitSin + transformed.z * orbitCos);
        transformed.x += orbitCos * orbit.x;
        transformed.z -= orbitSin * orbit.x;`
      );
  });

  const walkers = tawafCrowd(share);
  // Everyone stays within the Mataf: bounds for the view test (the shapes' own are not where they walk).
  const bounds = new Sphere(new Vector3(0, 1, 0), TAWAF_LANES.outer + 1.5);
  const color = new Color();
  const batchMesh = (dress: WalkerDress, detail: 'walk' | 'far', capacity: number) => {
    const geometry = buildFigure(walkingFigure(dress), detail);
    geometry.setAttribute('orbit', new InstancedBufferAttribute(new Float32Array(capacity * 4), 4));
    geometry.setAttribute('stature', new InstancedBufferAttribute(new Float32Array(capacity), 1));
    geometry.setAttribute('skinTone', new InstancedBufferAttribute(new Float32Array(capacity * 3), 3));
    const mesh = new InstancedMesh(geometry, material, capacity);
    mesh.setColorAt(0, color);
    mesh.boundingSphere = bounds;
    mesh.receiveShadow = true;
    mesh.count = 0;
    group.add(mesh);
    return mesh;
  };
  const batches: Batch[] = [];
  for (const dress of ['ihram', 'abaya', 'kufi'] as WalkerDress[]) {
    const members = walkers.filter((w) => w.dress === dress);
    if (members.length === 0) continue;
    batches.push({ members, near: batchMesh(dress, 'walk', members.length), far: batchMesh(dress, 'far', members.length) });
  }
  const place = (mesh: InstancedMesh, slot: number, w: TawafWalker) => {
    (mesh.geometry.getAttribute('orbit').array as Float32Array).set([w.radius, w.start, w.speed, w.stride], slot * 4);
    (mesh.geometry.getAttribute('stature').array as Float32Array)[slot] = w.stature;
    skinColor(w.skin, color).toArray(mesh.geometry.getAttribute('skinTone').array, slot * 3);
    mesh.setColorAt(slot, clothColor(w.dress, w.shade, color));
  };
  let sortedAt = -Infinity;
  const sortedFrom = new Vector3(Infinity, 0, 0);
  /** Hands each walker to the detailed or the simple version, by where they are at time `t`. */
  const sort = (eye: Vector3, t: number) => {
    sortedAt = t;
    sortedFrom.copy(eye);
    for (const { members, near, far } of batches) {
      let n = 0;
      let f = 0;
      for (const w of members) {
        const angle = w.start + w.speed * t;
        const dx = Math.cos(angle) * w.radius - eye.x;
        const dz = -Math.sin(angle) * w.radius - eye.z;
        if (dx * dx + dz * dz + eye.y * eye.y < NEAR * NEAR) place(near, n++, w);
        else place(far, f++, w);
      }
      for (const [mesh, count] of [
        [near, n],
        [far, f],
      ] as const) {
        mesh.count = count;
        for (const name of ['orbit', 'stature', 'skinTone']) mesh.geometry.getAttribute(name).needsUpdate = true;
        if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      }
    }
  };

  // A soft shadow under each walker, carried round with them.
  const shadow = contactShadow();
  shadow.material.onBeforeCompile = (shader) => {
    shader.uniforms.tawafTime = time;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float tawafTime;\nattribute vec4 orbit;')
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        float shadowAngle = orbit.y + orbit.z * tawafTime;
        transformed = vec3(transformed.x * 0.36, 0.012, transformed.z * 0.42);
        transformed = vec3(transformed.x * cos(shadowAngle) + transformed.z * sin(shadowAngle), transformed.y, -transformed.x * sin(shadowAngle) + transformed.z * cos(shadowAngle));
        transformed.x += cos(shadowAngle) * orbit.x;
        transformed.z -= sin(shadowAngle) * orbit.x;`
      );
  };
  shadow.material.customProgramCacheKey = () => 'tawaf-shadow';
  const shadowOrbit = new Float32Array(walkers.length * 4);
  walkers.forEach((w, i) => shadowOrbit.set([w.radius, w.start, w.speed, w.stride], i * 4));
  shadow.geometry.setAttribute('orbit', new InstancedBufferAttribute(shadowOrbit, 4));
  const shadows = new InstancedMesh(shadow.geometry, shadow.material, walkers.length);
  shadows.boundingSphere = bounds;
  group.add(shadows);

  const frustum = new Frustum();
  const viewProjection = new Matrix4();
  return {
    group,
    animate(camera: Camera, seconds: number) {
      // Wrapped so the shader's arithmetic keeps its precision (a jump once an hour).
      const t = seconds % 3600;
      time.value = t;
      if (!group.visible) return false;
      if (Math.abs(t - sortedAt) > RESORT || sortedFrom.distanceTo(camera.position) > 2) sort(camera.position, t);
      frustum.setFromProjectionMatrix(viewProjection.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));
      return frustum.intersectsSphere(bounds);
    },
    dispose() {
      for (const { near, far } of batches) {
        for (const mesh of [near, far]) {
          mesh.geometry.dispose();
          mesh.dispose();
        }
      }
      material.dispose();
      shadow.geometry.dispose();
      shadow.material.dispose();
      shadows.dispose();
    },
  };
}
