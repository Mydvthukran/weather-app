import React from 'react'
import { Waves,Wind,Droplet,HeartPlus  } from 'lucide-react'
const WeatherDetails = ({ humidity, wind, feelsLike, pressure }) => {
  return (
   <div className="weather-details">

  <div className="detail">
    <Waves size={28} strokeWidth={1} />
    <span>Humidity: {humidity}%</span>
  </div>

  <div className="detail">
    <Droplet size={28} strokeWidth={1} />
    <span>Pressure: {pressure} hPa</span>
  </div>

  <div className="detail">
    <HeartPlus size={28} strokeWidth={1} />
    <span>Feels like: {Math.round(feelsLike)}°C</span>
  </div>

  <div className="detail">
    <Wind size={28} strokeWidth={1} />
    <span>Wind: {wind} m/s</span>
  </div>

</div>


export default WeatherDetails
