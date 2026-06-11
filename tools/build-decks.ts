// Builds public/decks/*.json from the CC-BY JLPT word lists (Jonathan Waller's
// lists via the elzup/jlpt-word-list CSV mirror). Romaji and mora breakdowns
// are computed, never hand-typed. Run: npm run build-decks

import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { toHiragana, toRomaji } from 'wanakana';
import { moraClipKeys, segmentMora } from '../src/matching/mora';
import type { Deck, DeckInfo, Word } from '../src/types';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sourcesDir = join(root, 'tools', 'sources');
const decksDir = join(root, 'public', 'decks');

const SOURCES: Record<string, string> = {
  n5: 'https://raw.githubusercontent.com/elzup/jlpt-word-list/master/src/n5.csv',
  n4: 'https://raw.githubusercontent.com/elzup/jlpt-word-list/master/src/n4.csv',
};

async function fetchSource(level: string): Promise<string> {
  const path = join(sourcesDir, `${level}.csv`);
  if (existsSync(path)) return readFileSync(path, 'utf8');
  const res = await fetch(SOURCES[level]);
  if (!res.ok) throw new Error(`download ${level}: HTTP ${res.status}`);
  const text = await res.text();
  mkdirSync(sourcesDir, { recursive: true });
  writeFileSync(path, text);
  return text;
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (ch === '"') {
        quoted = false;
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ',') {
      row.push(field);
      field = '';
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      field = '';
      if (row.some((f) => f !== '')) rows.push(row);
      row = [];
    } else {
      field += ch;
    }
  }
  if (field !== '' || row.length > 0) {
    row.push(field);
    if (row.some((f) => f !== '')) rows.push(row);
  }
  return rows;
}

const KANA_ONLY = /^[ぁ-ゖー]+$/;

function buildWord(level: string, expression: string, reading: string, meaning: string, tags: string[]): Word | null {
  const kana = toHiragana(reading.replace(/[～〜\s]/g, ''));
  if (!kana || !KANA_ONLY.test(kana)) return null;
  const expr = expression.replace(/[～〜\s]/g, '') || kana;
  const english = meaning.trim();
  if (!english) return null;
  // Short form for the spoken prompt: first sense, parentheticals removed.
  const prompt =
    english
      .split(';')[0]
      .split(',')[0]
      .replace(/\(.*?\)/g, '')
      .replace(/\s+/g, ' ')
      .trim() || english;
  const moraKana = segmentMora(kana);
  return {
    id: `${level}-${createHash('sha1').update(`${expr}|${kana}`).digest('hex').slice(0, 8)}`,
    english,
    prompt,
    kana,
    written: [...new Set([expr, kana])],
    romaji: toRomaji(kana),
    mora: moraClipKeys(moraKana),
    moraKana,
    tags,
  };
}

function genkiLesson(tags: string[]): number | null {
  for (const t of tags) {
    const m = /^Genki_Ln\.(\d+)$/.exec(t);
    if (m) return Number(m[1]);
  }
  return null;
}

async function buildLevel(level: string, seen: Set<string>): Promise<Word[]> {
  const rows = parseCsv(await fetchSource(level));
  const words: Word[] = [];
  let skipped = 0;
  for (const [expression, reading, meaning, tags] of rows.slice(1)) {
    const word = buildWord(level, expression ?? '', reading ?? '', meaning ?? '', (tags ?? '').split(/\s+/).filter(Boolean));
    if (!word) {
      skipped++;
      continue;
    }
    const dedupeKey = `${word.written[0]}|${word.kana}`;
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);
    words.push(word);
  }
  console.log(`${level}: ${words.length} words (${skipped} skipped)`);
  return words;
}

function writeDeck(deck: Deck): DeckInfo {
  const file = `${deck.id}.json`;
  writeFileSync(join(decksDir, file), JSON.stringify(deck, null, 1));
  return { id: deck.id, name: deck.name, wordCount: deck.words.length, file };
}

async function main() {
  mkdirSync(decksDir, { recursive: true });
  const seen = new Set<string>();
  const n5 = await buildLevel('n5', seen);
  const n4 = await buildLevel('n4', seen);

  // Starter: early-Genki N5 vocabulary — common, pedagogically ordered.
  const starter = n5
    .map((w) => ({ w, lesson: genkiLesson(w.tags) }))
    .filter((x): x is { w: Word; lesson: number } => x.lesson !== null && x.lesson <= 6)
    .sort((a, b) => a.lesson - b.lesson)
    .map((x) => x.w)
    .slice(0, 120);

  const infos = [
    writeDeck({ id: 'n5-starter', name: 'N5 Starter (Genki 1–6)', words: starter }),
    writeDeck({ id: 'jlpt-n5', name: 'JLPT N5', words: n5 }),
    writeDeck({ id: 'jlpt-n4', name: 'JLPT N4', words: n4 }),
  ];
  writeFileSync(join(decksDir, 'index.json'), JSON.stringify(infos, null, 2));
  console.log(`starter: ${starter.length} words`);
}

void main();
