export enum TokenType {
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
export enum VarnaType {
    Svara = "svara",
    Vyanjana = "vyanjana"
}
declare class Varna {
    readonly type: VarnaType;
    readonly value: string;
    constructor(type: VarnaType, value: string);
}
type Results = {
    all: Token[];
    aksharas: Token[];
    varnas: Varna[];
    symbols: Token[];
    whitespaces: Token[];
    chars: string[];
    invalid: Token[];
    unrecognised: Token[];
};
declare const Aksharas: {
    analyse: (input: string) => Results;
    TokenType: typeof TokenType;
    VarnaType: typeof VarnaType;
};
export default Aksharas;

//# sourceMappingURL=index.d.ts.map
