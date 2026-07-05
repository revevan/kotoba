// One-off sweep: repair the katakana long-vowel reading bug (びいる for びーる)
// across every shipped sentence pool and candidates file. The sentences
// themselves are fine — readings are display metadata (audio synthesizes
// textJa) — so no ids change and no audio regenerates.
//
//   npx tsx tools/fix-loanword-readings.ts

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { toHiragana, toRomaji } from 'wanakana';
import { moraClipKeys, segmentMora } from '../src/matching/mora';
import type { Deck, Sentence } from '../src/types';
import { decksDir, draftsDir, fixLoanwordReadings, sentencesDir, vowelExpansions } from './pipeline/lib';

interface SentenceLike {
  textJa: string;
  readingKana: string;
  clozeSurface: string;
  clozeReading: string;
}

function repair(s: SentenceLike): number {
  let n = 0;
  const reading = fixLoanwordReadings(s.textJa, s.readingKana);
  if (reading !== s.readingKana) {
    s.readingKana = reading;
    n++;
  }
  const cloze = fixLoanwordReadings(s.clozeSurface, s.clozeReading);
  if (cloze !== s.clozeReading) {
    s.clozeReading = cloze;
    n++;
  }
  return n;
}

let total = 0;

// Deck kana: the build converted katakana readings with wanakana's default
// (ー-expanding) toHiragana, so loanword quiz answers and their TTS input are
// wrong (タクシー stored as たくしい). Fix kana + derived fields; gen-audio's
// content-hash manifest re-synthesizes the affected ja/ja-slow clips.
for (const f of readdirSync(decksDir).filter((f) => f.endsWith('.json') && f !== 'index.json')) {
  const path = join(decksDir, f);
  const deck = JSON.parse(readFileSync(path, 'utf8')) as Deck;
  let fixed = 0;
  for (const w of deck.words) {
    const kata = w.written.find((x) => /[ァ-ヶ]/.test(x) && x.includes('ー'));
    if (!kata) continue;
    const good = toHiragana(kata.normalize('NFKC'), { convertLongVowelMark: false });
    if (!/^[ぁ-ゖー]+$/.test(good) || good === w.kana) continue;
    if (!vowelExpansions(good).includes(w.kana)) continue;
    w.written = w.written.map((x) => (x === w.kana ? good : x));
    w.kana = good;
    w.romaji = toRomaji(good);
    w.moraKana = segmentMora(good);
    w.mora = moraClipKeys(w.moraKana);
    fixed++;
    for (const alt of w.alts ?? []) {
      const altGood = w.written
        .filter((x) => /[ァ-ヶ]/.test(x) && x.includes('ー'))
        .map((x) => toHiragana(x.normalize('NFKC'), { convertLongVowelMark: false }))
        .find((g) => vowelExpansions(g).includes(alt.kana));
      if (altGood) {
        alt.kana = altGood;
        alt.romaji = toRomaji(altGood);
      }
    }
  }
  if (fixed) writeFileSync(path, JSON.stringify(deck, null, 1));
  console.log(`deck ${f}: ${fixed} kana fixes`);
  total += fixed;
}

for (const f of readdirSync(sentencesDir).filter((f) => f.endsWith('.json'))) {
  const path = join(sentencesDir, f);
  const pool = JSON.parse(readFileSync(path, 'utf8')) as Record<string, Sentence[]>;
  let fixed = 0;
  for (const list of Object.values(pool)) for (const s of list) fixed += repair(s);
  if (fixed) writeFileSync(path, JSON.stringify(pool, null, 2) + '\n');
  console.log(`${f}: ${fixed} reading fixes`);
  total += fixed;
}

for (const f of readdirSync(draftsDir).filter((f) => f.endsWith('.candidates.json'))) {
  const path = join(draftsDir, f);
  if (!existsSync(path)) continue;
  const candidates = JSON.parse(readFileSync(path, 'utf8')) as SentenceLike[];
  let fixed = 0;
  for (const c of candidates) fixed += repair(c);
  if (fixed) writeFileSync(path, JSON.stringify(candidates, null, 2) + '\n');
  console.log(`${f}: ${fixed} reading fixes`);
  total += fixed;
}

console.log(`total: ${total}`);
