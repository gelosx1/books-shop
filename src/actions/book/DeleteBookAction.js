import {clientRequest, responseError} from "../StandartRequestActions";
import {errorMessage, handleRequestHeaders, handleResponseHeader, urlApiAccount} from "../../const/Constant";
import {booksListData} from "../BookDataAction";

export const deleteBook = (isbn, list) => {
    let responseStatus = null;
    const init = {
        method: 'DELETE',
        headers: handleRequestHeaders()
    };
    return(dispatch) => {
        dispatch(clientRequest('pending...'));
        fetch(`${urlApiAccount}/book/${isbn}`, init)
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
                        if (list[i]['isbn'] === isbn){
                            list.splice(i, 1);
                            dispatch(booksListData(list))
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