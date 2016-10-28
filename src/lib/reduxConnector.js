import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default (keys, actions) => {
  return (component) => {
    return connect(state => {
      if (!keys) return {};
      if (keys && typeof keys === 'object') {
        return keys.reduce((prev, key) => {
          prev[key] = state[key].toJS();
          return prev;
        }, {});
      } else {
        return {
          [keys]: state[keys].toJS()
        };
      }
    }, dispatch => {
      return bindActionCreators({ ...actions }, dispatch);
    })(component);
  };
}
