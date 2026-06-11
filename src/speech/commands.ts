export type VoiceCommand = 'gotit' | 'missed' | 'repeat' | 'skip' | 'pause' | 'resume';

const PATTERNS: Array<[VoiceCommand, string[]]> = [
  ['gotit', ['got it', 'correct', 'yes', 'yeah', 'yep', 'right', 'i got it', 'nailed it']],
  ['missed', ['missed it', 'missed', 'no', 'nope', 'wrong', 'i missed', 'forgot', 'again']],
  ['repeat', ['repeat', 'say that again', 'one more time', "what's the word", 'say it again']],
  ['skip', ['skip', 'next', 'pass', 'move on']],
  ['pause', ['pause', 'stop', 'hold on', 'wait']],
  ['resume', ['resume', 'continue', 'start', 'go', "let's go", 'ready', 'unpause']],
];

/** Parse en-US recognition alternatives into a voice command, if any. */
export function parseCommand(alternatives: string[]): VoiceCommand | null {
  for (const alt of alternatives) {
    const text = alt.toLowerCase().trim();
    for (const [cmd, phrases] of PATTERNS) {
      if (phrases.some((p) => text === p || text.includes(p))) return cmd;
    }
  }
  return null;
}
