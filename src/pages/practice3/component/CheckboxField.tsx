import { FC } from 'react'
import { Info } from '../practice3'
import { useInput } from '../../../hooks/useInput'

type BooleanKeys = {
    [key in keyof Info] : Info[key] extends boolean ? key : never
}[keyof Info]

const CheckboxField : FC<{
    source : BooleanKeys
    label : string
    validate : any
}> = ({label, source, validate}) => {
    const {error, value, onChange} = useInput({source, validate})

    return(
        <>
            {label}
            <input
            onChange={(e)=> onChange(e.target.checked)}
            value={value.toString()}
            type={"checkbox"}
            />
            {error &&
            <p style={{color:"crimson"}}>{error}</p>
            }
        </>
    )
}

export default CheckboxField