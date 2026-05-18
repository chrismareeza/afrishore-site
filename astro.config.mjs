// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { readdirSync, statSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Image masters (`*.original.*`) are kept on disk next to their optimised
// JPEG/WebP for easy re-processing, but must never reach the CDN. Astro
// copies all of public/ verbatim, so we strip them from the build output
// after the copy. Runs as part of `astro build` (= what Cloudflare runs),
// so it needs no CI config and covers every current and future master.
function stripImageMasters() {
  return {
    name: 'strip-image-masters',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        let removed = 0;
        let bytes = 0;
        const walk = (d) => {
          for (const entry of readdirSync(d, { withFileTypes: true })) {
            const p = join(d, entry.name);
            if (entry.isDirectory()) walk(p);
            else if (/\.original\.[^.]+$/i.test(entry.name)) {
              bytes += statSync(p).size;
              unlinkSync(p);
              removed += 1;
            }
          }
        };
        walk(root);
        logger.info(
          `stripped ${removed} image master(s) from build output — ${(bytes / 1048576).toFixed(1)} MB not deployed`
        );
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  // Canonical site URL — used for sitemap, canonical tags, OG meta
  site: 'https://www.afrishore.co',

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    }),
    stripImageMasters(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
