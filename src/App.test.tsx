import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from "./context/store";

describe("App component tests", () => {
  const setup = () => render(<Provider store={store}><App /></Provider>);

  test('renders header with text app', () => {
    setup();
    const headerElement = screen.getByRole('heading', {  name: /^app$/i});
    expect(headerElement).toBeInTheDocument();
  });
})
