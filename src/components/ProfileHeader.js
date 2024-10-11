import React from 'react';

const ProfileHeader = ({ user }) => {
  return (
    <div className="profile-header">
      <img src={user.coverPhoto} alt="Cover" className="cover-photo" />
      <img src={user.profilePicture} alt={`${user.name}'s profile`} className="profile-picture" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default ProfileHeader;