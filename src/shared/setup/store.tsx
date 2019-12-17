import { createStore, applyMiddleware, compose } from "redux";
import Parking from '../../types';
import rootReducer from "../../reducers"
import thunk from 'redux-thunk';

declare let window: Parking.StoreWindow;

let composeEnhancers = compose;

// This is for the redux-devtools-extension chrome extension https://github.com/zalmoxisus/redux-devtools-extension
if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}
const composed = composeEnhancers(applyMiddleware(thunk));
{/* 
  //@ts-ignore */}
export default createStore(rootReducer, {}, composed);
