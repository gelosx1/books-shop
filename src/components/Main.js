import React from 'react';
import {connect} from "react-redux";
import UserArea from "./UserArea";
import AdminArea from "./AdminArea";
import {Link} from "react-router-dom";
import BooksPagination from "./BooksPagination";
import BooksList from "./book/BooksList";
import Footer from "./Footer";

function Main(props) {
    return (
        <>
            <header>
                <h1>Books shop</h1>
                <div className={'login-reg'}>
                    {!props.user ?
                        <Link to={'/register'}><p className={'link'}>Register</p>
                        </Link> : ''}
                    {!props.user ? <Link to={'/login'}><p className={'link'}>Login</p></Link> :
                    ''}
                </div>
            </header>
            <section>
            {props.isAdminLogin ? <AdminArea/> : <UserArea/>}
            <BooksList/>
            {!props.isListPurchased && <BooksPagination/>}
            </section>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

function mapStateToProps(state) {
    return {
        isAdminLogin: state.accountData.isAdmin,
        user: state.accountData.user,

    }
}


export default connect(mapStateToProps)(Main);