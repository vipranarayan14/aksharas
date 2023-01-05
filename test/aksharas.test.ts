import { expect, describe, test } from "@jest/globals";

import Aksharas from "../src";
import { TokenType } from "../src/token";
import {
  complexStrings,
  complexWords,
  invalidChars,
  simpleStrings,
  simpleWords,
  TestData,
  validChars,
} from "./test-data";

const testFn = ({ input, expectedTokens }: TestData) => {
  const results = Aksharas.analyse(input);

  results.all.forEach((token, i) => {
    const expectedToken = expectedTokens[i];

    expect(token.type).toEqual(expectedToken.type);
    expect(token.value).toEqual(expectedToken.value);
    expect(token.from).toEqual(expectedToken.from);
    expect(token.to).toEqual(expectedToken.to);

    if (token.type === TokenType.Akshara) {
      expect(token.attributes?.varnas).toEqual(
        expectedToken.attributes?.varnas
      );
    }
  });
};

describe("Aksharas#analyse - Invalid chars", () => {
  test.each(invalidChars)("$desc: '$input'", testFn);
});

describe("Aksharas#analyse - Valid chars", () => {
  test.each(validChars)("$desc: '$input'", testFn);
});

describe("Aksharas#analyse - Simple words", () => {
  test.each(simpleWords)("$desc: '$input'", testFn);
});

describe("Aksharas#analyse - Complex words", () => {
  test.each(complexWords)("$desc: '$input'", testFn);
});

describe("Aksharas#analyse - Simple strings", () => {
  test.each(simpleStrings)("$desc: '$input'", testFn);
});

describe("Aksharas#analyse - Complex strings", () => {
  test.each(complexStrings)("$desc: '$input'", testFn);
});
