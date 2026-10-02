import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

// The explorer is a sub-application of the static Qurany Piroz site. The site itself has no
// build step (Vercel serves the repository root as-is), so this project is built locally and
// its output is committed to ../haram/, where Vercel serves it at /haram.
//
// `base` is absolute on purpose. The page is reachable as both /haram and /haram/, and a
// relative base would resolve "./assets/x.js" against "/" for the first of those — every
// script, stylesheet and chunk would 404.
const outDir = fileURLToPath(new URL('../haram', import.meta.url));

export default defineConfig({
  base: '/haram/',
  publicDir: false,
  server: { port: 5178, strictPort: true },
  preview: { port: 5179, strictPort: true },
  build: {
    outDir,
    emptyOutDir: true,
    // No source maps in production: they would hand out the original, commented TypeScript.
    sourcemap: false,
    // WebGL 2 (which three.js requires) arrived in Safari/iOS 15, so nothing older could run
    // the explorer anyway; this keeps modern syntax lowered for those browsers.
    target: ['es2020', 'safari15', 'ios15', 'chrome92', 'edge92', 'firefox90'],
    cssTarget: ['safari15', 'ios15', 'chrome92', 'edge92', 'firefox90'],
    modulePreload: { polyfill: true },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 800,
    rolldownOptions: {
      output: {
        // Content-hashed, non-descriptive file names: long-term cacheable, and they do not
        // advertise the internal module layout.
        entryFileNames: 'assets/[hash].js',
        chunkFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash][extname]',
        // Keep three.js's MIT licence header (legal comments) and drop everything else.
        comments: { legal: true, annotation: false, jsdoc: false },
        codeSplitting: {
          groups: [{ name: 'vendor-three', test: /node_modules[\\/]three[\\/]/ }],
        },
      },
    },
  },
});
