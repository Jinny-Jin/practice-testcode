import { useState } from 'react';
import './styles.css'

const Test2 = ({
    totalItems, itemsPerPage, pageNumberTestId
} : {
    totalItems : number; itemsPerPage : number; pageNumberTestId? : string
}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const pageNumbers = []

    for(let i=1; i<= Math.ceil(totalItems/itemsPerPage); i++){
        pageNumbers.push(i)
    }

    const handleClick = (number : number) => {
        setCurrentPage(number)
    }

    const handlePrevClick = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextClick = () => {
        if(currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    const renderPageNumbers = pageNumbers.map((num) => {
        return(
            <li key={num}>
                <span
                data-testid={pageNumberTestId}
                className={currentPage === num ? "active" : undefined}
                >
                    {num}
                </span>
            </li>
        )
    })

    return (
        <ul className='pagination'>
            <li>
                <a 
                href='#'
                onClick={handlePrevClick}
                className={currentPage === 1 ? "disabled" : undefined}
                >
                    Previous
                </a>
            </li>
            <li>
                {renderPageNumbers}
            </li>
            <li>
                <a
                href='#'
                onClick={handleNextClick}
                className={currentPage === pageNumbers.length ? "disabled" : undefined}
                >
                    Next
                </a>
            </li>
        </ul>
        )
}

export default Test2