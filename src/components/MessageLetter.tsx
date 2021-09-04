import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { MessageLetterProps } from '../models/ComponentProps';
import React from 'react';

export default function MessageLetter(props: MessageLetterProps): JSX.Element {
    const classes = useStyles();

    const showLetterOrBlank = () => {
        if (props.letterPair.index)
            return props.letterPair.guess;
        return props.letterPair?.letter;
    }

    const elevation = () => {
        if (props.letterPair.index)
            if (props.letterPair?.found)
                return 2;
            else
                return 8;
        return 0;
    }

    return (
        <Paper elevation={elevation()}>
            <div className={classes.number}>
                {props.letterPair.index ?? "."}
            </div>
            <strong className={classes.letter}>
                {showLetterOrBlank()}
            </strong>
        </Paper>
    );
}

const useStyles = makeStyles({
    number: {
        textAlign: 'right',
        padding: '2px'
    },
    letter: {
        textAlign: 'center',
        fontSize: '24px',
    }
});