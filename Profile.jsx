
import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile-cont'>
      <div>
        <img src="https://plus.unsplash.com/premium_photo-1663047268243-87990849fcb9?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" />
        <h1>Pranav Singh</h1>
      </div>
      <button>Sign Out</button>
    </div>
  );
}

export default Profile;
