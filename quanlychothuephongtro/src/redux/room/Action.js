import axios from "axios"
import { actionTypes } from "./ActionType"
import { API_BASE_URL } from "@/config/Api"

export const getRoomById = (roomId) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/rooms/${roomId}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_ROOM_BY_ID,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_ROOM_BY_ID,
                msg: 'Lỗi call api GET_ROOM_BY_ID'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_ROOM_BY_ID,
            data: null,
            msg: "Lỗi call api GET_ROOM_BY_ID"
        })
    }
}

export const getRoomsByIdHouse = (houseId) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/rooms/by-house/${houseId}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_ROOMS_BY_IDHOUSE,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_ROOMS_BY_IDHOUSE,
                msg: 'Lỗi call api GET_ROOMS_BY_IDHOUSE'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_ROOMS_BY_IDHOUSE,
            data: null,
            msg: "Lỗi call api GET_ROOMS_BY_IDHOUSE"
        })
    }
}

export const createRoom = (data) => async (dispath) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/rooms`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (response.status === 200) {
            alert("Thêm phòng mới thành công !!")
            dispath({
                type: actionTypes.CREATE_ROOM,
                data: response.data
            })
        }
        else {

            dispath({
                type: actionTypes.CREATE_ROOM,
                msg: 'Lỗi call api CREATE_ROOM'
            })
        }

    } catch (error) {
        alert("Lỗi !!")
        dispath({
            type: actionTypes.CREATE_ROOM,
            data: null,
            msg: "Lỗi call api CREATE_ROOM"
        })
    }
}

export const deleteRoom = (roomId) => async (dispath) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/rooms/${roomId}`)
        if (response.status === 200) {
            alert(`Xóa phòng có Id là ${roomId} thành công!!`)
            dispath({
                type: actionTypes.DELETE_ROOM,
                data: roomId
            })
        }
        else {
            dispath({
                type: actionTypes.DELETE_ROOM,
                msg: 'Lỗi call api DELETE_ROOM'
            })
        }

    } catch (error) {
        alert("Lỗi !!")
        dispath({
            type: actionTypes.DELETE_ROOM,
            data: null,
            msg: "Lỗi call api DELETE_ROOM"
        })
    }
}

export const updateRoom = (data, roomId) => async (dispath) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/rooms/${roomId}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (response.status === 200) {
            alert("Cập nhật thông tin phòng thành công !!")
            dispath({
                type: actionTypes.UPDATE_ROOM,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.UPDATE_ROOM,
                msg: 'Lỗi call api UPDATE_ROOM'
            })
        }

    } catch (error) {
        alert("Lỗi !!")
        dispath({
            type: actionTypes.UPDATE_ROOM,
            data: null,
            msg: "Lỗi call api UPDATE_ROOM"
        })
    }
}