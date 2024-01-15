import { FC, useContext } from 'react'
import { Info, InfoContext } from '../practice3'

const TextField : FC<{
    source : keyof Omit<Info, "confirm">
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