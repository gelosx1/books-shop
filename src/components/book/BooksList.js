import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PurchaseBook from "../account/PurchaseBook";
import DeleteBook from "./DeleteBook";
import UpdateBook from "./UpdateBook";
import {itemsOnPage, urlApiAccount} from "../../const/Constant";
import {findBooksBy} from "../../actions/book/FindBooksByAction";

const BooksList = (props) => {

    useEffect(()=>{
        props.findBooksBy(`${urlApiAccount}/book/all/page/${1}/items/${itemsOnPage}`);
    },[]);

        return (
            <div className={'main'} style={{alignItems: "center"}}>
                <h3>Books List</h3>
                <div className={'books-table'}>
                    <div style={{marginTop: 1 + 'rem'}}>
                        <table>
                            <thead>
                            <tr>
                                <th>ISBN</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Publisher</th>
                                {!props.isListPurchased && props.isAdminLogin && <th>Update book</th>}
                                {!props.isListPurchased && props.isAdminLogin && <th>Delete</th>}
                                {!props.isListPurchased && <th>Purchase</th>}

                            </tr>
                            </thead>
                            <tbody>
                            {props.booksList && props.booksList.map((item, index) =>
                                <tr key={item.isbn}>
                                    <td key={item.isbn + 1}>{item.isbn}</td>
                                    <td key={item.isbn + 2}>{item.title}</td>
                                    <td key={item.isbn + 3}>{item.authors && item.authors.map((author, index) =>
                                        <span
                                            key={author.name + index}>{author.name}{item.authors.length - 1 !== index && ','}</span>)}</td>
                                    <td key={item.isbn + 4}>{item.publisher}</td>
                                    {!props.isListPurchased && props.isAdminLogin &&
                                    <td key={item.isbn + 7}>{<UpdateBook isbn={item.isbn}/>}</td>}
                                    {!props.isListPurchased && props.isAdminLogin &&
                                    <td key={item.isbn + 6}>{<DeleteBook isbn={item.isbn}/>}</td>}
                                    {!props.isListPurchased &&
                                    <td key={item.isbn + 5}>{<PurchaseBook isbn={item.isbn}/>}</td>}
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        findBooksBy
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        isAdminLogin: state.accountData.isAdmin,
        booksList: state.bookData.list,
        isListPurchased: state.bookData.flagPurchase
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);