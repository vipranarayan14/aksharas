import * as utils from "./utils";

import { tokenize } from "./tokenize";

import { Token, TokenType } from "./token";
import { Varna } from "./varna";

type Results = {
  all: Token[];
  aksharas: Token[];
  varnas: Varna[];
  symbols: Token[];
  whitespaces: Token[];
  chars: string[];
  invalid: Token[];
  unrecognised: Token[];
  varnasLength: number /* Will be deprecated */;
};

const analyse = (input: string): Results => {
  const tokens = tokenize(input);

  const aksharas = utils.filterTokens(tokens, TokenType.Akshara);

  const varnas = utils.extractVarnas(aksharas);

  const chars = input.split("");

  const symbols = utils.filterTokens(tokens, TokenType.Symbol);

  const invalidChars = utils.filterTokens(tokens, TokenType.Invalid);

  const whitespaces = utils.filterTokens(tokens, TokenType.Whitespace);

  const unrecognisedChars = utils.filterTokens(tokens, TokenType.Unrecognised);

  const varnasLength = utils.calcTotalVarnasLength(aksharas);

  return {
    all: tokens,
    aksharas: aksharas,
    varnas: varnas,
    chars: chars,
    symbols: symbols,
    invalid: invalidChars,
    whitespaces: whitespaces,
    unrecognised: unrecognisedChars,
    varnasLength: varnasLength,
  };
};

const Aksharas = {
  analyse,
  TokenType,
};

export default Aksharas;
