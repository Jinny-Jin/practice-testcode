import { useContext, useEffect } from 'react'
import { InfoContext, PartialErrorInfo } from '../pages/practice3/practice3'
import { Info, PartialInfo } from '../types/Info'

export const useInput = ({
    source, validate
} : {
    source : keyof Info,
    validate : any,
}) => {
    const {value, setValue, error, setError} = useContext(InfoContext)


    useEffect(()=>{
        const errors : (string | undefined)[] = validate.map((func:any)=>{
           if(value[source] !== undefined){
              return func(value[source])
           }
         })  
         const err = errors.find(error => error)
         setError({[source] : err} as PartialErrorInfo)
       },[value[source]])

       const onChange = (v:any) => {
        setValue({[source] : v} as PartialInfo)
       }
   
       return {error : error[source], value: value[source], onChange}

}