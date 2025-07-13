"use client";
import React from "react";

const ProgressBar = ({ percentage, status }) => {
  const getBarColor = () => {
    if (status === "closed") return "#999";
    if (percentage > 75) return "green";
    if (percentage > 50) return "orange";
    return "red";
  };

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-fill"
        style={{ width: `${percentage}%`, backgroundColor: getBarColor() }}
      />
      <span>{Math.floor(percentage)}%</span>
    </div>
  );
};

export default ProgressBar;
