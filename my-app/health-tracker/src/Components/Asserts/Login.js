import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();

    // Get stored credentials from localStorage
    const storedCredentials = JSON.parse(localStorage.getItem('userCredentials'));

    // Check if credentials are available
    if (storedCredentials) {
      // Compare the entered username and password with the stored credentials
      if (username === storedCredentials.username && password === storedCredentials.password) {
        alert(`Congratulations ${storedCredentials.username}, you have successfully logged in!`);
        
        // Store login state and username in localStorage
        localStorage.setItem('isLoggedIn', 'true'); 
        localStorage.setItem('username', storedCredentials.username); // Store the username

        navigate('/'); // Redirect to home page after successful login
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } else {
      setErrorMessage('No user registered. Please register first.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>

          {/* Username input */}
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>

          {/* Password input */}
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          {/* Error message */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="#">Forgot password?</Link>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
