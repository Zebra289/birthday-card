export interface LetterPair {
    letter: string;
    index?: number;
    found: boolean;
    guess?: string;
}

export interface CodePair {
    letter: string;
    index: number;
    found: boolean;
    guess?: string;
}