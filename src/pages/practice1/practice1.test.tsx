import { fireEvent, render, screen } from '@testing-library/react';
import Test1 from './practice1';
import '@testing-library/jest-dom/extend-expect'

describe('Counter', () => {
    test('renders correctly', () => {
        //arrange
        render(<Test1 />)
        const countingButton = screen.getByRole("button")

        //act
        fireEvent.click(countingButton)

        //assert
        expect(screen.getByTestId("paragraph")).toHaveTextContent('1')
    })
})