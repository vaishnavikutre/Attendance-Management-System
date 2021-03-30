import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
    
  },
  
}));


export default function InputWithIcon(props) {
  const classes = useStyles();

  return (
    <div style={{color:"red"}}>
        <center>
          <b>
        <TextField 
        className={classes.margin.color}
        id="input-with-icon-textfield"
        label={props.title}
        name={props.name}
        inputRef={props.refValue}
      />
      </b>
      </center>
    </div>
      
  );
}

         
         