import React from 'react';
import './App.css';
import Code from './components/Code';
import Message from './components/Message';
import { useCode } from './hooks/useCode';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export default function App() {
  const classes = useStyles();
  const { setUp, letters, message, letterGuess, checkGuesses } = useCode();

  React.useEffect(() => {
    setUp(); // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Box >
        <Message letters={message}/>
      </Box>
      <Box >
        <div className={classes.code}>
          <Divider />
          <Code letters={letters} letterGuess={letterGuess} checkGuesses={checkGuesses}/>
        </div>
      </Box>
    </div>
  );
}

const useStyles = makeStyles({
  code: {
    position: "absolute",
    bottom: "0",
    left: "0",
  },
  containter: {
    
  }
});