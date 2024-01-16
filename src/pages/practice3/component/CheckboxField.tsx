import { FC, useContext, useEffect, useState } from 'react'
import { Info, InfoContext } from '../practice3'

type BooleanKeys = {
    [key in keyof Info] : Info[key] extends boolean ? key : never
}[keyof Info]

const CheckboxField : FC<{
    source : BooleanKeys
    label : string
    validate : any
}> = ({label, source, validate}) => {
    const {value, setValue} = useContext(InfoContext)
    const [error, setError] = useState<string>()

    useEffect(()=>{
        const errors : (string | undefined)[] = validate.map((func : any) => {
            if(value[source] !== undefined){
               return func(value[source])
            }
       })
        const err = errors.find(err=>err)
     
       setError(err)
    },[value[source]])

    return(
        <>
            {label}
            <input
            onChange={(e)=> setValue({ [source] : e.target.checked})}
            value={value[source].toString()}
            type={"checkbox"}
            />
            {error &&
            <p style={{color:"crimson"}}>{error}</p>
            }
        </>
    )
}

export default CheckboxField