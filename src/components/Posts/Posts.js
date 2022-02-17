import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from './styles.js';

const Posts = () =>{ 
    const p = useSelector((state) => state.posts);
    const posts = p.posts;
    const classes = useStyles();
    console.log(p)

    return (
        !posts?.length ? <CircularProgress></CircularProgress> : (
            <Grid className = {classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={4} xl={3}>
                        <Post post={post}></Post>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;