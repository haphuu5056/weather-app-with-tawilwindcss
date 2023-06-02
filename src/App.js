import axios from 'axios';
import { useEffect, useState } from 'react';
import WeatherComponent from './WeatherComponent';

function App() {
  const APIKEY = '385d68712ff343d883671753232005'
  const [weather, setWeather] = useState(null);
  const [location,setLocation] = useState('miami');
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${location}&days=7&aqi=yes&alerts=no`;

  const handleLocationInput = e =>{
    setLocation(e.target.value)
  }
  console.log(weather);
  useEffect(()=>{
    axios.get(URL)
    .then(res=> setWeather(res.data))
    .catch(err => console.log('Internet Connection Is lost please reconnect again', err))
  },[URL]);


  return (
    <div className=" font-lato max-w-6xl mx-auto px-2 text-white overflow-hidden h-screen">
      <WeatherComponent 
      weather={weather}
      location={location}
      handleLocationInput={handleLocationInput} />
    </div>
  );
}

export default App;
