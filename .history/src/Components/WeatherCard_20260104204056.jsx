import React from 'react'
import SearchBar from './SearchBar'
import WeatherDetails from './WeatherDetails'

const WeatherCard = (weather) => {
  return (
    <div className='weather-card'>
        
        
          <SearchBar />
          <div className='icon'>
            icon
          </div>
          <h2 className='temperature'>
            {Math.round(weather.main.temp)}°C
          </h2>
          <h1 className='city-name'>
           { weather.name}
          </h1>

          <WeatherDetails/>
      
    </div>
  )
}

export default WeatherCard
