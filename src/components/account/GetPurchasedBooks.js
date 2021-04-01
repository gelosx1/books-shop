import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getPurchasedBooks} from "../../actions/account/getPurchasedBooksAction";

const GetPurchasedBooks = (props) => {
    const handlePurchase = () => {
        props.user && props.getPurchasedBooks(props.user);
    };
    return (
        <div>
            <button onClick={handlePurchase} className={'purchase'}>Get purchased books</button>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            getPurchasedBooks
        }, dispatch);
}

function mapStateToProps(state) {
    return {
        user: state.accountData.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetPurchasedBooks);