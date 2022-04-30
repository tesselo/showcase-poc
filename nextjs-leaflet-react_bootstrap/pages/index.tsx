import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Toolbar from '../components/Toolbar/Toolbar'
import Map from '../components/Map'

const Home: NextPage = () => {
  const [mapType, setMapType] = useState('RGB')
  const getMapType: Function = (isNdvi: any) => {
    setMapType(isNdvi.target.checked ? 'NDVI' : 'RGB')
  }

  return (
    <div className='app'>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.png"></link>
        <title>Tesselo - Showcase POC</title>
      </Head>
      
      <Toolbar mapTypeSelected={getMapType} />
      <Map mapType={mapType}/>
    </div>
  )
}

export default Home
