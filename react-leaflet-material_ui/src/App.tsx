import React, { useState } from 'react'
import './App.css'
import Toolbar from './components/Toolbar/Toolbar'
import Map from './components/Map/Map'

const App: React.FC = () => {
  const [mapType, setMapType] = useState('RGB')

  const getMapType: Function = (isNdvi: any) => {
    setMapType(isNdvi.target.checked ? 'NDVI' : 'RGB')
  }

  return (
    <div className='App' data-testid='map-test'>
      <Toolbar mapTypeSelected={getMapType}/>
      <Map mapType={mapType}/>
    </div>
  )
}

export default App
