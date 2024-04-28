// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="logo">YourLogo</Link>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/play" className="navbar-link">Play</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/upcoming" className="navbar-link">Upcoming</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="navbar-link user-icon">
                <i className="fas fa-user"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
