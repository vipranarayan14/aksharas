import { DEVA_CHAR_TYPES } from "./deva-char-types";

enum CharType {
  Vowel = "vowels",
  Symbol = "symbols",
  VowelMark = "vowel_marks",
  Yogavaha = "yogavaahas",
  Accent = "accents",
  Virama = "virama",
  Nukta = "nukta",
  ZWNJ = "zwnj",
  ZWJ = "zwj",
  Consonant = "consonants",
  ExtraConsonant = "extra_consonants",
  Whitespace = "whitespace",
  Unrecognised = "unrecognised",
  EndOfInput = "end_of_input",
}

const OM = "ॐ";
const MATRAS = ["१", "२", "३"];

export class Char {
  value: string;
  type: CharType;

  constructor(value: string) {
    this.value = value;
    this.type = this.#getCharType(value);
  }

  #getCharType = (char: string): CharType => {
    if (char === undefined) return CharType.EndOfInput;

    if (/\s/.test(char)) return CharType.Whitespace;

    return DEVA_CHAR_TYPES[char] ?? CharType.Unrecognised;
  };

  isVowel = () => this.type === CharType.Vowel;

  isConsonant = () =>
    [CharType.Consonant, CharType.ExtraConsonant].includes(this.type);

  isOm = () => this.value === OM;

  isSymbol = () => this.type === CharType.Symbol;

  isVowelMark = () => this.type === CharType.VowelMark;

  isYogavaha = () => this.type === CharType.Yogavaha;

  isAccent = () => this.type === CharType.Accent;

  isVirama = () => this.type === CharType.Virama;

  isNukta = () => this.type === CharType.Nukta;

  isMatra = () => MATRAS.includes(this.value);

  isJoiner = () => [CharType.ZWNJ, CharType.ZWJ].includes(this.type);

  isWhitespace = () => this.type === CharType.Whitespace;

  isUnrecognised = () => this.type === CharType.Unrecognised;

  isEndOfInput = () => this.type === CharType.EndOfInput;

  isVowelAttachment = () => this.isYogavaha() || this.isAccent();

  isConsonantAttachment = () =>
    this.isVirama() ||
    this.isYogavaha() ||
    this.isAccent() ||
    this.isVowelMark() ||
    this.isMatra();

  isVowelMarkAttachment = () =>
    this.isYogavaha() || this.isAccent() || this.isMatra();

  //   Only for debugging
  //   toString = () => this.value;
}
