import React from 'react';
import FindBook from "./book/FindBook";
import {bindActionCreators} from "redux";
import {purchaseBook} from "../actions/account/PurchaseBookAction";
import {connect} from "react-redux";
import {Accordion, Button, Card} from "react-bootstrap";
import GetPurchasedBooks from "./account/GetPurchasedBooks";
import AddBook from "./book/AddBook";
import {Link} from "react-router-dom";
import LogOut from "./account/LogOut";

const AdminArea = (props) => {

    return (
        <div className={'main-admin'}>
            <h2>Admin area</h2>
            <Accordion  className={"main-accordion"}>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="secondary" eventKey="0" style={{width: 50 + 'rem'}}>
                            Search book :
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <FindBook/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="secondary" eventKey="1" style={{width: 50 + 'rem'}}>
                            Input book properties :
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <AddBook/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle  as={Button} variant="secondary" eventKey="2" style={{width: 50 + 'rem'}}>
                            User account :
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <div className={'accord-footer'}>{props.user && <GetPurchasedBooks/>}
                                {!props.user ?
                                    <Link to={'/login'}><p className={'link'}>Login</p></Link> :
                                    <LogOut/>}</div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
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