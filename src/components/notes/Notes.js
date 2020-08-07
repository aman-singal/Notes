import React  , {useState,useEffect , useContext}from 'react'
import {Typography} from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import {StateContext} from '../main/Main'

function Notes() {

  
  const {value} = useContext(StateContext)
  const {currentID} = useContext(StateContext)
  const [data, setData] = value
  const [id, setID] = currentID
  const [state,setState] = useState({})

  useEffect(() => {
      if(id){
       let index =   data.findIndex(item => item.id === id)
       setState(data[index])
      }
  }, [id])


    return (
        <>
        {state.title === undefined ? 
            <div>
                No Notes too show!!!
            </div>
            :
            <div style={{textAlign: 'left'}}>
            <Typography style={{fontSize: '2rem'}}> {state.title}</Typography>
            <Divider style={{width: '100%'}} />
            <Typography style={{marginTop: '50px'}}> {state.notes} </Typography>
            </div>
            }
         </>   
    );
}

export default Notes
