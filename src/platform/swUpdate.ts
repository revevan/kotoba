// Service-worker update flow (registerType: 'prompt' in vite.config.ts).
//
// Policy: never yank a live session. A freshly detected update is applied
// silently only on a cold start (page just loaded, still on the home screen);
// otherwise `updateReady` flips and the home screen shows a one-tap restart
// notice. Settings has a manual "check for updates" escape hatch for a client
// that somehow got stuck on an old build.

import { signal } from '@preact/signals';
import { screen } from '../state';
import { dlog } from '../debug/log';

/** A new build is installed and waiting; applyUpdate() restarts into it. */
export const updateReady = signal(false);

/** Runtime caches superseded by a renamed successor (see vite.config.ts —
 * every kotoba-audio bump appends the old name here). Deleted at startup so
 * stale audio doesn't sit in storage forever. */
const STALE_CACHES = ['kotoba-audio'];

// How long after load a detected update may still auto-apply. Past this the
// user is settled in and a surprise reload would be rude.
const COLD_START_MS = 30_000;

let applySW: ((reloadPage?: boolean) => Promise<void>) | null = null;
let registration: ServiceWorkerRegistration | undefined;
const loadedAt = Date.now();

function onUpdateFound(): void {
  if (screen.value === 'home' && Date.now() - loadedAt < COLD_START_MS) {
    dlog('sw', 'update found on cold start — applying');
    void applySW?.(true);
    return;
  }
  dlog('sw', 'update found mid-use — prompting');
  updateReady.value = true;
}

export function initSW(): void {
  if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;
  import('virtual:pwa-register')
    .then(({ registerSW }) => {
      applySW = registerSW({
        immediate: true,
        onRegisteredSW(_url, r) {
          registration = r;
        },
        onNeedRefresh: onUpdateFound,
      });
    })
    .catch(() => {});
  if (typeof caches !== 'undefined') {
    for (const name of STALE_CACHES) void caches.delete(name).catch(() => {});
  }
}

/** Activate the waiting SW and reload into the new build. */
export function applyUpdate(): void {
  void applySW?.(true);
}

/** Settings escape hatch: poke the registration for a new build right now. */
export async function checkForUpdates(): Promise<'ready' | 'none' | 'unsupported'> {
  if (updateReady.value) return 'ready';
  if (!registration) return 'unsupported';
  try {
    await registration.update();
  } catch {
    return 'none'; // offline or the request failed — nothing to apply
  }
  // update() resolves when the check starts, not when the install finishes;
  // give onNeedRefresh a few beats to fire before reporting "up to date".
  for (let i = 0; i < 16 && !updateReady.value; i++) {
    await new Promise((r) => setTimeout(r, 500));
    if (!registration.installing && !registration.waiting) break;
  }
  return updateReady.value ? 'ready' : 'none';
}
