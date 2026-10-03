// The people praying in the courtyard (where and how: data/praying-people.ts), drawn with the
// figures of figures.ts: standing with the right hand over the left on the chest, bowing with the
// hands on the knees, in prostration, and sitting back on the heels; in thobes with a white cap or
// a head cloth, or in ihram.
//
// Each posture in each dress is one figure drawn many times over (an InstancedMesh), in two
// versions: a detailed one for the people within NEAR metres of the visitor and a much simpler one
// for those further away, where the detail could not be seen anyway. As the visitor moves, people
// are handed from one to the other (update), so the crowd costs little more than the detail in view.

import { Color, Group, InstancedBufferAttribute, InstancedMesh, Matrix4, Quaternion, Vector3 } from 'three';
import { footprint, type PrayerDress, type PrayerPosture, type PrayingPerson } from '../data/praying-people';
import { buildFigure, clothColor, contactShadow, figureMaterial, prayingFigure, skinColor } from './figures';

/** Within this distance people are drawn in detail. */
const NEAR = 24;
/** How far the visitor moves before people are sorted again into near and far. */
const RESORT = 2.5;

interface Batch {
  /** Indices into the people of this posture and dress. */
  members: number[];
  near: InstancedMesh;
  far: InstancedMesh;
}

export interface PrayingPeopleMeshes {
  group: Group;
  /** Draws the people near `eye` in detail and the rest simply (call before drawing a frame). */
  update(eye: Vector3): void;
  dispose(): void;
}

function batchMesh(posture: PrayerPosture, dress: PrayerDress, detail: 'near' | 'far', capacity: number, material: ReturnType<typeof figureMaterial>): InstancedMesh {
  const geometry = buildFigure(prayingFigure(posture, dress), detail);
  geometry.setAttribute('skinTone', new InstancedBufferAttribute(new Float32Array(capacity * 3), 3));
  const mesh = new InstancedMesh(geometry, material, capacity);
  mesh.setColorAt(0, new Color());
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

export function buildPrayingPeople(people: readonly PrayingPerson[]): PrayingPeopleMeshes {
  const group = new Group();
  group.name = 'praying-people';
  const material = figureMaterial('praying-people');

  // Each person's placing, clothes and skin, ready to copy into whichever version draws them.
  const matrices = new Float32Array(people.length * 16);
  const cloth = new Float32Array(people.length * 3);
  const skin = new Float32Array(people.length * 3);
  const m = new Matrix4();
  const q = new Quaternion();
  const up = new Vector3(0, 1, 0);
  const color = new Color();
  people.forEach((person, i) => {
    // People differ a little in height.
    const size = 0.95 + ((person.skin * 13.7 + person.shade * 5.3) % 1) * 0.1;
    m.compose(new Vector3(person.x, 0, person.z), q.setFromAxisAngle(up, person.facing), new Vector3(size, size, size)).toArray(matrices, i * 16);
    clothColor(person.dress, person.shade, color).toArray(cloth, i * 3);
    skinColor(person.skin, color).toArray(skin, i * 3);
  });

  const batches: Batch[] = [];
  for (const posture of ['standing', 'bowing', 'prostrating', 'sitting'] as const) {
    for (const dress of ['kufi', 'ghutra', 'ihram'] as const) {
      const members = people.flatMap((p, i) => (p.posture === posture && p.dress === dress ? [i] : []));
      if (members.length === 0) continue;
      const near = batchMesh(posture, dress, 'near', members.length, material);
      const far = batchMesh(posture, dress, 'far', members.length, material);
      // Near ones are round the visitor, in view or nearly: never worth testing against the view.
      near.frustumCulled = false;
      near.count = 0;
      // The far version's bounds, taken with everyone in it, hold any share of them.
      members.forEach((index, slot) => far.instanceMatrix.array.set(matrices.subarray(index * 16, index * 16 + 16), slot * 16));
      far.computeBoundingSphere();
      batches.push({ members, near, far });
      group.add(near, far);
    }
  }

  // A soft shadow under each person, shaped to the floor they take up.
  const shadow = contactShadow();
  const shadows = new InstancedMesh(shadow.geometry, shadow.material, people.length);
  people.forEach((person, i) => {
    const { from, to, halfWidth } = footprint(person);
    const length = Math.hypot(to.x - from.x, to.z - from.z);
    m.compose(
      new Vector3((from.x + to.x) / 2, 0.012, (from.z + to.z) / 2),
      q.setFromAxisAngle(up, person.facing),
      new Vector3(halfWidth * 1.7, 1, (length / 2 + halfWidth) * 1.25)
    );
    shadows.setMatrixAt(i, m);
  });
  shadows.computeBoundingSphere();
  group.add(shadows);

  let sortedAt: Vector3 | null = null;
  const place = (mesh: InstancedMesh, slot: number, index: number) => {
    mesh.instanceMatrix.array.set(matrices.subarray(index * 16, index * 16 + 16), slot * 16);
    mesh.instanceColor?.array.set(cloth.subarray(index * 3, index * 3 + 3), slot * 3);
    (mesh.geometry.getAttribute('skinTone') as InstancedBufferAttribute).array.set(skin.subarray(index * 3, index * 3 + 3), slot * 3);
  };
  const update = (eye: Vector3) => {
    if (!group.visible || (sortedAt && sortedAt.distanceTo(eye) < RESORT)) return;
    sortedAt = eye.clone();
    for (const { members, near, far } of batches) {
      let n = 0;
      let f = 0;
      for (const index of members) {
        const p = people[index];
        const close = (p.x - eye.x) ** 2 + (p.z - eye.z) ** 2 + eye.y ** 2 < NEAR * NEAR;
        if (close) place(near, n++, index);
        else place(far, f++, index);
      }
      for (const [mesh, count] of [
        [near, n],
        [far, f],
      ] as const) {
        mesh.count = count;
        mesh.instanceMatrix.needsUpdate = true;
        if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
        mesh.geometry.getAttribute('skinTone').needsUpdate = true;
      }
    }
  };

  return {
    group,
    update,
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
