import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

function DeepChild(props) {
  const classes = useStyles();

  return (
      <center>
    <button type="button" className={classes.root}>
      {props.submit}
    </button>
    </center>
  );
}

const themeInstance = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

export default function Theming(props) {
  return (
    <ThemeProvider theme={themeInstance}>
      <DeepChild />
    </ThemeProvider>
  );
}