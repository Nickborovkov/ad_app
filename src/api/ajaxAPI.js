import axios from "axios";

let instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY' : '615f021e-7620-44af-ab57-d51cc287ef65'
    }
})

export let usersAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    }
}

export let profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`/profile/status` , {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append(`image`, photoFile)
        return instance.put(`profile/photo`,
            formData,
            {headers: {
                'Content-Type' : `multipart/form-data`
            }})
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
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
    },
    loginUser(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login` , {email, password, rememberMe, captcha})
    },
    logoutUser() {
        return instance.delete(`auth/login`)
    }
}

export let securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}