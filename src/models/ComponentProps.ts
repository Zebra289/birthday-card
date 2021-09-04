import { CodePair, LetterPair } from "./LetterPair";

export interface MessageLetterProps {
    letterPair: LetterPair;
}

export interface MessageProps {
    letters: LetterPair[];
}

export interface CodeLetterProps {
    letterPair: CodePair;
    letterGuess: (guess: string, index: number) => void;
}

export interface CodeProps {
    letters: CodePair[];
    letterGuess: (guess: string, index: number) => void;
    checkGuesses: () => void;
}

export interface AlertProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    letters: CodePair[];
}