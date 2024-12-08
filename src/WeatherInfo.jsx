/* eslint-disable react/prop-types */
import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherTemperature from './WeatherTemperature';


const WeatherInfo = (props) => {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li><FormattedDate date={props.data.date} /></li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 d-flex align-items-center">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="weather-icon me-3"
          />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
