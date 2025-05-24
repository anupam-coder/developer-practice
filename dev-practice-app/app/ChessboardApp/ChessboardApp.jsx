"use client";
import React from "react";
import "./styles.css";

const ChessboardApp = () => {
  const renderChessboard = () => {
    const squares = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isBlackSq = (row + col) % 2 === 1;
        const squareClass = isBlackSq ? "black-square" : "white-square";
        squares.push(
          <div
            key={`${row}-${col}`}
            className={`square ${squareClass}`}
            // onClick={() => placePawn(row, col)}
          >
            {/* {hasPawn && <div className="pawn" />} */}
          </div>
        );
      }
    }
    return squares;
  };

  return (
    <div className="App">
      <h1>Chessboard App</h1>
      <div className="chessboard">{renderChessboard()}</div>
    </div>
  );
};

export default ChessboardApp;
