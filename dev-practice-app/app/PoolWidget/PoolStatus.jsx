"use client";
import React from "react";

const PoolStatus = ({ status }) => {
  return (
    <div className="pool-status">
      <h3>Status: {status.toUpperCase()}</h3>
    </div>
  );
};

export default PoolStatus;
