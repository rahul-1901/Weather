import React from 'react'
import { useEffect, useRef, useState} from 'react'
import './Weather.css'
import search_engine from '../assets/search.png'
import cloudy from '../assets/cloudy.png'
import cleared from '../assets/clear.png'
import drizzley from '../assets/drizzle.png'
import rainy from '../assets/rain.png'
import windy from '../assets/wind.png'
import snowy from '../assets/snow.png'
import humidy from '../assets/humidity.png'
import pressure from '../assets/atmospheric.png'


const Weather = () => {

  const inputRef = useRef()
  const [weatherData, setWeatherData] = useState(false);

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      search(inputRef.current.value);
    }
  };


  const allIcons = {
    "01d": cleared,
    "01n": cleared,
    "02d": cloudy,
    "02n": cloudy,
    "03d": cloudy,
    "03n": cloudy,
    "04d": drizzley,
    "04n": drizzley,
    "09d": rainy,
    "09n": rainy,
    "10d": rainy,
    "10n": rainy,
    "13d": snowy,
    "13n": snowy,
  }

  const search = async (city) => {
    if(city === "")
    {
      alert(`Please,Enter the city name!`)
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`

      console.log(url); 
      
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      const icon = allIcons[data.weather[0].icon]||cleared;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const cityImage = async(city) => {

  }

  useEffect(() => {
    search("Jodhpur")
  },[])

  return (
    <div className='weather-main'>
      <p className='quote'>
      Get the weather, effortlessly.
      </p>
      <div className='both-side'>
      <div className='left-side'>
      <div className='search-place'>
        <input ref={inputRef} className='input-place' type='text' alt='Search City' placeholder='Search City' onKeyDown={handleKey}/>
        <img src={search_engine} alt='search' className='img-search' onClick={()=>search(inputRef.current.value)}/>
        <img src={cloudy} alt='search' className='img-weather'/>
      </div>
      <div className='all-together'>
      <img className='show-weather' src={weatherData.icon} alt="Weather-Status" />
      <p className='temperature'>{weatherData.temperature}°c</p>
      </div>
      <p className="cityName">{weatherData.location}</p>
      <div className='other-info'>
        <img src={humidy} alt='Humidity' className='humidy'/>
        <div className='humidy-detail'>
          <p className='hum'>Humidity</p>
          <p className='hum'>{weatherData.humidity}</p>
        </div>
        <img src={windy} alt='Humidity' className='windy'/>
        <div className='humidy-detail'>
          <p className='hum'>Wind-Speed</p>
          <p className='hum'>{weatherData.windSpeed}</p>
        </div>
        <img src={pressure} alt='Humidity' className='windy'/>
        <div className='humidy-detail'>
          <p className='hum'>Pressure</p>
          <p className='hum'>{weatherData.pressure}</p>
        </div>
      </div>
      </div>
      <div className='rigth-side'>

      </div>
      </div>
    </div>
  )
}

export default Weather