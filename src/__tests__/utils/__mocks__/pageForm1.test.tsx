import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from './renderWithRouter';
import App from '../../../App';


describe('Testa a página PageForm1', () => {

  test('deve renderizar corretamente', () => {
    renderWithRouter(<App />, {route: '/'});
  
    expect(screen.getByText("Passo 1/3")).toBeInTheDocument();
    expect(screen.getByText("Queremos muito te conhecer")).toBeInTheDocument();
    expect(screen.getByText("Preencha os campos abaixo com o seu nome completo e e-mail."))
      .toBeInTheDocument();
    expect(screen.getByText("Próximo")).toBeInTheDocument();
  });
  
  test('deve preencher o nome e o email corretamente e navegar para a próxima página', async () => {
    const { user } = renderWithRouter(<App />, {route: '/'});

    const nomeInput = screen.getByTestId("user-name");
    const emailInput = screen.getByTestId('user-email');

    fireEvent.change(nomeInput, { target: { value: 'Nome Fictício' } });
    fireEvent.change(emailInput, { target: { value: 'userexample@email.com' } });
  
    const nextButton = screen.getByText('Próximo');
    await user.click(nextButton);
    expect(screen.getByText("Passo 2/3")).toBeInTheDocument();
  });
});
