import React, {useState} from "react";
import axios from "axios";


const Weather = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [message, setMessage] = useState();
  const apiKey = import.meta.env.VITE_API_KEY;

  const showTemperature = (response) => {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
    setMessage(`The weather in ${city} is: `);
  };

  const updateCity = (event) => {
    setCity(event.target.value);
  };

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} placeholder="Search..." />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <br />
        <h2>{message} </h2>
        <ul>
          <li>
            Temperature: <strong> {Math.round(weather.temperature)}°C </strong>
          </li>
          <li>
            Description: <strong> {weather.description} </strong>
          </li>
          <li>
            Humidity: <strong> {weather.humidity}% </strong>{" "}
          </li>
          <li>
            Wind: <strong> {weather.wind}km/h </strong>{" "}
          </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
};

export default Weather;
