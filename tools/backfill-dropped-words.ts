// One-off backfill for the 17 words the deck build silently dropped: source
// rows with semicolon-separated alternate readings ("いく; ゆく") failed the
// kana-only test in buildWord and were skipped. buildWord is fixed now, but a
// full rebuild would clobber the hand-edited n5-starter deck and could shift
// existing prompts/audio — so these are appended surgically instead, with
// hand-chosen primary readings (the common one, not always the CSV's first)
// and prompts checked against the existing decks for collisions.
//
//   npx tsx tools/backfill-dropped-words.ts        # appends + updates index

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { toRomaji } from 'wanakana';
import { moraClipKeys, segmentMora } from '../src/matching/mora';
import type { Deck, DeckInfo, Word } from '../src/types';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const decksDir = join(root, 'public', 'decks');

interface Spec {
  level: 'n5' | 'n4';
  expr: string; // primary written form
  kana: string; // primary reading (the common one)
  english: string;
  prompt: string; // collision-checked against existing decks
  alts?: Array<{ expr?: string; kana: string }>;
  tags: string[];
}

const N5 = ['JLPT', 'JLPT_5', 'JLPT_N5'];
const N4 = ['JLPT', 'JLPT_4', 'JLPT_N4'];

const SPECS: Spec[] = [
  { level: 'n5', expr: '行く', kana: 'いく', english: 'to go', prompt: 'to go', alts: [{ expr: '行く', kana: 'ゆく' }], tags: N5 },
  { level: 'n5', expr: 'いい', kana: 'いい', english: 'good', prompt: 'good, nice', alts: [{ kana: 'よい' }], tags: N5 },
  { level: 'n5', expr: 'キログラム', kana: 'きろぐらむ', english: '(abbr.) kilo (kilogram)', prompt: 'kilogram', alts: [{ expr: 'キロ', kana: 'きろ' }], tags: N5 },
  { level: 'n5', expr: 'キロメートル', kana: 'きろめーとる', english: '(abbr.) kilo (kilometer)', prompt: 'kilometer', alts: [{ expr: 'キロ', kana: 'きろ' }], tags: N5 },
  { level: 'n5', expr: 'くらい', kana: 'くらい', english: 'approximate (quantity)', prompt: 'approximately (amount)', alts: [{ kana: 'ぐらい' }], tags: N5 },
  { level: 'n5', expr: 'ころ', kana: 'ころ', english: 'about, toward, approximately (time)', prompt: 'around (a time)', alts: [{ kana: 'ごろ' }], tags: N5 },
  { level: 'n5', expr: 'じゃ', kana: 'じゃ', english: 'well, well then', prompt: 'well then', alts: [{ kana: 'じゃあ' }], tags: N5 },
  { level: 'n5', expr: 'そう', kana: 'そう', english: 'yes; appears, to be the case', prompt: "that's right", alts: [{ kana: 'そうです' }], tags: N5 },
  // "and then" is それから's prompt; "and" is また's.
  { level: 'n5', expr: 'そして', kana: 'そして', english: 'and, and then', prompt: 'and so', alts: [{ kana: 'そうして' }], tags: N5 },
  { level: 'n5', expr: '毎月', kana: 'まいつき', english: 'every month, monthly', prompt: 'every month', alts: [{ expr: '毎月', kana: 'まいげつ' }], tags: N5 },
  { level: 'n5', expr: '毎年', kana: 'まいとし', english: 'every year, yearly, annually', prompt: 'every year', alts: [{ expr: '毎年', kana: 'まいねん' }], tags: N5 },
  { level: 'n4', expr: 'やはり', kana: 'やはり', english: 'as I thought, absolutely', prompt: 'as expected', alts: [{ kana: 'やっぱり' }], tags: N4 },
  { level: 'n4', expr: 'レポート', kana: 'れぽーと', english: 'report', prompt: 'report', alts: [{ expr: 'リポート', kana: 'りぽーと' }], tags: N4 },
  { level: 'n4', expr: 'お金持ち', kana: 'おかねもち', english: 'rich person', prompt: 'rich person', alts: [{ expr: '金持ち', kana: 'かねもち' }], tags: N4 },
  { level: 'n4', expr: '高校', kana: 'こうこう', english: 'high school; senior high school', prompt: 'high school', alts: [{ expr: '高等学校', kana: 'こうとうがっこう' }], tags: N4 },
  { level: 'n4', expr: 'けれど', kana: 'けれど', english: 'but, although', prompt: 'although', alts: [{ kana: 'けれども' }], tags: N4 },
  { level: 'n4', expr: 'コンピュータ', kana: 'こんぴゅーた', english: 'computer', prompt: 'computer (formal)', alts: [{ expr: 'コンピューター', kana: 'こんぴゅーたー' }], tags: N4 },
];

const wid = (level: string, expr: string, kana: string): string =>
  `${level}-${createHash('sha1').update(`${expr}|${kana}`).digest('hex').slice(0, 8)}`;

function toWord(s: Spec): Word {
  const moraKana = segmentMora(s.kana);
  const written = new Set([s.expr, s.kana]);
  const alts = (s.alts ?? []).map((a) => {
    written.add(a.expr ?? a.kana);
    written.add(a.kana);
    return { id: wid(s.level, a.expr ?? a.kana, a.kana), kana: a.kana, romaji: toRomaji(a.kana) };
  });
  return {
    id: wid(s.level, s.expr, s.kana),
    english: s.english,
    prompt: s.prompt,
    kana: s.kana,
    written: [...written],
    romaji: toRomaji(s.kana),
    mora: moraClipKeys(moraKana),
    moraKana,
    ...(alts.length ? { alts } : {}),
    tags: s.tags,
  };
}

function main(): void {
  const byDeck: Record<string, Word[]> = { 'jlpt-n5': [], 'jlpt-n4': [] };
  for (const s of SPECS) byDeck[`jlpt-${s.level}`].push(toWord(s));

  const infos: DeckInfo[] = JSON.parse(readFileSync(join(decksDir, 'index.json'), 'utf8'));
  for (const [deckId, add] of Object.entries(byDeck)) {
    const path = join(decksDir, `${deckId}.json`);
    const deck = JSON.parse(readFileSync(path, 'utf8')) as Deck;
    const existing = new Set(deck.words.map((w) => w.id));
    const fresh = add.filter((w) => !existing.has(w.id));
    // Collision guard: a new prompt must be unique across all decks.
    const prompts = new Set(deck.words.map((w) => w.prompt.toLowerCase()));
    for (const w of fresh) {
      if (prompts.has(w.prompt.toLowerCase())) throw new Error(`prompt collision: "${w.prompt}" (${w.kana})`);
    }
    deck.words.push(...fresh);
    writeFileSync(path, JSON.stringify(deck, null, 1));
    const info = infos.find((i) => i.id === deckId);
    if (info) info.wordCount = deck.words.length;
    console.log(`${deckId}: +${fresh.length} words → ${deck.words.length}`);
  }
  writeFileSync(join(decksDir, 'index.json'), JSON.stringify(infos, null, 2));
  console.log('index.json updated');
}

main();
