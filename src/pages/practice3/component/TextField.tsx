import { FC, useContext } from 'react'
import { Info, InfoContext } from '../practice3'

type StringKeys = {
    [key in keyof Info] : Info[key] extends string ? key : never
}[keyof Info]

const TextField : FC<{
    source : StringKeys
    label : string
}>= ({ label, source}) => {
    const {value, setValue} = useContext(InfoContext)

    return(
        <>
            {label}
            <input
            onChange={(e)=>setValue({ [source] : e.target.value})}
            value={value[source].toString()}
            />
        </>
    )
}

export default TextField