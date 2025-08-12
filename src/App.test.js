import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders the main heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Find Your Perfect Tool/i);
  expect(headingElement).toBeInTheDocument();
});
