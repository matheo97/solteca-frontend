import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../../reducers";
import thunk from 'redux-thunk';

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}
const composed = composeEnhancers(applyMiddleware(thunk));

export default createStore(rootReducer, {}, composed);
