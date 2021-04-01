import {CLIENT_REQUEST,RESPONSE_SUCCESS,RESPONSE_ERROR} from "../actions/StandartRequestActions";

export default function (state = {}, action) {
    switch (action.type) {
        case CLIENT_REQUEST:
            return {...state, info: action.payload};
        case RESPONSE_SUCCESS:
            return {...state, data: action.payload};
        case RESPONSE_ERROR:
            return {...state, err: action.payload};
        default: return state
    }
}