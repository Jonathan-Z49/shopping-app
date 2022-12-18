import React, { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';

const Checkout = () => {
  const { cart, dispatchCart } = useContext(CartContext);

  const handleCartUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    const idOfTarget = (e.currentTarget.parentNode as HTMLDivElement).getAttribute(
      'data-product-id',
    );

    const itemInCart = cart.checkoutItems.find(
      (item) => item.id == Number(idOfTarget),
    ) as Product;

    if (e.currentTarget.classList.contains('add')) {
      dispatchCart({ type: 'ADD_TO_CART', payload: itemInCart });
    }

    if (e.currentTarget.classList.contains('subtract')) {
      dispatchCart({ type: 'SUBTRACT_FROM_CART', payload: itemInCart });
    }

    if (e.currentTarget.classList.contains('delete')) {
      dispatchCart({ type: 'DELETE_FROM_CART', payload: itemInCart });
    }
  };

  return (
    <main className="checkout">
      {cart.totalItems > 0 && <h1>Subtotal: ${cart.totalPrice}</h1>}
      {cart.totalItems > 0 ? (
        cart.checkoutItems.map((item) => (
          <CartItem key={item.id} cartItem={item} onClick={handleCartUpdate} />
        ))
      ) : (
        <h1> Your cart is empty. :&#40;</h1>
      )}
    </main>
  );
};

export default Checkout;
