"use client";
import React from "react";

const PoolActions = ({ status }) => {
  const handleJoin = () => alert("Joined Pool!");
  const handleWithdraw = () => alert("Withdrawn from Pool!");
  const handleView = () => alert("Viewing Pool Details!");

  return (
    <div className="pool-actions">
      {status === "active" ? (
        <>
          <button onClick={handleJoin}>Join</button>
          <button onClick={handleWithdraw}>Withdraw</button>
        </>
      ) : (
        <span>Pool Closed</span>
      )}
      <button onClick={handleView}>View Details</button>
    </div>
  );
};

export default PoolActions;
