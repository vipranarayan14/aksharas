import { expect, describe, test } from "@jest/globals";

import Aksharas from "../src";
import { TokenType } from "../src/token";
import { testData } from "./test-data";

describe("Aksharas#analyse", () => {
  test.each(testData)(
    "should produce the expected tokens for input: '$input' ($desc)",
    ({ input, expectedTokens }) => {
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
    }
  );
});
