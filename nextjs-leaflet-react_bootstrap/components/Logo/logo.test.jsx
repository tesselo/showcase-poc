import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Logo from './Logo'

describe('Home', () => {

  it('Validate toolbar logo renderization', () => {
    render(<Logo alt='tesselo-logo' width='120' height='40'/>)

    const logo = screen.getAllByRole('img')[0]

    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('alt', 'tesselo-logo')
  })
})
