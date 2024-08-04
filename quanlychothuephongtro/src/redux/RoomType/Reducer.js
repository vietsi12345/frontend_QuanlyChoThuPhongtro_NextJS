import { actionTypes } from "./ActionType";


const initstate = {
    roomTypes: [],
    msg: '',
}

const roomTypeReducer = (state = initstate, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_ROOMTYPE:
            return {
                ...state,
                roomTypes: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.CREATE_ROOMTYPE:
            return {
                ...state,
                roomTypes: [action.data, ...state.roomTypes],
                msg: action.msg || '',
            };
        case actionTypes.DELETE_ROOMTYPE:
            return {
                ...state,
                roomTypes: state.roomTypes.filter((item) => item.id != action.data),
                msg: action.msg || '',
            };
        case actionTypes.UPDATE_ROOMTYPE:
            return {
                ...state,
                roomTypes: state.roomTypes.map((item) => item.id === action.data.id ? action.data : item),
                msg: action.msg || '',
            };
        default:
            return state;
    }
}

export default roomTypeReducer