import { render, screen } from '@testing-library/react';
import App from './App';

test('Add list component is showing in all cases', () => {
  render(<App />);
  const linkElement = screen.getByText(/^\+ Add .*(list)$/i);
  expect(linkElement).toBeInTheDocument();
});
