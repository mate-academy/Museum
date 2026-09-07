import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        comingSoon: resolve(__dirname, 'coming-soon.html'),
      },
    },
  },
});
