"use client";
import React, { useEffect, useState, useRef } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  function onStart() {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prevCount) => prevCount + 1);
      }, 10);
    }
  }

  function onStop() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function onReset() {
    setTime(0);
  }

  const formatTime = () => {
    const centiSeconds = `0${time}`.slice(-2);
    const seconds = `0${Math.floor(time / 100) % 60}`.slice(-2);
    const minutes = `0${Math.floor(time / 100 / 60) % 60}`.slice(-2);
    const hours = `0${Math.floor(time / 100 / 3600)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}:${centiSeconds}`;
  };

  return (
    <div className="flex flex-col m-10">
      <h1 className="text-4xl font-bold text-center my-auto mb-4">
        Stop Watch
      </h1>
      <div>
        <div className="text-4xl font-bold absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
          {formatTime()}
        </div>
        <div className="flex flex-row gap-2.5 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
          <button
            className="border-solid rounded-lg border-2 border-indigo-600 w-16"
            onClick={onStart}
          >
            Start
          </button>
          <button
            className="border-solid rounded-lg border-2 border-indigo-600 w-16"
            onClick={onStop}
          >
            Stop
          </button>
          <button
            className="border-solid rounded-lg border-2 border-indigo-600 w-16"
            onClick={onReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
