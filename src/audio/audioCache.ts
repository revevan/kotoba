// Single source of truth for the runtime audio cache name. Three places must
// agree on it — the service worker's CacheFirst route (vite.config.ts), the
// session warm-up that pre-fills it (prefetch.ts), and the startup sweep that
// deletes superseded caches (swUpdate.ts). They drifted once (C2 renamed the
// SW route to v2 while the warm-up kept writing to the old name, which the
// sweep then deleted every boot), so they now all import from here.
//
// Bump procedure — any clip re-recorded at an EXISTING URL: CacheFirst never
// revalidates, so rename AUDIO_CACHE_NAME (v3, v4, …) and append the previous
// name to STALE_AUDIO_CACHES. Nothing else needs touching.
//
// v2: 2026-08-22 re-records of 224 n5-starter clips.
export const AUDIO_CACHE_NAME = 'kotoba-audio-v2';

/** Every earlier name, deleted at startup so stale audio doesn't sit in storage. */
export const STALE_AUDIO_CACHES: readonly string[] = ['kotoba-audio'];
