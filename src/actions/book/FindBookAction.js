import {clientRequest, responseError, responseSuccess} from "../StandartRequestActions";
import {errorMessage, handleRequestHeaders, handleResponseHeader, urlApiAccount} from "../../const/Constant";
import {booksListData} from "../BookDataAction";

export const findBook = (isbn) => {
    let responseStatus = null;
    const init = {
        method: 'GET',
        headers: handleRequestHeaders()
    };
    return(dispatch) => {
        dispatch(clientRequest('pending...'));
        fetch(`${urlApiAccount}/book/id/${isbn}`, init)
            .then(response => {
                responseStatus = response.status;
                return  handleResponseHeader(response);
            })
            .then(response => response.json(), e => dispatch(responseError(e)))
            .then(data => {
                console.log(data);
                if (responseStatus === 200) {
                    dispatch(clientRequest(''));
                    dispatch(booksListData([data]))
                }else{
                    dispatch(clientRequest(errorMessage, responseStatus));
                }
            })
            .catch(e => console.log(e))
    }
};