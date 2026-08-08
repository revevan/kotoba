# TODO — Kotoba

<!-- Seeded by Claude 2026-07-31 from recent commits. Edit freely; Claude keeps this current as work happens. Format: ## Now / ## Next / ## Done, items as - [ ] / - [x]. -->

## Now

- [ ] ~2026-08-15: evaluate marketing-demo funnel — pull `/demo-start|mic|done.txt` path counts from CF zone analytics, compare homepage→app→signup against the 2026-08-08 baseline (~317 visits → 16 app opens → 4 signups /8d), decide next growth move
- [ ] Conjugation practice: graduate from early access
- [ ] SEO Phase 1 — Foundations (see below)

## Next

- [ ] Promote labs rungs (shadow/build sentence modes, `?labs=1`) to release

## SEO & AI search roadmap

<!-- Added 2026-08-07. Full research: docs/keyword-research-2026-08.md (keyword tables, SERP notes, sources). Claude checks items off as they're done. -->

### Phase 1 — Foundations (free, ~week 1)

- [x] Verify kotobaapp.com in Google Search Console; submit sitemap — confirmed 2026-08-07: domain property live since ~Jun 26, sitemap submitted Jun 28 (status Success). Data through Aug 4: 787 impressions / 19 clicks, avg pos 10.7, ALL 24 queries branded ("kotoba" variants incl. Discord-bot spillover) — zero intent-query impressions, homepage is the only page earning any. Confirms Phase 3 pages are the bottleneck.
- [x] Verify in Bing Webmaster Tools; submit sitemap — confirmed 2026-08-07: verified since ~Jun 20, both sitemap variants submitted, 143 impressions / 4 clicks. AI Performance beta shows 2 Copilot citations (baseline). IndexNow wasn't enabled — now wired into the repo instead: key file `public/fd19….txt` + `pnpm run indexnow` (pings api.indexnow.org with all sitemap URLs; run after each marketing-page deploy)
- [x] Check robots.txt doesn't block AI crawlers — verified clean 2026-08-07 (`Allow: /` for all agents; only `/app/` disallowed, which is correct)
- [x] Add schema to marketing page: `SoftwareApplication` (price: 0), `Organization`, `FAQPage` — done 2026-08-07, plus visible FAQ section (6 answer-first Q&As mirroring the schema) and driving/audio-flashcard phrasing in meta descriptions
- [x] Baseline AI prompt audit — done 2026-08-07, full writeup in docs/prompt-audit-2026-08.md. Headline: Claude 0/15, Gemini 0/2, but **ChatGPT already cites Kotoba** (2/5, incl. ranked #1 "closest match" on the voice-interactive prompt — only on search-triggering long-tail phrasings). Perplexity needs sign-in; AI Mode blocked under automation. New competitors found: Danki (iOS, drive mode, FSRS), JLPT Speak, Perapera, Jouzu, Audio Flash — comparison pages updated to include them honestly. Outreach list extracted (AlternativeTo retrieved in 5/8 searches → list there first)
- [ ] Set up free AI-visibility monitoring: Ahrefs Brand Radar free tier + Parse free tier

### Phase 2 — Keyword tooling (~$0–7/mo, weeks 2–3)

- [ ] Set up Google Search Console MCP (AminForou/mcp-gsc) so Claude can mine real query/impression data
- [ ] Open DataForSEO account ($50 pay-as-you-go deposit, official MCP) + set spend alert
- [ ] Validate Tier 1 keyword list via DataForSEO: volumes + distinct-SERP checks (~$1 total)
- [ ] Optional: Keywords Everywhere Bronze ($84/yr, includes MCP + autocomplete overlay)

### Phase 3 — Tier 1 landing pages (static HTML on marketing site, NOT the SPA — AI crawlers can't run JS)

- [x] "Anki while driving? The audio-only alternative" — built 2026-08-07 as `public/anki-while-driving.html` (canonical /anki-while-driving; GH Pages serves .html extensionless). Article + FAQPage + Breadcrumb schema, links to Anki forum/AnkiDroid threads, disclosed authorship. Autocomplete-validated phrasing: "anki while driving", "anki audio only cards", "how to use anki while driving"
- [x] "Japanese audio flashcards — hands-free and free" — built 2026-08-07 as `public/japanese-audio-flashcards.html` (canonical /japanese-audio-flashcards). Honest comparison table (Anki/Spotify/Pimsleur/Quizlet/Kotoba), FAQ mirrors autocomplete ("can you listen to flashcards like a playlist"). Both pages footer-linked from homepage; sitemap.xml updated with both URLs. Deployed 2026-08-07 (both URLs live, 200); IndexNow ping submitted, HTTP 202 — GSC impression check due ~2026-08-28
- [x] "How to learn Japanese vocabulary while driving" — built 2026-08-07 as /learn-japanese-while-driving; honest 5-way comparison incl. Danki
- [x] "The hands-free Japanese learning app" — built 2026-08-07 as /hands-free-japanese-learning-app; defines the 3-part hands-free test (audio out / voice in / voice control)
- [x] "Audio spaced repetition, explained" — built 2026-08-07 as /audio-spaced-repetition; category-defining page, grading-fidelity comparison (Kotoba/Danki/Audio Flash/Anki auto-advance)
- [x] "A Pimsleur alternative that actually hears you" — built 2026-08-07 as /pimsleur-alternative; credits Pimsleur honestly, names the can't-hear-you gap
- [x] Each page: title/URL literally match the query; 40–80-word direct answer up top; question-form H2s; FAQ block — all six follow the template; all cross-linked + footer-linked sitewide; sitemap has all 7 URLs

### Phase 4 — GEO content & outreach (weeks 4–6)

- [ ] Restructure marketing page into answer-first quotable sections (literal question H2s, direct answers)
- [x] Publish honest "Best apps for learning Japanese while driving (2026)" roundup — live 2026-08-07 at /best-apps-learn-japanese-while-driving; 7 apps ranked by use case (Pimsleur, Kotoba, Danki, JPod101, Language Transfer, Audio Flash, JLPT Speak) with disclosure + ItemList schema; refresh every 1–2 months (visible updated date)
- [x] Publish "Kotoba vs Pimsleur" and "Kotoba vs Anki" comparison pages — live 2026-08-07 at /kotoba-vs-pimsleur and /kotoba-vs-anki; footers sitewide now link all 9 content pages
- [x] Quora: answered ["Is there an app to learn another language while driving?"](https://www.quora.com/Is-there-an-app-to-learn-another-language-while-driving) (Evan, 2026-08-07). Further targets found by search: [best apps beginner/intermediate](https://www.quora.com/What-are-the-best-apps-for-learning-Japanese-as-a-beginner-and-intermediate), [free sites besides Duolingo](https://www.quora.com/Are-there-any-free-sites-aside-from-Duolingo-that-teach-Japanese-and-even-help-with-actual-fluency), [learn Japanese from an audio book](https://www.quora.com/How-can-I-learn-Japanese-from-an-audio-book), [free Mango/Pimsleur alternative](https://www.quora.com/Is-there-a-free-alternative-to-Mango-Languages-or-Pimsleur), [best approach for JLPT](https://www.quora.com/How-is-the-best-approach-to-learn-Japanese-for-JLPT) — **all 5 answered 2026-08-07** (6 Quora placements total)
- [ ] Listicle outreach: pitch articles cited in the prompt audit + FluentU/Speechling/LinguaJunkie driving posts (blurb + screenshots; angle: only interactive hands-free option, free; expect ~15–25% hit rate, 2–6 week confirms)
- [ ] Republish adapted versions of the roundup on Medium and LinkedIn (both heavily cited by AI engines; reframe each, don't duplicate verbatim)
- [ ] Builder-angle post on dev.to or HackerNoon ("I built an audio-only SRS because Anki can't run hands-free") — feeds HN/Indie Hackers organically
- [ ] Community engagement (disclosed "I built Kotoba", contribution-first): WaniKani hands-free + Pimsleur-alternative threads, Anki forum background-playback + playlist threads, AnkiDroid voice-control issue, Quora driving-app question, matching Reddit threads (links in research doc)
- [ ] 2 short YouTube demos with transcript-rich descriptions (Gemini/AI Overviews cite YouTube)
- [x] AlternativeTo: submitted 2026-08-07 (paid $5 queue skip) — verify listing once approved; set "alternative to" Anki/Pimsleur/JapanesePod101/Duolingo if not already
- [ ] List on Product Hunt and Slant

### Recurring (monthly)

- [ ] Re-run the AI prompt audit; track Kotoba mentions over time
- [ ] Refresh roundup/comparison pages (visible updated date — freshness is a measured citation factor)
- [ ] Mine GSC for new impression-earning queries without a dedicated page → new page candidates

### Not doing (deliberately)

- llms.txt (crawlers don't read it — Ahrefs 137k-domain study), Ahrefs/Semrush MCP subs ($129–199/mo), self-authored Wikipedia page, head terms ("best app to learn japanese" — affiliate fortresses)
- Paid listicle marketplaces (e.g. PRNEWS.IO-style placement buying): penalty clustering — sites that sell placements get discounted by Google and AI engines; undisclosed paid links violate Google guidelines. If earned outreach stalls, the acceptable paid path is a *disclosed* sponsored review from a Japanese-learning YouTuber/blogger. Details: docs/keyword-research-2026-08.md §4

## Done

- [x] Marketing-page live demo (2026-08-08): the hero exchange box now runs a real mini session on tap — teach water/tomorrow → quiz, production R2 audio, optional on-device Web Speech mic (graceful fallback when denied). Funnel markers via `/demo-start|mic|done.txt` fetches, visible per-path in CF zone analytics. Context: funnel analysis showed ~5% homepage→app click-through vs 25% app→signup — the leak is "never tries a session". Baseline (last 8 days, human browsers): ~317 homepage visits → 16 app opens → 4 signups.
- [x] Admin usage stats (2026-08-08): `GET /stats` on the API worker (gated to `ADMIN_EMAILS` = revevan) + in-app Stats screen (Settings → Stats, visible only to admin login). New D1 `activity_days` table logs one row per user per UTC day on sync → real daily-active counts going forward. Same-day follow-up: `studied` flag on `activity_days` (set from the sync blob's newest last_review) separates "opened the app" from "graded at least one card" — tiles show studied/opened, day bars are two-tone, per-user Opened/30 + Studied/30 columns. All deployed.
- [x] "Missed it" demote button on the pass screen
- [x] Home due count fixed to day-granularity dueness
- [x] Migrated npm → pnpm
- [x] Keyword & AI-search research → docs/keyword-research-2026-08.md (2026-08-07)
