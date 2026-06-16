import { dlog } from '../debug/log';

/**
 * Ask the browser not to evict our IndexedDB. iOS Safari otherwise clears
 * script-writable storage after ~7 days of no visits — which would wipe a
 * commuter's progress over a vacation. Granted readily for installed
 * (home-screen) PWAs and engaged sites; harmless where unsupported.
 */
export async function requestPersistentStorage(): Promise<boolean> {
  try {
    if (!navigator.storage?.persist) return false;
    if (await navigator.storage.persisted()) {
      dlog('storage', 'already persistent');
      return true;
    }
    const granted = await navigator.storage.persist();
    dlog('storage', `persist() → ${granted}`);
    return granted;
  } catch (e) {
    dlog('storage', `persist() threw: ${e}`);
    return false;
  }
}
