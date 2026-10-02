import { defineConfig } from 'vitest/config';

// Unit tests cover the parts of the explorer that are pure logic — collision, movement,
// place data, the walkable layout — so they run in Node without a browser or a GPU.
export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
});
