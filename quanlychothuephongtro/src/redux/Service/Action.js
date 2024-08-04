import axios from "axios"
import { actionTypes } from "./ActionType"
import { API_BASE_URL } from "@/config/Api"

export const getAllService = () => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/services`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_ALL_SERVICE,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_ALL_SERVICE,
                msg: 'Lỗi call api GET_ALL_SERVICE'
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_ALL_SERVICE,
            data: null,
            msg: "Lỗi call api GET_ALL_SERVICE"
        })
    }
}

export const createService = (data) => async (dispath) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/services`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            alert("Thêm dịch vụ mới thành công !!")
            dispath({
                type: actionTypes.CREATE_SERVICE,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.CREATE_SERVICE,
                msg: 'Lỗi call api CREATE_SERVICE'
            })
        }

    } catch (error) {
        alert("Lỗi !!")
        dispath({
            type: actionTypes.CREATE_SERVICE,
            data: null,
            msg: "Lỗi call api CREATE_SERVICE"
        })
    }
}

export const deleteService = (serviceId) => async (dispath) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/services/${serviceId}`)
        if (response.status === 200) {
            alert(`Xóa Service có Id là ${roomId} thành công!!`)
            dispath({
                type: actionTypes.DELETE_SERVICE,
                data: serviceId
            })
        }
        else {
            dispath({
                type: actionTypes.DELETE_SERVICE,
                msg: 'Lỗi call api DELETE_SERVICE'
            })
        }

    } catch (error) {
        alert("Lỗi !!")
        dispath({
            type: actionTypes.DELETE_SERVICE,
            data: null,
            msg: "Lỗi call api DELETE_SERVICE"
        })
    }
}

export const updateService = (data, serviceId) => async (dispath) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/services/${serviceId}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (response.status === 200) {
            alert("Cập nhật thông tin dịch vụ thành công !!")
            dispath({
                type: actionTypes.UPDATE_SERVICE,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.UPDATE_SERVICE,
                msg: 'Lỗi call api UPDATE_SERVICE'
            })
        }

    } catch (error) {
        alert("Lỗi !!")
        dispath({
            type: actionTypes.UPDATE_SERVICE,
            data: null,
            msg: "Lỗi call api UPDATE_SERVICE"
        })
    }
}