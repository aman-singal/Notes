import React, { useState } from 'react'
import Notes from '../notes/Notes'
import AddNotes from '../addNotes/AddNotes'
import NotesList from '../noteslist/NotesList'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const StateContext = React.createContext()

const Main =() => {

    const [state,setState] = useState([])
    const [id,setID] = useState('')
    const [search,setSearch] = useState("")

    const classes = useStyles();
    return (
    <StateContext.Provider value={{value: [state,setState],  currentID: [id,setID] , currentSearch: [search,setSearch]}}>
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={5}>
            <Paper className={classes.paper} elevation={4}>
                <AddNotes />
                <NotesList />
            </Paper>
            </Grid>
            <Grid item xs={7}>
            <Paper className={classes.paper} elevation={4}>
                <Notes />
            </Paper>
            </Grid>
        </Grid>
        </div>
    </StateContext.Provider>
    )
}


export {Main , StateContext};