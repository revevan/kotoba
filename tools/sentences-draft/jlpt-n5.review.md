# Sentence review — jlpt-n5

Judge scores: N=naturalness L=level T=translation C=cloze-recoverability I=interest (1-5).
Auto-approved: C≥4 N≥4 L≥3 T≥4.
Flip `approved` in jlpt-n5.candidates.json to override either direction, then:
`npm run gen-sentences -- --approve jlpt-n5`

## Flagged for review (170)

| word | sentence (JA) | EN | cloze answer | judge | use | approve? |
| --- | --- | --- | --- | --- | --- | --- |
| this person | こっちを待ちました。 | I waited for this person. | こっち | N3 L5 T4 C2 I2 — Waiting for 'this person' via こっち is slightly unnatural; blank could be filled by あっち/そっち/彼 etc. |  |  |
| money | 新しい自転車のお金が欲しいです。 | I want money for a new bicycle. | おかね | N2 L4 T3 C3 I3 — Phrasing '自転車のお金' is unnatural; more natural would be '自転車を買うお金' or '自転車のためのお金'. |  |  |
| ~ side | 窓の側に机があります。 | There is a desk by the window. | がわ | N2 L4 T3 C2 I2 — 窓の側 with がわ reading is unnatural for 'by the window'; そば would be the natural word here, and the blank could equally be filled by そば/近く/隣. |  |  |
| ~ side | 向こうの側に大きい建物がありますか。 | Is there a big building on the other side? | がわ | N2 L4 T4 C3 I2 — 「向こうの側」is awkward; the set phrase is 向こう側 without の, and the blank could also be filled by 方/方向. |  |  |
| word | この語の意味が分かりません。 | I don't understand the meaning of this word. | ご | N3 L4 T5 C4 I3 — 語 alone (rather than 言葉/単語) sounds a bit academic but is acceptable in dictionary-style speech. |  |  |
| word | その語を知っていますか。 | Do you know that word? | ご | N3 L4 T5 C3 I3 — Slightly stilted; 言葉 would be more common colloquially, but reading and meaning are consistent. |  |  |
| word | 新しい語を習いたいです。 | I want to learn a new word. | ご | N3 L4 T5 C3 I3 — Acceptable but generic; 単語 would be more natural for 'learning a word'. |  |  |
| to need | きのう、傘がいりました。 | Yesterday I needed an umbrella. | いりました | N3 L4 T4 C3 I3 — あった/ほしかった could also fit the blank, reducing uniqueness. |  |  |
| honorable ~ (honorific) | 友達のお誕生日は昨日でした。 | My friend's birthday was yesterday. | お | N2 L4 T4 C3 I2 — Honorific お is unnatural when referring to a friend's birthday; sounds odd to native speakers. |  |  |
| Ah! | ああ、このカレーはおいしいですね。 | Ah, this curry is delicious, isn't it. | ああ | N3 L5 T5 C2 I3 — Reading kana 'かれえ' is incorrect for カレー (should be かれー); also interjection blank has multiple plausible fillers. |  |  |
| over there | あっちに電車が来ます。 | The train is coming from over there. | あっち | N3 L4 T2 C3 I3 — に implies direction 'to' not 'from'; translation mismatches the particle usage. |  |  |
| not very | このカレーは余り辛くないです。 | This curry isn't very spicy. | あまり | N2 L5 T5 C3 I3 — Reading uses え instead of long vowel mark ー for カレー, kana mismatch |  |  |
| to be | テーブルの上にお皿があります。 | There is a plate on the table. | あります | N2 L5 T5 C4 I2 — Reading 'てえぶる' should be 'てーぶる' with long vowel mark. |  |  |
| to come | 電車が遅く来ました。 | The train came late. | きました | N2 L5 T4 C3 I3 — 遅く来ました is unnatural; natives would say 遅れて来ました, and other verbs (着きました) could also fit the blank. |  |  |
| to stand up | 授業の前に立ちます。 | I stand up before class. | たちます | N3 L5 T3 C2 I2 — 授業の前に is ambiguous between 'before class' and 'in front of class'; many verbs could fill blank. |  |  |
| to arrive at | 駅に着いてください。 | Please arrive at the station. | ついて | N3 L5 T4 C3 I2 — 'please arrive' is an odd request phrasing in English; 来て could also fill blank |  |  |
| shirt | 会社にそのシャツを着ますか。 | Will you wear that shirt to the office? | しゃつ | N3 L4 T4 C2 I3 — 会社にシャツを着る is slightly unnatural; usually 着ていく is used for wearing to a place. |  |  |
| shower | 熱いですから、シャワーを浴びます。 | Because it's hot, I take a shower. | しゃわあ | N3 L4 T4 C5 I3 — 熱い should be 暑い for weather; 熱いシャワー sounds like referring to hot shower water, causing slight ambiguity. |  |  |
| shower | 今朝、シャワーを浴びましょうか。 | Shall we take a shower this morning? | しゃわあ | N2 L4 T4 C5 I3 — 「今朝〜ましょうか」is unnatural since it suggests a future invitation but 今朝 implies present/past morning. |  |  |
| it takes | タクシーはあまりお金がかかりません。 | The taxi doesn't cost much money. | かかりません | N2 L4 T5 C4 I3 — Reading 'たくしい' is incorrect; should be 'たくしー'. |  |  |
| nine days | 九日に会社を休みます。 | I will take a day off from work on the ninth. | ここのか | N4 L5 T3 C3 I3 — Target word defined as 'nine days' but used here as a calendar date 'the ninth', which mismatches the intended meaning. |  |  |
| chicken meat | 鶏肉を作りましょう。 | Let's make chicken. | とりにく | N3 L5 T4 C2 I2 — '鶏肉を作る' is slightly unnatural phrasing; usually 鶏肉料理を作る or a specific dish name would be used. |  |  |
| fork | フォークを使ってください。 | Please use a fork. | ふぉうく | N2 L5 T5 C2 I2 — Reading kana is wrong: フォーク is pronounced ふぉーく (long vowel), not ふぉうく; also blank could be filled by any utensil (spoon, knife, chopsticks). |  |  |
| fork | フォークはどこにありますか。 | Where is the fork? | ふぉうく | N2 L5 T5 C1 I1 — Reading kana incorrect (should be ふぉーく); generic template sentence where almost any noun could fill the blank. |  |  |
| fork | ナイフがないから、フォークを使います。 | Since there's no knife, I'll use a fork. | ふぉうく | N2 L5 T5 C5 I4 — Reading kana incorrect (should be ふぉーく); otherwise context strongly forces 'fork' as the answer since a knife is unavailable. |  |  |
| clothes | 一緒に服を洗濯しましょう。 | Let's do the laundry together. | ふく | N3 L5 T3 C4 I3 — 服を洗濯する is slightly unnatural phrasing (more common: 洗濯をする); also EN translation drops '服' meaning. |  |  |
| ball-point pen | ボールペンを貸してください。 | Please lend me a ball-point pen. | ぼうるぺん | N2 L5 T5 C2 I2 — Reading should use long vowel mark ー (ぼーるぺん), not ぼうるぺん; naturalness capped due to reading mismatch. Blank could be filled by many objects (book, money, etc.). |  |  |
| ball-point pen | 机の上にボールペンがあります。 | There is a ball-point pen on the desk. | ぼうるぺん | N2 L5 T5 C1 I1 — Reading should use long vowel mark ー (ぼーるぺん), not ぼうるぺん; naturalness capped due to reading mismatch. Very generic template sentence with weak cloze constraint—many objects fit the blank. |  |  |
| postcard | 旅行から葉書を出しました。 | I sent a postcard from my trip. | はがき | N3 L4 T4 C3 I3 — 「旅行から」is slightly unnatural; 旅行先から would be more natural, and 手紙 could also fit the blank. |  |  |
| other | 外の店で買いました。 | I bought it at another store. | ほか | N3 L5 T5 C2 I3 — 外 is usually read そと (outside); '外の店' could easily be misread as 'the store outside', making the blank ambiguous, and 他/ほか is more standard for 'other'. |  |  |
| other | 外の色はありますか。 | Do you have another color? | ほか | N3 L5 T5 C4 I3 — 外 for 'other' is unusual kanji choice (他 is more common), though context here disfavors the そと reading, aiding recoverability. |  |  |
| other | 外の道を歩きましょう。 | Let's walk another road. | ほか | N3 L5 T5 C2 I3 — '外の道' is ambiguous between 'another road' and 'the road outside', hurting cloze recoverability; 他 would be more standard kanji for 'other'. |  |  |
| yet | まだ元気じゃありません。 | I'm not feeling well yet. | まだ | N2 L5 T2 C3 I2 — まだ元気じゃありません usually means 'still not well', not 'not well yet' as translated; ambiguous with もう making blank less certain. |  |  |
| cafeteria | もしもし、今どこの食堂に居ますか。 | Hello, which cafeteria are you at now? | しょくどう | N3 L4 T4 C2 I3 — 居ます is unusual kanji use for N5 level and the blank could be any location noun, weakening recoverability. |  |  |
| building | 建物が古いですから、エレベーターがありません。 | Since the building is old, there's no elevator. | たてもの | N2 L3 T5 C5 I4 — Reading kana for エレベーター is incorrect (えれべえたあ instead of えれべーたー); also から-reason clause is N4, slightly above N5. |  |  |
| salt | このカレーは塩が多いですか。 | Is this curry too salty? | しお | N3 L5 T4 C4 I4 — Reading kana has 'かれえ' instead of 'かれー' for カレー, a mismatch that caps naturalness. |  |  |
| food | 食べ物が食べたいです。 | I want to eat some food. | たべもの | N2 L5 T4 C2 I2 — Sounds redundant/unnatural; native speakers would more likely say 何か食べたいです rather than 食べ物が食べたいです. |  |  |
| postal stamps | 財布に切手はありません。 | There are no stamps in my wallet. | きって | N3 L5 T5 C2 I2 — Odd context (stamps in wallet); many other words could fill the blank. |  |  |
| a tumbler | テーブルにコップを並べます。 | I set the cups on the table. | こっぷ | N2 L3 T4 C3 I3 — Reading kana for テーブル is wrong (てえぶる instead of てーぶる), capping naturalness. |  |  |
| to drink | 今朝コーヒーを飲みました。 | I drank coffee this morning. | のみました | N2 L5 T5 C4 I3 — Reading kana incorrectly renders コーヒー as こうひい instead of こーひー, capping naturalness. |  |  |
| to play (a string instrument or piano) | 姉はギターを弾きました。 | My older sister played the guitar. | ひきました | N2 L5 T5 C5 I3 — Reading for ギター is written as ぎたあ instead of ぎたー, which is incorrect kana rendering of the long vowel. |  |  |
| to play (a string instrument or piano) | 上手にギターを弾きますか。 | Do you play the guitar well? | ひきます | N2 L5 T5 C5 I3 — Reading for ギター is written as ぎたあ instead of ぎたー, which is incorrect kana rendering of the long vowel. |  |  |
| to play (a string instrument or piano) | 明日ギターを弾きたいです。 | I want to play the guitar tomorrow. | ひきたい | N2 L5 T5 C5 I3 — Reading for ギター is written as ぎたあ instead of ぎたー, which is incorrect kana rendering of the long vowel. |  |  |
| tree | この木は何ですか。 | What is this tree? | き | N3 L5 T4 C2 I2 — Asking 'what is this tree' is a bit odd contextually; blank not well constrained. |  |  |
| woman | あの女は英語の先生です。 | That woman is an English teacher. | おんな | N3 L5 T5 C2 I3 — あの女 alone can sound blunt; also 男 could fit the blank equally well, reducing recoverability. |  |  |
| woman | 私は女の医者になりたいです。 | I want to become a female doctor. | おんな | N3 L5 T5 C3 I3 — 女性の医者 would sound more natural than 女の医者; 男 also fits the blank. |  |  |
| foreigner | レストランで外国人に会いたいです。 | I want to meet a foreigner at the restaurant. | がいこくじん | N3 L5 T4 C2 I2 — Unusual/odd context (wanting to meet a foreigner at a restaurant) reduces naturalness and interest; blank could be filled by many nouns. |  |  |
| -- honorific form for 人 -- | あの方は誰ですか。 | Who is that person? | かた | N3 L4 T5 C2 I2 — Mixing honorific 方 with casual 誰ですか feels slightly inconsistent; 人 could also fill the blank. |  |  |
| to want | 新しいフォークが欲しいです。 | I want a new fork. | ほしい | N2 L5 T5 C3 I2 — Reading kana error: フォーク should be ふぉーく, not ふぉうく. |  |  |
| terrible (in reference to food) | このカレーはまずいですから、食べません。 | This curry is terrible, so I won't eat it. | まずい | N2 L5 T5 C5 I4 — Reading kana for カレー should be かれー (long vowel), not かれえ. |  |  |
| (my) older sister (humble) | 姉はデパートで新しい靴下を買いたいです。 | My sister wants to buy new socks at the department store. | あね | N2 L5 T5 C2 I2 — Reading uses あ instead of long vowel mark ー for デパート, an inconsistent kana rendering; also any family member could fill the blank. |  |  |
| uncle | おじさんは風邪ですか。 | Does your uncle have a cold? | おじさん | N5 L5 T3 C2 I3 — EN adds 'your' which isn't specified in Japanese; blank subject is not uniquely recoverable as uncle. |  |  |
| adult | 大人は毎晩晩御飯を作ります。 | Adults make dinner every night. | おとな | N3 L5 T4 C2 I2 — Odd generalization; many subjects could fill the blank. |  |  |
| taxi | 遅いですから、タクシーに乗りましょう。 | Since it's late, let's take a taxi. | たくしい | N2 L5 T5 C4 I3 — Reading kana incorrect: タクシー should be たくしー (long vowel), not たくしい. |  |  |
| taxi | タクシーを呼んでください。 | Please call a taxi. | たくしい | N2 L5 T5 C3 I2 — Reading kana incorrect: タクシー should be たくしー (long vowel), not たくしい. Also many nouns could fit the blank (電話, 友達, etc.). |  |  |
| taxi | タクシーは高いです。 | Taxis are expensive. | たくしい | N2 L5 T5 C2 I2 — Reading kana incorrect: タクシー should be たくしー (long vowel), not たくしい. Blank is generic template-like and many nouns fit (電車, ホテル, etc.). |  |  |
| to cut | 八百屋で果物を切りました。 | I cut the fruit at the vegetable shop. | きりました | N2 L5 T5 C4 I3 — Unnatural context: cutting fruit at a vegetable shop is odd. |  |  |
| to raise hands | 学生は手を差します。 | The student raises their hand. | さします | N1 L4 T1 C2 I1 — 手を差す is not natural; correct verb for 'raise hand' is 手を挙げる, not 差す. |  |  |
| to raise hands | 質問があるときは手を差してください。 | Please raise your hand when you have a question. | さして | N1 L3 T1 C2 I2 — 手を差してください is unnatural; should be 手を挙げてください. |  |  |
| to raise hands | バスの中では手を差しません。 | I don't raise my hand inside the bus. | さしません | N1 L4 T1 C2 I2 — 手を差しません is incorrect usage; 挙げる is the correct verb for raising hands. |  |  |
| to close | レストランは九時に閉めます。 | The restaurant closes at nine o'clock. | しめます | N2 L5 T4 C3 I3 — For a restaurant's closing time, natives usually say 閉まります (intransitive) rather than 閉めます. |  |  |
| to reside | 父は町に住みます。 | My father lives in the town. | すみます | N2 L4 T4 C3 I2 — Natural Japanese would use 住んでいます for the ongoing state of living somewhere; 住みます sounds like a future action. |  |  |
| to reside | あなたはどこに住みますか。 | Where do you live? | すみます | N2 L4 T4 C3 I3 — Should be どこに住んでいますか to ask where someone currently lives; 住みますか implies future intent. |  |  |
| to reside | 駅から近いから、ここに住みます。 | Because it's close to the station, I live here. | すみます | N2 L3 T4 C3 I4 — Reason clause with から is slightly above N5, and 住みます should be 住んでいます for the stative meaning of residing. |  |  |
| gram | このバターは百グラムじゃありません。 | This butter isn't 100 grams. | ぐらむ | N2 L5 T5 C4 I3 — Reading kana for バター is written as ばたあ instead of the correct ばたー; naturalness capped due to reading mismatch. |  |  |
| ~ years old | 妹はまだ三歳じゃありません。 | My little sister isn't three years old yet. | さい | N3 L4 T5 C4 I3 — phrasing is a bit stiff; more natural would use まだ〜になっていません |  |  |
| counter for books | 本棚に本は五冊ありません。 | There aren't five books on the bookshelf. | さつ | N3 L5 T3 C4 I2 — Sentence meaning is odd/unnatural in context; unclear why one would state a specific negative count. |  |  |
| radio cassette player | 部屋にラジオカセがあります。 | There is a radio cassette player in the room. | らじおかせ | N2 L5 T5 C1 I2 — The correct word is ラジカセ, not ラジオカセ; also blank could be filled by any noun. |  |  |
| radio cassette player | そのラジオカセを貸してください。 | Please lend me that radio cassette player. | らじおかせ | N2 L5 T5 C1 I2 — The correct word is ラジカセ, not ラジオカセ; also blank could be filled by any noun. |  |  |
| record | このレコードは聞きません。 | I don't listen to this record. | れこうど | N3 L4 T5 C2 I2 — は instead of を is slightly unnatural, and blank could be filled by many 'listenable' nouns. |  |  |
| thing (concrete object) | この物は何ですか。 | What is this thing? | もの | N2 L5 T4 C2 I1 — Unnatural phrasing; native speakers would say これは何ですか rather than この物は何ですか, and generic template sentence. |  |  |
| to understand | 今、分かりました。 | I understood now. | わかりました | N4 L5 T3 C4 I2 — English should be 'I understand now,' not 'I understood now.' |  |  |
| every year | 友達は毎年うちに来ました。 | My friend came to my house every year. | まいとし | N2 L4 T3 C3 I2 — Tense mismatch: 毎年 (habitual) with 来ました (past) is unnatural; should be 来ます for a habitual action. |  |  |
| to use | お金がないから、タクシーを使いません。 | Since I have no money, I won't use a taxi. | つかいません | N2 L5 T5 C4 I4 — Reading kana error: タクシー should be たくしー (long vowel), not たくしい; this makes the reading incorrect. |  |  |
| kind | あの先生は厚くないです。 | That teacher isn't kind. | あつくない | N2 L4 T2 C2 I2 — 厚い doesn't naturally mean 'kind' for a teacher; unnatural usage and mismatched translation. |  |  |
| generous | 母は甘いですから、いつもお菓子を買います。 | Because mother is generous, she always buys sweets. | あまい | N3 L5 T3 C2 I3 — The causal link between being generous and buying sweets is odd; could be confused with 甘い meaning 'having a sweet tooth'. |  |  |
| boring | 宿題はつまらなくないです。 | The homework is not boring. | つまらなくない | N3 L4 T5 C2 I2 — Double negative construction feels slightly stilted and the blank could be filled with other adjectives negated similarly. |  |  |
| two days | 明日から二日旅行します。 | I will travel for two days starting tomorrow. | ふつか | N3 L5 T5 C3 I3 — More natural would be 二日間; blank could be filled by other durations. |  |  |
| next year | 来年まで待ちました。 | I waited until next year. | らいねん | N2 L5 T3 C2 I2 — Waiting until a future year is logically odd; many time words could fill the blank. |  |  |
| height | 電話で「背は高いですか」と聞きました。 | I asked on the phone, "Are you tall?" | せい | N3 L5 T4 C3 I3 — Slightly odd context—asking about height over the phone is unusual. |  |  |
| tooth | 「歯が痛いですか」と聞きました。 | I asked, "Do your teeth hurt?" | は | N2 L4 T4 C4 I3 — Reading kana 'ときました' does not match 聞きました (should be ききました). |  |  |
| very like-able | 私は母が大好きです。 | I love my mother. | だいすき | N2 L4 T4 C3 I3 — Reading is missing the が particle (わたしははは |  |  |
| very | 今日の料理は大変でした。 | Today's cooking was very hard. | たいへん | N3 L5 T3 C2 I2 — Target gloss 'very' mismatches actual meaning 'hard/tough' used here; blank could fit other adjectives too. |  |  |
| very | 仕事が大変ですから、疲れました。 | Work is hard, so I got tired. | たいへん | N4 L5 T3 C4 I3 — Target gloss 'very' mismatches actual na-adjective meaning 'tough'; context strongly implies 大変 though. |  |  |
| very | 仕事は大変ですか。 | Is work hard? | たいへん | N3 L5 T3 C2 I1 — Generic question, many adjectives could fill the blank; gloss 'very' doesn't match usage. |  |  |
| a page | 遅いですから、宿題は五ページだけしました。 | Since it's late, I only did five pages of homework. | ぺえじ | N2 L5 T4 C4 I3 — Logical link between 'late' and doing only 5 pages is unclear/awkward. |  |  |
| counter for small animals | 電話で犬が三匹いると聞きました。 | I heard on the phone that there are three dogs. | ひき | N4 L2 T4 C4 I4 — Uses と聞きました with embedded clause, beyond N5 grammar. |  |  |
| meter | このプールは五十メートルではありません。 | This pool is not fifty meters. | めーとる | N2 L4 T4 C4 I2 — Negative statement about pool length feels unnatural/contrived. |  |  |
| zero | 今朝は零度でした、寒かったです。 | It was zero degrees this morning, it was cold. | れい | N3 L4 T5 C2 I3 — Comma splice joining two clauses is a bit unnatural; て-form would read more naturally. |  |  |
| approximately (amount) | 仕事は三時間くらいではありません、二時間です。 | Work isn't about three hours, it's two hours. | くらい | N2 L4 T4 C3 I3 — Awkward phrasing; 'ではありません' after くらい sounds unnatural in this contrastive construction. |  |  |
| to bathe | 朝、シャワーを浴びます。 | I take a shower in the morning. | あびます | N2 L5 T5 C5 I2 — Reading kana uses あ instead of long vowel mark ー for シャワー, which is technically incorrect romaji-to-kana rendering. |  |  |
| to bathe | 疲れましたから、シャワーを浴びましょう。 | I'm tired, so let's take a shower. | あびましょう | N2 L5 T5 C5 I3 — Reading kana uses あ instead of ー for シャワー; otherwise natural and contextually clear. |  |  |
| to bathe | 今晩はシャワーを浴びませんでした。 | I didn't take a shower tonight. | あびませんでした | N2 L5 T5 C5 I2 — Reading kana uses あ instead of ー for シャワー; sentence is a bit generic but clear. |  |  |
| to put in | カレーに野菜を入れます。 | I put vegetables in the curry. | いれます | N2 L5 T5 C4 I3 — Reading for カレー should use ー (chōonpu) not え; かれえ is incorrect kana rendering. |  |  |
| to put in | コーヒーに砂糖を入れませんか。 | Won't you put sugar in the coffee? | いれません | N2 L5 T5 C4 I3 — Reading for コーヒー should use ー not う/い; こうひい is incorrect kana rendering. |  |  |
| (my) father | 父は毎朝新聞を読みますか。 | Does your father read the newspaper every morning? | ちち | N2 L5 T2 C3 I3 — 父 refers to one's own father, but the English 'your father' implies someone else's father, which would require お父さん—translation mismatch. |  |  |
| (my) mother | 母はどこへ旅行に行きましたか。 | Where did your mother go on a trip? | はは | N5 L5 T2 C2 I3 — 母 implies speaker's own mother, but translation says 'your mother', causing a mismatch. |  |  |
| pet | 旅行にペットと行きますか。 | Are you taking your pet on the trip? | ぺっと | N2 L4 T4 C3 I3 — Word order 旅行にペットと行きますか is slightly unnatural; more natural would be ペットと旅行に行きますか。 |  |  |
| all | みんなはどこへ行きますか。 | Where is everyone going? | みんな | N3 L5 T5 C3 I3 — みんなは is slightly unnatural; みんな alone without は is more common in this context. |  |  |
| I (formal) | 私は先週病気でした。 | I was sick last week. | わたくし | N2 L2 T4 C2 I2 — わたくし is overly formal for a casual statement about being sick; わたし would sound more natural, and the blank could be filled by either reading. |  |  |
| I (formal) | 私は毎朝六時に起きます。 | I wake up at six every morning. | わたくし | N2 L2 T4 C2 I2 — わたくし clashes with the casual daily-routine content; わたし fits better, so the blank isn't uniquely recoverable. |  |  |
| I (formal) | 私は旅行に行きたいです。 | I want to go on a trip. | わたくし | N2 L2 T4 C2 I2 — わたくし feels too formal for expressing a casual desire to travel; わたし is more idiomatic, weakening cloze uniqueness. |  |  |
| in that situation | それでは、タクシーで行きましょう。 | Well then, let's go by taxi. | それでは | N2 L4 T4 C2 I2 — Reading for タクシー is incorrectly given as たくしい instead of たくしー, so naturalness capped at 2. |  |  |
| length | この道はたてに長いです。 | This road is long lengthwise. | たて | N3 L5 T4 C2 I3 — たて for a road's length is a bit unusual phrasing; よこ could also fit the blank, reducing recoverability. |  |  |
| nose | 料理の前に鼻を洗ってください。 | Please wash your nose before cooking. | はな | N2 L5 T5 C2 I3 — 鼻を洗う is unnatural; people typically say 手を洗う before cooking, so learners would guess 手 instead of 鼻. |  |  |
| nose | 忙しくて、朝、鼻を洗いませんでした。 | I was busy and didn't wash my nose this morning. | はな | N2 L5 T5 C2 I3 — 鼻を洗う in the morning is unnatural; 顔を洗う is the standard collocation, making the target hard to guess correctly. |  |  |
| eye | 料理をする時、目を大切にしてください。 | Please take care of your eyes when you cook. | め | N2 L4 T4 C2 I2 — Odd context; many body parts (手・体) could fit the blank, and eye care isn't typically associated with cooking. |  |  |
| snow | 今年は雪が多くないです。 | There isn't much snow this year. | ゆき | N3 L5 T5 C2 I2 — Blank could be filled by many nouns (rain, money, etc.); 少ないです would sound more natural than 多くないです. |  |  |
| snow | 雪が降りますから、傘を持ってください。 | Since it will snow, please bring an umbrella. | ゆき | N2 L5 T5 C2 I3 — Carrying an umbrella is usually associated with rain, not snow, making the sentence slightly odd and the blank also fillable by 雨. |  |  |
| weak | 声が弱いから、分かりません。 | The voice is weak, so I can't understand it. | よわい | N2 L5 T3 C2 I2 — Odd logic: a weak voice causing not understanding is unnatural; many adjectives could fill the blank. |  |  |
| splendid | 兄はりっぱな学生だから、有名です。 | My older brother is a splendid student, so he's famous. | りっぱな | N2 L4 T3 C2 I3 — The causal link between being splendid and being famous feels forced/unnatural, and other adjectives could fit the blank. |  |  |
| counter for stories of a building | デパートの三階で服を買いました。 | I bought clothes on the third floor of the department store. | がい | N2 L5 T5 C5 I4 — Reading kana でぱあと should be でぱーと (long vowel), so naturalness capped at 2. |  |  |
| no | いいえ、コーヒーは要りません。 | No, I don't need coffee. | いいえ | N2 L5 T5 C4 I3 — Reading for コーヒー should be こーひー, not こおひい; naturalness capped due to kana mismatch. |  |  |
| to hold | 店でかばんを持ってください。 | Please hold the bag at the store. | もって | N3 L5 T4 C2 I2 — Vague context; many verbs (put, bring, carry) could fit blank. |  |  |
| to hold | 荷物が重いから、私が持ちます。 | Since the luggage is heavy, I will hold it. | もちます | N4 L5 T3 C3 I3 — 'Hold' is a weak translation here; 'carry/take' fits better, and other verbs (運ぶ) could also plausibly fill the blank. |  |  |
| to hand over | 忙しいから、荷物を渡しませんでした。 | Since I was busy, I didn't hand over the luggage. | わたしませんでした | N3 L4 T4 C2 I2 — Logic (busy → didn't hand over luggage) is odd, and many other verbs could fit the blank. |  |  |
| pretty | 毎朝、顔を洗ってから綺麗になります。 | Every morning, after washing my face, I become pretty. | きれい | N3 L3 T3 C3 I3 — てから is slightly beyond N5; 'become pretty after washing face' is a bit odd logically. |  |  |
| Mr. ~ | 医者さんは今忙しいです。 | The doctor is busy right now. | さん | N2 L4 T4 C3 I2 — 医者さん is unnatural; should be お医者さん or just 医者. |  |  |
| Mr. ~ | 警官さんに聞きましょう。 | Let's ask the police officer. | さん | N2 L4 T4 C3 I2 — 警官さん is unnatural; more common would be お巡りさん. |  |  |
| Mr. ~ | 学生さんは今日休みですか。 | Is the student off today? | さん | N2 L4 T4 C3 I2 — 学生さん sounds odd/colloquial and slightly unnatural as a direct address. |  |  |
| to put | 靴をテーブルの上に置きません。 | I don't put shoes on the table. | おきません | N2 L5 T5 C4 I2 — Reading uses てえぶる instead of the correct long vowel てーぶる for テーブル. |  |  |
| to push | エレベーターのボタンを押してください。 | Please press the elevator button. | おして | N2 L5 T5 C5 I4 — Reading uses えれべえたあ instead of the correct long-vowel kana えれべーたー, mismatching the word's actual pronunciation. |  |  |
| to finish | 仕事が終りましたから、家へ帰ります。 | Since work finished, I'll go home. | おわりました | N3 L5 T5 C5 I4 — 終る should be written 終わる in standard modern Japanese; nonstandard okurigana lowers naturalness. |  |  |
| to finish | 宿題がまだ終りません。 | The homework isn't finished yet. | おわりません | N3 L5 T5 C5 I3 — 終る should be written 終わる in standard modern Japanese; nonstandard okurigana lowers naturalness. |  |  |
| to finish | 授業は何時に終りますか。 | What time does class finish? | おわります | N3 L5 T5 C5 I4 — 終る should be written 終わる in standard modern Japanese; nonstandard okurigana lowers naturalness. |  |  |
| to return something | 電話を返してください。 | Please call me back. | かえして | N3 L4 T3 C2 I2 — 電話を返す is colloquial slang for 'call back' and ambiguous; かけて/くれて could also fill the blank, weakening cloze recoverability and translation fidelity. |  |  |
| counter for vehicles | タクシーが一台、駅の前に来ました。 | A taxi came in front of the station. | だい | N2 L5 T5 C5 I3 — Reading uses 'たくしい' instead of correct long vowel 'たくしー' for タクシー. |  |  |
| place | あの所は図書館ですか。 | Is that place a library? | ところ | N2 L4 T5 C2 I2 — あの所 sounds unnatural; native speakers would say あそこ instead. |  |  |
| future | 先は忙しいです。 | The future will be busy. | さき | N2 L5 T4 C2 I2 — '先は忙しいです' sounds unnatural for expressing 'the future'; native speakers would say 'これから忙しいです' or '将来は忙しいです'. |  |  |
| ~ day of the month | パーティーは二十五日です。 | The party is on the 25th. | にち | N2 L5 T5 C5 I4 — Reading kana uses ぱあてぃい instead of standard ぱーてぃー, mismatching conventional pronunciation notation. |  |  |
| one day | 一日は休みではありません。 | The first isn't a holiday. | ついたち | N3 L5 T4 C2 I2 — 一日 could be misread as いちにち (one day) without stronger date context |  |  |
| next | 次の駅で降りません。 | I won't get off at the next station. | つぎ | N3 L5 T5 C4 I3 — Slightly unnatural without context explaining why. |  |  |
| katakana | 片仮名が難しいから、習います。 | Because katakana is difficult, I am learning it. | かたかな | N2 L4 T4 C3 I2 — Awkward logic: learning something because it's difficult is unnatural reasoning. |  |  |
| job opening | 会社に新しい口があります。 | There is a new job opening at the company. | くち | N3 L5 T5 C2 I3 — 口 as 'job opening' is idiomatic; other nouns (求人, 仕事, 席) could fill the blank equally well, lowering recoverability. |  |  |
| job opening | いい口が欲しいです。 | I want a good job opening. | くち | N3 L5 T5 C2 I2 — Sentence is grammatically fine but very generic, and many words (仕事, 話, 席) could fit the blank. |  |  |
| job opening | その口は難しい仕事ですか。 | Is that job opening a difficult job? | くち | N3 L5 T5 C4 I3 — Presence of 仕事 in the sentence helps narrow the blank to 口, improving recoverability, though phrasing is slightly redundant. |  |  |
| every week | 毎週店で買い物をしましょう。 | Let's go shopping at the store every week. | まいしゅう | N3 L5 T4 C3 I2 — slightly awkward phrasing, generic template |  |  |
| every week | 毎週病院へ行きません。 | I don't go to the hospital every week. | まいしゅう | N3 L5 T4 C3 I2 — context alone doesn't strongly force 毎週 over 今週 |  |  |
| good, nice | このレストランの料理はいいですから、よく来ます。 | The food at this restaurant is good, so I come often. | いい | N3 L5 T4 C2 I3 — いい is less natural than おいしい for describing food taste; many adjectives could fill the blank. |  |  |
| good, nice | この魚はいいですか。 | Is this fish good? | いい | N3 L5 T4 C2 I2 — いい is vague for describing fish quality; multiple adjectives (おいしい, 新しい) could fit the blank. |  |  |
| chopsticks | 料理を食べますから、箸を使います。 | I'm eating a meal, so I use chopsticks. | はし | N3 L5 T4 C3 I3 — Slightly awkward phrasing with 料理を食べますから, but grammar is N5-level. |  |  |
| country | 国へ帰りたいですから、切符を買いました。 | I bought a ticket because I want to go back to my country. | くに | N3 L4 T4 C3 I3 — 帰りたいですから is slightly awkward phrasing; 家 could also fit the blank. |  |  |
| entrance (to a house or a building) | レストランの玄関で靴を脱ぎました。 | I took off my shoes at the restaurant's entrance. | げんかん | N3 L5 T5 C4 I3 — Slightly unusual context since removing shoes at a restaurant entrance is uncommon in Japan, but grammatically fine. |  |  |
| to teach | 暇な時、ギターを教えたいです。 | When I'm free, I want to teach guitar. | おしえたい | N2 L4 T5 C4 I3 — Reading kana incorrectly spells ギター as ぎたあ instead of ぎたー, capping naturalness. |  |  |
| to hear | 友達が来た時、音楽を聞きました。 | When my friend came, we listened to music. | ききました | N4 L3 T3 C4 I3 — 「〜たとき」construction is N4, slightly above N5 ceiling; subject 'we' not explicit in Japanese. |  |  |
| to pull | 重いですから、机を引きません。 | It's heavy, so I won't pull the desk. | ひきません | N3 L5 T5 C2 I3 — Verbs like 運びません or 動かしません would also fit the context. |  |  |
| to go | 忙しいですから、パーティーへ行きません。 | I'm busy, so I won't go to the party. | いきません | N2 L5 T5 C5 I3 — Reading kana for パーティー is nonstandard (ぱあてぃい instead of ぱーてぃー), so capped naturalness. |  |  |
| year | 会社で年を聞きません。 | We don't ask about age at the company. | とし | N3 L5 T4 C2 I3 — Blank could be filled by many nouns (名前, 住所, etc.), reducing recoverability. |  |  |
| to request | 図書館で本を頼みたいです。 | I want to request a book at the library. | たのみたい | N2 L5 T3 C2 I2 — 頼む sounds unnatural for borrowing a book at a library; 借りたい would be more natural, and the blank could be filled by several verbs. |  |  |
| to put | 本をテーブルの上に置きましょう。 | Let's put the book on the table. | おき | N2 L5 T5 C3 I2 — Reading uses てえぶる instead of the correct long vowel てーぶる for テーブル; also 置き alone is less naturally recoverable than 置いて/置きません. |  |  |
| at a time | 忙しいですから、少しずつ働きます。 | Because I'm busy, I work little by little. | ずつ | N3 L5 T4 C4 I3 — 少しずつ働きます sounds slightly unnatural; 少しずつ usually pairs with change/progress verbs. |  |  |
| one month | 仕事で一月旅行します。 | I will travel for one month for work. | ひとつき | N3 L5 T4 C2 I3 — Business trip lasting a month is an odd combination, slightly unnatural; blank not uniquely recoverable. |  |  |
| two days | 忙しいですから、二日休みます。 | Because I'm busy, I will take two days off. | ふつか | N3 L5 T4 C3 I3 — Logic of busy→taking days off is a bit odd; blank not uniquely determined. |  |  |
| ~ minutes | 二分待ちませんでした。 | I didn't wait two minutes. | ふん | N3 L5 T5 C5 I3 — Slightly odd context but grammatically fine. |  |  |
| terrible (in reference to food) | このカレーはまずいです。 | This curry is terrible. | まずい | N2 L5 T5 C2 I2 — Reading kana for カレー should be かれー, not かれえ; also sentence is generic and blank could fit many adjectives. |  |  |
| radio cassette player | ラジオカセが欲しいです。 | I want a radio cassette player. | らじおかせ | N2 L5 T5 C1 I2 — The correct word is ラジカセ, not ラジオカセ; also blank could be filled by any noun. |  |  |
| thing (concrete object) | あの物を取ってください。 | Please pick up that thing. | もの | N2 L5 T4 C2 I2 — Unnatural; あれを取ってください is more natural than あの物を取ってください. |  |  |
| cooking | 昨日どんな料理を食べましたか。 | What kind of cooking did you eat yesterday? | りょうり | N4 L5 T3 C4 I3 — English 'What kind of cooking did you eat' is awkward; 料理 here means 'dish/food' not the activity of cooking. |  |  |
| ball-point pen | このボールペンで手紙を書きました。 | I wrote a letter with this ball-point pen. | ぼうるぺん | N2 L5 T5 C3 I3 — Reading should use long vowel mark ー (ぼーるぺん), not ぼうるぺん; naturalness capped due to reading mismatch. Writing context narrows options somewhat but pencil/pen alternatives still possible. |  |  |
| one | 電話番号は一二三四です。 | The phone number is one-two-three-four. | いち | N3 L5 T5 C2 I3 — Any digit could fill the blank; low uniqueness for cloze. |  |  |
| to tie | 兄が来るので、ネクタイを締めましょう。 | Since my brother is coming, let's tie our neckties. | しめ | N2 L2 T4 C3 I2 — ので exceeds N5 grammar ceiling and the scenario (tying tie because brother is coming) is illogical/unnatural. |  |  |
| one person | 兄弟がいないので、一人です。 | Since I have no siblings, I'm an only child. | ひとり | N3 L3 T3 C3 I3 — ので is N4 grammar; 一人 alone is ambiguous for 'only child' (usually 一人っ子), reducing translation accuracy and cloze certainty. |  |  |
| hundred | 本は百ページあります。 | The book has a hundred pages. | ひゃく | N2 L5 T5 C3 I3 — Reading uses 'ぺえじ' instead of correct 'ぺーじ', a kana mismatch. |  |  |
| eight things | 傘が八つあるから、便利です。 | Because there are eight umbrellas, it's convenient. | やっつ | N3 L4 T4 C2 I3 — Having eight umbrellas being 'convenient' is a bit odd/unnatural, and the number isn't uniquely forced by context. |  |  |
| snow | 窓の外に雪があります。 | There is snow outside the window. | ゆき | N3 L5 T5 C2 I2 — 雪がある is less natural than 雪が降っている/積もっている; blank could be filled by many objects. |  |  |
| to come to a halt | 電車は駅で止まります。 | The train stops at the station. | とまります | N3 L5 T5 C3 I2 — で sounds slightly less natural than に for 'stop at a station'; nearly duplicate of sentence 0. |  |  |
| to stand up | 朝、会社の前に立ちます。 | I stand in front of the office in the morning. | たちます | N3 L5 T4 C2 I2 — Generic and slightly odd scenario; several verbs (待ちます, 座ります) could also fill the blank. |  |  |
| many | 今日は野菜が多いです。 | There are many vegetables today. | おおい | N3 L5 T4 C3 I2 — Slightly unnatural context; unclear why vegetables would be 'many' today specifically. |  |  |
| ~st | 一番の質問は難しいです。 | The first question is difficult. | ばん | N2 L4 T2 C2 I2 — 一番の質問 more naturally means 'the best/most important question,' not 'the first question,' so the translation is misleading and the sentence sounds unnatural. |  |  |
| counter for small items | ペンを二個買いました。 | I bought two pens. | こ | N2 L5 T3 C3 I2 — Pens are normally counted with 本, not 個; using 個 here is unnatural. |  |  |

## Needs manual authoring (24 words with no shippable sentence)

- n5-c06ee261 foot (あし)
- n5-7611cd02 to bathe (あびる)
- n5-8f976aa3 together (いっしょ)
- n5-fbc19ee3 to finish (おわる)
- n5-867e24ea feel (がる)
- n5-948b047c river (かわ)
- n5-609c5a6c job opening (くち)
- n5-ddd18153 word (ご)
- n5-ecd448e4 to copy (こぴいする)
- n5-03b76e3a to raise hands (さす)
- n5-5eb0bc63 Mr. ~ (さん)
- n5-8046652e to reside (すむ)
- n5-624b6296 very (たいへん)
- n5-50f9d89e taxi (たくしい)
- n5-f085bd3e to get on (のる)
- n5-4aeed2d7 beginning (はじめ)
- n5-cf86b404 to play (a string instrument or piano) (ひく)
- n5-9974795e fork (ふぉうく)
- n5-7b1a1fb7 ball-point pen (ぼうるぺん)
- n5-bce685ef other (ほか)
- n5-5b39427c round (まるい)
- n5-6f6f03c4 snow (ゆき)
- n5-b1fb05f5 radio cassette player (らじおかせ)
- n5-95bbd006 I (formal) (わたくし)

## Auto-approved (1456) — spot-check only

| word | sentence (JA) | EN | cloze answer | judge | use | approve? |
| --- | --- | --- | --- | --- | --- | --- |
| this person | こっちは弟です。 | This is my younger brother. | こっち | N4 L5 T4 C2 I2 — Blank could also be filled by これ, この人, etc., reducing recoverability. | teach only | yes |
| language | 旅行の前に言葉を習いました。 | I studied the language before the trip. | ことば | N4 L5 T4 C3 I3 — Blank could be filled by other nouns like ルール or マナー, reducing recoverability. | teach only | yes |
| language | 料理の言葉が分かりません。 | I don't understand cooking terms. | ことば | N4 L5 T4 C3 I3 — Blank could plausibly be filled with レシピ or 作り方 as well. | teach only | yes |
| this | この料理は辛いです。 | This dish is spicy. | この | N5 L5 T5 C2 I3 — その/あの could also fit the blank, reducing recoverability. | teach only | yes |
| to be bothered | 道が分からなくて、困りました。 | I was troubled because I didn't know the road. | こまりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be bothered | 塩がなくて、困りました。 | I was troubled because there was no salt. | こまりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be bothered | 忙しくて、いつも困ります。 | I'm always troubled because I'm busy. | こまります | N4 L5 T4 C2 I3 — Blank could plausibly be filled with other words like 疲れます or 大変です, weakening cloze recoverability. | teach only | yes |
| such | こんな天気が好きです。 | I like this kind of weather. | こんな | N5 L5 T5 C3 I3 | teach only | yes |
| such | こんな道を歩きますか。 | Do you walk on this kind of road? | こんな | N4 L5 T5 C3 I3 | teach only | yes |
| such | こんな料理は初めて作りました。 | I made this kind of dish for the first time. | こんな | N5 L4 T5 C3 I4 | teach only | yes |
| come now | さあ、座ってください。 | Come now, please sit down. | さあ | N4 L5 T4 C2 I2 — Blank could be filled with several interjections (ねえ、じゃあ) besides さあ, low forced recoverability. | teach only | yes |
| come now | さあ、晩御飯です。 | Come now, dinner's ready. | さあ | N4 L5 T4 C2 I3 — Interjection blank is not uniquely recoverable; several fillers plausible. | teach only | yes |
| however | 道は近いです。しかし、時間がかかりました。 | The road is close. However, it took time. | しかし | N4 L5 T5 C4 I3 | cloze+teach | yes |
| however | 忙しかったです。しかし、晩御飯を作りました。 | I was busy. However, I made dinner. | しかし | N4 L5 T5 C3 I3 — contrast is mild, other conjunctions could arguably fit | teach only | yes |
| to know | この道を知っていますか。 | Do you know this road? | しって | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to know | 明日の天気を知りたいです。 | I want to know tomorrow's weather. | しりたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| liking | 私は音楽が好きです。 | I like music. | すき | N5 L5 T5 C3 I2 — Generic template; blank could be filled with other adjectives like 嫌い or 得意. | teach only | yes |
| liking | どんなスポーツが好きですか。 | What kind of sports do you like? | すき | N5 L5 T5 C3 I3 — Blank could plausibly be filled with 得意 or similar; slightly more engaging as a question. | teach only | yes |
| that | その本は難しいです。 | That book is difficult. | その | N5 L5 T5 C2 I2 — この/あの would also fit the blank, so context doesn't uniquely force その. | teach only | yes |
| that | その料理を食べたいです。 | I want to eat that dish. | その | N5 L5 T5 C2 I3 — Demonstrative choice not uniquely determined by context; この/あの also plausible. | teach only | yes |
| only ~ | 少しだけ食べました。 | I ate only a little. | だけ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| only ~ | 友達が一人だけ来ました。 | Only one friend came. | だけ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| perhaps | 明日は多分雨です。 | Tomorrow it will perhaps rain. | たぶん | N5 L5 T5 C3 I3 — きっと or もしかしたら could also fit the blank. | teach only | yes |
| perhaps | 多分、テストは難しかったです。 | The test was probably difficult. | たぶん | N5 L5 T5 C3 I3 — Other adverbs like きっと could also fit. | teach only | yes |
| a map | 旅行の地図を買いました。 | I bought a travel map. | ちず | N5 L5 T5 C3 I4 | teach only | yes |
| a map | この地図は分かりやすいです。 | This map is easy to understand. | ちず | N5 L5 T5 C3 I3 | teach only | yes |
| a map | 地図を見せてください。 | Please show me the map. | ちず | N5 L5 T5 C2 I2 — Generic sentence; many nouns could fill the blank (photo, document, etc.). | teach only | yes |
| just | 今、丁度三時です。 | It's exactly three o'clock now. | ちょうど | N5 L5 T5 C4 I3 | cloze+teach | yes |
| just | バスが丁度来ました。 | The bus just came. | ちょうど | N4 L5 T4 C2 I3 — Blank could also be filled with いま, もう, たった今, etc. | teach only | yes |
| great number of people | 公園に大勢の人がいました。 | There were a lot of people in the park. | おおぜい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| great number of people | 教室に大勢の学生がいますか。 | Are there a lot of students in the classroom? | おおぜい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| great number of people | パーティーに大勢の友達を呼びたいです。 | I want to invite a lot of friends to the party. | おおぜい | N4 L5 T5 C4 I4 — Reading for パーティー uses ぱあてぃい instead of standard ぱーてぃー with chouonpu, slightly unconventional. | cloze+teach | yes |
| money | 財布にお金がありません。 | There is no money in my wallet. | おかね | N5 L5 T5 C3 I3 — Blank could also be filled by other lost items like 鍵 or カード, slightly reducing forced recoverability. | teach only | yes |
| money | お金はいくらありますか。 | How much money do you have? | おかね | N4 L5 T5 C2 I2 — Generic 'いくらありますか' pattern could fit many nouns (price of item, quantity), weakening the forced answer. | teach only | yes |
| to lend | 友達に辞書を貸しました。 | I lent my dictionary to a friend. | かしました | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to lend | 雨の日は傘を貸しますか。 | Do you lend umbrellas on rainy days? | かします | N4 L5 T5 C4 I4 | cloze+teach | yes |
| to lend | 妹に本を貸したいです。 | I want to lend a book to my younger sister. | かしたい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| please do for me | 静かにしてください。 | Please be quiet. | ください | N5 L5 T5 C5 I2 | cloze+teach | yes |
| please do for me | 窓を閉めてください、寒いですから。 | Please close the window, because it's cold. | ください | N4 L5 T5 C5 I3 — slightly awkward comma joining, but understandable | cloze+teach | yes |
| this person (polite) | こちらは私の友達です。 | This is my friend. | こちら | N5 L5 T5 C3 I2 — Could also work with これ/それ, so blank isn't fully forced. | teach only | yes |
| this person (polite) | こちらは誰ですか。 | Who is this person? | こちら | N5 L5 T5 C3 I3 — これ/あれ could also fit the blank grammatically. | teach only | yes |
| this person (polite) | こちらへどうぞ。 | This way, please. | こちら | N5 L5 T4 C5 I3 — Here こちら means 'this way' rather than 'this person', diverging from the target definition. | cloze+teach | yes |
| meaning | この言葉の意味は何ですか。 | What does this word mean? | いみ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| meaning | 先生はその言葉の意味を教えました。 | The teacher taught the meaning of that word. | いみ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| meaning | この英語の意味を知りたいです。 | I want to know the meaning of this English word. | いみ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| (humble) to be (animate) | 今朝、公園に犬がいました。 | This morning there was a dog in the park. | いました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| (humble) to be (animate) | 今、部屋に誰がいますか。 | Who is in the room now? | います | N5 L5 T5 C5 I3 | cloze+teach | yes |
| (humble) to be (animate) | 土曜日、家族はうちにいます。 | On Saturday, my family is at home. | います | N5 L5 T5 C4 I3 — うちに帰ります could also fit, slightly reducing recoverability | cloze+teach | yes |
| to need | 旅行にお金がいりますか。 | Do you need money for the trip? | いります | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to need | 病気の時、薬がいります。 | When you're sick, you need medicine. | いります | N4 L4 T5 C4 I3 | cloze+teach | yes |
| color | この靴下の色は何ですか。 | What color are these socks? | いろ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| color | 赤い色のシャツが欲しいです。 | I want a red-colored shirt. | いろ | N4 L5 T5 C5 I2 — '赤い色の' is slightly redundant phrasing though understandable. | cloze+teach | yes |
| color | 姉は青い色のかばんを買いました。 | My sister bought a blue-colored bag. | いろ | N4 L5 T5 C5 I3 — '青い色の' is slightly redundant phrasing though understandable. | cloze+teach | yes |
| above | 机の上に本があります。 | There is a book on the desk. | うえ | N5 L5 T5 C2 I1 — Generic template sentence; 下/中 would also fit the blank contextually. | teach only | yes |
| above | 猫はいすの上にいました。 | The cat was on the chair. | うえ | N5 L5 T5 C2 I2 — 下/中 could also fit the blank grammatically. | teach only | yes |
| back | 後ろに高い山があります。 | There is a tall mountain behind (us). | うしろ | N5 L5 T5 C3 I3 — Other position words (前, 近く) could also fit the blank. | teach only | yes |
| back | 後ろに誰がいますか。 | Who is behind you? | うしろ | N5 L5 T5 C3 I4 — Other position words could fit, slightly reducing recoverability. | teach only | yes |
| back | 車は家の後ろに止まりました。 | The car stopped behind the house. | うしろ | N5 L5 T5 C3 I4 — Other spatial words (前, 横) could also complete the sentence. | teach only | yes |
| a song | この歌が好きです。 | I like this song. | うた | N5 L5 T5 C3 I2 — Blank could be filled with many nouns (movie, food, etc.) | teach only | yes |
| a song | 新しい歌を習いたいです。 | I want to learn a new song. | うた | N5 L5 T5 C3 I3 — Other nouns like dance or language could fit the blank. | teach only | yes |
| honorable ~ (honorific) | お名前は何ですか。 | What is your name? | お | N5 L5 T5 C4 I2 | cloze+teach | yes |
| honorable ~ (honorific) | 先生のお仕事はとても忙しいです。 | The teacher's job is very busy. | お | N4 L4 T4 C3 I3 | teach only | yes |
| Ah! | ああ、今日は寒いですね。 | Ah, it's cold today, isn't it. | ああ | N4 L5 T5 C2 I3 — Interjection blank could be filled by several similar words (あ, わあ), reducing uniqueness. | teach only | yes |
| Ah! | ああ、忘れました。 | Ah, I forgot. | ああ | N4 L5 T5 C2 I3 — Interjection blank could be replaced by あ or other exclamations, limiting cloze uniqueness. | teach only | yes |
| this way | お手洗いはあちらです。 | The restroom is that way. | あちら | N5 L5 T5 C2 I2 — こちら/そちら would also fit the blank, so context doesn't force あちら specifically. | teach only | yes |
| this way | 会社はあちらです。 | The office is that way. | あちら | N5 L5 T5 C2 I1 — Generic template sentence; other directional words (こちら/そちら) fit equally well. | teach only | yes |
| this way | 駅はあちらです。 | The station is that way. | あちら | N5 L5 T5 C2 I2 — Same issue: no context to disambiguate あちら from こちら/そちら. | teach only | yes |
| over there | あっちに座りましょう。 | Let's sit over there. | あっち | N5 L5 T5 C3 I3 | teach only | yes |
| over there | あっちの部屋で働いています。 | I work in the room over there. | あっち | N4 L4 T5 C3 I3 | teach only | yes |
| that over there | あの店の料理はおいしいです。 | The food at that restaurant over there is delicious. | あの | N5 L5 T5 C4 I3 | cloze+teach | yes |
| that over there | あの人は会社に勤めています。 | That person over there works at a company. | あの | N5 L5 T5 C4 I3 | cloze+teach | yes |
| that over there | あの電車は駅に止まりますか。 | Does that train over there stop at the station? | あの | N5 L5 T5 C4 I3 | cloze+teach | yes |
| not very | 今日は余り暑くないです。 | Today it's not very hot. | あまり | N5 L5 T5 C3 I2 — 全然 could also fit the blank, slightly reducing recoverability | teach only | yes |
| not very | 仕事は余り忙しくないです。 | Work isn't very busy. | あまり | N5 L5 T5 C3 I2 — 全然 could also fit the blank, slightly reducing recoverability | teach only | yes |
| to be | 机の上に本があります。 | There is a book on the desk. | あります | N4 L5 T5 C4 I2 | cloze+teach | yes |
| to be | 駅の前に自転車があります。 | There is a bicycle in front of the station. | あります | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to go out | 今晩、一緒に出かけませんか。 | Shall we go out together tonight? | でかけません | N5 L5 T5 C2 I3 — Blank could be filled by many verbs (遊ぶ, 食べる, etc.), context doesn't force 出かける. | teach only | yes |
| to go out | 買い物に出かけますから、少し待ってください。 | I'm going out shopping, so please wait a little. | でかけます | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to go out | 今日は病気ですから、出かけません。 | I'm sick today, so I won't go out. | でかけません | N5 L5 T5 C3 I3 — Sickness context suggests staying in, but other verbs (休む, 働く) could also fit the blank. | teach only | yes |
| to appear | 毎朝七時に家を出ます。 | I leave home at seven every morning. | でます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to appear | 駅を出るから、傘が要ります。 | I'm leaving the station, so I need an umbrella. | でる | N4 L4 T4 C4 I4 — から attached to plain form is borderline N5/N4 but acceptable; slight logical leap between leaving station and needing umbrella. | cloze+teach | yes |
| to fly | 飛行機はとても速く飛びます。 | Airplanes fly very fast. | とびます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to fly | あの鳥はどこまで飛びますか。 | How far does that bird fly? | とびます | N5 L5 T5 C3 I4 — Blank could plausibly be filled with 行く or 歩く depending on bird context, slightly lowering recoverability. | teach only | yes |
| to fly | 今日、飛行機は飛びません。 | The plane won't fly today. | とびません | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to come to a halt | 電車が駅に止まります。 | The train stops at the station. | とまります | N5 L5 T5 C3 I2 — Generic but grammatically fine; blank could also fit 着きます. | teach only | yes |
| to come to a halt | エレベーターは止まっていますか。 | Is the elevator stopped? | とまっています | N4 L5 T5 C3 I3 — Kana reading for エレベーター spelled phonetically (えれべえたあ) is unconventional but understandable; blank could also fit 動いています. | teach only | yes |
| to line up | 店の前に人が並んでいます。 | People are lined up in front of the store. | ならんでいます | N5 L5 T5 C3 I3 — Blank could also be filled by other verbs like 立って/いて, so context isn't fully forcing 並ぶ. | teach only | yes |
| to line up | みんなで並びましょう。 | Let's all line up together. | ならびましょう | N5 L5 T5 C2 I3 — Many verbs (座ります, 待ちます, etc.) could fit the blank, weakening recoverability. | teach only | yes |
| to line up | ここに並ばないでください。 | Please don't line up here. | ならばないでください | N5 L5 T5 C3 I4 — Plausible real-world instruction, but other verbs (立つ, 座る) could also fit the blank. | teach only | yes |
| to climb | 明日、山に登ります。 | Tomorrow I will climb the mountain. | のぼります | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to climb | 階段を登るから、疲れます。 | I climb the stairs, so I get tired. | のぼる | N4 L4 T4 C3 I3 — Other verbs like 使う could also fit the blank, lowering recoverability. | teach only | yes |
| to climb | あの山には登りません。 | I won't climb that mountain. | のぼりません | N5 L5 T5 C3 I3 — 行きません could also fit the blank, reducing uniqueness. | teach only | yes |
| to enter | 会社に入ります。 | I enter the company office. | はいります | N4 L5 T4 C2 I2 — Blank could also be filled with 行きます/来ます since に just marks direction. | teach only | yes |
| to enter | この店に入りませんか。 | Won't you come into this store? | はいりませんか | N4 L5 T5 C2 I3 — Other motion verbs (行きませんか/来ませんか) would also fit the blank. | teach only | yes |
| to meet | 駅で先生に会いました。 | I met my teacher at the station. | あいました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to walk | 明日は公園を歩きます。 | Tomorrow I will walk in the park. | あるきます | N5 L5 T5 C3 I3 — 公園を+verb could fit other motion verbs like 走ります too | teach only | yes |
| to walk | 昨日はたくさん歩きました。 | Yesterday I walked a lot. | あるきました | N5 L5 T5 C3 I3 — たくさん could pair with many verbs, e.g. 食べました | teach only | yes |
| to walk | ゆっくりと歩いてください。 | Please walk slowly. | あるいて | N5 L5 T5 C4 I4 — ゆっくりと strongly suggests walking, good cue | cloze+teach | yes |
| to get off | 次の駅で降ります。 | I will get off at the next station. | おります | N5 L5 T5 C3 I3 — Blank could also be 着きます or 止まります, reducing uniqueness. | teach only | yes |
| to get off | バスを降りました。 | I got off the bus. | おりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to get off | ここで降りてください。 | Please get off here. | おりて | N5 L5 T5 C3 I3 — Blank could also be 待って or 止まって, reducing uniqueness. | teach only | yes |
| to go back | 昨日遅く家に帰りました。 | Yesterday I went back home late. | かえりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to go back | もう遅いですから、帰ってください。 | It's already late, so please go home. | かえって | N5 L5 T5 C3 I3 — Blank could also be filled with 寝て/休んで, slightly reducing recoverability. | teach only | yes |
| to come | 明日友達が家に来ます。 | Tomorrow my friend will come to my house. | きます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to come | 明日九時に来てください。 | Please come at nine tomorrow. | きて | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to sit | 晩御飯の前に椅子に座ります。 | I sit in a chair before dinner. | すわります | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to sit | 電車の中で座りました。 | I sat down inside the train. | すわりました | N5 L5 T5 C3 I3 — Blank could also be filled by other verbs like 立ちました or 寝ました. | teach only | yes |
| to sit | どうぞ、ここに座ってください。 | Please sit here. | すわって | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to stand up | バスの中で立ちました。 | I stood up inside the bus. | たちました | N5 L5 T5 C3 I3 — Other verbs like 座りました could also fit the blank without more context. | teach only | yes |
| to arrive at | 明日ホテルに着きます。 | I will arrive at the hotel tomorrow. | つきます | N4 L5 T5 C2 I2 — blank could also be 行きます/泊まります, low uniqueness | teach only | yes |
| to arrive at | 会社に遅く着きました。 | I arrived at the office late. | つきました | N4 L5 T5 C3 I3 — 遅く could also precede 来ました, slightly ambiguous | teach only | yes |
| shirt | 新しいシャツを買いました。 | I bought a new shirt. | しゃつ | N5 L5 T5 C2 I2 — Blank could be any noun (bought a new ___), not uniquely shirt. | teach only | yes |
| shirt | 今日はシャツを着ませんでした。 | I didn't wear a shirt today. | しゃつ | N5 L5 T5 C2 I2 — Any clothing item could fill the blank, not uniquely shirt. | teach only | yes |
| shower | 今朝はシャワーを浴びませんでした。 | I didn't take a shower this morning. | しゃわあ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| skirt | 黒いスカートを買いました。 | I bought a black skirt. | すかあと | N5 L5 T5 C3 I3 — Blank could be any clothing item, not uniquely スカート. | teach only | yes |
| skirt | そのスカートは新しいですか。 | Is that skirt new? | すかあと | N5 L5 T5 C2 I2 — Very generic; blank could be filled by almost any noun. | teach only | yes |
| heater | 寒いですから、ストーブをつけました。 | Because it's cold, I turned on the heater. | すとうぶ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| heater | ストーブをつけましょうか。 | Shall we turn on the heater? | すとうぶ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| heater | 部屋にストーブがありません。 | There is no heater in the room. | すとうぶ | N4 L5 T5 C5 I3 | cloze+teach | yes |
| spoon | スプーンを買いました。 | I bought a spoon. | すぷうん | N5 L5 T5 C2 I2 — Generic template; many objects could fill the blank. | teach only | yes |
| spoon | スプーンを使いましょう。 | Let's use a spoon. | すぷうん | N5 L5 T5 C2 I2 — Any usable object could fit the blank, low recoverability. | teach only | yes |
| spoon | テーブルにスプーンがありません。 | There is no spoon on the table. | すぷうん | N5 L5 T5 C3 I3 — Table context narrows options somewhat but other utensils could still fit. | teach only | yes |
| trousers | 黒いズボンを買いました。 | I bought black trousers. | ずぼん | N5 L5 T5 C2 I2 — Blank could be filled by many clothing items (shirt, shoes, coat), not uniquely 'trousers'. | teach only | yes |
| trousers | そのズボンは大きいですか。 | Are those trousers big? | ずぼん | N5 L5 T5 C2 I2 — Any noun could fit 'そのXは大きいですか', low uniqueness for the blank. | teach only | yes |
| sweater | 寒いですから、セーターを着ました。 | Because it's cold, I wore a sweater. | せえたあ | N5 L5 T5 C3 I3 — Other winter clothing (coat, jacket) could also fit the blank. | teach only | yes |
| sweater | 赤いセーターを買いたいです。 | I want to buy a red sweater. | せえたあ | N5 L5 T5 C3 I3 — Color context doesn't uniquely force 'sweater'; other garments fit too. | teach only | yes |
| sweater | 今日はセーターを着ませんでした。 | I didn't wear a sweater today. | せえたあ | N5 L5 T5 C3 I2 — Generic negative clothing sentence; other clothing items could fill the blank. | teach only | yes |
| soap | 石鹸で手を洗います。 | I wash my hands with soap. | せっけん | N5 L5 T5 C3 I3 — Could also be water or shampoo, slightly reduces recoverability. | teach only | yes |
| soap | 石鹸を買いましょう。 | Let's buy soap. | せっけん | N5 L5 T5 C2 I2 — Very generic; many items could fill the blank. | teach only | yes |
| soap | お風呂に石鹸がありません。 | There is no soap in the bath. | せっけん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| a song | 姉は歌が上手です。 | My older sister is good at singing. | うた | N5 L5 T5 C3 I3 — Blank could be filled with other skill nouns like sports or cooking. | teach only | yes |
| ~ side | 駅の向こう側に病院があります。 | There is a hospital on the other side of the station. | がわ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| it takes | 料理に時間がかかりますから、疲れます。 | Cooking takes time, so I get tired. | かかります | N4 L4 T5 C4 I3 | cloze+teach | yes |
| months | 母は二か月病院にいました。 | My mother was in the hospital for two months. | かげつ | N5 L5 T5 C3 I3 — Other time units (年, 週間) could also fit the blank. | teach only | yes |
| months | 会社を一か月休みましたから、お金がありません。 | I took a month off from work, so I don't have money. | かげつ | N5 L5 T5 C3 I4 — Context slightly favors months but other time units are still plausible. | teach only | yes |
| calendar | 部屋にカレンダーを掛けます。 | I hang a calendar in the room. | かれんだあ | N5 L5 T5 C3 I4 — 掛けます narrows options to hangable items like calendar/picture/clock. | teach only | yes |
| calendar | カレンダーを見てください。 | Please look at the calendar. | かれんだあ | N5 L5 T5 C2 I2 — Very generic context; many nouns could fill the blank. | teach only | yes |
| calendar | 新しいカレンダーが欲しいです。 | I want a new calendar. | かれんだあ | N5 L5 T5 C2 I2 — Generic 'want new ___' template fits many nouns. | teach only | yes |
| last year | 去年は雪が降りませんでした。 | It didn't snow last year. | きょねん | N5 L5 T5 C3 I3 | teach only | yes |
| last year | 去年から英語を習っています。 | I have been learning English since last year. | きょねん | N5 L5 T5 C3 I3 | teach only | yes |
| this morning | 今朝、六時に起きました。 | This morning, I woke up at six. | けさ | N5 L5 T5 C3 I3 — Other time words (昨日, 毎朝) could also fit the blank grammatically. | teach only | yes |
| this morning | 今朝は寒かったです。 | This morning was cold. | けさ | N5 L5 T5 C3 I3 — Other time expressions like 今日/昨日 also plausible in the blank. | teach only | yes |
| this morning | 今朝、電話がありましたか。 | Was there a phone call this morning? | けさ | N5 L5 T5 C3 I3 — Other time words could fit equally well, reducing forced recoverability. | teach only | yes |
| nine days | 旅行は九日でした。 | The trip was nine days. | ここのか | N4 L5 T5 C2 I2 — Any duration word (二日、三日 etc.) could fill the blank, so recoverability is low. | teach only | yes |
| nine days | 病気で九日休みました。 | I was off for nine days because of illness. | ここのか | N4 L5 T5 C2 I3 — Any duration number could fit the blank, reducing recoverability. | teach only | yes |
| this year | 今年、車を買いました。 | This year, I bought a car. | ことし | N5 L5 T5 C3 I3 — Could also be 去年/来年, so blank isn't fully forced. | teach only | yes |
| this year | 今年は忙しいです。 | This year is busy. | ことし | N5 L5 T5 C3 I2 — Generic sentence; other time words could fit the blank. | teach only | yes |
| this year | 今年、旅行に行きたいです。 | This year, I want to go on a trip. | ことし | N5 L5 T5 C3 I4 — Slightly more specific context but still allows other time words. | teach only | yes |
| chicken | 公園に鳥がいます。 | There is a bird in the park. | とり | N4 L5 T4 C2 I2 — Target gloss 'chicken' is incorrect for 鳥 (bird); many nouns could fill the blank (cat, dog, etc.). | teach only | yes |
| chicken | 窓の外に鳥がいますよ。 | There's a bird outside the window. | とり | N5 L5 T4 C2 I3 — Target gloss 'chicken' is incorrect for 鳥 (bird); blank still fits many animals. | teach only | yes |
| chicken | あの鳥は何ですか。 | What is that bird? | とり | N5 L5 T4 C2 I3 — Target gloss 'chicken' is incorrect for 鳥 (bird); blank could be many nouns. | teach only | yes |
| chicken meat | 鶏肉が食べたいです。 | I want to eat chicken. | とりにく | N5 L5 T5 C2 I3 — Any food noun could fill the blank, so recoverability is low. | teach only | yes |
| chicken meat | 晩御飯は鶏肉ですか。 | Is dinner chicken? | とりにく | N5 L5 T5 C2 I3 — Many foods could complete '晩御飯は＿ですか', low uniqueness. | teach only | yes |
| drink | 飲み物は何がいいですか。 | What would you like to drink? | のみもの | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (food, drink, etc.) without more context. | teach only | yes |
| drink | 飲み物を買いましょう。 | Let's buy some drinks. | のみもの | N5 L5 T5 C2 I2 — Generic sentence; many objects could fit '___を買いましょう'. | teach only | yes |
| drink | 冷たい飲み物が飲みたいです。 | I want to drink something cold. | のみもの | N5 L5 T5 C5 I4 | cloze+teach | yes |
| butter | パンにバターをつけました。 | I put butter on the bread. | ばたあ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| butter | バターがありますか。 | Do you have butter? | ばたあ | N5 L5 T5 C2 I2 — Blank could be many food items, low recoverability. | teach only | yes |
| butter | バターが欲しいです。 | I want butter. | ばたあ | N5 L5 T5 C2 I2 — Generic 'I want ___' sentence, low recoverability. | teach only | yes |
| pork | 母は豚肉を買いました。 | My mother bought pork. | ぶたにく | N5 L5 T5 C3 I3 — Blank could plausibly be many food items, though somewhat inferable from context. | teach only | yes |
| pork | これは豚肉ですか。 | Is this pork? | ぶたにく | N4 L5 T5 C2 I1 — Generic これは＿ですか template; blank could be almost any noun. | teach only | yes |
| pork | 豚肉を食べましょう。 | Let's eat pork. | ぶたにく | N5 L5 T5 C3 I3 — Blank could be filled with many food nouns, though plausible context. | teach only | yes |
| cooking | どんな料理が好きですか。 | What kind of cooking do you like? | りょうり | N5 L5 T4 C3 I3 — 料理 here means 'cuisine/dish type' more than 'cooking' activity, but translation is acceptable. | teach only | yes |
| clothes | 母は新しい服を買いました。 | My mother bought new clothes. | ふく | N5 L5 T5 C2 I3 — Many nouns could fill the blank (bag, shoes, etc.), so recoverability is low. | teach only | yes |
| clothes | その服はいくらでしたか。 | How much were those clothes? | ふく | N5 L5 T5 C2 I2 — Generic sentence; blank could be filled by many nouns. | teach only | yes |
| bed | 子供はベッドで寝ています。 | The child is sleeping in the bed. | べっど | N5 L5 T5 C4 I3 | cloze+teach | yes |
| bed | もうベッドに入りましたか。 | Have you already gotten into bed? | べっど | N5 L4 T5 C3 I3 — could also be お風呂に入りました, reducing uniqueness | teach only | yes |
| bed | 疲れたから、ベッドで休みます。 | Since I'm tired, I'll rest on the bed. | べっど | N5 L4 T5 C3 I3 — blank could be filled with ソファ or 椅子 too | teach only | yes |
| pocket | 財布をポケットに入れました。 | I put my wallet in my pocket. | ぽけっと | N5 L5 T5 C4 I3 | cloze+teach | yes |
| pocket | ポケットに何がありますか。 | What's in your pocket? | ぽけっと | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (bag, box, etc.), weak recoverability. | teach only | yes |
| pocket | ポケットが小さいから、鍵が入りません。 | Since the pocket is small, the key doesn't fit. | ぽけっと | N5 L4 T5 C5 I4 | cloze+teach | yes |
| button | そのボタンを押してください。 | Please push that button. | ぼたん | N5 L5 T5 C3 I3 | teach only | yes |
| button | シャツのボタンはどこですか。 | Where is the shirt's button? | ぼたん | N4 L5 T5 C3 I3 | teach only | yes |
| bookshelf | 本棚に本を並べました。 | I lined up the books on the bookshelf. | ほんだな | N5 L5 T5 C4 I3 | cloze+teach | yes |
| bookshelf | 本棚はどこにありますか。 | Where is the bookshelf? | ほんだな | N5 L5 T5 C2 I2 — Blank could be almost any noun (desk, box, etc.), low recoverability. | teach only | yes |
| bookshelf | 本棚の本を見ましょう。 | Let's look at the books on the bookshelf. | ほんだな | N4 L5 T5 C3 I3 — Blank could plausibly be other furniture/place nouns too. | teach only | yes |
| window | 窓を閉めてください。 | Please close the window. | まど | N5 L5 T5 C3 I3 — Blank could be door or other closable object, not uniquely 'window'. | teach only | yes |
| window | 窓を開けましょうか。 | Shall we open the window? | まど | N5 L5 T5 C3 I3 — Blank could be door, box, etc., not uniquely 'window'. | teach only | yes |
| window | 寒いから、窓を閉めます。 | Since it's cold, I'll close the window. | まど | N5 L5 T5 C4 I4 | cloze+teach | yes |
| a party | 土曜日にパーティーがありました。 | There was a party on Saturday. | ぱーてぃー | N5 L5 T5 C3 I3 | teach only | yes |
| a party | 明日パーティーに行きますか。 | Are you going to a party tomorrow? | ぱーてぃー | N5 L5 T5 C3 I3 | teach only | yes |
| a party | 誕生日にパーティーをしたいです。 | I want to have a party for my birthday. | ぱーてぃー | N5 L5 T5 C4 I4 | cloze+teach | yes |
| postcard | この葉書はいくらですか。 | How much is this postcard? | はがき | N5 L5 T5 C2 I2 — Generic template; many nouns (本、切符、お土産等) fit the blank equally well. | teach only | yes |
| postcard | 友達に葉書を書きたいです。 | I want to write a postcard to my friend. | はがき | N5 L5 T5 C3 I3 — 手紙 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| begins | 授業は九時に始まります。 | Class starts at nine. | はじまります | N5 L5 T5 C3 I3 — 始まる and 終わる both fit the blank grammatically, reducing certainty. | teach only | yes |
| begins | 映画は何時に始まりますか。 | What time does the movie start? | はじまります | N5 L5 T5 C3 I4 — Question form is engaging but 終わります could also fit the blank. | teach only | yes |
| begins | パーティーは七時に始まりました。 | The party started at seven. | はじまりました | N5 L5 T5 C3 I3 — Past tense context still allows 終わりました as an alternative answer. | teach only | yes |
| free time | 土曜日は暇です。 | I'm free on Saturday. | ひま | N5 L5 T5 C2 I3 — Many other adjectives (忙しい, 元気 etc.) could fill the blank, limiting cloze recoverability. | teach only | yes |
| free time | 今晩暇ですか。 | Are you free tonight? | ひま | N5 L5 T5 C2 I3 — Blank could be filled by other adjectives like 忙しい or 元気, reducing uniqueness. | teach only | yes |
| free time | 今日は暇じゃありません。 | I'm not free today. | ひま | N5 L5 T5 C2 I3 — Negative form still allows multiple adjectives to fit the blank. | teach only | yes |
| real | それは本当ですか。 | Is that true? | ほんとう | N5 L5 T5 C3 I2 | teach only | yes |
| and | また明日会いましょう。 | Let's meet again tomorrow. | また | N5 L5 T4 C5 I3 — Target word gloss 'and' is incorrect; また means 'again', not 'and'. | cloze+teach | yes |
| and | また頭が痛いです。 | My head hurts again. | また | N5 L5 T4 C5 I3 — Target word gloss 'and' is incorrect; また means 'again', not 'and'. | cloze+teach | yes |
| and | また雨が降りました。 | It rained again. | また | N5 L5 T4 C5 I3 — Target word gloss 'and' is incorrect; また means 'again', not 'and'. | cloze+teach | yes |
| yet | まだ来ていません。 | They haven't come yet. | まだ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| cafeteria | 学校の食堂で昼御飯を食べませんか。 | Shall we eat lunch at the school cafeteria? | しょくどう | N5 L5 T5 C3 I3 — Many other places (レストラン, 教室 etc.) could fill the blank, though 食堂 is a natural fit. | teach only | yes |
| cafeteria | 食堂は静かですから、そこで宿題をします。 | The cafeteria is quiet, so I'll do my homework there. | しょくどう | N4 L5 T5 C2 I3 — A library (図書館) fits more naturally with 'quiet' and 'homework', so 食堂 isn't uniquely recoverable. | teach only | yes |
| outside | 子供は外で遊びます。 | The children play outside. | そと | N5 L5 T5 C3 I3 — Blank could also be filled with other place words like 公園. | teach only | yes |
| outside | 外で少し歩きませんか。 | Shall we walk outside a little? | そと | N5 L5 T5 C2 I3 — Many location words could fit the blank equally well. | teach only | yes |
| outside | もしもし、今外に居ますか。 | Hello, are you outside now? | そと | N4 L4 T5 C4 I4 — Phone context strongly implies 外, though 居ます kanji is slightly above typical N5 orthography. | cloze+teach | yes |
| embassy | 大使館へ一緒に行きませんか。 | Shall we go to the embassy together? | たいしかん | N5 L4 T5 C3 I3 | teach only | yes |
| embassy | もしもし、大使館の電話番号が分かりますか。 | Hello, do you know the embassy's phone number? | たいしかん | N5 L4 T5 C3 I4 | teach only | yes |
| kitchen | 母は台所で料理を作ります。 | Mother makes food in the kitchen. | だいどころ | N5 L5 T5 C3 I3 | teach only | yes |
| kitchen | 台所はどこですか。 | Where is the kitchen? | だいどころ | N4 L5 T5 C2 I1 — Generic template sentence, blank could be any noun. | teach only | yes |
| building | あの建物は学校ですか。 | Is that building a school? | たてもの | N4 L5 T5 C3 I3 | teach only | yes |
| building | この建物はとても高いです。 | This building is very tall. | たてもの | N4 L5 T5 C2 I2 — Blank could be filled by many nouns (building, tower, person, etc.). | teach only | yes |
| nearby | 近くに公園があります。 | There is a park nearby. | ちかく | N5 L5 T5 C2 I2 — Very generic; many location words (そこ、ここ、隣など) could fill the blank. | teach only | yes |
| nearby | 近くのレストランで晩御飯を食べませんか。 | Shall we eat dinner at a nearby restaurant? | ちかく | N5 L5 T5 C3 I3 — Other adjectives (新しい、好きな) could also fit grammatically. | teach only | yes |
| nearby | もしもし、今近くに居ますか。 | Hello, are you nearby now? | ちかく | N5 L5 T5 C4 I4 — Phone context makes 'nearby' a fairly natural guess, though 'ここ/どこ' could also fit. | cloze+teach | yes |
| an exit | 出口はどこですか。 | Where is the exit? | でぐち | N5 L5 T5 C2 I2 — Very generic template; many nouns fit the blank equally well. | teach only | yes |
| an exit | 出口の近くに立ってください。 | Please stand near the exit. | でぐち | N5 L5 T5 C3 I3 — Blank could be filled with other location nouns like 駅 or 入り口. | teach only | yes |
| an exit | 出口が分かりませんから、電話をしました。 | Since I didn't know where the exit was, I made a phone call. | でぐち | N4 L5 T5 C3 I4 — Reasonable context clue but other nouns (道, 場所) could also fit the blank. | teach only | yes |
| bathroom | トイレはどこですか。 | Where is the bathroom? | といれ | N5 L5 T5 C2 I3 — Many other places could fill the blank, low cloze recoverability. | teach only | yes |
| bathroom | 授業の前にトイレへ行きましょう。 | Let's go to the bathroom before class. | といれ | N5 L5 T5 C3 I4 — Context somewhat narrows to a place before class, but other places also plausible. | teach only | yes |
| bathroom | トイレはとても綺麗です。 | The bathroom is very clean. | といれ | N5 L5 T5 C2 I2 — Any noun could be described as clean, weak cloze cue. | teach only | yes |
| fruit | 友達が果物を持って来ました。 | My friend brought fruit. | くだもの | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (any object someone could bring). | teach only | yes |
| fruit | 果物を食べたいです。 | I want to eat fruit. | くだもの | N5 L5 T5 C2 I2 — Generic 'Xを食べたいです' pattern; many foods could fit the blank. | teach only | yes |
| fruit | 果物は好きですか。 | Do you like fruit? | くだもの | N5 L5 T5 C2 I2 — Template 'Xは好きですか' works with almost any noun, low cloze specificity. | teach only | yes |
| black tea | 紅茶を飲みませんか。 | Won't you drink some black tea? | こうちゃ | N5 L5 T5 C2 I3 — Any beverage could fill the blank, so cloze is weak. | teach only | yes |
| black tea | 寒いから紅茶を飲みます。 | Since it's cold, I'll drink black tea. | こうちゃ | N5 L5 T5 C2 I3 — Context (cold) doesn't uniquely force 'black tea'; other drinks fit. | teach only | yes |
| black tea | 今朝紅茶を飲みました。 | I drank black tea this morning. | こうちゃ | N5 L5 T5 C2 I3 — Generic morning drink context allows many possible answers. | teach only | yes |
| sugar | 砂糖を取ってください。 | Please pass me the sugar. | さとう | N5 L5 T5 C2 I3 — Blank could be salt, salt shaker, or many other objects. | teach only | yes |
| sugar | 紅茶に砂糖を入れますか。 | Do you put sugar in your black tea? | さとう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| sugar | 砂糖は使いませんでした。 | I didn't use sugar. | さとう | N4 L5 T5 C1 I2 — Blank is too generic; almost any noun could fit 'used'. | teach only | yes |
| salt | 塩を渡してください。 | Please hand me the salt. | しお | N5 L5 T5 C3 I3 — Blank could also be many other objects to hand, e.g. water, pepper, so recoverability is moderate. | teach only | yes |
| salt | 料理に塩を入れます。 | I put salt in the dish. | しお | N5 L5 T5 C3 I3 — Other seasonings (sugar, pepper, soy sauce) could also fit the blank, reducing uniqueness. | teach only | yes |
| soy sauce | 醤油を使いますか。 | Do you use soy sauce? | しょうゆ | N4 L5 T5 C2 I2 — Many nouns could fill the blank with 使いますか, weak cloze cue. | teach only | yes |
| soy sauce | 魚に醤油をかけます。 | I pour soy sauce on the fish. | しょうゆ | N5 L5 T5 C4 I4 — Context (魚にかける) strongly suggests soy sauce, though sauce/salt also plausible. | cloze+teach | yes |
| soy sauce | 醤油が欲しいです。 | I want some soy sauce. | しょうゆ | N4 L5 T5 C1 I1 — Generic template; almost any noun fits が欲しいです. | teach only | yes |
| tobacco | たばこを吸いますか。 | Do you smoke? | たばこ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| tobacco | 昨日たばこを吸いませんでした。 | I didn't smoke yesterday. | たばこ | N5 L5 T5 C4 I2 | cloze+teach | yes |
| tobacco | 外でたばこを吸います。 | I smoke outside. | たばこ | N5 L5 T5 C3 I3 — 外で吸う could also fit 空気 (breathe air), slightly reducing uniqueness of the blank. | teach only | yes |
| food | どんな食べ物が好きですか。 | What kind of food do you like? | たべもの | N5 L5 T5 C4 I3 | cloze+teach | yes |
| food | 食べ物をたくさん買いました。 | I bought a lot of food. | たべもの | N5 L5 T5 C4 I3 | cloze+teach | yes |
| egg | 朝御飯に卵を食べます。 | I eat eggs for breakfast. | たまご | N5 L5 T5 C2 I3 — Many food words could fill the blank, e.g. パン, 魚. | teach only | yes |
| egg | 卵を買いました。 | I bought eggs. | たまご | N5 L5 T5 C1 I2 — Extremely generic; almost any noun could fit the blank. | teach only | yes |
| egg | 卵は好きですか。 | Do you like eggs? | たまご | N5 L5 T5 C1 I2 — Any noun works in this template, low recoverability. | teach only | yes |
| various | 私は色々な本を読みます。 | I read various books. | いろいろ | N4 L5 T5 C3 I2 — Generic template sentence. | teach only | yes |
| various | 店に色々な野菜があります。 | There are various vegetables at the store. | いろいろ | N5 L5 T5 C3 I3 | teach only | yes |
| thin | このお茶は薄いですね。 | This tea is weak, isn't it. | うすい | N5 L5 T5 C3 I3 | teach only | yes |
| thin | 今日は薄い服を着ました。 | I wore thin clothes today. | うすい | N5 L5 T5 C3 I3 | teach only | yes |
| thin | このノートは薄いですか。 | Is this notebook thin? | うすい | N4 L5 T5 C2 I2 — Generic template sentence with weak cloze constraint. | teach only | yes |
| noisy | 隣の部屋はうるさいです。 | The next room is noisy. | うるさい | N5 L5 T5 C2 I2 — Many adjectives could fill the blank; generic template. | teach only | yes |
| noisy | 教室はとてもうるさかったです。 | The classroom was very noisy. | うるさかった | N5 L5 T5 C3 I3 — Context (classroom, very) narrows options somewhat but still allows other adjectives. | teach only | yes |
| noisy | 外はうるさいですか。 | Is it noisy outside? | うるさい | N5 L5 T5 C2 I2 — Generic question; many adjectives fit the blank. | teach only | yes |
| many | このクラスは学生が多いです。 | This class has many students. | おおい | N5 L5 T5 C3 I3 — Other adjectives (少ない, 好き) could also fit grammatically, reducing cloze certainty. | teach only | yes |
| many | この町は外国人が多いですか。 | Are there many foreigners in this town? | おおい | N5 L5 T5 C3 I4 — Same ambiguity: other adjectives could fill the blank. | teach only | yes |
| slow | バスが遅かったです。 | The bus was slow. | おそかった | N5 L5 T5 C3 I3 — 早い or other adjectives could also fit the blank grammatically. | teach only | yes |
| slow | この電車は遅いですか。 | Is this train slow? | おそい | N5 L5 T5 C3 I3 — 速い/早い could also fit contextually. | teach only | yes |
| same | 私たちは同じ学校です。 | We are at the same school. | おなじ | N5 L5 T5 C3 I3 — Blank could also be filled by other adjectives like いい or その, reducing uniqueness. | teach only | yes |
| same | これはあなたのかばんと同じですか。 | Is this the same as your bag? | おなじ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| heavy | この荷物は重いです。 | This luggage is heavy. | おもい | N5 L5 T5 C2 I2 — Generic template sentence; many adjectives could fill the blank. | teach only | yes |
| heavy | 重いかばんを持ちたくないです。 | I don't want to carry a heavy bag. | おもい | N5 L5 T5 C3 I3 — Slightly more context via 'don't want to carry' but still several adjectives could fit. | teach only | yes |
| heavy | この箱は重いですか。 | Is this box heavy? | おもい | N5 L5 T5 C2 I2 — Generic template sentence; low cloze specificity. | teach only | yes |
| light | この上着は軽いです。 | This jacket is light. | かるい | N5 L5 T5 C2 I2 — Many adjectives (重い, 高い, 新しい) could fit the blank; context doesn't force 軽い. | teach only | yes |
| light | 軽い靴が欲しいです。 | I want light shoes. | かるい | N5 L5 T5 C2 I3 — Other adjectives like 安い or 新しい could also fit grammatically. | teach only | yes |
| light | このいすは軽いですか。 | Is this chair light? | かるい | N5 L5 T5 C2 I2 — Generic template sentence; several adjectives could fill the blank. | teach only | yes |
| homework | 今晩、宿題をします。 | I will do homework tonight. | しゅくだい | N5 L5 T5 C2 I3 — Blank could be filled with many nouns (勉強, 仕事, etc.), not uniquely homework. | teach only | yes |
| homework | 一緒に宿題をしましょうか。 | Shall we do homework together? | しゅくだい | N5 L5 T5 C2 I3 — Context doesn't force 宿題 specifically; other activities fit equally well. | teach only | yes |
| homework | 忙しいから、宿題ができません。 | Because I'm busy, I can't do homework. | しゅくだい | N5 L5 T5 C2 I3 — Many nouns could fill the blank (仕事, 勉強, etc.), reducing uniqueness. | teach only | yes |
| to work (for) | 父は銀行に勤めています。 | My father works for a bank. | つとめています | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to work (for) | 父は会社に勤めていますから、忙しいです。 | Because my father works for a company, he is busy. | つとめています | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to work (for) | あなたはどこに勤めていますか。 | Where do you work? | つとめています | N5 L5 T5 C4 I3 | cloze+teach | yes |
| test | 明日、英語のテストがあります。 | There is an English test tomorrow. | てすと | N5 L5 T5 C3 I3 — Other nouns like 授業 could also fit the blank. | teach only | yes |
| test | テストは難しくなかったです。 | The test wasn't difficult. | てすと | N5 L5 T5 C3 I3 — Could also be 宿題 or 授業 etc. | teach only | yes |
| test | テストがありますから、今晩忙しいです。 | Because there is a test, I'm busy tonight. | てすと | N5 L5 T5 C3 I3 — Blank could be filled by other nouns like 会議 or 宿題. | teach only | yes |
| to take (a class) | 今年、英語のクラスを取ります。 | This year, I will take an English class. | とります | N5 L5 T5 C3 I3 — 受けます could also fit the blank, slightly reducing cloze uniqueness | teach only | yes |
| to take (a class) | 来年、どのクラスを取りますか。 | Which class will you take next year? | とります | N5 L5 T5 C3 I3 — 受けます is also plausible in the blank | teach only | yes |
| to take (a class) | 面白いから、この授業を取ります。 | Because it's interesting, I'll take this class. | とります | N4 L3 T5 C3 I4 — causal から clause slightly exceeds strict N5 scope; 受けます also fits blank | teach only | yes |
| to learn | 学校で漢字を習います。 | I learn kanji at school. | ならいます | N4 L5 T5 C3 I2 — Generic but natural; 勉強します could also fit the blank. | teach only | yes |
| to learn | 一緒に英語を習いましょう。 | Let's learn English together. | ならいましょう | N4 L5 T5 C3 I3 — 勉強しましょう could also fit, slightly reducing recoverability. | teach only | yes |
| to learn | 妹はまだ平仮名を習っていません。 | My younger sister hasn't learned hiragana yet. | ならって | N4 L3 T5 C4 I4 — Uses て+いません form, slightly above strict N5 list but common. | cloze+teach | yes |
| to work | 母は毎日、九時から働きます。 | My mother works from nine o'clock every day. | はたらきます | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to work | お金が要りますから、働きます。 | Because I need money, I work. | はたらきます | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to work | 日曜日は働きません。 | I don't work on Sundays. | はたらきません | N5 L5 T5 C3 I3 — Context doesn't strongly force 'work' over other daily activities. | teach only | yes |
| hiragana | 平仮名で名前を書きます。 | I write my name in hiragana. | ひらがな | N5 L5 T5 C2 I2 — Blank could equally be filled with カタカナ or 漢字. | teach only | yes |
| hiragana | この言葉は平仮名で書きますか。 | Do you write this word in hiragana? | ひらがな | N5 L5 T5 C2 I2 — Could also be answered with カタカナ or 漢字. | teach only | yes |
| hiragana | 平仮名は易しいから、好きです。 | Because hiragana is easy, I like it. | ひらがな | N5 L4 T5 C4 I4 — から clause is slightly advanced but common enough; context strongly suggests hiragana as commonly considered easy. | cloze+teach | yes |
| sentence | この文章は長いです。 | This sentence is long. | ぶんしょう | N4 L5 T5 C2 I2 — Generic template; many nouns could fill the blank (文, 話, etc.). | teach only | yes |
| sentence | この文章は難しくないです。 | This sentence is not difficult. | ぶんしょう | N4 L5 T5 C2 I2 — Generic template; blank not uniquely recoverable. | teach only | yes |
| sentence | 文章が短いから、分かります。 | Because the sentence is short, I understand it. | ぶんしょう | N4 L4 T5 C3 I3 — から is slightly beyond strict N5 but common; blank could also be 話 or 説明. | teach only | yes |
| corner (e.g., desk, pavement) | 机の角は危ないです。 | The corner of the desk is dangerous. | かど | N5 L5 T5 C4 I4 | cloze+teach | yes |
| corner (e.g., desk, pavement) | あの角に交番はありません。 | There is no police box at that corner. | かど | N5 L5 T5 C5 I4 | cloze+teach | yes |
| vase | 花瓶に花を入れます。 | I put flowers in the vase. | かびん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| vase | その花瓶を机の上に置いてください。 | Please put that vase on the desk. | かびん | N5 L5 T5 C2 I3 — Blank could be filled by many objects, not uniquely 'vase'. | teach only | yes |
| vase | この花瓶は重くないです。 | This vase is not heavy. | かびん | N5 L5 T5 C2 I2 — Generic sentence; blank works with many nouns. | teach only | yes |
| paper | 紙に名前を書きます。 | I write my name on the paper. | かみ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| paper | 白い紙をください。 | Please give me white paper. | かみ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| paper | この紙は厚くないです。 | This paper is not thick. | かみ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| camera | 旅行にカメラを持って行きます。 | I take a camera on the trip. | かめら | N5 L5 T4 C3 I3 | teach only | yes |
| camera | カメラを貸してください。 | Please lend me your camera. | かめら | N5 L5 T5 C2 I3 — Many objects could fill the blank (かさ, 本, etc.), reducing recoverability. | teach only | yes |
| camera | 私はカメラを持っていません。 | I do not have a camera. | かめら | N5 L5 T5 C2 I2 — Generic sentence; many nouns could fit the blank. | teach only | yes |
| guitar | 兄はギターが上手です。 | My older brother is good at guitar. | ぎたあ | N5 L5 T5 C2 I3 — 上手 could apply to many skills, not uniquely guitar. | teach only | yes |
| guitar | そのギターを弾いてください。 | Please play that guitar. | ぎたあ | N5 L5 T5 C3 I3 — 弾く narrows to an instrument but not uniquely guitar (piano/violin also fit). | teach only | yes |
| guitar | 私はギターを弾きません。 | I do not play the guitar. | ぎたあ | N5 L5 T5 C3 I3 — 弾く narrows to an instrument but not uniquely guitar. | teach only | yes |
| postal stamps | 郵便局で切手を買いました。 | I bought stamps at the post office. | きって | N5 L5 T5 C4 I3 | cloze+teach | yes |
| postal stamps | 手紙に切手を貼ってください。 | Please put a stamp on the letter. | きって | N5 L5 T5 C5 I4 | cloze+teach | yes |
| socks | すぐに靴下をはいてください。 | Put on your socks right away. | くつした | N5 L5 T5 C2 I3 — はく can apply to many wearable items (pants, shoes), so blank isn't uniquely 靴下. | teach only | yes |
| socks | 黒い靴下がありません。 | There are no black socks. | くつした | N5 L5 T5 C2 I2 — Many nouns could fill the blank (bag, shoes, etc.), low uniqueness. | teach only | yes |
| socks | 今日は青い靴下をはきます。 | Today I will wear blue socks. | くつした | N5 L5 T5 C3 I3 — はく still allows other clothing items, but color+season context helps narrow slightly. | teach only | yes |
| a tumbler | そのコップを洗ってください。 | Please wash that cup. | こっぷ | N4 L4 T5 C3 I3 — Blank could be filled by other washable objects, reducing uniqueness slightly. | teach only | yes |
| a tumbler | コップに水はありません。 | There is no water in the cup. | こっぷ | N4 L4 T5 C3 I3 — Other containers (グラス, ボトル) could fit the blank, reducing recoverability. | teach only | yes |
| to lose something | 私は切符を無くしました。 | I lost my ticket. | なくしました | N5 L5 T5 C3 I3 — Multiple verbs (買う, 忘れる) could fit the blank without more context. | teach only | yes |
| to lose something | 鍵を無くしましたか。 | Did you lose your key? | なくしました | N5 L5 T5 C3 I3 — Sentence alone doesn't strongly force 'lose' over 'forget' or 'find'. | teach only | yes |
| to lose something | 傘を無くしたくないです。 | I don't want to lose my umbrella. | なくしたくない | N5 L5 T5 C3 I3 — Could also fit 'break' or 'forget' without more context. | teach only | yes |
| to put side by side | 机の上に本を並べました。 | I lined up the books on the desk. | ならべました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to put side by side | お皿を並べてください。 | Please line up the plates. | ならべて | N5 L5 T5 C3 I3 — Blank could also be filled by 置いて or 片付けて. | teach only | yes |
| to put side by side | 椅子をきれいに並べたいです。 | I want to arrange the chairs neatly. | ならべたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to take off | 部屋で靴を脱ぎました。 | I took off my shoes in the room. | ぬぎました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to take off | 上着を脱ぎますか。 | Will you take off your jacket? | ぬぎます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to take off | 靴下を脱ぎたいです。 | I want to take off my socks. | ぬぎたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to drink | お茶を飲みますか。 | Will you drink some tea? | のみます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to drink | 冷たい水を飲みたいです。 | I want to drink cold water. | のみたい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to put on (items below your waist) | 新しい靴をはきました。 | I put on new shoes. | はきました | N5 L5 T5 C3 I3 — Blank could also be filled by 買う (bought) or 洗う (washed), reducing full recoverability. | teach only | yes |
| to put on (items below your waist) | 黒いズボンをはきますか。 | Will you wear black pants? | はきます | N5 L5 T5 C3 I3 — Context also allows 買います (buy) as a plausible fit for the blank. | teach only | yes |
| to put on (items below your waist) | 白い靴下をはきたいです。 | I want to wear white socks. | はきたい | N5 L5 T5 C3 I3 — 買いたい (want to buy) could also fit the blank given the context. | teach only | yes |
| to post | 封筒に切手を貼りました。 | I put a stamp on the envelope. | はりました | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to post | 部屋に写真を貼りましたか。 | Did you put up a photo in your room? | はりました | N5 L5 T5 C3 I3 — 飾りました (decorated) could also fit the blank. | teach only | yes |
| to post | カレンダーを部屋に貼りたいです。 | I want to put up a calendar in my room. | はりたい | N5 L5 T5 C3 I3 — 掛けたい or 飾りたい could also fit the blank. | teach only | yes |
| to wait | 友達を駅で待ちました。 | I waited for my friend at the station. | まちました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to wait | ここで待ちますか。 | Will you wait here? | まちます | N5 L5 T5 C2 I2 — Very generic; many verbs could fill the blank. | teach only | yes |
| to wait | 少し待ちたいです。 | I want to wait a little. | まちたい | N5 L5 T5 C3 I3 — Other verbs like 休みたい could also fit. | teach only | yes |
| warm | 今日は暖かいですから、公園まで歩きましょう。 | It's warm today, so let's walk to the park. | あたたかい | N5 L5 T5 C3 I4 | teach only | yes |
| warm | 今日は暖かくないです。 | It isn't warm today. | あたたかくない | N4 L5 T5 C2 I2 — Generic template sentence; blank could fit many adjectives. | teach only | yes |
| rain | 明日は雨ではありません。 | Tomorrow won't be rainy. | あめ | N4 L5 T5 C2 I2 — Blank could be filled by other weather words (晴れ, 雪), not uniquely 雨. | teach only | yes |
| rain | 傘を持ってください。雨ですから。 | Please bring an umbrella, since it's rainy. | あめ | N4 L5 T5 C4 I3 | cloze+teach | yes |
| pond | 公園に大きい池があります。 | There is a big pond in the park. | いけ | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (木、噴水、ベンチ), not uniquely 池. | teach only | yes |
| pond | あの池はどこにありますか。 | Where is that pond? | いけ | N5 L5 T5 C1 I2 — Very generic; blank could be any place noun. | teach only | yes |
| pond | この池は大きくないです。 | This pond isn't big. | いけ | N5 L5 T5 C1 I2 — Generic template sentence; blank not uniquely recoverable as 池. | teach only | yes |
| wind | 今日は風が強いです。 | The wind is strong today. | かぜ | N5 L5 T5 C3 I3 — 強い could pair with other nouns (光/力), slightly reducing uniqueness. | teach only | yes |
| wind | 今日は風がありません。 | There is no wind today. | かぜ | N4 L5 T5 C2 I2 — Blank could be filled by almost any noun (money, time, etc.), weak cloze cue. | teach only | yes |
| wind | 窓を閉めてください。風が強いですから。 | Please close the window, the wind is strong. | かぜ | N5 L5 T5 C5 I4 — Window-closing context strongly cues wind, making it a good cloze. | cloze+teach | yes |
| tree | 庭に木があります。 | There is a tree in the garden. | き | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (花, 犬, etc.), low recoverability. | teach only | yes |
| cloudiness | 明日は曇りです。 | Tomorrow will be cloudy. | くもり | N5 L5 T5 C2 I2 — Blank could be filled by any weather word (sunny, rainy, etc.), not uniquely 'cloudy'. | teach only | yes |
| cloudiness | 今日は曇りではありません。 | Today isn't cloudy. | くもり | N5 L5 T5 C2 I2 — Negative form doesn't narrow down which weather word is missing. | teach only | yes |
| cloudiness | 明日の天気は曇りですか。 | Will tomorrow's weather be cloudy? | くもり | N5 L5 T5 C2 I2 — Generic weather question; many weather nouns could fit the blank. | teach only | yes |
| to become cloudy | 空が曇りました。 | The sky became cloudy. | くもりました | N5 L5 T5 C3 I3 — 空が could also pair with 晴れる or 暗くなる, so not fully unique. | teach only | yes |
| to become cloudy | 今日は曇りません。 | It won't get cloudy today. | くもりません | N5 L5 T5 C2 I2 — Generic sentence; many verbs could fill the blank (雨が降りません, etc.). | teach only | yes |
| to become cloudy | 明日は曇りますか。 | Will it get cloudy tomorrow? | くもります | N5 L5 T5 C2 I2 — Blank could be filled with other weather verbs like 晴れますか or 雨が降りますか. | teach only | yes |
| aunt | おばさんはレストランで晩御飯を食べました。 | My aunt ate dinner at a restaurant. | おばさん | N4 L5 T5 C2 I3 — Blank could be filled with almost any person noun (friend, sister, etc.), low cloze recoverability. | teach only | yes |
| aunt | おばさんに手紙を書きたいです。 | I want to write a letter to my aunt. | おばさん | N4 L5 T5 C2 I3 — Context doesn't uniquely point to 'aunt'; many nouns fit the blank. | teach only | yes |
| aunt | 今日は寒いですが、おばさんは元気です。 | Today is cold, but my aunt is fine. | おばさん | N4 L5 T5 C2 I3 — Weather contrast doesn't narrow the blank to 'aunt' specifically. | teach only | yes |
| grandmother | おばあさんは学校の先生でした。 | My grandmother was a school teacher. | おばあさん | N5 L5 T5 C2 I3 — Blank could be filled by many family/role nouns, reducing recoverability. | teach only | yes |
| grandmother | おばあさんは毎朝歩きます。 | My grandmother walks every morning. | おばあさん | N5 L5 T5 C2 I2 — Generic sentence; blank fits many nouns (father, dog, etc.). | teach only | yes |
| grandmother | おばあさんと公園に行きたいです。 | I want to go to the park with my grandmother. | おばあさん | N5 L5 T5 C2 I3 — Context doesn't uniquely force 'grandmother'; many companions could fit. | teach only | yes |
| policeman | おまわりさんは交番にいます。 | The policeman is at the police box. | おまわりさん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| policeman | おまわりさんに駅までの道を聞きました。 | I asked the policeman for directions to the station. | おまわりさん | N5 L5 T5 C3 I4 — Blank could be filled by other people who give directions, slightly lowering recoverability. | teach only | yes |
| policeman | おまわりさんはいつも忙しいですか。 | Is the policeman always busy? | おまわりさん | N4 L5 T5 C2 I2 — Generic sentence; many professions could fill the blank. | teach only | yes |
| woman | レストランで女の人に会いました。 | I met a woman at the restaurant. | おんな | N5 L5 T5 C3 I3 — 男 could also fit grammatically, so context doesn't force 女 uniquely. | teach only | yes |
| girl | あの女の子は学生です。 | That girl is a student. | おんなのこ | N4 L5 T5 C2 I2 — Blank could be filled by many nouns (男の子, 学生, etc.), low uniqueness. | teach only | yes |
| girl | 女の子が公園で遊びました。 | The girl played in the park. | おんなのこ | N5 L5 T5 C3 I3 — Reasonable context but other subjects (子供, 男の子) could also fit. | teach only | yes |
| girl | 女の子と話したいです。 | I want to talk with the girl. | おんなのこ | N4 L5 T5 C2 I2 — Many nouns could fill the blank (友達, 人, etc.), weak cloze constraint. | teach only | yes |
| foreigner | あの外国人は英語が上手です。 | That foreigner is good at English. | がいこくじん | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other nouns like 学生 or 先生. | teach only | yes |
| foreigner | 外国人と英語で話しました。 | I talked with a foreigner in English. | がいこくじん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| -- honorific form for 人 -- | あの方は先生です。 | That person is a teacher. | かた | N5 L5 T5 C2 I2 — 人 could also fill the blank, so not fully forced; fairly generic sentence. | teach only | yes |
| -- honorific form for 人 -- | あの方はレストランで働きました。 | That person worked at a restaurant. | かた | N5 L4 T5 C2 I3 — 人 could also fit the blank; past tense with polite -mashita is fine for N5 but slightly less common in beginner texts. | teach only | yes |
| family | 家族と旅行に行きました。 | I went on a trip with my family. | かぞく | N5 L5 T5 C3 I3 — Other words like 友達 could also fit the blank grammatically. | teach only | yes |
| family | 家族は五人です。 | My family has five people. | かぞく | N5 L5 T5 C3 I3 — 兄弟 or other group words could also fit contextually. | teach only | yes |
| family | 家族と一緒に晩御飯を食べたいです。 | I want to eat dinner together with my family. | かぞく | N5 L4 T5 C3 I4 — たい form is N5-adjacent but acceptable; blank could also be filled by 友達 etc. | teach only | yes |
| which | どのバスに乗りますか。 | Which bus do you get on? | どの | N5 L5 T5 C4 I3 | cloze+teach | yes |
| which | どの部屋が広いですか。 | Which room is spacious? | どの | N5 L5 T5 C4 I3 | cloze+teach | yes |
| which | どの料理が好きですか。 | Which dish do you like? | どの | N5 L5 T5 C4 I3 | cloze+teach | yes |
| what | どんなニュースを聞きましたか。 | What kind of news did you hear? | どんな | N5 L5 T5 C3 I3 | teach only | yes |
| what | どんな料理を作りますか。 | What kind of dish will you make? | どんな | N5 L5 T5 C3 I3 | teach only | yes |
| what | どんな音楽が好きですか。 | What kind of music do you like? | どんな | N5 L5 T5 C3 I3 | teach only | yes |
| there isn't | 今晩、時間がないです。 | I don't have time tonight. | ない | N4 L4 T5 C4 I3 | cloze+teach | yes |
| there isn't | 冷蔵庫に卵がないです。 | There are no eggs in the fridge. | ない | N4 L4 T5 C4 I3 | cloze+teach | yes |
| there isn't | 兄から電話がないです。 | There's no call from my older brother. | ない | N4 L4 T5 C4 I3 | cloze+teach | yes |
| why (same as どうして) | なぜ電話しませんでしたか。 | Why didn't you call? | なぜ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| why (same as どうして) | なぜ野菜を食べませんか。 | Why don't you eat vegetables? | なぜ | N4 L4 T5 C4 I3 | cloze+teach | yes |
| et cetera | 卵や牛乳などを買いました。 | I bought eggs, milk, and other things. | など | N5 L5 T5 C5 I3 | cloze+teach | yes |
| et cetera | テレビやニュースなどを見ます。 | I watch TV, news, and other things. | など | N5 L5 T5 C5 I3 | cloze+teach | yes |
| et cetera | 兄や姉などが来ます。 | My older brother, older sister, and others are coming. | など | N4 L5 T5 C4 I3 — など with people list is slightly less natural but acceptable. | cloze+teach | yes |
| to become | 忙しくなりましたから、電話しませんでした。 | Because I became busy, I didn't call. | なりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to become | 料理が上手になりました。 | I became good at cooking. | なりました | N5 L5 T5 C5 I3 | cloze+teach | yes |
| what sort of ~ | 今、何時ですか。 | What time is it now? | なん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| what sort of ~ | 電話で何と言いましたか。 | What did you say on the phone? | なん | N5 L4 T5 C4 I4 | cloze+teach | yes |
| what sort of ~ | それは何ですか。 | What is that? | なん | N4 L5 T5 C3 I1 — Generic template sentence, low interest. | teach only | yes |
| news | 今、テレビでニュースを見ています。 | I'm watching the news on TV now. | にゅうす | N5 L5 T5 C3 I3 — Blank could be filled with many nouns like 映画 or 番組, not uniquely ニュース. | teach only | yes |
| news | 今朝、悪いニュースを聞きました。 | This morning, I heard bad news. | にゅうす | N5 L5 T5 C4 I4 | cloze+teach | yes |
| news | ニュースを見てから、晩御飯を作ります。 | After watching the news, I'll make dinner. | にゅうす | N5 L4 T5 C3 I3 — Blank could also be filled with テレビ or 映画, reducing uniqueness. | teach only | yes |
| to be different | これはそれと違います。 | This is different from that. | ちがいます | N4 L5 T5 C3 I2 — Generic template sentence; 似ています could also fit the blank contextually. | teach only | yes |
| to be different | その歌はこの歌と違いました。 | That song was different from this song. | ちがいました | N4 L5 T5 C3 I3 — Slightly more specific than sentence 0, but 似ました could also fill the blank. | teach only | yes |
| to be different | この料理は写真と違いますか。 | Is this dish different from the picture? | ちがいます | N5 L5 T5 C4 I4 — Natural, relatable context (food vs. photo) makes 違います the clear expected answer. | cloze+teach | yes |
| just | 授業は丁度九時に始まります。 | Class starts at exactly nine o'clock. | ちょうど | N5 L5 T5 C4 I3 | cloze+teach | yes |
| then | では、私は帰ります。 | Well then, I will go home. | では | N5 L5 T5 C3 I3 — でも or それで could also fit grammatically, slightly reducing uniqueness. | teach only | yes |
| then | では、また明日。 | Well then, see you tomorrow. | では | N5 L5 T5 C4 I4 | cloze+teach | yes |
| but | 天気は悪いです。でも、公園へ行きます。 | The weather is bad. But I will go to the park. | でも | N5 L5 T5 C5 I3 | cloze+teach | yes |
| but | コーヒーが好きです。でも、紅茶も好きです。 | I like coffee. But I also like tea. | でも | N4 L5 T5 C3 I3 — weak contrast makes でも less uniquely forced; そして could also fit | teach only | yes |
| but | 忙しいです。でも、宿題をします。 | I am busy. But I will do my homework. | でも | N5 L5 T5 C4 I3 | cloze+teach | yes |
| how | 天気はどうですか。 | How is the weather? | どう | N5 L5 T5 C3 I3 — Blank could also be filled with いい etc., slightly reducing uniqueness. | teach only | yes |
| how | この料理はどうですか。 | How is this dish? | どう | N5 L5 T5 C3 I3 — Common phrase but blank not fully unique (e.g., おいしい could fit). | teach only | yes |
| how | 旅行はどうでしたか。 | How was the trip? | どう | N5 L5 T5 C3 I3 — Natural past-tense question; other adjectives could theoretically fill the blank. | teach only | yes |
| please | どうぞ、座ってください。 | Please sit down. | どうぞ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| please | どうぞ、こちらへ。 | Please, this way. | どうぞ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| please | どうぞ、食べてください。 | Please eat. | どうぞ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| which (one) (way) | どちらが好きですか。 | Which one do you like? | どちら | N5 L5 T5 C2 I2 — Blank could equally be filled by 何 or これ without more context, reducing recoverability. | teach only | yes |
| which (one) (way) | 駅はどちらですか。 | Which way is the station? | どちら | N5 L5 T5 C4 I3 | cloze+teach | yes |
| which (one) (way) | 紅茶とコーヒー、どちらがいいですか。 | Tea or coffee, which is better? | どちら | N5 L5 T5 C5 I4 | cloze+teach | yes |
| unskillful | 私は料理が下手です。 | I am bad at cooking. | へた | N5 L5 T5 C2 I2 — Blank could equally be 上手 or 好き, so context doesn't uniquely force 下手. | teach only | yes |
| unskillful | 弟は絵が下手じゃありません。 | My younger brother isn't bad at drawing. | へた | N5 L5 T5 C2 I2 — Negative form still leaves multiple plausible words (上手, 好き) for the blank. | teach only | yes |
| unskillful | 英語が下手ですから、電話で話しません。 | Since I'm bad at English, I don't talk on the phone. | へた | N5 L5 T5 C5 I4 — Cause-effect context (avoiding phone calls) strongly forces 下手 as the answer. | cloze+teach | yes |
| convenient | 電話は便利ですから、よく使います。 | Phones are convenient, so I use them often. | べんり | N5 L5 T5 C3 I3 — Blank could also be filled by words like 大切 or 大事. | teach only | yes |
| convenient | この地図は便利ですから、使いましょう。 | This map is convenient, so let's use it. | べんり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to want | 誕生日に何が欲しいですか。 | What do you want for your birthday? | ほしい | N5 L5 T5 C3 I4 — Could also be filled with いい (何がいいですか), reducing uniqueness. | teach only | yes |
| to want | 友達が来ますから、お菓子が欲しいです。 | Since a friend is coming, I want some sweets. | ほしい | N4 L4 T5 C2 I3 — Blank could plausibly be filled with 好き, 必要, or other adjectives, weakening cloze recoverability. | teach only | yes |
| terrible (in reference to food) | 母の料理はまずくないです。 | My mother's cooking isn't bad. | まずく | N4 L5 T4 C2 I3 — Blank could be filled by many adjectives (e.g. おいしく), not uniquely まずく. | teach only | yes |
| straight (ahead) | 駅までまっすぐ歩きます。 | I walk straight to the station. | まっすぐ | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other manner adverbs like ゆっくり or はやく, slightly reducing forced recall. | teach only | yes |
| straight (ahead) | この道をまっすぐ来てください。 | Please come straight down this road. | まっすぐ | N5 L5 T5 C3 I3 — Other adverbs (はやく, ゆっくり) could also fit grammatically, lowering uniqueness of the answer. | teach only | yes |
| straight (ahead) | あそこまでまっすぐ行きましょう。 | Let's go straight to that place. | まっすぐ | N5 L5 T5 C3 I3 — Context allows other directional adverbs, so the blank isn't uniquely determined. | teach only | yes |
| short (length) | 母からの手紙は短いです。 | The letter from my mother is short. | みじかい | N5 L5 T5 C2 I3 — Blank could be filled with many adjectives (長い, 古い, etc.), not uniquely recoverable. | teach only | yes |
| short (length) | この道は短くないです。 | This road isn't short. | みじかく | N5 L4 T5 C2 I2 — Negative adjective form is fine but blank could be many other adjectives negated. | teach only | yes |
| green | 庭の木は緑です。 | The tree in the garden is green. | みどり | N5 L5 T5 C2 I2 — Any color word could fill the blank, weak cloze constraint. | teach only | yes |
| green | 野菜の色は緑です。 | The color of the vegetable is green. | みどり | N5 L5 T5 C2 I2 — Vegetables can be many colors, so the blank isn't uniquely determined. | teach only | yes |
| green | この色は緑ですか。 | Is this color green? | みどり | N5 L5 T5 C2 I2 — Generic question; any color could fit the blank. | teach only | yes |
| (my) older brother (humble) | 兄は八百屋で果物を買いました。 | My brother bought fruit at the grocery store. | あに | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (father, friend, etc.), not uniquely recoverable as 兄. | teach only | yes |
| (my) older brother (humble) | 兄は今朝から頭が痛いです。 | My brother's head has been hurting since this morning. | あに | N5 L5 T5 C2 I3 — Any person could have a headache; context doesn't force 兄 specifically. | teach only | yes |
| (my) older brother (humble) | 兄と一緒に映画を見ませんか。 | Won't you watch a movie with my brother? | あに | N4 L5 T4 C2 I3 — Translation slightly awkward ('with my brother' as an invitation is unusual); blank not uniquely recoverable. | teach only | yes |
| (my) older sister (humble) | 姉は毎朝六時に起きます。 | My sister gets up at six every morning. | あね | N5 L5 T5 C2 I2 — Generic sentence; any subject noun (私, 母, 父, etc.) could fit the blank equally well. | teach only | yes |
| (my) older sister (humble) | 姉は今晩何を作りますか。 | What is your sister going to make tonight? | あね | N5 L5 T5 C2 I2 — Any family member or person could be used as the subject, so context doesn't uniquely force 姉. | teach only | yes |
| to be born | 弟は去年の冬に生まれました。 | My younger brother was born last winter. | うまれました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be born | あなたはどこで生まれましたか。 | Where were you born? | うまれました | N5 L5 T5 C3 I3 — Multiple verbs (lived, worked, born) could fit the blank. | teach only | yes |
| to be born | 病院で子供が生まれました。 | A child was born at the hospital. | うまれました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| (someone else's) wife (honorific) | 友達の奥さんは元気ですか。 | Is your friend's wife well? | おくさん | N5 L5 T5 C3 I2 — Blank could also be filled by other family terms like お母さん, so recoverability is moderate. | teach only | yes |
| (someone else's) wife (honorific) | 奥さんは公園で子供と遊びます。 | His wife plays with the children in the park. | おくさん | N4 L5 T4 C2 I2 — Whose wife is ambiguous without prior context, and other nouns (お母さん, 友達) could fit the blank equally well. | teach only | yes |
| (someone else's) wife (honorific) | 奥さんと一緒にお茶を飲みませんか。 | Won't you have tea with his wife? | おくさん | N4 L5 T4 C2 I2 — Generic invitation sentence; many people-nouns could fill the blank, reducing recoverability. | teach only | yes |
| uncle | おじさんは毎朝新聞を読みます。 | My uncle reads the newspaper every morning. | おじさん | N5 L5 T5 C2 I3 — Blank is the subject, so many nouns (father, brother, etc.) could fit; context doesn't force 'uncle'. | teach only | yes |
| uncle | おじさんと一緒に山に登りましょう。 | Let's climb the mountain with my uncle. | おじさん | N5 L5 T5 C2 I3 — Blank subject could be any companion (friend, brother, etc.), not uniquely 'uncle'. | teach only | yes |
| grandfather | おじいさんは毎晩九時に寝ます。 | My grandfather goes to bed at nine every night. | おじいさん | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (father, cat, etc.), low recoverability. | teach only | yes |
| grandfather | おじいさんは今日元気ですか。 | Is your grandfather well today? | おじいさん | N5 L5 T5 C2 I2 — Generic greeting sentence; many family nouns fit the blank. | teach only | yes |
| grandfather | おじいさんと一緒に公園を歩きましょう。 | Let's walk in the park with grandfather. | おじいさん | N5 L5 T5 C2 I3 — Slightly more context but still multiple nouns could fill the blank. | teach only | yes |
| boy | あの男の子は公園で遊びます。 | That boy plays in the park. | おとこのこ | N5 L5 T5 C2 I2 — Blank could be filled by many nouns like 子供, 女の子, 人. | teach only | yes |
| boy | あの男の子は誰ですか。 | Who is that boy? | おとこのこ | N5 L5 T5 C2 I2 — Context doesn't force 男の子 specifically; could be 人, 女の子, etc. | teach only | yes |
| boy | 男の子はあの犬と遊びたいです。 | The boy wants to play with that dog. | おとこのこ | N5 L5 T5 C2 I2 — Many nouns (女の子, 子供, 猫) could fit the blank equally well. | teach only | yes |
| adult | 切符は大人二百円です。 | The ticket is two hundred yen for adults. | おとな | N5 L5 T5 C5 I4 | cloze+teach | yes |
| adult | この映画は大人だけですか。 | Is this movie for adults only? | おとな | N5 L5 T5 C4 I4 | cloze+teach | yes |
| a ticket | 駅で切符を買いました。 | I bought a ticket at the station. | きっぷ | N5 L5 T5 C3 I3 — Blank could be filled by many purchasable items (弁当, 新聞, etc.), reducing recoverability. | teach only | yes |
| a ticket | 切符を見せてください。 | Please show me your ticket. | きっぷ | N5 L5 T5 C2 I3 — Many objects could be shown (パスポート, 免許証, etc.), so blank isn't uniquely determined. | teach only | yes |
| a ticket | 切符はどこにありますか。 | Where is the ticket? | きっぷ | N4 L5 T5 C2 I2 — Generic 'where is the ___' template fits countless nouns, low cloze specificity. | teach only | yes |
| car | 父の車は赤いです。 | My father's car is red. | くるま | N5 L5 T5 C2 I3 — Many nouns could fill the blank (bag, house, etc.), not uniquely 車. | teach only | yes |
| car | 車で公園へ行きましょう。 | Let's go to the park by car. | くるま | N5 L5 T5 C3 I3 — Other vehicle words (バス, 自転車) could also fit grammatically. | teach only | yes |
| automobile | 自動車の会社で働いています。 | I work at an automobile company. | じどうしゃ | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (food, car, electronics company), low recoverability. | teach only | yes |
| automobile | 自動車は危ないです。 | Automobiles are dangerous. | じどうしゃ | N5 L5 T5 C2 I2 — Generic adjective sentence; many nouns could be 'dangerous'. | teach only | yes |
| automobile | 自動車が好きじゃありません。 | I don't like automobiles. | じどうしゃ | N5 L5 T5 C2 I2 — Template-like preference sentence; low cloze specificity. | teach only | yes |
| underground train | 地下鉄で会社へ行きます。 | I go to work by subway. | ちかてつ | N5 L5 T5 C3 I3 — Other transport words (バス, 電車) could also fit the blank. | teach only | yes |
| underground train | 地下鉄の駅は遠いですか。 | Is the subway station far? | ちかてつ | N5 L5 T5 C3 I3 — Blank could be filled by other transit nouns like 電車 or バス. | teach only | yes |
| underground train | 今日は地下鉄に乗りませんでした。 | I didn't take the subway today. | ちかてつ | N5 L5 T5 C3 I3 — Context allows other transportation words to fit the blank. | teach only | yes |
| electric train | 電車はもう出ましたか。 | Has the train already left? | でんしゃ | N5 L5 T5 C3 I3 — Could also be bus, plane, etc.; context doesn't force 電車 specifically. | teach only | yes |
| electric train | 次の電車を待ってください。 | Please wait for the next train. | でんしゃ | N5 L5 T5 C3 I3 — Blank could be filled by other vehicles like バス or タクシー. | teach only | yes |
| electric train | 電車に乗りたいです。 | I want to ride the train. | でんしゃ | N5 L5 T5 C2 I2 — Very generic; many transport nouns fit the blank equally well. | teach only | yes |
| luggage | 荷物を持ってください。 | Please carry the luggage. | にもつ | N5 L5 T5 C2 I3 — Many nouns could fill the blank (book, umbrella, etc.), reducing cloze recoverability. | teach only | yes |
| luggage | 荷物が重いです。 | The luggage is heavy. | にもつ | N5 L5 T5 C2 I2 — Generic sentence; blank could be filled by many nouns describing weight. | teach only | yes |
| luggage | 荷物がありません。 | I don't have any luggage. | にもつ | N5 L5 T5 C2 I2 — Very generic 'I don't have any ___' pattern, low cloze specificity. | teach only | yes |
| bus | バスに乗って学校へ行きます。 | I take the bus to school. | ばす | N5 L5 T5 C2 I3 — Blank could be filled by many transport words (train, taxi, etc.), reducing recoverability. | teach only | yes |
| bus | 今日はバスがありません。 | There is no bus today. | ばす | N5 L5 T5 C2 I3 — Context doesn't uniquely force 'bus'; other vehicles/services could fit. | teach only | yes |
| to vanish | 電気が消えたから、暗いです。 | Because the light went out, it's dark. | きえた | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to cut | 野菜を切ってください。 | Please cut the vegetables. | きって | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to cut | 今日は紙を切りません。 | I will not cut paper today. | きりません | N4 L5 T4 C3 I2 — Several verbs (破る, 使う) could also fit the blank. | teach only | yes |
| to put on (clothes above your waist) | 会社でセーターを着ます。 | I wear a sweater at the office. | きます | N4 L5 T5 C3 I2 — Reading uses hiragana for katakana long vowel (せえたあ) which is nonstandard but phonetically fine; blank could also be 買います/持っています. | teach only | yes |
| to put on (clothes above your waist) | 今朝は上着を着ませんでした。 | I didn't put on a jacket this morning. | きませんでした | N5 L5 T5 C3 I3 — Blank could also fit 脱ぎませんでした or similar verbs. | teach only | yes |
| to put on (clothes above your waist) | 新しいシャツを着たいです。 | I want to wear a new shirt. | きたい | N5 L5 T5 C3 I3 — Blank could also be 買いたい, slightly reducing recoverability. | teach only | yes |
| to erase | 電気を消してください。 | Please turn off the light. | けして | N5 L5 T5 C2 I3 — つける (turn on) also fits the blank grammatically, reducing recoverability. | teach only | yes |
| to erase | 電気を消したから、部屋は暗いです。 | Because I turned off the light, the room is dark. | けした | N4 L4 T5 C5 I4 — から clause is slightly above strict N5 but common; darkness context forces 消した uniquely. | cloze+teach | yes |
| to close | ドアを閉めてください。 | Please close the door. | しめて | N5 L5 T5 C3 I3 — Could also be 開けて (open) grammatically, so blank isn't fully forced. | teach only | yes |
| to close | 窓を閉めませんでした。 | I didn't close the window. | しめませんでした | N5 L5 T5 C3 I3 — 開けませんでした (didn't open) also fits the blank equally well. | teach only | yes |
| to tie | 会社でネクタイを締めます。 | I tie my necktie at the office. | しめます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| one person | 弟は一人で病院へ行きました。 | My younger brother went to the hospital alone. | ひとり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| one person | 一人で旅行したいです。 | I want to travel alone. | ひとり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| hundred | 朝、百メートル歩きたいです。 | I want to walk a hundred meters in the morning. | ひゃく | N4 L5 T5 C3 I3 — Any number could fit the blank grammatically, reducing recoverability slightly. | teach only | yes |
| hundred | 駅まで百メートルですか。 | Is it a hundred meters to the station? | ひゃく | N4 L5 T5 C3 I3 — Blank could be filled by other numbers too. | teach only | yes |
| two things | 朝御飯に卵を二つ食べました。 | I ate two eggs for breakfast. | ふたつ | N5 L5 T5 C2 I3 — Any number word could fill the blank, so context doesn't force 'two' specifically. | teach only | yes |
| two things | 荷物は二つですか。 | Are there two pieces of luggage? | ふたつ | N5 L5 T5 C2 I2 — Generic question; any counter number could fit the blank. | teach only | yes |
| two people | 二人で病院へ行きました。 | The two of us went to the hospital. | ふたり | N5 L5 T5 C3 I2 | teach only | yes |
| two people | 朝、二人で公園を歩きますか。 | Do the two of you walk in the park in the morning? | ふたり | N5 L5 T5 C3 I3 | teach only | yes |
| counter for flat things | 朝、切符を二枚買いました。 | I bought two tickets in the morning. | まい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| counter for flat things | 紙が三枚欲しいです。 | I want three sheets of paper. | まい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| counter for flat things | ハンカチが何枚要りますか。 | How many handkerchiefs do you need? | まい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| ten thousand | 旅行に一万円使いました。 | I spent ten thousand yen on the trip. | まん | N5 L5 T5 C2 I3 — Blank could equally be 千 or 百, context doesn't force 万. | teach only | yes |
| ten thousand | お金が一万円欲しいです。 | I want ten thousand yen. | まん | N5 L5 T5 C2 I2 — Same ambiguity as other sentences; generic desire sentence. | teach only | yes |
| ten thousand | 切符は一万円ですか。 | Is the ticket ten thousand yen? | まん | N4 L5 T5 C2 I3 — Ambiguous amount, could be any number word. | teach only | yes |
| three things | 朝、卵を三つ食べました。 | I ate three eggs this morning. | みっつ | N5 L5 T5 C2 I3 — Any counter number could fill the blank; context doesn't force 'three'. | teach only | yes |
| three things | 箱が三つ欲しいです。 | I want three boxes. | みっつ | N5 L5 T5 C2 I2 — Generic sentence; blank could be any number. | teach only | yes |
| three things | 果物は三つですか。 | Are there three pieces of fruit? | みっつ | N4 L5 T5 C2 I2 — Blank could be any number; lacks distinguishing context. | teach only | yes |
| six things | 朝、お菓子を六つ食べました。 | I ate six sweets this morning. | むっつ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| six things | お皿が六つ欲しいです。 | I want six plates. | むっつ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| six things | 卵は六つですか。 | Are there six eggs? | むっつ | N4 L5 T5 C4 I2 — Slightly generic template sentence. | cloze+teach | yes |
| gram | 砂糖を二百グラム入れてください。 | Please put in two hundred grams of sugar. | ぐらむ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| gram | 牛肉を三百グラム買いました。 | I bought three hundred grams of beef. | ぐらむ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| five | 五時に会社を出ます。 | I leave the office at five o'clock. | ご | N5 L5 T5 C3 I3 — Any number could fill the blank, so context doesn't force 'five' specifically. | teach only | yes |
| five | 五時に駅で会ってください。 | Please meet me at the station at five. | ご | N5 L5 T5 C3 I3 — Any time word fits equally well, limiting cloze specificity. | teach only | yes |
| five | 今日は五時に帰りません。 | I'm not going home at five today. | ご | N5 L5 T5 C3 I3 — Negative form adds slight variety but blank still allows any number. | teach only | yes |
| nine things | 卵を九つ使いました。 | I used nine eggs. | ここのつ | N5 L5 T5 C2 I3 — Any number could fit grammatically, limiting cloze recoverability. | teach only | yes |
| nine things | お菓子を九つください。 | Please give me nine pieces of candy. | ここのつ | N5 L5 T5 C2 I3 — Any number could fit grammatically, limiting cloze recoverability. | teach only | yes |
| nine things | 箱は九つもありません。 | There aren't even nine boxes. | ここのつ | N5 L4 T5 C2 I4 — も with negative is slightly beyond core N5 but common; number still not uniquely forced. | teach only | yes |
| ~ years old | 弟は九歳です。 | My younger brother is nine years old. | さい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| ~ years old | お父さんは何歳ですか。 | How old is your father? | さい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| counter for books | 図書館で本を三冊借りました。 | I borrowed three books from the library. | さつ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| counter for books | 雑誌を二冊ください。 | Please give me two magazines. | さつ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| three | 本を三冊借りたいです。 | I want to borrow three books. | さん | N5 L4 T5 C2 I3 — Any number could fill the blank; context doesn't force 'three' specifically. | teach only | yes |
| three | 授業は三時からですか。 | Does class start at three o'clock? | さん | N5 L4 T5 C2 I3 — Any time could fit grammatically; number itself isn't uniquely recoverable from context. | teach only | yes |
| four | 四人家族です。 | We are a family of four. | よ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| four | 四時にはまだ着きません。 | I won't arrive by four o'clock yet. | よ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| four | 切符を四枚ください。 | Please give me four tickets. | よん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| fall | 秋は涼しいです。 | Fall is cool. | あき | N5 L5 T5 C2 I2 — Blank could be filled by other seasons (spring also cool), low uniqueness. | teach only | yes |
| fall | 秋に旅行しませんか。 | Shall we travel in the fall? | あき | N5 L5 T5 C2 I3 — Any season/time word could fit the blank equally well. | teach only | yes |
| fall | 秋に山に登りたいです。 | I want to climb a mountain in the fall. | あき | N5 L5 T5 C3 I4 — Mountain climbing hints at autumn but summer also plausible. | teach only | yes |
| day after tomorrow | 明後日、映画を見ませんか。 | Shall we watch a movie the day after tomorrow? | あさって | N5 L5 T5 C3 I3 — Blank could also be filled by 明日 or 今日, so not fully forced. | teach only | yes |
| day after tomorrow | 明後日、学校へ行きますか。 | Will you go to school the day after tomorrow? | あさって | N5 L5 T5 C3 I2 — Generic template; blank could accept other time words. | teach only | yes |
| day after tomorrow | 明後日は友達が家に来ます。 | The day after tomorrow, a friend will come to my house. | あさって | N5 L5 T5 C3 I3 — Slightly more context but still allows other time expressions in the blank. | teach only | yes |
| afterwards | 授業の後、公園で遊びましょう。 | Let's play in the park after class. | あと | N5 L5 T5 C3 I3 — 前 could also fit grammatically in the blank, reducing certainty. | teach only | yes |
| one day (duration) | 一日、家で本を読みました。 | I read books at home for one day. | いちにち | N4 L5 T5 C3 I2 — Many duration words (二時間, 午前中 etc.) could fill the blank, reducing forced recall. | teach only | yes |
| one day (duration) | 一日、海で泳ぎたいです。 | I want to swim in the sea for a day. | いちにち | N4 L5 T5 C3 I2 — Blank could be filled by other duration expressions, not uniquely 一日. | teach only | yes |
| five days | 五日から旅行に行きます。 | I'm going on a trip starting on the 5th. | いつか | N5 L5 T4 C2 I3 — Target word defined as 'five days' but sentence uses 五日 as a date ('the 5th'); many other dates could fit the blank. | teach only | yes |
| five days | 五日に友達が来ますか。 | Is a friend coming on the 5th? | いつか | N5 L5 T4 C2 I3 — Same issue: 五日 here means 'the 5th (date)', not 'five days', and other day-numbers could fill the blank. | teach only | yes |
| five days | 誕生日は五日です。 | My birthday is the 5th. | いつか | N5 L5 T4 C2 I2 — Generic birthday-date sentence; 五日 used as a date, not duration, and could be replaced by other date words. | teach only | yes |
| always | いつも六時に起きます。 | I always wake up at six. | いつも | N5 L5 T5 C3 I3 — Other frequency adverbs (よく, まいにち) could also fit the blank. | teach only | yes |
| always | いつも何を食べますか。 | What do you always eat? | いつも | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other adverbs like よく or まいにち. | teach only | yes |
| always | 母はいつも忙しいです。 | My mother is always busy. | いつも | N5 L5 T5 C3 I3 — とても or よく could also fit grammatically, slightly reducing uniqueness. | teach only | yes |
| the day before yesterday | おととい友達に会いました。 | I met a friend the day before yesterday. | おととい | N5 L5 T5 C2 I3 — Time word blank could be replaced by other time expressions like きのう or 先週, reducing recoverability. | teach only | yes |
| the day before yesterday | おととい、何をしましたか。 | What did you do the day before yesterday? | おととい | N5 L5 T5 C2 I3 — Same issue: many time adverbs could fit the blank without more context. | teach only | yes |
| the day before yesterday | おととい雨が降りました。 | It rained the day before yesterday. | おととい | N5 L5 T5 C2 I3 — Blank could be filled by other time words such as きのう or 先週, weakening cloze uniqueness. | teach only | yes |
| year before last | おととし、どこに住みましたか。 | Where did you live the year before last? | おととし | N4 L5 T5 C2 I3 — Any time expression (last year, this year, etc.) could fill the blank, so it's not uniquely recoverable. | teach only | yes |
| year before last | おととし国へ帰りました。 | I returned to my country the year before last. | おととし | N5 L5 T5 C2 I3 — Blank could be filled by many time words (last year, this year, etc.). | teach only | yes |
| fountain pen | 会社でこの万年筆を使ってください。 | Please use this fountain pen at the office. | まんねんひつ | N5 L5 T5 C2 I2 — Blank could be filled by many objects (pen, phone, computer), so cloze recoverability is weak. | teach only | yes |
| fountain pen | 店で新しい万年筆を買いました。 | I bought a new fountain pen at the store. | まんねんひつ | N5 L5 T5 C2 I2 — Generic 'bought new X at the store' sentence; many nouns fit the blank. | teach only | yes |
| fountain pen | 万年筆が好きですから、毎日使います。 | I like fountain pens, so I use one every day. | まんねんひつ | N4 L3 T5 C3 I3 — から (reason) is slightly above strict N5 grammar; blank still allows other objects that one 'likes and uses daily'. | teach only | yes |
| eye glasses | 今日は眼鏡をかけていません。 | I'm not wearing glasses today. | めがね | N5 L5 T5 C4 I4 | cloze+teach | yes |
| eye glasses | 眼鏡を取ってください。 | Please pick up the glasses. | めがね | N5 L5 T5 C2 I3 — Many objects could fill the blank with 取ってください. | teach only | yes |
| eye glasses | 眼鏡をテーブルの上に置きました。 | I put the glasses on the table. | めがね | N5 L5 T5 C2 I3 — Many objects could be placed on a table, weak cloze constraint. | teach only | yes |
| Western-style clothes | デパートで洋服を買いました。 | I bought Western clothes at the department store. | ようふく | N5 L5 T5 C3 I3 | teach only | yes |
| Western-style clothes | 洋服が汚いですから、洗濯します。 | The clothes are dirty, so I'll do laundry. | ようふく | N4 L4 T5 C3 I4 — から clause slightly above pure N5 but commonly taught early. | teach only | yes |
| Western-style clothes | その洋服を見せてください。 | Please show me those clothes. | ようふく | N5 L5 T5 C2 I3 — Blank could be filled by many nouns, low cloze recoverability. | teach only | yes |
| radio | 車の中でラジオを聞きます。 | I listen to the radio in the car. | らじお | N5 L5 T5 C2 I3 — Blank could be filled by many nouns like 音楽, ニュース, CD, so context doesn't force 'radio'. | teach only | yes |
| radio | 会社ではラジオを聞きません。 | I don't listen to the radio at the office. | らじお | N5 L5 T5 C2 I3 — Same issue: 音楽 or ニュース could also fit the blank. | teach only | yes |
| radio | ラジオが好きですから、毎晩聞きます。 | I like the radio, so I listen every night. | らじお | N4 L4 T5 C2 I3 — から clause is borderline N5/N4 but common; blank could be filled by many liked things (音楽, 車 etc). | teach only | yes |
| refrigerator | 冷蔵庫に牛乳を入れました。 | I put the milk in the refrigerator. | れいぞうこ | N5 L5 T5 C3 I3 | teach only | yes |
| refrigerator | 冷蔵庫を閉めてください。 | Please close the refrigerator. | れいぞうこ | N5 L5 T5 C3 I3 | teach only | yes |
| record | このレコードは古いです。 | This record is old. | れこうど | N4 L5 T5 C2 I2 — Many nouns could fill the blank (car, book, etc.), reducing recoverability. | teach only | yes |
| record | レコードが好きですから、毎日聞きます。 | I like records, so I listen every day. | れこうど | N5 L4 T5 C3 I4 — Good natural sentence; blank still allows other listening-related nouns like music or radio. | teach only | yes |
| shirt (lit: white shirt) | 会社にワイシャツを着ていきます。 | I wear a dress shirt to the office. | わいしゃつ | N5 L5 T5 C3 I3 — Blank could be filled by other clothing nouns like スーツ or 服. | teach only | yes |
| shirt (lit: white shirt) | 白いワイシャツを見せてください。 | Please show me a white dress shirt. | わいしゃつ | N5 L5 T5 C3 I3 — White + clothing item could be many nouns, not uniquely ワイシャツ. | teach only | yes |
| shirt (lit: white shirt) | ワイシャツが汚いですから、洗濯します。 | The dress shirt is dirty, so I'll do laundry. | わいしゃつ | N5 L4 T5 C3 I3 — から causal clause is slightly above pure N5 but common; blank could be other clothing items. | teach only | yes |
| already | もうバスが来ました。 | The bus has already come. | もう | N5 L5 T5 C3 I3 — また could also fit grammatically, slightly reducing recoverability | teach only | yes |
| already | もう時間がありません。 | There is already no time. | もう | N5 L5 T5 C3 I3 — まだ could also fit the blank with different meaning | teach only | yes |
| already | もう晩御飯を食べましたか。 | Have you already eaten dinner? | もう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| more | もっと塩を入れてください。 | Please add more salt. | もっと | N5 L5 T5 C4 I4 | cloze+teach | yes |
| more | もっと大きい家が欲しいです。 | I want a bigger house. | もっと | N5 L5 T5 C4 I4 | cloze+teach | yes |
| thing (concrete object) | 台所に古い物がたくさんあります。 | There are many old things in the kitchen. | もの | N4 L5 T5 C2 I3 — Natural sentence but blank could be filled by many nouns (皿, 服, etc.), not uniquely 物. | teach only | yes |
| a problem | 今、大きい問題はありません。 | There is no big problem now. | もんだい | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other nouns like 店 or 家, slightly reducing recoverability. | teach only | yes |
| a problem | この問題は難しいです。 | This problem is difficult. | もんだい | N5 L5 T5 C2 I2 — Very generic template; many nouns (本、漢字、テスト) could fit the blank equally well. | teach only | yes |
| a problem | 先生、この問題を教えてください。 | Teacher, please teach me this problem. | もんだい | N4 L5 T4 C3 I3 — '教えて' translates more as 'explain' than 'teach'; blank could also be filled with 漢字 or 言葉. | teach only | yes |
| frequently | 母はよく料理を作ります。 | My mother often cooks. | よく | N5 L5 T5 C3 I3 — Other frequency adverbs like いつも/たまに could also fit the blank. | teach only | yes |
| frequently | 私はよく電車に乗ります。 | I often ride the train. | よく | N5 L5 T5 C3 I3 — Other frequency adverbs could also fit the blank. | teach only | yes |
| frequently | あなたはよく公園へ行きますか。 | Do you often go to the park? | よく | N5 L5 T5 C3 I3 — Other frequency adverbs could also fit the blank. | teach only | yes |
| to understand | この漢字が分かりますか。 | Do you understand this kanji? | わかります | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to forget | 名前を忘れませんでした。 | I did not forget the name. | わすれませんでした | N4 L5 T5 C3 I3 — Blank could also fit words like 覚える or 言う, slightly reducing recoverability. | teach only | yes |
| to forget | 傘を忘れないでください。 | Please don't forget your umbrella. | わすれないでください | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to forget | 昨日、宿題を忘れました。 | Yesterday I forgot my homework. | わすれました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| well then | じゃ、行きましょう。 | Well then, let's go. | じゃ | N5 L5 T5 C3 I3 — Other transition words like では/さあ could also fit the blank. | teach only | yes |
| well then | じゃ、もう出かけましょう。 | Well then, let's leave already. | じゃ | N5 L5 T5 C3 I3 — Similar to other synonyms; slight ambiguity in blank recovery. | teach only | yes |
| well then | じゃ、晩御飯を作りましょう。 | Well then, let's make dinner. | じゃ | N5 L5 T5 C3 I3 — Blank could be filled by other transition expressions like では. | teach only | yes |
| every year | 毎年冬に雪が降ります。 | It snows every year in winter. | まいとし | N5 L5 T5 C3 I3 — Other time words like 今年 could also fit the blank grammatically, slightly lowering cloze certainty. | teach only | yes |
| to do | 今晩、何をしますか。 | What are you going to do tonight? | します | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to do | 明日、宿題をしましょう。 | Let's do homework tomorrow. | しましょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to do | 今日は仕事をしません。 | I'm not doing work today. | しません | N5 L5 T5 C4 I3 | cloze+teach | yes |
| washing | 母は毎朝、洗濯をします。 | My mother does the laundry every morning. | せんたく | N5 L5 T5 C2 I3 — Blank could be replaced by other chores like 掃除 or 料理; context doesn't uniquely force 洗濯. | teach only | yes |
| washing | 天気がいいから、洗濯をしましょう。 | Since the weather is nice, let's do the laundry. | せんたく | N5 L5 T5 C3 I4 — Nice weather could suggest other activities like 散歩 too, but 洗濯 is a common association. | teach only | yes |
| washing | 雨だから、洗濯をしませんでした。 | Since it was raining, I didn't do the laundry. | せんたく | N5 L5 T5 C3 I4 — Rain logically excludes 洗濯, giving decent cloze cue, though other outdoor activities also fit. | teach only | yes |
| to take out | 友達が来るから、お茶を出しましょう。 | Since a friend is coming, let's bring out some tea. | だしましょう | N5 L4 T4 C4 I4 — 'bring out' is a slightly loose translation of お茶を出す, which usually means 'serve tea'. | cloze+teach | yes |
| to take out | 母は冷蔵庫から牛乳を出しました。 | My mother took milk out of the refrigerator. | だしました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to take out | 忙しいから、手紙を出しませんでした。 | Since I was busy, I didn't mail the letter. | だしませんでした | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to eat | 一緒に晩御飯を食べましょう。 | Let's eat dinner together. | たべましょう | N5 L5 T5 C4 I2 — Generic but natural; near-duplicate of sentence 2. | cloze+teach | yes |
| to eat | 友達と一緒に果物を食べます。 | I eat fruit together with my friend. | たべます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to use | 料理のとき、塩を使います。 | I use salt when cooking. | つかいます | N4 L5 T5 C3 I3 — Other verbs like 入れる could also fit the blank, slightly reducing recoverability. | teach only | yes |
| to use | 今、電話を使いませんか。 | Won't you use the phone now? | つかいませんか | N4 L5 T4 C2 I3 — Many verbs (かけます, とります) could fill the blank with 電話を, reducing recoverability. | teach only | yes |
| to make | 今晩、カレーを作りましょう。 | Let's make curry tonight. | つくりましょう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to make | 友達が来るから、料理を作ります。 | Since a friend is coming, I'll make food. | つくります | N5 L4 T5 C3 I3 — から used for reason is slightly above strict N5 but common; other verbs (準備する/食べる) could also fit. | teach only | yes |
| to make | 時間がないから、晩御飯を作りません。 | Since there's no time, I won't make dinner. | つくりません | N5 L4 T5 C3 I3 — から for reason slightly above N5; 食べません could also plausibly fill the blank. | teach only | yes |
| to turn on | 部屋が暗いから、電気をつけます。 | Since the room is dark, I'll turn on the light. | つけます | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to turn on | テレビをつけませんか。 | Won't you turn on the TV? | つけませんか | N5 L5 T5 C3 I3 — Blank could also be filled by other verbs like 'watch' or 'turn off', reducing recoverability. | teach only | yes |
| to turn on | 誰がラジオをつけましたか。 | Who turned on the radio? | つけました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to take (a photo) | 友達と写真を撮りましょう。 | Let's take a photo with my friend. | とりましょう | N4 L5 T4 C4 I3 | cloze+teach | yes |
| to take (a photo) | 公園で写真を撮りたいです。 | I want to take photos in the park. | とりたい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to take (a photo) | 暗いから、写真を撮りません。 | Since it's dark, I won't take photos. | とりません | N5 L5 T5 C5 I4 | cloze+teach | yes |
| chair | 会社の椅子は古いです。 | The office chair is old. | いす | N4 L5 T5 C2 I2 — Blank could be filled by many nouns (desk, table). | teach only | yes |
| chair | 新しい椅子を買いませんか。 | Shall we buy a new chair? | いす | N4 L5 T5 C2 I3 — Blank could be almost any purchasable noun. | teach only | yes |
| coat | 今朝は寒いから、上着を着ました。 | Since it was cold this morning, I wore a coat. | うわぎ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| coat | この上着は好きじゃないです。 | I don't like this coat. | うわぎ | N5 L5 T5 C2 I2 — Generic template; blank could be almost any clothing/object noun. | teach only | yes |
| coat | 上着はどこに置きましたか。 | Where did you put the coat? | うわぎ | N5 L5 T5 C2 I2 — Blank could be any object one might misplace, not uniquely 'coat'. | teach only | yes |
| a painting | 部屋に絵があります。 | There is a painting in the room. | え | N5 L5 T5 C2 I2 — Many nouns could fill the blank (机, 椅子, 絵 etc.). | teach only | yes |
| a painting | 新しい絵を買いましょう。 | Let's buy a new painting. | え | N5 L5 T5 C2 I3 — Blank could be filled by many purchasable nouns. | teach only | yes |
| a painting | 有名な絵を見ました。 | I saw a famous painting. | え | N5 L5 T5 C3 I3 — 有名な could modify many nouns (映画, 建物, 絵), slightly reduces recoverability. | teach only | yes |
| elevator | 毎日エレベーターを使います。 | I use the elevator every day. | えれべえたあ | N5 L5 T5 C2 I2 — Many other nouns (電車, バス, パソコン) could fit the blank equally well. | teach only | yes |
| elevator | このエレベーターは大きくないです。 | This elevator isn't big. | えれべえたあ | N5 L5 T5 C2 I2 — Blank could be filled by many objects (部屋, 箱, 車 etc.), reducing recoverability. | teach only | yes |
| plate | 新しいお皿を買いました。 | I bought new plates. | おさら | N5 L5 T5 C2 I2 — Many nouns could fill the blank (bag, book, etc.), not uniquely 'plate'. | teach only | yes |
| plate | お皿を洗ってください。 | Please wash the plates. | おさら | N5 L5 T5 C3 I3 — Washing is a plausible plate-related verb but could also fit dishes, hands, clothes. | teach only | yes |
| plate | このお皿は汚いです。 | This plate is dirty. | おさら | N5 L5 T5 C2 I2 — Generic sentence structure; blank could be many nouns (room, cup, etc.). | teach only | yes |
| a bath | 疲れたから、お風呂に入ります。 | Since I'm tired, I'll take a bath. | おふろ | N5 L5 T5 C3 I3 — Blank could also fit other places one 'enters', but context of tiredness helps narrow it. | teach only | yes |
| a bath | お風呂に入りましょう。 | Let's take a bath. | おふろ | N5 L5 T5 C2 I2 — Very generic; many nouns could fill the blank with 入りましょう. | teach only | yes |
| a bath | 毎晩お風呂に入ります。 | I take a bath every night. | おふろ | N5 L5 T5 C3 I3 — 毎晩 helps narrow context somewhat, but other nouns could still fit. | teach only | yes |
| a lock | 家の鍵を忘れました。 | I forgot my house key. | かぎ | N5 L5 T5 C3 I3 — Blank could also fit other forgettable items like 傘 or 財布, slightly reducing recoverability. | teach only | yes |
| a lock | ドアの鍵がありません。 | There is no key for the door. | かぎ | N4 L5 T4 C4 I3 — Slightly stiff phrasing but understandable; 鍵 is the most natural fit for the blank. | cloze+teach | yes |
| a lock | 鍵をかけてください。 | Please lock the door. | かぎ | N5 L5 T4 C5 I4 — 鍵をかける is a fixed idiom meaning 'to lock', making the blank highly recoverable. | cloze+teach | yes |
| cup | 会社でカップを使います。 | I use a cup at the office. | かっぷ | N4 L5 T5 C1 I3 — Blank could be filled by almost any noun; context doesn't uniquely suggest 'cup'. | teach only | yes |
| cup | カップはどこにありますか。 | Where is the cup? | かっぷ | N4 L5 T5 C1 I2 — Very generic; many nouns fit the blank equally well. | teach only | yes |
| cup | このカップはいくらですか。 | How much is this cup? | かっぷ | N4 L5 T5 C1 I2 — Generic 'how much is this X' template; blank not uniquely recoverable. | teach only | yes |
| blue | 私のシャツは青いです。 | My shirt is blue. | あおい | N5 L5 T5 C2 I2 — Generic color sentence; blank could be any color word, not just blue. | teach only | yes |
| blue | この傘は青くないです。 | This umbrella is not blue. | あおくない | N5 L5 T5 C2 I2 — Negative form is fine grammatically, but any color could fill the blank equally well. | teach only | yes |
| red | 姉の靴は赤いです。 | My older sister's shoes are red. | あかい | N5 L5 T5 C3 I3 | teach only | yes |
| red | これは赤いですから、好きです。 | I like this because it's red. | あかい | N4 L5 T5 C2 I2 — generic これは template, blank could be many adjectives | teach only | yes |
| bright | この部屋は明るいです。 | This room is bright. | あかるい | N4 L5 T5 C2 I1 — Generic template sentence; blank could be filled by many adjectives (広い, きれい, etc.). | teach only | yes |
| bright | 今晩は月が明るくないです。 | Tonight the moon isn't bright. | あかるくない | N4 L5 T5 C3 I3 — Context suggests brightness but other adjectives like 大きい or きれい could also fit for the moon. | teach only | yes |
| dangerous | この道は危ないです。 | This road is dangerous. | あぶない | N5 L5 T5 C2 I2 — Generic template sentence; many adjectives could fill the blank. | teach only | yes |
| dangerous | 危ないですから、そこに座らないでください。 | Please don't sit there because it's dangerous. | あぶない | N5 L5 T5 C3 I3 — Reasonable context but other adjectives like 汚い could also fit. | teach only | yes |
| generous | 父は子供に甘いです。 | Father is generous with the children. | あまい | N5 L5 T5 C3 I3 | teach only | yes |
| generous | 先生は学生に甘くないです。 | The teacher isn't generous with students. | あまくない | N5 L5 T5 C3 I3 | teach only | yes |
| best | この料理が一番美味しいです。 | This dish is the best. | いちばん | N5 L5 T5 C3 I3 — とても could also fit the blank, slightly reducing forced recall | teach only | yes |
| best | 一番好きな色は何ですか。 | What is your favorite color? | いちばん | N5 L5 T4 C3 I3 — とても好きな色 is also grammatical, so blank isn't fully forced | teach only | yes |
| best | これが一番安いですから、買います。 | Because this is the cheapest, I'll buy it. | いちばん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| disagreeable | 私は魚が嫌です。 | I dislike fish. | いや | N4 L5 T5 C3 I3 — Blank could also be 好き/嫌い/苦手, reducing recoverability. | teach only | yes |
| disagreeable | 嫌ですから、行きません。 | Because I dislike it, I won't go. | いや | N4 L5 T5 C2 I2 — Very generic; many adjectives could fill the blank. | teach only | yes |
| small | 子供の部屋は小さいですから、大きい机は要りません。 | The child's room is small, so we don't need a big desk. | ちいさい | N5 L4 T5 C4 I4 | cloze+teach | yes |
| small | このアパートは小さくないです。 | This apartment is not small. | ちいさくない | N4 L5 T5 C2 I2 — No context forces 'small' specifically; many adjectives could fit the blank. | teach only | yes |
| near | 駅は家から近いです。 | The station is near my house. | ちかい | N5 L5 T5 C3 I2 — Other adjectives like 遠い could also fit the blank grammatically. | teach only | yes |
| near | 図書館はここから近いですか。 | Is the library near here? | ちかい | N5 L5 T5 C3 I2 — Question form works but 遠い or other distance adjectives also fit contextually. | teach only | yes |
| near | 学校はうちから近くないです。 | The school is not near my house. | ちかくない | N5 L5 T5 C3 I2 — Negative form is natural but other adjectives with くない could also fit. | teach only | yes |
| brown | このパンは茶色です。 | This bread is brown. | ちゃいろ | N5 L5 T5 C2 I2 — Any color word could fill the blank, so context doesn't force 茶色 specifically. | teach only | yes |
| brown | 弟の靴は茶色です。 | My younger brother's shoes are brown. | ちゃいろ | N5 L5 T5 C2 I3 — Other colors also plausible for shoes, weak cloze constraint. | teach only | yes |
| boring | この映画はつまらないです。 | This movie is boring. | つまらない | N5 L5 T5 C2 I2 — Generic template sentence; many adjectives could fill the blank. | teach only | yes |
| boring | この本はつまらないから、読みません。 | This book is boring, so I won't read it. | つまらない | N5 L5 T5 C3 I4 — More context via から clause improves recoverability, though other negative adjectives could still fit. | teach only | yes |
| cold (things, people) | 冷たいお茶をください。 | Please give me cold tea. | つめたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| cold (things, people) | 冷たい飲み物を飲みませんか。 | Would you like to drink something cold? | つめたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| cold (things, people) | この牛乳は冷たくないです。 | This milk is not cold. | つめたくない | N5 L5 T5 C4 I3 | cloze+teach | yes |
| strong | 父はとても強いです。 | My father is very strong. | つよい | N5 L5 T5 C2 I2 — Many adjectives could fill the blank; generic sentence. | teach only | yes |
| strong | 風が強いから、出かけません。 | The wind is strong, so I won't go out. | つよい | N5 L5 T5 C4 I4 — Wind+strong context gives strong contextual cue, though 'cold' could also fit slightly. | cloze+teach | yes |
| strong | この犬は強いですか。 | Is this dog strong? | つよい | N5 L5 T5 C2 I2 — Blank could be filled by many adjectives describing a dog. | teach only | yes |
| far | 会社は駅から遠いです。 | The office is far from the station. | とおい | N5 L5 T5 C3 I3 — Other adjectives like 近い could also fit grammatically. | teach only | yes |
| far | 病院はうちから遠くないです。 | The hospital is not far from home. | とおくない | N5 L5 T5 C3 I3 — Negative form is clear but other distance adjectives could fit. | teach only | yes |
| far | 図書館は遠いですか。 | Is the library far? | とおい | N5 L5 T5 C3 I2 — Simple template-like question limits interest and uniqueness of blank. | teach only | yes |
| very (much) | この料理はとても辛いです。 | This dish is very spicy. | とても | N5 L5 T5 C2 I3 — Blank could be filled by other degree adverbs like 少し/本当に, not uniquely とても. | teach only | yes |
| very (much) | 母はとても忙しいです。 | My mother is very busy. | とても | N5 L5 T5 C2 I2 — Generic template; blank not uniquely recoverable as とても over other adverbs. | teach only | yes |
| very (much) | 今日はとても暑いです。 | Today is very hot. | とても | N5 L5 T5 C2 I2 — Generic weather sentence; multiple adverbs could fill the blank. | teach only | yes |
| 20 years old | 兄は今年二十歳になりました。 | My older brother turned 20 this year. | はたち | N5 L5 T5 C2 I3 — Any age word could fill the blank grammatically, reducing recoverability. | teach only | yes |
| 20 years old | あなたは二十歳ですか。 | Are you 20 years old? | はたち | N5 L5 T5 C2 I2 — Generic question; any age fits the blank equally well. | teach only | yes |
| 20 years old | 来年二十歳になります。 | I will turn 20 next year. | はたち | N5 L5 T5 C2 I2 — No context restricts the answer to specifically 20 years old. | teach only | yes |
| twenty days | 旅行は二十日に始まります。 | The trip starts on the 20th. | はつか | N5 L5 T5 C2 I3 — Context only forces 'a date', not specifically the 20th. | teach only | yes |
| twenty days | 病気で二十日休みました。 | I was off for twenty days because of illness. | はつか | N5 L5 T5 C2 I3 — Context only forces 'a duration', not specifically twenty days. | teach only | yes |
| twenty days | 二十日に友達と会いたいです。 | I want to meet my friend on the 20th. | はつか | N5 L5 T5 C2 I3 — Context only forces 'a date', not specifically the 20th. | teach only | yes |
| spring | 春に旅行をしたいです。 | I want to travel in spring. | はる | N5 L5 T5 C2 I3 — Could equally be summer/winter/etc., so blank isn't uniquely recoverable. | teach only | yes |
| spring | 春は花がきれいです。 | In spring, the flowers are beautiful. | はる | N5 L5 T5 C3 I3 — Flowers hint at spring but autumn also fits somewhat. | teach only | yes |
| spring | 春はいつ来ますか。 | When does spring come? | はる | N5 L5 T5 C2 I2 — Very generic; could ask about any season or event. | teach only | yes |
| one month | 仕事で一月忙しかったです。 | I was busy for a month because of work. | ひとつき | N4 L5 T5 C2 I3 — Blank could be filled by many duration words (一週間, 二週間 etc.), not uniquely 一月. | teach only | yes |
| one month | 一月でいくらかかりますか。 | How much does it cost for a month? | ひとつき | N4 L5 T5 C2 I2 — Generic price question; blank not uniquely recoverable as 一月. | teach only | yes |
| noon | 昼に薬を飲みます。 | I take medicine at noon. | ひる | N5 L5 T5 C2 I2 — Many time words (朝/夜/昼) could fill the blank equally well. | teach only | yes |
| noon | 毎朝、昼まで寝ています。 | Every morning, I sleep until noon. | ひる | N5 L5 T5 C4 I3 — Context strongly suggests 昼 though 夜 could theoretically work. | cloze+teach | yes |
| noon | 昼に友達と会いますか。 | Are you meeting your friend at noon? | ひる | N5 L5 T5 C2 I2 — Blank could be filled by many time expressions, not uniquely 昼. | teach only | yes |
| two days | 旅行で二日かかります。 | The trip takes two days. | ふつか | N4 L5 T5 C3 I3 — Any number of days could fill the blank equally well. | teach only | yes |
| winter | 冬に雪が降ります。 | It snows in winter. | ふゆ | N5 L5 T5 C3 I3 | teach only | yes |
| winter | 冬は寒いですか。 | Is winter cold? | ふゆ | N5 L5 T5 C3 I3 | teach only | yes |
| winter | 去年の冬は雪が多かったです。 | Last winter had a lot of snow. | ふゆ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| eight days | 来月の八日に旅行します。 | I will travel on the eighth of next month. | ようか | N5 L5 T4 C2 I2 — Any date word (一日, 二日, etc.) could fill the blank, so cloze recoverability is low; also target gloss 'eight days' doesn't match the ordinal-date usage here. | teach only | yes |
| eight days | 八日まで待ってください。 | Please wait until the eighth. | ようか | N5 L5 T4 C2 I2 — Generic date sentence; many day words fit the blank equally well. | teach only | yes |
| eight days | 八日に晩御飯を作りました。 | I made dinner on the eighth. | ようか | N5 L5 T4 C2 I2 — Same issue: any date could fill the blank, low uniqueness. | teach only | yes |
| four days | 四日に旅行に行きます。 | I will go on a trip on the fourth. | よっか | N5 L5 T5 C2 I3 — Any date could fill the blank, so it's not uniquely recoverable; also the target gloss 'four days' doesn't match this date usage. | teach only | yes |
| four days | 四日は仕事が忙しかったです。 | Work was busy on the fourth. | よっか | N5 L5 T5 C2 I2 — Blank could be any date; gloss mismatch with 'four days' vs date usage. | teach only | yes |
| four days | 四日に晩御飯を食べに来てください。 | Please come to eat dinner on the fourth. | よっか | N5 L5 T5 C2 I3 — Blank could be any date; gloss mismatch with 'four days' vs date usage. | teach only | yes |
| evening | 夜に晩御飯を作ります。 | I make dinner in the evening. | よる | N4 L5 T5 C2 I2 — Blank could also be filled by 朝 or 昼, since dinner could theoretically be made anytime; context doesn't force 夜 uniquely. | teach only | yes |
| evening | 昨日の夜は遅くまで働きました。 | Last night I worked until late. | よる | N5 L5 T5 C4 I3 | cloze+teach | yes |
| next month | 来月、家族と旅行します。 | Next month, I will travel with my family. | らいげつ | N5 L5 T5 C3 I3 — Blank could be filled by other time words (来週, 来年) since context doesn't force 来月 specifically. | teach only | yes |
| next month | 来月までに宿題を出してください。 | Please submit the homework by next month. | らいげつ | N4 L4 T5 C3 I3 — までに is slightly above N5 but common; blank still allows other time words. | teach only | yes |
| next week | 来週、海へ旅行に行きたいです。 | I want to travel to the sea next week. | らいしゅう | N5 L5 T5 C3 I3 — Other time words like 来月 or 今度 could also fit grammatically, so blank isn't fully forced. | teach only | yes |
| next year | 来年、二十歳になります。 | Next year, I will turn twenty. | らいねん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| around (a time) | 六時ころ家に帰ります。 | I will go home around six o'clock. | ころ | N5 L5 T5 C3 I3 — に could also fit the blank, lowering recoverability. | teach only | yes |
| around (a time) | 子供のころ、よく公園で遊びました。 | When I was a child, I often played in the park. | ころ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| around (a time) | 昼ころ、電話をください。 | Please call me around noon. | ころ | N5 L5 T5 C3 I3 — に or まで could also fit, reducing uniqueness of answer. | teach only | yes |
| every month | 毎月、旅行に行きます。 | I go on a trip every month. | まいつき | N5 L5 T5 C2 I2 — Any 毎日/毎週/毎年 could fit the blank equally well, so context doesn't force 毎月 specifically. | teach only | yes |
| please do for me | 窓を開けて下さい、暑いです。 | Please open the window, it's hot. | ください | N4 L5 T5 C5 I3 — slightly choppy sentence joining | cloze+teach | yes |
| language | 授業で新しい言葉を習いました。 | I learned new words in class. | ことば | N5 L5 T5 C3 I3 — 単語 or 漢字 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| this | この本は面白いです。 | This book is interesting. | この | N5 L5 T5 C2 I3 — その/あの could also fit the blank, reducing recoverability. | teach only | yes |
| this | この部屋は誰の部屋ですか。 | Whose room is this? | この | N5 L5 T5 C2 I4 — その/あの could also fit the blank, reducing recoverability. | teach only | yes |
| come now | さあ、座りましょう。 | Come now, let's sit down. | さあ | N4 L5 T4 C2 I2 — Same issue: interjection at sentence start allows multiple plausible words. | teach only | yes |
| however | 今日は寒いです。しかし、天気はいいです。 | Today is cold. However, the weather is good. | しかし | N5 L5 T5 C4 I3 | cloze+teach | yes |
| health | 電話で「元気ですか」と聞きました。 | I asked, "Are you well?" on the phone. | げんき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| health | 今日はあまり元気じゃありません。 | I'm not very well today. | げんき | N5 L5 T5 C3 I3 — Blank could also be filled by other adjectives like 好き or 上手 without more context. | teach only | yes |
| health | 元気ですから、公園へ行きましょう。 | I'm well, so let's go to the park. | げんき | N4 L5 T5 C2 I3 — Many words (暇, 元気, 天気がいい) could fit the blank equally well. | teach only | yes |
| voice | 声が小さいですから、もっと大きく話してください。 | Your voice is quiet, so please speak louder. | こえ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| voice | 父の声は大きいです。 | My father's voice is loud. | こえ | N5 L5 T5 C2 I2 — blank could be filled by many nouns (体, 手, 目, etc.), reducing recoverability. | teach only | yes |
| voice | 大きい声で歌いましょう。 | Let's sing with a loud voice. | こえ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to die | 猫が死にました。 | The cat died. | しにました | N5 L5 T5 C3 I3 — Blank could be filled by many verbs without stronger context. | teach only | yes |
| to die | おじいさんはいつ死にましたか。 | When did your grandfather die? | しにました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to die | 病気でしたから、犬が死にました。 | The dog died because it was sick. | しにました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to breathe in | たばこを吸いたいですから、外へ出ます。 | I want to smoke, so I'll go outside. | すいたい | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to breathe in | 病院でたばこを吸わないでください。 | Please don't smoke at the hospital. | すわないで | N5 L4 T5 C5 I4 | cloze+teach | yes |
| height | 兄は背が高いです。 | My older brother is tall. | せい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| height | 私の背は父と同じです。 | My height is the same as my father's. | せい | N4 L4 T5 C4 I3 | cloze+teach | yes |
| to get tired | 仕事で疲れましたから、早く寝ます。 | I'm tired from work, so I'll sleep early. | つかれました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to get tired | 今日はあまり疲れていません。 | I'm not very tired today. | つかれて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to get tired | 疲れましたから、少し休みましょう。 | I'm tired, so let's rest a little. | つかれました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| hand | 料理の前に手を洗います。 | I wash my hands before cooking. | て | N5 L5 T5 C4 I3 | cloze+teach | yes |
| hand | 子供の手は小さいです。 | The child's hands are small. | て | N5 L5 T5 C3 I2 — Blank could also be 足/顔/体 etc., reducing recoverability. | teach only | yes |
| hand | 手を貸しましょうか。 | Shall I lend you a hand? | て | N5 L5 T5 C5 I4 | cloze+teach | yes |
| tooth | 朝、歯を磨きます。 | I brush my teeth in the morning. | は | N5 L5 T5 C4 I3 | cloze+teach | yes |
| tooth | 甘い物を食べますから、歯が痛いです。 | I eat sweets, so my teeth hurt. | は | N5 L5 T5 C5 I4 | cloze+teach | yes |
| head | 頭がいいですね。 | You're smart, aren't you. | あたま | N5 L5 T5 C4 I3 | cloze+teach | yes |
| head | 頭を洗いましたか。 | Did you wash your hair? | あたま | N5 L5 T5 C3 I3 — Other body-part words (顔, 髪, 体) could also fill the blank. | teach only | yes |
| head | 頭が痛くて、学校を休みました。 | My head hurt, so I stayed home from school. | あたま | N5 L4 T5 C3 I4 — Other body parts (お腹, 喉, 歯) could also fit the 'hurt' pattern. | teach only | yes |
| hurt | 歯が痛いです。 | My tooth hurts. | いたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| hurt | お腹が痛いですか。 | Does your stomach hurt? | いたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| stomach | お腹が痛いですから、薬を飲みました。 | My stomach hurt, so I took medicine. | おなか | N5 L5 T5 C3 I4 — Blank could also be filled by 頭 or 歯, so not fully unique. | teach only | yes |
| stomach | お腹は大丈夫ですか。 | Is your stomach okay? | おなか | N5 L5 T5 C2 I2 — Too generic; many nouns could fill the blank besides お腹. | teach only | yes |
| stomach | 今朝からお腹が痛いです。 | My stomach has hurt since this morning. | おなか | N5 L5 T5 C3 I4 — Still ambiguous with other body parts, though slightly more contextual than sentence 1. | teach only | yes |
| face | 友達の顔を見ました。 | I saw my friend's face. | かお | N4 L5 T5 C2 I2 — Blank could be filled by many nouns like 手 or 写真, weak cloze cue. | teach only | yes |
| face | 顔を洗いましたか。 | Did you wash your face? | かお | N5 L5 T5 C3 I3 — 洗う commonly pairs with 顔 or 手, so still some ambiguity but fairly natural. | teach only | yes |
| face | 顔が赤いです。 | Your face is red. | かお | N5 L5 T4 C2 I3 — EN translation shifts subject to 'your' while Japanese omits subject; also blank could be 空, 目, etc. | teach only | yes |
| cold | 風邪を引きました。 | I caught a cold. | かぜ | N5 L4 T5 C5 I3 | cloze+teach | yes |
| cold | 風邪ですから、学校を休みます。 | I have a cold, so I'll stay home from school. | かぜ | N5 L5 T5 C3 I3 — 病気 could also fit the blank, lowering uniqueness. | teach only | yes |
| cold | 風邪は大丈夫ですか。 | Is your cold okay? | かぜ | N4 L4 T4 C2 I2 — Many nouns (熱, 病気, etc.) could fill the blank, making it hard to recover exactly. | teach only | yes |
| body | 体が弱いです。 | My body is weak. | からだ | N4 L5 T5 C3 I3 — Blank could plausibly be filled with other body-part words like 目 or 心, reducing uniqueness. | teach only | yes |
| body | 体を洗ってください。 | Please wash your body. | からだ | N5 L5 T5 C3 I3 — Other words like 手 or 顔 could also fit the blank in this context. | teach only | yes |
| body | 体にいいですから、野菜を食べます。 | It's good for your body, so I eat vegetables. | からだ | N5 L5 T5 C3 I3 — Common phrase but could also work with 目 or 健康 in the blank. | teach only | yes |
| medicine | 薬を飲みました。 | I took medicine. | くすり | N5 L5 T5 C3 I3 — Blank could also be filled with other drinkable things like 水 or お茶. | teach only | yes |
| medicine | 頭が痛いですから、薬が欲しいです。 | My head hurts, so I want medicine. | くすり | N5 L5 T5 C4 I4 | cloze+teach | yes |
| medicine | 薬を飲んでください。 | Please take the medicine. | くすり | N5 L5 T5 C3 I3 — Could also fit other liquids like 水 or お茶 in the blank. | teach only | yes |
| to know | あの医者を知っていますか。 | Do you know that doctor? | しって | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to make sound | 公園で犬が鳴いています。 | A dog is barking in the park. | ないて | N5 L5 T5 C2 I3 — Blank could be filled with many verbs (寝て, 走って, 遊んで); not uniquely cued to 鳴く. | teach only | yes |
| talk | 店の人の話は面白いです。 | The store clerk's talk was interesting. | はなし | N4 L5 T4 C2 I3 — Many nouns (顔, 性格, 話) could fill the blank, weakening recoverability. | teach only | yes |
| talk | 医者の話を聞きました。 | I listened to the doctor's talk. | はなし | N4 L5 T4 C3 I3 — Context allows other nouns like 声 or 意見 to fit. | teach only | yes |
| talk | 友達と話をしました。 | I had a talk with my friend. | はなし | N4 L5 T4 C2 I3 — '友達と＿をした' could be filled with many activities (勉強, 喧嘩, 仕事), reducing uniqueness. | teach only | yes |
| to speak | 毎朝、家族と話します。 | I talk with my family every morning. | はなします | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to speak | 英語を話しますか。 | Do you speak English? | はなします | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to speak | 少し話しましょう。 | Let's talk a little. | はなしましょう | N5 L5 T5 C3 I3 — Other verbs like 休みましょう or 待ちましょう could also fit the blank. | teach only | yes |
| to call | 医者を呼びました。 | I called a doctor. | よび | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to call | パーティーに友達を呼びましょう。 | Let's invite our friends to the party. | よび | N5 L5 T4 C3 I4 — Translated as 'invite' rather than 'call', which is a valid but different nuance of 呼ぶ. | teach only | yes |
| to call | 誰を呼びますか。 | Who will you call? | よび | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to read | 朝、新聞を読みます。 | I read the newspaper in the morning. | よみ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to read | 本を読みたいです。 | I want to read a book. | よみ | N5 L5 T5 C3 I3 — blank could also be filled by 買い/借り etc. | teach only | yes |
| to read | この本を読みましたか。 | Did you read this book? | よみ | N5 L5 T5 C3 I3 — blank could also be filled by 買い/借り etc. | teach only | yes |
| be good at | 母は料理が上手です。 | My mother is good at cooking. | じょうず | N5 L5 T5 C3 I2 — Could also be 好き/下手 etc., slightly generic template. | teach only | yes |
| be good at | 兄は歌が上手ですから、パーティーで歌います。 | My older brother is good at singing, so he'll sing at the party. | じょうず | N5 L4 T5 C4 I4 — から clause pushes slightly beyond pure N5 but common; context strengthens cloze clue. | cloze+teach | yes |
| be good at | あなたは英語が上手ですか。 | Are you good at English? | じょうず | N5 L5 T5 C3 I2 — Generic question template; other adjectives could fit blank. | teach only | yes |
| white | 友達は白いシャツを着ています。 | My friend is wearing a white shirt. | しろい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| white | この猫は白くないです。 | This cat is not white. | しろくない | N5 L5 T5 C5 I3 | cloze+teach | yes |
| white | テーブルの上に白いお皿があります。 | There is a white plate on the table. | しろい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| narrow | 私の部屋は狭いです。 | My room is narrow. | せまい | N5 L5 T5 C2 I2 — Generic template sentence; many adjectives could fill the blank. | teach only | yes |
| narrow | 部屋が狭いから、椅子がありません。 | Because the room is narrow, there are no chairs. | せまい | N4 L5 T5 C4 I4 | cloze+teach | yes |
| narrow | この道は狭いですか。 | Is this road narrow? | せまい | N5 L5 T5 C2 I2 — Generic question; many adjectives (wide, long, etc.) could fit the blank. | teach only | yes |
| It's ok | もしもし、今大丈夫ですか。 | Hello, is now an okay time? | だいじょうぶ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| It's ok | 友達が来ますから、大丈夫です。 | A friend is coming, so it's fine. | だいじょうぶ | N4 L5 T4 C2 I3 — Blank could be filled by many adjectives (楽しい, いい, etc.), reducing recoverability. | teach only | yes |
| very like-able | 兄は野菜が大好きじゃないです。 | My older brother doesn't love vegetables. | だいすきじゃない | N4 L3 T4 C3 I3 — Other words like 好きじゃない or きらい could fit the blank too | teach only | yes |
| very like-able | あなたは音楽が大好きですか。 | Do you love music? | だいすき | N4 L4 T4 C3 I3 — 好き could also fit the blank, reducing uniqueness | teach only | yes |
| important | 家族は大切です。 | Family is important. | たいせつ | N5 L5 T5 C2 I2 — Many adjectives could fill the blank (好き, 有名, etc.), reducing cloze recoverability; fairly generic template sentence. | teach only | yes |
| important | これは大切ですから、忘れないでください。 | This is important, so please don't forget it. | たいせつ | N5 L4 T5 C4 I4 — から for reason is slightly beyond strict N5 but commonly taught; context makes the blank fairly well constrained though a few synonyms could fit. | cloze+teach | yes |
| important | この本は大切じゃないです。 | This book is not important. | たいせつじゃない | N5 L5 T5 C2 I2 — Generic negative adjective sentence; many adjectives could fit the blank. | teach only | yes |
| enjoyable | 旅行は楽しいですから、行きたいです。 | Travel is fun, so I want to go. | たのしい | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other adjectives like 面白い or 安い. | teach only | yes |
| seven things | 卵を七つ買いました。 | I bought seven eggs. | ななつ | N5 L5 T5 C2 I3 — Any number could fit the blank equally well; context doesn't force 'seven'. | teach only | yes |
| seven things | 弟は七つです。 | My little brother is seven years old. | ななつ | N5 L5 T5 C2 I3 — Age context doesn't uniquely determine the number seven. | teach only | yes |
| two | 弟は二歳です。 | My little brother is two years old. | に | N5 L5 T5 C3 I3 — Blank could be any number, not uniquely forced to 二. | teach only | yes |
| two | 二階の部屋を見てください。 | Please look at the room on the second floor. | に | N5 L5 T5 C3 I3 — Any floor number could fit the blank. | teach only | yes |
| counter for cupfuls | 父はお酒を二杯飲みました。 | My father drank two cups of sake. | はい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| eight | 電話は八時にかけます。 | I will call at eight o'clock. | はち | N5 L5 T5 C2 I2 — Any number could fill the blank; context doesn't force 八 specifically. | teach only | yes |
| eight | 姉は八歳です。 | My older sister is eight years old. | はち | N5 L5 T5 C2 I2 — Any age number fits the blank equally well. | teach only | yes |
| eight | 友達は八時に来ます。 | My friend will come at eight o'clock. | はち | N5 L5 T5 C2 I2 — Any number could fill the blank; nearly identical to sentence 0. | teach only | yes |
| ~st | 兄の部屋は二番です。 | My older brother's room is number two. | ばん | N4 L5 T4 C3 I3 — 二番 could plausibly be swapped with 二階 or another counter, slightly weakening the cloze uniqueness. | teach only | yes |
| half | 肉を半分に切ってください。 | Please cut the meat in half. | はんぶん | N5 L5 T5 C3 I3 — Blank could also be filled by other words like 小さく, so not fully forced. | teach only | yes |
| half | パンを半分ずつ食べましょう。 | Let's each eat half of the bread. | はんぶん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| counter for small animals | 猫が二匹います。 | There are two cats. | ひき | N5 L5 T5 C5 I2 | cloze+teach | yes |
| counter for small animals | 友達の犬は一匹だけです。 | My friend has only one dog. | ひき | N4 L5 T4 C4 I3 — Slightly awkward phrasing but understandable. | cloze+teach | yes |
| one thing | 卵を一つ入れてください。 | Please put in one egg. | ひとつ | N5 L5 T5 C3 I3 — Blank could also be filled by other quantity words like 少し or たくさん, reducing uniqueness. | teach only | yes |
| one thing | 椅子が一つあります。 | There is one chair. | ひとつ | N5 L5 T5 C3 I2 — Generic template sentence; blank could be other numbers too. | teach only | yes |
| meter | 駅から会社まで二百メートルです。 | It's two hundred meters from the station to the office. | めーとる | N5 L5 T5 C5 I3 | cloze+teach | yes |
| meter | 机をここから二メートルの所に置いてください。 | Please put the desk two meters from here. | めーとる | N5 L5 T5 C5 I3 | cloze+teach | yes |
| eight things | 箱が八つあります。 | There are eight boxes. | やっつ | N5 L5 T5 C3 I2 — Generic but correct; number itself isn't uniquely forced by context. | teach only | yes |
| eight things | お皿は八つありません、六つです。 | There aren't eight plates, there are six. | やっつ | N5 L5 T5 C5 I3 — Contrast with 六つ makes the answer clearly recoverable. | cloze+teach | yes |
| four things | 机の上に鉛筆が四つあります。 | There are four pencils on the desk. | よっつ | N5 L5 T5 C3 I3 — Any counter number could fit the blank grammatically. | teach only | yes |
| four things | コップは四つありますか。 | Are there four cups? | よっつ | N5 L5 T5 C3 I3 — Any counter number could fit the blank grammatically. | teach only | yes |
| zero | 今日は零度ではありません、五度です。 | Today it's not zero degrees, it's five degrees. | れい | N4 L4 T5 C2 I3 — Blank could be replaced by other temperature words fitting the contrast structure. | teach only | yes |
| six | 六時ですから、もう帰ります。 | Since it's six o'clock, I'm going home now. | ろく | N5 L5 T5 C2 I3 — Any number could fill the blank; context doesn't force six specifically. | teach only | yes |
| six | 今日は六人ではありません、五人です。 | Today there aren't six people, there are five. | ろく | N5 L5 T5 C2 I4 — Contrast with 五人 is interesting but doesn't uniquely force six as the answer. | teach only | yes |
| six | 六時に来てください。 | Please come at six o'clock. | ろく | N5 L5 T5 C2 I2 — Generic time sentence; any hour could fit the blank. | teach only | yes |
| kilogram | 肉を三キログラムください。 | Please give me three kilograms of meat. | きろぐらむ | N5 L5 T5 C3 I3 | teach only | yes |
| kilogram | この荷物は十キログラムです。 | This luggage is ten kilograms. | きろぐらむ | N5 L5 T5 C3 I2 | teach only | yes |
| kilogram | この箱は五キログラムではありません。 | This box is not five kilograms. | きろぐらむ | N5 L5 T5 C3 I2 | teach only | yes |
| kilometer | 駅まで五キロメートルです。 | It's five kilometers to the station. | きろめーとる | N5 L5 T5 C3 I3 — Blank could also be filled with 分 or 時間, reducing uniqueness. | teach only | yes |
| kilometer | 十キロメートルですから、車で行きます。 | Since it's ten kilometers, I'll go by car. | きろめーとる | N5 L5 T5 C3 I3 — Context allows other units like 分 or 時間 to fit as well. | teach only | yes |
| kilometer | 会社まで何キロメートルですか。 | How many kilometers is it to the office? | きろめーとる | N5 L5 T5 C2 I3 — Very generic 'how many ___' question; many units could fit the blank. | teach only | yes |
| approximately (amount) | 駅まで十分くらいですか。 | Is it about ten minutes to the station? | くらい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to open | 朝、店が開きます。 | In the morning, the store opens. | あきます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to open | 窓が開きません。 | The window doesn't open. | あきません | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to open | ドアが開きましたから、入りましょう。 | The door opened, so let's go in. | あきました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to open (transitive) | 窓を開けてください。 | Please open the window. | あけて | N5 L5 T5 C3 I2 — 閉めて (close) also fits grammatically, reducing recoverability. | teach only | yes |
| to open (transitive) | 暑いですから、ドアを開けましょう。 | It's hot, so let's open the door. | あけましょう | N5 L5 T5 C3 I3 — 閉めましょう could also fit if it's hot but door lets in noise, slightly ambiguous. | teach only | yes |
| to open (transitive) | 私は箱を開けませんでした。 | I didn't open the box. | あけませんでした | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to raise | 手を上げてください。 | Please raise your hand. | あげて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to raise | 声を上げませんでした。 | I didn't raise my voice. | あげませんでした | N4 L5 T5 C3 I3 — other verbs like 出す could fit the blank. | teach only | yes |
| to raise | 子供が手を上げましたから、答えました。 | The child raised his hand, so I answered. | あげました | N4 L3 T5 C4 I4 — から causal clause is slightly above strict N5 ceiling. | cloze+teach | yes |
| to play | 公園で遊びましょう。 | Let's play in the park. | あそびましょう | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other verbs like 歩く/走る given context. | teach only | yes |
| to play | 子供たちは庭で遊びます。 | The children play in the garden. | あそびます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to play | 今日は忙しいですから、遊びません。 | I'm busy today, so I won't play. | あそびません | N5 L5 T5 C3 I3 — Many verbs (行く, 寝る, 出かける) could fit the blank equally well. | teach only | yes |
| to wash | 晩御飯の後で、お皿を洗いましょう。 | Let's wash the dishes after dinner. | あらいましょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to wash | 汚いですから、手を洗ってください。 | Your hands are dirty, so please wash them. | あらって | N4 L5 T4 C4 I3 — Translation assumes 'hands' are dirty, but Japanese doesn't specify the subject of 汚い explicitly. | cloze+teach | yes |
| to wash | 今朝、車を洗いませんでした。 | I didn't wash the car this morning. | あらいませんでした | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to put in | 手紙を封筒に入れました。 | I put the letter in the envelope. | いれました | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to sell | あの店は魚を売ります。 | That store sells fish. | うります | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to sell | 古い自転車を売りましょう。 | Let's sell the old bicycle. | うりましょう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to sell | ここでは切手を売りませんか。 | Don't they sell stamps here? | うりません | N5 L5 T5 C4 I4 | cloze+teach | yes |
| apartment | 私のアパートは駅から近いです。 | My apartment is close to the station. | あぱあと | N5 L5 T5 C3 I3 — Blank could also fit 家 or 学校; not fully unique. | teach only | yes |
| apartment | 新しいアパートに住みたいです。 | I want to live in a new apartment. | あぱあと | N5 L5 T5 C3 I3 — Multiple dwelling nouns (家, マンション) could fit the blank. | teach only | yes |
| apartment | あなたのアパートは大きいですか。 | Is your apartment big? | あぱあと | N5 L5 T5 C2 I2 — Very generic; blank could be 家, 部屋, 車, etc. | teach only | yes |
| entrance | 図書館の入口で待っています。 | I'm waiting at the entrance of the library. | いりぐち | N5 L5 T5 C3 I3 — 出口 (exit) would also fit the blank equally well. | teach only | yes |
| entrance | 駅の入口で友達に会いました。 | I met my friend at the station entrance. | いりぐち | N5 L5 T5 C3 I4 — 出口 could also fit contextually. | teach only | yes |
| entrance | この入口は使いません。 | We don't use this entrance. | いりぐち | N5 L5 T5 C3 I3 — 出口 or other location words could also fit the blank. | teach only | yes |
| above | 本は机の上にあります。 | The book is on the desk. | うえ | N5 L5 T5 C2 I1 — Near-duplicate of sentence 0; 下/中 also plausible in blank. | teach only | yes |
| movie theater | 今晩、映画館へ行きませんか。 | Shall we go to the movie theater tonight? | えいがかん | N5 L5 T5 C3 I3 — Other locations could fill the blank equally well (e.g. 公園, デパート). | teach only | yes |
| movie theater | 映画館は暗いですから、目が疲れます。 | The movie theater is dark, so my eyes get tired. | えいがかん | N5 L4 T5 C4 I4 | cloze+teach | yes |
| movie theater | 新しい映画館で映画を見たいです。 | I want to watch a movie at the new movie theater. | えいがかん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| station | 駅が近いですから、便利です。 | The station is close, so it's convenient. | えき | N5 L5 T5 C3 I3 — Blank could be filled by many nouns (店, 会社, 学校), not uniquely 駅. | teach only | yes |
| station | 駅で会いましょう。 | Let's meet at the station. | えき | N5 L5 T5 C3 I3 — Many meeting-place nouns could fit the blank, though 駅 is a common choice. | teach only | yes |
| station | 私の家は駅から遠いです。 | My house is far from the station. | えき | N5 L5 T5 C3 I3 — Blank could be replaced with other location nouns (学校, 会社), reducing uniqueness. | teach only | yes |
| (my) father | 父は病気で病院に行きました。 | My father was sick and went to the hospital. | ちち | N5 L5 T5 C3 I3 — Blank could grammatically be filled by other family nouns (母, 兄, etc.), reducing unique recoverability. | teach only | yes |
| (my) father | 父と旅行に行きたいです。 | I want to go on a trip with my father. | ちち | N5 L5 T5 C3 I4 — Blank could be filled by other people nouns (母, 友達), slightly lowering recoverability. | teach only | yes |
| (my) mother | 母は今朝早く起きました。 | My mother woke up early this morning. | はは | N5 L5 T5 C2 I3 — Blank could be filled by many family/person nouns, not uniquely 母. | teach only | yes |
| (my) mother | 母は土曜日に買い物をします。 | My mother does shopping on Saturday. | はは | N5 L5 T5 C2 I2 — Generic subject-verb sentence; many nouns could fill the blank. | teach only | yes |
| pet | ペットが病気になりました。 | My pet became sick. | ぺっと | N4 L4 T5 C3 I3 — Other nouns (animal, child) could also fill the blank. | teach only | yes |
| pet | ペットと公園で遊びたいです。 | I want to play with my pet in the park. | ぺっと | N4 L4 T5 C3 I3 — Blank could be filled by friend/child/dog etc., not uniquely 'pet'. | teach only | yes |
| all of you | 皆さん、元気ですか。 | Everyone, are you well? | みなさん | N5 L5 T5 C3 I3 — A name+さん could also fit the blank, slightly reducing recoverability. | teach only | yes |
| all of you | 皆さん、土曜日に公園へ行きましょう。 | Everyone, let's go to the park on Saturday. | みなさん | N5 L5 T5 C3 I4 — Could also be a specific name+さん inviting someone, so not fully unique. | teach only | yes |
| all of you | 皆さんはいつ旅行に行きますか。 | When are all of you going on a trip? | みなさん | N5 L5 T5 C2 I3 — Blank could be filled with あなた or a name+さん, making it less uniquely recoverable. | teach only | yes |
| all | みんな元気です。 | Everyone is well. | みんな | N5 L5 T5 C2 I2 — Blank could be filled by many subjects (私/彼/皆さん), low cloze uniqueness. | teach only | yes |
| all | みんなで公園へ行きました。 | We all went to the park together. | みんな | N5 L5 T5 C4 I4 | cloze+teach | yes |
| parents | 両親は先月病気でした。 | My parents were sick last month. | りょうしん | N5 L5 T5 C2 I3 — Blank could be any person (father, brother, teacher, etc.), not uniquely recoverable. | teach only | yes |
| parents | 両親は毎朝早く起きます。 | My parents wake up early every morning. | りょうしん | N5 L5 T5 C2 I3 — Subject slot fits many nouns, low uniqueness. | teach only | yes |
| parents | 両親と旅行に行きたいです。 | I want to go on a trip with my parents. | りょうしん | N5 L5 T5 C2 I3 — Could be friends or other people, not strongly forced to 両親. | teach only | yes |
| liking | 私は旅行が好きです。 | I like traveling. | すき | N5 L5 T5 C3 I2 — Very similar template to sentence 0; low novelty. | teach only | yes |
| that | そのホテルは駅から近いです。 | That hotel is near the station. | その | N5 L5 T5 C2 I3 — Demonstrative choice not uniquely determined by context; この/あの also plausible. | teach only | yes |
| and then | パンを食べます。それから牛乳を飲みます。 | I eat bread. Then I drink milk. | それから | N5 L5 T5 C3 I2 — そして could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| and then | 買い物をします。それから映画を見ます。 | I go shopping. Then I watch a movie. | それから | N5 L5 T5 C3 I3 — そして could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| and then | 駅に着きます。それからバスに乗ります。 | I arrive at the station. Then I take a bus. | それから | N5 L5 T5 C3 I3 — そして could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| in that situation | それでは、公園で会いましょう。 | Well then, let's meet at the park. | それでは | N4 L5 T5 C2 I2 — Blank could also be filled by じゃあ or では, reducing uniqueness. | teach only | yes |
| in that situation | それでは、地図を見てください。 | Well then, please look at the map. | それでは | N4 L5 T5 C2 I2 — Blank could also be filled by other transition words. | teach only | yes |
| only ~ | 今晩は野菜だけ食べます。 | Tonight I will eat only vegetables. | だけ | N5 L5 T5 C3 I3 — も could also fit the blank grammatically, slightly reducing uniqueness. | teach only | yes |
| length | 箱のたては二メートルです。 | The box's length is two meters. | たて | N4 L5 T5 C2 I3 — よこ would also fit the blank, so the answer isn't uniquely forced. | teach only | yes |
| length | たてに並んでください。 | Please line up lengthwise. | たて | N4 L5 T5 C2 I3 — よこ could equally fill the blank, lowering recoverability. | teach only | yes |
| perhaps | 多分、明日は晴れです。 | Perhaps tomorrow will be sunny. | たぶん | N4 L5 T5 C3 I2 — Fairly generic weather sentence; other adverbs could fit the blank. | teach only | yes |
| gradually | 料理が段々上手になりました。 | I gradually became good at cooking. | だんだん | N5 L4 T5 C4 I3 | cloze+teach | yes |
| gradually | 段々忙しくなりました。 | I gradually became busy. | だんだん | N5 L4 T5 C4 I2 — Generic context, works but slightly template-like. | cloze+teach | yes |
| gradually | 空が段々暗くなりました。 | The sky gradually became dark. | だんだん | N5 L4 T5 C5 I4 | cloze+teach | yes |
| nose | 妹の鼻は小さいです。 | My little sister's nose is small. | はな | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other body parts (目, 手, 顔), reducing uniqueness. | teach only | yes |
| illness | 父は病気です。 | My father is sick. | びょうき | N5 L5 T5 C2 I1 — Generic template sentence; many words could fill the blank (元気, 忙しい, etc.). | teach only | yes |
| illness | 病気でしたから、会社に行きませんでした。 | Because I was sick, I didn't go to the office. | びょうき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| illness | 旅行の時、病気になりますか。 | Do you get sick when you travel? | びょうき | N4 L4 T5 C3 I4 — になります is slightly beyond strict N5 but still simple; other adjectives like 元気 could also fit the blank. | teach only | yes |
| ear | 兄の耳は大きいです。 | My older brother's ears are big. | みみ | N5 L5 T5 C2 I3 — Many body parts could fit 大きいです, so blank is not tightly constrained. | teach only | yes |
| ear | 飛行機の中で耳が痛くなかったです。 | My ears didn't hurt on the airplane. | みみ | N5 L5 T5 C4 I4 — Airplane context strongly suggests ears due to pressure, fairly recoverable. | cloze+teach | yes |
| ear | お風呂で耳を洗ってください。 | Please wash your ears in the bath. | みみ | N5 L5 T5 C2 I3 — 洗ってください could apply to many body parts (hands, face, hair), weak cloze cue. | teach only | yes |
| eye | 母の目は青いです。 | My mother's eyes are blue. | め | N4 L5 T5 C4 I3 | cloze+teach | yes |
| eye | 疲れて、目が開きませんでした。 | I was tired and my eyes wouldn't open. | め | N4 L4 T5 C4 I4 | cloze+teach | yes |
| to be sunny | 明日は晴れますから、公園へ行きましょう。 | Since it will be sunny tomorrow, let's go to the park. | はれます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be sunny | 今日は晴れませんでした。 | It was not sunny today. | はれません | N4 L5 T5 C2 I2 — Blank is too generic; many verbs/adjectives could fit the context. | teach only | yes |
| to be sunny | 午後から晴れますか。 | Will it be sunny from the afternoon? | はれます | N4 L5 T5 C3 I3 — Context allows other verbs (e.g., 降ります) so answer isn't fully forced. | teach only | yes |
| to blow | 風が強く吹きますから、窓を閉めてください。 | Since the wind is blowing strongly, please close the window. | ふきます | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to blow | 今日は風が吹きませんでした。 | The wind did not blow today. | ふきません | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to blow | 山で強い風が吹きました。 | A strong wind blew on the mountain. | ふきました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to precipitate | 今日は雨が降りませんでした。 | It did not rain today. | ふりません | N5 L5 T5 C5 I3 | cloze+teach | yes |
| mountain | 山に登ってください。 | Please climb the mountain. | やま | N5 L5 T5 C3 I3 | teach only | yes |
| mountain | あの山は高くないです。 | That mountain is not tall. | やま | N5 L5 T5 C2 I2 — Blank could be many nouns (building, tower, etc.), not just mountain. | teach only | yes |
| mountain | 山が近いですから、よく登ります。 | Since the mountain is close, I climb it often. | やま | N5 L5 T5 C5 I4 | cloze+teach | yes |
| beyond | 駅の向こうに会社があります。 | There is a company beyond the station. | むこう | N5 L5 T5 C2 I3 — Many location words (隣, 前, 後ろ) could fill the blank equally well. | teach only | yes |
| beyond | 八百屋の向こうで会いましょう。 | Let's meet beyond the greengrocer. | むこう | N5 L5 T5 C2 I3 — Blank could be filled by other location nouns like 前 or 隣, reducing recoverability. | teach only | yes |
| village | おじいさんは小さい村に住みます。 | Grandpa lives in a small village. | むら | N5 L5 T5 C3 I3 | teach only | yes |
| village | あの村の名前は何ですか。 | What is the name of that village? | むら | N5 L5 T5 C2 I3 — Many nouns could fill the blank (town, shop, person, etc.). | teach only | yes |
| village | 村は静かですから、好きです。 | I like the village because it's quiet. | むら | N4 L4 T5 C2 I3 — Blank could be filled by many place-related nouns like town or room. | teach only | yes |
| gate | 学校の門は九時に閉まります。 | The school gate closes at nine. | もん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| gate | あの門はどこですか。 | Where is that gate? | もん | N4 L5 T5 C2 I2 — Very generic template, many nouns could fill the blank. | teach only | yes |
| gate | 門の前で会いましょう。 | Let's meet in front of the gate. | もん | N5 L5 T5 C3 I4 — Other location nouns could also fit the blank. | teach only | yes |
| ~ shop | パン屋でパンを買います。 | I buy bread at the bakery. | や | N5 L5 T5 C4 I3 | cloze+teach | yes |
| ~ shop | 靴屋で靴を買いましょう。 | Let's buy shoes at the shoe shop. | や | N5 L5 T5 C4 I3 | cloze+teach | yes |
| greengrocer | 八百屋で野菜を買います。 | I buy vegetables at the greengrocer. | やおや | N5 L5 T5 C3 I3 — Could also be スーパー or 市場, so blank isn't uniquely determined. | teach only | yes |
| greengrocer | 八百屋はどこですか。 | Where is the greengrocer? | やおや | N5 L5 T5 C2 I2 — No contextual clue narrows the blank to greengrocer specifically. | teach only | yes |
| greengrocer | 八百屋で果物も買いましょう。 | Let's also buy fruit at the greengrocer. | やおや | N5 L5 T5 C3 I3 — Fruit context suggests a produce shop but doesn't uniquely force 八百屋 over 市場/スーパー. | teach only | yes |
| beside | 郵便局の横に銀行があります。 | There is a bank beside the post office. | よこ | N5 L5 T5 C4 I3 — 隣 could also fit the blank, slightly reducing certainty. | cloze+teach | yes |
| beside | 机の横に椅子を置いてください。 | Please put the chair beside the desk. | よこ | N5 L5 T5 C4 I3 — 隣 could also fit the blank, slightly reducing certainty. | cloze+teach | yes |
| beside | 私の横に座りませんか。 | Won't you sit beside me? | よこ | N5 L5 T5 C4 I4 — 隣 could also fit the blank, slightly reducing certainty. | cloze+teach | yes |
| corridor | 廊下は静かです。 | The corridor is quiet. | ろうか | N4 L5 T5 C2 I2 — Many nouns could fill the blank (e.g. 部屋, 教室), so context doesn't uniquely force 廊下. | teach only | yes |
| corridor | 廊下を走らないでください。 | Please don't run in the corridor. | ろうか | N5 L5 T5 C4 I4 — Strong collocation with 走らないで makes 廊下 a very natural, fairly unique answer. | cloze+teach | yes |
| corridor | トイレは廊下の左にありますか。 | Is the toilet on the left of the corridor? | ろうか | N4 L5 T5 C3 I3 — Context (トイレは＿の左に) could also fit other location words like 部屋 or 教室, slightly reducing recoverability. | teach only | yes |
| difficult | この問題は難しいですか。 | Is this problem difficult? | むずかしい | N5 L5 T5 C2 I2 — Very generic template; blank could be filled by many adjectives (簡単, 面白い, etc.). | teach only | yes |
| difficult | この料理は難しいから、作りません。 | This dish is difficult, so I won't make it. | むずかしい | N4 L4 T5 C3 I3 — から is slightly beyond strict N5 but common; blank could plausibly fit other adjectives like 面倒/大変. | teach only | yes |
| easy | この本は易しいです。 | This book is easy. | やさしい | N5 L5 T5 C2 I1 — Generic template sentence; blank could be filled by many adjectives. | teach only | yes |
| easy | 易しい問題をしましょうか。 | Shall we do an easy problem? | やさしい | N5 L5 T5 C2 I3 — Blank could also be filled with 難しい or other adjectives, reducing recoverability. | teach only | yes |
| easy | このテストは易しいから、大丈夫です。 | This test is easy, so it's fine. | やさしい | N5 L5 T5 C3 I3 — Context with だいじょうぶ narrows options somewhat but still not fully unique. | teach only | yes |
| inexpensive | この靴は安いです。 | These shoes are inexpensive. | やすい | N5 L5 T5 C2 I2 — Generic template sentence; many adjectives could fill the blank. | teach only | yes |
| inexpensive | 魚が安いから、買いました。 | The fish was cheap, so I bought it. | やすい | N5 L4 T5 C3 I3 — から reason clause is slightly beyond strict N5 but common; blank could be filled by other adjectives like おいしい. | teach only | yes |
| inexpensive | 安い店へ行きましょう。 | Let's go to a cheap store. | やすい | N5 L5 T5 C3 I3 — Blank could plausibly be other adjectives like 大きい or新しい, reducing forced recoverability. | teach only | yes |
| famous | 父は有名な医者です。 | My father is a famous doctor. | ゆうめいな | N5 L5 T5 C3 I3 | teach only | yes |
| famous | あの人は有名ですか。 | Is that person famous? | ゆうめい | N5 L5 T5 C3 I2 | teach only | yes |
| famous | この店は有名だから、人が多いです。 | This shop is famous, so there are many people. | ゆうめい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| slowly | ゆっくりと歩きましょう。 | Let's walk slowly. | ゆっくりと | N5 L5 T5 C4 I3 | cloze+teach | yes |
| slowly | 母はゆっくりと料理を作ります。 | My mother makes food slowly. | ゆっくりと | N5 L5 T5 C3 I3 — Other adverbs could also fit the blank. | teach only | yes |
| weak | 弟は体が弱いです。 | My younger brother's body is weak. | よわい | N5 L5 T5 C3 I3 | teach only | yes |
| weak | 私は弱くないです。 | I'm not weak. | よわくない | N4 L5 T5 C2 I2 — Very generic template sentence with little context to force the specific word. | teach only | yes |
| splendid | おじいさんの家はりっぱです。 | Grandfather's house is splendid. | りっぱ | N4 L5 T5 C2 I2 — Many other adjectives (きれい、大きい等) could fit the blank. | teach only | yes |
| splendid | この建物はりっぱですか。 | Is this building splendid? | りっぱ | N4 L5 T5 C2 I2 — Generic question; blank could be filled by many adjectives. | teach only | yes |
| young | 母はまだ若いです。 | My mother is still young. | わかい | N5 L5 T5 C3 I3 — Many adjectives could fit the blank besides 若い. | teach only | yes |
| young | あの人は若いですか。 | Is that person young? | わかい | N5 L5 T5 C2 I2 — Generic template; several adjectives could fill the blank. | teach only | yes |
| young | 私は若くないです。 | I'm not young. | わかくない | N4 L4 T5 C2 I2 — Negative adjective form is fine but blank could be many other adjectives. | teach only | yes |
| how many | 卵はいくつありますか。 | How many eggs are there? | いくつ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| how many | 部屋はいくつ要りますか。 | How many rooms do you need? | いくつ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| one | 一番好きな食べ物は魚です。 | My favorite food is fish. | いち | N5 L5 T5 C4 I4 | cloze+teach | yes |
| one | 一月に旅行しましょう。 | Let's travel in January. | いち | N4 L5 T5 C2 I3 — Any month could fill the blank grammatically. | teach only | yes |
| five things | 卵が五つあります。 | There are five eggs. | いつつ | N5 L5 T5 C3 I3 — Any number could fit grammatically, so exact number isn't uniquely recoverable from context. | teach only | yes |
| five things | 箱が五つ欲しいです。 | I want five boxes. | いつつ | N5 L5 T5 C3 I3 — Number choice not contextually forced. | teach only | yes |
| Yen | 切符は二百円ですか。 | Is the ticket 200 yen? | えん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| Yen | 千円を財布に入れました。 | I put 1000 yen in my wallet. | えん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| counter for occurrences (~ times) | 一日に三回薬を飲みます。 | I take medicine three times a day. | かい | N5 L5 T5 C4 I4 — 度 could also fit but 回 is the more natural choice | cloze+teach | yes |
| counter for occurrences (~ times) | 一週間に何回買い物をしますか。 | How many times a week do you go shopping? | かい | N5 L5 T5 C4 I4 — 何度 is a plausible alternative but 回 is standard | cloze+teach | yes |
| counter for occurrences (~ times) | 今週、もう一回映画を見ましょう。 | Let's watch a movie once more this week. | かい | N5 L5 T5 C4 I4 — もう一度 could also work but 回 fits naturally | cloze+teach | yes |
| counter for stories of a building | 病院の何階に医者がいますか。 | Which floor of the hospital is the doctor on? | がい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| counter for stories of a building | 私の部屋は五階です。 | My room is on the fifth floor. | かい | N4 L5 T5 C4 I2 — Generic template sentence, low interest. | cloze+teach | yes |
| nine | 今、九時です。 | It's nine o'clock now. | く | N5 L5 T5 C2 I2 — Any number could fill the blank grammatically, so recoverability is low; fairly generic sentence. | teach only | yes |
| nine | 九人の学生が教室にいます。 | There are nine students in the classroom. | きゅう | N5 L5 T5 C2 I2 — Number blank could be filled by any counter value, limiting recoverability. | teach only | yes |
| that's right | そうですか。次の駅で降りますか。 | Is that so? Are you getting off at the next station? | そう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| that's right | そうでした、バスは遅かったです。 | That's right, the bus was late. | そう | N4 L5 T5 C4 I3 | cloze+teach | yes |
| and so | 土曜日に映画を見ます。そして、レストランで晩御飯を食べます。 | On Saturday I'll watch a movie, and then eat dinner at a restaurant. | そして | N5 L5 T5 C4 I3 — それから could also fit, slightly lowering recoverability. | cloze+teach | yes |
| and so | 野菜を洗いました。そして、晩御飯を作りました。 | I washed the vegetables, and then made dinner. | そして | N5 L5 T5 C4 I3 — それから is also plausible, slightly reducing uniqueness. | cloze+teach | yes |
| men's suit | 会社へ行く時、背広を着ます。 | I wear a suit when I go to the office. | せびろ | N5 L5 T5 C3 I3 — Blank could be filled with other clothing items like シャツ or ネクタイ, though 着る narrows it somewhat. | teach only | yes |
| men's suit | 昨日、新しい背広を買いました。 | Yesterday I bought a new suit. | せびろ | N5 L5 T5 C2 I3 — Many nouns could fit '新しい___を買いました', low uniqueness for the blank. | teach only | yes |
| men's suit | その背広を見せてください。 | Please show me that suit. | せびろ | N5 L5 T5 C1 I2 — Very generic template; almost any noun could fill the blank. | teach only | yes |
| rice bowl | 茶碗を洗ってください。 | Please wash the rice bowl. | ちゃわん | N5 L5 T5 C2 I3 — Blank could be filled by many objects (dish, cup, etc.), reducing recoverability. | teach only | yes |
| rice bowl | 茶碗は台所にありました。 | The rice bowl was in the kitchen. | ちゃわん | N5 L5 T5 C2 I3 — Many nouns could fit the blank; context doesn't force 茶碗. | teach only | yes |
| tape recorder | テープレコーダーで音楽を聞きます。 | I listen to music with the tape recorder. | てえぷれこうだあ | N4 L5 T5 C2 I3 — Many devices (ラジオ、スマホ、CDプレーヤー) could fill the blank; context doesn't force 'tape recorder'. | teach only | yes |
| tape recorder | 先週、テープレコーダーを使いました。 | Last week, I used a tape recorder. | てえぷれこうだあ | N4 L5 T5 C1 I2 — Extremely generic; almost any noun could fit '使いました', giving very low cloze recoverability. | teach only | yes |
| tape recorder | そのテープレコーダーを貸してください。 | Please lend me that tape recorder. | てえぷれこうだあ | N4 L5 T5 C2 I3 — Any borrowable object fits the blank, so recoverability is low despite natural phrasing. | teach only | yes |
| table | テーブルの上に本があります。 | There is a book on the table. | てえぶる | N5 L5 T5 C3 I2 — generic template sentence; other furniture nouns could fit the blank | teach only | yes |
| table | テーブルの上にお皿を置いてください。 | Please put the plate on the table. | てえぶる | N5 L5 T5 C3 I3 — slightly more context but still many surface nouns could fill the blank | teach only | yes |
| table | テーブルの下に猫がいました。 | There was a cat under the table. | てえぶる | N5 L5 T5 C3 I4 — more vivid scenario but blank could still be filled by other furniture words | teach only | yes |
| electricity | 電気を消してください。 | Please turn off the light. | でんき | N5 L5 T5 C3 I3 — Blank could also be filled by other things one turns off, e.g. テレビ. | teach only | yes |
| electricity | 部屋の電気は明るいです。 | The room's light is bright. | でんき | N4 L5 T5 C3 I3 — 明るい could describe other nouns too, slightly reducing recoverability. | teach only | yes |
| electricity | 昨夜、電気を消しませんでした。 | Last night, I didn't turn off the light. | でんき | N5 L5 T5 C3 I3 — Similar ambiguity as with 消す objects. | teach only | yes |
| door (Japanese style) | 戸を閉めてください。 | Please close the door. | と | N5 L5 T5 C3 I3 — Could equally be ドア or 窓 in this context. | teach only | yes |
| door (Japanese style) | この戸は古いです。 | This door is old. | と | N5 L5 T5 C2 I2 — Generic template; many nouns fit the blank. | teach only | yes |
| door (Japanese style) | 風で戸が開きました。 | The door opened because of the wind. | と | N5 L5 T5 C3 I4 — Window (窓) could also fit the context. | teach only | yes |
| door (Western style) | 会社のドアの前に立っています。 | I am standing in front of the office door. | どあ | N5 L5 T5 C3 I3 — Blank could be filled by other nouns (window, desk) given the context. | teach only | yes |
| door (Western style) | ドアを開けてください。 | Please open the door. | どあ | N5 L5 T5 C3 I3 — Common template command; blank could fit other openable objects. | teach only | yes |
| door (Western style) | 昨日、ドアを閉めませんでした。 | Yesterday I didn't close the door. | どあ | N5 L5 T5 C3 I3 — Blank could fit other closable objects like window. | teach only | yes |
| no | いいえ、忙しくないです。 | No, I'm not busy. | いいえ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| no | いいえ、今日は寒くないです。 | No, it's not cold today. | いいえ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to brush | 毎朝、歯を磨きます。 | I brush my teeth every morning. | みがきます | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to brush | 仕事の前に靴を磨いてください。 | Please polish your shoes before work. | みがいて | N5 L5 T5 C4 I4 — 洗う could also fit context, slightly reduces recoverability | cloze+teach | yes |
| to brush | 時間がないから、歯を磨きませんでした。 | Since I didn't have time, I didn't brush my teeth. | みがきませんでした | N5 L4 T5 C5 I4 — から clause is slightly beyond strict N5 but commonly taught early | cloze+teach | yes |
| to show | 会社で新しい写真を見せます。 | I will show a new photo at the office. | みせます | N4 L5 T5 C2 I2 — Many verbs (撮る, 見る, etc.) could fill the blank, low uniqueness. | teach only | yes |
| to show | 駅で切符を見せてください。 | Please show your ticket at the station. | みせて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to show | 忙しいから、写真を見せませんでした。 | Since I was busy, I didn't show the photo. | みせませんでした | N4 L5 T5 C2 I2 — Blank could be filled by several verbs like 撮る or 見る, reducing recoverability. | teach only | yes |
| to see | 仕事の後で、テレビを見てください。 | Please watch TV after work. | みて | N5 L5 T5 C2 I3 — Blank could also be 消して/つけて, not uniquely 見て | teach only | yes |
| to see | 忙しいから、映画を見ませんでした。 | Since I was busy, I didn't watch the movie. | みませんでした | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to hold | 財布を持っていますか。 | Do you have your wallet with you? | もって | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to rest | 今日は仕事を休みます。 | I will take a day off work today. | やすみます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to rest | 疲れたから、少し休みました。 | Since I was tired, I rested a little. | やすみました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to rest | 疲れましたから、会社を休んでください。 | Since you're tired, please take a day off from the company. | やすんで | N4 L5 T5 C4 I4 | cloze+teach | yes |
| to hand over | この手紙を渡してください。 | Please hand over this letter. | わたして | N5 L5 T5 C3 I3 — Blank could also be filled by other verbs like 見せて or 送って. | teach only | yes |
| airplane | 飛行機は今日飛びませんでした。 | The airplane didn't fly today. | ひこうき | N5 L5 T5 C3 I3 | teach only | yes |
| airplane | 家族と一緒に飛行機に乗りましょう。 | Let's get on an airplane together with the family. | ひこうき | N5 L5 T5 C2 I3 — Many vehicles could fill the blank (train, bus, car). | teach only | yes |
| airplane | 友達は飛行機で来ますから、荷物が多いです。 | Because my friend is coming by airplane, there is a lot of luggage. | ひこうき | N4 L5 T4 C2 I3 — Causal link between mode of transport and luggage is odd, and many transport words could fill the blank. | teach only | yes |
| travel | 家族と旅行をしましょう。 | Let's take a trip with the family. | りょこう | N5 L5 T5 C2 I3 — Blank could be many activities with family, not just travel. | teach only | yes |
| travel | 明日旅行に行きますから、今晩晩御飯を作ります。 | Since I'm going on a trip tomorrow, I'll cook dinner tonight. | りょこう | N4 L5 T5 C3 I4 — Causal link to dinner hints at travel but not fully unique. | teach only | yes |
| travel | 今年は旅行をしませんでした。 | I didn't travel this year. | りょこう | N5 L5 T5 C2 I2 — Generic sentence, blank could be many nouns. | teach only | yes |
| cute | この猫は可愛いですね。 | This cat is cute, isn't it? | かわいい | N5 L5 T5 C3 I3 — Other adjectives (かわいい/きれい/小さい) could fit the blank grammatically, reducing recoverability. | teach only | yes |
| cute | 妹の帽子はとても可愛いです。 | My little sister's hat is very cute. | かわいい | N5 L5 T5 C3 I3 — Blank could be filled by other adjectives like きれい or小さい, slightly reducing uniqueness. | teach only | yes |
| cute | 子供の靴は可愛いですか。 | Are the child's shoes cute? | かわいい | N5 L5 T5 C3 I2 — Very generic template sentence; other adjectives could also fit the blank. | teach only | yes |
| yellow | 黄色いバスが来ました。 | A yellow bus came. | きいろい | N5 L5 T5 C2 I3 — Any color word could fill the blank; context doesn't force 'yellow'. | teach only | yes |
| yellow | 黄色い果物はいくらですか。 | How much is the yellow fruit? | きいろい | N5 L5 T5 C2 I3 — Any color word could fill the blank; context doesn't force 'yellow'. | teach only | yes |
| yellow | 黄色いシャツを着ます。 | I will wear a yellow shirt. | きいろい | N5 L5 T5 C2 I3 — Any color word could fill the blank; context doesn't force 'yellow'. | teach only | yes |
| dirty | 朝、机の上が汚いです。 | In the morning, the top of the desk is dirty. | きたない | N4 L5 T5 C2 I2 — Blank could be many adjectives (busy, messy, cold), weak cloze context. | teach only | yes |
| dirty | 手が汚いから、洗います。 | Since my hands are dirty, I'll wash them. | きたない | N5 L4 T5 C5 I3 — から clause slightly above pure N5 but common and context strongly forces 汚い. | cloze+teach | yes |
| dirty | この電車はいつも汚いですか。 | Is this train always dirty? | きたない | N4 L5 T5 C2 I3 — Blank could fit many adjectives (crowded, slow, noisy), weak cloze constraint. | teach only | yes |
| dislike | 私は魚が嫌いです。 | I dislike fish. | きらい | N5 L5 T5 C4 I2 | cloze+teach | yes |
| dislike | 薬が嫌いだから、飲みません。 | Since I dislike medicine, I don't drink it. | きらい | N5 L4 T5 C5 I4 | cloze+teach | yes |
| dislike | 牛乳が嫌いですか。 | Do you dislike milk? | きらい | N5 L5 T5 C4 I2 | cloze+teach | yes |
| pretty | この店の花は綺麗です。 | The flowers at this shop are pretty. | きれい | N5 L5 T5 C2 I3 — Blank could fit many adjectives (big, red, etc.), not uniquely determined. | teach only | yes |
| dark | 朝はまだ暗いです。 | It's still dark in the morning. | くらい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| dark | 夜の道は暗いから、危ないです。 | The road at night is dark, so it's dangerous. | くらい | N5 L4 T5 C3 I4 — から used causally is fine but other adjectives like 狭い or 危険 could also fit context. | teach only | yes |
| dark | この部屋は暗いですか。 | Is this room dark? | くらい | N4 L5 T5 C2 I2 — Generic template sentence; many adjectives could fill the blank. | teach only | yes |
| black | 黒いかばんを買いたいです。 | I want to buy a black bag. | くろい | N5 L5 T5 C2 I3 — Any color adjective could fill the blank, so recoverability is low. | teach only | yes |
| black | あの黒い車は速いです。 | That black car is fast. | くろい | N5 L5 T5 C2 I3 — Other colors could also fit grammatically. | teach only | yes |
| black | 黒い靴下をはきます。 | I wear black socks. | くろい | N5 L5 T5 C2 I3 — Color word is not uniquely determined by context. | teach only | yes |
| quiet | 電車の中は静かです。 | Inside the train is quiet. | しずか | N5 L5 T5 C3 I3 — Blank could also be filled by other adjectives like きれい or いっぱい. | teach only | yes |
| quiet | 病院はいつも静かですか。 | Is the hospital always quiet? | しずか | N5 L5 T5 C3 I3 — Context allows other plausible adjectives (きれい, いい) in the blank. | teach only | yes |
| quiet | 朝は家が静かです。 | In the morning, the house is quiet. | しずか | N5 L5 T5 C3 I3 — Other adjectives like にぎやか or きれい could also fit the blank. | teach only | yes |
| siblings | 兄弟は三人います。 | I have three siblings. | きょうだい | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (friends, classmates, etc.), reducing cloze specificity. | teach only | yes |
| siblings | 兄弟と一緒に病院へ行きましょう。 | Let's go to the hospital with my sibling. | きょうだい | N4 L5 T4 C2 I3 — Many other nouns (friend, colleague) could fit the blank equally well. | teach only | yes |
| siblings | 兄弟は今忙しくないです。 | My sibling is not busy right now. | きょうだい | N5 L5 T5 C2 I2 — Generic sentence; blank could be filled by various people nouns. | teach only | yes |
| police officer | 駅の前に警官がいます。 | There is a police officer in front of the station. | けいかん | N5 L5 T5 C3 I3 — Blank could be filled by many nouns (person, dog, car) besides police officer. | teach only | yes |
| police officer | あの警官は若いです。 | That police officer is young. | けいかん | N5 L5 T5 C2 I2 — Very generic template; almost any noun could fill the blank. | teach only | yes |
| this person | こっちは会社の人です。 | This person is from the company. | こっち | N4 L5 T4 C2 I2 — Common intro phrase but blank ambiguous with これ/こちら/あの人. | teach only | yes |
| myself | 自分の仕事をしました。 | I did my own work. | じぶん | N4 L5 T5 C2 I2 — Many other words (私/彼/自分) could fill the blank equally well. | teach only | yes |
| myself | 自分の自転車を使いません。 | I don't use my own bicycle. | じぶん | N4 L5 T5 C2 I2 — Blank could be filled by other possessive words like 私/彼. | teach only | yes |
| plural suffix | 学生たちは教室にいます。 | The students are in the classroom. | たち | N5 L5 T5 C5 I2 | cloze+teach | yes |
| plural suffix | 医者たちは病院で働いています。 | The doctors work at the hospital. | たち | N5 L5 T5 C5 I2 | cloze+teach | yes |
| plural suffix | 子供たちと買い物に行きましょう。 | Let's go shopping with the children. | たち | N5 L5 T5 C5 I3 | cloze+teach | yes |
| someone | 誰か会社にいますか。 | Is someone at the office? | だれか | N4 L5 T5 C3 I2 — Generic but grammatically fine; blank could arguably be filled by many nouns in context. | teach only | yes |
| someone | 誰かがバスの中で寝ています。 | Someone is sleeping in the bus. | だれか | N5 L4 T5 C3 I3 — Natural and clear; blank could be filled by other subjects too, slightly limiting cloze uniqueness. | teach only | yes |
| to put | 本を机の上に置いてください。 | Please put the book on the desk. | おいて | N5 L5 T5 C4 I2 | cloze+teach | yes |
| to push | ドアが重いですから、強く押します。 | Since the door is heavy, I'll push it hard. | おします | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to push | そのボタンを押しません。 | I don't press that button. | おしません | N4 L5 T5 C4 I2 — Generic, lacks context beyond object-verb pairing. | cloze+teach | yes |
| to buy | お腹がすきましたから、パンを買います。 | Since I'm hungry, I'll buy bread. | かいます | N5 L5 T5 C2 I3 — 食べます could also fit the blank, reducing uniqueness. | teach only | yes |
| to buy | 高いですから、この時計を買いません。 | Since it's expensive, I won't buy this watch. | かいません | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to buy | 明日、卵を買ってください。 | Please buy eggs tomorrow. | かって | N5 L5 T5 C2 I3 — 焼いて or 食べて could also fit the blank. | teach only | yes |
| to return something | 本を読みましたから、図書館に返します。 | Since I finished reading the book, I'll return it to the library. | かえします | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to return something | 借りたお金をまだ返しません。 | I haven't returned the money I borrowed yet. | かえしません | N5 L3 T5 C5 I3 — 借りた as a past-tense modifier before a noun is slightly above strict N5 but very common. | cloze+teach | yes |
| to put on (e.g., glasses) | 目が悪いですから、眼鏡を掛けます。 | Since my eyes are bad, I wear glasses. | かけます | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to put on (e.g., glasses) | 今日は眼鏡を掛けません。 | I'm not wearing glasses today. | かけません | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other verbs like 買います, reducing uniqueness. | teach only | yes |
| to wear | 寒いですから、帽子をかぶります。 | Since it's cold, I'll wear a hat. | かぶります | N5 L5 T5 C4 I3 — 買います could also fit contextually, slightly reducing recoverability. | cloze+teach | yes |
| to wear | 家の中で帽子をかぶりません。 | I don't wear a hat inside the house. | かぶりません | N5 L5 T5 C4 I3 — 脱ぎません could also plausibly fit the blank. | cloze+teach | yes |
| to wear | 外に出る時、帽子をかぶってください。 | Please wear a hat when you go outside. | かぶって | N5 L4 T5 C5 I4 — 外に出る時 uses a slightly advanced clause but is common and understandable at this level. | cloze+teach | yes |
| to borrow | お金がありませんから、友達に借ります。 | Since I have no money, I'll borrow from a friend. | かります | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to borrow | 辞書を借りません。 | I won't borrow a dictionary. | かりません | N4 L5 T5 C2 I2 — Too generic; blank could be many verbs (buy, read, need, etc.). | teach only | yes |
| to borrow | 図書館で本を借りてください。 | Please borrow a book at the library. | かりて | N5 L5 T5 C4 I4 | cloze+teach | yes |
| seven | 毎朝七時に起きます。 | I get up at seven every morning. | しち | N5 L5 T5 C2 I2 — Any number could fill the blank (七時→any time), so context doesn't force 'seven' specifically. | teach only | yes |
| seven | 土曜日に七時に出かけます。 | I go out at seven on Saturday. | しち | N5 L5 T5 C2 I2 — Any number could fill the blank; no context narrows it to seven. | teach only | yes |
| seven | 七時までに駅に行きたいです。 | I want to get to the station by seven o'clock. | しち | N5 L5 T5 C2 I2 — Any number could fill the blank; no context narrows it to seven. | teach only | yes |
| ten | 毎晩十時に寝ます。 | I go to bed at ten every night. | じゅう | N5 L5 T5 C2 I3 — Any number could fill the blank; context doesn't force 'ten'. | teach only | yes |
| ten | 図書館で本を十冊借りました。 | I borrowed ten books from the library. | じゅっ | N5 L4 T5 C2 I3 — Counter usage is natural but the numeral itself isn't uniquely recoverable from context. | teach only | yes |
| ten | 友達と十時に会いたいです。 | I want to meet my friend at ten o'clock. | じゅう | N5 L5 T5 C2 I3 — Same issue: any time/number could logically fit the blank. | teach only | yes |
| counter for people | 私の家族は五人です。 | My family has five people. | にん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| counter for people | 昨日、教室に学生が十人いました。 | Yesterday, there were ten students in the classroom. | にん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| counter for people | 友達と二人で旅行したいです。 | I want to travel with a friend, just the two of us. | り | N5 L4 T5 C4 I3 — Splitting 二人(ふたり) into 二/り for the blank is slightly awkward since ふたり is an irregular whole-word reading. | cloze+teach | yes |
| little | 少しお金があります。 | I have a little money. | すこし | N5 L5 T5 C2 I2 — Other quantity words like たくさん could also fit the blank. | teach only | yes |
| little | 今朝、少し疲れました。 | I got a little tired this morning. | すこし | N5 L5 T5 C3 I3 — Other degree adverbs like とても could also fit. | teach only | yes |
| little | 少し休みたいです。 | I want to rest a little. | すこし | N5 L5 T5 C3 I3 — Other adverbs like ちょっと or たくさん could also fit the blank. | teach only | yes |
| at a time | 一人ずつ部屋に入ってください。 | Please come into the room one at a time. | ずつ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| at a time | みんなに紙を二枚ずつ渡しました。 | I gave everyone two sheets of paper each. | ずつ | N5 L4 T5 C4 I4 | cloze+teach | yes |
| thousand | この切符は千円でした。 | This ticket was a thousand yen. | せん | N5 L5 T5 C2 I2 — Any number could fill the blank; not uniquely recoverable. | teach only | yes |
| thousand | 千円ください。 | Please give me a thousand yen. | せん | N5 L5 T5 C2 I2 — Blank could be any amount, not uniquely 千. | teach only | yes |
| thousand | もう千円要ります。 | I need another thousand yen. | せん | N4 L3 T4 C2 I3 — 要ります is slightly above N5 ceiling; number blank not uniquely recoverable. | teach only | yes |
| counter for vehicles | 家の前に自動車が二台あります。 | There are two cars in front of the house. | だい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| counter for vehicles | 新しい自転車を一台買いたいです。 | I want to buy one new bicycle. | だい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| counter for occurrences | 一日に三度薬を飲みます。 | I take medicine three times a day. | ど | N5 L5 T5 C3 I3 — 回 could also fill the blank, slightly reducing uniqueness. | teach only | yes |
| counter for occurrences | 病院に二度行きました。 | I went to the hospital twice. | ど | N5 L5 T5 C3 I3 — 回 is an equally plausible substitute for 度 here. | teach only | yes |
| place | 静かな所に住みたいです。 | I want to live in a quiet place. | ところ | N5 L5 T5 C3 I3 — Blank could also be filled by other place nouns like 町 or 国, reducing uniqueness. | teach only | yes |
| place | 友達と面白い所へ行きました。 | I went to an interesting place with a friend. | ところ | N4 L5 T5 C2 I3 — Blank could be filled with many other nouns like 店 or 国, weakening uniqueness. | teach only | yes |
| next to | 隣の部屋は静かです。 | The room next door is quiet. | となり | N5 L5 T5 C3 I3 | teach only | yes |
| next to | 隣に猫がいますか。 | Is there a cat next door? | となり | N5 L5 T4 C3 I3 — other location words could also fit the blank | teach only | yes |
| next to | 隣の公園で遊びました。 | We played in the park next door. | となり | N5 L5 T5 C3 I4 | teach only | yes |
| inside | 箱の中に何がありますか。 | What is inside the box? | なか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| inside | 家の中は暖かいです。 | It's warm inside the house. | なか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| inside | 教室の中で宿題をしました。 | I did homework inside the classroom. | なか | N5 L5 T5 C4 I4 | cloze+teach | yes |
| west | 西の空が赤いです。 | The western sky is red. | にし | N5 L5 T5 C3 I3 — Red sky could suggest either west or east, so blank isn't fully forced. | teach only | yes |
| west | 駅は西にありますか。 | Is the station to the west? | にし | N5 L5 T5 C2 I2 — Any direction word (東, 南, 北, 右, 左) fits equally well, making the blank hard to pin down. | teach only | yes |
| west | 西へ歩きました。 | I walked to the west. | にし | N5 L5 T5 C2 I2 — Generic sentence; many direction words could fill the blank. | teach only | yes |
| garden | 庭に花が咲きました。 | Flowers bloomed in the garden. | にわ | N5 L5 T5 C3 I4 — Could also be 花壇/公園, though garden fits naturally. | teach only | yes |
| garden | 庭で遊びたいです。 | I want to play in the garden. | にわ | N5 L5 T5 C2 I3 — Many places fit the blank (公園, 家, 部屋, etc.). | teach only | yes |
| garden | 庭はきれいですか。 | Is the garden pretty? | にわ | N4 L5 T5 C1 I1 — Generic template sentence; blank could be almost any noun. | teach only | yes |
| bridge | この橋は長いです。 | This bridge is long. | はし | N4 L5 T5 C3 I2 — Generic template; other nouns (川、道) could fit the blank. | teach only | yes |
| bridge | 橋を渡りました。 | I crossed the bridge. | はし | N5 L5 T5 C4 I4 — 渡る strongly implies 橋 or 道, giving good but not perfect recoverability. | cloze+teach | yes |
| bridge | あの橋は有名ですか。 | Is that bridge famous? | はし | N4 L5 T5 C3 I2 — Generic template; many nouns could be 'famous' here. | teach only | yes |
| east | 東に大きい公園があります。 | There is a big park to the east. | ひがし | N5 L5 T5 C2 I3 — Any direction word (西/北/南) could fill the blank equally well. | teach only | yes |
| east | 東へ行きたいです。 | I want to go east. | ひがし | N5 L5 T5 C2 I3 — Any direction word could fit the blank. | teach only | yes |
| east | 東の方はどうですか。 | How is it to the east? | ひがし | N5 L5 T5 C2 I3 — Generic sentence; any direction word could fill the blank. | teach only | yes |
| left hand side | 左に郵便局があります。 | There is a post office on the left. | ひだり | N5 L5 T5 C3 I3 — 右も文法的に入るため一意性はやや低い | teach only | yes |
| left hand side | 左を見てください。 | Please look to the left. | ひだり | N5 L5 T5 C3 I2 — 右でも成立するため一意性はやや低い | teach only | yes |
| this month | 今月はテストが多いです。 | This month there are many tests. | こんげつ | N5 L5 T5 C2 I3 — Many time words (毎月,来月,先月) could fit the blank equally well. | teach only | yes |
| this month | 今月、友達と映画を見ました。 | This month I watched a movie with a friend. | こんげつ | N5 L5 T5 C2 I3 — Past tense context doesn't uniquely force 今月; 先月/昨日 etc. also fit. | teach only | yes |
| this month | 今月、新しいレストランへ行きたいです。 | This month I want to go to a new restaurant. | こんげつ | N5 L5 T5 C2 I3 — 来月やいつか etc. could also fill the blank, reducing recoverability. | teach only | yes |
| this week | 今週は天気がいいです。 | The weather is nice this week. | こんしゅう | N5 L5 T5 C3 I2 — 今日 or other time words could also fit the blank | teach only | yes |
| this week | 今週、宿題が多かったです。 | There was a lot of homework this week. | こんしゅう | N5 L5 T5 C3 I3 — other time words like 先週/今日 could also fit | teach only | yes |
| this week | 今週、公園で遊びたいです。 | I want to play in the park this week. | こんしゅう | N5 L5 T5 C3 I3 — other time words like 来週/今日 could also fit | teach only | yes |
| future | レストランで先に食べました。 | I ate first at the restaurant. | さきに | N4 L5 T5 C3 I3 | teach only | yes |
| future | 先に教室へ行ってください。 | Please go to the classroom first. | さきに | N4 L5 T5 C3 I3 | teach only | yes |
| year after next | さ来年、外国へ旅行します。 | The year after next, I will travel abroad. | さらいねん | N5 L5 T5 C2 I3 — Blank could equally be filled by 来年, 今年, 来月, etc.; context doesn't force さ来年 specifically. | teach only | yes |
| year after next | さ来年、大学に入りたいです。 | I want to enter university the year after next. | さらいねん | N5 L5 T5 C2 I3 — Same issue: any time word (来年, 今年) fits grammatically and semantically. | teach only | yes |
| year after next | さ来年、車を買いますか。 | Will you buy a car the year after next? | さらいねん | N5 L5 T5 C2 I2 — Generic template; many time expressions could fill the blank equally well. | teach only | yes |
| time | 授業の時間は九時からです。 | Class time is from nine o'clock. | じかん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| time | 昨日、宿題をする時間がありませんでした。 | Yesterday I didn't have time to do homework. | じかん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| time | もっと時間が欲しいです。 | I want more time. | じかん | N5 L5 T5 C2 I3 — Blank could be filled by many nouns like お金, 休み, etc., reducing recoverability. | teach only | yes |
| during | 今日は一日中、雨でした。 | It rained all day today. | じゅう | N5 L4 T5 C5 I3 | cloze+teach | yes |
| during | 授業中、寝ました。 | I slept during class. | ちゅう | N4 L4 T5 C3 I3 — Sentence uses ちゅう reading, inconsistent with the stated target reading じゅう, which may confuse cloze answer expectations. | teach only | yes |
| during | 夏休み中、旅行しました。 | I traveled during summer vacation. | ちゅう | N4 L4 T5 C3 I3 — Sentence uses ちゅう reading, inconsistent with the stated target reading じゅう, which may confuse cloze answer expectations. | teach only | yes |
| to bloom | 今朝、庭の花が咲きました。 | This morning, the flowers in the garden bloomed. | さきました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to bloom | 明日、花は咲きますか。 | Will the flowers bloom tomorrow? | さきます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to bloom | もう花が咲きましたね。 | The flowers have already bloomed, haven't they? | さきました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| cold (in reference to weather) | 今朝はとても寒いです。 | This morning it's very cold. | さむい | N5 L5 T5 C2 I3 — Blank could be filled by many weather adjectives (暑い, 涼しい, etc.), so context doesn't force 寒い specifically. | teach only | yes |
| cold (in reference to weather) | 外は寒いですから、上着を着てください。 | It's cold outside, so please wear a jacket. | さむい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| cold (in reference to weather) | 今日は寒いですか。 | Is it cold today? | さむい | N4 L5 T5 C1 I1 — Generic template sentence; blank could be almost any adjective, giving no real cue for 寒い. | teach only | yes |
| cool | 今日は涼しいですね。 | It's cool today, isn't it? | すずしい | N5 L5 T5 C2 I2 — Many adjectives (暑い、寒い、いい) could fill the blank, so context underdetermines the answer. | teach only | yes |
| cool | 秋は涼しいですか。 | Is autumn cool? | すずしい | N5 L5 T5 C2 I2 — Blank could be filled with several other weather/season adjectives, low recoverability. | teach only | yes |
| cool | 涼しい部屋で寝たいです。 | I want to sleep in a cool room. | すずしい | N5 L5 T5 C3 I3 — Slightly more specific context (room to sleep in) narrows options but still several adjectives could fit. | teach only | yes |
| sky | 今朝、空はとても青いです。 | This morning, the sky is very blue. | そら | N5 L5 T5 C4 I3 | cloze+teach | yes |
| sky | あそこの空は曇っていますか。 | Is the sky over there cloudy? | そら | N5 L5 T5 C4 I3 | cloze+teach | yes |
| sky | 公園で空を見ましょう。 | Let's look at the sky in the park. | そら | N4 L5 T5 C2 I3 — Blank could be filled by many nouns (花, 鳥, 景色), weakening recoverability. | teach only | yes |
| weather | 今日の天気はどうですか。 | How is the weather today? | てんき | N5 L5 T5 C3 I3 — Blank could also be filled by words like 気分 or 調子, though 天気 is the most common. | teach only | yes |
| weather | 天気がいいですから、出かけましょう。 | The weather is nice, so let's go out. | てんき | N5 L5 T5 C5 I4 | cloze+teach | yes |
| weather | 天気が悪いですから、頭が痛いです。 | The weather is bad, so my head hurts. | てんき | N4 L5 T5 C3 I4 — Plausible cultural belief but blank could also fit words like 体調 or 気分. | teach only | yes |
| animal | 動物が好きですか。 | Do you like animals? | どうぶつ | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (犬, 音楽, etc.), low recoverability. | teach only | yes |
| animal | 店で小さい動物を見ました。 | I saw a small animal at the shop. | どうぶつ | N5 L5 T5 C3 I4 — Context narrows options somewhat but other small objects/creatures could fit. | teach only | yes |
| animal | 動物を見に行きませんか。 | Won't you go see the animals? | どうぶつ | N5 L5 T5 C2 I3 — Many nouns (映画, 動物園 items, etc.) could fill the blank equally well. | teach only | yes |
| flower | 花を買いました。 | I bought flowers. | はな | N5 L5 T5 C2 I2 — Many nouns fit '___を買いました', so blank isn't uniquely recoverable. | teach only | yes |
| flower | 庭の花はきれいですか。 | Are the garden flowers pretty? | はな | N5 L5 T5 C3 I3 — 庭 context helps but other nouns (景色, 木) could still fit. | teach only | yes |
| flower | 花を見たいです。 | I want to see the flowers. | はな | N5 L5 T5 C2 I2 — Generic template; many objects could fill '___を見たいです'. | teach only | yes |
| clear weather | 今朝は晴れです。 | It's clear weather this morning. | はれ | N4 L5 T5 C2 I2 — Blank could be filled by any weather noun (曇り, 雨, etc.), context doesn't force 晴れ. | teach only | yes |
| clear weather | 明日は晴れですか。 | Will it be clear tomorrow? | はれ | N4 L5 T5 C2 I2 — Same issue: no contextual clue narrows the blank to 晴れ specifically. | teach only | yes |
| clear weather | 今日は晴れですから、外へ出かけたいです。 | It's clear today, so I want to go outside. | はれ | N4 L5 T5 C3 I3 — Wanting to go outside slightly favors 晴れ but 曇り would also fit, so not fully unique. | teach only | yes |
| swimming pool | 土曜日にプールで泳ぎたいです。 | I want to swim in the pool on Saturday. | ぷうる | N5 L5 T5 C4 I4 | cloze+teach | yes |
| swimming pool | 明日プールへ行きませんか。 | Shall we go to the pool tomorrow? | ぷうる | N5 L5 T5 C3 I4 — Blank could be filled by many other places (park, school, etc.). | teach only | yes |
| swimming pool | あのプールは広いですか。 | Is that pool wide? | ぷうる | N4 L5 T4 C2 I3 — 広い could describe many nouns, so the blank isn't strongly constrained to プール; also 'wide' is an awkward translation for a pool. | teach only | yes |
| a room | 今晩部屋で休みたいです。 | I want to rest in my room tonight. | へや | N5 L5 T5 C4 I3 | cloze+teach | yes |
| a room | あなたの部屋は綺麗ですか。 | Is your room clean? | へや | N5 L5 T5 C4 I3 | cloze+teach | yes |
| a room | 一緒に部屋で音楽を聞きましょう。 | Let's listen to music in the room together. | へや | N5 L5 T5 C4 I4 | cloze+teach | yes |
| area | この辺に病院がありますか。 | Is there a hospital around here? | へん | N5 L4 T5 C4 I3 | cloze+teach | yes |
| area | あの辺で買い物をしましょう。 | Let's shop around there. | へん | N4 L4 T5 C3 I3 — Other words like 近く or 店 could also fit the blank. | teach only | yes |
| area | 駅の辺は静かです。 | The area around the station is quiet. | へん | N4 L4 T5 C3 I3 — 近く or 周り could also fit the blank contextually. | teach only | yes |
| mailbox | ポストの前で友達に会いたいです。 | I want to meet my friend in front of the mailbox. | ぽすと | N5 L5 T5 C2 I3 — Many nouns could fill the blank (station, school, etc.), weak cloze constraint. | teach only | yes |
| mailbox | あの角にポストがありますか。 | Is there a mailbox on that corner? | ぽすと | N5 L5 T5 C3 I3 — Corner could have many things, moderate cloze constraint. | teach only | yes |
| mailbox | 手紙をポストに入れましょう。 | Let's put the letter in the mailbox. | ぽすと | N5 L5 T5 C5 I4 | cloze+teach | yes |
| right hand side | 右の店は大きいですか。 | Is the store on the right big? | みぎ | N5 L5 T5 C3 I3 | teach only | yes |
| right hand side | 右に座りましょう。 | Let's sit on the right. | みぎ | N5 L5 T5 C2 I3 — many location words could fill the blank | teach only | yes |
| store | あの店で買い物をしたいです。 | I want to shop at that store. | みせ | N5 L5 T5 C2 I3 — Many nouns (レストラン, スーパー, モール) could fill the blank equally well. | teach only | yes |
| store | この店は何時に開きますか。 | What time does this store open? | みせ | N5 L5 T5 C2 I3 — Blank could be filled by many other place words like 銀行 or 図書館. | teach only | yes |
| store | 一緒にあの店へ行きませんか。 | Shall we go to that store together? | みせ | N5 L5 T5 C2 I2 — Generic invitation pattern; blank could be almost any place noun. | teach only | yes |
| road | この道をまっすぐ歩いてください。 | Please walk straight on this road. | みち | N4 L5 T5 C4 I3 | cloze+teach | yes |
| road | 道が分かりますか。 | Do you know the way? | みち | N5 L5 T5 C5 I3 | cloze+teach | yes |
| road | 明日、公園までの道を歩きましょう。 | Let's walk the road to the park tomorrow. | みち | N4 L5 T4 C5 I3 | cloze+teach | yes |
| South | 南に大きい公園があります。 | There is a big park to the south. | みなみ | N5 L5 T5 C2 I2 — Blank could be any direction or location word, not uniquely 南. | teach only | yes |
| South | 南の店は静かですか。 | Is the store to the south quiet? | みなみ | N5 L5 T5 C2 I2 — Many words could fill the blank (北, 駅前, etc.), not uniquely 南. | teach only | yes |
| South | 南へ行きましょう。 | Let's go south. | みなみ | N5 L5 T5 C2 I2 — Any place/direction word fits the blank, weak cloze uniqueness. | teach only | yes |
| year | その年、病気になりました。 | That year, I got sick. | とし | N4 L5 T5 C3 I3 | teach only | yes |
| summer | 夏はとても暑いです。 | Summer is very hot. | なつ | N5 L5 T5 C3 I2 — Generic template sentence; blank could also fit other seasonal words like 天気 or 今日. | teach only | yes |
| summer | 夏に海で泳ぎたいです。 | I want to swim in the sea in summer. | なつ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| summer | 外国の夏は暑いですか。 | Is summer abroad hot? | なつ | N4 L5 T5 C3 I3 — Blank could plausibly be filled with other nouns like 天気 or 気候, reducing recoverability. | teach only | yes |
| summer vacation | 夏休みに旅行しました。 | I traveled during summer vacation. | なつやすみ | N5 L5 T5 C3 I3 — blank could also fit other time words like 週末 | teach only | yes |
| summer vacation | 夏休みは楽しいです。 | Summer vacation is fun. | なつやすみ | N4 L5 T5 C2 I2 — generic template sentence, many nouns could fill the blank | teach only | yes |
| summer vacation | 夏休みに何をしたいですか。 | What do you want to do during summer vacation? | なつやすみ | N5 L5 T5 C3 I4 — engaging question, though blank could fit other time nouns too | teach only | yes |
| seven days | 七日に病院へ行きます。 | I will go to the hospital on the 7th. | なのか | N5 L5 T4 C2 I2 — Any date word (一日、二日等) could fill the blank; context doesn't force 七日 specifically. Also translation implies 'seven days' vs actual date usage '7th'. | teach only | yes |
| seven days | 七日から旅行に行きます。 | I'm going on a trip starting the 7th. | なのか | N5 L5 T4 C2 I3 — Blank could be filled with any date word, not uniquely determined as 七日. | teach only | yes |
| seven days | 誕生日は七日ですか。 | Is your birthday on the 7th? | なのか | N5 L5 T4 C2 I3 — Any day-of-month word fits the blank equally well, low cloze specificity. | teach only | yes |
| ~ day of the month | テストは何日ですか。 | What day is the test? | にち | N5 L5 T5 C4 I3 | cloze+teach | yes |
| ~ day of the month | 十五日に旅行します。 | I will travel on the 15th. | にち | N5 L5 T5 C5 I4 | cloze+teach | yes |
| ~ years | 私は外国に三年住んでいます。 | I have lived abroad for three years. | ねん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| ~ years | あと二年で二十歳になります。 | I will turn twenty in two more years. | ねん | N5 L4 T5 C5 I4 — あと〜で構文はN5よりやや上だが実用的。 | cloze+teach | yes |
| ~ years | 何年、英語を習いましたか。 | How many years did you study English? | ねん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| for the first time | 初めて外国へ行きました。 | I went abroad for the first time. | はじめて | N5 L5 T5 C3 I3 — Blank could also be filled by other time adverbs, slightly reducing recoverability. | teach only | yes |
| for the first time | 初めて山に登りたいです。 | I want to climb a mountain for the first time. | はじめて | N5 L5 T5 C3 I3 — Other adverbs like 今度 could also fit the blank. | teach only | yes |
| for the first time | 初めて一人で料理を作りました。 | I cooked by myself for the first time. | はじめて | N5 L5 T5 C4 I4 | cloze+teach | yes |
| past | 五時すぎに家を出ました。 | I left home a little after five o'clock. | すぎ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| past | 九時すぎに電話してください。 | Please call a little after nine o'clock. | すぎ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| past | 父は七時すぎに帰ります。 | My father comes home a little after seven. | すぎ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| immediately | 料理ができました。すぐに食べましょう。 | Dinner is ready. Let's eat right away. | すぐに | N5 L5 T5 C4 I4 | cloze+teach | yes |
| last month | 先月、両親は旅行しました。 | Last month, my parents traveled. | せんげつ | N5 L5 T5 C2 I3 — Blank could be filled by many time expressions (今年、去年、先週 etc.), reducing recoverability. | teach only | yes |
| last month | 先月、友達に電話しませんでした。 | I didn't call my friend last month. | せんげつ | N5 L5 T5 C2 I3 — Same issue: many time words fit the blank grammatically. | teach only | yes |
| last month | 忙しかったですから、先月は料理をしませんでした。 | Because I was busy, I didn't cook last month. | せんげつ | N4 L4 T5 C2 I4 — 忙しかったですから is slightly above strict N5 but common; blank still allows many time words. | teach only | yes |
| birthday | 明日は妹の誕生日です。 | Tomorrow is my younger sister's birthday. | たんじょうび | N5 L5 T5 C3 I2 | teach only | yes |
| birthday | 誕生日に料理を作りたいです。 | I want to cook for the birthday. | たんじょうび | N5 L5 T5 C2 I2 — Blank at sentence start allows many other time nouns to fit equally well. | teach only | yes |
| birthday | 誕生日に父から電話がありました。 | On my birthday, I got a call from my father. | たんじょうび | N5 L5 T5 C3 I3 | teach only | yes |
| one day | 来月の一日から旅行します。 | I'll travel starting from the first of next month. | ついたち | N4 L4 T4 C4 I3 | cloze+teach | yes |
| one day | 一日に手紙を出してください。 | Please send the letter on the first. | ついたち | N4 L5 T4 C4 I3 | cloze+teach | yes |
| next | 次のバスに乗りましょう。 | Let's take the next bus. | つぎ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| next | 次の授業がありますから、教室へ行きます。 | Because I have the next class, I'm going to the classroom. | つぎ | N4 L4 T5 C4 I3 — から clause is borderline N5 but commonly taught early. | cloze+teach | yes |
| ten days | 十日に病院へ行きます。 | I will go to the hospital on the tenth. | とおか | N5 L5 T5 C2 I2 — Any date word could fill the blank; context doesn't force 十日 specifically. | teach only | yes |
| ten days | 十日に学校へ行きませんでした。 | I didn't go to school on the tenth. | とおか | N5 L5 T5 C2 I2 — Context doesn't uniquely determine the date; many counters could fit. | teach only | yes |
| ten days | 十日までに宿題を出してください。 | Please turn in the homework by the tenth. | とおか | N5 L5 T5 C2 I3 — Deadline context doesn't force the specific date, though slightly more natural/interesting than the others. | teach only | yes |
| at the time of ~ | 忙しい時、電話しないでください。 | Please don't call when I'm busy. | とき | N5 L5 T5 C3 I3 — から could also grammatically fit the blank, slightly reducing forced recall of とき. | teach only | yes |
| at the time of ~ | 子供の時、よく公園で遊びました。 | When I was a child, I often played in the park. | とき | N5 L5 T5 C4 I4 | cloze+teach | yes |
| at the time of ~ | 家へ帰る時、雨が降りました。 | It rained when I was returning home. | とき | N5 L5 T5 C5 I4 | cloze+teach | yes |
| company | 父は会社から電話しました。 | My father called from the company. | かいしゃ | N5 L5 T5 C3 I3 — Blank could plausibly be other places like 家 or 学校 without more context. | teach only | yes |
| company | 今日、会社に行きません。 | I am not going to the company today. | かいしゃ | N5 L5 T5 C3 I2 — Generic template; blank could be filled with many location nouns. | teach only | yes |
| company | 明日、会社へ行きますか。 | Are you going to the company tomorrow? | かいしゃ | N5 L5 T5 C3 I2 — Generic template; blank could be filled with many location nouns. | teach only | yes |
| katakana | 片仮名で名前を書きます。 | I write my name in katakana. | かたかな | N5 L5 T5 C4 I4 — Could also be ひらがな/ローマ字, slightly reduces uniqueness. | cloze+teach | yes |
| katakana | 片仮名を知りません。 | I don't know katakana. | かたかな | N4 L5 T5 C2 I2 — Generic sentence; many nouns could fill the blank. | teach only | yes |
| kanji | 漢字を習いたいです。 | I want to learn kanji. | かんじ | N5 L5 T5 C2 I2 — blank could be many nouns (English, piano, etc.) | teach only | yes |
| kanji | 漢字が難しいから、辞書を使います。 | Because kanji is difficult, I use a dictionary. | かんじ | N5 L4 T5 C4 I4 — dictionary clue helps narrow to kanji/word context | cloze+teach | yes |
| kanji | この漢字が分かりません。 | I don't understand this kanji. | かんじ | N5 L5 T5 C2 I2 — could be any noun, not uniquely kanji | teach only | yes |
| classroom | 友達は教室にいます。 | My friend is in the classroom. | きょうしつ | N5 L5 T5 C2 I2 — Blank could be filled by many locations (部屋, 図書館, etc.), reducing recoverability. | teach only | yes |
| classroom | 教室で本を読みましょう。 | Let's read a book in the classroom. | きょうしつ | N5 L5 T5 C2 I3 — Many places allow reading a book, so the blank isn't uniquely forced to 教室. | teach only | yes |
| essay | 昨日、作文を書きました。 | I wrote an essay yesterday. | さくぶん | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (手紙, 宿題, etc.), weak recoverability. | teach only | yes |
| essay | 作文が難しいから、時間がかかります。 | Because the essay is difficult, it takes time. | さくぶん | N5 L4 T5 C3 I3 — から is N4 grammar but commonly accepted; blank still guessable from context of difficulty/time. | teach only | yes |
| essay | 先生に作文を見せます。 | I show my essay to the teacher. | さくぶん | N5 L5 T5 C2 I3 — Many nouns could fit 'show ___ to teacher', reducing recoverability. | teach only | yes |
| a class (of school) | 今日は授業がありません。 | There is no class today. | じゅぎょう | N5 L5 T5 C3 I3 — Blank could also be filled by other nouns like 学校 or テスト, reducing uniqueness. | teach only | yes |
| a class (of school) | 授業は九時に始まります。 | Class starts at nine o'clock. | じゅぎょう | N5 L5 T5 C3 I3 — Many other nouns (映画, 会議) could fit the time slot, lowering recoverability. | teach only | yes |
| a class (of school) | 一緒に授業に行きませんか。 | Won't you go to class together? | じゅぎょう | N5 L5 T5 C3 I3 — Other destinations (学校, 図書館) could also fit the blank. | teach only | yes |
| every morning | 毎朝電車で会社へ行きます。 | I go to work by train every morning. | まいあさ | N5 L5 T5 C3 I3 — 毎日 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| every morning | 毎朝薬を飲みません。 | I don't take medicine every morning. | まいあさ | N4 L5 T5 C2 I3 — Blank could be filled with 毎日, 毎晩, etc., making the target hard to uniquely recover. | teach only | yes |
| every morning | 毎朝忙しいから朝御飯を食べません。 | I don't eat breakfast every morning because I'm busy. | まいあさ | N4 L4 T5 C3 I4 — から clause is slightly above strict N5 but commonly taught early; 毎日 could still plausibly fill the blank. | teach only | yes |
| every week | 毎週月曜日に授業があります。 | I have class every Monday. | まいしゅう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| before | 授業の前に新聞を読みます。 | I read the newspaper before class. | まえ | N5 L4 T5 C4 I3 — Uses N5-adjacent 前に+dictionary form pattern, slightly beyond strict N5 but common. | cloze+teach | yes |
| before | 電車に乗る前に切符を買います。 | I buy a ticket before getting on the train. | まえ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| before | 薬を飲む前に御飯を食べてください。 | Please eat before taking medicine. | まえ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| three days | 仕事を三日休みます。 | I'm taking three days off work. | みっか | N5 L5 T5 C3 I3 — Other day-counts (二日, 四日, etc.) could also fit grammatically, so exact number isn't fully forced by context. | teach only | yes |
| three days | 三日前に病院へ行きました。 | I went to the hospital three days ago. | みっか | N5 L5 T5 C3 I3 — Any day-count could fit the blank grammatically; context doesn't uniquely determine 'three'. | teach only | yes |
| six days | 病気で六日休みました。 | I was off six days because I was sick. | むいか | N5 L5 T5 C2 I3 — Any day/duration word could fill the blank, so exact answer isn't uniquely recoverable. | teach only | yes |
| six days | 六日から旅行に行きます。 | I'm going on a trip starting on the 6th. | むいか | N5 L5 T5 C2 I3 — Context doesn't force '6th' specifically; any date could fit. | teach only | yes |
| six days | 六日に買い物をしませんでした。 | I didn't go shopping on the 6th. | むいか | N5 L5 T5 C2 I3 — Any date could fill the blank, low uniqueness. | teach only | yes |
| holiday | 明日は休みです。 | Tomorrow is a holiday. | やすみ | N5 L5 T5 C2 I1 — Generic template sentence; blank could be filled by many nouns (晴れ, 誕生日, etc.). | teach only | yes |
| holiday | 今週の休みに公園へ行きませんか。 | Shall we go to the park on this week's day off? | やすみ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| holiday | 頭が痛いから今日は休みを取ります。 | I'm taking today off because my head hurts. | やすみ | N5 L4 T5 C5 I4 — Slightly above N5 with から+plain form, but common enough in basic textbooks. | cloze+teach | yes |
| late afternoon | 夕方に会社を出ます。 | I leave the office in the late afternoon. | ゆうがた | N5 L5 T5 C2 I3 — Other time words (朝, 夜) could also fill the blank. | teach only | yes |
| late afternoon | 夕方は駅に人が多いです。 | There are many people at the station in the late afternoon. | ゆうがた | N5 L5 T5 C3 I3 — Context of crowded station slightly favors 夕方 but other times could fit too. | teach only | yes |
| late afternoon | 夕方は少し寒いです。 | It's a little cold in the late afternoon. | ゆうがた | N5 L5 T5 C2 I3 — Could equally be 朝 or 夜, low cloze specificity. | teach only | yes |
| last night | 昨夜は暑かったです。 | It was hot last night. | ゆうべ | N5 L5 T5 C2 I2 — Blank could be filled by many time words (今日, 昨日, etc.), not uniquely recoverable. | teach only | yes |
| last night | 昨夜遅くまで仕事をしました。 | I worked until late last night. | ゆうべ | N5 L5 T5 C2 I3 — Context doesn't uniquely force 昨夜; other time expressions fit. | teach only | yes |
| last night | 昨夜雨が降りました。 | It rained last night. | ゆうべ | N5 L5 T5 C2 I2 — Generic weather sentence; blank not uniquely recoverable from context. | teach only | yes |
| bad | 天気が悪いから、電車で会社へ行きます。 | Because the weather is bad, I go to work by train. | わるい | N4 L4 T5 C3 I3 — blank could be filled by other weather adjectives too. | teach only | yes |
| bad | この仕事は悪くないです。 | This job isn't bad. | わるくない | N5 L5 T5 C3 I3 — many adjectives could fit the blank. | teach only | yes |
| bad | この卵は悪いですか。 | Is this egg bad (spoiled)? | わるい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| good, nice | この仕事はよくないです。 | This job isn't good. | よくない | N4 L5 T4 C3 I2 — Target word listed as いい but the actual blank is よくない; generic sentence, other negative adjectives could also fit. | teach only | yes |
| knife | 母はナイフで果物を切ります。 | Mother cuts fruit with a knife. | ないふ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| knife | このナイフを使いませんか。 | Won't you use this knife? | ないふ | N4 L5 T5 C2 I2 — Blank could be filled by many objects, not clearly forcing 'knife'. | teach only | yes |
| knife | 肉を切りますから、ナイフを貸してください。 | I'll cut meat, so please lend me a knife. | ないふ | N5 L4 T5 C5 I4 | cloze+teach | yes |
| tie | 父は新しいネクタイをしめました。 | Father put on a new tie. | ねくたい | N5 L4 T5 C4 I3 | cloze+teach | yes |
| tie | このネクタイはどうですか。 | How about this tie? | ねくたい | N4 L5 T5 C1 I2 — Blank could be almost any noun, low recoverability. | teach only | yes |
| tie | 明日ネクタイをしめましょうか。 | Shall we wear ties tomorrow? | ねくたい | N4 L4 T5 C3 I3 — Could also be ベルト, slightly ambiguous. | teach only | yes |
| ashtray | 灰皿はテーブルの上にあります。 | The ashtray is on the table. | はいざら | N5 L5 T5 C3 I2 | teach only | yes |
| ashtray | たばこを吸いますから、灰皿をください。 | I'm going to smoke, so please give me an ashtray. | はいざら | N5 L5 T5 C5 I4 | cloze+teach | yes |
| box | この箱にお菓子が入っています。 | There are sweets in this box. | はこ | N5 L5 T5 C3 I3 — Container word could be 箱, 袋, 瓶, etc., so recoverability is moderate. | teach only | yes |
| box | この箱は何ですか。 | What is this box? | はこ | N4 L5 T5 C1 I1 — Generic template sentence; almost any noun could fill the blank. | teach only | yes |
| box | 本を入れますから、大きい箱が要ります。 | I'm putting in books, so I need a big box. | はこ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| chopsticks | 母は箸で御飯を食べます。 | Mother eats rice with chopsticks. | はし | N5 L5 T5 C3 I3 | teach only | yes |
| chopsticks | 箸を使いませんか。 | Won't you use chopsticks? | はし | N4 L5 T5 C2 I2 — No contextual clue narrows the blank to chopsticks specifically. | teach only | yes |
| handkerchief | 妹は新しいハンカチを買いました。 | My younger sister bought a new handkerchief. | はんかち | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (bag, book, etc.), low cloze specificity. | teach only | yes |
| handkerchief | そのハンカチはどこで買いましたか。 | Where did you buy that handkerchief? | はんかち | N5 L5 T5 C2 I2 — Generic question; many items could fit the blank, weak cloze cue. | teach only | yes |
| handkerchief | 手が汚いですから、ハンカチをください。 | My hands are dirty, so please give me a handkerchief. | はんかち | N5 L5 T5 C4 I4 — Context of dirty hands strongly hints at handkerchief, good cloze cue. | cloze+teach | yes |
| film | 父はカメラのフィルムを買いました。 | Father bought film for the camera. | ふぃるむ | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other camera accessories. | teach only | yes |
| film | このフィルムはもうありませんか。 | Isn't there any more of this film? | ふぃるむ | N5 L5 T5 C2 I2 — Generic template; many nouns could fit the blank. | teach only | yes |
| film | 写真を撮りますから、フィルムが要ります。 | I'm taking photos, so I need film. | ふぃるむ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| envelope | 手紙を封筒に入れました。 | I put the letter in an envelope. | ふうとう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| envelope | 封筒に切手を貼りました。 | I put a stamp on the envelope. | ふうとう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| envelope | 手紙を出しますから、封筒をください。 | I'm sending a letter, so please give me an envelope. | ふうとう | N5 L4 T5 C5 I4 — から for reason is slightly beyond strict N5 but commonly taught early. | cloze+teach | yes |
| candy | 子供は飴が大好きです。 | Children love candy. | あめ | N5 L5 T5 C2 I2 — Many nouns could fill the blank, e.g. お菓子, chocolate, etc. | teach only | yes |
| candy | 飴を買いましたか。 | Did you buy candy? | あめ | N5 L5 T5 C2 I2 — Generic sentence; blank could be almost any purchasable item. | teach only | yes |
| candy | 一緒に飴を食べませんか。 | Won't you eat some candy with me? | あめ | N5 L5 T5 C2 I3 — Blank could be filled with many food words, not uniquely 飴. | teach only | yes |
| delicious | 母の料理はいつも美味しいから、よく食べます。 | My mother's cooking is always delicious, so I eat a lot. | おいしい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| delicious | この魚は美味しいですか。 | Is this fish delicious? | おいしい | N5 L5 T5 C3 I2 — Many adjectives could fill the blank (fresh, expensive, etc.), reducing recoverability. | teach only | yes |
| delicious | 学校の食堂の御飯は美味しいです。 | The food at the school cafeteria is delicious. | おいしい | N5 L5 T5 C3 I3 — Blank could be filled by several other adjectives like 安い or まずい. | teach only | yes |
| confections | パーティーでお菓子を食べましょう。 | Let's eat some confections at the party. | おかし | N5 L5 T5 C2 I3 — Many foods could fit the blank, not uniquely 'お菓子'. | teach only | yes |
| confections | 妹はお菓子が好きです。 | My younger sister likes confections. | おかし | N5 L5 T5 C2 I3 — Blank could be filled by many other liked items. | teach only | yes |
| confections | 教室でお菓子を食べますか。 | Do you eat confections in the classroom? | おかし | N5 L5 T5 C2 I3 — Various foods could fit the blank equally well. | teach only | yes |
| a boxed lunch | お弁当を作ったから、学校へ持って行きます。 | I made a boxed lunch, so I'm taking it to school. | おべんとう | N5 L5 T5 C3 I3 | teach only | yes |
| a boxed lunch | 明日お弁当を持って行きましょう。 | Let's bring boxed lunches tomorrow. | おべんとう | N5 L5 T5 C2 I3 — Many nouns could fill the blank in this generic template. | teach only | yes |
| a boxed lunch | お弁当はもう作りましたか。 | Have you already made the boxed lunch? | おべんとう | N5 L5 T5 C2 I2 — Very generic sentence; blank could be many nouns. | teach only | yes |
| hot and spicy | このカレーは辛いです。 | This curry is spicy. | からい | N5 L5 T5 C3 I2 — Blank could also be filled by other taste adjectives like おいしい or あまい, reducing uniqueness. | teach only | yes |
| hot and spicy | この料理は辛いですか。 | Is this dish spicy? | からい | N5 L5 T5 C3 I2 — Similar generic structure; other adjectives could fit the blank. | teach only | yes |
| hot and spicy | 辛い物が好きだから、よく食べます。 | I like spicy things, so I eat them often. | からい | N4 L3 T5 C3 I4 — から as reason connector is slightly above strict N5 grammar; blank still allows multiple adjectives like 甘い物 or 辛い物 interchangeably. | teach only | yes |
| curry | 今晩カレーを作りましょう。 | Let's make curry tonight. | かれー | N5 L5 T5 C2 I3 — blank could be filled by many food words, not uniquely curry | teach only | yes |
| curry | 弟はカレーが好きです。 | My younger brother likes curry. | かれー | N5 L5 T5 C2 I2 — generic 'X likes Y' template, many foods fit the blank | teach only | yes |
| curry | 昼御飯にカレーを食べますか。 | Do you eat curry for lunch? | かれー | N5 L5 T5 C2 I3 — many lunch foods could fit the blank | teach only | yes |
| beef | 牛肉が安いから、買いました。 | Beef was cheap, so I bought it. | ぎゅうにく | N5 L5 T5 C2 I3 — Blank could be filled by many nouns, not uniquely beef. | teach only | yes |
| beef | 牛肉と豚肉、どちらが好きですか。 | Which do you like better, beef or pork? | ぎゅうにく | N5 L5 T5 C5 I4 | cloze+teach | yes |
| beef | 母は牛肉を買いました。 | My mother bought beef. | ぎゅうにく | N5 L5 T5 C2 I2 — Generic sentence; blank could be almost any purchasable noun. | teach only | yes |
| milk | 朝御飯に牛乳を飲みましょう。 | Let's drink milk with breakfast. | ぎゅうにゅう | N5 L5 T5 C2 I3 — Blank could be filled by many drinks (juice, coffee, water). | teach only | yes |
| milk | 牛乳がありますか。 | Is there any milk? | ぎゅうにゅう | N5 L5 T5 C1 I2 — Extremely generic; blank could be any noun. | teach only | yes |
| milk | 子供は毎朝牛乳を飲みます。 | Children drink milk every morning. | ぎゅうにゅう | N5 L5 T5 C3 I3 — Milk is a plausible but not uniquely forced answer; juice or water also fit. | teach only | yes |
| long | この映画はとても長いです。 | This movie is very long. | ながい | N5 L5 T5 C3 I3 — Other adjectives like 面白い/怖い could also fit the blank. | teach only | yes |
| bustling | この公園はいつもにぎやかです。 | This park is always bustling. | にぎやか | N5 L5 T5 C3 I2 — generic template; many adjectives could fit the blank | teach only | yes |
| bustling | 昨日のレストランはにぎやかでした。 | Yesterday's restaurant was bustling. | にぎやか | N4 L5 T5 C3 I4 — slightly more natural to say 行ったレストラン, but acceptable | teach only | yes |
| bustling | 会社の近くはにぎやかですか。 | Is the area near the office bustling? | にぎやか | N5 L5 T5 C3 I3 — other adjectives like 静か or 便利 could also fit the blank | teach only | yes |
| lukewarm | お風呂の水がぬるかったです。 | The bath water was lukewarm. | ぬるかった | N5 L5 T5 C3 I3 — Other temperature adjectives (熱かった/冷たかった) could also fit grammatically. | teach only | yes |
| lukewarm | コーヒーがぬるくないですか。 | Isn't the coffee lukewarm? | ぬるくない | N5 L5 T5 C3 I3 — Other temperature words like 熱くない could fit equally well. | teach only | yes |
| fast | もっと速く歩いてください。 | Please walk faster. | はやく | N5 L5 T5 C2 I3 — Many adverbs (ゆっくり etc.) could fill the blank equally well. | teach only | yes |
| short | あの山は低いです。 | That mountain is low. | ひくい | N4 L5 T4 C3 I2 — Mountain being 'low' is slightly odd since 高い/低い both plausible without translation cue. | teach only | yes |
| spacious | 私の部屋は広いです。 | My room is spacious. | ひろい | N5 L5 T5 C2 I2 — Generic template sentence; other adjectives could fill blank. | teach only | yes |
| spacious | 広い部屋を見せてください。 | Please show me a spacious room. | ひろい | N5 L5 T5 C2 I3 — Other adjectives (きれい, 新しい) could also fit the blank. | teach only | yes |
| fat | この木はとても太いです。 | This tree is very thick. | ふとい | N5 L5 T5 C3 I3 | teach only | yes |
| fat | この太いペンを貸してください。 | Please lend me this thick pen. | ふとい | N5 L5 T5 C2 I3 — many adjectives could fit the blank (red, new, etc.) | teach only | yes |
| old | このカメラは古いです。 | This camera is old. | ふるい | N5 L5 T5 C2 I2 — Generic template; many adjectives could fill the blank. | teach only | yes |
| old | この建物は古かったです。 | This building was old. | ふるかった | N5 L5 T5 C2 I2 — Past-tense adjective is fine for N5 but sentence is generic, low cloze constraint. | teach only | yes |
| foreign country | 私は外国へ旅行に行きたいです。 | I want to travel to a foreign country. | がいこく | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other location words (日本, アメリカ, etc.), reducing uniqueness. | teach only | yes |
| foreign country | 兄は外国に住んでいません。 | My older brother does not live in a foreign country. | がいこく | N5 L5 T5 C3 I3 — Any place noun could fit the blank grammatically, so context alone doesn't force 外国. | teach only | yes |
| foreign country | 外国の映画は好きですか。 | Do you like foreign movies? | がいこく | N5 L5 T5 C3 I3 — Could be replaced by specific country names, so recoverability is moderate. | teach only | yes |
| stairs | エレベーターがありませんから、階段を使ってください。 | There is no elevator, so please use the stairs. | かいだん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| stairs | この階段は狭いです。 | These stairs are narrow. | かいだん | N5 L5 T5 C2 I2 — blank could be filled by many nouns (room, road, etc.), low cloze recoverability. | teach only | yes |
| north | 北はとても寒いです。 | The north is very cold. | きた | N5 L5 T5 C2 I3 — Any direction word (東・西・南) could fill the blank equally well. | teach only | yes |
| north | 学校は駅の北にあります。 | The school is north of the station. | きた | N5 L5 T5 C2 I4 — Context only specifies relative position, so other direction words also fit grammatically. | teach only | yes |
| north | 北はどちらですか。 | Which way is north? | きた | N5 L5 T5 C2 I3 — Question could be asked about any direction, not uniquely 'north'. | teach only | yes |
| country | あなたの国はどこですか。 | Where is your country? | くに | N4 L5 T4 C2 I3 — Blank could be filled by many nouns like 家 or 学校; EN slightly loose translation. | teach only | yes |
| country | 私の国は小さいです。 | My country is small. | くに | N4 L5 T5 C2 I2 — Generic template-like sentence; blank could fit many nouns (家, 町, 部屋). | teach only | yes |
| entrance (to a house or a building) | 靴を脱いで、玄関に置いてください。 | Please take off your shoes and put them at the entrance. | げんかん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| entrance (to a house or a building) | 玄関はとても綺麗です。 | The entrance is very clean. | げんかん | N4 L5 T5 C2 I1 — Generic template sentence, blank could be filled by many nouns. | teach only | yes |
| intersection | あの交差点は危ないです。 | That intersection is dangerous. | こうさてん | N5 L5 T5 C3 I3 | teach only | yes |
| intersection | 交差点で車が止まりました。 | The car stopped at the intersection. | こうさてん | N5 L5 T5 C3 I3 | teach only | yes |
| police box | 交番でおまわりさんに道を聞きました。 | I asked a police officer for directions at the police box. | こうばん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| police box | 交番はあの角にあります。 | The police box is on that corner. | こうばん | N4 L5 T5 C2 I2 — Blank could be filled by many nouns (store, house, etc.) with little context clue. | teach only | yes |
| police box | 財布を無くしましたから、交番へ行きます。 | I lost my wallet, so I'll go to the police box. | こうばん | N5 L4 T5 C5 I5 | cloze+teach | yes |
| under | 猫は机の下にいます。 | The cat is under the desk. | した | N5 L5 T5 C3 I3 — Other position words (上, 中, 横) could also fit grammatically, so context alone doesn't force 下. | teach only | yes |
| under | かばんは椅子の下に置いてください。 | Please put the bag under the chair. | した | N5 L5 T5 C3 I3 — Other location nouns (上, 中, 横) are also grammatically valid in the blank. | teach only | yes |
| under | 財布は机の下ですか。 | Is the wallet under the desk? | した | N5 L5 T5 C3 I3 — Same issue: other spatial nouns could fill the blank without breaking grammar. | teach only | yes |
| to say | 先生は何と言いましたか。 | What did the teacher say? | いいました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to sing | 友達が来た時、一緒に歌を歌いました。 | When my friend came, we sang a song together. | うたいました | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to sing | 音楽の授業で歌を歌いますか。 | Do you sing songs in music class? | うたいます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to sing | 暇な時、好きな歌を歌いたいです。 | When I'm free, I want to sing my favorite song. | うたいたい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to teach | 先生は学生に漢字を教えます。 | The teacher teaches kanji to the students. | おしえます | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to write | 授業で漢字を書きました。 | I wrote kanji in class. | かきました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to write | 友達に手紙を書きたいです。 | I want to write a letter to my friend. | かきたい | N5 L5 T5 C3 I4 — Could also be 送りたい/出したい, slightly less unique. | teach only | yes |
| to write | 暇な時、作文を書きますか。 | Do you write compositions in your free time? | かきます | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to dial/call | 友達に電話をかけました。 | I called my friend. | かけました | N5 L5 T5 C4 I2 | cloze+teach | yes |
| to dial/call | 授業の後で先生に電話をかけますか。 | Will you call the teacher after class? | かけます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to dial/call | 暇な時、家族に電話をかけたいです。 | In my free time, I want to call my family. | かけたい | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to hear | 今日は天気のニュースを聞きましたか。 | Did you hear the weather news today? | ききました | N4 L5 T4 C3 I3 — 見ました could also fit the blank, slightly ambiguous. | teach only | yes |
| to hear | 授業で先生の話を聞きます。 | I listen to the teacher's talk in class. | ききます | N5 L5 T4 C5 I3 | cloze+teach | yes |
| to answer | 学生は質問に答えました。 | The student answered the question. | こたえました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to answer | 質問に答えてください。 | Please answer the question. | こたえて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to answer | 質問に答えますか。 | Will you answer the question? | こたえます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| question | 学生は先生に質問をしました。 | The student asked the teacher a question. | しつもん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| question | 友達に質問をしたいです。 | I want to ask my friend a question. | しつもん | N5 L5 T5 C3 I3 — other words like 電話 or 相談 could also fit the blank | teach only | yes |
| question | 何か質問がありますか。 | Do you have any questions? | しつもん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to run | 学校まで走りますか。 | Do you run to school? | はしります | N5 L5 T5 C3 I3 — Other verbs like 歩きます could also fit the blank. | teach only | yes |
| to run | 友達と公園で走りました。 | I ran in the park with my friend. | はしりました | N5 L5 T5 C3 I4 — Other activity verbs (遊びました, 歩きました) could also fit the context. | teach only | yes |
| to run | 弟は毎朝走りますから、元気です。 | My younger brother runs every morning, so he's energetic. | はしります | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to pull | ドアを引いてください。 | Please pull the door. | ひいて | N5 L5 T5 C3 I3 — Other verbs like 押して or 開けて could also fit the blank. | teach only | yes |
| to pull | 誰がその椅子を引きましたか。 | Who pulled that chair? | ひきました | N4 L5 T5 C2 I3 — Many verbs (moved, bought, broke) could fill the blank besides 引きました. | teach only | yes |
| to turn | あの角を右に曲りましょう。 | Let's turn right at that corner. | まがりましょう | N4 L5 T5 C5 I4 — Should be written 曲がりましょう with okurigana が; 曲る is nonstandard. | cloze+teach | yes |
| to turn | どこで左に曲りますか。 | Where do I turn left? | まがります | N4 L5 T5 C5 I4 — Should be written 曲がります with okurigana が; 曲る is nonstandard. | cloze+teach | yes |
| to turn | 次の交差点で曲りたいです。 | I want to turn at the next intersection. | まがりたい | N4 L5 T5 C4 I4 — Should be written 曲がりたい with okurigana が; slight ambiguity as 止まりたい could also fit. | cloze+teach | yes |
| to cross over | 毎朝、橋を渡ります。 | I cross the bridge every morning. | わたります | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to cross over | 危ないですから、道を渡らないでください。 | It's dangerous, so please don't cross the road. | わたらないで | N5 L5 T5 C3 I4 — 道を通らないで also fits, slightly reducing recoverability | teach only | yes |
| to cross over | 今朝、友達と道を渡りました。 | This morning, I crossed the road with my friend. | わたりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to go | 一緒に映画へ行きませんか。 | Won't you go to the movies with me? | いきません | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to go | いつ家族と旅行に行きますか。 | When are you going on a trip with your family? | いきます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| ashtray | テーブルの上に灰皿を置きましょう。 | Let's put the ashtray on the table. | はいざら | N5 L5 T5 C3 I3 | teach only | yes |
| classroom | 教室で英語を習いましょう。 | Let's learn English in the classroom. | きょうしつ | N4 L5 T5 C2 I3 — Learning English could occur in various places, limiting cloze specificity. | teach only | yes |
| stairs | エレベーターより階段を使いましょう。 | Let's use the stairs instead of the elevator. | かいだん | N5 L4 T5 C5 I4 — より is slightly above strict N5 but commonly taught early. | cloze+teach | yes |
| right hand side | 私の机は窓の右にあります。 | My desk is to the right of the window. | みぎ | N5 L5 T5 C3 I4 — other spatial words like 左/隣 could also fit | teach only | yes |
| year | 年を教えてください。 | Please tell me your age. | とし | N4 L5 T5 C2 I2 — Generic template sentence; blank could fit many nouns like 名前 or 住所. | teach only | yes |
| immediately | すぐに医者を呼んでください。 | Please call a doctor immediately. | すぐに | N5 L5 T5 C4 I4 | cloze+teach | yes |
| immediately | 駅に着いて、すぐに電車に乗りました。 | I arrived at the station and immediately got on the train. | すぐに | N5 L5 T5 C5 I5 | cloze+teach | yes |
| three days | 三日、雨が降りませんでした。 | It didn't rain for three days. | みっか | N4 L5 T5 C3 I3 — Slightly unnatural without 間 (三日間) but still understandable; number not uniquely forced by context. | teach only | yes |
| long | 駅までの道は長いです。 | The road to the station is long. | ながい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to eat | 晩御飯を一緒に食べましょう。 | Let's eat dinner together. | たべましょう | N5 L5 T5 C4 I2 — Near-duplicate of sentence 0 with reordered words. | cloze+teach | yes |
| chair | どうぞ、椅子に座ってください。 | Please sit in the chair. | いす | N5 L5 T5 C5 I3 | cloze+teach | yes |
| elevator | エレベーターで上に行きましょう。 | Let's go up by elevator. | えれべえたあ | N5 L5 T5 C3 I3 — Context of going up narrows options somewhat, but 階段 or エスカレーター could also fit. | teach only | yes |
| blue | 妹は青い傘を持っています。 | My younger sister has a blue umbrella. | あおい | N5 L5 T5 C2 I3 — Slightly more concrete context (sister's umbrella) but color still not uniquely determined by context. | teach only | yes |
| red | 姉は赤い自転車を買いました。 | My older sister bought a red bicycle. | あかい | N5 L5 T5 C3 I4 | teach only | yes |
| bright | 部屋が明るいですから、電気を消しましょう。 | The room is bright, so let's turn off the light. | あかるい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| kind | この本は厚いです。 | This book is thick. | あつい | N5 L5 T5 C4 I2 — Means 'thick', not 'kind' as glossed; generic template sentence. | cloze+teach | yes |
| kind | 厚いセーターですから、暖かいです。 | It's a thick sweater, so it's warm. | あつい | N5 L5 T5 C5 I4 — Means 'thick', not 'kind' as glossed. | cloze+teach | yes |
| dangerous | 台所は危ないですから、子供は入りません。 | The kitchen is dangerous, so children don't go in. | あぶない | N5 L5 T5 C4 I4 — Kitchen context strongly implies danger, giving good cloze support. | cloze+teach | yes |
| fast | その自転車はとても速かったです。 | That bicycle was very fast. | はやかった | N5 L5 T5 C3 I3 — Other adjectives like 高かった/遅かった could also fit grammatically. | teach only | yes |
| short | あの先生は背が低いですか。 | Is that teacher short? | ひくい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| spacious | 新しい部屋はとても広いです。 | The new room is very spacious. | ひろい | N5 L5 T5 C3 I3 — とても helps narrow to an adjective but several could still fit. | teach only | yes |
| fat | この鉛筆は太いですか。 | Is this pencil thick? | ふとい | N5 L5 T5 C3 I2 — fairly generic template sentence | teach only | yes |
| old | これはとても古い家です。 | This is a very old house. | ふるい | N5 L5 T5 C2 I2 — Still generic; 'とても＿家' could accept other adjectives like 大きい or 新しい. | teach only | yes |
| intersection | 学校の前に交差点があります。 | There is an intersection in front of the school. | こうさてん | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (店, 公園, etc.), weakening cloze recoverability. | teach only | yes |
| to say | 先生は毎朝何と言いますか。 | What does the teacher say every morning? | いいます | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to teach | 駅までの道を教えてください。 | Please tell me the way to the station. | おしえて | N5 L5 T5 C5 I4 | cloze+teach | yes |
| next week | 来週、学校でテストがあります。 | There is a test at school next week. | らいしゅう | N5 L5 T5 C3 I3 — Similar issue: other time expressions could plausibly fill the blank. | teach only | yes |
| next week | 来週、友達と旅行をしたいです。 | I want to travel with a friend next week. | らいしゅう | N5 L5 T5 C3 I2 — Very similar to sentence 0, reducing novelty; blank still allows other time words. | teach only | yes |
| next year | 来年、大学に入ります。 | I will enter university next year. | らいねん | N5 L5 T5 C3 I3 — Other time words like 来月 could also fit. | teach only | yes |
| every month | 毎月、図書館で本を借ります。 | I borrow books from the library every month. | まいつき | N5 L5 T5 C2 I2 — Other frequency words (毎週, 毎年) fit just as naturally, so the blank isn't uniquely recoverable. | teach only | yes |
| every month | 毎月、公園で音楽を聞きました。 | I listened to music in the park every month. | まいつき | N4 L5 T5 C2 I3 — Slightly unusual to specify monthly park music listening, but grammatically fine; other frequency words could also fit. | teach only | yes |
| to breathe in | 公園でたばこを吸います。 | I smoke a cigarette in the park. | すいます | N4 L5 T5 C3 I3 — Could also be 買います (buy a cigarette) in this context, slightly lowering recoverability. | teach only | yes |
| hurt | 頭が痛いです。 | My head hurts. | いたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to request | レストランで料理を頼みます。 | I order food at the restaurant. | たのみます | N4 L5 T4 C2 I3 — Many verbs (食べます、作ります) could fill the blank besides 頼みます. | teach only | yes |
| to request | 友達に切符を頼みました。 | I asked my friend for a ticket. | たのみました | N4 L5 T4 C2 I3 — Blank could also be 買いました or もらいました, reducing recoverability. | teach only | yes |
| to make sound | 犬が大きい声で鳴きました。 | The dog barked in a loud voice. | なきました | N5 L5 T5 C4 I4 — '大きい声で' strongly cues a sound verb, making 鳴きました fairly recoverable. | cloze+teach | yes |
| to make sound | 鳥が朝、鳴きます。 | Birds chirp in the morning. | なきます | N5 L5 T4 C3 I3 — Context allows other plausible verbs like 起きます or 飛びます, reducing uniqueness. | teach only | yes |
| someone | 誰かが台所にいますね。 | Someone is in the kitchen, right? | だれか | N5 L5 T5 C3 I3 — Good natural sentence; cloze slightly ambiguous since other nouns could fit the blank. | teach only | yes |
| to put on (e.g., glasses) | 眼鏡を掛けましょうか。 | Shall I put on my glasses? | かけ | N5 L5 T5 C3 I3 — Context allows other verbs (e.g., 買いましょうか) so the blank isn't fully forced. | teach only | yes |
| counter for occurrences | 一週間に三度友達に電話をかけます。 | I call my friend three times a week. | ど | N4 L4 T5 C3 I3 — 電話をかける is slightly above N5 but still common; 回 could also fit the blank. | teach only | yes |
| left hand side | 電話は左のテーブルにあります。 | The phone is on the table to the left. | ひだり | N4 L5 T5 C3 I3 — 読み仮名『てえぶる』は長音表記が不自然(本来『てーぶる』) | teach only | yes |
| ~ o'clock | 今何時ですか。 | What time is it now? | じ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| ~ o'clock | 七時に晩御飯を作りましょう。 | Let's make dinner at seven o'clock. | じ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| ~ o'clock | 忙しいですから、六時に晩御飯を食べません。 | Because I'm busy, I won't eat dinner at six o'clock. | じ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| ~ weeks | 一週間に二回友達に電話をかけます。 | I call my friend twice a week. | しゅうかん | N4 L4 T5 C2 I3 — Other time counters (日, ヶ月, 年) could also fill the blank, reducing recoverability. | teach only | yes |
| ~ weeks | 忙しいですから、二週間旅行に行きません。 | Because I'm busy, I won't travel for two weeks. | しゅうかん | N4 L4 T4 C2 I3 — Ambiguous blank—could also be 二日, 二ヶ月, etc.; phrasing 'いきません' slightly awkward for future plan negation but acceptable. | teach only | yes |
| ~ weeks | 来週から三週間休みましょう。 | Let's take a three-week break starting next week. | しゅうかん | N4 L4 T4 C2 I3 — Blank could be filled by other time-unit counters like 三日 or 三ヶ月, lowering cloze certainty. | teach only | yes |
| warm | 今朝は暖かいですね。 | It's warm this morning, isn't it. | あたたかい | N5 L5 T5 C3 I3 | teach only | yes |
| rain | 雨ですから、傘を買いたいです。 | Since it's rainy, I want to buy an umbrella. | あめ | N4 L5 T5 C4 I3 | cloze+teach | yes |
| tree | 公園に大きい木があります。 | There is a big tree in the park. | き | N5 L5 T5 C3 I3 — Slightly more context with 大きい but still multiple nouns could fit the blank. | teach only | yes |
| why (same as どうして) | なぜ病気になりましたか。 | Why did you become sick? | なぜ | N4 L4 T5 C4 I3 | cloze+teach | yes |
| to become | 病気になりました。 | I became sick. | なりました | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to be able to | 料理ができますか。 | Can you cook? | できます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be able to | 宿題がもうできました。 | The homework is already done. | できました | N5 L5 T5 C3 I3 — 終わりました could also fit the blank, reducing uniqueness. | teach only | yes |
| to be able to | 忙しくて、買い物ができませんでした。 | I was busy, so I couldn't go shopping. | できませんでした | N5 L4 T5 C4 I4 — て-form reason clause is slightly above strict N5 but common and understandable. | cloze+teach | yes |
| then | では、買い物に行きましょう。 | Well then, let's go shopping. | では | N5 L5 T5 C3 I4 — Other connectors like それで could plausibly fit the blank. | teach only | yes |
| disagreeable | 仕事が嫌ですから、休みたいです。 | Because I dislike work, I want to rest. | いや | N4 L5 T5 C4 I4 | cloze+teach | yes |
| small | この店の卵は小さいです。 | The eggs at this store are small. | ちいさい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| brown | 茶色の靴を買いました。 | I bought brown shoes. | ちゃいろ | N5 L5 T5 C2 I3 — Same issue: many color words fit grammatically and semantically. | teach only | yes |
| ~ minutes | 二分待ってください。 | Please wait two minutes. | ふん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| evening | 夜、レストランで晩御飯を食べます。 | I eat dinner at the restaurant in the evening. | よる | N4 L5 T5 C2 I2 — Similar to sentence 0, dinner timing doesn't strongly force 夜 over other time words. | teach only | yes |
| next month | 来月、会社を休みます。 | I will take a break from work next month. | らいげつ | N5 L5 T5 C3 I3 — Blank could accept other time expressions like 来週 or 今度. | teach only | yes |
| that's right | 「明日は晴れですか。」「そうです。」 | "Will it be sunny tomorrow?" "That's right." | そう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| and so | 朝、公園を歩きます。そして、家に帰ります。 | In the morning I walk in the park. And then I go home. | そして | N5 L5 T5 C4 I2 — Simple daily routine sentence, somewhat generic. | cloze+teach | yes |
| rice bowl | 新しい茶碗です。 | It's a new rice bowl. | ちゃわん | N4 L5 T5 C1 I1 — Generic template sentence; blank could be almost any noun. | teach only | yes |
| to see | テレビを見てください。 | Please watch TV. | みて | N4 L5 T5 C2 I1 — Very generic template sentence, blank not uniquely forced | teach only | yes |
| to hand over | 先生に宿題を渡しました。 | I handed in the homework to the teacher. | わたしました | N5 L5 T4 C4 I3 — Translation 'handed in' is slightly loose but acceptable; context makes 渡す a strong guess. | cloze+teach | yes |
| pretty | この花は綺麗です。 | This flower is pretty. | きれい | N4 L5 T5 C2 I1 — Very generic template sentence; blank could be many adjectives. | teach only | yes |
| police officer | 警官に道を聞きました。 | I asked the police officer for directions. | けいかん | N5 L5 T5 C4 I4 — Context of asking directions strongly suggests a police officer, though 'person' could also fit. | cloze+teach | yes |
| myself | 自分の物です。 | It's my own thing. | じぶん | N4 L5 T5 C2 I1 — Very generic template sentence; blank not uniquely recoverable. | teach only | yes |
| convenient | 会社の近くは便利です。 | It's convenient near the office. | べんり | N4 L5 T4 C2 I2 — Many adjectives (静か、危険、安全) could fit the blank, weakening recoverability. | teach only | yes |
| short (length) | この鉛筆は短いです。 | This pencil is short. | みじかい | N5 L5 T5 C2 I2 — Generic template; many adjectives could fit the blank for a pencil. | teach only | yes |
| car | 毎日車で会社へ行きます。 | I go to the office by car every day. | くるま | N5 L5 T5 C3 I3 — Other transportation words could also fit the blank. | teach only | yes |
| bus | バスで学校へ行きます。 | I go to school by bus. | ばす | N5 L5 T5 C2 I3 — Same generic transport pattern; multiple words could fill the blank. | teach only | yes |
| to vanish | 電気が消えました。 | The lights went out. | きえました | N5 L5 T5 C3 I2 — Generic sentence; other verbs like つきました could also fit the blank. | teach only | yes |
| to vanish | 雪はもう消えました。 | The snow has already melted away. | きえました | N4 L5 T4 C3 I3 — 'melted away' is a loose translation of 消える; other verbs could also fit the blank. | teach only | yes |
| to erase | 名前を消しました。 | I erased the name. | けしました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| one day (duration) | 一日、家で音楽を聞きました。 | I listened to music at home for one day. | いちにち | N4 L5 T5 C3 I2 — Template-like sentence; blank not uniquely determined by context. | teach only | yes |
| year before last | おととし、車を買いました。 | I bought a car the year before last. | おととし | N5 L5 T5 C2 I3 — Blank is not uniquely constrained to 'year before last'; other time nouns fit. | teach only | yes |
| refrigerator | 冷蔵庫に牛乳があります。 | There is milk in the refrigerator. | れいぞうこ | N5 L5 T5 C3 I2 | teach only | yes |
| more | もっとゆっくりと話してください。 | Please speak more slowly. | もっと | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to understand | 言葉が分かりますか。 | Do you understand the word? | わかります | N5 L5 T5 C5 I2 — Very similar to sentence 0, slightly generic. | cloze+teach | yes |
| every year | 毎年、旅行します。 | I travel every year. | まいとし | N4 L5 T5 C2 I1 — Very generic sentence; many time expressions (今年, 来年, たまに) could fill the blank. | teach only | yes |
| it takes | 学校まで一時間かかります。 | It takes one hour to school. | かかります | N4 L5 T5 C4 I2 — Generic template sentence. | cloze+teach | yes |
| month of year | 誕生日は何月ですか。 | What month is your birthday? | がつ | N5 L5 T5 C3 I3 — Natural and correct, but blank could plausibly be filled with other words like 何日 depending on context; still 何___ですか strongly suggests 月 given birthday context. | teach only | yes |
| last year | 去年友達が家に来ました。 | Last year a friend came to my house. | きょねん | N5 L5 T5 C3 I3 | teach only | yes |
| cooking | 母の料理はとても美味しいです。 | My mother's cooking is very delicious. | りょうり | N5 L5 T5 C4 I4 | cloze+teach | yes |
| button | シャツのボタンを無くしました。 | I lost the button of my shirt. | ぼたん | N5 L5 T5 C3 I4 | teach only | yes |
| real | 友達の話は本当でした。 | My friend's story was true. | ほんとう | N5 L5 T5 C3 I3 | teach only | yes |
| difficult | 漢字は難しいですから、時間がかかります。 | Kanji is difficult, so it takes time. | むずかしい | N5 L4 T5 C4 I4 — Context (takes time) strongly cues 'difficult', good cloze constraint. | cloze+teach | yes |
| slowly | 時間がありませんから、ゆっくりと食べません。 | I don't have time, so I don't eat slowly. | ゆっくりと | N4 L5 T5 C4 I3 — Slightly odd logic but context strongly cues the target word. | cloze+teach | yes |
| how many | 晩御飯に卵はいくつ要りますか。 | How many eggs do we need for dinner? | いくつ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| five things | お菓子を五つください。 | Please give me five sweets. | いつつ | N5 L5 T5 C3 I3 — Number choice not contextually forced. | teach only | yes |
| Yen | この本は千円です。 | This book is a thousand yen. | えん | N4 L5 T5 C5 I2 — Generic この本は…です template. | cloze+teach | yes |
| nine | 毎朝九時に起きます。 | I get up at nine o'clock every morning. | く | N5 L5 T5 C2 I2 — Generic time sentence; any number fits the blank equally well. | teach only | yes |
| to tie | 父は毎朝ネクタイを締めます。 | My father ties his necktie every morning. | しめ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| two things | 卵を二つ使います。 | I use two eggs. | ふたつ | N5 L5 T5 C2 I2 — Any number could fill the blank; lacks distinguishing context. | teach only | yes |
| two people | 二人で晩御飯を食べましょう。 | Let's eat dinner together, just the two of us. | ふたり | N5 L5 T5 C3 I3 | teach only | yes |
| three | 三時に友達が来ます。 | My friend is coming at three o'clock. | さん | N5 L4 T5 C2 I3 — Any time could fit grammatically; number itself isn't uniquely recoverable from context. | teach only | yes |
| afterwards | 晩御飯の後でテレビを見ます。 | I watch TV after dinner. | あと | N5 L5 T5 C3 I3 — 前 could also fit grammatically in the blank, reducing certainty. | teach only | yes |
| one thing | 卵を一つください。 | Please give me one egg. | ひとつ | N5 L5 T5 C3 I3 — Similar to egg example; blank not uniquely forced to 一つ. | teach only | yes |
| four things | コップを四つ出してください。 | Please put out four cups. | よっつ | N5 L5 T5 C3 I3 — Any counter number could fit the blank grammatically. | teach only | yes |
| approximately (amount) | 五分くらい待ってください。 | Please wait about five minutes. | くらい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to precipitate | 雪が降るから、傘を持って行きます。 | Because it will snow, I'll bring an umbrella. | ふる | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to precipitate | 明日は雨が降りません。 | It won't rain tomorrow. | ふりません | N5 L5 T5 C5 I3 | cloze+teach | yes |
| beyond | 向こうに山があります。 | There is a mountain over there. | むこう | N5 L5 T4 C2 I2 — Generic sentence; あそこ or そこ could also fit the blank, and EN 'over there' slightly diverges from literal 'beyond'. | teach only | yes |
| to appear | 頭が痛いですから、会社に出ません。 | My head hurts, so I won't go in to work. | でません | N4 L4 T4 C3 I4 — other verbs like 行きません or 休みます could also fit the blank, reducing recoverability. | teach only | yes |
| to enter | 一緒に会社に入りましょう。 | Let's go into the office together. | はいりましょう | N4 L5 T4 C2 I2 — Ambiguous context allows other motion verbs like 行きましょう to fit equally well. | teach only | yes |
| to meet | 明日、駅で会いましょう。 | Let's meet at the station tomorrow. | あいましょう | N5 L5 T5 C3 I3 — Blank could also be filled by other verbs like 待ちましょう or 行きましょう. | teach only | yes |
| to meet | 仕事が忙しいですから、友達に会いません。 | Work is busy, so I won't meet my friend. | あいません | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to go back | 毎晩七時に家に帰ります。 | I go back home at seven every night. | かえります | N5 L5 T5 C4 I3 | cloze+teach | yes |
| skirt | 新しいスカートが欲しいです。 | I want a new skirt. | すかあと | N5 L5 T5 C2 I2 — Generic 'want new X' template; low cloze specificity. | teach only | yes |
| trousers | 新しいズボンを買いました。 | I bought new trousers. | ずぼん | N5 L5 T5 C2 I2 — Same generic buying sentence pattern; many nouns could fill the blank. | teach only | yes |
| yet | 父はまだ帰りません。 | My father hasn't come home yet. | まだ | N5 L5 T4 C4 I3 | cloze+teach | yes |
| embassy | 大使館に電話をかけました。 | I made a call to the embassy. | たいしかん | N5 L5 T5 C3 I3 | teach only | yes |
| kitchen | 台所で晩御飯を作っています。 | I'm making dinner in the kitchen. | だいどころ | N5 L3 T5 C3 I3 — ています form is N4, slightly above N5 ceiling. | teach only | yes |
| various | 台所に色々な野菜があります。 | There are various vegetables in the kitchen. | いろいろ | N4 L5 T5 C3 I3 — Slightly odd to have many vegetables in a kitchen rather than a store, but plausible. | teach only | yes |
| slow | 晩御飯はいつも遅いです。 | Dinner is always late. | おそい | N5 L5 T4 C3 I3 — '遅い' here means 'late', but English target says 'slow' causing slight mismatch; also 早い could fit blank. | teach only | yes |
| same | 母と同じ料理を作りました。 | I made the same dish as my mother. | おなじ | N5 L5 T5 C3 I4 — Blank could be filled with other adjectives like おいしい or 新しい, slightly reducing recoverability. | teach only | yes |
| corner (e.g., desk, pavement) | 友達の家は角にあります。 | My friend's house is on the corner. | かど | N5 L5 T5 C5 I4 | cloze+teach | yes |
| It's ok | 頭は大丈夫ですか。 | Is your head okay? | だいじょうぶ | N4 L5 T5 C3 I4 — Slightly ambiguous—words like 痛い could also fit the blank. | teach only | yes |
| enjoyable | 旅行はとても楽しいです。 | The trip is very enjoyable. | たのしい | N4 L5 T5 C2 I2 — Generic template sentence; many adjectives fit the blank equally well. | teach only | yes |
| enjoyable | パーティーは楽しかったです。 | The party was fun. | たのしかった | N5 L5 T5 C4 I4 — Reading uses hiragana long vowels for パーティー instead of katakana ー, slightly unusual but understandable. | cloze+teach | yes |
| a page | この本は百ページあります。 | This book has one hundred pages. | ぺえじ | N5 L5 T5 C5 I2 — Simple, correct, but generic template sentence. | cloze+teach | yes |
| a page | 次のページを読みたいです。 | I want to read the next page. | ぺえじ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| seven things | お菓子は七つありますか。 | Are there seven pieces of candy? | ななつ | N5 L5 T5 C2 I3 — No contextual clue pins down 'seven' specifically among other counts. | teach only | yes |
| two | 二時に授業が始まります。 | Class starts at two o'clock. | に | N5 L5 T5 C3 I3 — Any hour number could fit the blank. | teach only | yes |
| counter for cupfuls | お茶を二杯出しました。 | I served two cups of tea. | はい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| counter for cupfuls | コーヒーを二杯飲みたいです。 | I want to drink two cups of coffee. | はい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| ~st | あなたは何番ですか。 | What number are you? | ばん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| half | お菓子の半分を食べました。 | I ate half of the candy. | はんぶん | N5 L5 T5 C3 I3 — Could also fit 全部 or 一部 in the blank, reducing recoverability. | teach only | yes |
| zero | 今朝は零度でした。 | This morning it was zero degrees. | れい | N4 L5 T5 C2 I1 — Very generic template sentence; blank could be any number word. | teach only | yes |
| ~ minutes | 五分だけ待ってください。 | Please wait just five minutes. | ふん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| months | 二か月待ってください。 | Please wait two months. | かげつ | N4 L5 T5 C2 I2 — Very generic sentence; many time-unit words could fill the blank. | teach only | yes |
| real | それは本当じゃないです。 | That is not true. | ほんとう | N5 L5 T5 C3 I2 | teach only | yes |
| ~ shop | あの店はパン屋ですか。 | Is that shop a bakery? | や | N5 L5 T5 C4 I3 | cloze+teach | yes |
| counter for small items | 卵を三個ください。 | Please give me three eggs. | こ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| counter for small items | お菓子を何個食べますか。 | How many pieces of candy will you eat? | こ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| long | 今日の授業は長いですか。 | Is today's class long? | ながい | N5 L5 T5 C3 I3 — 難しい/楽しい etc. could also plausibly fill the blank. | teach only | yes |
| lukewarm | このお茶は温いです。 | This tea is lukewarm. | ぬるい | N5 L5 T5 C3 I2 — Generic template sentence; other temperature adjectives could substitute. | teach only | yes |
| fast | あなたの自転車は速いですか。 | Is your bicycle fast? | はやい | N5 L5 T5 C3 I3 — Other adjectives like 新しい/高い could also fit the context. | teach only | yes |
| short | この机は低いです。 | This desk is low. | ひくい | N4 L5 T5 C3 I2 — Desk being 'low' is plausible but less naturally distinctive; ambiguous with 高い without translation. | teach only | yes |
| to say | 名前を言いましたか。 | Did you say your name? | いい | N4 L5 T4 C2 I2 — 名前を＿ましたか could be completed with many verbs (書く, 呼ぶ, etc.), so 言う isn't uniquely forced; also only partial verb stem is beeped rather than full conjugated form. | teach only | yes |
