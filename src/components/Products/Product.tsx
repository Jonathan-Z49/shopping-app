import React, { useContext, useEffect } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { DataContext } from '../../contexts/DataContext';
import LoadingSpinner from '../LoadingSpinner';
import ItemCard from './ItemCard';

const Product = () => {
  const { data, setData } = useContext(DataContext);
  const { cart, setCart } = useContext(CartContext);

  const handleClickCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
    const idOfTarget = (e.currentTarget.parentNode as HTMLDivElement).getAttribute(
      'data-product-id',
    );

    const itemIndex = cart.checkoutItems.findIndex(
      (item) => item.id == Number(idOfTarget),
    );

    if (itemIndex > -1) {
      const cartClone = structuredClone(cart);
      cartClone.checkoutItems[itemIndex].quantity += 1;
      cartClone.totalItems += 1;
      setCart(cartClone);
    } else {
      const newItem = data.products.find((item) => item.id == Number(idOfTarget));
      if (newItem) {
        newItem.quantity = 0;
        setCart((prevState) => ({
          checkoutItems: [...prevState.checkoutItems, newItem],
          totalItems: prevState.totalItems + 1,
        }));
      }
    }
  };

  useEffect(() => {
    if (!data.isLoaded) {
      fetch('https://fakestoreapi.com/products/category/electronics?limit=5')
        .then((res) => res.json())
        .then((json) => {
          const newData: Product[] = json.map((e: Product) => ({ ...e, quantity: 0 }));
          setData({
            isLoaded: true,
            products: newData,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [data]);

  return (
    <main className="products">
      {data.isLoaded ? (
        data.products.map((item) => {
          return (
            <ItemCard product={item} handleClick={handleClickCheckout} key={item.id} />
          );
        })
      ) : (
        <LoadingSpinner />
      )}
    </main>
  );
};

export default Product;
