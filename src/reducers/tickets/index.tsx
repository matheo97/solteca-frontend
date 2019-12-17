import * as actions from '../../shared/constants/actions';
import initState from './initState';
import Parking from 'types';

interface Payload {
  activeTickets: Parking.Ticket[];
  oldTickets: Parking.Ticket[];
}
function ticketsReducer(
  state: Parking.TicketsState = initState,
  { type, payload }: { type: string, payload: Payload },
) {
  switch(type) {
    case actions.LOAD_ACTIVE_TICKETS: {
      return {
        ...state,
        activeTickets: state.activeTickets.concat(payload.activeTickets),
      };
    }
    case actions.LOAD_OLD_TICKETS: {
      return {
        ...state,
        oldTickets: state.oldTickets.concat(payload.oldTickets),
      };
    }
    default: {
      return state;
    } 
  }
}

export default ticketsReducer;