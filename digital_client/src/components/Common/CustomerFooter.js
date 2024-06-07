import React from 'react'
import { Link } from "react-router-dom";

function CustomerFooter() {
  return (
    <>
     <footer className="customer-products-footer">
        <div className="customer-products-container">
          <div className="customer-products-footer-content">
            <div>
              <h4>MyStore</h4>
              <p>Your one-stop shop for everything you need</p>
            </div>
            {/* <div>
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div> */}
            <div>
              <h4>Contact Us</h4>
              <p>Email: support@mystore.com</p>
              <p>Phone: +91 00000 00000</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default CustomerFooter