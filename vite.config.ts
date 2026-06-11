import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  // GitHub Pages serves project sites from a subpath (e.g. /kotoba/);
  // the deploy workflow sets BASE_PATH accordingly.
  base: process.env.BASE_PATH ?? '/',
  plugins: [
    preact(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Kotoba — Hands-Free Japanese',
        short_name: 'Kotoba',
        description: 'Hands-free audio Japanese vocabulary trainer for the commute',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#10101a',
        theme_color: '#10101a',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        // App shell only; audio/decks are cached at runtime so the 36MB corpus
        // is never part of the precache.
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        globIgnores: ['audio/**', 'decks/**', 'icons/**'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.includes('/audio/'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'kotoba-audio',
              expiration: { maxEntries: 5000 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ url }) => url.pathname.includes('/decks/'),
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'kotoba-decks' },
          },
        ],
      },
    }),
  ],
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
} as Parameters<typeof defineConfig>[0]);
