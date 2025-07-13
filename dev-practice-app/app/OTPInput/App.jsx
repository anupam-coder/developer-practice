"use client";
import React, { useEffect, useRef, useState } from "react";

const OTP_DIGITS_COUNT = 5;

const App = () => {
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );
  const refArr = useRef([]);

  const handleOnChange = (value, index) => {
    //isNan --> is not a number
    if (isNaN(value)) {
      return;
    }
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    value && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  return (
    <div className="App">
      <h1>OTP Input</h1>

      {inputArr.map((input, index) => {
        return (
          <input
            className="otp-input"
            key={index}
            type="text"
            value={inputArr[index]}
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e) => handleOnChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default App;
