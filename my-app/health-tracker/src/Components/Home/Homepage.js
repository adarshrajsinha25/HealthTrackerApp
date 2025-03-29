import React, { useState, useEffect } from "react";
import "./Homepage.css"; // Assuming you have a Homepage CSS file
import Card from "../Asserts/ui/Card"; // Correct path for Card.js
import Progress from "../Asserts/ui/Progress"; // Correct path for Progress.js
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"; // For line chart

const Homepage = () => {
  const [steps, setSteps] = useState(0);

  // Example data for the LineChart (meal statistics)
  const data = [
    { name: "Salad", value: 50 },
    { name: "Juice", value: 80 },
    { name: "Food", value: 150 },
    { name: "Water", value: 230 },
  ];

  useEffect(() => {
    const storedSteps = localStorage.getItem("steps") || 0;
    setSteps(Number(storedSteps));
  }, []);

  const incrementSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
    localStorage.setItem("steps", newSteps); // Save to localStorage
  };

  return (
    <div className="homepage">
      <h2>Welcome to your Health Tracker</h2>

      <div className="dashboard">
        {/* Profile Card */}
        <div className="card">
          <h3>Profile</h3>
          <p>Hello, Jane</p>
          <p>Today it’s a great day to be fit!</p>
        </div>

        {/* Today's Date Card */}
        <div className="card">
          <h3>Today's Date</h3>
          <p>15 Nov 2025, Monday</p>
        </div>

        {/* Yoga Activity Card */}
        <div className="card steps-card">
          <h3>Yoga Activity</h3>
          <h4>Last Week</h4>
          <p>{steps} steps today</p>
          <button onClick={incrementSteps}>Add Step</button>
        </div>

        {/* Meal Statistics Card */}
        <div className="card meal-statistics">
          <h3>Meal Statistics</h3>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={data}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2F855A"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-lg font-bold">230 kcal</p>
        </div>

        {/* Monthly Goals Card */}
        <div className="card goals">
          <h3>Your Monthly Goals</h3>
          <div className="goal">
            <p>Sleep</p>
            <Progress value={92} max={240} />
            <span>92 / 240</span>
          </div>
          <div className="goal">
            <p>Drink Water</p>
            <Progress value={50} max={100} />
            <span>50 / 100</span>
          </div>
          <div className="goal">
            <p>Lose Weight</p>
            <Progress value={4.5} max={5} />
            <span>4.5 / 5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
