import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper } from '@material-ui/core';
import useStyles from './styles.js';
import {useDispatch} from 'react-redux';
import { getPost } from '../../actions/posts';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import Pagination from '../Pagination/Pagination.js';

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
  
    useEffect(() =>{
      dispatch(getPost());
    },[dispatch])

    return (
        <Grow in>
            <Container>
            <Grid container className={classes.mainContainer} spacing={3} justifyContent='space-between' alignItems="stretch">
                <Grid item xs={12} sm={7}>
                    <Posts></Posts>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form>
                    </Form>
                    <Paper elevation={6}>
                        <Pagination></Pagination>
                    </Paper>
                </Grid>
            </Grid>
            </Container>
        </Grow>
    )
}
export default Home;