//initial state in store
const initState = {
  userDetails: null,
};

// responsible for auth action
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "DUMMY":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
