import { render, screen } from '@testing-library/react';
import App from './App';

test('renders in header myMetronome', () => {
  render(<App />);
  const headerText = screen.getByText(/myMetronome/i);
  expect(headerText).toBeInTheDocument();
});
