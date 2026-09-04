import { AUDIO_CACHE_NAME } from './audioCache';

/**
 * Warm the runtime audio cache with everything this session needs, so a dead
 * cell zone mid-commute can't stall playback. Writes to the same cache the
 * service worker's CacheFirst route reads (and the player checks directly).
 */
export async function prefetchAudio(urls: string[], onProgress?: (done: number, total: number) => void): Promise<void> {
  if (!('caches' in window)) return;
  try {
    const cache = await caches.open(AUDIO_CACHE_NAME);
    const missing: string[] = [];
    for (const url of urls) {
      if (!(await cache.match(url))) missing.push(url);
    }
    let done = urls.length - missing.length;
    const batch = 6;
    for (let i = 0; i < missing.length; i += batch) {
      await Promise.all(
        missing.slice(i, i + batch).map(async (url) => {
          try {
            // Explicit CORS mode: a bare string URL would fetch no-cors
            // cross-origin and cache an opaque (quota-padded) response.
            await cache.add(new Request(url, { mode: 'cors' }));
          } catch {
            /* missing clip or offline; playback will skip it */
          }
          done++;
          onProgress?.(done, urls.length);
        }),
      );
    }
  } catch {
    /* private browsing or storage pressure — playback falls back to network */
  }
}
