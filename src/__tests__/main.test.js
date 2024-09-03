import { Shop } from '../components/Shop';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('react', () => {
  const actualReact = jest.requireActual('react');
  return {
    ...actualReact,
    useEffect: jest.fn(() => {
      // Do nothing
    }),
  };
});

test('Should render Shopping Cart!', async () => {
  render(<Shop />);

  screen.getByText('Shopping Cart!');
});

test('Should render empty cart initially', async () => {
  render(<Shop />);

  const nonExistingElement = screen.queryByTestId('cart-item-1');
  expect(nonExistingElement).not.toBeInTheDocument();
});

test('should add item to cart on item click', async () => {
  render(<Shop />);

  const itemToSelect = screen.getByTestId('item-1');

  fireEvent.click(itemToSelect);

  screen.getByTestId('cart-item-1');
});

test('Should remove item from cart', async () => {
  render(<Shop />);

  const itemToSelect = screen.getByTestId('item-1');

  fireEvent.click(itemToSelect);

  screen.getByTestId('cart-item-1');

  const removeButton = screen.getByTestId('remove-item-1');

  fireEvent.click(removeButton);

  const nonExistingElement = screen.queryByTestId('remove-item-1');
  expect(nonExistingElement).not.toBeInTheDocument();
});

test('Should remove item from cart if item is selected again from select list', async () => {
  render(<Shop />);

  const itemToSelect1 = screen.getByTestId('item-1');
  const itemToSelect2 = screen.getByTestId('item-2');

  fireEvent.click(itemToSelect1);
  fireEvent.click(itemToSelect2);

  screen.getByTestId('cart-item-1');
  screen.getByTestId('cart-item-2');

  fireEvent.click(itemToSelect2);

  screen.getByTestId('cart-item-1');

  const nonExistingElement = screen.queryByTestId('cart-item-2');
  expect(nonExistingElement).not.toBeInTheDocument();
});
