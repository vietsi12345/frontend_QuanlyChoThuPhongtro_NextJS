import { API_BASE_URL } from "@/config/Api"
import axios from "axios"
import { actionTypes } from "./ActionType"

export const getUserByJwt = (jwt) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_USER_BY_JWT,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_USER_BY_JWT,
                msg: 'Lỗi call api GET_USER_BY_JWT'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_USER_BY_JWT,
            data: null,
            msg: "Lỗi call api GET_USER_BY_JWT"
        })
    }
}

export const getAllUser = (jwt) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/users`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_ALL_USER,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_ALL_USER,
                msg: 'Lỗi call api GET_ALL_USER'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_ALL_USER,
            data: null,
            msg: "Lỗi call api GET_ALL_USER"
        })
    }
}

export const getUserById = (jwt, userId) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_USER_BY_ID,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_USER_BY_ID,
                msg: 'Lỗi call api GET_USER_BY_ID'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_USER_BY_ID,
            data: null,
            msg: "Lỗi call api GET_USER_BY_ID"
        })
    }
}

export const signIn = ({ data, router }) => async (dispath) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            localStorage.setItem("jwt", response.data?.jwt)
            dispath({
                type: actionTypes.SIGN_IN,
                data: response.data
            })
            if (response.data.role === "ROLE_CUSTOMER") {
                router.push('/')
            }
            else {
                router.push('/admin/customers')
            }
        } else if (response.status === 226) {
            alert(response.data)
            dispath({
                type: actionTypes.SIGN_IN,
                msg: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.SIGN_IN,
                msg: 'Lỗi call api SIGN_IN'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.SIGN_IN,
            data: null,
            msg: "Lỗi call api SIGN_IN"
        })
    }
}

export const updatPassword = (jwt, data) => async (dispath) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/users`, data, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        if (response.status === 200) {
            alert("Đổi mật khẩu thành công!!")
            dispath({
                type: actionTypes.UPDATE_PASSWORD,
                data: response.data
            })
        } else if (response.status === 226) {
            alert(response.data)
            dispath({
                type: actionTypes.UPDATE_PASSWORD,
                msg: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.UPDATE_PASSWORD,
                msg: 'Lỗi call api UPDATE_PASSWORD'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.SIGN_IN,
            data: null,
            msg: "Lỗi call api SIGN_IN"
        })
    }
}

export const signUp = ({ data, router }) => async (dispath) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            localStorage.setItem("jwt", response.data.jwt)
            dispath({
                type: actionTypes.SIGN_UP,
                data: response.data
            })
            if (response.data.role === "ROLE_CUSTOMER") {
                router.push('/')
            }
            else {
                router.push('/admin')
            }
        } else if (response.status === 226) {
            alert(response.data)
            dispath({
                type: actionTypes.SIGN_UP,
                msg: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.SIGN_UP,
                msg: 'Lỗi call api SIGN_UP'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.SIGN_UP,
            data: null,
            msg: "Lỗi call api SIGN_UP"
        })
    }
}

export const logOut = () => async (dispatch) => {
    try {
        localStorage.clear()

        dispatch({ type: actionTypes.LOG_OUT })
        console.log('logout success')

    } catch (error) {
        console.log("lỗi đăng xuất: ", error)
    }
};