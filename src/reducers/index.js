// Vendor
import { combineReducers } from 'redux';

// Local
import todos from './todos';
import todoFilter from './todoFilter';

export default combineReducers({
  todos,
  todoFilter
});
