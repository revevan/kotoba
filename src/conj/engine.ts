import { toRomaji } from 'wanakana';

// Deterministic Japanese verb conjugation: dictionary form → target form, for
// the conjugation exercise. Pure data+string transforms so it runs in the app
// and in the content pipeline (tools/) alike. The pedagogical unit here is the
// *pattern* (form × pattern group), not the individual verb: one FSRS card per
// pattern, with concrete verbs sampled at session time (see conjPlanner).

export type VerbSubclass =
  | 'godan-u'
  | 'godan-ku'
  | 'godan-gu'
  | 'godan-su'
  | 'godan-tsu'
  | 'godan-nu'
  | 'godan-bu'
  | 'godan-mu'
  | 'godan-ru'
  | 'ichidan'
  | 'suru'
  | 'kuru';

export type ConjForm =
  | 'masu'
  | 'masen'
  | 'mashita'
  | 'masendeshita'
  | 'te'
  | 'ta'
  | 'nai'
  | 'nakatta'
  | 'tai'
  | 'teiru'
  | 'potential'
  | 'volitional'
  | 'ba'
  | 'tara'
  | 'passive'
  | 'causative'
  | 'imperative';

/** Unlock ladder: a stage's forms become schedulable once the previous stage's
 *  cards are stable (see conjPlanner). Order within a stage doesn't matter —
 *  practice interleaves all unlocked forms. Plain and polite registers are
 *  separate cards on purpose: both are taught, and the cue names the register. */
export const FORM_STAGES: ConjForm[][] = [
  ['masu', 'te', 'ta', 'nai'],
  ['mashita', 'masen', 'nakatta', 'tai'],
  ['masendeshita', 'teiru', 'potential', 'volitional'],
  ['ba', 'tara', 'passive', 'causative', 'imperative'],
];

export const ALL_FORMS: ConjForm[] = FORM_STAGES.flat();

/** Spoken/displayed name of each form (matches the prompt phrase audio). */
export const FORM_LABELS: Record<ConjForm, string> = {
  masu: 'polite form',
  masen: 'polite negative',
  mashita: 'polite past',
  masendeshita: 'polite past negative',
  te: 'te-form',
  ta: 'plain past',
  nai: 'negative',
  nakatta: 'past negative',
  tai: 'want-to form',
  teiru: 'progressive form',
  potential: 'potential form',
  volitional: 'volitional form',
  ba: 'ba-conditional',
  tara: 'tara-conditional',
  passive: 'passive form',
  causative: 'causative form',
  imperative: 'imperative form',
};

// Godan stem rows, keyed by the dictionary-form ending.
const I_ROW: Record<string, string> = { う: 'い', く: 'き', ぐ: 'ぎ', す: 'し', つ: 'ち', ぬ: 'に', ぶ: 'び', む: 'み', る: 'り' };
const A_ROW: Record<string, string> = { う: 'わ', く: 'か', ぐ: 'が', す: 'さ', つ: 'た', ぬ: 'な', ぶ: 'ば', む: 'ま', る: 'ら' };
const E_ROW: Record<string, string> = { う: 'え', く: 'け', ぐ: 'げ', す: 'せ', つ: 'て', ぬ: 'ね', ぶ: 'べ', む: 'め', る: 'れ' };
const O_ROW: Record<string, string> = { う: 'お', く: 'こ', ぐ: 'ご', す: 'そ', つ: 'と', ぬ: 'の', ぶ: 'ぼ', む: 'も', る: 'ろ' };

// Godan te-form contraction by ending; ta/tara derive from it.
const TE_SUFFIX: Record<string, string> = { う: 'って', つ: 'って', る: 'って', む: 'んで', ぬ: 'んで', ぶ: 'んで', く: 'いて', ぐ: 'いで', す: 'して' };

export interface ConjInput {
  /** Dictionary-form hiragana reading (e.g. たべる). */
  kana: string;
  /** Dictionary-form written surface (e.g. 食べる); may equal kana. */
  surface: string;
  subclass: VerbSubclass;
}

export interface Conjugated {
  /** Hiragana of the conjugated form — the canonical expected answer. */
  kana: string;
  /** Written surface of the conjugated form (kanji stem preserved). */
  surface: string;
  /** Additionally accepted spoken variants (e.g. ら抜き potential). */
  altKana?: string[];
}

/** Irregular te/ta: 行く contracts like a う-verb (行って), not a く-verb. */
const isIku = (kana: string) => kana === 'いく' || kana === 'ゆく';

/** Godan suffix (everything after the dropped dictionary ending) per form. */
function godanSuffix(form: ConjForm, ending: string, kana: string): string {
  switch (form) {
    case 'masu':
      return I_ROW[ending] + 'ます';
    case 'masen':
      return I_ROW[ending] + 'ません';
    case 'mashita':
      return I_ROW[ending] + 'ました';
    case 'masendeshita':
      return I_ROW[ending] + 'ませんでした';
    case 'te':
      return isIku(kana) ? 'って' : TE_SUFFIX[ending];
    case 'ta':
    case 'tara': {
      const te = isIku(kana) ? 'って' : TE_SUFFIX[ending];
      const ta = te.slice(0, -1) + (te.endsWith('で') ? 'だ' : 'た');
      return form === 'ta' ? ta : ta + 'ら';
    }
    case 'nai':
      return A_ROW[ending] + 'ない';
    case 'nakatta':
      return A_ROW[ending] + 'なかった';
    case 'tai':
      return I_ROW[ending] + 'たい';
    case 'teiru':
      return godanSuffix('te', ending, kana) + 'いる';
    case 'potential':
      return E_ROW[ending] + 'る';
    case 'volitional':
      return O_ROW[ending] + 'う';
    case 'ba':
      return E_ROW[ending] + 'ば';
    case 'passive':
      return A_ROW[ending] + 'れる';
    case 'causative':
      return A_ROW[ending] + 'せる';
    case 'imperative':
      return E_ROW[ending];
  }
}

const ICHIDAN_SUFFIX: Record<ConjForm, string> = {
  masu: 'ます',
  masen: 'ません',
  mashita: 'ました',
  masendeshita: 'ませんでした',
  te: 'て',
  ta: 'た',
  nai: 'ない',
  nakatta: 'なかった',
  tai: 'たい',
  teiru: 'ている',
  potential: 'られる',
  volitional: 'よう',
  ba: 'れば',
  tara: 'たら',
  passive: 'られる',
  causative: 'させる',
  imperative: 'ろ',
};

const SURU_FORMS: Record<ConjForm, string> = {
  masu: 'します',
  masen: 'しません',
  mashita: 'しました',
  masendeshita: 'しませんでした',
  te: 'して',
  ta: 'した',
  nai: 'しない',
  nakatta: 'しなかった',
  tai: 'したい',
  teiru: 'している',
  potential: 'できる',
  volitional: 'しよう',
  ba: 'すれば',
  tara: 'したら',
  passive: 'される',
  causative: 'させる',
  imperative: 'しろ',
};

/** 来る kana readings per form (the 来 kanji stays; its reading shifts). */
const KURU_KANA: Record<ConjForm, string> = {
  masu: 'きます',
  masen: 'きません',
  mashita: 'きました',
  masendeshita: 'きませんでした',
  te: 'きて',
  ta: 'きた',
  nai: 'こない',
  nakatta: 'こなかった',
  tai: 'きたい',
  teiru: 'きている',
  potential: 'こられる',
  volitional: 'こよう',
  ba: 'くれば',
  tara: 'きたら',
  passive: 'こられる',
  causative: 'こさせる',
  imperative: 'こい',
};

export function conjugate(input: ConjInput, form: ConjForm): Conjugated {
  const { kana, surface, subclass } = input;

  // ある negates to plain ない — there is no あら- stem.
  if (kana === 'ある' && (form === 'nai' || form === 'nakatta')) {
    const s = form === 'nai' ? 'ない' : 'なかった';
    return { kana: s, surface: s };
  }

  if (subclass === 'suru') {
    // する itself or a する-compound: conjugate the trailing する.
    const kanaStem = kana.endsWith('する') ? kana.slice(0, -2) : kana;
    const surfStem = surface.endsWith('する') ? surface.slice(0, -2) : surface;
    return { kana: kanaStem + SURU_FORMS[form], surface: surfStem + SURU_FORMS[form] };
  }

  if (subclass === 'kuru') {
    const conjKana = KURU_KANA[form];
    // 来る keeps the kanji: 来る → 来ます / 来ない — trailing る (and its reading)
    // is replaced by everything after the き/こ/く reading of 来.
    const surfStem = surface.endsWith('来る') ? surface.slice(0, -1) : '';
    return {
      kana: kana.endsWith('くる') ? kana.slice(0, -2) + conjKana : conjKana,
      surface: surfStem ? surfStem + conjKana.slice(1) : conjKana,
    };
  }

  if (subclass === 'ichidan') {
    const suffix = ICHIDAN_SUFFIX[form];
    const out: Conjugated = { kana: kana.slice(0, -1) + suffix, surface: surface.slice(0, -1) + suffix };
    // ら抜き potential (食べれる) is standard in speech — accept, don't teach.
    if (form === 'potential') out.altKana = [kana.slice(0, -1) + 'れる'];
    return out;
  }

  const ending = kana.slice(-1);
  const suffix = godanSuffix(form, ending, kana);
  return { kana: kana.slice(0, -1) + suffix, surface: surface.slice(0, -1) + suffix };
}

// ---------------------------------------------------------------------------
// Pattern groups: the scheduling granularity. te/ta/tara/teiru share the godan
// contraction split (って/んで/いて/いで/して); every other form applies one
// uniform row-shift across godan endings, so those collapse to a single godan
// group. Ichidan/suru/kuru are their own groups everywhere.
// ---------------------------------------------------------------------------

export type PatternGroup =
  | 'godan'
  | 'godan-utsuru'
  | 'godan-munubu'
  | 'godan-ku'
  | 'godan-gu'
  | 'godan-su'
  | 'ichidan'
  | 'suru'
  | 'kuru';

const CONTRACTION_FORMS = new Set<ConjForm>(['te', 'ta', 'tara', 'teiru']);

const CONTRACTION_GROUP: Record<string, PatternGroup> = {
  'godan-u': 'godan-utsuru',
  'godan-tsu': 'godan-utsuru',
  'godan-ru': 'godan-utsuru',
  'godan-mu': 'godan-munubu',
  'godan-nu': 'godan-munubu',
  'godan-bu': 'godan-munubu',
  'godan-ku': 'godan-ku',
  'godan-gu': 'godan-gu',
  'godan-su': 'godan-su',
};

export function patternGroup(form: ConjForm, subclass: VerbSubclass): PatternGroup {
  if (subclass === 'ichidan' || subclass === 'suru' || subclass === 'kuru') return subclass;
  return CONTRACTION_FORMS.has(form) ? CONTRACTION_GROUP[subclass] : 'godan';
}

/** All pattern groups a form splits into (the set of cards the form needs). */
export function groupsForForm(form: ConjForm): PatternGroup[] {
  const godan: PatternGroup[] = CONTRACTION_FORMS.has(form)
    ? ['godan-utsuru', 'godan-munubu', 'godan-ku', 'godan-gu', 'godan-su']
    : ['godan'];
  return [...godan, 'ichidan', 'suru', 'kuru'];
}

// ---------------------------------------------------------------------------
// Conjugation card ids live in the same store as word cards, namespaced so
// nothing mistakes them for words: conj:{form}:{group}.
// ---------------------------------------------------------------------------

export const CONJ_DECK_ID = 'conj';
const CONJ_PREFIX = 'conj:';

export const conjCardId = (form: ConjForm, group: PatternGroup): string => `${CONJ_PREFIX}${form}:${group}`;

export const isConjCardId = (id: string): boolean => id.startsWith(CONJ_PREFIX);

export function parseConjCardId(id: string): { form: ConjForm; group: PatternGroup } | null {
  if (!isConjCardId(id)) return null;
  const [form, group] = id.slice(CONJ_PREFIX.length).split(':');
  if (!ALL_FORMS.includes(form as ConjForm)) return null;
  return { form: form as ConjForm, group: group as PatternGroup };
}

// ---------------------------------------------------------------------------
// Rule feedback: the one-line "chart entry" spoken/shown on a miss. Explicit
// rule feedback at the point of error is the research-backed home for the
// conjugation chart (salience/focused-form instruction), so this is the only
// place the chart lives.
// ---------------------------------------------------------------------------

// Rules are authored ONCE as templates: {…} wraps kana. The on-screen line
// renders {かな} as romaji; the spoken line keeps the kana so the multilingual
// TTS voice pronounces the Japanese bits as Japanese (an English voice reading
// romaji "ichidan"/"saseru" is unintelligible — that defeats the feedback).
const GROUP_RULES: Record<PatternGroup, Partial<Record<ConjForm, string>>> = {
  'godan-utsuru': { te: '{う}, {つ} and {る} verbs: drop the ending, add {って}', ta: '{う}, {つ} and {る} verbs: drop the ending, add {った}', tara: '{う}, {つ} and {る} verbs: drop the ending, add {ったら}', teiru: '{う}, {つ} and {る} verbs: drop the ending, add {って} {いる}' },
  'godan-munubu': { te: '{む}, {ぬ} and {ぶ} verbs: drop the ending, add {んで}', ta: '{む}, {ぬ} and {ぶ} verbs: drop the ending, add {んだ}', tara: '{む}, {ぬ} and {ぶ} verbs: drop the ending, add {んだら}', teiru: '{む}, {ぬ} and {ぶ} verbs: drop the ending, add {んで} {いる}' },
  'godan-ku': { te: '{く} verbs: drop {く}, add {いて} — except {いく}, which becomes {いって}', ta: '{く} verbs: drop {く}, add {いた} — except {いく}, which becomes {いった}', tara: '{く} verbs: drop {く}, add {いたら} — except {いく}, which becomes {いったら}', teiru: '{く} verbs: drop {く}, add {いて} {いる}' },
  'godan-gu': { te: '{ぐ} verbs: drop {ぐ}, add {いで}', ta: '{ぐ} verbs: drop {ぐ}, add {いだ}', tara: '{ぐ} verbs: drop {ぐ}, add {いだら}', teiru: '{ぐ} verbs: drop {ぐ}, add {いで} {いる}' },
  'godan-su': { te: '{す} verbs: drop {す}, add {して}', ta: '{す} verbs: drop {す}, add {した}', tara: '{す} verbs: drop {す}, add {したら}', teiru: '{す} verbs: drop {す}, add {して} {いる}' },
  godan: {
    masu: '{ごだん} verbs: last syllable to the i-row, then {ます}',
    masen: '{ごだん} verbs: i-row plus {ません}',
    mashita: '{ごだん} verbs: i-row plus {ました}',
    masendeshita: '{ごだん} verbs: i-row plus {ませんでした}',
    nai: '{ごだん} verbs: last syllable to the a-row, then {ない} — {う} becomes {わ}',
    nakatta: '{ごだん} verbs: a-row plus {なかった} — {う} becomes {わ}',
    tai: '{ごだん} verbs: i-row plus {たい}',
    potential: '{ごだん} verbs: last syllable to the e-row, then {る}',
    volitional: '{ごだん} verbs: last syllable to the o-row, then {う}',
    ba: '{ごだん} verbs: e-row plus {ば}',
    passive: '{ごだん} verbs: a-row plus {れる}',
    causative: '{ごだん} verbs: a-row plus {せる}',
    imperative: '{ごだん} verbs: last syllable to the e-row',
  },
  ichidan: {
    masu: '{いちだん} verbs: drop {る}, add {ます}',
    masen: '{いちだん} verbs: drop {る}, add {ません}',
    mashita: '{いちだん} verbs: drop {る}, add {ました}',
    masendeshita: '{いちだん} verbs: drop {る}, add {ませんでした}',
    te: '{いちだん} verbs: drop {る}, add {て}',
    ta: '{いちだん} verbs: drop {る}, add {た}',
    nai: '{いちだん} verbs: drop {る}, add {ない}',
    nakatta: '{いちだん} verbs: drop {る}, add {なかった}',
    tai: '{いちだん} verbs: drop {る}, add {たい}',
    teiru: '{いちだん} verbs: drop {る}, add {て} {いる}',
    potential: '{いちだん} verbs: drop {る}, add {られる}',
    volitional: '{いちだん} verbs: drop {る}, add {よう}',
    ba: '{いちだん} verbs: drop {る}, add {れば}',
    tara: '{いちだん} verbs: drop {る}, add {たら}',
    passive: '{いちだん} verbs: drop {る}, add {られる}',
    causative: '{いちだん} verbs: drop {る}, add {させる}',
    imperative: '{いちだん} verbs: drop {る}, add {ろ}',
  },
  suru: {},
  kuru: {},
};

/** {かな} → romaji, for the on-screen line. */
export const renderRomaji = (template: string): string => template.replace(/\{([^}]+)\}/g, (_, kana: string) => toRomaji(kana));

// ---------------------------------------------------------------------------
// Speech segments: a template is spoken as a stitched sequence — English
// fragments by the English announcer voice, kana by the Japanese voice — the
// same clip-stitching the whole app uses ("In Japanese: … りんご"). A single
// voice can't do both: the EN voice mangles romaji, a multilingual voice
// drags a Japanese accent across the English.
// ---------------------------------------------------------------------------

export type SpeechSeg = { lang: 'en' | 'ja'; text: string } | { lang: 'pause' };

export function parseSegments(template: string): SpeechSeg[] {
  const out: SpeechSeg[] = [];
  const parts = template.split(/(\{[^}]+\})/);
  for (const part of parts) {
    if (!part) continue;
    if (part.startsWith('{')) {
      out.push({ lang: 'ja', text: part.slice(1, -1) });
    } else {
      const text = part.replace(/\s+/g, ' ').trim();
      // Punctuation-only fragments (", " between kana) become pure pauses.
      if (/[a-z]/i.test(text)) out.push({ lang: 'en', text });
      else if (out.length > 0) out.push({ lang: 'pause' });
    }
  }
  return out;
}

/** Stable sync hash (FNV-1a) for keying segment clips. */
function fnv1a(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, '0');
}

/** Clip key for a voiced segment (seg-en-…/seg-ja-…), shared across rules. */
export const segKey = (seg: SpeechSeg): string => (seg.lang === 'pause' ? '' : `seg-${seg.lang}-${fnv1a(seg.text)}`);

export interface ConjRule {
  /** Stable id of this rule (rule-{form}-{group}). */
  key: string;
  /** One-line rule text (romaji), shown on screen. */
  en: string;
  /** How the rule is spoken: stitched EN/JA segments. */
  segments: SpeechSeg[];
}

function ruleTemplate(form: ConjForm, group: PatternGroup): string {
  return (
    GROUP_RULES[group][form] ??
    (group === 'suru'
      ? `{する} is irregular: the ${FORM_LABELS[form]} is {${SURU_FORMS[form]}}`
      : group === 'kuru'
        ? `{くる} is irregular: the ${FORM_LABELS[form]} is {${KURU_KANA[form]}}`
        : `${FORM_LABELS[form]} of ${group} verbs`)
  );
}

export function ruleFor(form: ConjForm, group: PatternGroup): ConjRule {
  const template = ruleTemplate(form, group);
  return { key: `rule-${form}-${group}`, en: renderRomaji(template), segments: parseSegments(template) };
}

/** Every (form, group) rule — the pipeline iterates this to voice rule clips. */
export function allRules(): Array<{ form: ConjForm; group: PatternGroup; rule: ConjRule }> {
  return ALL_FORMS.flatMap((form) => groupsForForm(form).map((group) => ({ form, group, rule: ruleFor(form, group) })));
}

// ---------------------------------------------------------------------------
// Cue metadata: how a form is prompted. Meaning-cued forms ask "How do you say
// — didn't sleep?" (meaningful practice — form-meaning mapping, DeKeyser);
// label-cued forms have no clean standalone English (te is structural, ば/たら
// would both cue "if…", passive/causative break on intransitive glosses).
// ---------------------------------------------------------------------------

const LABEL_CUED = new Set<ConjForm>(['te', 'ba', 'tara', 'passive', 'causative']);

export function cueKind(form: ConjForm): 'meaning' | 'label' {
  return LABEL_CUED.has(form) ? 'label' : 'meaning';
}

/** Register the cue calls out — plain/polite twins are separate cards, so the
 *  spoken cue disambiguates ("didn't sleep — casually?"). */
export function formRegister(form: ConjForm): 'casual' | 'polite' | null {
  if (form === 'masu' || form === 'masen' || form === 'mashita' || form === 'masendeshita') return 'polite';
  if (form === 'ta' || form === 'nai' || form === 'nakatta') return 'casual';
  return null;
}

/** One-line meaning of each form, spoken when a pattern is introduced and
 *  shown on the reveal — the "what does this even mean" the label lacks.
 *  Templated like the rules: romaji on screen, kana for the TTS voice. */
const FORM_MEANING_TEMPLATES: Record<ConjForm, string> = {
  masu: 'the polite present — saying a verb politely',
  masen: "the polite negative — don't or doesn't, politely",
  mashita: 'the polite past — did, politely',
  masendeshita: "the polite past negative — didn't, politely",
  te: 'the {て} form — the connector: it links actions and makes requests, like {たべて} {ください}',
  ta: 'the plain past — did, casually',
  nai: "the plain negative — don't or doesn't, casually",
  nakatta: "the plain past negative — didn't, casually",
  tai: 'the want-to form — wanting to do something',
  teiru: 'the progressive — is doing, an action in progress',
  potential: 'the potential — can, being able to do it',
  volitional: "the volitional — let's do it",
  ba: 'the {ば} conditional — if this happens',
  tara: 'the {たら} conditional — if or when this happens',
  passive: 'the passive — the action happens to you',
  causative: 'the causative — making or letting someone do it',
  imperative: 'the imperative — a blunt command',
};

/** On-screen meaning lines (romaji rendering of the templates). */
export const FORM_MEANINGS: Record<ConjForm, string> = Object.fromEntries(
  ALL_FORMS.map((f) => [f, renderRomaji(FORM_MEANING_TEMPLATES[f])]),
) as Record<ConjForm, string>;

/** Spoken meaning line ("This is the plain negative — …") as EN/JA segments. */
export const meaningSegments = (form: ConjForm): SpeechSeg[] => parseSegments(`This is ${FORM_MEANING_TEMPLATES[form]}.`);

/** Label prompts for forms with no clean English meaning — the kana term is
 *  spoken by the Japanese voice ("Say the — て — form of —"). */
const LABEL_PROMPT_TEMPLATES: Partial<Record<ConjForm, string>> = {
  te: 'Say the {て} form of —',
  ba: 'Say the {ば} conditional of —',
  tara: 'Say the {たら} conditional of —',
  passive: 'Say the passive form of —',
  causative: 'Say the causative form of —',
};

export const labelPromptSegments = (form: ConjForm): SpeechSeg[] | null => {
  const t = LABEL_PROMPT_TEMPLATES[form];
  return t ? parseSegments(t) : null;
};

/** Every voiced segment the conjugation feature can play — the audio pipeline
 *  iterates this to generate the (deduplicated) segment clips. */
export function allSpeechSegments(): Extract<SpeechSeg, { text: string }>[] {
  const byKey = new Map<string, Extract<SpeechSeg, { text: string }>>();
  const collect = (segs: SpeechSeg[]) => {
    for (const s of segs) if (s.lang !== 'pause') byKey.set(segKey(s), s);
  };
  for (const form of ALL_FORMS) {
    collect(meaningSegments(form));
    const label = labelPromptSegments(form);
    if (label) collect(label);
    for (const group of groupsForForm(form)) collect(ruleFor(form, group).segments);
  }
  return [...byKey.values()];
}

/**
 * Un-tagged meaning cues ("want to sleep") are register-ambiguous, and both
 * registers are correct Japanese — accept the polite twin as an alt so strict
 * grading never rejects a right answer. (Register-TAGGED forms don't get alts:
 * the cue said which register it wants.)
 */
function politeAltFor(input: ConjInput, form: ConjForm): string | null {
  switch (form) {
    case 'tai':
      return conjugate(input, 'tai').kana + 'です';
    case 'teiru':
      return conjugate(input, 'te').kana + 'います';
    case 'potential': {
      const k = conjugate(input, 'potential').kana;
      return k.slice(0, -1) + 'ます'; // …れる/…える → …れます/…えます (できる → できます)
    }
    case 'volitional': {
      const masu = conjugate(input, 'masu').kana;
      return masu.slice(0, -2) + 'ましょう';
    }
    default:
      return null;
  }
}

/** What grading should accept for a prompt: the canonical form plus any
 *  register-equivalent alts. Use this (not conjugate) for expected answers. */
export function expectedAnswer(input: ConjInput, form: ConjForm): Conjugated {
  const out = conjugate(input, form);
  if (cueKind(form) === 'meaning' && formRegister(form) === null) {
    const polite = politeAltFor(input, form);
    if (polite && polite !== out.kana) out.altKana = [...(out.altKana ?? []), polite];
  }
  return out;
}
