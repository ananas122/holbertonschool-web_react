import { render, screen } from '@testing-library/react';
import App from './App';

// Test that App renders without crashing
test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});

// Verify that App renders a div with the class App-header
test('renders a div with the class App-header', () => {
  render(<App />);
  const headerDiv = screen.getByRole('banner');
  expect(headerDiv).toBeInTheDocument();
  expect(headerDiv).toHaveClass('App-header');
});

// Verify that App renders a div with the class App-body
test('renders a div with the class App-body', () => {
  render(<App />);
  const bodyDiv = screen.getByTestId('app-body'); // make sure to add data-testid="app-body" to the div in App component
  expect(bodyDiv).toBeInTheDocument();
  expect(bodyDiv).toHaveClass('App-body');
});

// Verify that App renders a div with the class App-footer
test('renders a div with the class App-footer', () => {
  render(<App />);
  const footerDiv = screen.getByRole('contentinfo');
  expect(footerDiv).toBeInTheDocument();
  expect(footerDiv).toHaveClass('App-footer');
});
