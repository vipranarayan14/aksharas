import { Char } from "./char";
import { getVowel } from "./utils";
import { Token, TokenAttributes, TokenType } from "./token";
import { Varna, VarnaType, VARNAS } from "./varna";

enum State {
  Initial,
  Vowel,
  Consonant,
  ConjunctConsonant,
}

export const tokenize = (input: string): Token[] => {
  const tokens: Token[] = [];

  let pos: number = 0;
  let acc: string = "";
  let varnasLength: number = 0;
  let svaraAcc: string = "";
  let vyanjanaAcc: string = "";
  let varnas: Varna[] = [];
  let state = State.Initial;

  const resetVariables = () => {
    pos = 0;
    acc = "";
    varnasLength = 0;
    svaraAcc = "";
    vyanjanaAcc = "";
    varnas = [];
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
          createToken(TokenType.Akshara, {
            varnas: [
              new Varna(VarnaType.Svara, VARNAS.Om[0]),
              new Varna(VarnaType.Vyanjana, VARNAS.Om[1]),
            ],
            varnasLength: 2,
          });
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

          createToken(TokenType.Akshara, {
            varnas: [new Varna(VarnaType.Svara, acc)],
            varnasLength: 1,
          });
          break;
        }

        if (char.isConsonant()) {
          vyanjanaAcc += char.value;

          if (nextChar.isNukta() || nextChar.isConsonantAttachment()) {
            varnasLength += 1;
            state = State.Consonant;
            break;
          }

          createToken(TokenType.Akshara, {
            varnas: [
              new Varna(VarnaType.Vyanjana, vyanjanaAcc + VARNAS.Virama),
              new Varna(VarnaType.Svara, VARNAS.InherentA),
            ],
            varnasLength: 2,
          });
          break;
        }

        createToken(TokenType.Invalid);
        break;
      }

      case State.Vowel: {
        if (char.isAccent()) {
          createToken(TokenType.Akshara, {
            varnas: [new Varna(VarnaType.Svara, acc)],
            varnasLength: 1,
          });
          break;
        }

        if (char.isYogavaha()) {
          if (nextChar.isAccent()) {
            break;
          }

          createToken(TokenType.Akshara, {
            varnas: [new Varna(VarnaType.Svara, acc)],
            varnasLength: 1,
          });
          break;
        }

        break;
      }

      case State.Consonant: {
        if (char.isNukta()) {
          vyanjanaAcc += char.value;

          if (nextChar.isConsonantAttachment()) {
            break;
          }

          createToken(TokenType.Akshara, {
            varnas: [
              new Varna(VarnaType.Vyanjana, vyanjanaAcc + VARNAS.Virama),
              new Varna(VarnaType.Svara, VARNAS.InherentA),
            ],
            varnasLength: 2,
          });
          break;
        }

        if (char.isVirama()) {
          if (nextChar.isJoiner()) {
            break;
          }

          if (nextChar.isConsonant()) {
            state = State.ConjunctConsonant;

            varnas = varnas.concat([
              new Varna(VarnaType.Vyanjana, vyanjanaAcc + VARNAS.Virama),
            ]);

            break;
          }

          createToken(TokenType.Akshara, {
            varnas: [new Varna(VarnaType.Vyanjana, acc)],
            varnasLength,
          });
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

          createToken(TokenType.Akshara, {
            varnas: [new Varna(VarnaType.Vyanjana, acc + VARNAS.Virama)],
            varnasLength,
          });
          break;
        }

        if (char.isVowelMarkAttachment()) {
          svaraAcc = (svaraAcc || VARNAS.InherentA) + char.value;

          if (nextChar.isAccent()) {
            break;
          }

          varnasLength += 1;

          createToken(TokenType.Akshara, {
            varnas: varnas.concat([
              new Varna(VarnaType.Vyanjana, vyanjanaAcc + VARNAS.Virama),
              new Varna(VarnaType.Svara, svaraAcc),
            ]),
            varnasLength,
          });
          break;
        }

        if (char.isVowelMark()) {
          svaraAcc = getVowel(char.value);

          if (nextChar.isVowelMarkAttachment()) {
            break;
          }

          varnasLength += 1;
          createToken(TokenType.Akshara, {
            varnas: varnas.concat([
              new Varna(VarnaType.Vyanjana, vyanjanaAcc + VARNAS.Virama),
              new Varna(VarnaType.Svara, svaraAcc),
            ]),
            varnasLength,
          });
          break;
        }
      }

      case State.ConjunctConsonant: {
        vyanjanaAcc = char.value;

        if (nextChar.isNukta() || nextChar.isConsonantAttachment()) {
          varnasLength += 1;
          state = State.Consonant;
          break;
        }

        varnasLength += 2;
        createToken(TokenType.Akshara, {
          varnas: varnas.concat([
            new Varna(VarnaType.Vyanjana, vyanjanaAcc + VARNAS.Virama),
            new Varna(VarnaType.Svara, VARNAS.InherentA),
          ]),
          varnasLength,
        });
        break;
      }

      default: {
        break;
      }
    }
  }

  return tokens;
};
