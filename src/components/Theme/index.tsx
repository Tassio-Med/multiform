import { Header } from "../Header"
import { Sidebar } from "../Sidebar"


export const Theme = () => {
  return(
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
        <Sidebar />
        <Sidebar />
      </div>
      <div>
        {/* Page  */}
      </div>
    </div>
  )
}