# Aksharas

[![npm (scoped)](https://img.shields.io/npm/v/@vipran/aksharas)](https://www.npmjs.com/package/@vipran/aksharas) ![npm type definitions](https://img.shields.io/npm/types/@vipran/aksharas) ![NPM](https://img.shields.io/npm/l/@vipran/aksharas)

**Aksharas** is an utility for analysing *akṣaras* and *varṇas* in a Devanagari text.

## Installation

```sh
npm i @vipran/aksharas
```

## Usage

```js
import Aksharas from "@vipran/aksharas";

// OR for CommonJS:
// const Aksharas = require("@vipran/aksharas");

const input = "सर्वे भवन्तु सुखिनः।"

const results = Aksharas.analyse(input);

const aksharas = results.aksharas.map(akshara => akshara.value);

console.log(aksharas); 
// स, र्वे, भ, व, न्तु, सु, खि, नः

```

## API

### `Aksharas.analyse()`

```ts
const results: Results = Aksharas.analyse(input: string);
```

Accepts a `string` input and returns a [`Results`](#results) object.

### `Aksharas.TokenType`

It is an enum with the following values:

- `TokenType.Akshara`
- `TokenType.Symbol`
- `TokenType.Whitespace`
- `TokenType.Invalid`
- `TokenType.Unrecognised`

These can be used to filter the tokens in the [`Results`](#results) object.

### `Results`

The `Results` object contains the following properties:

- **all** 
    - type: `Token[]`
    - An array of [`Token`](#token) objects containing all the tokens analysed from `input` string. It includes Devanagari *akṣaras*, Devanagari symbols (१, २, ।, ॥, etc.) and non-devangari characters (i.e. characters in other scripts, special characters, whitespace characters, etc.) 
- **aksharas** 
    - type: `Token[]`
    - Devanagari syllables like रा, सी, etc. Here, *halanta* consonants such as क्, च्, य्, etc. are also considered as `aksharas` when they are at the end of a word.
- **symbols** 
    - type: `Token[]`
    - Devanagari symbols such as १, २, ।, ॥, etc. 
- **whitespaces** 
    - type: `Token[]`
    - All whitespace characters: `\s`, `\t`, `\n`, etc.
- **invalid** 
    - type: `Token[]`
    - All Devanagari characters whose occurance in the `input` string do not conform to the definition of an *akṣara*. For example, a *virāma* or a vowel mark which is not preceded by a consonant is invalid. ("अ्", "गोु", etc.) 
- **unrecognised** 
    - type: `Token[]`
    - Non-devangari characters (i.e. characters in other scripts and special characters such as @, #, etc.)
- **chars** 
    - type: `string[]`
    - All Unicode characters in the `input` string. Same as `String.prototype.split()`.
- **varnasLength** 
    - type: `number`
    - The total number of consonants and vowels in the `input`. *Note: This property maybe deprecated in the future.*

### `Token`

Many of the properties in the `Results` object consists of a array of `Token`-s. A `Token` object has the following properties:

- **type**
    - type: `TokenType`
    - Type of the token. One of the values of [`Aksharas.TokenType`](#aksharastokentype).
- **value**
    - type: `string`
    - Conatins an analysed part of the `input` string.
- **from**
    - type: `number`
    - From index - representing the start position of the token in the `input` string.
- **to**
    - type: `number`
    - To index - representing the end position of the token in the `input` string.
- **attributes**
    - type: `Record<string, any>`
    - An optional key-value object which may contain other attributes of the token. It is currently used only in the `Akshara` tokens for storing the number of varnas in that akshara.

## License

MIT © [Prasanna Venkatesh T S](https://github.com/vipranarayan14)