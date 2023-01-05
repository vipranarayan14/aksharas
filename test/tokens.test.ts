import { expect, describe, test } from "@jest/globals";

import Aksharas from "../src";
import { TokenType } from "../src/token";
import * as testData from "./test-data";

const testFn = ({ input, expectedTokens }: testData.TestData) => {
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

describe("Tokens for Invalid chars", () => {
  test.each(testData.invalidChars)("$desc: '$input'", testFn);
});

describe("Tokens for Valid chars", () => {
  test.each(testData.validChars)("$desc: '$input'", testFn);
});

describe("Tokens for Simple words", () => {
  test.each(testData.simpleWords)("$desc: '$input'", testFn);
});

describe("Tokens for Complex words", () => {
  test.each(testData.complexWords)("$desc: '$input'", testFn);
});

describe("Tokens for Simple strings", () => {
  test.each(testData.simpleStrings)("$desc: '$input'", testFn);
});

describe("Tokens for Complex strings", () => {
  test.each(testData.complexStrings)("$desc: '$input'", testFn);
});
