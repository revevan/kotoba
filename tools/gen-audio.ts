// Pre-generates the entire audio corpus as MP3s using the free Microsoft Edge
// neural TTS endpoint (msedge-tts). Idempotent: a manifest of content hashes
// skips clips that are already generated. Run: npm run gen-audio [deckId ...]

import { createHash } from 'node:crypto';
import { createWriteStream, existsSync, mkdirSync, readFileSync, readdirSync, renameSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import type { Deck, Sentence } from '../src/types';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const decksDir = join(root, 'public', 'decks');
const sentencesDir = join(root, 'public', 'sentences');
const audioDir = join(root, 'public', 'audio');
const manifestPath = join(root, 'tools', 'audio-manifest.json');

const JA_VOICE = 'ja-JP-NanamiNeural';
const EN_VOICE = 'en-US-AriaNeural';

const PHRASES: Record<string, string> = {
  'session-start': "Let's begin!",
  'in-japanese': 'In Japanese:',
  'repeat-after-me': 'Repeat after me.',
  'one-more-time': 'One more time —',
  'how-do-you-say': 'How do you say —',
  'correct': 'Correct!',
  'not-quite': 'Not quite.',
  'the-answer-is': 'The answer is —',
  'knew-it': 'Say — got it — or — missed it.',
  'also-hear': 'You may also hear —',
  'for-example': 'For example —',
  'fill-the-blank': 'Fill in the blank.',
  'repeat-the-sentence': 'Repeat the sentence —',
  'make-a-sentence': 'Make your own sentence with —',
  // "resume" is a heteronym and the neural voice reads it as the noun "résumé".
  // The free Edge endpoint rejects SSML <phoneme>, so spell it phonetically to
  // force the verb /rɪˈzum/. (On-screen the button still reads "Resume".)
  'paused': "Paused. Press rezoom when you're ready.",
  'resuming': 'Resuming!',
  'session-done': 'Session complete. Great work!',
};

// Japanese announcer variants (Settings → "Announcer speaks Japanese"), same
// keys, served from phrases-ja/. Phrases lead their sequence, so each must
// work in prefix position before the word/sentence clip that follows it.
// Voice commands stay English ("got it"/"missed it") — self-grade recognition
// runs en-US regardless of the announcer voice.
const PHRASES_JA: Record<string, string> = {
  'session-start': '始めましょう！',
  'in-japanese': '日本語で：',
  'repeat-after-me': 'リピートしてください。',
  'one-more-time': 'もう一度 —',
  'how-do-you-say': '日本語でどう言いますか —',
  'correct': '正解！',
  'not-quite': '残念！',
  'the-answer-is': '答えは —',
  'knew-it': 'got it、か、missed it、と言ってください。',
  'also-hear': 'こうも言います —',
  'for-example': '例えば —',
  'fill-the-blank': '空欄を埋めてください。',
  'repeat-the-sentence': '文をリピートしてください —',
  'make-a-sentence': 'この言葉で文を作ってください —',
  'paused': '一時停止しました。準備ができたら、リジューム、を押してください。',
  'resuming': '再開します！',
  'session-done': 'セッション終了です。お疲れ様でした！',
};

interface Job {
  out: string; // path relative to public/audio
  text: string;
  voice: string;
  rate?: string;
}

function hashOf(job: Job): string {
  return createHash('sha1').update(`${job.voice}|${job.rate ?? ''}|${job.text}`).digest('hex');
}

/** Writes a short sine-tone beep WAV (no encoder needed) for the cloze gap. */
function writeBeep(): void {
  const out = join(audioDir, 'phrases', 'beep.wav');
  if (existsSync(out)) return;
  const rate = 24000;
  const ms = 220;
  const freq = 880;
  const n = Math.round((rate * ms) / 1000);
  const fade = Math.round(rate * 0.012); // 12ms fades to avoid clicks
  const buf = Buffer.alloc(44 + n * 2);
  buf.write('RIFF', 0);
  buf.writeUInt32LE(36 + n * 2, 4);
  buf.write('WAVE', 8);
  buf.write('fmt ', 12);
  buf.writeUInt32LE(16, 16);
  buf.writeUInt16LE(1, 20); // PCM
  buf.writeUInt16LE(1, 22); // mono
  buf.writeUInt32LE(rate, 24);
  buf.writeUInt32LE(rate * 2, 28);
  buf.writeUInt16LE(2, 32);
  buf.writeUInt16LE(16, 34);
  buf.write('data', 36);
  buf.writeUInt32LE(n * 2, 40);
  for (let i = 0; i < n; i++) {
    const env = Math.min(1, i / fade, (n - i) / fade);
    const sample = Math.sin((2 * Math.PI * freq * i) / rate) * env * 0.3;
    buf.writeInt16LE(Math.round(sample * 32767), 44 + i * 2);
  }
  writeFileSync(out, buf);
}

function loadDecks(only: string[]): Deck[] {
  const files = readdirSync(decksDir).filter((f) => f.endsWith('.json') && f !== 'index.json');
  const decks = files.map((f) => JSON.parse(readFileSync(join(decksDir, f), 'utf8')) as Deck);
  return only.length > 0 ? decks.filter((d) => only.includes(d.id)) : decks;
}

/** Approved sentence pools for the given decks (public/sentences/{deckId}.json). */
function loadSentences(decks: Deck[]): Sentence[] {
  const out: Sentence[] = [];
  for (const deck of decks) {
    const path = join(sentencesDir, `${deck.id}.json`);
    if (!existsSync(path)) continue;
    const pool = JSON.parse(readFileSync(path, 'utf8')) as Record<string, Sentence[]>;
    for (const list of Object.values(pool)) out.push(...list);
  }
  return out;
}

/** Split a sentence into the audio before and after the gapped target word. */
function splitAtCloze(s: Sentence): { pre: string; post: string } | null {
  const i = s.textJa.indexOf(s.clozeSurface);
  if (i < 0) return null;
  return { pre: s.textJa.slice(0, i).trim(), post: s.textJa.slice(i + s.clozeSurface.length).trim() };
}

function collectJobs(decks: Deck[]): Job[] {
  const jobs = new Map<string, Job>();
  for (const [key, text] of Object.entries(PHRASES)) {
    jobs.set(`phrases/${key}.mp3`, { out: `phrases/${key}.mp3`, text, voice: EN_VOICE });
  }
  for (const [key, text] of Object.entries(PHRASES_JA)) {
    jobs.set(`phrases-ja/${key}.mp3`, { out: `phrases-ja/${key}.mp3`, text, voice: JA_VOICE });
  }
  // Example sentences: full natural clip, English, and the pre/post split that
  // the cloze beep plays between. (The beep itself is a static WAV, below.)
  for (const s of loadSentences(decks)) {
    jobs.set(`sen/${s.id}.mp3`, { out: `sen/${s.id}.mp3`, text: s.textJa, voice: JA_VOICE });
    jobs.set(`sen-en/${s.id}.mp3`, { out: `sen-en/${s.id}.mp3`, text: s.textEn, voice: EN_VOICE });
    const split = splitAtCloze(s);
    if (split) {
      if (split.pre) jobs.set(`sen-pre/${s.id}.mp3`, { out: `sen-pre/${s.id}.mp3`, text: split.pre, voice: JA_VOICE });
      if (split.post) jobs.set(`sen-post/${s.id}.mp3`, { out: `sen-post/${s.id}.mp3`, text: split.post, voice: JA_VOICE });
    } else {
      console.warn(`cloze surface "${s.clozeSurface}" not found in sentence ${s.id}`);
    }
  }
  for (const deck of decks) {
    for (const w of deck.words) {
      // `speak` overrides the TTS input where bare kana gets the pitch accent
      // wrong (kanji restores the accent context); kana remains the default.
      jobs.set(`ja/${w.id}.mp3`, { out: `ja/${w.id}.mp3`, text: w.speak ?? w.kana, voice: JA_VOICE });
      jobs.set(`ja-slow/${w.id}.mp3`, { out: `ja-slow/${w.id}.mp3`, text: w.speak ?? w.kana, voice: JA_VOICE, rate: '-40%' });
      jobs.set(`en/${w.id}.mp3`, { out: `en/${w.id}.mp3`, text: w.prompt, voice: EN_VOICE });
      // Alternate readings reuse their original id; teach mentions them aloud.
      for (const alt of w.alts ?? []) {
        jobs.set(`ja/${alt.id}.mp3`, { out: `ja/${alt.id}.mp3`, text: alt.speak ?? alt.kana, voice: JA_VOICE });
      }
      w.mora.forEach((key, i) => {
        if (key === 'q') return;
        jobs.set(`mora/${key}.mp3`, { out: `mora/${key}.mp3`, text: w.moraKana[i] === 'ー' ? w.moraKana[i - 1] ?? 'あ' : w.moraKana[i], voice: JA_VOICE, rate: '-20%' });
      });
    }
  }
  return [...jobs.values()];
}

async function main() {
  const only = process.argv.slice(2);
  const decks = loadDecks(only);
  console.log(`decks: ${decks.map((d) => d.id).join(', ')}`);

  const manifest: Record<string, string> = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : {};
  const jobs = collectJobs(decks).filter((job) => {
    const path = join(audioDir, job.out);
    return !(existsSync(path) && manifest[job.out] === hashOf(job));
  });
  console.log(`to generate: ${jobs.length} clips`);

  for (const sub of ['ja', 'ja-slow', 'en', 'mora', 'phrases', 'phrases-ja', 'sen', 'sen-en', 'sen-pre', 'sen-post']) {
    mkdirSync(join(audioDir, sub), { recursive: true });
  }
  writeBeep(); // cloze gap filler — a static tone, not TTS

  // One TTS connection per (voice, rate) config; clips generated sequentially
  // to be polite to the free endpoint.
  const clients = new Map<string, MsEdgeTTS>();
  const getClient = async (job: Job) => {
    const key = `${job.voice}|${job.rate ?? ''}`;
    let c = clients.get(key);
    if (!c) {
      c = new MsEdgeTTS();
      await c.setMetadata(job.voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
      clients.set(key, c);
    }
    return c;
  };

  let done = 0;
  let failed = 0;
  for (const job of jobs) {
    const outPath = join(audioDir, job.out);
    const tmpPath = `${outPath}.tmp`;
    let attempts = 0;
    for (;;) {
      try {
        const client = await getClient(job);
        const { audioStream } = client.toStream(job.text, job.rate ? { rate: job.rate } : undefined);
        await pipeline(audioStream, createWriteStream(tmpPath));
        renameSync(tmpPath, outPath);
        manifest[job.out] = hashOf(job);
        done++;
        break;
      } catch (e) {
        attempts++;
        clients.clear(); // drop possibly-broken connections
        if (attempts >= 3) {
          console.error(`FAILED ${job.out}: ${e instanceof Error ? e.message : e}`);
          failed++;
          break;
        }
        await new Promise((r) => setTimeout(r, 1500 * attempts));
      }
    }
    if (done % 25 === 0 && done > 0) {
      console.log(`  ${done}/${jobs.length}`);
      writeFileSync(manifestPath, JSON.stringify(manifest, null, 1));
    }
  }

  writeFileSync(manifestPath, JSON.stringify(manifest, null, 1));
  console.log(`generated ${done}, failed ${failed}, skipped ${collectJobs(decks).length - jobs.length}`);
  for (const c of clients.values()) c.close();
  process.exit(failed > 0 ? 1 : 0);
}

void main();
