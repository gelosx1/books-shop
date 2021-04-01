import {clientRequest, responseError, responseSuccess} from "../StandartRequestActions";
import {urlApiAccount} from '../../const/Constant.js'
import {errorMessage} from "../../const/Constant";

export const registerNewUser = (register) => {
    let responseStatus = null;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const init = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(register)
    };
    return (dispatch) => {
        dispatch(clientRequest('pending...'));
        fetch(`${urlApiAccount}/account/registration`, init)
            .then(response => {
                responseStatus = response.status;
                return response;
            })
            .then(response => response.json(), e => dispatch(responseError(e)))
            .then(user => {
                console.log(user);
               if (responseStatus === 200) {
                    dispatch(clientRequest(''));
                    dispatch(responseSuccess(user));
                }else{
                   dispatch(clientRequest(errorMessage, responseStatus));
               }
            })
            .catch(e => console.log(e));
    }
};