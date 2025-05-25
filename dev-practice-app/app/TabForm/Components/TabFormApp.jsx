"use client";
import React, { act, useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

const TabFormApp = () => {
  //since we want the data to be persistent, so it is better
  //to store the data in the Parent component so that in central place
  //if we keep it will passed to child components and validations can also be done
  const [data, setData] = useState({
    name: "Anupam",
    age: "29",
    email: "anupam@gmail.com",
    interests: ["coding", "music"],
    theme: "dark",
  });
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 10) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 1) {
          err.email = "Email is not valid";
        }
        setErrors(err);
        return err.name || err.age || err.name ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select at least one interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];
  //or we can do directly as well by passing the index.  onClick={setActiveTab(id)}
  const handleTabClick = (e) => {
    const tabName = e.target.textContent;
    const id = tabs.findIndex((tab) => tab.name === tabName);
    setActiveTab(id);
  };

  const ActiveTabComponent = tabs[activeTab].component;

  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handleSubmitClick = () => {
    //Make API call
    console.log("data", data);
  };

  return (
    <div className="tab-form">
      <h1 className="flex items-center justify-center mt-5">Tab Form App</h1>
      <div className="tab-form-container">
        <div className="header-container">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
              className="heading"
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div className="tab-body">
          <ActiveTabComponent data={data} setData={setData} errors={errors} />
        </div>
        <div className="nav-btn">
          <div className="prev-btn">
            {activeTab <= tabs.length - 1 && activeTab > 0 && (
              <button onClick={handlePrevClick}>Previous</button>
            )}
          </div>
          <div className="next-btn">
            {activeTab >= 0 && activeTab < tabs.length - 1 && (
              <button onClick={handleNextClick}>Next</button>
            )}
          </div>
          <div className="submit-btn">
            {activeTab === tabs.length - 1 && (
              <button onClick={handleSubmitClick}>Submit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabFormApp;
