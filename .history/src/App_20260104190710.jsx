import React from 'react'
import WeatherCard from './Components/WeatherCard'
const fetchWeatherData = async (city) => {

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
  )
  const data = await response.json()
  console.log(data)
  return data
}
const App = () => {
  return (
    <div>
      <WeatherCard></WeatherCard>
      <button type="button" onClick={()=} > hi </button>

    </div>
  )
}

export default App
