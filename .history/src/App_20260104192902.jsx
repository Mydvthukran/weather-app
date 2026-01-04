import React, { useState } from 'react'
import WeatherCard from './Components/WeatherCard'


const App = () => {
  
  return (
    <div>
      <WeatherCard></WeatherCard>
      <button type="button" onClick={()=>{
        fetchWeatherData('London')
      }} > hi </button>

    </div>
  )
}

export default App
