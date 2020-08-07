import React , {useContext, useRef} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import {StateContext} from '../main/Main'
import uniqid from 'uniqid'

export default function FormDialog() {

  const [open, setOpen] = React.useState(false);
  const {value} = useContext(StateContext)
  const [data, setData] = value
  const titleRef = useRef('')
  const notesRef = useRef("")

  const handleClickOpen = () => {
      console.log(data)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleAdd = () =>{
    if(titleRef.current.value !== '' && notesRef.current.value !== ''){
      var datetime = new Date()
    setData([...data , {
        id: uniqid(),
        title: titleRef.current.value,
        notes: notesRef.current.value,
        time: datetime,
    }])
    setOpen(false);
    }
    
  }

  return (
    <>
        <IconButton onClick={handleClickOpen}>
            <AddIcon fontSize="large" />
        </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Making notes are very important. One should definately make lotes of Notes
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            required
            inputRef={titleRef}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Note"
            type="text"
            fullWidth
            required
            inputRef={notesRef} 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
