"use client";
import React, { useEffect, useRef, useState } from "react";

const Checkbox = ({ data, level = 0, onChange }) => {
  const [isChecked, setIsChecked] = useState(data.value);
  const [isIndeterminate, setIsIndeterminate] = useState(false);
  const checkboxRef = useRef(null);

  const handleChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onChange(checked, data); // Notify parent checkbox of the change
  };

  // Check if all children are checked and set the indeterminate state
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  useEffect(() => {
    if (data?.children) {
      const allChecked = data.children.every((child) => child.value === true);
      const someChecked = data.children.some((child) => child.value === true);
      if (allChecked) {
        setIsChecked(true);
        setIsIndeterminate(false);
      } else if (someChecked) {
        setIsChecked(false);
        setIsIndeterminate(true);
      } else {
        setIsChecked(false);
        setIsIndeterminate(false);
      }
    }
  }, [data?.children]);

  return (
    <div>
      {data && (
        <label
          style={{ marginLeft: `${level * 10}px` }}
          className={`flex items-center space-x-2 mt-5`}
        >
          <input
            ref={checkboxRef}
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
          />
          <span>{data.label}</span>
        </label>
      )}
      {data?.hasOwnProperty("children") &&
        data.children.map((el, id) => {
          return (
            <Checkbox
              key={id}
              level={level + 1}
              data={el}
              onChange={onChange}
            />
          );
        })}
    </div>
  );
};

export default Checkbox;
