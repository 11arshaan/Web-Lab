// @ts-check
import { defineConfig } from 'astro/config';
import path from 'node:path';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
      resolve: {
        alias: {
          '@components': path.resolve('./src/components'),
          '@layouts': path.resolve('./src/layouts'),
          '@graphics': path.resolve('./src/assets/Graphics'),
          '@assets': path.resolve('./src/assets'),
          // Add more as needed
        }
      }
    },

  integrations: [react()]
});