import {BOOKS_LIST_DATA, IS_PURCHASED_LIST} from "../actions/BookDataAction";

const init = {
    list:[],
    flagPurchase: false
};

export default function (state = init, action) {
    switch (action.type) {
        case BOOKS_LIST_DATA:
            return {...state, list: action.payload};
        case IS_PURCHASED_LIST:
            return {...state, flagPurchase: action.payload};
        default: return state
    }
}