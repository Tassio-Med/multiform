import { useContext } from 'react';
import { FormContext } from './index'; // Importe o contexto correto

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("Erro aí hem");
  }

  return context;
};
