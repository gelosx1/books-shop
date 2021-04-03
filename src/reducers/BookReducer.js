import {BOOKS_LIST_DATA, IS_PURCHASED_LIST} from "../actions/BookDataAction";
import {ACTIVE_PAGE, FIND_BOOK_TYPE, SEARCH_QUERY, TABLE_PAGINATION} from "../actions/SwitchPageAction";

const init = {
    list:[],
    flagPurchase: false,
    paginationInfo: [],
    active: 1
};

export default function (state = init, action) {
    switch (action.type) {
        case BOOKS_LIST_DATA:
            return {...state, list: action.payload};
        case IS_PURCHASED_LIST:
            return {...state, flagPurchase: action.payload};
        case TABLE_PAGINATION:
            return {...state, paginationInfo: action.payload};
        case FIND_BOOK_TYPE:
            return {...state, findType: action.payload};
        case SEARCH_QUERY:
            return {...state, bookQuery: action.payload};
        case ACTIVE_PAGE:
            return {...state, active: action.payload};
        default: return state
    }
}