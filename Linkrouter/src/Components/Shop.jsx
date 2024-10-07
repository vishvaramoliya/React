import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Shop() {
  const navigate = useNavigate();
  const params = useParams(); 

  const btn = () => {
    navigate("/", { state: { name: 'Vishwa' } });
  };

  return (
    <div>
      <h1>Shop Page</h1>
      <div className="div1">
        <h1>{params.id && `Shop ID: ${params.id}`}</h1>

        <button onClick={btn}>Go Home</button>

        <Link to="/" className="link">Home</Link>
        <Link to="/shop" className="link">Shop</Link>
        <Link to="/contact" className="link">Contact</Link>
      </div>
    </div>
  );
}
