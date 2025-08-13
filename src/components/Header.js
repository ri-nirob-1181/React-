import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <a href="/" className="logo">
          <i className="fas fa-bolt"></i>
          NexusShop
        </a>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">Categories</a></li>
            <li><a href="/">Deals</a></li>
            <li><a href="/">About</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <div className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">3</span>
          </div>
          <div className="user-icon">
            <i className="fas fa-user"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;