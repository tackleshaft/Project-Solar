import React from 'react';
import City from '../components/city.jsx'


const CityContainer = (props) => {


    return(
        <div>
            {props.city.map((element, i, array) => 
            <City 
                key={`CityIndex ${i}`}
                cityName={element.cityName}
                annual={element.annual}
            />
            )}
        </div>
    )
}

export default CityContainer;