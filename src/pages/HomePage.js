import React from 'react';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  // Mock product data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Discover the Future of Shopping</h1>
          <p>Experience premium products with our exclusive dark-themed e-commerce platform. Shop with style and comfort.</p>
          <a href="#" className="btn">Shop Now</a>
          <a href="#" className="btn btn-secondary">View Deals</a>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;