// import { LOAD_OLD_TICKETS } from '../../shared/constants/actions';
import { AnyAction } from 'redux';
import { LOAD_ACTIVE_TICKETS } from '../../shared/constants/actions';

const loadTickets = () => async (
  dispatch: (x: AnyAction | {}) => void
): Promise<void> => {
  dispatch({
    type: LOAD_ACTIVE_TICKETS,
    payload: {},
  });
  try {
  } catch (error) {
    console.error(error);
    dispatch({
      type: LOAD_ACTIVE_TICKETS,
      payload: {},
    });
  }
};

export default loadTickets;
