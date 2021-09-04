import React from 'react';
import Code from './components/Code';
import Message from './components/Message';
import { useCode } from './hooks/useCode';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

export default function App() {
  const classes = useStyles();
  const { setUp, letters, message, letterGuess, checkGuesses } = useCode();

  React.useEffect(() => {
    setUp(); // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Message letters={message}/>
    
      <div className={classes.code}>
        <Divider />
        <Code letters={letters} letterGuess={letterGuess} checkGuesses={checkGuesses}/>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    textAlign: "center"
  },
  code: {
    position: "absolute",
    bottom: "0",
    left: "0",
  },
});