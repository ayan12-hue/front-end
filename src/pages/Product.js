
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  const handleAddToCart = () => {
    alert(`Product ${id} added to cart!`);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Product {id}</h1>
      <img src="/placeholder.jpg" alt="Product" />
      <p>Description for product {id}</p>
      <p>₨ {id * 1000}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
