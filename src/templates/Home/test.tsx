import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Home from '.';

// Mock para o componente Header
jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>;
    }
  };
});

// Mock para o componente Footer
jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>;
    }
  };
});

describe('<Home />', () => {
  it('should render the Home page', () => {
    renderWithTheme(<Home />);

    // Verifica se o Mock do Header foi chamado
    expect(screen.getByTestId('Mock Header')).toBeInTheDocument();

    // Verifica se o Heading da pagina foi renderizado
    expect(
      screen.getByRole('heading', { name: /A digital Product design agency/i })
    ).toBeInTheDocument();

    // Verifica se o Button (as Link) da pagina foi renderizado
    expect(
      screen.getByRole('link', { name: /Our Services/i })
    ).toBeInTheDocument();

    // Verifica se a Image da pagina foi renderizada
    expect(
      screen.getByRole('img', { name: /people together/i })
    ).toBeInTheDocument();

    // Verifica se o Mock do Footer foi chamado
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument();
  });
});
