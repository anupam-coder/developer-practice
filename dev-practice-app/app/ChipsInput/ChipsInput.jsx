"use client";
import React, { useState } from "react";
import "./styles.css";
function ChipsInput() {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState(["Anupam", "Bhubaneswar"]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      //logic to setChips
      setChips((prev) => [...prev, inputText]);
      setInputText("");
    }
  };

  const handleDelete = (chip, index) => {
    //One way
    //setChips((prev) => prev.filter((prevChip) => prevChip !== chip));
    //Another way
    const copyChips = [...chips];
    copyChips.splice(index, i);
    setChips(copyChips);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h1>Chips Input</h1>
      <input
        className="chips-input"
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "220px" }}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <div className="chips-container">
        {chips.map((chip, id) => (
          <div className="chip" key={id}>
            {chip}
            <button className="chip-btn" onClick={() => handleDelete(chip, id)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
