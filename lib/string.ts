// This file is used to generated a unique string that contains 8 characters
// These characters are safe in URLs (ref: https://support.exactonline.com/community/s/knowledge-base#All-All-DNO-Content-urlcharacters)
// Author: Pham Duong Hoang Nam (allstarsmen@gmail.com)

// Alphanumeric [0-9a-zA-Z], special characters $-_.+!*'(),
const CHARS = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "$",
  "-",
  "_",
  ".",
  "+",
  "!",
  "*",
  "'",
  "(",
  ")",
];
// Limit the length of the unique string
const LIMIT_LENGTH = 8;

// return a random index
const randomIndex = (): number => Math.floor(Math.random() * CHARS.length);

// return a random character
const getRandomChar = () => CHARS[randomIndex()];

// return a unique string
const generateUniqueString = (): string => {
  let str = "";
  for (let i = 1; i <= LIMIT_LENGTH; i++) {
    str += getRandomChar();
  }
  return str;
};

export { generateUniqueString };
