import React from 'react'
import './App.css'
import Logo from './components/Logo/Logo'

import HelloTessera from './components/Tessera/HelloTessera'

const App: React.FC = () => {
  return (
    <div className='App'>
        <Logo />
        <HelloTessera />
    </div>
  )
}

export default App
