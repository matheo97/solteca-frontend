// import { LOAD_OLD_TICKETS } from '../../shared/constants/actions';
import rp from 'request-promise';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { LOAD_ACTIVE_TICKETS } from '../../shared/constants/actions';

const loadTickets = async (dispatch: Dispatch<AnyAction | {}>) => {
  dispatch({
    type: LOAD_ACTIVE_TICKETS,
    payload: {},
  })
  try {
    const response = await rp('http://localhost:5000/api/paths/tickets');
    dispatch({
      type: LOAD_ACTIVE_TICKETS,
      payload: response,
    })
    console.log('response', response); 
  } catch (error) {
    console.error(error);
    dispatch({
      type: LOAD_ACTIVE_TICKETS,
      payload: {},
    })
  }
};

export default loadTickets;