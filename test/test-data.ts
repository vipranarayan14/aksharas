import { TokenType, TokenAttributes } from "../src/token";

type TestData = {
  input: string;
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
        attributes: { varnasLength: 2 },
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
        attributes: { varnasLength: 1 },
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
        attributes: { varnasLength: 2 },
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

  // Without any invalid chars
  {
    input: "अ॒",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "अ॒",
        from: 0,
        to: 1,
        attributes: { varnasLength: 1 },
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
        attributes: { varnasLength: 2 },
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
        attributes: { varnasLength: 2 },
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
        attributes: { varnasLength: 2 },
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
        attributes: { varnasLength: 2 },
      },
    ],
  },
  {
    input: "ॐ",
    expectedTokens: [
      {
        type: TokenType.Akshara,
        value: "ॐ",
        from: 0,
        to: 0,
        attributes: { varnasLength: 2 },
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
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "मः",
        from: 2,
        to: 3,
        attributes: { varnasLength: 2 },
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
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "रुः",
        from: 2,
        to: 4,
        attributes: { varnasLength: 2 },
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
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "ता",
        from: 2,
        to: 3,
        attributes: { varnasLength: 2 },
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
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "र्णः",
        from: 1,
        to: 4,
        attributes: { varnasLength: 3 },
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
        attributes: { varnasLength: 3 },
      },
      {
        type: TokenType.Akshara,
        value: "म",
        from: 4,
        to: 4,
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "म्",
        from: 5,
        to: 6,
        attributes: { varnasLength: 1 },
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
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "मा",
        from: 2,
        to: 3,
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "न्",
        from: 4,
        to: 5,
        attributes: { varnasLength: 1 },
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
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "त्त्व",
        from: 1,
        to: 5,
        attributes: { varnasLength: 4 },
      },
      {
        type: TokenType.Akshara,
        value: "म्",
        from: 6,
        to: 7,
        attributes: { varnasLength: 1 },
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
        attributes: { varnasLength: 2 },
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
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "र्भु",
        from: 4,
        to: 7,
        attributes: { varnasLength: 3 },
      },
      {
        type: TokenType.Akshara,
        value: "वः",
        from: 8,
        to: 9,
        attributes: { varnasLength: 2 },
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
        attributes: { varnasLength: 3 },
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
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "ला",
        from: 2,
        to: 3,
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "न्",
        from: 4,
        to: 5,
        attributes: { varnasLength: 1 },
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
        attributes: { varnasLength: 1 },
      },
      {
        type: TokenType.Akshara,
        value: "न",
        from: 8,
        to: 8,
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "य",
        from: 9,
        to: 9,
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "तु",
        from: 10,
        to: 11,
        attributes: { varnasLength: 2 },
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
        attributes: { varnasLength: 3 },
      },
      {
        type: TokenType.Akshara,
        value: "मा",
        from: 4,
        to: 5,
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "दा",
        from: 6,
        to: 7,
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "ग",
        from: 8,
        to: 8,
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "तः",
        from: 9,
        to: 10,
        attributes: { varnasLength: 2 },
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
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "न्ति",
        from: 2,
        to: 5,
        attributes: { varnasLength: 3 },
      },
      {
        type: TokenType.Akshara,
        value: "त",
        from: 6,
        to: 6,
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "वा",
        from: 7,
        to: 8,
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "न्",
        from: 9,
        to: 10,
        attributes: { varnasLength: 1 },
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
        attributes: { varnasLength: 2 },
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
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "दा",
        from: 1,
        to: 2,
        attributes: { varnasLength: 2 },
      },
      {
        type: TokenType.Akshara,
        value: "युः॑",
        from: 3,
        to: 6,
        attributes: { varnasLength: 2 },
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
        attributes: { varnasLength: 1 },
      },
      {
        type: TokenType.Akshara,
        value: "प्स्व१॒॑",
        from: 2,
        to: 9,
        attributes: { varnasLength: 4 },
      },
      {
        type: TokenType.Akshara,
        value: "न्तः",
        from: 10,
        to: 13,
        attributes: { varnasLength: 3 },
      },
    ],
  },
];
