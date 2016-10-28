// Vendor
import React, { PropTypes } from 'react';
import withHandlers from 'recompose/withHandlers';

// Local
import { formHandler } from '../lib/utils';

const TodoForm = ({ handleSubmit, addTodo }) =>
  <form onSubmit={handleSubmit}>
    <input name="todo" />
  </form>

const NewTodo = withHandlers({
  handleSubmit: props => event => formHandler(event, props.addTodo)
})(TodoForm);

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default NewTodo
