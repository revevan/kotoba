import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const ROOT = join(import.meta.dirname, "..");

const deck = JSON.parse(
  readFileSync(join(ROOT, "public/decks/n5-starter.json"), "utf-8")
);
const sentences: Record<
  string,
  {
    textJa: string;
    readingKana: string;
    textEn: string;
    clozeSurface: string;
    clozeReading: string;
  }[]
> = JSON.parse(
  readFileSync(
    join(ROOT, "tools/sentences-authored/n5-starter.json"),
    "utf-8"
  )
);

const lines: string[] = [];

lines.push("KOTOBA — N5 STARTER LANGUAGE EXPORT");
lines.push(`Deck: ${deck.name}`);
lines.push(`Words: ${deck.words.length}`);
lines.push(`Sentence groups: ${Object.keys(sentences).length}`);
lines.push("");
lines.push(
  "Each entry shows: vocabulary info, then example sentences with the target word in [brackets]."
);
lines.push(
  "Words marked ⚠ NO SENTENCES have no example sentences yet authored."
);
lines.push("");
lines.push("=".repeat(72));

for (const word of deck.words) {
  const wordSentences = sentences[word.id];

  // Lesson tags
  const lessonTags = (word.tags as string[])
    .filter((t) => t.startsWith("Genki_Ln."))
    .map((t) => `Genki L${t.replace("Genki_Ln.", "")}`)
    .join(", ");

  // Written forms — stored as [kanji, kana, kanji2, kana2, ...] pairs,
  // or a single kana-only entry when there's no kanji form.
  const writtenForms: string[] = [];
  const wArr: string[] = word.written;
  for (let i = 0; i < wArr.length; ) {
    const a = wArr[i];
    const b = wArr[i + 1];
    if (b === undefined || b === a) {
      // kana-only or identical pair
      writtenForms.push(a);
      i += b === undefined ? 1 : 2;
    } else {
      writtenForms.push(`${a} (${b})`);
      i += 2;
    }
  }

  lines.push("");
  lines.push(
    `${wordSentences ? "  " : "⚠ "}WORD  ${writtenForms[0]}  [${word.romaji}]  —  ${word.id}`
  );
  lines.push(`  Prompt (quiz cue): "${word.prompt}"`);
  lines.push(`  English:           "${word.english}"`);
  if (lessonTags) lines.push(`  Lesson:            ${lessonTags}`);

  // Alternate readings
  if (word.alts && word.alts.length > 0) {
    const altStr = word.alts
      .map((a: { kana: string; romaji: string }) => `${a.kana} [${a.romaji}]`)
      .join(", ");
    lines.push(`  Alt readings:      ${altStr}`);
  }

  // Additional written forms
  if (writtenForms.length > 1) {
    lines.push(`  Also written:      ${writtenForms.slice(1).join(", ")}`);
  }

  if (!wordSentences || wordSentences.length === 0) {
    lines.push("  (no example sentences)");
  } else {
    lines.push("  Sentences:");
    for (const s of wordSentences) {
      // Highlight the cloze word in the sentence
      const highlighted = s.textJa.replace(
        s.clozeSurface,
        `[${s.clozeSurface}]`
      );
      lines.push(`    JA: ${highlighted}`);
      lines.push(`    RD: ${s.readingKana}`);
      lines.push(`    EN: ${s.textEn}`);
      lines.push("");
    }
  }

  lines.push("-".repeat(72));
}

// Summary: words with no sentences
const noSentences = deck.words.filter(
  (w: { id: string }) => !sentences[w.id] || sentences[w.id].length === 0
);
if (noSentences.length > 0) {
  lines.push("");
  lines.push("WORDS WITH NO SENTENCES:");
  for (const w of noSentences) {
    lines.push(`  ${w.id}  ${w.written[0]}  [${w.romaji}]  — "${w.prompt}"`);
  }
}

const output = lines.join("\n");
const outPath = join(ROOT, "kotoba-language-export.txt");
writeFileSync(outPath, output, "utf-8");
console.log(`Wrote ${outPath}`);
console.log(`${lines.length} lines, ${output.length} chars`);
