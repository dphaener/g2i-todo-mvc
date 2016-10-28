// Vendor
import React, { PropTypes } from 'react';
import withHandlers from 'recompose/withHandlers';

// Local
import { formHandler } from '../lib/utils';

// Styles
import './NewTodo.css';

const TodoForm = ({ handleSubmit, addTodo }) =>
  <form className="new-todo" onSubmit={handleSubmit}>
    <input name="todo" placeholder="New Todo..." />
  </form>

const NewTodo = withHandlers({
  handleSubmit: props => event => formHandler(event, props.addTodo)
})(TodoForm);

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default NewTodo
