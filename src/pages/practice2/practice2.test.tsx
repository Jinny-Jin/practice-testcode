import '@testing-library/jest-dom/extend-expect'
import Test2 from './practice2'
import { fireEvent, render, screen } from '@testing-library/react'

const PAGE_NUMBER_TEST_ID = "page-number"

describe("Pagination", () => {
    test("Pagination 컴포넌트 렌더링", () => {

        //arrange
        render(
        <Test2 
        totalItems={6} 
        itemsPerPage={3} 
        pageNumberTestId={PAGE_NUMBER_TEST_ID}
        />
        );
        const prevButton = screen.getByText(/previous/i)
        const nextButton = screen.getByText(/next/i)
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
        render(        
            <Test2 
            totalItems={6} 
            itemsPerPage={3} 
            pageNumberTestId={PAGE_NUMBER_TEST_ID}
            />
        )
        const prevButton = screen.getByText(/previous/i)

        //act
        fireEvent.click(prevButton)

        //assert
        expect(prevButton).toHaveClass("disabled")
    }) 
    test("중간 페이지에서는 이전, 다음 페이지로 이동할 수 있다", () => {

        //arrange
        render(        
            <Test2 
            totalItems={9} 
            itemsPerPage={3} 
            pageNumberTestId={PAGE_NUMBER_TEST_ID}
            />
        )
        const prevButton = screen.getByText(/previous/i)
        const nextButton = screen.getByText(/next/i)

        //act
        fireEvent.click(nextButton)

        //assert
        expect(prevButton).not.toHaveClass("disabled")
        expect(nextButton).not.toHaveClass("disabled")

    })
})