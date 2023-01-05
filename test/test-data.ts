import { TokenType, TokenAttributes } from "../src/token";
import { VarnaType } from "../src/varna";

type TestData = {
  input: string;
  desc?: string;
  expectedTokens: {
    type: TokenType;
    value: string;
    from: number;
    to: number;
    attributes?: TokenAttributes;
  }[];
}[];

export const testData: TestData = [
  // With invalid chars
  {
    input: "्त",
    expectedTokens: [
      {
        type: TokenType.Invalid,
        value: "्",
        from: 0,
        to: 0,
      },
      {
        type: TokenType.Akshara,
        value: "त",
        from: 1,
        to: 1,
        attributes: {
          varnas: [
            { value: "त्", type: VarnaType.Vyanjana },
            { value: "अ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
    ],
  },

  {
    input: "म्॑",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "म्",
        from: 0,
        to: 1,
        attributes: {
          varnas: [{ value: "म्", type: VarnaType.Vyanjana }],
          varnasLength: 1,
        },
      },
      {
        type: TokenType.Invalid,
        value: "॑",
        from: 2,
        to: 2,
      },
    ],
  },

  {
    input: "काा",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "का",
        from: 0,
        to: 1,
        attributes: {
          varnas: [
            { value: "क्", type: VarnaType.Vyanjana },
            { value: "आ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Invalid,
        value: "ा",
        from: 2,
        to: 2,
      },
    ],
  },

  {
    input: "१॒॑",
    expectedTokens: [
      {
        type: TokenType.Symbol,
        value: "१",
        from: 0,
        to: 0,
      },
      {
        type: TokenType.Invalid,
        value: "॑",
        from: 1,
        to: 1,
      },
      {
        type: TokenType.Invalid,
        value: "॒",
        from: 2,
        to: 2,
      },
    ],
  },

  // // Without any invalid chars
  {
    input: "ॐ",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "ॐ",
        from: 0,
        to: 0,
        attributes: {
          varnas: [
            { value: "ओ", type: VarnaType.Svara },
            { value: "म्", type: VarnaType.Vyanjana },
          ],
          varnasLength: 2,
        },
      },
    ],
  },
  {
    input: "अ॒",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "अ॒",
        from: 0,
        to: 1,
        attributes: {
          varnas: [{ value: "अ॒", type: VarnaType.Svara }],
          varnasLength: 1,
        },
      },
    ],
  },

  {
    input: "क्‍",
    desc: "consonant + virama + zwj",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "क्‍",
        from: 0,
        to: 2,
        attributes: {
          varnas: [{ value: "क्‍", type: VarnaType.Vyanjana }],
          varnasLength: 1,
        },
      },
    ],
  },

  {
    input: "क्‌ष्",
    desc: "consonant + virama + zwj + consonant + virama",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "क्‌ष्",
        from: 0,
        to: 4,
        attributes: {
          varnas: [
            { value: "क्‌", type: VarnaType.Vyanjana },
            { value: "ष्", type: VarnaType.Vyanjana },
          ],
          varnasLength: 2,
        },
      },
    ],
  },

  {
    input: "च॒॑",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "च॒॑",
        from: 0,
        to: 2,
        attributes: {
          varnas: [
            { value: "च्", type: VarnaType.Vyanjana },
            { value: "अ॒॑", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
    ],
  },

  {
    input: "वः॒॑",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "वः॒॑",
        from: 0,
        to: 3,
        attributes: {
          varnas: [
            { value: "व्", type: VarnaType.Vyanjana },
            { value: "अः॒॑", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
    ],
  },

  {
    input: "नु॒॑",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "नु॒॑",
        from: 0,
        to: 3,
        attributes: {
          varnas: [
            { value: "न्", type: VarnaType.Vyanjana },
            { value: "उ॒॑", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
    ],
  },

  {
    input: "ताः॒॑",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "ताः॒॑",
        from: 0,
        to: 4,
        attributes: {
          varnas: [
            { value: "त्", type: VarnaType.Vyanjana },
            { value: "आः॒॑", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
    ],
  },

  {
    input: "ज़्",
    desc: "extra consonant + virama",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "ज़्",
        from: 0,
        to: 1,
        attributes: {
          varnas: [{ value: "ज़्", type: VarnaType.Vyanjana }],
          varnasLength: 1,
        },
      },
    ],
  },

  {
    input: "ज़्",
    desc: "consonant + nukta + virama",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "ज़्",
        from: 0,
        to: 2,
        attributes: {
          varnas: [{ value: "ज़्", type: VarnaType.Vyanjana }],
          varnasLength: 1,
        },
      },
    ],
  },

  {
    input: "ड़ी",
    desc: "extra consonant + vowel mark",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "ड़ी",
        from: 0,
        to: 1,
        attributes: {
          varnas: [
            { value: "ड़्", type: VarnaType.Vyanjana },
            { value: "ई", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
    ],
  },

  {
    input: "ऩे",
    desc: "consonant + nukta + vowel mark",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "ऩे",
        from: 0,
        to: 2,
        attributes: {
          varnas: [
            { value: "ऩ्", type: VarnaType.Vyanjana },
            { value: "ए", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
    ],
  },

  {
    input: "रामः",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "रा",
        from: 0,
        to: 1,
        attributes: {
          varnas: [
            { value: "र्", type: VarnaType.Vyanjana },
            { value: "आ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "मः",
        from: 2,
        to: 3,
        attributes: {
          varnas: [
            { value: "म्", type: VarnaType.Vyanjana },
            { value: "अः", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
    ],
  },

  {
    input: "गुरुः",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "गु",
        from: 0,
        to: 1,
        attributes: {
          varnas: [
            { value: "ग्", type: VarnaType.Vyanjana },
            { value: "उ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "रुः",
        from: 2,
        to: 4,
        attributes: {
          varnas: [
            { value: "र्", type: VarnaType.Vyanjana },
            { value: "उः", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
    ],
  },

  {
    input: "सीता",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "सी",
        from: 0,
        to: 1,
        attributes: {
          varnas: [
            { value: "स्", type: VarnaType.Vyanjana },
            { value: "ई", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "ता",
        from: 2,
        to: 3,
        attributes: {
          varnas: [
            { value: "त्", type: VarnaType.Vyanjana },
            { value: "आ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
    ],
  },

  {
    input: "वर्णः",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "व",
        from: 0,
        to: 0,
        attributes: {
          varnas: [
            { value: "व्", type: VarnaType.Vyanjana },
            { value: "अ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "र्णः",
        from: 1,
        to: 4,
        attributes: {
          varnas: [
            { value: "र्", type: VarnaType.Vyanjana },
            { value: "ण्", type: VarnaType.Vyanjana },
            { value: "अः", type: VarnaType.Svara },
          ],
          varnasLength: 3,
        },
      },
    ],
  },

  {
    input: "ग्रामम्",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "ग्रा",
        from: 0,
        to: 3,
        attributes: {
          varnas: [
            { value: "ग्", type: VarnaType.Vyanjana },
            { value: "र्", type: VarnaType.Vyanjana },
            { value: "आ", type: VarnaType.Svara },
          ],
          varnasLength: 3,
        },
      },
      {
        type: TokenType.Akshara,
        value: "म",
        from: 4,
        to: 4,
        attributes: {
          varnas: [
            { value: "म्", type: VarnaType.Vyanjana },
            { value: "अ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "म्",
        from: 5,
        to: 6,
        attributes: {
          varnas: [{ value: "म्", type: VarnaType.Vyanjana }],
          varnasLength: 1,
        },
      },
    ],
  },

  {
    input: "रामान्",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "रा",
        from: 0,
        to: 1,
        attributes: {
          varnas: [
            { value: "र्", type: VarnaType.Vyanjana },
            { value: "आ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "मा",
        from: 2,
        to: 3,
        attributes: {
          varnas: [
            { value: "म्", type: VarnaType.Vyanjana },
            { value: "आ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "न्",
        from: 4,
        to: 5,
        attributes: {
          varnas: [{ value: "न्", type: VarnaType.Vyanjana }],
          varnasLength: 1,
        },
      },
    ],
  },

  {
    input: "तत्त्वम्",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "त",
        from: 0,
        to: 0,
        attributes: {
          varnas: [
            { value: "त्", type: VarnaType.Vyanjana },
            { value: "अ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "त्त्व",
        from: 1,
        to: 5,
        attributes: {
          varnas: [
            { value: "त्", type: VarnaType.Vyanjana },
            { value: "त्", type: VarnaType.Vyanjana },
            { value: "व्", type: VarnaType.Vyanjana },
            { value: "अ", type: VarnaType.Svara },
          ],
          varnasLength: 4,
        },
      },
      {
        type: TokenType.Akshara,
        value: "म्",
        from: 6,
        to: 7,
        attributes: {
          varnas: [{ value: "म्", type: VarnaType.Vyanjana }],
          varnasLength: 1,
        },
      },
    ],
  },

  {
    input: "ॐ भूर्भुवः स्वः।",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "ॐ",
        from: 0,
        to: 0,
        attributes: {
          varnas: [
            { value: "ओ", type: VarnaType.Svara },
            { value: "म्", type: VarnaType.Vyanjana },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Whitespace,
        value: " ",
        from: 1,
        to: 1,
      },
      {
        type: TokenType.Akshara,
        value: "भू",
        from: 2,
        to: 3,
        attributes: {
          varnas: [
            { value: "भ्", type: VarnaType.Vyanjana },
            { value: "ऊ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "र्भु",
        from: 4,
        to: 7,
        attributes: {
          varnas: [
            { value: "र्", type: VarnaType.Vyanjana },
            { value: "भ्", type: VarnaType.Vyanjana },
            { value: "उ", type: VarnaType.Svara },
          ],
          varnasLength: 3,
        },
      },
      {
        type: TokenType.Akshara,
        value: "वः",
        from: 8,
        to: 9,
        attributes: {
          varnas: [
            { value: "व्", type: VarnaType.Vyanjana },
            { value: "अः", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Whitespace,
        value: " ",
        from: 10,
        to: 10,
      },
      {
        type: TokenType.Akshara,
        value: "स्वः",
        from: 11,
        to: 14,
        attributes: {
          varnas: [
            { value: "स्", type: VarnaType.Vyanjana },
            { value: "व्", type: VarnaType.Vyanjana },
            { value: "अः", type: VarnaType.Svara },
          ],
          varnasLength: 3,
        },
      },
      {
        type: TokenType.Symbol,
        value: "।",
        from: 15,
        to: 15,
      },
    ],
  },

  {
    input: "मालान् आनयतु",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "मा",
        from: 0,
        to: 1,
        attributes: {
          varnas: [
            { value: "म्", type: VarnaType.Vyanjana },
            { value: "आ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "ला",
        from: 2,
        to: 3,
        attributes: {
          varnas: [
            { value: "ल्", type: VarnaType.Vyanjana },
            { value: "आ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "न्",
        from: 4,
        to: 5,
        attributes: {
          varnas: [{ value: "न्", type: VarnaType.Vyanjana }],
          varnasLength: 1,
        },
      },
      {
        type: TokenType.Whitespace,
        value: " ",
        from: 6,
        to: 6,
      },
      {
        type: TokenType.Akshara,
        value: "आ",
        from: 7,
        to: 7,
        attributes: {
          varnas: [{ value: "आ", type: VarnaType.Svara }],
          varnasLength: 1,
        },
      },
      {
        type: TokenType.Akshara,
        value: "न",
        from: 8,
        to: 8,
        attributes: {
          varnas: [
            { value: "न्", type: VarnaType.Vyanjana },
            { value: "अ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "य",
        from: 9,
        to: 9,
        attributes: {
          varnas: [
            { value: "य्", type: VarnaType.Vyanjana },
            { value: "अ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "तु",
        from: 10,
        to: 11,
        attributes: {
          varnas: [
            { value: "त्", type: VarnaType.Vyanjana },
            { value: "उ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
    ],
  },

  {
    input: "ग्रामादागतः",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "ग्रा",
        from: 0,
        to: 3,
        attributes: {
          varnas: [
            { value: "ग्", type: VarnaType.Vyanjana },
            { value: "र्", type: VarnaType.Vyanjana },
            { value: "आ", type: VarnaType.Svara },
          ],
          varnasLength: 3,
        },
      },
      {
        type: TokenType.Akshara,
        value: "मा",
        from: 4,
        to: 5,
        attributes: {
          varnas: [
            { value: "म्", type: VarnaType.Vyanjana },
            { value: "आ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "दा",
        from: 6,
        to: 7,
        attributes: {
          varnas: [
            { value: "द्", type: VarnaType.Vyanjana },
            { value: "आ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "ग",
        from: 8,
        to: 8,
        attributes: {
          varnas: [
            { value: "ग्", type: VarnaType.Vyanjana },
            { value: "अ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "तः",
        from: 9,
        to: 10,
        attributes: {
          varnas: [
            { value: "त्", type: VarnaType.Vyanjana },
            { value: "अः", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
    ],
  },

  {
    input: "चिन्तितवान् सः",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "चि",
        from: 0,
        to: 1,
        attributes: {
          varnas: [
            { value: "च्", type: VarnaType.Vyanjana },
            { value: "इ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "न्ति",
        from: 2,
        to: 5,
        attributes: {
          varnas: [
            { value: "न्", type: VarnaType.Vyanjana },
            { value: "त्", type: VarnaType.Vyanjana },
            { value: "इ", type: VarnaType.Svara },
          ],
          varnasLength: 3,
        },
      },
      {
        type: TokenType.Akshara,
        value: "त",
        from: 6,
        to: 6,
        attributes: {
          varnas: [
            { value: "त्", type: VarnaType.Vyanjana },
            { value: "अ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "वा",
        from: 7,
        to: 8,
        attributes: {
          varnas: [
            { value: "व्", type: VarnaType.Vyanjana },
            { value: "आ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "न्",
        from: 9,
        to: 10,
        attributes: {
          varnas: [{ value: "न्", type: VarnaType.Vyanjana }],
          varnasLength: 1,
        },
      },
      {
        type: TokenType.Whitespace,
        value: " ",
        from: 11,
        to: 11,
      },
      {
        type: TokenType.Akshara,
        value: "सः",
        from: 12,
        to: 13,
        attributes: {
          varnas: [
            { value: "स्", type: VarnaType.Vyanjana },
            { value: "अः", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
    ],
  },

  {
    input: "यदायुः॑",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "य",
        from: 0,
        to: 0,
        attributes: {
          varnas: [
            { value: "य्", type: VarnaType.Vyanjana },
            { value: "अ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "दा",
        from: 1,
        to: 2,
        attributes: {
          varnas: [
            { value: "द्", type: VarnaType.Vyanjana },
            { value: "आ", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
      {
        type: TokenType.Akshara,
        value: "युः॑",
        from: 3,
        to: 6,
        attributes: {
          varnas: [
            { value: "य्", type: VarnaType.Vyanjana },
            { value: "उः॑", type: VarnaType.Svara },
          ],
          varnasLength: 2,
        },
      },
    ],
  },

  {
    input: "अ॒प्स्व१॒॑न्तः",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "अ॒",
        from: 0,
        to: 1,
        attributes: {
          varnas: [{ value: "अ॒", type: VarnaType.Svara }],
          varnasLength: 1,
        },
      },
      {
        type: TokenType.Akshara,
        value: "प्स्व१॒॑",
        from: 2,
        to: 9,
        attributes: {
          varnas: [
            { value: "प्", type: VarnaType.Vyanjana },
            { value: "स्", type: VarnaType.Vyanjana },
            { value: "व्", type: VarnaType.Vyanjana },
            { value: "अ१॒॑", type: VarnaType.Svara },
          ],
          varnasLength: 4,
        },
      },
      {
        type: TokenType.Akshara,
        value: "न्तः",
        from: 10,
        to: 13,
        attributes: {
          varnas: [
            { value: "न्", type: VarnaType.Vyanjana },
            { value: "त्", type: VarnaType.Vyanjana },
            { value: "अः", type: VarnaType.Svara },
          ],
          varnasLength: 3,
        },
      },
    ],
  },
];
