import * as S from "./styles";
import { SelectProps } from "../../types";



export const SelectOption = ({isSelected, icon, title, description, onClick}: SelectProps) => {
  return(
    <S.Container onClick={onClick} isSelected={isSelected} >
      <S.Icon>{icon}</S.Icon>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Info>
    </S.Container>
  )
}