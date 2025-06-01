"use client";
import React, { useEffect, useState } from "react";
import "./style.css";

const Progressbar = ({ progress }) => {
  const [animateProgress, setAnimateProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimateProgress(progress), 100);
  }, [progress]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress"
        style={{
          //we can do it with width as well but browser has to repaint css again and again
          // to optimmise the performance it is a good way to use transform, it makes the visual appearance smoother having less jittery effect.
          //   width: `${animateProgress}%`,
          transform: `translateX(-${100 - animateProgress}%)`,
          color: progress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax={100}
        aria-valuemin={0}
      >
        {progress}%
      </div>
    </div>
  );
};

const ProgressBarApp = () => {
  const bars = [2, 10, 30, 50, 70, 90, 100];

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((value, id) => (
        <Progressbar key={id} progress={value} />
      ))}
    </div>
  );
};

export default ProgressBarApp;
