import { combineReducers } from "redux";
import posts from './posts';
import selectedPost from './selectedPost';
import authReducer from "./auth";

export default combineReducers({
    posts,
    selectedPost,
    authReducer
})