import { useReducer, createContext, useState } from 'react'
import Form from './component/Form'
import CheckboxField from './component/CheckboxField'
import TextField from './component/TextField'
import { checked, maxLength, minLength } from './validation/validation'
import { Info, PartialInfo } from '../../types/Info'

const defaultInfo = {
    name : "",
    password : "",
    confirm : false
}

type ErrorInfo = {[key in keyof Info] : string | undefined}

export type PartialErrorInfo = {[key in keyof ErrorInfo] : Record<key, ErrorInfo[key]>}[keyof ErrorInfo]

const defaultErrorInfo = Object.keys(defaultInfo).reduce((acc,key)=>{
    acc[key as keyof ErrorInfo] = undefined
    return acc
}, {} as ErrorInfo)

export const InfoContext = createContext<{
    value: Info;
    setValue: (v: PartialInfo) => void;
    error : ErrorInfo;
    setError : (e : PartialErrorInfo) => void
  }>({
    value: defaultInfo,
    setValue: (v) => {},
    error : defaultErrorInfo,
    setError : (e) => {}
  });
  
const Test3 = () => {
    const [info, setInfo] = useReducer((prevInfo: Info, partialInfo : PartialInfo)=>{
        return {
            ...prevInfo, 
            ...partialInfo
        }
    },defaultInfo)
    const [error, setError] = useState<ErrorInfo>(defaultErrorInfo)


    const onSubmit = () => {
        if(Object.values(error).every(e => e === undefined)){
            alert(`name: ${info.name}, password: ${info.password}`)
        }
    }

    return (
        <InfoContext.Provider value={{value : info, setValue : setInfo, error, setError : (e) => setError(prev => ({...prev, ...e}))}}>
        <Form onSubmit={onSubmit}>
            <TextField
                source='name'
                label='이름'
                validate = {[minLength(3),maxLength(6)]}
            />
            <TextField
                source='password'
                label='비밀번호'
                validate = {[minLength(6),maxLength(12)]}
            />

            <CheckboxField
                source='confirm'
                label='위 내용이 제출됩니다 동의하십니까?'
                validate = {[checked]}
            />
        </Form>
        </InfoContext.Provider>
        )
}

export default Test3 