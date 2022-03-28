import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HelloTessera from '../components/HelloTessera'

describe('Component Test: index.tsx ', () => {
    test('Validate screen text', () => {
        render(<HelloTessera />)

        const validateTitle = screen.getByText('Hello Tesseras!')

        expect(validateTitle).toBeInTheDocument();
    })
})
