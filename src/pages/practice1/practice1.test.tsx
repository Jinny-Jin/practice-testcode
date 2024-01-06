import { fireEvent, render, screen } from '@testing-library/react';
import Test1 from './practice1';

describe('Counter', () => {
    test('renders correctly', () => {
        //arrange
        render(<Test1 />)

        //act
        fireEvent.click(screen.getByText("Click me"))

        //assert
        expect(screen.getByTestId("paragraph")).toHaveTextContent("1")
    })
})