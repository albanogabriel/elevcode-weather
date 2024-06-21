import './global.css'

import { WeatherCard } from './components/weatherCard'

function App() {

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '180px'}}>
      
      <WeatherCard />
    </div>
  )
}

export default App
