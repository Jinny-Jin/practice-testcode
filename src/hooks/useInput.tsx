import { useContext, useEffect, useState } from 'react'
import { Info, InfoContext, PartialInfo } from '../pages/practice3/practice3'

export const useInput = ({
    source, validate
} : {
    source : keyof Info,
    validate : any,
}) => {
    const {value, setValue} = useContext(InfoContext)
    const [error, setError] = useState<string>()


    useEffect(()=>{
        const errors : (string | undefined)[] = validate.map((func:any)=>{
           if(value[source] !== undefined){
              return func(value[source])
           }
         })  
         const err = errors.find(error => error)
         setError(err)
       },[value[source]])

       const onChange = (v:any) => {
        setValue({[source] : v} as PartialInfo)
       }
   
       return {error, value: value[source], onChange}

}