import { useReducer, createContext } from 'react'
import Form from './component/Form'
import CheckboxField from './component/CheckboxField'
import TextField from './component/TextField'
import { checked, maxLength, minLength } from './validation'

export interface Info {
    name : string,
    password : string,
    confirm : boolean
}

const defaultInfo = {
    name : "",
    password : "",
    confirm : false
}

export type PartialInfo = {[key in keyof Info] : Record<key, Info[key]>}[keyof Info]

export const InfoContext = createContext<{
    value: Info;
    setValue: (v: PartialInfo) => void;
  }>({
    value: defaultInfo,
    setValue: (v) => {},
  });
  
const Test3 = () => {
    const [info, setInfo] = useReducer((prevInfo: Info, partialInfo : any)=>{
        return {
            ...prevInfo, 
            ...partialInfo
        }
    },defaultInfo)

    const onSubmit = () => {
        if(info.confirm){
            alert(`name: ${info.name}`)
        }
    }

    return (
        <InfoContext.Provider value={{value : info, setValue : setInfo}}>
        <Form onSubmit={onSubmit}>
            <TextField
                source='name'
                label='이름'
                validate = {[minLength(2),maxLength(6)]}
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