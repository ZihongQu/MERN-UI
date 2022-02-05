import * as constants from '../constants/actionType';

const authReducer = (state = {authData:null},action) => {
    switch (action.type) {
        case constants.AUTH:     
            localStorage.setItem('profile',JSON.stringify({...action?.payload}));      
            return { ...state, authData: action.payload, loading: false, errors: null };
        case constants.LOGOUT: 
            localStorage.clear();        
            return { ...state, authData: null, loading: false, errors: null };
        default:
            return state;
    }
}
export default authReducer;