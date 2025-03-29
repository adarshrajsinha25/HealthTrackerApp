import React from "react";

const Progress = ({ value, max, className }) => {
  const percentage = (value / max) * 100;

  return (
    <div className={`w-full ${className}`}>
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm mt-1">{`${value} / ${max}`}</p>
    </div>
  );
};

export default Progress;
