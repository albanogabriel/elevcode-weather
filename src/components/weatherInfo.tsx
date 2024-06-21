import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'

export function WeatherInfo(){
  return(
    <div>
      <div style={{ display: 'flex', gap: '32px', width: '100%', justifyContent: 'space-between'}}>
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