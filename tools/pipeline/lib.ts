// Shared plumbing for the sentence pipeline: state files, deck/whitelist
// loading, kuromoji, the Anthropic client, and pure text helpers.

import Anthropic from '@anthropic-ai/sdk';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { TokenizerBuilder, type IpadicFeatures, type LoaderConfig } from '@patdx/kuromoji';
import { toHiragana } from 'wanakana';
import type { Deck, Sentence, Word } from '../../src/types';
import { formsOf } from '../sentence-validate';

export const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const decksDir = join(root, 'public', 'decks');
export const sentencesDir = join(root, 'public', 'sentences');
export const draftsDir = join(root, 'tools', 'sentences-draft');

const DICT_CDN = 'https://cdn.jsdelivr.net/npm/@aiktb/kuromoji@1.0.2/dict/';

export const client = new Anthropic(); // ANTHROPIC_API_KEY from env

// ---------- state ----------

export function stateDir(deckId: string): string {
  const dir = join(root, 'tools', 'pipeline', 'state', deckId);
  mkdirSync(dir, { recursive: true });
  return dir;
}

export function readState<T>(deckId: string, name: string): T | null {
  const path = join(stateDir(deckId), name);
  return existsSync(path) ? (JSON.parse(readFileSync(path, 'utf8')) as T) : null;
}

export function writeState(deckId: string, name: string, data: unknown): void {
  writeFileSync(join(stateDir(deckId), name), JSON.stringify(data, null, 2) + '\n');
}

// ---------- decks / whitelist ----------

export function loadDeck(deckId: string): Deck {
  const file = readdirSync(decksDir).find((f) => f === `${deckId}.json`);
  if (!file) throw new Error(`deck ${deckId} not found in ${decksDir}`);
  return JSON.parse(readFileSync(join(decksDir, file), 'utf8')) as Deck;
}

/** All accepted surface/kana forms across the whitelist decks (level-based i+1). */
export function whitelistForms(deckIds: string[]): Set<string> {
  const set = new Set<string>();
  for (const id of deckIds) {
    for (const w of loadDeck(id).words) for (const f of formsOf(w)) set.add(f);
  }
  return set;
}

/** Human/model-readable whitelist: one "surface（かな）" entry per word. */
export function whitelistText(deckIds: string[]): string {
  const lines: string[] = [];
  for (const id of deckIds) {
    for (const w of loadDeck(id).words) {
      const surface = w.written[0] ?? w.kana;
      lines.push(surface === w.kana ? w.kana : `${surface}（${w.kana}）`);
    }
  }
  return lines.join('、');
}

/** Words already covered by shipped sentence pools (copied over, not regenerated). */
export function reusablePool(deckIds: string[]): Record<string, Sentence[]> {
  const pool: Record<string, Sentence[]> = {};
  for (const id of deckIds) {
    const path = join(sentencesDir, `${id}.json`);
    if (!existsSync(path)) continue;
    const p = JSON.parse(readFileSync(path, 'utf8')) as Record<string, Sentence[]>;
    for (const [wordId, list] of Object.entries(p)) if (list.length) pool[wordId] = list;
  }
  return pool;
}

// ---------- kuromoji ----------

export type Tokenizer = { tokenize(text: string): IpadicFeatures[] };

export async function buildTokenizer(): Promise<Tokenizer> {
  const loader: LoaderConfig = {
    async loadArrayBuffer(url: string): Promise<ArrayBufferLike> {
      const file = url.replace('.gz', '').split('/').pop();
      const res = await fetch(DICT_CDN + file);
      if (!res.ok) throw new Error(`dict ${file} ${res.status}`);
      return res.arrayBuffer();
    },
  };
  return new TokenizerBuilder({ loader }).build();
}

// ---------- pure helpers ----------

export const sentenceId = (wordId: string, textJa: string): string =>
  's-' + createHash('sha1').update(`${wordId}|${textJa}`).digest('hex').slice(0, 8);

export const hashInt = (s: string): number =>
  parseInt(createHash('sha1').update(s).digest('hex').slice(0, 8), 16);

/** Sentence with the cloze span masked — the "pattern" for dedup purposes. */
export const maskCloze = (textJa: string, clozeSurface: string): string =>
  textJa.split(clozeSurface).join('＿');

/** Char-trigram Jaccard similarity between two (masked) sentences. */
export function trigramJaccard(a: string, b: string): number {
  const grams = (s: string): Set<string> => {
    const g = new Set<string>();
    for (let i = 0; i <= s.length - 3; i++) g.add(s.slice(i, i + 3));
    return g;
  };
  const ga = grams(a);
  const gb = grams(b);
  if (ga.size === 0 || gb.size === 0) return a === b ? 1 : 0;
  let inter = 0;
  for (const g of ga) if (gb.has(g)) inter++;
  return inter / (ga.size + gb.size - inter);
}

export const countOccurrences = (text: string, sub: string): number =>
  sub.length === 0 ? 0 : text.split(sub).length - 1;

/** Extract the JSON payload from a structured-output (or plain) text response. */
export function parseJsonText<T>(text: string): T {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error(`no JSON object in response: ${text.slice(0, 120)}`);
  return JSON.parse(text.slice(start, end + 1)) as T;
}

// ---------- shared pipeline shapes ----------

export interface Cluster {
  id: string;
  category: string;
  wordIds: string[];
}

export interface PlanState {
  deckId: string;
  clusters: Cluster[];
  /** Word ids covered by reused pools (not generated). */
  reused: string[];
}

export interface GenSentence {
  wordId: string;
  textJa: string;
  readingKana: string;
  textEn: string;
  clozeSurface: string;
  clozeReading: string;
  scenario?: string;
  frame?: string;
}

export interface RejectedSentence extends GenSentence {
  reasons: string[];
}

export interface JudgeScore {
  sentenceKey: string; // sentenceId(wordId, textJa)
  naturalness: number;
  levelAppropriateness: number;
  translationAccuracy: number;
  clozeRecoverability: number;
  interest: number;
  note?: string;
}

export function wordById(deck: Deck): Map<string, Word> {
  return new Map(deck.words.map((w) => [w.id, w]));
}

/**
 * Reading-based fallback for vocab offenders: the deck's written forms are
 * incomplete (kana-only entries, non-standard okurigana like 終る), so a
 * correctly-used word can fail the surface whitelist. Accept an offender token
 * when its reading — or its dictionary form's reading — matches a known kana
 * form. Weaker than surface matching (homophones), so it is a fallback only.
 */
export function filterOffendersByReading(
  tk: Tokenizer,
  tokens: Array<{ surface_form: string; basic_form?: string; reading?: string }>,
  offenders: string[],
  known: Set<string>,
): string[] {
  const readingKnown = (text: string, reading?: string): boolean => {
    if (reading && reading !== '*' && known.has(toHiragana(reading))) return true;
    const t0 = tk.tokenize(text)[0];
    return !!t0?.reading && t0.reading !== '*' && known.has(toHiragana(t0.reading));
  };
  return offenders.filter((o) => {
    const tok = tokens.find((t) => t.surface_form === o);
    if (tok && readingKnown(tok.surface_form, tok.reading)) return false;
    if (tok?.basic_form && tok.basic_form !== '*' && tok.basic_form !== tok.surface_form && readingKnown(tok.basic_form)) return false;
    return true;
  });
}

/**
 * The cloze span must actually BE the target word — the pilot judge caught the
 * generator occasionally filing a sentence under the wrong word_id (an いいえ
 * sentence attributed to 一緒), which validation missed and which would quiz
 * one word while rating another's card. Accepts exact forms, the kuromoji
 * dictionary form of the cloze's first token (conjugations: 行きます → 行く),
 * or a shared 2-char stem as a last resort for kana-only conjugation.
 */
export function clozeMatchesTarget(
  tk: Tokenizer,
  s: { clozeSurface: string; clozeReading: string },
  word: Word,
): boolean {
  const forms = new Set(formsOf(word));
  if (forms.has(s.clozeSurface) || forms.has(s.clozeReading)) return true;
  const basic = tk.tokenize(s.clozeSurface)[0]?.basic_form;
  if (basic && basic !== '*' && forms.has(basic)) return true;
  return [...forms].some(
    (f) => f.length >= 2 && s.clozeSurface.length >= 2 && f.slice(0, 2) === s.clozeSurface.slice(0, 2),
  );
}
