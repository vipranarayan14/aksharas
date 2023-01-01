import { Char } from "./char";
import { Token, TokenAttributes, TokenType } from "./token";

enum State {
  Initial,
  Vowel,
  Consonant,
  ConjunctConsonant,
}

export const tokenize = (input: string): Token[] => {
  const tokens: Token[] = [];

  let pos = 0;
  let acc = "";
  let varnasLength: number = 0;
  let state = State.Initial;

  const resetVariables = () => {
    pos = 0;
    acc = "";
    varnasLength = 0;
    state = State.Initial;
  };

  const createToken = (tokenType: TokenType, attributes?: TokenAttributes) => {
    tokens.push(new Token(tokenType, acc, pos, attributes));
    resetVariables();
  };

  for (let i = 0, l = input.length; i < l; i += 1) {
    const char = new Char(input[i]);

    const nextChar = new Char(input[i + 1]);

    acc += char.value;

    switch (state) {
      case State.Initial: {
        pos = i;

        if (char.isOm()) {
          createToken(TokenType.Akshara, { varnasLength: 2 });
          break;
        }

        if (char.isSymbol()) {
          createToken(TokenType.Symbol);
          break;
        }

        if (char.isWhitespace()) {
          createToken(TokenType.Whitespace);
          break;
        }

        if (char.isUnrecognised()) {
          createToken(TokenType.Unrecognised);
          break;
        }

        if (char.isVowel()) {
          if (nextChar.isVowelAttachment()) {
            state = State.Vowel;
            break;
          }

          createToken(TokenType.Akshara, { varnasLength: 1 });
          break;
        }

        if (char.isConsonant()) {
          if (nextChar.isNukta() || nextChar.isConsonantAttachment()) {
            varnasLength += 1;
            state = State.Consonant;
            break;
          }

          createToken(TokenType.Akshara, { varnasLength: 2 });
          break;
        }

        createToken(TokenType.Invalid);
        break;
      }

      case State.Vowel: {
        if (char.isAccent()) {
          createToken(TokenType.Akshara, { varnasLength: 1 });
          break;
        }

        if (char.isYogavaha()) {
          if (nextChar.isAccent()) {
            break;
          }

          createToken(TokenType.Akshara, { varnasLength: 1 });
          break;
        }

        break;
      }

      case State.Consonant: {
        if (char.isNukta()) {
          if (nextChar.isConsonantAttachment()) {
            break;
          }

          createToken(TokenType.Akshara, { varnasLength: 2 });
          break;
        }

        if (char.isVirama()) {
          if (nextChar.isJoiner()) {
            break;
          }

          if (nextChar.isConsonant()) {
            state = State.ConjunctConsonant;
            break;
          }

          createToken(TokenType.Akshara, { varnasLength });
          break;
        }

        if (char.isJoiner()) {
          if (nextChar.isJoiner()) {
            break;
          }

          if (nextChar.isConsonant()) {
            state = State.ConjunctConsonant;
            break;
          }

          createToken(TokenType.Akshara, { varnasLength });
          break;
        }

        if (char.isVowelMarkAttachment()) {
          if (nextChar.isAccent()) {
            break;
          }

          varnasLength += 1;
          createToken(TokenType.Akshara, { varnasLength });
          break;
        }

        if (char.isVowelMark()) {
          if (nextChar.isVowelMarkAttachment()) {
            break;
          }

          varnasLength += 1;
          createToken(TokenType.Akshara, { varnasLength });
          break;
        }
      }

      case State.ConjunctConsonant: {
        if (nextChar.isNukta() || nextChar.isConsonantAttachment()) {
          varnasLength += 1;
          state = State.Consonant;
          break;
        }

        varnasLength += 2;
        createToken(TokenType.Akshara, { varnasLength });
        break;
      }

      default: {
        break;
      }
    }
  }

  return tokens;
};
