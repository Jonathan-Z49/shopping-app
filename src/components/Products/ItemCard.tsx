import React from 'react';

interface Props {
  product: Product;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ItemCard = (props: Props) => {
  return (
    <div className="product-item-card" data-product-id={props.product.id}>
      <div className="product-item-image-container" title={props.product.title}>
        <img className="product-item-image" src={props.product.image} alt="Product" />
      </div>
      <p className="product-item-title" title={props.product.title}>
        {props.product.title}
      </p>
      <p className="product-item-price">${props.product.price}</p>
      <button className="cart-add-btn" onClick={props.handleClick}>
        Add to cart
      </button>
    </div>
  );
};

export default ItemCard;
