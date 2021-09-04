import React from 'react';
import { CodePair, LetterPair } from '../models/LetterPair';
import { secret } from '../components/SecretMessage.json';

export function useCode() {
    const [letters, setLetters] = React.useState<CodePair[]>([]);
    const [message, setMessage] = React.useState<LetterPair[]>([]);

    const setUp = () => {
        var alphaNumbers = Array.from(Array(26)).map((e, i) => i + 65);
        shuffleArray(alphaNumbers);

        var letterPairs = alphaNumbers.map((x, i) => 
            { return {
                letter: String.fromCharCode(x),
                found: false,
                index: i + 1
            } as CodePair});
        setLetters(letterPairs);

        var newMessage = [] as LetterPair[];
        for (var a of secret) {
            // eslint-disable-next-line
            var match = letterPairs.find(l => l.letter === a.toUpperCase());
            var newIndex: number | undefined = undefined;
            if (match)
                newIndex = match.index;
            
            newMessage.push({
                letter: a,
                found: false,
                index: newIndex,
                guess: "_"
            } as LetterPair);
        }
        setMessage(newMessage);
    }

    const letterGuess = (guess: string, index: number) => {
        var newLetters = [...letters];
        newLetters[index-1].guess = guess.toUpperCase();
        setLetters(newLetters);
        
        if (guess === "") guess = "_";

        var newMessage = [...message];
        for (var m of newMessage)
            if (m.index === index)
                m.guess = guess.toUpperCase();
        setMessage(newMessage);
    }

    const checkGuesses = () => {
        var newLetters = [...letters];
        for (var l of newLetters)
            if (!l.found && l.guess?.toUpperCase() === l.letter)
                l.found = true;
        setLetters(newLetters);
    }

    const shuffleArray = (array: number[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    return {
        setUp, checkGuesses, letterGuess, letters, message
    }
}