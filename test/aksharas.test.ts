import { expect, describe, test } from "@jest/globals";

import aksharas from "../src";
import { testData } from "./test-data";

describe("Aksharas#tokenize", () => {
  test.each(testData)(
    "should produce the expected tokens for input: '$input'",
    ({ input, expectedTokens }) => {
      const tokens = aksharas.tokenize(input);

      tokens.forEach((token, i) => {
        const expectedToken = expectedTokens[i];

        expect(token.type).toEqual(expectedToken.type);
        expect(token.value).toEqual(expectedToken.value);
        expect(token.from).toEqual(expectedToken.from);
        expect(token.to).toEqual(expectedToken.to);
        expect(token.attributes).toEqual(expectedToken.attributes);
      });
    }
  );
});
