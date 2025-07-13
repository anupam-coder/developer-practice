"use client";
import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";
import PoolActions from "./PoolActions.jsx";
import PoolStatus from "./PoolStatus.jsx";

const PoolWidget = ({ poolData }) => {
  const [progress, setProgress] = useState(poolData.progress); // 0-100
  const [status, setStatus] = useState(poolData.status); // 'active', 'closed'

  // Simulate real-time updates
  useEffect(() => {
    if (status === "active") {
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + Math.random() * 5, 100));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [status]);

  // Example: Auto close pool at 100%
  useEffect(() => {
    if (progress >= 100) {
      setStatus("closed");
    }
  }, [progress]);

  return (
    <div className="App">
      <h1>Pool Widget</h1>
      <div className={`pool-widget ${status}`}>
        <PoolStatus status={status} />
        <ProgressBar percentage={progress} status={status} />
        <PoolActions status={status} />
      </div>
    </div>
  );
};

export default PoolWidget;
