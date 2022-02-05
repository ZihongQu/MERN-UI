import * as api from '../api';
import * as constants from '../constants/actionType';

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        //sign up logic
        const {data} = await api.signup(formData);
        dispatch({type:constants.AUTH, payload: data});
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        //sign in logic
        const {data} = await api.signin(formData);
        dispatch({type:constants.AUTH, payload: data});
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}