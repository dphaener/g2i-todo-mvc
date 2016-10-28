// Vendor
import React, { PropTypes } from 'react';
import classnames from 'classnames';

// Styles
import './Todo.css';

const Todo = ({ todo, actions }) =>
  <div className={classnames({ complete: todo.completed })}>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => actions.toggleTodo(todo)}
    />
    { todo.value }
    <button onClick={() => actions.removeTodo(todo)}>Remove</button>
  </div>

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default Todo;
