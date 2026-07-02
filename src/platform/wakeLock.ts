let sentinel: WakeLockSentinel | null = null;
/** Whether a session currently wants the screen held awake — tracked separately
 *  from the sentinel so a failed first request still retries on foreground. */
let wanted = false;

export async function acquireWakeLock(): Promise<void> {
  wanted = true;
  try {
    sentinel = 'wakeLock' in navigator ? await navigator.wakeLock.request('screen') : null;
  } catch {
    sentinel = null; // unsupported or denied now (e.g. during a call); retried on foreground
  }
}

/** iOS releases the lock when the app backgrounds; re-acquire on return. */
export function keepWakeLockAlive(): void {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && wanted) void acquireWakeLock();
  });
}

export async function releaseWakeLock(): Promise<void> {
  wanted = false;
  try {
    await sentinel?.release();
  } catch {
    /* already released */
  }
  sentinel = null;
}
