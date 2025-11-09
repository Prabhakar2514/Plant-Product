import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQty, decreaseQty, deleteItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function CartPage() {
  const { items, totalItems, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>

      <div className="cart-container">
        {items.map(p => (
          <div key={p.id} className="cart-item">
            <img src={p.img} alt={p.name} width="60" />
            <h4>{p.name}</h4>
            <p>${p.price}</p>
            <div>
              <button onClick={() => dispatch(decreaseQty(p.id))}>-</button>
              <span>{p.quantity}</span>
              <button onClick={() => dispatch(increaseQty(p.id))}>+</button>
            </div>
            <button onClick={() => dispatch(deleteItem(p.id))}>Delete</button>
          </div>
        ))}
      </div>

      <button onClick={() => alert("Checkout Coming Soon!")}>Checkout</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </>
  );
}
