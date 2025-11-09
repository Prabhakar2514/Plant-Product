import React from 'react';
import { Link } from 'react-router-dom';


export default function LandingPage() {
  return (
    <div className="landing" style={{ backgroundImage: "url('/background.jpg')" }}>
      <h1>GreenScape Plants</h1>
      <p>Welcome to GreenScape — your one-stop shop for beautiful indoor and outdoor houseplants.</p>
      <Link to="/products"><button>Get Started</button></Link>
    </div>
  );
}
