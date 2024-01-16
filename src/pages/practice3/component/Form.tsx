import { FC, ReactElement } from 'react';

const Form : FC<{
    onSubmit : () => void;
    children : ReactElement | ReactElement[]
}> = ({onSubmit, children}) => {
    return(
        <div style={{
            maxWidth : 300,
            display: "flex",
            flexDirection : "column",
            gap: 4,
            alignItems: "flex-start"
        }}>
            {children}
            <button type={"submit"} onClick={onSubmit}> 
                제출
            </button>
        </div>
    )
}

export default Form