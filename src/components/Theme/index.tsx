import { FormProps } from "../../types";
import { Header } from "../Header"
import { Sidebar } from "../Sidebar"
import * as T from "./styles";
import { useFormContext } from "../../contexts/useFormContext";


export const Theme = ({children}: FormProps) => {
  const { state } = useFormContext();

  return(
    <T.Container>
      <T.Area>
        
        <Header />

        <T.Steps>
          <T.Sidebar>
            <Sidebar
              title="Candidato"
              description="Nome do candidato"
              icon="profile"
              path="/"
              selected={state.currentStep === 1}
            />
            <Sidebar
              title="Nível"
              description="Nível de experiência"
              icon="nivel"
              path="/page2"
              selected={state.currentStep === 2}
            />
            <Sidebar
              title="Redes"
              description="Suas redes sociais"
              icon="redes"
              path="/page3"
              selected={state.currentStep === 3}
            />
          </T.Sidebar>
          <T.Page>
            { children }
          </T.Page>
        </T.Steps>

      </T.Area>
    </T.Container>
  )
}