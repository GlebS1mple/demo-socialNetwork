import { authAPI } from './../api/api';
import { stopSubmit } from "redux-form";

const SET_USER_AUTH = "auth/SET_USER_AUTH";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};


let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                ...action.data,
            }
        default: return state;
    }

}
export const setUserAuthAC = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_AUTH,
        data: { userId, email, login, isAuth }
    }
};

export const setUserAuth = () => async (dispatch) => {
    let data = await authAPI.setUserAuth();
    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setUserAuthAC(id, email, login, true));
    }
}

export const logins = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(setUserAuth());
    }
    else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
    }
}


export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUserAuthAC(null, null, null, false));
    }
}
export default authReducer;
