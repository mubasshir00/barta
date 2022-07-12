import * as api from '../../api'
import { openAlertMessage } from './alertActions';

export const authActions = {
    SET_USER_DETAILS : 'AUTH.SET_USER_DETAILS',
};

export const getActions = (dispatch) =>{
    return {
        login : (userDetails,history) => dispatch(login(userDetails,history)),
        register: (userDetails,history) => dispatch(register(userDetails,history)),
        setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails))
    }
}

const setUserDetails = (userDetails) =>{
    return {
        type:authActions.SET_USER_DETAILS,
        userDetails,
    };
};

const login = (userDetails,history) =>{
    return async (dispatch) =>{
        const response = await api.login(userDetails);

        console.log(response);

        if(response.error){
            dispatch(openAlertMessage(response?.exception?.response?.data))
        } else {
            console.log(response?.data?.user);
            const {
              activeStatus,
              address,
              apartment,
              city,
              country,
              emailOrPhone,
              isAdmin,
              name,
              password,
              profilePic,
              userName,
              _id,
            } = response?.data?.user;
            const userDetails = {
              emailOrPhone: emailOrPhone,
              name: name,
              username: userName,
            };
            localStorage.setItem('user',JSON.stringify(userDetails));
            dispatch(setUserDetails(userDetails));
            history("/dashboard")
        }

    }
}

const register = (userDetails, history) => {
  return async dispatch => {
    const response = await api.register(userDetails);
    // console.log(response);
    if (response.error) {
        dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const {
        activeStatus,
        address,
        apartment,
        city,
        country,
        emailOrPhone,
        isAdmin,
        name,
        password,
        profilePic,
        userName,
        _id,
      } = response?.data?.status_message;
      const userDetails = {
        emailOrPhone : emailOrPhone,
        name: name,
        username:userName
      }
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      history("/dashboard");
    }
  };
};