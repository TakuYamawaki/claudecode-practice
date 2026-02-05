/**
 * 会社情報サンプルデータ
 * 実際の運用では外部APIから取得することを推奨
 */
const companyData = [
    {
        name: "トヨタ自動車株式会社",
        shortNames: ["トヨタ", "トヨタ自動車", "TOYOTA"],
        stockCode: "7203",
        corporateNumber: "1180301018771",
        edinetCode: "E02144"
    },
    {
        name: "ソニーグループ株式会社",
        shortNames: ["ソニー", "SONY", "ソニーグループ"],
        stockCode: "6758",
        corporateNumber: "5010401067252",
        edinetCode: "E01777"
    },
    {
        name: "本田技研工業株式会社",
        shortNames: ["ホンダ", "本田技研", "HONDA"],
        stockCode: "7267",
        corporateNumber: "4010401044085",
        edinetCode: "E02166"
    },
    {
        name: "株式会社日立製作所",
        shortNames: ["日立", "日立製作所", "HITACHI"],
        stockCode: "6501",
        corporateNumber: "7010001008844",
        edinetCode: "E01737"
    },
    {
        name: "パナソニックホールディングス株式会社",
        shortNames: ["パナソニック", "Panasonic", "パナ"],
        stockCode: "6752",
        corporateNumber: "5120001158218",
        edinetCode: "E01772"
    },
    {
        name: "任天堂株式会社",
        shortNames: ["任天堂", "Nintendo", "にんてんどう"],
        stockCode: "7974",
        corporateNumber: "5130001005778",
        edinetCode: "E02424"
    },
    {
        name: "ソフトバンクグループ株式会社",
        shortNames: ["ソフトバンク", "SoftBank", "ソフバン"],
        stockCode: "9984",
        corporateNumber: "6010401052215",
        edinetCode: "E02778"
    },
    {
        name: "株式会社NTTドコモ",
        shortNames: ["ドコモ", "NTTドコモ", "docomo"],
        stockCode: null,  // 上場廃止
        corporateNumber: "9010001067912",
        edinetCode: null
    },
    {
        name: "日本電信電話株式会社",
        shortNames: ["NTT", "日本電信電話", "エヌティティ"],
        stockCode: "9432",
        corporateNumber: "9010001083852",
        edinetCode: "E04430"
    },
    {
        name: "KDDI株式会社",
        shortNames: ["KDDI", "au", "ケーディーディーアイ"],
        stockCode: "9433",
        corporateNumber: "2010401011052",
        edinetCode: "E04425"
    },
    {
        name: "株式会社三菱UFJフィナンシャル・グループ",
        shortNames: ["三菱UFJ", "MUFG", "三菱UFJフィナンシャル"],
        stockCode: "8306",
        corporateNumber: "4010001073486",
        edinetCode: "E03606"
    },
    {
        name: "株式会社三井住友フィナンシャルグループ",
        shortNames: ["三井住友", "SMFG", "三井住友フィナンシャル"],
        stockCode: "8316",
        corporateNumber: "1010001081578",
        edinetCode: "E03615"
    },
    {
        name: "株式会社みずほフィナンシャルグループ",
        shortNames: ["みずほ", "MIZUHO", "みずほフィナンシャル"],
        stockCode: "8411",
        corporateNumber: "6010001044157",
        edinetCode: "E03666"
    },
    {
        name: "キーエンス株式会社",
        shortNames: ["キーエンス", "KEYENCE"],
        stockCode: "6861",
        corporateNumber: "3120001077402",
        edinetCode: "E01927"
    },
    {
        name: "株式会社ファーストリテイリング",
        shortNames: ["ファーストリテイリング", "ユニクロ", "UNIQLO", "FR"],
        stockCode: "9983",
        corporateNumber: "9250001007078",
        edinetCode: "E03276"
    },
    {
        name: "東京エレクトロン株式会社",
        shortNames: ["東京エレクトロン", "TEL"],
        stockCode: "8035",
        corporateNumber: "9010401054849",
        edinetCode: "E02294"
    },
    {
        name: "株式会社リクルートホールディングス",
        shortNames: ["リクルート", "Recruit", "リクルートホールディングス"],
        stockCode: "6098",
        corporateNumber: "3011001083003",
        edinetCode: "E05765"
    },
    {
        name: "株式会社デンソー",
        shortNames: ["デンソー", "DENSO"],
        stockCode: "6902",
        corporateNumber: "3180301014573",
        edinetCode: "E01910"
    },
    {
        name: "信越化学工業株式会社",
        shortNames: ["信越化学", "信越化学工業", "シンエツ"],
        stockCode: "4063",
        corporateNumber: "5011101001997",
        edinetCode: "E00786"
    },
    {
        name: "村田製作所",
        shortNames: ["村田製作所", "ムラタ", "MURATA"],
        stockCode: "6981",
        corporateNumber: "6130001006709",
        edinetCode: "E01978"
    },
    {
        name: "ダイキン工業株式会社",
        shortNames: ["ダイキン", "ダイキン工業", "DAIKIN"],
        stockCode: "6367",
        corporateNumber: "3120001077312",
        edinetCode: "E01570"
    },
    {
        name: "伊藤忠商事株式会社",
        shortNames: ["伊藤忠", "伊藤忠商事", "ITOCHU"],
        stockCode: "8001",
        corporateNumber: "3120001077476",
        edinetCode: "E02529"
    },
    {
        name: "三菱商事株式会社",
        shortNames: ["三菱商事", "MC"],
        stockCode: "8058",
        corporateNumber: "8010001008771",
        edinetCode: "E02529"
    },
    {
        name: "三井物産株式会社",
        shortNames: ["三井物産", "MITSUI"],
        stockCode: "8031",
        corporateNumber: "5010001008856",
        edinetCode: "E02513"
    },
    {
        name: "住友商事株式会社",
        shortNames: ["住友商事", "Sumitomo"],
        stockCode: "8053",
        corporateNumber: "3120001077526",
        edinetCode: "E02527"
    },
    {
        name: "丸紅株式会社",
        shortNames: ["丸紅", "Marubeni"],
        stockCode: "8002",
        corporateNumber: "9010001008783",
        edinetCode: "E02517"
    },
    {
        name: "日産自動車株式会社",
        shortNames: ["日産", "日産自動車", "NISSAN"],
        stockCode: "7201",
        corporateNumber: "1020001031718",
        edinetCode: "E02142"
    },
    {
        name: "株式会社SUBARU",
        shortNames: ["スバル", "SUBARU", "富士重工"],
        stockCode: "7270",
        corporateNumber: "5011101001657",
        edinetCode: "E02168"
    },
    {
        name: "マツダ株式会社",
        shortNames: ["マツダ", "MAZDA"],
        stockCode: "7261",
        corporateNumber: "5240001010626",
        edinetCode: "E02163"
    },
    {
        name: "株式会社メルカリ",
        shortNames: ["メルカリ", "Mercari"],
        stockCode: "4385",
        corporateNumber: "8011001095497",
        edinetCode: "E33492"
    },
    {
        name: "楽天グループ株式会社",
        shortNames: ["楽天", "Rakuten", "楽天グループ"],
        stockCode: "4755",
        corporateNumber: "9010701020592",
        edinetCode: "E05765"
    },
    {
        name: "株式会社サイバーエージェント",
        shortNames: ["サイバーエージェント", "CyberAgent", "サイバー"],
        stockCode: "4751",
        corporateNumber: "8011001033618",
        edinetCode: "E05370"
    },
    {
        name: "株式会社ZOZOホールディングス",
        shortNames: ["ZOZO", "ゾゾ", "スタートトゥデイ"],
        stockCode: "3092",
        corporateNumber: "4040001051498",
        edinetCode: "E03377"
    },
    {
        name: "LINE株式会社",
        shortNames: ["LINE", "ライン"],
        stockCode: null,  // 上場廃止（Zホールディングスと統合）
        corporateNumber: "4011001066498",
        edinetCode: null
    },
    {
        name: "Zホールディングス株式会社",
        shortNames: ["Zホールディングス", "ZHD", "ヤフー", "Yahoo"],
        stockCode: "4689",
        corporateNumber: "4010001016680",
        edinetCode: "E05000"
    }
];
