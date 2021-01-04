import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/reducers";
import thunk from "redux-thunk";
const enhancers = [applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];

const store = createStore(
    rootReducer,
    // compose(enhancers)
    applyMiddleware(thunk)
);
  export default store;
