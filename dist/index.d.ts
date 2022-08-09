enum TokenType {
    Akshara = "akshara",
    Symbol = "symbol",
    Whitespace = "whitespace",
    Invalid = "invalid",
    Unrecognised = "unrecognised"
}
type TokenAttributes = Record<string, any>;
declare class Token {
    readonly type: TokenType;
    readonly value: string;
    readonly from: number;
    readonly to: number;
    readonly attributes?: TokenAttributes;
    constructor(type: TokenType, value: string, pos: number, attributes?: TokenAttributes);
}
declare const _default: {
    tokenize: (input: string) => Token[];
};
export default _default;

//# sourceMappingURL=index.d.ts.map
