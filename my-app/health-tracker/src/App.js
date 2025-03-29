import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegister from './Components/Asserts/LoginRegister';
import Homepage from './Components/Home/Homepage';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/register" element={<LoginRegister />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
