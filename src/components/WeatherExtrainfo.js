import React from 'react';

const WeatherExtrainfo = ({ humidity, wind }) => {
  return (
    <div>
      <span>{ `${ humidity } % | ` }</span>
      <span>{ `${ wind } wind` }</span>
    </div>
  )
};

export default WeatherExtrainfo;