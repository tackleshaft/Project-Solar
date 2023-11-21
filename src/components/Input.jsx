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
      <h3>Please Enter a Major City</h3>
      <form>
        <label htmlFor="location">City: </label>
        <input
          id="location-value"
          type="text"
          value={inputCity}
          onChange={handleInputChange}
        />
        <input type="button" value="Search City" onClick={handleButtonClick} />
      </form>
    </div>
  );
};

export default Input;