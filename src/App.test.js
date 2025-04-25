import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main Products heading and Add Products button', () => {
  render(<App />);
  
  const heading = screen.getByTestId('main-heading');
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(/products/i);

  const addButton = screen.getByRole('button', { name: /add products/i });
  expect(addButton).toBeInTheDocument();

  const emptyText = screen.getByText(/no products found/i);
  expect(emptyText).toBeInTheDocument();
});