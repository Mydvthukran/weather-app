import React from 'react'
import { Waves,Wind,Droplet } from 'lucide-react'
const WeatherDetails = ({ humidity, wind, feelsLike }) => {
  return (
    <div className='weather-details'>
    <p></p>  <Waves size={28} strokeWidth={1} />
      humidity: 78% 
      <Wind size={28} strokeWidth={1} />
      wind: 10 km/h
      <Droplet size={28} strokeWidth={1} />
      pressure: 1012 hPa


    </div>
  )
}

export default WeatherDetails
