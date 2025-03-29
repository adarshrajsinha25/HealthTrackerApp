import React, { useState, useEffect } from 'react';
import './Homepage.css';

const Homepage = () => {
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    const storedSteps = localStorage.getItem('steps') || 0;
    setSteps(Number(storedSteps));
  }, []);

  const incrementSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
    localStorage.setItem('steps', newSteps); // Save to localStorage
  };

  return (
    <div className="homepage">
      <header className="homepage-header">
        <h2>Welcome to your Health Tracker</h2>
        <p>Your personal journey to a healthier life starts here.</p>
      </header>

      <div className="tracker-container">
        <div className="tracker">
          <h3>Today's Steps: {steps}</h3>
          <button onClick={incrementSteps} className="add-step-btn">Add Step</button>
        </div>
      </div>

      <footer className="homepage-footer">
        <p>&copy; 2025 Health Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
