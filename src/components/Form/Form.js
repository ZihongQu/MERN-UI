import React, {useState} from "react";
import useStyles from './styles.js';
import FileBase from 'react-file-base64';
import { createPost } from '../../actions/posts';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import {useDispatch} from 'react-redux';

const Form = () =>{
    const classes = useStyles();
    const [postData, setPostData] = useState({creator:'', tilte:'', message:'',tags:'',selectedFile:''});
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createPost(postData));
    }
    const clear = () =>{

    }

    return (
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create a memory!</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth onChange={(e) => setPostData({...postData, creator:e.target.value})} value={postData.creator}></TextField>
                <TextField name="title" variant="outlined" label="Title" fullWidth onChange={(e) => setPostData({...postData, title:e.target.value})} value={postData.title}></TextField>
                <TextField name="message" variant="outlined" label="Message" fullWidth onChange={(e) => setPostData({...postData, message:e.target.value})} value={postData.message}></TextField>
                <TextField name="tag" variant="outlined" label="Tag" fullWidth onChange={(e) => setPostData({...postData, tags:e.target.value})} value={postData.tags}></TextField>
                <div className={classes.fileInput}>
                    <FileBase
                        type = "file"
                        multiple = {false}
                        onDone ={({base64}) => setPostData({...postData,selectedFile:base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant = "contained" color = "primary" size = "large" type = "submit" fullWidth>SUBMIT</Button>
                <Button variant = "contained" color = "secondary" onClick = {clear} size = "large" type = "submit" fullWidth>CLEAR</Button>
            </form>
        </Paper>
    )
}

export default Form;