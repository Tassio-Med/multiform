import { ChangeEvent, useEffect } from "react";
import { Theme } from "../../components/Theme"
import { useFormContext } from "../../contexts/useFormContext";
import * as F from "./styles";
import { useNavigate } from "react-router-dom";
import { FormActions } from "../../types";

export const PageForm1 = () => {
  const { state, dispatch } = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  },[]);

  const handleNextStep = () => {
    return state.name !== "" ? navigate('/page2') : alert("Preenha o seu nome completo!");
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  }

  return(
    <Theme>
      <F.Container>
        <p> Passo 1/3</p>
        <h1>Queremos muito te conhecer</h1>
        <p>Preencha o campo abaixo com o seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input
            type="text"
            // autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

          <button onClick={handleNextStep}>Próximo</button>
      </F.Container>
    </Theme>
  )
}