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

  const getLevel = () => {
    if(state.level === 0) {
      return "Júnior"
    }else if(state.level === 1) {
       return "Pleno"
    } else {
      return "Sênior"
    }
  };

  return(
    <Theme>
      <F.Container>
        <h1>Cadastro concluído com sucesso! ✅</h1>
        <p>{state.name} muito obrigado por ter chegado até aqui. Abaixo estão os dados que você nos disponibilizou para concluir o seu cadastro.</p>

        <F.Box>
          <h4>Nome</h4>
          <F.Data>
            <p>{state.name}</p>
          </F.Data>
        </F.Box>

        <F.Box>
          <h4>Nível</h4>
          <F.Data>
            <p>{ getLevel() }</p>
          </F.Data>
        </F.Box>
        <F.Box>
          <F.Data>
            <h4>Github</h4>
            <p>{state.github}</p>
          </F.Data>
        </F.Box>
        <F.Box>
          <F.Data>
            <h4>Linkedin</h4>
            <p>{state.linkedin}</p>
          </F.Data>
        </F.Box>
        <F.Box>
          <F.Data>
            <h4>Telefone</h4>
            <p>{state.telefone}</p>
          </F.Data>
        </F.Box>

        <Link to="/page3">Voltar</Link>
      </F.Container>
    </Theme>
  )
}