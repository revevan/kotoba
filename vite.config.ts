import { execSync } from 'node:child_process';
import { rmSync } from 'node:fs';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { VitePWA } from 'vite-plugin-pwa';
import { AUDIO_CACHE_NAME } from './src/audio/audioCache';

// Stamped into the boot log line so device logs identify the running build.
function buildId(): string {
  try {
    return execSync('git rev-parse --short HEAD', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return 'unknown';
  }
}

export default defineConfig({
  // GitHub Pages serves project sites from a subpath (e.g. /kotoba/);
  // the deploy workflow sets BASE_PATH accordingly.
  base: process.env.BASE_PATH ?? '/',
  build: {
    rollupOptions: {
      // SPA lives at /app/; public/index.html is the static marketing page at /.
      // /review/ is the unlisted content-review page (gated by REVIEWER_EMAILS
      // on the API worker).
      input: { app: 'app/index.html', review: 'review/index.html' },
    },
  },
  define: { __BUILD_ID__: JSON.stringify(buildId()) },
  plugins: [
    preact(),
    {
      // When audio is served from R2 (VITE_AUDIO_BASE_URL set in CI), the
      // corpus is dead weight in the Pages artifact — strip it from the build
      // output. Local builds (no env var) keep same-origin audio untouched.
      name: 'drop-audio-from-build',
      closeBundle() {
        if (process.env.VITE_AUDIO_BASE_URL) rmSync('dist/audio', { recursive: true, force: true });
      },
    },
    VitePWA({
      // 'prompt': a new SW installs but waits — no skipWaiting/clientsClaim, so
      // a deploy can never hard-reload a live session mid-drive. The page
      // decides when to apply (src/platform/swUpdate.ts: silent on cold start,
      // a home-screen notice otherwise, manual check in Settings).
      registerType: 'prompt',
      manifest: {
        name: 'Kotoba — Hands-Free Japanese',
        short_name: 'Kotoba',
        description: 'Hands-free audio Japanese vocabulary trainer for the commute',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/app/',
        scope: '/app/',
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
        // cues/ holds the few clips that must play with NO network (the
        // connection-lost cue) — bundled with the shell, never in R2.
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}', 'cues/*.mp3'],
        globIgnores: ['audio/**', 'decks/**', 'icons/**'],
        // Serve the SPA shell for /app/* navigations (including /app?debug=1).
        // Marketing page at / is not handled by the SW — it goes to the network.
        navigateFallback: 'app/index.html',
        navigateFallbackAllowlist: [/^\/app/],
        runtimeCaching: [
          {
            // Same-origin /audio/ paths (dev/rollback) or the R2 audio host.
            urlPattern: ({ url }) => url.pathname.includes('/audio/') || (!!process.env.VITE_AUDIO_BASE_URL && url.href.startsWith(process.env.VITE_AUDIO_BASE_URL)),
            handler: 'CacheFirst',
            options: {
              // CacheFirst on unversioned URLs never revalidates — the bump
              // procedure for re-recorded clips lives in src/audio/audioCache.ts.
              cacheName: AUDIO_CACHE_NAME,
              // Word clips (~4k) + sentence clips (~4 per sentence) — headroom so
              // CacheFirst eviction doesn't thrash the active deck's audio.
              expiration: { maxEntries: 12000 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ url }) => url.pathname.includes('/decks/'),
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'kotoba-decks' },
          },
          {
            // kuromoji dictionary on jsDelivr — cache so kanji→reading grading
            // keeps working offline after the first load.
            urlPattern: ({ url }) => url.href.includes('cdn.jsdelivr.net') && url.pathname.includes('/dict/'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'kotoba-dict',
              expiration: { maxEntries: 20 },
              cacheableResponse: { statuses: [0, 200] },
            },
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
