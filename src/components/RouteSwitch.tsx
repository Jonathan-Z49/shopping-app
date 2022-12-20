import { useReducer, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CartContext, initCartObject } from '../contexts/CartContext';
import { DataContext } from '../contexts/DataContext';
import { useCartReducer } from '../utils/cartReducer';
import Checkout from './Checkout/Checkout';
import Contact from './Contact/Contact';
import Footer from './Footer';
import Home from './Home/Home';
import Navbar from './Navbar';
import Product from './Products/Product';

const RouteSwitch = () => {
  const [data, setData] = useState<DataAPI>({ isLoaded: false, products: [] });
  const [cart, dispatchCart] = useReducer(useCartReducer, initCartObject);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <CartContext.Provider value={{ cart, dispatchCart }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route caseSensitive={false} path="/" element={<Home />} />
            <Route caseSensitive={false} path="/home" element={<Home />} />
            <Route caseSensitive={false} path="/products" element={<Product />} />
            <Route caseSensitive={false} path="/contact" element={<Contact />} />
            <Route caseSensitive={false} path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </DataContext.Provider>
  );
};

export default RouteSwitch;
