import { useEffect } from "react";
import { Theme } from "../../components/Theme"
import { useFormContext } from "../../contexts/useFormContext";
import { FormActions } from "../../types";
import { Link } from "react-router-dom";
import * as F from "./styles";

export const PageForm4 = () => {
  const { state, dispatch } = useFormContext();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 4
    });
  },[dispatch]);


  return(
    <Theme>
      <F.Container>
        <h1>Cadastro concluído com sucesso! ✅</h1>
        <p>{state.name} muito obrigado por ter chegado até aqui. Abaixo estão os dados que você nos disponibilizou para concluir o seu cadastro.</p>

        <F.Box>
          <h4>Seu nivel</h4>
          <p>{state.level}</p>
        </F.Box>
        <F.Box>
          <h4>Seus Github e seu Linkedin</h4>
          <p>
            <strong>Github:</strong> {state.github}
          </p>
          <p>
            <strong>Linkedin:</strong> {state.linkedin}
          </p>
        </F.Box>
        <F.Box>
          <h4>Seu número para entrarmos em contato</h4>
          <p>{state.telefone}</p>
        </F.Box>

        <Link to="/page3">Voltar</Link>
      </F.Container>
    </Theme>
  )
}