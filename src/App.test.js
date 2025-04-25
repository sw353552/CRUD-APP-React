import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Products header and Add Products button', () => {
  render(<App />);
  
  const heading = screen.getByText(/products/i);
  expect(heading).toBeInTheDocument();

  const addButton = screen.getByRole('button', { name: /add products/i });
  expect(addButton).toBeInTheDocument();

  const emptyText = screen.getByText(/no products found/i);
  expect(emptyText).toBeInTheDocument();
});