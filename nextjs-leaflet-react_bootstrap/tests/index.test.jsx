import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'

describe('Home', () => {
  it('Should renders logo image', () => {
    render(<Home />)

    const logo = screen.getByRole('img')

    expect(logo).toHaveAttribute('src', './logo.png')
    expect(logo).toHaveAttribute('alt', 'TESSELO')

  })

  it('Should render the component `HelloTessera.tsx`', () => {
    render(<Home />);

    const textId = screen.getByTestId('HT-heading')

    expect(textId).toBeInTheDocument();
  })
})
