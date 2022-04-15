import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import App from "../App"

describe('Component Test: App.tsx ', () => {
    
    test('Validate App renderization', () => {
        const result = render(<App />)

        const validateApp = screen.getByTestId('map-test')
        const appChildNodes = result.container.childNodes[0].childNodes
        
        expect(validateApp).toHaveClass('App')
        expect(appChildNodes).toHaveLength(2)
    })
})
