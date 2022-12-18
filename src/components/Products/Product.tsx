import React, { useContext, useEffect } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { DataContext } from '../../contexts/DataContext';
import LoadingSpinner from '../LoadingSpinner';
import ItemCard from './ItemCard';

const Product = () => {
  const { data, setData } = useContext(DataContext);
  const { dispatchCart } = useContext(CartContext);

  const handleClickCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
    const idOfTarget = (e.currentTarget.parentNode as HTMLDivElement).getAttribute(
      'data-product-id',
    );

    const productItem = structuredClone(
      data.products.find((item) => item.id === Number(idOfTarget)),
    ) as Product;

    dispatchCart({ type: 'ADD_TO_CART', payload: productItem });
  };

  useEffect(() => {
    if (!data.isLoaded) {
      fetch('https://fakestoreapi.com/products/category/electronics?limit=5')
        .then((res) => res.json())
        .then((json) => {
          const newData: Product[] = json.map((e: Product) => ({
            ...e,
            quantity: 1,
            priceOfAllQuantity: e.price,
          }));

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
