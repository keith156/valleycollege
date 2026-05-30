import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { copyFileSync } from 'fs';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      ViteImageOptimizer({
        test: /\.(jpe?g|png|gif|tiff|webp|svg)$/i,
        exclude: undefined,
        include: undefined,
        includePublic: true,
        logStats: true,
        png: {
          quality: 80,
        },
        jpeg: {
          quality: 75,
        },
        jpg: {
          quality: 75,
        },
        webp: {
          lossless: false,
          quality: 80,
        },
      }),
      // Copy sitemap.xml and robots.txt into the build output after build finishes
      {
        name: 'copy-static-files',
        closeBundle() {
          try {
            copyFileSync('sitemap.xml', 'dist/sitemap.xml');
            copyFileSync('robots.txt', 'dist/robots.txt');
            console.log('✅ Copied sitemap.xml & robots.txt to dist');
          } catch (e) {
            console.warn('⚠️ Could not copy sitemap.xml/robots.txt:', e);
          }
        },
      },
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
