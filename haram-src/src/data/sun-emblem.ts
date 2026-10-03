// The golden sun from the flag of Kurdistan, which stands in for the sun in the explorer's sky
// (world/sun-emblem.ts); tapping it opens a dialog under the flag itself (ui/about-panel.ts).
//
// The outline is the zriwe app's sun emblem: 21 rays round a disc, one polygon in a 1000 × 1000
// box with y pointing down, as in SVG, starting at the tip of the top ray and going clockwise.

export const SUN_EMBLEM_COLOR = '#febd11';

/** The outline's corners, x then y (SVG coordinates, 0–1000, y down). */
const POINTS: readonly number[] = [
  500, 0, 536.76, 258.27, 647.78, 22.34, 607, 280, 782.46, 87.37, 667.73, 321.53, 892.01, 189.3, 713.57, 379.16, 966.74, 319.11,
  740.42, 447.78, 1000, 465.23, 745.92, 521.3, 988.83, 614.7, 729.56, 593.17, 934.23, 754.2, 692.8, 657, 841.04, 871.4, 638.92,
  707.14, 717.55, 955.84, 572.69, 739.13, 574.73, 1000.01, 500, 750.1, 425.27, 1000, 427.31, 739.12, 282.45, 955.82, 361.08, 707.13,
  158.96, 871.4, 307.2, 657, 65.77, 754.21, 270.44, 593.16, 11.17, 614.69, 254.08, 521.29, 0, 465.23, 259.58, 447.78, 33.26, 319.1,
  286.43, 379.15, 108, 189.3, 332.28, 321.52, 217.55, 87.37, 393, 280, 352.2, 22.34, 463.25, 258.27,
];

/** The outline centred on the origin with y up, scaled so the rays' tips are about 1 from the centre. */
export function sunEmblemOutline(): { x: number; y: number }[] {
  const outline: { x: number; y: number }[] = [];
  for (let i = 0; i < POINTS.length; i += 2) outline.push({ x: (POINTS[i] - 500) / 500, y: (500 - POINTS[i + 1]) / 500 });
  return outline;
}
