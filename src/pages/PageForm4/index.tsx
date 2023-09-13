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

  const firstName = () => {
    const complete = state.name;
    const first = complete.split(" ");
    return first[0];
  }

  return(
    <Theme>
      <F.Container>
        <h1>Cadastro concluído com sucesso! ✅</h1>
        <p>{firstName()}, muito obrigado por ter chegado até aqui. Abaixo estão os dados que você nos disponibilizou para concluir o seu cadastro.</p>

        <F.Box>
          <h5>Nome</h5>
          <F.Data>
            <p>{state.name}</p>
          </F.Data>
        </F.Box>
        <F.Box>
          <h5>Email</h5>
          <F.Data>
            <p>{state.email}</p>
          </F.Data>
        </F.Box>

        <F.Dev>
          <F.Box>
            <h5>Nível</h5>
            <F.Data>
              <p>{ getLevel() }</p>
            </F.Data>
          </F.Box>
          <F.Box>
              <h5>Github</h5>
            <F.Data>
              <p>{state.github}</p>
            </F.Data>
          </F.Box>
        </F.Dev>
        <F.Dev>
          <F.Box>
              <h5>Linkedin</h5>
            <F.Data>
              <p>{state.linkedin}</p>
            </F.Data>
          </F.Box>
          <F.Box>
              <h5>Telefone</h5>
            <F.Data>
              <p>{state.telefone}</p>
            </F.Data>
          </F.Box>
        </F.Dev>

        <Link to="/page3">Voltar</Link>
      </F.Container>
    </Theme>
  )
}