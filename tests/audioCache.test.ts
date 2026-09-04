import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { AUDIO_CACHE_NAME, STALE_AUDIO_CACHES } from '../src/audio/audioCache';

// The SW route, the warm-up prefetch and the startup sweep once disagreed on
// the cache name (C2 bumped the route to v2; the warm-up kept filling the old
// name, which the sweep then deleted every boot). Guard the single source.
describe('audio cache name', () => {
  it('the live name is never in the stale list', () => {
    expect(AUDIO_CACHE_NAME.startsWith('kotoba-audio')).toBe(true);
    expect(STALE_AUDIO_CACHES).not.toContain(AUDIO_CACHE_NAME);
  });

  it('no consumer hardcodes a kotoba-audio literal', () => {
    for (const file of ['vite.config.ts', 'src/platform/swUpdate.ts', 'src/audio/prefetch.ts']) {
      const src = readFileSync(file, 'utf8');
      expect(src, file).not.toMatch(/['"`]kotoba-audio/);
      expect(src, file).toMatch(/from ['"].*audioCache['"]/);
    }
  });
});
