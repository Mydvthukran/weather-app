import React from 'react'
import { Waves } from 'lucide-react'
const WeatherDetails = () => {
  return (
    <div className='weather-details'>
      <Waves size={28} strokeWidth={1} />
      humidity: 78% 
      <Wind size={28} strokeWidth={1} />
      wind: 10 km/h
    </div>
  )
}

export default WeatherDetails
