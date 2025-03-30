import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"; // Importing recharts components
import "./Homepage.css";

const Homepage = () => {
  const [steps, setSteps] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(""); // New state for username
  const [weight, setWeight] = useState(""); // State for weight input
  const [height, setHeight] = useState(""); // State for height input
  const [bmi, setBmi] = useState(null); // State for BMI
  const navigate = useNavigate();

  // Example meal data for the LineChart
  const mealData = [
    { name: "Salad", value: 50 },
    { name: "Juice", value: 80 },
    { name: "Food", value: 150 },
    { name: "Water", value: 230 },
  ];

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);

      // Retrieve username from localStorage
      const storedUserName = localStorage.getItem("username");
      if (storedUserName) {
        setUserName(storedUserName); // Set the username if available
      }
    }

    // Load stored steps for the selected date
    const storedSteps = localStorage.getItem(`${selectedDate}-steps`) || 0;
    setSteps(Number(storedSteps));
  }, [selectedDate]);

  const incrementSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
    localStorage.setItem(`${selectedDate}-steps`, newSteps); // Save to localStorage with selected date
  };

  const decrementSteps = () => {
    if (steps > 0) {
      const newSteps = steps - 1;
      setSteps(newSteps);
      localStorage.setItem(`${selectedDate}-steps`, newSteps); // Save to localStorage with selected date
    }
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    // Load steps for the selected date
    const storedSteps = localStorage.getItem(`${date}-steps`) || 0;
    setSteps(Number(storedSteps));
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUserName(""); // Clear username when logged out
    navigate("/"); // Redirect to homepage after logout
  };

  // Function to calculate BMI
  const calculateBmi = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue); // Set the calculated BMI value
    } else {
      alert("Please enter both weight and height.");
    }
  };

  return (
    <div className="homepage">
      <div className="content">
        {isLoggedIn ? (
          <div className="dashboard">
            {/* Profile Card */}
            <div className="card">
              <h3>Profile</h3>
              <p>Hello, {userName || "Jane"}</p> {/* Dynamically show username */}
              <p>Today it’s a great day to be fit!</p>
            </div>

            {/* Today's Date Card */}
            <div className="card">
              <h3>Today's Date</h3>
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>

            {/* Yoga Activity Card */}
            <div className="card steps-card">
              <h3>Yoga Activity</h3>
              <h4>Steps for {selectedDate}</h4>
              <p>{steps} steps today</p>
              <div className="step-buttons">
                <button onClick={incrementSteps}>Add Step</button>
                <button onClick={decrementSteps}>Remove Step</button>
              </div>
            </div>

            {/* Meal Statistics Card with Chart */}
            <div className="card meal-statistics">
              <h3>Meal Statistics</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={mealData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2F855A"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* BMI Calculator Card */}
            <div className="card bmi-card">
              <h3>BMI Calculator</h3>
              <form onSubmit={calculateBmi}>
                <div>
                  <label htmlFor="weight">Weight (kg): </label>
                  <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="height">Height (cm): </label>
                  <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">Calculate BMI</button>
              </form>

              {bmi && (
                <div className="bmi-result">
                  <h4>Your BMI: {bmi}</h4>
                  <p>
                    {bmi < 18.5
                      ? "You are underweight."
                      : bmi >= 18.5 && bmi <= 24.9
                      ? "You have a normal weight."
                      : bmi >= 25 && bmi <= 29.9
                      ? "You are overweight."
                      : "You are obese."}
                  </p>
                </div>
              )}
            </div>

            {/* Monthly Goals Card */}
            <div className="card goals">
              <h3>Your Monthly Goals</h3>
              <div className="goal">
                <p>Sleep</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "92%" }}></div>
                </div>
                <span>92 / 240</span>
              </div>
              <div className="goal">
                <p>Drink Water</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "50%" }}></div>
                </div>
                <span>50 / 100</span>
              </div>
              <div className="goal">
                <p>Lose Weight</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "90%" }}></div>
                </div>
                <span>4.5 / 5</span>
              </div>
            </div>

            {/* Logout Button */}
            <div className="card">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        ) : (
          <div className="login-prompt">
            <h1>Welcome to your Health Tracker</h1>
            <h3>Please log in first</h3>
            <p>
              You must be logged in to view this content.{" "}
              <a href="/login">Login here</a>
            </p>

            {/* Health Tips Section for Logged-Out Users */}
            <div className="health-tips">
              <h4>Health Tips:</h4>
              <p className="tip-large">
                Eating a balanced diet is essential for maintaining good health.
              </p>
              <p className="tip-medium">
                Make sure to stay hydrated throughout the day by drinking plenty of water.
              </p>
              <p className="tip-small">
                Try to exercise at least 30 minutes a day for better fitness.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
