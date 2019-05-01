import React from 'react';

const Weather = ({description_det, temp_det,  description_short,icon }) => {

     
    console.log("det = ", description_det)
    console.log("temp = ", temp_det)
     console.log("short = ", description_short)
     console.log("icon = ", icon)
    
    return(
        <div className="weather-div">
            <p>{temp_det} Kelvin </p>
              <p> {description_det}</p>            
              
            <div className="centered" >
            <img width="300px" height="250px" src={icon} alt="clear sky image" />
                   
            
            </div>
        </div>
    );

}

export default Weather;