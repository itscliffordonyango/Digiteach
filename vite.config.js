import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cpSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const copySiteImages = {
  name: 'copy-site-images',
  closeBundle() {
    const destination = resolve(projectRoot, 'dist/assets/images');
    mkdirSync(resolve(projectRoot, 'dist/assets'), { recursive: true });
    cpSync(resolve(projectRoot, 'assets/images'), destination, { recursive: true });
  },
};

export default defineConfig({
  plugins: [react(), copySiteImages],
  build: {
    rollupOptions: {
      input: {
        home: resolve(projectRoot, 'index.html'),
        about: resolve(projectRoot, 'about.html'),
        digiteach: resolve(projectRoot, 'digiteach.html'),
        contact: resolve(projectRoot, 'contact.html'),
        getInvolved: resolve(projectRoot, 'getInvolved.html'),
      },
    },
  },
});
