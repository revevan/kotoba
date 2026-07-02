import { describe, expect, it } from 'vitest';
import { parseCommand } from '../src/speech/commands';

describe('parseCommand', () => {
  it('matches plain affirmatives and negatives', () => {
    expect(parseCommand(['got it'])).toBe('gotit');
    expect(parseCommand(['Yes'])).toBe('gotit');
    expect(parseCommand(['I knew it'])).toBe('gotit');
    expect(parseCommand(['missed it'])).toBe('missed');
    expect(parseCommand(['nope'])).toBe('missed');
  });

  it('respects word boundaries — "no" must not fire inside "know"', () => {
    expect(parseCommand(['I know it'])).toBe('gotit');
    expect(parseCommand(['know'])).toBe(null);
  });

  it('longer negated phrases beat their affirmative substrings', () => {
    expect(parseCommand(['not right'])).toBe('missed');
    expect(parseCommand(['not correct'])).toBe('missed');
    expect(parseCommand(["didn't get it"])).toBe('missed');
  });

  it('matches phrases embedded in longer utterances', () => {
    expect(parseCommand(['yeah I got it'])).toBe('gotit');
    expect(parseCommand(['uh skip that one'])).toBe('skip');
  });

  it('uses later alternatives and returns null for unrelated speech', () => {
    expect(parseCommand(['banana', 'repeat'])).toBe('repeat');
    expect(parseCommand(['the weather is nice'])).toBe(null);
    expect(parseCommand([])).toBe(null);
  });
});
