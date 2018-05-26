import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtrainfo from './WeatherExtrainfo';

const WeatherData = () => {
  return (
    <div>
      <WeatherTemperature temperature={20} />
      <WeatherExtrainfo humidity={80} wind={'10m/s'} />
    </div>
  )
};

export default WeatherData;