import { render, screen } from '@testing-library/react';
import SuggestPage from './SuggestPage';

test('<SuggestPage />', () => {
  render(<SuggestPage />);
  const linkElement = screen.getByText(/Suggest/i);
  expect(linkElement).toBeInTheDocument();
});
