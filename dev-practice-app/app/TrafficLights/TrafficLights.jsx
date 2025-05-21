"use client";
import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const TrafficLights = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const config = [
    {
      color: "red",
      timeOut: "500",
    },
    {
      color: "yellow",
      timeOut: "700",
    },
    {
      color: "green",
      timeOut: "600",
    },
  ];

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, [config[index].timeOut]);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [index]);

  const handleStop = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleStart = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIndex((prev) => (prev + 1) % 3);
  };

  return (
    <div className="App">
      <h1>Traffic Lights (Using ReactJS)</h1>
      <div className="traffic-container">
        {config.map((signal, id) => (
          <div
            className="traffic-signal"
            style={{ backgroundColor: id === index ? signal.color : "white" }}
            key={id}
          ></div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={() => handleStop()} className="stop-btn">
          Stop
        </button>
        <button onClick={() => handleStart()} className="start-btn">
          Start
        </button>
      </div>
    </div>
  );
};

export default TrafficLights;
