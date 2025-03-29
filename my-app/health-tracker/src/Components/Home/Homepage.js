import React, { useState, useEffect } from 'react';
import './Homepage.css'; // Assuming you have a Homepage CSS file
import Card from '../Asserts/ui/Card'; // Correct path for Card.js
import Progress from '../Asserts/ui/Progress'; // Correct path for Progress.js
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'; // For line chart

const Homepage = () => {
  const [steps, setSteps] = useState(0);

  // Example data for the LineChart (meal statistics)
  const data = [
    { name: 'Salad', value: 50 },
    { name: 'Juice', value: 80 },
    { name: 'Food', value: 150 },
    { name: 'Water', value: 230 },
  ];

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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-green-700 text-white p-6">
        <h2 className="text-2xl font-bold">Health Tracker</h2>
        <nav className="mt-6">
          <ul>
            <li className="py-2">Dashboard</li>
            <li className="py-2">Schedule</li>
            <li className="py-2">Yoga</li>
            <li className="py-2">Meals</li>
            <li className="py-2">Chat</li>
            <li className="py-2">Profile</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-6">
        <header className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Hello Jane</h2>
            <p className="text-gray-500">Today it’s a great day to be fit!</p>
          </div>
          <p className="text-gray-500">15 Nov 2025, Monday</p>
        </header>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* Yoga Activity Card */}
          <Card className="p-4">
            <h3 className="text-lg font-semibold">Yoga Activity</h3>
            <p className="text-gray-500">Last Week</p>
            <h3 className="text-lg font-semibold">{steps} steps today</h3>
            <button onClick={incrementSteps} className="add-step-btn mt-4">Add Step</button>
          </Card>

          {/* Meal Statistics Card */}
          <Card className="p-4">
            <h3 className="text-lg font-semibold">Meal Statistics</h3>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={data}>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#2F855A" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-lg font-bold">230 kcal</p>
          </Card>
        </div>

        {/* User Goals */}
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Your Monthly Goals</h3>
          <div className="mt-2">
            <p>Sleep</p>
            <Progress value={92} max={240} className="mb-2" />
            <p>Drink Water</p>
            <Progress value={50} max={100} className="mb-2" />
            <p>Lose Weight</p>
            <Progress value={4.5} max={5} className="mb-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
