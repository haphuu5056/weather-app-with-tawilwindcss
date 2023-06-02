import React from 'react'

const WeatherComponent = ({weather, location, handleLocationInput}) => {
 const dayNames = ["Sunday", "Monday", "Tuesday" ,"Wednesday", "Thursday", "Friday",'Saturday'];

  return (
   <>
     <div className='flex flex-col justify-center text-center items-center  py-4 space-y-4 '>
      <h2 className='text-gray-200 text-4xl py-4'>Weather App </h2>
      <form className=' w-full'>
        <input type="text" placeholder='Enter Location'
        value={location}
        onChange={handleLocationInput}
         className='p-2 w-1/2 bg-transparent border-2 border-gray-400 rounded-md placeholder:text-white outline-none text-gray-100 '/>
      </form>
      </div>
      <div className='md:max-w-2xl mx-auto md:px-8 sm:max-w-md sm:px-12 '>
      {weather ? (
      <div className='space-x-8 pt-4 flex items-center'>
        <img src={weather.current.condition.icon} alt='icon' className='sm:w-24 md:w-36 '/>
        <div className='space-y-2'>
          <h3 className='text-xl'>Today</h3>
        <h2 className='md:text-3xl font-medium sm:text-xl'> {weather.location.name}</h2>
        <h3 className='md:text-3xl font-medium sm:text-xl'>Temprature: {weather.current.temp_c}°C</h3>
        <h3 className='text-sm md:text-base'>{weather.current.condition.text}</h3>
        </div>
      </div>) 
        : <h2 className='text-white text-3xl'>Weather is loading...</h2>
       }
      <div className='flex items-center space-x-8 md:flex-nowrap md:pt-28 sm:flex-wrap sm:pt-16 '>
        {weather && weather.forecast.forecastday.map((weather,index) =>{
         const currentDate = weather.date;
         const day = new Date(currentDate).getDay();
          return(
            <div key={index} className='flex flex-col justify-center items-center'>
              <h2 className='text-base'>{dayNames[day]}</h2>
              <img src={weather.day.condition.icon} alt={index}
              className='w-12'/>
              <span className=' text-sm font-bold text-gray-200 sm:pb-8'>{weather.day.avgtemp_c}°C</span>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default WeatherComponent