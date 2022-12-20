import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const navbarRef = useRef<HTMLUListElement>(null);

  const handleClickHamburger = (e: React.MouseEvent<HTMLButtonElement>) => {
    navbarRef.current?.classList.toggle('active');
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <h1 className="navbar-title">
        <Link to="/">Shop-ly</Link>
      </h1>
      <button className="hamburger" onClick={handleClickHamburger}>
        <span className="hamburger-item"></span>
        <span className="hamburger-item"></span>
        <span className="hamburger-item"></span>
      </button>
      <ul className="navbar-list">
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
