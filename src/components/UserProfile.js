import React from 'react';

const UserProfile = ({ user, posts }) => {
  return (
    <div className="user-profile">
      <div className="banner">
        {/* می‌توانید از تصویر بنر استفاده کنید */}
        <img src="https://example.com/banner.jpg" alt="Banner" className="banner-image" />
      </div>
      <div className="profile-header">
        <img src={user.profilePicture} alt={`${user.name}'s profile`} className="profile-picture" />
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p className="bio">{user.bio}</p>
          <p className="stats">
            <span>{posts.length} Tweets</span>
          </p>
        </div>
      </div>
      <h3>Tweets:</h3>
      <ul className="post-list">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <li key={index} className="post-item">{post}</li>
          ))
        ) : (
          <p>No tweets available.</p>
        )}
      </ul>
    </div>
  );
};

export default UserProfile;