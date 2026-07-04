// One-off: apply the human-reviewed corrections file to the jlpt-n5 sentence
// candidates and decks, then emit a "remaining" review of what still needs a
// human decision.
//
//   npx tsx tools/apply-n5-review.ts <corrected-review.md>
//
// The corrections file has three sections:
//   Flagged (yes/revise/reject/flag per row, corrected JA/EN/cloze given)
//   Needs manual authoring (authored sentences with word ids)
//   Auto-approved scan (all yes; some carry corrected cloze / reading fixes)
// It also surfaces deck-level bugs: loanword kana with the long vowel expanded
// (たくしい for タクシー) — fixed systematically here; kana is the TTS input, so
// gen-audio regenerates those clips via the content-hash manifest.

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { toHiragana, toRomaji } from 'wanakana';
import { moraClipKeys, segmentMora } from '../src/matching/mora';
import type { Deck } from '../src/types';
import { checkVocab, clozeSurfacePresent, formsOf } from './sentence-validate';
import { buildTokenizer, clozeMatchesTarget, countOccurrences, decksDir, draftsDir, filterOffendersByReading, loadDeck, whitelistForms, type Tokenizer } from './pipeline/lib';

const sentenceId = (wordId: string, textJa: string): string =>
  's-' + createHash('sha1').update(`${wordId}|${textJa}`).digest('hex').slice(0, 8);

interface Candidate {
  id: string; wordId: string; textJa: string; readingKana: string; textEn: string;
  clozeSurface: string; clozeReading: string; valid: boolean; offenders: string[];
  approved: boolean; clozeEligible?: boolean;
  scores?: Record<string, number | string | undefined>;
}

interface Remaining { kind: string; word: string; textJa: string; note: string }

// ---------- markdown parsing ----------

function cells(line: string): string[] {
  return line.replace(/^\|/, '').replace(/\|\s*$/, '').split('|').map((c) => c.trim());
}

function parseSections(md: string): { flagged: string[][]; manual: string[][]; auto: string[][] } {
  const out = { flagged: [] as string[][], manual: [] as string[][], auto: [] as string[][] };
  let sec: keyof typeof out | null = null;
  for (const line of md.split('\n')) {
    if (line.startsWith('## Flagged')) sec = 'flagged';
    else if (line.startsWith('## Needs manual')) sec = 'manual';
    else if (line.startsWith('## Auto-approved')) sec = 'auto';
    else if (line.startsWith('## ')) sec = null;
    if (!sec || !line.startsWith('|') || /^\|\s*---/.test(line) || /^\|\s*(word|id)\b/i.test(line.slice(0, 12))) continue;
    out[sec].push(cells(line));
  }
  return out;
}

// ---------- readings / cloze spans ----------

function readingOf(tk: Tokenizer, textJa: string): string {
  return tk.tokenize(textJa).map((t) => (t.reading && t.reading !== '*' ? toHiragana(t.reading) : t.surface_form)).join('');
}

/** Find the surface span of `textJa` whose reading is `clozeReading`. */
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

// ---------- deck loanword-kana repair ----------

/** Expand ー to the preceding vowel (たくしー → たくしい) — the corruption shape. */
function vowelExpand(kana: string): string {
  let out = '';
  for (const ch of kana) {
    if (ch === 'ー' && out.length > 0) {
      const prev = out[out.length - 1];
      const r = toRomaji(prev);
      const v = 'aiueo'.includes(r[r.length - 1]) ? r[r.length - 1] : 'a';
      out += toHiragana(v);
    } else out += ch;
  }
  return out;
}

const KANA_ONLY = /^[ぁ-ゖー]+$/;

function fixDeckKana(deck: Deck): Array<{ id: string; from: string; to: string }> {
  const fixes: Array<{ id: string; from: string; to: string }> = [];
  for (const w of deck.words) {
    const kata = w.written.find((f) => /[ァ-ヶー]/.test(f) && f.includes('ー'));
    if (!kata) continue;
    const expected = toHiragana(kata.normalize('NFKC'));
    if (!KANA_ONLY.test(expected) || expected === w.kana) continue;
    if (vowelExpand(expected) !== w.kana) continue; // only the known corruption shape
    fixes.push({ id: w.id, from: w.kana, to: expected });
    const moraKana = segmentMora(expected);
    w.written = w.written.map((f) => (f === w.kana ? expected : f));
    w.kana = expected;
    w.romaji = toRomaji(expected);
    w.moraKana = moraKana;
    w.mora = moraClipKeys(moraKana);
  }
  return fixes;
}

// ---------- main ----------

async function main(): Promise<void> {
  const mdPath = process.argv[2];
  if (!mdPath) throw new Error('usage: apply-n5-review <corrected-review.md>');
  const { flagged, manual, auto } = parseSections(readFileSync(mdPath, 'utf8'));
  console.log(`parsed: flagged=${flagged.length} manual=${manual.length} auto=${auto.length}`);

  const tk = await buildTokenizer();
  const remaining: Remaining[] = [];

  // 1. Deck repair (all decks): loanword kana + written forms still carrying
  //    the literal "川;河" semicolon corruption (split into real variants).
  for (const deckId of ['jlpt-n5', 'jlpt-n4', 'n5-starter']) {
    const path = join(decksDir, `${deckId}.json`);
    const deck = JSON.parse(readFileSync(path, 'utf8')) as Deck;
    const fixes = fixDeckKana(deck);
    let splitCount = 0;
    for (const w of deck.words) {
      if (w.written.some((f) => f.includes(';') || f.includes('；'))) {
        w.written = [...new Set(w.written.flatMap((f) => f.split(/[;；]/).map((p) => p.trim()).filter(Boolean)))];
        splitCount++;
      }
    }
    if (fixes.length || splitCount) {
      writeFileSync(path, JSON.stringify(deck, null, 1));
      console.log(`${deckId}: kana fixes ${fixes.length} (${fixes.map((f) => `${f.from}→${f.to}`).join(', ') || '-'}), written-form splits ${splitCount}`);
    }
  }

  const deck = loadDeck('jlpt-n5');
  const words = new Map(deck.words.map((w) => [w.id, w]));
  const allowed = whitelistForms(['jlpt-n5']);

  const candPath = join(draftsDir, 'jlpt-n5.candidates.json');
  const candidates = JSON.parse(readFileSync(candPath, 'utf8')) as Candidate[];
  const byKey = new Map(candidates.map((c) => [`${words.get(c.wordId)?.prompt.toLowerCase()}|${c.textJa}`, c]));

  const recompute = (c: Candidate): void => {
    c.readingKana = readingOf(tk, c.textJa);
  };

  // 2. Flagged section: word | original | corrected | EN | reading | recommendation | approve?
  let applied = { yes: 0, revise: 0, reject: 0, flag: 0, unmatched: 0 };
  for (const row of flagged) {
    if (row.length < 7) continue;
    const [prompt, orig, corrected, en, reading, note, rec0] = row;
    const rec = rec0.split(/\s/)[0].toLowerCase();
    const c = byKey.get(`${prompt.toLowerCase()}|${orig}`);
    if (!c) {
      applied.unmatched++;
      remaining.push({ kind: 'unmatched-row', word: prompt, textJa: orig, note: `couldn't match to a candidate (${rec})` });
      continue;
    }
    if (rec === 'yes') {
      c.approved = true;
      if (reading && reading !== c.clozeReading) c.clozeReading = reading;
      if (/read|furigana|ふりがな|→/.test(note)) recompute(c);
      applied.yes++;
    } else if (rec === 'revise') {
      c.textJa = corrected;
      c.textEn = en;
      c.clozeReading = reading || c.clozeReading;
      const surf = c.textJa.includes(c.clozeSurface) && countOccurrences(c.textJa, c.clozeSurface) === 1
        ? c.clozeSurface
        : findSurface(tk, c.textJa, c.clozeReading);
      if (!surf) {
        c.approved = false;
        remaining.push({ kind: 'revise-needs-cloze', word: prompt, textJa: corrected, note: `couldn't locate cloze span for "${c.clozeReading}"` });
        continue;
      }
      c.clozeSurface = surf;
      c.id = sentenceId(c.wordId, c.textJa);
      recompute(c);
      c.approved = true;
      applied.revise++;
    } else if (rec === 'reject') {
      c.approved = false;
      remaining.push({ kind: 'reject (content issue)', word: prompt, textJa: orig, note });
      applied.reject++;
    } else if (rec === 'flag') {
      c.approved = false;
      remaining.push({ kind: 'flag (needs decision)', word: prompt, textJa: orig, note });
      applied.flag++;
    }
  }
  console.log('flagged applied:', applied);

  // 3. Auto section: word | JA | EN | cloze | reading fix? | judge | use | approve?
  let autoFixes = 0;
  for (const row of auto) {
    if (row.length < 8) continue;
    const [prompt, ja, , cloze, readingFix] = row;
    const c = byKey.get(`${prompt.toLowerCase()}|${ja}`);
    if (!c) continue;
    let touched = false;
    if (cloze && cloze !== c.clozeReading) {
      c.clozeReading = cloze;
      touched = true;
    }
    if (readingFix) {
      recompute(c);
      touched = true;
    }
    if (touched) autoFixes++;
  }
  console.log(`auto-section corrections applied: ${autoFixes}`);

  // 4. Manual section: id — word (kana) | JA | cloze reading | EN/note
  let added = 0;
  for (const row of manual) {
    if (row.length < 4) continue;
    const idMatch = /^(n5-[0-9a-f]{8})/.exec(row[0]);
    if (!idMatch) continue;
    const wordId = idMatch[1];
    const [, textJa, clozeReading, enRaw] = row;
    const textEn = enRaw.split('(')[0].trim();
    const word = words.get(wordId);
    if (!word) {
      remaining.push({ kind: 'manual-unknown-word', word: row[0], textJa, note: 'word id not in deck' });
      continue;
    }
    const surf = findSurface(tk, textJa, clozeReading);
    if (!surf) {
      remaining.push({ kind: 'manual-needs-cloze', word: word.prompt, textJa, note: `couldn't locate cloze span for "${clozeReading}"` });
      continue;
    }
    candidates.push({
      id: sentenceId(wordId, textJa), wordId, textJa, readingKana: readingOf(tk, textJa), textEn,
      clozeSurface: surf, clozeReading, valid: true, offenders: [], approved: true, clozeEligible: true,
    });
    added++;
  }
  console.log(`manual sentences added: ${added}`);

  // 5. Revalidate everything approved. Cloze-correctness failures demote (the
  //    quiz would rate the wrong card); vocab-only findings on human-approved
  //    content ship anyway — the reviewer outranks the i+1 whitelist — but are
  //    listed as FYI (proper names for さん, 日本語, etc.).
  let demoted = 0;
  let vocabFyi = 0;
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
      vocabFyi++;
      remaining.push({ kind: 'FYI: shipped with off-whitelist words (human-approved)', word: word.prompt, textJa: c.textJa, note: offenders.join(' ') });
    }
  }
  console.log(`demoted (cloze correctness): ${demoted} | shipped with vocab FYI: ${vocabFyi}`);

  writeFileSync(candPath, JSON.stringify(candidates, null, 2) + '\n');

  // 6. Remaining-review file.
  const groups = new Map<string, Remaining[]>();
  for (const r of remaining) (groups.get(r.kind) ?? groups.set(r.kind, []).get(r.kind)!).push(r);
  const md: string[] = [
    '# jlpt-n5 — remaining review items', '',
    'Everything else from the corrected review has been applied and republished.',
    'These need a human decision (mostly headword/gloss-level, not sentence-level).', '',
  ];
  for (const [kind, rows] of groups) {
    md.push(`## ${kind} (${rows.length})`, '', '| word | sentence | note |', '| --- | --- | --- |');
    for (const r of rows) md.push(`| ${r.word} | ${r.textJa} | ${r.note} |`);
    md.push('');
  }
  const outPath = join(draftsDir, 'jlpt-n5.review.remaining.md');
  writeFileSync(outPath, md.join('\n'));
  console.log(`remaining items: ${remaining.length} → ${outPath}`);
}

void main();
