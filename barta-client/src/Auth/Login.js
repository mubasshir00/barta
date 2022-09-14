import axios from 'axios';
import { gapi } from 'gapi-script';
import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { baseURL } from '../library/baseURL';
import FacebookLogin from "react-facebook-login";

const Login = () => {
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
       ...auth_body
      }).then(res=>{
        console.log({res});
      }).catch(e=>{
        console.log(e);
      });
    }
    const onFailure = (res) =>{
      console.log('Login Failed',res);
    }
    const responseFacebook =(response) =>{
      console.log(response);
      const { id, accessToken, email, name, picture, userID } = { ...response };
      const auth_body = {
        auth_id: id,
        auth_type: "facebook",
        country: "",
        device_token: accessToken,
        device_type: "web",
        email: email,
        first_name: name,
        last_name: "",
        profile_pic: picture.data.url,
        state: "",
        username: userID,
        deviceId: id,
      };
      axios
        .post(`${baseURL}/auth/login`, {
          ...auth_body,
        })
        .then(res => {
          console.log({ res });
        })
        .catch(e => {
          console.log(e);
        });
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
        <FacebookLogin appId="5233432096765060" autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
        />
      </div>
    );
}

export default Login