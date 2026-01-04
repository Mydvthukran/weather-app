import React from 'react'
import SearchBar from './SearchBar'
import WeatherDetails from './WeatherDetails'

const WeatherCard = () => {
  return (
    <div className='weather-card'>
        
        
          <SearchBar />
          <div>
            icon
          </div>
          <div>
            temperature
          </div>
          <WeatherDetails/>
      
    </div>
  )
}

export default WeatherCard
