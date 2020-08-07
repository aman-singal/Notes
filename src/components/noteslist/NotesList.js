import React , {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {StateContext} from '../main/Main'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: '50px'
  },
}));


export default function SimpleList() {

  const {value} = useContext(StateContext)
  const {currentID} = useContext(StateContext)
  const [data, setData] = value
  const [id, setID] = currentID
  const {currentSearch} = useContext(StateContext)
  const [search,setSearch] = currentSearch
  const classes = useStyles();
  const clickHandler = (item) =>{
      setID(item)
  }
  var modifiedData = data.filter(item =>{
    if(!search){
      return item
    }else{
      return !item.title.toLowerCase().indexOf(search.toLowerCase())
    }
   
  })
  console.log(modifiedData)
  console.log(search)

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
          {modifiedData.length >= 1 ? 
          
          modifiedData.map(item =>{
              return(
                <ListItem button key={item.id} onClick={() => clickHandler(item.id)}>
                {item.title}
                </ListItem>
              )
              
          })
          :
          <div>
              NO DATA TO SHOW
          </div>
        }
      </List>
    </div>
  );
}
