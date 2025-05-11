
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Lactaunica</h1>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2].map(id => (
          <Link key={id} to={`/product/${id}`}>
            <div className="border p-4 rounded hover:shadow-lg">
              <img src="/placeholder.jpg" alt="Product" />
              <p>Product {id}</p>
              <p>₨ {id * 1000}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
