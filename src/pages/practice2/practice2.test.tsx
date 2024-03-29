import '@testing-library/jest-dom/extend-expect'
import Test2 from './practice2'
import { fireEvent, render, screen } from '@testing-library/react'

const PAGE_NUMBER_TEST_ID = "page-number"

const renderPageNumbers = (totalItem? : number) => {
    render(
        <Test2 
        totalItems={totalItem ?? 6} 
        itemsPerPage={3} 
        pageNumberTestId={PAGE_NUMBER_TEST_ID}
        />
        );
        const prevButton = screen.getByText(/previous/i)
        const nextButton = screen.getByText(/next/i)

        return {
            prevButton,
            nextButton
        }
}

describe("Pagination", () => {
    test("Pagination 컴포넌트 렌더링", () => {

        //arrange
        const {prevButton, nextButton} = renderPageNumbers()
        const pageNumbers = screen.getAllByTestId(PAGE_NUMBER_TEST_ID)

        //assert
        pageNumbers.forEach((numb,i)=>{
            expect(numb).toHaveTextContent(`${i+1}`)
        })
        expect(prevButton).toBeInTheDocument()
        expect(nextButton).toBeInTheDocument()
    })

    test("첫 번째 페이지에서는 이전 페이지로 돌아갈 수 없음", ()=>{
        
        //arrange
        const {prevButton} = renderPageNumbers()

        //act
        fireEvent.click(prevButton)

        //assert
        expect(prevButton).toHaveClass("disabled")
    }) 
    test("중간 페이지에서는 이전, 다음 페이지로 이동할 수 있다", () => {

        //arrange
        const {prevButton, nextButton} = renderPageNumbers(9)

        //act
        fireEvent.click(nextButton)

        //assert
        expect(prevButton).not.toHaveClass("disabled")
        expect(nextButton).not.toHaveClass("disabled")

    })

    test("마지막 페이지에서는 다음 버튼을 클릭했을 때 다음 페이지로 이동할 수 없음", () => {

        //arrange
        const {nextButton} = renderPageNumbers()

        //act
        fireEvent.click(nextButton)

        //assert
        expect(nextButton).toHaveClass("disabled")
    })
    test("페이지네이션 숫자를 누르면 해당 숫자 페이지로 이동", () => {

        //arrange
        renderPageNumbers()
        const pageNumbers = screen.getAllByTestId(PAGE_NUMBER_TEST_ID)

        //act
        fireEvent.click(pageNumbers[1])

        //assert
        expect(pageNumbers[1]).toHaveClass("active")
    })
})