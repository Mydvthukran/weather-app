import React, { useEffect, useState } from 'react'
import WeatherCard from './Components/WeatherCard'
import Loader from './Components/Loader';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const fetchWeatherData = async (city) => {
setLoading(true);      // ⏳ start loader
  setError(null);
 try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
    ); 
  const data = await response.json();

    // ❌ city not found
    if (data.cod === "404") {
      setError("City not found");
      setWeatherData(null);
    } 
    // ✅ success
    else {
      setWeatherData(data);
    }
  } catch (erro) {
    setError("Something went wrong");
    setWeatherData(null);
  } finally {
    setLoading(false);   // ⏳ stop loader
  }
};
useEffect(() => {
  fetchWeatherData('London');
}, []);
  
  return (
    <div>
     {loading && <Loader />}

    {!loading && error && <ErrorMessage message={error} />}

    {!loading && !error && weatherData && (
      <WeatherCard weather={weatherData} onSearch={fetchWeatherData} />
    )}

    </div>
  )
}


export default App
