import { usersAPI } from './../api/api';
import { updateObjectInArray } from './../utils/objectHelper';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_USERS_FOLLOWING = "TOGGLE_USERS_FOLLOWING";


let initialState = {
    users: [
        /*{ id: 1, isFollowed: true, name: "Gleb", status: "ezgame ezlife", location: { city: "Brest", country: "Belarus" }, srcimg: "1.png" },
        { id: 2, isFollowed: true, name: "Ivan", status: "ezgame ezlife", location: { city: "Brest", country: "Belarus" }, srcimg: "2.png" },
        { id: 3, isFollowed: false, name: "Danik", status: "ezgame ezlife", location: { city: "Minsk", country: "Belarus" }, srcimg: "3.png" }
    */],
    totalCount: 0,
    pageCount: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false }),
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_USERS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id != action.userId)
            }
        default: return state;
    }

}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};

export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId,
    }
};
export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
};
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
};
export const toggleUsersFollowing = (isFetching, userId) => {
    return {
        type: TOGGLE_USERS_FOLLOWING,
        isFetching,
        userId
    }
};


export const getUsers = (currentPage, pageCount) => async (dispatch) => {
    dispatch(toggleUsersFollowing(true));
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageCount);
    dispatch(toggleUsersFollowing(false));
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount))
};

export const getUsersOnChange = (currentPage, pageCount) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleUsersFollowing(true));
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageCount);
    dispatch(toggleUsersFollowing(false));
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount))
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleUsersFollowing(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleUsersFollowing(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
};

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
};


export default usersReducer;
