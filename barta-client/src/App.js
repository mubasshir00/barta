import axios from 'axios';
import { gapi } from 'gapi-script';
import React, { useEffect } from 'react'
import {GoogleLogin} from "react-google-login";
import { baseURL } from './library/baseURL';
import FacebookLogin from "react-facebook-login";
import { Route, Switch } from 'react-router-dom';
import Login from './Auth/Login';

const App = () =>{
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route
      </Switch>
    </div>
  )
}

export default App