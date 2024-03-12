import  { InputContainer } from './style'


export default function Input({value, onChange}) {
  return (
    <InputContainer value = {value} onChange={onChange}>
      <input></input>
    </InputContainer>
  )
}
