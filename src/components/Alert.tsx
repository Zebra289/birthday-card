import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AlertProps } from '../models/ComponentProps';

export default function Alert(props: AlertProps) {
  const handleClose = () => {
    props.setOpen(false);
  };

  const alertContent = () => {
    var correct = 0;
    for (var l of props.letters)
        if (l.found)
            correct++;

    if (correct === 26)
        return "Congratulations, you got them all! You smashed it :)";
    return "Nice work, you've got " + correct + " so far. Keep going and you'll get there :)";
  }

  return (
      <Dialog
        open={props.open}
        onClose={handleClose}
      >
        <DialogTitle>{"Great work!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {alertContent()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Back to the game
          </Button>
        </DialogActions>
      </Dialog>
  );
}
