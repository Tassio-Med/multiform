import { ReactNode } from "react";

export enum FormActions {
  setCurrentStep,
  setName,
  setEmail,
  setGithub,
  setLinkedin,
  setTelefone,
  setLevel,
}

export type State = {
  currentStep: number;
  name: string;
  email: string;
  github: string;
  linkedin: string,
  telefone: string;
  level: 0 | 1 | 2;
}

export type Action = {
  type: FormActions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}


export type ContextTypes = {
  state: State;
  dispatch: (action: Action) => void;
}

export type FormProps = {
  children: ReactNode;
}

export type SelectProps = {
  isSelected: boolean,
  icon: string,
  title: string,
  description: string,
  onClick: () => void;
}

export type SidebarProps = {
  icon: string,
  title: string,
  description: string,
  path: string,
  selected: boolean;
}