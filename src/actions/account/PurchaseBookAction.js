import {clientRequest, responseError, responseSuccess} from "../StandartRequestActions";
import {handleResponseHeader, errorMessage, urlApiAccount, handleRequestHeaders} from "../../const/Constant";

export const purchaseBook = (user) => {
    let responseStatus = null;
    const init = {
        method: 'PUT',
        headers: handleRequestHeaders()
    };
    return(dispatch) => {
        dispatch(clientRequest('pending...'));
        fetch(`${urlApiAccount}/account/${user.name}/purchase/${user.isbn}`, init)
            .then(response => {
                responseStatus = response.status;
                return  handleResponseHeader(response);
            })
            .then(response => response.json(), e => dispatch(responseError(e)))
            .then(data => {
                console.log(data);
                if (responseStatus === 200) {
                    dispatch(clientRequest(''));
                    dispatch(responseSuccess(data));
                }else{
                    dispatch(clientRequest(errorMessage, responseStatus));
                }
            })
            .catch(e => console.log(e))
    }
};