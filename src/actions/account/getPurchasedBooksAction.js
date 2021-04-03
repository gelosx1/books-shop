import {clientRequest, responseError} from "../StandartRequestActions";
import {
    errorMessage,
    handleRequestHeaders,
    handleResponseHeader,
    itemsOnPage,
    urlApiAccount
} from "../../const/Constant";
import {booksListData, isPurchasedList} from "../BookDataAction";
import {tablePagination} from "../SwitchPageAction";

export const getPurchasedBooks = (user, active) => {
    let responseStatus = null;
    const init = {
        method: 'GET',
        headers: handleRequestHeaders()
    };
    return(dispatch) => {
        dispatch(clientRequest('pending...'));
        fetch(`${urlApiAccount}/account/${user.name}/purchased/page/${active}/items/${itemsOnPage}`, init)
            .then(response => {
                responseStatus = response.status;
                return  handleResponseHeader(response);
            })
            .then(response => response.json(), e => dispatch(responseError(e)))
            .then(data => {
                console.log(data);
                if (responseStatus === 200) {
                    dispatch(clientRequest(''));
                    dispatch(isPurchasedList(true));
                    dispatch(booksListData(data.books));
                    dispatch(tablePagination(data.pageInfo))
                }else{
                    dispatch(clientRequest(errorMessage, responseStatus));
                }
            })
            .catch(e => console.log(e))
    }
};