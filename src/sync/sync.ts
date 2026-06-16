// Cloud sync orchestration: pull + merge on load, push after sessions. Merging
// reuses the local backup import (newer review wins), so the server only needs
// to store the latest blob per user.

import { exportBackup, importBackup } from '../data/backup';
import { auth, syncStatus } from '../state';
import { cloudSyncEnabled } from './config';
import { pullRemote, pushRemote } from './client';
import { dlog } from '../debug/log';

function clearExpiredAuth(e: unknown): void {
  if (String(e).includes('unauthorized')) {
    dlog('sync', 'token expired — signing out');
    auth.value = null;
  }
}

/** Pull the remote blob, merge it locally, then push the merged result back. */
export async function syncOnLoad(): Promise<void> {
  const a = auth.value;
  if (!cloudSyncEnabled || !a) return;
  try {
    syncStatus.value = 'syncing';
    const remote = await pullRemote(a.token);
    if (remote) await importBackup(JSON.stringify(remote));
    await pushRemote(a.token, JSON.parse(await exportBackup()));
    syncStatus.value = 'done';
    dlog('sync', 'load sync complete');
  } catch (e) {
    dlog('sync', `load sync failed: ${e}`);
    clearExpiredAuth(e);
    syncStatus.value = 'error';
  }
}

/** Push local progress to the server (after a session). */
export async function syncPush(): Promise<void> {
  const a = auth.value;
  if (!cloudSyncEnabled || !a) return;
  try {
    syncStatus.value = 'syncing';
    await pushRemote(a.token, JSON.parse(await exportBackup()));
    syncStatus.value = 'done';
    dlog('sync', 'push complete');
  } catch (e) {
    dlog('sync', `push failed: ${e}`);
    clearExpiredAuth(e);
    syncStatus.value = 'error';
  }
}
