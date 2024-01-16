import { FC, useContext, useEffect, useState } from 'react'
import { Info, InfoContext, PartialInfo } from '../practice3'

type StringKeys = {
    [key in keyof Info] : Info[key] extends string ? key : never
}[keyof Info]

const TextField : FC<{
    source : StringKeys
    label : string
    validate : any
}>= ({ label, source, validate}) => {
    const {value, setValue} = useContext(InfoContext)
    const [error, setError] = useState<string>()

    useEffect(()=>{
     const errors : (string | undefined)[] = validate.map((func:any)=>{
        if(value[source]){
           return func(value[source])
        }
      })  
      const err = errors.find(error => error)
      setError(err)
    },[value[source]])

    return(
        <>
            {label}
            <input
            onChange={(e)=>setValue({ [source] : e.target.value} as PartialInfo)}
            value={value[source].toString()}
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