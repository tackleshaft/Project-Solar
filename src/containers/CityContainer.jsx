import React from 'react';
import City from '../components/city.jsx'


const CityContainer = (props) => {


    return(
        <div>
            {props.city.map((element, i, array) => 
            <City 
                key={`CityIndex ${i}`}
                lon={element.lon}
                lat={element.lat}
                annual={element.annual}
            />
            )}
        </div>
    )
}

export default CityContainer;