import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch} from "react-router-dom";
import React from "react";
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import Main from "./components/Main";


function App() {
  return (
      <Switch>
        <Route path={'/login'} exact component={Login}/>
        <Route path={'/register'} component={Register}/>
        <Route path={'/home'} component={Main}/>
        <Route component={Main}/>
      </Switch>
  )
}

export default App;
