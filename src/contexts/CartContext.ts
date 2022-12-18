import { createContext } from 'react';

export const initCartObject: Cart = {
  checkoutItems: [],
  totalItems: 0,
  totalPrice: 0,
};

export const CartContext = createContext<{
  cart: Cart;
  dispatchCart: React.Dispatch<ReducerAction>;
}>({
  cart: initCartObject,
  dispatchCart: () => {},
});
