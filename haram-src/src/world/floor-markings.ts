// A circle on the Mataf floor over the approximate location of the Zamzam well.
//
// The well is underground, beneath the Mataf. A marking on the floor once showed the spot; it
// was removed in 2003 along with the stairway down to the well (see SOURCES.md). This circle
// is drawn for the model only, as a guide to where the well lies, in the manner of an inlay of
// darker marble lettered "بئر زمزم" (the Zamzam well).

import {
  CanvasTexture,
  CircleGeometry,
  Mesh,
  MeshStandardMaterial,
  SRGBColorSpace,
} from 'three';
import { ZAMZAM_POSITION } from '../data/layout';

/** Radius of the floor circle, metres (clear of the drawn tawaf circuit at 20 m). */
export const ZAMZAM_MARKING_RADIUS = 1.1;
const ARABIC_FONTS = '"Geeza Pro", "Noto Naskh Arabic", "Noto Sans Arabic", "Segoe UI", Tahoma, Arial, sans-serif';

function paint(size: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('2D canvas unavailable');
  const c = size / 2;
  const R = size / 2;

  // A band of dark green-grey marble with a fine gold line either side.
  const band = ctx.createRadialGradient(c, c, R * 0.8, c, c, R);
  band.addColorStop(0, '#2c473d');
  band.addColorStop(0.5, '#365548');
  band.addColorStop(1, '#2a4239');
  ctx.fillStyle = band;
  ctx.beginPath();
  ctx.arc(c, c, R * 0.98, 0, Math.PI * 2);
  ctx.arc(c, c, R * 0.82, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.strokeStyle = '#b8954a';
  ctx.lineWidth = R * 0.018;
  for (const r of [R * 0.98, R * 0.82, R * 0.76]) {
    ctx.beginPath();
    ctx.arc(c, c, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Small diamonds set into the band, like the inlays around the Mataf.
  ctx.fillStyle = '#d9c9a3';
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    ctx.save();
    ctx.translate(c + Math.cos(a) * R * 0.9, c + Math.sin(a) * R * 0.9);
    ctx.rotate(a);
    ctx.beginPath();
    ctx.moveTo(-R * 0.035, 0);
    ctx.lineTo(0, -R * 0.022);
    ctx.lineTo(R * 0.035, 0);
    ctx.lineTo(0, R * 0.022);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // The lettering, in the same dark marble.
  const text = 'بئر زمزم';
  ctx.direction = 'rtl';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  let fontSize = R * 0.56;
  ctx.font = `bold ${fontSize}px ${ARABIC_FONTS}`;
  const fit = (R * 1.42) / Math.max(1, ctx.measureText(text).width);
  if (fit < 1) {
    fontSize *= fit;
    ctx.font = `bold ${fontSize}px ${ARABIC_FONTS}`;
  }
  ctx.fillStyle = '#2c473d';
  ctx.fillText(text, c, c + fontSize * 0.08);
  return canvas;
}

export interface FloorMarking {
  mesh: Mesh;
  dispose(): void;
}

export function createZamzamMarking(anisotropy: number): FloorMarking {
  const texture = new CanvasTexture(paint(512));
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = anisotropy;
  texture.premultiplyAlpha = true;
  const material = new MeshStandardMaterial({
    map: texture,
    transparent: true,
    premultipliedAlpha: true,
    depthWrite: false,
    roughness: 0.32,
    metalness: 0,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
  });
  const mesh = new Mesh(new CircleGeometry(ZAMZAM_MARKING_RADIUS, 48), material);
  // Laid flat, with the lettering upright for someone standing outside it facing the Kaaba.
  mesh.rotation.order = 'YXZ';
  mesh.rotation.set(-Math.PI / 2, Math.atan2(ZAMZAM_POSITION.x, ZAMZAM_POSITION.z), 0);
  mesh.position.set(ZAMZAM_POSITION.x, 0.012, ZAMZAM_POSITION.z);
  mesh.receiveShadow = true;
  mesh.renderOrder = 1;
  mesh.updateMatrix();
  mesh.matrixAutoUpdate = false;
  return {
    mesh,
    dispose() {
      mesh.geometry.dispose();
      material.dispose();
      texture.dispose();
    },
  };
}
