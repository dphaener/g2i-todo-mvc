// Vendor
import React, { PropTypes } from 'react';
import classnames from 'classnames';

// Styles
import './Footer.css';

const Footer = ({ todos, actions, filter }) => (
  <div className="footer">
    <span className="remaining">{ todos.filter(todo => !todo.completed).length } items remaining</span>
    <button
      className={classnames({ activeFilter: filter === 'all' })}
      onClick={() => actions.setFilter('all')}
    >
      All
    </button>
    <button
      className={classnames({ activeFilter: filter === 'active' })}
      onClick={() => actions.setFilter('active')}
    >
      Active
    </button>
    <button
      className={classnames({ activeFilter: filter === 'completed' })}
      onClick={() => actions.setFilter('completed')}
    >
      Completed
    </button>
  </div>
);

Footer.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired
};

export default Footer;
