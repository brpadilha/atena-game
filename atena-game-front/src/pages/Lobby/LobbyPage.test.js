import { render, screen } from '@testing-library/react';
import LobbyPage from './LobbyPage';

test('<LobbyPage />', () => {
  render(<LobbyPage />);
  const linkElement = screen.getByText(/Lobby/i);
  expect(linkElement).toBeInTheDocument();
});
