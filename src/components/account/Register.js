import React from 'react';
import {registerNewUser} from "../../actions/account/RegisterNewUserAction";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Footer from "../Footer";
import {Button} from "react-bootstrap";

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
            <div className={'relog-main'}>
                <h1>Books shop registration</h1>
                <h2>Register</h2>
                <form onSubmit={submitRegister} className={'reg-form'}>
                    <input type="text" name={'userName'} placeholder={'first name, 5 character min'} minLength={1}/>
                    <input type="password" name={'password'} placeholder={'password, 3 character min'} minLength={5}/>
                    <Button variant={'success'} type={'submit'}>Register</Button>
                </form>
                <div className={'relog'}><h3>Already registered? Login now</h3>
                    <Link to={'/login'}><p className={'link'}>Login</p></Link>
                </div>
                {props.info && props.info.name &&
                <div>
                    <p>User {props.info.name} successfully registered. Now You can log in.</p>
                </div>}
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
            info: state.userLogin.data
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Register);