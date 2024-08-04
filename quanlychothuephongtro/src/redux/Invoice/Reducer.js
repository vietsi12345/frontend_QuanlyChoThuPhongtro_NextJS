import { useDispatch } from "react-redux";
import { actionTypes } from "./ActionType";


const initstate = {
    invoicesOfContract: [],
    invoicesDetailOfInvoice: [],
    statistical: null,
    msg: '',
}

const invoiceReducer = (state = initstate, action) => {

    switch (action.type) {
        case actionTypes.GET_INVOICE_OF_CONTRACT:
            return {
                ...state,
                invoicesOfContract: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.CREATE_INVOICE:
            return {
                ...state,
                invoicesOfContract: action.data ? [action.data, ...state.invoicesOfContract] : state.invoicesOfContract,
                msg: action.msg || '',
            };
        case actionTypes.UPDATE_DUEDATE_INVOICE:
            return {
                ...state,
                invoicesOfContract: state.invoicesOfContract.map((item) => item.id === action.data?.id ? action.data : item),
                msg: action.msg || '',
            };
        case actionTypes.GET_INVOICE_DETAIL_FOR_INVOICE:
            return {
                ...state,
                invoicesDetailOfInvoice: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.CREATE_INVOICE_DETAIL:
            return {
                ...state,
                invoicesDetailOfInvoice: [action.data, ...state.invoicesDetailOfInvoice],
                msg: action.msg || '',
            };
        case actionTypes.STATISTICAL_BY_YEAR:
            return {
                ...state,
                statistical: action.data || [],
                msg: action.msg || '',
            };
        default:
            return state;
    }
}

export default invoiceReducer