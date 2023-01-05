import { Token, TokenType } from "./token";
import { Varna } from "./varna";

export const extractVarnas = (aksharas: Token[]): Varna[] =>
  aksharas.flatMap((akshara) => akshara.attributes?.varnas);

export const filterTokens = (tokens: Token[], tokenType: TokenType) =>
  tokens.filter((token) => token.type === tokenType);

export const getVowel = (vowelMark: string): string =>
  ({
    "ा": "आ",
    "ि": "इ",
    "ी": "ई",
    "ु": "उ",
    "ू": "ऊ",
    "ृ": "ऋ",
    "ॄ": "ॠ",
    "ॢ": "ऌ",
    "ॣ": "ॡ",
    "ॆ": "ऎ",
    "े": "ए",
    "ै": "ऐ",
    "ॊ": "ऒ",
    "ो": "ओ",
    "ौ": "औ",
    "ॅ": "ऍ",
    "ॉ": "ऑ",
  }[vowelMark] || "");
