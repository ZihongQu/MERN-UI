import React, { useState, useEffect } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@material-ui/icons/Delete";
import moment from 'moment';
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import { deletePost, likePost, setSelectedPost } from "../../../actions/posts.js";
import useStyles from './styles.js';

const Post = ({post,setIsShowCreateModal}) =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const navigate = useNavigate();

    // checks if use already liked the post or not
    const alreadyLiked = post.likes.find((like) => like === (user?.result?._id)); 

    const handleLike = () => {
        dispatch(likePost(post._id));
    }

    const Likes = () => {
        if (post.likes.length > 0) {
        return alreadyLiked
            ? (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
            <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    const openPost = () => {
        navigate(`/posts/${post._id}`);
    }

    const handleEdit = () => {
        dispatch(setSelectedPost(post));
        setIsShowCreateModal(true);
    }

    return (
        <Card className={classes.card} square elevation={6}>
            <ButtonBase className={classes.cardAction} onClick={openPost}>
                <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia>
                <div className={classes.overlay}>
                    <Typography variant='h6'>{post.creator}</Typography>
                    <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
                </div>

                <div className={classes.details}>
                    <Typography variant='body2' color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
                <CardContent>
                    <Typography variant='body2' color="textSecondary" component='p'>{post.message.substring(0,300) + '...'}</Typography>
                </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size="small" className={classes.like} disabled={!user?.result} onClick={handleLike}>
                    <Likes />
                </Button>
                <Button size="small" className={classes.delete} disabled={post.creatorId != (user?.result?._id)} onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='small'></DeleteIcon>&nbsp;DELETE
                </Button>
                <Button size="small" className={classes.delete} disabled={post.creatorId != (user?.result?._id)} onClick={
                            handleEdit
                        }>
                            <EditIcon fontSize='small'></EditIcon>
                            Edit</Button>
            </CardActions>
        </Card>
    )
}

export default Post;