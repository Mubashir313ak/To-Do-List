
// src/components/WeatherData.js
import React from 'react';

function WeatherData({ data }) {
  return (
    <div>
      <h2>Weather in {data.name}, {data.sys.country}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
}

export default WeatherData;
