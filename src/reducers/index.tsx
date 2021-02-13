import { combineReducers } from 'redux';
import tickets from './tickets';
import company from './company';
import Solteca from 'types';

const reducersMappingObject: Solteca.AllReducersTypes = {
  tickets,
  company,
};

const allReducers = combineReducers(reducersMappingObject);

export default (
  state: Solteca.FullState | Solteca.EmptyState | undefined,
  action: Solteca.Action
) => allReducers(state, action as never);
