// Tags verbs in the shipped decks with pos/verbSubclass so the app can offer
// conjugation practice. Edits public/decks/*.json in place (the decks are
// hand-repaired; never rebuild them via build-decks main()).
//
//   npx tsx tools/enrich-verbs.ts            # classify + write all decks
//   npx tsx tools/enrich-verbs.ts --dry-run  # report only
//
// Conservative by design: a word is tagged only when the gloss, the kana
// ending and kuromoji all agree (see src/conj/classify.ts). Everything else is
// listed for manual triage → add to MANUAL_OVERRIDES and re-run.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { TokenizerBuilder, type IpadicFeatures, type LoaderConfig } from '@patdx/kuromoji';
import { classifyVerb, type ClassifyToken } from '../src/conj/classify';
import type { Deck, DeckInfo } from '../src/types';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const decksDir = join(root, 'public', 'decks');

const DICT_CDN = 'https://cdn.jsdelivr.net/npm/@aiktb/kuromoji@1.0.2/dict/';

async function buildTokenizer() {
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

const toClassifyTokens = (tokens: IpadicFeatures[]): ClassifyToken[] =>
  tokens.map((t) => ({ pos: t.pos, surface_form: t.surface_form, basic_form: t.basic_form, conj_type: t.conjugated_type }));

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const tk = await buildTokenizer();
  const index = JSON.parse(readFileSync(join(decksDir, 'index.json'), 'utf8')) as DeckInfo[];

  const triage: string[] = [];
  for (const info of index) {
    const path = join(decksDir, info.file);
    const deck = JSON.parse(readFileSync(path, 'utf8')) as Deck;
    let tagged = 0;
    for (const w of deck.words) {
      const surface = w.written[0] ?? w.kana;
      const res = classifyVerb({ english: w.english, kana: w.kana, surface }, toClassifyTokens(tk.tokenize(surface)));
      if (res.kind === 'verb') {
        w.pos = 'verb';
        w.verbSubclass = res.subclass;
        tagged++;
      } else if (res.kind === 'ambiguous') {
        delete w.pos;
        delete w.verbSubclass;
        triage.push(`${deck.id}\t${surface}（${w.kana}）\t${w.english}\t${res.reason}`);
      } else {
        delete w.pos;
        delete w.verbSubclass;
      }
    }
    console.log(`${deck.id}: ${tagged}/${deck.words.length} verbs tagged`);
    if (!dryRun) writeFileSync(path, JSON.stringify(deck, null, 1));
  }

  if (triage.length) {
    console.log(`\nskipped (manual triage — add to MANUAL_OVERRIDES in src/conj/classify.ts if truly verbs):`);
    for (const line of triage) console.log('  ' + line);
  }
}

void main();
