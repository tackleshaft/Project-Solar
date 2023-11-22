import React, { useState } from 'react';

const Input = (props) => {
  const { handleClick } = props;
  const [inputCity, setInputCity] = useState(''); // Initialize state for the input value

  const handleInputChange = (event) => {
    setInputCity(event.target.value); // Update the state with the input value
  };

  const handleButtonClick = () => {
    handleClick(inputCity); // Pass the inputCity to the parent component when the button is clicked
    setInputCity('')
  };

  return (
    <div>
      <h3>Please Enter a Longitude and Lattidue, seperated by a comma.</h3>
      <p>The DNI values returned are kWh/m2/day (kilowatt hours per square meter per day).</p>
      <p>The average american home uses 10,800 kWh in a year.</p>
      <form>
        <label htmlFor="location">Geographic coordinates: </label>
        <input
          id="location-value"
          type="text"
          value={inputCity}
          onChange={handleInputChange}
        />
        <input type="button" value="Search Coordinates" onClick={handleButtonClick} />
      </form>
    </div>
  );
};

export default Input;