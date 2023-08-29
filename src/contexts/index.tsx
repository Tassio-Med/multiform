import {  createContext, Reducer, useReducer} from "react";
import { State, FormProps, FormActions, Action, ContextTypes } from "../types";

const initialData: State = {
  currentStep: 0,
  name: '',
  email: '',
  github: '',
  linkedin: '',
  telefone: '',
  level: 0,
}


export const FormContext = createContext<ContextTypes | undefined>(undefined);

const formReducer: Reducer<State, Action> = (state, action) => {
  switch(action.type){
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return {...state, name: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload};
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    case FormActions.setLinkedin:
      return { ...state, linkedin: action.payload };
    case FormActions.setTelefone:
      return { ...state, telefone: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    default:
      return state;
    }
}

// Provider

export const FormProvider = ({children}: FormProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };

  return(
    <FormContext.Provider value={value}>
      { children }
    </FormContext.Provider>
  )
}

