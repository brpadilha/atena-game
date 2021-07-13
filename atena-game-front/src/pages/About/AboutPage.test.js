import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

test('<AboutPage />', () => {
  render(<AboutPage />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
