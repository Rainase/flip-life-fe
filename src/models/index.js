import { thunk } from 'easy-peasy';
import navOptions from './navOptions';
import locations from './locations';
import user from './user';
import gameUi from './gameUi';

export default {
  navOptions,
  locations,
  gameUi,
  user,
  initialise: thunk(async (actions, payload, { dispatch }) => {
    // await dispatch.todos.fetchTodos();
  }),
};
