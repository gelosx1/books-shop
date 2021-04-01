import React from 'react';
import {loginUser} from "../../actions/account/LoginUserAction";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link, Redirect} from "react-router-dom";
import Footer from "../Footer";

function Login(props) {
    const submitLogin = (e) => {
        e.preventDefault();
        let login = {
            login: e.target.login.value.trim(),
            password: e.target.password.value.trim(),
        };
        props.login(login);
    };

    if (!props.user) {
        return (
            <div>
                <h1>Books Shop account</h1>
                <h2>Login</h2>
                <form onSubmit={submitLogin}>
                    <input type="text" name={'login'} placeholder={'login'}/>
                    <input type="password" name={'password'} placeholder={'password'}/>
                    <button className={'btn-info mb-5'} type={'submit'}>Log in</button>
                </form>
                <h4>Have no account? Register now</h4>
                <Link to={'/register'} className={'link'}><p className={'link'}>Register</p></Link>
                <Footer/>
            </div>
        );
    } else {
        return (
            <div>
                <Redirect to={'/'}/>
                <Footer/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            login: loginUser
        }, dispatch
    );
}

function mapStateToProps(state) {
    return {
        user: state.accountData.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);