import { actionTypes } from "./ActionType";


const initstate = {
    jwt: null,
    user: null,
    users: [],
    userById: null,
    msg: '',
}

const authReducer = (state = initstate, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN:
            return {
                ...state,
                jwt: action.data?.jwt || [],
                msg: action.msg || '',
            };
        case actionTypes.SIGN_UP:
            return {
                ...state,
                jwt: action.data?.jwt || [],
                msg: action.msg || '',
            };
        case actionTypes.GET_USER_BY_JWT:
            return {
                ...state,
                user: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.GET_ALL_USER:
            return {
                ...state,
                users: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.GET_USER_BY_ID:
            return {
                ...state,
                userById: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.LOG_OUT:
            return initstate
        default:
            return state;
    }
}

export default authReducer