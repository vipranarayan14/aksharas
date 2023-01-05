const $fab42eb3dee39b5b$export$5197f37c648cbac3 = (tokens)=>tokens.reduce((total, akshara)=>akshara.attributes ? total + akshara.attributes.varnasLength : total, 0);
const $fab42eb3dee39b5b$export$829ee63b3dace6ab = (aksharas)=>aksharas.flatMap((akshara)=>akshara.attributes?.varnas);
const $fab42eb3dee39b5b$export$99699e6242229250 = (tokens, tokenType)=>tokens.filter((token)=>token.type === tokenType);
const $fab42eb3dee39b5b$export$a93666e9003b61ba = (vowelMark)=>({
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


const $dbcc9feb5155574f$export$7963e2ffafd9d670 = {
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


let $21fe2fa54792efd1$var$CharType;
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
})($21fe2fa54792efd1$var$CharType || ($21fe2fa54792efd1$var$CharType = {}));
const $21fe2fa54792efd1$var$OM = "ॐ";
const $21fe2fa54792efd1$var$MATRAS = [
    "१",
    "२",
    "३"
];
class $21fe2fa54792efd1$export$3ae2e3e9a9c21123 {
    constructor(value){
        this.value = value;
        this.type = this.#getCharType(value);
    }
    #getCharType = (char)=>{
        if (char === undefined) return $21fe2fa54792efd1$var$CharType.EndOfInput;
        if (/\s/.test(char)) return $21fe2fa54792efd1$var$CharType.Whitespace;
        return (0, $dbcc9feb5155574f$export$7963e2ffafd9d670)[char] ?? $21fe2fa54792efd1$var$CharType.Unrecognised;
    };
    isVowel = ()=>this.type === $21fe2fa54792efd1$var$CharType.Vowel;
    isConsonant = ()=>[
            $21fe2fa54792efd1$var$CharType.Consonant,
            $21fe2fa54792efd1$var$CharType.ExtraConsonant
        ].includes(this.type);
    isOm = ()=>this.value === $21fe2fa54792efd1$var$OM;
    isSymbol = ()=>this.type === $21fe2fa54792efd1$var$CharType.Symbol;
    isVowelMark = ()=>this.type === $21fe2fa54792efd1$var$CharType.VowelMark;
    isYogavaha = ()=>this.type === $21fe2fa54792efd1$var$CharType.Yogavaha;
    isAccent = ()=>this.type === $21fe2fa54792efd1$var$CharType.Accent;
    isVirama = ()=>this.type === $21fe2fa54792efd1$var$CharType.Virama;
    isNukta = ()=>this.type === $21fe2fa54792efd1$var$CharType.Nukta;
    isMatra = ()=>$21fe2fa54792efd1$var$MATRAS.includes(this.value);
    isJoiner = ()=>[
            $21fe2fa54792efd1$var$CharType.ZWNJ,
            $21fe2fa54792efd1$var$CharType.ZWJ
        ].includes(this.type);
    isWhitespace = ()=>this.type === $21fe2fa54792efd1$var$CharType.Whitespace;
    isUnrecognised = ()=>this.type === $21fe2fa54792efd1$var$CharType.Unrecognised;
    isEndOfInput = ()=>this.type === $21fe2fa54792efd1$var$CharType.EndOfInput;
    isVowelAttachment = ()=>this.isYogavaha() || this.isAccent();
    isConsonantAttachment = ()=>this.isVirama() || this.isYogavaha() || this.isAccent() || this.isVowelMark() || this.isMatra();
    isVowelMarkAttachment = ()=>this.isYogavaha() || this.isAccent() || this.isMatra();
}



let $66d137fe0087513e$export$f435f793048e7a0f;
(function(TokenType) {
    TokenType["Akshara"] = "akshara";
    TokenType["Symbol"] = "symbol";
    TokenType["Whitespace"] = "whitespace";
    TokenType["Invalid"] = "invalid";
    TokenType["Unrecognised"] = "unrecognised";
})($66d137fe0087513e$export$f435f793048e7a0f || ($66d137fe0087513e$export$f435f793048e7a0f = {}));
class $66d137fe0087513e$export$50792b0e93539fde {
    constructor(type, value, pos, attributes){
        this.type = type;
        this.value = value;
        this.from = pos;
        this.to = pos + (value.length - 1);
        this.attributes = attributes;
    }
}


let $1a6233e1cbefb8e5$export$43f5c03b889fb331;
(function(VarnaType) {
    VarnaType["Svara"] = "svara";
    VarnaType["Vyanjana"] = "vyanjana";
})($1a6233e1cbefb8e5$export$43f5c03b889fb331 || ($1a6233e1cbefb8e5$export$43f5c03b889fb331 = {}));
const $1a6233e1cbefb8e5$export$9aabccd6c029d20f = {
    Virama: "्",
    InherentA: "अ",
    Om: [
        "ओ",
        "म्"
    ]
};
class $1a6233e1cbefb8e5$export$9a9b914922c5814b {
    constructor(type, value){
        this.type = type;
        this.value = value;
    }
}


let $b4bfbd25bd11531b$var$State;
(function(State) {
    State[State["Initial"] = 0] = "Initial";
    State[State["Vowel"] = 1] = "Vowel";
    State[State["Consonant"] = 2] = "Consonant";
    State[State["ConjunctConsonant"] = 3] = "ConjunctConsonant";
})($b4bfbd25bd11531b$var$State || ($b4bfbd25bd11531b$var$State = {}));
const $b4bfbd25bd11531b$export$660b2ee2d4fb4eff = (input)=>{
    const tokens = [];
    let pos = 0;
    let acc = "";
    let varnasLength = 0;
    let svaraAcc = "";
    let vyanjanaAcc = "";
    let varnas = [];
    let state = $b4bfbd25bd11531b$var$State.Initial;
    const resetVariables = ()=>{
        pos = 0;
        acc = "";
        varnasLength = 0;
        svaraAcc = "";
        vyanjanaAcc = "";
        varnas = [];
        state = $b4bfbd25bd11531b$var$State.Initial;
    };
    const createToken = (tokenType, attributes)=>{
        tokens.push(new (0, $66d137fe0087513e$export$50792b0e93539fde)(tokenType, acc, pos, attributes));
        resetVariables();
    };
    for(let i = 0, l = input.length; i < l; i += 1){
        const char = new (0, $21fe2fa54792efd1$export$3ae2e3e9a9c21123)(input[i]);
        const nextChar = new (0, $21fe2fa54792efd1$export$3ae2e3e9a9c21123)(input[i + 1]);
        acc += char.value;
        switch(state){
            case $b4bfbd25bd11531b$var$State.Initial:
                pos = i;
                if (char.isOm()) {
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).Om[0]),
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).Om[1]), 
                        ]),
                        varnasLength: 2
                    });
                    break;
                }
                if (char.isSymbol()) {
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Symbol);
                    break;
                }
                if (char.isWhitespace()) {
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Whitespace);
                    break;
                }
                if (char.isUnrecognised()) {
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Unrecognised);
                    break;
                }
                if (char.isVowel()) {
                    if (nextChar.isVowelAttachment()) {
                        state = $b4bfbd25bd11531b$var$State.Vowel;
                        break;
                    }
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, acc)
                        ]),
                        varnasLength: 1
                    });
                    break;
                }
                if (char.isConsonant()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isNukta() || nextChar.isConsonantAttachment()) {
                        varnasLength += 1;
                        state = $b4bfbd25bd11531b$var$State.Consonant;
                        break;
                    }
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc + (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).Virama),
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).InherentA), 
                        ]),
                        varnasLength: 2
                    });
                    break;
                }
                createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Invalid);
                break;
            case $b4bfbd25bd11531b$var$State.Vowel:
                if (char.isAccent()) {
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, acc)
                        ]),
                        varnasLength: 1
                    });
                    break;
                }
                if (char.isYogavaha()) {
                    if (nextChar.isAccent()) break;
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, acc)
                        ]),
                        varnasLength: 1
                    });
                    break;
                }
                break;
            case $b4bfbd25bd11531b$var$State.Consonant:
                if (char.isNukta()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isConsonantAttachment()) break;
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc + (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).Virama),
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).InherentA), 
                        ]),
                        varnasLength: 2
                    });
                    break;
                }
                if (char.isVirama()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isJoiner()) break;
                    if (nextChar.isConsonant()) {
                        state = $b4bfbd25bd11531b$var$State.ConjunctConsonant;
                        varnas = varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc), 
                        ]);
                        break;
                    }
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc)
                        ]),
                        varnasLength: varnasLength
                    });
                    break;
                }
                if (char.isJoiner()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isJoiner()) break;
                    if (nextChar.isConsonant()) {
                        state = $b4bfbd25bd11531b$var$State.ConjunctConsonant;
                        varnas = varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc), 
                        ]);
                        break;
                    }
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc)
                        ]),
                        varnasLength: varnasLength
                    });
                    break;
                }
                if (char.isVowelMarkAttachment()) {
                    svaraAcc = (svaraAcc || (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).InherentA) + char.value;
                    if (nextChar.isAccent()) break;
                    varnasLength += 1;
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc + (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).Virama),
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, svaraAcc), 
                        ]),
                        varnasLength: varnasLength
                    });
                    break;
                }
                if (char.isVowelMark()) {
                    svaraAcc = (0, $fab42eb3dee39b5b$export$a93666e9003b61ba)(char.value);
                    if (nextChar.isVowelMarkAttachment()) break;
                    varnasLength += 1;
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc + (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).Virama),
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, svaraAcc), 
                        ]),
                        varnasLength: varnasLength
                    });
                    break;
                }
            case $b4bfbd25bd11531b$var$State.ConjunctConsonant:
                vyanjanaAcc = char.value;
                if (nextChar.isNukta() || nextChar.isConsonantAttachment()) {
                    varnasLength += 1;
                    state = $b4bfbd25bd11531b$var$State.Consonant;
                    break;
                }
                varnasLength += 2;
                createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                    varnas: varnas.concat([
                        new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc + (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).Virama),
                        new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).InherentA), 
                    ]),
                    varnasLength: varnasLength
                });
                break;
            default:
                break;
        }
    }
    return tokens;
};



const $149c1bd638913645$var$analyse = (input)=>{
    const tokens = (0, $b4bfbd25bd11531b$export$660b2ee2d4fb4eff)(input);
    const aksharas = $fab42eb3dee39b5b$export$99699e6242229250(tokens, (0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara);
    const varnas = $fab42eb3dee39b5b$export$829ee63b3dace6ab(aksharas);
    const chars = input.split("");
    const symbols = $fab42eb3dee39b5b$export$99699e6242229250(tokens, (0, $66d137fe0087513e$export$f435f793048e7a0f).Symbol);
    const invalidChars = $fab42eb3dee39b5b$export$99699e6242229250(tokens, (0, $66d137fe0087513e$export$f435f793048e7a0f).Invalid);
    const whitespaces = $fab42eb3dee39b5b$export$99699e6242229250(tokens, (0, $66d137fe0087513e$export$f435f793048e7a0f).Whitespace);
    const unrecognisedChars = $fab42eb3dee39b5b$export$99699e6242229250(tokens, (0, $66d137fe0087513e$export$f435f793048e7a0f).Unrecognised);
    const varnasLength = $fab42eb3dee39b5b$export$5197f37c648cbac3(aksharas);
    return {
        all: tokens,
        aksharas: aksharas,
        varnas: varnas,
        chars: chars,
        symbols: symbols,
        invalid: invalidChars,
        whitespaces: whitespaces,
        unrecognised: unrecognisedChars,
        varnasLength: varnasLength
    };
};
const $149c1bd638913645$var$Aksharas = {
    analyse: $149c1bd638913645$var$analyse,
    TokenType: $66d137fe0087513e$export$f435f793048e7a0f
};
var $149c1bd638913645$export$2e2bcd8739ae039 = $149c1bd638913645$var$Aksharas;


export {$149c1bd638913645$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.mjs.map
