import React from 'react';
import Location from './Location';
import WeatherData from  './WeatherData';

const WeathetLocation = () => {
  return (
    <div>
      <Location city={'Caracas'} />
      <WeatherData />
    </div>
  )
}

export default WeathetLocation;