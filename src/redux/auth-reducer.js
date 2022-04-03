import { authAPI, securityAPI } from './../api/api';
import { stopSubmit } from "redux-form";

const SET_USER_AUTH = "auth/SET_USER_AUTH";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};


let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH:
        case GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        data: { captchaUrl }
    }
};

export const setUserAuth = () => async (dispatch) => {
    let data = await authAPI.setUserAuth();
    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setUserAuthAC(id, email, login, true));
    }
}

export const logins = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(setUserAuth());
    }
    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
    }
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUserAuthAC(null, null, null, false));
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export default authReducer;
