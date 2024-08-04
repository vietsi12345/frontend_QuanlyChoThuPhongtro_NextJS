import { actionTypes } from "./ActionType";


const initstate = {
    allBooking: [],
    bookingsByStatus: [],
    myBookings: [],
    msg: '',
}

const bookingReducer = (state = initstate, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_BOOKING:
            return {
                ...state,
                allBooking: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.CREATE_BOOKING:
            return {
                ...state,
                allBooking: action.data ? [action.data, ...state.allBooking] : state.allBooking,
                msg: action.msg || '',
            };
        case actionTypes.GET_BOOKING_BY_STATUS:
            return {
                ...state,
                bookingsByStatus: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.GET_BOOKING_FOR_USER:
            return {
                ...state,
                myBookings: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.UPDATE_BOOKING_STATUS:
            return {
                ...state,
                allBooking: action.data ? state.allBooking.map((item) => item.id === action.data?.id ? action.data : item) : state.allBooking,
                myBookings: action.data ? state.myBookings.map((item) => item.id === action.data?.id ? action.data : item) : state.myBookings,
                msg: action.msg || '',
            };
        default:
            return state;
    }
}

export default bookingReducer