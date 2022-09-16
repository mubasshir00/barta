import axios from 'axios';
import { gapi } from 'gapi-script';
import React, { useEffect } from 'react'
import {GoogleLogin} from "react-google-login";
import { baseURL } from './library/baseURL';
import FacebookLogin from "react-facebook-login";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from './Auth/Login';
import Dashboard from './Dashboard/Dashboard';

const App = () =>{
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App