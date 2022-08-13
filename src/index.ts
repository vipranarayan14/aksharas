import { Token, TokenType } from "./token";
import { tokenize } from "./tokenize";

type Results = {
  all: Token[];
  aksharas: Token[];
  //   varnas: Token[] /* Yet to be implemented */;
  symbols: Token[];
  whitespaces: Token[];
  chars: string[];
  invalid: Token[];
  unrecognised: Token[];
  varnasLength: number /* Will be deprecated */;
};

const calcTotalVarnasLength = (tokens: Token[]) =>
  tokens.reduce(
    (total, akshara) =>
      akshara.attributes ? total + akshara.attributes.varnasLength : total,
    0
  );

const filterTokens = (tokens: Token[], tokenType: TokenType) =>
  tokens.filter((token) => token.type === tokenType);

const analyse = (input: string): Results => {
  const tokens = tokenize(input);

  const aksharas = filterTokens(tokens, TokenType.Akshara);

  //   const varnas = [];

  const chars = input.split("");

  const symbols = filterTokens(tokens, TokenType.Symbol);

  const invalidChars = filterTokens(tokens, TokenType.Invalid);

  const whitespaces = filterTokens(tokens, TokenType.Whitespace);

  const unrecognisedChars = filterTokens(tokens, TokenType.Unrecognised);

  const varnasLength = calcTotalVarnasLength(aksharas);

  return {
    all: tokens,
    aksharas: aksharas,
    // varnas: varnas,
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
};

export default Aksharas;
