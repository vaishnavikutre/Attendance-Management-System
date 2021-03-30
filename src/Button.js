// import React from "react";
// import {Button} from '@material-ui/core';
// function Bottons(props){
//     return(
//         <div>
//             <center>
//            <Button 
//              variant="contained" 
//              color="primary"
//              disabled
//              >
//              {props.title}
             
//            </Button>
//            </center>
//         </div>
//     );


// }
// export default Bottons;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
    
      <Button variant="contained" color="secondary">
      {props.title}
      </Button>
      </div>
  );
}