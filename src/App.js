import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import { getPost } from './actions/posts';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles.js';


function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getPost());
  },[dispatch])
  return (
    <Container maxWidth='lg'>
      <AppBar className = {classes.appBar} position='static' color='primary'>
        <Typography className = {classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className ={classes.image} src={memories} height={60}></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} spacing={3} justifyContent='space-between' alignItems="stretch">
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId = {setCurrentId}></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form 
                currentId = {currentId}
                setCurrentId = {setCurrentId}>
              </Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
