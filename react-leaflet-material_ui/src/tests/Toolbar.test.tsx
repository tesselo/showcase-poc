import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Toolbar from "../components/Toolbar/Toolbar"

describe('Component Test: Toolbar.tsx ', () => {
    render(<Toolbar/>)
    const toolbarLogo = screen.getByRole('img')
    const switchButton = screen.getByTestId('switchButton')
    
    test('Logo must have: src = "logo.png" and alt = "TESSELO"', () => {
        expect(toolbarLogo).toHaveAttribute('src', 'logo.png')
        expect(toolbarLogo).toHaveAttribute('alt', 'TESSELO')
    })

    test('Switch button click test', () => { 
        fireEvent.change(switchButton, {target: {checked: true}})
        expect(switchButton).toHaveProperty('checked', true)
    })
})
