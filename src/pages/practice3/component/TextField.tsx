import { FC } from 'react'
import { useInput } from '../../../hooks/useInput'
import { Info } from '../../../types/Info'

type StringKeys = {
    [key in keyof Info] : Info[key] extends string ? key : never
}[keyof Info]

const TextField : FC<{
    source : StringKeys
    label : string
    validate : any
}>= ({ label, source, validate}) => {
    const {error, value, onChange} = useInput({source, validate})

    return(
        <>
            {label}
            <input
            data-testid={source}
            onChange={(e)=> onChange(e.target.value)}
            value={value.toString()}
            />
            {error && 
            <p style={{color: "crimson"}}>
                {error}
            </p>
            }
        </>
    )
}

export default TextField