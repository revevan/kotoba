# Kotoba — Landing Page Design Brief

A brief for redesigning the marketing/landing page at **kotobaapp.com**. The
current page is a serviceable v1 (hero → 4 feature cards → 3 steps → CTA); we
want a page with a real point of view that *shows* the product instead of
listing adjectives about it.

---

## The product in one breath

**Kotoba** (言葉, "word/language") is a hands-free, audio-first Japanese
vocabulary trainer you run entirely by voice during your commute. Dash-mount
the phone, tap START once, and it teaches you a word, has you say it back,
quizzes you days later at the moment you'd start to forget, and *hears*
whether you got it right. No tapping, no looking, no screen time.

It's a free web app (PWA) — no app store, works in any browser, installable to
the home screen, works offline in cell dead zones. Optional passwordless
email sign-in syncs progress across devices.

## Who lands on this page

- **Commuters curious about Japanese** — the core persona. They drive (or
  transit) 30–90 minutes and feel like that time is wasted. Many have tried
  Duolingo and resent the screen-tapping treadmill.
- **JLPT self-studiers** (N5/N4 level) looking for a vocab drill that isn't
  flashcards on a screen.
- **Friends/coworkers of the maker** arriving from word-of-mouth — the page
  should quickly confirm "oh, this is legit and free."

They will almost certainly be **on a phone**. Mobile is the primary design
target, not an afterthought.

Note: signed-in users never see this page (an inline script redirects them
straight to `/app/`). This page is purely for the logged-out first visit —
it's a pitch, not a portal.

## The one job of the page

Get the visitor to tap **one primary CTA → `/app/`** and start a first session.
There is no pricing, no email capture, no secondary funnel. Everything on the
page either builds belief ("this actually works hands-free") or reduces
friction ("free, no account, no app store, tap here").

## What makes it different (lead with these)

1. **Actually hands-free.** Not "audio lessons" — a full learn/quiz/grade loop
   by voice. The app *listens to you* and grades your spoken Japanese with
   cloud speech recognition. Voice commands ("repeat", "skip", "got it") work
   eyes-free. This is the hero claim; no mainstream competitor does it.
2. **It hears you.** Say 自転車 and it knows. If it mishears, you self-grade by
   voice. This is the moment of magic — consider making the hero visual a
   stylized "you say it → it confirms" exchange rather than a static screenshot.
3. **Spaced repetition that's earned, not gamified.** FSRS scheduling (the
   modern Anki algorithm) — words return right before you'd forget. No
   streak-shaming, no gems, no owl guilt. Tone: calm confidence.
4. **Words in real sentences.** New words come with a natural example sentence;
   mature words graduate to fill-in-the-blank sentence quizzes (hear the
   sentence with a beep where the word goes, say the missing word). Vocabulary
   in context, still 100% by ear.
5. **Free and honest.** Free, open source, no ads, no account required, JLPT
   N5/N4 word lists (CC-BY, credited), native-quality neural audio, progress
   stored on your device (sync optional).

## How it works (the 3-beat story)

Keep the current 3-step structure — it's the right skeleton, worth better art:

1. **It teaches** — "apple … in Japanese … りんご … riiin—gooo… For example:
   毎朝りんごを食べます" (slow breakdown + example sentence, all spoken).
2. **You say it back** — speak it; it listens and confirms.
3. **It brings it back** — quizzed later at the optimal moment; graded by ear.

An audio-forward page could even *play* this loop (a short sample exchange as
an audio element or animation). That would demonstrate the product better than
any copy. Optional but high-impact.

## Feature highlights — what to show vs. hold back

**Show (shipped, working today):**
- Voice-graded quizzes + voice commands (repeat / skip / pause / got it)
- FSRS spaced repetition
- Example sentences + fill-in-the-blank (cloze) for mature words
- JLPT decks: N5 Starter (~120), full N5 (~660), N4 (~600) — native-audio clips (~4,000)
- Works offline once cached; free; no app store; optional cross-device sync
- Alternate readings taught and accepted ("yes" = はい, but ええ counts too)

**Tease lightly (one small "where it's going" strip, max):**
- The **difficulty ladder**: Hear it → Complete it (both live) → *Say it back*
  (sentence shadowing) → *Build it* (make your own sentence, AI-graded) — the
  last two are in design now.
- **Road to N3**: full N5 and N4 today, N3 deck in the works.

Rationale: the roadmap signals momentum and a pedagogy (the ladder is a
credible SLA-research story), but the page must sell what works *today* —
don't let future tense dilute the hero.

**Don't show:** internals (Deepgram/Cloudflare/FSRS jargon beyond one tasteful
mention), the debug overlay, account/sync UI.

## Voice & tone

Calm, adult, a little warm; confident but not hype-y. The user is trapped in a
car for an hour — we're giving that hour a purpose. Avoid: anime/cherry-blossom
clichés, gamification vocabulary ("streak!", "XP!"), exclamation-point copy.
Japanese type used sparingly and correctly (言葉 is the logotype; kana in
examples) reads as authentic; wallpapering kanji as decoration does not.

## Current visual identity (starting point, not a cage)

- Deep indigo-black dark theme: bg `#10101a`, panels `#1e1e2e`, text `#f0f0f5`,
  secondary `#9a9aae`, accent `#7c6cff` (violet; the app itself uses `#7c7cf0`,
  worth unifying).
- Logotype: 言葉 kanji + "Kotoba" wordmark; icons exist at 192/512px.
- System font stack today; a display face for headlines is fine if it's fast.
- The **app** is dark-themed — landing and app should feel like one product.
  Dark-first is recommended (drivers at 6am will thank you), but a designer
  making a case for something else is welcome to.
- No product screenshots exist yet on the page. Real session-screen mockups
  (phone dash-mounted, big badge text "YOUR ANSWER?") would ground the pitch.

## Hard constraints (the dev will enforce these)

1. **Single static HTML file** (`public/index.html`), self-contained CSS,
   little-to-no JS. No framework, no build step for this page. Budget: fast on
   one bar of cellular — aim < 100KB before images, images lazy/optimized.
2. **Keep the logged-in redirect script** at the very top of `<head>` (checks
   localStorage `kotoba-auth`, `location.replace('/app/')`, honors `?stay`).
3. **Keep/port SEO furniture**: title/description, OG/Twitter meta, JSON-LD
   SoftwareApplication block, canonical URL `https://kotobaapp.com`.
4. All CTAs point to **`/app/`** (relative). Nav "Open app" + hero CTA +
   bottom CTA.
5. Mobile-first responsive; accessible contrast (WCAG AA on the dark palette);
   respects `prefers-reduced-motion` if animation is used.
6. Footer must retain: CC-BY attribution to Jonathan Waller's JLPT lists
   (tanos.co.uk) and the GitHub link.

## Page structure — suggested skeleton (designer may reorder)

1. **Hero** — claim + demo moment + primary CTA ("Start learning free").
2. **The exchange** — show/play the teach→say-back→confirm loop.
3. **Why it sticks** — spaced repetition + sentences-in-context, minimal.
4. **What you'll learn** — JLPT decks, native audio, N5→N4 (→N3 teaser).
5. **Built for the road** — AirPods/car audio, offline, voice controls, safety
   framing (eyes stay on the road).
6. **Small roadmap strip** — the ladder, one line each.
7. **Final CTA** — free, no account, works in your browser.
8. **Footer** — attribution, GitHub, contact.

## Deliverable

A high-fidelity design (single long page, mobile + desktop) the developer can
implement as static HTML/CSS. Include: type scale, spacing system, final hex
palette, hover/focus states for CTAs, and any image assets (or specs for
mockups to produce). If proposing animation/audio, include a reduced-motion /
no-JS fallback.
