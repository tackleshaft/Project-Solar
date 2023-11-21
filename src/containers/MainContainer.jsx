import React, {useState} from 'react';
import Input from'../components/Input.jsx';
import CityContainer from './CityContainer.jsx';


// import from child components...

const MainContainer = () => {

    const[Cities, updateCities] = useState([{
        cityName: 'Denver',
        annual: 6.06,
        },])
    
    
    const handleClick = async (inputCity) => {
        //takes the data, excutes a fetch requeset with the info
        console.log('You clicked the button! Your inputCity is:', inputCity);
        const url = `/api/solar/solar_resource/v1.json?api_key=${APIKey}&address=${inputCity}`;
        try{
            const response = await fetch(url);
            const data = await response.json();
            const avgDNI = data.outputs.avg_dni.annual
            console.log(data)
                // updateCities((prevCities) => [...prevCities, { cityName: inputCity, avgDNI }]))
            }
        catch(err) {
            console.log('ErrorFetching data:', err)
        };
        }



    return(
        <div>
            <h1>Solar Farm Output</h1>
            <Input 
                handleClick={handleClick}
                />
            <CityContainer 
                city={Cities}
            />
        </div>
    )


}

export default MainContainer;