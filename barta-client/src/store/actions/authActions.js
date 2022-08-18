import * as api from '../../api';
import { openAlertMessage } from './alertActions';
// action for set user_detailse . ei action auth reducer e ache
export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

//get action ta call hobe component e jekhane theke API call hocce ..
// Login Register e get actions call kora ache .
export const getActions = (dispatch) =>{
    return {
        login : (userDatils,history) => dispatch(login(userDatils,history)),
        register : (userDatils,history) =>
            dispatch(register(userDatils,history)),
    }
}

// set user details e action type get hbe
const setUserDetails = (userDatils) =>{
    return {
        type : authActions.SET_USER_DETAILS,
        userDatils,
    }
}

//api theke data niye setUserDetails e set korci
const login = (userDatils,history) =>{
    return async(dispatch) =>{
        const response = await api.login(userDatils);
        console.log({response});
        if(response.error){
          dispatch(openAlertMessage(response?.exception?.response?.data));
        } else {
            console.log(response?.data);
            const { email ,token,username} = response?.data;
            const userDetails = {
              mail : email,
              token : token,
              username:username
            }
            localStorage.setItem("user", JSON.stringify(userDetails));

            dispatch(setUserDetails(userDetails));
            history("/dashboard");
        }
    }
}


const register = (userDatils, history) => {
  return async dispatch => {
    const response = await api.register(userDatils);
    console.log({ response });
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { email, token, username } = response?.data;
      const userDetails = {
        mail: email,
        token: token,
        username: username,
      };
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      history("/dashboard");
    }
  };
};
