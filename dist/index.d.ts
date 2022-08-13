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
type Results = {
    all: Token[];
    aksharas: Token[];
    symbols: Token[];
    whitespaces: Token[];
    chars: string[];
    invalid: Token[];
    unrecognised: Token[];
    varnasLength: number;
};
declare const Aksharas: {
    analyse: (input: string) => Results;
};
export default Aksharas;

//# sourceMappingURL=index.d.ts.map
