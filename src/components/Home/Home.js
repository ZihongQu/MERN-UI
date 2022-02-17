import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {useNavigate, useLocation} from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getPost, getPostBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import Pagination from '../Pagination/Pagination.js';
import useStyles from './styles.js';

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1; // gets the page param from url, if no page param is found, set to default 1
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    useEffect(() =>{
      dispatch(getPost(Number(page)));
    },[dispatch])

    const handleKeyPress = (e) => {
        if(e.keyCode === 13){ // once user hits enter
            // search post logic
            searchPost();
        }
    }

    const handleAdd = (tag) => {
        setTags([...tags, tag]);
    }

    const handleDelete = (tag) => {
        setTags(tags.filter(value => value !== tag));
    }

    const searchPost = () => {
        if(search || tags.length > 0){
            console.log(search)
            console.log(tags)
            // dispatch => fetch posts
            dispatch(getPostBySearch({search, tags: tags.join(',')})); // turn tags array into string
            navigate(`/posts/search?searchQuery=${search||'none'}&tags=${tags}`);
        }
        else{
            navigate('/');
        }
    }

    return (
        <Grow in>
            <Container maxWidth='xl'>
            <Grid container className={classes.mainContainer} spacing={3} justifyContent='space-between' alignItems="stretch" className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={9}>
                    <Posts></Posts>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <AppBar className={classes.appBarSearch} position='static' color='inherit'>
                        <TextField 
                            variant='outlined' 
                            name="search" 
                            label='Search Memories'
                            fullWidth 
                            value={search}
                            onKeyPress={handleKeyPress}
                            onChange={(e) => {setSearch(e.target.value)}}/>
                        
                        <ChipInput 
                            style={{margin: '10px 0'}}
                            value={tags}
                            onAdd={handleAdd}
                            onDelete={handleDelete}
                            label = 'Search Tags'
                            variant='outlined'/>
                        <Button onClick={searchPost} className={classes.searchButton} variant='contained' color='primary'>Search</Button>
                    </AppBar>
                    <Form>
                    </Form>
                    <Paper elevation={6}>
                        <Pagination page={page} className={classes.pagination}></Pagination>
                    </Paper>
                </Grid>
            </Grid>
            </Container>
        </Grow>
    )
}
export default Home;