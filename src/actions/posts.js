import * as api from '../api';
import * as constants from '../constants/actionType';

//ACTION CREATORS
export const getPost = (page) => async (dispatch) => {
    try {
        // set isLoading to true
        dispatch ({type: constants.START_LOADING});
        const {data} = await api.fetchPosts(page);
        dispatch ({type: constants.FETCH_ALL,payload: data});
        // set isLoading to false after data is fetched
        dispatch ({type: constants.END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const getPostBySearch = (searchQuery) => async (dispatch) => {
    try {
        const {data} = await api.fetchPostsBySearch(searchQuery);
        dispatch({type: constants.FETCH_BY_SEARCH, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post, navigate) => async (dispatch) => {
    try {
        const {data} = await api.createPosts(post);
        dispatch ({type: constants.CREATE, payload: data});
        navigate(`/posts/${data._id}`);
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        dispatch({type: constants.UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: constants.DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id);
        dispatch({type: constants.LIKE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const setSelectedPost = (post) => {
    return {type: constants.EDIT, payload: post};
}

export const getPostById = (id) => async (dispatch) => {

    try {
        dispatch({type: constants.START_LOADING});
        const {data} = await api.getPostById(id);
        dispatch ({type: constants.POST_DETAIL, payload: data});
        dispatch ({type: constants.END_LOADING});
        
    } catch (error) {
        console.log(error);
    }
}