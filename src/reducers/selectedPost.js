import * as constants from '../constants/actionType';

const selectedPost = (selectedPost = null,action) => {
    switch(action.type){
        case constants.EDIT:
            return action.payload; 
        default:
            return selectedPost; 
    }
}
export default selectedPost;