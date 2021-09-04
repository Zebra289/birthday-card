import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { MessageProps } from '../models/ComponentProps';
import MessageLetter from './MessageLetter';

export default function Message(props: MessageProps): JSX.Element {
    const classes = useStyles();
    
    const letterPairs = props.letters.map((l, i) => {
      return <MessageLetter key={l.guess+""+i} letterPair={l} />
    });

    return (
      <div className={classes.root}>
        {letterPairs}
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
        width: theme.spacing(8),
        height: theme.spacing(8),
      },
    },
  })
);
