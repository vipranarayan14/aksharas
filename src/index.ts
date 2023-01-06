import * as utils from "./utils";

import { tokenize } from "./tokenize";

import { Token, TokenType } from "./token";
import { Varna, VarnaType } from "./varna";

type Results = {
  all: Token[];
  aksharas: Token[];
  varnas: Varna[];
  symbols: Token[];
  whitespaces: Token[];
  chars: string[];
  invalid: Token[];
  unrecognised: Token[];
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

  return {
    all: tokens,
    aksharas: aksharas,
    varnas: varnas,
    chars: chars,
    symbols: symbols,
    invalid: invalidChars,
    whitespaces: whitespaces,
    unrecognised: unrecognisedChars,
  };
};

const Aksharas = {
  analyse,
  TokenType,
  VarnaType,
};

export default Aksharas;

export { TokenType, VarnaType };
