import axios from 'axios';
import { gapi } from 'gapi-script';
import React, { useEffect } from 'react'
import {GoogleLogin} from "react-google-login";
import { baseURL } from './library/baseURL';

const App = () => {
  const clientId = "109997036999-cgbq8dnanu9639ub6mdsp9ls9mm875af.apps.googleusercontent.com";
  useEffect(()=>{
    const initClient = () =>{
      gapi.client.init({
        clientId : clientId,
        scope:''
      })
    }
    gapi.load("client:auth2", initClient);
  })

  const onSuccess = async (res) =>{
    console.log('Login Success',res);
    const { Ca, accessToken, googleId, profileObj } = { ...res };
    console.log(Ca);
    const auth_body = {
      auth_id: googleId,
      auth_type: "google",
      country: "",
      device_token: accessToken,
      device_type: "web",
      email: profileObj.email,
      first_name: profileObj.givenName,
      last_name: profileObj.familyName,
      profile_pic: profileObj.imageUrl,
      state: "",
      username: profileObj.givenName + profileObj.familyName,
      deviceId: googleId,
    };
    axios.post(`${baseURL}/auth/login`,{
     auth_body
    }).then(res=>{
      console.log({res});
    });
  }
  const onFailure = (res) =>{
    console.log('Login Failed',res);
  }
  return (
    <div>
      <GoogleLogin
        clientId="109997036999-cgbq8dnanu9639ub6mdsp9ls9mm875af.apps.googleusercontent.com"
        buttonText="Login with google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      ></GoogleLogin>
    </div>
  );
}

export default App