import { describe, expect, it } from 'vitest';
import {
  ALL_FORMS,
  FORM_MEANINGS,
  allRules,
  allSpeechSegments,
  conjCardId,
  conjugate,
  cueKind,
  expectedAnswer,
  formRegister,
  groupsForForm,
  meaningSegments,
  parseSegments,
  segKey,
  isConjCardId,
  parseConjCardId,
  patternGroup,
  ruleFor,
  type ConjForm,
  type ConjInput,
} from '../src/conj/engine';

const v = (kana: string, surface: string, subclass: ConjInput['subclass']): ConjInput => ({ kana, surface, subclass });

const 買う = v('かう', '買う', 'godan-u');
const 書く = v('かく', '書く', 'godan-ku');
const 泳ぐ = v('およぐ', '泳ぐ', 'godan-gu');
const 話す = v('はなす', '話す', 'godan-su');
const 待つ = v('まつ', '待つ', 'godan-tsu');
const 死ぬ = v('しぬ', '死ぬ', 'godan-nu');
const 遊ぶ = v('あそぶ', '遊ぶ', 'godan-bu');
const 読む = v('よむ', '読む', 'godan-mu');
const 帰る = v('かえる', '帰る', 'godan-ru'); // false friend: looks ichidan
const 食べる = v('たべる', '食べる', 'ichidan');
const 見る = v('みる', '見る', 'ichidan');
const 行く = v('いく', '行く', 'godan-ku'); // irregular te/ta
const ある = v('ある', 'ある', 'godan-ru'); // irregular nai
const する = v('する', 'する', 'suru');
const 勉強する = v('べんきょうする', '勉強する', 'suru');
const 来る = v('くる', '来る', 'kuru');

/** kana / surface golden pairs per verb per form. */
const GOLDEN: Array<[ConjInput, ConjForm, string, string]> = [
  // masu
  [買う, 'masu', 'かいます', '買います'],
  [書く, 'masu', 'かきます', '書きます'],
  [帰る, 'masu', 'かえります', '帰ります'],
  [食べる, 'masu', 'たべます', '食べます'],
  [勉強する, 'masu', 'べんきょうします', '勉強します'],
  [来る, 'masu', 'きます', '来ます'],
  // te — the contraction split
  [買う, 'te', 'かって', '買って'],
  [待つ, 'te', 'まって', '待って'],
  [帰る, 'te', 'かえって', '帰って'],
  [読む, 'te', 'よんで', '読んで'],
  [死ぬ, 'te', 'しんで', '死んで'],
  [遊ぶ, 'te', 'あそんで', '遊んで'],
  [書く, 'te', 'かいて', '書いて'],
  [泳ぐ, 'te', 'およいで', '泳いで'],
  [話す, 'te', 'はなして', '話して'],
  [行く, 'te', 'いって', '行って'],
  [食べる, 'te', 'たべて', '食べて'],
  [見る, 'te', 'みて', '見て'],
  [する, 'te', 'して', 'して'],
  [来る, 'te', 'きて', '来て'],
  // ta mirrors te
  [読む, 'ta', 'よんだ', '読んだ'],
  [泳ぐ, 'ta', 'およいだ', '泳いだ'],
  [行く, 'ta', 'いった', '行った'],
  [食べる, 'ta', 'たべた', '食べた'],
  // nai
  [買う, 'nai', 'かわない', '買わない'], // う → わ, not あ
  [書く, 'nai', 'かかない', '書かない'],
  [帰る, 'nai', 'かえらない', '帰らない'],
  [食べる, 'nai', 'たべない', '食べない'],
  [ある, 'nai', 'ない', 'ない'],
  [する, 'nai', 'しない', 'しない'],
  [来る, 'nai', 'こない', '来ない'],
  // stage 2
  [買う, 'nakatta', 'かわなかった', '買わなかった'],
  [ある, 'nakatta', 'なかった', 'なかった'],
  [読む, 'tai', 'よみたい', '読みたい'],
  [食べる, 'teiru', 'たべている', '食べている'],
  [書く, 'teiru', 'かいている', '書いている'],
  // stage 3
  [書く, 'potential', 'かける', '書ける'],
  [食べる, 'potential', 'たべられる', '食べられる'],
  [する, 'potential', 'できる', 'できる'],
  [来る, 'potential', 'こられる', '来られる'],
  [行く, 'volitional', 'いこう', '行こう'],
  [食べる, 'volitional', 'たべよう', '食べよう'],
  [買う, 'ba', 'かえば', '買えば'],
  [食べる, 'ba', 'たべれば', '食べれば'],
  [する, 'ba', 'すれば', 'すれば'],
  [来る, 'ba', 'くれば', '来れば'],
  [読む, 'tara', 'よんだら', '読んだら'],
  [行く, 'tara', 'いったら', '行ったら'],
  [食べる, 'tara', 'たべたら', '食べたら'],
  // stage 4
  [読む, 'passive', 'よまれる', '読まれる'],
  [食べる, 'passive', 'たべられる', '食べられる'],
  [書く, 'causative', 'かかせる', '書かせる'],
  [食べる, 'causative', 'たべさせる', '食べさせる'],
  [来る, 'causative', 'こさせる', '来させる'],
  [書く, 'imperative', 'かけ', '書け'],
  [食べる, 'imperative', 'たべろ', '食べろ'],
  [する, 'imperative', 'しろ', 'しろ'],
  [来る, 'imperative', 'こい', '来い'],
];

describe('conjugate', () => {
  it.each(GOLDEN.map(([input, form, kana, surface]) => [input.surface, form, input, kana, surface] as const))(
    '%s → %s',
    (_name, form, input, kana, surface) => {
      const out = conjugate(input, form);
      expect(out.kana).toBe(kana);
      expect(out.surface).toBe(surface);
    },
  );

  it('accepts ら抜き potential for ichidan as an alt, not the answer', () => {
    const out = conjugate(食べる, 'potential');
    expect(out.kana).toBe('たべられる');
    expect(out.altKana).toEqual(['たべれる']);
  });

  it('produces a value for every form × subclass', () => {
    for (const verb of [買う, 書く, 泳ぐ, 話す, 待つ, 死ぬ, 遊ぶ, 読む, 帰る, 食べる, する, 勉強する, 来る]) {
      for (const form of ALL_FORMS) {
        const out = conjugate(verb, form);
        expect(out.kana.length, `${verb.surface} ${form}`).toBeGreaterThan(0);
        expect(out.surface.length, `${verb.surface} ${form}`).toBeGreaterThan(0);
      }
    }
  });
});

describe('patternGroup', () => {
  it('splits contraction forms by godan ending cluster', () => {
    expect(patternGroup('te', 'godan-u')).toBe('godan-utsuru');
    expect(patternGroup('te', 'godan-tsu')).toBe('godan-utsuru');
    expect(patternGroup('ta', 'godan-ru')).toBe('godan-utsuru');
    expect(patternGroup('te', 'godan-mu')).toBe('godan-munubu');
    expect(patternGroup('tara', 'godan-bu')).toBe('godan-munubu');
    expect(patternGroup('te', 'godan-ku')).toBe('godan-ku');
    expect(patternGroup('teiru', 'godan-gu')).toBe('godan-gu');
  });

  it('collapses row-shift forms to one godan group', () => {
    expect(patternGroup('masu', 'godan-ku')).toBe('godan');
    expect(patternGroup('nai', 'godan-u')).toBe('godan');
    expect(patternGroup('potential', 'godan-ru')).toBe('godan');
  });

  it('keeps ichidan and irregulars separate everywhere', () => {
    expect(patternGroup('te', 'ichidan')).toBe('ichidan');
    expect(patternGroup('masu', 'suru')).toBe('suru');
    expect(patternGroup('nai', 'kuru')).toBe('kuru');
  });

  it('groupsForForm covers the split forms with 8 groups, others with 4', () => {
    expect(groupsForForm('te')).toHaveLength(8);
    expect(groupsForForm('masu')).toHaveLength(4);
  });
});

describe('conj card ids', () => {
  it('round-trips', () => {
    const id = conjCardId('te', 'godan-munubu');
    expect(id).toBe('conj:te:godan-munubu');
    expect(isConjCardId(id)).toBe(true);
    expect(parseConjCardId(id)).toEqual({ form: 'te', group: 'godan-munubu' });
  });

  it('rejects word ids', () => {
    expect(isConjCardId('n5-f68273d2')).toBe(false);
    expect(parseConjCardId('n5-f68273d2')).toBeNull();
  });
});

describe('rules', () => {
  it('has a rule (key + text) for every scheduled form × group', () => {
    for (const { form, group, rule } of allRules()) {
      expect(rule.key).toBe(`rule-${form}-${group}`);
      expect(rule.en.length, `${form} ${group}`).toBeGreaterThan(0);
    }
  });

  it('mentions the irregular 行く exception on godan-ku te', () => {
    expect(ruleFor('te', 'godan-ku').en).toContain('iku');
  });
});

describe('polite family (masen/mashita/masendeshita)', () => {
  const POLITE: Array<[ConjInput, ConjForm, string, string]> = [
    [買う, 'masen', 'かいません', '買いません'],
    [書く, 'mashita', 'かきました', '書きました'],
    [帰る, 'masendeshita', 'かえりませんでした', '帰りませんでした'],
    [食べる, 'masen', 'たべません', '食べません'],
    [食べる, 'mashita', 'たべました', '食べました'],
    [食べる, 'masendeshita', 'たべませんでした', '食べませんでした'],
    [ある, 'masen', 'ありません', 'ありません'],
    [勉強する, 'mashita', 'べんきょうしました', '勉強しました'],
    [する, 'masendeshita', 'しませんでした', 'しませんでした'],
    [来る, 'masen', 'きません', '来ません'],
    [来る, 'mashita', 'きました', '来ました'],
  ];
  it.each(POLITE.map(([input, form, kana, surface]) => [input.surface, form, input, kana, surface] as const))('%s → %s', (_n, form, input, kana, surface) => {
    const out = conjugate(input, form);
    expect(out.kana).toBe(kana);
    expect(out.surface).toBe(surface);
  });

  it('groups like masu (no contraction split)', () => {
    expect(patternGroup('masen', 'godan-ku')).toBe('godan');
    expect(patternGroup('masendeshita', 'godan-u')).toBe('godan');
    expect(patternGroup('mashita', 'ichidan')).toBe('ichidan');
  });
});

describe('cue metadata', () => {
  it('label-cues the structural/ambiguous forms only', () => {
    expect(cueKind('te')).toBe('label');
    expect(cueKind('ba')).toBe('label');
    expect(cueKind('tara')).toBe('label');
    expect(cueKind('passive')).toBe('label');
    expect(cueKind('causative')).toBe('label');
    expect(cueKind('nai')).toBe('meaning');
    expect(cueKind('mashita')).toBe('meaning');
    expect(cueKind('imperative')).toBe('meaning');
  });

  it('tags registers on the plain/polite twin cards', () => {
    expect(formRegister('nai')).toBe('casual');
    expect(formRegister('masen')).toBe('polite');
    expect(formRegister('mashita')).toBe('polite');
    expect(formRegister('tai')).toBeNull();
    expect(formRegister('te')).toBeNull();
  });

  it('has a meaning line for every form', () => {
    for (const form of ALL_FORMS) expect(FORM_MEANINGS[form].length).toBeGreaterThan(0);
  });
});

describe('expectedAnswer (polite alts on untagged meaning cues)', () => {
  it('accepts the polite twin for tai/teiru/potential/volitional', () => {
    expect(expectedAnswer(食べる, 'tai').altKana).toContain('たべたいです');
    expect(expectedAnswer(書く, 'teiru').altKana).toContain('かいています');
    expect(expectedAnswer(食べる, 'potential').altKana).toEqual(expect.arrayContaining(['たべれる', 'たべられます']));
    expect(expectedAnswer(行く, 'volitional').altKana).toContain('いきましょう');
    expect(expectedAnswer(する, 'potential').altKana).toContain('できます');
  });

  it('adds NO alt to register-tagged forms — the cue named the register', () => {
    expect(expectedAnswer(食べる, 'nai').altKana).toBeUndefined();
    expect(expectedAnswer(食べる, 'mashita').altKana).toBeUndefined();
  });

  it('adds no alt to label-cued forms', () => {
    expect(expectedAnswer(食べる, 'te').altKana).toBeUndefined();
    expect(expectedAnswer(読む, 'passive').altKana).toBeUndefined();
  });
});

describe('speech segments', () => {
  it('splits a template into EN/JA segments with pauses for bare punctuation', () => {
    expect(parseSegments('{う}, {つ} and {る} verbs: drop the ending, add {って}')).toEqual([
      { lang: 'ja', text: 'う' },
      { lang: 'pause' },
      { lang: 'ja', text: 'つ' },
      { lang: 'en', text: 'and' },
      { lang: 'ja', text: 'る' },
      { lang: 'en', text: 'verbs: drop the ending, add' },
      { lang: 'ja', text: 'って' },
    ]);
  });

  it('keys segments stably and dedupes across the corpus', () => {
    const a = segKey({ lang: 'ja', text: 'る' });
    expect(a).toBe(segKey({ lang: 'ja', text: 'る' }));
    expect(a).not.toBe(segKey({ lang: 'en', text: 'る' }));
    const all = allSpeechSegments();
    expect(all.length).toBeGreaterThan(20);
    expect(new Set(all.map(segKey)).size).toBe(all.length);
  });

  it('rules and meanings expose segments with the kana intact', () => {
    const segs = ruleFor('causative', 'ichidan').segments;
    expect(segs).toContainEqual({ lang: 'ja', text: 'いちだん' });
    expect(segs).toContainEqual({ lang: 'ja', text: 'させる' });
    expect(meaningSegments('te')).toContainEqual({ lang: 'ja', text: 'たべて' });
  });
});
