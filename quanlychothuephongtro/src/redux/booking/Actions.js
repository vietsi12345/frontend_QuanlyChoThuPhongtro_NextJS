import { API_BASE_URL } from "@/config/Api"
import axios from "axios"
import { actionTypes } from "./ActionType"

export const createtBooking = (data) => async (dispath) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/bookings`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            alert("Đã đăng ký thuê phòng thành công !! Vui lòng đợi kết quả")
            dispath({
                type: actionTypes.CREATE_BOOKING,
                data: response.data
            })
        }
        else if (response.status === 226) {
            alert(response.data)
            dispath({
                type: actionTypes.CREATE_BOOKING,
                msg: response.data
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.CREATE_BOOKING,
            data: null,
            msg: "Lỗi call api CREATE_BOOKING"
        })
    }
}

export const updateBookingStatus = (status, id) => async (dispath) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/bookings/update-status/${id}`, status, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (response.status === 200) {
            dispath({
                type: actionTypes.UPDATE_BOOKING_STATUS,
                data: response.data
            })
        }
        else if (response.status === 226) {
            alert(response.data)
            dispath({
                type: actionTypes.UPDATE_BOOKING_STATUS,
                msg: response.data
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.UPDATE_BOOKING_STATUS,
            data: null,
            msg: "Lỗi call api UPDATE_BOOKING_STATUS"
        })
    }
}

export const getALLBooking = () => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/bookings`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_ALL_BOOKING,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_ALL_BOOKING,
                msg: "Lỗi call api GET_ALL_BOOKING"
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_ALL_BOOKING,
            data: null,
            msg: "Lỗi call api GET_ALL_BOOKING"
        })
    }
}

export const getBookingByStatus = (status) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/bookings/status?status=${status}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_BOOKING_BY_STATUS,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_BOOKING_BY_STATUS,
                msg: "Lỗi call api GET_BOOKING_BY_STATUS"
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_BOOKING_BY_STATUS,
            data: null,
            msg: "Lỗi call api GET_BOOKING_BY_STATUS"
        })
    }
}

export const getBookingsForUser = (userId) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/bookings/user/${userId}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_BOOKING_FOR_USER,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_BOOKING_FOR_USER,
                msg: "Lỗi call api GET_BOOKING_FOR_USER"
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_BOOKING_FOR_USER,
            data: null,
            msg: "Lỗi call api GET_BOOKING_FOR_USER"
        })
    }
}