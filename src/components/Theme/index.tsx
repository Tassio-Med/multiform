import { FormProps } from "../../types";
import { Header } from "../Header"
import { Sidebar } from "../Sidebar"
import * as T from "./styles";



export const Theme = ({children}: FormProps) => {
  return(
    <T.Container>
      <T.Area>
        
        <Header />

        <T.Steps>
          <T.Sidebar>
            <Sidebar />
            <Sidebar />
            <Sidebar />
          </T.Sidebar>
          <T.Page>
            { children }
          </T.Page>
        </T.Steps>

      </T.Area>
    </T.Container>
  )
}