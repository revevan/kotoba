// C2 sync/IDB hardening: blob versioning, unknown-key passthrough, and the
// newer-wins settings merge — run against a real IndexedDB implementation.

import 'fake-indexeddb/auto';
import { IDBFactory } from 'fake-indexeddb';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { newCard } from '../src/srs/scheduler';
import type { SyncData } from '../src/data/backup';

// Fresh DB + fresh module state (memoized connection, captured remote extras)
// for every test.
beforeEach(() => {
  globalThis.indexedDB = new IDBFactory();
  vi.resetModules();
});

const load = () => Promise.all([import('../src/data/backup'), import('../src/data/db')]).then(([b, d]) => ({ ...b, ...d }));

const cardRow = (wordId: string, lastReview?: Date) => ({
  wordId,
  deckId: 'n5-starter',
  card: { ...newCard(), ...(lastReview ? { last_review: lastReview } : {}) },
  addedAt: 1000,
});

describe('sync blob shape', () => {
  it('exports a version field and per-key settings stamps', async () => {
    const m = await load();
    await m.setSetting('voiceEcho', false);
    const blob = await m.exportSyncData();
    expect(blob.version).toBe(m.SYNC_VERSION);
    expect(blob.settings.voiceEcho).toBe(false);
    const meta = blob.settings[m.SETTINGS_META_KEY] as Record<string, number>;
    expect(meta.voiceEcho).toBeGreaterThan(0);
  });

  it('preserves unknown top-level keys and a higher remote version across pull → push', async () => {
    const m = await load();
    const remote = {
      version: 5,
      cards: [],
      settings: {},
      futureFeature: { enabled: true },
    } as SyncData;
    await m.importSyncData(remote);
    const pushed = await m.exportSyncData();
    expect(pushed.futureFeature).toEqual({ enabled: true });
    expect(pushed.version).toBe(5); // never downgrade the marker below what was stored
  });

  it('legacy blobs (no version, no stamps) still merge', async () => {
    const m = await load();
    await m.importSyncData({ cards: [cardRow('w1')], settings: { newPerDay: 5 } } as SyncData);
    expect((await m.getAllCards()).map((c) => c.wordId)).toEqual(['w1']);
    expect(await m.getSetting('newPerDay', 10)).toBe(5);
  });
});

describe('settings merge (newer wins)', () => {
  it('keeps a local change that is newer than the remote blob', async () => {
    const m = await load();
    await m.setSetting('voiceEcho', false); // stamped now
    await m.importSyncData({
      cards: [],
      settings: { voiceEcho: true, [m.SETTINGS_META_KEY]: { voiceEcho: 1 } }, // remote stamp: ancient
    } as SyncData);
    expect(await m.getSetting('voiceEcho', true)).toBe(false);
  });

  it('applies a remote change that is newer than the local one', async () => {
    const m = await load();
    await m.setSetting('voiceEcho', false);
    const future = Date.now() + 60_000;
    await m.importSyncData({
      cards: [],
      settings: { voiceEcho: true, [m.SETTINGS_META_KEY]: { voiceEcho: future } },
    } as SyncData);
    expect(await m.getSetting('voiceEcho', false)).toBe(true);
    // …and the applied value keeps the remote stamp, so a later pull of the
    // same blob doesn't flap.
    expect((await m.getSettingsMeta()).voiceEcho).toBe(future);
  });

  it('unstamped remote values apply over unstamped local ones (legacy behavior)', async () => {
    const m = await load();
    await m.putSettingRaw('announcerJa', false); // local value with no stamp
    await m.importSyncData({ cards: [], settings: { announcerJa: true } } as SyncData);
    expect(await m.getSetting('announcerJa', false)).toBe(true);
  });

  it('unknown settings keys from newer clients survive the merge and re-export', async () => {
    const m = await load();
    await m.importSyncData({ cards: [], settings: { shinyNewToggle: 'on' } } as SyncData);
    expect((await m.exportSyncData()).settings.shinyNewToggle).toBe('on');
  });
});

describe('card merge', () => {
  it('newer last_review wins per card', async () => {
    const m = await load();
    await m.putCard(cardRow('w1', new Date('2026-08-20')));
    await m.putCard(cardRow('w2', new Date('2026-08-25')));
    await m.importSyncData({
      cards: [cardRow('w1', new Date('2026-08-24')), cardRow('w2', new Date('2026-08-21'))],
      settings: {},
    } as SyncData);
    const byId = new Map((await m.getAllCards()).map((c) => [c.wordId, c]));
    expect(new Date(byId.get('w1')!.card.last_review!).toISOString()).toContain('2026-08-24'); // remote newer
    expect(new Date(byId.get('w2')!.card.last_review!).toISOString()).toContain('2026-08-25'); // local newer
  });
});

describe('backup restore', () => {
  it('round-trips settings without corrupting the stamps map', async () => {
    const m = await load();
    await m.setSetting('newPerDay', 7);
    const json = await m.exportBackup();
    // Fresh device
    globalThis.indexedDB = new IDBFactory();
    vi.resetModules();
    const m2 = await load();
    await m2.importBackup(json);
    expect(await m2.getSetting('newPerDay', 10)).toBe(7);
    // The stamps map is a map again (not clobbered by the backup's copy).
    expect(typeof (await m2.getSettingsMeta()).newPerDay).toBe('number');
  });
});
