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
          <h2 className='temperature'>
            16°C
          </h2>

          <WeatherDetails/>
      
    </div>
  )
}

export default WeatherCard
