import { actionTypes } from "./ActionType";


const initstate = {
    room: null,
    rooms: [],
    msg: '',
}

const roomReducer = (state = initstate, action) => {
    switch (action.type) {
        case actionTypes.GET_ROOM_BY_ID:
            return {
                ...state,
                room: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.GET_ROOMS_BY_IDHOUSE:
            return {
                ...state,
                rooms: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.CREATE_ROOM:
            return {
                ...state,
                rooms: [action.data, ...state.rooms],
                msg: action.msg || '',
            };
        case actionTypes.DELETE_ROOM:
            return {
                ...state,
                rooms: state.rooms.filter((item) => item.id != action.data),
                msg: action.msg || '',
            };
        case actionTypes.UPDATE_ROOM:
            return {
                ...state,
                rooms: state.rooms.map((item) => item.id === action.data?.id ? action.data : item),
                msg: action.msg || '',
            };
        default:
            return state;
    }
}

export default roomReducer