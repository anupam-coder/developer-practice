"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
/*
Here there are two optimising
1. Using debouncing
2. Using cache
*/
const App = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      setResults(cache[input]);
      //To not let the program go further
      return;
    }
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const json = await data.json();
    setResults(json?.recipes);
    // This is how we update object in useState i.e {...prev ,[keyName]: value}
    setCache((prev) => ({ ...prev, [input]: json?.recipes }));
  };

  useEffect(() => {
    //ways of optimising :- debouncing
    //     setTimeout(fetchData(), 300) is immediately invoking fetchData() and passing the returned Promise to setTimeout, which causes the error.
    // The correct way is to pass a function reference like setTimeout(() => { fetchData(); }, 300) so that it is only invoked after the timeout, not immediately.
    const timer = setTimeout(() => fetchData(), 300);
    //This callback function inside return will only be called when there will component unmount lifecycle
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="App">
      <h1>Autocomplete Search Bar</h1>
      <div className="app-container">
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
          placeholder="Type here ..."
        />
      </div>
      {showResults && (
        <div className="results-container">
          {results.map((r) => (
            <span className="result" key={r.id}>
              {r.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
