import React from "react";
import *as axios from "axios"

let instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: { "API-KEY": "cd86c9dd-fda0-4cd3-a196-e0856004a0a3" }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageCount = 10) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageCount}`).then(response => { return response.data });
    },
    follow(userId = 2) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`).then(response => { return response.data });
    },
    unfollow(userId = 2) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`).then(response => { return response.data });
    },

};
export const mainAPI = {
    getUser(userId = 2) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => { return response.data });
    },
    getStatus(userId = 2) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`).then(response => { return response.data });
    },
    updateStatus(status) {
        return instance.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, { status: status });//.then(response => { return response.data });
    },
};

export const authAPI = {
    setUserAuth() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).then(response => { return response.data });
    },

    login(email, password, rememberMe, isAuth) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, { email, password, rememberMe, isAuth }).then(response => { return response.data });
    },
    logout() {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`).then(response => { return response.data });
    },

};





