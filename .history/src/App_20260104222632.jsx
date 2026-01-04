import React, { useEffect, useState } from 'react'
import WeatherCard from './Components/WeatherCard'
import Loader from './Components/Loader';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);

const fetchWeatherData = async (city) => {

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
  )
  const data = await response.json()
  setWeatherData(data);
  console.log(data)
}
useEffect(() => {
  fetchWeatherData('London');
}, []);
  
  return (
    <div>
      {weatherData && <WeatherCard weather={weatherData} onSearch={fetchWeatherData} />}

      <button type="button" onClick={()=>{
        fetchWeatherData('London')
      }} > hi </button>

    </div>
  )
}
<lo

export default App
