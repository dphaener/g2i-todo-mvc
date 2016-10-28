// Vendor
import { fromJS } from 'immutable';

export const defaultState = fromJS({
  filter: 'all'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return state.set('filter', action.filter);
    default:
      return state;
  }
}
