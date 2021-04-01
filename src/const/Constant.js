import React from "react";
// import User from "../components/User";
// import ChangePassword from "../components/ChangePassword";
// import DeleteUser from "../components/DeleteUser";
// import EditUser from "../components/EditUser";
// import Roles from "../components/Roles";

//export const urlApiAccount = 'https://webaccounting.herokuapp.com/account';
export const urlApiAccount = 'http://localhost:8080';

//export const pages = {
    // home : <User/>,
    // password: <ChangePassword/>,
    // delete: <DeleteUser/>,
    // edit: <EditUser/>,
    // roles: <Roles/>
//};
export const publisherRadio = 'publisherRadio';
export const authorRadio = 'authorRadio';
export const isbnRadio = 'isbnRadio';
export const all = 'all';

export const errorMessage = 'Something went wrong - error: '

export const handleResponseHeader = (response) => {
    if(response.headers.get('X-Token')) {
        localStorage.setItem('user_t', response.headers.get('X-Token'));
    }
    return response;
};

export const handleRequestHeaders = () => {
    const _token = localStorage.getItem('user_t');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Token', `${_token}`);
    return headers
};

