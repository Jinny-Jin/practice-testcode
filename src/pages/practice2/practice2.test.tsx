import '@testing-library/jest-dom/extend-expect'
import Test2 from './practice2'
import { render, screen } from '@testing-library/react'

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
})