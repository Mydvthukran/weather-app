import React from 'react'
import { Waves,Wind,Droplet } from 'lucide-react'
const WeatherDetails = ({ humidity, wind, feelsLike }) => {
  return (
    <div className='weather-details'>
    <p><Waves size={28} strokeWidth={1} />
      humidity:{humidity}% </p>  
      <p></p> 
      <p>
        
      </p>
      <Wind size={28} strokeWidth={1} />
      wind: 10 km/h
      <Droplet size={28} strokeWidth={1} />
      pressure: 1012 hPa


    </div>
  )
}

export default WeatherDetails
