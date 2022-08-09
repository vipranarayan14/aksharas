export enum TokenType {
  Akshara = "akshara",
  Symbol = "symbol",
  Whitespace = "whitespace",
  Invalid = "invalid",
  Unrecognised = "unrecognised",
}

export type TokenAttributes = Record<string, any>;

export class Token {
  readonly type: TokenType;
  readonly value: string;
  readonly from: number;
  readonly to: number;
  readonly attributes?: TokenAttributes;

  constructor(
    type: TokenType,
    value: string,
    pos: number,
    attributes?: TokenAttributes
  ) {
    this.type = type;
    this.value = value;
    this.from = pos;
    this.to = pos + (value.length - 1);
    this.attributes = attributes;
  }

  //   Only for debugging
  //   toString = () => this.value;
}
