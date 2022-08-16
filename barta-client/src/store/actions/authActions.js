import * as api from '../../api';
//
export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) =>{
    return {
        login : (userDatils,history) => dispatch(login(userDatils,history)),
        register : (userDatils,history) =>
            dispatch(register(userDatils,history)),
    }
}

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

        } else {
            const {userDatils} = response?.data;
            localStorage.setItem("user",JSON.stringify(userDatils));

            dispatch(setUserDetails(userDatils));
            history("/dashboard");
        }
    }
}


const register = (userDatils, history) => {
  return async dispatch => {
    const response = await api.register(userDatils);
    console.log({ response });
    if (response.error) {
    } else {
      const { userDatils } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDatils));

      dispatch(setUserDetails(userDatils));
      history("/dashboard");
    }
  };
};
