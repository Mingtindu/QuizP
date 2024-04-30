// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import './Navbar.css'; // Import the CSS file for styling
import nav_img from '../Images/quiz.jpg'
import user_icon from '../Images/user.png'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/dashboard" className="logo"><img src={nav_img} alt="" /></Link>
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
              <img src={user_icon} alt="" ></img>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
