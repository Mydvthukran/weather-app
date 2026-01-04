import React from 'react'
import SearchBar from './SearchBar'
import WeatherDetails from './WeatherDetails'

const WeatherCard = () => {
  return (
    <div className='weather-card'>
        
        
          <SearchBar />
          <div className='weather-icon'>
            icon
          </div>
          <div className='temrs'>
            16°C
          </div>

          <WeatherDetails/>
      
    </div>
  )
}

export default WeatherCard
