import React, { useState } from 'react'
import WeatherCard from './Components/WeatherCard'

const [weatherData, setWeatherData] = useState(null);

const fetchWeatherData = async (city) => {

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
  )
  const data = await response.json()
  setWeatherData(data);
  console.log(data)
  return data
}
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
