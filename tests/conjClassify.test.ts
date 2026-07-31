import { describe, expect, it } from 'vitest';
import { classifyVerb, glossIsVerb, type ClassifyToken } from '../src/conj/classify';

/** Fixture tokens mirroring real kuromoji output (no live tokenizer in tests). */
const verbToken = (surface: string, conjType: string): ClassifyToken => ({
  pos: '動詞',
  surface_form: surface,
  basic_form: surface,
  conj_type: conjType,
});

describe('glossIsVerb', () => {
  it('matches plain and qualified verb glosses', () => {
    expect(glossIsVerb('to meet, to see')).toBe(true);
    expect(glossIsVerb('(humble) to eat')).toBe(true);
    expect(glossIsVerb('To go')).toBe(true);
  });

  it('rejects non-verb glosses, including ones containing "to"', () => {
    expect(glossIsVerb('name')).toBe(false);
    expect(glossIsVerb('the day after tomorrow')).toBe(false);
    expect(glossIsVerb('together')).toBe(false);
    expect(glossIsVerb('(with te-form verb) please do for me')).toBe(false);
  });
});

describe('classifyVerb', () => {
  const w = (english: string, kana: string, surface: string) => ({ english, kana, surface });

  it('classifies each godan ending', () => {
    expect(classifyVerb(w('to buy', 'かう', '買う'), [verbToken('買う', '五段・ワ行促音便')])).toEqual({ kind: 'verb', subclass: 'godan-u' });
    expect(classifyVerb(w('to write', 'かく', '書く'), [verbToken('書く', '五段・カ行イ音便')])).toEqual({ kind: 'verb', subclass: 'godan-ku' });
    expect(classifyVerb(w('to swim', 'およぐ', '泳ぐ'), [verbToken('泳ぐ', '五段・ガ行')])).toEqual({ kind: 'verb', subclass: 'godan-gu' });
    expect(classifyVerb(w('to speak', 'はなす', '話す'), [verbToken('話す', '五段・サ行')])).toEqual({ kind: 'verb', subclass: 'godan-su' });
    expect(classifyVerb(w('to wait', 'まつ', '待つ'), [verbToken('待つ', '五段・タ行')])).toEqual({ kind: 'verb', subclass: 'godan-tsu' });
    expect(classifyVerb(w('to die', 'しぬ', '死ぬ'), [verbToken('死ぬ', '五段・ナ行')])).toEqual({ kind: 'verb', subclass: 'godan-nu' });
    expect(classifyVerb(w('to play', 'あそぶ', '遊ぶ'), [verbToken('遊ぶ', '五段・バ行')])).toEqual({ kind: 'verb', subclass: 'godan-bu' });
    expect(classifyVerb(w('to read', 'よむ', '読む'), [verbToken('読む', '五段・マ行')])).toEqual({ kind: 'verb', subclass: 'godan-mu' });
  });

  it('settles the godan-る / ichidan false friends via kuromoji', () => {
    expect(classifyVerb(w('to return home', 'かえる', '帰る'), [verbToken('帰る', '五段・ラ行')])).toEqual({ kind: 'verb', subclass: 'godan-ru' });
    expect(classifyVerb(w('to eat', 'たべる', '食べる'), [verbToken('食べる', '一段')])).toEqual({ kind: 'verb', subclass: 'ichidan' });
    expect(classifyVerb(w('to enter', 'はいる', '入る'), [verbToken('入る', '五段・ラ行')])).toEqual({ kind: 'verb', subclass: 'godan-ru' });
  });

  it('classifies irregulars and する-compounds', () => {
    expect(classifyVerb(w('to do', 'する', 'する'), [verbToken('する', 'サ変・スル')])).toEqual({ kind: 'verb', subclass: 'suru' });
    expect(classifyVerb(w('to come', 'くる', '来る'), [verbToken('来る', 'カ変・来ル')])).toEqual({ kind: 'verb', subclass: 'kuru' });
    expect(
      classifyVerb(w('to study', 'べんきょうする', '勉強する'), [
        { pos: '名詞', surface_form: '勉強' },
        verbToken('する', 'サ変・スル'),
      ]),
    ).toEqual({ kind: 'verb', subclass: 'suru' });
  });

  it('skips non-verbs without touching the tokenizer result', () => {
    expect(classifyVerb(w('name', 'なまえ', '名前'), null)).toEqual({ kind: 'not-verb' });
  });

  it('flags disagreements as ambiguous instead of guessing', () => {
    // kuromoji says ichidan but the reading cannot be ichidan (a-row before る).
    expect(classifyVerb(w('to fake', 'わかる', '分かる'), [verbToken('分かる', '一段')]).kind).toBe('ambiguous');
    // Verb gloss but the entry is not a dictionary form.
    expect(classifyVerb(w('to go (polite)', 'いきます', '行きます'), [verbToken('行きます', '五段・カ行イ音便')]).kind).toBe('ambiguous');
    // Parse lemmatizes to a different verb → don't trust it.
    expect(
      classifyVerb(w('to put on', 'きる', '着る'), [{ pos: '動詞', surface_form: '着る', basic_form: 'くる', conj_type: '一段' }]).kind,
    ).toBe('ambiguous');
    // No parse at all.
    expect(classifyVerb(w('to exist', 'ある', 'ある'), null).kind).toBe('ambiguous');
  });

  it('requires the kuromoji class to match the kana ending', () => {
    expect(classifyVerb(w('to write', 'かく', '書く'), [verbToken('書く', '五段・ガ行')]).kind).toBe('ambiguous');
  });
});
