// Builds public/decks/*.json from the CC-BY JLPT word lists (Jonathan Waller's
// lists via the elzup/jlpt-word-list CSV mirror). Romaji and mora breakdowns
// are computed, never hand-typed. Run: npm run build-decks

import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { toHiragana, toRomaji } from 'wanakana';
import { moraClipKeys, segmentMora } from '../src/matching/mora';
import { barePrompt, firstClause, resolvePrompts, richPrompt } from './prompt-resolve';
import type { Deck, DeckInfo, Word } from '../src/types';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sourcesDir = join(root, 'tools', 'sources');
const decksDir = join(root, 'public', 'decks');

const SOURCES: Record<string, string> = {
  n5: 'https://raw.githubusercontent.com/elzup/jlpt-word-list/master/src/n5.csv',
  n4: 'https://raw.githubusercontent.com/elzup/jlpt-word-list/master/src/n4.csv',
  n3: 'https://raw.githubusercontent.com/elzup/jlpt-word-list/master/src/n3.csv',
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
  // Some source rows carry alternate readings/expressions, semicolon-separated
  // and pairwise ("高校; 高等学校" / "こうこう; こうとうがっこう"). The first
  // pair is the primary; the rest become alts (taught aloud + accepted). These
  // rows used to be dropped entirely — the ';' failed the kana-only test.
  const readings = reading.split(/[;；]/).map((r) => toHiragana(r.replace(/[～〜\s]/g, ''))).filter(Boolean);
  const exprs = expression.split(/[;；]/).map((e) => e.replace(/[～〜\s]/g, '')).filter(Boolean);
  const kana = readings[0] ?? '';
  if (!kana || !KANA_ONLY.test(kana)) return null;
  const expr = exprs[0] || kana;
  const english = meaning.trim();
  if (!english) return null;
  // Provisional prompt; resolvePrompts() finalizes it once collisions are known.
  const prompt = barePrompt(english);
  const moraKana = segmentMora(kana);

  const written = new Set([expr, kana]);
  const alts: Word['alts'] = [];
  for (let i = 1; i < readings.length; i++) {
    const altKana = readings[i];
    if (!KANA_ONLY.test(altKana)) continue;
    const altExpr = exprs[i] ?? altKana;
    written.add(altExpr);
    written.add(altKana);
    alts.push({
      id: `${level}-${createHash('sha1').update(`${altExpr}|${altKana}`).digest('hex').slice(0, 8)}`,
      kana: altKana,
      romaji: toRomaji(altKana),
    });
  }

  return {
    id: `${level}-${createHash('sha1').update(`${expr}|${kana}`).digest('hex').slice(0, 8)}`,
    english,
    prompt,
    kana,
    written: [...written],
    romaji: toRomaji(kana),
    mora: moraClipKeys(moraKana),
    moraKana,
    ...(alts.length ? { alts } : {}),
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

/**
 * Add one level as a new deck WITHOUT rebuilding the existing decks (a full
 * rebuild would clobber the hand-edited starter and the hand-repaired decks).
 * New words dedupe against every shipped word; internal synonyms fold as
 * usual; a new word that is a true synonym of a shipped word folds INTO it
 * (additive: written forms + alts only); bare-prompt collisions with shipped
 * prompts get the rich prompt instead — shipped prompts are never rewritten.
 *
 *   npx tsx tools/build-decks.ts --add n3
 */
async function addLevel(level: string): Promise<void> {
  const existingIds = ['jlpt-n5', 'jlpt-n4'];
  const existingDecks = existingIds.map((id) => JSON.parse(readFileSync(join(decksDir, `${id}.json`), 'utf8')) as Deck);
  const existing = existingDecks.flatMap((d) => d.words);
  const seen = new Set(existing.map((w) => `${w.written[0]}|${w.kana}`));

  const fresh = await buildLevel(level, seen);
  const resolved = resolvePrompts(fresh); // fold synonyms within the new level
  console.log(`${level}: ${fresh.length} new words, ${resolved.length} after internal folds`);

  const promptOwner = new Map<string, Word>();
  for (const w of existing) promptOwner.set(w.prompt.toLowerCase(), w);
  const clause = (w: Word): string => firstClause(w.english).toLowerCase();

  const out: Word[] = [];
  const mutated = new Set<Deck>();
  let foldedIn = 0;
  let disambiguated = 0;
  for (const w of resolved) {
    const clash = promptOwner.get(w.prompt.toLowerCase());
    if (!clash) {
      promptOwner.set(w.prompt.toLowerCase(), w);
      out.push(w);
      continue;
    }
    if (clause(w) === clause(clash)) {
      // True synonym of a shipped word → fold in additively.
      clash.written = [...new Set([...clash.written, ...w.written, w.kana])];
      const heard = new Set([clash.kana, ...(clash.alts ?? []).map((a) => a.kana)]);
      if (!heard.has(w.kana)) clash.alts = [...(clash.alts ?? []), { id: w.id, kana: w.kana, romaji: w.romaji }];
      mutated.add(existingDecks.find((d) => d.words.includes(clash))!);
      foldedIn++;
      continue;
    }
    let p = richPrompt(w.english);
    if (promptOwner.has(p.toLowerCase())) p = `${p} (advanced)`;
    w.prompt = p;
    promptOwner.set(p.toLowerCase(), w);
    out.push(w);
    disambiguated++;
  }
  console.log(`folded into shipped words: ${foldedIn} | disambiguated prompts: ${disambiguated}`);

  const infos = JSON.parse(readFileSync(join(decksDir, 'index.json'), 'utf8')) as DeckInfo[];
  const info = writeDeck({ id: `jlpt-${level}`, name: `JLPT ${level.toUpperCase()}`, words: out });
  const at = infos.findIndex((i) => i.id === info.id);
  if (at >= 0) infos[at] = info;
  else infos.push(info);
  for (const d of mutated) {
    writeFileSync(join(decksDir, `${d.id}.json`), JSON.stringify(d, null, 1));
    const i = infos.findIndex((x) => x.id === d.id);
    if (i >= 0) infos[i].wordCount = d.words.length;
    console.log(`updated ${d.id} (gained alts/written from folds)`);
  }
  writeFileSync(join(decksDir, 'index.json'), JSON.stringify(infos, null, 2));
  console.log(`jlpt-${level}: ${out.length} words written`);
}

async function main() {
  mkdirSync(decksDir, { recursive: true });
  const seen = new Set<string>();
  const n5 = await buildLevel('n5', seen);
  const n4 = await buildLevel('n4', seen);

  // Finalize prompts and fold true synonyms across both levels.
  const before = n5.length + n4.length;
  const survive = new Set(resolvePrompts([...n5, ...n4]));
  const n5r = n5.filter((w) => survive.has(w));
  const n4r = n4.filter((w) => survive.has(w));
  const folded = before - survive.size;
  console.log(`folded ${folded} synonym readings into primaries`);

  // Starter: early-Genki N5 vocabulary — common, pedagogically ordered.
  const starter = n5r
    .map((w) => ({ w, lesson: genkiLesson(w.tags) }))
    .filter((x): x is { w: Word; lesson: number } => x.lesson !== null && x.lesson <= 6)
    .sort((a, b) => a.lesson - b.lesson)
    .map((x) => x.w)
    .slice(0, 120);

  const infos = [
    writeDeck({ id: 'n5-starter', name: 'N5 Starter (Genki 1–6)', words: starter }),
    writeDeck({ id: 'jlpt-n5', name: 'JLPT N5', words: n5r }),
    writeDeck({ id: 'jlpt-n4', name: 'JLPT N4', words: n4r }),
  ];
  writeFileSync(join(decksDir, 'index.json'), JSON.stringify(infos, null, 2));
  console.log(`starter: ${starter.length} words`);
}

if (process.argv[2] === '--add' && process.argv[3]) void addLevel(process.argv[3]);
else void main();
