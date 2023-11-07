import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home/Home';

test('renders Home component', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
