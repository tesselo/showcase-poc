import { render } from "@testing-library/react"
import '@testing-library/jest-dom'
import Map from "./Map"

describe('Component Test: Map.tsx ', () => {
    
    test('Validate leaflet map and tile layer renderization', () => {
        const result = render(<Map mapType='RGB'/>)
        
        const mapContainer = result.container.querySelector('#map-container')
        const tileLayer = result.container.querySelector('.leaflet-tile-container')?.childNodes
        
        expect(mapContainer).toHaveClass('leaflet-container')
        expect(tileLayer).toHaveLength(1)
    })
})
