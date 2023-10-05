import { FormProvider } from "./contexts";
import { RouterForm } from "./router";

const App = () => {
  return (
    <FormProvider>
      <RouterForm />
    </FormProvider>
  )
}

export default App;
