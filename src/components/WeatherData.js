import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtrainfo from './WeatherExtrainfo';
import { SUN } from './../constants/weathers';

const WeatherData = () => {
  return (
    <div>
      <WeatherTemperature temperature={20} weatherState={SUN} />
      <WeatherExtrainfo humidity={80} wind={'10m/s'} />
    </div>
  )
};

export default WeatherData;