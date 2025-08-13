import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>NexusShop</h3>
            <p>Your premier destination for premium tech products with a sleek dark theme experience.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Info</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> 123 Tech Street, San Francisco</li>
              <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
              <li><i className="fas fa-envelope"></i> info@nexushop.com</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 NexusShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;