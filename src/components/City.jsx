import React from 'react';

const City = (props) => {


    return(
        <div className="cityBox">
            <p><strong>City Name:</strong> {props.cityName}</p>
            <p><strong>Annual DNI:</strong> {props.annual}</p>
        </div>
    )
}

export default City;