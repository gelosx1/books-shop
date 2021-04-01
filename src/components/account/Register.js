import React from 'react';
import {registerNewUser} from "../../actions/account/RegisterNewUserAction";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Footer from "../Footer";

function Register(props) {
    const submitRegister = (e) => {
        e.preventDefault();
        let user = {
            name: e.target.userName.value.trim(),
            password: e.target.password.value.trim(),
        };
        if (user.name && user.password) {
            props.register(user);
        }
    };


        return (
            <div>
                <h1>Books shop registration</h1>
                <h2>Register</h2>
                <form onSubmit={submitRegister}>
                    <input type="text" name={'userName'} placeholder={'first name, 5 character min'} minLength={1}/>
                    <input type="password" name={'password'} placeholder={'password, 3 character min'} minLength={5}/>
                    <button type={'submit'}>Register</button>
                </form>
                <h3>Already registered? Login now</h3>
                <Link to={'/login'}><p className={'link'}>Login</p></Link>
                <Footer/>
            </div>
        );
}

    function mapDispatchToProps(dispatch) {
        return{
            register: user => dispatch(registerNewUser(user))
        }
    }

    function mapStateToProps(state) {
        return {
            state
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Register);