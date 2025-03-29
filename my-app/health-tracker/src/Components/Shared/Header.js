import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importing CSS

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Health Tracker</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
