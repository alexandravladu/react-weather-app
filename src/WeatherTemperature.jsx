/* eslint-disable react/prop-types */
 
import React from 'react'

const WeatherTemperature = (props) => {
    return (
        <div className='WeatherTemperature'>
            <span className="temperature">{Math.round(props.celsius)}</span>
             <span className="unit">°C </span>
        </div>
        );
}

export default WeatherTemperature;
