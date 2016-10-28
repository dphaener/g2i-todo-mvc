// Vendor
import { fromJS } from 'immutable';

export const defaultState = fromJS([
  {
    id: 0,
    value: 'Make a Todo app',
    completed: false
  }
]);

export function findTodoIndex(todos, todo) {
  return todos.findIndex(item => item.get('id') === todo.id);
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.push(fromJS({
        id: state.maxBy(todo => todo.get('id')).get('id') + 1,
        value: action.todo.todo,
        completed: false
      }));
    case 'REMOVE_TODO':
      return state.filterNot(todo => todo.get('id') === action.todo.id);
    case 'TOGGLE_TODO': {
      const index = findTodoIndex(state, action.todo);
      const value = state.getIn([index, 'completed']);
      return state.setIn([index, 'completed'], !value);
    }
    case 'EDIT_TODO': {
      const index = findTodoIndex(state, action.todo);
      return state.setIn([index, 'value'], action.value);
    }
    case 'COMPLETE_ALL':
      return state.map(todo => todo.set('completed', true));
    case 'CLEAR_COMPLETED':
      return state.filterNot(todo => todo.get('completed'));
    default:
      return state;
  }
}
