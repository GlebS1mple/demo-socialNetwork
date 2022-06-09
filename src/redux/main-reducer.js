import { mainAPI } from './../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = "main/ADD_POST";
//const UPDATE_POST = "UPDATE-POST";
const SET_USER_PROFILE = "main/SET_USER_PROFILE";
const SET_STATUS = "main/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "main/SAVE_PHOTO_SUCCESS";


let initialState = {
    contacts: [
        { id: 1, name: "Cierra Vega", srcimg: "1.png" },
        { id: 2, name: "Alden Cantrell", srcimg: "2.png" },
        { id: 3, name: "Kierra Gentry", srcimg: "3.png" },
        { id: 4, name: "Bradyn Kramer", srcimg: "4.png" },
        { id: 5, name: "Thomas Crane", srcimg: "5.png" },
        { id: 6, name: "Miranda Shaffer", srcimg: "6.png" },
        { id: 7, name: "Pierre Cox", srcimg: "7.png" },
        { id: 8, name: "Alvaro Mcgee", srcimg: "8.png" },
    ],
    posts: [
        { id: 1, message: "Being a father is sometimes my hardest but always my most rewarding job. Happy Father’s Day to all dads out there. ", name: "Thomas Ben", lastseen: "45 mins ago", likes: 22, comments: 5, shares: 7, srcimg: "1.png" },
        { id: 2, message: "Having fun while cooking and eating variety of foods with @Sarah", name: "Miranda Shaffer", lastseen: "June 21, 12:45 pm", likes: 12, comments: 1, shares: 4, srcimg: "2.png" },
        { id: 3, message: "Hi, I am Ivan - professional footbal player", name: "Ivan Polk", lastseen: "5 mins ago", likes: 10, comments: 2, shares: 3, srcimg: "3.jpg" },
    ],
    newPostText: '',
    events: [
        { id: 1, name: "Pop Corn", text: "Start watching with friends and family.", what: "watching now", btn: "Watch Now", friends: "35 friends", srcimg: "1.png" },
        { id: 2, name: "Events", text: "Join events near you for free.", what: "going", btn: "Explore All", friends: "14 friends", srcimg: "2.png" },
    ],
    walls: [
        { name: "Pierre Cox", id: 1, srcimg: "1.png" },
        { name: "Bradyn Kramer", id: 2, srcimg: "2.png" },
        { name: "Kierra Gentry", id: 3, srcimg: "3.png" }
    ],
    who: [
        { id: 1, name: "Thomas Ben", srcimg: "1.png" },
        { id: 2, name: "Sarah Pierre", srcimg: "2.png" }
    ],
    profile: null,
    status: "",
    login: null
};

const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                likes: 0,
                shares: 0,
                comments: 0,
                srcimg: "2.png",
                name: "Gleb Gonchar",
                lastseen: "now",
                message: action.newPostText,
            };
            /*state.posts.push(newPost);
            state.newPostText = "";
            return state;*/
            return {
                ...state,
                posts: [...state.posts, newPost],
            }/*
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;*/
        }
        /*case UPDATE_POST: {
            return {
                ...state,
                newPostText: action.newText,
            }
            /*
            let stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy;
            state.newPostText = action.newText;
            return state;
        }*/
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,

            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,

            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos },

            }

        default:
            return state;
    }
};


export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
};
/*export const updatePostActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        newText: text,
    }
};*/
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
};
export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
};
export const getUserProfile = (userId) => async (dispatch) => {
    let data = await mainAPI.getUser(userId);
    dispatch(setUserProfile(data));
};
export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await mainAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
    catch (error) {
        alert(error.message)
    }
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await mainAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
export const saveMain = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await mainAPI.saveMain(profile);
    debugger
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("main-edit", { _error: message }));
        return Promise.reject(response.data.messages[0]);
    }

};
export const getStatus = (userId) => async (dispatch) => {
    let data = await mainAPI.getStatus(userId);
    dispatch(setStatus(data))
};

export default mainReducer;