import { actionTypes } from "./ActionType";


const initstate = {
    payments: [],
    payment: null,
    msg: '',
}

const paymentReduceer = (state = initstate, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_PAYMENT:
            return {
                ...state,
                payments: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.CREATE_PAYMENT:
            return {
                ...state,
                payment: action.data || [],
                msg: action.msg || '',
            };
        default:
            return state;
    }
}

export default paymentReduceer