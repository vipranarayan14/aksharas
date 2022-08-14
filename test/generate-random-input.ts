import { DEVA_CHAR_TYPES } from "../src/deva-char-types";

export const generateRandomInput = (length: number = 50): string => {
  const chars = Object.keys(DEVA_CHAR_TYPES);

  let randomInput = "";

  while (randomInput.length < length) {
    const randomInt = Math.floor(Math.random() * chars.length);
    randomInput += chars[randomInt];
  }

  return randomInput;
};
