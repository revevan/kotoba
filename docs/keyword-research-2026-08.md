# Kotoba — Long-Tail Keyword & AI Search Research

*August 7, 2026 · covers: keyword targets, tooling options (incl. Ahrefs/Semrush MCP reality check), and an AI-search (GEO) action plan*

## TL;DR

Your instinct is right, and the niche is even more open than you'd hope. "Anki while driving" and "audio-only flashcards" queries currently return a 2015 blog post, unresolved Anki forum feature requests, and an abandoned GitHub addon — no product ranks. Kotoba is literally the thing those searchers are asking for. Meanwhile the Ahrefs/Semrush MCPs are real and work with Claude, but both are gated behind ~$130–200/mo plans. The good news: a stack of Google Search Console (free, has a solid MCP) + DataForSEO (official MCP, pay-as-you-go, $50 one-time deposit that lasts months) + optional Keywords Everywhere ($7/mo, includes MCP) gets you 90% of the capability for roughly nothing. And for AI recommendations specifically, the research strongly suggests small niche apps can win: 35% of listicles cited by ChatGPT come from low-authority domains, and niche-constrained prompts ("hands-free", "while driving", "free") have almost no constraint-satisfying candidates besides you.

---

## 1. Tooling: the MCP reality check and what to use instead

### Ahrefs & Semrush MCPs — they exist, but the paywall is the plan, not the MCP

Both companies ship official remote MCP servers that work with Claude (I've surfaced both connectors for you — they'll appear as suggestions in this chat). The catch is neither works on a free or cheap tier:

| | Ahrefs MCP | Semrush MCP |
|---|---|---|
| Minimum plan | **Lite, $129/mo** (the $29 Starter and free Webmaster Tools do NOT qualify) | **Semrush One Starter, ~$199/mo** ($165/mo annual); legacy Pro plans grandfathered |
| What you get | 100k API units/mo, full keyword/SERP/backlink tools + Brand Radar AI-visibility tools (tiny allowance: ~5 prompts/mo on Lite; standalone Brand Radar starts $199/mo) | 50k MCP units, keyword/organic/backlink/trends research tools |
| Verdict | Best index, but it's exactly the $100+/mo you're avoiding | Same problem, slightly worse |

### The stack I'd actually recommend (~$0–7/mo effective)

**Google Search Console — free, and the single most important tool.** First-party data on the real queries kotobaapp.com already gets impressions for — including queries every volume database reports as "0 searches." There are several good community MCP servers; the best-documented is [AminForou/mcp-gsc](https://github.com/AminForou/mcp-gsc) (~20 tools, OAuth or service-account auth, works with Claude Desktop). If kotobaapp.com isn't verified in GSC yet, that's step zero. The recurring loop: sort queries by impressions over a long date range, find ones with no dedicated page, build the page.

**DataForSEO — official MCP, pay-as-you-go, best paid fit.** [Official vendor-maintained MCP server](https://github.com/dataforseo/mcp-server-typescript), $50 minimum deposit, no subscription. Volume + difficulty + intent on 1,000 keywords costs about $0.18; a live SERP check about $0.0006. Same Google Ads-derived volume data that Ahrefs/Semrush resell. A $50 deposit will realistically last you a year at Kotoba's scale. One caveat: set a spend alert, because an enthusiastic agent can burn credits.

**Keywords Everywhere — $84/yr (Bronze, 100k credits), optional but nice.** All paid plans now include their REST API *and* an MCP server sharing the same credit pool, plus the browser extension that overlays volume on Google/YouTube autocomplete as you type — which is exactly the right workflow for long-tail mining.

**Free seeders, no account needed:** Ahrefs' free keyword generator (100 ideas + 50 questions per search), AlsoAsked ($12/mo tier has API access; small free allowance) for People-Also-Ask trees, AnswerThePublic (~3 free searches/day), Keyword Sheeter for bulk autocomplete dumps, and Keyworddit (mines the actual vocabulary of a subreddit — point it at r/LearnJapanese). Google's official Trends API is in alpha with an application form — worth applying.

**Skip:** Mangools/KWFinder ($29/mo, no MCP), Ubersuggest ($290 lifetime is tempting but no automation path), SE Ranking (API is a +$149/mo add-on), Serpstat (API from $100/mo).

### Validating "zero-volume" keywords

Most of Kotoba's best queries will show 0 volume in every database — that means *below the tool's threshold*, not *no demand*. The practitioner playbook in 2026: (1) GSC impressions are ground truth; (2) if Google **autocompletes** the phrase, real people type it; (3) the **distinct-SERP test** — if "japanese audio flashcards" returns different results than "japanese flashcards", Google treats it as its own intent worth a page (automatable via DataForSEO SERP calls at ~$0.0006 each); (4) if a competitor built a landing page for the phrase (JapanesePod101 has one for "learn in your car"), they saw demand; (5) zero-volume pages are cheap bets — publish and check GSC impressions three weeks later.

---

## 2. Keyword targets

I mined SERPs, forums (WaniKani community, Anki forums, Quora, GitHub), and competitor positioning across ~74 candidate queries. Reddit was proxy-blocked from this environment, so Reddit-specific phrasing should be verified from your browser (search links at the end). Full candidate list is in the appendix; here's the prioritized view.

### Tier 1 — weakest SERPs × strongest intent match (build for these first)

| Query cluster | Why it's winnable |
|---|---|
| **anki while driving · anki audio only · anki hands free · anki background playback** | The single biggest gap found. SERP is a ~2015 Fluent Forever post, [an open Anki forum feature request](https://forums.ankiweb.net/t/add-option-to-listen-with-screen-off-background-playback/57641), [an AnkiDroid issue open since ~2019](https://github.com/ankidroid/Anki-Android/issues/1717), and an abandoned addon. Google is so starved it returns the Anki Drive toy car. These searchers want exactly Kotoba's core loop and nobody serves them. |
| **japanese audio flashcards · audio only flashcards · hands free flashcards** | SERP is 2000s-era sites, one tiny indie competitor (Silo Interactive's "Audio Flashcards – Japanese"), and a 10-year-old blog post. Exact product match. |
| **best app to learn japanese while driving · learn japanese vocabulary while driving · practice japanese while driving** | High commercial intent. JapanesePod101 has a [dedicated landing page](https://www.japanesepod101.com/learn-in-your-car/) — proof the theme converts — but it's a generic funnel for passive audio, beatable by an actually-hands-free product page. Nobody owns the exact "best app…" phrase. |
| **japanese app with hands free mode · hands free language learning app** | A [WaniKani forum thread ranks #1](https://community.wanikani.com/t/any-good-japanese-learning-apps-that-has-hand-free-mode-feature/48427) — when a forum thread outranks all commercial content, there's demand with zero supply. FluentU's "9 hands-free apps" listicle recommends only passive audio (Pimsleur, Michel Thomas, Assimil). |
| **audio spaced repetition · spaced repetition while driving · japanese spaced repetition audio app** | Category-defining term with no owner. Whoever names the category tends to become its default answer — in AI search especially. |
| **interactive pimsleur alternative · free pimsleur alternative japanese** | "Pimsleur but it hears you" is Kotoba's positioning in one sentence. A WaniKani thread ranks #2–4 for the free-alternative query; the rest is beatable affiliate listicles. |

### Tier 2 — secondary clusters

Commute variants (learn japanese during commute / on the train / while walking / while doing chores — exact phrasing from community threads), question forms for featured snippets ("can you learn japanese while driving", "can you use anki without looking at the screen", "is it safe to study flashcards while driving"), screen-free framing ("screen free language learning" — growing digital-wellness phrasing, no owner), and JLPT bolt-ons ("jlpt n5 vocabulary audio", "listen to jlpt n5 words while driving" — current supply is static MP3 lists and Spotify albums of the same Jonathan Waller lists you build decks from; interactive beats dead media).

### Avoid

Head terms ("best app to learn japanese", "japanese listening practice for beginners") are affiliate-blog fortresses (FluentU, Preply, Migaku, Rosetta Stone). Don't spend content effort there — get *into* those listicles instead (see §3).

### What to actually build

Each Tier 1 cluster wants one page: a landing/blog page on kotobaapp.com whose title and URL literally match the query, opening with a 40–80-word direct answer. Roughly six pages covers Tier 1: "Anki while driving? Here's the audio-only alternative" · "Japanese audio flashcards (hands-free, free)" · "How to learn Japanese vocabulary while driving" · "The hands-free Japanese learning app" · "Audio spaced repetition, explained" · "Pimsleur alternative that actually hears you". Static HTML on the marketing site, not inside the SPA — AI crawlers like ChatGPT-User can't execute JavaScript.

---

## 3. Showing up in AI search / LLM recommendations

You're right that long-tail positioning helps here — the evidence is unusually strong. The Princeton GEO study found an "equalizer effect": optimization helps low-ranked small sites far more than incumbents (+115% visibility for position-5 sources). Ahrefs found only 28% of ChatGPT's most-cited pages have meaningful Google visibility, and 35% of cited listicles come from low-authority domains. AI citation is not a mirror of Google rankings. And for a constrained prompt like "free hands-free app to learn Japanese while driving," the model's candidate pool is nearly empty — Duolingo fails the constraints. The slot is claimable.

Where LLMs source app recommendations, per 2025–26 large-scale studies: "best X" listicles are the #1 cited format (43.8% of citations in ChatGPT for recommendation prompts); Reddit, Wikipedia, and YouTube are the top cited domains; review-site presence (G2/Capterra/AlternativeTo) acts as an inclusion threshold, not a ranking factor. One nuance: ChatGPT *retrieves* Reddit constantly but *cites* it in <2% of answers — Reddit shapes what models believe and recommend more than it earns visible links, so the goal there is being named positively in threads, not link-dropping.

### Tier 1 — free, this week

Verify kotobaapp.com in **Bing Webmaster Tools** (submit sitemap, enable IndexNow) — Bing still feeds ChatGPT/Copilot discovery and is a softer door than Google. Confirm GSC coverage. Check robots.txt doesn't block `OAI-SearchBot`, `ChatGPT-User`, `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`. Add `SoftwareApplication` (price: 0), `Organization`, and `FAQPage` schema to the marketing page — cheap insurance, not a magic lever. Then run a **baseline prompt audit**: a fixed panel of ~15 prompts ("best app to learn japanese while driving", "audio only japanese flashcards", etc.) across ChatGPT, Claude, Perplexity, Gemini, and AI Mode; record who gets mentioned and *which URLs get cited* — those URLs are your outreach list. I can run a version of this audit for you and repeat it monthly. Free monitoring: Ahrefs Brand Radar free tier + Parse free tier.

### Tier 2 — the actual levers, next 4–6 weeks

Restructure the marketing page into answer-first, quotable sections with literal question H2s. Publish the six Tier 1 pages plus two GEO-specific ones: an *honest* "Best apps for learning Japanese while driving (2026)" roundup on your own site that includes Pimsleur/JapanesePod101/Anki (self-published lists demonstrably get picked up in software answers; keep it fair, update it every 1–2 months — freshness is a measured citation factor), and "Kotoba vs Pimsleur" / "Kotoba vs Anki" comparisons. Then **listicle outreach**: pitch every article your prompt audit shows being cited, plus the FluentU/Speechling/LinguaJunkie driving articles, with a ready-made blurb and the genuinely unique angle ("the only interactive hands-free option, and it's free"). Reported hit rates are 15–25%.

### Tier 3 — ongoing

Disclosed, contribution-first participation in the exact threads found in this research (below) and their Reddit equivalents — always "I built Kotoba," only where directly relevant. A couple of YouTube demos with transcript-rich descriptions (Gemini/AI Overviews cite YouTube heavily). List on AlternativeTo, Product Hunt, Slant. Skip llms.txt (Ahrefs' 137k-domain study: 97% of llms.txt files get zero AI-bot requests; Google says it's unused) and skip paid GEO trackers beyond maybe Otterly at $29/mo if you later want one.

### Community threads worth engaging (verified live)

The WaniKani threads on [hands-free apps](https://community.wanikani.com/t/any-good-japanese-learning-apps-that-has-hand-free-mode-feature/48427) and [Pimsleur alternatives](https://community.wanikani.com/t/good-alternatives-to-pimsleur/51977), the Anki forum threads on [background playback](https://forums.ankiweb.net/t/add-option-to-listen-with-screen-off-background-playback/57641) and [playlist-style review](https://forums.ankiweb.net/t/play-card-audio-in-sequence-like-a-playlist/66189), [AnkiDroid's voice-control issue](https://github.com/ankidroid/Anki-Android/issues/1717), and [the Quora driving-app question](https://www.quora.com/Is-there-an-app-to-learn-another-language-while-driving) that ranks page 1. Reddit entry points to check from your browser: [r/LearnJapanese "while driving"](https://www.reddit.com/r/LearnJapanese/search/?q=while%20driving&restrict_sr=1), [r/LearnJapanese "commute"](https://www.reddit.com/r/LearnJapanese/search/?q=commute&restrict_sr=1), [r/Anki "audio only while driving"](https://www.reddit.com/r/Anki/search/?q=audio%20only%20while%20driving&restrict_sr=1), [r/languagelearning "learn while driving"](https://www.reddit.com/r/languagelearning/search/?q=learn%20while%20driving&restrict_sr=1).

---

## 4. Where to publish listicles — owned, earned, and paid channels

*(Added later on 2026-08-07 after a follow-up question: "is there anywhere I can post a listicle that will get picked up? Or pay-to-play?")*

### Self-publish channels that AI engines actually cite (all free)

The primary home is **kotobaapp.com itself** — Ahrefs' data shows self-published "best X" lists appear in over a third of software recommendation answers, provided they're honest: include Pimsleur/JapanesePod101/Anki, rank Kotoba where it belongs, disclose authorship. Beyond the owned page, in rough priority order for this niche:

| Channel | Why | Notes |
|---|---|---|
| **Quora** | The question ["Is there an app to learn another language while driving?"](https://www.quora.com/Is-there-an-app-to-learn-another-language-while-driving) already ranks page 1 of Google — a thorough, disclosed answer puts Kotoba on a page LLMs already retrieve | Costs an evening; do first |
| **Medium** | Heavily cited by engines (GEO search results themselves are full of Medium posts) | Republish an *adapted* version of the on-site roundup — reframe, don't duplicate verbatim |
| **LinkedIn articles** | Top-3 cited domain across AI engines per Peec's 30M-citation study | Adapted roundup or builder-story angle |
| **dev.to / HackerNoon** | High-DA, cited, and the builder angle ("I built an audio-only SRS because Anki can't run hands-free") travels organically to HN / Indie Hackers | Different audience than learners, but feeds the citation graph |
| **YouTube** | Gemini / AI Overviews lean on video transcripts | A "top 5 apps to learn Japanese while driving" video is the listicle in video form; do after written versions |

Honesty rules for all of the above: include real competitors, disclose "I make Kotoba," don't rank yourself #1 everywhere — heavily self-promotional lists are increasingly penalized by both Google and AI engines.

### Pay-to-play: exists, hold off

There's a real industry of listicle-placement marketplaces and agencies (e.g. [PRNEWS.IO's placement marketplace](https://prnews.io/blog/how-to-find-listicle-sites.html)) where sites openly sell inclusion in "best apps" articles. Three reasons to skip for now: (1) **penalty clustering** — sites that sell placements get discounted by Google and AI engines over time ([Link Building Journal](https://linkbuildingjournal.co.uk/listicle-placements-ai-citation-tactic/), [Position Digital](https://www.position.digital/blog/listicle-outreach-guide/)); (2) undisclosed paid links violate Google's guidelines outright; (3) it's unnecessary — Kotoba's earned pitch is unusually strong because every app on the currently-ranking lists is passive audio, so adding the only interactive hands-free free option genuinely improves the article, which is what editors respond to. Earned outreach typically converts 15–25% and confirms in 2–6 weeks.

**Legitimate paid middle ground** if outreach stalls: a *disclosed* sponsored review from a mid-size Japanese-learning YouTuber or blogger (honest review, labeled sponsored). Free directories regardless: Product Hunt, AlternativeTo, Slant.

---

## 5. Suggested sequence

Week 1: GSC + Bing WMT verification, robots.txt check, schema, baseline prompt audit. Week 2–3: set up the GSC MCP and DataForSEO MCP so Claude can validate the appendix keywords against live SERPs and volumes (~$1 of credits for the whole list); ship the first two Tier 1 pages (Anki-while-driving and audio-flashcards — the widest-open clusters). Week 4–6: remaining pages, the on-site roundup + comparisons, listicle outreach, first community engagements. Monthly: re-run the prompt audit, touch the roundup's updated date, check GSC for new impression-earning queries.

---

## Appendix A — Full keyword candidate list (74 queries)

Opportunity: H = weak/absent SERP + strong intent match, M = winnable with effort, L = incumbent fortress. Intent: T = transactional (app-seeking), I = informational.

### Driving / car / commute

| Query | Intent | What ranks today | Opp |
|---|---|---|---|
| learn japanese while driving | T/I | JPod101 landing page, Speechling/FluentU listicles, spam ebooks | H |
| how to learn japanese while driving | I | Same blog listicles | H |
| best app to learn japanese while driving | T | No exact-match page | H |
| learn japanese in the car | T/I | JPod101 "learn-in-your-car" funnel | M-H |
| practice japanese while driving | I | One Speechling post | H |
| learn japanese vocabulary while driving | T | Nothing exact | H |
| japanese lessons for the car | T | Resellers of dead "Learn in Your Car" CDs | H |
| learn japanese during commute | I | Generic productivity posts | M-H |
| best way to study japanese on a commute | I | Generic listicles | M |
| learn japanese on the train commute | I | Mismatched travel-app listicles | M |
| can you learn japanese while driving | I | One Medium post | H |
| is it safe to study flashcards while driving | I | Fluent Forever (2015) | M |
| japanese audio lessons for driving free | T | japaneseaudiolessons.com, MP3 lists | M-H |
| learn a language while driving app | T | Pimsleur blog, FluentU (all passive apps) | M |

### Audio flashcards / screen-free

| Query | Intent | What ranks today | Opp |
|---|---|---|---|
| japanese audio flashcards | T | Silo Interactive app pages, 2000s-era digitaldialects | H |
| audio flashcards app | T | audio-flashcards.com, small apps | H |
| audio only flashcards | I/T | One 10-year-old Fluent Forever post | H |
| hands free flashcards | T | Near-virgin SERP | H |
| flashcards you can listen to | T | audio-flashcards.com tagline | H |
| japanese flashcards with audio free | T | flashcardo, AnkiWeb decks | M-H |
| how to make audio flashcards | I | Medium DIY post ("or skip the work…" angle) | M |
| screen free language learning | I/T | Mismatched listicles | H |
| screen free japanese learning app | T | Nothing exact | H |
| japanese vocab audio playlist / flashcards spotify | T | Jonathan Waller Spotify/SoundCloud albums | M |
| listen to flashcards like a podcast | I/T | unpacklanguages.com, Anki forum | M-H |

### Anki / audio SRS (highest-value theme)

| Query | Intent | What ranks today | Opp |
|---|---|---|---|
| anki while driving | T/I | Fluent Forever, Anki forum, Anki Drive toy-car noise | H |
| anki audio only mode | I/T | Open Anki forum feature request | H |
| anki hands free | T | Abandoned GitHub addon | H |
| anki with screen off / background playback | I | Open forum feature request | H |
| anki voice control | I/T | AnkiDroid issue open since ~2019 | H |
| audio spaced repetition | T/I | No owner; category-defining | H |
| spaced repetition while driving | I | Nothing exact | H |
| japanese spaced repetition audio app | T | Listicles of non-audio SRS apps | H |
| anki alternative audio japanese | T | alternativeto.net | M-H |
| play anki cards in sequence playlist | I | One forum thread | M |
| flashcards that grade your speaking | T | Nothing — name-the-category play | H |

### Passive learning / listening

| Query | Intent | What ranks today | Opp |
|---|---|---|---|
| learn japanese passively | I | Tatsumoto, Tofugu — strong incumbents | L-M |
| can you learn japanese just by listening | I | YouTube, Tofugu | M |
| best way to learn japanese vocab passively | I | No exact match | M-H |
| japanese listening practice for beginners | I/T | Rosetta Stone, Migaku, FluentU | L |
| japanese listening practice app free | T | App-store pages, thin web content | M |
| how to practice japanese speaking alone | I | Shadowing guides | M |
| japanese shadowing app | T | Shadowing book, SakuraSpeak | M |
| learn japanese while doing chores | I | WaniKani thread phrasing, no product answer | M-H |
| learn japanese while walking | I | WaniKani Pimsleur thread | M-H |
| learn japanese while running / at the gym | I | Thin SERP | M |

### Pimsleur & competitor alternatives

| Query | Intent | What ranks today | Opp |
|---|---|---|---|
| pimsleur alternatives free | T | FluentU/Mezzoguild affiliate listicles | M |
| free pimsleur alternative japanese | T | WaniKani forum ranks #2–4 | M-H |
| apps like pimsleur but free | T | Same listicles | M-H |
| is pimsleur worth it / too expensive | I | Migaku review, comparison posts | M |
| free japanese audio course | T | Old sites (Open Culture, japaneseaudiolessons) | M |
| japanese audio course for beginners free | T | Weak sites | M-H |
| interactive pimsleur alternative | T | Nothing exact | H |
| michel thomas japanese alternative | T | Alternative listicles | M |
| glossika free alternative | T | Pirated Archive.org deck ranks (!) | M-H |
| japanesepod101 alternative free | T | Review blogs | M |

### Hands-free / voice-controlled

| Query | Intent | What ranks today | Opp |
|---|---|---|---|
| hands free language learning app | T | FluentU listicle of passive-audio apps | H |
| japanese app with hands free mode | T | WaniKani forum thread at #1 | H |
| voice controlled language learning app | T | Speak, Talkpal (conversation AI, different product) | M |
| language app you can use without touching your phone | T | Nothing exact | H |
| learn japanese by voice | T | ivoca, SakuraSpeak | M-H |
| eyes free language learning | I/T | Academic noise; accessibility angle too | H |
| japanese quiz app that talks to you | T | Nothing exact | H |

### JLPT modifiers

| Query | Intent | What ranks today | Opp |
|---|---|---|---|
| jlpt n5 vocabulary audio | T | Waller Spotify albums, tanos.co.uk MP3s, AnkiWeb | M-H |
| jlpt n5 vocab list with audio pronunciation | I/T | JLPT Samurai blog | M |
| listen to jlpt n5 words while driving | T | Nothing exact | H |
| jlpt n5 audio quiz | T | YouTube quiz videos | M-H |
| japanese core 1000 audio deck | T | AnkiWeb shared decks | M |

### Question-form / featured-snippet targets

"Is there an app to learn another language while driving?" (Quora owns it — H) · "Does learning a language while driving really work?" (one Medium post — M-H) · "How can I make the most of my commute to learn Japanese?" (no owner — M) · "Can you use Anki without looking at the screen?" (Anki forum owns it — H) · "What is the best free alternative to Pimsleur for Japanese?" (WaniKani forum owns it — M-H) · "How do I practice Japanese speaking if I have no one to talk to?" (shadowing guides — M)

## Appendix B — Competitor pages for the comparison/roundup content

JapanesePod101's [learn-in-your-car page](https://www.japanesepod101.com/learn-in-your-car/) and [car blog post](https://www.japanesepod101.com/blog/2016/08/05/3-reasons-why-successful-students-learn-japanese-in-the-car/) · [Speechling's top-5 driving post](https://speechling.com/blog/top-5-ways-to-learn-japanese-while-driving/) · FluentU's [Japanese-in-the-car](https://www.fluentu.com/blog/japanese/learn-japanese-in-the-car/) and [9 hands-free apps](https://www.fluentu.com/blog/learn/learn-a-language-while-driving/) · [Fluent Forever's audio-only-flashcards post](https://blog.fluent-forever.com/audio-only-flashcards/) (the canonical reference for the safety angle) · direct micro-competitors: [audio-flashcards.com](https://audio-flashcards.com/), Silo Interactive's [Audio Flashcards – Japanese](https://apps.apple.com/us/app/audio-flashcards-japanese/id6760276923), [japaneseaudiolessons.com](https://www.japaneseaudiolessons.com/) · [Pimsleur's own driving post](https://www.pimsleur.com/blog/tips-for-learning-new-languages-while-driving/).

## Appendix C — Key sources for the AI-search claims

[Ahrefs best-lists study (26k cited URLs)](https://ahrefs.com/blog/best-lists-research/) · [Ahrefs llms.txt study (137k domains)](https://ahrefs.com/blog/llmstxt-study/) · [Peec 30M-citation study via Search Engine Land](https://searchengineland.com/ai-search-engines-cite-reddit-youtube-and-linkedin-most-study-473138) · [Semrush 2026 AI Visibility Index (126M prompts)](https://www.semrush.com/news/463141-semrush-releases-expanded-2026-ai-visibility-index-analyzing-126-million-ai-search-prompts/) · [Otterly AI Citations Report 2026](https://otterly.ai/blog/the-ai-citations-report-2026/) · [Princeton GEO paper](https://arxiv.org/pdf/2311.09735) · [Quoleady LLMO research (G2/Capterra thresholds)](https://www.quoleady.com/llmo-research/) · [SEJ: ChatGPT retrieves but rarely cites Reddit](https://www.searchenginejournal.com/chatgpt-often-retrieves-but-rarely-cites-reddit-pages-data-shows/572243/) · [Google's official AI-features guidance](https://developers.google.com/search/docs/appearance/ai-features) · [Ahrefs MCP docs](https://docs.ahrefs.com/en/mcp/docs/introduction) · [Semrush MCP KB](https://www.semrush.com/kb/1618-mcp) · [DataForSEO pricing](https://dataforseo.com/pricing) · [Keywords Everywhere plans](https://keywordseverywhere.com/compare-plans.html)
