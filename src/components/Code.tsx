import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { CodeProps } from '../models/ComponentProps';
import CodeLetter from './CodeLetter';
import React from 'react';
import Alert from './Alert';
import HelpPopup from './HelpPopup';

export default function Code(props: CodeProps): JSX.Element {
    const classes = useStyles();
    const [alertOpen, setAlertOpen] = React.useState(false);
    
    const letterPairs = props.letters.map(l => {
      return <CodeLetter key={l.guess+""+l.letter} letterPair={l} letterGuess={props.letterGuess}/>
    });

    const checkGuesses = () => {
      props.checkGuesses();
      setAlertOpen(true);
    }

    return (
        <div>
          <div className={classes.root}>
            {letterPairs}
              
            <Button variant="contained" color="secondary" className={classes.button} onClick={checkGuesses}>
              Check Guesses
            </Button>
            <Alert open={alertOpen} setOpen={setAlertOpen} letters={props.letters}/>
            <HelpPopup />
          </div>
        </div>
        
    );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        height: theme.spacing(8),
        width: theme.spacing(8),
      },
    },
    button: {
        width: theme.spacing(16),
    },
  })
);
