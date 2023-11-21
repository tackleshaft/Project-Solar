import React from 'react';

const Input = () => {

    return(
        <div>
        <h3>Please Enter a Major City</h3>
        <form> 
          <label htmlFor="location">City: </label>
          <input id="location-value" type='text'></input>
          <input type='button' value="Add Market" onClick={handleClick} ></input>
        </form>
      </div>
    )

}

export default Input;