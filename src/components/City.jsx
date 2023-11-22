import React from 'react';

const City = (props) => {
    const { lat, lon, annual } = props


    return(
        <div className='cityBox'>
            <p><strong>Latitude:</strong> {lat}</p>
            <p><strong>Longitude:</strong> {lon}</p>
            <p><strong>Annual Direct Normal Irradiance:</strong> {annual}</p>
        </div>
    )
}

export default City;