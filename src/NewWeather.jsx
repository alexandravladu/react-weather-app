/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import "./Weather.css";
import WeatherInfo from './WeatherInfo';
// import PropTypes from 'prop-types';
import axios from 'axios';

const NewWeather = (props) => {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity)
  const handleResponse = (response) => {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      icon: `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
  });
  }
  const search = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //search for a city
    search()
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className='Weather'>
          <form onSubmit={handleSubmit}>
              <div className="row">
                  <div className="col-9">
              <input type="search" placeholder="Search for a city" className="form-control" autoFocus="on" onChange={handleCityChange} />
              </div>
              <div className="col-3">
              <input type="submit" value="Search"  className="btn btn-primary w-100"/>
              </div>
              </div>
          </form>
          <WeatherInfo data={weatherData} />
          </div>
    )
  } else {
   search()
  }
  

}

// NewWeather.propTypes = {
//   defaultCity: PropTypes.string.isRequired,
// };

export default NewWeather;
