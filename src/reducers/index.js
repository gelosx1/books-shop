import userLogin from './RequestReducer';
import accountData from './AccountReducer';
import bookData from './BookReducer'
// import switcher from './SwitchPageReducer';
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    userLogin,
    accountData,
    bookData
   // checkIn,
   // switcher
});