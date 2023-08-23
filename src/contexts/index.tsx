import {  createContext, useReducer} from "react";
import { State, FormProviderProps, FormActions, Action, ContextTypes } from "../types";

const initialData: State = {
  currentStep: 0,
  name: '',
  email: '',
  github: '',
  telefone: '',
  level: 0,
}


export const FormContext = createContext<ContextTypes | undefined>(undefined);

const formReducer = (state: State, action: Action) => {
  switch(action.type){
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setEmail:
      return { ...state, name: action.payload};
    case FormActions.setGithub:
      return { ...state, github: action.payload};
    case FormActions.setTelefone:
      return { ...state, telefone: action.payload};
    case FormActions.setLevel:
      return { ...state, level: action.payload};
    default:
      return state;
    }
}

// Provider

export const FormProvider = ({children}: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };

  return(
    <FormContext.Provider value={value}>
      { children }
    </FormContext.Provider>
  )
}


// Meu Context Hook
// export const useFormContext = () => {
//   const context = useContext(FormContext);
//   if(context === undefined ) {
//     throw new Error("Erro aí hem")
//   }
//   return context;
// }

