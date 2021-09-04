import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

export default function HelpPopup() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.root}>
            Show help text
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>{"Thank you for playing our Retreat Game! So, here's how it works!"}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                The top half is a message for you to discover. Each number stands for a letter (for example, A might be 13 (or it might not!). Start adding letters to try out at the bottom of the screen. As you do so, they will appear in the message. When you're ready to double check your answers, click the "Check Guesses" button to see how many you've got right :) <br/><br/> Have fun! If you get stuck, here's a hint: The first letter is the same as the inital of our Capital City.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
                Got it!
            </Button>
            </DialogActions>
        </Dialog>
      </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: theme.spacing(24),
    },
  })
);
