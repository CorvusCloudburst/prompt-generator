import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  paper: {
    padding:'10px',
    margin:'20px',
  },
});

const randomPrompt = () => {
    const words = ['lonely', 'lonesome', 'peaceful', 'quiet'];
    const index = Math.floor(Math.random() * words.length);
    const word = words[index];
    return `Write about a moment that is ${word}.`;
};

export default function Prompt() {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.paper}>
        {randomPrompt()}
    </Paper>
  );
};