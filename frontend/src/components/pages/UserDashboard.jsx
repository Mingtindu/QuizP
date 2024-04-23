import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './UserDashboard.css'
const UserDashboard = () => {
    const user ={
        photo:"hihi",
        name:"Mingtindu Sherpa"
    }
  return (
    <div className="user-dashboard">
      <div className="user-info">
        <img src={user.photo} alt="User" className="user-photo" />
        <h2 className="user-name">{user.name}</h2>
      </div>
      <div className="play-option">
        <Link to="/play" className="play-link">
          Play Quiz
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
