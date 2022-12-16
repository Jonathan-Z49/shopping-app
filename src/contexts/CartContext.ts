import { createContext } from 'react';

export const CartContext = createContext<{
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
}>({
  cart: {
    checkoutItems: [],
    totalItems: 0,
  },
  setCart: () => {},
});
