import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../.././pages/index'

describe('Home', () => {
  it('Should render the component `Toolbar.tsx`', () => {
    render(<Home />)

    const validateButtonText = screen.getByText('Search')
    
    expect(validateButtonText).toBeInTheDocument();
  })

  it('Should render the component `HelloTessera.tsx`', () => {
    render(<Home />);

    const textId = screen.getByTestId('HT-heading')
    const validateScreenText = screen.getByText('Hello Tesseras!')

    expect(textId).toBeInTheDocument()
    expect(validateScreenText).toBeInTheDocument()
  })

  it('Should render the component `Logo.tsx`', () => {
    render(<Home />)

    const logo = screen.getAllByRole('img')[0]
    
    expect(logo).toHaveAttribute('alt', 'toolbar-tesselo-logo')
  })
})
