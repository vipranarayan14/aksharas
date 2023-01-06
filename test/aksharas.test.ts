import { expect, describe, test } from "@jest/globals";

import Aksharas, { TokenType, VarnaType } from "../src";



const input = "ॐ भूर्भुवः स्वः।";

const all = [
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
    },
  },
  {
    type: TokenType.Symbol,
    value: "।",
    from: 15,
    to: 15,
  },
];

const aksharas = [
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
    },
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
    },
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
    },
  },
];

const varnas = [
  { value: "ओ", type: VarnaType.Svara },
  { value: "म्", type: VarnaType.Vyanjana },

  { value: "भ्", type: VarnaType.Vyanjana },
  { value: "ऊ", type: VarnaType.Svara },

  { value: "र्", type: VarnaType.Vyanjana },
  { value: "भ्", type: VarnaType.Vyanjana },
  { value: "उ", type: VarnaType.Svara },

  { value: "व्", type: VarnaType.Vyanjana },
  { value: "अः", type: VarnaType.Svara },

  { value: "स्", type: VarnaType.Vyanjana },
  { value: "व्", type: VarnaType.Vyanjana },
  { value: "अः", type: VarnaType.Svara },
];

const chars = [
  "ॐ",
  " ",
  "भ",
  "ू",
  "र",
  "्",
  "भ",
  "ु",
  "व",
  "ः",
  " ",
  "स",
  "्",
  "व",
  "ः",
  "।",
];

const symbols = [
  {
    type: TokenType.Symbol,
    value: "।",
    from: 15,
    to: 15,
  },
];

const invalid = [];

const whitespaces = [
  {
    type: TokenType.Whitespace,
    value: " ",
    from: 1,
    to: 1,
  },
  {
    type: TokenType.Whitespace,
    value: " ",
    from: 10,
    to: 10,
  },
];

const unrecognised = [];

describe("Aksharas#analyse", () => {
  const results = Aksharas.analyse(input);

  test("Results#all", () => {
    expect(results.all).toEqual(all);
  });

  test("Results#aksharas", () => {
    expect(results.aksharas).toEqual(aksharas);
  });

  test("Results#varnas", () => {
    expect(results.varnas).toEqual(varnas);
  });

  test("Results#chars", () => {
    expect(results.chars).toEqual(chars);
  });

  test("Results#symbols", () => {
    expect(results.symbols).toEqual(symbols);
  });

  test("Results#invalid", () => {
    expect(results.invalid).toEqual(invalid);
  });

  test("Results#whitespaces", () => {
    expect(results.whitespaces).toEqual(whitespaces);
  });

  test("Results#unrecognised", () => {
    expect(results.unrecognised).toEqual(unrecognised);
  });
});
