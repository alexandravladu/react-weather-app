/* eslint-disable react/prop-types */
 
import React, {useState, useEffect} from 'react';
import "./WeatherForecast.css";
import WeatherForecastDay from './WeatherForecastDay';
import axios from 'axios';

const WeatherForecast = (props) => {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);

    },[props.coordinates]);

    
    const handleResponse = (response) => {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    const load = () => {
        const apiKey = import.meta.env.VITE_API_KEY;
        let lon = props.coordinates.longitude;
        let lat = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse)
    
    }

    if (loaded) {
        console.log(forecast);
        return (
            <div className='WeatherForecast'>
            <div className="row">
                {forecast.map(function(dailyForecast, index){
                    if (index < 5) {
                        return (
                            <div className="col" key={index}>
                            <WeatherForecastDay data={dailyForecast} />
                            </div>
                        )
                    }
                })}
            </div>  
            </div>
          )
    } else {
       load();
    return null;
 
}
}
export default WeatherForecast
