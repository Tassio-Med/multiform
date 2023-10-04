import { useEffect } from "react";
import { Theme } from "../../components/Theme"
import { Buttons } from "../../components/Buttons";
import { useFormContext } from "../../contexts/useFormContext";
import * as F from "./styles";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FormActions } from "../../types";

export const PageForm3 = () => {
  const {state, dispatch } = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    if(state.name === ''){
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
  }, []);


  const handleNextStep = () => {
    if(state.linkedin !== '' && state.github !== '' && state.telefone !== '') {
      navigate('/page4');
      console.log(state);
    } else {
        alert("Preencha os dados");
    }
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });
  }

  const handleLinkedinChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setLinkedin,
      payload: e.target.value
    });
  }
  
  const handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setTelefone,
      payload: e.target.value
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
        <p> Passo 3/3</p>
        <h1>{firstName()}, agora queremos ver os seus projetos e suas principais stacks.</h1>
        <p>Nos informe os dados requeridos abaixo. Todos os dados são importantes para você destacar no processo seletivo!</p>

        <hr />

        <label>
          Github
          <input
            data-testid="github"
            type="text"
            // autoFocus
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>
        <label htmlFor="">
          LinkedIn
          <input
            data-testid="linkedin"
            type="text"
            // autoFocus
            value={state.linkedin}
            onChange={handleLinkedinChange}
          />
        </label>
        <label>
          Telefone
          <input
          data-testid="telefone"
            type="text"
            // autoFocus
            value={state.telefone}
            onChange={handleTelefoneChange}
          />
        </label>
        <Buttons prevLink="/page2" onNextClick={handleNextStep}/>
      </F.Container>
    </Theme>
  )
}