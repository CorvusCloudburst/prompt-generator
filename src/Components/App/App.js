import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Prompt from '../Prompt/Prompt';

const useStyles = makeStyles({
  paper: {
    padding:'20px',
    margin:'50px',
  },
});

const refreshPrompt = () => {};

export default function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className="App">
      <Paper variant='outlined' className={classes.paper}>
        <Typography variant="h4" component="h1">
          Find the vibe.
        </Typography>
        <Prompt/>
        <Button variant="outlined" color="primary" onClick={refreshPrompt()}>
          Primary Button
        </Button>
      </Paper>
    </Container>
  );
};