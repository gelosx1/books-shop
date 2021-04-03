import {clientRequest, responseError, responseSuccess} from "../StandartRequestActions";
import {errorMessage, handleRequestHeaders, handleResponseHeader, urlApiAccount} from "../../const/Constant";
import {booksListData} from "../BookDataAction";

export const addBook = (book, list) => {
    let responseStatus = null;
    const init = {
        method: 'POST',
        headers: handleRequestHeaders(),
        body: JSON.stringify(book)
    };
    return(dispatch) => {
        dispatch(clientRequest('pending...'));
        fetch(`${urlApiAccount}/book`, init)
            .then(response => {
                responseStatus = response.status;
                return  handleResponseHeader(response);
            })
            .then(response => response.json(), e => dispatch(responseError(e)))
            .then(data => {
                if (responseStatus === 200 && data) {
                    dispatch(clientRequest(''));
                    list.unshift(book);
                    dispatch(booksListData(list))
                }else{
                    dispatch(clientRequest(errorMessage, responseStatus));
                }
            })
            .catch(e => console.log(e))
    }
};