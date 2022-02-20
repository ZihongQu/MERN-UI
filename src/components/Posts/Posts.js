import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Paper } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from './styles.js';

const Posts = () =>{ 
    const {posts, isLoading} = useSelector((state) => state.posts);
    //const posts = p.posts;
    const classes = useStyles();

    if(posts.length === 0 && !isLoading) 
        return (
            <Paper> "No Post Found";</Paper>
        );
    return (
        isLoading ? <CircularProgress></CircularProgress> : (
            <Grid className = {classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
                        <Post post={post}></Post>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;