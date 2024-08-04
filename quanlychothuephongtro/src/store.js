import { thunk } from "redux-thunk";
import homeReducer from "./redux/Home/Reducer";
import authReducer from "./redux/auth/Reducer";
import bookingReducer from "./redux/booking/Reducer";
import roomReducer from "./redux/room/Reducer";
import notificationReducer from "./redux/notification/Reducer";
import contractReducer from "./redux/contract/Reducer";
import invoiceReducer from "./redux/Invoice/Reducer";
import serviceReducer from "./redux/Service/Reducer";
import roomTypeReducer from "./redux/RoomType/Reducer";
import paymentReduceer from "./redux/payment/Reducer";


const { legacy_createStore, combineReducers, applyMiddleware } = require("redux");

const rootReducers = combineReducers({
    home: homeReducer,
    auth: authReducer,
    booking: bookingReducer,
    contract: contractReducer,
    notification: notificationReducer,
    room: roomReducer,
    roomType: roomTypeReducer,
    invoice: invoiceReducer,
    service: serviceReducer,
    payment: paymentReduceer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));