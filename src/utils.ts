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