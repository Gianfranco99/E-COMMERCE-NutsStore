import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/reducers";
import thunk from "redux-thunk";
//import {loadState, saveState} from "./localStorage.js"

import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' 

const persistConfig = { // configuration object for redux-persist
  key: 'root',
  storage, // define which storage to use
  whitelist: ['user',"loggedIn","productCart","auth"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export const  persistor = persistStore(store)
// store.subscribe( function () {
//   saveState(store.getState())
// })
  
  
