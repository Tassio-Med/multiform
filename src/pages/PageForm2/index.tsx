import { useEffect } from "react";
import { Theme } from "../../components/Theme"
import { useFormContext } from "../../contexts/useFormContext";
import * as F from "./styles";
import { useNavigate, Link } from "react-router-dom";
import { FormActions } from "../../types";
import { SelectOption } from "../../components/SelectOption";

export const PageForm2 = () => {
  const {state, dispatch } = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    });
  },[dispatch]);
  

  const handleNextStep = () => {
    state.name !== "" ? navigate('/page3') : alert("Preenha o seus dados!");
  }
  
  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    });
  }

  return(
    <Theme>
      <F.Container>
        <p> Passo 2/3</p>
        <h1>{state.name}, agora selecione o seu nível.</h1>
        <p>Selecione o campo que corresponde ou chegue mais perto do seu tempo na área de tecnologia.</p>

        <hr />

        <SelectOption
          isSelected={state.level === 0}
          icon = "🥳"
          title = "Júnior"
          description = "Sou desenvolvedor com 1 de mercado"
          onClick = {() => setLevel(0)}
        />

        <SelectOption
          isSelected={state.level === 1}
          icon = "😎"
          title = "Pleno"
          description = "Sou desenvolvedor com um três ou mais anos de mercado"
          onClick = {() => setLevel(1)}
        />

        <SelectOption
          isSelected={state.level === 2}
          icon = "🥸"
          title = "Sênior"
          description = "Sou desenvolvedor com um cinco ou mais anos de mercado"
          onClick = {() => setLevel(2)}
        />

        <Link to="/">Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </F.Container>
    </Theme>
  )
}