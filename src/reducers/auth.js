import createReducer from './create_reducer';
import Const from '../config/const';

const getDefaultState = () => ({
    loggedIn: false,
    user: {
        id: "",
        username: "",
        phoneNumber: "",
        name: "",
        token: ""
    }
});

const authReducer = createReducer(getDefaultState(), {
    [Const.auth.authenticated]: (state, { user }) => ({
        ...state,
        loggedIn: true,
        user: user
    }),
    [Const.auth.loggedOut]: (state) => ({
        ...state,
        loggedIn: false,
        user: {
            id: "",
            username: "",
            phoneNumber: "",
            name: "",
            token: ""
        }
    })
});

export default authReducer;