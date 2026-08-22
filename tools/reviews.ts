// List and manage content-review verdicts from the /review page (kotoba-api).
//
//   npm run reviews                          — list open (flagged) items with word context
//   npm run reviews -- --status fixed        — list items waiting on reviewer re-check
//   npm run reviews -- --status all          — everything
//   npm run reviews -- --fix n5-abc123 -m "regenerated ja clip"  — mark fixed (re-queues for re-check)
//   npm run reviews -- --close n5-abc123     — close without re-check
//   npm run reviews -- --verify n5-abc123    — mark verified directly
//
// Rejected shorts (the /review Shorts tab) are listed alongside open flags:
//   npm run reviews -- --short-rerender <shortId>  — corpus fixed, same ids: re-render Monday + re-queue
//   npm run reviews -- --short-drop <shortId>      — not coming back (sentence replaced / not worth it)
//
// Needs KOTOBA_ADMIN_SECRET in .env (matches the worker's ADMIN_SECRET secret).

import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const API = 'https://kotoba-api.evanwkennedy.workers.dev';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// Minimal .env loader (repo has no dotenv dependency).
function loadEnv(): Record<string, string> {
  const path = join(root, '.env');
  const env: Record<string, string> = {};
  if (existsSync(path)) {
    for (const line of readFileSync(path, 'utf8').split('\n')) {
      const m = /^([A-Z0-9_]+)=(.*)$/.exec(line.trim());
      if (m) env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
    }
  }
  return { ...env, ...process.env } as Record<string, string>;
}

interface Row {
  wordId: string;
  deck: string;
  verdict: string;
  flags: { rows?: string[]; kinds?: string[] } | null;
  note: string | null;
  status: string;
  fixNote: string | null;
  updatedAt: number;
}

interface ShortRow {
  id: string;
  format: string;
  wordId: string;
  sentenceId: string;
  title: string;
  status: string;
  note: string | null;
  reviewedBy: string | null;
  reviewedAt: number | null;
  updatedAt: number;
}

interface WordCtx {
  english: string;
  kana: string;
  written: string[];
  sentences: Map<string, { textJa: string; textEn: string }>;
}

/** wordId → display context, from the local deck + sentence JSON. */
function loadContext(): Map<string, WordCtx> {
  const ctx = new Map<string, WordCtx>();
  const index = JSON.parse(readFileSync(join(root, 'public/decks/index.json'), 'utf8')) as { id: string; file: string }[];
  for (const info of index) {
    const deck = JSON.parse(readFileSync(join(root, 'public/decks', info.file), 'utf8'));
    const senPath = join(root, 'public/sentences', `${info.id}.json`);
    const pool = existsSync(senPath) ? JSON.parse(readFileSync(senPath, 'utf8')) : {};
    for (const w of deck.words) {
      if (ctx.has(w.id)) continue;
      const sentences = new Map<string, { textJa: string; textEn: string }>();
      for (const s of pool[w.id] ?? []) sentences.set(s.id, { textJa: s.textJa, textEn: s.textEn });
      ctx.set(w.id, { english: w.english, kana: w.kana, written: w.written, sentences });
    }
  }
  return ctx;
}

function describeFlagRow(key: string, w: WordCtx | undefined): string {
  if (key === 'en') return 'EN word audio/text';
  if (key === 'ja') return 'JA word audio/text';
  if (key.startsWith('alt:')) return `alt reading ${key.slice(4)}`;
  if (key.startsWith('sen:')) {
    const s = w?.sentences.get(key.slice(4));
    return s ? `sentence 「${s.textJa}」 (${s.textEn})` : `sentence ${key.slice(4)}`;
  }
  return key;
}

async function main() {
  const secret = loadEnv().KOTOBA_ADMIN_SECRET;
  if (!secret) throw new Error('KOTOBA_ADMIN_SECRET missing from .env');
  const headers = { Authorization: `Bearer ${secret}`, 'Content-Type': 'application/json' };
  const args = process.argv.slice(2);

  const shortIdx = args.findIndex((a) => a === '--short-rerender' || a === '--short-drop');
  if (shortIdx !== -1) {
    const status = args[shortIdx] === '--short-rerender' ? 'rerender' : 'dropped';
    const id = args[shortIdx + 1];
    if (!id) throw new Error(`${args[shortIdx]} needs a short id`);
    const r = await fetch(`${API}/admin/shorts/${id}/status`, { method: 'POST', headers, body: JSON.stringify({ status }) });
    console.log(`${id} → ${await r.text()}`);
    return;
  }

  const actionIdx = args.findIndex((a) => a === '--fix' || a === '--close' || a === '--verify');
  if (actionIdx !== -1) {
    const status = { '--fix': 'fixed', '--close': 'closed', '--verify': 'verified' }[args[actionIdx]]!;
    const wordId = args[actionIdx + 1];
    if (!wordId) throw new Error(`${args[actionIdx]} needs a wordId`);
    const mIdx = args.indexOf('-m');
    const fixNote = mIdx !== -1 ? args[mIdx + 1] : undefined;
    const r = await fetch(`${API}/admin/reviews/${wordId}/status`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ status, ...(fixNote ? { fixNote } : {}) }),
    });
    console.log(`${wordId} → ${await r.text()}`);
    return;
  }

  const statusIdx = args.indexOf('--status');
  const want = statusIdx !== -1 ? args[statusIdx + 1] : 'open';
  const r = await fetch(`${API}/admin/reviews?status=${want}`, { headers });
  if (!r.ok) throw new Error(`list failed (${r.status})`);
  const rows = (await r.json()) as Row[];
  const sr = want === 'open' ? await fetch(`${API}/admin/shorts?status=rejected`, { headers }) : null;
  const shorts = sr?.ok ? ((await sr.json()) as ShortRow[]) : [];

  if (rows.length === 0 && shorts.length === 0) {
    console.log(want === 'open' ? 'No open flags. 🎉' : `No reviews with status '${want}'.`);
    return;
  }

  const ctx = loadContext();
  if (shorts.length > 0) {
    console.log(`🎬 Rejected shorts (${shorts.length})\n`);
    for (const sh of shorts) {
      const w = ctx.get(sh.wordId);
      const sen = w?.sentences.get(sh.sentenceId);
      const when = new Date(sh.reviewedAt ?? sh.updatedAt).toISOString().slice(0, 16).replace('T', ' ');
      console.log(`[rejected] ${sh.title}   ${sh.format} · ${sh.id} · ${when}`);
      if (w) console.log(`  word: ${w.written[0]} (${w.kana}) — ${w.english}`);
      if (sen) console.log(`  sentence: 「${sen.textJa}」 (${sen.textEn})`);
      if (sh.note) console.log(`  note: ${sh.note.replace(/\n/g, '\n        ')}`);
      console.log();
    }
    console.log('Resolve: npm run reviews -- --short-rerender <id>  (fixed, same ids)  ·  --short-drop <id>  (replaced / not worth it)\n');
  }
  if (rows.length === 0) return;
  for (const row of rows) {
    const w = ctx.get(row.wordId);
    const when = new Date(row.updatedAt).toISOString().slice(0, 16).replace('T', ' ');
    const head = w ? `${w.english} — ${w.written[0]} (${w.kana})` : row.wordId;
    console.log(`[${row.status}] ${head}   ${row.deck} · ${row.wordId} · ${when}`);
    for (const key of row.flags?.rows ?? []) console.log(`  ⚑ ${describeFlagRow(key, w)}`);
    if (row.flags?.kinds?.length) console.log(`  kinds: ${row.flags.kinds.join(', ')}`);
    if (row.note) console.log(`  note: ${row.note.replace(/\n/g, '\n        ')}`);
    if (row.fixNote) console.log(`  fix:  ${row.fixNote}`);
    console.log();
  }
  console.log(`${rows.length} item(s). Mark: npm run reviews -- --fix <wordId> -m "what changed"`);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
