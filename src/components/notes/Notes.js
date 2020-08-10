import React  , {useState,useEffect , useContext}from 'react'
import {Typography} from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import {StateContext} from '../main/Main'
import { TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ls from 'local-storage'

const useStyles = makeStyles((theme) => ({
    textBox:{
        marginTop: '50px',
         width: '100%' ,
         maxWidth: '100%', 
         fontSize: '20px' ,
         border: 'none',

    }
    
  }))

function Notes() {

  const [notes,setNotes] = useState('')
  const {value} = useContext(StateContext)
  const {currentID} = useContext(StateContext)
  const [data, setData] = value
  const [id, setID] = currentID
  const [state,setState] = useState({})
  const classes = useStyles();
  

  useEffect(() => {
      if(id){
       let index =   data.findIndex(item => item.id === id)
       setState(data[index])
       setNotes(data[index].notes)
      }
      
  }, [id])

  useEffect(()=>{

    ls('data' , data)
    console.log(data)
  } , [notes])

  const handleChange = (e) =>{

      setNotes(e.target.value)
      var dateTime = new Date()
      let index =   data.findIndex(item => item.id === id)
      let rawData = {
          id: data[index].id,
          title: data[index].title,
          notes: e.target.value,
          time: dateTime,
      }
      let newData = data
      newData[index] = rawData
      setData(newData)
      
      
  } 

  

    return (
        <>
        {state.title === undefined ? 
            <div>
                No Notes too show!!!
            </div>
            :
            <div style={{textAlign: 'left'}}>
            <Typography style={{fontSize: '2.5rem'}}> {state.title}</Typography>
            <Divider style={{width: '100%'}} />
            <TextareaAutosize onChange={e => handleChange(e)} value={notes} className={classes.textBox} rowsMin={2} aria-label="empty textarea" placeholder="Empty" />
            </div>
            }
         </>   
    );
}

export default Notes
