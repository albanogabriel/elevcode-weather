import { MagnifyingGlass, MapPin } from "phosphor-react"

export function WeatherInput(){
  return(
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '8px', border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <MapPin color={'white'} size={18}/>
        <input style={{ fontSize: '1.25rem', color: 'white', background: 'transparent', border: 'none' }}/>
      </div>
      <button style={{ background: 'transparent' , border: 'none' }}>
        <MagnifyingGlass color="white" size={18} />
      </button>
    </div>
  )
}