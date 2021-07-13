import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('<HomePage />', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
