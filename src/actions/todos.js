export const addTodo = (todo) => ({ type: 'ADD_TODO', todo });
export const removeTodo = (todo) => ({ type: 'REMOVE_TODO', todo });
export const toggleTodo = (todo) => ({ type: 'TOGGLE_TODO', todo });
export const editTodo = (todo, value) => ({ type: 'EDIT_TODO', todo, value });
export const completeAll = () => ({ type: 'COMPLETE_ALL' });
export const clearCompleted = () => ({ type: 'CLEAR_COMPLETED' });
export const setFilter = (filter) => ({ type: 'SET_FILTER', filter });
