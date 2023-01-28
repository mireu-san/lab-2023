import React, { useState } from "react";

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Select</option>
        <option value="pass">Pass</option>
        <option value="not-passed">Not Passed</option>
      </select>
    </div>
  );
}

export default Dropdown;
