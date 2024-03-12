import { ButtonContainer } from "./style"

export default function Button({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
      Add
    </ButtonContainer>
  )
}
