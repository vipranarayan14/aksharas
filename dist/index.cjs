function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $882b6d93070905b3$export$2e2bcd8739ae039);
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
const $823e42faaa542640$var$MATRAS = [
    "१",
    "२",
    "३"
];
class $823e42faaa542640$export$3ae2e3e9a9c21123 {
    constructor(value){
        this.value = value;
        this.type = this.getCharType(value);
    }
    getCharType = (char)=>{
        if (char === undefined) return $823e42faaa542640$var$CharType.EndOfInput;
        if (/\s/.test(char)) return $823e42faaa542640$var$CharType.Whitespace;
        return (0, $25e20db0144ee577$export$7963e2ffafd9d670)[char] ?? $823e42faaa542640$var$CharType.Unrecognised;
    };
    isVowel = ()=>this.type === $823e42faaa542640$var$CharType.Vowel;
    isConsonant = ()=>[
            $823e42faaa542640$var$CharType.Consonant,
            $823e42faaa542640$var$CharType.ExtraConsonant
        ].includes(this.type);
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
        this.from = pos - (value.length - 1);
        this.to = pos;
        this.attributes = attributes;
    }
}


let $882b6d93070905b3$var$State;
(function(State) {
    State[State["Initial"] = 0] = "Initial";
    State[State[// Symbol,
    "Vowel"] = 1] = "Vowel";
    State[State["Consonant"] = 2] = "Consonant";
    State[State["ConjunctConsonant"] = 3] = "ConjunctConsonant";
})($882b6d93070905b3$var$State || ($882b6d93070905b3$var$State = {}));
const $882b6d93070905b3$var$tokenize = (input)=>{
    const tokens = [];
    let acc = "";
    let varnasLength = 0;
    let state = $882b6d93070905b3$var$State.Initial;
    const resetVariables = ()=>{
        acc = "";
        varnasLength = 0;
        state = $882b6d93070905b3$var$State.Initial;
    };
    const createToken = (tokenType, value, pos, attributes)=>{
        tokens.push(new (0, $3aefcdddac337967$export$50792b0e93539fde)(tokenType, value, pos, attributes));
        resetVariables();
    };
    for(let pos = 0; pos < input.length; pos += 1){
        const char = new (0, $823e42faaa542640$export$3ae2e3e9a9c21123)(input[pos]);
        const nextChar = new (0, $823e42faaa542640$export$3ae2e3e9a9c21123)(input[pos + 1]);
        acc += char.value;
        switch(state){
            case $882b6d93070905b3$var$State.Initial:
                if (char.isSymbol()) {
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Symbol, acc, pos);
                    break;
                }
                if (char.isWhitespace()) {
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Whitespace, acc, pos);
                    break;
                }
                if (char.isUnrecognised()) {
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Unrecognised, acc, pos);
                    break;
                }
                if (char.isVowel()) {
                    if (nextChar.isVowelAttachment()) {
                        state = $882b6d93070905b3$var$State.Vowel;
                        break;
                    }
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, acc, pos, {
                        varnasLength: 1
                    });
                    break;
                }
                if (char.isConsonant()) {
                    if (nextChar.isNukta() || nextChar.isConsonantAttachment()) {
                        varnasLength += 1;
                        state = $882b6d93070905b3$var$State.Consonant;
                        break;
                    }
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, acc, pos, {
                        varnasLength: 2
                    });
                    break;
                }
                createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Invalid, acc, pos);
                break;
            case $882b6d93070905b3$var$State.Vowel:
                if (char.isAccent()) {
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, acc, pos, {
                        varnasLength: 1
                    });
                    break;
                }
                if (char.isYogavaha()) {
                    if (nextChar.isAccent()) break;
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, acc, pos, {
                        varnasLength: 1
                    });
                    break;
                }
                break;
            case $882b6d93070905b3$var$State.Consonant:
                if (char.isNukta()) {
                    if (nextChar.isConsonantAttachment()) break;
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, acc, pos, {
                        varnasLength: 2
                    });
                    break;
                }
                if (char.isVirama()) {
                    if (nextChar.isJoiner()) break;
                    if (nextChar.isConsonant()) {
                        state = $882b6d93070905b3$var$State.ConjunctConsonant;
                        break;
                    }
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, acc, pos, {
                        varnasLength: varnasLength
                    });
                    break;
                }
                if (char.isJoiner()) {
                    if (nextChar.isJoiner()) break;
                    if (nextChar.isConsonant()) {
                        state = $882b6d93070905b3$var$State.ConjunctConsonant;
                        break;
                    }
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, acc, pos, {
                        varnasLength: varnasLength
                    });
                    break;
                }
                if (char.isVowelMarkAttachment()) {
                    varnasLength += 1;
                    if (nextChar.isAccent()) break;
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, acc, pos, {
                        varnasLength: varnasLength
                    });
                    break;
                }
                if (char.isVowelMark()) {
                    if (nextChar.isVowelMarkAttachment()) break;
                    varnasLength += 1;
                    createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, acc, pos, {
                        varnasLength: varnasLength
                    });
                    break;
                }
            case $882b6d93070905b3$var$State.ConjunctConsonant:
                if (nextChar.isNukta() || nextChar.isConsonantAttachment()) {
                    varnasLength += 1;
                    state = $882b6d93070905b3$var$State.Consonant;
                    break;
                }
                varnasLength += 2;
                createToken((0, $3aefcdddac337967$export$f435f793048e7a0f).Akshara, acc, pos, {
                    varnasLength: varnasLength
                });
                break;
            default:
                break;
        }
    }
    return tokens;
};
var $882b6d93070905b3$export$2e2bcd8739ae039 = {
    tokenize: $882b6d93070905b3$var$tokenize
};


//# sourceMappingURL=index.cjs.map
