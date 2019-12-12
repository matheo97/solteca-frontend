import { combineReducers } from 'redux';
import home from './home';

const reducersMappingObject = {
  home,
};

const allReducers = combineReducers(reducersMappingObject);

export default (state, action) => allReducers(state, action);