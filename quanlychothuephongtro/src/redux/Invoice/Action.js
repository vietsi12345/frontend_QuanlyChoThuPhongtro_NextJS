import { API_BASE_URL } from "@/config/Api"
import axios from "axios"
import { actionTypes } from "./ActionType"

export const createInvoice = (data) => async (dispath) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/invoices`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            alert("Tạo hóa đơn thành công!")
            dispath({
                type: actionTypes.CREATE_INVOICE,
                data: response.data
            })
        }
        else if (response.status === 226) {
            alert(response.data)
            dispath({
                type: actionTypes.CREATE_INVOICE,
                msg: response.data
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.CREATE_INVOICE,
            data: null,
            msg: "Lỗi call api CREATE_INVOICE"
        })
    }
}

export const createInvoiceDetail = (data, contractId) => async (dispath) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/invoice-details`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            alert("Tạo chi tiết hóa đơn thành công!")
            // cập nhật lại invoice, hiển thị lại invoice sau khi thêm chi tiết invoice
            dispath(getInvoiceOfContract(contractId))
            //////
            dispath({
                type: actionTypes.CREATE_INVOICE_DETAIL,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.CREATE_INVOICE_DETAIL,
                msg: "Lỗi call api CREATE_INVOICE_DETAIL"
            })
        }

    } catch (error) {
        dispath({
            type: actionTypes.CREATE_INVOICE_DETAIL,
            data: null,
            msg: "Lỗi call api CREATE_INVOICE_DETAIL"
        })
    }
}

export const getInvoiceOfContract = (contractId) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/invoices/by-contract/${contractId}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_INVOICE_OF_CONTRACT,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_INVOICE_OF_CONTRACT,
                msg: "Lỗi call api GET_INVOICE_OF_CONTRACT"
            })
        }
    } catch (error) {
        dispath({
            type: actionTypes.GET_INVOICE_OF_CONTRACT,
            data: null,
            msg: "Lỗi call api GET_INVOICE_OF_CONTRACT"
        })
    }
}

export const updateDueDateInvoice = (duedate, invoiceId) => async (dispath) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/invoices/${invoiceId}?dueDate=${duedate}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.UPDATE_DUEDATE_INVOICE,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.UPDATE_DUEDATE_INVOICE,
                msg: "Lỗi call api UPDATE_DUEDATE_INVOICE"
            })
        }
    } catch (error) {
        dispath({
            type: actionTypes.UPDATE_DUEDATE_INVOICE,
            data: null,
            msg: "Lỗi call api UPDATE_DUEDATE_INVOICE"
        })
    }
}

export const getInvoiceDetailForInvoice = (invoiceId) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/invoice-details/by-invoice/${invoiceId}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.GET_INVOICE_DETAIL_FOR_INVOICE,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.GET_INVOICE_DETAIL_FOR_INVOICE,
                msg: "Lỗi call api GET_INVOICE_DETAIL_FOR_INVOICE"
            })
        }
    } catch (error) {
        dispath({
            type: actionTypes.GET_INVOICE_DETAIL_FOR_INVOICE,
            data: null,
            msg: "Lỗi call api GET_INVOICE_DETAIL_FOR_INVOICE"
        })
    }
}

export const getStatisticalByYear = (year) => async (dispath) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/invoices/revenue/monthly?year=${year}`)
        if (response.status === 200) {
            dispath({
                type: actionTypes.STATISTICAL_BY_YEAR,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionTypes.STATISTICAL_BY_YEAR,
                msg: "Lỗi call api STATISTICAL_BY_YEAR"
            })
        }
    } catch (error) {
        dispath({
            type: actionTypes.STATISTICAL_BY_YEAR,
            data: null,
            msg: "Lỗi call api STATISTICAL_BY_YEAR"
        })
    }
}