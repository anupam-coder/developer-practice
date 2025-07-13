import React from "react";
import PoolWidget from "./PoolWidget";
import "./style.css";

const App = () => {
  const poolData = {
    progress: 45,
    status: "active",
  };

  return <PoolWidget poolData={poolData} />;
};

export default App;
