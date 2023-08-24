import { FormProvider } from "./contexts";
import { Router } from "./router";

const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  )
}

export default App;
