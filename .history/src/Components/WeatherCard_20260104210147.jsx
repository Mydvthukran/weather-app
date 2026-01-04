import React from 'react'
import SearchBar from './SearchBar'
import WeatherDetails from './WeatherDetails'

const WeatherCard = ({weather}) => {
  return (
    <div className='weather-card'>
        
        
          <SearchBar />
          <div className='icon'>
           <img
  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
  alt="weather icon"
/>

          </div>
          <h2 className='temperature'>
            {Math.round(weather.main.temp)}°C
          </h2>
          <h1 className='city-name'>
          <MapPin  size={28} strokeWidth={1} /> { weather.name}
          </h1>

          <WeatherDetails/>
      
    </div>
  )
}

export default WeatherCard
