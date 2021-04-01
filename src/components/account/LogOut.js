import React from 'react';
import {connect, useDispatch} from "react-redux";
import {userData} from "../../actions/AccountDataAction";
import {booksListData} from "../../actions/BookDataAction";
import {isAdmin} from "../../actions/IsLoginAction";

function LogOut(props) {
    const dispatch = useDispatch();
    const handleClick = () => {
        localStorage.setItem('user_t', '');
        dispatch(userData(null));
        dispatch(booksListData([]))
        dispatch(isAdmin(false));
    };

        return (
            <div>
                <button onClick={handleClick}>Logout</button>
            </div>
        )
    }


function mapStateToProps(state) {
    return {
        user: state.accountData.user
    }
}

export default connect(mapStateToProps)(LogOut);