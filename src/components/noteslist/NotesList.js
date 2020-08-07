import React , {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {StateContext} from '../main/Main'
import moment from 'moment'
import 'moment-timezone';
import ListItemText  from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

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

  const timeCalculator = (creationTime) =>{
    let currentTime  = moment(creationTime).fromNow()

    return currentTime
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
          {modifiedData.length >= 1 ? 
          
          modifiedData.map(item =>{
              return(
                <ListItem button key={item.id} onClick={() => clickHandler(item.id)} >
                <ListItemText disableTypography primary={<Typography type="heading2" style={{ color: 'black' , display: 'inline' }}>{item.title}</Typography>} secondary={<Typography style={{display: 'inline' , marginLeft: '50%'}}>{timeCalculator(item.time)}</Typography>} />
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
