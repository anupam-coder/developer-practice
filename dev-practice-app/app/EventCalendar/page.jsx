"use client";
import React from "react";
// import "./styles.css";
import EventCalendar from "./EventCalendar";

const App = () => {
  const events = [
    {
      title: "Create YT video on Trasactional Outbox pattern",
      date: "05/01/2025",
      identifier: "blue",
    },
    {
      title: "Do offer nego with Google",
      date: "05/15/2025",
      identifier: "red",
    },
    {
      title: "Watch lorem ipsum series",
      date: "05/19/2025",
      identifier: "green",
    },
    {
      title: "Bhai ki breakup party",
      date: "05/25/2025",
      identifier: "yellow",
    },
    {
      title: "Watch shaka laka boom boom",
      date: "04/19/2025",
      identifier: "red",
    },
    {
      title: "Create YT video on Kafka vs Message Queue",
      date: "04/05/2025",
      identifier: "blue",
    },
    {
      title: "Bhai ki breakup party",
      date: "06/29/2025",
      identifier: "yellow",
    },
    {
      title: "Watch shaka laka boom boom",
      date: "06/19/2025",
      identifier: "red",
    },
    {
      title: "Create YT video on database to choose",
      date: "06/05/2025",
      identifier: "blue",
    },
  ];

  return <EventCalendar events={events} />;
};

export default App;
