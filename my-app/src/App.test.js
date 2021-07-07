import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, getByTestId } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test(`testing this out`, () => {
  const { getByTestId } = render(<App />);


  getByTestId(/strike-button/i) 
});
