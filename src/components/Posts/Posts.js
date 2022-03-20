import {React,useState} from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Paper, Box, Modal } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from './styles.js';
import { Alert } from "@mui/material";

const Posts = ({setIsShowCreateModal}) =>{ 
    const {posts, isLoading} = useSelector((state) => state.posts);
    //const posts = p.posts;
    const classes = useStyles();
    const [isShow,setIsShow] = useState(false);

    const handleClose = () => {
        setIsShow(false);
    }

    if(posts.length === 0 && !isLoading) {
        return (
            <Alert severity="error">No post found</Alert>
        );
    }
    return (
        isLoading ? <CircularProgress></CircularProgress> : (
            <Grid className = {classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={4} lg={4}>
                        <Post post={post} setIsShowCreateModal={setIsShowCreateModal}></Post>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;