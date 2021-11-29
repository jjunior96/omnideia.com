import { screen, fireEvent } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Menu from '.';

// Mock para o componente ActiveLink
jest.mock('components/ActiveLink', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ActiveLink">ActiveLink</div>;
    }
  };
});

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    // Verifica se esta renderizando o ActiveLink
    expect(screen.getAllByText(/activeLink/i));
  });

  it('should handle open/close mobile menu', () => {
    renderWithTheme(<Menu />);

    // Selecionar o menuFull
    const menuFullElement = screen.getByRole('navigation', { hidden: true });

    // Verificar se o menu esta escondido
    expect(menuFullElement.getAttribute('aria-hidden')).toBe('true');
    expect(menuFullElement).toHaveStyle({
      opacity: 0
    });

    // Clicar no botão de abrir o mennu e verificar se abriu
    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(menuFullElement.getAttribute('aria-hidden')).toBe('false');
    expect(menuFullElement).toHaveStyle({
      opacity: 1
    });

    // Clicar no botão de fechar o mennu e verificar se fechou
    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(menuFullElement.getAttribute('aria-hidden')).toBe('true');
    expect(menuFullElement).toHaveStyle({
      opacity: 0
    });
  });

  it('should show registerbox when log out', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByText(/create account/i)).toBeInTheDocument();
  });

  it('should show whishlist and account when log in', () => {
    renderWithTheme(<Menu username="Junior" />);

    expect(screen.queryByText(/login/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/create account/i)).not.toBeInTheDocument();

    // expect(screen.getByText(/whishlist/i)).toBeInTheDocument();
    // expect(screen.getByText(/account/i)).toBeInTheDocument();
  });
});
