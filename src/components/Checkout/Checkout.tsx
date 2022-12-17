import React, { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleCartUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    const idOfTarget = (e.currentTarget.parentNode as HTMLDivElement).getAttribute(
      'data-product-id',
    );

    const itemIndex = cart.checkoutItems.findIndex(
      (item) => item.id == Number(idOfTarget),
    );

    if (itemIndex > -1 && e.currentTarget.classList.contains('add')) {
      const cartClone = structuredClone(cart);

      cartClone.checkoutItems[itemIndex].quantity += 1;

      setCart((prevState) => ({
        checkoutItems: cartClone.checkoutItems,
        totalItems: prevState.totalItems + 1,
        totalPrice:
          prevState.totalPrice + Number(cartClone.checkoutItems[itemIndex].price),
      }));
    }

    if (itemIndex > -1 && e.currentTarget.classList.contains('subtract')) {
      const cartClone = structuredClone(cart);

      if (cartClone.checkoutItems[itemIndex].quantity <= 1) {
        setCart((prevState) => ({
          checkoutItems: cartClone.checkoutItems.filter(
            (item) => item.id !== Number(idOfTarget),
          ),
          totalItems: prevState.totalItems - 1,
          totalPrice:
            prevState.totalPrice - Number(cartClone.checkoutItems[itemIndex].price),
        }));
      } else {
        cartClone.checkoutItems[itemIndex].quantity -= 1;

        setCart((prevState) => ({
          checkoutItems: cartClone.checkoutItems,
          totalItems: prevState.totalItems - 1,
          totalPrice:
            prevState.totalPrice - Number(cartClone.checkoutItems[itemIndex].price),
        }));
      }
    }
  };

  return (
    <main className="checkout">
      {cart.checkoutItems.map((item) => (
        <CartItem key={item.id} cartItem={item} onClick={handleCartUpdate} />
      ))}
    </main>
  );
};

export default Checkout;
