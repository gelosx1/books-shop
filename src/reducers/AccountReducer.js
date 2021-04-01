import {USER_DATA} from "../actions/AccountDataAction";
import {IS_ADMIN} from "../actions/IsLoginAction";

export default function (state = {}, action) {
    switch (action.type) {
        case USER_DATA:
            return {...state, user: action.payload};
        case IS_ADMIN:
            return {...state, isAdmin: action.payload};
        default: return state
    }
}