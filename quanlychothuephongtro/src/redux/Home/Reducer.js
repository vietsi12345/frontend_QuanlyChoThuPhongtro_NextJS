import { actionTypes } from "./ActionType";


const initstate = {
    allHome: [],
    cities: [],
    homebyId: null,
    roomsByType: [],
    homesByCity: [],
    homesSearch: [],
    msg: '',
}

const homeReducer = (state = initstate, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_HOME:
            return {
                ...state,
                allHome: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.GET_ALL_CITIES:
            return {
                ...state,
                cities: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.GET_HOME_BY_CITY:
            return {
                ...state,
                homesByCity: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.GET_HOME_BY_ID:
            return {
                ...state,
                homeById: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.SEARCH_BY_NAME:
            return {
                ...state,
                homesSearch: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.GET_ROOMS_BY_TYPE:
            return {
                ...state,
                roomsByType: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.CREATE_HOME:
            return {
                ...state,
                allHome: [action.data, ...state.allHome],
                msg: action.msg || '',
            };
        case actionTypes.DELETE_HOME:
            return {
                ...state,
                allHome: state.allHome.filter((item) => item.id !== action.data),
                msg: action.msg || '',
            };
        case actionTypes.UPDATE_HOME:
            console.log(action.data, "xóa")
            return {
                ...state,
                allHome: state.allHome.map((item) => item.id === action.data?.id ? action.data : item),
                msg: action.msg || '',
            };
        default:
            return state;
    }
}

export default homeReducer