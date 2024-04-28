import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './UserDashboard.css';
import Navbar from '../Navbar';
const UserDashboard = () => {

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
};

export default UserDashboard;
