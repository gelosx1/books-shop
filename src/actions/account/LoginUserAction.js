import {clientRequest, responseError, responseSuccess} from "../StandartRequestActions";
import {isAdmin, isLogin} from "../IsLoginAction";
import {urlApiAccount, handleResponseHeader} from '../../const/Constant.js'
import {errorMessage} from "../../const/Constant";
import {userData} from "../AccountDataAction";
import jwt_decode from "jwt-decode";


export const loginUser = (user) => {
    let responseStatus = null;
    const _token = `Basic ${btoa(`${user.login}:${user.password}`)}`;
    const init = {
        method: 'POST',
        headers: new Headers({
            'Authorization': `${_token}`
        })
    };
    return(dispatch) => {
        dispatch(clientRequest('pending...'));
        fetch(`${urlApiAccount}/account/login`, init)
            .then(response => {
                responseStatus = response.status;
                return  handleResponseHeader(response);
            })
            .then(response => response.json(), e => dispatch(responseError(e)))
            .then(user => {
                console.log(user);
                if (responseStatus === 200) {
                    //localStorage.setItem('user',JSON.stringify(user));
                    dispatch(clientRequest(''));
                    dispatch(userData(user));
                    dispatch(isAdmin(jwt_decode(localStorage.getItem('user_t')).roles.includes('ROLE_ADMIN')));
                }else{
                    dispatch(clientRequest(errorMessage, responseStatus));
                }
            })
            .catch(e => console.log(e))
    }
};