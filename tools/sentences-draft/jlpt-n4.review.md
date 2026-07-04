# Sentence review — jlpt-n4

Judge scores: N=naturalness L=level T=translation C=cloze-recoverability I=interest (1-5).
Auto-approved: C≥4 N≥4 L≥3 T≥4.
Flip `approved` in jlpt-n4.candidates.json to override either direction, then:
`npm run gen-sentences -- --approve jlpt-n4`

## Flagged for review (192)

| word | sentence (JA) | EN | cloze answer | judge | use | approve? |
| --- | --- | --- | --- | --- | --- | --- |
| to lower | 料理をしている間に、火を下げましょう。 | Let's lower the heat while cooking. | さげましょう | N2 L4 T4 C2 I3 — 火を下げる is unnatural; 火を弱める/小さくする is the natural collocation for stove heat. |  |  |
| to pitch | ここでごみを投げないでください。 | Please don't throw trash here. | なげないで | N3 L5 T5 C2 I2 — 捨てないで (don't discard) is more natural here than 投げないで, hurting cloze recoverability. |  |  |
| mirror | 鏡が汚れていますから、洗います。 | Since the mirror is dirty, I'll wash it. | かがみ | N3 L5 T5 C2 I3 — 洗う is a slightly odd verb for a mirror (拭く is more natural); many nouns could fill the blank. |  |  |
| glove | あなたの手袋はどこにありますか。 | Where are your gloves? | てぶくろ | N3 L5 T5 C2 I2 — Blank could be almost any possession, low cloze constraint. |  |  |
| cooling | 夏は台所の冷房をつけます。 | In summer I turn on the cooling in the kitchen. | れいぼう | N3 L5 T5 C3 I3 — Slightly unusual to specify kitchen cooling; other words like エアコン could also fit the blank. |  |  |
| back (of body) | 医者は背中を見てくださいと言いました。 | The doctor said, "Please show me your back." | せなか | N2 L3 T2 C2 I3 — Japanese uses 見てください (look) but English translates as 'show me your back' (見せてください); mismatch makes the sentence unnatural and inaccurate. |  |  |
| neck | 電車で首を触らないでください。 | Please don't touch my neck on the train. | くび | N2 L5 T4 C2 I3 — Unnatural/awkward scenario—touching someone's neck on a train is an odd and slightly unsettling context; blank could also be filled with other body parts or objects. |  |  |
| beard | 父はひげがあります。 | My father has a beard. | ひげ | N3 L5 T5 C2 I2 — Slightly unnatural phrasing; 'ひげを生やしている' is more common than 'ひげがあります', and many nouns could fill the blank (めがね, 帽子, etc.). |  |  |
| finger | 寒くて指が冷たいと思います。 | It's cold, so I think my fingers are cold. | ゆび | N3 L4 T4 C2 I2 — Using と思います for one's own physical sensation is slightly unnatural; other body parts could also fill the blank. |  |  |
| circumstances | 会議の都合を教えてください。 | Please tell me your schedule for the meeting. | つごう | N3 L4 T3 C3 I3 — Translation 'your schedule' is imprecise; 都合 here means 'circumstances/availability', not schedule; other nouns (時間, 日程) could also fit the blank. |  |  |
| circumstances | 都合が悪くて、レストランの予約を止めました。 | Since it wasn't convenient, I canceled the restaurant reservation. | つごう | N3 L4 T4 C4 I3 — 止めました is a slightly unnatural verb choice for canceling a reservation; キャンセルしました or 取り消しました would be more common. |  |  |
| reservation | コンサートの席を予約しましたか。 | Did you reserve seats for the concert? | よやく | N2 L5 T5 C5 I3 — Reading for コンサート incorrectly written as こんさあと instead of こんさーと. |  |  |
| international | 彼は国際会社で働いています。 | He works at an international company. | こくさい | N2 L4 T4 C3 I2 — 「国際会社」is unnatural; native speakers would say「国際的な会社」or「多国籍企業」. |  |  |
| international | 国際映画は面白いと思います。 | I think international films are interesting. | こくさい | N2 L4 T4 C3 I2 — 「国際映画」is an odd collocation; 外国映画 or 国際映画祭 would be more natural. |  |  |
| for example | 例えば、会議は月曜日にできます。 | For example, the meeting can be held on Monday. | たとえば | N2 L4 T4 C2 I2 — 例えば doesn't fit naturally without preceding context giving a list of options; sentence is odd standalone. |  |  |
| for example | 例えば、テニスは面白いと思います。 | For example, I think tennis is interesting. | たとえば | N2 L4 T4 C2 I2 — No prior context to justify 'for example'; other adverbs like 私は could fit the blank equally well. |  |  |
| for example | 例えば、このレストランはどうですか。 | For example, how about this restaurant? | たとえば | N1 L3 T3 C1 I2 — 例えば makes no sense here as a standalone question about a restaurant; blank is unrecoverable. |  |  |
| child | 子が病気だから、会社に遅れます。 | Because my child is sick, I will be late for work. | こ | N2 L4 T3 C2 I3 — Sounds unnatural without 子供 or うちの子; many nouns (妻, 犬, etc.) could fill the blank, and 'my' in the translation isn't explicit in the Japanese. |  |  |
| (someone else's) child (polite) | お子さんに気をつけてください。 | Please be careful about your child. | おこさん | N3 L5 T3 C2 I3 — Phrasing 'お子さんに気をつけてください' is slightly unnatural; many nouns could fill the blank. |  |  |
| hundred million | その会社は一年に十億円ぐらい売ります。 | That company sells about one billion yen worth a year. | おく | N3 L4 T5 C3 I3 — 「売ります」は「売り上げます」の方が自然だが許容範囲。数詞+億+円のパターンは万・兆などでも文法的に成立するため空所の一意性がやや低い。 |  |  |
| degree | 今日は三十度ほど暑いです。 | Today it's hot, about thirty degrees. | ほど | N3 L3 T4 C2 I2 — くらい could also fill the blank, reducing recoverability; also odd to use 度 and ほど together. |  |  |
| both sides | 両方の宿題が必要です。 | Both homework assignments are necessary. | りょうほう | N3 L5 T4 C2 I2 — unusual pairing of 'both homework assignments' feels forced |  |  |
| both sides | 両方の道を使って会社に行きます。 | I use both roads to get to the office. | りょうほう | N2 L5 T3 C2 I2 — using both roads to commute is logically odd |  |  |
| sun | 窓を開けて、日を入れてください。 | Please open the window and let the sun in. | ひ | N3 L4 T4 C3 I3 — 「日を入れる」はやや不自然で、「日差しを入れる」の方が自然。 |  |  |
| earthquake | 地震だったから、家族に電話しました。 | Because there was an earthquake, I called my family. | じしん | N3 L5 T4 C3 I3 — 地震だったから is slightly unnatural; 地震があったから would be more natural. |  |  |
| to get down | 次の駅で電車を下りてください。 | Please get off the train at the next station. | おりて | N3 L5 T5 C5 I3 — For trains, 降りる is the more conventional kanji; 下りる is understandable but slightly less natural here. |  |  |
| to get down | バスを下りたら、電話をください。 | Please call me when you get off the bus. | おりたら | N3 L4 T5 C5 I3 — For buses, 降りる is more typical than 下りる, though meaning is clear. |  |  |
| heart | 音楽を聞くと心が明るくなります。 | When I listen to music, my heart brightens. | こころ | N4 L5 T3 C3 I3 — 'brightens' is a slightly awkward translation; 気持ち could also fit the blank. |  |  |
| within | 午前の内に仕事を終わりました。 | I finished the work within the morning. | うち | N2 L4 T4 C4 I2 — 仕事を終わりました is grammatically off; 終わる is intransitive, should be 終えました or 仕事が終わりました. |  |  |
| grass | 急いでいたので犬と草の上を走りました。 | Since I was in a hurry, I ran on the grass with my dog. | くさ | N2 L4 T4 C2 I3 — The causal link between hurrying and running with the dog on grass feels illogical; 道 or 庭 could also fit the blank. |  |  |
| cherry-blossom viewing | 公園で花見をしてください。 | Please have cherry-blossom viewing at the park. | はなみ | N3 L5 T4 C2 I2 — Asking someone to 'do' hanami with してください is pragmatically odd; blank could be filled by many activity nouns (掃除, 散歩, etc.). |  |  |
| the other day | この間、初めてカレーを食べたことがあります。 | The other day, I ate curry for the first time. | このあいだ | N2 L4 T3 C2 I3 — この間 (a specific past occasion) clashes with 〜たことがある (general experience), making the sentence semantically odd; also カレー rendered as かれえ instead of the more standard かれー. |  |  |
| to be in time for | 宿題は明日までに間に合いますか。 | Will the homework be done in time by tomorrow? | まにあいます | N3 L3 T4 C3 I3 — 宿題が間に合う is a slightly unusual collocation; more natural would be 終わる/間に合わせる. |  |  |
| to fit | この帽子は学校の規則に合いますか。 | Does this hat fit the school's rules? | あいます | N3 L5 T4 C4 I3 — Slightly unnatural phrasing; 校則に合う would be more idiomatic than 学校の規則に合う. |  |  |
| -- honorific form of 食べる and 飲む -- | 何を召し上がりますか。 | What will you have to eat? | めしあがります | N4 L2 T4 C3 I3 — Honorific form exceeds N4 ceiling; blank could also be filled with plain 食べます/飲みます without more context. |  |  |
| -- honorific form of 食べる and 飲む -- | 先生は毎朝コーヒーを召し上がります。 | The teacher has coffee every morning. | めしあがります | N2 L2 T4 C4 I3 — Reading こうひい is incorrect for コーヒー (should be こーひー), so naturalness capped at 2; honorific grammar exceeds N4 ceiling. |  |  |
| to collect | 旅行の写真を集めましたか。 | Did you gather the travel photos? | あつめました | N3 L5 T4 C3 I3 — '写真を集める' is a bit unnatural; '撮る' would be more typical, so other verbs could fit the blank. |  |  |
| common | もしもし、普通の電車は何時に来ますか。 | Hello, what time does the normal train come? | ふつう | N3 L4 T4 C2 I3 — もしもし opening feels odd paired with asking about train times; many words (次の, 始発の) could fill the blank. |  |  |
| to be empty | 教室が空いていたことがあります。 | There was a time when the classroom was empty. | すいていた | N3 L4 T4 C3 I3 — Slightly unnatural use of ことがある with a stative situation rather than an experience. |  |  |
| most | 私は音楽が最も好きです。 | I like music the most. | もっとも | N3 L5 T5 C2 I3 — 一番 would fit equally well, so blank isn't uniquely recoverable; 最も also sounds slightly formal/written for personal preference. |  |  |
| special | この授業は特別ですか。 | Is this class special? | とくべつ | N3 L5 T4 C2 I2 — Slightly unnatural phrasing; ambiguous blank could be filled by other adjectives like 難しい. |  |  |
| safety | 自転車に乗る時は安全でなければなりません。 | When riding a bicycle, you must be safe. | あんぜん | N3 L4 T3 C3 I3 — English translation is awkward/unnatural phrasing of the Japanese meaning |  |  |
| motorcycle ) | 毎日オートバイで会社へ行きますか。 | Do you go to the office by motorcycle every day? | おうとばい | N2 L5 T5 C2 I3 — Reading should be おーとばい, not おうとばい; also blank could be filled by many vehicle words (train, car, bus). |  |  |
| motorcycle ) | 兄は毎朝オートバイで出かけます。 | My brother goes out by motorcycle every morning. | おうとばい | N2 L5 T5 C2 I3 — Reading should be おーとばい, not おうとばい; also blank could be filled by many vehicle words. |  |  |
| vehicle | 一緒に乗り物に乗りましょう。 | Let's ride the vehicle together. | のりもの | N3 L5 T4 C2 I2 — Slightly odd to say 'let's ride the vehicle' generically; many specific nouns could fit blank. |  |  |
| traffic | 今朝は交通が多くて会社に遅れました。 | There was so much traffic this morning that I was late for work. | こうつう | N2 L4 T4 C3 I3 — 交通が多い is unnatural; natives say 交通量が多い or 交通が混んでいる. |  |  |
| however much one may ~ | お金はいくらてもいいです。 | Any amount of money is fine. | いくらても | N2 L2 T3 C2 I2 — Should be いくらでもいい (idiomatic 'any amount is fine'); いくらても is not a valid construction here since there's no verb between いくら and ても. |  |  |
| however much one may ~ | 説明はいくらてもいいですから、聞いてください。 | Any amount of explanation is fine, so please listen. | いくらても | N2 L2 T3 C2 I2 — Same issue: いくらでもいい is the natural form; いくらても without an intervening verb is ungrammatical. |  |  |
| at last | 料理はやっとできましたか。 | Is the food finally ready? | やっと | N3 L5 T5 C3 I3 — やっと in a question sounds a bit unnatural; もう would be more typical there. |  |  |
| rural | 田舎には電話がありません。 | There is no phone in the countryside. | いなか | N2 L5 T4 C2 I2 — Claim that countryside has no phones feels outdated/unnatural; blank could fit many location words. |  |  |
| exercise | 病気になりましたから、毎日運動しています。 | Since I got sick, I exercise every day. | うんどう | N3 L4 T4 C3 I3 — 病気になりましたから is slightly odd phrasing; 病気になってから would sound more natural. |  |  |
| strength | 子供の時、力を使ったことがあります。 | I have used my strength when I was a child. | ちから | N2 L4 T3 C2 I2 — Unnatural phrasing; '力を使う' in this context is vague and many other nouns could fill the blank. |  |  |
| knowing | あの店員はレストランの名前をご存じです。 | That store clerk knows the name of the restaurant. | ごぞんじ | N2 L3 T4 C4 I2 — ご存じ is honorific and unnatural applied to a store clerk described to a third party; 知っています would be expected. |  |  |
| knowing | 友達はピアノの先生をご存じでした。 | My friend knew the piano teacher. | ごぞんじ | N1 L3 T4 C4 I2 — Using honorific ご存じ for a friend is socially odd; 知っていました would be natural. |  |  |
| seeing | 友達の写真を拝見したいです。 | I would like to see my friend's photo. | はいけん | N3 L3 T4 C4 I2 — Using humble 拝見 for a friend's photo is a bit unnatural since it's typically reserved for someone of higher status. |  |  |
| to bully | 子供の時、動物をいじめたことがあります。 | When I was a child, I have bullied animals before. | いじめた | N4 L4 T3 C4 I3 — English translation is awkward ('have bullied...before'); should read 'I bullied animals when I was a child.' |  |  |
| plans | 明日は忙しい予定です。 | Tomorrow I have a busy schedule planned. | よてい | N2 L4 T3 C3 I3 — 忙しい予定です is awkward; more natural would be 明日は忙しくなる予定です or 明日の予定は忙しいです. |  |  |
| way (of doing something) | この問題の仕方が分かりません。 | I don't understand the way to do this problem. | しかた | N2 L4 T4 C2 I2 — 「問題の仕方」is unnatural; 解き方 would be the natural word here. |  |  |
| thing(s) | 大切な事があるから、会議をします。 | Because there is an important thing, we will have a meeting. | こと | N3 L4 T4 C2 I2 — 用事・話・件 etc. could equally fill the blank, weakening cloze uniqueness; slightly stiff phrasing. |  |  |
| end | 仕事の終わりに、部屋を片付けます。 | At the end of work, I tidy the room. | おわり | N3 L5 T4 C3 I3 — 仕事の終わりに is slightly awkward phrasing; 仕事が終わったら would sound more natural. |  |  |
| to grow cold | お腹が冷えたから、薬を飲みました。 | My stomach got cold, so I took medicine. | ひえた | N4 L4 T3 C4 I4 — Translation 'stomach got cold' is a bit literal but conveys the idiom of stomach upset from cold reasonably well. |  |  |
| to grow cold | この飲み物はよく冷えていますか。 | Is this drink well chilled? | ひえて | N2 L4 T4 C4 I3 — Reading kana has a typo: 飲み物 should be のみもの but is written みみもの, so naturalness capped at 2. |  |  |
| to remain | パーティーの後、料理はまだ残っていますか。 | Is there still food remaining after the party? | のこって | N2 L5 T5 C5 I3 — Reading kana for パーティー is wrong (ぱあてぃい instead of ぱーてぃー), so naturalness capped. |  |  |
| to stand (something) up | 部屋の隅に傘を立てました。 | I stood the umbrella up in the corner of the room. | たてました | N5 L2 T5 C4 I4 — Uses the literal target meaning well; fairly specific collocation. |  |  |
| to increase | 電話で、仕事が増えたと聞きました。 | I heard on the phone that his work had increased. | ふえた | N4 L4 T3 C2 I3 — EN adds 'his' which isn't specified in the Japanese; also many verbs could fit the blank (忙しくなった, 減った, etc.). |  |  |
| to choose | 電話で好きな料理を選びたいです。 | I want to choose my favorite dish over the phone. | えらびたい | N3 L5 T4 C2 I3 — 食べたい is a more natural fit for the blank, making 選びたい hard to guess |  |  |
| (honorific) to be | 土曜日に、先生のお宅においでになる予定です。 | The teacher plans to visit their home on Saturday. | おいでになる | N3 L3 T2 C3 I2 — Logically odd: if 先生 is the honored subject, it's strange for them to be 'visiting' their own home; translation doesn't match this ambiguity clearly. |  |  |
| to change (intransitive) | 毎年、季節が変わります。 | The seasons change every year. | かわります | N3 L5 T5 C4 I2 — 毎年 with 季節が変わる is slightly odd phrasing since seasons change more than once a year |  |  |
| water service | この水道はもう使いません。 | This water service is not used anymore. | すいどう | N2 L4 T3 C1 I2 — Awkward phrasing; blank could be almost any noun (道具, 部屋, etc.), and 'water service' as EN is unnatural. |  |  |
| bell | 授業の前にベルを押さなければなりません。 | You must press the bell before class. | べる | N3 L4 T5 C2 I3 — ボタン(button) would fit equally well in this context, reducing cloze specificity. |  |  |
| overcoat | そのオーバーは暖かいと思います。 | I think that overcoat is warm. | おうばあ | N2 L4 T4 C2 I2 — Reading should be 'おーばー' (katakana long vowel), not 'おうばあ'; also many clothing words could fill the blank. |  |  |
| overcoat | そのオーバーは高いでしょう。 | That overcoat is probably expensive. | おうばあ | N2 L4 T4 C2 I2 — Reading error: 'オーバー' should be 'おーばー', not 'おうばあ'; blank could be filled by many nouns (コート, かばん, etc.). |  |  |
| overcoat | 妹にオーバーを貸してあげました。 | I lent my little sister an overcoat. | おうばあ | N2 L4 T5 C3 I3 — Reading should be 'おーばー' not 'おうばあ'; otherwise decent context narrows it somewhat to a wearable item. |  |  |
| to give | 旅行のお土産を先生にあげますか。 | Are you going to give the travel souvenir to the teacher? | あげます | N3 L5 T5 C3 I3 — Giving to a teacher normally requires さしあげる, so あげる sounds slightly impolite/unnatural here. |  |  |
| to try one's best | 毎日英語を頑張ります。 | I do my best with English every day. | がんばります | N3 L5 T4 C2 I2 — blank could be filled by many verbs like 勉強します or 練習します, reducing recoverability |  |  |
| geography | 面白いですから、地理が好きです。 | Because it's interesting, I like geography. | ちり | N2 L4 T3 C2 I2 — Awkward word order; causal clause should typically follow the reason it explains, and blank could be many nouns (e.g. 数学, 歴史). |  |  |
| geography | 地理は上手じゃありません。 | I'm not good at geography. | ちり | N2 L3 T3 C2 I2 — 上手/下手 is unnatural for a knowledge subject like geography; native speakers would use 苦手/得意, and many other nouns could fill the blank. |  |  |
| grammar | 文法が難しいですから、毎日習います。 | Because the grammar is difficult, I learn it every day. | ぶんぽう | N3 L5 T4 C2 I3 — 習います pairs oddly with 毎日; more natural would be 勉強します, and blank could be many nouns. |  |  |
| metropolitan | 都の人口はとても多いです。 | The metropolis's population is very large. | と | N3 L4 T5 C2 I3 — 都 alone (without 東京) sounds slightly unnatural; 市 or 国 could also fit the blank. |  |  |
| metropolitan | この都に住んでいますか。 | Do you live in this metropolis? | と | N2 L4 T4 C2 I2 — この都 sounds odd; natives would say 東京 or ここ, and 市/町 also fit the blank. |  |  |
| metropolitan | 都の美術館へ行きませんか。 | Shall we go to the metropolitan art museum? | と | N3 L4 T5 C2 I3 — 都立美術館 is more natural than 都の美術館; other words like 市 or 県 could fill the blank. |  |  |
| parking lot | 広い駐車場が欲しいです。 | I want a wide parking lot. | ちゅうしゃじょう | N3 L5 T4 C2 I2 — Unnatural desire statement; blank could fit many nouns like house, room, park. |  |  |
| to decide | 明日は忙しいから、旅行の日を決めます。 | Since tomorrow is busy, I'll decide the day for the trip. | きめます | N3 L5 T4 C3 I3 — causal link between being busy and deciding the trip day is unclear/illogical |  |  |
| -- honorific expression for する -- | 社長はいつも早く仕事をなさいます。 | The president always starts work early. | なさいます | N4 L4 T3 C3 I3 — Translation adds 'starts' which isn't in the original meaning; されます could also fill the blank. |  |  |
| ashamed | 写真を忘れて恥ずかしいです。 | I'm embarrassed because I forgot the photo. | はずかしい | N3 L5 T4 C3 I2 — Forgetting a photo isn't clearly embarrassing, so context is weak and other emotions could fit. |  |  |
| quickly and steadily | 店に客がどんどん来ます。 | Customers keep coming to the shop steadily. | どんどん | N3 L5 T4 C3 I3 — Slightly unnatural phrasing; 来ています or 増えています would sound more natural; だんだん/次々 also plausible fill-ins. |  |  |
| humble expression for 行く and 来る | 明日そこへ参ります。 | I will go there tomorrow. | まいります | N4 L2 T4 C2 I3 — 参る is humble keigo, beyond N4 ceiling; blank could equally be 行きます. |  |  |
| humble expression for 行く and 来る | 今、参りました。 | I have just arrived. | まいりました | N4 L2 T4 C2 I3 — Humble form exceeds N4; blank could be 来ました/着きました等. |  |  |
| straight | 電話が鳴ったら、すっと出ました。 | When the phone rang, I answered right away. | すっと | N4 L4 T3 C3 I3 — すぐに or さっと could also fit the blank. |  |  |
| straight | 友達が来て、すっと部屋に入りました。 | When my friend came, he went straight into the room. | すっと | N4 L4 T3 C3 I3 — まっすぐ could also fit 'went straight into'. |  |  |
| straight | 母はすっと立って台所へ行きました。 | My mother stood up straight and went to the kitchen. | すっと | N4 L4 T2 C3 I3 — すっと立つ means 'stood up quickly/smoothly', not 'stood up straight' (posture) as translated. |  |  |
| firmly | 電話でしっかり話しましょう。 | Let's talk firmly on the phone. | しっかり | N2 L5 T4 C3 I2 — しっかり話す is an unusual collocation here; はっきり or じっくり would sound more natural. |  |  |
| complexity | この料理は複雑です。 | This dish is complex. | ふくざつ | N2 L5 T4 C2 I2 — 料理が複雑 is an unusual collocation; native speakers would more likely say 手が込んでいる or 難しい. |  |  |
| education | 大学で教育を習いました。 | I learned about education at university. | きょういく | N2 L4 T3 C2 I2 — 教育を習いました is unnatural collocation; 学びました/勉強しました would be more natural, and many other subjects could fill the blank. |  |  |
| electric light | 遅いから、電灯をつけました。 | Because it's late, I turned on the light. | でんとう | N3 L5 T5 C4 I3 — Slightly unnatural collocation (電灯 sounds a bit formal/old-fashioned vs 電気), but context of lateness reasonably points to a light. |  |  |
| electric light | 電灯が点きません。 | The light doesn't turn on. | でんとう | N3 L5 T5 C2 I2 — Very generic; 'doesn't turn on' fits many appliances (テレビ, エアコン, パソコン), so the blank isn't uniquely recoverable. |  |  |
| easy to do ~ | この道は分かりやすいです。 | This explanation is easy to understand. | やすい | N4 L5 T2 C3 I3 — EN translation says 'explanation' but Japanese says 道 (road/path), mismatched meaning. |  |  |
| solid | このパンは堅いです。 | This bread is hard. | かたい | N3 L5 T5 C2 I1 — For bread, 硬い is more standard than 堅い; also many adjectives (まずい, 古い, etc.) could fit the blank. |  |  |
| solid | 木の椅子は堅いですね。 | The wooden chair is hard, isn't it. | かたい | N3 L5 T5 C2 I2 — 硬い is more typical kanji for a hard chair; blank could be filled by other adjectives like 古い, 重い. |  |  |
| solid | この肉は堅いから、よく噛んでください。 | This meat is tough, so please chew it well. | かたい | N3 L5 T5 C4 I3 — 硬い is the more common kanji choice for tough meat, but context (よく噛んでください) strongly forces 'hard/tough' meaning. |  |  |
| encyclopedia | 朝、辞書の代わりに辞典を使います。 | In the morning, I use an encyclopedia instead of a dictionary. | じてん | N2 L5 T1 C2 I2 — 辞典 actually means 'dictionary', not 'encyclopedia'; also since 辞書 and 辞典 are near-synonyms the contrast sentence sounds odd and 辞書 could equally fill the blank. |  |  |
| encyclopedia | 旅行の前に、英語の辞典が欲しいです。 | Before the trip, I want an English encyclopedia. | じてん | N4 L5 T1 C2 I2 — 辞典 means 'dictionary' not 'encyclopedia'; 辞書 would fit the blank equally well. |  |  |
| the town of ~ | この町はとても静かです。 | This town is very quiet. | ちょう | N2 L5 T4 C2 I1 — 町 used alone should be read まち, not ちょう; ちょう is only used as a suffix in place names. |  |  |
| the town of ~ | どの町に住んでいますか。 | Which town do you live in? | ちょう | N2 L5 T4 C2 I2 — Same reading issue: standalone 町 should be まち, not ちょう. |  |  |
| the town of ~ | この町を一緒に歩きましょう。 | Let's walk through this town together. | ちょう | N2 L5 T4 C2 I3 — Reading mismatch: 町 alone is まち, ちょう is a suffix reading for place names. |  |  |
| not at all | このカレーは全然辛くなかったです。 | This curry wasn't spicy at all. | ぜんぜん | N2 L5 T5 C3 I3 — Reading kana 'かれえ' is nonstandard for カレー's long vowel (should be かれー), and あまり could also fit the blank |  |  |
| middle | テーブルの真中にお皿を置いてください。 | Please put the plate in the middle of the table. | まんなか | N2 L5 T5 C4 I3 — Reading 'てえぶる' should be 'てーぶる' (long vowel mark), so naturalness capped. |  |  |
| competition | 昨日の競争に負けました。 | I lost yesterday's competition. | きょうそう | N3 L5 T4 C2 I3 — 競争に負ける is less natural than 試合/レースに負ける for a one-time event |  |  |
| uncooked rice | 雨の日には米の値段が上がると思います。 | I think the price of rice goes up on rainy days. | こめ | N3 L4 T5 C2 I3 — Illogical claim (rain doesn't typically affect rice prices) and blank could be filled by many other goods. |  |  |
| hot water | 寒い日はお風呂の湯が好きです。 | I like the hot water of the bath on cold days. | ゆ | N3 L5 T5 C3 I3 — Sounds slightly odd without お湯; still understandable. |  |  |
| hot water | 熱い湯で手を洗いたいです。 | I want to wash my hands with hot water. | ゆ | N3 L5 T5 C4 I3 — More natural as お湯 in casual speech, but context (熱い) makes 湯 clear. |  |  |
| hot water | この湯は熱いですか。 | Is this hot water hot? | ゆ | N2 L5 T4 C2 I2 — Redundant question (asking if hot water is hot) and unnatural without お; low cloze specificity. |  |  |
| piano | この会社にはピアノがありません。 | There is no piano in this company. | ぴあの | N3 L5 T5 C2 I2 — Odd context (piano in a company) reduces naturalness and interest; blank could be many nouns. |  |  |
| soft | このパンはとてもソフトです。 | This bread is very soft. | そふと | N3 L5 T5 C2 I2 — やわらかい is more natural for bread than ソフト; many adjectives could fill the blank. |  |  |
| soft | 友達が持ってきたパンはソフトでした。 | The bread my friend brought was soft. | そふと | N3 L5 T5 C2 I2 — Same issue as bread example; low cloze recoverability since many adjectives fit. |  |  |
| to rejoice | プレゼントをもらって、彼女は喜びます。 | She will be happy to receive the present. | よろこびます | N3 L4 T3 C3 I3 — Tense mismatch: もらって...喜びます sounds odd, EN 'will be happy' doesn't match present/habitual form. |  |  |
| hard | 冬は寒くて厳しいと思います。 | I think winter is harsh and cold. | きびしい | N4 L4 T3 C3 I4 — EN order reversed (harsh and cold vs cold and harsh) causing slight mismatch. |  |  |
| preparation | 明日までに宿題の用意をしなければなりません。 | I have to get my homework ready by tomorrow. | ようい | N2 L5 T4 C3 I3 — 宿題の用意 is an unnatural collocation; typically one says 宿題をする, not 用意する for homework |  |  |
| congratulation | 電話で誕生日のお祝いを言いました。 | I gave birthday congratulations over the phone. | おいわい | N3 L4 T4 C3 I3 — お祝いを言う is a slightly unnatural collocation; お祝いを伝える or おめでとうと言う would be more natural. |  |  |
| congratulation | パーティーのお祝いに一緒に来ませんか。 | Won't you come together to the celebration party? | おいわい | N2 L4 T2 C2 I2 — Word order is unnatural; should be お祝いのパーティーに, and the English doesn't match the awkward structure. |  |  |
| it should be so | 先生はもう来るはずです。 | The teacher should be coming soon. | はず | N3 L3 T3 C3 I3 — もう + 来る (non-past) is slightly awkward; もう来ているはず or もうすぐ来るはず would be more natural, and the EN 'coming soon' doesn't match もう (already). |  |  |
| you (informal for men) | 君、明日電話してください。 | You, please call me tomorrow. | きみ | N3 L4 T4 C3 I3 — Slightly awkward comma usage; translation is a bit loose ('call me' vs '電話してください'). |  |  |
| to touch | 熱いストーブに触ってはいけません。 | You must not touch the hot heater. | さわって | N2 L5 T5 C4 I3 — Reading for ストーブ should be すとーぶ (long vowel), not すとうぶ. |  |  |
| to wrap | 寒いので布団で体を包みます。 | Since it's cold, I wrap my body in the futon. | つつみます | N3 L5 T4 C4 I4 — Slightly unnatural phrasing; more common would be 布団にくるまる, but context strongly suggests 包む. |  |  |
| to inquire | 先生に質問を尋ねてもいいですか。 | May I ask the teacher a question? | たずねて | N2 L5 T4 C2 I2 — 「質問を尋ねる」is redundant/unnatural phrasing; 質問する is standard, so the blank could also be filled with する, reducing recoverability. |  |  |
| to pass away | 彼女はまだ亡くなっていません。 | She has not passed away yet. | なくなって | N3 L4 T4 C2 I2 — Sentence feels artificial/awkward to say about a living person, and many other verbs could fill the blank. |  |  |
| generally | 毎朝大抵何時に起きますか。 | What time do you usually get up every morning? | たいてい | N2 L5 T4 C3 I2 — 毎朝 and 大抵 together feels redundant/unnatural |  |  |
| surface | 建物の表で待っています。 | I'm waiting in front of the building. | おもて | N3 L5 T4 C2 I2 — 表 for 'front of a building' is less idiomatic than 前 or 正面, and many other words could fill the blank. |  |  |
| distinction | 私と彼女の答えは別です。 | My answer and her answer are different. | べつ | N3 L5 T4 C2 I2 — 同じ or 違います could also fit, so blank isn't uniquely 別. |  |  |
| to pay | 電車の切符はいくら払いますか。 | How much do you pay for the train ticket? | はらいます | N3 L5 T4 C4 I3 — Slightly unnatural phrasing; more common would be 切符代はいくらですか, but the blank is still fairly recoverable. |  |  |
| to drop | 電車の中で財布を落しました。 | I dropped my wallet on the train. | おとしました | N3 L5 T5 C3 I3 — Uses non-standard okurigana 落す instead of the common 落とす; other verbs like 忘れる/なくす could also fit the blank. |  |  |
| to drop | 階段で荷物を落しませんでしたか。 | Didn't you drop your luggage on the stairs? | おとしませんでした | N3 L4 T5 C3 I3 — Same okurigana issue (落す vs 落とす); blank could plausibly be 忘れる or なくす too. |  |  |
| to drop | 忙しかったから、傘を落しました。 | Because I was busy, I dropped my umbrella. | おとしました | N2 L4 T4 C3 I3 — Causal link between being busy and dropping an umbrella feels forced/unnatural; same okurigana issue. |  |  |
| (manufacturing) industry | この町には工業の会社が多いです。 | There are many industrial companies in this town. | こうぎょう | N3 L5 T5 C2 I2 — '工業の会社' is slightly awkward; more natural would be '工業会社' or '製造業の会社'. |  |  |
| nurse | 病院で看護婦が働いています。 | A nurse is working at the hospital. | かんごふ | N3 L5 T5 C2 I2 — 看護婦 is now considered old-fashioned; modern term is 看護師. Blank could equally be doctor/patient/etc., so not uniquely recoverable. |  |  |
| nurse | あなたのお姉さんは看護婦ですか。 | Is your older sister a nurse? | かんごふ | N3 L5 T5 C2 I2 — 看護婦 is dated (看護師 is current); many other professions could fill the blank, so weak cloze recoverability. |  |  |
| nurse | 看護婦になりたいです。 | I want to become a nurse. | かんごふ | N3 L5 T5 C2 I2 — 看護婦 is an outdated term; sentence structure allows any profession noun, so the blank isn't uniquely determined. |  |  |
| a gift | 友達に贈り物をあげることができます。 | I can give a gift to my friend. | おくりもの | N3 L5 T4 C2 I2 — Generic sentence; many nouns could fill the blank |  |  |
| glass | このコップはガラスではありません。 | This cup is not glass. | がらす | N3 L4 T4 C2 I2 — Negative statement about a cup's material is unnatural and doesn't uniquely cue 'glass'; many materials could fit. |  |  |
| gas | 会社の台所でガスが危ないと思います。 | I think the gas is dangerous in the office kitchen. | がす | N2 L4 T4 C2 I2 — Sentence sounds stilted/unnatural; blank could be filled by 火, 電気, 水 etc., weak recoverability. |  |  |
| humble form of 行く | 来週、客の会社に伺いたいです。 | I want to visit the customer's company next week. | うかがいたい | N3 L4 T5 C4 I3 — 客の会社 sounds slightly blunt; お客様の会社 would be more natural. |  |  |
| strange | 昨日の天気はおかしかったです。 | Yesterday's weather was strange. | おかしかった | N3 L5 T5 C3 I3 — slightly unusual phrasing, more common with 天気が |  |  |
| (honorific) good | ここでギターを弾いてもよろしいですか。 | May I play the guitar here? | よろしい | N2 L4 T5 C5 I4 — Reading kana for ギター is wrong (ぎたあ instead of ぎたー), so naturalness capped. |  |  |
| terrific | 昨日はすごい雨でした。 | Yesterday there was terrific rain. | すごい | N4 L5 T3 C3 I3 — すごい雨 means 'heavy/intense rain', not positively 'terrific'; English translation sounds odd. |  |  |
| invitation | 今週の土曜日、友達を招待しませんか。 | Shall we invite friends this Saturday? | しょうたい | N4 L5 T3 C4 I3 — EN slightly shifts nuance from 'won't you invite friends' to 'shall we invite friends'. |  |  |
| telegram | パーティーに電報を送りました。 | I sent a telegram to the party. | でんぽう | N2 L4 T3 C2 I2 — Sending a telegram 'to a party' is unnatural phrasing; unclear context, many nouns could fill blank. |  |  |
| as expected | やはり今週は買い物に行きましょう。 | As expected, let's go shopping this week. | やはり | N2 L4 T3 C2 I2 — やはり pairs oddly with a volitional suggestion; feels unnatural and hard to uniquely recover. |  |  |
| once | 一度うちへ遊びに来ませんか。 | Won't you come to my house once? | いちど | N4 L4 T3 C3 I3 — English translation slightly awkward; 'once' idiom not fully captured. |  |  |
| once | 朝、薬を一度忘れたから、頭が痛くなりました。 | Since I forgot my medicine once this morning, my head started to hurt. | いちど | N3 L4 T4 C3 I3 — Causal link between forgetting medicine once and headache feels a bit forced. |  |  |
| ~ age | 彼女は三十代の人です。 | She is a person in her thirties. | だい | N3 L4 T4 C2 I2 — 歳 also fits the blank grammatically, reducing recoverability; also 人 makes it slightly stilted. |  |  |
| ~ age | 課長は何代ですか。 | What decade of life is the section chief in? | だい | N2 L3 T2 C2 I2 — 何代 more naturally means 'which generation', not 'what decade of age'; ambiguous phrasing and mistranslation. |  |  |
| ~ age | 四十代になったから、体に気をつけています。 | Since I turned forty, I'm being careful about my health. | だい | N4 L4 T3 C3 I3 — 歳 could also fill the blank; translation 'turned forty' fits 歳 better than 代 (which implies the 40s range). |  |  |
| small bird | 小鳥がかわいいから毎日見ます。 | I look at it every day because the small bird is cute. | ことり | N3 L4 T4 C2 I2 — Sentence flow is a bit awkward and any cute animal could fill the blank. |  |  |
| I see | なるほど、明日は雨ですね。 | I see, it will rain tomorrow. | なるほど | N3 L4 T4 C2 I2 — なるほど used oddly here since weather isn't something one 'realizes' via explanation; other words could fit blank |  |  |
| honorable ~ | 受付でご住所を書きました。 | I wrote my address at the reception desk. | ご | N2 L5 T3 C3 I3 — Using ご with one's own address is unnatural; ご is normally reserved for the listener's/other's belongings, not the speaker's own. |  |  |
| arrangement | レストランの約束は七時です。 | Our restaurant reservation is at seven. | やくそく | N2 L5 T2 C2 I2 — 約束 is unnatural here; a restaurant reservation would normally be 予約, not 約束. |  |  |
| age | この時代は電話も便利です。 | In this era, phones are convenient too. | じだい | N3 L5 T4 C2 I2 — Blank could be filled by many nouns (国, 場所, etc.); phrasing slightly awkward. |  |  |
| a little while ago | さっき朝御飯を食べましたか。 | Did you eat breakfast a little while ago? | さっき | N3 L5 T4 C2 I3 — Combining さっき with 朝御飯 is a bit odd; many time expressions (今朝, もう) could fill the blank. |  |  |
| to ask | 先生に質問をうかがいたいです。 | I would like to humbly ask the teacher a question. | うかがい | N4 L2 T4 C2 I3 — うかがう is humble keigo, above N4 ceiling; other verbs (聞く/尋ねる) could fill the blank equally well. |  |  |
| to ask | 駅への道をうかがってもいいですか。 | May I ask the way to the station? | うかがって | N4 L2 T4 C2 I3 — Keigo verb exceeds N4 level; blank could be filled by 聞いて/尋ねて just as naturally. |  |  |
| to ask | 店員に値段をうかがいました。 | I asked the clerk the price. | うかがい | N4 L2 T4 C2 I2 — Keigo verb beyond N4; context (asking a clerk) doesn't uniquely require humble form, so 聞き/尋ね also fit. |  |  |
| to be (polite) | 会議室はこちらにございます。 | The meeting room is here. | ございます | N5 L2 T5 C3 I3 — ございます is above N4 ceiling; あります could also fill the blank without more context |  |  |
| to be (polite) | 店に今、その品物はございません。 | The store doesn't have that item right now. | ございません | N5 L2 T5 C3 I3 — ございます is above N4 ceiling; ありません also plausible in blank |  |  |
| to be (polite) | 出口はどちらにございますか。 | Where is the exit, please? | ございますか | N5 L2 T5 C3 I3 — ございます is above N4 ceiling; あります also plausible in blank |  |  |
| (humble)to say | 社長にお礼を申し上げます。 | I would like to humbly thank the president. | もうしあげ | N5 L2 T5 C3 I3 — 申し上げる is beyond N4 (advanced keigo); 言い could also fit the blank, reducing recoverability. |  |  |
| (humble)to say | 医者にお礼を申し上げました。 | I humbly thanked the doctor. | もうしあげ | N5 L2 T5 C3 I2 — Same grammar level issue; slightly generic template sentence. |  |  |
| (humble)to say | バスの中で先生に申し上げたいことがあります。 | There is something I would like to humbly tell the teacher on the bus. | もうしあげ | N2 L2 T4 C3 I2 — Combining casual 'on the bus' setting with humble keigo toward a teacher feels unnatural/inconsistent register. |  |  |
| New Year | 正月に家族と会います。 | I meet my family at New Year. | しょうがつ | N3 L5 T4 C3 I3 — 会います with family is slightly unnatural; 過ごします/集まります would be more natural. |  |  |
| to pray | 神社で家族の元気を祈りました。 | I prayed for my family's health at the shrine. | いのりました | N3 L4 T4 C4 I3 — 「元気を祈る」is a bit unnatural; 「健康を祈る」or 「元気であるように祈る」would sound more native, and 願いました could also fit the blank. |  |  |
| to raise (transitive) | 彼女は犬を育てています。 | She is raising a dog. | そだてて | N2 L5 T4 C2 I2 — 犬を育てる is unnatural; 飼う is the standard verb for pets, so learners could reasonably answer differently. |  |  |
| to gain weight | 毎日食べたから、太りました。 | Since I ate every day, I gained weight. | ふとりました | N3 L3 T5 C3 I2 — vague context (no object for 食べた) makes it less natural and less uniquely tied to 太る |  |  |
| encyclopedia | 図書館で英語辞典を借りました。 | I borrowed an English encyclopedia at the library. | じてん | N4 L5 T1 C2 I2 — 辞典 means 'dictionary' not 'encyclopedia'; 辞書 could also fill the blank. |  |  |
| medical science | 兄は医学を習っています。 | My older brother is studying medical science. | いがく | N3 L5 T5 C2 I3 — 習う is a bit unusual for 医学; typically 勉強する/学ぶ is used, and many nouns could fill the blank. |  |  |
| however much one may ~ | いくらても分かりません。 | No matter how much I try, I don't understand. | いくらても | N2 L2 T3 C3 I2 — Missing the verb between いくら and ても (e.g. いくら考えても); as written the construction is incomplete/unnatural. |  |  |
| flavor | 母の料理はいつも味がいいです。 | My mother's cooking always has good flavor. | あじ | N3 L5 T4 C2 I2 — More natural would be 料理がおいしい; 味がいい here is less idiomatic and blank is guessable with many words. |  |  |
| hundred million | あの会社は一億円を持っています。 | That company has one hundred million yen. | おく | N3 L4 T5 C3 I2 — 文自体は自然だが内容が単調でテンプレート的。空所は万・千などでも成立し得るため一意性がやや低い。 |  |  |
| hundred million | この店は一億円かかりますから、買いません。 | This shop costs a hundred million yen, so I won't buy it. | おく | N2 L4 T4 C3 I3 — 「店がかかる」という表現は意味的に不自然（店自体に金額がかかるのは変）。空所は万・兆などでも文法的に成立する。 |  |  |
| -- extra-modest expression for 言う -- | 彼は明日休むと申しました。 | He humbly said he would be absent tomorrow. | もうしました | N2 L3 T2 C2 I2 — 申す is a humble form for one's own actions, not appropriate to describe a third party's statement; unnatural usage. |  |  |
| -- extra-modest expression for 言う -- | お名前を申してください。 | Please state your name. | もうして | N1 L3 T1 C2 I2 — Using 申す to ask someone else to state their name is incorrect; should be おっしゃって (respectful), not humble 申す. |  |  |
| society | 学校で社会を習いました。 | I studied society at school. | しゃかい | N4 L5 T3 C2 I3 — '社会を習う' refers to 'social studies' as a subject, but translation as 'society' is misleading; blank could be many subjects. |  |  |
| double | 去年より今年は雪が倍降りました。 | This year it snowed twice as much as last year. | ばい | N3 L4 T4 C2 I3 — 雪が倍降りました is a bit awkward; more natural would be 雪の量が倍になりました. |  |  |
| to become dirty | 雨で靴下が汚れました。 | My socks got dirty in the rain. | よごれました | N3 L5 T4 C2 I3 — Rain more naturally makes things wet (濡れる) than dirty, so 汚れる isn't the clearly forced answer here. |  |  |
| culture | 旅行で外国の文化を習いました。 | I learned about foreign culture while traveling. | ぶんか | N3 L4 T4 C2 I3 — 習う is an odd verb choice for 'culture'; 学ぶ/知る would sound more natural, and several other nouns could fill the blank. |  |  |
| culture | 文化のことをもっと習いたいです。 | I want to learn more about culture. | ぶんか | N3 L4 T4 C2 I2 — Generic template sentence; many nouns could fit the blank besides 文化. |  |  |
| ~ ceremony | 来月、卒業の式に行きます。 | Next month, I will go to the graduation ceremony. | しき | N2 L4 T4 C4 I3 — 卒業の式 is unnatural; native speakers say 卒業式 as one word. |  |  |
| harbor | 港は遠いから、タクシーで行きます。 | Since the harbor is far, I'll go by taxi. | みなと | N2 L4 T4 C2 I3 — Reading kana for タクシー is wrong (たくしい should be たくしー), and the blank could be filled by many other places, not just harbor. |  |  |
| -- honorific form of 食べる and 飲む -- | どうぞ召し上がってください。 | Please help yourself and eat. | めしあがって | N5 L2 T4 C4 I3 — Honorific form exceeds N4 ceiling, but sentence is natural and context (どうぞ...ください) strongly suggests the honorific verb. |  |  |
| motorcycle ) | 兄はオートバイを持っています。 | My older brother has a motorcycle. | おうとばい | N2 L5 T5 C2 I3 — Reading should be おーとばい, not おうとばい; also 'を持っています' fits many nouns (car, bike, etc.), reducing cloze uniqueness. |  |  |
| to hit | 毎朝、ワープロで手紙を打ちます。 | Every morning I type a letter on the word processor. | うちます | N2 L4 T5 C4 I4 — Reading kana wrong: ワープロ should be わーぷろ, not わあぷろ. |  |  |
| humble expression for 行く and 来る | すぐに参ります。 | I will come right away. | まいります | N4 L2 T4 C2 I3 — Humble form exceeds N4; blank could be 行きます/来ます等. |  |  |
| Mr. | 客様は今、会議室にいらっしゃいます。 | The customer is in the meeting room now. | さま | N1 L2 T3 C3 I2 — 客様 is ungrammatical; should be お客様 (missing the honorific prefix お), making the sentence unnatural despite correct reading. |  |  |
| -- extra-modest expression for いる -- | 明日は会社におるつもりです。 | I plan to be at the office tomorrow. | おる | N3 L2 T4 C2 I2 — おる here isn't clearly humble (no keigo conjugation), reads more like casual/dialectal いる, so いる could equally fill the blank, and grammar level exceeds N4 ceiling for this specialized word. |  |  |

## Needs manual authoring (28 words with no shippable sentence)

- n4-edabe7e0 straight (すっと)
- n4-d12ee07b to ask (うかがう)
- n4-8c5aedef motorcycle ) (おうとばい)
- n4-107cecbf to be (polite) (ございます)
- n4-c9f6f9d6 counter for houses (けん)
- n4-f184339b (humble)to say (もうしあげる)
- n4-b4baefe7 however much one may ~ (いくらても)
- n4-6d7f3b80 quarrel (けんかする)
- n4-997428d8 encyclopedia (じてん)
- n4-119968bd injury (けがする)
- n4-74be5dfb overcoat (おうばあ)
- n4-3b72e538 -- extra-modest expression for いる -- (おる)
- n4-ce0d41e6 check (ちぇっくする)
- n4-e89ec0dc for example (たとえば)
- n4-d41f2060 to be surprised (びっくりする)
- n4-5bbe91f5 metropolitan (と)
- n4-a7ecfd85 solid (かたい)
- n4-65e38fb4 Mr. (さま)
- n4-3b10f121 to descend (さがる)
- n4-b8815b89 ~ age (だい)
- n4-ab315b28 -- honorific form of 食べる and 飲む -- (めしあがる)
- n4-b8ef004e hundred million (おく)
- n4-4a7c492e to drop (おとす)
- n4-cfbf9fa6 Mr. (junior) ~ (くん)
- n4-d33a1c42 humble expression for 行く and 来る (まいる)
- n4-30e875c9 the town of ~ (ちょう)
- n4-f9e3cb3d nurse (かんごふ)
- n4-8649b7a7 hot water (ゆ)

## Auto-approved (1603) — spot-check only

| word | sentence (JA) | EN | cloze answer | judge | use | approve? |
| --- | --- | --- | --- | --- | --- | --- |
| to become dirty | 料理をしたから、手が汚れました。 | My hands got dirty because I cooked. | よごれました | N5 L5 T5 C3 I3 — 手が汚れる could also plausibly be 濡れる or 汚くなる, slightly reducing uniqueness. | teach only | yes |
| to become dirty | 子供の服はすぐに汚れます。 | Children's clothes get dirty quickly. | よごれます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to win | 次の試合に勝ちましょう。 | Let's win the next match. | かちましょう | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other verbs like 出ましょう or 頑張りましょう. | teach only | yes |
| to win | 頑張ったから、試合に勝ちました。 | I won the match because I tried hard. | かちました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to win | 弟はあまり試合に勝ちません。 | My little brother doesn't win matches very often. | かちません | N5 L5 T5 C3 I3 — Context allows other verbs such as 出ません or 参加しません, reducing forced uniqueness. | teach only | yes |
| to lower | 声が大きいから、少し下げてください。 | Your voice is loud, so please lower it a little. | さげて | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to lower | 友達が来ても、テレビの音を下げません。 | Even if a friend comes, I won't lower the TV volume. | さげません | N4 L4 T4 C2 I3 — Many verbs (消しません, 大きくしません, 抑えません) could fill the blank, reducing recoverability. | teach only | yes |
| to part from | 駅で友達と別れました。 | I parted from my friend at the station. | わかれました | N5 L5 T5 C3 I2 — Blank could plausibly be filled by other verbs like 会いました or 待ちました. | teach only | yes |
| to part from | 彼と別れてから、一人で生活しています。 | Since I broke up with him, I've been living alone. | わかれて | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to part from | 電話で彼女とは別れません。 | I won't break up with my girlfriend over the phone. | わかれません | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to gather | 明日、公園に集まりましょう。 | Let's gather at the park tomorrow. | あつまりましょう | N5 L5 T5 C3 I3 — 来ましょう/集まりましょう both plausible, slightly ambiguous blank | teach only | yes |
| to gather | 誕生日だから、家族が集まりました。 | Since it was a birthday, the family gathered. | あつまりました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to gather | 雨が降ったので、あまり人が集まりませんでした。 | Since it rained, not many people gathered. | あつまりませんでした | N5 L5 T5 C3 I4 — 来ませんでした could also fit the blank | teach only | yes |
| living | 忙しいですから、いい生活ができません。 | Because I'm busy, I can't have a good life. | せいかつ | N4 L4 T5 C3 I3 | teach only | yes |
| to step on | 会社の廊下で人の足を踏みました。 | I stepped on someone's foot in the company hallway. | ふみました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to step on | 公園で花を踏まないでください。 | Please don't step on the flowers in the park. | ふまないで | N5 L5 T5 C3 I4 — 触らないで or 折らないで could also fit the blank, reducing recoverability slightly | teach only | yes |
| to step on | 雪を踏むと、音がします。 | When you step on snow, it makes a sound. | ふむ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| -- honorific expression for いく | 部長は今、会議室にいらっしゃいます。 | The department head is in the meeting room now. | いらっしゃいます | N5 L3 T5 C4 I3 — Uses いらっしゃる as honorific for いる (to be), not いく as defined for the target word. | cloze+teach | yes |
| -- honorific expression for いく | 昨日、社長もレストランにいらっしゃいました。 | Yesterday, the company president also came to the restaurant. | いらっしゃいました | N5 L4 T5 C5 I4 | cloze+teach | yes |
| -- honorific expression for いく | 明日のパーティーにいらっしゃいますか。 | Will you be coming to tomorrow's party? | いらっしゃいます | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to pass | このバスは会社の前を通ります。 | This bus passes in front of the company. | とおります | N5 L5 T5 C3 I2 — 走ります or 通ります could both fit context, slightly reducing uniqueness. | teach only | yes |
| to pass | 駅まで、この道を通ってください。 | Please go through this road to the station. | とおって | N5 L5 T4 C4 I3 — Translation 'go through' is fine but 'pass' would be more literal; still clear from context that 通って is needed. | cloze+teach | yes |
| to shake | 地震で家が揺れました。 | The house shook because of the earthquake. | ゆれました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to shake | 電車の中で揺れるので、気をつけてください。 | Please be careful because it shakes inside the train. | ゆれる | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to stop by | 仕事の後で、喫茶店に寄ってもいいですか。 | May I stop by the coffee shop after work? | よって | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to escape | 猫が犬から逃げました。 | The cat ran away from the dog. | にげました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to escape | 火事のとき、外へ逃げてください。 | Please escape outside in case of fire. | にげて | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to escape | 泥棒はどこへ逃げましたか。 | Where did the thief escape to? | にげました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to pitch | 石を投げると、危ないです。 | If you throw stones, it's dangerous. | なげる | N4 L4 T5 C4 I3 | cloze+teach | yes |
| mirror | 母は鏡の前で髪を直します。 | My mother fixes her hair in front of the mirror. | かがみ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| mirror | 鏡はどこにありますか。 | Where is the mirror? | かがみ | N5 L5 T5 C1 I1 — Generic template sentence; almost any noun could fit the blank. | teach only | yes |
| word processor | 父はワープロで手紙を書きます。 | My father writes letters with a word processor. | わあぷろ | N5 L5 T5 C3 I3 | teach only | yes |
| word processor | ワープロを使ったことがありますか。 | Have you ever used a word processor? | わあぷろ | N4 L5 T5 C2 I2 — Generic sentence; many objects could fill the blank. | teach only | yes |
| word processor | このワープロは新しくないです。 | This word processor isn't new. | わあぷろ | N4 L5 T5 C2 I2 — Generic template; blank could be many nouns. | teach only | yes |
| glove | 冬は手袋をします。 | I wear gloves in winter. | てぶくろ | N4 L5 T5 C3 I2 — Could be filled with other winter items like マフラー or コート. | teach only | yes |
| glove | 寒いですから、手袋をください。 | It's cold, so please give me gloves. | てぶくろ | N4 L5 T5 C3 I3 — Context suggests cold-weather item but not uniquely gloves. | teach only | yes |
| cooling | 暑いですから、冷房をつけましょう。 | It's hot, so let's turn on the cooling. | れいぼう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| cooling | この部屋には冷房がありません。 | This room doesn't have cooling. | れいぼう | N5 L5 T5 C4 I3 — Context strongly implies cooling, though エアコン could also fit. | cloze+teach | yes |
| computer | パソコンで手紙を書きます。 | I write letters on the computer. | ぱそこん | N5 L5 T5 C3 I3 — Many devices could fill the blank (pen, phone, etc.), reducing uniqueness. | teach only | yes |
| computer | パソコンで漢字が書けますか。 | Can you write kanji on a computer? | ぱそこん | N5 L5 T5 C3 I3 — Other devices like smartphone could also fit the blank. | teach only | yes |
| computer | パソコンが壊れたら、困ります。 | If the computer breaks, I'll be in trouble. | ぱそこん | N5 L5 T5 C2 I3 — Any breakable object (car, phone, etc.) could fill the blank, making it less uniquely recoverable. | teach only | yes |
| kimono | 友達は着物を着ています。 | My friend is wearing a kimono. | きもの | N5 L5 T5 C2 I2 — Blank could be filled by many clothing nouns (シャツ, コート, etc.), not uniquely 着物. | teach only | yes |
| kimono | 着物を着たことがありますか。 | Have you ever worn a kimono? | きもの | N5 L5 T5 C2 I3 — Question form is more engaging, but blank still fits many clothing words. | teach only | yes |
| a toy | 子供はおもちゃで遊んでいます。 | The child is playing with a toy. | おもちゃ | N5 L5 T5 C3 I3 | teach only | yes |
| a toy | このおもちゃは高くないです。 | This toy isn't expensive. | おもちゃ | N5 L5 T5 C2 I2 — Blank could be filled by many nouns, low cloze uniqueness. | teach only | yes |
| a toy | 新しいおもちゃを買いましょうか。 | Shall we buy a new toy? | おもちゃ | N5 L5 T5 C2 I3 — Blank could be many nouns, not strongly forced. | teach only | yes |
| closet | 布団は押し入れに入れます。 | I put the futon in the closet. | おしいれ | N5 L5 T5 C3 I3 — Blank could plausibly be closet, box, drawer, etc. | teach only | yes |
| closet | 押し入れに何がありますか。 | What's in the closet? | おしいれ | N5 L5 T5 C2 I2 — Very generic; many nouns fit the blank equally well. | teach only | yes |
| closet | 押し入れを片付けなければなりません。 | I have to tidy up the closet. | おしいれ | N5 L4 T5 C3 I3 — Blank could be closet, room, desk, etc., reducing recoverability. | teach only | yes |
| bitter | このコーヒーは苦いです。 | This coffee is bitter. | にがい | N5 L5 T5 C2 I2 — Generic template; many adjectives could fill blank (熱い, まずい, etc.). | teach only | yes |
| bitter | 子供の時、その薬はとても苦かったです。 | When I was a child, that medicine was very bitter. | にがかった | N5 L4 T5 C3 I3 — Medicine context helps but other adjectives (まずい, 強い) could also fit. | teach only | yes |
| bitter | 苦くても、薬を飲まなければなりません。 | Even if it's bitter, I have to take the medicine. | にがくても | N5 L4 T5 C4 I4 — Context of taking medicine despite taste strongly suggests 'bitter', good cloze constraint. | cloze+teach | yes |
| sandwich | サンドイッチを作ったことがあります。 | I have made a sandwich before. | さんどいっち | N5 L4 T5 C2 I3 — Many nouns could fill the blank grammatically. | teach only | yes |
| sandwich | 昼御飯にサンドイッチを食べました。 | I ate a sandwich for lunch. | さんどいっち | N5 L5 T5 C2 I3 — Lunch context doesn't uniquely force 'sandwich'. | teach only | yes |
| sandwich | サンドイッチを一つください。 | Please give me one sandwich. | さんどいっち | N4 L5 T5 C1 I2 — Very generic 'please give me one ___' template fits countless nouns. | teach only | yes |
| grapes | ぶどうは秋の果物です。 | Grapes are an autumn fruit. | ぶどう | N5 L5 T5 C2 I3 — Many fruits are autumn fruits, so the blank isn't uniquely forced to grapes. | teach only | yes |
| grapes | 昨日店でぶどうを買いました。 | I bought grapes at the store yesterday. | ぶどう | N5 L5 T5 C1 I2 — Generic template sentence; almost any noun could fill the blank. | teach only | yes |
| grapes | ぶどうを食べたことがありますか。 | Have you ever eaten grapes? | ぶどう | N5 L5 T5 C1 I3 — Context doesn't uniquely determine 'grapes'; any food noun fits. | teach only | yes |
| salad | サラダを食べてください。 | Please eat the salad. | さらだ | N4 L5 T5 C2 I2 — Blank could be any food item, not uniquely salad. | teach only | yes |
| salad | レストランでサラダを頼みました。 | I ordered a salad at the restaurant. | さらだ | N5 L5 T5 C2 I3 — Could be any menu item ordered, not distinctly salad. | teach only | yes |
| steak | レストランでステーキを食べました。 | I ate steak at the restaurant. | すてえき | N5 L5 T5 C2 I2 — Any food noun could fill the blank; too generic. | teach only | yes |
| steak | ステーキを焼いてください。 | Please grill the steak. | すてえき | N5 L5 T5 C3 I3 — 焼く narrows options to grillable foods like meat/fish, but still not unique to steak. | teach only | yes |
| steak | 誕生日にステーキが食べたいです。 | I want to eat steak on my birthday. | すてえき | N5 L5 T5 C2 I3 — Birthday food context is broad; many dishes (cake, sushi) could fit equally well. | teach only | yes |
| foodstuff | 食料品はあのビルの一階で売っています。 | Foodstuffs are sold on the first floor of that building. | しょくりょうひん | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (服, 本, etc.), reducing recoverability. | teach only | yes |
| foodstuff | 食料品を買わなければなりません。 | I have to buy foodstuffs. | しょくりょうひん | N5 L5 T5 C1 I2 — Very generic template sentence; blank could be almost any noun. | teach only | yes |
| foodstuff | 食料品を冷蔵庫に入れてください。 | Please put the foodstuffs in the fridge. | しょくりょうひん | N5 L5 T5 C2 I3 — Context (put in fridge) narrows somewhat but still many food-related nouns could fit. | teach only | yes |
| souvenir | 旅行のお土産を買いました。 | I bought a souvenir from the trip. | おみやげ | N5 L5 T5 C3 I3 | teach only | yes |
| souvenir | お土産を友達に渡してください。 | Please give the souvenir to your friend. | おみやげ | N5 L5 T5 C2 I3 — blank could be filled by many gift-like nouns | teach only | yes |
| souvenir | これはあの国のお土産です。 | This is a souvenir from that country. | おみやげ | N4 L5 T5 C2 I2 — generic これは...です template; blank could be many nouns like 料理 or 文化 | teach only | yes |
| miso | 味噌は店で買います。 | Miso is bought at the store. | みそ | N4 L5 T5 C2 I2 — Generic sentence; many nouns could fill the blank. | teach only | yes |
| miso | 味噌を少し使ったことがあります。 | I have used a little miso before. | みそ | N4 L4 T5 C2 I3 — Grammar fits N4 but blank could be almost any food/ingredient. | teach only | yes |
| miso | 味噌をここに置いてください。 | Please put the miso here. | みそ | N4 L5 T5 C2 I2 — Context doesn't uniquely force 味噌; many objects could be placed there. | teach only | yes |
| back (of body) | 寒いと背中が痛くなります。 | If it's cold, my back starts to hurt. | せなか | N4 L4 T5 C2 I3 — Many body parts could fill the blank (頭, 腰, etc.), reducing recoverability. | teach only | yes |
| back (of body) | 背中が痛いので、少し休みたいです。 | My back hurts, so I want to rest a little. | せなか | N5 L4 T5 C2 I3 — Blank could be filled by many body-part nouns given the context. | teach only | yes |
| sleepy | 雨の日はいつも眠いです。 | I'm always sleepy on rainy days. | ねむい | N5 L5 T5 C3 I3 — Blank could plausibly fit other adjectives like 寒い/憂鬱 given rainy-day context, reducing uniqueness. | teach only | yes |
| sleepy | 眠かったから、コーヒーを飲みました。 | I was sleepy, so I drank coffee. | ねむかった | N5 L5 T5 C5 I4 | cloze+teach | yes |
| sleepy | 眠くても、仕事をしなければなりません。 | Even if I'm sleepy, I have to work. | ねむくて | N5 L4 T5 C3 I4 — Target label given as 眠くて but the actual word in the sentence is 眠くても, causing a mismatch that could confuse the cloze answer. | teach only | yes |
| to collapse | 会社で急に倒れました。 | I suddenly collapsed at the office. | たおれました | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other verbs like 泣きました or 帰りました without more context. | teach only | yes |
| to collapse | 台風で木が倒れることがあります。 | Trees sometimes fall down because of typhoons. | たおれる | N5 L5 T5 C3 I4 — Typhoon context could also fit 折れる or 枯れる, slightly reducing uniqueness. | teach only | yes |
| to collapse | おじいさんが倒れたので、病院へ行きました。 | My grandfather collapsed, so I went to the hospital. | たおれた | N5 L5 T5 C3 I4 — Other verbs like 怪我をした or 病気になった could also fit the context before 病院へ行きました. | teach only | yes |
| neck | 首が痛いです。 | My neck hurts. | くび | N5 L5 T5 C2 I2 — Blank could be any body part (肩, お腹, etc.), so poor cloze recoverability despite natural sentence. | teach only | yes |
| neck | 会社でネクタイを首に締めます。 | I tie a necktie around my neck at the office. | くび | N5 L5 T5 C5 I4 — Necktie context strongly forces 首 as the answer. | cloze+teach | yes |
| beard | 彼のひげは白くなりました。 | His beard turned white. | ひげ | N4 L5 T5 C3 I3 — 髪 (hair) could also fit the blank, reducing uniqueness slightly. | teach only | yes |
| beard | 床屋でひげを短くしてもらいました。 | I had my beard trimmed at the barber shop. | ひげ | N4 L4 T5 C3 I4 — 髪 could also plausibly fill the blank in this barber-shop context. | teach only | yes |
| hospitalization | 部長は病気で入院しています。 | The department chief is hospitalized due to illness. | にゅういん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| hospitalization | おじいさんが入院したと聞きました。 | I heard that my grandfather was hospitalized. | にゅういん | N5 L5 T5 C2 I3 — context alone allows many verbs (結婚した, 引っ越した, etc.) to fit the blank | teach only | yes |
| circumstances | 今日はちょっと都合が悪いです。 | Today isn't a good time for me. | つごう | N5 L4 T5 C5 I4 | cloze+teach | yes |
| reservation | レストランを予約してください。 | Please make a reservation at the restaurant. | よやく | N4 L5 T5 C4 I2 | cloze+teach | yes |
| reservation | 昨日、会議室を予約しました。 | I reserved the meeting room yesterday. | よやく | N5 L5 T5 C5 I3 | cloze+teach | yes |
| hindrance | 電話が邪魔で仕事ができません。 | The phone is a hindrance, so I can't work. | じゃま | N4 L4 T4 C3 I3 — うるさい/迷惑 could also fit the blank. | teach only | yes |
| hindrance | 宿題の邪魔をしないでください。 | Please don't interrupt my homework. | じゃま | N5 L4 T4 C5 I4 — '邪魔をする' is a strong fixed collocation, making the blank clear. | cloze+teach | yes |
| hindrance | 雨が降ったら、花見の邪魔になります。 | If it rains, it will interfere with the flower viewing. | じゃま | N5 L4 T5 C4 I4 — 迷惑になります could also plausibly fit, slightly lowering uniqueness. | cloze+teach | yes |
| international | 国際電話をかけたことがありますか。 | Have you ever made an international call? | こくさい | N5 L4 T5 C5 I3 | cloze+teach | yes |
| a dream | 昨夜、面白い夢を見ました。 | I had an interesting dream last night. | ゆめ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| particularly | 今日は特に暑いです。 | Today is particularly hot. | とくに | N5 L5 T5 C2 I2 — Blank could also be filled by とても/すごく, so not uniquely recoverable. | teach only | yes |
| particularly | 今週は特に忙しかったです。 | This week was particularly busy. | とくに | N5 L5 T5 C2 I2 — Same issue: other intensifiers fit the blank equally well. | teach only | yes |
| plan | 来月の計画を教えてください。 | Please tell me next month's plan. | けいかく | N5 L5 T5 C3 I3 — 予定 or スケジュール could also fit the blank | teach only | yes |
| plan | 旅行の計画を立てたいです。 | I want to make a travel plan. | けいかく | N5 L5 T5 C5 I4 | cloze+teach | yes |
| plan | 天気が良ければ、計画通りに行きます。 | If the weather is good, we'll go as planned. | けいかく | N5 L5 T5 C5 I4 | cloze+teach | yes |
| suffix for familiar person | 赤ちゃんは毎晩よく泣きます。 | The baby cries a lot every night. | ちゃん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| suffix for familiar person | もしもし、たろうちゃん、今どこにいますか。 | Hello, Taro, where are you now? | ちゃん | N4 L5 T5 C2 I3 — たろうくん or たろうさん could also fit, reducing unique recoverability | teach only | yes |
| child | あの子は私の妹です。 | That child is my younger sister. | こ | N5 L5 T5 C3 I2 — 人 could equally fill the blank, lowering recoverability. | teach only | yes |
| child | この子はまだ学校に行っていません。 | This child hasn't gone to school yet. | こ | N5 L5 T5 C3 I3 — 人 or other nouns could also fit the blank. | teach only | yes |
| wife (humble) | 妻は毎朝早く起きます。 | My wife wakes up early every morning. | つま | N5 L5 T5 C2 I3 — Blank could be filled by many family nouns (母, 姉, 妹, etc.), not uniquely 妻. | teach only | yes |
| wife (humble) | 妻に電話をかけてください。 | Please call my wife. | つま | N5 L5 T5 C2 I3 — Context doesn't force 妻 specifically; any person noun could fit. | teach only | yes |
| wife (humble) | 妻はまだ帰っていません。 | My wife hasn't come home yet. | つま | N5 L5 T5 C2 I3 — Sentence works with many other family/person nouns, weak cloze constraint. | teach only | yes |
| girlfriend | 彼女の誕生日だから、花を買いました。 | Because it's my girlfriend's birthday, I bought flowers. | かのじょ | N5 L5 T5 C3 I3 — Could equally be 母/姉/友達, so context doesn't force 彼女 specifically. | teach only | yes |
| girlfriend | 来週、彼女と旅行に行きます。 | Next week, I will go on a trip with my girlfriend. | かのじょ | N5 L5 T5 C3 I3 — Traveling together could apply to family/friends too, weakening uniqueness. | teach only | yes |
| girlfriend | 彼女はまだパーティーに来ていません。 | My girlfriend hasn't come to the party yet. | かのじょ | N4 L5 T4 C2 I2 — 彼女 here is ambiguous between 'she' and 'girlfriend'; sentence is generic and doesn't strongly cue 'girlfriend'. | teach only | yes |
| citizen | 市民は規則に気をつけなければなりません。 | Citizens must be careful about the rules. | しみん | N4 L4 T5 C3 I3 | teach only | yes |
| citizen | 市民の意見はとても大切です。 | Citizens' opinions are very important. | しみん | N4 L4 T5 C2 I2 — Generic sentence; many nouns could fill the blank. | teach only | yes |
| citizen | 市民はこの公園で自由に遊ぶことができます。 | Citizens can play freely in this park. | しみん | N4 L4 T5 C3 I3 — Other subjects like 子供 or 犬 could also fit the blank. | teach only | yes |
| son | 息子は今年大学生になりました。 | My son became a university student this year. | むすこ | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (娘, 彼, 私 etc.), not uniquely 息子. | teach only | yes |
| son | 息子はまだ外国に行ったことがありません。 | My son has never been abroad. | むすこ | N5 L5 T5 C2 I3 — Sentence works with many subjects, not just 息子. | teach only | yes |
| son | 息子と一緒に旅行したいです。 | I want to travel together with my son. | むすこ | N5 L5 T5 C2 I3 — Could be 友達, 家族, 彼女 etc.; not uniquely recoverable. | teach only | yes |
| (someone else's) child (polite) | お子さんは今何歳ですか。 | How old is your child now? | おこさん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| (someone else's) child (polite) | お子さんはとても元気ですね。 | Your child is very energetic, isn't he/she? | おこさん | N5 L5 T5 C3 I3 — Other nouns (息子さん, 犬, etc.) could also fit the blank. | teach only | yes |
| price | このレストランの魚料理は値段が安いです。 | The fish dish at this restaurant is low in price. | ねだん | N5 L5 T4 C4 I3 — EN slightly awkward phrasing 'low in price' but otherwise fine. | cloze+teach | yes |
| price | 駅の前の店の傘の値段はいくらですか。 | What is the price of the umbrella at the shop in front of the station? | ねだん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| price | このパソコンの値段は高くないと思います。 | I don't think the price of this computer is high. | ねだん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| degree | この仕事は一週間ほどかかると思います。 | I think this job will take about a week. | ほど | N4 L3 T5 C2 I3 — くらい/くらいは could equally fit, weakening recoverability. | teach only | yes |
| both sides | 両方の料理を持ってきてください。 | Please bring both dishes. | りょうほう | N4 L5 T5 C3 I3 | teach only | yes |
| like this | 病気の時はこうしてください。 | Please do it like this when you're sick. | こう | N5 L5 T5 C2 I3 — そう/ああ could also fit the blank grammatically, so exact word not fully forced by context. | teach only | yes |
| like this | 朝はこうして準備します。 | In the morning, I get ready like this. | こう | N5 L5 T5 C2 I3 — そう could equally fill the blank without visual context. | teach only | yes |
| like this | こうすればいいですか。 | Is it okay if I do it like this? | こう | N5 L5 T5 C2 I3 — そうすればいいですか is equally valid, so cloze answer isn't uniquely determined. | teach only | yes |
| good | 体のために野菜を食べます。 | I eat vegetables for my health. | ため | N5 L5 T5 C5 I3 | cloze+teach | yes |
| good | 会社に行くために早く起きます。 | I get up early in order to go to work. | ため | N5 L5 T5 C5 I3 | cloze+teach | yes |
| other than | 野菜以外は買いませんでした。 | I didn't buy anything other than vegetables. | いがい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| other than | 電車以外の乗り物は使いません。 | I don't use any transportation other than the train. | いがい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| other than | 熱以外に具合が悪いところはありますか。 | Is there anywhere else besides your fever that feels bad? | いがい | N5 L4 T5 C5 I4 | cloze+teach | yes |
| play | 子供は遊びが好きです。 | Children like play. | あそび | N4 L5 T5 C2 I2 — Very generic template sentence; many nouns could fill the blank. | teach only | yes |
| play | 仕事の後、遊びに行きませんか。 | Shall we go out to play after work? | あそび | N5 L5 T5 C3 I3 — Pattern '〜に行きませんか' could be filled with many activity nouns, not uniquely 遊び. | teach only | yes |
| surely | 薬を飲めばきっと治ります。 | If you take the medicine, you'll surely get better. | きっと | N5 L5 T5 C3 I3 — たぶん could also fit the blank, slightly reducing certainty of answer. | teach only | yes |
| surely | 電車はきっと遅れると思います。 | I think the train will surely be late. | きっと | N5 L5 T5 C3 I3 — たぶん or もう could also fit grammatically. | teach only | yes |
| surely | 野菜を食べればきっと元気になります。 | If you eat vegetables, you'll surely become healthy. | きっと | N5 L5 T5 C3 I3 — たぶん could also fit the blank. | teach only | yes |
| first | 朝はまず顔を洗います。 | In the morning, I first wash my face. | まず | N5 L5 T5 C3 I3 | teach only | yes |
| first | 買い物の前にまずお金を用意しましょう。 | Before shopping, let's first prepare our money. | まず | N5 L5 T5 C4 I3 | cloze+teach | yes |
| first | 会社に行く前にまず薬を飲みます。 | Before going to work, I first take medicine. | まず | N5 L5 T5 C4 I3 | cloze+teach | yes |
| approximately | 買い物にはだいたい千円使います。 | I spend approximately a thousand yen on shopping. | だいたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| approximately | 会社までだいたい三十分かかります。 | It takes approximately thirty minutes to get to work. | だいたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| approximately | 風邪はだいたい治りました。 | My cold has mostly healed. | だいたい | N5 L5 T5 C3 I3 — もう or ほとんど could also fit the blank, reducing uniqueness. | teach only | yes |
| to that degree | 今朝はそれほど寒くありません。 | This morning it's not that cold. | それほど | N5 L5 T5 C3 I3 — あまり/そんなに could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| to that degree | この野菜はそれほど高くないです。 | This vegetable isn't that expensive. | それほど | N5 L5 T5 C3 I3 — あまり/そんなに could also fit the blank. | teach only | yes |
| to that degree | 頭はそれほど痛くありません。 | My head doesn't hurt that much. | それほど | N5 L5 T5 C3 I3 — あまり/そんなに could also fit the blank. | teach only | yes |
| ring | 妻に指輪をあげました。 | I gave my wife a ring. | ゆびわ | N5 L5 T5 C2 I3 — Blank could be filled by many gift items (flowers, present, etc.), not uniquely 'ring'. | teach only | yes |
| ring | 指輪をなくしたから、交番へ行きます。 | Because I lost my ring, I'm going to the police box. | ゆびわ | N5 L5 T5 C2 I3 — Many lost items (wallet, phone, bag) would fit the same context. | teach only | yes |
| ring | その指輪を見せてください。 | Please show me that ring. | ゆびわ | N5 L5 T5 C1 I2 — Extremely generic; almost any noun could fill the blank. | teach only | yes |
| lost article | 電車の中に忘れ物をしました。 | I left something behind on the train. | わすれもの | N5 L5 T5 C4 I3 | cloze+teach | yes |
| lost article | 忘れ物をしないでください。 | Please don't leave anything behind. | わすれもの | N5 L5 T5 C3 I3 — blank could plausibly be filled by other nouns without more context | teach only | yes |
| lost article | 忘れ物があったから、駅に戻りました。 | Because I had a lost item, I went back to the station. | わすれもの | N5 L5 T5 C5 I4 | cloze+teach | yes |
| diary | 毎晩、日記を書きます。 | I write in my diary every night. | にっき | N5 L5 T5 C3 I3 — Blank could also be filled by 手紙 or メール, though 日記 is a natural fit. | teach only | yes |
| diary | 私の日記を読まないでください。 | Please don't read my diary. | にっき | N5 L5 T5 C3 I4 — Other private items (手紙, 本) could also fit the blank. | teach only | yes |
| diary | 日記を書いたから、忘れません。 | Because I wrote in my diary, I won't forget. | にっき | N4 L5 T5 C4 I4 | cloze+teach | yes |
| heating | 部屋が寒いですから、暖房をつけてください。 | Since the room is cold, please turn on the heating. | だんぼう | N5 L5 T5 C3 I3 — エアコン/ヒーター could also fit the blank | teach only | yes |
| heating | この部屋には暖房がありません。 | This room doesn't have heating. | だんぼう | N5 L5 T5 C2 I2 — blank could be many nouns (窓、テレビ etc.), not uniquely 暖房 | teach only | yes |
| a seat | ここは私の席です。 | This is my seat. | せき | N5 L5 T5 C2 I2 — Generic template sentence; blank could be filled with many nouns (家, 車, 本, etc.). | teach only | yes |
| a seat | 席を立ってください。 | Please stand up from your seat. | せき | N5 L5 T5 C4 I4 — 席を立つ is a fixed idiomatic pairing, making the blank fairly recoverable. | cloze+teach | yes |
| a seat | 遅れたから、後ろの席に座りました。 | Because I was late, I sat in the back seat. | せき | N5 L4 T5 C4 I4 — Context (後ろの＿に座りました) strongly suggests 席, minor chance of 列 or similar. | cloze+teach | yes |
| curtain | 朝、カーテンを開けます。 | I open the curtains in the morning. | かあてん | N5 L5 T5 C3 I3 — could also be 窓 or ドア in this context | teach only | yes |
| curtain | カーテンを閉めてください。 | Please close the curtains. | かあてん | N5 L5 T5 C3 I3 — 窓 or ドア could also fit the blank | teach only | yes |
| curtain | カーテンが汚いから、洗濯します。 | Because the curtains are dirty, I'll wash them. | かあてん | N5 L5 T5 C3 I4 — other washable items could fit, but curtain is a plausible strong guess | teach only | yes |
| accessory | 誕生日にアクセサリーをもらいました。 | I received an accessory for my birthday. | あくせさりい | N5 L5 T5 C3 I3 — Many gift items could fit the blank, e.g. present, flower, book. | teach only | yes |
| accessory | 高いアクセサリーは買いません。 | I don't buy expensive accessories. | あくせさりい | N5 L5 T5 C2 I3 — Blank could be filled by many nouns like car, clothes, bag, etc. | teach only | yes |
| accessory | そのアクセサリーをつけてもいいですか。 | May I wear that accessory? | あくせさりい | N5 L4 T5 C4 I4 — つける narrows the answer mostly to wearable items like accessory/jewelry. | cloze+teach | yes |
| alcohol | このお茶にはアルコールが入っていません。 | This tea doesn't contain alcohol. | あるこーる | N5 L5 T5 C3 I3 — カフェイン(caffeine) or other substances could also fit the blank. | teach only | yes |
| alcohol | 会議の前にアルコールを飲まないでください。 | Please don't drink alcohol before the meeting. | あるこーる | N5 L5 T5 C3 I3 — お酒 or コーヒー could also fit the blank. | teach only | yes |
| alcohol | 運転する時はアルコールを飲みません。 | I don't drink alcohol when I drive. | あるこーる | N5 L5 T5 C3 I3 — お酒 is a near-synonym that also fits the blank. | teach only | yes |
| typhoon | 台風だから、電車が止まりました。 | Because of the typhoon, the trains stopped. | たいふう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| typhoon | 今週は台風が来ませんでした。 | No typhoon came this week. | たいふう | N4 L5 T5 C3 I2 — blank could be filled by other nouns like 雨 or 客 | teach only | yes |
| typhoon | 台風が来るので、買い物を早くしてください。 | Since a typhoon is coming, please do your shopping quickly. | たいふう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| sun | 雲が多くて、日が見えません。 | There are many clouds, so I can't see the sun. | ひ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| sun | 日が出たから、暖かくなりました。 | Because the sun came out, it got warm. | ひ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| leaf | 秋になると、葉が赤くなります。 | When autumn comes, the leaves turn red. | は | N5 L5 T5 C4 I4 | cloze+teach | yes |
| leaf | 落ちた葉を集めてください。 | Please gather the fallen leaves. | は | N5 L5 T5 C4 I3 | cloze+teach | yes |
| earthquake | 昨夜は地震がありませんでした。 | There was no earthquake last night. | じしん | N4 L5 T5 C2 I2 — Blank could be filled by many nouns (雨, 台風, etc.), reducing recoverability; generic sentence. | teach only | yes |
| earthquake | 地震が来たら、机の下に入ってください。 | If an earthquake comes, please get under the desk. | じしん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| star | 空が暗いので、星がよく見えます。 | Since the sky is dark, the stars are clearly visible. | ほし | N5 L5 T5 C3 I3 — 月 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| star | 今夜は雲が多くて、星が見えません。 | Tonight there are many clouds, so I can't see the stars. | ほし | N5 L5 T5 C3 I3 — 月 could also fit the blank. | teach only | yes |
| star | あの星を見てください、とても明るいです。 | Please look at that star, it's very bright. | ほし | N4 L5 T5 C3 I3 — 月 could also fit the blank; slightly less natural phrasing with request+comment. | teach only | yes |
| woods | あの林の中に小さい家があります。 | There is a small house inside those woods. | はやし | N5 L5 T5 C3 I3 — Blank could be filled by many nouns (森, 家, 部屋) since context doesn't force 林 specifically. | teach only | yes |
| woods | 林には人が全然いません。 | There is nobody in the woods at all. | はやし | N5 L5 T5 C2 I2 — Very generic sentence; almost any place noun fits the blank. | teach only | yes |
| woods | 林の中を静かに歩いてください。 | Please walk quietly through the woods. | はやし | N5 L5 T5 C3 I3 — Plausible with 森 or other nature nouns, so not fully unique. | teach only | yes |
| to shine | 星が光っているから、空がきれいです。 | Because the stars are shining, the sky is beautiful. | ひかっている | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to shine | 今夜は星が全然光りません。 | Tonight the stars aren't shining at all. | ひかりません | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to shine | あそこの光っている物を見てください。 | Please look at that shining thing over there. | ひかっている | N4 L5 T5 C3 I3 — blank could plausibly be other verbs like 動いている or 見える, reducing uniqueness | teach only | yes |
| cloud | 空に大きい雲があるから、雨が降ると思います。 | There's a big cloud in the sky, so I think it will rain. | くも | N4 L4 T5 C4 I4 | cloze+teach | yes |
| cloud | 今日は雲が全然ありません。 | Today there are no clouds at all. | くも | N5 L4 T5 C2 I3 — Blank could be many nouns (人, 時間, etc.) without weather context. | teach only | yes |
| cloud | あの白い雲を見てください。 | Please look at that white cloud. | くも | N5 L4 T5 C2 I3 — 白い could describe many objects, making the target hard to guess uniquely. | teach only | yes |
| to slide | 子供が階段で滑って泣きました。 | The child slid on the stairs and cried. | すべって | N5 L5 T5 C3 I4 — 転んで(fell) could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| to slide | 雨の日は道が滑りますから、気をつけてください。 | On rainy days the road is slippery, so please be careful. | すべります | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to slide | この廊下は滑りますか。 | Does this hallway get slippery? | すべります | N4 L5 T5 C4 I3 — Slightly generic but clear context for 滑る. | cloze+teach | yes |
| return | 父の帰りはいつも遅いです。 | My father's return home is always late. | かえり | N5 L4 T5 C4 I3 | cloze+teach | yes |
| return | 帰りに友達の家に寄りましょう。 | Let's stop by a friend's house on the way home. | かえり | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to transport | 母は荷物を車で運びました。 | My mother transported the luggage by car. | はこびました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to transport | 明日、荷物を運びましょうか。 | Shall we carry the luggage tomorrow? | はこびましょう | N5 L5 T5 C3 I3 — 持ちましょう could also fit the blank. | teach only | yes |
| to face | 今、あちらに向かっています。 | I'm heading that way now. | むかっています | N5 L5 T5 C3 I3 — 行っています/歩いています could also fit the blank. | teach only | yes |
| to face | 駅に向かう前に電話してください。 | Please call before heading to the station. | むかう | N5 L5 T5 C3 I3 — 行く前に would also work in context. | teach only | yes |
| to face | 教室に向かいましょう。 | Let's head to the classroom. | むかいましょう | N5 L5 T5 C3 I3 — 行きましょう could also fit the blank. | teach only | yes |
| to move (from a house) | 来月、新しい家に移ります。 | Next month, I will move to a new house. | うつります | N5 L5 T5 C3 I2 — 住みます could also fit the blank, slightly reducing recoverability. | teach only | yes |
| to move (from a house) | 会社が移りましたから、住所を教えます。 | The company moved, so I'll tell you the address. | うつりました | N4 L4 T4 C3 I3 — 変わりました could also fit contextually, reducing uniqueness. | teach only | yes |
| to move (from a house) | 新しい部屋に移ったら、遊びに来てください。 | When I move to the new room, please come visit. | うつったら | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to move | 授業中は動かないでください。 | Please don't move during class. | うごかない | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to move | 車が動きません。 | The car won't move. | うごきません | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to move | 今、電車が動いていますか。 | Is the train running now? | うごいています | N5 L4 T5 C3 I3 — 走っています could also fit the blank, slightly reducing recoverability. | teach only | yes |
| heart | 部長の言葉で心が軽くなりました。 | My heart felt lighter because of the manager's words. | こころ | N5 L5 T4 C3 I3 — 気持ち could also fill the blank equally well. | teach only | yes |
| heart | 悲しくて心が痛くなったことがあります。 | I have had my heart ache from sadness. | こころ | N4 L5 T4 C2 I3 — 胸が痛くなる is at least as common, reducing cloze certainty. | teach only | yes |
| throat | 辛い料理を食べたら喉が痛くなりました。 | When I ate spicy food, my throat started to hurt. | のど | N5 L4 T5 C3 I4 — Could also be 口 or 舌 in the blank, slightly reduces uniqueness. | teach only | yes |
| throat | 寒い日は喉に気をつけてください。 | Please take care of your throat on cold days. | のど | N5 L4 T5 C3 I3 — Generic advice sentence; other body-related nouns could fit the blank. | teach only | yes |
| throat | 歌を歌いすぎて喉が痛いです。 | My throat hurts from singing too much. | のど | N5 L4 T5 C4 I4 | cloze+teach | yes |
| blood | 台所で指を切って血が出ました。 | I cut my finger in the kitchen and it bled. | ち | N5 L5 T5 C5 I4 | cloze+teach | yes |
| blood | 血が止まらない時は病院へ行ってください。 | If the bleeding doesn't stop, please go to the hospital. | ち | N5 L5 T5 C4 I3 | cloze+teach | yes |
| blood | 医者は血を調べました。 | The doctor examined the blood. | ち | N4 L5 T4 C2 I2 — Many other words (体, 尿, データ) could fill the blank, weakening recoverability. | teach only | yes |
| hair | 彼女の髪はとても長いです。 | Her hair is very long. | かみ | N5 L5 T5 C3 I2 — Blank could also fit 足/爪/顔 etc., slightly reduces uniqueness. | teach only | yes |
| hair | 先週髪を切りました。 | I cut my hair last week. | かみ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| hair | 寝る前に髪を洗ってください。 | Please wash your hair before sleeping. | かみ | N5 L5 T5 C3 I3 — Could also be 顔/手, slightly ambiguous. | teach only | yes |
| arm | テニスをしすぎて腕が痛いです。 | My arm hurts from playing too much tennis. | うで | N5 L5 T5 C2 I3 — Many body parts could fill the blank (足, 肩, 手, etc.), reducing cloze recoverability. | teach only | yes |
| arm | 医者は腕を見せてくださいと言いました。 | The doctor said, "please show me your arm." | うで | N4 L5 T5 C2 I3 — Blank could be filled by many nouns (歯, 喉, 傷, etc.), weakening uniqueness. | teach only | yes |
| leaving hospital | 父は先週退院しました。 | My father left the hospital last week. | たいいんしました | N5 L5 T5 C2 I3 — No contextual clue narrows the blank to 退院; could be many other verbs (結婚した, 旅行した, etc.). | teach only | yes |
| leaving hospital | 来週退院する予定です。 | I'm planning to leave the hospital next week. | たいいんする | N5 L5 T5 C2 I3 — Lacks context (e.g., hospital/illness) to force 退院 as the only answer. | teach only | yes |
| leaving hospital | いつ退院しますか。 | When will you leave the hospital? | たいいんします | N5 L5 T5 C2 I3 — Ambiguous without surrounding context; many verbs could fit the blank. | teach only | yes |
| to gain weight | 毎日ケーキを食べたら太ります。 | If you eat cake every day, you'll gain weight. | ふとります | N4 L4 T5 C4 I3 — reading uses けえき instead of standard けーき for ケーキ, minor inconsistency | cloze+teach | yes |
| to gain weight | 運動しないと太りますよ。 | If you don't exercise, you'll gain weight. | ふとります | N5 L4 T5 C3 I3 — other verbs like 疲れます could also fit the blank | teach only | yes |
| injection | 医者は私に注射をしました。 | The doctor gave me an injection. | ちゅうしゃ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| injection | 注射をしてください。 | Please give me an injection. | ちゅうしゃ | N5 L5 T4 C3 I2 — blank could be filled by many nouns (薬など) since context is minimal | teach only | yes |
| injection | 子供の時、注射が嫌いでした。 | When I was a child, I hated injections. | ちゅうしゃ | N5 L4 T5 C5 I4 | cloze+teach | yes |
| accident | 事故で電車が遅れました。 | Due to an accident, the train was delayed. | じこ | N5 L5 T5 C3 I3 — Blank could also be filled by other causes like 雨 or 工事, slightly reducing uniqueness. | teach only | yes |
| accident | 事故を起こさないでください。 | Please don't cause an accident. | じこ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| accident | あの交差点は事故が多いです。 | There are many accidents at that intersection. | じこ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| cause | 事故の原因はまだ分かりません。 | The cause of the accident isn't known yet. | げんいん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| cause | 原因が分かったら、すぐに教えてください。 | If you find out the cause, please tell me right away. | げんいん | N5 L4 T5 C2 I3 — blank could be filled by many nouns (結果, 名前, 場所, etc.), not uniquely 原因 | teach only | yes |
| cause | 昨日、火事の原因が分かりました。 | Yesterday, the cause of the fire was found. | げんいん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| answer | この問題の答が分かりません。 | I don't know the answer to this problem. | こたえ | N4 L5 T5 C4 I3 | cloze+teach | yes |
| answer | 答をノートに書いてください。 | Please write the answer in your notebook. | こたえ | N4 L5 T5 C3 I3 — blank could plausibly be filled by other nouns like 名前 | teach only | yes |
| answer | 先生に答を聞きました。 | I asked the teacher for the answer. | こたえ | N4 L5 T5 C3 I3 — blank could be filled by other nouns like 質問 | teach only | yes |
| certainly | もちろん、明日のパーティーに行きます。 | Of course, I'll go to tomorrow's party. | もちろん | N5 L5 T5 C2 I3 — Other adverbs like きっと/たぶん could also fit the blank. | teach only | yes |
| certainly | もちろん、その道は知っています。 | Of course, I know that road. | もちろん | N5 L5 T5 C2 I3 — Blank position doesn't force もちろん specifically; other adverbs could fit. | teach only | yes |
| certainly | もちろん、晩御飯はもう作りましたよ。 | Of course, I already made dinner. | もちろん | N5 L5 T5 C2 I3 — Context doesn't uniquely force もちろん over similar adverbs. | teach only | yes |
| within | 一年の内に外国へ旅行したいです。 | I want to travel abroad within a year. | うち | N5 L4 T5 C4 I3 | cloze+teach | yes |
| or | バスまたは電車で行きます。 | I'll go by bus or train. | または | N5 L4 T5 C3 I3 — か could also fill the blank grammatically, slightly reducing uniqueness. | teach only | yes |
| or | 名前または電話番号を書いてください。 | Please write your name or phone number. | または | N5 L4 T5 C3 I3 — か could also work here, reducing uniqueness. | teach only | yes |
| or | 土曜日または日曜日に会いましょう。 | Let's meet on Saturday or Sunday. | または | N5 L4 T5 C3 I3 — か is a plausible alternative in the blank. | teach only | yes |
| just did ~ | 今、駅に着いたばかりです。 | I just arrived at the station now. | ばかり | N5 L5 T5 C3 I3 — ところ could also fill the blank, reducing uniqueness. | teach only | yes |
| just did ~ | さっき起きたばかりで、まだ眠いです。 | I just woke up a little while ago, so I'm still sleepy. | ばかり | N5 L5 T5 C3 I3 — ところ could also fit the blank grammatically. | teach only | yes |
| errand | 今日は用がありますから、早く帰ります。 | I have an errand today, so I'll go home early. | よう | N5 L5 T5 C3 I3 — 用事 or other words could also fit the blank. | teach only | yes |
| errand | 何か用がありますか。 | Do you have some business (errand)? | よう | N5 L5 T4 C2 I2 — Very generic; blank could be filled with 用事, 質問, 問題, etc. | teach only | yes |
| errand | 大切な用で出かけます。 | I'm going out for an important errand. | よう | N4 L5 T5 C3 I3 — 用事 or 仕事 could also fit naturally. | teach only | yes |
| sand | 子供たちは公園の砂で遊びました。 | The children played in the sand at the park. | すな | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other words like 池 or ボール, slightly reducing recoverability. | teach only | yes |
| sand | 海岸に白い砂がたくさんあります。 | There is a lot of white sand on the beach. | すな | N5 L5 T5 C5 I4 | cloze+teach | yes |
| sand | 急いでいたら靴の中に砂が入っていました。 | I was in a hurry and there was sand in my shoes. | すな | N5 L4 T4 C5 I5 — Translation slightly loose: '急いでいたら' means 'when I was in a hurry' rather than 'I was in a hurry and'. | cloze+teach | yes |
| grass | 道の草を切ってください。 | Please cut the grass on the road. | くさ | N4 L5 T5 C3 I3 — Other nouns like 花木 could also fit the blank. | teach only | yes |
| cherry-blossom viewing | 来週みんなで花見に行きます。 | We will all go cherry-blossom viewing next week. | はなみ | N5 L5 T5 C3 I3 — Context (何かに行く) leaves room for other activity nouns, slightly reducing uniqueness. | teach only | yes |
| cherry-blossom viewing | 去年、家族と花見をしました。 | Last year, I did cherry-blossom viewing with my family. | はなみ | N5 L5 T5 C3 I3 — Plausible but blank could also be filled by other social activities like 旅行 or ピクニック. | teach only | yes |
| lake | 山の向こうに大きい湖がありました。 | There was a big lake beyond the mountain. | みずうみ | N5 L5 T5 C3 I4 — Blank could be filled by other nature nouns like 町 or 森, slightly lowering recoverability. | teach only | yes |
| lake | 急いでいて湖の近くでカメラを忘れました。 | I was in a hurry and forgot my camera near the lake. | みずうみ | N5 L5 T5 C2 I4 — Many location nouns (駅、公園など) could fit the blank, reducing uniqueness. | teach only | yes |
| to become late | 今日は電車が遅れました。 | The train was late today. | おくれました | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other verbs like 止まりました or 来ました, reducing uniqueness. | teach only | yes |
| to become late | 天気が悪くて、バスが遅れています。 | The weather is bad, so the bus is running late. | おくれています | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to become late | 予約の時間に遅れないでください。 | Please don't be late for the reservation time. | おくれないでください | N5 L4 T5 C5 I3 | cloze+teach | yes |
| after every ~ | 一日おきにピアノを弾きます。 | I play the piano every other day. | おき | N5 L4 T5 C4 I3 | cloze+teach | yes |
| after every ~ | 二週間おきにテストがありますか。 | Is there a test every two weeks? | おき | N5 L4 T5 C4 I3 | cloze+teach | yes |
| after every ~ | 先週は三日おきに雨が降りました。 | Last week, it rained every three days. | おき | N5 L4 T5 C4 I3 | cloze+teach | yes |
| (in the) future | 将来、医者になりたいです。 | I want to become a doctor in the future. | しょうらい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| (in the) future | 将来のことをよく考えます。 | I often think about the future. | しょうらい | N5 L5 T5 C3 I3 — blank could also be 'よく' or other time words like 未来, slightly less forced | teach only | yes |
| (in the) future | 将来はどんな仕事をしたいですか。 | What kind of job do you want to have in the future? | しょうらい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| the other day | この間、映画を見ました。 | I watched a movie the other day. | このあいだ | N4 L5 T5 C2 I2 — Many other time words (昨日, 先週など) could fill the blank equally well. | teach only | yes |
| the other day | この間、先生にどこで会いましたか。 | Where did you meet the teacher the other day? | このあいだ | N4 L5 T5 C2 I3 — Blank could be filled by other time expressions like 先週 or 昨日. | teach only | yes |
| to be in time for | 急げば、電車に間に合います。 | If you hurry, you'll make it to the train. | まにあいます | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to be in time for | 予約の時間に間に合いませんでした。 | I didn't make it in time for the reservation. | まにあいませんでした | N5 L3 T5 C4 I3 | cloze+teach | yes |
| very soon | もうすぐ授業が始まります。 | Class will start very soon. | もうすぐ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| very soon | もうすぐ夏休みですね。 | Summer vacation is coming soon, isn't it? | もうすぐ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| very soon | もうすぐ晴れると思います。 | I think it will clear up very soon. | もうすぐ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| these days | この頃、忙しいです。 | These days, I'm busy. | このごろ | N5 L5 T5 C2 I2 — Generic; other time words like 最近/今 could equally fill the blank. | teach only | yes |
| these days | この頃、寒くなりました。 | It has gotten cold these days. | このごろ | N5 L5 T5 C3 I3 — Slightly better context but 最近 still fits equally well. | teach only | yes |
| these days | この頃、何をしていますか。 | What have you been doing these days? | このごろ | N5 L5 T5 C2 I2 — Very generic; 最近 or 今 could also fit the blank. | teach only | yes |
| from now on | これから晩御飯を食べます。 | I'm going to eat dinner now. | これから | N4 L5 T4 C2 I2 — Blank could also be filled with 今から/もうすぐ, not uniquely これから. | teach only | yes |
| from now on | これから頑張りたいです。 | I want to do my best from now on. | これから | N5 L5 T5 C3 I4 — Fairly idiomatic but 今後 could also fit the blank. | teach only | yes |
| from now on | これから雨が降ると思います。 | I think it's going to rain from now. | これから | N4 L5 T4 C2 I3 — 今から or もうすぐ could also fit, reducing uniqueness. | teach only | yes |
| to help | 宿題を手伝ってくれませんか。 | Could you help me with my homework? | てつだって | N5 L5 T5 C4 I4 | cloze+teach | yes |
| (honorific) to give | 先生がこの本をくださいました。 | The teacher gave me this book. | くださいました | N5 L3 T5 C4 I3 | cloze+teach | yes |
| (honorific) to give | 先生は宿題の答えをくださいますか。 | Will the teacher give us the answer to the homework? | くださいます | N4 L3 T4 C4 I3 | cloze+teach | yes |
| to laugh | 友達は私の話を聞いて笑いました。 | My friend laughed after hearing my story. | わらいました | N5 L5 T5 C3 I3 — could also be 泣きました or 驚きました, so not fully forced | teach only | yes |
| to laugh | 授業中に大きい声で笑いましたか。 | Did you laugh loudly during class? | わらいました | N5 L5 T5 C3 I3 — 大きい声で could fit 話す/歌う/泣く too | teach only | yes |
| to fit | 友達にあげたセーターは彼に合いました。 | The sweater I gave my friend fit him. | あいました | N4 L5 T5 C3 I3 — 合う vs 似合う could both fit context for clothing fitting a person, slightly reducing recoverability. | teach only | yes |
| to fit | 今日の服は天気に合いません。 | Today's clothes don't suit the weather. | あいません | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to be found | なくした鍵が見つかりました。 | The lost key was found. | みつかりました | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to be found | 忘れ物は見つかりましたか。 | Was the lost item found? | みつかりました | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to be found | 図書館で欲しい本が見つかったら教えてください。 | If you find the book you want at the library, please tell me. | みつかったら | N5 L4 T4 C5 I4 — EN slightly shifts agency from 'is found' to 'you find' | cloze+teach | yes |
| to be fixed | 壊れたテレビが直りました。 | The broken TV got fixed. | なおりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be fixed | 自転車はもう直りましたか。 | Has the bicycle been fixed yet? | なおりました | N5 L5 T5 C3 I3 — blank could plausibly be filled by other verbs like 壊れました without more context | teach only | yes |
| to be fixed | パソコンが直ったら連絡します。 | If the computer gets fixed, I'll contact you. | なおったら | N5 L4 T5 C3 I3 — blank could also be 壊れたら given context | teach only | yes |
| to collect | 子供の時に切手を集めました。 | I collected stamps when I was a child. | あつめました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to collect | クラスのために本を集めたいです。 | I want to collect books for the class. | あつめたい | N4 L5 T5 C4 I3 | cloze+teach | yes |
| as it is | ドアを開けたままにしないでください。 | Please don't leave the door open. | まま | N5 L5 T5 C4 I3 | cloze+teach | yes |
| as it is | 靴を履いたまま部屋に入ってはいけません。 | You must not enter the room with your shoes on. | まま | N5 L5 T5 C5 I4 | cloze+teach | yes |
| as it is | 疲れて、洋服を着たまま寝てしまいました。 | I was tired and fell asleep with my clothes on. | まま | N5 L5 T5 C5 I4 | cloze+teach | yes |
| present | 誕生日に何をプレゼントしたいですか。 | What do you want to give as a birthday present? | ぷれぜんと | N4 L4 T4 C3 I3 | teach only | yes |
| present | デパートへプレゼントを買いに行きましょう。 | Let's go to the department store to buy a present. | ぷれぜんと | N5 L5 T5 C3 I3 | teach only | yes |
| present | このプレゼントはとても高かったです。 | This present was very expensive. | ぷれぜんと | N4 L5 T5 C2 I2 — generic template, many nouns could fill blank | teach only | yes |
| condition | 具合が悪いので、今日は休みます。 | I feel unwell, so I'll rest today. | ぐあい | N5 L5 T5 C3 I3 — 気分 could also fit the blank. | teach only | yes |
| condition | お母さんの具合はどうですか。 | How is your mother's condition? | ぐあい | N5 L5 T5 C3 I3 — 調子 could also fit the blank. | teach only | yes |
| condition | 具合が良くなったら、プールで泳ぎましょう。 | If your condition gets better, let's swim in the pool. | ぐあい | N5 L5 T5 C3 I3 — 調子 could also fit the blank. | teach only | yes |
| space | 家と駅の間に公園があります。 | There is a park between the house and the station. | あいだ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| space | 二つの椅子の間に猫がいます。 | There is a cat between the two chairs. | あいだ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| space | 授業の間、静かにしてください。 | Please be quiet during the class. | あいだ | N5 L4 T5 C4 I4 | cloze+teach | yes |
| and (conj.) | 雨が降りました。それで、傘を持って行きました。 | It rained. So I took an umbrella. | それで | N5 L5 T5 C3 I3 — だから could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| and (conj.) | 具合が悪かったです。それで、病院へ行きました。 | I felt unwell. So I went to the hospital. | それで | N5 L5 T5 C3 I3 — だから could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| and (conj.) | 電車が遅れました。それで、会議に遅れました。 | The train was late. So I was late for the meeting. | それで | N5 L5 T5 C3 I3 — だから could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| politics | 彼は政治に興味があります。 | He is interested in politics. | せいじ | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (音楽, スポーツ, etc.), reducing recoverability. | teach only | yes |
| politics | 政治のニュースをよく見ますか。 | Do you often watch political news? | せいじ | N5 L5 T5 C3 I3 — Slightly more specific context but still many topics could fit the blank. | teach only | yes |
| so much | そんなに心配しないでください。 | Please don't worry so much. | そんなに | N5 L5 T5 C3 I3 — あまり could also fit the blank, reducing uniqueness | teach only | yes |
| so much | 具合はそんなに悪くないです。 | My condition isn't that bad. | そんなに | N5 L5 T5 C3 I3 — あまり/全然 could also fit the blank | teach only | yes |
| reason | 遅れた訳を教えてください。 | Please tell me the reason you were late. | わけ | N5 L4 T5 C3 I3 — 理由 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| reason | 彼が来ない訳が分かりません。 | I don't understand the reason he isn't coming. | わけ | N5 L4 T5 C3 I3 — 理由 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| reason | 何か訳があるはずです。 | There must be some reason. | わけ | N5 L4 T5 C3 I2 — 理由 could also fit the blank; fairly generic sentence. | teach only | yes |
| common | 普通、私は七時に起きます。 | Normally, I wake up at seven. | ふつう | N5 L4 T5 C3 I3 — Other adverbs like いつも/毎日 could also fit the blank. | teach only | yes |
| common | この問題は普通だと思います。 | I think this problem is ordinary. | ふつう | N4 L4 T4 C2 I2 — Blank could be filled by many adjectives (簡単, 難しい, 面白い), low cloze specificity. | teach only | yes |
| to be empty | 電車は空いていますか。 | Is the train empty? | すいて | N5 L5 T5 C3 I3 — Blank could also be filled with 混んで, so not fully unique. | teach only | yes |
| to be empty | 映画館が空いたら、行きましょう。 | If the movie theater is empty, let's go. | すいたら | N5 L4 T5 C3 I4 — Other verbs like 終わったら could also fit the blank. | teach only | yes |
| most | クラスで誰が最も上手ですか。 | Who is the most skilled in the class? | もっとも | N4 L5 T5 C2 I3 — 一番 fits just as naturally, reducing uniqueness of the blank. | teach only | yes |
| most | この料理が最も美味しいと思います。 | I think this dish is the most delicious. | もっとも | N4 L5 T5 C2 I3 — 一番 is an equally valid substitute here, so the blank doesn't force 最も specifically. | teach only | yes |
| kind (person) | 私の友達はとても優しいです。 | My friend is very kind. | やさしい | N5 L5 T5 C2 I2 — Many adjectives fit the blank (tall, funny, strict, etc.), low recoverability. | teach only | yes |
| kind (person) | 先生は優しいですか。 | Is the teacher kind? | やさしい | N5 L5 T5 C2 I2 — Blank could be filled by many adjectives describing the teacher. | teach only | yes |
| kind (person) | 先生が優しかったら、質問しやすいです。 | If the teacher is kind, it's easy to ask questions. | やさしかったら | N4 L4 T5 C3 I4 — Context (easy to ask questions) narrows it toward kind/friendly traits, but 親切 or 面白い could also fit. | teach only | yes |
| simple | このテストはとても簡単です。 | This test is very simple. | かんたん | N4 L5 T5 C2 I1 — Generic template; many adjectives (難しい, 面白い, etc.) could fill the blank equally well. | teach only | yes |
| simple | 簡単な料理を作ってもいいですか。 | Is it okay to make simple food? | かんたん | N4 L5 T5 C2 I3 — Blank could be filled with many adjectives (美味しい, 辛い, etc.), reducing recoverability. | teach only | yes |
| simple | この仕事は簡単ですか。 | Is this job simple? | かんたん | N4 L5 T5 C2 I1 — Generic template; blank could fit many adjectives like 楽しい or 難しい. | teach only | yes |
| special | 今日は特別な日です。 | Today is a special day. | とくべつ | N5 L5 T5 C3 I2 — Other adjectives like 大切な could also fit the blank. | teach only | yes |
| special | 特別なパーティーに行きませんか。 | Won't you go to a special party? | とくべつ | N4 L5 T5 C2 I3 — Many adjectives (楽しい, 素敵な, etc.) could fill the blank equally well. | teach only | yes |
| to be crowded | 電車がとても込んでいます。 | The train is very crowded. | こんで | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be crowded | コンサートは込むと思います。 | I think the concert will be crowded. | こむ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be crowded | 店は込んでいますか。 | Is the store crowded? | こんで | N5 L5 T5 C4 I2 | cloze+teach | yes |
| safety | この場所は安全です。 | This place is safe. | あんぜん | N5 L5 T5 C2 I1 — generic template sentence, many adjectives could fill blank | teach only | yes |
| safety | この道は安全ですか。 | Is this road safe? | あんぜん | N5 L5 T5 C2 I1 — generic template sentence, many adjectives could fill blank | teach only | yes |
| gasoline | ガソリンが無くなったから、駅まで歩きます。 | Since the gasoline ran out, I'll walk to the station. | がそりん | N5 L4 T5 C3 I4 | teach only | yes |
| gasoline | 車に乗る前にガソリンを入れましょう。 | Let's put in gasoline before getting in the car. | がそりん | N5 L4 T5 C3 I4 | teach only | yes |
| gasoline | 今日はガソリンがとても高いです。 | Gasoline is very expensive today. | がそりん | N5 L4 T5 C2 I3 — Blank could be filled by many nouns (price of X), low uniqueness | teach only | yes |
| driver | あの運転手はとても親切です。 | That driver is very kind. | うんてんしゅ | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (先生, 店員, etc.) | teach only | yes |
| driver | 運転手は毎朝何時に起きますか。 | What time does the driver get up every morning? | うんてんしゅ | N5 L5 T5 C2 I2 — Any person noun fits the blank equally well. | teach only | yes |
| driver | 運転手が忙しいから、私が荷物を運びます。 | Since the driver is busy, I'll carry the luggage. | うんてんしゅ | N5 L5 T5 C3 I3 — Context of carrying luggage gives a slight hint but other nouns could still fit. | teach only | yes |
| escalator | デパートのエスカレーターで三階へ上がります。 | I go up to the third floor by the department store escalator. | えすかれえたあ | N5 L5 T5 C3 I4 — エレベーター could also fit the blank, slightly reducing recoverability. | teach only | yes |
| escalator | 足が痛いから、エスカレーターに乗ります。 | Since my leg hurts, I'll take the escalator. | えすかれえたあ | N5 L5 T5 C3 I4 — エレベーター also plausible answer given the context. | teach only | yes |
| escalator | この駅にエスカレーターがありますか。 | Is there an escalator at this station? | えすかれえたあ | N5 L5 T5 C3 I3 — エレベーター could also fit, reducing uniqueness of the answer. | teach only | yes |
| driving | 毎日車の運転をします。 | I drive a car every day. | うんてん | N5 L5 T5 C3 I2 — Blank could also be filled by other car-related nouns like 掃除, slightly reducing uniqueness. | teach only | yes |
| driving | 疲れているから、今日は運転をしたくないです。 | Since I'm tired, I don't want to drive today. | うんてん | N5 L5 T5 C2 I3 — Context doesn't strongly force 運転; many activities could fit the blank. | teach only | yes |
| driving | 一緒に運転を習いませんか。 | Won't you learn to drive with me? | うんてん | N5 L5 T5 C2 I3 — Blank could be filled with many other skills (dance, cooking, etc.), reducing recoverability. | teach only | yes |
| vehicle | どの乗り物で会社へ行きますか。 | Which vehicle do you use to go to the office? | のりもの | N4 L5 T5 C2 I3 — Blank could be filled by any specific vehicle noun (電車, バス, 車), not uniquely 乗り物. | teach only | yes |
| vehicle | 荷物が重いから、乗り物で行きます。 | Since the luggage is heavy, I'll go by vehicle. | のりもの | N4 L5 T5 C2 I3 — Many transport words fit the blank equally well. | teach only | yes |
| traffic | 交通事故で病院へ行きました。 | I went to the hospital because of a traffic accident. | こうつう | N5 L5 T5 C5 I3 | cloze+teach | yes |
| traffic | この町の交通は便利ですか。 | Is the traffic (transportation) in this town convenient? | こうつう | N5 L5 T4 C4 I3 — EN gloss adds 'transportation' which slightly clarifies meaning beyond the Japanese. | cloze+teach | yes |
| express train or bus | 急行に乗れば早く着きます。 | If you take the express, you'll arrive quickly. | きゅうこう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| express train or bus | この電車は急行ですか。 | Is this train an express? | きゅうこう | N5 L5 T5 C3 I2 — other train types (普通, 快速) could also fit the blank | teach only | yes |
| express train or bus | 急行で行きましょう。 | Let's go by express. | きゅうこう | N5 L5 T5 C3 I2 — blank could be filled with other transport nouns | teach only | yes |
| if possible | なるべく野菜を食べましょう。 | Let's eat vegetables if possible. | なるべく | N5 L5 T5 C3 I3 — できるだけ could also fit the blank, slightly reducing recoverability. | teach only | yes |
| if possible | 忙しいから、なるべく早く帰ります。 | Since I'm busy, I'll go home as early as possible. | なるべく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| if possible | なるべく電話をかけないでください。 | Please don't call if possible. | なるべく | N5 L5 T5 C3 I3 — できるだけ or できれば could also fit the blank. | teach only | yes |
| use | この機械はあまり利用しません。 | I don't use this machine much. | りようしません | N4 L5 T5 C3 I2 — 使いません could also fit the blank, reducing recoverability. | teach only | yes |
| business to take care of | 用事があるから、今晩は行けません。 | I have something to do, so I can't go tonight. | ようじ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| business to take care of | 今日は用事がありません。 | I have nothing to do today. | ようじ | N4 L5 T5 C3 I2 — generic template sentence, other words like 予定 could also fit | teach only | yes |
| business to take care of | 明日、何か用事がありますか。 | Do you have anything to do tomorrow? | ようじ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| case | 忙しい場合は、外で食べましょう。 | If we're busy, let's eat out. | ばあい | N4 L4 T5 C3 I3 — とき could also fit the blank, reducing uniqueness | teach only | yes |
| case | 雨の場合、傘を持っていきます。 | In case of rain, I'll bring an umbrella. | ばあい | N5 L4 T5 C3 I3 — とき is an equally plausible alternative here | teach only | yes |
| case | 分からない場合は、聞いてください。 | If you don't understand, please ask. | ばあい | N5 L4 T5 C3 I3 — とき could also fill the blank naturally | teach only | yes |
| at last | やっと宿題が終わりました。 | I finally finished my homework. | やっと | N5 L5 T5 C3 I3 — もう could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| world | 世界には色々な国があります。 | There are various countries in the world. | せかい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| world | 世界で一番高い山はどこですか。 | Where is the tallest mountain in the world? | せかい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| world | いつか世界を旅行したいです。 | I want to travel the world someday. | せかい | N5 L5 T5 C3 I4 — Blank could plausibly be filled by other place names, slightly lowering recoverability. | teach only | yes |
| line | この線はまっすぐです。 | This line is straight. | せん | N4 L5 T5 C3 I2 — Blank could plausibly be other nouns like 道 or 棒, and sentence is a generic template. | teach only | yes |
| line | 紙に線を引いてください。 | Please draw a line on the paper. | せん | N5 L5 T5 C4 I3 — 線を引く is a strong idiomatic pairing, making recovery fairly reliable. | cloze+teach | yes |
| rural | 父の田舎は静かですから、好きです。 | My father's hometown is quiet, so I like it. | いなか | N4 L5 T5 C3 I3 — Blank could be filled with many nouns like 家 or 町, not uniquely inferable. | teach only | yes |
| rural | 今度、私の田舎へ遊びに来ませんか。 | Would you like to come visit my hometown sometime? | いなか | N5 L5 T5 C3 I4 — Natural invitation sentence, though blank could still be other places like 家 or 町. | teach only | yes |
| Buddhist temple | おじいさんは毎朝寺へ行きますから、元気です。 | My grandfather goes to the temple every morning, so he's healthy. | てら | N4 L4 T5 C2 I3 — Blank could be filled by many places (jimu, kōen, etc.), so 寺 isn't uniquely recoverable. | teach only | yes |
| Buddhist temple | あの寺を一緒に見に行きませんか。 | Shall we go see that temple together? | てら | N5 L4 T5 C2 I3 — Many nouns (映画, 景色, 美術館) fit the blank equally well. | teach only | yes |
| Buddhist temple | 寺の中で写真を撮ってはいけません。 | You must not take photos inside the temple. | てら | N5 L4 T5 C2 I3 — Rule about no photos applies to many places, not uniquely temples. | teach only | yes |
| venue | 会場はここから遠いですから、早く出ましょう。 | The venue is far from here, so let's leave early. | かいじょう | N5 L5 T5 C2 I3 — Blank could be filled by many place nouns (家、学校、駅) since sentence doesn't uniquely point to 'venue'. | teach only | yes |
| venue | 会場で一緒に写真を撮りませんか。 | Shall we take a photo together at the venue? | かいじょう | N5 L5 T5 C2 I3 — Any location noun fits equally well, low uniqueness for cloze. | teach only | yes |
| venue | 会場はまだ決まっていません。 | The venue hasn't been decided yet. | かいじょう | N5 L5 T5 C2 I3 — Could be replaced by 日程, 時間, 場所, etc., reducing uniqueness. | teach only | yes |
| Asia | アジアには色々な国があります。 | There are many countries in Asia. | あじあ | N5 L5 T5 C2 I2 — Blank could be filled by any continent/region name, not uniquely Asia. | teach only | yes |
| Asia | 彼はアジアの歴史に興味がありますから、よく本を読みます。 | He's interested in Asian history, so he often reads books. | あじあ | N5 L4 T5 C2 I3 — Any region or country name could fit the blank, so it's not uniquely recoverable as Asia. | teach only | yes |
| Asia | 私はまだアジアへ行ったことがありません。 | I have never been to Asia yet. | あじあ | N5 L4 T5 C2 I2 — Any place name could fill the blank; context doesn't force 'Asia' specifically. | teach only | yes |
| exhibition | 今度の展覧会を一緒に見に行きませんか。 | Would you like to go see the upcoming exhibition together? | てんらんかい | N5 L5 T5 C3 I4 — Blank could plausibly be other outings (movie, party), reducing certainty. | teach only | yes |
| exhibition | 友達が絵を出しますから、展覧会に行きます。 | My friend is exhibiting a painting, so I'm going to the exhibition. | てんらんかい | N5 L5 T5 C5 I5 | cloze+teach | yes |
| exhibition | 展覧会はまだ始まっていません。 | The exhibition hasn't started yet. | てんらんかい | N5 L5 T5 C2 I2 — Generic sentence; many nouns could fill the blank (movie, meeting, sale, etc.). | teach only | yes |
| neighborhood | 近所に公園がありますから、子供とよく行きます。 | There's a park in the neighborhood, so I often go there with my child. | きんじょ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| neighborhood | 近所のレストランで晩御飯を食べませんか。 | Shall we eat dinner at a restaurant in the neighborhood? | きんじょ | N5 L5 T5 C3 I4 — could also be 近くの/駅前の etc., slightly less forced | teach only | yes |
| neighborhood | この近所には店がありません。 | There are no shops in this neighborhood. | きんじょ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| newspaper company | 新聞社から電話がありました。 | There was a phone call from the newspaper company. | しんぶんしゃ | N5 L5 T5 C2 I3 — Blank could be filled by many nouns like 会社, 病院, 学校, etc. | teach only | yes |
| newspaper company | 兄は新聞社に勤めていますから、忙しいです。 | My older brother works at a newspaper company, so he's busy. | しんぶんしゃ | N5 L4 T5 C2 I3 — Blank could be filled by many workplace nouns (会社, 銀行, etc.), reducing recoverability. | teach only | yes |
| newspaper company | 父は新聞社では働いていません。 | My father doesn't work at a newspaper company. | しんぶんしゃ | N5 L4 T5 C2 I2 — Blank could be filled by many workplace nouns; sentence is fairly generic. | teach only | yes |
| the professor's office | 先生の研究室へ一緒に行きませんか。 | Shall we go to the professor's office together? | けんきゅうしつ | N5 L5 T5 C2 I3 — Blank could be many places (library, classroom), not uniquely 研究室. | teach only | yes |
| the professor's office | 質問がありますから、研究室へ行きます。 | I have a question, so I'm going to the professor's office. | けんきゅうしつ | N5 L5 T5 C3 I3 — Question could lead to teacher's room, library, or other locations. | teach only | yes |
| the professor's office | 先生は今、研究室にいません。 | The professor isn't in the office right now. | けんきゅうしつ | N5 L5 T5 C4 I3 — Strong context with 先生 makes 研究室 the most likely answer, though other rooms are possible. | cloze+teach | yes |
| exercise | 友達が来たら、公園で運動しましょう。 | If a friend comes over, let's exercise in the park. | うんどう | N4 L4 T5 C3 I3 | teach only | yes |
| exercise | 忙しいですから、今週は運動しません。 | Since I'm busy, I won't exercise this week. | うんどう | N4 L4 T5 C2 I2 — Many activities could fill the blank besides exercise, weak cloze context. | teach only | yes |
| strength | 荷物が重いですから、力が要ります。 | Since the luggage is heavy, we need strength. | ちから | N5 L5 T5 C4 I4 | cloze+teach | yes |
| feeling | 今日は気分がいいですから、公園で遊びましょう。 | I feel good today, so let's play in the park. | きぶん | N5 L5 T5 C2 I3 — 天気がいい would also fit the blank, reducing recoverability. | teach only | yes |
| feeling | 気分が悪いですから、早く寝ます。 | I feel sick, so I'll go to sleep early. | きぶん | N5 L5 T5 C3 I3 — 具合が悪い could also fit here. | teach only | yes |
| feeling | 電話で「気分はどうですか」とききました。 | On the phone, I asked 'how are you feeling?' | きぶん | N5 L5 T5 C3 I3 — 具合はどうですか is an equally natural alternative for the blank. | teach only | yes |
| to lose weight | たくさん運動したら、痩せると思います。 | If I exercise a lot, I think I'll lose weight. | やせる | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to lose weight | 母は最近痩せました。 | My mother has lost weight recently. | やせました | N5 L5 T5 C2 I2 — blank could be filled by many verbs (太る, 疲れる, etc.) without more context | teach only | yes |
| to lose weight | あまり食べませんから、痩せません。 | I don't eat much, so I won't lose weight. | やせません | N4 L5 T4 C3 I3 — logic is slightly odd (less eating usually causes weight loss, not prevents it) and blank could also fit 太る | teach only | yes |
| judo | 兄は毎週柔道を習っています。 | My older brother practices judo every week. | じゅうどう | N5 L5 T5 C2 I2 — Any sport/activity noun could fill the blank equally well. | teach only | yes |
| judo | 友達が遊びに来たら、一緒に柔道をしませんか。 | If a friend comes to play, shall we do judo together? | じゅうどう | N4 L5 T5 C2 I3 — Context doesn't force judo specifically; many activities fit. | teach only | yes |
| judo | 子供の時、柔道をしたことがあります。 | I have done judo when I was a child. | じゅうどう | N5 L5 T5 C2 I2 — Generic sentence; blank could be any sport. | teach only | yes |
| to get better | 薬を飲んだら、風邪が治ると思います。 | If I take medicine, I think my cold will get better. | なおる | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to get better | 電話で「もう病気は治りましたか」とききました。 | On the phone, I asked 'have you gotten better yet?' | なおりました | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to get better | 友達が来る前に、風邪はもう治りました。 | Before my friend came, my cold had already gotten better. | なおりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| fever | 熱がありますから、今日は休みます。 | Since I have a fever, I'll rest today. | ねつ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| fever | 子供の熱がとても高いです。 | My child's fever is very high. | ねつ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| fever | 友達に「熱はありますか」とききました。 | I asked my friend, 'Do you have a fever?' | ねつ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| knowing | 先生はその質問の答えをご存じですか。 | Do you know the answer to that question, teacher? | ごぞんじ | N5 L3 T5 C5 I4 | cloze+teach | yes |
| to praise | 先生は学生の作文を褒めました。 | The teacher praised the student's composition. | ほめ | N5 L5 T5 C3 I3 | teach only | yes |
| to praise | 友達は私の料理を褒めました。 | My friend praised my cooking. | ほめ | N5 L5 T5 C3 I3 | teach only | yes |
| seeing | 先生の作文を拝見しました。 | I humbly saw the teacher's composition. | はいけん | N4 L3 T4 C4 I3 — Slightly unusual to use humble 拝見 for viewing a teacher's work, but acceptable. | cloze+teach | yes |
| seeing | その手紙を拝見してもいいですか。 | May I see that letter? | はいけん | N5 L3 T5 C4 I3 | cloze+teach | yes |
| to bully | あの子は学校で友達をいじめます。 | That child bullies friends at school. | いじめ | N4 L5 T5 C3 I2 — Could also fit words like からかう, so blank isn't fully forced. | teach only | yes |
| to bully | 弟は猫をいじめてはいけません。 | My brother must not bully the cat. | いじめて | N4 L4 T5 C4 I3 | cloze+teach | yes |
| -- honorific expression for いう -- | 店員は何がおいしいとおっしゃいましたか。 | What did the clerk say was delicious? | おっしゃい | N4 L4 T5 C3 I3 | teach only | yes |
| -- honorific expression for いう -- | 先生は明日晴れるとおっしゃいました。 | The teacher said it will be sunny tomorrow. | おっしゃい | N5 L4 T5 C3 I3 — 言いました could also fit, reducing uniqueness of blank. | teach only | yes |
| an introduction | 新しい先生をクラスに紹介しました。 | I introduced the new teacher to the class. | しょうかい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| an introduction | 友達に趣味を紹介したいです。 | I want to introduce my hobby to my friend. | しょうかい | N5 L5 T5 C3 I3 — 説明 could also fit the blank. | teach only | yes |
| an introduction | 店員は新しい料理を紹介しました。 | The clerk introduced a new dish. | しょうかい | N5 L5 T5 C3 I3 — 説明/提案 could also fit the blank. | teach only | yes |
| consultation | 先生に宿題について相談しました。 | I consulted the teacher about the homework. | そうだん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| consultation | 友達に趣味について相談したいです。 | I want to consult my friend about my hobby. | そうだん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| consultation | 何を食べるか友達と相談しました。 | I discussed with my friend what to eat. | そうだん | N4 L4 T4 C4 I4 — embedded question 'か' is slightly above N4 ceiling | cloze+teach | yes |
| plans | 来週の予定を教えてください。 | Please tell me your plans for next week. | よてい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| plans | 今日の予定はもうありません。 | There are no more plans for today. | よてい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| this evening | 今夜は魚を作ります。 | I will cook fish this evening. | こんや | N4 L5 T5 C2 I2 — 魚を作る is a bit unusual phrasing (焼く/料理する more common); blank could be filled by many time words. | teach only | yes |
| this evening | 今夜は誰も来ません。 | No one is coming this evening. | こんや | N5 L5 T5 C2 I2 — Generic sentence; any time expression could fill the blank. | teach only | yes |
| this evening | 今夜のホテルを予約してください。 | Please book a hotel for tonight. | こんや | N5 L5 T5 C3 I3 — Hotel booking context slightly narrows options but other time words (明日の, 来週の) could still fit. | teach only | yes |
| daytime | 昼間はいつも仕事をしています。 | I always work during the daytime. | ひるま | N5 L5 T5 C2 I3 — Many time words (朝, 夜, 週末) could fill the blank equally well. | teach only | yes |
| daytime | 昼間は誰も家にいません。 | No one is home during the daytime. | ひるま | N5 L5 T5 C2 I3 — Other time words like 朝 or 夜 also fit the context. | teach only | yes |
| daytime | 昼間に電話してください。 | Please call during the daytime. | ひるま | N5 L5 T5 C2 I3 — Multiple time expressions could plausibly fill the blank. | teach only | yes |
| the week after next | 再来週、旅行に行きます。 | I'm going on a trip the week after next. | さらいしゅう | N5 L5 T5 C2 I3 — Any time word (来週, 来月, etc.) fits the blank equally well. | teach only | yes |
| the week after next | 再来週は忙しくないです。 | I'm not busy the week after next. | さらいしゅう | N5 L5 T5 C2 I2 — Generic template; many time words could fill the blank. | teach only | yes |
| the week after next | 再来週までに返事をください。 | Please give me your reply by the week after next. | さらいしゅう | N5 L5 T5 C2 I4 — More context (business reply) but still no clue forcing specifically 再来週 over other time words. | teach only | yes |
| recently | 最近、両親に会っていません。 | I haven't seen my parents recently. | さいきん | N5 L4 T5 C4 I4 | cloze+teach | yes |
| recently | 最近は忙しいです。 | I'm busy recently. | さいきん | N4 L3 T5 C3 I2 — Generic template sentence, could fit several time words. | teach only | yes |
| recently | 最近、電車が遅れています。 | The trains have been late recently. | さいきん | N5 L4 T5 C4 I4 | cloze+teach | yes |
| little while | しばらく、ここで待ってください。 | Please wait here for a while. | しばらく | N5 L5 T5 C3 I3 — Other words like ちょっと or少し could also fit the blank. | teach only | yes |
| little while | しばらく会っていません。 | I haven't seen you for a while. | しばらく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| little while | しばらく雨が続きました。 | The rain continued for a while. | しばらく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| last | これが最後の電車です。 | This is the last train. | さいご | N5 L5 T5 C4 I3 | cloze+teach | yes |
| last | 最後に名前を書いてください。 | Please write your name at the end. | さいご | N5 L5 T5 C3 I3 — 最初 (beginning) would also fit the blank, reducing recoverability. | teach only | yes |
| it has been a long time | 久しぶりに家族に会いました。 | I met my family after a long time. | ひさしぶり | N5 L5 T5 C4 I4 | cloze+teach | yes |
| it has been a long time | 久しぶりに料理を作りました。 | I cooked for the first time in a while. | ひさしぶり | N5 L5 T5 C4 I4 | cloze+teach | yes |
| it has been a long time | 久しぶりですね。 | It's been a long time, hasn't it. | ひさしぶり | N5 L5 T5 C5 I3 — Common but slightly generic greeting phrase. | cloze+teach | yes |
| custom | あなたの国にはどんな習慣がありますか。 | What kind of customs are there in your country? | しゅうかん | N5 L4 T5 C3 I4 — Blank could also be filled with words like 文化 or 習わし, reducing uniqueness. | teach only | yes |
| custom | 朝御飯を食べる習慣を続けたいです。 | I want to continue the custom of eating breakfast. | しゅうかん | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to think (about) | その問題についてよく考えてください。 | Please think carefully about that problem. | かんがえて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to think (about) | 将来のことを考えたことがありますか。 | Have you thought about your future? | かんがえた | N5 L5 T5 C3 I4 — other verbs like 話した/心配した could also fit the blank | teach only | yes |
| to think (about) | 今晩、友達に電話することを考えています。 | I'm thinking about calling my friend tonight. | かんがえて | N5 L5 T5 C3 I4 — 計画して or similar could also fit the blank | teach only | yes |
| freedom | 授業が終わったら、自由に遊んでもいいです。 | Once class is over, you can play freely. | じゆう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| freedom | 休みの日はいつも自由な時間があります。 | I always have free time on my days off. | じゆう | N5 L5 T5 C3 I3 — 暇な時間 could also fit, slightly reducing uniqueness | teach only | yes |
| freedom | もっと自由が欲しいと思います。 | I think I want more freedom. | じゆう | N5 L5 T5 C2 I3 — many nouns (お金、時間など) could fill the blank equally well | teach only | yes |
| way (of doing something) | 料理の仕方を習いたいです。 | I want to learn how to cook. | しかた | N4 L4 T5 C3 I3 — 作り方 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| way (of doing something) | 電話が壊れて、仕方がありません。 | The phone broke, and it can't be helped. | しかた | N5 L4 T5 C5 I3 | cloze+teach | yes |
| substitute | 兄の代わりに私が会議に出ます。 | I will attend the meeting instead of my older brother. | かわり | N5 L4 T5 C5 I3 | cloze+teach | yes |
| substitute | コーヒーの代わりに紅茶を飲みませんか。 | Won't you drink tea instead of coffee? | かわり | N5 L4 T5 C5 I3 | cloze+teach | yes |
| substitute | 先生の代わりに誰が授業をしますか。 | Who will teach the class instead of the teacher? | かわり | N5 L4 T5 C5 I3 | cloze+teach | yes |
| failure | 試験に失敗しました。 | I failed the exam. | しっぱい | N5 L5 T5 C3 I3 | teach only | yes |
| failure | 料理に失敗したことがありますか。 | Have you ever failed at cooking? | しっぱい | N5 L5 T5 C3 I3 | teach only | yes |
| failure | 彼は仕事で失敗すると思います。 | I think he will fail at work. | しっぱい | N4 L5 T5 C3 I3 | teach only | yes |
| concert | 来週のコンサートに行きませんか。 | Won't you go to next week's concert? | こんさーと | N5 L5 T5 C3 I3 — blank could be filled by other event nouns like パーティー | teach only | yes |
| concert | コンサートで新しい歌を聞きたいです。 | I want to hear new songs at the concert. | こんさーと | N5 L5 T5 C3 I3 — context suggests but doesn't force コンサート specifically | teach only | yes |
| concert | コンサートは何時に始まりますか。 | What time does the concert start? | こんさーと | N4 L5 T5 C2 I2 — very generic; many event nouns fit the blank | teach only | yes |
| experience | 外国で働いた経験がありますか。 | Do you have experience working abroad? | けいけん | N5 L4 T5 C5 I4 | cloze+teach | yes |
| experience | いい経験になると思います。 | I think it will become a good experience. | けいけん | N5 L4 T5 C2 I3 — blank could be many nouns (思い出, 結果, etc.), not uniquely 経験 | teach only | yes |
| experience | もっと経験が欲しいです。 | I want more experience. | けいけん | N5 L3 T5 C2 I2 — blank could be filled with many nouns (お金, 時間, etc.) | teach only | yes |
| to pick up | 公園でお金を拾いました。 | I picked up money at the park. | ひろいました | N5 L5 T5 C3 I3 — 見つけました could also fit the blank. | teach only | yes |
| to pick up | 道でごみを拾いますか。 | Do you pick up trash on the road? | ひろいます | N5 L5 T5 C2 I3 — 捨てます or 拾います both plausible for ごみを___、ambiguous. | teach only | yes |
| to pick up | 落とした鍵を拾いたいです。 | I want to pick up the key I dropped. | ひろいたい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to compare | 兄と背を比べました。 | I compared my height with my older brother's. | くらべました | N4 L5 T5 C3 I3 — 背を測る/比べる both plausible, slightly ambiguous blank | teach only | yes |
| to compare | 今日と昨日の天気を比べますか。 | Are you comparing today's weather with yesterday's? | くらべます | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to compare | 二つのテストの点を比べたいです。 | I want to compare the scores of the two tests. | くらべたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to bake | 友達が来る前にケーキを焼きました。 | I baked a cake before my friend came. | やきました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to bake | 今度の休みに魚を焼きたいです。 | I want to grill fish during the next holiday. | やきたい | N5 L5 T5 C3 I4 — 食べたい/買いたい could also fit the blank, slightly reducing recoverability. | teach only | yes |
| to bake | 明日パンを焼きますか。 | Will you bake bread tomorrow? | やきます | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to build | 友達が新しい家を建てました。 | My friend built a new house. | たてました | N5 L5 T5 C3 I3 — 買いました/建設しました could also fit the blank grammatically. | teach only | yes |
| to build | いつか自分の家を建てたいです。 | Someday I want to build my own house. | たてたい | N5 L5 T5 C3 I3 — 買いたい/持ちたい could also fit contextually. | teach only | yes |
| to build | あの会社はビルを建てますか。 | Is that company going to build a building? | たてます | N5 L5 T5 C3 I3 — 建設しますか/買いますか could also fit the blank. | teach only | yes |
| to exceed | もう十二時を過ぎました。 | It's already past twelve o'clock. | すぎました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to exceed | 台風が過ぎたら、晴れると思います。 | I think it will clear up once the typhoon passes. | すぎたら | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to exceed | 駅をもう過ぎましたか。 | Have we already passed the station? | すぎました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to end | 彼はたばこを止めました。 | He quit smoking. | やめました | N5 L5 T5 C3 I3 — Blank could also be filled by 吸いました etc., so not fully unique. | teach only | yes |
| to end | 仕事を止めたいです。 | I want to quit my job. | やめたい | N5 L5 T5 C3 I2 — Other verbs like 続けたい could also fit the blank. | teach only | yes |
| to end | 学校を止めますか。 | Are you going to quit school? | やめます | N4 L5 T5 C3 I2 — Generic question; several verbs (行きます, 卒業します) could plausibly fill the blank. | teach only | yes |
| to be broken | 新しい時計が壊れました。 | My new watch broke. | こわれました | N5 L5 T5 C3 I2 — Other verbs like 止まる could also fit the blank. | teach only | yes |
| to be broken | 雨で傘が壊れましたか。 | Did your umbrella break in the rain? | こわれました | N5 L5 T5 C3 I3 — Blank could also be filled by 濡れる or similar verbs. | teach only | yes |
| to be broken | 自転車が壊れたら、困ります。 | If my bicycle breaks, I'll be in trouble. | こわれたら | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to wake up | 朝六時に弟を起こしました。 | I woke my younger brother up at six in the morning. | おこしました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to wake up | 明日の朝、七時に起こしますか。 | Will you wake me up at seven tomorrow morning? | おこします | N4 L5 T4 C3 I3 — Lacks explicit object (私を), making the blank slightly less constrained though context still points to waking up. | teach only | yes |
| war | 戦争の映画を見ました。 | I watched a war movie. | せんそう | N5 L5 T5 C2 I2 — Many nouns could fill the blank before 映画. | teach only | yes |
| war | 戦争はよくないと思います。 | I think war is not good. | せんそう | N5 L5 T5 C2 I3 — Blank could be filled by many abstract nouns (喧嘩, 暴力, etc.). | teach only | yes |
| never | 彼は決して仕事を休みません。 | He never takes a day off from work. | けっして | N5 L3 T5 C3 I3 — 絶対に could also fill the blank, reducing uniqueness. | teach only | yes |
| never | あの店には決して行きません。 | I never go to that store. | けっして | N5 L3 T5 C3 I3 — 絶対に could also fit the blank. | teach only | yes |
| communication | 会社から連絡がありました。 | There was contact from the company. | れんらく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| communication | 電車が遅れたから、連絡します。 | Because the train is late, I will contact you. | れんらくします | N5 L4 T5 C3 I4 — 電話 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| thing(s) | 泳ぐ事が好きです。 | I like swimming. | こと | N4 L5 T5 C2 I2 — の could also fill the blank here, reducing uniqueness. | teach only | yes |
| thing(s) | そんな事は知りません。 | I don't know such a thing. | こと | N5 L5 T5 C4 I3 | cloze+teach | yes |
| match | 明日、試合があります。 | There is a match tomorrow. | しあい | N5 L5 T5 C2 I2 — Many nouns could fit the blank (会議, パーティー, etc.). | teach only | yes |
| match | 雨で試合ができませんでした。 | We couldn't have the match because of rain. | しあい | N5 L5 T5 C3 I3 — Rain context narrows options somewhat but other outdoor events could fit. | teach only | yes |
| match | 試合を見に来てください。 | Please come watch the match. | しあい | N5 L5 T5 C2 I2 — Generic phrase; many nouns (映画, 芝居, etc.) could fill the blank. | teach only | yes |
| end | 話はまだ終わりではありません。 | The story is not the end yet. | おわり | N5 L5 T4 C5 I4 | cloze+teach | yes |
| end | 映画の終わりが悲しかったから、泣きました。 | Because the end of the movie was sad, I cried. | おわり | N5 L5 T5 C5 I4 | cloze+teach | yes |
| expression of gratitude | お礼を言ってください。 | Please say thank you. | おれい | N5 L5 T4 C2 I2 — Blank could be filled by many words (name, opinion, etc.), low recoverability. | teach only | yes |
| expression of gratitude | 先生にお礼の手紙を書きました。 | I wrote a thank-you letter to my teacher. | おれい | N5 L5 T5 C3 I3 — Some other words (お詫び, お祝い) could also fit the blank. | teach only | yes |
| odor | この料理はいい匂いがします。 | This dish smells good. | におい | N5 L5 T5 C3 I3 — 味 could also fit the blank, reducing uniqueness | teach only | yes |
| odor | この魚は匂いがしません。 | This fish doesn't smell. | におい | N5 L5 T5 C3 I3 — 味 could also fit the blank, reducing uniqueness | teach only | yes |
| odor | 八百屋で野菜の匂いをかぎました。 | I smelled the vegetables at the greengrocer. | におい | N5 L4 T5 C5 I4 — かぐ strongly forces 匂い as the answer | cloze+teach | yes |
| to get dark | 秋は早く日が暮れますね。 | In autumn, it gets dark early, doesn't it? | くれます | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to get dark | 冬はいつ日が暮れますか。 | When does it get dark in winter? | くれます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to get dark | 日が暮れたから、早く帰りましょう。 | It's getting dark, so let's go home quickly. | くれた | N5 L5 T4 C4 I4 — EN uses present progressive but Japanese is past tense (暮れた). | cloze+teach | yes |
| sound | 朝、外で大きい音がしました。 | This morning, there was a loud sound outside. | おと | N5 L5 T5 C4 I4 | cloze+teach | yes |
| sound | あの音は何ですか。 | What is that sound? | おと | N4 L5 T5 C3 I3 — Generic template, blank could be filled by many nouns without context. | teach only | yes |
| sound | 音が大きいから、静かにしてください。 | The sound is loud, so please be quiet. | おと | N5 L5 T5 C4 I4 | cloze+teach | yes |
| island | あの島には誰も住んでいません。 | No one lives on that island. | しま | N5 L5 T5 C5 I3 | cloze+teach | yes |
| island | 夏休みに島へ旅行しませんか。 | Shall we travel to the island during summer vacation? | しま | N5 L5 T5 C5 I4 | cloze+teach | yes |
| island | 舟でその島まで行けますか。 | Can you go to that island by boat? | しま | N4 L4 T5 C5 I4 — 舟 is an uncommon kanji choice; 船 would be more natural/expected. | cloze+teach | yes |
| weather forecast | 今朝、天気予報を見ましたか。 | Did you watch the weather forecast this morning? | てんきよほう | N5 L5 T5 C3 I3 — Blank could also be filled by ニュース or similar; less forcing. | teach only | yes |
| weather forecast | 天気予報で明日は雨だと言っていました。 | The weather forecast said it will rain tomorrow. | てんきよほう | N5 L4 T5 C5 I4 | cloze+teach | yes |
| weather forecast | 出かける前に天気予報を見ましょう。 | Let's check the weather forecast before we go out. | てんきよほう | N5 L4 T5 C3 I3 — Blank could plausibly be filled by other nouns like ニュース or 空. | teach only | yes |
| branch | 風で木の枝が折れました。 | A branch broke because of the wind. | えだ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| branch | あの枝に小鳥がいます。 | There is a little bird on that branch. | えだ | N5 L5 T5 C2 I3 — Blank could be filled by many nouns like 木 or 屋根. | teach only | yes |
| branch | 枝を切ってもいいですか。 | May I cut the branch? | えだ | N5 L5 T5 C1 I2 — Very generic; many objects could fill the blank, e.g. 髪, 紙, 木. | teach only | yes |
| to grow cold | 夜は体が冷えますから、上着を着てください。 | Your body gets cold at night, so please wear a jacket. | ひえます | N5 L4 T4 C3 I4 — Blank could plausibly be filled by other words like 寒くなり, slightly reducing recoverability; also translation says 'gets cold' but context suggests future/general which is fine. | teach only | yes |
| to get wet | 雨で服が濡れました。 | My clothes got wet from the rain. | ぬれました | N5 L5 T5 C3 I3 — 服が＿ました could also be 汚れました, slightly reducing recoverability | teach only | yes |
| to get wet | 傘を持っていかないと濡れますよ。 | If you don't take an umbrella, you'll get wet. | ぬれます | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to get wet | 髪が濡れているから、風邪を引きますよ。 | Your hair is wet, so you'll catch a cold. | ぬれている | N5 L4 T5 C3 I4 — 髪が＿ている could also fit 汚れている or 乱れている | teach only | yes |
| insect | 夏は虫が多いです。 | There are many insects in summer. | むし | N5 L5 T5 C3 I3 — Blank could plausibly be other nouns (人, 花) that fit 夏は…が多い. | teach only | yes |
| insect | 庭に虫がいますね。 | There is an insect in the garden, isn't there? | むし | N5 L5 T5 C2 I3 — Many nouns (猫, 鳥, 人) could fill the blank in this generic context. | teach only | yes |
| insect | 虫が嫌いですか。 | Do you dislike insects? | むし | N5 L5 T5 C2 I2 — Very generic template; blank could be almost any disliked noun. | teach only | yes |
| to remain | 木曜日の授業の後、教室に誰か残っていました。 | Someone remained in the classroom after Thursday's class. | のこって | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to remain | 電話で、宿題がまだ残っていると言いました。 | On the phone, he said that homework still remained. | のこって | N4 L5 T5 C5 I3 | cloze+teach | yes |
| to stand (something) up | 友達が来る前に、旅行の計画を立てましょう。 | Let's make travel plans before our friend comes. | たてましょう | N5 L3 T5 C3 I3 — 計画を立てる is idiomatic but other verbs like 決める/練る could also fit the blank. | teach only | yes |
| to stand (something) up | 電話で来月の予定を立てませんか。 | Shall we make plans for next month over the phone? | たてません | N5 L3 T5 C3 I3 — 予定を立てる collocation; other verbs like 決める could also fill blank. | teach only | yes |
| to soak | 料理をする時、野菜を水に漬けます。 | When cooking, I soak the vegetables in water. | つけます | N4 L5 T5 C3 I3 — 入れる/つける could both fit here, slightly ambiguous | teach only | yes |
| to soak | 母は魚を醤油に漬けます。 | My mother soaks fish in soy sauce. | つけます | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to increase | 最近、学生が増えました。 | Recently, the number of students has increased. | ふえました | N5 L5 T5 C3 I3 — 減りました/変わりました could also fit the blank, slightly reducing recoverability. | teach only | yes |
| to increase | 友達が増えたら楽しいです。 | It would be fun if my friends increased. | ふえたら | N5 L5 T5 C3 I3 — Other verbs (来たら, 会えたら) could plausibly fill the blank in this context. | teach only | yes |
| to choose | 友達と一緒に映画を選びましょう。 | Let's choose a movie together with our friend. | えらびましょう | N5 L5 T5 C3 I3 — 見ましょう could also fit the blank, weakening recoverability | teach only | yes |
| to choose | 授業でどの本を選びますか。 | Which book will you choose in class? | えらびます | N5 L5 T5 C3 I3 — 読みます could also plausibly fill the blank | teach only | yes |
| to start doing ~ | 子供が泣きだしました。 | The child suddenly started crying. | だしました | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to start doing ~ | 授業中に笑いだしたことがありますか。 | Have you ever started laughing during class? | だした | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to start doing ~ | 外で雨が降りだしたら、教えてください。 | If it starts raining outside, please tell me. | だしたら | N5 L4 T5 C5 I3 | cloze+teach | yes |
| to deliver | 友達に手紙を届けます。 | I will deliver a letter to my friend. | とどけます | N5 L5 T5 C2 I3 — Blank could equally be 送ります/書きます, so it's not uniquely 届けます. | teach only | yes |
| to deliver | 忘れ物を学校に届けましょうか。 | Shall I deliver the lost item to the school? | とどけましょう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to recall | 電話番号を思い出したいです。 | I want to recall the phone number. | おもいだしたい | N5 L5 T5 C3 I2 — 覚えたい could also fit the blank, reducing uniqueness. | teach only | yes |
| to recall | 授業で習った言葉を思い出しますか。 | Do you recall the words you learned in class? | おもいだします | N5 L5 T5 C3 I3 — 覚えていますか is also plausible in this context. | teach only | yes |
| to copy (transitive) | 授業でノートを写しました。 | I copied the notes during class. | うつしました | N5 L5 T5 C3 I3 — Blank could also be filled with 書き/取り, weakening uniqueness. | teach only | yes |
| to copy (transitive) | テストの答えを写したいです。 | I want to copy the test answers. | うつしたい | N5 L5 T5 C3 I4 — Could also be 見たい or 知りたい, so not fully unique. | teach only | yes |
| to copy (transitive) | 友達のノートを写してもいいですか。 | May I copy my friend's notes? | うつして | N5 L5 T5 C3 I3 — Could also be 借りて or 見て, reducing cloze uniqueness. | teach only | yes |
| to fish | 土曜日に川で魚を釣ります。 | I will fish in the river on Saturday. | つります | N5 L5 T5 C3 I3 — Blank could also fit 食べます/見ます/買います, not uniquely 釣ります. | teach only | yes |
| to fish | 昔、海で魚を釣ったことがあります。 | I have fished in the sea before. | つった | N5 L5 T5 C3 I3 — Context allows other verbs like 食べた/買った, weakening uniqueness of 釣った. | teach only | yes |
| to fish | 来週、湖で魚を釣りたいです。 | I want to fish in the lake next week. | つりたい | N5 L5 T5 C3 I3 — Similar ambiguity; 釣りたい is plausible but not forced by context alone. | teach only | yes |
| to hit | 頭を打って、痛かったです。 | I hit my head and it hurt. | うって | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to continue doing ~ | 毎朝、運動を続けています。 | I keep exercising every morning. | つづけています | N5 L5 T5 C2 I3 — Blank could be filled with many verbs like します/しています, not uniquely 続けています | teach only | yes |
| to continue doing ~ | 忙しくても、仕事を続けなければなりません。 | Even if I'm busy, I must continue working. | つづけなければなりません | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to continue doing ~ | 来年も英語を続けたいです。 | I want to continue English next year too. | つづけたい | N5 L4 T5 C4 I4 — も strongly hints at 続ける, good cue | cloze+teach | yes |
| to change | 旅行の予定を変えました。 | I changed the travel plans. | かえました | N5 L5 T5 C3 I3 — other verbs like 決めました could also fit context | teach only | yes |
| to change | 明日の会議の時間を変えたいです。 | I want to change tomorrow's meeting time. | かえたい | N5 L5 T5 C3 I3 — 決めたい or 確認したい could also fit | teach only | yes |
| to change | 遅れそうなので、電車の時間を変えなければなりません。 | Since I might be late, I have to change the train time. | かえなければなりません | N4 L4 T5 C4 I4 — slightly unusual phrasing 電車の時間を変える but context strongly implies changing time due to lateness | cloze+teach | yes |
| to change (intransitive) | 旅行中に天気が急に変わりました。 | The weather suddenly changed during the trip. | かわりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to change (intransitive) | 彼の意見が変わったと思います。 | I think his opinion has changed. | かわった | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other verbs like 変化した or 悪くなった given context | teach only | yes |
| tatami mat | この部屋には畳があります。 | There is a tatami mat in this room. | たたみ | N4 L5 T4 C1 I2 — Blank could be many nouns (椅子, テーブル, etc.), so recoverability is low. | teach only | yes |
| tatami mat | 畳の上で寝たことがあります。 | I have slept on a tatami mat before. | たたみ | N5 L5 T5 C2 I4 — Many things could fill the blank (床, ソファ, etc.), context doesn't force 畳 specifically. | teach only | yes |
| tatami mat | この畳はとても古いです。 | This tatami mat is very old. | たたみ | N5 L5 T5 C2 I3 — Blank could be replaced with many nouns (家, 椅子, etc.); context alone doesn't force tatami. | teach only | yes |
| goods | 昨日、店で品物を買いました。 | Yesterday I bought goods at the store. | しなもの | N4 L5 T5 C2 I2 — Blank could be filled with many nouns (本、服など). | teach only | yes |
| goods | その品物を片付けましょう。 | Let's put away those goods. | しなもの | N4 L5 T5 C2 I2 — Many nouns could fit the blank (荷物、机など). | teach only | yes |
| doll | 娘に人形をあげたいです。 | I want to give my daughter a doll. | にんぎょう | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (any gift), not uniquely 'doll'. | teach only | yes |
| doll | 人形を買えば、娘が喜びます。 | If I buy a doll, my daughter will be happy. | にんぎょう | N4 L4 T5 C2 I3 — Context doesn't force 'doll'; any purchased item could make daughter happy. | teach only | yes |
| doll | 娘は人形が欲しいと言いました。 | My daughter said she wants a doll. | にんぎょう | N5 L4 T5 C2 I3 — Blank is under-constrained; many desired items would fit grammatically. | teach only | yes |
| wall | この部屋の壁は何色ですか。 | What color is the wall of this room? | かべ | N5 L5 T5 C3 I3 — blank could also fit floor, curtain, etc., so not fully forced | teach only | yes |
| wall | 壁には写真を貼りませんでした。 | I didn't put a photo on the wall. | かべ | N5 L5 T5 C3 I3 — many surfaces could take a photo, reducing uniqueness | teach only | yes |
| wall | 壁が汚れたので、紙を貼りました。 | Since the wall got dirty, I put up paper. | かべ | N5 L5 T5 C3 I3 — could also be desk, floor, etc. getting dirty and papered over | teach only | yes |
| water service | 水道の水を飲んでもいいですか。 | May I drink the tap water? | すいどう | N5 L4 T5 C4 I4 | cloze+teach | yes |
| water service | 水道を止めてください。 | Please turn off the water. | すいどう | N4 L4 T4 C2 I3 — Blank could be filled by 電気, ガス, 水 etc., not uniquely 水道. | teach only | yes |
| bell | ベルが鳴ったら、教えてください。 | If the bell rings, please tell me. | べる | N5 L5 T5 C3 I3 — 電話 or アラーム could also fit '鳴ったら', slightly weakening cloze uniqueness. | teach only | yes |
| bell | ベルを押したけれど、鳴りませんでした。 | I pressed the bell, but it didn't ring. | べる | N5 L5 T5 C4 I4 — 押す+鳴る combination strongly implies bell, good cloze context. | cloze+teach | yes |
| screen | このスクリーンで映画を見ることができます。 | You can watch movies on this screen. | すくりいん | N5 L5 T5 C3 I4 — could also be テレビ or 黒板, so blank is somewhat guessable but not fully forced | teach only | yes |
| screen | 授業でスクリーンを見たり、ノートを書いたりします。 | In class, we do things like watch the screen and write notes. | すくりいん | N5 L4 T5 C3 I4 — blank could also be 黒板 or noun for board, reducing uniqueness | teach only | yes |
| screen | 新しいスクリーンはどこにありますか。 | Where is the new screen? | すくりいん | N4 L5 T5 C1 I1 — generic template, blank could be almost any noun | teach only | yes |
| to be visible | 目が悪くて遠くの物が見えません。 | My eyes are bad, so I can't see things far away. | みえません | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to be visible | あそこから駅が見えますか。 | Can you see the station from over there? | みえます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to break | 階段から落ちて足が折れました。 | I fell down the stairs and broke my leg. | おれました | N5 L4 T5 C3 I3 | teach only | yes |
| to break | もし強く押したら、この枝は折れます。 | If you push hard, this branch will break. | おれます | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to break | この鉛筆は折れやすいです。 | This pencil breaks easily. | おれやすい | N5 L4 T5 C5 I3 | cloze+teach | yes |
| to send | 友達に手紙を送りました。 | I sent a letter to my friend. | おくりました | N5 L5 T5 C3 I3 — 書きました could also fit grammatically, slightly reducing uniqueness. | teach only | yes |
| to send | 明日荷物を送りたいです。 | I want to send the package tomorrow. | おくりたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to send | 郵便局から荷物を送りましたか。 | Did you send the package from the post office? | おくりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to give | 誕生日に妹に本をあげました。 | I gave my little sister a book on her birthday. | あげました | N5 L5 T5 C3 I3 — Other verbs like 買いました/送りました could also fit the blank. | teach only | yes |
| to give | 友達に花をあげたいです。 | I want to give my friend flowers. | あげたい | N5 L5 T5 C3 I3 — 送りたい or 見せたい could also fit the blank grammatically. | teach only | yes |
| to lose | 試合に負けました。 | We lost the match. | まけました | N5 L5 T5 C3 I3 — Other verbs like 出ました could also fit the blank. | teach only | yes |
| to lose | 次の試合には負けたくないです。 | I don't want to lose the next match. | まけたくない | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other verbs like 出たくない. | teach only | yes |
| to lose | あなたは彼に負けると思いますか。 | Do you think you will lose to him? | まける | N5 L4 T5 C4 I4 — に彼 context strongly suggests 負ける but a few other verbs could technically fit. | cloze+teach | yes |
| to discover | 財布を駅で見つけました。 | I found my wallet at the station. | みつけました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to discover | 新しいアルバイトを見つけたいです。 | I want to find a new part-time job. | みつけたい | N5 L5 T5 C3 I3 — could also be 始めたい/探したい, slightly reduces recoverability | teach only | yes |
| to discover | 鍵はどこで見つけましたか。 | Where did you find the key? | みつけました | N5 L5 T5 C3 I3 — could also fit 買いました/なくしました depending on context | teach only | yes |
| to grow accustomed to | 新しい仕事にもう慣れました。 | I've already gotten used to the new job. | なれました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to grow accustomed to | 新しい生活に慣れたいです。 | I want to get used to my new life. | なれたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to grow accustomed to | 新しい国に慣れましたか。 | Have you gotten used to the new country? | なれました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to try one's best | 明日の試合、頑張ってください。 | Please do your best in tomorrow's match. | がんばって | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to try one's best | 彼は仕事を頑張りました。 | He did his best at work. | がんばりました | N4 L5 T4 C2 I2 — generic sentence, other verbs like 完成させました or 続けました could also fit the blank | teach only | yes |
| breakdown | 会社のコンピュータが故障しました。 | The company's computer broke down. | こしょうしました | N5 L5 T5 C3 I3 — 壊れました could also fit the blank, reducing certainty. | teach only | yes |
| breakdown | 車が故障して、動きません。 | The car broke down and won't move. | こしょうして | N5 L5 T5 C4 I4 — Extra context (動きません) strengthens the cloze answer. | cloze+teach | yes |
| to take (an examination, interview, etc.) | 来月、大学の試験を受けます。 | I will take the university exam next month. | うけます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to take (an examination, interview, etc.) | 病院で注射を受けました。 | I received an injection at the hospital. | うけました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to take (an examination, interview, etc.) | この試験を受けてください。 | Please take this exam. | うけて | N5 L5 T5 C4 I2 — generic template phrasing | cloze+teach | yes |
| to make a mistake | 会議で名前を間違えました。 | I got the name wrong at the meeting. | まちがえました | N5 L5 T5 C3 I3 — Blank could also be filled by 呼びました/言いました etc., reducing uniqueness. | teach only | yes |
| to make a mistake | 漢字をよく間違えます。 | I often make mistakes with kanji. | まちがえます | N5 L5 T5 C3 I3 — Other verbs like 忘れます could also fit the blank. | teach only | yes |
| to make a mistake | 番号を間違えないでください。 | Please don't get the number wrong. | まちがえないで | N5 L5 T5 C3 I3 — 忘れないで could also work, slightly reducing recoverability. | teach only | yes |
| to be sufficient | 砂糖はもう足りますか。 | Is there enough sugar already? | たります | N4 L5 T4 C4 I3 — 'もう' more like 'now/already enough' than 'already'; slightly loose translation. | cloze+teach | yes |
| to carry out | 明日、会議を行います。 | We will hold a meeting tomorrow. | おこないます | N5 L5 T5 C2 I3 — する could also fill the blank naturally, reducing recoverability. | teach only | yes |
| to carry out | 昨日、試験を行いました。 | The exam was held yesterday. | おこないました | N4 L5 T4 C2 I3 — する fits equally well in the blank; translation shifts to passive voice not present in Japanese. | teach only | yes |
| to disappear | レストランで塩が無くなりました。 | The salt ran out at the restaurant. | なくなりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to disappear | 春になると、雪が無くなります。 | When spring comes, the snow disappears. | なくなります | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to disappear | 会議室の紙はもう無くなりましたか。 | Has the paper in the meeting room already run out? | なくなりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| prepare | 店員は料理の準備をしています。 | The staff is preparing the food. | じゅんび | N4 L5 T5 C3 I3 — 用意 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| prepare | 会議の準備をしてください。 | Please prepare for the meeting. | じゅんび | N5 L5 T5 C3 I3 — 用意 could also work here. | teach only | yes |
| prepare | 旅行の準備をしました。 | I prepared for the trip. | じゅんび | N5 L5 T5 C4 I3 — 旅行の準備 is a very idiomatic collocation, making the blank fairly predictable. | cloze+teach | yes |
| junior high school pupil | 家から近いですから、中学校へ歩いて行きます。 | Because it's close to my house, I walk to junior high school. | ちゅうがっこう | N5 L5 T5 C2 I3 — Blank could be filled by many nouns like 学校, 会社, 駅, etc.; target gloss 'junior high school pupil' is inaccurate (word means 'junior high school'). | teach only | yes |
| junior high school pupil | この町に中学校はありません。 | There is no junior high school in this town. | ちゅうがっこう | N5 L5 T5 C2 I2 — Generic template sentence; blank could fit many facility nouns. | teach only | yes |
| junior high school pupil | 中学校がどこにあるか教えてください。 | Please tell me where the junior high school is. | ちゅうがっこう | N5 L5 T5 C2 I2 — Blank could be replaced by many place nouns (駅, 病院, etc.), reducing recoverability. | teach only | yes |
| part-time job | お金が要りますから、アルバイトをしています。 | Because I need money, I'm doing a part-time job. | あるばいと | N5 L5 T5 C4 I3 | cloze+teach | yes |
| part-time job | 日曜日はアルバイトをしません。 | I don't do my part-time job on Sundays. | あるばいと | N5 L5 T4 C2 I2 — Blank could be many activities (勉強, 仕事, 買い物), not uniquely アルバイト. | teach only | yes |
| part-time job | レストランでアルバイトをしていますか。 | Are you doing a part-time job at the restaurant? | あるばいと | N5 L5 T5 C3 I3 — Restaurant context helps but blank could still be 食事 or 仕事. | teach only | yes |
| attendance | 病気でしたから、授業に出席できませんでした。 | Because I was sick, I couldn't attend class. | しゅっせき | N5 L4 T5 C4 I3 | cloze+teach | yes |
| attendance | 彼は会議に出席しませんでした。 | He did not attend the meeting. | しゅっせき | N5 L4 T5 C3 I2 — 参加 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| attendance | 明日の会議に出席してください。 | Please attend tomorrow's meeting. | しゅっせき | N5 L4 T5 C3 I2 — 参加 or 出る could also fit, reducing uniqueness. | teach only | yes |
| president of a company | 社長はとても忙しいです。 | The company president is very busy. | しゃちょう | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (先生, 部長, 母, etc.), not uniquely 社長. | teach only | yes |
| president of a company | 社長は今日会社にいません。 | The president is not at the office today. | しゃちょう | N5 L5 T5 C2 I3 — Many people/roles could fit the blank besides 社長. | teach only | yes |
| president of a company | 社長に会ったことがありますか。 | Have you ever met the president? | しゃちょう | N5 L5 T5 C2 I3 — Blank works with almost any person noun, not distinctly 社長. | teach only | yes |
| geography | 国の地理を教えてください。 | Please teach me the country's geography. | ちり | N4 L4 T4 C4 I3 | cloze+teach | yes |
| elementary school | 弟は小学校に通っています。 | My younger brother goes to elementary school. | しょうがっこう | N5 L5 T5 C2 I3 — many nouns could fill the blank (company, hospital, etc.), context doesn't force 小学校 | teach only | yes |
| elementary school | 近くに小学校はありません。 | There is no elementary school nearby. | しょうがっこう | N5 L5 T5 C2 I2 — generic sentence; many nouns fit the blank equally well | teach only | yes |
| elementary school | 娘は六歳ですから、小学校に入ります。 | Because my daughter is six, she's entering elementary school. | しょうがっこう | N5 L4 T5 C5 I4 — age six strongly cues elementary school, making the blank clearly recoverable | cloze+teach | yes |
| grammar | 英語の文法が分かりません。 | I don't understand English grammar. | ぶんぽう | N5 L5 T5 C3 I3 | teach only | yes |
| grammar | この文法を教えてください。 | Please teach me this grammar. | ぶんぽう | N4 L5 T5 C2 I2 — Blank could be filled by many nouns (漢字, 言葉, etc.), low recoverability; generic template sentence. | teach only | yes |
| dentist | 明日、歯医者へ行きます。 | Tomorrow, I'm going to the dentist. | はいしゃ | N5 L5 T5 C2 I3 — Blank could be many destinations (school, hospital, etc.), low recoverability. | teach only | yes |
| dentist | 歯が痛いですから、歯医者へ行きます。 | Because my tooth hurts, I'm going to the dentist. | はいしゃ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| dentist | 歯医者は好きじゃありません。 | I don't like the dentist. | はいしゃ | N5 L5 T5 C2 I3 — Blank could be many nouns (dog, vegetable, etc.), weak forcing context. | teach only | yes |
| surroundings | 家の周りに木が多いです。 | There are many trees around the house. | まわり | N5 L5 T5 C3 I3 — Other location nouns (近く, 前, 中) could also fill the blank. | teach only | yes |
| surroundings | 学校の周りに何がありますか。 | What is around the school? | まわり | N5 L5 T5 C3 I3 — Blank could plausibly be filled by 近く or 中 as well. | teach only | yes |
| surroundings | 公園の周りを一緒に歩きませんか。 | Shall we walk around the park together? | まわり | N5 L5 T5 C4 I4 | cloze+teach | yes |
| auditorium | 講堂でパーティーがあります。 | There is a party in the auditorium. | こうどう | N5 L5 T5 C2 I2 — Blank could be filled by many location nouns (公園, 体育館, etc.), reducing recoverability. | teach only | yes |
| auditorium | 講堂はどこにありますか。 | Where is the auditorium? | こうどう | N5 L5 T5 C1 I1 — Generic template sentence; almost any place noun fits the blank. | teach only | yes |
| auditorium | 講堂で歌を歌いたいです。 | I want to sing a song in the auditorium. | こうどう | N5 L5 T5 C2 I3 — Blank could be replaced by other venue nouns like 教室 or 公園. | teach only | yes |
| ~ Street | この通りはいつもにぎやかです。 | This street is always lively. | とおり | N5 L5 T5 C2 I2 — Blank could be filled by many nouns like 町 or 店, not uniquely 通り. | teach only | yes |
| ~ Street | あの通りを渡りましたか。 | Did you cross that street? | とおり | N5 L5 T5 C3 I3 — 渡る narrows options somewhat (道, 川, 橋 also possible) but street context helps a bit. | teach only | yes |
| ~ Street | 一緒にこの通りを歩きましょう。 | Let's walk on this street together. | とおり | N5 L5 T5 C2 I2 — Many nouns (道, 公園, 道路) could fill the blank with 歩く, low recoverability. | teach only | yes |
| reverse side | 紙の裏に名前を書いてください。 | Please write your name on the back of the paper. | うら | N5 L5 T5 C5 I3 | cloze+teach | yes |
| reverse side | 家の裏に何がありますか。 | What is behind the house? | うら | N5 L5 T4 C2 I3 — Blank could be filled by 前, 横, 中, etc., not uniquely 裏; EN translation drops 'house' nuance slightly. | teach only | yes |
| reverse side | 手紙の裏を見たいです。 | I want to look at the back of the letter. | うら | N4 L5 T5 C2 I2 — Many nouns (中身, 文字, 住所) could fit the blank, reducing recoverability. | teach only | yes |
| city | この市には大学があります。 | There is a university in this city. | し | N5 L5 T5 C2 I3 — 町/県/国 could also fit the blank, reducing uniqueness. | teach only | yes |
| city | どの市に住んでいますか。 | Which city do you live in? | し | N5 L5 T5 C2 I3 — 町/国/県 could also fill the blank equally well. | teach only | yes |
| city | 市の図書館へ行きませんか。 | Shall we go to the city library? | し | N5 L5 T5 C3 I3 — 町 could also plausibly fit, though 市 is a common collocation with 図書館. | teach only | yes |
| far away | 遠くに山が見えます。 | Mountains can be seen far away. | とおく | N5 L5 T5 C3 I3 — Blank could also be filled by 近く or other location words, reducing uniqueness. | teach only | yes |
| far away | あなたの学校は遠くにありますか。 | Is your school far away? | とおく | N5 L5 T5 C3 I3 — 近く or other words could also fit the blank. | teach only | yes |
| far away | 遠くへ旅行に行きたいです。 | I want to travel far away. | とおく | N5 L5 T5 C3 I3 — どこ or 近く could also fit the blank, lowering uniqueness. | teach only | yes |
| parking lot | 車を駐車場に止めました。 | I parked the car in the parking lot. | ちゅうしゃじょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| parking lot | 駐車場はどこにありますか。 | Where is the parking lot? | ちゅうしゃじょう | N5 L5 T5 C2 I2 — Blank could be filled by many location nouns (station, park, etc.), reducing recoverability. | teach only | yes |
| to decide | 今晩、何を食べるか決めましょう。 | Let's decide what to eat tonight. | きめましょう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to decide | 電話で会議の時間を決めましたか。 | Did you decide the meeting time over the phone? | きめました | N5 L5 T5 C3 I4 | teach only | yes |
| to check | 言葉の意味が分からないから、辞書で調べます。 | Since I don't understand the meaning of the word, I'll check it in the dictionary. | しらべます | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to check | 分からないことがあったら、図書館で調べます。 | If there's something I don't understand, I'll check it at the library. | しらべます | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to check | まだホテルの電話番号を調べていません。 | I haven't checked the hotel's phone number yet. | しらべていません | N5 L5 T5 C5 I3 | cloze+teach | yes |
| sleeping in late | 今朝、寝坊したから、朝御飯を食べませんでした。 | Since I overslept this morning, I didn't eat breakfast. | ねぼうした | N5 L5 T5 C4 I3 | cloze+teach | yes |
| sleeping in late | 明日は早いから、寝坊しないでください。 | Tomorrow is early, so please don't oversleep. | ねぼうしないで | N5 L5 T5 C5 I3 | cloze+teach | yes |
| sleeping in late | 大切な日に寝坊したことがあります。 | I've overslept on an important day before. | ねぼうした | N5 L5 T5 C4 I4 | cloze+teach | yes |
| throw away | 古い新聞を捨てましょう。 | Let's throw away the old newspapers. | すてましょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| throw away | 使わないから、この箱を捨てます。 | Since I don't use it, I'll throw away this box. | すてます | N5 L5 T5 C4 I4 | cloze+teach | yes |
| throw away | このごみを捨ててもいいですか。 | Is it okay to throw away this trash? | すてても | N5 L5 T5 C5 I4 | cloze+teach | yes |
| -- honorific expression for する -- | 先生は何をなさいますか。 | What will the teacher do? | なさいますか | N5 L4 T5 C4 I3 | cloze+teach | yes |
| -- honorific expression for する -- | 何かあったら、すぐに電話をなさってください。 | If something happens, please call right away. | なさって | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to start | 今、晩御飯の準備を始めましょう。 | Let's start preparing dinner now. | はじめましょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to start | 時間がないから、すぐに宿題を始めます。 | Since there's no time, I'll start my homework right away. | はじめます | N4 L5 T5 C3 I3 — すぐに宿題をします also fits, lowering recoverability. | teach only | yes |
| to start | まだ新しい仕事を始めていません。 | I haven't started the new job yet. | はじめていません | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to receive | 誕生日にプレゼントをもらったから、いい気分です。 | Since I received a present for my birthday, I'm in a good mood. | もらった | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to receive | 友達から手紙をもらいましたか。 | Did you receive a letter from your friend? | もらいました | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to receive | 先生からお土産をもらったことがあります。 | I've received a souvenir from my teacher before. | もらった | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to cry | 悲しい映画を見たから、泣きました。 | Since I watched a sad movie, I cried. | なきました | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to cry | 赤ちゃんが大きい声で泣いています。 | The baby is crying loudly. | ないています | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to cry | 痛かったら、子供は泣きますか。 | If it hurts, will the child cry? | なきます | N4 L4 T5 C4 I3 | cloze+teach | yes |
| ashamed | 授業で間違えて恥ずかしかったです。 | I made a mistake in class and felt embarrassed. | はずかしかった | N5 L5 T5 C4 I3 | cloze+teach | yes |
| beautiful | 今日の空はとても美しいです。 | Today's sky is very beautiful. | うつくしい | N4 L5 T5 C2 I2 — Generic template; many adjectives (きれい, すごい, etc.) could fill the blank. | teach only | yes |
| beautiful | 彼女の声はとても美しいと思います。 | I think her voice is very beautiful. | うつくしい | N4 L4 T5 C2 I2 — Slightly more natural with と思います, but blank still accepts other adjectives. | teach only | yes |
| quickly and steadily | 漢字をどんどん習っています。 | I'm learning kanji quickly and steadily. | どんどん | N4 L5 T5 C3 I3 — だんだん or たくさん could also fit the blank. | teach only | yes |
| quickly and steadily | 子供はどんどん大きくなります。 | Children grow bigger quickly. | どんどん | N5 L5 T5 C3 I3 — だんだん could also fit, reducing uniqueness. | teach only | yes |
| fitness | 先生は適当な問題を選びました。 | The teacher chose an appropriate problem. | てきとう | N4 L4 T4 C2 I2 — Blank could be filled by many other な-adjectives (簡単な, 難しい, いい), context doesn't force 適当. | teach only | yes |
| fitness | 適当な運動をしたいです。 | I want to do a suitable amount of exercise. | てきとう | N4 L4 T4 C2 I2 — Many adjectives (軽い, 楽な, 簡単な) could fit the blank, low recoverability. | teach only | yes |
| fitness | 適当な店を選びました。 | I chose a suitable restaurant. | てきとう | N4 L4 T4 C2 I2 — Generic sentence; many words could fill the blank (安い, いい, 有名な). | teach only | yes |
| wonderful | その映画は素晴らしかったです。 | That movie was wonderful. | すばらしかった | N5 L5 T5 C2 I3 — Many adjectives (面白かった, つまらなかった, etc.) could fit the blank, weakening cloze uniqueness. | teach only | yes |
| wonderful | 今日は素晴らしい天気です。 | Today is wonderful weather. | すばらしい | N5 L5 T5 C2 I3 — Blank could be filled by いい, 良い, 悪い, etc., so the target isn't uniquely recoverable. | teach only | yes |
| wonderful | このレストランの料理は素晴らしいです。 | The food at this restaurant is wonderful. | すばらしい | N5 L5 T5 C2 I3 — Other adjectives like おいしい or まずい could also fit the blank, reducing recoverability. | teach only | yes |
| kindness | 先生はいつも親切です。 | The teacher is always kind. | しんせつ | N5 L5 T5 C2 I2 — Generic template sentence; many adjectives could fill the blank. | teach only | yes |
| kindness | 彼は親切に道を教えました。 | He kindly showed me the way. | しんせつ | N5 L4 T5 C3 I3 — Fairly natural collocation but other adverbs like 丁寧に could also fit. | teach only | yes |
| kindness | あの店員はとても親切です。 | That store clerk is very kind. | しんせつ | N5 L5 T5 C2 I2 — Generic sentence pattern; other adjectives could fill the blank equally well. | teach only | yes |
| enthusiasm | 学生たちは熱心に宿題をしています。 | The students are diligently doing their homework. | ねっしん | N4 L4 T4 C3 I3 — other adverbs like 真面目に could also fit the blank | teach only | yes |
| enthusiasm | 彼女はテニスに熱心です。 | She is enthusiastic about tennis. | ねっしん | N5 L5 T5 C3 I3 — could also be 夢中 or 得意, slightly ambiguous | teach only | yes |
| enthusiasm | 彼は仕事に熱心です。 | He is enthusiastic about his work. | ねっしん | N5 L5 T5 C3 I3 — could also be 真面目 or 得意, slightly ambiguous | teach only | yes |
| swimming | 子供に水泳を教えています。 | I'm teaching my child swimming. | すいえい | N5 L4 T5 C2 I3 — Blank could be many activities (piano, English, etc.), low recoverability. | teach only | yes |
| swimming | 水泳は好きですか。 | Do you like swimming? | すいえい | N5 L5 T5 C2 I2 — Generic template sentence; blank could be almost any noun. | teach only | yes |
| swimming | 忙しいから、今週は水泳に行けません。 | Since I'm busy, I can't go swimming this week. | すいえい | N5 L4 T5 C3 I4 — Blank could be other activities like 買い物 or 旅行, but context slightly narrows it. | teach only | yes |
| to hurry | 電車に遅れるから、急いでください。 | Hurry up, because we'll be late for the train. | いそいで | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to hurry | 急がなければ、会議に間に合いません。 | If we don't hurry, we won't make it to the meeting. | いそがなければ | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to hurry | 母は台所で急いで料理を作っています。 | My mother is hurriedly cooking in the kitchen. | いそいで | N4 L5 T4 C3 I3 — Other adverbs like 一生懸命 could also fit the blank, reducing recoverability. | teach only | yes |
| to return | 父は仕事から七時に戻ります。 | My father returns from work at seven. | もどります | N5 L4 T5 C3 I2 — 帰ります could equally fit the blank, reducing uniqueness | teach only | yes |
| to visit | 先生を訪ねてください。 | Please visit the teacher. | たずねて | N4 L4 T5 C2 I2 — Blank could be filled by many verbs (呼ぶ、待つ、探す). | teach only | yes |
| to visit | 電話をしてから、彼女を訪ねました。 | After calling her, I visited her. | たずねました | N5 L4 T5 C3 I3 — Calling-then-visiting context helps but other verbs like 呼ぶ could still fit loosely. | teach only | yes |
| to rise | 熱が上がったので、病院へ行きました。 | Since my fever went up, I went to the hospital. | あがった | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to rise | 二階へ上がってください。 | Please go up to the second floor. | あがって | N4 L4 T4 C3 I3 — 行って or 上って could also fit the blank, slightly reducing recoverability. | teach only | yes |
| to rise | 電話代が上がりますか。 | Will the phone bill go up? | あがります | N4 L4 T5 C4 I3 | cloze+teach | yes |
| ~ storied | この会社のビルは十階建てです。 | This company's building is ten stories tall. | だて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| ~ storied | 三階建てのうちに住みたいです。 | I want to live in a three-story house. | だて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| ~ storied | あの美術館は二階建てですか。 | Is that art museum two stories? | だて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| zoo | 天気がいいから、動物園へ行きましょう。 | Since the weather is nice, let's go to the zoo. | どうぶつえん | N5 L5 T5 C2 I3 — Many places could fit the blank (park, museum, etc.), weak constraint. | teach only | yes |
| zoo | 今日は忙しいから、動物園へ行きません。 | I'm busy today, so I won't go to the zoo. | どうぶつえん | N5 L5 T5 C2 I2 — Any destination noun could fill the blank; little context forces 'zoo'. | teach only | yes |
| zoo | 動物園の地図を見せてください。 | Please show me the zoo map. | どうぶつえん | N5 L5 T5 C2 I3 — Map could belong to many places (park, city, museum), so blank isn't uniquely determined. | teach only | yes |
| conference room | 会議室で会議があります。 | There is a meeting in the conference room. | かいぎしつ | N4 L5 T5 C3 I2 — slightly redundant since 会議室 and 会議 share root, but natural; blank could also be 教室 or 部屋. | teach only | yes |
| conference room | 会議室に誰もいません。 | There is no one in the conference room. | かいぎしつ | N5 L5 T5 C2 I2 — blank could be any room word (部屋, 教室, 家) so not uniquely recoverable. | teach only | yes |
| conference room | 会議室を予約してください。 | Please reserve the conference room. | かいぎしつ | N5 L5 T5 C2 I3 — blank could be replaced by 部屋, ホテル, レストラン etc., reducing uniqueness. | teach only | yes |
| (abbr.) building | あのビルはとても高いです。 | That building is very tall. | びる | N5 L5 T5 C2 I2 — Many nouns could fit 'is very tall', so building is not uniquely recoverable. | teach only | yes |
| (abbr.) building | このビルにはエレベーターがありません。 | This building doesn't have an elevator. | びる | N5 L5 T5 C4 I3 | cloze+teach | yes |
| (abbr.) building | ビルの前で待っていてください。 | Please wait in front of the building. | びる | N5 L5 T5 C2 I2 — Context 'wait in front of' fits many nouns, not uniquely building. | teach only | yes |
| address | 住所を教えてください。 | Please tell me your address. | じゅうしょ | N5 L5 T5 C2 I3 — Blank could be many nouns like 名前 or 電話番号. | teach only | yes |
| address | 私の住所はここです。 | My address is here. | じゅうしょ | N4 L5 T5 C2 I1 — Generic template sentence; blank could be many nouns like 家 or 学校. | teach only | yes |
| address | 住所が分からないから、電話をかけました。 | Since I didn't know the address, I made a phone call. | じゅうしょ | N4 L5 T5 C3 I3 — Slightly more context but still allows other nouns like 名前 or 番号. | teach only | yes |
| slope | この坂はとても急です。 | This slope is very steep. | さか | N5 L5 T5 C3 I3 — 道 or other nouns could also fit 急です, reducing uniqueness slightly | teach only | yes |
| slope | 坂を登ると学校があります。 | If you go up the slope, there is a school. | さか | N5 L4 T5 C3 I3 — 山や階段など他の語も登るに使えるため一意性がやや低い | teach only | yes |
| office | 父は事務所で働いています。 | My father works at the office. | じむしょ | N5 L5 T5 C2 I3 — Many location nouns could fill the blank (会社, 店, 工場, etc.). | teach only | yes |
| office | 事務所に誰もいませんでした。 | There was no one at the office. | じむしょ | N5 L5 T5 C2 I2 — Generic; any place noun could fit the blank. | teach only | yes |
| office | 事務所へ来てください。 | Please come to the office. | じむしょ | N5 L5 T5 C2 I2 — Very generic template; blank could be any destination noun. | teach only | yes |
| art gallery | 土曜日に美術館へ行きました。 | I went to the art museum on Saturday. | びじゅつかん | N5 L5 T5 C1 I2 — Blank could be filled by almost any place noun (school, park, station), so context doesn't force 美術館. | teach only | yes |
| art gallery | 美術館は月曜日休みだから、行けません。 | The art museum is closed on Mondays, so I can't go. | びじゅつかん | N5 L5 T5 C3 I3 — Many places are closed on Mondays (museums, galleries, shops), so context narrows but doesn't uniquely force this word. | teach only | yes |
| art gallery | この美術館の絵はとても美しいです。 | The paintings in this art museum are very beautiful. | びじゅつかん | N5 L5 T5 C5 I4 — Mentioning paintings strongly and uniquely points to an art museum/gallery. | cloze+teach | yes |
| firmly | 野菜をしっかり洗ってください。 | Please wash the vegetables thoroughly. | しっかり | N5 L5 T5 C4 I4 | cloze+teach | yes |
| firmly | 子供はしっかり宿題をしなければなりません。 | Children must do their homework properly. | しっかり | N4 L5 T5 C3 I3 — Slightly stiff word order but understandable; other adverbs like ちゃんと/きちんと could also fit the blank. | teach only | yes |
| extremely | この料理は非常に辛いです。 | This dish is extremely spicy. | ひじょうに | N5 L3 T5 C3 I2 — Blank could also be filled with とても/すごく, not uniquely 非常に. | teach only | yes |
| extremely | 父は非常に忙しいです。 | My father is extremely busy. | ひじょうに | N5 L3 T5 C3 I2 — Generic template; other intensifiers fit equally well. | teach only | yes |
| extremely | 非常に大切な電話ですから、静かにしてください。 | Since it's an extremely important call, please be quiet. | ひじょうに | N5 L3 T5 C3 I3 — Context slightly narrows meaning but other intensifiers still plausible. | teach only | yes |
| soft (in reference to texture) | この肉は柔らかいです。 | This meat is soft. | やわらかい | N5 L5 T5 C2 I2 — Blank could be filled by many other adjectives like 固い or 美味しい. | teach only | yes |
| soft (in reference to texture) | 赤ちゃんの手はとても柔らかいです。 | The baby's hands are very soft. | やわらかい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| soft (in reference to texture) | 友達に柔らかいパンをあげました。 | I gave my friend soft bread. | やわらかい | N5 L5 T5 C2 I2 — Many other adjectives (美味しい, 大きい, 甘い) could fit the blank equally well. | teach only | yes |
| useless | 宿題をしないとだめです。 | You must do your homework, or it's no good. | だめ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| useless | 塩を入れすぎるとだめです。 | If you put in too much salt, it's no good. | だめ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| useless | 今、電話してもだめですか。 | Is it no good if I call now? | だめ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| very hard | 兄は一生懸命働いています。 | My older brother is working very hard. | いっしょうけんめい | N5 L4 T5 C3 I2 — Generic template; other adverbs (よく, まじめに) could also fit the blank. | teach only | yes |
| very hard | 母は一生懸命料理を作りました。 | My mother made the meal very diligently. | いっしょうけんめい | N5 L4 T5 C3 I2 — Other adverbs like 上手に or たくさん could also fit the blank. | teach only | yes |
| very hard | 友達のために一生懸命部屋を片付けました。 | I tidied the room very hard for my friend. | いっしょうけんめい | N5 L4 T5 C3 I3 — The friend context adds some flavor, but other adverbs (早く, きれいに) could still fit the blank. | teach only | yes |
| complexity | 家族の問題は複雑です。 | Family problems are complex. | ふくざつ | N5 L5 T5 C2 I3 — Blank could also be filled by many other adjectives like 難しい or 深刻. | teach only | yes |
| necessary | この料理には塩が必要です。 | This dish needs salt. | ひつよう | N5 L5 T5 C3 I3 — could also fit 大切 or 十分 in the blank | teach only | yes |
| necessary | 子供には休みが必要です。 | Children need rest. | ひつよう | N5 L5 T5 C3 I3 — blank could also fit 大切 or 大事 | teach only | yes |
| necessary | 電話番号が必要ですか。 | Do you need the phone number? | ひつよう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| reception desk | 受付に電話してください。 | Please call the reception desk. | うけつけ | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (会社, 友達, etc.), low cloze constraint. | teach only | yes |
| reception desk | 受付が込んでいたから、遅れました。 | I was late because the reception desk was crowded. | うけつけ | N5 L4 T5 C3 I3 — Plausible but other crowded places could fit the blank too. | teach only | yes |
| reception desk | 受付には誰もいませんでした。 | There was no one at the reception desk. | うけつけ | N5 L5 T5 C2 I2 — Very generic sentence; many location nouns could fit the blank. | teach only | yes |
| a Japanese inn | 家族のために旅館を予約してください。 | Please reserve a Japanese inn for the family. | りょかん | N5 L4 T5 C2 I3 — Blank could be filled with many nouns (hotel, room, ticket), not uniquely forcing 旅館. | teach only | yes |
| a Japanese inn | 旅館が遠かったから、遅れました。 | I was late because the inn was far. | りょかん | N5 L4 T5 C2 I3 — Context 'far, so late' fits many places, not specific to inn. | teach only | yes |
| a Japanese inn | あの旅館は静かではありません。 | That inn is not quiet. | りょかん | N4 L4 T5 C2 I2 — Generic template sentence; 'that ___ is not quiet' fits many nouns. | teach only | yes |
| lodging | 大学生のとき、下宿していました。 | When I was a university student, I lived in lodging. | げしゅく | N5 L5 T4 C2 I4 — Blank could be filled by many verbs like 勉強/生活していました, not uniquely 下宿. | teach only | yes |
| lodging | 下宿が安いから、そこに住んでいます。 | Because the lodging is cheap, I live there. | げしゅく | N5 L5 T5 C3 I4 — Other nouns like 家賃/部屋 could also fit the blank. | teach only | yes |
| lodging | 下宿には台所がありません。 | The lodging house has no kitchen. | げしゅく | N5 L5 T4 C3 I4 — Words like アパート/部屋 could also fit context. | teach only | yes |
| airport | 空港が遠いから、早く出かけます。 | Because the airport is far, I'll leave early. | くうこう | N5 L5 T5 C3 I3 | teach only | yes |
| airport | 空港まで迎えに来てください。 | Please come pick me up at the airport. | くうこう | N5 L5 T5 C3 I3 | teach only | yes |
| airport | まだ空港に着いていません。 | I haven't arrived at the airport yet. | くうこう | N5 L5 T5 C3 I3 | teach only | yes |
| harbor | 船が港に着きました。 | The ship arrived at the harbor. | みなと | N5 L5 T5 C4 I3 | cloze+teach | yes |
| harbor | 港には船がありませんでした。 | There were no ships at the harbor. | みなと | N5 L5 T5 C4 I3 | cloze+teach | yes |
| church | 毎週日曜日に家族と教会へ行きます。 | Every Sunday I go to church with my family. | きょうかい | N5 L5 T5 C3 I3 | teach only | yes |
| church | 教会の前で待っていてください。 | Please wait in front of the church. | きょうかい | N5 L5 T5 C2 I2 — blank could be many location words | teach only | yes |
| church | 教会が静かだから、よく行きます。 | Because the church is quiet, I often go there. | きょうかい | N4 L5 T5 C2 I3 — blank could fit many quiet places, not uniquely church | teach only | yes |
| America | 兄はアメリカに住んでいます。 | My older brother lives in America. | あめりか | N5 L5 T5 C2 I3 — Blank could be filled by any country name, not uniquely recoverable. | teach only | yes |
| America | アメリカから電話がかかってきました。 | A phone call came from America. | あめりか | N5 L5 T5 C2 I3 — Any country name fits the blank equally well. | teach only | yes |
| America | アメリカへはまだ行ったことがありません。 | I have never been to America yet. | あめりか | N5 L5 T5 C2 I3 — Context doesn't uniquely determine America over other countries. | teach only | yes |
| corner | 荷物を部屋の隅に置いてください。 | Please put the luggage in the corner of the room. | すみ | N5 L5 T5 C3 I3 — Blank could also be filled by other location words like 中 or 隣. | teach only | yes |
| corner | 猫が部屋の隅で寝ています。 | The cat is sleeping in the corner of the room. | すみ | N5 L5 T5 C3 I3 — Context allows other spatial nouns to fit too. | teach only | yes |
| corner | 隅には何もありませんでした。 | There was nothing in the corner. | すみ | N4 L5 T5 C2 I2 — Very generic sentence; many nouns could fill the blank. | teach only | yes |
| ~ district | この区に店がたくさんあります。 | There are many shops in this district. | く | N4 L5 T5 C2 I3 — Blank could be filled by 街, 町, 国, etc., not uniquely 区. | teach only | yes |
| ~ district | あなたはどの区に住んでいますか。 | Which district do you live in? | く | N4 L5 T5 C2 I3 — Many location words (国, 町, 街) fit the blank equally well. | teach only | yes |
| ~ district | 来週隣の区へ行きませんか。 | Shall we go to the next district next week? | く | N4 L5 T5 C3 I3 — 隣の___へ could also be 町 or 国, though 区 is plausible given context. | teach only | yes |
| barber's | 髪が長いので床屋へ行きたいです。 | Since my hair is long, I want to go to the barber's. | とこや | N5 L5 T5 C4 I4 | cloze+teach | yes |
| barber's | 床屋はどこにありますか。 | Where is the barber's shop? | とこや | N5 L5 T5 C2 I2 — Blank could be any place noun, low cloze recoverability. | teach only | yes |
| barber's | 一緒に床屋へ行きませんか。 | Shall we go to the barber's together? | とこや | N5 L5 T5 C2 I3 — Blank could be any destination, low cloze recoverability. | teach only | yes |
| (someone else's) house | 来週の日曜日、お宅へ伺ってもいいですか。 | May I visit your house next Sunday? | おたく | N5 L4 T5 C4 I4 | cloze+teach | yes |
| (someone else's) house | お宅はどちらですか。 | Where is your house? | おたく | N5 L4 T4 C3 I3 — blank could arguably be filled by other polite nouns like お住まい, slightly lowering recoverability | teach only | yes |
| (someone else's) house | 先週、友達のお宅にうかがいました。 | Last week, I visited my friend's house. | おたく | N5 L4 T5 C4 I4 | cloze+teach | yes |
| suburb | 土曜日は郊外の公園へ行くつもりです。 | I plan to go to a suburban park on Saturday. | こうがい | N5 L5 T5 C3 I3 — Other location words could plausibly fill the blank. | teach only | yes |
| suburb | いつか郊外の広い家に住みたいです。 | Someday I want to live in a big house in the suburbs. | こうがい | N5 L5 T5 C3 I3 — 田舎 or 都会 could also fit contextually. | teach only | yes |
| place where things are sold | 靴の売り場はどこですか。 | Where is the shoe department? | うりば | N5 L5 T5 C4 I3 | cloze+teach | yes |
| place where things are sold | 果物の売り場でぶどうを買いました。 | I bought grapes at the fruit department. | うりば | N5 L5 T5 C3 I3 — other words like お店 could also fit the blank | teach only | yes |
| place where things are sold | 一緒に洋服の売り場を見ませんか。 | Shall we look at the clothing department together? | うりば | N4 L5 T5 C3 I3 — reading has a stray space between よう and ふく | teach only | yes |
| rooftop | 屋上でお弁当を食べませんか。 | Shall we eat our lunch on the rooftop? | おくじょう | N5 L5 T5 C3 I4 — Many locations could fit the blank (park, classroom, etc.). | teach only | yes |
| rooftop | このビルの屋上に上ってもいいですか。 | May I go up to the rooftop of this building? | おくじょう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| rooftop | 屋上から町がよく見えます。 | You can see the town well from the rooftop. | おくじょう | N5 L5 T5 C3 I4 — Other vantage points (window, hill) could also fit the blank. | teach only | yes |
| Africa | いつかアフリカへ旅行したいです。 | Someday I want to travel to Africa. | あふりか | N5 L5 T5 C1 I3 — Any place name fits the blank equally well. | teach only | yes |
| Africa | アフリカに行ったことがありますか。 | Have you ever been to Africa? | あふりか | N5 L5 T5 C1 I3 — Any place name could fill the blank; not uniquely recoverable. | teach only | yes |
| Africa | 彼はアフリカで生まれました。 | He was born in Africa. | あふりか | N5 L5 T5 C1 I3 — Any place name fits the blank equally well. | teach only | yes |
| the West | 西洋の音楽が好きです。 | I like Western music. | せいよう | N5 L5 T5 C2 I3 — Blank could be filled by many countries/regions, not uniquely 西洋. | teach only | yes |
| the West | 西洋の歴史を習ったことがありますか。 | Have you ever studied Western history? | せいよう | N5 L5 T5 C2 I4 — Blank could be filled by many countries/regions, not uniquely 西洋. | teach only | yes |
| the West | 西洋の料理を習いたいです。 | I want to learn Western cooking. | せいよう | N5 L5 T5 C2 I3 — Blank could be filled by many countries/regions, not uniquely 西洋. | teach only | yes |
| principal | 校長は毎朝七時に学校へ来ます。 | The principal comes to school at seven every morning. | こうちょう | N5 L5 T5 C2 I3 — blank could fit many people (先生, 生徒, etc.), not just 校長 | teach only | yes |
| principal | 校長は今朝の会議に遅れました。 | The principal was late for this morning's meeting. | こうちょう | N5 L5 T5 C2 I3 — blank could fit other roles like 社長 or 先生 | teach only | yes |
| principal | 今週の土曜日に校長に会いたいです。 | I want to meet the principal this Saturday. | こうちょう | N5 L5 T5 C2 I3 — blank could fit many nouns (先生, 友達, etc.) | teach only | yes |
| science | 科学の授業は難しいです。 | Science class is difficult. | かがく | N4 L5 T5 C2 I2 — Blank could be filled by any subject noun (数学, 英語, etc.), reducing recoverability. | teach only | yes |
| science | 昨日、科学のテストがありました。 | Yesterday there was a science test. | かがく | N4 L5 T5 C2 I3 — Any subject name fits the blank equally well. | teach only | yes |
| science | 科学が好きです。 | I like science. | かがく | N4 L5 T5 C2 I1 — Generic template sentence; many nouns could fit the blank. | teach only | yes |
| entry to school or university | 来年、大学に入学します。 | I will enter university next year. | にゅうがくします | N5 L5 T5 C4 I3 | cloze+teach | yes |
| entry to school or university | 去年、大学に入学しました。 | I entered university last year. | にゅうがくしました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| entry to school or university | 早く大学に入学したいです。 | I want to enter university soon. | にゅうがくしたい | N4 L5 T5 C4 I3 — slightly less natural phrasing than 大学に入りたい but acceptable | cloze+teach | yes |
| department manager | 部長はいつも忙しいです。 | The department manager is always busy. | ぶちょう | N5 L5 T5 C2 I2 — Any person noun (先生, 社長, 母) fits the blank equally well. | teach only | yes |
| department manager | 部長は昨日旅行から戻りました。 | The department manager returned from a trip yesterday. | ぶちょう | N5 L5 T5 C2 I3 — Blank could be filled by many nouns like 先生 or 友達 with no forcing context. | teach only | yes |
| department manager | 部長と一緒に旅行したいです。 | I want to travel together with the department manager. | ぶちょう | N5 L5 T5 C2 I3 — Context doesn't uniquely require 部長; other person nouns work equally. | teach only | yes |
| production | この工場は車を生産します。 | This factory produces cars. | せいさんします | N4 L4 T5 C3 I3 — 作ります could also fit the blank, reducing recoverability. | teach only | yes |
| production | 去年、新しい薬を生産しました。 | Last year, we produced a new medicine. | せいさんしました | N4 L4 T5 C3 I3 — 開発しました or 作りました could also fit contextually. | teach only | yes |
| production | もっと米を生産したいです。 | I want to produce more rice. | せいさんしたい | N4 L4 T5 C3 I3 — 作りたい or 増やしたい are plausible alternatives for the blank. | teach only | yes |
| education | この学校の教育はとても厳しいです。 | This school's education is very strict. | きょういく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| education | 子供の教育をしっかりしたいです。 | I want to take my child's education seriously. | きょういく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| history | この町には長い歴史があります。 | This town has a long history. | れきし | N5 L5 T5 C4 I3 | cloze+teach | yes |
| history | 昨日、学校の歴史を調べました。 | Yesterday, I looked up the school's history. | れきし | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other nouns like 規則 or 名前. | teach only | yes |
| economics | 経済のニュースをよく見ます。 | I often watch economic news. | けいざい | N4 L5 T5 C2 I3 — Blank could be filled with 政治, スポーツ, etc., so not uniquely recoverable. | teach only | yes |
| economics | 経済の仕事をしたいです。 | I want to work in economics. | けいざい | N4 L5 T5 C2 I3 — Many other fields could fit '〜の仕事', reducing cloze uniqueness. | teach only | yes |
| electric light | 部屋の電灯を消してください。 | Please turn off the light in the room. | でんとう | N4 L5 T5 C3 I3 — Blank could also be filled with 電気, エアコン, テレビ, etc., since 'turn off in the room' isn't unique to 電灯. | teach only | yes |
| sandal | 夏はいつもサンダルを履きます。 | In summer I always wear sandals. | さんだる | N5 L5 T5 C2 I2 — Many footwear words (靴, スリッパ) could fill the blank; low uniqueness. | teach only | yes |
| sandal | 暑いから、サンダルを履いています。 | Because it's hot, I'm wearing sandals. | さんだる | N5 L5 T5 C2 I3 — Heat context slightly narrows options but still could be 靴 or other light shoes. | teach only | yes |
| register | レジで払ってください。 | Please pay at the register. | れじ | N5 L5 T5 C3 I2 — Blank could plausibly be filled by other nouns like 店/カウンター. | teach only | yes |
| register | 店が込んでいるから、レジに並びました。 | Because the store was crowded, I lined up at the register. | れじ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| register | レジにお金がありません。 | There's no money in the register. | れじ | N5 L5 T5 C3 I2 — Blank could also be filled by 財布 or 銀行, reducing uniqueness. | teach only | yes |
| underwear | 下着を洗濯しました。 | I washed the underwear. | したぎ | N4 L5 T5 C2 I2 — Blank could be any clothing item, not uniquely 下着. | teach only | yes |
| underwear | 寒いから、下着を着てください。 | Because it's cold, please wear underwear. | したぎ | N4 L5 T5 C3 I3 — Context suggests warmth layer but other clothing words could fit too. | teach only | yes |
| underwear | 下着がまだ乾いていません。 | The underwear isn't dry yet. | したぎ | N4 L5 T5 C2 I2 — Could apply to many laundry items, weak uniqueness for cloze. | teach only | yes |
| drawer | 引き出しの中に鍵があります。 | There's a key inside the drawer. | ひきだし | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other containers (box, drawer, case), lowering unique recoverability. | teach only | yes |
| drawer | 引き出しを閉めてください。 | Please close the drawer. | ひきだし | N5 L5 T5 C2 I2 — Many nouns (door, window, box) could fit '閉めてください', making the blank ambiguous. | teach only | yes |
| drawer | 急いでいたから、引き出しを閉めませんでした。 | Because I was in a hurry, I didn't close the drawer. | ひきだし | N5 L4 T5 C2 I4 — Same ambiguity as before—'閉めませんでした' could apply to many closable objects. | teach only | yes |
| tool | 料理の道具を出してください。 | Please take out the cooking tools. | どうぐ | N5 L5 T5 C3 I3 — Blank could also be filled with other nouns like 材料 or 野菜. | teach only | yes |
| tool | この道具は便利だから、よく使います。 | Because this tool is convenient, I use it often. | どうぐ | N5 L5 T5 C3 I3 — Context is generic enough that many nouns (bag, phone, etc.) could fit the blank. | teach only | yes |
| suit | 明日は大切な日だから、スーツを着ます。 | Tomorrow is an important day, so I'll wear a suit. | すーつ | N5 L5 T5 C3 I3 | teach only | yes |
| suit | このスーツは高くて、買えません。 | This suit is expensive, so I can't buy it. | すーつ | N5 L5 T5 C3 I3 | teach only | yes |
| suit | 会社にスーツを着て行ってください。 | Please wear a suit to the company. | すーつ | N5 L4 T5 C3 I3 | teach only | yes |
| fax | ファックスを送ってください。 | Please send a fax. | ふぁっくす | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (email, letter, package). | teach only | yes |
| fax | 急いでいたから、ファックスで送りました。 | Because I was in a hurry, I sent it by fax. | ふぁっくす | N5 L5 T5 C3 I3 — ‘by ___’ narrows options somewhat but email/mail also plausible. | teach only | yes |
| fax | ファックスがまだ来ません。 | The fax hasn't come yet. | ふぁっくす | N5 L5 T5 C2 I2 — Many nouns (letter, package, person) could fit the blank. | teach only | yes |
| inconvenience | この部屋は駅から遠いから、不便です。 | This room is inconvenient because it's far from the station. | ふべん | N5 L5 T5 C3 I3 | teach only | yes |
| inconvenience | 電話がないと不便です。 | It's inconvenient without a phone. | ふべん | N5 L5 T5 C3 I3 | teach only | yes |
| inconvenience | この辺は買い物が不便ですか。 | Is shopping inconvenient around here? | ふべん | N5 L5 T5 C3 I3 | teach only | yes |
| terrible | 昨日の料理はひどい味でした。 | Yesterday's cooking had a terrible taste. | ひどい | N5 L5 T5 C2 I3 — Other adjectives (まずい, いい, 変な) could equally fill the blank. | teach only | yes |
| terrible | そんなひどい話は聞いたことがありません。 | I've never heard such a terrible story. | ひどい | N5 L5 T5 C2 I3 — そんな___話 pattern allows many adjectives (面白い, 変な, 悲しい) to fit. | teach only | yes |
| easy to do ~ | この辞書は使いやすいです。 | This dictionary is easy to use. | やすい | N5 L5 T5 C3 I3 — にくい could also fit grammatically, reducing certainty of blank. | teach only | yes |
| easy to do ~ | この椅子は座りやすいです。 | This chair is easy to sit in. | やすい | N5 L5 T5 C3 I3 — にくい could also fit grammatically, reducing certainty of blank. | teach only | yes |
| enough | 塩は十分に入れましたか。 | Did you put in enough salt? | じゅうぶん | N5 L5 T5 C3 I3 | teach only | yes |
| enough | 一日八時間寝れば十分です。 | If you sleep eight hours a day, that's enough. | じゅうぶん | N5 L5 T5 C3 I4 | teach only | yes |
| enough | この説明だけでは十分ではありません。 | This explanation alone is not enough. | じゅうぶん | N5 L5 T5 C3 I3 — other adjectives like 明確 or 完全 could also fit the blank | teach only | yes |
| correct | あなたの意見は正しいと思います。 | I think your opinion is correct. | ただしい | N5 L5 T5 C2 I3 — Blank could be filled by many adjectives (いい, おもしろい, etc.), not uniquely 'correct'. | teach only | yes |
| correct | この答えは正しいですか。 | Is this answer correct? | ただしい | N5 L5 T5 C4 I3 — Answer+correct is a strong idiomatic pairing, fairly recoverable. | cloze+teach | yes |
| correct | 彼の言葉は正しくないです。 | His words are not correct. | ただしくない | N5 L5 T5 C2 I2 — Generic sentence; blank could fit several adjectives besides 'correct'. | teach only | yes |
| danger | あの道は夜危険ですから、気をつけてください。 | That road is dangerous at night, so please be careful. | きけん | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other adjectives like 暗い, but context strongly suggests danger. | teach only | yes |
| to resemble | 息子は父によく似ています。 | The son resembles his father closely. | にています | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to resemble | 姉と妹はとても似ています。 | The older sister and younger sister look very alike. | にています | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to resemble | あなたはお母さんに似ていますか。 | Do you resemble your mother? | にています | N5 L5 T5 C5 I3 | cloze+teach | yes |
| import | この国は肉を輸入しています。 | This country imports meat. | ゆにゅう | N5 L5 T5 C2 I3 — Blank could also be 輸出/生産/消費, not uniquely 輸入. | teach only | yes |
| import | この肉はアメリカから輸入したものです。 | This meat is something imported from America. | ゆにゅうした | N5 L5 T5 C4 I3 — 'from America' strongly cues 輸入した, minor ambiguity with 生産した. | cloze+teach | yes |
| import | この車は輸入ですか。 | Is this car imported? | ゆにゅう | N5 L5 T5 C2 I2 — Blank could be 中古/新品/新車 etc., not uniquely 輸入. | teach only | yes |
| industry | この町は自動車産業で有名です。 | This town is famous for the automobile industry. | さんぎょう | N5 L4 T5 C4 I4 | cloze+teach | yes |
| industry | この国の産業は昔より強くなりました。 | This country's industry has become stronger than before. | さんぎょう | N5 L4 T5 C3 I3 — other nouns like 経済 could also fit the blank | teach only | yes |
| graduation | 来月、大学を卒業します。 | I will graduate from university next month. | そつぎょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| graduation | 卒業したら、会社に勤めるつもりです。 | If I graduate, I plan to work at a company. | そつぎょうしたら | N5 L4 T5 C3 I3 — blank could arguably be filled by other verbs like 就職したら, slightly reducing forced uniqueness | teach only | yes |
| graduation | いつ卒業しますか。 | When will you graduate? | そつぎょう | N4 L5 T5 C2 I1 — generic sentence; blank could be filled by many verbs (帰る, 来る, etc.) | teach only | yes |
| major | 大学で何を専門にしていますか。 | What is your major at university? | せんもん | N5 L4 T5 C5 I4 | cloze+teach | yes |
| major | 私の専門は経済です。 | My major is economics. | せんもん | N5 L4 T5 C4 I3 | cloze+teach | yes |
| major | 専門が違うから、分かりません。 | Because our majors are different, I don't understand. | せんもん | N4 L4 T4 C2 I3 — blank could be filled by many nouns like 意見 or 趣味, not uniquely 専門 | teach only | yes |
| high school student | 息子は高校生です。 | My son is a high school student. | こうこうせい | N5 L5 T5 C2 I2 — Generic template sentence; many nouns could fill the blank (学生, 医者, 先生, etc.). | teach only | yes |
| high school student | 高校生の時、毎朝六時に起きました。 | When I was a high school student, I woke up at six every morning. | こうこうせい | N5 L5 T5 C3 I4 — Context suggests a student/young status but doesn't uniquely force 高校生 (could be 大学生, 中学生, etc.). | teach only | yes |
| high school student | 高校生は電車で学校へ通いますか。 | Do high school students commute to school by train? | こうこうせい | N5 L5 T5 C3 I4 — Plausible with other student types (大学生, 生徒) though 高校生 is a strong fit. | teach only | yes |
| a lecture | 今日の講義は九時に始まります。 | Today's lecture starts at nine. | こうぎ | N5 L5 T5 C2 I2 — blank could equally be 授業, 会議, 試験 etc. | teach only | yes |
| a lecture | 一緒に講義を聞きませんか。 | Won't you listen to the lecture with me? | こうぎ | N5 L5 T5 C2 I3 — blank could be 音楽, 話, ニュース etc. | teach only | yes |
| a lecture | 講義が難しかったから、よく分かりませんでした。 | Because the lecture was difficult, I didn't understand it well. | こうぎ | N5 L5 T5 C3 I3 — still plausible with 授業, 説明, 話 but somewhat narrower context | teach only | yes |
| lunch break | 昼休みに一緒に食べませんか。 | Won't you eat together during lunch break? | ひるやすみ | N5 L5 T5 C3 I3 — Blank could also be filled by other time words like 夜 or 朝. | teach only | yes |
| lunch break | 昼休みはいつも図書館で本を読みます。 | I always read books at the library during lunch break. | ひるやすみ | N5 L5 T5 C3 I3 — Other time-related nouns could also fit the blank. | teach only | yes |
| lunch break | 昼休みは何時からですか。 | What time does lunch break start? | ひるやすみ | N5 L5 T5 C2 I2 — Very generic; many nouns (会議, 授業, etc.) could fit the blank. | teach only | yes |
| literature | 文学の授業は面白いですか。 | Is the literature class interesting? | ぶんがく | N5 L5 T5 C2 I3 — Any subject could fill the blank (math, history, etc.). | teach only | yes |
| literature | 文学が好きだから、本をよく読みます。 | Because I like literature, I read books often. | ぶんがく | N5 L4 T5 C4 I4 — Reading and liking books strongly suggests literature, though 'reading' or similar could also fit. | cloze+teach | yes |
| mostly | 宿題はほとんど終わりました。 | The homework is mostly finished. | ほとんど | N5 L5 T5 C3 I2 — Other adverbs like もう/だいたい could also fit the blank. | teach only | yes |
| mostly | 友達の話はほとんど分かりませんでした。 | I mostly didn't understand my friend's story. | ほとんど | N5 L5 T4 C3 I3 — あまり or ぜんぜん could also fit grammatically, slightly reducing recoverability. | teach only | yes |
| intention | 今晩友達に電話するつもりです。 | I intend to call my friend tonight. | つもり | N5 L5 T5 C5 I3 | cloze+teach | yes |
| intention | 来週学校を休むつもりですか。 | Do you intend to be absent from school next week? | つもり | N5 L5 T5 C5 I3 | cloze+teach | yes |
| intention | 今日は出かけるつもりはありません。 | I have no intention of going out today. | つもり | N5 L5 T5 C5 I3 | cloze+teach | yes |
| rule | この学校の規則は厳しいです。 | This school's rules are strict. | きそく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| rule | 図書館の規則が分かりますか。 | Do you understand the library's rules? | きそく | N5 L5 T5 C3 I3 — blank could plausibly be other nouns like 地図 or 歴史 | teach only | yes |
| discourtesy | 電話で失礼な言葉を使ってしまいました。 | I accidentally used rude words on the phone. | しつれい | N4 L4 T4 C3 I4 — Blank could also be filled by other adjectives like 汚い/乱暴な, slightly lowering recoverability. | teach only | yes |
| discourtesy | 友達の家に着いたら、「失礼します」と言いましょう。 | When we arrive at our friend's house, let's say 'excuse me.' | しつれい | N5 L4 T4 C5 I3 — EN translation 'excuse me' is fine but slightly loses the nuance of a set greeting when entering a house. | cloze+teach | yes |
| chance | いい機会だから、友達を訪ねましょう。 | Since it's a good chance, let's visit our friend. | きかい | N4 L4 T5 C3 I3 | teach only | yes |
| chance | 外国人と話す機会がありますか。 | Do you have chances to talk with foreigners? | きかい | N5 L4 T5 C4 I4 | cloze+teach | yes |
| chance | 今度その音楽会に行く機会があったら、一緒に行きたいです。 | If I get a chance to go to that concert next time, I want to go together. | きかい | N4 L4 T4 C3 I3 | teach only | yes |
| made in ~ | 彼の靴はアメリカ製だと思います。 | I think his shoes are made in America. | せい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| made in ~ | このラジオはアメリカ製ですか。 | Is this radio made in America? | せい | N5 L5 T5 C4 I2 — generic template sentence | cloze+teach | yes |
| caution | 先生は学生に注意しました。 | The teacher cautioned the student. | ちゅうい | N5 L4 T4 C3 I3 — 注意しました could also mean 'warned/scolded' rather than 'cautioned', but blank could also be filled with other words like 質問/電話 given weak context | teach only | yes |
| caution | 道を渡るとき、注意してください。 | Please be careful when crossing the street. | ちゅうい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| caution | 電話で話すとき、言葉に注意しなければなりません。 | You must be careful with your words when speaking on the phone. | ちゅうい | N5 L4 T5 C4 I3 | cloze+teach | yes |
| really | 彼はそう思っていません。 | He doesn't think so. | そう | N4 L4 T4 C3 I2 — Target gloss 'really' doesn't match this usage of そう as 'so'; blank could also fit other adverbs like そんなに. | teach only | yes |
| really | 先生もそうおっしゃいましたか。 | Did the teacher say so too? | そう | N4 L3 T4 C3 I2 — Same mismatch: そう here means 'so', not 'really'; おっしゃる may exceed N4 but is common. | teach only | yes |
| government worker | 兄は公務員です。 | My older brother is a government worker. | こうむいん | N5 L5 T5 C2 I2 — Any job noun could fill the blank; very generic template sentence. | teach only | yes |
| government worker | 去年、彼は公務員になりました。 | Last year, he became a government worker. | こうむいん | N5 L5 T5 C2 I3 — Many job nouns fit the blank equally well. | teach only | yes |
| government worker | 将来、公務員になりたいです。 | I want to become a government worker in the future. | こうむいん | N5 L5 T5 C2 I3 — Any profession noun could complete this common aspiration sentence. | teach only | yes |
| announcer | 彼女はテレビのアナウンサーです。 | She is a TV announcer. | あなうんさあ | N5 L5 T5 C2 I2 — Very generic template sentence; many professions could fill the blank. | teach only | yes |
| announcer | 昨日、有名なアナウンサーに会いました。 | Yesterday, I met a famous announcer. | あなうんさあ | N5 L5 T5 C2 I3 — Context doesn't uniquely point to 'announcer'; other professions/celebrities fit equally well. | teach only | yes |
| announcer | 将来、アナウンサーになりたいです。 | I want to become an announcer in the future. | あなうんさあ | N5 L5 T5 C2 I3 — Any career noun could fill this common aspiration sentence, weakening cloze uniqueness. | teach only | yes |
| eraser | 机の上に消しゴムがあります。 | There is an eraser on the desk. | けしごむ | N5 L5 T5 C2 I2 — Any object noun could fill the blank, so eraser isn't uniquely recoverable. | teach only | yes |
| eraser | 昨日、消しゴムを忘れました。 | Yesterday, I forgot my eraser. | けしごむ | N5 L5 T5 C2 I3 — Blank could be any forgettable item (pen, book, etc.), not uniquely eraser. | teach only | yes |
| eraser | 新しい消しゴムが欲しいです。 | I want a new eraser. | けしごむ | N5 L5 T5 C2 I2 — Generic want-sentence; blank could be filled by many nouns. | teach only | yes |
| technique | この会社の技術は素晴らしいです。 | This company's technology is wonderful. | ぎじゅつ | N4 L5 T4 C2 I2 — Generic template; many nouns (サービス, 製品) could fill the blank. | teach only | yes |
| technique | 大学で新しい技術を習いました。 | I learned new technology at university. | ぎじゅつ | N4 L5 T4 C3 I3 — Context helps but 知識 or 言語 could also fit. | teach only | yes |
| technique | もっと技術を習いたいです。 | I want to learn more technology. | ぎじゅつ | N4 L5 T4 C2 I2 — Too generic; many nouns fit the blank equally well. | teach only | yes |
| trade | 父は貿易の仕事をしています。 | My father works in trade. | ぼうえき | N5 L5 T5 C2 I3 — Blank could be filled by many other jobs (医者, 教師, etc.), reducing recoverability. | teach only | yes |
| trade | 去年、その会社は貿易を始めました。 | Last year, that company started trade. | ぼうえき | N5 L5 T5 C2 I3 — Many nouns could fit before 'を始めました', so the blank isn't uniquely determined. | teach only | yes |
| trade | 将来、貿易の仕事をしたいです。 | I want to work in trade in the future. | ぼうえき | N5 L5 T5 C2 I3 — Similar to other sentences, many job types could fit the blank. | teach only | yes |
| an exam | 来週、試験があります。 | There is an exam next week. | しけん | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (会議, パーティー, etc.) | teach only | yes |
| an exam | 昨日、難しい試験を受けました。 | Yesterday, I took a difficult exam. | しけん | N5 L5 T5 C3 I3 — 受けました narrows options but テスト could also fit | teach only | yes |
| an exam | 試験の前に、しっかり復習したいです。 | Before the exam, I want to review thoroughly. | しけん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| clerk | 店員に道を聞きました。 | I asked the store clerk for directions. | てんいん | N5 L5 T5 C3 I3 | teach only | yes |
| clerk | あの店員は親切です。 | That store clerk is kind. | てんいん | N4 L5 T5 C2 I2 — blank could be filled by many nouns (先生, 人, etc.), reducing recoverability | teach only | yes |
| factory | 父は工場で働いています。 | My father works at a factory. | こうじょう | N5 L5 T5 C2 I3 — Blank could be filled by many workplace nouns (会社, 店, 病院), reducing recoverability. | teach only | yes |
| factory | あの工場でだれが働いていますか。 | Who works at that factory? | こうじょう | N5 L5 T5 C2 I3 — Context doesn't uniquely require 工場; other workplace nouns fit equally well. | teach only | yes |
| factory | 工場が近いから、自転車で通います。 | Since the factory is close, I commute by bicycle. | こうじょう | N5 L5 T5 C2 I3 — Many nouns (学校, 会社, 駅) could fill the blank equally well. | teach only | yes |
| gas station | 会社へ行く前にガソリンスタンドに寄ります。 | I stop by the gas station before going to work. | がそりんすたんど | N5 L5 T5 C3 I3 — Blank could plausibly be other places like コンビニ or 銀行, so context doesn't fully force ガソリンスタンド. | teach only | yes |
| gas station | 近くにガソリンスタンドがありますか。 | Is there a gas station nearby? | がそりんすたんど | N5 L5 T5 C2 I2 — Generic 'is there a ___ nearby' template fits many nouns, weak cloze cue. | teach only | yes |
| gas station | ガソリンが無いから、ガソリンスタンドに行きます。 | Since I'm out of gas, I'm going to the gas station. | がそりんすたんど | N5 L5 T5 C5 I4 — Strong context via ガソリンが無いから uniquely points to gas station. | cloze+teach | yes |
| Shinto shrine | 神社へ一緒に行きませんか。 | Won't you come to the shrine with me? | じんじゃ | N5 L5 T5 C2 I3 — blank could be any place noun (park, station, etc.), not uniquely 'shrine' | teach only | yes |
| Shinto shrine | あの神社は有名ですか。 | Is that shrine famous? | じんじゃ | N5 L5 T5 C2 I3 — generic template, blank fits many nouns like café, town, temple | teach only | yes |
| medical science | 医学について質問してもいいですか。 | May I ask a question about medicine? | いがく | N4 L5 T5 C2 I3 — Blank could be filled by many topic nouns, not uniquely 医学. | teach only | yes |
| text | このテキストを読んでください。 | Please read this textbook. | てきすと | N5 L5 T5 C2 I2 — Blank could be filled by many nouns like 本, 資料, etc. | teach only | yes |
| text | テキストを忘れました。 | I forgot my textbook. | てきすと | N5 L5 T5 C2 I2 — Very generic sentence; many objects could fit the blank (傘, 財布, 宿題, etc.). | teach only | yes |
| college student | 彼女は大学生です。 | She is a college student. | だいがくせい | N5 L5 T5 C2 I1 — generic template, many nouns could fill blank | teach only | yes |
| college student | 大学生の時、よく旅行をしました。 | When I was a college student, I traveled often. | だいがくせい | N5 L5 T5 C3 I3 — blank could be filled by other 'X時' phrases | teach only | yes |
| college student | 大学生になったら、一人で住みたいです。 | When I become a college student, I want to live alone. | だいがくせい | N5 L5 T5 C3 I3 — other nouns (社会人など) could also fit context | teach only | yes |
| preparation of lessons | 明日の授業の予習をしてください。 | Please do the preparation for tomorrow's class. | よしゅう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| preparation of lessons | 今夜、予習をしなければなりません。 | I have to do my lesson preparation tonight. | よしゅう | N5 L4 T5 C3 I3 — other words like 勉強 or 宿題 could also fit the blank. | teach only | yes |
| pronunciation | 先生の発音はとても綺麗です。 | The teacher's pronunciation is very beautiful. | はつおん | N5 L5 T5 C3 I3 | teach only | yes |
| pronunciation | 発音を直してください。 | Please correct my pronunciation. | はつおん | N5 L5 T5 C3 I3 — could also be about other things needing correction, but reasonably clear | teach only | yes |
| mark | テストで悪い点を取りました。 | I got a bad score on the test. | てん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| mark | 点が低かったら、先生に聞いてください。 | If your score is low, please ask the teacher. | てん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| mark | 今度のテストでいい点を取りたいです。 | I want to get a good score on the next test. | てん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| section manager | 課長に相談してください。 | Please consult with the section manager. | かちょう | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (先生, 部長, 友達, etc.), low recoverability. | teach only | yes |
| section manager | 課長は今、会議室にいます。 | The section manager is in the meeting room now. | かちょう | N5 L5 T5 C2 I3 — Many people could be described as being in the meeting room, so the blank isn't uniquely determined. | teach only | yes |
| section manager | 課長になったら、忙しくなると思います。 | I think if I become a section manager, I will get busier. | かちょう | N5 L4 T5 C2 I4 — Other job titles (部長, 社長) could equally fill the blank, reducing uniqueness. | teach only | yes |
| department of a university | 彼はどの学部の学生ですか。 | Which department is he a student of? | がくぶ | N5 L5 T5 C3 I3 — Blank could plausibly be 学校 or クラス too, reducing uniqueness. | teach only | yes |
| department of a university | 学部が違えば、授業も違います。 | If the department is different, the classes are different too. | がくぶ | N5 L5 T5 C3 I3 — Other words like クラス or先生 could fit the blank context. | teach only | yes |
| department of a university | 兄の学部は難しいと有名です。 | My brother's department is famous for being difficult. | がくぶ | N5 L5 T5 C3 I3 — 学科 or 専攻 could also fit, slightly reducing recoverability. | teach only | yes |
| to steal | 誰かが私の自転車を盗みました。 | Someone stole my bicycle. | ぬすみました | N5 L5 T5 C3 I3 | teach only | yes |
| to steal | 泥棒はお金を盗んだと思います。 | I think the thief stole the money. | ぬすんだ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to steal | 財布を盗んだ人を見ましたか。 | Did you see the person who stole the wallet? | ぬすんだ | N5 L5 T5 C3 I3 | teach only | yes |
| to sound | 電話が鳴っています。 | The phone is ringing. | なって | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to sound | ベルが鳴ったら、教室に入ってください。 | When the bell rings, please enter the classroom. | なったら | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to live | おじいさんは九十歳まで生きました。 | My grandfather lived until he was ninety. | いきました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to live | 長く生きたいです。 | I want to live long. | いきたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to boil | 水はもう沸きましたか。 | Has the water boiled yet? | わきました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to snap | 弟が私の鉛筆を折りました。 | My little brother broke my pencil. | おりました | N4 L5 T4 C3 I3 — Blank could be filled with other verbs like 汚す/なくす, not uniquely 折る. | teach only | yes |
| to snap | 腕を折ったことがあります。 | I have broken my arm before. | おった | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to snap | 木の枝を折ってはいけません。 | You must not break the tree's branches. | おって | N5 L5 T5 C4 I3 — 切る could also fit but 折る is the more natural collocation for branches. | cloze+teach | yes |
| to get angry | 先生は学生が遅れたので怒りました。 | The teacher got angry because the student was late. | おこりました | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to get angry | 宿題をしなかったら、母が怒ると思います。 | If I don't do my homework, I think my mother will get angry. | おこる | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to get angry | そんなに怒らないでください。 | Please don't get so angry. | おこらないで | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to cease | 雨が止んだら、公園へ行きましょう。 | When the rain stops, let's go to the park. | やんだら | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to cease | 風はまだ止みません。 | The wind hasn't stopped yet. | やみません | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to cease | 雨はいつ止みますか。 | When will the rain stop? | やみます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| worry | 母は私のことを心配しています。 | My mother worries about me. | しんぱいして | N5 L5 T5 C4 I3 | cloze+teach | yes |
| worry | 試験のことを心配しないでください。 | Please don't worry about the exam. | しんぱいしないで | N5 L5 T5 C3 I3 — other verbs like 気にしないで/忘れないで could also fit the blank | teach only | yes |
| worry | 帰りが遅れたら、みんなが心配すると思います。 | If you're late coming home, I think everyone will worry. | しんぱいする | N5 L4 T5 C4 I4 | cloze+teach | yes |
| not at all | 今日は全然暑くないです。 | Today it's not hot at all. | ぜんぜん | N5 L5 T5 C3 I2 — あまり could also fit the blank, reducing uniqueness | teach only | yes |
| not at all | 私は全然運動しません。 | I don't exercise at all. | ぜんぜん | N5 L5 T5 C3 I3 — あまり could also fit the blank, reducing uniqueness | teach only | yes |
| to be helpful | この道具は仕事でとても役に立ちます。 | This tool is very useful for work. | やくにたちます | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other adjectives like 便利です, reducing specificity. | teach only | yes |
| to be helpful | 昨日習った文法が役に立ちました。 | The grammar I learned yesterday was useful. | やくにたちました | N5 L5 T5 C3 I3 — Context allows several verbs (使えた, 覚えられた) besides 役に立った. | teach only | yes |
| to be helpful | もしその辞書が役に立ったら教えてください。 | If that dictionary is useful, please let me know. | やくにたったら | N5 L5 T5 C4 I3 — Slightly more context-specific due to conditional structure, but still generic phrasing. | cloze+teach | yes |
| middle | 部屋の真中に机があります。 | There is a desk in the middle of the room. | まんなか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| middle | 彼は写真の真中に立っていました。 | He was standing in the middle of the photo. | まんなか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| tennis | 日曜日に友達とテニスをします。 | I play tennis with my friend on Sundays. | てにす | N5 L5 T5 C3 I3 — Any sport word could fill the blank, so context doesn't force 'tennis' specifically. | teach only | yes |
| tennis | 昨日テニスをして疲れました。 | I got tired after playing tennis yesterday. | てにす | N5 L5 T5 C3 I4 — Blank could be filled by many sports/activities that cause tiredness. | teach only | yes |
| tennis | 天気がよければテニスをしましょう。 | If the weather is nice, let's play tennis. | てにす | N5 L5 T5 C3 I4 — Weather-dependent activity could be many sports, not uniquely tennis. | teach only | yes |
| competition | 会社の中で競争が厳しいです。 | Competition is fierce within the company. | きょうそう | N5 L5 T5 C3 I3 — 厳しい could also describe 環境/規則, not uniquely 競争 | teach only | yes |
| competition | 競争に勝つために毎日頑張っています。 | I work hard every day to win the competition. | きょうそう | N5 L5 T5 C3 I3 — other words like 試合 could also fit the blank | teach only | yes |
| relation | この問題と天気は関係がありません。 | This problem has no relation to the weather. | かんけい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| relation | 二人の関係はとてもいいです。 | The relationship between the two of them is very good. | かんけい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| relation | 仕事の関係で忙しいです。 | I'm busy because of work matters. | かんけい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| broadcast program | 今晩面白いテレビ番組があります。 | There's an interesting TV program tonight. | ばんぐみ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| broadcast program | 昨日見た番組はとても面白かったです。 | The program I watched yesterday was very interesting. | ばんぐみ | N5 L5 T5 C2 I3 — blank could be filled by many nouns like 映画・本 | teach only | yes |
| broadcast program | この番組の話をしてください。 | Please tell me about this program. | ばんぐみ | N4 L5 T5 C2 I2 — generic sentence, blank could fit many nouns | teach only | yes |
| export | この会社は車を輸出しています。 | This company exports cars. | ゆしゅつしています | N5 L5 T5 C3 I3 | teach only | yes |
| export | 去年その品物を輸出しました。 | Last year we exported that product. | ゆしゅつしました | N5 L5 T5 C2 I2 — Many verbs could fit the blank (sold, bought, made, etc.). | teach only | yes |
| export | 輸出が増えれば経済がよくなると思います。 | I think the economy will improve if exports increase. | ゆしゅつ | N5 L4 T5 C3 I4 — Other nouns like sales or investment could also fit the blank. | teach only | yes |
| jam | 友達が来た時、パンにジャムを塗りました。 | When my friend came, I spread jam on bread. | じゃむ | N5 L5 T5 C3 I4 — blank could also be butter/honey, but jam fits well contextually | teach only | yes |
| jam | 趣味でジャムを作ります。 | Making jam is my hobby. | じゃむ | N4 L5 T4 C2 I3 — blank could be filled by many hobby items (cake, bread, etc.) | teach only | yes |
| jam | 甘いジャムが食べたいです。 | I want to eat sweet jam. | じゃむ | N5 L5 T5 C2 I2 — generic sentence; blank could be any sweet food | teach only | yes |
| flavor | この料理の味はどうですか。 | How is the flavor of this dish? | あじ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| feast | 友達の家でごちそうを食べました。 | I ate a feast at my friend's house. | ごちそう | N5 L5 T5 C2 I3 — Blank could also be filled by many other food words (寿司, 料理, etc.), reducing uniqueness. | teach only | yes |
| feast | 誕生日にごちそうを作りたいです。 | I want to make a feast for the birthday. | ごちそう | N5 L5 T5 C2 I3 — Context doesn't force 'ごちそう' specifically; ケーキ or 料理 also fit. | teach only | yes |
| feast | 今夜はごちそうがありますか。 | Is there a feast tonight? | ごちそう | N4 L5 T5 C2 I2 — Generic phrasing; many nouns (パーティー, 会議, etc.) could fill the blank. | teach only | yes |
| uncooked rice | 趣味で米を育てています。 | I grow rice as a hobby. | こめ | N5 L5 T5 C2 I3 — Many nouns could fill the blank (e.g. 野菜, 花). | teach only | yes |
| uncooked rice | 新しい米を買いたいです。 | I want to buy new rice. | こめ | N4 L5 T5 C2 I2 — Generic template sentence; blank could be almost any noun. | teach only | yes |
| hamburger steak | 友達が来たので、ハンバーグを作りました。 | Since my friend came, I made hamburger steak. | はんばあぐ | N5 L5 T5 C2 I3 — Many food words could fill the blank; context doesn't force ハンバーグ specifically. | teach only | yes |
| hamburger steak | ハンバーグが食べたいです。 | I want to eat hamburger steak. | はんばあぐ | N5 L5 T5 C1 I1 — Generic template sentence; any food noun fits the blank equally well. | teach only | yes |
| hamburger steak | 晩御飯にハンバーグを食べますか。 | Will you eat hamburger steak for dinner? | はんばあぐ | N5 L5 T5 C1 I2 — Any dinner food word could fill the blank, so the target isn't uniquely recoverable. | teach only | yes |
| cake | 友達の誕生日にケーキを作りました。 | I made a cake for my friend's birthday. | けえき | N5 L5 T5 C3 I4 | teach only | yes |
| cake | 甘いケーキが食べたいです。 | I want to eat a sweet cake. | けえき | N5 L5 T5 C3 I3 | teach only | yes |
| cake | パーティーでケーキを食べますか。 | Will you eat cake at the party? | けえき | N4 L5 T5 C2 I3 — reading of パーティー as ぱあてぃい is an unusual kana rendering of the long vowel, and blank could be filled by many foods. | teach only | yes |
| meal | 友達と一緒に食事しました。 | I had a meal together with my friend. | しょくじしました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| meal | 今晩、一緒に食事しませんか。 | Won't you have a meal with me tonight? | しょくじしません | N5 L5 T5 C4 I4 | cloze+teach | yes |
| piano | あのレストランにはピアノがあります。 | There is a piano in that restaurant. | ぴあの | N4 L5 T5 C3 I3 — Plausible but blank could be filled by other instruments (e.g., ギター). | teach only | yes |
| shelves | 新しい本をこの棚に置きました。 | I put the new books on this shelf. | たな | N5 L5 T5 C3 I3 — Context with 本 helps but other nouns (箱, 机) could also fit the blank. | teach only | yes |
| cotton | 木綿は柔らかいから、好きです。 | Because cotton is soft, I like it. | もめん | N4 L5 T5 C2 I2 — Many materials (wool, silk) could fit the blank equally well. | teach only | yes |
| cotton | このセーターは木綿ではありません。 | This sweater is not cotton. | もめん | N4 L5 T5 C2 I2 — Any fabric type could fill the blank; not uniquely cotton. | teach only | yes |
| computer (formal) | 会社でコンピュータを使います。 | I use a computer at the office. | こんぴゅーた | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (car, phone, etc.), not uniquely computer. | teach only | yes |
| computer (formal) | このコンピュータは新しくありません。 | This computer is not new. | こんぴゅーた | N5 L5 T5 C2 I2 — Generic template sentence, many nouns fit the blank. | teach only | yes |
| I (used by men towards those of equal or | 僕は毎日学校へ行きます。 | I go to school every day. | ぼく | N5 L5 T5 C2 I1 — Blank could be filled by many pronouns (私, 俺, 彼, etc.), so it's not uniquely recoverable. | teach only | yes |
| I (used by men towards those of equal or | 僕は昨日映画を見ました。 | I watched a movie yesterday. | ぼく | N5 L5 T5 C2 I2 — Similar ambiguity; any first-person or subject pronoun could fit the blank. | teach only | yes |
| I (used by men towards those of equal or | 僕はコーヒーが飲みたいです。 | I want to drink coffee. | ぼく | N5 L5 T5 C2 I2 — Generic template sentence; blank not uniquely determined by context. | teach only | yes |
| he | 彼は毎朝公園を走ります。 | He runs in the park every morning. | かれ | N5 L5 T5 C1 I3 — Blank could be filled by many other subjects (she, they, a name), not uniquely recoverable as 彼. | teach only | yes |
| he | 彼は先週旅行に行きました。 | He went on a trip last week. | かれ | N5 L5 T5 C1 I3 — Any subject noun/pronoun fits the blank; not uniquely determined. | teach only | yes |
| thief | 昨夜、家に泥棒が入りました。 | A thief broke into the house last night. | どろぼう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| thief | あなたは泥棒を見たことがありますか。 | Have you ever seen a thief? | どろぼう | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (animal, ghost, celebrity), low cloze uniqueness. | teach only | yes |
| baby | 赤ちゃんはよく泣きます。 | The baby cries a lot. | あかちゃん | N5 L5 T5 C3 I2 — Blank could be filled by other subjects like 子供 or 犬, reducing uniqueness. | teach only | yes |
| baby | 昨日、姉に赤ちゃんが生まれました。 | My sister had a baby yesterday. | あかちゃん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| baby | 赤ちゃんを見たいです。 | I want to see the baby. | あかちゃん | N4 L5 T5 C2 I2 — Very generic; many nouns could fill the blank (映画, 猫, etc.). | teach only | yes |
| a parent | 親は子供を大切にします。 | Parents cherish their children. | おや | N5 L5 T5 C3 I2 — Fairly generic; 'teacher' or others could also fit contextually, though child reference helps. | teach only | yes |
| a parent | 親は昨夜、とても心配しました。 | The parents were very worried last night. | おや | N5 L5 T5 C1 I2 — No contextual clue ties the blank specifically to 'parent'; many nouns could fit. | teach only | yes |
| a parent | 親はいつも子供のことを考えています。 | Parents are always thinking about their children. | おや | N5 L5 T5 C3 I2 — Generic sentence; child reference gives some but not strong cue for 'parent'. | teach only | yes |
| person who is specialized in ~ | 彼は将来、政治家になりたいと言いました。 | He said he wants to become a politician in the future. | か | N5 L4 T5 C4 I3 | cloze+teach | yes |
| papa | パパは今、会社にいます。 | Papa is at the office now. | ぱぱ | N5 L5 T5 C2 I2 — blank could be filled by many nouns (ママ, 先生, 兄 etc.), context doesn't force パパ | teach only | yes |
| papa | パパは昨日、とても忙しかったです。 | Papa was very busy yesterday. | ぱぱ | N5 L5 T5 C2 I2 — generic sentence; blank could be any person, low forcing context | teach only | yes |
| papa | 子供はパパと遊びたいです。 | The child wants to play with papa. | ぱぱ | N5 L5 T5 C2 I3 — blank could be ママ or other family member, not uniquely パパ | teach only | yes |
| husband | 私の夫は医者です。 | My husband is a doctor. | おっと | N5 L5 T5 C2 I2 — Generic sentence; many family words could fill the blank. | teach only | yes |
| husband | 夫は昨夜、遅く帰りました。 | My husband came home late last night. | おっと | N5 L5 T5 C2 I3 — Context doesn't uniquely force 'husband' over other family terms. | teach only | yes |
| husband | 夫は今日、何時に帰りますか。 | What time will my husband come home today? | おっと | N5 L5 T5 C2 I3 — Similar to above; blank could be filled by other family nouns. | teach only | yes |
| difficult to do ~ | この靴は歩きにくいです。 | These shoes are hard to walk in. | にくい | N5 L4 T5 C3 I3 | teach only | yes |
| difficult to do ~ | この漢字は読みにくいですか。 | Is this kanji hard to read? | にくい | N5 L4 T5 C3 I3 | teach only | yes |
| urgent | 急な電話が来ました。 | An urgent phone call came. | きゅうな | N5 L5 T5 C3 I3 — Other adjectives (変な, 大事な) could also fill the blank before 電話. | teach only | yes |
| urgent | 急ですが、今晩遊びに行ってもいいですか。 | This is sudden, but may I go out tonight? | きゅう | N5 L4 T5 C3 I3 — Other words like すみません/残念 could plausibly fit the blank before ですが. | teach only | yes |
| urgent | 急な用事で学校を休みます。 | I will be absent from school due to an urgent matter. | きゅうな | N5 L5 T5 C4 I4 — 急な用事 is a strong idiomatic collocation, making the blank fairly recoverable. | cloze+teach | yes |
| soft | 声をもっとソフトにしてください。 | Please make your voice softer. | そふと | N4 L5 T5 C3 I3 — Plausible sentence but 静か or 優しく could also fit the blank. | teach only | yes |
| fairly well | 父の病気は大分よくなりました。 | My father's illness has gotten considerably better. | だいぶ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| fairly well | 電話で話したら、大分安心しました。 | When I talked on the phone, I felt considerably relieved. | だいぶ | N5 L5 T5 C3 I4 — blank could also be filled by 少し/とても etc. | teach only | yes |
| fairly well | テストの点が大分上がりました。 | My test score has gone up considerably. | だいぶ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to paint | 壁を白く塗ります。 | I will paint the wall white. | ぬります | N5 L5 T5 C3 I4 — する could also fit the blank (壁を白くします), so it's not perfectly cloze-locked. | teach only | yes |
| to paint | 昨日、会社の机を茶色に塗りました。 | Yesterday, I painted the office desk brown. | ぬりました | N5 L5 T5 C3 I4 — する also fits grammatically (茶色にしました), reducing uniqueness of the answer. | teach only | yes |
| to paint | この箱を青く塗ってください。 | Please paint this box blue. | ぬって | N5 L5 T5 C3 I4 — する could substitute in the blank (青くしてください), slightly weakening cloze certainty. | teach only | yes |
| to search | 財布を探しています。 | I am searching for my wallet. | さがして | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to search | 昨日、会議室で鍵を探しました。 | Yesterday, I searched for the key in the meeting room. | さがしました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to search | 図書館で本を探してください。 | Please search for the book at the library. | さがして | N5 L5 T5 C3 I3 — 借りて (borrow) could also fit the blank, slightly reducing recoverability. | teach only | yes |
| to rejoice | 母はそのニュースを聞いて喜びました。 | My mother was pleased to hear the news. | よろこびました | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to rejoice | 晴れたら、子供たちは喜ぶと思います。 | If it's sunny, I think the children will be happy. | よろこぶ | N5 L4 T5 C3 I3 — Blank could plausibly be filled with other reaction verbs like 遊ぶ or はしゃぐ, slightly reducing uniqueness. | teach only | yes |
| -- humble expression for あげる -- | 先生に花を差し上げます。 | I will give flowers to my teacher. | さしあげます | N5 L4 T5 C4 I2 | cloze+teach | yes |
| -- humble expression for あげる -- | これを差し上げましょうか。 | Shall I give this to you? | さしあげましょう | N5 L4 T5 C3 I3 — could also be あげましょうか without more context | teach only | yes |
| to tidy up | 仕事の後で机を片付けます。 | I will tidy up the desk after work. | かたづけます | N5 L5 T5 C3 I2 | teach only | yes |
| to tidy up | 昨日、部屋を片付けました。 | Yesterday, I tidied up the room. | かたづけました | N5 L5 T5 C3 I2 | teach only | yes |
| to tidy up | 会議室を片付けてください。 | Please tidy up the meeting room. | かたづけて | N5 L5 T5 C3 I2 | teach only | yes |
| hard | 厳しい規則があります。 | There are strict rules. | きびしい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| hard | 先生は厳しいですか。 | Is the teacher strict? | きびしい | N5 L5 T5 C2 I2 — Many adjectives could fill the blank, low cloze specificity. | teach only | yes |
| deep | この川は深いです。 | This river is deep. | ふかい | N5 L5 T5 C2 I2 — Blank could be filled by many adjectives (きれい、広い等), low recoverability; generic template sentence. | teach only | yes |
| deep | 海は深いですか。 | Is the sea deep? | ふかい | N5 L5 T5 C2 I2 — Same generic pattern; many adjectives fit the blank equally well. | teach only | yes |
| deep | もっと深い意味があると思います。 | I think there is a deeper meaning. | ふかい | N5 L4 T5 C4 I4 — ‘深い意味’ is a strong collocation making the blank fairly recoverable, though other adjectives like 別の could still fit. | cloze+teach | yes |
| sad | 友達が死んで悲しいです。 | I am sad because my friend died. | かなしい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| sad | 悲しい映画を見たことがあります。 | I have watched a sad movie. | かなしい | N5 L5 T5 C2 I3 — Blank could be filled by many adjectives (怖い, 面白い, etc.) | teach only | yes |
| sad | なぜそんなに悲しいですか。 | Why are you so sad? | かなしい | N5 L5 T5 C2 I3 — Blank could be filled by many emotion adjectives, not uniquely 悲しい | teach only | yes |
| prosperous | この国は貿易が盛んです。 | This country's trade is thriving. | さかん | N5 L5 T5 C3 I3 — Other adjectives like 有名 could also fit the blank. | teach only | yes |
| prosperous | あの町はスポーツが盛んですか。 | Is sports popular in that town? | さかん | N5 L5 T5 C3 I3 — 人気 or 有名 could also fit the blank. | teach only | yes |
| prosperous | 昔からこの国は産業が盛んだったと思います。 | I think this country's industry has been thriving since long ago. | さかん | N5 L5 T5 C4 I4 — 昔から narrows context nicely toward 盛ん. | cloze+teach | yes |
| shallow | このプールは浅いです。 | This pool is shallow. | あさい | N5 L5 T5 C2 I2 — Many adjectives could fill the blank (深い/汚い/大きい), low cloze constraint. | teach only | yes |
| shallow | 浅い所で子供が遊んでいます。 | Children are playing in the shallow area. | あさい | N5 L5 T5 C3 I3 — Context of children playing suggests shallow but other adjectives like 広い could fit. | teach only | yes |
| regret | 明日の旅行に行けなくて残念です。 | It's a pity I can't go on tomorrow's trip. | ざんねん | N5 L5 T5 C3 I4 — Words like 悲しい could also fit the blank. | teach only | yes |
| regret | 試合に負けて残念でした。 | It was disappointing to lose the game. | ざんねん | N5 L5 T5 C3 I4 — Alternative emotion words could also fit the blank. | teach only | yes |
| regret | 残念ですが、パーティーに行けません。 | Unfortunately, I can't go to the party. | ざんねん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| polite | 店員はとても丁寧です。 | The clerk is very polite. | ていねい | N5 L5 T5 C3 I3 — Other adjectives like 親切 could also fit the blank. | teach only | yes |
| polite | もっと丁寧に話してください。 | Please speak more politely. | ていねい | N5 L5 T5 C3 I3 — Adverbs like ゆっくり or はっきり could also fit. | teach only | yes |
| polite | 丁寧な手紙を書きました。 | I wrote a polite letter. | ていねい | N5 L5 T5 C3 I3 — Other adjectives like 長い or きれいな could also fit the blank. | teach only | yes |
| scary | あの映画は怖いです。 | That movie is scary. | こわい | N5 L5 T5 C2 I2 — Many adjectives could fill the blank (面白い, つまらない, etc.). | teach only | yes |
| scary | 犬が怖くて逃げました。 | I was scared of the dog and ran away. | こわくて | N5 L4 T5 C4 I3 — Context of running away strongly implies fear, good cloze constraint. | cloze+teach | yes |
| preparation | 友達が来る前に晩御飯の用意をしました。 | I prepared dinner before my friend came. | ようい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| preparation | もしもし、旅行の用意はできましたか。 | Hello, have you finished preparing for the trip? | ようい | N4 L5 T5 C4 I3 — もしもし opener slightly odd but plausible phone call context | cloze+teach | yes |
| shape | この花瓶の形はきれいだと思いませんか。 | Don't you think the shape of this vase is beautiful? | かたち | N5 L5 T5 C3 I4 — Other words like 色 could also fit the blank. | teach only | yes |
| shape | この漢字の形を紙に書いてください。 | Please write the shape of this kanji on paper. | かたち | N4 L5 T5 C4 I3 | cloze+teach | yes |
| shape | この椅子の形はあの椅子より丸いです。 | The shape of this chair is rounder than that chair. | かたち | N5 L5 T5 C5 I4 | cloze+teach | yes |
| congratulation | 卒業のお祝いをしたいです。 | I want to have a graduation celebration. | おいわい | N5 L4 T5 C3 I3 — Natural and clear, though other nouns like パーティー could also fit the blank. | teach only | yes |
| it should be so | もう電話をしたはずです。 | He should have already made the call. | はず | N5 L3 T5 C3 I3 | teach only | yes |
| it should be so | 友達はもう着いているはずです。 | My friend should have already arrived. | はず | N5 L3 T5 C3 I3 | teach only | yes |
| law | 大学で法律を習っています。 | I am studying law at university. | ほうりつ | N5 L5 T5 C2 I3 — Blank could be filled by many subjects (英語, 数学, etc.), not uniquely 法律. | teach only | yes |
| law | あの法律を知っていますか。 | Do you know that law? | ほうりつ | N5 L5 T5 C2 I2 — Generic 'do you know that ___' fits many nouns, not just 法律. | teach only | yes |
| law | 新しい法律ができました。 | A new law was made. | ほうりつ | N5 L5 T5 C2 I3 — ‘新しい___ができました’ could apply to many nouns like 店 or ルール, weak cloze constraint. | teach only | yes |
| oppose | 学校でその意見に反対しました。 | I opposed that opinion at school. | はんたい | N5 L4 T5 C3 I3 — 賛成 could also fit grammatically, reducing uniqueness of blank. | teach only | yes |
| oppose | あなたはこの計画に反対ですか。 | Are you opposed to this plan? | はんたい | N5 L4 T5 C3 I3 — 賛成 also fits the same slot semantically-opposite but grammatically valid. | teach only | yes |
| oppose | 電話で反対だと言いました。 | I said over the phone that I was opposed. | はんたい | N4 L4 T5 C2 I2 — Very generic; many adjectives/nouns could fill the blank. | teach only | yes |
| change | 店でおつりをもらいました。 | I received change at the store. | おつり | N4 L5 T5 C3 I2 — Generic sentence; other nouns could fill the blank. | teach only | yes |
| change | おつりをください。 | Please give me the change. | おつり | N4 L5 T5 C3 I2 — Very short, many nouns could fit before ください. | teach only | yes |
| interest | 私は音楽に興味があります。 | I am interested in music. | きょうみ | N5 L5 T5 C4 I2 | cloze+teach | yes |
| interest | あなたはスポーツに興味がありますか。 | Are you interested in sports? | きょうみ | N5 L5 T5 C4 I2 | cloze+teach | yes |
| interest | 歴史にもっと興味を持ちたいです。 | I want to become more interested in history. | きょうみ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| senior members of a group | 先輩に質問してもいいですか。 | May I ask my senior a question? | せんぱい | N5 L5 T5 C2 I3 — Blank could be filled by many nouns like 先生 or 友達, not uniquely 先輩. | teach only | yes |
| senior members of a group | 明日、先輩と一緒にテニスをしませんか。 | Won't you play tennis with our senior tomorrow? | せんぱい | N5 L5 T5 C2 I3 — Many other nouns (友達, 先生) fit the blank equally well. | teach only | yes |
| senior members of a group | 先輩は毎日遅くまで仕事をします。 | My senior works late every day. | せんぱい | N5 L5 T5 C2 I3 — Sentence structure allows many subject nouns, not uniquely recoverable as 先輩. | teach only | yes |
| you (informal for men) | 君は何がしたいですか。 | What do you want to do? | きみ | N4 L5 T5 C2 I2 — あなた could also fill the blank, reducing uniqueness. | teach only | yes |
| you (informal for men) | 君と一緒に映画を見たいです。 | I want to watch a movie with you. | きみ | N5 L5 T5 C2 I3 — あなた or 彼女 could also fit contextually. | teach only | yes |
| daughter (humble) | 私の娘は今年二十歳です。 | My daughter is twenty years old this year. | むすめ | N5 L5 T5 C2 I2 — 息子 could equally fill the blank, reducing recoverability | teach only | yes |
| daughter (humble) | 友達の娘は英語を習いたいと言いました。 | My friend's daughter said she wants to learn English. | むすめ | N5 L4 T5 C2 I3 — 息子 also fits the blank grammatically and semantically | teach only | yes |
| daughter (humble) | 娘は今、大学で本を読んでいます。 | My daughter is reading a book at university now. | むすめ | N5 L4 T5 C2 I2 — 息子 or other nouns could fit the blank equally well | teach only | yes |
| pickpocket | 駅にすりがいますから、気をつけてください。 | There are pickpockets at the station, so please be careful. | すり | N5 L5 T5 C3 I3 — Blank could be filled with other nouns like 泥棒 or 人, though 気をつけて hints at danger. | teach only | yes |
| pickpocket | あの人はすりだと思いますか。 | Do you think that person is a pickpocket? | すり | N5 L5 T5 C2 I3 — Very open context; many nouns could fit the blank (先生, 犯人, etc.). | teach only | yes |
| (one's own) wife | 家内は毎朝早く起きます。 | My wife gets up early every morning. | かない | N5 L5 T5 C2 I2 — Blank could equally be filled by 母, 姉, 友達, etc., so context doesn't force 家内 specifically. | teach only | yes |
| (one's own) wife | 家内と一緒に旅行に行きたいです。 | I want to go on a trip with my wife. | かない | N5 L5 T5 C2 I3 — Any companion noun (友達, 母, 彼女) fits the blank equally well. | teach only | yes |
| (one's own) wife | 家内に電話をかけました。 | I called my wife. | かない | N5 L5 T5 C2 I2 — Generic phone-call sentence; many person nouns could fill the blank. | teach only | yes |
| rich person | 彼はお金持ちになりたいと言いました。 | He said he wants to become rich. | おかねもち | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (e.g., 医者, 有名人), not uniquely recoverable. | teach only | yes |
| rich person | あの人はお金持ちですか。 | Is that person rich? | おかねもち | N5 L5 T5 C2 I2 — Generic yes/no question; many adjectives/nouns could fit the blank. | teach only | yes |
| rich person | お金持ちの人はいい車を持っています。 | Rich people have nice cars. | おかねもち | N5 L5 T5 C2 I3 — Blank could be replaced by other nouns like 医者 or 社長, reducing uniqueness. | teach only | yes |
| -- extra-modest expression for する -- | 明日、私が説明を致します。 | Tomorrow, I will (humbly) give the explanation. | いたします | N4 L3 T5 C3 I3 — Blank could also be filled with plain します, so recoverability is only moderate. | teach only | yes |
| -- extra-modest expression for する -- | すぐにお持ち致します。 | I will bring it right away. | いたします | N5 L3 T5 C5 I3 — The お～致す construction strongly forces 致します as the answer. | cloze+teach | yes |
| -- extra-modest expression for する -- | 部長に電話を致しました。 | I (humbly) called the department manager. | いたしました | N4 L3 T5 C3 I3 — Context doesn't strongly rule out plain しました, lowering recoverability. | teach only | yes |
| to bite | 犬が私の靴を噛みました。 | The dog bit my shoe. | かみました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to bite | よく噛んで食べてください。 | Please chew well before eating. | かんで | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to welcome | 明日、空港へ客を迎えに行きます。 | Tomorrow, I will go to the airport to welcome a guest. | むかえに | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to welcome | 駅まで迎えに来てください。 | Please come pick me up at the station. | むかえに | N5 L5 T4 C5 I3 — EN translation loses literal 'come welcome me' nuance but captures meaning fine. | cloze+teach | yes |
| to welcome | 新しい年を迎えました。 | We welcomed the new year. | むかえました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to touch | この絵に触らないでください。 | Please do not touch this picture. | さわらない | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to touch | 昨日、初めて猫に触りました。 | Yesterday, I touched a cat for the first time. | さわりました | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to catch | 警官が泥棒を捕まえました。 | The police officer caught the thief. | つかまえました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to catch | 子供が虫を捕まえました。 | The child caught an insect. | つかまえました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to catch | 逃げた犬を捕まえてください。 | Please catch the dog that ran away. | つかまえて | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to wrap | プレゼントを包んでください。 | Please wrap the present. | つつんで | N5 L5 T5 C3 I2 — Generic gift-wrapping sentence; blank could also be filled by other verbs like 開けて. | teach only | yes |
| to wrap | 店員が品物を包みました。 | The store clerk wrapped the item. | つつみました | N5 L5 T5 C3 I2 — Many other verbs (売りました, 渡しました) could fit the blank equally well. | teach only | yes |
| to decorate | 部屋を花で飾ってください。 | Please decorate the room with flowers. | かざって | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to decorate | 会社の入口を飾りました。 | We decorated the company entrance. | かざりました | N4 L5 T5 C3 I3 — other verbs like 掃除する could also fit the blank | teach only | yes |
| to decorate | レストランをきれいに飾りました。 | We decorated the restaurant beautifully. | かざりました | N4 L5 T5 C3 I3 — きれいに could pair with several verbs, weakening cloze uniqueness | teach only | yes |
| to stop | ここに車を止めないでください。 | Please do not stop your car here. | とめない | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to stop | 音楽を止めてください。 | Please stop the music. | とめて | N4 L4 T5 C3 I3 — Other verbs like 消す could also fit the blank. | teach only | yes |
| reply | 手紙の返事をまだ書いていません。 | I haven't written a reply to the letter yet. | へんじ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| reply | 彼から返事が来ましたか。 | Did a reply come from him? | へんじ | N5 L5 T5 C3 I3 — blank could also be 手紙, メール, 電話 etc. | teach only | yes |
| reply | 早く返事を下さい。 | Please give me a reply soon. | へんじ | N4 L5 T5 C2 I2 — very generic phrase; blank could be many nouns like お金, 答え, 水. | teach only | yes |
| to convey | 先生にこの話を伝えてください。 | Please convey this story to the teacher. | つたえて | N5 L5 T5 C3 I3 — 話して/教えて could also fit the blank grammatically | teach only | yes |
| to convey | 母に電話番号を伝えたいです。 | I want to convey my phone number to my mother. | つたえたい | N5 L5 T5 C3 I3 — 教えたい also fits naturally here, reducing uniqueness | teach only | yes |
| to convey | 彼にお礼を伝えましょうか。 | Shall I convey my thanks to him? | つたえましょう | N5 L5 T5 C4 I4 — お礼を伝える is a strong idiomatic collocation, good cue | cloze+teach | yes |
| explanation | 先生は文法を説明します。 | The teacher explains the grammar. | せつめいします | N5 L5 T5 C4 I3 — 教えます could also fit, slightly reducing uniqueness | cloze+teach | yes |
| explanation | この問題を説明してくれませんか。 | Could you explain this problem to me? | せつめいして | N5 L5 T5 C4 I4 — 解いて could also fit the blank, slightly reducing uniqueness | cloze+teach | yes |
| to make noise | 子供たちが教室で騒いでいます。 | The children are making noise in the classroom. | さわいで | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other verbs like 遊んで or 勉強して. | teach only | yes |
| to make noise | そんなに騒がないでください。 | Please don't make so much noise. | さわがない | N5 L5 T5 C3 I3 — Context allows other verbs like 泣かないで or 走らないで. | teach only | yes |
| to make noise | 友達が家に来て騒ぎました。 | My friend came to my house and made noise. | さわぎました | N4 L5 T5 C3 I3 — Could be replaced with 遊びました or 話しました, reducing cloze certainty. | teach only | yes |
| to inquire | 道を尋ねたいです。 | I want to ask for directions. | たずねたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to inquire | 友達に名前を尋ねました。 | I asked my friend their name. | たずねました | N5 L5 T5 C5 I3 | cloze+teach | yes |
| broadcasting | 六時にニュースを放送します。 | They broadcast the news at six o'clock. | ほうそうします | N5 L5 T5 C3 I3 — Blank could also be filled with 見ます/聞きます, reducing uniqueness. | teach only | yes |
| broadcasting | 試合の放送を見ましたか。 | Did you watch the broadcast of the game? | ほうそう | N5 L5 T5 C2 I3 — 試合の＿を見ましたか could fit many nouns like 動画・写真・記録, not uniquely 放送. | teach only | yes |
| broadcasting | 天気予報をラジオで放送しています。 | The weather forecast is being broadcast on the radio. | ほうそうして | N5 L5 T5 C3 I3 — 流して/伝えて could also plausibly fill the blank, slightly weakening recoverability. | teach only | yes |
| consent | その話はもう承知しました。 | I already agreed to that matter. | しょうちしました | N5 L5 T5 C3 I2 — Blank could plausibly be filled by わかりました or 了解しました too. | teach only | yes |
| consent | 皆さん、この規則を承知しておいてください。 | Everyone, please be aware of this rule. | しょうちして | N5 L5 T4 C3 I3 — 承知しておいて could be swapped with 理解して or 確認して, reducing uniqueness. | teach only | yes |
| calling on someone who is ill | 病気の友達にお見舞いに行きます。 | I will visit my sick friend. | おみまい | N5 L4 T5 C5 I3 | cloze+teach | yes |
| calling on someone who is ill | お見舞いに何を持って行ったらいいですか。 | What should I bring when visiting someone who's ill? | おみまい | N5 L4 T5 C5 I4 | cloze+teach | yes |
| calling on someone who is ill | 明日お見舞いに行きませんか。 | Won't you go visit them tomorrow? | おみまい | N4 L4 T4 C2 I3 — Blank could be filled by many other destinations (旅行, 買い物, etc.), weak cloze context. | teach only | yes |
| guest | 客が来るから、部屋を片付けてください。 | Please tidy up the room because a guest is coming. | きゃく | N5 L5 T5 C3 I3 — Blank could plausibly be 友達 or other visitor word, though 客 fits well with tidying context. | teach only | yes |
| guest | 電話で客に住所を伝えました。 | I told the guest the address over the phone. | きゃく | N5 L5 T5 C2 I3 — Many nouns (友達, 相手, 彼) could fill the blank equally well. | teach only | yes |
| guest | 晩御飯の前に、客が三人来ました。 | Three guests came before dinner. | きゃく | N5 L5 T5 C2 I3 — Counter 三人 and context don't uniquely force 客; 友達 or 人 also plausible. | teach only | yes |
| member of ~ | 父は会社員です。 | My father is a company employee. | いん | N5 L5 T5 C4 I2 — Generic template sentence. | cloze+teach | yes |
| member of ~ | 兄は銀行員だから、忙しいです。 | My older brother is busy because he's a bank employee. | いん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| (your, her) husband | ご主人は今、家にいますか。 | Is your husband home right now? | ごしゅじん | N5 L5 T5 C2 I3 — Blank could be filled by other people-words like お父さん or 彼. | teach only | yes |
| (someone's) daughter (polite) | お嬢さんは今年、何歳ですか。 | How old is your daughter this year? | おじょうさん | N5 L5 T5 C3 I3 — Could also be お子さん/息子さん, so not fully unique. | teach only | yes |
| (someone's) daughter (polite) | お嬢さんはピアノが上手ですね。 | Your daughter is good at piano, isn't she. | おじょうさん | N5 L5 T5 C3 I4 — Slightly more specific context but still other family terms could fit grammatically. | teach only | yes |
| (someone's) daughter (polite) | お嬢さんも一緒にパーティーに来てください。 | Please have your daughter come to the party too. | おじょうさん | N5 L5 T5 C3 I3 — Context doesn't uniquely force 'daughter' over other polite family terms. | teach only | yes |
| to raise (transitive) | 母は三人の子供を育てました。 | My mother raised three children. | そだてました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to raise (transitive) | 忙しくても、子供を育てなければなりません。 | Even if you're busy, you must raise your children. | そだてなければ | N5 L4 T5 C5 I4 | cloze+teach | yes |
| everyone | 皆で晩御飯を食べましょう。 | Let's all eat dinner together. | みな | N5 L5 T5 C2 I3 — Blank could be filled by many other subject nouns (家族で, 友達と), not uniquely 皆. | teach only | yes |
| everyone | 皆はもう家に帰りました。 | Everyone has already gone home. | みな | N5 L5 T5 C2 I2 — Generic subject slot could be filled by many nouns (彼, 田中さん, etc.), weak forced recall. | teach only | yes |
| everyone | 皆が集まったら、始めましょう。 | Let's start once everyone has gathered. | みな | N5 L4 T5 C2 I3 — Blank subject could be replaced by other nouns (メンバーが, 友達が), not uniquely determined. | teach only | yes |
| to pass away | 祖父は去年、亡くなりました。 | My grandfather passed away last year. | なくなりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to pass away | 彼が亡くなったと聞いて、驚きました。 | I was surprised to hear that he had passed away. | なくなった | N5 L5 T5 C3 I3 — Many other verbs (結婚した, 引っ越したetc.) could fit the blank equally well. | teach only | yes |
| they | 彼らは今、忙しいです。 | They are busy right now. | かれら | N5 L5 T5 C2 I2 — Blank could be filled by many other subjects (私, 彼, 彼女, etc.), so context doesn't uniquely force 彼ら. | teach only | yes |
| they | 彼らに電話をかけてください。 | Please call them. | かれら | N5 L5 T5 C2 I3 — Many nouns/pronouns could fill the blank (彼に, 友達に, 先生に), reducing recoverability. | teach only | yes |
| they | 彼らはいつ帰りますか。 | When are they coming home? | かれら | N5 L5 T5 C2 I3 — Subject slot is open to many other pronouns/nouns, weakening cloze uniqueness. | teach only | yes |
| generally | 大抵、朝御飯の後で薬を飲みます。 | I usually take medicine after breakfast. | たいてい | N5 L5 T5 C3 I3 — いつも/よく could also fit the blank, slightly reducing uniqueness | teach only | yes |
| generally | 日曜日は大抵家にいます。 | I'm usually at home on Sundays. | たいてい | N5 L5 T5 C3 I3 — いつも could also fit contextually | teach only | yes |
| finally | 頭が痛くて、とうとう病院へ行きました。 | My head hurt, and I finally went to the hospital. | とうとう | N5 L4 T5 C3 I3 — やっと/ついに could also fit the blank | teach only | yes |
| finally | 電車が遅れて、とうとう飛行機に間に合いませんでした。 | The train was late, and in the end I missed the flight. | とうとう | N5 L4 T5 C4 I4 — negative outcome context makes とうとう fairly distinct from やっと | cloze+teach | yes |
| finally | 宿題を頑張って、とうとう終わりました。 | I worked hard on my homework, and it's finally finished. | とうとう | N5 L4 T5 C2 I3 — やっと would fit equally well here, weakening cloze uniqueness | teach only | yes |
| opinion | 会議で意見を言いたいです。 | I want to state my opinion at the meeting. | いけん | N5 L5 T5 C3 I3 | teach only | yes |
| opinion | 昨日の会議で意見を言いました。 | I gave my opinion at yesterday's meeting. | いけん | N5 L5 T5 C3 I3 | teach only | yes |
| opinion | あなたの意見はどうですか。 | What is your opinion? | いけん | N5 L5 T5 C3 I2 | teach only | yes |
| ~ meeting | 日曜日に会があります。 | There is a meeting on Sunday. | かい | N4 L5 T5 C2 I2 — Blank could be filled by many nouns (パーティー, 授業, テスト), low uniqueness. | teach only | yes |
| ~ meeting | その会に行きたいです。 | I want to go to that meeting. | かい | N4 L5 T5 C2 I2 — Generic sentence; many nouns fit the blank equally well. | teach only | yes |
| ~ meeting | 何時に会が始まりますか。 | What time does the meeting start? | かい | N4 L5 T5 C2 I2 — Context doesn't uniquely force 会; other event nouns could fit. | teach only | yes |
| if | もし熱があったら、病院へ行ってください。 | If you have a fever, please go to the hospital. | もし | N5 L5 T5 C3 I3 | teach only | yes |
| if | もし道が分からなければ、地図を見てください。 | If you don't know the way, please look at the map. | もし | N5 L5 T5 C3 I3 | teach only | yes |
| if | もし天気がよければ、公園へ行きたいです。 | If the weather is good, I want to go to the park. | もし | N5 L5 T5 C3 I3 | teach only | yes |
| surface | 紙の表に名前を書いてください。 | Please write your name on the front of the paper. | おもて | N4 L5 T5 C3 I2 — Blank could also be filled by other position words like 上 or 隅, weakening uniqueness. | teach only | yes |
| surface | 表と裏、どちらに書きますか。 | Which side should I write on, the front or the back? | おもて | N5 L5 T5 C5 I3 | cloze+teach | yes |
| distinction | 別の道から駅へ行きたいです。 | I want to go to the station by a different route. | べつ | N4 L5 T5 C3 I3 — 違う道 could also fit the blank, reducing uniqueness. | teach only | yes |
| distinction | 今日は別の医者に会いましたか。 | Did you see a different doctor today? | べつ | N4 L5 T5 C3 I3 — 違う医者 could also fit, slightly reducing cloze uniqueness. | teach only | yes |
| spirit | 道を渡る時は、車に気をつけてください。 | Please be careful of cars when crossing the street. | き | N5 L5 T5 C4 I3 | cloze+teach | yes |
| spirit | 頭が痛くて、気がつきませんでした。 | My head hurt, so I didn't notice. | き | N5 L4 T4 C4 I3 — Translation slightly loose but conveys idiom well. | cloze+teach | yes |
| report | 土曜日にレポートを書きます。 | I will write a report on Saturday. | れぽーと | N5 L5 T5 C2 I2 — Generic template; many nouns could fill the blank (手紙、日記, etc.). | teach only | yes |
| report | レポートが終わったら、晩御飯を作ります。 | If I finish the report, I'll cook dinner. | れぽーと | N5 L4 T5 C2 I3 — Blank could be filled by many nouns like 仕事、宿題. | teach only | yes |
| high school | 高校までどう行きますか。 | How do you get to the high school? | こうこう | N4 L5 T5 C2 I3 — blank could be filled by many place words (school, station, etc.), reducing recoverability | teach only | yes |
| high school | 急いで高校へ行かなければなりません。 | I have to hurry to high school. | こうこう | N4 L5 T4 C2 I3 — any location noun could fit the blank, so it's not uniquely recoverable | teach only | yes |
| high school | 土曜日に高校へ行ったことがあります。 | I've gone to the high school on a Saturday before. | こうこう | N4 L5 T5 C2 I3 — context doesn't uniquely force 高校; other place words would fit | teach only | yes |
| to correct | 先生は宿題を直しました。 | The teacher corrected the homework. | なおしました | N5 L5 T5 C3 I3 — Other verbs like 見ました/出しました could also fit the blank. | teach only | yes |
| to correct | 文法を直しましょうか。 | Shall we correct the grammar? | なおしましょう | N5 L5 T5 C3 I3 — 見ましょうか or 練習しましょうか could also fit contextually. | teach only | yes |
| to be continued | 雨は明日も続くと思います。 | I think the rain will continue tomorrow too. | つづく | N5 L5 T5 C3 I3 — Blank could also be filled by 降る/やむ, weakening exact recoverability. | teach only | yes |
| to be continued | この道はどこまで続いていますか。 | How far does this road continue? | つづいています | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to be continued | 忙しい日が続いたから、疲れました。 | Because busy days continued, I got tired. | つづいた | N5 L5 T5 C4 I4 | cloze+teach | yes |
| looking after | 母は毎日犬の世話をします。 | My mother takes care of the dog every day. | せわ | N5 L5 T5 C3 I2 — Could also be 散歩 (walk the dog), slightly reduces cloze certainty. | teach only | yes |
| looking after | 病気のおじいさんの世話をしなければなりません。 | I have to take care of my sick grandfather. | せわ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| looking after | 子供の世話をしてもいいですか。 | May I look after the child? | せわ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to pay | レジでお金を払いました。 | I paid money at the register. | はらいました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to pay | 一緒にお金を払いましょうか。 | Shall we pay the money together? | はらいましょう | N4 L5 T5 C3 I3 — お金を is slightly redundant with 一緒に payましょうか, and 出しましょう could also fit the blank. | teach only | yes |
| to burn | パンがよく焼けました。 | The bread baked well. | やけました | N5 L5 T5 C3 I3 — other words like できました could also fit the blank | teach only | yes |
| to burn | 肉が焼けたら、食べましょう。 | When the meat is cooked, let's eat. | やけたら | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to burn | 魚はもう焼けましたか。 | Has the fish finished cooking already? | やけました | N5 L5 T5 C3 I3 — could also be 煮えました or 出来ました in context | teach only | yes |
| to be started | 朝、電気が点きました。 | In the morning, the light turned on. | つきました | N5 L5 T5 C3 I3 — Morning context doesn't strongly force 'turn on' over 'turn off' or other verbs describing electricity state. | teach only | yes |
| to be started | 暖房が点かないから、寒いです。 | Because the heater won't turn on, it's cold. | つかない | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to be started | テレビが点いていますか。 | Is the TV on? | ついています | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to plant | 庭に花を植えました。 | I planted flowers in the garden. | うえました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to plant | 一緒に木を植えませんか。 | Won't you plant a tree with me? | うえません | N5 L5 T5 C3 I4 — blank could also be 切ります/買います etc. | teach only | yes |
| to plant | 春に何を植えますか。 | What do you plant in spring? | うえます | N5 L5 T5 C3 I3 — blank could be filled with other verbs like 買います/育てます | teach only | yes |
| mathematics | 数学のテストは難しかったです。 | The math test was difficult. | すうがく | N5 L5 T5 C2 I3 — Any subject noun (英語, 国語, etc.) could fill the blank, so context doesn't force 数学 specifically. | teach only | yes |
| mathematics | 数学を習いたいです。 | I want to learn mathematics. | すうがく | N5 L4 T5 C2 I3 — Many nouns (ピアノ, 英語, 料理) fit '〜を習いたいです', so the blank isn't uniquely recoverable. | teach only | yes |
| mathematics | 明日は数学の授業がありますか。 | Is there a math class tomorrow? | すうがく | N5 L5 T5 C2 I3 — Other subject names could equally fill '〜の授業がありますか', reducing cloze specificity. | teach only | yes |
| (manufacturing) industry | 工業に興味がありますか。 | Are you interested in industry? | こうぎょう | N5 L5 T5 C1 I2 — Blank could be filled by almost any noun (音楽, 映画, スポーツ, etc.), so not recoverable. | teach only | yes |
| police | 事故があったので警察を呼びました。 | There was an accident, so I called the police. | けいさつ | N5 L5 T5 C3 I4 — 救急車 (ambulance) could also fit the blank in this context. | teach only | yes |
| police | 一緒に警察に行きましょうか。 | Shall we go to the police together? | けいさつ | N5 L5 T5 C2 I3 — Many locations (学校、病院、駅 etc.) could fill the blank equally well. | teach only | yes |
| police | 警察の電話番号を知っていますか。 | Do you know the police's phone number? | けいさつ | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (会社、友達、彼 etc.), not uniquely determined. | teach only | yes |
| review | 今日、数学の復習をしたいです。 | I want to review math today. | ふくしゅう | N5 L5 T5 C3 I3 — Could also be 勉強/予習, so blank isn't fully unique. | teach only | yes |
| review | 一緒に復習しませんか。 | Won't you review together with me? | ふくしゅう | N5 L5 T5 C2 I3 — Very generic; 勉強/練習 could fit the blank equally well. | teach only | yes |
| review | 昨日、漢字の復習をしました。 | Yesterday I reviewed kanji. | ふくしゅう | N5 L5 T5 C3 I3 — Blank could also be filled with 勉強 or 練習. | teach only | yes |
| study | 大学で歴史の研究をしています。 | I am doing research on history at university. | けんきゅう | N5 L5 T5 C3 I4 — 勉強 could also fit the blank, slightly reducing uniqueness | teach only | yes |
| study | どんな研究をしていますか。 | What kind of research are you doing? | けんきゅう | N5 L5 T5 C2 I2 — very generic; many words (仕事, 勉強, バイト, etc.) could fill the blank | teach only | yes |
| study | 将来、医学の研究をしたいです。 | In the future, I want to do medical research. | けんきゅう | N5 L5 T5 C3 I4 — 勉強 could also plausibly fit, reducing uniqueness | teach only | yes |
| business meeting | 今日の午後、会議があります。 | There is a meeting this afternoon. | かいぎ | N5 L5 T5 C2 I2 — Blank could be filled by many event nouns (テスト, パーティー, 授業), not uniquely 会議. | teach only | yes |
| business meeting | 明日、会議をしませんか。 | Shall we have a meeting tomorrow? | かいぎ | N5 L5 T5 C2 I2 — Many activities could fit the blank (テニス, 勉強, 食事), low forced recoverability. | teach only | yes |
| business meeting | 会議は何時に始まりますか。 | What time does the meeting start? | かいぎ | N5 L5 T5 C3 I3 — Slightly more context via '始まります' narrows to scheduled events, but still could be 授業/映画 etc. | teach only | yes |
| translation | この本の翻訳は難しいです。 | The translation of this book is difficult. | ほんやく | N5 L5 T5 C2 I2 — Blank could be filled with many words (内容, 文法, etc.), reducing cloze recoverability. | teach only | yes |
| translation | この文章を英語に翻訳したいです。 | I want to translate this text into English. | ほんやく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| comic | 妹の部屋に漫画が多いです。 | There are many comics in my little sister's room. | まんが | N5 L5 T5 C3 I3 | teach only | yes |
| comic | 友達がその漫画を読みたいと言いました。 | My friend said he wants to read that comic. | まんが | N5 L4 T5 C3 I3 | teach only | yes |
| stereo | 事務所にステレオがありますか。 | Is there a stereo in the office? | すてれお | N4 L5 T5 C2 I2 — blank could be filled by many nouns like テレビ or コピー機 | teach only | yes |
| stereo | 新しいステレオが欲しいです。 | I want a new stereo. | すてれお | N5 L5 T5 C2 I2 — many objects could fit 欲しい context | teach only | yes |
| stereo | 部屋でステレオをつけてもいいですか。 | Is it okay to turn on the stereo in the room? | すてれお | N5 L5 T5 C2 I3 — つける works with many electronic devices, low recoverability | teach only | yes |
| trash | 毎朝、ごみを出してください。 | Please take out the trash every morning. | ごみ | N5 L5 T5 C3 I3 — 毎朝ごみを出す is a common idiom, but the blank could fit other nouns like 手紙 or 宿題. | teach only | yes |
| trash | 部屋のごみを捨てなければなりません。 | I have to throw away the trash in the room. | ごみ | N5 L5 T5 C3 I3 — 部屋の___を捨てる could be filled with several nouns, slightly weakening cloze specificity. | teach only | yes |
| futon | 毎晩、布団で寝ます。 | I sleep on a futon every night. | ふとん | N5 L5 T5 C3 I3 — Could also be ベッド, so blank isn't fully forced. | teach only | yes |
| futon | 寒かったら、厚い布団を使います。 | If it's cold, I use a thick futon. | ふとん | N5 L4 T5 C3 I4 — 厚い___could also be 毛布 or コート, slightly reduces uniqueness. | teach only | yes |
| futon | その布団はどこにありますか。 | Where is that futon? | ふとん | N5 L5 T5 C1 I1 — Generic 'where is X' template fits almost any noun, poor cloze recoverability. | teach only | yes |
| a gift | 会社の人から贈り物をもらいました。 | I received a gift from someone at work. | おくりもの | N5 L5 T5 C3 I3 | teach only | yes |
| a gift | 誕生日に贈り物を送ったことがあります。 | I have sent a gift for a birthday before. | おくりもの | N4 L4 T5 C3 I3 — 贈り物を送る sounds slightly formal/business-like but acceptable | teach only | yes |
| glass | この窓はガラスでできています。 | This window is made of glass. | がらす | N5 L5 T5 C3 I3 — Other materials (木, 鉄, プラスチック) could also fill the blank, but glass is a strong default guess. | teach only | yes |
| glass | そのガラスに気をつけてください。 | Please be careful of that glass. | がらす | N4 L4 T4 C2 I2 — Generic warning sentence; blank could be filled by almost any noun (犬, 車, 火 etc.), weak recoverability. | teach only | yes |
| silk | このシャツは絹です。 | This shirt is silk. | きぬ | N5 L5 T5 C2 I1 — Very generic template sentence; many fabric words could fill the blank. | teach only | yes |
| silk | 絹は木綿より高いです。 | Silk is more expensive than cotton. | きぬ | N5 L5 T5 C4 I4 — Comparative structure gives strong contextual support for the answer. | cloze+teach | yes |
| silk | 贈り物のネクタイは絹ですか。 | Is the necktie that was a gift silk? | きぬ | N5 L5 T5 C3 I3 — Context is a bit more specific but still allows other fabric words to fit. | teach only | yes |
| gas | 出かける前にガスを消します。 | I turn off the gas before going out. | がす | N5 L5 T5 C3 I3 — Blank could also be filled by 電気 or テレビ, so context doesn't uniquely force ガス. | teach only | yes |
| gas | 台所のガスがつきません。 | The gas won't turn on in the kitchen. | がす | N4 L5 T5 C4 I3 — Natural and fairly specific collocation with つく, though 電気 could theoretically also fit. | cloze+teach | yes |
| to dance | パーティーで踊りました。 | I danced at the party. | おどりました | N5 L5 T5 C2 I2 — Context alone doesn't force 'dance'; could be sang/drank/played too. | teach only | yes |
| to dance | 土曜日に友達と踊りたいです。 | I want to dance with my friend on Saturday. | おどりたい | N5 L4 T5 C2 I3 — Blank could be filled with many activity verbs (play, sing, etc.). | teach only | yes |
| to dance | みんなで楽しく踊ります。 | Everyone dances happily. | おどります | N5 L5 T5 C2 I2 — Generic scene; several verbs (sing, play) fit equally well. | teach only | yes |
| to go back and forth | 毎朝、電車で学校に通います。 | I go to school by train every morning. | かよいます | N5 L5 T5 C3 I3 — 行きます could also fit the blank, slightly reducing recoverability. | teach only | yes |
| to go back and forth | 来年、大学に通いたいです。 | I want to attend university next year. | かよいたい | N5 L5 T5 C3 I3 — 行きたい also plausible in context. | teach only | yes |
| to lead | 子供を動物園に連れて行きました。 | I took my child to the zoo. | つれて | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to lead | 明日、妹を病院に連れて行きます。 | Tomorrow I will take my sister to the hospital. | つれて | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to lead | 友達を空港に連れて行きたいです。 | I want to take my friend to the airport. | つれて | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to advance | 電車はまっすぐ進みます。 | The train goes straight ahead. | すすみます | N5 L5 T5 C3 I2 — could also be 走ります, so blank not fully forced | teach only | yes |
| to advance | 仕事が予定より早く進みました。 | The work progressed faster than planned. | すすみました | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to advance | もっと前へ進みたいです。 | I want to move forward more. | すすみたい | N5 L5 T5 C3 I3 — 行きたい could also fit the blank | teach only | yes |
| to stay | 旅行でホテルに泊まりました。 | I stayed at a hotel on the trip. | とまりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to stay | 今晩、友達の家に泊まりたいです。 | I want to stay at my friend's house tonight. | とまりたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to stay | 明日は旅館に泊まる予定です。 | I plan to stay at a ryokan tomorrow. | とまる | N5 L5 T5 C4 I4 | cloze+teach | yes |
| dance | あの踊りはとても美しいです。 | That dance is very beautiful. | おどり | N5 L5 T5 C2 I2 — blank could be filled by many nouns like 景色 or 絵 | teach only | yes |
| dance | お祭りで踊りを見ました。 | I watched the dance at the festival. | おどり | N5 L5 T5 C3 I3 — blank could plausibly be 花火 or 屋台 too | teach only | yes |
| dance | 村の踊りを習いたいです。 | I want to learn the village's dance. | おどり | N5 L5 T5 C3 I3 — blank could be 歴史 or 文化 as alternatives | teach only | yes |
| to move to a new place of residence | 来月、新しいアパートに引っ越します。 | I will move to a new apartment next month. | ひっこします | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to move to a new place of residence | 先週、田舎に引っ越しました。 | I moved to the countryside last week. | ひっこしました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to move to a new place of residence | もっと広い家に引っ越したいです。 | I want to move to a bigger house. | ひっこしたい | N5 L5 T5 C3 I3 — 住みたい/移りたい could also fit, slightly lowering uniqueness. | teach only | yes |
| humble form of 行く | 明日、先生のお宅に伺います。 | I will visit my teacher's home tomorrow. | うかがいます | N5 L4 T5 C4 I3 | cloze+teach | yes |
| humble form of 行く | 昨日、社長の事務所に伺いました。 | I visited the president's office yesterday. | うかがいました | N5 L4 T5 C4 I3 | cloze+teach | yes |
| strange | 彼の話は少しおかしいと思います。 | I think his story is a little strange. | おかしい | N5 L5 T5 C3 I3 | teach only | yes |
| strange | この音は少しおかしいですね。 | This sound is a little strange, isn't it. | おかしい | N5 L5 T5 C3 I3 | teach only | yes |
| if I remember correctly | 確か、彼はレストランで働いています。 | If I remember correctly, he works at a restaurant. | たしか | N4 L4 T5 C2 I3 — Blank could be filled by many discourse adverbs (実は, たぶん, etc.), not uniquely 確か. | teach only | yes |
| if I remember correctly | 確か、テストは水曜日でした。 | If I remember correctly, the test was on Wednesday. | たしか | N4 L4 T5 C2 I3 — Past-tense recall context helps slightly but other adverbs like そういえば could also fit. | teach only | yes |
| if I remember correctly | 確か、彼女はピアノが好きだったと思います。 | If I remember correctly, I think she liked piano. | たしか | N4 L4 T5 C3 I3 — Combination with と思う nudges toward 確か but still not fully forced. | teach only | yes |
| unusual | 今日は珍しく雪が降りました。 | Today it snowed unusually. | めずらしく | N5 L4 T5 C4 I4 | cloze+teach | yes |
| unusual | このレストランには珍しい料理があります。 | This restaurant has unusual dishes. | めずらしい | N4 L5 T5 C2 I2 — Many adjectives could fill the blank (おいしい, からい, etc.), reducing recoverability. | teach only | yes |
| lonely | 友達がいなくて寂しいです。 | I'm lonely because I have no friends. | さびしい | N5 L5 T5 C3 I3 — Other emotion adjectives could also fit the blank. | teach only | yes |
| lonely | 彼が卒業して寂しかったです。 | I was lonely when he graduated. | さびしかった | N4 L5 T5 C3 I3 — Slightly unnatural phrasing; other adjectives like 悲しい could fit the blank too. | teach only | yes |
| lonely | 冬は寂しい季節だと思います。 | I think winter is a lonely season. | さびしい | N5 L4 T5 C3 I4 — Other adjectives like 寒い or 厳しい could also fit the blank. | teach only | yes |
| diligent | あの学生はとても真面目です。 | That student is very diligent. | まじめ | N4 L5 T5 C2 I2 — Blank could be filled by many other adjectives (kind, smart, etc.), reducing recoverability. | teach only | yes |
| diligent | 店員は真面目に働いています。 | The staff member works diligently. | まじめ | N4 L5 T5 C3 I2 — Other adverbs like 一生懸命に could also fit, slightly weakening recoverability. | teach only | yes |
| (honorific) good | お名前を伺ってもよろしいですか。 | May I ask your name? | よろしい | N5 L4 T5 C5 I4 | cloze+teach | yes |
| (honorific) good | 先生、質問してもよろしいですか。 | Teacher, may I ask a question? | よろしい | N5 L4 T5 C5 I4 | cloze+teach | yes |
| clearly | 先生の声がはっきり聞こえました。 | The teacher's voice was heard clearly. | はっきり | N5 L5 T5 C3 I3 — よく could also fit the blank, slightly reducing recoverability. | teach only | yes |
| clearly | 今日の天気ははっきりしません。 | Today's weather isn't clear. | はっきり | N5 L5 T4 C5 I3 — はっきりしない is an idiomatic collocation, making the blank unambiguous; translation slightly loose but fine. | cloze+teach | yes |
| clearly | 好きな食べ物をはっきり言いたいです。 | I want to clearly say my favorite food. | はっきり | N4 L5 T4 C3 I3 — ちゃんと or きちんと could also fit, reducing uniqueness of blank. | teach only | yes |
| terrific | この料理はすごく美味しいです。 | This dish is terrifically delicious. | すごく | N4 L5 T4 C2 I2 — すごく could easily be replaced by とても, so the blank isn't uniquely determined. | teach only | yes |
| terrific | 彼はすごく上手にピアノを弾きます。 | He plays the piano terrifically well. | すごく | N4 L5 T4 C2 I2 — すごく is interchangeable with とても here, weakening cloze uniqueness. | teach only | yes |
| limited express | 特急に乗れば早く着きます。 | If you take the limited express, you'll arrive quickly. | とっきゅう | N5 L5 T5 C2 I3 — Blank could be filled by other transport words like 新幹線 or バス, reducing recoverability. | teach only | yes |
| limited express | 特急は普通の電車より速いです。 | The limited express is faster than a regular train. | とっきゅう | N5 L5 T5 C3 I4 — Comparison with 普通の電車 helps narrow the answer somewhat, though 新幹線 could also fit. | teach only | yes |
| limited express | 昨日、特急で家へ帰りました。 | Yesterday I went home by limited express. | とっきゅう | N5 L5 T5 C2 I2 — Generic sentence; many transport nouns could fill the blank. | teach only | yes |
| train | 汽車の音が聞こえます。 | I can hear the sound of the train. | きしゃ | N4 L5 T5 C2 I2 — Blank could equally be 電車 or other vehicle sounds; weak cloze constraint. | teach only | yes |
| train | 子供の時、汽車に乗ったことがあります。 | When I was a child, I rode a train. | きしゃ | N4 L4 T4 C2 I3 — Could just as easily be 電車; EN drops 'have' nuance of たことがある slightly. | teach only | yes |
| train | 汽車はゆっくりと走ります。 | The train runs slowly. | きしゃ | N4 L5 T5 C2 I2 — Any vehicle noun (電車, バス, 車) could fill the blank; low cloze specificity. | teach only | yes |
| departure | 飛行機の出発は九時です。 | The plane's departure is at nine o'clock. | しゅっぱつ | N5 L5 T5 C3 I2 — 到着 or other time nouns could also fit the blank | teach only | yes |
| departure | 出発の前に荷物を調べます。 | I check my luggage before departure. | しゅっぱつ | N5 L5 T5 C3 I3 — other nouns like 旅行 could plausibly fit before 荷物を調べます | teach only | yes |
| departure | もう出発しましたか。 | Have you already departed? | しゅっぱつしました | N5 L4 T5 C2 I2 — very generic; many verbs could fill もう___しましたか | teach only | yes |
| suitcase | 新しいスーツケースを買いました。 | I bought a new suitcase. | すうつけえす | N5 L5 T5 C2 I2 — blank could be almost any purchasable noun | teach only | yes |
| suitcase | スーツケースが重いです。 | The suitcase is heavy. | すうつけえす | N5 L5 T5 C2 I2 — many nouns could be 'heavy', low uniqueness | teach only | yes |
| suitcase | 旅行にスーツケースを持って行きます。 | I take a suitcase on trips. | すうつけえす | N5 L5 T5 C3 I3 — travel context narrows options but bag/camera etc. still plausible | teach only | yes |
| ship | 舟で島へ行きます。 | I go to the island by boat. | ふね | N5 L5 T5 C3 I3 — Could also be 飛行機 or other transport to an island, slightly ambiguous | teach only | yes |
| ship | 舟に乗ったことがあります。 | I have ridden a boat before. | ふね | N4 L5 T5 C2 I2 — Generic vehicle sentence, many vehicles fit the blank | teach only | yes |
| ship | 川に小さい舟が見えます。 | I can see a small boat on the river. | ふね | N5 L5 T5 C5 I4 | cloze+teach | yes |
| on the way | 学校へ行く途中で友達に会いました。 | On the way to school, I met a friend. | とちゅう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| on the way | 途中で雨が降りました。 | It rained on the way. | とちゅう | N5 L5 T5 C3 I2 — blank could also be filled by other time expressions like 昼間 or 途中で以外の語 | teach only | yes |
| on the way | 仕事の途中で電話が鳴りました。 | The phone rang in the middle of work. | とちゅう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to transfer | 駅でバスに乗り換えます。 | I transfer to a bus at the station. | のりかえます | N5 L5 T5 C2 I3 — バスに乗ります also fits the blank, reducing recoverability | teach only | yes |
| to transfer | ここで電車を乗り換えなければなりません。 | I must transfer trains here. | のりかえなければなりません | N5 L4 T5 C3 I3 — 降りなければなりません could also fit grammatically | teach only | yes |
| to transfer | 駅で電車を乗り換えました。 | I transferred trains at the station. | のりかえました | N5 L5 T5 C2 I3 — 多くの動詞（降りました、待ちましたなど）も文脈に合う | teach only | yes |
| sightseeing | 寺を見物しました。 | I went sightseeing at the temple. | けんぶつしました | N5 L5 T5 C3 I3 — Other verbs like 見学/訪問 could also fit the blank. | teach only | yes |
| sightseeing | 明日、町を見物したいです。 | Tomorrow I want to sightsee the town. | けんぶつしたい | N4 L5 T4 C3 I3 — English phrasing 'sightsee the town' is a bit stiff; blank could accept other verbs like 見る/歩く. | teach only | yes |
| sightseeing | 見物する時間がありません。 | I don't have time to sightsee. | けんぶつする | N4 L5 T5 C2 I2 — Generic sentence; many verbs (勉強する, 掃除する, etc.) could fill the blank. | teach only | yes |
| to notify | 熱が出たら、すぐに先生に知らせてください。 | If you get a fever, please let the teacher know right away. | しらせて | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to notify | 新しい品物が来たら、店員が客に知らせます。 | When new items arrive, the clerk notifies the customers. | しらせます | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to notify | パーティーの時間が決まったら、知らせてくれますか。 | Once the party time is decided, will you let me know? | しらせて | N5 L4 T5 C5 I4 | cloze+teach | yes |
| information | 今週の土曜日に、町を案内しましょうか。 | Shall I show you around town this Saturday? | あんない | N5 L4 T5 C4 I4 | cloze+teach | yes |
| information | 新しいデパートを案内したいです。 | I want to guide you around the new department store. | あんない | N4 L4 T5 C3 I3 — 案内 could be swapped with 紹介 in some contexts, slightly reducing recoverability. | teach only | yes |
| invitation | 元気になったら、招待します。 | Once I feel better, I'll invite you. | しょうたい | N4 L5 T4 C3 I2 — Context is vague enough that other verbs like 誘う could also fit the blank. | teach only | yes |
| invitation | 誕生日パーティーに招待したいです。 | I want to invite you to my birthday party. | しょうたい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| -- extra-modest expression for 言う -- | 私はそれでいいと申しました。 | I said that it was fine. | もうしました | N4 L3 T4 C3 I2 — Correct humble usage but 言いました would also fit, lowering recoverability. | teach only | yes |
| conversation | 友達と英語で会話をしました。 | I had a conversation with my friend in English. | かいわ | N5 L5 T5 C3 I3 — 話 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| conversation | もっと会話をしたいです。 | I want to have more conversation. | かいわ | N4 L5 T5 C2 I2 — Generic template sentence; many words could fill the blank (勉強, 練習, 仕事, etc.). | teach only | yes |
| conversation | 毎朝、先生と会話をしますか。 | Do you have a conversation with the teacher every morning? | かいわ | N5 L5 T5 C3 I3 — 話 or 勉強 could also plausibly fit the blank. | teach only | yes |
| restraint | たばこは遠慮してください。 | Please refrain from smoking. | えんりょ | N5 L4 T5 C3 I3 — Alternative verbs like 我慢 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| restraint | 気分が悪かったら、遠慮しないで休んでください。 | If you feel sick, don't hesitate to rest. | えんりょ | N5 L4 T5 C3 I3 — 心配しないで could also fit, giving some ambiguity. | teach only | yes |
| restraint | 遠慮しないで、もっと食べてください。 | Don't hold back, please eat more. | えんりょ | N5 L4 T5 C4 I3 — 遠慮しないで is the idiomatic phrase in this food-offering context, making it fairly clear. | cloze+teach | yes |
| to apologize | 遅れたら、謝ります。 | If I'm late, I'll apologize. | あやまります | N5 L5 T5 C2 I3 — Blank could be filled by many verbs (call, run, apologize) so less recoverable. | teach only | yes |
| to apologize | 店員に謝りました。 | I apologized to the store clerk. | あやまりました | N5 L5 T5 C3 I2 — Context (store clerk) allows several verbs like talked, complained, apologized. | teach only | yes |
| to apologize | 友達に謝りましたか。 | Did you apologize to your friend? | あやまりました | N5 L5 T5 C3 I2 — Could also be 'talk to' or 'text' a friend, not uniquely apologize. | teach only | yes |
| to scold | 先生はよく学生を叱りますか。 | Does the teacher often scold students? | しかります | N5 L5 T5 C5 I3 | cloze+teach | yes |
| type | 彼はどんなタイプの人が好きですか。 | What type of person do you like? | たいぷ | N5 L5 T5 C3 I3 — other words like 種類 could also fit the blank | teach only | yes |
| type | 私はこのタイプの車が好きです。 | I like this type of car. | たいぷ | N5 L5 T5 C2 I2 — many words (色、ブランド、種類) could fill the blank, low specificity | teach only | yes |
| type | このタイプのパソコンが欲しいです。 | I want this type of computer. | たいぷ | N5 L5 T5 C2 I2 — similar generic sentence, blank not uniquely forced | teach only | yes |
| pleasure | 今週の旅行が楽しみです。 | I'm looking forward to this week's trip. | たのしみ | N5 L5 T5 C3 I3 — blank could be filled with other adjectives like 心配 or 大変, reducing uniqueness | teach only | yes |
| pleasure | 明日のパーティーを楽しみにしています。 | I'm looking forward to tomorrow's party. | たのしみ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| pleasure | 今週の楽しみは何ですか。 | What are you looking forward to this week? | たのしみ | N4 L4 T4 C2 I3 — blank could also be filled with words like 予定 or 趣味, making the target hard to pin down | teach only | yes |
| hobby | 私の趣味は写真を撮ることです。 | My hobby is taking photos. | しゅみ | N5 L5 T5 C3 I3 — Blank could also be filled with 仕事 or 夢, though 趣味 is most natural. | teach only | yes |
| hobby | あなたの趣味は何ですか。 | What is your hobby? | しゅみ | N5 L5 T5 C2 I2 — Generic template sentence; many words (名前, 仕事, 夢) could fit the blank. | teach only | yes |
| hobby | 趣味で料理をしています。 | I cook as a hobby. | しゅみ | N5 L5 T5 C4 I4 — 趣味で料理をしています is a fairly distinct collocation, though 仕事で could also fit. | cloze+teach | yes |
| telegram | 電報を打ったことがありますか。 | Have you ever sent a telegram? | でんぽう | N5 L4 T5 C5 I4 | cloze+teach | yes |
| telegram | 電報は今ではあまり使いません。 | Telegrams aren't used much nowadays. | でんぽう | N5 L4 T5 C4 I4 | cloze+teach | yes |
| occasionally | たまに頭が痛くなります。 | I occasionally get a headache. | たまに | N5 L5 T5 C2 I3 — Other frequency adverbs like よく or 時々 would fit the blank equally well. | teach only | yes |
| occasionally | たまに買い物に行きます。 | I occasionally go shopping. | たまに | N5 L5 T5 C2 I2 — Generic sentence; blank could be filled by several frequency adverbs. | teach only | yes |
| occasionally | たまに朝早く起きます。 | I occasionally wake up early in the morning. | たまに | N5 L5 T5 C2 I2 — Blank is not uniquely recoverable since よく/時々 also fit. | teach only | yes |
| society | 社会に出たら頑張らなければなりません。 | Once you enter society, you have to work hard. | しゃかい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| as expected | やはり熱がありますね。 | As expected, you have a fever. | やはり | N4 L4 T4 C2 I3 — Other adverbs like きっと/たぶん could also fit the blank without more context. | teach only | yes |
| as expected | やはり朝は忙しいです。 | As expected, mornings are busy. | やはり | N4 L4 T4 C3 I3 — Plausible but other adverbs (たぶん, きっと) could also fill the blank without further context. | teach only | yes |
| although | 熱がありますけれど、学校へ行きます。 | I have a fever, but I'll go to school. | けれど | N5 L5 T5 C3 I4 — が/けど could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| although | 買い物に行きたいけれど、お金がありません。 | I want to go shopping, but I don't have money. | けれど | N5 L5 T5 C3 I4 — が/けど/のに are also plausible fits for the blank. | teach only | yes |
| although | 朝早く起きましたけれど、まだ眠いです。 | I woke up early, but I'm still sleepy. | けれど | N5 L5 T5 C3 I4 — が/けど could also work here, reducing exact recoverability. | teach only | yes |
| once | 一度病気で病院に行ったことがあります。 | I have been to the hospital once because of illness. | いちど | N4 L4 T5 C4 I3 | cloze+teach | yes |
| less than | 熱が三十七度以下なら、大丈夫です。 | If your temperature is below thirty-seven degrees, it's fine. | いか | N5 L4 T5 C4 I4 | cloze+teach | yes |
| less than | 千円以下のものを買いたいです。 | I want to buy something under a thousand yen. | いか | N5 L4 T5 C4 I3 | cloze+teach | yes |
| less than | この教室は十歳以下の子供だけですか。 | Is this classroom only for children ten and under? | いか | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to add | 二に三を足すと五になります。 | If you add three to two, it becomes five. | たす | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to add | 料理に塩を少し足しましょうか。 | Shall we add a little salt to the dish? | たし | N5 L5 T5 C3 I4 — 入れる/かける could also fit the blank. | teach only | yes |
| to add | 味が薄いから、醤油を足します。 | Since the taste is weak, I'll add soy sauce. | たします | N5 L5 T5 C3 I4 — 入れる/加える could also fit the blank. | teach only | yes |
| more than | 今日の会議は百人以上来ますか。 | Are more than a hundred people coming to today's meeting? | いじょう | N4 L4 T5 C3 I3 — Could also be filled with くらい/ぐらい, slightly weakening cloze uniqueness. | teach only | yes |
| more than | 熱が三十八度以上あるから、病院へ行きます。 | Since my fever is above thirty-eight degrees, I'm going to the hospital. | いじょう | N5 L4 T5 C4 I4 | cloze+teach | yes |
| rate | 男の学生と女の学生の割合は半分ずつです。 | The ratio of male to female students is half and half. | わりあい | N5 L4 T5 C4 I4 | cloze+teach | yes |
| rate | 会社で働く女の人の割合はどのくらいですか。 | What is the ratio of women working at the company? | わりあい | N5 L4 T5 C4 I3 | cloze+teach | yes |
| rate | 失敗の割合が高いから、注意しています。 | Because the failure rate is high, I'm being careful. | わりあい | N4 L4 T5 C2 I3 — Words like 確率 or 頻度 could also fill the blank, lowering recoverability. | teach only | yes |
| scenery | この部屋は景色がいいから好きです。 | I like this room because the scenery is nice. | けしき | N5 L5 T5 C3 I3 | teach only | yes |
| scenery | 窓から景色を見てください。 | Please look at the scenery from the window. | けしき | N5 L5 T5 C3 I3 | teach only | yes |
| forest | 森の中に小さい家があります。 | There is a small house in the forest. | もり | N5 L5 T5 C3 I3 — Could also be 山 or 村, not uniquely forest. | teach only | yes |
| forest | この森には危ない動物がいません。 | There are no dangerous animals in this forest. | もり | N5 L5 T5 C3 I3 — Other nature words like 山/島 could fit similarly. | teach only | yes |
| forest | あの森はどこにありますか。 | Where is that forest? | もり | N4 L5 T5 C2 I2 — Very generic, many location nouns fit the blank. | teach only | yes |
| to get dry | 天気がいいから洗濯物がよく乾きます。 | The laundry dries well because the weather is nice. | かわきます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to get dry | 雨の日は洗濯物が乾きません。 | On rainy days, the laundry doesn't dry. | かわきません | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to get dry | シャツが乾いたら教えてください。 | Please tell me when the shirt is dry. | かわいたら | N5 L5 T5 C4 I4 | cloze+teach | yes |
| stone | 道に大きい石がありました。 | There was a big stone on the road. | いし | N5 L5 T5 C2 I3 — Blank could be many nouns (box, dog, etc.), low forcing. | teach only | yes |
| stone | この石を持ってください。 | Please hold this stone. | いし | N4 L5 T5 C1 I1 — Very generic template; blank could be almost any object. | teach only | yes |
| coast | 海岸で写真を撮りました。 | I took photos at the coast. | かいがん | N5 L5 T5 C2 I2 — blank could be filled by many place words (公園, 海, 山) not just 海岸 | teach only | yes |
| coast | この海岸では泳いではいけません。 | You must not swim at this coast. | かいがん | N5 L5 T5 C3 I3 — 海, プール, 川 could also fit the blank | teach only | yes |
| fire | 危ないですから火を消してください。 | Please put out the fire because it's dangerous. | ひ | N5 L5 T5 C3 I3 — Blank could plausibly be other flammable/dangerous nouns like 電気 or ガス, slightly reducing uniqueness. | teach only | yes |
| fire | 外で火をつけました。 | I lit a fire outside. | ひ | N5 L5 T5 C4 I3 — 火をつける is a strong collocation, fairly recoverable. | cloze+teach | yes |
| small bird | 庭で小鳥が鳴いています。 | A small bird is singing in the garden. | ことり | N5 L5 T5 C3 I3 — Many animals/insects also 鳴く, so blank isn't uniquely forced. | teach only | yes |
| air | 空気がきれいだから山に住みたいです。 | I want to live in the mountains because the air is clean. | くうき | N5 L5 T5 C3 I4 — 水 or 景色 could also fit the blank somewhat. | teach only | yes |
| air | この部屋は空気があまりよくないです。 | The air in this room isn't very good. | くうき | N5 L5 T5 C3 I4 — 雰囲気 or 環境 could also plausibly fill the blank. | teach only | yes |
| air | 窓を開けて空気を入れてください。 | Please open the window and let some air in. | くうき | N5 L5 T5 C4 I4 | cloze+teach | yes |
| absence | 昨日、電話しましたが、留守でした。 | I called yesterday, but no one was home. | るす | N5 L5 T5 C4 I3 | cloze+teach | yes |
| absence | 会社に電話しても、いつも留守です。 | Even when I call the office, no one is ever there. | るす | N5 L5 T5 C4 I3 | cloze+teach | yes |
| absence | 朝早く出かけたので、九時まで留守でした。 | I left early in the morning, so I was out until nine. | るす | N4 L5 T4 C3 I3 — Slight mismatch: EN 'out' differs slightly from 'absence'; other words like 外出 could also fit blank. | teach only | yes |
| I see | 「なるほど、分かりました。」と彼は言いました。 | "I see, I understand," he said. | なるほど | N4 L4 T5 C2 I2 — Blank could be filled by many interjections (ああ, そうか) not just なるほど | teach only | yes |
| I see | 先生の説明を聞いて、なるほどと思いました。 | After hearing the teacher's explanation, I thought, "I see." | なるほど | N5 L4 T5 C4 I3 — Idiomatic なるほどと思う phrase makes the blank fairly recoverable | cloze+teach | yes |
| Ah | あ、雨が降ってきました。 | Ah, it's starting to rain. | あ | N5 L5 T5 C3 I3 — Other interjections (あら, おっ) could also fit before this context. | teach only | yes |
| Ah | あ、財布を忘れました。 | Ah, I forgot my wallet. | あ | N5 L5 T5 C3 I3 — Alternative exclamations like しまった could also fit here. | teach only | yes |
| Ah | あ、料理が来ました。 | Ah, the food has arrived. | あ | N5 L5 T5 C3 I3 — Other reactions like わあ could also fit this context. | teach only | yes |
| way | この機械はこのように使ってください。 | Please use this machine like this. | よう | N5 L4 T5 C4 I3 | cloze+teach | yes |
| way | 傘を忘れないように天気を見ます。 | I check the weather so I don't forget my umbrella. | よう | N5 L4 T5 C5 I4 | cloze+teach | yes |
| way | 遅れないように早く家を出ます。 | I leave home early so I won't be late. | よう | N5 L4 T5 C5 I4 | cloze+teach | yes |
| honorable ~ | ご家族はお元気ですか。 | How is your family doing? | ご | N5 L5 T5 C4 I3 | cloze+teach | yes |
| honorable ~ | ご予定を教えてください。 | Please tell me your schedule. | ご | N5 L5 T5 C4 I3 | cloze+teach | yes |
| peace of mind | 天気予報を見て、安心しました。 | I felt relieved after watching the weather forecast. | あんしん | N4 L5 T5 C3 I3 — Weather forecast alone doesn't strongly force 安心; could also fit 満足 or 安心 tie needs more context. | teach only | yes |
| peace of mind | 子供が家に着いたら、安心します。 | I'll feel relieved once the child gets home. | あんしん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| peace of mind | 部長が手伝ってくれたので、安心しました。 | I felt relieved because the manager helped me. | あんしん | N4 L5 T5 C3 I3 — Manager helping could also elicit 感謝 rather than specifically 安心, slightly reducing recoverability. | teach only | yes |
| arrangement | 友達と六時に会う約束をしました。 | I made a promise to meet my friend at six. | やくそく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| arrangement | 約束を忘れないでください。 | Please don't forget our appointment. | やくそく | N4 L5 T4 C2 I2 — Blank could be filled by many nouns like 宿題, 時間, 予定, etc., reducing recoverability. | teach only | yes |
| culture | 文化が違うと、習慣も違います。 | If the culture is different, the customs are different too. | ぶんか | N5 L4 T5 C3 I4 | teach only | yes |
| population | この町の人口は少ないです。 | This town's population is small. | じんこう | N5 L5 T5 C3 I3 — could also be 'people' or other nouns describing the town, not fully unique | teach only | yes |
| population | あの国の人口はどのくらいですか。 | About how large is that country's population? | じんこう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| population | この県の人口はあの県より多いと思います。 | I think this prefecture's population is larger than that one's. | じんこう | N5 L5 T5 C4 I4 — 面積 could also fit grammatically but 人口 is the natural reading given context | cloze+teach | yes |
| not at all (neg. verb) | 薬を飲んでもちっとも治りません。 | Even after taking medicine, I haven't gotten better at all. | ちっとも | N5 L4 T5 C3 I4 — 全然 could also fit the blank, slightly lowering recoverability | teach only | yes |
| not at all (neg. verb) | 天気がちっとも良くなかったです。 | The weather wasn't good at all. | ちっとも | N5 L4 T5 C3 I3 — 全然 also fits grammatically, so context doesn't force ちっとも uniquely | teach only | yes |
| not at all (neg. verb) | 今朝はちっとも眠くなかったです。 | I wasn't sleepy at all this morning. | ちっとも | N5 L4 T5 C3 I3 — 全然 could substitute, reducing uniqueness of answer | teach only | yes |
| if at all possible | できるだけ野菜を食べたいです。 | I want to eat vegetables as much as possible. | できるだけ | N5 L5 T5 C3 I2 — Blank could also be filled by words like 毎日 or たくさん, reducing uniqueness. | teach only | yes |
| if at all possible | できるだけ早く来てくださいませんか。 | Could you please come as early as possible? | できるだけ | N5 L5 T5 C3 I3 — できるだけ早く is a strong collocation but other adverbs like すぐに could also fit. | teach only | yes |
| novel | どんな小説が好きですか。 | What kind of novels do you like? | しょうせつ | N5 L5 T5 C2 I3 — blank could equally be 本, 漫画, 音楽, etc. | teach only | yes |
| novel | この小説を読んだことがあります。 | I have read this novel before. | しょうせつ | N5 L5 T5 C2 I3 — blank could be 本, 映画, 漫画, etc. | teach only | yes |
| moreover | この店の魚は安いです。それに新しいです。 | This store's fish is cheap. Moreover, it's fresh. | それに | N5 L5 T5 C4 I3 | cloze+teach | yes |
| moreover | 頭が痛いです。それに熱もあります。 | My head hurts. Moreover, I have a fever too. | それに | N5 L5 T5 C5 I3 | cloze+teach | yes |
| moreover | 天気がいいです。それに暇です。 | The weather is nice. Moreover, I'm free. | それに | N4 L5 T5 C3 I2 — weather and free time is a weak logical link, slightly generic | teach only | yes |
| ~ ceremony | 来週、卒業式があります。 | There is a graduation ceremony next week. | しき | N5 L5 T5 C5 I4 | cloze+teach | yes |
| ~ ceremony | 式は何時に始まりますか。 | What time does the ceremony start? | しき | N4 L5 T5 C2 I3 — Without more context, many nouns (パーティー, 会議, 試合) could fill the blank. | teach only | yes |
| to be set | 会議の場所はもう決まりましたか。 | Has the meeting place already been decided? | きまりました | N5 L5 T5 C4 I2 | cloze+teach | yes |
| to be set | 予定が決まったら教えてください。 | Please let me know once the schedule is set. | きまったら | N5 L4 T5 C4 I3 | cloze+teach | yes |
| so | 熱があります。だから今日は休みます。 | I have a fever. So I'll rest today. | だから | N5 L5 T5 C3 I3 — それで/そのため could also fit the blank. | teach only | yes |
| so | 今朝は寝坊しました。だから朝御飯を食べませんでした。 | I overslept this morning. So I didn't eat breakfast. | だから | N5 L5 T5 C3 I3 — それで/そのため also plausible in blank. | teach only | yes |
| so | お金がありません。だから買い物に行きません。 | I don't have money. So I won't go shopping. | だから | N5 L5 T5 C3 I3 — それで/そのため also plausible in blank. | teach only | yes |
| month | 月に二回ぐらい、運動します。 | I exercise about twice a month. | つき | N5 L5 T5 C5 I3 | cloze+teach | yes |
| month | 今夜、月が見えますか。 | Can you see the moon tonight? | つき | N5 L5 T5 C4 I3 — Uses 月 meaning 'moon' rather than 'month', so it doesn't match the intended target word meaning. | cloze+teach | yes |
| month | 月を見に行きたいです。 | I want to go see the moon. | つき | N5 L5 T5 C4 I3 — Uses 月 meaning 'moon' rather than 'month', mismatched with target word sense. | cloze+teach | yes |
| age | どんな時代に生まれましたか。 | What era were you born in? | じだい | N4 L5 T5 C3 I3 — Blank could also be 国 or 家 in a similar context. | teach only | yes |
| age | 違う時代に生まれたかったです。 | I wanted to be born in a different era. | じだい | N4 L5 T5 C3 I4 — Blank still allows alternatives like 国 or 場所, though 時代 fits well. | teach only | yes |
| season | 秋は好きな季節です。 | Autumn is my favorite season. | きせつ | N5 L5 T5 C3 I3 — Blank could arguably be filled with other nouns like 時期, slightly less forced. | teach only | yes |
| season | どの季節が一番好きですか。 | Which season do you like best? | きせつ | N5 L5 T5 C2 I2 — Generic 'which ___ do you like best' template fits many nouns, low recoverability and interest. | teach only | yes |
| season | 好きな季節に旅行しませんか。 | Won't you travel in your favorite season? | きせつ | N4 L5 T5 C4 I4 | cloze+teach | yes |
| a little while ago | さっき頭が痛かったです。 | My head hurt a little while ago. | さっき | N5 L5 T5 C3 I3 — Other time words (今朝, 今日) could also fit the blank. | teach only | yes |
| a little while ago | さっき店で買い物をしました。 | I went shopping at the store a little while ago. | さっき | N5 L5 T5 C3 I3 — Blank could also be filled with 今日 or 昨日, reducing uniqueness. | teach only | yes |
| the month after next | 再来月、旅行に行きます。 | I will go on a trip the month after next. | さらいげつ | N5 L5 T5 C2 I3 — Any time word (来月, 来年, 今月) could fill the blank equally well; context doesn't force 再来月 specifically. | teach only | yes |
| the month after next | 再来月、誕生日パーティーをしますか。 | Will you have a birthday party the month after next? | さらいげつ | N5 L5 T5 C2 I3 — Blank could be filled by any time expression, not uniquely 再来月. | teach only | yes |
| the month after next | 再来月、新しい家に住みたいです。 | I want to live in a new house the month after next. | さらいげつ | N5 L5 T5 C2 I3 — Same issue: many time words fit the blank grammatically, reducing cloze uniqueness. | teach only | yes |
| old days | 昔、この町は静かでした。 | Long ago, this town was quiet. | むかし | N5 L5 T5 C4 I3 | cloze+teach | yes |
| old days | 昔、どんな仕事をしていましたか。 | What kind of work did you do in the old days? | むかし | N5 L5 T5 C4 I3 | cloze+teach | yes |
| festival | 夏にお祭りがあります。 | There is a festival in summer. | おまつり | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (event, vacation, etc.). | teach only | yes |
| festival | 一緒にお祭りに行きませんか。 | Won't you go to the festival together? | おまつり | N5 L5 T5 C2 I3 — Many destination nouns fit the blank equally well. | teach only | yes |
| festival | お祭りで何を食べましたか。 | What did you eat at the festival? | おまつり | N5 L5 T5 C2 I4 — Blank could be replaced by other place nouns like restaurant or park. | teach only | yes |
| to be heard | 事務所で電話の音が聞こえます。 | You can hear the phone ringing in the office. | きこえ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to be heard | 電車の中で誰かの声が聞こえました。 | I heard someone's voice on the train. | きこえ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to be heard | 風邪で耳が痛くて、よく聞こえません。 | My ear hurts from my cold, and I can't hear well. | きこえ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| yes (informal) | 「熱があるの？」「うん、少しある。」 | "Do you have a fever?" "Yeah, a little." | うん | N4 L5 T5 C3 I2 — Could also be filled with はい/そう, so not fully unique. | teach only | yes |
| yes (informal) | 「もう駅に着いた？」「うん、着いたよ。」 | "Did you already arrive at the station?" "Yeah, I did." | うん | N4 L5 T5 C3 I2 — Generic Q&A template; other affirmatives could fit blank. | teach only | yes |
| yes (informal) | 「果物を買った？」「うん、買ったよ。」 | "Did you buy fruit?" "Yeah, I did." | うん | N4 L5 T5 C3 I2 — Same generic pattern as others; blank not uniquely determined. | teach only | yes |
| to pray | 仕事が終わるようにと祈っています。 | I'm praying that the work will finish. | いのって | N4 L3 T5 C5 I3 — ように construction is slightly above N4 ceiling (typically N3), but otherwise natural and clear. | cloze+teach | yes |
| last | 授業の最後に質問がありますか。 | Is there a question at the end of the class? | さいご | N5 L5 T5 C3 I3 — 最初 could also fit, making the blank ambiguous. | teach only | yes |
| custom | 毎朝早く起きることが習慣です。 | Getting up early every morning is a habit. | しゅうかん | N5 L4 T5 C3 I3 — Could also be 日課, slightly reducing forced uniqueness. | teach only | yes |
| to wake up | 母は毎朝六時に私を起こします。 | My mother wakes me up at six every morning. | おこします | N5 L5 T5 C4 I3 | cloze+teach | yes |
| war | 昔、この国で戦争がありました。 | Long ago, there was a war in this country. | せんそう | N5 L5 T5 C3 I4 — Context (country, past) narrows options but other events like 事故 or 祭り could still fit. | teach only | yes |
| never | その電話番号を決して忘れません。 | I will never forget that phone number. | けっして | N5 L3 T5 C3 I4 — 絶対に could also work here, slightly reducing uniqueness. | teach only | yes |
| communication | 明日連絡します。 | I will contact you tomorrow. | れんらく | N4 L5 T5 C2 I2 — Very generic sentence; many nouns could fill the blank before します. | teach only | yes |
| expression of gratitude | 両親にお礼を言いました。 | I thanked my parents. | おれい | N5 L5 T5 C2 I2 — Generic phrase; blank could be filled by many nouns. | teach only | yes |
| to soak | 母は野菜を塩に漬けます。 | My mother soaks vegetables in salt. | つけます | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to be set | 旅行の日はもう決まりましたか。 | Has the date of the trip already been decided? | きまりました | N5 L5 T5 C4 I2 — Very similar template to sentence 0, reducing novelty. | cloze+teach | yes |
| New Year | 正月はいつも忙しいです。 | New Year is always busy. | しょうがつ | N4 L5 T5 C2 I2 — Generic sentence; many time words could fill the blank. | teach only | yes |
| New Year | 正月に神社へ行きたいです。 | I want to go to a shrine on New Year. | しょうがつ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| old days | 昔、この町に大きい木がありました。 | Long ago, there was a big tree in this town. | むかし | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to pray | 病気が治るように祈ります。 | I pray that the illness will heal. | いのります | N4 L3 T5 C5 I3 — ように construction is slightly above N4 ceiling (typically N3). | cloze+teach | yes |
| to think | 明日は雨が降ると思います。 | I think it will rain tomorrow. | おもいます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to think | 彼は忙しいと思いますか。 | Do you think he is busy? | おもいます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to think | 子供のとき、あの先生は怖いと思いました。 | When I was a child, I thought that teacher was scary. | おもいました | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to stop | ここに車を止めてください。 | Please stop the car here. | とめて | N5 L4 T5 C4 I2 — Very similar to sentence 0, slightly repetitive. | cloze+teach | yes |
| explanation | この仕事について説明してください。 | Please explain this work. | せつめい | N4 L5 T5 C3 I2 — generic template sentence; many verbs like 報告して or 話して could fit the blank | teach only | yes |
| consent | 部長は計画を承知しました。 | The department manager agreed to the plan. | しょうち | N4 L5 T4 C3 I2 — Generic office scenario; 賛成しました or 了承しました could also fit the blank. | teach only | yes |
| member of ~ | 父は銀行員です。 | My father is a bank employee. | いん | N5 L5 T5 C4 I2 — Nearly identical to sentence 0, generic template. | cloze+teach | yes |
| (your, her) husband | ご主人は今日、忙しいですか。 | Is your husband busy today? | ごしゅじん | N5 L5 T5 C2 I3 — Blank could be filled by other people-words like お父さん or 彼. | teach only | yes |
| (your, her) husband | ご主人は医者です。 | Your husband is a doctor. | ごしゅじん | N5 L5 T5 C2 I3 — Blank could be filled by other people-words like お父さん or 彼. | teach only | yes |
| spirit | 彼の言葉が気になります。 | His words are bothering me. | き | N5 L4 T5 C4 I3 | cloze+teach | yes |
| report | 明日までにレポートを出してください。 | Please submit the report by tomorrow. | れぽーと | N5 L5 T5 C3 I3 — Slightly more constrained by 出してください but still could be 宿題 or 書類. | teach only | yes |
| tool | 仕事の道具をかばんに入れました。 | I put the work tools in my bag. | どうぐ | N5 L5 T5 C3 I3 — Blank could also be replaced with 書類 or 資料, reducing uniqueness. | teach only | yes |
| terrible | 今日はひどい天気ですね。 | The weather is terrible today, isn't it. | ひどい | N5 L5 T5 C2 I2 — Generic weather template; いい/悪い/変な could all fit the blank. | teach only | yes |
| danger | この仕事は危険ですから、気をつけてください。 | This job is dangerous, so please be careful. | きけん | N5 L5 T5 C3 I2 — Similar template sentence, could fit other adjectives like 大変 or きつい. | teach only | yes |
| danger | 危険な道を歩かないでください。 | Please don't walk on the dangerous road. | きけん | N5 L5 T5 C2 I2 — Many adjectives (暗い, 狭い, 汚い) could fill the blank before 道. | teach only | yes |
| industry | この国の産業について話しましょう。 | Let's talk about this country's industry. | さんぎょう | N4 L4 T5 C2 I2 — very generic; many nouns fit the blank | teach only | yes |
| literature | 大学で文学を習っています。 | I am studying literature at university. | ぶんがく | N5 L5 T5 C2 I3 — Many academic subjects could fit this blank equally well. | teach only | yes |
| mostly | 仕事はほとんど終わりました。 | The work is mostly finished. | ほとんど | N5 L5 T5 C3 I1 — Nearly identical template to sentence 0, low interest. | teach only | yes |
| rule | 会社にはたくさんの規則があります。 | The company has many rules. | きそく | N5 L5 T5 C2 I2 — many nouns (社員, 部屋, 問題) could fill the blank equally well | teach only | yes |
| discourtesy | 遅れて、失礼しました。 | I'm sorry for being late. | しつれい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to get down | おばあさんはもう階段を下りましたか。 | Has grandma already gone down the stairs? | おりました | N5 L4 T5 C5 I3 | cloze+teach | yes |
| to transport | 誰がこの荷物を運びますか。 | Who will carry this luggage? | はこびます | N5 L5 T5 C3 I2 — 持ちます could also fit the blank; fairly generic sentence. | teach only | yes |
| arm | 赤ちゃんの腕は小さいですか。 | Is the baby's arm small? | うで | N4 L5 T5 C2 I2 — Generic template sentence; blank could be many body parts (手, 足, 頭). | teach only | yes |
| within | 宿題は今週の内に出してください。 | Please submit the homework within this week. | うち | N5 L4 T5 C4 I3 | cloze+teach | yes |
| just did ~ | 今、起きたばかりだから、眠いです。 | Since I just woke up, I'm sleepy. | ばかり | N4 L5 T5 C3 I3 — Slightly redundant with 今 and ばかり together; ところ also plausible. | teach only | yes |
| grass | 庭の草は多いですか。 | Is there a lot of grass in the yard? | くさ | N4 L5 T5 C3 I2 — Fairly generic template sentence; other nouns like 木や花 could fit the blank. | teach only | yes |
| made in ~ | このカメラはアメリカ製です。 | This camera is made in America. | せい | N5 L5 T5 C4 I2 — generic template sentence | cloze+teach | yes |
| really | 明日雨が降るそうです。 | I hear it will rain tomorrow. | そう | N5 L4 T5 C5 I3 — Uses そう as hearsay marker, not 'really'; but grammar pattern makes blank highly recoverable. | cloze+teach | yes |
| clerk | 店員はとても親切でした。 | The clerk was very kind. | てんいん | N4 L5 T5 C2 I2 — generic template sentence with weak cloze constraint | teach only | yes |
| Shinto shrine | 明日、神社へ行きます。 | Tomorrow, I will go to the shrine. | じんじゃ | N5 L5 T5 C2 I2 — very generic sentence, blank works with any destination noun | teach only | yes |
| medical science | 彼は医学が好きではありません。 | He doesn't like medical science. | いがく | N4 L5 T5 C2 I2 — Generic sentence pattern; blank could be any noun. | teach only | yes |
| text | 今日はテキストを忘れました。 | I forgot my textbook today. | てきすと | N5 L5 T5 C2 I2 — Same generic structure as #1; low cloze specificity. | teach only | yes |
| preparation of lessons | 今晩、予習をします。 | Tonight, I will prepare for class. | よしゅう | N4 L5 T5 C2 I2 — very generic sentence; many nouns could fill the blank. | teach only | yes |
| use | 図書館を利用してください。 | Please use the library. | りよう | N4 L5 T5 C3 I2 — 使ってください would also work equally well here. | teach only | yes |
| use | 電車を利用しますから、早く行けます。 | Because I use the train, I can get there quickly. | りようします | N5 L5 T5 C3 I4 — 使います could substitute, but context is more vivid and specific. | teach only | yes |
| at last | やっと仕事が終わりました。 | At last the work finished. | やっと | N5 L5 T5 C3 I3 — もう could also plausibly fill the blank. | teach only | yes |
| line | この線をまっすぐ引いてください。 | Please draw this line straight. | せん | N5 L5 T5 C4 I3 — Combination of まっすぐ引く strongly cues 線, good cloze clarity. | cloze+teach | yes |
| strength | 力を入れてください。 | Please put in your strength. | ちから | N4 L5 T4 C3 I2 — Common set phrase but could also fit other nouns like 気 in similar contexts, and it's a bit generic. | teach only | yes |
| to praise | 先生は学生を褒めました。 | The teacher praised the student. | ほめました | N4 L5 T5 C2 I2 — Too generic; many verbs could fit '学生を___'. | teach only | yes |
| -- honorific expression for いう -- | 部長はまだおっしゃっていません。 | The department manager hasn't said it yet. | おっしゃっていません | N4 L4 T5 C4 I3 | cloze+teach | yes |
| pronunciation | 英語の発音は難しいですか。 | Is English pronunciation difficult? | はつおん | N5 L5 T5 C3 I3 — 英語の could precede grammar too, slightly ambiguous | teach only | yes |
| to sound | ベルが鳴ったら、教室に入ります。 | When the bell rings, we'll enter the classroom. | なったら | N4 L5 T5 C5 I2 — Very similar to sentence 1, less interesting duplicate. | cloze+teach | yes |
| to live | 動物も人も生きるために食べます。 | Both animals and people eat in order to live. | いきる | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to boil | 水が沸くまで待ちましょう。 | Let's wait until the water boils. | わく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| flavor | 味が薄いと思います。 | I think the flavor is weak. | あじ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| meal | 一緒に食事しませんか。 | Won't you have a meal with me? | しょくじし | N4 L5 T4 C3 I2 — Very similar to sentence 1, less context to narrow down the blank. | teach only | yes |
| piano | 妹はピアノを習っています。 | My younger sister is learning piano. | ぴあの | N5 L5 T5 C4 I4 | cloze+teach | yes |
| shelves | 本は棚の上にあります。 | The book is on the shelf. | たな | N5 L5 T5 C3 I2 — Simple sentence; blank could be filled with other surface nouns like 机 or 箱. | teach only | yes |
| shelves | 棚に本を並べてください。 | Please arrange the books on the shelf. | たな | N5 L5 T5 C3 I3 — 本を並べる narrows options but other storage nouns could still fit. | teach only | yes |
| -- humble expression for あげる -- | 先生にお土産を差し上げます。 | I give a souvenir to my teacher. | さしあげます | N5 L4 T5 C4 I2 | cloze+teach | yes |
| shallow | 学校のプールは浅いです。 | The school pool is shallow. | あさい | N5 L5 T5 C2 I2 — Same generic template as sentence 0, many words could fit the blank. | teach only | yes |
| scary | あの先生は怖いです。 | That teacher is scary. | こわい | N5 L5 T5 C2 I2 — Generic template sentence; blank could be filled by many adjectives. | teach only | yes |
| change | レストランでおつりをもらいました。 | I received change at the restaurant. | おつり | N4 L5 T5 C3 I2 — Same template as sentence 0, low distinctiveness. | teach only | yes |
| pickpocket | 電車の中にすりがいました。 | There was a pickpocket on the train. | すり | N5 L5 T5 C2 I3 — Context doesn't strongly constrain the blank; could be many other nouns. | teach only | yes |
| to bite | 犬が私の足を噛みました。 | The dog bit my leg. | かみました | N5 L5 T5 C4 I3 — Nearly identical to sentence 0, reduces variety. | cloze+teach | yes |
| degree | 父ほど元気な人はいません。 | There is no one as energetic as my father. | ほど | N4 L3 T5 C4 I4 — Fixed comparative pattern ほど…ない makes the blank fairly forced. | cloze+teach | yes |
| good | 家族のために働きます。 | I work for the sake of my family. | ため | N5 L5 T5 C5 I4 | cloze+teach | yes |
| play | 公園へ遊びに行きませんか。 | Shall we go to the park to play? | あそび | N5 L5 T5 C4 I3 — Park context makes 遊び more specifically implied, though still a few alternatives possible. | cloze+teach | yes |
| heating | 寒いですから、暖房をつけましょう。 | It's cold, so let's turn on the heating. | だんぼう | N5 L5 T5 C3 I3 — エアコン/ヒーター could also fit the blank | teach only | yes |
| thread | 母は糸で服を作ります。 | My mother makes clothes with thread. | いと | N5 L5 T5 C3 I3 — 糸 could be replaced by 布/生地, slightly reducing recoverability. | teach only | yes |
| thread | 白い糸がありません。 | There is no white thread. | いと | N5 L5 T5 C2 I3 — White ___ could be many objects, weak cloze cue. | teach only | yes |
| thread | どんな糸が必要ですか。 | What kind of thread do you need? | いと | N4 L5 T5 C1 I1 — Very generic template, blank could be almost any noun. | teach only | yes |
| leaf | 秋に葉が赤くなります。 | In autumn, the leaves turn red. | は | N5 L5 T5 C4 I3 — Slightly generic, near-duplicate of sentence 0. | cloze+teach | yes |
| return | 帰りに買い物をしましょう。 | Let's go shopping on the way home. | かえり | N5 L4 T5 C4 I2 — fairly generic template sentence | cloze+teach | yes |
| information | 先生が学校を案内します。 | The teacher gives a tour of the school. | あんない | N4 L3 T5 C3 I2 — Generic template sentence; 紹介 could also fit the blank. | teach only | yes |
| to scold | 先生は学生を叱りました。 | The teacher scolded the student. | しかりました | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to scold | 父はよく妹を叱ります。 | My father often scolds my younger sister. | しかります | N5 L5 T5 C5 I3 | cloze+teach | yes |
| society | 大人になったら、社会に出ます。 | When I become an adult, I will go out into society. | しゃかい | N5 L5 T5 C4 I3 — Very similar in structure to sentence 0, reducing novelty. | cloze+teach | yes |
| double | この店の料理はあそこの倍高いです。 | This restaurant's food is twice as expensive as that one. | ばい | N4 L4 T5 C3 I3 | teach only | yes |
| double | もっと習えば、点は倍になると思います。 | If you study more, I think the points will double. | ばい | N4 L4 T5 C3 I4 | teach only | yes |
| more than | 十人以上が公園にいます。 | More than ten people are in the park. | いじょう | N4 L4 T5 C3 I2 — Generic sentence; other quantifiers like くらい could also fit the blank. | teach only | yes |
| scenery | この窓から景色がとても綺麗です。 | The scenery from this window is very beautiful. | けしき | N5 L5 T5 C3 I4 | teach only | yes |
| to correct | 作文を直してください。 | Please correct my composition. | なおして | N5 L5 T5 C4 I4 — Common natural request, fairly strong cloze constraint though 見てください also plausible. | cloze+teach | yes |
| (manufacturing) industry | この国は工業が盛んです。 | This country's industry is thriving. | こうぎょう | N5 L5 T5 C3 I4 — '盛ん' narrows options somewhat but 農業/漁業/観光業 could also fit. | teach only | yes |
| translation | この文章を翻訳してください。 | Please translate this sentence. | ほんやくして | N5 L5 T5 C3 I2 — Other verbs (訂正して, 確認して) could also fit the blank, slightly weakening recoverability. | teach only | yes |
| comic | 土曜日に漫画を読むつもりです。 | I plan to read comics on Saturday. | まんが | N5 L4 T5 C2 I3 — blank could be filled with many other reading materials (本, 新聞, 雑誌) | teach only | yes |
| trash | ごみを捨ててください。 | Please throw away the trash. | ごみ | N4 L5 T5 C2 I1 — Very generic sentence; blank could be many objects, low uniqueness and low interest. | teach only | yes |
| to go back and forth | 大学時代、毎日学校に通いました。 | During my university days, I commuted to school every day. | かよいました | N5 L5 T5 C3 I3 — 行きました could also fit; context strongly suggests commuting but not exclusive. | teach only | yes |
| unusual | これは珍しい魚です。 | This is a rare fish. | めずらしい | N4 L5 T5 C1 I1 — Generic これは＿です template; nearly any adjective fits the blank. | teach only | yes |
| diligent | 彼はとても真面目な学生です。 | He is a very diligent student. | まじめ | N4 L5 T5 C2 I2 — Very generic template; many adjectives could fill the blank. | teach only | yes |
| to exchange | 学校で椅子を取り替えます。 | We will exchange the chairs at school. | とりかえます | N4 L5 T5 C2 I2 — Many verbs (並べる、動かす、片付ける) could fit the blank besides 取り替える. | teach only | yes |
| to exchange | 古い傘を新しい傘に取り替えたいです。 | I want to exchange the old umbrella for a new one. | とりかえたい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to exchange | レストランで店員がコップを取り替えました。 | The staff exchanged the cup at the restaurant. | とりかえました | N4 L5 T5 C3 I3 — Other verbs like 洗う or 片付ける could also plausibly fill the blank. | teach only | yes |
| living | 私はここで生活しています。 | I am living here. | せいかつして | N4 L4 T5 C2 I2 — blank could be filled by many verbs (勉強して, 仕事して, etc.) | teach only | yes |
| living | 大学生活はとても忙しいです。 | University life is very busy. | せいかつ | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to pass | バスはこの道を通ります。 | The bus passes along this road. | とおります | N5 L5 T5 C3 I2 — Similar to sentence 0, 走ります could also fit, lowering cloze uniqueness. | teach only | yes |
| to shake | 電車に乗ると、体が揺れます。 | When you ride the train, your body shakes. | ゆれます | N5 L5 T5 C4 I3 — Similar to sentence 1, slightly generic. | cloze+teach | yes |
| to fall | 高い所から物が落ちると危ないです。 | It's dangerous if things fall from a high place. | おちる | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to stop by | 帰りに図書館に寄ります。 | I will stop by the library on my way home. | よります | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to stop by | 会社の帰りに喫茶店に寄りました。 | I stopped by a cafe on my way home from work. | よりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to pitch | 子供が公園で石を投げました。 | The child threw a stone in the park. | なげました | N5 L4 T5 C4 I3 | cloze+teach | yes |
| stone | 道に石があって、危ないですよ。 | There's a stone on the road, so it's dangerous. | いし | N5 L5 T5 C3 I4 — Context of danger narrows possibilities somewhat but still allows other objects like glass or hole. | teach only | yes |
| coast | 休みの日、海岸へ行きたいです。 | I want to go to the coast on my day off. | かいがん | N5 L5 T5 C2 I2 — generic sentence, many places could fill the blank | teach only | yes |
| fire | 火が危ないですから、気をつけてください。 | Fire is dangerous, so please be careful. | ひ | N4 L5 T5 C2 I2 — Generic sentence; blank could be almost any noun (this, that, dog, etc.), low recoverability. | teach only | yes |
| small bird | 休みの日に公園で小鳥を見ました。 | I saw a small bird in the park on my day off. | ことり | N5 L5 T5 C2 I3 — Many things (animals, people, flowers) could be seen in a park, so blank isn't uniquely determined. | teach only | yes |
| if at all possible | 病気の時は、できるだけ休んでください。 | When you're sick, please rest as much as possible. | できるだけ | N5 L5 T5 C3 I4 — Context strongly suggests できるだけ but words like ちゃんと could also work. | teach only | yes |
| novel | 休みの日に小説を読みました。 | I read a novel on my day off. | しょうせつ | N5 L5 T5 C2 I3 — blank could be 本, 新聞, 漫画, etc. | teach only | yes |
| to visit | 明日、先生を訪ねるつもりです。 | Tomorrow I plan to visit the teacher. | たずねる | N4 L4 T5 C2 I2 — Sentence too generic; many verbs (呼ぶ、待つ、手伝う) could fit the blank. | teach only | yes |
| slope | 坂を登ると疲れます。 | If you climb the slope, you get tired. | さか | N5 L4 T5 C3 I3 — 山や階段でも文が成立するため答えが一意になりにくい | teach only | yes |
| complexity | この問題は複雑です。 | This problem is complicated. | ふくざつ | N5 L5 T5 C2 I2 — Very generic sentence; blank not uniquely constrained. | teach only | yes |
| suburb | 郊外は静かだから、好きです。 | I like the suburbs because they're quiet. | こうがい | N5 L5 T5 C3 I3 — Blank could be filled with other 'quiet place' nouns like 田舎. | teach only | yes |
| history | 大学で歴史を習っています。 | I'm studying history at university. | れきし | N5 L5 T5 C2 I3 — Many subjects could fill the blank (英語, 数学, etc.), reducing recoverability. | teach only | yes |
| economics | 毎朝、経済ニュースを読みます。 | Every morning, I read economic news. | けいざい | N4 L5 T5 C2 I3 — Similar to sentence 0; ambiguous blank, low uniqueness. | teach only | yes |
| sandal | 夏はサンダルを履きます。 | In summer, I wear sandals. | さんだる | N4 L5 T5 C2 I1 — Very generic template sentence, low interest. | teach only | yes |
| lake | この湖はとても大きいです。 | This lake is very big. | みずうみ | N4 L5 T5 C2 I1 — Generic template sentence with weak cloze constraint; many nouns could fit. | teach only | yes |
| to help | 仕事を手伝ってください。 | Please help me with the work. | てつだって | N5 L5 T5 C3 I2 — Fairly generic template sentence. | teach only | yes |
| to help | 昨日、姉の宿題を手伝いました。 | Yesterday I helped my sister with her homework. | てつだいました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| (honorific) to give | 先生が本をくださいました。 | The teacher gave me a book. | くださいました | N5 L3 T5 C4 I2 — Nearly identical to sentence 0, less distinct content. | cloze+teach | yes |
| to laugh | 男の子が大きい声で笑いました。 | The boy laughed loudly. | わらいました | N5 L5 T5 C3 I2 — generic sentence, same cloze ambiguity as with 大きい声で | teach only | yes |
| politics | 大学で政治を習いました。 | I studied politics at university. | せいじ | N4 L5 T5 C2 I3 — 習いました works but 勉強しました is more common; blank could be many academic subjects. | teach only | yes |
| so much | この魚はそんなに辛くないです。 | This fish isn't that spicy. | そんなに | N5 L5 T5 C3 I3 — あまり could also fit the blank | teach only | yes |
| to deliver | 毎朝、母が新聞を届けます。 | My mother delivers the newspaper every morning. | とどけます | N5 L5 T5 C3 I3 — 配ります could also fit the blank for newspaper delivery. | teach only | yes |
| to recall | 今朝、大切な約束を思い出しました。 | This morning I recalled an important promise. | おもいだしました | N5 L5 T5 C3 I3 — 忘れました could also fit the blank contextually. | teach only | yes |
| to hit | 急いでいて、頭を打ちました。 | I was in a hurry and hit my head. | うちました | N5 L5 T5 C4 I2 — Very similar to sentence 0, reduces novelty. | cloze+teach | yes |
| (honorific) to be | 部長は今朝、会社においでになると思います。 | I think the department head is at the office this morning. | おいでになる | N4 L3 T5 C3 I3 — いらっしゃる would also fit the blank equally well, slightly reducing unique recoverability. | teach only | yes |
| goods | この店の品物はとても安いです。 | The goods at this store are very cheap. | しなもの | N4 L5 T5 C3 I3 — Context (店の...安い) narrows options somewhat but still allows other nouns like 商品. | teach only | yes |
| to be visible | 窓から山がよく見えます。 | You can see the mountain well from the window. | みえます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| breakdown | 車が故障しました。 | The car broke down. | こしょう | N4 L5 T5 C2 I2 — Very generic sentence; many verbs like 壊れました could fit. | teach only | yes |
| to be sufficient | 塩は足りますか。 | Is there enough salt? | たります | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be sufficient | 時間が足りないと思います。 | I think there isn't enough time. | たりない | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to carry out | テストを行うつもりです。 | I intend to carry out the test. | おこなう | N4 L5 T4 C2 I2 — する is an equally valid fill, and the sentence is a generic template. | teach only | yes |
| unreasonable | 無理をしないでください。 | Please don't overdo it. | むり | N5 L5 T5 C3 I3 | teach only | yes |
| ashamed | 恥ずかしくて、何も言えませんでした。 | I was so embarrassed I couldn't say anything. | はずかしくて | N5 L5 T5 C3 I3 — Other emotion words (緊張して, 悲しくて) could also fit the blank. | teach only | yes |
| beautiful | あの山はとても美しいです。 | That mountain is very beautiful. | うつくしい | N4 L5 T5 C2 I2 — Same generic pattern as sentence 0, low cloze specificity. | teach only | yes |
| to return | すぐに戻ってください。 | Please come back soon. | もどって | N5 L5 T5 C2 I2 — Many verbs (来て, 帰って, etc.) could fill the blank in this generic context | teach only | yes |
| to return | 早く戻らなければなりません。 | I must return quickly. | もどらなければ | N5 L4 T5 C3 I2 — 帰らなければ is also plausible, weakening cloze uniqueness | teach only | yes |
| kimono | 姉は着物を着ています。 | My older sister is wearing a kimono. | きもの | N5 L5 T5 C2 I2 — Near-duplicate of sentence 0 with subject swapped; blank not uniquely constrained to 着物. | teach only | yes |
| salad | レストランでサラダを食べました。 | I ate a salad at the restaurant. | さらだ | N5 L5 T5 C2 I3 — Could be any food eaten at a restaurant, not uniquely salad. | teach only | yes |
| hospitalization | 父は病気で入院しました。 | My father was hospitalized due to illness. | にゅういんしました | N5 L5 T5 C4 I2 — very similar template to sentence 0 | cloze+teach | yes |
| finger | 料理をしていて指を切りました。 | I cut my finger while cooking. | ゆび | N5 L4 T5 C3 I3 — Natural and common, but 手 could also fit the blank. | teach only | yes |
| finger | 指が痛くて、動きません。 | My finger hurts and won't move. | ゆび | N5 L4 T5 C3 I3 — Natural sentence, though other body-part nouns could also fit contextually. | teach only | yes |
| a dream | 今朝は夢を見ませんでした。 | I didn't have a dream this morning. | ゆめ | N4 L5 T5 C4 I3 — slightly unusual to say 'no dream this morning' but understandable | cloze+teach | yes |
| a dream | どんな夢を見ましたか。 | What kind of dream did you have? | ゆめ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| particularly | 今日は特に忙しいです。 | Today I'm particularly busy. | とくに | N5 L5 T5 C2 I2 — Very similar template to the other two sentences; blank not uniquely recoverable. | teach only | yes |
| suffix for familiar person | けんちゃんは公園で遊んでいます。 | Ken-chan is playing in the park. | ちゃん | N4 L5 T5 C2 I3 — けんくん or けんさん could also fit the blank | teach only | yes |
| cotton | 母は木綿の靴下を洗いました。 | My mother washed the cotton socks. | もめん | N5 L5 T5 C2 I3 — Other materials like wool or silk could also describe socks. | teach only | yes |
| computer (formal) | 新しいコンピュータが欲しいです。 | I want a new computer. | こんぴゅーた | N5 L5 T5 C2 I3 — Blank could be replaced by other desirable nouns like car or phone. | teach only | yes |
| he | 彼は医者です。 | He is a doctor. | かれ | N5 L5 T5 C1 I2 — Generic template sentence; blank not uniquely recoverable. | teach only | yes |
| thief | 泥棒が家に入りました。 | A thief entered the house. | どろぼう | N4 L5 T5 C3 I2 — Generic, minimal context; other nouns like 猫 or 風 could plausibly fit. | teach only | yes |
| person who is specialized in ~ | 彼女は有名な小説家です。 | She is a famous novelist. | か | N5 L4 T5 C4 I3 | cloze+teach | yes |
| person who is specialized in ~ | 父は政治家ですか。 | Is your father a politician? | か | N4 L4 T5 C4 I2 — Slightly generic template sentence. | cloze+teach | yes |
| difficult to do ~ | この本は読みにくいです。 | This book is hard to read. | にくい | N5 L4 T5 C3 I2 — very generic template sentence | teach only | yes |
| (honorific) to be | 部長は明日、駅においでになる予定です。 | The department manager plans to be at the station tomorrow. | おいでになる | N4 L3 T5 C3 I3 — いらっしゃる could also fill the blank, slightly reducing uniqueness. | teach only | yes |
| to finish doing ~ | 本を読み終わるまで、電車の中にいました。 | I stayed on the train until I finished reading the book. | おわる | N5 L4 T5 C4 I3 | cloze+teach | yes |
| unreasonable | これは無理な仕事だと思います。 | I think this is an unreasonable job. | むり | N4 L5 T5 C2 I2 — Blank could be filled by many adjectives (大変, 難しい, etc.), reducing recoverability. | teach only | yes |
| unreasonable | 無理をすると、病気になります。 | If you overdo it, you'll get sick. | むり | N5 L5 T5 C3 I3 | teach only | yes |
| to enjoy | 忙しいので、休みの日に趣味を楽しむつもりです。 | Since I'm busy, I plan to enjoy my hobby on my day off. | たのしむ | N5 L5 T5 C3 I3 — Other verbs (始める/続ける) could also fit the blank, slightly reducing recoverability. | teach only | yes |
