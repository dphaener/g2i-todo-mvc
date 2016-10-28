// Vendor
import React, { PropTypes } from 'react';

// Local
import Todo from './Todo';

const TodoList = ({ actions, todos }) =>
  <div>
    { todos.map(todo => <Todo key={todo.id} todo={todo} actions={actions} />) }
  </div>

TodoList.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
};

export default TodoList;
