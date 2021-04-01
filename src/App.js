import './App.css';
import {Route, Switch} from "react-router-dom";
import React from "react";
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import Main from "./components/Main";
import UserArea from "./components/UserArea";
import AdminArea from "./components/AdminArea";

function App() {
  return (
      <Switch>
        <Route path={'/login'} exact component={Login}/>
        <Route path={'/register'} component={Register}/>
        <Route path={'/user'} component={UserArea}/>
        <Route path={'/admin'} component={AdminArea}/>
        <Route component={Main}/>
      </Switch>
  )
}

export default App;
