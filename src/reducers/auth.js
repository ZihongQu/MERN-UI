import * as constants from '../constants/actionType';

const authReducer = (state = {authData:null},action) => {
    switch (action.type) {
        case constants.AUTH:     
            localStorage.setItem('profile',JSON.stringify({...action?.payload}));      
            return {...state, authData: action?.payload};
        case constants.LOGOUT: 
            localStorage.clear();        
            return {...state, authDate: null};
        default:
            return state;
    }
}
export default authReducer;