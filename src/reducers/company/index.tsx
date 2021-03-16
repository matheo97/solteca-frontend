import * as actions from '../../shared/constants/actions';
import initState from './initState';
import Solteca from 'types';

interface Payload {
  companyState: Solteca.CompanyState;
}
function companyReducer(
  state: Solteca.CompanyState = initState,
  { type, payload }: { type: string, payload: Payload },
) {
  switch(type) {
    case actions.GET_INFO: {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return state;
    } 
  }
}

export default companyReducer;