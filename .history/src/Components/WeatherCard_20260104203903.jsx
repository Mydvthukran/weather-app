import React from 'react'
import SearchBar from './SearchBar'
import WeatherDetails from './WeatherDetails'

const WeatherCard = (we) => {
  return (
    <div className='weather-card'>
        
        
          <SearchBar />
          <div className='icon'>
            icon
          </div>
          <h2 className='temperature'>
            16°C
          </h2>
          <h1 className='city-name'>
            London
          </h1>

          <WeatherDetails/>
      
    </div>
  )
}

export default WeatherCard
