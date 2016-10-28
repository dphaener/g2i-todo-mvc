// Vendor
import { expect } from 'chai';
import { fromJS } from 'immutable';

// Local
import todos, { defaultState, findTodoIndex } from './todos';

const allTodos = fromJS([
  { id: 0, value: 'Make an app', completed: true },
  { id: 1, value: 'Do something else', completed: false },
  { id: 2, value: 'Test things', completed: false }
]);

describe('#findTodoIndex', () => {
  it('finds the index of the todo', () => {
    const todo = { id: 2 };
    const result = findTodoIndex(allTodos, todo);
    expect(result).to.eql(2);
  });
});

describe('todos reducer', () => {
  context('ADD_TODO', () => {
    it('adds a new todo to the list', () => {
      const expectedNew = {
        id: 3,
        value: 'Test the reducers',
        completed: false
      };
      const action = {
        type: 'ADD_TODO',
        todo: { todo: 'Test the reducers' }
      };
      const result = todos(allTodos, action).toJS();
      expect(result[3]).to.eql(expectedNew);
    });
  });

  context('REMOVE_TODO', () => {
    it('removes the todo from the list', () => {
      const expected = [
        { id: 0, value: 'Make an app', completed: true },
        { id: 2, value: 'Test things', completed: false }
      ];
      const action = {
        type: 'REMOVE_TODO',
        todo: { id: 1, value: 'Do something else' }
      };
      const result = todos(allTodos, action).toJS();
      expect(result).to.eql(expected);
    });
  });

  context('TOGGLE_TODO', () => {
    it('completes the todo', () => {
      const action = {
        type: 'TOGGLE_TODO',
        todo: { id: 0 }
      };
      const result = todos(defaultState, action).toJS();
      expect(result[0].completed).to.be.true;
    });
  });

  context('EDIT_TODO', () => {
    it('updates the todo value', () => {
      const action = {
        type: 'EDIT_TODO',
        todo: { id: 0 },
        value: 'This has been edited'
      };
      const result = todos(defaultState, action).toJS();
      expect(result[0].value).to.eq('This has been edited');
    });
  });

  context('COMPLETE_ALL', () => {
    it('completes all the todos', () => {
      const action = { type: 'COMPLETE_ALL' };
      const result = todos(allTodos, action).toJS();
      result.forEach(todo => {
        expect(todo.completed).to.be.true;
      });
    });
  });

  context('CLEAR_COMPLETED', () => {
    it('removes completed todos from the list', () => {
      const action = { type: 'CLEAR_COMPLETED' };
      const result = todos(allTodos, action).toJS();
      const expected = [
        { id: 1, value: 'Do something else', completed: false },
        { id: 2, value: 'Test things', completed: false }
      ];
      expect(result).to.eql(expected);
    });
  });
});
