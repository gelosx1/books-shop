import userLogin from './RequestReducer';
import accountData from './AccountReducer';
import bookData from './BookReducer'
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    userLogin,
    accountData,
    bookData
});