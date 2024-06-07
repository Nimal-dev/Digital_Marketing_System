import React from 'react';
import { Link, useNavigate } from "react-router-dom";


function CustomerNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userdata');
    navigate('/');
  };

  return (
    <header className="customer-navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">MyStore</h1>
        <nav>
          <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><a href="#" onClick={handleLogout}>Log Out</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default CustomerNavbar;
