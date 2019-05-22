import {
    loginApi,
    signupApi
} from './api';
import Const from '../config/const';

const authenticated = (user) => ({
    type: Const.auth.authenticated,
    user
})

const loggedOut = () => ({
    type: Const.auth.loggedOut,
    loggedIn: false,
    user: null
})

const loading = () => ({
    type: Const.auth.loading
})

export const login = (credentials) => (dispatch) => {
    dispatch(loading())
    return loginApi(credentials)
    .then((success) => {
        console.log(success);
        dispatch(authenticated({...success}));
    }).catch((error) => {
        console.log(error);
    });
}

export const signUp = (credentials) => (dispatch) => {
    dispatch(loading(credentials))
    return signupApi(credentials)
    .then((success) => {
        console.log(success);
        dispatch(authenticated({...success}));
    }).catch((error) => {
        console.log(error);
    });
}

export const logout = () => (dispatch) => {
    dispatch(loggedOut())
}