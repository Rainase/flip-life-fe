import { thunk } from 'easy-peasy';
import navOptions from './navOptions';
import locations from './locations';
import user from './user';

export default {
  navOptions,
  locations,
  user,
  initialise: thunk(async (actions, payload, { dispatch }) => {
    // await dispatch.todos.fetchTodos();
  }),
};
