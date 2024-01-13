import { fireEvent, render, screen } from '@testing-library/react';
import Test3 from './practice3';
import "@testing-library/jest-dom/extend-expect"
import { check } from 'ts-toolbelt/out/Test';

describe("Test3", ()=> {
    test("Label과 Input 그리고 버튼이 제대로 렌더링 되어야 함", ()=> {
        //arrange
        render(<Test3/>)
        const nameLabel = screen.getByText(/이름/i)
        const nameInput = screen.getByRole("textbox")
        const checkbox = screen.getByRole("checkbox")
        const button = screen.getByRole("button")

        //assert
        expect(nameLabel).toBeInTheDocument()
        expect(nameInput).toBeInTheDocument()
        expect(checkbox).toBeInTheDocument()
        expect(button).toBeInTheDocument()

    })
    test("이름을 입력하고 약관에 동의한 다음 버튼을 클릭하면 alert 창으로 입력한 값이 출력되어야 함",()=>{
        //arrange
        const alertMock = jest.fn()
        window.alert = alertMock

        render(<Test3/>)
        const nameInput = screen.getByRole("textbox")
        const checkbox = screen.getByRole("checkbox")
        const button = screen.getByRole("button")

        //act
        fireEvent.change(nameInput, {target : {value : "Jin"}})
        fireEvent.click(checkbox)
        fireEvent.click(button)

        //assert
        expect(alertMock).toHaveBeenCalledWith("name: Jin")

    })
    test.skip("약관에 동의하지 않으면 alert 창이 출력되지 말아야 함",()=>{
        //arrange

        //act

        //assert
    })
})