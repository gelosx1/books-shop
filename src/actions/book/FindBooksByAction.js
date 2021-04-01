import {clientRequest, responseError, responseSuccess} from "../StandartRequestActions";
import {errorMessage, handleRequestHeaders, handleResponseHeader} from "../../const/Constant";
import {booksListData, isPurchasedList} from "../BookDataAction";

export const findBooksBy = (urlString) => {
    let responseStatus = null;
    const init = {
        method: 'GET',
        headers: handleRequestHeaders()
    };
    return(dispatch) => {
        dispatch(clientRequest('pending...'));
        fetch(urlString, init)
            .then(response => {
                responseStatus = response.status;
                return  handleResponseHeader(response);
            })
            .then(response => response.json(), e => dispatch(responseError(e)))
            .then(data => {
                console.log(data);
                if (responseStatus === 200) {
                    dispatch(clientRequest(''));
                    dispatch(isPurchasedList(false));
                    dispatch(booksListData(data))
                }else{
                    dispatch(clientRequest(errorMessage, responseStatus));
                }
            })
            .catch(e => console.log(e))
    }
};