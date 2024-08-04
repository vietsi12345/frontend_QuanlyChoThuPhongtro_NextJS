import axios from "axios"
import { actionTypes } from "./ActionType"
import { API_BASE_URL } from "@/config/Api"

export const getHomeById = (homeId) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/houses/${homeId}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_HOME_BY_ID,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_HOME_BY_ID,
                msg: 'Lỗi call api GET_HOME_BY_ID'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_HOME_BY_ID,
            data: null,
            msg: "Lỗi call api GET_HOME_BY_ID"
        })
    }
}


export const getRoomsByType = (homeId) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/houses/${homeId}/rooms-by-type`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_ROOMS_BY_TYPE,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_ROOMS_BY_TYPE,
                msg: 'Lỗi call api GET_ROOMS_BY_TYPE'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_ROOMS_BY_TYPE,
            data: null,
            msg: "Lỗi call api GET_ROOMS_BY_TYPE"
        })
    }
}

export const getAllCities = () => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/houses/cities`)
        console.log("call api 1")
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_ALL_CITIES,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_ALL_CITIES,
                msg: 'Lỗi call api GET_ALL_CITIES'
            })
        }

    } catch (error) {
        console.log("call api ")
        dispath({
            type: actionTypes.GET_ALL_CITIES,
            data: null,
            msg: "Lỗi call api GET_ALL_CITIES"
        })
    }
}

export const getAllHome = () => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/houses`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_ALL_HOME,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_ALL_HOME,
                msg: 'Lỗi call api GET_ALL_HOME'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_ALL_HOME,
            data: null,
            msg: "Lỗi call api GET_ALL_HOME"
        })
    }
}

export const getHomesByCity = (city) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/houses/houses-by-city?city=${city}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_HOME_BY_CITY,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_HOME_BY_CITY,
                msg: 'Lỗi call api GET_HOME_BY_CITY'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_HOME_BY_CITY,
            data: null,
            msg: "Lỗi call api GET_HOME_BY_CITY"
        })
    }
}

export const searchHomeByName = (search) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/houses/search?name=${search}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.SEARCH_BY_NAME,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.SEARCH_BY_NAME,
                msg: 'Lỗi call api SEARCH_BY_NAME'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.SEARCH_BY_NAME,
            data: null,
            msg: "Lỗi call api SEARCH_BY_NAME"
        })
    }
}

export const createHome = (data) => async (dispath) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/houses`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (response.status === 200) {
            alert("Thêm nhà trọ mới thành công !!")
            dispath({
                type: actionTypes.CREATE_HOME,
                data: response.data
            })
        }
        else {
            alert("Lỗi!!")
            dispath({
                type: actionTypes.CREATE_HOME,
                msg: 'Lỗi call api CREATE_HOME'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.CREATE_HOME,
            data: null,
            msg: "Lỗi call api CREATE_HOME"
        })
    }
}

export const deleteHome = (homeId) => async (dispath) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/houses/${homeId}`)
        if (response.status === 200) {
            alert(`Bạn đã xóa nhà có id là ${homeId} thành công!!`)
            dispath({
                type: actionTypes.DELETE_HOME,
                data: homeId
            })
        }
        else {
            dispath({
                type: actionTypes.DELETE_HOME,
                msg: 'Lỗi call api DELETE_HOME'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.DELETE_HOME,
            data: null,
            msg: "Lỗi call api DELETE_HOME"
        })
    }
}

export const updateHome = (data, houseId) => async (dispath) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/houses/${houseId}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (response.status === 200) {
            alert("Cập nhật nhà thành công!!")
            dispath({
                type: actionTypes.UPDATE_HOME,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.UPDATE_HOME,
                msg: 'Lỗi call api UPDATE_HOME'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.UPDATE_HOME,
            data: null,
            msg: "Lỗi call api UPDATE_HOME"
        })
    }
}