import { WeatherInput } from "./weatherInput";

import cloudWeather from '../assets/cloud.png'

import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'

export function WeatherCard(){
  return(
    <div style={{ display:'flex', justifyContent: 'space-between', flexDirection:'column', gap: '16px', alignItems: 'center', width: '400px', height: '600px', padding: '40px', border: '1px solid rgba(255, 255, 255, 0.5)', background: 'rgba(255, 255, 255, 0.4)', borderRadius: '16px'}}>
      <WeatherInput />
      <img src={cloudWeather} style={{ height: 'auto', width: '250px' }} />
      
      <div>
        <h1>
          18º
        </h1>
        <p>
          Broken Clouds
        </p>
      </div>

     <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <img src={humidity} style={{ width: '36px', height: 'auto' }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} >
          <span>55%</span>
          <span>Humidity</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        <img src={wind} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <span>0Km/h</span>
          <span>Wind Speed</span>
        </div>
      </div>
     </div>
    </div>
  )
}