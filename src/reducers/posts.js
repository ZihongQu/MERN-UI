import * as constants from '../constants/actionType';

const posts = (state = {isLoading: true, posts: []},action) => {
    switch(action.type){
        case constants.FETCH_ALL:
            return {
                ...state, 
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                totalPageNumber: action.payload.totalPageCount
            };
            
        case constants.FETCH_BY_SEARCH:
            return {
                ...state,
                posts: action.payload
            };

        case constants.CREATE:
            return {
                ...state, 
                posts: [...state.posts, action.payload]
            };

        case constants.UPDATE:
            return {
                ...state, 
                posts: state.posts.map((p) => (
                p._id === action.payload._id ? action.payload : p
            ))};
            
        case constants.DELETE:
            return {
                ...state,
                posts: state.posts.filter((p) => (p._id !== action.payload))
            };
        case constants.LIKE:
            return {
                ...state,
                posts: state.posts.map((p) => (p._id === action.payload._id ? action.payload : p))
            };
        case constants.START_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case constants.END_LOADING:
            return {
                ...state,
                isLoading: false
            };
        case constants.POST_DETAIL:
            return {
                ...state,
                postDetail: action.payload
            };
        case constants.ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map((p) => (p._id === action.payload._id ? action.payload : p))
            }
        default:
            return state; 
    } 
}
export default posts;