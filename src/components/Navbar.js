import React from 'react';
import { FaHome, FaBell, FaEnvelope, FaUser } from 'react-icons/fa';

const Navbar = ({ onProfileClick, toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">X</h1>
      <ul className="nav-links">
        <li><FaHome /> Home</li>
        <li><FaBell /> Notifications</li>
        <li><FaEnvelope /> Messages</li>
        <li onClick={toggleDarkMode}><FaUser /> Toggle Dark Mode</li>
      </ul>
    </nav>
  );
};

export default Navbar;