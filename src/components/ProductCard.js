import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image" 
      />
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <div className="product-actions">
          <button className="btn add-to-cart">Add to Cart</button>
          <button className="btn view-details">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;