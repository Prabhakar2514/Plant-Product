import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Header from '../components/Header';

const plants = [
  { id: 1, name: 'Snake Plant', price: 12, category: 'Indoor', img: '/snake.jpg' },
  { id: 2, name: 'Aloe Vera', price: 15, category: 'Medicinal', img: '/aloe.jpg' },
  { id: 3, name: 'Peace Lily', price: 18, category: 'Flowering', img: '/lily.jpg' },
  { id: 4, name: 'Spider Plant', price: 10, category: 'Indoor', img: '/spider.jpg' },
  { id: 5, name: 'Cactus', price: 8, category: 'Succulent', img: '/cactus.jpg' },
  { id: 6, name: 'Fern', price: 14, category: 'Outdoor', img: '/fern.jpg' }
];

export default function ProductListing() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAdd = (p) => dispatch(addToCart(p));

  return (
    <>
      <Header />
      <h2>Our Plants</h2>
      <div className="plant-grid">
        {plants.map(p => {
          const inCart = cartItems.find(i => i.id === p.id);
          return (
            <div key={p.id} className="plant-card">
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>${p.price}</p>
              <button disabled={!!inCart} onClick={() => handleAdd(p)}>
                {inCart ? "Added" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
