// Every material in the scene, created once and shared. Geometry is grouped by material key
// and merged (see geometry.ts), so the number of keys here is roughly the number of draw calls.

import {
  BackSide,
  Color,
  DoubleSide,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  Vector2,
  type Material,
  type Texture,
} from 'three';
import { applyMatafTiling } from './mataf-floor';
import { TEXTURE_WORLD_SIZE, type TextureKey, type TextureSet } from './textures';

export type MaterialKey =
  | 'marbleFloor'
  | 'marbleFloorInterior'
  | 'marbleWhite'
  | 'stone'
  | 'stoneTrim'
  | 'stoneShadow'
  | 'ceiling'
  | 'ceilingBack'
  | 'dome'
  | 'kiswah'
  | 'hizam'
  | 'sitara'
  | 'kardashiyya'
  | 'gold'
  | 'silver'
  | 'blackStone'
  | 'glass'
  | 'rock'
  | 'plaza'
  | 'lamp'
  | 'nightLamp'
  | 'greenLight'
  | 'window'
  | 'city'
  | 'distant'
  | 'clockDial'
  | 'clockText'
  | 'mountain';

export type MaterialLibrary = Record<MaterialKey, Material>;

export type TimeOfDay = 'day' | 'night';

/** How UVs are generated for geometry using each material (see geometry.ts). */
export const MATERIAL_UV: Partial<Record<MaterialKey, { texture: TextureKey; worldSize: number }>> = {
  marbleFloor: { texture: 'marble', worldSize: TEXTURE_WORLD_SIZE.marble },
  marbleFloorInterior: { texture: 'marble', worldSize: TEXTURE_WORLD_SIZE.marble },
  marbleWhite: { texture: 'marble', worldSize: TEXTURE_WORLD_SIZE.marble * 0.75 },
  stone: { texture: 'stone', worldSize: TEXTURE_WORLD_SIZE.stone },
  stoneTrim: { texture: 'stone', worldSize: TEXTURE_WORLD_SIZE.stone },
  ceiling: { texture: 'ceiling', worldSize: TEXTURE_WORLD_SIZE.ceiling },
  ceilingBack: { texture: 'ceiling', worldSize: TEXTURE_WORLD_SIZE.ceiling },
  kiswah: { texture: 'kiswah', worldSize: TEXTURE_WORLD_SIZE.kiswah },
  rock: { texture: 'rock', worldSize: TEXTURE_WORLD_SIZE.rock },
  plaza: { texture: 'plaza', worldSize: TEXTURE_WORLD_SIZE.plaza },
  // Window rows on the towers: one repeat (6 × 10 windows) per 40 m.
  distant: { texture: 'city', worldSize: 40 },
  city: { texture: 'city', worldSize: 40 },
};

/** Materials that are indoors; they are darkened when shadows are off (see setInteriorShade). */
const INTERIOR_KEYS: readonly MaterialKey[] = ['marbleFloorInterior', 'ceiling', 'ceilingBack'];

export interface MaterialOptions {
  textures: Partial<Record<TextureKey, TextureSet>>;
  /** Whether image-based reflections are available (gold looks flat without them). */
  environmentMap: boolean;
  /** Silk sheen on the kiswah (a slightly more expensive material; off on the low tier). */
  richMaterials: boolean;
  /** The clock tower's dial and inscriptions (see clock-face.ts); plain faces without them. */
  clock?: { dial: Texture; inscriptions: Texture } | null;
}

type StandardParams = ConstructorParameters<typeof MeshStandardMaterial>[0];

export function createMaterials(options: MaterialOptions): MaterialLibrary {
  const tex = options.textures;
  const metal = options.environmentMap ? 1 : 0.35;

  const standard = (params: StandardParams) => new MeshStandardMaterial({ roughness: 0.8, metalness: 0, ...params });

  /**
   * Maps from a texture set. When the set is missing (painting failed), the material keeps a
   * sensible plain colour; when only detail maps are missing (low tier), the plain roughness
   * and metalness values apply.
   */
  const fromSet = (key: TextureKey, fallback: string, roughness: number, metalness = 0): StandardParams => {
    const set = tex[key];
    if (!set) return { color: new Color(fallback), roughness, metalness };
    const params: StandardParams = { map: set.map, color: new Color('#ffffff'), roughness, metalness };
    if (set.normalMap) {
      params.normalMap = set.normalMap;
      params.normalScale = new Vector2(set.normalStrength, set.normalStrength);
    }
    if (set.roughnessMap) {
      params.roughnessMap = set.roughnessMap;
      params.roughness = 1; // the map holds the actual values
    }
    if (set.metalnessMap && metalness > 0) {
      // The map marks where the gold and silver thread is; the scalar only scales it, and is
      // kept low without reflections, where full metal would look black.
      params.metalnessMap = set.metalnessMap;
      params.metalness = metal;
    }
    return params;
  };

  const kiswahParams = fromSet('kiswah', '#121213', 0.72);
  const kiswah = options.richMaterials
    ? new MeshPhysicalMaterial({
        ...kiswahParams,
        // Silk: a soft sheen that brightens at grazing angles.
        sheen: 1,
        sheenRoughness: 0.42,
        sheenColor: new Color('#4a4a50'),
      })
    : standard(kiswahParams);

  const library: MaterialLibrary = {
    marbleFloor: standard(fromSet('marble', '#eceae5', 0.3)),
    // Indoor surfaces get a faint warm glow standing in for the halls' lamps, which are not
    // real light sources (dozens of dynamic lights would be far too slow on phones).
    marbleFloorInterior: standard({ ...fromSet('marble', '#eceae5', 0.4), emissive: new Color('#4a3d29') }),
    marbleWhite: standard(fromSet('marble', '#efede8', 0.36)),
    stone: standard(fromSet('stone', '#d6cfc2', 0.85)),
    stoneTrim: standard({ ...fromSet('stone', '#c4baa8', 0.75), color: new Color(tex.stone ? '#ded3be' : '#c4baa8') }),
    stoneShadow: standard({ color: new Color('#867e72'), roughness: 0.95 }),
    ceiling: standard({ ...fromSet('ceiling', '#ebe4d4', 0.9), emissive: new Color('#2f281c') }),
    ceilingBack: standard({ ...fromSet('ceiling', '#ebe4d4', 0.9), side: BackSide, emissive: new Color('#2f281c') }),
    dome: standard({ color: new Color('#cfcac0'), roughness: 0.55, side: DoubleSide }),
    kiswah,
    hizam: standard(fromSet('hizam', '#3a2f17', 0.42, 0.45 * metal)),
    sitara: standard(fromSet('sitara', '#2e2513', 0.45, 0.4 * metal)),
    kardashiyya: standard(fromSet('kardashiyya', '#2e2513', 0.45, 0.4 * metal)),
    gold: standard({ color: new Color('#d0a64a'), roughness: 0.28, metalness: metal }),
    silver: standard({ color: new Color('#d9dadc'), roughness: 0.22, metalness: metal }),
    blackStone: standard({ color: new Color('#1b1815'), roughness: 0.35 }),
    glass: standard({
      color: new Color('#e3f1f8'),
      roughness: 0.06,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
    }),
    rock: standard({ ...fromSet('rock', '#8a7d6c', 0.95), flatShading: true }),
    plaza: standard(fromSet('plaza', '#c3c0b9', 0.7)),
    // Unlit: light fittings and the green markers read as glowing without any real lights.
    lamp: new MeshBasicMaterial({ color: new Color('#fff3d6') }),
    // Floodlights and minaret lamps: plain fittings by day, glowing at night.
    nightLamp: standard({ color: new Color('#d8d2c6'), roughness: 0.4, emissive: new Color('#ffe2b0'), emissiveIntensity: 0 }),
    greenLight: new MeshBasicMaterial({ color: new Color('#3ee07f') }),
    window: standard({ color: new Color('#3c3a37'), roughness: 0.3, metalness: 0.2 }),
    city: new MeshLambertMaterial({
      color: new Color('#ffffff'),
      map: tex.city?.map ?? null,
      emissiveMap: tex.city?.emissiveMap ?? null,
      emissive: new Color('#000000'),
    }),
    // Far scenery ignores the fog (it would vanish) and is tinted with haze instead.
    // Distant towers keep a light, hazy tone even on their shaded sides (aerial perspective),
    // rather than turning into dark slabs against the sky.
    distant: new MeshLambertMaterial({
      color: new Color('#cdc8bf'),
      map: tex.city?.map ?? null,
      emissive: new Color('#8f8c86'),
      fog: false,
    }),
    // The clock faces are lit (LEDs), so they are unlit here and ignore the haze.
    clockDial: new MeshBasicMaterial({ color: new Color(options.clock ? '#ffffff' : '#f6f1e4'), map: options.clock?.dial ?? null, fog: false }),
    clockText: new MeshBasicMaterial({
      map: options.clock?.inscriptions ?? null,
      transparent: true,
      premultipliedAlpha: true,
      depthWrite: false,
      fog: false,
      visible: Boolean(options.clock),
    }),
    mountain: new MeshLambertMaterial({ vertexColors: true, fog: false, flatShading: true }),
  };
  // Kept for the night view, when the towers' windows light up (see applyTimeOfDay).
  library.distant.userData.nightWindows = tex.city?.emissiveMap ?? null;
  // The Mataf's rows of marble face the Kaaba (see mataf-floor.ts).
  if (tex.marble) applyMatafTiling(library.marbleFloor as MeshStandardMaterial);
  return library;
}

/**
 * Swaps a material's textures for a new set (used when the kiswah photographs arrive), keeping
 * the same reflection settings. The caller frees the textures it replaces.
 */
export function replaceTextureSet(
  library: MaterialLibrary,
  key: MaterialKey,
  set: TextureSet,
  options: { environmentMap: boolean; metallic: boolean; roughness?: number }
): void {
  const material = library[key] as MeshStandardMaterial;
  material.map = set.map;
  material.color.set('#ffffff');
  material.normalMap = set.normalMap ?? null;
  if (set.normalMap) material.normalScale.set(set.normalStrength, set.normalStrength);
  material.roughnessMap = set.roughnessMap ?? null;
  material.roughness = set.roughnessMap ? 1 : (options.roughness ?? 0.45);
  const metal = options.environmentMap ? 1 : 0.35;
  material.metalnessMap = options.metallic ? (set.metalnessMap ?? null) : null;
  material.metalness = options.metallic ? (set.metalnessMap ? metal : 0.4 * metal) : 0;
  material.needsUpdate = true;
}

/**
 * Without a shadow map, the sun lights the floor under every roof as if it were outside.
 * Darkening the interior-only materials keeps the halls reading as indoors.
 */
export function setInteriorShade(library: MaterialLibrary, shadowsEnabled: boolean): void {
  for (const key of INTERIOR_KEYS) {
    const material = library[key] as MeshStandardMaterial;
    material.color.setScalar(shadowsEnabled ? 1 : 0.62);
  }
}

/**
 * Night: the courtyard façades, domes and minarets are floodlit. Instead of dozens of real
 * lights (far too slow on phones), outdoor stone gets a warm glow, the light fittings and the
 * city's windows light up, and the distant towers become dark silhouettes.
 */
const NIGHT_GLOW: Partial<Record<MaterialKey, string>> = {
  stone: '#5b4f40',
  stoneTrim: '#615342',
  dome: '#5a4f40',
  marbleWhite: '#46423b',
  marbleFloor: '#2a2823',
  plaza: '#24211b',
  rock: '#2a2219',
};

export function applyTimeOfDay(library: MaterialLibrary, time: TimeOfDay): void {
  const night = time === 'night';
  for (const [key, glow] of Object.entries(NIGHT_GLOW) as [MaterialKey, string][]) {
    (library[key] as MeshStandardMaterial).emissive.set(night ? glow : '#000000');
  }
  (library.nightLamp as MeshStandardMaterial).emissiveIntensity = night ? 2.2 : 0;
  (library.city as MeshLambertMaterial).emissive.set(night ? '#ffffff' : '#000000');
  // By day the towers glow with haze (a flat emissive); at night only their windows do, which
  // needs the window map as an emissive map (a one-off shader change, hidden by the fade).
  const distant = library.distant as MeshLambertMaterial;
  const windows = (distant.userData.nightWindows as Texture | null) ?? null;
  const emissiveMap = night ? windows : null;
  if (distant.emissiveMap !== emissiveMap) {
    distant.emissiveMap = emissiveMap;
    distant.needsUpdate = true;
  }
  distant.color.set(night ? '#5a5d68' : '#cdc8bf');
  distant.emissive.set(night ? (windows ? '#ffffff' : '#1b1e28') : '#8f8c86');
  (library.mountain as MeshLambertMaterial).color.set(night ? '#5c6070' : '#ffffff');

  // At night the Kaaba is floodlit from the roofs and minarets all round: the silk stays black,
  // its woven pattern catching the light only faintly, while the gold-embroidered belt and door
  // curtain shine. The one steep "floodlight" here leaves the walls unlit, so the cloth gives
  // off a little light in its own pattern (enough to stand out from the night sky, never grey),
  // the embroidery glows warm through its own gold, and the cool night sky reflects less.
  const kiswah = library.kiswah as MeshStandardMaterial;
  const pattern = night ? kiswah.map : null;
  if (kiswah.emissiveMap !== pattern) {
    kiswah.emissiveMap = pattern;
    kiswah.needsUpdate = true;
  }
  kiswah.emissive.set(night ? (pattern ? '#f6f1ea' : '#0c0c0d') : '#000000');
  kiswah.emissiveIntensity = night && pattern ? 2.1 : 1;
  if (kiswah instanceof MeshPhysicalMaterial) kiswah.sheenColor.set(night ? '#4a4846' : '#4a4a50');
  setEnvironmentScale(kiswah, 'kiswah', night ? 0.45 : 1);
  for (const key of ['hizam', 'sitara', 'kardashiyya'] as const) {
    const embroidery = library[key] as MeshStandardMaterial;
    const gold = night ? embroidery.map : null;
    if (embroidery.emissiveMap !== gold) {
      embroidery.emissiveMap = gold;
      embroidery.needsUpdate = true;
    }
    embroidery.emissive.set(night && gold ? '#ffcf8a' : '#000000');
    embroidery.emissiveIntensity = 0.9;
  }
}

/** How strongly each surface reflects the sky. Indoors much less: the sky map knows nothing
 *  about roofs, and full-strength reflections would tint the halls' floors blue. */
const ENV_INTENSITY: Partial<Record<MaterialKey, number>> = {
  marbleFloor: 0.5,
  marbleFloorInterior: 0.08,
  ceiling: 0.05,
  ceilingBack: 0.05,
  kiswah: 0.55,
  gold: 0.9,
  silver: 0.9,
  hizam: 0.85,
  sitara: 0.85,
  kardashiyya: 0.85,
  glass: 0.8,
  nightLamp: 0.2,
};

/** Scales a material's reflections (kept when the environment map is replaced). */
function setEnvironmentScale(material: MeshStandardMaterial, key: MaterialKey, scale: number): void {
  material.userData.environmentScale = scale;
  material.envMapIntensity = (ENV_INTENSITY[key] ?? 0.35) * scale;
}

export function applyEnvironmentMap(library: MaterialLibrary, texture: Texture | null): void {
  for (const [key, material] of Object.entries(library) as [MaterialKey, Material][]) {
    if (!(material instanceof MeshStandardMaterial)) continue;
    const changed = Boolean(material.envMap) !== Boolean(texture);
    material.envMap = texture;
    material.envMapIntensity = (ENV_INTENSITY[key] ?? 0.35) * ((material.userData.environmentScale as number | undefined) ?? 1);
    // Swapping one environment map for another needs no shader change; adding or removing one does.
    if (changed) material.needsUpdate = true;
  }
}

export function disposeMaterials(library: MaterialLibrary): void {
  for (const material of Object.values(library)) material.dispose();
}
