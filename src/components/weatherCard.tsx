import { WeatherInput } from "./weatherInput";

import cloudWeather from '../assets/cloud.png'


import { useEffect } from "react";
import { WeatherCelcius } from "./weatherCelcius";
import { WeatherInfo } from "./weatherInfo";

export function WeatherCard(){

  const apiKey = 'B1xAqIzjPNl63bKv'

  async function getWeather(){
    const response = await fetch(`https://my.meteoblue.com/packages/basic-1h_basic-day?apikey=${apiKey}&lat=47.5584&lon=7.57327&asl=279&format=json`)
    console.log(response)
  }

  useEffect(() => {
    getWeather()
  }, [])

  return(
    <div style={{ display:'flex', justifyContent: 'space-between', flexDirection:'column', gap: '16px', alignItems: 'center', width: '400px', height: '600px', padding: '40px', border: '1px solid rgba(255, 255, 255, 0.5)', background: 'rgba(255, 255, 255, 0.4)', borderRadius: '16px'}}>
      <WeatherInput />
      <img src={cloudWeather} style={{ height: 'auto', width: '250px' }} />
      
      <WeatherCelcius />

      <WeatherInfo />
     
    </div>
  )
}