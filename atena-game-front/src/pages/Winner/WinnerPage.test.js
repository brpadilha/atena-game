import { render, screen } from '@testing-library/react';
import WinnerPage from './WinnerPage';

test('<WinnerPage />', () => {
  render(<WinnerPage />);
  const linkElement = screen.getByText(/Winner/i);
  expect(linkElement).toBeInTheDocument();
});
