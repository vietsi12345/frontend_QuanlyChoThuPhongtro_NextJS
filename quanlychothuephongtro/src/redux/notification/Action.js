import axios from "axios"
import { actionTypes } from "./ActionType"
import { API_BASE_URL } from "@/config/Api"

export const getNotificationForUser = (userId) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/notifications/user/${userId}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_NOTIFICATION_FOR_USER,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_NOTIFICATION_FOR_USER,
                msg: 'Lỗi call api GET_NOTIFICATION_FOR_USER'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_NOTIFICATION_FOR_USER,
            data: null,
            msg: "Lỗi call api GET_NOTIFICATION_FOR_USER"
        })
    }
}

export const getNotificationUnReadForUser = (userId) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/notifications/user/${userId}/unread`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_NOTIFICATION_UNREAD_FOR_USER,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_NOTIFICATION_UNREAD_FOR_USER,
                msg: 'Lỗi call api GET_NOTIFICATION_UNREAD_FOR_USER'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_NOTIFICATION_UNREAD_FOR_USER,
            data: null,
            msg: "Lỗi call api GET_NOTIFICATION_UNREAD_FOR_USER"
        })
    }
}

export const maskNotificationAsRead = (id) => async (dispath) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/notifications/${id}/read`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.MASK_NOTIFICATION_AS_READ,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.MASK_NOTIFICATION_AS_READ,
                msg: 'Lỗi call api MASK_NOTIFICATION_AS_READ'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.MASK_NOTIFICATION_AS_READ,
            data: null,
            msg: "Lỗi call api MASK_NOTIFICATION_AS_READ"
        })
    }
}