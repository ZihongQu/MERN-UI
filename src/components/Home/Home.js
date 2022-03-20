import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button, IconButton } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {useNavigate, useLocation} from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ChipInput from 'material-ui-chip-input';

import { getPost, getPostBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import Pagination from '../Pagination/Pagination.js';
import useStyles from './styles.js';
import './styles.css';
import CreatePostModal from '../CreatePostModal/CreatePostModal.js';
import SearchIcon from '@mui/icons-material/Search';

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
    const [isShowCreateModal, setIsShowCreateModal] = useState(false);

    useEffect(() =>{
      dispatch(getPost(Number(page)));
    },[dispatch])

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){ // once user hits enter
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
            // dispatch => fetch posts
            dispatch(getPostBySearch({search, tags: tags.join(',')})); // turn tags array into string
            navigate(`/posts/search?searchQuery=${search||'none'}&tags=${tags}`);
        }
        else{
            navigate('/');
        }
    }

    const toggleCreateModal = () => {
        setIsShowCreateModal(prev => !prev);
    }

    return (
        <Grow in>
            <Container maxWidth='xl'>

                <div style={{display:'flex', alignItems: "baseline",justifyContent:'end',marginBottom:"3%",width:'100%'}}>
                    <div style={{width:'40%'}}>
                        <IconButton style={{margin:'2%',color:'#F0A500',width:'100%'}} variant='contained' onClick={toggleCreateModal}><AddCircleIcon fontSize='large'/>Create New</IconButton>
                    </div>
                    <div style={{width:'30%'}}>
                        <input 
                            style={{width: '100%'}}
                            className={classes.input}
                            name="search" 
                            placeholder='Hit ENTER to search for Movies posts!'
                            value={search}
                            onKeyPress={handleKeyPress}
                            onChange={(e) => {setSearch(e.target.value)}}/>
                    </div>
                </div>
        
            {isShowCreateModal && <CreatePostModal open={isShowCreateModal} setIsShowCreateModal={setIsShowCreateModal}></CreatePostModal>}
            <Grid container className={classes.mainContainer} spacing={3} justifyContent='space-between' alignItems="stretch" className={classes.gridContainer}>
              
                <Posts setIsShowCreateModal = {setIsShowCreateModal}></Posts>

            <Paper style={{width:'100%',margin:'3%'}}>
                <div style={{display:'flex', width:'100%', justifyContent:"center",backgroundColor:"black"}}>
                            {!searchQuery &&
                                <Pagination page={page} className={classes.pagination}></Pagination>
                            }
                </div>
            </Paper>
            </Grid>
            </Container>
        </Grow>
    )
}
export default Home;