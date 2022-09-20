import * as api from '../../api'
export const authActions = {
    SET_USER_DETAILS :'AUTH.SET_USER_DETAILS'
};

export const getActions = (dispatch) =>{
    return {
        login : (userDetails,history) =>dispatch(login(userDetails,history)),
    }
}

const setUserDetails = (userDetails) =>{
    console.log({userDetails});
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails,
    }
}

const login = (userDetails,history)=>{
    return async(dispatch) =>{
        const response = await api.login(userDetails);
        console.log({response});
        if(response.error){
            // show error msge in alert
        } else {
            const {data} = response;
            localStorage.setItem("user", JSON.stringify(data));
            
            history.push("/dashboard");
            window.location.reload(true);
            dispatch(setUserDetails(localStorage.getItem("user")));
        }
    }
}