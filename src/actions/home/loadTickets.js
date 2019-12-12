import { LOAD_GAMES } from '../../shared/constants/actions';

const loadGame = task => ({
  type: LOAD_GAMES,
  payload: task
});

export default loadGame;