import React from 'react'
import WeatherCard from './Components/WeatherCard'
const fetchWeatherData = async (city) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY
  const response = await fetch(
const App = () => {
  return (
    <div>
      <WeatherCard></WeatherCard>

    </div>
  )
}

export default App
