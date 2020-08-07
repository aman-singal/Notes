import React  , { useContext}  from 'react'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Dialog from '../dialog/Dialog'
import {StateContext} from '../main/Main'

function AddNotes() {
    const {currentSearch} = useContext(StateContext)
    const [search,setSearch] = currentSearch

    const changeHandler = (e) =>{
        setSearch(e.target.value)
    }

    return (
        <div>
            <TextField
            label="Search Notes"
            InputProps={{
                startAdornment: (
                <InputAdornment position="start" >
                    <IconButton>
                    <SearchIcon />
                    </IconButton>
                </InputAdornment>
                )
            }}
            style={{width: '85%'}}
            onChange={(e => changeHandler(e))}
            />
            <Dialog />            
        </div>
    )
}

export default AddNotes
