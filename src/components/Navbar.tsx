import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-title">
          <Link to="/">Shop-ly</Link>
        </li>
        <li className="navbar-link">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-link">
          <Link to="/products">Products</Link>
        </li>
        <li className="navbar-link">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="navbar-checkout">
          <Link to="/checkout">
            <span className="navbar-checkout-logo">
              <span className="material-symbols-outlined">shopping_bag</span>
            </span>
          </Link>
          {cart.totalItems > 0 && (
            <span className="navbar-checkout-amount">{cart.totalItems}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
