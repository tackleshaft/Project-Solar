import React, {useState} from 'react';
import Input from'../components/Input.jsx';
import CityContainer from './CityContainer.jsx';


// import from child components...

const MainContainer = () => {

    // {lat: 25, 
    //     lon: -55, 
    //     annual: 6.56,}

    const[Cities, updateCities] = useState([])
    
    
    const handleClick = async (longLat) => {
        //takes the data, excutes a fetch requeset with the info
        const longLatArr = longLat.split(',')
        console.log('You clicked the button! Your longLat is:', longLatArr);
        // const url = `/api/solar/solar_resource/v1.json?api_key=${APIKey}&address=${inputCity}`;
        try{
            const response = await fetch(`https://developer.nrel.gov/api/solar/solar_resource/v1.json?api_key=QcLk7kdklvQGQxInDgelZ4VXD1CeMTSMqbeNHMox&lat=${longLatArr[0]}&lon=${longLatArr[1]}`);
            const data = await response.json();
            // const avgDNI = data.outputs.avg_dni.annual
            console.log(data)
            const lat = data.inputs.lat
            const lon = data.inputs.lon
            const annual = data.outputs.avg_dni.annual

            if (data.outputs.avg_dni === 'no data') {
                console.error('These coordinates do not correspond to an existing solar project in the NREL database.')
                alert('These corrdinates do not coorespond to an existing solar project in the NREL database.')
                return

            }

            updateCities((prevCities) => [...prevCities, { lat: lat, lon: lon, annual: annual }])
            }
        catch(err) {
            console.log('ErrorFetching data:', err)
        };
        }



    return(
        <div>
        <div id="outerbox">
            <h1>Direct Solar Irradiance by Location</h1>
            <Input 
                handleClick={handleClick}
                />
            <CityContainer 
                city={Cities}
            />
        </div>
        </div>
    )


}

export default MainContainer;