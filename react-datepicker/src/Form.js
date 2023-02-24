import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [numericData, setNumericData] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleNumericDataChange = (event) => {
    setNumericData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the selectedDate and numericData values
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="numeric-data">Numeric Data:</label>
      <input
        id="numeric-data"
        type="number"
        value={numericData}
        onChange={handleNumericDataChange}
      />

      <label htmlFor="selected-date">Select a date:</label>
      <DatePicker
        id="selected-date"
        selected={selectedDate}
        onChange={handleDateChange}
        value={selectedDate}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
