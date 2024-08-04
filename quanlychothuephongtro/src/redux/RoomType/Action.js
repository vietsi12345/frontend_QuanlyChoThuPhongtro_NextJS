import axios from "axios"
import { actionTypes } from "./ActionType"
import { API_BASE_URL } from "@/config/Api"

export const getAllRoomType = () => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/roomTypes`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_ALL_ROOMTYPE,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_ALL_ROOMTYPE,
                msg: 'Lỗi call api GET_ALL_ROOMTYPE'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_ALL_ROOMTYPE,
            data: null,
            msg: "Lỗi call api GET_ALL_ROOMTYPE"
        })
    }
}

export const createRoomType = (data) => async (dispath) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/roomTypes`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (response.status === 200) {
            alert("Thêm loại phòng mới thành công!!!")
            dispath({
                type: actionTypes.CREATE_ROOMTYPE,
                data: response.data
            })
        }
        else {
            alert("Lỗi !!")
            dispath({
                type: actionTypes.CREATE_ROOMTYPE,
                msg: 'Lỗi call api CREATE_ROOMTYPE'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.CREATE_ROOMTYPE,
            data: null,
            msg: "Lỗi call api CREATE_ROOMTYPE"
        })
    }
}

export const deleteRoomType = (roomTypeId) => async (dispath) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/roomTypes/${roomTypeId}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.DELETE_ROOMTYPE,
                data: roomTypeId
            })
        }
        else {
            dispath({
                type: actionTypes.DELETE_ROOMTYPE,
                msg: 'Lỗi call api DELETE_ROOMTYPE'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.DELETE_ROOMTYPE,
            data: null,
            msg: "Lỗi call api DELETE_ROOMTYPE"
        })
    }
}


export const updateRoomType = (data, roomTypeId) => async (dispath) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/roomTypes/${roomTypeId}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (response.status === 200) {
            dispath({
                type: actionTypes.UPDATE_ROOMTYPE,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.UPDATE_ROOMTYPE,
                msg: 'Lỗi call api UPDATE_ROOMTYPE'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.UPDATE_ROOMTYPE,
            data: null,
            msg: "Lỗi call api UPDATE_ROOMTYPE"
        })
    }
}