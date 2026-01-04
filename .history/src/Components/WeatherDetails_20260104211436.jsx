import React from 'react'
import { Waves,Wind,Droplet } from 'lucide-react'
const WeatherDetails = ({ humidity, wind, feelsLike }) => {
  return (
    <div className='weather-details'>
    <p><Waves size={28} strokeWidth={1} />
      humidity:{humidity}% </p>  

      <p><Droplet size={28} strokeWidth={1} />
      pressure: 1012 hPa
    </p>

      <p>
      feels like: {Math.round(feelsLike)}°C
      </p>
      
      <p>
<Wind size={28} strokeWidth={1} />
      wind: 10 km/h
      </p>
      
      

    </div>
  )
}

export default WeatherDetails
