import React, {useState} from 'react';
import Input from'../components/Input.jsx';
import CityContainer from './CityContainer.jsx';


// import from child components...

const MainContainer = () => {

    const[Cities, updateCities] = useState([{
        cityName: 'Denver',
        annual: 6.06,
        },])

    const handleClick = (submitData) => {
        //takes the data, excutes a fetch requeset with the info
        console.log('You clicked the button!')
        // () => {fetch(appropriateURL)
        // .then((data) => data.json())
        // .then((data) =>{
        //     const avgDNI = data.outputs.avg_dni.annual
        //     updateCities({cityName: 'newCity', avgDNI})
        // })
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