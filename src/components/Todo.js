// Vendor
import React, { PropTypes } from 'react';
import classnames from 'classnames';

// Styles
import './Todo.css';

const Todo = ({ todo, actions }) =>
  <div className={classnames({ complete: todo.completed, todo: true })}>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => actions.toggleTodo(todo)}
    />
    <span className="label">{ todo.value }</span>
    <button className="red" onClick={() => actions.removeTodo(todo)}>X</button>
  </div>

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default Todo;
