import React from 'react';

const Input = (props) => {
    const { handleClick } = props

    return(
        <div>
        <h3>Please Enter a Major City</h3>
        <form> 
          <label htmlFor="location">City: </label>
          <input id="location-value" type='text'></input>
          <input type='button' value="Search City" onClick={handleClick}></input>
        </form>
      </div>
    )

}

export default Input;