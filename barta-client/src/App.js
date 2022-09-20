import axios from 'axios';
import { gapi } from 'gapi-script';
import React, { useEffect } from 'react'
import {GoogleLogin} from "react-google-login";
import { baseURL } from './library/baseURL';
import FacebookLogin from "react-facebook-login";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from './Auth/Login';
import Dashboard from './Dashboard/Dashboard';
import { createBrowserHistory } from "history";

const App = () =>{

  return (
    <Router>
      <Switch>
        <Route render={true} exact path="/dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/">
          <Login />
        </Route>

        <Redirect to="/dashboard" />
      </Switch>
    </Router>
  );
}

export default App