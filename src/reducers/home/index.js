import * as actions from '../../shared/constants/actions';
import initState from './initState';

function homeReducer(
  state = initState,
  type, payload
) {
  switch(type) {
    case actions.LOAD_GAMES: {
      return {
        ...state,
        games: {
          ...payload.games,
        },
      };
    }
    default: {
      return state;
    } 
  }
}

export default homeReducer;