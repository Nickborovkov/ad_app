import axios from "axios";

let instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY' : '2f2a8fa1-1dac-47a8-bfa4-98afb21306e0'
    }
})

export let usersAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
}

export let profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
}

export let followAPI = {
    followUser(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },
}

export let authAPI = {
    authUser() {
        return instance.get(`auth/me`)
    }
}