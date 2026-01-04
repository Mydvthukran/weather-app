import React from 'react'
import { Waves,Wind,Droplet,HeartPlus  } from 'lucide-react'
const WeatherDetails = ({ humidity, wind, feelsLike, pressure }) => {
  return (
    <div className='weather-details'>
    <p className='detail'><Waves size={28} strokeWidth={1} />
      humidity:{humidity}% </p>  

      <p className='detail'><Droplet size={28} strokeWidth={1} />
      pressure:{pressure} hPa
    </p>

      <p className='detail'>
      <HeartPlus size={28} strokeWidth={1} />feels like: {Math.round(feelsLike)}°C
      </p>

      <p>
<Wind size={28} strokeWidth={1} />wind: {wind} m/s
      </p>
      
      

    </div>
  )
}

export default WeatherDetails
