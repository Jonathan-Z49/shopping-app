import React from 'react';

interface Props {
  cartItem: Product;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CartItem = (props: Props) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image-container">
        <img className="cart-item-image" src={props.cartItem.image} alt="Product" />
      </div>
      <div className="cart-item-details" data-product-id={props.cartItem.id}>
        <p className="cart-item-details-title">{props.cartItem.title}</p>
        <p className="cart-item-details-price">${props.cartItem.priceOfAllQuantity}</p>
        <div className="cart-item-controls" data-product-id={props.cartItem.id}>
          <button className="cart-button subtract" onClick={props.onClick}>
            <span className="material-symbols-outlined">do_not_disturb_on</span>
          </button>
          <span className="cart-item-quantity">{props.cartItem.quantity}</span>
          <button className="cart-button add" onClick={props.onClick}>
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </div>
        <button className="cart-button delete" onClick={props.onClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
