import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import UserProfile from './components/UserProfile';
import CreatePost from './components/CreatePost';
import DirectMessages from './components/DirectMessages';
import Notifications from './components/Notifications';
import FollowersList from './components/FollowersList';
import Search from './components/Search';
import MediaPost from './components/MediaPost';
import Poll from './components/Poll';
import CreatePoll from './components/CreatePoll'; // اضافه کردن کامپوننت CreatePoll
import ActivityHistory from './components/ActivityHistory';
import ImageGallery from './components/ImageGallery';
import PrivacySettings from './components/PrivacySettings';
import GroupsAndPages from './components/GroupsAndPages';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [media, setMedia] = useState([]);
  const [polls, setPolls] = useState([]);

  // مدیریت ورود و ثبت‌نام
  const handleLogin = (userData) => {
    setIsLoggedIn(true);
  };

  const handleSignup = (userData) => {
    setIsLoggedIn(true);
  };

  // مدیریت پیام‌های مستقیم
  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  // ذخیره پست‌ها
  const handleSavePost = (post) => {
    setPosts([...posts, post]);
  };

  // جستجو
  const handleSearch = (query) => {
    // منطق برای فیلتر کردن نتایج
  };

  // تغییر حالت تاریک/روشن
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // اضافه کردن تابع برای ایجاد پست
  const handlePostCreated = (newPost) => {
    setPosts([...posts, newPost]);
    addNotification(`New post created: ${newPost.title}`);
  };

  // مدیریت نوتفیکیشن‌ها
  const addNotification = (notification) => {
    setNotifications([...notifications, notification]);
  };

  // مدیریت دنبال‌کنندگان
  const addFollower = (follower) => {
    setFollowers([...followers, follower]);
  };

  // مدیریت رسانه‌ها
  const addMedia = (newMedia) => {
    setMedia([...media, newMedia]);
  };

  // مدیریت نظرسنجی‌ها
  const handleAddPoll = (newPoll) => {
    setPolls([...polls, newPoll]);
    addNotification(`New poll created: ${newPoll.title}`);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      {isLoggedIn ? (
        <>
          <CreatePost onPostCreated={handlePostCreated} />
          <CreatePoll onAddPoll={handleAddPoll} /> {/* استفاده از CreatePoll */}
          <PostList posts={posts} onSavePost={handleSavePost} />
          <FollowersList followers={followers} onAddFollower={addFollower} />
          <DirectMessages messages={messages} onSendMessage={handleSendMessage} />
          <Notifications notifications={notifications} />
          <Search onSearch={handleSearch} />
          <MediaPost media={media} onAddMedia={addMedia} />
          <Poll polls={polls} />
          <ActivityHistory activities={[]} />
          <ImageGallery images={[]} />
          <PrivacySettings settings={{}} />
          <GroupsAndPages groups={[]} />
          <UserProfile user={{ name: 'John Doe', bio: 'Lorem ipsum' }} />
        </>
      ) : (
        <div>
          <LoginForm onLogin={handleLogin} />
          <SignupForm onSignup={handleSignup} />
        </div>
      )}
    </div>
  );
};

export default App;