import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from './renderWithRouter';
import App from '../../../App';
// import { BrowserRouter } from 'react-router-dom';
// import { vi } from 'vitest';
// import { PageForm1 } from '../../../pages/PageForm1';
// import * as router from 'react-router'


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
    fireEvent.change(nomeInput, { target: { value: 'José Henrique' } });
    fireEvent.change(emailInput, { target: { value: 'jose2021@email.com' } });
  
    const nextButton = screen.getByText('Próximo');
    await user.click(nextButton);
  
  });
  
  test('deve exibir um alerta se o nome ou o email não forem preenchidos ao tentar avançar', async () => {
    const { user } = renderWithRouter(<App />, {route: '/'});
  
    const nextButton = screen.getByText('Próximo');
    await user.click(nextButton);
  });

  // test('deve passar para a segunda página após o clique no botão', async () => {
   
  //   vi.mock('react-router-dom', () => ({
  //     ...vi.requireActual('react-router-dom'),
  //     useNavigate: () => vi.fn(), // Mock the navigate function
  //   }));

  //   render(
  //     <BrowserRouter>
  //       <PageForm1 />
  //     </BrowserRouter>
  //   );
           
  //   const mockNavigate = vi.fn();
  //   vi.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

    
  //   const nextPage = screen.getByText("Próximo");
  //   fireEvent.click(nextPage);
  //   expect(mockNavigate).toHaveBeenCalledWith('/page2');
  //   expect(screen.getByText("Passo 2/3")).toBeInTheDocument();
  // });

});
