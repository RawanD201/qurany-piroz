// The explorer's levels: separate places to stand, each with its own collision world and
// markers. The Haram's ground is the main one; the others are reached from a place's panel or
// the Places list, and left with the button that appears at the top of the screen.
//
//   ground   Masjid al-Haram
//   balcony  the clock tower's balcony, high above it
//   kaaba    inside the Kaaba

export type Level = 'ground' | 'balcony' | 'kaaba';

export const LEVELS: readonly Level[] = ['ground', 'balcony', 'kaaba'];

export function isLevel(value: unknown): value is Level {
  return typeof value === 'string' && (LEVELS as readonly string[]).includes(value);
}
