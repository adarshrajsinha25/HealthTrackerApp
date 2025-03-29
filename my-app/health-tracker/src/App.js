import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegister from './Components/Asserts/LoginRegister'; // Import LoginRegister component
import Homepage from './Components/Home/Homepage'; // Import Homepage component
import Header from './Components/Shared/Header'; // Import Header component
import Footer from './Components/Shared/Footer'; // Import Footer component
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header /> {/* Renders Header component */}
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Renders Homepage at root */}
          <Route path="/login" element={<LoginRegister />} /> {/* Renders LoginRegister at /login */}
          <Route path="/register" element={<LoginRegister />} /> {/* Renders LoginRegister at /register */}
        </Routes>
        <Footer /> {/* Renders Footer component */}
      </div>
    </Router>
  );
}

export default App;
