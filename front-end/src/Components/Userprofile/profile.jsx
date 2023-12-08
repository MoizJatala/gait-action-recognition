// UserProfile.jsx
import React, { useState } from 'react';
import './profile.css';

const UserProfile = (props) => {
  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleProfile = () => {
    // Toggle the visibility of the user information container
    setShowUserInfo(!showUserInfo);
  };

  return (
    <div className="user-profile-container">
      <img
        className="profile-image"
        src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Free-Download.png"
        alt="User Profile"
        onClick={handleProfile}
      />

      {showUserInfo && (
        <div className="user-info">
          <h4>Email: {props.email}</h4>
          <h4>Password: {props.password}</h4>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
