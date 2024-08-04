import { actionTypes } from "./ActionType";


const initstate = {
    contracts: [],
    contract: null,
    contractsForUser: [],
    msg: '',
}

const contractReducer = (state = initstate, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_CONTRACT:
            return {
                ...state,
                contracts: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.GET_CONTRACT_BY_USERID:
            return {
                ...state,
                contractsForUser: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.GET_CONTRACT_BY_ID:
            return {
                ...state,
                contract: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.CREATE_CONTRACT:
            return {
                ...state,
                contracts: action.data ? [action.data, ...state.contracts] : state.contracts,
                msg: action.msg || '',
            };
        case actionTypes.UPDATE_CONTRACT:
            return {
                ...state,
                contracts: action.data ? state.contracts.map((item) => item.id === action.data?.id ? action.data : item) : state.contracts,
                msg: action.msg || '',
            };
        case actionTypes.UPDATE_CONTRACT_STATUS:
            return {
                ...state,
                contracts: action.data ? state.contracts.map((item) => item.id === action.data?.id ? action.data : item) : state.contracts,
                msg: action.msg || '',
            };
        default:
            return state;
    }
}

export default contractReducer