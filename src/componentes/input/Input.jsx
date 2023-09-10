import React from "react";
import "./Input.css";

import { useState } from "react";

function Input() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const dataArray = [1, 2, 3, 4];

  const handleSearch = () => {
    const matchingItems = dataArray.filter((item) => item.includes(searchTerm));
    setSearchResults(matchingItems);
  };

  return (
    <div className="container">
      <input
        className="input"
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 && (
        <select>
          {searchResults.map((result, index) => (
            <option key={index} value={result}>
              {result}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Input;
