import axios from "axios"

import { API_BASE_URL } from "@/config/Api"
import { actionTypes } from "./ActionType"

export const getAllPayment = () => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/payments`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_ALL_PAYMENT,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_ALL_PAYMENT,
                msg: 'Lỗi call api GET_ALL_PAYMENT'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_ALL_PAYMENT,
            data: null,
            msg: "Lỗi call api GET_ALL_PAYMENT"
        })
    }
}

export const createPayment = (data) => async (dispath) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/payments`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.status === 200) {
            dispath({
                type: actionTypes.CREATE_PAYMENT,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.CREATE_PAYMENT,
                msg: 'Lỗi call api CREATE_PAYMENT'
            })
        }

    } catch (error) {
        alert("Lỗi")
        dispath({
            type: actionTypes.CREATE_PAYMENT,
            data: null,
            msg: "Lỗi call api CREATE_PAYMENT"
        })
    }
}

export const updateStatusPayment = (status, id) => async (dispath) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/payments/${id}?status=${status}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.UPDATE_STATUS_PAYMENT,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.UPDATE_STATUS_PAYMENT,
                msg: 'Lỗi call api UPDATE_STATUS_PAYMENT'
            })
        }

    } catch (error) {
        alert("Lỗi")
        dispath({
            type: actionTypes.UPDATE_STATUS_PAYMENT,
            data: null,
            msg: "Lỗi call api UPDATE_STATUS_PAYMENT"
        })
    }
}