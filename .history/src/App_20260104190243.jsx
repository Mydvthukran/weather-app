import React from 'react'
import WeatherCard from './Components/WeatherCard'
const fetchWeatherData = async (city) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`.replace('{city name}', city).replace('{API key} ', apiKey)
  )
  const data = await response.json()
  console.log(data)
  return data
}
const App = () => {
  return (
    <div>
      <WeatherCard></WeatherCard>

    </div>
  )
}

export default App
