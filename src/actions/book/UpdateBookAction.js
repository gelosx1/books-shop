import {clientRequest, responseError} from "../StandartRequestActions";
import {errorMessage, handleRequestHeaders, handleResponseHeader, urlApiAccount} from "../../const/Constant";
import {booksListData} from "../BookDataAction";

export const updateBook = (book,list) => {
    let responseStatus = null;
    const init = {
        method: 'PUT',
        headers: handleRequestHeaders()
    };
    return(dispatch) => {
        dispatch(clientRequest('pending...'));
        fetch(`${urlApiAccount}/book/${book.isbn}/title/${book.newTitle}`, init)
            .then(response => {
                responseStatus = response.status;
                return  handleResponseHeader(response);
            })
            .then(response => response.json(), e => dispatch(responseError(e)))
            .then(data => {
                console.log(data);
                if (responseStatus === 200) {
                    dispatch(clientRequest(''));
                    for (let i = 0; i < list.length; i++){
                        if (list[i]['isbn'] === book.isbn){
                            list.splice(i, 1, data);
                            dispatch(booksListData(list));
                            break;
                        }
                    }
                }else{
                    dispatch(clientRequest(errorMessage, responseStatus));
                }
            })
            .catch(e => console.log(e))
    }
};