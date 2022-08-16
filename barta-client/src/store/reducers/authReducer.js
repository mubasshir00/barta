import { authActions } from "../actions/authActions";

//initial state in store
const initState = {
  userDetails: null,
};

// responsible for auth action
const reducer = (state = initState, action) => {
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails : action.userDetails
      };
    default:
      return state;
  }
};

export default reducer;
