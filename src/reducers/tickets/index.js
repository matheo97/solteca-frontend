import * as actions from '../../shared/constants/actions';
import initState from './initState';

function ticketsReducer(
  state = initState,
  type, payload
) {
  switch(type) {
    case actions.LOAD_TICKETS: {
      return {
        ...state,
        tickets: {
          ...payload.tickets,
        },
      };
    }
    case actions.LOAD_OLD_TICKETS: {
      return {
        ...state,
        oldTickets: {
          ...payload.oldTickets,
        },
      };
    }
    default: {
      return state;
    } 
  }
}

export default ticketsReducer;