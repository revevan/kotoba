export type VoiceCommand = 'gotit' | 'missed' | 'repeat' | 'skip' | 'pause' | 'resume';

const PATTERNS: Array<[VoiceCommand, string[]]> = [
  ['gotit', ['got it', 'correct', 'yes', 'yeah', 'yep', 'right', 'i got it', 'nailed it', 'knew it', 'i knew it', 'i know it']],
  // Negated affirmatives listed here so their longer phrase outranks the
  // affirmative word inside them ("not right" must not match gotit's "right").
  ['missed', ['missed it', 'missed', 'no', 'nope', 'wrong', 'i missed', 'forgot', 'again', 'not right', 'not correct', 'not quite', "didn't get it", 'did not get it']],
  ['repeat', ['repeat', 'say that again', 'one more time', "what's the word", 'say it again']],
  ['skip', ['skip', 'next', 'pass', 'move on']],
  ['pause', ['pause', 'stop', 'hold on', 'wait']],
  ['resume', ['resume', 'continue', 'start', 'go', "let's go", 'ready', 'unpause']],
];

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// All phrases longest-first so "not right" (missed) wins over its substring
// "right" (gotit), with word-boundary matching so "no" can't fire inside
// "know" (which previously graded "I know it" as missed).
const MATCHERS: Array<[VoiceCommand, RegExp]> = PATTERNS.flatMap(([cmd, phrases]) =>
  phrases.map((p): [VoiceCommand, RegExp] => [cmd, new RegExp(`\\b${escapeRe(p)}\\b`)]),
).sort((a, b) => b[1].source.length - a[1].source.length);

/** Parse en-US recognition alternatives into a voice command, if any. */
export function parseCommand(alternatives: string[]): VoiceCommand | null {
  for (const alt of alternatives) {
    const text = alt.toLowerCase().trim();
    for (const [cmd, re] of MATCHERS) {
      if (re.test(text)) return cmd;
    }
  }
  return null;
}
