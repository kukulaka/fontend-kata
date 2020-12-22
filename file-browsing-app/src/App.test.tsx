import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('Basic test to make sure things are working', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the heading', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find('h1').text()).toBe('File Explorer');
});