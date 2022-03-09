import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Logo from "../components/Logo/Logo";

describe('Component Test: Logo.tsx ', () => {
    test('Logo must have: src = "logo.png" and alt = "TESSELO"', () => {
        render(<Logo />)

        const logo = screen.getByRole('img')

        expect(logo).toHaveAttribute('src', 'logo.png')
        expect(logo).toHaveAttribute('alt', 'TESSELO')
    })
})