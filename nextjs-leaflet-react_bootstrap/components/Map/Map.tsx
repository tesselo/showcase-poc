
import React, { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import basemap from './basemap-providers'
import styles from './map.module.css'

const TslMap = (props: any) => {
  const mapRef: any = useRef()
  const initialMapUrl: string = basemap[0].url
  const initialAttribution: string = '&copy; Tesselo'

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setUrl(basemap.filter((maps) => props.mapType === maps.type)[0].url)
    }
  }, [props.mapType])

  const icon = L.icon({
    iconUrl: '/favicon.png',
    iconSize: [24, 20]
  })

  return (
    <MapContainer center={[38.7220618, -9.1522597]} zoom={10} id="map-container" className={styles['map']}>
      <TileLayer
        ref={mapRef}
        url={initialMapUrl}
        attribution={initialAttribution}
      />
      <Marker position={[38.7220618, -9.1522597]} icon={icon} />
    </MapContainer>
  )
}

export default TslMap
