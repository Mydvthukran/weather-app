import React from 'react'
import SearchBar from './SearchBar'
import WeatherDetails from './WeatherDetails'

const WeatherCard = () => {
  return (
    <div className='weather-card'>
        
        
          <SearchBar />
          <div className='icon'>
            icon
          </div>
          <div className='.temperature'>
            16°C
          </div>

          <WeatherDetails/>
      
    </div>
  )
}

export default WeatherCard
