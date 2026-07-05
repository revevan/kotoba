// Apply a structured review-corrections JSON to a deck's sentence candidates.
// Successor to apply-n5-review.ts (which parsed the markdown handoff); the
// reviewer now emits machine-readable corrections:
//
//   { deck, flagged: [{word, original_ja, corrected_ja, en, reading, action,
//     set_approved, reason}], needs_authoring: [{id, suggested_ja, reading, en}],
//     auto_approved_reading_fixes: [{ja, reading_bug, reading_fixed}] }
//
//   npx tsx tools/apply-review.ts <corrections.json>
//
// actions: yes/keep = ship (with reading/cloze fix); revise = ship corrected
// sentence; reject = hold for a content decision (goes to the remaining file).
// After applying, everything approved is revalidated: cloze-correctness
// failures demote; vocab-only findings ship with an FYI (human outranks i+1).

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { toHiragana } from 'wanakana';
import { checkVocab, clozeSurfacePresent, formsOf } from './sentence-validate';
import { buildTokenizer, clozeMatchesTarget, countOccurrences, draftsDir, filterOffendersByReading, loadDeck, whitelistForms, type Tokenizer } from './pipeline/lib';
import { LEVELS } from './pipeline/config';

const sentenceId = (wordId: string, textJa: string): string =>
  's-' + createHash('sha1').update(`${wordId}|${textJa}`).digest('hex').slice(0, 8);

interface Candidate {
  id: string; wordId: string; textJa: string; readingKana: string; textEn: string;
  clozeSurface: string; clozeReading: string; valid: boolean; offenders: string[];
  approved: boolean; clozeEligible?: boolean;
  scores?: Record<string, number | string | undefined>;
}

interface Corrections {
  deck: string;
  flagged: Array<{ word: string; original_ja: string; corrected_ja: string; en: string; reading: string; action: string; set_approved?: boolean; reason?: string }>;
  needs_authoring: Array<{ id: string; word?: string; suggested_ja: string; reading: string; en: string }>;
  auto_approved_reading_fixes: Array<{ ja: string; reading_bug: string; reading_fixed: string }>;
}

interface Remaining { kind: string; word: string; textJa: string; note: string }

function readingOf(tk: Tokenizer, textJa: string): string {
  return tk.tokenize(textJa).map((t) => (t.reading && t.reading !== '*' ? toHiragana(t.reading) : t.surface_form)).join('');
}

function findSurface(tk: Tokenizer, textJa: string, clozeReading: string): string | null {
  if (textJa.includes(clozeReading)) return clozeReading;
  const target = toHiragana(clozeReading);
  const tokens = tk.tokenize(textJa);
  for (let i = 0; i < tokens.length; i++) {
    let acc = '';
    let surf = '';
    for (let j = i; j < tokens.length; j++) {
      acc += tokens[j].reading && tokens[j].reading !== '*' ? toHiragana(tokens[j].reading!) : tokens[j].surface_form;
      surf += tokens[j].surface_form;
      if (acc === target) return surf;
      if (acc.length > target.length) break;
    }
  }
  return null;
}

async function main(): Promise<void> {
  const path = process.argv[2];
  if (!path) throw new Error('usage: apply-review <corrections.json>');
  const cor = JSON.parse(readFileSync(path, 'utf8')) as Corrections;
  const deckId = cor.deck;
  if (!LEVELS[deckId]) throw new Error(`unknown deck ${deckId}`);
  console.log(`applying corrections to ${deckId}: flagged=${cor.flagged.length} authoring=${cor.needs_authoring.length} readingFixes=${cor.auto_approved_reading_fixes.length}`);

  const tk = await buildTokenizer();
  const deck = loadDeck(deckId);
  const words = new Map(deck.words.map((w) => [w.id, w]));
  const allowed = whitelistForms(LEVELS[deckId].whitelistDeckIds);
  const remaining: Remaining[] = [];

  const candPath = join(draftsDir, `${deckId}.candidates.json`);
  const candidates = JSON.parse(readFileSync(candPath, 'utf8')) as Candidate[];
  const byKey = new Map(candidates.map((c) => [`${words.get(c.wordId)?.prompt.toLowerCase()}|${c.textJa}`, c]));
  const byJa = new Map<string, Candidate[]>();
  for (const c of candidates) (byJa.get(c.textJa) ?? byJa.set(c.textJa, []).get(c.textJa)!).push(c);

  // 1. Flagged rows.
  const applied = { yes: 0, keep: 0, revise: 0, reject: 0, unmatched: 0 };
  for (const row of cor.flagged) {
    const c = byKey.get(`${row.word.toLowerCase()}|${row.original_ja}`) ?? byJa.get(row.original_ja)?.[0];
    if (!c) {
      applied.unmatched++;
      remaining.push({ kind: 'unmatched row', word: row.word, textJa: row.original_ja, note: `no candidate matched (${row.action})` });
      continue;
    }
    const action = row.action.toLowerCase();
    if (action === 'reject') {
      c.approved = false;
      remaining.push({ kind: 'reject — needs a content decision', word: row.word, textJa: row.original_ja, note: `${row.reason ?? ''} | suggestion: ${row.corrected_ja}` });
      applied.reject++;
      continue;
    }
    if (action === 'revise' && row.corrected_ja && row.corrected_ja !== c.textJa) {
      c.textJa = row.corrected_ja;
      c.textEn = row.en || c.textEn;
      c.id = sentenceId(c.wordId, c.textJa);
      c.readingKana = readingOf(tk, c.textJa);
    }
    if (row.reading && row.reading !== c.clozeReading) c.clozeReading = row.reading;
    if (!c.textJa.includes(c.clozeSurface) || countOccurrences(c.textJa, c.clozeSurface) !== 1) {
      const surf = findSurface(tk, c.textJa, c.clozeReading);
      if (!surf) {
        c.approved = false;
        remaining.push({ kind: 'needs cloze span', word: row.word, textJa: c.textJa, note: `couldn't locate "${c.clozeReading}"` });
        continue;
      }
      c.clozeSurface = surf;
    }
    c.approved = row.set_approved ?? true;
    applied[action === 'yes' ? 'yes' : action === 'keep' ? 'keep' : 'revise']++;
  }
  console.log('flagged applied:', applied);

  // 2. Authored sentences for the manual queue.
  let added = 0;
  for (const row of cor.needs_authoring) {
    const word = words.get(row.id);
    if (!word) {
      remaining.push({ kind: 'authoring — unknown word id', word: row.word ?? row.id, textJa: row.suggested_ja, note: row.id });
      continue;
    }
    const surf = findSurface(tk, row.suggested_ja, row.reading);
    if (!surf) {
      remaining.push({ kind: 'authoring — needs cloze span', word: word.prompt, textJa: row.suggested_ja, note: `couldn't locate "${row.reading}"` });
      continue;
    }
    candidates.push({
      id: sentenceId(row.id, row.suggested_ja), wordId: row.id, textJa: row.suggested_ja,
      readingKana: readingOf(tk, row.suggested_ja), textEn: row.en.split('(')[0].trim(),
      clozeSurface: surf, clozeReading: row.reading, valid: true, offenders: [], approved: true, clozeEligible: true,
    });
    added++;
  }
  console.log(`authored sentences added: ${added}`);

  // 3. Reading-only fixes in the auto-approved pool.
  let fixed = 0;
  for (const row of cor.auto_approved_reading_fixes) {
    for (const c of byJa.get(row.ja) ?? []) {
      if (c.readingKana.includes(row.reading_bug)) {
        c.readingKana = c.readingKana.split(row.reading_bug).join(row.reading_fixed);
        fixed++;
      }
      if (c.clozeReading.includes(row.reading_bug)) c.clozeReading = c.clozeReading.split(row.reading_bug).join(row.reading_fixed);
    }
  }
  console.log(`reading fixes applied: ${fixed}`);

  // 4. Revalidate: cloze-correctness demotes; vocab-only ships with an FYI.
  let demoted = 0;
  let fyi = 0;
  for (const c of candidates) {
    if (!c.approved) continue;
    const word = words.get(c.wordId);
    if (!word) continue;
    const hard: string[] = [];
    if (!clozeSurfacePresent(c.textJa, c.clozeSurface)) hard.push('cloze surface not in sentence');
    else if (countOccurrences(c.textJa, c.clozeSurface) !== 1) hard.push('cloze appears more than once');
    else if (!clozeMatchesTarget(tk, c, word)) hard.push('cloze is not the target word');
    if (hard.length) {
      c.approved = false;
      demoted++;
      remaining.push({ kind: 'failed revalidation (cloze correctness)', word: word.prompt, textJa: c.textJa, note: hard.join('; ') });
      continue;
    }
    const tokens = tk.tokenize(c.textJa);
    const vocab = checkVocab(tokens, allowed, formsOf(word));
    const offenders = vocab.ok ? [] : filterOffendersByReading(tk, tokens, vocab.offenders, allowed);
    if (offenders.length) {
      fyi++;
      remaining.push({ kind: 'FYI: shipped with off-whitelist words (human-approved)', word: word.prompt, textJa: c.textJa, note: offenders.join(' ') });
    }
  }
  console.log(`demoted (cloze correctness): ${demoted} | shipped with vocab FYI: ${fyi}`);

  writeFileSync(candPath, JSON.stringify(candidates, null, 2) + '\n');

  const groups = new Map<string, Remaining[]>();
  for (const r of remaining) (groups.get(r.kind) ?? groups.set(r.kind, []).get(r.kind)!).push(r);
  const md: string[] = [`# ${deckId} — remaining review items`, ''];
  for (const [kind, rows] of groups) {
    md.push(`## ${kind} (${rows.length})`, '', '| word | sentence | note |', '| --- | --- | --- |');
    for (const r of rows) md.push(`| ${r.word} | ${r.textJa} | ${r.note} |`);
    md.push('');
  }
  const outPath = join(draftsDir, `${deckId}.review.remaining.md`);
  writeFileSync(outPath, md.join('\n'));
  console.log(`remaining items: ${remaining.length} → ${outPath}`);
}

void main();
