import React from 'react';
// Importing the render method from the @testing-library/react library
import { render } from '@testing-library/react';
// Importing the Home component from the pages directory
import Home from '../pages/index';

// Defining a test case named 'renderiza corretamente'
test('renderiza corretamente', () => {
  // Rendering the Home component and destructuring the asFragment method from the result
  const { asFragment } = render(<Home />);
  // Asserting that the rendered output matches the snapshot
  expect(asFragment()).toMatchSnapshot();
});