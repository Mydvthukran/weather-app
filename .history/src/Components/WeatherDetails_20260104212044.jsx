import React from 'react'
import { Waves,Wind,Droplet,HeartPlus  } from 'lucide-react'
const WeatherDetails = ({ humidity, wind, feelsLike, press }) => {
  return (
    <div className='weather-details'>
    <p><Waves size={28} strokeWidth={1} />
      humidity:{humidity}% </p>  

      <p><Droplet size={28} strokeWidth={1} />
      pressure: 1012 hPa
    </p>

      <p>
      <HeartPlus size={28} strokeWidth={1} />feels like: {Math.round(feelsLike)}°C
      </p>

      <p>
<Wind size={28} strokeWidth={1} />wind: {wind} m/s
      </p>
      
      

    </div>
  )
}

export default WeatherDetails
