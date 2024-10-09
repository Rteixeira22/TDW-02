// home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importar jest-dom para ter matchers adicionais
import HomePage from '../pages/index.js'; 


test('renders Home component', () => {
  render( <Home /> );
  const homeElement = screen.getByText("Test c/ jest");
  expect(homeElement).toBeInTheDocument();
});