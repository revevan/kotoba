# TODO — Kotoba

<!-- Seeded by Claude 2026-07-31 from recent commits. Edit freely; Claude keeps this current as work happens. Format: ## Now / ## Next / ## Done, items as - [ ] / - [x]. -->

## Now

- [ ] Shorts → YouTube: audit follow-up received 2026-08-25 (they want the upload script + channel link); **reply due within 7 business days (~2026-09-03)** — evidence PDF ready in ~/Downloads/yt-audit-upload-evidence.pdf, reply draft from Claude 2026-08-26, Evan to send. NOTE: publishing is NOT actually locked — first 2 shorts went PUBLIC on schedule (Aug 24/25); channel is live. 14 uploaded/scheduled through Sep 10; next batch already approved. Pipeline fully automated; rejected shorts via `pnpm run reviews`.
- [ ] Marketing-demo funnel — **pulled 2026-08-22** (CF zone analytics, Aug 16–22, bots NOT filtered: free plan has no botScore, 1-day query max, 8-day retention, so the Jul 31–Aug 7 baseline is purged): `/` 923 req/434 visits → `/app/` 55 req/19 visits → demo-start **4** → demo-mic 1 → demo-done 1. Demo is essentially unused (~1% of homepage loads) and homepage→app is flat vs baseline (16 app opens/8d). Open question before redesigning the demo: how much of homepage traffic is human? GSC shows queries are nearly all branded "kotoba" (people looking for the Discord bot / the word, we rank ~11th) — so the likely diagnosis is *wrong traffic*, not a broken demo. Resolve via GSC MCP (Phase 2) → real human clicks per page; Phase 3 page impression check due ~2026-08-28 lands in the same pull. Signup count for the window: check Settings → Stats (D1 query blocked from CLI). **RESOLVED 2026-08-22 via GSC:** Google sent ~16 clicks/7d, nearly all branded → the demo had ~20–30 real prospects/week at most; 4 starts is not a demo failure. Decision: leave the demo alone, bottleneck is upstream → prioritize outreach (listicles, dev.to post) over on-page work; defer DataForSEO
- [ ] **Outreach gate — n5-starter flags: all 46 FIXED 2026-08-22, awaiting wife re-check.** 46 sentence/gloss/pitch fixes applied per her notes: ~35 sentences replaced (new ids), 9 TTS `speak` pitch overrides (7 word-intro, 6 sentence-level via new per-sentence `speak` field in gen-audio/publish-sentences), glosses mom/dad/(someone's) older brother/sister. 224 clips regenerated, 195 synced to R2, edge cache purged, all 46 D1 rows → fixed with JA fix notes. **Needs deploy (push) before she re-checks — /review loads sentences from the live site.** Her remaining fresh-review slice: words 106–121. Outreach unblocks when re-checks come back verified.
- [ ] Conjugation practice: graduate from early access
- [ ] SEO Phase 1 — Foundations (see below)

## Next

- [ ] Promote labs rungs (shadow/build sentence modes, `?labs=1`) to release
- [ ] Casual-register sentence variants: add plain-form/casual variants to the example-sentence pools (cloze/shadow rungs) so learners hear the polite↔casual mapping on words they know. Pipeline currently gates "casual plain-form conversation" to the N3 band (`tools/pipeline/config.ts`) — loosen per-band, generate variants through the existing pipeline → wife's /review audit → audio → R2. Origin: friend feedback 2026-08-14 ("always looking for casual Japanese, not ~masu form")

## Ideas (future)

- Scenario-themed decks: vocab + sentence decks around situations (doctor visit, barber, workplace small talk) — rides the existing deck/sentence/audio loop, NOT a dialogue library (saturated market, off-strategy per docs/keyword-research-2026-08.md)
- **Unhinged deck** as the first scenario deck: totally unhinged words/phrases, doubles as the hook for shorts (deadpan format is already the style lock — an unhinged corpus feeds it natural material)

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

- [x] Google Search Console MCP — **live 2026-08-22**: `.mcp.json` (`gsc` server, `uvx mcp-search-console`, service account `kotoba-gsc-reader@kotoba-shorts` with Full access on `sc-domain:kotobaapp.com`, key at gitignored `.secrets/gsc-service-account.json`, Search Console API enabled in GCP project kotoba-shorts). Loads on Claude Code restart; until then a direct pull works via `uv run --with google-api-python-client --with google-auth python <script>` using the same key. **First pull Aug 8–21:** 32 clicks total (~2.3/day) — homepage 30c/1228i pos 8.3, ~95% branded ("kotoba" 763i/13c, "kotoba app" 72i/6c, Discord-bot/meaning/apk noise). First intent queries ever: "anki while driving" pos 6.6, "how to do anki while driving" 9.7, "learn japanese while driving" 10.5 → /anki-while-driving 2c/39i. 5 of 9 content pages still 0 impressions → re-check ~2026-09-05, not 08-28
- [ ] Open DataForSEO account ($50 pay-as-you-go deposit, official MCP) + set spend alert
- [ ] Validate Tier 1 keyword list via DataForSEO: volumes + distinct-SERP checks (~$1 total) — include casual-register phrasings ("casual japanese", "plain form japanese practice", "japanese apps only teach polite") to size the register-gap angle from friend feedback 2026-08-14
- [ ] Optional: Keywords Everywhere Bronze ($84/yr, includes MCP + autocomplete overlay)

### Phase 3 — Tier 1 landing pages (static HTML on marketing site, NOT the SPA — AI crawlers can't run JS)

- [x] "Anki while driving? The audio-only alternative" — built 2026-08-07 as `public/anki-while-driving.html` (canonical /anki-while-driving; GH Pages serves .html extensionless). Article + FAQPage + Breadcrumb schema, links to Anki forum/AnkiDroid threads, disclosed authorship. Autocomplete-validated phrasing: "anki while driving", "anki audio only cards", "how to use anki while driving"
- [x] "Japanese audio flashcards — hands-free and free" — built 2026-08-07 as `public/japanese-audio-flashcards.html` (canonical /japanese-audio-flashcards). Honest comparison table (Anki/Spotify/Pimsleur/Quizlet/Kotoba), FAQ mirrors autocomplete ("can you listen to flashcards like a playlist"). Both pages footer-linked from homepage; sitemap.xml updated with both URLs. Deployed 2026-08-07 (both URLs live, 200); IndexNow ping submitted, HTTP 202 — GSC impression check due ~2026-08-28
- [x] "How to learn Japanese vocabulary while driving" — built 2026-08-07 as /learn-japanese-while-driving; honest 5-way comparison incl. Danki
- [x] "The hands-free Japanese learning app" — built 2026-08-07 as /hands-free-japanese-learning-app; defines the 3-part hands-free test (audio out / voice in / voice control)
- [x] "Audio spaced repetition, explained" — built 2026-08-07 as /audio-spaced-repetition; category-defining page, grading-fidelity comparison (Kotoba/Danki/Audio Flash/Anki auto-advance)
- [x] "A Pimsleur alternative that actually hears you" — built 2026-08-07 as /pimsleur-alternative; credits Pimsleur honestly, names the can't-hear-you gap
- [x] Each page: title/URL literally match the query; 40–80-word direct answer up top; question-form H2s; FAQ block — all six follow the template; all cross-linked + footer-linked sitewide; sitemap has all 7 URLs
- [ ] Page candidate (pending Phase 2 keyword validation): "Why apps only teach you polite Japanese" — register-gap angle; ties into casual sentence variants once shipped

### Phase 4 — GEO content & outreach (weeks 4–6)

- [ ] Restructure marketing page into answer-first quotable sections (literal question H2s, direct answers)
- [x] Publish honest "Best apps for learning Japanese while driving (2026)" roundup — live 2026-08-07 at /best-apps-learn-japanese-while-driving; 7 apps ranked by use case (Pimsleur, Kotoba, Danki, JPod101, Language Transfer, Audio Flash, JLPT Speak) with disclosure + ItemList schema; refresh every 1–2 months (visible updated date)
- [x] Publish "Kotoba vs Pimsleur" and "Kotoba vs Anki" comparison pages — live 2026-08-07 at /kotoba-vs-pimsleur and /kotoba-vs-anki; footers sitewide now link all 9 content pages
- [x] Quora: answered ["Is there an app to learn another language while driving?"](https://www.quora.com/Is-there-an-app-to-learn-another-language-while-driving) (Evan, 2026-08-07). Further targets found by search: [best apps beginner/intermediate](https://www.quora.com/What-are-the-best-apps-for-learning-Japanese-as-a-beginner-and-intermediate), [free sites besides Duolingo](https://www.quora.com/Are-there-any-free-sites-aside-from-Duolingo-that-teach-Japanese-and-even-help-with-actual-fluency), [learn Japanese from an audio book](https://www.quora.com/How-can-I-learn-Japanese-from-an-audio-book), [free Mango/Pimsleur alternative](https://www.quora.com/Is-there-a-free-alternative-to-Mango-Languages-or-Pimsleur), [best approach for JLPT](https://www.quora.com/How-is-the-best-approach-to-learn-Japanese-for-JLPT) — **all 5 answered 2026-08-07** (6 Quora placements total)
- [ ] Listicle outreach — researched 2026-08-10, ranked by likelihood (nobody found selling placement except GaijinPot; skip pay-to-play):
  1. ~~AllLanguageResources~~ — **pitch sent 2026-08-10** to newresource@alllanguageresources.com; typical confirm window 2–6 weeks, follow up ~2026-08-31 if silent
  2. JoyOfJapanese — solo blogger Vikash Gupta, hello@joyofjapanese.com, small enough to actually reply
  3. Speechling blog — nonprofit; their driving article (Mar 2020) recommends zero interactive apps; pitch an update or guest post
  4. Guide2Fluency — "Best Apps To Learn Japanese" article highlights Pimsleur's driving mode; small site, worth a pitch
  5. TestPrepInsight — independent-testing policy, accepts products for review (affiliate-funded; free app = no commission for them, lower odds)
  6. FluentU — driving article (updated Feb 2025) lists 9 passive options, zero interactive; funnel content for FluentU itself, low odds — contact form only
  - SKIP: GaijinPot (editorial staff-only; sponsorship = paid Commercial Partner program → pay-to-play), StoryLearning (affiliate fortress)
  - Anki forum: DO NOT post app mentions again (mod warning 2026-08-09); threads still matter as AI-retrieval surfaces without us posting
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

- [x] Shorts batch v2 after Evan + native review (2026-08-17): killed the itadakimasu deadpan (EN TTS mispronounces "itadakimasu"); notrans format now speaks the EN gloss + sentence translation (transcript SEO); corpus fixes applied via apply-review/deck edits — 遅れる→遅れた (s-f2f425b6), 別れる sentence replaced with 誰とも付き合っていません (s-85fbbb49), 老い got a kanji `speak` override for pitch accent, 中 "during" primary reading swapped じゅう→ちゅう. Revised sentences have new ids → they'll re-queue at /review for her re-check. Batch is now 14 videos. NOTE: gen-audio also kicked off the pending N3/N4 conj-audio backlog; R2 sync runs after it finishes.
- [x] Shorts generator ported into the repo (2026-08-11): `pnpm run gen-shorts` (tools/shorts/gen_shorts.py, Python/Pillow/ffmpeg, self-bootstrapping venv) renders 1080x1920 shorts from corpus assets — 4 formats (quiz/wotd/deadpan/notrans), idempotency manifest, out/review.html grid + out/batch.json (titles, descriptions, publishAt 5/week). Full curated queue (10 deadpan + 5 notrans) rendered; added EN word-wrap + kinsoku-aware JA wrap the prototype lacked. Style locked per HANDOFF.md: no motion, no driving copy.
- [x] Marketing-page live demo (2026-08-08): the hero exchange box now runs a real mini session on tap — teach water/tomorrow → quiz, production R2 audio, optional on-device Web Speech mic (graceful fallback when denied). Funnel markers via `/demo-start|mic|done.txt` fetches, visible per-path in CF zone analytics. Context: funnel analysis showed ~5% homepage→app click-through vs 25% app→signup — the leak is "never tries a session". Baseline (last 8 days, human browsers): ~317 homepage visits → 16 app opens → 4 signups.
- [x] Admin usage stats (2026-08-08): `GET /stats` on the API worker (gated to `ADMIN_EMAILS` = revevan) + in-app Stats screen (Settings → Stats, visible only to admin login). New D1 `activity_days` table logs one row per user per UTC day on sync → real daily-active counts going forward. Same-day follow-up: `studied` flag on `activity_days` (set from the sync blob's newest last_review) separates "opened the app" from "graded at least one card" — tiles show studied/opened, day bars are two-tone, per-user Opened/30 + Studied/30 columns. All deployed.
- [x] "Missed it" demote button on the pass screen
- [x] Home due count fixed to day-granularity dueness
- [x] Migrated npm → pnpm
- [x] Keyword & AI-search research → docs/keyword-research-2026-08.md (2026-08-07)
