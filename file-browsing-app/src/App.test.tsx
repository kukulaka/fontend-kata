import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('Basic test to make sure things are working', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
  const actual = 1;
  const expected = 1;
  expect(actual).toBe(expected);
});
