import React from 'react';
import FindBook from "./book/FindBook";
import {bindActionCreators} from "redux";
import {purchaseBook} from "../actions/account/PurchaseBookAction";
import {connect} from "react-redux";
import GetPurchasedBooks from "./account/GetPurchasedBooks";
import BooksList from "./book/BooksList";
import AddBook from "./book/AddBook";

const AdminArea = (props) => {

    return (
        <div className={'main'}>
            <h2>Admin area</h2>
            {props.user && <GetPurchasedBooks/>}
            <FindBook/>
            <AddBook/>
            <BooksList/>
        </div>
    );
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            purchaseBook
        }, dispatch
    );
}

function mapStateToProps(state) {
    return {
        user: state.accountData.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminArea);