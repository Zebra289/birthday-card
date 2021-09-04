import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { CodeLetterProps } from '../models/ComponentProps';

export default function CodeLetter(props: CodeLetterProps): JSX.Element {
    const classes = useStyles();

    const letterGuessed = (guess: string) => {
        props.letterGuess(guess, props.letterPair.index);
    }

    const isError = () : boolean => {
        if (props.letterPair.guess)
            if (props.letterPair.guess.length > 1)
                return true;
            else
                return false;
        return false;
    }

    return (
        <TextField 
            variant="filled" 
            label={props.letterPair?.index} 
            value={props.letterPair.guess} 
            onChange={(e) => letterGuessed(e.target.value)}
            error={isError()}
            className={props.letterPair.found ? classes.found : ""}
        />
    );
}

const useStyles = makeStyles({
    found: {
        borderRadius: 5,
        //borderColor: 'green',
        border: '1px outset green',
    },
});