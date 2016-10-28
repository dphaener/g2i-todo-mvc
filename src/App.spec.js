import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { App } from './App';
import * as actions from './actions/todos';
import { defaultState } from './reducers/todos';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App actions={actions} todos={defaultState.toJS()} />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
