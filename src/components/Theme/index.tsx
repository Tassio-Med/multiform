import { Header } from "../Header"
import { Sidebar } from "../Sidebar"
import * as T from "./styles";


export const Theme = () => {
  return(
    <T.Container>
      <T.Area>
        <T.Steps>
          <Header />
          <T.Sidebar>
            <Sidebar />
            <Sidebar />
            <Sidebar />
          </T.Sidebar>
          <T.Page>
            {/* Page  */}
          </T.Page>
        </T.Steps>
      </T.Area>
    </T.Container>
  )
}