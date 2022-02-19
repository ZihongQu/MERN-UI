import { Typography, Paper, Card, CircularProgress,Divider } from '@material-ui/core';
import {React, useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
import moment from 'moment';
import useStyles from './styles';
import {getPostById,getPostBySearch} from '../../actions/posts.js';

const PostDetail = () => {
  const {posts,postDetail,isLoading} = useSelector((state) => state.posts);
  const {id} = useParams();
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const [recommendedPosts, setRecommendedPosts] = useState([]);

  // Fetches post detail when this page loads
  useEffect(() => {
    dispatch(getPostById(id));
  },[id]);

  // Fetches other posts that have the same tages for recommended posts
  useEffect(() => {
    dispatch(getPostBySearch({search: 'none', tags: postDetail?.tags.join(',')}));
  },[postDetail])

  const openPost = (id) => {
    navigate(`/posts/${id}`);
  }

  // if it is still loading, show progress bar
  // otherwise postDetail is going to be null and error will occur in the return statements
  let recommendedPosts = []
  if(!isLoading && postDetail !== undefined){
    recommendedPosts = posts.filter((p) => p._id !== postDetail._id);
  }  

  return (
    <>
    {(isLoading || postDetail === undefined) ? (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    ) :
    (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
            <Typography variant='h3' component="h2">{postDetail.title}</Typography>
            <Divider style={{ margin: '20px 0' }} />
            <Typography variant='h6' gutterBottom color="textSecondary" component='h2'>{postDetail.tags.map((tag) => `#${tag} `)}</Typography>
            <Typography variant='body1' gutterBottom component='p'>{postDetail.message}</Typography>
            <Typography variant='h6'>Created by: {postDetail.creator}</Typography>
            <Typography variant='body3' color="textSecondary">Created at: {moment(postDetail.createdAt).format('YYYY-MM-DD')}</Typography>
            
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={postDetail.selectedFile} alt={postDetail.title} />
        </div>
      </div>
      {recommendedPosts.length > 0 && (
        <div className={classes.section}>
          <Typography variant='h5' >You might also like these</Typography>
          <Divider style={{ margin: '20px 0' }}></Divider>
          
            <div className={classes.recommendedPosts}>
              {recommendedPosts.map((p) => (
                <Card className={classes.cardLayout} raised elevation={3}>
                  <div style={{ margin: '20px', cursor: 'pointer'}} onClick={() => openPost(p._id)} key={p._id}>
                    <Typography gutterBottom variant="h6">{p.title}</Typography>
                    <Typography gutterBottom variant="subtitle1">{p.creator}</Typography>
                    <Typography gutterBottom variant="subtitle2">{p.message}</Typography>
                    <Typography gutterBottom variant="subtitle2" color="textSecondary">Likes: {p.likes.length}</Typography>
                    <img src={p.selectedFile} width="100%" />
                  </div>  
                </Card>
              ))}
            </div>
          
        </div>
      )} 
    </Paper>
    )
  }
  </>
  )
}

export default PostDetail
