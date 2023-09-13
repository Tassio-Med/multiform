import { useEffect } from "react";
import { Theme } from "../../components/Theme"
import { useFormContext } from "../../contexts/useFormContext";
import * as F from "./styles";
import { useNavigate } from "react-router-dom";
import { FormActions } from "../../types";
import { SelectOption } from "../../components/SelectOption";
import { MdKeyboardDoubleArrowLeft as Arrow } from "react-icons/md"

export const PageForm2 = () => {
  const {state, dispatch } = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    if(state.name === ''){
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      });
    }
  },[]);
  

  const handleNextStep = () => {
    state.name !== "" ? navigate('/page3') : alert("Preenha o seus dados!");
  }
  
  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    });
  }

  const firstName = () => {
    const complete = state.name;
    const first = complete.split(" ");
    return first[0];
  }

  return(
    <Theme>
      <F.Container>
        <p> Passo 2/3</p>
        <h1>{ firstName() }, agora selecione o seu nível.</h1>
        <p>Selecione o campo que corresponde ou chegue mais perto do seu tempo na área de tecnologia.</p>

        <hr />

        <SelectOption
          isselected={state.level === 0}
          icon = "🥳"
          title = "Júnior"
          description = "Sou desenvolvedor com 1 de mercado"
          onClick = {() => setLevel(0)}
        />

        <SelectOption
          isselected={state.level === 1}
          icon = "😎"
          title = "Pleno"
          description = "Sou desenvolvedor com um três ou mais anos de mercado"
          onClick = {() => setLevel(1)}
        />

        <SelectOption
          isselected={state.level === 2}
          icon = "🥸"
          title = "Sênior"
          description = "Sou desenvolvedor com um cinco ou mais anos de mercado"
          onClick = {() => setLevel(2)}
        />

        <F.Buttons>
          <F.Back to="/"><Arrow fontSize="23px"/>Voltar</F.Back>
          <button onClick={handleNextStep}>Próximo</button>
        </F.Buttons>
      </F.Container>
    </Theme>
  )
}