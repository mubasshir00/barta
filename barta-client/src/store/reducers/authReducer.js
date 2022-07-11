import { authActions } from "../actions/authActions";

const initState = {
    userDetails : null,
}

const reducer = (state = initState,action) =>{
    switch(action.type){
        case "DUMMY" :
            return {
                ...state,
                userDetails: action.userDetails,
            }
        default:
            return state;
    }
}

export default reducer ;