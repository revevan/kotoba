// Repairs the cloze-mechanical failures listed in *.review.remaining.md:
// sentences whose content a human already approved but which shipped nowhere
// because the tooling couldn't locate/validate the cloze span.
//
//   npx tsx tools/repair-cloze.ts            dry run (report only)
//   npx tsx tools/repair-cloze.ts --write    update candidates.json files
//
// Afterwards: npm run gen-sentences -- --approve jlpt-n5 jlpt-n4 jlpt-n3
// then gen-audio + sync-audio-r2.

import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { toHiragana } from 'wanakana';
import { formsOf } from './sentence-validate';
import { buildTokenizer, countOccurrences, draftsDir, loadDeck, type Tokenizer } from './pipeline/lib';
import type { Word } from '../src/types';

interface Candidate {
  id: string;
  wordId: string;
  textJa: string;
  readingKana: string;
  textEn: string;
  clozeSurface: string;
  clozeReading: string;
  valid: boolean;
  offenders: string[];
  approved: boolean;
  clozeEligible?: boolean;
}

const sentenceId = (wordId: string, textJa: string): string =>
  's-' + createHash('sha1').update(`${wordId}|${textJa}`).digest('hex').slice(0, 8);

const kana = (s: string): string => toHiragana(s, { convertLongVowelMark: false });
/** Long-vowel-insensitive form for comparisons (ー → preceding vowel). */
const norm = (s: string): string => toHiragana(kana(s));

// Sections of the remaining.md files that are tooling failures (not content
// decisions — those are in native-review.csv for human review).
const REPAIR_KINDS = [
  'revise-needs-cloze',
  'needs cloze span',
  'failed revalidation (cloze correctness)',
];
const AUTHOR_KINDS = ['manual-needs-cloze', 'authoring — needs cloze span'];

// EN translations for the authored sentences that never made it into
// candidates.json (the original corrections JSONs are gone; these are
// straightforward N-level sentences).
const AUTHORED_EN: Record<string, string> = {
  'この語の意味を調べます。': 'I look up the meaning of this word.',
  '資料をコピーします。': 'I copy the documents.',
  'タクシーで行きます。': 'I go by taxi.',
  'ギターを弾きます。': 'I play the guitar.',
  'フォークで食べます。': 'I eat with a fork.',
  'ボールペンで書きます。': 'I write with a ballpoint pen.',
  '他の店へ行きます。': 'I go to another store.',
  '兄はオートバイで学校へ行きます。': 'My brother goes to school by motorcycle.',
  '寒いのでオーバーを着ます。': "It's cold, so I put on an overcoat.",
  'お客様、こちらへどうぞ。': 'Right this way, sir.',
  '私は緑町に住んでいます。': 'I live in Midori Town.',
  'お湯を沸かしてお茶を入れます。': 'I boil water and make tea.',
  '明日のスケジュールを確認します。': "I check tomorrow's schedule.",
  '卒業のお祝いに時計をもらいました。': 'I received a watch as a graduation gift.',
  '上着を脱いでハンガーに掛けました。': 'I took off my jacket and hung it on a hanger.',
  '運動するとエネルギーを使います。': 'Exercising uses energy.',
  '棚から重い箱を下ろしました。': 'I took a heavy box down from the shelf.',
  '明日は雨が降るかもしれません。': 'It might rain tomorrow.',
  '彼は今も旧姓を使っています。': 'He still uses his former surname.',
  '古い布切れで窓を拭きました。': 'I wiped the window with an old piece of cloth.',
  '資料に説明を加えました。': 'I added an explanation to the materials.',
  'テーブルにコーヒーをこぼしました。': 'I spilled coffee on the table.',
  'このホテルはサービスがいいです。': 'This hotel has good service.',
  'その意見に異はありませんでした。': 'There was no objection to that opinion.',
  '兵士たちは敵に降伏しました。': 'The soldiers surrendered to the enemy.',
  'この花瓶は対で売っています。': 'This vase is sold as a pair.',
  '母は赤ちゃんをそっと抱きました。': 'The mother gently held her baby.',
  '朝は熱いお茶を飲みます。': 'I drink hot tea in the morning.',
  '二つの事件が同時に起こりました。': 'Two incidents happened at the same time.',
  '毎日トレーニングをしています。': 'I train every day.',
  '彼の打率は三割二分です。': 'His batting average is three-twenty.',
  'この本はB5判です。': 'This book is B5-size.',
};

interface Row {
  kind: string;
  word: string;
  textJa: string;
  note: string;
}

function parseRemaining(deckId: string): Row[] {
  const md = readFileSync(join(draftsDir, `${deckId}.review.remaining.md`), 'utf8');
  const rows: Row[] = [];
  let kind = '';
  for (const line of md.split('\n')) {
    const h = /^## (.+?) \(\d+\)/.exec(line);
    if (h) {
      kind = h[1];
      continue;
    }
    if (!line.startsWith('|') || !kind) continue;
    const cells = line.split('|').map((c) => c.trim());
    // cells[0] is '' (leading pipe); word | sentence | note
    if (cells.length < 4 || cells[1] === 'word' || /^-+$/.test(cells[1])) continue;
    rows.push({ kind, word: cells[1], textJa: cells[2], note: cells[3] });
  }
  return rows;
}

/** The kana tail (okurigana) of a written form: 空く → く, 覆う → う. */
function kanaTail(s: string): string {
  const m = /[ぁ-んァ-ヶー]+$/.exec(s);
  return m ? m[0] : '';
}

/**
 * Reading of a conjugated token derived from the word's own kana, so kanji
 * with multiple readings (空く = あく/すく) resolve to the deck's reading:
 * stem = word.kana minus the dictionary okurigana, + the surface's okurigana.
 */
function tokenReading(tok: { surface_form: string; basic_form?: string; reading?: string }, word: Word): string | null {
  const surf = tok.surface_form;
  if (/^[ぁ-んァ-ヶー]+$/.test(surf)) return kana(surf); // already kana
  const basic = tok.basic_form && tok.basic_form !== '*' ? tok.basic_form : surf;
  const dictTail = kanaTail(basic);
  const surfTail = kanaTail(surf);
  const w = word.kana;
  if (dictTail && w.endsWith(dictTail)) return w.slice(0, w.length - dictTail.length) + surfTail;
  if (!dictTail && !surfTail) return w; // plain noun
  return tok.reading && tok.reading !== '*' ? kana(tok.reading) : null;
}

/** Conjugation stems of a dictionary-form kana verb: おる → おり, 空く → 空き… */
function verbStems(kana: string): string[] {
  const ROWS: Record<string, string> = { 'う': 'い', 'く': 'き', 'ぐ': 'ぎ', 'す': 'し', 'つ': 'ち', 'ぬ': 'に', 'ぶ': 'び', 'む': 'み' };
  const last = kana.slice(-1);
  if (last === 'る') return [kana.slice(0, -1) + 'り', kana.slice(0, -1)]; // godan + ichidan
  return ROWS[last] ? [kana.slice(0, -1) + ROWS[last]] : [];
}

/** Does this token start the target word (by written form or derived reading)? */
function startsTarget(tok: { surface_form: string; basic_form?: string; reading?: string; pos: string }, word: Word): boolean {
  const forms = formsOf(word);
  const basic = tok.basic_form && tok.basic_form !== '*' ? tok.basic_form : tok.surface_form;
  if (forms.includes(basic) || forms.includes(tok.surface_form)) return true;
  // Verb 連用形: kuromoji may lemmatize to a different verb (おり → おりる,
  // not おる); accept when the surface IS a conjugation stem of the word.
  if (tok.pos === '動詞' && verbStems(word.kana).some((s) => norm(tok.surface_form) === norm(s))) return true;
  // Reading-level match rescues kanji variants (降りる vs 下りる).
  const r = tok.reading && tok.reading !== '*' ? norm(tok.reading) : null;
  const surfNorm = norm(tok.surface_form);
  return forms.some((f) => {
    const fn = norm(f);
    if (r && (r === fn || (r.length >= 2 && fn.startsWith(r.slice(0, 2))))) return true;
    return surfNorm.length >= 2 && fn.length >= 2 && surfNorm.slice(0, 2) === fn.slice(0, 2);
  });
}

/**
 * Extend a verb/adj run over its attached morphology (ました, 知って…).
 * Stops before non-independent verbs, matching the shipped convention
 * (知って, not 知っています).
 */
function extendRun(tokens: Array<{ surface_form: string; pos: string; pos_detail_1: string }>, i: number): number {
  let j = i + 1;
  while (j < tokens.length) {
    const t = tokens[j];
    const cont =
      t.pos === '助動詞' ||
      (t.pos === '助詞' && t.pos_detail_1 === '接続助詞' && (t.surface_form === 'て' || t.surface_form === 'で'));
    if (!cont) break;
    j++;
  }
  return j;
}

interface Located {
  surface: string;
  reading: string;
}

function locateCloze(tk: Tokenizer, textJa: string, word: Word): Located | null {
  // 1. A written form appearing verbatim (nouns, loanwords).
  const direct = [...word.written].sort((a, b) => b.length - a.length);
  for (const f of direct) {
    const n = countOccurrences(textJa, f);
    if (n === 1) return { surface: f, reading: word.kana };
    if (n > 1) {
      // Disambiguate by appending the following particle (図書 → 図書を) —
      // never a content word, which would gap the wrong lexeme (スケート場).
      const tokens = tk.tokenize(textJa);
      for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].surface_form !== f) continue;
        let ext = f;
        for (let j = i + 1; j < tokens.length; j++) {
          if (tokens[j].pos !== '助詞') break;
          ext += tokens[j].surface_form;
          if (countOccurrences(textJa, ext) === 1) return { surface: ext, reading: word.kana };
        }
      }
    }
  }
  // 2. Conjugated forms: find the token that starts the word, take its
  //    attached-morphology run (the shipped convention: 困りました, 空いていました).
  const tokens = tk.tokenize(textJa);
  for (let i = 0; i < tokens.length; i++) {
    if (!startsTarget(tokens[i], word)) continue;
    const first = tokenReading(tokens[i], word);
    if (first === null) continue;
    // Derived reading must actually share the word's stem.
    if (norm(first).slice(0, 1) !== norm(word.kana).slice(0, 1)) continue;
    const end = extendRun(tokens as never, i);
    let surface = '';
    let reading = first;
    for (let j = i; j < end; j++) {
      surface += tokens[j].surface_form;
      if (j > i) reading += kana(tokens[j].surface_form);
    }
    if (countOccurrences(textJa, surface) === 1) return { surface, reading };
    // Shrink to just the first token if the run is ambiguous.
    if (countOccurrences(textJa, tokens[i].surface_form) === 1) {
      return { surface: tokens[i].surface_form, reading: first };
    }
  }
  return null;
}

/** Pick the deck word for an authored row: prompt match, reading breaks ties. */
function wordFor(deck: { words: Word[] }, prompt: string, noteReading: string | null): Word | null {
  const hits = deck.words.filter((w) => w.prompt === prompt);
  if (hits.length === 1) return hits[0];
  if (hits.length > 1 && noteReading) {
    const byReading = hits.find((w) => norm(noteReading).startsWith(norm(w.kana).slice(0, 2)));
    if (byReading) return byReading;
  }
  return hits[0] ?? null;
}

async function main(): Promise<void> {
  const write = process.argv.includes('--write');
  const tk = await buildTokenizer();

  for (const deckId of ['jlpt-n5', 'jlpt-n4', 'jlpt-n3']) {
    const deck = loadDeck(deckId);
    const words = new Map(deck.words.map((w) => [w.id, w]));
    const candPath = join(draftsDir, `${deckId}.candidates.json`);
    const candidates = JSON.parse(readFileSync(candPath, 'utf8')) as Candidate[];
    const byJa = new Map<string, Candidate[]>();
    for (const c of candidates) (byJa.get(c.textJa) ?? byJa.set(c.textJa, []).get(c.textJa)!).push(c);

    const rows = parseRemaining(deckId);
    const seen = new Set<string>();
    let repaired = 0;
    let teachOnly = 0;
    let authored = 0;
    const fails: string[] = [];

    for (const row of rows) {
      if (![...REPAIR_KINDS, ...AUTHOR_KINDS].includes(row.kind)) continue;
      if (seen.has(row.textJa)) continue;
      seen.add(row.textJa);

      const noteReading = /"[（(]?([ぁ-んァ-ヶー]+)/.exec(row.note)?.[1] ?? null;

      if (AUTHOR_KINDS.includes(row.kind)) {
        const word = wordFor(deck, row.word, noteReading);
        const textEn = AUTHORED_EN[row.textJa];
        if (!word || !textEn) {
          fails.push(`${deckId} AUTHOR no ${!word ? 'word' : 'EN'}: ${row.word} | ${row.textJa}`);
          continue;
        }
        const loc = locateCloze(tk, row.textJa, word);
        if (!loc) {
          fails.push(`${deckId} AUTHOR no span: ${row.word} | ${row.textJa}`);
          continue;
        }
        const readingKana = tk
          .tokenize(row.textJa)
          .map((t) => (t.reading && t.reading !== '*' ? kana(t.reading) : t.surface_form))
          .join('');
        candidates.push({
          id: sentenceId(word.id, row.textJa), wordId: word.id, textJa: row.textJa,
          readingKana, textEn, clozeSurface: loc.surface, clozeReading: loc.reading,
          valid: true, offenders: [], approved: true, clozeEligible: true,
        });
        authored++;
        continue;
      }

      // Repair rows: candidate already exists (possibly with revised textJa).
      const cand = (byJa.get(row.textJa) ?? []).find((c) => words.get(c.wordId)?.prompt === row.word) ?? byJa.get(row.textJa)?.[0];
      if (!cand) {
        fails.push(`${deckId} REPAIR not in candidates: ${row.word} | ${row.textJa}`);
        continue;
      }
      const word = words.get(cand.wordId);
      if (!word) continue;
      const loc = locateCloze(tk, cand.textJa, word);
      if (!loc) {
        // Only ship as a teach-only example if the sentence actually contains
        // the word; otherwise the headword itself is wrong (those rows are in
        // native-review.csv) and shipping would teach word A with sentence B.
        if (word.written.some((f) => cand.textJa.includes(f))) {
          cand.approved = true;
          cand.valid = true;
          cand.clozeEligible = false;
          teachOnly++;
          fails.push(`${deckId} TEACH-ONLY (no unique span): ${row.word} | ${cand.textJa}`);
        } else {
          fails.push(`${deckId} LEFT UNSHIPPED (headword mismatch, pending review): ${row.word} | ${cand.textJa}`);
        }
        continue;
      }
      cand.clozeSurface = loc.surface;
      cand.clozeReading = loc.reading;
      cand.approved = true;
      cand.valid = true;
      if (cand.clozeEligible === false) cand.clozeEligible = true;
      repaired++;
    }

    console.log(`\n${deckId}: repaired ${repaired}, authored ${authored}, teach-only ${teachOnly}, issues ${fails.length}`);
    for (const f of fails) console.log('  ' + f);
    if (write) {
      writeFileSync(candPath, JSON.stringify(candidates, null, 2) + '\n');
      console.log(`  wrote ${candPath}`);
    }
  }
  if (!write) console.log('\n(dry run — pass --write to save)');
}

void main();
