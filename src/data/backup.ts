import { getAllCards, getAllReviews, getAllSettings, logReview, putCard, setSetting, type CardRow, type ReviewRow } from './db';

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
  for (const [k, v] of Object.entries(backup.settings ?? {})) await setSetting(k, v);
  return { cards, reviews: backup.reviews?.length ?? 0 };
}
