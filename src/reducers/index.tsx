import { combineReducers } from 'redux';
import tickets from './tickets';
import company from './company';
import Parking from 'types';

const reducersMappingObject: Parking.AllReducersTypes = {
  tickets,
  company,
};

const allReducers = combineReducers(reducersMappingObject);

export default (
  state: Parking.FullState | Parking.EmptyState | undefined, 
  action: Parking.Action,
) => allReducers(state, (action as never));