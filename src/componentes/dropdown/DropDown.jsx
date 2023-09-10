import React, { useState } from "react";
import "./DropDown.css";

function DropdownMenu() {
  // first dropdown options
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //   second dropdown options
  const [selectedSecondOption, setSelectedSecondOption] = useState("");
  const Secondoptions = [
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
  ];
  const handleSecondOptionChange = (event) => {
    setSelectedSecondOption(event.target.value);
  };

  //   Third dropdown options

  const [selectedThirdOption, setSelectedThirdOption] = useState("");
  const Thirdoptions = [
    "Option 11",
    "Option 12",
    "Option 13",
    "Option 14",
    "Option 15",
  ];
  const handleThirdOptionChange = (event) => {
    setSelectedThirdOption(event.target.value);
  };

  return (
    // first dropdown Menu
    <div>
      <select
        className="dropDown dropDown1"
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* second dropdown menu  */}
      <select
        className="dropDown dropDown2"
        id="dropdown"
        value={selectedSecondOption}
        onChange={handleSecondOptionChange}
      >
        <option value="">Select an option</option>
        {Secondoptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* third dropdown menu */}
      <select
        className="dropDown dropDown3"
        id="dropdown"
        value={selectedThirdOption}
        onChange={handleThirdOptionChange}
      >
        <option value="">Select an option</option>
        {Thirdoptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownMenu;
