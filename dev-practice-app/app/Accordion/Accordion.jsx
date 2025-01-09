"use client";
import React, { useState } from "react";

const Accordion = () => {
  const [active, setActive] = useState(0);
  const [data, setData] = useState([
    {
      title: "Title 1",
      content: "This is first content",
    },
    {
      title: "Title 2",
      content: "This is second content",
    },
    {
      title: "Title 3",
      content: "This is fourth content",
    },
  ]);

  return (
    <div className="flex flex-col m-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Accordion</h1>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div className="border rounded-lg" key={index}>
            <h2
              onClick={() => setActive(index)}
              className="flex items-center justify-between px-3 py-2 text-xl font-semibold cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors ease-in-out"
            >
              {item.title}
              <span
                className={`transition-transform transform ${
                  active === index ? "rotate-180" : ""
                }`}
              >
                &#x25BC; {/* Downward arrow symbol */}
              </span>
            </h2>
            <p className={active === index ? "" : "hidden"}>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
