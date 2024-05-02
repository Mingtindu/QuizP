import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './UserDashboard.css';
import Navbar from '../Navbar';
import QuizSelectionPage from './QuizSelectionPage';
const UserDashboard = () => {

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  return (
    <div>
    
      <hr />
      <QuizSelectionPage></QuizSelectionPage>
      <hr />

    </div>
  );
};

export default UserDashboard;
