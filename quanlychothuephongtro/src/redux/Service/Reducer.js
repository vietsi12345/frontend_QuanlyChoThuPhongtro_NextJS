import { actionTypes } from "./ActionType";


const initstate = {
    services: [],
    msg: '',
}

const serviceReducer = (state = initstate, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_SERVICE:
            return {
                ...state,
                services: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.CREATE_SERVICE:
            return {
                ...state,
                services: [action.data, ...state.services],
                msg: action.msg || '',
            };
        case actionTypes.DELETE_SERVICE:
            return {
                ...state,
                services: state.services.filter((item) => item.id != action.data),
                msg: action.msg || '',
            };
        case actionTypes.UPDATE_SERVICE:
            return {
                ...state,
                services: state.services.map((item) => item.id === action.data?.id ? action.data : item),
                msg: action.msg || '',
            };
        default:
            return state;
    }
}

export default serviceReducer