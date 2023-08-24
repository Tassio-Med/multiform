import { ReactNode } from "react";

export enum FormActions {
  setCurrentStep,
  setName,
  setEmail,
  setGithub,
  setTelefone,
  setLevel,
}

export type State = {
  currentStep: number;
  name: string;
  email: string;
  github: string;
  telefone: string;
  level: 0 | 1;
}

export type Action = 
| { type: FormActions.setCurrentStep, payload: number }
| { type: FormActions.setName, payload: string }
| { type: FormActions.setEmail, payload: string }
| { type: FormActions.setGithub, payload: string }
| { type: FormActions.setTelefone, payload: string }
| { type: FormActions.setLevel, payload: 0 | 1 }

export type ContextTypes = {
  state: State;
  dispatch: (action: Action) => void;
}

export type FormProps = {
  children: ReactNode;
}
