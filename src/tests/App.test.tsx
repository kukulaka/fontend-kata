import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import App from '../App';


// make sure things work
it('Basic test to make sure things are working', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

});

//is header being rendered?
it('renders the heading', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h1').text()).toBe(' File Explorer Kata');
});
