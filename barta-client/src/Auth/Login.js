import axios from 'axios';
import { gapi } from 'gapi-script';
import React, { useEffect, useState } from 'react'
import GoogleLogin from 'react-google-login';
import { baseURL } from '../library/baseURL';
import FacebookLogin from "react-facebook-login";
import { getActions } from '../store/actions/authActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Login.css';
const Login = ({login}) => {

    const [googleLoginClick,setGoogleLoginClick] = useState(false);

    const history = useHistory();

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
      const userDetails = {
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
     await login(userDetails,history);
        
    }

    const handleClick = ()=>{
      setGoogleLoginClick(true);
    };

    const onFailure = (res) =>{
      console.log('Login Failed',res);
    }
    const responseFacebook =(response) =>{
      console.log(response);
      const { id, accessToken, email, name, picture, userID } = { ...response };
      const userDetails = {
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
       login(userDetails, history);
      // axios
      //   .post(`${baseURL}/auth/login`, {
      //     ...auth_body,
      //   })
      //   .then(res => {
      //     console.log({ res });
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });
    }
    return (
      <div className="login_container">
        <div style={{marginBottom:'10px'}}>
          Login With Google / Facebook
        </div>
        <div>
          <GoogleLogin
            clientId="109997036999-cgbq8dnanu9639ub6mdsp9ls9mm875af.apps.googleusercontent.com"
            buttonText="Login with google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            // isSignedIn={true}
          ></GoogleLogin>

          <FacebookLogin
            appId="659285952202319"
            autoLoad={true}
            fields="name,email,picture"
            // onClick={componentClicked}
            callback={responseFacebook}
          />
        </div>
      </div>
    );
}


const mapActionsToProps = (dispatch) =>{
  return {
    ...getActions(dispatch),
  }
}
export default connect(null,mapActionsToProps)(Login);
// export default Login