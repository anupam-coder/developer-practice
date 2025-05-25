import React from "react";

const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleDataChange = (e) => {
    setData((prevState) => ({ ...prevState, theme: e.target.name }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            onChange={handleDataChange}
            checked={theme === "dark"}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            onChange={handleDataChange}
            checked={theme === "light"}
          />
          Light
        </label>
      </div>
    </div>
  );
};

export default Settings;
