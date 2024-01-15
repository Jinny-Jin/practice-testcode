import { FC, useContext } from 'react'
import { Info, InfoContext } from '../practice3'

type BooleanKeys = {
    [key in keyof Info] : Info[key] extends boolean ? key : never
}[keyof Info]

const CheckboxField : FC<{
    source : BooleanKeys
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