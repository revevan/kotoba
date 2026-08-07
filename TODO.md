# TODO — Kotoba

<!-- Seeded by Claude 2026-07-31 from recent commits. Edit freely; Claude keeps this current as work happens. Format: ## Now / ## Next / ## Done, items as - [ ] / - [x]. -->

## Now

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
- [ ] Baseline AI prompt audit: fixed panel of ~15 prompts ("best app to learn japanese while driving", "audio only japanese flashcards", …) across ChatGPT / Claude / Perplexity / Gemini / AI Mode; record mentions + cited URLs (cited URLs = outreach list)
- [ ] Set up free AI-visibility monitoring: Ahrefs Brand Radar free tier + Parse free tier

### Phase 2 — Keyword tooling (~$0–7/mo, weeks 2–3)

- [ ] Set up Google Search Console MCP (AminForou/mcp-gsc) so Claude can mine real query/impression data
- [ ] Open DataForSEO account ($50 pay-as-you-go deposit, official MCP) + set spend alert
- [ ] Validate Tier 1 keyword list via DataForSEO: volumes + distinct-SERP checks (~$1 total)
- [ ] Optional: Keywords Everywhere Bronze ($84/yr, includes MCP + autocomplete overlay)

### Phase 3 — Tier 1 landing pages (static HTML on marketing site, NOT the SPA — AI crawlers can't run JS)

- [x] "Anki while driving? The audio-only alternative" — built 2026-08-07 as `public/anki-while-driving.html` (canonical /anki-while-driving; GH Pages serves .html extensionless). Article + FAQPage + Breadcrumb schema, links to Anki forum/AnkiDroid threads, disclosed authorship. Autocomplete-validated phrasing: "anki while driving", "anki audio only cards", "how to use anki while driving"
- [x] "Japanese audio flashcards — hands-free and free" — built 2026-08-07 as `public/japanese-audio-flashcards.html` (canonical /japanese-audio-flashcards). Honest comparison table (Anki/Spotify/Pimsleur/Quizlet/Kotoba), FAQ mirrors autocomplete ("can you listen to flashcards like a playlist"). Both pages footer-linked from homepage; sitemap.xml updated with both URLs. Deployed 2026-08-07 (both URLs live, 200); IndexNow ping submitted, HTTP 202 — GSC impression check due ~2026-08-28
- [ ] "How to learn Japanese vocabulary while driving" (best app to learn japanese while driving / practice japanese while driving)
- [ ] "The hands-free Japanese learning app" (japanese app with hands free mode / hands free language learning app)
- [ ] "Audio spaced repetition, explained" (audio spaced repetition / spaced repetition while driving — category-naming play)
- [ ] "A Pimsleur alternative that actually hears you" (interactive pimsleur alternative / free pimsleur alternative japanese)
- [ ] Each page: title/URL literally match the query; 40–80-word direct answer up top; question-form H2s; FAQ block

### Phase 4 — GEO content & outreach (weeks 4–6)

- [ ] Restructure marketing page into answer-first quotable sections (literal question H2s, direct answers)
- [ ] Publish honest "Best apps for learning Japanese while driving (2026)" roundup on kotobaapp.com incl. Pimsleur/JapanesePod101/Anki
- [ ] Publish "Kotoba vs Pimsleur" and "Kotoba vs Anki" comparison pages
- [ ] Quora: thorough, disclosed answer on ["Is there an app to learn another language while driving?"](https://www.quora.com/Is-there-an-app-to-learn-another-language-while-driving) — already ranks page 1 of Google; cheapest high-leverage placement
- [ ] Listicle outreach: pitch articles cited in the prompt audit + FluentU/Speechling/LinguaJunkie driving posts (blurb + screenshots; angle: only interactive hands-free option, free; expect ~15–25% hit rate, 2–6 week confirms)
- [ ] Republish adapted versions of the roundup on Medium and LinkedIn (both heavily cited by AI engines; reframe each, don't duplicate verbatim)
- [ ] Builder-angle post on dev.to or HackerNoon ("I built an audio-only SRS because Anki can't run hands-free") — feeds HN/Indie Hackers organically
- [ ] Community engagement (disclosed "I built Kotoba", contribution-first): WaniKani hands-free + Pimsleur-alternative threads, Anki forum background-playback + playlist threads, AnkiDroid voice-control issue, Quora driving-app question, matching Reddit threads (links in research doc)
- [ ] 2 short YouTube demos with transcript-rich descriptions (Gemini/AI Overviews cite YouTube)
- [ ] List on AlternativeTo, Product Hunt, Slant

### Recurring (monthly)

- [ ] Re-run the AI prompt audit; track Kotoba mentions over time
- [ ] Refresh roundup/comparison pages (visible updated date — freshness is a measured citation factor)
- [ ] Mine GSC for new impression-earning queries without a dedicated page → new page candidates

### Not doing (deliberately)

- llms.txt (crawlers don't read it — Ahrefs 137k-domain study), Ahrefs/Semrush MCP subs ($129–199/mo), self-authored Wikipedia page, head terms ("best app to learn japanese" — affiliate fortresses)
- Paid listicle marketplaces (e.g. PRNEWS.IO-style placement buying): penalty clustering — sites that sell placements get discounted by Google and AI engines; undisclosed paid links violate Google guidelines. If earned outreach stalls, the acceptable paid path is a *disclosed* sponsored review from a Japanese-learning YouTuber/blogger. Details: docs/keyword-research-2026-08.md §4

## Done

- [x] "Missed it" demote button on the pass screen
- [x] Home due count fixed to day-granularity dueness
- [x] Migrated npm → pnpm
- [x] Keyword & AI-search research → docs/keyword-research-2026-08.md (2026-08-07)
