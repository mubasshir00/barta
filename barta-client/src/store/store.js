import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");

//to combine all reducer root reducers
const rootReducers = combineReducers({
  auth: authReducer,
  alert : alertReducer
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
