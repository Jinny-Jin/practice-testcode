import { FC } from 'react'

const CheckboxField : FC<{
    value : boolean
    setValue : (v:boolean) => void
    label : string
}> = ({label, value, setValue}) => {
    return(
        <>
            {label}
            <input
            onChange={(e)=> setValue(e.target.checked)}
            value={value.toString()}
            type={"checkbox"}
            />
        </>
    )
}

export default CheckboxField