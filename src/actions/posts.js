import * as api from '../api';
import * as constants from '../constants/actionType';

//ACTION CREATORS
export const getPost = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch ({type: constants.FETCH_ALL,payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPosts(post);
        dispatch ({type: constants.CREATE, payload: data});
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