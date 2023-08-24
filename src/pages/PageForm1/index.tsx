import { Theme } from "../../components/Theme"
import * as F from "./styles";
import { useNavigate } from "react-router-dom";

export const PageForm1 = () => {
  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate('/page2')
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
            autoFocus  
          />

          <button onClick={handleNextStep}>Próximo</button>
        </label>
      </F.Container>
    </Theme>
  )
}