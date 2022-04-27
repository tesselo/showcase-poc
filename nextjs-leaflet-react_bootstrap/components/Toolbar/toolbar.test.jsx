import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Toolbar from './Toolbar'

describe('Home', () => {

  it('Validate search button text', () => {
    render(<Toolbar />)

    const validateButtonText = screen.getByText('Search')
    
    expect(validateButtonText).toBeInTheDocument();
  })

  it('Validate toolbar logo renderization', () => {
    render(<Toolbar />)

    const logo = screen.getAllByRole('img')[0]

    expect(logo).toHaveAttribute('alt', 'toolbar-tesselo-logo')
  })
})
