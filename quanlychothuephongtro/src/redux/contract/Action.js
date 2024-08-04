import { API_BASE_URL } from "@/config/Api"
import axios from "axios"
import { actionTypes } from "./ActionType"


export const createtContract = (data) => async (dispath) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/contracts`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            alert("Tạo hợp đồng thành công")
            dispath({
                type: actionTypes.CREATE_CONTRACT,
                data: response.data
            })
        }
        else if (response.status === 226) {
            alert(response.data)
            dispath({
                type: actionTypes.CREATE_CONTRACT,
                msg: response.data
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.CREATE_CONTRACT,
            data: null,
            msg: "Lỗi call api CREATE_CONTRACT"
        })
    }
}


export const getAllContract = () => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/contracts`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_ALL_CONTRACT,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_ALL_CONTRACT,
                msg: "Lỗi call api GET_ALL_CONTRACT"
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_ALL_CONTRACT,
            data: null,
            msg: "Lỗi call api GET_ALL_CONTRACT"
        })
    }
}


export const getContractById = (contractId) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/contracts/${contractId}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_CONTRACT_BY_ID,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_CONTRACT_BY_ID,
                msg: "Lỗi call api GET_CONTRACT_BY_ID"
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_CONTRACT_BY_ID,
            data: null,
            msg: "Lỗi call api GET_CONTRACT_BY_ID"
        })
    }
}

export const getContractByUserId = (userId) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/contracts/user/${userId}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_CONTRACT_BY_USERID,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_CONTRACT_BY_USERID,
                msg: "Lỗi call api GET_CONTRACT_BY_USERID"
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.GET_CONTRACT_BY_USERID,
            data: null,
            msg: "Lỗi call api GET_CONTRACT_BY_USERID"
        })
    }
}

export const updateContractStatus = (id) => async (dispath) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/contracts/update-status/${id}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.UPDATE_CONTRACT_STATUS,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.UPDATE_CONTRACT_STATUS,
                msg: "Lỗi call api UPDATE_CONTRACT_STATUS"
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.UPDATE_CONTRACT_STATUS,
            data: null,
            msg: "Lỗi call api UPDATE_CONTRACT_STATUS"
        })
    }
}

export const updateContract = (data, contractId) => async (dispath) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/contracts/${contractId}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (response.status === 200) {
            dispath({
                type: actionTypes.UPDATE_CONTRACT,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.UPDATE_CONTRACT,
                msg: "Lỗi call api UPDATE_CONTRACT"
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.UPDATE_CONTRACT_STATUS,
            data: null,
            msg: "Lỗi call api UPDATE_CONTRACT_STATUS"
        })
    }
}