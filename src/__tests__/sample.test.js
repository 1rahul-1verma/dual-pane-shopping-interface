import App from '../App';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

test('Should render Welcome to the shop', async () => {
  render(<App />);

  screen.getByText('Welcome to the shop');
});

test('Should render empty cart initially', async () => {
  render(<App />);

  const nonExistingElement = screen.queryByTestId('cart-item-1');
  expect(nonExistingElement).not.toBeInTheDocument();
});

test('should add item to cart on item click', async () => {
  render(<App />);

  const itemToSelect = screen.getByTestId('item-1');

  fireEvent.click(itemToSelect);

  screen.getByTestId('cart-item-1');
});
