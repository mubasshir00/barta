import React from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import authReducer from './reducers/authReducer';


const rootReducer = combineReducers({
    auth:authReducer,
    
})

const loadFromLocalStorage = () =>{
    try {
      const stateStre = localStorage.getItem('user');
      console.log({stateStre});
      const auth = JSON.parse(stateStre)
      return stateStre ? auth : undefined;
    } catch(e){
        return undefined;
    }
}

const persistedStore = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedStore,
  composeWithDevTools(applyMiddleware(thunk)),
  
);

const saveTolocalStorage = (state) => {
    try {
        localStorage.setItem('user',JSON.stringify(state));
    } catch(e){
        console.log(e);
    }
};

store.subscribe(()=>{
    saveTolocalStorage(store.getState());
})

export default store ;