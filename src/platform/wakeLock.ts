let sentinel: WakeLockSentinel | null = null;

export async function acquireWakeLock(): Promise<void> {
  try {
    sentinel = 'wakeLock' in navigator ? await navigator.wakeLock.request('screen') : null;
  } catch {
    sentinel = null; // unsupported or denied; user can set Auto-Lock to Never
  }
}

/** iOS releases the lock when the app backgrounds; re-acquire on return. */
export function keepWakeLockAlive(): void {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && sentinel) void acquireWakeLock();
  });
}

export async function releaseWakeLock(): Promise<void> {
  try {
    await sentinel?.release();
  } catch {
    /* already released */
  }
  sentinel = null;
}
