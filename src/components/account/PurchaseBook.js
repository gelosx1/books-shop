import React, {useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {purchaseBook} from "../../actions/account/PurchaseBookAction";
import {Redirect} from "react-router-dom";
import {Button} from "react-bootstrap";

const PurchaseBook = (props) => {
    const [redirect,setRedirect] = useState(false);
    const handlePurchase = () => {
        if (props.user) {
            const data = {
                name: props.user.name,
                isbn: props.isbn
            };
            props.purchaseBook(data);
        }else{
            setRedirect(true);
        }
    };
        return (
            <div>
                {!redirect ? <Button variant={'success'} onClick={handlePurchase}>purchase</Button> : <Redirect to={'/login'}/>}
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

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseBook);
