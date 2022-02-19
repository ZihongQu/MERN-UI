import React, {useState, useEffect} from "react";
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import useStyles from './styles.js';
import { createPost, updatePost, setSelectedPost } from '../../actions/posts';

const Form = () =>{
    const classes = useStyles();
    const post = useSelector((state) => state.selectedPost);
    const [postData, setPostData] = useState({ title:'', message:'',tags:'',selectedFile:''});
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const navigate = useNavigate();

    useEffect(() => {
        if(post) setPostData(post);
    },[post])

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(post){
            dispatch(updatePost(post._id, {...postData, creator: user?.result.name}));
        }
        else{
            dispatch(createPost({...postData, creator: user?.result.name},navigate));
        }
        clear();
    }
    const clear = () =>{
        dispatch(setSelectedPost(null));
        setPostData({title:'', message:'',tags:'',selectedFile:''});
    }

    if(!user){ // if not signed in, display the following modal
        return (
            <Paper className = {classes.paper}>
                <Typography variant='h6' align='center'>
                    Please sign in to create your own memories!
                </Typography>
            </Paper>
        )
    }

    return (
        <Paper className = {classes.paper} elevation={4}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{post ? 'Edit your memory' : 'Create a memory!'}</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth onChange={(e) => setPostData({...postData, title:e.target.value})} value={postData.title}></TextField>
                <TextField name="message" variant="outlined" label="Message" fullWidth onChange={(e) => setPostData({...postData, message:e.target.value})} value={postData.message}></TextField>
                <TextField name="tag" variant="outlined" label="Tag" fullWidth onChange={(e) => setPostData({...postData, tags:e.target.value.split(',')})} value={postData.tags}></TextField>
                <div className={classes.fileInput}>
                    <FileBase 
                        id = 'input'
                        type = "file"
                        multiple = {false}
                        onDone ={({base64}) => setPostData({...postData,selectedFile:base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant = "contained" size = "large" type = "submit" fullWidth>SUBMIT</Button>
                <Button className={classes.buttonClear} variant = "contained" onClick = {clear} size = "large" fullWidth>CLEAR</Button>
            </form>
        </Paper>
    )
}

export default Form;