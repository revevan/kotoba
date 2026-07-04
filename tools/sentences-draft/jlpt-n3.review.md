# Sentence review — jlpt-n3

Judge scores: N=naturalness L=level T=translation C=cloze-recoverability I=interest (1-5).
Auto-approved: C≥4 N≥4 L≥3 T≥4.
Flip `approved` in jlpt-n3.candidates.json to override either direction, then:
`npm run gen-sentences -- --approve jlpt-n3`

## Flagged for review (642)

| word | sentence (JA) | EN | cloze answer | judge | use | approve? |
| --- | --- | --- | --- | --- | --- | --- |
| to tear | 友達と一緒に古い服を裂いて捨てましょう。 | Let's tear up the old clothes and throw them away with my friend. | さいて | N3 L5 T5 C3 I2 — Scenario (tearing clothes with a friend) feels slightly unnatural/contrived; 破って also fits the blank. |  |  |
| support | 足が痛いから、壁で体を支えます。 | Since my leg hurts, I support my body against the wall. | ささえます | N3 L5 T4 C4 I3 — 壁で is slightly unnatural; 壁に体を支える would be more natural. |  |  |
| support | 友達と一緒にテーブルを支えてくれませんか。 | Could you help support the table with me? | ささえて | N3 L5 T4 C4 I3 — 一緒に...くれませんか is a bit redundant/awkward phrasing. |  |  |
| to stick | 料理の途中で、魚の骨が喉に刺さりました。 | While cooking, a fish bone got stuck in my throat. | ささりました | N2 L5 T4 C4 I3 — 料理の途中で(while cooking) is illogical—bones stick in throat while eating, not cooking. |  |  |
| to insert | 友達が来るので、ドアの鍵を挿してください。 | Since my friend is coming, please insert the key into the door. | さして | N2 L5 T4 C3 I2 — 鍵は通常「差す」と書かれ、挿すは不自然；友達が来る理由も鍵を挿す動機として不自然 |  |  |
| to insert | 写真をアルバムに挿しませんか。 | Won't you insert the photo into the album? | さしません | N3 L5 T5 C3 I3 — 入れる/貼るなど他の動詞も文脈上あり得る |  |  |
| to pour (drink) | 父にお酒を注しました。 | I poured sake for my father. | さしました | N2 L4 T4 C2 I2 — 注す read as さす is nonstandard; usually 差す(さす) or 注ぐ(そそぐ) is used, so kanji/reading pairing is questionable. |  |  |
| to pour (drink) | 彼はコップに水を注しません。 | He doesn't pour water into the cup. | さしません | N2 L4 T4 C2 I2 — 注す read as さす is nonstandard; usually 差す(さす) or 注ぐ(そそぐ) is used, so kanji/reading pairing is questionable. |  |  |
| Buddha | 寺には大きい仏があります。 | There is a big Buddha statue at the temple. | ほとけ | N3 L5 T3 C2 I3 — Japanese says 仏 not 仏像, but English translation adds 'statue', causing slight mismatch; blank could also fit 像/絵/人など。 |  |  |
| Buddha | 仏に祈ってください。 | Please pray to the Buddha. | ほとけ | N3 L5 T4 C2 I3 — 祈る is more commonly paired with 神 than 仏, making the blank less uniquely recoverable. |  |  |
| lost child | 迷子になりました。 | I got lost (as a child). | まいご | N4 L5 T2 C2 I2 — English gloss '(as a child)' is misleading; blank could fit many other words (e.g. 病気になりました). |  |  |
| helpless | 病気で痩せた犬が哀れでした。 | The sick, thin dog was pitiful. | あわれ | N5 L4 T3 C3 I3 — 哀れ means 'pitiful/miserable', not 'helpless'; target gloss is inaccurate. |  |  |
| helpless | 雨の中で傘もなく歩く人が哀れに見えた。 | The person walking in the rain without an umbrella looked pitiful. | あわれ | N5 L4 T3 C3 I3 — 哀れ means 'pitiful/miserable', not 'helpless'; target gloss is inaccurate. |  |  |
| strangeness | 今日は電車の時間に異常があります。 | Today there's an abnormality in the train times. | いじょう | N3 L4 T4 C3 I3 — Phrasing is slightly unnatural; more common would be 'ダイヤに乱れ/遅れがあります'. |  |  |
| pole | 棒を使って窓を開けましょうか。 | Shall we use the pole to open the window? | ぼう | N3 L5 T5 C2 I3 — Using a pole to open a window is unusual; many other tools (stick, hand, key) could fit the blank equally well. |  |  |
| mic | マイクの声が聞こえますか。 | Can you hear the voice through the mic? | まいく | N2 L5 T3 C2 I2 — マイクの声 is unnatural phrasing; mics don't have their own 'voice'. |  |  |
| to leave | 友達は日曜日にこの村を去ります。 | My friend will leave this village on Sunday. | さります | N3 L4 T5 C3 I3 — 未来形での「去る」はやや硬い言い方 |  |  |
| to leave | 電車は時間通りに駅を去った。 | The train left the station on schedule. | さった | N2 L4 T4 C3 I3 — 電車には「出発した」「離れた」の方が自然 |  |  |
| to be hit | ボールが車に当たりました。 | The ball hit the car. | あたりました | N2 L5 T5 C3 I3 — Reading kana 'ぼおる' is incorrect for ボール, which should use the long vowel mark ぼーる; naturalness capped due to reading mismatch. |  |  |
| going | 学校の行きに雨が降ってきました。 | It started raining on my way to school. | いき | N2 L4 T4 C2 I3 — 学校の行きに is unnatural phrasing (should be 学校へ行く途中に or 学校の帰りに); also 帰り fits the blank equally well, hurting cloze recoverability. |  |  |
| lamplight | 教室の明かりはどこにありますか。 | Where is the light in the classroom? | あかり | N2 L5 T3 C2 I2 — asking where a light 'is located' is an odd/unnatural question; translation slightly off in nuance |  |  |
| board | 台所の板はいつ直しますか。 | When will you fix the kitchen board? | いた | N2 L5 T3 C2 I2 — '台所の板' is an unnatural, ambiguous phrase; unclear what it refers to. |  |  |
| board | 友達が来る前に、机の板を拭きましょう。 | Let's wipe the desk board before our friend comes. | いた | N2 L5 T2 C2 I2 — '机の板' and its translation 'desk board' sound unnatural; ambiguous meaning. |  |  |
| old people | 電車の中で年寄りに席をあげてください。 | Please give your seat to an elderly person on the train. | としより | N3 L5 T5 C3 I3 — あげてください is slightly less natural than 譲ってください for giving up a seat, but understandable. |  |  |
| limit | お金の限界を考えたことがありますか。 | Have you ever thought about the limit of your money? | げんかい | N2 L5 T4 C2 I2 — 'お金の限界' sounds unnatural; 限度 would be more idiomatic here. |  |  |
| reality | 病気になって、現実が分かりました。 | When I got sick, I understood the reality. | げんじつ | N3 L5 T4 C2 I2 — blank too generic; many nouns could fit (状況、苦しさ, etc.) |  |  |
| present condition | 病気の現状を医者に話しました。 | I told the doctor about the current state of my illness. | げんじょう | N3 L4 T4 C3 I3 — 病状 would be more natural for illness context; 現状 slightly unusual here. |  |  |
| universe | 宇宙は広いですか。 | Is the universe wide? | うちゅう | N4 L5 T3 C2 I2 — '広い' (wide) is an odd fit for 'universe'; many other nouns (海, 世界, 部屋) could fill the blank, and 'wide' is an unnatural translation for vastness. |  |  |
| satellite | あの衛星は天気を調べます。 | That satellite checks the weather. | えいせい | N3 L5 T4 C3 I2 — Slightly unnatural phrasing; satellites 'observe' rather than 'check' weather, and many nouns could fill the blank. |  |  |
| satellite | 新しい衛星が上がりました。 | A new satellite went up. | えいせい | N3 L5 T4 C2 I3 — '上がりました' is a bit informal for satellite launch; also blank could fit many other nouns like price or flag. |  |  |
| celebration | 今夜はレストランで誕生日の祝いをします。 | Tonight we will have a birthday celebration at a restaurant. | いわい | N3 L5 T5 C3 I3 — Natural Japanese usually adds お before 祝い (お祝い); other words like 会 could also fill the blank. |  |  |
| celebration | 卒業の祝いに時計を贈ってください。 | Please give a watch as a graduation celebration gift. | いわい | N3 L5 T4 C4 I3 — Sounds slightly stiff without お祝い; still understandable and reasonably specific. |  |  |
| celebration | 子供が生まれましたから、家族で祝いをしました。 | Since a baby was born, the family held a celebration. | いわい | N3 L5 T5 C4 I3 — Common phrasing would use お祝い; otherwise fine and clear context. |  |  |
| to weaken | 薬を飲んだから、頭の痛みが弱まりました。 | Because I took medicine, my headache weakened. | よわまりました | N3 L5 T5 C2 I3 — 和らぐ or 治まる would be more natural for pain; many words could fit blank. |  |  |
| to accumulate | 将来のために、お金を溜めています。 | I'm saving money for the future. | ためて | N3 L5 T5 C4 I3 — お金を貯める is the more standard kanji/verb for saving money; 溜める feels slightly off here. |  |  |
| to accumulate | 彼は昔から切手を溜めています。 | He has been collecting stamps for a long time. | ためて | N2 L4 T4 C3 I3 — Collecting stamps as a hobby is more naturally expressed with 集める; 溜める sounds unnatural for intentional collecting. |  |  |
| to attach | 手紙に切手を付けてください。 | Please attach a stamp to the letter. | つけて | N3 L5 T5 C2 I3 — 貼る is the more natural verb for attaching a stamp, making 付ける ambiguous as the answer. |  |  |
| to put on | 父はネクタイを着けて会社へ行きます。 | My father puts on a necktie and goes to the office. | つけて | N3 L5 T5 C3 I3 — Neckties are usually described with 締める rather than 着ける, making this slightly unnatural. |  |  |
| to be full | 港に着く前に、川の水が満ちてきた。 | The river water rose before reaching the harbor. | みちて | N3 L4 T4 C3 I3 — Mixing harbor and river tide is a bit odd; other verbs like 増えて/上がって could fit the blank. |  |  |
| to be full | 夜になると、月が満ちます。 | The moon becomes full at night. | みちます | N2 L4 T3 C2 I2 — Factually inaccurate (moon doesn't become full nightly) and blank could be filled by other verbs like 出ます/昇ります. |  |  |
| to peel | 忙しくて、まだ卵の皮を剥いていません。 | I'm busy, so I haven't peeled the egg yet. | むいていません | N3 L5 T4 C5 I3 — 卵は皮ではなく殻(から)を剥くのが自然な表現。 |  |  |
| mind | 友達が遊びに来たので、私の精神は元気になりました。 | Since a friend came to visit, my spirit became lively. | せいしん | N2 L3 T3 C2 I2 — 精神が元気になる is an unnatural collocation; 気分 or 元気 alone would fit better, and EN 'spirit' vs 'mind' inconsistent. |  |  |
| mind | 彼は忙しくても、精神は弱くないです。 | Even though he's busy, his mind isn't weak. | せいしん | N3 L4 T4 C3 I2 — 精神は弱くない is a bit stiff; 気 could also fit the blank. |  |  |
| betterment | 友達は部屋を改善しましたか。 | Did your friend improve the room? | かいぜん | N2 L5 T4 C2 I2 — 改善 doesn't naturally collocate with 部屋 (a physical room); words like 片付ける or リフォームする would be more natural, weakening the cloze. |  |  |
| to restrict | 授業は九時までに限ります。 | Class is limited to until nine o'clock. | かぎります | N2 L4 T3 C2 I2 — Unnatural phrasing; 限る doesn't fit well with time duration like this. |  |  |
| resolution | 難しい試合に勝つ覚悟です。 | I'm resolved to win the difficult match. | かくご | N3 L5 T4 C3 I3 — 覚悟です with 勝つ is a bit unusual; つもり could also fit the blank. |  |  |
| loan | 私に貸しがありますか。 | Do you owe me a favor? | かし | N2 L4 T2 C3 I2 — The Japanese literally means 'Do I have a favor owed to me?' not 'Do you owe me a favor?'; subject/direction mismatch with the English. |  |  |
| loan | 彼にお金の貸しを作りました。 | I lent him some money. | かし | N2 L4 T3 C2 I2 — 貸しを作る here reads awkwardly for simply lending money; a more natural phrase would be お金を貸しました, and many nouns could fill the blank after お金の. |  |  |
| to adjoin | 名前が書類に付いていますか。 | Is the name written on the document? | ついています | N2 L3 T2 C2 I2 — 付く is unnatural for describing a name being written on a document; 書いてある or 記載されている would be more natural. |  |  |
| tiger | 虎に会って、驚きました。 | I met a tiger and was surprised. | とら | N3 L5 T5 C2 I3 — 会う is slightly unnatural for encountering an animal (出会う more common); blank could be any surprising creature. |  |  |
| sunlight | 日光の下で本を読みましょう。 | Let's read a book under the sunlight. | にっこう | N3 L5 T4 C3 I2 — reading a book directly under sunlight is a bit unnatural; 日陰 or 木陰 would be more typical |  |  |
| mouse | 鼠は小さくて可愛いですか。 | Is a mouse small and cute? | ねずみ | N2 L5 T4 C2 I2 — Unnatural/awkward question phrasing; blank could be many small cute animals. |  |  |
| difficulty | この車は音に難があります。 | This car has a problem with its noise. | なん | N4 L2 T5 C2 I3 — 難 (defect) is above N3 vocabulary level; 問題 could also fill the blank, weakening cloze uniqueness. |  |  |
| difficulty | この計画には難がないと思います。 | I don't think there's any flaw in this plan. | なん | N4 L2 T5 C2 I3 — Same issue: 問題 fits equally well in this slot, reducing cloze recoverability. |  |  |
| difficulty | この仕事にはどんな難がありますか。 | What kind of difficulty does this job have? | なん | N4 L2 T5 C2 I3 — 問題 or 課題 could also fit the blank, so context doesn't uniquely force 難. |  |  |
| good fortune | 彼は福がある人です。 | He is a lucky person. | ふく | N3 L5 T4 C2 I2 — 福がある人 is a bit unusual; 運がある is more common, so many words could fit the blank. |  |  |
| good fortune | 今年は福が少なかったです。 | This year there was little good fortune. | ふく | N3 L5 T4 C2 I2 — 福が少ない is an uncommon collocation; 運/幸せ could also fill the blank, reducing recoverability. |  |  |
| to give birth | 猫が赤ちゃんを産みましたから、忙しいです。 | The cat gave birth to babies, so I'm busy. | うみました | N3 L5 T4 C4 I3 — 猫の出産には「赤ちゃん」より「子猫」が自然。 |  |  |
| to be thirsty | 運動した後、喉が渇きます。 | My throat gets thirsty after exercising. | かわきます | N4 L5 T3 C4 I3 — Translation 'throat gets thirsty' is awkward English; should be 'I get thirsty'. |  |  |
| gland | 首のグランドが痛いです。 | The gland in my neck hurts. | ぐらんど | N2 L3 T1 C2 I2 — グランド is a false cognate meaning 'ground/field' in Japanese, not 'gland' (which is 腺); this mistranslation undermines the whole sentence. |  |  |
| gland | 医者はグランドを調べました。 | The doctor examined the gland. | ぐらんど | N2 L3 T1 C2 I2 — Same issue: グランド does not mean 'gland' in Japanese; correct word would be 腺(せん). |  |  |
| gland | グランドが大きくなりました。 | The gland got bigger. | ぐらんど | N2 L3 T1 C3 I2 — グランド is a false cognate for 'ground/field', not 'gland'; mistranslation makes this confusing for learners. |  |  |
| to sell wholesale | この店は野菜を農家から卸しています。 | This store wholesales vegetables from farmers. | おろしています | N2 L4 T2 C3 I3 — 卸す means to sell wholesale, but 'from farmers' implies buying/procuring, which would be 仕入れる, not 卸す — semantic mismatch. |  |  |
| as ever | 彼女は相変わらず毎朝早く起きました。 | She got up early every morning as usual. | あいかわらず | N2 L4 T3 C3 I2 — 相変わらず pairs oddly with a one-time past action like 起きました; sounds unnatural. |  |  |
| as ever | 今週も相変わらず仕事をするつもりです。 | I plan to work as usual this week too. | あいかわらず | N3 L4 T4 C3 I2 — 相変わらず with つもり (future plan) is a slightly awkward combination. |  |  |
| bundle | 重い包みを買いましたから、疲れました。 | I bought a heavy bundle, so I got tired. | つつみ | N3 L5 T4 C2 I2 — Buying a heavy bundle and being tired is a slightly odd causal link; many nouns could fill the blank. |  |  |
| bundle | 包みを電車に忘れませんでした。 | I didn't forget the bundle on the train. | つつみ | N3 L5 T5 C3 I2 — Plausible but generic; other objects (bag, umbrella) could fit equally well. |  |  |
| iron | 鉄は柔らかくありません。 | Iron is not soft. | てつ | N3 L5 T5 C2 I2 — Many hard materials could fill the blank; also 硬い would be more natural than 柔らかくない for describing iron. |  |  |
| rope | その縄は強くありません。 | That rope is not strong. | なわ | N3 L5 T4 C2 I2 — 丈夫 would be more natural than 強い for rope; blank could be many nouns |  |  |
| order | 空港に着き次第、電話します。 | As soon as I arrive at the airport, I'll call. | しだい | N2 L3 T4 C4 I3 — Reading kana is wrong: 着き should be つき, not ついき. |  |  |
| center | 台風が中心に近いから、学校を休みます。 | Since the typhoon is close to the center, I will be absent from school. | ちゅうしん | N2 L5 T3 C3 I3 — 「台風が中心に近い」is awkward phrasing; usually 台風の中心が近づく, and the causal link to skipping school is unclear. |  |  |
| Orient | 東洋の文化を習っていますから、面白いです。 | Since I am learning Oriental culture, it is interesting. | とうよう | N3 L4 T4 C2 I3 — The から...面白いです causal link feels slightly forced, and the blank could be filled by many other region/culture words. |  |  |
| somewhere | 来週どこか行きたいです。 | I want to go somewhere next week. | どこか | N3 L5 T5 C2 I2 — いつか could also fit the blank, reducing recoverability; also missing に after どこか sounds slightly casual/omitted. |  |  |
| somewhere | もしもし、どこかで会いませんか。 | Hello, won't we meet somewhere? | どこか | N2 L5 T4 C2 I2 — もしもし+どこかで会いませんか combination feels odd; いつか could also fit the blank. |  |  |
| to omit | 旅行の予定から、遠い町を省くことにしました。 | I decided to leave out the far town from the travel plan. | はぶく | N3 L4 T4 C3 I3 — 除く/外す could also fit the blank, slightly lowering specificity. |  |  |
| to wipe | 晩御飯の前に、テーブルを拭いてください。 | Please wipe the table before dinner. | ふいて | N2 L5 T5 C5 I3 — Reading kana error: テーブル should be 'てーぶる' not 'てえぶる'. |  |  |
| to wipe | ホテルの部屋で、窓を拭きました。 | I wiped the window in the hotel room. | ふきました | N2 L5 T5 C3 I2 — Reading kana error: ホテル should be 'ほてる' with long vowel mark, written as 'ほてる' without it; also window could be wiped/cleaned/polished, lowering cloze certainty. |  |  |
| to contain | このカレーはたくさんの野菜を含んでいます。 | This curry contains a lot of vegetables. | ふくんで | N2 L4 T5 C4 I3 — Reading kana incorrectly renders カレー as かれえ instead of かれー; naturalness capped. |  |  |
| to contain | このパーティーの費用には食事代も含みますか。 | Does the cost of this party include the meal too? | ふくみます | N2 L4 T5 C4 I3 — Reading kana incorrectly renders パーティー as ぱあてぃい instead of ぱーてぃー; naturalness capped. |  |  |
| to defend | 遅れを防ぐために、早く家を出ました。 | I left home early to avoid being late. | ふせぐ | N3 L5 T5 C3 I3 — 遅れを防ぐ is a slightly awkward collocation; 遅刻を防ぐ or 遅れないように is more natural. |  |  |
| National Diet | 昨日、国会でニュースがありました。 | Yesterday, there was news at the National Diet. | こっかい | N2 L5 T3 C2 I2 — Phrase 'ニュースがありました' at a location sounds unnatural; usually one'd say 国会に関するニュース or 国会でニュースになる出来事. |  |  |
| hut | あの小屋は誰の家ですか。 | Whose house is that hut? | こや | N3 L5 T4 C2 I2 — Slightly redundant phrasing—calling it a 小屋 already implies it's not a typical 家, making the question a bit odd. |  |  |
| emotion | 料理を見て、色々な感情が湧きました。 | Seeing the food, various emotions welled up in me. | かんじょう | N3 L5 T4 C3 I3 — Slightly odd context—food usually evokes appetite or memories more than 'emotions' generically, so other words could fit the blank. |  |  |
| museum | 昨日、友達と博物館を見てから、レストランで食事をしました。 | Yesterday, after seeing the museum with a friend, we ate at a restaurant. | はくぶつかん | N3 L5 T5 C2 I3 — 見てから is slightly unnatural for visiting a museum (行ってから/見学してから more natural); blank could be filled by many other place nouns. |  |  |
| path | 天気がよければ、このパスを歩くことになりました。 | If the weather is good, it's been decided that we'll walk this path. | ぱす | N2 L3 T2 C2 I2 — パス doesn't naturally mean a walking path in Japanese (that would be 道/小道); パス usually means 'pass' (ticket, skip, etc.), so this mistranslates the target word. |  |  |
| path | このパスは狭いから、気をつけてください。 | This path is narrow, so please be careful. | ぱす | N2 L4 T2 C2 I2 — Same issue: パス is not the natural Japanese word for a walking path; native speakers would say 道 here. |  |  |
| prime | この病気の素は分かりません。 | The cause of this illness is unknown. | もと | N2 L3 T3 C2 I3 — Native speakers would more naturally say 原因 for 'cause of illness', making 素 an unnatural and ambiguous choice here. |  |  |
| prime | すべての素は水だと思います。 | I think the origin of everything is water. | もと | N3 L3 T4 C3 I4 — Slightly abstract but plausible; other words like 起源 could also fit the blank. |  |  |
| disposition | 彼は意地が強くて、謝りません。 | He is stubborn and won't apologize. | いじ | N3 L5 T4 C3 I3 — 意地が強い is less idiomatic than 気が強い/頑固; could invite other fillers. |  |  |
| the splitting image of | この料理の味は母の味にそっくりです。 | The taste of this dish is just like my mother's. | そっくり | N2 L5 T5 C5 I3 — Reading kana has an extra 'は' (あじはははののあじに) not matching the sentence's true reading, so naturalness capped. |  |  |
| softly | 遅れないように、そっとドアを開けました。 | So as not to be late, I quietly opened the door. | そっと | N2 L4 T4 C2 I3 — 遅れないように doesn't logically motivate quietly opening a door; the reasoning-action link is odd. |  |  |
| by the way | ところで、晩御飯はもうできています。 | By the way, dinner is already ready. | ところで | N3 L5 T5 C3 I3 — ところで here doesn't clearly signal a natural topic shift, feels slightly forced |  |  |
| shield | 壁に古い盾を飾ってあります。 | An old shield is displayed on the wall. | たて | N3 L4 T5 C2 I3 — を with てある is slightly unnatural; が would be more standard, and 'shield' isn't uniquely inferable from context (could be painting, sword, etc.). |  |  |
| label | 箱に票を貼ってください。 | Please stick a label on the box. | ひょう | N3 L5 T2 C3 I2 — 票 primarily means 'vote/ballot', not 'label'; using it for a sticker label is a mistranslation. |  |  |
| label | この票には値段が書いてあります。 | The price is written on this label. | ひょう | N3 L5 T2 C3 I2 — 票 does not mean 'label'; correct word would be 札 or ラベル. |  |  |
| label | 票がないから、これが何か分かりません。 | Because there is no label, I don't know what this is. | ひょう | N3 L5 T2 C2 I2 — Same mistranslation issue; also many other nouns (名前, 番号, 説明) could fit the blank. |  |  |
| unemployment | 失業は大きい問題です。 | Unemployment is a big problem. | しつぎょう | N3 L5 T5 C2 I2 — 大きな問題 would be more natural than 大きい問題; blank could be filled by many nouns. |  |  |
| muscle | 運動して筋が痛くなりました。 | After exercising, my muscle became sore. | すじ | N4 L5 T3 C3 I3 — 筋 here more naturally means tendon/sinew than 'muscle'; 筋肉 is the standard word for muscle. |  |  |
| muscle | 足の筋が強いです。 | The muscle in my leg is strong. | すじ | N2 L5 T2 C2 I2 — 足の筋が強い is awkward; native speakers wouldn't describe muscle strength this way, and 筋 doesn't clearly mean 'muscle' here. |  |  |
| muscle | どの筋が痛いですか。 | Which muscle hurts? | すじ | N2 L5 T3 C3 I2 — どの筋 sounds unnatural; どこが痛いですか would be more typical phrasing. |  |  |
| to congratulate | 電話で誕生日を祝ってもいいですか。 | Is it okay to congratulate you on your birthday over the phone? | いわって | N3 L4 T3 C3 I2 — Slightly unnatural phrasing; 'congratulate' vs 'celebrate' nuance mismatch. |  |  |
| quotation | このレポートの引用は正しいですか。 | Is the quotation in this report correct? | いんよう | N2 L5 T5 C3 I3 — Reading kana for レポート is mistranscribed as 'れぽうと' instead of 'れぽーと', so naturalness capped at 2. |  |  |
| rumor | 電話でその噂について何か知っていますか。 | Do you know anything about that rumor over the phone? | うわさ | N3 L5 T4 C3 I3 — Slightly awkward phrasing linking 電話で to hearing about a rumor; blank not uniquely determined. |  |  |
| native Japanese reading of a Chinese | この訓は難しいです。 | This kun reading is difficult. | くん | N3 L5 T4 C2 I2 — generic sentence, many words could fill the blank |  |  |
| inspection | 毎朝会社で検査があります。 | There is an inspection at the company every morning. | けんさ | N3 L5 T4 C2 I3 — Slightly odd context; blank could be filled by 会議, 朝礼, etc. |  |  |
| construction | この道の建設はとても難しいです。 | The construction of this road is very difficult. | けんせつ | N3 L5 T4 C2 I2 — 道の建設 sounds unnatural; 道路建設 or 工事 would be more idiomatic, and other words could fill the blank. |  |  |
| fire fighting | 兄は消防で働いています。 | My older brother works in fire fighting. | しょうぼう | N3 L5 T5 C2 I2 — 消防で働く is a bit odd; 消防署 or 消防士 more natural, and many other words could fill the blank. |  |  |
| fire fighting | 消防の車はまだ来ません。 | The fire truck hasn't come yet. | しょうぼう | N2 L5 T5 C2 I2 — 消防の車 sounds unnatural; native speakers usually say 消防車, and many nouns could fit the blank. |  |  |
| person of higher status | 彼は目上だから、失礼な言葉を使いません。 | Since he is my superior, he never uses rude words. | めうえ | N2 L4 T2 C3 I2 — Logic is off—being a superior doesn't inherently prevent rudeness; usually it's the reverse (being polite to superiors). |  |  |
| friend (formal) | その友人はまだ電話をくれません。 | That friend still hasn't called me. | ゆうじん | N3 L4 T4 C2 I2 — Slightly stiff mixing formal 友人 with casual くれません; 友達 also fits the blank equally well. |  |  |
| bride | 息子の嫁はとても優しい人です。 | My son's bride is a very kind person. | よめ | N5 L5 T3 C4 I3 — 嫁 here means 'daughter-in-law', not 'bride'; translation is misleading. |  |  |
| bride | 嫁はもうすぐ会社に着きます。 | The bride will arrive at the company soon. | よめ | N4 L5 T2 C2 I2 — 嫁 colloquially means 'wife' here, not 'bride'; many other nouns (社員, 彼女, 部長) could fill the blank, making it hard to recover. |  |  |
| bride | 嫁に手紙を書いてください。 | Please write a letter to the bride. | よめ | N4 L5 T2 C1 I2 — Ambiguous meaning (wife/daughter-in-law) mistranslated as 'bride'; context too generic, many nouns fit the blank. |  |  |
| thoroughness | 毎朝、出かける準備を徹底しています。 | Every morning, I'm thorough with my preparations before going out. | てってい | N3 L4 T4 C3 I3 — 徹底 with 準備 is a slightly unusual collocation; other words could plausibly fit. |  |  |
| thoroughness | 日曜日は洗濯を徹底しませんか。 | Shall we be thorough about doing laundry on Sunday? | てってい | N2 L3 T3 C2 I2 — 徹底しませんか as an invitation for laundry sounds unnatural and forced. |  |  |
| identical | この店の野菜は同様に新鮮です。 | This store's vegetables are equally fresh. | どうよう | N2 L3 T3 C2 I2 — 同様に without a clear comparison target feels awkward; many adverbs could fill the blank. |  |  |
| identical | 毎朝の運動は昨日と同様にしますか。 | Do you do your morning exercise the same as yesterday? | どうよう | N3 L3 T4 C3 I3 — Slightly unnatural to compare daily routine to 'yesterday' specifically, but grammar and blank context are workable. |  |  |
| characteristic | 彼の病気には珍しい特徴があります。 | His illness has an unusual characteristic. | とくちょう | N3 L5 T5 C2 I3 — other nouns like 症状 or 病気 could fit the blank |  |  |
| peculiarity | 彼の症状には独特の痛みがあるようです。 | His symptoms seem to have a peculiar pain. | どくとく | N3 L4 T4 C3 I3 — Slightly unnatural phrasing; several synonyms (特有, 特殊) could also fill the blank. |  |  |
| outrageous | その薬を飲むなんてとんでもないです。 | Taking that kind of medicine is outrageous. | とんでもない | N3 L5 T4 C3 I2 — Slightly odd context—unclear why taking medicine would be 'outrageous'; other words like 危険/無理 could also fit. |  |  |
| being skilled in | 彼は毎朝早く起きる能があります。 | He has the ability to wake up early every morning. | のう | N2 L3 T4 C2 I2 — 「能がある」is archaic/unnatural phrasing; modern Japanese would use 能力 or できる, so blank could be filled by many words. |  |  |
| being skilled in | 彼女は絵を描く能があります。 | She has the skill to draw pictures. | のう | N2 L3 T4 C2 I2 — Same unnatural 能がある construction; ambiguous cloze answer (能力, 才能, etc. also fit). |  |  |
| being skilled in | 彼は病気を治す能がある医者です。 | He is a doctor who has the skill to cure illness. | のう | N2 L3 T4 C2 I2 — Unnatural use of 能がある; a native speaker would more likely say 能力 or 腕. |  |  |
| one by one | 一人一人は元気ですか。 | Is each person doing well? | ひとりひとり | N2 L4 T3 C2 I2 — Awkward phrasing; natives rarely use 一人一人は as a subject like this, and other words like みんな could fit. |  |  |
| plus | 五にプラス三を足すといくつですか。 | What do you get when you add plus three to five? | ぷらす | N2 L4 T3 C3 I2 — Redundant phrasing—'プラス〜を足す' duplicates the meaning of 足す, sounds unnatural. |  |  |
| minus | 体重がマイナス二キログラムになりました。 | My weight decreased by two kilograms. | まいなす | N3 L5 T4 C4 I3 — Slightly unnatural phrasing; more natural would be 体重が2キロ減りました. |  |  |
| any time | 母はいつでも忙しいです。 | My mother is busy all the time. | いつでも | N2 L5 T3 C2 I2 — いつでも is odd here; いつも would be the natural word for 'always busy', making the blank ambiguous and the sentence unnatural. |  |  |
| since | 入学以来、ずっと同じ学校です。 | I've been at the same school ever since entering. | いらい | N3 L4 T4 C4 I2 — 「同じ学校です」がやや不自然、「同じ学校に通っています」の方が自然。 |  |  |
| postponement | 友達のパーティーは雨で延期になりました。 | My friend's party was postponed due to rain. | えんき | N2 L5 T5 C5 I4 — Reading for パーティー is wrong: written as ぱあてぃい instead of ぱーてぃー. |  |  |
| savings | 旅行のためにお金を貯金したいです。 | I want to save money for the trip. | ちょきん | N3 L5 T5 C3 I3 — お金を貯金する is slightly redundant since 貯金 already implies money; blank could also be 貯める/使う. |  |  |
| to rank next to | 彼はチームで一番に次ぐ選手でした。 | He was the player ranking next to the best on the team. | つぐ | N3 L4 T4 C4 I3 — 「一番に次ぐ」is a slightly awkward phrasing; more natural would be 次点の選手 or 二番目に優れた選手. |  |  |
| namely | 明日は休みです。つまり、学校に行きません。 | Tomorrow is a day off. In other words, I won't go to school. | つまり | N3 L5 T3 C3 I2 — つまり implies restating the same fact, but here the relation is causal (holiday→no school), so だから would fit as naturally, weakening cloze uniqueness. |  |  |
| namely | 彼女は毎日遅く寝ます。つまり、いつも眠いです。 | She goes to bed late every day. In other words, she's always sleepy. | つまり | N3 L5 T3 C3 I2 — Same issue: causal link (late sleep→sleepy) suits だから better than つまり, reducing naturalness and cloze precision. |  |  |
| to run along | その道は海に沿っていません。 | That road does not run along the sea. | そっていません | N3 L4 T5 C3 I2 — Negative form is less natural as a standalone example; slightly awkward phrasing. |  |  |
| to run along | この道は駅に沿っていますか。 | Does this road run along the station? | そっています | N2 L4 T3 C2 I2 — Semantically odd: 沿う is used for linear features like rivers/coasts, not point locations like a station, making both the Japanese and English translation unnatural. |  |  |
| to accompany | 彼はいつも妻に添って旅行します。 | He always travels accompanying his wife. | そって | N3 L4 T4 C3 I2 — 添う used with 旅行 is a bit unusual; 一緒に旅行 would be more natural. |  |  |
| to accompany | 忙しくて、彼女に添うことができなかった。 | Since I was busy, I couldn't stay by her side. | そう | N3 L3 T4 C3 I3 — 添う for 'stay by her side' is slightly less common than 付き添う, making it a bit unnatural. |  |  |
| to look out on | 準備不足で試験に臨みませんでした。 | Due to lack of preparation, I did not face the exam. | のぞみませんでした | N2 L4 T4 C3 I2 — Unnatural: skipping an exam due to lack of preparation doesn't fit 臨む's meaning well; 受けませんでした would be more natural. |  |  |
| field | 電車の窓から広い野が見えました。 | I could see a wide field from the train window. | の | N2 L3 T5 C4 I2 — 野 alone (rather than 野原) sounds archaic/unnatural for 'field' in modern Japanese. |  |  |
| field | 子供たちは野で楽しそうに遊びました。 | The children played happily in the field. | の | N2 L3 T5 C4 I3 — Standalone 野 is unnatural; 野原 would be more typical. |  |  |
| field | 野には花が咲いていますか。 | Are flowers blooming in the field? | の | N2 L3 T5 C4 I2 — Standalone 野 sounds literary/unnatural for everyday speech. |  |  |
| dew | 朝、草の上に露がありました。 | This morning, there was dew on the grass. | つゆ | N3 L5 T5 C2 I2 — 露がありました is a bit unnatural; 露が降りました/おりました is the natural collocation, and the blank could be many things (water, bugs, etc.). |  |  |
| passable | 出席は可としてください。 | Please mark the attendance as passable. | か | N3 L5 T4 C3 I2 — Slightly unnatural phrasing; 'mark as passable' context is uncommon and other words could fit. |  |  |
| certainty | 確実な方法を教えてください。 | Please tell me a certain method. | かくじつ | N4 L5 T3 C2 I2 — Translation 'certain method' is awkward; should be 'reliable/sure method'; many adjectives could fill the blank. |  |  |
| wise | 彼女は賢い返事をしました。 | She gave a wise answer. | かしこい | N3 L5 T5 C2 I3 — 賢い返事 is a bit unusual collocation; other adjectives could fit the blank. |  |  |
| wise | もっと賢く考えてください。 | Please think more wisely. | かしこく | N3 L5 T5 C2 I3 — 賢く考える is uncommon phrasing; よく or 慎重に would also fit the blank. |  |  |
| possible | できるだけ早く可能にしてください。 | Please make it possible as soon as you can. | かのう | N2 L4 T3 C3 I2 — 可能にしてください is awkward; native speakers would more likely say 早くしてください or 早めに対応してください. |  |  |
| masses | 彼は衆の前で話します。 | He speaks in front of the crowd. | しゅう | N2 L3 T4 C2 I2 — 衆 alone is archaic/unnatural here; modern Japanese would use 皆の前で or 聴衆の前で, and many words could fill the blank. |  |  |
| masses | その意見は衆の考えとは違いました。 | That opinion differed from the view of the masses. | しゅう | N2 L3 T4 C2 I2 — 衆 alone sounds stilted; 世間 or 大衆 would be more natural, reducing uniqueness of the blank. |  |  |
| Ms. | 会議で女史に会いました。 | I met Ms. at the meeting. | じょし | N2 L3 T2 C1 I2 — 女史 is normally a suffix attached to a name (e.g., 〜女史), not used standalone as 'a Ms.'; many other nouns could fill the blank, and the English gloss 'Ms.' alone is unnatural. |  |  |
| Ms. | 女史に質問してください。 | Please ask Ms. a question. | じょし | N2 L3 T2 C1 I2 — Same issue: 女史 used standalone without an attached name is unnatural, and the blank could be filled by many other nouns (先生, 彼女, 部長, etc.). |  |  |
| full name | 姓名は名前と同じ意味です。 | "Seimei" has the same meaning as "name." | せいめい | N3 L5 T4 C4 I4 — Slightly stiff as a spoken sentence but works well as a definitional cloze forcing 姓名 or 氏名. |  |  |
| party | 登山の隊は五人でした。 | The climbing party was five people. | たい | N3 L5 T5 C2 I2 — 隊 could be replaced by チーム/グループ/人数, weak cloze cue; '登山の隊' is slightly unnatural phrasing (usually 登山隊). |  |  |
| musical performance | 今日はギターを演奏しませんでした。 | I didn't play the guitar today. | えんそうしません | N2 L5 T5 C3 I3 — reading kana for ギター is written as ぎたあ instead of ぎたー, capping naturalness |  |  |
| to stop (advanced) | 先生はいつも学生の肩を押えますか。 | Does the teacher always press down on the student's shoulder? | おさえます | N2 L5 T4 C2 I2 — Scenario is odd/unnatural for a teacher-student context, and many verbs (もむ, たたく) could fill the blank. |  |  |
| to store to pay | 学生はお金を学校に収めました。 | The student paid money to the school. | おさめました | N3 L5 T4 C2 I2 — 収める for paying is unusual with plain 'お金'; 授業料/学費 would be more natural, and 払う fits the blank just as well, hurting recoverability. |  |  |
| to send back | 友達が遅くまで遊んでいたので、早く家に帰しました。 | Since my friend was playing until late, I sent them home early. | かえしました | N2 L4 T3 C2 I3 — Missing を after 友達, making it unclear who is sent home; grammatically awkward as written. |  |  |
| whole | 全体の意見を聞きたいです。 | I want to hear everyone's opinion overall. | ぜんたい | N3 L5 T4 C3 I3 — みんなの意見 would sound more natural than 全体の意見. |  |  |
| increase | 病気が増加しているから、心配です。 | Since illnesses are increasing, I'm worried. | ぞうか | N3 L4 T5 C3 I3 — 増加 with 病気 is a bit unnatural; usually 患者数 or 件数 increases, not illness itself. |  |  |
| increase | 来月から給料が増加するそうです。 | I heard that salaries will increase starting next month. | ぞうかする | N3 L4 T5 C3 I3 — 給料が増加する sounds stiff; 上がる/増える is more natural for salary. |  |  |
| cheese | このチーズは辛くて美味しいです。 | This cheese is spicy and delicious. | ちいず | N3 L5 T5 C2 I3 — Spicy cheese is an unusual combination, slightly odd; also many foods could fit the blank. |  |  |
| tea (advanced) | 朝は熱い茶を飲みます。 | I drink hot tea in the morning. | ちゃ | N3 L5 T5 C2 I2 — Native speakers usually say お茶 rather than bare 茶; blank could be filled by many drinks (コーヒー, 水, etc.). |  |  |
| tea (advanced) | 旅行先でおいしい茶を飲みました。 | I drank delicious tea at the travel destination. | ちゃ | N3 L5 T5 C2 I3 — お茶 more natural than 茶; many other drink words could fill the blank. |  |  |
| tea (advanced) | 疲れた時は茶が飲みたいです。 | When I'm tired, I want to drink tea. | ちゃ | N3 L5 T5 C2 I3 — Again お茶 is more idiomatic; context doesn't uniquely force 茶 over other beverages. |  |  |
| mold | 新しい機械の型を作りましたか。 | Did you make a mold for the new machine? | かた | N3 L5 T4 C2 I3 — Blank could plausibly be filled with 部品 or モデル as well. |  |  |
| processing | 宿題の処理がまだ終わっていません。 | The handling of the homework isn't finished yet. | しょり | N2 L5 T3 C2 I2 — 宿題の処理 sounds unnatural; native speakers would say 宿題を片付ける/終わらせる instead. |  |  |
| faith | 家族が信仰していますから、私も教会へ行きます。 | Since my family has faith, I also go to church. | しんこう | N3 L4 T4 C3 I3 — Lacking an explicit object after 信仰 makes it slightly less natural and reduces cloze uniqueness. |  |  |
| (human) life (e.g., conception to death) | 簡単な人生はありません。 | There is no easy life. | じんせい | N3 L5 T5 C3 I3 — Slightly stiff phrasing; blank could also be filled by 仕事 or 生活. |  |  |
| improvement | 毎日頑張りますから、進歩します。 | I do my best every day, so I improve. | しんぽ | N3 L4 T4 C2 I2 — Slightly unnatural phrasing and missing clear subject; blank could be filled by several similar words like 上達 or 成長. |  |  |
| blood vessel | 医者は血管の写真を撮りました。 | The doctor took a picture of the blood vessel. | けっかん | N3 L5 T4 C2 I2 — '血管の写真' is unnatural phrasing; many nouns could fill the blank (レントゲン, 患部, etc.). |  |  |
| blood vessel | 血管が痛かったら教えてください。 | Please tell me if your blood vessel hurts. | けっかん | N2 L5 T4 C2 I2 — Saying a blood vessel itself 'hurts' is unnatural; many body parts could fill the blank. |  |  |
| fixed term | 毎月、会社で定期の会議があります。 | There is a regular meeting at the company every month. | ていき | N3 L5 T4 C2 I2 — 定例会議 would be more natural than 定期の会議; blank could be filled by many other adjectival nouns. |  |  |
| to fear | 昔、暗い道を恐れていました。 | I used to be afraid of dark roads. | おそれて | N3 L5 T5 C3 I3 — Slightly literary use of 恐れる for dark roads; 怖がる would be more natural colloquially. |  |  |
| to come off | このテープは簡単に取れます。 | This tape comes off easily. | とれます | N2 L5 T5 C3 I2 — Reading for テープ should be てーぷ (long vowel), not てえぷ. |  |  |
| to drain | 汗を流してから、シャワーを浴びます。 | After washing off my sweat, I take a shower. | ながして | N2 L5 T5 C4 I4 — Reading kana for シャワー is written incorrectly as しゃわあ instead of proper katakana/long vowel mark, capping naturalness. |  |  |
| ornamentation | 彼女はケーキを花で修飾しました。 | She decorated the cake with flowers. | しゅうしょく | N2 L3 T2 C2 I3 — 修飾 is not natural for 'decorate'; 装飾/飾り付け would be used for cakes/walls, so this misuses the word and the blank could plausibly be filled with 装飾 or other words. |  |  |
| ornamentation | この文には修飾がたくさんあります。 | This sentence has a lot of ornamentation. | しゅうしょく | N4 L3 T2 C4 I2 — This is the correct grammatical usage of 修飾 (as in 'modifier'), but translating it as 'ornamentation' is misleading; it should be 'modification/modifier' in a linguistic sense. |  |  |
| ornamentation | 壁を絵で修飾するつもりです。 | I intend to decorate the wall with pictures. | しゅうしょくする | N2 L3 T2 C2 I2 — Same issue as sentence 0: 修飾する is not the natural verb for decorating a wall with pictures; 装飾する is standard, making the blank ambiguous. |  |  |
| personal use | この紙を私用に使ってはいけません。 | You must not use this paper for personal use. | しよう | N3 L5 T4 C3 I3 — 私用に使う is slightly less natural than 私用で使う; other words could also fit the blank. |  |  |
| shock | 彼が遅刻したのでみんなショックを受けました。 | Everyone was shocked because he was late. | しょっく | N3 L5 T5 C3 I3 — Being late causing 'shock' is a slightly odd context; other emotion words could arguably fit less naturally but weakens cloze certainty somewhat. |  |  |
| shock | その知らせは大きいショックでした。 | That news was a big shock. | しょっく | N2 L5 T4 C4 I2 — '大きいショック' is grammatically off; native speakers would say 大きなショック, which affects naturalness. |  |  |
| advance | 料理の進行を確認してください。 | Please check the progress of the cooking. | しんこう | N2 L5 T4 C2 I2 — 料理の進行 is an unnatural collocation; 準備 or 状況 would be more natural. |  |  |
| standpoint | 会社での立場をよくしたいです。 | I want to improve my standpoint at the company. | たちば | N3 L5 T4 C3 I3 — Slightly stiff phrasing; 地位 or 評価 could also fit the blank. |  |  |
| trial | 新しいスポーツを試しにしてみました。 | I tried a new sport as a trial. | ためし | N2 L4 T3 C4 I2 — 「スポーツを試しにしてみました」is awkward; should be「試しにやってみました」or「試してみました」. |  |  |
| wisdom | おばあさんの知恵を聞きました。 | I heard my grandmother's wisdom. | ちえ | N2 L5 T4 C2 I2 — 知恵を聞く is unnatural phrasing; 知恵を借りる/授かる would be more natural, and many nouns fit 'を聞きました'. |  |  |
| knowledge | 先生はコンピュータの知識が多いです。 | The teacher has a lot of knowledge about computers. | ちしき | N3 L5 T5 C4 I2 — 知識が多い is a bit unnatural; 知識が豊富 or 知識がある is more common. |  |  |
| knowledge | 料理の知識をもっと知りたいです。 | I want to gain more knowledge about cooking. | ちしき | N2 L5 T4 C3 I2 — 知識を知りたい is redundant/awkward; 知識を得たい or 身につけたい would be more natural. |  |  |
| numeral | この番号の数字を教えてください。 | Please tell me the numerals in this number. | すうじ | N3 L5 T4 C3 I2 — slightly redundant phrasing (‘numerals of this number’) |  |  |
| a species | あれは風邪の一種ですか。 | Is that a kind of cold? | いっしゅ | N3 L5 T5 C3 I3 — Slightly unusual phrasing but understandable; synonym 種類 also plausible in blank. |  |  |
| one object | 電話で人形が一体届くと聞きました。 | I heard on the phone that one doll will arrive. | いったい | N2 L5 T4 C3 I2 — Awkward combination of 'heard on the phone' with doll count; unnatural context. |  |  |
| amount of money | 友達に貸したお金の金額を忘れました。 | I forgot the amount of money I lent to my friend. | きんがく | N3 L5 T5 C3 I3 — slightly redundant phrasing 'お金の金額' |  |  |
| sum total | 電話で合計を伝えます。 | I will tell the total over the phone. | ごうけい | N3 L5 T5 C2 I2 — Many nouns (番号, 住所, 名前) could fill the blank. |  |  |
| yearbook | 昨日、図書館でスポーツの年鑑を読みました。 | Yesterday I read a sports yearbook at the library. | ねんかん | N2 L5 T5 C3 I3 — Reading kana renders スポーツ as すぽうつ instead of すぽーつ, a mismatch that caps naturalness. |  |  |
| in advance | 友達が来る前に、前もって部屋を片付けました。 | Before my friend came, I tidied the room in advance. | まえもって | N3 L5 T5 C3 I3 — slightly redundant with 前に + 前もって |  |  |
| in advance | 旅行に行く前に、前もって計画を立てたいです。 | Before going on the trip, I want to plan in advance. | まえもって | N3 L5 T5 C3 I3 — redundant with 前に + 前もって, slightly unnatural phrasing |  |  |
| cloth | 朝、古い切れで窓を拭きました。 | This morning, I wiped the window with an old piece of cloth. | きれ | N3 L5 T5 C2 I3 — 多くの名詞（布、雑巾など）が当てはまるため空欄の一意性が低い |  |  |
| cloth | 赤い切れでカーテンを作りたいです。 | I want to make curtains with red cloth. | きれ | N3 L5 T5 C2 I2 — 布、生地など他の語でも成立するため答えが一意でない |  |  |
| cloth | この切れは薄くて弱いです。 | This piece of cloth is thin and weak. | きれ | N3 L5 T5 C2 I2 — 紙や布など他の語でも文が成立するため空欄の特定が難しい |  |  |
| chain | 犬は鎖で門に掛けてあります。 | The dog is chained to the gate. | くさり | N2 L4 T3 C3 I3 — 掛けてある is unnatural for chaining a dog; should be つないである or 繋がれている. |  |  |
| aviation | 天気が悪くて、飛行が心配です。 | I'm worried about the flight because the weather is bad. | ひこう | N3 L5 T4 C3 I3 — 飛行が心配 sounds a bit stiff; フライト or 飛行機 more natural. |  |  |
| to be popular | この歌は家族の間で流行っています。 | This song is popular among my family. | はやって | N3 L5 T5 C4 I2 — '家族の間で流行る' is a bit unusual since 流行る typically describes trends among larger groups, not one's family. |  |  |
| opposition | 子供が学校に行くのに反抗して、遅れてしまいました。 | My child resisted going to school, and we ended up being late. | はんこうして | N2 L3 T4 C4 I3 — 「行くのに反抗して」is grammatically awkward; more natural would be「行くのを嫌がって」or「行くことに反抗して」. |  |  |
| crime | 急いでいたので、犯罪のニュースを見る時間がありませんでした。 | I was in a hurry, so I didn't have time to watch the crime news. | はんざい | N3 L5 T5 C2 I3 — 犯罪のニュース is a bit unnatural (事件のニュース more common) and many other nouns could fill the blank, weakening cloze recoverability. |  |  |
| reflection | 失敗した料理について、反省してください。 | Please reflect on the dish that failed. | はんせい | N3 L5 T4 C4 I3 — Slightly unusual phrasing—reflecting on a dish is an odd context. |  |  |
| damage | 火事の被害はそれほど大きくなかったです。 | The damage from the kitchen fire wasn't that great. | ひがい | N5 L5 T3 C4 I3 — EN adds 'kitchen' which isn't in the Japanese sentence |  |  |
| to succeed (someone in a business or | 父が忙しいから、息子が店を継ぎます。 | Because my father is busy, my son will succeed the shop. | つぎます | N3 L5 T4 C3 I3 — 忙しいから is a strange reason to justify succession; 継ぐ implies retirement/family trade, not busyness. |  |  |
| to succeed (someone in a business or | 妹はレストランの仕事を継ぎません。 | My younger sister will not take over the restaurant business. | つぎません | N3 L5 T4 C3 I3 — レストランの仕事を継ぐ is slightly unnatural phrasing; usually 店を継ぐ or 家業を継ぐ is used. |  |  |
| to succeed (someone in a business or | 課長、この仕事を継いでください。 | Section chief, please take over this job. | ついで | N2 L5 T2 C3 I2 — 継ぐ doesn't fit asking a boss to take over a task; 引き継ぐ or 代わる would be more natural here. |  |  |
| to pluck | 庭で野菜を摘みます。 | I pick vegetables in the garden. | つみます | N3 L5 T4 C3 I2 — 摘む is typically used for flowers/tea leaves, not vegetables; sounds slightly unnatural. |  |  |
| to strengthen | 会社は安全の規則を強めました。 | The company strengthened the safety rules. | つよめました | N3 L5 T5 C2 I3 — 強化する is more natural for rules; many verbs (厳しくする, 強化する) could fill the blank. |  |  |
| to bind | 私は書類を紙で綴じます。 | I bind the documents with paper. | とじます | N2 L5 T4 C2 I2 — 紙で綴じる is unnatural phrasing; usually bound with ホチキス or 糸, not just 紙. |  |  |
| to accustom | 電車の音に耳を慣らしましたか。 | Have you gotten your ears used to the train sound? | ならしました | N3 L5 T5 C4 I3 — 耳を慣らす is a slightly less common collocation but still understandable. |  |  |
| dwelling | この町で住を探すのは難しいです。 | It's difficult to find housing in this town. | じゅう | N1 L3 T3 C1 I2 — 住 alone is not a natural standalone word in Japanese (usually 住居/住宅/住まい); many nouns could fill the blank. |  |  |
| dwelling | 休みの日までに新しい住を決めてください。 | Please decide on your new dwelling by your day off. | じゅう | N1 L3 T3 C1 I2 — 住 as a standalone noun is unnatural; should be 住居/住まい, making the blank guessable with many alternatives. |  |  |
| dwelling | 急いでいたので、住はまだ決めていません。 | I was in a hurry, so I still haven't decided on housing. | じゅう | N1 L3 T3 C1 I2 — 住 alone sounds odd; native speakers would use 住居/住まい/家, so the cloze blank is not uniquely recoverable. |  |  |
| perfection | この問題の答えは完全ですか。 | Is the answer to this problem complete? | かんぜん | N3 L4 T4 C3 I2 — 完璧 would be more natural for 'perfect answer' but 完全 is acceptable. |  |  |
| pitiful | 病気の弟が気の毒です。 | My sick younger brother is pitiful. | きのどく | N3 L5 T3 C3 I2 — Slightly generic; 'pitiful' translation slightly off tone, and blank could be filled by かわいそう too. |  |  |
| deadline | レポートの期限は明日までです。 | The report deadline is until tomorrow. | きげん | N2 L5 T4 C4 I2 — Reading kana for レポート is incorrect (should be れぽーと, not れぽおと), so naturalness capped. |  |  |
| commonness | あなたと私は電車で通勤するという共通の点がありますか。 | Do you and I have a common point in that we commute by train? | きょうつう | N3 L4 T4 C4 I3 — 共通点 is usually one compound word; '共通の点' sounds stiff. |  |  |
| commonness | 二人とも野菜が好きだから、買い物に共通の趣味がある。 | Since we both like vegetables, we have a common interest in shopping. | きょうつう | N2 L4 T3 C3 I2 — Logic is confusing: liking vegetables doesn't naturally connect to a shared interest in shopping. |  |  |
| cooperation | この仕事を共同でしませんか。 | Shall we do this work together? | きょうどう | N3 L5 T5 C3 I3 — '一緒に' would fit as naturally as '共同で', reducing recoverability. |  |  |
| to hate | 苦い薬を嫌うから、子供は病院に行きたくない。 | Because he hates bitter medicine, the child doesn't want to go to the hospital. | きらう | N2 L3 T3 C3 I2 — Subject is ambiguous/inconsistent (translation says 'he' but Japanese says 子供), making the sentence logically confusing. |  |  |
| to hate | あなたは高い店を嫌いますか。 | Do you dislike expensive stores? | きらいます | N2 L4 T4 C3 I2 — 嫌いますか sounds unnatural; native speakers would typically say 嫌いですか instead. |  |  |
| birth | 祖父は苦しい生を送りました。 | My grandfather lived a difficult life. | せい | N3 L4 T4 C2 I3 — 生を送る is uncommon; 人生を送る is far more natural, and many words (人生, 生活, 一生) could fill the blank. |  |  |
| birth | 人の生は短いです。 | A person's life is short. | せい | N2 L3 T4 C2 I2 — 人の生 is unnatural; 人生 or 一生 would be expected, making the blank ambiguous. |  |  |
| sex | この病院では性による差別はありません。 | This hospital has no discrimination based on sex. | せい | N3 L4 T5 C2 I3 — 性 alone sounds slightly stiff; 性別 is far more common in this context, and many other nouns (人種, 年齢, 性別) could fill the blank. |  |  |
| sex | 書類に性を書いてください。 | Please write your sex on the document. | せい | N2 L4 T5 C2 I2 — On forms, 性別 is standard; 性 alone sounds unnatural here, and other words (名前, 年齢) could fit the blank. |  |  |
| sex | その動物の性はまだ分かりません。 | The sex of that animal is not yet known. | せい | N3 L4 T5 C2 I3 — 性別 would be more natural than 性 here; blank could also be filled with 種類 or 年齢. |  |  |
| to argue | 日曜日の計画について論じました。 | We discussed the Sunday plans. | ろんじました | N2 L3 T4 C2 I2 — 論じる is too formal/academic for casual 'Sunday plans'; 話す or 相談する would be more natural, weakening cloze recoverability. |  |  |
| to argue | 旅行について論じたいです。 | I want to discuss the trip. | ろんじたい | N2 L3 T4 C2 I2 — 論じる sounds overly formal for a casual trip discussion; other verbs like 話す fit equally well, hurting recoverability. |  |  |
| laugh | 彼女の笑いが聞こえました。 | I heard her laugh. | わらい | N3 L5 T5 C2 I2 — 笑い声 more natural than 笑い alone; many nouns could fill the blank (声, 音, 歌 etc.) |  |  |
| laugh | 日曜日のパーティーで笑いが多かったです。 | There was a lot of laughter at the Sunday party. | わらい | N2 L5 T4 C2 I2 — 「笑いが多かった」sounds unnatural; 笑い声が絶えなかった would be more idiomatic, and other nouns fit the blank too. |  |  |
| laugh | 朝から子供の笑いが聞こえます。 | I've been hearing children's laughter since morning. | わらい | N3 L5 T5 C2 I2 — Same issue as sentence 0: 笑い声 is more idiomatic, and blank is not tightly constrained. |  |  |
| objection | その計画に異はありませんでした。 | There were no objections to the plan. | い | N3 L3 T5 C2 I2 — 異 alone is less common than 異議/異存 in this construction, and many other nouns (反対, 意見, 問題) could fill the blank. |  |  |
| objection | 旅行の予定に異はありません。 | There are no objections to the travel plan. | い | N3 L3 T5 C2 I2 — Same generic template; multiple words could plausibly fill the blank, reducing recoverability. |  |  |
| objection | 朝の会議で異は出ませんでした。 | No objections came up at the morning meeting. | い | N3 L3 T5 C2 I2 — Natural but interchangeable with 反対 or 意見 in context, weakening cloze uniqueness. |  |  |
| appetite | 天気が暑いと食欲がなくなる。 | When the weather is hot, I lose my appetite. | しょくよく | N3 L5 T5 C5 I4 — 「天気が暑いと」is slightly awkward; more natural as 「暑くなると」or「夏になると」. |  |  |
| to be puzzled | 道に迷いましたので、交番で聞きました。 | I got lost on the way, so I asked at the police box. | まよいました | N2 L5 T5 C5 I3 — Reading uses incorrect old-style repetition mark 'きゝました' instead of 'ききました'. |  |  |
| by some chance | 万一病気になったら、病院へ行きます。 | If by some chance I get sick, I will go to the hospital. | まんいち | N3 L4 T5 C3 I2 — 万一 usually implies a rarer/more serious contingency than simply getting sick, making it a slightly odd fit. |  |  |
| miss | 時間を間違えるミスをしました。 | I made a mistake by getting the time wrong. | みす | N3 L5 T5 C4 I3 — Slightly redundant since 間違える already implies a mistake. |  |  |
| miss | 今回の旅行ではミスがありませんでした。 | There were no mistakes on this trip. | みす | N3 L5 T5 C2 I3 — ミス feels a bit odd for describing a trip; トラブル or 問題 could fit as well. |  |  |
| to recognize | 私の料理を認めてください。 | Please recognize my cooking. | みとめて | N2 L4 T4 C2 I2 — 認める is an unusual verb to use with 料理; 褒める or 気に入る would be more natural, weakening cloze uniqueness. |  |  |
| facing | 向かいに座ってください。 | Please sit facing me. | むかい | N4 L5 T3 C2 I2 — Translation adds 'me' not explicit in Japanese; blank could be filled by 前, 横, etc. |  |  |
| crossing | 危ないから、ここで横断しません。 | Because it's dangerous, I won't cross here. | おうだん | N3 L5 T5 C3 I3 — 渡る fits equally well, and 横断 sounds slightly more formal than natural everyday speech. |  |  |
| can | 缶のスープがありますか。 | Do you have canned soup? | かん | N2 L5 T5 C4 I3 — Reading kana incorrect: スープ should be すーぷ, not すうぷ. |  |  |
| can | 缶ビールを飲みませんか。 | Won't you have a canned beer? | かん | N2 L5 T5 C5 I3 — Reading kana incorrect: ビール should be びーる, not びいる. |  |  |
| engine | この機関は電車を動かします。 | This engine moves the train. | きかん | N3 L5 T4 C2 I2 — エンジン would be more natural/common here, so many words could fill the blank. |  |  |
| engine | あの列車の機関は新しいですか。 | Is the engine of that train new? | きかん | N3 L5 T4 C2 I2 — エンジン is more typical for trains; ambiguous which word is expected. |  |  |
| prediction | 先生が地震を予測しました。 | The teacher predicted the earthquake. | よそく | N3 L5 T5 C3 I3 — Odd that a teacher predicts an earthquake; a scientist would be more natural, and 予想 also fits. |  |  |
| to decrease (in size or number) | 急いでいたのでお腹が減りました。 | Since I was hurrying, I got hungry. | へりました | N2 L5 T4 C4 I3 — Illogical cause-effect: hurrying doesn't typically cause hunger, making the sentence feel odd. |  |  |
| attitude | 母は料理をしながら優しい態度で教えます。 | My mother teaches with a kind attitude while cooking. | たいど | N3 L5 T4 C3 I3 — 優しい態度で教える is a bit unnatural collocation; 口調 or 優しく could also fit the blank. |  |  |
| simplicity | この料理はとても単純です。 | This dish is very simple. | たんじゅん | N3 L5 T5 C2 I2 — 料理を単純と言うのはやや不自然で、簡単の方が普通；他の形容詞も文法的に当てはまる |  |  |
| angle | 先生が黒板に角を描きました。 | The teacher drew an angle on the blackboard. | かく | N3 L5 T4 C3 I2 — '描く角を描く' is a bit unnatural; angles are usually described with 角度 rather than drawn as 角 alone. |  |  |
| group | あの鳥の群はどこへ飛んで行きますか。 | Where is that flock of birds flying to? | ぐん | N2 L4 T4 C3 I3 — For a flock of birds, native speakers would normally say 群れ(むれ), not 群(ぐん); the ぐん reading sounds like a scientific/compound term, not natural standalone usage here. |  |  |
| group | 魚の群が多いから、写真を撮りましょう。 | There are many schools of fish, so let's take a photo. | ぐん | N2 L4 T4 C3 I3 — Same issue: 'school of fish' is normally 魚の群れ(むれ), so using 群(ぐん) as a standalone word sounds unnatural. |  |  |
| group | 学校で動物の群について習いました。 | I learned about animal groups at school. | ぐん | N3 L4 T4 C3 I3 — Slightly more acceptable since 群(ぐん) can appear in academic/biological contexts like 動物の群, but 群れ would still be more common in casual speech. |  |  |
| each | 学生はそれぞれ好きな科目を選んでください。 | Please have each student choose their favorite subject. | それぞれ | N4 L5 T3 C4 I3 — English implies a teacher instructing someone else rather than addressing students directly, slightly mistranslating the nuance. |  |  |
| each | 友達が来たから、それぞれ話しましょう。 | Since our friend came, let's each talk. | それぞれ | N2 L5 T3 C2 I2 — それぞれ feels forced here; words like そろそろ or ゆっくり would fit the blank just as well, and the sentence sounds unnatural. |  |  |
| pair | この花瓶は対で買いますか。 | Do you buy this vase as a pair? | つい | N4 L4 T3 C3 I3 — English translation slightly off tense; 対 vs ペア could both fit blank, lowering recoverability. |  |  |
| pair | 靴下の対をなくしたから、新しいのを買います。 | I lost one of the pair of socks, so I'll buy new ones. | つい | N2 L4 T2 C2 I3 — 対 doesn't naturally mean 'one of a pair' as implied; 片方 would be more natural, causing translation mismatch. |  |  |
| pair | 友達が来る前に、対の椅子を並べましょう。 | Let's line up the pair of chairs before our friend comes. | つい | N3 L4 T4 C3 I3 — 対の椅子 is a bit unusual phrasing; ペア could also fit the blank. |  |  |
| most of | 家族の大半は朝早く起きるから、静かです。 | Because most of my family wakes up early, it's quiet. | たいはん | N3 L5 T4 C3 I2 — Logical link between family waking early and quietness is weak; blank also fits ほとんど/一部. |  |  |
| thick | 家族との関係はとても密です。 | My relationship with my family is very close. | みつ | N2 L5 T4 C2 I2 — 密 alone sounds unnatural for describing a close relationship; native speakers would usually say 親密な関係です, so many other words could fill the blank. |  |  |
| free | タクシーの電話は無料ではありませんでした。 | The taxi phone call wasn't free. | むりょう | N2 L5 T5 C4 I3 — Reading kana for タクシー is incorrectly written as たくしい instead of たくしー, capping naturalness. |  |  |
| clear | 時間の予定を明確にしてください。 | Please make the time schedule clear. | めいかく | N3 L5 T5 C4 I3 — 時間の予定 is a bit awkward; usually just 予定 or スケジュール is used. |  |  |
| organization | その組織は小さいから、有名じゃありません。 | That organization is small, so it's not famous. | そしき | N3 L4 T4 C3 I3 — Logic linking size to fame feels slightly forced; blank could fit other nouns like 会社 or 店. |  |  |
| position | 彼女はどんな地位ですか。 | What kind of position does she hold? | ちい | N3 L5 T4 C2 I2 — 抽象的で他の名詞にも置き換え可能なため空欄回答が絞りにくい |  |  |
| to bet | 今度は大きいお金を賭けたいです。 | Next time I want to bet a lot of money. | かけたい | N3 L5 T5 C3 I3 — 大きいお金 is a bit unnatural; 大金 or 大きなお金 more idiomatic. Blank could also fit 使う/出す. |  |  |
| collecting | 子供の頃、切手の採集をしましたか。 | Did you collect stamps as a child? | さいしゅう | N2 L5 T4 C3 I3 — 切手の収集/収集が一般的で、採集は不自然（採集は虫や植物などの採取に使う）。 |  |  |
| property | おじいさんは大きい財産を残しました。 | My grandfather left behind a large fortune. | ざいさん | N3 L5 T5 C4 I3 — 大きい財産 is slightly unnatural; 大きな財産 is more common. |  |  |
| helping | 食堂の昼御飯は盛りがとても多いです。 | The cafeteria's lunch portions are very large. | さかり | N2 L4 T4 C3 I3 — Reading should be もり, not さかり (さかり means 'peak/prime', not 'helping/portion'); this caps naturalness. |  |  |
| helping | 昨日の晩御飯は盛りが少なかったです。 | Yesterday's dinner portion was small. | さかり | N2 L4 T4 C3 I3 — Reading should be もり, not さかり; さかり is a different word meaning 'peak/prime'. |  |  |
| helping | あの店の盛りは多いですか。 | Are the portions at that restaurant big? | さかり | N2 L4 T4 C3 I3 — Reading should be もり, not さかり; also phrasing 'あの店の盛りは' is slightly unnatural compared to 'あの店は盛りが多いですか'. |  |  |
| composition | 今度の日曜日に音楽を作曲したいです。 | I want to compose music this coming Sunday. | さっきょく | N3 L4 T4 C2 I2 — Blank could be filled by many verbs like 聞き, 演奏 etc., reducing recoverability. |  |  |
| well | さて、電車の時間に遅れそうです。 | Well, it seems I'll be late for the train. | さて | N2 L4 T3 C2 I2 — さて doesn't naturally fit before a negative/urgent statement like this; unnatural usage. |  |  |
| to explain | 部長は会議で新しい考えを説きますか。 | Does the manager explain his new idea at the meeting? | ときます | N3 L5 T4 C3 I3 — 説く sounds slightly formal/literary for a business meeting context; 説明する would be more natural. |  |  |
| to consult with | 病院は新しい計画を医者に諮る必要があります。 | The hospital needs to consult the doctors about the new plan. | はかる | N3 L4 T4 C4 I3 — Slightly unnatural phrasing; usually 病院側が医師に諮る. |  |  |
| to plot | 会社は仕事の改善を図ることにしました。 | The company decided to aim for improvement in the work. | はかる | N4 L3 T3 C3 I2 — Translation slightly loose ('aim for' vs 'plan/work toward'); other verbs like 進める/目指す could also fit the blank. |  |  |
| youth | 会社に新しい青年が入りました。 | A new young man joined the company. | せいねん | N3 L5 T4 C2 I2 — 青年が入りました is a bit unnatural; 新入社員 or 若者 would be more common, and many words could fill the blank. |  |  |
| youth | あの青年に天気を聞いてください。 | Please ask that young man about the weather. | せいねん | N2 L5 T4 C2 I2 — Asking a young man specifically about the weather is odd context; many nouns could fit the blank. |  |  |
| partner | 相手は何駅で降りますか。 | What station is your companion getting off at? | あいて | N3 L5 T4 C2 I2 — Sentence lacks context to uniquely identify 相手; pronouns like 彼/彼女 could fit equally well. |  |  |
| cousin (male) | 私の従兄弟は大学で医学を習っています。 | My cousin is studying medicine at university. | いとこ | N3 L5 T5 C2 I3 — 医学を習う is slightly unnatural; 勉強する/学ぶ would be more common. Also many other nouns (friend, brother, teacher) could fill the blank. |  |  |
| cousin (female) | 従姉妹に手紙を書いてください。 | Please write a letter to my cousin. | いとこ | N4 L5 T3 C2 I2 — English adds 'my' which isn't in the Japanese, and the blank could be filled by many nouns (friend, teacher, etc.). |  |  |
| association (of ideas) | このカレーの匂いで、母の料理を連想します。 | This curry's smell reminds me of my mother's cooking. | れんそう | N2 L5 T5 C3 I4 — Reading kana 'かれえ' is inconsistent with standard katakana-to-hiragana rendering (should be かれー); also 思い出す could fit the blank. |  |  |
| controversy | 急いでいる時に論争しないでください。 | Please don't argue when we're in a hurry. | ろんそう | N2 L4 T3 C2 I2 — 論争 implies formal/serious debate, not casual arguing when rushed; 喧嘩 or 口論 fits better, making the blank guessable with many words. |  |  |
| controversy | 二人は道について論争しています。 | The two of them are arguing about which way to go. | ろんそう | N2 L4 T3 C2 I2 — 論争 is too heavy a word for disagreeing about which way to go; 言い争う or 揉める would be more natural, weakening cloze uniqueness. |  |  |
| parting | 別れを言うのは簡単じゃありません。 | Saying goodbye isn't easy. | わかれ | N3 L5 T5 C3 I3 — 別れを言う is a bit unnatural; さようならを言う or 別れを告げる is more common, and other words could fill the blank. |  |  |
| parting | 電車が来るので、早く別れを言ってください。 | The train is coming, so please say your goodbye quickly. | わかれ | N2 L5 T4 C3 I3 — 別れを言う sounds unnatural in this context; more idiomatic would be 別れの挨拶をする or お別れを言う. |  |  |
| hit | 今日の天気予報の当りはよくないです。 | Today's weather forecast accuracy isn't good. | あたり | N2 L3 T3 C2 I2 — Unnatural phrasing; native speakers would say 天気予報が当たらない rather than 天気予報の当り, and many other nouns could fill the blank. |  |  |
| seat | 友達が来ましたから、座席を用意しました。 | Since my friend came, I prepared a seat. | ざせき | N3 L5 T4 C2 I2 — Context is a bit odd; many words could fill the blank (椅子, 部屋, etc.). |  |  |
| (name) card | 電話をする前に、名刺を渡しました。 | Before making the call, I handed over my business card. | めいし | N3 L5 T4 C3 I3 — Slightly odd context linking phone call to handing over a business card. |  |  |
| container | 料理を入れますから、容器を出しました。 | Since I'll put the food in, I got out a container. | ようき | N3 L5 T5 C4 I3 — Slight tense mismatch between 入れます (present) and 出しました (past) feels a bit awkward. |  |  |
| completion | 急いでいましたが、仕事は完了しました。 | I was in a hurry, but the work is complete. | かんりょう | N3 L4 T4 C3 I3 — The connection between hurrying and completion is a bit unnatural/illogical, weakening context clues. |  |  |
| memory | 子供の時の旅行の記憶を思い出しました。 | I remembered the memory of a childhood trip. | きおく | N3 L5 T4 C4 I3 — 思い出す already implies memory, slightly redundant phrasing |  |  |
| to be effective | 急いでいる時、このコーヒーが効きます。 | When I'm in a hurry, this coffee is effective. | ききます | N3 L5 T4 C2 I3 — Context (being in a hurry) doesn't clearly imply effectiveness, so other words could fill the blank. |  |  |
| hope | 明日は晴れることを希望します。 | I hope that it will be sunny tomorrow. | きぼうします | N3 L4 T5 C3 I3 — sounds slightly formal/stiff for casual speech; 期待する/願う could also fit |  |  |
| varied | 様々な野菜を切ってください。 | Please cut various vegetables. | さまざま | N3 L5 T5 C2 I2 — Odd context (cutting 'various' vegetables) and blank could be filled by many adjectives. |  |  |
| varied | 家族はそれぞれ様々な趣味を持っています。 | Each family member has various hobbies. | さまざま | N3 L5 T4 C2 I3 — Slightly awkward phrasing; blank not uniquely recoverable since other adjectives fit. |  |  |
| intimate | 彼は父と親しい友達です。 | He is a close friend of my father's. | したしい | N3 L5 T3 C2 I2 — Awkward combination of 父と親しい and 友達; more natural as 父の親しい友達. |  |  |
| intimate | 旅行の途中ではあまり親しい人に会いませんでした。 | I didn't meet many close acquaintances during the trip. | したしい | N3 L5 T3 C2 I2 — 親しい人 for 'acquaintance' is a slight mismatch; many adjectives could fill the blank. |  |  |
| chief | 主要な電車はまだ来ていません。 | The main train hasn't come yet. | しゅよう | N2 L5 T4 C2 I2 — '主要な電車' is an unnatural collocation; trains aren't typically described as 'main' this way, and many other adjectives could fill the blank. |  |  |
| public performance | 有名な歌手が先週公演しました。 | A famous singer performed last week. | こうえんしました | N3 L5 T5 C3 I3 — 公演 is slightly unusual for a singer (more typical for theater/dance); a native might say ライブ or コンサート instead. |  |  |
| to combine | この色とあの色を合わせますか。 | Will you combine this color with that color? | あわせます | N3 L5 T4 C3 I3 — Slightly unnatural phrasing; '混ぜる' could also fit the blank, reducing uniqueness. |  |  |
| to hold (transitive) (written expression) | 母は赤ちゃんを抱きました。 | My mother held the baby. | いだきました | N2 L4 T4 C3 I2 — 抱く(いだく) is the literary/abstract sense; for physically holding a baby native speakers say だく, not いだく, so this pairing is odd. |  |  |
| to hold (transitive) (written expression) | 将来に大きな夢を抱きたいです。 | I want to hold a big dream for the future. | いだきたい | N3 L4 T3 C4 I3 — Slightly awkward phrasing; more natural would be '将来大きな夢を抱いています' but acceptable. |  |  |
| to project | 先生はスクリーンに地図を映しました。 | The teacher projected a map on the screen. | うつしました | N2 L5 T5 C3 I3 — Reading kana missing long vowel mark for スクリーン (すくりいん should be すくりーん). |  |  |
| to be photographed | この写真にはきれいに写りたいです。 | I want to look good in this photo. | うつりたい | N3 L5 T4 C4 I3 — には usage slightly unnatural; more natural as 写真写りがいい or 写真にきれいに写りたい. |  |  |
| months and years | 彼と会わない年月が過ぎました。 | Years have passed without seeing him. | としつき | N3 L4 T4 C3 I3 — Phrasing is slightly awkward; more natural would include 長い or まま; blank could also fit 時間/月日. |  |  |
| ordinary | 日常の生活は特に変わりません。 | My everyday life doesn't change much. | にちじょう | N3 L5 T4 C2 I2 — 日常の生活 is slightly awkward; more common as 日常生活; blank could be filled by many words (私の, 今の, 毎日の). |  |  |
| ordinary | 日常が忙しいから、旅行に行きたいです。 | Because everyday life is busy, I want to go on a trip. | にちじょう | N2 L5 T4 C2 I3 — 日常が忙しい sounds unnatural; typically 日常生活が忙しい or 毎日が忙しい is used. |  |  |
| whole year | 年中いつでも遊びに来てください。 | Please come visit anytime, all year round. | ねんじゅう | N2 L5 T4 C3 I2 — 年中 and いつでも together are redundant; a native speaker likely wouldn't combine them this way. |  |  |
| showy | パーティーに派手な服で行かないでください。 | Please don't go to the party in showy clothes. | はで | N2 L5 T5 C4 I4 — Reading of パーティー rendered as ぱあてぃい instead of standard ぱーてぃー, inaccurate kana. |  |  |
| role | どんな役が好きですか。 | What kind of role do you like? | やく | N3 L5 T5 C2 I2 — Generic sentence; many nouns could fill the blank besides 役. |  |  |
| theater | 劇場で有名な映画を見ました。 | I watched a famous movie at the theater. | げきじょう | N3 L5 T5 C2 I3 — 劇場 usually refers to a theater for plays/live performances, not movies (映画館 is more natural for watching a movie), so several words could fit the blank. |  |  |
| lung | 肺は空気を吸いますか。 | Do lungs breathe in air? | はい | N3 L5 T5 C5 I2 — slightly unnatural/generic question but only 肺 logically fits the blank. |  |  |
| membrane | 指にできた薄い膜を見せてもらいました。 | A friend showed me the thin membrane that formed on their finger. | まく | N4 L5 T3 C3 I4 — EN adds 'a friend' which isn't specified in the Japanese subject; blank could also be filled by 皮 or マメ. |  |  |
| course | 新しい課程を受けたいです。 | I want to take a new course. | かてい | N2 L5 T4 C2 I2 — 受ける with 課程 is unnatural; 履修する or 講座/コースを受ける is more typical, and other words fit the blank too. |  |  |
| go by the way | 交通が悪いから、駅を経由して行きます。 | Because traffic is bad, I go via the station. | けいゆ | N3 L5 T4 C4 I3 — Reasoning (bad traffic → go via station) is a bit illogical/unnatural. |  |  |
| parking | 忙しかったから、駐車に時間がかかりました。 | Because I was busy, parking took time. | ちゅうしゃ | N2 L4 T3 C2 I2 — Cause-effect link is illogical (being busy doesn't explain parking taking time); blank could fit many time-consuming activities. |  |  |
| to give up | 電車に遅れそうだったので、諦めてタクシーに乗りました。 | Since I was about to be late for the train, I gave up and took a taxi. | あきらめて | N2 L4 T4 C3 I3 — Reading kana for タクシー is mis-transcribed as たくしい instead of たくしー, so naturalness capped; also other verbs (急いで, 焦って) could fit the blank. |  |  |
| language study | 語学が好きだから、いつも本を読んでいます。 | Because I like language study, I always read books. | ごがく | N3 L5 T4 C2 I3 — The causal link between liking language study and reading books is a bit forced, and other hobbies could fit the blank equally well. |  |  |
| to urge to do | 急いでいるので、近い道を勧めてください。 | Since I'm in a hurry, please recommend a shorter route. | すすめて | N3 L5 T4 C2 I3 — 近い道を勧める is an unusual collocation; 教えて/案内して would fit equally well, weakening cloze recoverability. |  |  |
| to dispute | 姉と妹は台所で最後のケーキを争いました。 | My older and younger sisters fought over the last piece of cake in the kitchen. | あらそいました | N3 L4 T4 C3 I3 — 争う sounds slightly stiff for fighting over cake; 取り合う would be more natural. |  |  |
| to express | 危ない道は地図に赤い色で表してください。 | Please mark dangerous roads in red on the map. | あらわして | N4 L5 T3 C3 I3 — English 'mark' loosely conveys 表す; other verbs like 示す/塗る could also fit the blank. |  |  |
| equilibrium | 毎日電話で話すから、平均の時間は長くなります。 | Since we talk on the phone every day, the average time gets long. | へいきん | N2 L4 T3 C3 I2 — Unnatural phrasing; should be 平均時間 rather than 平均の時間, and gloss 'equilibrium' is wrong for 平均. |  |  |
| to scatter | 庭に水を撒いてください。 | Please scatter water in the garden. | まいて | N4 L5 T3 C3 I2 — English translation 'scatter water' is awkward; natural English would be 'water the garden', and other verbs like かける could also fit the blank. |  |  |
| to be mixed | レストランでは水と油が混ざりません。 | At the restaurant, water and oil don't mix. | まざりません | N3 L5 T5 C4 I2 — Mentioning 'at the restaurant' is odd for a general fact about water and oil not mixing. |  |  |
| to be mixed | 会議で意見が混ざって、分かりにくかったですか。 | Did the opinions get mixed up at the meeting and become hard to understand? | まざって | N2 L5 T4 C3 I3 — 混ざる is unnatural for opinions being confused; 食い違う or 入り混じる would be more natural. |  |  |
| to mix | スープに塩を混ぜてください。 | Please mix salt into the soup. | まぜて | N3 L5 T5 C2 I3 — Salt might also be 入れて/かけて, so blank isn't uniquely 混ぜて. |  |  |
| to mix | 昨日、会社で薬を混ぜました。 | Yesterday, I mixed medicine at the office. | まぜました | N3 L5 T5 C2 I3 — Context (company, medicine) is odd and blank could be 飲みました/買いました等, reducing recoverability. |  |  |
| to be collected | 天気の話をしていたら、みんなの意見がまとまりました。 | While talking about the weather, everyone's opinions came together. | まとまりました | N3 L4 T4 C3 I2 — Odd context: talking about weather leading to opinions coming together feels illogical. |  |  |
| to split | この紙は薄いので、すぐに裂けます。 | This paper is thin, so it tears easily. | さけます | N3 L5 T5 C3 I3 — 破れる is more natural for thin paper tearing than 裂ける |  |  |
| to rub | バイオリンを擦って音を出します。 | I bow the violin to produce sound. | すって | N2 L4 T4 C4 I4 — バイオリンには通常「弾く」を使うため擦っては不自然 |  |  |
| to sever | レストランでお酒を断つことにしています。 | I make it a rule to abstain from alcohol at restaurants. | たつ | N3 L4 T4 C3 I3 — Context (at a restaurant) feels artificial; やめる/控える could also fill the blank. |  |  |
| to join | 壊れた枝を接いでください。 | Please graft the broken branch back on. | ついで | N3 L4 T3 C4 I3 — 'broken branch' phrasing is slightly odd for grafting, which usually involves healthy scions. |  |  |
| mentality | 電話で彼の心理が少し分かりました。 | I understood his mentality a little through the phone call. | しんり | N3 L4 T4 C2 I3 — 電話で心理が分かるという表現がやや不自然、気持ちや考えでも当てはまる |  |  |
| mentality | 遅刻した時、心理はとても複雑でした。 | When I was late, my mentality was very complicated. | しんり | N2 L4 T3 C2 I2 — 主語がなく心理より気持ちの方が自然、複数語が当てはまる |  |  |
| figure | 子供が動物の図を描きました。 | The child drew a picture of an animal. | ず | N3 L5 T4 C2 I2 — 『図』より『絵』の方が自然で、空欄には複数の語が当てはまる |  |  |
| figure | その図を携帯で送ってください。 | Please send that figure via cellphone. | ず | N3 L5 T3 C2 I2 — 携帯で送るなら『写真』や『画像』の方が自然で、空欄の推測が難しい |  |  |
| that is | 明日、すなわち三日に電話します。 | I'll call tomorrow, that is, on the 3rd. | すなわち | N4 L2 T5 C3 I3 — すなわち is above N3 level and 'つまり' could equally fill the blank, reducing cloze uniqueness. |  |  |
| tax | 毎年、家族の税金を計算します。 | Every year, I calculate my family's taxes. | ぜいきん | N3 L5 T5 C2 I2 — Blank could be filled by many nouns (money, budget, expenses), reducing recoverability. |  |  |
| tax | 銀行から税金について電話がありました。 | There was a call from the bank about taxes. | ぜいきん | N2 L5 T5 C2 I2 — Banks calling about taxes is unusual in Japan; also blank could fit many topics. |  |  |
| success | 料理が成功して、家族が喜びました。 | The dish turned out well, and the family was happy. | せいこうして | N3 L5 T4 C3 I3 — 料理が成功して is slightly unnatural; うまくいって is more common. |  |  |
| success | 電話で成功のニュースを伝えました。 | I told the good news of success over the phone. | せいこう | N3 L5 T4 C2 I2 — Many nouns could fill the blank before のニュース, weakening cloze recoverability. |  |  |
| fee | この店の料金は高いです。 | This restaurant's fee is expensive. | りょうきん | N3 L5 T3 C3 I2 — EN says 'restaurant' but JP just says 店 (shop); also 値段 could fit blank too. |  |  |
| concrete | 先生は具体的な例を上げました。 | The teacher gave a concrete example. | ぐたい | N2 L5 T5 C5 I3 — Should be 挙げました, not 上げました, for 'gave an example'. |  |  |
| grade | 試験で一位になりたいです。 | I want to be first place in the exam. | い | N2 L4 T4 C4 I3 — Target word listed as 位(くらい)='grade' but sentence uses 位 read as い (rank), a mismatch; reading given (いちい) doesn't match the stated target reading くらい. |  |  |
| grade | 彼はクラスで三位でした。 | He was third place in the class. | い | N2 L4 T4 C4 I3 — Same reading mismatch: target specified as くらい but sentence uses い (rank) reading, not the given target reading. |  |  |
| grade | 試合で彼は何位でしたか。 | What place did he get in the match? | い | N2 L4 T4 C3 I3 — Reading mismatch with stated target くらい; also 何位 blank could be answered with other rank-related words in some contexts, slightly lowering recoverability. |  |  |
| tiredness | 授業の後、疲れは残っていますか。 | Is your tiredness still remaining after class? | つかれ | N3 L5 T4 C3 I2 — slightly awkward phrasing with は instead of が |  |  |
| abdomen | 腹が空きましたか。 | Are you hungry? | はら | N3 L5 T5 C4 I2 — Using plain 腹 with polite ですか sounds slightly mismatched; お腹 is more natural in this register. |  |  |
| locket | 旅行のお土産に、そのロケットを見せてください。 | Please show me that locket as a souvenir from the trip. | ろけっと | N3 L5 T5 C2 I3 — Souvenir context doesn't strongly point to 'locket' specifically; many souvenirs fit. |  |  |
| clothing | 土曜日に衣料を買いに行きます。 | I will go buy clothing on Saturday. | いりょう | N2 L5 T5 C2 I1 — 衣料 sounds unnatural here; natives would say 服 or 衣料品, and many other nouns fit the blank equally well. |  |  |
| clothing | 旅行に衣料をどのくらい持って行きますか。 | How much clothing will you bring on the trip? | いりょう | N2 L5 T5 C2 I2 — 衣料 alone is awkward for packing clothes; 服/荷物 would also fit the blank, reducing recoverability. |  |  |
| clothing | 急いでいたので、衣料を店に忘れました。 | Since I was in a hurry, I left the clothing at the store. | いりょう | N2 L5 T5 C2 I2 — 衣料 is unnatural in this casual context; many objects (財布, 傘, 服) could fill the blank equally well. |  |  |
| detergent | 洗剤を貸してください。 | Please lend me some detergent. | せんざい | N3 L5 T5 C2 I2 — Lending detergent is a bit unusual context; blank could be many nouns. |  |  |
| sleeve | 料理をする時、袖を上げます。 | I roll up my sleeves when cooking. | そで | N3 L5 T3 C3 I3 — 袖を上げる is unusual; 袖をまくる is the natural phrase for rolling up sleeves, and 手を上げます could also fit the blank. |  |  |
| sleeve | 旅行のシャツは袖が長いです。 | The travel shirt has long sleeves. | そで | N3 L5 T4 C4 I3 — 旅行のシャツ is a slightly awkward collocation. |  |  |
| sleeve | 急いでいたので、袖のボタンを忘れました。 | Since I was in a hurry, I forgot the sleeve's button. | そで | N3 L5 T3 C3 I3 — Meaning of 'forgot the sleeve's button' is unclear/ambiguous, weakening accuracy and cloze uniqueness. |  |  |
| outflow | 朝、シャワーの水の出が悪いです。 | In the morning, the water flow from the shower is weak. | で | N2 L4 T4 C4 I3 — Reading kana しゃわあ is wrong for シャワー (should be しゃわー), so naturalness capped at 2. |  |  |
| outflow | 今日は客の出が多いですか。 | Are there a lot of customers today? | で | N2 L4 T2 C2 I2 — 客の出 is unnatural (more commonly 客の入り or 客足); translation drops the 'turnout/flow' nuance and many other words could fill the blank. |  |  |
| resistance | 薬に抵抗があるから、飲みたくないです。 | Because I have resistance to medicine, I don't want to take it. | ていこう | N4 L5 T3 C4 I3 — EN translation is a bit literal; more natural as 'I'm reluctant to take medicine'. |  |  |
| incident happening | 今日、駅でおかしい出来事がありました。 | Today something strange happened at the station. | できごと | N3 L5 T5 C3 I3 — 「おかしい出来事」より「変な出来事」の方が自然。 |  |  |
| incident happening | 大きい出来事があったから、ニュースで見ました。 | Because a big incident happened, I saw it on the news. | できごと | N3 L5 T4 C3 I3 — 「大きい出来事」より「大きな出来事」がより自然。 |  |  |
| if possible… | できれば、早く家に帰りたいですか。 | If possible, do you want to go home early? | できれば | N3 L5 T4 C3 I3 — できれば used to ask about someone else's wish feels slightly unnatural; usually used for one's own preference. |  |  |
| books | 珍しい図書を読みたいです。 | I want to read a rare book. | としょ | N2 L5 T4 C2 I3 — 図書 sounds unnatural here; native speakers would say 本; also 本 could equally fill the blank. |  |  |
| books | この図書はどこにありますか。 | Where is this book? | としょ | N3 L5 T4 C2 I2 — Generic template sentence; 本 or other nouns fit the blank equally well. |  |  |
| riddle | 先生が黒板に謎を書きました。 | The teacher wrote a riddle on the blackboard. | なぞ | N3 L5 T4 C3 I3 — 謎を書く is slightly unnatural phrasing; riddles are usually 出す/かける rather than 書く. |  |  |
| riddle | 兄はいつも謎の本を読んでいます。 | My older brother is always reading books of riddles. | なぞ | N2 L5 T2 C2 I3 — 謎の本 typically means 'mysterious book', not 'book of riddles', so the translation is misleading and the blank isn't uniquely recoverable. |  |  |
| somehow | 何とか料理を作りましょう。 | Let's somehow make a meal. | なんとか | N2 L4 T3 C2 I2 — 何とか with volitional form is unnatural; many other adverbs could fill the blank. |  |  |
| remaining | 宿題の残りを今晩します。 | I will do the rest of my homework tonight. | のこり | N3 L5 T4 C3 I3 — 宿題の残りをします is slightly unnatural; 残りの宿題をやります is more common, and 続き could also fit the blank. |  |  |
| jeans | このジーンズは少し狭いです。 | These jeans are a little tight. | じいんず | N2 L5 T4 C3 I3 — 狭い is unnatural for describing tight jeans; きつい would be the natural word. |  |  |
| thing | 店に品が多いです。 | There are a lot of goods in the store. | しな | N3 L5 T4 C2 I2 — '品が多い' sounds slightly unnatural; '品物' or '品数' would be more idiomatic, and many nouns could fill the blank. |  |  |
| ink | 学校で墨を使います。 | We use ink at school. | すみ | N3 L5 T4 C2 I2 — blank could be filled by many words like 筆・鉛筆, not clearly forcing 墨 |  |  |
| candidacy | 候補が多いから、電話で意見を聞きます。 | Since there are many candidates, I'll ask for opinions by phone. | こうほ | N3 L5 T4 C2 I2 — Logical connection between clauses is weak, and blank word is not uniquely determined. |  |  |
| importance | 彼女はいつも友達との時間を重視しました。 | She always valued time with her friends. | じゅうし | N3 L4 T4 C3 I3 — いつも with past tense しました is slightly awkward; ていました would be more natural for habitual action. |  |  |
| amendment | 天気予報の失敗を修正しますか。 | Will you correct the mistake in the weather forecast? | しゅうせい | N2 L4 T3 C3 I2 — 天気予報の失敗を修正 is an unnatural collocation; 訂正 or 直す would be more natural. |  |  |
| concentration | 台風の時、集中して天気予報を見ますか。 | Do you watch the weather forecast closely during a typhoon? | しゅうちゅう | N2 L4 T3 C2 I3 — 集中して天気予報を見る is an unnatural collocation; a native would more likely say 熱心に or 注意して. |  |  |
| means | バスが来なかったので、外の手段で学校へ行きました。 | Since the bus didn't come, I went to school by another means. | しゅだん | N2 L4 T4 C3 I3 — 外の手段 is incorrect kanji usage for 'ほかの'; should be 他の手段, so reading/kanji mismatch caps naturalness. |  |  |
| collision | 幸い、大きい衝突はありませんでした。 | Fortunately, there was no big collision. | しょうとつ | N3 L5 T5 C4 I3 — 大きな衝突 would sound more natural than 大きい衝突. |  |  |
| skate | 子供たちは公園でスケートをします。 | The children skate in the park. | すけえと | N3 L5 T5 C2 I2 — 公園でスケートをする is a bit odd since skating usually happens at a rink; blank could fit many sports. |  |  |
| to wet | 朝、顔を水で濡らしてから歯を磨きます。 | In the morning, I wet my face with water before brushing my teeth. | ぬらして | N2 L4 T4 C2 I3 — Wetting one's face before brushing teeth is an odd context; 洗う (wash) would be more natural, making the blank ambiguous. |  |  |
| to leave (behind, over) | 宿題を月曜日まで残しておきます。 | I'll leave the homework until Monday. | のこして | N3 L5 T4 C3 I3 — Slightly unnatural phrasing; more natural would be 月曜日までにやっておきます, and other verbs could fit the blank. |  |  |
| to remove | 危ない物をポケットから除きましたか。 | Did you remove the dangerous thing from your pocket? | のぞきました | N2 L3 T4 C2 I2 — 除く is unnatural here; 取り出す/出す would be the natural verb for taking something out of a pocket, making the blank ambiguous. |  |  |
| to extend | 病院で足を伸ばしました。 | I stretched my leg at the hospital. | のばしました | N3 L5 T4 C3 I3 — 病院で足を伸ばす is a bit vague/odd context; other verbs like 上げる・動かす could fit. |  |  |
| limits | 買い物はこの辺できりにしましょう。 | Let's stop shopping around here. | きり | N3 L4 T4 C2 I3 — きりにする is less common than 終わりにする/この辺にする, making the blank less uniquely recoverable. |  |  |
| trouble | 彼は仕事の苦を一人で我慢しています。 | He endures the hardships of work alone. | く | N2 L3 T4 C2 I2 — 苦 alone sounds unnatural here; 苦労 or 苦しみ would be more natural, and either could equally fill the blank. |  |  |
| trouble | 苦は誰にでもあります。 | Everyone has hardships. | く | N2 L3 T4 C2 I2 — 苦 as bare subject is uncommon; 苦労/悩み etc. could equally fit the blank. |  |  |
| opportunity | 契機がなければ、人は変わりません。 | Without some opportunity, people don't change. | けいき | N3 L4 T4 C3 I2 — Generic sentence; きっかけ could also fill the blank. |  |  |
| true | この答えは正です。 | This answer is correct. | せい | N2 L5 T4 C2 I2 — 「正です」is unnatural; native speakers would say 正解です or 正しいです. |  |  |
| true | テストで正はいくつありましたか。 | How many correct answers were there on the test? | せい | N2 L5 T4 C2 I2 — 「正」alone as noun for correct answers is unnatural; 正解 is the natural word here. |  |  |
| true | 正か間違いかを教えてください。 | Please tell me whether it is right or wrong. | せい | N3 L5 T4 C4 I3 — 正か間違いか is plausible phrasing, though 正しいか間違いか is more common. |  |  |
| regular | 正規の切符を買ってください。 | Please buy a regular ticket. | せいき | N3 L5 T4 C3 I2 — Slightly unusual phrasing; 正規料金の切符 more common. |  |  |
| obvious | 忙しいときに手伝わないのは当然ではありません。 | It's not natural to not help when someone is busy. | とうぜん | N3 L5 T3 C3 I3 — Phrasing is a bit unnatural and 'natural' vs 'obvious' translation is imprecise. |  |  |
| medium | 並のカレーをください。 | Please give me a regular curry. | なみ | N2 L5 T4 C3 I2 — Reading 'かれえ' is incorrect kana for カレー (should be かれー), naturalness capped. |  |  |
| feel relieved | 料理がまだ終わっていないので、ほっとしていません。 | I haven't felt relieved yet because dinner isn't finished. | ほっと | N2 L4 T3 C2 I2 — Negative form with ほっと sounds unnatural; logical link between clauses is weak. |  |  |
| superiority | 料理のコンテストで優になりましたか。 | Did you get top marks in the cooking contest? | ゆう | N2 L4 T3 C2 I3 — 優 is a formal academic grading term, not typically used for contest results; 優勝 or 一位 would be more natural here. |  |  |
| organic | これは有機の食料品ではありません。 | This is not an organic food product. | ゆうき | N3 L5 T5 C2 I1 — Generic これは＿ではありません template; many words could fit the blank. |  |  |
| care | 子供を守るために保護が必要です。 | Protection is necessary in order to protect children. | ほご | N2 L4 T2 C4 I2 — Redundant/circular phrasing (protecting to protect) sounds unnatural and translation is awkward. |  |  |
| compensation | 会社は事故の補償を払います。 | The company will pay compensation for the accident. | ほしょう | N3 L4 T5 C5 I3 — 補償を払う is slightly unnatural; 補償金を支払う or 補償する would be more idiomatic. |  |  |
| mass communication | 友達が来る前に、マスコミに連絡しましょう。 | Let's contact the media before our friend arrives. | ますこみ | N2 L4 T4 C2 I3 — Odd combination of clauses makes the sentence feel unnatural and the blank could be many entities. |  |  |
| message | 今晩メッセージを送りませんか。 | Shall we send a message tonight? | めっせえじ | N3 L5 T2 C3 I2 — 送りませんか means 'won't you send' (asking someone else), not 'shall we send'; translation is inaccurate. |  |  |
| opposition party | 晩御飯を食べながら、野党のニュースを話しました。 | While eating dinner, we talked about the opposition party's news. | やとう | N3 L5 T4 C2 I3 — 「野党のニュースを話す」is slightly awkward phrasing; many nouns could fill the blank. |  |  |
| opposition party | 友達が来たら、野党について話しましょう。 | When our friend comes, let's talk about the opposition party. | やとう | N3 L5 T4 C2 I2 — Context (friend visiting) doesn't naturally lead to discussing the opposition party; many topics could fit the blank. |  |  |
| development | この町の交通はどう発達しましたか。 | How did this town's transportation develop? | はったつ | N3 L4 T5 C3 I3 — どう発達しましたか is a bit stiff; どのように発達しましたか would sound more natural. 発展 could also fit the blank. |  |  |
| square | この四角の箱は重いですか。 | Is this square box heavy? | しかく | N3 L5 T5 C2 I2 — 四角の箱 sounds a bit stiff; 四角い箱 more natural, and other adjectives/shapes could fill the blank |  |  |
| square | 四角の窓が欲しいです。 | I want a square window. | しかく | N3 L5 T5 C2 I2 — 四角の窓 less natural than 四角い窓; other shape/material words could fit the blank |  |  |
| payment | 支給をもっと増やしてほしいです。 | I want the payment to be increased more. | しきゅう | N3 L5 T4 C2 I2 — 支給 usually paired with a specific noun (交通費の支給 etc.); alone it's vague and many nouns could fill the blank, hurting cloze recoverability. |  |  |
| stimulus | 辛い食べ物はお腹に刺激が強いです。 | Spicy food gives a strong stimulus to the stomach. | しげき | N4 L5 T3 C4 I3 — EN translation slightly awkward phrasing ('gives a strong stimulus') |  |  |
| stimulus | 新しい仕事はいい刺激になりましたか。 | Did the new job become a good stimulus? | しげき | N4 L5 T3 C4 I4 — EN could be more natural ('Was the new job a good stimulus for you?') |  |  |
| command | 誰が今日のコンサートで指揮をしますか。 | Who will conduct at today's concert? | しき | N2 L5 T5 C4 I3 — Reading kana for コンサート is incorrect (こんさあと instead of こんさーと). |  |  |
| self | 自己について話すのは難しいです。 | Talking about oneself is difficult. | じこ | N3 L3 T5 C3 I2 — 自己 alone sounds slightly stiff; 自分 would be more natural, so the blank could also be filled with 自分. |  |  |
| self | 自己をよく知っていますか。 | Do you know yourself well? | じこ | N2 L3 T5 C2 I2 — 自己 as a standalone object of 知る is unnatural; native speakers would say 自分自身 or 自分. |  |  |
| self | 自己を大切にしましょう。 | Let's cherish ourselves. | じこ | N2 L3 T5 C2 I2 — 自己を大切に is unnatural; 自分を大切に is the standard phrasing, making the blank ambiguous. |  |  |
| font | この手紙の字体はきれいです。 | The font of this letter is beautiful. | じたい | N3 L5 T4 C2 I3 — 字 or 文字 could equally fill the blank; 字体 usually refers to typeface style rather than handwriting beauty. |  |  |
| font | 字体が小さいですから、読みにくいです。 | The font is small, so it's hard to read. | じたい | N2 L5 T3 C2 I3 — 字体 refers to typeface design, not size; 'small font' is usually 文字が小さい, making this usage unnatural and ambiguous for cloze. |  |  |
| refusal | 仕事を辞退しますか。 | Will you decline the job? | じたい | N3 L4 T4 C2 I2 — blank could be filled by many verbs like 辞める・続ける, low recoverability |  |  |
| wish | あなたの志望の大学はどこですか。 | Which university is your wish to attend? | しぼう | N5 L5 T3 C4 I4 — '志望大学' is a fixed collocation for first-choice university; translation slightly awkward but conveys meaning. |  |  |
| wish | 志望が強いですから、頑張ります。 | Since my wish is strong, I'll do my best. | しぼう | N2 L5 T3 C2 I2 — '志望が強い' sounds unnatural; native speakers would say '意志が強い' or '決意が強い', making the blank hard to pin down. |  |  |
| to serve sake | 彼女は客にビールを酌んだ。 | She poured beer for the guest. | くんだ | N2 L5 T5 C3 I3 — Reading kana error: びいる should be びーる for ビール, so naturalness capped at 2. |  |  |
| equal | この二つのケーキの大きさは等しいです。 | These two cakes are equal in size. | ひとしい | N3 L4 T5 C3 I2 — 等しい sounds a bit formal/mathematical here; 同じ would be more natural, and 同じ could also fill the blank, reducing uniqueness. |  |  |
| equal | 兄と弟の背の高さは等しいですか。 | Are the older and younger brother's heights equal? | ひとしい | N3 L4 T5 C3 I3 — Same issue: 同じ or 近い could plausibly fill the blank instead of 等しい. |  |  |
| delicate | この漢字の意味は微妙ですか。 | Is the meaning of this kanji subtle? | びみょう | N3 L5 T3 C3 I2 — Sentence is a bit unnatural/awkward semantically; several adjectives could fill the blank. |  |  |
| delicate | 二つの味は微妙だから、比べてみましょう。 | The two flavors are subtly different, so let's compare them. | びみょう | N2 L4 T3 C3 I3 — '味は微妙だから' is unnatural; more natural would be '味が微妙に違う'. |  |  |
| deep red | 弟の顔は恥ずかしくて真っ赤になりました。 | My younger brother's face turned deep red from embarrassment. | まっか | N3 L5 T5 C4 I4 — 弟の顔は... reads awkwardly; more natural as 弟は恥ずかしくて顔が真っ赤になりました。 |  |  |
| basic | この料理は基本が大切です。 | The basics are important in this dish. | きほん | N3 L5 T4 C3 I2 — Slightly awkward phrasing; 基礎 or other words could also fit. |  |  |
| duty | 義務だから、毎朝早く起きます。 | Because it's a duty, I get up early every morning. | ぎむ | N2 L5 T3 C1 I2 — blank could be filled by many words like 習慣 or 趣味, making it hard to recover the exact target |  |  |
| ex- | 彼は旧社長です。 | He is the former president. | きゅう | N3 L3 T5 C2 I2 — Reading matches; but blank could plausibly be filled by other words like 新 (opposite) or 元 (synonym), reducing recoverability; also generic template sentence. |  |  |
| absorption | 野菜は栄養を吸収します。 | Vegetables absorb nutrients. | きゅうしゅうします | N3 L5 T4 C3 I3 — Slightly odd phrasing; 摂取します could also fit, reducing uniqueness. |  |  |
| attack | 犬が急に攻撃しました。 | The dog suddenly attacked. | こうげき | N3 L5 T4 C3 I2 — やや不自然、'攻撃してきました'の方が自然 |  |  |
| attack | いつ敵が攻撃しますか。 | When will the enemy attack? | こうげき | N3 L5 T4 C3 I2 — 語順がやや不自然、'敵はいつ攻撃してきますか'の方が自然 |  |  |
| plant | この植物はあまり水を要りません。 | This plant doesn't need much water. | しょくぶつ | N2 L4 T4 C4 I3 — 要る is intransitive and normally takes が, not を; 水があまり要りません would be more natural. |  |  |
| bubble | お風呂に入ると体に泡ができます。 | When you get in the bath, bubbles form on your body. | あわ | N2 L5 T4 C2 I2 — Odd claim that bathing itself produces bubbles on the body; blank could be filled with other words like 汗 (sweat) or 水滴 (droplets). |  |  |
| bunch | 花の店で赤い花の束を買いたいです。 | I want to buy a bunch of red flowers at the flower store. | たば | N3 L5 T5 C4 I3 — 花の店 is slightly unnatural; 花屋 would be more typical. |  |  |
| bunch | 友達に本の束を貸してもらいました。 | A friend lent me a bundle of books. | たば | N3 L5 T5 C3 I3 — 束 for books is less common; 山 or 積み重ね might also fit the blank. |  |  |
| even number | この数字は偶ですか。 | Is this number even? | たま | N2 L4 T3 C3 I1 — 偶 alone is not standard Japanese for 'even number' (should be 偶数); generic template sentence. |  |  |
| even number | 検査の番号は偶の方がいいらしいです。 | It seems the even inspection number is better. | たま | N2 L3 T3 C3 I3 — 偶 alone as 'even number' is nonstandard (usually 偶数); reading and usage seem fabricated. |  |  |
| value | このかばんの値はいくらですか。 | What is the value of this bag? | ね | N3 L5 T4 C3 I2 — 値 alone sounds slightly unnatural here; 値段 would be more idiomatic for 'price'. |  |  |
| value | 古い物の値を調べたいです。 | I want to look up the value of old things. | ね | N3 L5 T4 C2 I2 — Ambiguous blank—words like 値段 or 価値 could also fit, weakening cloze recoverability. |  |  |
| conditions | この学校に入る条件は難しいですか。 | Is the condition for entering this school difficult? | じょうけん | N3 L5 T4 C3 I3 — 条件は難しい is a bit unnatural collocation; usually 条件が厳しい is used. |  |  |
| conditions | 家族の条件が合わないから、引っ越すことにしました。 | Because the family conditions didn't match, we decided to move. | じょうけん | N2 L5 T3 C2 I2 — 家族の条件が合わない is unclear/unnatural phrasing; ambiguous what 'family conditions' means. |  |  |
| common sense | これは常識ですが、知っていますか。 | This is common sense, but do you know it? | じょうしき | N3 L5 T4 C2 I2 — blank could be filled by many nouns, low constraint |  |  |
| recognition | 先生の承認をもらってから、旅行に行きます。 | After getting the teacher's approval, I will go on the trip. | しょうにん | N3 L4 T5 C3 I3 — 承認 sounds slightly formal/bureaucratic for a teacher’s permission; 許可 more natural here. |  |  |
| recognition | 承認はもう電話で伝えましたか。 | Have you already communicated the approval by phone? | しょうにん | N3 L4 T5 C2 I2 — Very generic sentence; many nouns (許可, 結果, 予定) could fill the blank. |  |  |
| recognition | 両親の承認をもらいましょう。 | Let's get our parents' approval. | しょうにん | N2 L4 T5 C3 I2 — 承認 feels too formal for parental approval; 許可 would be more natural. |  |  |
| consumption | 一日にどのくらい水を消費しますか。 | How much water do you consume in a day? | しょうひ | N3 L5 T5 C3 I3 — 消費する for water is slightly unnatural; 使う/使用する more common. |  |  |
| proof | 学校でこれが本当だと証明しました。 | At school, I proved that this was true. | しょうめい | N3 L5 T4 C3 I3 — 説明 could also fit the blank, reducing uniqueness |  |  |
| pepper | スープに胡椒を入れてください。 | Please put pepper in the soup. | こしょう | N3 L5 T5 C2 I2 — Reading uses すうぷ instead of すーぷ for スープ, a mismatch; also 塩 fits equally well, reducing cloze recoverability. |  |  |
| obstacle | 台風のため、飛行機の出発に障害が出ました。 | Due to the typhoon, there was an obstacle to the plane's departure. | しょうがい | N2 L4 T3 C2 I2 — 『障害』より『支障』や『影響』の方が自然で、複数の語が当てはまりうる。 |  |  |
| obstacle | 試験の前に、障害がいろいろありました。 | There were various obstacles before the exam. | しょうがい | N2 L4 T3 C2 I2 — 文脈が曖昧で『問題』『トラブル』なども当てはまる。 |  |  |
| state of affairs | 先週、天気の状況が悪かったです。 | Last week, the weather situation was bad. | じょうきょう | N2 L5 T4 C3 I2 — 天気の状況 is unnatural phrasing; native speakers would say 天気 alone or 気象状況. |  |  |
| to damage | 重い物を持つと、体を傷めます。 | If you carry heavy things, you'll hurt your body. | いためます | N3 L5 T4 C3 I2 — 体を傷める is unusual; typically a specific body part is used, making this a generic template sentence. |  |  |
| to bear | 彼は登山で重い荷物を背に負います。 | He carries heavy luggage on his back during mountain climbing. | おいます | N2 L4 T4 C3 I3 — 背に負う feels forced; 背負う would be far more natural for this meaning. |  |  |
| emergency | 非常のとき、すぐにベルが鳴りました。 | In an emergency, the bell rang immediately. | ひじょう | N3 L5 T4 C3 I3 — ベルが鳴った後に非常事態と分かる流れがやや不自然で、緊急などでも代替可能 |  |  |
| desperation | 彼は必死に仕事をしました。 | He worked desperately. | ひっし | N3 L5 T5 C2 I2 — 仕事をしましたはやや不自然、働きましたの方が自然 |  |  |
| violin | コンサートへ行く前に、バイオリンを車に乗せてください。 | Before going to the concert, please put the violin in the car. | ばいおりん | N2 L5 T5 C3 I3 — Reading kana for コンサート is incorrectly given as こんさあと instead of こんさーと. |  |  |
| stock | 父は毎日株を買います。 | My father buys stocks every day. | かぶ | N3 L5 T5 C2 I3 — Blank could be filled by many nouns (パン, 服, etc.), so 株 isn't uniquely recoverable. |  |  |
| first volume | この本の上は面白いです。 | The first volume of this book is interesting. | かみ | N2 L3 T3 C2 I2 — 上 meaning 'first volume' is read じょう (as in 上巻), not かみ; the reading given is incorrect, and out of context 上 could be read うえ ('on top'), making the blank ambiguous. |  |  |
| first volume | 上を先に読みたいです。 | I want to read the first volume first. | かみ | N2 L3 T3 C2 I2 — Same reading error: 上 for 'first volume' should be read じょう (上巻), not かみ, undermining recoverability and naturalness. |  |  |
| song | 母は古い歌謡が好きです。 | My mother likes old songs. | かよう | N2 L4 T5 C2 I2 — 歌謡 alone sounds stiff/archaic; native speakers would more likely say 歌謡曲 or simply 歌, and 歌 fits the blank equally well, hurting recoverability. |  |  |
| song | どんな歌謡を歌いますか。 | What kind of songs do you sing? | かよう | N2 L4 T5 C2 I2 — 歌謡 sounds unnatural here; 歌 or 歌謡曲 would be more typical, and 歌 fits the blank just as well. |  |  |
| to take the place of | 誰が彼に代りますか。 | Who will take his place? | かわります | N3 L5 T5 C4 I2 — Slightly generic and terse question. |  |  |
| to invite | 風邪の時は無理をしないほうがいいから、人を招きません。 | Since it's better not to overdo it when you have a cold, I won't invite people. | まねきません | N2 L4 T4 C2 I2 — Logic linking cold and not inviting people feels forced/unnatural; blank could be filled by many verbs like 呼ぶ or 会う. |  |  |
| to judge | 警察は法律に従って人を裁きます。 | The police judge people according to the law. | さばきます | N3 L4 T3 C3 I3 — 裁く usually implies formal judicial judgment (by courts/judges), so 警察 as subject is a bit off; other verbs like 罰する could also fit the blank. |  |  |
| moisture | 部屋の湿気は嫌いですか。 | Do you dislike the moisture in the room? | しっけ | N3 L5 T5 C2 I3 — Many nouns (匂い, 音, 暑さ) could fill the blank, reducing recoverability. |  |  |
| truth | みんなは自然の真理を知りたいです。 | Everyone wants to know the truth of nature. | しんり | N3 L5 T4 C2 I3 — 自然の真理 is a bit unusual phrasing; 自然の摂理 is more common, and the blank could fit other words too. |  |  |
| majority | 彼はもう成年です。 | He is already an adult now. | せいねん | N3 L5 T4 C1 I1 — Generic sentence; many nouns could fill the blank. |  |  |
| selection | 面接は選考のためです。 | The interview is for selection purposes. | せんこう | N3 L5 T4 C4 I3 — Slightly stiff phrasing but interview context strongly cues 選考. |  |  |
| Act | 新しい法ができました。 | A new law was made. | ほう | N3 L5 T5 C2 I2 — 法 alone (vs 法律) is less natural for 'law'; blank could be many nouns (家、店、車 etc.). |  |  |
| Act | この法は難しいです。 | This law is difficult. | ほう | N2 L5 T4 C1 I2 — ほう is homophone with 方 (way/method), which is far more common—learner would likely guess 方 instead of 法. |  |  |
| Act | 法を守ってください。 | Please obey the law. | ほう | N3 L5 T5 C2 I2 — 法律を守る is more natural than 法を守る; blank also fits ルール、規則、約束 etc. |  |  |
| upper | うわ、雪がたくさん降っていますね。 | Whoa, a lot of snow is falling. | うわ | N4 L3 T2 C1 I2 — Target word is 上(うわ) meaning 'upper', but sentence uses うわ as an unrelated interjection; blank could be filled by many exclamations (わあ, おお, etc.), and the vocabulary is not actually taught. |  |  |
| upper | うわ、部屋がとても綺麗になりましたね。 | Whoa, the room has become so clean. | うわ | N4 L3 T2 C1 I2 — Same issue: うわ here is an exclamation, not the target word 上; cloze is not recoverable to the intended meaning and many interjections fit. |  |  |
| carelessly | 天気がいいから、うっかり窓を開けたままにしておきました。 | Since the weather was nice, I carelessly left the window open. | うっかり | N2 L5 T3 C3 I3 — Logically odd: leaving window open because weather is nice sounds intentional, not careless, creating a contradiction with うっかり. |  |  |
| to rob | 泥棒はお金を奪って逃げました。 | The thief robbed the money and ran away. | うばって | N4 L5 T3 C3 I3 — English phrasing 'robbed the money' is unnatural (should be 'stole the money'); also 盗んで/取って could fit the blank equally well. |  |  |
| to betray | 彼は約束を裏切りました。 | He betrayed his promise. | うらぎりました | N2 L5 T4 C3 I3 — 約束を裏切る is unnatural collocation; 約束を破る is the standard phrase for breaking a promise. |  |  |
| to be sold | 新しいセーターは売れますか。 | Does the new sweater sell well? | うれます | N4 L5 T3 C3 I2 — EN adds 'well' not present in Japanese |  |  |
| to cover | 寒いので頭を帽子で覆いたいです。 | Since it's cold, I want to cover my head with a hat. | おおいたい | N3 L5 T4 C3 I3 — Slightly unnatural phrasing; native speakers would more likely say 帽子をかぶる for wearing a hat. |  |  |
| tendency | 忙しい家族は朝御飯を食べない傾向があります。 | Busy families tend not to eat breakfast. | けいこう | N3 L5 T5 C3 I2 — '忙しい家族' is a slightly odd collocation; 習慣 also fits the blank well. |  |  |
| warning | 天気予報は台風の警告を出しました。 | The weather forecast issued a typhoon warning. | けいこく | N2 L5 T3 C3 I3 — For typhoon warnings, native speakers typically say 警報, not 警告; this collocation feels unnatural. |  |  |
| criminal case | これは大きい刑事事件です。 | This is a big criminal case. | けいじ | N3 L5 T4 C4 I1 — Generic 'これは...です' template sentence, low interest. |  |  |
| art | 美術館で芸術を見てください。 | Please look at the art in the museum. | げいじゅつ | N3 L5 T4 C2 I2 — '芸術を見る' is a slightly unnatural collocation; usually 美術品/作品 would be used, and many nouns could fit the blank. |  |  |
| abundant | この村は食料品が豊かです。 | This village is rich in food supplies. | ゆたか | N3 L5 T4 C3 I3 — 食料品が豊か is a bit unnatural; 食料が豊富 would be more idiomatic. |  |  |
| abundant | 彼の生活は豊かですか。 | Is his life abundant? | ゆたか | N4 L5 T3 C2 I3 — English 'abundant' is awkward for 生活; many adjectives (幸せ、楽) could fill the blank. |  |  |
| atmosphere | 大気の中に酸素がありますか。 | Is there oxygen in the atmosphere? | たいき | N3 L4 T4 C3 I2 — Slightly stiff phrasing; 大気中に is more natural; 空気 could also fit blank. |  |  |
| earth | 本が地に落ちました。 | The book fell to the ground. | ち | N2 L5 T4 C2 I2 — 地 alone sounds unnatural here; native speakers would use 地面 for 'ground'. |  |  |
| earth | 花の種を地に植えます。 | I plant flower seeds in the earth. | ち | N2 L5 T4 C2 I2 — 地 is unnatural for planting; 土 or 地面 would be used instead. |  |  |
| earth | 地の上を歩きましたか。 | Did you walk on the ground? | ち | N1 L5 T4 C2 I2 — 地の上 is not natural phrasing; 地面の上 is the standard expression. |  |  |
| will | 彼はまだ続ける意があるようだ。 | It seems he still has the will to continue. | い | N2 L4 T4 C2 I3 — 「意」単独で「意がある」とは通常言わず、「意志がある」が自然な表現。空欄には「意志」「気」など複数の語が当てはまり得る。 |  |  |
| will | あなたはやめる意がありますか。 | Do you have the will to quit? | い | N2 L4 T4 C2 I2 — 同様に「意がありますか」は不自然で、「意志」等が本来使われる表現。穴埋めの一意性が低い。 |  |  |
| a change | 異動の話を聞きましたか。 | Did you hear about the transfer? | いどう | N5 L2 T5 C2 I2 — Generic sentence; many nouns could fit the blank (話, ニュース, 結果, etc.). |  |  |
| nucleus | 彼の意見がこの計画の核になった。 | His opinion became the core of this plan. | かく | N3 L4 T5 C3 I3 — 核 alone is less common than 核心 for 'core', but acceptable; other words like 中心 could also fit the blank. |  |  |
| nucleus | この会議の核は何ですか。 | What is the core of this meeting? | かく | N3 L4 T5 C2 I2 — Generic sentence; many words (中心, テーマ, 目的) could fill the blank. |  |  |
| nucleus | 問題の核を見つけましょう。 | Let's find the core of the problem. | かく | N3 L4 T5 C2 I2 — Blank could be filled by 原因, 本質, 核心 among others, reducing recoverability. |  |  |
| status | その格に合う服を選んでください。 | Please choose clothes that suit that status. | かく | N3 L4 T4 C2 I2 — Generic sentence; blank could be サイズ, 好み, 体型, etc. |  |  |
| status | 彼と私は格が違いますか。 | Is his status different from mine? | かく | N3 L4 T4 C2 I2 — Phrasing as a question is slightly unnatural; many words could fill the blank (意見, 性格, レベル). |  |  |
| mechanism | 政府の機構について調べている。 | I'm researching the government's mechanism. | きこう | N3 L4 T2 C3 I3 — Here 機構 more naturally means 'organization/agency' (e.g. government body) rather than 'mechanism', so the English translation is misleading. |  |  |
| member | もしもし、この店の会員になりましたか。 | Hello, did you become a member of this store? | かいいん | N2 L5 T5 C3 I2 — もしもし with an unrelated question about store membership feels odd/unnatural pairing. |  |  |
| member | 一緒にテニスの会員になりませんか。 | Shall we become tennis members together? | かいいん | N3 L5 T4 C3 I2 — 'テニスの会員' is slightly unnatural; 'テニスクラブの会員' would be more idiomatic. |  |  |
| lover | もしもし、あなたに恋人がいますか。 | Hello, do you have a lover? | こいびと | N2 L5 T5 C2 I2 — もしもし usage feels odd/unnatural for this context; blank could be filled by 彼氏/彼女 as well. |  |  |
| individual | 個人の部屋が欲しいです。 | I want my own individual room. | こじん | N3 L5 T4 C2 I2 — 自分の部屋 would be more natural; 個人 here is not the only word that fits the blank, lowering recoverability. |  |  |
| environment | 子供のために自然が多い環境で住みたいです。 | I want to live in an environment with a lot of nature for my child. | かんきょう | N3 L4 T5 C4 I4 — Slightly unnatural particle use: 環境で住む is less idiomatic than 環境に住む. |  |  |
| trace | 机の上にコーヒーの跡が付いています。 | There's a coffee trace on the desk. | あと | N4 L5 T3 C3 I3 — English 'coffee trace' is awkward; natural translation would be 'coffee stain/ring'. |  |  |
| trace | テーブルの跡を拭いてください。 | Please wipe off the trace on the table. | あと | N2 L5 T3 C2 I2 — Vague sentence—unclear what kind of mark is being referred to, making it hard to uniquely recover 跡 and feels unnatural as a request. |  |  |
| error | 切符の誤りをすぐに伝えてください。 | Please report the ticket error immediately. | あやまり | N3 L4 T4 C3 I3 — 「切符の誤り」is an unusual collocation; 間違い would be more natural. |  |  |
| a certain... | 或る人が駅で待っていました。 | A certain person was waiting at the station. | ある | N2 L4 T5 C3 I3 — 或る is an archaic/rare kanji rendering; modern Japanese almost always writes this as ある. |  |  |
| stability | 電車の時間はまだ安定していません。 | The train schedule isn't stable yet. | あんてい | N3 L4 T4 C3 I3 — Slightly unnatural phrasing; more common to say 'ダイヤが乱れている'. |  |  |
| force | 風が強い勢いで吹いていました。 | The wind was blowing with great force. | いきおい | N3 L5 T5 C4 I3 — 風が強い勢いで is slightly redundant; 強く吹いていました would be more natural. |  |  |
| to be drowned | 子供が海で溺れて、大変でした。 | A child nearly drowned in the sea, and it was terrible. | おぼれて | N4 L5 T3 C3 I3 — EN says 'nearly drowned' but Japanese implies actual drowning; also other verbs (e.g., 溺れる vs 迷子になる) could fit the blank. |  |  |
| skin | その靴は牛の皮でできています。 | Those shoes are made of cow leather. | かわ | N3 L5 T4 C4 I3 — For leather goods, 革 is the conventional kanji rather than 皮, though both are read かわ. |  |  |
| disappointment | 天気が悪くて、失望しました。 | I was disappointed because the weather was bad. | しつぼうしました | N3 L5 T5 C3 I3 — 失望 sounds slightly strong for weather; がっかり would be more natural, so blank isn't uniquely forced. |  |  |
| funds | 彼は仕事のために資本を集めました。 | He gathered funds for his work. | しほん | N3 L4 T4 C2 I2 — 資本 is odd for '仕事のために'; usually used for starting a business, not general work. |  |  |
| funds | もっと資本が欲しいです。 | I want more funds. | しほん | N3 L4 T4 C2 I1 — Too generic; many nouns could fill the blank (お金, 資金, 時間, etc.). |  |  |
| still | なお、会議は三時に始まります。 | Also, the meeting will start at three o'clock. | なお | N4 L2 T3 C2 I2 — なお here means 'additionally/furthermore' (a discourse connector), not 'still'; also またちなみに could fill the blank equally well, and this usage is above N3. |  |  |
| still | なお、宿題は明日までです。 | Also, the homework is due by tomorrow. | なお | N4 L2 T3 C2 I2 — Same issue as above: なお is used as a formal connector meaning 'additionally', not the target meaning 'still', and other connectors could fit the blank. |  |  |
| to go over | 来月、新しいアパートに越す予定だ。 | I plan to move to a new apartment next month. | こす | N3 L4 T5 C3 I3 — 引っ越す is more common than plain 越す for moving apartments. |  |  |
| to go over | この橋を越してまっすぐ行ってください。 | Please cross this bridge and go straight. | こして | N3 L4 T4 C2 I2 — 渡って would be the more natural verb for crossing a bridge, reducing cloze uniqueness. |  |  |
| proposal | 一緒に旅行する提案をしませんか。 | Shall we make a proposal to travel together? | ていあん | N2 L4 T2 C2 I2 — Awkward phrasing '旅行する提案をしませんか' is unnatural; more natural would be '旅行の提案をしませんか' or just '一緒に旅行しませんか', and EN translation doesn't match this structure well. |  |  |
| pleased to meet you | 今度会う時は、どうぞよろしく。 | When we meet next time, pleased to meet you. | どうぞよろしく | N2 L5 T3 C3 I2 — どうぞよろしく is typically used at first meeting, not for 'next time we meet', making the sentence slightly unnatural. |  |  |
| family name | 電話でその人の氏を聞きました。 | I asked for that person's family name on the phone. | し | N2 L3 T5 C2 I2 — 氏 alone rarely used this way in daily speech; 名字/苗字/名前 could equally fill the blank. |  |  |
| family name | 氏が分からないから、名前だけ書きました。 | Since I don't know the family name, I only wrote the given name. | し | N3 L3 T5 C4 I3 — Contrast with 名前 helps narrow the blank, though 苗字/名字 could also fit. |  |  |
| family name | ここに氏を書いてください。 | Please write your family name here. | し | N2 L3 T5 C2 I1 — Generic template sentence; ambiguous which word for 'family name' is intended. |  |  |
| queen | 女王だから、有名です。 | Since she is the queen, she is famous. | じょおう | N3 L5 T5 C2 I2 — Generic template sentence; many nouns could fill the blank (e.g., 王様, スター, 有名人). |  |  |
| reading | この本の読みはとても面白いです。 | The reading of this book is very interesting. | よみ | N3 L5 T4 C2 I3 — '読み' here is ambiguous (could mean interpretation vs way of reading); many other nouns (話, 内容, 展開) could fit the blank. |  |  |
| labor | 父は工場で労働しています。 | My father labors at the factory. | ろうどう | N3 L5 T4 C3 I2 — 働いています would be more natural than 労働しています; other words like 仕事 could also fill the blank. |  |  |
| labor | 今日は労働しません。休みです。 | I won't work today. It's a day off. | ろうどうしません | N2 L5 T3 C3 I2 — 労働しません sounds unnatural; 仕事はしません or 働きません would be more common. |  |  |
| fairness | 電車の切符は公平な値段だから、みんな同じ料金を払います。 | Train tickets are a fair price, so everyone pays the same fee. | こうへい | N2 L5 T4 C2 I2 — 公平な値段 sounds unnatural; a native would say 妥当な/同じ値段, and several words could fill the blank. |  |  |
| quite | この駅はごく近いですか。 | Is this station quite close? | ごく | N2 L5 T4 C2 I2 — Sounds unnatural as a question; many adverbs could fill the blank. |  |  |
| highest | 今日の気分は最高ですか。 | Is your mood the best today? | さいこう | N3 L5 T4 C2 I2 — Slightly unnatural phrasing; blank could be filled by いい, どう, 悪い, etc. |  |  |
| least | 熱があって、気分が最低だから、病院へ行きます。 | I have a fever, so my mood is the worst, and I'll go to the hospital. | さいてい | N3 L4 T3 C2 I3 — Uses 最低 in its slang sense ('terrible') rather than the 'least/lowest' meaning implied by the target gloss, and other words like 悪い could fit the blank. |  |  |
| fortunately | 幸い、財布が見つかりましたか。 | Fortunately, did you find your wallet? | さいわい | N2 L4 T3 C2 I2 — 幸い doesn't fit naturally with a question; it's normally used to state a fortunate fact, not ask about one. |  |  |
| just like | 外はまるで冬のように寒いですか。 | Is it cold outside just like winter? | まるで | N2 L4 T3 C3 I2 — Odd to phrase a simile description as a yes/no question; unnatural. |  |  |
| to differ | 国によって習慣が異なります。 | Customs differ depending on the country. | ことなります | N2 L4 T5 C4 I4 — reading_kana has a typo 'くににによって' instead of 'くにによって', capping naturalness |  |  |
| service | このレストランはサービスがいいです。 | This restaurant has good service. | さあびす | N2 L5 T5 C3 I2 — Reading kana should be さーびす (long vowel), not さあびす; also a generic template sentence and other words like 味/雰囲気 could fit the blank. |  |  |
| service | 電話のサービスについて質問があります。 | I have a question about the phone service. | さあびす | N2 L5 T5 C4 I3 — Reading kana should be さーびす (long vowel), not さあびす. |  |  |
| hello | 電話に出たら、いつも「こんにちは」と言います。 | Whenever I answer the phone, I always say "hello." | こんにちは | N2 L5 T4 C2 I3 — Answering the phone in Japanese typically uses もしもし, not こんにちは, making this unnatural and ambiguous for cloze. |  |  |
| to shout | 危ないから、そんなに叫ばないでください。 | It's dangerous, so please don't shout so much. | さけばない | N3 L5 T4 C3 I3 — Logic linking danger to shouting is a bit odd; other verbs like 騒ぐ or 動く could fit the blank. |  |  |
| to shout | 電話で彼女は大きい声で叫びました。 | She shouted loudly on the phone. | さけびました | N3 L5 T5 C3 I2 — Context could also fit verbs like 話す or 泣く, reducing uniqueness of blank. |  |  |
| to point | 母はテーブルの上の皿を指しました。 | My mother pointed at the plate on the table. | さしました | N2 L5 T5 C3 I2 — Reading kana 'てえぶる' should be 'てーぶる', naturalness capped due to incorrect reading. |  |  |
| to invite (someone to do something with | 今度、一緒に食事に誘いませんか。 | Shall we invite them to a meal together sometime? | さそいません | N4 L5 T2 C3 I3 — Translation adds 'them' incorrectly; 誘いませんか is inviting the listener, not a third party. |  |  |
| to invite (someone to do something with | 彼女をパーティーに誘いたいです。 | I want to invite her to the party. | さそいたい | N2 L5 T5 C4 I3 — Reading kana for パーティー is wrong: should be ぱーてぃー, not ぱあてぃい. |  |  |
| to measure | 毎朝、熱を計ります。 | I take my temperature every morning. | はかります | N3 L5 T5 C4 I3 — 熱を測る is the more conventional kanji for temperature, though 計る is understandable. |  |  |
| to measure | 荷物の重さは計りません。 | I won't measure the weight of the luggage. | はかりません | N3 L5 T5 C4 I3 — 重さを量る is the more standard kanji choice for measuring weight. |  |  |
| to be disconnected | パソコンのボタンが外れました。 | The button on the computer came off. | はずれました | N3 L5 T5 C3 I3 — パソコンのボタン is a slightly odd collocation; 取れる could also fit the blank. |  |  |
| to part | 商品を棚から少し離して置きます。 | I place the products a little away from the shelf. | はなして | N3 L5 T3 C4 I3 — Translation implies moving products away from the shelf, but original likely means spacing items apart on the shelf. |  |  |
| again | 友達は再び来ますか。 | Will your friend come again? | ふたたび | N3 L4 T5 C3 I3 — 再び feels slightly formal for a casual question; また would also fit the blank. |  |  |
| suddenly | ふと新しい趣味を始めたくなりました。 | I suddenly felt like starting a new hobby. | ふと | N3 L5 T4 C3 I3 — ふと with a volitional desire (〜たくなる) is slightly unnatural; 急に fits better here |  |  |
| portion | この文章の部分が難しいです。 | This portion of the passage is difficult. | ぶぶん | N3 L5 T5 C4 I2 — Slightly unnatural without specifying which part, e.g. 'この部分' would be more natural than 'の部分'. |  |  |
| portion | 一緒にこの部分を習いませんか。 | Shall we learn this part together? | ぶぶん | N3 L5 T5 C2 I2 — Many nouns could fit the blank in this generic template sentence. |  |  |
| assistance | 困っている時は、いつでも援助してください。 | Please give me assistance whenever I'm in trouble. | えんじょしてください | N3 L4 T4 C2 I2 — Beeping the whole phrase 援助してください instead of just 援助 reduces cloze specificity; 助けて/手伝って could also fit. |  |  |
| mutual | 私たちはお互いに手伝っています。 | We help each other. | おたがい | N3 L5 T4 C3 I2 — 手伝っています alone sounds slightly unnatural without an object; 手伝い合っています would be more idiomatic. |  |  |
| to think of | 急に用事を思い付いたから、出かけます。 | I suddenly thought of an errand, so I'm going out. | おもいついた | N2 L4 T4 C3 I3 — 思い付く with 用事 is unnatural collocation; 用事を思い出す/用事ができる is more idiomatic. |  |  |
| aspect | 経済は今、回復の相を見せている。 | The economy is now showing signs of recovery. | そう | N3 L2 T4 C2 I3 — 相 in this abstract sense is advanced vocabulary beyond N3; many words (兆候, 様子, 傾向) could fill the blank. |  |  |
| aspect | 彼の顔には疲れの相が出ている。 | A tired look shows on his face. | そう | N3 L2 T4 C2 I3 — Same issue: 相 here is a formal/literary usage above N3 level, and 様子/色/表情 could also fit the blank. |  |  |
| aspect | この事件は複雑な相を持っている。 | This incident has a complicated aspect. | そう | N3 L2 T4 C2 I3 — Abstract use of 相 exceeds N3 scope; 面/様相/性格 etc. could also complete the sentence. |  |  |
| creation | 画家は新しい物を創造する仕事です。 | A painter's job is to create new things. | そうぞう | N3 L4 T4 C2 I3 — Grammar is a bit awkward (画家は...仕事です mismatches subject/predicate); also 創造 and 想像 are homophones, so 想像する fits the blank almost as well, reducing recoverability. |  |  |
| season (advanced) | 春は陽気が暖かくてすばらしいです。 | In spring the weather is warm and wonderful. | ようき | N3 L5 T4 C3 I3 — Slightly awkward phrasing (陽気が暖かい); gloss 'season' mismatches actual meaning of 陽気. |  |  |
| quarterly | 季刊の発行は年に四回です。 | Quarterly publication comes out four times a year. | きかん | N3 L5 T5 C5 I3 — Slightly redundant phrasing pairing 季刊 with 年に四回, but otherwise clear and accurate. |  |  |
| at once | 直ちに医者を呼んでください。 | Please call a doctor immediately. | ただちに | N5 L2 T5 C2 I3 — 直ちに is above N3 ceiling; many adverbs (すぐに, いますぐ) could fill blank. |  |  |
| at once | 事故が起きたら直ちに警察に連絡します。 | If an accident happens, I will contact the police immediately. | ただちに | N5 L2 T5 C2 I4 — 直ちに exceeds N3 level; synonyms like すぐに also fit context. |  |  |
| at once | 直ちに会議室へ来てください。 | Please come to the meeting room immediately. | ただちに | N5 L2 T5 C2 I3 — Above N3 grammar level; blank could be filled by several similar adverbs. |  |  |
| future (life tense) | 未来の科学者になりたいです。 | I want to become a scientist in the future. | みらい | N3 L5 T3 C3 I2 — 未来の科学者 sounds like 'a futuristic scientist' rather than 'a scientist in the future'; 将来 would be more natural here. |  |  |
| nothing | 長い旅行の後、お金は無になった。 | After the long trip, the money became nothing. | む | N2 L4 T4 C2 I2 — 無になる is unnatural for money being spent; more natural would be お金がなくなった/使い果たした, and other words could fit the blank. |  |  |
| mystery | その不思議な話をもっと聞きたいです。 | I want to hear more of that mysterious story. | ふしぎ | N2 L5 T4 C3 I3 — reading_kana is missing a mora ('もっときたいです' should be 'もっとききたいです'), so naturalness capped. |  |  |
| discomfort | 足が痛くて、歩くのが不自由です。 | My leg hurts, so walking is difficult. | ふじゆう | N4 L5 T3 C3 I3 — EN 'difficult' slightly mismatches 不自由's nuance of 'inconvenient/impaired' |  |  |
| the aged | 電車で老人に席をあげませんか。 | Shall we give up our seat to the elderly person on the train? | ろうじん | N2 L4 T4 C3 I3 — あげる is an unnatural verb choice for giving up a seat; 譲る would be more natural. |  |  |
| we | 我々の家族は毎年旅行します。 | Our family travels every year. | われわれ | N3 L5 T5 C2 I2 — 我々 sounds oddly formal/business-like for talking about one's own family; 私たち would be more natural, and the blank isn't uniquely recoverable. |  |  |
| furthermore | スープに更に塩を入れました。 | I added even more salt to the soup. | さらに | N2 L5 T5 C3 I2 — Reading of スープ written as 'すうぷ' instead of 'すーぷ', a transcription error; also もっと could fit the blank equally well. |  |  |
| uproar | 隣の家で大きい騒ぎがありました。 | There was a big uproar at the house next door. | さわぎ | N3 L5 T5 C3 I3 — 大きな騒ぎ would sound more natural than 大きい騒ぎ; blank could also be filled by other nouns like 事件 or 音。 |  |  |
| uproar | 子供たちの騒ぎは止まりませんでした。 | The children's commotion didn't stop. | さわぎ | N3 L5 T5 C3 I3 — 止まる sounds slightly off for noise/commotion; やむ would be more idiomatic, and the blank could fit other nouns like 泣き声 or 笑い声。 |  |  |
| used | 中古の車を買いましたから、安かったです。 | Since I bought a used car, it was cheap. | ちゅうこ | N2 L5 T3 C2 I3 — Causal logic is backwards/odd: buying a used car being the reason it was cheap reverses natural reasoning; also many other adjectives could fill the blank. |  |  |
| used | これは中古のテレビではありません。 | This is not a used TV. | ちゅうこ | N3 L5 T5 C2 I1 — Generic template sentence; blank could be filled by many adjectives (新しい, 高い, etc.). |  |  |
| used | 中古の自転車を使ってください。 | Please use the used bicycle. | ちゅうこ | N2 L5 T4 C2 I2 — Slightly odd request without context explaining why a used bike specifically; blank not uniquely recoverable. |  |  |
| direct | 母は直接来ませんでした。 | My mother didn't come directly. | ちょくせつ | N2 L5 T4 C2 I2 — Sentence feels unnatural/ambiguous without more context about how mother didn't come directly. |  |  |
| painful | 遅刻すると、いつも辛いです。 | Whenever I'm late, it's always painful. | つらい | N2 L5 T3 C2 I2 — unnatural context; being late doesn't clearly cause 'painful' feeling, other words like 恥ずかしい fit better |  |  |
| appropriate | この料理には適切な塩が必要です。 | This dish needs an appropriate amount of salt. | てきせつ | N2 L5 T3 C3 I3 — Natural phrasing would be 適量な塩 (appropriate amount), not 適切な塩; translation implies amount not present in Japanese. |  |  |
| ingredients | このカレーの材料は何ですか。 | What are the ingredients of this curry? | ざいりょう | N2 L5 T5 C5 I3 — Reading for カレー should use long vowel mark (かれー), not かれえ. |  |  |
| produce | 台風で作物がたくさん壊れてしまいました。 | Many crops were destroyed by the typhoon. | さくもつ | N3 L4 T4 C3 I3 — 壊れる sounds slightly odd for crops damaged by typhoon; だめになる/被害を受ける would be more natural. |  |  |
| beans | 豆のスープを一緒に作りましょう。 | Let's make bean soup together. | まめ | N2 L5 T5 C2 I3 — Reading for スープ written as 'すうぷ' instead of the standard 'すーぷ' with a long vowel mark, so naturalness capped at 2; also many other foods could fill the blank (野菜, 肉, etc.). |  |  |
| beans | この豆は田で取れたものですか。 | Were these beans harvested in the field? | まめ | N3 L5 T3 C2 I3 — 田 (rice paddy) is an odd place to harvest 豆; 米 (rice) would be the more natural word here, weakening both accuracy and cloze uniqueness. |  |  |
| meals | 今夜は簡単な飯を食べようと思います。 | I think I'll eat a simple meal tonight. | めし | N3 L5 T5 C2 I2 — Mixing casual 飯 with polite です/ます is slightly awkward; several words (ご飯, 食事) could fill the blank. |  |  |
| meals | もう飯は食べましたか。 | Have you eaten yet? | めし | N3 L5 T5 C2 I2 — Register mismatch between casual 飯 and polite ました; ご飯/食事 could also fill the blank. |  |  |
| wine | 今晩、赤いワインを飲みませんか。 | Would you like to drink some red wine tonight? | わいん | N2 L4 T4 C3 I3 — 赤いワイン is unnatural; natives say 赤ワイン as a compound noun rather than using the い-adjective form. |  |  |
| seasoning | この料理は醤油を加味して作ります。 | This dish is made by adding soy sauce for flavor. | かみして | N2 L3 T2 C2 I2 — 加味する actually means 'to factor in/take into account' in modern Japanese, not literal cooking seasoning; using it for adding soy sauce is unnatural and could confuse the true meaning of the word. |  |  |
| seasoning | スープに何を加味しますか。 | What do you add for flavor to the soup? | かみします | N2 L3 T2 C2 I2 — Same issue: 加味する is not used for literally seasoning food; a native speaker would say 味付けする or 加える here. |  |  |
| seasoning | もっと味を加味したいから、醤油を足します。 | Since I want to add more flavor, I'll add some soy sauce. | かみしたい | N2 L3 T2 C2 I2 — 加味 misapplied to literal flavor-adding; correct usage would be abstract (e.g., 加味して判断する), making this example misleading for learners. |  |  |
| sudden | 子供の背が急激に伸びました。 | My child's height suddenly grew. | きゅうげき | N3 L4 T3 C3 I3 — English phrasing is awkward ('height suddenly grew'); 急激に伸びる for height is a bit unnatural, 急に伸びる more common. |  |  |
| rapid | 電車の速度が急速に上がりました。 | The train's speed rapidly increased. | きゅうそく | N3 L5 T5 C3 I3 — 急に or 突然 could also fit; 急速 slightly unusual for instantaneous speed change. |  |  |
| rapid | 時間がないので、急速に準備をしてください。 | Since there's no time, please prepare quickly. | きゅうそく | N2 L5 T3 C2 I2 — 急速 doesn't naturally collocate with 準備; 急いで or 早く would be more natural, making the blank ambiguous. |  |  |
| skillful | 母は料理が器用です。 | My mother is skillful at cooking. | きよう | N2 L5 T3 C3 I2 — 器用 is typically used for hand-dexterity (手先が器用), not for cooking skill; 上手 would be more natural, so many other words could fill the blank. |  |  |
| fear | 子供は暗い部屋で恐怖を感じます。 | Children feel fear in a dark room. | きょうふ | N3 L5 T4 C3 I2 — Translation slightly mismatches singular/plural nuance; blank could fit other emotion nouns. |  |  |
| powerful | 強力な風で電車が止まりました。 | The train stopped due to powerful wind. | きょうりょく | N3 L5 T5 C3 I3 — 強い風 is more natural collocation than 強力な風. |  |  |
| sound asleep | 疲れていたので、ぐっすり寝てしまいました。 | I was tired, so I ended up sleeping soundly and overslept. | ぐっすり | N5 L4 T3 C4 I4 — English translation adds 'overslept' which isn't in the Japanese sentence. |  |  |
| so to speak | 彼女は言わば有名ですか。 | Is she, so to speak, famous? | いわば | N2 L4 T4 C2 I2 — 言わば in a question sounds unnatural; other adverbs like 本当に would fit equally well. |  |  |
| so to speak | あの夏は言わば特別でした。 | That summer was, so to speak, special. | いわば | N3 L4 T4 C2 I3 — Context doesn't strongly force 言わば over words like 本当に or実は. |  |  |
| the so-called | 彼はいわゆる有名な人ですか。 | Is he what you'd call a famous person? | いわゆる | N3 L5 T4 C3 I3 — いわゆる+有名な人 is a bit awkward collocation; other adverbs could fit the blank. |  |  |
| impression | いい印象を見せたいです。 | I want to show a good impression. | いんしょう | N2 L5 T2 C2 I2 — 印象を見せる is unnatural collocation; 印象を与える would be correct, and translation reflects the awkward phrasing. |  |  |
| to doubt | なぜ彼を疑いますか。 | Why do you doubt him? | うたがいます | N3 L5 T5 C2 I3 — blank could be filled by many verbs like 助ける/呼ぶ |  |  |
| fortune | 試験の結果は運が良かったです。 | The exam result was due to good luck. | うん | N4 L5 T3 C4 I3 — Translation slightly loose ('due to good luck' vs literal 'the result was fortunate'). |  |  |
| influence | 台風は交通に影響がありました。 | The typhoon had an influence on traffic. | えいきょう | N3 L5 T5 C3 I2 — Slightly awkward; 影響を与えました would be more natural, but other words like 被害 could also fit blank. |  |  |
| energy | 運動をするとエネルギーを使います。 | When you exercise, you use energy. | えねるぎい | N2 L5 T5 C5 I3 — Reading should be えねるぎー (long vowel), not えねるぎい; naturalness capped. |  |  |
| energy | 授業中はエネルギーがありませんでした。 | I had no energy during class. | えねるぎい | N2 L5 T5 C3 I3 — Reading should be えねるぎー (long vowel), not えねるぎい; also 元気/やる気 could fit the blank equally well. |  |  |
| energy | 地球のエネルギーはどのくらいですか。 | How much energy does the earth have? | えねるぎい | N2 L5 T4 C4 I2 — Reading should be えねるぎー (long vowel), not えねるぎい; the sentence itself is an odd/uncommon question about the earth's energy. |  |  |
| pin | ピンが見つからなくて、会社に遅れました。 | I couldn't find the pin, so I was late for work. | ぴん | N2 L5 T4 C1 I2 — Unclear why a missing pin would cause lateness for work; many other words could fill the blank (key, wallet, ticket, etc.), and the scenario feels forced. |  |  |
| flute | 笛が鳴らなくて、困りました。 | The whistle wouldn't sound, and I was troubled. | ふえ | N4 L5 T3 C2 I2 — EN translates 笛 as 'whistle' not 'flute', causing mismatch; blank could be many noise-making objects (alarm, bell, phone). |  |  |
| writing brush | この筆を使ってください。 | Please use this brush. | ふで | N3 L5 T5 C2 I1 — Generic template sentence; blank could be almost any object. |  |  |
| writing brush | 筆が見つからなくて、宿題ができませんでした。 | I couldn't find my brush, so I couldn't do my homework. | ふで | N3 L5 T5 C3 I4 — Slightly odd that lacking a brush prevents all homework, but context is engaging; other writing tools could also fit the blank. |  |  |
| branch store | あなたはあの店の支店で働いていますか。 | Do you work at that store's branch? | してん | N3 L5 T5 C3 I3 — 'あなたは' feels unnatural; blank could also be filled by other words like 本店. |  |  |
| resident | 静かな住宅に住みたいです。 | I want to live in a quiet house. | じゅうたく | N3 L5 T3 C2 I2 — 住宅 alone sounds slightly unnatural here; 住宅街 or 家 would be more common, and many words fit the blank. |  |  |
| resident | 駅から遠いから、この住宅は安いです。 | Because it's far from the station, this house is cheap. | じゅうたく | N3 L5 T3 C2 I2 — Using 住宅 to mean 'this house' is a bit stiff; 家/物件 could equally fill the blank. |  |  |
| I beg your pardon | すぐにごめんなさいと言いたいです。 | I want to say 'I'm sorry' right away. | ごめんなさい | N3 L5 T4 C2 I2 — Many other words (すみません, ありがとう, etc.) could fit the blank, reducing recoverability. |  |  |
| tradition | このレストランは伝統の料理を出します。 | This restaurant serves traditional food. | でんとう | N2 L4 T4 C2 I2 — 伝統の料理 sounds unnatural; 伝統的な料理 would be more natural, and 名物/地元 could also fit blank |  |  |
| identity | これとそれは同一ですか。 | Are this one and that one identical? | どういつ | N3 L3 T5 C2 I2 — Very generic, blank could be filled by many words like 同じ. |  |  |
| unintentional | 景色がきれいで思わず写真を撮ってしまいました。 | The scenery was so beautiful that I unintentionally took a photo. | おもわず | N5 L4 T3 C4 I4 — 'Unintentionally took a photo' slightly mistranslates the nuance of 'couldn't help but take a photo'. |  |  |
| about | 空港までおよそどのくらいかかりますか。 | About how long does it take to get to the airport? | およそ | N2 L5 T4 C3 I3 — およそ combined with どのくらい is redundant/unnatural since both express approximation; a native speaker would drop one. |  |  |
| training | 今朝トレーニングをしていて、遅れました。 | I was training this morning, so I was late. | とれえにんぐ | N2 L5 T5 C3 I4 — Reading kana incorrect: should be とれーにんぐ (long vowel ー), not とれえにんぐ. |  |  |
| training | 毎日トレーニングをしてください。 | Please do training every day. | とれえにんぐ | N2 L5 T5 C2 I2 — Reading kana incorrect: should be とれーにんぐ (long vowel ー), not とれえにんぐ; sentence is generic and blank could fit many activities (運動, 勉強, etc.). |  |  |
| agriculture | 昔、彼は農業を習いました。 | Long ago, he studied agriculture. | のうぎょう | N2 L5 T4 C2 I2 — 習う doesn't collocate naturally with 農業; 学ぶ or 営む would be more idiomatic, and many nouns could fill the blank. |  |  |
| pilot | あのパイロットは飛行機を運転しています。 | That pilot is flying the airplane. | ぱいろっと | N2 L4 T4 C4 I3 — 運転 is unnatural for flying a plane; 操縦 would be the natural verb. |  |  |
| doctorate | 博士に質問してください。 | Please ask the doctor a question. | はかせ | N4 L5 T2 C2 I2 — EN translates 博士 as 'doctor' (medical), which conflicts with the target meaning 'doctorate/PhD holder'; blank is also easily filled by other nouns like 先生. |  |  |
| sale | この商品を販売してください。 | Please sell this product. | はんばい | N3 L5 T4 C3 I2 — Sounds slightly formal/business-like for a direct request; 売ってください is more common. |  |  |
| seriousness | あなたはテニスを真剣にしていますか。 | Are you doing tennis seriously? | しんけん | N3 L5 T5 C3 I3 — Slightly stilted phrasing but understandable; blank could be filled by similar adverbs. |  |  |
| seriousness | 電話で真剣に話したいです。 | I want to talk seriously on the phone. | しんけん | N2 L5 T4 C2 I2 — Sentence feels unnatural/awkward combination of 電話で and 真剣に話したい, and blank could fit several adverbs. |  |  |
| artificial | この花は人工ですが、とても綺麗です。 | This flower is artificial, but it's very beautiful. | じんこう | N2 L4 T4 C2 I2 — 人工 alone as a predicate for a flower sounds unnatural; 造花 or 人工の花 would be more natural, and many other words could fill the blank. |  |  |
| artificial | 電話で人工の湖について調べたいです。 | I want to look into the artificial lake on the phone. | じんこう | N2 L4 T3 C3 I2 — The phone reference feels arbitrary and makes the sentence awkward; 'on the phone' doesn't fit naturally with researching a lake. |  |  |
| serious | 先生に深刻な質問をしたいです。 | I want to ask the teacher a serious question. | しんこく | N2 L5 T4 C2 I2 — 深刻な質問 is an unnatural collocation; 難しい/重要な would be more typical, hurting both naturalness and cloze uniqueness. |  |  |
| title | レポートの題を教えてください。 | Please tell me the title of the report. | だい | N2 L5 T5 C4 I2 — reading_kana for レポート should be れぽーと (long vowel), not れぽうと |  |  |
| contrast | 二つのデータを対照して調べました。 | I compared the two sets of data in contrast. | たいしょう | N3 L4 T3 C3 I3 — reading for データ should be 'でーた', not 'でえた'; 対照して sounds slightly stiff, 比較して is more common. |  |  |
| contrast | この二つの色は対照になりません。 | These two colors don't form a contrast. | たいしょう | N3 L4 T4 C3 I3 — 「対照になりません」is a bit unnatural; 対照的ではない is more common, and 対比 could also fit the blank. |  |  |
| to dawn | 空が明けてから、駅へ歩きました。 | After dawn broke, I walked to the station. | あけて | N2 L4 T4 C3 I3 — 空が明ける is unnatural; typically 夜が明ける or 空が白む is used. |  |  |
| un | 試験の結果は「不」でした。 | The exam result was a "fail". | ふ | N2 L3 T3 C2 I2 — 「不」alone isn't a natural grade term; should be「不可」 |  |  |
| un | このテストの点では「不」になりますか。 | Will this test score become a "fail"? | ふ | N2 L3 T3 C2 I2 — Same issue: 不 alone is unnatural for 'fail', normally 不可 |  |  |
| un | 「不」を取りたくないので、毎日頑張ります。 | Since I don't want to get a "fail", I do my best every day. | ふ | N2 L3 T3 C2 I2 — 不 alone as 'fail' is unnatural; 不可 is the standard term |  |  |
| to warm | スープが冷たいから、温めます。 | Since the soup is cold, I'll warm it up. | あたためます | N2 L5 T5 C5 I4 — Reading 'すうぷ' is incorrect for スープ; should be 'すーぷ' with long vowel mark. |  |  |
| to treat | 子供はナイフを扱いません。 | Children don't handle knives. | あつかいません | N3 L5 T4 C2 I2 — 使う would fit equally well or more naturally, weakening cloze uniqueness |  |  |
| death | 事故による死が増えています。 | Deaths caused by accidents are increasing. | し | N3 L5 T4 C3 I3 — 死者(deaths) would be more natural than 死 here, slightly awkward phrasing. |  |  |
| death | 台風のニュースで死という言葉を聞きました。 | I heard the word 'death' in the typhoon news. | し | N2 L4 T4 C2 I2 — Unnatural context; many other words could fill the blank (e.g., 警報, 避難). |  |  |
| sense of sight | 仕事では視覚が大切です。 | Sight is important in this job. | しかく | N3 L5 T5 C2 I2 — Blank could be filled by many words (集中力, 経験, etc.), not strongly forced. |  |  |
| sense of sight | 目が悪い人は視覚に頼ります。 | People with poor eyes rely on their sense of sight. | しかく | N2 L5 T2 C2 I2 — Logically inconsistent: people with poor eyesight would rely less, not more, on sight. |  |  |
| well (used when making a modest or | まあ、今日は寒いですね。 | Well, it's cold today, isn't it. | まあ | N3 L5 T4 C2 I1 — まあ doesn't add the modest/qualified nuance here; generic filler with weak clue for blank. |  |  |
| well (used when making a modest or | まあ、料理は美味しいですね。 | Well, the food is delicious, isn't it. | まあ | N3 L5 T4 C2 I2 — Plausible but generic; many discourse fillers could fit the blank equally well. |  |  |
| increasingly | 彼はギターがますます上手になりました。 | He got increasingly better at guitar. | ますます | N3 L5 T5 C2 I2 — reading kana 'ぎたあ' is incorrect for ギター (should be ぎたー); also だんだん/どんどん fit equally well |  |  |

## Needs manual authoring (147 words with no shippable sentence)

- n3-6b7f9cac family name (し)
- n3-c7ada80f four seasons (しき)
- n3-d323e83f payment (しきゅう)
- n3-5e6a08e4 fact (じじつ)
- n3-4c19bb18 expenditure (ししゅつ)
- n3-74aa260b week (しゅう)
- n3-e0d92579 come from (しゅっしん)
- n3-8c4e3776 moment (しゅんかん)
- n3-23fe0fab recognition (しょうにん)
- n3-38451dc4 figure (ず)
- n3-f6cd8fe6 the end of (すえ)
- n3-5e537b46 schedule (すけじゅうる)
- n3-d7955594 muscle (すじ)
- n3-7ac3f1fd for a long time (ずっと)
- n3-29bc6259 already (same as もう) (すでに)
- n3-b6dc7928 that is (すなわち)
- n3-2d26c2e9 true (せい)
- n3-5b5b91a5 sex (せい)
- n3-8d50e360 century (せいき)
- n3-2b53b3fa to love (あいする)
- n3-86d201cd helpless (あわれ)
- n3-b918d52e celebration (いわい)
- n3-240f50c9 upper (うわ)
- n3-bb90d011 energy (えねるぎい)
- n3-6f793d2d ogre (おに)
- n3-2accddd9 to lower (advanced) (おろす)
- n3-9aa0357b to surround (かこむ)
- n3-98d25485 action (かつどう)
- n3-7cffee2b first volume (かみ)
- n3-c674c178 maybe (かもしれない)
- n3-cc91f61e song (かよう)
- n3-4be78ed5 control (かんり)
- n3-06f79a3b member of the Diet (ぎいん)
- n3-798fc30c article (きじ)
- n3-bddbc94a engineer (ぎし)
- n3-b1af2fec reporter (きしゃ)
- n3-d0cb3dd9 chairman (ぎちょう)
- n3-82c1433e entry (きにゅう)
- n3-81e0c217 ex- (きゅう)
- n3-fb8890b6 salary (きゅうりょう)
- n3-bce14fc3 cloth (きれ)
- n3-44479ecf grade (くらい)
- n3-b62ce657 classic (くらしっく)
- n3-6fe9bcc2 gland (ぐらんど)
- n3-2ea999e0 to append (くわえる)
- n3-ce95a5ef to hold something in the mouth (くわえる)
- n3-1ae93df5 to join in (くわわる)
- n3-70b791de theater (げきじょう)
- n3-0fec1372 make-up (けしょう)
- n3-51061715 attack (こうげき)
- n3-25f84532 to spill (こぼす)
- n3-e26733b4 to overflow (こぼれる)
- n3-a09684d2 I beg your pardon (ごめんなさい)
- n3-5b486f53 to kill (ころす)
- n3-d919d9b1 service (さあびす)
- n3-cb7e5d31 to go against (さからう)
- n3-479fc0d7 helping (さかり)
- n3-adb2752b last (year) (さく)
- n3-703a566b to pour (drink) (さす)
- n3-53f70650 extra (よぶん)
- n3-3fed72ed bride (よめ)
- n3-aac712d9 hostel (りょう)
- n3-9bafdb02 laugh (わらい)
- n3-806d69e7 objection (い)
- n3-dfaf0a77 will (い)
- n3-4e38aa9c doctor's office (いいん)
- n3-9949b8bd a region (いったい)
- n3-df276536 clothing (いりょう)
- n3-d683ccab nucleus (かく)
- n3-fe967226 seasoning (かみ)
- n3-73d2c0a1 publication (かんこう)
- n3-b5978295 quarterly (きかん)
- n3-1faf48a7 group (ぐん)
- n3-34defe80 matter (けん)
- n3-07d20aa1 decrease (げんしょう)
- n3-2df077d2 restriction (こうそく)
- n3-9c86644d ruin (こうはい)
- n3-c2b9936a capitulation (こうふく)
- n3-17e98855 coins (こぜに)
- n3-d6565520 (depending on the circumstances) (ことによると)
- n3-a480c62d a work (さく)
- n3-0710845d the entire nation (ぜんこく)
- n3-34b5bdcb succession (そうぞく)
- n3-73fe1eca speed (そくど)
- n3-998cead4 bottom (そこ)
- n3-d3901e27 so (conj.) (そこで)
- n3-5dff126b sleeve (そで)
- n3-38a891db to be furnished with (そなえる)
- n3-de55b0c4 in addition (そのうえ)
- n3-0caac510 without change (そのまま)
- n3-b15d0589 but (still) (それでも)
- n3-29a2a802 to become complete (そろう)
- n3-474a193b to put things in order (そろえる)
- n3-a19c9ab9 loss (そん)
- n3-e0392b41 rice field (た)
- n3-6c809baa pair (たい)
- n3-c4994579 continent (たいりく)
- n3-4c9dcaa6 to embrace (だく)
- n3-7d128dda to ascertain (たしかめる)
- n3-0923f8a8 to be saved (たすかる)
- n3-712bc98b to help (transitive) (たすける)
- n3-afaf10d1 at once (ただちに)
- n3-be81e11d to fold (たたむ)
- n3-68f1823a even number (たま)
- n3-269481a8 earth (ち)
- n3-8c79b968 basement (ちか)
- n3-b4ccb7ea district (ちく)
- n3-51c741e8 tea (advanced) (ちゃ)
- n3-ed7f6491 used (ちゅうこ)
- n3-4bfa2e4a correspondence (つうしん)
- n3-abc4560c to associate with (つきあう)
- n3-c35f7912 to pile up (つむ)
- n3-c9c17332 to pack (つめる)
- n3-7b833a15 fishing (つり)
- n3-a9192089 applying (てきよう)
- n3-2195e4e3 help (てつだい)
- n3-31c10081 staying up all night (てつや)
- n3-15860441 simultaneous (どうじ)
- n3-00e3930a to dissolve (とく)
- n3-081c8225 to unfasten (とく)
- n3-306e384b to melt (とける)
- n3-f0de5561 books (としょ)
- n3-d384fdc6 training (とれえにんぐ)
- n3-223a3a3b field (の)
- n3-2c36e221 being skilled in (のう)
- n3-5e6b0b24 path (ぱす)
- n3-b78da97a issue (はっこう)
- n3-e409b802 to punish (ばっする)
- n3-22ccd357 equal (ひとしい)
- n3-87e2d692 un (ふ)
- n3-33fbcc7a dividing (ぶ)
- n3-ed7ff656 to contain (ふくむ)
- n3-c6c99c19 Act (ほう)
- n3-7b6df95f to wind (まく)
- n3-9cee8975 deep red (まっか)
- n3-f10a626a self (じこ)
- n3-6dc69448 masses (しゅう)
- n3-3a3239f1 dwelling (じゅう)
- n3-bfb2f00d ornamentation (しゅうしょく)
- n3-51310a73 Ms. (じょし)
- n3-4b69a028 aspect (そう)
- n3-8f309781 to succeed (someone in a business or (つぐ)
- n3-d9c6fbf0 difficulty (なん)
- n3-5febaf68 size (はん)
- n3-9a01d471 label (ひょう)
- n3-220360d0 good fortune (ふく)
- n3-f91b1194 thigh (また)

## Auto-approved (3601) — spot-check only

| word | sentence (JA) | EN | cloze answer | judge | use | approve? |
| --- | --- | --- | --- | --- | --- | --- |
| to tear | 料理の前に、鶏肉を手で裂きます。 | Before cooking, I tear the chicken by hand. | さきます | N4 L5 T5 C3 I3 — 切ります/ちぎります could also fit the blank, reducing uniqueness. | teach only | yes |
| to tear | 紙が古いから、裂いて捨てました。 | Since the paper was old, I tore it and threw it away. | さいて | N4 L5 T5 C3 I3 — 破って is a common synonym that also fits the context. | teach only | yes |
| to avoid | 彼女は私の電話をいつも避けています。 | She always avoids my phone calls. | さけて | N4 L5 T5 C3 I3 — Blank could also fit words like 無視して, slightly reducing uniqueness. | teach only | yes |
| to avoid | 道が混んでいるから、あの道を避けます。 | Since the road is crowded, I avoid that road. | さけます | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to avoid | 渋滞を避けるために、早く出発しましょう。 | Let's leave early to avoid the traffic jam. | さける | N5 L5 T5 C5 I4 | cloze+teach | yes |
| support | 父は一人で家族の生活を支えています。 | My father supports the family's life by himself. | ささえて | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to stick | 子供の足に小さい石が刺さった。 | A small stone got stuck in the child's foot. | ささった | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to stick | この靴には何も刺さっていません。 | Nothing is stuck in this shoe. | ささって | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to sting | 庭で虫が息子を刺しました。 | A bug stung my son in the garden. | さしました | N5 L5 T5 C3 I3 — Could also be 噛みました (bit) in context, so blank isn't fully unique. | teach only | yes |
| to sting | この虫は人を刺しません。 | This bug does not sting people. | さしません | N5 L5 T5 C3 I3 — 噛みません could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| to insert | 花瓶に花を挿しました。 | I put flowers into the vase. | さしました | N4 L5 T5 C3 I3 — 生ける/入れる could also fit the blank, slightly reducing recoverability | teach only | yes |
| to protect | 母はいつも子供を守ります。 | My mother always protects her children. | まもります | N5 L5 T5 C3 I3 — other verbs (育てる, 愛する) could also fit the blank | teach only | yes |
| to protect | 約束を守るから、時間に来ます。 | Since I keep my promises, I'll come on time. | まもる | N4 L4 T4 C5 I4 — slightly unnatural phrasing '時間に来ます' would more commonly be '時間通りに来ます', but 約束を守る is a strong fixed collocation | cloze+teach | yes |
| to protect | みんなで規則を守りましょう。 | Let's all follow the rules. | まもりましょう | N5 L4 T5 C4 I2 — 生成テンプレート的で内容がやや平凡; 従う等も文法的には可能 | cloze+teach | yes |
| married couple | あの夫婦は毎週旅行します。 | That married couple travels every week. | ふうふ | N4 L5 T5 C2 I2 — Blank could be filled with many other subjects like 家族 or 彼ら. | teach only | yes |
| married couple | 夫婦は二人で晩御飯を作りました。 | The married couple cooked dinner together. | ふうふ | N4 L5 T5 C2 I2 — 二人で already implies two people, so many nouns could fit the blank. | teach only | yes |
| married couple | 夫婦は日曜日に出かけるつもりです。 | The married couple plans to go out on Sunday. | ふうふ | N4 L5 T5 C2 I2 — Context doesn't uniquely force 夫婦; other subjects could fit. | teach only | yes |
| wife | 社長の夫人は今日パーティーに来ます。 | The president's wife is coming to the party today. | ふじん | N5 L5 T5 C3 I4 — Blank could also be filled by words like 秘書 or 息子, slightly reducing uniqueness. | teach only | yes |
| wife | 先生の夫人に駅で会いました。 | I met the teacher's wife at the station. | ふじん | N5 L5 T5 C3 I4 — Context allows other relational nouns (息子, 奥さん) to fit the blank. | teach only | yes |
| wife | 夫人はもうすぐ着くでしょう。 | The wife will probably arrive soon. | ふじん | N4 L5 T5 C2 I2 — Very generic sentence; blank could be filled by almost any person noun, low cloze specificity. | teach only | yes |
| woman 、女の人 ) | あの婦人はとても親切です。 | That woman is very kind. | ふじん | N4 L5 T5 C2 I2 — Blank could be filled by many nouns like 女性, 人, 女の子, not uniquely recoverable. | teach only | yes |
| woman 、女の人 ) | 婦人服売り場はどこですか。 | Where is the women's clothing section? | ふじん | N5 L5 T5 C3 I3 — Compound word context helps but 紳士服/子供服 also plausible alternatives. | teach only | yes |
| woman 、女の人 ) | 駅で婦人に道を尋ねました。 | I asked a woman for directions at the station. | ふじん | N4 L5 T5 C2 I3 — Blank easily filled by 人, 女性, 警察官, etc., low uniqueness. | teach only | yes |
| twins | 私の妹は双子です。 | My younger sister is a twin. | ふたご | N5 L5 T4 C2 I2 — Many nouns could fill the blank (e.g., 先生, 友達), so twins isn't uniquely forced; also 'my sister is a twin' is odd phrasing in English. | teach only | yes |
| twins | 双子の赤ちゃんが生まれました。 | Twin babies were born. | ふたご | N5 L5 T5 C4 I3 | cloze+teach | yes |
| twins | あの双子はいつも一緒に遊びます。 | Those twins always play together. | ふたご | N5 L5 T5 C3 I3 — Other nouns like 兄弟 or 友達 could also fit the blank. | teach only | yes |
| Buddha | 仏に手を合わせました。 | I put my hands together before the Buddha. | ほとけ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| the person himself | 本人に聞いてください。 | Please ask the person himself. | ほんにん | N5 L5 T5 C2 I3 — Many other nouns (彼, 先生, etc.) could fill the blank equally well. | teach only | yes |
| the person himself | これは本人が書いた手紙です。 | This is a letter written by the person himself. | ほんにん | N5 L5 T5 C2 I3 — Blank could be filled by many subjects (彼, 母, etc.), reducing recoverability. | teach only | yes |
| the person himself | 本人が遅れて来ました。 | The person himself came late. | ほんにん | N5 L5 T5 C2 I3 — Generic subject slot; many nouns fit besides 本人. | teach only | yes |
| lost child | 迷子を交番に連れて行ってください。 | Please take the lost child to the police box. | まいご | N5 L5 T5 C5 I4 | cloze+teach | yes |
| lost child | 迷子の女の子が泣いています。 | A lost girl is crying. | まいご | N5 L5 T5 C5 I4 | cloze+teach | yes |
| grandchild | 私の孫はもう二十歳です。 | My grandchild is already twenty years old. | まご | N5 L5 T5 C2 I3 — Blank could be filled by many family nouns (娘, 息子, etc.), not uniquely 孫. | teach only | yes |
| grandchild | 孫と一緒に旅行しました。 | I traveled with my grandchild. | まご | N5 L5 T5 C1 I2 — Very generic; almost any person noun fits the blank. | teach only | yes |
| grandchild | 日曜日に孫が遊びに来ます。 | My grandchild will come to visit on Sunday. | まご | N5 L5 T5 C2 I3 — Context suggests a young visitor but doesn't force 孫 specifically. | teach only | yes |
| comfort | どうぞ、楽にしてください。 | Please make yourself comfortable. | らく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| comfort | 新しい仕事は楽ですか。 | Is the new job easy? | らく | N5 L5 T5 C2 I3 — Blank could be filled by many adjectives like 大変, 楽しい, つまらない, etc. | teach only | yes |
| comfort | もっと楽な生活をしたいです。 | I want a more comfortable life. | らく | N5 L5 T5 C2 I3 — Blank could be filled by 楽しい, 静か, 豊か, etc., reducing recoverability. | teach only | yes |
| clever | あの犬はとても利口です。 | That dog is very clever. | りこう | N5 L5 T5 C2 I2 — Many adjectives could fill the blank (cute, big, fast, etc.). | teach only | yes |
| clever | あの学生は利口だと思いますか。 | Do you think that student is clever? | りこう | N5 L5 T5 C2 I3 — Blank could be filled by many other adjectives describing a student. | teach only | yes |
| clever | 妹は兄より利口です。 | My younger sister is cleverer than my older brother. | りこう | N5 L5 T5 C2 I3 — Comparative structure still allows many adjectives besides 'clever'. | teach only | yes |
| fashionable | 今年はこの色が流行しています。 | This color is fashionable this year. | りゅうこう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| fashionable | そのデザインは今も流行していますか。 | Is that design still fashionable now? | りゅうこう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| fashionable | 最近流行している歌を聞きたいです。 | I want to listen to a song that's currently popular. | りゅうこう | N5 L5 T4 C4 I4 — EN says 'popular' rather than 'fashionable' but conveys the meaning fine. | cloze+teach | yes |
| consecutive | 三日連続で雨が降りました。 | It rained for three consecutive days. | れんぞく | N5 L5 T5 C5 I4 | cloze+teach | yes |
| consecutive | 何回連続で試合に勝ちましたか。 | How many consecutive games have you won? | れんぞく | N5 L5 T5 C5 I4 | cloze+teach | yes |
| consecutive | 今日は二時間連続で授業があります。 | Today there are two consecutive hours of class. | れんぞく | N5 L5 T5 C5 I3 | cloze+teach | yes |
| selfishness | 弟はいつもわがままです。 | My little brother is always selfish. | わがまま | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other na-adjectives like 元気/静か, so cloze recoverability is moderate. | teach only | yes |
| selfishness | わがままを言わないでください。 | Please don't be selfish. | わがまま | N5 L5 T5 C4 I3 — わがままを言う is a fairly fixed collocation, making the blank fairly recoverable, though 文句 could also fit. | cloze+teach | yes |
| evil | あの物語には悪が出てきます。 | Evil appears in that story. | あく | N4 L5 T5 C2 I3 — Many nouns (敵, 悪役, 幽霊, 怪物) could fill the blank equally well. | teach only | yes |
| evil | 悪を許すことはできません。 | I cannot forgive evil. | あく | N4 L5 T5 C2 I2 — Blank could be filled by many nouns like 罪, 嘘, 彼, それ, not uniquely 悪. | teach only | yes |
| anger | 怒りを我慢できますか。 | Can you hold back your anger? | いかり | N5 L5 T5 C3 I3 — Could also fit 涙 or other emotions, reducing uniqueness. | teach only | yes |
| anger | 怒りで手が震えました。 | My hands trembled with anger. | いかり | N5 L5 T5 C3 I4 — Other causes (fear, cold, nervousness) could also fit the blank. | teach only | yes |
| chic | あの着物はとても粋ですね。 | That kimono is very chic, isn't it. | いき | N5 L5 T5 C2 I3 — Many adjectives could fill the blank (きれい, すてき, etc.), reducing cloze uniqueness. | teach only | yes |
| chic | このデザインは粋だと思いますか。 | Do you think this design is chic? | いき | N5 L5 T5 C2 I3 — Blank could be filled by various adjectives, not uniquely 粋. | teach only | yes |
| chic | 彼はいつも粋な服を着ています。 | He always wears chic clothes. | いき | N5 L5 T5 C2 I3 — Context allows multiple adjectives describing clothes, weakening cloze uniqueness. | teach only | yes |
| usual | 忙しい会社ですから、遅くまで働くのは当たり前です。 | Since it's a busy company, working until late is normal. | あたりまえ | N5 L5 T5 C3 I3 — Other words like 普通 or 当然 could also fit the blank. | teach only | yes |
| usual | 電車が込んでいるのは当たり前ではありません。 | It's not normal for the train to be crowded. | あたりまえ | N5 L5 T5 C3 I3 — Could also be 普通 or 当然 in context, reducing uniqueness. | teach only | yes |
| usual | 野菜の値段が上がるのは当たり前です。 | It's natural for vegetable prices to rise. | あたりまえ | N5 L5 T5 C3 I3 — 当然 or 普通 could also plausibly fill the blank. | teach only | yes |
| unexpectedly | 会議は案外早く終わりました。 | The meeting ended unexpectedly early. | あんがい | N5 L5 T5 C3 I3 — 意外に/思ったより could also fit the blank. | teach only | yes |
| unexpectedly | このお菓子は案外美味しかったです。 | This snack was surprisingly delicious. | あんがい | N5 L5 T5 C3 I3 — 意外に/思ったより could also fit the blank. | teach only | yes |
| unexpectedly | 薬は案外苦くなかったです。 | The medicine wasn't as bitter as expected. | あんがい | N5 L5 T5 C3 I4 — 意外に/思ったより could also fit the blank. | teach only | yes |
| unexpected | 部長の意見は意外でした。 | The department head's opinion was unexpected. | いがい | N5 L5 T5 C3 I3 — Blank could also be filled by words like 変/面白い, reducing uniqueness. | teach only | yes |
| unexpected | バスが意外に早く着きました。 | The bus arrived unexpectedly early. | いがい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| unexpected | 検査で意外なことが分かりました。 | Something unexpected was found in the examination. | いがい | N5 L5 T5 C3 I3 — Other adjectives like 重要/深刻 could also fit the blank. | teach only | yes |
| must not do | 会議中に寝てはいけません。 | You must not sleep during the meeting. | いけません | N5 L5 T5 C3 I3 — だめです/なりません could also fill the blank, reducing uniqueness. | teach only | yes |
| must not do | 電車の中で電話をしてはいけません。 | You must not talk on the phone on the train. | いけません | N5 L5 T5 C3 I3 — だめです/なりません could also fill the blank, reducing uniqueness. | teach only | yes |
| must not do | お酒を飲んではいけません。 | You must not drink alcohol. | いけません | N5 L5 T5 C3 I2 — Very generic prohibition sentence; だめです/なりません also plausible in blank. | teach only | yes |
| strangeness | 体に異常を感じたら病院へ行ってください。 | If you feel something abnormal in your body, please go to the hospital. | いじょう | N5 L4 T5 C4 I4 | cloze+teach | yes |
| malicious | あの課長は意地悪なことを言います。 | That section chief says malicious things. | いじわる | N5 L5 T5 C2 I3 — Many other na-adjectives (優しい, ひどい, 失礼) could fill the blank equally well. | teach only | yes |
| malicious | 子供の頃、意地悪な友達がいました。 | When I was a child, I had a mean friend. | いじわる | N5 L5 T5 C2 I3 — Blank could be filled by many other adjectives describing a friend (優しい, 面白い, etc.). | teach only | yes |
| greatness | あの社長はとても偉大な人です。 | That company president is a truly great person. | いだい | N5 L5 T5 C3 I2 — Generic template sentence; other adjectives like 立派 or 有名 could fit the blank. | teach only | yes |
| greatness | 偉大な人は病気と戦いながら研究を続けました。 | The great person continued research while fighting illness. | いだい | N5 L4 T5 C3 I4 — Good context but words like 立派 or 優秀 could also fit the blank. | teach only | yes |
| greatness | 歴史上の偉大な人について本で読みました。 | I read a book about a great person in history. | いだい | N5 L5 T5 C3 I3 — Context is somewhat generic; similar adjectives could fit the blank. | teach only | yes |
| bench | 公園のベンチに座りましょう。 | Let's sit on the bench in the park. | べんち | N5 L5 T5 C3 I3 | teach only | yes |
| bench | 公園のベンチはどこにありますか。 | Where is the bench in the park? | べんち | N5 L5 T5 C2 I2 — blank could be filled by many nouns like トイレ or 入口 | teach only | yes |
| bench | 疲れたので、ベンチで休みます。 | Since I'm tired, I'll rest on the bench. | べんち | N5 L5 T5 C3 I3 | teach only | yes |
| pole | その棒はとても長いですね。 | That pole is very long, isn't it. | ぼう | N4 L5 T5 C1 I1 — Very generic template sentence; almost any noun could fill the blank. | teach only | yes |
| pole | 棒が折れたので、新しいのを買いました。 | Since the pole broke, I bought a new one. | ぼう | N4 L5 T5 C3 I3 — Reasonably specific since 折れる pairs naturally with rod-like objects, but 枝 or 棒切れ could also work. | teach only | yes |
| gem | 母は宝石が好きです。 | My mother likes gems. | ほうせき | N5 L5 T5 C1 I2 — Generic template sentence; almost any noun could fill the blank. | teach only | yes |
| gem | その宝石はいくらですか。 | How much is that gem? | ほうせき | N5 L5 T5 C2 I3 — Could refer to many purchasable items, not uniquely 'gem'. | teach only | yes |
| gem | 誕生日に宝石をもらったので、とても喜びました。 | Since I got a gem for my birthday, I was very happy. | ほうせき | N5 L4 T5 C3 I4 — Birthday gift context narrows options but still many gift nouns could fit. | teach only | yes |
| ball | 子供たちはボールで遊んでいます。 | The children are playing with a ball. | ぼうる | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other toys, slightly reducing uniqueness. | teach only | yes |
| ball | 一緒にボールで遊びませんか。 | Won't you play ball with me? | ぼうる | N5 L5 T4 C3 I3 — Translation 'play ball' is a bit loose but conveys meaning; blank could be other objects. | teach only | yes |
| ball | ボールが庭に落ちたので、取りに行きます。 | Since the ball fell in the yard, I'll go get it. | ぼうる | N5 L5 T5 C2 I4 — Many objects could fall into a yard, so the blank is not uniquely 'ball'. | teach only | yes |
| dust | 机の上に埃がたくさんあります。 | There is a lot of dust on the desk. | ほこり | N4 L5 T5 C3 I2 — blank could also be filled by other nouns like 本 or ゴミ | teach only | yes |
| dust | 棚の埃は誰が取りますか。 | Who will remove the dust on the shelf? | ほこり | N4 L5 T5 C3 I3 — shelf dust context still allows other nouns like ゴミ | teach only | yes |
| dust | 埃がひどいので、拭きましょう。 | Since the dust is bad, let's wipe it. | ほこり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| mic | マイクを使って話しましょう。 | Let's talk using the mic. | まいく | N5 L5 T5 C2 I2 — Many devices (ペン、スマホ等) could fill the blank, not uniquely mic. | teach only | yes |
| mic | マイクの音が小さいので、新しいのを借ります。 | Since the mic's sound is small, I'll borrow a new one. | まいく | N4 L5 T4 C3 I3 — Other devices (ラジオ、スピーカー) could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| fence | 庭に柵を立てましょう。 | Let's build a fence in the yard. | さく | N5 L5 T5 C3 I3 — 立てる could also fit 旗/看板/柱, slightly reducing recoverability. | teach only | yes |
| fence | あの柵は誰が作りましたか。 | Who made that fence? | さく | N5 L5 T5 C2 I2 — Blank could be almost any noun (box, table, etc.), weak cloze cue. | teach only | yes |
| fence | 柵が壊れているので、直します。 | Since the fence is broken, I'll fix it. | さく | N5 L5 T5 C2 I2 — Many objects can be '壊れている' and need fixing, so the blank isn't uniquely fence. | teach only | yes |
| porcelain | この磁器はとても綺麗です。 | This porcelain is very beautiful. | じき | N4 L5 T5 C1 I2 — Generic template; blank could be filled by almost any noun (花瓶、絵など). | teach only | yes |
| porcelain | その磁器はどこで買いましたか。 | Where did you buy that porcelain? | じき | N4 L5 T5 C1 I2 — Very generic; many nouns fit the blank equally well. | teach only | yes |
| porcelain | 磁器は壊れやすいので、気をつけてください。 | Since porcelain breaks easily, please be careful. | じき | N4 L5 T5 C3 I3 — Fragility clue narrows options somewhat but still fits ガラス, 陶器, etc. | teach only | yes |
| to leave | 彼は去年、この町を去りました。 | He left this town last year. | さりました | N4 L4 T5 C3 I3 — 出た/離れたも文脈的に入り得る | teach only | yes |
| to sink | 船は海に沈みました。 | The ship sank into the sea. | しずみました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to sink | 夕方、太陽が西に沈む。 | In the evening, the sun sinks in the west. | しずむ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to sink | 卵をゆでたら、卵は鍋の底に沈んだ。 | When I boiled the eggs, they sank to the bottom of the pot. | しずんだ | N4 L5 T5 C4 I4 | cloze+teach | yes |
| to pass by one another | 駅の前で友達とすれ違いました。 | I passed by my friend in front of the station. | すれちがいました | N5 L5 T5 C3 I3 — Could also fit 会う or 出会う in the blank, slightly reducing recoverability. | teach only | yes |
| to pass by one another | 狭い道で車とすれ違うのは怖い。 | Passing by a car on a narrow road is scary. | すれちがう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| move | 旅行の予定が一日ずれました。 | The travel schedule shifted by one day. | ずれました | N5 L4 T5 C3 I4 — 延びました等も文脈的に当てはまり得る | teach only | yes |
| move | 眼鏡がずれているので、直してください。 | My glasses are crooked, so please fix them. | ずれて | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to lift | 母は台所で魚を揚げました。 | My mother fried fish in the kitchen. | あげました | N5 L5 T4 C3 I3 — Target word gloss 'to lift' mismatches actual meaning 'to fry' used here; also many cooking verbs (焼く/煮る) could fit blank without more context. | teach only | yes |
| to lift | 油で野菜を揚げてください。 | Please fry the vegetables in oil. | あげて | N5 L5 T5 C5 I3 — '油で' strongly cues 揚げる, minimal ambiguity. | cloze+teach | yes |
| to be hit | 天気予報は今日も当たるでしょう。 | The weather forecast will probably be right again today. | あたる | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to be hit | 車に当たらないように、気をつけてください。 | Please be careful not to get hit by a car. | あたらない | N4 L4 T5 C3 I3 — ぶつかる could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| to appear (intransitive) | 突然、目の前に猫が現れました。 | Suddenly, a cat appeared in front of me. | あらわれました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to appear (intransitive) | 彼は会議に遅れて現れた。 | He showed up late to the meeting. | あらわれた | N5 L5 T5 C3 I3 — other verbs like 来た/着いた could also fit the blank | teach only | yes |
| to appear (intransitive) | 夜になると星が現れる。 | When night falls, the stars appear. | あらわれる | N5 L5 T5 C3 I3 — 出る/見える could also fit contextually | teach only | yes |
| going | 行きは電車で、帰りはバスでした。 | Going there was by train, and coming back was by bus. | いき | N5 L5 T5 C5 I4 | cloze+teach | yes |
| set | 母は新しいコーヒーセットを買いました。 | My mother bought a new coffee set. | せっと | N5 L5 T5 C3 I3 — Blank could plausibly be other nouns like カップ or メーカー. | teach only | yes |
| set | 友達が来たので、お茶のセットを出しましょう。 | Since my friend came, let's bring out the tea set. | せっと | N5 L5 T5 C3 I4 — Context suggests tea-related item but not uniquely セット. | teach only | yes |
| set | 電話で新しいセットの値段を聞きました。 | I asked about the price of the new set on the phone. | せっと | N4 L5 T5 C2 I2 — Very generic sentence; blank could be many nouns like 商品 or 電話. | teach only | yes |
| lamplight | 部屋の明かりが消えました。 | The light in the room went out. | あかり | N4 L5 T5 C3 I3 — 電気 could also fit the blank, slightly ambiguous | teach only | yes |
| lamplight | 友達が来る前に、玄関の明かりをつけましょう。 | Let's turn on the entrance light before our friend arrives. | あかり | N5 L5 T5 C4 I4 | cloze+teach | yes |
| hole | 靴下に穴が開いています。 | There is a hole in my sock. | あな | N5 L5 T5 C5 I4 | cloze+teach | yes |
| hole | 壁になぜ穴があるのですか。 | Why is there a hole in the wall? | あな | N5 L5 T5 C5 I4 | cloze+teach | yes |
| hole | 友達が来た時、ズボンの穴に気づきました。 | When my friend came, I noticed a hole in my pants. | あな | N5 L5 T5 C5 I5 | cloze+teach | yes |
| album | 家族の写真をアルバムに入れました。 | I put the family photos in an album. | あるばむ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| album | 一緒に旅行のアルバムを見ませんか。 | Shall we look at the travel album together? | あるばむ | N5 L5 T5 C3 I3 — other nouns like 写真/ビデオ could also fit the blank | teach only | yes |
| album | 学校で作ったアルバムはどこにありますか。 | Where is the album we made at school? | あるばむ | N5 L5 T5 C3 I3 — other nouns like 作品/本 could also fit the blank | teach only | yes |
| board | 先生は木の板を教室に持ってきました。 | The teacher brought a wooden board to the classroom. | いた | N5 L5 T5 C4 I3 | cloze+teach | yes |
| handle | 傘の柄が壊れました。 | The handle of the umbrella broke. | え | N5 L5 T5 C4 I3 — 傘の骨など他の単語も入り得るため多少曖昧。 | cloze+teach | yes |
| handle | このナイフの柄は木でできていますか。 | Is this knife's handle made of wood? | え | N5 L5 T5 C5 I3 | cloze+teach | yes |
| band | おばあさんは着物の帯を締めました。 | Grandma tied the obi sash of her kimono. | おび | N5 L5 T5 C4 I4 | cloze+teach | yes |
| band | 学校で帯の歴史を習いました。 | I learned the history of the obi sash at school. | おび | N4 L5 T5 C3 I3 — Blank could plausibly be filled with many other nouns like 着物 or 茶道, reducing recoverability. | teach only | yes |
| card | 誕生日のカードを一緒に選びませんか。 | Shall we choose a birthday card together? | かあど | N5 L5 T5 C3 I4 — Blank could also be filled with words like プレゼント or ケーキ, reducing uniqueness. | teach only | yes |
| card | 学校で図書館のカードをもらいましたか。 | Did you get a library card at school? | かあど | N5 L5 T5 C4 I4 | cloze+teach | yes |
| single | 課長はまだ独身です。 | The section chief is still single. | どくしん | N5 L5 T5 C2 I3 — Blank could be many adjectives/nouns (元気, 忙しい, etc.), weak context to force 独身. | teach only | yes |
| single | 失礼ですが、独身ですか。 | Excuse me, but are you single? | どくしん | N5 L5 T5 C2 I3 — Blank could fit many personal questions (お名前, おいくつ, 結婚) not uniquely 独身. | teach only | yes |
| single | 彼は独身じゃなくて、奥さんがいます。 | He isn't single; he has a wife. | どくしん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| old people | 年寄りはこのレストランによく来ます。 | Elderly people often come to this restaurant. | としより | N4 L5 T5 C2 I1 — Generic template sentence; many nouns could fill the blank. | teach only | yes |
| old people | 年寄りは寒い日に外に出たがらないそうです。 | I hear elderly people don't want to go outside on cold days. | としより | N5 L5 T5 C4 I4 | cloze+teach | yes |
| human being | あの会社は人間を機械のように使います。 | That company treats humans like machines. | にんげん | N5 L4 T5 C3 I4 — 人 or 社員 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| human being | 電車が込むと、人間はいらいらするらしいです。 | It seems that people get irritated when the train is crowded. | にんげん | N5 L4 T5 C3 I4 — 人 or みんな could also plausibly fill the blank. | teach only | yes |
| farmers | 雨が降ると、農民は喜びます。 | When it rains, farmers are happy. | のうみん | N4 L5 T5 C3 I2 — Generic sentence; other subjects (children, people) could also fit the blank. | teach only | yes |
| farmers | このレストランの野菜は農民が作ったそうです。 | I hear the vegetables at this restaurant were grown by farmers. | のうみん | N4 L4 T5 C3 I3 — Could also be 農家 or 生産者, reducing uniqueness of blank. | teach only | yes |
| farmers | 農民は天気が悪ければ悪いほど心配します。 | The worse the weather is, the more farmers worry. | のうみん | N4 L4 T5 C4 I4 — Context strongly suggests farmers as weather-dependent workers. | cloze+teach | yes |
| mother | 彼の母親は看護婦です。 | His mother is a nurse. | ははおや | N4 L5 T5 C2 I2 — 看護婦 is somewhat dated; modern term is 看護師. Blank could be filled by many family nouns (father, sister, etc.), reducing cloze recoverability. | teach only | yes |
| mother | 母親は今、台所で料理をしています。 | The mother is cooking in the kitchen now. | ははおや | N5 L5 T5 C2 I2 — Context does not uniquely force 'mother'; other family members could fit the blank. | teach only | yes |
| offender | 警官が犯人を捕まえました。 | The police officer caught the offender. | はんにん | N5 L5 T5 C3 I3 — Could also be 泥棒 or other word for the blank. | teach only | yes |
| offender | 犯人はまだ見つかっていません。 | The offender has not been found yet. | はんにん | N5 L4 T5 C2 I3 — Blank could be many nouns like 鍵, 財布, etc., not uniquely 犯人. | teach only | yes |
| offender | 犯人はお金を盗んだらしいです。 | It seems the offender stole money. | はんにん | N5 L4 T5 C4 I4 | cloze+teach | yes |
| beautiful person | あの店員はとても美人です。 | That store clerk is very beautiful. | びじん | N4 L5 T5 C2 I2 — Many other adjectives (きれい, かわいい) could fill the blank equally well. | teach only | yes |
| beautiful person | 新しい部長は美人だと聞きました。 | I heard that the new department head is beautiful. | びじん | N4 L4 T5 C2 I3 — Blank could be filled by many other adjectives like きれい. | teach only | yes |
| beautiful person | 電車で見た女の人はとても美人でした。 | The woman I saw on the train was very beautiful. | びじん | N4 L5 T5 C2 I3 — Blank is easily filled by synonyms like きれい, so exact word not uniquely forced. | teach only | yes |
| crowd of people | 人込みが嫌いですから、あまり出かけません。 | I dislike crowds, so I don't go out much. | ひとごみ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| crowd of people | 人込みに気をつけてください。 | Please be careful of the crowd. | ひとごみ | N5 L5 T5 C2 I3 — Many nouns could fill the blank (car, fire, pickpockets, etc.), so context doesn't force 人込み specifically. | teach only | yes |
| to cool | スープを冷ましてから飲みます。 | I let the soup cool before drinking it. | さまして | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to cool | 熱いお茶を冷ましてください。 | Please let the hot tea cool down. | さまして | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to cool | 少し冷ましたほうがいいですよ。 | You should let it cool a little. | さました | N4 L5 T4 C2 I3 — No object mentioned, so many other verbs (待つ, 休む, 冷やす, etc.) could fit the blank. | teach only | yes |
| to awaken | 大きい音で目を覚ましました。 | I woke up because of a loud noise. | さまし | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to awaken | 母は毎朝私の目を覚まします。 | My mother wakes me up every morning. | さまします | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to awaken | 毎朝コーヒーで目を覚ますことにしています。 | I make it a habit to wake myself up with coffee every morning. | さます | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to become cool | コーヒーが冷めてしまいました。 | The coffee has gotten cold. | さめて | N5 L5 T5 C3 I3 — Blank could also be filled with other verbs like こぼれる, so recoverability is only moderate. | teach only | yes |
| to become cool | 早く食べないとスープが冷めますよ。 | If you don't eat quickly, the soup will get cold. | さめます | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to become cool | 料理が冷める前に食べましょう。 | Let's eat before the food gets cold. | さめる | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to wake | 夜中に何度も目が覚めます。 | I wake up many times during the night. | さめます | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to wake | 目が覚めたら、もう昼でした。 | When I woke up, it was already noon. | さめた | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to wake | どうして今朝早く目が覚めたのですか。 | Why did you wake up early this morning? | さめた | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to abide | 学生は学校の規則に従わなければなりません。 | Students must follow the school rules. | したがわなければ | N5 L5 T5 C3 I3 — 守る could equally fill the blank in this context, weakening cloze recoverability. | teach only | yes |
| to abide | あなたは会社の規則に従いますか。 | Do you follow the company's rules? | したがいます | N5 L5 T5 C3 I2 — 守りますか is an equally plausible fit, and the sentence is a generic template. | teach only | yes |
| to take up | この問題は試験の大部分を占めるそうです。 | I heard this question makes up most of the exam. | しめる | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to take up | 会議室は今、他の部が占めているらしいです。 | It seems another department is occupying the meeting room now. | しめて | N5 L5 T5 C4 I4 — other verbs like 使う/借りる could also fit the blank, slightly lowering uniqueness | cloze+teach | yes |
| to be wet | 雨で庭の土が湿っています。 | The garden soil is damp from the rain. | しめって | N5 L5 T5 C3 I3 — 濡れて could also fit the blank, reducing uniqueness. | teach only | yes |
| to be wet | 洗濯物がまだ湿っているので、乾かします。 | The laundry is still damp, so I'll dry it. | しめって | N5 L5 T5 C3 I3 — 濡れて is also plausible in this context. | teach only | yes |
| to be wet | 空気が湿ると、窓が曇りますね。 | When the air gets damp, the windows fog up, don't they? | しめる | N5 L5 T5 C4 I4 | cloze+teach | yes |
| repairing | 車の修理にどれぐらいかかりますか。 | About how long will the car repair take? | しゅうり | N5 L4 T5 C4 I4 | cloze+teach | yes |
| limit | 毎日忙しくて、体の限界を感じます。 | I feel my physical limit because I'm busy every day. | げんかい | N4 L5 T5 C4 I3 | cloze+teach | yes |
| limit | 熱があって、もう限界です。休みます。 | I have a fever, and I'm at my limit. I'll rest. | げんかい | N4 L5 T5 C3 I3 — 'もう限界です' could also be filled with words like 無理. | teach only | yes |
| cash | 財布に現金がないので、切符が買えません。 | I don't have cash in my wallet, so I can't buy a ticket. | げんきん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| cash | 今日は現金を持っていますか。 | Do you have cash with you today? | げんきん | N5 L5 T5 C3 I2 — Generic sentence; blank could plausibly be filled by other words like お金. | teach only | yes |
| reality | 忙しい生活は厳しい現実です。 | A busy life is a harsh reality. | げんじつ | N4 L5 T5 C3 I3 — other nouns could fit the blank, e.g. 状況 | teach only | yes |
| reality | 夢と現実の違いが分かりますか。 | Do you understand the difference between dreams and reality? | げんじつ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| phenomenon | これは珍しい自然の現象です。 | This is a rare natural phenomenon. | げんしょう | N4 L5 T5 C3 I2 — generic template; 'natural ___' could also be other nouns like 景色 | teach only | yes |
| phenomenon | 電車が遅れるのはよくある現象です。 | Trains being delayed is a common phenomenon. | げんしょう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| phenomenon | この現象を知っていますか。 | Do you know about this phenomenon? | げんしょう | N4 L5 T5 C2 I2 — too generic, many nouns could fill the blank | teach only | yes |
| present condition | 会社の現状は大変厳しいです。 | The company's current situation is very tough. | げんじょう | N4 L4 T5 C3 I3 — 状況 could also fit the blank. | teach only | yes |
| present condition | 現状を変えるために、一緒に頑張りましょう。 | Let's work hard together to change the current situation. | げんじょう | N4 L4 T5 C4 I3 | cloze+teach | yes |
| consideration | 新しい仕事を検討しています。 | I'm considering a new job. | けんとう | N5 L5 T5 C3 I3 | teach only | yes |
| consideration | この問題を検討しませんか。 | Shall we consider this problem? | けんとう | N5 L5 T5 C3 I3 | teach only | yes |
| consideration | 忙しいから、まだ検討していません。 | I haven't considered it yet because I'm busy. | けんとう | N4 L5 T5 C2 I2 — Blank could be filled by many verbs like 準備, 返事, making the target hard to pin down. | teach only | yes |
| constitution | 日本の憲法はとても大切です。 | Japan's constitution is very important. | けんぽう | N4 L5 T5 C2 I2 — Blank could be filled by many nouns like history, culture, economy—weak cloze constraint. | teach only | yes |
| constitution | 学校で憲法を習いましたか。 | Did you study the constitution at school? | けんぽう | N5 L5 T5 C3 I3 — Blank could be replaced by other school subjects, somewhat guessable but not fully unique. | teach only | yes |
| constitution | 憲法は国の大切な決まりです。 | The constitution is an important rule of the country. | けんぽう | N5 L5 T5 C4 I4 — Context of 'important rule of the country' strongly points to constitution. | cloze+teach | yes |
| right | 誰でも習う権利があります。 | Everyone has the right to learn. | けんり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| right | 私たちにはどんな権利がありますか。 | What kind of rights do we have? | けんり | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (資格, 権限, etc.), making it hard to recover uniquely. | teach only | yes |
| right | 自由に話す権利があるから、安心です。 | Because we have the right to speak freely, I feel at ease. | けんり | N4 L5 T5 C4 I4 | cloze+teach | yes |
| rabbit | 庭に兎がいますね。 | There's a rabbit in the garden, isn't there. | うさぎ | N5 L5 T5 C2 I2 — Blank could be any animal (cat, dog, bird), not uniquely rabbit. | teach only | yes |
| rabbit | 兎は野菜が好きですか。 | Do rabbits like vegetables? | うさぎ | N5 L5 T5 C2 I3 — Many animals eat vegetables, so blank isn't uniquely recoverable. | teach only | yes |
| rabbit | 子供の頃、兎を飼っていました。 | When I was a child, I used to keep a rabbit. | うさぎ | N5 L5 T5 C2 I3 — Common pets (dog, cat, bird) also fit the blank, reducing uniqueness. | teach only | yes |
| cattle | 田舎には牛が多いです。 | There are many cattle in the countryside. | うし | N5 L5 T5 C2 I2 — Many animals could fill the blank, not uniquely cattle. | teach only | yes |
| cattle | 牛は草を食べます。 | Cattle eat grass. | うし | N5 L5 T5 C2 I2 — Other grass-eating animals could also fit the blank. | teach only | yes |
| cattle | あの牛は大きいですね。 | That cow is big, isn't it. | うし | N4 L5 T5 C1 I1 — Too generic; almost any noun could fit 'that ___ is big'. | teach only | yes |
| universe | 宇宙には星が多いです。 | There are many stars in the universe. | うちゅう | N4 L5 T4 C3 I3 — '銀河' or other nouns could also fit the blank, slightly reducing recoverability. | teach only | yes |
| horse | 馬に乗ったことがありますか。 | Have you ever ridden a horse? | うま | N5 L5 T5 C2 I3 — Many nouns (car, bike, train) could fill the blank with 乗る, so horse isn't uniquely recoverable. | teach only | yes |
| horse | 馬は速く走ります。 | Horses run fast. | うま | N5 L5 T5 C2 I2 — Generic template; many animals could 'run fast', so the blank isn't uniquely horse. | teach only | yes |
| horse | 公園で馬を見ました。 | I saw a horse in the park. | うま | N5 L5 T5 C2 I2 — Any animal could be seen in a park, so cloze is weak. | teach only | yes |
| satellite | 衛星から写真を撮ります。 | We take photos from a satellite. | えいせい | N4 L5 T5 C3 I3 — Natural sentence but blank could be filled by other flying objects like drone or plane. | teach only | yes |
| hill | 丘の上から海が見えます。 | You can see the sea from the top of the hill. | おか | N5 L5 T5 C3 I3 — Could also be 山 or ビル, slightly ambiguous. | teach only | yes |
| hill | あの丘に登りましょう。 | Let's climb that hill. | おか | N5 L5 T5 C3 I3 — Could also be 山 or 坂, slightly ambiguous. | teach only | yes |
| hill | 丘は静かで綺麗です。 | The hill is quiet and beautiful. | おか | N4 L5 T5 C2 I2 — Very generic sentence, many nouns fit the blank. | teach only | yes |
| open sea | 舟は沖に出ました。 | The boat went out to the open sea. | おき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| open sea | 沖に小さい島が見えます。 | You can see a small island out at sea. | おき | N5 L5 T5 C3 I3 — other words like 遠く or 海 could also fit the blank | teach only | yes |
| open sea | 沖まで泳ぐのは危ないです。 | Swimming out to the open sea is dangerous. | おき | N5 L5 T5 C4 I4 | cloze+teach | yes |
| pollution | 空気の汚染が心配です。 | I'm worried about air pollution. | おせん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| pollution | 川の汚染はひどいですね。 | The pollution of the river is terrible, isn't it. | おせん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| maintenance | この機械は古いですから、維持にお金がかかります。 | Since this machine is old, maintenance costs money. | いじ | N5 L4 T5 C3 I3 — Could also be 修理 (repair) or other cost-related noun, slightly reducing recoverability. | teach only | yes |
| maintenance | 毎日運動しないと、体を維持できません。 | If you don't exercise every day, you can't maintain your body. | いじ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| maintenance | 体を維持するために、野菜を食べてください。 | Please eat vegetables in order to maintain your health. | いじ | N5 L4 T5 C3 I3 — 改善 or 保つ-type alternatives could also fit contextually. | teach only | yes |
| trick | 子供はいたずらをしてはいけません。 | Children must not play pranks. | いたずら | N5 L5 T5 C4 I3 | cloze+teach | yes |
| trick | 誰がこのいたずらをしたのですか。 | Who did this prank? | いたずら | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other nouns like 絵 or 宿題, slightly reducing recoverability. | teach only | yes |
| agreement | 二人の意見が一致しました。 | The two people's opinions agreed. | いっちしました | N5 L4 T5 C3 I3 — Other verbs like 対立/衝突 could also fit the blank, reducing uniqueness. | teach only | yes |
| agreement | 私たちの考えは一致しません。 | Our ideas don't agree. | いっちしません | N5 L4 T5 C3 I3 — Blank could also be filled by 対立 or similar verbs, slightly reducing recoverability. | teach only | yes |
| agreement | 意見が一致しませんから、会議が長くなりました。 | Since our opinions didn't agree, the meeting got long. | いっちしません | N5 L4 T5 C4 I4 — Context of long meeting strongly implies disagreement, making 一致 the most natural fit. | cloze+teach | yes |
| on the other hand | 彼は厳しいですが、一方でとても親切です。 | He is strict, but on the other hand he is very kind. | いっぽう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| on the other hand | 電車は便利です。一方、バスは遅いです。 | Trains are convenient. On the other hand, buses are slow. | いっぽう | N4 L5 T5 C3 I2 — could also be しかし, somewhat generic template | teach only | yes |
| on the other hand | この店は安いです。一方、あの店は高いです。 | This store is cheap. On the other hand, that store is expensive. | いっぽう | N4 L5 T5 C3 I2 — could also be しかし, generic template sentence | teach only | yes |
| life | 医者は命を助けるために働いています。 | Doctors work in order to save lives. | いのち | N5 L5 T5 C3 I3 — Blank could also be filled by 人 or 患者, reducing uniqueness. | teach only | yes |
| life | 命を大切にしてください。 | Please take good care of your life. | いのち | N5 L5 T5 C4 I3 | cloze+teach | yes |
| life | 事故で命が危なかったですから、今も入院しています。 | Because his life was in danger from the accident, he is still hospitalized. | いのち | N4 L4 T5 C5 I4 — Slightly unnatural to use ですから mid-sentence; 危なかったので would flow better, but meaning is clear. | cloze+teach | yes |
| violation | 規則に違反してはいけません。 | You must not violate the rules. | いはん | N5 L4 T5 C4 I3 | cloze+teach | yes |
| violation | 彼はどんな違反をしたのですか。 | What kind of violation did he commit? | いはん | N4 L4 T5 C3 I3 — blank could also be filled with other nouns like 罪 in similar contexts, slightly reducing recoverability | teach only | yes |
| one's image | 新しい商品のイメージを考えています。 | I'm thinking about the image of the new product. | いめえじ | N5 L5 T5 C3 I3 | teach only | yes |
| one's image | この色は会社のイメージに合いません。 | This color doesn't match the company's image. | いめえじ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| one's image | この写真のイメージはどうですか。 | What do you think of the image in this photo? | いめえじ | N4 L5 T4 C3 I3 — 'image' translation slightly loose; could also mean 'feel/vibe' of the photo. | teach only | yes |
| to weaken | 今日は風が弱まりましたか。 | Did the wind weaken today? | よわまりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to weaken | 朝になると、雨の音が弱まります。 | When morning comes, the sound of the rain weakens. | よわまります | N4 L5 T5 C3 I3 — 小さくなる or 止む could also fit the blank, slightly reducing recoverability. | teach only | yes |
| to attempt | 新しい料理を試してみませんか。 | Why don't we try a new dish? | ためして | N5 L5 T5 C2 I3 — Blank could be filled by many verbs like 食べて or 作って, reducing recoverability. | teach only | yes |
| to attempt | 分からないから、まず試してみます。 | Since I don't understand, I'll try it first. | ためして | N5 L5 T5 C2 I3 — Context allows many verbs (やって, 調べて, 聞いて) besides 試して. | teach only | yes |
| to attempt | このカメラはまだ試していません。 | I haven't tried this camera yet. | ためして | N5 L5 T5 C2 I3 — Context allows alternatives like 使って or 見て, weakening cloze uniqueness. | teach only | yes |
| to accumulate | ストレスを溜めないでください。 | Please don't build up stress. | ためない | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to rely on | 困った時は家族に頼ります。 | I rely on my family when I'm in trouble. | たよります | N5 L5 T5 C3 I4 — Context helps but other verbs like 相談します could also fit. | teach only | yes |
| to rely on | 誰かに頼りましたか。 | Did you rely on someone? | たよりました | N4 L5 T5 C2 I2 — Very generic; many verbs (会う, 話す, 電話する) fit the blank equally well. | teach only | yes |
| to rely on | 私は誰にも頼りません。 | I don't rely on anyone. | たよりません | N4 L5 T5 C2 I2 — Generic sentence; blank could be filled with many other verbs (会う, 話す, 頼む). | teach only | yes |
| to be arrested | 泥棒は警察に捕まりました。 | The thief was caught by the police. | つかまりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be arrested | 悪いことをすると、いつか捕まりますよ。 | If you do bad things, you'll get caught someday. | つかまります | N5 L5 T5 C3 I4 — Blank could also be filled with other verbs like 死ぬ or 後悔する, slightly reducing recoverability. | teach only | yes |
| to be arrested | 電話で聞きましたが、犯人は捕まったそうです。 | I heard on the phone that the criminal was caught. | つかまった | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to seize | 落ちそうな皿を掴みました。 | I grabbed the plate that was about to fall. | つかみました | N5 L5 T5 C3 I3 — could also be 取りました or 掴えました, slightly reduces uniqueness | teach only | yes |
| to seize | 機会をしっかり掴みましょう。 | Let's firmly seize the opportunity. | つかみましょう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to seize | 子供は母の手を掴んだ。 | The child grabbed his mother's hand. | つかんだ | N5 L5 T5 C3 I3 — 握った or つないだ could also fit the context | teach only | yes |
| to pour (into) | スープをお皿に注ぎます。 | I pour the soup into the plate. | そそぎます | N5 L5 T5 C3 I2 | teach only | yes |
| to pour (into) | 母はいつもコーヒーを注ぎます。 | My mother always pours coffee. | そそぎます | N5 L5 T5 C3 I2 | teach only | yes |
| to pour (into) | お茶を注ぎましょうか。 | Shall I pour the tea? | そそぎましょう | N5 L5 T5 C3 I3 | teach only | yes |
| to attach | 赤ちゃんに名前を付けました。 | We gave the baby a name. | つけました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to attach | 火を付けてもいいですか。 | May I light the fire? | つけて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to put on | 新しい指輪を着けてみませんか。 | Won't you try wearing the new ring? | つけて | N4 L5 T5 C3 I3 — はめる is also commonly used for rings, so the blank isn't fully unique. | teach only | yes |
| to put on | 出かける前に時計を着けます。 | I put on my watch before going out. | つけます | N4 L5 T5 C3 I3 — はめる could also fit for watches, slightly reducing uniqueness. | teach only | yes |
| to be full | 部屋はまだ花の匂いで満ちていません。 | The room isn't yet filled with the scent of flowers. | みちていません | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to examine | 先生、この足を診てください。 | Doctor, please examine this leg. | みて | N5 L5 T5 C3 I3 — Ambiguous with homophone 見て since 先生 could mean teacher, not just doctor. | teach only | yes |
| to examine | 忙しくて、医者はすぐに診てくれません。 | He's busy, so the doctor won't examine me right away. | みて | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to examine | 明日、病院で子供を診てもらいます。 | Tomorrow, I will have the child examined at the hospital. | みて | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to peel | 晩ご飯の前に、果物の皮を剥いてください。 | Please peel the fruit before dinner. | むいて | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to peel | 母は野菜の皮を剥いています。 | My mother is peeling the vegetables. | むいて | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to steam | 野菜を蒸してから、皿に並べます。 | After steaming the vegetables, I'll arrange them on a plate. | むして | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to steam | この肉は蒸すと柔らかくなります。 | This meat becomes tender when steamed. | むす | N5 L3 T5 C5 I4 | cloze+teach | yes |
| to steam | 時間がないので、今日は蒸さないで焼きます。 | Since there's no time, I'll grill it instead of steaming it today. | むさないで | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to apply for | 明日までに、この授業に申し込んでください。 | Please apply for this class by tomorrow. | もうしこんで | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to apply for | まだ試験に申し込んでいません。 | I haven't applied for the exam yet. | もうしこんでいません | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to restore | 使った本は棚に戻してください。 | Please put the book you used back on the shelf. | もどして | N5 L5 T5 C3 I3 — Other verbs like 返して/片付けて could also fit the blank. | teach only | yes |
| to restore | 財布をポケットに戻すのを忘れました。 | I forgot to put my wallet back in my pocket. | もどす | N5 L5 T5 C3 I3 — 入れる/しまう could also fit the blank. | teach only | yes |
| to restore | 一度過ぎた時間を戻すことはできません。 | You can't turn back time that has passed. | もどす | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to be grounded on | この規則は経験に基づいています。 | This rule is based on experience. | もとづいて | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to be grounded on | 彼の話は事実に基づいていません。 | His story is not based on facts. | もとづいていません | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to get torn | 靴下が破れてしまいました。 | My socks got torn. | やぶれて | N5 L5 T5 C3 I3 — Blank could also be filled by other verbs like 汚れて/濡れて, reducing uniqueness. | teach only | yes |
| to get torn | この傘は古くて、すぐに破れます。 | This umbrella is old and tears easily. | やぶれます | N5 L5 T5 C3 I3 — 壊れます could also fit an old umbrella, so not fully unique. | teach only | yes |
| to get torn | ズボンが破れているので、新しいのを買ってください。 | The pants are torn, so please buy new ones. | やぶれて | N5 L5 T5 C3 I3 — 汚れている or 破れている both plausible for pants needing replacement. | teach only | yes |
| mind | おじいさんは年を取っても精神が若いです。 | Even as he gets older, grandfather's mind stays young. | せいしん | N4 L4 T5 C4 I3 | cloze+teach | yes |
| at the most | 電話は精々五分で終わります。 | The phone call will end in five minutes at most. | せいぜい | N4 L5 T5 C3 I3 — だいたい/約 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| at the most | パーティーは精々十人ぐらい呼びましょう。 | Let's invite about ten people at most for the party. | せいぜい | N4 L5 T5 C3 I3 — だいたい/約 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| manufacture | あの工場は自動車を製造しています。 | That factory manufactures cars. | せいぞう | N5 L5 T5 C3 I2 — Generic factory statement; 生産 could also fit blank. | teach only | yes |
| manufacture | この会社は薬を製造しているから、有名です。 | Since this company manufactures medicine, it's famous. | せいぞう | N4 L5 T5 C3 I3 — Slightly odd logic (manufacturing medicine → famous), but adds interest; 生産 also plausible in blank. | teach only | yes |
| manufacture | この工場では食べ物を製造していません。 | This factory doesn't manufacture food. | せいぞう | N5 L5 T5 C3 I2 — Generic negative statement; alternative verbs like 生産 could fit. | teach only | yes |
| growth | 子供の成長はとても早いです。 | Children's growth is very fast. | せいちょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| growth | この植物は成長していません。 | This plant hasn't grown. | せいちょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| system | 日本の制度は複雑です。 | Japan's system is complicated. | せいど | N4 L5 T5 C2 I1 — Generic template sentence; blank could be filled by many nouns. | teach only | yes |
| system | 新しい制度になったから、みんな困っています。 | Because it became a new system, everyone is troubled. | せいど | N4 L5 T4 C3 I3 — Slightly more context but still several words (rule, policy, system) could fit the blank. | teach only | yes |
| system | 会社の制度について話しましょう。 | Let's talk about the company's system. | せいど | N4 L5 T5 C2 I2 — Blank could be replaced by many nouns like plan, policy, or rules, reducing recoverability. | teach only | yes |
| government | 政府は新しい規則を作りました。 | The government made a new rule. | せいふ | N4 L5 T5 C2 I2 — Many subjects (company, school, etc.) could fill the blank, not uniquely 'government'. | teach only | yes |
| government | 政府が発表したから、みんな知っています。 | Since the government announced it, everyone knows. | せいふ | N4 L4 T5 C2 I3 — Blank could be filled by many announcing entities, not uniquely government. | teach only | yes |
| government | 政府はまだ答えていません。 | The government hasn't answered yet. | せいふ | N4 L5 T5 C1 I1 — Extremely generic; almost any subject could fit the blank. | teach only | yes |
| theory | その説は面白いです。 | That theory is interesting. | せつ | N4 L5 T5 C2 I2 — Generic sentence; many nouns (話, 意見, 考え) could fit the blank. | teach only | yes |
| theory | 彼の説は正しくないです。 | His theory isn't correct. | せつ | N4 L5 T5 C2 I2 — Generic template; blank could be filled by 意見, 考え, 話 etc. | teach only | yes |
| love | 母の愛はとても大きいです。 | Mother's love is very great. | あい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| love | 愛について話しませんか。 | Shall we talk about love? | あい | N5 L5 T5 C2 I3 — blank could be filled by many topics (仕事, 将来, etc.) | teach only | yes |
| love | 彼女への愛があるから、頑張ります。 | Because I have love for her, I'll do my best. | あい | N4 L4 T5 C3 I3 — blank could plausibly be 気持ち or 責任感 as well as 愛 | teach only | yes |
| betterment | 学校は授業の方法を改善しました。 | The school improved its class methods. | かいぜん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| betterment | 私はテニスの技術を改善したいです。 | I want to improve my tennis skills. | かいぜん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to restrict | パーティーに呼ぶ友達を五人に限りました。 | I limited the friends invited to the party to five people. | かぎりました | N5 L4 T5 C4 I4 | cloze+teach | yes |
| resolution | 彼は大学を辞める覚悟をしました。 | He resolved to quit the university. | かくご | N4 L5 T5 C3 I3 — 決心/決意 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| resolution | あなたはこの仕事を続ける覚悟がありますか。 | Do you have the resolve to continue this job? | かくご | N5 L5 T5 C4 I4 | cloze+teach | yes |
| magnification | この写真を拡大して見ました。 | I enlarged this photo and looked at it. | かくだい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| magnification | 趣味の店をもっと拡大したいです。 | I want to expand my hobby shop more. | かくだい | N4 L5 T5 C4 I3 | cloze+teach | yes |
| magnification | 会社は工場を拡大しますか。 | Will the company expand the factory? | かくだい | N4 L5 T5 C3 I3 — other words like 拡張 could also fit the blank | teach only | yes |
| affirmation | 先生に宿題の意味を確認しました。 | I confirmed the meaning of the homework with the teacher. | かくにん | N5 L5 T5 C3 I3 — 質問 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| affirmation | 明日の時間を確認しましたか。 | Did you confirm tomorrow's time? | かくにん | N5 L5 T5 C3 I2 — 変更 or other verbs could plausibly fit the blank. | teach only | yes |
| affirmation | 天気予報を確認したいです。 | I want to check the weather forecast. | かくにん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be lacking | この本は一ページ欠けています。 | This book is missing one page. | かけて | N4 L4 T5 C4 I3 — Reading uses えい instead of conventional ー for ページ, but phonetically fine | cloze+teach | yes |
| to be lacking | 茶碗が欠けてしまいました。 | The rice bowl got chipped. | かけて | N5 L4 T5 C5 I3 | cloze+teach | yes |
| to be lacking | 月は欠けていますか。 | Is the moon waning? | かけて | N5 L4 T5 C5 I4 | cloze+teach | yes |
| adjustment | 塩の加減が丁度いいです。 | The amount of salt is just right. | かげん | N5 L5 T4 C4 I3 — Could also fit 味 but 加減 is the idiomatic choice. | cloze+teach | yes |
| adjustment | 体の加減はどうですか。 | How are you feeling? | かげん | N5 L5 T4 C5 I3 — Idiomatic fixed expression, strong cloze cue. | cloze+teach | yes |
| adjustment | 音の加減を少し変えました。 | I changed the sound level a little. | かげん | N4 L5 T4 C3 I3 — 音量 could also fit the blank, weakening recoverability. | teach only | yes |
| loan | 友達に貸しがあります。 | My friend owes me a favor. | かし | N4 L5 T5 C3 I3 — 貸し could be confused with its opposite 借り in this context, slightly reducing recoverability. | teach only | yes |
| to run to | この道は駅に通じています。 | This road leads to the station. | つうじています | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to run to | このトンネルは空港に通じていますか。 | Does this tunnel lead to the airport? | つうじています | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to adjoin | 電気が付きました。 | The light turned on. | つきました | N4 L5 T5 C3 I2 — Blank could also be filled with 消えました, reducing uniqueness. | teach only | yes |
| to adjoin | ズボンに醤油が付いてしまいました。 | Soy sauce got on my pants. | ついてしまいました | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to settle in | 彼は新しい仕事に就きました。 | He took a new job. | つきました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to settle in | 父は来月、部長の地位に就くらしいです。 | I heard my father will take the manager's position next month. | つく | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to settle in | 彼女は課長に就くことになりました。 | It has been decided that she will take the section chief position. | つく | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to thrust | 箸で肉を突きました。 | I poked the meat with my chopsticks. | つきました | N4 L5 T4 C3 I3 — 刺す/挟む could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| to thrust | 彼は指で書類を突いて説明しました。 | He poked the document with his finger and explained it. | ついて | N4 L5 T4 C2 I3 — 指す (to point) or 押す could also fit the blank, reducing recoverability. | teach only | yes |
| to meet by chance | 駅で昔の友達に出会いました。 | I ran into an old friend at the station. | であいました | N5 L5 T5 C4 I3 — 会いました could also fit the blank, slightly reducing uniqueness. | cloze+teach | yes |
| to meet by chance | このレストランで彼女に出会いました。 | I met her by chance at this restaurant. | であいました | N4 L5 T5 C4 I3 — 会いました could also fit the blank, slightly reducing uniqueness. | cloze+teach | yes |
| to meet by chance | 雨の中で先生に出会いました。 | I happened to meet my teacher in the rain. | であいました | N4 L5 T5 C4 I4 — 会いました could also fit, but rain context adds nice specificity. | cloze+teach | yes |
| to let pass | 警官が人を通しました。 | The police officer let people pass. | とおしました | N4 L4 T5 C2 I2 — Blank could plausibly be filled by many verbs (呼びました、止めました等), so recoverability is weak. | teach only | yes |
| to retreat | 危ないですから、そこを退いてください。 | It's dangerous, so please step aside there. | どいてください | N5 L5 T4 C4 I4 — Meaning is closer to 'move out of the way' than 'retreat', but natural and clear cloze context. | cloze+teach | yes |
| to retreat | 電車が来たので、みんな後ろに退きました。 | Since the train came, everyone stepped back. | どきました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| mountain-climbing | 天気がいいので、登山に行きたいです。 | Since the weather is nice, I want to go mountain climbing. | とざん | N5 L5 T5 C3 I3 — Other outdoor activities could also fit the blank. | teach only | yes |
| mountain-climbing | 今度の休みに同僚と登山をする予定です。 | I plan to go mountain climbing with a coworker on my next day off. | とざん | N5 L5 T5 C3 I4 — Context narrows but other activities with coworkers could still fit. | teach only | yes |
| mountain-climbing | 登山はとても楽しいです。 | Mountain climbing is a lot of fun. | とざん | N4 L5 T5 C1 I2 — Generic template sentence; almost any noun could fill the blank. | teach only | yes |
| tiger | 動物園で虎を見ませんか。 | Shall we see the tigers at the zoo? | とら | N5 L5 T5 C2 I2 — Blank could be any animal at the zoo, not uniquely 'tiger'. | teach only | yes |
| tiger | 虎はどんな動物ですか。 | What kind of animal is a tiger? | とら | N5 L5 T5 C1 I2 — Generic template; blank fits any animal name. | teach only | yes |
| mud | 靴に泥がついていますか。 | Is there mud on your shoes? | どろ | N5 L5 T5 C3 I3 — blank could plausibly be filled by other words like 傷/汚れ, weakening uniqueness | teach only | yes |
| mud | 泥で靴が汚れてしまいました。 | My shoes got dirty with mud. | どろ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| scene | 山からの眺めはとても美しいです。 | The view from the mountain is very beautiful. | ながめ | N5 L5 T5 C3 I3 — 景色 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| scene | この部屋から海の眺めが見たいです。 | I want to see the ocean view from this room. | ながめ | N5 L5 T5 C3 I3 — 景色 also fits contextually. | teach only | yes |
| scene | ホテルからの眺めはどうですか。 | How is the view from the hotel? | ながめ | N5 L5 T5 C3 I3 — 景色 could also work in this context. | teach only | yes |
| stream | 川の流れが速いです。 | The river's current is fast. | ながれ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| stream | 時代の流れは速いですね。 | The flow of the times is fast, isn't it. | ながれ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| stream | 川の流れを見ながら休みました。 | I rested while watching the river's flow. | ながれ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| wave | 海の波が高いです。 | The ocean waves are high. | なみ | N4 L5 T5 C4 I2 — Simple, generic sentence but grammatically fine and reading matches. | cloze+teach | yes |
| sunlight | 日光を浴びると元気になります。 | If you get sunlight, you feel more energetic. | にっこう | N5 L5 T5 C4 I3 — 日差し could also fit but 日光 works well | cloze+teach | yes |
| sunlight | 今日は日光が強いですね。 | The sunlight is strong today, isn't it. | にっこう | N5 L5 T5 C3 I3 — 強い could pair with several nouns like 日差し or 風 | teach only | yes |
| root | 野菜の根を切ってください。 | Please cut the root of the vegetable. | ね | N5 L5 T5 C3 I3 — Other words like 皮 or 茎 could plausibly fill the blank. | teach only | yes |
| root | 問題の根はどこにありますか。 | Where is the root of the problem? | ね | N5 L5 T5 C4 I4 | cloze+teach | yes |
| mouse | 台所に鼠が出ました。 | A mouse appeared in the kitchen. | ねずみ | N5 L5 T5 C3 I3 — Blank could plausibly be other pests like bugs, not uniquely mouse. | teach only | yes |
| mouse | 鼠を見て、猫が走りました。 | The cat ran after seeing the mouse. | ねずみ | N4 L5 T4 C2 I3 — Many things could make a cat run (ball, bird, etc.), so blank isn't uniquely recoverable. | teach only | yes |
| (corporate) bankruptcy | 父の会社は先月倒産しました。 | My father's company went bankrupt last month. | とうさん | N5 L5 T5 C3 I3 — Other verbs (成長した/独立した/合併した) could also fit the blank grammatically. | teach only | yes |
| (corporate) bankruptcy | この会社は倒産しないと思います。 | I don't think this company will go bankrupt. | とうさん | N5 L5 T5 C2 I3 — Many verbs (成長する/発展する/解散する等) fit the blank equally well, weakening recoverability. | teach only | yes |
| one another | 友達同士で旅行に行きました。 | We went on a trip together as friends. | どうし | N5 L5 T5 C4 I3 | cloze+teach | yes |
| one another | 知らない人同士は話さないほうがいいです。 | Strangers had better not talk to each other. | どうし | N5 L5 T5 C5 I4 | cloze+teach | yes |
| same mind | 彼は同志と一緒に戦いました。 | He fought together with his comrade. | どうし | N5 L4 T5 C2 I3 — 仲間・同僚など他の語でも文が成立するため空所の一意性が低い | teach only | yes |
| same mind | 同志を集めてください。 | Please gather the like-minded comrades. | どうし | N4 L4 T4 C2 I2 — 他の名詞（人・メンバーなど）でも成立するため答えが一意でない | teach only | yes |
| same mind | あの人は私の同志ではありません。 | That person is not my comrade. | どうし | N5 L4 T5 C2 I3 — 友人・同僚などでも文意が通るため空所特定が難しい | teach only | yes |
| disturbance | 地震のニュースを聞いて、動揺しました。 | I was shaken after hearing the earthquake news. | どうよう | N5 L4 T5 C3 I4 — Other emotion words like 混乱 or びっくり could also fit the blank. | teach only | yes |
| disturbance | 彼は動揺しませんでした。 | He was not disturbed at all. | どうよう | N4 L4 T5 C2 I2 — Very generic sentence; many verbs (心配, 緊張, etc.) could fill the blank. | teach only | yes |
| edition | この本の新しい版が出ました。 | A new edition of this book came out. | はん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| edition | 古い版はもう売っていません。 | The old edition is no longer sold. | はん | N5 L5 T5 C3 I3 — blank could plausibly be 本, 商品, etc., reducing recoverability slightly | teach only | yes |
| edition | この版を貸してください。 | Please lend me this edition. | はん | N4 L5 T5 C2 I2 — very generic sentence; many nouns could fill the blank (本, CD, 傘, etc.) | teach only | yes |
| delinquency | 息子の非行が心配です。 | I'm worried about my son's delinquency. | ひこう | N4 L4 T5 C3 I3 — Blank could also be filled by other worrying nouns like 病気 or 将来, slightly reducing uniqueness. | teach only | yes |
| delinquency | あの子は非行をしたことがありません。 | That child has never engaged in delinquency. | ひこう | N4 L4 T5 C3 I3 — Blank could be filled by other nouns like いたずら or 悪いこと, reducing uniqueness. | teach only | yes |
| hip | 料理をしていたら、急に腰が痛くなりました。 | While I was cooking, my hip suddenly started to hurt. | こし | N5 L4 T5 C3 I4 — Other body parts (頭, 背中, 肩) could also fit the blank, slightly lowering recoverability. | teach only | yes |
| hip | 腰が痛いので、椅子に座ってください。 | Please sit in the chair because your hip hurts. | こし | N4 L4 T4 C3 I3 — Slightly odd logic (telling someone to sit because their hip hurts) and other body-part nouns could fit the blank. | teach only | yes |
| hip | おばあさんの腰は大丈夫ですか。 | Is grandmother's hip okay? | こし | N5 L4 T5 C3 I4 — Common natural phrase about elderly hip health, but other body parts could still fit the blank grammatically. | teach only | yes |
| bone fracture | 電話で、息子が骨折したと聞きました。 | I heard on the phone that my son fractured a bone. | こっせつした | N5 L5 T5 C2 I3 — Blank could be filled with many verbs like 入院した or 怪我した, not uniquely 骨折した. | teach only | yes |
| bone fracture | 足を骨折したから、遅刻しました。 | I was late because I fractured my leg. | こっせつした | N5 L5 T5 C3 I3 — 足を___したから could also be 怪我した, so not fully unique. | teach only | yes |
| bone fracture | スポーツをする時は、骨折に気を付けてください。 | Please be careful of fractures when you do sports. | こっせつ | N5 L5 T5 C3 I3 — に気を付けてください could follow many nouns like 怪我, 事故, etc. | teach only | yes |
| cavity | 甘い物を食べ過ぎると、虫歯になります。 | If you eat too many sweets, you'll get a cavity. | むしば | N5 L5 T5 C4 I4 | cloze+teach | yes |
| cavity | 虫歯が痛いですから、歯医者に行きます。 | My cavity hurts, so I'm going to the dentist. | むしば | N5 L5 T5 C4 I4 | cloze+teach | yes |
| cavity | 虫歯にならないように、歯を磨いてください。 | Please brush your teeth so you don't get cavities. | むしば | N5 L4 T5 C4 I4 | cloze+teach | yes |
| breast | 走ったら、胸が痛くなりました。 | After running, my chest started to hurt. | むね | N5 L5 T5 C2 I3 — Blank could plausibly be filled by other body parts (足, 頭, お腹) since context doesn't uniquely point to chest. | teach only | yes |
| breast | 胸が痛いから、病院へ行きました。 | My chest hurt, so I went to the hospital. | むね | N5 L5 T5 C2 I3 — Same ambiguity: many body-part nouns fit the blank equally well. | teach only | yes |
| breast | 手を胸に当ててください。 | Please put your hand on your chest. | むね | N5 L5 T5 C3 I3 — Slightly more specific gesture context but still could accept other body parts like お腹 or 額. | teach only | yes |
| face (advanced) | 健康の面で、少し心配しています。 | I'm a bit worried in terms of health. | めん | N5 L4 T5 C3 I3 — 点 or 意味 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| face (advanced) | 安全の面から、この計画はだめです。 | From a safety standpoint, this plan is no good. | めん | N5 L4 T5 C3 I3 — 点 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| prevention | 風邪の予防のために、手を洗ってください。 | Please wash your hands to prevent colds. | よぼう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| prevention | 病気を予防するために、野菜をたくさん食べます。 | I eat a lot of vegetables to prevent illness. | よぼうする | N5 L5 T5 C4 I4 | cloze+teach | yes |
| prevention | 予防は治療より大切ですから、気を付けましょう。 | Prevention is more important than treatment, so let's be careful. | よぼう | N5 L5 T5 C4 I5 | cloze+teach | yes |
| to give birth | 姉は先週、女の子を産みました。 | My older sister gave birth to a girl last week. | うみました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to give birth | いつ赤ちゃんを産む予定ですか。 | When are you planning to give birth? | うむ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| tail | この動物には尾がありません。 | This animal doesn't have a tail. | お | N4 L5 T5 C4 I2 — Slightly generic but fine. | cloze+teach | yes |
| tail | 尾が長いから、猿だと分かりました。 | Since its tail is long, I knew it was a monkey. | お | N4 L5 T5 C4 I4 | cloze+teach | yes |
| to be thirsty | 暑くて喉が渇きました。 | I got thirsty because it was hot. | かわきました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be thirsty | 喉が渇いたので水が飲みたいです。 | My throat is dry so I want to drink water. | かわいた | N5 L5 T5 C5 I3 | cloze+teach | yes |
| sense | 足の感覚がありません。 | I have no sensation in my leg. | かんかく | N4 L5 T5 C4 I3 | cloze+teach | yes |
| sense | 寒くて手の感覚がなくなりました。 | My hands lost feeling because it was cold. | かんかく | N5 L5 T5 C5 I4 | cloze+teach | yes |
| sense | 彼は音楽の感覚がいいです。 | He has a good sense for music. | かんかく | N4 L5 T5 C3 I4 — センス might also fit the blank, slightly reducing recoverability | teach only | yes |
| patient | 病院に患者が大勢います。 | There are many patients at the hospital. | かんじゃ | N5 L5 T5 C3 I3 — Could also be filled with 医者 or 看護師, less forced. | teach only | yes |
| patient | 医者は患者を診ました。 | The doctor examined the patient. | かんじゃ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| patient | あの患者は毎日薬を飲みます。 | That patient takes medicine every day. | かんじゃ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| wound | 足に傷があります。 | There is a wound on my leg. | きず | N4 L5 T5 C2 I2 — Blank could be filled by many nouns like あざ、傷跡 etc. | teach only | yes |
| wound | 転んで足に傷ができました。 | I fell and got a wound on my leg. | きず | N5 L5 T5 C5 I4 | cloze+teach | yes |
| wound | 傷が痛いので病院へ行きたいです。 | The wound hurts so I want to go to the hospital. | きず | N4 L5 T5 C3 I3 — Blank could also be filled by other body-related nouns like 歯 or 頭. | teach only | yes |
| tension | テストの前は緊張します。 | I get nervous before a test. | きんちょうします | N5 L5 T5 C2 I3 — Blank could also be filled by other verbs like 勉強/準備, reducing recoverability. | teach only | yes |
| tension | 試合の前に緊張しました。 | I got nervous before the game. | きんちょうしました | N5 L5 T5 C2 I3 — Context 'before the game' could fit 練習, 準備, etc., not uniquely 緊張. | teach only | yes |
| tension | 面接で緊張したくないです。 | I don't want to get nervous at the interview. | きんちょうしたくない | N5 L5 T5 C3 I3 — Slightly more context (面接) narrows options but still could fit 失敗 or 緊張 both. | teach only | yes |
| to go mad | 彼は狂ったように走りました。 | He ran like a madman. | くるった | N5 L5 T5 C3 I4 — Several words (慌てた, 必死に, 逃げる) could fit the ように blank, reducing recoverability. | teach only | yes |
| to go mad | 時計が狂っています。 | The clock is off. | くるって | N5 L5 T4 C3 I3 — Other verbs like 遅れて or 止まって could also fit the blank about a clock. | teach only | yes |
| to suffer | 病気で苦しんでいます。 | I am suffering from illness. | くるしんで | N5 L4 T5 C4 I2 | cloze+teach | yes |
| to suffer | 彼は借金で苦しみました。 | He suffered because of debt. | くるしみました | N5 L4 T5 C3 I3 — 困りました/悩みました could also fit the blank. | teach only | yes |
| to suffer | 熱で苦しんでいる子供がいます。 | There is a child suffering from fever. | くるしんでいる | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to be taught | 先生に英語を教わっていますか。 | Are you being taught English by a teacher? | おそわっています | N5 L5 T5 C3 I3 — 習っています could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| to sell wholesale | 父は魚を市場に卸す仕事をしています。 | My father has a job wholesaling fish to the market. | おろす | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to sell wholesale | この会社は洋服を卸していますか。 | Does this company wholesale clothing? | おろして | N4 L4 T4 C3 I3 — Blank could plausibly be filled with 売って as well, slightly reducing recoverability. | teach only | yes |
| department | 私は営業課で働いています。 | I work in the sales department. | か | N5 L5 T5 C3 I3 — Other words like 部署 or 会社 could also fit the blank. | teach only | yes |
| department | あの人はどの課にいますか。 | Which department is that person in? | か | N5 L5 T5 C3 I3 — Blank could also be filled with 部署 or 会社, reducing uniqueness. | teach only | yes |
| diplomacy | 彼は外交の仕事に興味があります。 | He is interested in diplomatic work. | がいこう | N4 L5 T5 C2 I3 — Many nouns could fill the blank (法律, 医療, 教育, etc.). | teach only | yes |
| diplomacy | 外交の仕事はどんな仕事ですか。 | What kind of work is diplomatic work? | がいこう | N4 L5 T5 C2 I2 — Generic template; many job-related nouns fit the blank. | teach only | yes |
| diplomacy | 外交についてのニュースを聞きました。 | I heard news about diplomacy. | がいこう | N4 L5 T5 C3 I3 — Slightly better constrained by 'ニュース' context but still allows other topics like 政治, 経済. | teach only | yes |
| painter | 彼女は有名な画家です。 | She is a famous painter. | がか | N4 L5 T5 C2 I2 — Generic template sentence; many occupation nouns could fit blank. | teach only | yes |
| painter | 将来、画家になりたいです。 | I want to become a painter in the future. | がか | N5 L5 T5 C3 I3 — Slightly generic but plausible; other occupations could fit. | teach only | yes |
| painter | あの画家はどこに住んでいますか。 | Where does that painter live? | がか | N5 L5 T5 C2 I3 — Blank could be filled by many nouns like 彼、先生、人 etc. | teach only | yes |
| chemistry | 化学のテストは難しかったです。 | The chemistry test was difficult. | かがく | N5 L5 T5 C2 I2 — Many subjects could fill the blank (数学, 英語, 物理 etc.), so the target word isn't uniquely recoverable. | teach only | yes |
| chemistry | 化学が好きですか。 | Do you like chemistry? | かがく | N5 L5 T5 C2 I2 — Generic template sentence; blank could be any noun/subject, weak cloze constraint. | teach only | yes |
| person in charge | 受付の係に聞いてください。 | Please ask the receptionist in charge. | かかり | N5 L5 T5 C3 I3 — Other words like 担当者 or 人 could also fit the blank, reducing recoverability. | teach only | yes |
| person in charge | 今日の係は誰ですか。 | Who is in charge today? | かかり | N5 L5 T5 C3 I3 — Words like 当番 or 担当 could also fill the blank. | teach only | yes |
| learning | 彼は学のある人です。 | He is a learned man. | がく | N5 L4 T5 C2 I3 — Many other words (才能・徳・品) could fill the blank in this pattern. | teach only | yes |
| learning | 学を積むことは大切です。 | Accumulating learning is important. | がく | N5 L4 T5 C3 I3 — 経験や知識も「積む」と結びつくため一意性はやや低い。 | teach only | yes |
| learning | 学がなくても、成功する人はいます。 | There are people who succeed even without formal learning. | がく | N5 L4 T5 C3 I4 — 「金」や「才能」なども当てはまり得るため完全な一意性はない。 | teach only | yes |
| as ever | 兄は相変わらず忙しいです。 | My brother is busy as usual. | あいかわらず | N5 L5 T5 C4 I3 | cloze+teach | yes |
| sign | 先生は手で合図をします。 | The teacher gives a signal with their hand. | あいず | N5 L5 T5 C4 I3 | cloze+teach | yes |
| sign | 電車が出る前に、合図がありました。 | There was a signal before the train departed. | あいず | N4 L5 T5 C2 I3 — blank could be filled by many words like ベル or アナウンス | teach only | yes |
| sign | 早く合図をしてください。 | Please give the signal quickly. | あいず | N4 L5 T5 C2 I2 — blank could be filled by many nouns like 準備 or 連絡 | teach only | yes |
| unfortunately | あいにく今日は雨です。 | Unfortunately it's raining today. | あいにく | N4 L5 T5 C2 I2 — Blank could be filled by many adverbs (たぶん, やっぱり, etc.), context doesn't force 'unfortunately'. | teach only | yes |
| unfortunately | あいにく彼は忙しかったです。 | Unfortunately he was busy. | あいにく | N4 L5 T5 C2 I2 — Sentence alone doesn't uniquely require あいにく; other adverbs fit. | teach only | yes |
| unfortunately | あいにく明日は都合が悪いです。 | Unfortunately tomorrow is inconvenient for me. | あいにく | N4 L5 T5 C2 I3 — Slightly more contextually suggestive but still not uniquely recoverable. | teach only | yes |
| out | 彼はアウトになりました。 | He was called out. | あうと | N4 L5 T5 C2 I3 — blank could be filled by many nouns (病気, 有名, etc.), not uniquely アウト | teach only | yes |
| out | 今のはアウトです。 | That last one was out. | あうと | N4 L5 T4 C3 I3 — context slightly narrows options but words like セーフ/ファウル could also fit | teach only | yes |
| vacancy | このホテルには空きがあります。 | This hotel has vacancies. | あき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| vacancy | 部屋の空きを調べました。 | I checked the room's vacancy. | あき | N4 L5 T4 C2 I3 — blank could be filled with many nouns like 値段, 広さ, etc., weakening cloze uniqueness | teach only | yes |
| vacancy | 空きがあれば予約したいです。 | If there's a vacancy, I want to make a reservation. | あき | N5 L5 T5 C5 I4 | cloze+teach | yes |
| devil | あの映画には悪魔が出ます。 | A devil appears in that movie. | あくま | N4 L5 T5 C2 I3 — Many other nouns (お化け、怪獣など) could fill the blank. | teach only | yes |
| devil | 子供は悪魔の話を聞きました。 | The child heard a story about a devil. | あくま | N4 L5 T5 C2 I2 — Generic template; blank could be filled by many nouns. | teach only | yes |
| devil | 悪魔を信じますか。 | Do you believe in devils? | あくま | N4 L5 T5 C2 I3 — Blank could be 神、幽霊、UFOなど, low uniqueness. | teach only | yes |
| gathering | 土曜日に家族の集まりがあります。 | There's a family gathering on Saturday. | あつまり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| gathering | 昨日、友達の集まりに行きました。 | Yesterday I went to a friends' gathering. | あつまり | N5 L5 T5 C3 I3 — Could also be パーティー or 家 etc. | teach only | yes |
| gathering | 集まりに遅れないでください。 | Please don't be late to the gathering. | あつまり | N5 L5 T5 C2 I3 — Many nouns like 会議やパーティー could fit the blank. | teach only | yes |
| bundle | この包みを一緒に開けましょう。 | Let's open this bundle together. | つつみ | N4 L5 T5 C3 I3 — Natural and clear, though 'box' or 'present' could also fit the blank. | teach only | yes |
| failure of electricity | 台風で停電しそうです。 | It looks like there will be a power outage because of the typhoon. | ていでんし | N5 L5 T5 C3 I3 | teach only | yes |
| failure of electricity | 今日は停電しませんでした。 | There was no power outage today. | ていでん | N5 L5 T5 C2 I2 — blank could be filled by many nouns, weak context | teach only | yes |
| iron | このドアは鉄でできています。 | This door is made of iron. | てつ | N4 L5 T5 C3 I3 — Blank could also fit other materials like wood or plastic, reducing uniqueness. | teach only | yes |
| tent | 新しいテントが欲しいです。 | I want a new tent. | てんと | N4 L5 T5 C2 I2 — Generic template sentence; blank could be many nouns (car, bike, etc.). | teach only | yes |
| tent | 山でテントを立てました。 | I set up a tent in the mountains. | てんと | N5 L5 T5 C4 I4 | cloze+teach | yes |
| tent | 明日テントを持って行きませんか。 | Shall we take a tent tomorrow? | てんと | N5 L5 T5 C3 I4 — Other items to bring could also fit the blank, slightly reducing recoverability. | teach only | yes |
| playing cards | 一緒にトランプをしませんか。 | Shall we play cards together? | とらんぷ | N5 L5 T5 C3 I3 — Blank could be filled with other game nouns like ゲーム, reducing exact recoverability. | teach only | yes |
| playing cards | 雨でしたから、トランプをしました。 | It was raining, so we played cards. | とらんぷ | N5 L5 T5 C3 I3 — Context (rain, indoor activity) still allows other nouns like ゲーム or パズル. | teach only | yes |
| playing cards | 子供はトランプで遊びませんでした。 | The children didn't play with the cards. | とらんぷ | N4 L5 T5 C2 I2 — Many toys/objects could fit '子供は＿で遊びませんでした', so the blank isn't uniquely determined. | teach only | yes |
| dress | 白いドレスが欲しいです。 | I want a white dress. | どれす | N5 L5 T5 C2 I2 — blank could be any clothing item, not uniquely 'dress' | teach only | yes |
| dress | パーティーがありますから、新しいドレスを買いました。 | There's a party, so I bought a new dress. | どれす | N5 L5 T5 C3 I4 — party context helps narrow to clothing but still multiple items possible | teach only | yes |
| dress | そのドレスはいくらですか。 | How much is that dress? | どれす | N5 L5 T5 C1 I2 — generic sentence, blank could be virtually any noun | teach only | yes |
| saucepan | 新しい鍋を買いました。 | I bought a new saucepan. | なべ | N4 L5 T5 C2 I2 — Blank could be filled by many nouns (bag, book, etc.). | teach only | yes |
| saucepan | 鍋が熱いですから、気をつけてください。 | The pot is hot, so please be careful. | なべ | N4 L5 T5 C2 I2 — Many hot objects could fit the blank; low recoverability. | teach only | yes |
| saucepan | この鍋は台所にありません。 | This pot isn't in the kitchen. | なべ | N4 L5 T5 C2 I2 — Generic sentence, many nouns could fit the blank. | teach only | yes |
| rope | 縄が切れましたから、危ないです。 | The rope broke, so it's dangerous. | なわ | N4 L5 T5 C3 I3 | teach only | yes |
| rope | この縄を使いましょう。 | Let's use this rope. | なわ | N4 L5 T5 C2 I2 — generic sentence, many nouns fit the blank | teach only | yes |
| oneself | 電話で私自身が説明します。 | I myself will explain over the phone. | じしん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| oneself | あなた自身はどう思いますか。 | What do you yourself think? | じしん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| oneself | 自分自身の意見を発表しませんか。 | Won't you present your own opinion? | じしん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| thought | この本には新しい思想が書いてある。 | A new thought is written in this book. | しそう | N4 L4 T4 C3 I3 | teach only | yes |
| thought | あなたはどんな思想に興味がありますか。 | What kind of thought are you interested in? | しそう | N4 L4 T4 C2 I3 — Many nouns (分野, テーマ, 本) could fit the blank. | teach only | yes |
| thought | 彼の思想は少し難しいと思う。 | I think his thought is a bit difficult. | しそう | N4 L4 T4 C2 I3 — Words like 話, 意見, 考え could equally fill the blank. | teach only | yes |
| order | 準備ができ次第、伺います。 | As soon as preparations are done, I'll come over. | しだい | N4 L3 T5 C4 I3 | cloze+teach | yes |
| order | 結果が分かり次第、知らせます。 | As soon as the results are known, I'll let you know. | しだい | N4 L3 T5 C4 I3 | cloze+teach | yes |
| quality | このカメラは質がいいです。 | This camera has good quality. | しつ | N5 L5 T5 C2 I2 — Blank could be filled by many words like デザイン, 性能, 色. | teach only | yes |
| quality | この大学の授業の質はどうですか。 | How is the quality of this university's classes? | しつ | N5 L5 T5 C3 I3 — Blank could plausibly be filled by レベル or 内容 too. | teach only | yes |
| quality | 質より量が大切だと思う。 | I think quantity is more important than quality. | しつ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| implementation | 夢を実現したいです。 | I want to realize my dream. | じつげん | N5 L5 T4 C3 I3 — Word means 'realize/come true', not 'implementation'; gloss is slightly off but sentence usage is correct. | teach only | yes |
| implementation | 計画がついに実現しました。 | The plan was finally realized. | じつげん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| implementation | その計画は実現できますか。 | Can that plan be realized? | じつげん | N5 L5 T5 C3 I3 — Other verbs like 実行 or 達成 could also fit the blank. | teach only | yes |
| in fact | 実際に会ってみると優しい人でした。 | When I actually met him, he was a kind person. | じっさい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| in fact | 実際の試験は思ったより易しかった。 | The actual exam was easier than I thought. | じっさい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| in fact | 実際にどれくらい時間がかかりますか。 | How much time does it actually take? | じっさい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| enforcement | 調査は来週実施する予定です。 | The survey is planned to be conducted next week. | じっし | N5 L5 T5 C4 I3 | cloze+teach | yes |
| indeed | この映画は実に面白かった。 | This movie was truly interesting. | じつに | N5 L4 T5 C2 I3 — Blank could also be filled with とても/非常に/本当に, reducing uniqueness. | teach only | yes |
| indeed | 実に難しい問題だった。 | It was truly a difficult problem. | じつに | N5 L4 T5 C2 I3 — Blank could also be filled with とても/非常に/本当に, reducing uniqueness. | teach only | yes |
| central | 駅の中央に大きい時計があります。 | There is a big clock in the center of the station. | ちゅうおう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| central | 友達が来たので、部屋の中央にテーブルを置きました。 | Since a friend came, I put the table in the center of the room. | ちゅうおう | N4 L5 T5 C4 I4 — Reading 'てえぶる' for テーブル is nonstandard; long vowel usually written てーぶる. | cloze+teach | yes |
| central | 中央の入口から入りましょうか。 | Shall we go in through the central entrance? | ちゅうおう | N4 L5 T5 C3 I3 — Could also fit words like 正面 or 表, slightly ambiguous. | teach only | yes |
| center | 町の中心に大きい公園があります。 | There is a big park in the center of the town. | ちゅうしん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| center | 地図で町の中心はどこですか。 | On the map, where is the center of the town? | ちゅうしん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| tower | 父はあの古い塔が好きです。 | My father likes that old tower. | とう | N5 L5 T5 C2 I2 — Blank could be filled with many nouns like 山, 本, 店. | teach only | yes |
| tower | 明日、一緒にあの塔に登りませんか。 | Won't you climb that tower with me tomorrow? | とう | N5 L5 T5 C3 I4 — Climbing context suggests tower but could also fit 山 or ビル. | teach only | yes |
| tower | あの塔は何メートルありますか。 | How many meters is that tower? | とう | N5 L5 T5 C3 I3 — Height question could apply to building or mountain too, not unique to tower. | teach only | yes |
| Orient | 父は東洋の歴史が好きです。 | My father likes the history of the Orient. | とうよう | N5 L5 T5 C2 I3 — Many nouns (日本, 中国, 世界, etc.) could fill the blank equally well. | teach only | yes |
| Orient | 東洋の音楽が好きですか。 | Do you like Oriental music? | とうよう | N5 L5 T5 C2 I2 — Blank not uniquely recoverable; generic template sentence. | teach only | yes |
| somewhere | 鍵をどこかに忘れてしまいました。 | I forgot my key somewhere. | どこか | N5 L5 T5 C5 I3 | cloze+teach | yes |
| plot of land | 父はこの土地を買いました。 | My father bought this land. | とち | N5 L5 T5 C3 I3 — Blank could be filled with many nouns like 家 or 車. | teach only | yes |
| plot of land | この土地はいくらですか。 | How much is this piece of land? | とち | N5 L5 T5 C2 I2 — Very generic sentence; blank fits almost any noun (家, 車, 本, etc.). | teach only | yes |
| plot of land | この土地は駅から近いから、便利です。 | This land is convenient because it's close to the station. | とち | N5 L5 T5 C3 I4 — Context slightly narrows options but words like 家 or アパート could also fit. | teach only | yes |
| tunnel | 電車は長いトンネルを通ります。 | The train passes through a long tunnel. | とんねる | N5 L5 T5 C3 I3 — Other nouns like 橋 or 道 could also fit the blank. | teach only | yes |
| tunnel | このトンネルはどのくらい長いですか。 | About how long is this tunnel? | とんねる | N5 L5 T5 C3 I3 — Blank could also be filled with 道 or 川 etc. | teach only | yes |
| tunnel | トンネルの中は暗いから、気をつけてください。 | Please be careful because it's dark inside the tunnel. | とんねる | N5 L5 T5 C3 I4 — Blank could also be 部屋 or 箱, but darkness fits tunnel well. | teach only | yes |
| Japan | 私は日本に住んでいます。 | I live in Japan. | にほん | N5 L5 T5 C2 I2 — Any country name could fill the blank, so cloze recoverability is weak. | teach only | yes |
| Japan | 日本の食べ物は好きですか。 | Do you like Japanese food? | にほん | N5 L5 T5 C2 I3 — Any country name works in the blank; context doesn't force 日本 specifically. | teach only | yes |
| Japan | 一緒に日本の映画を見ませんか。 | Won't you watch a Japanese movie with me? | にほん | N5 L5 T5 C2 I3 — Any country name could fit the blank before 映画. | teach only | yes |
| separates | 台風で舟が港から離れました。 | The boat left the harbor because of the typhoon. | はなれました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| separates | 危ないですから、そこから離れてください。 | It's dangerous, so please move away from there. | はなれて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to omit | 忙しいので、詳しい説明を省いてください。 | I'm busy, so please omit the detailed explanation. | はぶいて | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to omit | 時間がなかったので、野菜を洗うことを省きました。 | Since I didn't have time, I skipped washing the vegetables. | はぶきました | N4 L4 T5 C4 I3 | cloze+teach | yes |
| to deepen | 旅行中に秋が深まってきました。 | Autumn deepened during the trip. | ふかまって | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to deepen | 話し合えば話し合うほど、理解が深まります。 | The more we talk, the deeper our understanding becomes. | ふかまります | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to wipe | 急いでいたので、汗だけ拭いて出かけました。 | I was in a hurry, so I just wiped my sweat and left. | ふいて | N4 L4 T5 C4 I4 | cloze+teach | yes |
| to include | 子供を含めて、六人で公園に行きます。 | We're going to the park with six people, including the kids. | ふくめて | N5 L5 T5 C3 I2 — 除いて could also fit the blank grammatically, reducing uniqueness. | teach only | yes |
| to include | 私を含めて、四人がその旅行に参加しました。 | Including me, four people joined that trip. | ふくめて | N5 L5 T5 C3 I2 — Same structural ambiguity as other sentences with 除いて. | teach only | yes |
| to include | 部長を含めて、みんなが会議に遅れました。 | Including the department head, everyone was late for the meeting. | ふくめて | N4 L5 T5 C3 I2 — Slightly less natural context (everyone late including boss) but grammatically fine; ambiguity with 除いて remains. | teach only | yes |
| to defend | 事故を防ぐために、注意してください。 | Please be careful to prevent accidents. | ふせぐ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to defend | 塩を使って、食べ物が腐るのを防ぎます。 | We use salt to prevent food from rotting. | ふせぎます | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to knock | 急いでいたので、机に足をぶつけました。 | I was in a hurry, so I bumped my leg on the desk. | ぶつけました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to knock | 台所で頭を棚にぶつけてしまいました。 | I accidentally bumped my head on the shelf in the kitchen. | ぶつけて | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to knock | 荷物を壁にぶつけないでください。 | Please don't bump the luggage against the wall. | ぶつけない | N5 L5 T5 C4 I4 | cloze+teach | yes |
| hometown | 来年、故郷に帰りたいです。 | I want to return to my hometown next year. | こきょう | N5 L5 T5 C3 I3 — Other words like 実家 or 国 could also fit the blank. | teach only | yes |
| hometown | 去年の夏、故郷へ帰りました。 | Last summer, I returned to my hometown. | こきょう | N5 L5 T5 C3 I3 — Similar ambiguity with 実家/田舎 possible in the blank. | teach only | yes |
| hometown | あなたの故郷はどこですか。 | Where is your hometown? | こきょう | N5 L5 T5 C3 I3 — Could also be answered with 出身 or 実家, slightly reducing uniqueness. | teach only | yes |
| state | この国家は歴史が長いです。 | This state has a long history. | こっか | N4 L5 T5 C2 I2 — 国 could equally fill the blank, weak cloze constraint | teach only | yes |
| state | あの国家は経済が強いですか。 | Is that state's economy strong? | こっか | N4 L5 T5 C2 I2 — 国 could equally fill the blank, weak cloze constraint | teach only | yes |
| state | 新しい国家ができました。 | A new state was formed. | こっか | N4 L5 T5 C3 I3 — slightly more specific context but 国 still plausible | teach only | yes |
| National Diet | 父は国会で働いています。 | My father works at the National Diet. | こっかい | N5 L5 T5 C2 I3 — Blank could be filled by many workplace nouns (会社, 病院, etc.), reducing recoverability. | teach only | yes |
| National Diet | 国会はどこにありますか。 | Where is the National Diet located? | こっかい | N5 L5 T5 C2 I3 — Any place name could fit the blank, making the target hard to pin down uniquely. | teach only | yes |
| national or state border | 川が二つの国の国境です。 | The river is the border between the two countries. | こっきょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| national or state border | バスで国境を越えました。 | We crossed the border by bus. | こっきょう | N5 L5 T5 C3 I3 — blank could be filled by many nouns like 川, 山, 橋 etc. | teach only | yes |
| national or state border | あの山は国境ですか。 | Is that mountain the border? | こっきょう | N4 L5 T5 C2 I2 — blank is highly ambiguous; many words could describe a mountain | teach only | yes |
| hut | 山に小さい小屋を建てたいです。 | I want to build a small hut in the mountains. | こや | N5 L5 T5 C3 I3 | teach only | yes |
| hut | 森の中に古い小屋がありました。 | There was an old hut in the forest. | こや | N5 L5 T5 C4 I4 | cloze+teach | yes |
| border | この川が町の境です。 | This river is the border of the town. | さかい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| border | 二つの村の境を歩きました。 | I walked along the border of the two villages. | さかい | N4 L5 T5 C4 I3 | cloze+teach | yes |
| border | どこが県の境ですか。 | Where is the border of the prefecture? | さかい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| inn | 山の宿に一泊しました。 | We stayed one night at a mountain inn. | やど | N5 L5 T5 C5 I3 | cloze+teach | yes |
| inn | この宿は静かですか。 | Is this inn quiet? | やど | N5 L5 T5 C2 I2 — blank could be filled by many nouns like 店・部屋・家, not uniquely 宿 | teach only | yes |
| Europe | 来年、ヨーロッパへ旅行したいです。 | I want to travel to Europe next year. | ようろっぱ | N5 L5 T5 C2 I3 — Many place names could fill the blank, so context doesn't force 'Europe' specifically. | teach only | yes |
| Europe | 去年ヨーロッパへ行きました。 | Last year I went to Europe. | ようろっぱ | N5 L5 T5 C2 I2 — Very generic; any destination word could fit the blank. | teach only | yes |
| Europe | ヨーロッパはどんな所ですか。 | What kind of place is Europe? | ようろっぱ | N5 L5 T5 C2 I3 — Any place name could fit the blank equally well. | teach only | yes |
| thinking | 部長の考えはいつも面白いです。 | The department manager's ideas are always interesting. | かんがえ | N4 L5 T4 C3 I3 — 考え here means 'ideas' rather than 'thinking'; blank could also be filled by other nouns like 話 or アイデア, slightly reducing recoverability. | teach only | yes |
| emotion | 彼女は感情をあまり出しません。 | She doesn't show her emotions much. | かんじょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| emotion | 感情を大切にしてください。 | Please treat your emotions with care. | かんじょう | N4 L5 T4 C2 I2 — Generic advice sentence; 気持ち or 心 could also fill the blank equally well. | teach only | yes |
| to feel | 仕事が終わって、疲れを感じます。 | After finishing work, I feel tired. | かんじます | N5 L5 T5 C3 I3 — 疲れを覚える also fits the blank, slightly lowering recoverability. | teach only | yes |
| to feel | 電車が揺れて、少し怖く感じました。 | The train shook, and I felt a bit scared. | かんじました | N5 L5 T5 C3 I4 — 思いました could also fit, reducing uniqueness slightly. | teach only | yes |
| to feel | この料理は辛く感じませんか。 | Don't you feel this dish is spicy? | かんじませんか | N5 L5 T5 C3 I3 — 思いませんか is also plausible in the blank. | teach only | yes |
| admiration | 彼の仕事の速さに感心しました。 | I was impressed by his speed at work. | かんしんしました | N5 L4 T5 C3 I4 — Other words like 驚き or 感動 could also fit the blank contextually. | teach only | yes |
| admiration | 彼女はいつも時間を守るので、感心します。 | Since she always keeps time, I admire her. | かんしんします | N5 L4 T5 C3 I4 — Similar ambiguity; 尊敬 or 感動 could plausibly fit the blank. | teach only | yes |
| admiration | あなたはあの学生の努力に感心しませんか。 | Don't you admire that student's effort? | かんしんしませんか | N5 L4 T5 C3 I4 — Blank could arguably be filled with 尊敬 or 感動 as well. | teach only | yes |
| concern | 彼は経済に関心があります。 | He is interested in economics. | かんしん | N5 L5 T5 C2 I2 — 興味 would also fit the blank equally well, reducing recoverability. | teach only | yes |
| concern | 若い人は健康食品に関心を持っています。 | Young people are interested in healthy foods. | かんしん | N5 L5 T5 C2 I3 — 興味を持っています fits the blank just as naturally as 関心. | teach only | yes |
| concern | あなたは政治に関心がありますか。 | Are you interested in politics? | かんしん | N5 L5 T5 C2 I3 — 興味がありますか would also work, so the blank isn't uniquely recoverable. | teach only | yes |
| to concern | この件に関する書類を用意してください。 | Please prepare the documents concerning this matter. | かんする | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to concern | 料理に関する質問があれば、聞いてください。 | If you have any questions about the food, please ask. | かんする | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to concern | 電車の遅れに関するニュースを聞きました。 | I heard news about the train delay. | かんする | N5 L4 T5 C4 I4 | cloze+teach | yes |
| complete | 新しいビルがもうすぐ完成します。 | The new building will be completed soon. | かんせい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| complete | 料理はまだ完成していません。 | The dish isn't finished yet. | かんせい | N5 L5 T5 C3 I3 — 準備・用意 could also fit the blank, slightly lowering recoverability. | teach only | yes |
| complete | このセーターは完成するまで一週間かかりました。 | It took a week for this sweater to be completed. | かんせい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| impressions | 彼は映画の感想をあまり言いません。 | He doesn't say much about his impressions of movies. | かんそう | N5 L5 T5 C3 I3 — 感想 could be swapped with 意見 or 感情, slightly reducing recoverability. | teach only | yes |
| impressions | 新しい電車に乗った感想はどうですか。 | What are your impressions of riding the new train? | かんそう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| grave | 先週の日曜日に家族でおじいさんの墓へ行きました。 | Last Sunday, we went to Grandpa's grave with the family. | はか | N5 L5 T5 C3 I4 — Blank could also be filled with 家 or 病院 since context doesn't strongly force 'grave' alone. | teach only | yes |
| grave | 明日、おばあさんの墓に花を置きたいです。 | Tomorrow, I want to put flowers at Grandma's grave. | はか | N4 L5 T5 C4 I4 — Slightly more natural verb would be 供える rather than 置く for flowers at a grave, but acceptable. | cloze+teach | yes |
| museum | この博物館では古い写真を見ることができます。 | At this museum, you can see old photos. | はくぶつかん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| museum | あの博物館は有名らしいです。 | That museum is apparently famous. | はくぶつかん | N4 L5 T5 C1 I2 — Generic sentence; almost any place or thing noun could fill the blank with 有名らしい. | teach only | yes |
| end (e.g., of street) | 道の端に自転車が止まっています。 | A bicycle is parked at the end of the road. | はし | N5 L5 T5 C4 I3 | cloze+teach | yes |
| end (e.g., of street) | 道の端まで歩けば、駅が見えます。 | If you walk to the end of the road, you'll see the station. | はし | N5 L5 T5 C4 I3 | cloze+teach | yes |
| end (e.g., of street) | ちょっと、この道の端で待っていてください。 | Please wait a moment at the end of this road. | はし | N4 L5 T5 C3 I3 — ちょっと... at the start feels slightly odd with 端 as focus; other words like 角 or 横 could also fit the blank. | teach only | yes |
| moving | 来月、新しいアパートに引っ越しをすることにしました。 | I've decided to move to a new apartment next month. | ひっこし | N5 L4 T5 C5 I4 — Reading uses hiragana for katakana word アパート, but pronunciation is correct. | cloze+teach | yes |
| moving | 来週、引っ越しをする予定です。 | I plan to move next week. | ひっこし | N4 L3 T5 C3 I2 — Generic sentence; many other nouns (旅行、出張 etc.) could fit the blank equally well. | teach only | yes |
| stage | 彼女は舞台に立ったことがあります。 | She has stood on a stage before. | ぶたい | N4 L4 T5 C3 I3 — Blank could be filled with other locations like 山 or 舞台 without ambiguity from context alone. | teach only | yes |
| stage | 歌を歌いながら、舞台の上を歩きました。 | She walked on the stage while singing a song. | ぶたい | N5 L4 T5 C4 I4 | cloze+teach | yes |
| stage | あの舞台はきっと素晴らしいはずです。 | That stage performance is surely going to be wonderful. | ぶたい | N4 L4 T4 C2 I3 — Many nouns (映画、料理、公演) could fit the blank, making the target word hard to uniquely recover. | teach only | yes |
| platform | 電車が来るとき、ホームで待っていました。 | I was waiting on the platform when the train came. | ほうむ | N5 L5 T5 C3 I3 | teach only | yes |
| platform | ホームでは黄色の線の中に立たなければなりません。 | You must stand within the yellow line on the platform. | ほうむ | N5 L4 T5 C5 I4 | cloze+teach | yes |
| platform | 次の電車まで時間があるから、ホームで座りましょう。 | We have time until the next train, so let's sit on the platform. | ほうむ | N4 L4 T5 C3 I3 | teach only | yes |
| walkway | 自転車は歩道を走ってはいけません。 | Bicycles must not ride on the sidewalk. | ほどう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| walkway | 道より歩道のほうが安全です。 | The sidewalk is safer than the road. | ほどう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| walkway | 雪のために、歩道が狭くなりました。 | Because of the snow, the sidewalk became narrower. | ほどう | N5 L5 T5 C3 I4 — blank could plausibly be 道路 or other words, slightly reducing recoverability | teach only | yes |
| crush | 子供の頃、動物に夢中になったことがあります。 | When I was a child, I was crazy about animals. | むちゅう | N4 L4 T4 C3 I3 — Other words like 熱中 or 興味 could also fit the blank; also 'crush' is an odd gloss for 夢中 here since the sentence means 'absorbed/crazy about', not romantic infatuation. | teach only | yes |
| noun | この言葉は名詞ですか、動詞ですか。 | Is this word a noun or a verb? | めいし | N5 L5 T5 C5 I4 | cloze+teach | yes |
| noun | 「猫」は名詞です。 | "Cat" is a noun. | めいし | N5 L5 T5 C2 I2 — Blank could be filled with many words like 'animal' or 'pet' without more context. | teach only | yes |
| rarely | 母は忙しくて、滅多に買い物に行きません。 | My mother is busy and rarely goes shopping. | めったに | N5 L4 T5 C4 I3 | cloze+teach | yes |
| rarely | 田舎では滅多に雪が降りません。 | In the countryside, it rarely snows. | めったに | N5 L4 T5 C4 I3 | cloze+teach | yes |
| memorandum | 買い物のメモを書きました。 | I wrote a shopping memo. | めも | N5 L5 T5 C3 I3 — リスト could also fit, slightly reducing uniqueness | teach only | yes |
| memorandum | 電話番号をメモしておきます。 | I'll jot down the phone number. | めも | N5 L5 T5 C5 I3 | cloze+teach | yes |
| memorandum | 会議の前にメモを取ってください。 | Please take a memo before the meeting. | めも | N4 L5 T4 C4 I3 — 'ノート' could also fit the blank, and 'before the meeting' is a slightly odd context for taking notes | cloze+teach | yes |
| purpose | 旅行の目的は何ですか。 | What is the purpose of the trip? | もくてき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| purpose | 彼は目的のために毎日頑張っています。 | He works hard every day for his purpose. | もくてき | N4 L5 T4 C3 I3 — 目標 could also fit the blank, slightly reducing recoverability | teach only | yes |
| origin | この店は元銀行でした。 | This shop used to be a bank. | もと | N5 L5 T5 C4 I4 | cloze+teach | yes |
| origin | 元の場所に戻してください。 | Please put it back in its original place. | もと | N5 L5 T5 C5 I4 | cloze+teach | yes |
| basis | 経験を基にして、話しました。 | I spoke based on my experience. | もと | N5 L4 T5 C4 I3 | cloze+teach | yes |
| basis | この本は事実を基にしています。 | This book is based on facts. | もと | N5 L4 T5 C4 I3 | cloze+teach | yes |
| basis | 何を基に決めましたか。 | What did you base your decision on? | もと | N5 L4 T5 C4 I3 | cloze+teach | yes |
| prime | 米は日本料理の素です。 | Rice is the basis of Japanese cuisine. | もと | N4 L3 T4 C4 I3 | cloze+teach | yes |
| disposition | 弟は意地が悪いです。 | My younger brother has a nasty disposition. | いじ | N5 L5 T5 C3 I3 — 性格が悪い/根性が悪い could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| disposition | どうしてそんなに意地が悪いのですか。 | Why are you so mean-spirited? | いじ | N5 L5 T5 C3 I3 — Similar to sentence 0; 性格/根性 could also fit the blank. | teach only | yes |
| surprise | 彼の話は驚きでした。 | His story was a surprise. | おどろき | N4 L5 T5 C2 I3 — Blank could be filled by many nouns (嘘, 冗談, 面白い話 etc.), weak cloze constraint. | teach only | yes |
| surprise | みんなの顔に驚きが見えました。 | Surprise showed on everyone's faces. | おどろき | N4 L5 T5 C3 I3 — Plausible but other emotion nouns (不安, 笑顔, 喜び) could also fit the blank. | teach only | yes |
| enjoyment | 私たちは今の生活を享受しています。 | We are enjoying our current life. | きょうじゅ | N5 L4 T5 C3 I3 | teach only | yes |
| enjoyment | 昔の人はこの自由を享受できませんでした。 | People in the past could not enjoy this freedom. | きょうじゅ | N5 L4 T5 C4 I4 | cloze+teach | yes |
| enjoyment | あなたはこの平和を享受していますか。 | Are you enjoying this peace? | きょうじゅ | N5 L4 T5 C4 I4 | cloze+teach | yes |
| excitement | 試合を見て、興奮しました。 | I got excited watching the game. | こうふん | N5 L5 T5 C3 I3 — Could also fit 感動 (moved) in the blank, slightly reducing uniqueness. | teach only | yes |
| excitement | 興奮しないでください。 | Please don't get so excited. | こうふん | N5 L5 T5 C3 I2 — Generic phrase; other emotion words like 心配 or 緊張 could also fit. | teach only | yes |
| excitement | 子供たちはプレゼントに興奮しています。 | The children are excited about the present. | こうふん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| the splitting image of | 息子は父にそっくりです。 | My son is the spitting image of his father. | そっくり | N5 L5 T5 C5 I3 | cloze+teach | yes |
| the splitting image of | この建物は城にそっくりですか。 | Does this building look just like a castle? | そっくり | N5 L5 T5 C5 I3 | cloze+teach | yes |
| softly | 赤ちゃんが寝ているので、そっと歩いてください。 | The baby is sleeping, so please walk softly. | そっと | N5 L5 T5 C3 I3 — 静かに could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| softly | 熱いスープをそっとテーブルに置きました。 | I gently placed the hot soup on the table. | そっと | N5 L5 T5 C4 I3 | cloze+teach | yes |
| humble | 昔は粗末な家に住んでいました。 | In the past, we lived in a humble house. | そまつ | N5 L5 T5 C2 I3 — Many na-adjectives (静かな, 大きな, 古い) could fit the blank, weak cloze constraint. | teach only | yes |
| humble | この料理は粗末じゃありません。 | This dish is not shabby. | そまつ | N4 L5 T4 C2 I2 — Generic negative sentence; many adjectives could fill blank, and 料理 with 粗末 is a bit unusual collocation. | teach only | yes |
| humble | 旅館の部屋は粗末でしたが、静かでした。 | The inn's room was humble, but quiet. | そまつ | N5 L5 T5 C3 I4 — Contrast with 静か helps narrow context somewhat, though other negative adjectives (古い, 狭い) could still fit. | teach only | yes |
| tedium | 休みの日はいつも退屈です。 | Holidays are always boring. | たいくつ | N5 L5 T5 C3 I2 — Other adjectives (楽しい, つまらない) could also fit the blank. | teach only | yes |
| tedium | この旅行は全然退屈じゃありません。 | This trip is not boring at all. | たいくつ | N5 L5 T5 C3 I3 — Other adjectives could fit the blank equally well. | teach only | yes |
| tedium | 授業は退屈ですか。 | Is the class boring? | たいくつ | N5 L5 T5 C3 I2 — Generic question template; other adjectives could fit blank. | teach only | yes |
| at any cost | どうしても今日中に空港へ着きたいです。 | I want to get to the airport today no matter what. | どうしても | N5 L5 T5 C4 I3 | cloze+teach | yes |
| at any cost | 今日はどうしても遅刻できません。 | I absolutely cannot be late today. | どうしても | N5 L5 T5 C3 I3 — 絶対に could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| at any cost | 息子はどうしてもピアノを習いたがっています。 | My son really wants to learn piano no matter what. | どうしても | N5 L5 T5 C4 I4 | cloze+teach | yes |
| morals | 学校で道徳の授業があります。 | There is a morals class at school. | どうとく | N5 L5 T5 C2 I2 — Many school subjects could fill the blank (音楽, 数学, 体育, etc.). | teach only | yes |
| morals | 彼は道徳をとても大切にしています。 | He values morals very much. | どうとく | N5 L5 T5 C2 I3 — Blank could be filled with many nouns like 時間, 家族, 伝統. | teach only | yes |
| morals | 子供に道徳を教えるのは大切です。 | Teaching morals to children is important. | どうとく | N5 L5 T5 C2 I3 — Blank could be filled with マナー, 礼儀, 価値観, etc. | teach only | yes |
| voting | 明日は選挙の投票に行きます。 | Tomorrow I will go to vote in the election. | とうひょう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| voting | ここで投票してください。 | Please vote here. | とうひょう | N4 L5 T5 C2 I2 — blank could be filled by many verbs (勉強、食事など) without more context | teach only | yes |
| voting | 私はまだ投票していません。 | I haven't voted yet. | とうひょう | N4 L5 T5 C2 I2 — lacks context like 選挙 to uniquely force 投票 | teach only | yes |
| children's song | 母は童謡を歌いながら料理をしています。 | My mother is cooking while singing children's songs. | どうよう | N5 L5 T5 C3 I3 — Blank could also be filled by 歌 or 演歌, not uniquely forced to 童謡. | teach only | yes |
| children's song | 子供の頃、よく童謡を歌いました。 | When I was a child, I often sang children's songs. | どうよう | N5 L5 T5 C5 I3 | cloze+teach | yes |
| children's song | この童謡は昔から有名です。 | This children's song has been famous since long ago. | どうよう | N5 L5 T5 C2 I2 — Blank could be filled with many nouns like 歌, 曲, 話; not strongly forced to 童謡. | teach only | yes |
| independence | 息子は大学を出て独立しました。 | My son became independent after finishing university. | どくりつ | N5 L4 T5 C3 I4 — other verbs like 就職 or 結婚 could also fit the blank | teach only | yes |
| independence | あの国は今年独立しました。 | That country became independent this year. | どくりつ | N5 L4 T5 C4 I4 | cloze+teach | yes |
| independence | 兄はもう親から独立していますか。 | Has your older brother already become independent from your parents? | どくりつ | N5 L4 T5 C4 I4 — 自立 could also plausibly fit but 独立 is the stronger natural choice | cloze+teach | yes |
| by the way | ところで、明日の予定は決まりましたか。 | By the way, has tomorrow's plan been decided? | ところで | N5 L5 T5 C3 I4 | teach only | yes |
| by the way | ところで、駅までどう行けばいいですか。 | By the way, how should I go to get to the station? | ところで | N5 L5 T5 C3 I4 | teach only | yes |
| abruptly | 道を歩いていたら突然雨が降ってきました。 | While I was walking down the road, it suddenly started raining. | とつぜん | N5 L5 T5 C4 I3 — 急に could also fit the blank, slightly lowering unique recoverability. | cloze+teach | yes |
| abruptly | 会議中に突然社長が来ました。 | The president suddenly came during the meeting. | とつぜん | N5 L5 T5 C4 I3 — 急に is also plausible in context. | cloze+teach | yes |
| top | 彼はクラスでトップの成績です。 | He has the top grades in the class. | とっぷ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| top | 彼女は会社のトップになりました。 | She became the top of the company. | とっぷ | N4 L5 T4 C3 I3 — English translation slightly awkward; 'became the head/top' could also fit other words like 社長. | teach only | yes |
| top | このニュースはトップに載っています。 | This news is featured at the top. | とっぷ | N4 L5 T4 C3 I3 — Other words like 一面 or 表紙 could also fill the blank. | teach only | yes |
| illumination | 部屋の照明が明るいから、本が読みやすいです。 | Because the room's lighting is bright, the book is easy to read. | しょうめい | N5 L5 T5 C3 I3 — Could also be 電気 or 明かり, so blank is not fully unique. | teach only | yes |
| illumination | 台所の照明が点きません。 | The kitchen light doesn't turn on. | しょうめい | N5 L5 T5 C3 I3 — Similar ambiguity with 電気/明かり. | teach only | yes |
| illumination | 部屋の照明を消してください。 | Please turn off the room's lighting. | しょうめい | N5 L5 T5 C3 I3 — Blank could also be filled by 電気 or 明かり. | teach only | yes |
| flushing | このトイレは水洗です。 | This toilet is a flush toilet. | すいせん | N4 L5 T5 C2 I2 — Blank could be filled by many descriptive words (新しい, きれい, etc.), not uniquely 水洗. | teach only | yes |
| flushing | この家のトイレは水洗ではありません。 | This house's toilet is not a flush toilet. | すいせん | N4 L5 T5 C2 I2 — Same issue: negation doesn't force 水洗 specifically; other adjectives fit. | teach only | yes |
| flushing | 水洗のトイレに変えたいです。 | I want to change to a flush toilet. | すいせん | N4 L5 T5 C3 I3 — Slightly more context via '変えたい' but still other nouns like 新しい could fit the blank. | teach only | yes |
| (small) table | おばあさんは膳で御飯を食べます。 | Grandmother eats her meal at a small table. | ぜん | N4 L4 T5 C3 I3 | teach only | yes |
| (small) table | 膳を台所に置いてください。 | Please put the tray table in the kitchen. | ぜん | N4 L4 T5 C2 I2 — Many other nouns (dishes, pot, tray) could fill the blank equally well. | teach only | yes |
| (small) table | 膳が重いから、二人で運びます。 | Because the tray table is heavy, two people will carry it. | ぜん | N4 L4 T5 C2 I2 — Any heavy object could fit the blank, low specificity for 膳. | teach only | yes |
| statue | 公園に大きい像があります。 | There is a big statue in the park. | ぞう | N5 L5 T5 C2 I2 — Blank could be many nouns like 建物 or 木, not uniquely 像. | teach only | yes |
| statue | 駅の前の像は誰ですか。 | Who is the statue in front of the station? | ぞう | N5 L5 T5 C3 I4 — Context suggests a statue but could also be 写真 or 銅像. | teach only | yes |
| statue | この像は古いから、大切にしています。 | Because this statue is old, we take good care of it. | ぞう | N4 L5 T5 C2 I3 — Blank could fit many objects like 家具 or 時計, not uniquely 像. | teach only | yes |
| shield | 子供は盾を持って遊んでいます。 | The child is playing while holding a shield. | たて | N5 L4 T5 C2 I3 — Blank could be filled by many objects (toy, sword, ball), so 'shield' isn't uniquely recoverable. | teach only | yes |
| chime | 玄関のチャイムが鳴りました。 | The doorbell at the entrance rang. | ちゃいむ | N5 L5 T5 C3 I2 — Could also be ベル or 電話 in this context. | teach only | yes |
| chime | チャイムが鳴ったら、ドアを開けてください。 | When the chime rings, please open the door. | ちゃいむ | N5 L4 T5 C3 I3 — 電話 or ベル could also fit the blank. | teach only | yes |
| chime | うちのチャイムはうるさいです。 | Our house's chime is noisy. | ちゃいむ | N4 L5 T5 C2 I2 — Many nouns (目覚まし時計, テレビ, 電話) could fit 'うるさい' context. | teach only | yes |
| frame | 窓の枠が汚れています。 | The window frame is dirty. | わく | N5 L5 T5 C3 I2 — Blank could also be filled by ガラス or カーテン, reducing uniqueness. | teach only | yes |
| frame | 写真を枠に入れました。 | I put the photo in a frame. | わく | N5 L5 T5 C3 I3 — 額(縁) or 箱 could also fit the blank, so not uniquely 枠. | teach only | yes |
| frame | この枠は木で作ってあります。 | This frame is made of wood. | わく | N4 L5 T5 C2 I2 — Very generic; many nouns (机, 箱, 椅子) could fill the blank. | teach only | yes |
| poet | 彼は有名な詩人です。 | He is a famous poet. | しじん | N5 L5 T5 C2 I2 — Generic template; many professions could fill the blank. | teach only | yes |
| poet | 彼女は詩人ではありません、先生です。 | She isn't a poet, she's a teacher. | しじん | N4 L5 T5 C2 I2 — Contrast helps a little but still many professions could fit. | teach only | yes |
| poet | 私は詩人になりたいです。 | I want to become a poet. | しじん | N5 L5 T5 C2 I2 — Simple desire sentence; blank could be any profession. | teach only | yes |
| unemployment | 彼は失業を心配していません。 | He isn't worried about unemployment. | しつぎょう | N4 L5 T5 C3 I3 — Blank could plausibly be other worries (money, future) so not fully unique. | teach only | yes |
| unemployment | 来年、失業が増えるらしいです。 | It seems unemployment will increase next year. | しつぎょう | N4 L5 T5 C3 I4 — Blank could be other nouns like 失業率 or 物価, slightly reducing uniqueness. | teach only | yes |
| lab work | 教室で実験をします。 | We do an experiment in the classroom. | じっけん | N4 L5 T4 C2 I2 — Blank could be filled by many nouns like 勉強 or 宿題, not uniquely 実験. | teach only | yes |
| lab work | 実験をしてください。 | Please do the experiment. | じっけん | N4 L5 T5 C2 I2 — Generic command; many nouns could fit the blank. | teach only | yes |
| lab work | 今日は実験をしません。 | We won't do an experiment today. | じっけん | N4 L5 T5 C2 I2 — Context doesn't uniquely force 実験; other activities could fit. | teach only | yes |
| finding employment | 兄は銀行に就職しました。 | My older brother got a job at a bank. | しゅうしょく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| finding employment | 私は来年就職したいです。 | I want to find a job next year. | しゅうしょく | N5 L5 T5 C3 I3 — Blank could also be filled by other verbs like 結婚 or 留学. | teach only | yes |
| finding employment | いつ就職しますか。 | When will you get a job? | しゅうしょく | N4 L5 T5 C2 I2 — Very generic question; many verbs could fit the blank (結婚, 卒業, 出発 etc.). | teach only | yes |
| Prime Minister | 首相は今日会議に出席しました。 | The Prime Minister attended the meeting today. | しゅしょう | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (社長, 大臣, 先生) since context doesn't force 首相 specifically. | teach only | yes |
| Prime Minister | 首相はまだ来ていません。 | The Prime Minister hasn't come yet. | しゅしょう | N5 L5 T5 C2 I2 — Very generic; many subjects fit the blank equally well. | teach only | yes |
| Prime Minister | 首相はいつ来ますか。 | When will the Prime Minister arrive? | しゅしょう | N5 L5 T5 C2 I2 — Generic template sentence, blank not uniquely recoverable as 首相. | teach only | yes |
| chapter | この本の三章はとても面白いです。 | The third chapter of this book is very interesting. | しょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| chapter | 次の章を読んでください。 | Please read the next chapter. | しょう | N5 L5 T5 C2 I2 — Blank could equally be filled with ページ, 本, 部分, etc. | teach only | yes |
| chapter | まだ一章も読んでいません。 | I haven't read even one chapter yet. | しょう | N5 L5 T5 C2 I2 — Blank could equally be filled with 本, ページ, 記事, etc. | teach only | yes |
| scholarship | 彼女は奨学金をもらいました。 | She received a scholarship. | しょうがくきん | N5 L5 T5 C2 I3 — Blank could be filled with many nouns (プレゼント、賞など), context doesn't force 奨学金. | teach only | yes |
| scholarship | 奨学金が欲しいです。 | I want a scholarship. | しょうがくきん | N5 L5 T5 C2 I2 — Very generic sentence; blank could be almost any desired noun. | teach only | yes |
| scholarship | 奨学金をもらいませんでした。 | I didn't receive a scholarship. | しょうがくきん | N5 L5 T5 C2 I2 — No contextual clue narrows the blank to scholarship specifically. | teach only | yes |
| trader | あの商人は野菜を売っています。 | That merchant is selling vegetables. | しょうにん | N5 L5 T5 C3 I3 — Could also be 八百屋 or 農家, not uniquely 商人. | teach only | yes |
| trader | あの人は商人ですか。 | Is that person a merchant? | しょうにん | N4 L5 T5 C1 I1 — Generic template sentence; blank could be any occupation noun. | teach only | yes |
| trader | 私は商人ではありません。 | I am not a merchant. | しょうにん | N4 L5 T5 C1 I1 — Generic template sentence; blank could be any occupation noun. | teach only | yes |
| game | 子供はゲームが好きです。 | Children like games. | げえむ | N4 L5 T4 C2 I2 — Generic template sentence; many nouns (漫画, スポーツ, 音楽) could fill the blank. | teach only | yes |
| game | 仕事の後でゲームをしませんか。 | Won't you play a game after work? | げえむ | N4 L5 T4 C2 I3 — Blank could be filled by many activity nouns (食事, 飲み会, 運動), reducing recoverability. | teach only | yes |
| game | そのゲームは面白くないです。 | That game is not interesting. | げえむ | N4 L5 T4 C2 I2 — Blank could be replaced by 映画, 本, 番組, etc., so not uniquely recoverable. | teach only | yes |
| drama | 明日学校で劇を見ます。 | Tomorrow we will watch a play at school. | げき | N5 L5 T5 C2 I3 — Many nouns (映画, テレビ, etc.) could fill the blank equally well. | teach only | yes |
| drama | あの劇はあまり面白くなかったです。 | That play wasn't very interesting. | げき | N5 L5 T5 C2 I3 — Blank could be filled by 映画, 本, ドラマ, etc. | teach only | yes |
| drama | 劇の切符を買ってください。 | Please buy a ticket for the play. | げき | N5 L5 T5 C2 I3 — Ticket context fits many events (映画, コンサート, 電車) not uniquely 劇. | teach only | yes |
| result | テストの結果はまだ分かりません。 | I don't know the test results yet. | けっか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| result | 試合の結果を教えてください。 | Please tell me the result of the match. | けっか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| result | 結果は来週分かります。 | The results will be known next week. | けっか | N5 L5 T5 C3 I2 — Sentence alone gives little context, other nouns could fit the blank. | teach only | yes |
| after all | 結局、会議は中止になりました。 | In the end, the meeting was cancelled. | けっきょく | N5 L5 T5 C3 I3 — やっぱり/とにかく could also fit the blank grammatically. | teach only | yes |
| after all | 結局、雨は止みませんでした。 | In the end, the rain didn't stop. | けっきょく | N5 L5 T5 C3 I3 — やっぱり could also fit the blank. | teach only | yes |
| after all | 結局、レストランには行きませんでした。 | In the end, we didn't go to the restaurant. | けっきょく | N5 L5 T5 C3 I3 — やっぱり/とにかく could also fit the blank. | teach only | yes |
| determination | 彼は会社を辞める決心をしました。 | He made up his mind to quit the company. | けっしん | N5 L5 T5 C4 I3 — 決意 could also fit the blank, slightly reducing uniqueness. | cloze+teach | yes |
| determination | 私はもうお酒を飲まない決心をしました。 | I decided that I would not drink alcohol anymore. | けっしん | N5 L5 T5 C4 I3 — 決意 is also plausible in this context. | cloze+teach | yes |
| determination | あなたの決心は変わりませんか。 | Won't your determination change? | けっしん | N4 L5 T5 C4 I3 — Slightly generic phrasing but clear meaning. | cloze+teach | yes |
| decision | 会議で決定を待っています。 | We are waiting for a decision at the meeting. | けってい | N4 L5 T4 C3 I3 — Slightly ambiguous; 'waiting for a decision' usually phrased 決定を待っています which is fine, but blank could plausibly be 返事 or 結果 too. | teach only | yes |
| decision | まだ決定していません。 | It hasn't been decided yet. | けってい | N5 L5 T5 C2 I2 — Many words fit the blank (決定, 完成, 終了, etc.), low uniqueness. | teach only | yes |
| decision | 決定を教えてください。 | Please tell me the decision. | けってい | N5 L5 T5 C3 I3 — Other nouns like 結果 or 予定 could also fit the blank. | teach only | yes |
| conclusion | 会議の結論はまだ出ていません。 | The conclusion of the meeting hasn't come out yet. | けつろん | N5 L5 T5 C3 I3 — 結果 could also fit the blank | teach only | yes |
| conclusion | 結論を先に言ってください。 | Please tell me the conclusion first. | けつろん | N5 L5 T5 C3 I3 — 答え or 結果 could also fit | teach only | yes |
| conclusion | その結論は正しいと思います。 | I think that conclusion is correct. | けつろん | N5 L5 T5 C3 I3 — 意見 or 考え could also fit | teach only | yes |
| ticket | 電車の券を買いました。 | I bought a train ticket. | けん | N4 L5 T5 C3 I3 — Could also be 切符 or other words, slightly ambiguous. | teach only | yes |
| ticket | 映画の券を持っていますか。 | Do you have a movie ticket? | けん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| ticket | 券を見せてください。 | Please show me your ticket. | けん | N4 L5 T5 C2 I2 — Very generic; blank could be filled by many nouns like ID, card, passport, etc. | teach only | yes |
| medical examination | 昨日、病院で診察を受けました。 | Yesterday I had a medical examination at the hospital. | しんさつ | N5 L5 T5 C3 I3 — Could also be 検査 or 治療 in the blank, reducing uniqueness. | teach only | yes |
| medical examination | 熱があるので、診察してもらいたいです。 | Since I have a fever, I want to get a medical examination. | しんさつ | N5 L5 T5 C3 I3 — 治療 or 検査 could also fit the blank. | teach only | yes |
| medical examination | 何時に診察を受けますか。 | What time will you have your examination? | しんさつ | N5 L5 T5 C3 I2 — Generic time-question template; other words like 検査 or 面接 could fit. | teach only | yes |
| the body | 運動は身体にいいです。 | Exercise is good for the body. | しんたい | N4 L3 T5 C3 I2 | teach only | yes |
| the body | 医者は彼の身体を調べました。 | The doctor examined his body. | しんたい | N4 L3 T5 C3 I3 | teach only | yes |
| the body | 身体を大切にしてください。 | Please take care of your body. | しんたい | N4 L3 T5 C3 I3 | teach only | yes |
| height (of body) | 身長はどのくらいですか。 | About how tall are you? | しんちょう | N5 L5 T5 C3 I3 — Blank could also be filled by 年齢 or other measures, slightly reduces uniqueness. | teach only | yes |
| height (of body) | 去年より身長が高くなりました。 | My height became taller than last year. | しんちょう | N5 L5 T5 C3 I3 — 背(せ) could also fit the blank, reducing uniqueness. | teach only | yes |
| height (of body) | 兄は私より身長が高いです。 | My older brother is taller than me. | しんちょう | N5 L5 T5 C3 I3 — 背(せ) could also fit the blank, reducing uniqueness. | teach only | yes |
| sleep | 毎日十分な睡眠が必要です。 | Sufficient sleep is necessary every day. | すいみん | N5 L5 T5 C3 I3 — 休息や休養など他の語も文法的に入り得るため唯一性はやや弱い | teach only | yes |
| sleep | もっと睡眠を取りたいです。 | I want to get more sleep. | すいみん | N5 L5 T5 C3 I3 — 休憩や休みなど他の語も当てはまる可能性がある | teach only | yes |
| headache | 頭痛がするので、薬を飲みました。 | Since I had a headache, I took medicine. | ずつう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| headache | 頭痛はいつから続いていますか。 | Since when has your headache been continuing? | ずつう | N5 L4 T4 C3 I3 — Blank could also be filled by other ailments like 咳 or symptom nouns, slightly reducing recoverability. | teach only | yes |
| headache | 頭痛を早く治したいです。 | I want to cure my headache quickly. | ずつう | N4 L5 T5 C3 I3 — Could also fit other ailment nouns like 風邪 or 病気, reducing uniqueness of blank. | teach only | yes |
| cough | 昨日から咳が止まりません。 | My cough hasn't stopped since yesterday. | せき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| cough | 咳はいつから出ていますか。 | Since when have you had that cough? | せき | N5 L5 T5 C3 I3 — Could also fit 熱/鼻水 in this frame, slightly reducing uniqueness. | teach only | yes |
| cough | 風邪で咳が出ました。 | I got a cough from a cold. | せき | N5 L5 T5 C3 I3 — Other symptom words (熱, 鼻水) could also fill the blank. | teach only | yes |
| sweat | 暑くて汗をかきました。 | It was hot, so I sweated. | あせ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| sweat | 運動の後、汗を流したいです。 | I want to wash off my sweat after exercising. | あせ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| sweat | どうしてそんなに汗をかいていますか。 | Why are you sweating so much? | あせ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to congratulate | 家族みんなで妹の誕生日を祝いました。 | We celebrated my little sister's birthday with the whole family. | いわいました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to congratulate | 友達が来たら、一緒に卒業を祝いませんか。 | When our friend comes, shall we celebrate the graduation together? | いわいません | N4 L4 T4 C4 I3 | cloze+teach | yes |
| quotation | 先生は授業でよく有名な言葉を引用します。 | The teacher often quotes famous words in class. | いんようします | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to complain | 子供はお腹が痛いと母に訴えました。 | The child complained to his mother that his stomach hurt. | うったえました | N4 L5 T5 C3 I3 — 言いました could also fit the blank, slightly reducing cloze uniqueness. | teach only | yes |
| to complain | 友達が頭痛を訴えたから、病院へ連れて行きました。 | Because my friend complained of a headache, I took him to the hospital. | うったえた | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to complain | なぜ彼はいつも会社に不満を訴えるのですか。 | Why does he always complain to the company about his dissatisfaction? | うったえる | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to groan | 犬が知らない人を見てうなっています。 | The dog is growling at the stranger. | うなっています | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to groan | 友達の犬は痛そうにうなっていました。 | My friend's dog was groaning as if it was in pain. | うなっていました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to groan | どうして猫はそんなにうなるのですか。 | Why does the cat growl so much? | うなる | N5 L5 T5 C3 I3 — blank could plausibly be filled with other verbs like 鳴く depending on context, slightly lowering recoverability | teach only | yes |
| rumor | 学校でその先生についての噂を聞きました。 | I heard a rumor about that teacher at school. | うわさ | N4 L5 T5 C3 I3 — Blank could also be filled by 話 or 情報, not uniquely 噂. | teach only | yes |
| rumor | 変な噂を流すのはやめてください。 | Please stop spreading strange rumors. | うわさ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| bow | 日本では、よくお辞儀をします。 | In Japan, people often bow. | おじぎ | N5 L5 T5 C3 I3 — Blank could also be filled by 挨拶 or similar, reducing uniqueness. | teach only | yes |
| bow | 先生に会ったら、お辞儀をしましょう。 | When we meet the teacher, let's bow. | おじぎ | N5 L5 T5 C3 I3 — Context allows other words like 挨拶 to fit the blank. | teach only | yes |
| bow | 友達が来たとき、お辞儀をしましたか。 | Did you bow when your friend came? | おじぎ | N4 L5 T5 C2 I3 — Blank is too open-ended; many actions could fit 'when a friend came'. | teach only | yes |
| chattering | 授業中におしゃべりをしてはいけません。 | You must not chat during class. | おしゃべり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| chattering | 妹はいつも電話でおしゃべりをしています。 | My little sister is always chatting on the phone. | おしゃべり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| chattering | 友達とおしゃべりをしませんか。 | Won't you chat with your friend? | おしゃべり | N5 L5 T5 C3 I3 — Blank could also be filled by other activity nouns like 話 or 相談, slightly lowering recoverability. | teach only | yes |
| Congratulations! | 卒業おめでとうございます。 | Congratulations on your graduation. | おめでとう | N5 L5 T5 C5 I3 | cloze+teach | yes |
| Congratulations! | 友達に電話で「おめでとう」と言いました。 | I said "Congratulations" to my friend over the phone. | おめでとう | N4 L5 T5 C2 I3 — Quoted blank could be filled with many words/phrases, not uniquely recoverable. | teach only | yes |
| textbook | この教科書を明日持って来てください。 | Please bring this textbook tomorrow. | きょうかしょ | N5 L5 T5 C2 I2 — Many nouns (book, umbrella, bag) could fill the blank; not uniquely recoverable. | teach only | yes |
| textbook | 教科書がまだ届いていません。 | The textbook hasn't arrived yet. | きょうかしょ | N5 L5 T5 C2 I2 — Could be package, letter, or any item that 'hasn't arrived'; not unique to textbook. | teach only | yes |
| textbook | その教科書はとても厚いです。 | That textbook is very thick. | きょうかしょ | N5 L5 T5 C3 I3 — 厚い hints at a book-like object, narrowing options somewhat but still not unique. | teach only | yes |
| teaching | あの教授は英語を教えています。 | That professor teaches English. | きょうじゅ | N5 L5 T5 C3 I3 — Could be 先生 or 講師 as well as 教授; blank not uniquely determined. | teach only | yes |
| teaching | 教授に質問してください。 | Please ask the professor a question. | きょうじゅ | N5 L5 T5 C2 I2 — Generic sentence; many nouns (先生, 彼, 部長など) could fill the blank. | teach only | yes |
| teaching | 教授はまだ来ていません。 | The professor hasn't come yet. | きょうじゅ | N5 L5 T5 C2 I2 — No context restricts the blank to 教授 specifically; any person noun works. | teach only | yes |
| class | この組の仕事はもう終わりました。 | This team's work is already finished. | くみ | N4 L5 T4 C2 I2 — Blank could be filled by many words like チーム, 部, 班; not uniquely recoverable. | teach only | yes |
| class | あなたはどちらの組で働いていますか。 | Which team do you work in? | くみ | N4 L5 T4 C2 I2 — Context doesn't force 組; could be 会社, 部署, チーム. | teach only | yes |
| class | その組には五人しかいません。 | There are only five people in that team. | くみ | N4 L5 T4 C2 I2 — Could equally be グループ, クラス, チーム; weak forcing of the target word. | teach only | yes |
| native Japanese reading of a Chinese | この漢字の訓を教えてください。 | Please teach me the kun reading of this kanji. | くん | N4 L5 T5 C4 I3 | cloze+teach | yes |
| native Japanese reading of a Chinese | その漢字には訓がありません。 | That kanji has no kun reading. | くん | N4 L5 T5 C4 I3 | cloze+teach | yes |
| practice | 会社で新しい訓練が始まりました。 | A new training started at the company. | くんれん | N4 L5 T5 C2 I2 — Blank could be filled by many nouns like 会議 or 仕事. | teach only | yes |
| practice | 訓練のために早く出かけます。 | I go out early for training. | くんれん | N4 L5 T5 C2 I2 — Context doesn't uniquely force 訓練; other reasons for going out early fit. | teach only | yes |
| practice | 訓練の予定を教えてください。 | Please tell me the training schedule. | くんれん | N4 L5 T5 C2 I2 — Many nouns could precede の予定を教えてください, so the blank is not uniquely recoverable. | teach only | yes |
| management | 彼は小さい会社を経営しています。 | He manages a small company. | けいえい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| management | この店の経営はうまく行っていません。 | This shop's management isn't going well. | けいえい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| management | 経営について質問してください。 | Please ask a question about the management. | けいえい | N4 L5 T5 C2 I1 — Too generic; many nouns could fill the blank. | teach only | yes |
| inspection | この機械の検査をしてください。 | Please inspect this machine. | けんさ | N4 L5 T4 C2 I3 — Blank could be filled by many nouns like 修理 or 点検, not uniquely 検査. | teach only | yes |
| inspection | 検査の結果はまだ分かりません。 | The inspection results aren't known yet. | けんさ | N5 L5 T5 C2 I3 — Many words (テスト, 調査, 試験) fit the blank equally well. | teach only | yes |
| construction | あの建物の建設はいつ終わりますか。 | When will the construction of that building finish? | けんせつ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| construction | 建設会社で働いています。 | I work at a construction company. | けんせつ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| fire fighting | 火事の時は消防に電話してください。 | Please call the fire department when there's a fire. | しょうぼう | N4 L5 T5 C4 I3 — Slightly more natural to say 消防署 or 119 but still understandable; context clearly points to 消防. | cloze+teach | yes |
| employment | 今、彼には職がありません。 | Right now, he doesn't have a job. | しょく | N5 L5 T5 C2 I3 — Blank could equally be 仕事 or other nouns, not uniquely 職. | teach only | yes |
| employment | いい職があったら教えてください。 | Please tell me if there's a good job available. | しょく | N5 L5 T5 C2 I3 — Many nouns fit 'いい＿があったら', not uniquely 職. | teach only | yes |
| employment | 姉は先月新しい職に就きました。 | My older sister got a new job last month. | しょく | N5 L5 T5 C5 I4 — 職に就く is a fixed collocation, making the blank clearly recoverable. | cloze+teach | yes |
| occupation | あなたの職業は何ですか。 | What is your occupation? | しょくぎょう | N5 L5 T5 C2 I2 — Blank could be filled by many nouns like 名前 or 年齢, not uniquely 職業. | teach only | yes |
| occupation | 彼の職業は医者です。 | His occupation is a doctor. | しょくぎょう | N5 L5 T5 C3 I3 — 仕事 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| occupation | 書類に職業を書きませんでした。 | I didn't write my occupation on the document. | しょくぎょう | N5 L5 T5 C3 I3 — Document could also list 名前 or 住所, so blank isn't fully forced. | teach only | yes |
| helper | 会社には助手が二人います。 | There are two assistants at the company. | じょしゅ | N5 L5 T5 C2 I2 — Many nouns (社員, 友達, 部長) could fill the blank equally well. | teach only | yes |
| helper | 忙しいので助手を呼んでください。 | I'm busy, so please call an assistant. | じょしゅ | N5 L5 T5 C2 I3 — Blank could be filled with many other people-nouns (医者, 上司, 友達). | teach only | yes |
| helper | 今日は助手が会社に来ませんでした。 | The assistant didn't come to the office today. | じょしゅ | N5 L5 T5 C2 I2 — Context doesn't uniquely point to 助手; other job nouns fit just as well. | teach only | yes |
| actress | 彼女は有名な女優です。 | She is a famous actress. | じょゆう | N4 L5 T5 C1 I1 — Generic template sentence; blank could be filled by many nouns (歌手, モデル, 俳優 etc.). | teach only | yes |
| actress | あの女優はレストランでよく食事をしています。 | That actress often eats at that restaurant. | じょゆう | N5 L5 T5 C2 I3 — Context doesn't strongly force 女優; other nouns like 人 or 客 could fit. | teach only | yes |
| actress | あの女優は最近テレビに出ていません。 | That actress hasn't appeared on TV recently. | じょゆう | N5 L5 T5 C2 I3 — TV context hints at celebrity but many similar nouns (俳優, タレント, 歌手) also fit. | teach only | yes |
| documents | この書類にサインしてください。 | Please sign this document. | しょるい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| documents | 書類がまだできていません。 | The documents aren't finished yet. | しょるい | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (宿題, 仕事 etc.). | teach only | yes |
| documents | 大切な書類を机の上に置きました。 | I put the important documents on the desk. | しょるい | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (本, 財布 etc.). | teach only | yes |
| going on to university | 彼は大学に進学することにしました。 | He decided to go on to university. | しんがく | N5 L4 T5 C3 I3 — 入学 could also fit the blank, reducing uniqueness. | teach only | yes |
| going on to university | 高校を卒業しても進学しない人もいます。 | Some people don't go on to university even after finishing high school. | しんがく | N5 L4 T5 C4 I4 | cloze+teach | yes |
| going on to university | 大学に進学するつもりですか。 | Do you intend to go on to university? | しんがく | N5 L4 T5 C3 I3 — 入学 also plausible in this context. | teach only | yes |
| umpire | 試合の審判は厳しい人でした。 | The umpire of the match was a strict person. | しんぱん | N5 L5 T5 C3 I3 — 監督 or コーチ could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| umpire | 分からない時は審判に聞いてください。 | Please ask the umpire when you don't understand. | しんぱん | N5 L5 T5 C2 I2 — Very generic; many nouns (先生, コーチ, 監督) fit the blank equally well. | teach only | yes |
| umpire | 今日は審判が見つかりません。 | We can't find an umpire today. | しんぱん | N4 L5 T5 C2 I2 — Blank could be filled by many nouns (コーチ, 通訳, 先生) without sports context cue. | teach only | yes |
| engagement | 二人は先月婚約しました。 | The two of them got engaged last month. | こんやく | N5 L5 T5 C3 I3 — Blank could also be filled by 結婚 or other verbs describing an event, reducing uniqueness. | teach only | yes |
| engagement | 彼女は婚約しているから、パーティーに来ません。 | She won't come to the party because she's engaged. | こんやく | N5 L4 T5 C3 I3 — Many reasons (pregnant, married, busy) could fit the blank besides engagement. | teach only | yes |
| engagement | 婚約の話をしないでください。 | Please don't talk about the engagement. | こんやく | N4 L4 T5 C2 I2 — Generic topic phrase; many nouns (結婚, 仕事, 恋愛) could fill the blank equally well. | teach only | yes |
| Mama | ママは今台所で料理を作っています。 | Mama is cooking in the kitchen now. | まま | N5 L5 T5 C2 I2 — Many other nouns (パパ, お母さん, 姉 etc.) could fill the blank equally well. | teach only | yes |
| Mama | ママ、これを買ってください。 | Mama, please buy this. | まま | N5 L5 T5 C2 I2 — Blank could be filled by パパ, 先生, 友達, etc., not uniquely recoverable. | teach only | yes |
| Mama | ママがいないから、ちょっと寂しいです。 | Since Mama isn't here, I feel a little lonely. | まま | N5 L5 T5 C2 I3 — Context doesn't uniquely force 'ママ'; other family/person words could fit. | teach only | yes |
| ally | 彼はいつも私の味方です。 | He is always on my side. | みかた | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other words like 友達 or ファン without more context. | teach only | yes |
| ally | 味方がいないから、試合に負けました。 | We lost the match because we had no allies. | みかた | N5 L5 T5 C5 I4 | cloze+teach | yes |
| ally | あなたの味方になってください。 | Please become my ally. | みかた | N5 L5 T5 C4 I3 — Slight ambiguity, could also fit 友達 or 仲間. | cloze+teach | yes |
| master | 彼は料理の名人です。 | He is a master of cooking. | めいじん | N5 L5 T5 C3 I3 — Other words like 達人/プロ could also fit the blank. | teach only | yes |
| master | 名人だから、料理がとても美味しいです。 | Since he's a master, the food is very delicious. | めいじん | N4 L5 T5 C2 I2 — Blank could be filled by プロ, 天才, シェフ, etc., not uniquely 名人. | teach only | yes |
| master | 名人に聞いてください。 | Please ask the master. | めいじん | N4 L5 T5 C1 I1 — Highly generic; blank could be almost any noun referring to a person. | teach only | yes |
| person of higher status | 目上の人には丁寧に話してください。 | Please speak politely to people of higher status. | めうえ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| person of higher status | 目上の人が会議室にいます。 | A person of higher status is in the meeting room. | めうえ | N4 L5 T4 C2 I2 — Many nouns (社長, 上司, お客様) could fill the blank equally well. | teach only | yes |
| person ) | 仕事ができる者は、ここに残ってください。 | Those who can do the work, please stay here. | もの | N4 L3 T5 C4 I3 | cloze+teach | yes |
| friend (formal) | 彼は私の古い友人です。 | He is my old friend. | ゆうじん | N5 L5 T5 C2 I2 — 友達 would fit equally well in the blank, so the exact word isn't uniquely recoverable. | teach only | yes |
| friend (formal) | 友人が来るから、部屋を片付けました。 | I cleaned my room because a friend is coming. | ゆうじん | N5 L4 T5 C2 I3 — 友達 or 客 could also fill the blank, reducing uniqueness. | teach only | yes |
| thoroughness | 病気を防ぐために手を洗うことを徹底していますか。 | Are you thorough about washing your hands to prevent illness? | てってい | N5 L4 T5 C5 I4 | cloze+teach | yes |
| identical | 来週も先週と同様に旅行に行きます。 | Next week too, I'll go on a trip just like last week. | どうよう | N4 L3 T4 C4 I3 — Natural and clear comparison structure, though '同じように' could also fit the blank. | cloze+teach | yes |
| characteristic | この店の果物にはどんな特徴がありますか。 | What characteristics does this store's fruit have? | とくちょう | N4 L5 T5 C3 I3 | teach only | yes |
| characteristic | この町の特徴は静かな公園が多いことです。 | This town's characteristic is that it has many quiet parks. | とくちょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| forte | この店の特長は安い野菜です。 | This store's forte is cheap vegetables. | とくちょう | N5 L5 T5 C3 I2 — Synonyms like 特徴/魅力/良さ could equally fit the blank. | teach only | yes |
| forte | この病院の特長は丁寧な説明です。 | This hospital's forte is careful explanations. | とくちょう | N5 L5 T5 C3 I3 — Synonyms like 特徴/魅力 could also fit contextually. | teach only | yes |
| forte | この旅館の特長は何ですか。 | What is this inn's forte? | とくちょう | N5 L5 T5 C2 I2 — Very open question allows many words (特徴, 魅力, 自慢) to fit the blank. | teach only | yes |
| peculiarity | この店の料理には独特の味があります。 | This restaurant's food has a unique flavor. | どくとく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| peculiarity | このお祭りには独特の雰囲気があります。 | This festival has a unique atmosphere. | どくとく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| outrageous | 日曜日に一人で山に登るなんてとんでもないです。 | Climbing the mountain alone on Sunday is outrageous. | とんでもない | N4 L5 T4 C3 I3 — Natural and clear context, but other words like 危険/無謀 could also fill the blank. | teach only | yes |
| poor (at) | 私は毎朝早く起きるのが苦手です。 | I'm bad at waking up early every morning. | にがて | N5 L5 T5 C3 I3 — 嫌い could also fit the blank, slightly reducing recoverability. | teach only | yes |
| poor (at) | 辛い食べ物は苦手ですか。 | Are you bad with spicy food? | にがて | N5 L5 T4 C2 I3 — 好き/嫌い also plausible in the blank, low uniqueness; translation 'bad with' slightly awkward phrasing. | teach only | yes |
| poor (at) | 日曜日は苦手な運動をしたくないです。 | I don't want to do exercise I'm bad at on Sunday. | にがて | N4 L5 T4 C2 I3 — 得意/嫌い could also fill the na-adjective slot, reducing uniqueness. | teach only | yes |
| one by one | 店員は一人一人にお辞儀をしました。 | The clerk bowed to each person individually. | ひとりひとり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| one by one | 一人一人に電話をかけましょう。 | Let's call each person individually. | ひとりひとり | N4 L5 T5 C3 I3 — みんな/全員 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| plus | 今朝の気温はプラス五度でした。 | This morning's temperature was plus five degrees. | ぷらす | N5 L5 T5 C4 I4 | cloze+teach | yes |
| plus | 検査の結果はプラスでした。 | The test result was positive. | ぷらす | N5 L5 T5 C5 I4 | cloze+teach | yes |
| minus | マイナス十度はとても寒いです。 | Minus ten degrees is very cold. | まいなす | N4 L5 T5 C4 I3 | cloze+teach | yes |
| minus | 十からマイナス五を引くと十五になりますか。 | If you subtract minus five from ten, does it become fifteen? | まいなす | N4 L5 T5 C5 I4 | cloze+teach | yes |
| counter for loss | 来週の試合では一敗もしたくないです。 | I don't want to lose even once in next week's match. | ぱい | N4 L5 T5 C3 I3 — Alternative counters like 一戦 or 一回 could plausibly fill the blank, slightly reducing recoverability. | teach only | yes |
| win | 試合は私たちの勝ちでした。 | The game was our win. | かち | N5 L5 T5 C3 I3 — Blank could plausibly be 負け(loss) too, so not fully forced. | teach only | yes |
| win | 試合は勝ちだったから、みんな喜びました。 | Since it was a win, everyone was happy. | かち | N5 L5 T5 C5 I4 | cloze+teach | yes |
| win | この試合、勝ちだと思いますか。 | Do you think this game is a win? | かち | N5 L5 T5 C3 I3 — Context doesn't rule out 負け as an alternative answer. | teach only | yes |
| activity | 彼は仕事でとても活躍しています。 | He is very active and successful at work. | かつやく | N4 L5 T5 C3 I2 | teach only | yes |
| activity | 彼女がもっと活躍すれば、会社は良くなるでしょう。 | If she becomes more active, the company will improve. | かつやく | N4 L5 T5 C3 I3 | teach only | yes |
| activity | 息子が試合で活躍したと聞きました。 | I heard that my son performed well in the game. | かつやく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| assumption | もし雨が降ると仮定しましょう。 | Let's assume it will rain. | かてい | N4 L4 T5 C3 I3 — Other verbs like 想定 could also fit the blank. | teach only | yes |
| assumption | その仮定は正しくないと思います。 | I think that assumption is not correct. | かてい | N5 L5 T5 C2 I3 — Blank could be filled with 考え, 意見, or 主張 as well. | teach only | yes |
| assumption | 質問に答える前に、仮定を説明してください。 | Please explain the assumption before answering the question. | かてい | N4 L4 T5 C3 I3 — 前提 or 理由 could also fit the blank. | teach only | yes |
| process | 料理を作る過程はとても楽しいです。 | The process of cooking is very fun. | かてい | N5 L5 T5 C3 I3 — こと could also fit the blank, slightly reducing recoverability. | teach only | yes |
| process | この仕事は過程が大切です。 | For this job, the process is important. | かてい | N4 L5 T5 C2 I2 — Many nouns (経験, 努力, 結果, 態度) could fill the blank, making it hard to guess 過程 specifically. | teach only | yes |
| process | 過程を説明しながら、料理を作りました。 | I cooked while explaining the process. | かてい | N5 L4 T5 C3 I4 — 手順 or 作り方 could also plausibly fill the blank. | teach only | yes |
| to be sad | 母は猫が死んで悲しんでいます。 | My mother is sad because the cat died. | かなしんで | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to be sad | そんなに悲しまないでください。 | Please don't be so sad. | かなしまない | N5 L5 T5 C3 I3 — Other emotion verbs like 怒る/泣く could also fit the blank. | teach only | yes |
| to be sad | 彼が悲しむ理由を聞きました。 | I asked the reason why he is sad. | かなしむ | N4 L5 T5 C3 I3 — Other verbs like 怒る/笑う could also fit the blank. | teach only | yes |
| (not) always | 高い物が必ずしもいいとは限りません。 | Expensive things aren't always good. | かならずしも | N5 L4 T5 C5 I4 | cloze+teach | yes |
| (not) always | 忙しい人が必ずしも元気だとは言えません。 | You can't always say that busy people are energetic. | かならずしも | N5 L4 T5 C5 I4 | cloze+teach | yes |
| (not) always | 兄は必ずしも毎晩早く帰るわけではありません。 | My older brother doesn't always come home early every night. | かならずしも | N5 L4 T4 C5 I4 — EN slightly redundant with 'always...every night' but meaning is clear. | cloze+teach | yes |
| considerably | この料理はかなり辛いです。 | This dish is considerably spicy. | かなり | N5 L5 T5 C2 I3 — Many adverbs (とても, すごく, 本当に) could fill the blank, so the target word isn't uniquely recoverable. | teach only | yes |
| any time | いつでも遊びに来てくださいね。 | Please come play any time. | いつでも | N5 L5 T5 C4 I3 | cloze+teach | yes |
| any time | 分からないことがあったら、いつでも聞いてください。 | If there's something you don't understand, please ask any time. | いつでも | N5 L5 T5 C5 I4 | cloze+teach | yes |
| before one knows | いつのまにか子供が大きくなりました。 | Before I knew it, the child had grown up. | いつのまにか | N5 L4 T5 C3 I3 | teach only | yes |
| before one knows | いつのまにか友達が帰ってしまいました。 | Before I knew it, my friend had gone home. | いつのまにか | N5 L4 T5 C3 I3 | teach only | yes |
| before one knows | いつのまにか授業が終わっていました。 | Before I knew it, the class had ended. | いつのまにか | N5 L4 T5 C3 I3 | teach only | yes |
| forever | いつまでもあなたのことを忘れません。 | I will never forget about you. | いつまでも | N5 L5 T5 C3 I4 — ずっと could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| forever | いつまでも元気でいてくださいね。 | Please stay healthy forever. | いつまでも | N5 L5 T5 C3 I4 — ずっと could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| at any time | 今にも授業が始まりそうです。 | It looks like class is about to start any minute. | いまにも | N5 L4 T5 C3 I3 — もうすぐ or すぐに could also fit the blank, reducing uniqueness. | teach only | yes |
| at any time | 今にも赤ちゃんが生まれそうです。 | The baby looks like it's about to be born any minute. | いまにも | N5 L4 T5 C3 I3 — もうすぐ could also fit the blank. | teach only | yes |
| at any time | 電話が今にも鳴りそうです。 | The phone looks like it's about to ring any minute. | いまにも | N5 L4 T5 C3 I3 — もうすぐ/すぐに could also work in this slot. | teach only | yes |
| since | 去年の夏以来、友達に会っていません。 | I haven't seen my friend since last summer. | いらい | N5 L4 T5 C4 I4 | cloze+teach | yes |
| since | 彼が生まれて以来、母はずっと忙しいです。 | Since he was born, my mother has been busy the whole time. | いらい | N4 L4 T5 C4 I3 | cloze+teach | yes |
| eternity | 二人は永遠に一緒にいると約束しました。 | The two promised to be together forever. | えいえん | N5 L5 T5 C3 I4 — Other words like ずっと/一生 could also fit the blank. | teach only | yes |
| eternity | この愛は永遠に続くと思いますか。 | Do you think this love will last forever? | えいえん | N5 L5 T5 C3 I4 — ずっと or いつまでも could also fit the blank. | teach only | yes |
| eternity | 先生は歴史が永遠に残ると言いました。 | The teacher said history remains forever. | えいえん | N5 L5 T5 C3 I3 — ずっと or 後世に could also fit the blank. | teach only | yes |
| postponement | 電話で試合の延期を知らせました。 | They informed us of the game's postponement by phone. | えんき | N4 L5 T5 C3 I3 — 延期 also could be replaced by 中止 (cancellation) without breaking the sentence. | teach only | yes |
| postponement | 授業はいつ延期になりますか。 | When will class be postponed? | えんき | N4 L5 T5 C3 I3 — 延期 could also be replaced by 中止 in this context. | teach only | yes |
| old age | おばあさんは老いを感じると言いました。 | My grandmother said she feels the effects of old age. | おい | N5 L5 T5 C3 I3 — Blank could also fit words like 不安 or 孤独, slightly reducing uniqueness. | teach only | yes |
| old age | 老いは怖いと思いませんか。 | Don't you think old age is scary? | おい | N5 L5 T5 C3 I3 — Could fit other abstract nouns like 死 or 病気 in place of 老い. | teach only | yes |
| old age | 老いは誰にでも来るから、大切に生きましょう。 | Since old age comes to everyone, let's live carefully. | おい | N5 L5 T5 C4 I4 — Context strongly points to 老い as universal life stage, good cloze cue. | cloze+teach | yes |
| intelligence | 犬の知能は高いそうです。 | I heard that dogs' intelligence is high. | ちのう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| intelligence | 子供の知能はどうやって分かりますか。 | How can you tell a child's intelligence? | ちのう | N4 L5 T4 C3 I3 — other words like 性格 or 能力 could also fit the blank | teach only | yes |
| intelligence | 医者は彼の知能を調べました。 | The doctor examined his intelligence. | ちのう | N4 L5 T5 C3 I3 — other medical terms could plausibly fill the blank | teach only | yes |
| annotation | この言葉には注が付いています。 | There is an annotation attached to this word. | ちゅう | N5 L5 T5 C3 I3 | teach only | yes |
| annotation | 先生は本に注を書きました。 | The teacher wrote an annotation in the book. | ちゅう | N4 L5 T5 C2 I2 — blank could be filled by many nouns like メモ or感想 | teach only | yes |
| annotation | 注を読めば意味が分かります。 | If you read the annotation, you'll understand the meaning. | ちゅう | N5 L5 T5 C3 I3 | teach only | yes |
| suspension | 雨で試合は中止になりました。 | The game was cancelled because of the rain. | ちゅうし | N5 L5 T5 C3 I3 — 延期 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| suspension | 台風のため旅行は中止です。 | The trip is cancelled because of the typhoon. | ちゅうし | N5 L5 T5 C3 I3 — 延期 is also plausible in this context. | teach only | yes |
| suspension | 会議は中止になりますか。 | Will the meeting be cancelled? | ちゅうし | N5 L5 T5 C3 I3 — 延期 could also work here, reducing uniqueness. | teach only | yes |
| savings | 毎月少しずつ貯金しています。 | I'm saving a little bit every month. | ちょきん | N5 L5 T5 C3 I3 — Blank could also fit 節約 or 貯蓄, reducing uniqueness. | teach only | yes |
| savings | 貯金がいくらありますか。 | How much savings do you have? | ちょきん | N4 L5 T5 C2 I3 — 貯金 as subject could be swapped with 借金 or お金, making the blank ambiguous. | teach only | yes |
| currency | 外国に行く前に通貨を換えます。 | I exchange currency before going abroad. | つうか | N5 L5 T5 C3 I3 — お金 could also fill the blank, slightly reducing specificity | teach only | yes |
| currency | この国の通貨は何ですか。 | What is this country's currency? | つうか | N5 L5 T5 C2 I2 — generic template; many nouns (言語, 首都, 名前) could fit the blank | teach only | yes |
| currency | 空港で通貨を交換しました。 | I exchanged currency at the airport. | つうか | N5 L5 T5 C3 I3 — お金 could also work in this context, reducing uniqueness | teach only | yes |
| to rank next to | 彼女は社長に次ぐ地位にいます。 | She holds the position ranking next to the president. | つぐ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| sequel | この物語の続きが読みたいです。 | I want to read the sequel to this story. | つづき | N5 L5 T5 C4 I4 | cloze+teach | yes |
| sequel | 続きは来週話しましょう。 | Let's talk about the rest next week. | つづき | N5 L5 T4 C3 I3 — English 'the rest' is slightly loose; other nouns like 詳細 could also fit the blank. | teach only | yes |
| sequel | 映画の続きを見ましたか。 | Did you watch the sequel of the movie? | つづき | N5 L5 T5 C4 I4 | cloze+teach | yes |
| namely | 彼は父の兄です。つまり、私の伯父さんです。 | He is my father's older brother. In other words, he's my uncle. | つまり | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to spread (out) | スープの匂いは廊下まで広がりませんでした。 | The smell of the soup didn't spread all the way to the hallway. | ひろがりませんでした | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to spread (out) | 子供たちの声が家の中に広がった。 | The children's voices spread through the house. | ひろがった | N5 L5 T5 C3 I3 — Other verbs like 響いた or 聞こえた could also fit the blank. | teach only | yes |
| to spread | 地図をテーブルの上に広げてください。 | Please spread the map out on the table. | ひろげて | N4 L5 T5 C5 I3 — Reading uses てえぶる instead of the more standard てーぶる for テーブル. | cloze+teach | yes |
| to spread | 母は台所で新聞を広げました。 | My mother spread out the newspaper in the kitchen. | ひろげました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to spread | 忙しいので、荷物を床に広げませんでした。 | Since I was busy, I didn't spread my luggage out on the floor. | ひろげませんでした | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to broaden | おじいさんはこの村に踊りを広めました。 | My grandfather spread this dance throughout the village. | ひろめました | N5 L5 T4 C3 I4 — 'おじいさん' could mean 'my grandfather' or 'an old man', translation assumes the former | teach only | yes |
| to broaden | 日本の文化を外国に広めたいです。 | I want to spread Japanese culture abroad. | ひろめたい | N5 L5 T5 C3 I3 — Other verbs like 紹介する/伝える could also fit the blank | teach only | yes |
| to broaden | 時間がなくて、その話を広めませんでした。 | Since there was no time, I didn't spread that story. | ひろめませんでした | N5 L5 T5 C3 I3 — 話す/伝える could also fill the blank, reducing uniqueness | teach only | yes |
| to wave | 駅で友達に手を振りました。 | I waved my hand to my friend at the station. | ふりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to wave | 赤ちゃんに手を振ってください。 | Please wave your hand at the baby. | ふって | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to wave | 急いでいたので、誰にも手を振らなかった。 | Since I was in a hurry, I didn't wave to anyone. | ふらなかった | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to run along | この道は川に沿って続いています。 | This road runs along the river. | そって | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to accompany | その計画は家族の希望に添いませんでした。 | That plan did not meet the family's wishes. | そいませんでした | N4 L3 T4 C3 I3 — Idiomatic use of 添う (希望に添う) is natural but other verbs like 応える could also fit the blank. | teach only | yes |
| to look out on | このホテルの部屋は海に臨んでいます。 | This hotel room faces the sea. | のぞんで | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to look out on | 頑張って式に臨んでください。 | Please do your best and face the ceremony. | のぞんで | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to | 駅で外国人をよく見掛けます。 | I often see foreigners at the station. | みかけます | N5 L5 T5 C3 I3 — 見る/会う also fit the blank, slightly lowering uniqueness. | teach only | yes |
| to | 急いでいたので、友達を見掛けませんでした。 | Since I was in a hurry, I didn't happen to see my friend. | みかけませんでした | N5 L5 T5 C3 I4 — 会う could also fit contextually, but 見掛ける is a strong fit given the causal clause. | teach only | yes |
| to | 近所で猫を見掛けましたか。 | Did you happen to see a cat in the neighborhood? | みかけました | N5 L5 T5 C3 I3 — 見る could also fill the blank, reducing uniqueness slightly. | teach only | yes |
| warmth | この辺りは冬でも温暖です。 | This area is mild even in winter. | おんだん | N5 L5 T5 C3 I3 — other na-adjectives (快適, 暖かい) could also fit the blank | teach only | yes |
| warmth | この島の気候は温暖ですか。 | Is the climate on this island mild? | おんだん | N5 L5 T5 C3 I3 — context allows other similar adjectives to fit | teach only | yes |
| warmth | この国はいつも温暖だそうです。 | I hear this country is always mild. | おんだん | N5 L5 T5 C3 I3 — blank could plausibly be filled by other climate-related na-adjectives | teach only | yes |
| temperature | 教室の温度は何度ですか。 | What is the temperature in the classroom? | おんど | N5 L5 T5 C4 I3 | cloze+teach | yes |
| temperature | お風呂の温度を上げてください。 | Please raise the temperature of the bath. | おんど | N5 L5 T5 C5 I4 | cloze+teach | yes |
| temperature | 海の水の温度はいつも低いです。 | The temperature of the sea water is always low. | おんど | N4 L5 T4 C4 I3 — Claim that sea temperature is always low is a bit inaccurate/generic. | cloze+teach | yes |
| mosquito | 夏になると蚊が多くなります。 | When summer comes, there are more mosquitoes. | か | N5 L5 T5 C4 I3 | cloze+teach | yes |
| mosquito | 部屋に蚊が入りましたか。 | Did a mosquito get into the room? | か | N5 L5 T5 C3 I3 — Blank could also be filled by other small creatures like 虫 or 蜂. | teach only | yes |
| shell | 海岸で貝を拾いました。 | I picked up shells at the beach. | かい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| shell | 今晩は貝の料理が食べたいです。 | I want to eat shellfish dishes tonight. | かい | N4 L5 T4 C2 I3 — blank could be filled with many food words, reducing recoverability | teach only | yes |
| shell | この貝はどこで買いましたか。 | Where did you buy these shells? | かい | N4 L5 T5 C2 I2 — generic template sentence, blank could fit many nouns | teach only | yes |
| aroma | このコーヒーはいい香りがします。 | This coffee has a nice aroma. | かおり | N5 L5 T5 C4 I3 — 匂い could also fit the blank, slightly lowering recoverability. | cloze+teach | yes |
| aroma | この花の香りが好きですか。 | Do you like the scent of this flower? | かおり | N5 L5 T5 C4 I3 — 匂い could also fit contextually. | cloze+teach | yes |
| aroma | 台所からパンを焼く香りがしてきました。 | The aroma of baking bread came from the kitchen. | かおり | N5 L4 T5 C4 I4 — Slightly more vivid context; 匂い still plausible alternative. | cloze+teach | yes |
| shade | 夕方になると影が長くなります。 | When evening comes, shadows get longer. | かげ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| shade | あそこに見える影は何ですか。 | What is that shadow you can see over there? | かげ | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (人, 建物, etc.), not just 影. | teach only | yes |
| conflagration | 昨夜近くのビルで火災がありました。 | There was a fire in a nearby building last night. | かさい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| conflagration | 火災の時はエレベーターを使わないでください。 | Please don't use the elevator in case of a fire. | かさい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| conflagration | その火災の原因は分かりましたか。 | Has the cause of that fire been determined? | かさい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| thunder | 外で雷が鳴っています。 | Thunder is rumbling outside. | かみなり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| thunder | そこでも雷が鳴っていますか。 | Is thunder rumbling there too? | かみなり | N4 L5 T5 C3 I2 — Generic question with little context, several nouns could fill the blank. | teach only | yes |
| thunder | 雷が鳴ったら川から離れてください。 | If thunder rumbles, please stay away from the river. | かみなり | N5 L4 T5 C5 I4 | cloze+teach | yes |
| tropics | その国は熱帯にあります。 | That country is in the tropics. | ねったい | N4 L5 T5 C2 I2 — Blank could be filled by many location nouns (国, 都市, etc.), weak cloze constraint. | teach only | yes |
| tropics | 熱帯では雪が降りません。 | It doesn't snow in the tropics. | ねったい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| tropics | 熱帯の果物を買ってきてください。 | Please buy some tropical fruits. | ねったい | N5 L5 T5 C3 I3 — Other adjectives like 南国 or 国産 could also fit the blank before 果物. | teach only | yes |
| ash | 火が消えて灰だけが残りました。 | The fire went out, leaving only ash. | はい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| ash | テーブルの灰を拭いてください。 | Please wipe the ash off the table. | はい | N4 L5 T5 C2 I3 — Could also be dust, dirt, etc., so blank is not uniquely recoverable. | teach only | yes |
| to grow | 庭に草がたくさん生えています。 | A lot of grass is growing in the garden. | はえて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to grow | この辺りには木が生えていません。 | Trees don't grow around here. | はえて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to grow | 赤ちゃんの歯が生えてきました。 | The baby's teeth have started to grow. | はえて | N5 L5 T5 C5 I4 | cloze+teach | yes |
| flame | 鍋の下で炎が燃えています。 | Flames are burning under the pot. | ほのお | N5 L5 T5 C4 I3 | cloze+teach | yes |
| flame | 家に着いた時、もう炎は見えませんでした。 | When I got home, the flames were no longer visible. | ほのお | N4 L5 T5 C3 I3 — could also be 煙 or 火事 in this context | teach only | yes |
| flame | 炎に気をつけてください。 | Please be careful of the flames. | ほのお | N4 L5 T5 C1 I2 — too generic, many nouns could fill the blank | teach only | yes |
| pine tree | 庭の松はいつ植えましたか。 | When did you plant the pine tree in the garden? | まつ | N5 L5 T5 C2 I3 — Blank could be any plant or tree, not uniquely 松. | teach only | yes |
| pine tree | この松は百年も前からあります。 | This pine tree has been here for a hundred years. | まつ | N5 L5 T5 C2 I3 — Blank could refer to many long-standing objects, not uniquely 松. | teach only | yes |
| dew | 今朝は露が降りませんでした。 | There was no dew this morning. | つゆ | N5 L5 T5 C3 I3 — Natural sentence but blank could also be filled by 雨/霜/雪 given similar weather phrasing. | teach only | yes |
| dew | 靴が濡れるので露に気をつけてください。 | Please watch out for the dew since your shoes will get wet. | つゆ | N4 L5 T5 C4 I4 — Context (wet shoes, caution) points fairly clearly to dew, making the cloze reasonably recoverable. | cloze+teach | yes |
| to fall down | 道で転んだから、足が痛いです。 | Because I fell down on the road, my foot hurts. | ころんだ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to fall down | 台所で転ばないように気をつけてください。 | Please be careful not to fall down in the kitchen. | ころばない | N5 L5 T5 C3 I3 — other verbs like 滑る could also fit the blank | teach only | yes |
| to fall down | 子供が公園で転んで、泣きました。 | The child fell down in the park and cried. | ころんで | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to turn towards | 彼はカメラをこちらに向けました。 | He turned the camera towards here. | むけました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to turn towards | 顔をこちらに向けてください。 | Please turn your face this way. | むけて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to turn towards | 音がしたから、顔をそちらに向けました。 | Because there was a sound, I turned my face that way. | むけました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to cross (e.g., arms) | 猫が道を横切りました。 | A cat crossed the road. | よこぎりました | N5 L5 T5 C3 I3 — 渡る could also fit the blank, reducing uniqueness. | teach only | yes |
| to cross (e.g., arms) | 危ないから、道路を横切らないでください。 | It's dangerous, so please don't cross the road here. | よこぎらない | N5 L4 T4 C3 I3 — EN adds 'here' not in Japanese; 渡る also plausible in blank. | teach only | yes |
| to cross (e.g., arms) | 駅の前で道を横切る人が多いです。 | Many people cross the road in front of the station. | よこぎる | N5 L5 T5 C3 I3 — 渡る could equally fill the blank, weakening cloze uniqueness. | teach only | yes |
| to branch off | 道はここで二つに分かれています。 | The road branches into two here. | わかれています | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to branch off | この道は分かれていないので、まっすぐ行ってください。 | This road doesn't branch off, so please go straight. | わかれていない | N4 L5 T5 C4 I3 — slightly less natural phrasing but acceptable | cloze+teach | yes |
| hunting | 父は毎年秋に狩りに行きます。 | My father goes hunting every autumn. | かり | N5 L5 T5 C3 I3 | teach only | yes |
| hunting | 来週、一緒に狩りに行きませんか。 | Shall we go hunting together next week? | かり | N5 L5 T5 C2 I3 — many activities could fill the blank besides hunting | teach only | yes |
| hunting | 狩りに行くから、電話しました。 | I called because I'm going hunting. | かり | N4 L5 T4 C2 I2 — vague context allows many words to fit the blank | teach only | yes |
| to throw down | 料理をしている時、鍋を倒さないでください。 | Please don't knock over the pot while cooking. | たおさない | N5 L5 T5 C3 I3 — Other verbs like 触る, 動かす also plausible in blank. | teach only | yes |
| to throw down | 弟が椅子を倒しました。 | My little brother knocked over the chair. | たおしました | N5 L5 T5 C3 I2 — Generic sentence; other verbs (壊す, 動かす) could fit. | teach only | yes |
| to throw down | 友達が来た時、犬が私を倒しました。 | When my friend came, the dog knocked me down. | たおしました | N4 L5 T4 C3 I4 — Plausible but other verbs like 押す, 噛む could also fit the blank. | teach only | yes |
| to fight | 兄弟はいつもゲームで戦います。 | The brothers always fight in the game. | たたかいます | N4 L5 T5 C2 I2 — Blank could easily be filled with other verbs like 遊ぶ or 対戦する. | teach only | yes |
| to fight | 今度、一緒にゲームで戦いませんか。 | Shall we fight together in the game next time? | たたかいません | N4 L5 T5 C2 I3 — Ambiguous blank; 遊ぶ or 対戦する could also fit ゲームで＿ませんか. | teach only | yes |
| to fight | 試合で戦うから、今夜は忙しいです。 | Because I'll fight in the match, I'm busy tonight. | たたかう | N4 L5 T4 C3 I3 — 試合で戦う is a fairly strong collocation, though 出る/参加する could also fit. | teach only | yes |
| to stand | 隣に新しい家が建ちました。 | A new house was built next door. | たちました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to stand | ここには高いビルは建っていません。 | There is no tall building standing here. | たって | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to stand | 新しい病院が建つから、便利になります。 | Because a new hospital will be built, it will become convenient. | たつ | N4 L5 T5 C3 I3 — できる also fits the blank, reducing uniqueness | teach only | yes |
| calm | 今日は海がとても穏やかです。 | The sea is very calm today. | おだやか | N5 L5 T5 C3 I3 — Other adjectives like 静か or きれい could also fit the blank. | teach only | yes |
| calm | 彼女はいつも穏やかに話します。 | She always speaks calmly. | おだやか | N5 L5 T5 C2 I3 — Many adverbs (静かに, ゆっくり) could fill the blank equally well. | teach only | yes |
| calm | おじいさんは穏やかな性格でした。 | My grandfather had a calm personality. | おだやか | N5 L5 T5 C2 I3 — Various personality adjectives (優しい, 厳しい) could also fit the blank. | teach only | yes |
| obedient | あの犬はとても大人しいです。 | That dog is very obedient. | おとなしい | N5 L5 T5 C3 I2 | teach only | yes |
| obedient | 子供の時、姉は大人しかったです。 | My sister was obedient as a child. | おとなしかった | N5 L5 T5 C3 I3 | teach only | yes |
| obedient | もっと大人しくしてください。 | Please be more obedient/quiet. | おとなしく | N5 L5 T5 C3 I3 | teach only | yes |
| passable | このレポートの評価は可でした。 | The evaluation for this report was passable. | か | N4 L5 T5 C3 I3 — Other grade words (良, 優, 不可) could also fit the blank. | teach only | yes |
| passable | 彼のテストの結果は可だった。 | His test result was a passable grade. | か | N4 L5 T5 C3 I3 — Similar to other grade sentences; multiple grade words could fill the blank. | teach only | yes |
| certainty | 明日の会議は確実です。 | Tomorrow's meeting is certain. | かくじつ | N4 L5 T4 C3 I2 — Could also fit words like 大事 depending on context, but plausible. | teach only | yes |
| certainty | 彼が来ることは確実になりました。 | It became certain that he would come. | かくじつ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| wise | あの子はとても賢いです。 | That child is very wise. | かしこい | N4 L5 T5 C2 I2 — Many adjectives (かわいい, 優しい, etc.) could fill the blank. | teach only | yes |
| feel disappointed | 試合に負けてがっかりしました。 | I was disappointed that we lost the match. | がっかり | N5 L5 T5 C4 I4 | cloze+teach | yes |
| feel disappointed | 天気が悪くてがっかりです。 | I'm disappointed because the weather is bad. | がっかり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| feel disappointed | レストランの料理がまずくてがっかりしました。 | I was disappointed because the restaurant's food was bad. | がっかり | N5 L5 T5 C4 I4 | cloze+teach | yes |
| vigor | この町は活気があります。 | This town has vigor. | かっき | N4 L5 T5 C2 I2 — Blank could be filled by many words like 人気, 歴史, etc. | teach only | yes |
| vigor | 会社に活気が戻りました。 | Vigor returned to the company. | かっき | N5 L5 T5 C3 I3 — Some other words like 元気 could also fit the blank. | teach only | yes |
| vigor | もっと活気のある会社にしてください。 | Please make the company more vigorous. | かっき | N5 L5 T5 C3 I3 — 元気 or 活力 could also plausibly fill the blank. | teach only | yes |
| possible | 明日の予約は可能ですか。 | Is tomorrow's reservation possible? | かのう | N5 L5 T5 C3 I3 — Other words like 大丈夫 could also fit the blank. | teach only | yes |
| possible | それは可能だと思います。 | I think that is possible. | かのう | N5 L5 T5 C3 I3 — Blank could be filled with other adjectives like 無理・大丈夫. | teach only | yes |
| one's superior | 上司の意見を聞いてください。 | Please listen to your boss's opinion. | じょうし | N4 L5 T5 C3 I2 — Blank could plausibly be filled with other nouns like 先生 or 友達, reducing recoverability. | teach only | yes |
| one's superior | 昨日、上司と一緒に食事をしました。 | Yesterday I had a meal with my boss. | じょうし | N5 L5 T5 C3 I3 — Context allows other companions like 同僚 or 友達, so blank isn't fully forced. | teach only | yes |
| one's superior | 上司は毎朝早く会社に来ます。 | My boss comes to the office early every morning. | じょうし | N5 L5 T5 C3 I3 — Blank could be filled with other subjects like 社長 or 同僚, limiting exact recoverability. | teach only | yes |
| full name | ここに姓名を書いてください。 | Please write your full name here. | せいめい | N4 L5 T5 C3 I3 — Blank could also be filled by 名前, 住所, etc., slightly reducing recoverability. | teach only | yes |
| full name | 病院で姓名を書きました。 | I wrote my full name at the hospital. | せいめい | N4 L5 T5 C2 I2 — Many other words (名前, 住所, 保険証番号) could fit the blank, making it hard to guess 姓名 specifically. | teach only | yes |
| monk | あの寺に僧が住んでいます。 | A monk lives in that temple. | そう | N4 L5 T5 C2 I2 — Blank could be filled by many nouns (人, 猫, 家族), not uniquely 僧. | teach only | yes |
| monk | 僧は静かに座っていました。 | The monk was sitting quietly. | そう | N4 L5 T5 C2 I2 — Context doesn't force 僧; many subjects could fit the blank. | teach only | yes |
| monk | 僧に道を尋ねてください。 | Please ask the monk for directions. | そう | N4 L5 T5 C2 I3 — Blank could be filled by 人, 警官, etc., not uniquely 僧. | teach only | yes |
| party | 誰かこの隊に入ってください。 | Please have someone join this group. | たい | N4 L5 T4 C2 I2 — Blank could be filled with チーム/グループ/クラブ equally well. | teach only | yes |
| party | その隊は山を登っています。 | That group is climbing the mountain. | たい | N4 L5 T5 C2 I2 — 隊 not uniquely determined; グループ/チーム/人々 also fit context. | teach only | yes |
| accompanying | 社長の供で旅行しました。 | I traveled as the president's attendant. | とも | N4 L3 T5 C2 I3 — Blank could plausibly be filled by other nouns like 車 or 家族, reducing recoverability. | teach only | yes |
| accompanying | 誰か供をしてください。 | Please have someone accompany you. | とも | N4 L3 T4 C2 I2 — Generic request sentence; 供 could be replaced by other nouns like 手伝い. | teach only | yes |
| accompanying | 彼は社長の供としてよく会社に来ます。 | He often comes to the office as the president's attendant. | とも | N4 L3 T5 C2 I3 — Context allows alternatives such as 秘書 or 部下, weakening unique recoverability. | teach only | yes |
| grade (i.e., on a test) | 今学期の成績が良かったです。 | My grades this semester were good. | せいせき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| grade (i.e., on a test) | 弟は今回成績が良くなかったです。 | My younger brother's grades weren't good this time. | せいせき | N5 L5 T5 C3 I3 — blank could also be filled by words like 体調 or 気分 | teach only | yes |
| grade (i.e., on a test) | 試験の成績はどうでしたか。 | How were your exam grades? | せいせき | N5 L5 T5 C3 I3 — blank could also be filled by 結果 or 出来 | teach only | yes |
| memorization | 毎晩新しい単語を暗記しています。 | I memorize new words every night. | あんきして | N5 L5 T5 C3 I3 — Blank could also be 勉強して or 練習して, reducing uniqueness. | teach only | yes |
| memorization | この漢字を全部暗記してください。 | Please memorize all these kanji. | あんきして | N5 L5 T5 C3 I3 — 覚えて or 読んで could also fit the blank. | teach only | yes |
| memorization | 忙しくて暗記する時間がありません。 | I'm busy and don't have time to memorize. | あんきする | N5 L5 T5 C2 I3 — Many verbs (勉強する, 練習する, 休む) could fill the blank equally well. | teach only | yes |
| committee member | 兄はクラスの委員になりました。 | My older brother became the class committee member. | いいん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| committee member | 私は委員をしたくないです。 | I don't want to be a committee member. | いいん | N5 L5 T5 C2 I2 — many nouns could fill the blank (仕事, 掃除, 勉強 etc.), reducing recoverability | teach only | yes |
| printing | この書類を五枚印刷してください。 | Please print five copies of this document. | いんさつして | N5 L5 T5 C4 I3 | cloze+teach | yes |
| retirement | 父は去年会社を引退しました。 | My father retired from the company last year. | いんたいしました | N5 L5 T5 C4 I3 — 退職 could also fit the blank, slightly reducing uniqueness. | cloze+teach | yes |
| retirement | 社長はいつ引退しますか。 | When will the president retire? | いんたいします | N5 L5 T5 C4 I3 — 退職 or other verbs could plausibly fit, minor ambiguity. | cloze+teach | yes |
| retirement | 彼は来年引退するつもりです。 | He plans to retire next year. | いんたいする | N5 L5 T5 C4 I3 — 退職 could also work in this context, slightly reducing uniqueness. | cloze+teach | yes |
| business | この店は朝九時から営業しています。 | This store is open for business from 9am. | えいぎょうして | N5 L5 T5 C4 I3 | cloze+teach | yes |
| business | 今日はこのレストランは営業していません。 | This restaurant isn't open for business today. | えいぎょうして | N5 L5 T5 C4 I3 | cloze+teach | yes |
| acting | 彼女の演技はとても素晴らしかったです。 | Her acting was wonderful. | えんぎ | N5 L5 T5 C3 I3 — Could also fit words like 歌 or ダンス, so not fully unique. | teach only | yes |
| acting | あの俳優の演技はあまり上手ではなかったです。 | That actor's acting wasn't very good. | えんぎ | N5 L5 T5 C4 I3 — Actor context makes 演技 fairly clear, though 演出 could also fit loosely. | cloze+teach | yes |
| acting | 今度の映画の演技はどうでしたか。 | How was the acting in the new movie? | えんぎ | N5 L5 T5 C3 I3 — Movie context allows other words like 内容 or 音楽 to fit the blank. | teach only | yes |
| musical performance | 姉はピアノの演奏がとても上手です。 | My older sister is very good at playing the piano. | えんそう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| musical performance | 好きな曲を演奏してください。 | Please play your favorite song. | えんそうして | N4 L5 T5 C3 I3 — other verbs like 歌って or 変更して could also fit the blank | teach only | yes |
| to stop (advanced) | 台風の日、窓が開かないように板で押えました。 | On the typhoon day, I held down the window with a board so it wouldn't open. | おさえました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to stop (advanced) | 友達に痛い所を押えてもらいました。 | I had my friend press down on my painful spot. | おさえて | N5 L5 T5 C3 I3 — Other verbs like もむ/さする could also fit the blank. | teach only | yes |
| to store to pay | 集めた切手を箱に収めています。 | I keep the stamps I collected stored in a box. | おさめて | N4 L5 T5 C2 I3 — 入れる would fit the blank equally well, weakening cloze uniqueness. | teach only | yes |
| to store to pay | 友達の手紙はもう引き出しに収めてあります。 | My friend's letter is already stored away in the drawer. | おさめて | N4 L5 T5 C3 I3 — てある context helps narrow it toward 収める/入れる, but still not fully unique. | teach only | yes |
| to keep | 犬を飼いたいです。 | I want to keep a dog. | かいたい | N4 L5 T5 C3 I2 — かいたい is homophone with 買いたい (want to buy), reducing cloze certainty. | teach only | yes |
| to keep | あなたは猫を飼っていますか。 | Do you keep a cat? | かって | N5 L5 T5 C3 I3 — かって is homophone with 買って (buy), so blank could arguably be either. | teach only | yes |
| to keep | 暑い夏に魚を飼い始めました。 | I started keeping fish in the hot summer. | かい | N4 L5 T5 C3 I3 — かい homophone with 買い (buy) still allows ambiguity despite context. | teach only | yes |
| to send back | 先生は学生を早く家に帰しました。 | The teacher sent the student home early. | かえしました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to send back | 雨が降ってきたので、子供たちを早く帰しますか。 | Since it started raining, will you send the children home early? | かえします | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to scratch | 犬はよく耳を掻きます。 | Dogs often scratch their ears. | かきます | N5 L5 T5 C3 I3 — Other verbs like 触る or 舐める could also fit the blank. | teach only | yes |
| to scratch | 頭を掻きながら問題を考えています。 | I'm thinking about the problem while scratching my head. | かき | N5 L5 T5 C3 I4 — 頭を抱える is a common alternative idiom, so the blank isn't fully unique. | teach only | yes |
| to draw | 絵を描きたいです。 | I want to draw a picture. | かきたい | N5 L5 T5 C2 I2 — Blank could be filled with many verbs like 見たい/買いたい, low recoverability. | teach only | yes |
| to draw | 授業で山の絵を描きました。 | I drew a picture of a mountain in class. | かきました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to draw | あなたはどんな絵を描きますか。 | What kind of pictures do you draw? | かきます | N5 L5 T5 C3 I3 — Slightly ambiguous, could also be 好き/見る in context. | teach only | yes |
| to sniff | 花の匂いを嗅ぐと春を感じます。 | When I smell the flowers, I feel spring. | かぐ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to sniff | 公園で花の匂いを嗅ぎました。 | I smelled the flowers in the park. | かぎました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to sniff | この料理の匂いを嗅いでみますか。 | Will you smell this dish? | かいで | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to hide | 友達が来る前に、部屋のごみを隠しました。 | I hid the trash in the room before my friend came. | かくしました | N5 L5 T5 C3 I3 — Other verbs like 捨てました/片付けました could also fit the context. | teach only | yes |
| to hide | 宿題を隠しましたか。 | Did you hide your homework? | かくしました | N5 L5 T5 C2 I2 — Very generic; many verbs (忘れました, なくしました, etc.) could fit the blank. | teach only | yes |
| to hide | 彼は何かを隠しているようです。 | He seems to be hiding something. | かくしている | N5 L4 T5 C3 I3 — '何かを＿している' could also be filled with 探している or 持っている, reducing uniqueness. | teach only | yes |
| destruction | その動物は絶滅したそうです。 | That animal is said to have gone extinct. | ぜつめつした | N5 L4 T4 C3 I3 — Could also be filled with other verbs like 死んだ or いなくなった, reducing uniqueness slightly. | teach only | yes |
| destruction | 絶滅しないように動物を守ります。 | We protect animals so that they don't go extinct. | ぜつめつしない | N5 L4 T4 C4 I3 | cloze+teach | yes |
| all members | 全員が集まったから、始めましょう。 | Since everyone has gathered, let's begin. | ぜんいん | N5 L5 T5 C3 I3 — みんな could also fit the blank, reducing uniqueness. | teach only | yes |
| all members | 全員は来ませんでした。 | Not everyone came. | ぜんいん | N4 L4 T5 C3 I3 — Partial negation nuance is good but みんな/全部 could also fit blank. | teach only | yes |
| all members | 全員に電話をしてください。 | Please call everyone. | ぜんいん | N4 L5 T5 C3 I2 — みんな or 誰か could also fill the blank; fairly generic sentence. | teach only | yes |
| the former | 会議で二つの計画が出ましたが、前者の方がいいと思います。 | Two plans came up in the meeting, but I think the former is better. | ぜんしゃ | N5 L4 T5 C3 I4 | teach only | yes |
| the former | 前者を選ぶことにしました。 | I decided to choose the former. | ぜんしゃ | N4 L4 T5 C1 I2 — No context distinguishes 前者 from 後者 or other nouns. | teach only | yes |
| the former | 前者について質問があります。 | I have a question about the former. | ぜんしゃ | N4 L4 T5 C1 I2 — Lacks context to uniquely determine the blank word. | teach only | yes |
| whole | 全体をよく混ぜてください。 | Please mix the whole thing well. | ぜんたい | N4 L5 T5 C3 I3 — Other words like 材料 or これ could also fit the blank. | teach only | yes |
| whole | 全体が静かになりました。 | The whole place became quiet. | ぜんたい | N4 L5 T4 C3 I3 — Blank could be filled with 部屋 or 全部 as well. | teach only | yes |
| noise | 騒音のことで電話をしました。 | I made a phone call about the noise. | そうおん | N4 L5 T5 C2 I3 — blank could be filled with many nouns (問題, 旅行, etc.), low cloze recoverability | teach only | yes |
| noise | 夜は騒音を出さないでください。 | Please don't make noise at night. | そうおん | N5 L5 T5 C3 I3 — blank could also be filled with 音 or 声, somewhat guessable but less precise | teach only | yes |
| increase | 最近、人口の増加が問題になっています。 | Recently, the increase in population has become a problem. | ぞうか | N5 L4 T5 C4 I4 | cloze+teach | yes |
| operation | この機械の操作は簡単です。 | Operating this machine is easy. | そうさ | N5 L5 T5 C4 I2 | cloze+teach | yes |
| operation | 操作を間違えたから、壊れてしまいました。 | Since I made an operation mistake, it broke. | そうさ | N5 L4 T4 C5 I4 | cloze+teach | yes |
| operation | 電話の操作を教えてください。 | Please teach me how to operate the phone. | そうさ | N4 L5 T4 C3 I3 — 使い方 could also fit the blank equally well | teach only | yes |
| imagination | 将来のことを想像するのが好きです。 | I like imagining things about the future. | そうぞうする | N5 L5 T5 C3 I3 — blank could also fit 勉強する/心配する etc. | teach only | yes |
| imagination | それは想像もできないほど大変でした。 | It was so hard that I couldn't even imagine it. | そうぞう | N5 L4 T5 C3 I3 — blank could fit 我慢/信じる等、複数の語が可能 | teach only | yes |
| imagination | 彼の話を想像しながら聞きました。 | I listened to his story while imagining it. | そうぞうし | N5 L5 T5 C4 I3 | cloze+teach | yes |
| soba | 朝は忙しいから蕎麦を食べる時間がありません。 | I don't have time to eat soba because mornings are busy. | そば | N5 L5 T5 C2 I3 — Many food words could fill the blank, not uniquely 'soba'. | teach only | yes |
| soba | 旅行で有名な蕎麦の店に行きました。 | I went to a famous soba shop on the trip. | そば | N5 L5 T5 C2 I3 — Other food types could also fit 'famous ___ shop'. | teach only | yes |
| cheese | 朝御飯にチーズを食べます。 | I eat cheese for breakfast. | ちいず | N5 L5 T5 C2 I2 — Blank could be filled by many breakfast foods, low recoverability. | teach only | yes |
| cheese | パーティーのためにチーズを買いました。 | I bought cheese for the party. | ちいず | N5 L5 T5 C2 I2 — Many party items could fill the blank, low recoverability. | teach only | yes |
| lunch ) | 今日の昼食は蕎麦でした。 | Today's lunch was soba. | ちゅうしょく | N5 L5 T5 C3 I3 — 朝食/夕食 could also fit grammatically, though 昼食 is plausible | teach only | yes |
| lunch ) | 忙しくて昼食を食べる時間がありませんでした。 | I was so busy I didn't have time to eat lunch. | ちゅうしょく | N5 L5 T5 C3 I4 — 食事 or 朝食/夕食 could also fit the blank | teach only | yes |
| lunch ) | 明日の昼食は公園で食べたいです。 | I want to eat tomorrow's lunch in the park. | ちゅうしょく | N5 L5 T5 C3 I3 — other meal words could plausibly fit | teach only | yes |
| raw | 生の卵は嫌いです。 | I dislike raw eggs. | なま | N5 L5 T5 C4 I2 — 生 fits well but 'new' isn't plausible, still context is fairly generic | cloze+teach | yes |
| raw | 生の肉を食べたことがありますか。 | Have you ever eaten raw meat? | なま | N5 L5 T5 C4 I3 | cloze+teach | yes |
| beer | 仕事の後でビールを飲みたいです。 | I want to drink beer after work. | びいる | N5 L5 T5 C3 I3 — Other drinks could fit the blank equally well. | teach only | yes |
| beer | 昨日友達とビールを飲みました。 | I drank beer with a friend yesterday. | びいる | N5 L5 T5 C3 I3 — Blank could be filled with other drink words. | teach only | yes |
| beer | この店のビールはとても美味しいらしいです。 | I hear this shop's beer is very delicious. | びいる | N5 L4 T5 C3 I4 — Still other beverages could plausibly fit the blank. | teach only | yes |
| box lunch | 朝早く弁当を作りました。 | I made a box lunch early in the morning. | べんとう | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other breakfast items, though 弁当 is a strong fit. | teach only | yes |
| box lunch | 今日は忙しいから弁当を買います。 | I'll buy a box lunch today because I'm busy. | べんとう | N5 L5 T5 C3 I3 — Many nouns (food, lunch, coffee) could fit the blank equally well. | teach only | yes |
| box lunch | 旅行に弁当を持って行くつもりです。 | I plan to bring a box lunch on the trip. | べんとう | N5 L5 T5 C3 I3 — Blank could be filled by various travel items, not uniquely 弁当. | teach only | yes |
| dessert | 食事の後でデザートを食べたいです。 | I want to eat dessert after the meal. | でざあと | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other food/drink words, reducing uniqueness. | teach only | yes |
| dessert | レストランでデザートを頼みました。 | I ordered dessert at the restaurant. | でざあと | N5 L5 T5 C2 I3 — Many nouns (料理, コーヒー, ワイン, etc.) could fit the blank, so it's not uniquely recoverable. | teach only | yes |
| picture | 日曜日に美術館で有名な絵画を見ました。 | I saw a famous painting at the art museum on Sunday. | かいが | N5 L5 T5 C3 I4 — 絵 could also fit the blank, slightly lowering recoverability. | teach only | yes |
| picture | この壁の絵画はどこで買いましたか。 | Where did you buy this painting on the wall? | かいが | N4 L5 T5 C2 I3 — Many nouns (絵, ポスター, 写真) could fill the blank; 壁の絵画 phrasing is a bit stiff. | teach only | yes |
| picture | 新しい絵画を部屋に飾りたいです。 | I want to decorate my room with a new painting. | かいが | N5 L5 T5 C2 I3 — Blank could be filled with many decor items like 花や写真, reducing uniqueness. | teach only | yes |
| furniture | 引っ越しの時に家具を運びました。 | I carried the furniture during the move. | かぐ | N5 L5 T5 C3 I3 — Other words like 荷物 could also fit the blank. | teach only | yes |
| furniture | この部屋の家具は誰が選びましたか。 | Who chose the furniture in this room? | かぐ | N5 L5 T5 C3 I3 — Blank could be filled by various nouns describing room contents. | teach only | yes |
| furniture | もっと便利な家具が欲しいです。 | I want more convenient furniture. | かぐ | N4 L5 T5 C2 I2 — Generic template sentence; many nouns fit the blank. | teach only | yes |
| basket | 果物を籠に入れました。 | I put the fruit in the basket. | かご | N5 L5 T5 C2 I3 — Blank could be filled with many containers (箱, 袋, 冷蔵庫), not uniquely 籠. | teach only | yes |
| basket | 買い物の時に籠を持って行きます。 | I take a basket when I go shopping. | かご | N5 L5 T5 C3 I4 — Shopping-basket context helps, but other items (バッグ, 財布, カート) could also fit the blank. | teach only | yes |
| decoration | お祭りの飾りを玄関に付けました。 | I put up festival decorations at the entrance. | かざり | N5 L5 T5 C3 I3 — Blank could also be filled by other festival-related nouns like 屋台 or 提灯, reducing recoverability. | teach only | yes |
| decoration | 誕生日パーティーのために飾りを作りたいです。 | I want to make decorations for the birthday party. | かざり | N4 L5 T5 C2 I3 — Reading uses ぱあてぃい instead of standard ぱーてぃー; also blank could be filled by many nouns (ケーキ, プレゼント, etc.), lowering recoverability. | teach only | yes |
| decoration | この飾りはいつ取りますか。 | When do you take down this decoration? | かざり | N5 L5 T5 C4 I4 | cloze+teach | yes |
| household matters | 毎朝家事をしてから出かけます。 | I do housework every morning before going out. | かじ | N5 L5 T5 C2 I3 — blank could be filled by many other activity nouns (仕事, 勉強, etc.) | teach only | yes |
| household matters | 今日は熱があるので家事ができませんでした。 | Today I had a fever, so I couldn't do the housework. | かじ | N5 L5 T5 C3 I3 — other nouns like 仕事 or 勉強 could also fit the blank | teach only | yes |
| household matters | 土曜日は家事を手伝うつもりです。 | I plan to help with the housework on Saturday. | かじ | N5 L5 T5 C3 I3 — 手伝う could pair with other nouns besides 家事 | teach only | yes |
| mold | この服の型は少し小さいです。 | The pattern/size of this clothing is a bit small. | かた | N4 L5 T4 C2 I3 — Ambiguous blank; サイズ or 形 could also fit. | teach only | yes |
| mold | ケーキを焼く型が欲しいです。 | I want a mold for baking cake. | かた | N5 L5 T5 C4 I4 | cloze+teach | yes |
| sword | 博物館で古い刀を見ました。 | I saw an old sword at the museum. | かたな | N5 L5 T5 C4 I3 | cloze+teach | yes |
| sword | おじいさんの部屋に刀が飾ってあります。 | There is a sword displayed in grandfather's room. | かたな | N5 L4 T5 C4 I4 | cloze+teach | yes |
| musical instrument | 子供の時に楽器を習いたかったです。 | I wanted to learn a musical instrument when I was a child. | がっき | N5 L5 T5 C3 I3 | teach only | yes |
| musical instrument | 旅行に楽器を持って行くつもりです。 | I plan to bring a musical instrument on the trip. | がっき | N5 L5 T5 C2 I3 — Many other nouns (camera, umbrella, souvenir) could fill the blank, reducing recoverability. | teach only | yes |
| signature | ここに署名してください。 | Please sign here. | しょめい | N5 L5 T5 C3 I2 — Blank could also be filled with 記入 or サイン, slightly reducing recoverability. | teach only | yes |
| signature | 父はまだ書類に署名していません。 | My father hasn't signed the document yet. | しょめい | N5 L5 T5 C3 I3 — Blank could plausibly be filled with 記入 or サイン, slightly reducing recoverability. | teach only | yes |
| processing | 母は魚の処理をしています。 | My mother is preparing (processing) the fish. | しょり | N4 L5 T4 C2 I3 — 料理 or 準備 could also fit the blank, reducing cloze specificity. | teach only | yes |
| processing | 仕事の処理に時間がかかりましたから、遅れました。 | Processing the work took time, so I was late. | しょり | N4 L5 T4 C3 I3 — 作業 or 準備 could also plausibly fill the blank in this business context. | teach only | yes |
| faith | おばあさんは神を信仰しています。 | Grandmother has faith in God. | しんこう | N4 L4 T5 C3 I3 — 崇拝 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| faith | 彼は宗教を信仰していません。 | He doesn't have faith in any religion. | しんこう | N4 L4 T5 C4 I3 | cloze+teach | yes |
| to believe | 彼の話を信じます。 | I believe his story. | しんじます | N5 L5 T5 C3 I2 — Blank could also fit verbs like 聞きます or 疑います, reducing uniqueness. | teach only | yes |
| to believe | その話を信じません。 | I don't believe that story. | しんじません | N5 L5 T5 C3 I2 — Similar ambiguity; other verbs (聞きません, 分かりません) could fit grammatically. | teach only | yes |
| to believe | 母を信じていますから、心配しません。 | I trust my mother, so I'm not worried. | しんじています | N5 L4 T5 C5 I4 — Context clearly forces 信じています, good natural example. | cloze+teach | yes |
| (human) life (e.g., conception to death) | 彼女の人生は楽しいです。 | Her life is enjoyable. | じんせい | N4 L5 T5 C2 I2 — Generic template sentence; many words could fill the blank (生活, 毎日, etc.). | teach only | yes |
| (human) life (e.g., conception to death) | 人生は短いですから、頑張ります。 | Life is short, so I'll do my best. | じんせい | N4 L5 T5 C4 I4 | cloze+teach | yes |
| improvement | 彼の英語は進歩しました。 | His English has improved. | しんぽ | N5 L5 T5 C3 I3 — 上達 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| improvement | 最近、進歩がありません。 | There has been no improvement recently. | しんぽ | N4 L5 T5 C2 I2 — Many nouns (変化, 進展, 進歩) could fill the blank; generic sentence. | teach only | yes |
| confidence | 彼は信用がある人です。 | He is a trustworthy person. | しんよう | N4 L5 T4 C2 I2 — Blank could be filled by many nouns like 人気 or 実力, not uniquely 信用. | teach only | yes |
| confidence | その人を信用していません。 | I don't trust that person. | しんよう | N5 L5 T5 C3 I3 — 信頼 could also fit the blank with similar meaning. | teach only | yes |
| confidence | 彼はいつも遅れますから、信用しません。 | He's always late, so I don't trust him. | しんよう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| reliance | 私は妻を信頼しています。 | I rely on my wife. | しんらい | N5 L5 T5 C2 I2 — Blank could also fit 尊敬 or other verbs, not uniquely determined. | teach only | yes |
| reliance | 彼を信頼していません。 | I don't rely on him. | しんらい | N5 L5 T5 C2 I2 — Same ambiguity, many words could fill the blank. | teach only | yes |
| reliance | 彼は親切ですから、みんなが信頼しています。 | He is kind, so everyone relies on him. | しんらい | N5 L5 T5 C3 I3 — Context of kindness narrows options somewhat but still allows 尊敬 or similar. | teach only | yes |
| cheer | 試合で選手がゴールを決めた時、大きな歓声が聞こえた。 | When the player scored a goal, a loud cheer could be heard. | かんせい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| cheer | 歓声で電話の声が聞こえませんでした。 | I couldn't hear the phone because of the cheering. | かんせい | N5 L5 T5 C3 I3 — Other noise words like 騒音 could also fit the blank. | teach only | yes |
| words | この語句の意味が分かりません。 | I don't understand the meaning of this word. | ごく | N4 L5 T4 C3 I2 — Blank could also be filled by 言葉 or 単語, reducing uniqueness. | teach only | yes |
| words | 先生は難しい語句を説明してくれました。 | The teacher explained the difficult word for me. | ごく | N4 L5 T4 C3 I3 — Same ambiguity with 言葉/単語 possible in the blank. | teach only | yes |
| words | その語句を辞書で調べてください。 | Please look up that word in the dictionary. | ごく | N4 L5 T4 C3 I2 — Generic sentence; 言葉 or 単語 could also fit the blank. | teach only | yes |
| to condemn | 遅刻した弟を責めないでください。 | Please don't blame my younger brother for being late. | せめ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to condemn | 母は自分を責めた。 | My mother blamed herself. | せめた | N5 L5 T5 C2 I3 — Blank could be filled by many verbs like 褒めた or 許した. | teach only | yes |
| to condemn | 失敗した理由を聞いても、彼を責めるつもりはない。 | Even after hearing the reason for the failure, I don't intend to blame him. | せめる | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to trick | 電話でお金を騙し取ろうとする人がいるから、気をつけてください。 | There are people who try to trick you out of money over the phone, so be careful. | だまし | N5 L4 T5 C3 I4 — Other verbs like 盗み取ろう could also fit the blank grammatically. | teach only | yes |
| to trick | 彼は友達を騙して仕事を辞めさせた。 | He tricked his friend into quitting the job. | だまして | N5 L4 T5 C3 I4 — Verbs like 脅して or 説得して could also plausibly fill the blank. | teach only | yes |
| to trick | 子供を騙すのは良くない。 | Tricking children is not good. | だます | N4 L5 T5 C2 I2 — Generic sentence; many verbs (叱る、虐待する) could fit the blank. | teach only | yes |
| to be silent | 母が怒っているから、私は黙ることにした。 | Since my mother is angry, I decided to stay silent. | だまる | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to be silent | 授業中は黙ってください。 | Please be quiet during class. | だまって | N5 L5 T5 C4 I3 | cloze+teach | yes |
| -- colloquial form of ください | お母さん、水をちょうだい。 | Mom, give me some water. | ちょうだい | N5 L5 T5 C3 I3 — Blank could also plausibly be filled by 'ください' or other request forms given only context, though ちょうだい fits the casual tone naturally. | teach only | yes |
| interpretation | 彼女は会議で通訳をしています。 | She is doing interpretation at the meeting. | つうやく | N5 L5 T4 C3 I3 — EN slightly awkward ('doing interpretation'); other job nouns could also fit blank. | teach only | yes |
| interpretation | 父は通訳の仕事をしている。 | My father works as an interpreter. | つうやく | N5 L5 T5 C3 I3 — Other job words (医者, 教師 etc.) could also fill the blank grammatically. | teach only | yes |
| cancer | 父は癌で入院しました。 | My father was hospitalized with cancer. | がん | N5 L5 T5 C2 I3 — Blank could be filled by many illnesses/injuries, not uniquely 癌. | teach only | yes |
| cancer | 癌の検査を受けてください。 | Please get a cancer screening. | がん | N5 L5 T5 C3 I3 — 検査 context suggests medical screening but not exclusively cancer. | teach only | yes |
| cancer | 彼はまだ癌の治療をしていますか。 | Is he still undergoing cancer treatment? | がん | N5 L5 T5 C2 I3 — Could be any disease requiring treatment, not uniquely 癌. | teach only | yes |
| organ | 肺は大切な器官です。 | The lungs are an important organ. | きかん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| organ | 医者は器官について説明しました。 | The doctor explained about the organ. | きかん | N4 L5 T5 C2 I2 — blank could be filled by many nouns (病気, 症状, etc.), low recoverability | teach only | yes |
| organ | この器官は何をする物ですか。 | What does this organ do? | きかん | N4 L5 T5 C3 I3 — could also fit words like 部品 or 機械, slightly ambiguous | teach only | yes |
| germ | 手を洗わないと菌が付きます。 | If you don't wash your hands, germs will stick to them. | きん | N5 L5 T5 C3 I3 — Could also be filled with words like 汚れ or ほこり, slightly reducing uniqueness. | teach only | yes |
| germ | 傷に菌が入らないように気をつけてください。 | Please be careful so germs don't get into the wound. | きん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| germ | 台所の菌を調べました。 | I checked for germs in the kitchen. | きん | N4 L5 T5 C2 I2 — Blank could be filled with 汚れ, カビ, or 細菌, making it less uniquely recoverable. | teach only | yes |
| nearsightedness | 弟は近視なので眼鏡をかけています。 | My younger brother is nearsighted, so he wears glasses. | きんし | N5 L5 T5 C3 I3 — could also be 遠視/乱視 in this context | teach only | yes |
| nearsightedness | 子供の時から近視でした。 | I've been nearsighted since I was a child. | きんし | N5 L5 T5 C3 I2 — generic; other eyesight terms could fit | teach only | yes |
| nearsightedness | 近視が心配なら医者に相談してください。 | If you're worried about nearsightedness, please consult a doctor. | きんし | N5 L5 T5 C3 I3 — other vision conditions could also fit the blank | teach only | yes |
| blood vessel | お酒を飲むと血管が広がります。 | When you drink alcohol, your blood vessels expand. | けっかん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| the whole body | 走った後、全身が痛いです。 | My whole body hurts after running. | ぜんしん | N5 L5 T5 C3 I3 — 体 or 足 could also fit the blank | teach only | yes |
| the whole body | 旅行で疲れて全身が重かったです。 | I got tired from the trip and my whole body felt heavy. | ぜんしん | N5 L5 T5 C3 I3 — 体 could also fit the blank | teach only | yes |
| the whole body | 全身の力を抜いてください。 | Please relax your whole body. | ぜんしん | N5 L5 T5 C3 I3 — 体 or 肩 could also fit the blank | teach only | yes |
| temperature (body) | 今朝、体温を計りました。 | I took my temperature this morning. | たいおん | N5 L5 T5 C3 I2 — 血圧 or 体重 could also fit the blank with 計る | teach only | yes |
| temperature (body) | 昨日の体温は三十八度でした。 | Yesterday my temperature was 38 degrees. | たいおん | N5 L5 T5 C5 I3 — 38度 strongly implies temperature, forcing correct answer | cloze+teach | yes |
| temperature (body) | 毎朝、体温を計ってください。 | Please take your temperature every morning. | たいおん | N5 L5 T5 C3 I2 — blank could plausibly be 血圧 or 体重 too | teach only | yes |
| weight | 最近、体重が増えました。 | My weight has increased recently. | たいじゅう | N5 L5 T5 C3 I3 | teach only | yes |
| weight | 旅行から帰って体重を計りました。 | I weighed myself after returning from the trip. | たいじゅう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| weight | 体重を教えてください。 | Please tell me your weight. | たいじゅう | N4 L5 T5 C2 I2 — Generic template sentence; blank could be many personal details (name, age, etc.). | teach only | yes |
| passage through | この電車は次の駅を通過します。 | This train passes through the next station. | つうか | N5 L4 T5 C4 I3 | cloze+teach | yes |
| passage through | 特急は小さい駅を通過しました。 | The express train passed through the small station. | つうか | N5 L4 T5 C4 I3 | cloze+teach | yes |
| passage | この道は今、通行できません。 | This road cannot be passed through right now. | つうこう | N5 L5 T5 C3 I3 — Other words like 使用 could also fit the blank. | teach only | yes |
| passage | 昨日、事故で道の通行が止まりました。 | Yesterday, traffic on the road stopped because of an accident. | つうこう | N5 L5 T4 C3 I4 — 交通 could also plausibly fit the blank. | teach only | yes |
| passage | 雪の日は通行が大変です。 | On snowy days, passage is difficult. | つうこう | N4 L5 T5 C2 I3 — Words like 移動 or 運転 could also fit the blank. | teach only | yes |
| bus or tram stop | バスの停留所はあの角にあります。 | The bus stop is at that corner. | ていりゅうじょ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| bus or tram stop | 停留所でバスを待ちました。 | I waited for the bus at the stop. | ていりゅうじょ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| bus or tram stop | 次の停留所で降りたいです。 | I want to get off at the next stop. | ていりゅうじょ | N5 L5 T5 C3 I3 — Could also be 駅 (station), reducing uniqueness of the blank. | teach only | yes |
| railway | この町には古い鉄道があります。 | This town has an old railway. | てつどう | N4 L5 T5 C2 I2 — Many nouns (神社, 建物, 公園) could fill the blank. | teach only | yes |
| railway | 鉄道で旅行するのが好きです。 | I like traveling by railway. | てつどう | N5 L5 T5 C2 I3 — Other transport words (電車, バス, 飛行機) also fit the blank. | teach only | yes |
| railway | 昔、この鉄道は有名でした。 | Long ago, this railway was famous. | てつどう | N4 L5 T5 C2 I3 — Blank could be filled by many nouns like 店, 建物, 学校. | teach only | yes |
| arrival | 飛行機の到着は九時です。 | The plane's arrival is at nine o'clock. | とうちゃく | N5 L5 T5 C3 I2 — 到着 could be swapped with 出発 and still fit grammatically, reducing uniqueness. | teach only | yes |
| arrival | バスは駅に到着しました。 | The bus arrived at the station. | とうちゃく | N5 L5 T5 C5 I3 | cloze+teach | yes |
| arrival | 到着が遅れて心配です。 | I'm worried because the arrival is late. | とうちゃく | N5 L5 T5 C4 I3 — 出発 could also plausibly fit the blank, slightly reducing uniqueness. | cloze+teach | yes |
| drive | 土曜日に海までドライブします。 | I'm going on a drive to the sea on Saturday. | どらいぶ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| drive | 昨日、友達とドライブしました。 | Yesterday I went on a drive with a friend. | どらいぶ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| drive | 天気がいい日はドライブしたいです。 | I want to go on a drive on days when the weather is nice. | どらいぶ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| truck | 大きいトラックが道を走っています。 | A big truck is running on the road. | とらっく | N5 L5 T5 C2 I2 — Could also be 車 or バス, not uniquely trucked. | teach only | yes |
| truck | 昨日、トラックが荷物を運びました。 | Yesterday, a truck carried the luggage. | とらっく | N5 L5 T5 C2 I3 — Carrying luggage could fit many vehicles, weak cloze cue. | teach only | yes |
| truck | あのトラックは工場から来ました。 | That truck came from the factory. | とらっく | N5 L5 T5 C3 I3 — Factory context slightly favors truck but still ambiguous with other vehicles. | teach only | yes |
| delivery | 毎朝、新聞の配達があります。 | There is a newspaper delivery every morning. | はいたつ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| delivery | 昨日、荷物の配達が遅れました。 | Yesterday, the package delivery was late. | はいたつ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| delivery | 明日、荷物を配達してもらいたいです。 | I want to have the package delivered tomorrow. | はいたつ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| passes | 日本に来てから三年が経ちました。 | Three years have passed since I came to Japan. | たちました | N5 L4 T5 C5 I3 | cloze+teach | yes |
| passes | 卒業してからもう十年が経った。 | Ten years have already passed since graduation. | たった | N5 L4 T5 C5 I3 | cloze+teach | yes |
| lately | 近頃、忙しくて本を読む時間がない。 | Lately I've been busy and have no time to read books. | ちかごろ | N5 L5 T5 C3 I4 — 最近 would also fit the blank equally well, reducing uniqueness. | teach only | yes |
| lately | 近頃、雨が続いていますね。 | It's been raining a lot lately, hasn't it. | ちかごろ | N5 L5 T5 C3 I3 — 最近 could also fit the blank, so answer isn't uniquely determined. | teach only | yes |
| lateness | 今朝、電車が遅れて学校に遅刻しました。 | This morning the train was late, so I was late for school. | ちこくしました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| lateness | 遅刻しないように早く起きたいです。 | I want to wake up early so I won't be late. | ちこく | N5 L5 T5 C4 I3 — 寝坊 could also fit the blank, slightly lowering recoverability. | cloze+teach | yes |
| long time period | 長期の休みには旅行に行きたいです。 | During a long vacation, I want to go traveling. | ちょうき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| long time period | 彼は長期の入院をしています。 | He has been hospitalized for a long period. | ちょうき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| long time period | この仕事には長期の計画が必要です。 | This job requires a long-term plan. | ちょうき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| in succession | 授業中に質問が次々に出た。 | Questions came up one after another during class. | つぎつぎ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| in succession | レストランに客が次々に入ってきた。 | Customers came into the restaurant one after another. | つぎつぎ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| always (same as いつも) (written expression) | 彼は常に笑顔で話します。 | He always speaks with a smile. | つねに | N5 L5 T5 C3 I2 — いつも would also fit the blank equally well, reducing cloze recoverability. | teach only | yes |
| always (same as いつも) (written expression) | この地方の天気は常に変わりやすい。 | The weather in this region is always changeable. | つねに | N5 L5 T5 C3 I3 — いつも could also fill the blank naturally here. | teach only | yes |
| always (same as いつも) (written expression) | 学生は常に新しいことを学ぶべきだ。 | Students should always learn new things. | つねに | N5 L4 T5 C4 I3 — Formal べきだ context slightly favors 常に over いつも, improving recoverability. | cloze+teach | yes |
| fixed term | 定期的に病院で検査を受けています。 | I get checked at the hospital on a regular basis. | ていき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| fixed term | 定期券を買えば電車が安くなります。 | If you buy a commuter pass, the train becomes cheaper. | ていき | N5 L5 T5 C5 I4 | cloze+teach | yes |
| at that time | 当時、私は大学生でした。 | At that time, I was a university student. | とうじ | N5 L5 T5 C3 I2 — 昔 or 以前 could also fill the blank, so not fully unique. | teach only | yes |
| at that time | 当時のことを今もよく覚えています。 | I still remember well what happened back then. | とうじ | N5 L5 T5 C3 I3 — 昔 could also fit the blank. | teach only | yes |
| at that time | 当時は携帯電話がありませんでした。 | Back then, there were no cell phones. | とうじ | N5 L5 T5 C3 I4 — 昔 could also fit, but context (no cell phones) is a nice concrete detail. | teach only | yes |
| breath | 病気のとき、息が苦しかったです。 | When I was sick, my breathing was difficult. | いき | N4 L5 T4 C4 I3 — breathing difficulty is more naturally 息が苦しい (present feeling), but sentence works fine; blank is fairly recoverable though '胸' could conceivably fit context. | cloze+teach | yes |
| breath | 山に登ったら、息が切れました。 | When I climbed the mountain, I got out of breath. | いき | N5 L5 T5 C5 I4 | cloze+teach | yes |
| breath | 息を止めることができますか。 | Can you hold your breath? | いき | N5 L5 T5 C5 I4 | cloze+teach | yes |
| consciousness | 事故で頭を打って、意識を失いました。 | I hit my head in the accident and lost consciousness. | いしき | N5 L5 T5 C5 I4 | cloze+teach | yes |
| consciousness | 患者はまだ意識がありますか。 | Does the patient still have consciousness? | いしき | N4 L5 T5 C4 I3 | cloze+teach | yes |
| consciousness | もっと体のことを意識したいです。 | I want to be more conscious of my body. | いしき | N4 L5 T4 C3 I3 — other words like 気にする could also fit the blank | teach only | yes |
| pain | 足の痛みがだんだん強くなりました。 | The pain in my leg gradually got stronger. | いたみ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| pain | どこに痛みがありますか。 | Where does it hurt? | いたみ | N5 L5 T4 C2 I3 — Blank could be filled by many nouns like 問題, 傷, etc., reducing cloze recoverability. | teach only | yes |
| pain | 痛みを早く止めたいです。 | I want to stop the pain quickly. | いたみ | N5 L5 T5 C3 I3 — Other nouns like 出血, 咳 could also fit the blank. | teach only | yes |
| getting nervous | 渋滞で、いらいらしました。 | I got irritated because of the traffic jam. | いらいら | N5 L5 T5 C4 I4 | cloze+teach | yes |
| getting nervous | 最近、いらいらしていますか。 | Have you been feeling irritated lately? | いらいら | N5 L5 T5 C2 I2 — Context too generic, many emotion words could fill the blank. | teach only | yes |
| getting nervous | 仕事が忙しくて、いらいらします。 | I get irritated because work is busy. | いらいら | N5 L5 T5 C3 I3 — Busy work could also lead to other emotions like tiredness, slightly reducing recoverability. | teach only | yes |
| medical care | この国の医療はとても進んでいます。 | This country's medical care is very advanced. | いりょう | N5 L5 T5 C2 I3 — Blank could also be filled by 技術, 経済, etc. | teach only | yes |
| medical care | 医療はお金がかかりますか。 | Does medical care cost a lot of money? | いりょう | N5 L5 T5 C2 I3 — Many nouns like 旅行, 教育, 結婚 could fit the blank. | teach only | yes |
| medical care | 医療の仕事をしたいです。 | I want to work in medical care. | いりょう | N5 L5 T5 C2 I3 — Blank works with many job fields, low specificity. | teach only | yes |
| gargling | 風邪を予防するために、うがいをしました。 | I gargled to prevent catching a cold. | うがい | N5 L5 T5 C3 I3 — Blank could arguably fit other health-related nouns like 手洗い, but 風邪予防 context helps. | teach only | yes |
| gargling | 毎日うがいをしていますか。 | Do you gargle every day? | うがい | N5 L5 T5 C2 I2 — Very generic sentence pattern; many activity nouns could fill the blank. | teach only | yes |
| gargling | 朝、顔を洗ってから、うがいをします。 | In the morning, I gargle after washing my face. | うがい | N5 L5 T5 C3 I3 — Context of washing face narrows options somewhat but other morning routine nouns could still fit. | teach only | yes |
| smile | 彼女はいつも笑顔で話します。 | She always speaks with a smile. | えがお | N5 L5 T5 C3 I3 — other nouns like 大声 or 敬語 could also fill the blank, though 笑顔で話す is a common collocation | teach only | yes |
| smile | 赤ちゃんの笑顔が見たいです。 | I want to see the baby's smile. | えがお | N5 L5 T5 C3 I3 — words like 顔 or 写真 could also fit the blank | teach only | yes |
| to fear | 彼は失敗を恐れています。 | He is afraid of failure. | おそれて | N4 L5 T5 C3 I3 | teach only | yes |
| to come untied | 靴の紐が解けました。 | My shoelace came untied. | とけました | N5 L5 T5 C3 I2 — ほどける could also fit the blank, reducing uniqueness. | teach only | yes |
| to come untied | 気づいたら、靴の紐が解けていました。 | Before I knew it, my shoelace had come untied. | とけていました | N5 L4 T5 C3 I3 — ほどけていました is also a plausible alternative answer. | teach only | yes |
| to come untied | このネクタイは簡単に解けてしまいます。 | This necktie easily comes untied. | とけて | N5 L4 T5 C3 I4 — ゆるんで or ほどけて could also plausibly fill the blank. | teach only | yes |
| to close (e.g., book, eyes) | 本を閉じてください。 | Please close the book. | とじて | N5 L5 T5 C3 I2 — Blank could also be filled with 開いて or 読んで, reducing cloze certainty. | teach only | yes |
| to close (e.g., book, eyes) | 目を閉じて、少し休みました。 | I closed my eyes and rested a little. | とじて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to close (e.g., book, eyes) | 授業が終わったら、教科書を閉じます。 | When class ends, I close my textbook. | とじます | N5 L5 T5 C3 I2 — Could also plausibly be しまいます or 片付けます, lowering cloze specificity. | teach only | yes |
| to fasten | ボタンを留めてください。 | Please fasten the button. | とめて | N4 L5 T4 C3 I2 — Could also be 'はめて' or 'つけて'; slight ambiguity. | teach only | yes |
| to fasten | 書類をピンで留めました。 | I fastened the documents with a pin. | とめました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to fasten | 写真を壁に留めました。 | I fastened the photo to the wall. | とめました | N4 L5 T4 C3 I3 — '貼る' is also common for attaching photos to a wall, reducing uniqueness of the blank. | teach only | yes |
| to have someone stay | 今晩、友達を家に泊めます。 | I'll let my friend stay at my house tonight. | とめます | N5 L5 T5 C3 I3 — 呼ぶ/招く could also fit the blank, slightly reducing recoverability. | teach only | yes |
| to have someone stay | 今夜だけ泊めてください。 | Please let me stay just for tonight. | とめて | N5 L5 T5 C3 I3 — 待って or other verbs could also fit '今夜だけ＿てください', slightly ambiguous. | teach only | yes |
| to have someone stay | 兄が友達を家に泊めてあげました。 | My older brother let his friend stay at his house. | とめて | N5 L5 T5 C3 I3 — 呼んで could also fit the blank, slightly reducing recoverability. | teach only | yes |
| to come off | シャツのボタンが取れてしまいました。 | The button on my shirt came off. | とれて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to come off | 急いでいたら、靴の底が取れました。 | While I was hurrying, the sole of my shoe came off. | とれました | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to drain | 料理の後、鍋の水を流してください。 | After cooking, please drain the water from the pot. | ながして | N4 L5 T5 C3 I3 — 捨てて (throw away) could also fit the blank, slightly reducing recoverability. | teach only | yes |
| to drain | 台所で汚れた水を流しました。 | I drained the dirty water in the kitchen. | ながしました | N4 L5 T5 C3 I3 — 捨てました could also plausibly fill the blank, slightly weakening cloze uniqueness. | teach only | yes |
| to view | 窓から外を眺めるのが好きです。 | I like looking out the window. | ながめる | N5 L5 T5 C3 I3 — 見る could also fit the blank, reducing uniqueness. | teach only | yes |
| to view | 子供と一緒に、星を眺めました。 | I gazed at the stars together with my child. | ながめました | N5 L5 T5 C3 I4 — 見る could also fit the blank, reducing uniqueness. | teach only | yes |
| to lose someone | 去年、私はおじいさんを亡くしました。 | Last year, I lost my grandfather. | なくしました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to lose someone | 彼は若い時に両親を亡くしたそうです。 | I heard he lost his parents when he was young. | なくした | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to lose someone | 大切な人を亡くすのはとても悲しいです。 | Losing someone important is very sad. | なくす | N5 L5 T5 C4 I4 | cloze+teach | yes |
| personal use | 会社の電話を私用で使わないでください。 | Please don't use the company phone for personal use. | しよう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| personal use | 今日は私用で会社を休みます。 | I'm taking today off from work for personal reasons. | しよう | N5 L5 T5 C2 I4 — Many reasons (病気, 用事, etc.) could fill the blank, not just 私用. | teach only | yes |
| feelings | 彼は情に厚い人です。 | He is a person with deep compassion. | じょう | N5 L4 T5 C4 I4 | cloze+teach | yes |
| one's lifetime | 祖父は生涯を故郷で過ごしました。 | My grandfather spent his whole life in his hometown. | しょうがい | N4 L5 T5 C3 I3 — 人生 or 一生 could also fit the blank, reducing uniqueness. | teach only | yes |
| one's lifetime | 私はこの日を生涯忘れないと思います。 | I think I will never forget this day in my lifetime. | しょうがい | N5 L5 T5 C3 I4 — 一生 is a common alternative that also fits, slightly reducing uniqueness. | teach only | yes |
| natural shape | 電話の相手の正体が分かりません。 | I don't know the true identity of the person on the phone. | しょうたい | N5 L4 T5 C3 I4 | teach only | yes |
| natural shape | 犯人の正体がついに分かりました。 | The criminal's true identity was finally discovered. | しょうたい | N5 L4 T5 C3 I4 | teach only | yes |
| shock | 母が入院してショックです。 | I'm shocked that my mother was hospitalized. | しょっく | N5 L5 T5 C5 I4 | cloze+teach | yes |
| advance | 会議の進行が遅れています。 | The progress of the meeting is delayed. | しんこう | N5 L5 T5 C3 I3 | teach only | yes |
| advance | 病気の進行が心配です。 | I'm worried about the progress of the illness. | しんこう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| rising | この町は新興住宅地として有名です。 | This town is famous as a newly developed residential area. | しんこう | N5 L4 T5 C4 I3 | cloze+teach | yes |
| rising | 新興企業が増えています。 | Emerging companies are increasing. | しんこう | N5 L4 T5 C3 I3 — Blank could plausibly be filled by other adjectives like 中小 or 大手. | teach only | yes |
| rising | 彼は新興国に旅行に行きました。 | He traveled to an emerging country. | しんこう | N4 L4 T5 C2 I3 — Many words (先進, 隣, 外) could fit the blank before 国. | teach only | yes |
| free of charge | この本は友達からただでもらいました。 | I got this book for free from a friend. | ただ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| free of charge | ただで旅行がしたいです。 | I want to travel for free. | ただ | N5 L5 T5 C3 I3 — could also be filled with 安く (cheaply), slightly reducing uniqueness | teach only | yes |
| battle | 昨日、ゲームで戦いに勝ちました。 | Yesterday I won the battle in the game. | たたかい | N4 L5 T5 C3 I3 — reading げえむ should be げーむ but understandable; blank could also fit 試合 or 勝負 | teach only | yes |
| battle | 歴史の授業で昔の戦いについて習いました。 | I learned about an old battle in history class. | たたかい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| battle | あの戦いはいつ終わりましたか。 | When did that battle end? | たたかい | N4 L5 T5 C2 I3 — blank could be filled by 試合, 会議, 話し合い, etc., reducing recoverability | teach only | yes |
| standpoint | 彼の立場はよく分かりました。 | I understood his standpoint well. | たちば | N5 L5 T5 C3 I3 — Blank could also be filled by 気持ち or 意見, reducing uniqueness. | teach only | yes |
| standpoint | あなたの立場ではどう思いますか。 | What do you think from your standpoint? | たちば | N4 L5 T4 C2 I3 — Many words like 意見・視点 could fill the blank, weakening cloze uniqueness. | teach only | yes |
| even if | たとえ雨が降っても、明日出かけます。 | Even if it rains, I'll go out tomorrow. | たとえ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| even if | たとえ難しくても、この曲を弾きたいです。 | Even if it's difficult, I want to play this song. | たとえ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| even if | たとえ忙しくても、友達に会いに行きますか。 | Even if you're busy, will you go see your friend? | たとえ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| trial | これは試しに作った料理ですか。 | Is this a dish you made as a trial? | ためし | N5 L4 T5 C5 I3 | cloze+teach | yes |
| wisdom | もっと知恵をつけたいです。 | I want to gain more wisdom. | ちえ | N4 L5 T5 C3 I3 — 知恵をつける is idiomatic but other nouns (力、自信) could also fit the blank. | teach only | yes |
| wisdom | この問題を解くのに知恵が必要ですか。 | Is wisdom necessary to solve this problem? | ちえ | N4 L5 T5 C3 I3 — 知恵が必要 fits well, though 知識/力 could also work in context. | teach only | yes |
| difference | この二つの言葉の違いが分かりません。 | I don't understand the difference between these two words. | ちがい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| difference | 今日と昨日の天気の違いは大きいです。 | The difference in weather between today and yesterday is big. | ちがい | N4 L5 T5 C4 I3 — 差 could also fit but 違い is natural. | cloze+teach | yes |
| difference | この二つにはどんな違いがありますか。 | What kind of difference is there between these two? | ちがい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| knowledge | 友達は歴史の知識がありますか。 | Does your friend have knowledge of history? | ちしき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| numeral | 黒板に大きい数字が書いてあります。 | A big numeral is written on the blackboard. | すうじ | N5 L5 T5 C3 I3 — blank could plausibly be 字/文字/絵 too | teach only | yes |
| numeral | この数字が読めますか。 | Can you read this numeral? | すうじ | N5 L5 T5 C3 I3 — blank could be 字/漢字/文章 as well | teach only | yes |
| a species | これは果物の一種です。 | This is a kind of fruit. | いっしゅ | N4 L5 T5 C3 I2 — Generic template sentence; 種類 could also fill the blank. | teach only | yes |
| a species | ピアノは楽器の一種ですから、習いたいです。 | Since the piano is a kind of instrument, I want to learn it. | いっしゅ | N4 L5 T5 C3 I4 — More natural context with reasoning; synonym 種類 could also fit the blank. | teach only | yes |
| one object | 家に古い人形が一体あります。 | There is one old doll at home. | いったい | N5 L5 T5 C4 I2 | cloze+teach | yes |
| one object | 友達から人形を一体もらいました。 | I received one doll from a friend. | いったい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| amount | 家族に渡すお金の額を決めました。 | I decided the amount of money to give to my family. | がく | N5 L5 T5 C5 I4 | cloze+teach | yes |
| amount | 電話でその額を伝えてください。 | Please tell me that amount over the phone. | がく | N4 L5 T5 C3 I3 — Context alone doesn't strongly force 額 over synonyms like 金額 or 数字. | teach only | yes |
| amount | 額が大きくて、困りました。 | The amount was large, so I was troubled. | がく | N4 L5 T4 C2 I3 — Lacks context distinguishing 'amount' from other fitting words (e.g., 額 could also mean forehead or be replaced by 金額/量). | teach only | yes |
| to count | 子供と一緒に星を数えました。 | I counted the stars together with my child. | かぞえました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to count | 一緒にお金を数えませんか。 | Shall we count the money together? | かぞえません | N4 L5 T5 C4 I4 — Beeped segment splits the verb oddly (数えません／か), slightly unnatural for cloze. | cloze+teach | yes |
| to count | 教室で学生を数えてください。 | Please count the students in the classroom. | かぞえて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| amount of money | 金額が大きいから、銀行へ行きます。 | Because the amount of money is large, I will go to the bank. | きんがく | N4 L5 T5 C3 I3 — other nouns like 残高 or お金 could also fit the blank | teach only | yes |
| calculation | 学生は教室で計算をしています。 | The students are doing calculations in the classroom. | けいさん | N4 L5 T5 C2 I2 — Blank could be filled by many nouns (勉強, 読書, etc.), low cloze specificity. | teach only | yes |
| calculation | この問題の計算を手伝ってくれますか。 | Could you help me with the calculation for this problem? | けいさん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| calculation | 計算が難しいから、時間がかかります。 | Since the calculation is difficult, it takes time. | けいさん | N5 L5 T5 C3 I3 — Slightly generic; other nouns like 宿題 could also fit. | teach only | yes |
| sum total | 買い物の合計はいくらですか。 | What is the total for the shopping? | ごうけい | N5 L5 T5 C3 I3 — Could also be 値段 or 金額 in the blank. | teach only | yes |
| sum total | 合計が多くて、困りました。 | The total was large, so I was troubled. | ごうけい | N4 L5 T5 C3 I3 — Could also be 金額 or 値段. | teach only | yes |
| yearbook | 学校の図書館でこの年鑑を借りたいです。 | I want to borrow this yearbook from the school library. | ねんかん | N4 L5 T5 C2 I2 — Blank could plausibly be book, magazine, or novel; not tightly constrained to yearbook. | teach only | yes |
| yearbook | 去年の天気はこの年鑑で分かりますか。 | Can you find out last year's weather from this yearbook? | ねんかん | N4 L5 T5 C4 I4 | cloze+teach | yes |
| in advance | 前もって宿題をしておきましたか。 | Did you do your homework in advance? | まえもって | N5 L5 T5 C3 I3 — other adverbs like もう or ちゃんと could also fit the blank | teach only | yes |
| silver | この指輪は銀で出来ています。 | This ring is made of silver. | ぎん | N5 L5 T5 C2 I3 — Many materials (gold, platinum, wood) could fill the blank, so it's not uniquely recoverable. | teach only | yes |
| silver | 銀のスプーンを買いたいです。 | I want to buy a silver spoon. | ぎん | N5 L5 T5 C2 I3 — Other materials like gold or plastic could also describe a spoon. | teach only | yes |
| silver | 銀の時計はとても高いです。 | The silver watch is very expensive. | ぎん | N5 L5 T5 C2 I3 — Many adjectives/materials could precede 時計, making the blank ambiguous. | teach only | yes |
| safe | お金を金庫に入れました。 | I put the money in the safe. | きんこ | N5 L5 T5 C2 I2 — Blank could be filled by many nouns like 財布, 箱, 引き出し, etc. | teach only | yes |
| safe | 朝、金庫の鍵を忘れてしまいました。 | This morning, I forgot the key to the safe. | きんこ | N5 L5 T5 C3 I4 — 鍵 could belong to many things (car, house, locker), so not fully unique. | teach only | yes |
| safe | 大切な物は金庫に置いておきます。 | I keep important things in the safe. | きんこ | N5 L5 T5 C2 I3 — Many storage places could fit the blank, e.g. 引き出し, 箱, 棚. | teach only | yes |
| metal | 金属は熱くなりやすいです。 | Metal easily becomes hot. | きんぞく | N4 L5 T5 C2 I2 — Many nouns could fill the blank (e.g., 石, 鉄, ガラス), so context doesn't force 金属. | teach only | yes |
| metal | 空港で金属の物をポケットから出してください。 | Please take metal items out of your pocket at the airport. | きんぞく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| chain | 自転車の鎖が壊れてしまいました。 | The bicycle chain broke. | くさり | N5 L4 T5 C4 I4 | cloze+teach | yes |
| chain | 鎖を持ってきてください。 | Please bring a chain. | くさり | N4 L3 T5 C2 I1 — Generic sentence, many objects could fill the blank. | teach only | yes |
| parcel | 郵便局で小包を送りました。 | I sent a parcel at the post office. | こづつみ | N5 L5 T5 C3 I3 — Could also be 荷物 or 手紙, so blank isn't fully forced. | teach only | yes |
| parcel | 明日、小包が届くはずです。 | The parcel should arrive tomorrow. | こづつみ | N5 L5 T5 C3 I3 — Other delivery items (手紙, 荷物) could fit the blank. | teach only | yes |
| parcel | 重い小包を持ちながら走りました。 | I ran while carrying a heavy parcel. | こづつみ | N5 L5 T5 C3 I4 — 荷物 or 箱 could also fit contextually. | teach only | yes |
| Japanese harp | 姉は毎晩、琴を弾いています。 | My sister plays the koto every night. | こと | N5 L5 T5 C2 I3 — 弾く works with many instruments, so blank isn't uniquely 琴 | teach only | yes |
| Japanese harp | 琴を習いたいです。 | I want to learn the koto. | こと | N5 L5 T5 C1 I2 — Very generic, many nouns could fill the blank | teach only | yes |
| Japanese harp | 昔、この部屋で琴の音が聞こえました。 | Long ago, the sound of a koto could be heard in this room. | こと | N5 L5 T5 C3 I4 — Slightly more evocative context but still other instruments could fit | teach only | yes |
| garbage | 朝、ごみを出しました。 | This morning, I took out the garbage. | ごみ | N5 L5 T5 C3 I2 — Blank could be filled by many nouns (手紙、洗濯物 etc.), not uniquely ごみ. | teach only | yes |
| garbage | 急いでいたので、ごみを忘れてしまいました。 | Since I was in a hurry, I forgot the garbage. | ごみ | N5 L4 T5 C2 I3 — Many objects (財布、傘、鍵 etc.) could fit the blank, making ごみ hard to uniquely recover. | teach only | yes |
| passport | 明日旅行に行くから、パスポートを持ちましたか。 | Since we're going on a trip tomorrow, did you bring your passport? | ぱすぽうと | N4 L5 T5 C5 I4 | cloze+teach | yes |
| passport | 朝、パスポートをかばんに入れました。 | In the morning, I put my passport in the bag. | ぱすぽうと | N5 L5 T5 C2 I2 — Many objects could fill the blank (wallet, book, etc.). | teach only | yes |
| passport | 新しいパスポートが欲しいです。 | I want a new passport. | ぱすぽうと | N5 L5 T5 C2 I2 — Generic template sentence; many nouns fit the blank. | teach only | yes |
| departure of a vehicle | 電車の発車は何時ですか。 | What time does the train depart? | はっしゃ | N5 L5 T5 C3 I2 — 到着 could also fit the blank, reducing uniqueness | teach only | yes |
| departure of a vehicle | バスの発車まで五分あります。 | There are five minutes until the bus departs. | はっしゃ | N5 L5 T5 C3 I2 — 到着 could also fit the blank | teach only | yes |
| departure of a vehicle | 急いでいたのに、発車のベルが鳴りました。 | Even though I was hurrying, the departure bell rang. | はっしゃ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| aviation | 台風で飛行が危険です。 | Flying is dangerous because of the typhoon. | ひこう | N4 L5 T4 C3 I3 — Slightly unnatural; 運航 or 飛行機 more common but understandable. | teach only | yes |
| aviation | 彼は飛行の研究をしています。 | He is researching aviation. | ひこう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| a brake | 車のブレーキが利かなくて、怖かったです。 | The car's brakes didn't work, and it was scary. | ぶれえき | N5 L5 T5 C4 I4 | cloze+teach | yes |
| a brake | 自転車のブレーキを直しましたか。 | Did you fix the bicycle's brakes? | ぶれえき | N5 L5 T5 C2 I3 — Blank could also be filled with タイヤ, ライト, ベル, etc., reducing recoverability. | teach only | yes |
| rowing boat | 天気がいいから、公園の池でボートに乗りませんか。 | Since the weather is nice, shall we ride a boat on the pond in the park? | ぼうと | N5 L5 T5 C5 I4 | cloze+teach | yes |
| rowing boat | 小さいボートを買いたいです。 | I want to buy a small boat. | ぼうと | N4 L5 T5 C2 I1 — Generic template sentence; many nouns could fill the blank. | teach only | yes |
| rowing boat | ボートが揺れて、気分が悪くなりました。 | The boat rocked, and I started to feel sick. | ぼうと | N5 L5 T5 C3 I4 — Could also be a ship or car that rocks, slightly reducing uniqueness. | teach only | yes |
| to be popular | あの店は旅行者の間で流行っているらしいです。 | That shop seems to be popular among tourists. | はやっている | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to be popular | 急いでいるから、流行っている店には行きません。 | I'm in a hurry, so I won't go to the popular shop. | はやっている | N4 L4 T5 C3 I3 — A synonym like 人気の could also fit the blank grammatically, slightly reducing recoverability. | teach only | yes |
| balance | 晩御飯は栄養のバランスを考えて作ります。 | I make dinner while thinking about nutritional balance. | ばらんす | N5 L5 T5 C4 I3 | cloze+teach | yes |
| balance | バランスのいい食事を子供に食べさせてください。 | Please have your child eat a well-balanced meal. | ばらんす | N5 L5 T5 C5 I3 | cloze+teach | yes |
| balance | 忙しくて、旅行中はバランスのいい食事ができませんでした。 | I was busy, so I couldn't have balanced meals during the trip. | ばらんす | N5 L5 T5 C5 I4 | cloze+teach | yes |
| extent | この地図の範囲内なら、歩いて行けます。 | If it's within the range of this map, you can walk there. | はんい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| extent | 子供に任せる範囲は決まっていません。 | The extent of what we leave to the child isn't decided. | はんい | N4 L5 T4 C3 I3 — Blank could plausibly be filled by other nouns like 仕事 or 内容. | teach only | yes |
| opposition | 息子は最近、親に反抗しています。 | My son has been opposing his parents lately. | はんこうして | N5 L4 T5 C5 I3 | cloze+teach | yes |
| opposition | 娘は反抗しないので助かります。 | My daughter doesn't rebel, so it's a relief. | はんこうしない | N5 L4 T5 C3 I3 — Many verbs could fit the blank (e.g., 泣かない、怒らない) since context is vague. | teach only | yes |
| crime | この辺りは犯罪が多いので、気をつけてください。 | There's a lot of crime around here, so please be careful. | はんざい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| crime | 彼がしたことは犯罪ではありません。 | What he did isn't a crime. | はんざい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| reflection | 遅刻したのに、彼は全然反省していません。 | Even though he was late, he isn't reflecting on it at all. | はんせい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| judgment | 地図を見て、どちらに行くか判断しました。 | I looked at the map and judged which way to go. | はんだん | N5 L5 T5 C3 I3 — Could also be filled with 決断/決定 in this context. | teach only | yes |
| judgment | 味を見て、塩の量を判断してください。 | Please taste it and judge the amount of salt. | はんだん | N5 L5 T5 C3 I3 — 調整 or 決める could also fit the blank. | teach only | yes |
| judgment | 子供だけでは、正しい判断ができません。 | Children alone can't make the right judgment. | はんだん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| damage | 台風で、旅行先の町は大きい被害を受けました。 | Due to the typhoon, the town we visited suffered great damage. | ひがい | N4 L5 T5 C4 I3 — 大きな被害 would be slightly more natural than 大きい被害 | cloze+teach | yes |
| damage | 地震で家族の家に被害がありました。 | There was damage to my family's house from the earthquake. | ひがい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to pluck | 花を摘みたいです。 | I want to pluck flowers. | つみたい | N5 L5 T5 C3 I2 | teach only | yes |
| to pluck | 歌を歌いながら花を摘みます。 | I pluck flowers while singing a song. | つみます | N5 L5 T5 C3 I4 | teach only | yes |
| to get strong | 台風が来たから、風が強まりました。 | Because the typhoon came, the wind grew stronger. | つよまりました | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to get strong | 雨がもっと強まりそうです。 | It looks like the rain will get stronger. | つよまりそう | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to get strong | 明日、風はもっと強まりますか。 | Will the wind get stronger tomorrow? | つよまります | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to strengthen | 料理のために、火を強めます。 | For cooking, I turn up the flame. | つよめます | N4 L5 T5 C3 I3 — Could also be 弱めます depending on context, slightly reduces recoverability. | teach only | yes |
| to strengthen | 火を強めれば、早く出来ます。 | If you turn up the flame, it will be done quickly. | つよめれば | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to bind | この書類を綴じてください。 | Please bind these documents. | とじて | N4 L5 T5 C3 I3 — Context alone doesn't force 綴じる over other verbs like 準備する. | teach only | yes |
| to bind | 会議の前に書類を綴じておきます。 | I'll bind the documents before the meeting. | とじて | N4 L4 T5 C4 I4 | cloze+teach | yes |
| to accustom | 新しい仕事に体を慣らすようにしています。 | I'm trying to get my body used to the new job. | ならす | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to accustom | 彼はまだ新しい生活に体を慣らしていません。 | He hasn't gotten his body used to the new life yet. | ならして | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to domesticate | 猫を馴らすことにしました。 | I decided to tame the cat. | ならす | N4 L4 T5 C2 I3 — Blank could plausibly be filled with many other verbs (飼う, 訓練する, etc.), weakening cloze recoverability. | teach only | yes |
| to domesticate | 彼女は犬を馴らします。 | She tames the dog. | ならします | N4 L4 T5 C2 I2 — Generic sentence; blank not uniquely constrained to 馴らす. | teach only | yes |
| to domesticate | 小鳥を馴らしてみます。 | I'll try to tame the small bird. | ならして | N4 L4 T5 C2 I3 — Context allows several verbs (飼う, 訓練する) to fit the blank, reducing recoverability. | teach only | yes |
| to turn over | 本のページを捲りながら読みます。 | I read while turning the pages of the book. | めくり | N4 L4 T5 C4 I3 — Katakana long vowel written as えい instead of ー, minor romanization quirk. | cloze+teach | yes |
| to turn over | カレンダーが今日の日に捲ってあります。 | The calendar is turned to today's date. | めくって | N4 L3 T5 C4 I3 — Same long-vowel notation issue in katakana reading. | cloze+teach | yes |
| to turn over | そのページを捲ってください。 | Please turn that page. | めくって | N4 L4 T5 C2 I2 — Blank could be filled by many verbs like 読んで, 破って, etc., reducing recoverability. | teach only | yes |
| professional | 一緒にプロの試合を見ませんか。 | Won't you watch a professional match with me? | ぷろ | N5 L5 T5 C3 I4 — Blank could plausibly be filled by other words like 野球, サッカー, etc., slightly lowering recoverability. | teach only | yes |
| porter | ホテルのボーイに荷物を頼みました。 | I asked the hotel porter to carry the luggage. | ぼうい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| porter | あのボーイは親切でしたね。 | That porter was kind, wasn't he? | ぼうい | N4 L5 T5 C1 I2 — blank could be filled by almost any person noun (waiter, guide, clerk), context doesn't force 'porter' | teach only | yes |
| bar owner | あの店のマスターはとても親切です。 | The bar owner of that shop is very kind. | ますたあ | N5 L5 T5 C3 I2 — Other words like 店員 or オーナー could also fit the blank. | teach only | yes |
| bar owner | マスターに新しいお酒を頼みたいです。 | I want to ask the bar owner for a new drink. | ますたあ | N4 L5 T4 C3 I3 — '頼む' for ordering a drink is natural but blank could be filled by other nouns like 店員. | teach only | yes |
| bar owner | 友達とマスターの店へ行きませんか。 | Won't you go to the bar owner's shop with a friend? | ますたあ | N4 L5 T4 C2 I2 — Blank could easily be replaced by 友達 or another noun, reducing recoverability. | teach only | yes |
| particle | 先生、助詞について質問してもいいですか。 | Teacher, may I ask a question about particles? | じょし | N5 L5 T5 C2 I4 — Blank could be filled by many nouns like 文法, 単語, 発音, etc., so context doesn't force '助詞' specifically. | teach only | yes |
| dropping out of school | 彼は大学を退学することにしました。 | He decided to drop out of university. | たいがく | N5 L5 T5 C3 I3 — Blank could plausibly be filled by 卒業/留学/進学 etc., reducing uniqueness. | teach only | yes |
| dropping out of school | 退学しないでください。 | Please don't drop out of school. | たいがく | N5 L5 T5 C2 I2 — Very generic template; many verbs (遅刻, 欠席, 喧嘩など) fit the blank equally well. | teach only | yes |
| change schools | 来月、隣の町の学校へ転校します。 | Next month, I will transfer to a school in the next town. | てんこう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| change schools | 転校した友達に手紙を書きました。 | I wrote a letter to my friend who transferred schools. | てんこう | N5 L5 T5 C3 I3 — other words like 引っ越し or 留学 could also fit the blank | teach only | yes |
| moat | 城の堀はとても広いです。 | The moat around the castle is very wide. | ほり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| moat | 休みの日に堀の周りを歩きましょう。 | Let's walk around the moat on a day off. | ほり | N5 L5 T5 C2 I3 — Blank could be filled by many nouns like park or lake, not uniquely moat. | teach only | yes |
| moat | 堀を渡って城に入りました。 | I crossed the moat and entered the castle. | ほり | N5 L5 T5 C5 I4 | cloze+teach | yes |
| ridge (of roof | 会議室はこの棟の二階にありました。 | The meeting room was on the second floor of this building. | とう | N4 L5 T4 C2 I2 — Target gloss given as 'ridge of roof' but sentence uses 棟 as building/wing counter; blank could equally be filled by ビル or 建物, reducing recoverability. | teach only | yes |
| ridge (of roof | 休みの日に、あの棟でパーティーがあります。 | There will be a party in that building on our day off. | とう | N4 L5 T4 C2 I2 — Same meaning mismatch with gloss; blank not uniquely forced to 棟, could be 家 or 会場. | teach only | yes |
| stone monument bearing an inscription | 公園にはとても古い碑があります。 | There is a very old stone monument in the park. | ひ | N4 L5 T5 C2 I2 — Blank could be filled by many nouns like 木・建物・池, not uniquely 碑. | teach only | yes |
| stone monument bearing an inscription | 休みの日に、有名な碑を見に行きたいです。 | I want to go see a famous monument on my day off. | ひ | N4 L5 T5 C2 I2 — Blank could be filled by many nouns like 場所・建物・絵, not uniquely 碑. | teach only | yes |
| empty | このびんはもう空です。 | This bottle is already empty. | から | N5 L5 T5 C3 I2 | teach only | yes |
| empty | その箱は空ですか。 | Is that box empty? | から | N5 L5 T5 C3 I2 | teach only | yes |
| empty | 財布が空だから、お金を貸してください。 | Because my wallet is empty, please lend me money. | から | N5 L5 T5 C5 I4 | cloze+teach | yes |
| perfection | この料理は完全に冷めてしまいました。 | This dish has completely gone cold. | かんぜん | N4 L4 T5 C3 I3 | teach only | yes |
| humor | 今日は父の機嫌がいいです。 | My father is in a good mood today. | きげん | N5 L5 T5 C3 I3 — Could also be 体調 or similar noun, slightly ambiguous. | teach only | yes |
| humor | 彼女は電話で機嫌が悪そうでしたか。 | Did she seem to be in a bad mood on the phone? | きげん | N5 L4 T5 C3 I4 — Blank could also fit 声 or 態度, not fully unique. | teach only | yes |
| humor | 弟の機嫌が悪いから、静かにしてください。 | My little brother is in a bad mood, so please be quiet. | きげん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| precious | この本は貴重ですから、大切に使ってください。 | This book is precious, so please use it carefully. | きちょう | N4 L5 T5 C3 I2 — Blank could also be filled by 大事/重要, slightly generic. | teach only | yes |
| precious | この指輪はあなたにとって貴重ですか。 | Is this ring precious to you? | きちょう | N4 L5 T5 C3 I3 — Blank could also fit 大切 or 大事. | teach only | yes |
| precious | おばあさんがくれた指輪はとても貴重です。 | The ring my grandmother gave me is very precious. | きちょう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| precisely | 宿題はきちんとしてください。 | Please do your homework properly. | きちんと | N5 L5 T5 C2 I2 — Synonyms like ちゃんと/しっかり also fit the blank. | teach only | yes |
| precisely | 部屋をきちんと片付けましょう。 | Let's tidy up the room properly. | きちんと | N5 L5 T5 C2 I3 — ちゃんと/しっかり could also fill the blank. | teach only | yes |
| precisely | きちんと説明しますから、聞いてください。 | I'll explain it precisely, so please listen. | きちんと | N5 L5 T5 C3 I3 — Slightly more constrained but still allows similar adverbs like しっかり. | teach only | yes |
| tight | このズボンは少しきついです。 | These pants are a little tight. | きつい | N5 L5 T5 C3 I3 — Other adjectives like 小さい/大きい could also fit the blank. | teach only | yes |
| tight | その靴はきついですか。 | Are those shoes tight? | きつい | N5 L5 T5 C3 I3 — Blank could also be filled by 大きい/小さい/汚い etc. | teach only | yes |
| tight | 仕事がきついから、休みたいです。 | The work is tough, so I want to rest. | きつい | N5 L4 T5 C2 I4 — 忙しい or つらい would also fit the blank, reducing recoverability. | teach only | yes |
| pitiful | 彼が病気だと聞いて、気の毒に思いました。 | Hearing that he was sick, I felt sorry for him. | きのどく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| pitiful | その話を聞いて、気の毒だと思いませんか。 | After hearing that story, don't you feel sorry for them? | きのどく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| -like | 最近、太り気味です。 | Recently, I've been gaining a bit of weight. | ぎみ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| -like | 少し風邪気味なので、早く帰ります。 | I feel a bit like I have a cold, so I'll go home early. | ぎみ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| -like | 疲れ気味ですか。 | Are you feeling a bit tired? | ぎみ | N4 L5 T5 C4 I2 — Very short/generic sentence with little context. | cloze+teach | yes |
| start | 会議の開始は九時からです。 | The meeting starts from nine o'clock. | かいし | N4 L5 T4 C4 I2 — Slightly stiff but acceptable; EN could be 'The meeting starts at nine.' | cloze+teach | yes |
| start | 遅れたので開始に間に合いませんでした。 | Since I was late, I didn't make it in time for the start. | かいし | N4 L4 T5 C4 I3 | cloze+teach | yes |
| term | 今学期はテストが多いです。 | This term there are many tests. | がっき | N5 L5 T5 C2 I3 — Blank could also be 週/月/年 etc., not uniquely 学期. | teach only | yes |
| term | 来学期は忙しくなるでしょう。 | Next term will probably get busy. | がっき | N5 L5 T5 C2 I3 — Blank could also be 週/月/年, ambiguous. | teach only | yes |
| term | 学期が終わったら旅行に行きたいです。 | When the term ends, I want to go on a trip. | がっき | N5 L5 T5 C2 I3 — Blank could be filled with 夏休み/仕事/授業 etc., not uniquely 学期. | teach only | yes |
| period | 休みの期間はどのくらいですか。 | How long is the vacation period? | きかん | N5 L5 T5 C3 I3 — 時間 could also fit the blank, slightly reducing recoverability | teach only | yes |
| period | この期間は忙しいですから、電話しないでください。 | During this period I'm busy, so please don't call. | きかん | N5 L5 T5 C3 I3 — 時期 or 時間 could also fit the blank | teach only | yes |
| deadline | 期限に間に合わなかったから、先生に謝りました。 | Because I didn't make the deadline, I apologized to the teacher. | きげん | N4 L5 T4 C3 I3 — Other words like 時間 or 締め切り could also fit the blank. | teach only | yes |
| deadline | 期限を忘れないでください。 | Please don't forget the deadline. | きげん | N4 L5 T5 C2 I2 — Too generic; many nouns (約束, 名前, 時間) could fill the blank. | teach only | yes |
| commemoration | 記念に写真を撮ってください。 | Please take a photo as a memento. | きねん | N5 L5 T5 C3 I3 — 思い出に could also fit the blank, slightly reducing uniqueness | teach only | yes |
| commemoration | これは旅行の記念に買った物です。 | This is something I bought as a souvenir of the trip. | きねん | N5 L5 T5 C3 I3 — 思い出に is also plausible in this slot | teach only | yes |
| vacation | 来週から休暇を取ります。 | I'll take vacation starting next week. | きゅうか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| modern times | この建物は近代的ではありません。 | This building is not modern. | きんだい | N4 L4 T5 C2 I3 — Many words could fill the blank before 的ではありません, e.g. 現代的、伝統的。 | teach only | yes |
| modern times | 近代について作文を書いてください。 | Please write an essay about modern times. | きんだい | N4 L4 T5 C2 I3 — Blank could be filled with many topic nouns like 歴史・環境・政治。 | teach only | yes |
| Christmas | クリスマスに家族で晩御飯を食べます。 | On Christmas we eat dinner with family. | くりすます | N5 L5 T5 C2 I3 — Many other occasions (お正月, 誕生日, etc.) could fit the blank equally well. | teach only | yes |
| Christmas | クリスマスまでに料理を準備してください。 | Please prepare the food by Christmas. | くりすます | N5 L5 T5 C2 I3 — Blank could be filled by any event/deadline word, not uniquely recoverable. | teach only | yes |
| emphasis | 電車の中で、運転手は安全を強調した。 | On the train, the driver emphasized safety. | きょうちょうした | N4 L5 T5 C3 I3 — Other verbs like 説明した or 確認した could also fit the blank. | teach only | yes |
| emphasis | 医者は運動が大切だと強調するから、毎朝走っています。 | Because the doctor emphasizes that exercise is important, I run every morning. | きょうちょうする | N4 L5 T5 C4 I4 | cloze+teach | yes |
| commonness | 私たちは毎朝早く起きるという共通の習慣がある。 | We have a common habit of getting up early every morning. | きょうつう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| cooperation | 病院は大学と共同で新しい薬を作った。 | The hospital made a new medicine in cooperation with the university. | きょうどう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| cooperation | 費用が高いから、隣の店と共同で広告を出した。 | Since the cost was high, we put out an advertisement jointly with the neighboring store. | きょうどう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| permission | 会社の駐車場を使う許可をもらいましたか。 | Did you get permission to use the company parking lot? | きょか | N5 L5 T5 C4 I4 | cloze+teach | yes |
| permission | 医者から旅行の許可をもらった。 | I got permission from the doctor to travel. | きょか | N5 L5 T5 C4 I4 | cloze+teach | yes |
| permission | 許可がないから、ここでは物を売ることができません。 | Since there is no permission, you cannot sell things here. | きょか | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to hate | 弟は毎朝早く起きることを嫌う。 | My younger brother hates getting up early every morning. | きらう | N4 L4 T5 C3 I3 — Other verbs like 避ける could also fit the blank grammatically. | teach only | yes |
| No Smoking | この電車の中は禁煙です。 | This train car is no-smoking. | きんえん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| No Smoking | 体に悪いから、去年禁煙しました。 | Since it's bad for the body, I quit smoking last year. | きんえんしました | N5 L4 T5 C4 I4 | cloze+teach | yes |
| No Smoking | このレストランは禁煙ですか。 | Is this restaurant non-smoking? | きんえん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| prohibition | この店で写真を撮ることは禁止ですか。 | Is taking photos in this store prohibited? | きんし | N5 L5 T5 C3 I3 | teach only | yes |
| prohibition | 危ないから、病院の中で走ることは禁止です。 | Since it's dangerous, running inside the hospital is prohibited. | きんし | N5 L5 T5 C4 I3 | cloze+teach | yes |
| finance | 兄は金融の会社で働いています。 | My older brother works at a finance company. | きんゆう | N5 L5 T5 C3 I3 | teach only | yes |
| finance | 金融のことを何か知っていますか。 | Do you know anything about finance? | きんゆう | N5 L5 T5 C2 I2 — Blank could be filled by almost any topic noun, reducing recoverability. | teach only | yes |
| acquaintance | 駅で知合いに会ったから、遅れてしまいました。 | I was late because I ran into an acquaintance at the station. | しりあい | N5 L5 T5 C3 I4 | teach only | yes |
| acquaintance | その人は私の知合いではありません。 | That person is not my acquaintance. | しりあい | N4 L5 T5 C2 I2 — Blank could be filled by many nouns like 友達, 家族, etc., reducing recoverability. | teach only | yes |
| acquaintance | 父の知合いが今晩家に来ます。 | My father's acquaintance is coming to our house tonight. | しりあい | N5 L5 T5 C3 I3 — Context somewhat generic; several nouns (友達, 同僚) could fit the blank. | teach only | yes |
| race | この町には色々な人種の人が住んでいます。 | People of various races live in this town. | じんしゅ | N5 L5 T5 C3 I3 — 国籍 or other words could also fit the blank, slightly lowering recoverability. | teach only | yes |
| race | 人種で人を判断してはいけません。 | You must not judge people by their race. | じんしゅ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| race | 彼はどんな人種ですか。 | What race is he? | じんしゅ | N4 L5 T5 C2 I2 — Blank could be filled by many words (国籍, 職業, 性格), reducing recoverability. | teach only | yes |
| relative | 今年の正月に親戚が大勢集まります。 | Many relatives gather this New Year's. | しんせき | N5 L5 T5 C3 I4 — Other nouns like 家族 or 友達 could also fit the blank. | teach only | yes |
| relative | 親戚から電話がかかってきたから、少し遅れます。 | I'll be a bit late because a relative called me. | しんせき | N5 L5 T5 C3 I4 — Blank could also be filled by 友達 or 会社 etc. | teach only | yes |
| relative | 今晩親戚が来るから、料理を手伝ってください。 | Relatives are coming tonight, so please help me cook. | しんせき | N5 L5 T5 C3 I4 — Context allows other visitor nouns like 友達 or お客さん. | teach only | yes |
| close friend | 親友に電話をかけて、明日の予定を話しました。 | I called my close friend and talked about tomorrow's plans. | しんゆう | N5 L5 T5 C2 I2 — Blank could be filled by many other nouns (友達, 母, 彼 etc.), context doesn't force 親友. | teach only | yes |
| close friend | 彼は親友ですが、家族には紹介していません。 | He's my close friend, but I haven't introduced him to my family. | しんゆう | N5 L5 T5 C3 I4 — Context of not introducing to family slightly favors a close relationship word, but 友達 or 彼女 could also fit. | teach only | yes |
| close friend | 親友を駅で待っていたから、会議に遅れました。 | I was late to the meeting because I was waiting for my close friend at the station. | しんゆう | N5 L5 T5 C2 I3 — Many nouns (友達, 彼, 母 etc.) could fill the blank equally well. | teach only | yes |
| mankind | 人類は昔から戦争をしています。 | Mankind has been at war since ancient times. | じんるい | N5 L5 T5 C3 I4 — 人間 could also fit the blank, reducing uniqueness. | teach only | yes |
| mankind | 人類はまだ月に住んでいません。 | Mankind does not yet live on the moon. | じんるい | N5 L5 T5 C3 I4 — 人間 could also fit the blank. | teach only | yes |
| mankind | 人類の未来はどうなりますか。 | What will happen to mankind's future? | じんるい | N5 L5 T5 C4 I4 — 人類の未来 is a fairly idiomatic collocation, making the blank fairly recoverable. | cloze+teach | yes |
| birth | 彼女の生まれはどこですか。 | Where was she born? | うまれ | N4 L3 T4 C3 I2 — Target word/reading (生まれ・うまれ) doesn't match the stated target 生（せい）, causing confusion. | teach only | yes |
| surname | 姓を漢字で書いてください。 | Please write your surname in kanji. | せい | N5 L5 T5 C2 I3 — Blank could also be 名前 or 名字, so not uniquely recoverable. | teach only | yes |
| surname | 電話で姓だけでは分かりません。 | On the phone, the surname alone isn't enough to identify you. | せい | N4 L5 T4 C3 I4 — Blank could also be 名前, slightly reducing uniqueness. | teach only | yes |
| a complaint | 朝、母は文句を言いました。 | In the morning, my mother complained. | もんく | N4 L5 T5 C3 I2 — Generic sentence; blank could arguably be filled by other nouns like 冗談 given weak context. | teach only | yes |
| a complaint | 日曜日の予定に文句がありません。 | I have no complaints about the Sunday plans. | もんく | N4 L5 T5 C3 I2 — Common phrase but blank could be filled by 問題 or similar in this context. | teach only | yes |
| a complaint | 遅刻しても文句を言わないでください。 | Please don't complain even if you're late. | もんく | N4 L5 T4 C4 I3 — Slight ambiguity in English about who is late, but overall accurate and natural. | cloze+teach | yes |
| to translate | 朝、英語の手紙を訳しました。 | I translated an English letter in the morning. | やくしました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to translate | 急いでいるので、早く訳してください。 | I'm in a hurry, so please translate it quickly. | やくして | N5 L5 T5 C3 I3 — blank could also be filled with other verbs like 読んで or やって given context | teach only | yes |
| to permit | 母は私が旅行に行くのを許しました。 | My mother allowed me to go on the trip. | ゆるしました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to permit | 遅刻したことを許してください。 | Please forgive me for being late. | ゆるして | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to permit | 日曜日に出かけることを許してもらいたいです。 | I want to be permitted to go out on Sunday. | ゆるして | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to argue | 朝から政治について論じています。 | We've been discussing politics since morning. | ろんじて | N4 L3 T5 C4 I3 — Politics is a fitting topic for 論じる, making the blank fairly recoverable. | cloze+teach | yes |
| abuse | 友達の悪口を言ってはいけません。 | You must not badmouth your friends. | わるくち | N5 L5 T5 C3 I3 — 陰口や文句など類義語も当てはまり得る | teach only | yes |
| abuse | 日曜日、彼は悪口ばかり言っていました。 | On Sunday, he kept badmouthing people. | わるくち | N5 L5 T5 C3 I3 — 文句ばかり言っていました等も自然で唯一性がやや弱い | teach only | yes |
| abuse | 遅刻した人の悪口を言うのはよくないです。 | It's not good to badmouth someone who was late. | わるくち | N5 L5 T5 C3 I4 — 文脈は具体的だが陰口などでも成立する | teach only | yes |
| to address | 朝、友達に宛てた手紙を書きました。 | I wrote a letter addressed to my friend in the morning. | あてた | N4 L4 T5 C4 I2 | cloze+teach | yes |
| to address | 旅行先から家族に宛てて手紙を送りたいです。 | I want to send a letter addressed to my family from my travel destination. | あてて | N4 L4 T5 C4 I3 | cloze+teach | yes |
| to address | 急いで先生に宛てた手紙を書きました。 | I hurriedly wrote a letter addressed to the teacher. | あてた | N4 L4 T5 C4 I2 | cloze+teach | yes |
| suicide | 彼は自殺しようとした。 | He tried to commit suicide. | じさつ | N4 L4 T5 C2 I3 — Blank could be filled with many verbs (逃げる, 帰国する, etc.), not uniquely 自殺. | teach only | yes |
| suicide | 自殺のニュースを聞いて悲しくなった。 | I heard news of a suicide and became sad. | じさつ | N4 L4 T5 C2 I3 — Many sad news topics could fit the blank (事故, 事件, 病気), not uniquely suicide. | teach only | yes |
| suicide | あの事件は自殺だったらしい。 | That incident was apparently a suicide. | じさつ | N4 L4 T5 C3 I3 — Somewhat constrained by 'incident' context but other causes (殺人, 事故) could also fit. | teach only | yes |
| tongue | レストランで熱いスープを飲んで舌が痛くなった。 | I drank hot soup at the restaurant and my tongue got sore. | した | N5 L5 T5 C3 I3 — 喉 could also fit the blank, reducing uniqueness. | teach only | yes |
| tongue | 犬が舌を出して走っている。 | The dog is running with its tongue out. | した | N5 L5 T5 C5 I4 | cloze+teach | yes |
| tongue | 辛い料理を食べて舌が痛い。 | I ate spicy food and my tongue hurts. | した | N5 L5 T5 C3 I3 — 喉 could also plausibly fill the blank. | teach only | yes |
| seriously ill | 事故で重体になった人がいる。 | There is a person who became critically injured in the accident. | じゅうたい | N5 L4 T4 C4 I3 | cloze+teach | yes |
| seriously ill | 彼は今も重体だそうだ。 | I heard he is still in critical condition. | じゅうたい | N5 L4 T5 C2 I3 — Lacks context, many state words (病気, 元気, 忙しい) could fill the blank. | teach only | yes |
| surgical operation | 明日、足の手術をします。 | Tomorrow I will have surgery on my leg. | しゅじゅつ | N5 L5 T5 C3 I3 — Blank could also be filled by other body-related nouns like 治療 or 検査, though 足の手術 is fairly natural. | teach only | yes |
| surgical operation | 手術は三時間かかったそうだ。 | I heard the surgery took three hours. | しゅじゅつ | N5 L4 T5 C2 I3 — Many nouns could fit the blank before 三時間かかったそうだ (e.g., 会議, 旅行). | teach only | yes |
| surgical operation | 手術を受けたいです。 | I want to have surgery. | しゅじゅつ | N5 L4 T5 C2 I2 — Blank could be many nouns compatible with 受けたい, e.g., 治療, 検査, 教育. | teach only | yes |
| symptoms | 風邪の症状が続いている。 | Cold symptoms continue. | しょうじょう | N5 L5 T5 C5 I3 | cloze+teach | yes |
| symptoms | どんな症状がありますか。 | What kind of symptoms do you have? | しょうじょう | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other words like 問題 without more context. | teach only | yes |
| symptoms | 症状が悪くなったら病院へ行ってください。 | If the symptoms get worse, please go to the hospital. | しょうじょう | N5 L5 T5 C5 I3 | cloze+teach | yes |
| appetite | 病気で食欲がない。 | I have no appetite because I'm sick. | しょくよく | N5 L5 T5 C5 I3 | cloze+teach | yes |
| appetite | 今日は食欲があまりありません。 | I don't have much appetite today. | しょくよく | N5 L5 T5 C5 I3 | cloze+teach | yes |
| buttocks | 椅子に座って尻が痛くなった。 | I sat on the chair and my bottom got sore. | しり | N5 L5 T5 C3 I3 — Blank could also be filled with 腰 or 足, reducing uniqueness. | teach only | yes |
| buttocks | 転んで尻を打った。 | I fell and hit my bottom. | しり | N5 L5 T5 C3 I3 — Could also be 頭 or 腰 in this context. | teach only | yes |
| buttocks | 犬が尻を掻いている。 | The dog is scratching its bottom. | しり | N5 L5 T5 C3 I4 — Could also be 体 or 耳, slightly reducing uniqueness. | teach only | yes |
| nerve | 手の神経が痛い。 | The nerve in my hand hurts. | しんけい | N4 L5 T5 C2 I2 — Blank could be filled by many body-part words (手/骨/筋肉), reducing recoverability. | teach only | yes |
| nerve | 試験の前はいつも神経を使う。 | Before an exam, I always get nervous. | しんけい | N5 L5 T4 C4 I3 — Idiom 神経を使う is well-known, English 'get nervous' is a loose but acceptable rendering. | cloze+teach | yes |
| nerve | 忙しくて神経が疲れた。 | I was so busy that my nerves got tired. | しんけい | N4 L5 T4 C3 I3 — Slightly less common phrasing but grammatically fine; a few other nouns could conceivably fit the blank. | teach only | yes |
| to be puzzled | どちらの道を行くか迷っています。 | I'm puzzled about which road to take. | まよって | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be puzzled | 晩御飯に何を作るか迷いました。 | I was puzzled about what to make for dinner. | まよいました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| circle | 正しい答えに丸をつけてください。 | Please put a circle on the correct answer. | まる | N5 L5 T5 C4 I3 | cloze+teach | yes |
| circle | 子供が紙に丸を描きました。 | The child drew a circle on the paper. | まる | N5 L5 T5 C4 I3 | cloze+teach | yes |
| circle | 地図に丸をつけておきました。 | I marked a circle on the map beforehand. | まる | N4 L5 T4 C3 I3 — つけておきました implies preparation which slightly mismatches natural usage, and 丸 could be swapped with 印 or チェック. | teach only | yes |
| by some chance | 万一遅れたら、電話をください。 | If by some chance I'm late, please call me. | まんいち | N4 L4 T5 C4 I3 | cloze+teach | yes |
| miss | 料理でミスをしてしまいました。 | I made a mistake while cooking. | みす | N4 L5 T5 C3 I3 — Other words like 怪我 or 失敗 could also fit the blank. | teach only | yes |
| to recognize | 父は私の考えを認めません。 | My father doesn't recognize my thinking. | みとめません | N4 L5 T4 C3 I3 — Blank could also fit words like 信じません or 分かりません, slightly reducing recoverability. | teach only | yes |
| to recognize | 彼は自分の失敗を認めました。 | He admitted his own mistake. | みとめました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| facing | 駅の向かいにホテルがあります。 | There is a hotel facing the station. | むかい | N5 L5 T4 C3 I2 — Could also be 隣 or 前 in the blank, so not fully unique. | teach only | yes |
| facing | 向かいの家の人が急いでいました。 | The person from the house across the way was hurrying. | むかい | N5 L5 T5 C3 I4 — Slightly generic but plausible alternatives like 隣 or 近所 could also fit the blank. | teach only | yes |
| disregard | 彼は私の電話を無視しました。 | He ignored my phone call. | むししました | N5 L5 T5 C3 I3 — Blank could be filled by other verbs like 切りました or 取りました, reducing uniqueness. | teach only | yes |
| disregard | 信号を無視しないでください。 | Please don't ignore the traffic signal. | むししない | N5 L5 T5 C5 I3 | cloze+teach | yes |
| disregard | 息子は私の注意を無視してしまいました。 | My son ended up ignoring my warning. | むしして | N5 L5 T5 C5 I3 | cloze+teach | yes |
| rather | バスより寧ろ電車の方が速いです。 | Rather than the bus, the train is faster. | むしろ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| rather | 肉より寧ろ野菜の方が好きです。 | Rather than meat, I prefer vegetables. | むしろ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| rather | 忙しいより寧ろ暇な方がいいです。 | Rather than being busy, it's better to be free. | むしろ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| migration | バスで移動しませんか。 | Shall we move by bus? | いどう | N4 L5 T4 C3 I3 — target word means 'move/transfer', not 'migration'; translation gloss mismatched but sentence itself fine. | teach only | yes |
| migration | 電車が遅れたから、歩いて移動しました。 | Since the train was late, we moved on foot. | いどう | N4 L5 T4 C3 I3 — same gloss mismatch; blank could be filled with several verbs like 帰りました. | teach only | yes |
| to attack | 彼は敵を討ちました。 | He struck down the enemy. | うち | N4 L5 T4 C2 I2 — Many verbs (倒す, 殺す, 攻撃する) could fill the blank in this generic context. | teach only | yes |
| to attack | 敵を討ったから、国が助かりました。 | Because he struck the enemy, the country was saved. | うった | N4 L4 T4 C3 I3 — Slightly more context but still several verbs of defeating could fit. | teach only | yes |
| to attack | 彼は敵を討ちませんでした。 | He did not strike the enemy. | うち | N4 L5 T4 C2 I2 — Same generic sentence pattern as #0, low uniqueness for cloze. | teach only | yes |
| to overtake | 走って彼に追い付きましょう。 | Let's run and catch up to him. | おいつき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to overtake | 遅れたから、急いで追い付きました。 | Since I was late, I hurried and caught up. | おいつき | N4 L5 T5 C3 I3 — Other verbs like 急いで走りました could also fit the blank. | teach only | yes |
| to chase | 警官は泥棒を追いました。 | The police officer chased the thief. | おい | N4 L5 T5 C2 I2 — Blank could be filled by many verbs (捕まえた, 見た, etc.), not uniquely 'chase'. | teach only | yes |
| to chase | 猫がねずみを追ったから、ねずみは逃げました。 | Because the cat chased the mouse, the mouse ran away. | おった | N4 L4 T5 C4 I3 — Cause-effect context strongly suggests chasing, good recoverability. | cloze+teach | yes |
| to chase | 犬は猫を追いませんでした。 | The dog did not chase the cat. | おい | N4 L5 T5 C2 I2 — Blank is too open-ended; many verbs could fit besides 'chase'. | teach only | yes |
| crossing | 友達の家に行くために、道を横断しました。 | To go to my friend's house, I crossed the street. | おうだん | N4 L5 T5 C3 I3 — 渡る could also fit the blank, reducing uniqueness. | teach only | yes |
| crossing | 一緒に道を横断しませんか。 | Shall we cross the street together? | おうだん | N4 L5 T5 C3 I3 — 渡る is an equally plausible alternative here. | teach only | yes |
| to take down | 母は棚からお皿を降ろしました。 | Mother took the plates down from the shelf. | おろし | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to take down | 荷物が重いから、車から降ろしました。 | Since the luggage was heavy, I unloaded it from the car. | おろし | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to take down | まだ荷物を降ろしていません。 | I haven't unloaded the luggage yet. | おろし | N5 L5 T5 C3 I3 — could also fit 出す/片付ける, slightly less unique | teach only | yes |
| outing | 母は今、外出しています。 | Mother is out right now. | がいしゅつ | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other activity verbs without more context. | teach only | yes |
| outing | 一緒に外出しませんか。 | Shall we go out together? | がいしゅつ | N5 L5 T5 C2 I3 — Many verbs fit '一緒に＿しませんか', not uniquely 外出. | teach only | yes |
| outing | 雨だから、外出しません。 | Because it's raining, I won't go out. | がいしゅつ | N5 L5 T5 C3 I3 — Rain context hints at not going out but other activities could fit too. | teach only | yes |
| to freeze | 池の水が凍りました。 | The pond water froze. | こおりました | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to freeze | 今朝はとても寒かったですが、道は凍りましたか。 | It was very cold this morning, but did the road freeze? | こおりました | N4 L5 T5 C5 I3 — Slightly awkward combination of clauses but understandable. | cloze+teach | yes |
| to freeze | 湖が凍ったら、歩いて渡りたいです。 | If the lake freezes, I want to walk across it. | こおったら | N5 L5 T5 C5 I4 | cloze+teach | yes |
| cherry blossom | 去年の春、桜がとても綺麗でした。 | Last spring, the cherry blossoms were very beautiful. | さくら | N5 L5 T5 C2 I3 — Many nouns (景色、花、紅葉) could fit '綺麗でした', so blank isn't uniquely recoverable. | teach only | yes |
| cherry blossom | この公園の桜はいつ咲きますか。 | When do the cherry blossoms in this park bloom? | さくら | N5 L5 T5 C3 I4 — Blooming context narrows to flowers but not uniquely to cherry blossoms without more context. | teach only | yes |
| desert | 旅行でアフリカの砂漠を見たいです。 | I want to see the African desert on my trip. | さばく | N5 L5 T5 C3 I3 — Blank could be filled with many nouns (mountain, animals, etc.), reducing recoverability. | teach only | yes |
| desert | 去年、家族と砂漠へ行きました。 | Last year, I went to the desert with my family. | さばく | N5 L5 T5 C2 I2 — Very generic sentence; blank could be any destination. | teach only | yes |
| desert | あの国には大きい砂漠がありますか。 | Does that country have a large desert? | さばく | N5 L5 T5 C2 I2 — Blank could be replaced by many geographic nouns like river or mountain. | teach only | yes |
| humid | 蒸し暑い日は体が疲れやすいです。 | On humid days, the body gets tired easily. | むしあつい | N5 L5 T5 C2 I3 — Many adjectives (暑い, 寒い, 忙しい) could fit the blank, reducing recoverability. | teach only | yes |
| humid | 今朝は蒸し暑くて、シャワーを浴びました。 | This morning was humid, so I took a shower. | むしあつくて | N5 L5 T5 C2 I3 — Blank could be filled by 暑くて or other weather adjectives, not uniquely 蒸し暑くて. | teach only | yes |
| humid | 昨日はとても蒸し暑かったです。 | Yesterday was very humid. | むしあつかった | N4 L5 T5 C1 I2 — Very generic template sentence; almost any adjective could fill the blank. | teach only | yes |
| sprout | 今朝、庭の木に小さい芽が出ました。 | This morning, a small sprout appeared on the tree in the garden. | め | N5 L5 T5 C4 I3 | cloze+teach | yes |
| sprout | 早く芽が伸びるのを見たいです。 | I want to see the sprout grow quickly. | め | N4 L5 T5 C3 I3 — 伸びる could also pair with 髪 or 木, reducing uniqueness | teach only | yes |
| sprout | この植物の芽はいつ出ますか。 | When does this plant's sprout appear? | め | N5 L5 T5 C4 I3 | cloze+teach | yes |
| land | 船が着いて、やっと陸に上がりました。 | The ship arrived, and we finally got onto land. | りく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| land | あの島から陸まではどのくらいですか。 | How far is it from that island to the mainland? | りく | N5 L5 T4 C4 I4 — 陸 here means mainland rather than literal land, translation slightly loose but acceptable. | cloze+teach | yes |
| land | 泳いでいた犬が陸に戻りました。 | The dog that was swimming returned to land. | りく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| bay | 私たちは湾の近くのホテルに泊まりました。 | We stayed at a hotel near the bay. | わん | N5 L5 T5 C2 I3 — Blank could be filled by many nouns like 駅, 公園, etc. | teach only | yes |
| bay | この湾で泳ぐことができますか。 | Can you swim in this bay? | わん | N5 L5 T5 C2 I3 — Could be pool, lake, river, sea, etc. | teach only | yes |
| bay | 湾の景色を写真に撮りたいです。 | I want to take photos of the bay's scenery. | わん | N5 L5 T5 C2 I3 — Many location nouns fit the blank equally well. | teach only | yes |
| swirl | 川の水が速くて、大きい渦ができました。 | The river's water was fast, and a big swirl formed. | うず | N5 L5 T5 C4 I4 | cloze+teach | yes |
| swirl | 海で渦を見て、少し怖かったです。 | I saw a swirl in the sea and it was a bit scary. | うず | N5 L5 T5 C2 I3 — blank could be filled by many scary sea things, not uniquely 渦 | teach only | yes |
| swirl | あの川にはいつも渦がありますか。 | Does that river always have swirls? | うず | N5 L5 T5 C2 I3 — blank could be filled by many nouns (bridge, fish, etc.), not uniquely 渦 | teach only | yes |
| gold | この指輪は金でできています。 | This ring is made of gold. | きん | N5 L5 T5 C2 I2 — Blank could be filled with any metal (silver, platinum, etc.), not uniquely 'gold'. | teach only | yes |
| gold | 金の指輪が欲しいです。 | I want a gold ring. | きん | N5 L5 T5 C2 I2 — Blank could be filled with any metal, so 'gold' isn't uniquely recoverable. | teach only | yes |
| pattern | このシャツの柄が好きです。 | I like the pattern of this shirt. | がら | N5 L5 T5 C2 I2 — Blank could also be color, size, etc., not uniquely 'pattern'. | teach only | yes |
| pattern | そのカーテンの柄は何ですか。 | What is the pattern of that curtain? | がら | N5 L5 T5 C2 I2 — Blank is too open-ended; could be color, size, or other attributes. | teach only | yes |
| pattern | 花の柄のスカートが欲しいです。 | I want a skirt with a flower pattern. | がら | N5 L5 T5 C3 I3 — Slightly more constrained by '花の' but still could be 'color' in some contexts. | teach only | yes |
| leather | この靴は革でできています。 | These shoes are made of leather. | かわ | N5 L5 T5 C2 I3 — Blank could be filled by many materials (rubber, cloth, plastic), not uniquely 'leather'. | teach only | yes |
| leather | 革の鞄が欲しいです。 | I want a leather bag. | かわ | N5 L5 T5 C2 I3 — Any material word (cloth, canvas, etc.) fits the blank equally well. | teach only | yes |
| leather | そのベルトは革ですか。 | Is that belt made of leather? | かわ | N5 L5 T5 C2 I3 — No contextual cue forces 'leather' specifically; other materials could fit. | teach only | yes |
| can | 缶のジュースを買いました。 | I bought canned juice. | かん | N4 L5 T5 C4 I3 | cloze+teach | yes |
| machine | この機械は洗濯に使います。 | This machine is used for laundry. | きかい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| machine | あの機械は何をするものですか。 | What does that machine do? | きかい | N5 L5 T5 C3 I3 — could fit other nouns like device/tool | teach only | yes |
| machine | 新しい機械が欲しいです。 | I want a new machine. | きかい | N4 L5 T5 C1 I1 — generic template, many nouns fit the blank | teach only | yes |
| instrument | 医者は器械で体を調べました。 | The doctor examined my body with an instrument. | きかい | N4 L5 T4 C3 I3 — 器械 and 機械 are homophones (きかい), so context alone doesn't disambiguate the kanji, though the sound is recoverable. | teach only | yes |
| instrument | この器械は授業で使いますか。 | Is this instrument used in class? | きかい | N4 L5 T4 C3 I3 — Same homophone issue with 器械/機械 limits exact word recoverability from context. | teach only | yes |
| engine | 船の機関を修理しています。 | I am repairing the ship's engine. | きかん | N4 L5 T5 C4 I3 — 船の機関 is a standard nautical term, making the blank fairly recoverable. | cloze+teach | yes |
| fabric | この生地は柔らかいです。 | This fabric is soft. | きじ | N5 L5 T5 C2 I2 — Blank could be filled by many nouns like 肌 or 布, not uniquely 生地 | teach only | yes |
| fabric | 綺麗な生地が欲しいです。 | I want a beautiful fabric. | きじ | N5 L5 T5 C2 I2 — Generic sentence; blank could be many desirable nouns, not uniquely fabric | teach only | yes |
| fabric | その服の生地は何ですか。 | What is the fabric of that clothing? | きじ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| in a word | 要するに、この文章の意味は簡単です。 | In short, the meaning of this passage is simple. | ようするに | N4 L4 T5 C3 I3 — Similar transition words like つまり could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| element | 成功には色々な要素が必要です。 | Success requires various elements. | ようそ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| element | この計画には大切な要素が三つあります。 | This plan has three important elements. | ようそ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| gist | 授業の要点をノートに書きましょう。 | Let's write down the main points of the class in our notebooks. | ようてん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| gist | 電話で話の要点だけ教えてくれますか。 | Can you tell me just the gist of the story over the phone? | ようてん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| gist | 友達が来る前に要点を紙に書いておきました。 | I wrote down the key points on paper before my friend came. | ようてん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| expectation | 試合は予期していた通りに終わりました。 | The match ended just as expected. | よきしていた | N4 L4 T5 C2 I3 — Synonyms like 予想・予測 could also fit the blank. | teach only | yes |
| expectation | 彼からの電話は予期していませんでした。 | I didn't expect a call from him. | よきしていませんでした | N4 L4 T5 C2 I3 — 予想・期待 could also complete the sentence naturally. | teach only | yes |
| expectation | テストの問題は予期しないものでした。 | The test questions were unexpected. | よきしない | N4 L4 T5 C2 I3 — 予想外・意外 are equally plausible fits for the blank. | teach only | yes |
| estimate | 旅行の予算を立てたいです。 | I want to set a budget for the trip. | よさん | N5 L5 T5 C3 I3 — 計画などでも文が成立するため、予算に限定されにくい | teach only | yes |
| estimate | 今月の予算はいくらですか。 | How much is this month's budget? | よさん | N5 L5 T5 C3 I3 — 家賃や収入など他の語も当てはまる | teach only | yes |
| estimate | 学校の予算が少なくなりました。 | The school's budget has become smaller. | よさん | N5 L5 T5 C3 I3 — 生徒数など他の語も文脈に合う | teach only | yes |
| prediction | 明日の試合の結果を予測できますか。 | Can you predict the result of tomorrow's match? | よそく | N5 L5 T5 C3 I3 — 予想 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| prediction | みんなで来年の人口を予測しましょう。 | Let's all predict next year's population. | よそく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| forecast | 友達に雪の予報を伝えました。 | I told my friend about the snow forecast. | よほう | N4 L5 T5 C4 I3 | cloze+teach | yes |
| forecast | 今日の予報では雨が降るそうです。 | According to today's forecast, it seems it will rain. | よほう | N5 L4 T5 C5 I4 | cloze+teach | yes |
| forecast | 今週の予報を調べましたか。 | Did you check this week's forecast? | よほう | N4 L5 T5 C3 I3 — blank could be filled by other nouns like schedule or news, slightly less constrained | teach only | yes |
| excess | 今週は宿題が多くて余裕がありません。 | I have so much homework this week that I have no time to spare. | よゆう | N5 L5 T5 C3 I3 — 時間 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| excess | 旅行に行く余裕がありますか。 | Do you have the means to go on a trip? | よゆう | N5 L5 T4 C3 I3 — Could also be お金 or 時間, so blank isn't uniquely 余裕; translation reads slightly formal. | teach only | yes |
| excess | 彼はお金の余裕があるので、よく旅行します。 | He has extra money, so he travels often. | よゆう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to increase (transitive) | 料理の量を増やしてください。 | Please increase the amount of food. | ふやして | N5 L5 T5 C3 I3 — Blank could also be filled with 減らして/変えて etc., context less constraining. | teach only | yes |
| to increase (transitive) | 旅行の予算を増やしました。 | I increased the travel budget. | ふやしました | N5 L5 T5 C3 I3 — Blank could plausibly be 減らしました or 決めました, not fully forced. | teach only | yes |
| to decrease | 塩の量を減らしてください。 | Please reduce the amount of salt. | へらして | N5 L5 T5 C3 I3 — Blank could also be filled by 増やして or 変えて without more context. | teach only | yes |
| to decrease | 仕事を減らして早く帰ります。 | I'll reduce my work and go home early. | へらして | N5 L5 T5 C3 I3 — Other verbs like 終わらせて or 休んで could also fit the blank. | teach only | yes |
| to decrease | 体重を減らすために毎日歩きました。 | I walked every day to reduce my weight. | へらす | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to decrease (in size or number) | お金がだんだん減ります。 | My money is gradually decreasing. | へります | N4 L5 T5 C3 I2 — Could also fit 増えます (money increasing), so blank isn't fully forced. | teach only | yes |
| to bark | 旅行中に大きい犬が吠えました。 | A big dog barked during the trip. | ほえました | N5 L5 T5 C3 I3 — Could also fit 噛みました or other verbs, less strongly cued. | teach only | yes |
| to bark | 隣の犬が夜中に吠えました。 | The neighbor's dog barked in the middle of the night. | ほえました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to bark | あの犬は誰にでも吠えます。 | That dog barks at everyone. | ほえます | N5 L5 T5 C3 I3 — Could also fit 噛みます or 懐きます, ambiguous without more context. | teach only | yes |
| to smile | 彼女は写真を撮るときに微笑みました。 | She smiled when the photo was taken. | ほほえみました | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other verbs like 笑う or ポーズをとる, slightly reducing uniqueness. | teach only | yes |
| to smile | 先生はいつも優しく微笑みます。 | The teacher always smiles gently. | ほほえみます | N5 L5 T5 C3 I3 — 優しく could pair with several verbs (話す, 教える), so the blank isn't fully forced to 微笑む. | teach only | yes |
| to entrust to another | この仕事を任せてください。 | Please entrust this work to me. | まかせて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to entrust to another | 晩御飯の準備は母に任せました。 | I left the dinner preparations to my mother. | まかせました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to entrust to another | 運転は友達に任せます。 | I'll leave the driving to my friend. | まかせます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to sow | 昨日、畑に野菜の種を蒔きました。 | Yesterday, I sowed vegetable seeds in the field. | まきました | N5 L5 T5 C4 I4 — 種を植えました could also fit, slightly reducing uniqueness. | cloze+teach | yes |
| to sow | 春になったら種を蒔いてください。 | Please sow the seeds once spring comes. | まいて | N5 L5 T5 C4 I4 — 種を植えてください is also plausible, slightly reducing uniqueness. | cloze+teach | yes |
| significant | 今週は大した予定がありません。 | I don't have any significant plans this week. | たいした | N4 L4 T5 C3 I3 — Other words like ろくな could also fit the blank grammatically. | teach only | yes |
| significant | あの旅行では大した問題は起きなかった。 | Nothing significant happened on that trip. | たいした | N4 L4 T5 C3 I3 — Similar adjectives like 大きな could also fit the blank. | teach only | yes |
| significant | 少し遅れましたが、大したことじゃありません。 | I was a little late, but it's not a big deal. | たいした | N5 L4 T5 C5 I4 — Idiomatic set phrase makes the target word highly recoverable. | cloze+teach | yes |
| attitude | 遅れて来た彼は失礼な態度でした。 | He who came late had a rude attitude. | たいど | N5 L5 T5 C4 I3 | cloze+teach | yes |
| attitude | もっと丁寧な態度で運転手に話してください。 | Please speak to the driver with a more polite attitude. | たいど | N5 L5 T5 C4 I3 | cloze+teach | yes |
| flatness | 生地を平らにしてください。 | Please make the dough flat. | たいら | N5 L5 T5 C4 I3 | cloze+teach | yes |
| flatness | その道はずっと平らだった。 | That road was flat the whole way. | たいら | N5 L5 T5 C3 I3 — Other adjectives like straight or wide could also fit the blank. | teach only | yes |
| flatness | 公園の道はとても平らです。 | The path in the park is very flat. | たいら | N5 L5 T5 C3 I2 — Fairly generic sentence; several adjectives could fit the blank. | teach only | yes |
| certain | たしか、電車は九時に出るはずです。 | I believe the train is supposed to leave at nine. | たしか | N5 L5 T5 C3 I3 — Other adverbs like きっと/たぶん could also fit grammatically, slightly lowering recoverability. | teach only | yes |
| certain | たしか、あの店はこの近くにあったと思います。 | I'm fairly sure that shop was near here. | たしか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| certain | たしか、彼女は今週の土曜日は暇だと言っていました。 | I believe she said she was free this Saturday. | たしか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| full | 野菜をたっぷり入れてください。 | Please put in plenty of vegetables. | たっぷり | N5 L5 T5 C3 I3 — たくさん could also fit the blank, slightly reducing recoverability. | teach only | yes |
| full | 旅行では時間がたっぷりあった。 | During the trip, there was plenty of time. | たっぷり | N5 L5 T5 C3 I3 — たくさん or ゆっくり could also fit context, reducing uniqueness. | teach only | yes |
| full | 休みの日はたっぷり寝るつもりです。 | On my day off, I plan to sleep plenty. | たっぷり | N5 L5 T5 C3 I3 — たくさん could substitute, slightly weakening cloze uniqueness. | teach only | yes |
| intolerable | 電車が遅れそうで、心配でたまらない。 | I'm so worried the train might be late, I can't stand it. | たまらない | N5 L4 T5 C3 I3 — しかたがない could also fit the blank, reducing uniqueness. | teach only | yes |
| intolerable | 母の料理が美味しくてたまらない。 | My mother's cooking is so delicious I can't get enough. | たまらない | N5 L4 T5 C3 I3 — しょうがない/しかたがない are plausible alternatives. | teach only | yes |
| intolerable | 旅行が楽しみでたまらない。 | I'm so excited for the trip I can't stand it. | たまらない | N5 L4 T5 C3 I3 — Similar set-phrase alternatives exist for the blank. | teach only | yes |
| simplicity | 地図はとても単純だった。 | The map was very simple. | たんじゅん | N4 L5 T5 C2 I3 — 複雑や正確など多くの語が入り得るため空欄推測が難しい | teach only | yes |
| simplicity | 単純な計画にしてください。 | Please make it a simple plan. | たんじゅん | N4 L5 T5 C2 I3 — 他の形容詞（詳細、良い等）でも文が成立するため特定しにくい | teach only | yes |
| mere | 遅れたのは単なる事故です。 | Being late was just an accident. | たんなる | N4 L5 T5 C4 I3 | cloze+teach | yes |
| mere | それは単なる噂だった。 | That was just a rumor. | たんなる | N4 L5 T5 C3 I2 — generic それは…だった template; ただの could also fit blank | teach only | yes |
| mere | これは単なる冗談です。 | This is just a joke. | たんなる | N4 L5 T5 C3 I2 — generic これは…です template; ただの could also fit blank | teach only | yes |
| quantity | 家族の食事の量はいつも多いです。 | My family's meal portions are always large. | りょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| quantity | 宿題の量が多いから、今日は忙しいです。 | Because the amount of homework is a lot, I'm busy today. | りょう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| quantity | 友達が来る前に、料理の量を増やしましょう。 | Let's increase the amount of food before our friend comes. | りょう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| level | 学校の授業のレベルは高いですか。 | Is the level of the school classes high? | れべる | N5 L5 T5 C3 I3 — Blank could also be filled by words like 質 or 難易度. | teach only | yes |
| level | 家族はみんな料理のレベルが違います。 | Everyone in my family has a different cooking level. | れべる | N5 L5 T5 C3 I3 — Blank could also be filled by words like 好み or 味付け. | teach only | yes |
| angle | 学校で、この形の角はいくつですか。 | At school, how many angles does this shape have? | かく | N4 L5 T5 C4 I3 | cloze+teach | yes |
| each | 家族はそれぞれ何時に起きますか。 | What time does each family member wake up? | それぞれ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| most of | 仕事の大半が終わったから、休みましょう。 | Since most of the work is finished, let's take a break. | たいはん | N4 L5 T5 C3 I3 — Other words like 半分/一部/ほとんど could also fit the blank. | teach only | yes |
| most part | この本の大部分はもう読みましたか。 | Have you already read most of this book? | だいぶぶん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| most part | 友達が来る前に、部屋の大部分を片付けましょう。 | Let's tidy up most of the room before our friend comes. | だいぶぶん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| satisfaction | 旅行はとても楽しくて、私は満足しました。 | The trip was so fun that I was satisfied. | まんぞく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| satisfaction | 晩御飯の味に満足しませんでした。 | I wasn't satisfied with the taste of dinner. | まんぞく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| satisfaction | お母さんはプレゼントに満足しましたか。 | Was your mother satisfied with the present? | まんぞく | N5 L5 T5 C3 I3 — other emotion verbs like 喜ぶ could also fit the blank | teach only | yes |
| thick | 今日の旅行の予定はとても密です。 | Today's travel schedule is very packed. | みつ | N4 L5 T5 C3 I3 — Natural usage of 密 for a packed schedule, though words like いっぱい or びっしり could also fit the blank. | teach only | yes |
| thick | 明日の予定はそんなに密ではありません。 | Tomorrow's schedule isn't that packed. | みつ | N4 L5 T5 C3 I3 — Natural negative form, but similar synonyms could also fit the blank. | teach only | yes |
| charm | この町には魅力がたくさんあります。 | This town has a lot of charm. | みりょく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| charm | お父さんの魅力は何ですか。 | What is your father's charm? | みりょく | N4 L5 T4 C3 I3 — Could also be filled with 良いところ or 特徴, slightly ambiguous. | teach only | yes |
| charm | この料理には魅力がありませんでした。 | This dish had no appeal. | みりょく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| futility | 電車を待つ時間は無駄でした。 | The time waiting for the train was wasted. | むだ | N4 L5 T5 C4 I3 | cloze+teach | yes |
| futility | 食べ物を無駄にしないでください。 | Please don't waste food. | むだ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| futility | 彼の努力は無駄ではありませんでした。 | His effort wasn't wasted. | むだ | N5 L5 T5 C3 I4 — other adjectives like 十分 could also fit the blank | teach only | yes |
| free | 空港までのバスは無料です。 | The bus to the airport is free. | むりょう | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other adjectives like 高い/安い/便利, reducing uniqueness. | teach only | yes |
| free | 子供の切符は無料ですか。 | Is the ticket free for children? | むりょう | N5 L5 T5 C3 I3 — Other adjectives like 高い/安い could also fit the blank. | teach only | yes |
| clear | 地図の説明が明確でした。 | The map's explanation was clear. | めいかく | N4 L5 T5 C3 I3 — Other adjectives like 詳しい or 簡単 could also fit the blank. | teach only | yes |
| clear | 彼の返事は明確ではありませんでした。 | His reply wasn't clear. | めいかく | N5 L5 T5 C3 I3 — はっきり or 明白 could also fit the blank. | teach only | yes |
| wasteful | 残った料理を捨てるのはもったいないです。 | It's a waste to throw away leftover food. | もったいない | N5 L5 T5 C4 I3 | cloze+teach | yes |
| wasteful | 使わない部屋があるのはもったいないです。 | It's wasteful to have a room that's not used. | もったいない | N5 L5 T5 C4 I3 | cloze+teach | yes |
| wasteful | きれいな景色を見ないのはもったいないと思いませんか。 | Don't you think it's a waste not to see the beautiful scenery? | もったいない | N5 L5 T5 C4 I4 | cloze+teach | yes |
| quite right | 彼の意見はもっともです。 | His opinion is quite reasonable. | もっとも | N5 L5 T5 C3 I2 — Other adjectives like 正しい/適切 could also fit the blank. | teach only | yes |
| quite right | 遅刻の説明はもっともでした。 | The explanation for being late was quite reasonable. | もっとも | N5 L5 T5 C3 I3 — Context helps a bit more, but synonyms could still fit. | teach only | yes |
| quite right | 彼の説明はもっともではありませんでした。 | His explanation wasn't reasonable. | もっとも | N5 L5 T5 C3 I3 — Negative form adds slight specificity but other adjectives could fit. | teach only | yes |
| organization | この会社の組織は大きいです。 | This company's organization is big. | そしき | N4 L5 T5 C2 I1 — Generic template sentence; blank could be filled by many nouns (規模, 会社, 建物 etc.). | teach only | yes |
| organization | 新しい組織を作ることにしました。 | I decided to create a new organization. | そしき | N4 L4 T5 C3 I3 — Reasonable sentence but blank could also be filled by 会社/団体/チーム. | teach only | yes |
| physical education | 体育の授業は火曜日にあります。 | PE class is on Tuesday. | たいいく | N5 L5 T5 C3 I3 | teach only | yes |
| physical education | 雨だから、今日は体育をしません。 | Because it's raining, we won't have PE today. | たいいく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| physical education | 体育は何時に始まりますか。 | What time does PE start? | たいいく | N5 L5 T5 C2 I3 — could be many subjects/events, low cloze uniqueness | teach only | yes |
| convention | 大会で負けたから、悲しいです。 | I lost at the tournament, so I'm sad. | たいかい | N5 L5 T4 C3 I3 — Word 'convention' translated as 'tournament'; blank could also be filled by 試合 or ゲーム, reducing recoverability. | teach only | yes |
| convention | その大会に出ませんか。 | Won't you enter that tournament? | たいかい | N5 L5 T4 C4 I3 — Word 'convention' translated as 'tournament', but 大会に出る is a strong collocation making the blank fairly recoverable. | cloze+teach | yes |
| credit | 単位はいくつ要りますか。 | How many credits are needed? | たんい | N5 L5 T5 C3 I4 — Blank could be filled by many nouns (お金, 時間, 人数, etc.), so context alone doesn't force 単位. | teach only | yes |
| charge | 私はこの仕事の担当です。 | I am in charge of this job. | たんとう | N5 L5 T5 C3 I2 — generic template, other words like 責任者 could fit blank | teach only | yes |
| charge | 誰が担当ですか。 | Who is in charge? | たんとう | N5 L5 T5 C3 I2 — short generic question, other words could fit blank | teach only | yes |
| position | 彼は会社で高い地位にいます。 | He holds a high position at the company. | ちい | N4 L5 T5 C3 I3 — 生きている動詞にいますより地位に就いている等の方が自然だが許容範囲 | teach only | yes |
| position | 地位が高いから、忙しいです。 | Because his position is high, he is busy. | ちい | N4 L5 T4 C3 I3 — 地位と忙しさの因果関係がやや弱いが文法的には自然 | teach only | yes |
| team | 私たちのチームは強いです。 | Our team is strong. | ちいむ | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (会社, 国, 選手 etc.), not uniquely 'team'. | teach only | yes |
| team | チームのために、頑張ります。 | I'll do my best for the team. | ちいむ | N5 L5 T5 C2 I2 — Many nouns fit 'のために頑張ります', not uniquely team. | teach only | yes |
| team | どのチームが勝ちましたか。 | Which team won? | ちいむ | N5 L5 T5 C3 I3 — Slightly more constrained by '勝ちましたか' but still could be 選手, 学校 etc. | teach only | yes |
| middle school | 息子は中学に通っています。 | My son attends middle school. | ちゅうがく | N5 L5 T5 C2 I3 — Blank could also be 学校, 大学, 塾, etc., so it's not uniquely recoverable. | teach only | yes |
| middle school | 中学のとき、テニスをしていました。 | When I was in middle school, I used to play tennis. | ちゅうがく | N5 L5 T5 C2 I3 — 高校, 小学校, 大学 would also fit the blank equally well. | teach only | yes |
| middle school | 中学はどこにありますか。 | Where is the middle school? | ちゅうがく | N5 L5 T5 C1 I2 — Very generic; almost any place noun (学校, 病院, 駅) fits the blank. | teach only | yes |
| to lack | この作文は説明を欠いている。 | This essay lacks explanation. | かいている | N4 L4 T5 C4 I3 | cloze+teach | yes |
| to lack | 彼の行動は常識を欠いていますか。 | Does his behavior lack common sense? | かいていますか | N4 L4 T5 C4 I3 | cloze+teach | yes |
| to lack | 今日の会議は準備を欠いたまま始まった。 | Today's meeting started without proper preparation. | かいた | N4 L4 T4 C4 I3 — Translation slightly loose but conveys meaning. | cloze+teach | yes |
| to bet | 私は友達と試合の勝ちに賭けた。 | I bet with my friend on who would win the match. | かけた | N4 L5 T5 C4 I3 — 勝ちに賭ける is slightly unusual phrasing; more common would be 勝敗に賭ける, but meaning is clear. | cloze+teach | yes |
| to bet | 明日の試合に賭けませんか。 | Won't you bet on tomorrow's match? | かけません | N5 L5 T5 C3 I3 — Blank could also be filled with 出る/行く, reducing uniqueness slightly. | teach only | yes |
| tidying up | 部屋の片付けを手伝ってください。 | Please help me tidy up the room. | かたづけ | N5 L5 T5 C3 I3 — 掃除 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| tidying up | 一緒に部屋の片付けをしませんか。 | Shall we tidy up the room together? | かたづけ | N5 L5 T5 C3 I3 — 掃除 or other cleaning-related nouns could also fit. | teach only | yes |
| tidying up | 今日は片付けをしたいです。 | I want to do some tidying up today. | かたづけ | N5 L5 T5 C3 I2 — Generic sentence; 掃除 or other words could also complete it. | teach only | yes |
| carrying something | 携帯を忘れて困りました。 | I forgot my phone and it was troublesome. | けいたい | N5 L5 T5 C2 I3 — Many things (財布, 鍵, etc.) could fill the blank equally well. | teach only | yes |
| carrying something | 携帯を持っていますか。 | Do you have your phone with you? | けいたい | N5 L5 T5 C2 I2 — Generic template; many nouns could fit 'Do you have your ___?' | teach only | yes |
| carrying something | 携帯に電話をかけてください。 | Please call my phone. | けいたい | N4 L5 T4 C2 I2 — 'に電話をかけて' could follow many nouns like 家 or 会社, not uniquely 携帯; EN translation slightly loses the 'に' nuance. | teach only | yes |
| collecting | 夏休みに虫の採集をしました。 | I collected insects during summer vacation. | さいしゅう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| collecting | 山で植物の採集をしたいです。 | I want to collect plants in the mountains. | さいしゅう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| economizing | 私は毎月お金の節約をしています。 | I economize on money every month. | せつやく | N4 L5 T5 C4 I2 | cloze+teach | yes |
| economizing | 一緒に電気の節約をしませんか。 | Shall we save on electricity together? | せつやく | N4 L5 T4 C4 I3 — EN slightly loose translation of ませんか but acceptable. | cloze+teach | yes |
| economizing | もっと時間の節約をしたいです。 | I want to save more time. | せつやく | N4 L5 T4 C3 I2 — 時間の節約 could be confused with 時間の使い方 etc., slightly lower recoverability. | teach only | yes |
| to be brought up | 彼は田舎で育った。 | He was raised in the countryside. | そだった | N5 L5 T5 C3 I3 — Other verbs like 住んだ/生まれた could also fit the blank. | teach only | yes |
| to be brought up | あなたはどこで育ちましたか。 | Where were you raised? | そだちました | N5 L5 T5 C2 I2 — Blank could equally be filled with 生まれました or 住みました, reducing recoverability. | teach only | yes |
| to be brought up | この花は日光の下でよく育つ。 | This flower grows well under sunlight. | そだつ | N5 L5 T5 C3 I3 — 咲く could also plausibly fit the blank, slightly reducing uniqueness. | teach only | yes |
| to prepare | 台風に備えて食べ物を用意した。 | I prepared food in case of the typhoon. | そなえて | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to prepare | 地震に備えていますか。 | Are you prepared for an earthquake? | そなえて | N5 L5 T5 C3 I3 — blank could plausibly be filled with other verbs like 慣れて or 気をつけて given limited context | teach only | yes |
| to prepare | 将来に備えてお金を貯めたいです。 | I want to save money to prepare for the future. | そなえて | N5 L5 T5 C5 I4 | cloze+teach | yes |
| property | 彼はお金より時間が財産だと思っています。 | He thinks time is more of a treasure than money. | ざいさん | N5 L5 T4 C3 I4 — 宝 or 宝物 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| property | 会社の財産を大切に使いたいです。 | I want to use the company's assets carefully. | ざいさん | N4 L5 T5 C2 I2 — Blank could be filled by many words like 資産, 設備, 道具, making it hard to guess exactly. | teach only | yes |
| talent | 彼女には音楽の才能があります。 | She has a talent for music. | さいのう | N5 L5 T5 C3 I3 — Blank could also be filled with センス or 興味, though 才能 is likely. | teach only | yes |
| talent | 子供の才能を伸ばしてあげたいです。 | I want to help develop my child's talent. | さいのう | N5 L4 T5 C3 I3 — Could also fit 能力 or 個性 in the blank. | teach only | yes |
| talent | 若い時、彼の才能に気付きました。 | I noticed his talent when he was young. | さいのう | N5 L4 T5 C2 I3 — Blank could equally be 魅力, 性格, or 弱点, reducing recoverability. | teach only | yes |
| autograph | 有名な歌手にサインをもらいました。 | I got an autograph from a famous singer. | さいん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| autograph | 好きな選手のサインが欲しいです。 | I want the autograph of my favorite player. | さいん | N5 L5 T5 C3 I4 — Could also be 写真 or ユニフォーム, slightly reduces uniqueness. | teach only | yes |
| autograph | 空港で俳優にサインを頼みました。 | I asked an actor for an autograph at the airport. | さいん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| bill | 財布に千円札が三枚あります。 | There are three thousand-yen bills in my wallet. | さつ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| bill | 朝、銀行で新しい札をもらいました。 | This morning I got new bills at the bank. | さつ | N4 L5 T5 C3 I3 — blank could be filled by お金 or コイン, less forcing | teach only | yes |
| bill | 旅行のために一万円の札を用意したいです。 | I want to prepare a ten-thousand-yen bill for the trip. | さつ | N5 L5 T4 C5 I3 — EN says 'a bill' but Japanese implies plural possible; minor nuance | cloze+teach | yes |
| composition | 彼は新しい歌を作曲しました。 | He composed a new song. | さっきょく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| composition | 作曲に忙しくて学校に遅れました。 | I was busy composing and was late for school. | さっきょく | N4 L4 T5 C2 I3 — Many nouns (勉強, 部活, 練習) could fit the blank equally well. | teach only | yes |
| well | さて、そろそろ出かけましょう。 | Well, let's get going soon. | さて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| well | さて、明日はどこへ行きましょうか。 | Well, where shall we go tomorrow? | さて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| discrimination | 差別をなくしたいです。 | I want to eliminate discrimination. | さべつ | N4 L3 T5 C3 I3 — Blank could plausibly be filled by other nouns like 貧困, so recoverability is only moderate. | teach only | yes |
| declaration | 部長は会議で声明を出しました。 | The manager issued a declaration at the meeting. | せいめい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| declaration | 医者はその病気について声明を出しませんでした。 | The doctor did not issue a statement about that disease. | せいめい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| declaration | 大切な問題だから、社長は声明を出すことにしました。 | Because it's an important issue, the president decided to issue a statement. | せいめい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| verbal message | 部長が留守なので、伝言を残しておきます。 | Since the manager is out, I'll leave a message. | でんごん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| verbal message | 買い物に行く前に、母に伝言を頼みました。 | Before going shopping, I asked my mother to pass on a message. | でんごん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to explain | 先生は学生に平和の大切さを説きました。 | The teacher explained the importance of peace to the students. | ときました | N4 L5 T5 C3 I3 — Other verbs like 伝える/教える could also fit the blank. | teach only | yes |
| to explain | 医者は患者に健康の大切さを説くことにしました。 | The doctor decided to explain the importance of health to the patient. | とく | N4 L4 T5 C3 I3 — Blank could plausibly be filled with 伝える or 教える as well. | teach only | yes |
| to consult with | この問題を会議に諮りましょう。 | Let's consult the meeting about this issue. | はかりましょう | N5 L4 T5 C5 I3 | cloze+teach | yes |
| to consult with | 電車の新しい料金について会議に諮ることになりました。 | It was decided that the new train fare would be consulted on at the meeting. | はかる | N4 L4 T4 C5 I3 | cloze+teach | yes |
| to plot | 店は利益の回復を図っています。 | The store is working to restore its profits. | はかって | N4 L3 T4 C3 I2 — Generic business sentence; verbs like 目指す could also fit the blank, reducing uniqueness. | teach only | yes |
| to plot | 彼は自殺を図りましたが、助かりました。 | He attempted suicide, but he survived. | はかりました | N5 L3 T5 C4 I4 — 自殺を図る is a strong fixed collocation, making the blank fairly recoverable. | cloze+teach | yes |
| youth | 青年は寒くても自転車で会社へ行きます。 | The young man goes to the office by bicycle even when it's cold. | せいねん | N4 L5 T5 C2 I2 — Blank could be filled by 彼, 社員, 若者, etc., so the target isn't uniquely recoverable. | teach only | yes |
| partner | 仕事の相手と会議室で話しました。 | I talked with my business partner in the meeting room. | あいて | N5 L5 T5 C2 I3 — Blank could be filled by many words like 同僚, 上司, 人. | teach only | yes |
| partner | 食事の相手がまだ来ていません。 | My dinner companion hasn't arrived yet. | あいて | N5 L5 T5 C3 I3 — 食事の相手 is a good collocation but 友達 or 客 could also fit the blank. | teach only | yes |
| cousin (male) | 従兄弟と久しぶりに会いました。 | I met my cousin for the first time in a while. | いとこ | N4 L5 T5 C2 I2 — Generic sentence; blank could be filled by many other people nouns (friend, brother, etc.). | teach only | yes |
| cousin (male) | 従兄弟は今、外国に住んでいます。 | My cousin is currently living abroad. | いとこ | N4 L5 T5 C2 I2 — Context doesn't uniquely require 'cousin'; any relative or person noun fits. | teach only | yes |
| cousin (female) | 私の従姉妹は看護婦として働いています。 | My cousin works as a nurse. | いとこ | N4 L5 T5 C2 I3 — 看護婦 is a somewhat dated term (看護師 is now standard); also blank could be filled by many family/friend nouns. | teach only | yes |
| cousin (female) | 従姉妹は来月引っ越すそうです。 | I heard my cousin is moving next month. | いとこ | N4 L5 T5 C2 I3 — Context doesn't uniquely require 'cousin'; many other people-nouns would fit the blank. | teach only | yes |
| king | 昔、この国には王がいました。 | Long ago, there was a king in this country. | おう | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other nouns like 女王 or 人. | teach only | yes |
| king | 王は城に住んでいます。 | The king lives in a castle. | おう | N5 L5 T5 C3 I2 — Generic sentence; blank could be filled by many nouns (王様, 女王, 家族). | teach only | yes |
| king | 王はとても優しい人だったそうです。 | I heard the king was a very kind person. | おう | N5 L4 T5 C2 I3 — Blank could be almost any person noun (先生, 父, 王様), low uniqueness. | teach only | yes |
| prince | 王子は白い馬に乗っています。 | The prince is riding a white horse. | おうじ | N5 L5 T5 C3 I4 | teach only | yes |
| prince | 王子は隣の国を訪ねました。 | The prince visited the neighboring country. | おうじ | N5 L5 T5 C2 I3 — Could also be 王, 大使, 使者, etc. | teach only | yes |
| prince | この絵の王子はとても若いです。 | The prince in this picture is very young. | おうじ | N5 L5 T5 C2 I3 — Could also be 王様, 少年, 男の子, etc. | teach only | yes |
| landlord | 大家さんに家賃を払いました。 | I paid the rent to the landlord. | おおや | N5 L5 T5 C5 I4 | cloze+teach | yes |
| landlord | 大家さんは今日忙しいですか。 | Is the landlord busy today? | おおや | N5 L5 T5 C2 I2 — Blank could be filled by many people, not just landlord. | teach only | yes |
| landlord | 大家さんに電話をかけてください。 | Please call the landlord. | おおや | N5 L5 T5 C2 I2 — Blank could be filled by many people, not just landlord. | teach only | yes |
| you (sing) | お前も一緒に来い。 | You come along too. | おまえ | N5 L4 T5 C3 I3 — Blank could also be filled by other second-person pronouns (君, あなた) or a name, slightly reducing uniqueness. | teach only | yes |
| queue | 駅で切符を買うために列に並びました。 | I lined up to buy a ticket at the station. | れつ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| queue | 急いでいるのに、列がぜんぜん進みません。 | Even though I'm in a hurry, the line isn't moving at all. | れつ | N5 L4 T5 C5 I4 | cloze+teach | yes |
| queue | 列に並んでください。 | Please line up in a queue. | れつ | N4 L5 T4 C3 I2 — Generic template sentence with little context; blank could plausibly accept other words like 順番. | teach only | yes |
| association (of ideas) | 海を見ると、旅行を連想します。 | When I see the sea, I think of travel. | れんそう | N4 L5 T5 C3 I3 — 思い出す could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| association (of ideas) | 兄の顔を見ると、父を連想します。 | When I see my older brother's face, I think of my father. | れんそう | N4 L5 T5 C3 I4 — 思い出す could also plausibly fill the blank, slightly reducing uniqueness. | teach only | yes |
| controversy | 家族で旅行の計画について論争になりました。 | There was a dispute in the family about the travel plan. | ろんそう | N4 L4 T4 C3 I3 — 論争 feels slightly strong for a family travel dispute; 喧嘩 or 言い争い more natural, but acceptable. | teach only | yes |
| parting | 空港での別れはいつも悲しいです。 | Parting at the airport is always sad. | わかれ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| on purpose | 弟はわざと皿を割りました。 | My little brother broke the dish on purpose. | わざと | N5 L5 T5 C3 I3 — Other adverbs like うっかり could also fit grammatically, slightly reducing certainty. | teach only | yes |
| on purpose | わざと遅れないでください。 | Please don't be late on purpose. | わざと | N5 L5 T5 C5 I3 | cloze+teach | yes |
| on purpose | 妹はわざと料理を辛くしました。 | My younger sister made the dish spicy on purpose. | わざと | N5 L5 T5 C3 I3 — Alternative adverbs (e.g., うっかり) could also plausibly fit the blank. | teach only | yes |
| topic | 晩御飯の時、家族はいつも同じ話題について話します。 | At dinner, the family always talks about the same topic. | わだい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| topic | 旅行の話題はとても面白かったです。 | The topic of travel was very interesting. | わだい | N5 L5 T5 C3 I3 — blank could also be filled by 話 or 内容 | teach only | yes |
| topic | 急いでいるので、その話題については話さないでください。 | We're in a hurry, so please don't talk about that topic. | わだい | N4 L4 T5 C4 I3 | cloze+teach | yes |
| hit | この店の料理は一人当り千円です。 | The food at this restaurant costs 1000 yen per person. | あたり | N4 L3 T5 C4 I3 | cloze+teach | yes |
| up | スープの味をアップするために、塩を足しました。 | I added salt to improve the soup's flavor. | あっぷ | N4 L5 T5 C3 I3 — Blank could also be filled with 良く/濃く etc., not uniquely アップ. | teach only | yes |
| up | 家族の写真をアップしてください。 | Please upload the family photo. | あっぷ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| up | 旅行の予定をまだアップしていません。 | I haven't uploaded the travel schedule yet. | あっぷ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| seat | 電車の座席に座りませんか。 | Won't you sit in the train seat? | ざせき | N4 L5 T4 C3 I3 — 席 or 座席 both plausible fits for the blank. | teach only | yes |
| seat | この座席は空いていません。 | This seat is not vacant. | ざせき | N4 L5 T4 C2 I2 — Blank could be filled by many nouns like 部屋, 席, トイレ, etc. | teach only | yes |
| (name) card | 新しい名刺を作りませんか。 | Won't you make new business cards? | めいし | N4 L5 T5 C2 I3 — Blank could be filled by many nouns (poster, resume, etc.), weak cloze constraint. | teach only | yes |
| (name) card | 名刺を持っていませんから、名前を書きます。 | Since I don't have a business card, I'll write my name. | めいし | N4 L5 T4 C4 I3 | cloze+teach | yes |
| blanket | 寒いですから、毛布を掛けました。 | Since it's cold, I put on a blanket. | もうふ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| blanket | 友達が来ますから、毛布を出しておきましょう。 | Since a friend is coming, let's get the blanket out ahead of time. | もうふ | N5 L4 T5 C2 I4 — Blank could be many things (cushions, tea, dishes) since context doesn't specify blanket. | teach only | yes |
| blanket | この毛布は薄くて、暖かくないです。 | This blanket is thin and not warm. | もうふ | N5 L5 T5 C3 I3 — Could also fit coat, sweater, futon, so slightly ambiguous. | teach only | yes |
| roof | 雨が降りましたから、屋根を直しました。 | Since it rained, we fixed the roof. | やね | N5 L5 T5 C4 I3 | cloze+teach | yes |
| roof | 屋根の色を変えませんか。 | Shall we change the color of the roof? | やね | N5 L5 T5 C2 I3 — many nouns could fill the blank (car, wall, etc.) | teach only | yes |
| roof | この家には屋根がありません。 | This house has no roof. | やね | N4 L5 T5 C2 I3 — blank could be filled with many house features | teach only | yes |
| floor | 料理を落としましたから、床を拭きました。 | Since I dropped the food, I wiped the floor. | ゆか | N4 L5 T5 C3 I3 | teach only | yes |
| floor | この部屋の床は綺麗じゃないです。 | This room's floor is not clean. | ゆか | N4 L5 T5 C2 I2 — Generic template sentence; many nouns could fill the blank (壁, 天井, etc.). | teach only | yes |
| container | この容器を使いませんか。 | Won't you use this container? | ようき | N4 L5 T5 C2 I2 — Very generic; many nouns (箱、皿、かばん等) could fill the blank equally well. | teach only | yes |
| container | 容器が小さくて、料理が入りません。 | The container is small, so the food doesn't fit. | ようき | N4 L5 T5 C4 I3 | cloze+teach | yes |
| lighter | 友達がたばこを吸いますから、ライターを貸しました。 | Since my friend smokes, I lent him a lighter. | らいたあ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| lighter | このライターを使いませんか。 | Won't you use this lighter? | らいたあ | N4 L5 T5 C2 I2 — Blank could be almost any object, not clearly recoverable as 'lighter'. | teach only | yes |
| racket | 弟はテニスのラケットを買いました。 | My younger brother bought a tennis racket. | らけっと | N5 L5 T5 C3 I2 — Could also be ball, shoes, etc. in the blank. | teach only | yes |
| racket | 一緒にラケットを持って、テニスをしませんか。 | Shall we bring rackets and play tennis together? | らけっと | N4 L4 T5 C3 I3 — Slightly less natural phrasing but understandable; blank could be filled with other tennis gear. | teach only | yes |
| being deeply moved | 今朝のニュースに感動しました。 | I was moved by this morning's news. | かんどう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| being deeply moved | 旅行で美しい景色を見て感動したいです。 | I want to be moved by seeing beautiful scenery on the trip. | かんどうしたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| completion | 旅行の準備は完了しました。 | The travel preparations are complete. | かんりょう | N5 L4 T5 C4 I3 | cloze+teach | yes |
| memory | 今朝の夢の記憶がありません。 | I have no memory of this morning's dream. | きおく | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to be effective | この薬は朝飲むとよく効きます。 | This medicine works well when taken in the morning. | ききます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be effective | 旅行中に頭痛の薬がよく効きました。 | During the trip, the headache medicine worked well. | ききました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to notice | 朝起きて、雨が降っていることに気付きました。 | I woke up and noticed it was raining. | きづきました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to notice | 旅行中に財布を忘れたことに気付きました。 | During the trip I noticed I had forgotten my wallet. | きづきました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to notice | 急いでいて、時間に遅れたことに気付きました。 | In a hurry, I noticed I was late. | きづきました | N4 L5 T5 C4 I3 — slightly awkward phrasing but understandable | cloze+teach | yes |
| function | この時計には便利な機能があります。 | This watch has a convenient function. | きのう | N4 L5 T5 C3 I2 — Somewhat generic template; blank could also fit words like デザイン or ボタン. | teach only | yes |
| function | このカメラには新しい機能があります。 | This camera has a new function. | きのう | N4 L5 T5 C3 I2 — Generic template sentence; blank not uniquely forced to 機能. | teach only | yes |
| contribution | 旅行先で寄付をしました。 | I made a donation at the travel destination. | きふ | N4 L5 T5 C2 I3 — Blank could be filled by many words (買い物, 観光, 食事), not uniquely 寄付. | teach only | yes |
| contribution | 彼は毎年病院に寄付をします。 | He donates to the hospital every year. | きふ | N5 L5 T5 C3 I3 — 病院に＿をします could also fit words like 訪問 or 通院, though 寄付 is plausible. | teach only | yes |
| hope | 将来、外国に住みたいという希望があります。 | I have a hope of wanting to live abroad in the future. | きぼう | N4 L4 T4 C3 I3 — other nouns like 夢/予定 could also fit the blank context | teach only | yes |
| varied | 旅行では様々な人に会いました。 | I met various people during the trip. | さまざま | N5 L5 T5 C2 I3 — Many adjectives (いろいろな, 多くの) could fill the blank equally well. | teach only | yes |
| intimate | あなたは彼女と親しいですか。 | Are you close with her? | したしい | N5 L5 T5 C3 I3 — Clear and natural, though similar adjectives like 仲がいい could also fit the blank. | teach only | yes |
| patiently | 電車が遅れて、じっと待ちました。 | The train was late, so I waited patiently. | じっと | N4 L5 T4 C3 I3 — ずっと could also fit the blank, slightly reducing recoverability | teach only | yes |
| patiently | 料理ができるまで、じっと座っていてください。 | Please sit still patiently until the food is ready. | じっと | N4 L5 T4 C4 I3 | cloze+teach | yes |
| patiently | 子供はバスの中でじっとしていました。 | The child stayed still inside the bus. | じっと | N5 L5 T4 C5 I3 — translation uses 'stayed still' rather than 'patiently' but meaning is consistent with じっと | cloze+teach | yes |
| automatic | 駅の入口のドアは自動で開きます。 | The door at the station entrance opens automatically. | じどう | N5 L5 T5 C5 I3 | cloze+teach | yes |
| automatic | 台所の電気は自動で消えます。 | The kitchen light turns off automatically. | じどう | N5 L5 T5 C5 I3 | cloze+teach | yes |
| automatic | このエレベーターは自動ではありません。 | This elevator is not automatic. | じどう | N4 L5 T5 C4 I3 — Reading uses えれべえたあ instead of standard long vowel marks, slightly unnatural transcription. | cloze+teach | yes |
| chief | この町の主要な道は駅の前にあります。 | The main road of this town is in front of the station. | しゅよう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| chief | 父の主要な仕事は会社の管理です。 | My father's main job is managing the company. | しゅよう | N4 L5 T5 C4 I3 | cloze+teach | yes |
| doing well | 息子の仕事は順調です。 | My son's work is going well. | じゅんちょう | N5 L5 T5 C2 I2 — Blank could be filled by many adjectives (大変, 忙しい, etc.), low recoverability. | teach only | yes |
| doing well | 旅行はとても順調に進んでいます。 | The trip is going very smoothly. | じゅんちょう | N5 L4 T5 C4 I3 | cloze+teach | yes |
| doing well | 料理は順調に進んでいますか。 | Is the cooking going smoothly? | じゅんちょう | N5 L4 T5 C3 I3 — Slightly less forcing since うまく/よく could also fit. | teach only | yes |
| honesty | 正直に話してください。 | Please speak honestly. | しょうじき | N5 L5 T5 C3 I2 — Generic template sentence; blank could be filled by many adverbs (静かに, 丁寧に, etc.). | teach only | yes |
| honesty | 正直に言うと、遅れる理由を忘れました。 | Honestly, I forgot the reason I'm late. | しょうじき | N5 L5 T5 C4 I4 — Context strongly suggests 正直に but 実は could also work. | cloze+teach | yes |
| honesty | 彼は正直ではありません。 | He is not honest. | しょうじき | N5 L5 T5 C2 I2 — Blank could be filled by many na-adjectives (元気, 親切, etc.), low uniqueness. | teach only | yes |
| first class | このホテルの部屋はとても上等です。 | This hotel room is very first-class. | じょうとう | N4 L5 T5 C2 I2 — Many adjectives (立派, 高級, きれい) could fill the blank equally well. | teach only | yes |
| first class | このレストランの料理は上等です。 | This restaurant's food is first-class. | じょうとう | N4 L5 T5 C2 I2 — Generic template; multiple words fit the blank. | teach only | yes |
| first class | この服はあまり上等ではありません。 | These clothes are not very first-class. | じょうとう | N4 L5 T5 C2 I2 — Negative form doesn't narrow down the missing word enough. | teach only | yes |
| academic background | 彼はいい学歴を持っています。 | He has a good academic background. | がくれき | N4 L5 T5 C2 I2 — Blank could be filled by many words like 経験, 才能, 資格. | teach only | yes |
| academic background | 学歴は就職に必要ですか。 | Is academic background necessary for finding a job? | がくれき | N4 L5 T5 C3 I3 — Could also fit 資格 or 経験 in the blank, though 学歴 is a strong candidate. | teach only | yes |
| subject | 先生は難しい課題を出しました。 | The teacher gave a difficult assignment. | かだい | N5 L5 T5 C3 I3 — 宿題/問題 could also fit the blank | teach only | yes |
| subject | この課題はいつまでですか。 | By when is this assignment due? | かだい | N4 L5 T5 C2 I2 — generic; many nouns like 宿題/レポート/会議 fit equally well | teach only | yes |
| bureaucrat | 彼は若い時に官僚になりました。 | He became a bureaucrat when he was young. | かんりょう | N4 L4 T5 C2 I3 — Many professions could fill the blank, weakening cloze recoverability. | teach only | yes |
| bureaucrat | 官僚は毎日会議に出席します。 | Bureaucrats attend meetings every day. | かんりょう | N4 L4 T5 C2 I3 — Attending meetings daily fits many professions, not uniquely bureaucrat. | teach only | yes |
| bureaucrat | 将来官僚になりたいです。 | I want to become a bureaucrat in the future. | かんりょう | N4 L4 T5 C2 I3 — Generic 'want to become X' sentence fits many job nouns. | teach only | yes |
| conference | 会社で新しい計画について協議しました。 | We discussed the new plan at the company. | きょうぎしました | N4 L4 T4 C2 I3 — Blank could also be filled by 相談 or 話し 合い, reducing uniqueness. | teach only | yes |
| conference | 明日その問題を協議する予定です。 | We plan to discuss that problem tomorrow. | きょうぎする | N4 L4 T4 C2 I3 — Same ambiguity as other options like 相談 or 話し合い fits the blank. | teach only | yes |
| conference | この件について協議したいです。 | I want to discuss this matter. | きょうぎしたい | N4 L4 T4 C2 I2 — Generic template sentence; blank could be filled with several synonyms. | teach only | yes |
| public performance | 今夜ここで公演があります。 | There will be a performance here tonight. | こうえん | N5 L5 T5 C2 I2 — Blank could be filled by many event nouns (イベント, コンサート, etc.), reducing recoverability. | teach only | yes |
| public performance | その公演を見に行きたいです。 | I want to go see that performance. | こうえん | N5 L5 T5 C2 I2 — Generic sentence; blank could be filled by many event-related nouns like 映画 or 展覧会. | teach only | yes |
| contest | 学校でスピーチのコンテストがありました。 | There was a speech contest at school. | こんてすと | N5 L5 T5 C4 I3 | cloze+teach | yes |
| contest | そのコンテストに参加したいです。 | I want to participate in that contest. | こんてすと | N5 L5 T5 C3 I2 — Blank could plausibly be filled by other event nouns like パーティー or イベント. | teach only | yes |
| contest | 来週絵のコンテストがありますか。 | Is there an art contest next week? | こんてすと | N5 L5 T5 C4 I3 | cloze+teach | yes |
| major subject | 大学で何を専攻していますか。 | What are you majoring in at university? | せんこう | N5 L5 T5 C3 I3 — 勉強していますか could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| major subject | 彼女は大学で経済を専攻しました。 | She majored in economics at university. | せんこうしました | N5 L5 T5 C3 I3 — 勉強しました is an equally plausible fit for the blank. | teach only | yes |
| major subject | 大学で医学を専攻したいです。 | I want to major in medicine at university. | せんこうしたい | N5 L5 T5 C3 I3 — 勉強したい could also fit the blank contextually. | teach only | yes |
| to combine | 時計を正しい時間に合わせました。 | I set the clock to the correct time. | あわせました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to combine | みんなで力を合わせたいです。 | I want everyone to combine their strength. | あわせたい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to become confused、to panic | 友達が突然来たので、慌てました。 | I panicked because my friend came suddenly. | あわてました | N5 L5 T5 C3 I3 — 驚きました could also fit the blank, reducing uniqueness. | teach only | yes |
| to become confused、to panic | 試験の前に慌てたくないです。 | I don't want to panic before the exam. | あわてたく | N5 L5 T5 C3 I3 — 緊張したくない or 焦りたくない could also fit, reducing uniqueness. | teach only | yes |
| to hold (transitive) (written expression) | 彼はどんな希望を抱いていますか。 | What kind of hope does he hold? | いだいています | N5 L4 T5 C4 I4 | cloze+teach | yes |
| dozing | 授業中に居眠りをしてしまいました。 | I dozed off during class. | いねむり | N5 L5 T5 C4 I4 | cloze+teach | yes |
| dozing | 天気がいい日は居眠りをしたいです。 | I want to doze off on a nice day. | いねむり | N4 L5 T5 C3 I3 — blank could also fit words like 昼寝 or 散歩 | teach only | yes |
| dozing | バスの中で居眠りをしたことがありますか。 | Have you ever dozed off on the bus? | いねむり | N5 L5 T5 C3 I4 — blank could also fit other activities like 読書 | teach only | yes |
| to lose (advanced) | 彼は仕事を失いました。 | He lost his job. | うしないました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to lose (advanced) | 大切な物を失いたくないです。 | I don't want to lose important things. | うしないたく | N5 L5 T5 C3 I3 — なくしたく could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| to project | 誕生日パーティーで映画を壁に映したいです。 | I want to project a movie on the wall at the birthday party. | うつしたい | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to project | その窓ガラスは外の景色をよく映しますか。 | Does that window glass reflect the outside scenery well? | うつします | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to be photographed | 写真にみんなが写りました。 | Everyone appeared in the photo. | うつりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be photographed | あなたはその写真にちゃんと写っていますか。 | Are you properly in that photo? | うつっています | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to be reflected | 窓に山が映りました。 | The mountain was reflected in the window. | うつりました | N4 L5 T5 C3 I3 — 見える could also fit the blank, slightly reducing recoverability | teach only | yes |
| to be reflected | 湖に空がきれいに映っています。 | The sky is beautifully reflected in the lake. | うつっています | N5 L5 T5 C3 I4 — 見える is also plausible in this context | teach only | yes |
| to be reflected | テレビに何か映っていますか。 | Is something showing on the TV? | うつっています | N5 L5 T5 C4 I4 | cloze+teach | yes |
| months and years | 子供が大人になるまで、長い年月がかかります。 | It takes many years for a child to become an adult. | としつき | N5 L5 T5 C3 I3 — 長い＿がかかります could also fit 時間, reducing exact recoverability. | teach only | yes |
| just (now, at the moment, etc.) | 電話に出た途端、友達の声が聞こえました。 | The moment I answered the phone, I heard my friend's voice. | とたん | N5 L3 T5 C3 I3 — 途端 could be swapped with 瞬間/とき in this context, reducing uniqueness. | teach only | yes |
| just (now, at the moment, etc.) | 玄関を開けた途端、犬が飛び出しました。 | The moment I opened the front door, the dog ran out. | とたん | N5 L3 T5 C3 I3 — Same ambiguity: 瞬間 or とき could also fit the blank. | teach only | yes |
| just (now, at the moment, etc.) | 鍋を火にかけた途端、いい匂いがしました。 | The instant I put the pot on the heat, a nice smell came. | とたん | N5 L3 T5 C3 I3 — Sensory cue (匂い) helps a bit but 瞬間 still plausible substitute. | teach only | yes |
| ordinary | 友達が来ると、日常が少し楽しくなります。 | When a friend visits, everyday life gets a bit more fun. | にちじょう | N4 L5 T5 C3 I4 — Natural sentence, but blank could also be filled with 生活 or 毎日 with similar meaning. | teach only | yes |
| whole year | 母は年中忙しいです。 | My mother is busy all year round. | ねんじゅう | N5 L5 T5 C3 I3 — Other time words like いつも or よく could also fit the blank. | teach only | yes |
| whole year | 年中休みがない仕事は大変です。 | A job with no holidays all year round is tough. | ねんじゅう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| date | 電話で会議の日付を伝えました。 | I told them the meeting date over the phone. | ひづけ | N5 L5 T5 C3 I3 — Other words like 場所/時間 could also fit the blank. | teach only | yes |
| date | 手紙に日付を書きました。 | I wrote the date on the letter. | ひづけ | N5 L5 T5 C3 I3 — Could also be 名前 or 住所 in that slot. | teach only | yes |
| date | パーティーの日付を決めましょう。 | Let's decide on the date for the party. | ひづけ | N5 L5 T5 C3 I3 — Could also be 場所 or 時間 in that context. | teach only | yes |
| second | 卵を三十秒だけ温めてください。 | Please warm the egg for just thirty seconds. | びょう | N5 L5 T5 C3 I4 — Blank could plausibly be 分 or 回 as well, reducing certainty. | teach only | yes |
| second | 電話は一分三十秒続きました。 | The phone call lasted one minute and thirty seconds. | びょう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| in everyday situations | 普段は家で晩御飯を食べます。 | Normally I eat dinner at home. | ふだん | N5 L5 T5 C3 I2 — いつも could also fit the blank, slightly reducing recoverability. | teach only | yes |
| in everyday situations | 普段は忙しいですが、今日は友達が来ます。 | I'm usually busy, but today a friend is coming over. | ふだん | N5 L5 T5 C4 I3 — Contrast with 今日は helps narrow the answer, though いつも is still plausible. | cloze+teach | yes |
| in everyday situations | 普段はあまり料理をしません。 | I don't usually cook much. | ふだん | N5 L5 T5 C3 I2 — いつも could also fit the blank, slightly reducing recoverability. | teach only | yes |
| carefree | 休みの日はのんびりしたいです。 | I want to relax on my day off. | のんびり | N5 L5 T5 C3 I3 | teach only | yes |
| carefree | 祖母は田舎でのんびり生活しています。 | My grandmother lives a relaxed life in the countryside. | のんびり | N5 L5 T5 C3 I4 | teach only | yes |
| carefree | 忙しいから、のんびりする時間がありません。 | Because I'm busy, I have no time to relax. | のんびり | N5 L5 T5 C3 I4 | teach only | yes |
| fool | 電話で馬鹿な冗談を言わないでください。 | Please don't tell foolish jokes on the phone. | ばか | N5 L5 T5 C3 I3 — Other adjectives (つまらない, ひどい) could also fit the blank. | teach only | yes |
| fool | 遅刻した自分が馬鹿だと思いました。 | I thought I was foolish for being late. | ばか | N5 L5 T5 C3 I3 — Other words like だめ or遅い could also fit the blank grammatically. | teach only | yes |
| enormous | 彼は莫大なお金を持っています。 | He has an enormous amount of money. | ばくだい | N4 L5 T5 C2 I2 — Generic template sentence; many adjectives could fill the blank. | teach only | yes |
| enormous | 会社は莫大な借金があるから、大変です。 | The company is in trouble because it has enormous debt. | ばくだい | N5 L5 T5 C4 I4 — Context of debt causing trouble strongly implies an extreme adjective like 莫大. | cloze+teach | yes |
| enormous | 莫大な費用がかかると電話で聞きました。 | I heard on the phone that it would cost an enormous amount. | ばくだい | N4 L5 T5 C3 I3 — Plausible but other size adjectives (高額, 多額) could also fit the blank. | teach only | yes |
| violent | 台風で風が激しく吹いています。 | The wind is blowing violently because of the typhoon. | はげしく | N5 L5 T5 C3 I3 — 強く could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| naked | お風呂に入る前に裸になります。 | I get naked before taking a bath. | はだか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| naked | 子供が裸で庭を走っています。 | The child is running around the yard naked. | はだか | N5 L5 T5 C5 I4 | cloze+teach | yes |
| naked | 寒いから、裸で外に出ないでください。 | Since it's cold, please don't go outside naked. | はだか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| showy | 彼女はいつも派手な服を着ています。 | She always wears showy clothes. | はで | N5 L5 T5 C3 I3 | teach only | yes |
| showy | 派手すぎるから、その帽子は買いません。 | Because it's too showy, I won't buy that hat. | はで | N5 L5 T5 C2 I3 — Blank could be filled by many adjectives (高い, 地味, etc.), reducing recoverability. | teach only | yes |
| handsome | 彼はハンサムで、とても人気があります。 | He is handsome and very popular. | はんさむ | N5 L5 T5 C2 I3 — Blank could be filled by many adjectives like かっこいい, 優しい, etc. | teach only | yes |
| handsome | ハンサムな俳優が好きです。 | I like handsome actors. | はんさむ | N5 L5 T5 C2 I3 — Blank could be filled by イケメン, 素敵な, かっこいい, etc. | teach only | yes |
| exactly | この靴は私にぴったりです。 | These shoes fit me perfectly. | ぴったり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| exactly | 約束の時間にぴったり着きました。 | I arrived exactly at the promised time. | ぴったり | N5 L5 T5 C3 I4 — 早く or 遅れて could also plausibly fill the blank, slightly reducing uniqueness. | teach only | yes |
| exactly | ドアをぴったり閉めてください。 | Please close the door tightly. | ぴったり | N5 L5 T4 C3 I3 — きちんと/しっかり could also fit the blank, and 'tightly' is a slight stretch for ぴったり which usually means 'closely/snugly'. | teach only | yes |
| to strike | 弱い人を殴ることはしません。 | I never hit weak people. | なぐる | N4 L5 T5 C3 I3 — Blank could also fit いじめる/叩く, slightly reducing uniqueness. | teach only | yes |
| to strike | 怒っても、私を殴らないでください。 | Even if you're angry, please don't hit me. | なぐらない | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to be idle | 毎日怠けているから、宿題が終わりません。 | Because I've been lazy every day, my homework isn't finished. | なまけている | N4 L4 T4 C4 I3 | cloze+teach | yes |
| to be idle | 彼は仕事を怠けません。 | He never slacks off at work. | なまけません | N4 L4 T4 C3 I3 — other verbs like サボる/休む could also fit the blank | teach only | yes |
| to agonize | 小さいことで悩みません。 | I don't agonize over small things. | なやみません | N5 L5 T5 C3 I2 — Blank could also be filled by similar verbs like 悩む's synonyms (気にする, 困る), reducing uniqueness. | teach only | yes |
| to agonize | 一人で悩まないでください。 | Please don't agonize alone. | なやまないで | N5 L5 T5 C3 I3 — Context allows other verbs (困る, 泣く, 悲しむ) so blank isn't fully unique. | teach only | yes |
| to ring | 大きい音でベルを鳴らしたから、犬が驚きました。 | Because I rang the bell loudly, the dog was startled. | ならした | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to ring | 夜遅いから、ベルを鳴らしません。 | Since it's late at night, I won't ring the bell. | ならしません | N4 L5 T5 C3 I3 — blank could also be 押しません or similar, slightly ambiguous | teach only | yes |
| to ring | 玄関でベルを鳴らしてください。 | Please ring the bell at the front door. | ならして | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to bear fruit | この木にはまだ実が生りません。 | Fruit doesn't grow on this tree yet. | なりません | N4 L4 T4 C5 I3 | cloze+teach | yes |
| to bear fruit | このぶどうの木にはいつ実が生りますか。 | When does fruit grow on this grape vine? | なります | N4 L4 T4 C5 I3 | cloze+teach | yes |
| to become domesticated | 毎日えさをあげたから、猫が私に馴れました。 | Because I fed it every day, the cat became used to me. | なれました | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to become domesticated | この犬はまだ人に馴れていません。 | This dog isn't used to people yet. | なれていません | N5 L4 T5 C5 I3 | cloze+teach | yes |
| to become domesticated | 新しいペットが馴れるまで、待ってください。 | Please wait until the new pet gets used to us. | なれる | N4 L4 T4 C4 I3 — Translation adds 'us' not explicit in Japanese, slight mismatch. | cloze+teach | yes |
| to suit | この色が似合うから、この服を買います。 | Because this color suits me, I'll buy this outfit. | にあう | N4 L5 T5 C3 I3 — Blank could also be filled with other verbs like 好きだ or 気に入る, reducing uniqueness. | teach only | yes |
| to suit | 派手な服は私に似合いません。 | Flashy clothes don't suit me. | にあいません | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to suit | その帽子は私に似合いますか。 | Does that hat suit me? | にあいます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to grasp | 子供は箸をまだ上手に握りません。 | The child still can't hold chopsticks well. | にぎりません | N5 L5 T5 C3 I3 — other verbs like 使う could also fit the blank | teach only | yes |
| to grasp | 緊張していたから、彼の手を強く握りました。 | Because I was nervous, I gripped his hand tightly. | にぎりました | N5 L5 T5 C3 I4 — つかむ could also plausibly fill the blank | teach only | yes |
| sounds | 夜中に変な物音が聞こえました。 | I heard a strange sound in the middle of the night. | ものおと | N5 L5 T5 C3 I4 — 音 or 声 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| sounds | 静かな部屋で物音一つしませんでした。 | There wasn't a single sound in the quiet room. | ものおと | N5 L5 T5 C5 I4 | cloze+teach | yes |
| tale | この物語はとても面白いです。 | This story is very interesting. | ものがたり | N4 L5 T5 C2 I2 — Generic template; many nouns (本, 映画, 話) could fill the blank. | teach only | yes |
| tale | 子供に物語を読んでください。 | Please read a tale to the child. | ものがたり | N4 L5 T5 C2 I3 — Blank could be filled with 本, 絵本, etc., not uniquely 物語. | teach only | yes |
| tale | 昔、この物語を聞いたことがあります。 | I have heard this tale before. | ものがたり | N4 L5 T5 C2 I3 — Blank could be 話 or 噂 as well, not uniquely 物語. | teach only | yes |
| things | 彼は物事をいつも簡単に考えます。 | He always thinks about things simply. | ものごと | N4 L4 T5 C2 I3 — blank could be filled with many nouns (仕事, 何でも, etc.), reducing recoverability | teach only | yes |
| things | 物事がうまく進まないことがあります。 | Sometimes things don't go smoothly. | ものごと | N4 L4 T5 C2 I3 — blank could be filled with other nouns like 仕事 or 計画, reducing recoverability | teach only | yes |
| role | 彼はその映画で医者の役をしました。 | He played the role of a doctor in that movie. | やく | N4 L5 T5 C4 I3 | cloze+teach | yes |
| role | 私はこの劇で難しい役をしたいです。 | I want to play a difficult role in this play. | やく | N4 L5 T5 C4 I3 | cloze+teach | yes |
| assigning parts | 会社で私の役割は営業です。 | My role at the company is sales. | やくわり | N5 L5 T5 C2 I3 — Blank could also be filled by 仕事 or 担当, reducing recoverability. | teach only | yes |
| assigning parts | チームの役割を決めてください。 | Please decide the team's roles. | やくわり | N5 L5 T5 C2 I3 — Other words like 仕事 or 予定 could fit the blank equally well. | teach only | yes |
| assigning parts | 彼の役割はとても大切です。 | His role is very important. | やくわり | N4 L5 T5 C2 I2 — Very generic template sentence; many nouns (仕事, 性格, 存在) could fit the blank. | teach only | yes |
| rent | この部屋の家賃は高いです。 | The rent for this room is expensive. | やちん | N5 L5 T5 C3 I2 — Blank could also fit words like 広さ or 値段; fairly generic. | teach only | yes |
| rent | 家賃を毎月払わなければなりません。 | I have to pay the rent every month. | やちん | N5 L4 T5 C3 I3 — Could be replaced by 税金, ローン, 保険料 etc. | teach only | yes |
| rent | 家賃が安いアパートを探しています。 | I'm looking for an apartment with cheap rent. | やちん | N5 L5 T5 C4 I3 — Strong collocation with 安い makes 家賃 the most natural fit. | cloze+teach | yes |
| overall victory | 私たちのチームが試合で優勝しました。 | Our team won the championship in the match. | ゆうしょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| overall victory | 優勝したら、パーティーをしましょう。 | If we win the championship, let's have a party. | ゆうしょう | N5 L5 T5 C3 I3 — Blank could also be filled with 勝ったら or similar, slightly reducing uniqueness. | teach only | yes |
| overall victory | 来年こそ優勝したいです。 | I want to win the championship next year for sure. | ゆうしょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| mail | 郵便が届くのを待っています。 | I'm waiting for the mail to arrive. | ゆうびん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| mail | 郵便を出してください。 | Please send the mail. | ゆうびん | N5 L5 T4 C3 I3 — other words like 手紙 or 荷物 could also fit the blank | teach only | yes |
| interior | 部屋の奥にベッドがあります。 | There is a bed at the back of the room. | おく | N5 L5 T5 C3 I3 — other words like 中 or 隅 could also fit the blank | teach only | yes |
| interior | 箱の奥に古い写真を見つけた。 | I found an old photo in the back of the box. | おく | N5 L5 T5 C4 I4 — context of an old photo makes 奥 fairly likely though 中 could also work | cloze+teach | yes |
| interior | 店の奥で店員が働いていました。 | The clerk was working in the back of the shop. | おく | N5 L5 T5 C4 I4 — strong contextual cue for 奥 though 中 could also fit | cloze+teach | yes |
| foreign | 来年、海外へ旅行したいです。 | I want to travel abroad next year. | かいがい | N5 L5 T5 C2 I3 — Blank could be filled with many place words like 国内, ハワイ, etc., not uniquely 海外. | teach only | yes |
| foreign | 彼は海外で仕事をしています。 | He is working overseas. | かいがい | N5 L5 T5 C2 I3 — Many locations could fit the blank, not uniquely 海外. | teach only | yes |
| foreign | 海外のニュースをよく見ます。 | I often watch overseas news. | かいがい | N5 L5 T5 C2 I3 — Blank could be filled with other adjectives like 国内, 日本, etc. | teach only | yes |
| Diet | 議会で新しい法律について話しました。 | They discussed a new law in the Diet. | ぎかい | N4 L5 T5 C2 I3 — Blank could be filled by many locations (会社, 学校, 家 etc.), not uniquely recoverable as 議会. | teach only | yes |
| camp | 夏休みに友達とキャンプに行きたいです。 | I want to go camping with friends during summer vacation. | きゃんぷ | N5 L5 T5 C2 I3 — Blank could be filled with many other activities (旅行, 海, 買い物). | teach only | yes |
| camp | 去年の夏、山でキャンプをしました。 | Last summer, I went camping in the mountains. | きゃんぷ | N5 L5 T5 C3 I3 — 山で〜をした narrows options somewhat but still other activities possible (散歩, 料理). | teach only | yes |
| camp | 雨が降って、キャンプは中止になりました。 | It rained, so the camp was cancelled. | きゃんぷ | N5 L5 T5 C2 I3 — Many events could be cancelled due to rain (試合, 旅行, 運動会). | teach only | yes |
| prefecture | 私の県には大きい山があります。 | There is a big mountain in my prefecture. | けん | N5 L5 T5 C3 I3 — Could also be 町/市/国, so blank isn't fully forced to 県. | teach only | yes |
| prefecture | 去年、隣の県に引っ越しました。 | Last year, I moved to the neighboring prefecture. | けん | N5 L5 T5 C3 I3 — 隣の___に引っ越す could fit 町/市 too. | teach only | yes |
| prefecture | この県は野菜が有名です。 | This prefecture is famous for its vegetables. | けん | N5 L5 T5 C3 I3 — Could also be 町/地方 famous for vegetables. | teach only | yes |
| actual spot | 警官が事故の現場に急いで行きました。 | The police officer hurried to the scene of the accident. | げんば | N5 L5 T5 C4 I4 | cloze+teach | yes |
| actual spot | 現場の写真を新聞社に送りました。 | I sent photos of the scene to the newspaper company. | げんば | N5 L5 T5 C3 I3 — blank could plausibly be filled by other nouns like 事件 depending on context, slightly reducing recoverability | teach only | yes |
| school building | 新しい校舎はとても大きいです。 | The new school building is very big. | こうしゃ | N4 L5 T5 C2 I2 — Blank could be filled by many nouns (building, room, etc.), not uniquely 校舎. | teach only | yes |
| school building | 台風で校舎の窓が壊れました。 | The school building's windows broke because of the typhoon. | こうしゃ | N5 L5 T5 C3 I4 — Windows breaking could belong to many structures, though school context helps somewhat. | teach only | yes |
| school building | 学生たちは校舎の前で写真を撮りました。 | The students took photos in front of the school building. | こうしゃ | N5 L5 T5 C3 I4 — Students photographing something could be many places, though 校舎 is plausible. | teach only | yes |
| stress | 電話で母にストレスがひどいと話した。 | I told my mother on the phone that my stress is terrible. | すとれす | N4 L5 T5 C2 I3 — Blank could be filled by many nouns (頭痛, 病気, etc.), not uniquely stress. | teach only | yes |
| stress | 最近ストレスが多いですか。 | Have you had a lot of stress lately? | すとれす | N4 L5 T5 C2 I2 — Generic sentence; blank could be many things like 仕事 or 用事. | teach only | yes |
| stress | ストレスを減らすために運動しませんか。 | Shall we exercise to reduce stress? | すとれす | N5 L5 T5 C4 I4 | cloze+teach | yes |
| physiology | 学校の授業で生理を習いました。 | I learned about physiology in a school class. | せいり | N4 L5 T4 C2 I3 — Blank could be filled by many school subjects (数学, 歴史, etc.), and 生理 often means 'menstruation' in casual use, causing ambiguity. | teach only | yes |
| physiology | 生理について詳しいですか。 | Are you knowledgeable about physiology? | せいり | N4 L5 T4 C1 I2 — Generic template; almost any topic word fits the blank, and 生理 could be read as 'menstruation' rather than 'physiology'. | teach only | yes |
| physiology | 生理についてもっと知りたいです。 | I want to know more about physiology. | せいり | N4 L5 T4 C1 I2 — Very generic sentence; many nouns could fill the blank, weak cloze specificity. | teach only | yes |
| medical treatment | 医者に電話をして治療の予定を聞きました。 | I called the doctor and asked about the treatment schedule. | ちりょう | N5 L5 T5 C3 I3 — Blank could also be filled with 検査 or 診察, reducing uniqueness. | teach only | yes |
| medical treatment | 友達は来月治療を受けるそうです。 | I heard my friend will receive treatment next month. | ちりょう | N5 L4 T5 C3 I4 — 受ける could also pair with 手術 or 検査, slightly reducing recoverability. | teach only | yes |
| medical treatment | 治療が終わったら、また泳ぎたいです。 | Once the treatment is over, I want to swim again. | ちりょう | N5 L4 T5 C4 I4 | cloze+teach | yes |
| brain | 授業で脳について習いました。 | I learned about the brain in class. | のう | N4 L5 T5 C2 I3 — Blank could be many subjects (history, science, etc.), not uniquely 'brain'. | teach only | yes |
| brain | 頭を打った友達の脳を医者が調べました。 | The doctor examined the brain of my friend who hit his head. | のう | N4 L5 T5 C4 I4 | cloze+teach | yes |
| brain | 脳を使うゲームを一緒にしませんか。 | Shall we play a brain game together? | のう | N5 L5 T5 C3 I4 — 頭 could also plausibly fill the blank in '~を使うゲーム', slightly reducing recoverability. | teach only | yes |
| lung | 医者に電話で肺が痛いと伝えました。 | I told the doctor over the phone that my lungs hurt. | はい | N4 L5 T5 C2 I3 — blank could be filled by many body parts (お腹, 喉, etc.), reducing recoverability. | teach only | yes |
| lung | 彼は肺の病気で入院しています。 | He is hospitalized due to a lung disease. | はい | N5 L5 T5 C3 I3 — other organs (心臓, 胃) could also fit the blank in this context. | teach only | yes |
| membrane | 授業で体には膜があると習いました。 | I learned in class that the body has membranes. | まく | N4 L5 T5 C2 I3 — Many other nouns (骨、筋肉、脂肪) could fill the blank equally well. | teach only | yes |
| membrane | 料理をしていたら卵の膜が破れました。 | While cooking, the membrane of the egg broke. | まく | N4 L5 T4 C3 I4 — 殻 (shell) could also plausibly fill the blank in this context. | teach only | yes |
| massage | 疲れたので、マッサージをしてもらいたいです。 | I'm tired, so I want to get a massage. | まっさあじ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| massage | 友達の肩をマッサージしてあげました。 | I gave my friend a shoulder massage. | まっさあじ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| massage | 電話でマッサージの予約をしました。 | I made a massage reservation by phone. | まっさあじ | N5 L5 T5 C2 I3 — Many nouns fit 'の予約をしました', not uniquely massage. | teach only | yes |
| scholar | 彼は有名な学者です。 | He is a famous scholar. | がくしゃ | N4 L5 T5 C2 I1 — Generic template sentence; many professions could fill the blank. | teach only | yes |
| scholar | あなたは将来学者になりたいですか。 | Do you want to become a scholar in the future? | がくしゃ | N4 L5 T5 C2 I2 — Blank could be filled by many profession nouns (医者, 先生, etc.). | teach only | yes |
| scholar | 父は若い時、学者でした。 | My father was a scholar when he was young. | がくしゃ | N5 L5 T5 C3 I3 — More context (father, young age) narrows options slightly but still many professions fit. | teach only | yes |
| singer | 私は歌手になりたいです。 | I want to become a singer. | かしゅ | N5 L5 T5 C2 I2 — Many occupation nouns could fill the blank; low constraint. | teach only | yes |
| singer | あの歌手を知っていますか。 | Do you know that singer? | かしゅ | N5 L5 T5 C2 I2 — Any noun (person/celebrity) could fit the blank equally well. | teach only | yes |
| singer | 姉は昔、歌手でした。 | My older sister used to be a singer. | かしゅ | N5 L5 T5 C2 I3 — Past occupation context allows many other job nouns to fit. | teach only | yes |
| to earn income | 兄はアルバイトでお金を稼いでいます。 | My brother earns money through a part-time job. | かせいでいます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to earn income | 何をしてお金を稼ぎますか。 | How do you earn money? | かせぎます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to earn income | 去年、彼は大分稼ぎました。 | Last year, he earned quite a lot. | かせぎました | N4 L5 T5 C2 I3 — without お金を, 働きました or 儲けました could also fit the blank | teach only | yes |
| conjugation | 動詞の活用は難しいです。 | Verb conjugation is difficult. | かつよう | N5 L5 T5 C3 I3 — Word could be replaced by synonyms like 変化, reducing uniqueness of blank. | teach only | yes |
| conjugation | この動詞の活用を知っていますか。 | Do you know this verb's conjugation? | かつよう | N5 L5 T5 C3 I3 — Context (動詞の…を知っていますか) still allows other nouns like 意味 or使い方. | teach only | yes |
| conjugation | 昨日、活用を習いました。 | I learned the conjugation yesterday. | かつよう | N4 L5 T5 C2 I2 — Very generic sentence; blank could be filled by many nouns (文法、単語 etc.), making the target hard to guess. | teach only | yes |
| course | 大学の課程が終わりました。 | The university course has ended. | かてい | N4 L5 T5 C3 I2 — Could also be 授業 or 学期 in this context. | teach only | yes |
| course | どの課程を選びますか。 | Which course will you choose? | かてい | N4 L5 T5 C2 I2 — Many words like コース, クラス, 道 fit equally well. | teach only | yes |
| (school) subject | 好きな科目は数学です。 | My favorite subject is math. | かもく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| (school) subject | どの科目が一番難しいですか。 | Which subject is the most difficult? | かもく | N5 L5 T5 C3 I3 — blank could plausibly be filled by other nouns like 教科 or even unrelated topic words without more context | teach only | yes |
| (school) subject | 今年、五つの科目を取りました。 | This year, I took five subjects. | かもく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| observation | 学生は植物の観察をしています。 | The students are observing plants. | かんさつ | N5 L5 T5 C3 I3 — 世話 or 研究 could also fit the blank, reducing uniqueness. | teach only | yes |
| observation | 動物の観察をしたことがありますか。 | Have you ever observed animals? | かんさつ | N5 L5 T5 C3 I3 — Other nouns like 世話 or 研究 could also fit. | teach only | yes |
| observation | 昨日、鳥の観察をしました。 | Yesterday I observed birds. | かんさつ | N5 L5 T5 C3 I3 — Could also be filled with 世話 or 撮影, slightly reducing uniqueness. | teach only | yes |
| supervision | 彼は映画の監督です。 | He is a movie director. | かんとく | N4 L5 T5 C2 I2 — Generic template sentence; many nouns could fill the blank. | teach only | yes |
| supervision | あなたは監督に会いましたか。 | Did you meet the director? | かんとく | N4 L5 T5 C2 I3 — Blank could be filled by other nouns like 先生 or 友達. | teach only | yes |
| supervision | 将来、映画の監督になりたいです。 | In the future, I want to become a movie director. | かんとく | N5 L5 T5 C3 I4 — Slightly more context narrows the answer but other film-related nouns could still fit. | teach only | yes |
| down-train | 朝は下りの電車に乗ります。 | I take the down train in the morning. | くだり | N4 L5 T5 C3 I3 — Blank could be filled by many nouns like 満員, 上り, etc. | teach only | yes |
| down-train | 下りは今日、動きません。 | The down train isn't running today. | くだり | N4 L5 T5 C2 I2 — Very generic; many words could fit the blank without more context. | teach only | yes |
| down-train | 下りが遅れたから、会社に遅刻しました。 | Because the down train was late, I was late for work. | くだり | N4 L5 T5 C3 I3 — Blank could be replaced by 電車, バス, etc.; context doesn't fully force 下り. | teach only | yes |
| go by the way | 駅を経由して会社へ行きます。 | I go to work via the station. | けいゆ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| go by the way | この電車は空港を経由しません。 | This train doesn't go via the airport. | けいゆ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| yacht | 父はヨットが好きです。 | My father likes yachts. | よっと | N5 L5 T5 C2 I2 — Blank could be filled by many nouns like car, boat, etc. | teach only | yes |
| yacht | 夏にヨットに乗りたいです。 | I want to ride a yacht in summer. | よっと | N5 L5 T5 C2 I3 — Context (summer, ride) doesn't uniquely force 'yacht'; boat, bike, etc. also fit. | teach only | yes |
| yacht | あなたはヨットを持っていますか。 | Do you own a yacht? | よっと | N5 L5 T5 C2 I2 — Generic possession question; many objects could fill the blank. | teach only | yes |
| train (ordinary) | 列車は八時に駅を出ます。 | The train leaves the station at eight o'clock. | れっしゃ | N5 L5 T5 C3 I2 — could also be バス or 電車 in the blank | teach only | yes |
| train (ordinary) | この列車は特急ではありません。 | This train is not an express. | れっしゃ | N5 L5 T5 C3 I3 — 特急 hints at train context but bus express services also exist | teach only | yes |
| train (ordinary) | 次の列車を待ってください。 | Please wait for the next train. | れっしゃ | N5 L5 T5 C2 I2 — blank could be filled with バス, 電車, タクシー等 | teach only | yes |
| sail | 船は長い航海をしました。 | The ship made a long voyage. | こうかい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| sail | 天気が悪いから、航海は中止になりました。 | Because the weather was bad, the voyage was canceled. | こうかい | N5 L4 T5 C2 I3 — Many other nouns (試合, 旅行, イベント) could fill the blank. | teach only | yes |
| sail | 今年は航海をしませんでした。 | This year we didn't go on a voyage. | こうかい | N4 L5 T5 C1 I2 — Blank is too generic; many activities could fit besides 航海. | teach only | yes |
| stay | 仕事でホテルに三日間滞在します。 | I will stay at a hotel for three days for work. | たいざい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| stay | 仕事があるから、来週まで滞在します。 | Because I have work, I'll stay until next week. | たいざい | N4 L5 T5 C2 I2 — blank could be filled by many verbs like 出張します/仕事します | teach only | yes |
| stay | 滞在の予定を教えてください。 | Please tell me the stay schedule. | たいざい | N4 L5 T4 C2 I2 — blank could be many nouns like 旅行/出張の予定 | teach only | yes |
| (railway) schedule | 台風でダイヤが変わりました。 | The train schedule changed because of the typhoon. | だいや | N5 L4 T5 C4 I4 | cloze+teach | yes |
| (railway) schedule | 今日はダイヤが変わりません。 | Today the schedule isn't changing. | だいや | N4 L3 T4 C2 I2 — Generic template sentence; other nouns like 予定 or スケジュール could fill the blank. | teach only | yes |
| (railway) schedule | 事故があったから、ダイヤが遅れています。 | Because there was an accident, the schedule is delayed. | だいや | N5 L4 T5 C3 I4 — 電車 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| parking | 店の前に駐車しないでください。 | Please don't park in front of the store. | ちゅうしゃ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| parking | ここには駐車できません。 | You can't park here. | ちゅうしゃ | N5 L5 T5 C3 I2 — Could plausibly fit other nouns like 駐輪 or 撮影. | teach only | yes |
| to rescue from | 警官が川に落ちた子供を救いました。 | The police officer rescued the child who fell into the river. | すくいました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to rescue from | 医者になって人の命を救いたいです。 | I want to become a doctor and save people's lives. | すくいたい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to rescue from | 誰かが事故で老人を救ったそうです。 | I heard that someone rescued an elderly person in an accident. | すくった | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to surpass | 彼はスポーツに優れています。 | He excels at sports. | すぐれています | N5 L5 T5 C3 I3 — Other words like 上手/得意 could also fit the blank. | teach only | yes |
| to surpass | この製品はデザインが優れているらしいです。 | This product's design is apparently excellent. | すぐれている | N5 L4 T5 C3 I3 — 良い/素晴らしい could also fit the blank. | teach only | yes |
| to surpass | 姉は語学に優れていると先生が言いました。 | The teacher said that my older sister excels in languages. | すぐれている | N5 L4 T5 C3 I3 — 得意/上手 could also fit the blank. | teach only | yes |
| to pass (advanced) | 昨日は友達と楽しく過ごしました。 | Yesterday I spent a fun time with my friend. | すごしました | N5 L5 T5 C3 I3 — Blank could also be filled by verbs like 遊ぶ, slightly reducing uniqueness. | teach only | yes |
| to pass (advanced) | 夏休みを海の近くで過ごしたいです。 | I want to spend summer vacation near the sea. | すごしたい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to be finished | 朝御飯を食べる前に宿題を済ませました。 | I finished my homework before eating breakfast. | すませました | N5 L5 T5 C3 I3 — 終わらせる/しました could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| to be finished | 買い物を早く済ませてから出かけましょう。 | Let's finish shopping quickly and then go out. | すませて | N5 L5 T5 C3 I3 — 終わらせて could also fit contextually. | teach only | yes |
| to be finished | 用事を済ませてから会議室に行くつもりです。 | I plan to go to the meeting room after finishing my errands. | すませて | N5 L5 T5 C3 I3 — 終わらせて/やって could also work in this slot. | teach only | yes |
| to clear | 今朝の空気はとても澄んでいます。 | This morning's air is very clear. | すんでいます | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other adjectives like きれい or 冷たい, reducing exact recoverability. | teach only | yes |
| to clear | 山の水は澄んでいて綺麗でした。 | The mountain water was clear and beautiful. | すんでいて | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to clear | 秋になると空が澄むと思います。 | I think the sky becomes clear when autumn comes. | すむ | N5 L5 T5 C3 I3 — Sky context could also fit words like 青くなる or きれいになる, lowering exactness. | teach only | yes |
| to print | 明日までに新聞を千枚刷らなければなりません。 | I have to print a thousand newspapers by tomorrow. | すらなければなりません | N5 L5 T5 C3 I4 — 配る/作る could also fit the blank with newspapers. | teach only | yes |
| to print | この写真をもう一枚刷ってください。 | Please print one more copy of this photo. | すって | N5 L5 T5 C2 I3 — 撮って (take a photo) is an equally natural fit for 'one more copy/shot', reducing recoverability. | teach only | yes |
| to print | 会社で地図を千枚刷ることになりました。 | It was decided that we would print a thousand maps at the company. | する | N5 L5 T5 C3 I4 — 配る/作る could plausibly fill the blank for maps as well. | teach only | yes |
| sorting | 毎朝起きてすぐに机の上を整理します。 | I organize my desk right after waking up every morning. | せいりします | N5 L5 T5 C3 I3 — 掃除 or 片付け could also fit the blank. | teach only | yes |
| sorting | 休みの日に部屋の整理をするつもりです。 | I plan to organize my room on my day off. | せいり | N5 L5 T5 C3 I3 — 掃除 could also fit the blank. | teach only | yes |
| sorting | 旅行の前に荷物を整理しました。 | I organized my luggage before the trip. | せいりしました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to give up | 彼は試験を受けることを諦めませんでした。 | He didn't give up on taking the exam. | あきらめませんでした | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to give up | 天気が悪いので、旅行を諦めることにしました。 | Since the weather is bad, I decided to give up on the trip. | あきらめる | N5 L4 T5 C3 I3 — やめる could also fit the blank, reducing uniqueness. | teach only | yes |
| lecture | 明日、大学で講演があります。 | There will be a lecture at the university tomorrow. | こうえん | N5 L5 T5 C3 I3 — Blank could also be filled by other nouns like 授業 or 会議. | teach only | yes |
| lecture | その講演を聞きに行きませんか。 | Shall we go listen to that lecture? | こうえん | N5 L5 T5 C3 I3 — 聞きに行く could pair with other nouns (話、ライブ) so not fully unique. | teach only | yes |
| lecture | 講演が長かったから、疲れました。 | Because the lecture was long, I got tired. | こうえん | N5 L5 T5 C3 I3 — Context (長かった/疲れました) fits many nouns like 会議 or 授業. | teach only | yes |
| coach | 私のテニスのコーチはとても厳しいです。 | My tennis coach is very strict. | こうち | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other people-nouns like 先生 or 友達, though テニスの context helps narrow it. | teach only | yes |
| coach | コーチに聞いてみましょうか。 | Shall we ask the coach? | こうち | N5 L5 T5 C1 I2 — Extremely generic sentence, blank could be any person noun (先生, 友達, 医者, etc.). | teach only | yes |
| coach | コーチが来なかったから、みんな困りました。 | Because the coach didn't come, everyone was troubled. | こうち | N5 L5 T5 C2 I3 — Blank could be filled by many nouns referring to a person who was expected but didn't show up. | teach only | yes |
| language study | 語学の授業は毎週水曜日にあります。 | The language class is every Wednesday. | ごがく | N4 L5 T5 C2 I2 — Many other subjects could fill the blank, e.g. 数学, 英語, so cloze is weak. | teach only | yes |
| language study | 夏休みに語学の学校へ行きませんか。 | Shall we go to a language school during summer vacation? | ごがく | N4 L5 T5 C3 I3 — Plausible but other nouns (料理, 音楽) could also fit 'school' context. | teach only | yes |
| national language | 国語のテストは難しかったです。 | The Japanese language test was difficult. | こくご | N5 L5 T5 C2 I2 — Could be any school subject (数学, 英語, etc.), not uniquely 国語. | teach only | yes |
| national language | 今日の国語の授業は何時に始まりますか。 | What time does today's Japanese class start? | こくご | N5 L5 T5 C2 I2 — Any subject name fits the blank equally well. | teach only | yes |
| national language | 国語が苦手だから、毎晩本を読んでいます。 | Because I'm not good at Japanese, I read books every night. | こくご | N5 L5 T5 C4 I4 — Reading books nightly to improve hints at a language subject, making 国語 a strong guess. | cloze+teach | yes |
| blackboard | 先生は黒板に漢字を書きました。 | The teacher wrote kanji on the blackboard. | こくばん | N5 L5 T5 C3 I3 — Blank could also be filled by ノート or 紙, so context doesn't force 黒板 uniquely. | teach only | yes |
| blackboard | 黒板の漢字が見えますか。 | Can you see the kanji on the blackboard? | こくばん | N5 L5 T5 C3 I3 — Kanji could appear on other surfaces like a paper or sign, slightly reducing uniqueness. | teach only | yes |
| blackboard | 黒板を一緒に消しましょうか。 | Shall we erase the blackboard together? | こくばん | N5 L5 T5 C4 I4 — Erasing something together strongly suggests a blackboard, giving good context clues. | cloze+teach | yes |
| author | 彼は有名な作家になりました。 | He became a famous author. | さっか | N5 L5 T5 C3 I3 — Could also fit other professions like 医者 or 歌手, reducing recoverability. | teach only | yes |
| author | あなたはどんな作家が好きですか。 | What kind of author do you like? | さっか | N5 L5 T5 C2 I3 — Blank could be filled with many nouns like 音楽 or 映画, not uniquely 作家. | teach only | yes |
| author | その作家の本を読んでみませんか。 | Why don't you try reading that author's book? | さっか | N5 L5 T5 C4 I4 — Context of 本 strongly points to 作家, though 著者 could also fit. | cloze+teach | yes |
| license | 兄は先月、運転の免許を取りました。 | My brother got his driver's license last month. | めんきょ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| license | 免許を持っていますか。 | Do you have a license? | めんきょ | N5 L5 T5 C2 I2 — Blank could be many nouns (パスポート, 財布 etc.) since context doesn't specify driving. | teach only | yes |
| license | 免許がないから、車の運転ができません。 | Because I don't have a license, I can't drive a car. | めんきょ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| interview | 明日、会社の面接があります。 | I have a job interview at the company tomorrow. | めんせつ | N5 L5 T5 C3 I3 — Many words could fit before があります (会議, パーティー, etc.), reducing uniqueness. | teach only | yes |
| interview | 面接の前に、少し話しましょうか。 | Shall we talk a little before the interview? | めんせつ | N5 L5 T5 C2 I3 — の前に、少し話しましょうか could follow many nouns like 試験, 会議, テスト, so blank isn't uniquely determined. | teach only | yes |
| interview | 面接が上手にできなかったから、心配です。 | Because the interview didn't go well, I'm worried. | めんせつ | N5 L5 T5 C3 I4 — 上手にできなかった could also refer to a test or presentation, slightly lowering specificity. | teach only | yes |
| to talk | 家族と晩御飯を食べながらしゃべります。 | I chat with my family while eating dinner. | しゃべります | N5 L5 T5 C3 I3 — 話す/笑う could also fit the blank, slightly reducing recoverability. | teach only | yes |
| to talk | 授業中にしゃべらないでください。 | Please don't talk during class. | しゃべらないで | N5 L5 T5 C3 I3 — Other verbs like 寝る or 食べる could also fit the blank in this classroom-rule context. | teach only | yes |
| to talk | 遅れているから、電話でしゃべる時間がありません。 | Since I'm running late, I don't have time to chat on the phone. | しゃべる | N4 L5 T5 C3 I3 — 話す is a near-synonym that would also fit, making the blank less uniquely determined. | teach only | yes |
| to urge to do | 医者は父に薬を勧めました。 | The doctor recommended medicine to my father. | すすめました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| speech | 忙しくてスピーチの準備ができていません。 | I'm busy and haven't prepared the speech. | すぴいち | N5 L5 T5 C3 I4 — Blank could also fit words like 発表 or 資料, slightly reducing recoverability. | teach only | yes |
| speech | 先生はいいスピーチをしました。 | The teacher gave a good speech. | すぴいち | N5 L5 T5 C3 I3 — Blank could also fit 話 or 発表, reducing certainty of exact word. | teach only | yes |
| handshake | 空港に着いたら、彼と握手をするつもりです。 | When I arrive at the airport, I plan to shake hands with him. | あくしゅ | N5 L5 T5 C3 I3 | teach only | yes |
| handshake | 初めて会う人とはまず握手をしてください。 | Please shake hands first with someone you're meeting for the first time. | あくしゅ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| handshake | 弟は新しい先生と握手をしました。 | My little brother shook hands with the new teacher. | あくしゅ | N5 L5 T5 C3 I3 | teach only | yes |
| to dispute | 兄弟はいつもゲームのことで争います。 | My brothers always argue about video games. | あらそいます | N4 L5 T4 C3 I3 | teach only | yes |
| to dispute | 遅れているので、道について争っている時間はありません。 | Since we're running late, there's no time to argue about the route. | あらそっている | N4 L3 T4 C3 I4 | teach only | yes |
| to express | この絵は画家の気持ちを表しています。 | This picture expresses the painter's feelings. | あらわしています | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to express | 母は言葉で愛情を表すことが苦手です。 | My mother is bad at expressing love in words. | あらわす | N5 L5 T5 C4 I4 | cloze+teach | yes |
| expression of gratitude before meals | 家族みんなで「いただきます」と言ってから食べます。 | The whole family says "itadakimasu" before eating. | いただきます | N5 L5 T5 C5 I3 | cloze+teach | yes |
| expression of gratitude before meals | 遅れて帰ってきたので、一人で「いただきます」と言って食べました。 | Since I came home late, I said "itadakimasu" and ate alone. | いただきます | N5 L5 T5 C4 I4 | cloze+teach | yes |
| expression of gratitude before meals | 料理ができたら、「いただきます」と言ってください。 | When the food is ready, please say "itadakimasu." | いただきます | N5 L5 T5 C5 I3 | cloze+teach | yes |
| request | 会社から新しい仕事の依頼が来ました。 | A request for new work came from the company. | いらい | N5 L5 T5 C3 I3 — other nouns like 話 or 連絡 could also fit the blank. | teach only | yes |
| request | 旅行会社に部屋の予約の依頼をしました。 | I made a request to the travel agency to book a room. | いらい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| request | 時間がないので、依頼の返事はまだできません。 | Since there's no time, I can't reply to the request yet. | いらい | N5 L5 T5 C3 I3 — blank could also be filled with words like 質問 or メール. | teach only | yes |
| disadvantage | 弟は背が低くて、試合で不利です。 | My younger brother is at a disadvantage in matches because he's short. | ふり | N5 L5 T5 C4 I4 | cloze+teach | yes |
| disadvantage | この規則は留学生に不利ですか。 | Is this rule disadvantageous to international students? | ふり | N5 L5 T5 C4 I4 | cloze+teach | yes |
| atmosphere (e.g., musical) | 友達が来ると、部屋の雰囲気が明るくなります。 | When a friend comes over, the room's atmosphere becomes brighter. | ふんいき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| atmosphere (e.g., musical) | 教室の雰囲気はどうですか。 | How is the atmosphere in the classroom? | ふんいき | N4 L5 T5 C2 I2 — generic template; blank could fit many nouns like 様子 | teach only | yes |
| atmosphere (e.g., musical) | 家族が皆優しいから、家の雰囲気はいつもいいです。 | Because everyone in my family is kind, the atmosphere at home is always good. | ふんいき | N5 L5 T5 C5 I4 | cloze+teach | yes |
| analysis | 先生はテストの結果を分析しています。 | The teacher is analyzing the test results. | ぶんせき | N5 L5 T5 C3 I3 | teach only | yes |
| analysis | データを一緒に分析しませんか。 | Won't you analyze the data together with me? | ぶんせき | N5 L5 T5 C3 I3 | teach only | yes |
| analysis | 妹が事故の原因を分析したいと言いました。 | My younger sister said she wants to analyze the cause of the accident. | ぶんせき | N5 L5 T5 C3 I4 | teach only | yes |
| civilization | 授業で昔の文明を習いました。 | We learned about ancient civilizations in class. | ぶんめい | N5 L5 T5 C3 I3 — Could also fit 歴史 or 文化, slightly ambiguous blank. | teach only | yes |
| civilization | 昔の文明に興味がありますか。 | Are you interested in ancient civilizations? | ぶんめい | N5 L5 T5 C3 I3 — Blank could plausibly be 文化 or 歴史 too. | teach only | yes |
| civilization | 息子は文明の歴史が好きだから、よく本を読みます。 | My son likes the history of civilization, so he often reads books. | ぶんめい | N5 L5 T5 C3 I3 — 文明の歴史 is natural but other nouns could also precede 歴史. | teach only | yes |
| equilibrium | クラスの平均点はあまり高くなかったです。 | The class average score wasn't very high. | へいきん | N5 L5 T5 C5 I4 — Note: 平均 means 'average', not 'equilibrium' as glossed, but sentence itself is fine. | cloze+teach | yes |
| equilibrium | 兄弟の平均身長はどのくらいですか。 | What is the average height of the siblings? | へいきん | N5 L5 T5 C5 I4 — Gloss 'equilibrium' is incorrect for 平均 (should be 'average'), though sentence usage is correct. | cloze+teach | yes |
| peace | 授業で平和の歴史を習います。 | We learn about the history of peace in class. | へいわ | N4 L5 T5 C2 I3 — Blank could be filled by many nouns (history of X), not uniquely peace. | teach only | yes |
| peace | 世界の平和を願ったことがありますか。 | Have you ever wished for world peace? | へいわ | N5 L5 T5 C4 I4 — 世界の平和 is a strong collocation, making the blank fairly recoverable. | cloze+teach | yes |
| (not) particularly | 別に忙しくないから、手伝いますよ。 | I'm not particularly busy, so I'll help you. | べつに | N5 L5 T5 C4 I3 — 特に could also fit the blank, slightly reducing uniqueness. | cloze+teach | yes |
| (not) particularly | 別に用事はありませんか。 | Don't you have anything particular to do? | べつに | N5 L5 T5 C4 I2 — Common but slightly generic phrase; 特に could also fit. | cloze+teach | yes |
| (not) particularly | 電話では別に何も話しませんでした。 | We didn't particularly talk about anything on the phone. | べつに | N5 L5 T5 C4 I3 — 特に何も also plausible, minor ambiguity. | cloze+teach | yes |
| side | 兄より弟の方が背が高いです。 | My younger brother is taller than my older brother. | ほう | N5 L5 T5 C5 I3 | cloze+teach | yes |
| side | どちらの方が正しいですか。 | Which side is correct? | ほう | N4 L5 T4 C3 I2 — Could also be filled by other nouns like 意見 depending on context, slightly generic. | teach only | yes |
| side | こちらの方に座りませんか。 | Won't you sit on this side? | ほう | N4 L5 T4 C3 I3 — Blank could plausibly be filled by 席 or 椅子, reducing uniqueness. | teach only | yes |
| to scatter | 雪が降る前に道に塩を撒きました。 | I scattered salt on the road before it snowed. | まきました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to scatter | 会社の前に水を撒くのは大変です。 | Scattering water in front of the company is hard work. | まく | N4 L5 T4 C4 I3 | cloze+teach | yes |
| to be mixed | 料理をしていたら、砂糖と塩が混ざってしまいました。 | While cooking, the sugar and salt got mixed together. | まざって | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to mix | 趣味で色々な色を混ぜます。 | As a hobby, I mix various colors. | まぜます | N4 L5 T5 C3 I4 — Plausible but 使います could also fit the blank. | teach only | yes |
| to be collected | 会議の意見がやっとまとまりました。 | The opinions at the meeting finally came together. | まとまりました | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to be collected | 趣味の会の予定はまとまりましたか。 | Has the schedule for the hobby group been finalized? | まとまりました | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to split | 強い風でシャツが裂けました。 | The shirt tore in the strong wind. | さけました | N4 L5 T5 C3 I3 — 破れる would also fit contextually, reducing uniqueness | teach only | yes |
| to rub | 寒くて手を擦りました。 | It was cold, so I rubbed my hands. | すりました | N4 L5 T5 C3 I3 — 温めました等も文脈的に当てはまり得る | teach only | yes |
| to rub | 疲れて目を擦っています。 | I'm tired and rubbing my eyes. | すっています | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to sever | 彼はたばこを断つことにしました。 | He decided to quit smoking. | たつ | N4 L4 T5 C3 I3 — やめる would also fit the blank, reducing uniqueness. | teach only | yes |
| to sever | 会社との関係を断つつもりです。 | I intend to sever my relationship with the company. | たつ | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to join | 医者は骨を接ぎました。 | The doctor set the bone. | つぎました | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to join | 趣味で木を接ぐのが好きです。 | I like joining wood as a hobby. | つぐ | N4 L4 T4 C3 I3 — Blank could plausibly be filled with other verbs like 削る or 彫る, reducing uniqueness. | teach only | yes |
| mentality | 母は子供の心理をよく理解しています。 | My mother understands her child's mentality well. | しんり | N4 L5 T5 C3 I3 — 気持ちや性格でも成立しうる | teach only | yes |
| recommendation | 兄の推薦で新しい仕事を始めました。 | I started a new job thanks to my brother's recommendation. | すいせん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| at least | 会議には少なくとも十人来ます。 | At least ten people will come to the meeting. | すくなくとも | N5 L5 T5 C4 I3 | cloze+teach | yes |
| at least | 少なくとも一週間は休んでください。 | Please rest for at least a week. | すくなくとも | N5 L5 T5 C4 I3 | cloze+teach | yes |
| at least | 遅れても少なくとも電話をしてください。 | Even if you're late, please at least call. | すくなくとも | N5 L5 T5 C4 I4 | cloze+teach | yes |
| anything of | 少しも心配していません。 | I'm not worried at all. | すこしも | N5 L5 T5 C3 I2 — Generic template sentence; other adverbs like 全然/ちっとも could also fit the blank. | teach only | yes |
| anything of | 電話しても少しも返事がありません。 | Even when I call, there's no reply at all. | すこしも | N5 L5 T5 C3 I3 — Context is clear but synonyms such as 全然 or ちっとも could also fill the blank. | teach only | yes |
| anything of | 遅れても少しも謝りませんでした。 | Even though he was late, he didn't apologize at all. | すこしも | N5 L5 T5 C3 I3 — Same pattern issue: other negative-emphasis adverbs could plausibly fit the blank. | teach only | yes |
| tax | 税金を払うのを忘れて、遅れてしまいました。 | I forgot to pay my taxes and ended up being late. | ぜいきん | N4 L5 T5 C4 I4 | cloze+teach | yes |
| success | 兄の仕事は成功しました。 | My brother's job was a success. | せいこうしました | N4 L5 T5 C3 I3 | teach only | yes |
| twist | この糸はよりが強いです。 | This thread's twist is strong. | より | N4 L3 T5 C2 I2 — Blank could be filled by many nouns like 太さ or 質, not uniquely 'より'. | teach only | yes |
| twist | よりをもっと強くしてください。 | Please make the twist stronger. | より | N4 L3 T5 C2 I2 — Context too generic; many nouns (力, 絆, 意志) could fit the blank. | teach only | yes |
| to come from | 電車の遅れは事故によるものです。 | The train delay is due to an accident. | よる | N5 L4 T5 C5 I3 | cloze+teach | yes |
| to come from | この問題は連絡不足によると思います。 | I think this problem is due to lack of communication. | よる | N5 L4 T5 C5 I3 | cloze+teach | yes |
| profits | 今年は利益がたくさん出ました。 | This year we made a lot of profit. | りえき | N5 L5 T5 C3 I3 — could also be お金 or 収入, but 利益 is a strong contextual fit | teach only | yes |
| profits | 利益が出なくて困っています。 | I'm troubled because we're not making a profit. | りえき | N5 L5 T5 C3 I3 — could also be お金 or 元気, though 利益 fits well | teach only | yes |
| understanding | 彼の説明はよく理解できました。 | I understood his explanation well. | りかい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| understanding | この問題は理解が難しいです。 | This problem is difficult to understand. | りかい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| understanding | 理解できるように説明してください。 | Please explain so that I can understand. | りかい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| ideal | 彼女は理想の仕事を見つけました。 | She found her ideal job. | りそう | N5 L5 T5 C3 I4 — other words like 新しい could also fit the blank | teach only | yes |
| ideal | 現実は理想通りにはいきません。 | Reality doesn't go as ideally as we'd like. | りそう | N5 L4 T4 C3 I4 — 予定 or 計画 could also fit the blank | teach only | yes |
| ideal | 私の理想は静かな町に住むことです。 | My ideal is to live in a quiet town. | りそう | N5 L5 T5 C3 I4 — 夢 or 目標 could also fit the blank | teach only | yes |
| fee | バスの料金はいくらですか。 | How much is the bus fare? | りょうきん | N5 L5 T5 C4 I3 — Natural and common phrase, minor overlap with 運賃. | cloze+teach | yes |
| fee | 料金を払ってください。 | Please pay the fee. | りょうきん | N4 L5 T5 C2 I1 — Too generic; many nouns like お金 or 代金 could fill the blank. | teach only | yes |
| instance | 例を一つ挙げてください。 | Please give one example. | れい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| instance | この例は分かりやすいです。 | This example is easy to understand. | れい | N5 L5 T5 C2 I2 — blank could be filled by many nouns like 話・本・説明 | teach only | yes |
| instance | 例がないと分かりません。 | Without an example, I don't understand. | れい | N4 L5 T5 C2 I2 — blank could be filled by many nouns like 説明・ヒント・理由 | teach only | yes |
| exception | この規則には例外がありません。 | There are no exceptions to this rule. | れいがい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| phrase | この句の意味が分かりません。 | I don't understand the meaning of this phrase. | く | N4 L5 T5 C2 I3 — Many nouns (文, 言葉, 単語) could fit the blank equally well. | teach only | yes |
| phrase | 有名な句を覚えたいです。 | I want to memorize a famous phrase. | く | N4 L5 T5 C2 I3 — Blank could be filled by 詩, 歌, 言葉, etc., reducing recoverability. | teach only | yes |
| (by) chance | 昨日、公園で偶然先生に会いました。 | Yesterday I happened to meet my teacher in the park by chance. | ぐうぜん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| (by) chance | 偶然、レストランで昔の同僚に会った。 | By chance, I met an old colleague at the restaurant. | ぐうぜん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| (by) chance | それは偶然の出来事だと思います。 | I think that was a coincidental event. | ぐうぜん | N4 L5 T4 C2 I2 — Generic sentence; 突然 or other words could also fit the blank. | teach only | yes |
| a habit | 彼は寝る前に本を読む癖があります。 | He has a habit of reading a book before sleeping. | くせ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| a habit | 私の悪い癖を直したいです。 | I want to fix my bad habit. | くせ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| concrete | もっと具体的に説明してください。 | Please explain more concretely. | ぐたい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| concrete | 具体的な計画がまだありません。 | There is no concrete plan yet. | ぐたい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| association | 父は労働組合に入っています。 | My father belongs to a labor union. | くみあい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| association | 組合の会議は木曜日にあります。 | The union's meeting is on Thursday. | くみあい | N5 L5 T5 C2 I2 — blank could be filled by many nouns like 会社/学校 | teach only | yes |
| association | 昔、その組合で働いていました。 | Long ago, I used to work at that union. | くみあい | N4 L5 T5 C2 I2 — blank could be filled by many nouns like 会社/店 | teach only | yes |
| hardship | 両親はいろいろな苦労をしました。 | My parents went through various hardships. | くろう | N5 L5 T5 C3 I3 — Blank could also fit 経験 or 苦しみ, slightly ambiguous. | teach only | yes |
| hardship | 若い時、苦労した方がいいですよ。 | It's good to go through hardship when you're young. | くろう | N5 L5 T5 C4 I4 — Common proverb-like sentence, fairly specific to 苦労. | cloze+teach | yes |
| tiredness | 友達が来た時、疲れがぜんぜん取れなかった。 | When my friend came, my tiredness didn't go away at all. | つかれ | N4 L5 T5 C4 I3 | cloze+teach | yes |
| tiredness | スポーツをした後、疲れがすぐに出た。 | After doing sports, tiredness came on right away. | つかれ | N4 L5 T5 C4 I3 | cloze+teach | yes |
| wings | 飛行機の翼はとても大きいです。 | The airplane's wings are very big. | つばさ | N5 L5 T5 C3 I2 — could also be エンジン, 座席, etc. so blank is guessable but not unique | teach only | yes |
| wings | あの鳥の翼は白いですか。 | Is that bird's wing white? | つばさ | N5 L5 T5 C3 I2 — 羽 or くちばし could also fit the blank | teach only | yes |
| wings | 友達と話していたら、翼が欲しくなった。 | While talking with my friend, I started to want wings. | つばさ | N4 L4 T5 C2 I4 — blank could be filled by many desired things (money, car, etc.), reducing recoverability | teach only | yes |
| poison | この植物には毒があります。 | This plant has poison. | どく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| poison | この食べ物に毒がありますか。 | Does this food have poison in it? | どく | N4 L5 T5 C4 I3 | cloze+teach | yes |
| tear | 友達に久しぶりに会って、涙が出た。 | I saw my friend after a long time, and tears came out. | なみだ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| tear | 映画を見て、涙が出ましたか。 | Did tears come out after watching the movie? | なみだ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| tear | 悲しい話を聞いて、涙が止まらなかった。 | After hearing the sad story, my tears wouldn't stop. | なみだ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to throw up | 速い乗り物に乗った後、吐きそうでしたか。 | Did you feel like throwing up after riding a fast vehicle? | はき | N4 L5 T5 C3 I3 — Slightly more natural would be 吐きそうになりましたか, but acceptable; blank could also be filled by 酔いそう. | teach only | yes |
| to throw up | 熱が出て、何度も吐きました。 | I had a fever and threw up several times. | はきました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| wing | 鳥の羽が折れていた。 | The bird's wing was broken. | はね | N5 L5 T5 C4 I3 | cloze+teach | yes |
| wing | あの鳥の羽は何色ですか。 | What color is that bird's wing? | はね | N5 L5 T5 C4 I3 | cloze+teach | yes |
| wing | 公園で鳥の羽を拾った。 | I picked up a bird's wing at the park. | はね | N5 L5 T5 C4 I3 | cloze+teach | yes |
| feather | 布団の中に羽根が入っている。 | There are feathers inside the futon. | はね | N5 L5 T5 C3 I3 — Blank could be filled with other futon-filling materials like cotton or down, slightly reducing recoverability. | teach only | yes |
| feather | その羽根はどこで拾いましたか。 | Where did you pick up that feather? | はね | N5 L5 T5 C2 I3 — Many objects could fit 'picked up', so the blank isn't uniquely forced to 'feather'. | teach only | yes |
| feather | 白い羽根が空から落ちてきた。 | A white feather fell from the sky. | はね | N5 L5 T5 C3 I4 — Other white falling objects (snow, petals) could also fit, slightly reducing uniqueness. | teach only | yes |
| abdomen | 朝から腹が痛い。 | My stomach has hurt since morning. | はら | N4 L5 T5 C3 I3 — 頭 could also fit the blank, reducing uniqueness. | teach only | yes |
| abdomen | 友達と食べ過ぎて、腹が痛くなった。 | I ate too much with my friend and my stomach started to hurt. | はら | N5 L5 T5 C4 I4 | cloze+teach | yes |
| locket | 土曜日に彼女へロケットをあげます。 | I will give a locket to my girlfriend on Saturday. | ろけっと | N4 L5 T5 C2 I3 — Blank could be many gift items, weak cloze cue for 'locket'. | teach only | yes |
| locket | 急いでいたので、ロケットを忘れてしまいました。 | Since I was in a hurry, I forgot the locket. | ろけっと | N4 L5 T5 C1 I2 — Very generic 'forgot the ___' sentence; almost any object could fill the blank. | teach only | yes |
| ring (advanced) | 土曜日、庭で花の輪を作りました。 | On Saturday, I made a ring of flowers in the garden. | わ | N4 L5 T5 C3 I3 | teach only | yes |
| ring (advanced) | 旅行で、皆で輪になって座りましょう。 | Let's sit in a ring together during the trip. | わ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| ring (advanced) | 野菜を輪に切ってください。 | Please cut the vegetables into rings. | わ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| bowl | その椀に御飯を入れてください。 | Please put the rice into that bowl. | わん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| bowl | 旅館で古い椀をもらいました。 | I received an old bowl at the inn. | わん | N5 L5 T5 C2 I3 — Many nouns could fill the blank (souvenir, cup, etc.). | teach only | yes |
| bowl | 急いでいたので、椀を洗いませんでした。 | Since I was in a hurry, I didn't wash the bowl. | わん | N5 L5 T5 C2 I2 — Blank could be almost any washable object, weak cloze cue. | teach only | yes |
| pipe | 台所の管が壊れました。 | The pipe in the kitchen broke. | かん | N5 L5 T5 C3 I3 — Could also be 蛇口 or 水道, but pipe is plausible. | teach only | yes |
| pipe | この道の下に大きい管があります。 | There is a big pipe under this road. | かん | N5 L5 T5 C2 I3 — Many things could be under a road, e.g. トンネル, 池, ケーブル. | teach only | yes |
| pipe | 急いでいたので、管の修理ができませんでした。 | Since I was in a hurry, I couldn't repair the pipe. | かん | N4 L5 T5 C1 I2 — Extremely generic context; almost any noun could fill the blank. | teach only | yes |
| equipment | このホテルの設備は新しいです。 | This hotel's equipment is new. | せつび | N5 L5 T5 C2 I2 — Blank could be filled by many words like 部屋, サービス, 施設. | teach only | yes |
| equipment | 台所の設備を調べてください。 | Please check the kitchen equipment. | せつび | N5 L5 T5 C3 I3 — Kitchen context narrows options somewhat but 水道 or ガス could also fit. | teach only | yes |
| equipment | 設備が壊れて、遅くなりました。 | The equipment broke, so I ended up being late. | せつび | N4 L5 T5 C2 I3 — Many things could break and cause lateness, e.g. 電車, 車, 時計. | teach only | yes |
| detergent | お皿を洗う前に洗剤を入れます。 | I put in detergent before washing the dishes. | せんざい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| detergent | 土曜日に洗剤を買いました。 | I bought detergent on Saturday. | せんざい | N4 L5 T5 C1 I2 — Very generic sentence; blank could be almost any purchasable item. | teach only | yes |
| outflow | 水道の出が悪いから、修理を呼びました。 | Because the tap water flow was weak, I called for repair. | で | N4 L4 T4 C4 I3 | cloze+teach | yes |
| meeting | あなたと彼の出会いはいつでしたか。 | When was your first meeting with him? | であい | N4 L5 T4 C3 I3 — Translation adds 'first' not explicit in Japanese; blank could also be filled by words like 別れ or 出来事. | teach only | yes |
| meeting | 素晴らしい出会いがあったから、毎日楽しいです。 | Because I had a wonderful encounter, every day is fun now. | であい | N4 L5 T5 C3 I3 — Blank could plausibly be filled by other nouns like 経験 or 出来事, slightly reducing uniqueness. | teach only | yes |
| an encounter | 山で猿との出合いは危ないです。 | Encountering monkeys in the mountains is dangerous. | であい | N4 L4 T5 C4 I4 | cloze+teach | yes |
| an encounter | 川の出合いの場所はどこですか。 | Where is the confluence of the rivers? | であい | N4 L4 T5 C4 I4 | cloze+teach | yes |
| an encounter | 珍しい出合いがあったから、写真を撮りました。 | Because I had a rare encounter, I took a photo. | であい | N4 L4 T4 C2 I3 — Blank could be filled by many nouns like 出来事 or 発見, reducing recoverability. | teach only | yes |
| resistance | 風の抵抗で自転車が進みにくいです。 | Due to wind resistance, the bicycle is hard to pedal. | ていこう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| resistance | 新しい規則に抵抗を感じますか。 | Do you feel resistance to the new rule? | ていこう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| date (in the sense of 'social engagement' | 来週の日曜日にデートしませんか。 | Shall we go on a date next Sunday? | でえと | N5 L5 T5 C3 I3 — Blank could also be filled with other activities like 食事 or 旅行. | teach only | yes |
| date (in the sense of 'social engagement' | 彼女とデートするために、新しい服を買いました。 | I bought new clothes in order to go on a date with my girlfriend. | でえと | N5 L4 T5 C4 I4 | cloze+teach | yes |
| date (in the sense of 'social engagement' | 今朝は緊張してデートの準備をしました。 | This morning I was nervous and prepared for the date. | でえと | N5 L4 T5 C2 I3 — Blank could be filled with many other nouns like 面接 or 発表, not uniquely デート. | teach only | yes |
| incident happening | 昨夜、近所でどんな出来事がありましたか。 | What kind of incident happened in the neighborhood last night? | できごと | N4 L5 T5 C3 I3 — 文脈上、事件やニュースなど他の語も入り得る。 | teach only | yes |
| if possible… | できれば、明日休みたいです。 | If possible, I want to take a day off tomorrow. | できれば | N5 L5 T5 C3 I3 — なるべく could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| if possible… | できれば、一緒に野菜を買いに行きませんか。 | If possible, shall we go buy vegetables together? | できれば | N4 L5 T5 C3 I4 — もしよかったら or なるべく could also work in the blank. | teach only | yes |
| survey | 先週、学校で好きな科目の調査をしました。 | Last week, we did a survey on favorite subjects at school. | ちょうさ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| survey | 台風の後、町の被害を調査しますか。 | Are you going to survey the town's damage after the typhoon? | ちょうさ | N4 L5 T5 C4 I4 | cloze+teach | yes |
| survey | 病気の原因を詳しく調査したいです。 | I want to investigate the cause of the illness in detail. | ちょうさ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| commuting to school | 今朝は電車で通学しました。 | This morning I commuted to school by train. | つうがく | N5 L5 T5 C2 I3 — 通勤 (commuting to work) would fit equally well since nothing indicates 'school' specifically. | teach only | yes |
| commuting to school | 毎日何で通学していますか。 | How do you commute to school every day? | つうがく | N5 L5 T5 C2 I3 — 通勤 could also fill the blank; context doesn't disambiguate school vs work. | teach only | yes |
| commuting to school | 来月から自転車で通学するつもりです。 | I plan to commute to school by bicycle starting next month. | つうがく | N5 L5 T5 C2 I3 — 通勤 fits just as naturally here, so the blank isn't uniquely recoverable. | teach only | yes |
| commuting to work | 昨日は雨の中、車で通勤しました。 | Yesterday I commuted to work by car in the rain. | つうきん | N5 L5 T5 C3 I3 | teach only | yes |
| commuting to work | もっと近い所から通勤したいです。 | I want to commute to work from a place that's closer. | つうきん | N5 L5 T5 C3 I3 | teach only | yes |
| commuting to work | 会社まで通勤にどのくらいかかりますか。 | How long does the commute to the office take? | つうきん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| presentation | 昨日、宿題を先生に提出しました。 | Yesterday I submitted my homework to the teacher. | ていしゅつ | N5 L5 T5 C4 I3 — Word gloss 'presentation' is inaccurate; 提出 means 'submission', though sentence translation itself is correct. | cloze+teach | yes |
| presentation | レポートを来週までに提出したいです。 | I want to submit the report by next week. | ていしゅつ | N5 L5 T5 C4 I3 — Word gloss 'presentation' is inaccurate; 提出 means 'submission'. | cloze+teach | yes |
| presentation | 作文はいつまでに提出しますか。 | By when should I submit the essay? | ていしゅつ | N5 L5 T5 C4 I3 — Word gloss 'presentation' is inaccurate; 提出 means 'submission'. | cloze+teach | yes |
| philosophy | 大学で哲学を習いました。 | I studied philosophy at university. | てつがく | N5 L5 T5 C1 I3 — Any subject word (数学, 英語, etc.) could fill the blank, so context doesn't force 哲学. | teach only | yes |
| philosophy | いつか哲学の本を読みたいです。 | Someday I want to read a philosophy book. | てつがく | N5 L5 T5 C1 I3 — Blank could be filled by many nouns before 'の本', not uniquely 哲学. | teach only | yes |
| philosophy | 哲学の授業は難しいですか。 | Is the philosophy class difficult? | てつがく | N5 L5 T5 C1 I3 — Any academic subject fits '___の授業は難しいですか', not uniquely recoverable. | teach only | yes |
| examination paper | 試験の答案を先生に渡しました。 | I handed the exam paper to the teacher. | とうあん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| examination paper | 答案を早く返してもらいたいです。 | I want the exam paper to be returned quickly. | とうあん | N5 L5 T5 C3 I3 — Blank could be filled by many nouns like 本 or お金, not uniquely 答案. | teach only | yes |
| examination paper | 答案はもう出しましたか。 | Have you already handed in the exam paper? | とうあん | N5 L5 T5 C3 I3 — Blank could fit words like 宿題 or レポート as well. | teach only | yes |
| verb | 昨日の授業で新しい動詞を習いました。 | I learned a new verb in yesterday's class. | どうし | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other nouns like 単語 or 文法, so not fully forced. | teach only | yes |
| verb | この言葉の動詞はどれですか。 | Which one is the verb in this phrase? | どうし | N5 L5 T5 C3 I3 — Blank could be filled by other grammar terms like 主語 or 品詞, slightly reducing uniqueness. | teach only | yes |
| because | 今日は傘を持って行きます。なぜなら雨が降りそうだからです。 | I'm bringing an umbrella today. That's because it looks like it will rain. | なぜなら | N5 L5 T5 C4 I3 | cloze+teach | yes |
| because | 学校を休みました。なぜなら熱があったからです。 | I was absent from school. That's because I had a fever. | なぜなら | N5 L5 T5 C4 I2 | cloze+teach | yes |
| because | 友達に会いませんでした。なぜなら忙しかったからです。 | I didn't meet my friend. That's because I was busy. | なぜなら | N5 L5 T5 C4 I2 | cloze+teach | yes |
| riddle | この謎は難しいですね。 | This riddle is hard, isn't it. | なぞ | N4 L5 T5 C2 I2 — Generic sentence; blank could be filled by many nouns (問題, 話, etc.). | teach only | yes |
| something | 何か飲みますか。 | Will you drink something? | なにか | N5 L5 T5 C3 I2 — 何を could also fit the blank grammatically, reducing certainty. | teach only | yes |
| something | 何か質問がありますか。 | Do you have any questions? | なにか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| something | 空に何か見えました。 | Something was visible in the sky. | なにか | N5 L5 T5 C4 I4 | cloze+teach | yes |
| by all means | 何でもできるようになりたいです。 | I want to become able to do anything. | なんでも | N5 L5 T5 C2 I3 — Blank could be filled with other adverbs like もっと or 上手に, not uniquely 何でも; also gloss 'by all means' is inaccurate for 何でも (means 'anything'). | teach only | yes |
| by all means | 何でも聞いてもいいですか。 | May I ask you anything? | なんでも | N5 L5 T5 C2 I4 — 何か聞いてもいいですか is equally natural, so the blank isn't uniquely recoverable; gloss 'by all means' mismatches actual meaning 'anything'. | teach only | yes |
| somehow | 難しい試験でしたが、何とか終わりました。 | It was a hard test, but I somehow finished it. | なんとか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| somehow | 雨の中、何とか駅に着きました。 | In the rain, I somehow reached the station. | なんとか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| popularity | この歌手はとても人気があります。 | This singer is very popular. | にんき | N5 L5 T5 C3 I2 — 「元気があります」も文法的に成立するため、空欄の一意性がやや下がる | teach only | yes |
| popularity | あの先生は学生に人気がありますか。 | Is that teacher popular with students? | にんき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| popularity | そのレストランは去年人気になりました。 | That restaurant became popular last year. | にんき | N5 L5 T5 C3 I3 — 「有名になりました」等も文脈上あり得るため一意性がやや弱い | teach only | yes |
| desire | 私の願いは有名になることです。 | My wish is to become famous. | ねがい | N5 L5 T5 C3 I3 — 夢 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| desire | 先生に願いを話しました。 | I told my wish to the teacher. | ねがい | N4 L5 T5 C2 I3 — Many nouns like 気持ち or 話 could fit, weak cloze recoverability. | teach only | yes |
| desire | あなたの願いは何ですか。 | What is your wish? | ねがい | N5 L5 T5 C3 I3 — 夢 or 目標 could also fit, moderate recoverability. | teach only | yes |
| remaining | 残りのケーキを食べました。 | I ate the remaining cake. | のこり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| remaining | 残りの荷物はどこですか。 | Where is the remaining luggage? | のこり | N5 L5 T5 C5 I3 | cloze+teach | yes |
| jeans | 新しいジーンズを買いました。 | I bought new jeans. | じいんず | N4 L5 T5 C2 I2 — Blank could be almost any noun (shirt, bag, etc.), weak cloze constraint. | teach only | yes |
| jeans | そのジーンズが欲しいです。 | I want those jeans. | じいんず | N4 L5 T5 C2 I2 — Very generic context, many nouns fit the blank. | teach only | yes |
| thing | この品は高かったです。 | This item was expensive. | しな | N4 L5 T5 C2 I2 — Generic sentence; many nouns (本、服、車 etc.) could fit the blank. | teach only | yes |
| thing | 品を選びたいです。 | I want to choose the item. | しな | N4 L5 T5 C2 I2 — Generic template sentence; blank could be filled by many other nouns. | teach only | yes |
| gun | 警官は銃を持っています。 | The police officer is carrying a gun. | じゅう | N5 L5 T5 C3 I3 | teach only | yes |
| gun | その銃は重いです。 | That gun is heavy. | じゅう | N4 L5 T5 C2 I2 — Generic template sentence; blank could be many heavy objects. | teach only | yes |
| gun | 映画で銃を見ました。 | I saw a gun in the movie. | じゅう | N4 L5 T5 C2 I2 — Blank could be many things seen in a movie, low cloze specificity. | teach only | yes |
| dining table | 食卓にお皿を並べます。 | I set plates on the dining table. | しょくたく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| dining table | 食卓の上に花瓶があります。 | There is a vase on the dining table. | しょくたく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| dining table | 食卓を拭きました。 | I wiped the dining table. | しょくたく | N5 L5 T5 C3 I3 — Could also be 机/テーブル, slightly less forced. | teach only | yes |
| switch | スイッチを押してください。 | Please press the switch. | すいっち | N4 L5 T5 C2 I2 — Blank could be many objects (button, light, etc.), not uniquely 'switch'. | teach only | yes |
| switch | 電気のスイッチが見つかりません。 | I can't find the light switch. | すいっち | N5 L5 T5 C4 I3 — Context of 電気の strongly suggests switch, though 'cord' or similar could theoretically fit. | cloze+teach | yes |
| switch | スイッチを入れました。 | I turned on the switch. | すいっち | N4 L5 T5 C2 I2 — Blank could be filled with many nouns like 電源, エアコン, etc., not uniquely switch. | teach only | yes |
| stand | 机の上にスタンドがあります。 | There is a lamp on the desk. | すたんど | N5 L5 T5 C2 I2 — Many nouns could fill the blank (本, 花瓶, 時計, etc.) | teach only | yes |
| stand | 新しいスタンドを買いたいです。 | I want to buy a new lamp. | すたんど | N5 L5 T5 C2 I2 — Generic 'want to buy new ___' fits many nouns. | teach only | yes |
| stand | スタンドの電気を消しました。 | I turned off the lamp's light. | すたんど | N5 L5 T5 C4 I3 — 電気を消す narrows context to a lamp-like object, fairly recoverable. | cloze+teach | yes |
| ink | 墨で名前を書きました。 | I wrote my name with ink. | すみ | N4 L5 T5 C3 I3 — could also be 筆 or ペン, though 墨 fits well with calligraphy context | teach only | yes |
| ink | 墨で絵を描きたいです。 | I want to draw a picture with ink. | すみ | N4 L5 T5 C3 I3 — context evokes calligraphy but other tools could still fit the blank | teach only | yes |
| manufactured goods | 新しい製品が欲しいです。 | I want a new product. | せいひん | N4 L5 T5 C2 I2 — Blank could be filled by many nouns (car, book, etc.), not uniquely 製品. | teach only | yes |
| manufactured goods | 工場でその製品を作ります。 | They make that product at the factory. | せいひん | N4 L5 T5 C3 I3 — Factory context narrows options but 部品/商品 could also fit. | teach only | yes |
| friendship | 兄は会社の同僚と交際しています。 | My older brother is dating a coworker from his company. | こうさい | N5 L5 T4 C4 I4 — Target gloss 'friendship' is inaccurate; 交際 here means 'dating/relationship', though sentence and EN are consistent with that meaning. | cloze+teach | yes |
| friendship | 交際が長いから、彼女とはよく電話で話します。 | Since we've been dating a long time, I often talk with her on the phone. | こうさい | N4 L5 T4 C3 I3 — Other words like 付き合い could also fit the blank, reducing recoverability; gloss 'friendship' is inaccurate. | teach only | yes |
| friendship | 両親は二人の交際をあまり知らない。 | My parents don't know much about the two of us dating. | こうさい | N5 L5 T4 C5 I4 — Gloss 'friendship' is inaccurate; word clearly means romantic relationship here. | cloze+teach | yes |
| the latter | 肉と魚がありますが、後者の方が安いです。 | There is meat and fish, but the latter is cheaper. | こうしゃ | N5 L4 T5 C2 I3 — Either 前者 or 後者 could grammatically fill the blank without more context. | teach only | yes |
| the latter | 電車とバスなら、後者の方が早く着きます。 | Between the train and the bus, the latter arrives faster. | こうしゃ | N5 L4 T5 C2 I3 — Blank could be filled with 前者 as well, since we don't know which is faster without the answer given. | teach only | yes |
| the latter | 前者と後者、どちらがいいか電話で教えてください。 | Please tell me by phone which is better, the former or the latter. | こうしゃ | N5 L4 T5 C5 I3 — Presence of 前者 in the same sentence makes 後者 the clearly forced answer. | cloze+teach | yes |
| justice | 父は子供たちにいつも公正です。 | My father is always fair with his children. | こうせい | N5 L5 T5 C3 I3 — 公平 could also fit the blank, reducing uniqueness. | teach only | yes |
| justice | この試合の判断は公正ではなかった。 | The judgment in this match was not fair. | こうせい | N5 L5 T5 C4 I4 — 公平 could also fit, but context slightly favors 公正. | cloze+teach | yes |
| high speed | 遅れそうだから、高速を使って駅まで行きます。 | Since I might be late, I'll take the highway to the station. | こうそく | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other transport nouns like タクシー or 車. | teach only | yes |
| high speed | 高速に乗れば、もっと早く着くはずです。 | If we take the highway, we should arrive much faster. | こうそく | N5 L4 T5 C3 I3 — 乗れば could pair with other vehicle nouns, reducing uniqueness. | teach only | yes |
| high speed | この道は高速に比べて込んでいます。 | This road is more crowded compared to the highway. | こうそく | N5 L4 T5 C3 I3 — Comparison structure allows other road-type nouns as plausible fills. | teach only | yes |
| robbery | 昨夜、近所の店に強盗が入りました。 | Last night, a robbery occurred at a nearby store. | ごうとう | N5 L5 T4 C3 I3 — Could also be 泥棒 (thief) in this context, slightly reducing uniqueness. | teach only | yes |
| robbery | 強盗を見たら、すぐに警察に電話してください。 | If you see a robber, please call the police immediately. | ごうとう | N5 L5 T5 C3 I3 — 泥棒 could also fit the blank, reducing uniqueness. | teach only | yes |
| candidacy | 彼は次の社長の候補です。 | He is a candidate for the next company president. | こうほ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| candidacy | その候補はあまり人気がない。 | That candidate isn't very popular. | こうほ | N4 L5 T5 C2 I2 — Generic sentence; many nouns could fill the blank (店, 人, 映画, etc.). | teach only | yes |
| code | このコードには間違いがあります。 | There is a mistake in this code. | こうど | N5 L5 T5 C4 I3 | cloze+teach | yes |
| code | 新しいコードを送ってください。 | Please send the new code. | こうど | N5 L5 T5 C3 I3 — 'cord' or 'code' both plausible, slightly reduces recoverability | teach only | yes |
| code | コードが複雑だから、直すのに時間がかかります。 | Since the code is complicated, it takes time to fix it. | こうど | N5 L5 T5 C5 I4 | cloze+teach | yes |
| goal | 選手はゴールに向かって走っています。 | The athlete is running toward the goal. | ごうる | N5 L5 T5 C3 I3 — Blank could also be filled with other destinations (e.g. 学校), reducing forced uniqueness. | teach only | yes |
| goal | 疲れたから、ゴールまで歩きました。 | Since I was tired, I walked to the goal. | ごうる | N5 L5 T5 C2 I3 — Many nouns could fit the blank (駅, 学校, etc.), so context doesn't force ゴール specifically. | teach only | yes |
| goal | 彼は一番にゴールしました。 | He reached the goal first. | ごうる | N5 L5 T5 C4 I4 — ゴールする as a verb combined with 一番に strongly suggests finishing/reaching a goal, fairly recoverable. | cloze+teach | yes |
| religion | 友達が家に来た時、宗教の話をしました。 | When my friend came to my house, we talked about religion. | しゅうきょう | N5 L5 T5 C2 I4 — Blank could be filled by many other topic nouns (仕事, 恋愛, 政治 etc.), reducing recoverability. | teach only | yes |
| religion | 先生は宗教の歴史を教えていますか。 | Does the teacher teach the history of religion? | しゅうきょう | N5 L5 T5 C3 I3 — Context (history) narrows options somewhat but other subject nouns could still fit. | teach only | yes |
| religion | 彼は暇な時、宗教の本を読みます。 | He reads books about religion in his free time. | しゅうきょう | N4 L5 T5 C2 I3 — Generic hobby sentence; many nouns could fill the blank (小説、漫画 etc.). | teach only | yes |
| importance | あなたは趣味と仕事、どちらを重視しますか。 | Which do you value more, hobbies or work? | じゅうし | N4 L4 T4 C3 I4 — Other verbs like 優先する or大事にする could also fit the blank, reducing uniqueness slightly. | teach only | yes |
| amendment | 先生は私の作文を修正しました。 | The teacher corrected my composition. | しゅうせい | N4 L5 T4 C3 I3 — 作文の修正 could also be 添削/訂正, slightly ambiguous. | teach only | yes |
| amendment | 彼は写真を少し修正してから見せました。 | He touched up the photo a little before showing it. | しゅうせい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| concentration | 授業中は集中してください。 | Please concentrate during class. | しゅうちゅう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| concentration | もっと集中して絵を描きたいです。 | I want to concentrate more and draw pictures. | しゅうちゅう | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other verbs like 練習. | teach only | yes |
| income | アルバイトの収入は多いですか。 | Is the income from part-time work high? | しゅうにゅう | N5 L5 T5 C3 I3 — 給料 could also fit the blank, slightly lowering recoverability. | teach only | yes |
| income | 友達は新しい仕事で収入が増えました。 | My friend's income increased with a new job. | しゅうにゅう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| income | 彼の趣味には収入があまり関係ありません。 | His hobby has little to do with income. | しゅうにゅう | N5 L5 T5 C3 I4 — お金 could also plausibly fill the blank. | teach only | yes |
| doctrine | 先生はいつも自分の主義を大切にしています。 | The teacher always values his own principles. | しゅぎ | N4 L5 T4 C3 I3 — blank could also be filled by words like 意見 or 考え | teach only | yes |
| doctrine | あなたはどんな主義を持っていますか。 | What kind of doctrine do you hold? | しゅぎ | N4 L5 T5 C2 I3 — very open context; many nouns like 意見, 考え, 性格 could fit the blank | teach only | yes |
| means | 友達の家へ行く手段は何がいいですか。 | What's a good way to get to your friend's house? | しゅだん | N4 L4 T4 C3 I3 — 方法 could also fill the blank, slightly reducing cloze uniqueness. | teach only | yes |
| claim | 彼はいつも自分の意見を主張します。 | He always asserts his own opinion. | しゅちょう | N4 L5 T5 C3 I3 — Other verbs like 説明する or 発表する could also fit the blank. | teach only | yes |
| claim | 友達は自分の考えを強く主張しました。 | My friend strongly asserted his idea. | しゅちょう | N5 L5 T5 C4 I4 — 強く narrows the possible verbs, making 主張 fairly clear. | cloze+teach | yes |
| claim | あなたはその意見を主張しますか。 | Will you assert that opinion? | しゅちょう | N4 L5 T5 C3 I2 — Generic question form; multiple verbs (説明する, 発表する) could fill the blank. | teach only | yes |
| jet plane | 空港に大きいジェット機が止まっています。 | A big jet plane is parked at the airport. | じぇっとき | N5 L5 T5 C3 I3 — Blank could also be filled by 飛行機 or other vehicles, not uniquely ジェット機. | teach only | yes |
| congestion | 道路が渋滞していたから、会議に遅れました。 | Because the road was congested, I was late for the meeting. | じゅうたい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| congestion | 今日は渋滞がなくて、早く着きました。 | There was no congestion today, so I arrived early. | じゅうたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| congestion | もしもし、今渋滞の中にいます。 | Hello, I'm stuck in traffic congestion right now. | じゅうたい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| passenger | 電車の乗客はとても多かったです。 | There were very many passengers on the train. | じょうきゃく | N5 L5 T5 C3 I3 — blank could plausibly be filled with 人 or 客 too, slightly weakening recoverability | teach only | yes |
| passenger | 乗客の皆さん、席を立たないでください。 | Passengers, please do not stand up from your seats. | じょうきゃく | N5 L5 T5 C5 I4 | cloze+teach | yes |
| proceeding to the capital | 弟は仕事のために上京しました。 | My younger brother moved to Tokyo for work. | じょうきょうしました | N5 L5 T5 C3 I3 | teach only | yes |
| proceeding to the capital | 大学に入ったから、上京することにしました。 | Because I got into university, I decided to move to Tokyo. | じょうきょうする | N5 L5 T5 C4 I4 | cloze+teach | yes |
| proceeding to the capital | もしもし、来月上京する予定です。 | Hello, I'm planning to move to Tokyo next month. | じょうきょうする | N4 L5 T5 C3 I3 — もしもし opening feels slightly disconnected from the statement. | teach only | yes |
| collision | 交差点で車が衝突しました。 | Cars collided at the intersection. | しょうとつしました | N5 L5 T5 C3 I3 — Other verbs (止まる, 曲がる) could also fit the blank grammatically. | teach only | yes |
| collision | 車が衝突したから、電車が遅れました。 | Because a car collided, the train was delayed. | しょうとつした | N5 L5 T5 C4 I4 | cloze+teach | yes |
| traffic lights | その信号を右に曲がってください。 | Please turn right at that traffic light. | しんごう | N5 L5 T5 C3 I3 — could also be 角 (corner) in the blank, slightly reducing uniqueness | teach only | yes |
| traffic lights | 信号が赤になりました。 | The traffic light turned red. | しんごう | N5 L5 T5 C5 I3 | cloze+teach | yes |
| traffic lights | 信号が赤だったから、車を止めました。 | Because the traffic light was red, I stopped the car. | しんごう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| ski | 冬に家族でスキーに行きます。 | In winter, we go skiing with family. | すきい | N5 L5 T5 C3 I3 — Winter+family context narrows options somewhat but could still be other winter activities. | teach only | yes |
| ski | 今度スキーがしたいです。 | I want to go skiing next time. | すきい | N5 L5 T5 C2 I2 — Very generic; blank could be filled with many activities/nouns. | teach only | yes |
| ski | 明日一緒にスキーをしませんか。 | Won't you go skiing with me tomorrow? | すきい | N5 L5 T5 C2 I3 — Blank could be many activities like tennis or study, not uniquely ski. | teach only | yes |
| skate | 昨日初めてスケートをしました。 | I skated for the first time yesterday. | すけえと | N5 L5 T5 C2 I3 — Natural sentence but blank could be filled by many other activity nouns. | teach only | yes |
| skate | 今度スケートをしに行きませんか。 | Would you like to go skating sometime? | すけえと | N5 L5 T5 C2 I3 — Natural invitation but context doesn't uniquely force 'skate' over other activities. | teach only | yes |
| to extract | 歯医者で虫歯を抜きました。 | I had a bad tooth extracted at the dentist. | ぬきました | N4 L5 T4 C3 I3 — More natural would be 抜いてもらいました since a dentist does the extraction; other verbs like 治療しました could also fit the blank. | teach only | yes |
| to extract | 朝起きてから、体の力を抜きます。 | After waking up in the morning, I relax my body. | ぬきます | N5 L5 T4 C4 I3 — Idiomatic 力を抜く is well contextualized, though 'relax my body' loses the literal 'extract' nuance. | cloze+teach | yes |
| to wet | 熱がある時、タオルを水で濡らしました。 | When I had a fever, I wet a towel with water. | ぬらしました | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to wet | 雨で服を濡らしてしまいました。 | I ended up getting my clothes wet in the rain. | ぬらして | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to leave (behind, over) | 病気の時、御飯を半分残しました。 | When I was sick, I left half of my rice. | のこしました | N5 L5 T5 C3 I3 — Blank could also be filled with 食べました or similar, reducing recoverability. | teach only | yes |
| to leave (behind, over) | 荷物をホテルに残してもいいですか。 | May I leave my luggage at the hotel? | のこして | N5 L5 T5 C3 I3 — 預けて would also fit naturally in this context, reducing uniqueness of the answer. | teach only | yes |
| to place on | 運転手は荷物を車に乗せてくれました。 | The driver put the luggage on the car for me. | のせて | N5 L5 T5 C3 I3 — 荷物 could also take 積んで, slightly reducing uniqueness of blank. | teach only | yes |
| to place on | 朝、子供を車に乗せて学校へ行きます。 | In the morning, I put my child in the car and go to school. | のせて | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to peek in | 医者は私の喉を覗きました。 | The doctor looked into my throat. | のぞきました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to peek in | 窓から外を覗いてみましたか。 | Did you try peeking outside through the window? | のぞいて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to remove | 医者は悪い部分を手術で除きました。 | The doctor removed the bad part with surgery. | のぞきました | N4 L3 T5 C4 I3 | cloze+teach | yes |
| knock | 部屋に入る前にドアをノックしました。 | I knocked on the door before entering the room. | のっくしました | N5 L5 T5 C3 I3 — Blank could plausibly be other verbs like 開けました, reducing uniqueness. | teach only | yes |
| knock | ホテルの部屋のドアをノックしましたか。 | Did you knock on the hotel room door? | のっくしました | N5 L5 T5 C3 I3 — Similar ambiguity as other door-related verbs could fit the blank. | teach only | yes |
| knock | 入る前にドアをノックしてください。 | Please knock on the door before entering. | のっくして | N5 L5 T5 C3 I3 — Blank could be filled by other verbs like たたいて or 開けて, lowering specificity. | teach only | yes |
| to extend | 朝、体を伸ばしてから朝御飯を食べます。 | In the morning, I stretch my body before eating breakfast. | のばして | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to extend | 旅行の予定をもう一日伸ばしたいです。 | I want to extend the travel schedule by one more day. | のばしたい | N5 L5 T5 C4 I4 — Note: usually written 延ばす for extending schedule, but reading/meaning still work. | cloze+teach | yes |
| co-operation | 会社では協調が大切です。 | Cooperation is important at the company. | きょうちょう | N4 L5 T5 C3 I2 — Generic template sentence; 協力 could also fit the blank. | teach only | yes |
| co-operation | 店員たちが協調しないと、レストランは困ります。 | If the staff don't cooperate, the restaurant will have trouble. | きょうちょう | N4 L4 T5 C3 I4 — Good context but 協力 could also work in the blank. | teach only | yes |
| co-operation | チームのみんなで協調してください。 | Please cooperate as a team. | きょうちょう | N4 L4 T5 C3 I3 — Slightly generic; 協力 is a plausible alternative answer. | teach only | yes |
| limits | 仕事はきりがないから、大変です。 | Work has no end, so it's tough. | きり | N5 L5 T5 C3 I3 — きりがない is idiomatic but 終わり could also fit the blank. | teach only | yes |
| limits | おしゃべりにはきりがありません。 | There's no end to chatting. | きり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| trouble | 彼女は苦もなく試験に通りました。 | She passed the exam without difficulty. | く | N4 L3 T5 C4 I3 — 苦もなく is a natural idiomatic phrase, though 苦労もなく is also possible. | cloze+teach | yes |
| penalty | 彼は重い刑を受けました。 | He received a heavy penalty. | けい | N4 L4 T5 C3 I3 — Other words like 罰 or 判決 could also fit the blank. | teach only | yes |
| penalty | 彼に厳しい刑が決まりました。 | A severe penalty was decided for him. | けい | N4 L4 T5 C3 I3 — Blank could also be filled with 判決 or 罰. | teach only | yes |
| penalty | 刑を受けても、彼は謝りませんでした。 | Even after receiving the penalty, he didn't apologize. | けい | N4 L4 T5 C3 I3 — Blank could plausibly be 罰 or 注意 as well. | teach only | yes |
| sequence of events | 事件の経緯を説明してください。 | Please explain the sequence of events of the incident. | けいい | N5 L5 T5 C3 I3 — 経緯 could be swapped with 内容 or 状況, reducing uniqueness. | teach only | yes |
| sequence of events | その問題の経緯はまだ分かりません。 | The circumstances of that problem are still unknown. | けいい | N4 L5 T4 C2 I3 — Blank could plausibly be 原因 or 詳細 instead of 経緯. | teach only | yes |
| sequence of events | 経緯を聞いてから、決めましょう。 | Let's decide after hearing the background. | けいい | N4 L5 T4 C2 I2 — Very generic; blank could be 話, 事情, or 理由 as well as 経緯. | teach only | yes |
| opportunity | 病気が彼の生活を変える契機になりました。 | His illness became the turning point that changed his life. | けいき | N4 L4 T4 C3 I3 — 転機 or きっかけ could also fit the blank. | teach only | yes |
| opportunity | この失敗を契機にして、もっと頑張ります。 | I'll try harder, taking this failure as an opportunity. | けいき | N5 L4 T5 C5 I4 — Fixed idiomatic pattern strongly cues 契機. | cloze+teach | yes |
| form | 会社の形態が変わりました。 | The company's form has changed. | けいたい | N4 L4 T5 C2 I3 — Other words like 経営形態や業態も入り得るため一意性がやや低い | teach only | yes |
| form | この動物は独特な形態をしています。 | This animal has a unique form. | けいたい | N5 L4 T5 C3 I4 — 形も自然に入り得るため完全な一意性はやや弱い | teach only | yes |
| form | 新しい形態の教育が必要です。 | A new form of education is needed. | けいたい | N4 L3 T5 C2 I3 — 形式や方法など他語も文脈に合うため一意性が低い | teach only | yes |
| doing | 雨でも試合は決行します。 | The match will go ahead even if it rains. | けっこう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| doing | 台風でも旅行を決行するつもりです。 | I intend to go through with the trip even if there's a typhoon. | けっこう | N5 L5 T5 C3 I4 — 強行 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| character | 彼女の性格はとても明るいです。 | Her personality is very cheerful. | せいかく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| character | あなたの性格はどんなですか。 | What is your personality like? | せいかく | N4 L5 T5 C3 I2 — Blank could be filled by other nouns like 趣味 or 生活, not uniquely 性格. | teach only | yes |
| accurate | この時計は正確です。 | This clock is accurate. | せいかく | N5 L5 T5 C2 I1 — Generic template sentence; blank could be filled with many adjectives (便利, 高い, etc.) | teach only | yes |
| accurate | 正確な地図を見せてください。 | Please show me an accurate map. | せいかく | N5 L5 T5 C3 I3 — Context suggests accuracy but words like 詳しい or 新しい could also fit. | teach only | yes |
| accurate | 彼の答えは正確でしたか。 | Was his answer accurate? | せいかく | N5 L5 T5 C3 I3 — 正しい could also plausibly fill the blank, slightly reducing uniqueness. | teach only | yes |
| clean | このレストランはとても清潔です。 | This restaurant is very clean. | せいけつ | N4 L5 T5 C2 I2 — Generic template; きれい also fits the blank equally well. | teach only | yes |
| clean | 部屋を清潔にしてください。 | Please keep the room clean. | せいけつ | N5 L4 T5 C3 I3 — きれい could also fill the blank, slightly reducing uniqueness. | teach only | yes |
| clean | 台所はいつも清潔でした。 | The kitchen was always clean. | せいけつ | N5 L4 T5 C3 I3 — きれい or 静か could also fit the blank. | teach only | yes |
| official | これは正式な書類です。 | This is an official document. | せいしき | N4 L5 T5 C2 I1 — generic これは＿です template, other adjectives could fit | teach only | yes |
| official | 正式に会社をやめることにしました。 | I decided to officially quit the company. | せいしき | N5 L4 T5 C4 I4 | cloze+teach | yes |
| official | 正式な発表はいつですか。 | When is the official announcement? | せいしき | N5 L5 T5 C4 I4 | cloze+teach | yes |
| luxury | 休みの日に贅沢なホテルに泊まりました。 | I stayed at a luxurious hotel on my day off. | ぜいたく | N5 L5 T5 C3 I4 | teach only | yes |
| luxury | そんな贅沢はできません。 | I can't afford such a luxury. | ぜいたく | N5 L5 T5 C3 I4 | teach only | yes |
| luxury | たまには贅沢をしたいです。 | I want to indulge in a little luxury once in a while. | ぜいたく | N5 L5 T5 C2 I3 — Blank could be filled by many other nouns like 旅行 or 運動. | teach only | yes |
| positive | 彼は仕事にとても積極的です。 | He is very proactive about his work. | せっきょくてき | N5 L5 T5 C2 I3 — blank could be filled by other na-adjectives like 熱心・真剣 | teach only | yes |
| positive | もっと積極的に参加してください。 | Please participate more actively. | せっきょくてき | N5 L5 T5 C3 I3 — other adverbs like 自主的・熱心 could also fit | teach only | yes |
| positive | 会議で積極的に意見を言いました。 | I actively voiced my opinion at the meeting. | せっきょくてき | N5 L5 T5 C4 I4 — strong collocation with 意見を言う narrows the answer well | cloze+teach | yes |
| definitely | 明日は絶対に晴れます。 | It will definitely be sunny tomorrow. | ぜったい | N5 L5 T5 C3 I3 — きっと could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| definitely | 絶対に遅れないでください。 | Please don't be late no matter what. | ぜったい | N5 L4 T5 C4 I4 | cloze+teach | yes |
| definitely | これは絶対に秘密です。 | This is absolutely a secret. | ぜったい | N4 L5 T5 C3 I2 — Generic template sentence; other adverbs like 完全に could also fit. | teach only | yes |
| regular | これは正規の方法ではありません。 | This is not the official method. | せいき | N4 L5 T4 C2 I2 — Other words like 正式・正しい could also fill the blank. | teach only | yes |
| regular | 彼は正規の学生です。 | He is a regular student. | せいき | N4 L5 T5 C3 I2 — Generic template sentence, but word choice fairly specific. | teach only | yes |
| elaborate | この時計は精巧です。 | This watch is elaborately made. | せいこう | N4 L5 T4 C2 I2 — Many adjectives could fill the blank (きれい, 高価 etc.), reducing recoverability. | teach only | yes |
| elaborate | あの機械は精巧ではありません。 | That machine is not elaborate. | せいこう | N4 L5 T4 C2 I2 — Negative form still allows many other adjectives to fit the blank. | teach only | yes |
| elaborate | 精巧な人形を見せてください。 | Please show me the elaborate doll. | せいこう | N4 L5 T4 C3 I3 — Slightly more specific context (doll) narrows options but still not unique. | teach only | yes |
| obvious | 遅刻したら謝るのは当然です。 | It's natural to apologize if you're late. | とうぜん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| obvious | 道が分からなかったら聞くのは当然ですか。 | Is it obvious that you should ask when you don't know the way? | とうぜん | N4 L5 T4 C3 I3 — 当たり前 could also fit the blank, reducing uniqueness. | teach only | yes |
| medium | 彼の成績は並です。 | His grades are average. | なみ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| medium | 並のホテルに泊まりました。 | We stayed at an average hotel. | なみ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| feel relieved | 電車に間に合ってほっとしました。 | I felt relieved that I made it to the train in time. | ほっと | N5 L5 T5 C4 I4 | cloze+teach | yes |
| feel relieved | 子供が元気に帰ってきて、ほっとしましたか。 | Did you feel relieved when your child came home safe and sound? | ほっと | N5 L5 T5 C5 I5 | cloze+teach | yes |
| superiority | 試験で優をもらいました。 | I got an excellent grade on the exam. | ゆう | N5 L5 T5 C3 I3 — Other nouns like 満点 or いい点 could also fit the blank. | teach only | yes |
| superiority | 先週の試験は優ではありませんでした。 | Last week's exam wasn't an excellent grade. | ゆう | N4 L5 T5 C3 I2 — Slightly generic negative-grade sentence; blank still guessable by other grade words. | teach only | yes |
| organic | 有機野菜を買ってください。 | Please buy organic vegetables. | ゆうき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| organic | 母は有機の卵を使います。 | My mother uses organic eggs. | ゆうき | N4 L5 T5 C2 I3 — Many adjectives (fresh, raw, white, etc.) could fill the blank before 卵, weakening cloze recoverability. | teach only | yes |
| style | 弟は知らない振りをしました。 | My younger brother pretended not to know. | ふり | N5 L4 T5 C4 I3 | cloze+teach | yes |
| style | 彼女は忙しい振りをしています。 | She is pretending to be busy. | ふり | N5 L4 T5 C4 I3 | cloze+teach | yes |
| style | 疲れた振りをしないでください。 | Please don't pretend to be tired. | ふり | N5 L4 T5 C4 I3 | cloze+teach | yes |
| care | あの犬を保護しましょう。 | Let's take in and care for that dog. | ほご | N4 L5 T4 C3 I3 — Blank could also be filled by 助け or other verbs, not fully unique. | teach only | yes |
| compensation | 会社が補償してくれるから安心です。 | I'm relieved because the company will compensate us. | ほしょう | N5 L4 T5 C3 I3 — 補償 and 保証 share the same pronunciation, so context doesn't fully disambiguate which word is intended. | teach only | yes |
| mass communication | マスコミがそのニュースを伝えます。 | The mass media will report that news. | ますこみ | N4 L5 T5 C3 I2 | teach only | yes |
| mass communication | マスコミはまだこの話を知りません。 | The media doesn't know this story yet. | ますこみ | N4 L5 T5 C3 I3 | teach only | yes |
| message | 友達にメッセージを送りました。 | I sent a message to my friend. | めっせえじ | N5 L5 T5 C3 I2 — Other nouns like メール or 手紙 could also fit the blank. | teach only | yes |
| opposition party | 野党はその法律に賛成しませんでした。 | The opposition party did not agree to that law. | やとう | N5 L5 T5 C3 I3 — Natural sentence but blank could be filled by other political nouns (与党, 議員, etc.). | teach only | yes |
| explosion | 工場で爆発がありました。 | There was an explosion at the factory. | ばくはつ | N5 L5 T5 C3 I3 — Blank could also be filled by 火事 or 事故, so context doesn't force 爆発 uniquely. | teach only | yes |
| explosion | 昨日の爆発のニュースを見ましたか。 | Did you see the news about yesterday's explosion? | ばくはつ | N5 L5 T5 C3 I3 — Similar ambiguity: 事故, 火事, 地震 could also fit the blank. | teach only | yes |
| (personal) bankruptcy | あの会社は去年、破産しました。 | That company went bankrupt last year. | はさん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| (personal) bankruptcy | お金を使いすぎて、破産することになりました。 | I spent too much money and ended up going bankrupt. | はさん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| discovery | 誰がこの島を発見しましたか。 | Who discovered this island? | はっけん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| discovery | 新しい星を発見したいです。 | I want to discover a new star. | はっけん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| firing | ロケットの発射はいつの予定ですか。 | When is the rocket launch scheduled for? | はっしゃ | N5 L5 T4 C4 I4 — 打ち上げ could also fit the blank, slightly reducing uniqueness. | cloze+teach | yes |
| development | 子供の心は段々発達します。 | A child's mind gradually develops. | はったつ | N4 L4 T5 C3 I2 — Could also be 成長 (grow) in this context, slightly reducing uniqueness. | teach only | yes |
| development | 医学が発達すればするほど、病気が治りやすくなります。 | The more medicine develops, the easier it becomes to cure illnesses. | はったつ | N5 L4 T5 C3 I4 — 進歩 could also plausibly fill the blank, slightly reducing cloze certainty. | teach only | yes |
| by chance | 今朝、道でばったり先生に会いました。 | This morning I bumped into my teacher on the street by chance. | ばったり | N5 L4 T5 C4 I4 | cloze+teach | yes |
| invention | 新しい道具を発明できたらいいですね。 | It would be nice if I could invent a new tool. | はつめい | N5 L5 T5 C4 I3 — 開発 could also plausibly fit the blank, slightly reducing recoverability. | cloze+teach | yes |
| poem | 土曜日に詩を書きました。 | I wrote a poem on Saturday. | し | N5 L5 T5 C3 I3 — Blank could be filled by many nouns (letter, diary, etc.), reducing cloze uniqueness. | teach only | yes |
| poem | 旅行の間に詩を作りたいです。 | I want to write a poem during the trip. | し | N4 L5 T5 C2 I3 — '作りたい' pairs with many nouns (plan, memory, etc.), so the blank isn't uniquely 詩. | teach only | yes |
| poem | 今朝、この詩を読みましたか。 | Did you read this poem this morning? | し | N5 L5 T5 C3 I3 — Reading matches; blank could plausibly be book, letter, or newspaper too. | teach only | yes |
| square | 紙を四角に切りました。 | I cut the paper into a square. | しかく | N4 L5 T5 C3 I3 — other shape words (丸, 三角) could also fit the blank | teach only | yes |
| stimulus | もっと刺激が欲しいです。 | I want more stimulus. | しげき | N4 L5 T4 C2 I2 — generic sentence, many words could fill the blank | teach only | yes |
| resources | この国には資源が少ないです。 | This country has few resources. | しげん | N5 L5 T5 C3 I3 | teach only | yes |
| resources | 水は大切な資源ですか。 | Is water an important resource? | しげん | N4 L5 T5 C2 I3 — Blank could be filled by many nouns like 材料, 商品, etc. | teach only | yes |
| resources | 資源をもっと大切にしたいです。 | I want to treasure resources more. | しげん | N4 L5 T5 C2 I2 — Generic sentence; blank could fit many nouns like 自然, 環境, 時間. | teach only | yes |
| event | 昨夜、駅で事件がありました。 | There was an incident at the station last night. | じけん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| event | その事件を知っていますか。 | Do you know about that incident? | じけん | N5 L5 T5 C2 I2 — blank could fit many nouns like 話, 人, ニュース | teach only | yes |
| event | 交番の警官がその事件を調べています。 | The police officer at the box is investigating that incident. | じけん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| oxidation | 鉄はすぐに酸化します。 | Iron oxidizes quickly. | さんか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| oxidation | この金属はなぜ酸化しますか。 | Why does this metal oxidize? | さんか | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other verbs like 錆びます or 変色します. | teach only | yes |
| oxidation | 空気に当たると酸化しますから、気をつけてください。 | It oxidizes when exposed to air, so please be careful. | さんか | N5 L5 T5 C5 I4 | cloze+teach | yes |
| qualifications | あなたは英語の資格を持っていますか。 | Do you have an English qualification? | しかく | N5 L5 T5 C3 I3 | teach only | yes |
| qualifications | 医者になるためには資格が必要です。 | You need a qualification to become a doctor. | しかく | N5 L5 T5 C3 I3 | teach only | yes |
| qualifications | 資格を取りたいから、毎日頑張っています。 | Since I want to get a qualification, I work hard every day. | しかく | N5 L4 T5 C3 I3 | teach only | yes |
| command | 彼は音楽の授業で指揮をします。 | He conducts during music class. | しき | N4 L5 T5 C3 I3 | teach only | yes |
| command | 次は私が指揮をしましょうか。 | Shall I conduct next time? | しき | N4 L5 T4 C2 I2 — Blank could be filled by many nouns without more context. | teach only | yes |
| magnetism | このカードには磁気が入っています。 | This card has magnetism in it. | じき | N4 L5 T5 C3 I3 — Other nouns like 情報 could also fit the blank. | teach only | yes |
| magnetism | 地球には磁気がありますか。 | Does the earth have magnetism? | じき | N4 L5 T5 C3 I3 — 重力 or other physical properties could also fit the blank. | teach only | yes |
| magnetism | 磁気が強いですから、カードを近くに置かないでください。 | The magnetism is strong, so please don't put your card nearby. | じき | N5 L5 T5 C4 I4 | cloze+teach | yes |
| font | どの字体が好きですか。 | Which font do you like? | じたい | N4 L5 T5 C4 I3 | cloze+teach | yes |
| refusal | 彼はパーティーへの招待を辞退しました。 | He declined the invitation to the party. | じたい | N4 L4 T5 C4 I4 | cloze+teach | yes |
| refusal | 忙しいですから、辞退します。 | Since I'm busy, I'll decline. | じたい | N4 L4 T4 C3 I3 — context suggests declining but could also be 欠席する等 | teach only | yes |
| wish | 私の志望は医者になることです。 | My wish is to become a doctor. | しぼう | N4 L5 T4 C2 I2 — Blank could also be 夢/目標/希望, reducing recoverability. | teach only | yes |
| to put in order | 授業の後で教室が片付きます。 | The classroom gets tidied up after class. | かたづきます | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to put in order | テーブルの上が片付いたら、料理を出しましょう。 | Once the table is cleared, let's serve the food. | かたづいたら | N4 L5 T5 C5 I4 — Reading uses てえぶる instead of standard てーぶる, minor inconsistency. | cloze+teach | yes |
| to dry | 服を外で乾かします。 | I dry my clothes outside. | かわかします | N5 L5 T5 C3 I3 — 干す could also fit the blank, reducing uniqueness. | teach only | yes |
| to dry | お風呂の後で髪を乾かした。 | I dried my hair after the bath. | かわかした | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to dry | 雨で濡れた靴を乾かしたいです。 | I want to dry my shoes that got wet in the rain. | かわかしたい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| rest | 授業の後で少し休憩します。 | I rest a little after class. | きゅうけいします | N5 L5 T5 C3 I2 — Could also fit 休みます; slightly generic template sentence. | teach only | yes |
| rest | ハイキングのとき、休憩した。 | We took a rest during the hiking trip. | きゅうけいした | N5 L5 T5 C4 I4 | cloze+teach | yes |
| rest | 疲れたので、少し休憩したいです。 | Since I'm tired, I want to rest a bit. | きゅうけいしたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to cut well | このナイフはよく切れます。 | This knife cuts well. | きれます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to cut well | 新しいはさみがとてもよく切れた。 | The new scissors cut really well. | きれた | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to cut well | 教室で使うはさみはあまり切れない。 | The scissors used in the classroom don't cut well. | きれない | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to rot | 冷蔵庫に入れなかったので、魚が腐った。 | Since I didn't put it in the fridge, the fish rotted. | くさった | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to rot | このパンは腐っているらしいです。 | This bread seems to be rotten. | くさっている | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to put together | 二人一組でチームを組みます。 | We form teams in pairs. | くみます | N4 L5 T5 C3 I3 — 二人一組 already contains 組, making the blank guessable but also other verbs like 作る could fit. | teach only | yes |
| to put together | 彼は腕を組んで話を聞いていた。 | He was listening with his arms crossed. | くんで | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to put together | 旅行の計画を一緒に組みたいです。 | I want to put together a travel plan together. | くみたい | N4 L5 T4 C3 I3 — 立てる could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| to serve sake | 父にお酒を酌みます。 | I pour sake for my father. | くみます | N4 L5 T5 C3 I2 — Slightly generic but grammatically fine; 注ぐ could also fit the blank contextually. | teach only | yes |
| to repeat | 先生は同じ言葉を何度も繰り返します。 | The teacher repeats the same words many times. | くりかえします | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to repeat | 何度も同じ歌を繰り返して聞いた。 | I listened to the same song over and over. | くりかえして | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to repeat | 同じ質問を繰り返さないでください。 | Please don't repeat the same question. | くりかえさないで | N5 L5 T5 C4 I3 | cloze+teach | yes |
| delicate | 彼の返事は微妙でした。 | His reply was ambiguous. | びみょう | N4 L5 T4 C3 I2 — Slightly generic but natural; other adjectives (曖昧, 冷たい) could also fit the blank. | teach only | yes |
| wrong | この授業では遅刻は不可です。 | Being late is not allowed in this class. | ふか | N4 L4 T4 C3 I3 — Other words like 禁止 or だめ could also fill the blank, reducing uniqueness. | teach only | yes |
| abundance | この図書館は本が豊富です。 | This library has an abundance of books. | ほうふ | N4 L5 T5 C3 I3 | teach only | yes |
| abundance | 先生の知識は豊富ですか。 | Is the teacher's knowledge abundant? | ほうふ | N4 L5 T5 C3 I3 | teach only | yes |
| dim | 疲れて頭がぼんやりしています。 | I'm tired and my head feels dim. | ぼんやり | N5 L4 T4 C3 I4 — Translation 'dim' is a loose gloss; 'foggy/blank' would be more natural for ぼんやり, but the sentence itself is natural and reading matches. | teach only | yes |
| poor | 昔、この村はとても貧しかったです。 | Long ago, this village was very poor. | まずしかった | N4 L5 T5 C2 I4 — Many adjectives (rich, small, poor) could fit the blank. | teach only | yes |
| poor | あの家族は貧しいですか。 | Is that family poor? | まずしい | N4 L5 T5 C2 I2 — Generic question; blank could be filled by many adjectives (rich, happy, etc.). | teach only | yes |
| poor | 貧しいから、新しい服が買えません。 | Since we're poor, we can't buy new clothes. | まずしい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| dazzling | 朝の光がまぶしいです。 | The morning light is dazzling. | まぶしい | N5 L5 T5 C3 I2 — Could also be 明るい, reducing exact recoverability. | teach only | yes |
| dazzling | 窓の外の光はまぶしいですか。 | Is the light outside the window dazzling? | まぶしい | N4 L5 T5 C3 I2 — Could also be 明るい, reducing exact recoverability. | teach only | yes |
| basic | 仕事の基本を教えてください。 | Please teach me the basics of the job. | きほん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| basic | 基本を知らないから、失敗しました。 | Because I didn't know the basics, I failed. | きほん | N4 L5 T5 C4 I3 | cloze+teach | yes |
| settlement | これは会社の決まりです。 | This is a company rule. | きまり | N4 L5 T5 C3 I2 — Generic template sentence; blank could be filled by many nouns (規則, ルール, etc.). | teach only | yes |
| settlement | 店の決まりがよく分かりません。 | I don't really understand the store's rules. | きまり | N4 L5 T5 C3 I3 — Blank still plausible with several nouns like システム or メニュー. | teach only | yes |
| settlement | 決まりがあるから、電車で電話しません。 | Because there's a rule, I don't use the phone on the train. | きまり | N4 L5 T4 C4 I4 — Context about phone use on trains strongly implies a 'rule', good specificity. | cloze+teach | yes |
| duty | 働くことは国民の義務です。 | Working is a duty of citizens. | ぎむ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| duty | 客はお金を払う義務はありません。 | Customers have no obligation to pay money. | ぎむ | N4 L5 T5 C3 I3 — could also be 必要 or 権利 in context, slightly reduces cloze specificity | teach only | yes |
| reverse | 逆の電車に乗ってしまいました。 | I accidentally got on the train going the opposite direction. | ぎゃく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| reverse | 順番が逆になってはいけません。 | The order must not be reversed. | ぎゃく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| reverse | これは逆の意味ですか。 | Does this mean the opposite? | ぎゃく | N4 L5 T5 C3 I2 — generic template sentence, and 反対 could also fill the blank | teach only | yes |
| absorption | 新しい技術を吸収してください。 | Please absorb the new technology. | きゅうしゅうして | N4 L5 T5 C3 I3 — Other verbs like 学んで or 取り入れて could also fit the blank. | teach only | yes |
| absorption | このタオルはよく水を吸収します。 | This towel absorbs water well. | きゅうしゅうします | N5 L5 T5 C5 I4 | cloze+teach | yes |
| relief | 警察が救助活動をしています。 | The police are carrying out rescue operations. | きゅうじょ | N4 L5 T4 C3 I3 — Gloss 'relief' is misleading; 救助 means 'rescue', and other words like 消火/捜査 could also fit the blank. | teach only | yes |
| relief | 事故があったから、救助隊が来ました。 | Because there was an accident, the rescue team came. | きゅうじょ | N4 L5 T4 C3 I3 — Gloss 'relief' is inaccurate (should be 'rescue'); '救助隊' could be confused with '救急隊' or '消防隊'. | teach only | yes |
| relief | 川で溺れた人を救助しました。 | They rescued a person who was drowning in the river. | きゅうじょしました | N5 L5 T4 C5 I4 — Gloss 'relief' is inaccurate; sentence itself clearly forces '救助' as the answer. | cloze+teach | yes |
| supply | 野菜の供給が少ないです。 | The supply of vegetables is low. | きょうきゅう | N4 L5 T5 C2 I2 — Blank could be filled with 量, 生産量, etc., not uniquely 供給. | teach only | yes |
| supply | 需要が多いから、供給を増やします。 | Because demand is high, we will increase supply. | きょうきゅう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| Go | おじいさんは毎日碁をします。 | My grandfather plays Go every day. | ご | N5 L5 T5 C3 I3 — Blank could be filled with many activities (ゲーム, 運動, etc.), reducing uniqueness. | teach only | yes |
| Go | 今度、碁をしませんか。 | Would you like to play Go sometime? | ご | N5 L5 T5 C3 I4 — Invitation context helps but 'をしませんか' could fit many games. | teach only | yes |
| Go | 碁は難しいですか。 | Is Go difficult? | ご | N4 L5 T5 C2 I2 — Very generic sentence; subject blank could be almost any noun. | teach only | yes |
| good luck | 幸運だったから、いい仕事が見つかりました。 | Because I was lucky, I found a good job. | こううん | N4 L5 T5 C3 I3 | teach only | yes |
| good luck | 彼は幸運な人です。 | He is a lucky person. | こううん | N4 L5 T5 C2 I2 — Generic template sentence; many na-adjectives could fill the blank. | teach only | yes |
| good luck | 幸運を信じますか。 | Do you believe in luck? | こううん | N4 L5 T5 C3 I3 — Other luck-related nouns like 運 or 奇跡 could also fit. | teach only | yes |
| effect | この薬は効果があります。 | This medicine is effective. | こうか | N5 L5 T5 C3 I2 — blank could also be filled by other nouns like 副作用 | teach only | yes |
| effect | 運動の効果はありますか。 | Is there an effect from exercising? | こうか | N4 L5 T5 C3 I2 — blank somewhat guessable but other nouns like 意味 could fit | teach only | yes |
| effect | 効果がないから、薬を変えます。 | Since it has no effect, I'll change medicines. | こうか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| coin | 財布に硬貨が入っています。 | There are coins in my wallet. | こうか | N5 L5 T5 C3 I2 — Blank could also be filled by お金 or 小銭, not uniquely 硬貨. | teach only | yes |
| coin | 硬貨を数えてくれませんか。 | Could you count the coins for me? | こうか | N5 L5 T5 C3 I3 — Blank could also be お金 or 枚数 etc., not uniquely 硬貨. | teach only | yes |
| high price | このカメラは高価です。 | This camera is expensive. | こうか | N4 L5 T5 C2 I2 — Generic template sentence; many na-adjectives could fill blank. | teach only | yes |
| high price | 高価だから、買いません。 | Since it's expensive, I won't buy it. | こうか | N4 L5 T5 C2 I2 — Blank could be filled by many adjectives (unclear, expensive, etc.). | teach only | yes |
| high price | そのアクセサリーは高価ですか。 | Is that accessory expensive? | こうか | N4 L5 T5 C2 I2 — Generic question template; blank not uniquely determined. | teach only | yes |
| exchange | 店で靴を交換しました。 | I exchanged the shoes at the store. | こうかん | N5 L5 T5 C3 I3 — could also be 返品/購入 in the blank, slightly reduces uniqueness | teach only | yes |
| exchange | 電話番号を交換しませんか。 | Shall we exchange phone numbers? | こうかん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| exchange | このシャツを交換できますか。 | Can I exchange this shirt? | こうかん | N5 L5 T5 C3 I3 — 返品 could also fit the blank | teach only | yes |
| advertisement | 新聞に広告があります。 | There is an advertisement in the newspaper. | こうこく | N5 L5 T5 C3 I2 — Blank could also be filled by other nouns like 記事 or 写真. | teach only | yes |
| advertisement | この広告を見ましたか。 | Did you see this advertisement? | こうこく | N5 L5 T5 C2 I2 — Very generic; blank could be almost any viewable noun (映画, 写真, etc.). | teach only | yes |
| advertisement | 広告を見たから、この店に来ました。 | I came to this shop because I saw the advertisement. | こうこく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| plant | 会社の机に植物を置きませんか。 | Shall we put a plant on the office desk? | しょくぶつ | N4 L5 T5 C2 I3 — Blank could be filled by many objects (book, photo, flower), not uniquely 'plant'. | teach only | yes |
| plant | この植物は日光が好きだから、窓の側に置きます。 | This plant likes sunlight, so I put it by the window. | しょくぶつ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| nest | 鳥が木の上に巣を作りました。 | A bird made a nest on top of the tree. | す | N5 L5 T5 C4 I3 | cloze+teach | yes |
| nest | あの木に鳥の巣がありますか。 | Is there a bird's nest in that tree? | す | N5 L5 T5 C4 I3 | cloze+teach | yes |
| nest | 猫が来るから、鳥は高い所に巣を作ります。 | Because cats come, birds build nests in high places. | す | N5 L5 T5 C5 I4 | cloze+teach | yes |
| coal | 昔は石炭で家を暖めましたから、今より大変でした。 | In the past, people heated their houses with coal, so it was harder than now. | せきたん | N5 L5 T5 C3 I4 | teach only | yes |
| coal | 今はもう石炭を使いません。 | We don't use coal anymore now. | せきたん | N4 L5 T5 C2 I2 — Generic sentence; many fuel words could fill the blank. | teach only | yes |
| coal | 工場で石炭を使っています。 | They are using coal at the factory. | せきたん | N4 L5 T5 C2 I2 — Blank could be filled by many materials besides coal. | teach only | yes |
| storm | 嵐が来るから、今日は出かけません。 | A storm is coming, so I won't go out today. | あらし | N5 L5 T5 C3 I3 — Other weather words (雨, 台風) could also fit the blank. | teach only | yes |
| storm | 嵐のため、電車が止まりました。 | The trains stopped because of the storm. | あらし | N5 L5 T5 C3 I3 — Blank could be filled by other causes like 台風 or 事故. | teach only | yes |
| storm | 明日は嵐になりますか。 | Will it turn into a storm tomorrow? | あらし | N5 L5 T5 C3 I3 — Could also be 雨 or 台風 in the blank. | teach only | yes |
| bubble | 石鹸で洗うと泡がたくさん出ます。 | When you wash with soap, lots of bubbles come out. | あわ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| bubble | この洗剤はあまり泡が出ません。 | This detergent doesn't produce much foam. | あわ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| living thing | 海にはたくさんの生き物がいます。 | There are many living creatures in the sea. | いきもの | N5 L5 T5 C3 I3 — Other words like 魚 or 動物 could also fit the blank. | teach only | yes |
| living thing | この川にはどんな生き物がいますか。 | What kind of living creatures are in this river? | いきもの | N5 L5 T5 C3 I3 — Words like 魚 or 動物 could also fill the blank. | teach only | yes |
| living thing | 生き物が好きだから、動物園で働きたいです。 | Because I like living creatures, I want to work at the zoo. | いきもの | N5 L5 T5 C3 I4 — 動物 could also plausibly fill the blank given the zoo context. | teach only | yes |
| rice-plant | 秋になると、稲が黄色くなります。 | When autumn comes, the rice plants turn yellow. | いね | N5 L5 T5 C3 I3 — other things also turn yellow in autumn, so blank isn't uniquely 稲 | teach only | yes |
| rice-plant | あの田の稲はもう育ちましたか。 | Have the rice plants in that field already grown? | いね | N5 L5 T5 C5 I4 — 田 strongly cues 稲, making the blank highly recoverable | cloze+teach | yes |
| rice-plant | 雨が少なかったから、今年は稲があまり育ちませんでした。 | Because there was little rain, the rice plants didn't grow much this year. | いね | N5 L5 T5 C2 I3 — could refer to many crops, not uniquely rice plants | teach only | yes |
| rock | あの岩に座って休みましょう。 | Let's sit on that rock and rest. | いわ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| a little ) | 塩は多少入れてください。 | Please add a little salt. | たしょう | N5 L4 T5 C3 I3 — 少し/ちょっと could also fit the blank | teach only | yes |
| a little ) | 熱が多少下がりました。 | My fever went down a little. | たしょう | N5 L4 T5 C3 I3 — 少し could also fit the blank | teach only | yes |
| a little ) | 多少雨が降っても、公園へ行きませんか。 | Even if it rains a little, shall we go to the park? | たしょう | N5 L4 T5 C3 I4 — 少し could also fit, though 多少〜ても is a natural idiom | teach only | yes |
| only | 卵はたった三つしか残っていません。 | There are only three eggs left. | たった | N5 L5 T5 C3 I3 — もう could also fit the blank, slightly reducing recoverability. | teach only | yes |
| only | たった五分で朝御飯の準備が終わりました。 | Breakfast preparation finished in just five minutes. | たった | N5 L5 T5 C4 I3 | cloze+teach | yes |
| only | たった一つの薬で頭痛が治るらしいです。 | It seems just one medicine cures the headache. | たった | N4 L5 T5 C3 I4 — この一つ or synonyms like わずか could also plausibly fill the blank. | teach only | yes |
| bunch | 台所の隅に新聞の束が置いてあります。 | There's a bundle of newspapers placed in the corner of the kitchen. | たば | N5 L5 T5 C5 I4 | cloze+teach | yes |
| ton | この米は一トンぐらいありますか。 | Does this rice weigh about one ton? | とん | N4 L5 T5 C3 I2 — Unit word could be replaced by other measure words, reducing exact recoverability. | teach only | yes |
| ton | トラックは五トンまで荷物を積めるそうです。 | I hear the truck can load up to five tons of cargo. | とん | N5 L4 T5 C3 I3 — Blank could be filled by other weight units (kg, pounds) without context forcing 'ton'. | teach only | yes |
| ton | 工場で百トンの鉄を運ぶ予定です。 | We plan to carry a hundred tons of iron at the factory. | とん | N4 L5 T5 C3 I2 — Generic factory sentence; unit word not uniquely determined by context. | teach only | yes |
| value | 古い時計の値が上がったらしいです。 | It seems the value of the old clock went up. | ね | N5 L5 T5 C5 I4 | cloze+teach | yes |
| percent | このシャツは三十パーセント安くなっています。 | This shirt is now thirty percent cheaper. | ぱあせんと | N5 L5 T5 C4 I4 | cloze+teach | yes |
| percent | 手術の成功する割合は九十パーセントだそうです。 | I hear the success rate of the surgery is ninety percent. | ぱあせんと | N5 L4 T5 C4 I4 | cloze+teach | yes |
| percent | テストで八十パーセント取れたらいいです。 | It would be good if I could get eighty percent on the test. | ぱあせんと | N5 L4 T5 C4 I4 | cloze+teach | yes |
| width | この道の幅は狭いですね。 | This road's width is narrow, isn't it. | はば | N5 L5 T5 C5 I2 | cloze+teach | yes |
| width | テーブルの幅を計ってから買ってください。 | Please measure the table's width before buying it. | はば | N4 L5 T5 C5 I3 — Reading uses 'てえぶる' instead of standard 'てーぶる' for long vowel in katakana word. | cloze+teach | yes |
| width | 川の幅がどのくらいか調べませんか。 | Shall we find out how wide the river is? | はば | N5 L5 T5 C5 I3 | cloze+teach | yes |
| juice | 毎朝、冷たいジュースを飲みます。 | I drink cold juice every morning. | じゅうす | N5 L5 T5 C2 I2 — Blank could be filled by many drink words (water, tea, coffee). | teach only | yes |
| juice | 喉が渇いたから、ジュースが欲しいです。 | My throat is dry, so I want juice. | じゅうす | N5 L5 T4 C2 I3 — Translation slightly stiff ('My throat is dry' vs 'I'm thirsty'); blank still fits many drinks. | teach only | yes |
| juice | 旅行のとき、ジュースを買いました。 | I bought juice during the trip. | じゅうす | N4 L5 T5 C1 I2 — Very generic context; almost any noun could fill the blank. | teach only | yes |
| provisions | 台風の前に、食糧を買っておきました。 | I bought provisions in advance before the typhoon. | しょくりょう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| provisions | 山に登る前に、食糧を準備することにしました。 | I decided to prepare provisions before climbing the mountain. | しょくりょう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| provisions | 食糧が少なくて心配です。 | I'm worried because there are few provisions. | しょくりょう | N4 L5 T5 C3 I3 — Context is generic enough that other food-related words could fit the blank. | teach only | yes |
| vinegar | 母はサラダに酢をかけます。 | My mother puts vinegar on the salad. | す | N5 L5 T5 C2 I2 — Blank could be filled by many condiments (dressing, oil, soy sauce), not uniquely vinegar. | teach only | yes |
| vinegar | 酢を入れすぎて、料理が酸っぱくなってしまいました。 | I put in too much vinegar, and the dish became too sour. | す | N5 L4 T5 C5 I4 | cloze+teach | yes |
| vinegar | この料理には酢が必要です。 | This dish needs vinegar. | す | N4 L5 T5 C2 I2 — Generic sentence; many seasonings could fit the blank without more context. | teach only | yes |
| soup | 毎朝、温かいスープを飲みます。 | I drink warm soup every morning. | すうぷ | N5 L5 T5 C2 I2 — Blank could be filled with many warm drinks, not uniquely soup. | teach only | yes |
| soup | 風邪を引いたとき、スープが飲みたくなります。 | When I catch a cold, I start wanting soup. | すうぷ | N5 L4 T5 C2 I3 — Many drinks (tea, water, medicine) could fit the blank when sick. | teach only | yes |
| soup | 昨夜、野菜スープを作りました。 | Last night, I made vegetable soup. | すうぷ | N5 L5 T5 C3 I3 — 野菜 could precede other words like ジュース or 炒め, slightly reducing uniqueness. | teach only | yes |
| ice cream | 子供たちは夏になるとアイスクリームを食べたがります。 | Children want to eat ice cream when summer comes. | あいすくりいむ | N5 L5 T5 C2 I4 — Blank could be filled by many foods (watermelon, juice, etc.), not uniquely ice cream. | teach only | yes |
| ice cream | 暑いから、アイスクリームが食べたいです。 | It's hot, so I want to eat ice cream. | あいすくりいむ | N5 L5 T5 C2 I3 — Being hot doesn't uniquely cue ice cream; many foods/drinks fit. | teach only | yes |
| oil | 卵を焼くとき、油を使います。 | I use oil when frying eggs. | あぶら | N5 L5 T5 C3 I3 — Could also be バター or 塩, slightly ambiguous. | teach only | yes |
| oil | 油が古くなったので、捨てました。 | The oil got old, so I threw it away. | あぶら | N5 L5 T5 C3 I3 — Other perishable nouns could fit the blank equally well. | teach only | yes |
| oil | 油を買いに行かなければなりません。 | I have to go buy oil. | あぶら | N4 L5 T5 C1 I1 — Very generic sentence; almost any noun could fill the blank. | teach only | yes |
| whiskey | 父は毎晩ウイスキーを飲みます。 | My father drinks whiskey every night. | ういすきい | N5 L5 T5 C2 I3 — Blank could be any drink (beer, tea, coffee), not uniquely whiskey. | teach only | yes |
| whiskey | 旅行のお土産にウイスキーをもらいました。 | I received whiskey as a souvenir from a trip. | ういすきい | N5 L5 T5 C2 I3 — Many souvenir items could fit the blank besides whiskey. | teach only | yes |
| whiskey | 疲れたので、ウイスキーが飲みたいです。 | I'm tired, so I want to drink whiskey. | ういすきい | N5 L5 T5 C2 I3 — Any beverage could logically fill the blank, not just whiskey. | teach only | yes |
| plum | 庭に梅の木があります。 | There is a plum tree in the garden. | うめ | N5 L5 T5 C2 I3 — Many other trees (桜、松等) could fill the blank, so not uniquely recoverable. | teach only | yes |
| plum | 春になると、梅の花が咲きます。 | When spring comes, plum blossoms bloom. | うめ | N5 L5 T5 C3 I4 — Cherry blossoms (桜) could also fit the same context, slightly reducing recoverability. | teach only | yes |
| plum | 旅行中に梅を買いました。 | I bought plums during the trip. | うめ | N4 L5 T5 C1 I2 — Extremely generic sentence; almost any purchasable item could fill the blank. | teach only | yes |
| conditions | 電話で条件を話しましょうか。 | Shall we talk about the conditions on the phone? | じょうけん | N4 L5 T5 C2 I2 — Sentence is natural but generic; many nouns (予定、詳細、話など) could fill the blank equally well. | teach only | yes |
| common sense | 親は子供に常識を教えます。 | Parents teach common sense to their children. | じょうしき | N4 L5 T5 C3 I3 | teach only | yes |
| common sense | 彼は常識がないから、友達が困っています。 | Because he has no common sense, his friend is troubled. | じょうしき | N4 L5 T5 C4 I4 | cloze+teach | yes |
| a joke | 友達が来て、冗談を言いました。 | My friend came and told a joke. | じょうだん | N5 L5 T5 C3 I3 — Blank could also be filled with words like 話 or うそ, though 冗談を言う is a common collocation. | teach only | yes |
| a joke | さっきの電話は冗談でしたか。 | Was that phone call earlier a joke? | じょうだん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| consumption | 私の家族は電気の消費が多いです。 | My family's electricity consumption is high. | しょうひ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| consumption | 友達が来るから、食べ物の消費が増えました。 | Because a friend is coming, food consumption has increased. | しょうひ | N4 L5 T5 C4 I3 | cloze+teach | yes |
| commodity | この新しい商品を一緒に見ませんか。 | Won't you look at this new product with me? | しょうひん | N4 L5 T4 C2 I2 — blank could be many nouns like 本, 映画, etc. | teach only | yes |
| commodity | 電話で商品の値段を聞きましたか。 | Did you ask about the product's price on the phone? | しょうひん | N4 L5 T5 C3 I3 — context (値段) narrows but still many nouns fit | teach only | yes |
| commodity | 母はいつも安い商品を選びます。 | My mother always chooses cheap products. | しょうひん | N4 L5 T5 C3 I3 — context helps but not fully unique | teach only | yes |
| proof | 電話でそれを証明できますか。 | Can you prove that over the phone? | しょうめい | N4 L5 T5 C3 I3 — 説明 also plausible in this context | teach only | yes |
| proof | 証明が必要ですから、書類を用意してください。 | Since proof is necessary, please prepare the documents. | しょうめい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| omission | 先生は時間がないから、説明を省略しました。 | Because the teacher had no time, he omitted the explanation. | しょうりゃく | N5 L5 T5 C5 I4 | cloze+teach | yes |
| omission | この部分は電話で省略してもいいですか。 | Is it okay to omit this part on the phone? | しょうりゃく | N4 L5 T5 C4 I3 — slightly vague context for 'this part' but still recoverable | cloze+teach | yes |
| omission | 長い話ですから、ここは省略しましょう。 | Since it's a long story, let's omit this part. | しょうりゃく | N5 L5 T5 C5 I4 | cloze+teach | yes |
| representative | 会社の代表として会議に出席します。 | I will attend the meeting as the company's representative. | だいひょう | N5 L5 T5 C3 I4 — Other words like 社長 or 部長 could also fit the blank. | teach only | yes |
| representative | クラスの代表は誰ですか。 | Who is the class representative? | だいひょう | N5 L5 T5 C3 I3 — リーダー or 委員長 could also fit the blank. | teach only | yes |
| representative | 彼が代表になったから、皆安心しました。 | Because he became the representative, everyone felt relieved. | だいひょう | N5 L5 T5 C2 I3 — Very generic context; many role words (リーダー, 社長, etc.) could fill the blank. | teach only | yes |
| unrelated person | 他人の物を使ってはいけません。 | You must not use other people's things. | たにん | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (先生の, 友達のetc.), not uniquely 他人. | teach only | yes |
| unrelated person | 彼は他人のことをあまり気にしません。 | He doesn't care much about other people. | たにん | N5 L5 T5 C2 I2 — Many nouns could fill the blank besides 他人. | teach only | yes |
| unrelated person | あの人は他人のような顔をしていますね。 | That person looks like a total stranger, doesn't he. | たにん | N4 L4 T4 C4 I4 — Idiomatic '他人のような顔' strongly cues the target word. | cloze+teach | yes |
| young man | この学校には男子が少ないです。 | There are few boys at this school. | だんし | N5 L5 T5 C2 I2 — Many nouns (生徒, 女子, 子供 etc.) could fill the blank equally well. | teach only | yes |
| young man | 男子はあちらの部屋を使ってください。 | Boys, please use the room over there. | だんし | N5 L5 T5 C2 I2 — Blank could be filled by 女子 or other nouns just as naturally; context doesn't force 男子 specifically. | teach only | yes |
| young man | 男子と女子が一緒に運動しました。 | The boys and girls exercised together. | だんし | N5 L5 T5 C5 I3 — Pairing with 女子 makes 男子 the clearly forced answer. | cloze+teach | yes |
| prefectural governor | 知事は明日の会議で話します。 | The governor will speak at tomorrow's meeting. | ちじ | N4 L5 T5 C2 I2 — blank could be filled by many nouns like teacher, president, mayor | teach only | yes |
| prefectural governor | 新しい知事は誰ですか。 | Who is the new governor? | ちじ | N4 L5 T5 C2 I2 — blank could be filled by many role nouns like teacher, boss, president | teach only | yes |
| father | 父親は毎朝早く起きます。 | My father wakes up early every morning. | ちちおや | N5 L5 T5 C2 I2 — Blank could be filled by 母親, 兄, 祖父, etc.; generic sentence. | teach only | yes |
| father | あの子供の父親は医者だそうです。 | I heard that child's father is a doctor. | ちちおや | N5 L5 T5 C3 I4 — Blank still allows 母親 or other family words, though context (doctor) adds slight flavor. | teach only | yes |
| father | 父親になってから、彼は変わりました。 | Since becoming a father, he has changed. | ちちおや | N5 L4 T5 C2 I4 — Blank could be filled with 大人, 社会人, 親, etc., reducing recoverability. | teach only | yes |
| companion | 旅行の連れが病気になりました。 | My travel companion got sick. | つれ | N5 L5 T5 C3 I3 — Other words like 友達 or 家族 could also fit the blank. | teach only | yes |
| companion | 一人ですか、連れがいますか。 | Are you alone, or do you have a companion? | つれ | N5 L5 T5 C3 I3 — Blank could plausibly be filled with 友達 or 仲間 too. | teach only | yes |
| companion | 連れと一緒に買い物に行きました。 | I went shopping together with my companion. | つれ | N5 L5 T5 C3 I3 — Context allows multiple companion-like nouns to fit. | teach only | yes |
| enemy | 敵に負けないように頑張りましょう。 | Let's do our best so we don't lose to the enemy. | てき | N5 L5 T5 C3 I3 — Blank could be filled with other nouns like 相手 or ライバル, reducing uniqueness. | teach only | yes |
| enemy | 彼は昔からの敵です。 | He has been an enemy since long ago. | てき | N5 L5 T5 C3 I3 — Blank could also be filled with 友人 or 知り合い, so context doesn't force 敵 alone. | teach only | yes |
| colleague | 同僚と一緒に会社へ行きます。 | I go to the company together with my colleague. | どうりょう | N4 L5 T5 C2 I2 — Many nouns (友達, 先生, 家族) could fit the blank equally well. | teach only | yes |
| colleague | 今晩、同僚と食事しませんか。 | Won't you have dinner with a colleague tonight? | どうりょう | N5 L5 T5 C2 I3 — Context doesn't uniquely force 同僚; other people-words fit. | teach only | yes |
| colleague | あの同僚はいつも親切です。 | That colleague is always kind. | どうりょう | N4 L5 T5 C2 I2 — Generic sentence; many nouns could fill the blank. | teach only | yes |
| nutrition | 野菜は栄養があるから、たくさん買います。 | I buy a lot of vegetables because they have nutrition. | えいよう | N4 L5 T4 C3 I3 — Other words like 味 could fit the blank too. | teach only | yes |
| nutrition | このレストランの料理は栄養がありません。 | The food at this restaurant has no nutrition. | えいよう | N4 L5 T4 C3 I3 — Blank could also be filled with 味 or 特徴. | teach only | yes |
| nutrition | 栄養を考えて弁当を作ってください。 | Please make the lunch box while thinking about nutrition. | えいよう | N4 L5 T4 C4 I3 | cloze+teach | yes |
| feed | 猫がお腹が空いているから、餌をあげます。 | Since the cat is hungry, I'll give it feed. | えさ | N4 L5 T5 C3 I3 — For a pet cat, ご飯 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| feed | 動物園の動物には餌をあげません。 | I don't give feed to the animals at the zoo. | えさ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| feed | 庭の鳥に餌をあげてください。 | Please give feed to the birds in the garden. | えさ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| confectionery | 甘い菓子が好きだから、いつも買います。 | I like sweet confectionery, so I always buy it. | かし | N5 L5 T5 C3 I3 — Blank could also be filled by other sweet foods, but context helps somewhat. | teach only | yes |
| confectionery | この店には菓子がありません。 | This shop has no confectionery. | かし | N4 L5 T5 C2 I2 — Many nouns could fill the blank; generic sentence. | teach only | yes |
| confectionery | 会議に菓子を持ってきてください。 | Please bring confectionery to the meeting. | かし | N4 L5 T5 C2 I2 — Blank is not uniquely recoverable; could be documents, drinks, etc. | teach only | yes |
| (male) (vulg.) to eat | 腹が減ったから、飯を食おう。 | I'm hungry, so let's eat. | くおう | N5 L5 T5 C3 I3 — 食べよう could also fit the blank, though 食う fits the casual tone. | teach only | yes |
| (male) (vulg.) to eat | 忙しくて、今朝は何も食わなかった。 | I was busy, so I didn't eat anything this morning. | くわなかった | N5 L5 T5 C3 I3 — 食べなかった would also work, slightly reducing exclusivity of answer. | teach only | yes |
| (male) (vulg.) to eat | お前、これ食うか。 | Hey, are you going to eat this? | くう | N5 L5 T5 C3 I4 — 食べるか is an equally plausible fill, though 食うか fits the rough tone well. | teach only | yes |
| cream | このケーキはクリームが甘いから、大好きです。 | This cake's cream is sweet, so I love it. | くりいむ | N4 L5 T5 C4 I3 | cloze+teach | yes |
| cream | コーヒーにクリームを入れません。 | I don't put cream in my coffee. | くりいむ | N4 L5 T5 C3 I3 — 砂糖 or ミルク could also fit the blank | teach only | yes |
| cream | パンにクリームを塗ってください。 | Please spread cream on the bread. | くりいむ | N4 L5 T5 C2 I3 — バター、ジャム、蜂蜜 could equally fill the blank | teach only | yes |
| grain | 穀物は体にいいから、毎朝食べます。 | Grains are good for the body, so I eat them every morning. | こくもつ | N4 L5 T5 C2 I2 — Blank could be filled by many foods (vegetables, meat, fruit), not uniquely 穀物. | teach only | yes |
| grain | この店では穀物を売っていません。 | This shop doesn't sell grains. | こくもつ | N4 L5 T5 C2 I2 — Many other nouns (alcohol, meat, fish) fit the blank equally well. | teach only | yes |
| grain | 穀物をもっと食べてください。 | Please eat more grains. | こくもつ | N4 L5 T5 C2 I2 — Generic template; blank could be many food items. | teach only | yes |
| pepper | 辛いのが好きだから、胡椒をたくさんかけます。 | I like spicy food, so I put a lot of pepper on it. | こしょう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| pepper | この料理には胡椒を入れません。 | I don't put pepper in this dish. | こしょう | N4 L5 T5 C2 I2 — Could equally be salt or other seasoning; low cloze recoverability. | teach only | yes |
| flour | パンを作るから、粉を買いました。 | I bought flour because I'm making bread. | こな | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other bread ingredients like 卵 or バター. | teach only | yes |
| flour | 台所に粉がありません。 | There's no flour in the kitchen. | こな | N4 L5 T5 C2 I2 — Very generic; blank could be almost any kitchen item. | teach only | yes |
| flour | 粉をお皿に入れてください。 | Please put the flour on the plate. | こな | N4 L5 T5 C2 I2 — Blank could be filled with many nouns like 料理, パン, etc. | teach only | yes |
| demand | コンピューターの需要が増えています。 | Demand for computers is increasing. | じゅよう | N5 L5 T5 C3 I3 | teach only | yes |
| demand | この製品の需要はありますか。 | Is there demand for this product? | じゅよう | N5 L5 T5 C3 I3 | teach only | yes |
| demand | 去年、電気自動車の需要が高かったです。 | Last year, demand for electric cars was high. | じゅよう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| variety | この店にはどんな種類のお茶がありますか。 | What kinds of tea does this shop have? | しゅるい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| variety | 先生は色々な種類の質問をしました。 | The teacher asked various kinds of questions. | しゅるい | N4 L5 T5 C3 I3 — other nouns like 'number' or 'type' concepts could plausibly fit context less tightly than sentence 0 | teach only | yes |
| turn | 次はあなたの順番ですか。 | Is it your turn next? | じゅんばん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| turn | 私たちは順番を待ちました。 | We waited for our turn. | じゅんばん | N5 L5 T5 C3 I3 — Blank could also be filled by other waitable nouns like バス or 電車. | teach only | yes |
| turn | ゲームでは順番を守らなければなりません。 | In games, you must follow the turn order. | じゅんばん | N4 L4 T4 C3 I3 — Blank could also be ルール, reducing uniqueness. | teach only | yes |
| use ) | 彼はパソコンの使用をやめました。 | He stopped using the computer. | しよう | N5 L5 T5 C3 I3 — 利用 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| use ) | この道具の使用方法を習いたいです。 | I want to learn how to use this tool. | しよう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| prize | 彼女はスピーチコンテストで賞をもらいました。 | She received a prize at the speech contest. | しょう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| prize | あなたはどんな賞が欲しいですか。 | What kind of prize do you want? | しょう | N5 L5 T5 C2 I3 — Blank could be filled with many nouns like もの, プレゼント, etc. | teach only | yes |
| obstacle | 彼女は事故の後、歩くことに障害があります。 | She has a disability in walking after the accident. | しょうがい | N4 L4 T4 C4 I3 | cloze+teach | yes |
| state of affairs | 今の状況を説明してください。 | Please explain the current situation. | じょうきょう | N4 L5 T5 C3 I2 — Generic but grammatically fine; 状態 could also fit the blank. | teach only | yes |
| state of affairs | 会社の状況はだんだん良くなっています。 | The company's situation is gradually getting better. | じょうきょう | N4 L5 T5 C3 I3 — Slightly generic; 状態 or 業績 could also fit the blank. | teach only | yes |
| to retire | 先生は今年学校を辞めます。 | The teacher will retire from school this year. | やめます | N4 L5 T5 C3 I3 — Blank could plausibly be filled with other verbs like 転校します or 卒業します, slightly reducing recoverability. | teach only | yes |
| to retire | 彼は疲れたので、仕事を辞めました。 | He quit his job because he was tired. | やめました | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to retire | 私は水泳を辞めたいです。 | I want to quit swimming. | やめたい | N4 L5 T5 C2 I3 — Many verbs (始めたい, 続けたい, etc.) could fit the blank, weakening cloze recoverability. | teach only | yes |
| to get drunk | 昨夜レストランでワインを飲みすぎて、酔いました。 | Last night I drank too much wine at the restaurant and got drunk. | よいました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to get drunk | 今日のパーティーでは酔いたくないです。 | I don't want to get drunk at today's party. | よいたくない | N5 L5 T5 C3 I3 — context alone allows other verbs (e.g. 遅刻したくない、疲れたくない) to fit the blank | teach only | yes |
| to pollute | 子供が新しい服を汚しました。 | The child got his new clothes dirty. | よごしました | N5 L5 T5 C3 I3 — Other verbs (破る, 濡らす) could plausibly fit the blank. | teach only | yes |
| to pollute | 川を汚してはいけません。 | You must not pollute the river. | よごして | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to pollute | 部屋を汚したくないです。 | I don't want to make the room dirty. | よごしたくない | N5 L5 T5 C3 I3 — 散らかす or 汚くする could also fit contextually. | teach only | yes |
| to divide | 弟がお皿を割りました。 | My younger brother broke a plate. | わりました | N5 L5 T5 C3 I3 — Other verbs like 落とす could also fit the blank for a broken plate. | teach only | yes |
| to divide | 十を二で割ります。 | Divide ten by two. | わります | N5 L5 T5 C5 I2 — Clear math context but generic textbook sentence. | cloze+teach | yes |
| to divide | 卵を割りたいです。 | I want to crack an egg. | わりたい | N5 L5 T5 C3 I3 — Other verbs like 食べる or 焼く could also fit the blank. | teach only | yes |
| to damage | 重い荷物を持って、腰を傷めました。 | I hurt my back carrying heavy luggage. | いためました | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to damage | もう足を傷めたくないので、気をつけます。 | I don't want to hurt my leg again, so I'll be careful. | いためたくない | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to be buried | 雪で車が埋まりました。 | The car got buried in snow. | うまりました | N5 L5 T5 C3 I4 — 車が雪で止まる/埋まる both plausible, slightly reduces uniqueness | teach only | yes |
| to be buried | レストランの席はもう埋まっています。 | All the seats at the restaurant are already filled. | うまって | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to be buried | 教室の席はすぐに埋まりました。 | The classroom seats filled up quickly. | うまりました | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to bear | 彼は事故で傷を負いました。 | He suffered an injury in the accident. | おいました | N5 L5 T5 C3 I4 — 傷を受けました is also plausible in the blank, slightly reducing uniqueness. | teach only | yes |
| to bear | 借金を負いたくないです。 | I don't want to incur debt. | おいたくない | N5 L4 T5 C3 I3 — 作りたくない or抱えたくない could also fit the blank, reducing uniqueness. | teach only | yes |
| to weave | 祖母は着物の布を織ります。 | My grandmother weaves cloth for kimonos. | おります | N5 L5 T5 C3 I3 — Blank could also be filled with 作ります/買います, not fully forced. | teach only | yes |
| to weave | 姉は絹の布を織りました。 | My older sister wove silk cloth. | おりました | N5 L5 T5 C3 I3 — Silk cloth context doesn't uniquely force 織る over 作る/買う. | teach only | yes |
| to weave | 学校で布を織りたいです。 | I want to weave cloth at school. | おりたい | N5 L5 T5 C3 I2 — Generic sentence; verb blank could plausibly be 作りたい/買いたい as well. | teach only | yes |
| comparison | 二つのカメラを比較してから買いました。 | I compared the two cameras before buying one. | ひかく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| comparison | 部長は二つの会社の価格を比較しました。 | The manager compared the prices of the two companies. | ひかく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| comparison | レストランで料理の値段を比較してください。 | Please compare the prices of the dishes at the restaurant. | ひかく | N4 L5 T5 C3 I3 — Comparing dish prices within one restaurant is a slightly odd context, and other verbs like 確認 could fit the blank. | teach only | yes |
| picnic | 明日、公園でピクニックをします。 | Tomorrow I will have a picnic in the park. | ぴくにっく | N5 L5 T5 C4 I2 — Simple, slightly generic but functional. | cloze+teach | yes |
| picnic | 天気が良かったのでピクニックに行きました。 | Since the weather was nice, we went on a picnic. | ぴくにっく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| tragedy | あの映画は悲劇です。 | That movie is a tragedy. | ひげき | N4 L5 T5 C2 I1 — Generic template sentence; many words could fill the blank. | teach only | yes |
| tragedy | その物語は悲劇に終わりました。 | That story ended in tragedy. | ひげき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| tragedy | 彼の人生はどうして悲劇になったのですか。 | Why did his life become a tragedy? | ひげき | N5 L5 T5 C3 I4 — Blank could also be filled by similar words like 悲惨 or 崩壊. | teach only | yes |
| emergency | 会社に非常の時のための計画があります。 | The company has a plan for times of emergency. | ひじょう | N4 L5 T5 C3 I3 — 緊急など他の語も文脈に合うため、正解が一意に定まりにくい | teach only | yes |
| emergency | 非常の場合はここに集まってください。 | In case of emergency, please gather here. | ひじょう | N4 L5 T5 C3 I3 — 緊急の場合などでも意味が通るため、解答が一意になりにくい | teach only | yes |
| desperation | 必死で料理を運びました。 | I carried the dishes desperately. | ひっし | N4 L5 T5 C2 I3 — 他の副詞（一生懸命で等）でも成立しうる | teach only | yes |
| desperation | 必死になって頑張ってください。 | Please try desperately hard. | ひっし | N5 L5 T5 C3 I3 — 「必死になって」は自然な慣用表現 | teach only | yes |
| negation | 彼はその意見を否定しました。 | He denied that opinion. | ひてい | N5 L5 T5 C3 I2 — Several verbs (批判した、反対した) could also fit the blank. | teach only | yes |
| negation | 部長は新しい計画を否定しました。 | The manager rejected the new plan. | ひてい | N5 L5 T4 C2 I2 — '否定' means 'deny/negate', not exactly 'reject'; also many verbs (承認、提案、説明) could fill the blank. | teach only | yes |
| negation | なぜ彼はその話を否定するのですか。 | Why does he deny that story? | ひてい | N5 L5 T5 C3 I3 — Question form adds some context but other verbs like 批判する or 無視する could still fit. | teach only | yes |
| one word | 彼は一言も話しませんでした。 | He didn't say a single word. | ひとこと | N5 L5 T5 C3 I3 — 何も could also fit the blank grammatically, reducing uniqueness. | teach only | yes |
| one word | 一言だけ言ってください。 | Please just say one word. | ひとこと | N5 L5 T5 C3 I2 — Other short words could fill the blank before だけ言ってください。 | teach only | yes |
| one word | 会議で一言意見を言いました。 | I said a word of opinion at the meeting. | ひとこと | N4 L5 T4 C4 I3 — EN translation slightly awkward ('a word of opinion') but meaning is clear. | cloze+teach | yes |
| alone | 休みの日は独りで映画を見ます。 | On my days off, I watch movies alone. | ひとり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| alone | 雨の中、独りで歩きました。 | I walked alone in the rain. | ひとり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| alone | 独りで悩まないでください。 | Please don't worry alone. | ひとり | N5 L5 T5 C5 I4 | cloze+teach | yes |
| eaves | 雨が強いですから、軒の下で待っていてください。 | Since the rain is heavy, please wait under the eaves. | のき | N5 L5 T5 C3 I4 — other shelter words like 屋根 or 木 could also fit the blank | teach only | yes |
| eaves | この古い家には大きい軒があります。 | This old house has large eaves. | のき | N4 L5 T5 C2 I2 — generic template sentence; many nouns (庭, 窓, 屋根) could fill the blank | teach only | yes |
| eaves | 軒の下に入らなかったので、服が濡れてしまいました。 | Because I didn't go under the eaves, my clothes got wet. | のき | N5 L5 T5 C4 I4 — strong collocation with 下に入る and 濡れる narrows the answer well | cloze+teach | yes |
| violin | 急いでいたので、バイオリンを持って行きませんでした。 | Since I was in a hurry, I didn't bring the violin. | ばいおりん | N4 L5 T5 C2 I3 — Blank could be filled by many objects (bag, umbrella, etc.), not uniquely violin. | teach only | yes |
| scissors | 野菜を切るので、はさみを取ってください。 | Since I'm cutting vegetables, please get me the scissors. | はさみ | N4 L5 T5 C3 I3 — Vegetables are usually cut with a knife (包丁), so scissors isn't the only plausible answer. | teach only | yes |
| scissors | 子供がはさみで紙を切っています。 | The child is cutting paper with scissors. | はさみ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| scissors | 急いでいて、はさみをかばんに入れませんでした。 | Since I was in a hurry, I didn't put the scissors in my bag. | はさみ | N4 L5 T5 C1 I2 — The blank could be almost any object one forgets to pack, so it's not recoverable from context. | teach only | yes |
| flag | 空港の前に旗が立っています。 | A flag is standing in front of the airport. | はた | N5 L5 T5 C3 I3 | teach only | yes |
| flag | 急いでいたので、旗を持ってくるのを忘れました。 | Since I was in a hurry, I forgot to bring the flag. | はた | N5 L5 T5 C2 I3 — Many objects could fill the blank, not just flag. | teach only | yes |
| needle | 忙しくて、針で服を直す時間がありませんでした。 | I was busy, so I didn't have time to mend clothes with a needle. | はり | N5 L4 T5 C5 I4 | cloze+teach | yes |
| needle | 店で新しい針を買いました。 | I bought a new needle at the store. | はり | N5 L5 T5 C2 I2 — Generic sentence; many nouns could fill the blank (e.g., shoes, bag), reducing cloze recoverability. | teach only | yes |
| video tape | 家族の旅行のビデオを見ました。 | I watched the video of the family trip. | びでお | N5 L5 T5 C2 I3 — 写真 or 動画 could also fit the blank | teach only | yes |
| video tape | 時間がなくて、ビデオを見ませんでした。 | I didn't have time, so I didn't watch the video. | びでお | N5 L5 T5 C2 I3 — 映画 or テレビ could also fit the blank | teach only | yes |
| video tape | 空港に着いたら、ビデオを撮ってください。 | Please take a video once we arrive at the airport. | びでお | N5 L5 T5 C2 I3 — 写真 or 動画 could also fit the blank | teach only | yes |
| string | その紐で肉を巻いてください。 | Please wrap the meat with that string. | ひも | N5 L5 T5 C3 I3 — blank could plausibly be other wrapping materials, slightly reducing recoverability | teach only | yes |
| string | 靴の紐が切れました。 | My shoelace broke. | ひも | N5 L5 T5 C5 I4 | cloze+teach | yes |
| string | 急いでいたので、紐を切りませんでした。 | Since I was in a hurry, I didn't cut the string. | ひも | N4 L5 T5 C2 I2 — context doesn't strongly force 紐; many nouns could fill the blank | teach only | yes |
| bottle | 台所に醤油の瓶があります。 | There is a bottle of soy sauce in the kitchen. | びん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| bottle | この瓶を冷蔵庫に入れてください。 | Please put this bottle in the refrigerator. | びん | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (milk, eggs, etc.), not uniquely 瓶. | teach only | yes |
| bottle | 急いでいたので、瓶を洗いませんでした。 | Since I was in a hurry, I didn't wash the bottle. | びん | N5 L5 T5 C2 I3 — Blank could be filled by many objects one might wash, not uniquely 瓶. | teach only | yes |
| stock | あなたは株を持っていますか。 | Do you own any stocks? | かぶ | N4 L5 T5 C2 I3 — Context 'do you own any ___' fits many nouns, not just 株. | teach only | yes |
| patience | 頭が痛いけど我慢します。 | My head hurts, but I'll bear with it. | がまん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| patience | 甘い物を食べたいけど我慢しています。 | I want to eat sweets, but I'm holding back. | がまんして | N5 L5 T5 C4 I4 — target label shows 我慢して but sentence uses 我慢しています, slight mismatch | cloze+teach | yes |
| god | あなたは神を信じますか。 | Do you believe in god? | かみ | N5 L5 T5 C3 I3 — Blank could also be filled with other nouns like 幽霊 or 運命, though 神 is a strong fit. | teach only | yes |
| god | 毎朝神に祈ります。 | I pray to god every morning. | かみ | N5 L5 T5 C3 I3 — Blank could also fit words like 仏 or 神様, slightly reducing forced uniqueness. | teach only | yes |
| to take the place of | 部長が休みなので、課長が代ります。 | Since the manager is off, the section chief will take his place. | かわります | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to take the place of | 疲れたでしょう、私が代りましょうか。 | You must be tired, shall I take your place? | かわりましょう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| perception | 彼の勘はいつも当たります。 | His intuition is always right. | かん | N5 L5 T5 C3 I3 — blank could also fit 予感/予想, slightly reducing recoverability | teach only | yes |
| perception | あなたは勘がいいですか。 | Do you have good intuition? | かん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| perception | 今朝は勘で答えを選びました。 | This morning I chose the answer by intuition. | かん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to desire | 病気が早く治るように願います。 | I pray that my illness heals quickly. | ねがいます | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to desire | 会社の成功を願っているから、頑張ります。 | Because I wish for the company's success, I'll do my best. | ねがって | N4 L4 T4 C3 I3 — Could also be filled with 望んで, slightly lowering recoverability. | teach only | yes |
| to desire | 電車が遅れないことを願いました。 | I wished the train wouldn't be late. | ねがいました | N5 L4 T5 C5 I4 | cloze+teach | yes |
| to state | 部長は会議で意見を述べました。 | The department manager stated his opinion at the meeting. | のべました | N5 L5 T5 C3 I3 — 言う/話す could also fit the blank. | teach only | yes |
| to state | 彼は訳を述べませんでした。 | He didn't state the reason. | のべません | N4 L5 T5 C3 I3 — 言う could also fit the blank. | teach only | yes |
| to state | 医者に症状を述べてください。 | Please state your symptoms to the doctor. | のべて | N5 L5 T5 C3 I3 — 話す/伝える could also fit the blank. | teach only | yes |
| to appear (in print) | その記事は新聞に載りました。 | That article appeared in the newspaper. | のりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to appear (in print) | 新しい店の広告が雑誌に載っています。 | An ad for the new store appears in the magazine. | のって | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to appear (in print) | その事故のニュースは新聞に載りませんでした。 | News of that accident didn't appear in the newspaper. | のりません | N5 L5 T5 C4 I3 | cloze+teach | yes |
| announcement | 新しい商品の発表をしましょう。 | Let's make an announcement about the new product. | はっぴょう | N5 L5 T5 C3 I3 — Blank could also be filled by words like 開発 or 発売, not uniquely 発表. | teach only | yes |
| announcement | 発表があるから、会議室に集まってください。 | Since there's an announcement, please gather in the meeting room. | はっぴょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| announcement | 試験の結果の発表は来週です。 | The announcement of the exam results is next week. | はっぴょう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to discuss | この問題について話し合いましょう。 | Let's discuss this problem. | はなしあいましょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to discuss | 家族はまだその件について話し合っていません。 | The family hasn't discussed that matter yet. | はなしあって | N5 L5 T5 C4 I3 | cloze+teach | yes |
| call | 来週、大切な客の訪問があります。 | Next week, there's a visit from an important client. | ほうもん | N5 L5 T5 C3 I3 — other nouns like 予定 or 来訪 could also fit the blank | teach only | yes |
| call | 医者は患者の家を訪問しました。 | The doctor visited the patient's house. | ほうもん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| call | 仕事の後で友達の家を訪問するつもりです。 | I plan to visit my friend's house after work. | ほうもん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to invite | 部長をパーティーに招きました。 | I invited the manager to the party. | まねきました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to invite | その店は新しい客を招くために広告を出しました。 | That store put out an ad to invite new customers. | まねく | N4 L4 T5 C3 I3 — 招く works but 呼ぶ/集める could also fit the blank. | teach only | yes |
| to judge | 彼が間違えても、誰も裁きませんでした。 | Even though he made a mistake, no one judged him. | さばきません | N4 L4 T4 C3 I3 — Natural sentence, but words like 責める or 非難する could also fill the blank. | teach only | yes |
| monkey | 山で猿を見ました。 | I saw a monkey in the mountains. | さる | N5 L5 T5 C2 I3 — Many animals could fit the blank (bear, deer, etc.), so context doesn't force 'monkey'. | teach only | yes |
| monkey | 動物園で猿は何を食べますか。 | What do monkeys eat at the zoo? | さる | N5 L5 T5 C2 I3 — Blank could be filled by many zoo animals, not uniquely 'monkey'. | teach only | yes |
| oxygen | 魚は水の中の酸素を使います。 | Fish use the oxygen in the water. | さんそ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| oxygen | 病院で酸素を吸いました。 | I inhaled oxygen at the hospital. | さんそ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| nature | この町には自然が多いです。 | This town has a lot of nature. | しぜん | N5 L5 T5 C3 I3 | teach only | yes |
| nature | 自然が好きですか。 | Do you like nature? | しぜん | N5 L5 T5 C2 I2 — blank could be filled by many nouns (music, animals, etc.) | teach only | yes |
| nature | 私は自然の中で写真を撮りたいです。 | I want to take photos in nature. | しぜん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| moisture | 今日は湿気が多いですね。 | There's a lot of moisture today, isn't there. | しっけ | N5 L5 T5 C3 I3 — 湿度 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| moisture | 昨日は湿気で疲れました。 | Yesterday I got tired because of the moisture. | しっけ | N4 L5 T5 C2 I3 — Cause of tiredness could be many things (暑さ, 仕事, etc.), so the blank isn't uniquely determined. | teach only | yes |
| humidity | 今日の湿度はどのくらいですか。 | About how high is today's humidity? | しつど | N5 L5 T5 C2 I3 — 気温 or other weather words could equally fill the blank. | teach only | yes |
| humidity | 夏は湿度が高いです。 | The humidity is high in summer. | しつど | N5 L5 T5 C2 I3 — 気温 fits equally well in this context. | teach only | yes |
| humidity | 湿度が低い方が好きです。 | I prefer lower humidity. | しつど | N5 L5 T5 C2 I3 — 気温 or other measurable qualities could also fit the blank. | teach only | yes |
| lawn | 庭の芝生を刈りました。 | I mowed the garden lawn. | しばふ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| lawn | 芝生の上でお弁当を食べたいです。 | I want to eat my lunch box on the lawn. | しばふ | N5 L5 T5 C3 I3 — blank could also fit words like 公園 or ベンチ | teach only | yes |
| lawn | この芝生に座ってもいいですか。 | May I sit on this lawn? | しばふ | N5 L5 T5 C3 I3 — blank could also fit ベンチ or 椅子 | teach only | yes |
| frost | 今朝は霜が降りました。 | There was frost this morning. | しも | N5 L5 T5 C3 I3 — 降りました could also follow 雨/雪, slightly ambiguous | teach only | yes |
| frost | 霜で野菜がだめになってしまいました。 | The vegetables were ruined by the frost. | しも | N5 L5 T5 C3 I4 — could also be 台風/虫/病気 causing damage | teach only | yes |
| frost | 冬の朝はよく霜が見えます。 | You often see frost on winter mornings. | しも | N5 L5 T5 C3 I3 — could also be 息/霧 seen on winter mornings | teach only | yes |
| harvest | 今年の米の収穫は多かったです。 | This year's rice harvest was large. | しゅうかく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| harvest | 果物の収穫を手伝いたいです。 | I want to help with the fruit harvest. | しゅうかく | N5 L5 T5 C3 I3 — Other words like 販売 or 栽培 could also fit the blank. | teach only | yes |
| harvest | 秋は野菜の収穫の季節です。 | Autumn is the season for harvesting vegetables. | しゅうかく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| promotion | 政府は産業の振興のために新しい計画を作った。 | The government made a new plan to promote industry. | しんこう | N5 L4 T5 C3 I3 — Other words like 発展・育成・強化 could also fit the blank. | teach only | yes |
| promotion | 町は文化の振興に力を入れています。 | The town is putting effort into promoting culture. | しんこう | N5 L4 T5 C3 I3 — Blank could be filled with 発展・保護 etc., not uniquely 振興. | teach only | yes |
| promotion | 経済の振興について会議で話しましょう。 | Let's talk about promoting the economy at the meeting. | しんこう | N5 L4 T5 C3 I3 — Similar ambiguity; 発展・成長 also plausible in context. | teach only | yes |
| truth | 先生は真理について話しました。 | The teacher talked about truth. | しんり | N5 L5 T5 C2 I2 — Many nouns (事実, 歴史, 未来) could fill the blank equally well. | teach only | yes |
| truth | 彼は真理を知りたいと言った。 | He said he wanted to know the truth. | しんり | N5 L5 T5 C2 I2 — Blank could be filled by 事実, 答え, 理由, etc., making the target hard to guess uniquely. | teach only | yes |
| exact calculation | 電車のお金を精算しなければなりません。 | I have to settle the train fare. | せいさん | N4 L5 T5 C4 I3 — 精算 fits well for train fare adjustment; 清算 is a near-homophone synonym that could also fit. | cloze+teach | yes |
| exact calculation | 会社の費用をもう精算しました。 | I already settled the company's expenses. | せいさん | N4 L5 T5 C4 I3 — Natural expense-settlement sentence, though 清算 could also plausibly fill the blank. | cloze+teach | yes |
| majority | 日本では二十歳で成年になります。 | In Japan, you become an adult at twenty. | せいねん | N4 L4 T5 C4 I4 | cloze+teach | yes |
| majority | 成年になったら一人で旅行できます。 | Once you become an adult, you can travel alone. | せいねん | N4 L4 T4 C3 I3 — Could also be 大人 or similar; not fully unique. | teach only | yes |
| Zen | 土曜日に禅の本を読みました。 | I read a book about Zen on Saturday. | ぜん | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (book about X), weak cloze constraint. | teach only | yes |
| Zen | 彼は禅に興味があります。 | He is interested in Zen. | ぜん | N5 L5 T5 C2 I2 — Generic 'interested in X' template, many words fit blank. | teach only | yes |
| Zen | 禅を習うために寺に行きました。 | I went to a temple to learn Zen. | ぜん | N5 L5 T5 C4 I4 — Temple context strongly suggests Zen, though other temple practices could theoretically fit. | cloze+teach | yes |
| election | 来月、大切な選挙があります。 | There will be an important election next month. | せんきょ | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other nouns like 会議 or 行事. | teach only | yes |
| election | 彼女は選挙に出るつもりです。 | She intends to run in the election. | せんきょ | N5 L5 T5 C3 I4 — 出る could pair with other nouns like 大会 or パーティー. | teach only | yes |
| election | 選挙の結果はまだ分かりません。 | The election results are still unknown. | せんきょ | N5 L5 T5 C3 I3 — 結果 could belong to テスト or 試合 as well. | teach only | yes |
| preceding | 前の電車が先行しています。 | The train ahead is running in advance. | せんこう | N4 L5 T4 C4 I3 | cloze+teach | yes |
| preceding | 彼は先行して会場に着きました。 | He arrived at the venue ahead of others. | せんこう | N4 L5 T4 C4 I3 | cloze+teach | yes |
| preceding | 先行して準備をしてください。 | Please go ahead and prepare. | せんこう | N4 L5 T4 C3 I3 — could also be filled with similar advance-related verbs like 事前に in looser contexts | teach only | yes |
| selection | 会社は新しい選考を始めました。 | The company started a new selection process. | せんこう | N4 L5 T5 C3 I3 — Blank could be filled by many nouns like 事業/制度, weakening recoverability. | teach only | yes |
| selection | 選考の結果をまだ待っています。 | I'm still waiting for the selection results. | せんこう | N5 L5 T5 C3 I3 — Common natural phrase, but blank could also be filled by 試験/審査 etc. | teach only | yes |
| risk | 冒険が好きです。 | I like adventure. | ぼうけん | N5 L5 T5 C2 I2 — Target gloss 'risk' is inaccurate for 冒険 (means 'adventure'); many nouns could fill the blank in this generic pattern. | teach only | yes |
| risk | 山で冒険をしました。 | I had an adventure in the mountains. | ぼうけん | N5 L5 T5 C2 I3 — Blank could be filled with many activity nouns (旅行, 練習, etc.), reducing recoverability. | teach only | yes |
| risk | 冒険をしたことがありますか。 | Have you ever gone on an adventure? | ぼうけん | N5 L5 T5 C2 I3 — Generic 'したことがありますか' pattern allows many nouns to fit the blank. | teach only | yes |
| direction | 駅の方向を教えてください。 | Please tell me the direction to the station. | ほうこう | N5 L5 T5 C3 I3 — blank could also be filled by 場所 or 道, reducing uniqueness | teach only | yes |
| direction | この方向で合っていますか。 | Is this the right direction? | ほうこう | N5 L5 T5 C3 I3 — blank could be 道 or 場所 as well | teach only | yes |
| direction | 風の方向が変わりました。 | The wind direction changed. | ほうこう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| packing | 包装がとても綺麗でした。 | The packaging was very beautiful. | ほうそう | N5 L5 T5 C2 I3 — Many nouns (箱、部屋、服など) could fit the blank, making the target hard to guess. | teach only | yes |
| packing | この包装は簡単です。 | This packaging is simple. | ほうそう | N4 L5 T5 C2 I2 — Generic template sentence; many nouns fit the blank, e.g. 説明, 作業, 手続き. | teach only | yes |
| method | いい方法を教えてください。 | Please teach me a good method. | ほうほう | N5 L5 T5 C3 I2 — Blank could also fit やり方 or 考え, slightly generic sentence. | teach only | yes |
| method | この方法は簡単です。 | This method is simple. | ほうほう | N5 L5 T5 C2 I1 — Very generic template sentence; many nouns fit the blank. | teach only | yes |
| method | 新しい方法を試しました。 | I tried a new method. | ほうほう | N5 L5 T5 C3 I3 — Blank could also be filled with words like レシピ or アイデア. | teach only | yes |
| guarantee | この時計には保証があります。 | This watch comes with a guarantee. | ほしょう | N5 L5 T5 C2 I3 — Many nouns could fill the blank (説明書, 電池, etc.), reducing cloze uniqueness. | teach only | yes |
| guarantee | 保証は一年間です。 | The guarantee lasts one year. | ほしょう | N5 L5 T5 C2 I2 — Blank could be filled by other duration-related nouns like 契約 or 任期, low recoverability. | teach only | yes |
| preservation | この魚は冷蔵庫で保存してください。 | Please store this fish in the refrigerator. | ほぞん | N5 L5 T5 C4 I3 — Slight ambiguity: 冷凍 could also fit, but 保存 is the most natural answer. | cloze+teach | yes |
| preservation | 保存が大切です。 | Preservation is important. | ほぞん | N4 L5 T5 C1 I1 — Generic template sentence; many nouns could fill the blank (努力, 健康, etc.). | teach only | yes |
| almost | 仕事はほぼ終わりました。 | Work is almost finished. | ほぼ | N5 L5 T5 C3 I3 — other adverbs like もう/ほとんど could also fit the blank | teach only | yes |
| almost | 準備はほぼできました。 | The preparations are almost done. | ほぼ | N5 L5 T5 C3 I3 — other adverbs like もう/ほとんど could also fit the blank | teach only | yes |
| almost | 天気はほぼ晴れです。 | The weather is almost clear. | ほぼ | N4 L5 T5 C3 I3 — slightly unusual phrasing but understandable; other words like ほとんど could fit | teach only | yes |
| much more | 友達が来て、部屋が一層にぎやかになりました。 | A friend came over, and the room became much livelier. | いっそう | N5 L5 T5 C3 I4 — Other adverbs like もっと/さらに could also fit the blank. | teach only | yes |
| much more | 雨が降って、風が一層強くなりました。 | It rained, and the wind became much stronger. | いっそう | N4 L5 T5 C3 I3 — Rain causing wind to strengthen is a slightly odd causal link; other adverbs could also fit the blank. | teach only | yes |
| general | これは一般の意見です。 | This is a general opinion. | いっぱん | N4 L5 T5 C2 I2 — Generic template sentence with many possible fill-ins (私の, 彼の, 一般の). | teach only | yes |
| general | 一般に、猫は魚が好きです。 | Generally speaking, cats like fish. | いっぱん | N5 L5 T5 C4 I4 — Fixed expression 一般に fits well though some adverbs could theoretically also fit grammatically. | cloze+teach | yes |
| general | その考えは一般の人と同じですか。 | Is that idea the same as what the general public thinks? | いっぱん | N4 L5 T5 C3 I3 — 普通の could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| carelessly | 友達の誕生日をうっかり忘れてしまいました。 | I carelessly forgot my friend's birthday. | うっかり | N5 L5 T5 C5 I4 | cloze+teach | yes |
| carelessly | 宿題をうっかり忘れましたか。 | Did you carelessly forget your homework? | うっかり | N4 L5 T4 C3 I2 — Generic sentence; blank could arguably fit other adverbs like もう. | teach only | yes |
| envious | 友達の新しい自転車が羨ましいです。 | I'm envious of my friend's new bicycle. | うらやましい | N5 L5 T5 C3 I3 — Word like 欲しい could also fit the blank, slightly reducing recoverability. | teach only | yes |
| envious | 彼はいつも旅行に行けて、羨ましいですね。 | He can always go on trips, I'm envious. | うらやましい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| envious | 頭がいい人を見ると、羨ましく思います。 | When I see smart people, I feel envious. | うらやましく | N5 L5 T5 C3 I4 — Words like 尊敬 could also plausibly fill the blank. | teach only | yes |
| much | 友達が来て、大いに楽しみました。 | A friend came over, and we enjoyed ourselves greatly. | おおいに | N4 L4 T5 C2 I3 — Many adverbs (とても, すごく, 本当に) could fill the blank equally well. | teach only | yes |
| much | この本は大いに役に立ちましたか。 | Was this book of great help to you? | おおいに | N5 L4 T5 C4 I3 — 大いに役に立つ is a fairly fixed collocation, making the blank easier to recover. | cloze+teach | yes |
| very young | 幼い子供が公園で遊んでいます。 | A very young child is playing in the park. | おさない | N5 L5 T5 C2 I2 — Blank could be filled by many adjectives like 小さい, 元気な, etc., reducing recoverability; fairly generic sentence. | teach only | yes |
| very young | 幼い頃、よく歌を歌いました。 | When I was very young, I often sang songs. | おさない | N5 L5 T5 C3 I3 — 幼い頃 is idiomatic but 若い頃 could also fit, slightly reducing uniqueness. | teach only | yes |
| smartly dressed | 友達はいつもお洒落な服を着ています。 | My friend always wears fashionable clothes. | おしゃれ | N5 L5 T5 C2 I2 — Blank could be filled by many na-adjectives (可愛い, 新しい, etc.), not uniquely recoverable. | teach only | yes |
| smartly dressed | お洒落な洋服を買いたいです。 | I want to buy fashionable clothes. | おしゃれ | N4 L5 T5 C2 I2 — Generic sentence; many adjectives fit the blank equally well. | teach only | yes |
| smartly dressed | 今日の授業にお洒落なシャツを着て行きましたか。 | Did you wear a fashionable shirt to class today? | おしゃれ | N4 L5 T5 C2 I3 — More context via question form, but still multiple adjectives could fill the blank. | teach only | yes |
| to rob | 彼の自由を奪いたくないです。 | I don't want to take away his freedom. | うばいたくない | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to bury | 犬は庭に骨を埋めました。 | The dog buried a bone in the garden. | うめました | N5 L5 T5 C2 I4 — Blank could also be filled by 隠す, 置く, 見つける, etc., reducing uniqueness. | teach only | yes |
| to bury | どこに手紙を埋めましたか。 | Where did you bury the letter? | うめました | N4 L5 T5 C2 I3 — Burying a letter is a bit unusual, and the blank could be filled by 隠す, 置く, 送る, etc. | teach only | yes |
| to betray | 友達を裏切りたくないです。 | I don't want to betray my friend. | うらぎりたくない | N5 L5 T5 C3 I3 — Other verbs like 傷つけたくない or 失いたくない could also fit the blank. | teach only | yes |
| to betray | なぜ彼女を裏切ったのですか。 | Why did you betray her? | うらぎった | N5 L5 T5 C3 I4 — Other verbs like 振った or 疑った could also fit the blank. | teach only | yes |
| to be sold | この本はよく売れました。 | This book sold well. | うれました | N5 L5 T5 C4 I2 | cloze+teach | yes |
| to be sold | 寒い日は暖かい服がよく売れます。 | Warm clothes sell well on cold days. | うれます | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to get | 授業でいい経験を得ました。 | I gained good experience in class. | えました | N5 L5 T5 C3 I3 — 経験を積む/得る both fit the blank, reducing uniqueness. | teach only | yes |
| to get | もっと知識を得たいです。 | I want to gain more knowledge. | えたい | N5 L5 T5 C3 I3 — 知識を深めたい/増やしたい could also fit, reducing uniqueness. | teach only | yes |
| to adapt | 先生は学生の質問に応じました。 | The teacher responded to the student's question. | おうじました | N4 L5 T4 C3 I3 — 答える could also fit the blank, slightly reducing uniqueness | teach only | yes |
| to adapt | 天気に応じて服を選びたいです。 | I want to choose clothes according to the weather. | おうじて | N5 L5 T5 C3 I3 — 合わせて could also fit the blank | teach only | yes |
| to adapt | その要求に応じますか。 | Will you comply with that request? | おうじます | N5 L5 T5 C3 I3 — 従います could also fit the blank | teach only | yes |
| to cover | 雪が町を覆いました。 | Snow covered the town. | おおいました | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to present | 誕生日に花を贈りました。 | I gave flowers as a birthday present. | おくりました | N5 L5 T5 C3 I3 — あげました could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| to present | 先生に何を贈りたいですか。 | What do you want to give the teacher as a gift? | おくりたい | N5 L5 T5 C3 I3 — あげたい also fits contextually, lowering exclusivity of 贈りたい. | teach only | yes |
| to present | 卒業式にプレゼントを贈ります。 | I will give a present at the graduation ceremony. | おくります | N5 L5 T5 C4 I3 — Ceremonial context (卒業式) leans toward 贈る over more casual あげる, aiding recoverability. | cloze+teach | yes |
| army | 昔、その国には強い軍がありました。 | Long ago, that country had a strong army. | ぐん | N5 L5 T5 C3 I3 — Context allows other strong nouns like power or will to fit the blank. | teach only | yes |
| army | あの軍は戦争に負けました。 | That army lost the war. | ぐん | N5 L5 T5 C3 I3 — Could also be filled with 国 or 側, slightly ambiguous. | teach only | yes |
| army | 学校で軍について習いましたか。 | Did you learn about the army at school? | ぐん | N4 L5 T5 C2 I2 — Very generic template; many topics could fill the blank. | teach only | yes |
| respect | 私は先生に敬意を持っています。 | I have respect for my teacher. | けいい | N5 L5 T5 C4 I3 — 敬意を持つ is natural but 好意 could also fit grammatically, slightly reducing uniqueness. | cloze+teach | yes |
| respect | 目上の人に敬意を払ってください。 | Please show respect to your superiors. | けいい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| tendency | 最近、若い人は本を読まない傾向があります。 | Recently, young people tend not to read books. | けいこう | N5 L5 T5 C4 I3 — 習慣 could also fit the blank, slightly reducing uniqueness. | cloze+teach | yes |
| tendency | 彼にはすぐに怒る傾向がありますか。 | Does he have a tendency to get angry quickly? | けいこう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| warning | 警告を無視しないでください。 | Please don't ignore the warning. | けいこく | N5 L5 T5 C5 I3 | cloze+teach | yes |
| warning | 彼女は先生から警告を受けませんでした。 | She didn't receive a warning from the teacher. | けいこく | N4 L5 T5 C2 I3 — Blank could plausibly be filled with other words like 注意 or 叱責, lowering cloze recoverability. | teach only | yes |
| notice | 駅の前に新しい掲示があります。 | There is a new notice in front of the station. | けいじ | N4 L5 T5 C2 I2 — Blank could be filled by many nouns (sign, shop, building, etc.), reducing recoverability. | teach only | yes |
| notice | その掲示を読んでください。 | Please read that notice. | けいじ | N4 L5 T5 C2 I2 — Too generic; many nouns (letter, book, sign) fit the blank. | teach only | yes |
| notice | 掲示に何も書いてありませんでした。 | Nothing was written on the notice. | けいじ | N4 L5 T5 C3 I3 — Slightly more context (書いてある) narrows options but still allows board/sign alternatives. | teach only | yes |
| criminal case | 警察はその刑事事件を調べていますか。 | Is the police investigating that criminal case? | けいじ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| criminal case | 彼はその刑事事件について何も知りませんでした。 | He didn't know anything about that criminal case. | けいじ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| art | 彼女は芸術が好きです。 | She likes art. | げいじゅつ | N5 L5 T5 C2 I2 — Very generic template sentence; many nouns could fill the blank. | teach only | yes |
| art | 彼は芸術に興味がありません。 | He isn't interested in art. | げいじゅつ | N5 L5 T5 C2 I3 — Natural sentence but blank could be filled by many other interest topics. | teach only | yes |
| contract | 会社と契約をしました。 | I made a contract with the company. | けいやく | N5 L5 T5 C3 I3 — Blank could be filled with several nouns like 相談 or 取引 besides 契約. | teach only | yes |
| contract | その契約について話してください。 | Please talk about that contract. | けいやく | N5 L5 T5 C2 I2 — Very generic; 'について話してください' could follow almost any noun. | teach only | yes |
| contract | 彼はまだ契約をしていません。 | He hasn't made the contract yet. | けいやく | N5 L5 T5 C2 I2 — Generic template; many nouns fit '～をしていません'. | teach only | yes |
| courage | 彼は勇気を出して彼女に電話をかけた。 | He gathered his courage and called her. | ゆうき | N5 L5 T5 C5 I4 | cloze+teach | yes |
| courage | 先生の質問に答えるのに勇気が要りますか。 | Does it take courage to answer the teacher's question? | ゆうき | N4 L5 T5 C4 I3 | cloze+teach | yes |
| courage | 新しいスポーツに挑戦する勇気が欲しいです。 | I want the courage to try a new sport. | ゆうき | N5 L5 T5 C4 I3 | cloze+teach | yes |
| valid | この切符はいつまで有効ですか。 | Until when is this ticket valid? | ゆうこう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| valid | このパスポートは来年まで有効です。 | This passport is valid until next year. | ゆうこう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| valid | 古い免許はもう有効ではありません。 | The old license is no longer valid. | ゆうこう | N5 L5 T5 C3 I4 — blank could plausibly be filled by other na-adjectives like 使えない, slightly reducing recoverability | teach only | yes |
| able | あの先生はとても有能です。 | That teacher is very competent. | ゆうのう | N5 L5 T5 C2 I2 — Generic template; many adjectives could fill the blank (優秀, 親切, 厳しい, etc.). | teach only | yes |
| able | 電話で話した彼は有能な人でした。 | The man I spoke to on the phone was a capable person. | ゆうのう | N5 L5 T5 C2 I3 — More context than the others but still many adjectives could fit the blank. | teach only | yes |
| able | あなたの上司は有能ですか。 | Is your boss competent? | ゆうのう | N5 L5 T5 C2 I2 — Generic template question; low cloze specificity since many traits could describe a boss. | teach only | yes |
| advantageous | 英語ができると就職に有利です。 | Being able to speak English is advantageous for job hunting. | ゆうり | N5 L5 T5 C4 I4 | cloze+teach | yes |
| advantageous | この契約は私たちに有利ですか。 | Is this contract advantageous for us? | ゆうり | N5 L5 T5 C3 I3 — Could also fit 有効/不利 in the blank. | teach only | yes |
| advantageous | 早く始めた方が試合で有利になりますよ。 | Starting early will put you at an advantage in the match. | ゆうり | N5 L4 T5 C4 I4 | cloze+teach | yes |
| pleasant | 友達と話す時間はいつも愉快です。 | Time spent talking with friends is always pleasant. | ゆかい | N4 L4 T5 C2 I3 — Many adjectives (楽しい, 面白い) could fill the blank equally well. | teach only | yes |
| pleasant | 音楽を聞きながら踊るのは愉快です。 | Dancing while listening to music is pleasant. | ゆかい | N4 L3 T5 C2 I3 — Blank could be filled with 楽しい or 面白い just as naturally. | teach only | yes |
| pleasant | 今日のパーティーは愉快でしたか。 | Was today's party pleasant? | ゆかい | N4 L3 T5 C2 I3 — Common alternatives like 楽しい fit equally well, weakening cloze uniqueness. | teach only | yes |
| abundant | この国は自然が豊かです。 | This country is rich in nature. | ゆたか | N5 L5 T5 C4 I4 | cloze+teach | yes |
| joy | 彼女の喜びの声が聞こえました。 | I could hear her voice of joy. | よろこび | N4 L5 T5 C3 I4 — Other emotion words (悲しみ, 怒り) could also fit 'voice of ___', slightly reducing recoverability. | teach only | yes |
| joy | 子供が生まれた喜びは大きかったです。 | The joy of having a child was great. | よろこび | N5 L5 T5 C4 I4 | cloze+teach | yes |
| joy | あなたの一番の喜びは何ですか。 | What is your greatest joy? | よろこび | N5 L5 T5 C3 I4 — Words like 趣味 or 楽しみ could also plausibly fill the blank. | teach only | yes |
| elephant | 動物園で象を見ませんか。 | Shall we see the elephant at the zoo? | ぞう | N5 L5 T5 C2 I3 — Many zoo animals could fill the blank, low recoverability. | teach only | yes |
| elephant | 象は鼻が長い動物です。 | The elephant is an animal with a long nose. | ぞう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| elephant | 象は大きいから怖いです。 | The elephant is scary because it's big. | ぞう | N4 L5 T5 C2 I3 — Other large animals (bear, gorilla) also fit the blank. | teach only | yes |
| atmosphere | 大気は地球を包んでいます。 | The atmosphere surrounds the earth. | たいき | N4 L5 T5 C3 I3 — 空気 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| atmosphere | 大気が汚れているから空が白いです。 | The sky is white because the atmosphere is polluted. | たいき | N4 L5 T5 C4 I4 | cloze+teach | yes |
| valley | この谷はとても深いです。 | This valley is very deep. | たに | N5 L5 T5 C2 I3 — Many nouns (川, 海, 池, 森) could fill the blank equally well. | teach only | yes |
| valley | 明日、谷へ行きませんか。 | Shall we go to the valley tomorrow? | たに | N5 L5 T5 C1 I2 — Extremely generic; almost any place noun fits the blank. | teach only | yes |
| valley | あの谷に川がありますか。 | Is there a river in that valley? | たに | N5 L5 T5 C2 I3 — Other landform words (山, 森, 島) could also plausibly fit. | teach only | yes |
| seed | 庭に花の種を植えました。 | I planted flower seeds in the garden. | たね | N5 L5 T5 C4 I3 | cloze+teach | yes |
| seed | 種が安いから買いました。 | I bought seeds because they were cheap. | たね | N4 L5 T5 C2 I2 — blank could be filled by almost any noun, weak cloze context | teach only | yes |
| seed | この種から何が咲きますか。 | What blooms from this seed? | たね | N5 L5 T5 C5 I4 | cloze+teach | yes |
| the earth | 地球は丸いです。 | The earth is round. | ちきゅう | N5 L5 T5 C3 I3 — Other round objects (moon, ball) could fit, slightly reducing uniqueness. | teach only | yes |
| the earth | 私たちは地球に住んでいます。 | We live on the earth. | ちきゅう | N5 L5 T5 C2 I2 — Many places could fill the blank (country, city, etc.), reducing recoverability. | teach only | yes |
| the earth | 地球の未来を考えましょう。 | Let's think about the future of the earth. | ちきゅう | N5 L5 T5 C3 I4 — Other nouns like 国 or 環境 could also fit the blank, but context leans toward earth. | teach only | yes |
| horizon | 朝、地平線から日が昇りました。 | In the morning, the sun rose from the horizon. | ちへいせん | N5 L5 T5 C3 I4 — Could also be 水平線 (sea horizon) since location isn't specified, reducing uniqueness of the blank. | teach only | yes |
| horizon | 地平線はとても遠いです。 | The horizon is very far away. | ちへいせん | N4 L5 T5 C3 I2 — Generic sentence; 水平線 or other distant landmarks could also fit the blank. | teach only | yes |
| horizon | あそこに地平線が見えますか。 | Can you see the horizon over there? | ちへいせん | N5 L5 T5 C3 I3 — Ambiguous between 地平線 and 水平線 without more context. | teach only | yes |
| rainy season | 梅雨の間、雨がよく降ります。 | During the rainy season, it rains often. | つゆ | N5 L4 T5 C3 I3 — could also fit 台風 or another season word | teach only | yes |
| rainy season | もうすぐ梅雨が始まりますね。 | The rainy season is about to start, isn't it? | つゆ | N5 L4 T5 C3 I3 — blank could be filled with other seasonal events like 夏休み | teach only | yes |
| rainy season | 梅雨だから傘が必要です。 | An umbrella is necessary because it's the rainy season. | つゆ | N5 L4 T5 C4 I3 | cloze+teach | yes |
| a change | 来月、部長の異動が決まりました。 | Next month, the manager's transfer was decided. | いどう | N5 L4 T4 C2 I3 — Many words (退職, 昇進, 異動) could fill the blank; 'a change' as gloss is vague but translation fits transfer context. | teach only | yes |
| a change | 彼は外国へ異動することになった。 | He ended up being transferred abroad. | いどう | N5 L3 T5 C3 I4 — Some ambiguity possible (留学, 赴任) but 'transfer abroad' context helps narrow it. | teach only | yes |
| status | 彼は部長より格が上だ。 | He has a higher status than the manager. | かく | N4 L5 T5 C2 I3 — Blank could be filled by many words like 背, 給料, 年齢, not uniquely 格. | teach only | yes |
| borrowing | 彼に借りがあるので、頼みにくい。 | Since I owe him, it's hard to ask him for a favor. | かり | N5 L4 T5 C4 I4 | cloze+teach | yes |
| borrowing | 借りを返すために、お金を貯めている。 | I'm saving money in order to pay back my debt. | かり | N5 L4 T5 C4 I3 | cloze+teach | yes |
| borrowing | まだ借りがありますか。 | Do you still have a debt? | かり | N4 L4 T4 C2 I1 — Too generic; blank could be filled by many nouns (元気, 時間, etc.). | teach only | yes |
| customary practice | この会社には古い慣行がある。 | This company has an old customary practice. | かんこう | N5 L5 T5 C2 I3 — Blank could equally be filled by 習慣/伝統/ルール, low recoverability. | teach only | yes |
| customary practice | その慣行はもう変えるべきだ。 | That customary practice should be changed already. | かんこう | N5 L5 T4 C2 I3 — 'もう' better rendered as 'now/already need to change'; blank not uniquely determined. | teach only | yes |
| customary practice | 慣行に従って、式を行った。 | Following the customary practice, we held the ceremony. | かんこう | N5 L5 T5 C3 I4 — Slightly more specific context (式) narrows options a bit, still allows 慣習/伝統. | teach only | yes |
| mechanism | この機械の機構は複雑だ。 | The mechanism of this machine is complicated. | きこう | N4 L4 T4 C3 I3 — 仕組み/構造 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| regulation | 政府は新しい規制を作った。 | The government made a new regulation. | きせい | N5 L5 T5 C3 I3 — Blank could also be filled by 法律 or 制度, reducing uniqueness. | teach only | yes |
| regulation | その規制は厳しすぎる。 | That regulation is too strict. | きせい | N5 L5 T5 C3 I3 — Could also be ルール or 規則 in context. | teach only | yes |
| regulation | 規制を守らなければならない。 | You must follow the regulation. | きせい | N5 L5 T5 C3 I3 — Could also be 法律 or ルール, making the blank less unique. | teach only | yes |
| member | 私は図書館の会員になりたいです。 | I want to become a member of the library. | かいいん | N4 L5 T5 C3 I2 — Slightly generic but natural; other words like 職員 could also fit the blank somewhat. | teach only | yes |
| persons | 今日は大勢の方々が家に来ました。 | Many people came to my house today. | かたがた | N4 L5 T5 C3 I2 — 人々 or お客さん could also fill the blank, slightly reducing uniqueness. | teach only | yes |
| persons | あの方々は先生ですか。 | Are those people teachers? | かたがた | N5 L5 T5 C4 I3 | cloze+teach | yes |
| persons | 電話で色々な方々に連絡しました。 | I contacted various people by phone. | かたがた | N4 L5 T5 C3 I2 — 人々 or 人たち could also work in this slot. | teach only | yes |
| audience | 試合には大勢の観客が集まりました。 | A large audience gathered for the match. | かんきゃく | N5 L5 T5 C3 I3 | teach only | yes |
| audience | 観客は何人ぐらい来ましたか。 | About how many audience members came? | かんきゃく | N5 L5 T5 C2 I2 — blank could be filled with many nouns like 客 or 人 | teach only | yes |
| audience | 観客と一緒に応援しませんか。 | Shall we cheer together with the audience? | かんきゃく | N4 L5 T5 C2 I3 — blank could plausibly be filled with みんな, 友達, etc. | teach only | yes |
| captain | 彼はチームのキャプテンです。 | He is the captain of the team. | きゃぷてん | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (member, coach, ace, etc.), reducing recoverability; also fairly generic sentence. | teach only | yes |
| captain | 次の試合のキャプテンは誰ですか。 | Who is the captain for the next match? | きゃぷてん | N5 L5 T5 C3 I3 — Context (next match) narrows it somewhat but other roles like referee/coach could still fit. | teach only | yes |
| captain | 私はいつかキャプテンになりたいです。 | I want to become captain someday. | きゃぷてん | N5 L5 T5 C2 I3 — Many aspirational nouns could fill the blank, so exact word isn't uniquely forced. | teach only | yes |
| lover | 彼女は恋人と一緒に映画を見に行きました。 | She went to see a movie with her lover. | こいびと | N5 L5 T5 C3 I3 — Context allows other words like 友達 or 家族 to fit the blank too. | teach only | yes |
| lover | 早く恋人が欲しいです。 | I want a lover soon. | こいびと | N4 L5 T5 C3 I3 — Could also fit 彼氏/彼女, slightly reducing uniqueness of answer. | teach only | yes |
| junior members of a group | 後輩に漢字を教えました。 | I taught kanji to my junior. | こうはい | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (友達, 生徒, 先生 etc.), so 後輩 isn't uniquely recoverable. | teach only | yes |
| junior members of a group | あなたの後輩は今日来ますか。 | Is your junior coming today? | こうはい | N5 L5 T5 C2 I2 — Context doesn't uniquely force 後輩; many people-nouns fit. | teach only | yes |
| junior members of a group | 後輩をパーティーに呼びましょう。 | Let's invite our junior to the party. | こうはい | N5 L5 T5 C2 I3 — Many nouns could replace 後輩 in this context. | teach only | yes |
| national | この国の国民は何人ぐらいいますか。 | About how many citizens are there in this country? | こくみん | N4 L5 T4 C3 I3 — 人口 could also fit the blank, slightly lowering recoverability. | teach only | yes |
| national | 国民は選挙で意見を伝えます。 | Citizens convey their opinions through elections. | こくみん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| individual | これは個人の意見です。 | This is a personal opinion. | こじん | N4 L5 T5 C4 I2 — Generic template sentence, but 個人の意見 is a fixed collocation so answer is fairly recoverable. | cloze+teach | yes |
| individual | 個人で旅行しますか、家族で旅行しますか。 | Will you travel individually, or will you travel with your family? | こじん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| environment | この町の環境は昔よりよくなりました。 | This town's environment has gotten better than before. | かんきょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| environment | 新しい会社の環境はどうですか。 | How is the environment at your new company? | かんきょう | N4 L5 T5 C2 I2 — Blank could be filled by many words like 雰囲気 or 様子, reducing recoverability. | teach only | yes |
| dry | 今朝は空気がとても乾燥していました。 | The air was very dry this morning. | かんそうしていました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| dry | 冬は部屋の中がすごく乾燥しますか。 | Does the inside of the room get very dry in winter? | かんそうします | N5 L5 T5 C4 I3 | cloze+teach | yes |
| dry | 肌が乾燥しないように、クリームを塗りたいです。 | I want to apply cream so my skin doesn't get dry. | かんそうしない | N5 L4 T5 C5 I4 | cloze+teach | yes |
| temperature (weather - not used for | 今日の気温は何度ですか。 | What is today's temperature? | きおん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| temperature (weather - not used for | 教室の気温は低かったです。 | The temperature in the classroom was low. | きおん | N5 L5 T5 C3 I3 — Could also be 室温 or other room-related word, slightly ambiguous. | teach only | yes |
| temperature (weather - not used for | 山に登りながら気温を測りました。 | I measured the temperature while climbing the mountain. | きおん | N4 L5 T5 C2 I4 — Blank could be filled with 標高, 心拍数, 時間, etc., reducing recoverability. | teach only | yes |
| climate | あなたの国はどんな気候ですか。 | What is the climate like in your country? | きこう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| climate | 気候がいい所に住みたいです。 | I want to live in a place with good climate. | きこう | N5 L5 T5 C3 I3 — 環境や天気など他の語も入りうる | teach only | yes |
| vapor | 水は温度によって気体になります。 | Water turns into a gas depending on the temperature. | きたい | N5 L4 T5 C3 I4 — Blank could also be 液体 or 固体, since water changes to multiple states with temperature. | teach only | yes |
| vapor | 空気は気体ですか。 | Is air a gas? | きたい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| vapor | 実験で気体を集めました。 | We collected gas during the experiment. | きたい | N5 L5 T5 C2 I3 — Many nouns (data, samples, water, etc.) could fill the blank in an experiment context. | teach only | yes |
| fog | 今朝は霧が濃かったです。 | The fog was thick this morning. | きり | N5 L5 T5 C5 I3 | cloze+teach | yes |
| fog | 今日は霧が出ますか。 | Will there be fog today? | きり | N4 L5 T5 C4 I2 — slightly generic but fine | cloze+teach | yes |
| fog | 霧のせいで、飛行機が遅れました。 | The airplane was delayed because of the fog. | きり | N5 L4 T5 C5 I4 | cloze+teach | yes |
| smoke | 台所から煙が出ています。 | Smoke is coming from the kitchen. | けむり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| smoke | あの煙は何ですか。 | What is that smoke? | けむり | N5 L5 T5 C2 I2 — blank could be many things like sound, light, smell, etc. | teach only | yes |
| smoke | キャンプで火をつけたら、煙がたくさん出ました。 | When we lit the fire at camp, a lot of smoke came out. | けむり | N5 L5 T5 C5 I4 | cloze+teach | yes |
| ice | 冷蔵庫に氷がたくさんあります。 | There is a lot of ice in the refrigerator. | こおり | N5 L5 T5 C2 I2 — Blank could be filled with many nouns (juice, beer, food) besides ice. | teach only | yes |
| ice | 暑いので、氷が欲しいです。 | It's hot, so I want some ice. | こおり | N5 L5 T5 C2 I2 — Many things could be 'wanted' when hot, not uniquely ice. | teach only | yes |
| ice | この池の氷の上で滑ってもいいですか。 | May I slide on the ice of this pond? | こおり | N5 L5 T5 C5 I4 | cloze+teach | yes |
| trace | 道にはもう雪の跡がありません。 | There's no trace of snow left on the road anymore. | あと | N5 L5 T5 C4 I3 | cloze+teach | yes |
| error | レポートに誤りが見つかりました。 | An error was found in the report. | あやまり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| error | このお金の計算には誤りがありません。 | There's no error in this money calculation. | あやまり | N4 L4 T4 C3 I2 — 間違い could also fit the blank, reducing uniqueness. | teach only | yes |
| defect | この製品には粗があります。 | This product has a defect. | あら | N4 L4 T5 C2 I2 — Generic template; blank could be filled by many nouns like 問題/欠陥. | teach only | yes |
| defect | 料理の粗を探さないでください。 | Please don't look for flaws in the food. | あら | N5 L4 T5 C3 I4 — Uses idiomatic 'あらを探す' which helps narrow the answer somewhat. | teach only | yes |
| defect | 彼の意見には粗がありません。 | There's no flaw in his opinion. | あら | N4 L4 T5 C2 I2 — Generic sentence; other nouns like 欠点/問題 also fit the blank. | teach only | yes |
| expression | これは彼の努力の現れです。 | This is an expression of his effort. | あらわれ | N5 L5 T5 C3 I2 — Generic これは＿です template; synonyms like 結果/成果 could also fit the blank. | teach only | yes |
| expression | これは病気の現れではありません。 | This is not an expression of illness. | あらわれ | N5 L5 T5 C3 I3 — Words like 症状/結果 could also plausibly fill the blank. | teach only | yes |
| expression | それは何の現れですか。 | What is that an expression of? | あらわれ | N5 L5 T5 C3 I3 — Synonyms such as 証拠/しるし could also fit the blank. | teach only | yes |
| a certain... | ある日、彼は会社を辞めました。 | One day, he quit the company. | ある | N5 L5 T5 C5 I4 | cloze+teach | yes |
| a certain... | あるレストランでカレーを食べました。 | I ate curry at a certain restaurant. | ある | N4 L5 T5 C3 I3 — その/あの could also fill the blank, slightly reducing uniqueness. | teach only | yes |
| stability | この仕事は安定しています。 | This job is stable. | あんてい | N4 L4 T5 C3 I3 | teach only | yes |
| stability | 今週は天気が安定しています。 | The weather is stable this week. | あんてい | N5 L4 T5 C3 I3 | teach only | yes |
| to that extent | あんなに雨が降るとは思わなかった。 | I didn't think it would rain that much. | あんなに | N5 L4 T5 C2 I4 — そんなに/とても would also fit the blank equally well. | teach only | yes |
| to that extent | あんなに辛い料理は初めてでした。 | That was the first time I had such spicy food. | あんなに | N5 L4 T5 C2 I4 — そんなに/とても could also fit here. | teach only | yes |
| to that extent | あんなに忙しい日は久しぶりでした。 | It's been a while since I had such a busy day. | あんなに | N5 L4 T5 C2 I4 — そんなに/とても could also fit here. | teach only | yes |
| force | 電車はすごい勢いで走っていた。 | The train was running at tremendous speed. | いきおい | N5 L5 T4 C4 I4 — Translation says 'speed' rather than 'force', slightly loose but acceptable. | cloze+teach | yes |
| force | その勢いで仕事を続けてください。 | Please continue the work with that momentum. | いきおい | N4 L5 T4 C3 I3 — その調子で is a common alternative that could also fit the blank, reducing uniqueness. | teach only | yes |
| to be drowned | プールで溺れないでください。 | Please don't drown in the pool. | おぼれないで | N4 L5 T5 C3 I3 — Other verbs like 泳がない or 騒がない could also fit the blank. | teach only | yes |
| recovery | 病気の回復には時間がかかります。 | Recovery from illness takes time. | かいふく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| recovery | 手術の後、彼の回復は早かったです。 | After the surgery, his recovery was fast. | かいふく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| recovery | 医者は回復に一週間かかると言いました。 | The doctor said recovery would take one week. | かいふく | N5 L5 T5 C3 I3 — other words like 治療 or 退院 could also fit the blank | teach only | yes |
| to suffer from | 冬になると、風邪に罹る人が多いです。 | When winter comes, many people catch colds. | かかる | N5 L4 T5 C3 I3 — 『なる』も文法的に入り得るため、穴埋めの一意性がやや低い。 | teach only | yes |
| to suffer from | 病気に罹らないように、手を洗いましょう。 | Let's wash our hands so we don't get sick. | かからない | N5 L4 T5 C3 I3 — 『ならない』でも成立するため一意性がやや低い。 | teach only | yes |
| to suffer from | 彼は珍しい病気に罹ったそうです。 | I heard he came down with a rare disease. | かかった | N5 L4 T5 C3 I4 — 『なった』でも意味が通るため一意性がやや低い。 | teach only | yes |
| shoulder | 仕事のし過ぎで肩が痛いです。 | My shoulder hurts from working too much. | かた | N5 L5 T5 C4 I3 | cloze+teach | yes |
| shoulder | 肩に鞄をかけて、駅まで歩きました。 | I walked to the station with my bag over my shoulder. | かた | N5 L5 T5 C5 I4 | cloze+teach | yes |
| shoulder | 疲れたなら、肩を貸しましょうか。 | If you're tired, shall I lend you my shoulder? | かた | N5 L4 T4 C4 I5 — English translation is literal/idiomatic mismatch but conveys meaning contextually. | cloze+teach | yes |
| hair (head) | 髪の毛が長くなったので、切りたいです。 | My hair has gotten long, so I want to cut it. | かみのけ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| hair (head) | 床屋で髪の毛を切ってもらいました。 | I got my hair cut at the barber shop. | かみのけ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| hair (head) | 髪の毛が肩に掛かっています。 | Her hair falls to her shoulders. | かみのけ | N4 L5 T4 C4 I3 — EN adds 'Her' not explicit in Japanese; blank could also fit other draping objects like scarf, slightly reducing recoverability. | cloze+teach | yes |
| itchy | この石鹸を使うと、体がかゆくなります。 | If I use this soap, my body gets itchy. | かゆく | N5 L5 T5 C3 I3 — Other adjectives like 痛く/赤く could also fit the blank, reducing uniqueness. | teach only | yes |
| to cut (hair) | 土曜日に庭の草を刈りましょう。 | Let's cut the grass in the garden on Saturday. | かりましょう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to cut (hair) | 床屋で髪を短く刈ってもらいました。 | I had my hair cut short at the barber shop. | かって | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to cut (hair) | 父はいつも自分で髪を刈ります。 | My father always cuts his own hair. | かります | N5 L5 T5 C5 I4 | cloze+teach | yes |
| skin | 野菜の皮をむいてください。 | Please peel the skin off the vegetable. | かわ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| skin | 魚の皮は硬いですから、食べません。 | Fish skin is tough, so I don't eat it. | かわ | N5 L5 T5 C4 I3 — 骨 (bone) could also plausibly fill the blank as something hard on fish. | cloze+teach | yes |
| actually | 実は、私は絵を描くのが好きです。 | Actually, I like drawing pictures. | じつは | N4 L5 T5 C2 I2 — Other adverbs like 本当は or でも could fit the blank equally well. | teach only | yes |
| actually | 実は、テストは簡単でした。 | Actually, the test was easy. | じつは | N4 L5 T5 C2 I2 — Blank could be filled by similar adverbs (本当は, でも) so it's not uniquely recoverable. | teach only | yes |
| actually | 実は、この料理は辛いです。 | Actually, this dish is spicy. | じつは | N4 L5 T5 C2 I2 — Sentence is generic and the blank isn't uniquely determined by context. | teach only | yes |
| disappointment | 彼の話を聞いて、失望を感じました。 | I felt disappointment after hearing his story. | しつぼう | N4 L5 T5 C4 I3 | cloze+teach | yes |
| ability | 彼は英語の実力があります。 | He has real ability in English. | じつりょく | N4 L5 T4 C3 I3 — Blank could also be filled by 才能/力/知識, reducing uniqueness. | teach only | yes |
| ability | もっと実力をつけたいです。 | I want to build up more ability. | じつりょく | N4 L5 T5 C4 I3 | cloze+teach | yes |
| ability | 試合で自分の実力を出しました。 | I showed my true ability in the match. | じつりょく | N5 L5 T5 C5 I4 — 実力を出す is a strong collocation, making the blank clearly recoverable. | cloze+teach | yes |
| leadership | 先生の指導で漢字が上手になりました。 | Thanks to the teacher's guidance, I became good at kanji. | しどう | N5 L5 T4 C3 I3 — Target gloss 'leadership' is inaccurate; 指導 here means 'guidance/instruction'. Blank could also fit 助け/練習. | teach only | yes |
| leadership | コーチの指導を受けました。 | I received the coach's guidance. | しどう | N5 L5 T4 C2 I2 — Very generic; blank could fit アドバイス/指示/助言 equally well; gloss 'leadership' mismatches meaning. | teach only | yes |
| leadership | 先輩の指導を受けたいです。 | I want to receive guidance from my senior. | しどう | N5 L5 T4 C2 I2 — Generic template; blank could fit アドバイス/助言 too; gloss mismatch as above. | teach only | yes |
| often | この町ではしばしば雨が降ります。 | It often rains in this town. | しばしば | N4 L4 T5 C3 I3 | teach only | yes |
| often | 学生の時、しばしば図書館へ行きました。 | When I was a student, I often went to the library. | しばしば | N4 L4 T5 C3 I3 | teach only | yes |
| often | 彼はしばしば映画を見ます。 | He often watches movies. | しばしば | N4 L4 T5 C3 I2 — generic template sentence | teach only | yes |
| funds | 会社を作るには資本が必要です。 | To start a company, funds are necessary. | しほん | N5 L5 T5 C3 I3 — Could also fit 資金 or お金, but decent context. | teach only | yes |
| pride | 彼は自分の車を自慢します。 | He boasts about his own car. | じまんします | N5 L5 T5 C3 I3 — Other verbs (洗います, 運転します) could also fit the blank grammatically. | teach only | yes |
| pride | 彼女はテストの点を自慢しました。 | She boasted about her test score. | じまんしました | N5 L5 T5 C3 I3 — Context allows other verbs like 気にしました or 忘れました to fit. | teach only | yes |
| pride | この店は料理の味を自慢しています。 | This restaurant boasts about the taste of its food. | じまんしています | N5 L5 T5 C3 I3 — Other verbs like 大切にしています could also fit the blank. | teach only | yes |
| debt | 彼は借金があります。 | He has debt. | しゃっきん | N4 L5 T5 C2 I1 — Blank could be filled by many nouns (お金, 彼女, 時間), and sentence is very generic. | teach only | yes |
| debt | 去年、車のために借金をしました。 | Last year, I took on debt for a car. | しゃっきん | N4 L5 T5 C3 I3 — 貯金 (savings) could also fit the blank, reducing uniqueness. | teach only | yes |
| debt | 早く借金を返したいです。 | I want to pay off my debt quickly. | しゃっきん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| anyhow | とにかく子供たちは元気です。 | Anyway, the children are doing fine. | とにかく | N4 L5 T5 C2 I2 — Blank too easily filled by other words like とりあえず/まあ; weak context. | teach only | yes |
| anyhow | 詳しいことは分からないが、とにかくすぐに来てください。 | I don't know the details, but please come right away anyhow. | とにかく | N5 L4 T5 C5 I4 | cloze+teach | yes |
| anyhow | とにかく一度うちに遊びに来ませんか。 | Anyway, won't you come play at my house sometime? | とにかく | N4 L4 T4 C3 I3 — Blank could also be filled by ぜひ or 一度 phrasing works with several fillers. | teach only | yes |
| sharing with | 両親と共に旅行に行きました。 | I went on a trip together with my parents. | ともに | N5 L5 T5 C3 I3 — 共に could be swapped with 一緒に in this context, slightly reducing unique recoverability. | teach only | yes |
| sharing with | 友達と共にテストを頑張りました。 | I worked hard on the test together with my friend. | ともに | N4 L5 T5 C3 I3 — Same ambiguity with 一緒に as a plausible alternative. | teach only | yes |
| sharing with | 彼と共に働きたいですか。 | Do you want to work together with him? | ともに | N5 L5 T5 C3 I3 — Context allows 一緒に as an alternative fit for the blank. | teach only | yes |
| great effort | 試験のために努力しました。 | I made an effort for the exam. | どりょく | N4 L5 T5 C2 I2 — Blank could be filled by many words like 勉強 or 準備. | teach only | yes |
| great effort | 父はいつも仕事で努力しています。 | My father is always making an effort at work. | どりょく | N4 L5 T5 C2 I3 — Context allows other verbs like 苦労 or 残業 to fit the blank. | teach only | yes |
| great effort | 毎日努力していますか。 | Are you making an effort every day? | どりょく | N4 L5 T5 C1 I2 — Very generic sentence; many verbs (勉強, 運動, 努力) could fit the blank. | teach only | yes |
| still | 父は年をとったが、なお元気です。 | My father has aged, but he is still healthy. | なお | N5 L4 T5 C3 I3 — まだ could also naturally fill this blank with the same meaning, slightly reducing uniqueness. | teach only | yes |
| relation (advanced) | 兄弟の仲がいいです。 | The brothers get along well. | なか | N5 L5 T5 C5 I3 | cloze+teach | yes |
| relation (advanced) | 彼女とは仲が悪いです。 | I don't get along well with her. | なか | N5 L5 T5 C5 I3 | cloze+teach | yes |
| relation (advanced) | 二人の仲はどうですか。 | How is the relationship between the two of them? | なか | N5 L5 T5 C3 I3 — Blank could also be filled with 関係 or similar, reducing uniqueness. | teach only | yes |
| content | この箱の中身は何ですか。 | What is the content of this box? | なかみ | N5 L5 T5 C3 I3 — Blank could also be filled by other nouns like 色 or 大きさ, reducing forced uniqueness. | teach only | yes |
| content | 手紙の中身を教えてください。 | Please tell me the content of the letter. | なかみ | N5 L5 T5 C3 I3 — 内容 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| content | そのかばんの中身は重いです。 | The contents of that bag are heavy. | なかみ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| contents | この缶の中味は甘いです。 | The contents of this can are sweet. | なかみ | N4 L5 T5 C3 I2 — Blank could also be filled with 味 (taste), reducing uniqueness. | teach only | yes |
| contents | 小包の中味は壊れやすいです。 | The contents of the parcel break easily. | なかみ | N4 L5 T5 C4 I3 | cloze+teach | yes |
| without | 砂糖なしでコーヒーを飲みます。 | I drink coffee without sugar. | なし | N5 L5 T5 C4 I3 | cloze+teach | yes |
| without | 宿題なしの日は楽しいです。 | Days without homework are fun. | なし | N4 L5 T5 C4 I3 | cloze+teach | yes |
| without | 連絡なしで来ないでください。 | Please don't come without contacting me. | なし | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to warp | 木の板が日に当たって反った。 | The wooden board warped in the sun. | かえった | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to warp | 古い写真が反っていますか。 | Is the old photo warped? | かえって | N4 L5 T5 C3 I3 — Other verbs like 色あせる/破れる could also fit the blank, reducing recoverability. | teach only | yes |
| to hold or carry under or in the arms | 重い荷物を抱えて空港を歩いた。 | I walked through the airport carrying heavy luggage. | かかえて | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to hold or carry under or in the arms | 忙しくて仕事をたくさん抱えている。 | I'm busy and have a lot of work on my hands. | かかえている | N5 L5 T5 C3 I4 — 持って could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| to be piled up | 洗った皿が台所に重なっている。 | The washed plates are stacked up in the kitchen. | かさなっている | N4 L5 T5 C3 I3 — Other verbs like 積んである/積み重なっている could also fit the blank. | teach only | yes |
| to be piled up | 今週は用事が重なって忙しい。 | This week my errands overlap and I'm busy. | かさなって | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to be piled up | 旅行の予定が友達の誕生日と重なった。 | My travel plans overlapped with my friend's birthday. | かさなった | N5 L5 T5 C5 I4 | cloze+teach | yes |
| returning home | 今日は仕事が忙しくて帰宅が遅くなった。 | Today work was busy and I got home late. | きたく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| returning home | 毎日何時に帰宅しますか。 | What time do you get home every day? | きたく | N5 L5 T5 C4 I3 — could also be answered with other suru-verbs like 起床 or 就寝, slightly reducing uniqueness | cloze+teach | yes |
| to kick | 公園でボールを蹴って遊んだ。 | We played by kicking a ball at the park. | けって | N5 L5 T5 C3 I3 — other verbs like 投げる could also fit contextually | teach only | yes |
| to kick | そのボールを強く蹴ってください。 | Please kick that ball hard. | けって | N5 L5 T5 C3 I2 — generic command sentence, several verbs could fit blank | teach only | yes |
| to kick | 弟が怒ってドアを蹴った。 | My little brother got angry and kicked the door. | けった | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to go over | 山を越して隣の町に着いた。 | I crossed over the mountain and arrived at the next town. | こして | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to cross | 鍋の温度が九十度を超した。 | The pot's temperature exceeded ninety degrees. | こした | N4 L4 T5 C4 I3 | cloze+teach | yes |
| to cross | この山は三千メートルを超す高い山だ。 | This mountain is a high mountain exceeding three thousand meters. | こす | N4 L4 T5 C3 I3 — reading of メートル as めえとる is a slightly nonstandard kana rendering. | teach only | yes |
| to cross | 今日の気温は三十度を超す。 | Today's temperature will exceed thirty degrees. | こす | N4 L4 T5 C3 I2 — generic weather-report style sentence. | teach only | yes |
| socialization | 家族との付き合いは大切ですから、よく電話します。 | Because socializing with family is important, I call often. | つきあい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| socialization | 友達との付き合いは楽しいですか。 | Is socializing with friends fun? | つきあい | N5 L5 T5 C3 I3 — Blank could also be filled with 関係 or similar words, reducing uniqueness. | teach only | yes |
| socialization | 学生との付き合いが少ないです。 | I have little interaction with the students. | つきあい | N5 L5 T4 C3 I3 — Blank could also be filled with 交流 or 関係. | teach only | yes |
| to be handed down | この着物は祖母から母に伝わりました。 | This kimono was passed down from grandmother to mother. | つたわりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be handed down | この話は昔から学校に伝わっています。 | This story has been passed down at the school since long ago. | つたわっています | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to be connected to | 電話がなかなか繋がりません。 | The phone call won't connect. | つながりません | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to be connected to | この電話は事務所に繋がっていますか。 | Is this phone connected to the office? | つながっています | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to be connected to | 家族と繋がっているから、安心です。 | Because I'm connected with my family, I feel at ease. | つながっている | N4 L4 T5 C4 I4 | cloze+teach | yes |
| to connect | 先生はコンピュータをスクリーンに繋げました。 | The teacher connected the computer to the screen. | つなげました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to connect | 電話を繋げましょうか。 | Shall I connect the call? | つなげましょう | N4 L5 T5 C3 I3 — 電話をかける/つなぐ等も文脈上あり得る | teach only | yes |
| to connect | 父はテレビとステレオを繋げました。 | My father connected the TV and the stereo. | つなげました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| proposal | 学生が新しい規則を提案しました。 | The student proposed a new rule. | ていあん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| proposal | その提案について家族はどう思いますか。 | What does your family think about that proposal? | ていあん | N5 L5 T5 C5 I3 | cloze+teach | yes |
| pleased to meet you | 今日から学生です、どうぞよろしく。 | I'm a student starting today, pleased to meet you. | どうぞよろしく | N4 L5 T4 C4 I3 | cloze+teach | yes |
| smile sweetly | 母はにっこり笑いました。 | My mother smiled sweetly. | にっこり | N5 L5 T5 C3 I2 | teach only | yes |
| smile sweetly | 友達はにっこりして手を振りました。 | My friend smiled sweetly and waved. | にっこり | N5 L5 T5 C4 I3 | cloze+teach | yes |
| smile sweetly | 先生はにっこり笑って答えました。 | The teacher smiled sweetly and answered. | にっこり | N5 L5 T5 C3 I3 | teach only | yes |
| children | この学校には児童が三百人います。 | There are three hundred children at this school. | じどう | N5 L5 T5 C2 I2 — 生徒 or 子供 could also fit the blank equally well. | teach only | yes |
| children | 児童が多いから、クラスはにぎやかです。 | Since there are many children, the class is lively. | じどう | N5 L5 T5 C2 I3 — 生徒 or 子供 could also fit; context doesn't uniquely require 児童. | teach only | yes |
| children | 児童を教室に集めてください。 | Please gather the children in the classroom. | じどう | N5 L5 T5 C2 I3 — 生徒 or 子供 could equally fill the blank here. | teach only | yes |
| sisters | 私たちは三人姉妹です。 | We are three sisters. | しまい | N5 L5 T5 C2 I3 — Could also be 兄弟 or another counter word, low uniqueness. | teach only | yes |
| sisters | 姉妹だから、声がよく似ています。 | Since they are sisters, their voices sound alike. | しまい | N5 L5 T5 C3 I4 — 双子 or 兄弟 could also fit the blank plausibly. | teach only | yes |
| sisters | あの二人は姉妹ではありません。 | Those two are not sisters. | しまい | N5 L5 T5 C2 I3 — Many relationship words (友達, 恋人, 兄弟) could fill the blank. | teach only | yes |
| inhabitants | この町の住民は千人ぐらいです。 | The residents of this town number about a thousand. | じゅうみん | N5 L5 T5 C3 I3 — 人口 (population) could also fit the blank, slightly reducing recoverability. | teach only | yes |
| inhabitants | 住民があまりいないから、村はとても静かです。 | Since there aren't many residents, the village is very quiet. | じゅうみん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| inhabitants | 住民の皆さんはここに名前を書いてください。 | Residents, please write your names here. | じゅうみん | N5 L5 T5 C3 I3 — Other nouns like 生徒 or 参加者 could plausibly fill the blank. | teach only | yes |
| housewife | 母は主婦で、毎晩晩御飯を作ります。 | My mother is a housewife and makes dinner every evening. | しゅふ | N5 L5 T5 C3 I3 — Other jobs (e.g. cook) could plausibly fill the blank given the context. | teach only | yes |
| housewife | 主婦だから、料理がとても上手です。 | Since she is a housewife, she is very good at cooking. | しゅふ | N4 L5 T5 C2 I2 — No subject given, so many nouns could fit before だから explaining cooking skill. | teach only | yes |
| housewife | 姉は主婦ではなくて、会社に勤めています。 | My older sister is not a housewife; she works at a company. | しゅふ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| young girl | あの少女は公園で歌を歌っています。 | That young girl is singing a song in the park. | しょうじょ | N5 L5 T5 C2 I3 — Blank could equally be 女の子, 男の子, 少年, etc., not uniquely recoverable. | teach only | yes |
| young girl | その少女は誰とも話しません。 | That girl doesn't talk to anyone. | しょうじょ | N5 L5 T5 C2 I3 — Blank could be filled by many other nouns like 少年 or 男の子, not uniquely determined. | teach only | yes |
| boys | 少年は元気だから、いつも外で走っています。 | Since the boy is energetic, he's always running outside. | しょうねん | N4 L5 T4 C2 I2 — Blank could be filled by many nouns (child, dog, athlete, etc.); also target gloss is 'boys' plural but sentence uses singular. | teach only | yes |
| boys | 少年たちに静かにするように言ってください。 | Please tell the boys to be quiet. | しょうねん | N4 L5 T5 C3 I2 — Blank could be filled by other plural nouns like children, students, kids. | teach only | yes |
| queen | 昔、この国には女王がいました。 | Long ago, this country had a queen. | じょおう | N5 L5 T5 C3 I3 — Could also be 王様 (king), so context doesn't uniquely force 'queen'. | teach only | yes |
| queen | あの国には女王がいません。 | That country doesn't have a queen. | じょおう | N5 L5 T5 C3 I3 — Could also be 王様 (king), so the blank isn't uniquely 'queen'. | teach only | yes |
| letter (of alphabet) | 子供に文字を教えます。 | I teach letters to my child. | もじ | N5 L5 T5 C2 I3 — Many words could fill the blank, e.g. 勉強, 英語, 漢字. | teach only | yes |
| letter (of alphabet) | この手紙の文字が読めません。 | I can't read the letters on this letter. | もじ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| letter (of alphabet) | この文字はどう読みますか。 | How do you read this character? | もじ | N5 L5 T5 C3 I4 — Could also be 漢字 or 名前, slightly reducing uniqueness. | teach only | yes |
| to employ | 仕事が忙しいから、新しい人を雇います。 | Because work is busy, I will hire a new person. | やといます | N5 L5 T5 C3 I3 — Other verbs like 探す or 呼ぶ could also fit the blank. | teach only | yes |
| to employ | アルバイトを雇いませんか。 | Won't you hire a part-time worker? | やといません | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to employ | お金がないので、誰も雇いません。 | Since there's no money, we won't hire anyone. | やといません | N5 L5 T5 C4 I3 | cloze+teach | yes |
| reading | この字の読みは何ですか。 | What is the reading of this character? | よみ | N5 L5 T5 C4 I3 — Very natural and clear, though 発音 or 意味 could arguably fit too. | cloze+teach | yes |
| reading | この漢字の読みを覚えていません。 | I don't remember the reading of this kanji. | よみ | N5 L5 T5 C4 I3 — Natural and common phrase; 意味 could also plausibly fit but 読み is most idiomatic. | cloze+teach | yes |
| studying abroad | 来年、アメリカに留学したいです。 | I want to study abroad in America next year. | りゅうがく | N5 L5 T5 C3 I3 — other words like 旅行/引っ越し could also fit the blank grammatically | teach only | yes |
| studying abroad | 一緒に留学しませんか。 | Won't you study abroad together with me? | りゅうがくしませんか | N5 L5 T5 C2 I2 — very generic frame; many verbs (食事, 旅行, 勉強など) could fill the blank | teach only | yes |
| labor | 労働が大変だから、疲れました。 | Because the labor is tough, I got tired. | ろうどう | N4 L5 T4 C3 I3 — 仕事 could also plausibly fill the blank, slightly reducing recoverability. | teach only | yes |
| thesis | 大学で論文を書いています。 | I'm writing a thesis at university. | ろんぶん | N5 L5 T5 C3 I3 — Blank could also fit レポート/本 etc., so not fully unique. | teach only | yes |
| thesis | まだ論文が終わりません。 | The thesis still isn't finished. | ろんぶん | N5 L5 T5 C2 I3 — Many nouns (仕事, 宿題, 授業) could fill the blank equally well. | teach only | yes |
| thesis | 論文はもう出しましたか。 | Have you submitted the thesis yet? | ろんぶん | N5 L5 T5 C3 I3 — Could also be レポート or 書類, reducing uniqueness. | teach only | yes |
| questionnaire | このアンケートに答えてくれませんか。 | Won't you answer this questionnaire for me? | あんけえと | N5 L5 T5 C4 I3 | cloze+teach | yes |
| questionnaire | 会社でアンケートを作りました。 | I made a questionnaire at the company. | あんけえと | N5 L5 T5 C2 I2 — blank could be filled with many nouns like 資料 or 書類 | teach only | yes |
| questionnaire | アンケートが必要だから、質問を考えました。 | Because a questionnaire is needed, I thought of some questions. | あんけえと | N4 L5 T5 C4 I3 | cloze+teach | yes |
| teachings | 先生の教えを覚えています。 | I remember my teacher's teachings. | おしえ | N4 L5 T5 C3 I3 — Blank could also be filled by 名前, 話, etc., reducing uniqueness. | teach only | yes |
| teachings | 先生の教えを忘れてしまいました。 | I ended up forgetting my teacher's teachings. | おしえ | N5 L4 T5 C3 I3 — Several other nouns (名前, 約束) could fit the blank equally well. | teach only | yes |
| teachings | その教えはどんな意味ですか。 | What kind of meaning does that teaching have? | おしえ | N4 L5 T5 C3 I3 — Context (意味) narrows options but words like 言葉 or 話 could also fit. | teach only | yes |
| fairness | 店員はみんなに公平に品物を売りますか。 | Does the clerk sell goods to everyone fairly? | こうへい | N4 L5 T5 C3 I3 — 公平 and 平等 could both fit the blank, slightly reducing recoverability. | teach only | yes |
| fairness | 薬をみんなに公平にあげましょうか。 | Shall we give the medicine to everyone fairly? | こうへい | N4 L5 T5 C3 I3 — 公平 and 平等 are near-synonyms here, slightly reducing uniqueness of the blank. | teach only | yes |
| quite | 朝はごく簡単な朝御飯を食べます。 | In the morning I eat a quite simple breakfast. | ごく | N4 L5 T5 C2 I3 — Other adverbs like とても/かなり would also fit the blank. | teach only | yes |
| quite | 風邪はごく軽いですから、心配しないでください。 | The cold is quite mild, so please don't worry. | ごく | N5 L5 T5 C3 I4 — Context helps but other degree adverbs could still fit. | teach only | yes |
| highest | このレストランの料理は最高です。 | This restaurant's food is the best. | さいこう | N5 L5 T5 C2 I2 — Many adjectives (おいしい, いい, すごい) could fill the blank, not uniquely 最高. | teach only | yes |
| highest | 今日は天気が最高だから、歩いて会社へ行きませんか。 | The weather is the best today, so shall we walk to the office? | さいこう | N4 L5 T5 C3 I4 — Context (walking because of weather) narrows options somewhat but いい could still fit. | teach only | yes |
| least | 今日は値段が最低です。 | Today the price is the lowest. | さいてい | N4 L5 T4 C2 I2 — Many words (高い/安い/最高) could fill the blank, so 最低 isn't uniquely recoverable. | teach only | yes |
| least | 今朝の気温は最低でしたか。 | Was this morning's temperature the lowest? | さいてい | N4 L5 T5 C2 I2 — Blank could also be filled with 高い/低い/最高, reducing uniqueness. | teach only | yes |
| fortunately | 幸い、熱はもうありません。 | Fortunately, I no longer have a fever. | さいわい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| fortunately | 幸い、道が空いていたから、早く会社に着きました。 | Fortunately, the road was empty, so I got to the office early. | さいわい | N5 L5 T5 C5 I4 | cloze+teach | yes |
| roughly | ざっと計算すると、五千円ぐらいです。 | Roughly calculating, it's about five thousand yen. | ざっと | N5 L5 T5 C4 I4 | cloze+teach | yes |
| roughly | 朝はざっと新聞を読んでから、出かけます。 | In the morning, I roughly read the newspaper before going out. | ざっと | N5 L5 T5 C4 I4 | cloze+teach | yes |
| feeling refreshed | お風呂に入って、さっぱりしました。 | I took a bath and felt refreshed. | さっぱり | N5 L5 T5 C3 I3 — すっきり could also fit the blank, slightly lowering recoverability. | teach only | yes |
| feeling refreshed | 顔を洗って、さっぱりしましたか。 | Did you wash your face and feel refreshed? | さっぱり | N5 L5 T5 C3 I3 — すっきり could also fit the blank. | teach only | yes |
| feeling refreshed | 運動をしたから、さっぱりしました。 | I felt refreshed because I exercised. | さっぱり | N4 L5 T5 C2 I3 — After exercise, 疲れました or すっきり would also fit naturally, reducing recoverability. | teach only | yes |
| just like | 顔が赤くて、まるで熱があるようです。 | My face is red, it's just like I have a fever. | まるで | N5 L4 T4 C4 I4 | cloze+teach | yes |
| just like | 電車の中はまるでお祭りのようでした。 | The inside of the train was just like a festival. | まるで | N5 L4 T5 C4 I4 | cloze+teach | yes |
| nationality | 彼の国籍はアメリカです。 | His nationality is American. | こくせき | N5 L5 T5 C2 I2 — other words like 出身 could also fit the blank | teach only | yes |
| nationality | 国籍を教えてください。 | Please tell me your nationality. | こくせき | N5 L5 T5 C2 I2 — generic template, many words (名前, 住所, etc.) fit the blank | teach only | yes |
| nationality | この書類に国籍を書かなければなりません。 | I have to write my nationality on this document. | こくせき | N5 L5 T5 C2 I3 — blank could be filled by 名前, 住所, etc. | teach only | yes |
| conquest | 彼は病気を克服しました。 | He overcame his illness. | こくふく | N5 L4 T4 C4 I3 — Gloss 'conquest' is off; better as 'overcome'; blank could also fit 発病/治療 loosely but 克服 is strongly implied by context. | cloze+teach | yes |
| to differ | 二人の意見は異なります。 | The two people's opinions differ. | ことなります | N4 L4 T5 C3 I3 — 違います could also fit the blank, slightly reducing recoverability | teach only | yes |
| to like | 母は静かな場所を好みます。 | My mother likes quiet places. | このみます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to like | 子供は甘い物を好むことが多いです。 | Children often like sweet things. | このむ | N5 L5 T5 C3 I3 — blank could also be filled with 食べる/欲しがる etc. | teach only | yes |
| to like | 彼女はどんな料理を好みますか。 | What kind of food does she like? | このみます | N5 L5 T5 C3 I3 — blank could also be filled with 作ります/食べます. | teach only | yes |
| these | これらの本は図書館のです。 | These books are from the library. | これら | N4 L5 T5 C2 I2 — Blank could equally be filled by この/その/あの with book unspecified, so context doesn't force これら specifically. | teach only | yes |
| these | これらの写真を見てください。 | Please look at these photos. | これら | N4 L5 T5 C2 I2 — Any demonstrative (この/その/あの) could fit grammatically, weak cloze cue for これら specifically. | teach only | yes |
| these | これらは全部私の荷物です。 | All of these are my luggage. | これら | N4 L5 T5 C3 I3 — 全部 hints at plural demonstrative, but それら/あれら also plausible, slightly ambiguous. | teach only | yes |
| confusion | 電車が混雑しているので、会社に遅れました。 | Because the train was crowded, I was late for work. | こんざつして | N5 L5 T4 C3 I3 — Word gloss 'confusion' is misleading (混雑 means congestion/crowding), but the sentence itself is natural; several words like 遅延 or 故障 could also fit the blank, reducing uniqueness. | teach only | yes |
| confusion | 道が混雑していて、家に帰るのが遅くなりました。 | The road was congested, so I got home late. | こんざつしていて | N5 L5 T4 C3 I3 — Same gloss issue as above; 渋滞 could also plausibly fill the blank, slightly weakening cloze recoverability. | teach only | yes |
| chaos | 突然の電話で、家族は混乱しました。 | With the sudden phone call, the family was thrown into confusion. | こんらんしました | N5 L4 T5 C3 I4 — other emotional reactions like 動揺 or 心配 could arguably fit but 混乱 is fairly natural fit | teach only | yes |
| chaos | 台風で駅はとても混乱していました。 | Because of the typhoon, the station was in great confusion. | こんらんしていました | N5 L4 T5 C5 I4 | cloze+teach | yes |
| chaos | 急いでいたので、頭が混乱してしまいました。 | Because I was in a hurry, my mind got confused. | こんらんしてしまいました | N5 L4 T5 C4 I4 | cloze+teach | yes |
| hello | 玄関で「こんにちは」と大きい声で言いました。 | I said "hello" loudly at the entrance. | こんにちは | N4 L5 T5 C3 I3 — Other greetings like すみません could also fit the blank. | teach only | yes |
| hello | 友達が来たら、まず「こんにちは」と言いましょう。 | When a friend comes, let's say "hello" first. | こんにちは | N4 L5 T5 C3 I3 — いらっしゃい could also plausibly fit depending on perspective. | teach only | yes |
| to shout | 子供が公園で大きい声で叫びました。 | The child shouted loudly at the park. | さけびました | N4 L5 T5 C4 I3 — 大きな声で would be slightly more natural than 大きい声で. | cloze+teach | yes |
| to point | 父は写真の中の人を指しました。 | My father pointed at the person in the photo. | さしました | N4 L5 T5 C3 I2 — Blank could plausibly be filled by other verbs like 見ました. | teach only | yes |
| to point | あなたはどれを指していますか。 | Which one are you pointing at? | さして | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to invite (someone to do something with | 友達を映画に誘いました。 | I invited my friend to a movie. | さそいました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| seeing one off | 空港へ友達の見送りに行きました。 | I went to the airport to see my friend off. | みおくり | N5 L5 T5 C3 I3 — Could also be 出迎え or 迎え depending on context, slightly ambiguous blank. | teach only | yes |
| seeing one off | 明日、兄の見送りをするつもりです。 | Tomorrow I plan to see my older brother off. | みおくり | N5 L5 T5 C3 I3 — Blank could be filled with other nouns like 出迎え or 世話, reducing uniqueness. | teach only | yes |
| seeing one off | 見送りのために、駅まで一緒に行きましょう。 | Let's go to the station together to see them off. | みおくり | N5 L5 T5 C3 I3 — Context doesn't fully exclude alternatives like 出迎え. | teach only | yes |
| expression of sympathy | 病気の友達の見舞いに行きます。 | I'm going to visit my sick friend. | みまい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| expression of sympathy | 入院した父の見舞いに行くつもりです。 | I plan to visit my father who is hospitalized. | みまい | N5 L5 T5 C5 I3 | cloze+teach | yes |
| expression of sympathy | 電話でお見舞いの言葉を伝えました。 | I conveyed words of sympathy over the phone. | みまい | N5 L5 T5 C3 I3 — お祝いの言葉 also fits the blank, reducing recoverability. | teach only | yes |
| to order | 母は子供に何も命じませんでした。 | The mother didn't order the child to do anything. | めいじません | N4 L4 T5 C3 I3 — Blank could plausibly be filled by other verbs like 言いません, slightly reducing recoverability. | teach only | yes |
| to order | 誰があなたにそれを命じたのですか。 | Who ordered you to do that? | めいじた | N4 L4 T5 C3 I3 — Blank could be filled by other verbs like 言った or 頼んだ, reducing uniqueness. | teach only | yes |
| apology | 申し訳ないと思いながら、電話を切りました。 | Feeling apologetic, I hung up the phone. | もうしわけない | N5 L5 T5 C3 I4 — Blank could also be filled by other adjectives like 悪い or 残念, reducing uniqueness. | teach only | yes |
| to be prolonged | 仕事が忙しくて、会議が延びました。 | The meeting got extended because work was busy. | のびました | N4 L5 T4 C3 I3 — Could also be 遅れる, so blank isn't fully forced. | teach only | yes |
| to be prolonged | 電車が遅れて、出発の時間は延びますか。 | The train is late, so will the departure time be extended? | のびます | N4 L5 T5 C3 I3 — 延びる and 遅れる both plausible fits for the blank. | teach only | yes |
| to be prolonged | 熱があるので、休みが延びることになりました。 | Since I have a fever, my time off has ended up being extended. | のびる | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to measure | 会議の時間を計りましょうか。 | Shall we time the meeting? | はかりましょう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to sweep | 事務所の床を毎日掃きます。 | I sweep the office floor every day. | はきます | N5 L5 T5 C3 I3 — Could also be 拭きます/磨きます, slightly ambiguous. | teach only | yes |
| to sweep | 駅の前を掃いている人がいます。 | There is a person sweeping in front of the station. | はいている | N5 L5 T5 C3 I3 — Could also be 掃除している or 立っている, somewhat ambiguous. | teach only | yes |
| to sweep | 店の前を掃いてください。 | Please sweep in front of the shop. | はいて | N5 L5 T5 C4 I3 | cloze+teach | yes |
| clapping hands | 部長のスピーチの後、みんなが拍手しました。 | After the department head's speech, everyone clapped. | はくしゅしました | N5 L5 T5 C3 I3 — Blank could also be filled with other reactions like 質問 or 拍手, context somewhat generic. | teach only | yes |
| clapping hands | 試合に勝って、大勢が拍手しました。 | After winning the match, many people clapped. | はくしゅしました | N5 L5 T5 C3 I3 — Winning a match could also elicit 喜んだ, 泣いた, etc., so blank isn't uniquely forced. | teach only | yes |
| clapping hands | 彼が退院して、家族が拍手して喜びました。 | When he left the hospital, his family clapped with joy. | はくしゅして | N5 L5 T5 C4 I4 — The combination of leaving hospital and 'clapping with joy' strongly points to 拍手, giving good recoverability. | cloze+teach | yes |
| to be disconnected | 電車のドアが外れることはありません。 | The train door never comes off. | はずれる | N4 L5 T5 C4 I3 | cloze+teach | yes |
| to be disconnected | シャツのボタンが外れています。 | The button on the shirt has come off. | はずれています | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to part | 机を少し離してください。 | Please move the desk a little apart. | はなして | N4 L5 T4 C4 I3 | cloze+teach | yes |
| to part | 子供から手を離さないでください。 | Please don't let go of your child's hand. | はなさないで | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to separate | 鳥を空に放しました。 | I released the bird into the sky. | はなしました | N5 L5 T5 C3 I3 — other verbs like 逃がす/飛ばす could also fit the blank | teach only | yes |
| to separate | 犬を庭に放してもいいですか。 | Is it okay to let the dog loose in the garden? | はなして | N5 L5 T4 C3 I4 — 出す/入れる could also plausibly fill the blank | teach only | yes |
| to separate | 手を放すと危ないですよ。 | It's dangerous if you let go of your hand. | はなす | N5 L5 T5 C4 I4 | cloze+teach | yes |
| again | 彼から再び電話がありました。 | A call came from him again. | ふたたび | N4 L4 T5 C3 I3 — また could also fill the blank, so not fully unique cloze. | teach only | yes |
| again | 再びピアノを習いたいです。 | I want to learn piano again. | ふたたび | N4 L4 T5 C3 I4 — また could equally fill the blank, reducing uniqueness. | teach only | yes |
| edge | 机の縁に本を置きました。 | I put the book on the edge of the desk. | ふち | N4 L5 T5 C2 I3 — Many other nouns (端, 上, 隅) could fill the blank equally well. | teach only | yes |
| edge | 池の縁で写真を撮りませんか。 | Shall we take photos at the edge of the pond? | ふち | N4 L5 T5 C2 I3 — Blank could be filled by 周り, そば, 前, etc., not uniquely 縁. | teach only | yes |
| edge | 皿の縁が欠けていました。 | The edge of the plate was chipped. | ふち | N5 L5 T5 C4 I3 — 欠けていました strongly implies a rim/edge, making 縁 a fairly clear answer. | cloze+teach | yes |
| blockade | 電話が不通になりました。 | The phone line became out of service. | ふつう | N5 L4 T4 C4 I3 | cloze+teach | yes |
| blockade | 電車はまだ不通ですか。 | Is the train still out of service? | ふつう | N5 L4 T4 C3 I3 — synonyms like 運休 or 遅延 could also fit the blank | teach only | yes |
| blockade | 台風で橋が不通です。 | The bridge is blocked due to the typhoon. | ふつう | N5 L4 T4 C3 I4 — 通行止め or 封鎖 could also fit the blank | teach only | yes |
| prices | 最近、物価が上がりましたね。 | Prices have gone up recently, haven't they. | ぶっか | N5 L5 T5 C3 I3 — Blank could also be filled by other words like 給料 or 気温 without more context. | teach only | yes |
| prices | この町の物価は高いですか。 | Are prices high in this town? | ぶっか | N5 L5 T5 C3 I2 — Somewhat generic template; 家賃 or other nouns could also fit the blank. | teach only | yes |
| prices | 物価が高くて買い物が大変です。 | Prices are high, so shopping is tough. | ぶっか | N5 L5 T5 C5 I4 | cloze+teach | yes |
| suddenly | ふと友達のことを思い出しました。 | I suddenly remembered my friend. | ふと | N5 L5 T5 C3 I3 — 急に/思わず could also fit the blank | teach only | yes |
| suddenly | 授業中にふと外を見ました。 | During class, I suddenly looked outside. | ふと | N5 L5 T5 C3 I3 — 急に could also fit the blank | teach only | yes |
| portion | どの部分が好きですか。 | Which part do you like? | ぶぶん | N5 L5 T5 C3 I3 — Blank could also be filled by other nouns like 味 or 色, reducing uniqueness slightly. | teach only | yes |
| complaint | 彼は電話で不平を言いました。 | He complained on the phone. | ふへい | N5 L5 T5 C3 I3 — 文句 could also fit the blank. | teach only | yes |
| complaint | 何か不平がありますか。 | Do you have any complaints? | ふへい | N5 L5 T5 C3 I2 — Generic question; 文句/不満 could also fit. | teach only | yes |
| complaint | 学生たちは宿題について不平を言っています。 | The students are complaining about the homework. | ふへい | N5 L5 T5 C3 I3 — 文句 could also fit the blank. | teach only | yes |
| dissatisfaction | 今の趣味に不満はありません。 | I have no dissatisfaction with my current hobby. | ふまん | N5 L5 T5 C3 I3 — 文句 or 不安 could also fit the blank | teach only | yes |
| dissatisfaction | この部屋に不満がありますか。 | Do you have any dissatisfaction with this room? | ふまん | N5 L5 T5 C3 I3 — 文句 could also fit the blank | teach only | yes |
| dissatisfaction | 彼女は仕事に不満を感じています。 | She feels dissatisfied with her job. | ふまん | N5 L5 T5 C4 I3 — strong collocation 不満を感じる makes the blank fairly clear | cloze+teach | yes |
| sofa | 父はソファーで新聞を読んでいます。 | My father is reading the newspaper on the sofa. | そふぁあ | N5 L5 T5 C3 I3 — Blank could also be chair, bed, desk, etc. | teach only | yes |
| sofa | テレビを見ながら、ソファーに座りましょう。 | Let's sit on the sofa while watching TV. | そふぁあ | N5 L4 T5 C3 I4 — Blank could be filled by other seating words like chair or floor. | teach only | yes |
| sofa | そのソファーはいくらでしたか。 | How much was that sofa? | そふぁあ | N5 L5 T5 C2 I2 — Very generic; almost any noun could fill the blank. | teach only | yes |
| typewriter | おじいさんは昔、タイプライターで手紙を書いていました。 | My grandfather used to write letters on a typewriter long ago. | たいぷらいたあ | N5 L5 T5 C3 I4 — Blank could plausibly be filled with other writing tools like ワープロ or ペン, slightly reducing uniqueness. | teach only | yes |
| towel | 手を洗って、タオルで拭きます。 | I wash my hands and dry them with a towel. | たおる | N5 L5 T5 C5 I4 | cloze+teach | yes |
| towel | タオルを取ってくれませんか。 | Could you hand me a towel? | たおる | N5 L4 T5 C3 I4 — blank could also be other objects like コップ or ペン | teach only | yes |
| towel | 友達が来る前に、タオルを出しておきます。 | I'll put out towels before my friend comes. | たおる | N5 L4 T5 C3 I4 — blank could fit other nouns like お菓子 or 飲み物 | teach only | yes |
| treasure | この指輪は私の宝です。 | This ring is my treasure. | たから | N5 L5 T5 C2 I2 — Generic 'my treasure' template; many nouns could fill the blank. | teach only | yes |
| treasure | 宝を見つけたら、教えてください。 | If you find the treasure, please tell me. | たから | N5 L4 T5 C2 I3 — Blank could be filled by many objects (wallet, key, etc.), reducing recoverability. | teach only | yes |
| treasure | 子供の時、山で宝を探したことがあります。 | When I was a child, I once searched for treasure in the mountains. | たから | N5 L4 T5 C4 I4 — Mountain treasure-hunting context strongly suggests 宝, fairly specific and interesting. | cloze+teach | yes |
| Japanese socks | 着物を着るとき、足袋も履きます。 | When wearing a kimono, I also wear tabi socks. | たび | N5 L5 T5 C3 I4 — Other kimono footwear like 草履/下駄 could also fit the blank with 履きます. | teach only | yes |
| Japanese socks | 足袋を洗ってから、片付けましょう。 | Let's wash the tabi socks and then put them away. | たび | N5 L5 T5 C2 I3 — No contextual clue narrows the blank to tabi specifically; many nouns could fit. | teach only | yes |
| globe | 子供たちが庭で球を投げて遊んでいます。 | The children are playing, throwing a ball in the yard. | たま | N4 L5 T4 C3 I3 — Target word gloss 'globe' is misleading since 球 here means 'ball'; blank could also be filled by ボール or other toys. | teach only | yes |
| globe | 球が階段から落ちました。 | The ball fell down the stairs. | たま | N4 L5 T4 C2 I2 — Target word gloss 'globe' is misleading; also many objects could fill the blank (bag, vase, etc.), low cloze recoverability. | teach only | yes |
| bullet | 警官は弾を持っています。 | The police officer has bullets. | たま | N4 L5 T5 C2 I2 — Blank could be filled with 銃 (gun) or other item officers carry, not uniquely 弾. | teach only | yes |
| bullet | 弾が壁に当たりました。 | The bullet hit the wall. | たま | N5 L5 T5 C4 I4 — Fairly specific context, though ボール(ball) could theoretically fit. | cloze+teach | yes |
| bullet | 危ないから、弾に触らないでください。 | It's dangerous, so please don't touch the bullet. | たま | N4 L5 T5 C2 I3 — Many dangerous objects could fill the blank (ナイフ, 火, 刃物), not uniquely 弾. | teach only | yes |
| step | この段は高いから、気をつけましょう。 | This step is high, so let's be careful. | だん | N4 L5 T5 C2 I3 — Blank could be filled by many nouns like 椅子, 台, 箱, etc., reducing cloze specificity. | teach only | yes |
| step | 段を数えながら、上りました。 | I climbed up, counting the steps. | だん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| regrettable | 試合に負けて悔しいです。 | I'm frustrated because I lost the match. | くやしい | N5 L5 T5 C3 I3 — Other emotion adjectives like 悲しい or 残念 could also fit the blank. | teach only | yes |
| regrettable | 弟は宿題を忘れて悔しそうな顔をした。 | My younger brother looked frustrated after forgetting his homework. | くやしそう | N5 L4 T5 C3 I4 — Other adjectives like 困った or 悲しそう could also plausibly fit. | teach only | yes |
| tough | 走った後で息が苦しいです。 | My breathing is difficult after running. | くるしい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| tough | お金がなくて生活が苦しいです。 | Life is hard because we have no money. | くるしい | N5 L5 T5 C3 I3 — other words like 大変 or つらい could also fit the blank | teach only | yes |
| tough | 彼は電話で苦しそうな声で話した。 | He spoke in a pained-sounding voice on the phone. | くるしそう | N5 L4 T5 C3 I3 — other pained-sounding adjectives like つらそう could also fit | teach only | yes |
| detailed | 彼は日本の歴史に詳しいです。 | He is knowledgeable about Japanese history. | くわしい | N5 L5 T5 C3 I3 — Blank could also be filled by 好き or similar, not fully unique. | teach only | yes |
| detailed | もっと詳しく説明してください。 | Please explain in more detail. | くわしく | N5 L5 T5 C3 I3 — Other adverbs like はっきり or ゆっくり could also fit the blank. | teach only | yes |
| detailed | 母は料理に詳しいから、いつも聞きます。 | My mother knows a lot about cooking, so I always ask her. | くわしい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| stinginess | 兄はけちだから、お金を貸してくれない。 | My older brother is stingy, so he won't lend me money. | けち | N5 L5 T5 C4 I4 | cloze+teach | yes |
| stinginess | 父はけちで、電気をすぐに消します。 | My father is stingy and always turns off the lights right away. | けち | N5 L5 T5 C5 I4 | cloze+teach | yes |
| stinginess | そんなにけちなことを言わないでください。 | Please don't say such stingy things. | けちな | N4 L5 T4 C3 I3 — other adjectives like ひどい or 意地悪 could also fit the blank | teach only | yes |
| faults | 誰にでも欠点があります。 | Everyone has faults. | けってん | N5 L5 T5 C2 I3 — Blank could be filled by many nouns like 悩み or 癖, not uniquely 欠点. | teach only | yes |
| faults | 彼女の欠点は遅刻が多いことです。 | Her fault is being late often. | けってん | N5 L5 T5 C3 I4 — Context strongly suggests a negative trait but 癖 could also fit. | teach only | yes |
| faults | 自分の欠点を直してください。 | Please fix your own faults. | けってん | N4 L5 T5 C2 I3 — Many words (癖、態度、行動) could fill the blank, reducing recoverability. | teach only | yes |
| thick (as of color, liquid) | このコーヒーは濃いですね。 | This coffee is strong, isn't it? | こい | N5 L5 T5 C2 I3 — Many adjectives (熱い, まずい, 美味しい) could fill the blank, so it's not uniquely recoverable. | teach only | yes |
| thick (as of color, liquid) | 母はスープを濃く作ります。 | My mother makes the soup thick. | こく | N5 L4 T5 C3 I3 — Other adverbs like 薄く or 美味しく could also fit grammatically. | teach only | yes |
| thick (as of color, liquid) | 濃い色のシャツを買いたいです。 | I want to buy a shirt in a dark color. | こい | N5 L4 T4 C2 I3 — Many color adjectives (明るい, 暗い, 薄い) could fit before 色, reducing uniqueness; translation 'dark' vs 'thick' slightly diverges from literal meaning. | teach only | yes |
| luxurious | 今晩は豪華な料理を作りましょう。 | Let's make a luxurious meal tonight. | ごうかな | N5 L5 T5 C3 I3 — Other na-adjectives (美味しい料理 etc.) could also fit contextually, though luxurious meal is plausible. | teach only | yes |
| luxurious | あのホテルはとても豪華です。 | That hotel is very luxurious. | ごうか | N5 L5 T5 C2 I2 — Very generic sentence; many adjectives (きれい, 立派, 大きい) could fill the blank. | teach only | yes |
| luxurious | 誕生日に豪華なプレゼントをもらった。 | I got a luxurious present for my birthday. | ごうかな | N5 L5 T5 C3 I3 — Context narrows somewhat but other adjectives like 素敵な or 高価な could also work. | teach only | yes |
| happiness | 家族と一緒にいると幸福を感じます。 | I feel happiness when I'm with my family. | こうふく | N5 L4 T5 C3 I4 — 幸せ could also fit the blank, slightly reducing recoverability. | teach only | yes |
| happiness | 彼女はいつも幸福そうです。 | She always looks happy. | こうふく | N5 L4 T4 C3 I3 — Other adjectives (幸せ, 元気, 忙し) could fit the blank equally well. | teach only | yes |
| happiness | お金だけでは幸福になれません。 | Money alone can't make you happy. | こうふく | N5 L4 T5 C3 I4 — 幸せ is a near-synonym that could also complete the sentence. | teach only | yes |
| assistance | 私は仕事で困っている時、先輩から援助をもらいました。 | When I was in trouble at work, I got assistance from my senior. | えんじょ | N4 L5 T5 C3 I3 — もらいました is slightly less natural than 受けました but acceptable; 助け/援助 could both fit somewhat. | teach only | yes |
| assistance | その国は援助がなければ、生活できません。 | That country cannot survive without assistance. | えんじょ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| aid | 彼女が元気になったのは、みんなが応援したからです。 | She got better because everyone cheered for her. | おうえんした | N4 L3 T5 C3 I3 — Blank could be filled with other verbs like 励ました or 手伝った. | teach only | yes |
| aid | 会場には応援に来る人がいませんでした。 | No one came to the venue to cheer. | おうえん | N4 L3 T4 C3 I3 — Context allows other nouns like 見学 or 見物 in place of 応援. | teach only | yes |
| aid | 私のチームを応援してください。 | Please cheer for my team. | おうえんしてください | N5 L3 T5 C5 I2 — Very common, slightly generic phrase but clear context. | cloze+teach | yes |
| to occur | 事故が起こったから、電車が遅れています。 | The train is delayed because an accident occurred. | おこった | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to occur | この機械は問題が起こりません。 | Problems don't occur with this machine. | おこりません | N4 L5 T5 C3 I2 — Other verbs like 発生する could also fit the blank. | teach only | yes |
| to occur | 何か問題が起こったら、すぐに知らせてください。 | If any problem occurs, please let me know immediately. | おこったら | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to govern | 昔、この国は王が治めていました。 | Long ago, a king governed this country. | おさめて | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to govern | 彼はまだ若いので、国を治めることができません。 | He is still young, so he cannot govern the country. | おさめる | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to govern | 誰がこの町を治めていますか。 | Who governs this town? | おさめています | N5 L5 T5 C3 I3 — other verbs like 支配して/管理して could also fit the blank | teach only | yes |
| mutual | お互いに知らないから、話しませんでした。 | We didn't talk because we didn't know each other. | おたがい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| mutual | お互いに連絡してください。 | Please contact each other. | おたがい | N4 L5 T5 C3 I3 — Other adverbs like 直接に could also fit the blank. | teach only | yes |
| to fall behind | このパソコンは新しいものより機能が劣っています。 | This computer's functions are inferior to the new one. | おとって | N5 L4 T5 C4 I3 | cloze+teach | yes |
| to fall behind | 彼の実力は誰にも劣りません。 | His ability is not inferior to anyone's. | おとりません | N5 L4 T5 C5 I3 | cloze+teach | yes |
| to fall behind | 彼が試合に負けたのは、力が劣っていたからです。 | He lost the match because his strength was inferior. | おとっていた | N5 L4 T5 C5 I3 | cloze+teach | yes |
| to think of | いい考えを思い付きました。 | I thought of a good idea. | おもいつきました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to think of | 何も思い付きません。 | I can't think of anything. | おもいつきません | N5 L5 T5 C2 I2 — Many verbs (思い出す, 分かる, 考える) could fill the blank, reducing recoverability. | teach only | yes |
| search | 警察は事件の捜査を始めた。 | The police started investigating the case. | そうさ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| search | 捜査はまだ終わっていません。 | The investigation has not finished yet. | そうさ | N5 L5 T5 C3 I3 — could also fit 調査 without more context | teach only | yes |
| search | 刑事たちは夜も捜査を続けている。 | The detectives keep investigating even at night. | そうさ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| creation | 人間には創造の力があります。 | Humans have the power of creation. | そうぞう | N4 L4 T5 C2 I3 — 創造 and 想像 share the same reading そうぞう, and '人間には想像の力があります' (power of imagination) is equally plausible, weakening cloze recoverability. | teach only | yes |
| down | 風邪でずっとダウンしていました。 | I was down with a cold for a while. | だうん | N5 L5 T5 C3 I4 — other nouns like 入院 could also fit the blank | teach only | yes |
| down | 彼は疲れてダウンしそうだ。 | He looks like he's about to collapse from tiredness. | だうん | N5 L4 T4 C3 I4 — other nouns like 気絶 or 卒倒 could also fit the blank | teach only | yes |
| example | その話は例えが分かりやすかったです。 | That story's example was easy to understand. | たとえ | N5 L5 T5 C3 I3 | teach only | yes |
| example | 先生はいつも面白い例えを使います。 | The teacher always uses interesting examples. | たとえ | N5 L5 T5 C2 I3 — Blank could also be filled by 話, 冗談, 表現, etc. | teach only | yes |
| example | その例えの意味が分かりますか。 | Do you understand the meaning of that example? | たとえ | N5 L5 T5 C2 I3 — Blank could also be filled by 言葉, 文, 表現, etc. | teach only | yes |
| challenge | 新しい仕事に挑戦したいです。 | I want to take on a new job as a challenge. | ちょうせん | N5 L5 T5 C3 I3 — 応募/転職 could also fit the blank, slightly reducing uniqueness | teach only | yes |
| challenge | 山に挑戦しませんか。 | Why don't we take on the mountain? | ちょうせん | N5 L5 T4 C4 I4 — very natural, common expression for mountain climbing as a challenge | cloze+teach | yes |
| challenge | 彼は難しい試験に挑戦しました。 | He challenged himself with a difficult exam. | ちょうせん | N5 L5 T4 C2 I3 — 合格/失敗などの語も文脈に合うため空欄の一意性が低い | teach only | yes |
| data | このデータを調べてください。 | Please check this data. | でえた | N4 L5 T5 C3 I3 | teach only | yes |
| data | データはコンピュータに保存してあります。 | The data has been saved on the computer. | でえた | N4 L4 T5 C4 I3 | cloze+teach | yes |
| data | 新しいデータを集めましょう。 | Let's gather new data. | でえた | N4 L5 T5 C3 I3 | teach only | yes |
| design | この服のデザインが好きです。 | I like the design of this clothing. | でざいん | N5 L5 T5 C3 I3 — Blank could also be color, size, etc., not uniquely 'design'. | teach only | yes |
| design | 新しいデザインを考えませんか。 | Shall we think of a new design? | でざいん | N5 L5 T5 C3 I3 — Could also fit 'idea' or 'plan' in the blank. | teach only | yes |
| design | 部屋のデザインを変えたいです。 | I want to change the design of my room. | でざいん | N5 L5 T5 C3 I3 — Could also fit 'layout' or 'color' in the blank. | teach only | yes |
| dawn | 夜明けに空が赤くなりました。 | The sky turned red at dawn. | よあけ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| dawn | 夜明け前に会社に着かなければなりません。 | I have to arrive at the office before dawn. | よあけ | N4 L5 T5 C4 I4 — slightly unusual scenario but plausible | cloze+teach | yes |
| dawn | 夜明けはまだ暗いですか。 | Is it still dark at dawn? | よあけ | N4 L5 T5 C3 I3 — blank could also be filled by other time words like 夜 or 早朝 | teach only | yes |
| season (advanced) | 今日は陽気がいいですね。 | The weather is nice today, isn't it? | ようき | N4 L5 T4 C3 I2 — Gloss 'season' is wrong—陽気 means weather/climate, not season; also 天気 could fit the blank equally well. | teach only | yes |
| season (advanced) | 陽気がよければ公園に行きましょう。 | If the weather is good, let's go to the park. | ようき | N4 L5 T4 C3 I3 — 天気 could also fill the blank, reducing uniqueness; gloss 'season' is inaccurate for 陽気. | teach only | yes |
| day of the week | 今日は何曜日ですか。 | What day of the week is today? | ようび | N5 L5 T5 C4 I3 | cloze+teach | yes |
| day of the week | 会議は何曜日にありますか。 | What day of the week is the meeting? | ようび | N5 L5 T5 C3 I3 — Could also be 何時 (what time), reducing uniqueness. | teach only | yes |
| day of the week | 曜日を間違えないでください。 | Please don't get the day of the week wrong. | ようび | N5 L5 T5 C3 I4 — Blank could also fit words like 日付 or 時間. | teach only | yes |
| midnight | 夜中に電話が鳴りました。 | The phone rang in the middle of the night. | よなか | N5 L5 T5 C3 I3 — Other time words (朝, 夜, 昼) could also fit grammatically. | teach only | yes |
| midnight | 夜中まで仕事をしないでください。 | Please don't work until midnight. | よなか | N5 L5 T5 C3 I3 — Blank could be filled by other time expressions like 朝 or 夜. | teach only | yes |
| midnight | 夜中に目が覚めてしまいました。 | I woke up in the middle of the night. | よなか | N5 L5 T5 C3 I3 — Blank could plausibly be filled by other time words such as 朝早く. | teach only | yes |
| next ~ | 来学期は忙しくなりそうです。 | Next semester seems like it will get busy. | らい | N5 L5 T5 C3 I3 — 今学期 could also fit grammatically, slightly reducing recoverability. | teach only | yes |
| next ~ | 来世紀にはどんな生活になるでしょうか。 | I wonder what life will be like in the next century. | らい | N5 L5 T5 C3 I4 — 今世紀 could also fit contextually, slightly reducing recoverability. | teach only | yes |
| delay | 電車の遅れで会議に間に合いませんでした。 | Because of the train delay, I couldn't make it to the meeting. | おくれ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| delay | 遅れの原因はまだ分かりません。 | The cause of the delay is still unknown. | おくれ | N5 L5 T5 C4 I3 — blank could plausibly be filled by other nouns like 事故 in similar contexts, but grammatically fits well | cloze+teach | yes |
| delay | 遅れがないように早く出ます。 | I'll leave early so there won't be any delay. | おくれ | N4 L5 T5 C3 I3 — some other nouns could fit the blank without breaking sentence structure | teach only | yes |
| year end | 今年の暮れに国へ帰ります。 | I will go back to my country at the end of this year. | くれ | N5 L5 T5 C3 I3 — Blank could also be filled with 冬, 正月, 年末, etc., so not fully unique. | teach only | yes |
| year end | 去年の暮れに雪が多く降りました。 | It snowed a lot at the end of last year. | くれ | N5 L5 T5 C3 I3 — Other time words like 冬 or 年末 could also fit the blank. | teach only | yes |
| now ) | 現在、何のお仕事をなさっていますか。 | What kind of work are you currently doing? | げんざい | N5 L4 T5 C3 I4 — Blank could plausibly be filled by 今 or 最近, reducing uniqueness. | teach only | yes |
| now ) | 現在の住所が変わったら、教えてください。 | If your current address changes, please let me know. | げんざい | N5 L5 T5 C3 I4 — Other time words like 今 or 以前 could also fit the blank. | teach only | yes |
| afterwards (advanced) | 退院後、家でゆっくりと休みました。 | After leaving the hospital, I rested slowly at home. | ご | N5 L4 T5 C5 I4 | cloze+teach | yes |
| afterwards (advanced) | 三年後に留学することにしました。 | I decided to study abroad in three years. | ご | N5 L4 T5 C5 I4 | cloze+teach | yes |
| on the occasion of | 旅行の際に、パスポートを忘れないでください。 | Please don't forget your passport when traveling. | さい | N5 L5 T5 C3 I3 — とき could also fit the blank grammatically, slightly reducing uniqueness. | teach only | yes |
| on the occasion of | 彼は困った際に、いつも母に相談するようだ。 | It seems that he always consults his mother when he's in trouble. | さい | N4 L4 T5 C3 I4 — とき would also work in the blank, reducing exclusivity. | teach only | yes |
| on the occasion of | 空港に着いた際、荷物が多かったので大変でした。 | It was hard because I had a lot of luggage when I arrived at the airport. | さい | N4 L4 T5 C3 I4 — とき is also plausible here, slightly lowering cloze precision. | teach only | yes |
| in the middle of | 食事の最中に電話が鳴りました。 | The phone rang in the middle of the meal. | さいちゅう | N5 L4 T5 C4 I4 | cloze+teach | yes |
| in the middle of | 今、会議の最中です。 | We are in the middle of a meeting now. | さいちゅう | N5 L4 T5 C4 I3 | cloze+teach | yes |
| future (life tense) | 未来はもっと便利になるだろう。 | The future will probably become more convenient. | みらい | N5 L5 T5 C3 I3 — 将来 could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| future (life tense) | 未来はどうなると思いますか。 | What do you think the future will be like? | みらい | N5 L5 T5 C3 I3 — 将来 is an equally valid fit for the blank. | teach only | yes |
| before long | やがて春が来ます。 | Spring will come before long. | やがて | N4 L5 T5 C3 I2 — Other time adverbs like もうすぐ or そのうち could also fit the blank. | teach only | yes |
| before long | やがて雨は止むと思います。 | I think the rain will stop before long. | やがて | N5 L4 T5 C3 I3 — Similar adverbs (そのうち, もうすぐ) could also fit grammatically. | teach only | yes |
| before long | やがて彼は元気になるはずです。 | He should get well before long. | やがて | N5 L4 T5 C3 I3 — Other time adverbs could plausibly fill the blank as well. | teach only | yes |
| nothing | 無からは何も生まれません。 | Nothing comes from nothing. | む | N5 L5 T5 C4 I4 | cloze+teach | yes |
| anxiety | 明日の試験のことを考えると、不安になります。 | Thinking about tomorrow's exam makes me anxious. | ふあん | N5 L5 T5 C5 I4 | cloze+teach | yes |
| anxiety | 昨夜、一人で暗い道を歩いていて、少し不安を感じた。 | Last night, walking alone on a dark road, I felt a bit anxious. | ふあん | N5 L5 T5 C5 I5 | cloze+teach | yes |
| anxiety | 早くこの不安をなくしたいです。 | I want to quickly get rid of this anxiety. | ふあん | N4 L5 T5 C3 I3 — Other words like 心配 or 悩み could also fit the blank. | teach only | yes |
| unhappiness | 彼はいつも不幸そうな顔をしている。 | He always looks unhappy. | ふこう | N5 L4 T5 C3 I3 — Blank could plausibly be filled by other adjectives like 幸せ or 疲れた, reducing certainty. | teach only | yes |
| unhappiness | 若い頃、彼女はとても不幸でした。 | When she was young, she was very unhappy. | ふこう | N5 L3 T5 C3 I3 — Context allows other emotional adjectives, so cloze isn't fully unique. | teach only | yes |
| unhappiness | これ以上不幸になりたくないです。 | I don't want to become any more unhappy. | ふこう | N5 L3 T5 C3 I3 — Sentence structure allows other adjectives (e.g., 幸せ, 有名) to fit the blank. | teach only | yes |
| tune | この歌の節はとても美しいです。 | This song's tune is very beautiful. | ふし | N5 L5 T5 C3 I2 — Generic template; blank could arguably fit other words like 歌詞 or リズム. | teach only | yes |
| tune | 昔聞いた歌の節を思い出した。 | I remembered the tune of a song I heard long ago. | ふし | N5 L5 T5 C3 I3 — Slightly more context but still could accept other nouns like メロディー. | teach only | yes |
| tune | その歌の節を覚えたいです。 | I want to memorize the tune of that song. | ふし | N5 L5 T5 C3 I2 — Similar generic structure to sentence 0. | teach only | yes |
| mystery | 彼が急にいなくなったのは不思議です。 | It's a mystery that he suddenly disappeared. | ふしぎ | N5 L5 T5 C3 I3 | teach only | yes |
| mystery | 昨日、駅で不思議なことが起きた。 | Yesterday, a strange thing happened at the station. | ふしぎ | N5 L5 T5 C3 I4 | teach only | yes |
| discomfort | 旅行中、言葉が通じなくて不自由でした。 | During the trip, not being able to communicate was inconvenient. | ふじゆう | N5 L5 T5 C3 I4 | teach only | yes |
| discomfort | もう不自由な生活はしたくないです。 | I don't want to live an inconvenient life anymore. | ふじゆう | N5 L5 T5 C3 I3 | teach only | yes |
| injustice | 彼は不正をしません。 | He doesn't commit fraud. | ふせい | N4 L5 T4 C2 I2 — Blank could be filled with many nouns (勉強, 仕事, etc.), not uniquely 不正. | teach only | yes |
| injustice | 去年、あの会社で不正が起きた。 | Last year, fraud occurred at that company. | ふせい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| injustice | 彼が不正をしたと思いますか。 | Do you think he committed fraud? | ふせい | N4 L5 T5 C2 I2 — Generic sentence; many words could fill the blank besides 不正. | teach only | yes |
| insufficiency | 今、水が不足しています。 | Right now there's a water shortage. | ふそく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| insufficiency | 準備の時間が不足でした。 | There was insufficient preparation time. | ふそく | N5 L5 T5 C4 I3 | cloze+teach | yes |
| insufficiency | 睡眠不足をなくしたいです。 | I want to get rid of my sleep deprivation. | ふそく | N5 L5 T5 C5 I4 | cloze+teach | yes |
| divorce | 彼らは去年離婚しました。 | They got divorced last year. | りこん | N5 L5 T5 C2 I3 — Many verbs could fill the blank (結婚, 卒業, 移住, etc.). | teach only | yes |
| divorce | 離婚のことは誰にも言わないでください。 | Please don't tell anyone about the divorce. | りこん | N5 L4 T5 C2 I3 — Blank could be many nouns like 秘密, 病気, 恋愛. | teach only | yes |
| divorce | 二人は離婚することになりました。 | The two of them decided to get divorced. | りこん | N5 L4 T5 C3 I3 — Could also be 結婚 or 同棲, though 離婚 fits well. | teach only | yes |
| the aged | この道で老人が転びました。 | An old person fell on this road. | ろうじん | N4 L5 T5 C3 I3 — Blank could also fit other nouns like child or animal, reducing uniqueness. | teach only | yes |
| the aged | 老人はゆっくりと歩きます。 | The elderly person walks slowly. | ろうじん | N5 L5 T5 C2 I2 — Very generic; many subjects could walk slowly, so blank is not tightly constrained. | teach only | yes |
| we | 我々は明日会議に出席します。 | We will attend the meeting tomorrow. | われわれ | N4 L5 T5 C2 I2 — Blank could equally be filled by 私たち, 彼ら, みんな, etc. | teach only | yes |
| the deceased | 故人の写真を部屋に飾りました。 | I decorated the room with a photo of the deceased. | こじん | N5 L5 T5 C2 I3 — Many nouns (友人, 祖父, 恩師 etc.) could fill the blank equally well. | teach only | yes |
| the deceased | 故人はとても親切な人でした。 | The deceased was a very kind person. | こじん | N5 L5 T5 C2 I3 — Blank could be filled by many nouns referring to a person, not uniquely 故人. | teach only | yes |
| the deceased | 故人のために祈りましょう。 | Let's pray for the deceased. | こじん | N5 L5 T5 C2 I3 — Context is compatible with many other nouns, so the target isn't uniquely recoverable. | teach only | yes |
| player selected for a team | あの選手はとても速く走ります。 | That player runs very fast. | せんしゅ | N5 L5 T5 C2 I2 — Blank could be filled with many nouns (犬, 人, 馬), not uniquely 選手. | teach only | yes |
| player selected for a team | 選手たちは試合の前に準備します。 | The players prepare before the match. | せんしゅ | N5 L5 T5 C4 I3 — Context of 試合の前に準備 strongly points to 選手 though コーチ/チーム also plausible. | cloze+teach | yes |
| player selected for a team | 選手に電話して、試合の時間を伝えましょう。 | Let's call the player and tell them the match time. | せんしゅ | N5 L5 T5 C3 I3 — Could also be コーチ or 監督, weakening uniqueness. | teach only | yes |
| ambassador | 大使に手紙を送りましょう。 | Let's send a letter to the ambassador. | たいし | N5 L5 T5 C2 I3 — Many nouns (person names, titles) could fill the blank, not uniquely 'ambassador'. | teach only | yes |
| ambassador | 大使は英語が上手です。 | The ambassador is good at English. | たいし | N5 L5 T5 C2 I2 — Generic sentence; blank could be filled by many people-related nouns. | teach only | yes |
| cabinet minister | 大臣に質問しませんか。 | Shall we ask the minister a question? | だいじん | N4 L5 T5 C2 I3 — Blank could be filled by many nouns (先生, 社長, 彼) since context doesn't uniquely point to a minister. | teach only | yes |
| cabinet minister | 大臣は新しい規則を作りました。 | The minister made a new rule. | だいじん | N4 L5 T5 C2 I3 — Generic sentence structure; many nouns (社長, 政府, 先生) could fit the blank. | teach only | yes |
| president | 大統領は明日日本に来ます。 | The president will come to Japan tomorrow. | だいとうりょう | N5 L5 T5 C2 I2 — Blank could be filled by many people nouns (社長, 友達, 先生), not uniquely 'president'. | teach only | yes |
| president | 大統領はテレビに出ています。 | The president is appearing on TV. | だいとうりょう | N5 L5 T5 C2 I2 — Any public figure could fit the blank, low uniqueness. | teach only | yes |
| president | 大統領は国民のために働きます。 | The president works for the people. | だいとうりょう | N5 L5 T5 C3 I3 — 国民のために働く hints at a political leader, improving recoverability slightly. | teach only | yes |
| manners | 日本では食事の作法が大切です。 | In Japan, table manners are important. | さほう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| manners | 子供に作法を教えてください。 | Please teach manners to the child. | さほう | N5 L5 T5 C3 I2 — blank could also be filled with マナー or 礼儀 | teach only | yes |
| manners | 彼は作法を知りません。 | He doesn't know proper manners. | さほう | N4 L5 T5 C2 I2 — generic sentence; many nouns could fit the blank (ルール, マナー, 法律 etc.) | teach only | yes |
| left and right | 道を渡る前に左右を見ます。 | I look left and right before crossing the street. | さゆう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| left and right | 車に気をつけて、左右をよく見てください。 | Please watch for cars and look carefully left and right. | さゆう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| left and right | 急いでいたので、左右を見ませんでした。 | I was in a hurry, so I didn't look left and right. | さゆう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| furthermore | 更に急いでも、電車に間に合いませんでした。 | Even though I hurried further, I didn't make it to the train in time. | さらに | N4 L4 T5 C3 I3 — もっと could also fill the blank, slightly reducing uniqueness. | teach only | yes |
| uproar | 駅で騒ぎがあって、電車が遅れました。 | There was an uproar at the station, and the train was delayed. | さわぎ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| participation | パーティーに参加してください。 | Please participate in the party. | さんか | N4 L5 T5 C3 I2 — Reading uses ぱあてぃい instead of standard ぱーてぃー, slightly nonstandard but readable; generic sentence. | teach only | yes |
| participation | 忙しくて、旅行に参加できませんでした。 | I was busy and couldn't participate in the trip. | さんか | N5 L4 T5 C4 I4 | cloze+teach | yes |
| participation | 家族全員がお祭りに参加しました。 | The whole family participated in the festival. | さんか | N5 L5 T5 C4 I4 | cloze+teach | yes |
| reference | この本を参考にしてください。 | Please use this book as a reference. | さんこう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| reference | 地図は参考になりませんでした。 | The map wasn't useful as a reference. | さんこう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| approval | 父はその計画に賛成しました。 | My father approved of that plan. | さんせい | N5 L5 T5 C3 I3 — 反対 or 同意 could also fit the blank grammatically. | teach only | yes |
| approval | 私はその意見に賛成しません。 | I don't agree with that opinion. | さんせい | N5 L5 T5 C3 I3 — 反対 could also fit the blank grammatically. | teach only | yes |
| approval | 旅行の計画に賛成ですか。 | Do you agree with the travel plan? | さんせい | N5 L5 T5 C3 I3 — 反対 could also fit the blank grammatically. | teach only | yes |
| acidity | このジュースは酸性です。 | This juice is acidic. | さんせい | N4 L5 T5 C2 I2 — generic template sentence, many nouns could fill blank | teach only | yes |
| acidity | 雨は酸性になることがあります。 | Rain can become acidic. | さんせい | N4 L4 T5 C3 I4 — context strongly suggests acidity but other nouns could theoretically fit | teach only | yes |
| acidity | この水は酸性ではありません。 | This water is not acidic. | さんせい | N4 L5 T5 C2 I2 — generic template sentence, blank could be many descriptive nouns | teach only | yes |
| simply | 彼は単に疲れているだけで、病気ではありません。 | He's simply tired, not sick. | たんに | N5 L5 T5 C4 I4 | cloze+teach | yes |
| simply | 単に遅れただけですから、心配しないでください。 | I'm simply late, so please don't worry. | たんに | N5 L5 T5 C4 I3 | cloze+teach | yes |
| sure | 電話に出ないから、忙しいに違いない。 | Since he's not answering the phone, he must be busy. | ちがいない | N5 L5 T5 C4 I4 | cloze+teach | yes |
| sure | あの音は雷に違いない。 | That sound must be thunder. | ちがいない | N5 L5 T5 C4 I4 | cloze+teach | yes |
| sure | 彼が遅れているなら、道が込んでいるに違いない。 | If he's late, the road must be congested. | ちがいない | N5 L5 T5 C4 I4 | cloze+teach | yes |
| perfectly | ちゃんと晩御飯を作ってください。 | Please make dinner properly. | ちゃんと | N4 L5 T4 C2 I2 — Generic; many adverbs (よく, すぐ, もう) could fill the blank equally well. | teach only | yes |
| perfectly | 息子はちゃんと宿題をしませんでした。 | My son didn't do his homework properly. | ちゃんと | N5 L5 T4 C3 I3 — Other adverbs like 全然/あまり could also fit the blank. | teach only | yes |
| perfectly | 遅れないように、ちゃんと時計を見てください。 | Please watch the clock properly so you won't be late. | ちゃんと | N5 L5 T5 C4 I4 | cloze+teach | yes |
| direct | 直接電話をかけてください。 | Please call directly by phone. | ちょくせつ | N4 L5 T5 C2 I3 — Blank could be filled by many adverbs like すぐに/また, weak cloze constraint. | teach only | yes |
| direct | 彼に直接聞きましたから、本当です。 | Since I asked him directly, it's true. | ちょくせつ | N5 L5 T5 C4 I4 | cloze+teach | yes |
| painful | 家族と離れるのは辛いです。 | It's painful to be apart from family. | つらい | N5 L5 T5 C4 I4 — 寂しい could also fit but 辛い is a strong natural answer | cloze+teach | yes |
| painful | 仕事が辛いから、休みたいです。 | Since work is hard, I want to rest. | つらい | N5 L5 T4 C2 I3 — 忙しい/大変 also fit the blank equally well, weakening cloze uniqueness | teach only | yes |
| appropriate | 適切な言葉で伝えてください。 | Please convey it with appropriate words. | てきせつ | N5 L5 T5 C3 I2 | teach only | yes |
| appropriate | 適切ではなかったから、謝りました。 | Since it wasn't appropriate, I apologized. | てきせつ | N4 L5 T5 C3 I3 — Other adjectives like 失礼、間違い could also fit the blank. | teach only | yes |
| moderate | 適度な運動は体にいいです。 | Moderate exercise is good for the body. | てきど | N5 L5 T5 C3 I3 | teach only | yes |
| moderate | 適度に塩を入れてください。 | Please add a moderate amount of salt. | てきど | N5 L5 T5 C3 I3 — 適当 could also fit the blank | teach only | yes |
| moderate | 適度に休まないと、疲れてしまいます。 | If you don't rest moderately, you'll get exhausted. | てきど | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to reach | 手紙は来週届きます。 | The letter will arrive next week. | とどきます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to reach | 荷物が今朝届いた。 | The package arrived this morning. | とどいた | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to reach | 私の声は後ろまで届きますか。 | Does my voice reach the back? | とどきます | N4 L5 T5 C3 I4 — 聞こえます could also fit the blank, slightly reducing recoverability. | teach only | yes |
| to skip over | 時間がないので、朝御飯を飛ばします。 | Since I don't have time, I'll skip breakfast. | とばします | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to skip over | 宿題を一つ飛ばしたいです。 | I want to skip one homework problem. | とばしたい | N4 L5 T4 C3 I3 — Context alone doesn't strongly force 飛ばす over other verbs like 忘れる or やめる. | teach only | yes |
| to jump out | 猫が急に道に飛び出した。 | A cat suddenly jumped out into the road. | とびだした | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to jump out | 遅れそうで、急いで家を飛び出した。 | I was about to be late, so I dashed out of the house. | とびだした | N5 L4 T5 C4 I4 | cloze+teach | yes |
| to jump out | 子供が急に車の前に飛び出します。 | Children suddenly dart out in front of cars. | とびだします | N4 L5 T5 C4 I3 — Slightly generic warning-style sentence but clear context. | cloze+teach | yes |
| to flow | この川は南へ流れています。 | This river flows to the south. | ながれています | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to flow | 悲しくて、涙が自然に流れた。 | I was sad, and tears flowed naturally. | ながれた | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to flow | 静かな音楽が部屋に流れている。 | Quiet music is flowing through the room. | ながれている | N5 L5 T4 C5 I4 — English 'flowing through' is a bit literal but acceptable | cloze+teach | yes |
| to come out | このトンネルを抜けると海が見えます。 | When you pass through this tunnel, you can see the sea. | ぬける | N5 L5 T5 C4 I4 — 通る could also fit the blank, slightly reducing uniqueness. | cloze+teach | yes |
| to come out | 最近、髪の毛がよく抜けた。 | Recently my hair has been falling out a lot. | ぬけた | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to ascend | 毎朝、階段を上ります。 | I go up the stairs every morning. | のぼります | N5 L5 T5 C3 I3 — Blank could equally be 下ります (going down), reducing uniqueness. | teach only | yes |
| to ascend | もっと高い山に上りたいです。 | I want to climb an even higher mountain. | のぼりたい | N4 L5 T5 C4 I4 — Slightly more common to use 登る for mountains, but のぼる is still clearly implied. | cloze+teach | yes |
| to arise | 朝早く太陽が昇ります。 | The sun rises early in the morning. | のぼります | N5 L5 T5 C4 I3 — 出る could also fit the blank, slightly reducing uniqueness. | cloze+teach | yes |
| to arise | 今朝、日が昇るのを見た。 | This morning I watched the sun rise. | のぼる | N5 L5 T5 C4 I4 — 出る is a plausible alternative but 昇る is more idiomatic for sunrise. | cloze+teach | yes |
| hiking | 先週、友達とハイキングをした。 | Last week I went hiking with a friend. | はいきんぐ | N5 L5 T5 C2 I3 — blank could be filled by many activities like 買い物, 旅行, 散歩, etc. | teach only | yes |
| hiking | 今度の休みにハイキングをしたいです。 | I want to go hiking during the next holiday. | はいきんぐ | N5 L5 T5 C2 I3 — blank could be filled by many activities, low uniqueness | teach only | yes |
| wheat | この村では小麦をたくさん作っています。 | In this village, they grow a lot of wheat. | こむぎ | N5 L5 T5 C2 I3 — Blank could be filled with many crops (rice, vegetables), not uniquely wheat. | teach only | yes |
| wheat | 小麦から何を作りますか。 | What do you make from wheat? | こむぎ | N5 L5 T5 C2 I2 — Many materials could fit the blank (rice, milk, wood, etc.), low uniqueness. | teach only | yes |
| wheat | 今年は雨が多かったので、小麦がよく育ちました。 | Since it rained a lot this year, the wheat grew well. | こむぎ | N5 L5 T5 C2 I3 — Any crop could grow well with rain, so the blank isn't uniquely recoverable. | teach only | yes |
| ingredients | 一緒に料理の材料を買いに行きませんか。 | Shall we go buy ingredients for cooking together? | ざいりょう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| produce | 祖父は田でいろいろな作物を育てています。 | My grandfather grows various crops in the field. | さくもつ | N4 L4 T5 C3 I3 — other words like 野菜/米 could also fit the blank. | teach only | yes |
| produce | この村ではどんな作物が有名ですか。 | What kind of crops is this village famous for? | さくもつ | N4 L4 T5 C2 I3 — many nouns (料理, 祭り, 特産品) could fill the blank equally well. | teach only | yes |
| beans | 母は晩御飯に豆を出しました。 | My mother served beans for dinner. | まめ | N5 L5 T5 C3 I3 — Context allows other foods (肉, 魚) so not fully forcing 豆. | teach only | yes |
| meals | そろそろ飯を食べに行こうよ。 | Let's go eat soon, okay? | めし | N4 L5 T4 C3 I3 — Natural casual invitation, though 飯を食べに行こう is less idiomatic than 飯を食いに行こう; other nouns could also fit the blank. | teach only | yes |
| wine | 父は毎晩少しワインを飲みます。 | My father drinks a little wine every night. | わいん | N5 L5 T5 C2 I3 — Blank could plausibly be filled by other drinks (beer, tea, water), lowering recoverability. | teach only | yes |
| wine | どちらのワインが好きですか。 | Which wine do you like? | わいん | N5 L5 T5 C1 I1 — Very generic template sentence; blank could be filled by almost any noun (food, color, drink, etc.). | teach only | yes |
| to stir-fry | 母は野菜を油で炒めています。 | My mother is stir-frying vegetables in oil. | いためています | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to stir-fry | 肉と野菜を一緒に炒めましょう。 | Let's stir-fry the meat and vegetables together. | いためましょう | N5 L5 T5 C3 I3 — could also be 焼く/混ぜる given context | teach only | yes |
| to stir-fry | 時間がないから、野菜を炒めるだけにします。 | Since I don't have time, I'll just stir-fry the vegetables. | いためる | N5 L4 T5 C2 I3 — blank could be filled by 切る/茹でる/焼く equally well | teach only | yes |
| sudden | 台風で天気が急激に変わりました。 | The weather changed suddenly because of the typhoon. | きゅうげき | N5 L4 T5 C3 I3 | teach only | yes |
| sudden | 野菜の値段が急激に上がりました。 | The price of vegetables suddenly went up. | きゅうげき | N5 L4 T5 C3 I3 | teach only | yes |
| rapid | 町が急速に大きくなりました。 | The town rapidly grew bigger. | きゅうそく | N5 L5 T5 C4 I4 | cloze+teach | yes |
| skillful | 私は器用ではありません、よく物を落とします。 | I'm not skillful; I often drop things. | きよう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| fear | 飛行機の中で恐怖を感じました。 | I felt fear inside the airplane. | きょうふ | N4 L5 T5 C3 I2 — Blank could also be filled with words like 不安 or 緊張. | teach only | yes |
| fear | 彼は恐怖を全然感じませんでした。 | He didn't feel any fear at all. | きょうふ | N4 L5 T5 C3 I2 — Blank could also be filled with similar emotion words. | teach only | yes |
| powerful | この強力な機械で肉を切ります。 | We cut meat with this powerful machine. | きょうりょく | N4 L5 T5 C3 I3 | teach only | yes |
| powerful | もっと強力な薬をください。 | Please give me a more powerful medicine. | きょうりょく | N4 L5 T5 C3 I3 | teach only | yes |
| huge | あの町に巨大な建物があります。 | There is a huge building in that town. | きょだい | N4 L5 T5 C3 I2 — 生きな/大きな could also fit blank, reducing uniqueness | teach only | yes |
| huge | 庭に巨大な木が生えています。 | A huge tree is growing in the garden. | きょだい | N5 L5 T5 C3 I3 — 大きな would also fit the blank naturally | teach only | yes |
| huge | この部屋は巨大ではありません、狭いです。 | This room isn't huge; it's small. | きょだい | N4 L5 T5 C4 I3 — contrast with 狭い helps narrow the answer but 大きい still plausible | cloze+teach | yes |
| stinky | 魚が臭いので、窓を開けてください。 | The fish smells bad, so please open the window. | くさい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| stinky | 弟の靴下はとても臭いです。 | My little brother's socks are very stinky. | くさい | N5 L5 T5 C4 I4 | cloze+teach | yes |
| sound asleep | 赤ちゃんはぐっすり寝ています。 | The baby is sound asleep. | ぐっすり | N5 L5 T5 C4 I2 — Simple, slightly generic but natural. | cloze+teach | yes |
| sound asleep | ホテルでぐっすり寝たいです。 | I want to sleep soundly at the hotel. | ぐっすり | N5 L4 T5 C4 I3 | cloze+teach | yes |
| so to speak | 彼は言わば、私の先生です。 | He is, so to speak, my teacher. | いわば | N4 L4 T5 C3 I3 | teach only | yes |
| the so-called | これはいわゆる文法の問題です。 | This is what's called a grammar problem. | いわゆる | N4 L5 T5 C3 I2 — Generic template sentence; blank could plausibly be filled by other adjectives like ただの. | teach only | yes |
| the so-called | それはいわゆる伝統でした。 | That was, so to speak, a tradition. | いわゆる | N5 L5 T5 C4 I4 | cloze+teach | yes |
| impression | 彼女の印象はとても良かったです。 | My impression of her was very good. | いんしょう | N4 L5 T5 C2 I2 — blank could also be filled by 態度, 性格, 成績 etc. | teach only | yes |
| impression | 彼の印象はどうでしたか。 | What was your impression of him? | いんしょう | N4 L5 T5 C2 I2 — blank could also be filled by 態度, 性格, 成績 etc. | teach only | yes |
| to doubt | 彼の話を疑いました。 | I doubted his story. | うたがいました | N4 L5 T5 C3 I3 | teach only | yes |
| to doubt | 彼女は自分を疑っています。 | She doubts herself. | うたがって | N4 L5 T5 C2 I3 — blank could be filled by 責める/信じる etc. | teach only | yes |
| yes or no | 出席の有無を確認してください。 | Please confirm whether they attended or not. | うむ | N5 L3 T4 C5 I3 | cloze+teach | yes |
| yes or no | 彼の参加の有無を知っていますか。 | Do you know whether he is participating or not? | うむ | N5 L3 T5 C5 I3 | cloze+teach | yes |
| yes or no | 資格の有無を調べました。 | I checked whether the qualification existed or not. | うむ | N5 L3 T4 C4 I3 — '調べました' slightly loosely rendered as 'checked' but fine. | cloze+teach | yes |
| fortune | 彼はいつも運がいいです。 | He always has good luck. | うん | N5 L5 T5 C3 I3 — Blank could also be filled with 頭 (頭がいい) so not fully unique. | teach only | yes |
| fortune | もっと運が欲しいです。 | I want more luck. | うん | N5 L5 T5 C2 I2 — Blank could be many desirable nouns (お金, 時間, etc.), reducing recoverability; sentence is generic. | teach only | yes |
| influence | この問題は生活にどんな影響がありますか。 | What kind of influence does this problem have on life? | えいきょう | N4 L5 T5 C3 I3 — Context could also accept 効果 or 変化, reducing uniqueness of blank. | teach only | yes |
| influence | 音楽は子供の成長に影響します。 | Music influences children's growth. | えいきょうします | N4 L5 T5 C3 I3 — 影響します is valid but other verbs like 貢献します could also fit the context. | teach only | yes |
| pin | 地図をピンで壁に留めてください。 | Please pin the map to the wall. | ぴん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| pin | 妹は髪にピンをつけました。 | My little sister put a pin in her hair. | ぴん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| flute | 息子は毎晩笛を吹いています。 | My son plays the flute every night. | ふえ | N5 L5 T5 C3 I3 — 吹く narrows to wind instruments but could also fit trumpet/harmonica, not uniquely flute. | teach only | yes |
| weapon | 空港で武器を持ってはいけません。 | You must not carry weapons at the airport. | ぶき | N5 L5 T5 C4 I4 | cloze+teach | yes |
| weapon | あの博物館に古い武器がたくさんあります。 | There are many old weapons at that museum. | ぶき | N5 L5 T5 C2 I3 — Blank could be filled by many nouns like 絵や道具など、文脈だけでは武器と特定しにくい | teach only | yes |
| weapon | 父は昔の武器について話しました。 | My father talked about old weapons. | ぶき | N4 L5 T5 C2 I2 — Very generic sentence; blank could be many topics, not uniquely 'weapon' | teach only | yes |
| material | この食べ物には危ない物質が入っています。 | This food contains a dangerous substance. | ぶっしつ | N4 L5 T4 C3 I3 — 'substance' fits better than 'material' but acceptable; several nouns (添加物, 成分, 毒) could fill the blank. | teach only | yes |
| material | その物質は水に溶けます。 | That substance dissolves in water. | ぶっしつ | N4 L5 T5 C2 I2 — Many nouns (塩, 砂糖, 氷) could fit the blank, making it hard to guess exactly 物質. | teach only | yes |
| material | この物質は体によくないです。 | This substance is not good for the body. | ぶっしつ | N4 L5 T5 C2 I2 — Generic sentence; many words (習慣, 食べ物, 姿勢) could fill the blank. | teach only | yes |
| writing brush | おじいさんは筆で手紙を書きます。 | Grandfather writes letters with a brush. | ふで | N4 L5 T5 C3 I3 — Could also be filled with 鉛筆 or ペン, reducing cloze certainty. | teach only | yes |
| plastic | このお皿はプラスチックでできています。 | This plate is made of plastic. | ぷらすちっく | N5 L5 T5 C2 I2 — Blank could be filled by many materials (wood, metal, etc.), not uniquely 'plastic'. | teach only | yes |
| plastic | 子供のおもちゃはプラスチックです。 | The child's toy is plastic. | ぷらすちっく | N5 L5 T5 C2 I2 — Generic template sentence; blank could be other materials too. | teach only | yes |
| Belt for western clothes | ベルトを忘れて、家に帰りました。 | I forgot my belt and went back home. | べると | N5 L5 T5 C2 I3 — Many objects could fill the blank (wallet, keys, etc.). | teach only | yes |
| Belt for western clothes | ベルトをしめてください。 | Please fasten your belt. | べると | N5 L5 T5 C3 I3 — しめる also fits ネクタイ or シートベルト, so not fully unique. | teach only | yes |
| Belt for western clothes | 父のベルトは黒いです。 | My father's belt is black. | べると | N5 L5 T5 C2 I2 — Generic template; many items could be black. | teach only | yes |
| paint | 父は壁にペンキを塗りました。 | My father painted the wall. | ぺんき | N5 L5 T5 C4 I4 | cloze+teach | yes |
| paint | ペンキを触らないでください。 | Please don't touch the paint. | ぺんき | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (glass, wire, wet paint, etc.). | teach only | yes |
| paint | ペンキがまだ乾いていません。 | The paint hasn't dried yet. | ぺんき | N5 L5 T5 C3 I3 — Other liquids (glue, cement, laundry) could also fit the blank. | teach only | yes |
| branch store | この銀行の支店は駅の近くにあります。 | This bank's branch is near the station. | してん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| branch store | その町に新しい支店を作ることにしました。 | We decided to open a new branch in that town. | してん | N5 L5 T5 C3 I4 — Blank could be filled by other nouns like 店 or 工場, reducing uniqueness. | teach only | yes |
| resident | この辺りは新しい住宅が多いです。 | There are many new houses around here. | じゅうたく | N4 L5 T4 C3 I3 — 住宅 could be swapped with 家/マンション, reducing cloze certainty. | teach only | yes |
| capital city | 友達と一緒に首都を見物しましょう。 | Let's sightsee the capital with a friend. | しゅと | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (東京, 京都, 公園, etc.), not uniquely recoverable as 首都. | teach only | yes |
| castle | 一緒に城を見に行きませんか。 | Shall we go see the castle together? | しろ | N5 L5 T5 C3 I4 — Blank could be filled by many nouns (映画, 花火, etc.), reducing forced recoverability. | teach only | yes |
| castle | 子供の時、家族と城の写真を撮りました。 | As a child, I took a photo of the castle with my family. | しろ | N5 L5 T5 C3 I4 — Context allows several nouns (景色, 花, 山) to fit the blank, not uniquely forcing 城. | teach only | yes |
| vicinity | この辺りに喫茶店がありますか。 | Is there a coffee shop around here? | あたり | N5 L5 T5 C3 I3 — 近く could also fit the blank, slightly reducing recoverability | teach only | yes |
| vicinity | 辺りが暗くなったから、そろそろ帰りましょう。 | It's gotten dark around here, so let's head home soon. | あたり | N5 L5 T4 C3 I4 — 周り could also fit; translation slightly loose but conveys meaning | teach only | yes |
| vicinity | 駅の辺りで会いましょう。 | Let's meet around the station. | あたり | N5 L5 T5 C3 I3 — 近く is also plausible in the blank | teach only | yes |
| here and there | 部屋のあちこちにおもちゃがあります。 | There are toys here and there in the room. | あちこち | N5 L5 T5 C4 I3 | cloze+teach | yes |
| here and there | あちこち探したけど、財布が見つかりません。 | I searched everywhere, but I can't find my wallet. | あちこち | N5 L5 T5 C5 I4 | cloze+teach | yes |
| market | 毎週日曜日に市へ行きます。 | I go to the market every Sunday. | いち | N5 L5 T5 C2 I3 — Many other destinations (店、公園など) could fill the blank. | teach only | yes |
| market | あの市には珍しい野菜がたくさんあります。 | That market has many unusual vegetables. | いち | N5 L5 T5 C4 I4 | cloze+teach | yes |
| market | この町の市はとても賑やかです。 | This town's market is very lively. | いち | N5 L5 T5 C2 I3 — Blank could be filled by many nouns like 駅 or 祭り, not uniquely 市. | teach only | yes |
| living room | 家族は居間でテレビを見ています。 | The family is watching TV in the living room. | いま | N5 L5 T5 C4 I3 | cloze+teach | yes |
| living room | 居間で少し休みませんか。 | Shall we rest a little in the living room? | いま | N5 L5 T5 C2 I3 — Many other rooms/places could fit the blank (部屋, 部室, etc.). | teach only | yes |
| meet ~ | 今朝、社長にお目に掛かりました。 | I met the president this morning. | おめにかかりました | N5 L3 T5 C3 I3 — 会いました could also fit grammatically, slightly lowering forced recall of the humble form. | teach only | yes |
| meet ~ | 来週また先生にお目に掛かりたいです。 | I want to meet my teacher again next week. | おめにかかりたい | N5 L3 T5 C3 I3 — 会いたい could also fit the blank, though context with 先生 nudges toward humble form. | teach only | yes |
| welcome | 今週のパーティーで新しい留学生を歓迎します。 | We will welcome the new exchange student at this week's party. | かんげいします | N5 L5 T5 C3 I3 — other verbs like 紹介する could plausibly fit the blank | teach only | yes |
| welcome | 昨日のパーティーは彼を歓迎するためのものでした。 | Yesterday's party was to welcome him. | かんげいする | N5 L5 T5 C3 I3 — could also be 祝う or similar without more context | teach only | yes |
| thanks | 毎朝、両親に感謝しています。 | I am grateful to my parents every morning. | かんしゃしています | N5 L5 T5 C3 I3 — Blank could be filled by other verbs like 電話しています, since 両親に___ is fairly open. | teach only | yes |
| thanks | 先生に感謝の手紙を書きました。 | I wrote a thank-you letter to my teacher. | かんしゃ | N4 L5 T5 C2 I3 — 感謝の手紙 could be replaced by お礼の手紙 or similar, reducing uniqueness. | teach only | yes |
| thanks | 皆に感謝したいです。 | I want to thank everyone. | かんしゃしたい | N5 L5 T5 C3 I3 — 皆に___したいです allows several verbs (会いたい, 話したい), weakening forced recall. | teach only | yes |
| argument | 今晩、その問題について議論します。 | We will discuss that problem tonight. | ぎろんします | N4 L5 T4 C3 I3 — Other verbs like 話します/相談します could also fit the blank. | teach only | yes |
| argument | 昨日、友達と長い時間議論しました。 | Yesterday I had a long discussion with my friend. | ぎろんしました | N4 L5 T4 C3 I3 — Blank could also be filled by 話しました/相談しました, reducing uniqueness. | teach only | yes |
| misunderstanding | 彼女は今週の予定を誤解したようです。 | It seems she misunderstood this week's plans. | ごかいした | N4 L4 T5 C2 I3 — Blank could be filled by many verbs like 忘れた or 勘違いした, weak context. | teach only | yes |
| misunderstanding | 昨日、彼の説明を誤解してしまいました。 | Yesterday I ended up misunderstanding his explanation. | ごかいしてしまいました | N5 L4 T5 C3 I3 — Context of '説明' helps but 勘違い could also fit. | teach only | yes |
| misunderstanding | もう誤解したくないです。 | I don't want to misunderstand anymore. | ごかいしたくない | N4 L4 T5 C2 I2 — Very generic sentence; many verbs could fill the blank. | teach only | yes |
| proverb | 学校で諺を一つ習いました。 | I learned one proverb at school. | ことわざ | N5 L5 T5 C2 I3 — Many nouns (word, song, kanji, phrase) could fill the blank in this context. | teach only | yes |
| proverb | この諺の意味が分かりません。 | I don't understand the meaning of this proverb. | ことわざ | N5 L5 T5 C3 I3 — Blank could be filled by other nouns like 'sentence' or 'phrase' that have meaning. | teach only | yes |
| proverb | もっと諺を覚えたいです。 | I want to memorize more proverbs. | ことわざ | N5 L5 T5 C2 I3 — Blank is generic; words, songs, kanji, etc. could also be 'memorized'. | teach only | yes |
| to refuse | 明日の約束を断るつもりです。 | I intend to turn down tomorrow's appointment. | ことわる | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to refuse | 忙しいので、手伝いを断りたいです。 | Since I'm busy, I want to refuse the help request. | ことわりたい | N5 L5 T4 C4 I3 — EN slightly loose: 'refuse the help request' vs 'decline to help' | cloze+teach | yes |
| conjuring trick | 彼は手品が上手です。 | He is good at magic tricks. | てじな | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (料理, 歌 etc.), low recoverability. | teach only | yes |
| conjuring trick | パーティーで手品を見せました。 | He performed a magic trick at the party. | てじな | N5 L5 T5 C3 I3 — Context slightly narrows options but still many nouns could fit the blank. | teach only | yes |
| conjuring trick | 手品を習いたいです。 | I want to learn magic tricks. | てじな | N5 L5 T5 C2 I2 — Very generic sentence; many words could fill the blank (英語, 料理, etc.). | teach only | yes |
| therefore | 雨です。ですから、傘を持って行きます。 | It's raining. Therefore, I'll bring an umbrella. | ですから | N4 L5 T5 C4 I2 | cloze+teach | yes |
| therefore | 電車が遅れました。ですから、遅刻しました。 | The train was late. Therefore, I was late. | ですから | N4 L5 T5 C4 I2 | cloze+teach | yes |
| therefore | 忙しいです。ですから、休みたいです。 | I'm busy. Therefore, I want to rest. | ですから | N4 L5 T5 C4 I2 | cloze+teach | yes |
| demo | 新しいソフトのデモを見ました。 | I watched a demo of the new software. | でも | N5 L5 T5 C5 I3 | cloze+teach | yes |
| demo | そのデモに参加したいです。 | I want to take part in that demo. | でも | N4 L5 T4 C2 I3 — blank could be filled by many other nouns like イベント/セミナー, ambiguous between demo(product) and demonstration(protest) | teach only | yes |
| demo | 明日、店でデモがあります。 | Tomorrow there's a demo at the store. | でも | N4 L5 T4 C2 I3 — blank could be filled by セール/イベント等, weak cloze constraint | teach only | yes |
| electron | 電子は目に見えません。 | Electrons cannot be seen with the eyes. | でんし | N4 L5 T5 C2 I3 — Many invisible things could fill the blank, e.g. 空気, 音, 匂い. | teach only | yes |
| electron | 授業で電子について習いました。 | I learned about electrons in class. | でんし | N4 L5 T5 C1 I2 — Extremely generic template; almost any noun could fit the blank. | teach only | yes |
| electron | 電子がどう動くか知りたいです。 | I want to know how electrons move. | でんし | N4 L5 T5 C2 I3 — Blank could be filled by many moving things (光, 星, 動物 etc.), not uniquely 電子. | teach only | yes |
| tradition | このお祭りは古い伝統です。 | This festival is an old tradition. | でんとう | N4 L5 T5 C3 I3 — 文化 could also fit the blank, slightly reducing uniqueness | teach only | yes |
| tradition | 日本の伝統を知りたいです。 | I want to know about Japanese tradition. | でんとう | N5 L5 T5 C3 I3 — 文化 could also plausibly fill the blank | teach only | yes |
| party (political) | 彼はその党に入っています。 | He belongs to that political party. | とう | N4 L5 T5 C2 I2 — Blank could be filled by many nouns (club, company, etc.), not uniquely 党. | teach only | yes |
| party (political) | 新しい党ができました。 | A new political party was formed. | とう | N4 L5 T5 C2 I2 — Ambiguous blank; could be company, group, etc. | teach only | yes |
| party (political) | 将来、党で働きたいです。 | In the future, I want to work for a political party. | とう | N4 L5 T5 C2 I2 — Ambiguous blank; many workplaces fit. | teach only | yes |
| identity | この二つの答えは同一です。 | These two answers are identical. | どういつ | N4 L3 T5 C3 I2 | teach only | yes |
| identity | 二つの写真は同一だと分かりました。 | It turned out the two photos were identical. | どういつ | N4 L3 T5 C4 I3 | cloze+teach | yes |
| copper coin | 古い銅貨を集めています。 | I am collecting old copper coins. | どうか | N5 L5 T5 C2 I3 — Blank could be filled by many collectible nouns (stamps, stones, etc.), not uniquely 'copper coin'. | teach only | yes |
| copper coin | 財布に銅貨が入っていました。 | There were copper coins in the wallet. | どうか | N5 L5 T5 C2 I3 — Many objects could be found in a wallet, so the blank isn't uniquely recoverable. | teach only | yes |
| copper coin | 珍しい銅貨が欲しいです。 | I want a rare copper coin. | どうか | N5 L5 T5 C2 I3 — ‘Rare ___’ could refer to many collectible items, not just coins. | teach only | yes |
| memories | 旅行の思い出を写真に撮りました。 | I took photos of the memories from the trip. | おもいで | N4 L5 T4 C3 I3 — Slightly idiomatic phrasing but understandable; other nouns (景色, 様子) could also fit the blank. | teach only | yes |
| memories | 子供の頃の思い出はとても楽しいです。 | My childhood memories are a lot of fun. | おもいで | N5 L5 T5 C4 I3 | cloze+teach | yes |
| mainly | 昨日の会議では主に予算について話しました。 | At yesterday's meeting we mainly talked about the budget. | おもに | N5 L5 T5 C4 I4 | cloze+teach | yes |
| mainly | この料理は主に何を使いますか。 | What do you mainly use for this dish? | おもに | N5 L5 T5 C4 I3 | cloze+teach | yes |
| unintentional | 電車に遅れそうで思わず走ってしまいました。 | I unintentionally started running because I thought I'd miss the train. | おもわず | N5 L4 T4 C4 I4 — つい could also fit the blank, slightly reducing recoverability. | cloze+teach | yes |
| unintentional | 鍋が熱くて思わず手を離してしまいました。 | The pot was hot so I unintentionally let go of it. | おもわず | N5 L4 T5 C4 I4 — つい/はっと could also fit, slightly reducing recoverability. | cloze+teach | yes |
| about | 会議にはおよそ二十人集まりました。 | About twenty people gathered for the meeting. | およそ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to exert | 台風は交通に大きな影響を及ぼしました。 | The typhoon had a big effect on transportation. | およぼしました | N5 L4 T5 C3 I3 — 影響を与える is an equally common alternative, so blank isn't fully forced. | teach only | yes |
| to exert | 睡眠不足は健康に影響を及ぼします。 | Lack of sleep affects your health. | およぼします | N5 L4 T5 C3 I3 — 影響を与える could also fill the blank. | teach only | yes |
| to exert | この事故は会社の評判に影響を及ぼすでしょう。 | This accident will probably affect the company's reputation. | およぼす | N5 L4 T5 C3 I3 — 影響を与える is a plausible alternative answer. | teach only | yes |
| favor | 先生から受けた恩を一生忘れません。 | I will never forget the favor I received from my teacher. | おん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| favor | 困った時に助けてくれた恩を感じています。 | I feel grateful for the favor of being helped when I was in trouble. | おん | N4 L5 T4 C4 I4 — English phrasing 'favor of being helped' is slightly awkward but conveys meaning. | cloze+teach | yes |
| harm | 煙草は体に害があります。 | Cigarettes are harmful to the body. | がい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| harm | その薬に害はありませんか。 | Isn't there any harm from that medicine? | がい | N5 L5 T5 C3 I3 — 副作用 could also fit the blank. | teach only | yes |
| harm | 台風は町に大きな害を与えました。 | The typhoon caused great harm to the town. | がい | N5 L5 T5 C3 I4 — 被害 could also plausibly fit the blank. | teach only | yes |
| account | 会計は全部で三千円でした。 | The bill came to three thousand yen in total. | かいけい | N5 L5 T5 C4 I4 — 合計 could also fit the blank, slightly reducing uniqueness. | cloze+teach | yes |
| account | 彼女は会社で会計の仕事をしています。 | She does accounting work at the company. | かいけい | N5 L5 T5 C4 I4 — 経理 or 事務 could also plausibly fill the blank. | cloze+teach | yes |
| farmer | あの村には農家が多いです。 | There are many farmers in that village. | のうか | N5 L5 T5 C3 I2 | teach only | yes |
| farmer | おじいさんは若い時、農家で働きました。 | Grandfather worked at a farm when he was young. | のうか | N5 L5 T4 C3 I3 — EN translation slightly loose ('at a farm' vs 農家 meaning farmer's house/family) | teach only | yes |
| farmer | あの農家を訪ねてください。 | Please visit that farmer's house. | のうか | N4 L5 T5 C2 I2 — blank could be filled with many nouns like 家 or 店, low cloze specificity | teach only | yes |
| agriculture | この村では農業が盛んです。 | Agriculture is thriving in this village. | のうぎょう | N5 L5 T5 C3 I4 — Blank could plausibly be filled by other industries (漁業, 工業), reducing recoverability. | teach only | yes |
| agriculture | 農業について教えてください。 | Please teach me about agriculture. | のうぎょう | N4 L5 T5 C2 I2 — Generic template sentence; many topics could fill the blank, making it hard to recover the exact word. | teach only | yes |
| actor | 彼は有名な俳優です。 | He is a famous actor. | はいゆう | N5 L5 T5 C2 I1 — Generic template sentence; blank could be any profession word. | teach only | yes |
| actor | 彼女は若い時、俳優になりました。 | She became an actor when she was young. | はいゆう | N4 L5 T5 C2 I3 — Blank could be filled with many other profession nouns, not uniquely 俳優; also 女優 might be more typical for a woman. | teach only | yes |
| actor | 息子は俳優になりたいです。 | My son wants to become an actor. | はいゆう | N5 L5 T5 C2 I3 — Blank could be filled with many other profession nouns, reducing recoverability. | teach only | yes |
| pilot | 兄はパイロットです。 | My older brother is a pilot. | ぱいろっと | N5 L5 T5 C2 I2 — Generic sentence; many professions could fill the blank. | teach only | yes |
| pilot | 私はパイロットになりたいです。 | I want to become a pilot. | ぱいろっと | N5 L5 T5 C3 I3 — Slightly generic but plausible; other professions could also fit the blank. | teach only | yes |
| doctorate | 彼は科学の博士です。 | He has a doctorate in science. | はかせ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| doctorate | 彼は去年、博士になりました。 | He got his doctorate last year. | はかせ | N5 L5 T5 C2 I3 — Many words could fill the blank (先生, 医者, 社長, etc.). | teach only | yes |
| sale | この店は靴を販売しています。 | This shop sells shoes. | はんばい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| sale | 先月、新しい商品を販売しました。 | Last month, we sold a new product. | はんばい | N5 L5 T5 C3 I3 — 発売 could also fit the blank. | teach only | yes |
| physics | 大学で物理を習っています。 | I am studying physics at university. | ぶつり | N5 L5 T5 C2 I3 — Blank could be filled by many subjects (math, English, etc.), reducing recoverability. | teach only | yes |
| physics | 昨日、物理のテストに遅れてしまいました。 | Yesterday, I ended up being late for the physics test. | ぶつり | N5 L4 T5 C2 I4 — Any subject test could fit the blank, limiting cloze uniqueness. | teach only | yes |
| physics | 物理を教えてください。 | Please teach me physics. | ぶつり | N4 L4 T5 C1 I2 — Very generic sentence; almost any subject or skill word fits the blank. | teach only | yes |
| seriousness | 学生は真剣に授業を聞いています。 | The students are listening to the class seriously. | しんけん | N4 L5 T5 C3 I3 — Other adverbs like 熱心に could also fit the blank. | teach only | yes |
| artificial | この衛星は人工ですか、自然ですか。 | Is this satellite artificial or natural? | じんこう | N5 L4 T5 C5 I4 | cloze+teach | yes |
| serious | 電話で深刻な話をしました。 | We had a serious talk on the phone. | しんこく | N4 L5 T5 C2 I3 — 深刻な話 is natural but many adjectives (面白い, 大切な) could fill blank equally well. | teach only | yes |
| serious | 何か深刻な問題がありますか。 | Is there some serious problem? | しんこく | N5 L5 T5 C4 I3 — 深刻な問題 is a strong idiomatic collocation, aiding recoverability. | cloze+teach | yes |
| fresh | この魚はとても新鮮ですね。 | This fish is very fresh, isn't it? | しんせん | N5 L5 T5 C2 I2 — Blank could be filled by many adjectives (おいしい, 大きい, etc.), not uniquely 新鮮. | teach only | yes |
| fresh | 新鮮な野菜を送ってもらいました。 | I had fresh vegetables sent to me. | しんせん | N5 L5 T5 C3 I3 — Collocation with 野菜 helps but other adjectives could still fit the blank. | teach only | yes |
| fresh | この卵は新鮮ですか。 | Are these eggs fresh? | しんせん | N5 L5 T5 C2 I2 — Very generic; blank could be filled by many adjectives describing eggs. | teach only | yes |
| careful | もっと慎重に運転しましょう。 | Let's drive more carefully. | しんちょう | N5 L5 T5 C3 I3 — Other adverbs like 安全に or 丁寧に could also fit the blank. | teach only | yes |
| careful | 彼は慎重に答えましたか。 | Did he answer carefully? | しんちょう | N5 L5 T5 C2 I2 — Many adverbs (丁寧に, 正直に, 簡単に) could fit this blank equally well. | teach only | yes |
| careful | 彼女はいつも慎重に話します。 | She always speaks carefully. | しんちょう | N5 L5 T5 C2 I2 — Blank could be filled by 丁寧に, ゆっくり, or other manner adverbs, reducing recoverability. | teach only | yes |
| sour | この果物はすっぱいです。 | This fruit is sour. | すっぱい | N4 L5 T5 C2 I2 — Generic template; many adjectives could fill blank (sweet, bitter, etc.). | teach only | yes |
| sour | このジュースはすっぱいですか。 | Is this juice sour? | すっぱい | N4 L5 T5 C2 I2 — Any taste adjective could fit the blank equally well. | teach only | yes |
| sour | このお酒はすっぱそうです。 | This sake looks sour. | すっぱ | N4 L4 T4 C3 I3 — 'sour-looking sake' is a bit unusual context but grammatically fine; other taste adjectives could still fit. | teach only | yes |
| lovely | そのセーターはすてきですね。 | That sweater is lovely, isn't it? | すてき | N5 L5 T5 C2 I2 — Many adjectives (きれい, かわいい, いい) could fill the blank. | teach only | yes |
| lovely | すてきなレストランへ行きませんか。 | Shall we go to a lovely restaurant? | すてき | N5 L5 T5 C2 I3 — Blank could be filled by other na-adjectives like きれい or いい. | teach only | yes |
| lovely | その写真はすてきですか。 | Is that photo lovely? | すてき | N4 L5 T5 C2 I2 — Generic template sentence; several adjectives fit the blank. | teach only | yes |
| pointed | このナイフはとても鋭いです。 | This knife is very sharp. | するどい | N5 L5 T5 C3 I3 — Many adjectives (小さい、重い、古い等) could fit the blank besides 鋭い. | teach only | yes |
| pointed | その意見は鋭いですか。 | Is that opinion sharp/insightful? | するどい | N4 L5 T4 C2 I3 — Blank could be filled by many adjectives like 面白い、正しい、いい, reducing recoverability. | teach only | yes |
| pointed | 彼女の目はいつも鋭いです。 | Her eyes are always sharp. | するどい | N5 L5 T4 C3 I3 — Blank could plausibly be きれい、大きい等, not uniquely 鋭い. | teach only | yes |
| existence | その問題の存在を課長は知らなかった。 | The section chief didn't know about the existence of that problem. | そんざい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| existence | 神の存在は信じません。 | I don't believe in the existence of god. | そんざい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| existence | この会社の存在が町の経済を支えているから大切です。 | Because this company's existence supports the town's economy, it's important. | そんざい | N4 L4 T5 C3 I3 — Blank could plausibly be filled by other nouns like 活動 or 経営. | teach only | yes |
| other (esp. places and things) | この色以外に、他の色もありますか。 | Besides this color, are there other colors too? | た | N5 L5 T5 C3 I3 — 別の色 could also fit the blank, slightly reducing recoverability | teach only | yes |
| other (esp. places and things) | 他の料理も見せてください。 | Please show me other dishes too. | た | N5 L5 T5 C3 I2 — 別の料理 could also fit the blank; fairly generic sentence | teach only | yes |
| title | この作文の題は「私の家族」です。 | The title of this composition is "My Family." | だい | N5 L5 T5 C4 I3 | cloze+teach | yes |
| target | この調査は大学生を対象にしています。 | This survey targets university students. | たいしょう | N5 L4 T5 C4 I3 | cloze+teach | yes |
| target | この店の商品は主婦を対象にしています。 | This store's products target housewives. | たいしょう | N5 L4 T5 C4 I3 | cloze+teach | yes |
| target | 子供を対象にした番組だから、簡単な言葉を使う。 | Because it's a program targeted at children, they use simple words. | たいしょう | N5 L4 T5 C4 I4 | cloze+teach | yes |
| contrast | 兄と弟は性格が対照的です。 | The older brother and younger brother have contrasting personalities. | たいしょう | N5 L4 T5 C5 I4 | cloze+teach | yes |
| great war | 父は大戦の時に生まれました。 | My father was born during the great war. | たいせん | N4 L5 T5 C2 I3 — 戦争 or other war-related words could also fill the blank. | teach only | yes |
| great war | その大戦について、あまり詳しく知りません。 | I don't know much in detail about that great war. | たいせん | N4 L5 T5 C2 I3 — Context is generic enough that 戦争 could substitute for 大戦. | teach only | yes |
| great war | 大戦が終わったから、町に平和が戻った。 | Because the great war ended, peace returned to the town. | たいせん | N4 L5 T5 C3 I3 — Slightly more context (war ending, peace returning) narrows options but 戦争 still plausible. | teach only | yes |
| arrest | 警察はその泥棒を逮捕しました。 | The police arrested that thief. | たいほ | N5 L5 T5 C4 I3 | cloze+teach | yes |
| representation | 社長の代理として会議に出席しました。 | I attended the meeting as the president's representative. | だいり | N5 L4 T5 C4 I4 | cloze+teach | yes |
| birth date | 病院で生年月日を書いてください。 | Please write your birth date at the hospital. | せいねんがっぴ | N4 L5 T4 C3 I3 — Slightly odd context but plausible; blank could arguably be 名前 in some forms, but generally clear. | teach only | yes |
| birth date | このカードに名前と生年月日を書きます。 | I write my name and birth date on this card. | せいねんがっぴ | N5 L5 T5 C5 I3 | cloze+teach | yes |
| birth date | 生年月日はいつですか。 | What is your birth date? | せいねんがっぴ | N5 L5 T5 C4 I2 — Very short and generic, but still clearly forces the target word. | cloze+teach | yes |
| to dawn | 夜がもうすぐ明けます。 | The night will dawn soon. | あけます | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to dawn | 今日はまだ夜が明けていません。 | Today, dawn hasn't broken yet. | あけていません | N5 L5 T5 C5 I3 | cloze+teach | yes |
| in the past | 以前、この会社で働いていました。 | I used to work at this company before. | いぜん | N5 L5 T5 C3 I3 — Other words like 昔 or 前 could also fit the blank. | teach only | yes |
| in the past | 以前は駅まで自転車で通っていました。 | I used to commute to the station by bicycle before. | いぜん | N5 L5 T5 C3 I3 — 昔 or 前 could also fit the blank similarly. | teach only | yes |
| in the past | 以前より体の具合がいいです。 | I feel better than before. | いぜん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| for a time | 一時、仕事を休むことにしました。 | I decided to take a break from work for a while. | いちじ | N4 L4 T5 C3 I3 — Blank could also be filled by しばらく or 一時的に, reducing uniqueness. | teach only | yes |
| for a time | 熱は一時下がりましたが、また上がりました。 | My fever went down temporarily, but it rose again. | いちじ | N5 L4 T5 C4 I4 — Context of fever dropping then rising strongly implies 一時, good cloze cue. | cloze+teach | yes |
| for a time | 一時、電車が止まっていました。 | The train was stopped for a while. | いちじ | N4 L4 T5 C3 I3 — しばらく could also fit, slightly reducing specificity. | teach only | yes |
| all at once | 八百屋で野菜を一度に買いました。 | I bought all the vegetables at once at the greengrocer's. | いちどに | N4 L5 T5 C2 I3 — Blank could be filled by several adverbs (たくさん, 全部, etc.), reducing recoverability. | teach only | yes |
| all at once | 一度に薬を三つ飲んではいけません。 | You must not take three medicines all at once. | いちどに | N5 L5 T5 C4 I4 | cloze+teach | yes |
| sometime | いつか一緒に買い物に行きませんか。 | Won't you go shopping with me sometime? | いつか | N5 L5 T5 C3 I4 — Other time words like 今度 could also fit the blank. | teach only | yes |
| sometime | いつか会社を休みたいです。 | I want to take a break from work sometime. | いつか | N4 L5 T5 C3 I3 — Slightly unusual phrasing but understandable; other adverbs could fit. | teach only | yes |
| sometime | いつか元気になりますよ。 | You'll get well sometime. | いつか | N4 L5 T5 C2 I3 — Words like きっと or すぐ could also fill the blank, reducing uniqueness. | teach only | yes |
| a moment | 一瞬、電車が止まりました。 | The train stopped for a moment. | いっしゅん | N5 L5 T5 C3 I3 — Other time words like しばらく/急に could also fit the blank. | teach only | yes |
| a moment | 一瞬、頭が痛くなりました。 | My head hurt for a moment. | いっしゅん | N4 L5 T5 C3 I2 — Blank could also be filled by すこし or 急に; slightly generic. | teach only | yes |
| a moment | 会議の間、一瞬静かになりました。 | During the meeting, it became quiet for a moment. | いっしゅん | N4 L5 T5 C3 I3 — Context helps but words like しばらく could still fit. | teach only | yes |
| throughout life | 一生、この会社で働くつもりです。 | I intend to work at this company for my whole life. | いっしょう | N5 L5 T5 C3 I3 — ずっと or other time adverbs could also fit the blank | teach only | yes |
| throughout life | 一生、元気でいたいです。 | I want to stay healthy my whole life. | いっしょう | N5 L5 T5 C3 I3 — other adverbs like ずっと could plausibly fill the blank | teach only | yes |
| throughout life | 彼女とは一生の友達です。 | She is a friend for life. | いっしょう | N5 L5 T5 C5 I4 | cloze+teach | yes |
| criticism | 会議でその計画を批判しますか。 | Will you criticize that plan at the meeting? | ひはん | N4 L5 T5 C2 I2 — Blank could be filled by many verbs like 検討, 実行, 支持, not uniquely 批判. | teach only | yes |
| criticism | 批判ばかりしないで、もっと考えましょう。 | Don't just criticize, let's think more. | ひはん | N4 L5 T5 C3 I3 — Fairly natural but ばかりしないで could also fit words like 心配 or 文句, slightly reducing uniqueness. | teach only | yes |
| secret | これは私だけの秘密です。 | This is a secret just for me. | ひみつ | N4 L5 T5 C2 I2 — generic template sentence, blank could be many nouns | teach only | yes |
| secret | その秘密を誰かに話しましたか。 | Did you tell that secret to someone? | ひみつ | N4 L5 T5 C3 I3 — blank could plausibly be other nouns like 話 or 悩み | teach only | yes |
| secret | この話は秘密にしておきたいです。 | I want to keep this story secret. | ひみつ | N5 L5 T5 C5 I4 — 秘密にしておく is a strong idiomatic collocation, forces the answer | cloze+teach | yes |
| cost | 旅行の費用はいくらですか。 | How much is the cost of the trip? | ひよう | N5 L5 T5 C3 I2 — 値段/料金 could also fit the blank | teach only | yes |
| cost | 費用をもっと安くしたいです。 | I want to make the cost cheaper. | ひよう | N5 L5 T5 C3 I2 — 値段/料金 could also fit the blank | teach only | yes |
| cost | 費用が高いので、今週は旅行しないことにしました。 | Since the cost is high, I decided not to travel this week. | ひよう | N5 L4 T5 C3 I3 — 値段/料金 could also fit the blank | teach only | yes |
| table (e.g., Tab 1) | この表に名前と番号が書いてあります。 | The names and numbers are written on this table. | ひょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| table (e.g., Tab 1) | この表を見ましたか。 | Did you look at this table? | ひょう | N5 L5 T5 C1 I2 — Blank could be almost any noun (book, picture, video, etc.). | teach only | yes |
| table (e.g., Tab 1) | 一緒にこの表を作りましょう。 | Let's make this table together. | ひょう | N5 L5 T5 C1 I2 — Blank could be many things (list, plan, document), not uniquely 表. | teach only | yes |
| assessment | 先生は私の作文を高く評価しました。 | The teacher rated my composition highly. | ひょうか | N5 L5 T5 C4 I4 | cloze+teach | yes |
| assessment | この仕事の評価はどうでしたか。 | How was the assessment of this work? | ひょうか | N5 L5 T5 C3 I3 — other nouns like 結果 or 出来 could also fit the blank | teach only | yes |
| assessment | もっといい評価をもらいたいです。 | I want to get a better assessment. | ひょうか | N5 L5 T5 C3 I3 — words like 点数 or 成績 could also fit the blank | teach only | yes |
| equality | この国ではみんなが平等に働いています。 | In this country, everyone works equally. | びょうどう | N4 L5 T5 C3 I3 — Slightly awkward phrasing of 'working equally', but understandable; several other adverbs could fit the blank. | teach only | yes |
| equality | みんなが平等だと思いますか。 | Do you think everyone is equal? | びょうどう | N5 L5 T5 C3 I3 — Clear and natural, but other adjectives (幸せ, 自由 etc.) could also fit the blank. | teach only | yes |
| equality | 平等な社会を作りたいです。 | I want to create an equal society. | びょうどう | N5 L5 T5 C3 I3 — Natural and clear, though words like 平和 or 幸せ could also fit the blank. | teach only | yes |
| fame | あの店は料理がおいしいと評判です。 | That restaurant is famous for delicious food. | ひょうばん | N5 L5 T5 C4 I3 | cloze+teach | yes |
| fame | 新しいレストランの評判はどうですか。 | What's the reputation of the new restaurant like? | ひょうばん | N5 L5 T5 C2 I3 — Blank could be filled by many nouns (味, 場所, サービス, etc.), reducing recoverability. | teach only | yes |
| fame | あの映画は評判ほど面白くなかったです。 | That movie wasn't as interesting as its reputation. | ひょうばん | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to get tired of | 毎日同じ料理だから、飽きました。 | Because it's the same food every day, I've gotten tired of it. | あきました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to get tired of | 彼はすぐに新しい物に飽きます。 | He quickly gets tired of new things. | あきます | N5 L5 T5 C3 I3 — other verbs like 慣れます could also fit the に pattern, slightly reducing forced recall | teach only | yes |
| to get tired of | この歌に飽きましたか。 | Have you gotten tired of this song? | あきました | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to keep for | 荷物を預かりましょうか。 | Shall I keep your luggage for you? | あずかりましょう | N5 L5 T5 C2 I3 — Blank could equally be filled by 持ちましょうか/運びましょうか, not uniquely 預かりましょうか. | teach only | yes |
| to keep for | 出かけるから、子供を母に預かってもらいます。 | Since I'm going out, I'll have my mother look after the child. | あずかって | N5 L4 T5 C3 I4 — みてもらいます would also fit naturally, reducing uniqueness. | teach only | yes |
| to keep for | 友達の荷物を一日預かりました。 | I kept my friend's luggage for a day. | あずかりました | N5 L5 T5 C3 I3 — 持ちました/借りました could also fit the blank, slightly weakening recoverability. | teach only | yes |
| to give into custody | お金を銀行に預けません。 | I don't deposit money in the bank. | あずけません | N4 L5 T5 C4 I2 | cloze+teach | yes |
| to give into custody | 旅行に行くから、猫を友達に預けます。 | Since I'm going on a trip, I'll leave the cat with a friend. | あずけます | N5 L5 T5 C5 I4 | cloze+teach | yes |
| to give into custody | 荷物をどこに預けますか。 | Where will you leave your luggage? | あずけます | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to warm up | ストーブをつけたら、部屋が暖まりました。 | When I turned on the heater, the room warmed up. | あたたまりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to warm up | 寒いから、部屋が暖まるまで待ちます。 | Since it's cold, I'll wait until the room warms up. | あたたまる | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to warm up | 古い家だから、部屋があまり暖まりません。 | Since it's an old house, the room doesn't warm up much. | あたたまりません | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to warm oneself | お風呂に入って、体が温まりました。 | I took a bath and my body warmed up. | あたたまりました | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to warm oneself | 熱いお茶を飲んで、温まりましょう。 | Let's warm up by drinking hot tea. | あたたまりましょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| to warm oneself | 手が冷たくて、あまり温まりません。 | My hands are cold and don't warm up much. | あたたまりません | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to warm (up to someone/something) | ストーブで部屋を暖めましょう。 | Let's warm up the room with the heater. | あたためましょう | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to warm (up to someone/something) | 寒いから、部屋を暖めます。 | Since it's cold, I'll warm up the room. | あたためます | N5 L5 T5 C5 I3 | cloze+teach | yes |
| to warm (up to someone/something) | このストーブで部屋を暖めますか。 | Will you warm the room with this heater? | あたためます | N5 L5 T5 C5 I2 — Very similar to sentence 0, slightly repetitive template. | cloze+teach | yes |
| to warm | 御飯を温めましょうか。 | Shall I warm up the rice? | あたためましょう | N4 L5 T5 C3 I3 — Other verbs (食べる, 炊く) could plausibly fill the blank. | teach only | yes |
| to warm | 牛乳を温めますか。 | Will you warm up the milk? | あたためます | N4 L5 T5 C3 I3 — Other verbs like 飲む could also fit the blank contextually. | teach only | yes |
| to treat | この店ではいろいろな品物を扱っています。 | This shop handles various goods. | あつかって | N4 L5 T5 C3 I3 — other verbs like 売って/置いて could also fit the blank | teach only | yes |
| to treat | 危ないから、丁寧に扱ってください。 | Please handle it carefully because it's dangerous. | あつかって | N5 L5 T5 C4 I3 | cloze+teach | yes |
| knee | 電車の中で膝が痛いです。 | My knee hurts on the train. | ひざ | N5 L5 T5 C2 I2 — Any body part could fill the blank (足, 腰, etc.), so the target isn't uniquely recoverable. | teach only | yes |
| knee | 椅子に座って膝を伸ばしてください。 | Please sit in the chair and stretch your knee. | ひざ | N5 L5 T5 C3 I3 — 足 could also fit the blank, slightly reducing recoverability. | teach only | yes |
| knee | 仕事中に膝をぶつけました。 | I bumped my knee during work. | ひざ | N5 L5 T5 C2 I2 — Many body parts (頭, 足, 腕) could be bumped, so context doesn't force '膝'. | teach only | yes |
| forehead | 今日は暑くて額に汗をかきました。 | It was hot today, so sweat formed on my forehead. | ひたい | N5 L5 T5 C3 I3 — 顔や体などでも文法的に成立するため、額の一意性はやや弱い | teach only | yes |
| forehead | 会議中に額を触ってしまいました。 | I ended up touching my forehead during the meeting. | ひたい | N5 L5 T5 C3 I3 — 顔や頭など他の語も入り得る | teach only | yes |
| forehead | 熱がある時は額が熱くなります。 | When you have a fever, your forehead gets hot. | ひたい | N5 L5 T5 C3 I3 — 体や顔でも意味が通るため一意性がやや低い | teach only | yes |
| facial expression | 彼は写真の中で面白い表情をしています。 | He has a funny expression in the photo. | ひょうじょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| facial expression | 部長は怒った表情で話しました。 | The department head spoke with an angry expression. | ひょうじょう | N5 L5 T5 C4 I3 | cloze+teach | yes |
| facial expression | 彼女の表情を見て、疲れているとわかりました。 | Seeing her expression, I understood that she was tired. | ひょうじょう | N5 L5 T5 C4 I4 | cloze+teach | yes |
| to shiver | 寒くて体が震えています。 | My body is shivering because it's cold. | ふるえて | N5 L5 T5 C4 I4 — 冷えて could also fit the blank, slightly reducing uniqueness. | cloze+teach | yes |
| to shiver | 発表の前に声が震えました。 | My voice shook before the presentation. | ふるえ | N5 L5 T5 C4 I4 — Plausible alternative verbs like かすれる could fit, but still strongly suggests 震える. | cloze+teach | yes |
| to shiver | 怖い話を聞いて手が震えました。 | My hands shook after hearing a scary story. | ふるえ | N5 L5 T5 C5 I4 | cloze+teach | yes |
| bone | 転んで骨を折りました。 | I fell and broke a bone. | ほね | N5 L5 T5 C4 I4 | cloze+teach | yes |
| bone | 魚の骨が喉に刺さりました。 | A fish bone got stuck in my throat. | ほね | N5 L5 T5 C5 I5 | cloze+teach | yes |
| bone | 年を取ると骨が弱くなります。 | As you get older, your bones become weaker. | ほね | N5 L5 T5 C4 I4 | cloze+teach | yes |
| cheek | 寒い風で頬が赤くなりました。 | My cheeks turned red from the cold wind. | ほお | N5 L5 T5 C3 I3 — 顔・鼻・肌など他の身体部位でも文が成立するため一意に頬とは限らない | teach only | yes |
| cheek | 外は寒くて、頬がとても冷たいです。 | It's cold outside, and my cheeks are very cold. | ほお | N5 L5 T5 C3 I3 — 手や鼻など他の語でも成立するため頬に特定しにくい | teach only | yes |
| death | 医者は人の死について話しました。 | The doctor talked about human death. | し | N4 L5 T5 C3 I3 | teach only | yes |
| sense of sight | 視覚も食事の楽しみの一つです。 | Sight is also one of the joys of eating. | しかく | N4 L5 T5 C3 I3 — Plausible context but 見た目 or 味 could also fit somewhat. | teach only | yes |
| genuine article | 彼が見せたバッグは本物でした。 | The bag he showed me was genuine. | ほんもの | N5 L5 T5 C3 I3 — Blank could plausibly be filled with other adjectives like 高価, 新品, etc., not uniquely 本物. | teach only | yes |
| genuine article | この絵が本物かどうか教えてください。 | Please tell me whether this painting is genuine. | ほんもの | N5 L5 T5 C4 I3 | cloze+teach | yes |
| well (used when making a modest or | まあ、悪くないですね。 | Well, it's not bad, is it. | まあ | N4 L5 T4 C2 I2 — まあ here fits the 'qualified praise' sense but blank could also be filled by そうですね/でも etc. | teach only | yes |
| defeat | 今日の試合は負けでした。 | Today's match was a loss. | まけ | N5 L5 T5 C2 I3 — Blank could equally be 勝ち or 引き分け, so answer isn't uniquely determined. | teach only | yes |
| defeat | 昨日のゲームは私の負けでした。 | Yesterday's game was my loss. | まけ | N5 L5 T5 C2 I3 — Blank could equally be 勝ち, so answer isn't uniquely determined. | teach only | yes |
| by no means | まさか彼が来るとは思わなかった。 | I never imagined he would come. | まさか | N5 L5 T5 C4 I4 | cloze+teach | yes |
| by no means | まさか雨が降るとは思いませんでした。 | I never thought it would rain. | まさか | N5 L5 T5 C4 I3 | cloze+teach | yes |
| by no means | まさか部長が辞めるとは知りませんでした。 | I had no idea the manager would quit. | まさか | N5 L5 T5 C4 I4 | cloze+teach | yes |
| correctly | これはまさに私が欲しかった本です。 | This is exactly the book I wanted. | まさに | N5 L5 T5 C3 I4 — 本当に could also fit the blank, slightly reducing uniqueness. | teach only | yes |
| correctly | この味はまさに母の料理と同じです。 | This taste is exactly like my mother's cooking. | まさに | N5 L5 T5 C3 I4 — 本当に/たしかに could also fit the blank. | teach only | yes |
| correctly | 彼の説明はまさに正しかったです。 | His explanation was exactly correct. | まさに | N5 L5 T4 C4 I3 — まさに正しい is a fairly fixed collocation, giving good recoverability; slightly generic content. | cloze+teach | yes |
| increasingly | 雨はますます強くなりました。 | The rain got increasingly stronger. | ますます | N4 L5 T5 C2 I2 — だんだん/どんどん could also fit the blank | teach only | yes |
| increasingly | 仕事はますます忙しくなります。 | Work is becoming increasingly busy. | ますます | N4 L5 T5 C2 I2 — だんだん/どんどん could also fit the blank | teach only | yes |
| mistake | この間違いを直してください。 | Please fix this mistake. | まちがい | N4 L5 T5 C3 I2 — Blank could also be filled by words like 問題 or 部分. | teach only | yes |
| mistake | 彼の計算には間違いがあります。 | There is a mistake in his calculation. | まちがい | N5 L5 T5 C3 I3 — Blank could also be filled by ミス or 誤り, slightly reducing uniqueness. | teach only | yes |
| mimicry | 弟はいつも兄の真似をします。 | My younger brother always imitates his older brother. | まね | N5 L5 T5 C2 I2 — Blank could be filled by many nouns (世話, 手伝い, etc.), not uniquely 真似. | teach only | yes |
| mimicry | 彼女は歌手の真似が上手です。 | She is good at imitating singers. | まね | N5 L5 T5 C3 I3 — Fairly recoverable given 歌手 context but 物真似 or other nouns could also fit. | teach only | yes |
| mimicry | 私の真似をしないでください。 | Please don't imitate me. | まね | N5 L5 T5 C2 I2 — Many nouns like 邪魔, 悪口, 批判 could fit the blank equally well. | teach only | yes |
