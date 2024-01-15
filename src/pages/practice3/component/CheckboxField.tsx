import { FC, useContext } from 'react'
import { Info, InfoContext } from '../practice3'

const CheckboxField : FC<{
    source : keyof Omit<Info, "name">
    label : string
}> = ({label, source}) => {
    const {value, setValue} = useContext(InfoContext)

    return(
        <>
            {label}
            <input
            onChange={(e)=> setValue({ [source] : e.target.checked})}
            value={value[source].toString()}
            type={"checkbox"}
            />
        </>
    )
}

export default CheckboxField