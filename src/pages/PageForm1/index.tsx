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
  },[dispatch]);

  const handleNextStep = () => {
    const completeName = state.name;
    if(completeName.split(' ').length < 2 || state.email == "" ){
      alert("Preenha seu nome completo e seu e-mail!")
    } else {
      navigate('/page2');
    }
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });
  }

  return(
    <Theme>
      <F.Container>
        <p> Passo 1/3</p>
        <h1>Queremos muito te conhecer</h1>
        <p>Preencha os campos abaixo com o seu nome completo e e-mail.</p>

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
        <label>
          Seu email
          <input
            type="text"
            // autoFocus
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

          <button onClick={handleNextStep}>Próximo</button>
      </F.Container>
    </Theme>
  )
}