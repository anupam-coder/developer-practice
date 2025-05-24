"use client";
import React, { useState } from "react";
import "./style.css";

const UndoRedo = () => {
  const [points, setPoints] = useState([]);
  const [queue, SetQueue] = useState([]);
  const handleClick = (e) => {
    setPoints((prevPoints) => [...prevPoints, [e.clientX, e.clientY]]);
  };

  const handleUndo = (e) => {
    e?.stopPropagation();
    const lastPoint = points[points.length - 1];
    const newPoints = points.slice(0, points.length - 1);
    setPoints(newPoints);
    SetQueue([...queue, lastPoint]);
  };

  const handleRedo = (e) => {
    e?.stopPropagation();
    const firstPoint = queue[0];
    setPoints([...points, firstPoint]);
    SetQueue([...queue.splice(1)]);
  };

  return (
    <div className="App" onClick={handleClick}>
      <h1>Undo & Redo</h1>
      <div className="buttons">
        <button disabled={points.length === 0} onClick={handleUndo}>
          Undo
        </button>
        <button disabled={queue.length === 0} onClick={handleRedo}>
          Redo
        </button>
      </div>
      {points.length &&
        points.map((point, id) => (
          <div
            key={id}
            className="point"
            style={{ top: point[1], left: point[0] }}
          ></div>
        ))}
    </div>
  );
};

export default UndoRedo;
