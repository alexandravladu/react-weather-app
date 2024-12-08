/* eslint-disable react/prop-types */
 
import React from 'react'

const WeatherForecastDay = (props) => {
    const maxTemperature = () => {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }
    const minTemperature = () => {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }
    const day = () => {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
  return (
      <div>
        <div className="WeatherForcast-day">{day()}</div>
        <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.icon}
        width={70}
        height={70}
      />
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">{maxTemperature()} </span>
          <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
        </div>
      </div>
    
  )
}

export default WeatherForecastDay;
