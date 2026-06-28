# CoWork Brief: Fix N5 Starter Vocabulary, Folds, and Example Sentences

## What This Project Is

Kotoba is a hands-free Japanese vocabulary app for English-speaking beginners.
During a driving session the app speaks a word in English, the user says it in
Japanese, and the app grades their answer. Between rounds it plays an example
sentence that uses the target word in context, so learners hear it used
naturally.

This brief asks you to rewrite all the example sentences for the N5 Starter
deck — the first 120 words from Genki lessons 1–6 — so they are natural,
varied, and high-quality for both listening comprehension and TTS playback.

---

## The File to Rewrite

**`tools/sentences-authored/n5-starter.json`**

This is a JSON object keyed by word ID. Each value is an array of 2–3 sentence
objects. Your task is to produce a fully-rewritten replacement for this file.

### Sentence object schema

```json
{
  "textJa": "日本語の文章。",
  "readingKana": "にほんごのぶんしょう。",
  "textEn": "English translation.",
  "clozeSurface": "文章",
  "clozeReading": "ぶんしょう"
}
```

- **textJa** — Full sentence in normal Japanese orthography (kanji where natural).
- **readingKana** — Full hiragana reading of the entire sentence, including
  particles and punctuation, with Japanese-standard punctuation (。「」、).
- **textEn** — Natural English translation (not word-for-word, not overly formal).
- **clozeSurface** — The exact substring that appears in textJa for the target
  word. Use kanji when available (e.g., `医者`, not `いしゃ`). May be a
  conjugated form if the word is a verb (e.g., `起きます` for 起きる).
- **clozeReading** — Hiragana reading of clozeSurface only (not the whole
  sentence).

### Hard rules

1. **clozeSurface must appear literally** inside textJa (substring match).
2. **readingKana must be full hiragana** for the entire sentence — no kanji,
   no katakana.
3. **Punctuation must be Japanese-style**: 。 not period, 、 not comma,
   「」 for quotation.
4. **Sentence length**: approximately 6–16 mora. Short enough to be clear when
   spoken aloud by TTS; not so short it sounds like a drill.

---

## The Critical Constraint: i+1 Vocabulary

Every sentence for a given word may only use content words (nouns, verbs,
adjectives, adverbs) that appear **at or before that word's position** in the
ordered word list below.

Particles (は、が、を、に、で、と、も、の、か、から、まで、へ、より、ね、よ…),
copula (です、ます、でした、ました、じゃない…), and punctuation are
**always allowed regardless of position**.

This means word #1 (医者, doctor) can only use that one word plus particles.
Word #10 (学生) can use any of words 1–10. Word #120 (泳ぐ) can use anything.

### The ordered word list (position 1 → 120)

```
 1  n5-1b7fe8fc  医者     いしゃ         doctor
 2  n5-7cf28dc9  今       いま           now
 3  n5-17beb16f  妹       いもうと       younger sister
 4  n5-bdf2796e  英語     えいご         English
 5  n5-51d0ab4a  お母さん おかあさん     mother (formal)
 6  n5-2cbdefb8  お父さん おとうさん     father (formal)
 7  n5-d9a6b4c3  弟       おとうと       younger brother
 8  n5-810354ac  お兄さん おにいさん     older brother (formal)
 9  n5-a37813c9  お姉さん おねえさん     older sister (formal)
10  n5-1d17bb25  学生     がくせい       student
11  n5-873bb133  午後     ごご           afternoon
12  n5-2d128996  午前     ごぜん / 朝   morning / A.M.
13  n5-a57d4660  仕事     しごと         work / job
14  n5-ca5c6a1e  先生     せんせい       teacher
15  n5-f2549372  大学     だいがく       college / university
16  n5-33a1e265  電話     でんわ         telephone
17  n5-ac475c12  友達     ともだち       friend
18  n5-f68273d2  名前     なまえ         name
19  n5-2668a187  はい     はい           yes
20  n5-6208a56d  半       はん           half (as in 二時半)
21  n5-41645a1f  番号     ばんごう       number
22  n5-c4e7aaa8  留学生   りゅうがくせい international student
23  n5-e1ea452d  私       わたし         I / me
24  n5-c2500e22  あそこ   あそこ         over there
25  n5-af8fe633  あれ     あれ           that (over there)
26  n5-cd2f86ee  いくら   いくら         how much
27  n5-4bd5b091  鉛筆     えんぴつ       pencil
28  n5-56e2ffcd  お手洗い おてあらい     restroom / toilet
29  n5-ad635933  傘       かさ           umbrella
30  n5-79cde3ad  かばん   かばん         bag
31  n5-e047c54d  喫茶店   きっさてん     café
32  n5-5ab550fc  銀行     ぎんこう       bank
33  n5-a28c621e  靴       くつ           shoes
34  n5-1fefdbdb  これ     これ           this (one)
35  n5-9f5cf593  財布     さいふ         wallet
36  n5-a7294957  魚       さかな         fish
37  n5-2e0ca17b  辞書     じしょ         dictionary
38  n5-55d70f77  自転車   じてんしゃ     bicycle
39  n5-3761f07c  新聞     しんぶん       newspaper
40  n5-3906cbce  それ     それ           that (one)
41  n5-66b6e112  高い     たかい         expensive / tall
42  n5-6e9eadcf  誰       だれ           who
43  n5-b29e9540  テープ   てえぷ         tape
44  n5-cfde36eb  どうも   どうも         (see NOTE below)
45  n5-176ff473  時計     とけい         watch / clock
46  n5-d7de52a7  どこ     どこ           where
47  n5-71bc8ce6  図書館   としょかん     library
48  n5-3850c3cd  どれ     どれ           which one
49  n5-df98d4e7  肉       にく           meat
50  n5-3e9768f9  ノート   のうと         notebook
51  n5-ff720a94  ペン     ぺん           pen
52  n5-e2da2a2b  帽子     ぼうし         hat
53  n5-9fb45486  本       ほん           book
54  n5-24aab5be  野菜     やさい         vegetable
55  n5-1751a166  郵便局   ゆうびんきょく post office
56  n5-18bb555d  朝御飯   あさごはん     breakfast
57  n5-6b7cbce3  明日     あした         tomorrow
58  n5-abe6f3d9  家       いえ           house
59  n5-0ef510d2  いつ     いつ           when
60  n5-800ecd92  うち     うち           home / my place
61  n5-b760061e  映画     えいが         movie
62  n5-e2d50137  起きる   おきる         to get up
63  n5-fcd13124  お酒     おさけ         sake / alcohol
64  n5-891adb67  お茶     おちゃ         (green) tea
65  n5-6cb1082c  音楽     おんがく       music
66  n5-beceac46  学校     がっこう       school
67  n5-c6db0d79  今日     きょう         today
68  n5-99a8fca0  コーヒー こうひい       coffee
69  n5-1f8742cc  今晩     こんばん       tonight
70  n5-e1245a11  雑誌     ざっし         magazine
71  n5-680166e9  スポーツ すぽうつ       sport(s)
72  n5-78aa9dce  ちょっと ちょっと       a little / just a moment
73  n5-b692a5e3  テレビ   てれび         television
74  n5-c29dae0c  時々     ときどき       sometimes
75  n5-de84238b  土曜日   どようび       Saturday
76  n5-c3d80f8c  日曜日   にちようび     Sunday
77  n5-4a7000d6  寝る     ねる           to sleep
78  n5-0ffd6115  早い     はやい         early
79  n5-9f61ccc2  晩御飯   ばんごはん     dinner
80  n5-a780acb0  昼御飯   ひるごはん     lunch
81  n5-b4772e80  毎日     まいにち       every day
82  n5-501ee091  毎晩     まいばん       every night
83  n5-e3d391e7  水       みず           water
84  n5-d7c45d9e  あなた   あなた         you
85  n5-7af94911  犬       いぬ           dog
86  n5-b7ef783f  買い物   かいもの       shopping
87  n5-90c36d1b  火曜日   かようび       Tuesday
88  n5-05f1d2a5  昨日     きのう         yesterday
89  n5-df1ca857  金曜日   きんようび     Friday
90  n5-c0b068d2  クラス   くらす         class (lesson session)
91  n5-ddeded76  月曜日   げつようび     Monday
92  n5-e7e7c214  公園     こうえん       park
93  n5-60a62ace  ここ     ここ           here
94  n5-e14162ce  子供     こども         child(ren)
95  n5-952a80fe  御飯     ごはん         rice / meal
96  n5-e5a5f382  写真     しゃしん       photo / picture
97  n5-225b351e  水曜日   すいようび     Wednesday
98  n5-7f4eaa15  先週     せんしゅう     last week
99  n5-fb182375  そこ     そこ           there (mid-distance)
100 n5-2bc551f3  机       つくえ         desk
101 n5-524dd5c8  手紙     てがみ         letter (written)
102 n5-000452af  デパート でぱあと       department store
103 n5-d52f01a9  どうして どうして       why
104 n5-efcae8ab  猫       ねこ           cat
105 n5-b3adc95a  パン     ぱん           bread
106 n5-5cbd42db  人       ひと           person / people
107 n5-d4b9e514  病院     びょういん     hospital
108 n5-c367e3ed  ホテル   ほてる         hotel
109 n5-da1ed6b9  町       まち           town / neighborhood
110 n5-a6d7429d  木曜日   もくようび     Thursday
111 n5-7f51f5a9  もしもし もしもし       hello (phone greeting)
112 n5-835ca471  レストラン れすとらん   restaurant
113 n5-a375891d  新しい   あたらしい     new
114 n5-e8684d8b  暑い     あつい         hot (weather)
115 n5-7cbd2223  熱い     あつい         hot (to the touch)
116 n5-ac62a5e9  忙しい   いそがしい     busy
117 n5-b4aa466b  海       うみ           sea / ocean
118 n5-856c8807  大きい   おおきい       big / large
119 n5-dc5fa2ca  面白い   おもしろい     interesting / funny
120 n5-d10d2432  泳ぐ     およぐ         to swim
```

---

## Specific Issues to Fix

### 1. Sentence variety — the "doctor overload" problem

The current sentences use 医者 (doctor, word #1) in almost every sentence for
words 1 through 23. This is because 医者 is first in the deck and the
AI generation reached for it constantly. The result:

- Every person in the app is a doctor.
- Sentences feel robotic and interchangeable.
- Users can't meaningfully hear the target word in natural context.

**Fix:** Use the full range of allowed vocabulary. By word #10 (学生), you have
医者, 今, 妹, 英語, お母さん, お父さん, 弟, お兄さん, お姉さん — use all of
them. By word #17 (友達), you also have 学生, 午後, 午前, 仕事, 先生, 大学,
電話. Spread the vocabulary; vary who is doing what.

### 2. Scaffold / fold quality within each word group

Each word gets 2–3 sentences. Ideally they show the word in **different
grammatical roles or contexts**, not just slightly longer variants of the same
sentence. Examples of bad scaffolding (too similar):

```
妹ですか。
妹は医者です。
妹は今、医者です。
```

Better scaffolding (varied roles, natural everyday contexts):

```
妹は学生です。              → states a fact about the sister
妹の電話はどこですか。      → uses the word in a genitive/possession context  
お母さんと妹は今、仕事です。→ shows sister alongside another family member
```

### 3. Words with NO sentences — must be added

These three currently have no sentences and need 2–3 written from scratch:

**半 (はん) — "half", position 20**
- Context: telling time (二時半 = half past two).
- Challenge: Only words 1–20 are available. Key allowed words: 医者, 今, 妹,
  英語, お母さん, お父さん, 弟, お兄さん, お姉さん, 学生, 午後, 午前, 仕事,
  先生, 大学, 電話, 友達, 名前, はい, 番号.
- Suggested angle: time expressions with 午前/午後 (e.g., 午後二時半です。),
  perhaps referencing school or work schedules.
- Note: 半 in this deck is taught as a time suffix (にじはん); do not write
  sentences where it means "half of an object" since that's a different usage.

**どうも (どうも) — see NOTE, position 44**
- Challenge: どうも is versatile and subtle (see NOTE below for the prompt
  issue). At position 44 you have a lot to work with: all shopping vocabulary,
  これ/それ/あれ, high/expensive, who/where/which, café, bank, shoes, etc.
- Suggested angle: casual social expressions — receiving something, greeting,
  quick thanks in a shop context. Keep them short and natural.

**時々 (ときどき) — "sometimes", position 74**
- Context: frequency adverb; goes before a verb or predicate.
- At position 74 you have a rich vocabulary including: movies, waking up,
  sake, tea, music, school, today, coffee, tonight, magazines, sports,
  a little, TV, Saturday/Sunday, sleep, early, dinner, lunch, every day,
  every night, water.
- Suggested angle: everyday routines that happen sometimes (not every day).

### 4. どうも prompt issue (separate from sentences)

The deck file `public/decks/n5-starter.json` has this entry for どうも:

```json
"prompt": "Thank you",
"english": "Thank you; somehow; no matter how hard one may try"
```

The prompt "Thank you" is misleading. どうも alone is a versatile
intensifier/adverb used as a casual thanks, a vague greeting, or an
acknowledgment of difficulty. The word for "thank you" is ありがとう, which is
NOT in this deck. Users who learn どうも as "Thank you" will misunderstand its
actual range.

**Recommended fix for the deck JSON:**

Change the `prompt` field for `n5-cfde36eb` from:
```
"Thank you"
```
to:
```
"casual thanks / somehow"
```

And update `english` to:
```
"thanks; somehow; no matter how hard one tries"
```

This is in `public/decks/n5-starter.json` at the どうも entry.
Note: this file is normally generated by `npm run build-decks`, so the change
will be overwritten if the build is re-run. Either apply it directly and
document it, or modify the source CSV at `tools/sources/n5.csv` to update the
meaning string there.

---

## Quality Standards

### Naturalness first

These sentences are heard by learners in motion (driving, walking). They must
sound like something a real Japanese person would actually say — not textbook
drill sentences. Avoid:

- Oddly formal constructions where informal would be more natural.
- Sentences that are technically grammatical but no one actually says.
- Overuse of explicit subjects (Japanese drops them constantly).
- Weird topic choices (e.g., "My friend's pencil is expensive" is a stretch).

### Variety of sentence patterns

Avoid writing only XはYです sentences. Mix in:
- Questions (〜ですか、〜ますか)
- Negatives where natural (〜じゃないです、〜ません)
- Location expressions (〜はどこですか、〜にあります)
- Verb sentences once verbs are available (words 62+)
- Time expressions (今、今日、明日、午後…)
- Quantity/price (いくら, ちょっと高い)

### Cloze surface

Use the kanji form for the clozeSurface when the word has one:
- ✓ `"clozeSurface": "医者"` not `"clozeSurface": "いしゃ"`
- ✓ `"clozeSurface": "起きます"` (conjugated verb is fine)
- The surface must be an exact substring of textJa

### English translations

Write natural English, not literal. Japanese drops subjects constantly — fill
them in naturally in English. Context matters:
- ✓ "Are you going to the library?" not "Is the library?"
- ✓ "My mom's a teacher." not "Mother is teacher."
- ✓ "How much is the coffee?" not "Coffee, how much is it?"

---

## How the Output Is Used

1. The authored sentences file feeds into TTS generation (`tools/gen-audio.ts`).
   Each sentence gets its own audio clip. Unnatural sentences create awkward
   audio that users hear on repeat.

2. During a session, 2–3 sentences per word are rotated so learners hear
   different contexts. If all 3 sentences are variants of the same pattern, the
   rotation provides no benefit.

3. The cloze surface is highlighted and tested: the learner must say the target
   word aloud, and the reading (`clozeReading`) is what gets graded. The
   surrounding sentence provides context that makes the word memorable.

---

## Output Format

Produce **two files**:

### File 1 — `tools/sentences-authored/n5-starter.json`

```json
{
  "n5-1b7fe8fc": [
    {
      "textJa": "妹は医者じゃないです。",
      "readingKana": "いもうとはいしゃじゃないです。",
      "textEn": "My sister isn't a doctor.",
      "clozeSurface": "医者",
      "clozeReading": "いしゃ"
    }
  ],
  ...
}
```

All 120 word IDs must be keys. Each must have 2–3 sentence objects.

---

### File 2 — `public/decks/n5-starter.json`

Apply all word-level fixes from PART 2 above. Output the complete file (it is
~3,600 lines so produce the full corrected JSON, not a diff).

Changes summary:
- `n5-6208a56d` 半: fix english and prompt (remove にじはん romaji)
- `n5-cfde36eb` どうも: fix english and prompt ("Thank you" → "casual thanks / somehow")
- `n5-6cb1082c` 音楽: lowercase english and prompt
- `n5-5cbd42db` 人: english → "person; people", prompt → "person"
- `n5-7f51f5a9` もしもし: fix prompt and english
- `n5-000452af` デパート: remove "(abbr.)" from english
- `n5-78aa9dce` ちょっと: remove すくない from written[] and remove alts
- `n5-7cf28dc9` 今: remove こんど from written[] and remove alts
- `n5-2d128996` 午前/朝: swap primary to あさ, make ごぜん the alt
- `n5-524dd5c8` 手紙: remove じ from written[] and remove alts
- `n5-5cbd42db` 人: remove おとこ/だんせい from written[] and remove alts

---

### Validation you can do before delivering

**Sentences file:**
- [ ] clozeSurface is a literal substring of textJa
- [ ] readingKana is pure hiragana (no kanji, no katakana)
- [ ] Every content word (noun, verb, adjective, adverb) in the sentence is
      in the allowed list for that word's position OR is the target word itself
- [ ] The sentence uses standard Japanese punctuation (。、「」 not . , "")
- [ ] English translation is natural and reads like something a person would say

**Deck file:**
- [ ] No Japanese characters (kana/kanji/romaji) appear in any `english` or `prompt` field
- [ ] All `prompt` fields are natural spoken English phrases (no question marks,
      no parenthetical annotations, no abbreviation markers)
- [ ] The five WRONG FOLD alts are removed from their respective `written[]`
      arrays and `alts` arrays
- [ ] 朝/あさ is the primary for the morning entry, not 午前/ごぜん
- [ ] 人/ひと has prompt "person", not "man"

---

---

## PART 2 — Fix the Vocabulary Words Themselves

The second output file is a corrected **`public/decks/n5-starter.json`**.

> ⚠️ This file is normally generated by `npm run build-decks` from source CSVs,
> but we are applying a one-time manual correction. Note every change you make
> so it can later be backported to the source.

There are two categories of word-level problems: **definition/prompt issues**
and **wrong synonym folds**.

---

### Definition and prompt issues

The `prompt` field is spoken aloud by TTS as the English quiz cue — it must be
natural spoken English. The `english` field is displayed on-screen.

#### 1. 半 (はん) — `n5-6208a56d`

Current:
```json
"english": "half (e.g., にじはん | half-past two)",
"prompt": "half (e.g., にじはん | half-past two)"
```

Problem: `にじはん` is romaji for Japanese — it has no place in an English
definition or a spoken English prompt. A native English speaker hearing
"half, e.g., にじはん" would be confused.

Fix:
```json
"english": "half (as in 二時半, half-past two)",
"prompt": "half"
```

The kanji example 二時半 is fine in the `english` display field (screen context);
the `prompt` should just be the bare word for clean TTS audio.

#### 2. どうも — `n5-cfde36eb`

Current:
```json
"english": "Thank you; somehow; no matter how hard one may try",
"prompt": "Thank you"
```

Problem: どうも is a versatile intensifier/adverb. Alone, it is commonly used
as casual thanks, a vague greeting, or an acknowledgment — but it is **not**
the Japanese word for "thank you." That word is ありがとう, which is NOT in
this deck. Learners who memorize どうも = "Thank you" will misuse it and be
confused when they later encounter ありがとう.

Fix:
```json
"english": "thanks; somehow; no matter how hard one tries",
"prompt": "casual thanks / somehow"
```

#### 3. 音楽 (おんがく) — `n5-6cb1082c`

Current:
```json
"english": "Music",
"prompt": "Music"
```

Problem: Capitalized "Music" — should be lowercase.

Fix:
```json
"english": "music",
"prompt": "music"
```

#### 4. 人 (ひと) — `n5-5cbd42db`

Current:
```json
"english": "man, person",
"prompt": "man"
```

Problem: ひと (人) means **person** (gender-neutral). Using "man" as the quiz
prompt teaches a false meaning. おとこ (男) means "man/male." This is also a
fold error — see below.

Fix:
```json
"english": "person; people",
"prompt": "person"
```

#### 5. もしもし — `n5-7f51f5a9`

Current:
```json
"english": "Hello? (used on the phone)",
"prompt": "Hello?"
```

Problem: The question mark in the `prompt` sounds awkward in TTS and creates an
odd quiz dynamic ("What does 'Hello?' mean?"). Also the parenthetical in
`english` can be trimmed.

Fix:
```json
"english": "hello (telephone greeting)",
"prompt": "phone greeting"
```

#### 6. デパート — `n5-000452af`

Current:
```json
"english": "(abbr.) department store"
```

Problem: "(abbr.)" is a dictionary annotation that has no meaning to a user.

Fix:
```json
"english": "department store"
```

---

### Synonym fold errors

The app uses a "fold" system: words with the same English meaning are merged
into one card — the **primary** reading is quizzed; **alt** readings are
mentioned aloud and accepted as correct answers.

A synonym-fold review was conducted (see `synonym-folds-reviewed.md`) and
identified several errors that affect the n5-starter deck. Each fix below
describes what to change in the `words` array of `public/decks/n5-starter.json`.

#### FOLD 1 — ちょっと (a little) + すくない  ⚠️ WRONG FOLD

`n5-78aa9dce` currently has:
```json
"written": ["ちょっと", "少ない", "すくない"],
"alts": [{ "id": "n5-8b5162f2", "kana": "すくない", "romaji": "sukunai" }]
```

Problem: すくない (少ない) is an i-adjective meaning "few / scarce" (e.g., 人が
少ない = "there are few people"). ちょっと is an adverb meaning "a little / just a
moment." They are grammatically different parts of speech and not
interchangeable. A learner who says すくない when prompted "a little" would be
wrong.

Fix: Remove すくない from `written` and remove the `alts` entry. The word
keeps its original written forms only: `["ちょっと"]`. No alts.

```json
"written": ["ちょっと"],
"alts": []   ← remove the alts array entirely (or omit the key)
```

Note: the natural synonym for ちょっと-as-adverb is すこし (少し), but すこし
is not in this deck, so do not add it as an alt — that would require a separate
review.

---

#### FOLD 2 — いま (now) + こんど  ⚠️ WRONG FOLD

`n5-7cf28dc9` currently has:
```json
"written": ["今", "いま", "今度", "こんど"],
"alts": [{ "id": "n4-617eaab5", "kana": "こんど", "romaji": "kondo" }]
```

Problem: こんど (今度) means "this time / next time / soon" — it refers to a
vague near-future or the current occasion, NOT the present moment. いま (今)
means "right now / at this moment." A learner who says こんど when asked "now"
would be producing the wrong word.

Fix: Remove こんど from `written` and remove the alt. The primary word keeps
its original forms: `["今", "いま"]`.

```json
"written": ["今", "いま"],
// remove alts entirely
```

---

#### FOLD 3 — ごぜん (morning/AM) + あさ  ⚠️ PARTIAL MISMATCH, swap primary

`n5-2d128996` currently has:
```json
"kana": "ごぜん",
"written": ["午前", "ごぜん", "朝", "あさ"],
"alts": [{ "id": "n5-b1fa407b", "kana": "あさ", "romaji": "asa" }]
```

Problem: ごぜん (午前) is a formal, clock-based designator meaning "AM /
before noon" — it's used with clock times (午前九時 = 9:00 AM). あさ (朝) is
the everyday word for "morning" as a time of day. あさ is far more common in
natural speech and is the word beginners encounter first. The review recommends
swapping the primary.

Fix: Make あさ the primary and ごぜん the alt:

```json
{
  "id": "n5-2d128996",
  "english": "morning; A.M.",
  "prompt": "morning",
  "kana": "あさ",
  "written": ["朝", "あさ", "午前", "ごぜん"],
  "romaji": "asa",
  "mora": ["a", "sa"],
  "moraKana": ["あ", "さ"],
  "alts": [{ "id": "n5-b1fa407b", "kana": "ごぜん", "romaji": "gozen" }]
}
```

(Keep the same `id` `n5-2d128996`, tags, and any other fields unchanged. Only
the kana, written, romaji, mora, moraKana, and alts change.)

---

#### FOLD 4 — てがみ (letter) + じ  ⚠️ WRONG FOLD

`n5-524dd5c8` currently has:
```json
"written": ["手紙", "てがみ", "字", "じ"],
"alts": [{ "id": "n5-someId", "kana": "じ", "romaji": "ji" }]
```

Problem: てがみ (手紙) = written letter / correspondence. じ (字) = written
character / symbol / letter of an alphabet. These are completely different
meanings of the English word "letter." Folding them tells learners that "a
character/symbol" and "a letter you mail" are the same word. They are not.

Fix: Remove じ from `written` and remove the alt.

```json
"written": ["手紙", "てがみ"],
// remove alts
```

---

#### FOLD 5 — ひと (person) + おとこ + だんせい  ⚠️ WRONG FOLD

`n5-5cbd42db` currently has:
```json
"english": "man, person",
"prompt": "man",
"kana": "ひと",
"written": ["人", "ひと", "男", "おとこ", "男性", "だんせい"],
"alts": [
  { "kana": "おとこ", "romaji": "otoko" },
  { "kana": "だんせい", "romaji": "dansei" }
]
```

Problem: ひと (人) is gender-neutral and means "person / people." おとこ (男)
and だんせい (男性) mean "man / male." Folding these as synonyms teaches
learners that ひと = man, which is wrong. ひと appears constantly in Japanese
(あの人 = "that person", 日本人 = "Japanese person") — getting its meaning wrong
is a significant problem.

Fix: Change the definition and remove the male-specific alts. ひと stands alone
as "person":

```json
"english": "person; people",
"prompt": "person",
"written": ["人", "ひと"],
"alts": []   ← remove alts entirely
```

Note: おとこ and だんせい (man/male) are currently not in the deck as their own
entries. They were folded in incorrectly. For now, simply removing them from
ひと's entry is sufficient — they can be added as separate cards in a future
review if desired.

---

## Reference Files

- **`kotoba-language-export.txt`** — Human-readable export of all 120 words
  with their current sentences; use this to see exactly what's there now and
  what needs the most work.
- **`public/decks/n5-starter.json`** — The vocabulary deck; read the full
  file before editing so you can produce the complete corrected version.
- **`tools/sentences-authored/n5-starter.json`** — The sentences file to replace.
- **`tools/sentence-validate.ts`** — Validation logic (TypeScript); the key
  rule is that any content token in the sentence must concatenate (possibly with
  adjacent tokens) to a known word form.
- **`synonym-folds-reviewed.md`** (in Downloads, not in the repo) — The full
  fold review with notes on every folded group. The five fixes in PART 2 above
  come from the ⚠️ WRONG FOLD and ⚠️ PARTIAL MISMATCH entries that involve
  words present in the n5-starter deck.
