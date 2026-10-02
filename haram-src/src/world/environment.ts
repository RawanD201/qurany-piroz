// Sky, light, fog and reflections — for day and for night.
//
// The light never moves while a view is shown, so the shadow map is drawn once and reused
// (shadowMap.autoUpdate = false), and redrawn only when switching between day and night. That
// keeps sharp shadows at almost no ongoing cost, which matters a great deal on phones.
//
// Night is an artistic impression of the mosque's floodlighting, not a lighting survey: one
// high "floodlight" stands in for the many real ones, outdoor stone glows warmly (see
// materials.ts, applyTimeOfDay), and reflections come from a warm, lamp-lit environment map.

import {
  BackSide,
  Color,
  DirectionalLight,
  Fog,
  HemisphereLight,
  Mesh,
  MeshBasicMaterial,
  PMREMGenerator,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  Vector3,
  type Texture,
  type WebGLRenderer,
  type WebGLRenderTarget,
} from 'three';
import { MAIN_OUTER, MASA_OUTLINE } from '../data/plan-data';
import { bounds } from '../data/polygon';
import type { QualitySettings } from '../engine/quality';
import type { TimeOfDay } from './materials';

/** Direction towards the sun: high in the south-western sky. */
export const SUN_DIRECTION = new Vector3(-0.55, 1.3, 0.62).normalize();
/** Direction towards the stand-in floodlight at night: steep, so shadows stay short. */
const FLOOD_DIRECTION = new Vector3(0.32, 1, -0.22).normalize();

interface LightingPreset {
  skyTop: string;
  skyHorizon: string;
  skyGround: string;
  night: number;
  fog: string;
  fogNear: number;
  /** Multiplier on the quality tier's fog distance. */
  fogScale: number;
  hemiSky: string;
  hemiGround: string;
  hemiIntensity: number;
  lightColor: string;
  lightIntensity: number;
  lightDirection: Vector3;
  exposure: number;
}

const PRESETS: Record<TimeOfDay, LightingPreset> = {
  day: {
    skyTop: '#5d8fc9',
    skyHorizon: '#dfe8ef',
    skyGround: '#cdbfa6',
    night: 0,
    fog: '#dfe8ef',
    fogNear: 140,
    fogScale: 1,
    hemiSky: '#e8edf1',
    hemiGround: '#d6c8ac',
    hemiIntensity: 1.1,
    lightColor: '#fff4e2',
    lightIntensity: 2.7,
    lightDirection: SUN_DIRECTION,
    exposure: 1,
  },
  night: {
    skyTop: '#03060f',
    skyHorizon: '#1c2134',
    skyGround: '#131116',
    night: 1,
    fog: '#141a29',
    fogNear: 110,
    fogScale: 0.7,
    hemiSky: '#3a4772',
    hemiGround: '#8c7c62',
    hemiIntensity: 1.05,
    lightColor: '#fff3e2',
    lightIntensity: 2.3,
    lightDirection: FLOOD_DIRECTION,
    exposure: 1.05,
  },
};

const SKY_VERTEX = /* glsl */ `
  varying vec3 vDirection;
  void main() {
    vDirection = normalize(position);
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = p.xyww; // always at the far plane
  }
`;

const SKY_FRAGMENT = /* glsl */ `
  uniform vec3 topColor;
  uniform vec3 horizonColor;
  uniform vec3 groundColor;
  uniform vec3 sunColor;
  uniform vec3 sunDirection;
  uniform float night;
  varying vec3 vDirection;

  float hash13(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.zyx + 31.32);
    return fract((p.x + p.y) * p.z);
  }

  void main() {
    vec3 d = normalize(vDirection);
    float h = d.y;
    vec3 sky = mix(horizonColor, topColor, pow(clamp(h, 0.0, 1.0), 0.55));
    vec3 color = h >= 0.0 ? sky : mix(horizonColor, groundColor, clamp(-h * 6.0, 0.0, 1.0));
    float s = max(dot(d, sunDirection), 0.0);
    color += sunColor * (pow(s, 900.0) * 2.5 + pow(s, 24.0) * 0.18) * (1.0 - night);
    if (night > 0.0 && h > 0.0) {
      // The city's lights glow low over the horizon.
      color += vec3(0.34, 0.21, 0.1) * pow(1.0 - h, 9.0) * 0.4 * night;
      // A sparse field of faint stars (the city's lights wash most of them out).
      vec3 cell = floor(d * 170.0);
      float rnd = hash13(cell);
      if (rnd > 0.9955) {
        float dist = length(fract(d * 170.0) - 0.5);
        float star = smoothstep(0.24, 0.0, dist) * (0.35 + (rnd - 0.9955) / 0.0045 * 0.65);
        color += vec3(0.85, 0.88, 1.0) * star * night * smoothstep(0.05, 0.3, h);
      }
    }
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

function skyMaterial(): ShaderMaterial {
  return new ShaderMaterial({
    uniforms: {
      topColor: { value: new Color() },
      horizonColor: { value: new Color() },
      groundColor: { value: new Color() },
      sunColor: { value: new Color('#fff1d6') },
      sunDirection: { value: SUN_DIRECTION.clone() },
      night: { value: 0 },
    },
    vertexShader: SKY_VERTEX,
    fragmentShader: SKY_FRAGMENT,
    side: BackSide,
    depthWrite: false,
    fog: false,
  });
}

function setSkyUniforms(material: ShaderMaterial, preset: LightingPreset): void {
  const u = material.uniforms;
  (u.topColor.value as Color).set(preset.skyTop);
  (u.horizonColor.value as Color).set(preset.skyHorizon);
  (u.groundColor.value as Color).set(preset.skyGround);
  u.night.value = preset.night;
}

export interface Environment {
  sun: DirectionalLight;
  hemisphere: HemisphereLight;
  sky: Mesh;
  readonly time: TimeOfDay;
  /** Switches lighting, sky, fog and reflections, and redraws the static shadow map. */
  setTimeOfDay(time: TimeOfDay): void;
  /** Turns shadows on/off (e.g. when quality changes) and redraws the static shadow map. */
  setShadows(enabled: boolean, mapSize: number): void;
  /** Sets the quality tier's fog distance (scaled for the time of day). */
  setFogDistance(far: number): void;
  /** Recreates GPU-side resources after a lost WebGL context is restored. */
  restore(): void;
  dispose(): void;
}

/**
 * A prefiltered environment map so marble, silk and gold pick up soft reflections. By day it
 * is the sky; by night, the dark sky plus a ring of warm floodlights around the courtyard.
 */
function buildEnvironmentMap(renderer: WebGLRenderer, time: TimeOfDay): WebGLRenderTarget {
  const pmrem = new PMREMGenerator(renderer);
  const envScene = new Scene();
  const material = skyMaterial();
  setSkyUniforms(material, PRESETS[time]);
  envScene.add(new Mesh(new SphereGeometry(40, 32, 16), material));
  const lampMaterial = new MeshBasicMaterial({ color: new Color('#ffe6c2').multiplyScalar(4) });
  if (time === 'night') {
    // Many small lamps all round, so reflections in the polished floor read as an even glow
    // rather than a few hot spots.
    for (let k = 0; k < 36; k++) {
      const angle = (k / 36) * Math.PI * 2;
      const elevation = 0.18 + (k % 4) * 0.1;
      const lamp = new Mesh(new SphereGeometry(1.6, 8, 6), lampMaterial);
      lamp.position.set(Math.cos(angle) * 30 * Math.cos(elevation), 30 * Math.sin(elevation), Math.sin(angle) * 30 * Math.cos(elevation));
      envScene.add(lamp);
    }
  }
  const target = pmrem.fromScene(envScene, time === 'night' ? 0.06 : 0.035, 0.1, 100);
  pmrem.dispose();
  envScene.traverse((o) => {
    if (o instanceof Mesh) o.geometry.dispose();
  });
  material.dispose();
  lampMaterial.dispose();
  return target;
}

export function createEnvironment(
  renderer: WebGLRenderer,
  scene: Scene,
  quality: QualitySettings,
  initialTime: TimeOfDay,
  onEnvironment: (texture: Texture | null) => void
): Environment {
  const fog = new Fog('#ffffff', 140, quality.fogFar);
  scene.fog = fog;
  const background = new Color();
  scene.background = background;

  const material = skyMaterial();
  const sky = new Mesh(new SphereGeometry(2900, 32, 16), material);
  sky.frustumCulled = false;
  sky.renderOrder = -1;
  scene.add(sky);

  const hemisphere = new HemisphereLight();
  scene.add(hemisphere);

  const sun = new DirectionalLight();
  // The static shadow map covers the courtyard, the halls and the Mas'a.
  const covered = bounds([...MAIN_OUTER, ...MASA_OUTLINE]);
  const center = new Vector3((covered.minX + covered.maxX) / 2, 0, (covered.minZ + covered.maxZ) / 2);
  const half = Math.max(covered.maxX - covered.minX, covered.maxZ - covered.minZ) / 2 + 12;
  sun.target.position.copy(center);
  scene.add(sun, sun.target);
  const cam = sun.shadow.camera;
  cam.left = -half;
  cam.right = half;
  cam.top = half;
  cam.bottom = -half;
  cam.near = 200;
  cam.far = 900;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.06;
  sun.shadow.radius = 2;

  // One reflection map per time of day, built the first time it is needed and then reused.
  // It is handed to each material individually (materials.ts, applyEnvironmentMap) rather than
  // set as scene.environment, so indoor surfaces can reflect much less than outdoor ones.
  const envTargets: Partial<Record<TimeOfDay, WebGLRenderTarget>> = {};
  let time: TimeOfDay = initialTime;
  let fogFar = quality.fogFar;

  const applyEnvironment = () => {
    if (!quality.environmentMap) return;
    try {
      const target = envTargets[time] ?? (envTargets[time] = buildEnvironmentMap(renderer, time));
      onEnvironment(target.texture);
    } catch (error) {
      // Reflections are a nicety; without them the materials still render.
      console.warn('Environment map unavailable', error);
      onEnvironment(null);
    }
  };

  const applyPreset = () => {
    const preset = PRESETS[time];
    setSkyUniforms(material, preset);
    background.set(preset.skyHorizon);
    fog.color.set(preset.fog);
    fog.near = preset.fogNear;
    fog.far = fogFar * preset.fogScale;
    hemisphere.color.set(preset.hemiSky);
    hemisphere.groundColor.set(preset.hemiGround);
    hemisphere.intensity = preset.hemiIntensity;
    sun.color.set(preset.lightColor);
    sun.intensity = preset.lightIntensity;
    sun.position.copy(center).addScaledVector(preset.lightDirection, 520);
    sun.updateMatrixWorld();
    sun.target.updateMatrixWorld();
    renderer.toneMappingExposure = preset.exposure;
    renderer.shadowMap.needsUpdate = true;
    applyEnvironment();
  };

  const setShadows = (enabled: boolean, mapSize: number) => {
    renderer.shadowMap.enabled = enabled;
    sun.castShadow = enabled;
    if (enabled && sun.shadow.mapSize.x !== mapSize) {
      sun.shadow.mapSize.set(mapSize, mapSize);
      sun.shadow.map?.dispose();
      sun.shadow.map = null;
    }
    renderer.shadowMap.needsUpdate = true;
    // Materials compile different shaders with and without shadows.
    scene.traverse((o) => {
      if (o instanceof Mesh && !Array.isArray(o.material)) o.material.needsUpdate = true;
    });
  };

  renderer.shadowMap.autoUpdate = false;
  applyPreset();
  setShadows(quality.shadows, quality.shadowMapSize);

  return {
    sun,
    hemisphere,
    sky,
    get time() {
      return time;
    },
    setTimeOfDay(next: TimeOfDay) {
      time = next;
      applyPreset();
    },
    setShadows,
    setFogDistance(far: number) {
      fogFar = far;
      fog.far = far * PRESETS[time].fogScale;
    },
    restore() {
      // The GPU copies of the reflection maps were lost with the context.
      for (const key of Object.keys(envTargets) as TimeOfDay[]) {
        envTargets[key]?.dispose();
        delete envTargets[key];
      }
      applyEnvironment();
      renderer.shadowMap.needsUpdate = true;
    },
    dispose() {
      for (const target of Object.values(envTargets)) target?.dispose();
      material.dispose();
      sky.geometry.dispose();
    },
  };
}
