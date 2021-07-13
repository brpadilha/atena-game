import { render, screen } from '@testing-library/react';
import PlayPage from './PlayPage';

test('<PlayPage />', () => {
  render(<PlayPage />);
  const linkElement = screen.getByText(/Play/i);
  expect(linkElement).toBeInTheDocument();
});
