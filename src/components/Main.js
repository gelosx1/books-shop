import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {responseSuccess} from "../actions/StandartRequestActions";
import UserArea from "./UserArea";
import AdminArea from "./AdminArea";
import {Link} from "react-router-dom";
import LogOut from "./account/LogOut";

function Main(props) {
    return (
        <div>
            <h1>Books shop</h1>
            <div>
                {!props.user ?
                <Link to={'/login'}><p className={'link'}>Login</p></Link> :
                <LogOut/>}
                {!props.user ?
                    <Link to={'/register'}><p className={'link'}>Register</p>
                    </Link> : ''}
            </div>
            {props.isAdminLogin ? <AdminArea/> : <UserArea/>}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        isAdminLogin: state.accountData.isAdmin,
        user: state.accountData.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setUser: responseSuccess,
    },dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Main);