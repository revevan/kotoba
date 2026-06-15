import { describe, expect, it } from 'vitest';
import { barePrompt, firstClause, resolvePrompts, richPrompt } from '../tools/prompt-resolve';
import type { Word } from '../src/types';

let n = 0;
function w(english: string, kana: string, tags: string[] = []): Word {
  const id = `t-${n++}`;
  return { id, english, prompt: '', kana, written: [kana], romaji: kana, mora: [], moraKana: [], tags };
}

describe('prompt clause helpers', () => {
  it('firstClause splits on top-level ; and , but not inside parens', () => {
    expect(firstClause('to play (a string instrument, or piano)')).toBe('to play (a string instrument, or piano)');
    expect(firstClause('to open, to become open')).toBe('to open');
    expect(firstClause('kind (person), gentle (person)')).toBe('kind (person)');
  });

  it('richPrompt keeps the disambiguating parenthetical; barePrompt drops it', () => {
    expect(richPrompt('to open (v.t.)')).toBe('to open (transitive)');
    expect(barePrompt('to open (v.t.)')).toBe('to open');
  });
});

describe('resolvePrompts', () => {
  it('folds true synonyms into a primary with alts and keeps a clean prompt', () => {
    const hai = w('yes', 'はい', ['Genki_Ln.1', 'a', 'b']);
    const ee = w('yes', 'ええ', ['Genki_Ln.1', 'a']);
    const out = resolvePrompts([hai, ee]);

    expect(out).toHaveLength(1); // ee folded away
    expect(out[0]).toBe(hai); // more tags → primary
    expect(hai.prompt).toBe('yes');
    expect(hai.alts?.map((a) => a.kana)).toEqual(['ええ']);
    expect(hai.written).toContain('ええ'); // accepted when grading
  });

  it('disambiguates distinct words that merely share a bare prompt', () => {
    const asobu = w('to play; to spend time pleasantly', 'あそぶ');
    const hiku = w('to play (a string instrument or piano)', 'ひく');
    const out = resolvePrompts([asobu, hiku]);

    expect(out).toHaveLength(2); // both kept, not cross-accepted
    expect(asobu.prompt).toBe('to play');
    expect(hiku.prompt).toBe('to play (a string instrument or piano)');
    expect(asobu.alts).toBeUndefined();
    expect(asobu.written).not.toContain('ひく');
  });

  it('leaves a unique word with a clean prompt and no alts', () => {
    const inu = w('dog', 'いぬ');
    const out = resolvePrompts([inu]);
    expect(out).toHaveLength(1);
    expect(inu.prompt).toBe('dog');
    expect(inu.alts).toBeUndefined();
  });
});
