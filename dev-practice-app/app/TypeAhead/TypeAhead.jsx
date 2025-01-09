"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import data from "./data.json";

const TypeAhead = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
    let searchText = e.target.value.toLowerCase();
    let filteredData = data.filter((el) =>
      el.toLowerCase().startsWith(searchText)
    );
    console.log(filteredData);
    setSearchResult(filteredData);
    setIsDialogOpen(true);
  };

  const handleClick = (e) => {
    console.log(e.target.textContent);
    setSearchTerm(e.target.textContent);
    setIsDialogOpen(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-semibold text-center mb-4">TypeAhead</h1>
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Type here"
        onChange={handleSearchInput}
        value={searchTerm}
      />
      {searchTerm.length !== 0 && isDialogOpen && (
        <div className="border border-gray-300">
          {searchResult.map((el, index) => {
            return (
              <div
                className="ml-4 cursor-pointer"
                onClick={handleClick}
                key={index}
              >
                {el}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TypeAhead;
