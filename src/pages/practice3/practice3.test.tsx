import { fireEvent, render, screen } from '@testing-library/react';
import Test3 from './practice3';
import "@testing-library/jest-dom/extend-expect"

const renderTest3Page = () => {
    render(<Test3/>)
    const nameLabel = screen.getByText(/이름/i)
    const nameInput = screen.getByTestId("name")
    const passwordLabel = screen.getByText(/비밀번호/i)
    const passwordInput = screen.getByTestId("password")
    const checkbox = screen.getByRole("checkbox")
    const button = screen.getByRole("button")

    return {nameLabel, nameInput, passwordLabel, passwordInput, checkbox, button}
}

describe("Test3", ()=> {
    test("Label과 Input 그리고 버튼이 제대로 렌더링 되어야 함", ()=> {
        //arrange
        const {nameLabel, nameInput, passwordLabel,passwordInput, checkbox, button} = renderTest3Page()

        //assert
        expect(nameLabel).toBeInTheDocument()
        expect(nameInput).toBeInTheDocument()

        expect(passwordLabel).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()

        expect(checkbox).toBeInTheDocument()
        expect(button).toBeInTheDocument()

    })
    test("이름과 비밀번호를 입력하고 약관에 동의한 다음 버튼을 클릭하면 alert 창으로 입력한 값이 출력되어야 함",()=>{
        //arrange
        const alertMock = jest.fn()
        window.alert = alertMock
        const {nameInput, passwordInput,checkbox, button} = renderTest3Page()

        //act
        fireEvent.change(nameInput, {target : {value : "Jin"}})
        fireEvent.change(passwordInput, {target : {value : "1234567"}})
        fireEvent.click(checkbox)
        fireEvent.click(button)

        //assert
        expect(alertMock).toHaveBeenCalledWith("name: Jin, password: 1234567")

    })
    test("약관에 동의하지 않으면 alert 창이 출력되지 말아야 함",()=>{
        //arrange
        const alertMock = jest.fn()
        window.alert = alertMock
        const {button} = renderTest3Page()

        //act
        fireEvent.click(button)

        //assert
        expect(alertMock).not.toHaveBeenCalled()

    })
    test("이름은 3자 미만 입력하면 에러가 출력되어야 함",()=>{
        //arrange
        const {nameInput} = renderTest3Page()

        //act
        fireEvent.change(nameInput, {target : {value : "J"}})

        //assert
        expect(screen.getByText("3자 이상 입력해주세요")).toBeInTheDocument()

    })    
    test("이름은 6자 초과 입력하면 에러가 출력되어야 함",()=>{
        //arrange
        const {nameInput} = renderTest3Page()

        //act
        fireEvent.change(nameInput, {target : {value : "GaengJin"}})

        //assert
        expect(screen.getByText("6자 이하로 입력해주세요")).toBeInTheDocument()

    })
    test("패스워드는 6자 이상 12자 이하 입력되어야 함",()=>{
        //arrange
        const {passwordInput} = renderTest3Page()

        //act
        fireEvent.change(passwordInput, {target : {value : "1234567"}})

        //assert
        expect(screen.queryByText("6자 이상 입력해주세요")).toBeNull()
        expect(screen.queryByText("12자 이하로 입력해주세요")).toBeNull()

    })
    test("패스워드는 6자 미만 입력하면 에러가 출력되어야 함",()=>{
        //arrange
        const {passwordInput} = renderTest3Page()

        //act
        fireEvent.change(passwordInput, {target : {value : "123"}})

        //assert
        expect(screen.getByText("6자 이상 입력해주세요")).toBeInTheDocument()

    })
    test("패스워드는 12자 초과 입력하면 에러가 출력되어야 함",()=>{
        //arrange
        const {passwordInput} = renderTest3Page()

        //act
        fireEvent.change(passwordInput, {target : {value : "1234567890123"}})

        //assert
        expect(screen.getByText("12자 이하로 입력해주세요")).toBeInTheDocument()

    })
    test("약관에 동의하지 않으면 에러가 출력되어야 함",()=>{
        //arrange
        const {checkbox} = renderTest3Page()

        //act
        fireEvent.click(checkbox)
        fireEvent.click(checkbox)

        //assert
        expect(screen.getByText("반드시 체크해주세요")).toBeInTheDocument()

    })
    test("에러가 있는 경우 제출 버튼 클릭이 안 됨", () => {
        //arrange
        const alertMock = jest.fn()
        window.alert = alertMock
        const {nameInput, button} = renderTest3Page()

        //act
        fireEvent.change(nameInput, {target : {value : "J"}})
        fireEvent.click(button)

        //assert
        expect(alertMock).not.toHaveBeenCalled()

    })
})