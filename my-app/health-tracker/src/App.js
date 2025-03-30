import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Home/Homepage'; // Import Homepage component
import Header from './Components/Shared/Header'; // Import Header component
import Footer from './Components/Shared/Footer'; // Import Footer component
import Login from './Components/Asserts/Login'; // Import Login component
import Register from './Components/Asserts/Register'; // Import Register component
import Logout from './Components/Asserts/Logout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header /> {/* Renders Header component */}
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Renders Homepage at root */}
          <Route path="/register" element={<Register />} /> {/* Renders Register component at /register */}
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} /> {/* Renders Login component at /login */}
          
        </Routes>
        <Footer /> {/* Renders Footer component */}
      </div>
    </Router>
  );
}

export default App;
