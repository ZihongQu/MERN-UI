import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, TextField, Button } from '@material-ui/core';
import useStyles from './styles';
import {addComment} from '../../actions/posts';

const CommentSection = ({postDetail}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const comments = postDetail.comments
    const [comment, setComment] = useState('');
    const user = JSON.parse(localStorage.getItem('profile'));

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleClick = () => {
        const commentString = `${user.result.name}: ${comment}`;

        dispatch(addComment({'comment':commentString}, postDetail._id));

        setComment('');
    }
    
    return (
        <div>
            <div className={classes.commentOuterContainer}>
                <div className={classes.commentInnerContainer}>
                    <Typography variant='h6' gutterBottom>Comments</Typography> 
                    {comments?.map((c,index) => (
                        <Typography variant='subtitle1' key={index} gutterBottom>
                            <strong>{c.split(': ')[0]} : </strong>
                            {c.split(':')[1]}
                        </Typography>
                    ))}
                </div>
                <div style={{width: '50%'}}>
                    {user?.result?.name ?
                    (
                        <>
                            <Typography variant='h6' gutterBottom>Write Comment</Typography>
                            <TextField fullWidth rows={4} multiline label='Comment' variant='outlined' value={comment} onChange={handleChange}></TextField>
                            <Button variant='contained' style={{marginTop: '10px'}} fullWidth disabled={comment.length === 0} onClick={handleClick}>Sumbit</Button>
                        </>
                    ) : ('Please log in first')}
                    </div>
            </div>
        </div>
    )
}

export default CommentSection
