import type { StepType } from "../types/step.type"

type Speech = {
    presenter: string
    script: Script[]
}

type Script = {
    japanese: string
    romaji: string
}

export const SpeechScripts: Record<StepType, Speech> = {
    'Início': {
        presenter: "Gustavo Sales",
        script: []
    },
    'Introdução': {
        presenter: "Gustavo",
        script: [
            {
                japanese: "みなさん、こんばんは。",
                romaji: "Minasan, konbanwa.",
            },
            {
                japanese: "本日は、ブラジルの教育・科学・技術について発表させていただきます。",
                romaji: "Honjitsu wa, Burajiru no kyōiku, kagaku, gijutsu ni tsuite happyō sasete itadakimasu.",
            },
            {
                japanese: "ブラジルは、発展途上国として紹介されることが多い国ですが、",
                romaji: "Burajiru wa, hatten tojōkoku to shite shōkai sareru koto ga ōi kuni desu ga,",
            },
            {
                japanese: "一方で、特定の分野では国際的に評価されている取り組みもあります。",
                romaji: "Ippō de, tokutei no bunya de wa kokusaiteki ni hyōka sarete iru torikumi mo arimasu.",
            },
            {
                japanese: "本発表では、ブラジルの現状を中心に、主に教育・科学・技術分野における代表的な取り組みをご紹介します。",
                romaji: "Hon happyō de wa, Burajiru no genjō o chūshin ni, omo ni kyōiku, kagaku, gijutsu bunya ni okeru daihyōteki na torikumi o go-shōkai shimasu.",
            },
        ],
    },
    'Sistema Educacional': {
        presenter: "Daisy",
        script: [
            {
                japanese: "まず、ブラジルの教育制度についてです。",
                romaji: "Mazu, Burajiru no kyōiku seido ni tsuite desu.",
            },
            {
                japanese: "ブラジルの教育は、幼児教育およそ4年、初等教育は9年、中等教育は3年です。",
                romaji: "Burajiru no kyōiku wa, yōji kyōiku oyoso yon-nen, shotō kyōiku wa kyū-nen, chūtō kyōiku wa san-nen desu.",
            },
            {
                japanese: "そして高等教育は2年から6年までです。",
                romaji: "Soshite kōtō kyōiku wa ni-nen kara roku-nen made desu.",
            },
            {
                japanese: "初等教育と中等教育は、日本の小学校・中学校・高校にほぼ対応しています。",
                romaji: "Shotō kyōiku to chūtō kyōiku wa, Nihon no shōgakkō, chūgakkō, kōkō ni hobo taiō shite imasu.",
            },
            {
                japanese: "このような制度のもとで、国全体として教育が行われています。",
                romaji: "Kono yōna seido no moto de, kuni zentai to shite kyōiku ga okonawarete imasu.",
            },
        ],
    },
    'Universidades': {
        presenter: "Teruko",
        script: [
            {
                japanese: "ブラジルの教育の大きな特徴の一つは、公立大学が無料であることです。",
                romaji: "Burajiru no kyōiku no ōkina tokuchō no hitotsu wa, kōritsu daigaku ga muryō de aru koto desu.",
            },
            {
                japanese: "代表的な大学として、サンパウロ大学やカンピーナス州立大学があります。",
                romaji: "Daihyōteki na daigaku to shite, Sanpauro Daigaku ya Kanpīnasu Shūritsu Daigaku ga arimasu.",
            },
            {
                japanese: "サンパウロ大学は「ブラジルの東大」とよく例えられます。",
                romaji: "Sanpauro Daigaku wa, 'Burajiru no Tōdai' to yoku tatoeraremasu.",
            },
            {
                japanese: "これらの大学では、医学・工学・農学などの分野で高いレベルの研究が行われています。",
                romaji: "Korera no daigaku de wa, igaku, kōgaku, nōgaku nado no bunya de takai reberu no kenkyū ga okonawarete imasu.",
            },
            {
                japanese: "しかし、教育格差により進学できる人は限られています。",
                romaji: "Shikashi, kyōiku kakusa ni yori shingaku dekiru hito wa kagirarete imasu.",
            },
        ],
    },
    'Ciência': {
        presenter: "Priscila",
        script: [
            {
                japanese: "次に、科学分野についてです。",
                romaji: "Tsugi ni, kagaku bunya ni tsuite desu.",
            },
            {
                japanese: "ブラジルでは、人文科学や社会科学の分野も重視されています。",
                romaji: "Burajiru de wa, jinbun kagaku ya shakai kagaku no bunya mo jūshi sarete imasu.",
            },
            {
                japanese: "特に重要なのが農業分野です。",
                romaji: "Tokuni jūyō na no ga nōgyō bunya desu.",
            },
            {
                japanese: "Embrapaでは、熱帯地域に適した農業技術や土壌改良の研究が行われています。",
                romaji: "Embrapa de wa, nettai chiiki ni tekishita nōgyō gijutsu ya dojō kairyō no kenkyū ga okonawarete imasu.",
            },
            {
                japanese: "その結果、ブラジルは世界有数の農業生産国となりました。",
                romaji: "Sono kekka, Burajiru wa sekai yūsū no nōgyō seisankoku to narimashita.",
            },
        ],
    },
    'Engenharia': {
        presenter: "Raquel",
        script: [
            {
                japanese: "ブラジルの工学分野では、航空工学が特に知られています。",
                romaji: "Burajiru no kōgaku bunya de wa, kōkū kōgaku ga tokuni shirarete imasu.",
            },
            {
                japanese: "Embraerは、リージョナルジェット機の分野で世界的に活躍しています。",
                romaji: "Embraer wa, rījyonaru jetto-ki no bunya de sekaiteki ni katsuyaku shite imasu.",
            },
            {
                japanese: "また、イタイプー水力発電所は世界最大級のプロジェクトです。",
                romaji: "Mata, Itaipū suiryoku hatsudensho wa sekai saidaikyū no purojekuto desu.",
            },
            {
                japanese: "これは大規模インフラを支えるブラジルの工学力を示しています。",
                romaji: "Kore wa daikibo infura o sasaeru Burajiru no kōgakuryoku o shimeshite imasu.",
            },
        ],
    },
    'Tecnologia Aplicada': {
        presenter: "Nicolas",
        script: [
            {
                japanese: "ブラジルは、宇宙や気象の分野でも技術を活用しています。",
                romaji: "Burajiru wa, uchū ya kishō no bunya demo gijutsu o katsuyō shite imasu.",
            },
            {
                japanese: "国立宇宙研究所では、天気予報や気候研究が行われています。",
                romaji: "Kokuritsu Uchū Kenkyūjo de wa, tenki yohō ya kikō kenkyū ga okonawarete imasu.",
            },
            {
                japanese: "また、メカトロニクスや自動化技術も発展しています。",
                romaji: "Mata, mekatotoronikusu ya jidōka gijutsu mo hatten shite imasu.",
            },
        ],
    },
    'Conclusão': {
        presenter: "Hugo",
        script: [
            {
                japanese: "最後に、まとめです。",
                romaji: "Saigo ni, matome desu.",
            },
            {
                japanese: "ブラジルは教育・科学・技術の分野で強みと課題を同時に持つ国です。",
                romaji: "Burajiru wa kyōiku, kagaku, gijutsu no bunya de tsuyomi to kadai o dōji ni motsu kuni desu.",
            },
            {
                japanese: "課題に向き合いながら、少しずつ発展を続けています。",
                romaji: "Kadai ni mukai nagara, sukoshi zutsu hatten o tsuzukete imasu.",
            },
            {
                japanese: "ご清聴ありがとうございました。",
                romaji: "Go-seichō arigatō gozaimashita.",
            },
        ],
    },
};
