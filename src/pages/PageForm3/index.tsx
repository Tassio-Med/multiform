import { useEffect } from "react";
import { Theme } from "../../components/Theme"
import { useFormContext } from "../../contexts/useFormContext";
import * as F from "./styles";
import { ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FormActions } from "../../types";

export const PageForm3 = () => {
  const {state, dispatch } = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    });
  }, [dispatch]);

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

  const handleNextStep = () => {
    state.name !== "" ? navigate('/page4') : alert("Preencha os dados informados!");
  }
  

  return(
    <Theme>
      <F.Container>
        <p> Passo 3/3</p>
        <h1>{state.name}, agora queremos ver os seus projetos e suas principais stacks.</h1>
        <p>Nos informe os dados requeridos abaixo. Todos os dados são importantes para você destacar no processo seletivo!</p>

        <hr />

        <label>
          Github
          <input
            type="text"
            // autoFocus
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>
        <label htmlFor="">
          LinkedIn
          <input
            type="text"
            // autoFocus
            value={state.linkedin}
            onChange={handleLinkedinChange}
          />
        </label>
        <label>
          Telefone
          <input
            type="text"
            // autoFocus
            value={state.telefone}
            onChange={handleTelefoneChange}
          />
        </label>


        <Link to="/page2">Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </F.Container>
    </Theme>
  )
}