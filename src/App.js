// Vendor
import React, { PropTypes } from 'react';

// Local
import reduxConnector from './lib/reduxConnector';
import NewTodo from './components/newTodo';
import TodoList from './components/TodoList';
import Footer from './components/footer';

// Actions
import * as actions from './actions/todos';

// Styles
import './App.css';

const filterTodos = (filter, todos) => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
}

export const App = ({ todos, actions, todoFilter }) => {
  const filteredTodos = filterTodos(todoFilter.filter, todos);

  return (
    <div className="App">
      <NewTodo addTodo={actions.addTodo} />
      <TodoList todos={filteredTodos} actions={actions} />
      <Footer todos={filteredTodos} actions={actions} filter={todoFilter.filter} />
    </div>
  );
};

App.propTypes = {
  todos: PropTypes.array.isRequired,
  todoFilter: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default reduxConnector(
  ['todos', 'todoFilter'],
  { ...actions }
)(App);
