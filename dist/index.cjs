function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $882b6d93070905b3$export$2e2bcd8739ae039);
$parcel$export(module.exports, "TokenType", () => $3aefcdddac337967$export$f435f793048e7a0f);
$parcel$export(module.exports, "VarnaType", () => $bf01d1d1fdea4641$export$43f5c03b889fb331);
const $9ba0f9a5c47c04f2$export$829ee63b3dace6ab = (aksharas)=>aksharas.flatMap((akshara)=>akshara.attributes?.varnas);
const $9ba0f9a5c47c04f2$export$99699e6242229250 = (tokens, tokenType)=>tokens.filter((token)=>token.type === tokenType);
const $9ba0f9a5c47c04f2$export$a93666e9003b61ba = (vowelMark)=>({
        "ा": "आ",
        "ि": "इ",
        "ी": "ई",
        "ु": "उ",
        "ू": "ऊ",
        "ृ": "ऋ",
        "ॄ": "ॠ",
        "ॢ": "ऌ",
        "ॣ": "ॡ",
        "ॆ": "ऎ",
        "े": "ए",
        "ै": "ऐ",
        "ॊ": "ऒ",
        "ो": "ओ",
        "ौ": "औ",
        "ॅ": "ऍ",
        "ॉ": "ऑ"
    })[vowelMark] || "";


const $25e20db0144ee577$export$7963e2ffafd9d670 = {
    अ: "vowels",
    आ: "vowels",
    इ: "vowels",
    ई: "vowels",
    उ: "vowels",
    ऊ: "vowels",
    ऋ: "vowels",
    ॠ: "vowels",
    ऌ: "vowels",
    ॡ: "vowels",
    ऎ: "vowels",
    ए: "vowels",
    ऐ: "vowels",
    ऒ: "vowels",
    ओ: "vowels",
    औ: "vowels",
    ऍ: "vowels",
    ऑ: "vowels",
    क: "consonants",
    ख: "consonants",
    ग: "consonants",
    घ: "consonants",
    ङ: "consonants",
    च: "consonants",
    छ: "consonants",
    ज: "consonants",
    झ: "consonants",
    ञ: "consonants",
    ट: "consonants",
    ठ: "consonants",
    ड: "consonants",
    ढ: "consonants",
    ण: "consonants",
    त: "consonants",
    थ: "consonants",
    द: "consonants",
    ध: "consonants",
    न: "consonants",
    प: "consonants",
    फ: "consonants",
    ब: "consonants",
    भ: "consonants",
    म: "consonants",
    य: "consonants",
    र: "consonants",
    ल: "consonants",
    व: "consonants",
    श: "consonants",
    ष: "consonants",
    स: "consonants",
    ह: "consonants",
    ळ: "consonants",
    क्ष: "consonants",
    ज्ञ: "consonants",
    क़: "extra_consonants",
    ख़: "extra_consonants",
    ग़: "extra_consonants",
    ज़: "extra_consonants",
    ड़: "extra_consonants",
    फ़: "extra_consonants",
    य़: "extra_consonants",
    ऱ: "extra_consonants",
    ऴ: "extra_consonants",
    ऩ: "extra_consonants",
    "ा": "vowel_marks",
    "ि": "vowel_marks",
    "ी": "vowel_marks",
    "ु": "vowel_marks",
    "ू": "vowel_marks",
    "ृ": "vowel_marks",
    "ॄ": "vowel_marks",
    "ॢ": "vowel_marks",
    "ॣ": "vowel_marks",
    "ॆ": "vowel_marks",
    "े": "vowel_marks",
    "ै": "vowel_marks",
    "ॊ": "vowel_marks",
    "ो": "vowel_marks",
    "ौ": "vowel_marks",
    "ॅ": "vowel_marks",
    "ॉ": "vowel_marks",
    "ं": "yogavaahas",
    "ः": "yogavaahas",
    "ँ": "yogavaahas",
    ᳵ: "yogavaahas",
    ᳶ: "yogavaahas",
    ꣳ: "yogavaahas",
    "्": "virama",
    "़": "nukta",
    "‍": "zwj",
    "‌": "zwnj",
    "॑": "accents",
    "॒": "accents",
    "᳡": "accents",
    "꣡": "accents",
    "꣢": "accents",
    "꣣": "accents",
    "꣤": "accents",
    "꣥": "accents",
    "꣦": "accents",
    "꣧": "accents",
    "꣨": "accents",
    "꣩": "accents",
    "꣪": "accents",
    "꣫": "accents",
    "꣬": "accents",
    "꣭": "accents",
    "꣮": "accents",
    "꣯": "accents",
    "꣰": "accents",
    "꣱": "accents",
    "०": "symbols",
    "१": "symbols",
    "२": "symbols",
    "३": "symbols",
    "४": "symbols",
    "५": "symbols",
    "६": "symbols",
    "७": "symbols",
    "८": "symbols",
    "९": "symbols",
    ॐ: "symbols",
    ऽ: "symbols",
    "।": "symbols",
    "॥": "symbols"
};


let $823e42faaa542640$var$CharType;
(function(CharType) {
    CharType["Vowel"] = "vowels";
    CharType["Symbol"] = "symbols";
    CharType["VowelMark"] = "vowel_marks";
    CharType["Yogavaha"] = "yogavaahas";
    CharType["Accent"] = "accents";
    CharType["Virama"] = "virama";
    CharType["Nukta"] = "nukta";
    CharType["ZWNJ"] = "zwnj";
    CharType["ZWJ"] = "zwj";
    CharType["Consonant"] = "consonants";
    CharType["ExtraConsonant"] = "extra_consonants";
    CharType["Whitespace"] = "whitespace";
    CharType["Unrecognised"] = "unrecognised";
    CharType["EndOfInput"] = "end_of_input";
})($823e42faaa542640$var$CharType || ($823e42faaa542640$var$CharType = {}));
const $823e42faaa542640$var$OM = "ॐ";
const $823e42faaa542640$var$MATRAS = [
    "१",
    "२",
    "३"
];
class $823e42faaa542640$export$3ae2e3e9a9c21123 {
    constructor(value){
        this.value = value;
        this.type = this.#getCharType(value);
    }
    #getCharType = (char)=>{
        if (char === undefined) return $823e42faaa542640$var$CharType.EndOfInput;
        if (/\s/.test(char)) return $823e42faaa542640$var$CharType.Whitespace;
        return (0, $25e20db0144ee577$export$7963e2ffafd9d670)[char] ?? $823e42faaa542640$var$CharType.Unrecognised;
    };
    isVowel = ()=>this.type === $823e42faaa542640$var$CharType.Vowel;
    isConsonant = ()=>[
            $823e42faaa542640$var$CharType.Consonant,
            $823e42faaa542640$var$CharType.ExtraConsonant
        ].includes(this.type);
    isOm = ()=>this.value === $823e42faaa542640$var$OM;
    isSymbol = ()=>this.type === $823e42faaa542640$var$CharType.Symbol;
    isVowelMark = ()=>this.type === $823e42faaa542640$var$CharType.VowelMark;
    isYogavaha = ()=>this.type === $823e42faaa542640$var$CharType.Yogavaha;
    isAccent = ()=>this.type === $823e42faaa542640$var$CharType.Accent;
    isVirama = ()=>this.type === $823e42faaa542640$var$CharType.Virama;
    isNukta = ()=>this.type === $823e42faaa542640$var$CharType.Nukta;
    isMatra = ()=>$823e42faaa542640$var$MATRAS.includes(this.value);
    isJoiner = ()=>[
            $823e42faaa542640$var$CharType.ZWNJ,
            $823e42faaa542640$var$CharType.ZWJ
        ].includes(this.type);
    isWhitespace = ()=>this.type === $823e42faaa542640$var$CharType.Whitespace;
    isUnrecognised = ()=>this.type === $823e42faaa542640$var$CharType.Unrecognised;
    isEndOfInput = ()=>this.type === $823e42faaa542640$var$CharType.EndOfInput;
    isVowelAttachment = ()=>this.isYogavaha() || this.isAccent();
    isConsonantAttachment = ()=>this.isVirama() || this.isYogavaha() || this.isAccent() || this.isVowelMark() || this.isMatra();
    isVowelMarkAttachment = ()=>this.isYogavaha() || this.isAccent() || this.isMatra();
}



let $3aefcdddac337967$export$f435f793048e7a0f;
(function(TokenType) {
    TokenType["Akshara"] = "akshara";
    TokenType["Symbol"] = "symbol";
    TokenType["Whitespace"] = "whitespace";
    TokenType["Invalid"] = "invalid";
    TokenType["Unrecognised"] = "unrecognised";
})($3aefcdddac337967$export$f435f793048e7a0f || ($3aefcdddac337967$export$f435f793048e7a0f = {}));
class $3aefcdddac337967$export$50792b0e93539fde {
    constructor(type, value, pos, attributes){
        this.type = type;
        this.value = value;
        this.from = pos;
        this.to = pos + (value.length - 1);
        this.attributes = attributes;
    }
}


let $bf01d1d1fdea4641$export$43f5c03b889fb331;
(function(VarnaType) {
    VarnaType["Svara"] = "svara";
    VarnaType["Vyanjana"] = "vyanjana";
})($bf01d1d1fdea4641$export$43f5c03b889fb331 || ($bf01d1d1fdea4641$export$43f5c03b889fb331 = {}));
const $bf01d1d1fdea4641$export$9aabccd6c029d20f = {
    Virama: "्",
    InherentA: "अ",
    Om: [
        "ओ",
        "म्"
    ]
};
class $bf01d1d1fdea4641$export$9a9b914922c5814b {
    constructor(type, value){
        this.type = type;
        this.value = value;
    }
}


let $da2f48c805d435e9$var$State;
(function(State) {
    State[State["Initial"] = 0] = "Initial";
    State[State["Vowel"] = 1] = "Vowel";
    State[State["Consonant"] = 2] = "Consonant";
    State[State["ConjunctConsonant"] = 3] = "ConjunctConsonant";
})($da2f48c805d435e9$var$State || ($da2f48c805d435e9$var$State = {}));
const $da2f48c805d435e9$export$660b2ee2d4fb4eff = (input)=>{
    const tokens = [];
    let pos = 0;
    let acc = "";
    let svaraAcc = "";
    let vyanjanaAcc = "";
    let varnas = [];
    let state = $da2f48c805d435e9$var$State.Initial;
    const resetVariables = ()=>{
        pos = 0;
        acc = "";
        svaraAcc = "";
        vyanjanaAcc = "";
        varnas = [];
        state = $da2f48c805d435e9$var$State.Initial;
    };
    const createToken = (tokenType, attributes)=>{
        tokens.push(new (0, $3aefcdddac337967$export$50792b0e93539fde)(tokenType, acc, pos, attributes));
        resetVariables();
    };
    for(let i = 0, l = input.length; i < l; i += 1){
        const char = new (0, $823e42faaa542640$export$3ae2e3e9a9c21123)(input[i]);
        const nextChar = new (0, $823e42faaa542640$export$3ae2e3e9a9c21123)(input[i + 1]);
        acc += char.value;
        switch(state){
            case $da2f48c805d435e9$var$State.Initial:
                pos = i;
                if (char.isOm()) {
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Svara, (0, $bf01d1d1fdea4641$export$9aabccd6c029d20f).Om[0]),
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Vyanjana, (0, $bf01d1d1fdea4641$export$9aabccd6c029d20f).Om[1]), 
                        ])
                    });
                    break;
                }
                if (char.isSymbol()) {
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Symbol);
                    break;
                }
                if (char.isWhitespace()) {
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Whitespace);
                    break;
                }
                if (char.isUnrecognised()) {
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Unrecognised);
                    break;
                }
                if (char.isVowel()) {
                    if (nextChar.isVowelAttachment()) {
                        state = $da2f48c805d435e9$var$State.Vowel;
                        break;
                    }
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Svara, acc)
                        ])
                    });
                    break;
                }
                if (char.isConsonant()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isNukta() || nextChar.isConsonantAttachment()) {
                        state = $da2f48c805d435e9$var$State.Consonant;
                        break;
                    }
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc + (0, $bf01d1d1fdea4641$export$9aabccd6c029d20f).Virama),
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Svara, (0, $bf01d1d1fdea4641$export$9aabccd6c029d20f).InherentA), 
                        ])
                    });
                    break;
                }
                createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Invalid);
                break;
            case $da2f48c805d435e9$var$State.Vowel:
                if (char.isAccent()) {
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Svara, acc)
                        ])
                    });
                    break;
                }
                if (char.isYogavaha()) {
                    if (nextChar.isAccent()) break;
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Svara, acc)
                        ])
                    });
                    break;
                }
                break;
            case $da2f48c805d435e9$var$State.Consonant:
                if (char.isNukta()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isConsonantAttachment()) break;
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc + (0, $bf01d1d1fdea4641$export$9aabccd6c029d20f).Virama),
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Svara, (0, $bf01d1d1fdea4641$export$9aabccd6c029d20f).InherentA), 
                        ])
                    });
                    break;
                }
                if (char.isVirama()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isJoiner()) break;
                    if (nextChar.isConsonant()) {
                        varnas = varnas.concat([
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc), 
                        ]);
                        state = $da2f48c805d435e9$var$State.ConjunctConsonant;
                        break;
                    }
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc)
                        ])
                    });
                    break;
                }
                if (char.isJoiner()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isJoiner()) break;
                    if (nextChar.isConsonant()) {
                        varnas = varnas.concat([
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc), 
                        ]);
                        state = $da2f48c805d435e9$var$State.ConjunctConsonant;
                        break;
                    }
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc)
                        ])
                    });
                    break;
                }
                if (char.isVowelMarkAttachment()) {
                    svaraAcc = (svaraAcc || (0, $bf01d1d1fdea4641$export$9aabccd6c029d20f).InherentA) + char.value;
                    if (nextChar.isAccent()) break;
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc + (0, $bf01d1d1fdea4641$export$9aabccd6c029d20f).Virama),
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Svara, svaraAcc), 
                        ])
                    });
                    break;
                }
                if (char.isVowelMark()) {
                    svaraAcc = (0, $9ba0f9a5c47c04f2$export$a93666e9003b61ba)(char.value);
                    if (nextChar.isVowelMarkAttachment()) break;
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc + (0, $bf01d1d1fdea4641$export$9aabccd6c029d20f).Virama),
                            new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Svara, svaraAcc), 
                        ])
                    });
                    break;
                }
            case $da2f48c805d435e9$var$State.ConjunctConsonant:
                vyanjanaAcc = char.value;
                if (nextChar.isNukta() || nextChar.isConsonantAttachment()) {
                    state = $da2f48c805d435e9$var$State.Consonant;
                    break;
                }
                createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, {
                    varnas: varnas.concat([
                        new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc + (0, $bf01d1d1fdea4641$export$9aabccd6c029d20f).Virama),
                        new (0, $bf01d1d1fdea4641$export$9a9b914922c5814b)((0, $bf01d1d1fdea4641$export$43f5c03b889fb331).Svara, (0, $bf01d1d1fdea4641$export$9aabccd6c029d20f).InherentA), 
                    ])
                });
                break;
            default:
                break;
        }
    }
    return tokens;
};




const $882b6d93070905b3$var$analyse = (input)=>{
    const tokens = (0, $da2f48c805d435e9$export$660b2ee2d4fb4eff)(input);
    const aksharas = $9ba0f9a5c47c04f2$export$99699e6242229250(tokens, (0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara);
    const varnas = $9ba0f9a5c47c04f2$export$829ee63b3dace6ab(aksharas);
    const chars = input.split("");
    const symbols = $9ba0f9a5c47c04f2$export$99699e6242229250(tokens, (0, $3aefcdddac337967$export$f435f793048e7a0f).Symbol);
    const invalidChars = $9ba0f9a5c47c04f2$export$99699e6242229250(tokens, (0, $3aefcdddac337967$export$f435f793048e7a0f).Invalid);
    const whitespaces = $9ba0f9a5c47c04f2$export$99699e6242229250(tokens, (0, $3aefcdddac337967$export$f435f793048e7a0f).Whitespace);
    const unrecognisedChars = $9ba0f9a5c47c04f2$export$99699e6242229250(tokens, (0, $3aefcdddac337967$export$f435f793048e7a0f).Unrecognised);
    return {
        all: tokens,
        aksharas: aksharas,
        varnas: varnas,
        chars: chars,
        symbols: symbols,
        invalid: invalidChars,
        whitespaces: whitespaces,
        unrecognised: unrecognisedChars
    };
};
const $882b6d93070905b3$var$Aksharas = {
    analyse: $882b6d93070905b3$var$analyse,
    TokenType: $3aefcdddac337967$export$f435f793048e7a0f,
    VarnaType: $bf01d1d1fdea4641$export$43f5c03b889fb331
};
var $882b6d93070905b3$export$2e2bcd8739ae039 = $882b6d93070905b3$var$Aksharas;


//# sourceMappingURL=index.cjs.map
