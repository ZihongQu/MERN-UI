import * as constants from '../constants/actionType';

const posts = (posts = [],action) => {
    switch(action.type){
        case constants.FETCH_ALL:
            return action.payload; 
        case constants.CREATE:
            return [...posts, action.payload];
        case constants.UPDATE:
            return posts.map((p) => (
                p._id === action.payload._id ? action.payload : p
            ))
        case constants.DELETE:
            return posts.filter((p) => (p._id !== action.payload))
        case constants.LIKE:
            return posts.map((p) => (p._id === action.payload._id ? action.payload : p));
        default:
            return posts; 
    } 
}
export default posts;