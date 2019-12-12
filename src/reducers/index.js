import { combineReducers } from 'redux';
import tickets from './tickets';

const reducersMappingObject = {
  tickets,
};

const allReducers = combineReducers(reducersMappingObject);

export default (state, action) => allReducers(state, action);