import { Routes, Route } from "react-router-dom";
import { PageForm1 } from "./pages/PageForm1";
import { PageForm2 } from "./pages/PageForm2";
import { PageForm3 } from "./pages/PageForm3";
import { PageForm4 } from "./pages/PageForm4";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={ PageForm1 }/>
      <Route path="/page2" Component={ PageForm2 }/>
      <Route path="/page3" Component={ PageForm3 }/>
      <Route path="/page4" Component={ PageForm4 }/>
    </Routes>
  )
}