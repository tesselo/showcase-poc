import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Tessera from "../components/Tessera/HelloTessera";

describe('Component Test: HelloTessera.tsx ', () => {
    test('Validate screen text', () => {
        render(<Tessera />)

        const validateTitle = screen.getByText('Hello Tesseras!')

        expect(validateTitle).toBeInTheDocument();
    })
})