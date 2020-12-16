import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from './Home';

//unit test
test('testing for text to be in document', () => {
  render(<Home />);
  const text = screen.getByText(/SEARCH FOR:/i);
  expect(text).toBeInTheDocument();
});


