// Precomputes the English meaning cues for conjugation prompts ("didn't
// sleep", "is eating") into public/conj-cues/{deckId}.json, keyed
// wordId → {form: cueText}. Static content like the sentence pools: the app
// attaches it at load (attachConjCues) and gen-audio voices it (en-conj/).
//
//   npx tsx tools/gen-conj-cues.ts
//
// Reviewable by design — eyeball the JSON (especially past tenses); fix odd
// glosses via IRREGULAR_PAST in src/conj/englishCue.ts and re-run. Verbs whose
// gloss doesn't reduce to a clean "to …" phrase are skipped and listed; those
// fall back to label prompts in the app.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { baseVerb, cueFor, MEANING_CUED_FORMS } from '../src/conj/englishCue';
import type { Deck, DeckInfo } from '../src/types';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const decksDir = join(root, 'public', 'decks');
const cuesDir = join(root, 'public', 'conj-cues');

function main() {
  mkdirSync(cuesDir, { recursive: true });
  const index = JSON.parse(readFileSync(join(decksDir, 'index.json'), 'utf8')) as DeckInfo[];
  const skipped: string[] = [];
  const irregularish: string[] = [];

  for (const info of index) {
    const deck = JSON.parse(readFileSync(join(decksDir, info.file), 'utf8')) as Deck;
    const cues: Record<string, Record<string, string>> = {};
    let count = 0;
    for (const w of deck.words) {
      if (w.pos !== 'verb' || !w.verbSubclass) continue;
      const base = baseVerb(w.prompt);
      if (!base) {
        skipped.push(`${deck.id}\t${w.written[0]}\t"${w.prompt}"`);
        continue;
      }
      const perForm: Record<string, string> = {};
      for (const form of MEANING_CUED_FORMS) {
        const cue = cueFor(base, form);
        if (cue) perForm[form] = cue;
      }
      cues[w.id] = perForm;
      count++;
      // Surface regular-rule pasts for eyeballing — wrong ones (e.g. a missed
      // irregular) read obviously badly in this list.
      const past = perForm['ta'];
      if (past && past.split(' ')[0].endsWith('ed') === false && !past.includes(' ')) irregularish.push(`${w.written[0]} → ${past}`);
    }
    writeFileSync(join(cuesDir, `${deck.id}.json`), JSON.stringify(cues, null, 1));
    console.log(`${deck.id}: cues for ${count} verbs`);
  }

  if (skipped.length) {
    console.log('\nno clean "to …" gloss — label-prompt fallback for:');
    for (const s of skipped) console.log('  ' + s);
  }
  console.log(`\nirregular-looking pasts (spot-check these): ${irregularish.length}`);
  console.log('  ' + irregularish.join(', '));
}

main();
