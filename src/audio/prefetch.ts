/**
 * Warm the runtime audio cache with everything this session needs, so a dead
 * cell zone mid-commute can't stall playback. Uses the same cache name as the
 * service worker's CacheFirst route for /audio/.
 */
export async function prefetchAudio(urls: string[], onProgress?: (done: number, total: number) => void): Promise<void> {
  if (!('caches' in window)) return;
  try {
    const cache = await caches.open('kotoba-audio');
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
            await cache.add(url);
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
