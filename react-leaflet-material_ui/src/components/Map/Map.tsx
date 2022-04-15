import { useEffect, useRef } from 'react'
import './Map.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import logo from '../../assets/favicon.png'
import basemap from './basemap-providers'

const TslMap = (props: any) => {
  const mapRef: any = useRef(null)
  const initialMapUrl: string = basemap[0].url
  const initialAttribution: string = '&copy; Tesselo'

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setUrl(basemap.filter((maps) => props.mapType === maps.type)[0].url)
    }
  }, [props.mapType])

  const icon = L.icon({
    iconUrl: logo,
    iconSize: [24, 20]
  })

  return (
    <MapContainer center={[38.7220618, -9.1522597]} zoom={10} id="map-container">
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
