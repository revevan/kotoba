import { describe, expect, it } from 'vitest';
import { baseVerb, cueFor, ingForm, pastTense } from '../src/conj/englishCue';

describe('pastTense', () => {
  it('handles irregulars', () => {
    expect(pastTense('eat')).toBe('ate');
    expect(pastTense('sleep')).toBe('slept');
    expect(pastTense('go')).toBe('went');
    expect(pastTense('get')).toBe('got');
    expect(pastTense('swim')).toBe('swam');
    expect(pastTense('read')).toBe('read');
  });

  it('handles regular rules', () => {
    expect(pastTense('play')).toBe('played'); // vowel+y keeps y
    expect(pastTense('carry')).toBe('carried'); // consonant+y → ied
    expect(pastTense('use')).toBe('used'); // e → +d
    expect(pastTense('stop')).toBe('stopped'); // CVC doubling
    expect(pastTense('open')).toBe('opened'); // long word: no doubling
    expect(pastTense('visit')).toBe('visited');
    expect(pastTense('walk')).toBe('walked');
  });
});

describe('ingForm', () => {
  it('applies -ing rules', () => {
    expect(ingForm('sleep')).toBe('sleeping');
    expect(ingForm('come')).toBe('coming');
    expect(ingForm('see')).toBe('seeing');
    expect(ingForm('swim')).toBe('swimming');
    expect(ingForm('die')).toBe('dying');
    expect(ingForm('study')).toBe('studying');
  });
});

describe('baseVerb', () => {
  it('strips "to", parentheticals, and extra senses', () => {
    expect(baseVerb('to sleep')).toBe('sleep');
    expect(baseVerb('(humble) to eat')).toBe('eat');
    expect(baseVerb('to get up (e.g., from sleeping)')).toBe('get up');
    expect(baseVerb('to meet, to see')).toBe('meet');
    expect(baseVerb('to return home; to go back')).toBe('return home');
  });

  it('returns null for non-verb glosses', () => {
    expect(baseVerb('name')).toBeNull();
    expect(baseVerb('the day after tomorrow')).toBeNull();
  });
});

describe('cueFor', () => {
  it('builds meaning cues per form', () => {
    expect(cueFor('sleep', 'ta')).toBe('slept');
    expect(cueFor('sleep', 'mashita')).toBe('slept'); // register tag differs, text matches
    expect(cueFor('sleep', 'nai')).toBe("doesn't sleep");
    expect(cueFor('sleep', 'nakatta')).toBe("didn't sleep");
    expect(cueFor('eat', 'tai')).toBe('want to eat');
    expect(cueFor('eat', 'teiru')).toBe('is eating');
    expect(cueFor('swim', 'teiru')).toBe('is swimming');
    expect(cueFor('go', 'potential')).toBe('can go');
    expect(cueFor('go', 'volitional')).toBe("let's go");
    expect(cueFor('sleep', 'imperative')).toBe('sleep!');
    expect(cueFor('sleep', 'masu')).toBe('sleep');
    expect(cueFor('get up', 'ta')).toBe('got up'); // multi-word: inflect the head
  });

  it('returns null for label-cued forms', () => {
    expect(cueFor('sleep', 'te')).toBeNull();
    expect(cueFor('sleep', 'ba')).toBeNull();
    expect(cueFor('sleep', 'passive')).toBeNull();
  });
});
