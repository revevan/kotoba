import {
  SETTINGS_META_KEY,
  getAllCards,
  getAllReviews,
  getAllSettings,
  getSettingsMeta,
  logReview,
  putCard,
  putSettingRaw,
  setSetting,
  setSettingsMeta,
  type CardRow,
  type ReviewRow,
} from './db';

interface Backup {
  version: 1;
  exportedAt: string;
  cards: CardRow[];
  reviews: ReviewRow[];
  settings: Record<string, unknown>;
}

export async function exportBackup(): Promise<string> {
  const backup: Backup = {
    version: 1,
    exportedAt: new Date().toISOString(),
    cards: await getAllCards(),
    reviews: await getAllReviews(),
    settings: await getAllSettings(),
  };
  return JSON.stringify(backup, null, 2);
}

/** Payload synced to the cloud: cards + settings only (the study state). The
 * raw review log is intentionally excluded — it's an append-only audit trail
 * that would balloon the blob and duplicate on every merge. */
export interface SyncData {
  version?: number;
  cards: CardRow[];
  settings: Record<string, unknown>;
  [key: string]: unknown;
}

/** Blob schema this client writes. Bump only for additive changes — old
 * clients must always be able to merge the keys they know about. */
export const SYNC_VERSION = 1;

const SYNC_KNOWN_KEYS = new Set(['version', 'cards', 'settings']);

// Top-level keys a newer client wrote that this build doesn't understand.
// Captured on pull, echoed back on push — an old client must never erase a
// new client's data just by syncing. (Every push in a page's lifetime happens
// after its initial pull, so the capture is always populated first.)
let remoteExtras: Record<string, unknown> = {};
let remoteVersion = 0;

export async function exportSyncData(): Promise<SyncData> {
  return {
    ...remoteExtras,
    // Never downgrade the blob's version marker: the preserved extras still
    // conform to whatever newer schema wrote them.
    version: Math.max(SYNC_VERSION, remoteVersion),
    cards: await getAllCards(),
    settings: await getAllSettings(),
  };
}

export async function importSyncData(data: SyncData): Promise<void> {
  remoteVersion = typeof data.version === 'number' ? data.version : 0;
  remoteExtras = {};
  for (const [k, v] of Object.entries(data)) {
    if (!SYNC_KNOWN_KEYS.has(k)) remoteExtras[k] = v;
  }
  const existing = new Map((await getAllCards()).map((c) => [c.wordId, c]));
  for (const row of data.cards ?? []) {
    const cur = existing.get(row.wordId);
    const incoming = row.card.last_review ? new Date(row.card.last_review).getTime() : 0;
    const current = cur?.card.last_review ? new Date(cur.card.last_review).getTime() : -1;
    if (!cur || incoming > current) await putCard(row);
  }
  // Newer-wins per setting, not remote-wins: a value this device changed after
  // the remote blob was written must survive the pull. Legacy blobs carry no
  // stamps (both sides 0) → remote applies, matching the old behavior.
  const localMeta = await getSettingsMeta();
  const remoteSettings = data.settings ?? {};
  const remoteMeta = (remoteSettings[SETTINGS_META_KEY] ?? {}) as Record<string, number>;
  const mergedMeta = { ...localMeta };
  for (const [k, v] of Object.entries(remoteSettings)) {
    if (k === SETTINGS_META_KEY) continue;
    const remoteTs = remoteMeta[k] ?? 0;
    const localTs = localMeta[k] ?? 0;
    if (localTs > remoteTs) continue; // this device's change is newer — keep it
    await putSettingRaw(k, v);
    mergedMeta[k] = Math.max(remoteTs, localTs);
  }
  await setSettingsMeta(mergedMeta);
}

export async function downloadBackup(): Promise<void> {
  const blob = new Blob([await exportBackup()], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `kotoba-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

/** Merge a backup in; for cards present on both sides the newer review wins. */
export async function importBackup(json: string): Promise<{ cards: number; reviews: number }> {
  const backup = JSON.parse(json) as Backup;
  if (backup.version !== 1 || !Array.isArray(backup.cards)) throw new Error('Not a Kotoba backup file');
  const existing = new Map((await getAllCards()).map((c) => [c.wordId, c]));
  let cards = 0;
  for (const row of backup.cards) {
    const cur = existing.get(row.wordId);
    const incoming = row.card.last_review ? new Date(row.card.last_review).getTime() : 0;
    const current = cur?.card.last_review ? new Date(cur.card.last_review).getTime() : -1;
    if (!cur || incoming > current) {
      await putCard(row);
      cards++;
    }
  }
  for (const r of backup.reviews ?? []) await logReview(r);
  for (const [k, v] of Object.entries(backup.settings ?? {})) {
    // A restore is an explicit user action: setSetting stamps each key "now",
    // so don't also copy the backup's stale stamps over them.
    if (k === SETTINGS_META_KEY) continue;
    await setSetting(k, v);
  }
  return { cards, reviews: backup.reviews?.length ?? 0 };
}
