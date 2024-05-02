// UserSection.js

import React from 'react';
import './UserSection.css'; // Importing CSS file for styling

const UserSection = ({ user }) => {
  return (
    <div className="user-section">
      <img src="" alt="User" className="user-photo" />
      <div className="user-info">
        <h2>Mingtindu Sherpa</h2>
        <p>Hello Ming how are you today</p>
        {/* Add other user details here */}
      </div>
    </div>
  );
};

export default UserSection;
