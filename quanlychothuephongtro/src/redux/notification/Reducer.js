import { actionTypes } from "./ActionType";


const initstate = {
    myNotification: [],
    myNotificationUnread: [],
    msg: '',
}

const notificationReducer = (state = initstate, action) => {
    switch (action.type) {
        case actionTypes.GET_NOTIFICATION_FOR_USER:
            return {
                ...state,
                myNotification: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.GET_NOTIFICATION_UNREAD_FOR_USER:
            return {
                ...state,
                myNotificationUnread: action.data || [],
                msg: action.msg || '',
            };
        case actionTypes.MASK_NOTIFICATION_AS_READ:
            console.log(action.data.id, "xóa tb")
            return {
                ...state,
                myNotificationUnread: state.myNotificationUnread.filter((item) => item.id != action.data.id),
                msg: action.msg || '',
            };
        default:
            return state;
    }
}

export default notificationReducer