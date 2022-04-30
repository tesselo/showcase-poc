import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Toolbar from './Toolbar'

describe('Component Test: Toolbar.tsx ', () => {

  it('Validate toggle switch button text', () => {
    render(<Toolbar />)

    const validateButtonText = screen.getByText('NDVI')
    
    expect(validateButtonText).toBeInTheDocument();
  })

  it('Validate toolbar logo renderization', () => {
    render(<Toolbar />)

    const logo = screen.getAllByRole('img')[0]

    expect(logo).toHaveAttribute('alt', 'toolbar-tesselo-logo')
  })
})
