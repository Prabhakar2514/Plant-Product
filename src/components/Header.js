import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const total = useSelector(state => state.cart.totalItems);
  return (
    <header>
      <nav>
        <Link to="/products">Products</Link> | 
        <Link to="/cart"> Cart 🛒 ({total})</Link>
      </nav>
    </header>
  );
}
