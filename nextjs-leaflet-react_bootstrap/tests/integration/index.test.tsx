import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages/index'

describe('Home', () => {
  it('Should render the component `Toolbar.tsx`', async () => {
    render(<Home />)

    const validateButtonText = screen.getByText('NDVI')
    
    await waitFor(() => {
      expect(validateButtonText).toBeInTheDocument()
    })
  })

  it('Should render the component `Logo.tsx`', () => {
    render(<Home />)

    const logo = screen.getAllByRole('img')[0]
    
    expect(logo).toHaveAttribute('alt', 'toolbar-tesselo-logo')
  })

  it('Should render the component `Map.tsx`', () => {
    const result = render(<Home />)
    
    const mapContainer = result.container.querySelector('#map-container')
    
    expect(mapContainer).toHaveClass('map')
  })
})
